<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Voiceless - @yield('title')</title>
        <link rel='dns-prefetch' href='//fonts.googleapis.com' />
        <!-- Fonts -->
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900&#038;subset=latin' type='text/css' media='all' />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.0/css/font-awesome.min.css" integrity="sha512-I8lSB676wT2jGSNnvIhbYGqHMiZOc0+cl18soJSWPvJCkGm8xnTcXZafn2xTf1woMXz1AY3Z1Vd/qAPvjXB4Kw==" crossorigin="anonymous" />
        <link rel='stylesheet' href='//fonts.googleapis.com/css?family=PT+Sans%3A400%7CRighteous%3A400%7CRaleway%3A400%2C700%2C600%7CSyncopate%3A400&#038;subset=latin&#038;ver=4.9.8' type='text/css' media='all' />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/alertify.min.css"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/css/themes/default.min.css"/>
        <link rel='stylesheet' href="{{mix('/css/theme.css')}}" type='text/css' media='all' />
        @stack('styles')
        <script src="//cdn.jsdelivr.net/npm/alertifyjs@1.13.1/build/alertify.min.js"></script>
        @stack('scripts')
    </head>
    <body class="{{Route::current()->getName()}}">
        <div class="page-preloader-cover">
            <div class="page-preloader">
                <div class="page-preloader__cube "></div>
            </div>
        </div>
        <x-header />
        @yield('content')
        <x-footer />
    </body>
</html>