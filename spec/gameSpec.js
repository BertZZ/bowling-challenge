describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  })

  it("Exists", function(){
    expect(game).toBeDefined();
  })

  it("Starts with an empty array of scores" , function(){
    expect(game.frames).toEqual([])
  })
  it("Starts with a score of 0", function(){
    expect(game.gameScore).toEqual(0)
  })

  it("Can save a frame", function(){
    game.newFrame()
    game.frame.ball1(4)
    game.frame.ball2(4)
    game.frame.score()
    game.frame.update()
    game.saveFrame()
    expect(game.frames).not.toEqual([])
    expect(game.frameNumber).toEqual(2)
    expect(game.gameScore).toEqual(8)
  })
})
