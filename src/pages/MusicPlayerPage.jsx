import { useState, useRef } from 'react';

const playlist = [
  {
    songname: "Myself",
    artistName: "Post Malone",
    audioSrc: "/Myself.mp3"
  },
  {
    songname: "Arcade",
    artistName: "Duncan Laurence",
    audioSrc: "/Arcade.mp3"
  }
];

function MusicPlayerPage() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = playlist[currentTrackIndex];

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        {/* Album Art */}
        <div className="w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-8xl mb-6">
          🎵
        </div>

        {/* Song Info */}
        <h2 className="text-2xl font-bold text-center mb-2">{currentTrack.songname}</h2>
        <p className="text-gray-600 text-center mb-6">{currentTrack.artistName}</p>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={currentTrack.audioSrc}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        />

        {/* Seekbar */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full mb-2"
        />

        {/* Time Display */}
        <div className="flex justify-between text-sm text-gray-600 mb-6">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center space-x-6">
          <button
            onClick={handlePrev}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            ⏮️
          </button>
          <button
            onClick={togglePlayPause}
            className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full text-2xl transition"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition"
          >
            ⏭️
          </button>
        </div>

        {/* Playlist */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-3">Playlist</h3>
          <div className="space-y-2">
            {playlist.map((track, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentTrackIndex(index);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-lg cursor-pointer transition ${
                  index === currentTrackIndex
                    ? 'bg-blue-100 border-l-4 border-blue-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <p className="font-medium">{track.songname}</p>
                <p className="text-sm text-gray-600">{track.artistName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayerPage
