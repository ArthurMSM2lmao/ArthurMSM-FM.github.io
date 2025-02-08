document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const songs = [
		'Songs/2SEATER.m4a',
        'Songs/48.m4a',
        'Songs/A BOY IS A GUN_.m4a',
        'Songs/ARE WE STILL FRIENDS_.m4a',
        'Songs/Awkward.m4a',
        'Songs/BLESSED (Audio).m4a',
        'Songs/BOYFRIEND, GIRLFRIEND (2020 Demo).m4a',
        'Songs/BUFFALO.m4a',
        'Songs/Balloon.m4a',
        'Songs/CHERRY BOMB.m4a',
        'Songs/Colossus.m4a',
        'Songs/Cowboy.m4a',
        'Songs/DEATHCAMP.m4a',
        'Songs/DOGTOOTH.m4a',
        'Songs/Darling, I.m4a',
        'Songs/Droppin\' Seeds.m4a',
        'Songs/EARFQUAKE.m4a',
        'Songs/EVERYTHING MUST GO.m4a',
        'Songs/EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.m4a',
        'Songs/Enjoy Right Now, Today.m4a',
        'Songs/FIND YOUR WINGS.m4a',
        'Songs/Foreword.m4a',
        'Songs/GONE, GONE & THANK YOU.m4a',
        'Songs/Garden Shed.m4a',
        'Songs/Glitter.m4a',
        'Songs/HEAVEN TO ME.m4a',
        'Songs/HOT WIND BLOWS (Audio).m4a',
        'Songs/Hey Jane.m4a',
        'Songs/I DON\'T LOVE YOU ANYMORE.m4a',
        'Songs/I Hope You Find Your Way Home.m4a',
        'Songs/I Killed You.m4a',
        'Songs/I THINK.m4a',
        'Songs/IGOR\'S THEME.m4a',
        'Songs/Jamba.m4a',
        'Songs/Judge Judy.m4a',
        'Songs/KEEP DA O\'S.m4a',
        'Songs/Like Him.m4a',
        'Songs/Lone.m4a',
        'Songs/MANIFESTO (Audio).m4a',
        'Songs/MASSA (Audio).m4a',
        'Songs/MOMMA TALK (Audio).m4a',
        'Songs/NEW MAGIC WAND.m4a',
        'Songs/NOID.m4a',
        'Songs/November.m4a',
        'Songs/OKAGA, CA.m4a',
        'Songs/PILOT.m4a',
        'Songs/PUPPET.m4a',
        'Songs/Parking Lot.m4a',
        'Songs/PartyIsntOver_Campfire_Bimmer.m4a',
        'Songs/Pigs.m4a',
        'Songs/Pothole.m4a',
        'Songs/QUARTZ.m4a',
        'Songs/RISE! (Audio).m4a',
        'Songs/RUN.m4a',
        'Songs/RUNITUP (Audio).m4a',
        'Songs/RUNNING OUT OF TIME.m4a',
        'Songs/Rah Tah Tah.m4a',
        'Songs/SAFARI (Audio).m4a',
        'Songs/SEE YOU AGAIN featuring Kali Uchis.m4a',
        'Songs/SIR BAUDELAIRE (Audio).m4a',
        'Songs/SMUCKERS.m4a',
        'Songs/SORRY NOT SORRY.m4a',
        'Songs/STUNTMAN.m4a',
        'Songs/SWEET _ I THOUGHT YOU WANTED TO DANCE (Audio).m4a',
        'Songs/Slater.m4a',
        'Songs/Sometimes....m4a',
        'Songs/St. Chroma.m4a',
        'Songs/THE BROWN STAINS OF DARKEESE LATIFAH PART 6-12 (Remix).m4a',
        'Songs/Take Your Mask Off.m4a',
        'Songs/Thought I Was Dead.m4a',
        'Songs/Tomorrow.m4a',
        'Songs/Trashwang.m4a',
        'Songs/Treehome95.m4a',
        'Songs/Tyler, The Creator - 911 _ Mr. Lonely (Audio).m4a',
        'Songs/Tyler, The Creator - Ain\'t Got Time (Audio).m4a',
        'Songs/Tyler, The Creator - Boredom (Audio).m4a',
        'Songs/Tyler, The Creator - CORSO (Official Video).m4a',
        'Songs/Tyler, The Creator - Domo 23.m4a',
        'Songs/Tyler, The Creator - IFHY.m4a',
        'Songs/Tyler, The Creator - JUGGERNAUT (Official Video).m4a',
        'Songs/Tyler, The Creator - LEMONHEAD (Official Video).m4a',
        'Songs/Tyler, The Creator - LUMBERJACK (Official Video).m4a',
        'Songs/Tyler, The Creator - Tamale.m4a',
        'Songs/Tyler, The Creator - Tamale_part1_2.m4a',
        'Songs/Tyler, The Creator - Who Dat Boy.m4a',
        'Songs/WHARF TALK.m4a',
        'Songs/WHAT A DAY.m4a',
        'Songs/WHAT\'S GOOD.m4a',
        'Songs/WILSHIRE (Audio).m4a',
        'Songs/WOLF.m4a',
        'Songs/WUSYANAME (Audio).m4a',
        'Songs/Where This Flower Blooms.m4a'
        // Add paths to all your .m4a files here
    ];

    let unplayedSongs = [...songs];

    function getRandomSong() {
        if (unplayedSongs.length === 0) {
            unplayedSongs = [...songs];
        }
        const randomIndex = Math.floor(Math.random() * unplayedSongs.length);
        const selectedSong = unplayedSongs.splice(randomIndex, 1)[0];
        return selectedSong;
    }

    function playNextSong() {
        const nextSong = getRandomSong();
        audioPlayer.src = nextSong;
        audioPlayer.play();
    }

    audioPlayer.addEventListener('ended', playNextSong);

    // Attempt to start playback automatically
    playNextSong();

    // Fallback for browsers that block autoplay
    audioPlayer.addEventListener('play', () => {
        document.getElementById('playButton').style.display = 'none';
    });

    audioPlayer.addEventListener('pause', () => {
        document.getElementById('playButton').style.display = 'block';
    });
});
