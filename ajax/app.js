document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an xhr object

    const xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onreadystatechange = function() {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }

    // }

    xhr.open('GET', 'data.txt', true);

    xhr.send();
}