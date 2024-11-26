function playVideo(src, title) {
    // Get video player elements
    const videoPlayer = document.getElementById('video-player');
    const videoElement = document.getElementById('video');
    const videoSource = document.getElementById('video-source');
    const videoTitle = document.getElementById('video-title');
  
    // Set video source and title
    videoSource.src = src;
    videoTitle.textContent = title;
    videoElement.load(); // Reload video with new source
  
    // Show the video player
    videoPlayer.classList.remove('hidden');
  }
  
  function closeVideo() {
    // Hide the video player
    const videoPlayer = document.getElementById('video-player');
    const videoElement = document.getElementById('video');
  
    videoPlayer.classList.add('hidden');
    videoElement.pause(); // Pause video playback
  }
  