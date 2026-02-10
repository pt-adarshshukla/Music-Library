
/*!
    Audiospark Template
    3: new Audio("musics/3.mp3"),
    4: new Audio("musics/4.mp3"),
    5: new Audio("musics/5.mp3"),
    6: new Audio("musics/6.mp3"),
    7: new Audio("musics/7.mp3"),
    8: new Audio("musics/8.mp3"),
    9: new Audio("musics/9.mp3"),
    10: new Audio("musics/10.mp3"),
    11: new Audio("musics/11.mp3"),
    12: new Audio("musics/12.mp3"),
    13: new Audio("musics/13.mp3"),
    14: new Audio("musics/14.mp3"),
    15: new Audio("musics/15.mp3"),
    16: new Audio("musics/16.mp3"),
    17: new Audio("musics/17.mp3"),
    18: new Audio("musics/18.mp3"),
    19: new Audio("musics/19.mp3"),
    20: new Audio("musics/20.mp3"),
    21: new Audio("musics/21.mp3"),
    22: new Audio("musics/22.mp3"),
    23: new Audio("musics/23.mp3"),
    24: new Audio("musics/24.mp3"),
    25: new Audio("musics/25.mp3"),
    26: new Audio("musics/26.mp3"),
    27: new Audio("musics/27.mp3"),
    28: new Audio("musics/28.mp3"),
    29: new Audio("musics/29.mp3"),
    30: new Audio("musics/30.mp3"),
    31: new Audio("musics/31.mp3"),
    32: new Audio("musics/32.mp3"),
    33: new Audio("musics/33.mp3"),
    34: new Audio("musics/34.mp3"),
    35: new Audio("musics/35.mp3"),
    36: new Audio("musics/36.mp3"),
    37: new Audio("musics/37.mp3"),
    38: new Audio("musics/38.mp3"),
    39: new Audio("musics/39.mp3"),
    40: new Audio("musics/40.mp3"),
    41: new Audio("musics/41.mp3"),
    42: new Audio("musics/42.mp3"),
    43: new Audio("musics/43.mp3"),
    44: new Audio("musics/44.mp3"),
    45: new Audio("musics/45.mp3"),
    46: new Audio("musics/46.mp3"),
    47: new Audio("musics/47.mp3"),
    48: new Audio("musics/48.mp3"),
    49: new Audio("musics/49.mp3"),
    50: new Audio("musics/50.mp3"),
    51: new Audio("musics/51.mp3"),
    52: new Audio("musics/52.mp3"),
    53: new Audio("musics/53.mp3"),
    54: new Audio("musics/54.mp3"),
    55: new Audio("musics/55.mp3"),
    56: new Audio("musics/56.mp3"),
    57: new Audio("musics/57.mp3"),
    58: new Audio("musics/58.mp3"),
    59: new Audio("musics/59.mp3"),
    60: new Audio("musics/60.mp3"),
    61: new Audio("musics/61.mp3"),
    62: new Audio("musics/62.mp3"),
    63: new Audio("musics/63.mp3"),
    64: new Audio("musics/64.mp3"),
    65: new Audio("musics/65.mp3"),
    66: new Audio("musics/66.mp3"),
    67: new Audio("musics/67.mp3"),
    68: new Audio("musics/68.mp3"),
    69: new Audio("musics/69.mp3"),
    70: new Audio("musics/70.mp3"),
    71: new Audio("musics/71.mp3"),
    72: new Audio("musics/72.mp3"),
    73: new Audio("musics/73.mp3"),
    74: new Audio("musics/74.mp3"),
    75: new Audio("musics/75.mp3"),
    76: new Audio("musics/76.mp3"),
    77: new Audio("musics/77.mp3"),
    78: new Audio("musics/78.mp3"),
    79: new Audio("musics/79.mp3"),
    80: new Audio("musics/80.mp3"),
    Created on date: 9/24/2023
    Built on date: 10/1/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 2000);
});


// ## NAVBAR MOBILE
function navbarMobileToggle() {
    document.getElementById("navbarMobileToggle").classList.toggle("navbarMobileToggle");
}

// SWITCH MODE
function switchMode() {
    document.body.classList.toggle("switchMode");
    document.getElementById("switchModeBtnDark").classList.toggle("switchModeBtnDarkToggle");
    document.getElementById("switchModeBtnLight").classList.toggle("switchModeBtnLightToggle");

    document.getElementById("logoFooterModeLight").classList.toggle("logoFooterModeLightToggle");
    document.getElementById("logoFooterModeDark").classList.toggle("logoFooterModeDarkToggle");
}

// SEARCH MODE
function searchMode() {
    document.getElementById("searchMode").classList.toggle("searchMode");
    document.getElementById("overlaySearchMode").classList.toggle("overlaySearchMode");
}

// AVATAR DROPDOWN
function avatarDropdown() {
    document.getElementById("avatarDropdown").classList.toggle("avatarDropdown");
}

// SUPPORT & CHAT MODE
function supportChatMode() {
    document.getElementById("supportChatMode").classList.toggle("supportChatMode");
}


// ## BACK TOP
const backTop = document.getElementById("backTop");
const navbarFixed = document.getElementById("navbarFixed");

window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        backTop.classList.add("back-top-active");
    } else if(window.scrollY > 50) {
        navbarFixed.classList.add("nav-fixed-active");
    } else {
        backTop.classList.remove("back-top-active");
        navbarFixed.classList.remove("nav-fixed-active");
    }
});


// ## LIKE MUSIC HEADER
function likeMusicHeader() {
    document.getElementById("likeMusicHeader").classList.toggle("likeMusicHeaderToggle");
}
function likeMusicPlay() {
    document.getElementById("likeMusicPlay").classList.toggle("likeMusicPlayToggle");
}


// Define audio tracks
const audioTracks = {
    1: new Audio("musics/1.mp3"),
    2: new Audio("musics/2.mp3"),
    
    
    // Add more tracks as needed

};
// Play Sound
function playSound(trackNumber) {
    // Pause any currently playing track
    Object.keys(audioTracks).forEach(num => {
        if (num !== trackNumber.toString()) {
            audioTracks[num].pause();
            document.getElementById(`playBtn${num}`).style.display = 'inline';
            document.getElementById(`pauseBtn${num}`).style.display = 'none';
        }
    });

    // Play the selected track
    const audio = audioTracks[trackNumber];
    audio.play();
    document.getElementById(`playBtn${trackNumber}`).style.display = 'none';
    document.getElementById(`pauseBtn${trackNumber}`).style.display = 'inline';
}

// Pause Sound
function pauseSound(trackNumber) {
    const audio = audioTracks[trackNumber];
    audio.pause();
    document.getElementById(`playBtn${trackNumber}`).style.display = 'inline';
    document.getElementById(`pauseBtn${trackNumber}`).style.display = 'none';
}

// Optional like function
function likeMusicPlayer() {
    document.getElementById("likeMusicPlayer").classList.toggle("likeMusicPlayerToggle");
}


// COLLAPSE MUSIC PLAYER
function collapseMusicPlayer() {
    document.getElementById("sectionMusicPlayer").classList.toggle("sectionMusicPlayerToggle");
    document.getElementById("collapseMusicPlayerBtn").classList.toggle("collapseMusicPlayerBtnToggle");
    document.getElementById("expandMusicPlayerBtn").classList.toggle("expandMusicPlayerBtnToggle");
}

// FULL PLAYER
function fullPlayer() {
    document.getElementById("fullPlayer").classList.toggle("fullPlayer");
}
function fullPlayerHeaderDropdown() {
    document.getElementById("fullPlayerHeaderDropdown").classList.toggle("fullPlayerHeaderDropdown");
}

// ## DOWNLOAD
function download() {
    document.getElementById("download").classList.toggle("downloadToggle");

    setTimeout(() => {
        window.location.href = "../musics/1.mp3";
    }, 3000);
}

// NUMBER ALBUMS
var cardGridLen = document.getElementById("cardGridLen").childElementCount;
var numAlbums = document.getElementById("numAlbums");
numAlbums.innerHTML = cardGridLen;