describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  it("Exists", function(){
    expect(frame).toBeDefined()
  })

  it("Starts with a frame score of 0", function(){
    expect(frame.totalScore).toEqual(0)
  })

  it("Adds the result af the first ball to the frame", function(){
    var ball1 = frame.ball1(6)
    expect(frame.ball1Score).toEqual(6)
  })

  it("Adds the result af the second ball to the frame", function(){
    var ball2 = frame.ball2(2)
    expect(frame.ball2Score).toEqual(2)
  })

  it("Adds the 2 frame scores together", function(){
    frame.ball1(6)
    frame.ball2(2)
    frame.score()
    expect(frame.totalScore).toEqual(8)
  })

  it("Knows if the frame was a Strike", function(){
    frame.ball1(10)
    frame.update()
    expect(frame.frameOutcome).toEqual("Strike")
  })

  it("Knows if the frame was a Spare", function(){
    frame.ball1(8)
    frame.ball2(2)
    frame.update()
    expect(frame.frameOutcome).toEqual("Spare")
  })

  it("Does not allow a ball 2 score that would take the Total Score over 10", function(){
    frame.ball1(9)
    frame.ball2(2)
    frame.score()
    expect(frame.totalScore).toEqual(9)
  })
})
