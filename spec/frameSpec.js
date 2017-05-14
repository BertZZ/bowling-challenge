describe("Frame", function() {
  var frame
  var ball1

  beforeEach(function() {
    frame = new Frame();
  })

  it("Exists", function(){
    expect(frame).toBeDefined();
  })

  it("Starts with a frame score of 0", function(){
    expect(frame.frameScore).toEqual(0)
  })

  it("Adds the result af the first ball to the frame score", function(){
    expect(frame.frameScore).toEqual(frame.ball1())
  })
})
