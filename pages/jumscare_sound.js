import React, { useRef, useEffect } from "react";

const SoundPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => console.log("Audio play failed:", error));
    }
  }, []);

  let sounddd= "pics/jumpppp.mp3"
  
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
     

      {/* Hidden audio that plays automatically */}
      <audio ref={audioRef} src={sounddd} />
    </div>
  );
};

export default SoundPlayer;
