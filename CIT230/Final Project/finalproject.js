function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}
function concussions(){
    getJSON("finalproject.json").then(function(data) {
        console.log('test');
        console.log(data);
    var concussionsElement = document.getElementById("doctor");
        concussionsElement.innerHTML = '';
    data.doctor.forEach(function(val){
        console.log(val);
        var listItem = document.createElement('li');
        var name = document.createElement('h2');
        var quote = document.createElement('p');
        name.innerHTML = val.name;
        quote.innerHTML = val.quote;
        listItem.appendChild(name);
        listItem.appendChild(quote);
        concussionsElement.appendChild(listItem);
    });
        data.player.forEach( function(val){
            console.log(val);
            var list = document.getElementById('player');
            var listItem = document.createElement('li');
            var name = document.createElement('h2');
            var quote = document.createElement('p');
            var career = document.createElement('p');
            name.innerHTML = val.name;
            quote.innerHTML = val.quote;
            career.innerHTML = val.career;
            listItem.appendChild(name);
            listItem.appendChild(quote);
            listItem.appendChild(career);
            list.appendChild(listItem);

        });

    });
};

function homepage(){
    getJSON("finalproject.json").then(function(data) {
        console.log('test');
        console.log(data);
        var homepageElement = document.getElementById("home");
        data.home.forEach(function(val){
            console.log(val);
            homepageElement.innerHTML = '';
            var listItem = document.createElement('li');
            var name = document.createElement('h2');
            var quote = document.createElement('p');
            name.innerHTML = val.name;
            quote.innerHTML = '"'  + val.quote + '"';
            listItem.appendChild(name);
            listItem.appendChild(quote);
            homepageElement.appendChild(listItem);
        });
    });
}
