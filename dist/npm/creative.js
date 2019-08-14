var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');

    TweenLite.set(View.endFrame.tt, { opacity: 0, scale: 2, delay: 0 });
    TweenLite.set(View.endFrame.background, { opacity: 0, scale: 2, delay: 0 });
    TweenLite.set(View.endFrame.tuneIn, { opacity: 0, scale: 2, delay: 0 });
    TweenLite.set(View.endFrame.ftm, { opacity: 0, scale: 2, delay: 0 });
    TweenLite.set(View.endFrame.netflixLogo, {
      opacity: 0,
      scale: 2,
      delay: 0
    });
    TweenLite.set(View.endFrame.cta, { opacity: 0, scale: 2, delay: 0 });
  };

  this.play = function() {
    console.log('Creative.play()');

    var scaleTime = 1.5;
    TweenLite.fromTo(View.endFrame.tt, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.background, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.tuneIn, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.ftm, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.netflixLogo, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });
    TweenLite.fromTo(View.endFrame.cta, scaleTime, { opacity: 0, scale: 2 }, { opacity: 1, scale: 1, delay: 0 });

    TweenLite.delayedCall(scaleTime - 0.5, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};

// how long zoom animates for (in seconds)
Creative.zoomDuration = 1.7;

// how much to scale the keyart intro frame
Creative.zoomAmount = 5;

