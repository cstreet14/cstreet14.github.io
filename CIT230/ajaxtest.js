function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
(function init(){
        var franklin = document.getElementById('franklinLink');;
        var greenville = document.getElementById('greenvilleLink');
        var springfield = document.getElementById('springfieldLink');
    franklin.addEventListener('click', function(event) {
        event.preventDefault();
        ajaxFromLocalJson('Franklin');
    });
}

 function ajaxFromLocalJson(locationToGrab) {
    getJSON("")
}
