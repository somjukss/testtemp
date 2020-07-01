//clicking on document flips card to download file
var imgIcon = document.getElementById('img1');


function onClickSave(id) {
    // need to add file download
    console.log(id);
    if(id === 'img1'){
        var link = document.createElement("a");
        link.download = "test_form";
        link.href = "./test_form.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        delete link;
    }
}