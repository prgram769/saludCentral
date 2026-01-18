import useSound from "use-sound";

function Button({text, onClick, className}) {

  const [playSound] = useSound("/8bitSound.mp3");

  function playButton() {
    playSound();

    onClick();
  }

  return (
  	<button type="button" className={className} onClick={playButton}>{text}</button>
  )
}

export {Button};
