// how long zoom animates for (in seconds)
var ZOOM_DURATION = 1.7;

// how much to scale the keyart intro frame
var ZOOM_AMOUNT = 5;

// how long endframe scale-in animates for (in seconds)
var SCALE_DURATION = 1.5;

// initial zoom amount before scaling elements back to original size
var SCALE_AMOUNT = 2;

var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');

    TweenLite.set(View.endFrame.tt, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
    TweenLite.set(View.endFrame.background, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
    TweenLite.set(View.endFrame.tuneIn, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
    TweenLite.set(View.endFrame.ftm, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
    TweenLite.set(View.endFrame.netflixLogo, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
    TweenLite.set(View.endFrame.cta, {
      opacity: 0,
      scale: SCALE_AMOUNT,
      delay: 0
    });
  };

  this.play = function() {
    console.log('Creative.play()');

    TweenLite.fromTo(View.endFrame.tt, SCALE_DURATION, { opacity: 0, scale: SCALE_AMOUNT }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.background,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_AMOUNT },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(
      View.endFrame.tuneIn,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_AMOUNT },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.ftm, SCALE_DURATION, { opacity: 0, scale: SCALE_AMOUNT }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.netflixLogo,
      SCALE_DURATION,
      { opacity: 0, scale: SCALE_AMOUNT },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.cta, SCALE_DURATION, { opacity: 0, scale: SCALE_AMOUNT }, { opacity: 1, scale: 1, delay: 0 });

    TweenLite.delayedCall(0, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// attaching to Creative class since container looks there for intro zoom properties
Creative.zoomDuration = ZOOM_DURATION;
Creative.zoomAmount = ZOOM_AMOUNT;
