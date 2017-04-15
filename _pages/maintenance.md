---
layout: error
title: Under Maintenance
sitemap: false
permalink: /maintenance
nolist: true
---
{% if site.maintenance == 'false' %}
<script src="{{ site.url }}/assets/js/redirect.js" integrity="sha512-txt5W/Xe2YLms0fVRg181kcmIv7bfbBxQmOszu5f7cHVyWRVnNJCdnZrCh/7Fe0Dh7xC4hlVQ0ZQ05iVQhYw/w==" crossorigin="anonymous"></script>
<noscript>Maintenance is done, please <a href="{{ site.url }}" rel="noopener noreferrer">click here</a> to be redirected back to home page.</noscript>
{% else %}
<p>Site is currently undergoing some maintenance.</p>
<p>Please wait until we finish the maintenance. If you need immediate assistance, please send us an email at <span class="mailno" mail="pbagnpg@gnagb259.anzr"><noscript>(Javascript Disabled? <a href="https://spamty.eu/mail/v4/399/1NSk15fyQw1ac1e680/" target="_blank" rel="noopener nofollow noreferrer">Click Here</a>)</noscript></span> instead. We apologize for any inconvenience</p>
{% endif %}