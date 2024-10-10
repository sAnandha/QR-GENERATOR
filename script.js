let qr;

function generateQRCode() {
  const qrValue = document.getElementById('inputUrl').value;

  if (qrValue) {
    const size = 250;
    qr = new QRious({
      element: document.getElementById('qrCanvas'),
      value: qrValue,
      size: size,
      level: 'H',
      background: '#ffffff',
      foreground: '#000000',
    });

    // Show download button after generating QR code
    document.getElementById('downloadQR').style.display = 'block';
  } else {
    alert("Please enter a valid URL.");
  }
}

function downloadQRCode() {
  const canvas = document.getElementById('qrCanvas');
  const downloadLink = document.createElement('a');
  downloadLink.href = canvas.toDataURL();
  downloadLink.download = 'qr-code.png';
  downloadLink.click();
}

// Generate QR Code on button click
document.getElementById('generateQR').addEventListener('click', generateQRCode);

// Download QR Code on button click
document.getElementById('downloadQR').addEventListener('click', downloadQRCode);
