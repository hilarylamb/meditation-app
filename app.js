const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video');

  //Sounds
  const sounds = document.querySelectorAll('.sound-picker button');
  //Time Display
  const timeDisplay = document.querySelector('.time-display');
  //Get the length of the outline
  const outlineLength = outline.getTotalLength();
  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Play Sound
  play.addEventListener('click', () => {
    song.play();
  });

  //Create a fucntion speciic to stop and play the sounds
  const checkPlaying = song => {
    if (song.paused) {
      song.play();
      play.src = './svg/pause.svg';
    } else {
      song.pause();
      play.src = './svg/play.svg';
    }
  };
};

app();
