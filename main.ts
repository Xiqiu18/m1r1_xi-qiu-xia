basic.showString("Com et sents avui?")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
music.play(music.stringPlayable("F E G F E F E E ", 120), music.PlaybackMode.InBackground)
basic.pause(500)
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    . # # # .
    . # . # .
    `)
music.play(music.tonePlayable(131, music.beat(BeatFraction.Eighth)), music.PlaybackMode.InBackground)
basic.pause(500)
