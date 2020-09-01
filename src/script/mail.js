function sendMail() {
    var link = "mailto:ariirwandi13@gmail.com" +
        "?cc= " +
        "&subject=" + escape("Web Portofolio") +
        "&body=" + escape(document.getElementById('myText').value);

    window.location.href = link;
}