console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Hymn For The Weekend(Coldplay).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Hymn For The Weekend(Coldplay)", filepath: "songs/Hymn For The Weekend(Coldplay).mp3 ", coverPath: "covers/Hymn.jpg" },
    { songName: "Baby doll (Sunny leone)", filepath: "songs/Baby doll (Sunny leone).mp3 ", coverPath: "covers/Baby.jpg" },
    { songName: "Backstreet_Boys(Show Me The Meaning)", filepath: "songs/Backstreet_Boys(Show Me The Meaning).mp3 ", coverPath: "covers/BackstreetBoys.jpg" },
    { songName: "Boyfriend_(Justin_Bieber)", filepath: "songs/Boyfriend_(Justin_Bieber).mp3 ", coverPath: "covers/Boyfriend.jpg" },
    { songName: "Dangerously[Charlie Puth]", filepath: "songs/Dangerously[Charlie Puth].mp3 ", coverPath: "covers/Dangerously.jpg" },
    { songName: "Forgiveness (Enrique Iglesias)", filepath: "songs/Forgiveness (Enrique Iglesias).mp3 ", coverPath: "covers/Forgiveness.jpg" },
    { songName: "Give Me Everything (Pitbull)", filepath: "songs/Give Me Everything (Pitbull).mp3 ", coverPath: "covers/Perfect.jpg" },
    { songName: "Perfect(Ed_Sheeran)", filepath: "songs/Perfect(Ed_Sheeran).mp3 ", coverPath: "covers/Pitbull.jpg" },
    { songName: "R U Crazy (Conor Maynard)", filepath: "songs/R U Crazy (Conor Maynard).mp3 ", coverPath: "covers/RUCrazy.jpg" },
    { songName: "Touch It(Busta_Rhymes)", filepath: "songs/Touch It(Busta_Rhymes).mp3 ", coverPath: "covers/Touch It.jpg" },

]

songItems.forEach((element, i) => {  
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// audioElement.play();

// Handle play/pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {

    // Update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        masterSongName.innerText = songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle'); 

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');

})
