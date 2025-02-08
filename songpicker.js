document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const songs = [
		'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/2SEATER.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/48.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/A BOY IS A GUN_.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/ARE WE STILL FRIENDS_.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Awkward.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/BLESSED (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/BOYFRIEND, GIRLFRIEND (2020 Demo).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/BUFFALO.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Balloon.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/CHERRY BOMB.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Colossus.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Cowboy.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/DEATHCAMP.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/DOGTOOTH.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Darling, I.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Droppin\' Seeds.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/EARFQUAKE.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/EVERYTHING MUST GO.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/EXACTLY WHAT YOU RUN FROM YOU END UP CHASING.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Enjoy Right Now, Today.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/FIND YOUR WINGS.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Foreword.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/GONE, GONE & THANK YOU.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Garden Shed.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Glitter.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/HEAVEN TO ME.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/HOT WIND BLOWS (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Hey Jane.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/I DON\'T LOVE YOU ANYMORE.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/I Hope You Find Your Way Home.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/I Killed You.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/I THINK.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/IGOR\'S THEME.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Jamba.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Judge Judy.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/KEEP DA O\'S.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Like Him.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Lone.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/MANIFESTO (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/MASSA (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/MOMMA TALK (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/NEW MAGIC WAND.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/NOID.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/November.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/OKAGA, CA.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/PILOT.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/PUPPET.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Parking Lot.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/PartyIsntOver_Campfire_Bimmer.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Pigs.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Pothole.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/QUARTZ.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/RISE! (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/RUN.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/RUNITUP (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/RUNNING OUT OF TIME.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Rah Tah Tah.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SAFARI (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SEE YOU AGAIN featuring Kali Uchis.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SIR BAUDELAIRE (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SMUCKERS.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SORRY NOT SORRY.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/STUNTMAN.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/SWEET _ I THOUGHT YOU WANTED TO DANCE (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Slater.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Sometimes....m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/St. Chroma.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/THE BROWN STAINS OF DARKEESE LATIFAH PART 6-12 (Remix).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Take Your Mask Off.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Thought I Was Dead.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tomorrow.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Trashwang.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Treehome95.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - 911 _ Mr. Lonely (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Ain\'t Got Time (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Boredom (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - CORSO (Official Video).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Domo 23.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - IFHY.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - JUGGERNAUT (Official Video).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - LEMONHEAD (Official Video).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - LUMBERJACK (Official Video).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Tamale.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Tamale_part1_2.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Tyler, The Creator - Who Dat Boy.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WHARF TALK.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WHAT A DAY.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WHAT\'S GOOD.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WILSHIRE (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WOLF.m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/WUSYANAME (Audio).m4a',
        'https://github.com/ArthurMSM2lmao/ArthurMSM-FM.github.io/blob/main/Songs/Where This Flower Blooms.m4a'
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
