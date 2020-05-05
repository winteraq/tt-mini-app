"use strict";

var NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];
Page({
  data: {
    alphabet: []
  },
  onLoad: function onLoad() {
    var alphabet = [];
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (initial) {
      var cells = NAMES.filter(function (name) {
        return name.charAt(0) === initial;
      });
      alphabet.push({
        initial: initial,
        cells: cells
      });
    });
    this.setData({
      alphabet: alphabet
    });
  },
  onChange: function onChange(e) {
    console.log('onChange', e.detail);
  }
});