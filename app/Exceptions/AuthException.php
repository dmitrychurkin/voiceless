<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;

final class AuthException extends Exception
{
    /**
     * @var string
     */
    private $userMessage;

    public function __construct(string $userMessage)
    {
        $this->userMessage = $userMessage;
        parent::__construct($userMessage);
    }

    /**
     * Report the exception.
     *
     * @return bool|null
     */
    public function report()
    {
        return false;
    }

    /**
     * Render the exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function render(Request $request)
    {
        return $request->wantsJson()
            ? response()->json(['message' => __($this->userMessage)])
            : back()->withErrors(['email' => __($this->userMessage)]);
    }
}
