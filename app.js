var xx = document.getElementById('dynamic_select')
xx.addEventListener(
    'change',
    function() {
        const loc = 'book.html'
        var url = this.value;
        if (url) {


            readTextFile("./data.json", function(text) {
                var data = JSON.parse(text);
                for (i = 0; i < data.book.length; i++) {
                    // console.log(data.book[i].title)
                    if (url == data.book[i].title) {
                        // console.log(url)
                        // on doit envoyer l'objet data.book[i] à la page book.html

                        window.location = loc;
                    }
                }
            });

        }
        return false;
    }
)

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            // console.log(rawFile.responseText)
            callback(rawFile.responseText);
        }
    }

    rawFile.send(null);
}

//usage:
readTextFile("./data.json", function(text) {
    // console.log(text);

    var data = JSON.parse(text);
    console.log(data);
    console.log(data.book);
    for (i = 0; i < data.book.length; i++) {
        console.log(data.book[i].title)
    }
});

function howMany(selectObject) {
    let titleSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            titleSelected++;
        }
    }
    return titleSelected;
}

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const musicTypes = document.selectForm.musicTypes;
    // console.log(`You have selected ${howMany(musicTypes)} option(s).`);
});