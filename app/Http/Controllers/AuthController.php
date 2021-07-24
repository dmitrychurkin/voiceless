<?php

namespace App\Http\Controllers;

use App\Http\Requests\{AuthenticateRequest, ForgotPasswordRequest, ResetPasswordRequest};
use App\Services\Auth\Auth as AuthService;
use Illuminate\Http\Request;

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
     * @param string $passwordResetToken
     * @return \Illuminate\View\View
     *         |\Illuminate\Contracts\View\Factory
     *         |void
     */
    public function showPasswordReset(string $passwordResetToken, AuthService $authService)
    {
        return $authService->showPasswordReset($passwordResetToken)
            ? view('admin')
            : abort(404);
    }

    /**
     * Resets user's password
     *
     * @param ResetPasswordRequest $request
     * @param AuthService $authService
     * @return \Illuminate\Http\JsonResponse
     *         |\Illuminate\Http\RedirectResponse
     */
    public function reset(ResetPasswordRequest $request, AuthService $authService)
    {
        $status = $authService->reset($request->getDto());

        return $request->wantsJson()
            ? response()->json(['message' => __($status)])
            : redirect()->route('login')->with('status', __($status));
    }
}
