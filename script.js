let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// create a new audio element
let track = document.createElement('audio');

// all song list 
let all_song = [
    {
        name:'Pind Nanke',
        path:'music/01 Pind Nanke - Gippy Grewal (DjPunjab.Com).mp3',
        img: 'img/pind_nanke.jpg',
        singer: 'Gippy grewal',
    },
    {
        name:'Madam Ji',
        path:'music/02 Madaam Ji - Gippy Grewal (DjPunjab.Com).mp3',
        img: 'img/madam-g.png',
        singer: 'Gippy grewal(Mirza)',
    },
    {
        name:'Aashiq Tere',
        path:'music/06 Aashiq Tere - Gippy Grewal (DjPunjab.Com).mp3',
        img: 'img/aashiq-tere.jpg',
        singer: 'Gippy grewal(Mirza)',
    },
    {
        name:'Aakad',
        path:'music/Aakad Ft Desi Crew - Amrit Maan (DJJOhAL.Com).mp3',
        img: 'img/aakad.jpg',
        singer: 'Amrit maan',
    }
];

// All function

// function load the track
function load_track(index_no){
    track.src = all_song[index_no].path;
    title.innerHTML = all_song[index_no].name;
    track_image.src = all_song[index_no].img;
    artist.innerHTML = all_song[index_no].singer;
    track.load();

    total.innerHTML = all_song.length;
    present.innerHTML = index_no + 1;
}
load_track(index_no);

// checking the song is playing or not
function justplay(){
    if(playing_song == false){
        playsong();
    }
    else{
        pausesong();
    }
}

function playsong()
{
    track.play();
    playing_song = true;
    play.innerHTML = '<i class="fa fa-pause"></i>';
}

function pausesong()
{
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>';
}

function next_song(){
    if(index_no < all_song.length - 1)
    {
        index_no++;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }   
}

function previous_song(){
    if(index_no > 0)
    {
        index_no--;
        load_track(index_no);
        playsong();
    }
    else{
        index_no = all_song.length - 1;
        load_track(index_no);
        playsong();
    }
}

function autoplay_switch(){

}

function volume_change(){
    volume_show.innerHTML = recent_volume.value;
    track.volume = recent_volume.value/100;
}

// change slider position
function change_duration(){
    console.log('slider value',slider.value);
    slider_position = track.duration * (slider.value/100);
    console.log('slider_postion',slider_position);
    track.currentTime = slider_position;
}

function range_slider(){
    let position = 0;

    // update slider position
    if(!isNaN(track.duration)){
        position = track.currentTime * (100 / track.duration);
        slider.value = position;
    }
}