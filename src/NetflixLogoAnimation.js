(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.netflix_ribbon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,out:25});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_24 = function() {
		this.stop();
		this.dispatchEvent('in-complete');
	}
	this.frame_39 = function() {
		this.stop();
		this.dispatchEvent('out-complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(15).call(this.frame_39).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("Ak+iXIHWinICnHXInXCmg");
	var mask_graphics_5 = new cjs.Graphics().p("AlwklIHWinIELLzInXCmg");
	var mask_graphics_6 = new cjs.Graphics().p("AmpnGIHWimIF9Q0InXClg");
	var mask_graphics_7 = new cjs.Graphics().p("Anop5IHXinIH6WcInXClg");
	var mask_graphics_8 = new cjs.Graphics().p("AovtAIHYimIKHcpInYCkg");
	var mask_graphics_9 = new cjs.Graphics().p("Ap8wZIHYinMAMhAjdInZCkg");
	var mask_graphics_10 = new cjs.Graphics().p("ArP0GIHXimMAPIAq1InYCkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:22.4,y:0.7}).wait(1).to({graphics:mask_graphics_5,x:27.7,y:16.2}).wait(1).to({graphics:mask_graphics_6,x:33.7,y:33.8}).wait(1).to({graphics:mask_graphics_7,x:40.4,y:53.4}).wait(1).to({graphics:mask_graphics_8,x:47.8,y:75.1}).wait(1).to({graphics:mask_graphics_9,x:55.9,y:98.9}).wait(1).to({graphics:mask_graphics_10,x:65.4,y:126.4}).wait(1).to({graphics:null,x:0,y:0}).wait(29));

	// N_middleshape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("ACwRvMgMrgkAIHEAAMAMzAkjQipgpkjAGg");
	this.shape.setTransform(63.6,117);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4).to({_off:false},0).to({_off:true},21).wait(15));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("ACSSvIAAn1IH1AAIAAH1g");
	var mask_1_graphics_11 = new cjs.Graphics().p("ACSSuIAAtdIH1AAIAANeg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ACSStIAAygIH1AAIAAShg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ACSSsIAA28IH1AAIAAW+g");
	var mask_1_graphics_14 = new cjs.Graphics().p("ACSSsIAA60IH1AAIAAa1g");
	var mask_1_graphics_15 = new cjs.Graphics().p("ACSSrIAA+EIH1AAIAAeGg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ACSSrMAAAggwIH1AAMAAAAgyg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ACSSrMAAAgi1IH1AAMAAAAi3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("ACSSqMAAAgkTIH1AAMAAAAkWg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ACSSqMAAAglMIH1AAMAAAAlPg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ACSSvMAAAglgIH1AAMAAAAljg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:64.7,y:119.9}).wait(1).to({graphics:mask_1_graphics_11,x:64.7,y:119.9}).wait(1).to({graphics:mask_1_graphics_12,x:64.7,y:119.8}).wait(1).to({graphics:mask_1_graphics_13,x:64.7,y:119.8}).wait(1).to({graphics:mask_1_graphics_14,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_15,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_16,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_17,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_18,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_19,x:64.7,y:119.7}).wait(1).to({graphics:mask_1_graphics_20,x:64.7,y:119.4}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// N_rightshape
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B60009","#680001"],[0,1],-1.3,22.2,-21,27.8).s().p("AjbPuMAAAgh7IG3AAMAAAAkbg");
	this.shape_1.setTransform(105.1,116.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(10).to({_off:false},0).to({_off:true},15).wait(15));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("Aj5SdIAAn0IHzAAIAAH1g");
	var mask_2_graphics_2 = new cjs.Graphics().p("Aj5SdIAA1AIHzAAIAAVBg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Aj5ScIAA/aIHzAAIAAfcg");
	var mask_2_graphics_4 = new cjs.Graphics().p("Aj5ThMAAAgnEIHzAAMAAAAnHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:22.8,y:118.2}).wait(1).to({graphics:mask_2_graphics_2,x:22.8,y:118.2}).wait(1).to({graphics:mask_2_graphics_3,x:22.8,y:118.2}).wait(1).to({graphics:mask_2_graphics_4,x:22.8,y:111.4}).wait(1).to({graphics:null,x:0,y:0}).wait(35));

	// N_leftshape
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B60009","#680001"],[0,1],-24.7,-382.7,-15,-385.6).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_2.setTransform(22.6,116.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B60009","#680001"],[0,1],-173.2,-296.7,-115.7,-343.5).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_3.setTransform(22.6,116.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B60009","#680001"],[0,1],-138.9,-284.2,-97.3,-316.4).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_4.setTransform(22.6,116.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B60009","#680001"],[0,1],-104.6,-271.7,-78.9,-289.3).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_5.setTransform(22.6,116.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B60009","#680001"],[0,1],-70.2,-259.2,-60.5,-262.1).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_6.setTransform(22.6,116.5);

	var maskedShapeInstanceList = [this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},18).wait(15));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_31 = new cjs.Graphics().p("ApSvLIHYilMAMRAjRInYCig");
	var mask_3_graphics_32 = new cjs.Graphics().p("AmUmpIHXikIJUatInYCjg");
	var mask_3_graphics_33 = new cjs.Graphics().p("AjWB4IHYijIGVSLInYCjg");
	var mask_3_graphics_34 = new cjs.Graphics().p("AgXKbIHXilIDXJpInYCkg");
	var mask_3_graphics_35 = new cjs.Graphics().p("ACmS9IHZilIAYBGInYClg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_3_graphics_31,x:66.3,y:128.3}).wait(1).to({graphics:mask_3_graphics_32,x:66.3,y:128.3}).wait(1).to({graphics:mask_3_graphics_33,x:66.3,y:128.3}).wait(1).to({graphics:mask_3_graphics_34,x:66.3,y:128.3}).wait(1).to({graphics:mask_3_graphics_35,x:66.3,y:128.3}).wait(5));

	// N_middleshape
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E50914").s().p("ACwRvMgMrgkAIHEAAMAMzAkjQipgpkjAGg");
	this.shape_7.setTransform(63.6,117.3);
	this.shape_7._off = true;

	var maskedShapeInstanceList = [this.shape_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(25).to({_off:false},0).wait(15));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_30 = new cjs.Graphics().p("ACASHMAAAgkPIIIAAMAAAAkRg");
	var mask_4_graphics_31 = new cjs.Graphics().p("ACASSMAAAgklIIIAAMAAAAkng");
	var mask_4_graphics_32 = new cjs.Graphics().p("ACAS0MAAAglpIIIAAMAAAAlrg");
	var mask_4_graphics_33 = new cjs.Graphics().p("ACATsMAAAgnZIIIAAMAAAAnbg");
	var mask_4_graphics_34 = new cjs.Graphics().p("ACAU6MAAAgp2IIIAAMAAAAp5g");
	var mask_4_graphics_35 = new cjs.Graphics().p("ACASSMAAAgklIIIAAMAAAAkng");
	var mask_4_graphics_36 = new cjs.Graphics().p("ACANpIAA7TIIIAAIAAbVg");
	var mask_4_graphics_37 = new cjs.Graphics().p("ACAJBIAAyCIIIAAIAASDg");
	var mask_4_graphics_38 = new cjs.Graphics().p("ACABZIAAoxIIIAAIAAIxg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_4_graphics_30,x:64.8,y:115.6}).wait(1).to({graphics:mask_4_graphics_31,x:64.8,y:114.6}).wait(1).to({graphics:mask_4_graphics_32,x:64.8,y:111.5}).wait(1).to({graphics:mask_4_graphics_33,x:64.8,y:106.3}).wait(1).to({graphics:mask_4_graphics_34,x:64.8,y:99.1}).wait(1).to({graphics:mask_4_graphics_35,x:64.8,y:63.5}).wait(1).to({graphics:mask_4_graphics_36,x:64.8,y:20.2}).wait(1).to({graphics:mask_4_graphics_37,x:64.8,y:-23.2}).wait(1).to({graphics:mask_4_graphics_38,x:64.8,y:-47.3}).wait(2));

	// N_rightshape
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#B60009","#680001"],[0,1],-1.3,22.2,-21,27.8).s().p("AjbPuMAAAgh7IG3AAMAAAAkbg");
	this.shape_8.setTransform(105.1,117.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#B60009","#680001"],[0,1],-1.3,49.7,-21,55.3).s().p("AjbUBMAAAgqhIG3AAMAAAAtBg");
	this.shape_9.setTransform(105.1,89.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#B60009","#680001"],[0,1],-1.3,52.2,-21,57.8).s().p("AjbUaMAAAgrTIG3AAMAAAAtzg");
	this.shape_10.setTransform(105.1,87.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#B60009","#680001"],[0,1],-13.3,76.6,-38.7,83.7).s().p("AjbVdMAAAgtZIG3AAMAAAAv5g");
	this.shape_11.setTransform(105.1,80.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#B60009","#680001"],[0,1],-25.3,100.9,-56.3,109.6).s().p("AjbWfMAAAgvdIG3AAMAAAAx9g");
	this.shape_12.setTransform(105.1,73.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#B60009","#680001"],[0,1],-37.4,125.4,-73.9,135.6).s().p("AjbXiMAAAgxjIG3AAMAAAA0Dg");
	this.shape_13.setTransform(105.1,67.1);

	var maskedShapeInstanceList = [this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},25).to({state:[{t:this.shape_9}]},5).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},4).wait(1));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_25 = new cjs.Graphics().p("AkrUTMAAAgonIJXAAMAAAAopg");
	var mask_5_graphics_26 = new cjs.Graphics().p("AkrSfMAAAgk/IJXAAMAAAAlBg");
	var mask_5_graphics_27 = new cjs.Graphics().p("AkrQJMAAAggUIJXAAMAAAAgXg");
	var mask_5_graphics_28 = new cjs.Graphics().p("AkrNTIAA6nIJXAAIAAapg");
	var mask_5_graphics_29 = new cjs.Graphics().p("AkrJ8IAAz4IJXAAIAAT5g");
	var mask_5_graphics_30 = new cjs.Graphics().p("AkrGDIAAsGIJXAAIAAMHg");
	var mask_5_graphics_31 = new cjs.Graphics().p("AkrBiIAAjSIJXAAIAADSg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(25).to({graphics:mask_5_graphics_25,x:21.6,y:107.6}).wait(1).to({graphics:mask_5_graphics_26,x:21.6,y:96}).wait(1).to({graphics:mask_5_graphics_27,x:21.6,y:81.1}).wait(1).to({graphics:mask_5_graphics_28,x:21.6,y:62.8}).wait(1).to({graphics:mask_5_graphics_29,x:21.6,y:41.2}).wait(1).to({graphics:mask_5_graphics_30,x:21.6,y:16.3}).wait(1).to({graphics:mask_5_graphics_31,x:21.6,y:-11.2}).wait(9));

	// N_leftshape
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#B60009","#680001"],[0,1],-70.2,-259.2,-60.5,-262.1).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_14.setTransform(22.6,116.8);
	this.shape_14._off = true;

	var maskedShapeInstanceList = [this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(25).to({_off:false},0).wait(15));

	// Layer 11
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.004)").s().p("Ap6aGMAAAg0LIT1AAMAAAA0Lg");
	this.shape_15.setTransform(63.5,67.5);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(25).to({_off:false},0).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(0,186.3,45.3,46.8), new cjs.Rectangle(0,101.9,45.3,131.2), new cjs.Rectangle(0,35.2,45.3,197.9), new cjs.Rectangle(0,0,54.3,233.1), new cjs.Rectangle(0,0,67.6,233.1), new cjs.Rectangle(0,0,82.7,233.1), new cjs.Rectangle(0,0,99.7,233.1), new cjs.Rectangle(0,0,118.5,233.1), rect=new cjs.Rectangle(0,0,127.3,234.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-99.5,127.3,334), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.X_shape_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E50914","#680001","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape.setTransform(70.7,126.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E50914","#750103","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_1.setTransform(70.7,126.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E50914","#810205","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_2.setTransform(70.7,126.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E50914","#8E0307","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_3.setTransform(70.7,126.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E50914","#9A0409","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_4.setTransform(70.7,126.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E50914","#A7050B","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_5.setTransform(70.7,126.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E50914","#B3050C","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_6.setTransform(70.7,126.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E50914","#BF060E","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_7.setTransform(70.7,126.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E50914","#CC0710","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_8.setTransform(70.7,126.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E50914","#D80812","#E50914"],[0,0.502,1],81.3,-230.9,146.4,-191.4).s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_9.setTransform(70.7,126.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E50914").s().p("AECS3MgPEgmkIGoAAMAPdAnbg");
	this.shape_10.setTransform(70.7,126.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,141.5,252.4);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.X_shape_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("ArRSDMAQFgkyIGeAAMgQKAlfg");
	this.shape.setTransform(72.2,120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.X_shape_01, rect = new cjs.Rectangle(0,0,144.5,239.9), [rect]);


(lib.L_shape_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("Am3C+IAAl7INvAAIAAF7g");
	this.shape.setTransform(43.5,19.5,0.989,1.026);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.L_shape_lower, rect = new cjs.Rectangle(0,0,87,39), [rect]);


(lib.I_shape_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("AjHU2MAAAgprIGPAAMAAAAprg");
	this.shape.setTransform(20,133.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.I_shape_main, rect = new cjs.Rectangle(0,0,40,266.8), [rect]);


(lib.E_shape_middle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("Al4DFIAAmJILxAAIAAGJg");
	this.shape.setTransform(37.7,19.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.E_shape_middle, rect = new cjs.Rectangle(0,0,75.5,39.5), [rect]);


(lib.E_shape_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E50914","#680001"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape.setTransform(20,114.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E50914","#750103"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_1.setTransform(20,114.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E50914","#810205"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_2.setTransform(20,114.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E50914","#8E0307"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_3.setTransform(20,114.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E50914","#9A0409"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_4.setTransform(20,114.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E50914","#A7050B"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_5.setTransform(20,114.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E50914","#B3050C"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_6.setTransform(20,114.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E50914","#BF060E"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_7.setTransform(20,114.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E50914","#CC0710"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_8.setTransform(20,114.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E50914","#D80812"],[0,1],4.5,-50.7,4.5,-93.2).s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_9.setTransform(20,114.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E50914").s().p("AjHR7MAAAgj1IGPAAMAAAAj1g");
	this.shape_10.setTransform(20,114.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},14).wait(267));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,40,229.5);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.E_shape_lower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E50914","#680001"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape.setTransform(54.1,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E50914","#740103"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_1.setTransform(54.1,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E40914","#800205"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_2.setTransform(54.1,21);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E40914","#8D0307"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_3.setTransform(54.1,21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E40914","#990409"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_4.setTransform(54.1,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E40914","#A5050B"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_5.setTransform(54.1,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E30914","#B1050C"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_6.setTransform(54.1,21);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E30914","#BD060E"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_7.setTransform(54.1,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#E30914","#CA0710"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_8.setTransform(54.1,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#E20914","#D60812"],[0,1],11.9,-2,-22.3,-2).s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_9.setTransform(54.1,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E20914").s().p("AocC0IAAmFIQ5AeIAAGFg");
	this.shape_10.setTransform(54.1,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},16).wait(265));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,108.3,42);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.netflix_n = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"in":1,"out":26});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_40 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25).call(this.frame_25).wait(15).call(this.frame_40).wait(1));

	// Layer 1
	this.instance = new lib.netflix_ribbon("synched",0,false);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(40));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ap7SSMAAAgkjIT3AAMAAAAkjg");
	this.shape.setTransform(63.6,117);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,127.3,234.1);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,-99.5,127.3,334), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.netflix_logo_full = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().p("Ak+iXIHWinICnHXInXCmg");
	var mask_graphics_5 = new cjs.Graphics().p("AlwklIHWinIELLzInXCmg");
	var mask_graphics_6 = new cjs.Graphics().p("AmpnGIHWimIF9Q0InXClg");
	var mask_graphics_7 = new cjs.Graphics().p("Anop5IHXinIH6WcInXClg");
	var mask_graphics_8 = new cjs.Graphics().p("AovtAIHYimIKHcpInYCkg");
	var mask_graphics_9 = new cjs.Graphics().p("Ap8wZIHYinMAMhAjdInZCkg");
	var mask_graphics_10 = new cjs.Graphics().p("ArP0GIHXimMAPIAq1InYCkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:22.4,y:2.2}).wait(1).to({graphics:mask_graphics_5,x:27.7,y:17.7}).wait(1).to({graphics:mask_graphics_6,x:33.7,y:35.3}).wait(1).to({graphics:mask_graphics_7,x:40.4,y:54.9}).wait(1).to({graphics:mask_graphics_8,x:47.8,y:76.6}).wait(1).to({graphics:mask_graphics_9,x:55.9,y:100.4}).wait(1).to({graphics:mask_graphics_10,x:65.4,y:127.9}).wait(1).to({graphics:null,x:0,y:0}).wait(55));

	// N_middleshape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E50914").s().p("ACwRvMgMrgkAIHEAAMAMzAkjQipgpkjAGg");
	this.shape.setTransform(63.6,118.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E50914").s().p("ACzR0MgMtgkGIHAAAMAM1AklQiqgmkeAHg");
	this.shape_1.setTransform(63.5,118.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E50914").s().p("AC2R3MgMvgkKIG9AAMAM2AknQisgkkYAHg");
	this.shape_2.setTransform(63.4,118.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E50914").s().p("AC5R8MgMxgkQIG5ABMAM4AkoQisghkUAIg");
	this.shape_3.setTransform(63.3,118.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E50914").s().p("AC7SAMgMygkUIG1ABMAM6AkoQitgdkQAIg");
	this.shape_4.setTransform(63.2,118.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E50914").s().p("AC+SEMgM0gkZIGxABMAM8AkqQiugbkLAJg");
	this.shape_5.setTransform(63.1,118.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E50914").s().p("ADASIMgM1gkeIGuABMAM9AksQivgZkHAKg");
	this.shape_6.setTransform(63,119);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E50914").s().p("ADDSLMgM3gkiIGqACMAM/AktQiwgWkCAJg");
	this.shape_7.setTransform(62.9,119.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E50914").s().p("ADFSPMgM4gkmIGnACMANAAktQixgTj+AKg");
	this.shape_8.setTransform(62.8,119.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E50914").s().p("ADISSMgM6gkqIGkACMANBAkvQixgRj6AKg");
	this.shape_9.setTransform(62.7,119.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E50914").s().p("ADKSVMgM7gkuIGhACMANCAkxQiygPj2AKg");
	this.shape_10.setTransform(62.6,119.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E50914").s().p("ADMSZMgM8gkyIGdACMANEAkyQiygNjzALg");
	this.shape_11.setTransform(62.5,119.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E50914").s().p("ApvyaIGaACMANFAkzQizgMjvANg");
	this.shape_12.setTransform(62.4,119.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E50914").s().p("ApuycIGXACMANGAk0QizgJjsAMg");
	this.shape_13.setTransform(62.3,119.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E50914").s().p("ApuyeIGVADMANHAk0Qi0gGjoAMg");
	this.shape_14.setTransform(62.3,119.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E50914").s().p("AptygIGSADMANJAk2Qi1gFjlANg");
	this.shape_15.setTransform(62.2,120);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E50914").s().p("ApsyhIGQADMANJAk3Qi2gEjhANg");
	this.shape_16.setTransform(62.1,120.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E50914").s().p("ApryjIGNAEMANKAk3Qi2gCjeAOg");
	this.shape_17.setTransform(62,120.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E50914").s().p("AprykIGLADMANMAk5Qi3gBjcAOg");
	this.shape_18.setTransform(62,120.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E50914").s().p("ApqymIGIAEMANNAk5Qi3ABjZAPg");
	this.shape_19.setTransform(61.9,120.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E50914").s().p("ApqynIGHAEMANNAk6Qi3ACjXAPg");
	this.shape_20.setTransform(61.9,120.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E50914").s().p("AppyoIGFADMANOAk7Qi4AFjUAPg");
	this.shape_21.setTransform(61.8,120.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E50914").s().p("ApoypIGCADMANPAk8Qi4AGjSAOg");
	this.shape_22.setTransform(61.7,121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E50914").s().p("ApoyrIGBAEMANQAk8Qi5AHjQAQg");
	this.shape_23.setTransform(61.7,121.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E50914").s().p("ApnysIF/AEMANQAk9Qi5AIjNAQg");
	this.shape_24.setTransform(61.6,121.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E50914").s().p("ApnytIF+AFMANRAk9Qi6AJjLAQg");
	this.shape_25.setTransform(61.6,121.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E50914").s().p("ApnyuIF8AFMANTAk9Qi7ALjJAQg");
	this.shape_26.setTransform(61.6,121.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E50914").s().p("ApmyvIF7AFMANSAk+Qi6ALjIARg");
	this.shape_27.setTransform(61.5,121.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E50914").s().p("ApmyvIF6AEMANTAk/Qi7AMjGAQg");
	this.shape_28.setTransform(61.5,121.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E50914").s().p("AplywIF4AEMANTAlAQi7ANjEAQg");
	this.shape_29.setTransform(61.4,121.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E50914").s().p("AplyxIF3AFMANUAlAQi7ANjEARg");
	this.shape_30.setTransform(61.4,121.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E50914").s().p("AplyxIF2AEMANVAlAIl+Agg");
	this.shape_31.setTransform(61.4,121.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E50914").s().p("AplyyIF2AFMANUAlAIl9Agg");
	this.shape_32.setTransform(61.4,121.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E50914").s().p("ApkyzIF0AFMANVAlBQi8APjAASg");
	this.shape_33.setTransform(61.3,121.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E50914").s().p("ApkyzIF0AFMANVAlAIl7Aig");
	this.shape_34.setTransform(61.3,121.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E50914").s().p("ApkyzIF0AEMANVAlCIl7Ahg");
	this.shape_35.setTransform(61.3,122);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E50914").s().p("Apky0IFzAFMANWAlBIl7Ajg");
	this.shape_36.setTransform(61.3,122);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E50914").s().p("Apky0IFzAFMANWAlBIl6Ajg");
	this.shape_37.setTransform(61.3,122);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E50914").s().p("Apky0IFyAFMANWAlBIl5Ajg");
	this.shape_38.setTransform(61.3,122);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape}]},21).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_38}]},1).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_10 = new cjs.Graphics().p("ACSS2IAAn0IH1AAIAAH0g");
	var mask_1_graphics_11 = new cjs.Graphics().p("ACSS1IAAtdIH1AAIAANeg");
	var mask_1_graphics_12 = new cjs.Graphics().p("ACSS0IAAygIH1AAIAASig");
	var mask_1_graphics_13 = new cjs.Graphics().p("ACSS0IAA29IH1AAIAAW+g");
	var mask_1_graphics_14 = new cjs.Graphics().p("ACSSzIAA6zIH1AAIAAa1g");
	var mask_1_graphics_15 = new cjs.Graphics().p("ACSSzIAA+FIH1AAIAAeHg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ACSSyMAAAggvIH1AAMAAAAgxg");
	var mask_1_graphics_17 = new cjs.Graphics().p("ACSSyMAAAgi1IH1AAMAAAAi3g");
	var mask_1_graphics_18 = new cjs.Graphics().p("ACSSyMAAAgkUIH1AAMAAAAkWg");
	var mask_1_graphics_19 = new cjs.Graphics().p("ACSSyMAAAglNIH1AAMAAAAlPg");
	var mask_1_graphics_20 = new cjs.Graphics().p("ACSSzMAAAglgIH1AAMAAAAlig");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(10).to({graphics:mask_1_graphics_10,x:64.7,y:120.7}).wait(1).to({graphics:mask_1_graphics_11,x:64.7,y:120.6}).wait(1).to({graphics:mask_1_graphics_12,x:64.7,y:120.6}).wait(1).to({graphics:mask_1_graphics_13,x:64.7,y:120.5}).wait(1).to({graphics:mask_1_graphics_14,x:64.7,y:120.5}).wait(1).to({graphics:mask_1_graphics_15,x:64.7,y:120.5}).wait(1).to({graphics:mask_1_graphics_16,x:64.7,y:120.4}).wait(1).to({graphics:mask_1_graphics_17,x:64.7,y:120.4}).wait(1).to({graphics:mask_1_graphics_18,x:64.7,y:120.4}).wait(1).to({graphics:mask_1_graphics_19,x:64.7,y:120.4}).wait(1).to({graphics:mask_1_graphics_20,x:64.7,y:120.5}).wait(1).to({graphics:null,x:0,y:0}).wait(45));

	// N_rightshape
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#B60009","#680001"],[0,1],-1.3,22.2,-21,27.8).s().p("AjbPuMAAAgh7IG3AAMAAAAkbg");
	this.shape_39.setTransform(105.1,118.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#B8000A","#6E0002"],[0,1],-1.4,22.1,-21.2,27.7).s().p("AjaP5MAAAgiHIG1AAMAAAAkdg");
	this.shape_40.setTransform(105.2,118.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#BB010A","#740103"],[0,1],-1.6,22.1,-21.4,27.6).s().p("AjZQDMAAAgiSIGzAAMAAAAkfg");
	this.shape_41.setTransform(105.4,118.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#BD010B","#7A0104"],[0,1],-1.8,22,-21.5,27.5).s().p("AjXQNMAAAgicIGvAAMAAAAkfg");
	this.shape_42.setTransform(105.6,118.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#BF020B","#800205"],[0,1],-1.9,21.9,-21.7,27.5).s().p("AjWQXMAAAginIGtAAMAAAAkhg");
	this.shape_43.setTransform(105.7,118.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#C1020C","#850205"],[0,1],-2.1,21.8,-21.9,27.4).s().p("AjVQhMAAAgiyIGrAAMAAAAkjg");
	this.shape_44.setTransform(105.9,118.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#C3020C","#8B0206"],[0,1],-2.3,21.8,-22,27.3).s().p("AjTQqMAAAgi8IGnAAMAAAAklg");
	this.shape_45.setTransform(106.1,118.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#C5030D","#900307"],[0,1],-2.4,21.7,-22.2,27.3).s().p("AjSQzMAAAgjFIGlAAMAAAAklg");
	this.shape_46.setTransform(106.2,118.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#C7030D","#950308"],[0,1],-2.6,21.6,-22.3,27.2).s().p("AjRQ8MAAAgjPIGjAAMAAAAkng");
	this.shape_47.setTransform(106.4,118.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#C9040D","#9A0409"],[0,1],-2.7,21.6,-22.4,27.1).s().p("AjQREMAAAgjYIGhAAMAAAAkpg");
	this.shape_48.setTransform(106.5,119);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#CB040E","#9F0409"],[0,1],-2.8,21.5,-22.6,27.1).s().p("AjPRNMAAAgjhIGfAAMAAAAkpg");
	this.shape_49.setTransform(106.6,119.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#CC040E","#A3040A"],[0,1],-3,21.5,-22.7,27).s().p("AjORUMAAAgjpIGdAAMAAAAkqg");
	this.shape_50.setTransform(106.8,119.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#CE050F","#A8050B"],[0,1],-3.1,21.4,-22.8,26.9).s().p("AjNRcMAAAgjxIGbAAMAAAAkrg");
	this.shape_51.setTransform(106.9,119.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#D0050F","#AC050B"],[0,1],-3.2,21.3,-23,26.9).s().p("AjMRkMAAAgj6IGZAAMAAAAktg");
	this.shape_52.setTransform(107,119.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#D1050F","#B0050C"],[0,1],-3.3,21.3,-23.1,26.8).s().p("AjLRrMAAAgkBIGXAAMAAAAktg");
	this.shape_53.setTransform(107.1,119.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#D30510","#B4050D"],[0,1],-3.5,21.2,-23.2,26.8).s().p("AjKRyMAAAgkJIGVAAMAAAAkvg");
	this.shape_54.setTransform(107.3,119.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#D40610","#B8060D"],[0,1],-3.6,21.2,-23.3,26.7).s().p("AjJR4MAAAgkPIGTAAMAAAAkvg");
	this.shape_55.setTransform(107.4,119.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#D50610","#BC060E"],[0,1],-3.7,21.1,-23.4,26.7).s().p("AjIR/MAAAgkXIGRAAMAAAAkxg");
	this.shape_56.setTransform(107.5,119.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#D70611","#BF060E"],[0,1],-3.8,21.1,-23.5,26.6).s().p("AjISFMAAAgkdIGRAAMAAAAkxg");
	this.shape_57.setTransform(107.6,119.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#D80711","#C3070F"],[0,1],-3.9,21.1,-23.6,26.6).s().p("AjHSKMAAAgkjIGPAAMAAAAkyg");
	this.shape_58.setTransform(107.7,119.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#D90711","#C6070F"],[0,1],-4,21,-23.7,26.6).s().p("AjGSQMAAAgkpIGNAAMAAAAkzg");
	this.shape_59.setTransform(107.8,119.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#DA0712","#C90710"],[0,1],-4,21,-23.8,26.5).s().p("AjFSVMAAAgkvIGLAAMAAAAk0g");
	this.shape_60.setTransform(107.8,119.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#DB0712","#CC0710"],[0,1],-4.1,20.9,-23.9,26.5).s().p("AjFSaMAAAgk0IGLAAMAAAAk1g");
	this.shape_61.setTransform(107.9,119.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#DD0712","#CE0711"],[0,1],-4.2,20.7,-24,26.3).s().p("AjEycIGJAAMAAAAk1ImJAEg");
	this.shape_62.setTransform(108,119.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#DD0812","#D10811"],[0,1],-4.3,20.5,-24,26).s().p("AjDyfIGHAAMAAAAk3ImHAHg");
	this.shape_63.setTransform(108.1,120.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#DE0812","#D30811"],[0,1],-4.4,20.2,-24.1,25.8).s().p("AjDyhIGHAAMAAAAk3ImHAMg");
	this.shape_64.setTransform(108.2,120.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#DF0813","#D60812"],[0,1],-4.4,20,-24.2,25.6).s().p("AjCyjIGFAAMAAAAk3ImFAQg");
	this.shape_65.setTransform(108.2,120.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#E00813","#D80812"],[0,1],-4.5,19.8,-24.2,25.4).s().p("AjCylIGFAAMAAAAk4ImFATg");
	this.shape_66.setTransform(108.3,120.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#E10813","#DA0812"],[0,1],-4.5,19.7,-24.3,25.2).s().p("AjCynIGFAAMAAAAk5ImFAVg");
	this.shape_67.setTransform(108.3,120.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#E10813","#DC0813"],[0,1],-4.6,19.5,-24.3,25).s().p("AjByoIGDAAMAAAAk4ImDAZg");
	this.shape_68.setTransform(108.4,121.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#E20813","#DD0813"],[0,1],-4.6,19.3,-24.4,24.9).s().p("AjByqIGDAAMAAAAk5ImDAcg");
	this.shape_69.setTransform(108.4,121.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#E30913","#DF0913"],[0,1],-4.7,19.2,-24.4,24.7).s().p("AjAyrIGBAAMAAAAk5ImBAeg");
	this.shape_70.setTransform(108.5,121.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#E30914","#E00913"],[0,1],-4.7,19.1,-24.5,24.6).s().p("AjAysIGBAAMAAAAk5ImBAgg");
	this.shape_71.setTransform(108.5,121.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#E40914","#E10913"],[0,1],-4.8,19,-24.5,24.5).s().p("AjAyuIGBAAMAAAAk7ImBAig");
	this.shape_72.setTransform(108.6,121.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#E40914","#E20914"],[0,1],-4.8,18.9,-24.5,24.4).s().p("AjAyvIGBAAMAAAAk7ImBAjg");
	this.shape_73.setTransform(108.6,121.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#E40914","#E30914"],[0,1],-4.8,18.8,-24.6,24.3).s().p("Ai/yvIGAAAMAAAAk6ImAAlg");
	this.shape_74.setTransform(108.6,121.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#E50914","#E40914"],[0,1],-4.8,18.7,-24.6,24.3).s().p("Ai/ywIF/AAMAAAAk7Il/Amg");
	this.shape_75.setTransform(108.6,121.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#E50914","#E40914"],[0,1],-4.8,18.7,-24.6,24.2).s().p("Ai/ywIF/AAMAAAAk7Il/Amg");
	this.shape_76.setTransform(108.6,121.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#E50914","#E50914"],[0,1],-4.9,18.6,-24.6,24.2).s().p("Ai/yxIF/AAMAAAAk7Il/Aog");
	this.shape_77.setTransform(108.7,121.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E50914").s().p("Ai/yxIF/AAMAAAAk7Il/Aog");
	this.shape_78.setTransform(108.7,122);

	var maskedShapeInstanceList = [this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39}]},10).to({state:[{t:this.shape_39}]},15).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77,p:{y:121.9}}]},1).to({state:[{t:this.shape_77,p:{y:122}}]},1).to({state:[{t:this.shape_78}]},1).wait(1));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_1 = new cjs.Graphics().p("Aj5SlIAAn1IHzAAIAAH1g");
	var mask_2_graphics_2 = new cjs.Graphics().p("Aj5SkIAA0/IHzAAIAAVBg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Aj5SkIAA/bIHzAAIAAfdg");
	var mask_2_graphics_4 = new cjs.Graphics().p("Aj5ThMAAAgnEIHzAAMAAAAnGg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_2_graphics_1,x:22.8,y:118.9}).wait(1).to({graphics:mask_2_graphics_2,x:22.8,y:119}).wait(1).to({graphics:mask_2_graphics_3,x:22.8,y:119}).wait(1).to({graphics:mask_2_graphics_4,x:22.8,y:112.9}).wait(1).to({graphics:null,x:0,y:0}).wait(61));

	// N_leftshape
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#B60009","#680001"],[0,1],-24.7,-382.7,-15,-385.6).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_79.setTransform(22.6,118);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#B60009","#680001"],[0,1],-173.2,-296.7,-115.7,-343.5).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_80.setTransform(22.6,118);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#B60009","#680001"],[0,1],-138.9,-284.2,-97.3,-316.4).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_81.setTransform(22.6,118);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#B60009","#680001"],[0,1],-104.6,-271.7,-78.9,-289.3).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_82.setTransform(22.6,118);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#B60009","#680001"],[0,1],-70.2,-259.2,-60.5,-262.1).s().p("AjhyMIHDAAMAAAAj9QkXgEisAgg");
	this.shape_83.setTransform(22.6,118);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#B8000A","#6E0002"],[0,1],-70.1,-259.7,-60.4,-262.6).s().p("AjgyRIHAAAMAABAkGQkUgEitAhg");
	this.shape_84.setTransform(22.5,118.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#BB010A","#740103"],[0,1],-70,-260.2,-60.3,-263.1).s().p("AjfyWIG8AAMAADAkOQkRgCiuAhg");
	this.shape_85.setTransform(22.4,119);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#BD010B","#7A0104"],[0,1],-69.8,-260.6,-60.1,-263.5).s().p("AjdyaIG3AAMAAEAkWQkNgBiuAgg");
	this.shape_86.setTransform(22.2,119.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#BF020B","#800205"],[0,1],-69.7,-261.1,-60,-264).s().p("AjcyeIG0AAMAAFAkeQkJgBiwAhg");
	this.shape_87.setTransform(22.1,119.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#C1020C","#850205"],[0,1],-69.6,-261.5,-59.9,-264.4).s().p("AjbyjIGwAAMAAHAkmQkHABiwAgg");
	this.shape_88.setTransform(22,120.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#C3020C","#8B0206"],[0,1],-69.4,-261.9,-59.7,-264.8).s().p("AjZynIGsAAMAAHAktQkDACiwAgg");
	this.shape_89.setTransform(21.8,120.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#C5030D","#900307"],[0,1],-69.3,-262.3,-59.6,-265.2).s().p("AjYyrIGpAAMAAIAk1QkAACixAgg");
	this.shape_90.setTransform(21.7,121.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#C7030D","#950308"],[0,1],-69.2,-262.7,-59.5,-265.6).s().p("AjXyvIGmAAMAAJAk8Qj9ADiyAgg");
	this.shape_91.setTransform(21.6,121.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#C9040D","#9A0409"],[0,1],-69.1,-263.1,-59.4,-266).s().p("AjWyzIGjAAMAAKAlDQj6AEizAgg");
	this.shape_92.setTransform(21.5,121.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#CB040E","#9F0409"],[0,1],-69,-263.4,-59.3,-266.3).s().p("AjVy2IGgAAMAALAlJQj4AFizAfg");
	this.shape_93.setTransform(21.4,122.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#CC040E","#A3040A"],[0,1],-68.9,-263.8,-59.2,-266.7).s().p("AjUy6IGdAAMAALAlQQj0AFi0Agg");
	this.shape_94.setTransform(21.3,122.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#CE050F","#A8050B"],[0,1],-68.8,-264.1,-59.1,-267).s().p("AjTy9IGaAAMAAMAlWQjyAGi0Afg");
	this.shape_95.setTransform(21.2,122.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#D0050F","#AC050B"],[0,1],-68.7,-264.5,-59,-267.4).s().p("AjSzBIGXAAMAAOAldQjwAGi1Agg");
	this.shape_96.setTransform(21.1,123.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#D1050F","#B0050C"],[0,1],-68.6,-264.8,-58.9,-267.7).s().p("AjRzEIGUAAMAAPAliQjuAHi1Agg");
	this.shape_97.setTransform(21,123.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#D30510","#B4050D"],[0,1],-68.5,-265.1,-58.8,-268).s().p("AjQzHIGRAAMAAQAloQjrAHi2Agg");
	this.shape_98.setTransform(20.9,123.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#D40610","#B8060D"],[0,1],-68.4,-265.4,-58.7,-268.3).s().p("AjPzKIGPAAMAAQAltQjpAIi2Agg");
	this.shape_99.setTransform(20.8,124.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#D50610","#BC060E"],[0,1],-68.3,-265.7,-58.6,-268.6).s().p("AjOzNIGNAAMAAQAlyQjmAJi3Agg");
	this.shape_100.setTransform(20.7,124.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#D70611","#BF060E"],[0,1],-68.2,-266,-58.5,-268.9).s().p("AjNzPIGKAAMAARAl2QjkAKi3Agg");
	this.shape_101.setTransform(20.6,124.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#D80711","#C3070F"],[0,1],-68.2,-266.2,-58.5,-269.1).s().p("AjNzSIGIAAMAATAl8QjjAJi4Agg");
	this.shape_102.setTransform(20.6,125);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#D90711","#C6070F"],[0,1],-68.1,-266.5,-58.4,-269.4).s().p("AjMzUIGGAAMAATAmAQjhAKi4Agg");
	this.shape_103.setTransform(20.5,125.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#DA0712","#C90710"],[0,1],-68,-266.7,-58.3,-269.6).s().p("AjLzXIGEAAMAATAmFQjfAKi4Agg");
	this.shape_104.setTransform(20.4,125.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#DB0712","#CC0710"],[0,1],-67.9,-266.9,-58.2,-269.8).s().p("AjKzZIGBAAMAAUAmIQjdALi4Agg");
	this.shape_105.setTransform(20.3,125.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#DD0712","#CE0711"],[0,1],-67.9,-267.1,-58.2,-270).s().p("AjKzbIGAAAMAAVAmNQjcALi5Afg");
	this.shape_106.setTransform(20.3,125.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#DD0812","#D10811"],[0,1],-67.8,-267.3,-58.1,-270.2).s().p("AjJzdIF+AAMAAVAmQQjaAMi5Afg");
	this.shape_107.setTransform(20.2,126.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#DE0812","#D30811"],[0,1],-67.8,-267.5,-58.1,-270.4).s().p("AjJzfIF9AAMAAWAmUQjZAMi6Afg");
	this.shape_108.setTransform(20.2,126.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#DF0813","#D60812"],[0,1],-67.7,-267.7,-58,-270.6).s().p("AjIzhIF7AAMAAWAmXQjXAMi6Agg");
	this.shape_109.setTransform(20.1,126.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#E00813","#D80812"],[0,1],-67.7,-267.8,-58,-270.7).s().p("AjIziIF6AAMAAXAmZQjWANi7Afg");
	this.shape_110.setTransform(20.1,126.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#E10813","#DA0812"],[0,1],-67.6,-268,-57.9,-270.9).s().p("AjHzkIF4AAMAAXAmdQjVANi6Afg");
	this.shape_111.setTransform(20,126.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#E10813","#DC0813"],[0,1],-67.6,-268.1,-57.9,-271).s().p("AjHzlIF3AAMAAYAmfQjUANi7Afg");
	this.shape_112.setTransform(20,126.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#E20813","#DD0813"],[0,1],-67.5,-268.3,-57.8,-271.2).s().p("AjGzmIF2AAMAAXAmhQjTANi6Agg");
	this.shape_113.setTransform(19.9,127.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#E30913","#DF0913"],[0,1],-67.5,-268.4,-57.8,-271.3).s().p("AjGzoIF1AAMAAYAmjQjSAOi7Agg");
	this.shape_114.setTransform(19.9,127.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#E30914","#E00913"],[0,1],-67.5,-268.5,-57.8,-271.4).s().p("AjGzpIF1AAMAAYAmlQjSAOi7Agg");
	this.shape_115.setTransform(19.9,127.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#E40914","#E10913"],[0,1],-67.5,-268.6,-57.8,-271.5).s().p("AjGzpIF0AAMAAYAmmQjQAPi8Aeg");
	this.shape_116.setTransform(19.9,127.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#E40914","#E20914"],[0,1],-67.4,-268.6,-57.7,-271.5).s().p("AjFzqIFzAAMAAYAmoQjQAOi7Afg");
	this.shape_117.setTransform(19.8,127.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#E40914","#E30914"],[0,1],-67.4,-268.7,-57.7,-271.6).s().p("AjFzrIFzAAMAAYAmpQjPAPi8Afg");
	this.shape_118.setTransform(19.8,127.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#E50914","#E40914"],[0,1],-67.4,-268.8,-57.7,-271.7).s().p("AjFzrIFyAAMAAZAmqQjPAOi8Agg");
	this.shape_119.setTransform(19.8,127.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#E50914","#E40914"],[0,1],-67.4,-268.8,-57.7,-271.7).s().p("AjFzsIFyAAMAAZAmrQjPAPi8Afg");
	this.shape_120.setTransform(19.8,127.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#E50914","#E50914"],[0,1],-67.4,-268.8,-57.7,-271.7).s().p("AjFzsIFxAAMAAaAmrQjPAPi8Afg");
	this.shape_121.setTransform(19.8,127.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#E50914","#E50914"],[0,1],-67.4,-268.9,-57.7,-271.8).s().p("AjFzsIFxAAMAAaAmsQjPAPi8Afg");
	this.shape_122.setTransform(19.8,127.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E50914").s().p("AjFzsIFxAAMAAaAmsQjPAPi8Afg");
	this.shape_123.setTransform(19.8,127.7);

	var maskedShapeInstanceList = [this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},3).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_83}]},18).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).wait(1));

	// mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_35 = new cjs.Graphics().p("AFZD6IAAnzIOYAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_3_graphics_35,x:126.5,y:19.2}).wait(1).to({graphics:null,x:0,y:0}).wait(30));

	// E_shapetop
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#E50914").s().p("AogDIIAAmPIRBAAIAAGPg");
	this.shape_124.setTransform(220.2,20.8);
	this.shape_124._off = true;

	var maskedShapeInstanceList = [this.shape_124];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(35).to({_off:false},0).wait(31));

	// mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_36 = new cjs.Graphics().p("AMXK1IAAn0IFMAAIAAH0g");
	var mask_4_graphics_37 = new cjs.Graphics().p("AK6K1IAAn0IIGAAIAAH0g");
	var mask_4_graphics_38 = new cjs.Graphics().p("AKCK1IAAn0IJ2AAIAAH0g");
	var mask_4_graphics_39 = new cjs.Graphics().p("AJvK1IAAn0IKcAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_4_graphics_36,x:112.3,y:69.4}).wait(1).to({graphics:mask_4_graphics_37,x:121.6,y:69.4}).wait(1).to({graphics:mask_4_graphics_38,x:127.2,y:69.4}).wait(1).to({graphics:mask_4_graphics_39,x:129.1,y:69.4}).wait(27));

	// E_shapemiddle
	this.instance = new lib.E_shape_middle();
	this.instance.parent = this;
	this.instance.setTransform(220.1,113.7,0.994,1.014,0,0,0,37.6,19.7);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:false},0).wait(30));

	// mask (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_33 = new cjs.Graphics().p("AIuSfIAAr4IH0AAIAAL5g");
	var mask_5_graphics_34 = new cjs.Graphics().p("AIuSeIAA7BIH0AAIAAbDg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(33).to({graphics:mask_5_graphics_33,x:105.8,y:118.4}).wait(1).to({graphics:mask_5_graphics_34,x:105.8,y:118.4}).wait(1).to({graphics:null,x:0,y:0}).wait(31));

	// E_shapemain
	this.instance_1 = new lib.E_shape_main("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(185.6,119.3,1.001,0.986,0,0,1.8,20,114.8);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({regY:114.6,scaleX:1,scaleY:0.98,skewY:-0.7,y:114.7,startPosition:7},7,cjs.Ease.get(-1)).to({regY:114.7,scaleX:1,scaleY:0.98,skewY:-2.1,y:116.4,startPosition:10},3,cjs.Ease.get(1)).to({regY:114.6,scaleY:0.98,skewY:-2.9,y:117.4,startPosition:13},3).to({scaleX:1,scaleY:0.98,skewY:-4.2,y:120,startPosition:22},9,cjs.Ease.get(1)).wait(11));

	// mask (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_31 = new cjs.Graphics().p("APXSfIAAn0IH0AAIAAH0g");
	var mask_6_graphics_32 = new cjs.Graphics().p("ALnSfIAAn0ILkAAIAAH0g");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(31).to({graphics:mask_6_graphics_31,x:148.3,y:118.4}).wait(1).to({graphics:mask_6_graphics_32,x:148.3,y:118.4}).wait(1).to({graphics:null,x:0,y:0}).wait(33));

	// E_shapelower
	this.instance_2 = new lib.E_shape_lower("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(220.2,214.1,1,1,0,0,0,54.1,21);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({scaleX:1,skewY:-2.6,y:206.6,startPosition:9},9,cjs.Ease.get(-1)).to({regY:20.9,scaleX:1,skewY:-3.8,y:207.2,startPosition:12},3,cjs.Ease.get(1)).to({regY:21,scaleX:1,skewY:-4.8,y:208.1,startPosition:15},3).to({scaleX:1,skewY:-5.5,y:210.4,startPosition:24},9,cjs.Ease.get(1)).wait(11));

	// mask (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_36 = new cjs.Graphics().p("ASrD6IAAnzIH0AAIAAHzg");
	var mask_7_graphics_37 = new cjs.Graphics().p("AM8D6IAAnzITSAAIAAHzg");
	var mask_7_graphics_38 = new cjs.Graphics().p("AL+D6IAAnzIVPAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(36).to({graphics:mask_7_graphics_36,x:169.5,y:19.7}).wait(1).to({graphics:mask_7_graphics_37,x:206.2,y:19.7}).wait(1).to({graphics:mask_7_graphics_38,x:212.5,y:19.7}).wait(28));

	// T_shapetop
	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E50914").s().p("ApmDIIAAmPITNAAIAAGPg");
	this.shape_125.setTransform(361.2,20.8);
	this.shape_125._off = true;

	var maskedShapeInstanceList = [this.shape_125];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_125).wait(36).to({_off:false},0).wait(30));

	// mask (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_37 = new cjs.Graphics().p("AWWD6IAAnzIH0AAIAAHzg");
	var mask_8_graphics_38 = new cjs.Graphics().p("AWWJeIAAy9IH0AAIAAS/g");
	var mask_8_graphics_39 = new cjs.Graphics().p("AWWNuIAA7cIH0AAIAAbdg");
	var mask_8_graphics_40 = new cjs.Graphics().p("AWWQnMAAAghPIH0AAMAAAAhRg");
	var mask_8_graphics_41 = new cjs.Graphics().p("AWWSLMAAAgkXIH0AAMAAAAkZg");
	var mask_8_graphics_42 = new cjs.Graphics().p("AWWRxMAAAgj2IH0ASMAAAAj5g");
	var mask_8_graphics_43 = new cjs.Graphics().p("AWWRzMAAAgj2IH0AOMAAAAj5g");
	var mask_8_graphics_44 = new cjs.Graphics().p("AWWR1MAAAgj2IH0ALMAAAAj4g");
	var mask_8_graphics_45 = new cjs.Graphics().p("AWWR3MAAAgj3IH0AIMAAAAj5g");
	var mask_8_graphics_46 = new cjs.Graphics().p("AWWR5MAAAgj3IH0AEMAAAAj5g");
	var mask_8_graphics_47 = new cjs.Graphics().p("AWWR7MAAAgj3IH0AAMAAAAj5g");
	var mask_8_graphics_48 = new cjs.Graphics().p("AWWx5IH0gFMAAAAj6In0ADg");
	var mask_8_graphics_49 = new cjs.Graphics().p("AWWx3IH0gJMAAAAj7In0AGg");
	var mask_8_graphics_50 = new cjs.Graphics().p("AWWx2IH0gMMAAAAj7In0AKg");
	var mask_8_graphics_51 = new cjs.Graphics().p("AWWx1IH0gPMAAAAj9In0AMg");
	var mask_8_graphics_52 = new cjs.Graphics().p("AWWx1IH0gQMAAAAj9In0AOg");
	var mask_8_graphics_53 = new cjs.Graphics().p("AWWx0IH0gSMAAAAj9In0AQg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_8_graphics_37,x:193,y:20.7}).wait(1).to({graphics:mask_8_graphics_38,x:193,y:56.4}).wait(1).to({graphics:mask_8_graphics_39,x:193,y:83.5}).wait(1).to({graphics:mask_8_graphics_40,x:193,y:102}).wait(1).to({graphics:mask_8_graphics_41,x:193,y:112.2}).wait(1).to({graphics:mask_8_graphics_42,x:193,y:111.6}).wait(1).to({graphics:mask_8_graphics_43,x:193,y:111}).wait(1).to({graphics:mask_8_graphics_44,x:193,y:110.4}).wait(1).to({graphics:mask_8_graphics_45,x:193,y:109.8}).wait(1).to({graphics:mask_8_graphics_46,x:193,y:109.2}).wait(1).to({graphics:mask_8_graphics_47,x:193,y:108.6}).wait(1).to({graphics:mask_8_graphics_48,x:193,y:108.3}).wait(1).to({graphics:mask_8_graphics_49,x:193,y:108.1}).wait(1).to({graphics:mask_8_graphics_50,x:193,y:108}).wait(1).to({graphics:mask_8_graphics_51,x:193,y:107.9}).wait(1).to({graphics:mask_8_graphics_52,x:193,y:107.8}).wait(1).to({graphics:mask_8_graphics_53,x:193,y:108}).wait(13));

	// T_shapemain
	this.instance_3 = new lib.E_shape_main("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(361.1,117.8,1,0.957,0,0,0,20,114.7);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).wait(29));

	// mask (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_37 = new cjs.Graphics().p("AbiD6IAAnzIH1AAIAAHzg");
	var mask_9_graphics_38 = new cjs.Graphics().p("AY8D6IAAnzINbAAIAAHzg");
	var mask_9_graphics_39 = new cjs.Graphics().p("AWVD6IAAnzITDAAIAAHzg");
	var mask_9_graphics_40 = new cjs.Graphics().p("AS4D6IAAnzIYrAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(37).to({graphics:mask_9_graphics_37,x:226.3,y:19.2}).wait(1).to({graphics:mask_9_graphics_38,x:245.5,y:19.2}).wait(1).to({graphics:mask_9_graphics_39,x:264.8,y:19.2}).wait(1).to({graphics:mask_9_graphics_40,x:278.7,y:19.2}).wait(26));

	// F_shapetop
	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E50914").s().p("AolDIIAAmPIRLAAIAAGPg");
	this.shape_126.setTransform(502.7,20.8);
	this.shape_126._off = true;

	var maskedShapeInstanceList = [this.shape_126];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_126).wait(37).to({_off:false},0).wait(29));

	// mask (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_39 = new cjs.Graphics().p("AerFSIAAnzIHzAAIAAH0g");
	var mask_10_graphics_40 = new cjs.Graphics().p("AerJlIAAwXIHzAAIAAQYg");
	var mask_10_graphics_41 = new cjs.Graphics().p("AerNCIAA3PIHzAAIAAXQg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AerPpIAA8dIHzAAIAAcfg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AerRbMAAAggAIHzAAMAAAAgCg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AerSUMAAAgh4IHzAAMAAAAh6g");
	var mask_10_graphics_45 = new cjs.Graphics().p("AerRWMAAAggbIHzAVMAAAAgcg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AeqRWMAAAggUIH1AQMAAAAgWg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AeqRWMAAAggPIH1ANMAAAAgQg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AeqRWMAAAggKIH1AKMAAAAgLg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AeqRWMAAAggFIH1AGMAAAAgHg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AeqRWMAAAggCIH1AEMAAAAgEg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AeqRWIAA//IH1ACMAAAAgBg");
	var mask_10_graphics_52 = new cjs.Graphics().p("AeqRWIAA/9IH1ABIAAf/g");
	var mask_10_graphics_53 = new cjs.Graphics().p("AeqRWIAA/8IH1AAIAAf+g");
	var mask_10_graphics_54 = new cjs.Graphics().p("AeqRWIAA/8IH1AAIAAf+g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_10_graphics_39,x:246.3,y:33.9}).wait(1).to({graphics:mask_10_graphics_40,x:246.3,y:61.4}).wait(1).to({graphics:mask_10_graphics_41,x:246.3,y:83.5}).wait(1).to({graphics:mask_10_graphics_42,x:246.3,y:100.3}).wait(1).to({graphics:mask_10_graphics_43,x:246.3,y:111.7}).wait(1).to({graphics:mask_10_graphics_44,x:246.3,y:117.4}).wait(1).to({graphics:mask_10_graphics_45,x:246.3,y:113.2}).wait(1).to({graphics:mask_10_graphics_46,x:246.3,y:112.8}).wait(1).to({graphics:mask_10_graphics_47,x:246.3,y:112.4}).wait(1).to({graphics:mask_10_graphics_48,x:246.3,y:112.1}).wait(1).to({graphics:mask_10_graphics_49,x:246.3,y:111.8}).wait(1).to({graphics:mask_10_graphics_50,x:246.3,y:111.6}).wait(1).to({graphics:mask_10_graphics_51,x:246.3,y:111.4}).wait(1).to({graphics:mask_10_graphics_52,x:246.3,y:111.3}).wait(1).to({graphics:mask_10_graphics_53,x:246.3,y:111.2}).wait(1).to({graphics:mask_10_graphics_54,x:246.3,y:111.2}).wait(12));

	// F_shapemain
	this.instance_4 = new lib.E_shape_main("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(467.7,117.6,1,0.957,0,0,0,20,114.7);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(27));

	// mask (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_42 = new cjs.Graphics().p("EAhTAKrIAAn0IFMAAIAAH1g");
	var mask_11_graphics_43 = new cjs.Graphics().p("EAgeAKrIAAn0IIHAAIAAH1g");
	var mask_11_graphics_44 = new cjs.Graphics().p("Af/KrIAAn0IJ2AAIAAH1g");
	var mask_11_graphics_45 = new cjs.Graphics().p("Af0KrIAAn0IKbAAIAAH1g");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(42).to({graphics:mask_11_graphics_42,x:246.3,y:68.4}).wait(1).to({graphics:mask_11_graphics_43,x:259.7,y:68.4}).wait(1).to({graphics:mask_11_graphics_44,x:267.7,y:68.4}).wait(1).to({graphics:mask_11_graphics_45,x:270.3,y:68.4}).wait(21));

	// F_shapemiddle
	this.instance_5 = new lib.E_shape_middle();
	this.instance_5.parent = this;
	this.instance_5.setTransform(503.1,111.7,0.994,1.014,0,0,0,37.6,19.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).wait(24));

	// L_shapelower
	this.instance_6 = new lib.L_shape_lower();
	this.instance_6.parent = this;
	this.instance_6.setTransform(627.7,219.1,1.005,1,0,0,5.6,44,20);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(1).to({regX:44.1,regY:20.1,scaleX:1.22,skewY:5.1,x:637.4,y:217.7},0).wait(1).to({scaleX:1.24,skewY:4.3,x:638.1,y:215.5},0).to({regX:44,scaleX:1.24,skewY:2.7,x:637.9,y:206.5},11,cjs.Ease.get(1)).wait(9));

	// mask (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_40 = new cjs.Graphics().p("EApKAD6IAAnzIH1AAIAAHzg");
	var mask_12_graphics_41 = new cjs.Graphics().p("EApKAIRIAAwiIH1AAIAAQjg");
	var mask_12_graphics_42 = new cjs.Graphics().p("EApKAMnIAA5PIH1AAIAAZRg");
	var mask_12_graphics_43 = new cjs.Graphics().p("EApKAQ+MAAAgh9IH1AAMAAAAh/g");
	var mask_12_graphics_44 = new cjs.Graphics().p("EApKAUOMAAAgodIH1AAMAAAAofg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_12_graphics_40,x:313.5,y:-13}).wait(1).to({graphics:mask_12_graphics_41,x:313.5,y:14.9}).wait(1).to({graphics:mask_12_graphics_42,x:313.5,y:42.8}).wait(1).to({graphics:mask_12_graphics_43,x:313.5,y:70.8}).wait(1).to({graphics:mask_12_graphics_44,x:313.5,y:91.6}).wait(22));

	// L_shapemain
	this.instance_7 = new lib.E_shape_main("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(603.7,117.1,1,1.014,0,180,-180,20,114.6);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).wait(26));

	// mask (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_45 = new cjs.Graphics().p("EAz3ATHIAAtvIH1AeIAANvg");
	var mask_13_graphics_46 = new cjs.Graphics().p("EAz3AThIAA+fIH1AIIAAegg");
	var mask_13_graphics_47 = new cjs.Graphics().p("EAz3ATmMAAAgmSIH1AAMAAAAmVg");
	var mask_13_graphics_48 = new cjs.Graphics().p("EAz3ATmMAAAgnNIH1AAMAAAAnPg");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:null,x:0,y:0}).wait(45).to({graphics:mask_13_graphics_45,x:382,y:125.3}).wait(1).to({graphics:mask_13_graphics_46,x:382,y:125.8}).wait(1).to({graphics:mask_13_graphics_47,x:382,y:125.7}).wait(1).to({graphics:mask_13_graphics_48,x:382,y:125.6}).wait(18));

	// I_shapemain
	this.instance_8 = new lib.I_shape_main();
	this.instance_8.parent = this;
	this.instance_8.setTransform(742.7,114.9,1.005,1,0,0,5.7,20,133.3);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(45).to({_off:false},0).to({scaleX:1,skewY:4.3,y:98.4},12,cjs.Ease.get(1)).wait(9));

	// mask (mask)
	var mask_14 = new cjs.Shape();
	mask_14._off = true;
	var mask_14_graphics_46 = new cjs.Graphics().p("EA3AAUXIC4nRIHRC5Ii5HRg");
	var mask_14_graphics_47 = new cjs.Graphics().p("EA1jAUaIFyulIHWC1IlyOlg");
	var mask_14_graphics_48 = new cjs.Graphics().p("EA0HAUdIIr14IHaCwIorV5g");
	var mask_14_graphics_49 = new cjs.Graphics().p("EAysAUgILj9LIHfCsIrjdNg");
	var mask_14_graphics_50 = new cjs.Graphics().p("EAxDAVZMAOMgjyIIBBfMgONAj1g");
	var mask_14_graphics_51 = new cjs.Graphics().p("EAwBAWDMAQAgoTIIQAoMgQAAoVg");
	var mask_14_graphics_52 = new cjs.Graphics().p("EAvhAWTMAQ+gqsIIXAIMgQ/Aqvg");
	var mask_14_graphics_53 = new cjs.Graphics().p("EAu3AW7MASSguBIIXAJMgSTAuEg");

	this.timeline.addTween(cjs.Tween.get(mask_14).to({graphics:null,x:0,y:0}).wait(46).to({graphics:mask_14_graphics_46,x:416.9,y:148.8}).wait(1).to({graphics:mask_14_graphics_47,x:426.7,y:148.7}).wait(1).to({graphics:mask_14_graphics_48,x:436.4,y:148.6}).wait(1).to({graphics:mask_14_graphics_49,x:446.2,y:148.6}).wait(1).to({graphics:mask_14_graphics_50,x:456,y:146.7}).wait(1).to({graphics:mask_14_graphics_51,x:462.5,y:145.3}).wait(1).to({graphics:mask_14_graphics_52,x:466.2,y:143.8}).wait(1).to({graphics:mask_14_graphics_53,x:470.4,y:139.8}).wait(13));

	// X_shape_01
	this.instance_9 = new lib.X_shape_01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(857.6,134.7,1,1,0,0,0,72.2,120);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_14;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({_off:false},0).to({x:862.6,y:121.2},11,cjs.Ease.get(1)).wait(9));

	// mask (mask)
	var mask_15 = new cjs.Shape();
	mask_15._off = true;
	var mask_15_graphics_48 = new cjs.Graphics().p("EA4QgCTIHVitICtHVInVCsg");
	var mask_15_graphics_49 = new cjs.Graphics().p("EA3FgFfIHVitIFENtInWCsg");
	var mask_15_graphics_50 = new cjs.Graphics().p("EA2HgIKIHVisIHBTCInWCrg");
	var mask_15_graphics_51 = new cjs.Graphics().p("EA1UgKSIHVitIIlXTInVCsg");
	var mask_15_graphics_52 = new cjs.Graphics().p("EA0AgNhIH4hwIKoc1In5Bug");
	var mask_15_graphics_53 = new cjs.Graphics().p("EAzAgQOIIPg4MAMSAhXIoQA2g");
	var mask_15_graphics_54 = new cjs.Graphics().p("EAyRgSVIIcgLMANlAk4IocAJg");
	var mask_15_graphics_55 = new cjs.Graphics().p("EBARATgMgOfgnXIIjAWMAOgAnZg");
	var mask_15_graphics_56 = new cjs.Graphics().p("EBAjAUGMgPDgo4IImArMAPEAo6g");
	var mask_15_graphics_57 = new cjs.Graphics().p("EBApAUSMgPPgpYIInAyMAPQApbg");

	this.timeline.addTween(cjs.Tween.get(mask_15).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_15_graphics_48,x:424.2,y:4.2}).wait(1).to({graphics:mask_15_graphics_49,x:431.8,y:24.7}).wait(1).to({graphics:mask_15_graphics_50,x:438.1,y:41.8}).wait(1).to({graphics:mask_15_graphics_51,x:443,y:55.2}).wait(1).to({graphics:mask_15_graphics_52,x:451.2,y:74.7}).wait(1).to({graphics:mask_15_graphics_53,x:457.7,y:90.6}).wait(1).to({graphics:mask_15_graphics_54,x:462.6,y:103}).wait(1).to({graphics:mask_15_graphics_55,x:466.1,y:112}).wait(1).to({graphics:mask_15_graphics_56,x:468.2,y:117.3}).wait(1).to({graphics:mask_15_graphics_57,x:468.9,y:119.3}).wait(9));

	// X_shape_02
	this.instance_10 = new lib.X_shape_02("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(865,127.4,1,1,0,0,0,70.7,126.2);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_15;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(48).to({_off:false},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = null;
p.frameBounds = [rect, new cjs.Rectangle(0,187.8,45.3,46.8), new cjs.Rectangle(0,103.4,45.3,131.2), new cjs.Rectangle(0,36.7,45.3,197.9), new cjs.Rectangle(0,1.5,54.3,233.1), new cjs.Rectangle(0,1.5,67.6,233.1), new cjs.Rectangle(0,1.5,82.8,233.1), new cjs.Rectangle(0,1.5,99.7,233.1), new cjs.Rectangle(0,1.5,118.5,233.1), rect=new cjs.Rectangle(0,1.5,127.3,234.1), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,1.5,127.1,234.2), new cjs.Rectangle(0,1.5,127.2,235), new cjs.Rectangle(0,1.5,127.2,235.9), new cjs.Rectangle(0,1.5,127.2,236.7), new cjs.Rectangle(0,1.5,127.3,237.6), new cjs.Rectangle(0,1.5,274.3,238.4), new cjs.Rectangle(0,1.5,274.3,239.2), new cjs.Rectangle(0,1.5,274.4,240), new cjs.Rectangle(0,1.5,274.4,240.8), new cjs.Rectangle(0,0.8,274.4,242.2), new cjs.Rectangle(0,0.8,339.1,243), new cjs.Rectangle(0,0.8,452.5,243.6), new cjs.Rectangle(0,0.8,491.1,244.3), new cjs.Rectangle(0,0.8,529.7,244.9), new cjs.Rectangle(0,0.6,623.7,245.8), new cjs.Rectangle(0,0.6,623.7,246.3), new cjs.Rectangle(0,0.6,623.7,246.9), new cjs.Rectangle(0,0.6,623.7,247.5), new cjs.Rectangle(0,0.6,670.7,248), new cjs.Rectangle(0,0.6,762.7,249.8), new cjs.Rectangle(0,0.6,833.8,254.1), new cjs.Rectangle(0,0.6,859.5,251.7), new cjs.Rectangle(0,0.1,885.2,250.3), new cjs.Rectangle(0,0.1,892.4,250.7), new cjs.Rectangle(0,0.1,912.8,251.1), new cjs.Rectangle(0,0.1,926.5,251.4), new cjs.Rectangle(0,0.1,932.4,251.7), new cjs.Rectangle(0,0.1,934.2,252), new cjs.Rectangle(0,0.1,934.5,252.3), new cjs.Rectangle(0,0.1,934.9,253.6), rect=new cjs.Rectangle(0,0.1,935.8,253.6), rect, rect, rect, rect, rect, rect=new cjs.Rectangle(0,0.1,935.8,253.7), rect, rect=new cjs.Rectangle(0,0.1,935.8,253.8), rect];


(lib.netflix_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_65 = function() {
		this.stop();
		this.dispatchEvent('complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(65).call(this.frame_65).wait(1));

	// logo_01
	this.instance = new lib.netflix_logo_full("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(884.5,270,1,1,0,0,0,480,270);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({startPosition:25},0).wait(1).to({regX:467.9,regY:127.3,x:870.5,y:127.3,startPosition:26},0).wait(1).to({x:867.3,startPosition:27},0).wait(1).to({x:862.7,startPosition:28},0).wait(1).to({x:856.7,startPosition:29},0).wait(1).to({x:849.2,startPosition:30},0).wait(1).to({x:839.9,startPosition:31},0).wait(1).to({x:828.8,startPosition:32},0).wait(1).to({x:815.8,startPosition:33},0).wait(1).to({x:800.9,startPosition:34},0).wait(1).to({x:783.9,startPosition:35},0).wait(1).to({x:765,startPosition:36},0).wait(1).to({x:744.3,startPosition:37},0).wait(1).to({x:722.1,startPosition:38},0).wait(1).to({x:698.7,startPosition:39},0).wait(1).to({x:674.8,startPosition:40},0).wait(1).to({x:650.7,startPosition:41},0).wait(1).to({x:627.2,startPosition:42},0).wait(1).to({x:604.8,startPosition:43},0).wait(1).to({x:583.7,startPosition:44},0).wait(1).to({x:564.3,startPosition:45},0).wait(1).to({x:546.8,startPosition:46},0).wait(1).to({x:531.2,startPosition:47},0).wait(1).to({x:517.6,startPosition:48},0).wait(1).to({x:505.7,startPosition:49},0).wait(1).to({x:495.7,startPosition:50},0).wait(1).to({x:487.3,startPosition:51},0).wait(1).to({x:480.4,startPosition:52},0).wait(1).to({x:474.9,startPosition:53},0).wait(1).to({x:470.8,startPosition:54},0).wait(1).to({regX:480,regY:270,x:480,y:270,startPosition:55},0).wait(11));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EhJHAT2MAAAgnrMCSPAAAMAAAAnrg");
	this.shape.setTransform(468,127);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,936,254);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(0,0,936,254.6), rect=new cjs.Rectangle(0,0,936,254), rect, rect, rect, rect, new cjs.Rectangle(0,0,944.9,254), new cjs.Rectangle(0,0,941.2,254), new cjs.Rectangle(0,0,937.4,254), rect=new cjs.Rectangle(0,0,936,254), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// netflix_ribbon
	this.instance = new lib.netflix_n();
	this.instance.parent = this;
	this.instance.setTransform(63.6,117,1,1,0,0,0,63.6,117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// netflix_logo
	this.instance_1 = new lib.netflix_logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(644.5,135,1,1,0,0,0,644.5,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(468,127,936,254);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	width: 936,
	height: 254,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(createjs.logoLib = createjs.logoLib||{}, createjs.logoImages = createjs.logoImages||{}, createjs = createjs||{});
