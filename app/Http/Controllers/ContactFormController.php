<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactFormController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(ContactFormRequest $request)
    {
        [
            'name'     => $name,
            'email'    => $email,
            'referrer' => $referrer,
            'message'  => $message
        ] = $request->validated();

        Mail::send([], [], function ($mes) use ($name, $email, $referrer, $message) {
            $emailBody = <<<EOD
<b>Name</b>:<br/> {$name}<br/><br/>
<b>E-mail</b>:<br/> {$email}<br/><br/>
<b>How did you find me</b>:<br/> {$referrer}<br/><br/>
<b>Message</b>:<br/> {$message}
EOD;

            $mes->from($email, $name)
                ->to(config('mail.from.address'))
                ->subject("Email from {$name}")
                ->setBody($emailBody, 'text/html');
        });

        return response()
            ->json(['message' => __('contacts.form.response')]);
    }
}
