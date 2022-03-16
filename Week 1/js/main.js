const playBtn = document.getElementById('play');
const icon = document.getElementById('play-icon');
const progressBar = document.getElementById('progress-bar');
let audioElement = new Audio("");
const songItems = Array.from(document.querySelectorAll(".songItem"));
const listPlay = Array.from(document.querySelectorAll(".songItemPlay"));

// Array.From methpde convert anything in array in my case the list of HTML element
// foreach element pertrameter is telling for each element in a array you should do (X)
// i means swe have to pass more pentameter for every array like in my case

let songs = [
    { songName: "0Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/1.jpg", duration: "05:30" },
    { songName: "1Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/2.jpg", duration: "02:02" },
    { songName: "2Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/3.jpg", duration: "07:43" },
    { songName: "3Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/4.jpg", duration: "02:30" },
    { songName: "4Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/5.jpg", duration: "01:24" },
    { songName: "5Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/6.jpg", duration: "02:55" },
    { songName: "6Salaq-e-Ishq", filePath: "/Weekly Problems/Day 1/songs/1.mp3", cover: "/Weekly Problems/Day 1/img/covers/7.jpg", duration: "01:25" }
]

// Foreach element in songsItem it shoudl render the songs array into thr sec, songName and duration
songItems.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    element.getElementsByClassName("timestamp")[0].innerText = songs[i].duration;
})
playBtn.addEventListener('click', function () {
    if (audioElement.paused || audioElement.currentSrc <= 0) {
        audioElement.play();
        icon.classList.remove("fa-play-circle");
        icon.classList.add("fa-pause-circle");
    } else {
        audioElement.pause();
        icon.classList.remove("fa-pause-circle");
        icon.classList.add("fa-play-circle");
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
})


const makeAllPLays = () => {
    listPlay.forEach((element) => {

        element.classList.add("fa-play-circle");
        element.classList.remove("fa-pause-circle");

    })

}

let index = 0;
listPlay.forEach((element) => {

    element.addEventListener('click', (e) => {

            
            makeAllPLays();
            index = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            audioElement.src = `/Weekly Problems/Day 1/songs/${index + 1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            listPlay.classList.remove("fa-play-circle");
            listPlay.classList.add("fa-pause-circle");
    })

})

document.getElementById("next").addEventListener('click', () => {
    if (index >= 7) {
        index = 0;
    } else {
        index += 1;
    }
    audioElement.src = `/Weekly Problems/Day 1/songs/${index}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    listPlay.classList.remove("fa-play-circle");
    listPlay.classList.add("fa-pause-circle");
})

document.getElementById("prev").addEventListener('click', () => {
    if (index < 0) {
        index = 7;
    } else {
        index -= 1;
    }
    audioElement.src = `/Weekly Problems/Day 1/songs/${index + 1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    listPlay.classList.remove("fa-play-circle");
    listPlay.classList.add("fa-pause-circle");
})