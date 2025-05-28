namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Attack = SpriteKind.create()
}
function Make_Grid () {
    Tile = img`
        ........................fff........................
        ......................ffdddff......................
        ....................ffdddddddff....................
        ..................ffdddddddddddff..................
        ................ffdddddddddddddddff................
        ..............ffdddddddddddddddddddff..............
        ............ffdddddddddddddddddddddddff............
        ..........ffdddddddddddddddddddddddddddff..........
        ........ffdddddddddddddddddddddddddddddddff........
        ......ffdddddddddddddddddddddddddddddddddddff......
        ....ffdddddddddddddddddddddddddddddddddddddddff....
        ..ffdddddddddddddddddddddddddddddddddddddddddddff..
        ffdddddddddddddddddddddddddddddddddddddddddddddddff
        fcffdddddddddddddddddddddddddddddddddddddddddddffbf
        fcccffdddddddddddddddddddddddddddddddddddddddffbbbf
        fcccccffdddddddddddddddddddddddddddddddddddffbbbbbf
        fcccccccffdddddddddddddddddddddddddddddddffbbbbbbbf
        fcccccccccffdddddddddddddddddddddddddddffbbbbbbbbbf
        fcccccccccccffdddddddddddddddddddddddffbbbbbbbbbbbf
        fcccccccccccccffdddddddddddddddddddffbbbbbbbbbbbbbf
        fcccccccccccccccffdddddddddddddddffbbbbbbbbbbbbbbbf
        fcccccccccccccccccffdddddddddddffbbbbbbbbbbbbbbbbbf
        fcccccccccccccccccccffdddddddffbbbbbbbbbbbbbbbbbbbf
        fcccccccccccccccccccccffdddffbbbbbbbbbbbbbbbbbbbbbf
        fcccccccccccccccccccccccfffbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        fccccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbbf
        ffcccccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbbbff
        ..ffcccccccccccccccccccccfbbbbbbbbbbbbbbbbbbbbbff..
        ....ffcccccccccccccccccccfbbbbbbbbbbbbbbbbbbbff....
        ......ffcccccccccccccccccfbbbbbbbbbbbbbbbbbff......
        ........ffcccccccccccccccfbbbbbbbbbbbbbbbff........
        ..........ffcccccccccccccfbbbbbbbbbbbbbff..........
        ............ffcccccccccccfbbbbbbbbbbbff............
        ..............ffcccccccccfbbbbbbbbbff..............
        ................ffcccccccfbbbbbbbff................
        ..................ffcccccfbbbbbff..................
        ....................ffcccfbbbff....................
        ......................ffcfbff......................
        ........................fff........................
        `
    X = 80
    Y = 30
    for (let index = 0; index < 6; index++) {
        for (let index = 0; index <= 5; index++) {
            Tiling_Sprite = sprites.create(Tile, SpriteKind.Ground)
            Tiling_Sprite.setPosition(X - 12.5 * index, Y + 6 * index)
            Tiling_Sprite.changeScale(-0.5, ScaleAnchor.Middle)
        }
        X += 12.5
        Y += 6
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 351, function () {
        if (Direction == "Left") {
            Carrot_Weapon = sprites.create(img`
                4 4 4 . . . . . . . 
                4 4 4 4 . . . . . . 
                4 4 4 4 4 . . . . . 
                . 4 4 4 4 4 . . . . 
                . . 4 4 4 4 4 . . . 
                . . . 4 4 4 4 . . . 
                . . . . 4 4 4 7 . . 
                . . . . . . 7 7 . 7 
                . . . . . . . . 7 . 
                `, SpriteKind.Attack)
            Carrot_Weapon.setPosition(mySprite.x - 14, mySprite.y + 2)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 932, 516, 79, 0, 350, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            timer.debounce("Attack", 350, function () {
                sprites.destroy(Carrot_Weapon)
            })
        } else if (Direction == "Right") {
            Carrot_Weapon = sprites.create(img`
                . . . . . . 4 4 4 
                . . . . . 4 4 4 4 
                . . . . 4 4 4 4 4 
                . . . 4 4 4 4 4 . 
                . . 4 4 4 4 4 . . 
                . . 4 4 4 4 . . . 
                . 7 4 4 4 . . . . 
                . 7 7 . . . . . . 
                7 . . . . . . . . 
                . 7 . . . . . . . 
                `, SpriteKind.Attack)
            Carrot_Weapon.setPosition(mySprite.x + 14, mySprite.y + 2)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 932, 516, 79, 0, 350, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            timer.debounce("Attack", 350, function () {
                sprites.destroy(Carrot_Weapon)
            })
        } else if (Direction == "Up") {
            Carrot_Weapon = sprites.create(img`
                . . . . 4 . . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 7 7 7 . . . 
                . . . . 7 . . . . 
                . . . . . 7 . . . 
                `, SpriteKind.Attack)
            Carrot_Weapon.setPosition(mySprite.x, mySprite.y - 14)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 932, 516, 79, 0, 350, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            timer.debounce("Attack", 350, function () {
                sprites.destroy(Carrot_Weapon)
            })
        } else if (Direction == "Down") {
            Carrot_Weapon = sprites.create(img`
                . . . . . 7 . . . 
                . . . . 7 . . . . 
                . . . 7 7 7 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . 4 4 4 . . . 
                . . . . 4 . . . . 
                `, SpriteKind.Attack)
            Carrot_Weapon.setPosition(mySprite.x, mySprite.y + 14)
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 932, 516, 79, 0, 350, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            timer.debounce("Attack", 350, function () {
                sprites.destroy(Carrot_Weapon)
            })
        }
    })
})
// Doesn't Work if 
// Move Sprite with VX() and VY() 
// is in use
function Slippery_Bunny (Switch: boolean) {
    if (Switch == true) {
        mySprite.setFlag(SpriteFlag.StayInScreen, true)
        mySprite.setFlag(SpriteFlag.ShowPhysics, true)
        mySprite.setFlag(SpriteFlag.BounceOnWall, true)
        mySprite.setFlag(SpriteFlag.GhostThroughSprites, true)
        if (controller.left.isPressed()) {
            if (mySprite.vx <= 60 && mySprite.vx >= -60) {
                timer.throttle("Speed Up", 500, function () {
                    mySprite.vx += -20
                })
            }
        } else if (controller.right.isPressed()) {
            if (mySprite.vx <= 60 && mySprite.vx >= -60) {
                timer.throttle("Speed Up", 500, function () {
                    mySprite.vx += 20
                })
            }
        } else if (controller.up.isPressed()) {
            if (mySprite.vy <= 60 && mySprite.vy >= -60) {
                timer.throttle("Speed Up", 500, function () {
                    mySprite.vy += -20
                })
            }
        } else if (controller.down.isPressed()) {
            if (mySprite.vy <= 60 && mySprite.vy >= -60) {
                timer.throttle("Speed Up", 500, function () {
                    mySprite.vy += 20
                })
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Food, SpriteKind.Food, function (sprite, otherSprite) {
    timer.throttle("Stabilize Wheat", 1, function () {
        if (sprite.y > otherSprite.y) {
            Wheat = sprites.create(img`
                ........................55........................
                ......................555555......................
                ....................5555555555....................
                ..................55555555555555..................
                ................555555555555555555................
                ..............5555555555555555555555..............
                ............55555555555455555555555555............
                ..........555555555555554555555555555555..........
                ........5555555555555555555555555555555555........
                ......55555555555555555555555555555555555555......
                ....555555555555555455555555545555555455555555....
                ..5555555555555555545555555554555555545555555555..
                55555545555554555555555555555455555555555555555555
                55555555555554555555555555555455555555555555555555
                55545555555555555555555555555555555555555455455555
                45544555555555555555555545555555555555555455445545
                45544555555555555555555545555555555445555455445445
                44544545545455555555555555555555555445554444445444
                44444444444445555555555555555555555444554444444444
                44444444444445555555555555555545554444454444444444
                44444444444445445455555555555544544444454444444444
                44444444444444445445555555555444444444444444444444
                44444444444444444445545554555444444444444444444444
                44444444444444444444545454454444444444444444444444
                44444444444444444444444454444444444444444444444444
                44444444444444444444444444444444444444444444444444
                ff4444444444444444444444444444444444444444444444ff
                ..ff444444444444444444444444444444444444444444ff..
                ....ff44444444444444444444444444444444444444ff....
                ......ff4444444444444444444444444444444444ff......
                ........ff444444444444444444444444444444ff........
                ..........ff44444444444444444444444444ff..........
                ............ff4444444444444444444444ff............
                ..............ff444444444444444444ff..............
                ................ff44444444444444ff................
                ..................ff4444444444ff..................
                ....................ff444444ff....................
                ......................ff44ff......................
                ........................ff........................
                `, SpriteKind.Food)
            Wheat.setScale(0.5, ScaleAnchor.Middle)
            Wheat.setPosition(sprite.x, sprite.y)
            sprites.destroy(sprite)
        } else if (otherSprite.y > sprite.y) {
            Wheat = sprites.create(img`
                ........................55........................
                ......................555555......................
                ....................5555555555....................
                ..................55555555555555..................
                ................555555555555555555................
                ..............5555555555555555555555..............
                ............55555555555455555555555555............
                ..........555555555555554555555555555555..........
                ........5555555555555555555555555555555555........
                ......55555555555555555555555555555555555555......
                ....555555555555555455555555545555555455555555....
                ..5555555555555555545555555554555555545555555555..
                55555545555554555555555555555455555555555555555555
                55555555555554555555555555555455555555555555555555
                55545555555555555555555555555555555555555455455555
                45544555555555555555555545555555555555555455445545
                45544555555555555555555545555555555445555455445445
                44544545545455555555555555555555555445554444445444
                44444444444445555555555555555555555444554444444444
                44444444444445555555555555555545554444454444444444
                44444444444445445455555555555544544444454444444444
                44444444444444445445555555555444444444444444444444
                44444444444444444445545554555444444444444444444444
                44444444444444444444545454454444444444444444444444
                44444444444444444444444454444444444444444444444444
                44444444444444444444444444444444444444444444444444
                ff4444444444444444444444444444444444444444444444ff
                ..ff444444444444444444444444444444444444444444ff..
                ....ff44444444444444444444444444444444444444ff....
                ......ff4444444444444444444444444444444444ff......
                ........ff444444444444444444444444444444ff........
                ..........ff44444444444444444444444444ff..........
                ............ff4444444444444444444444ff............
                ..............ff444444444444444444ff..............
                ................ff44444444444444ff................
                ..................ff4444444444ff..................
                ....................ff444444ff....................
                ......................ff44ff......................
                ........................ff........................
                `, SpriteKind.Food)
            Wheat.setScale(0.5, ScaleAnchor.Middle)
            Wheat.setPosition(otherSprite.x, otherSprite.y)
            sprites.destroy(otherSprite)
        } else {
        	
        }
    })
})
sprites.onOverlap(SpriteKind.Attack, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    Enemy_Spawned = 0
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    timer.throttle("Enemy Attack", 1500, function () {
        info.changeLifeBy(-1)
    })
})
sprites.onOverlap(SpriteKind.Attack, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
/**
 * Regular Offsets
 * 
 * X - 25
 * 
 * Y - 12
 */
function Check_Direction () {
    if (controller.left.isPressed()) {
        Direction = "Left"
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . c c c . c c c . . . . . . . . 
            c b d d c b d b c . . . . . . . 
            . c d 4 b c d 4 b c . . c c . . 
            . c d 4 b c d 4 d c c c 1 1 c . 
            . c d 4 b c d 4 d c b d 1 1 c . 
            . c d d d d d d d c d d d d b c 
            c b d d d d d d d d d d d d d c 
            c d c d d d c d d d d c d d d c 
            c d c d 4 d c d d d c d d d d c 
            c b d d d d d d d d c b d d b c 
            . c b d d d d b c d b c d b c . 
            . . c c c c c c d b c b b c . . 
            . . . c b b c b b c c c c c . . 
            . . . . c c . c c . . . . . . . 
            `)
    } else if (controller.right.isPressed()) {
        Direction = "Right"
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c . c c c . 
            . . . . . . . c b d b c d d b c 
            . . c c . . c b 4 d c b 4 d c . 
            . c 1 1 c c c d 4 d c b 4 d c . 
            . c 1 1 d b c d 4 d c b 4 d c . 
            c b d d d d c d d d d d d d c . 
            c d d d d d d d d d d d d d b c 
            c d d d c d d d d c d d d c d c 
            c d d d d c d d d c d 4 d c d c 
            c b d d b c d d d d d d d d b c 
            . c b d c b d c b d d d d b c . 
            . . c b b c b d c c c c c c . . 
            . . c c c c c b b c b b c . . . 
            . . . . . . . c c . c c . . . . 
            `)
    } else if (controller.up.isPressed()) {
        Direction = "Up"
    } else if (controller.down.isPressed()) {
        Direction = "Down"
    }
}
let Wheat_Y = 0
let Wheat_X = 0
let Enemy_Y = 0
let Enemy_X = 0
let mySprite2: Sprite = null
let Random = 0
let Wheat: Sprite = null
let Carrot_Weapon: Sprite = null
let Direction = ""
let Tiling_Sprite: Sprite = null
let Y = 0
let X = 0
let Tile: Image = null
let Enemy_Spawned = 0
let mySprite: Sprite = null
Make_Grid()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . c c c . c c c . . . . . . . . 
    c b d d c b d b c . . . . . . . 
    . c d 4 b c d 4 b c . . c c . . 
    . c d 4 b c d 4 d c c c 1 1 c . 
    . c d 4 b c d 4 d c b d 1 1 c . 
    . c d d d d d d d c d d d d b c 
    c b d d d d d d d d d d d d d c 
    c d c d d d c d d d d c d d d c 
    c d c d 4 d c d d d c d d d d c 
    c b d d d d d d d d c b d d b c 
    . c b d d d d b c d b c d b c . 
    . . c c c c c c d b c b b c . . 
    . . . c b b c b b c c c c c . . 
    . . . . c c . c c . . . . . . . 
    `, SpriteKind.Player)
Enemy_Spawned = 0
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    Check_Direction()
})
game.onUpdateInterval(randint(5000, 100000), function () {
    if (Enemy_Spawned == 0) {
        Random = randint(0, 35)
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b d b . . . . . . 
            . . . . . . b 5 5 5 b . . . . . 
            . . . . . b b 5 5 5 b b . . . . 
            . . b b b b 5 5 5 1 1 b b b b . 
            . . b 5 5 5 5 f 5 f 1 5 5 5 b . 
            . . b d d 5 5 5 5 5 5 5 d d b . 
            . . . b d d 5 5 5 5 5 d d b . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c b 5 5 5 5 5 5 5 b c . . 
            . . . c 5 5 d d b d d 5 5 c . . 
            . . . c 5 d d c c c d d 5 c . . 
            . . . c c c c . . . c c c c . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        Enemy_X = (Random - Random % 6) / 6
        Enemy_Y = Random % 6
        mySprite2.setPosition((Enemy_Y - Enemy_X) * 12.5 + 80, (Enemy_X + Enemy_Y) * 6 + 18)
        mySprite2.follow(mySprite, randint(20, 35))
        Enemy_Spawned = 1
    }
})
game.onUpdateInterval(500, function () {
    Random = randint(0, 35)
    Wheat = sprites.create(img`
        ........................55........................
        ......................555555......................
        ....................5555555555....................
        ..................55555555555555..................
        ................555555555555555555................
        ..............5555555555555555555555..............
        ............55555555555455555555555555............
        ..........555555555555554555555555555555..........
        ........5555555555555555555555555555555555........
        ......55555555555555555555555555555555555555......
        ....555555555555555455555555545555555455555555....
        ..5555555555555555545555555554555555545555555555..
        55555545555554555555555555555455555555555555555555
        55555555555554555555555555555455555555555555555555
        55545555555555555555555555555555555555555455455555
        45544555555555555555555545555555555555555455445545
        45544555555555555555555545555555555445555455445445
        44544545545455555555555555555555555445554444445444
        44444444444445555555555555555555555444554444444444
        44444444444445555555555555555545554444454444444444
        44444444444445445455555555555544544444454444444444
        44444444444444445445555555555444444444444444444444
        44444444444444444445545554555444444444444444444444
        44444444444444444444545454454444444444444444444444
        44444444444444444444444454444444444444444444444444
        44444444444444444444444444444444444444444444444444
        ff4444444444444444444444444444444444444444444444ff
        ..ff444444444444444444444444444444444444444444ff..
        ....ff44444444444444444444444444444444444444ff....
        ......ff4444444444444444444444444444444444ff......
        ........ff444444444444444444444444444444ff........
        ..........ff44444444444444444444444444ff..........
        ............ff4444444444444444444444ff............
        ..............ff444444444444444444ff..............
        ................ff44444444444444ff................
        ..................ff4444444444ff..................
        ....................ff444444ff....................
        ......................ff44ff......................
        ........................ff........................
        `, SpriteKind.Food)
    Wheat.setScale(0.5, ScaleAnchor.Middle)
    Wheat_X = (Random - Random % 6) / 6
    Wheat_Y = Random % 6
    Wheat.setPosition((Wheat_Y - Wheat_X) * 12.5 + 80, (Wheat_X + Wheat_Y) * 6 + 21)
})
