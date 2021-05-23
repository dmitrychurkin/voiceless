@props([
    'root' => [
        'url' => route('home'),
        'text' => __('common.breadcrumbs.root')
    ],
    'slugs' => []
])

<div class="breadcrumbs">
    <div class="breadcrumbs_container container header_wrap">
        <div class="breadcrumbs_item">
            <a class="breadcrumbs_item-link" href="{{$root['url']}}" rel="{{Str::lower($root['text'])}}" title="{{$root['text']}}">{{$root['text']}}</a>
        </div>
        @foreach ($slugs as $slug)
            <div class="breadcrumbs_item breadcrumbs_separator">
                <span class="breadcrumbs_item-target">/</span>
            </div>
            <div class="breadcrumbs_item">
                @if (Arr::exists($slug, 'url'))
                    <a class="breadcrumbs_item-link" href="{{$slug['url']}}" rel="{{Str::lower($slug['text'])}}" title="{{$slug['text']}}">{{$slug['text']}}</a>
                @else
                    <span class="breadcrumbs_item-target">{{$slug['text']}}</span>
                @endif
            </div>
        @endforeach
    </div>
</div>