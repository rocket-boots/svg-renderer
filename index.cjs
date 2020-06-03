(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Coords.js
class Coords {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	//------------------------------------------ Set coordinates (Mutations)
	/** Set the coordinates */
	set({x, y}) {
		this.x = x || 0;
		this.y = y || 0;
		return this;
	}
	/** Set x and y to zero */
	clear() {
		this.x = 0;
		this.y = 0;
	}
	/** If the coordinate x y values are invalid, try to fix them */
	fix() {
		if (this.check()) { return true; } // Didn't need fixing
		this.x = Number(this.x);
		this.y = Number(this.y);
		if (this.check()) { return true; } // Fixed and values should be what you'd expect
		this.x = 0;
		this.y = 0;
		return false; // Fixed and values could not be salvaged so zeroes were used
	}
	/** Add coordinates by another {x, y} coordinate */
	add({x, y}) {
		this.x += x || 0;
		this.y += y || 0;
		return this;
	}
	/** Subtract coordinates by another {x, y} coordinate */
	subtract({x, y}) {
		this.x -= x || 0;
		this.y -= y || 0;
		return this;
	}
	/** Multiply coordinates by a number */
	multiply(m) {
		this.x *= m || 1;
		this.y *= m || 1;
		return this;
	}
	/** Set coordinates to absolute values */
	abs() {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
		return this;
	}
	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	}
	reverse() {
		return this.multiply(-1);
	}
	normalize() {
		const vectorLength = this.getMagnitude();
		if (vectorLength === 0) {
			this.x = 0;
			this.y = 0;
			return this;
		}
		this.x = this.x / vectorLength;
		this.y = this.y / vectorLength;
		return this;		
	}
	setMagnitude(m) {
		return this.normalize().multiply(m);
	}
	setTangent() {
		return this.set(this.y, this.x);
	}

	//------------------------------------------ Get values
	getDistance({x, y}) {
		return Math.sqrt( Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2) );
	}
	getAbsoluteDistance(coords = {}) {
		return Math.abs(this.getDistance(coords));
	}
	getMagnitude() {
		return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2)	);
	}

	//------------------------------------------ Cloning - Returns a new object
	/** Create a copy of these coordinates (useful to avoid mutating a coordinates object) */
	clone() {
		return new Coords(this.x, this.y);
	}
	getMultiply(m) {
		return new Coords(this.x * m, this.y * m);
	}
	getUnitVector(coords = {}) {
		const d = this.getAbsoluteDistance(coords);
		if (d === 0) { return new Coords(0, 0); }
		const dx = coords.x - this.x;
		const dy = coords.y - this.y;
		const x = dx / d;
		const y = dy / d;
		return new Coords(x, y);
	}
	getUnitVectorTangent(coords = {}) {
		const d = this.getAbsoluteDistance(coords);
		if (d === 0) { return new Coords(0, 0); }
		const x = (coords.y - this.y) / d;
		const y = (this.x - coords.x) / d;
		return new Coords(x, y);
	}
	getPerpendicularVector(left = false) {
		return (left) ? new Coords(-1 * this.y, this.x) : new Coords(this.y, -1 * this.x);
	}
	getTangent() {
		return new Coords(this.y, this.x);
	}

	//------------------------------------------ Checks (True/False)
	/** Determine if the coordinates' x y values are valid numbers */
	check() {
		return (
			typeof this.x === 'number' && typeof this.y === 'number' &&
			!isNaN(this.x) && !isNaN(this.y)
		);
	}
	isEqual({x, y}) {
		return (this.x === x && this.y === y);
	}
	isEqualInteger({x, y}) {
		return (Math.round(this.x) === Math.round(x) && Math.round(this.y) === Math.round(y));
	}

	//------------------------------------------ Polar Coordinate Methods
	setByPolarCoords(r, theta) {
		return this.set({
			x: (r * Math.cos(theta)),
			y: (r * Math.sin(theta))
		}) ;
	};
	// static convertPolarToCartesianCoords(r, theta) {
	// 	var x = r * Math.cos(theta);
	// 	var y = r * Math.sin(theta);
	// 	return (new Coords(x, y));
	// };
	rotate(deltaTheta, aroundOriginCoords) {
		this.subtract(aroundOriginCoords);
		this.setByPolarCoords(this.r, (this.theta + deltaTheta));
		this.add(aroundOriginCoords);
		return this;
	};
	/** Get radius to the center (0,0) */
	getRadius() {
		return this.getDistance({x: 0, y: 0});
	}
	setRadius(r) {
		this.setByPolarCoords(r, this.getTheta());
		return this;
	}
	getTheta() {
		return Math.atan2(this.y, this.x); // http://stackoverflow.com/a/8898965/1766230
	}
	setTheta(theta) {
		this.setByPolarCoords(this.getRadius(), theta);
	}
	getDegrees() {
		return this.getTheta() * (180/Math.PI)
	}

	//------------------------------------------ Aliases
	equals(coords = {}) {
		return this.isEqual(coords);
	}
	copy() {
		return this.clone();
	}
	getCopy() {
		return this.clone();
	}
	getClone() {
		return this.clone();
	}
}

/* harmony default export */ var src_Coords = (Coords);

// CONCATENATED MODULE: ./index.mjs


/* harmony default export */ var index = __webpack_exports__["default"] = ({ Coords: src_Coords });


/***/ })
/******/ ])["default"]));

/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/rocket-boots-coords/index.cjs
var rocket_boots_coords = __webpack_require__(0);

// CONCATENATED MODULE: ./src/svgRenderer.js


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


class svgRenderer_Shape {
	constructor(details = {}) {
		this.type = details.type;
		this.classNames = details.classNames || '';
		this.points = details.points;
		this.renderMe = true;
		this.name = details.name || svgRenderer_Shape.getRandomName();
		this.classNames += ' ' + this.name;
		this.href = details.href || '';
		this.size = details.size || new rocket_boots_coords["Coords"](0, 0);
		this.offset = new rocket_boots_coords["Coords"](0, 0);
		this.scale = new rocket_boots_coords["Coords"](1, 1);
		this.text = details.text || '';
		this.position = details.position || new rocket_boots_coords["Coords"](0, 0);
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
		const shape = new svgRenderer_Shape(details);
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
			if (thing instanceof svgRenderer_Shape) {
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

class svgRenderer_SvgDisplay {
	constructor(options = {}) {
		this.svgId = options.svgId || DEFAULT_SVG_ELEMENT_ID;
		this.doc = options.document || window.document;
		this.displayElement = this.getDisplayElement();
		this.baseElement = null;
		this.containers = new Map();
		this.halfSize = null;
		this.size = this.setSize(options.size);
		this.offset = new rocket_boots_coords["Coords"](0, 500); // TODO: set from options
		this.setup();
	}

	/** If display is instantiated before the DOM is ready, then run this setup method to prepare. */
	setup() {
		this.displayElement = this.getDisplayElement();
		this.size = new rocket_boots_coords["Coords"](DEFAULT_SIZE, DEFAULT_SIZE); // TODO: configurable
		this.setSize(this.size);
		this.displayElement.innerHTML = `<g class="${this.getBaseElementClassName()}"></g>`;
		return this;
	}

	setOffset(coords) {
		this.offset.set(coords);
	}

	setOffsetToCenterOn({ x, y }) {
		const centerOffset = (new rocket_boots_coords["Coords"](x, y)).multiply(-1).add(this.halfSize);
		this.setOffset(centerOffset);
	}

	setSize(coordsParam) {
		const coords = (coordsParam) ? coordsParam : new rocket_boots_coords["Coords"](DEFAULT_SIZE, DEFAULT_SIZE); // TODO: configurable
		if (this.size instanceof rocket_boots_coords["Coords"]) {
			this.size.set(coords);
		} else {
			this.size = new rocket_boots_coords["Coords"](coords.x, coords.y);
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
			svgRenderer_Shape.updateElement(shapeElement, shape);
		}
		if (shape.removeMe) {
			shapeElement.remove();
			container.deleteChild(shape.name);
		}
		shape.renderMe = false;
		return;
	}
}

/* harmony default export */ var svgRenderer = ({
	// constants
	POLYGON, IMAGE, PATH, TEXT, GROUP,
	// methods
	getTransformAttribute, getTransformAttributeValue,
	getPointsString, getPolygonSvg, getImageSvg, getTextSvg, getGroupSvg,
	// classes
	SvgDisplay: svgRenderer_SvgDisplay, Container, Shape: svgRenderer_Shape
});

// CONCATENATED MODULE: ./index.mjs


/* harmony default export */ var index = __webpack_exports__["default"] = (svgRenderer);


/***/ })
/******/ ])["default"]));