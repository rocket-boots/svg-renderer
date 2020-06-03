import { Coords } from 'rocket-boots-coords';

const POLYGON = 'polygon';
const IMAGE = 'image';
const PATH = 'path';
const TEXT = 'text';
const GROUP = 'group';

const DEFAULT_SIZE = 1000;
const DEFAULT_SVG_ELEMENT_ID = 'display';
const SVG_BASE_ELEMENT_SUFFIX = '-base';

function getTransformAttributeValue(offset = {}, scale = {}) {
	// const scaleX = (!scale) ? 1 : scale.x;
	// const scaleY = (!scale) ? 1 : scale.y;
	return `translate(${offset.x}, ${offset.y}) scale(${scale.x || 1},${scale.y || 1})`;
}

function getTransformAttribute(offset, scale) {
	if (!offset) { return ''; }
	return `transform="${getTransformAttributeValue(offset, scale)}"`;
}

function getPointsString(arr) {
	return arr.map((point) => { return `${point.x} ${point.y}`; }).join(', ');
}

function getPolygonSvg(classNames, pointsString, offset) {
	return `<polygon class="${classNames}" points="${pointsString}"
	${getTransformAttribute(offset)} />`;
}

function getImageSvg(classNames, href, size, offset, scale) {
	return `<image href="${href}" 
		class="${classNames}"
		x="0" y="0"
		height="${size.y}px" width="${size.x}px"
		${getTransformAttribute(offset, scale)} />`;
}

function getTextSvg(classNames, { x, y }, text) {
	return `<text x="${x}" y="${y}" class="${classNames}">${text}</text>`;
}

function getPathSvg() {
	return `<path d="" />`; // TODO
}

function getGroupSvg(classNames = '', insideSvg = '', offset) {
	return `<g class="${classNames}" ${getTransformAttribute(offset)}>${insideSvg}</g>`;
}


class Shape {
	constructor(details = {}) {
		this.type = details.type;
		this.classNames = details.classNames || '';
		this.points = details.points;
		this.renderMe = true;
		this.name = details.name || Shape.getRandomName();
		this.classNames += ' ' + this.name;
		this.href = details.href || '';
		this.size = details.size || new Coords(0, 0);
		this.offset = new Coords(0, 0);
		this.scale = new Coords(1, 1);
		this.text = details.text || '';
		this.position = details.position || new Coords(0, 0);
		this.svg = details.svg;
	}

	static getRandomName() {
		return 'svg-rend-shape-' + Math.round(Math.random() * 9999999999);
	}

	getSvg() {
		switch(this.type) {
			case POLYGON:
				return getPolygonSvg(this.classNames, this.points, this.offset);
				break;
			case IMAGE:
				return getImageSvg(this.classNames, this.href, this.size, this.offset, this.scale);
				break;
			case TEXT:
				return getTextSvg(this.classNames, this.position, this.text);
				break;
			case PATH:
				return getPathSvg(); // TODO
				break;
			case GROUP:
				return getGroupSvg(this.classNames, this.svg, this.position);
				break;
		}
	}

	setOffset(coords) {
		this.offset.set(coords);
		this.renderMe = true;
	}

	setScale(coords) {
		this.scale.set(coords);
		this.renderMe = true;		
	}

	setHref(href) {
		this.href = href;
		this.renderMe = true;
	}

	static updateElement(element, shape) {
		element.setAttribute('transform', getTransformAttributeValue(shape.offset, shape.scale));
		if (shape.type === IMAGE) {
			element.setAttribute('href', shape.href);
		}
		// TODO: update other aspects, possibly based on type of shape
	}
}

class Container {
	constructor(name) {
		this.name = name;
		this.children = new Map();
	}

	addChild(details) {
		const shape = new Shape(details);
		this.children.set(shape.name, shape);
		return shape;
	}

	addContainer(name) {
		const container = new Container(name);
		this.children.set(container.name, container);
		return container;
	}

	forAll(fn) {
		for (const [name, thing] of this.children) {
			if (thing instanceof Shape) {
				fn(thing);
			} else if (thing instanceof Container) {
				thing.forAll(fn);
			} else {
				console.warn('Unknown thing found as child of container', this.name, ':', thing);
			}
		}
	}

	getSvg(insideSvg = '') {
		return getGroupSvg(this.name, insideSvg);
	}

	getChildren() {
		return this.children;
	}

	/** Schedule this child for removal */
	removeChild(name) {
		this.children.get(name).removeMe = true;
	}

	/** Delete from the container without removing from the scene (not typically recommended) */
	deleteChild(name) {
		this.children.delete(name);
	}

	static updateElement(element, container) {
		console.warn('updateElement for container not implemented yet');
	}
}

class SvgDisplay {
	constructor(options = {}) {
		this.svgId = options.svgId || DEFAULT_SVG_ELEMENT_ID;
		this.doc = options.document || window.document;
		this.displayElement = this.getDisplayElement();
		this.baseElement = null;
		this.containers = new Map();
		this.halfSize = null;
		this.size = this.setSize(options.size);
		this.offset = new Coords(0, 500); // TODO: set from options
		this.setup();
	}

	/** If display is instantiated before the DOM is ready, then run this setup method to prepare. */
	setup() {
		this.displayElement = this.getDisplayElement();
		this.size = new Coords(DEFAULT_SIZE, DEFAULT_SIZE); // TODO: configurable
		this.setSize(this.size);
		this.displayElement.innerHTML = `<g class="${this.getBaseElementClassName()}"></g>`;
		return this;
	}

	setOffset(coords) {
		this.offset.set(coords);
	}

	setOffsetToCenterOn({ x, y }) {
		const centerOffset = (new Coords(x, y)).multiply(-1).add(this.halfSize);
		this.setOffset(centerOffset);
	}

	setSize(coordsParam) {
		const coords = (coordsParam) ? coordsParam : new Coords(DEFAULT_SIZE, DEFAULT_SIZE); // TODO: configurable
		if (this.size instanceof Coords) {
			this.size.set(coords);
		} else {
			this.size = new Coords(coords.x, coords.y);
		}
		this.halfSize = this.size.clone().multiply(0.5);
		// console.log(this.displayElement, this.size);
		this.displayElement.setAttribute('viewBox', `0 0 ${this.size.x} ${this.size.y}`);
		return this.size;
	}

	adjustSize(m = 1) {
		this.setSize(this.size.clone().multiply(m));
	}

	getDisplayElement() {
		return this.doc.getElementById(this.svgId);
	}

	getBaseElement() {
		return this.getElementByClassName(this.getBaseElementClassName());
	}

	getBaseElementClassName() {
		return this.svgId + SVG_BASE_ELEMENT_SUFFIX;
	}

	getElementByClassName(className) {
		return this.displayElement.querySelector(`.${className}`);
	}

	getContainer(containerName) {
		return this.containers.get(containerName);
	}

	renderBaseOffset() {
		const baseElement = this.getBaseElement();
		baseElement.setAttribute('transform', `translate(${this.offset.x}, ${this.offset.y})`);
	}

	addContainer(name) {
		if (typeof this.containers.get(name) !== 'undefined') {
			console.warn('Container', name, 'exists already but will be overwritten.', this.containers[name]);
		}
		const container = new Container(name);
		this.containers.set(name, container);
		return container;
	}

	render() {
		this.renderBaseOffset();
		for (const [containerName, container] of this.containers) {
			this.renderContainer(container);
			container.forAll((shape) => {
				this.renderShape(shape, container);
			});
		}
		return this;
	}

	renderContainer(container) {
		const containerElement = this.getElementByClassName(container.name);
		if (!containerElement) {
			this.getBaseElement().innerHTML += container.getSvg();
			container.renderMe = false;
			return;
		}
		if (container.renderMe) {
			Container.updateElement(containerElement, container);
		}
		container.renderMe = false;
		return;
	}

	renderShape(shape, container) {
		const shapeElement = this.getElementByClassName(shape.name);
		const containerElement = this.getElementByClassName(container.name);
		if (!shapeElement) {
			containerElement.innerHTML += shape.getSvg();
			shape.renderMe = false;
			return;
		}
		if (shape.renderMe) {
			Shape.updateElement(shapeElement, shape);
		}
		if (shape.removeMe) {
			shapeElement.remove();
			container.deleteChild(shape.name);
		}
		shape.renderMe = false;
		return;
	}
}

export default {
	// constants
	POLYGON, IMAGE, PATH, TEXT, GROUP,
	// methods
	getTransformAttribute, getTransformAttributeValue,
	getPointsString, getPolygonSvg, getImageSvg, getTextSvg, getGroupSvg,
	// classes
	SvgDisplay, Container, Shape
};
