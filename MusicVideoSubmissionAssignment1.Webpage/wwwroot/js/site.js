// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
document.body.className = 'fade';
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function () {
        document.body.className = '';
    }, 230);
});