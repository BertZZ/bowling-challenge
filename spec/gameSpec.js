describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game();
  })

  it("Exists", function(){
    expect(game).toBeDefined();
  })

  it("Starts with an empty array of scores" , function(){
    expect(game.scores).toEqual([])
  })

  it("Starts on Frame 1", function(){
    expect(game.frame).toEqual(1)
  })

})
