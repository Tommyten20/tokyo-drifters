namespace SpriteKind {
    export const mouse = SpriteKind.create()
    export const playbutton = SpriteKind.create()
    export const car = SpriteKind.create()
    export const camra = SpriteKind.create()
    export const ifidant = SpriteKind.create()
    export const oneplayer = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    tiles.placeOnTile(p2, tiles.getTileLocation(0, 8))
    tiles.placeOnTile(p3, tiles.getTileLocation(0, 9))
    p1.vx += 10
    p2.vx += 10
    p3.vx += 10
})
function game3 () {
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroy(car1)
    sprites.destroy(car2)
    sprites.destroy(car3)
    sprites.destroy(car4)
    sprites.destroy(p1_mouse)
    sprites.destroy(p2_mouse)
    sprites.destroy(p3_mouse)
    sprites.destroy(p4_mouse)
    sprites.destroy(play_button)
    sprites.destroy(title)
    sprites.destroy(infidint_mode)
    sprites.destroy(one_player)
    p1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 9 9 . . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    p2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 . . . . . . . 
        . 7 7 7 7 7 7 7 9 9 . . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    p3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c . . . . . . . 
        . c c c c c c c 9 9 . . . . . . 
        . c c c c c c c 9 9 9 . . . . . 
        . c c c c c c c 9 9 9 9 . . . . 
        . c c c c c c c 9 9 9 9 c . . . 
        . c c c c c c c c c c c c . . . 
        . c c c c c c c c c c c c . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    p4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 3 3 3 3 3 3 3 3 . . . . . . . 
        . 3 3 3 3 3 3 3 9 9 . . . . . . 
        . 3 3 3 3 3 3 3 9 9 9 . . . . . 
        . 3 3 3 3 3 3 3 9 9 9 9 . . . . 
        . 3 3 3 3 3 3 3 9 9 9 9 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    tiles.placeOnTile(p2, tiles.getTileLocation(0, 8))
    tiles.placeOnTile(p3, tiles.getTileLocation(0, 9))
    tiles.placeOnTile(p4, tiles.getTileLocation(0, 10))
    scene.cameraFollowSprite(p1)
    pause(5000)
    p1.setVelocity(30, 0)
    p2.setVelocity(30, 0)
    p3.setVelocity(30, 0)
    p4.setVelocity(30, 0)
    controller.player1.moveSprite(p1, 0, 40)
    controller.player2.moveSprite(p2, 0, 40)
    controller.player3.moveSprite(p3, 0, 40)
    controller.player4.moveSprite(p4, 0, 40)
}
sprites.onOverlap(SpriteKind.mouse, SpriteKind.playbutton, function (sprite, otherSprite) {
    game3()
})
function home_screen () {
    tiles.setCurrentTilemap(tilemap`level9`)
    scene.setBackgroundColor(8)
    car1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 9 9 . . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scaling.scaleToPercent(car1, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    car2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 . . . . . . . 
        . 7 7 7 7 7 7 7 9 9 . . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scaling.scaleToPercent(car2, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    car2.setPosition(49, 60)
    car3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c . . . . . . . 
        . c c c c c c c 9 9 . . . . . . 
        . c c c c c c c 9 9 9 . . . . . 
        . c c c c c c c 9 9 9 9 . . . . 
        . c c c c c c c 9 9 9 9 c . . . 
        . c c c c c c c c c c c c . . . 
        . c c c c c c c c c c c c . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scaling.scaleToPercent(car3, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    car3.setPosition(112, 60)
    car4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 3 3 3 3 3 3 3 3 . . . . . . . 
        . 3 3 3 3 3 3 3 9 9 . . . . . . 
        . 3 3 3 3 3 3 3 9 9 9 . . . . . 
        . 3 3 3 3 3 3 3 9 9 9 9 . . . . 
        . 3 3 3 3 3 3 3 9 9 9 9 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scaling.scaleToPercent(car4, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    car4.setPosition(80, 86)
    title = textsprite.create("TOKYO DRIFTERS")
    scaling.scaleToPercent(title, 170, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    title.setPosition(80, 27)
    p1_mouse = sprites.create(img`
        . . . 2 2 2 . . . . . . . . . . 
        . . . 2 1 1 2 . . . . . . . . . 
        . . . 2 1 1 1 2 . . . . . . . . 
        . . . 2 1 1 1 1 2 . . . . . . . 
        . . . 2 1 1 1 1 1 2 . . . . . . 
        . . . 2 1 1 1 1 1 1 2 . . . . . 
        . . . 2 1 1 1 1 1 1 1 2 . . . . 
        . . . 2 1 1 1 1 1 1 1 1 2 . . . 
        . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
        . . . 2 1 1 1 1 1 1 1 1 1 1 2 . 
        . . . 2 1 1 1 1 2 1 1 1 2 2 2 2 
        . . . 2 1 1 1 2 . 2 1 1 2 . . . 
        . . . 2 1 1 2 . . 2 1 1 2 . . . 
        . . . 2 1 2 . . . . 2 1 1 2 . . 
        . . . 2 2 . . . . . 2 1 1 2 . . 
        . . . 2 . . . . . . . 2 2 . . . 
        `, SpriteKind.mouse)
    controller.player1.moveSprite(p1_mouse)
    p1_mouse.setStayInScreen(true)
    p2_mouse = sprites.create(img`
        . . . 8 8 8 . . . . . . . . . . 
        . . . 8 1 1 8 . . . . . . . . . 
        . . . 8 1 1 1 8 . . . . . . . . 
        . . . 8 1 1 1 1 8 . . . . . . . 
        . . . 8 1 1 1 1 1 8 . . . . . . 
        . . . 8 1 1 1 1 1 1 8 . . . . . 
        . . . 8 1 1 1 1 1 1 1 8 . . . . 
        . . . 8 1 1 1 1 1 1 1 1 8 . . . 
        . . . 8 1 1 1 1 1 1 1 1 1 8 . . 
        . . . 8 1 1 1 1 1 1 1 1 1 1 8 . 
        . . . 8 1 1 1 1 8 1 1 1 8 8 8 8 
        . . . 8 1 1 1 8 . 8 1 1 8 . . . 
        . . . 8 1 1 8 . . 8 1 1 8 . . . 
        . . . 8 1 8 . . . . 8 1 1 8 . . 
        . . . 8 8 . . . . . 8 1 1 8 . . 
        . . . 8 . . . . . . . 8 8 . . . 
        `, SpriteKind.mouse)
    controller.player2.moveSprite(p2_mouse)
    p2_mouse.setStayInScreen(true)
    p3_mouse = sprites.create(img`
        . . . c c c . . . . . . . . . . 
        . . . c 1 1 c . . . . . . . . . 
        . . . c 1 1 1 c . . . . . . . . 
        . . . c 1 1 1 1 c . . . . . . . 
        . . . c 1 1 1 1 1 c . . . . . . 
        . . . c 1 1 1 1 1 1 c . . . . . 
        . . . c 1 1 1 1 1 1 1 c . . . . 
        . . . c 1 1 1 1 1 1 1 1 c . . . 
        . . . c 1 1 1 1 1 1 1 1 1 c . . 
        . . . c 1 1 1 1 1 1 1 1 1 1 c . 
        . . . c 1 1 1 1 c 1 1 1 c c c c 
        . . . c 1 1 1 c . c 1 1 c . . . 
        . . . c 1 1 c . . c 1 1 c . . . 
        . . . c 1 c . . . . c 1 1 c . . 
        . . . c c . . . . . c 1 1 c . . 
        . . . c . . . . . . . c c . . . 
        `, SpriteKind.mouse)
    controller.player3.moveSprite(p3_mouse)
    p3_mouse.setStayInScreen(true)
    p4_mouse = sprites.create(img`
        . . . e e e . . . . . . . . . . 
        . . . e 1 1 e . . . . . . . . . 
        . . . e 1 1 1 e . . . . . . . . 
        . . . e 1 1 1 1 e . . . . . . . 
        . . . e 1 1 1 1 1 e . . . . . . 
        . . . e 1 1 1 1 1 1 e . . . . . 
        . . . e 1 1 1 1 1 1 1 e . . . . 
        . . . e 1 1 1 1 1 1 1 1 e . . . 
        . . . e 1 1 1 1 1 1 1 1 1 e . . 
        . . . e 1 1 1 1 1 1 1 1 1 1 e . 
        . . . e 1 1 1 1 e 1 1 1 e e e e 
        . . . e 1 1 1 e . e 1 1 e . . . 
        . . . e 1 1 e . . e 1 1 e . . . 
        . . . e 1 e . . . . e 1 1 e . . 
        . . . e e . . . . . e 1 1 e . . 
        . . . e . . . . . . . e e . . . 
        `, SpriteKind.mouse)
    controller.player4.moveSprite(p4_mouse)
    p4_mouse.setStayInScreen(true)
    play_button = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 8 8 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 8 8 8 8 7 7 7 7 7 7 7 . 
        . 7 7 7 8 8 8 8 8 7 7 7 7 7 7 . 
        . 7 7 7 8 8 8 8 8 8 8 7 7 7 7 . 
        . 7 7 7 8 8 8 8 8 8 8 8 7 7 7 . 
        . 7 7 7 8 8 8 8 8 8 8 8 7 7 7 . 
        . 7 7 7 8 8 8 8 8 8 8 8 7 7 7 . 
        . 7 7 7 8 8 8 8 8 8 8 7 7 7 7 . 
        . 7 7 7 8 8 8 8 8 7 7 7 7 7 7 . 
        . 7 7 7 8 8 8 8 7 7 7 7 7 7 7 . 
        . 7 7 7 8 8 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        `, SpriteKind.playbutton)
    scaling.scaleToPercent(play_button, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    play_button.setPosition(49, 86)
    infidint_mode = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 2 2 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 2 2 2 2 4 4 4 4 4 4 4 . 
        . 4 4 4 2 2 2 2 2 4 4 4 4 4 4 . 
        . 4 4 4 2 2 2 2 2 2 2 4 4 4 4 . 
        . 4 4 4 2 2 2 2 2 2 2 2 4 4 4 . 
        . 4 4 4 2 2 2 2 2 2 2 2 4 4 4 . 
        . 4 4 4 2 2 2 2 2 2 2 2 4 4 4 . 
        . 4 4 4 2 2 2 2 2 2 2 4 4 4 4 . 
        . 4 4 4 2 2 2 2 2 4 4 4 4 4 4 . 
        . 4 4 4 2 2 2 2 4 4 4 4 4 4 4 . 
        . 4 4 4 2 2 4 4 4 4 4 4 4 4 4 . 
        . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
        `, SpriteKind.ifidant)
    scaling.scaleToPercent(infidint_mode, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    infidint_mode.setPosition(108, 86)
    one_player = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 5 5 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 5 5 5 5 3 3 3 3 3 3 3 . 
        . 3 3 3 5 5 5 5 5 3 3 3 3 3 3 . 
        . 3 3 3 5 5 5 5 5 5 5 3 3 3 3 . 
        . 3 3 3 5 5 5 5 5 5 5 5 3 3 3 . 
        . 3 3 3 5 5 5 5 5 5 5 5 3 3 3 . 
        . 3 3 3 5 5 5 5 5 5 5 5 3 3 3 . 
        . 3 3 3 5 5 5 5 5 5 5 3 3 3 3 . 
        . 3 3 3 5 5 5 5 5 3 3 3 3 3 3 . 
        . 3 3 3 5 5 5 5 3 3 3 3 3 3 3 . 
        . 3 3 3 5 5 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        `, SpriteKind.oneplayer)
    scaling.scaleToPercent(one_player, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    one_player.setPosition(80, 110)
}
scene.onOverlapTile(SpriteKind.car, assets.tile`myTile0`, function (sprite, location) {
    pause(5000)
    sprites.destroy(p1)
    tiles.setCurrentTilemap(tilemap`level5`)
    game.gameOver(true)
})
function game2 () {
    info.setScore(0)
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroy(car1)
    sprites.destroy(car2)
    sprites.destroy(car3)
    sprites.destroy(car4)
    sprites.destroy(p1_mouse)
    sprites.destroy(p2_mouse)
    sprites.destroy(p3_mouse)
    sprites.destroy(p4_mouse)
    sprites.destroy(play_button)
    sprites.destroy(title)
    sprites.destroy(infidint_mode)
    sprites.destroy(one_player)
    p1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 9 9 . . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    p2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 7 7 7 . . . . . . . 
        . 7 7 7 7 7 7 7 9 9 . . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 . . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 . . . . 
        . 7 7 7 7 7 7 7 9 9 9 9 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    p3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . c c c c c c c c . . . . . . . 
        . c c c c c c c 9 9 . . . . . . 
        . c c c c c c c 9 9 9 . . . . . 
        . c c c c c c c 9 9 9 9 . . . . 
        . c c c c c c c 9 9 9 9 c . . . 
        . c c c c c c c c c c c c . . . 
        . c c c c c c c c c c c c . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    tiles.placeOnTile(p2, tiles.getTileLocation(0, 8))
    tiles.placeOnTile(p3, tiles.getTileLocation(0, 9))
    scene.cameraFollowSprite(p1)
    pause(5000)
    p1.setVelocity(30, 0)
    p2.setVelocity(30, 0)
    p3.setVelocity(30, 0)
    controller.player1.moveSprite(p1, 0, 40)
    controller.player2.moveSprite(p2, 0, 40)
    controller.player3.moveSprite(p3, 0, 40)
}
scene.onHitWall(SpriteKind.car, function (sprite, location) {
    sprites.destroy(p1)
    pause(5000)
    tiles.setCurrentTilemap(tilemap`level5`)
    game.gameOver(false)
})
function one_player_fun () {
    info.setScore(0)
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`level2`)
    sprites.destroy(car1)
    sprites.destroy(car2)
    sprites.destroy(car3)
    sprites.destroy(car4)
    sprites.destroy(p1_mouse)
    sprites.destroy(p2_mouse)
    sprites.destroy(p3_mouse)
    sprites.destroy(p4_mouse)
    sprites.destroy(play_button)
    sprites.destroy(title)
    sprites.destroy(infidint_mode)
    sprites.destroy(one_player)
    p1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 . . . . . . . 
        . 2 2 2 2 2 2 2 9 9 . . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 . . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 . . . . 
        . 2 2 2 2 2 2 2 9 9 9 9 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
        . f f f . . . . . . f f f . . . 
        . f . f . . . . . . f . f . . . 
        . f f f . . . . . . f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.car)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    scene.cameraFollowSprite(p1)
    pause(5000)
    p1.setVelocity(30, 0)
    controller.player1.moveSprite(p1, 0, 40)
}
sprites.onOverlap(SpriteKind.mouse, SpriteKind.oneplayer, function (sprite, otherSprite) {
    one_player_fun()
})
info.onScore(20, function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.car, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.placeOnTile(p1, tiles.getTileLocation(0, 7))
    p1.vx += 10
})
sprites.onOverlap(SpriteKind.mouse, SpriteKind.ifidant, function (sprite, otherSprite) {
    game2()
})
let p4: Sprite = null
let one_player: Sprite = null
let infidint_mode: Sprite = null
let title: TextSprite = null
let play_button: Sprite = null
let p4_mouse: Sprite = null
let p3_mouse: Sprite = null
let p2_mouse: Sprite = null
let p1_mouse: Sprite = null
let car4: Sprite = null
let car3: Sprite = null
let car2: Sprite = null
let car1: Sprite = null
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
home_screen()
