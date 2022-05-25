let btn = document.querySelectorAll('#playmusic');
let track = document.querySelectorAll('.track');
let btn_console = document.querySelector('#playmusic-console');
let volume_progress = document.querySelector('.volume-progress');
// let prev = document.querySelector('.prev');
// let next = document.querySelector('.next');
let currenttrack;
let currentbtn;
let volumenow;
let name_console = document.querySelector('.name-console');
let artist_console = document.querySelector('.artist-console');
let image_console = document.querySelector('.image-console');
let name_card = document.querySelectorAll('.musicName-card');
let artist_card = document.querySelectorAll('.artistName-card');
let image_card = document.querySelectorAll('.musicImage-card');



for (let i = 0; i < track.length; i++) {
    btn[i].addEventListener('click', function () {

        if (track[i].paused) {
            for (let j = 0; j < track.length; j++) {
                if (i !== j) {
                    track[j].pause();
                    btn[j].classList.add('fa-circle-play');
                    btn[j].classList.remove('fa-circle-pause');
                } else {
                    track[i].play();
                    track[i].volume = 0.05;
                    btn[i].classList.add('fa-circle-pause');
                    btn[i].classList.remove('fa-circle-play');
                    btn_console.classList.add('fa-circle-pause');
                    btn_console.classList.remove('fa-circle-play');
                    currenttrack = track[i];
                    currentbtn = btn[i];
                    image_console.src = image_card[i].src;
                    name_console.textContent = name_card[i].textContent;
                    artist_console.textContent = artist_card[i].textContent;
                }
            }
        } else {
            track[i].pause();
            btn[i].classList.add('fa-circle-play');
            btn[i].classList.remove('fa-circle-pause');
            btn_console.classList.add('fa-circle-play');
            btn_console.classList.remove('fa-circle-pause');
        }

    });
}

btn_console.addEventListener('click', function () {
    if (currenttrack.paused) {
        currenttrack.play();
        btn_console.classList.add('fa-circle-pause');
        btn_console.classList.remove('fa-circle-play');
        currentbtn.classList.add('fa-circle-pause');
        currentbtn.classList.remove('fa-circle-play');
    } else {
        currenttrack.pause();
        btn_console.classList.add('fa-circle-play');
        btn_console.classList.remove('fa-circle-pause');
        currentbtn.classList.add('fa-circle-play');
        currentbtn.classList.remove('fa-circle-pause');
    }
});

volume_progress.addEventListener('change', () => {
    currenttrack.volume = volume_progress.value;
    clearInterval(volumenow);
});

// prev.addEventListener