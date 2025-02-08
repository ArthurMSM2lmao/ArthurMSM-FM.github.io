document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nextBtn = document.getElementById('nextBtn');

    let songs = [];
    let playedSongs = [];

    // Fetch the list of songs from the GitHub repository
    fetch('https://api.github.com/repos/your-username/your-repository/contents/Just%20Dance%203%20Soundtrack')
        .then(response => response.json())
        .then(data => {
            songs = data.filter(item => item.name.endsWith('.mp3')).map(item => item.name);
            if (songs.length > 0) {
                playNextSong();
            } else {
                alert('No songs found in the "Just Dance 3 Soundtrack" folder.');
            }
        })
        .catch(error => {
            console.error('Error fetching song list:', error);
            alert('Error fetching song list.');
        });

    // Play or pause the audio
    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    // Play the next song
    nextBtn.addEventListener('click', () => {
        playNextSong();
    });

    // Play the next song in the list
    function playNextSong() {
        if (songs.length === 0) {
            alert('No songs available.');
            return;
        }

        if (playedSongs.length === songs.length) {
            playedSongs = [];
        }

        let song;
        do {
            song = songs[Math.floor(Math.random() * songs.length)];
        } while (playedSongs.includes(song));

        playedSongs.push(song);
        audioPlayer.src = `https://raw.githubusercontent.com/your-username/your-repository/main/Just%20Dance%203%20Soundtrack/${song}`;
        audioPlayer.play();
        playPauseBtn.textContent = 'Pause';
    }
});
