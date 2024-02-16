// home and search switching

let home_page = document.querySelectorAll(".home_page_display")[0];
let search_page = document.querySelectorAll(".search_display")[0];

let home_btn = document.querySelectorAll(".home")[0];
let search_btn = document.querySelectorAll(".search")[0];
let search_bar = document.querySelectorAll(".searchbar")[0];
let right_div = document.querySelectorAll(".right_side")[0];
let genre = document.querySelectorAll('.genre');

home_btn.addEventListener("click", function () {
  home_page.style.display = "block";
  home_btn.style.opacity = 1;
  search_btn.style.opacity = 0.5;
  search_page.style.display = "none";
  search_bar.style.display = "none";
  home_page.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  right_div.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
search_btn.addEventListener("click", function () {
  search_page.style.display = "block";
  search_btn.style.opacity = 1;
  home_btn.style.opacity = 0.5;
  home_page.style.display = "none";
  search_bar.style.display = "flex";
  search_page.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  right_div.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// songs object of each singer

let karan_aujla_songs = [
  { location: "karan aujla/mexico.mp3", name: "Mexico" },
  { location: "karan aujla/chitta_kurta.mp3", name: "Chitta Kurta" },
  { location: "karan aujla/on_top.mp3", name: "On Top" },
  { location: "karan aujla/rubicon_drill.mp3", name: "Rubicon Drill" },
  { location: "karan aujla/white_brown_black.mp3", name: "White Brown Black" },
  { location: "karan aujla/ykwim.mp3", name: "YKWIM" },
];

let honey_singh_songs = [
  { location: "Honey Singh/Blue_Eyes.mp3", name: "Blue Eyes" },
  { location: "Honey Singh/Call_Aundi.mp3", name: "Call Aundi" },
  {
    location: "Honey Singh/Chaska_ae_Yaara_Nu.mp3",
    name: "Chaska Ae Yaara Nu",
  },
  { location: "Honey Singh/DOPE_SHOPE.mp3", name: "Dope Shope" },
  { location: "Honey Singh/Deeth.mp3", name: "Dheeth" },
  { location: "Honey Singh/Kuley_Kuley.mp3", name: "Kuley Kuley" },
  { location: "Honey Singh/Love_Dose.mp3", name: "Love Dose" },
];

let anuv_jain_songs = [
  { location: "Anuv Jain/Alag_Asmaan.mp3", name: "Alag Asmaan" },
  { location: "Anuv Jain/Baarishien.mp3", name: "Baarishien" },
  { location: "Anuv Jain/Gul.mp3", name: "GUL" },
  { location: "Anuv Jain/Husn.mp3", name: "HUSN" },
  { location: "Anuv Jain/Mazaak.mp3", name: "Mazaak" },
  { location: "Anuv Jain/Meri_Baaton.mp3", name: "Meri Baaton" },
  { location: "Anuv Jain/Riha.mp3", name: "Riha" },
];

let ajay_hooda_songs = [
  { location: "Ajay Hooda/Ahole_me_ptola.mp3", name: "Ahole Me Patola" },
  { location: "Ajay Hooda/Bahu_kale_ki.mp3", name: "Bahu Kale Ki" },
  { location: "Ajay Hooda/Bahu_zamindar_ki.mp3", name: "Bahu Zamindar Ki" },
  { location: "Ajay Hooda/kallo.mp3", name: "Kallo" },
  { location: "Ajay Hooda/solid_body.mp3", name: "Solid Body" },
  { location: "suthri_si_chori.mp3", name: "Ajay Hooda/Suthri si Chori" },
  { location: "Ajay Hooda/Tagdi.mp3", name: "Tagdi" },
];

let dhanda_nyoliwala_songs = [
  { location: "Dhanda Nyoliwala/4_days.mp3", name: "4 Days" },
  { location: "Dhanda Nyoliwala/bitch.mp3", name: "Bitch" },
  { location: "Dhanda Nyoliwala/Bonjour.mp3", name: "Bonjour" },
  { location: "Dhanda Nyoliwala/death_row.mp3", name: "Death Row" },
  { location: "Dhanda Nyoliwala/No_mercy.mp3", name: "No Mercy" },
  { location: "Dhanda Nyoliwala/Romeo.mp3", name: "Romeo" },
  { location: "Dhanda Nyoliwala/Up_to_you.mp3", name: "Up To You" },
];

let pritam_songs = [
  { location: "pritam/Batameez_Dil.mp3", name: "Batameez Dil" },
  { location: "pritam/Dil_ibadat.mp3", name: "Dil Ibadat" },
  { location: "pritam/Hua_Main.mp3", name: "Hua Main" },
  { location: "pritam/Kesariya.mp3", name: "Kesariya" },
  { location: "pritam/Khairiyat.mp3", name: "Khairiyat" },
  { location: "pritam/Teri_jhuki_nazar.mp3", name: "Teri Jhuki Najar" },
  { location: "pritam/Shyad.mp3", name: "Shyad" },
];

// let pritam = document.querySelector('#Pritam' ,'#pritam');

// pritam.addEventListener("click",function(){
//     player.src = pritam_songs[0].location;
//     player.play();
//     song_bar.max = player.duration;
//     song_bar.value = player.currentTime;
// });

let song_bar = document.querySelectorAll(".song_bar")[0];
let play_music = document.querySelectorAll(".play")[0];
let player = document.querySelector("#song_to_play");

play_music.addEventListener("click", function () {
  song_bar.value = player.currentTime;
  song_bar.max = player.duration;
  if (play_music.classList.contains("bi-play-circle-fill")) {
    play_music.classList.remove("bi-play-circle-fill");
    play_music.classList.add("bi-pause-circle-fill");
    song_bar.max = player.duration;
    player.play();
  } else {
    player.pause();
    play_music.classList.add("bi-play-circle-fill");
    play_music.classList.remove("bi-pause-circle-fill");
  }
});

player.onloadmetadata = function () {
  song_bar.max = player.duration;
  song_bar.value = player.currentTime;
};

if (player.play()) {
  setInterval(function () {
    song_bar.value = player.currentTime;
    song_bar.max = player.duration;
  }, 500);
}

song_bar.onchange = function (e) {
  play_music.classList.remove("bi-play-circle-fill");
  play_music.classList.add("bi-pause-circle-fill");
  // player.currentTime = song_bar.value;
  player.currentTime = song_bar.value;
  player.play();
};

// mute button code

let mute = document.querySelectorAll(".mute")[0];

mute.addEventListener("click", function (e) {
  if (mute.classList.contains("bi-volume-up")) {
    mute.classList.remove("bi-volume-up");
    mute.classList.add("bi-volume-mute-fill");
    player.muted = true;
  } else {
    mute.classList.add("bi-volume-up");
    mute.classList.remove("bi-volume-mute-fill");
    player.muted = false;
  }
});

// shuffle songs code

// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   return array;
// }

function showPlayIcon(element) {
  element.querySelector(
    ".green_appearing_button , .green_btn_to_hide"
  ).style.display = "block";
}
function hidePlayIcon(element) {
  element.querySelector(
    ".green_appearing_button , .green_btn_to_hide"
  ).style.display = "none";
}

let para = document.querySelectorAll(".para");
let lib_btn = document.getElementsByClassName("lib")[0];
let left_side = document.getElementsByClassName("left_side")[0];
let right_side = document.getElementsByClassName("right_side")[0];

lib_btn.addEventListener("click", function (e) {
  left_side.style.width = left_side.style.width === "26vw" ? "10vw" : "26vw";
  right_side.style.width = right_side.style.width === "73%" ? "89%" : "73%";
  para.forEach((box) => {
    box.style.display = box.style.display === "flex" ? "none" : "flex";
  });
});

let sign_up = document.getElementById("btn1");
let log_in = document.getElementById("btn2");
let hidebtn = document.querySelectorAll(".hide_btn");

sign_up.addEventListener("click", function (e) {
  hidebtn.forEach(function (btn) {
    btn.style.display = "inline";
  });
  sign_up.style.display = "none";
  log_in.style.display = "none";
  window.open("sign_up.html");
});
log_in.addEventListener('click' , function(e){
  hidebtn.forEach(function (btn) {
    btn.style.display = "inline";
  });
    sign_up.style.display = 'none';
    log_in.style.display = 'none';
    window.open("login.html");
})
