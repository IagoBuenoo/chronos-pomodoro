import gravitationalBeep from '../assets/audios/gravitational_beep.m4a';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
