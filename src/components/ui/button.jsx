"use client";

import { useRouter } from "next/navigation";
import useSound from "use-sound";

function Button({ text, href, className, onClick }) {
  const [playSound] = useSound("/8bitSound.mp3");
  const router = useRouter();

  function playButton() {
    playSound();
    setTimeout(() => {
      try {
        onClick();
      } catch (error) {
        console.log(null);
      }
      try {
        router.push(href);
      } catch (error) {
        console.log(null);
      }
    }, "150");
  }

  return (
    <button type="button" className={className} onClick={playButton}>
      {text}
    </button>
  );
}

export { Button };
