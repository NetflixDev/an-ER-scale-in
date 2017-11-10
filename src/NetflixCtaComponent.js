( function() {

	var COMPONENT_NAME = 'netflix-cta';
	var PREFIX = 'mm-component';

	var Utils = (function() {
		function Utils() {}
		Utils.createStyle = function(n, r, o) {
			this.stylesheet = document.getElementById(COMPONENT_NAME + '-component-stylesheet');
			if (!this.stylesheet) return;
			this.styles = this.styles || [];
			this.styles.push({e:n, s:r});
			var stylesheet = '';
			this.styles.forEach(function(row) {
				stylesheet += COMPONENT_NAME + (o?'':' ') + row.e + '{' + row.s + '}\n';
			});
			this.stylesheet.innerHTML = stylesheet;
		}
		Utils.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		Utils.createArrow = function() {
	        var s = Math.floor(this.height / 3.3);
	        TweenMax.set(this.arrow, {
	            height: s
	        });
	        var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	        i.setAttribute("width", s + "px");
	        i.setAttribute("height", s + "px");
	        i.line = new Utils.svgIcon("line1", "M0,0 l" + s / 2 + "," + s / 2 + "l-" + s / 2 + "," + s / 2);
	        i.line.setAttribute("fill", "none");
	        i.line.setAttribute("stroke", this.data.color[1]);
	        i.line.setAttribute("stroke-width", 2);
	        i.appendChild(i.line);
	        return i;
		}
		Utils.svgIcon =  function(id, path) {
	        var i = document.createElementNS("http://www.w3.org/2000/svg", "path");
	        i.setAttributeNS(null, "d", path);
	        i.setAttribute("data-original", path);
	        i.setAttribute("class", id || "");
	        return i;
	    };
		return Utils;
	})();


	( function() {

		function style() {
			Utils.createStyle('.button', 
				'cursor: pointer;overflow: hidden;text-align: center;font-size:' + this.data.size + 'px; font-family: ' + this.data.font );

			Utils.createStyle('.button .fill', 
				'width:100%;height:100%;transform-origin:top left;-webkit-transform-origin:top left;transform: scale(0, 1);-webkit-transform: scale(0, 1); transition: transform .4s cubic-bezier(0.19, 1, 0.22, 1);');

			Utils.createStyle('.button .arrow', 
				'position:absolute;text-align: right;top:50%;left:auto;right:auto;width:100%;font-size:160% !important;-webkit-transform: translate(0%, -50%);transform: translate(0%, -50%);');

			Utils.createStyle('.button .arrow svg', 
				'position:absolute;right:4%;left:auto;top:0;');

			if (!Utils.isMobile) {
				Utils.createStyle('.button:hover .fill', 
					'transform: scale(1, 1); -webkit-transform: scale(1, 1);');

				Utils.createStyle('.button.hover .fill', 
					'transform: scale(1, 1); -webkit-transform: scale(1, 1);');

				Utils.createStyle('.button:hover .arrow', 
					'color:' + this.data.color[0]);

				Utils.createStyle('.button.hover .arrow', 
					'color:' + this.data.color[0]);
				
				Utils.createStyle('.button:hover .copy', 
					'color:' + this.data.color[0]);

				Utils.createStyle('.button.hover .copy', 
					'color:' + this.data.color[0]);
				
				Utils.createStyle('.button.isArrow:hover .copy', 
					'color:' + this.data.color[0]);
			}

			Utils.createStyle('.button .copy', 
				'transform-origin: 0 0;white-space:nowrap;letter-spacing:1.5px; padding:4px 8%;transition: color .4s cubic-bezier(0.19, 1, 0.22, 1);color:' + this.data.color[1]);
			
			Utils.createStyle('.button .border', 
				'-webkit-box-sizing: border-box;box-sizing: border-box;position: absolute;top: 0;left: 0;width:100%;height:100%;border:solid '+this.borderSize+'px ' + this.data.color[0]);

			Utils.createStyle('*', 
				'position: absolute;top: 0;left: 0;');

			this.className += ' ' + PREFIX;
			this.style.position = 'absolute';
			this.button.style.backgroundColor = this.data.color[0];
			this.fill.style.backgroundColor = this.data.color[1];
		}

		var component = Object.create(HTMLElement.prototype, {

			createdCallback: {
				value: function() {					
				},
	      		enumerable: true
			},

			attachedCallback: {
				value: function() {
					this.width = parseInt(this.getAttribute('width') || (this.offsetWidth || 109));
					this.height = parseInt(this.getAttribute('height') || (this.offsetHeight || 28));
					this.stylesheet = document.createElement('style');
					this.stylesheet.id = COMPONENT_NAME + "-component-stylesheet";
					this.stylesheet.type = 'text/css';
					this.appendChild(this.stylesheet);

					this.data = {};
					this.data.color = [this.getAttribute('color-1') || '#e50914', this.getAttribute('color-2') || '#ffffff'];
					this.data.size = 20;
					this.data.font = (this.getAttribute('font') || 'Netflix Sans') + ', Arial, sans-serif';
					this.data.text = this.getAttribute('text');

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

					this.appendChild(this.button);
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

					style.call(this);

					this.button.addEventListener('click', function() {
						if (this.click) this.click();
						c = document.createEvent("CustomEvent");
						c.initCustomEvent("cta-click", !0, !0, "Netflix CTA Click");
						this.dispatchEvent(c);
					}.bind(this));


	                window.addEventListener('WebComponentsReady', function () {
	                    var MonetComponent = document.querySelector('monet-integrator');
	                    var cta = 'WATCH NOW';

	                    if (MonetComponent) {
	                        MonetComponent.getMonetData().then(
	                        	function(data){
	                                var key = this.getAttribute('data-dynamic-key') || 'CTA';
	                                var d = key;
	                                if (d.split('.').length == 1) {
	                                    d = 'rootAssets["text.' + d + '"].text';
	                                }
	                                try {
	                                    cta = eval('data.' + d);
		                                this.copy.classList.add(Monet.getComponentLocale("text." + key).substr(0,2));
	                                    this.text(cta);
	                                } catch(e) {
	                                	Monet.logEvent('MONET_DATA_ERROR', { "details": "Netflix CTA Component error; Could not find data in rootAssets: "+'text.' + d, "stack":e});

	                                    MonetComponent.getBackupMonetData().then(
	                                    	function(backupData){
                                				var ld = d;
	                                            if (d.split('.').length == 1) {
				                                    d = 'rootAssets["text.' + d + '"].text';
				                                }
	                                            cta = eval('backupData.' + d);
	                                            this.copy.classList.add(Monet.getComponentLocale("text." + key).substr(0,2));
	                                            this.text(cta);
											}.bind(this),
											function (error) {
												Monet.logEvent('MONET_DATA_ERROR', { "details": "Failed to load backup Monet data", "stack": error});
											}
										);
	                                }
								}.bind(this),
								function (error) {
	                                Monet.logEvent('MONET_DATA_ERROR', { "details": "Failed to load backup Monet data", "stack": error});
	                            }
							);
	                    } 
	                }.bind(this));
				},
	      		enumerable: true
			},

			attributeChangedCallback: {
				value: function() {
					this.resize();
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
				value: function(w,h) {
					var width = (w || (this.getAttribute('width') || (this.offsetWidth || 109)));
					var height = (h || (this.getAttribute('height') || (this.offsetHeight || 28)));
					
					this.button.style.width = this.style.width = width + 'px';
					this.button.style.height = this.style.height = height + 'px';
				    this.copy.setAttribute("style", "transform: scale(1);");
					
					var bb = this.copy.getBoundingClientRect();
					var bbb = this.button.getBoundingClientRect();
					var pr = "8%";

					if (this.hasArrow) {
				    	var s = bb.width / bbb.width;
				    	pr = (s * 16) + "%";
				    	this.copy.setAttribute("style", "padding-right: " + pr + ";padding-left: " + s * 16 + "%");
						bb = this.copy.getBoundingClientRect();
						bbb = this.button.getBoundingClientRect();
					}

					var widthTransform = (bbb.width ) / bb.width;
				    var heightTransform = (bbb.height ) / bb.height;
				    var value = widthTransform < heightTransform ? widthTransform : heightTransform;

				    
				    var matrix = window.getComputedStyle(this.copy, null).getPropertyValue('transform')
				    this.copy.setAttribute("style", "transform: scale(" + value.toFixed(3) + ");padding-right: " + pr);

					var copyBounds = this.copy.getBoundingClientRect();
					var xp = Math.ceil((copyBounds.width * .96) / 2 );
					var yp = Math.ceil((copyBounds.height) / 2);
					var p = bbb.width - copyBounds.width;
					
					this.height = height;
					this.arrow.innerHTML = "";
					this.arrow.appendChild(Utils.createArrow.call(this));
				    this.copy.setAttribute("style", "backface-visibility: hidden; transform: translateZ(0) scale(" + value.toFixed(3) + ") translate(-50%,0); left: 50%;top:50%;margin-top:-" + yp + "px;padding-right: " + pr);

				}
			},

			mouseover: {
				value: function() {
					if (!Utils.isMobile) {
						this.button.classList.add('hover');
					}
    				this.arrow.querySelector("svg").line.setAttribute("stroke", this.data.color[0]);
				}
			},

			mouseout: {
				value: function() {
					if (!Utils.isMobile) {
						this.button.classList.remove('hover');
					}
        			this.arrow.querySelector("svg").line.setAttribute("stroke", this.data.color[1]);
				}
			},

			preview: {
				value: function() {
					
				}
			}

		});

		document.registerElement(COMPONENT_NAME, { prototype: component });
	})();

})();