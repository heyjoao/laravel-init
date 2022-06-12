<!DOCTYPE html>
<html class="soon" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Site em Desenvolvimento</title>
        <link rel="stylesheet" href="{{ mix('assets/css/style.css') }}">
    </head>
    <body class="soon text-center">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <img src="{{ asset('assets/img/logo.png') }}" data-aos="fade-down">
                    <h1 class="text-muted text-uppercase mt-4" data-aos="fade-up">Em breve um novo site!</h1>
                    <script src="{{ mix('assets/js/app.js') }}"></script>
                </div>
            </div>
        </div>
    </body>
</html>
