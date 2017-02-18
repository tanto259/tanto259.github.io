function calcPass() {
	try {
		var typePass = document.getElementById("type");
		var hmacText = document.getElementById("passphrase");
		var hmacKey = document.getElementById("email");
		var genNum = document.getElementById("generation");
		
		var shaObj = new jsSHA(
			"SHA3-512",
			"TEXT",
			{numRounds: parseInt(genNum.value, 10)}
		)
		shaObj.update(typePass.value);
		
		var shaOutput = shaObj.getHash("HEX");
		
		var hmacObj = new jsSHA(
			"SHA3-512",
			"TEXT"	
		);
		hmacObj.setHMACKey(
			hmacKey.value,
			"TEXT"
		);
		hmacObj.update(hmacText.value);
		
		var hmacOutput = hmacObj.getHMAC("HEX");
		
		scrypt_module_factory(function (scrypt) {
			var keyBytes = scrypt.crypto_scrypt(scrypt.encode_utf8(shaOutput), scrypt.encode_utf8(hmacOutput), 16384, 8, 1, 64);
			var passWord = scrypt.to_hex(keyBytes);
			var pwd = window.btoa(passWord);

			var n0 = pwd.lastIndexOf("0");
			var n1 = pwd.lastIndexOf("1");
			var n2 = pwd.lastIndexOf("2");
			var n3 = pwd.lastIndexOf("3");
			var n4 = pwd.lastIndexOf("4");
			var n5 = pwd.lastIndexOf("5");
			var n6 = pwd.lastIndexOf("6");
			var n7 = pwd.lastIndexOf("7");
			var n8 = pwd.lastIndexOf("8");
			var n9 = pwd.lastIndexOf("9");
			
			var endmath = Math.max(n0, n1, n2, n3, n4, n5, n6, n7, n8, n9);
			var endnum = endmath + 1;
			var beginnum = endnum - 16;
			
			var passfin = pwd.slice(beginnum, endnum);
			var resultfinal = document.getElementById("result");
			
			resultfinal.value = passfin	
		});
	} catch(e) {
		alert(e.message);
	}
}