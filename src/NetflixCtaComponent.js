if (document.registerElement) {
    var elType = 'netflix-cta';

    var component = Object.create(HTMLElement.prototype, {
        createdCallback: {
            value: function() {
                this.width = parseInt(this.getAttribute('width') || (this.offsetWidth || 109));
                this.height = parseInt(this.getAttribute('height') || (this.offsetHeight || 28));
                this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

                this.dom = this;

                this.stylesheet = document.createElement('style');
                this.stylesheet.type = 'text/css';
                this.dom.appendChild(this.stylesheet);

                this.data = {};
                this.data.color = [this.getAttribute('color-1') || '#e50914', this.getAttribute('color-2') || '#ffffff'];
                this.data.size = this.getAttribute('font-size') || 20;
                this.data.font = (this.getAttribute('font') || 'proximanova-semibold') + ', Arial, sans-serif';
                this.data.text = this.getAttribute('text');

                this.button = document.createElement('div');
                this.button.className = 'button';
                this.fill = document.createElement('div');
                this.fill.className = 'fill';
                this.copy = document.createElement('div');
                this.copy.className = 'copy';
                this.arrow = document.createElement('div');
                this.arrow.className = 'arrow';
                this.arrow.innerHTML = '›';
                this.border = document.createElement('div');
                this.border.className = 'border';

                this.dom.appendChild(this.button);
                this.button.appendChild(this.fill);
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

                this._style();

                this.button.addEventListener('click', this._onClick.bind(this));

                var ctaComponent = this;
                window.addEventListener(
                    'WebComponentsReady',
                    function() {
                        var MonetComponent = document.querySelector('monet-gwd');
                        var cta = 'WATCH NOW';

                        if (MonetComponent) {
                            MonetComponent.getMonetData().then(
                                function(data) {
                                    var d;

                                    if (ctaComponent.getAttribute('bind-data-dynamic-key')) {
                                        // GWD will add the path to the key, so get the last value which is the key
                                        var tempArray = ctaComponent.getAttribute('bind-data-dynamic-key').split('.');
                                        d = tempArray[tempArray.length - 1];
                                    } else {
                                        // handle dynamic key set manually
                                        d = ctaComponent.getAttribute('data-dynamic-key') || 'CTA';
                                    }

                                    try {
                                        cta = data.rootAssets['text.' + d].text;
                                        ctaComponent.text(cta);
                                        console.log('dynamic key [' + d + '] found in rootAssets');
                                    } catch (e) {
                                        console.error('Monet dynamic ID not found in JSON: ', d, 'trying backup');

                                        MonetComponent.getBackupMonetData().then(
                                            function(backupData) {
                                                if (!backupData) {
                                                    console.error(
                                                        'No backupData found. Please check that your monet-gwd component has a `dynamic-feed-sheet-name` attribute'
                                                    );
                                                    return;
                                                }

                                                cta = backupData.rootAssets['text.' + d].text;
                                                ctaComponent.text(cta);
                                            },
                                            function(error) {
                                                console.error('Failed to load backup Monet data', error);
                                            }
                                        );
                                    }
                                },
                                function(error) {
                                    console.error('Failed to load Monet data', error);
                                }
                            );
                        } else {
                            setTimeout(this.text.bind(this), 10, cta);
                        }
                    }.bind(this)
                );
            },
            enumerable: true
        },

        attachedCallback: {
            value: function() {
                this.resize();
            },
            enumerable: true
        },

        attributeChangedCallback: {
            value: function() {},
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
                var width = w || (this.getAttribute('width') || (this.offsetWidth || 109));
                var height = h || (this.getAttribute('height') || (this.offsetHeight || 28));

                this.button.style.width = this.style.width = width + 'px';
                this.button.style.height = this.style.height = height + 'px';
                this.copy.setAttribute('style', 'transform: scale(1);');

                var bb = this.copy.getBoundingClientRect();
                var bbb = this.button.getBoundingClientRect();

                var widthTransform = bbb.width * 0.8 / bb.width;
                var heightTransform = bbb.height * 0.8 / bb.height;
                var value = widthTransform < heightTransform ? widthTransform : heightTransform;
                var matrix = window.getComputedStyle(this.copy, null).getPropertyValue('transform');
                this.copy.setAttribute('style', 'transform: scale(' + value.toFixed(3) + ');');

                var bb = this.copy.getBoundingClientRect();
                var xp = Math.round(bbb.width / 2 - bb.width / 2);
                var yp = Math.round(bbb.height / 2 - bb.height / 2);
                var p = bbb.width - bb.width;

                if (this.hasArrow) {
                    xp -= p / 4;
                    this.arrow.setAttribute('style', 'transform: scale(1);');

                    var abb = this.arrow.getBoundingClientRect();
                    var ht = bbb.height * 0.5 / abb.height;
                    this.arrow.setAttribute('style', 'transform: scale(' + ht.toFixed(3) + ');');

                    abb = this.arrow.getBoundingClientRect();
                    var ax = p / 3;
                    var ay = Math.round(bbb.height / 2 - abb.height / 2);
                    this.arrow.setAttribute(
                        'style',
                        'transform: scale(' + ht.toFixed(3) + '); top: ' + (ay - 1) + 'px; right: ' + ax + 'px;'
                    );
                }

                this.copy.setAttribute(
                    'style',
                    'transform: translateZ(0) scale(' + value.toFixed(3) + '); left: ' + xp + 'px; top:' + yp + 'px;)'
                );
            }
        },

        mouseover: {
            value: function() {
                if (!this.isMobile) {
                    this.button.classList.add('hover');
                }
            }
        },

        mouseout: {
            value: function() {
                if (!this.isMobile) {
                    this.button.classList.remove('hover');
                }
            }
        },

        _style: {
            value: function() {
                this._addStyle(
                    '.button',
                    'cursor: pointer;overflow: hidden;line-height: 40px;text-align: center;font-size:' +
                        this.data.size +
                        'px; font-family: ' +
                        this.data.font
                );

                this._addStyle(
                    '.button .fill',
                    'width:100%;height:100%;transform: translate(-100%, 0);-webkit-transform: translate(-100%, 0); transition: transform .4s cubic-bezier(0.19, 1, 0.22, 1);'
                );

                this._addStyle(
                    '.button .arrow',
                    'transform-origin: top right;top:0;left:auto;right:0;line-height:40px;font-size: 230% !important;margin-top:-1px;transition: color .4s cubic-bezier(0.19, 1, 0.22, 1);color:' +
                        this.data.color[1]
                );

                if (!this.isMobile) {
                    this._addStyle('.button:hover .fill', 'transform: translate(0, 0); -webkit-transform: translate(0, 0);');

                    this._addStyle('.button.hover .fill', 'transform: translate(0, 0); -webkit-transform: translate(0, 0);');

                    this._addStyle('.button:hover .arrow', 'color:' + this.data.color[0]);

                    this._addStyle('.button.hover .arrow', 'color:' + this.data.color[0]);

                    this._addStyle('.button:hover .copy', 'color:' + this.data.color[0]);

                    this._addStyle('.button.hover .copy', 'color:' + this.data.color[0]);
                }

                this._addStyle(
                    '.button .copy',
                    'transform-origin: 0 0;white-space:nowrap;letter-spacing:1.5px;text-align:center;padding: 4px 8%;transition: color .4s cubic-bezier(0.19, 1, 0.22, 1);color:' +
                        this.data.color[1]
                );

                this._addStyle(
                    '.button .border',
                    '-webkit-box-sizing: border-box;box-sizing: border-box;position: absolute;top: 0;left: 0;width:100%;height:100%;border:solid ' +
                        this.borderSize +
                        'px ' +
                        this.data.color[0]
                );

                this._addStyle('*', 'position: absolute;top: 0;left: 0;');

                this.className += ' mm-netflix-cta';
                this.style.position = 'absolute';
                this.button.style.backgroundColor = this.data.color[0];
                this.fill.style.backgroundColor = this.data.color[1];
            }
        },

        _addStyle: {
            value: function(n, r) {
                this.styles = this.styles || [];
                this.styles.push({ e: n, s: r });
                var stylesheet = '';
                this.styles.forEach(function(row) {
                    stylesheet += elType + ' ' + row.e + '{' + row.s + '}\n';
                });
                this.stylesheet.innerHTML = stylesheet;
            }
        },

        _onClick: {
            value: function() {
                if (this.click) this.click();
                c = document.createEvent('CustomEvent');
                c.initCustomEvent('cta-click', !0, !0, 'Netflix CTA Click');
                this.dispatchEvent(c);
            }
        }
    });

    document.registerElement(elType, { prototype: component });
}
