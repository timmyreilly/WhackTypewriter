!function () {
  var Typewriter = window.Typewriter = window.Typewriter || {};

  var Paper = Typewriter.Paper = function (options) {
    this.$paper = options.$paper;
    this.word = '';
    this.$letter = $('.letter');
  };

  Paper.prototype.start = function() {
    $(window).keypress(this.whack.bind(this));
    $(window).keyup(this.backspace.bind(this));
  };

  Paper.prototype.whack = function (e) {
    // debugger;
    var letter = String.fromCharCode(e.keyCode)

    this.$letter.html(letter);

    this.word += letter;
    console.log(this.word);

    this.$paper.html(this.word);

    if (this.$paper.height() > $(window).height() / 2) {
      this.$paper.css({
        position: 'static'
      })
    }
  }
  Paper.prototype.backspace = function (e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      this.word = this.word.slice(0, -1);
      this.$paper.html(this.word);
    }

  }
}();
