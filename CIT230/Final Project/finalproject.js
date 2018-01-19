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
};
function impact(){
    getJSON("finalproject.json").then(function(data) {
        console.log('test');
        console.log(data);
        var impactElement = document.getElementById("impact");
        data.impact.forEach(function(val){
            console.log(val);
            impactElement.innerHTML = '';
            var listItem = document.createElement('li');
            var concussion = document.createElement('p');
            var implications = document.createElement('p');
            var makeup = document.createElement('p');
            var care = document.createElement('p');
            concussion.innerHTML = '"'  + val.concussion + '"';
            implications.innerHTML = '"'  + val.implications + '"';
            makeup.innerHTML = '"'  + val.makeup + '"';
            care.innerHTML = '"'  + val.care + '"';
            listItem.appendChild(concussion);
            listItem.appendChild(implications);
            listItem.appendChild(makeup);
            listItem.appendChild(care);
            impactElement.appendChild(listItem);
        });
    });
};
function statistics(){
    getJSON("finalproject.json").then(function(data) {
        console.log('test');
        console.log(data);
        var statisticsElement = document.getElementById("statistics");
        data.statistics.forEach(function(val){
            console.log(val);
            statisticsElement.innerHTML = '';
            var listItem = document.createElement('li');
            var history = document.createElement('p');
            history.innerHTML = '"'  + val.history + '"';
            listItem.appendChild(history);
            statisticsElement.appendChild(listItem);
        });
    });
};
function awareness(){
    getJSON("finalproject.json").then(function(data) {
        console.log('test');
        console.log(data);
        var awarenessElement = document.getElementById("awareness");
        data.awareness.forEach(function(val){
            console.log(val);
            awarenessElement.innerHTML = '';
            var listItem = document.createElement('li');
            var visits = document.createElement('p');
            visits.innerHTML = '"'  + val.visits + '"';
            listItem.appendChild(visits);
            awarenessElement.appendChild(listItem);
        });
    });
};
