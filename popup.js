document.addEventListener("DOMContentLoaded", async () => {
    const qrCodeContainer = document.getElementById("qrCode");
  
    const browserAPI = chrome || browser;
  
    const [tab] = await browserAPI.tabs.query({ active: true, currentWindow: true });
  
  
    if (tab && tab.url) {
      const qrCode = new QRCode(qrCodeContainer, {
        text: tab.url,
        width: 256,
        height: 256,
      });
    } else {
      qrCodeContainer.textContent = "Unable to fetch the URL.";
    }
  });
  