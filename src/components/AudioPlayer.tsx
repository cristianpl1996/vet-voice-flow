import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  duration?: string;
}

const AudioPlayer = ({ src, duration: durationText = "2:15" }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setAudioDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = audioDuration > 0 ? (currentTime / audioDuration) * 100 : 0;

  return (
    <div className="w-2/3 max-w-4xl mx-auto">
      {/* Reproductor de audio */}
      <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
        {/* Waveform visual */}
        <div className="relative h-20 mb-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Barras de waveform */}
            <div className="flex items-end justify-center space-x-1 h-16">
              {Array.from({ length: 60 }, (_, i) => {
                const height = Math.random() * 40 + 10;
                const isActive = (i / 60) * 100 <= progress;
                return (
                  <div
                    key={i}
                    className={`w-1 transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-t from-primary to-secondary shadow-lg shadow-primary/50' 
                        : 'bg-white/30'
                    }`}
                    style={{ height: `${height}px` }}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-between">
          {/* Botón de reproducción */}
          <button
            onClick={togglePlay}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-lg shadow-primary/50"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white ml-1" />
            )}
          </button>

          {/* Información de tiempo */}
          <div className="flex items-center space-x-4">
            <span className="text-white/80 text-sm font-mono">
              {formatTime(currentTime)}
            </span>
            <span className="text-white/40 text-sm">/</span>
            <span className="text-white/80 text-sm font-mono">
              {formatTime(audioDuration)}
            </span>
          </div>

          {/* Botón de volumen */}
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white/80" />
            ) : (
              <Volume2 className="w-5 h-5 text-white/80" />
            )}
          </button>
        </div>

        {/* Barra de progreso */}
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max={audioDuration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, 
                hsl(245, 79%, 66%) 0%, 
                hsl(320, 85%, 60%) ${progress}%, 
                rgba(255, 255, 255, 0.2) ${progress}%, 
                rgba(255, 255, 255, 0.2) 100%)`
            }}
          />
        </div>

        {/* Elemento de audio oculto */}
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
          onEnded={() => setIsPlaying(false)}
        />
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, hsl(245, 79%, 66%), hsl(320, 85%, 60%));
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, hsl(245, 79%, 66%), hsl(320, 85%, 60%));
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default AudioPlayer;
