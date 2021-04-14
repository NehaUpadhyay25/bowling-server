'use strict';

var Player = require('/Users/nehaupadhyay/Downloads/bowling-scorecard-v1/src/Player.js');
var Frame = require('/Users/nehaupadhyay/Downloads/bowling-scorecard-v1/src/Frame.js');
const {it} = require("jasmine-node");
const {expect} = require("jasmine-node");
const {beforeEach} = require("jasmine-node");
const {describe} = require("jasmine-node");

describe('Player', function() {

    it('should be able to bowl', function(){
      var player = new Player();
      var frame = jasmine.createSpyObj(Frame, ['receiveShot']);
      player.bowl(4, frame);
      expect(frame.receiveShot).toHaveBeenCalled();
    });

});
