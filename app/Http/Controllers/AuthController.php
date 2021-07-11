<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthenticateRequest;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Services\AuthService;
use App\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('throttle:5,1')->only('authenticate');
        $this->middleware('auth:sanctum')->only('logout');
    }

    /**
     * Authenticates user
     *
     * @param AuthenticateRequest $request
     * @param AuthService $authService
     * @return \Illuminate\Http\Response
     *         |\Illuminate\Contracts\Routing\ResponseFactory
     *         |\Illuminate\Http\RedirectResponse
     *         |\Illuminate\Http\JsonResponse
     */
    public function authenticate(AuthenticateRequest $request, AuthService $authService)
    {
        $authService->authenticate($request->getDto());

        return $request->wantsJson()
            ? response(null)
            : redirect()->intended('dashboard');
    }

    /**
     * Logout user
     *
     * @param Request $request
     * @param AuthService $authService
     * @return \Illuminate\Http\Response
     *         |\Illuminate\Contracts\Routing\ResponseFactory
     *         |\Illuminate\Http\Redirect
     */
    public function logout(Request $request, AuthService $authService)
    {
        $authService->logout();

        return $request->wantsJson()
            ? response(null)
            : redirect()->route('dashboard.root');
    }

    /**
     * Sends password reset link via email
     *
     * @param ForgotPasswordRequest $request
     * @param AuthService $authService
     * @return \Illuminate\Http\JsonResponse
     *         |\Illuminate\Http\RedirectResponse
     */
    public function forgot(ForgotPasswordRequest $request, AuthService $authService)
    {
        $status = $authService->forgot($request->getDto());

        return $request->wantsJson()
            ? response()->json(['message' => __($status)])
            : back()->with(['status' => __($status)]);
    }

    /**
     * Displays password reset form
     *
     * @param Request $request
     * @param string $passwordResetToken
     * @return \Illuminate\View\View
     *         |\Illuminate\Contracts\View\Factory
     *         |void
     */
    public function showPasswordReset(Request $request, string $passwordResetToken)
    {
        if (!Arr::exists($request->query(), 'email')) {
            return abort(404);
        }

        $email = $request->query()['email'];
        $passwordResetRecord = DB::table('password_resets')->where('email', $email)->first();

        if (!$passwordResetRecord) {
            return abort(404);
        }

        if (!Hash::check($passwordResetToken, $passwordResetRecord->token)) {
            return abort(404);
        }

        $isPasswordResetTokenExpired = now()
            ->parse($passwordResetRecord->created_at)
            ->addMinutes(config('auth.passwords.users.expire'))
            ->isPast();
        if ($isPasswordResetTokenExpired) {
            return abort(404);
        }

        return view('admin');
    }

    /**
     * Resets user's password
     *
     * @param ResetPasswordRequest $request
     * @return \Illuminate\Http\JsonResponse
     *         |\Illuminate\Http\RedirectResponse
     */
    public function reset(ResetPasswordRequest $request)
    {
        $validatedCredentials = $request->validated();

        $user = User::where('email', $validatedCredentials['email'])->first();
        if (Hash::check($validatedCredentials['password'], $user->password)) {
            return $request->wantsJson()
                ? response()->json([
                    'message' => __('passwords.password_repeat')
                ])
                : back()->withErrors(['password' => [__('passwords.password_repeat')]]);
        }

        $status = Password::reset(
            //$request->only('email', 'password', 'password_confirmation', 'token'),
            $validatedCredentials,
            function ($user, $password) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        $responseData = ['message' => __($status)];
        if ($status == Password::PASSWORD_RESET) {
            return $request->wantsJson()
                ? response()->json($responseData)
                : redirect()->route('login')->with('status', __($status));
        }

        return $request->wantsJson()
            ? response()->json($responseData)
            : back()->withErrors(['email' => [__($status)]]);
    }
}
