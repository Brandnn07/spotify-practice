var btn = document.querySelector("#playlistbtn");
var list = document.querySelector("#list");
var additional = document.querySelector('#addSong');
var form = document.querySelector('#submit');
var songs = ["Song A", "Song B", "Song C", "Song D", "Song E", "Song F", "Song G", "Song H"]
var deletebtn = document.querySelector(".deletebtn");

function displaySongs () {
    let text = "";
    for(i = 0; i < songs.length; i++) {
        var song = document.createElement("p");
        song.setAttribute('text', text += songs[i] + "<button class='deletebtn'> Delete </button>" + "<br>");
        list.appendChild(song);
    }
    list.innerHTML = text;
    
}

function addSong () {
    let input = additional.value;
    songs.push(input);
    alert(`You have added ${input} to your playlist!`)
    displaySongs();
    console.log(input);
}

function deleteSong () {

}

// deletebtn.addEventListener("click", deleteSong)
btn.addEventListener("click", displaySongs);
form.addEventListener("click", addSong);
