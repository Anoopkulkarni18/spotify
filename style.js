console.log("Welcome to spotify")
// initialize variables
let songindex = 0;
let audioElement = new Audio('spotify/songs/0.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname')
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songItems'));
let songs = [{
        songname: "apna_dil_toh_awara",
        filepath: "spotify/songs/0.mp3",
        coverpath: "covers/1.jpg"
    },
    {
        songname: "pee_loon",
        filepath: "spotify/songs/1.mp3",
        coverpath: "covers/2.jpg"
    },
    {
        songname: "apna-bana-le",
        filepath: "spotify/songs/2.mp3",
        coverpath: "covers/3.jpg"
    },
    {
        songname: "kesariya",
        filepath: "spotify/songs/3.mp3",
        coverpath: "covers/4.jpg"
    },
    {
        songname: "mann_mera",
        filepath: "spotify/songs/4.mp3",
        coverpath: "covers/5.jpg"
    },
    {
        songname: "ambarsariya",
        filepath: "spotify/songs/5.mp3",
        coverpath: "covers/6.jpg"
    },
    {
        songname: "mai agar kahoon",
        filepath: "spotify/songs/6.mp3",
        coverpath: "covers/7.jpg"
    },
    {
        songname: "kya_mujhe_pyar_hai",
        filepath: "spotify/songs/7.mp3",
        coverpath: "covers/8.jpg"
    },
]
songitems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
})

// audioelement.play();
// handle play/pause click
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})
audioElement.addEventListener('timeupdate', () => {

    // update seek bar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItems')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItems')).forEach((element) =>

    {
        element.addEventListener('click', (e) => {
            makeAllPlays();
            songindex = parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src = `spotify/songs/${songindex+1}.mp3`;
            mastersongname.innerText = songs[songindex].songname
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        })
    })

document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 7) {
        songindex = 0;
    } else {
        songindex += 1
    }
    audioElement.src = `spotify/songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    mastersongname.innerText = songs[songindex].songname
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <= 0) {
        songindex = 7;
    } else {
        songindex -= 1
    }
    audioElement.src = `spotify/songs/${songindex+1}.mp3`;
    audioElement.currentTime = 0;
    mastersongname.innerText = songs[songindex].songname
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');

})