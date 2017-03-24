---
layout: post
title:  "Root CA's Trust"
date:   2017-02-12
excerpt: "Trusting a Root Certification Authority"
tag:
- Blog
- Security
- SSL/TLS
comments: true
---
Certification Authority or CA is a group which issues a digital certificate. In the relationship between parties, a CA is a trusted third-party. Those CA issues root certificate, a self-signed public key certificate that identifies the CA. They acts as a trust anchor for a digital certificate, therefore they need to be both secured and trustworthy. But in some cases, the CA accidently or intentionally violate the key's security.

A trusted root certificate is included directly in a user's operating system or browsers. Windows user can run <code>certmgr.msc</code> to see their certificates list, Mac users can find a list <a href="https://support.apple.com/en-us/HT20285" target="_blank" rel="noopener noreferrer">here</a> and Linux users can see <code>/etc/ssl/certs</code>. Mozilla users can also find their browser's seperate list under <code>Preferences > Advanced > Certificates > View Certificates</code>. While Android user can find their list under <code>Settings > Security > Trusted credentials</code>.

For Let's Encrypt certificates, the root certificate is <a href="https://crt.sh/?caid=7394" target="_blank" rel="noopener noreferrer">ISRG Root X1</a>, cross-signed with <a href="https://crt.sh/?caid=276" target="_blank" rel="noopener noreferrer">DST Root CA X3</a>. New CA would sometimes cross-signed their key with another trusted CA while waiting for their root certificates to be included in operating systems and browsers.

### Untrusted Root Certification Authority

Below are some list of the Root Certificate which I have untrusted from my devices:
<table>
<tbody>
<tr>
<th>Name</th>
<th>Reason</th>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=5969" target="_blank" rel="noopener noreferrer">WoSign ECC</a></td>
<td rowspan="6"><a href="https://groups.google.com/d/topic/mozilla.dev.security.policy/k9PBmyLCi8I/discussion" target="_blank" rel="noopener noreferrer">Mis-issuance,<br />Certificate Backdating</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=1450" target="_blank" rel="noopener noreferrer">WoSign China</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=1425" target="_blank" rel="noopener noreferrer">WoSign</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=5919" target="_blank" rel="noopener noreferrer">WoSign G2</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=84" target="_blank" rel="noopener noreferrer">StartCom CA</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=239" target="_blank" rel="noopener noreferrer">StartCom CA G2</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=347" target="_blank" rel="noopener noreferrer">CNNIC Root</a></td>
<td><a href="https://security.googleblog.com/2015/03/maintaining-digital-certificate-security.html" target="_blank" rel="noopener noreferrer">Mis-issuance,<br/>leading to MiTM attacks</a></td>
</tr>
</tbody>
</table>
Instruction to untrust a CA can be found in <a href="https://certsimple.com/blog/control-the-ssl-cas-your-browser-trusts" target="_blank" rel="noopener noreferrer">this blog article by CertSimple</a>.

### Under Watchlist Root Certification Authority

There are also other root certificates that I put in my own "watch list", these CA was given a second chance as they quickly recognize and amend their mistakes.
<table>
<tbody>
<tr>
<th>Name</th>
<th>Reason</th>
</tr>
<tr>
<td><a href="https://chromium.googlesource.com/chromium/src/+/master/net/data/ssl/symantec/roots" target="_blank" rel="noopener noreferrer">Symantec Root Certificates</a></td>
<td><a href="https://groups.google.com/a/chromium.org/d/topic/blink-dev/eUAKwjihhBs/discussion" target="_blank" rel="noopener noreferrer">Mis-issuance</a></td>
</tr>
</tbody>
</table>
Entries in this "watch list" will be removed one year (365 days) after the last incident, considering there are no further incidents. 

### Free Certificates Watch List

This root CAs have issues free certificate which brings very low trust:
<table>
<tbody>
<tr>
<th>Name</th>
<th>Reason</th>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=276" target="_blank" rel="noopener noreferrer">DST Root CA X3</a></td>
<td rowspan="2"><a href="https://letsencrypt.org" target="_blank" rel="noopener noreferrer">Let's Encrypt</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=7394" target="_blank" rel="noopener noreferrer">ISRG Root X1</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=1388" target="_blank" rel="noopener noreferrer">COMODO ECC CA</a></td>
<td rowspan="2"><a href="https://blog.cloudflare.com/introducing-universal-ssl/" target="_blank" rel="noopener noreferrer">Cloudflare's Universal SSL</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=1112" target="_blank" rel="noopener noreferrer">COMODO RSA CA</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=1425" target="_blank" rel="noopener noreferrer">WoSign</a></td>
<td><a href="https://www.wosign.com/english/freeSSL.htm" target="_blank" rel="noopener noreferrer">WoSign, untrusted</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=84" target="_blank" rel="noopener noreferrer">StartCom CA</a></td>
<td rowspan="2"><a href="https://www.startssl.com/?app=1" target="_blank" rel="noopener noreferrer">StartCom, untrusted</a></td>
</tr>
<tr>
<td><a href="https://crt.sh/?caid=239" target="_blank" rel="noopener noreferrer">StartCom CA G2</a></td>
</tr>
</tbody>
</table>

### Side-effects of Untrusting Root CA
* Some applications won't run or install as they are signed using a key which have the untrusted root certificate.
* Some websites won't open as they are secured using the untrusted certificate.