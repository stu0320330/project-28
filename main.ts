input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let obstacles: game.LedSprite[] = []
let gap = 0
let bird: game.LedSprite = null
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    gap = randint(0, 4)
    for (let index = 0; index <= 4; index++) {
        if (index != gap) {
            obstacles.push(game.createSprite(4, index))
        }
    }
})
basic.forever(function () {
    let list: game.LedSprite[] = []
    basic.pause(1000)
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X)) {
            game.gameOver()
        }
    }
    while (obstacles.length > 0 && list[0].get(LedSpriteProperty.X) == 0) {
        let obstacle: game.LedSprite[] = []
        obstacle.removeAt(0).delete()
    }
})
