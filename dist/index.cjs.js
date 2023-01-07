'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var normalizeWheel$2 = {exports: {}};

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED$1 = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED$1.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED$1.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

var UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED$1;

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment$1 = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

var ExecutionEnvironment_1 = ExecutionEnvironment$1;

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

var ExecutionEnvironment = ExecutionEnvironment_1;

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported$1(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var isEventSupported_1 = isEventSupported$1;

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */

var UserAgent_DEPRECATED = UserAgent_DEPRECATED_1;

var isEventSupported = isEventSupported_1;


// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel$1(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel$1.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

var normalizeWheel_1 = normalizeWheel$1;

(function (module) {
	module.exports = normalizeWheel_1;
} (normalizeWheel$2));

var normalizeWheel = /*@__PURE__*/getDefaultExportFromCjs(normalizeWheel$2.exports);

/**
 * Clamp value between min and max
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function restrictPositionCoord(position, imageSize, mediaSize, zoom) {
    var maxPosition = (mediaSize * zoom) / 2 - imageSize / 2;
    return clamp(position, -maxPosition, maxPosition);
}
/**
 * Ensure a new media position stays in the crop area.
 */
function restrictPosition(position, cropSize, imageSize, zoom) {
    return {
        x: restrictPositionCoord(position.x, cropSize.width, imageSize.width, zoom),
        y: restrictPositionCoord(position.y, cropSize.height, imageSize.height, zoom),
    };
}
function flexiblePositionCoord(position, imageSize, mediaSize, zoom) {
    var maxPosition = (mediaSize * zoom) / 2 - imageSize / 2;
    if (position > maxPosition)
        return maxPosition + Math.pow((position - maxPosition), 0.7);
    if (position < -maxPosition)
        return -maxPosition - Math.pow((-(position + maxPosition)), 0.7);
    return position;
}
/**
 * Ensure a new flexible position stays in the crop area.
 */
function flexiblePosition(position, cropSize, imageSize, zoom) {
    return {
        x: flexiblePositionCoord(position.x, cropSize.width, imageSize.width, zoom),
        y: flexiblePositionCoord(position.y, cropSize.height, imageSize.height, zoom),
    };
}
function getDistanceBetweenPoints(pointA, pointB) {
    return Math.sqrt((pointA.y - pointB.y) * (pointA.y - pointB.y) + (pointA.x - pointB.x) * (pointA.x - pointB.x));
}
/**
 * Return the point that is the center of point a and b
 */
function getCenter(a, b) {
    return {
        x: (b.x + a.x) / 2,
        y: (b.y + a.y) / 2,
    };
}
/**
 * Compute crop and zoom from the croppedAreaPixels
 */
function getInitialCropFromCroppedAreaPixels(initialCroppedArea, cropSize, imageSize, ratio) {
    var initialZoom = (cropSize.width * ratio) / initialCroppedArea.width;
    var initialCrop = {
        x: (imageSize.width * initialZoom - cropSize.width) / 2 -
            (initialZoom * initialCroppedArea.x) / ratio,
        y: (imageSize.height * initialZoom - cropSize.height) / 2 -
            (initialZoom * initialCroppedArea.y) / ratio,
    };
    initialCrop = restrictPosition(initialCrop, cropSize, imageSize, initialZoom);
    return { initialCrop: initialCrop, initialZoom: initialZoom };
}
var createImage = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var image = new Image();
                image.addEventListener('load', function () { return resolve(image); });
                image.addEventListener('error', function (error) { return reject(error); });
                image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
                image.src = url;
            })];
    });
}); };
/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object
 */
function getCroppedImg(imageSrc, pixelCrop) {
    return __awaiter(this, void 0, void 0, function () {
        var image, canvas, ctx, safeArea, getRadianAngle, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, createImage(imageSrc)];
                case 1:
                    image = _a.sent();
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    safeArea = Math.max(image.width, image.height) * 2;
                    canvas.width = safeArea;
                    canvas.height = safeArea;
                    if (!ctx) {
                        return [2 /*return*/, null];
                    }
                    getRadianAngle = function (degreeValue) { return (degreeValue * Math.PI) / 180; };
                    ctx.translate(safeArea / 2, safeArea / 2);
                    ctx.rotate(getRadianAngle(0));
                    ctx.translate(-safeArea / 2, -safeArea / 2);
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, safeArea, safeArea);
                    ctx.drawImage(image, safeArea / 2 - image.width * 0.5, safeArea / 2 - image.height * 0.5);
                    data = ctx.getImageData(0, 0, safeArea, safeArea);
                    canvas.width = pixelCrop.width;
                    canvas.height = pixelCrop.height;
                    ctx.putImageData(data, 0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x, 0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y);
                    // As Base64 string
                    return [2 /*return*/, canvas.toDataURL('image/jpeg')];
            }
        });
    });
}

var Cropper = function (_a) {
    var src = _a.src, _b = _a.width, width = _b === void 0 ? 0 : _b, _c = _a.height, height = _c === void 0 ? 0 : _c, _d = _a.aspect, aspect = _d === void 0 ? 1 : _d, _e = _a.zoom, zoom = _e === void 0 ? 1 : _e, _f = _a.minZoom, minZoom = _f === void 0 ? 1 : _f, _g = _a.maxZoom, maxZoom = _g === void 0 ? 3 : _g, _h = _a.onZoomChange, onZoomChange = _h === void 0 ? function () { } : _h, onCropComplete = _a.onCropComplete, initialCroppedArea = _a.initialCroppedArea;
    var _j = React.useState({ width: width, height: height }), cropSize = _j[0], setCropSize = _j[1];
    var _k = React.useState({ width: 0, height: 0 }), imageSize = _k[0], setImageSize = _k[1];
    var _l = React.useState(1), ratio = _l[0], setRatio = _l[1];
    var _m = React.useState({ x: 0, y: 0 }), crop = _m[0], setCrop = _m[1];
    var _o = React.useState(false), onEvent = _o[0], setOnEvent = _o[1];
    var _p = React.useState(false), completeInitial = _p[0], setCompleteInitial = _p[1];
    var cropRef = React.useRef({ x: 0, y: 0 });
    var zoomRef = React.useRef(1);
    var imageSizeRef = React.useRef({ width: 0, height: 0 });
    var containerRef = React.useRef(null);
    var imageRef = React.useRef(null);
    var rafDragTimeout = React.useRef();
    var rafPinchTimeout = React.useRef();
    var dragStartPosition = React.useRef({ x: 0, y: 0 });
    var lastPinchDistance = React.useRef(0);
    var onTouch = React.useRef(false);
    var isMounted = React.useRef(false);
    React.useEffect(function () {
        if (imageSize.width === 0 || imageSize.height === 0)
            return;
        var point = {
            x: cropSize.width / 2,
            y: cropSize.height / 2,
        };
        setNewZoom(zoom, point);
        emitCropData();
    }, [zoom]);
    React.useEffect(function () {
        if (!isMounted.current) {
            if (imageSize.width && imageSize.height) {
                var point = {
                    x: cropSize.width / 2,
                    y: cropSize.height / 2,
                };
                setNewZoom(zoom, point);
                emitCropData();
                isMounted.current = true;
            }
        }
    }, [imageSize, cropSize]);
    React.useEffect(function () {
        imgSizeInit();
        return void cleanEvents();
    }, [src]);
    React.useEffect(function () {
        window.addEventListener('resize', imgResize);
        imgResize();
        return function () {
            window.removeEventListener('resize', imgResize);
        };
    }, [aspect]);
    var imgSizeInit = function () {
        var img = new Image();
        img.addEventListener('load', function () {
            imageSizeRef.current.width = img.width;
            imageSizeRef.current.height = img.height;
            var imgRatio = img.width / img.height;
            var cropWidth = cropSize.width;
            var cropHeight = cropSize.height;
            var tempRatio;
            var tempImageSize;
            if (width === 0 && height === 0) {
                cropWidth = containerRef.current.offsetWidth;
                cropHeight = cropWidth * aspect;
                setCropSize({ width: cropWidth, height: cropHeight });
            }
            var cropRatio = cropWidth / cropHeight;
            if (imgRatio > cropRatio) {
                tempRatio = img.height / cropHeight;
                tempImageSize = { width: img.width / tempRatio, height: cropHeight };
            }
            else {
                tempRatio = img.width / cropWidth;
                tempImageSize = { width: cropWidth, height: img.height / tempRatio };
            }
            setImageSize(tempImageSize);
            setRatio(tempRatio);
            initialCroppedAreaFunction(tempImageSize, tempRatio);
            imgResize();
        });
        img.src = src;
    };
    var imgResize = function () {
        if (width === 0 && height === 0) {
            cropInit();
            var imgRatio = imageSizeRef.current.width / imageSizeRef.current.height;
            var cropWidth = containerRef.current.offsetWidth;
            var cropHeight = cropWidth * aspect;
            var cropRatio = cropWidth / cropHeight;
            var tempImageSize = void 0;
            var tempRatio = void 0;
            if (imgRatio > cropRatio) {
                tempRatio = imageSizeRef.current.height / cropHeight;
                tempImageSize = { width: imageSizeRef.current.width / tempRatio, height: cropHeight };
            }
            else {
                tempRatio = imageSizeRef.current.width / cropWidth;
                tempImageSize = { width: cropWidth, height: imageSizeRef.current.height / tempRatio };
            }
            setCropSize({ width: cropWidth, height: cropHeight });
            setImageSize(tempImageSize);
            setRatio(tempRatio);
            emitCropData(tempImageSize, { width: cropWidth, height: cropHeight }, tempRatio);
        }
    };
    var initialCroppedAreaFunction = function (tempImageSize, tempRatio) {
        setCompleteInitial(true);
        if (initialCroppedArea === undefined)
            return;
        var _a = getInitialCropFromCroppedAreaPixels(initialCroppedArea, cropSize, tempImageSize, tempRatio), initialCrop = _a.initialCrop, initialZoom = _a.initialZoom;
        zoomRef.current = initialZoom;
        cropRef.current = initialCrop;
        setCrop(function () { return cropRef.current; });
    };
    var cropInit = function () {
        cropRef.current.x = 0;
        cropRef.current.y = 0;
        zoomRef.current = 1;
        setCrop(function (crop) { return (__assign(__assign({}, crop), { x: 0, y: 0 })); });
    };
    var getMousePoint = function (e) { return ({
        x: Number(e.clientX),
        y: Number(e.clientY),
    }); };
    var getTouchPoint = function (touch) { return ({
        x: Number(touch.clientX),
        y: Number(touch.clientY),
    }); };
    var getPointOnContainer = function (_a) {
        var x = _a.x, y = _a.y;
        if (containerRef.current) {
            return {
                x: containerRef.current.offsetWidth / 2 - (x - containerRef.current.offsetLeft),
                y: containerRef.current.offsetHeight / 2 - (y - containerRef.current.offsetTop),
            };
        }
        return {
            x: 0,
            y: 0,
        };
    };
    var getPointOnMedia = function (_a) {
        var x = _a.x, y = _a.y;
        return ({
            x: (x + crop.x) / zoomRef.current,
            y: (y + crop.y) / zoomRef.current,
        });
    };
    var cleanEvents = function () {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onDragStopped);
        document.removeEventListener('touchmove', onTouchMove);
        document.removeEventListener('touchend', onDragStopped);
    };
    var onDragStopped = function () {
        cleanEvents();
        emitCropData();
        setOnEvent(false);
        setCrop(function () { return cropRef.current; });
        onTouch.current = false;
    };
    var emitCropData = function (imageSizeProps, cropSizeProps, ratioProps) {
        if (imageSizeProps === void 0) { imageSizeProps = imageSize; }
        if (cropSizeProps === void 0) { cropSizeProps = cropSize; }
        if (ratioProps === void 0) { ratioProps = ratio; }
        var cropX = (((imageSizeProps.width * zoomRef.current - cropSizeProps.width) / 2 - cropRef.current.x) *
            ratioProps) /
            zoomRef.current;
        var cropY = (((imageSizeProps.height * zoomRef.current - cropSizeProps.height) / 2 - cropRef.current.y) *
            ratioProps) /
            zoomRef.current;
        var cropWidth = (cropSizeProps.width * ratioProps) / zoomRef.current;
        var cropHeight = (cropSizeProps.height * ratioProps) / zoomRef.current;
        var emitCropSize = {
            x: cropX,
            y: cropY,
            width: cropWidth,
            height: cropHeight,
        };
        onCropComplete(emitCropSize);
    };
    var onMouseDown = function (e) {
        e.preventDefault();
        setOnEvent(true);
        dragStartPosition.current.x = e.clientX - crop.x;
        dragStartPosition.current.y = e.clientY - crop.y;
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onDragStopped);
    };
    var onMouseMove = function (e) {
        var requestedPosition = {
            x: e.clientX - dragStartPosition.current.x,
            y: e.clientY - dragStartPosition.current.y,
        };
        var newPosition = restrictPosition(requestedPosition, cropSize, imageSize, zoomRef.current);
        var newFlexiblePosition = flexiblePosition(requestedPosition, cropSize, imageSize, zoomRef.current);
        setCrop(newFlexiblePosition);
        cropRef.current = newPosition;
    };
    var setNewZoom = function (zoom, point) {
        var zoomPoint = getPointOnContainer(point);
        var zoomTarget = getPointOnMedia(zoomPoint);
        var newZoom = clamp(zoom, minZoom, maxZoom);
        var requestedPosition = {
            x: zoomTarget.x * newZoom - zoomPoint.x,
            y: zoomTarget.y * newZoom - zoomPoint.y,
        };
        var newPosition = restrictPosition(requestedPosition, cropSize, imageSize, newZoom);
        setCrop(newPosition);
        onZoomChange(newZoom);
        zoomRef.current = newZoom;
        cropRef.current = newPosition;
    };
    var onWheel = function (e) {
        var point = getMousePoint(e);
        var pixelY = normalizeWheel(e).pixelY;
        var newZoom = zoomRef.current - pixelY / 200;
        setNewZoom(newZoom, point);
        emitCropData();
    };
    var onTouchStart = function (e) {
        document.addEventListener('touchmove', onTouchMove, { passive: false });
        document.addEventListener('touchend', onDragStopped);
        onTouch.current = true;
        if (e.touches.length === 2) {
            onPinchStart(e);
        }
        else if (e.touches.length === 1) {
            onDragStart(getTouchPoint(e.touches[0]));
        }
    };
    var onTouchMove = function (e) {
        // Prevent whole page from scrolling on iOS.
        if (e.cancelable)
            e.preventDefault();
        setOnEvent(true);
        if (e.touches.length === 2) {
            onPinchMove(e);
        }
        else if (e.touches.length === 1) {
            onDrag(getTouchPoint(e.touches[0]));
        }
    };
    var onDragStart = function (_a) {
        var x = _a.x, y = _a.y;
        dragStartPosition.current.x = x - crop.x;
        dragStartPosition.current.y = y - crop.y;
    };
    var onDrag = function (_a) {
        var x = _a.x, y = _a.y;
        if (rafDragTimeout.current != null)
            window.cancelAnimationFrame(rafDragTimeout.current);
        rafDragTimeout.current = window.requestAnimationFrame(function () {
            if (x === undefined || y === undefined)
                return;
            if (!onTouch.current)
                return;
            var requestedPosition = {
                x: x - dragStartPosition.current.x,
                y: y - dragStartPosition.current.y,
            };
            var newPosition = restrictPosition(requestedPosition, cropSize, imageSize, zoomRef.current);
            var newFlexiblePosition = flexiblePosition(requestedPosition, cropSize, imageSize, zoomRef.current);
            setCrop(newFlexiblePosition);
            cropRef.current = newPosition;
        });
    };
    var onPinchStart = function (e) {
        var pointA = getTouchPoint(e.touches[0]);
        var pointB = getTouchPoint(e.touches[1]);
        lastPinchDistance.current = getDistanceBetweenPoints(pointA, pointB);
        onDragStart(getCenter(pointA, pointB));
    };
    var onPinchMove = function (e) {
        e.preventDefault();
        var pointA = getTouchPoint(e.touches[0]);
        var pointB = getTouchPoint(e.touches[1]);
        var center = getCenter(pointA, pointB);
        onDrag(center);
        if (rafPinchTimeout.current != null)
            window.cancelAnimationFrame(rafPinchTimeout.current);
        rafPinchTimeout.current = window.requestAnimationFrame(function () {
            var distance = getDistanceBetweenPoints(pointA, pointB);
            var newZoom = zoomRef.current * (distance / lastPinchDistance.current);
            setNewZoom(newZoom, center);
            lastPinchDistance.current = distance;
        });
    };
    return (React__default["default"].createElement("div", { className: "cropper-container", ref: containerRef, onMouseDown: function (e) { return onMouseDown(e); }, onTouchStart: function (e) { return onTouchStart(e); }, onWheel: function (e) { return onWheel(e); }, style: {
            width: "".concat(width === 0 ? (aspect > 1 ? "".concat(100 / aspect, "%") : '100%') : "".concat(cropSize.width, "px")),
            height: "".concat(cropSize.height === 0 ? '100%' : "".concat(cropSize.height, "px")),
            cursor: "".concat(onEvent ? 'grabbing' : 'grab'),
        } },
        React__default["default"].createElement("div", { className: "cropper-image", ref: imageRef, style: {
                width: "".concat(imageSize.width, "px"),
                height: "".concat(imageSize.height, "px"),
                backgroundImage: "url(".concat(src, ")"),
                transform: "translate(".concat(crop.x, "px, ").concat(crop.y, "px) scale(").concat(zoomRef.current, ")"),
                transition: "transform ".concat(onEvent ? '0' : completeInitial ? '0' : '0.2', "s"),
                opacity: "".concat(completeInitial ? '1' : '0'),
            } }),
        React__default["default"].createElement("div", { className: "cropper-area", style: { display: "".concat(onEvent ? 'block' : 'none') } })));
};

exports.Cropper = Cropper;
exports.getCroppedImg = getCroppedImg;
//# sourceMappingURL=index.cjs.js.map
