var qrcode;

function generateQRCode() {
  var inputText = document.getElementById('inputText').value;
  qrcode = new QRCode("qrcode");

  if (inputText !== '') {
    qrcode.makeCode(inputText);
  }
}

function saveQRCode() {
  if (qrcode !== undefined) {
    var qrCodeImage = document.getElementById('qrcode').querySelector('img');
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var image = new Image();

    image.src = qrCodeImage.src;
    image.onload = function () {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0);
      var link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'qrcode.png';
      link.click();
    };
  }
}
