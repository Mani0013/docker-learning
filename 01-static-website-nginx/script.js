function showMessage() {
    const messages = [
        "Docker is awesome!",
        "Container is running!",
        "Website served from Docker!",
        "Success! Everything works!",
        "Great job on Project 1!"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMsg;
}