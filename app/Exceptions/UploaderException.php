<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Request;

class UploaderException extends Exception
{
    private int $status;

    public function __construct(int $status, string $message)
    {
        $this->status = $status;
        $this->message = $message;
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
        // TODO: make message user friendly
        return response()->json(['message' => $this->message], $this->status);
    }
}
