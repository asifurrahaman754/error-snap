interface config {
  projectId: string;
}

interface errorData {
  type: string;
  projectId?: string;
  message: string | Event;
  source?: string;
  lineno?: number | undefined;
  colno?: number | undefined;
  stack: string | null | undefined;
  timestamp?: string;
}

export default class ErrorSnap {
  projectId: string;

  constructor(config: config) {
    this.projectId = config.projectId;
  }

  initialize() {
    console.log("Initilized ErrorSnap");
    this.initErrorHandling();
  }

  initErrorHandling() {
    window.onerror = (message, source, lineno, colno, error) => {
      this.logError({
        type: "error",
        message,
        source,
        lineno,
        colno,
        stack: error ? error.stack : null,
      });
    };

    // Handle unhandled promise rejections
    window.onunhandledrejection = (event) => {
      this.logError({
        type: "unhandledrejection",
        message: event.reason ? event.reason.message : "Unhandled Rejection",
        stack: event.reason ? event.reason.stack : null,
      });
    };
  }

  // loadHtml2Canvas() {
  //   return new Promise((resolve, reject) => {
  //     if (window.html2canvas) {
  //       resolve(window.html2canvas);
  //     } else {
  //       const script = document.createElement("script");
  //       script.src =
  //         "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
  //       script.onload = () => resolve(window.html2canvas);
  //       script.onerror = () => reject(new Error("Failed to load html2canvas"));
  //       document.head.appendChild(script);
  //     }
  //   });
  // }

  // captureScreenshot() {
  //   return loadHtml2Canvas().then((html2canvas) => {
  //     return html2canvas(document.body).then((canvas) => {
  //       return canvas.toDataURL("image/png");
  //     });
  //   });
  // }

  logError(errorData: errorData) {
    const errorPayload = {
      ...errorData,
      projectId: this.projectId,
      timestamp: new Date().toISOString(),
    };

    console.log("test erorr", errorPayload);

    fetch("http://localhost:3000/log", {
      method: "POST",
      body: JSON.stringify(errorPayload),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => console.error("Failed to log error:", err));
  }
}
