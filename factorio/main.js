function copyText() {
    var copyTextarea = document.getElementById("server-address");
    copyTextarea.select();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(copyTextarea.value);
    } else {
        console.log("Copy not supported on this browser");
        document.execCommand("copy");
        alert("Please update your browser");
    }

    alert("Text copied to clipboard!");
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");

    // address-copy-btn
    document.getElementById("address-copy-btn").addEventListener("click", copyText);
})