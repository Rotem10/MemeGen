'use strict';

var gKeywords = { 'happy': 12, 'funny puk': 1 }
var gImgs = [{ id: 1, url: 'imgs/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'imgs/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'imgs/3.jpg', keywords: ['happy'] }
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{ txt: 'I never eat Falafel', size: 20, align: 'left', color: 'red' }]
};
var gCanvas = document.querySelector('#canvas');
var gCtx = gCanvas.getContext('2d');

function getImgById(imgId) {
    return gImgs.find(img => img.id === imgId)
}

function addImgToEditor(imgId) {
    var imgUrl = gImgs[imgId - 1].url
    var img = new Image()
    img.src = imgUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
    gMeme.selectedImgId = imgId
    gCtx.save();
}

function drawText(text) {
    gCtx.restore();
    // const {offsetX, offsetY} = ev;
    // var text = document.getElementById('text').value
    // gCtx.globalCompositeOperation = 'destination-over';
    // gCtx.fillText("width:" + gCtx.measureText(text).width, 10, 50)
    gCtx.fillStyle = "#3e3e3e";
    gCtx.font = "16px Arial";
    gCtx.fillText(text, 10, 100);
    gCtx.save();
    // drawRect(50, 50, 250, 100);
    // gCtx.fillText(text, 100, 100);
}

function deleteText() {
    gCtx.restore();
    // gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    // drawRect(gCanvas.width + 5, gCanvas.height - 5)
    // addImgToEditor(gMeme.selectedImgId);
    // drawText(document.getElementById('text').value)
}

function drawRect(x, y, x1, y1) {
    // var x = 100
    // var y = 50
    gCtx.beginPath();
    gCtx.lineWidth = '2';
    gCtx.rect(x, y, x1, y1);
    gCtx.strokeStyle = 'black';
    gCtx.stroke();
}

// function setText() {
//     var elText = document.getElementById('text').value
//     drawText(elText)
// }

// function drawText(text) {
//     var x = 100
//     var y = 50
//         // gCtx.lineWidth = '0.5';
//     gCtx.textBaseline = 'top';
//     gCtx.font = '40px sans-serif';
//     gCtx.textAlign = 'center';
//     // gCtx.strokeText(text, x, y);
//     gCtx.fillText(text, x, y);
// }
// // function createImgs(){}