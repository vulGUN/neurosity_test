export default function task3() {
  const video = document.querySelector(".task-3__video");
  const timer = document.querySelector(".task-3__timer");

  let isPlay = false;
  let intervalId = null;

  video.onclick = () => {
    if (isPlay) {
      isPlay = false;
      video.pause();
      clearInterval(intervalId);
    } else {
      isPlay = true;
      video.play();
      intervalId = setInterval(currentTime, 0);
    }
  };

  function currentTime() {
    if (video.currentTime >= video.duration) {
      clearInterval(intervalId);
      video.currentTime = 0;
      isPlay = false;
    }

    const minutes = `${Math.floor(video.currentTime / 60)}`.padStart(2, "0");
    const seconds = `${Math.floor(video.currentTime % 60)}`.padStart(2, "0");
    const milliseconds = `${Math.round((video.currentTime % 1) * 1000)}`.padStart(3, "0");

    timer.innerText = `${minutes}:${seconds}:${milliseconds}`;
  }
}
