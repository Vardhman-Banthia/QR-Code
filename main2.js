// Generate QR code using current page URL
var qr = new QRCode(document.getElementById("qrcode"), {
	width: 200,
	height: 200
});
qr.makeCode("https://www.apollohospitals.com/");

// Display current page URL
// document.getElementById("url").innerHTML = window.location.href;


// // Generate QR code with text
// var qr = qrcode(0, "L");
// qr.addData("Hello, world!");
// qr.make();

// // Get QR code image as data URI
// var qrCodeData = qr.createDataURL();

// // Display QR code image
// var qrCodeImg = document.createElement("img");
// qrCodeImg.src = qrCodeData;
// document.body.appendChild(qrCodeImg);
