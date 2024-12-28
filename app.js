document.getElementById("videoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const videoUrl = document.getElementById("videoUrl").value;
    const videoId = extractVideoId(videoUrl);

    if (videoId) {
        // Add the video to the page
        addVideoToPage(videoId);
    } else {
        alert("Please enter a valid YouTube URL.");
    }

    document.getElementById("videoUrl").value = ''; // Reset the form field
});

// Function to extract the video ID from a YouTube URL
function extractVideoId(url) {
    const regex = /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|(?:.*[?&]v=))|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to add a video to the page
function addVideoToPage(videoId) {
    const videoContainer = document.getElementById("videoContainer");

    if (videoContainer.children.length < 5) {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`; // Autoplay enabled, mute initially
        iframe.frameborder = "0";
        iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowfullscreen = true;
        videoContainer.appendChild(iframe);
    } else {
        alert("You can only add up to 5 videos.");
    }
}
