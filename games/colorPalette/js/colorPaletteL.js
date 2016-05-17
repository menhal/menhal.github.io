(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 24,
	color: "#6699CC",
	manifest: []
};



// symbols:



(lib.stageBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ready:0,stage1:6,stage2:27,stage3:48});

	// timeline functions:
	this.frame_25 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(21).call(this.frame_46).wait(21).call(this.frame_67).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkIEuIgKgSIguiZIgHgJIiLAAIgEAHIgEAJIgmCKQgFALgGADIgQADQgPAAgGgLQgHgLAAgPIAAgGIABgEICDnEQAHgMAEgRIAIghIAMgcQAIgLAPAAIATACQAIACADAMICEIgIAAAJIAAALIgFAZQgFAKgSAAQgLAAgGgGgAlSA1Igsi+QAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgGAAgCAHIgFALIguCfIAAAEIABAHIAIAEIBhAAgAufEuIgHgNIgCgRIAYnRIgBgeIAAgGIgIgIIiUAIIgYgDQgNgDAAgRQAAgJAGgIIAPgMIASgHIAPgDIGRgPIAKAKIAGANIgDAHIgPAUIgGAEIi4APIgoIRQAAAGgLAFIgPAEQgMAAgGgFgA2mEiQgjgRgZgcQgYgcgPglQgOglAAgnIABgcIALgNIAPgDQAOAAAIAOIAPAiIAPAtQAHAYANAVQANAUAWAOQAUAOAgAAIAogFIAtgQQAXgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgngUgggXQgggagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAZgVAigKQAigKAmAAQAcAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgOAHIgNABQgOAAgKgLIgRgaIgSgwIgVgLIgZgFIgtAGQgWAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAVAbAiAVQAgAVAmAPQAmAQAhAVQAgAVAXAbQAVAcAAAqQAAAlgTAbQgTAcgfATQgdASgjAKQgiAJghAAQgoAAgigRgAJiEIIgLgDIgMgGIgLgKIgEgLIAAhVIA9mHQACgOAIgFIAVgFIAIABIAHAAIDPA+IAVALQALAIgBAMIgDAKIgIALIgKAIIgKACIiqgvIgFAAIgGgBIgOACQgHACADANIgXCaIgBAEIAAACIABABIDuAOQAKABAKAJQALALAAAJQAAAKgGAGIgNAKIgRAFIgQABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAxABQAwAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgbAKIhOAOIgOACgAAQEBQgcgGgagOQgZgPgTgYQgRgYgLgkIgBg6QgBg/AZhAQAQgsA0hMQAqg2A7gjQA8gjBFAAIA5AEQAZAFASAKIAmAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgKAGgLAAQgMAAgMgJIgbgWIgngVQgXgKggAAQgdAAgaAHQgbAGgYAOQgyAbgjArQgjAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAPAPQAQAOAWAIQAYAHAgAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgFAYQABAPAIAMQAJALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgFABIgDAAIgzAcIguATIgvANIg4AEgAW3DlQgLgFAAgGIAAhNIAulXIALgUQAJgLAKAAQAJAAAHAFIAJAOIAFAQIACAOIgBAGIAAAGIg2F+QgBALgIAHQgIAHgJAAg");
	this.shape.setTransform(454,156.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#184C7F").s().p("AseBNQlLggAAgtQAAgsFLgfQFMghHSAAQHTAAFMAhQFLAfAAAsQAAAtlLAgQlMAgnTAAQnSAAlMggg");
	this.shape_1.setTransform(455.9,303.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AkIEuIgKgSIguiZIgHgJIiLAAIgEAHIgEAJIgmCKQgFALgGADIgQADQgPAAgGgLQgHgLAAgPIAAgGIABgEICDnEQAHgMAEgRIAIghIAMgcQAIgLAPAAIATACQAIACADAMICEIgIAAAJIAAALIgFAZQgFAKgSAAQgLAAgGgGgAlSA1Igsi+QAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgGAAgCAHIgFALIguCfIAAAEIABAHIAIAEIBhAAgAufEuIgHgNIgCgRIAVlXIACiYIAAgGIgIgIIiUAIIgYgDQgNgDAAgRQAAgJAGgIIAPgMIASgHIAPgDIFsgQIAlABIAKAKIAGANIgDAHIgPAUIgGAEIi4APIgoIRQAAAGgLAFIgPAEQgMAAgGgFgA2mEiQgjgRgZgcQgYgcgPglQgOglAAgnIABgcIALgNIAPgDQAOAAAIAOIAPAiIAPAtQAHAYANAVQANAUAWAOQAUAOAgAAIAogFIAtgQQAXgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgngUgggXQgggagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAZgVAigKQAigKAmAAQAcAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgOAHIgNABQgOAAgKgLIgRgaIgSgwIgVgLIgZgFIgtAGQgWAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAVAbAiAVQAgAVAmAPQAmAQAhAVQAgAVAXAbQAVAcAAAqQAAAlgTAbQgTAcgfATQgdASgjAKQgiAJghAAQgoAAgigRgAJiEIIgLgDIgMgGIgLgKIgEgLIAAhVIA9mHQACgOAIgFIAVgFIAIABIAHAAIDPA+IAVALQALAIgBAMIgDAKIgIALIgKAIIgKACIiqgvIgFAAIgGgBIgOACQgHACADANIgXCaIgBAEIAAACIABABIDuAOQAKABAKAJQALALAAAJQAAAKgGAGIgNAKIgRAFIgQABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAxABQAwAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgbAKIhOAOIgOACgAAQEBQgcgGgagOQgZgPgTgYQgRgYgLgkIgBg6QgBg/AZhAQAQgsA0hMQAqg2A7gjQA8gjBFAAIA5AEQAZAFASAKIAmAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgKAGgLAAQgMAAgMgJIgbgWIgngVQgXgKggAAQgdAAgaAHQgbAGgYAOQgyAbgjArQgjAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAPAPQAQAOAWAIQAYAHAgAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgFAYQABAPAIAMQAJALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgFABIgDAAIgzAcIguATIgvANIg4AEgAW3DlQgLgFAAgGIAAhNIAulXIALgUQAJgLAKAAQAJAAAHAFIAJAOIAFAQIACAOIgBAGIAAAGIg2F+QgBALgIAHQgIAHgJAAg");
	this.shape_2.setTransform(454,224.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#184C7F").s().p("Ay4BNQn1ggAAgtQAAgsH1gfQH1ghLDAAQLDAAH2AhQH1AfAAAsQAAAtn1AgQn2AgrDAAQrDAAn1ggg");
	this.shape_3.setTransform(455.9,303.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AkIEuIgKgSIguiZIgHgJIiLAAIgEAHIgEAJIgmCKQgFALgGADIgQADQgPAAgGgLQgHgLAAgPIAAgGIABgEICDnEQAHgMAEgRIAIghIAMgcQAIgLAPAAIATACQAIACADAMICEIgIAAAJIAAALIgFAZQgFAKgSAAQgLAAgGgGgAlSA1Igsi+QAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQgGAAgCAHIgFALIguCfIAAAEIABAHIAIAEIBhAAgAufEuIgHgNIgCgRIAEh/IARjYIADiKIgBgOIAAgGIgIgIIiUAIIgYgDQgNgDAAgRQAAgJAGgIIAPgMIASgHIAPgDIFWgQIA7ABIAKAKIAGANIgDAHIgPAUIgGAEIi4APIgoIRQAAAGgLAFIgPAEQgMAAgGgFgA2mEiQgjgRgZgcQgYgcgPglQgOglAAgnIABgcIALgNIAPgDQAOAAAIAOIAPAiIAPAtQAHAYANAVQANAUAWAOQAUAOAgAAIAogFIAtgQQAXgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgngUgggXQgggagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAZgVAigKQAigKAmAAQAcAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgOAHIgNABQgOAAgKgLIgRgaIgSgwIgVgLIgZgFIgtAGQgWAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAVAbAiAVQAgAVAmAPQAmAQAhAVQAgAVAXAbQAVAcAAAqQAAAlgTAbQgTAcgfATQgdASgjAKQgiAJghAAQgoAAgigRgAJiEIIgLgDIgMgGIgLgKIgEgLIAAhVIA9mHQACgOAIgFIAVgFIAIABIAHAAIDPA+IAVALQALAIgBAMIgDAKIgIALIgKAIIgKACIiqgvIgFAAIgGgBIgOACQgHACADANIgXCaIgBAEIAAACIABABIDuAOQAKABAKAJQALALAAAJQAAAKgGAGIgNAKIgRAFIgQABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAxABQAwAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgbAKIhOAOIgOACgAAQEBQgcgGgagOQgZgPgTgYQgRgYgLgkIgBg6QgBg/AZhAQAQgsA0hMQAqg2A7gjQA8gjBFAAIA5AEQAZAFASAKIAmAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgKAGgLAAQgMAAgMgJIgbgWIgngVQgXgKggAAQgdAAgaAHQgbAGgYAOQgyAbgjArQgjAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAPAPQAQAOAWAIQAYAHAgAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgFAYQABAPAIAMQAJALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgFABIgDAAIgzAcIguATIgvANIg4AEgAW3DlQgLgFAAgGIAAhNIAulXIALgUQAJgLAKAAQAJAAAHAFIAJAOIAFAQIACAOIgBAGIAAAGIg2F+QgBALgIAHQgIAHgJAAg");
	this.shape_4.setTransform(454,244.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#184C7F").s().p("Ay4BpQn1gsAAg9QAAg8H1grQH1gtLDAAQLEAAH1AtQH1ArAAA8QAAA9n1AsQn1AsrEAAQrDAAn1gsg");
	this.shape_5.setTransform(453.9,303.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#184C7F").s().p("AvyBNQmjggAAgtQAAgsGjgfQGjghJPAAQJQAAGjAhQGjAfAAAsQAAAtmjAgQmjAgpQAAQpPAAmjggg");
	this.shape_6.setTransform(455.9,303.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AljEuIgLgSIguiZIgHgJIiLAAIgDAHIgFAJIgmCKQgFALgGADIgPADQgPAAgHgLQgGgLAAgPIAAgGIABgEICCnEQAIgMADgRIAJghIAMgcQAHgLAPAAIATACQAIACAEAMICDIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmuA1Igsi+QAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAv6EuIgIgNIgCgRIAEh/IARjYIACiYIAAgGIgHgIIiVAIIgYgDQgMgDAAgRQAAgJAFgIIAPgMIASgHIAQgDIFrgQIAlABIAKAKIAGANIgDAHIgPAUIgFAEIi5APIgnIRQgBAGgKAFIgQAEQgMAAgFgFgA4CEiQgjgRgZgcQgYgcgPglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAQAiIAOAtQAIAYANAVQANAUAVAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgmgUgggXQghgagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAagVAhgKQAigKAnAAQAbAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgNAHIgOABQgOAAgKgLIgQgaIgSgwIgWgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAWAbAhAVQAgAVAmAPQAmAQAhAVQAhAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgeATQgeASgiAKQgjAJghAAQgoAAgigRgAIGEIIgKgDIgNgGIgLgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQALAIAAAMIgDAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgQAFIgRABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgaAKIhPAOIgNACgAhJEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A7gjQA6gjBFAAIA6AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgMAAQgLAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgbAHQgaAGgZAOQgvAbgkArQglAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAQAPQAPAOAYAIQAYAHAgAAQA3AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgEAAIgzAcIguATIgvANIg2AEgAVWD8QgJgIAAgHIABgIIAEgLIANgYIAAABIC5jzIgHAAIABgNQAAgTgIgMIgUgWIgcgOIhQgfQgWgLAAgVQAAgGAKgGIAQgKIA8ASQAhALAcASQAdARAUAYQATAZAAAfQAAAdgQAcIh4CoIAAAYICTgIQAKAAAJAHQAKAHAAALQAAAIgKAHIgUAKIjAAdIgGABIgFABIABAAIgYAHIgEABIgJABQgHAAgJgKg");
	this.shape_7.setTransform(461.4,156.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AljEuIgLgSIguiZIgHgJIiLAAIgEAHIgFAJIglCKQgFALgGADIgQADQgOAAgHgLQgGgLgBgPIAAgGIABgEICDnEQAHgMAEgRIAIghIAMgcQAIgLAPAAIATACQAIACADAMICEIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmuA1Igsi+QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAv7EuIgHgNIgCgRIAUlXIADiYIAAgGIgHgIIiVAIIgYgDQgNgDAAgRQAAgJAGgIIAPgMIASgHIAPgDIFsgQIAlABIAKAKIAGANIgDAHIgPAUIgFAEIi6APIgnIRQAAAGgKAFIgQAEQgMAAgGgFgA4DEiQgigRgZgcQgYgcgPglQgOglAAgnIABgcIALgNIAPgDQAOAAAIAOIAPAiIAPAtQAHAYANAVQANAUAWAOQAUAOAgAAIAogFIAtgQQAXgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgngUgfgXQghgagWgiQgVgigBgwQAAgpAPgeQAPgeAZgUQAZgVAigKQAigKAmAAQAbAAAYAKQAXAKASATQASASAKAYQALAYAAAbIAAAXIgOAHIgNABQgOAAgKgLIgRgaIgSgwIgVgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAVAbAiAVQAgAVAmAPQAmAQAgAVQAiAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgfATQgdASgjAKQgiAJghAAQgoAAgjgRgAIGEIIgKgDIgNgGIgLgKIgEgLIAAhVIA+mHQACgOAIgFIAUgFIAIABIAHAAIDQA+IAUALQALAIAAAMIgDAKIgIALIgKAIIgKACIiqgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDvAOQAJABALAJQAKALAAAJQABAKgHAGIgMAKIgRAFIgRABIjNgJIgFAAIgJAAIgJACIgFAGIgOBsIAAAXQgBAFAIACIAxABQAvAAAsgIQAugJAuAAQAOAAAIAIQAJAGAAAPQgBAQgNAIIgaAKIhOAOIgOACgAhJEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AZhAQAQgsAzhMQAsg2A8gjQA5gjBGAAIA5AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgLAAQgMAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgaAHQgbAGgZAOQgvAbgkArQglAqgVA2QgUAzAAA2QgBAhAJAYQAHAXAQAPQAPAOAYAIQAYAHAgAAQA3AAAxgUQAwgUArglIAAgCIABgCQAAgHgJgDIgXgGIgWgLQgKgHABgQIAAgNQAAgKAIAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgEAVQgGAKgNAAIgQgFIgZgXIgNgFIgFABIgEAAIgyAcIguATIgvANIg3AEgAVWD8QgJgIAAgHIACgIIAEgLIAMgYIAAABIC5jzIgHAAIABgNQAAgTgIgMIgUgWIgcgOIhQgfQgWgLABgVQAAgGAJgGIARgKIA7ASQAhALAcASQAdARAUAYQATAZABAfQAAAdgRAcIh3CoIAAAYICTgIQAKAAAIAHQALAHgBALQAAAIgKAHIgTAKIjBAdIgGABIgFABIABAAIgXAHIgFABIgJABQgHAAgJgKg");
	this.shape_8.setTransform(464.5,224.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AljEuIgLgSIguiZIgHgJIiLAAIgDAHIgFAJIgmCKQgFALgGADIgPADQgPAAgHgLQgGgLAAgPIAAgGIABgEICCnEQAIgMADgRIAJghIAMgcQAHgLAPAAIATACQAIACAEAMICDIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmuA1Igsi+QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAv6EuIgIgNIgCgRIAEh/IARjYIADiKIgBgOIAAgGIgHgIIiVAIIgYgDQgMgDAAgRQAAgJAFgIIAPgMIASgHIAQgDIFVgQIA7ABIAKAKIAGANIgDAHIgPAUIgFAEIi5APIgnIRQgBAGgKAFIgQAEQgMAAgFgFgA4CEiQgjgRgZgcQgYgcgPglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAQAiIAOAtQAIAYANAVQANAUAVAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgmgUgggXQghgagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAagVAhgKQAigKAnAAQAbAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgNAHIgOABQgOAAgKgLIgQgaIgSgwIgWgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAWAbAhAVQAgAVAmAPQAmAQAhAVQAhAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgeATQgeASgiAKQgjAJghAAQgoAAgigRgAIGEIIgKgDIgNgGIgLgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQALAIAAAMIgDAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgQAFIgRABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgaAKIhPAOIgNACgAhJEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A7gjQA6gjBFAAIA6AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgMAAQgLAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgbAHQgaAGgZAOQgvAbgkArQglAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAQAPQAPAOAYAIQAYAHAgAAQA3AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgEAAIgzAcIguATIgvANIg2AEgAVWD8QgJgIAAgHIABgIIAEgLIANgYIAAABIC5jzIgHAAIABgNQAAgTgIgMIgUgWIgcgOIhQgfQgWgLAAgVQAAgGAKgGIAQgKIA8ASQAhALAcASQAdARAUAYQATAZAAAfQAAAdgQAcIh4CoIAAAYICTgIQAKAAAJAHQAKAHAAALQAAAIgKAHIgUAKIgNADIizAaIgGABIgFABIABAAIgYAHIgEABIgJABQgHAAgJgKg");
	this.shape_9.setTransform(461.4,244.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AljEuIgLgSIgviZIgGgJIiLAAIgDAHIgGAJIglCKQgFALgGADIgQADQgOAAgHgLQgGgLgBgPIAAgGIABgEICDnEQAHgMAEgRIAJghIALgcQAIgLAPAAIATACQAIACADAMICEIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmuA1Igsi+QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAv7EuIgHgNIgCgRIAUlXIADiYIAAgGIgHgIIiVAIIgYgDQgNgDAAgRQABgJAFgIIAOgMIATgHIAPgDIFsgQIAlABIAKAKIAFANIgCAHIgPAUIgFAEIi6APIgmIRQgCAGgJAFIgQAEQgMAAgGgFgA4DEiQgigRgZgcQgZgcgOglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAPAiIAPAtQAHAYAOAVQAMAUAWAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUghgSIhGglQgngUgfgXQghgagWgiQgVgigBgwQAAgpAPgeQAPgeAZgUQAagVAhgKQAigKAmAAQAbAAAYAKQAXAKASATQASASAKAYQALAYgBAbIAAAXIgNAHIgOABQgNAAgKgLIgRgaIgSgwIgVgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAVAbAiAVQAgAVAmAPQAmAQAgAVQAiAVAVAbQAWAcAAAqQAAAlgTAbQgUAcgeATQgdASgjAKQgiAJghAAQgoAAgjgRgAIGEIIgKgDIgOgGIgKgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQAKAIAAAMIgCAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgHACADANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgRAFIgQABIjOgJIgFAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgbAKIhOAOIgNACgAhKEBQgegGgZgOQgbgPgSgYQgRgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A7gjQA5gjBGAAIA5AEQAYAFAUAKIAlAZIAnApIAFAHIADAIIAAAEQAAAOgKAHQgKAGgLAAQgMAAgMgJIgbgWIgmgVQgYgKggAAQgcAAgbAHQgbAGgYAOQgvAbglArQgkAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAPAPQAQAOAYAIQAXAHAhAAQA3AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgFAYQAAAPAJAMQAJALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgFAAIgyAcIguATIgvANIg2AEgAVWD8QgJgIAAgHIABgIIAFgLIAMgYIAAABIC5jzIgHAAIABgNQABgTgJgMIgUgWIgcgOIhQgfQgVgLAAgVQAAgGAJgGIARgKIA7ASQAhALAcASQAdARAUAYQATAZABAfQgBAdgQAcIh4CoIAAAYICUgIQAKAAAJAHQAKAHgBALQAAAIgKAHIgTAKIjBAdIgGABIgFABIABAAIgXAHIgFABIgJABQgHAAgJgKg");
	this.shape_10.setTransform(463.5,224.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AlMEuIgLgSIguiZIgHgJIiLAAIgDAHIgFAJIgmCKQgFALgGADIgPADQgPAAgHgLQgGgLAAgPIAAgGIABgEICCnEQAIgMADgRIAJghIAMgcQAHgLAPAAIATACQAIACAEAMICDIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmXA1Igsi+QAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAvjEuIgIgNIgCgRIAEh/IARjYIAEh6IgCgeIAAgGIgHgIIiVAIIgYgDQgMgDAAgRQAAgJAFgIIAPgMIASgHIAQgDID9gPICTAAIAKAKIAGANIgDAHIgPAUIgFAEIi5APIgnIRQgBAGgKAFIgQAEQgMAAgFgFgA3rEiQgjgRgZgcQgYgcgPglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAQAiIAOAtQAIAYANAVQANAUAVAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgmgUgggXQghgagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAagVAhgKQAigKAnAAQAbAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgNAHIgOABQgOAAgKgLIgQgaIgSgwIgWgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAWAbAhAVQAgAVAmAPQAmAQAhAVQAhAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgeATQgeASgiAKQgjAJghAAQgoAAgigRgAIdEIIgKgDIgNgGIgLgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQALAIAAAMIgDAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgQAFIgRABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgaAKIhPAOIgNACgAVFD+QgGgIAAgOIAAgOQAAgJAHgCICEgmIAXgNQAMgJAEgJQADgIgGgJIgUgPIg8gdIgYgPQgKgKAAgKQAAgUAYgRIBrhPQAZgXAAgfQAAgJgHgHIgOgLIgSgIIgQgEIhsgHQgLgGgDgGIgCgPQAAgPAIgHIAVgKIAZgDIAXAAIA0AFQAdAGAaAMQAbANASAUQASAVAAAfQAAAYgNAXIgfAtIhHBDIAwAxQAWAaAAAlQAAAfgaAXQgaAXgiAPQgjAOgkAHIg5AHQgOAAgGgJgAgyEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A5gjQA8gjBFAAIA6AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgMAAQgLAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgbAHQgaAGgZAOQgvAbgkArQglAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAQAPQAPAOAYAIQAYAHAeAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgEAAIgzAcIguATIgvANIg4AEg");
	this.shape_11.setTransform(456.6,156.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AlMEuIgLgSIguiZIgHgJIiLAAIgDAHIgFAJIgmCKQgFALgGADIgPADQgPAAgHgLQgGgLAAgPIAAgGIABgEICCnEQAIgMADgRIAJghIAMgcQAHgLAPAAIATACQAIACAEAMICDIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmXA1Igsi+QAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAvjEuIgIgNIgCgRIAVlXIACiYIAAgGIgHgIIiVAIIgYgDQgMgDAAgRQAAgJAFgIIAPgMIASgHIAQgDIE0gQIBcABIAKAKIAGANIgDAHIgPAUIgFAEIi5APIgnIRQgBAGgKAFIgQAEQgMAAgFgFgA3rEiQgjgRgZgcQgYgcgPglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAQAiIAOAtQAIAYANAVQANAUAVAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgmgUgggXQghgagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAagVAhgKQAigKAnAAQAbAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgNAHIgOABQgOAAgKgLIgQgaIgSgwIgWgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAWAbAhAVQAgAVAmAPQAmAQAhAVQAhAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgeATQgeASgiAKQgjAJghAAQgoAAgigRgAIdEIIgKgDIgNgGIgLgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQALAIAAAMIgDAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgQAFIgRABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgaAKIhPAOIgNACgAVFD+QgGgIAAgOIAAgOQAAgJAHgCICEgmIAXgNQAMgJAEgJQADgIgGgJIgUgPIg8gdIgYgPQgKgKAAgKQAAgUAYgRIBrhPQAZgXAAgfQAAgJgHgHIgOgLIgSgIIgQgEIhsgHQgLgGgDgGIgCgPQAAgPAIgHIAVgKIAZgDIAXAAIA0AFQAdAGAaAMQAbANASAUQASAVAAAfQAAAYgNAXIgfAtIhHBDIAwAxQAWAaAAAlQAAAfgaAXQgaAXgiAPQgjAOgkAHIg5AHQgOAAgGgJgAgyEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A5gjQA8gjBFAAIA6AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgMAAQgLAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgbAHQgaAGgZAOQgvAbgkArQglAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAQAPQAPAOAYAIQAYAHAeAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgEAAIgzAcIguATIgvANIg4AEg");
	this.shape_12.setTransform(456.6,224.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlMEuIgLgSIguiZIgHgJIiLAAIgDAHIgFAJIgmCKQgFALgGADIgPADQgPAAgHgLQgGgLAAgPIAAgGIABgEICCnEQAIgMADgRIAJghIAMgcQAHgLAPAAIATACQAIACAEAMICDIgIAAAJIABALIgGAZQgFAKgSAAQgLAAgFgGgAmXA1Igsi+QAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAgBAAQgGAAgCAHIgEALIguCfIAAAEIABAHIAHAEIBhAAgAvjEuIgIgNIgCgRIAEh/IARjYIADiKIgBgOIAAgGIgHgIIiVAIIgYgDQgMgDAAgRQAAgJAFgIIAPgMIASgHIAQgDIFHgQIBJABIAKAKIAGANIgDAHIgPAUIgFAEIi5APIgnIRQgBAGgKAFIgQAEQgMAAgFgFgA3rEiQgjgRgZgcQgYgcgPglQgNglAAgnIABgcIAKgNIAQgDQANAAAIAOIAQAiIAOAtQAIAYANAVQANAUAVAOQAUAOAgAAIAogFIAugQQAWgKAPgQQAQgRAAgVQAAgagWgUQgWgUgggSIhHglQgmgUgggXQghgagWgiQgVgiAAgwQAAgpAOgeQAPgeAZgUQAagVAhgKQAigKAnAAQAbAAAXAKQAYAKARATQASASAKAYQALAYAAAbIAAAXIgNAHIgOABQgOAAgKgLIgQgaIgSgwIgWgLIgYgFIgtAGQgXAFgRALQgRAMgLATQgLASAAAZQAAAqAWAbQAWAbAhAVQAgAVAmAPQAmAQAhAVQAhAVAWAbQAVAcAAAqQAAAlgTAbQgTAcgeATQgeASgiAKQgjAJghAAQgoAAgigRgAIdEIIgKgDIgNgGIgLgKIgEgLIAAhVIA9mHQACgOAJgFIAUgFIAIABIAHAAIDPA+IAVALQALAIAAAMIgDAKIgIALIgKAIIgLACIipgvIgGAAIgGgBIgOACQgGACACANIgXCaIgBAEIAAACIABABIDuAOQAKABALAJQAKALAAAJQAAAKgGAGIgNAKIgQAFIgRABIjNgJIgGAAIgJAAIgJACIgEAGIgPBsIAAAXQAAAFAHACIAyABQAvAAAsgIQAtgJAvAAQANAAAJAIQAIAGAAAPQAAAQgNAIIgaAKIhPAOIgNACgAVFD+QgGgIAAgOIAAgOQAAgJAHgCICEgmIAXgNQAMgJAEgJQADgIgGgJIgUgPIg8gdIgYgPQgKgKAAgKQAAgUAYgRIBrhPQAZgXAAgfQAAgJgHgHIgOgLIgSgIIgQgEIhsgHQgLgGgDgGIgCgPQAAgPAIgHIAVgKIAZgDIAXAAIA0AFQAdAGAaAMQAbANASAUQASAVAAAfQAAAYgNAXIgfAtIhHBDIAwAxQAWAaAAAlQAAAfgaAXQgaAXgiAPQgjAOgkAHIg5AHQgOAAgGgJgAgyEBQgfgGgZgOQgagPgSgYQgSgYgKgkIgCg6QAAg/AYhAQARgsAzhMQAsg2A5gjQA8gjBFAAIA6AEQAYAFATAKIAlAZIAoApIAEAHIAEAIIAAAEQAAAOgLAHQgJAGgMAAQgLAAgMgJIgcgWIgmgVQgXgKghAAQgcAAgbAHQgaAGgZAOQgvAbgkArQglAqgVA2QgVAzAAA2QAAAhAIAYQAIAXAQAPQAPAOAYAIQAYAHAeAAQA5AAAwgUQAxgUArglIAAgCIABgCQAAgHgKgDIgWgGIgWgLQgKgHAAgQIAAgNQAAgKAJAAIDuAAQALAAADAKIACARIgCATQgDAMgLAAIhcAAIgHAFIgFANIgEAYQAAAPAJAMQAIALAAAQIgFAVQgFAKgOAAIgPgFIgZgXIgOgFIgEABIgEAAIgzAcIguATIgvANIg4AEg");
	this.shape_13.setTransform(456.6,244.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},6).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_6},{t:this.shape_2}]},2).to({state:[]},13).to({state:[{t:this.shape_1},{t:this.shape_7}]},1).to({state:[{t:this.shape_3},{t:this.shape_8}]},3).to({state:[{t:this.shape_5},{t:this.shape_9}]},2).to({state:[{t:this.shape_6},{t:this.shape_10}]},2).to({state:[]},13).to({state:[{t:this.shape_1},{t:this.shape_11}]},1).to({state:[{t:this.shape_3},{t:this.shape_12}]},3).to({state:[{t:this.shape_5},{t:this.shape_13}]},2).to({state:[{t:this.shape_6},{t:this.shape_12}]},2).to({state:[]},13).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#336699").s().p("EhGfAqFUgDCgniADCgrOUBEegCyBIIACyUAD0AnxgD0Aq/UhFsgEYhG6AEYg");
	this.shape_14.setTransform(451.3,260.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#336699").s().p("EhGTApZMAAAhSxUBAwABmBL3gBmMAAABSxg");
	this.shape_15.setTransform(450,264.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#336699").s().p("EhGTAoTUAGOgoKgGOgqmUBAJAI9BMegI9UgGoAsWAGoAmaUgjeACLgjIAAAUgjLAAAgi2gCLg");
	this.shape_16.setTransform(450,271.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#336699").s().p("EhGTAo7UADwgoxgDwgp/UBAJAFRBMegFRUgEKArvAEKAnBUgjeAA7gjIAAAUgjLAAAgi2gA7g");
	this.shape_17.setTransform(450,267.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},9).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_14}]},14).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_14}]},14).to({state:[{t:this.shape_15}]},3).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-8.9,921.9,538.8);


(lib.progressBar_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape.setTransform(20.4,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_1.setTransform(20.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_2.setTransform(20.4,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_3.setTransform(20.4,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_4.setTransform(20.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_5.setTransform(20.4,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_6.setTransform(20.4,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_7.setTransform(20.4,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_8.setTransform(20.4,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_9.setTransform(20.4,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_10.setTransform(20.4,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_11.setTransform(20.4,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_12.setTransform(20.4,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_13.setTransform(20.4,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_14.setTransform(20.4,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_15.setTransform(20.4,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_16.setTransform(20.4,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_17.setTransform(20.4,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_18.setTransform(20.4,17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_19.setTransform(20.4,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:20.4}},{t:this.shape,p:{x:20.4}}]},1).to({state:[{t:this.shape_3,p:{x:20.4}},{t:this.shape_2,p:{x:20.4}},{t:this.shape_1,p:{x:53.2}},{t:this.shape,p:{x:53.2}}]},1).to({state:[{t:this.shape_5,p:{x:20.4}},{t:this.shape_4,p:{x:20.4}},{t:this.shape_3,p:{x:53.2}},{t:this.shape_2,p:{x:53.2}},{t:this.shape_1,p:{x:86.1}},{t:this.shape,p:{x:86.1}}]},1).to({state:[{t:this.shape_7,p:{x:20.4}},{t:this.shape_6,p:{x:20.4}},{t:this.shape_5,p:{x:53.2}},{t:this.shape_4,p:{x:53.2}},{t:this.shape_3,p:{x:86.1}},{t:this.shape_2,p:{x:86.1}},{t:this.shape_1,p:{x:118.9}},{t:this.shape,p:{x:118.9}}]},1).to({state:[{t:this.shape_9,p:{x:20.4}},{t:this.shape_8,p:{x:20.4}},{t:this.shape_7,p:{x:53.2}},{t:this.shape_6,p:{x:53.2}},{t:this.shape_5,p:{x:86.1}},{t:this.shape_4,p:{x:86.1}},{t:this.shape_3,p:{x:118.9}},{t:this.shape_2,p:{x:118.9}},{t:this.shape_1,p:{x:151.8}},{t:this.shape,p:{x:151.8}}]},1).to({state:[{t:this.shape_11,p:{x:20.4}},{t:this.shape_10,p:{x:20.4}},{t:this.shape_9,p:{x:53.2}},{t:this.shape_8,p:{x:53.2}},{t:this.shape_7,p:{x:86.1}},{t:this.shape_6,p:{x:86.1}},{t:this.shape_5,p:{x:118.9}},{t:this.shape_4,p:{x:118.9}},{t:this.shape_3,p:{x:151.8}},{t:this.shape_2,p:{x:151.8}},{t:this.shape_1,p:{x:184.6}},{t:this.shape,p:{x:184.6}}]},1).to({state:[{t:this.shape_13,p:{x:20.4}},{t:this.shape_12,p:{x:20.4}},{t:this.shape_11,p:{x:53.2}},{t:this.shape_10,p:{x:53.2}},{t:this.shape_9,p:{x:86.1}},{t:this.shape_8,p:{x:86.1}},{t:this.shape_7,p:{x:118.9}},{t:this.shape_6,p:{x:118.9}},{t:this.shape_5,p:{x:151.8}},{t:this.shape_4,p:{x:151.8}},{t:this.shape_3,p:{x:184.6}},{t:this.shape_2,p:{x:184.6}},{t:this.shape_1,p:{x:217.4}},{t:this.shape,p:{x:217.4}}]},1).to({state:[{t:this.shape_15,p:{x:20.4}},{t:this.shape_14,p:{x:20.4}},{t:this.shape_13,p:{x:53.2}},{t:this.shape_12,p:{x:53.2}},{t:this.shape_11,p:{x:86.1}},{t:this.shape_10,p:{x:86.1}},{t:this.shape_9,p:{x:118.9}},{t:this.shape_8,p:{x:118.9}},{t:this.shape_7,p:{x:151.8}},{t:this.shape_6,p:{x:151.8}},{t:this.shape_5,p:{x:184.6}},{t:this.shape_4,p:{x:184.6}},{t:this.shape_3,p:{x:217.4}},{t:this.shape_2,p:{x:217.4}},{t:this.shape_1,p:{x:250.3}},{t:this.shape,p:{x:250.3}}]},1).to({state:[{t:this.shape_17,p:{x:20.4}},{t:this.shape_16,p:{x:20.4}},{t:this.shape_15,p:{x:53.2}},{t:this.shape_14,p:{x:53.2}},{t:this.shape_13,p:{x:86.1}},{t:this.shape_12,p:{x:86.1}},{t:this.shape_11,p:{x:118.9}},{t:this.shape_10,p:{x:118.9}},{t:this.shape_9,p:{x:151.8}},{t:this.shape_8,p:{x:151.8}},{t:this.shape_7,p:{x:184.6}},{t:this.shape_6,p:{x:184.6}},{t:this.shape_5,p:{x:217.4}},{t:this.shape_4,p:{x:217.4}},{t:this.shape_3,p:{x:250.3}},{t:this.shape_2,p:{x:250.3}},{t:this.shape_1,p:{x:283.1}},{t:this.shape,p:{x:283.1}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:53.2}},{t:this.shape_16,p:{x:53.2}},{t:this.shape_15,p:{x:86.1}},{t:this.shape_14,p:{x:86.1}},{t:this.shape_13,p:{x:118.9}},{t:this.shape_12,p:{x:118.9}},{t:this.shape_11,p:{x:151.8}},{t:this.shape_10,p:{x:151.8}},{t:this.shape_9,p:{x:184.6}},{t:this.shape_8,p:{x:184.6}},{t:this.shape_7,p:{x:217.4}},{t:this.shape_6,p:{x:217.4}},{t:this.shape_5,p:{x:250.3}},{t:this.shape_4,p:{x:250.3}},{t:this.shape_3,p:{x:283.1}},{t:this.shape_2,p:{x:283.1}},{t:this.shape_1,p:{x:315.9}},{t:this.shape,p:{x:315.9}}]},1).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_20.setTransform(20.4,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_21.setTransform(20.4,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_22.setTransform(315.9,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_23.setTransform(315.9,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_24.setTransform(283.1,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_25.setTransform(283.1,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_26.setTransform(250.3,17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_27.setTransform(250.3,17.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_28.setTransform(217.4,17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_29.setTransform(217.4,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_30.setTransform(184.6,17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_31.setTransform(184.6,17.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_32.setTransform(151.8,17.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_33.setTransform(151.8,17.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_34.setTransform(118.9,17.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_35.setTransform(118.9,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_36.setTransform(86.1,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_37.setTransform(86.1,17.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_38.setTransform(53.2,17.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_39.setTransform(53.2,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(11));

	// Layer 1
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003366").s().p("A39CqQg6AAgpgyQgpgygBhGQABhFApgyQApgyA6AAMAv8AAAQA5AAAqAyQApAygBBFQABBGgpAyQgqAyg5AAg");
	this.shape_40.setTransform(167.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,34.2);


(lib.progressBar_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape.setTransform(20.4,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_1.setTransform(20.4,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_2.setTransform(20.4,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_3.setTransform(20.4,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_4.setTransform(20.4,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_5.setTransform(20.4,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_6.setTransform(20.4,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_7.setTransform(20.4,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_8.setTransform(20.4,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_9.setTransform(20.4,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_10.setTransform(20.4,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_11.setTransform(20.4,17.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_12.setTransform(20.4,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_13.setTransform(20.4,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_14.setTransform(20.4,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_15.setTransform(20.4,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:20.4}},{t:this.shape,p:{x:20.4}}]},1).to({state:[{t:this.shape_3,p:{x:20.4}},{t:this.shape_2,p:{x:20.4}},{t:this.shape_1,p:{x:62.4}},{t:this.shape,p:{x:62.4}}]},1).to({state:[{t:this.shape_5,p:{x:20.4}},{t:this.shape_4,p:{x:20.4}},{t:this.shape_3,p:{x:62.4}},{t:this.shape_2,p:{x:62.4}},{t:this.shape_1,p:{x:104.3}},{t:this.shape,p:{x:104.3}}]},1).to({state:[{t:this.shape_7,p:{x:20.4}},{t:this.shape_6,p:{x:20.4}},{t:this.shape_5,p:{x:62.4}},{t:this.shape_4,p:{x:62.4}},{t:this.shape_3,p:{x:104.3}},{t:this.shape_2,p:{x:104.3}},{t:this.shape_1,p:{x:146.3}},{t:this.shape,p:{x:146.3}}]},1).to({state:[{t:this.shape_9,p:{x:20.4}},{t:this.shape_8,p:{x:20.4}},{t:this.shape_7,p:{x:62.4}},{t:this.shape_6,p:{x:62.4}},{t:this.shape_5,p:{x:104.3}},{t:this.shape_4,p:{x:104.3}},{t:this.shape_3,p:{x:146.3}},{t:this.shape_2,p:{x:146.3}},{t:this.shape_1,p:{x:188.2}},{t:this.shape,p:{x:188.2}}]},1).to({state:[{t:this.shape_11,p:{x:20.4}},{t:this.shape_10,p:{x:20.4}},{t:this.shape_9,p:{x:62.4}},{t:this.shape_8,p:{x:62.4}},{t:this.shape_7,p:{x:104.3}},{t:this.shape_6,p:{x:104.3}},{t:this.shape_5,p:{x:146.3}},{t:this.shape_4,p:{x:146.3}},{t:this.shape_3,p:{x:188.2}},{t:this.shape_2,p:{x:188.2}},{t:this.shape_1,p:{x:230.2}},{t:this.shape,p:{x:230.2}}]},1).to({state:[{t:this.shape_13,p:{x:20.4}},{t:this.shape_12,p:{x:20.4}},{t:this.shape_11,p:{x:62.4}},{t:this.shape_10,p:{x:62.4}},{t:this.shape_9,p:{x:104.3}},{t:this.shape_8,p:{x:104.3}},{t:this.shape_7,p:{x:146.3}},{t:this.shape_6,p:{x:146.3}},{t:this.shape_5,p:{x:188.2}},{t:this.shape_4,p:{x:188.2}},{t:this.shape_3,p:{x:230.2}},{t:this.shape_2,p:{x:230.2}},{t:this.shape_1,p:{x:272.1}},{t:this.shape,p:{x:272.1}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:62.4}},{t:this.shape_12,p:{x:62.4}},{t:this.shape_11,p:{x:104.3}},{t:this.shape_10,p:{x:104.3}},{t:this.shape_9,p:{x:146.3}},{t:this.shape_8,p:{x:146.3}},{t:this.shape_7,p:{x:188.2}},{t:this.shape_6,p:{x:188.2}},{t:this.shape_5,p:{x:230.2}},{t:this.shape_4,p:{x:230.2}},{t:this.shape_3,p:{x:272.1}},{t:this.shape_2,p:{x:272.1}},{t:this.shape_1,p:{x:314.3}},{t:this.shape,p:{x:314.3}}]},1).wait(1));

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_16.setTransform(20.4,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_17.setTransform(20.4,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_18.setTransform(314.3,17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_19.setTransform(314.3,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_20.setTransform(272.1,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_21.setTransform(272.1,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_22.setTransform(230.2,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_23.setTransform(230.2,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_24.setTransform(188.2,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_25.setTransform(188.2,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_26.setTransform(146.3,17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_27.setTransform(146.3,17.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_28.setTransform(104.3,17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_29.setTransform(104.3,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgoAAgegeQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAog");
	this.shape_30.setTransform(62.4,17.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgoAdgeQAegdAoAAQApAAAdAdQAeAeAAAoQAAApgeAdQgdAegpAAQgoAAgegeg");
	this.shape_31.setTransform(62.4,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(9));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003366").s().p("A39CqQg6AAgpgyQgpgygBhGQABhFApgyQApgyA6AAMAv8AAAQA5AAAqAyQApAygBBFQABBGgpAyQgqAyg5AAg");
	this.shape_32.setTransform(167.5,17.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,335,34.2);


(lib.palette = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEKBoQgNgEgJgIQgIgJgFgMQgGgNAAgRQAAgMAHgYQAFgPAMgNQALgOAPgIQAIgEAJgCQAJgBAKAAQAQAAANADQAOAEAKAJQAJAJAFANQAFAMABAPQgBAMgCANIhyAAIAAAJQAAAGACAFQABAGAFAEQAIAIASAAQAGAAAFgBIAJgGIAGgGIAFgHIArAAQgFANgHAJQgHAKgJAHQgKAHgNADQgNADgQABQgQgBgNgEgAEpgSQgGADgFAEQgFAEgEAGIgGAMIBHAAIgBgLQgBgGgDgEQgDgFgFgDQgHgCgIgBQgJABgIACgACYBpQgHgBgGgDQgGgEgDgFQgDgHgBgKIAUhfIgcAAIAHgdIAbAAIAKguIArAAIgKAuIAeAAIgGAdIgfAAIgRBSIACAGIADAEIAFACIAUgBIgHAgIgaACgAAbBoIAWhsQAAgGgGgEQgHgFgIAAQgJAAgIAEQgHADgEAHQgFAFgDAGIgFAQIgRBSIgrAAIAtjTIAoAAIgNBMIAAAAIAFgHIALgHIAOgFQAIgCALAAQAXAAALAKQAMAKAAAVIgBAGIgXBtgAiXBoIAiiZIArAAIgiCZgAkLBoIgFhrIAAAAIgxBrIgtAAIgRiZIAsAAIAGBrIAAAAIAwhrIArAAIAGBrIAAAAIAxhrIAtAAIhRCZgAhxhJIAIgiIArAAIgIAig");
	this.shape.setTransform(209.4,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ADoDzIAMhJIgdAFIgiAnIglgVICRikIAlAVIhPBZIAAABIBSgUIAuAaIhaARIgNBngABZCiQgNgDgNgIQgdgQgHgXQgEgLACgOQACgNAJgOQAJgSAOgMQAOgMAQgGIARgFQAJgBAJABQASABASALQAMAHAKAJQAJAJAEALQAGAKgBANQgBAMgIAOIglgVQAHgMgDgJQgDgJgMgHQgLgGgKABQgLACgJAGQgJAGgIAJQgIAJgFAIIgFANQgCAFABAGQABAGAEAFQADAFAHAEQAHAEAFAAQAGABAGgBQAGgBAFgDIAJgHIAlAVQgWAUgZADIgMABIgOgBgAg+BLIAHgNQgMAEgNgCQgOgDgLgGQgLgHgHgHQgGgIgDgIQgDgIABgIQABgIAEgFQAGgJAIgGQAHgGALgCQAKgCALACQAMACANAFIApARQAIACADgBQAEgCAEgGQADgGgBgEQAAgEgCgEIgGgHIgGgFQgJgGgLAAQgLABgHAJIgjgUQAJgLALgFQALgFALgBQAMAAAMAEQAKAEALAGIASAMQAKAHAGAJQAGAIABAKQACAKgHAKQgGAJgKALIgwA4IgIASgAhRACQgFADgEAGQgEAIAEAHQAEAHAIAFQAJAFAHAAQAIABAGgCQAHgCAFgEIAWgUQgKAAgJgDIgcgMIgLgBQgEAAgFACgAjXgLICRijIAlAVIiRChgAkWgsQgIgDgJgFQgOgIgJgMQgIgLADgRIgBgBIgQATIgigTICRikIAlAVIg0A5IABABQAOgFALABQAMABANAHQANAIAHAKQAGAJABAMQACALgDAMQgDAMgHAMQgJAPgNANQgNANgQAHQgPAGgSAAIgRgCgAj2inQgKACgKAFQgKAGgHAJQgJAJgFAJQgHANADAMQABAGAEAEQAEAFAGAEQALAGAKgBQALgBAKgGQAJgGAIgJQAIgIAFgJQAHgNgBgMQgBgMgPgIQgIgFgJAAIgFAAg");
	this.shape_1.setTransform(130.8,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("ADRCBQgQgBgMgGQgMgFgIgJQgIgKgEgNQgEgMACgRQABgMAIgXQAHgRANgKQAMgNAQgGQAIgDAKgBQAJgCAJABQARACAMAFQAOAFAIAKQAIAIAFAMQAEANgCARQgBALgEANIhxgKIgBAFIAAAEQgBAHABAFQACAGAEAFQAIAJARABQAGABAFgCIAJgEIAIgGIAGgHIAqAEQgGAMgIAKQgIAJgKAGQgKAGgNACIgQABIgOgBgADgACQgHACgGAEQgFAEgEAFIgHAMIBGAHIAAgMQAAgGgDgFQgCgFgFgEQgGgDgJAAIgGAAIgKABgAA5BvIAHgVIAAAAQgMAMgOAFQgOAFgRgBQgrgFAEgpIAghxIAqAEIgfBpQgBAHAGAGQAGAEAIABQAJABAIgDQAIgDAGgFQAFgGAEgIIAHgPIAZhPIAqAEIguCWgAh7BeIBBjPIAqAEIhBDPgAjVBaQgQgBgNgHQgNgHgEgRIgBAAIgHAYIgngEIBBjPIAqADIgXBKIABABQALgLAKgEQALgDAPABQAPACAKAGQAKAGAGAKQAGAJACAMQACAMgBAMQgCASgGARQgHARgLAMQgMANgPAHIgRAFIgJABIgKgBgAjXghQgKAGgGAJQgHAJgDAKQgEALgBAKQgBAPAHAKQAEAFAGADQAFADAHAAQAMABAJgFQAJgGAHgJQAGgKAEgKQADgMABgIQACgOgGgLQgGgKgRgBIgDAAQgLAAgHAEg");
	this.shape_2.setTransform(77.3,105.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AnOCGIAHgjIARABQAHAAAFgCIAHgFIAFgHIAEgHIgdiXIAsAAIAOBtIABAAIA1huIAtAAIhiCvQgEAKgGAHQgGAGgHAEQgHADgIACIgVACgAj1BPQgMgEgJgIQgJgJgGgMQgFgNAAgRQAAgMAGgWQAGgRALgNQALgOAPgIQAIgEAJgCQAJgCAKAAQAQAAANAEQAOAEAKAIQAJAJAFAMQAGANAAARQAAALgCALIhzABIAAAJQAAAHACAFQACAGAEAEQAJAIASAAQAGAAAFgCIAIgFIAHgHIAFgHIArgBQgFAOgHAKQgHAJgJAHQgKAHgNADQgMAEgRAAQgQAAgNgEgAjWgrQgHADgFAEQgFAEgEAGIgGANIBHAAIgBgMQgBgGgDgFQgDgFgFgDQgGgCgJAAQgJAAgHADgAA7BBQgTgRgBghQAAgSAGgSIAHgQIALgPQALgNAQgIQAIgEAKgCIATgCQAQAAAOAEQANAEAKAIQAKAIAFAMQAFAMAAARQgBAZgFALQgGASgLAOQgLANgRAIQgJADgJACQgJADgLAAQghAAgTgQgAB+gwQgLAAgJAGQgIAGgGAKQgFAKgCALQgDAJAAAKQAAAHACAGQACAHAEAEQAEAFAFADQAGADAIAAQAMAAAIgHQAJgGAFgKQAGgKACgLQADgKgBgKQAAgIgBgGQgCgGgEgFQgDgEgGgDQgFgBgGAAIgEAAgAhMiGIAqAAIgrDUIgrAAgAAAiHIAqAAIgqDUIgqABgADehNIArgBIAHBrIABAAIAvhrIArAAIAGBqIAAAAIAxhrIAtAAIhQCZIgsABIgGhrIgBAAIgvBrIgtABg");
	this.shape_3.setTransform(67.6,164);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC3300").s().p("AmjgFIAogOIAJBLIAAgBQAGgNAJgIQAIgIAOgFQAPgEALABQAMACAJAGQAJAHAHAKQAHAKAEANQAGARAAATQACASgGAQQgFAQgMANQgFAGgIAFQgHAFgKADQgPAFgPgBQgPgCgKgNIAAAAIACAYIglANgAlTA5QgMAEgFAJQgHAJgCALQgCALABANQABAMAEAJQAEAOALAGQAFADAGAAQAGABAHgDQAMgEAGgIQAGgJACgLQADgLgBgLQgCgMgDgKQgFgOgJgHQgGgEgHAAQgGAAgHACgAjvgDIAmgNIADAaIABABQABgKADgFQADgHAGgHQALgMAQgFIANgDIAFAnIgSADQgMAEgGAHQgHAHgEAIQgDAJAAAKIAAAUIAJBFIgoAOgAhfBhQgYgKgKggQgGgSAAgTIACgSIAFgPQAHgQANgNQAHgGAIgEQAIgFAKgDQAPgFAOgBQAOAAALAEQAMAFAJAKQAHAKAFAQQAGAXAAANQAAATgHAQQgHAQgLANQgHAGgIAFQgIAFgKADQgQAGgOAAQgNAAgMgFgAhDgfQgLADgGAJQgGAJgCAKQgCAKABALQABALADAKQACAGAEAGQAEAFAFADQAGAEAGABQAGAAAHgCQALgEAGgIQAHgJACgLQACgLgBgMQgBgKgDgJQgDgHgDgGQgEgFgFgEQgFgDgGAAQgHAAgIADgAAOhZIApgNIAoBlIABAAIALh3IApgNIAmBlIABAAIANh3IArgOIgcCrIgqAOIgohkIgBABIgLB0IgqAOgAEJisIAmgNIACAWIABAAQALggAggKQAWgHAOAGQAOAGAGAUIAPB3IgoANIgPhuQgCgHgHgCQgIgCgHACQgJADgGAGQgGAGgDAHQgDAIAAAIIAAARIAJBTIgoAOg");
	this.shape_4.setTransform(92.6,213.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996600").s().p("AhOBqQgNgEgIgIQgKgIgFgNQgFgMAAgRQgBgNAGgXQAGgPALgOQAKgOAQgIQAJgEAIgCQAJgCAKAAQAQAAANAEQAMAEAKAIQAJAJAFAMQAGANAAAPQABALgDANIhxACIAAAJQABAGACAGQACAFAEAEQAIAIASAAQAGAAAFgCIAJgFIAHgHIAFgHIAogBQgFANgGAKQgHAKgKAHQgIAHgMADQgMAEgSAAIgDABQgNAAgMgFgAgggTQgJAAgHADQgHADgFAEQgFAEgEAFIgFANIBHgBIgCgMQgBgEgCgFQgDgFgGgDQgFgCgHAAIgDAAgAjOgtIApAAIgGAcIABAAQADgIAFgGQAGgGAHgEQAPgJARAAIAMABIgIApIgJgCIgJAAQgMAAgJAEQgIAEgGAGQgFAHgEAJIgTBYIgqABgABWBoQgLgEgIgIQgJgIgDgLQgEgLAAgOQAAgTAEgTQADgKANgVQAKgOAQgJQAIgFAJgCQAJgCALAAQANgBANAGQAMAGAGANIAAAAIARhQIAqgBIgqDVIgqAAIAEgTIgBgBQgDAHgEAEIgMAIQgMAGgPAAIgDAAQgMAAgJgEgACLgVQgMAAgJAGQgJAGgFAJQgGAJgCALQgDAMAAAKQABAHACAGQACAGADAFQAEAEAFADQAHADAHAAQAMAAAIgHQAKgHAFgJQAFgKAEgMQACgLAAgKIgCgMQgCgGgEgFQgHgIgOAAIgCAAg");
	this.shape_5.setTransform(163.8,239.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#339900").s().p("ADCCPQgMgBgLgEQgLgEgJgHQgJgHgEgKQgFgLABgOIAqAFQAAAGABAFQACAEAEADQAEAEAFABIAKADQAKABAHgEQAHgDAGgGQAFgHAFgJIAJgVIgBAAQgSATgagDQgOgBgLgGQgKgGgHgJQgGgJgEgMQgCgMABgPQACgOAIgRQAHgPALgMQAMgNAPgGQAQgGASACQAQACAMAHQALAIAFAQIABAAIAHgXIAoAFIgvCMQgGARgIAMQgIAMgLAHQgMAGgOADIgOABIgUgCgADjggQgJAFgGAIQgHAIgEAKQgEAHgBAKIAAANQABAGADAFQADAGAFADQAFADAIABQALABAJgEQAKgEAGgJQAHgIADgJQAFgKABgKQABgFgCgHQAAgGgEgFQgGgLgQgCIgDAAQgJAAgHAEgAGKBwQgQgCgMgGQgMgFgIgKQgIgJgDgNQgEgNACgRQACgMAIgXQAIgOANgMQAMgMARgHQAIgCAJgBQAJgBAKABQAQACANAGQANAFAIAKQAJAJADAOQAEALgCARQgBALgEAMIhxgNIgBADIAAACIgBAEQgBAHACAGQABAFAEAFQAHAJASACQAGABAFgBIAJgEIAIgGIAGgHIAqAFQgHAMgIAJQgIAJgKAGQgKAGgNABIgPABIgPgBgAGcgNQgHACgGAEQgGAEgEADIgHAMIBHAIIAAgMQAAgFgDgEQgCgFgGgDQgFgEgJgBIgFgBQgGAAgFACgAA5BEIAhhfIACgJQAAgHgGgFQgGgGgHgBQgKgBgHADQgIADgGAFQgGAGgEAHIgHAPIgZBOIgqgFIAwiUIAoAFIgHAVIABAAQAXgXAiAEQAWACAKAMQAKAMgCAUIglBwgAhzAwIACgPQgKAIgNAEQgNADgNgCQgNgBgJgFQgJgEgFgGQgGgGgCgIQgCgIABgIQABgJAFgJQAFgIAIgGQAJgGALgCQAMgDAOAAIAsgBQAIAAAEgEQAEgDABgIQABgGgDgDQgCgEgEgDIgIgEIgJgCQgLgBgKAEQgJAFgEAMIgngFQAEgPAIgJQAHgJALgEQALgFAMgBQANgBANABIAVAFQAMACAJAGQAJAFAFAJQAFAIgCAOQgBALgFAOIgVA6IgFAVIABAJgAiZgQQgEACgDAFQgEAEgBAFQgBAJAHAFQAHAFAJABQAKABAGgCQAHgDAGgEQAFgEADgGIAMgZQgJAEgJAAIgeAAIgLADgAlJAXIAyiUIApAEIgKAbIABABQAFgIAFgFQAGgGAIgDQAPgGARACIAOACIgOAoIgRgFQgNgBgJADQgJADgGAHQgHAHgEAIIgfBTgAmtAPQgggEgRgRQgRgSAEgiQACgTAIgRIAJgPIAMgOQANgLASgGQAIgDAKAAQAJgBAKABQAQACANAFQANAGAJAJQAIAJAEANQADANgCARQgFAZgFAMQgIARgNAMQgNAJgSAGQgJACgJABIgJABIgMgBgAmihsQgJAGgGAJQgHAJgEALQgEALgBAJQgBAHACAHQAAAGAEAGIAIAIQAGAEAHABQAMABAJgFQAKgGAGgJQAHgJAEgLQAEgLABgKQABgHgBgHQgBgGgDgFQgDgGgGgCQgFgEgJgBIgEAAQgJAAgIAEg");
	this.shape_6.setTransform(236.8,207.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AlaCSQgMgBgLgFQgJgFgHgJQgHgKgCgOIAqgEQABAGACAEIAHAGQAFACAFABIALAAQAKgBAGgFQAGgFAEgHQAEgIACgKIAFgWIgBAAQgOAXgaADQgOABgLgDQgMgDgIgIQgJgHgGgLQgFgLgBgPQgCgRADgPQAEgRAIgOQAJgPANgJQAOgKASgCQAQgCAOAFQAMAFAJAPIAAAAIACgZIApgEIgPCTQgCASgFAOQgFANgKAJQgJAJgOAGQgNAFgTACIgMAAIgMAAgAk5goQgKABgHAHQgIAGgEAJQgFAJgCAJQgBALABAJIADAMQACAHAEAEQAEAEAGACQAGACAHgBQAMgBAHgGQAIgHAFgJQAEgJACgLQACgIgBgKIgDgNQgDgGgFgEQgHgIgMAAIgFABgAjEhQIApgFIgEAcIABABQADgJAEgGQAFgHAHgFQAOgKARgBIANgBIgEAqIgSAAQgNABgIAFQgIAFgFAIQgFAHgCAKIgEARIgHBHIgqAEgAg1A5QgOgDgJgHQgKgIgGgMQgHgMgCgPQgBgMADgYQAFgRAJgPQAJgOAPgKQAIgFAJgDQAIgDAKgBQAQgCAMADQANADALAHQAKAIAHAMQAHAMABARQACALgCANIhvAMIAAAEIAAACIAAACQABAHADAFQADAFAEAEQAKAHARgCQAGAAAFgDIAIgGIAEgIIAEgIIAqgCQgDALgGALQgGALgJAHQgJAIgMAFQgKAFgRABIgMABQgIAAgIgCgAgUhIQgJABgHADQgGAEgFAFQgEAFgDAGIgEANIBEgHIgCgMQgCgGgDgEQgDgEgFgDQgEgCgGAAIgFABgAB0AnQgOgDgJgIQgKgHgGgMQgHgKgCgRQgBgMADgYQAFgSAJgPQAJgOAPgJQAIgFAJgDQAIgDAKgBQAQgCAOADQANADALAHQAKAHAHAMQAHANABAQQACAMgCANIhxAMIAAADIAAADIAAADQABAHADAFQADAFAEACQAKAIARgCQAGgBAFgCIAIgFIAGgHIAEgIIAqgFQgDAOgGAJQgGAKgJAIQgJAIgMAEQgMAFgRACIgMAAQgIAAgIgBgACVhbQgJABgHAEQgGADgFAFQgEAFgDAHIgEANIBGgIIgCgMQgCgFgDgFQgEgEgGgCQgEgCgGAAIgFAAgAD/iCIAogEIgCAWIABAAQARgdAigDQAWgDANAKQAMAJADAUIAAAGIgLBwIgrAFIAKhlIAAgJQgBgHgHgEQgHgDgHAAQgKABgGAFQgIAFgEAGQgFAHgCAIIgEAQIgIBSIgqAFg");
	this.shape_7.setTransform(284.6,162);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,1,1).p("AkAhTQADgFAEgBQQLkSL7ggQACAAADAAAi3CJQVMkRF/jmQACgQACgIAuhEUQAUAFAvACQAtABC4gdQC4gdEAhQAvOBvQglgTgYgEQgJgCggAAQgiAAgwAMQgyAMhDAYQiCAvg2AAQgpAAgGAAQgQgCgggNQgEAEAAABQgBACAAAIQAABbClBFQAjAPAmAMIABAAQAZAIAbAGQA6AOAaAAQAtAAApgMQAlgLARgRQASgRAcgPQAfgQAIgHAvTB+QgFA7ANAnQAAAAAAABQACADABAEQABABAAABQACAGAEAHQAFAKAHAOQACAGAEAGAu6BvQB4g/EBhAQD/hCA/AAQAAAAABAAQgBADAAADAkAhTQAEgCAEgCIgLALQgJBHASAzQACAHACAGQAEAJAEAJQAPAcAlAiIAAAAIABAAAkChSQABgBABAA");
	this.shape_8.setTransform(289.1,115.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC3300").s().p("AgkBsQilhFAAhZIAAgKIAFgFQAgANAPABIAwABQA2AACAgvQBCgYAzgMQAdC6ixBHIgNAEIgCAHQgkgMgjgPg");
	this.shape_9.setTransform(153.4,138.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCF0EF").s().p("AlsA4IAKgGIAPgJQB3g+D/hBQD/hCA/AAIABAAIAAAGQgJBHARA1IAFANIgHADQlVB9lSAeIgKABIgTACIgGABIgCABQgOgnAGg7g");
	this.shape_10.setTransform(227.7,122.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AiHCNIg0gPIgBAAIADgGIANgFQCvhGgci7IBQgMQAgABAJABQAYAEAmAUIAFAJIgLAFQgFA8ANAmIAAABIAEAHIABACIAFALIAMAZIAGALIAAABIgPASQgIAGggAQQgcAQgSAQQgRARglALQgmAMgtAAQgbAAg6gNg");
	this.shape_11.setTransform(175.8,139.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AlrBvIgHgLIgLgZIgGgNIgBgCIgDgHIAAgBIACgBIAZgCIALgBQFUgeFSh+IAHgCIAIARQAPAdAlAhIAAABIgIAHQkABOi1AdQi4AcgtgBQgvgCgUgFIgOAIg");
	this.shape_12.setTransform(231.2,132.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6633CC").s().p("AtGEHIAAAAQglgigPgcIgIgSIgEgNQOkimNjkKIAHAUQl/Dm1MERIgDACg");
	this.shape_13.setTransform(354.4,103.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8080DE").s().p("AuGBhIALgLIgBgCIAAAAQQLkQL7ggIAAAJQtjEKukCmQgSg1AJhHg");
	this.shape_14.setTransform(353.4,98);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,102,102,0.71)").s().p("AxnGbIgygQIAAAAQgkgNgggQQiYhMAAhfIABgMIADgEQAdAMAOADIArAAQAxgBBzgyQA7gZAugNIBJgNQAcAAAJABQAWAFAjATIAGAKIANgKQBohDDjhDQDihFA5gCIABAAIABAHIAIgLIgBgCIAAgBQODkdLHgtIADAJIAOATQkhDrzXEsIgCAEIgBAAIgFAHQjoBYiqAgQirAggrgBQgrgBgUgGIgMAIIgOAUQgGAHgcASQgaAQgQATQgOATgjAMQgmAOgqAAQgZAAg2gPgAtVDqIgFACIASgDIgNABg");
	this.shape_15.setTransform(276.5,123.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,1,1).p("ADSAAQAAAigKAfQgPAsglAkQg9A8hXAAQgIAAgKgBQgVgCgTgFQgfgJgbgSQgRgLgOgOQg+g8AAhVQAAhUA+g8QA+g8BVAAQAZAAAYAGQAuAKAmAfQAHAGAIAHQA+A8AABUg");
	this.shape_16.setTransform(225.6,79.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(4,1,1).p("ASklfQgTAKgQAOQgHAHgIAGQh4BjiPg3QgPgGgJgLQgKgNgJgOQgdgyAFgyQAZhmBOg/QAYgTAdgQQAJgFAIgIQAwg4AZhHQAFgPAFgPQArlDjyibQhfg8iJgiQi1gui1ABQnwAlnKDSQiSBEiLBOQhEAnhCAqQioBsiQCLQh8B4haCTQhiCfg0CzQgdBigKBnQgJBQAEBSQAIDIBXC0QA7B6BYBlQAEAEAEAFQAcAfAeAdQCKCECpBcQChBZCwA0QC3A2C+APQDIARDHgVQC4gSC0guQCggmCbg4QCthBCjhTQCihSCQhrQCZhzB/iNQCCiQBXiuQBYiyAPjDQABgQABgQQgEhqgfhKQhCiGiQgpQgJgDgJgCQgogJgqgCQgjgDgiAKQgDAAgDACQhWAdgqAWQgrAWguAWg");
	this.shape_17.setTransform(182.5,140.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("AppUtQi/gQi3g1Qiwg0ihhaQiohciKiDQgfgdgcgfIgIgKQEeDsHVCCQHWCDJ0ijQJ2ikHfoEQHfoDkYnVQCPAqBCCGQAgBKADBqIgBAfQgQDDhYCyQhXCuiCCQQh/COiZByQiQBriiBTQijBTisBAQicA5igAmQixAti7ASQhvAMhwAAQhYAAhXgHgA6nM0IACABIAIAKgAEsmrQgfgHgQgHQgBABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgCABgBgQQAAgDAsgSIAAAAQA9gZAkgTQBagvAggwQARgbAAgcQABgxgSglQgphdgHgRQA7AJAmBlQAaBJAAAuQAAA8hABHQhMBThfAAQgTAAgfgGgAE2nZQBXAAA+g8QAkgkAPgsQgPAsgkAkQg+A8hXAAIgTgBIATABgADInUQgOgKgJgIQAIgPAHgHQAZgXAkAtIgCAFQgggJgbgSQAbASAgAJIgGALQgHAOgNAAQgIAAgRgMgALzqFQAAgcAVgfQAMgTAhgqQBChYAAhnQAAh3hah4QhZhkgBgSQAAgPACgCIABABIAFgBQAKgBAPAAIAEAAQB4ADA+C2QAeBdAHBeQAABsgeA+QgnBWhoA3QAYgUAdgQQAJgFAIgIQAwg4AZhGIALgeQAGgwAAgsQAAj/jOiDQDOCDAAD/QAAAsgGAwIgLAeQgZBGgwA4QgIAIgJAFQgdAQgYAUIgZAMQgCAEgDABIgBAAQgEAAAAgOgAGPtLQgWgKgSgZQAvAKAlAfIgIABQgVAAgPgHgAG7tFIAAAAgAFntuIgEgGQAjggAjARQAfAPACAcIgEANQgCAFgJABQglgfgvgKg");
	this.shape_18.setTransform(194.6,147.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECE5DB").s().p("ArzUUQnViCkejsQhYhlg7h5QhXi0gIjJQgEhRAJhRQAKhmAdhjQA0iyBiifQBaiUB8h3QCQiLCohsQBCgrBEgmQCLhPCShEQHKjSHwgkQC1gCC1AuQCJAjBfA8IgEAAQgQAAgJABIgFABIgBgBQgCACAAAPQAAASBaBkQBaB4AAB3QAABnhCBYQghAqgNATQgUAfAAAcQAAAPAFgBQACgBADgEIAZgMQhOA/gZBmQgFAyAdAyIATAaQAJAMAPAFQCPA4B4hjIAPgNQAQgPATgJIBZgtQAqgWBWgdIAGgCQAigJAjACQAqACAoAJIASAFQEZHTnfIFQngIEp1CkQlcBaksAAQjxAAjRg6gAHrk6QAfAGATAAQBfAABLhTQBBhHAAg8QAAgugbhJQglhlg7gJQAGARAqBdQARAlAAAxQAAAcgRAbQAKgfAAgiQAAhVg+g8IgPgOQAJgBACgFIADgNQgBgcgfgPQgjgRgjAgIAEAGQgYgFgZAAQhXAAg+A8Qg9A8AABVQAABVA9A8QAPAOAQALQgIAHgHAPQAJAIANAKQASAMAIAAQANAAAHgOIAFgLQAUAFAVACQgsASAAADQAAAQADgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQARAHAfAHg");
	this.shape_19.setTransform(175.5,135.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#183F66").s().p("AoBWGQjFgQi9g2Qi1g1inhaQiuheiPiFQgfgdgdggIgKgLIACABQhbhmg9h7Qhai3gIjLQgEhTAJhRQALhoAehkQA1i1BliiQBdiVCAh5QCViNCuhuQBEgrBGgnQCQhQCWhFQHZjVIBglQC6gBC7AuQCOAjBiA9QB9ADA/C5QAgBeAGBgQAABtgeA/QgqBYhqA3QhRBAgZBnQgFAzAdAzIAUAbQAJALAPAGQCUA4B9hkIAPgNQARgPATgKIBcgtQAsgWBYgeIAGgCQAjgJAlACQArACApAJIATAFQCUArBFCHQAgBMAEBrIgCAgQgPDGhcC0QhZCxiGCSQiECPieB1QiVBsinBUQipBUiyBBQigA6imAmQi5Aui+ATQh0AMhzAAQhbAAhagIgAGBmnIgCAGQAUAFAWACIABgBQA+gZAlgTQBdgvAhgyQALgeAAgjQAAhXhAg9IgPgNIgJAAQgVAAgQgHQgWgKgUgZQgYgFgaAAQhaAAhAA8Qg/A9AABXQAABWA/A9QAPAOARALQAJgIAKAAQATAAAYAeg");
	this.shape_20.setTransform(188.5,152.9);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,448.2,297.2);


(lib.gameTitle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCCC").s().p("AAAAAIAAAAIABABg");
	this.shape.setTransform(58.1,40.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3300").s().p("AhdFOQgsgQgngbQgogagdglQgeglgRgwQgQgvgBg+QAAhAAUg7QATg8AjgxQAigxAtgiQAtgjAzgTICOAFQAmAGAiAQQAhAQAYAfQAYAfAAAyQAAARgLAJQgKALgOAAIgFAAIhLhcIgTgJIgcgFIg7gCQguAAgvAXQguAUgjAmQgkAmgXA2QgWA2AAA+QAAA9AXApQAWApAlAYQAlAYArAKQAsAJAnAAQArAAAogOICGg3QAegLAdAAIAFAAIAQABQAIAQAAANIgDARIgHAQQhhBAgvAQQhHAZhUAAg");
	this.shape_1.setTransform(38.4,54.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#99CC00").s().p("AiBDdQgggMgXgZQgYgXgNghQgOggAAgkQAAgwAQgyQAQg2AfgrQAggsAsgcQArgcA1AAQArABAqAPQAqAPAiAbQAiAbAUAmQAVAlAAAtQAAA5gZAyQgaAygpAiQgqAjg2AUQg0ATg4ABQglAAgggPgAhSh/QgZAZgQAkQgRAigKAjIgIA7QAAAhAUATIAvAjIApACQAnAAAhgMQAlgMAcgYQAcgYARggQARgiAAgmQAAgkgPgXQgPgYgZgPQgZgQgggGIg+gGQghAAgYAYg");
	this.shape_2.setTransform(100.6,62.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#33CCFF").s().p("AiHEGIgRgWIAAkRIgJhJIgehoIAAgVQAAgPAHgMQAIgMASAAQAPAAANANQAMAMAEAOIAxDLQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAIAFAAIADgCQAXgnAZgZQAXgaAagQIA2gbQAcgKAeAAQAUAAAJAKQAKAMAAASIgCAQIgRANIhGAeQgkAOgfAWQgfAWgWAsQgZAtgOBiIgPA5IgRAdQgJALgRAAQgOAAgHgIg");
	this.shape_3.setTransform(237.6,60.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("Aj+GMQgJgMgBgSIAAgQIBOqfQgIgvASgUQATgUAsAAIBCAHIBOAXIBVAjQAqAVAhAaQAgAZAWAgQATAhAAAiQABBUgpA2QgpA1g/AfQg+AhhJALQhKAKhFgEIgcEOQgCANgMANQgMANgMAAQgUAAgKgNgAiUAFIAJAJIAJABIAtABQAsAAAtgJQAxgHAogVQApgWAagjQAbgkAAg1QAAgWgSgUIgpghIhWgoIhygqQgLgFgIgCIgJAAg");
	this.shape_4.setTransform(337.2,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993399").s().p("ABuDqIg9gbQgFABgEAEIgRAIIgcAKIgmAEQgaAEgagHQgagIgUgQQgWgRgPgYQgMgaAAghQAAgjAJgbQAKgcAUgTQApgsBaABIBGAHIgBgvQgCgYgJgSQgIgTgTgLQgQgMggAAQgWAAgPAMIgnAiIgUAHIgVAAIgRgKQgHgHAAgNQAAgWAQgSQAQgQAWgMIAugSIAngGQA1AAAuAgQAtAgARA4IgEBsIgNCKIAAAcIAOAQIAzgIQAOAAAEAOIADAUQAAAagQAIIgiAHgAhIAcQgUAGgLAMQgMAMgEARIgFAiQAAAPALAMIAXARIAhAKIAgAEQAQAAALgNIAVgdIALgjIADgjIgGgPIgQgJIgRgGIgQgBIgMgBQgZAAgRAFg");
	this.shape_5.setTransform(393.9,64.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC3300").s().p("AhRFnQgPgXgGghIgJh1QABiUARhtIAjjzIAIggIAPgbQAKgKARAAQAhAAgBAlIAAALQABAGgCAEIg3HvIAABQIAHAhQAGAOALAAIACAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIA0g1IANgMIAKgHIAKgFQASAAAGAOIAHAaQAAAYgQAXQgOAYgVARQgXARgaALQgYAKgXAAQgeAAgQgZg");
	this.shape_6.setTransform(435.1,48.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9900").s().p("A75FnQgPgXgHghIgHh1QAAiUAQhtIAkjzIAHggIAQgbQAKgKARAAQAiAAAAAlIAAALQAAAGgBAEIg6HvIABBQIAGAhQAGAOAMAAIABAAQABAAAAAAQABAAAAAAQAAgBAAAAQABAAAAgBIA2g1IANgMIALgHIAJgFQASAAAHAOIAFAaQAAAYgPAXQgOAYgVARQgYARgaALQgZAKgXAAQgfAAgPgZgAX9FxQgqgLgegaQgggZgRgmQgQgogBg5QABg3AWgxQAXguAmggQAnghAygUQAygSA2AAQA5AAAeAfQAfAggBA1QAAAzgcAnQghAwg2AfIiQBJQgHABAAAHQAAAGAPADIBbAJIAmgFIBLgSIAlgDIAbAFQAKAEgBAUQABAcgXAQQgXAPgfAFIg/AJIgyABQgyAAgrgLgAY+AGQgkANgbAXQgdAXgSAhQgRAgAAAoIAAAaIABAIQABAEALAAICrhWQAXgKARgWQASgWAAgaQgBgUgIgPQgKgMgXAAQglAAgkALg");
	this.shape_7.setTransform(315.8,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCFF00").s().p("AgTFgQgPgQgJgVIgNgtIgFgoIAAk7IiBAAQgQAAgCgNIgEgVIAEgVQACgKAQgDICKgXIAAigQAAgLAPgJIAXgKQAMAAAPANQAPANAAAOIAACUICjAAQAQAAACAPIAEAaIgIAWQgJAPgNABIiHAAIgIAEIgVASIAAEgIAJAcIAKgMIASgUIAXgRIAWgJQAQABAJAJQAJAKAAAPQAAASgLAaIgcAzQgSAXgUAQQgXARgSAAQgVAAgPgPg");
	this.shape_8.setTransform(528.4,53.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AeZFgQgOgQgJgVIgNgtIgFgoIAAk7IiCAAQgPAAgCgNIgEgVIAEgVQACgKAPgDICKgXIAAigQAAgLAQgJIAYgKQAMAAAQANQAOANAAAOIAACUIClAAQAPAAACAPIADAaIgIAWQgJAPgMABIiHAAIgIAEIgNAKIgIAIIAAEgIAIAcIALgMIAoglIAXgJQAPABAJAJQAKAKAAAPQAAASgLAaIgdAzQgRAXgVAQQgWARgTAAQgWAAgQgPgEggZAE5QgggMgXgZQgXgXgOghQgNggAAgkQAAgwAPg0QARg0AfgrQAfgsAsgcQArgcA3AAQArABAqAPQArAPAhAbQAiAbAUAmQAVAjAAAtQAAA7gZAyQgaAygpAiQgqAjg2AUQg1ATg5ABQglAAgggPgA/qgjQgYAZgRAiQgRAigJAlIgJA7QAAAhAUATIAwAjIAoACQAnAAAjgMQAlgMAdgYQAbgYASggQAQgiAAgoQAAgkgPgXQgPgWgZgPQgZgQgggGIg/gGQgiAAgYAYg");
	this.shape_9.setTransform(382.3,53.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF33").s().p("AhHDcQgqgLgfgaQgfgZgRgmQgRgoAAg5QAAg1AXgxQAXguAmgiQAnghAxgUQAxgSA2AAQA5AAAeAfQAeAgAAA3QAAAzgbAnQgiAug2AfIiOBJQgHABAAAHQAAAGAPADIBZAJIAmgFIBKgSIAmgDIAbAFQAKAEAAAUQAAAcgXAQQgXAPgfAFIhAAJIgxABQgwAAgrgLgAgFiNQglANgcAXQgcAXgSAhQgSAgAAAmIABAaIABAIQABAEALAAICphUQAWgKASgWQASgWAAgaQAAgUgKgPQgKgOgXAAQgkAAghANg");
	this.shape_10.setTransform(629.8,63.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AkiG6QgKhCAGhEQAWjuAQjtQAIhxAchsQAYhdBjgRQCAgXB7AtQAUAHAXADQCdAYAoCgQAOA2ABA3QCLh7ClBdQA7AhAWBDQAlBrglBvIgBAJIAqA5IANkzQAGiQAXiOQAJg6A3gYQBpgwBHBZQAnAvgGA9QgPC4gKC1QAMAQAHgkQAShRA3g/QB2iGCrAXQANADAOAEQBgAdAaBiIB5h0QgLiLBthMQApgdAxAMQBaAZAkBZQAMAfgFAiQBDAFA1AoQAXARAIAaIBPggQgHiZBPh+QAFgIAJgGIAXgBIAGAEQAKAHAIAJIAMARQBVBAgNB1QgCATAAATQAVATAzgCQBnAKAvBXQBqiCCkAlQAbAGAYANQAnAVAeAgQBRBYg0BrQARAIAoAEQBOALAIBQQAHBBgdA9QgpBWhYAnIgmAPQjRBUijiQQgWgUgLgbQg3iRAfiaIi1AcIAEBVQCPgJAOCKQANB6hRBWQgqAsg9ANQhEAOg9gkQhAgmgGhLQgQi2ACi1IgggBQgZAAgYgMQgOgGgMgMIhhAsIgBCmQAWALAsALQAcAHAKAaQAhBZgqBUQhBCBiPgdQgrgJgngQQg0gTgYg2QhIihAZisIhUACQBbBDg4BuQg/B5iEAkQi/A1h7iXQhxC6jQgvQiOBbiHhcQgRgNgPgQQidAkhXh7QgNgSgFgaQgmizCghTIgTgFQgMgFgMgIQgVgSgKgbIiGCDQhtA7hnBJQgPAMgFAVIgqCxQgaBphpANIgRAAQhgAAgRhogAx3G6QgQgfABghQAEg1ANg1QgLgDglAqQiVCojYgbQgrgDgmgXQgngagggjQiGB0imhFQhWglgfhaQh9CijKgjQhkgShChNQiDCHi+gUQgygDg2gMQjbgugzjfQgri7BIi1QA3iMCRgwQBBgVBCgKQDUgeByCpQAVAfAFAiQCmiGDNBLQBmAlA5BaQADjiCmiMQANgLASAAQBXgKAhBRQAgBPgBBYQgECOADCOQCDjZD1gZQAkgEAhASQATALATAOQBZhsB/A8QA+AeATBCQAHAaAAAdQBIhRBkgCQBEAHAaA8QAqBkhUAyQgSAMgUAKQivBOAlC6QATBlg0BSQgYAlgsAEIgUAAQheAAgshQg");
	this.shape_11.setTransform(332.8,54.7);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665.6,109.4);


(lib.crossMark = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADgE/IgIgBIjqj0QgdAWghA2IhVCAQgkAqgiAAQgXAAgIgHQgHgGAAgXIADgZIAJgVICyj2IiHimIgegsIgGgtQAAgSAJgOQAJgPAVAAQAcAAAPAYIAVAsIACADQgFgJAcAhIBWBtIAMAKIAKALICDiMIAfg3IAYgbQAOgMARAAQAVAAAIAPQAKANAAATIgDAkQgEAPgPASIiaCvIgMAYICZC+QAOAVgMgaIAHAFIAEAGIA4BFQACADAAADIAAALQAAAqgrAAIgHgBg");
	this.shape.setTransform(27.5,32);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,64.1);


(lib.colorBoxDouble = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnwndIPhAAIAAO7IvhAAg");
	this.shape.setTransform(149.4,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AnwHdIAAu6IPhAAIAAO6g");
	this.shape_1.setTransform(149.4,47.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AnxndIPjAAIAAO7IvjAAg");
	this.shape_2.setTransform(49.8,47.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996600").s().p("AnxHdIAAu6IPjAAIAAO6g");
	this.shape_3.setTransform(49.8,47.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,201.2,97.6);


(lib.colorBox = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnxndIPjAAIAAO7IvjAAg");
	this.shape.setTransform(49.8,47.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996600").s().p("AnxHdIAAu6IPjAAIAAO6g");
	this.shape_1.setTransform(49.8,47.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,101.6,97.6);


(lib.checkMark = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah8FIQgMgIgQgfIirlIIgBgJIAAgMQAAgXAGgGQAHgIAXAAIAhAFQAJAEAOAbICJEDIACACIADAAQAFAAAFgDIAIgJIEyn1IAUgVIAYgCIAgAHQAPAHAAAWIgFAPIgHARIlfJEIgVAWIgZADQgbAAgNgJg");
	this.shape.setTransform(32.6,33.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.2,67.6);


(lib.bgBoard = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336699").s().p("EhGTAo7UADwgoxgDwgp/UBAJAFRBMegFRUgEKArvAEKAnBUgjeAA7gjIAAAUgjLAAAgi2gA7g");
	this.shape.setTransform(450,267.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,900.1,535.8);


// stage content:
(lib.colorPaletteL = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.gameTitle();
	this.instance.setTransform(503.9,240.3,1,1,0,0,0,332.8,54.7);

	// Layer 6
	this.instance_1 = new lib.progressBar_8();
	this.instance_1.setTransform(485.1,490.2,1,1,0,0,0,167.5,17.1);

	this.instance_2 = new lib.progressBar_10();
	this.instance_2.setTransform(480.4,558.3,1,1,0,0,0,167.5,17.1);

	// Layer 5
	this.instance_3 = new lib.crossMark("synched",0);
	this.instance_3.setTransform(587.6,337.2,1,1,0,0,0,27.4,32);

	this.instance_4 = new lib.checkMark("synched",0);
	this.instance_4.setTransform(331.3,335.5,1,1,0,0,0,32.5,33.8);

	this.instance_5 = new lib.colorBoxDouble();
	this.instance_5.setTransform(579.4,334.5,1,1,0,0,0,99.5,47.8);

	this.instance_6 = new lib.colorBox("synched",0);
	this.instance_6.setTransform(330.6,334.5,1,1,0,0,0,49.8,47.8);

	this.instance_7 = new lib.palette("synched",0);
	this.instance_7.setTransform(335.6,346.2,1,1,0,0,0,222.1,146.6);

	// Layer 3
	this.instance_8 = new lib.stageBg();
	this.instance_8.setTransform(480.1,358.2,1,1,0,0,0,450,267.9);

	// Layer 4
	this.instance_9 = new lib.bgBoard("synched",0);
	this.instance_9.setTransform(480.1,358.2,1,1,0,0,0,450,267.9);

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(500.4,401.3,921.9,544.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;