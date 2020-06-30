//clicking on document flips card to download file
var imgIcon = document.getElementById('img1');


window.onclick = function (event) {
    // need to add file download
        var link = document.createElement("a");
        link.download = "test";
        link.href = "./test_form.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
}