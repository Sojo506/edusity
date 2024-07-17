import React, { useRef } from 'react';
import './VideoPlayer.css';
import college_video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  // Declara una referencia usando useRef y la inicializa como null.
  // Esta referencia será usada para acceder al elemento DOM del reproductor.

  const closePlayer = (e) => {
    // Define una función llamada closePlayer que toma un evento (e) como argumento.

    if (e.target === player.current) {
      // Comprueba si el objetivo del evento (e.target) es igual a la referencia del reproductor (player.current).

      setPlayState(false);
      // Si la condición anterior es verdadera, llama a la función setPlayState para cambiar el estado de reproducción a falso,
      // lo que probablemente detendrá el reproductor o lo cerrará.
    }
  };

  return (
    <div
      className={`video__player ${playState ? '' : 'hide'}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={college_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
