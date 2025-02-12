/**
 * Copyright (C) 2023 salesforce.com, inc.
 */
/**
 * Copyright (C) 2023 salesforce.com, inc.
 */
/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function invariant(value, msg) {
  if (!value) {
    throw new Error(`Invariant Violation: ${msg}`);
  }
}
function isTrue$1(value, msg) {
  if (!value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
function isFalse$1(value, msg) {
  if (value) {
    throw new Error(`Assert Violation: ${msg}`);
  }
}
function fail(msg) {
  throw new Error(msg);
}
var assert = /*#__PURE__*/Object.freeze({
  __proto__: null,
  fail: fail,
  invariant: invariant,
  isFalse: isFalse$1,
  isTrue: isTrue$1
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const {
  assign,
  create,
  defineProperties,
  defineProperty,
  freeze,
  getOwnPropertyDescriptor: getOwnPropertyDescriptor$1,
  getOwnPropertyDescriptors,
  getOwnPropertyNames: getOwnPropertyNames$1,
  getPrototypeOf: getPrototypeOf$1,
  hasOwnProperty: hasOwnProperty$1,
  isFrozen,
  keys,
  seal,
  setPrototypeOf
} = Object;
const {
  isArray: isArray$1
} = Array;
const {
  concat: ArrayConcat$1,
  copyWithin: ArrayCopyWithin,
  every: ArrayEvery,
  fill: ArrayFill,
  filter: ArrayFilter,
  find: ArrayFind,
  findIndex: ArrayFindIndex,
  includes: ArrayIncludes,
  indexOf: ArrayIndexOf,
  join: ArrayJoin,
  map: ArrayMap,
  pop: ArrayPop,
  push: ArrayPush$1,
  reduce: ArrayReduce,
  reverse: ArrayReverse,
  shift: ArrayShift,
  slice: ArraySlice,
  some: ArraySome,
  sort: ArraySort,
  splice: ArraySplice,
  unshift: ArrayUnshift,
  forEach
} = Array.prototype;
// The type of the return value of Array.prototype.every is `this is T[]`. However, once this
// Array method is pulled out of the prototype, the function is now referencing `this` where
// `this` is meaningless, resulting in a TypeScript compilation error.
//
// Exposing this helper function is the closest we can get to preserving the usage patterns
// of Array.prototype methods used elsewhere in the codebase.
function arrayEvery(arr, predicate) {
  return ArrayEvery.call(arr, predicate);
}
const {
  fromCharCode: StringFromCharCode
} = String;
const {
  charCodeAt: StringCharCodeAt,
  replace: StringReplace,
  split: StringSplit,
  slice: StringSlice,
  toLowerCase: StringToLowerCase
} = String.prototype;
function isUndefined$1(obj) {
  return obj === undefined;
}
function isNull(obj) {
  return obj === null;
}
function isTrue(obj) {
  return obj === true;
}
function isFalse(obj) {
  return obj === false;
}
function isBoolean(obj) {
  return typeof obj === 'boolean';
}
function isFunction$1(obj) {
  return typeof obj === 'function';
}
function isObject(obj) {
  return typeof obj === 'object';
}
function isString(obj) {
  return typeof obj === 'string';
}
function isNumber(obj) {
  return typeof obj === 'number';
}
function noop() {
  /* Do nothing */
}
const OtS$1 = {}.toString;
function toString$1(obj) {
  if (obj && obj.toString) {
    // Arrays might hold objects with "null" prototype So using
    // Array.prototype.toString directly will cause an error Iterate through
    // all the items and handle individually.
    if (isArray$1(obj)) {
      return ArrayJoin.call(ArrayMap.call(obj, toString$1), ',');
    }
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS$1.call(obj);
  } else {
    return obj + '';
  }
}
function getPropertyDescriptor(o, p) {
  do {
    const d = getOwnPropertyDescriptor$1(o, p);
    if (!isUndefined$1(d)) {
      return d;
    }
    o = getPrototypeOf$1(o);
  } while (o !== null);
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// These must be updated when the enum is updated.
// It's a bit annoying to do have to do this manually, but this makes the file tree-shakeable,
// passing the `verify-treeshakeable.js` test.
const LOWEST_API_VERSION = 58 /* APIVersion.V58_244_SUMMER_23 */;
function isAPIFeatureEnabled(apiVersionFeature, apiVersion) {
  switch (apiVersionFeature) {
    case 0 /* APIFeature.LOWERCASE_SCOPE_TOKENS */:
    case 1 /* APIFeature.TREAT_ALL_PARSE5_ERRORS_AS_ERRORS */:
      return apiVersion >= 59 /* APIVersion.V59_246_WINTER_24 */;
    case 2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */:
    case 3 /* APIFeature.DISABLE_OBJECT_REST_SPREAD_TRANSFORMATION */:
    case 4 /* APIFeature.SKIP_UNNECESSARY_REGISTER_DECORATORS */:
    case 5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */:
      return apiVersion >= 60 /* APIVersion.V60_248_SPRING_24 */;
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * According to the following list, there are 48 aria attributes of which two (ariaDropEffect and
 * ariaGrabbed) are deprecated:
 * https://www.w3.org/TR/wai-aria-1.1/#x6-6-definitions-of-states-and-properties-all-aria-attributes
 *
 * The above list of 46 aria attributes is consistent with the following resources:
 * https://github.com/w3c/aria/pull/708/files#diff-eacf331f0ffc35d4b482f1d15a887d3bR11060
 * https://wicg.github.io/aom/spec/aria-reflection.html
 *
 * NOTE: If you update this list, please update test files that implicitly reference this list!
 * Searching the codebase for `aria-flowto` and `ariaFlowTo` should be good enough to find all usages.
 */
const AriaPropertyNames = ['ariaActiveDescendant', 'ariaAtomic', 'ariaAutoComplete', 'ariaBusy', 'ariaChecked', 'ariaColCount', 'ariaColIndex', 'ariaColIndexText', 'ariaColSpan', 'ariaControls', 'ariaCurrent', 'ariaDescribedBy', 'ariaDescription', 'ariaDetails', 'ariaDisabled', 'ariaErrorMessage', 'ariaExpanded', 'ariaFlowTo', 'ariaHasPopup', 'ariaHidden', 'ariaInvalid', 'ariaKeyShortcuts', 'ariaLabel', 'ariaLabelledBy', 'ariaLevel', 'ariaLive', 'ariaModal', 'ariaMultiLine', 'ariaMultiSelectable', 'ariaOrientation', 'ariaOwns', 'ariaPlaceholder', 'ariaPosInSet', 'ariaPressed', 'ariaReadOnly', 'ariaRelevant', 'ariaRequired', 'ariaRoleDescription', 'ariaRowCount', 'ariaRowIndex', 'ariaRowIndexText', 'ariaRowSpan', 'ariaSelected', 'ariaSetSize', 'ariaSort', 'ariaValueMax', 'ariaValueMin', 'ariaValueNow', 'ariaValueText', 'ariaBrailleLabel', 'ariaBrailleRoleDescription', 'role'];
const {
  AriaAttrNameToPropNameMap,
  AriaPropNameToAttrNameMap
} = /*@__PURE__*/(() => {
  const AriaAttrNameToPropNameMap = create(null);
  const AriaPropNameToAttrNameMap = create(null);
  // Synthetic creation of all AOM property descriptors for Custom Elements
  forEach.call(AriaPropertyNames, propName => {
    const attrName = StringToLowerCase.call(StringReplace.call(propName, /^aria/, () => 'aria-'));
    AriaAttrNameToPropNameMap[attrName] = propName;
    AriaPropNameToAttrNameMap[propName] = attrName;
  });
  return {
    AriaAttrNameToPropNameMap,
    AriaPropNameToAttrNameMap
  };
})();
// These attributes take either an ID or a list of IDs as values.
// This includes aria-* attributes as well as the special non-ARIA "for" attribute
const ID_REFERENCING_ATTRIBUTES_SET = /*@__PURE__*/new Set(['aria-activedescendant', 'aria-controls', 'aria-describedby', 'aria-details', 'aria-errormessage', 'aria-flowto', 'aria-labelledby', 'aria-owns', 'for']);

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// See browser support for globalThis:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility
/* istanbul ignore next */
// @ts-ignore
const _globalThis = typeof globalThis === 'object' ? globalThis : window;

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const KEY__SHADOW_RESOLVER = '$shadowResolver$';
const KEY__SHADOW_STATIC = '$shadowStaticNode$';
const KEY__SHADOW_TOKEN = '$shadowToken$';
const KEY__SYNTHETIC_MODE = '$$lwc-synthetic-mode';
const KEY__SCOPED_CSS = '$scoped$';
const KEY__NATIVE_GET_ELEMENT_BY_ID = '$nativeGetElementById$';
const KEY__NATIVE_QUERY_SELECTOR_ALL = '$nativeQuerySelectorAll$';
const XML_NAMESPACE = 'http://www.w3.org/XML/1998/namespace';
const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const XLINK_NAMESPACE = 'http://www.w3.org/1999/xlink';

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const CAMEL_REGEX = /-([a-z])/g;
// These are HTML standard prop/attribute IDL mappings, but are not predictable based on camel/kebab-case conversion
const SPECIAL_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map([['accessKey', 'accesskey'], ['readOnly', 'readonly'], ['tabIndex', 'tabindex'], ['bgColor', 'bgcolor'], ['colSpan', 'colspan'], ['rowSpan', 'rowspan'], ['contentEditable', 'contenteditable'], ['crossOrigin', 'crossorigin'], ['dateTime', 'datetime'], ['formAction', 'formaction'], ['isMap', 'ismap'], ['maxLength', 'maxlength'], ['minLength', 'minlength'], ['noValidate', 'novalidate'], ['useMap', 'usemap'], ['htmlFor', 'for']]);
/**
 * Map associating previously transformed HTML property into HTML attribute.
 */
const CACHED_PROPERTY_ATTRIBUTE_MAPPING = /*@__PURE__@*/new Map();
function htmlPropertyToAttribute(propName) {
  const ariaAttributeName = AriaPropNameToAttrNameMap[propName];
  if (!isUndefined$1(ariaAttributeName)) {
    return ariaAttributeName;
  }
  const specialAttributeName = SPECIAL_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(specialAttributeName)) {
    return specialAttributeName;
  }
  const cachedAttributeName = CACHED_PROPERTY_ATTRIBUTE_MAPPING.get(propName);
  if (!isUndefined$1(cachedAttributeName)) {
    return cachedAttributeName;
  }
  let attributeName = '';
  for (let i = 0, len = propName.length; i < len; i++) {
    const code = StringCharCodeAt.call(propName, i);
    if (code >= 65 &&
    // "A"
    code <= 90 // "Z"
    ) {
      attributeName += '-' + StringFromCharCode(code + 32);
    } else {
      attributeName += StringFromCharCode(code);
    }
  }
  CACHED_PROPERTY_ATTRIBUTE_MAPPING.set(propName, attributeName);
  return attributeName;
}
/**
 * Map associating previously transformed kabab-case attributes into camel-case props.
 */
const CACHED_KEBAB_CAMEL_MAPPING = /*@__PURE__@*/new Map();
function kebabCaseToCamelCase(attrName) {
  let result = CACHED_KEBAB_CAMEL_MAPPING.get(attrName);
  if (isUndefined$1(result)) {
    result = StringReplace.call(attrName, CAMEL_REGEX, g => g[1].toUpperCase());
    CACHED_KEBAB_CAMEL_MAPPING.set(attrName, result);
  }
  return result;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Increment whenever the LWC template compiler changes
const LWC_VERSION = "5.0.0";
const LWC_VERSION_COMMENT_REGEX = /\/\*LWC compiler v([\d.]+)\*\/\s*}/;
/** version: 5.0.0 */

/**
 * Copyright (C) 2023 salesforce.com, inc.
 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// When deprecating a feature flag, ensure that it is also no longer set in the application. For
// example, in core, the flag should be removed from LwcPermAndPrefUtilImpl.java
const features = {
  PLACEHOLDER_TEST_FLAG: null,
  ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST: null,
  ENABLE_MIXED_SHADOW_MODE: null,
  ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE: null,
  ENABLE_WIRE_SYNC_EMIT: null,
  DISABLE_LIGHT_DOM_UNSCOPED_CSS: null,
  ENABLE_FROZEN_TEMPLATE: null,
  ENABLE_LEGACY_SCOPE_TOKENS: null
};
// eslint-disable-next-line no-restricted-properties
if (!_globalThis.lwcRuntimeFlags) {
  Object.defineProperty(_globalThis, 'lwcRuntimeFlags', {
    value: create(null)
  });
}
// eslint-disable-next-line no-restricted-properties
const flags = _globalThis.lwcRuntimeFlags;
/**
 * Set the value at runtime of a given feature flag. This method only be invoked once per feature
 * flag. It is meant to be used during the app initialization.
 */
function setFeatureFlag(name, value) {
  if (!isBoolean(value)) {
    const message = `Failed to set the value "${value}" for the runtime feature flag "${name}". Runtime feature flags can only be set to a boolean value.`;
    if (process.env.NODE_ENV !== 'production') {
      throw new TypeError(message);
    } else {
      // eslint-disable-next-line no-console
      console.error(message);
      return;
    }
  }
  if (isUndefined$1(features[name])) {
    // eslint-disable-next-line no-console
    console.info(`Attempt to set a value on an unknown feature flag "${name}" resulted in a NOOP.`);
    return;
  }
  // This may seem redundant, but `process.env.NODE_ENV === 'test-karma-lwc'` is replaced by Karma tests
  if (process.env.NODE_ENV === 'test-karma-lwc' || process.env.NODE_ENV !== 'production') {
    // Allow the same flag to be set more than once outside of production to enable testing
    flags[name] = value;
  } else {
    // Disallow the same flag to be set more than once in production
    const runtimeValue = flags[name];
    if (!isUndefined$1(runtimeValue)) {
      // eslint-disable-next-line no-console
      console.error(`Failed to set the value "${value}" for the runtime feature flag "${name}". "${name}" has already been set with the value "${runtimeValue}".`);
      return;
    }
    defineProperty(flags, name, {
      value
    });
  }
}
/**
 * Set the value at runtime of a given feature flag. This method should only be used for testing
 * purposes. It is a no-op when invoked in production mode.
 */
function setFeatureFlagForTest(name, value) {
  // This may seem redundant, but `process.env.NODE_ENV === 'test-karma-lwc'` is replaced by Karma tests
  if (process.env.NODE_ENV === 'test-karma-lwc' || process.env.NODE_ENV !== 'production') {
    setFeatureFlag(name, value);
  }
}
/** version: 5.0.0 */

/**
 * Copyright (C) 2023 salesforce.com, inc.
 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const onReportingEnabledCallbacks = [];
/** The currently assigned reporting dispatcher. */
let currentDispatcher$1 = noop;
/**
 * Whether reporting is enabled.
 *
 * Note that this may seem redundant, given you can just check if the currentDispatcher is undefined,
 * but it turns out that Terser only strips out unused code if we use this explicit boolean.
 */
let enabled$1 = false;
const reportingControl = {
  /**
   * Attach a new reporting control (aka dispatcher).
   *
   * @param dispatcher - reporting control
   */
  attachDispatcher(dispatcher) {
    enabled$1 = true;
    currentDispatcher$1 = dispatcher;
    for (const callback of onReportingEnabledCallbacks) {
      try {
        callback();
      } catch (err) {
        // This should never happen. But if it does, we don't want one callback to cause another to fail
        // eslint-disable-next-line no-console
        console.error('Could not invoke callback', err);
      }
    }
    onReportingEnabledCallbacks.length = 0; // clear the array
  },
  /**
   * Detach the current reporting control (aka dispatcher).
   */
  detachDispatcher() {
    enabled$1 = false;
    currentDispatcher$1 = noop;
  }
};
/**
 * Call a callback when reporting is enabled, or immediately if reporting is already enabled.
 * Will only ever be called once.
 * @param callback
 */
function onReportingEnabled(callback) {
  if (enabled$1) {
    // call immediately
    callback();
  } else {
    // call later
    onReportingEnabledCallbacks.push(callback);
  }
}
/**
 * Report to the current dispatcher, if there is one.
 * @param reportingEventId
 * @param payload - data to report
 */
function report(reportingEventId, payload) {
  if (enabled$1) {
    currentDispatcher$1(reportingEventId, payload);
  }
}
/**
 * Return true if reporting is enabled
 */
function isReportingEnabled() {
  return enabled$1;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getComponentTag(vm) {
  return `<${StringToLowerCase.call(vm.tagName)}>`;
}
// TODO [#1695]: Unify getComponentStack and getErrorComponentStack
function getComponentStack(vm) {
  const stack = [];
  let prefix = '';
  while (!isNull(vm.owner)) {
    ArrayPush$1.call(stack, prefix + getComponentTag(vm));
    vm = vm.owner;
    prefix += '\t';
  }
  return ArrayJoin.call(stack, '\n');
}
function getErrorComponentStack(vm) {
  const wcStack = [];
  let currentVm = vm;
  while (!isNull(currentVm)) {
    ArrayPush$1.call(wcStack, getComponentTag(currentVm));
    currentVm = currentVm.owner;
  }
  return wcStack.reverse().join('\n\t');
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function addErrorComponentStack(vm, error) {
  if (!isFrozen(error) && isUndefined$1(error.wcStack)) {
    const wcStack = getErrorComponentStack(vm);
    defineProperty(error, 'wcStack', {
      get() {
        return wcStack;
      }
    });
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const alreadyLoggedMessages = new Set();
// Only used in LWC's Karma tests
if (process.env.NODE_ENV === 'test-karma-lwc') {
  // @ts-ignore
  window.__lwcResetAlreadyLoggedMessages = () => {
    alreadyLoggedMessages.clear();
  };
}
function log(method, message, vm, once) {
  let msg = `[LWC ${method}]: ${message}`;
  if (!isUndefined$1(vm)) {
    msg = `${msg}\n${getComponentStack(vm)}`;
  }
  if (once) {
    if (alreadyLoggedMessages.has(msg)) {
      return;
    }
    alreadyLoggedMessages.add(msg);
  }
  // In Jest tests, reduce the warning and error verbosity by not printing the callstack
  if (process.env.NODE_ENV === 'test') {
    /* eslint-disable-next-line no-console */
    console[method](msg);
    return;
  }
  try {
    throw new Error(msg);
  } catch (e) {
    /* eslint-disable-next-line no-console */
    console[method](e);
  }
}
function logError(message, vm) {
  log('error', message, vm, false);
}
function logWarn(message, vm) {
  log('warn', message, vm, false);
}
function logWarnOnce(message, vm) {
  log('warn', message, vm, true);
}

/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const TargetToReactiveRecordMap = new WeakMap();
function getReactiveRecord(target) {
  let reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (isUndefined$1(reactiveRecord)) {
    const newRecord = create(null);
    reactiveRecord = newRecord;
    TargetToReactiveRecordMap.set(target, newRecord);
  }
  return reactiveRecord;
}
let currentReactiveObserver = null;
function valueMutated(target, key) {
  const reactiveRecord = TargetToReactiveRecordMap.get(target);
  if (!isUndefined$1(reactiveRecord)) {
    const reactiveObservers = reactiveRecord[key];
    if (!isUndefined$1(reactiveObservers)) {
      for (let i = 0, len = reactiveObservers.length; i < len; i += 1) {
        const ro = reactiveObservers[i];
        ro.notify();
      }
    }
  }
}
function valueObserved(target, key) {
  // We should determine if an active Observing Record is present to track mutations.
  if (currentReactiveObserver === null) {
    return;
  }
  const ro = currentReactiveObserver;
  const reactiveRecord = getReactiveRecord(target);
  let reactiveObservers = reactiveRecord[key];
  if (isUndefined$1(reactiveObservers)) {
    reactiveObservers = [];
    reactiveRecord[key] = reactiveObservers;
  } else if (reactiveObservers[0] === ro) {
    return; // perf optimization considering that most subscriptions will come from the same record
  }
  if (ArrayIndexOf.call(reactiveObservers, ro) === -1) {
    ro.link(reactiveObservers);
  }
}
class ReactiveObserver {
  constructor(callback) {
    this.listeners = [];
    this.callback = callback;
  }
  observe(job) {
    const inceptionReactiveRecord = currentReactiveObserver;
    currentReactiveObserver = this;
    let error;
    try {
      job();
    } catch (e) {
      error = Object(e);
    } finally {
      currentReactiveObserver = inceptionReactiveRecord;
      if (error !== undefined) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
    }
  }
  /**
   * This method is responsible for disconnecting the Reactive Observer
   * from any Reactive Record that has a reference to it, to prevent future
   * notifications about previously recorded access.
   */
  reset() {
    const {
      listeners
    } = this;
    const len = listeners.length;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        const set = listeners[i];
        if (set.length === 1) {
          // Perf optimization for the common case - the length is usually 1, so avoid the indexOf+splice.
          // If the length is 1, we can also be sure that `this` is the first item in the array.
          set.length = 0;
        } else {
          // Slow case
          const pos = ArrayIndexOf.call(set, this);
          ArraySplice.call(set, pos, 1);
        }
      }
      listeners.length = 0;
    }
  }
  // friend methods
  notify() {
    this.callback.call(undefined, this);
  }
  link(reactiveObservers) {
    ArrayPush$1.call(reactiveObservers, this);
    // we keep track of observing records where the observing record was added to so we can do some clean up later on
    ArrayPush$1.call(this.listeners, reactiveObservers);
  }
}
function componentValueMutated(vm, key) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueMutated(vm.component, key);
  }
}
function componentValueObserved(vm, key) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    valueObserved(vm.component, key);
  }
}
function createReactiveObserver(callback) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return new ReactiveObserver(callback);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let nextTickCallbackQueue = [];
const SPACE_CHAR = 32;
const EmptyObject = seal(create(null));
const EmptyArray = seal([]);
function flushCallbackQueue() {
  if (process.env.NODE_ENV !== 'production') {
    if (nextTickCallbackQueue.length === 0) {
      throw new Error(`Internal Error: If callbackQueue is scheduled, it is because there must be at least one callback on this pending queue.`);
    }
  }
  const callbacks = nextTickCallbackQueue;
  nextTickCallbackQueue = []; // reset to a new queue
  for (let i = 0, len = callbacks.length; i < len; i += 1) {
    callbacks[i]();
  }
}
function addCallbackToNextTick(callback) {
  if (process.env.NODE_ENV !== 'production') {
    if (!isFunction$1(callback)) {
      throw new Error(`Internal Error: addCallbackToNextTick() can only accept a function callback`);
    }
  }
  if (nextTickCallbackQueue.length === 0) {
    Promise.resolve().then(flushCallbackQueue);
  }
  ArrayPush$1.call(nextTickCallbackQueue, callback);
}
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
// Borrowed from Vue template compiler.
// https://github.com/vuejs/vue/blob/531371b818b0e31a989a06df43789728f23dc4e8/src/platforms/web/util/style.js#L5-L16
const DECLARATION_DELIMITER = /;(?![^(]*\))/g;
const PROPERTY_DELIMITER = /:(.+)/;
function parseStyleText(cssText) {
  const styleMap = {};
  const declarations = cssText.split(DECLARATION_DELIMITER);
  for (const declaration of declarations) {
    if (declaration) {
      const [prop, value] = declaration.split(PROPERTY_DELIMITER);
      if (prop !== undefined && value !== undefined) {
        styleMap[prop.trim()] = value.trim();
      }
    }
  }
  return styleMap;
}
// Make a shallow copy of an object but omit the given key
function cloneAndOmitKey(object, keyToOmit) {
  const result = {};
  for (const key of keys(object)) {
    if (key !== keyToOmit) {
      result[key] = object[key];
    }
  }
  return result;
}
function flattenStylesheets(stylesheets) {
  const list = [];
  for (const stylesheet of stylesheets) {
    if (!isArray$1(stylesheet)) {
      list.push(stylesheet);
    } else {
      list.push(...flattenStylesheets(stylesheet));
    }
  }
  return list;
}
// Throw an error if we're running in prod mode. Ensures code is truly removed from prod mode.
function assertNotProd() {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }
}

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function resolveCircularModuleDependency(fn) {
  const module = fn();
  return (module === null || module === void 0 ? void 0 : module.__esModule) ? module.default : module;
}
function isCircularModuleDependency(obj) {
  return isFunction$1(obj) && hasOwnProperty$1.call(obj, '__circular__');
}
var _a, _b;
const instrumentDef = (_a = _globalThis.__lwc_instrument_cmp_def) !== null && _a !== void 0 ? _a : noop;
const instrumentInstance = (_b = _globalThis.__lwc_instrument_cmp_instance) !== null && _b !== void 0 ? _b : noop;

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Apply ARIA string reflection behavior to a prototype.
// This is deliberately kept separate from @lwc/aria-reflection. @lwc/aria-reflection is a global polyfill that is
// needed for backwards compatibility in LEX, whereas `applyAriaReflection` is designed to only apply to our own
// LightningElement/BaseBridgeElement prototypes.
function applyAriaReflection(prototype) {
  for (const propName of keys(AriaPropNameToAttrNameMap)) {
    const attrName = AriaPropNameToAttrNameMap[propName];
    if (isUndefined$1(getOwnPropertyDescriptor$1(prototype, propName))) {
      // Note that we need to call this.{get,set,has,remove}Attribute rather than dereferencing
      // from Element.prototype, because these methods are overridden in LightningElement.
      defineProperty(prototype, propName, {
        get() {
          return this.getAttribute(attrName);
        },
        set(newValue) {
          // TODO [#3284]: there is disagreement between browsers and the spec on how to treat undefined
          // Our historical behavior is to only treat null as removing the attribute
          // See also https://github.com/w3c/aria/issues/1858
          if (isNull(newValue)) {
            this.removeAttribute(attrName);
          } else {
            this.setAttribute(attrName, newValue);
          }
        },
        // configurable and enumerable to allow it to be overridden – this mimics Safari's/Chrome's behavior
        configurable: true,
        enumerable: true
      });
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// This is a temporary workaround to get the @lwc/engine-server to evaluate in node without having
// to inject at runtime.
const HTMLElementConstructor = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};
const HTMLElementPrototype = HTMLElementConstructor.prototype;

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// These properties get added to LWCElement.prototype publicProps automatically
const defaultDefHTMLPropertyNames = ['accessKey', 'dir', 'draggable', 'hidden', 'id', 'lang', 'spellcheck', 'tabIndex', 'title'];

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This is a descriptor map that contains
 * all standard properties that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base HTML Element and
 * Base Lightning Element should support.
 */
const HTMLElementOriginalDescriptors = create(null);
forEach.call(keys(AriaPropNameToAttrNameMap), propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, some properties are on Element.prototype instead of HTMLElement, just to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});
forEach.call(defaultDefHTMLPropertyNames, propName => {
  // Note: intentionally using our in-house getPropertyDescriptor instead of getOwnPropertyDescriptor here because
  // in IE11, id property is on Element.prototype instead of HTMLElement, and we suspect that more will fall into
  // this category, so, better to be sure.
  const descriptor = getPropertyDescriptor(HTMLElementPrototype, propName);
  if (!isUndefined$1(descriptor)) {
    HTMLElementOriginalDescriptors[propName] = descriptor;
  }
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/* eslint @lwc/lwc-internal/no-production-assert: "off" */
function generateDataDescriptor(options) {
  return assign({
    configurable: true,
    enumerable: true,
    writable: true
  }, options);
}
function generateAccessorDescriptor(options) {
  return assign({
    configurable: true,
    enumerable: true
  }, options);
}
let isDomMutationAllowed = false;
function unlockDomMutation() {
  assertNotProd(); // this method should never leak to prod
  isDomMutationAllowed = true;
}
function lockDomMutation() {
  assertNotProd(); // this method should never leak to prod
  isDomMutationAllowed = false;
}
function logMissingPortalWarn(name, type) {
  return logWarn(`The \`${name}\` ${type} is available only on elements that use the \`lwc:dom="manual"\` directive.`);
}
function patchElementWithRestrictions(elm, options) {
  assertNotProd(); // this method should never leak to prod
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const descriptors = {
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set outerHTML on Element.`);
        return originalOuterHTMLDescriptor.set.call(this, value);
      }
    })
  };
  // Apply extra restriction related to DOM manipulation if the element is not a portal.
  if (!options.isLight && options.isSynthetic && !options.isPortal) {
    const {
      appendChild,
      insertBefore,
      removeChild,
      replaceChild
    } = elm;
    const originalNodeValueDescriptor = getPropertyDescriptor(elm, 'nodeValue');
    const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
    const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
    assign(descriptors, {
      appendChild: generateDataDescriptor({
        value(aChild) {
          logMissingPortalWarn('appendChild', 'method');
          return appendChild.call(this, aChild);
        }
      }),
      insertBefore: generateDataDescriptor({
        value(newNode, referenceNode) {
          if (!isDomMutationAllowed) {
            logMissingPortalWarn('insertBefore', 'method');
          }
          return insertBefore.call(this, newNode, referenceNode);
        }
      }),
      removeChild: generateDataDescriptor({
        value(aChild) {
          if (!isDomMutationAllowed) {
            logMissingPortalWarn('removeChild', 'method');
          }
          return removeChild.call(this, aChild);
        }
      }),
      replaceChild: generateDataDescriptor({
        value(newChild, oldChild) {
          logMissingPortalWarn('replaceChild', 'method');
          return replaceChild.call(this, newChild, oldChild);
        }
      }),
      nodeValue: generateAccessorDescriptor({
        get() {
          return originalNodeValueDescriptor.get.call(this);
        },
        set(value) {
          if (!isDomMutationAllowed) {
            logMissingPortalWarn('nodeValue', 'property');
          }
          originalNodeValueDescriptor.set.call(this, value);
        }
      }),
      textContent: generateAccessorDescriptor({
        get() {
          return originalTextContentDescriptor.get.call(this);
        },
        set(value) {
          logMissingPortalWarn('textContent', 'property');
          originalTextContentDescriptor.set.call(this, value);
        }
      }),
      innerHTML: generateAccessorDescriptor({
        get() {
          return originalInnerHTMLDescriptor.get.call(this);
        },
        set(value) {
          logMissingPortalWarn('innerHTML', 'property');
          return originalInnerHTMLDescriptor.set.call(this, value);
        }
      })
    });
  }
  defineProperties(elm, descriptors);
}
function getShadowRootRestrictionsDescriptors(sr) {
  assertNotProd(); // this method should never leak to prod
  // Disallowing properties in dev mode only to avoid people doing the wrong
  // thing when using the real shadow root, because if that's the case,
  // the component will not work when running with synthetic shadow.
  const originalAddEventListener = sr.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(sr, 'innerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(sr, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set innerHTML on ShadowRoot.`);
        return originalInnerHTMLDescriptor.set.call(this, value);
      }
    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set textContent on ShadowRoot.`);
        return originalTextContentDescriptor.set.call(this, value);
      }
    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#1824]: Potentially relax this restriction
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method on ShadowRoot does not support any options.', getAssociatedVMIfPresent(this));
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalAddEventListener.apply(this, arguments);
      }
    })
  };
}
// Custom Elements Restrictions:
// -----------------------------
function getCustomElementRestrictionsDescriptors(elm) {
  assertNotProd(); // this method should never leak to prod
  const originalAddEventListener = elm.addEventListener;
  const originalInnerHTMLDescriptor = getPropertyDescriptor(elm, 'innerHTML');
  const originalOuterHTMLDescriptor = getPropertyDescriptor(elm, 'outerHTML');
  const originalTextContentDescriptor = getPropertyDescriptor(elm, 'textContent');
  return {
    innerHTML: generateAccessorDescriptor({
      get() {
        return originalInnerHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set innerHTML on HTMLElement.`);
        return originalInnerHTMLDescriptor.set.call(this, value);
      }
    }),
    outerHTML: generateAccessorDescriptor({
      get() {
        return originalOuterHTMLDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set outerHTML on HTMLElement.`);
        return originalOuterHTMLDescriptor.set.call(this, value);
      }
    }),
    textContent: generateAccessorDescriptor({
      get() {
        return originalTextContentDescriptor.get.call(this);
      },
      set(value) {
        logError(`Invalid attempt to set textContent on HTMLElement.`);
        return originalTextContentDescriptor.set.call(this, value);
      }
    }),
    addEventListener: generateDataDescriptor({
      value(type, listener, options) {
        // TODO [#1824]: Potentially relax this restriction
        if (!isUndefined$1(options)) {
          logError('The `addEventListener` method in `LightningElement` does not support any options.', getAssociatedVMIfPresent(this));
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalAddEventListener.apply(this, arguments);
      }
    })
  };
}
function getLightningElementPrototypeRestrictionsDescriptors(proto) {
  assertNotProd(); // this method should never leak to prod
  const originalDispatchEvent = proto.dispatchEvent;
  return {
    dispatchEvent: generateDataDescriptor({
      value(event) {
        const vm = getAssociatedVM(this);
        if (!isNull(event) && isObject(event)) {
          const {
            type
          } = event;
          if (!/^[a-z][a-z0-9_]*$/.test(type)) {
            logError(`Invalid event type "${type}" dispatched in element ${getComponentTag(vm)}.` + ` Event name must start with a lowercase letter and followed only lowercase` + ` letters, numbers, and underscores`, vm);
          }
        }
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        return originalDispatchEvent.apply(this, arguments);
      }
    })
  };
}
// This routine will prevent access to certain properties on a shadow root instance to guarantee
// that all components will work fine in IE11 and other browsers without shadow dom support.
function patchShadowRootWithRestrictions(sr) {
  defineProperties(sr, getShadowRootRestrictionsDescriptors(sr));
}
function patchCustomElementWithRestrictions(elm) {
  const restrictionsDescriptors = getCustomElementRestrictionsDescriptors(elm);
  const elmProto = getPrototypeOf$1(elm);
  setPrototypeOf(elm, create(elmProto, restrictionsDescriptors));
}
function patchLightningElementPrototypeWithRestrictions(proto) {
  defineProperties(proto, getLightningElementPrototypeRestrictionsDescriptors(proto));
}
function updateComponentValue(vm, key, newValue) {
  const {
    cmpFields
  } = vm;
  if (newValue !== cmpFields[key]) {
    cmpFields[key] = newValue;
    componentValueMutated(vm, key);
  }
}

/**
 * Copyright (C) 2017 salesforce.com, inc.
 */
const {
  isArray
} = Array;
const {
  prototype: ObjectDotPrototype,
  getPrototypeOf,
  create: ObjectCreate,
  defineProperty: ObjectDefineProperty,
  isExtensible,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  getOwnPropertySymbols,
  preventExtensions,
  hasOwnProperty
} = Object;
const {
  push: ArrayPush,
  concat: ArrayConcat
} = Array.prototype;
const OtS = {}.toString;
function toString(obj) {
  if (obj && obj.toString) {
    return obj.toString();
  } else if (typeof obj === 'object') {
    return OtS.call(obj);
  } else {
    return obj + '';
  }
}
function isUndefined(obj) {
  return obj === undefined;
}
function isFunction(obj) {
  return typeof obj === 'function';
}
const proxyToValueMap = new WeakMap();
function registerProxy(proxy, value) {
  proxyToValueMap.set(proxy, value);
}
const unwrap$1 = replicaOrAny => proxyToValueMap.get(replicaOrAny) || replicaOrAny;
class BaseProxyHandler {
  constructor(membrane, value) {
    this.originalTarget = value;
    this.membrane = membrane;
  }
  // Shared utility methods
  wrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      descriptor.value = this.wrapValue(descriptor.value);
    } else {
      const {
        set: originalSet,
        get: originalGet
      } = descriptor;
      if (!isUndefined(originalGet)) {
        descriptor.get = this.wrapGetter(originalGet);
      }
      if (!isUndefined(originalSet)) {
        descriptor.set = this.wrapSetter(originalSet);
      }
    }
    return descriptor;
  }
  copyDescriptorIntoShadowTarget(shadowTarget, key) {
    const {
      originalTarget
    } = this;
    // Note: a property might get defined multiple times in the shadowTarget
    //       but it will always be compatible with the previous descriptor
    //       to preserve the object invariants, which makes these lines safe.
    const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
    // TODO: it should be impossible for the originalDescriptor to ever be undefined, this `if` can be removed
    /* istanbul ignore else */
    if (!isUndefined(originalDescriptor)) {
      const wrappedDesc = this.wrapDescriptor(originalDescriptor);
      ObjectDefineProperty(shadowTarget, key, wrappedDesc);
    }
  }
  lockShadowTarget(shadowTarget) {
    const {
      originalTarget
    } = this;
    const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
    targetKeys.forEach(key => {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    });
    const {
      membrane: {
        tagPropertyKey
      }
    } = this;
    if (!isUndefined(tagPropertyKey) && !hasOwnProperty.call(shadowTarget, tagPropertyKey)) {
      ObjectDefineProperty(shadowTarget, tagPropertyKey, ObjectCreate(null));
    }
    preventExtensions(shadowTarget);
  }
  // Shared Traps
  // TODO: apply() is never called
  /* istanbul ignore next */
  apply(shadowTarget, thisArg, argArray) {
    /* No op */
  }
  // TODO: construct() is never called
  /* istanbul ignore next */
  construct(shadowTarget, argArray, newTarget) {
    /* No op */
  }
  get(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved
      }
    } = this;
    const value = originalTarget[key];
    valueObserved(originalTarget, key);
    return this.wrapValue(value);
  }
  has(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey,
        valueObserved
      }
    } = this;
    valueObserved(originalTarget, key);
    // since key is never going to be undefined, and tagPropertyKey might be undefined
    // we can simply compare them as the second part of the condition.
    return key in originalTarget || key === tagPropertyKey;
  }
  ownKeys(shadowTarget) {
    const {
      originalTarget,
      membrane: {
        tagPropertyKey
      }
    } = this;
    // if the membrane tag key exists and it is not in the original target, we add it to the keys.
    const keys = isUndefined(tagPropertyKey) || hasOwnProperty.call(originalTarget, tagPropertyKey) ? [] : [tagPropertyKey];
    // small perf optimization using push instead of concat to avoid creating an extra array
    ArrayPush.apply(keys, getOwnPropertyNames(originalTarget));
    ArrayPush.apply(keys, getOwnPropertySymbols(originalTarget));
    return keys;
  }
  isExtensible(shadowTarget) {
    const {
      originalTarget
    } = this;
    // optimization to avoid attempting to lock down the shadowTarget multiple times
    if (!isExtensible(shadowTarget)) {
      return false; // was already locked down
    }
    if (!isExtensible(originalTarget)) {
      this.lockShadowTarget(shadowTarget);
      return false;
    }
    return true;
  }
  getPrototypeOf(shadowTarget) {
    const {
      originalTarget
    } = this;
    return getPrototypeOf(originalTarget);
  }
  getOwnPropertyDescriptor(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueObserved,
        tagPropertyKey
      }
    } = this;
    // keys looked up via getOwnPropertyDescriptor need to be reactive
    valueObserved(originalTarget, key);
    let desc = getOwnPropertyDescriptor(originalTarget, key);
    if (isUndefined(desc)) {
      if (key !== tagPropertyKey) {
        return undefined;
      }
      // if the key is the membrane tag key, and is not in the original target,
      // we produce a synthetic descriptor and install it on the shadow target
      desc = {
        value: undefined,
        writable: false,
        configurable: false,
        enumerable: false
      };
      ObjectDefineProperty(shadowTarget, tagPropertyKey, desc);
      return desc;
    }
    if (desc.configurable === false) {
      // updating the descriptor to non-configurable on the shadow
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    // Note: by accessing the descriptor, the key is marked as observed
    // but access to the value, setter or getter (if available) cannot observe
    // mutations, just like regular methods, in which case we just do nothing.
    return this.wrapDescriptor(desc);
  }
}
const getterMap$1 = new WeakMap();
const setterMap$1 = new WeakMap();
const reverseGetterMap = new WeakMap();
const reverseSetterMap = new WeakMap();
class ReactiveProxyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap$1.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap$1.set(originalGet, get);
    reverseGetterMap.set(get, originalGet);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap$1.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const set = function (v) {
      // invoking the original setter with the original target
      originalSet.call(unwrap$1(this), unwrap$1(v));
    };
    setterMap$1.set(originalSet, set);
    reverseSetterMap.set(set, originalSet);
    return set;
  }
  unwrapDescriptor(descriptor) {
    if (hasOwnProperty.call(descriptor, 'value')) {
      // dealing with a data descriptor
      descriptor.value = unwrap$1(descriptor.value);
    } else {
      const {
        set,
        get
      } = descriptor;
      if (!isUndefined(get)) {
        descriptor.get = this.unwrapGetter(get);
      }
      if (!isUndefined(set)) {
        descriptor.set = this.unwrapSetter(set);
      }
    }
    return descriptor;
  }
  unwrapGetter(redGet) {
    const reverseGetter = reverseGetterMap.get(redGet);
    if (!isUndefined(reverseGetter)) {
      return reverseGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the red getter with the proxy of this
      return unwrap$1(redGet.call(handler.wrapValue(this)));
    };
    getterMap$1.set(get, redGet);
    reverseGetterMap.set(redGet, get);
    return get;
  }
  unwrapSetter(redSet) {
    const reverseSetter = reverseSetterMap.get(redSet);
    if (!isUndefined(reverseSetter)) {
      return reverseSetter;
    }
    const handler = this;
    const set = function (v) {
      // invoking the red setter with the proxy of this
      redSet.call(handler.wrapValue(this), handler.wrapValue(v));
    };
    setterMap$1.set(set, redSet);
    reverseSetterMap.set(redSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    const oldValue = originalTarget[key];
    if (oldValue !== value) {
      originalTarget[key] = value;
      valueMutated(originalTarget, key);
    } else if (key === 'length' && isArray(originalTarget)) {
      // fix for issue #236: push will add the new index, and by the time length
      // is updated, the internal length is already equal to the new length value
      // therefore, the oldValue is equal to the value. This is the forking logic
      // to support this use case.
      valueMutated(originalTarget, key);
    }
    return true;
  }
  deleteProperty(shadowTarget, key) {
    const {
      originalTarget,
      membrane: {
        valueMutated
      }
    } = this;
    delete originalTarget[key];
    valueMutated(originalTarget, key);
    return true;
  }
  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`Invalid setPrototypeOf invocation for reactive proxy ${toString(this.originalTarget)}. Prototype of reactive objects cannot be changed.`);
    }
  }
  preventExtensions(shadowTarget) {
    if (isExtensible(shadowTarget)) {
      const {
        originalTarget
      } = this;
      preventExtensions(originalTarget);
      // if the originalTarget is a proxy itself, it might reject
      // the preventExtension call, in which case we should not attempt to lock down
      // the shadow target.
      // TODO: It should not actually be possible to reach this `if` statement.
      // If a proxy rejects extensions, then calling preventExtensions will throw an error:
      // https://codepen.io/nolanlawson-the-selector/pen/QWMOjbY
      /* istanbul ignore if */
      if (isExtensible(originalTarget)) {
        return false;
      }
      this.lockShadowTarget(shadowTarget);
    }
    return true;
  }
  defineProperty(shadowTarget, key, descriptor) {
    const {
      originalTarget,
      membrane: {
        valueMutated,
        tagPropertyKey
      }
    } = this;
    if (key === tagPropertyKey && !hasOwnProperty.call(originalTarget, key)) {
      // To avoid leaking the membrane tag property into the original target, we must
      // be sure that the original target doesn't have yet.
      // NOTE: we do not return false here because Object.freeze and equivalent operations
      // will attempt to set the descriptor to the same value, and expect no to throw. This
      // is an small compromise for the sake of not having to diff the descriptors.
      return true;
    }
    ObjectDefineProperty(originalTarget, key, this.unwrapDescriptor(descriptor));
    // intentionally testing if false since it could be undefined as well
    if (descriptor.configurable === false) {
      this.copyDescriptorIntoShadowTarget(shadowTarget, key);
    }
    valueMutated(originalTarget, key);
    return true;
  }
  /*LWC compiler v6.6.6*/
}
const getterMap = new WeakMap();
const setterMap = new WeakMap();
class ReadOnlyHandler extends BaseProxyHandler {
  wrapValue(value) {
    return this.membrane.getReadOnlyProxy(value);
  }
  wrapGetter(originalGet) {
    const wrappedGetter = getterMap.get(originalGet);
    if (!isUndefined(wrappedGetter)) {
      return wrappedGetter;
    }
    const handler = this;
    const get = function () {
      // invoking the original getter with the original target
      return handler.wrapValue(originalGet.call(unwrap$1(this)));
    };
    getterMap.set(originalGet, get);
    return get;
  }
  wrapSetter(originalSet) {
    const wrappedSetter = setterMap.get(originalSet);
    if (!isUndefined(wrappedSetter)) {
      return wrappedSetter;
    }
    const handler = this;
    const set = function (v) {
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        const {
          originalTarget
        } = handler;
        throw new Error(`Invalid mutation: Cannot invoke a setter on "${originalTarget}". "${originalTarget}" is read-only.`);
      }
    };
    setterMap.set(originalSet, set);
    return set;
  }
  set(shadowTarget, key, value) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const {
        originalTarget
      } = this;
      const msg = isArray(originalTarget) ? `Invalid mutation: Cannot mutate array at index ${key.toString()}. Array is read-only.` : `Invalid mutation: Cannot set "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`;
      throw new Error(msg);
    }
    /* istanbul ignore next */
    return false;
  }
  deleteProperty(shadowTarget, key) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot delete "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
    /* istanbul ignore next */
    return false;
  }
  setPrototypeOf(shadowTarget, prototype) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid prototype mutation: Cannot set prototype on "${originalTarget}". "${originalTarget}" prototype is read-only.`);
    }
  }
  preventExtensions(shadowTarget) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot preventExtensions on ${originalTarget}". "${originalTarget} is read-only.`);
    }
    /* istanbul ignore next */
    return false;
  }
  defineProperty(shadowTarget, key, descriptor) {
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      const {
        originalTarget
      } = this;
      throw new Error(`Invalid mutation: Cannot defineProperty "${key.toString()}" on "${originalTarget}". "${originalTarget}" is read-only.`);
    }
    /* istanbul ignore next */
    return false;
  }
  /*LWC compiler v6.6.6*/
}
function extract(objectOrArray) {
  if (isArray(objectOrArray)) {
    return objectOrArray.map(item => {
      const original = unwrap$1(item);
      if (original !== item) {
        return extract(original);
      }
      return item;
    });
  }
  const obj = ObjectCreate(getPrototypeOf(objectOrArray));
  const names = getOwnPropertyNames(objectOrArray);
  return ArrayConcat.call(names, getOwnPropertySymbols(objectOrArray)).reduce((seed, key) => {
    const item = objectOrArray[key];
    const original = unwrap$1(item);
    if (original !== item) {
      seed[key] = extract(original);
    } else {
      seed[key] = item;
    }
    return seed;
  }, obj);
}
const formatter = {
  header: plainOrProxy => {
    const originalTarget = unwrap$1(plainOrProxy);
    // if originalTarget is falsy or not unwrappable, exit
    if (!originalTarget || originalTarget === plainOrProxy) {
      return null;
    }
    const obj = extract(plainOrProxy);
    return ['object', {
      object: obj
    }];
  },
  hasBody: () => {
    return false;
  },
  body: () => {
    return null;
  }
};
// Inspired from paulmillr/es6-shim
// https://github.com/paulmillr/es6-shim/blob/master/es6-shim.js#L176-L185
/* istanbul ignore next */
function getGlobal() {
  // the only reliable means to get the global object is `Function('return this')()`
  // However, this causes CSP violations in Chrome apps.
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  // Gracefully degrade if not able to locate the global object
  return {};
}
function init$1() {
  /* istanbul ignore if */
  if (process.env.NODE_ENV === 'production') {
    // this method should never leak to prod
    throw new ReferenceError();
  }
  const global = getGlobal();
  // Custom Formatter for Dev Tools. To enable this, open Chrome Dev Tools
  //  - Go to Settings,
  //  - Under console, select "Enable custom formatters"
  // For more information, https://docs.google.com/document/d/1FTascZXT9cxfetuPRT2eXPQKXui4nWFivUnS_335T3U/preview
  const devtoolsFormatters = global.devtoolsFormatters || [];
  ArrayPush.call(devtoolsFormatters, formatter);
  global.devtoolsFormatters = devtoolsFormatters;
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== 'production') {
  init$1();
}
function defaultValueIsObservable(value) {
  // intentionally checking for null
  if (value === null) {
    return false;
  }
  // treat all non-object types, including undefined, as non-observable values
  if (typeof value !== 'object') {
    return false;
  }
  if (isArray(value)) {
    return true;
  }
  const proto = getPrototypeOf(value);
  return proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null;
}
const defaultValueObserved = (obj, key) => {
  /* do nothing */
};
const defaultValueMutated = (obj, key) => {
  /* do nothing */
};
function createShadowTarget(value) {
  return isArray(value) ? [] : {};
}
class ObservableMembrane {
  constructor(options = {}) {
    this.readOnlyObjectGraph = new WeakMap();
    this.reactiveObjectGraph = new WeakMap();
    const {
      valueMutated,
      valueObserved,
      valueIsObservable,
      tagPropertyKey
    } = options;
    this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
    this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
    this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
    this.tagPropertyKey = tagPropertyKey;
  }
  getProxy(value) {
    const unwrappedValue = unwrap$1(value);
    if (this.valueIsObservable(unwrappedValue)) {
      // When trying to extract the writable version of a readonly we return the readonly.
      if (this.readOnlyObjectGraph.get(unwrappedValue) === value) {
        return value;
      }
      return this.getReactiveHandler(unwrappedValue);
    }
    return unwrappedValue;
  }
  getReadOnlyProxy(value) {
    value = unwrap$1(value);
    if (this.valueIsObservable(value)) {
      return this.getReadOnlyHandler(value);
    }
    return value;
  }
  unwrapProxy(p) {
    return unwrap$1(p);
  }
  getReactiveHandler(value) {
    let proxy = this.reactiveObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReactiveProxyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.reactiveObjectGraph.set(value, proxy);
    }
    return proxy;
  }
  getReadOnlyHandler(value) {
    let proxy = this.readOnlyObjectGraph.get(value);
    if (isUndefined(proxy)) {
      // caching the proxy after the first time it is accessed
      const handler = new ReadOnlyHandler(this, value);
      proxy = new Proxy(createShadowTarget(value), handler);
      registerProxy(proxy, value);
      this.readOnlyObjectGraph.set(value, proxy);
    }
    return proxy;
  }
}
/** version: 2.0.0 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const lockerLivePropertyKey = Symbol.for('@@lockerLiveValue');
const reactiveMembrane = new ObservableMembrane({
  valueObserved,
  valueMutated,
  tagPropertyKey: lockerLivePropertyKey
});
/**
 * EXPERIMENTAL: This function implements an unwrap mechanism that
 * works for observable membrane objects. This API is subject to
 * change or being removed.
 */
function unwrap(value) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return reactiveMembrane.unwrapProxy(value);
}
function getReadOnlyProxy(value) {
  // We must return a frozen wrapper around the value, so that child components cannot mutate properties passed to
  // them from their parents. This applies to both the client and server.
  return reactiveMembrane.getReadOnlyProxy(value);
}
function getReactiveProxy(value) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  return reactiveMembrane.getProxy(value);
}
// Making the component instance a live value when using Locker to support expandos.
function markLockerLiveObject(obj) {
  // On the server side, we don't need mutation tracking. Skipping it improves performance.
  {
    obj[lockerLivePropertyKey] = undefined;
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
/**
 * This operation is called with a descriptor of an standard html property
 * that a Custom Element can support (including AOM properties), which
 * determines what kind of capabilities the Base Lightning Element should support. When producing the new descriptors
 * for the Base Lightning Element, it also include the reactivity bit, so the standard property is reactive.
 */
function createBridgeToElementDescriptor(propName, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  if (!isFunction$1(get)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard getter.`);
  }
  if (!isFunction$1(set)) {
    throw new TypeError(`Detected invalid public property descriptor for HTMLElement.prototype.${propName} definition. Missing the standard setter.`);
  }
  return {
    enumerable,
    configurable,
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        if (process.env.NODE_ENV !== 'production') {
          logError(`The value of property \`${propName}\` can't be read from the constructor because the owner component hasn't set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }
        return;
      }
      componentValueObserved(vm, propName);
      return get.call(vm.elm);
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      if (process.env.NODE_ENV !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${propName}`);
        }
        if (isUpdatingTemplate) {
          logError(`When updating the template of ${vmBeingRendered}, one of the accessors used by the template has side effects on the state of ${vm}.${propName}`);
        }
        if (isBeingConstructed(vm)) {
          logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
        }
        if (isObject(newValue) && !isNull(newValue)) {
          logError(`Invalid value "${newValue}" for "${propName}" of ${vm}. Value cannot be an object, must be a primitive value.`);
        }
      }
      updateComponentValue(vm, propName, newValue);
      return set.call(vm.elm, newValue);
    }
  };
}
const refsCache = new WeakMap();
/**
 * This class is the base class for any LWC element.
 * Some elements directly extends this class, others implement it via inheritance.
 **/
// @ts-ignore
const LightningElement = function () {
  // This should be as performant as possible, while any initialization should be done lazily
  if (isNull(vmBeingConstructed)) {
    // Thrown when doing something like `new LightningElement()` or
    // `class Foo extends LightningElement {}; new Foo()`
    throw new TypeError('Illegal constructor');
  }
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentInstance(this, vmBeingConstructed);
  const vm = vmBeingConstructed;
  const {
    def,
    elm
  } = vm;
  const {
    bridge
  } = def;
  if (process.env.NODE_ENV !== 'production') {
    const {
      assertInstanceOfHTMLElement
    } = vm.renderer;
    assertInstanceOfHTMLElement(vm.elm, `Component creation requires a DOM element to be associated to ${vm}.`);
  }
  const component = this;
  setPrototypeOf(elm, bridge.prototype);
  vm.component = this;
  // Locker hooks assignment. When the LWC engine run with Locker, Locker intercepts all the new
  // component creation and passes hooks to instrument all the component interactions with the
  // engine. We are intentionally hiding this argument from the formal API of LightningElement
  // because we don't want folks to know about it just yet.
  if (arguments.length === 1) {
    const {
      callHook,
      setHook,
      getHook
    } = arguments[0];
    vm.callHook = callHook;
    vm.setHook = setHook;
    vm.getHook = getHook;
  }
  markLockerLiveObject(this);
  // Linking elm, shadow root and component with the VM.
  associateVM(component, vm);
  associateVM(elm, vm);
  if (vm.renderMode === 1 /* RenderMode.Shadow */) {
    vm.renderRoot = doAttachShadow(vm);
  } else {
    vm.renderRoot = elm;
  }
  // Adding extra guard rails in DEV mode.
  if (process.env.NODE_ENV !== 'production') {
    patchCustomElementWithRestrictions(elm);
  }
  return this;
};
function doAttachShadow(vm) {
  const {
    elm,
    mode,
    shadowMode,
    def: {
      ctor
    },
    renderer: {
      attachShadow
    }
  } = vm;
  const shadowRoot = attachShadow(elm, {
    [KEY__SYNTHETIC_MODE]: shadowMode === 1 /* ShadowMode.Synthetic */,
    delegatesFocus: Boolean(ctor.delegatesFocus),
    mode
  });
  vm.shadowRoot = shadowRoot;
  associateVM(shadowRoot, vm);
  if (process.env.NODE_ENV !== 'production') {
    patchShadowRootWithRestrictions(shadowRoot);
  }
  return shadowRoot;
}
function warnIfInvokedDuringConstruction(vm, methodOrPropName) {
  if (isBeingConstructed(vm)) {
    logError(`this.${methodOrPropName} should not be called during the construction of the custom element for ${getComponentTag(vm)} because the element is not yet in the DOM or has no children yet.`);
  }
}
// List of properties on ElementInternals that are formAssociated can be found in the spec:
// https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-elements
const formAssociatedProps = new Set(['setFormValue', 'form', 'setValidity', 'willValidate', 'validity', 'validationMessage', 'checkValidity', 'reportValidity', 'labels']);
// Verify that access to a form-associated property of the ElementInternals proxy has formAssociated set in the LWC.
function verifyPropForFormAssociation(propertyKey, isFormAssociated) {
  if (isString(propertyKey) && formAssociatedProps.has(propertyKey) && !isFormAssociated) {
    //Note this error message mirrors Chrome and Firefox error messages, in Safari the error is slightly different.
    throw new DOMException(`Failed to execute '${propertyKey}' on 'ElementInternals': The target element is not a form-associated custom element.`);
  }
}
const elementInternalsAccessorAllowList = new Set(['shadowRoot', 'role', ...formAssociatedProps]);
// Prevent access to properties not defined in the HTML spec in case browsers decide to
// provide new APIs that provide access to form associated properties.
// This can be removed along with UpgradeableConstructor.
function isAllowedElementInternalAccessor(propertyKey) {
  let isAllowedAccessor = false;
  // As of this writing all ElementInternal property keys as described in the spec are implemented with strings
  // in Chrome, Firefox, and Safari
  if (isString(propertyKey)) {
    // Allow list is based on HTML spec:
    // https://html.spec.whatwg.org/multipage/custom-elements.html#the-elementinternals-interface
    isAllowedAccessor = elementInternalsAccessorAllowList.has(propertyKey) || /^aria/.test(propertyKey);
    if (!isAllowedAccessor && process.env.NODE_ENV !== 'production') {
      logWarn('Only properties defined in the ElementInternals HTML spec are available.');
    }
  }
  return isAllowedAccessor;
}
// Wrap all ElementInternal objects in a proxy to prevent form association when `formAssociated` is not set on an LWC.
// This is needed because the 1UpgradeableConstructor1 always sets `formAssociated=true`, which means all
// ElementInternal objects will have form-associated properties set when an LWC is placed in a form.
// We are doing this to guard against customers taking a dependency on form elements being associated to ElementInternals
// when 'formAssociated' has not been set on the LWC.
function createElementInternalsProxy(elementInternals, isFormAssociated) {
  const elementInternalsProxy = new Proxy(elementInternals, {
    set(target, propertyKey, newValue) {
      if (isAllowedElementInternalAccessor(propertyKey)) {
        // Verify that formAssociated is set for form associated properties
        verifyPropForFormAssociation(propertyKey, isFormAssociated);
        return Reflect.set(target, propertyKey, newValue);
      }
      // As of this writing ElementInternals do not have non-string properties that can be set.
      return false;
    },
    get(target, propertyKey) {
      if (
      // Pass through Object.prototype methods such as toString()
      hasOwnProperty$1.call(Object.prototype, propertyKey) ||
      // As of this writing, ElementInternals only uses Symbol.toStringTag which is called
      // on Object.hasOwnProperty invocations
      Symbol.for('Symbol.toStringTag') === propertyKey ||
      // ElementInternals allow listed properties
      isAllowedElementInternalAccessor(propertyKey)) {
        // Verify that formAssociated is set for form associated properties
        verifyPropForFormAssociation(propertyKey, isFormAssociated);
        const propertyValue = Reflect.get(target, propertyKey);
        return isFunction$1(propertyValue) ? propertyValue.bind(target) : propertyValue;
      }
    }
  });
  return elementInternalsProxy;
}
// @ts-ignore
LightningElement.prototype = {
  constructor: LightningElement,
  dispatchEvent(event) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        dispatchEvent
      }
    } = vm;
    return dispatchEvent(elm, event);
  },
  addEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        addEventListener
      }
    } = vm;
    if (process.env.NODE_ENV !== 'production') {
      const vmBeingRendered = getVMBeingRendered();
      if (isInvokingRender) {
        logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      }
      if (isUpdatingTemplate) {
        logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm} by adding an event listener for "${type}".`);
      }
      if (!isFunction$1(listener)) {
        logError(`Invalid second argument for this.addEventListener() in ${vm} for event "${type}". Expected an EventListener but received ${listener}.`);
      }
    }
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    addEventListener(elm, type, wrappedListener, options);
  },
  removeEventListener(type, listener, options) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeEventListener
      }
    } = vm;
    const wrappedListener = getWrappedComponentsListener(vm, listener);
    removeEventListener(elm, type, wrappedListener, options);
  },
  hasAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name));
  },
  hasAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getAttribute
      }
    } = vm;
    return !isNull(getAttribute(elm, name, namespace));
  },
  removeAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = vm;
    removeAttribute(elm, name);
  },
  removeAttributeNS(namespace, name) {
    const {
      elm,
      renderer: {
        removeAttribute
      }
    } = getAssociatedVM(this);
    removeAttribute(elm, name, namespace);
  },
  getAttribute(name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name);
  },
  getAttributeNS(namespace, name) {
    const vm = getAssociatedVM(this);
    const {
      elm
    } = vm;
    const {
      getAttribute
    } = vm.renderer;
    return getAttribute(elm, name, namespace);
  },
  setAttribute(name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    if (process.env.NODE_ENV !== 'production') {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
    }
    setAttribute(elm, name, value);
  },
  setAttributeNS(namespace, name, value) {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        setAttribute
      }
    } = vm;
    if (process.env.NODE_ENV !== 'production') {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct '${getComponentTag(vm)}': The result must not have attributes.`);
      }
    }
    setAttribute(elm, name, value, namespace);
  },
  getBoundingClientRect() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getBoundingClientRect
      }
    } = vm;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'getBoundingClientRect()');
    }
    return getBoundingClientRect(elm);
  },
  attachInternals() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      def: {
        formAssociated
      },
      renderer: {
        attachInternals
      }
    } = vm;
    if (vm.shadowMode === 1 /* ShadowMode.Synthetic */) {
      throw new Error('attachInternals API is not supported in light DOM or synthetic shadow.');
    }
    const internals = attachInternals(elm);
    // #TODO[2970]: remove proxy once `UpgradeableConstructor` has been removed
    return createElementInternalsProxy(internals, Boolean(formAssociated));
  },
  get isConnected() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        isConnected
      }
    } = vm;
    return isConnected(elm);
  },
  get classList() {
    const vm = getAssociatedVM(this);
    const {
      elm,
      renderer: {
        getClassList
      }
    } = vm;
    if (process.env.NODE_ENV !== 'production') {
      if (isBeingConstructed(vm)) {
        logError(`Failed to construct ${vm}: The result must not have attributes. Adding or tampering with classname in constructor is not allowed in a web component, use connectedCallback() instead.`);
      }
    }
    return getClassList(elm);
  },
  get template() {
    const vm = getAssociatedVM(this);
    if (process.env.NODE_ENV !== 'production') {
      if (vm.renderMode === 0 /* RenderMode.Light */) {
        logError('`this.template` returns null for light DOM components. Since there is no shadow, the rendered content can be accessed via `this` itself. e.g. instead of `this.template.querySelector`, use `this.querySelector`.');
      }
    }
    return vm.shadowRoot;
  },
  get refs() {
    const vm = getAssociatedVM(this);
    if (isUpdatingTemplate) {
      if (process.env.NODE_ENV !== 'production') {
        logError(`this.refs should not be called while ${getComponentTag(vm)} is rendering. Use this.refs only when the DOM is stable, e.g. in renderedCallback().`);
      }
      // If the template is in the process of being updated, then we don't want to go through the normal
      // process of returning the refs and caching them, because the state of the refs is unstable.
      // This can happen if e.g. a template contains `<div class={foo}></div>` and `foo` is computed
      // based on `this.refs.bar`.
      return;
    }
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'refs');
    }
    const {
      refVNodes,
      cmpTemplate
    } = vm;
    // If the `cmpTemplate` is null, that means that the template has not been rendered yet. Most likely this occurs
    // if `this.refs` is called during the `connectedCallback` phase. The DOM elements have not been rendered yet,
    // so log a warning. Note we also check `isBeingConstructed()` to avoid a double warning (due to
    // `warnIfInvokedDuringConstruction` above).
    if (process.env.NODE_ENV !== 'production' && isNull(cmpTemplate) && !isBeingConstructed(vm)) {
      logError(`this.refs is undefined for ${getComponentTag(vm)}. This is either because the attached template has no "lwc:ref" directive, or this.refs was ` + `invoked before renderedCallback(). Use this.refs only when the referenced HTML elements have ` + `been rendered to the DOM, such as within renderedCallback() or disconnectedCallback().`);
    }
    // For backwards compatibility with component written before template refs
    // were introduced, we return undefined if the template has no refs defined
    // anywhere. This fixes components that may want to add an expando called `refs`
    // and are checking if it exists with `if (this.refs)`  before adding it.
    // Note we use a null refVNodes to indicate that the template has no refs defined.
    if (isNull(refVNodes)) {
      return;
    }
    // The refNodes can be cached based on the refVNodes, since the refVNodes
    // are recreated from scratch every time the template is rendered.
    // This happens with `vm.refVNodes = null` in `template.ts` in `@lwc/engine-core`.
    let refs = refsCache.get(refVNodes);
    if (isUndefined$1(refs)) {
      refs = create(null);
      for (const key of keys(refVNodes)) {
        refs[key] = refVNodes[key].elm;
      }
      freeze(refs);
      refsCache.set(refVNodes, refs);
    }
    return refs;
  },
  // For backwards compat, we allow component authors to set `refs` as an expando
  set refs(value) {
    defineProperty(this, 'refs', {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    });
  },
  get shadowRoot() {
    // From within the component instance, the shadowRoot is always reported as "closed".
    // Authors should rely on this.template instead.
    return null;
  },
  get children() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'children');
    }
    return renderer.getChildren(vm.elm);
  },
  get childNodes() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'childNodes');
    }
    return renderer.getChildNodes(vm.elm);
  },
  get firstChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'firstChild');
    }
    return renderer.getFirstChild(vm.elm);
  },
  get firstElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'firstElementChild');
    }
    return renderer.getFirstElementChild(vm.elm);
  },
  get lastChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'lastChild');
    }
    return renderer.getLastChild(vm.elm);
  },
  get lastElementChild() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'lastElementChild');
    }
    return renderer.getLastElementChild(vm.elm);
  },
  get ownerDocument() {
    const vm = getAssociatedVM(this);
    const renderer = vm.renderer;
    if (process.env.NODE_ENV !== 'production') {
      warnIfInvokedDuringConstruction(vm, 'ownerDocument');
    }
    return renderer.ownerDocument(vm.elm);
  },
  get tagName() {
    const {
      elm,
      renderer
    } = getAssociatedVM(this);
    return renderer.getTagName(elm);
  },
  render() {
    const vm = getAssociatedVM(this);
    return vm.def.template;
  },
  toString() {
    const vm = getAssociatedVM(this);
    return `[object ${vm.def.name}]`;
  }
};
const queryAndChildGetterDescriptors = create(null);
const queryMethods = ['getElementsByClassName', 'getElementsByTagName', 'querySelector', 'querySelectorAll'];
// Generic passthrough for query APIs on HTMLElement to the relevant Renderer APIs
for (const queryMethod of queryMethods) {
  queryAndChildGetterDescriptors[queryMethod] = {
    value(arg) {
      const vm = getAssociatedVM(this);
      const {
        elm,
        renderer
      } = vm;
      if (process.env.NODE_ENV !== 'production') {
        warnIfInvokedDuringConstruction(vm, `${queryMethod}()`);
      }
      return renderer[queryMethod](elm, arg);
    },
    configurable: true,
    enumerable: true,
    writable: true
  };
}
defineProperties(LightningElement.prototype, queryAndChildGetterDescriptors);
const lightningBasedDescriptors = create(null);
for (const propName in HTMLElementOriginalDescriptors) {
  lightningBasedDescriptors[propName] = createBridgeToElementDescriptor(propName, HTMLElementOriginalDescriptors[propName]);
}
defineProperties(LightningElement.prototype, lightningBasedDescriptors);
// Apply ARIA reflection to LightningElement.prototype, on both the browser and server.
// This allows `this.aria*` property accessors to work from inside a component, and to reflect `aria-*` attrs.
// Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
applyAriaReflection(LightningElement.prototype);
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    // If required, a runtime-specific implementation must be defined.
    throw new ReferenceError('The current runtime does not support CustomElementConstructor.');
  },
  configurable: true
});
if (process.env.NODE_ENV !== 'production') {
  patchLightningElementPrototypeWithRestrictions(LightningElement.prototype);
}
function createObservedFieldPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      updateComponentValue(vm, key, newValue);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const AdapterToTokenMap = new Map();
function createContextProviderWithRegister(adapter, registerContextProvider) {
  let adapterContextToken = AdapterToTokenMap.get(adapter);
  if (!isUndefined$1(adapterContextToken)) {
    throw new Error(`Adapter already has a context provider.`);
  }
  adapterContextToken = guid();
  AdapterToTokenMap.set(adapter, adapterContextToken);
  const providers = new WeakSet();
  return (elmOrComponent, options) => {
    if (providers.has(elmOrComponent)) {
      throw new Error(`Adapter was already installed on ${elmOrComponent}.`);
    }
    providers.add(elmOrComponent);
    const {
      consumerConnectedCallback,
      consumerDisconnectedCallback
    } = options;
    registerContextProvider(elmOrComponent, adapterContextToken, subscriptionPayload => {
      const {
        setNewContext,
        setDisconnectedCallback
      } = subscriptionPayload;
      const consumer = {
        provide(newContext) {
          setNewContext(newContext);
        }
      };
      const disconnectCallback = () => {
        if (!isUndefined$1(consumerDisconnectedCallback)) {
          consumerDisconnectedCallback(consumer);
        }
      };
      setDisconnectedCallback(disconnectCallback);
      consumerConnectedCallback(consumer);
    });
  };
}
function createContextWatcher(vm, wireDef, callbackWhenContextIsReady) {
  const {
    adapter
  } = wireDef;
  const adapterContextToken = AdapterToTokenMap.get(adapter);
  if (isUndefined$1(adapterContextToken)) {
    return; // no provider found, nothing to be done
  }
  const {
    elm,
    context: {
      wiredConnecting,
      wiredDisconnecting
    },
    renderer: {
      registerContextConsumer
    }
  } = vm;
  // waiting for the component to be connected to formally request the context via the token
  ArrayPush$1.call(wiredConnecting, () => {
    // This will attempt to connect the current element with one of its anscestors
    // that can provide context for the given wire adapter. This relationship is
    // keyed on the secret & internal value of `adapterContextToken`, which is unique
    // to a given wire adapter.
    //
    // Depending on the runtime environment, this connection is made using either DOM
    // events (in the browser) or a custom traversal (on the server).
    registerContextConsumer(elm, adapterContextToken, {
      setNewContext(newContext) {
        // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
        // TODO: dev-mode validation of config based on the adapter.contextSchema
        callbackWhenContextIsReady(newContext);
      },
      setDisconnectedCallback(disconnectCallback) {
        // adds this callback into the disconnect bucket so it gets disconnected from parent
        // the the element hosting the wire is disconnected
        ArrayPush$1.call(wiredDisconnecting, disconnectCallback);
      }
    });
  });
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const DeprecatedWiredElementHost = '$$DeprecatedWiredElementHostKey$$';
const DeprecatedWiredParamsMeta = '$$DeprecatedWiredParamsMetaKey$$';
const WIRE_DEBUG_ENTRY = '@wire';
const WireMetaMap = new Map();
function createFieldDataCallback(vm, name) {
  return value => {
    updateComponentValue(vm, name, value);
  };
}
function createMethodDataCallback(vm, method) {
  return value => {
    // dispatching new value into the wired method
    runWithBoundaryProtection(vm, vm.owner, noop, () => {
      // job
      method.call(vm.component, value);
    }, noop);
  };
}
function createConfigWatcher(component, configCallback, callbackWhenConfigIsReady) {
  let hasPendingConfig = false;
  // creating the reactive observer for reactive params when needed
  const ro = createReactiveObserver(() => {
    if (hasPendingConfig === false) {
      hasPendingConfig = true;
      // collect new config in the micro-task
      Promise.resolve().then(() => {
        hasPendingConfig = false;
        // resetting current reactive params
        ro.reset();
        // dispatching a new config due to a change in the configuration
        computeConfigAndUpdate();
      });
    }
  });
  const computeConfigAndUpdate = () => {
    let config;
    ro.observe(() => config = configCallback(component));
    // eslint-disable-next-line @lwc/lwc-internal/no-invalid-todo
    // TODO: dev-mode validation of config based on the adapter.configSchema
    // @ts-ignore it is assigned in the observe() callback
    callbackWhenConfigIsReady(config);
  };
  return {
    computeConfigAndUpdate,
    ro
  };
}
function createConnector(vm, name, wireDef) {
  const {
    method,
    adapter,
    configCallback,
    dynamic
  } = wireDef;
  let debugInfo;
  if (process.env.NODE_ENV !== 'production') {
    const wiredPropOrMethod = isUndefined$1(method) ? name : method.name;
    debugInfo = create(null);
    debugInfo.wasDataProvisionedForConfig = false;
    vm.debugInfo[WIRE_DEBUG_ENTRY][wiredPropOrMethod] = debugInfo;
  }
  const fieldOrMethodCallback = isUndefined$1(method) ? createFieldDataCallback(vm, name) : createMethodDataCallback(vm, method);
  const dataCallback = value => {
    if (process.env.NODE_ENV !== 'production') {
      debugInfo.data = value;
      // Note: most of the time, the data provided is for the current config, but there may be
      // some conditions in which it does not, ex:
      // race conditions in a poor network while the adapter does not cancel a previous request.
      debugInfo.wasDataProvisionedForConfig = true;
    }
    fieldOrMethodCallback(value);
  };
  let context;
  let connector;
  // Workaround to pass the component element associated to this wire adapter instance.
  defineProperty(dataCallback, DeprecatedWiredElementHost, {
    value: vm.elm
  });
  defineProperty(dataCallback, DeprecatedWiredParamsMeta, {
    value: dynamic
  });
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    connector = new adapter(dataCallback, {
      tagName: vm.tagName
    });
  }, noop);
  const updateConnectorConfig = config => {
    // every time the config is recomputed due to tracking,
    // this callback will be invoked with the new computed config
    runWithBoundaryProtection(vm, vm, noop, () => {
      // job
      if (process.env.NODE_ENV !== 'production') {
        debugInfo.config = config;
        debugInfo.context = context;
        debugInfo.wasDataProvisionedForConfig = false;
      }
      connector.update(config, context);
    }, noop);
  };
  // Computes the current wire config and calls the update method on the wire adapter.
  // If it has params, we will need to observe changes in the next tick.
  const {
    computeConfigAndUpdate,
    ro
  } = createConfigWatcher(vm.component, configCallback, updateConnectorConfig);
  // if the adapter needs contextualization, we need to watch for new context and push it alongside the config
  if (!isUndefined$1(adapter.contextSchema)) {
    createContextWatcher(vm, wireDef, newContext => {
      // every time the context is pushed into this component,
      // this callback will be invoked with the new computed context
      if (context !== newContext) {
        context = newContext;
        // Note: when new context arrives, the config will be recomputed and pushed along side the new
        // context, this is to preserve the identity characteristics, config should not have identity
        // (ever), while context can have identity
        if (vm.state === 1 /* VMState.connected */) {
          computeConfigAndUpdate();
        }
      }
    });
  }
  return {
    // @ts-ignore the boundary protection executes sync, connector is always defined
    connector,
    computeConfigAndUpdate,
    resetConfigWatcher: () => ro.reset()
  };
}
function storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const method = descriptor.value;
  const def = {
    adapter,
    method,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic) {
  // support for callable adapters
  if (adapter.adapter) {
    adapter = adapter.adapter;
  }
  const def = {
    adapter,
    configCallback,
    dynamic
  };
  WireMetaMap.set(descriptor, def);
}
function installWireAdapters(vm) {
  const {
    context,
    def: {
      wire
    }
  } = vm;
  if (process.env.NODE_ENV !== 'production') {
    vm.debugInfo[WIRE_DEBUG_ENTRY] = create(null);
  }
  const wiredConnecting = context.wiredConnecting = [];
  const wiredDisconnecting = context.wiredDisconnecting = [];
  for (const fieldNameOrMethod in wire) {
    const descriptor = wire[fieldNameOrMethod];
    const wireDef = WireMetaMap.get(descriptor);
    if (process.env.NODE_ENV !== 'production') {
      assert.invariant(wireDef, `Internal Error: invalid wire definition found.`);
    }
    if (!isUndefined$1(wireDef)) {
      const {
        connector,
        computeConfigAndUpdate,
        resetConfigWatcher
      } = createConnector(vm, fieldNameOrMethod, wireDef);
      const hasDynamicParams = wireDef.dynamic.length > 0;
      ArrayPush$1.call(wiredConnecting, () => {
        connector.connect();
        if (!lwcRuntimeFlags.ENABLE_WIRE_SYNC_EMIT) {
          if (hasDynamicParams) {
            Promise.resolve().then(computeConfigAndUpdate);
            return;
          }
        }
        computeConfigAndUpdate();
      });
      ArrayPush$1.call(wiredDisconnecting, () => {
        connector.disconnect();
        resetConfigWatcher();
      });
    }
  }
}
function connectWireAdapters(vm) {
  const {
    wiredConnecting
  } = vm.context;
  for (let i = 0, len = wiredConnecting.length; i < len; i += 1) {
    wiredConnecting[i]();
  }
}
function disconnectWireAdapters(vm) {
  const {
    wiredDisconnecting
  } = vm.context;
  runWithBoundaryProtection(vm, vm, noop, () => {
    // job
    for (let i = 0, len = wiredDisconnecting.length; i < len; i += 1) {
      wiredDisconnecting[i]();
    }
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function api$1() {
  if (process.env.NODE_ENV !== 'production') {
    assert.fail(`@api decorator can only be used as a decorator function.`);
  }
  throw new Error();
}
function createPublicPropertyDescriptor(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      if (isBeingConstructed(vm)) {
        if (process.env.NODE_ENV !== 'production') {
          logError(`Can’t read the value of property \`${toString$1(key)}\` from the constructor because the owner component hasn’t set the value yet. Instead, use the constructor to set a default value for the property.`, vm);
        }
        return;
      }
      componentValueObserved(vm, key);
      return vm.cmpProps[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      if (process.env.NODE_ENV !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
      }
      vm.cmpProps[key] = newValue;
      componentValueMutated(vm, key);
    },
    enumerable: true,
    configurable: true
  };
}
function createPublicAccessorDescriptor(key, descriptor) {
  const {
    get,
    set,
    enumerable,
    configurable
  } = descriptor;
  assert.invariant(isFunction$1(get), `Invalid public accessor ${toString$1(key)} decorated with @api. The property is missing a getter.`);
  return {
    get() {
      if (process.env.NODE_ENV !== 'production') {
        // Assert that the this value is an actual Component with an associated VM.
        getAssociatedVM(this);
      }
      return get.call(this);
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      if (process.env.NODE_ENV !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`render() method has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template has side effects on the state of property "${toString$1(key)}"`, isNull(vmBeingRendered) ? vm : vmBeingRendered);
        }
      }
      if (set) {
        set.call(this, newValue);
      } else if (process.env.NODE_ENV !== 'production') {
        logError(`Invalid attempt to set a new value for property "${toString$1(key)}" that does not has a setter decorated with @api.`, vm);
      }
    },
    enumerable,
    configurable
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function track(target) {
  if (arguments.length === 1) {
    return getReactiveProxy(target);
  }
  if (process.env.NODE_ENV !== 'production') {
    assert.fail(`@track decorator can only be used with one argument to return a trackable object, or as a decorator function.`);
  }
  throw new Error();
}
function internalTrackDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(newValue) {
      const vm = getAssociatedVM(this);
      if (process.env.NODE_ENV !== 'production') {
        const vmBeingRendered = getVMBeingRendered();
        if (isInvokingRender) {
          logError(`${vmBeingRendered}.render() method has side effects on the state of ${vm}.${toString$1(key)}`);
        }
        if (isUpdatingTemplate) {
          logError(`Updating the template of ${vmBeingRendered} has side effects on the state of ${vm}.${toString$1(key)}`);
        }
      }
      const reactiveOrAnyValue = getReactiveProxy(newValue);
      updateComponentValue(vm, key, reactiveOrAnyValue);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * @wire decorator to wire fields and methods to a wire adapter in
 * LWC Components. This function implements the internals of this
 * decorator.
 */
function wire(_adapter, _config) {
  if (process.env.NODE_ENV !== 'production') {
    assert.fail('@wire(adapter, config?) may only be used as a decorator.');
  }
  throw new Error();
}
function internalWireFieldDecorator(key) {
  return {
    get() {
      const vm = getAssociatedVM(this);
      componentValueObserved(vm, key);
      return vm.cmpFields[key];
    },
    set(value) {
      const vm = getAssociatedVM(this);
      /**
       * Reactivity for wired fields is provided in wiring.
       * We intentionally add reactivity here since this is just
       * letting the author to do the wrong thing, but it will keep our
       * system to be backward compatible.
       */
      updateComponentValue(vm, key, value);
    },
    enumerable: true,
    configurable: true
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function getClassDescriptorType(descriptor) {
  if (isFunction$1(descriptor.value)) {
    return "method" /* DescriptorType.Method */;
  } else if (isFunction$1(descriptor.set) || isFunction$1(descriptor.get)) {
    return "accessor" /* DescriptorType.Accessor */;
  } else {
    return "field" /* DescriptorType.Field */;
  }
}
function validateObservedField(Ctor, fieldName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid observed ${fieldName} field. Found a duplicate ${type} with the same name.`;
    // TODO [#3408]: this should throw, not log
    logError(message);
  }
}
function validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    // TODO [#3408]: this should throw, not log
    logError(`Invalid @track ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}
function validateFieldDecoratedWithWire(Ctor, fieldName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    // TODO [#3408]: this should throw, not log
    logError(`Invalid @wire ${fieldName} field. Found a duplicate ${type} with the same name.`);
  }
}
function validateMethodDecoratedWithWire(Ctor, methodName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Invalid @wire ${methodName} field. The field should have a valid writable descriptor.`);
  }
}
function validateFieldDecoratedWithApi(Ctor, fieldName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (!isUndefined$1(descriptor)) {
    const type = getClassDescriptorType(descriptor);
    const message = `Invalid @api ${fieldName} field. Found a duplicate ${type} with the same name.`;
    // TODO [#3408]: this should throw, not log
    logError(message);
  }
}
function validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (isFunction$1(descriptor.set)) {
    if (!isFunction$1(descriptor.get)) {
      // TODO [#3441]: This line of code does not seem possible to reach.
      logError(`Missing getter for property ${fieldName} decorated with @api in ${Ctor}. You cannot have a setter without the corresponding getter.`);
    }
  } else if (!isFunction$1(descriptor.get)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Missing @api get ${fieldName} accessor.`);
  }
}
function validateMethodDecoratedWithApi(Ctor, methodName, descriptor) {
  assertNotProd(); // this method should never leak to prod
  if (isUndefined$1(descriptor) || !isFunction$1(descriptor.value) || isFalse(descriptor.writable)) {
    // TODO [#3441]: This line of code does not seem possible to reach.
    logError(`Invalid @api ${methodName} method.`);
  }
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by user-land code.
 */
function registerDecorators(Ctor, meta) {
  const proto = Ctor.prototype;
  const {
    publicProps,
    publicMethods,
    wire,
    track,
    fields
  } = meta;
  const apiMethods = create(null);
  const apiFields = create(null);
  const wiredMethods = create(null);
  const wiredFields = create(null);
  const observedFields = create(null);
  const apiFieldsConfig = create(null);
  let descriptor;
  if (!isUndefined$1(publicProps)) {
    for (const fieldName in publicProps) {
      const propConfig = publicProps[fieldName];
      apiFieldsConfig[fieldName] = propConfig.config;
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      if (propConfig.config > 0) {
        if (isUndefined$1(descriptor)) {
          // TODO [#3441]: This line of code does not seem possible to reach.
          throw new Error();
        }
        // accessor declaration
        if (process.env.NODE_ENV !== 'production') {
          validateAccessorDecoratedWithApi(Ctor, fieldName, descriptor);
        }
        descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
      } else {
        // field declaration
        if (process.env.NODE_ENV !== 'production') {
          validateFieldDecoratedWithApi(Ctor, fieldName, descriptor);
        }
        // [W-9927596] If a component has both a public property and a private setter/getter
        // with the same name, the property is defined as a public accessor. This branch is
        // only here for backward compatibility reasons.
        if (!isUndefined$1(descriptor) && !isUndefined$1(descriptor.get)) {
          descriptor = createPublicAccessorDescriptor(fieldName, descriptor);
        } else {
          descriptor = createPublicPropertyDescriptor(fieldName);
        }
      }
      apiFields[fieldName] = descriptor;
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(publicMethods)) {
    forEach.call(publicMethods, methodName => {
      descriptor = getOwnPropertyDescriptor$1(proto, methodName);
      if (process.env.NODE_ENV !== 'production') {
        validateMethodDecoratedWithApi(Ctor, methodName, descriptor);
      }
      if (isUndefined$1(descriptor)) {
        throw new Error();
      }
      apiMethods[methodName] = descriptor;
    });
  }
  if (!isUndefined$1(wire)) {
    for (const fieldOrMethodName in wire) {
      const {
        adapter,
        method,
        config: configCallback,
        dynamic = []
      } = wire[fieldOrMethodName];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldOrMethodName);
      if (method === 1) {
        if (process.env.NODE_ENV !== 'production') {
          if (!adapter) {
            // TODO [#3408]: this should throw, not log
            logError(`@wire on method "${fieldOrMethodName}": adapter id must be truthy.`);
          }
          validateMethodDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }
        if (isUndefined$1(descriptor)) {
          throw new Error();
        }
        wiredMethods[fieldOrMethodName] = descriptor;
        storeWiredMethodMeta(descriptor, adapter, configCallback, dynamic);
      } else {
        if (process.env.NODE_ENV !== 'production') {
          if (!adapter) {
            // TODO [#3408]: this should throw, not log
            logError(`@wire on field "${fieldOrMethodName}": adapter id must be truthy.`);
          }
          validateFieldDecoratedWithWire(Ctor, fieldOrMethodName, descriptor);
        }
        descriptor = internalWireFieldDecorator(fieldOrMethodName);
        wiredFields[fieldOrMethodName] = descriptor;
        storeWiredFieldMeta(descriptor, adapter, configCallback, dynamic);
        defineProperty(proto, fieldOrMethodName, descriptor);
      }
    }
  }
  if (!isUndefined$1(track)) {
    for (const fieldName in track) {
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      if (process.env.NODE_ENV !== 'production') {
        validateFieldDecoratedWithTrack(Ctor, fieldName, descriptor);
      }
      descriptor = internalTrackDecorator(fieldName);
      defineProperty(proto, fieldName, descriptor);
    }
  }
  if (!isUndefined$1(fields)) {
    for (let i = 0, n = fields.length; i < n; i++) {
      const fieldName = fields[i];
      descriptor = getOwnPropertyDescriptor$1(proto, fieldName);
      if (process.env.NODE_ENV !== 'production') {
        validateObservedField(Ctor, fieldName, descriptor);
      }
      // [W-9927596] Only mark a field as observed whenever it isn't a duplicated public nor
      // tracked property. This is only here for backward compatibility purposes.
      const isDuplicatePublicProp = !isUndefined$1(publicProps) && fieldName in publicProps;
      const isDuplicateTrackedProp = !isUndefined$1(track) && fieldName in track;
      if (!isDuplicatePublicProp && !isDuplicateTrackedProp) {
        observedFields[fieldName] = createObservedFieldPropertyDescriptor(fieldName);
      }
    }
  }
  setDecoratorsMeta(Ctor, {
    apiMethods,
    apiFields,
    apiFieldsConfig,
    wiredMethods,
    wiredFields,
    observedFields
  });
  return Ctor;
}
const signedDecoratorToMetaMap = new Map();
function setDecoratorsMeta(Ctor, meta) {
  signedDecoratorToMetaMap.set(Ctor, meta);
}
const defaultMeta = {
  apiMethods: EmptyObject,
  apiFields: EmptyObject,
  apiFieldsConfig: EmptyObject,
  wiredMethods: EmptyObject,
  wiredFields: EmptyObject,
  observedFields: EmptyObject
};
function getDecoratorsMeta(Ctor) {
  const meta = signedDecoratorToMetaMap.get(Ctor);
  return isUndefined$1(meta) ? defaultMeta : meta;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let warned = false;
// Only used in LWC's Karma tests
if (process.env.NODE_ENV === 'test-karma-lwc') {
  // @ts-ignore
  window.__lwcResetWarnedOnVersionMismatch = () => {
    warned = false;
  };
}
function checkVersionMismatch(func, type) {
  const versionMatcher = func.toString().match(LWC_VERSION_COMMENT_REGEX);
  if (!isNull(versionMatcher) && !warned) {
    const version = versionMatcher[1];
    const [major, minor] = version.split('.');
    const [expectedMajor, expectedMinor] = LWC_VERSION.split('.');
    if (major !== expectedMajor || minor !== expectedMinor) {
      warned = true; // only warn once to avoid flooding the console
      // stylesheets and templates do not have user-meaningful names, but components do
      const friendlyName = type === 'component' ? `${type} ${func.name}` : type;
      logError(`LWC WARNING: current engine is v${LWC_VERSION}, but ${friendlyName} was compiled with v${version}.\nPlease update your compiled code or LWC engine so that the versions match.\nNo further warnings will appear.`);
      report("CompilerRuntimeVersionMismatch" /* ReportingEventId.CompilerRuntimeVersionMismatch */, {
        compilerVersion: version,
        runtimeVersion: LWC_VERSION
      });
    }
  }
}
const signedTemplateSet = new Set();
function defaultEmptyTemplate() {
  return [];
}
signedTemplateSet.add(defaultEmptyTemplate);
function isTemplateRegistered(tpl) {
  return signedTemplateSet.has(tpl);
}
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */
function registerTemplate(tpl) {
  if (process.env.NODE_ENV !== 'production') {
    checkVersionMismatch(tpl, 'template');
  }
  signedTemplateSet.add(tpl);
  // chaining this method as a way to wrap existing
  // assignment of templates easily, without too much transformation
  return tpl;
}
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize vulnerable attributes.
 */
function sanitizeAttribute(tagName, namespaceUri, attrName, attrValue) {
  // locker-service patches this function during runtime to sanitize vulnerable attributes. When
  // ran off-core this function becomes a noop and returns the user authored value.
  return attrValue;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for creating the base bridge class BaseBridgeElement
 * that represents the HTMLElement extension used for any LWC inserted in the DOM.
 */
// A bridge descriptor is a descriptor whose job is just to get the component instance
// from the element instance, and get the value or set a new value on the component.
// This means that across different elements, similar names can get the exact same
// descriptor, so we can cache them:
const cachedGetterByKey = create(null);
const cachedSetterByKey = create(null);
function createGetter(key) {
  let fn = cachedGetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedGetterByKey[key] = function () {
      const vm = getAssociatedVM(this);
      const {
        getHook
      } = vm;
      return getHook(vm.component, key);
    };
  }
  return fn;
}
function createSetter(key) {
  let fn = cachedSetterByKey[key];
  if (isUndefined$1(fn)) {
    fn = cachedSetterByKey[key] = function (newValue) {
      const vm = getAssociatedVM(this);
      const {
        setHook
      } = vm;
      newValue = getReadOnlyProxy(newValue);
      setHook(vm.component, key, newValue);
    };
  }
  return fn;
}
function createMethodCaller(methodName) {
  return function () {
    const vm = getAssociatedVM(this);
    const {
      callHook,
      component
    } = vm;
    const fn = component[methodName];
    return callHook(vm.component, fn, ArraySlice.call(arguments));
  };
}
function createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback) {
  return function attributeChangedCallback(attrName, oldValue, newValue) {
    if (oldValue === newValue) {
      // Ignore same values.
      return;
    }
    const propName = attributeToPropMap[attrName];
    if (isUndefined$1(propName)) {
      if (!isUndefined$1(superAttributeChangedCallback)) {
        // delegate unknown attributes to the super.
        // Typescript does not like it when you treat the `arguments` object as an array
        // @ts-ignore type-mismatch
        superAttributeChangedCallback.apply(this, arguments);
      }
      return;
    }
    // Reflect attribute change to the corresponding property when changed from outside.
    this[propName] = newValue;
  };
}
function createAccessorThatWarns(propName) {
  let prop;
  return {
    get() {
      logWarn(`The property "${propName}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`);
      return prop;
    },
    set(value) {
      logWarn(`The property "${propName}" is not publicly accessible. Add the @api annotation to the property declaration or getter/setter in the component to make it accessible.`);
      prop = value;
    },
    enumerable: true,
    configurable: true
  };
}
function HTMLBridgeElementFactory(SuperClass, publicProperties, methods, observedFields, proto, hasCustomSuperClass) {
  const HTMLBridgeElement = class extends SuperClass {
    /*LWC compiler v6.6.6*/
  };
  // generating the hash table for attributes to avoid duplicate fields and facilitate validation
  // and false positives in case of inheritance.
  const attributeToPropMap = create(null);
  const {
    attributeChangedCallback: superAttributeChangedCallback
  } = SuperClass.prototype;
  const {
    observedAttributes: superObservedAttributes = []
  } = SuperClass;
  const descriptors = create(null);
  // present a hint message so that developers are aware that they have not decorated property with @api
  if (process.env.NODE_ENV !== 'production') {
    // TODO [#3761]: enable for components that don't extend from LightningElement
    if (!isUndefined$1(proto) && !isNull(proto) && !hasCustomSuperClass) {
      const nonPublicPropertiesToWarnOn = new Set([
      // getters, setters, and methods
      ...keys(getOwnPropertyDescriptors(proto)),
      // class properties
      ...observedFields]
      // we don't want to override HTMLElement props because these are meaningful in other ways,
      // and can break tooling that expects it to be iterable or defined, e.g. Jest:
      // https://github.com/jestjs/jest/blob/b4c9587/packages/pretty-format/src/plugins/DOMElement.ts#L95
      // It also doesn't make sense to override e.g. "constructor".
      .filter(propName => !(propName in HTMLElementPrototype)));
      for (const propName of nonPublicPropertiesToWarnOn) {
        if (ArrayIndexOf.call(publicProperties, propName) === -1) {
          descriptors[propName] = createAccessorThatWarns(propName);
        }
      }
    }
  }
  // expose getters and setters for each public props on the new Element Bridge
  for (let i = 0, len = publicProperties.length; i < len; i += 1) {
    const propName = publicProperties[i];
    attributeToPropMap[htmlPropertyToAttribute(propName)] = propName;
    descriptors[propName] = {
      get: createGetter(propName),
      set: createSetter(propName),
      enumerable: true,
      configurable: true
    };
  }
  // expose public methods as props on the new Element Bridge
  for (let i = 0, len = methods.length; i < len; i += 1) {
    const methodName = methods[i];
    descriptors[methodName] = {
      value: createMethodCaller(methodName),
      writable: true,
      configurable: true
    };
  }
  // creating a new attributeChangedCallback per bridge because they are bound to the corresponding
  // map of attributes to props. We do this after all other props and methods to avoid the possibility
  // of getting overrule by a class declaration in user-land, and we make it non-writable, non-configurable
  // to preserve this definition.
  descriptors.attributeChangedCallback = {
    value: createAttributeChangedCallback(attributeToPropMap, superAttributeChangedCallback)
  };
  // To avoid leaking private component details, accessing internals from outside a component is not allowed.
  descriptors.attachInternals = {
    set() {
      if (process.env.NODE_ENV !== 'production') {
        logWarn('attachInternals cannot be accessed outside of a component. Use this.attachInternals instead.');
      }
    },
    get() {
      if (process.env.NODE_ENV !== 'production') {
        logWarn('attachInternals cannot be accessed outside of a component. Use this.attachInternals instead.');
      }
    }
  };
  descriptors.formAssociated = {
    set() {
      if (process.env.NODE_ENV !== 'production') {
        logWarn('formAssociated cannot be accessed outside of a component. Set the value within the component class.');
      }
    },
    get() {
      if (process.env.NODE_ENV !== 'production') {
        logWarn('formAssociated cannot be accessed outside of a component. Set the value within the component class.');
      }
    }
  };
  // Specify attributes for which we want to reflect changes back to their corresponding
  // properties via attributeChangedCallback.
  defineProperty(HTMLBridgeElement, 'observedAttributes', {
    get() {
      return [...superObservedAttributes, ...keys(attributeToPropMap)];
    }
  });
  defineProperties(HTMLBridgeElement.prototype, descriptors);
  return HTMLBridgeElement;
}
const BaseBridgeElement = HTMLBridgeElementFactory(HTMLElementConstructor, getOwnPropertyNames$1(HTMLElementOriginalDescriptors), [], [], null, false);
{
  // This ARIA reflection only really makes sense in the browser. On the server, there is no `renderedCallback()`,
  // so you cannot do e.g. `this.template.querySelector('x-child').ariaBusy = 'true'`. So we don't need to expose
  // ARIA props outside the LightningElement
  //
  // Apply ARIA reflection to HTMLBridgeElement.prototype. This allows `elm.aria*` property accessors to work from
  // outside a component, and to reflect `aria-*` attrs. This is especially important because the template compiler
  // compiles aria-* attrs on components to aria* props.
  // Note this works regardless of whether the global ARIA reflection polyfill is applied or not.
  //
  // Also note that we apply this to BaseBridgeElement.prototype to avoid excessively redefining property
  // accessors inside the HTMLBridgeElementFactory.
  applyAriaReflection(BaseBridgeElement.prototype);
}
freeze(BaseBridgeElement);
seal(BaseBridgeElement.prototype);

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const supportsWeakRefs = typeof WeakRef === 'function' && typeof FinalizationRegistry === 'function';
// In browsers that doesn't support WeakRefs, the values will still leak, but at least the keys won't
class LegacyWeakMultiMap {
  constructor() {
    this._map = new WeakMap();
  }
  _getValues(key) {
    let values = this._map.get(key);
    if (isUndefined$1(values)) {
      values = new Set();
      this._map.set(key, values);
    }
    return values;
  }
  get(key) {
    return this._getValues(key);
  }
  add(key, vm) {
    const set = this._getValues(key);
    set.add(vm);
  }
  delete(key) {
    this._map.delete(key);
  }
}
// This implementation relies on the WeakRef/FinalizationRegistry proposal.
// For some background, see: https://github.com/tc39/proposal-weakrefs
class ModernWeakMultiMap {
  constructor() {
    this._map = new WeakMap();
    this._registry = new FinalizationRegistry(weakRefs => {
      // This should be considered an optional cleanup method to remove GC'ed values from their respective arrays.
      // JS VMs are not obligated to call FinalizationRegistry callbacks.
      // Work backwards, removing stale VMs
      for (let i = weakRefs.length - 1; i >= 0; i--) {
        const vm = weakRefs[i].deref();
        if (isUndefined$1(vm)) {
          ArraySplice.call(weakRefs, i, 1); // remove
        }
      }
    });
  }
  _getWeakRefs(key) {
    let weakRefs = this._map.get(key);
    if (isUndefined$1(weakRefs)) {
      weakRefs = [];
      this._map.set(key, weakRefs);
    }
    return weakRefs;
  }
  get(key) {
    const weakRefs = this._getWeakRefs(key);
    const result = new Set();
    for (const weakRef of weakRefs) {
      const vm = weakRef.deref();
      if (!isUndefined$1(vm)) {
        result.add(vm);
      }
    }
    return result;
  }
  add(key, value) {
    const weakRefs = this._getWeakRefs(key);
    // We could check for duplicate values here, but it doesn't seem worth it.
    // We transform the output into a Set anyway
    ArrayPush$1.call(weakRefs, new WeakRef(value));
    // It's important here not to leak the second argument, which is the "held value." The FinalizationRegistry
    // effectively creates a strong reference between the first argument (the "target") and the held value. When
    // the target is GC'ed, the callback is called, and then the held value is GC'ed.
    // Putting the key here would mean the key is not GC'ed until the value is GC'ed, which defeats the purpose
    // of the WeakMap. Whereas putting the weakRefs array here is fine, because it doesn't have a strong reference
    // to anything. See also this example:
    // https://gist.github.com/nolanlawson/79a3d36e8e6cc25c5048bb17c1795aea
    this._registry.register(value, weakRefs);
  }
  delete(key) {
    this._map.delete(key);
  }
}
const WeakMultiMap = supportsWeakRefs ? ModernWeakMultiMap : LegacyWeakMultiMap;

/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const swappedTemplateMap = new WeakMap();
const swappedComponentMap = new WeakMap();
const swappedStyleMap = new WeakMap();
// The important thing here is the weak values – VMs are transient (one per component instance) and should be GC'ed,
// so we don't want to create strong references to them.
// The weak keys are kind of useless, because Templates, LightningElementConstructors, and StylesheetFactories are
// never GC'ed. But maybe they will be someday, so we may as well use weak keys too.
const activeTemplates = new WeakMultiMap();
const activeComponents = new WeakMultiMap();
const activeStyles = new WeakMultiMap();
function rehydrateHotTemplate(tpl) {
  const list = activeTemplates.get(tpl);
  for (const vm of list) {
    if (isFalse(vm.isDirty)) {
      // forcing the vm to rehydrate in the micro-task:
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  }
  // Resetting the Set since these VMs are no longer related to this template, instead
  // they will get re-associated once these instances are rehydrated.
  activeTemplates.delete(tpl);
  return true;
}
function rehydrateHotStyle(style) {
  const list = activeStyles.get(style);
  for (const vm of list) {
    // if a style definition is swapped, we must reset
    // vm's template content in the next micro-task:
    forceRehydration(vm);
  }
  // Resetting the Set since these VMs are no longer related to this style, instead
  // they will get re-associated once these instances are rehydrated.
  activeStyles.delete(style);
  return true;
}
function rehydrateHotComponent(Ctor) {
  const list = activeComponents.get(Ctor);
  let canRefreshAllInstances = true;
  for (const vm of list) {
    const {
      owner
    } = vm;
    if (!isNull(owner)) {
      // if a component class definition is swapped, we must reset
      // owner's template content in the next micro-task:
      forceRehydration(owner);
    } else {
      // the hot swapping for components only work for instances of components
      // created from a template, root elements can't be swapped because we
      // don't have a way to force the creation of the element with the same state
      // of the current element.
      // Instead, we can report the problem to the caller so it can take action,
      // for example: reload the entire page.
      canRefreshAllInstances = false;
    }
  }
  // resetting the Set since these VMs are no longer related to this constructor, instead
  // they will get re-associated once these instances are rehydrated.
  activeComponents.delete(Ctor);
  return canRefreshAllInstances;
}
function getTemplateOrSwappedTemplate(tpl) {
  assertNotProd(); // this method should never leak to prod
  const visited = new Set();
  while (swappedTemplateMap.has(tpl) && !visited.has(tpl)) {
    visited.add(tpl);
    tpl = swappedTemplateMap.get(tpl);
  }
  return tpl;
}
function getComponentOrSwappedComponent(Ctor) {
  assertNotProd(); // this method should never leak to prod
  const visited = new Set();
  while (swappedComponentMap.has(Ctor) && !visited.has(Ctor)) {
    visited.add(Ctor);
    Ctor = swappedComponentMap.get(Ctor);
  }
  return Ctor;
}
function getStyleOrSwappedStyle(style) {
  assertNotProd(); // this method should never leak to prod
  const visited = new Set();
  while (swappedStyleMap.has(style) && !visited.has(style)) {
    visited.add(style);
    style = swappedStyleMap.get(style);
  }
  return style;
}
function setActiveVM(vm) {
  assertNotProd(); // this method should never leak to prod
  // tracking active component
  const Ctor = vm.def.ctor;
  // this will allow us to keep track of the hot components
  activeComponents.add(Ctor, vm);
  // tracking active template
  const tpl = vm.cmpTemplate;
  if (tpl) {
    // this will allow us to keep track of the templates that are
    // being used by a hot component
    activeTemplates.add(tpl, vm);
    // tracking active styles associated to template
    const stylesheets = tpl.stylesheets;
    if (!isUndefined$1(stylesheets)) {
      for (const stylesheet of flattenStylesheets(stylesheets)) {
        // this is necessary because we don't hold the list of styles
        // in the vm, we only hold the selected (already swapped template)
        // but the styles attached to the template might not be the actual
        // active ones, but the swapped versions of those.
        const swappedStylesheet = getStyleOrSwappedStyle(stylesheet);
        // this will allow us to keep track of the stylesheet that are
        // being used by a hot component
        activeStyles.add(swappedStylesheet, vm);
      }
    }
  }
}
function swapTemplate(oldTpl, newTpl) {
  if (process.env.NODE_ENV !== 'production') {
    if (isTemplateRegistered(oldTpl) && isTemplateRegistered(newTpl)) {
      swappedTemplateMap.set(oldTpl, newTpl);
      return rehydrateHotTemplate(oldTpl);
    } else {
      throw new TypeError(`Invalid Template`);
    }
  }
  return false;
}
function swapComponent(oldComponent, newComponent) {
  if (process.env.NODE_ENV !== 'production') {
    if (isComponentConstructor(oldComponent) && isComponentConstructor(newComponent)) {
      swappedComponentMap.set(oldComponent, newComponent);
      return rehydrateHotComponent(oldComponent);
    } else {
      throw new TypeError(`Invalid Component`);
    }
  }
  return false;
}
function swapStyle(oldStyle, newStyle) {
  if (process.env.NODE_ENV !== 'production') {
    // TODO [#1887]: once the support for registering styles is implemented
    // we can add the validation of both styles around this block.
    swappedStyleMap.set(oldStyle, newStyle);
    return rehydrateHotStyle(oldStyle);
  }
  return false;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This module is responsible for producing the ComponentDef object that is always
 * accessible via `vm.def`. This is lazily created during the creation of the first
 * instance of a component class, and shared across all instances.
 *
 * This structure can be used to synthetically create proxies, and understand the
 * shape of a component. It is also used internally to apply extra optimizations.
 */
const CtorToDefMap = new WeakMap();
function getCtorProto(Ctor) {
  let proto = getPrototypeOf$1(Ctor);
  if (isNull(proto)) {
    throw new ReferenceError(`Invalid prototype chain for ${Ctor.name}, you must extend LightningElement.`);
  }
  // covering the cases where the ref is circular in AMD
  if (isCircularModuleDependency(proto)) {
    const p = resolveCircularModuleDependency(proto);
    if (process.env.NODE_ENV !== 'production') {
      if (isNull(p)) {
        throw new ReferenceError(`Circular module dependency for ${Ctor.name}, must resolve to a constructor that extends LightningElement.`);
      }
    }
    // escape hatch for Locker and other abstractions to provide their own base class instead
    // of our Base class without having to leak it to user-land. If the circular function returns
    // itself, that's the signal that we have hit the end of the proto chain, which must always
    // be base.
    proto = p === proto ? LightningElement : p;
  }
  return proto;
}
function createComponentDef(Ctor) {
  const {
    shadowSupportMode: ctorShadowSupportMode,
    renderMode: ctorRenderMode,
    formAssociated: ctorFormAssociated
  } = Ctor;
  if (process.env.NODE_ENV !== 'production') {
    const ctorName = Ctor.name;
    // Removing the following assert until https://bugs.webkit.org/show_bug.cgi?id=190140 is fixed.
    // assert.isTrue(ctorName && isString(ctorName), `${toString(Ctor)} should have a "name" property with string value, but found ${ctorName}.`);
    if (!Ctor.constructor) {
      // This error seems impossible to hit, due to an earlier check in `isComponentConstructor()`.
      // But we keep it here just in case.
      logError(`Missing ${ctorName}.constructor, ${ctorName} should have a "constructor" property.`);
    }
    if (!isUndefined$1(ctorShadowSupportMode) && ctorShadowSupportMode !== "any" /* ShadowSupportMode.Any */ && ctorShadowSupportMode !== "reset" /* ShadowSupportMode.Default */ && ctorShadowSupportMode !== "native" /* ShadowSupportMode.Native */) {
      logError(`Invalid value for static property shadowSupportMode: '${ctorShadowSupportMode}'`);
    }
    if (!isUndefined$1(ctorRenderMode) && ctorRenderMode !== 'light' && ctorRenderMode !== 'shadow') {
      logError(`Invalid value for static property renderMode: '${ctorRenderMode}'. renderMode must be either 'light' or 'shadow'.`);
    }
  }
  const decoratorsMeta = getDecoratorsMeta(Ctor);
  const {
    apiFields,
    apiFieldsConfig,
    apiMethods,
    wiredFields,
    wiredMethods,
    observedFields
  } = decoratorsMeta;
  const proto = Ctor.prototype;
  let {
    connectedCallback,
    disconnectedCallback,
    renderedCallback,
    errorCallback,
    formAssociatedCallback,
    formResetCallback,
    formDisabledCallback,
    formStateRestoreCallback,
    render
  } = proto;
  const superProto = getCtorProto(Ctor);
  const hasCustomSuperClass = superProto !== LightningElement;
  const superDef = hasCustomSuperClass ? getComponentInternalDef(superProto) : lightingElementDef;
  const bridge = HTMLBridgeElementFactory(superDef.bridge, keys(apiFields), keys(apiMethods), keys(observedFields), proto, hasCustomSuperClass);
  const props = assign(create(null), superDef.props, apiFields);
  const propsConfig = assign(create(null), superDef.propsConfig, apiFieldsConfig);
  const methods = assign(create(null), superDef.methods, apiMethods);
  const wire = assign(create(null), superDef.wire, wiredFields, wiredMethods);
  connectedCallback = connectedCallback || superDef.connectedCallback;
  disconnectedCallback = disconnectedCallback || superDef.disconnectedCallback;
  renderedCallback = renderedCallback || superDef.renderedCallback;
  errorCallback = errorCallback || superDef.errorCallback;
  formAssociatedCallback = formAssociatedCallback || superDef.formAssociatedCallback;
  formResetCallback = formResetCallback || superDef.formResetCallback;
  formDisabledCallback = formDisabledCallback || superDef.formDisabledCallback;
  formStateRestoreCallback = formStateRestoreCallback || superDef.formStateRestoreCallback;
  render = render || superDef.render;
  let shadowSupportMode = superDef.shadowSupportMode;
  if (!isUndefined$1(ctorShadowSupportMode)) {
    shadowSupportMode = ctorShadowSupportMode;
  }
  let renderMode = superDef.renderMode;
  if (!isUndefined$1(ctorRenderMode)) {
    renderMode = ctorRenderMode === 'light' ? 0 /* RenderMode.Light */ : 1 /* RenderMode.Shadow */;
  }
  let formAssociated = superDef.formAssociated;
  if (!isUndefined$1(ctorFormAssociated)) {
    formAssociated = ctorFormAssociated;
  }
  const template = getComponentRegisteredTemplate(Ctor) || superDef.template;
  const name = Ctor.name || superDef.name;
  // installing observed fields into the prototype.
  defineProperties(proto, observedFields);
  const def = {
    ctor: Ctor,
    name,
    wire,
    props,
    propsConfig,
    methods,
    bridge,
    template,
    renderMode,
    shadowSupportMode,
    formAssociated,
    connectedCallback,
    disconnectedCallback,
    errorCallback,
    formAssociatedCallback,
    formDisabledCallback,
    formResetCallback,
    formStateRestoreCallback,
    renderedCallback,
    render
  };
  // This is a no-op unless Lightning DevTools are enabled.
  instrumentDef(def);
  if (process.env.NODE_ENV !== 'production') {
    freeze(Ctor.prototype);
  }
  return def;
}
/**
 * EXPERIMENTAL: This function allows for the identification of LWC constructors. This API is
 * subject to change or being removed.
 */
function isComponentConstructor(ctor) {
  if (!isFunction$1(ctor)) {
    return false;
  }
  // Fast path: LightningElement is part of the prototype chain of the constructor.
  if (ctor.prototype instanceof LightningElement) {
    return true;
  }
  // Slow path: LightningElement is not part of the prototype chain of the constructor, we need
  // climb up the constructor prototype chain to check in case there are circular dependencies
  // to resolve.
  let current = ctor;
  do {
    if (isCircularModuleDependency(current)) {
      const circularResolved = resolveCircularModuleDependency(current);
      // If the circular function returns itself, that's the signal that we have hit the end
      // of the proto chain, which must always be a valid base constructor.
      if (circularResolved === current) {
        return true;
      }
      current = circularResolved;
    }
    if (current === LightningElement) {
      return true;
    }
  } while (!isNull(current) && (current = getPrototypeOf$1(current)));
  // Finally return false if the LightningElement is not part of the prototype chain.
  return false;
}
function getComponentInternalDef(Ctor) {
  if (process.env.NODE_ENV !== 'production') {
    Ctor = getComponentOrSwappedComponent(Ctor);
  }
  let def = CtorToDefMap.get(Ctor);
  if (isUndefined$1(def)) {
    if (isCircularModuleDependency(Ctor)) {
      const resolvedCtor = resolveCircularModuleDependency(Ctor);
      def = getComponentInternalDef(resolvedCtor);
      // Cache the unresolved component ctor too. The next time if the same unresolved ctor is used,
      // look up the definition in cache instead of re-resolving and recreating the def.
      CtorToDefMap.set(Ctor, def);
      return def;
    }
    if (!isComponentConstructor(Ctor)) {
      throw new TypeError(`${Ctor} is not a valid component, or does not extends LightningElement from "lwc". You probably forgot to add the extend clause on the class declaration.`);
    }
    def = createComponentDef(Ctor);
    CtorToDefMap.set(Ctor, def);
  }
  return def;
}
function getComponentHtmlPrototype(Ctor) {
  const def = getComponentInternalDef(Ctor);
  return def.bridge;
}
const lightingElementDef = {
  ctor: LightningElement,
  name: LightningElement.name,
  props: lightningBasedDescriptors,
  propsConfig: EmptyObject,
  methods: EmptyObject,
  renderMode: 1 /* RenderMode.Shadow */,
  shadowSupportMode: "reset" /* ShadowSupportMode.Default */,
  formAssociated: undefined,
  wire: EmptyObject,
  bridge: BaseBridgeElement,
  template: defaultEmptyTemplate,
  render: LightningElement.prototype.render
};
/**
 * EXPERIMENTAL: This function allows for the collection of internal component metadata. This API is
 * subject to change or being removed.
 */
function getComponentDef(Ctor) {
  const def = getComponentInternalDef(Ctor);
  // From the internal def object, we need to extract the info that is useful
  // for some external services, e.g.: Locker Service, usually, all they care
  // is about the shape of the constructor, the internals of it are not relevant
  // because they don't have a way to mess with that.
  const {
    ctor,
    name,
    props,
    propsConfig,
    methods
  } = def;
  const publicProps = {};
  for (const key in props) {
    // avoid leaking the reference to the public props descriptors
    publicProps[key] = {
      config: propsConfig[key] || 0,
      type: "any" /* PropDefType.any */,
      attr: htmlPropertyToAttribute(key)
    };
  }
  const publicMethods = {};
  for (const key in methods) {
    // avoid leaking the reference to the public method descriptors
    publicMethods[key] = methods[key].value;
  }
  return {
    ctor,
    name,
    props: publicProps,
    methods: publicMethods
  };
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function makeHostToken(token) {
  // Note: if this ever changes, update the `cssScopeTokens` returned by `@lwc/compiler`
  return `${token}-host`;
}
function createInlineStyleVNode(content) {
  return api.h('style', {
    key: 'style',
    attrs: {
      type: 'text/css'
    }
  }, [api.t(content)]);
}
// TODO [#3733]: remove support for legacy scope tokens
function updateStylesheetToken(vm, template, legacy) {
  const {
    elm,
    context,
    renderMode,
    shadowMode,
    renderer: {
      getClassList,
      removeAttribute,
      setAttribute
    }
  } = vm;
  const {
    stylesheets: newStylesheets
  } = template;
  const newStylesheetToken = legacy ? template.legacyStylesheetToken : template.stylesheetToken;
  const {
    stylesheets: newVmStylesheets
  } = vm;
  const isSyntheticShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */;
  const {
    hasScopedStyles
  } = context;
  let newToken;
  let newHasTokenInClass;
  let newHasTokenInAttribute;
  // Reset the styling token applied to the host element.
  let oldToken;
  let oldHasTokenInClass;
  let oldHasTokenInAttribute;
  if (legacy) {
    oldToken = context.legacyStylesheetToken;
    oldHasTokenInClass = context.hasLegacyTokenInClass;
    oldHasTokenInAttribute = context.hasLegacyTokenInAttribute;
  } else {
    oldToken = context.stylesheetToken;
    oldHasTokenInClass = context.hasTokenInClass;
    oldHasTokenInAttribute = context.hasTokenInAttribute;
  }
  if (!isUndefined$1(oldToken)) {
    if (oldHasTokenInClass) {
      getClassList(elm).remove(makeHostToken(oldToken));
    }
    if (oldHasTokenInAttribute) {
      removeAttribute(elm, makeHostToken(oldToken));
    }
  }
  // Apply the new template styling token to the host element, if the new template has any
  // associated stylesheets. In the case of light DOM, also ensure there is at least one scoped stylesheet.
  const hasNewStylesheets = hasStyles(newStylesheets);
  const hasNewVmStylesheets = hasStyles(newVmStylesheets);
  if (hasNewStylesheets || hasNewVmStylesheets) {
    newToken = newStylesheetToken;
  }
  // Set the new styling token on the host element
  if (!isUndefined$1(newToken)) {
    if (hasScopedStyles) {
      getClassList(elm).add(makeHostToken(newToken));
      newHasTokenInClass = true;
    }
    if (isSyntheticShadow) {
      setAttribute(elm, makeHostToken(newToken), '');
      newHasTokenInAttribute = true;
    }
  }
  // Update the styling tokens present on the context object.
  if (legacy) {
    context.legacyStylesheetToken = newToken;
    context.hasLegacyTokenInClass = newHasTokenInClass;
    context.hasLegacyTokenInAttribute = newHasTokenInAttribute;
  } else {
    context.stylesheetToken = newToken;
    context.hasTokenInClass = newHasTokenInClass;
    context.hasTokenInAttribute = newHasTokenInAttribute;
  }
}
function evaluateStylesheetsContent(stylesheets, stylesheetToken, vm) {
  const content = [];
  let root;
  for (let i = 0; i < stylesheets.length; i++) {
    let stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      ArrayPush$1.apply(content, evaluateStylesheetsContent(stylesheet, stylesheetToken, vm));
    } else {
      if (process.env.NODE_ENV !== 'production') {
        // Check for compiler version mismatch in dev mode only
        checkVersionMismatch(stylesheet, 'stylesheet');
        // in dev-mode, we support hot swapping of stylesheet, which means that
        // the component instance might be attempting to use an old version of
        // the stylesheet, while internally, we have a replacement for it.
        stylesheet = getStyleOrSwappedStyle(stylesheet);
      }
      const isScopedCss = stylesheet[KEY__SCOPED_CSS];
      if (lwcRuntimeFlags.DISABLE_LIGHT_DOM_UNSCOPED_CSS && !isScopedCss && vm.renderMode === 0 /* RenderMode.Light */) {
        logError('Unscoped CSS is not supported in Light DOM in this environment. Please use scoped CSS ' + '(*.scoped.css) instead of unscoped CSS (*.css). See also: https://sfdc.co/scoped-styles-light-dom');
        continue;
      }
      // Apply the scope token only if the stylesheet itself is scoped, or if we're rendering synthetic shadow.
      const scopeToken = isScopedCss || vm.shadowMode === 1 /* ShadowMode.Synthetic */ && vm.renderMode === 1 /* RenderMode.Shadow */ ? stylesheetToken : undefined;
      // Use the actual `:host` selector if we're rendering global CSS for light DOM, or if we're rendering
      // native shadow DOM. Synthetic shadow DOM never uses `:host`.
      const useActualHostSelector = vm.renderMode === 0 /* RenderMode.Light */ ? !isScopedCss : vm.shadowMode === 0 /* ShadowMode.Native */;
      // Use the native :dir() pseudoclass only in native shadow DOM. Otherwise, in synthetic shadow,
      // we use an attribute selector on the host to simulate :dir().
      let useNativeDirPseudoclass;
      if (vm.renderMode === 1 /* RenderMode.Shadow */) {
        useNativeDirPseudoclass = vm.shadowMode === 0 /* ShadowMode.Native */;
      } else {
        // Light DOM components should only render `[dir]` if they're inside of a synthetic shadow root.
        // At the top level (root is null) or inside of a native shadow root, they should use `:dir()`.
        if (isUndefined$1(root)) {
          // Only calculate the root once as necessary
          root = getNearestShadowComponent(vm);
        }
        useNativeDirPseudoclass = isNull(root) || root.shadowMode === 0 /* ShadowMode.Native */;
      }
      ArrayPush$1.call(content, stylesheet(scopeToken, useActualHostSelector, useNativeDirPseudoclass));
    }
  }
  return content;
}
function getStylesheetsContent(vm, template) {
  const {
    stylesheets,
    stylesheetToken
  } = template;
  const {
    stylesheets: vmStylesheets
  } = vm;
  let content = [];
  if (hasStyles(stylesheets)) {
    content = evaluateStylesheetsContent(stylesheets, stylesheetToken, vm);
  }
  // VM (component) stylesheets apply after template stylesheets
  if (hasStyles(vmStylesheets)) {
    ArrayPush$1.apply(content, evaluateStylesheetsContent(vmStylesheets, stylesheetToken, vm));
  }
  return content;
}
// It might be worth caching this to avoid doing the lookup repeatedly, but
// perf testing has not shown it to be a huge improvement yet:
// https://github.com/salesforce/lwc/pull/2460#discussion_r691208892
function getNearestShadowComponent(vm) {
  let owner = vm;
  while (!isNull(owner)) {
    if (owner.renderMode === 1 /* RenderMode.Shadow */) {
      return owner;
    }
    owner = owner.owner;
  }
  return owner;
}
/**
 * If the component that is currently being rendered uses scoped styles,
 * this returns the unique token for that scoped stylesheet. Otherwise
 * it returns null.
 */
// TODO [#3733]: remove support for legacy scope tokens
function getScopeTokenClass(owner, legacy) {
  const {
    cmpTemplate,
    context
  } = owner;
  return context.hasScopedStyles && (legacy ? cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.legacyStylesheetToken : cmpTemplate === null || cmpTemplate === void 0 ? void 0 : cmpTemplate.stylesheetToken) || null;
}
/**
 * This function returns the host style token for a custom element if it
 * exists. Otherwise it returns null.
 *
 * A host style token is applied to the component if scoped styles are used.
 */
function getStylesheetTokenHost(vnode) {
  const {
    template
  } = getComponentInternalDef(vnode.ctor);
  const {
    vm
  } = vnode;
  const {
    stylesheetToken
  } = template;
  return !isUndefined$1(stylesheetToken) && computeHasScopedStyles(template, vm) ? makeHostToken(stylesheetToken) : null;
}
function getNearestNativeShadowComponent(vm) {
  const owner = getNearestShadowComponent(vm);
  if (!isNull(owner) && owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
    // Synthetic-within-native is impossible. So if the nearest shadow component is
    // synthetic, we know we won't find a native component if we go any further.
    return null;
  }
  return owner;
}
function createStylesheet(vm, stylesheets) {
  const {
    renderMode,
    shadowMode,
    renderer: {
      insertStylesheet
    }
  } = vm;
  if (renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 1 /* ShadowMode.Synthetic */) {
    for (let i = 0; i < stylesheets.length; i++) {
      insertStylesheet(stylesheets[i]);
    }
  } else if (vm.hydrated) {
    // Note: We need to ensure that during hydration, the stylesheets method is the same as those in ssr.
    //       This works in the client, because the stylesheets are created, and cached in the VM
    //       the first time the VM renders.
    // native shadow or light DOM, SSR
    return ArrayMap.call(stylesheets, createInlineStyleVNode);
  } else {
    // native shadow or light DOM, DOM renderer
    const root = getNearestNativeShadowComponent(vm);
    // null root means a global style
    const target = isNull(root) ? undefined : root.shadowRoot;
    for (let i = 0; i < stylesheets.length; i++) {
      insertStylesheet(stylesheets[i], target);
    }
  }
  return null;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isVBaseElement(vnode) {
  const {
    type
  } = vnode;
  return type === 2 /* VNodeType.Element */ || type === 3 /* VNodeType.CustomElement */;
}
function isSameVnode(vnode1, vnode2) {
  return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVCustomElement(vnode) {
  return vnode.type === 3 /* VNodeType.CustomElement */;
}
function isVFragment(vnode) {
  return vnode.type === 5 /* VNodeType.Fragment */;
}
function isVScopedSlotFragment(vnode) {
  return vnode.type === 6 /* VNodeType.ScopedSlotFragment */;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ColonCharCode = 58;
function patchAttributes(oldVnode, vnode, renderer) {
  const {
    attrs,
    external
  } = vnode.data;
  if (isUndefined$1(attrs)) {
    return;
  }
  const oldAttrs = isNull(oldVnode) ? EmptyObject : oldVnode.data.attrs;
  // Attrs may be the same due to the static content optimization, so we can skip diffing
  if (oldAttrs === attrs) {
    return;
  }
  const {
    elm
  } = vnode;
  const {
    setAttribute,
    removeAttribute,
    setProperty
  } = renderer;
  for (const key in attrs) {
    const cur = attrs[key];
    const old = oldAttrs[key];
    if (old !== cur) {
      let propName;
      // For external custom elements, sniff to see if the attr should be considered a prop.
      // Use kebabCaseToCamelCase directly because we don't want to set props like `ariaLabel` or `tabIndex`
      // on a custom element versus just using the more reliable attribute format.
      if (external && (propName = kebabCaseToCamelCase(key)) in elm) {
        setProperty(elm, propName, cur);
      } else if (StringCharCodeAt.call(key, 3) === ColonCharCode) {
        // Assume xml namespace
        setAttribute(elm, key, cur, XML_NAMESPACE);
      } else if (StringCharCodeAt.call(key, 5) === ColonCharCode) {
        // Assume xlink namespace
        setAttribute(elm, key, cur, XLINK_NAMESPACE);
      } else if (isNull(cur) || isUndefined$1(cur)) {
        removeAttribute(elm, key);
      } else {
        setAttribute(elm, key, cur);
      }
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function isLiveBindingProp(sel, key) {
  // For properties with live bindings, we read values from the DOM element
  // instead of relying on internally tracked values.
  return sel === 'input' && (key === 'value' || key === 'checked');
}
function patchProps(oldVnode, vnode, renderer) {
  const {
    props
  } = vnode.data;
  if (isUndefined$1(props)) {
    return;
  }
  let oldProps;
  if (!isNull(oldVnode)) {
    oldProps = oldVnode.data.props;
    // Props may be the same due to the static content optimization, so we can skip diffing
    if (oldProps === props) {
      return;
    }
    if (isUndefined$1(oldProps)) {
      oldProps = EmptyObject;
    }
  }
  const isFirstPatch = isNull(oldVnode);
  const {
    elm,
    sel
  } = vnode;
  const {
    getProperty,
    setProperty
  } = renderer;
  for (const key in props) {
    const cur = props[key];
    // Set the property if it's the first time is is patched or if the previous property is
    // different than the one previously set.
    if (isFirstPatch || cur !== (isLiveBindingProp(sel, key) ? getProperty(elm, key) : oldProps[key]) || !(key in oldProps) // this is required because the above case will pass when `cur` is `undefined` and key is missing in `oldProps`
    ) {
      // Additional verification if properties are supported by the element
      // Validation relies on html properties and public properties being defined on the element,
      // SSR has its own custom validation.
      if (process.env.NODE_ENV !== 'production') {
        if (!(key in elm)) {
          logWarn(`Unknown public property "${key}" of element <${elm.tagName.toLowerCase()}>. This is either a typo on the corresponding attribute "${htmlPropertyToAttribute(key)}", or the attribute does not exist in this browser or DOM implementation.`);
        }
      }
      setProperty(elm, key, cur);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const classNameToClassMap = create(null);
function getMapFromClassName(className) {
  // Intentionally using == to match undefined and null values from computed style attribute
  if (className == null) {
    return EmptyObject;
  }
  // computed class names must be string
  className = isString(className) ? className : className + '';
  let map = classNameToClassMap[className];
  if (map) {
    return map;
  }
  map = create(null);
  let start = 0;
  let o;
  const len = className.length;
  for (o = 0; o < len; o++) {
    if (StringCharCodeAt.call(className, o) === SPACE_CHAR) {
      if (o > start) {
        map[StringSlice.call(className, start, o)] = true;
      }
      start = o + 1;
    }
  }
  if (o > start) {
    map[StringSlice.call(className, start, o)] = true;
  }
  classNameToClassMap[className] = map;
  if (process.env.NODE_ENV !== 'production') {
    // just to make sure that this object never changes as part of the diffing algo
    freeze(map);
  }
  return map;
}
function patchClassAttribute(oldVnode, vnode, renderer) {
  const {
    elm,
    data: {
      className: newClass
    }
  } = vnode;
  const oldClass = isNull(oldVnode) ? undefined : oldVnode.data.className;
  if (oldClass === newClass) {
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  const newClassMap = getMapFromClassName(newClass);
  const oldClassMap = getMapFromClassName(oldClass);
  let name;
  for (name in oldClassMap) {
    // remove only if it is not in the new class collection and it is not set from within the instance
    if (isUndefined$1(newClassMap[name])) {
      classList.remove(name);
    }
  }
  for (name in newClassMap) {
    if (isUndefined$1(oldClassMap[name])) {
      classList.add(name);
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The style property is a string when defined via an expression in the template.
function patchStyleAttribute(oldVnode, vnode, renderer) {
  const {
    elm,
    data: {
      style: newStyle
    }
  } = vnode;
  const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;
  if (oldStyle === newStyle) {
    return;
  }
  const {
    setAttribute,
    removeAttribute
  } = renderer;
  if (!isString(newStyle) || newStyle === '') {
    removeAttribute(elm, 'style');
  } else {
    setAttribute(elm, 'style', newStyle);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function applyEventListeners(vnode, renderer) {
  var _a;
  const {
    elm
  } = vnode;
  const on = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.on;
  if (isUndefined$1(on)) {
    return;
  }
  const {
    addEventListener
  } = renderer;
  for (const name in on) {
    const handler = on[name];
    addEventListener(elm, name, handler);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML class property becomes the vnode.data.classMap object when defined as a string in the template.
// The compiler takes care of transforming the inline classnames into an object. It's faster to set the
// different classnames properties individually instead of via a string.
function applyStaticClassAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      classMap
    }
  } = vnode;
  if (isUndefined$1(classMap)) {
    return;
  }
  const {
    getClassList
  } = renderer;
  const classList = getClassList(elm);
  for (const name in classMap) {
    classList.add(name);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// The HTML style property becomes the vnode.data.styleDecls object when defined as a string in the template.
// The compiler takes care of transforming the inline style into an object. It's faster to set the
// different style properties individually instead of via a string.
function applyStaticStyleAttribute(vnode, renderer) {
  const {
    elm,
    data: {
      styleDecls
    }
  } = vnode;
  if (isUndefined$1(styleDecls)) {
    return;
  }
  const {
    setCSSStyleProperty
  } = renderer;
  for (let i = 0; i < styleDecls.length; i++) {
    const [prop, value, important] = styleDecls[i];
    setCSSStyleProperty(elm, prop, value, important);
  }
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// Set a ref (lwc:ref) on a VM, from a template API
function applyRefs(vnode, owner) {
  const {
    data
  } = vnode;
  const {
    ref
  } = data;
  if (isUndefined$1(ref)) {
    return;
  }
  if (process.env.NODE_ENV !== 'production' && isUndefined$1(owner.refVNodes)) {
    throw new Error('refVNodes must be defined when setting a ref');
  }
  // If this method is called, then vm.refVNodes is set as the template has refs.
  // If not, then something went wrong and we threw an error above.
  const refVNodes = owner.refVNodes;
  // In cases of conflict (two elements with the same ref), prefer the last one,
  // in depth-first traversal order. This happens automatically due to how we render
  refVNodes[ref] = vnode;
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function traverseAndSetElements(root, parts, renderer) {
  const numParts = parts.length;
  // Optimization given that, in most cases, there will be one part, and it's just the root
  if (numParts === 1) {
    const firstPart = parts[0];
    if (firstPart.partId === 0) {
      // 0 means the root node
      firstPart.elm = root;
      return;
    }
  }
  const partIdsToParts = new Map();
  for (const staticPart of parts) {
    partIdsToParts.set(staticPart.partId, staticPart);
  }
  let numFoundParts = 0;
  const {
    previousSibling,
    getLastChild
  } = renderer;
  const stack = [root];
  let partId = -1;
  // Depth-first traversal. We assign a partId to each element, which is an integer based on traversal order.
  while (stack.length > 0) {
    const elm = ArrayShift.call(stack);
    partId++;
    const part = partIdsToParts.get(partId);
    if (!isUndefined$1(part)) {
      part.elm = elm;
      if (++numFoundParts === numParts) {
        return; // perf optimization - stop traversing once we've found everything we need
      }
    }
    // For depth-first traversal, prepend to the stack in reverse order
    // Note that we traverse using `*Child`/`*Sibling` rather than `children` because the browser uses a linked
    // list under the hood to represent the DOM tree, so it's faster to do this than to create an underlying array
    // by calling `children`.
    let child = getLastChild(elm);
    while (!isNull(child)) {
      ArrayUnshift.call(stack, child);
      child = previousSibling(child);
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(numFoundParts === numParts, `Should have found all parts by now. Found ${numFoundParts}, needed ${numParts}.`);
  }
}
/**
 * Given an array of static parts, do all the mounting required for these parts.
 *
 * @param root - the root element
 * @param vnode - the parent VStatic
 * @param renderer - the renderer to use
 * @param mount - true this is a first (mount) render as opposed to a subsequent (patch) render
 */
function applyStaticParts(root, vnode, renderer, mount) {
  const {
    parts,
    owner
  } = vnode;
  if (isUndefined$1(parts)) {
    return;
  }
  // This adds `part.elm` to each `part`. We have to do this on every mount/patch because the `parts`
  // array is recreated from scratch every time, so each `part.elm` is now undefined.
  // TODO [#3800]: avoid calling traverseAndSetElements on every re-render
  traverseAndSetElements(root, parts, renderer);
  // Currently only event listeners and refs are supported for static vnodes
  for (const part of parts) {
    if (mount) {
      // Event listeners only need to be applied once when mounting
      applyEventListeners(part, renderer);
    }
    // Refs must be updated after every render due to refVNodes getting reset before every render
    applyRefs(part, owner);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function patchChildren(c1, c2, parent, renderer) {
  if (hasDynamicChildren(c2)) {
    updateDynamicChildren(c1, c2, parent, renderer);
  } else {
    updateStaticChildren(c1, c2, parent, renderer);
  }
}
function patch(n1, n2, parent, renderer) {
  var _a, _b;
  if (n1 === n2) {
    return;
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!isSameVnode(n1, n2) &&
    // Currently the only scenario when patch does not receive the same vnodes are for
    // dynamic components. When a dynamic component's constructor changes, the value of its
    // tag name (sel) will be different. The engine will unmount the previous element
    // and mount the new one using the new constructor in patchCustomElement.
    !(isVCustomElement(n1) && isVCustomElement(n2))) {
      throw new Error('Expected these VNodes to be the same: ' + JSON.stringify({
        sel: n1.sel,
        key: n1.key
      }) + ', ' + JSON.stringify({
        sel: n2.sel,
        key: n2.key
      }));
    }
  }
  switch (n2.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      patchText(n1, n2, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      patchComment(n1, n2, renderer);
      break;
    case 4 /* VNodeType.Static */:
      patchStatic(n1, n2, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      patchFragment(n1, n2, parent, renderer);
      break;
    case 2 /* VNodeType.Element */:
      patchElement(n1, n2, (_a = n2.data.renderer) !== null && _a !== void 0 ? _a : renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      patchCustomElement(n1, n2, parent, (_b = n2.data.renderer) !== null && _b !== void 0 ? _b : renderer);
      break;
  }
}
function mount(node, parent, renderer, anchor) {
  var _a, _b;
  switch (node.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      mountText(node, parent, anchor, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      mountComment(node, parent, anchor, renderer);
      break;
    case 4 /* VNodeType.Static */:
      // VStatic cannot have a custom renderer associated to them, using owner's renderer
      mountStatic(node, parent, anchor, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      mountFragment(node, parent, anchor, renderer);
      break;
    case 2 /* VNodeType.Element */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountElement(node, parent, anchor, (_a = node.data.renderer) !== null && _a !== void 0 ? _a : renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      // If the vnode data has a renderer override use it, else fallback to owner's renderer
      mountCustomElement(node, parent, anchor, (_b = node.data.renderer) !== null && _b !== void 0 ? _b : renderer);
      break;
  }
}
function patchText(n1, n2, renderer) {
  n2.elm = n1.elm;
  if (n2.text !== n1.text) {
    updateTextContent(n2, renderer);
  }
}
function mountText(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createText
  } = renderer;
  const textNode = vnode.elm = createText(vnode.text);
  linkNodeToShadow(textNode, owner, renderer);
  insertNode(textNode, parent, anchor, renderer);
}
function patchComment(n1, n2, renderer) {
  n2.elm = n1.elm;
  // FIXME: Comment nodes should be static, we shouldn't need to diff them together. However
  // it is the case today.
  if (n2.text !== n1.text) {
    updateTextContent(n2, renderer);
  }
}
function mountComment(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    createComment
  } = renderer;
  const commentNode = vnode.elm = createComment(vnode.text);
  linkNodeToShadow(commentNode, owner, renderer);
  insertNode(commentNode, parent, anchor, renderer);
}
function mountFragment(vnode, parent, anchor, renderer) {
  const {
    children
  } = vnode;
  mountVNodes(children, parent, renderer, anchor);
  vnode.elm = vnode.leading.elm;
}
function patchFragment(n1, n2, parent, renderer) {
  const {
    children,
    stable
  } = n2;
  if (stable) {
    updateStaticChildren(n1.children, children, parent, renderer);
  } else {
    updateDynamicChildren(n1.children, children, parent, renderer);
  }
  // Note: not reusing n1.elm, because during patching, it may be patched with another text node.
  n2.elm = n2.leading.elm;
}
function mountElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner,
    data: {
      svg
    }
  } = vnode;
  const {
    createElement
  } = renderer;
  const namespace = isTrue(svg) ? SVG_NAMESPACE : undefined;
  const elm = vnode.elm = createElement(sel, namespace);
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  applyDomManual(elm, vnode);
  applyElementRestrictions(elm, vnode);
  patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  mountVNodes(vnode.children, elm, renderer, null);
}
function patchStatic(n1, n2, renderer) {
  const elm = n2.elm = n1.elm;
  // The `refs` object is blown away in every re-render, so we always need to re-apply them
  applyStaticParts(elm, n2, renderer, false);
}
function patchElement(n1, n2, renderer) {
  const elm = n2.elm = n1.elm;
  patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
  patchChildren(n1.children, n2.children, elm, renderer);
}
function mountStatic(vnode, parent, anchor, renderer) {
  const {
    owner
  } = vnode;
  const {
    cloneNode,
    isSyntheticShadowDefined
  } = renderer;
  const elm = vnode.elm = cloneNode(vnode.fragment, true);
  linkNodeToShadow(elm, owner, renderer);
  applyElementRestrictions(elm, vnode);
  // Marks this node as Static to propagate the shadow resolver. must happen after elm is assigned to the proper shadow
  const {
    renderMode,
    shadowMode
  } = owner;
  if (isSyntheticShadowDefined) {
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_STATIC] = true;
    }
  }
  insertNode(elm, parent, anchor, renderer);
  applyStaticParts(elm, vnode, renderer, true);
}
function mountCustomElement(vnode, parent, anchor, renderer) {
  const {
    sel,
    owner
  } = vnode;
  const {
    createCustomElement
  } = renderer;
  /**
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  let vm;
  const upgradeCallback = elm => {
    // the custom element from the registry is expecting an upgrade callback
    vm = createViewModelHook(elm, vnode, renderer);
  };
  let connectedCallback;
  let disconnectedCallback;
  let formAssociatedCallback;
  let formDisabledCallback;
  let formResetCallback;
  let formStateRestoreCallback;
  if (lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
    connectedCallback = elm => {
      connectRootElement(elm);
    };
    disconnectedCallback = elm => {
      disconnectRootElement(elm);
    };
    formAssociatedCallback = elm => {
      runFormAssociatedCallback(elm);
    };
    formDisabledCallback = elm => {
      runFormDisabledCallback(elm);
    };
    formResetCallback = elm => {
      runFormResetCallback(elm);
    };
    formStateRestoreCallback = elm => {
      runFormStateRestoreCallback(elm);
    };
  }
  // Should never get a tag with upper case letter at this point; the compiler
  // should produce only tags with lowercase letters. However, the Java
  // compiler may generate tagnames with uppercase letters so - for backwards
  // compatibility, we lower case the tagname here.
  const normalizedTagname = sel.toLowerCase();
  const elm = createCustomElement(normalizedTagname, upgradeCallback, connectedCallback, disconnectedCallback, formAssociatedCallback, formDisabledCallback, formResetCallback, formStateRestoreCallback);
  vnode.elm = elm;
  vnode.vm = vm;
  linkNodeToShadow(elm, owner, renderer);
  applyStyleScoping(elm, owner, renderer);
  if (vm) {
    allocateChildren(vnode, vm);
  }
  patchElementPropsAndAttrsAndRefs$1(null, vnode, renderer);
  insertNode(elm, parent, anchor, renderer);
  if (vm) {
    {
      if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
        if (process.env.NODE_ENV !== 'production') {
          // With synthetic lifecycle callbacks, it's possible for elements to be removed without the engine
          // noticing it (e.g. `appendChild` the same host element twice). This test ensures we don't regress.
          assert.isTrue(vm.state === 0 /* VMState.created */, `${vm} cannot be recycled.`);
        }
        runConnectedCallback(vm);
      }
    }
  }
  mountVNodes(vnode.children, elm, renderer, null);
  if (vm) {
    appendVM(vm);
  }
}
function patchCustomElement(n1, n2, parent, renderer) {
  // TODO [#3331]: This if branch should be removed in 246 with lwc:dynamic
  if (n1.ctor !== n2.ctor) {
    // If the constructor differs, unmount the current component and mount a new one using the new
    // constructor.
    const anchor = renderer.nextSibling(n1.elm);
    unmount(n1, parent, renderer, true);
    mountCustomElement(n2, parent, anchor, renderer);
  } else {
    // Otherwise patch the existing component with new props/attrs/etc.
    const elm = n2.elm = n1.elm;
    const vm = n2.vm = n1.vm;
    patchElementPropsAndAttrsAndRefs$1(n1, n2, renderer);
    if (!isUndefined$1(vm)) {
      // in fallback mode, the allocation will always set children to
      // empty and delegate the real allocation to the slot elements
      allocateChildren(n2, vm);
      // Solves an edge case with slotted VFragments in native shadow mode.
      //
      // During allocation, in native shadow, slotted VFragment nodes are flattened and their text delimiters are removed
      // to avoid interfering with native slot behavior. When this happens, if any of the fragments
      // were not stable, the children must go through the dynamic diffing algo.
      //
      // If the new children (n2.children) contain no VFragments, but the previous children (n1.children) were dynamic,
      // the new nodes must be marked dynamic so that all nodes are properly updated. The only indicator that the new
      // nodes need to be dynamic comes from the previous children, so we check that to determine whether we need to
      // mark the new children dynamic.
      //
      // Example:
      // n1.children: [div, VFragment('', div, null, ''), div] => [div, div, null, div]; // marked dynamic
      // n2.children: [div, null, div] => [div, null, div] // marked ???
      const {
        shadowMode,
        renderMode
      } = vm;
      if (shadowMode == 0 /* ShadowMode.Native */ && renderMode !== 0 /* RenderMode.Light */ && hasDynamicChildren(n1.children)) {
        // No-op if children has already been marked dynamic by 'allocateChildren()'.
        markAsDynamicChildren(n2.children);
      }
    }
    // in fallback mode, the children will be always empty, so, nothing
    // will happen, but in native, it does allocate the light dom
    patchChildren(n1.children, n2.children, elm, renderer);
    if (!isUndefined$1(vm)) {
      // this will probably update the shadowRoot, but only if the vm is in a dirty state
      // this is important to preserve the top to bottom synchronous rendering phase.
      rerenderVM(vm);
    }
  }
}
function mountVNodes(vnodes, parent, renderer, anchor, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const vnode = vnodes[start];
    if (isVNode(vnode)) {
      mount(vnode, parent, renderer, anchor);
    }
  }
}
function unmount(vnode, parent, renderer, doRemove = false) {
  const {
    type,
    elm,
    sel
  } = vnode;
  // When unmounting a VNode subtree not all the elements have to removed from the DOM. The
  // subtree root, is the only element worth unmounting from the subtree.
  if (doRemove && type !== 5 /* VNodeType.Fragment */) {
    // The vnode might or might not have a data.renderer associated to it
    // but the removal used here is from the owner instead.
    removeNode(elm, parent, renderer);
  }
  switch (type) {
    case 5 /* VNodeType.Fragment */:
      {
        unmountVNodes(vnode.children, parent, renderer, doRemove);
        break;
      }
    case 2 /* VNodeType.Element */:
      {
        // Slot content is removed to trigger slotchange event when removing slot.
        // Only required for synthetic shadow.
        const shouldRemoveChildren = sel === 'slot' && vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
        unmountVNodes(vnode.children, elm, renderer, shouldRemoveChildren);
        break;
      }
    case 3 /* VNodeType.CustomElement */:
      {
        const {
          vm
        } = vnode;
        // No need to unmount the children here, `removeVM` will take care of removing the
        // children.
        if (!isUndefined$1(vm)) {
          removeVM(vm);
        }
      }
  }
}
function unmountVNodes(vnodes, parent, renderer, doRemove = false, start = 0, end = vnodes.length) {
  for (; start < end; ++start) {
    const ch = vnodes[start];
    if (isVNode(ch)) {
      unmount(ch, parent, renderer, doRemove);
    }
  }
}
function isVNode(vnode) {
  return vnode != null;
}
function linkNodeToShadow(elm, owner, renderer) {
  const {
    renderRoot,
    renderMode,
    shadowMode
  } = owner;
  const {
    isSyntheticShadowDefined
  } = renderer;
  // TODO [#1164]: this should eventually be done by the polyfill directly
  if (isSyntheticShadowDefined) {
    if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
      elm[KEY__SHADOW_RESOLVER] = renderRoot[KEY__SHADOW_RESOLVER];
    }
  }
}
function updateTextContent(vnode, renderer) {
  const {
    elm,
    text
  } = vnode;
  const {
    setText
  } = renderer;
  if (process.env.NODE_ENV !== 'production') {
    unlockDomMutation();
  }
  setText(elm, text);
  if (process.env.NODE_ENV !== 'production') {
    lockDomMutation();
  }
}
function insertFragmentOrNode(vnode, parent, anchor, renderer) {
  if (process.env.NODE_ENV !== 'production') {
    unlockDomMutation();
  }
  if (isVFragment(vnode)) {
    const children = vnode.children;
    for (let i = 0; i < children.length; i += 1) {
      const child = children[i];
      if (!isNull(child)) {
        renderer.insert(child.elm, parent, anchor);
      }
    }
  } else {
    renderer.insert(vnode.elm, parent, anchor);
  }
  if (process.env.NODE_ENV !== 'production') {
    lockDomMutation();
  }
}
function insertNode(node, parent, anchor, renderer) {
  if (process.env.NODE_ENV !== 'production') {
    unlockDomMutation();
  }
  renderer.insert(node, parent, anchor);
  if (process.env.NODE_ENV !== 'production') {
    lockDomMutation();
  }
}
function removeNode(node, parent, renderer) {
  if (process.env.NODE_ENV !== 'production') {
    unlockDomMutation();
  }
  renderer.remove(node, parent);
  if (process.env.NODE_ENV !== 'production') {
    lockDomMutation();
  }
}
function patchElementPropsAndAttrsAndRefs$1(oldVnode, vnode, renderer) {
  if (isNull(oldVnode)) {
    applyEventListeners(vnode, renderer);
    applyStaticClassAttribute(vnode, renderer);
    applyStaticStyleAttribute(vnode, renderer);
  }
  // Attrs need to be applied to element before props IE11 will wipe out value on radio inputs if
  // value is set before type=radio.
  patchClassAttribute(oldVnode, vnode, renderer);
  patchStyleAttribute(oldVnode, vnode, renderer);
  patchAttributes(oldVnode, vnode, renderer);
  patchProps(oldVnode, vnode, renderer);
  // The `refs` object is blown away in every re-render, so we always need to re-apply them
  applyRefs(vnode, vnode.owner);
}
function applyStyleScoping(elm, owner, renderer) {
  const {
    getClassList
  } = renderer;
  // Set the class name for `*.scoped.css` style scoping.
  const scopeToken = getScopeTokenClass(owner, /* legacy */false);
  if (!isNull(scopeToken)) {
    // TODO [#2762]: this dot notation with add is probably problematic
    // probably we should have a renderer api for just the add operation
    getClassList(elm).add(scopeToken);
  }
  // TODO [#3733]: remove support for legacy scope tokens
  if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
    const legacyScopeToken = getScopeTokenClass(owner, /* legacy */true);
    if (!isNull(legacyScopeToken)) {
      // TODO [#2762]: this dot notation with add is probably problematic
      // probably we should have a renderer api for just the add operation
      getClassList(elm).add(legacyScopeToken);
    }
  }
  // Set property element for synthetic shadow DOM style scoping.
  const {
    stylesheetToken: syntheticToken
  } = owner.context;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */) {
    if (!isUndefined$1(syntheticToken)) {
      elm.$shadowToken$ = syntheticToken;
    }
    if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
      const legacyToken = owner.context.legacyStylesheetToken;
      if (!isUndefined$1(legacyToken)) {
        elm.$legacyShadowToken$ = legacyToken;
      }
    }
  }
}
function applyDomManual(elm, vnode) {
  var _a;
  const {
    owner,
    data: {
      context
    }
  } = vnode;
  if (owner.shadowMode === 1 /* ShadowMode.Synthetic */ && ((_a = context === null || context === void 0 ? void 0 : context.lwc) === null || _a === void 0 ? void 0 : _a.dom) === "manual" /* LwcDomMode.Manual */) {
    elm.$domManual$ = true;
  }
}
function applyElementRestrictions(elm, vnode) {
  var _a, _b;
  if (process.env.NODE_ENV !== 'production') {
    const isSynthetic = vnode.owner.shadowMode === 1 /* ShadowMode.Synthetic */;
    const isPortal = vnode.type === 2 /* VNodeType.Element */ && ((_b = (_a = vnode.data.context) === null || _a === void 0 ? void 0 : _a.lwc) === null || _b === void 0 ? void 0 : _b.dom) === "manual" /* LwcDomMode.Manual */;
    const isLight = vnode.owner.renderMode === 0 /* RenderMode.Light */;
    patchElementWithRestrictions(elm, {
      isPortal,
      isLight,
      isSynthetic
    });
  }
}
function allocateChildren(vnode, vm) {
  // A component with slots will re-render because:
  // 1- There is a change of the internal state.
  // 2- There is a change on the external api (ex: slots)
  //
  // In case #1, the vnodes in the cmpSlots will be reused since they didn't changed. This routine emptied the
  // slotted children when those VCustomElement were rendered and therefore in subsequent calls to allocate children
  // in a reused VCustomElement, there won't be any slotted children.
  // For those cases, we will use the reference for allocated children stored when rendering the fresh VCustomElement.
  //
  // In case #2, we will always get a fresh VCustomElement.
  const children = vnode.aChildren || vnode.children;
  const {
    renderMode,
    shadowMode
  } = vm;
  if (process.env.NODE_ENV !== 'production') {
    // If any of the children being allocated is a scoped slot fragment, make sure the receiving
    // component is a light DOM component. This is mainly to validate light dom parent running
    // in native shadow mode.
    if (renderMode !== 0 /* RenderMode.Light */ && ArraySome.call(children, child => !isNull(child) && isVScopedSlotFragment(child))) {
      logError(`Invalid usage of 'lwc:slot-data' on ${getComponentTag(vm)} tag. Scoped slot content can only be passed to a light dom child.`);
    }
  }
  // If any of the children being allocated are VFragments, we remove the text delimiters and flatten all immediate
  // children VFragments to avoid them interfering with default slot behavior.
  const allocatedChildren = flattenFragmentsInChildren(children);
  vnode.children = allocatedChildren;
  vm.aChildren = allocatedChildren;
  if (shadowMode === 1 /* ShadowMode.Synthetic */ || renderMode === 0 /* RenderMode.Light */) {
    // slow path
    allocateInSlot(vm, allocatedChildren, vnode.owner);
    // save the allocated children in case this vnode is reused.
    vnode.aChildren = allocatedChildren;
    // every child vnode is now allocated, and the host should receive none directly, it receives them via the shadow!
    vnode.children = EmptyArray;
  }
}
/**
 * Flattens the contents of all VFragments in an array of VNodes, removes the text delimiters on those VFragments, and
 * marks the resulting children array as dynamic. Uses a stack (array) to iteratively traverse the nested VFragments
 * and avoid the perf overhead of creating/destroying throwaway arrays/objects in a recursive approach.
 *
 * With the delimiters removed, the contents are marked dynamic so they are diffed correctly.
 *
 * This function is used for slotted VFragments to avoid the text delimiters interfering with slotting functionality.
 */
function flattenFragmentsInChildren(children) {
  const flattenedChildren = [];
  // Initialize our stack with the direct children of the custom component and check whether we have a VFragment.
  // If no VFragment is found in children, we don't need to traverse anything or mark the children dynamic and can return early.
  const nodeStack = [];
  let fragmentFound = false;
  for (let i = children.length - 1; i > -1; i -= 1) {
    const child = children[i];
    ArrayPush$1.call(nodeStack, child);
    fragmentFound = fragmentFound || !!(child && isVFragment(child));
  }
  if (!fragmentFound) {
    return children;
  }
  let currentNode;
  while (!isUndefined$1(currentNode = ArrayPop.call(nodeStack))) {
    if (!isNull(currentNode) && isVFragment(currentNode)) {
      const fChildren = currentNode.children;
      // Ignore the start and end text node delimiters
      for (let i = fChildren.length - 2; i > 0; i -= 1) {
        ArrayPush$1.call(nodeStack, fChildren[i]);
      }
    } else {
      ArrayPush$1.call(flattenedChildren, currentNode);
    }
  }
  // We always mark the children as dynamic because nothing generates stable VFragments yet.
  // If/when stable VFragments are generated by the compiler, this code should be updated to
  // not mark dynamic if all flattened VFragments were stable.
  markAsDynamicChildren(flattenedChildren);
  return flattenedChildren;
}
function createViewModelHook(elm, vnode, renderer) {
  let vm = getAssociatedVMIfPresent(elm);
  // There is a possibility that a custom element is registered under tagName, in which case, the
  // initialization is already carry on, and there is nothing else to do here since this hook is
  // called right after invoking `document.createElement`.
  if (!isUndefined$1(vm)) {
    return vm;
  }
  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  vm = createVM(elm, ctor, renderer, {
    mode,
    owner,
    tagName: sel
  });
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isArray$1(vnode.children), `Invalid vnode for a custom element, it must have children defined.`);
  }
  return vm;
}
function allocateInSlot(vm, children, owner) {
  var _a, _b;
  const {
    cmpSlots: {
      slotAssignments: oldSlotsMapping
    }
  } = vm;
  const cmpSlotsMapping = create(null);
  // Collect all slots into cmpSlotsMapping
  for (let i = 0, len = children.length; i < len; i += 1) {
    const vnode = children[i];
    if (isNull(vnode)) {
      continue;
    }
    let slotName = '';
    if (isVBaseElement(vnode)) {
      slotName = (_b = (_a = vnode.data.attrs) === null || _a === void 0 ? void 0 : _a.slot) !== null && _b !== void 0 ? _b : '';
    } else if (isVScopedSlotFragment(vnode)) {
      slotName = vnode.slotName;
    }
    // Can't use toString here because Symbol(1).toString() is 'Symbol(1)'
    // but elm.setAttribute('slot', Symbol(1)) is an error.
    // the following line also throws same error for symbols
    // Similar for Object.create(null)
    const normalizedSlotName = '' + slotName;
    const vnodes = cmpSlotsMapping[normalizedSlotName] = cmpSlotsMapping[normalizedSlotName] || [];
    ArrayPush$1.call(vnodes, vnode);
  }
  vm.cmpSlots = {
    owner,
    slotAssignments: cmpSlotsMapping
  };
  if (isFalse(vm.isDirty)) {
    // We need to determine if the old allocation is really different from the new one
    // and mark the vm as dirty
    const oldKeys = keys(oldSlotsMapping);
    if (oldKeys.length !== keys(cmpSlotsMapping).length) {
      markComponentAsDirty(vm);
      return;
    }
    for (let i = 0, len = oldKeys.length; i < len; i += 1) {
      const key = oldKeys[i];
      if (isUndefined$1(cmpSlotsMapping[key]) || oldSlotsMapping[key].length !== cmpSlotsMapping[key].length) {
        markComponentAsDirty(vm);
        return;
      }
      const oldVNodes = oldSlotsMapping[key];
      const vnodes = cmpSlotsMapping[key];
      for (let j = 0, a = cmpSlotsMapping[key].length; j < a; j += 1) {
        if (oldVNodes[j] !== vnodes[j]) {
          markComponentAsDirty(vm);
          return;
        }
      }
    }
  }
}
const DynamicChildren = new WeakSet();
// dynamic children means it was either generated by an iteration in a template
// or part of an unstable fragment, and will require a more complex diffing algo.
function markAsDynamicChildren(children) {
  DynamicChildren.add(children);
}
function hasDynamicChildren(children) {
  return DynamicChildren.has(children);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  const map = {};
  // TODO [#1637]: simplify this by assuming that all vnodes has keys
  for (let j = beginIdx; j <= endIdx; ++j) {
    const ch = children[j];
    if (isVNode(ch)) {
      const {
        key
      } = ch;
      if (key !== undefined) {
        map[key] = j;
      }
    }
  }
  return map;
}
function updateDynamicChildren(oldCh, newCh, parent, renderer) {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let oldEndIdx = oldCh.length - 1;
  let oldStartVnode = oldCh[0];
  let oldEndVnode = oldCh[oldEndIdx];
  const newChEnd = newCh.length - 1;
  let newEndIdx = newChEnd;
  let newStartVnode = newCh[0];
  let newEndVnode = newCh[newEndIdx];
  let oldKeyToIdx;
  let idxInOld;
  let elmToMove;
  let before;
  let clonedOldCh = false;
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (!isVNode(oldStartVnode)) {
      oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
    } else if (!isVNode(oldEndVnode)) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (!isVNode(newStartVnode)) {
      newStartVnode = newCh[++newStartIdx];
    } else if (!isVNode(newEndVnode)) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) {
      patch(oldStartVnode, newStartVnode, parent, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) {
      patch(oldEndVnode, newEndVnode, parent, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) {
      // Vnode moved right
      patch(oldStartVnode, newEndVnode, parent, renderer);
      // In the case of fragments, the `elm` property of a vfragment points to the leading
      // anchor. To determine the next sibling of the whole fragment, we need to use the
      // trailing anchor as the argument to nextSibling():
      // [..., [leading, ...content, trailing], nextSibling, ...]
      let anchor;
      if (isVFragment(oldEndVnode)) {
        anchor = renderer.nextSibling(oldEndVnode.trailing.elm);
      } else {
        anchor = renderer.nextSibling(oldEndVnode.elm);
      }
      insertFragmentOrNode(oldStartVnode, parent, anchor, renderer);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) {
      // Vnode moved left
      patch(oldEndVnode, newStartVnode, parent, renderer);
      insertFragmentOrNode(newStartVnode, parent, oldStartVnode.elm, renderer);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      if (oldKeyToIdx === undefined) {
        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      }
      idxInOld = oldKeyToIdx[newStartVnode.key];
      if (isUndefined$1(idxInOld)) {
        // New element
        mount(newStartVnode, parent, renderer, oldStartVnode.elm);
        newStartVnode = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];
        if (isVNode(elmToMove)) {
          if (elmToMove.sel !== newStartVnode.sel) {
            // New element
            mount(newStartVnode, parent, renderer, oldStartVnode.elm);
          } else {
            patch(elmToMove, newStartVnode, parent, renderer);
            // Delete the old child, but copy the array since it is read-only.
            // The `oldCh` will be GC'ed after `updateDynamicChildren` is complete,
            // so we only care about the `oldCh` object inside this function.
            // To avoid cloning over and over again, we check `clonedOldCh`
            // and only clone once.
            if (!clonedOldCh) {
              clonedOldCh = true;
              oldCh = [...oldCh];
            }
            // We've already cloned at least once, so it's no longer read-only
            oldCh[idxInOld] = undefined;
            insertFragmentOrNode(elmToMove, parent, oldStartVnode.elm, renderer);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
  }
  if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
    if (oldStartIdx > oldEndIdx) {
      // There's some cases in which the sub array of vnodes to be inserted is followed by null(s) and an
      // already processed vnode, in such cases the vnodes to be inserted should be before that processed vnode.
      let i = newEndIdx;
      let n;
      do {
        n = newCh[++i];
      } while (!isVNode(n) && i < newChEnd);
      before = isVNode(n) ? n.elm : null;
      mountVNodes(newCh, parent, renderer, before, newStartIdx, newEndIdx + 1);
    } else {
      unmountVNodes(oldCh, parent, renderer, true, oldStartIdx, oldEndIdx + 1);
    }
  }
}
function updateStaticChildren(c1, c2, parent, renderer) {
  const c1Length = c1.length;
  const c2Length = c2.length;
  if (c1Length === 0) {
    // the old list is empty, we can directly insert anything new
    mountVNodes(c2, parent, renderer, null);
    return;
  }
  if (c2Length === 0) {
    // the old list is nonempty and the new list is empty so we can directly remove all old nodes
    // this is the case in which the dynamic children of an if-directive should be removed
    unmountVNodes(c1, parent, renderer, true);
    return;
  }
  // if the old list is not empty, the new list MUST have the same
  // amount of nodes, that's why we call this static children
  let anchor = null;
  for (let i = c2Length - 1; i >= 0; i -= 1) {
    const n1 = c1[i];
    const n2 = c2[i];
    if (n2 !== n1) {
      if (isVNode(n1)) {
        if (isVNode(n2)) {
          if (isSameVnode(n1, n2)) {
            // both vnodes are equivalent, and we just need to patch them
            patch(n1, n2, parent, renderer);
            anchor = n2.elm;
          } else {
            // removing the old vnode since the new one is different
            unmount(n1, parent, renderer, true);
            mount(n2, parent, renderer, anchor);
            anchor = n2.elm;
          }
        } else {
          // removing the old vnode since the new one is null
          unmount(n1, parent, renderer, true);
        }
      } else if (isVNode(n2)) {
        mount(n2, parent, renderer, anchor);
        anchor = n2.elm;
      }
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const SymbolIterator = Symbol.iterator;
function addVNodeToChildLWC(vnode) {
  ArrayPush$1.call(getVMBeingRendered().velements, vnode);
}
// [s]tatic [p]art
function sp(partId, data) {
  return {
    partId,
    data,
    elm: undefined // elm is defined later
  };
}
// [s]coped [s]lot [f]actory
function ssf(slotName, factory) {
  return {
    type: 6 /* VNodeType.ScopedSlotFragment */,
    factory,
    owner: getVMBeingRendered(),
    elm: undefined,
    sel: undefined,
    key: undefined,
    slotName
  };
}
// [st]atic node
function st(fragment, key, parts) {
  const owner = getVMBeingRendered();
  const vnode = {
    type: 4 /* VNodeType.Static */,
    sel: undefined,
    key,
    elm: undefined,
    fragment,
    owner,
    parts
  };
  return vnode;
}
// [fr]agment node
function fr(key, children, stable) {
  const owner = getVMBeingRendered();
  const useCommentNodes = isAPIFeatureEnabled(5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */, owner.apiVersion);
  const leading = useCommentNodes ? co('') : t('');
  const trailing = useCommentNodes ? co('') : t('');
  return {
    type: 5 /* VNodeType.Fragment */,
    sel: undefined,
    key,
    elm: undefined,
    children: [leading, ...children, trailing],
    stable,
    owner,
    leading,
    trailing
  };
}
// [h]tml node
function h(sel, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isString(sel), `h() 1st argument sel must be a string.`);
    assert.isTrue(isObject(data), `h() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
    assert.isTrue('key' in data, ` <${sel}> "key" attribute is invalid or missing for ${vmBeingRendered}. Key inside iterator is either undefined or null.`);
    // checking reserved internal data properties
    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }
    forEach.call(children, childVnode => {
      if (childVnode != null) {
        assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
      }
    });
  }
  const {
    key
  } = data;
  const vnode = {
    type: 2 /* VNodeType.Element */,
    sel,
    data,
    children,
    elm: undefined,
    key,
    owner: vmBeingRendered
  };
  return vnode;
}
// [t]ab[i]ndex function
function ti(value) {
  // if value is greater than 0, we normalize to 0
  // If value is an invalid tabIndex value (null, undefined, string, etc), we let that value pass through
  // If value is less than -1, we don't care
  const shouldNormalize = value > 0 && !(isTrue(value) || isFalse(value));
  if (process.env.NODE_ENV !== 'production') {
    const vmBeingRendered = getVMBeingRendered();
    if (shouldNormalize) {
      logError(`Invalid tabindex value \`${toString$1(value)}\` in template for ${vmBeingRendered}. This attribute must be set to 0 or -1.`, vmBeingRendered);
    }
  }
  return shouldNormalize ? 0 : value;
}
// [s]lot element node
function s(slotName, data, children, slotset) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isString(slotName), `s() 1st argument slotName must be a string.`);
    assert.isTrue(isObject(data), `s() 2nd argument data must be an object.`);
    assert.isTrue(isArray$1(children), `h() 3rd argument children must be an array.`);
  }
  if (!isUndefined$1(slotset) && !isUndefined$1(slotset.slotAssignments) && !isUndefined$1(slotset.slotAssignments[slotName]) && slotset.slotAssignments[slotName].length !== 0) {
    const newChildren = [];
    const slotAssignments = slotset.slotAssignments[slotName];
    for (let i = 0; i < slotAssignments.length; i++) {
      const vnode = slotAssignments[i];
      if (!isNull(vnode)) {
        const assignedNodeIsScopedSlot = isVScopedSlotFragment(vnode);
        // The only sniff test for a scoped <slot> element is the presence of `slotData`
        const isScopedSlotElement = !isUndefined$1(data.slotData);
        // Check if slot types of parent and child are matching
        if (assignedNodeIsScopedSlot !== isScopedSlotElement) {
          if (process.env.NODE_ENV !== 'production') {
            logError(`Mismatched slot types for ${slotName === '' ? '(default)' : slotName} slot. Both parent and child component must use standard type or scoped type for a given slot.`, slotset.owner);
          }
          // Ignore slot content from parent
          continue;
        }
        // If the passed slot content is factory, evaluate it and add the produced vnodes
        if (assignedNodeIsScopedSlot) {
          const vmBeingRenderedInception = getVMBeingRendered();
          // Evaluate in the scope of the slot content's owner
          // if a slotset is provided, there will always be an owner. The only case where owner is
          // undefined is for root components, but root components cannot accept slotted content
          setVMBeingRendered(slotset.owner);
          try {
            // The factory function is a template snippet from the slot set owner's template,
            // hence switch over to the slot set owner's template reactive observer
            const {
              tro
            } = slotset.owner;
            tro.observe(() => {
              ArrayPush$1.call(newChildren, vnode.factory(data.slotData, data.key));
            });
          } finally {
            setVMBeingRendered(vmBeingRenderedInception);
          }
        } else {
          // If the slot content is standard type, the content is static, no additional
          // processing needed on the vnode
          ArrayPush$1.call(newChildren, vnode);
        }
      }
    }
    children = newChildren;
  }
  const vmBeingRendered = getVMBeingRendered();
  const {
    renderMode,
    shadowMode,
    apiVersion
  } = vmBeingRendered;
  if (renderMode === 0 /* RenderMode.Light */) {
    // light DOM slots - backwards-compatible behavior uses flattening, new behavior uses fragments
    if (isAPIFeatureEnabled(2 /* APIFeature.USE_FRAGMENTS_FOR_LIGHT_DOM_SLOTS */, apiVersion)) {
      return fr(data.key, children, 0);
    } else {
      sc(children);
      return children;
    }
  }
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
    sc(children);
  }
  return h('slot', data, children);
}
// [c]ustom element node
function c(sel, Ctor, data, children = EmptyArray) {
  const vmBeingRendered = getVMBeingRendered();
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isString(sel), `c() 1st argument sel must be a string.`);
    assert.isTrue(isFunction$1(Ctor), `c() 2nd argument Ctor must be a function.`);
    assert.isTrue(isObject(data), `c() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `c() 4nd argument data must be an array.`);
    // checking reserved internal data properties
    assert.isFalse(data.className && data.classMap, `vnode.data.className and vnode.data.classMap ambiguous declaration.`);
    assert.isFalse(data.styleDecls && data.style, `vnode.data.styleDecls and vnode.data.style ambiguous declaration.`);
    if (data.style && !isString(data.style)) {
      logError(`Invalid 'style' attribute passed to <${sel}> is ignored. This attribute must be a string value.`, vmBeingRendered);
    }
    if (arguments.length === 4) {
      forEach.call(children, childVnode => {
        if (childVnode != null) {
          assert.isTrue('type' in childVnode && 'sel' in childVnode && 'elm' in childVnode && 'key' in childVnode, `${childVnode} is not a vnode.`);
        }
      });
    }
  }
  const {
    key
  } = data;
  let elm, aChildren, vm;
  const vnode = {
    type: 3 /* VNodeType.CustomElement */,
    sel,
    data,
    children,
    elm,
    key,
    ctor: Ctor,
    owner: vmBeingRendered,
    mode: 'open',
    aChildren,
    vm
  };
  addVNodeToChildLWC(vnode);
  return vnode;
}
// [i]terable node
function i(iterable, factory) {
  const list = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(list);
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(iterable) || iterable === null) {
    if (process.env.NODE_ENV !== 'production') {
      logError(`Invalid template iteration for value "${toString$1(iterable)}" in ${vmBeingRendered}. It must be an Array or an iterable Object.`, vmBeingRendered);
    }
    return list;
  }
  if (process.env.NODE_ENV !== 'production') {
    assert.isFalse(isUndefined$1(iterable[SymbolIterator]), `Invalid template iteration for value \`${toString$1(iterable)}\` in ${vmBeingRendered}. It must be an array-like object and not \`null\` nor \`undefined\`.`);
  }
  const iterator = iterable[SymbolIterator]();
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(iterator && isFunction$1(iterator.next), `Invalid iterator function for "${toString$1(iterable)}" in ${vmBeingRendered}.`);
  }
  let next = iterator.next();
  let j = 0;
  let {
    value,
    done: last
  } = next;
  let keyMap;
  let iterationError;
  if (process.env.NODE_ENV !== 'production') {
    keyMap = create(null);
  }
  while (last === false) {
    // implementing a look-back-approach because we need to know if the element is the last
    next = iterator.next();
    last = next.done;
    // template factory logic based on the previous collected value
    const vnode = factory(value, j, j === 0, last === true);
    if (isArray$1(vnode)) {
      ArrayPush$1.apply(list, vnode);
    } else {
      ArrayPush$1.call(list, vnode);
    }
    if (process.env.NODE_ENV !== 'production') {
      const vnodes = isArray$1(vnode) ? vnode : [vnode];
      forEach.call(vnodes, childVnode => {
        if (!isNull(childVnode) && isObject(childVnode) && !isUndefined$1(childVnode.sel)) {
          const {
            key
          } = childVnode;
          if (isString(key) || isNumber(key)) {
            if (keyMap[key] === 1 && isUndefined$1(iterationError)) {
              iterationError = `Duplicated "key" attribute value for "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. A key with value "${childVnode.key}" appears more than once in the iteration. Key values must be unique numbers or strings.`;
            }
            keyMap[key] = 1;
          } else if (isUndefined$1(iterationError)) {
            iterationError = `Invalid "key" attribute value in "<${childVnode.sel}>" in ${vmBeingRendered} for item number ${j}. Set a unique "key" value on all iterated child elements.`;
          }
        }
      });
    }
    // preparing next value
    j += 1;
    value = next.value;
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!isUndefined$1(iterationError)) {
      logError(iterationError, vmBeingRendered);
    }
  }
  return list;
}
/**
 * [f]lattening
 */
function f(items) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isArray$1(items), 'flattening api can only work with arrays.');
  }
  const len = items.length;
  const flattened = [];
  // TODO [#1276]: compiler should give us some sort of indicator when a vnodes collection is dynamic
  sc(flattened);
  for (let j = 0; j < len; j += 1) {
    const item = items[j];
    if (isArray$1(item)) {
      ArrayPush$1.apply(flattened, item);
    } else {
      ArrayPush$1.call(flattened, item);
    }
  }
  return flattened;
}
// [t]ext node
function t(text) {
  let sel, key, elm;
  return {
    type: 0 /* VNodeType.Text */,
    sel,
    text,
    elm,
    key,
    owner: getVMBeingRendered()
  };
}
// [co]mment node
function co(text) {
  let sel, elm;
  return {
    type: 1 /* VNodeType.Comment */,
    sel,
    text,
    elm,
    key: 'c',
    owner: getVMBeingRendered()
  };
}
// [d]ynamic text
function d(value) {
  return value == null ? '' : String(value);
}
// [b]ind function
function b(fn) {
  const vmBeingRendered = getVMBeingRendered();
  if (isNull(vmBeingRendered)) {
    throw new Error();
  }
  const vm = vmBeingRendered;
  return function (event) {
    invokeEventListener(vm, fn, vm.component, event);
  };
}
// [k]ey function
function k(compilerKey, obj) {
  switch (typeof obj) {
    case 'number':
    case 'string':
      return compilerKey + ':' + obj;
    case 'object':
      if (process.env.NODE_ENV !== 'production') {
        logError(`Invalid key value "${obj}" in ${getVMBeingRendered()}. Key must be a string or number.`);
      }
  }
}
// [g]lobal [id] function
function gid(id) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(id) || id === '') {
    if (process.env.NODE_ENV !== 'production') {
      logError(`Invalid id value "${id}". The id attribute must contain a non-empty string.`, vmBeingRendered);
    }
    return id;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(id)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  if (shadowMode === 1 /* ShadowMode.Synthetic */) {
    return StringReplace.call(id, /\S+/g, id => `${id}-${idx}`);
  }
  return id;
}
// [f]ragment [id] function
function fid(url) {
  const vmBeingRendered = getVMBeingRendered();
  if (isUndefined$1(url) || url === '') {
    if (process.env.NODE_ENV !== 'production') {
      if (isUndefined$1(url)) {
        logError(`Undefined url value for "href" or "xlink:href" attribute. Expected a non-empty string.`, vmBeingRendered);
      }
    }
    return url;
  }
  // We remove attributes when they are assigned a value of null
  if (isNull(url)) {
    return null;
  }
  const {
    idx,
    shadowMode
  } = vmBeingRendered;
  // Apply transformation only for fragment-only-urls, and only in shadow DOM
  if (shadowMode === 1 /* ShadowMode.Synthetic */ && /^#/.test(url)) {
    return `${url}-${idx}`;
  }
  return url;
}
/**
 * [ddc] - create a (deprecated) dynamic component via `<x-foo lwc:dynamic={Ctor}>`
 *
 * TODO [#3331]: remove usage of lwc:dynamic in 246
 */
function ddc(sel, Ctor, data, children = EmptyArray) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isString(sel), `dc() 1st argument sel must be a string.`);
    assert.isTrue(isObject(data), `dc() 3nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 4nd argument data must be an array.`);
  }
  // null or undefined values should produce a null value in the VNodes
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid LWC Constructor ${toString$1(Ctor)} for custom element <${sel}>.`);
  }
  return c(sel, Ctor, data, children);
}
/**
 * [dc] - create a dynamic component via `<lwc:component lwc:is={Ctor}>`
 */
function dc(Ctor, data, children = EmptyArray) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isObject(data), `dc() 2nd argument data must be an object.`);
    assert.isTrue(arguments.length === 3 || isArray$1(children), `dc() 3rd argument data must be an array.`);
  }
  // Null or undefined values should produce a null value in the VNodes.
  // This is the only value at compile time as the constructor will not be known.
  if (isNull(Ctor) || isUndefined$1(Ctor)) {
    return null;
  }
  if (!isComponentConstructor(Ctor)) {
    throw new Error(`Invalid constructor ${toString$1(Ctor)} is not a LightningElement constructor.`);
  }
  // Look up the dynamic component's name at runtime once the constructor is available.
  // This information is only known at runtime and is stored as part of registerComponent.
  const sel = getComponentRegisteredName(Ctor);
  if (isUndefined$1(sel) || sel === '') {
    throw new Error(`Invalid LWC constructor ${toString$1(Ctor)} does not have a registered name`);
  }
  return c(sel, Ctor, data, children);
}
/**
 * slow children collection marking mechanism. this API allows the compiler to signal
 * to the engine that a particular collection of children must be diffed using the slow
 * algo based on keys due to the nature of the list. E.g.:
 *
 *   - slot element's children: the content of the slot has to be dynamic when in synthetic
 *                              shadow mode because the `vnode.children` might be the slotted
 *                              content vs default content, in which case the size and the
 *                              keys are not matching.
 *   - children that contain dynamic components
 *   - children that are produced by iteration
 *
 */
function sc(vnodes) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isArray$1(vnodes), 'sc() api can only work with arrays.');
  }
  // We have to mark the vnodes collection as dynamic so we can later on
  // choose to use the snabbdom virtual dom diffing algo instead of our
  // static dummy algo.
  markAsDynamicChildren(vnodes);
  return vnodes;
}
/**
 * EXPERIMENTAL: This function acts like a hook for Lightning Locker Service and other similar
 * libraries to sanitize HTML content. This hook process the content passed via the template to
 * lwc:inner-html directive.
 * It is meant to be overridden with setSanitizeHtmlContentHook, it throws an error by default.
 */
let sanitizeHtmlContentHook = () => {
  // locker-service patches this function during runtime to sanitize HTML content.
  throw new Error('sanitizeHtmlContent hook must be implemented.');
};
/**
 * Sets the sanitizeHtmlContentHook.
 */
function setSanitizeHtmlContentHook(newHookImpl) {
  sanitizeHtmlContentHook = newHookImpl;
}
// [s]anitize [h]tml [c]ontent
function shc(content) {
  return sanitizeHtmlContentHook(content);
}
const api = freeze({
  s,
  h,
  c,
  i,
  f,
  t,
  d,
  b,
  k,
  co,
  dc,
  fr,
  ti,
  st,
  gid,
  fid,
  shc,
  ssf,
  ddc,
  sp
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const operationIdNameMapping = ['constructor', 'render', 'patch', 'connectedCallback', 'renderedCallback', 'disconnectedCallback', 'errorCallback', 'lwc-hydrate', 'lwc-rehydrate'];
// Even if all the browser the engine supports implements the UserTiming API, we need to guard the measure APIs.
// JSDom (used in Jest) for example doesn't implement the UserTiming APIs.
const isUserTimingSupported = typeof performance !== 'undefined' && typeof performance.mark === 'function' && typeof performance.clearMarks === 'function' && typeof performance.measure === 'function' && typeof performance.clearMeasures === 'function';
const start = !isUserTimingSupported ? noop : markName => {
  performance.mark(markName);
};
const end = !isUserTimingSupported ? noop : (measureName, markName) => {
  performance.measure(measureName, markName);
  // Clear the created marks and measure to avoid filling the performance entries buffer.
  // Note: Even if the entries get deleted, existing PerformanceObservers preserve a copy of those entries.
  performance.clearMarks(markName);
  performance.clearMeasures(measureName);
};
function getOperationName(opId) {
  return operationIdNameMapping[opId];
}
function getMeasureName(opId, vm) {
  return `${getComponentTag(vm)} - ${getOperationName(opId)}`;
}
function getMarkName(opId, vm) {
  // Adding the VM idx to the mark name creates a unique mark name component instance. This is necessary to produce
  // the right measures for components that are recursive.
  return `${getMeasureName(opId, vm)} - ${vm.idx}`;
}
/** Indicates if operations should be logged via the User Timing API. */
const isMeasureEnabled = process.env.NODE_ENV !== 'production';
/** Indicates if operations should be logged by the profiler. */
let isProfilerEnabled = false;
/** The currently assigned profiler dispatcher. */
let currentDispatcher = noop;
const profilerControl = {
  enableProfiler() {
    isProfilerEnabled = true;
  },
  disableProfiler() {
    isProfilerEnabled = false;
  },
  attachDispatcher(dispatcher) {
    currentDispatcher = dispatcher;
    this.enableProfiler();
  },
  detachDispatcher() {
    const dispatcher = currentDispatcher;
    currentDispatcher = noop;
    this.disableProfiler();
    return dispatcher;
  }
};
function logOperationStart(opId, vm) {
  if (isMeasureEnabled) {
    const markName = getMarkName(opId, vm);
    start(markName);
  }
  if (isProfilerEnabled) {
    currentDispatcher(opId, 0 /* Phase.Start */, vm.tagName, vm.idx, vm.renderMode, vm.shadowMode);
  }
}
function logOperationEnd(opId, vm) {
  if (isMeasureEnabled) {
    const markName = getMarkName(opId, vm);
    const measureName = getMeasureName(opId, vm);
    end(measureName, markName);
  }
  if (isProfilerEnabled) {
    currentDispatcher(opId, 1 /* Phase.Stop */, vm.tagName, vm.idx, vm.renderMode, vm.shadowMode);
  }
}
function logGlobalOperationStart(opId, vm) {
  if (isMeasureEnabled) {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    start(markName);
  }
  if (isProfilerEnabled) {
    currentDispatcher(opId, 0 /* Phase.Start */, vm === null || vm === void 0 ? void 0 : vm.tagName, vm === null || vm === void 0 ? void 0 : vm.idx, vm === null || vm === void 0 ? void 0 : vm.renderMode, vm === null || vm === void 0 ? void 0 : vm.shadowMode);
  }
}
function logGlobalOperationEnd(opId, vm) {
  if (isMeasureEnabled) {
    const opName = getOperationName(opId);
    const markName = isUndefined$1(vm) ? opName : getMarkName(opId, vm);
    end(opName, markName);
  }
  if (isProfilerEnabled) {
    currentDispatcher(opId, 1 /* Phase.Stop */, vm === null || vm === void 0 ? void 0 : vm.tagName, vm === null || vm === void 0 ? void 0 : vm.idx, vm === null || vm === void 0 ? void 0 : vm.renderMode, vm === null || vm === void 0 ? void 0 : vm.shadowMode);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isUpdatingTemplate = false;
let vmBeingRendered = null;
function getVMBeingRendered() {
  return vmBeingRendered;
}
function setVMBeingRendered(vm) {
  vmBeingRendered = vm;
}
function validateSlots(vm) {
  assertNotProd(); // this method should never leak to prod
  const {
    cmpSlots
  } = vm;
  for (const slotName in cmpSlots.slotAssignments) {
    // eslint-disable-next-line @lwc/lwc-internal/no-production-assert
    assert.isTrue(isArray$1(cmpSlots.slotAssignments[slotName]), `Slots can only be set to an array, instead received ${toString$1(cmpSlots.slotAssignments[slotName])} for slot "${slotName}" in ${vm}.`);
  }
}
function validateLightDomTemplate(template, vm) {
  assertNotProd(); // should never leak to prod mode
  if (template === defaultEmptyTemplate) {
    return;
  }
  if (vm.renderMode === 0 /* RenderMode.Light */) {
    if (template.renderMode !== 'light') {
      logError(`Light DOM components can't render shadow DOM templates. Add an 'lwc:render-mode="light"' directive to the root template tag of ${getComponentTag(vm)}.`);
    }
  } else {
    if (!isUndefined$1(template.renderMode)) {
      logError(`Shadow DOM components template can't render light DOM templates. Either remove the 'lwc:render-mode' directive from ${getComponentTag(vm)} or set it to 'lwc:render-mode="shadow"`);
    }
  }
}
function buildParseFragmentFn(createFragmentFn) {
  return (strings, ...keys) => {
    const cache = create(null);
    return function () {
      const {
        context: {
          hasScopedStyles,
          stylesheetToken,
          legacyStylesheetToken
        },
        shadowMode,
        renderer
      } = getVMBeingRendered();
      const hasStyleToken = !isUndefined$1(stylesheetToken);
      const isSyntheticShadow = shadowMode === 1 /* ShadowMode.Synthetic */;
      const hasLegacyToken = lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS && !isUndefined$1(legacyStylesheetToken);
      let cacheKey = 0;
      if (hasStyleToken && hasScopedStyles) {
        cacheKey |= 1 /* FragmentCache.HAS_SCOPED_STYLE */;
      }
      if (hasStyleToken && isSyntheticShadow) {
        cacheKey |= 2 /* FragmentCache.SHADOW_MODE_SYNTHETIC */;
      }
      if (hasLegacyToken) {
        // This isn't strictly required for prod, but it's required for our karma tests
        // since the lwcRuntimeFlag may change over time
        cacheKey |= 4 /* FragmentCache.HAS_LEGACY_SCOPE_TOKEN */;
      }
      if (!isUndefined$1(cache[cacheKey])) {
        return cache[cacheKey];
      }
      // If legacy stylesheet tokens are required, then add them to the rendered string
      const stylesheetTokenToRender = stylesheetToken + (hasLegacyToken ? ` ${legacyStylesheetToken}` : '');
      const classToken = hasScopedStyles && hasStyleToken ? ' ' + stylesheetTokenToRender : '';
      const classAttrToken = hasScopedStyles && hasStyleToken ? ` class="${stylesheetTokenToRender}"` : '';
      const attrToken = hasStyleToken && isSyntheticShadow ? ' ' + stylesheetTokenToRender : '';
      let htmlFragment = '';
      for (let i = 0, n = keys.length; i < n; i++) {
        switch (keys[i]) {
          case 0:
            // styleToken in existing class attr
            htmlFragment += strings[i] + classToken;
            break;
          case 1:
            // styleToken for added class attr
            htmlFragment += strings[i] + classAttrToken;
            break;
          case 2:
            // styleToken as attr
            htmlFragment += strings[i] + attrToken;
            break;
          case 3:
            // ${1}${2}
            htmlFragment += strings[i] + classAttrToken + attrToken;
            break;
        }
      }
      htmlFragment += strings[strings.length - 1];
      cache[cacheKey] = createFragmentFn(htmlFragment, renderer);
      return cache[cacheKey];
    };
  };
}
// Note: at the moment this code executes, we don't have a renderer yet.
const parseFragment = buildParseFragmentFn((html, renderer) => {
  const {
    createFragment
  } = renderer;
  return createFragment(html);
});
const parseSVGFragment = buildParseFragmentFn((html, renderer) => {
  const {
    createFragment,
    getFirstChild
  } = renderer;
  const fragment = createFragment('<svg>' + html + '</svg>');
  return getFirstChild(fragment);
});
function evaluateTemplate(vm, html) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(isFunction$1(html), `evaluateTemplate() second argument must be an imported template instead of ${toString$1(html)}`);
    // in dev-mode, we support hot swapping of templates, which means that
    // the component instance might be attempting to use an old version of
    // the template, while internally, we have a replacement for it.
    html = getTemplateOrSwappedTemplate(html);
  }
  const isUpdatingTemplateInception = isUpdatingTemplate;
  const vmOfTemplateBeingUpdatedInception = vmBeingRendered;
  let vnodes = [];
  runWithBoundaryProtection(vm, vm.owner, () => {
    // pre
    vmBeingRendered = vm;
    logOperationStart(1 /* OperationId.Render */, vm);
  }, () => {
    // job
    const {
      component,
      context,
      cmpSlots,
      cmpTemplate,
      tro
    } = vm;
    tro.observe(() => {
      // Reset the cache memoizer for template when needed.
      if (html !== cmpTemplate) {
        if (process.env.NODE_ENV !== 'production') {
          validateLightDomTemplate(html, vm);
        }
        // Perf opt: do not reset the shadow root during the first rendering (there is
        // nothing to reset).
        if (!isNull(cmpTemplate)) {
          // It is important to reset the content to avoid reusing similar elements
          // generated from a different template, because they could have similar IDs,
          // and snabbdom just rely on the IDs.
          resetComponentRoot(vm);
        }
        // Check that the template was built by the compiler.
        if (!isTemplateRegistered(html)) {
          throw new TypeError(`Invalid template returned by the render() method on ${vm}. It must return an imported template (e.g.: \`import html from "./${vm.def.name}.html"\`), instead, it has returned: ${toString$1(html)}.`);
        }
        vm.cmpTemplate = html;
        // Create a brand new template cache for the swapped templated.
        context.tplCache = create(null);
        // Set the computeHasScopedStyles property in the context, to avoid recomputing it repeatedly.
        context.hasScopedStyles = computeHasScopedStyles(html, vm);
        // Update the scoping token on the host element.
        updateStylesheetToken(vm, html, /* legacy */false);
        if (lwcRuntimeFlags.ENABLE_LEGACY_SCOPE_TOKENS) {
          updateStylesheetToken(vm, html, /* legacy */true);
        }
        // Evaluate, create stylesheet and cache the produced VNode for future
        // re-rendering.
        const stylesheetsContent = getStylesheetsContent(vm, html);
        context.styleVNodes = stylesheetsContent.length === 0 ? null : createStylesheet(vm, stylesheetsContent);
      }
      if (process.env.NODE_ENV !== 'production') {
        // validating slots in every rendering since the allocated content might change over time
        validateSlots(vm);
        // add the VM to the list of host VMs that can be re-rendered if html is swapped
        setActiveVM(vm);
      }
      // right before producing the vnodes, we clear up all internal references
      // to custom elements from the template.
      vm.velements = [];
      // Set the global flag that template is being updated
      isUpdatingTemplate = true;
      vnodes = html.call(undefined, api, component, cmpSlots, context.tplCache);
      const {
        styleVNodes
      } = context;
      if (!isNull(styleVNodes)) {
        ArrayUnshift.apply(vnodes, styleVNodes);
      }
    });
  }, () => {
    // post
    isUpdatingTemplate = isUpdatingTemplateInception;
    vmBeingRendered = vmOfTemplateBeingUpdatedInception;
    logOperationEnd(1 /* OperationId.Render */, vm);
  });
  if (process.env.NODE_ENV !== 'production') {
    if (!isArray$1(vnodes)) {
      logError(`Compiler should produce html functions that always return an array.`);
    }
  }
  return vnodes;
}
function computeHasScopedStylesInStylesheets(stylesheets) {
  if (hasStyles(stylesheets)) {
    for (let i = 0; i < stylesheets.length; i++) {
      if (isTrue(stylesheets[i][KEY__SCOPED_CSS])) {
        return true;
      }
    }
  }
  return false;
}
function computeHasScopedStyles(template, vm) {
  const {
    stylesheets
  } = template;
  const vmStylesheets = !isUndefined$1(vm) ? vm.stylesheets : null;
  return computeHasScopedStylesInStylesheets(stylesheets) || computeHasScopedStylesInStylesheets(vmStylesheets);
}
function hasStyles(stylesheets) {
  return !isUndefined$1(stylesheets) && !isNull(stylesheets) && stylesheets.length > 0;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let isInvokingRender = false;
let vmBeingConstructed = null;
function isBeingConstructed(vm) {
  return vmBeingConstructed === vm;
}
function invokeComponentCallback(vm, fn, args) {
  const {
    component,
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    callHook(component, fn, args);
  }, noop);
}
function invokeComponentConstructor(vm, Ctor) {
  const vmBeingConstructedInception = vmBeingConstructed;
  let error;
  logOperationStart(0 /* OperationId.Constructor */, vm);
  vmBeingConstructed = vm;
  /**
   * Constructors don't need to be wrapped with a boundary because for root elements
   * it should throw, while elements from template are already wrapped by a boundary
   * associated to the diffing algo.
   */
  try {
    // job
    const result = new Ctor();
    // Check indirectly if the constructor result is an instance of LightningElement. Using
    // the "instanceof" operator would not work here since Locker Service provides its own
    // implementation of LightningElement, so we indirectly check if the base constructor is
    // invoked by accessing the component on the vm.
    if (vmBeingConstructed.component !== result) {
      throw new TypeError('Invalid component constructor, the class should extend LightningElement.');
    }
  } catch (e) {
    error = Object(e);
  } finally {
    logOperationEnd(0 /* OperationId.Constructor */, vm);
    vmBeingConstructed = vmBeingConstructedInception;
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      // re-throwing the original error annotated after restoring the context
      throw error; // eslint-disable-line no-unsafe-finally
    }
  }
}
function invokeComponentRenderMethod(vm) {
  const {
    def: {
      render
    },
    callHook,
    component,
    owner
  } = vm;
  const isRenderBeingInvokedInception = isInvokingRender;
  const vmBeingRenderedInception = getVMBeingRendered();
  let html;
  let renderInvocationSuccessful = false;
  runWithBoundaryProtection(vm, owner, () => {
    // pre
    isInvokingRender = true;
    setVMBeingRendered(vm);
  }, () => {
    // job
    vm.tro.observe(() => {
      html = callHook(component, render);
      renderInvocationSuccessful = true;
    });
  }, () => {
    // post
    isInvokingRender = isRenderBeingInvokedInception;
    setVMBeingRendered(vmBeingRenderedInception);
  });
  // If render() invocation failed, process errorCallback in boundary and return an empty template
  return renderInvocationSuccessful ? evaluateTemplate(vm, html) : [];
}
function invokeEventListener(vm, fn, thisValue, event) {
  const {
    callHook,
    owner
  } = vm;
  runWithBoundaryProtection(vm, owner, noop, () => {
    // job
    if (process.env.NODE_ENV !== 'production') {
      assert.isTrue(isFunction$1(fn), `Invalid event handler for event '${event.type}' on ${vm}.`);
    }
    callHook(thisValue, fn, [event]);
  }, noop);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const registeredComponentMap = new Map();
/**
 * INTERNAL: This function can only be invoked by compiled code. The compiler
 * will prevent this function from being imported by userland code.
 */
function registerComponent(
// We typically expect a LightningElementConstructor, but technically you can call this with anything
Ctor, metadata) {
  if (isFunction$1(Ctor)) {
    if (process.env.NODE_ENV !== 'production') {
      // There is no point in running this in production, because the version mismatch check relies
      // on code comments which are stripped out in production by minifiers
      checkVersionMismatch(Ctor, 'component');
    }
    // TODO [#3331]: add validation to check the value of metadata.sel is not an empty string.
    registeredComponentMap.set(Ctor, metadata);
  }
  // chaining this method as a way to wrap existing assignment of component constructor easily,
  // without too much transformation
  return Ctor;
}
function getComponentRegisteredTemplate(Ctor) {
  var _a;
  return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.tmpl;
}
function getComponentRegisteredName(Ctor) {
  var _a;
  return (_a = registeredComponentMap.get(Ctor)) === null || _a === void 0 ? void 0 : _a.sel;
}
function getComponentAPIVersion(Ctor) {
  const metadata = registeredComponentMap.get(Ctor);
  const apiVersion = metadata === null || metadata === void 0 ? void 0 : metadata.apiVersion;
  if (isUndefined$1(apiVersion)) {
    // This should only occur in our Karma tests; in practice every component
    // is registered, and so this code path should not get hit. But to be safe,
    // return the lowest possible version.
    return LOWEST_API_VERSION;
  }
  return apiVersion;
}
function getTemplateReactiveObserver(vm) {
  return createReactiveObserver(() => {
    const {
      isDirty
    } = vm;
    if (isFalse(isDirty)) {
      markComponentAsDirty(vm);
      scheduleRehydration(vm);
    }
  });
}
function renderComponent(vm) {
  if (process.env.NODE_ENV !== 'production') {
    assert.invariant(vm.isDirty, `${vm} is not dirty.`);
  }
  vm.tro.reset();
  const vnodes = invokeComponentRenderMethod(vm);
  vm.isDirty = false;
  vm.isScheduled = false;
  return vnodes;
}
function markComponentAsDirty(vm) {
  if (process.env.NODE_ENV !== 'production') {
    const vmBeingRendered = getVMBeingRendered();
    assert.isFalse(vm.isDirty, `markComponentAsDirty() for ${vm} should not be called when the component is already dirty.`);
    assert.isFalse(isInvokingRender, `markComponentAsDirty() for ${vm} cannot be called during rendering of ${vmBeingRendered}.`);
    assert.isFalse(isUpdatingTemplate, `markComponentAsDirty() for ${vm} cannot be called while updating template of ${vmBeingRendered}.`);
  }
  vm.isDirty = true;
}
const cmpEventListenerMap = new WeakMap();
function getWrappedComponentsListener(vm, listener) {
  if (!isFunction$1(listener)) {
    throw new TypeError('Expected an EventListener but received ' + typeof listener); // avoiding problems with non-valid listeners
  }
  let wrappedListener = cmpEventListenerMap.get(listener);
  if (isUndefined$1(wrappedListener)) {
    wrappedListener = function (event) {
      invokeEventListener(vm, listener, undefined, event);
    };
    cmpEventListenerMap.set(listener, wrappedListener);
  }
  return wrappedListener;
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let idx = 0;
/** The internal slot used to associate different objects the engine manipulates with the VM */
const ViewModelReflection = new WeakMap();
function callHook(cmp, fn, args = []) {
  return fn.apply(cmp, args);
}
function setHook(cmp, prop, newValue) {
  cmp[prop] = newValue;
}
function getHook(cmp, prop) {
  return cmp[prop];
}
function rerenderVM(vm) {
  rehydrate(vm);
}
function connectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  logGlobalOperationStart(7 /* OperationId.GlobalHydrate */, vm);
  // Usually means moving the element from one place to another, which is observable via
  // life-cycle hooks.
  if (vm.state === 1 /* VMState.connected */) {
    disconnectRootElement(elm);
  }
  runConnectedCallback(vm);
  rehydrate(vm);
  logGlobalOperationEnd(7 /* OperationId.GlobalHydrate */, vm);
}
function disconnectRootElement(elm) {
  const vm = getAssociatedVM(elm);
  resetComponentStateWhenRemoved(vm);
}
function appendVM(vm) {
  rehydrate(vm);
}
// just in case the component comes back, with this we guarantee re-rendering it
// while preventing any attempt to rehydration until after reinsertion.
function resetComponentStateWhenRemoved(vm) {
  const {
    state
  } = vm;
  if (state !== 2 /* VMState.disconnected */) {
    const {
      tro
    } = vm;
    // Making sure that any observing record will not trigger the rehydrated on this vm
    tro.reset();
    runDisconnectedCallback(vm);
    // Spec: https://dom.spec.whatwg.org/#concept-node-remove (step 14-15)
    runChildNodesDisconnectedCallback(vm);
    runLightChildNodesDisconnectedCallback(vm);
  }
}
// this method is triggered by the diffing algo only when a vnode from the
// old vnode.children is removed from the DOM.
function removeVM(vm) {
  if (process.env.NODE_ENV !== 'production') {
    if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
      // With native lifecycle, we cannot be certain that connectedCallback was called before a component
      // was removed from the VDOM. If the component is disconnected, then connectedCallback will not fire
      // in native mode, although it will fire in synthetic mode due to appendChild triggering it.
      // See: W-14037619 for details
      assert.isTrue(vm.state === 1 /* VMState.connected */ || vm.state === 2 /* VMState.disconnected */, `${vm} must have been connected.`);
    }
  }
  resetComponentStateWhenRemoved(vm);
}
function getNearestShadowAncestor(owner) {
  let ancestor = owner;
  while (!isNull(ancestor) && ancestor.renderMode === 0 /* RenderMode.Light */) {
    ancestor = ancestor.owner;
  }
  return ancestor;
}
function createVM(elm, ctor, renderer, options) {
  const {
    mode,
    owner,
    tagName,
    hydrated
  } = options;
  const def = getComponentInternalDef(ctor);
  const apiVersion = getComponentAPIVersion(ctor);
  const vm = {
    elm,
    def,
    idx: idx++,
    state: 0 /* VMState.created */,
    isScheduled: false,
    isDirty: true,
    tagName,
    mode,
    owner,
    refVNodes: null,
    children: EmptyArray,
    aChildren: EmptyArray,
    velements: EmptyArray,
    cmpProps: create(null),
    cmpFields: create(null),
    cmpSlots: {
      slotAssignments: create(null)
    },
    cmpTemplate: null,
    hydrated: Boolean(hydrated),
    renderMode: def.renderMode,
    context: {
      stylesheetToken: undefined,
      hasTokenInClass: undefined,
      hasTokenInAttribute: undefined,
      legacyStylesheetToken: undefined,
      hasLegacyTokenInClass: undefined,
      hasLegacyTokenInAttribute: undefined,
      hasScopedStyles: undefined,
      styleVNodes: null,
      tplCache: EmptyObject,
      wiredConnecting: EmptyArray,
      wiredDisconnecting: EmptyArray
    },
    // Properties set right after VM creation.
    tro: null,
    shadowMode: null,
    stylesheets: null,
    // Properties set by the LightningElement constructor.
    component: null,
    shadowRoot: null,
    renderRoot: null,
    callHook,
    setHook,
    getHook,
    renderer,
    apiVersion
  };
  if (process.env.NODE_ENV !== 'production') {
    vm.debugInfo = create(null);
  }
  vm.stylesheets = computeStylesheets(vm, def.ctor);
  vm.shadowMode = computeShadowMode(def, vm.owner, renderer);
  vm.tro = getTemplateReactiveObserver(vm);
  if (process.env.NODE_ENV !== 'production') {
    vm.toString = () => {
      return `[object:vm ${def.name} (${vm.idx})]`;
    };
  }
  // Create component instance associated to the vm and the element.
  invokeComponentConstructor(vm, def.ctor);
  // Initializing the wire decorator per instance only when really needed
  if (hasWireAdapters(vm)) {
    installWireAdapters(vm);
  }
  return vm;
}
function validateComponentStylesheets(vm, stylesheets) {
  let valid = true;
  const validate = arrayOrStylesheet => {
    if (isArray$1(arrayOrStylesheet)) {
      for (let i = 0; i < arrayOrStylesheet.length; i++) {
        validate(arrayOrStylesheet[i]);
      }
    } else if (!isFunction$1(arrayOrStylesheet)) {
      // function assumed to be a stylesheet factory
      valid = false;
    }
  };
  if (!isArray$1(stylesheets)) {
    valid = false;
  } else {
    validate(stylesheets);
  }
  return valid;
}
// Validate and flatten any stylesheets defined as `static stylesheets`
function computeStylesheets(vm, ctor) {
  warnOnStylesheetsMutation(ctor);
  const {
    stylesheets
  } = ctor;
  if (!isUndefined$1(stylesheets)) {
    const valid = validateComponentStylesheets(vm, stylesheets);
    if (valid) {
      return flattenStylesheets(stylesheets);
    } else if (process.env.NODE_ENV !== 'production') {
      logError(`static stylesheets must be an array of CSS stylesheets. Found invalid stylesheets on <${vm.tagName}>`, vm);
    }
  }
  return null;
}
function warnOnStylesheetsMutation(ctor) {
  if (process.env.NODE_ENV !== 'production') {
    let {
      stylesheets
    } = ctor;
    defineProperty(ctor, 'stylesheets', {
      enumerable: true,
      configurable: true,
      get() {
        return stylesheets;
      },
      set(newValue) {
        logWarnOnce(`Dynamically setting the "stylesheets" static property on ${ctor.name} ` + 'will not affect the stylesheets injected.');
        stylesheets = newValue;
      }
    });
  }
}
// Compute the shadowMode/renderMode without creating a VM. This is used in some scenarios like hydration.
function computeShadowAndRenderMode(Ctor, renderer) {
  const def = getComponentInternalDef(Ctor);
  const {
    renderMode
  } = def;
  // Assume null `owner` - this is what happens in hydration cases anyway
  const shadowMode = computeShadowMode(def, /* owner */null, renderer);
  return {
    renderMode,
    shadowMode
  };
}
function computeShadowMode(def, owner, renderer) {
  // Force the shadow mode to always be native. Used for running tests with synthetic shadow patches
  // on, but components running in actual native shadow mode
  if (process.env.NODE_ENV !== 'production' && lwcRuntimeFlags.ENABLE_FORCE_NATIVE_SHADOW_MODE_FOR_TEST) {
    return 0 /* ShadowMode.Native */;
  }
  const {
    isSyntheticShadowDefined
  } = renderer;
  let shadowMode;
  if (isSyntheticShadowDefined) {
    if (def.renderMode === 0 /* RenderMode.Light */) {
      // ShadowMode.Native implies "not synthetic shadow" which is consistent with how
      // everything defaults to native when the synthetic shadow polyfill is unavailable.
      shadowMode = 0 /* ShadowMode.Native */;
    } else if (lwcRuntimeFlags.ENABLE_MIXED_SHADOW_MODE || def.shadowSupportMode === "native" /* ShadowSupportMode.Native */) {
      if (def.shadowSupportMode === "any" /* ShadowSupportMode.Any */ || def.shadowSupportMode === "native" /* ShadowSupportMode.Native */) {
        shadowMode = 0 /* ShadowMode.Native */;
      } else {
        const shadowAncestor = getNearestShadowAncestor(owner);
        if (!isNull(shadowAncestor) && shadowAncestor.shadowMode === 0 /* ShadowMode.Native */) {
          // Transitive support for native Shadow DOM. A component in native mode
          // transitively opts all of its descendants into native.
          shadowMode = 0 /* ShadowMode.Native */;
        } else {
          // Synthetic if neither this component nor any of its ancestors are configured
          // to be native.
          shadowMode = 1 /* ShadowMode.Synthetic */;
        }
      }
    } else {
      shadowMode = 1 /* ShadowMode.Synthetic */;
    }
  } else {
    // Native if the synthetic shadow polyfill is unavailable.
    shadowMode = 0 /* ShadowMode.Native */;
  }
  return shadowMode;
}
function assertIsVM(obj) {
  if (isNull(obj) || !isObject(obj) || !('renderRoot' in obj)) {
    throw new TypeError(`${obj} is not a VM.`);
  }
}
function associateVM(obj, vm) {
  ViewModelReflection.set(obj, vm);
}
function getAssociatedVM(obj) {
  const vm = ViewModelReflection.get(obj);
  if (process.env.NODE_ENV !== 'production') {
    assertIsVM(vm);
  }
  return vm;
}
function getAssociatedVMIfPresent(obj) {
  const maybeVm = ViewModelReflection.get(obj);
  if (process.env.NODE_ENV !== 'production') {
    if (!isUndefined$1(maybeVm)) {
      assertIsVM(maybeVm);
    }
  }
  return maybeVm;
}
function rehydrate(vm) {
  if (isTrue(vm.isDirty)) {
    const children = renderComponent(vm);
    patchShadowRoot(vm, children);
  }
}
function patchShadowRoot(vm, newCh) {
  const {
    renderRoot,
    children: oldCh,
    renderer
  } = vm;
  // reset the refs; they will be set during `patchChildren`
  resetRefVNodes(vm);
  // caching the new children collection
  vm.children = newCh;
  if (newCh.length > 0 || oldCh.length > 0) {
    // patch function mutates vnodes by adding the element reference,
    // however, if patching fails it contains partial changes.
    if (oldCh !== newCh) {
      runWithBoundaryProtection(vm, vm, () => {
        // pre
        logOperationStart(2 /* OperationId.Patch */, vm);
      }, () => {
        // job
        patchChildren(oldCh, newCh, renderRoot, renderer);
      }, () => {
        // post
        logOperationEnd(2 /* OperationId.Patch */, vm);
      });
    }
  }
  if (vm.state === 1 /* VMState.connected */) {
    // If the element is connected, that means connectedCallback was already issued, and
    // any successive rendering should finish with the call to renderedCallback, otherwise
    // the connectedCallback will take care of calling it in the right order at the end of
    // the current rehydration process.
    runRenderedCallback(vm);
  }
}
function runRenderedCallback(vm) {
  const {
    def: {
      renderedCallback
    }
  } = vm;
  if (!isUndefined$1(renderedCallback)) {
    logOperationStart(4 /* OperationId.RenderedCallback */, vm);
    invokeComponentCallback(vm, renderedCallback);
    logOperationEnd(4 /* OperationId.RenderedCallback */, vm);
  }
}
let rehydrateQueue = [];
function flushRehydrationQueue() {
  logGlobalOperationStart(8 /* OperationId.GlobalRehydrate */);
  if (process.env.NODE_ENV !== 'production') {
    assert.invariant(rehydrateQueue.length, `If rehydrateQueue was scheduled, it is because there must be at least one VM on this pending queue instead of ${rehydrateQueue}.`);
  }
  const vms = rehydrateQueue.sort((a, b) => a.idx - b.idx);
  rehydrateQueue = []; // reset to a new queue
  for (let i = 0, len = vms.length; i < len; i += 1) {
    const vm = vms[i];
    try {
      rehydrate(vm);
    } catch (error) {
      if (i + 1 < len) {
        // pieces of the queue are still pending to be rehydrated, those should have priority
        if (rehydrateQueue.length === 0) {
          addCallbackToNextTick(flushRehydrationQueue);
        }
        ArrayUnshift.apply(rehydrateQueue, ArraySlice.call(vms, i + 1));
      }
      // we need to end the measure before throwing.
      logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
      // re-throwing the original error will break the current tick, but since the next tick is
      // already scheduled, it should continue patching the rest.
      throw error; // eslint-disable-line no-unsafe-finally
    }
  }
  logGlobalOperationEnd(8 /* OperationId.GlobalRehydrate */);
}
function runConnectedCallback(vm) {
  const {
    state
  } = vm;
  if (state === 1 /* VMState.connected */) {
    return; // nothing to do since it was already connected
  }
  vm.state = 1 /* VMState.connected */;
  if (hasWireAdapters(vm)) {
    connectWireAdapters(vm);
  }
  const {
    connectedCallback
  } = vm.def;
  if (!isUndefined$1(connectedCallback)) {
    logOperationStart(3 /* OperationId.ConnectedCallback */, vm);
    invokeComponentCallback(vm, connectedCallback);
    logOperationEnd(3 /* OperationId.ConnectedCallback */, vm);
  }
  // This test only makes sense in the browser, with synthetic lifecycle, and when reporting is enabled or
  // we're in dev mode. This is to detect a particular issue with synthetic lifecycle.
  if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE && (process.env.NODE_ENV !== 'production' || isReportingEnabled())) {
    if (!vm.renderer.isConnected(vm.elm)) {
      if (process.env.NODE_ENV !== 'production') {
        logWarnOnce(`Element <${vm.tagName}> ` + `fired a \`connectedCallback\` and rendered, but was not connected to the DOM. ` + `Please ensure all components are actually connected to the DOM, e.g. using ` + `\`document.body.appendChild(element)\`. This will not be supported in future versions of ` + `LWC and could cause component errors. For details, see: https://sfdc.co/synthetic-lifecycle`);
      }
      report("ConnectedCallbackWhileDisconnected" /* ReportingEventId.ConnectedCallbackWhileDisconnected */, {
        tagName: vm.tagName
      });
    }
  }
}
function hasWireAdapters(vm) {
  return getOwnPropertyNames$1(vm.def.wire).length > 0;
}
function runDisconnectedCallback(vm) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(vm.state !== 2 /* VMState.disconnected */, `${vm} must be inserted.`);
  }
  if (isFalse(vm.isDirty)) {
    // this guarantees that if the component is reused/reinserted,
    // it will be re-rendered because we are disconnecting the reactivity
    // linking, so mutations are not automatically reflected on the state
    // of disconnected components.
    vm.isDirty = true;
  }
  vm.state = 2 /* VMState.disconnected */;
  if (hasWireAdapters(vm)) {
    disconnectWireAdapters(vm);
  }
  const {
    disconnectedCallback
  } = vm.def;
  if (!isUndefined$1(disconnectedCallback)) {
    logOperationStart(5 /* OperationId.DisconnectedCallback */, vm);
    invokeComponentCallback(vm, disconnectedCallback);
    logOperationEnd(5 /* OperationId.DisconnectedCallback */, vm);
  }
}
function runChildNodesDisconnectedCallback(vm) {
  const {
    velements: vCustomElementCollection
  } = vm;
  // Reporting disconnection for every child in inverse order since they are
  // inserted in reserved order.
  for (let i = vCustomElementCollection.length - 1; i >= 0; i -= 1) {
    const {
      elm
    } = vCustomElementCollection[i];
    // There are two cases where the element could be undefined:
    // * when there is an error during the construction phase, and an error
    //   boundary picks it, there is a possibility that the VCustomElement
    //   is not properly initialized, and therefore is should be ignored.
    // * when slotted custom element is not used by the element where it is
    //   slotted into it, as  a result, the custom element was never
    //   initialized.
    if (!isUndefined$1(elm)) {
      const childVM = getAssociatedVMIfPresent(elm);
      // The VM associated with the element might be associated undefined
      // in the case where the VM failed in the middle of its creation,
      // eg: constructor throwing before invoking super().
      if (!isUndefined$1(childVM)) {
        resetComponentStateWhenRemoved(childVM);
      }
    }
  }
}
function runLightChildNodesDisconnectedCallback(vm) {
  const {
    aChildren: adoptedChildren
  } = vm;
  recursivelyDisconnectChildren(adoptedChildren);
}
/**
 * The recursion doesn't need to be a complete traversal of the vnode graph,
 * instead it can be partial, when a custom element vnode is found, we don't
 * need to continue into its children because by attempting to disconnect the
 * custom element itself will trigger the removal of anything slotted or anything
 * defined on its shadow.
 */
function recursivelyDisconnectChildren(vnodes) {
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode) && !isUndefined$1(vnode.elm)) {
      switch (vnode.type) {
        case 2 /* VNodeType.Element */:
          recursivelyDisconnectChildren(vnode.children);
          break;
        case 3 /* VNodeType.CustomElement */:
          {
            const vm = getAssociatedVM(vnode.elm);
            resetComponentStateWhenRemoved(vm);
            break;
          }
      }
    }
  }
}
// This is a super optimized mechanism to remove the content of the root node (shadow root
// for shadow DOM components and the root element itself for light DOM) without having to go
// into snabbdom. Especially useful when the reset is a consequence of an error, in which case the
// children VNodes might not be representing the current state of the DOM.
function resetComponentRoot(vm) {
  recursivelyRemoveChildren(vm.children, vm);
  vm.children = EmptyArray;
  runChildNodesDisconnectedCallback(vm);
  vm.velements = EmptyArray;
}
// Helper function to remove all children of the root node.
// If the set of children includes VFragment nodes, we need to remove the children of those nodes too.
// Since VFragments can contain other VFragments, we need to traverse the entire of tree of VFragments.
// If the set contains no VFragment nodes, no traversal is needed.
function recursivelyRemoveChildren(vnodes, vm) {
  const {
    renderRoot,
    renderer: {
      remove
    }
  } = vm;
  for (let i = 0, len = vnodes.length; i < len; i += 1) {
    const vnode = vnodes[i];
    if (!isNull(vnode)) {
      // VFragments are special; their .elm property does not point to the root element since they have no single root.
      if (isVFragment(vnode)) {
        recursivelyRemoveChildren(vnode.children, vm);
      } else if (!isUndefined$1(vnode.elm)) {
        remove(vnode.elm, renderRoot);
      }
    }
  }
}
function scheduleRehydration(vm) {
  if (isTrue(vm.isScheduled)) {
    return;
  }
  vm.isScheduled = true;
  if (rehydrateQueue.length === 0) {
    addCallbackToNextTick(flushRehydrationQueue);
  }
  ArrayPush$1.call(rehydrateQueue, vm);
}
function getErrorBoundaryVM(vm) {
  let currentVm = vm;
  while (!isNull(currentVm)) {
    if (!isUndefined$1(currentVm.def.errorCallback)) {
      return currentVm;
    }
    currentVm = currentVm.owner;
  }
}
function runWithBoundaryProtection(vm, owner, pre, job, post) {
  let error;
  pre();
  try {
    job();
  } catch (e) {
    error = Object(e);
  } finally {
    post();
    if (!isUndefined$1(error)) {
      addErrorComponentStack(vm, error);
      const errorBoundaryVm = isNull(owner) ? undefined : getErrorBoundaryVM(owner);
      // Error boundaries are not in effect when server-side rendering. `errorCallback`
      // is intended to allow recovery from errors - changing the state of a component
      // and instigating a re-render. That is at odds with the single-pass, synchronous
      // nature of SSR. For that reason, all errors bubble up to the `renderComponent`
      // call site.
      if (isUndefined$1(errorBoundaryVm)) {
        throw error; // eslint-disable-line no-unsafe-finally
      }
      resetComponentRoot(vm); // remove offenders
      logOperationStart(6 /* OperationId.ErrorCallback */, vm);
      // error boundaries must have an ErrorCallback
      const errorCallback = errorBoundaryVm.def.errorCallback;
      invokeComponentCallback(errorBoundaryVm, errorCallback, [error, error.wcStack]);
      logOperationEnd(6 /* OperationId.ErrorCallback */, vm);
    }
  }
}
function forceRehydration(vm) {
  // if we must reset the shadowRoot content and render the template
  // from scratch on an active instance, the way to force the reset
  // is by replacing the value of old template, which is used during
  // to determine if the template has changed or not during the rendering
  // process. If the template returned by render() is different from the
  // previous stored template, the styles will be reset, along with the
  // content of the shadowRoot, this way we can guarantee that all children
  // elements will be throw away, and new instances will be created.
  vm.cmpTemplate = () => [];
  if (isFalse(vm.isDirty)) {
    // forcing the vm to rehydrate in the next tick
    markComponentAsDirty(vm);
    scheduleRehydration(vm);
  }
}
function runFormAssociatedCustomElementCallback(vm, faceCb) {
  const {
    renderMode,
    shadowMode,
    def: {
      formAssociated
    }
  } = vm;
  // Technically the UpgradableConstructor always sets `static formAssociated = true` but silently fail here to match browser behavior.
  if (isUndefined$1(formAssociated) || isFalse(formAssociated)) {
    if (process.env.NODE_ENV !== 'production') {
      logWarn(`Form associated lifecycle methods must have the 'static formAssociated' value set in the component's prototype chain.`);
    }
    return;
  }
  if (shadowMode === 1 /* ShadowMode.Synthetic */ && renderMode !== 0 /* RenderMode.Light */) {
    throw new Error('Form associated lifecycle methods are not available in synthetic shadow. Please use native shadow or light DOM.');
  }
  invokeComponentCallback(vm, faceCb);
}
function runFormAssociatedCallback(elm) {
  const vm = getAssociatedVM(elm);
  const {
    formAssociatedCallback
  } = vm.def;
  if (!isUndefined$1(formAssociatedCallback)) {
    runFormAssociatedCustomElementCallback(vm, formAssociatedCallback);
  }
}
function runFormDisabledCallback(elm) {
  const vm = getAssociatedVM(elm);
  const {
    formDisabledCallback
  } = vm.def;
  if (!isUndefined$1(formDisabledCallback)) {
    runFormAssociatedCustomElementCallback(vm, formDisabledCallback);
  }
}
function runFormResetCallback(elm) {
  const vm = getAssociatedVM(elm);
  const {
    formResetCallback
  } = vm.def;
  if (!isUndefined$1(formResetCallback)) {
    runFormAssociatedCustomElementCallback(vm, formResetCallback);
  }
}
function runFormStateRestoreCallback(elm) {
  const vm = getAssociatedVM(elm);
  const {
    formStateRestoreCallback
  } = vm.def;
  if (!isUndefined$1(formStateRestoreCallback)) {
    runFormAssociatedCustomElementCallback(vm, formStateRestoreCallback);
  }
}
function resetRefVNodes(vm) {
  const {
    cmpTemplate
  } = vm;
  vm.refVNodes = !isNull(cmpTemplate) && cmpTemplate.hasRefs ? create(null) : null;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// The goal of this code is to detect invalid cross-root ARIA references in synthetic shadow DOM.
// These invalid references should be fixed before the offending components can be migrated to native shadow DOM.
// When invalid usage is detected, we warn in dev mode and call the reporting API if enabled.
// See: https://sfdc.co/synthetic-aria
//
// Use the unpatched native getElementById/querySelectorAll rather than the synthetic one
const getElementById = _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
const querySelectorAll = _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
// This is a "handoff" from synthetic-shadow to engine-core – we want to clean up after ourselves
// so nobody else can misuse these global APIs.
delete _globalThis[KEY__NATIVE_GET_ELEMENT_BY_ID];
delete _globalThis[KEY__NATIVE_QUERY_SELECTOR_ALL];
function isSyntheticShadowRootInstance(rootNode) {
  return rootNode !== document && isTrue(rootNode.synthetic);
}
function reportViolation$1(source, target, attrName) {
  // The vm is either for the source, the target, or both. Either one or both must be using synthetic
  // shadow for a violation to be detected.
  let vm = getAssociatedVMIfPresent(source.getRootNode().host);
  if (isUndefined$1(vm)) {
    vm = getAssociatedVMIfPresent(target.getRootNode().host);
  }
  if (isUndefined$1(vm)) {
    // vm should never be undefined here, but just to be safe, bail out and don't report
    return;
  }
  report("CrossRootAriaInSyntheticShadow" /* ReportingEventId.CrossRootAriaInSyntheticShadow */, {
    tagName: vm.tagName,
    attributeName: attrName
  });
  if (process.env.NODE_ENV !== 'production') {
    // Avoid excessively logging to the console in the case of duplicates.
    logWarnOnce(`Element <${source.tagName.toLowerCase()}> uses attribute "${attrName}" to reference element ` + `<${target.tagName.toLowerCase()}>, which is not in the same shadow root. This will break in native shadow DOM. ` + `For details, see: https://sfdc.co/synthetic-aria`, vm);
  }
}
function parseIdRefAttributeValue(attrValue) {
  // split on whitespace and skip empty strings after splitting
  return isString(attrValue) ? ArrayFilter.call(StringSplit.call(attrValue, /\s+/), Boolean) : [];
}
function detectSyntheticCrossRootAria(elm, attrName, attrValue) {
  const root = elm.getRootNode();
  if (!isSyntheticShadowRootInstance(root)) {
    return;
  }
  if (attrName === 'id') {
    // elm is the target, find the source
    if (!isString(attrValue) || attrValue.length === 0) {
      // if our id is null or empty, nobody can reference us
      return;
    }
    for (const idRefAttrName of ID_REFERENCING_ATTRIBUTES_SET) {
      // Query all global elements with this attribute. The attribute selector syntax `~=` is for values
      // that reference multiple IDs, separated by whitespace.
      const query = `[${idRefAttrName}~="${CSS.escape(attrValue)}"]`;
      const sourceElements = querySelectorAll.call(document, query);
      for (let i = 0; i < sourceElements.length; i++) {
        const sourceElement = sourceElements[i];
        const sourceRoot = sourceElement.getRootNode();
        if (sourceRoot !== root) {
          reportViolation$1(sourceElement, elm, idRefAttrName);
          break;
        }
      }
    }
  } else {
    // elm is the source, find the target
    const ids = parseIdRefAttributeValue(attrValue);
    for (const id of ids) {
      const target = getElementById.call(document, id);
      if (!isNull(target)) {
        const targetRoot = target.getRootNode();
        if (targetRoot !== root) {
          // target element's shadow root is not the same as ours
          reportViolation$1(elm, target, attrName);
        }
      }
    }
  }
}
let enabled = false;
// We want to avoid patching globals whenever possible, so this should be tree-shaken out in prod-mode and if
// reporting is not enabled. It should also only run once
function enableDetection$1() {
  if (enabled) {
    return; // don't double-apply the patches
  }
  enabled = true;
  const {
    setAttribute
  } = Element.prototype;
  // Detect calling `setAttribute` to set an idref or an id
  assign(Element.prototype, {
    setAttribute(attrName, attrValue) {
      setAttribute.call(this, attrName, attrValue);
      if (attrName === 'id' || ID_REFERENCING_ATTRIBUTES_SET.has(attrName)) {
        detectSyntheticCrossRootAria(this, attrName, attrValue);
      }
    }
  });
  // Detect `elm.id = 'foo'`
  const idDescriptor = getOwnPropertyDescriptor$1(Element.prototype, 'id');
  if (!isUndefined$1(idDescriptor)) {
    const {
      get,
      set
    } = idDescriptor;
    // These should always be a getter and a setter, but if someone is monkeying with the global descriptor, ignore it
    if (isFunction$1(get) && isFunction$1(set)) {
      defineProperty(Element.prototype, 'id', {
        get() {
          return get.call(this);
        },
        set(value) {
          set.call(this, value);
          detectSyntheticCrossRootAria(this, 'id', value);
        },
        // On the default descriptor for 'id', enumerable and configurable are true
        enumerable: true,
        configurable: true
      });
    }
  }
}
// Our detection logic relies on some modern browser features. We can just skip reporting the data
// for unsupported browsers
function supportsCssEscape() {
  return typeof CSS !== 'undefined' && isFunction$1(CSS.escape);
}
// If this page is not using synthetic shadow, then we don't need to install detection. Note
// that we are assuming synthetic shadow is loaded before LWC.
function isSyntheticShadowLoaded() {
  // We should probably be calling `renderer.isSyntheticShadowDefined`, but 1) we don't have access to the renderer,
  // and 2) this code needs to run in @lwc/engine-core, so it can access `logWarn()` and `report()`.
  return hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN);
}
// Detecting cross-root ARIA in synthetic shadow only makes sense for the browser
if (supportsCssEscape() && isSyntheticShadowLoaded()) {
  // Always run detection in dev mode, so we can at least print to the console
  if (process.env.NODE_ENV !== 'production') {
    enableDetection$1();
  } else {
    // In prod mode, only enable detection if reporting is enabled
    onReportingEnabled(enableDetection$1);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// The goal of this code is to detect usages of non-standard reflected ARIA properties. These are caused by
// legacy non-standard Element.prototype extensions added by the @lwc/aria-reflection package.
//
// See the README for @lwc/aria-reflection
const NON_STANDARD_ARIA_PROPS = ['ariaActiveDescendant', 'ariaControls', 'ariaDescribedBy', 'ariaDetails', 'ariaErrorMessage', 'ariaFlowTo', 'ariaLabelledBy', 'ariaOwns'];
function isGlobalAriaPolyfillLoaded() {
  // Sniff for the legacy polyfill being loaded. The reason this works is because ariaActiveDescendant is a
  // non-standard ARIA property reflection that is only supported in our legacy polyfill. See
  // @lwc/aria-reflection/README.md for details.
  return !isUndefined$1(getOwnPropertyDescriptor$1(Element.prototype, 'ariaActiveDescendant'));
}
function findVM(elm) {
  // If it's a shadow DOM component, then it has a host
  const {
    host
  } = elm.getRootNode();
  const vm = isUndefined$1(host) ? undefined : getAssociatedVMIfPresent(host);
  if (!isUndefined$1(vm)) {
    return vm;
  }
  // Else it might be a light DOM component. Walk up the tree trying to find the owner
  let parentElement = elm;
  while (!isNull(parentElement = parentElement.parentElement)) {
    if (parentElement instanceof BaseBridgeElement) {
      // parentElement is an LWC component
      const vm = getAssociatedVMIfPresent(parentElement);
      if (!isUndefined$1(vm)) {
        return vm;
      }
    }
  }
  // If we return undefined, it's because the element was rendered wholly outside a LightningElement
}
function checkAndReportViolation(elm, prop, isSetter, setValue) {
  const vm = findVM(elm);
  if (process.env.NODE_ENV !== 'production') {
    logWarnOnce(`Element <${elm.tagName.toLowerCase()}> ` + (isUndefined$1(vm) ? '' : `owned by <${vm.elm.tagName.toLowerCase()}> `) + `uses non-standard property "${prop}". This will be removed in a future version of LWC. ` + `See https://sfdc.co/deprecated-aria`);
  }
  let setValueType;
  if (isSetter) {
    // `typeof null` is "object" which is not very useful for detecting null.
    // We mostly want to know null vs undefined vs other types here, due to
    // https://github.com/salesforce/lwc/issues/3284
    setValueType = isNull(setValue) ? 'null' : typeof setValue;
  }
  report("NonStandardAriaReflection" /* ReportingEventId.NonStandardAriaReflection */, {
    tagName: vm === null || vm === void 0 ? void 0 : vm.tagName,
    propertyName: prop,
    isSetter,
    setValueType
  });
}
function enableDetection() {
  const {
    prototype
  } = Element;
  for (const prop of NON_STANDARD_ARIA_PROPS) {
    const descriptor = getOwnPropertyDescriptor$1(prototype, prop);
    // The descriptor should exist because the @lwc/aria-reflection polyfill has run by now.
    // This happens automatically because of the ordering of imports.
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if (isUndefined$1(descriptor) || isUndefined$1(descriptor.get) || isUndefined$1(descriptor.set)) {
        // should never happen
        throw new Error('detect-non-standard-aria.ts loaded before @lwc/aria-reflection');
      }
    }
    // @ts-ignore
    const {
      get,
      set
    } = descriptor;
    // It's important for this defineProperty call to happen _after_ ARIA accessors are applied to the
    // BaseBridgeElement and LightningElement prototypes. Otherwise, we will log/report for access of non-standard
    // props on these prototypes, which we actually don't want. We only care about access on generic HTMLElements.
    defineProperty(prototype, prop, {
      get() {
        checkAndReportViolation(this, prop, false, undefined);
        return get.call(this);
      },
      set(val) {
        checkAndReportViolation(this, prop, true, val);
        return set.call(this, val);
      },
      configurable: true,
      enumerable: true
    });
  }
}
// No point in running this code if we're not in a browser, or if the global polyfill is not loaded
if (isGlobalAriaPolyfillLoaded()) {
  // Always run detection in dev mode, so we can at least print to the console
  if (process.env.NODE_ENV !== 'production') {
    enableDetection();
  } else {
    // In prod mode, only enable detection if reporting is enabled
    onReportingEnabled(enableDetection);
  }
}

/*
 * Copyright (c) 2022, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// flag indicating if the hydration recovered from the DOM mismatch
let hasMismatch = false;
function hydrateRoot(vm) {
  hasMismatch = false;
  runConnectedCallback(vm);
  hydrateVM(vm);
  if (hasMismatch && process.env.NODE_ENV !== 'production') {
    logError('Hydration completed with errors.', vm);
  }
}
function hydrateVM(vm) {
  const children = renderComponent(vm);
  vm.children = children;
  // reset the refs; they will be set during `hydrateChildren`
  resetRefVNodes(vm);
  const {
    renderRoot: parentNode,
    renderer: {
      getFirstChild
    }
  } = vm;
  hydrateChildren(getFirstChild(parentNode), children, parentNode, vm, false);
  runRenderedCallback(vm);
}
function hydrateNode(node, vnode, renderer) {
  var _a, _b;
  let hydratedNode;
  switch (vnode.type) {
    case 0 /* VNodeType.Text */:
      // VText has no special capability, fallback to the owner's renderer
      hydratedNode = hydrateText(node, vnode, renderer);
      break;
    case 1 /* VNodeType.Comment */:
      // VComment has no special capability, fallback to the owner's renderer
      hydratedNode = hydrateComment(node, vnode, renderer);
      break;
    case 4 /* VNodeType.Static */:
      // VStatic are cacheable and cannot have custom renderer associated to them
      hydratedNode = hydrateStaticElement(node, vnode, renderer);
      break;
    case 5 /* VNodeType.Fragment */:
      // a fragment does not represent any element, therefore there is no need to use a custom renderer.
      hydratedNode = hydrateFragment(node, vnode, renderer);
      break;
    case 2 /* VNodeType.Element */:
      hydratedNode = hydrateElement(node, vnode, (_a = vnode.data.renderer) !== null && _a !== void 0 ? _a : renderer);
      break;
    case 3 /* VNodeType.CustomElement */:
      hydratedNode = hydrateCustomElement(node, vnode, (_b = vnode.data.renderer) !== null && _b !== void 0 ? _b : renderer);
      break;
  }
  return renderer.nextSibling(hydratedNode);
}
const NODE_VALUE_PROP = 'nodeValue';
function textNodeContentsAreEqual(node, vnode, renderer) {
  const {
    getProperty
  } = renderer;
  const nodeValue = getProperty(node, NODE_VALUE_PROP);
  if (nodeValue === vnode.text) {
    return true;
  }
  // Special case for empty text nodes – these are serialized differently on the server
  // See https://github.com/salesforce/lwc/pull/2656
  if (nodeValue === '\u200D' && vnode.text === '') {
    return true;
  }
  return false;
}
// The validationOptOut static property can be an array of attribute names.
// Any attribute names specified in that array will not be validated, and the
// LWC runtime will assume that VDOM attrs and DOM attrs are in sync.
function getValidationPredicate(optOutStaticProp) {
  if (isUndefined$1(optOutStaticProp)) {
    return _attrName => true;
  }
  // If validationOptOut is true, no attributes will be checked for correctness
  // and the runtime will assume VDOM attrs and DOM attrs are in sync.
  if (isTrue(optOutStaticProp)) {
    return _attrName => false;
  }
  // If validationOptOut is an array of strings, attributes specified in the
  // array will be "opted out". Attributes not specified in the array will still
  // be validated.
  if (isArray$1(optOutStaticProp) && arrayEvery(optOutStaticProp, isString)) {
    return attrName => !ArrayIncludes.call(optOutStaticProp, attrName);
  }
  if (process.env.NODE_ENV !== 'production') {
    logWarn('Validation opt out must be `true` or an array of attributes that should not be validated.');
  }
  return _attrName => true;
}
function hydrateText(node, vnode, renderer) {
  var _a;
  if (!hasCorrectNodeType(vnode, node, 3 /* EnvNodeTypes.TEXT */, renderer)) {
    return handleMismatch(node, vnode, renderer);
  }
  if (process.env.NODE_ENV !== 'production') {
    if (!textNodeContentsAreEqual(node, vnode, renderer)) {
      logWarn('Hydration mismatch: text values do not match, will recover from the difference', vnode.owner);
    }
  }
  const {
    setText
  } = renderer;
  setText(node, (_a = vnode.text) !== null && _a !== void 0 ? _a : null);
  vnode.elm = node;
  return node;
}
function hydrateComment(node, vnode, renderer) {
  var _a;
  if (!hasCorrectNodeType(vnode, node, 8 /* EnvNodeTypes.COMMENT */, renderer)) {
    return handleMismatch(node, vnode, renderer);
  }
  if (process.env.NODE_ENV !== 'production') {
    const {
      getProperty
    } = renderer;
    const nodeValue = getProperty(node, NODE_VALUE_PROP);
    if (nodeValue !== vnode.text) {
      logWarn('Hydration mismatch: comment values do not match, will recover from the difference', vnode.owner);
    }
  }
  const {
    setProperty
  } = renderer;
  setProperty(node, NODE_VALUE_PROP, (_a = vnode.text) !== null && _a !== void 0 ? _a : null);
  vnode.elm = node;
  return node;
}
function hydrateStaticElement(elm, vnode, renderer) {
  if (!hasCorrectNodeType(vnode, elm, 1 /* EnvNodeTypes.ELEMENT */, renderer) || !areCompatibleNodes(vnode.fragment, elm, vnode, renderer)) {
    return handleMismatch(elm, vnode, renderer);
  }
  vnode.elm = elm;
  applyStaticParts(elm, vnode, renderer, true);
  return elm;
}
function hydrateFragment(elm, vnode, renderer) {
  const {
    children,
    owner
  } = vnode;
  hydrateChildren(elm, children, renderer.getProperty(elm, 'parentNode'), owner, true);
  return vnode.elm = children[children.length - 1].elm;
}
function hydrateElement(elm, vnode, renderer) {
  if (!hasCorrectNodeType(vnode, elm, 1 /* EnvNodeTypes.ELEMENT */, renderer) || !isMatchingElement(vnode, elm, renderer)) {
    return handleMismatch(elm, vnode, renderer);
  }
  vnode.elm = elm;
  const {
    owner
  } = vnode;
  const {
    context
  } = vnode.data;
  const isDomManual = Boolean(!isUndefined$1(context) && !isUndefined$1(context.lwc) && context.lwc.dom === "manual" /* LwcDomMode.Manual */);
  if (isDomManual) {
    // it may be that this element has lwc:inner-html, we need to diff and in case are the same,
    // remove the innerHTML from props so it reuses the existing dom elements.
    const {
      data: {
        props
      }
    } = vnode;
    const {
      getProperty
    } = renderer;
    if (!isUndefined$1(props) && !isUndefined$1(props.innerHTML)) {
      if (getProperty(elm, 'innerHTML') === props.innerHTML) {
        // Do a shallow clone since VNodeData may be shared across VNodes due to hoist optimization
        vnode.data = Object.assign(Object.assign({}, vnode.data), {
          props: cloneAndOmitKey(props, 'innerHTML')
        });
      } else {
        if (process.env.NODE_ENV !== 'production') {
          logWarn(`Mismatch hydrating element <${getProperty(elm, 'tagName').toLowerCase()}>: innerHTML values do not match for element, will recover from the difference`, owner);
        }
      }
    }
  }
  patchElementPropsAndAttrsAndRefs(vnode, renderer);
  if (!isDomManual) {
    const {
      getFirstChild
    } = renderer;
    hydrateChildren(getFirstChild(elm), vnode.children, elm, owner, false);
  }
  return elm;
}
function hydrateCustomElement(elm, vnode, renderer) {
  const {
    validationOptOut
  } = vnode.ctor;
  const shouldValidateAttr = getValidationPredicate(validationOptOut);
  // The validationOptOut static property can be an array of attribute names.
  // Any attribute names specified in that array will not be validated, and the
  // LWC runtime will assume that VDOM attrs and DOM attrs are in sync.
  //
  // If validationOptOut is true, no attributes will be checked for correctness
  // and the runtime will assume VDOM attrs and DOM attrs are in sync.
  //
  // Therefore, if validationOptOut is falsey or an array of strings, we need to
  // examine some or all of the custom element's attributes.
  if (!hasCorrectNodeType(vnode, elm, 1 /* EnvNodeTypes.ELEMENT */, renderer) || !isMatchingElement(vnode, elm, renderer, shouldValidateAttr)) {
    return handleMismatch(elm, vnode, renderer);
  }
  const {
    sel,
    mode,
    ctor,
    owner
  } = vnode;
  const {
    defineCustomElement,
    getTagName
  } = renderer;
  defineCustomElement(StringToLowerCase.call(getTagName(elm)));
  const vm = createVM(elm, ctor, renderer, {
    mode,
    owner,
    tagName: sel,
    hydrated: true
  });
  vnode.elm = elm;
  vnode.vm = vm;
  allocateChildren(vnode, vm);
  patchElementPropsAndAttrsAndRefs(vnode, renderer);
  // Insert hook section:
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(vm.state === 0 /* VMState.created */, `${vm} cannot be recycled.`);
  }
  runConnectedCallback(vm);
  if (vm.renderMode !== 0 /* RenderMode.Light */) {
    const {
      getFirstChild
    } = renderer;
    // VM is not rendering in Light DOM, we can proceed and hydrate the slotted content.
    // Note: for Light DOM, this is handled while hydrating the VM
    hydrateChildren(getFirstChild(elm), vnode.children, elm, vm, false);
  }
  hydrateVM(vm);
  return elm;
}
function hydrateChildren(node, children, parentNode, owner,
// When rendering the children of a VFragment, additional siblings may follow the
// last node of the fragment. Hydration should not fail if a trailing sibling is
// found in this case.
expectAddlSiblings) {
  let hasWarned = false;
  let nextNode = node;
  const {
    renderer
  } = owner;
  for (let i = 0; i < children.length; i++) {
    const childVnode = children[i];
    if (!isNull(childVnode)) {
      if (nextNode) {
        nextNode = hydrateNode(nextNode, childVnode, renderer);
      } else {
        hasMismatch = true;
        if (process.env.NODE_ENV !== 'production') {
          if (!hasWarned) {
            hasWarned = true;
            logError(`Hydration mismatch: incorrect number of rendered nodes. Client produced more nodes than the server.`, owner);
          }
        }
        mount(childVnode, parentNode, renderer, nextNode);
        nextNode = renderer.nextSibling(childVnode.elm);
      }
    }
  }
  const useCommentsForBookends = isAPIFeatureEnabled(5 /* APIFeature.USE_COMMENTS_FOR_FRAGMENT_BOOKENDS */, owner.apiVersion);
  if (
  // If 1) comments are used for bookends, and 2) we're not expecting additional siblings,
  // and 3) there exists an additional sibling, that's a hydration failure.
  //
  // This preserves the previous behavior for text-node bookends where mismatches
  // would incorrectly occur but which is unfortunately baked into the SSR hydration
  // contract. It also preserves the behavior of valid hydration failures where the server
  // rendered more nodes than the client.
  (!useCommentsForBookends || !expectAddlSiblings) && nextNode) {
    hasMismatch = true;
    if (process.env.NODE_ENV !== 'production') {
      if (!hasWarned) {
        logError(`Hydration mismatch: incorrect number of rendered nodes. Server rendered more nodes than the client.`, owner);
      }
    }
    // nextSibling is mostly harmless, and since we don't have
    // a good reference to what element to act upon, we instead
    // rely on the vm's associated renderer for navigating to the
    // next node in the list to be hydrated.
    const {
      nextSibling
    } = renderer;
    do {
      const current = nextNode;
      nextNode = nextSibling(nextNode);
      removeNode(current, parentNode, renderer);
    } while (nextNode);
  }
}
function handleMismatch(node, vnode, renderer) {
  hasMismatch = true;
  const {
    getProperty
  } = renderer;
  const parentNode = getProperty(node, 'parentNode');
  mount(vnode, parentNode, renderer, node);
  removeNode(node, parentNode, renderer);
  return vnode.elm;
}
function patchElementPropsAndAttrsAndRefs(vnode, renderer) {
  applyEventListeners(vnode, renderer);
  patchProps(null, vnode, renderer);
  // The `refs` object is blown away in every re-render, so we always need to re-apply them
  applyRefs(vnode, vnode.owner);
}
function hasCorrectNodeType(vnode, node, nodeType, renderer) {
  const {
    getProperty
  } = renderer;
  if (getProperty(node, 'nodeType') !== nodeType) {
    if (process.env.NODE_ENV !== 'production') {
      logError('Hydration mismatch: incorrect node type received', vnode.owner);
    }
    return false;
  }
  return true;
}
function isMatchingElement(vnode, elm, renderer, shouldValidateAttr = () => true) {
  const {
    getProperty
  } = renderer;
  if (vnode.sel.toLowerCase() !== getProperty(elm, 'tagName').toLowerCase()) {
    if (process.env.NODE_ENV !== 'production') {
      logError(`Hydration mismatch: expecting element with tag "${vnode.sel.toLowerCase()}" but found "${getProperty(elm, 'tagName').toLowerCase()}".`, vnode.owner);
    }
    return false;
  }
  const hasCompatibleAttrs = validateAttrs(vnode, elm, renderer, shouldValidateAttr);
  const hasCompatibleClass = shouldValidateAttr('class') ? validateClassAttr(vnode, elm, renderer) : true;
  const hasCompatibleStyle = shouldValidateAttr('style') ? validateStyleAttr(vnode, elm, renderer) : true;
  return hasCompatibleAttrs && hasCompatibleClass && hasCompatibleStyle;
}
function attributeValuesAreEqual(vnodeValue, value) {
  const vnodeValueAsString = String(vnodeValue);
  if (vnodeValueAsString === value) {
    return true;
  }
  // If the expected value is null, this means that the attribute does not exist. In that case,
  // we accept any nullish value (undefined or null).
  if (isNull(value) && (isUndefined$1(vnodeValue) || isNull(vnodeValue))) {
    return true;
  }
  // In all other cases, the two values are not considered equal
  return false;
}
function validateAttrs(vnode, elm, renderer, shouldValidateAttr) {
  const {
    data: {
      attrs = {}
    }
  } = vnode;
  let nodesAreCompatible = true;
  // Validate attributes, though we could always recovery from those by running the update mods.
  // Note: intentionally ONLY matching vnodes.attrs to elm.attrs, in case SSR is adding extra attributes.
  for (const [attrName, attrValue] of Object.entries(attrs)) {
    if (!shouldValidateAttr(attrName)) {
      continue;
    }
    const {
      owner
    } = vnode;
    const {
      getAttribute
    } = renderer;
    const elmAttrValue = getAttribute(elm, attrName);
    if (!attributeValuesAreEqual(attrValue, elmAttrValue)) {
      if (process.env.NODE_ENV !== 'production') {
        const {
          getProperty
        } = renderer;
        logError(`Mismatch hydrating element <${getProperty(elm, 'tagName').toLowerCase()}>: attribute "${attrName}" has different values, expected "${attrValue}" but found ${isNull(elmAttrValue) ? 'null' : `"${elmAttrValue}"`}`, owner);
      }
      nodesAreCompatible = false;
    }
  }
  return nodesAreCompatible;
}
function validateClassAttr(vnode, elm, renderer) {
  const {
    data,
    owner
  } = vnode;
  let {
    className,
    classMap
  } = data;
  const {
    getProperty,
    getClassList,
    getAttribute
  } = renderer;
  // we don't care about legacy for hydration. it's a new use case
  const scopedToken = getScopeTokenClass(owner, /* legacy */false);
  const stylesheetTokenHost = isVCustomElement(vnode) ? getStylesheetTokenHost(vnode) : null;
  // Classnames for scoped CSS are added directly to the DOM during rendering,
  // or to the VDOM on the server in the case of SSR. As such, these classnames
  // are never present in VDOM nodes in the browser.
  //
  // Consequently, hydration mismatches will occur if scoped CSS token classnames
  // are rendered during SSR. This needs to be accounted for when validating.
  if (!isNull(scopedToken) || !isNull(stylesheetTokenHost)) {
    if (!isUndefined$1(className)) {
      // The order of the className should be scopedToken className stylesheetTokenHost
      const classTokens = [scopedToken, className, stylesheetTokenHost];
      const classNames = ArrayFilter.call(classTokens, token => !isNull(token));
      className = ArrayJoin.call(classNames, ' ');
    } else if (!isUndefined$1(classMap)) {
      classMap = Object.assign(Object.assign(Object.assign({}, classMap), !isNull(scopedToken) ? {
        [scopedToken]: true
      } : {}), !isNull(stylesheetTokenHost) ? {
        [stylesheetTokenHost]: true
      } : {});
    } else {
      // The order of the className should be scopedToken stylesheetTokenHost
      const classTokens = [scopedToken, stylesheetTokenHost];
      const classNames = ArrayFilter.call(classTokens, token => !isNull(token));
      if (classNames.length) {
        className = ArrayJoin.call(classNames, ' ');
      }
    }
  }
  let nodesAreCompatible = true;
  let readableVnodeClassname;
  const elmClassName = getAttribute(elm, 'class');
  if (!isUndefined$1(className) && String(className) !== elmClassName) {
    // className is used when class is bound to an expr.
    nodesAreCompatible = false;
    // stringify for pretty-printing
    readableVnodeClassname = JSON.stringify(className);
  } else if (!isUndefined$1(classMap)) {
    // classMap is used when class is set to static value.
    const classList = getClassList(elm);
    let computedClassName = '';
    // all classes from the vnode should be in the element.classList
    for (const name in classMap) {
      computedClassName += ' ' + name;
      if (!classList.contains(name)) {
        nodesAreCompatible = false;
      }
    }
    // stringify for pretty-printing
    readableVnodeClassname = JSON.stringify(computedClassName.trim());
    if (classList.length > keys(classMap).length) {
      nodesAreCompatible = false;
    }
  } else if (isUndefined$1(className) && !isNull(elmClassName)) {
    // SSR contains a className but client-side VDOM does not
    nodesAreCompatible = false;
    readableVnodeClassname = '""';
  }
  if (!nodesAreCompatible) {
    if (process.env.NODE_ENV !== 'production') {
      logError(`Mismatch hydrating element <${getProperty(elm, 'tagName').toLowerCase()}>: attribute "class" has different values, expected ${readableVnodeClassname} but found ${JSON.stringify(elmClassName)}`, vnode.owner);
    }
  }
  return nodesAreCompatible;
}
function validateStyleAttr(vnode, elm, renderer) {
  const {
    data: {
      style,
      styleDecls
    }
  } = vnode;
  const {
    getAttribute
  } = renderer;
  const elmStyle = getAttribute(elm, 'style') || '';
  let vnodeStyle;
  let nodesAreCompatible = true;
  if (!isUndefined$1(style) && style !== elmStyle) {
    nodesAreCompatible = false;
    vnodeStyle = style;
  } else if (!isUndefined$1(styleDecls)) {
    const parsedVnodeStyle = parseStyleText(elmStyle);
    const expectedStyle = [];
    // styleMap is used when style is set to static value.
    for (let i = 0, n = styleDecls.length; i < n; i++) {
      const [prop, value, important] = styleDecls[i];
      expectedStyle.push(`${prop}: ${value + (important ? ' important!' : '')}`);
      const parsedPropValue = parsedVnodeStyle[prop];
      if (isUndefined$1(parsedPropValue)) {
        nodesAreCompatible = false;
      } else if (!parsedPropValue.startsWith(value)) {
        nodesAreCompatible = false;
      } else if (important && !parsedPropValue.endsWith('!important')) {
        nodesAreCompatible = false;
      }
    }
    if (keys(parsedVnodeStyle).length > styleDecls.length) {
      nodesAreCompatible = false;
    }
    vnodeStyle = ArrayJoin.call(expectedStyle, ';');
  }
  if (!nodesAreCompatible) {
    if (process.env.NODE_ENV !== 'production') {
      const {
        getProperty
      } = renderer;
      logError(`Mismatch hydrating element <${getProperty(elm, 'tagName').toLowerCase()}>: attribute "style" has different values, expected "${vnodeStyle}" but found "${elmStyle}".`, vnode.owner);
    }
  }
  return nodesAreCompatible;
}
function areCompatibleNodes(client, ssr, vnode, renderer) {
  const {
    getProperty,
    getAttribute
  } = renderer;
  if (getProperty(client, 'nodeType') === 3 /* EnvNodeTypes.TEXT */) {
    if (!hasCorrectNodeType(vnode, ssr, 3 /* EnvNodeTypes.TEXT */, renderer)) {
      return false;
    }
    return getProperty(client, NODE_VALUE_PROP) === getProperty(ssr, NODE_VALUE_PROP);
  }
  if (getProperty(client, 'nodeType') === 8 /* EnvNodeTypes.COMMENT */) {
    if (!hasCorrectNodeType(vnode, ssr, 8 /* EnvNodeTypes.COMMENT */, renderer)) {
      return false;
    }
    return getProperty(client, NODE_VALUE_PROP) === getProperty(ssr, NODE_VALUE_PROP);
  }
  if (!hasCorrectNodeType(vnode, ssr, 1 /* EnvNodeTypes.ELEMENT */, renderer)) {
    return false;
  }
  let isCompatibleElements = true;
  if (getProperty(client, 'tagName') !== getProperty(ssr, 'tagName')) {
    if (process.env.NODE_ENV !== 'production') {
      logError(`Hydration mismatch: expecting element with tag "${getProperty(client, 'tagName').toLowerCase()}" but found "${getProperty(ssr, 'tagName').toLowerCase()}".`, vnode.owner);
    }
    return false;
  }
  const clientAttrsNames = getProperty(client, 'getAttributeNames').call(client);
  clientAttrsNames.forEach(attrName => {
    if (getAttribute(client, attrName) !== getAttribute(ssr, attrName)) {
      if (process.env.NODE_ENV !== 'production') {
        logError(`Mismatch hydrating element <${getProperty(client, 'tagName').toLowerCase()}>: attribute "${attrName}" has different values, expected "${getAttribute(client, attrName)}" but found "${getAttribute(ssr, attrName)}"`, vnode.owner);
      }
      isCompatibleElements = false;
    }
  });
  return isCompatibleElements;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
let hooksAreSet = false;
function setHooks(hooks) {
  assert.isFalse(hooksAreSet, 'Hooks are already overridden, only one definition is allowed.');
  hooksAreSet = true;
  setSanitizeHtmlContentHook(hooks.sanitizeHtmlContent);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// See @lwc/engine-core/src/framework/template.ts
const TEMPLATE_PROPS = ['slots', 'stylesheetToken', 'stylesheets', 'renderMode'];
// Expandos that may be placed on a stylesheet factory function, and which are meaningful to LWC at runtime
const STYLESHEET_PROPS = [
// SEE `KEY__SCOPED_CSS` in @lwc/style-compiler
'$scoped$'];
// Via https://www.npmjs.com/package/object-observer
const ARRAY_MUTATION_METHODS = ['pop', 'push', 'shift', 'unshift', 'reverse', 'sort', 'fill', 'splice', 'copyWithin'];
let mutationTrackingDisabled = false;
function getOriginalArrayMethod(prop) {
  switch (prop) {
    case 'pop':
      return ArrayPop;
    case 'push':
      return ArrayPush$1;
    case 'shift':
      return ArrayShift;
    case 'unshift':
      return ArrayUnshift;
    case 'reverse':
      return ArrayReverse;
    case 'sort':
      return ArraySort;
    case 'fill':
      return ArrayFill;
    case 'splice':
      return ArraySplice;
    case 'copyWithin':
      return ArrayCopyWithin;
  }
}
function reportViolation(type, eventId, prop) {
  if (process.env.NODE_ENV !== 'production') {
    logWarnOnce(`Mutating the "${prop}" property on a ${type} ` + `is deprecated and will be removed in a future version of LWC. ` + `See: https://sfdc.co/template-mutation`);
  }
  report(eventId, {
    propertyName: prop
  });
}
function reportTemplateViolation(prop) {
  reportViolation('template', "TemplateMutation" /* ReportingEventId.TemplateMutation */, prop);
}
function reportStylesheetViolation(prop) {
  reportViolation('stylesheet', "StylesheetMutation" /* ReportingEventId.StylesheetMutation */, prop);
}
// Warn if the user tries to mutate a stylesheets array, e.g.:
// `tmpl.stylesheets.push(someStylesheetFunction)`
function warnOnArrayMutation(stylesheets) {
  // We can't handle users calling Array.prototype.slice.call(tmpl.stylesheets), but
  // we can at least warn when they use the most common mutation methods.
  for (const prop of ARRAY_MUTATION_METHODS) {
    const originalArrayMethod = getOriginalArrayMethod(prop);
    stylesheets[prop] = function arrayMutationWarningWrapper() {
      reportTemplateViolation('stylesheets');
      // @ts-ignore
      return originalArrayMethod.apply(this, arguments);
    };
  }
}
// Warn if the user tries to mutate a stylesheet factory function, e.g.:
// `stylesheet.$scoped$ = true`
function warnOnStylesheetFunctionMutation(stylesheet) {
  for (const prop of STYLESHEET_PROPS) {
    let value = stylesheet[prop];
    defineProperty(stylesheet, prop, {
      enumerable: true,
      configurable: true,
      get() {
        return value;
      },
      set(newValue) {
        reportStylesheetViolation(prop);
        value = newValue;
      }
    });
  }
}
// Warn on either array or stylesheet (function) mutation, in a deeply-nested array
function trackStylesheetsMutation(stylesheets) {
  traverseStylesheets(stylesheets, subStylesheets => {
    if (isArray$1(subStylesheets)) {
      warnOnArrayMutation(subStylesheets);
    } else {
      warnOnStylesheetFunctionMutation(subStylesheets);
    }
  });
}
// Deeply freeze the entire array (of arrays) of stylesheet factory functions
function deepFreeze(stylesheets) {
  traverseStylesheets(stylesheets, subStylesheets => {
    freeze(subStylesheets);
  });
}
// Deep-traverse an array (of arrays) of stylesheet factory functions, and call the callback for every array/function
function traverseStylesheets(stylesheets, callback) {
  callback(stylesheets);
  for (let i = 0; i < stylesheets.length; i++) {
    const stylesheet = stylesheets[i];
    if (isArray$1(stylesheet)) {
      traverseStylesheets(stylesheet, callback);
    } else {
      callback(stylesheet);
    }
  }
}
function trackMutations(tmpl) {
  if (!isUndefined$1(tmpl.stylesheets)) {
    trackStylesheetsMutation(tmpl.stylesheets);
  }
  for (const prop of TEMPLATE_PROPS) {
    let value = tmpl[prop];
    defineProperty(tmpl, prop, {
      enumerable: true,
      configurable: true,
      get() {
        return value;
      },
      set(newValue) {
        if (!mutationTrackingDisabled) {
          reportTemplateViolation(prop);
        }
        value = newValue;
      }
    });
  }
  const originalDescriptor = getOwnPropertyDescriptor$1(tmpl, 'stylesheetTokens');
  defineProperty(tmpl, 'stylesheetTokens', {
    enumerable: true,
    configurable: true,
    get: originalDescriptor.get,
    set(value) {
      reportTemplateViolation('stylesheetTokens');
      // Avoid logging/reporting twice (for both stylesheetToken and stylesheetTokens)
      mutationTrackingDisabled = true;
      originalDescriptor.set.call(this, value);
      mutationTrackingDisabled = false;
    }
  });
}
function addLegacyStylesheetTokensShim(tmpl) {
  // When ENABLE_FROZEN_TEMPLATE is false, then we shim stylesheetTokens on top of stylesheetToken for anyone who
  // is accessing the old internal API (backwards compat). Details: W-14210169
  defineProperty(tmpl, 'stylesheetTokens', {
    enumerable: true,
    configurable: true,
    get() {
      const {
        stylesheetToken
      } = this;
      if (isUndefined$1(stylesheetToken)) {
        return stylesheetToken;
      }
      // Shim for the old `stylesheetTokens` property
      // See https://github.com/salesforce/lwc/pull/2332/files#diff-7901555acef29969adaa6583185b3e9bce475cdc6f23e799a54e0018cb18abaa
      return {
        hostAttribute: `${stylesheetToken}-host`,
        shadowAttribute: stylesheetToken
      };
    },
    set(value) {
      // If the value is null or some other exotic object, you would be broken anyway in the past
      // because the engine would try to access hostAttribute/shadowAttribute, which would throw an error.
      // However it may be undefined in newer versions of LWC, so we need to guard against that case.
      this.stylesheetToken = isUndefined$1(value) ? undefined : value.shadowAttribute;
    }
  });
}
function freezeTemplate(tmpl) {
  // TODO [#2782]: remove this flag and delete the legacy behavior
  if (lwcRuntimeFlags.ENABLE_FROZEN_TEMPLATE) {
    // Deep freeze the template
    freeze(tmpl);
    if (!isUndefined$1(tmpl.stylesheets)) {
      deepFreeze(tmpl.stylesheets);
    }
  } else {
    // template is not frozen - shim, report, and warn
    // this shim should be applied in both dev and prod
    addLegacyStylesheetTokensShim(tmpl);
    // When ENABLE_FROZEN_TEMPLATE is false, we want to warn in dev mode whenever someone is mutating the template
    if (process.env.NODE_ENV !== 'production') {
      trackMutations(tmpl);
    } else {
      // In prod mode, we only track mutations if reporting is enabled
      onReportingEnabled(() => {
        trackMutations(tmpl);
      });
    }
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * EXPERIMENTAL: This function provides access to the component constructor, given an HTMLElement.
 * This API is subject to change or being removed.
 */
function getComponentConstructor(elm) {
  let ctor = null;
  // intentionally checking for undefined due to some funky libraries patching weakmap.get
  // to throw when undefined.
  if (!isUndefined$1(elm)) {
    const vm = getAssociatedVMIfPresent(elm);
    if (!isUndefined$1(vm)) {
      ctor = vm.def.ctor;
    }
  }
  return ctor;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * EXPERIMENTAL: This function allows you to create a reactive readonly
 * membrane around any object value. This API is subject to change or
 * being removed.
 */
function readonly(obj) {
  if (process.env.NODE_ENV !== 'production') {
    // TODO [#1292]: Remove the readonly decorator
    if (arguments.length !== 1) {
      logError('@readonly cannot be used as a decorator just yet, use it as a function with one argument to produce a readonly version of the provided value.');
    }
  }
  return getReadOnlyProxy(obj);
}
/** version: 5.0.0 */

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * Displays the header for a custom element.
 *
 * @param ce the custom element
 * @param componentInstance component instance associated with the custom element.
 */
function getHeaderForCustomElement(ce, componentInstance) {
  // [element]
  // LWC component instance: [vm.component]
  return ['div', {}, ['object', {
    object: ce,
    config: {
      skip: true
    }
  }], ['div', {}, ['span', {
    style: 'margin: 0 5px; color: red'
  }, 'LWC:'], ['object', {
    object: componentInstance
  }]]];
}
function getHeaderForComponentInstance(componentInstance, debugInfo) {
  if (keys(debugInfo).length === 0) {
    // there is no debug information, no need to customize this component instance
    return null;
  }
  // [component]
  // Debug information: [vm.debugInfo]
  return ['div', {}, ['object', {
    object: componentInstance,
    config: {
      skip: true
    }
  }], ['div', {}, ['span', {
    style: 'margin: 0 5px; color: red'
  }, 'Debug:'], ['object', {
    object: debugInfo
  }]]];
}
const LightningElementFormatter = {
  name: 'LightningElementFormatter',
  header(obj, config) {
    const vm = getAssociatedVMIfPresent(obj);
    if (!isUndefined$1(vm) && (isUndefined$1(config) || !config.skip)) {
      if (obj instanceof HTMLElement) {
        return getHeaderForCustomElement(obj, vm.component);
      } else {
        return getHeaderForComponentInstance(obj, vm.debugInfo);
      }
    }
    return null;
  },
  hasBody() {
    return false;
  }
};

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function init() {
  const devtoolsFormatters = _globalThis.devtoolsFormatters || [];
  ArrayPush$1.call(devtoolsFormatters, LightningElementFormatter);
  _globalThis.devtoolsFormatters = devtoolsFormatters;
}
if (process.env.NODE_ENV !== 'production') {
  init();
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
//
// Feature detection
//
// This check for constructable style sheets is similar to Fast's:
// https://github.com/microsoft/fast/blob/d49d1ec/packages/web-components/fast-element/src/dom.ts#L51-L53
// See also: https://github.com/whatwg/webidl/issues/1027#issuecomment-934510070
const supportsConstructableStylesheets = isFunction$1(CSSStyleSheet.prototype.replaceSync) && isArray$1(document.adoptedStyleSheets);
const stylesheetCache = new Map();
//
// Test utilities
//
// Only used in LWC's Karma tests
if (process.env.NODE_ENV === 'test-karma-lwc') {
  // @ts-ignore
  window.__lwcResetGlobalStylesheets = () => {
    stylesheetCache.clear();
  };
}
function createFreshStyleElement(content) {
  const elm = document.createElement('style');
  elm.type = 'text/css';
  elm.textContent = content;
  return elm;
}
function createStyleElement(content, cacheData) {
  const {
    element,
    usedElement
  } = cacheData;
  // If the <style> was already used, then we should clone it. We cannot insert
  // the same <style> in two places in the DOM.
  if (usedElement) {
    // This `<style>` may be repeated multiple times in the DOM, so cache it. It's a bit
    // faster to call `cloneNode()` on an existing node than to recreate it every time.
    return element.cloneNode(true);
  }
  // We don't clone every time, because that would be a perf tax on the first time
  cacheData.usedElement = true;
  return element;
}
function createConstructableStylesheet(content) {
  const stylesheet = new CSSStyleSheet();
  stylesheet.replaceSync(content);
  return stylesheet;
}
function insertConstructableStylesheet(content, target, cacheData) {
  const {
    adoptedStyleSheets
  } = target;
  const {
    stylesheet
  } = cacheData;
  // The reason we prefer .push() rather than reassignment is for perf: https://github.com/salesforce/lwc/pull/2683
  adoptedStyleSheets.push(stylesheet);
}
function insertStyleElement(content, target, cacheData) {
  const elm = createStyleElement(content, cacheData);
  target.appendChild(elm);
}
function getCacheData(content, useConstructableStylesheet) {
  let cacheData = stylesheetCache.get(content);
  if (isUndefined$1(cacheData)) {
    cacheData = {
      stylesheet: undefined,
      element: undefined,
      roots: undefined,
      global: false,
      usedElement: false
    };
    stylesheetCache.set(content, cacheData);
  }
  // Create <style> elements or CSSStyleSheets on-demand, as needed
  if (useConstructableStylesheet && isUndefined$1(cacheData.stylesheet)) {
    cacheData.stylesheet = createConstructableStylesheet(content);
  } else if (!useConstructableStylesheet && isUndefined$1(cacheData.element)) {
    cacheData.element = createFreshStyleElement(content);
  }
  return cacheData;
}
function insertGlobalStylesheet(content) {
  // Force a <style> element for global stylesheets. See comment below.
  const cacheData = getCacheData(content, false);
  if (cacheData.global) {
    // already inserted
    return;
  }
  cacheData.global = true; // mark inserted
  // TODO [#2922]: use document.adoptedStyleSheets in supported browsers. Currently we can't, due to backwards compat.
  insertStyleElement(content, document.head, cacheData);
}
function insertLocalStylesheet(content, target) {
  const cacheData = getCacheData(content, supportsConstructableStylesheets);
  let {
    roots
  } = cacheData;
  if (isUndefined$1(roots)) {
    roots = cacheData.roots = new WeakSet(); // lazily initialize (not needed for global styles)
  } else if (roots.has(target)) {
    // already inserted
    return;
  }
  roots.add(target); // mark inserted
  // Constructable stylesheets are only supported in certain browsers:
  // https://caniuse.com/mdn-api_document_adoptedstylesheets
  // The reason we use it is for perf: https://github.com/salesforce/lwc/pull/2460
  if (supportsConstructableStylesheets) {
    insertConstructableStylesheet(content, target, cacheData);
  } else {
    // Fall back to <style> element
    insertStyleElement(content, target, cacheData);
  }
}
function insertStylesheet(content, target) {
  if (isUndefined$1(target)) {
    // global
    insertGlobalStylesheet(content);
  } else {
    // local
    insertLocalStylesheet(content, target);
  }
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const cachedConstructors = new Map();
const elementsUpgradedOutsideLWC = new WeakSet();
let elementBeingUpgradedByLWC = false;
let formAssociatedCallbackToUse;
let formDisabledCallbackToUse;
let formResetCallbackToUse;
let formStateRestoreCallbackToUse;
const instancesToFormAssociatedCallbacks = new WeakMap();
const instancesToFormDisabledCallbacks = new WeakMap();
const instancesToFormResetCallbacks = new WeakMap();
const instancesToFormStateRestoreCallbacks = new WeakMap();
// Creates a constructor that is intended to be used directly as a custom element, except that the upgradeCallback is
// passed in to the constructor so LWC can reuse the same custom element constructor for multiple components.
// Another benefit is that only LWC can create components that actually do anything – if you do
// `customElements.define('x-foo')`, then you don't have access to the upgradeCallback, so it's a dummy custom element.
// This class should be created once per tag name.
const createUpgradableConstructor = (connectedCallback, disconnectedCallback) => {
  const hasConnectedCallback = !isUndefined$1(connectedCallback);
  const hasDisconnectedCallback = !isUndefined$1(disconnectedCallback);
  // TODO [#2972]: this class should expose observedAttributes as necessary
  class UpgradableConstructor extends HTMLElement {
    constructor(upgradeCallback) {
      super();
      // If the element is not created using lwc.createElement(), e.g. `document.createElement('x-foo')`,
      // then elementBeingUpgraded will be false
      if (elementBeingUpgradedByLWC) {
        instancesToFormAssociatedCallbacks.set(this, formAssociatedCallbackToUse);
        instancesToFormDisabledCallbacks.set(this, formDisabledCallbackToUse);
        instancesToFormResetCallbacks.set(this, formResetCallbackToUse);
        instancesToFormStateRestoreCallbacks.set(this, formStateRestoreCallbackToUse);
        upgradeCallback(this);
      } else if (hasConnectedCallback || hasDisconnectedCallback) {
        // If this element has connected or disconnected callbacks, then we need to keep track of
        // instances that were created outside LWC (i.e. not created by `lwc.createElement()`).
        // If the element has no connected or disconnected callbacks, then we don't need to track this.
        elementsUpgradedOutsideLWC.add(this);
        // TODO [#2970]: LWC elements cannot be upgraded via new Ctor()
        // Do we want to support this? Throw an error? Currently for backwards compat it's a no-op.
      }
    }
    formAssociatedCallback() {
      const formAssociatedCallback = instancesToFormAssociatedCallbacks.get(this);
      // if element was upgraded outside LWC, this will be undefined
      if (!isUndefined$1(formAssociatedCallback)) {
        formAssociatedCallback(this);
      }
    }
    formResetCallback() {
      const formResetCallback = instancesToFormResetCallbacks.get(this);
      // if element was upgraded outside LWC, this will be undefined
      if (!isUndefined$1(formResetCallback)) {
        formResetCallback(this);
      }
    }
    formDisabledCallback() {
      const formDisabledCallback = instancesToFormDisabledCallbacks.get(this);
      // if element was upgraded outside LWC, this will be undefined
      if (!isUndefined$1(formDisabledCallback)) {
        formDisabledCallback(this);
      }
    }
    formStateRestoreCallback() {
      const formStateRestoreCallback = instancesToFormStateRestoreCallbacks.get(this);
      // if element was upgraded outside LWC, this will be undefined
      if (!isUndefined$1(formStateRestoreCallback)) {
        formStateRestoreCallback(this);
      }
    }
    /*LWC compiler v6.6.6*/
  }
  UpgradableConstructor.formAssociated = true;
  // Do not unnecessarily add a connectedCallback/disconnectedCallback, as it introduces perf overhead
  // See: https://github.com/salesforce/lwc/pull/3162#issuecomment-1311851174
  if (hasConnectedCallback) {
    UpgradableConstructor.prototype.connectedCallback = function () {
      if (!elementsUpgradedOutsideLWC.has(this)) {
        connectedCallback(this);
      }
    };
  }
  if (hasDisconnectedCallback) {
    UpgradableConstructor.prototype.disconnectedCallback = function () {
      if (!elementsUpgradedOutsideLWC.has(this)) {
        disconnectedCallback(this);
      }
    };
  }
  return UpgradableConstructor;
};
function getUpgradableConstructor(tagName, connectedCallback, disconnectedCallback) {
  let UpgradableConstructor = cachedConstructors.get(tagName);
  if (isUndefined$1(UpgradableConstructor)) {
    if (!isUndefined$1(customElements.get(tagName))) {
      throw new Error(`Unexpected tag name "${tagName}". This name is a registered custom element, preventing LWC to upgrade the element.`);
    }
    UpgradableConstructor = createUpgradableConstructor(connectedCallback, disconnectedCallback);
    customElements.define(tagName, UpgradableConstructor);
    cachedConstructors.set(tagName, UpgradableConstructor);
  }
  return UpgradableConstructor;
}
const createCustomElement = (tagName, upgradeCallback, connectedCallback, disconnectedCallback, formAssociatedCallback, formDisabledCallback, formResetCallback, formStateRestoreCallback) => {
  const UpgradableConstructor = getUpgradableConstructor(tagName, connectedCallback, disconnectedCallback);
  formAssociatedCallbackToUse = formAssociatedCallback;
  formDisabledCallbackToUse = formDisabledCallback;
  formResetCallbackToUse = formResetCallback;
  formStateRestoreCallbackToUse = formStateRestoreCallback;
  elementBeingUpgradedByLWC = true;
  try {
    return new UpgradableConstructor(upgradeCallback);
  } finally {
    elementBeingUpgradedByLWC = false;
    formAssociatedCallbackToUse = undefined;
    formDisabledCallbackToUse = undefined;
    formResetCallbackToUse = undefined;
    formStateRestoreCallbackToUse = undefined;
  }
};

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * A factory function that produces a renderer.
 * Renderer encapsulates operations that are required to render an LWC component into the underlying
 * runtime environment. In the case of @lwc/enigne-dom, it is meant to be used in a DOM environment.
 * Example usage:
 * import { renderer, rendererFactory } from 'lwc';
 * const customRenderer = rendererFactory(renderer);
 *
 * @param baseRenderer Either null or the base renderer imported from 'lwc'.
 */
function rendererFactory(baseRenderer) {
  const renderer = function (exports) {
    /**
     * Copyright (C) 2023 salesforce.com, inc.
     */
    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function invariant(value, msg) {
      if (!value) {
        throw new Error(`Invariant Violation: ${msg}`);
      }
    }
    function isTrue$1(value, msg) {
      if (!value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function isFalse$1(value, msg) {
      if (value) {
        throw new Error(`Assert Violation: ${msg}`);
      }
    }
    function fail(msg) {
      throw new Error(msg);
    }
    var assert = /*#__PURE__*/Object.freeze({
      __proto__: null,
      fail: fail,
      invariant: invariant,
      isFalse: isFalse$1,
      isTrue: isTrue$1
    });
    function isUndefined(obj) {
      return obj === undefined;
    }
    function isNull(obj) {
      return obj === null;
    }
    /** version: 5.0.0 */

    /*
     * Copyright (c) 2023, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    class WireContextSubscriptionEvent extends CustomEvent {
      constructor(adapterToken, {
        setNewContext,
        setDisconnectedCallback
      }) {
        super(adapterToken, {
          bubbles: true,
          composed: true
        });
        this.setNewContext = setNewContext;
        this.setDisconnectedCallback = setDisconnectedCallback;
      }
      /*LWC compiler v6.6.6*/
    }
    function registerContextConsumer(elm, adapterContextToken, subscriptionPayload) {
      dispatchEvent(elm, new WireContextSubscriptionEvent(adapterContextToken, subscriptionPayload));
    }
    function registerContextProvider(elm, adapterContextToken, onContextSubscription) {
      addEventListener(elm, adapterContextToken, evt => {
        evt.stopImmediatePropagation();
        const {
          setNewContext,
          setDisconnectedCallback
        } = evt;
        onContextSubscription({
          setNewContext,
          setDisconnectedCallback
        });
      });
    }

    /*
     * Copyright (c) 2018, salesforce.com, inc.
     * All rights reserved.
     * SPDX-License-Identifier: MIT
     * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
     */
    function cloneNode(node, deep) {
      return node.cloneNode(deep);
    }
    function createElement(tagName, namespace) {
      return isUndefined(namespace) ? document.createElement(tagName) : document.createElementNS(namespace, tagName);
    }
    function createText(content) {
      return document.createTextNode(content);
    }
    function createComment(content) {
      return document.createComment(content);
    }
    // Parse the fragment HTML string into DOM
    function createFragment(html) {
      const template = document.createElement('template');
      template.innerHTML = html;
      return template.content.firstChild;
    }
    function insert(node, parent, anchor) {
      parent.insertBefore(node, anchor);
    }
    function remove(node, parent) {
      parent.removeChild(node);
    }
    function nextSibling(node) {
      return node.nextSibling;
    }
    function previousSibling(node) {
      return node.previousSibling;
    }
    function attachShadow(element, options) {
      // `shadowRoot` will be non-null in two cases:
      //   1. upon initial load with an SSR-generated DOM, while in Shadow render mode
      //   2. when a webapp author places <c-app> in their static HTML and mounts their
      //      root component with customElement.define('c-app', Ctor)
      if (!isNull(element.shadowRoot)) {
        return element.shadowRoot;
      }
      return element.attachShadow(options);
    }
    function setText(node, content) {
      node.nodeValue = content;
    }
    function getProperty(node, key) {
      return node[key];
    }
    function setProperty(node, key, value) {
      node[key] = value;
    }
    function getAttribute(element, name, namespace) {
      return isUndefined(namespace) ? element.getAttribute(name) : element.getAttributeNS(namespace, name);
    }
    function setAttribute(element, name, value, namespace) {
      return isUndefined(namespace) ? element.setAttribute(name, value) : element.setAttributeNS(namespace, name, value);
    }
    function removeAttribute(element, name, namespace) {
      if (isUndefined(namespace)) {
        element.removeAttribute(name);
      } else {
        element.removeAttributeNS(namespace, name);
      }
    }
    function addEventListener(target, type, callback, options) {
      target.addEventListener(type, callback, options);
    }
    function removeEventListener(target, type, callback, options) {
      target.removeEventListener(type, callback, options);
    }
    function dispatchEvent(target, event) {
      return target.dispatchEvent(event);
    }
    function getClassList(element) {
      return element.classList;
    }
    function setCSSStyleProperty(element, name, value, important) {
      // TODO [#0]: How to avoid this type casting? Shall we use a different type interface to
      // represent elements in the engine?
      element.style.setProperty(name, value, important ? 'important' : '');
    }
    function getBoundingClientRect(element) {
      return element.getBoundingClientRect();
    }
    function querySelector(element, selectors) {
      return element.querySelector(selectors);
    }
    function querySelectorAll(element, selectors) {
      return element.querySelectorAll(selectors);
    }
    function getElementsByTagName(element, tagNameOrWildCard) {
      return element.getElementsByTagName(tagNameOrWildCard);
    }
    function getElementsByClassName(element, names) {
      return element.getElementsByClassName(names);
    }
    function getChildren(element) {
      return element.children;
    }
    function getChildNodes(element) {
      return element.childNodes;
    }
    function getFirstChild(element) {
      return element.firstChild;
    }
    function getFirstElementChild(element) {
      return element.firstElementChild;
    }
    function getLastChild(element) {
      return element.lastChild;
    }
    function getLastElementChild(element) {
      return element.lastElementChild;
    }
    function isConnected(node) {
      return node.isConnected;
    }
    function assertInstanceOfHTMLElement(elm, msg) {
      assert.invariant(elm instanceof HTMLElement, msg);
    }
    function ownerDocument(element) {
      return element.ownerDocument;
    }
    function getTagName(elm) {
      return elm.tagName;
    }
    function attachInternals(elm) {
      return attachInternalsFunc.call(elm);
    }
    // Use the attachInternals method from HTMLElement.prototype because access to it is removed
    // in HTMLBridgeElement, ie: elm.attachInternals is undefined.
    // Additionally, cache the attachInternals method to protect against 3rd party monkey-patching.
    const attachInternalsFunc = typeof ElementInternals !== 'undefined' ? HTMLElement.prototype.attachInternals : () => {
      throw new Error('attachInternals API is not supported in this browser environment.');
    };
    exports.addEventListener = addEventListener;
    exports.assertInstanceOfHTMLElement = assertInstanceOfHTMLElement;
    exports.attachInternals = attachInternals;
    exports.attachShadow = attachShadow;
    exports.cloneNode = cloneNode;
    exports.createComment = createComment;
    exports.createElement = createElement;
    exports.createFragment = createFragment;
    exports.createText = createText;
    exports.dispatchEvent = dispatchEvent;
    exports.getAttribute = getAttribute;
    exports.getBoundingClientRect = getBoundingClientRect;
    exports.getChildNodes = getChildNodes;
    exports.getChildren = getChildren;
    exports.getClassList = getClassList;
    exports.getElementsByClassName = getElementsByClassName;
    exports.getElementsByTagName = getElementsByTagName;
    exports.getFirstChild = getFirstChild;
    exports.getFirstElementChild = getFirstElementChild;
    exports.getLastChild = getLastChild;
    exports.getLastElementChild = getLastElementChild;
    exports.getProperty = getProperty;
    exports.getTagName = getTagName;
    exports.insert = insert;
    exports.isConnected = isConnected;
    exports.nextSibling = nextSibling;
    exports.ownerDocument = ownerDocument;
    exports.previousSibling = previousSibling;
    exports.querySelector = querySelector;
    exports.querySelectorAll = querySelectorAll;
    exports.registerContextConsumer = registerContextConsumer;
    exports.registerContextProvider = registerContextProvider;
    exports.remove = remove;
    exports.removeAttribute = removeAttribute;
    exports.removeEventListener = removeEventListener;
    exports.setAttribute = setAttribute;
    exports.setCSSStyleProperty = setCSSStyleProperty;
    exports.setProperty = setProperty;
    exports.setText = setText;
    return exports;
  }({});
  // Meant to inherit any properties passed via the base renderer as the argument to the factory.
  Object.setPrototypeOf(renderer, baseRenderer);
  return renderer;
}

/*
 * Copyright (c) 2023, Salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * The base renderer that will be used by engine-core.
 * This will be used for DOM operations when lwc is running in a browser environment.
 */
const renderer = assign(
// The base renderer will invoke the factory with null and assign additional properties that are
// shared across renderers
rendererFactory(null),
// Properties that are either not required to be sandboxed or rely on a globally shared information
{
  // insertStyleSheet implementation shares a global cache of stylesheet data
  insertStylesheet,
  // relies on a shared global cache
  createCustomElement,
  defineCustomElement: getUpgradableConstructor,
  isSyntheticShadowDefined: hasOwnProperty$1.call(Element.prototype, KEY__SHADOW_TOKEN)
});

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function resetShadowRootAndLightDom(element, Ctor) {
  if (element.shadowRoot) {
    const shadowRoot = element.shadowRoot;
    while (!isNull(shadowRoot.firstChild)) {
      shadowRoot.removeChild(shadowRoot.firstChild);
    }
  }
  if (Ctor.renderMode === 'light') {
    while (!isNull(element.firstChild)) {
      element.removeChild(element.firstChild);
    }
  }
}
function createVMWithProps(element, Ctor, props) {
  const vm = createVM(element, Ctor, renderer, {
    mode: 'open',
    owner: null,
    tagName: element.tagName.toLowerCase(),
    hydrated: true
  });
  for (const [key, value] of Object.entries(props)) {
    element[key] = value;
  }
  return vm;
}
function hydrateComponent(element, Ctor, props = {}) {
  if (!(element instanceof Element)) {
    throw new TypeError(`"hydrateComponent" expects a valid DOM element as the first parameter but instead received ${element}.`);
  }
  if (!isFunction$1(Ctor)) {
    throw new TypeError(`"hydrateComponent" expects a valid component constructor as the second parameter but instead received ${Ctor}.`);
  }
  if (!isObject(props) || isNull(props)) {
    throw new TypeError(`"hydrateComponent" expects an object as the third parameter but instead received ${props}.`);
  }
  if (getAssociatedVMIfPresent(element)) {
    /* eslint-disable-next-line no-console */
    console.warn(`"hydrateComponent" expects an element that is not hydrated.`, element);
    return;
  }
  try {
    const {
      defineCustomElement,
      getTagName
    } = renderer;
    defineCustomElement(StringToLowerCase.call(getTagName(element)));
    const vm = createVMWithProps(element, Ctor, props);
    hydrateRoot(vm);
  } catch (e) {
    // Fallback: In case there's an error while hydrating, let's log the error, and replace the element content
    //           with the client generated DOM.
    /* eslint-disable-next-line no-console */
    console.error('Recovering from error while hydrating: ', e);
    // We want to preserve the element, so we need to reset the shadowRoot and light dom.
    resetShadowRootAndLightDom(element, Ctor);
    // we need to recreate the vm with the hydration flag on, so it re-uses the existing shadowRoot.
    createVMWithProps(element, Ctor, props);
    connectRootElement(element);
  }
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
/**
 * This function builds a Web Component class from a LWC constructor so it can be
 * registered as a new element via customElements.define() at any given time.
 *
 * @deprecated since version 1.3.11
 *
 * @example
 * ```
 * import { buildCustomElementConstructor } from 'lwc';
 * import Foo from 'ns/foo';
 * const WC = buildCustomElementConstructor(Foo);
 * customElements.define('x-foo', WC);
 * const elm = document.createElement('x-foo');
 * ```
 */
function deprecatedBuildCustomElementConstructor(Ctor) {
  if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable-next-line no-console */
    console.warn('Deprecated function called: "buildCustomElementConstructor" function is deprecated and it will be removed.' + `Use "${Ctor.name}.CustomElementConstructor" static property of the component constructor to access the corresponding custom element constructor instead.`);
  }
  return Ctor.CustomElementConstructor;
}
function clearNode(node) {
  const childNodes = renderer.getChildNodes(node);
  for (let i = childNodes.length - 1; i >= 0; i--) {
    renderer.remove(childNodes[i], node);
  }
}
function buildCustomElementConstructor(Ctor) {
  var _a;
  const HtmlPrototype = getComponentHtmlPrototype(Ctor);
  const {
    observedAttributes
  } = HtmlPrototype;
  const {
    attributeChangedCallback
  } = HtmlPrototype.prototype;
  return _a = class extends HTMLElement {
    constructor() {
      super();
      if (!isNull(this.shadowRoot)) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(`Found an existing shadow root for the custom element "${Ctor.name}". Call \`hydrateComponent\` instead.`);
        }
        clearNode(this.shadowRoot);
      }
      // Compute renderMode/shadowMode in advance. This must be done before `createVM` because `createVM` may
      // mutate the element.
      const {
        shadowMode,
        renderMode
      } = computeShadowAndRenderMode(Ctor, renderer);
      // Native shadow components are allowed to have pre-existing `childNodes` before upgrade. This supports
      // use cases where a custom element has declaratively-defined slotted content, e.g.:
      // https://github.com/salesforce/lwc/issues/3639
      const isNativeShadow = renderMode === 1 /* RenderMode.Shadow */ && shadowMode === 0 /* ShadowMode.Native */;
      if (!isNativeShadow && this.childNodes.length > 0) {
        if (process.env.NODE_ENV !== 'production') {
          // eslint-disable-next-line no-console
          console.warn(`Light DOM and synthetic shadow custom elements cannot have child nodes. ` + `Ensure the element is empty, including whitespace.`);
        }
        clearNode(this);
      }
      createVM(this, Ctor, renderer, {
        mode: 'open',
        owner: null,
        tagName: this.tagName
      });
    }
    connectedCallback() {
      connectRootElement(this);
    }
    disconnectedCallback() {
      disconnectRootElement(this);
    }
    attributeChangedCallback(name, oldValue, newValue) {
      attributeChangedCallback.call(this, name, oldValue, newValue);
    }
    /*LWC compiler v6.6.6*/
  }, _a.observedAttributes = observedAttributes, _a;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line @lwc/lwc-internal/no-global-node
const _Node$1 = Node;
const ConnectingSlot = new WeakMap();
const DisconnectingSlot = new WeakMap();
function callNodeSlot(node, slot) {
  if (process.env.NODE_ENV !== 'production') {
    assert.isTrue(node, `callNodeSlot() should not be called for a non-object`);
  }
  const fn = slot.get(node);
  if (!isUndefined$1(fn)) {
    fn(node);
  }
  return node; // for convenience
}
if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
  // Monkey patching Node methods to be able to detect the insertions and removal of root elements
  // created via createElement.
  const {
    appendChild,
    insertBefore,
    removeChild,
    replaceChild
  } = _Node$1.prototype;
  assign(_Node$1.prototype, {
    appendChild(newChild) {
      const appendedNode = appendChild.call(this, newChild);
      return callNodeSlot(appendedNode, ConnectingSlot);
    },
    insertBefore(newChild, referenceNode) {
      const insertedNode = insertBefore.call(this, newChild, referenceNode);
      return callNodeSlot(insertedNode, ConnectingSlot);
    },
    removeChild(oldChild) {
      const removedNode = removeChild.call(this, oldChild);
      return callNodeSlot(removedNode, DisconnectingSlot);
    },
    replaceChild(newChild, oldChild) {
      const replacedNode = replaceChild.call(this, newChild, oldChild);
      callNodeSlot(replacedNode, DisconnectingSlot);
      callNodeSlot(newChild, ConnectingSlot);
      return replacedNode;
    }
  });
}
/**
 * EXPERIMENTAL: This function is almost identical to document.createElement with the slightly
 * difference that in the options, you can pass the `is` property set to a Constructor instead of
 * just a string value. The intent is to allow the creation of an element controlled by LWC without
 * having to register the element as a custom element.
 *
 * @example
 * ```
 * const el = createElement('x-foo', { is: FooCtor });
 * ```
 */
function createElement(sel, options) {
  if (!isObject(options) || isNull(options)) {
    throw new TypeError(`"createElement" function expects an object as second parameter but received "${toString$1(options)}".`);
  }
  const Ctor = options.is;
  if (!isFunction$1(Ctor)) {
    throw new TypeError(`"createElement" function expects an "is" option with a valid component constructor.`);
  }
  const {
    createCustomElement
  } = renderer;
  // tagName must be all lowercase, unfortunately, we have legacy code that is
  // passing `sel` as a camel-case, which makes them invalid custom elements name
  // the following line guarantees that this does not leaks beyond this point.
  const tagName = StringToLowerCase.call(sel);
  // the custom element from the registry is expecting an upgrade callback
  /**
   * Note: if the upgradable constructor does not expect, or throw when we new it
   * with a callback as the first argument, we could implement a more advanced
   * mechanism that only passes that argument if the constructor is known to be
   * an upgradable custom element.
   */
  const upgradeCallback = elm => {
    createVM(elm, Ctor, renderer, {
      tagName,
      mode: options.mode !== 'closed' ? 'open' : 'closed',
      owner: null
    });
    if (!lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
      ConnectingSlot.set(elm, connectRootElement);
      DisconnectingSlot.set(elm, disconnectRootElement);
    }
  };
  let connectedCallback;
  let disconnectedCallback;
  let formAssociatedCallback;
  let formDisabledCallback;
  let formResetCallback;
  let formStateRestoreCallback;
  if (lwcRuntimeFlags.ENABLE_NATIVE_CUSTOM_ELEMENT_LIFECYCLE) {
    connectedCallback = elm => {
      connectRootElement(elm);
    };
    disconnectedCallback = elm => {
      disconnectRootElement(elm);
    };
    formAssociatedCallback = elm => {
      runFormAssociatedCallback(elm);
    };
    formDisabledCallback = elm => {
      runFormDisabledCallback(elm);
    };
    formResetCallback = elm => {
      runFormResetCallback(elm);
    };
    formStateRestoreCallback = elm => {
      runFormStateRestoreCallback(elm);
    };
  }
  const element = createCustomElement(tagName, upgradeCallback, connectedCallback, disconnectedCallback, formAssociatedCallback, formDisabledCallback, formResetCallback, formStateRestoreCallback);
  return element;
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
// TODO [#2472]: Remove this workaround when appropriate.
// eslint-disable-next-line @lwc/lwc-internal/no-global-node
const _Node = Node;
/**
 * EXPERIMENTAL: The purpose of this function is to detect shadowed nodes. THIS API WILL BE REMOVED
 * ONCE LOCKER V1 IS NO LONGER SUPPORTED.
 */
function isNodeShadowed(node) {
  if (isFalse(node instanceof _Node)) {
    return false;
  }
  // It's debatable whether shadow root instances should be considered as shadowed, but we keep
  // this unchanged for legacy reasons (#1250).
  if (node instanceof ShadowRoot) {
    return false;
  }
  const rootNode = node.getRootNode();
  // Handle the native case. We can return early here because an invariant of LWC is that
  // synthetic roots cannot be descendants of native roots.
  if (rootNode instanceof ShadowRoot && isFalse(hasOwnProperty$1.call(getPrototypeOf$1(rootNode), 'synthetic'))) {
    return true;
  }
  // TODO [#1252]: Old behavior that is still used by some pieces of the platform. Manually
  // inserted nodes without the `lwc:dom=manual` directive will be considered as global elements.
  return renderer.isSyntheticShadowDefined && !isUndefined$1(node[KEY__SHADOW_RESOLVER]);
}

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
const ComponentConstructorToCustomElementConstructorMap = new Map();
function getCustomElementConstructor(Ctor) {
  if (Ctor === LightningElement) {
    throw new TypeError(`Invalid Constructor. LightningElement base class can't be claimed as a custom element.`);
  }
  let ce = ComponentConstructorToCustomElementConstructorMap.get(Ctor);
  if (isUndefined$1(ce)) {
    ce = buildCustomElementConstructor(Ctor);
    ComponentConstructorToCustomElementConstructorMap.set(Ctor, ce);
  }
  return ce;
}
/**
 * This static getter builds a Web Component class from a LWC constructor so it can be registered
 * as a new element via customElements.define() at any given time. E.g.:
 *
 *      import Foo from 'ns/foo';
 *      customElements.define('x-foo', Foo.CustomElementConstructor);
 *      const elm = document.createElement('x-foo');
 *
 */
defineProperty(LightningElement, 'CustomElementConstructor', {
  get() {
    return getCustomElementConstructor(this);
  }
});
freeze(LightningElement);
seal(LightningElement.prototype);

/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function addEventListener(target, type, callback, options) {
  target.addEventListener(type, callback, options);
}

/*
 * Copyright (c) 2023, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
function createContextProvider(adapter) {
  return createContextProviderWithRegister(adapter, registerContextProvider);
}
function registerContextProvider(elm, adapterContextToken, onContextSubscription) {
  addEventListener(elm, adapterContextToken, evt => {
    evt.stopImmediatePropagation();
    const {
      setNewContext,
      setDisconnectedCallback
    } = evt;
    onContextSubscription({
      setNewContext,
      setDisconnectedCallback
    });
  });
}
export { LightningElement, profilerControl as __unstable__ProfilerControl, reportingControl as __unstable__ReportingControl, api$1 as api, deprecatedBuildCustomElementConstructor as buildCustomElementConstructor, createContextProvider, createElement, freezeTemplate, getComponentConstructor, getComponentDef, hydrateComponent, isComponentConstructor, isNodeShadowed as isNodeFromTemplate, parseFragment, parseSVGFragment, readonly, registerComponent, registerDecorators, registerTemplate, renderer, rendererFactory, sanitizeAttribute, setFeatureFlag, setFeatureFlagForTest, setHooks, swapComponent, swapStyle, swapTemplate, track, unwrap, wire };
/** version: 5.0.0 */