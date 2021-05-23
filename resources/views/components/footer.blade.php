<footer class="footer">
    <div class="footer_container section-container">
        <div class="footer_copyright">
            &#169; {{now()->year}} <a class="footer_policy-link" href="{{route('home')}}">{{config('app.name')}}</a>. {{__('common.footer.copyright')}}.
            <span>
                <a class="footer_policy-link" href="{{url('/privacy-policy')}}">{{__('common.footer.privacy')}}</a>
                -
                <a class="footer_policy-link" href="{{url('/cookie-policy')}}">{{__('common.footer.cookie')}}</a>
            </span>
        </div>
        <div class="footer_social">
            <a class="footer_social-link" href="#">
                <span>instagram</span>
            </a>
            <a class="footer_social-link" href="#">
                <span>pinterest</span>
            </a>
            <a class="footer_social-link" href="#">
                <span>facebook</span>
            </a>
        </div>
    </div>
</footer>