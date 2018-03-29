(function() {
  var COMPONENT_NAME = 'netflix-cta';
  var PREFIX = 'mm-component';

  function style() {
    // use unique class name as identifier because there are dynamic values in the generated stylesheet
    var UNIQUE_CLASS_NAME = 'uc-' + (Math.random() * 1000000).toFixed(0);

    Utils.createStyle.call(
      this,
      COMPONENT_NAME + '.' + UNIQUE_CLASS_NAME,
      '.button',
      'will-change: transform;cursor: pointer;overflow: hidden;text-align: center;font-size:' +
        this.data.size +
        'px; font-family: ' +
        this.data.font,
      '.button .fill',
      'will-change: transform;width:100%;height:100%;transform-origin:top left;-webkit-transform-origin:top left;transform: scale(0, 1);-webkit-transform: scale(0, 1); transition: transform .4s cubic-bezier(0.19, 1, 0.22, 1);',
      '.button .arrow',
      'will-change: transform;position:absolute;text-align: right;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: translate(0%, -50%);transform: translate(0%, -50%);',
      '.button .arrow svg',
      'position:absolute;right:4%;left:auto;top:0;',
      '.button .copy',
      'will-change: transform;transform-origin: 0 0;white-space:nowrap;letter-spacing:1.1px;padding:2% 4%;transition: color .4s cubic-bezier(0.19, 1, 0.22, 1);color:' +
        this.data.color[1],
      '.button .border',
      '-webkit-box-sizing: border-box;box-sizing: border-box;position: absolute;top: 0;left: 0;width:100%;height:100%;border:solid ' +
        this.borderSize +
        'px ' +
        this.data.color[0],
      'div',
      'position: absolute;top: 0;left: 0;'
    );

    if (!Utils.isMobile) {
      Utils.createStyle.call(
        this,
        COMPONENT_NAME + '.' + UNIQUE_CLASS_NAME,
        '.button:hover .bgImageHover',
        'width:100% !important;',
        '.button.hover .bgImageHover',
        'width:100% !important;',
        '.button:hover .fill',
        'transform: scale(1, 1); -webkit-transform: scale(1, 1);',
        '.button.hover .fill',
        'transform: scale(1, 1); -webkit-transform: scale(1, 1);',
        '.button:hover .arrow',
        'color:' + this.data.color[0],
        '.button.hover .arrow',
        'color:' + this.data.color[0],
        '.button:hover .copy',
        'color:' + this.data.color[0],
        '.button.hover .copy',
        'color:' + this.data.color[0],
        '.button.isArrow:hover .copy',
        'color:' + this.data.color[0]
      );
    }

    this.className += ' ' + PREFIX + ' ' + UNIQUE_CLASS_NAME;
    this.style.position = 'absolute';
    this.button.style.backgroundColor = this.data.color[0];
    this.fill.style.backgroundColor = this.data.color[1];
  }

  var component = Object.create(HTMLElement.prototype, {
    createdCallback: {
      value: function() {
        this._attached = false;

        this.button = document.createElement('div');
        this.button.className = 'button';
        this.fill = document.createElement('div');
        this.fill.className = 'fill';
        this.copy = document.createElement('div');
        this.copy.className = 'copy';
        this.arrow = document.createElement('div');
        this.arrow.className = 'arrow';
        this.border = document.createElement('div');
        this.border.className = 'border';
      },
      enumerable: true
    },

    attachedCallback: {
      value: function() {
        this._attached = true;

        this.data = {};
        this.data.color = [this.getAttribute('color-1') || '#e50914', this.getAttribute('color-2') || '#ffffff'];
        this.data.size = this.getAttribute('font-size');
        this.data.font = (this.getAttribute('font') || 'Netflix Sans') + ', Arial, sans-serif';
        this.data.text = this.getAttribute('text');

        var bgImg = this.getAttribute('background-image');
        if (bgImg) {
          this.bgImgContainer = document.createElement('div');
          this.bgImgContainer.className = 'bgImage';
          var img = new Image();
          img.src = bgImg;
          this.bgImgContainer.appendChild(img);
          this.button.appendChild(this.bgImgContainer);
          this.bgImgContainer.setAttribute('style', 'position: absolute; top:0;left:0;');
          img.setAttribute('style', 'min-width:' + this.width + 'px;');
        }

        this.appendChild(this.button);
        this.button.appendChild(this.fill);

        var bgImgHover = this.getAttribute('background-image-hover');
        if (bgImgHover) {
          this.bgImgContainerHover = document.createElement('div');
          this.bgImgContainerHover.className = 'bgImageHover';
          var imgHover = new Image();
          imgHover.src = bgImgHover;
          this.bgImgContainerHover.appendChild(imgHover);
          this.button.appendChild(this.bgImgContainerHover);
          this.bgImgContainerHover.setAttribute(
            'style',
            'position: absolute; top:0;left:0;width:0%;overflow:hidden;height:' +
              this.height +
              'px; transition: width .4s cubic-bezier(0.19, 1, 0.22, 1);'
          );
          imgHover.setAttribute('style', 'min-width:' + this.width + 'px;');
          this.fill.setAttribute('style', 'display:none;');
        }

        this.button.appendChild(this.copy);

        this.hasArrow = this.hasAttribute('arrow');
        this.hasBorder = this.hasAttribute('border');
        this.borderSize = this.getAttribute('border') || 1;

        if (this.hasArrow) {
          this.button.appendChild(this.arrow);
          this.button.className += ' isArrow';
        }

        if (this.hasBorder) {
          this.button.appendChild(this.border);
        }

        style.call(this);

        this.button.addEventListener(
          'click',
          function() {
            if (this.click) this.click();
            var c = document.createEvent('CustomEvent');
            c.initCustomEvent('cta-click', !0, !0, 'Netflix CTA Click');
            this.dispatchEvent(c);
          }.bind(this)
        );

        // necessary to get the arrow to change color properly
        this.button.addEventListener(
          'mouseover',
          function(event) {
            this.mouseover.call(this);
          }.bind(this)
        );

        this.button.addEventListener(
          'mouseout',
          function(event) {
            this.mouseout.call(this);
          }.bind(this)
        );

        var cta = 'WATCH NOW';

        var MonetComponent = document.querySelector('monet-integrator');
        if (MonetComponent) {
          MonetComponent.register(this);
          MonetComponent.getMonetData().then(
            function(data) {
              var key = this.getAttribute('data-dynamic-key') || 'CTA';
              var d = key;
              if (d.split('.').length === 1) {
                d = 'rootAssets["text.' + d + '"].text';
              }
              try {
                cta = eval('data.' + d);
                var locale = Monet.getComponentLocale('text.' + key).substr(0, 2);
                this.copy.classList.add(locale);
                if (locale == 'ar' || locale == 'he') {
                  this.setAttribute('rtl', true);
                }
                this.text(cta);
                this.dispatchEvent(new CustomEvent('ready'));
              } catch (e) {
                Monet.logEvent('MONET_DATA_ERROR', {
                  details: 'Netflix CTA Component error; Could not find data in rootAssets: ' + 'text.' + d,
                  stack: e
                });

                MonetComponent.getBackupMonetData().then(
                  function(backupData) {
                    var ld = d;
                    if (d.split('.').length === 1) {
                      d = 'rootAssets["text.' + d + '"].text';
                    }
                    cta = eval('backupData.' + d);
                    var locale = Monet.getComponentLocale('text.' + key).substr(0, 2);
                    this.copy.classList.add(locale);
                    if (locale == 'ar' || locale == 'he') {
                      this.setAttribute('rtl', true);
                    }
                    this.text(cta);

                    this.dispatchEvent(new CustomEvent('ready'));
                  }.bind(this),
                  function(error) {
                    Monet.logEvent('MONET_DATA_ERROR', { details: 'Failed to load backup Monet data', stack: error });
                  }
                );
              }
            }.bind(this),
            function(error) {
              Monet.logEvent('MONET_DATA_ERROR', { details: 'Failed to load backup Monet data', stack: error });
            }
          );
        }
      },
      enumerable: true
    },

    attributeChangedCallback: {
      value: function() {
        if (this._attached) this.resize();
      },
      enumerable: true
    },

    text: {
      value: function(text, size) {
        this.copy.innerHTML = text || this.copy.innerHTML;
        this.resize();
      }
    },

    resize: {
      value: function(w, h) {
        this.rtl = this.getAttribute('rtl');

        if (this.rtl) {          
          TweenMax.set(this.copy, {css:{"right":0, "left":"auto"}});
          this.arrow.setAttribute(
            'style',
            'position:absolute;text-align: left;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: scale(-1,1) translate(0%, -50%);transform: scale(-1,1) translate(0%, -50%);'
          );
        } else {
          TweenMax.set(this.copy, {css:{"right":"auto", "left":0}});
          this.arrow.setAttribute(
            'style',
            'position:absolute;text-align: right;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: translate(0%, -50%);transform: translate(0%, -50%);'
          );
        }

        var width = w || (this.getAttribute('width') || (this.offsetWidth || 109));
        var height = h || (this.getAttribute('height') || (this.offsetHeight || 28));

        this.copy.style.width = this.button.style.width = this.style.width = width + 'px';
        this.copy.style.height = this.button.style.height = this.style.height = height + 'px';

        this.height = height;
        if (this._attached) {
          this.arrow.innerHTML = '';

          // createArrow
          var s = Math.floor(this.height / 3.3);
          TweenMax.set(this.arrow, {
            height: s
          });
          var elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
          elem.setAttribute('width', s + 'px');
          elem.setAttribute('height', s + 'px');
          elem.line = new Utils.SvgIcon('line1', 'M0,0 l' + s / 2 + ',' + s / 2 + 'l-' + s / 2 + ',' + s / 2);
          elem.line.setAttribute('fill', 'none');
          elem.line.setAttribute('stroke', this.data.color[1] || 0);
          elem.line.setAttribute('stroke-width', 2);
          elem.appendChild(elem.line);

          this.arrow.appendChild(elem);
        }

        if (this.hasArrow) {
          var pad = (0.01 * width) + s;
          this.copy.style.width = (width - pad) + "px";
        }

        Utils.textFit(this.copy, {detectMultiLine: true, alignHoriz: true, alignVert: true, minFontSize: this.data.size || 1, maxFontSize: this.data.size || 12});
      }
    },

    mouseover: {
      value: function() {
        if (!Utils.isMobile) {
          this.button.classList.add('hover');
        }
        this.arrow.querySelector('svg').line.setAttribute('stroke', this.data.color[0]);
      }
    },

    mouseout: {
      value: function() {
        if (!Utils.isMobile) {
          this.button.classList.remove('hover');
        }
        this.arrow.querySelector('svg').line.setAttribute('stroke', this.data.color[1]);
      }
    },

    preview: {
      value: function() {
        this.setAttribute('arrow', '');
        this.setAttribute('border', '');
        this.text('WATCH NOW');
      }
    }
  });

  document.registerElement(COMPONENT_NAME, { prototype: component });
})();
