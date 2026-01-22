"use client";

import { useRouter } from "next/navigation";
import useSound from "use-sound";

function Button({ text, href, className, onClick }) {
  const [playSound] = useSound("/8bitSound.mp3");
  const router = useRouter();

  function playButton() {
    if (href) {
      router.push(href);

      playSound();
    } else if (onClick) {
      onClick();

      playSound();
    }
  }

  return (
    <button type="button" className={className} onClick={playButton}>
      {text}
    </button>
  );
}

export { Button };
