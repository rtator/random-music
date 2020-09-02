let music_number = 0
basic.forever(function () {
	
})
basic.forever(function () {
    music_number = randint(247, 440)
    music.playTone(music_number, music.beat(BeatFraction.Half))
})
