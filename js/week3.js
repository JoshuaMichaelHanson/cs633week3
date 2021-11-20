document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
});

// or
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  
// usage
docReady(function() {
    // DOM is loaded and ready for manipulation here
});