<x-mail::message>
# Hi, {{ $firstName }}!

**{{ $code }}** is your verification code. This is only valid for 10 minutes.

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
