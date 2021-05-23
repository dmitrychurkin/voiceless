<header class="header">
    <div class="header_wrap">
        <div class="header_flex">
            <div class="branding">
                <div class="branding_logo">
                    <a class="branding_logo-link" href="{{route('home')}}" rel="home"></a>
                </div>
            </div>
            <nav class="js-navigation navigation" role="navigation">
                <button class="navigation_toggle" aria-controls="main-menu" aria-expanded="false">
                    <i class="fa fa-bars"></i>
                    <span>Menu</span>
                </button>
                <ul id="main-menu" class="navigation_menu">
                    <li class="navigation_menu-item {{Request::is('/') ? 'active' : ''}}">
                        <a href="{{route('home')}}">Home</a>
                    </li>
                    <li class="navigation_menu-item {{Request::is('/about') ? 'active' : ''}}">
                        <a href="{{url('/about')}}">About</a>
                    </li>
                    <li class="navigation_menu-item {{Request::is('/gallery') ? 'active' : ''}}">
                        <a href="{{url('/gallery')}}">Gallery</a>
                    </li>
                    <li class="navigation_menu-item {{Request::is('/contacts') ? 'active' : ''}}">
                        <a href="{{route('contacts')}}">Contacts</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</header>