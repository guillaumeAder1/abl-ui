'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var core = require('@emotion/core');
require('@emotion/styled');

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|calc|counters?|url)\(/;
  var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (process.env.NODE_ENV !== 'production' && couldBeSelectorInterpolation && shouldWarnAboutInterpolatingClassNameFromCss && cached !== undefined) {
    console.error('Interpolating a className from css`` is not recommended and will cause problems with composition.\n' + 'Interpolating a className from css`` will be completely unsupported in a future major version of Emotion');
    shouldWarnAboutInterpolatingClassNameFromCss = false;
  }

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var testOmitPropsOnStringTag = index;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme' && key !== 'innerRef';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var ILLEGAL_ESCAPE_SEQUENCE_ERROR$1 = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var isBrowser$1 = typeof document !== 'undefined';

var createStyled = function createStyled(tag, options) {
  if (process.env.NODE_ENV !== 'production') {
    if (tag === undefined) {
      throw new Error('You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.');
    }
  }

  var identifierName;
  var shouldForwardProp;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp = tag.__emotion_forwardProp && options.shouldForwardProp ? function (propName) {
      return tag.__emotion_forwardProp(propName) && // $FlowFixMe
      options.shouldForwardProp(propName);
    } : options.shouldForwardProp;
  }

  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== undefined ? tag.__emotion_styles.slice(0) : [];

    if (identifierName !== undefined) {
      styles.push("label:" + identifierName + ";");
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      if (process.env.NODE_ENV !== 'production' && args[0][0] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
      }

      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        if (process.env.NODE_ENV !== 'production' && args[0][i] === undefined) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR$1);
        }

        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class


    var Styled = core.withEmotionCache(function (props, context, ref) {
      return React.createElement(core.ThemeContext.Consumer, null, function (theme) {
        var finalTag = shouldUseAs && props.as || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;

        if (props.theme == null) {
          mergedProps = {};

          for (var key in props) {
            mergedProps[key] = props[key];
          }

          mergedProps.theme = theme;
        }

        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + " ";
        }

        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + "-" + serialized.name;

        if (targetClassName !== undefined) {
          className += " " + targetClassName;
        }

        var finalShouldForwardProp = shouldUseAs && shouldForwardProp === undefined ? getDefaultShouldForwardProp(finalTag) : defaultShouldForwardProp;
        var newProps = {};

        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;

          if ( // $FlowFixMe
          finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }

        newProps.className = className;
        newProps.ref = ref || props.innerRef;

        if (process.env.NODE_ENV !== 'production' && props.innerRef) {
          console.error('`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' + (identifierName === undefined ? '' : " in the usage of `" + identifierName + "`"));
        }

        var ele = React.createElement(finalTag, newProps);

        if (!isBrowser$1 && rules !== undefined) {
          var _ref;

          var serializedNames = serialized.name;
          var next = serialized.next;

          while (next !== undefined) {
            serializedNames += ' ' + next.name;
            next = next.next;
          }

          return React.createElement(React.Fragment, null, React.createElement("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
            __html: rules
          }, _ref.nonce = context.sheet.nonce, _ref)), ele);
        }

        return ele;
      });
    });
    Styled.displayName = identifierName !== undefined ? identifierName : "Styled(" + (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && process.env.NODE_ENV !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string


        return "." + targetClassName;
      }
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(nextTag, nextOptions !== undefined ? _objectSpread({}, options || {}, {}, nextOptions) : options).apply(void 0, styles);
    };

    return Styled;
  };
};

var orange = {
  _300: '#FFB534',
  _500: '#FF9F1C',
  _800: '#C56F14'
};
var gray = {
  _100: '#E0EFF1',
  _200: '#C0CED6',
  _500: '#A0AEBA',
  _600: '#6f7d91',
  _800: '#282F48',
  _900: '#10132D'
};
var theme = {
  primary: {
    light: orange._300,
    main: orange._500,
    dark: orange._800
  },
  bg: {
    light: gray._200,
    main: gray._500,
    dark: gray._600
  },
  font: {
    main: gray._800
  },
  border: {
    main: gray._900
  }
};
var font = /*#__PURE__*/core.css("fontFamily:'helvetica, arial',fontSize:12,color:'", theme.font.main, "',;label:font;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0N1QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udEZhbWlseTogJ2hlbHZldGljYSwgYXJpYWwnLFxuXHRmb250U2l6ZTogMTIsXG5cdGNvbG9yOiAnJHt0aGVtZS5mb250Lm1haW59JyxcbmA7XG5leHBvcnQgY29uc3QgYmFzZUJsb2NrID0gY3NzYFxuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYmcuZGFya307XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iZy5tYWlufTtcbmA7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gY3NzYFxuXHQke2Jhc2VCbG9ja31cblx0cGFkZGluZzogMnB4IDNweDtcblx0OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wcmltYXJ5Lm1haW59O1xuXHR9XG5cdDpmb2N1cyB7XG5cdFx0b3V0bGluZTogMnB4IHNvbGlkICR7dGhlbWUuYmcubGlnaHR9O1xuXHR9XG5gO1xuIl19 */"));
var baseBlock = /*#__PURE__*/core.css("padding:5px;border:1px solid ", theme.bg.dark, ";border-radius:0px;background-color:", theme.bg.main, ";;label:baseBlock;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUM0QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udEZhbWlseTogJ2hlbHZldGljYSwgYXJpYWwnLFxuXHRmb250U2l6ZTogMTIsXG5cdGNvbG9yOiAnJHt0aGVtZS5mb250Lm1haW59JyxcbmA7XG5leHBvcnQgY29uc3QgYmFzZUJsb2NrID0gY3NzYFxuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYmcuZGFya307XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iZy5tYWlufTtcbmA7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gY3NzYFxuXHQke2Jhc2VCbG9ja31cblx0cGFkZGluZzogMnB4IDNweDtcblx0OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wcmltYXJ5Lm1haW59O1xuXHR9XG5cdDpmb2N1cyB7XG5cdFx0b3V0bGluZTogMnB4IHNvbGlkICR7dGhlbWUuYmcubGlnaHR9O1xuXHR9XG5gO1xuIl19 */"));
var button = /*#__PURE__*/core.css(baseBlock, " padding:2px 3px;:active{background-color:", theme.primary.main, ";}:focus{outline:2px solid ", theme.bg.light, ";};label:button;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0N5QiIsImZpbGUiOiJ2YXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmNvbnN0IG9yYW5nZSA9IHtcblx0XzMwMDogJyNGRkI1MzQnLFxuXHRfNTAwOiAnI0ZGOUYxQycsXG5cdF84MDA6ICcjQzU2RjE0Jyxcbn07XG5jb25zdCBncmF5ID0ge1xuXHRfMTAwOiAnI0UwRUZGMScsXG5cdF8yMDA6ICcjQzBDRUQ2Jyxcblx0XzUwMDogJyNBMEFFQkEnLFxuXHRfNjAwOiAnIzZmN2Q5MScsXG5cdF84MDA6ICcjMjgyRjQ4Jyxcblx0XzkwMDogJyMxMDEzMkQnLFxufTtcblxuXG5leHBvcnQgY29uc3QgdGhlbWUgPSB7XG5cdHByaW1hcnk6IHtcblx0XHRsaWdodDogb3JhbmdlLl8zMDAsXG5cdFx0bWFpbjogb3JhbmdlLl81MDAsXG5cdFx0ZGFyazogb3JhbmdlLl84MDAsXG5cdH0sXG5cdGJnOiB7XG5cdFx0bGlnaHQ6IGdyYXkuXzIwMCxcblx0XHRtYWluOiBncmF5Ll81MDAsXG5cdFx0ZGFyazogZ3JheS5fNjAwLFx0XHRcblx0fSxcblx0Zm9udDoge1xuXHRcdG1haW46IGdyYXkuXzgwMCxcblx0fSxcblx0Ym9yZGVyOiB7XG5cdFx0bWFpbjogZ3JheS5fOTAwLFxuXHR9XG59O1xuXG5leHBvcnQgY29uc3QgZm9udCA9IGNzc2Bcblx0Zm9udEZhbWlseTogJ2hlbHZldGljYSwgYXJpYWwnLFxuXHRmb250U2l6ZTogMTIsXG5cdGNvbG9yOiAnJHt0aGVtZS5mb250Lm1haW59JyxcbmA7XG5leHBvcnQgY29uc3QgYmFzZUJsb2NrID0gY3NzYFxuXHRwYWRkaW5nOiA1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7dGhlbWUuYmcuZGFya307XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5iZy5tYWlufTtcbmA7XG5leHBvcnQgY29uc3QgYnV0dG9uID0gY3NzYFxuXHQke2Jhc2VCbG9ja31cblx0cGFkZGluZzogMnB4IDNweDtcblx0OmFjdGl2ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wcmltYXJ5Lm1haW59O1xuXHR9XG5cdDpmb2N1cyB7XG5cdFx0b3V0bGluZTogMnB4IHNvbGlkICR7dGhlbWUuYmcubGlnaHR9O1xuXHR9XG5gO1xuIl19 */"));

var Wrapper = createStyled("button", {
  target: "ewlf0ji0",
  label: "Wrapper"
})(font, " ", button, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLNkIiLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGZvbnQsIGJ1dHRvbiB9IGZyb20gJ3N0eWxlL3ZhcnMnO1xuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuYnV0dG9uYFxuICAke2ZvbnR9XG4gICR7YnV0dG9ufVxuYDtcbmNvbnN0IEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4ge1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHt9O1xuXHRyZXR1cm4gKFxuXHRcdDxXcmFwcGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+e2NoaWxkcmVufTwvV3JhcHBlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXX0= */");

var Button = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var handleClick = function handleClick() {};

  return /*#__PURE__*/React__default.createElement(Wrapper, {
    onClick: handleClick
  }, children);
};

var Wrapper$1 = createStyled("select", {
  target: "eljvfqn0",
  label: "Wrapper"
})(font, " ", button, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLNkIiLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IGZvbnQsIGJ1dHRvbiB9IGZyb20gJ3N0eWxlL3ZhcnMnO1xuXG5cbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuc2VsZWN0YFxuXHQke2ZvbnR9XG5cdCR7YnV0dG9ufVxuYDtcbmNvbnN0IEJ1dHRvbiA9ICh7Y2hpbGRyZW4sIC4uLnByb3BzfSkgPT4ge1xuXHRjb25zb2xlLndhcm4ocHJvcHMpO1xuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHt9O1xuXHRyZXR1cm4gKFxuXHRcdDxXcmFwcGVyIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSA+e2NoaWxkcmVufTwvV3JhcHBlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjsiXX0= */");

var Button$1 = function Button(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  console.warn(props);

  var handleClick = function handleClick() {};

  return /*#__PURE__*/React__default.createElement(Wrapper$1, {
    onClick: handleClick
  }, children);
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var paragraph = process.env.NODE_ENV === "production" ? {
  name: "183ava7-paragraph",
  styles: "color:turquoise;border-bottom:1px solid currentColor;cursor:pointer;;label:paragraph;"
} : {
  name: "183ava7-paragraph",
  styles: "color:turquoise;border-bottom:1px solid currentColor;cursor:pointer;;label:paragraph;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNcUIiLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgZm9udCB9IGZyb20gJ3N0eWxlL3ZhcnMnO1xuaW1wb3J0IHsganN4LCBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcblxuY29uc3QgcGFyYWdyYXBoID0gY3NzYFxuICBjb2xvcjogdHVycXVvaXNlO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5gO1xuY29uc3QgU2xpZGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxzdHlsZT57YFxuXHRcdFx0XHRcdC5zbGlkZXIge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdGhlaWdodDogMTMwcHg7XG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDQwcHg7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDJweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnNlY3Rpb24ge1xuXHRcdFx0XHRcdFx0ZmxleDogMSAxIDM1JTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kOiBncmV5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYmFye1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdFx0ZmxleC1iYXNpczogNDclO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjpibGFjaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnNjYWxle1xuXHRcdFx0XHRcdFx0Ly8gZmxleDogMSAxIDEwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHRcdHdpZHRoOiA1cHg7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LnRpY2sge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAycHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5udW1iZXJ7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogaGVsdmV0aWNhO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogZW5kO1xuXHRcdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDxkaXYgIGNsYXNzTmFtZT1cInNsaWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhclwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNjYWxlXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aWNrXCI+PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNzcz17Zm9udH0gY2xhc3NOYW1lPVwic2VjdGlvbiBudW1iZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPjEwMDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+NzU8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIlwiPjUwPC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJcIj4yNTwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+MDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG59O1xuIFxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyOyJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Slider = function Slider() {
  return core.jsx(React__default.Fragment, null, core.jsx("style", null, "\n\t\t\t\t\t.slider {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\theight: 130px;\n\t\t\t\t\t\tmax-width: 40px;\n\t\t\t\t\t\tborder: 1px solid black;\n\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\tpadding: 2px;\n\t\t\t\t\t}\n\t\t\t\t\t.section {\n\t\t\t\t\t\tflex: 1 1 35%;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\t// background: grey;\n\t\t\t\t\t}\n\t\t\t\t\t.bar{\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\tflex-basis: 47%;\n\t\t\t\t\t\tbackground-color:black;\n\t\t\t\t\t}\n\t\t\t\t\t.scale{\n\t\t\t\t\t\t// flex: 1 1 10%;\n\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\twidth: 5px;\n\t\t\t\t\t\t// background: orange;\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tjustify-content: space-between;\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t}\n\t\t\t\t\t.tick {\n\t\t\t\t\t\tmargin: 2px;\n\t\t\t\t\t\theight: 1px;\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\tbackground: black;\n\t\t\t\t\t}\n\t\t\t\t\t.number{\n\t\t\t\t\t\tflex-direction: column;\n\t\t\t\t\t\tfont-size: 10px;\n\t\t\t\t\t\tline-height: 10px;\n\t\t\t\t\t\tfont-family: helvetica;\n\t\t\t\t\t\ttext-align: end;\n\t\t\t\t\t}\n\t\t\t"), core.jsx("div", {
    className: "slider"
  }, core.jsx("div", {
    className: "section"
  }, core.jsx("div", {
    className: "bar"
  }), core.jsx("div", {
    className: "bar"
  })), core.jsx("div", {
    className: "scale"
  }, core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  }), core.jsx("div", {
    className: "tick"
  })), core.jsx("div", {
    css: font,
    className: "section number"
  }, core.jsx("div", {
    className: ""
  }, "100"), core.jsx("div", {
    className: ""
  }, "75"), core.jsx("div", {
    className: ""
  }, "50"), core.jsx("div", {
    className: ""
  }, "25"), core.jsx("div", {
    className: ""
  }, "0"))));
};

var Wrapper$2 = createStyled("div", {
  target: "e14hw9va0",
  label: "Wrapper"
})(baseBlock, " width:100px;height:200px;display:flex;flex-direction:column;justify-content:space-between;> div{display:flex;justify-content:space-between;}.slider{background:red;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU8wQiIsImZpbGUiOiJCbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IFNsaWRlciBmcm9tICcuL1NsaWRlcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBiYXNlQmxvY2sgfSBmcm9tICdzdHlsZS92YXJzJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG5cdCR7YmFzZUJsb2NrfVxuXHR3aWR0aDogMTAwcHg7XG5cdGhlaWdodDogMjAwcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0PiBkaXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG5cdC5zbGlkZXJ7IFxuXHRcdGJhY2tncm91bmQ6cmVkO1xuXHR9XG5gO1xuXG5jb25zdCBCdXR0b25TZWxlY3QgPSAoKSA9PiAoXG5cdDxXcmFwcGVyPlxuXHRcdDxTZWxlY3Q+PG9wdGlvbj52YWx1ZTwvb3B0aW9uPjwvU2VsZWN0PlxuXHRcdDxTbGlkZXIgLz5cblx0XHQ8ZGl2PlxuXHRcdFx0PEJ1dHRvbiB0ZXh0PSdPbic+b248L0J1dHRvbj5cblx0XHRcdDxCdXR0b24gdGV4dD0nT24nPm9wdGlvbjwvQnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQ8L1dyYXBwZXI+XG4pO1xuZXhwb3J0IGRlZmF1bHQgQnV0dG9uU2VsZWN0OyJdfQ== */"));

var ButtonSelect = function ButtonSelect() {
  return /*#__PURE__*/React__default.createElement(Wrapper$2, null, /*#__PURE__*/React__default.createElement(Button$1, null, /*#__PURE__*/React__default.createElement("option", null, "value")), /*#__PURE__*/React__default.createElement(Slider, null), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Button, {
    text: "On"
  }, "on"), /*#__PURE__*/React__default.createElement(Button, {
    text: "On"
  }, "option")));
};

exports.Block = ButtonSelect;
exports.Button = Button;
exports.Select = Button$1;
exports.Slider = Slider;
