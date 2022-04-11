const textArea = document.getElementById('main-area');

document.getElementById("upper-case").addEventListener("click", function() {
    textArea.value = textArea.value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function() {
    textArea.value = textArea.value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function() {
    let text = textArea.value.split(' ');
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        newText += (text[i][0].toUpperCase() + text[i].slice(1).toLowerCase() + ' ');
    }
    textArea.value = newText.trim();
});

document.getElementById("sentence-case").addEventListener("click", function() {
    let text = textArea.value.split('. ');
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        newText += (`${text[i][0].toUpperCase()}${text[i].slice(1).toLowerCase()}. `);
    }
    textArea.value = newText.trim().slice(0, -1);
});

document.getElementById("save-text-file").addEventListener("click", function () {
    download('text.txt', textArea.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click()

    document.body.removeChild(element);
}