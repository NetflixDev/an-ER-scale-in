var Creative = function() {
  this.play = function() {
    console.log('Creative.play()');

    var scaleTime = 1.5
    TweenLite.from(View.endFrame.tt, scaleTime, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.background, scaleTime, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.tuneIn, scaleTime, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.ftm, scaleTime, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.netflixLogo, scaleTime, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.cta, scaleTime, { scale: 2, delay: 0 });

    TweenLite.delayedCall(scaleTime - 0.5, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};
