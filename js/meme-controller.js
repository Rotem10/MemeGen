'use strict';

function onInit() {
    // createImgs()
    renderGallery(gImgs)

    // gCanvas.addEventListener("keyup", drawText, true);
    // var input = document.getElementById('text')
    // input.addEventListener("keypress", drawText, true);
    // gCanvas.addEventListener("keydown", drawText, true);
    // var input = document.getElementById('text')
    // input.addEventListener('keydown', function(event) {
    //     const key = event.key;
    //     if (key === "Backspace" || key === "Delete") {
    //         console.log('delet');
    //         deleteText()
    //     }
    // });
}

function renderGallery(imgs) {
    var strHtmls = imgs.map(img => {
        return `
        <img class="${img.id}" src="${img.url}" onclick="onImgClicked(${img.id},event)">
         `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}

function onImgClicked(imgId, ev) {
    ev.preventDefault()
    addImgToEditor(imgId)
    document.querySelector('.gallery-container').style.display = 'none';
    document.querySelector('.editor-container').style.display = 'block';
}

function onWrite(ev, text) {
    const { keyCode } = ev;
    if (keyCode === 8 || keyCode === 46) deleteText()
    else drawText(text)
}