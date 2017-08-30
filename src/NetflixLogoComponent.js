( function() {

	var COMPONENT_NAME = 'netflix-logo';
	var PREFIX = 'mm-component';

	var Utils = (function() {
		function Utils() {}
		Utils.createStyle = function(n, r, o) {
			var stylesheet = '';
			this.stylesheet = document.getElementById(COMPONENT_NAME + '-component-stylesheet');
			
			if (!this.stylesheet) return;

			this.styles = this.styles || [];
			this.styles.push({e:n, s:r});
			this.styles.forEach(function(row) {
				stylesheet += COMPONENT_NAME + (o?'':' ') + row.e + '{' + row.s + '}\n';
			});
			this.stylesheet.innerHTML = stylesheet;
		}
		Utils.dispatch = function(target, event, d) {
			c = document.createEvent("CustomEvent");
			c.initCustomEvent(event, !0, !0, d);
			target.dispatchEvent(c);
		}

		return Utils;
	})();


	( function() {

		var component = Object.create(HTMLElement.prototype, {

			createdCallback: {
				value: function() {
					this.stylesheet = document.createElement('style');
					this.stylesheet.id = COMPONENT_NAME + "-component-stylesheet";
					this.stylesheet.type = 'text/css';
					this.appendChild(this.stylesheet);

					this.lib = createjs.logoLib;
					this.canvas = document.createElement('canvas');
					this.stage = new createjs.Stage(this.canvas);
					this.container = new createjs.Container();
					this.stage.addChild(this.container);
					this.appendChild(this.canvas);

					this.animation = new this.lib.netflix_logo(null, null, true);
					this.completeCallback = function() {};
					
					this.animation.addEventListener('complete', function() {
						Utils.dispatch(this, 'complete');
						this.completeCallback();
					}.bind(this));

					this.container.addChild(this.animation);

					var duration = this.getAttribute('duration') || 2.75;
					var fps = this.animation.totalFrames / duration;

					this.animation.framerate = fps;

					createjs.Ticker.setFPS(60);
				},
	      		enumerable: true
			},

			attachedCallback: {
				value: function() {
					var o_width = this.lib.properties.width;
					var o_height = this.lib.properties.height;
					var width = this.getAttribute('width') || this.offsetWidth;
					var height = ((o_height / o_width) * width).toFixed();
					
					this.setAttribute('height', height);
					this.style.height = height + "px";
					this.canvas.setAttribute('width', width);
					this.canvas.setAttribute('height', height);

					var r = this.canvas.getBoundingClientRect();
					this.canvas.style.width = r.width + 'px';
					this.canvas.style.height = r.height + 'px';
					this.canvas.width = r.width * window.devicePixelRatio; 
					this.canvas.height = r.height * window.devicePixelRatio; 
					this.canvas.getContext('2d').scale(window.devicePixelRatio, window.devicePixelRatio);
					this.container.scaleX = window.devicePixelRatio;
					this.container.scaleY = window.devicePixelRatio;
					
					var scale = (this.canvas.width / this.animation.nominalBounds.width) / window.devicePixelRatio;
					this.stage.scaleX = this.stage.scaleY = scale;

					Utils.createStyle('', 'position:relative; width:' + width + 'px; height:' + height + 'px;');
					
					createjs.Ticker.addEventListener('tick', function(e){
						this.stage.update(e);
					}.bind(this));
				},
	      		enumerable: true
			},

			attributeChangedCallback: {
				value: function() {
				},
	      		enumerable: true
			},

			/**/

			play: {
				value: function() {
					this.animation.gotoAndPlay('play');
				}
			},

			preview: {
				value: function(callback) {
					if (callback) {
						this.completeCallback = callback;
					}
					this.play();					
				}
			}

		});

		document.registerElement(COMPONENT_NAME, { prototype: component });

	})();

})();
