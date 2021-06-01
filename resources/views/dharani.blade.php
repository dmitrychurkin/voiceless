@extends('layout.app')


@section('title', __('common.breadcrumbs.root'))

@push('styles')
<link rel='stylesheet' href="{{asset('/css/grid.css')}}" type='text/css' media='all' />
<link rel='stylesheet' href="{{asset('/css/lightgallery.css')}}" type='text/css' media='all' />
<link rel='stylesheet' href="{{asset('/css/style-frontend.css')}}" type='text/css' media='all' />
<link rel="stylesheet" href="{{asset('/css/material-icons.css')}}" type='text/css' media='all' />
<link rel='stylesheet' href="{{mix('/css/home.css')}}" type='text/css' media='all' />
@endpush

@push('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js" integrity="sha512-ZuOjyqq409+q6uc49UiBF3fTeyRyP8Qs0Jf/7FxH5LfhqBMzrR5cwbpDA4BgzSo884w6q/+oNdIeHenOqhISGw==" crossorigin="anonymous"></script>
<script src="{{asset('/js/imagesloaded.pkgd.min.js')}}"></script>
<script src="{{asset('/js/lightgallery.min.js')}}"></script>
<script src="{{asset('/js/masonry.pkgd.min.js')}}"></script>
<script src="{{asset('/js/lg-autoplay.min.js')}}"></script>
<script src="{{asset('/js/lg-fullscreen.min.js')}}"></script>
<script src="{{asset('/js/lg-thumbnail.min.js')}}"></script>
<script src="{{asset('/js/gallery.js')}}"></script>
<script src="{{mix('/js/home.js')}}"></script>
@endpush

@section('content')
<section class="jumbo">
    <div class="title">
        <div class="title_container">
            <h1 class="title_h1">{{__('homepage.title.h1')}}</h1>
            <h2 class="title_h2">
                <span>{{__('homepage.title.strong')}}</span>
                <span>{{__('homepage.title.h2')}}</span>
            </h2>
        </div>
    </div>
</section>
<section class="about">
    <div class="about_content">
        <h2 class="section-title">{{__('homepage.about.title')}}</h2>
        <div class="about_description">{{__('homepage.about.description')}}</div>
        <a class="about_link btn secondary" href="{{url('/about')}}">{{__('homepage.about.link')}}</a>
    </div>
</section>
<section class="gallery section">
    <div class="gallery_container section-container">
        <h2 class="section-title">{{__('homepage.gallery.title')}}</h2>
        <div class="tm-pg_frontend" data-id="" data-view="masonry">
            <div class="tm-pg_front_gallery ">
                <div class="tm-pg_front_gallery-masonry tm-pg_front_gallery-masonry-colum-3 tm-pg_animation-fade tm-pg_hover-fade" data-load-more-img="1" data-columns="">
                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/Re-homed Toddy.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Re-homed Toddy</h4>">
                                <img src="{{asset('/uploads/Re-homed Toddy.jpeg')}}" alt="Re-homed Toddy">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Toddy</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/Beach pup with me.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Beach pup with me</h4>">
                                <img src="{{asset('/uploads/Beach pup with me.jpeg')}}" alt="Beach pup with me.jpeg">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Beach pup</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/Chappi.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Chappi</h4>">
                                <img src="{{asset('/uploads/Chappi.jpeg')}}" alt="Chappi">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Chappi</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/Papu small days when we found from strawberry garden.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Papu small days when we found from strawberry garden</h4>">
                                <img src="{{asset('/uploads/Papu small days when we found from strawberry garden.jpeg')}}" alt="Papu small days when we found from strawberry garden">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Papu</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/veera1.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Veera..the brave pup was rescued from drains..had a good life and died</h4>">
                                <img src="{{asset('/uploads/veera1.jpeg')}}" alt="Veera..the brave pup was rescued from drains..had a good life and died">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Veera</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/WhatsApp Image 2021-05-09 at 14.14.10 (1).jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn">
                                <img src="{{asset('/uploads/WhatsApp Image 2021-05-09 at 14.14.10 (1).jpeg')}}" alt="Bruno">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Bruno</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/Shery tripod pup.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Shery tripod pup</h4>">
                                <img src="{{asset('/uploads/Shery tripod pup.jpeg')}}" alt="Shery tripod pup">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Shery</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/rabsi.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Rabsi.. Rescue pup..died of motor cycle accident</h4>">
                                <img src="{{asset('/uploads/rabsi.jpeg')}}" alt="Rabsi.. Rescue pup..died of motor cycle accident">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Rabsi</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div class="tm_pg_gallery-item" data-type="img">
                        <div class="tm_pg_gallery-item-wrapper">
                            <a href="{{asset('/uploads/muthu1.jpeg')}}" class="tm_pg_gallery-item_link" data-effect="fadeIn" data-sub-html="<h4>Muthu when we found</h4>">
                                <img src="{{asset('/uploads/muthu1.jpeg')}}" alt="Muthu when we found">
                                <div class="tm_pg_gallery-item_meta">
                                    <h3 class="tm_pg_gallery-item_title">Muthu</h3>
                                    <p class="tm_pg_gallery-item_description"></p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <a class="gallery_link btn primary" href="{{url('/gallery')}}">{{__('homepage.gallery.link')}}</a>
    </div>
</section>
<section class="blog section">
    <div class="section-container">
        <h2 class="section-title invert">{{__('homepage.blog.title_support')}}:</h2>
        <div class="bank-details">
            <p>Commercial Bank Kalutara Branch</p>
            <p>Account name: N.Dharini</p>
            <p>Account number: 8267000216</p>
        </div>
        <!-- <div class="blog_posts">
            <article class="blog_post">
                <div class="blog_post__img-container">
                    <a href="{{url('/posts/1')}}" class="blog_post__link">
                        <img class="blog_post__img" width="370" height="286" src="{{asset('/img/image6-370x286.jpg')}}" alt="Dogs Hate Hugs? Where’s the Science?" />
                    </a>
                </div>
                <div class="blog_post__caption">
                    <span class="blog_post__pub">21.07.2018</span>
                </div>
                <div class="blog_post__header">
                    <h2 class="blog_post__title">
                        <a href="{{url('/posts/1')}}" class="blog_post__link">Dogs Hate Hugs? Where’s the Science?</a>
                    </h2>
                </div>
            </article>
            <article class="blog_post">
                <div class="blog_post__img-container">
                    <a href="{{url('/posts/2')}}" class="blog_post__link">
                        <img class="blog_post__img" width="370" height="286" src="{{asset('/img/image7-370x286.jpg')}}" alt="How Often Should My Dog Be Groomed?" />
                    </a>
                </div>
                <div class="blog_post__caption">
                    <span class="blog_post__pub">21.07.2019</span>
                </div>
                <div class="blog_post__header">
                    <h2 class="blog_post__title">
                        <a href="{{url('/posts/2')}}" class="blog_post__link">How Often Should My Dog Be Groomed?</a>
                    </h2>
                </div>
            </article>
            <article class="blog_post">
                <div class="blog_post__img-container">
                    <a href="{{url('/posts/3')}}" class="blog_post__link">
                        <img class="blog_post__img" width="370" height="286" src="{{asset('/img/image8-370x286.jpg')}}" alt="The Hardships of Grooming a Dog" />
                    </a>
                </div>
                <div class="blog_post__caption">
                    <span class="blog_post__pub">21.07.2020</span>
                </div>
                <div class="blog_post__header">
                    <h2 class="blog_post__title">
                        <a href="{{url('/posts/3')}}" class="blog_post__link">The Hardships of Grooming a Dog</a>
                    </h2>
                </div>
            </article>
        </div>
        <a class="blog_link btn primary" href="{{url('/posts')}}">{{__('homepage.blog.link')}}</a> -->
    </div>
</section>
<section class="subscription section">
    <div class="subscription_container section-container">
        <div class="subscription_wrapper">
            <h3 class="section-title subscription_title">
                <span>{{__('homepage.subscription.title')}}</span>
                <span>& {{__('homepage.subscription.description')}}</span>
            </h3>
            <aside class="subscription_block">
                <form class="subscription_form" name="subscription">
                    <input class="subscription_input" type="email" name="email" placeholder="{{__('homepage.subscription.placeholder')}}" required />
                    <button class="subscription_btn btn primary" type="submit">{{__('homepage.subscription.action')}}</button>
                </form>
            </aside>
        </div>
    </div>
</section>
@endsection