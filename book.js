window.onload = function() {
    document.getElementById("title-firstbook").innerHTML = localStorage.getItem('title');
    document.getElementById("img-firstbook").src = localStorage.getItem('images');
    document.getElementById("desc-firstbook").innerHTML = localStorage.getItem('description');
}