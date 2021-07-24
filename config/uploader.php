<?php

return [
    'default' => env('MEDIA_UPLOADER', 'imgBB'),

    'drivers' => [
        'imgBB' => [
            'key' => env('IMGBB_API_KEY', ''),
            'endpoint' => env('IMGBB_ENDPOINT', 'https://api.imgbb.com/1/upload'),
            'expiration' => env('IMGBB_EXPIRATION', null)
        ]
    ]
];
