// Vercel Speed Insights initialization
// This script initializes Speed Insights for static HTML sites
(function() {
  // Initialize the queue
  window.si = window.si || function() {
    (window.siq = window.siq || []).push(arguments);
  };
  
  // Load the Speed Insights script
  var script = document.createElement('script');
  script.defer = true;
  script.src = '/_vercel/speed-insights/script.js';
  script.setAttribute('data-sdkn', '@vercel/speed-insights');
  script.setAttribute('data-sdkv', '1.3.1');
  
  // Add the script to the document
  if (document.head) {
    document.head.appendChild(script);
  }
})();
