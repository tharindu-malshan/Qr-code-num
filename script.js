const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrCodeContainer = document.getElementById('qrCode');
let qrCode;

generateBtn.addEventListener('click', () => {
    const idNumber = document.getElementById('idNumber').value.trim();

    // Validation for exactly 12 digits
    if (!/^\d{12}$/.test(idNumber)) {
        alert('Please enter a valid ID number.');
        return;
    }

    // Clear previous QR code
    qrCodeContainer.innerHTML = '';
    qrCode = new QRCode(qrCodeContainer, {
        text: idNumber,
        width: 256,
        height: 256,
    });

    downloadBtn.style.display = 'block';
});

downloadBtn.addEventListener('click', () => {
    if (!qrCode) return;

    const qrCanvas = qrCodeContainer.querySelector('canvas');
    if (!qrCanvas) {
        alert('No QR code found to download.');
        return;
    }

    const qrDataURL = qrCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = qrDataURL;
    link.download = 'SriLankaID_QR.png';
    link.click();
});
