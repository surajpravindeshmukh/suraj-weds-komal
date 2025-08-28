// Create an Audio object
const audio = new Audio('music.mp3'); // Replace 'music.mp3' with your audio file path

// Mute the audio to try autoplay
audio.muted = true;

// Play the audio immediately on page load
document.addEventListener('DOMContentLoaded', function() {
  audio.play().then(function() {
    // Autoplay was successful
    // Unmute the audio for future playback
    audio.muted = false;
  }).catch(function(error) {
    // Autoplay was prevented, possibly due to browser restrictions
    // Here, you could prompt the user to interact with the page (e.g., click)
    console.error('Autoplay prevented:', error);
  });
});

// Restart the audio when it ends
audio.addEventListener('ended', function() {
  audio.currentTime = 0;
  audio.play().catch(function(error) {
    console.error('Autoplay prevented:', error);
  });
});
