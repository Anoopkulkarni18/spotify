console.log("Welcome to spotify")
// initialize variables
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songs=[
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    {songname: "salam-e-ishq",filepath: "songs/1.mp3",coverpath: "covers/1.jpg"},
    
]

// audioelement.play();
// handle play/pause click
masterplay.addEventListener('click', () => {
  console.log("gha ");
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
    }
})
myprogressbar.addEventListener('timeupdate', ()=>
{
    console.log('timeupdate');
})