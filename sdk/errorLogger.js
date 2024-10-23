(function () {
  console.log("Welcome to the error logger");

  function loadHtml2Canvas() {
    return new Promise((resolve, reject) => {
      if (window.html2canvas) {
        resolve(window.html2canvas);
      } else {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        script.onload = () => resolve(window.html2canvas);
        script.onerror = () => reject(new Error("Failed to load html2canvas"));
        document.head.appendChild(script);
      }
    });
  }

  function captureScreenshot() {
    return loadHtml2Canvas().then((html2canvas) => {
      return html2canvas(document.body).then((canvas) => {
        return canvas.toDataURL("image/png");
      });
    });
  }

  const loggingEndpoint = "http://localhost:3000/log";

  function sendErrorLog(errorData) {
    fetch(loggingEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(errorData),
    }).catch((err) => console.error("Error sending log:", err));
  }

  function handleGlobalError(message, source, lineno, colno, error) {
    captureScreenshot().then(function (imgData) {
      const img = new Image();
      img.src = imgData;
    });

    const errorData = {
      message: message || "Error occurred",
      source: source,
      lineno: lineno,
      colno: colno,
      stack: error ? error.stack : null,
      timestamp: new Date().toISOString(),
    };

    sendErrorLog(errorData);
  }

  window.onerror = handleGlobalError;

  window.onunhandledrejection = function (event) {
    console.log("erro from unhandled", error);

    const errorData = {
      message: event.reason ? event.reason.message : "Unhandled rejection",
      stack: event.reason ? event.reason.stack : null,
      timestamp: new Date().toISOString(),
    };

    sendErrorLog(errorData);
  };

  window.logError = function (error) {
    console.log("erro from logEror", error);

    const errorData = {
      message: error.message || "Manual error log",
      stack: error.stack || null,
      timestamp: new Date().toISOString(),
    };

    sendErrorLog(errorData);
  };
})();
