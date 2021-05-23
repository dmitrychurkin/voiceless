@extends('layout.app')

@section('title', __('common.breadcrumbs.contacts'))

@push('styles')
<link rel='stylesheet' href="{{mix('/css/contacts.css')}}" type='text/css' media='all' />
@endpush

@push('scripts')
<script src="{{mix('/js/contacts.js')}}"></script>
@endpush

@section('content')
<x-breadcrumb :slugs="[['text' => __('common.breadcrumbs.contacts')]]" />
<div class="contacts_wrapper">
    <div class="contacts_container container">
        <h1 class="contacts_title">{{__('contacts.title')}}</h1>
        <div class="contacts_contact">
            {{__('contacts.phone')}}: <a href="tel:+94776297005">+94776297005</a>
        </div>
        <div class="contacts_contact">
            {{__('contacts.email')}}: <a href="mailto:dharanishivam@gmail.com">dharanishivam@gmail.com</a>
        </div>
        <div class="contacts_contact">
            {{__('contacts.address')}}: <span>New Road, Kalutara South, Sri Lanka</span>
        </div>
        <div class="contacts_contact">
            {{__('contacts.contact_person')}}: <span>Dharani Sivam</span>
        </div>
        <div class="contacts_notice">{{__('contacts.notice')}}</div>
        <div class="contacts_form-wrapper">
            <form class="contacts_form" name="contacts">
                <input class="contacts_input" name="name" placeholder="{{__('contacts.form.name')}}*" maxlength="255" required />
                <input class="contacts_input" type="email" name="email" placeholder="{{__('contacts.form.email')}}*" required maxlength="255" />
                <input class="contacts_input" name="referrer" placeholder="{{__('contacts.form.referrer')}}" maxlength="500" />
                <textarea class="contacts_textarea" name="message" placeholder="{{__('contacts.form.message')}}" maxlength="2000"></textarea>
                <button class="contacts_btn btn secondary" type="submit">{{__('contacts.form.action')}}</button>
            </form>
        </div>
    </div>
</div>
@endsection
