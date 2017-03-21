---
layout: legal
title: PGP Signing Policy
permalink: /pgp
---
This PGP Signing Policy governs the manner in which I sign PGP keys submitted by the requester and data.

A signed text version is available at <a href="{{ site.url }}/pgp.txt" target="_blank" rel="noopener noreferrer">{{ site.url }}/pgp.txt</a>.

Please refer to the <a href="{{ site.url }}/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> to see how I would handle your personal information.

### PGP Keys Information

**Primary Key**
<pre><code>sec   rsa8192 2016-12-31 [C]
      0CCF 2D8B 340C 03BF 1D45  D076 A391 A67E 9057 709D
uid           Hartanto Ario Widjaya (<span class="mailnolink" mail="pbagnpg@gnagb259.anzr"></span>)
ssb   rsa8192 2016-12-31 [S]
      ECCF CE73 5CF0 8750 4429  DA27 B234 657D 2E21 7244
ssb   rsa8192 2016-12-31 [E]
      FDF4 F01B C4E1 700D 218F  BA5F B5E3 4198 309F AF32
ssb   rsa8192 2016-12-31 [A]
      2FD2 7277 B617 206C 06E1  C561 43A6 AE3E 85C2 DD63</code></pre>
	  
**Release Signing Key**
<pre><code>sec   rsa4096 2016-12-31 [SC]
      435D C2EE DE2D D1EE FFED  9A1B 2C4D 19A0 EBE3 58FC
uid           Hartanto Ario Widjaya (Release Signing Key) (<span class="mailnolink" mail="pbagnpg@gnagb259.anzr"></span>)</code></pre>

### Data Signing

I will sign all important data through my primary key only. I will not sign any of my releases with this key.

My releases will be signed using my release signing key.

### Key Signing

I will sign all key using my primary key only.

**Procedure**
1. The requester must fulfill the requirements below.
2. The requester send all requirements to my email listed here, the email should be signed and encrypted.
3. If all requirements are fullfilled, I will reply to the requester with his/her signed key.
4. The requester should, if wanted, combined the signed key with his/her primary key.

### Level 3 Key Signing Requirements

I will only sign key that met this criteria:
* I have met the requester in person.
* The requester must fulfill Level 2 Key Signing Requirements.

I will not sign signing-only key at this level.

### Level 2 Key Signing Requirements

**Authentication using Electronic Mail**<br/>
Send a color scan of your government-issued identification with your PGP fingerprint handwritten on it.

I will only then sign key that met this criteria:
* The requester have send a copy of valid government-issued identification and key fingerprints.
* Have a valid email address listed in the key.
* The requester listed his/her key in a social media or his/her website.
* The public key can be found at a public keyserver, such as MIT or SKS Keyserver.

**Authentication using Keybase**<br/>
Make a folder in your Keybase Filesystem with the following route <code>/keybase/private/[your username],tanto259</code>
Inside the folder, put a color scan of your government-issued identification with your PGP fingerprint.

I will only then sign key that met this criteria:
* The requester have send a copy of valid government-issued identification and key fingerprints.
* The requester can verify their social media and domains through Keybase.
* Have a valid email address listed in the key.

**Authentication of Signing-Only Key**<br/>
I will only sign key that met this criteria:
* The requester have his main key signed previously.
* The signing-only key must be signed with the main key.

### Level 1 and Level 0 Key Signing Requirements

I will not sign any key in this levels.

### Expired Key Signing Requirements

Should the key expires, the requester must met this following criteria for their new key to be signed:
* The requester must be able to submit a new key fingerprint.
* The new key must be signed by the old key.
* If the new key have a different email address, the requester must be able to verify the new address.

This policy was last updated on January 29, 2016