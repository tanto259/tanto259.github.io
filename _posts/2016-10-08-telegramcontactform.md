---
layout: post
title:  "Telegram Bot Contact Form"
date:   2016-10-08
excerpt: "PHP Script to Send Messages from Contact Form to Telegram"
tag:
- Blog
- Tutorial
comments: true
---

<h3>Requirements</h3>

<ul><li>A site with a contact form</li>
<li>Web host or PaaS provider with PHP support (for static sites)</li>
<li>Text editor</li>
<li>A device with Telegram installed</li>
<li>Your own Telegram Bot</li></ul>

<h3>Code</h3>

The PHP script below get the message of a contact form and send it to your Telegram chat.
Before deploying the script please change the [BOT_ID] to your Telegram Bot token without using the "[]" and please change the [CHAT_ID] into your Telegram Chat ID without using the "[]".

~~~ php
<?php
if(trim($_POST["gotcha"]) !== "") {
	header("Location: https://example.com/");
} else {
	if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"]) && isset($_POST["content"])) {
		
		$namespace = str_replace(' ', '%20', $_POST["name"]);
		$subjspace = str_replace(' ', '%20', $_POST["subject"]);
		$whitespace = str_replace(' ', '%20', $_POST["content"]);
		$message = str_replace("\n", '%0A', $whitespace);
		
		$wholeMessage = "Name:"."%0A".$namespace."%0A"."%0A"."Email:"."%0A".$_POST["email"]."%0A"."%0A"."Subject:"."%0A".$subjspace."%0A"."%0A"."Message:"."%0A".$message;
		$data = "https://api.telegram.org/bot[BOT_ID]/sendmessage?chat_id=[CHAT_ID]&text=".$wholeMessage;
	
		$response = file_get_contents($data);
		
		header("Location: https://example.com/thanks/");
	} else {
		header("Location: https://example.com/contact");
	}
}
?>
~~~

<h3>Explanation</h3>

So once a user sends his/her message, the PHP script will check whether the gotcha field is filled or not, if the field is filled, the user is redirected directly to example.com without the message delivered to you.
If the field is empty, the bot will check whether the name, email, subject and content fields are filled. If they are, the bot will sends the message and if not, the user is redirected directly to example.com/contact. 
Once the message is send, the user will be redirected to example.com/thanks and you will recieve the message on your Telegram chat.

<code>str_replace</code> is used since some PaaS provider and web host sees whitespaces the user inputted and remove them.
This changes whitespace to <code>%20%</code> and line break into <code>%0A</code>.
<pre><code>$namespace = str_replace(' ', '%20', $_POST["name"]);
$subjspace = str_replace(' ', '%20', $_POST["subject"]);
$whitespace = str_replace(' ', '%20', $_POST["content"]);
$message = str_replace("\n", '%0A', $whitespace);</code></pre>

In order for this script to work, you need 5 input in your contact form: name, email, subject, content and gotcha. The gotcha input is a honeypot, make sure it is invisible using <code>style="display:none"</code>. Most bot would just fill every input in a form. Make sure your form method is POST and the action is pointing to your PHP script location.

<h3>Code License</h3>

The MIT License (MIT)

Copyright (c) 2016-<span class="year"></span> Hartanto Ario Widjaya

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
