var SCALE_DURATION = 1.5;
var SCALE_FACTOR = 2;

var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');

    TweenLite.set(View.endFrame.tt, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
    TweenLite.set(View.endFrame.background, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
    TweenLite.set(View.endFrame.tuneIn, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
    TweenLite.set(View.endFrame.ftm, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
    TweenLite.set(View.endFrame.netflixLogo, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
    TweenLite.set(View.endFrame.cta, {
      opacity: 0,
      scale: SCALE_FACTOR,
      delay: 0
    });
  };

  this.play = function() {
    console.log('Creative.play()');

    TweenLite.fromTo(View.endFrame.tt, SCALE_DURATION, { opacity: 0, scale: SCALE_FACTOR }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.background,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_FACTOR },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(
      View.endFrame.tuneIn,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_FACTOR },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.ftm, SCALE_DURATION, { opacity: 0, scale: SCALE_FACTOR }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.netflixLogo,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_FACTOR },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.cta, SCALE_DURATION, { opacity: 0, scale: SCALE_FACTOR }, { opacity: 1, scale: 1, delay: 0 });

    TweenLite.delayedCall(SCALE_DURATION - 0.5, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};
