<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;

final class AuthException extends Exception
{
    /** @var string */
    private string $userMessage;

    /** @var string */
    private string $fieldName;

    public function __construct(string $userMessage, string $fieldName = 'email')
    {
        $this->userMessage = $userMessage;
        $this->fieldName = $fieldName;
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
        $message = __($this->userMessage);

        return $request->wantsJson()
            ? response()->json(['message' => $message])
            : back()->withErrors([$this->fieldName => $message]);
    }
}
