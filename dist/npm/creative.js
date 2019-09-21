// how long endframe scale-in animates for (in seconds)
var scaleDuration = 1.5;

// initial zoom amount before scaling elements back to original size
var scaleAmount = 2;

// how long zoom animates for (in seconds)
var zoomDuration = 1.7;

// how much to scale the keyart intro frame
var zoomAmount = 5;

var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');

    TweenLite.set(View.endFrame.tt, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
    TweenLite.set(View.endFrame.background, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
    TweenLite.set(View.endFrame.tuneIn, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
    TweenLite.set(View.endFrame.ftm, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
    TweenLite.set(View.endFrame.netflixLogo, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
    TweenLite.set(View.endFrame.cta, {
      opacity: 0,
      scale: scaleAmount,
      delay: 0
    });
  };

  this.play = function() {
    console.log('Creative.play()');

    TweenLite.fromTo(View.endFrame.tt, scaleDuration, { opacity: 0, scale: scaleAmount }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.background,
      scaleDuration,
      { opacity: 0, scale: scaleAmount },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.tuneIn, scaleDuration, { opacity: 0, scale: scaleAmount }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.ftm, scaleDuration, { opacity: 0, scale: scaleAmount }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(
      View.endFrame.netflixLogo,
      scaleDuration,
      { opacity: 0, scale: scaleAmount },
      { opacity: 1, scale: 1, delay: 0 }
    );
    TweenLite.fromTo(View.endFrame.cta, scaleDuration, { opacity: 0, scale: scaleAmount }, { opacity: 1, scale: 1, delay: 0 });

    TweenLite.delayedCall(0, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// attaching to Creative class since container looks there for intro zoom properties
Creative.zoomDuration = zoomDuration;
Creative.zoomAmount = zoomAmount;
