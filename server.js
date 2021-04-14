const express = require("express");
const Scorecard = require("./src/Scorecard")
const Frame = require("./src/Frame")
const app = express();
app.use(express.json());

let scorecard = new Scorecard();


// GET Call to get the full score
app.get("/fullscore", (req, res) => {

    scorecard.evaluateScores()
    return res.status(200).send({
        status: "true",
        response: scorecard.score(),
    });
});

// GET Call to get the full score
app.get("/scorecard_status", (req, res) => {
    scorecard.evaluateScores()
    return res.status(200).send({
        status: "true",
        body: {
            scorecard: scorecard.frames,
            full_score: scorecard.score()
        },
    });
});

// POST Call for creating a new game
app.post("/newgame", (req, res) => {

    try{
        scorecard.create(Frame);
        return res.status(200).send({
            status: "success",
            message: "New Game Started",
            body: scorecard.frames
        });
    }catch (e) {
        return res.status(400).send({
            status: "failed",
            message: "Server Error",
        });
    }

});

// POST Call for reseting the game
app.post("/reset", (req, res) => {

    try{
        scorecard.reset();
        return res.status(200).send({
            status: "success",
            message: "Game Reset Successfull",
        });
    }catch (e) {
        return res.status(400).send({
            status: "failed",
            message: "Server Error",
        });
    }

});

// POST Call to input points into every frame
app.post("/frame/input", (req, res) => {

    if (!("points" in req.body) || !("frame_number" in req.body)) {
        return res.status(400).send({
            status: "failed",
            message: "Invalid Input",
        });
    }

    let frame_number = req.body.frame_number;
    let points = req.body.points;
    let message = scorecard.frames[frame_number-1].receiveShot(points)


    try{
        return res.status(200).send({
            status: "true",
            response: message,
            body: scorecard.frames[frame_number-1],
            scorecard_status: scorecard.frames
        });
    } catch (e) {
        return res.status(404).send({
            status: "failed",
            response: "Problem with the frames"
        });
    }
});

app.listen(8000, () => {
    console.log("server listening on port 8000!");
});
