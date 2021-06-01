<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="{{asset('/favicon.ico')}}" />
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="{{asset('/manifest.json')}}" />
    <title>Voiceless | Admin panel - {{Str::ucfirst(Route::currentRouteName())}}</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <script src="{{mix('/js/admin.js')}}" defer></script>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="app"></div>
  </body>
</html>