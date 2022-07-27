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
                    if (url == data.book[i].title) {
                        localStorage.setItem('title', data.book[i].title)
                        localStorage.setItem('images', data.book[i].Images)
                        localStorage.setItem('description', data.book[i].description)
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
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}