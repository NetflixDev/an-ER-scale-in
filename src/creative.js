var Creative = function() {
  this.init = function() {
    console.log('Creative.init()');

    TweenLite.set(View.endFrame.tt, { alpha: 0, scale: 2 });
    TweenLite.set(View.endFrame.background, { alpha: 0, scale: 2 });
    TweenLite.set(View.endFrame.tuneIn, { alpha: 0, scale: 2 });
    TweenLite.set(View.endFrame.ftm, { alpha: 0, scale: 2 });
    TweenLite.set(View.endFrame.netflixLogo, { alpha: 0, scale: 2 });
    TweenLite.set(View.endFrame.cta, { alpha: 0, scale: 2 });
  };

  this.play = function() {
    console.log('Creative.play()');

    var scaleTime = 1.5;
    TweenLite.to(View.endFrame.tt, scaleTime, { alpha: 1, scale: 1, delay: 0 });
    TweenLite.to(View.endFrame.background, scaleTime, {
      alpha: 1,
      scale: 1,
      delay: 0
    });
    TweenLite.to(View.endFrame.tuneIn, scaleTime, {
      alpha: 1,
      scale: 1,
      delay: 0
    });
    TweenLite.to(View.endFrame.ftm, scaleTime, {
      alpha: 1,
      scale: 1,
      delay: 0
    });
    TweenLite.to(View.endFrame.netflixLogo, scaleTime, {
      alpha: 1,
      scale: 1,
      delay: 0
    });
    TweenLite.to(View.endFrame.cta, scaleTime, {
      alpha: 1,
      scale: 1,
      delay: 0
    });

    TweenLite.delayedCall(scaleTime - 0.5, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};
