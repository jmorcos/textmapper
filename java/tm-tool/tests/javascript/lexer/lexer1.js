// generated by Textmapper

(function() {

var root = this;
var lexer1 = { DEBUG_SYNTAX: false };

lexer1.Tokens = {
  Unavailable_: -1,
  eoi: 0,
  id: 1,
  icon: 2,
  _skip: 3,
  run: 4,
  _class: 5,
  method: 6
};

lexer1.States = {
  initial: 0,
  state2: 1
};

lexer1.Lexer = function(text, errorHandler) {
  this.reset(text);
  this.errorHandler = errorHandler;
  this.tokenLine = 1;
  this.currLine = 1;
  this.currColumn = 1;
  this.currOffset = 0;
};

lexer1.Lexer.prototype = {
  reset: function(text) {
    this.text = text;
    this.state = 0;
    this.chr = text.length > 0 ? text.charCodeAt(0) : -1;
    this.offset = 1;
    this.token = "";
  },

  tmCharClass: [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 2, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
    5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1,
    1, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 1, 1, 1, 1, 6,
    1, 6, 6, 6, 7, 8, 6, 6, 9, 6, 6, 6, 6, 10, 6, 11,
    6, 6, 6, 6, 12, 6, 6, 6, 6, 6, 6, 1
  ],
  tmStateMap: [
    0, 6
  ],
  tmRuleSymbol: [
    -1, 0, 1, 2, 3, 3, 4, 5, 6
  ],
  tmClassesCount: 13,
  tmGoto: [
    -2, -1, 5, 5, 3, 2, 1, 1, 1, 1, 1, 1, 1, -3, -3, -3,
    -3, -3, 1, 1, 1, 1, 1, 1, 1, 1, -4, -4, -4, -4, -4, 2,
    -4, -4, -4, -4, -4, -4, -4, -1, -1, -1, -1, 4, -1, -1, -1, -1,
    -1, -1, -1, -1, -5, 4, 4, -5, 4, 4, 4, 4, 4, 4, 4, 4,
    4, -6, -6, 5, 5, -6, -6, -6, -6, -6, -6, -6, -6, -6, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, -1, -1,
    -1, -1, -1, -1, -1, -1, 12, -1, -1, -1, -1, -1, -9, -9, -9, -9,
    -9, -9, -9, -9, -9, -9, -9, -9, -9
  ],

  mapCharacter: function(chr) {
    if (chr >= 0 && chr < 124) {
      return this.tmCharClass[chr];
    }
    return chr === -1 ? 0 : 1;
  },

  createToken: function(lapg_n, ruleIndex) {
    var spaceToken = false;
    switch (ruleIndex) {
    case 0:
      return this.createIdToken(lapg_n, ruleIndex);
    case 2: // _skip: /\/\/.*/
      spaceToken = true;
      break;
    case 3: // _skip: /[\t\r\n ]+/
      spaceToken = true;
      break;
    }
    return !(spaceToken);
  },

  subTokensOfId: {
    'run': 4,
    'class': 5
  },

  createIdToken: function(lapg_n, ruleIndex) {
    if (this.token in this.subTokensOfId) {
      ruleIndex = this.subTokensOfId[this.token];
      lapg_n.symbol = this.tmRuleSymbol[ruleIndex];
    }
    var spaceToken = false;
    switch(ruleIndex) {
    case 0:  // <default>
      { lapg_n.value = this.token; }
      break;
    }
    return !(spaceToken);
  },

  next: function() {
    var lapg_n = {};
    var state;

    do {
      lapg_n.offset = this.currOffset;
      this.tokenLine = lapg_n.line = this.currLine;
      lapg_n.column = this.currColumn;
      this.token = "";
      var tokenStart = this.offset - 1;

      for (state = this.tmStateMap[this.state]; state >= 0;) {
        state = this.tmGoto[state * this.tmClassesCount + this.mapCharacter(this.chr)];
        if (state == -1 && this.chr === -1) {
          lapg_n.endoffset = this.currOffset;
          lapg_n.endline = this.currLine;
          lapg_n.endcolumn = this.currColumn;
          lapg_n.symbol = 0;
          lapg_n.value = null;
          this.errorHandler("Unexpected end of input reached", lapg_n.line, lapg_n.offset, lapg_n.column, lapg_n.endline, lapg_n.endoffset, lapg_n.endcolumn);
          lapg_n.offset = this.currOffset;
          return lapg_n;
        }
        if (state >= -1 && this.chr !== -1) {
          this.currOffset++;
          this.currColumn++;
          if (this.chr == 10) {
            this.currColumn = 1;
            this.currLine++;
          }
          this.chr = this.offset < this.text.length ? this.text.charCodeAt(this.offset++) : -1;
        }
      }
      lapg_n.endoffset = this.currOffset;
      lapg_n.endline = this.currLine;
      lapg_n.endcolumn = this.currColumn;

      if (state == -2) {
        lapg_n.symbol = 0;
        lapg_n.value = null;
        return lapg_n;
      }

      this.token = this.text.slice(tokenStart, this.currOffset);
      if (state == -1) {
        this.errorHandler("invalid lexeme at line " + this.currLine + ": `" + this.token + "`, skipped", lapg_n.line, lapg_n.offset, lapg_n.column, lapg_n.endline, lapg_n.endoffset, lapg_n.endcolumn);
        lapg_n.symbol = -1;
        continue;
      }

      lapg_n.symbol = this.tmRuleSymbol[-state - 3];
      lapg_n.value = null;

    } while (lapg_n.symbol == -1 || !this.createToken(lapg_n, -state - 3));
    return lapg_n;
  }
};

root.lexer1 = lexer1;

}).call(this);
