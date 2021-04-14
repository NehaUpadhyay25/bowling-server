'use strict';

const Frame = require('./Frame');
const FrameTen = require('./FrameTen');

function Scorecard() {
  this.frames = [];
  this.activegame = false;
  this.activeframe = null;
}

Scorecard.prototype.create = function(element) {
  if (this.frameCount() === 10) {throw new Error ("No more frames available, create a new game to play again."); }
  for (let i = 0; i < 9; i++) { this.frames.push(new element); }
    this.frames.push(new FrameTen());
  this.activegame = true;
  this.activeframe = 0;
};

Scorecard.prototype._updateFrameNumber = function () {


}


Scorecard.prototype.frameCount = function() { 
  return this.frames.length;
};

Scorecard.prototype.score = function () {
  let total = 0;
  for (let i = 0; i < this.frames.length; i++) { total += this.frames[i].score; }
  return total;
};

Scorecard.prototype.evaluateScores = function() {
  for (let i = 0; i < 9; i++) {
    this._evaluateSpare(i);
    this._evaluateStrike(i);
  }
};

Scorecard.prototype._evaluateSpare = function(i) {
   if (this.frames[i].isSpare()) { this.frames[i].score += this._firstExtraRoll(i); }
};

Scorecard.prototype._evaluateStrike = function(i) {
   if (this.frames[i].isStrike()) { this.frames[i].score += (this._firstExtraRoll(i) + this._secondExtraRoll(i)); }
};

Scorecard.prototype._firstExtraRoll = function(i) {
  return this.frames[i+1].firstShot;
};

Scorecard.prototype._secondExtraRoll = function(i) {
  return this.frames[i+1].secondShot || this.frames[i+2].firstShot;
};

Scorecard.prototype.reset = function () {
  if (this.activegame === false){
    throw new Error ("Not an active game to reset");
  }
  this.frames = [];
  this.activegame = false;
}

module.exports = Scorecard;