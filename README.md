# svg-Renderer
SVG Renderer

## Install

`npm install git+https://github.com/rocket-boots/svg-renderer.git#v0.1.0`

Substitute the version number for the version of your choice, or `master`.

## Concepts

* The ***Display*** is the `<svg>` element where the various shapes are rendered and updated.
* Inside the display there are any number of ***containers*** which are a way to group your shapes.
* A ***Shape*** is something to be rendered -- text, a polygon, an image, etc.
	* `POLYGON`
	* `IMAGE`
	* `TEXT`
	* `GROUP` allows for customized svg
	* `PATH` not supported yet
	* Others not supported yet
* While ***rendering*** the display all the containers and shapes are looped through, and if there has been an update to the shape, it will have it's svg element updated.

## How to Use

```html
<svg id="display"> <!-- Filled in by svgRenderer --> </svg>
```

```js
import svgRenderer from 'rocket-boots-svg-render';

const display = new svgRenderer.SvgDisplay({ svgId: 'display' });

const polygonsContainer = display.addContainer('myPolygons');
polygonsContainer.addChild({
	points:
	type: svgRenderer.POLYGON,
	classNames: 'my-class some-other-class'
});

display.addContainer('images').addChild({
	size: { x: 100, y: 50 },
	type: svgRenderer.IMAGE,
	href: 'path/to/my-image.png',
	className: 'my-image'
});

display.setup();

display.setOffsetToCenterOn({ x: 100, y: 50 });
display.setSize({ x: 500, y: 500 });
display.render();

const imagesContainer = display.getContainer('images');
imagesContainer.getChildren().forEach((shape, key) => {
	imagesContainer.removeChild(key);
});
display.render();

```

See the code for more methods and details.
