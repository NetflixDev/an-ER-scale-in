var Creative = function() {
  this.play = function() {
    console.log('Creative.play()');

    TweenLite.from(View.endFrame.tt, 0.5, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.background, 0.5, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.tuneIn, 0.5, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.ftm, 0.5, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.netflixLogo, 0.5, { scale: 2, delay: 0 });
    TweenLite.from(View.endFrame.cta, 0.5, { scale: 2, delay: 0 });

    TweenLite.delayedCall(0, function() {
      View.endFrame.netflixLogo.play();
    });
  };
};
