var inputSearch = document.getElementById("in");

const loc = 'book.html'
var search = document.getElementById("btn_search");
search.addEventListener('click', function() {
    var inputValue = inputSearch.value;
    readTextFile("./data.json", function(text) {
        var data = JSON.parse(text);
        // boucle json 
        for (let i = 0; i < data.book.length; i++) {
            //comparer boucle vs inputValue
            if (data.book[i].title === inputValue) {
                // remplir localstorage
                localStorage.setItem('title', data.book[i].title)
                localStorage.setItem('images', data.book[i].Images)
                localStorage.setItem('description', data.book[i].description)
                    // redirict to book.html
                window.location = loc;
            } else {
                localStorage.setItem('title', `Book ${inputValue} is undefined`)
                localStorage.setItem('description', 'Pardon, this book doesn\'t exist in our storage please choose another.');
                localStorage.removeItem("images");
                window.location = loc;
            }
        }
    });
})

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