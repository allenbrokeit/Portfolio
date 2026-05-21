// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"8KtQC":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "788aab3a24344e80";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"edHeF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _smbls = require("smbls");
var _appJs = require("./app.js");
var _appJsDefault = parcelHelpers.interopDefault(_appJs);
var _contextJs = require("./context.js");
var _contextJsDefault = parcelHelpers.interopDefault(_contextJs);
(0, _smbls.create)((0, _appJsDefault.default), (0, _contextJsDefault.default));

},{"smbls":"fjPsn","./app.js":"jl3lw","./context.js":"k06vV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fjPsn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANIMATION_PROPS", ()=>Dh);
parcelHelpers.export(exports, "ARIA_ROLES", ()=>mR);
parcelHelpers.export(exports, "ATTR_TRANSFORMS", ()=>Qh);
parcelHelpers.export(exports, "BLOCK_PROPS", ()=>Lh);
parcelHelpers.export(exports, "CDN_PROVIDERS", ()=>Xt);
parcelHelpers.export(exports, "CONFIG", ()=>Da);
parcelHelpers.export(exports, "CSS_NATIVE_COLOR_REGEX", ()=>le);
parcelHelpers.export(exports, "CSS_PROPS_REGISTRY", ()=>lt);
parcelHelpers.export(exports, "CSS_UNITS", ()=>Gr);
parcelHelpers.export(exports, "DEFAULT_CONFIG", ()=>Is);
parcelHelpers.export(exports, "DEFAULT_CSS_PROPERTIES_LIST", ()=>xt);
parcelHelpers.export(exports, "DELEGATED_EVENTS", ()=>Cs);
parcelHelpers.export(exports, "DESIGN_SYSTEM_OPTIONS", ()=>wy);
parcelHelpers.export(exports, "DOMQL_EVENTS", ()=>Gf);
parcelHelpers.export(exports, "DOMQ_PROPERTIES", ()=>De);
parcelHelpers.export(exports, "DOM_EVENTS", ()=>Cw);
parcelHelpers.export(exports, "ENV", ()=>pu);
parcelHelpers.export(exports, "FACTORY", ()=>Se);
parcelHelpers.export(exports, "FLEX_PROPS", ()=>Vh);
parcelHelpers.export(exports, "FONT_PROPS", ()=>Mh);
parcelHelpers.export(exports, "GRID_PROPS", ()=>zh);
parcelHelpers.export(exports, "HTML_ATTRIBUTES", ()=>Tc);
parcelHelpers.export(exports, "HTML_TAGS", ()=>on);
parcelHelpers.export(exports, "LIFECYCLE_EVENTS", ()=>vr);
parcelHelpers.export(exports, "METHODS", ()=>tn);
parcelHelpers.export(exports, "METHODS_EXL", ()=>ao);
parcelHelpers.export(exports, "MISC_PROPS", ()=>Nh);
parcelHelpers.export(exports, "MIXINS", ()=>Eh);
parcelHelpers.export(exports, "NODE_ENV", ()=>Gt);
parcelHelpers.export(exports, "OPTIONS", ()=>$o);
parcelHelpers.export(exports, "PACKAGE_MANAGER_TO_CDN", ()=>We);
parcelHelpers.export(exports, "PARSED_DOMQ_PROPERTIES", ()=>io);
parcelHelpers.export(exports, "POSITION_PROPS", ()=>jh);
parcelHelpers.export(exports, "PROPS_METHODS", ()=>Me);
parcelHelpers.export(exports, "REGISTRY", ()=>Rt);
parcelHelpers.export(exports, "ROUTER_OPTIONS", ()=>Il);
parcelHelpers.export(exports, "STATE_PROPERTIES", ()=>qf);
parcelHelpers.export(exports, "SVG_TAGS", ()=>ks);
parcelHelpers.export(exports, "THEME_PROPS", ()=>Bh);
parcelHelpers.export(exports, "TIMING_PROPS", ()=>Rs);
parcelHelpers.export(exports, "TYPES", ()=>eo);
parcelHelpers.export(exports, "UNIVERSAL_RESERVED_KEYS", ()=>Ta);
parcelHelpers.export(exports, "VALUE_TRANSFORMERS", ()=>xh);
parcelHelpers.export(exports, "activateConfig", ()=>jE);
parcelHelpers.export(exports, "addCaching", ()=>aa);
parcelHelpers.export(exports, "addContext", ()=>ia);
parcelHelpers.export(exports, "addDelegatedEvent", ()=>wc);
parcelHelpers.export(exports, "addExtend", ()=>Bu);
parcelHelpers.export(exports, "addExtends", ()=>Et);
parcelHelpers.export(exports, "addItemAfterEveryElement", ()=>$f);
parcelHelpers.export(exports, "addMethods", ()=>Ps);
parcelHelpers.export(exports, "addProtoToArray", ()=>oo);
parcelHelpers.export(exports, "addRef", ()=>na);
parcelHelpers.export(exports, "animation", ()=>ZS);
parcelHelpers.export(exports, "appendSVGSprite", ()=>cc);
parcelHelpers.export(exports, "appendSvgIconsSprite", ()=>fc);
parcelHelpers.export(exports, "applyAttrTransforms", ()=>rg);
parcelHelpers.export(exports, "applyCSS", ()=>fy);
parcelHelpers.export(exports, "applyDependentState", ()=>cp);
parcelHelpers.export(exports, "applyDocument", ()=>sc);
parcelHelpers.export(exports, "applyEvent", ()=>da);
parcelHelpers.export(exports, "applyEventUpdate", ()=>ha);
parcelHelpers.export(exports, "applyExtends", ()=>Es);
parcelHelpers.export(exports, "applyHeadings", ()=>uh);
parcelHelpers.export(exports, "applyInitialState", ()=>Yh);
parcelHelpers.export(exports, "applyMediaSequenceVars", ()=>mr);
parcelHelpers.export(exports, "applyProps", ()=>Eo);
parcelHelpers.export(exports, "applyReset", ()=>uc);
parcelHelpers.export(exports, "applySequenceGlobalVars", ()=>Ua);
parcelHelpers.export(exports, "applySequenceVars", ()=>Ke);
parcelHelpers.export(exports, "applySpacingSequence", ()=>ec);
parcelHelpers.export(exports, "applyStateMethods", ()=>Wt);
parcelHelpers.export(exports, "applyTimingSequence", ()=>oc);
parcelHelpers.export(exports, "applyTrueProps", ()=>Wh);
parcelHelpers.export(exports, "applyTypographySequence", ()=>Ja);
parcelHelpers.export(exports, "arrayContainsOtherArray", ()=>Af);
parcelHelpers.export(exports, "arraysEqual", ()=>Df);
parcelHelpers.export(exports, "arrayzeValue", ()=>pr);
parcelHelpers.export(exports, "batch", ()=>$e);
parcelHelpers.export(exports, "breakpoints", ()=>YS);
parcelHelpers.export(exports, "buildImgSrcset", ()=>is);
parcelHelpers.export(exports, "buildSourcesAndImg", ()=>as);
parcelHelpers.export(exports, "cache", ()=>gp);
parcelHelpers.export(exports, "cacheNode", ()=>kr);
parcelHelpers.export(exports, "call", ()=>qp);
parcelHelpers.export(exports, "captureSnapshot", ()=>Xp);
parcelHelpers.export(exports, "changeGlobalTheme", ()=>Sh);
parcelHelpers.export(exports, "changeLightness", ()=>ES);
parcelHelpers.export(exports, "checkAttributeByTagName", ()=>Je);
parcelHelpers.export(exports, "checkEventFunctions", ()=>eg);
parcelHelpers.export(exports, "checkForStateTypes", ()=>op);
parcelHelpers.export(exports, "checkIfBoxSize", ()=>tc);
parcelHelpers.export(exports, "checkIfInherits", ()=>pa);
parcelHelpers.export(exports, "checkIfStringIsInArray", ()=>Nf);
parcelHelpers.export(exports, "class", ()=>n_);
parcelHelpers.export(exports, "clone", ()=>Jf);
parcelHelpers.export(exports, "cloneAndMergeArrayExtend", ()=>bo);
parcelHelpers.export(exports, "cloneFunction", ()=>Su);
parcelHelpers.export(exports, "color", ()=>BS);
parcelHelpers.export(exports, "colorStringToRgbaArray", ()=>be);
parcelHelpers.export(exports, "components", ()=>Tn);
parcelHelpers.export(exports, "concatAddExtends", ()=>Lu);
parcelHelpers.export(exports, "convertSvgToSymbol", ()=>Wa);
parcelHelpers.export(exports, "copyJavaScriptToClipboard", ()=>Rd);
parcelHelpers.export(exports, "copyStringToClipboard", ()=>Od);
parcelHelpers.export(exports, "create", ()=>sx);
parcelHelpers.export(exports, "createAsync", ()=>PD);
parcelHelpers.export(exports, "createBasedOnType", ()=>ra);
parcelHelpers.export(exports, "createComputed", ()=>mx);
parcelHelpers.export(exports, "createConfig", ()=>Jd);
parcelHelpers.export(exports, "createDefine", ()=>u0);
parcelHelpers.export(exports, "createEffect", ()=>ft);
parcelHelpers.export(exports, "createElement", ()=>rp);
parcelHelpers.export(exports, "createElementExtends", ()=>Vi);
parcelHelpers.export(exports, "createExtends", ()=>So);
parcelHelpers.export(exports, "createExtendsFromKeys", ()=>sn);
parcelHelpers.export(exports, "createExtendsStack", ()=>Hi);
parcelHelpers.export(exports, "createHTMLNode", ()=>ws);
parcelHelpers.export(exports, "createIfConditionFlag", ()=>_u);
parcelHelpers.export(exports, "createInheritedState", ()=>sp);
parcelHelpers.export(exports, "createKey", ()=>go);
parcelHelpers.export(exports, "createNestedObject", ()=>su);
parcelHelpers.export(exports, "createNestedObjectByKeyPath", ()=>ap);
parcelHelpers.export(exports, "createObjectWithoutPrototype", ()=>Ii);
parcelHelpers.export(exports, "createParent", ()=>oa);
parcelHelpers.export(exports, "createPath", ()=>sa);
parcelHelpers.export(exports, "createProps", ()=>To);
parcelHelpers.export(exports, "createPropsStack", ()=>Qi);
parcelHelpers.export(exports, "createRoot", ()=>ep);
parcelHelpers.export(exports, "createScope", ()=>up);
parcelHelpers.export(exports, "createScopeStore", ()=>Ai);
parcelHelpers.export(exports, "createSignal", ()=>ne);
parcelHelpers.export(exports, "createSkeleton", ()=>$D);
parcelHelpers.export(exports, "createSnapshotId", ()=>ho);
parcelHelpers.export(exports, "createState", ()=>yw);
parcelHelpers.export(exports, "createStore", ()=>jt);
parcelHelpers.export(exports, "createSync", ()=>ID);
parcelHelpers.export(exports, "css", ()=>Xe);
parcelHelpers.export(exports, "cssMediaVars", ()=>Yd);
parcelHelpers.export(exports, "cssVars", ()=>Kd);
parcelHelpers.export(exports, "customDecodeURIComponent", ()=>Hf);
parcelHelpers.export(exports, "customEncodeURIComponent", ()=>Wf);
parcelHelpers.export(exports, "cutArrayAfterValue", ()=>Pf);
parcelHelpers.export(exports, "cutArrayBeforeValue", ()=>Rf);
parcelHelpers.export(exports, "debounce", ()=>yo);
parcelHelpers.export(exports, "debounceOnContext", ()=>yu);
parcelHelpers.export(exports, "decodeNewlines", ()=>Uf);
parcelHelpers.export(exports, "deepClone", ()=>Q);
parcelHelpers.export(exports, "deepContains", ()=>nu);
parcelHelpers.export(exports, "deepDefaults", ()=>rs);
parcelHelpers.export(exports, "deepDestringifyFunctions", ()=>ie);
parcelHelpers.export(exports, "deepExtend", ()=>Bi);
parcelHelpers.export(exports, "deepMerge", ()=>q);
parcelHelpers.export(exports, "deepMergeExtends", ()=>ae);
parcelHelpers.export(exports, "deepStringifyFunctions", ()=>co);
parcelHelpers.export(exports, "defaultDefine", ()=>In);
parcelHelpers.export(exports, "defineSetter", ()=>Wp);
parcelHelpers.export(exports, "destringifyGlobalScope", ()=>fo);
parcelHelpers.export(exports, "destroy", ()=>Us);
parcelHelpers.export(exports, "detectHeightOnInit", ()=>id);
parcelHelpers.export(exports, "detectInfiniteLoop", ()=>lu);
parcelHelpers.export(exports, "detectTag", ()=>wr);
parcelHelpers.export(exports, "devices", ()=>XS);
parcelHelpers.export(exports, "dispose", ()=>Cr);
parcelHelpers.export(exports, "encodeNewlines", ()=>zf);
parcelHelpers.export(exports, "error", ()=>ur);
parcelHelpers.export(exports, "excludeKeysFromObject", ()=>uu);
parcelHelpers.export(exports, "exec", ()=>X);
parcelHelpers.export(exports, "executeAttr", ()=>bR);
parcelHelpers.export(exports, "exetuteClassPerComponent", ()=>UO);
parcelHelpers.export(exports, "extendCachedRegistry", ()=>Mu);
parcelHelpers.export(exports, "extendStackRegistry", ()=>_o);
parcelHelpers.export(exports, "extractArrayExtend", ()=>ko);
parcelHelpers.export(exports, "extractConditionalAttrs", ()=>xR);
parcelHelpers.export(exports, "fetchLibraryData", ()=>Ra);
parcelHelpers.export(exports, "fibonacciNumberByIndex", ()=>cd);
parcelHelpers.export(exports, "filterArrays", ()=>Lf);
parcelHelpers.export(exports, "filterArraysFast", ()=>Mf);
parcelHelpers.export(exports, "filterAttributesByTagName", ()=>yR);
parcelHelpers.export(exports, "finalizeExtends", ()=>qi);
parcelHelpers.export(exports, "findClosestNumber", ()=>Oa);
parcelHelpers.export(exports, "findClosestNumberInFactory", ()=>kd);
parcelHelpers.export(exports, "findHeadingLetter", ()=>nh);
parcelHelpers.export(exports, "findHeadings", ()=>za);
parcelHelpers.export(exports, "findInheritedState", ()=>ua);
parcelHelpers.export(exports, "findKeyPosition", ()=>Bf);
parcelHelpers.export(exports, "flattenExtend", ()=>an);
parcelHelpers.export(exports, "font", ()=>$S);
parcelHelpers.export(exports, "fontFace", ()=>LS);
parcelHelpers.export(exports, "fontFamily", ()=>FS);
parcelHelpers.export(exports, "fontFamilyTypes", ()=>DS);
parcelHelpers.export(exports, "formatDate", ()=>od);
parcelHelpers.export(exports, "generateHash", ()=>Mi);
parcelHelpers.export(exports, "generateKey", ()=>po);
parcelHelpers.export(exports, "generateMetaTags", ()=>Sd);
parcelHelpers.export(exports, "generateSequence", ()=>Ft);
parcelHelpers.export(exports, "generateSequencePosition", ()=>u_);
parcelHelpers.export(exports, "generateSprite", ()=>hs);
parcelHelpers.export(exports, "generateSubSequence", ()=>Ba);
parcelHelpers.export(exports, "get", ()=>Bp);
parcelHelpers.export(exports, "getActiveConfig", ()=>E);
parcelHelpers.export(exports, "getActiveDocument", ()=>vh);
parcelHelpers.export(exports, "getActiveLang", ()=>Ks);
parcelHelpers.export(exports, "getCDNUrl", ()=>Zt);
parcelHelpers.export(exports, "getCacheSize", ()=>q_);
parcelHelpers.export(exports, "getCapitalCaseKeys", ()=>Uu);
parcelHelpers.export(exports, "getCdnProviderFromConfig", ()=>yn);
parcelHelpers.export(exports, "getChildStateInKey", ()=>fa);
parcelHelpers.export(exports, "getChildren", ()=>Vo);
parcelHelpers.export(exports, "getColor", ()=>tt);
parcelHelpers.export(exports, "getColorShade", ()=>Ud);
parcelHelpers.export(exports, "getContext", ()=>Ko);
parcelHelpers.export(exports, "getCookie", ()=>Tu);
parcelHelpers.export(exports, "getDB", ()=>Qo);
parcelHelpers.export(exports, "getDefaultOrFirstKey", ()=>_n);
parcelHelpers.export(exports, "getEmotionStylesheet", ()=>Dd);
parcelHelpers.export(exports, "getExtendsInElement", ()=>Vu);
parcelHelpers.export(exports, "getExtendsStack", ()=>xo);
parcelHelpers.export(exports, "getExtendsStackRegistry", ()=>ji);
parcelHelpers.export(exports, "getFnPrefixAndValue", ()=>Ge);
parcelHelpers.export(exports, "getFontFace", ()=>RS);
parcelHelpers.export(exports, "getFontFaceEach", ()=>wn);
parcelHelpers.export(exports, "getFontFaceEachString", ()=>Gd);
parcelHelpers.export(exports, "getFontFaceString", ()=>Ia);
parcelHelpers.export(exports, "getFontFamily", ()=>Za);
parcelHelpers.export(exports, "getFontFormat", ()=>Hd);
parcelHelpers.export(exports, "getFontSizeByKey", ()=>Qa);
parcelHelpers.export(exports, "getFrequencyInArray", ()=>Ef);
parcelHelpers.export(exports, "getHashedExtend", ()=>wo);
parcelHelpers.export(exports, "getImportMapScript", ()=>rd);
parcelHelpers.export(exports, "getInObjectByPath", ()=>cu);
parcelHelpers.export(exports, "getLanguages", ()=>$l);
parcelHelpers.export(exports, "getLocalStateLang", ()=>Nl);
parcelHelpers.export(exports, "getLocalStorage", ()=>Ru);
parcelHelpers.export(exports, "getMediaColor", ()=>bt);
parcelHelpers.export(exports, "getMediaTheme", ()=>Qt);
parcelHelpers.export(exports, "getNev", ()=>mu);
parcelHelpers.export(exports, "getObserver", ()=>Hr);
parcelHelpers.export(exports, "getPageMetadata", ()=>_d);
parcelHelpers.export(exports, "getParentStateInKey", ()=>la);
parcelHelpers.export(exports, "getPath", ()=>zo);
parcelHelpers.export(exports, "getQuery", ()=>ts);
parcelHelpers.export(exports, "getRef", ()=>zp);
parcelHelpers.export(exports, "getRgbTone", ()=>hr);
parcelHelpers.export(exports, "getRoot", ()=>Ho);
parcelHelpers.export(exports, "getRootContext", ()=>Go);
parcelHelpers.export(exports, "getRootData", ()=>qo);
parcelHelpers.export(exports, "getRootState", ()=>Wo);
parcelHelpers.export(exports, "getRootStateInKey", ()=>ca);
parcelHelpers.export(exports, "getSequenceValue", ()=>Va);
parcelHelpers.export(exports, "getSequenceValueBySymbols", ()=>rh);
parcelHelpers.export(exports, "getSequenceValuePropertyPair", ()=>we);
parcelHelpers.export(exports, "getShadow", ()=>nc);
parcelHelpers.export(exports, "getSignals", ()=>Sx);
parcelHelpers.export(exports, "getSpacingBasedOnRatio", ()=>fe);
parcelHelpers.export(exports, "getSpacingByKey", ()=>dt);
parcelHelpers.export(exports, "getSpreadChildren", ()=>Wu);
parcelHelpers.export(exports, "getSubratio", ()=>ja);
parcelHelpers.export(exports, "getSubratioDifference", ()=>Na);
parcelHelpers.export(exports, "getSystemGlobalTheme", ()=>Ut);
parcelHelpers.export(exports, "getTheme", ()=>Ga);
parcelHelpers.export(exports, "getTimingByKey", ()=>Vt);
parcelHelpers.export(exports, "getTimingFunction", ()=>te);
parcelHelpers.export(exports, "global", ()=>kf);
parcelHelpers.export(exports, "gradient", ()=>VS);
parcelHelpers.export(exports, "grid", ()=>r_);
parcelHelpers.export(exports, "hasFunction", ()=>en);
parcelHelpers.export(exports, "hasHandlerPlugin", ()=>rn);
parcelHelpers.export(exports, "hasOwnProperty", ()=>tu);
parcelHelpers.export(exports, "hexToRgb", ()=>kS);
parcelHelpers.export(exports, "hexToRgbArray", ()=>jd);
parcelHelpers.export(exports, "hexToRgba", ()=>CS);
parcelHelpers.export(exports, "hslToRgb", ()=>zd);
parcelHelpers.export(exports, "icons", ()=>WS);
parcelHelpers.export(exports, "inheritChildExtends", ()=>Ui);
parcelHelpers.export(exports, "inheritChildPropsExtends", ()=>zi);
parcelHelpers.export(exports, "inheritParentProps", ()=>Oo);
parcelHelpers.export(exports, "inheritRecursiveChildExtends", ()=>Wi);
parcelHelpers.export(exports, "init", ()=>Ae);
parcelHelpers.export(exports, "initPolyglot", ()=>Vy);
parcelHelpers.export(exports, "initProps", ()=>Ju);
parcelHelpers.export(exports, "injectGlobal", ()=>ct);
parcelHelpers.export(exports, "is", ()=>Ct);
parcelHelpers.export(exports, "isArray", ()=>T);
parcelHelpers.export(exports, "isBoolean", ()=>Ei);
parcelHelpers.export(exports, "isCSSVar", ()=>ot);
parcelHelpers.export(exports, "isContextComponent", ()=>Hu);
parcelHelpers.export(exports, "isCyclic", ()=>fu);
parcelHelpers.export(exports, "isDOMNode", ()=>kt);
parcelHelpers.export(exports, "isDate", ()=>Oi);
parcelHelpers.export(exports, "isDefined", ()=>vt);
parcelHelpers.export(exports, "isDevelopment", ()=>Be);
parcelHelpers.export(exports, "isEmpty", ()=>Ri);
parcelHelpers.export(exports, "isEmptyObject", ()=>eu);
parcelHelpers.export(exports, "isEqualDeep", ()=>Pi);
parcelHelpers.export(exports, "isFunction", ()=>C);
parcelHelpers.export(exports, "isGoogleFontsUrl", ()=>ls);
parcelHelpers.export(exports, "isHtmlElement", ()=>to);
parcelHelpers.export(exports, "isLocal", ()=>gu);
parcelHelpers.export(exports, "isMethod", ()=>Kp);
parcelHelpers.export(exports, "isMobile", ()=>Au);
parcelHelpers.export(exports, "isNode", ()=>he);
parcelHelpers.export(exports, "isNot", ()=>Cf);
parcelHelpers.export(exports, "isNotProduction", ()=>cr);
parcelHelpers.export(exports, "isNull", ()=>Ti);
parcelHelpers.export(exports, "isNumber", ()=>oe);
parcelHelpers.export(exports, "isObject", ()=>S);
parcelHelpers.export(exports, "isObjectLike", ()=>N);
parcelHelpers.export(exports, "isPhoto", ()=>fd);
parcelHelpers.export(exports, "isProduction", ()=>je);
parcelHelpers.export(exports, "isResolvedColor", ()=>xe);
parcelHelpers.export(exports, "isScalingUnit", ()=>qr);
parcelHelpers.export(exports, "isStaging", ()=>hu);
parcelHelpers.export(exports, "isState", ()=>ip);
parcelHelpers.export(exports, "isStore", ()=>mt);
parcelHelpers.export(exports, "isString", ()=>_);
parcelHelpers.export(exports, "isStringFunction", ()=>xu);
parcelHelpers.export(exports, "isSvgTag", ()=>vs);
parcelHelpers.export(exports, "isTest", ()=>$i);
parcelHelpers.export(exports, "isTesting", ()=>du);
parcelHelpers.export(exports, "isTracking", ()=>Sw);
parcelHelpers.export(exports, "isUndefined", ()=>ht);
parcelHelpers.export(exports, "isUniversallyReservedKey", ()=>Jp);
parcelHelpers.export(exports, "isValidHtmlTag", ()=>Fu);
parcelHelpers.export(exports, "isValidTag", ()=>_s);
parcelHelpers.export(exports, "isWasmLoaded", ()=>e0);
parcelHelpers.export(exports, "joinArrays", ()=>Xr);
parcelHelpers.export(exports, "jointStacks", ()=>ju);
parcelHelpers.export(exports, "keyframes", ()=>Ss);
parcelHelpers.export(exports, "keys", ()=>Aa);
parcelHelpers.export(exports, "loadCssFile", ()=>gd);
parcelHelpers.export(exports, "loadJavascript", ()=>md);
parcelHelpers.export(exports, "loadJavascriptFile", ()=>pd);
parcelHelpers.export(exports, "loadJavascriptFileEmbedSync", ()=>hd);
parcelHelpers.export(exports, "loadJavascriptFileSync", ()=>dd);
parcelHelpers.export(exports, "loadRemoteCSS", ()=>yd);
parcelHelpers.export(exports, "loadRemoteScript", ()=>bn);
parcelHelpers.export(exports, "loadTranslations", ()=>Dl);
parcelHelpers.export(exports, "loadWasm", ()=>t0);
parcelHelpers.export(exports, "log", ()=>Hp);
parcelHelpers.export(exports, "logGroupIf", ()=>vu);
parcelHelpers.export(exports, "logIf", ()=>ku);
parcelHelpers.export(exports, "lookdown", ()=>Mp);
parcelHelpers.export(exports, "lookdownAll", ()=>Np);
parcelHelpers.export(exports, "lookup", ()=>Lp);
parcelHelpers.export(exports, "lowercaseFirstLetter", ()=>sr);
parcelHelpers.export(exports, "makeObjectWithoutPrototype", ()=>ru);
parcelHelpers.export(exports, "map", ()=>Xf);
parcelHelpers.export(exports, "mapStringsWithContextComponents", ()=>vo);
parcelHelpers.export(exports, "matchesComponentNaming", ()=>ce);
parcelHelpers.export(exports, "media", ()=>MS);
parcelHelpers.export(exports, "memoize", ()=>bu);
parcelHelpers.export(exports, "merge", ()=>et);
parcelHelpers.export(exports, "mergeSharedLibraries", ()=>ns);
parcelHelpers.export(exports, "mixTwoColors", ()=>wS);
parcelHelpers.export(exports, "mixTwoRgb", ()=>AS);
parcelHelpers.export(exports, "mixTwoRgba", ()=>Wd);
parcelHelpers.export(exports, "nextElement", ()=>Xo);
parcelHelpers.export(exports, "normalizeLibraryKey", ()=>xn);
parcelHelpers.export(exports, "numToLetterMap", ()=>_e);
parcelHelpers.export(exports, "objectToString", ()=>lo);
parcelHelpers.export(exports, "objectizeStringProperty", ()=>Ao);
parcelHelpers.export(exports, "opacify", ()=>cs);
parcelHelpers.export(exports, "overwrite", ()=>uo);
parcelHelpers.export(exports, "overwriteDeep", ()=>At);
parcelHelpers.export(exports, "overwriteShallow", ()=>ar);
parcelHelpers.export(exports, "overwriteState", ()=>lp);
parcelHelpers.export(exports, "parse", ()=>Ea);
parcelHelpers.export(exports, "parseColorToken", ()=>He);
parcelHelpers.export(exports, "parseDeep", ()=>jo);
parcelHelpers.export(exports, "pickupElementFromProps", ()=>Xi);
parcelHelpers.export(exports, "pickupPropsFromElement", ()=>Yi);
parcelHelpers.export(exports, "polyglotFunctions", ()=>Ys);
parcelHelpers.export(exports, "polyglotPlugin", ()=>jl);
parcelHelpers.export(exports, "popConfig", ()=>at);
parcelHelpers.export(exports, "previousElement", ()=>Zo);
parcelHelpers.export(exports, "propExists", ()=>Zu);
parcelHelpers.export(exports, "propertizeElement", ()=>Zi);
parcelHelpers.export(exports, "propertizeUpdate", ()=>Xu);
parcelHelpers.export(exports, "pushConfig", ()=>pt);
parcelHelpers.export(exports, "registerEvent", ()=>As);
parcelHelpers.export(exports, "reinit", ()=>ly);
parcelHelpers.export(exports, "remove", ()=>Os);
parcelHelpers.export(exports, "removeChars", ()=>Pd);
parcelHelpers.export(exports, "removeCookie", ()=>Ou);
parcelHelpers.export(exports, "removeDelegatedEvent", ()=>kc);
parcelHelpers.export(exports, "removeDuplicateProps", ()=>Po);
parcelHelpers.export(exports, "removeDuplicatesInArray", ()=>Zr);
parcelHelpers.export(exports, "removeFromArray", ()=>Tf);
parcelHelpers.export(exports, "removeFromObject", ()=>ou);
parcelHelpers.export(exports, "removeNestedKeyByPath", ()=>iu);
parcelHelpers.export(exports, "removeValueFromArray", ()=>no);
parcelHelpers.export(exports, "removeValueFromArrayAll", ()=>If);
parcelHelpers.export(exports, "reorderArrayByValues", ()=>Ff);
parcelHelpers.export(exports, "replaceLiteralsWithObjectFields", ()=>or);
parcelHelpers.export(exports, "replaceOctalEscapeSequences", ()=>Vf);
parcelHelpers.export(exports, "resolveAsset", ()=>Tt);
parcelHelpers.export(exports, "resolveColorsInGradient", ()=>dc);
parcelHelpers.export(exports, "resolveFileSource", ()=>Jh);
parcelHelpers.export(exports, "resolveFileUrl", ()=>Jt);
parcelHelpers.export(exports, "resolveHandler", ()=>nn);
parcelHelpers.export(exports, "resolvePropValue", ()=>Ze);
parcelHelpers.export(exports, "resolveSharedLibraries", ()=>Ed);
parcelHelpers.export(exports, "returnSubThemeOrDefault", ()=>OS);
parcelHelpers.export(exports, "returnValueAsText", ()=>ea);
parcelHelpers.export(exports, "rgbArrayToHex", ()=>Bd);
parcelHelpers.export(exports, "rgbToHSL", ()=>Vd);
parcelHelpers.export(exports, "rgbToHex", ()=>vS);
parcelHelpers.export(exports, "runPluginHook", ()=>Kt);
parcelHelpers.export(exports, "runThroughMedia", ()=>fh);
parcelHelpers.export(exports, "scratchDefaultConfig", ()=>us);
parcelHelpers.export(exports, "scratchSystem", ()=>bs);
parcelHelpers.export(exports, "scratchUtils", ()=>yr);
parcelHelpers.export(exports, "self", ()=>vf);
parcelHelpers.export(exports, "semanticIcons", ()=>HS);
parcelHelpers.export(exports, "sequence", ()=>qe);
parcelHelpers.export(exports, "set", ()=>Cn);
parcelHelpers.export(exports, "setActiveConfig", ()=>Zd);
parcelHelpers.export(exports, "setActiveDocument", ()=>V_);
parcelHelpers.export(exports, "setActiveRootState", ()=>Uo);
parcelHelpers.export(exports, "setClass", ()=>kI);
parcelHelpers.export(exports, "setClassname", ()=>KO);
parcelHelpers.export(exports, "setColor", ()=>br);
parcelHelpers.export(exports, "setCookie", ()=>Eu);
parcelHelpers.export(exports, "setCssEngineHook", ()=>El);
parcelHelpers.export(exports, "setCustomFont", ()=>Pa);
parcelHelpers.export(exports, "setCustomFontMedia", ()=>gr);
parcelHelpers.export(exports, "setEach", ()=>L_);
parcelHelpers.export(exports, "setFont", ()=>Xa);
parcelHelpers.export(exports, "setFontFamily", ()=>ms);
parcelHelpers.export(exports, "setFontImport", ()=>fs);
parcelHelpers.export(exports, "setGradient", ()=>xr);
parcelHelpers.export(exports, "setHashedExtend", ()=>Ni);
parcelHelpers.export(exports, "setInCustomFontMedia", ()=>qd);
parcelHelpers.export(exports, "setInObjectByPath", ()=>au);
parcelHelpers.export(exports, "setLang", ()=>Ll);
parcelHelpers.export(exports, "setLocalStorage", ()=>Pu);
parcelHelpers.export(exports, "setMediaTheme", ()=>Ya);
parcelHelpers.export(exports, "setNodeStyles", ()=>Ca);
parcelHelpers.export(exports, "setObserver", ()=>gx);
parcelHelpers.export(exports, "setProps", ()=>Vp);
parcelHelpers.export(exports, "setPropsPrototype", ()=>Ro);
parcelHelpers.export(exports, "setSVG", ()=>ys);
parcelHelpers.export(exports, "setScalingVar", ()=>Ma);
parcelHelpers.export(exports, "setShadow", ()=>Sr);
parcelHelpers.export(exports, "setSubScalingVar", ()=>th);
parcelHelpers.export(exports, "setSvgIcon", ()=>lc);
parcelHelpers.export(exports, "setTheme", ()=>Ka);
parcelHelpers.export(exports, "setValue", ()=>D_);
parcelHelpers.export(exports, "setVariables", ()=>p_);
parcelHelpers.export(exports, "setWasmEngine", ()=>bc);
parcelHelpers.export(exports, "shadow", ()=>US);
parcelHelpers.export(exports, "sizes", ()=>i_);
parcelHelpers.export(exports, "spacing", ()=>jS);
parcelHelpers.export(exports, "splitSpacedValue", ()=>rc);
parcelHelpers.export(exports, "splitTopLevelCommas", ()=>dr);
parcelHelpers.export(exports, "splitTransition", ()=>bh);
parcelHelpers.export(exports, "spotByPath", ()=>Bo);
parcelHelpers.export(exports, "srcsetFor", ()=>Sn);
parcelHelpers.export(exports, "stringIncludesAny", ()=>so);
parcelHelpers.export(exports, "stringToObject", ()=>Qf);
parcelHelpers.export(exports, "svg", ()=>JS);
parcelHelpers.export(exports, "svgData", ()=>QS);
parcelHelpers.export(exports, "swapItemsInArray", ()=>Of);
parcelHelpers.export(exports, "syncProps", ()=>Io);
parcelHelpers.export(exports, "templates", ()=>t_);
parcelHelpers.export(exports, "theme", ()=>zS);
parcelHelpers.export(exports, "timing", ()=>GS);
parcelHelpers.export(exports, "toCamel", ()=>Fa);
parcelHelpers.export(exports, "toCamelCase", ()=>os);
parcelHelpers.export(exports, "toDashCase", ()=>ss);
parcelHelpers.export(exports, "toDescriptionCase", ()=>$d);
parcelHelpers.export(exports, "toTitleCase", ()=>Id);
parcelHelpers.export(exports, "toggleFullscreen", ()=>td);
parcelHelpers.export(exports, "transformBackgroundImage", ()=>mh);
parcelHelpers.export(exports, "transformBorder", ()=>ke);
parcelHelpers.export(exports, "transformBorderRadius", ()=>gc);
parcelHelpers.export(exports, "transformBoxShadow", ()=>pc);
parcelHelpers.export(exports, "transformClassname", ()=>pw);
parcelHelpers.export(exports, "transformDuration", ()=>hc);
parcelHelpers.export(exports, "transformShadow", ()=>gh);
parcelHelpers.export(exports, "transformSize", ()=>st);
parcelHelpers.export(exports, "transformSizeRatio", ()=>j);
parcelHelpers.export(exports, "transformTextStroke", ()=>hh);
parcelHelpers.export(exports, "transformTransition", ()=>$_);
parcelHelpers.export(exports, "transformersByPrefix", ()=>Hh);
parcelHelpers.export(exports, "transfromGap", ()=>yh);
parcelHelpers.export(exports, "translate", ()=>Fl);
parcelHelpers.export(exports, "triggerEventOn", ()=>Ve);
parcelHelpers.export(exports, "triggerEventOnUpdate", ()=>hp);
parcelHelpers.export(exports, "trimStringFromSymbols", ()=>jf);
parcelHelpers.export(exports, "typography", ()=>$a);
parcelHelpers.export(exports, "unit", ()=>PS);
parcelHelpers.export(exports, "unstackArrayOfObjects", ()=>ro);
parcelHelpers.export(exports, "update", ()=>Ts);
parcelHelpers.export(exports, "updateProps", ()=>Qu);
parcelHelpers.export(exports, "updateVars", ()=>wI);
parcelHelpers.export(exports, "upsertTranslation", ()=>Ml);
parcelHelpers.export(exports, "useCssInProps", ()=>Lt);
parcelHelpers.export(exports, "useHostState", ()=>xw);
parcelHelpers.export(exports, "usePropsAsCSS", ()=>fw);
parcelHelpers.export(exports, "useSelectorsAsCSS", ()=>uw);
parcelHelpers.export(exports, "variables", ()=>Jo);
parcelHelpers.export(exports, "vars", ()=>s_);
parcelHelpers.export(exports, "verbose", ()=>mn);
parcelHelpers.export(exports, "warn", ()=>Yo);
parcelHelpers.export(exports, "window", ()=>k);
var cx = Object.create;
var bi = Object.defineProperty;
var lx = Object.getOwnPropertyDescriptor;
var fx = Object.getOwnPropertyNames;
var ux = Object.getPrototypeOf, px = Object.prototype.hasOwnProperty;
var $ = (t, e)=>()=>(t && (e = t(t = 0)), e);
var xi = (t, e)=>()=>(e || t((e = {
            exports: {}
        }).exports, e), e.exports), F = (t, e)=>{
    for(var r in e)bi(t, r, {
        get: e[r],
        enumerable: !0
    });
}, dx = (t, e, r, n)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let o of fx(e))!px.call(t, o) && o !== r && bi(t, o, {
        get: ()=>e[o],
        enumerable: !(n = lx(e, o)) || n.enumerable
    });
    return t;
};
var hx = (t, e, r)=>(r = t != null ? cx(ux(t)) : {}, dx(e || !t || !t.__esModule ? bi(r, "default", {
        value: t,
        enumerable: !0
    }) : r, t));
var kf, vf, k, Y, Kr = $(()=>{
    "use strict";
    kf = globalThis, vf = globalThis, k = globalThis, Y = k.document;
});
var he, to, kt, Yr = $(()=>{
    "use strict";
    Kr();
    he = (t)=>(typeof Node == "object" ? t instanceof k.Node : t && typeof t == "object" && typeof t.nodeType == "number" && typeof t.nodeName == "string") || !1, to = (t)=>(typeof HTMLElement == "object" ? t instanceof k.HTMLElement : t && typeof t == "object" && t !== null && t.nodeType === 1 && typeof t.nodeName == "string") || !1, kt = (t)=>typeof k < "u" && (k.Node && t instanceof k.Node || k.Window && t instanceof k.Window || t === k || t === document);
});
var S, _, oe, C, Ei, Ti, T, Oi, N, vt, ht, eo, Ct, Cf, ut = $(()=>{
    "use strict";
    Yr();
    S = (t)=>t === null ? !1 : typeof t == "object" && t.constructor === Object, _ = (t)=>typeof t == "string", oe = (t)=>typeof t == "number", C = (t)=>typeof t == "function", Ei = (t)=>t === !0 || t === !1, Ti = (t)=>t === null, T = (t)=>Array.isArray(t), Oi = (t)=>t instanceof Date, N = (t)=>t === null ? !1 : typeof t == "object", vt = (t)=>t !== void 0, ht = (t)=>t === void 0, eo = {
        boolean: Ei,
        array: T,
        object: S,
        string: _,
        date: Oi,
        number: oe,
        null: Ti,
        function: C,
        objectLike: N,
        node: he,
        htmlElement: to,
        defined: vt
    }, Ct = (t)=>(...e)=>e.some((r)=>eo[r](t)), Cf = (t)=>(...e)=>!e.some((r)=>eo[r](t));
});
var Af, Ef, Tf, Of, Xr, ro, Rf, Pf, no, If, $f, Ff, Df, Lf, Mf, Nf, Zr, oo, nr = $(()=>{
    "use strict";
    se();
    ut();
    Af = (t, e)=>e.every((r)=>t.includes(r)), Ef = (t, e)=>{
        let r = 0;
        for(let n = 0; n < t.length; n++)t[n] === e && r++;
        return r;
    }, Tf = (t, e)=>{
        if (_(e) && (e = parseInt(e)), oe(e)) {
            if (e < 0 || e >= t.length || isNaN(e)) throw new Error("Invalid index");
            t.splice(e, 1);
        } else throw new Error("Invalid index");
        return t;
    }, Of = (t, e, r)=>{
        e < 0 || r < 0 || e >= t.length || r >= t.length || ([t[e], t[r]] = [
            t[r],
            t[e]
        ]);
    }, Xr = (...t)=>[].concat(...t), ro = (t, e = [])=>t.reduce((r, n)=>q(r, Q(n, {
                exclude: e
            }), e), {}), Rf = (t, e)=>{
        let r = t.indexOf(e);
        return r !== -1 ? t.slice(0, r) : t;
    }, Pf = (t, e)=>{
        if (!T(t)) return;
        let r = t.indexOf(e);
        return r !== -1 ? t.slice(r + 1) : t;
    }, no = (t, e)=>{
        let r = t.indexOf(e);
        if (r > -1) {
            let n = [
                ...t
            ];
            return n.splice(r, 1), n;
        }
        return t;
    }, If = (t, e)=>t.filter((r)=>r !== e), $f = (t, e)=>{
        let r = [];
        for(let n = 0; n < t.length; n++)r.push(t[n]), n < t.length - 1 && r.push(e);
        return r;
    }, Ff = (t, e, r)=>{
        let n = [
            ...t
        ], o = n.indexOf(e), s = n.indexOf(r);
        if (o !== -1 && s !== -1) {
            let i = n.splice(o, 1)[0], a = s < o ? s : s + 1;
            n.splice(a, 0, i);
        }
        return n;
    }, Df = (t, e)=>{
        if (t.length !== e.length) return !1;
        for(let r = 0; r < t.length; r++)if (t[r] !== e[r]) return !1;
        return !0;
    }, Lf = (t, e)=>t.filter((r)=>!e.includes(r)), Mf = (t, e)=>{
        let r = new Set(e);
        return t.filter((n)=>!r.has(n));
    }, Nf = (t, e)=>{
        if (!t) return 0;
        let r = 0;
        for(let n = 0; n < e.length; n++)t.includes(e[n]) && r++;
        return r;
    }, Zr = (t)=>T(t) ? [
            ...new Set(t)
        ] : t, oo = (t, e)=>{
        for(let r in e)Object.defineProperty(t, r, {
            value: e[r],
            enumerable: !1,
            configurable: !0,
            writable: !0
        });
    };
});
function or(t, e, r = {}) {
    let { bracketsLength: n = 2 } = r, o = n === 3 ? "{{{" : "{{";
    if (!t.includes(o)) return t;
    let s = _x[n], i = e || this.state || {}, a = this;
    return t.replace(s, (c, l, f, p)=>{
        let u = f.trim();
        if (p) {
            let d = a?.context, h = d?.functions?.[p] || d?.utils?.[p] || d?.methods?.[p] || d?.snippets?.[p] || a?.[p];
            if (h && typeof h == "function") try {
                return String(h.call(a, u) ?? "");
            } catch  {
                return "";
            }
            return "";
        }
        if (l) {
            let d = (l.match(/\.\.\//g) || []).length, h = i;
            for(let m = 0; m < d; m++){
                if (!h || !h.parent) return "";
                h = h.parent;
            }
            if (u === "parent") return String(h.value ?? "");
            let g = Jr(h, u);
            return String(g ?? "");
        } else {
            let d = Jr(i, u);
            if (d != null) return String(d);
            let h = a?.context?.polyglot;
            if (h?.translations) {
                let g = i?.root?.lang || i?.lang || a?.context?.state?.lang || h.defaultLang || "en", m = h.translations[g];
                if (m) {
                    let b = Jr(m, u);
                    if (b != null && typeof b != "object") return String(b);
                    for(let w in m){
                        let x = m[w];
                        if (x && typeof x == "object" && !Array.isArray(x)) {
                            let v = Jr(x, u);
                            if (v != null && typeof v != "object") return String(v);
                        }
                    }
                }
                let y = Jr(h.translations, u);
                if (y != null && typeof y != "object") return String(y);
            }
            return "";
        }
    });
}
var so, jf, _x, Jr, sr, Bf, wx, Vf, zf, Uf, kx, Wf, Hf, Qr = $(()=>{
    "use strict";
    so = (t, e)=>{
        for (let r of e)if (t.includes(r)) return !0;
        return !1;
    }, jf = (t, e)=>{
        let r = new RegExp(`[${e.join("\\")}]`, "g");
        return t.replace(r, "");
    }, _x = {
        2: /{{\s*((?:\.\.\/)*)([\w\d.]+)\s*(?:\|\s*([\w\d.]+))?\s*}}/g,
        3: /{{{(\s*(?:\.\.\/)*)([\w\d.]+)\s*(?:\|\s*([\w\d.]+))?\s*}}}/g
    }, Jr = (t, e)=>e.split(".").reduce((r, n)=>r?.[n], t);
    sr = (t)=>`${t.charAt(0).toLowerCase()}${t.slice(1)}`, Bf = (t, e)=>{
        let r = t.split(`
`), n = -1, o = -1, s = -1, i = -1, a = new RegExp(`\\b${e}\\b\\s*:\\s*`), c = 0, l = !1;
        for(let f = 0; f < r.length; f++)if (a.test(r[f]) && !l) {
            if (l = !0, n = f + 1, s = r[f].indexOf(e) + 1, r[f].includes("{}")) {
                o = n, i = r[f].indexOf("{}") + 3;
                break;
            }
            let p = r[f].slice(s + e.length);
            if (p.includes("{") || p.includes("[")) c = 1;
            else {
                o = f + 1, i = r[f].length + 1;
                break;
            }
        } else if (l && (c += (r[f].match(/{/g) || []).length, c += (r[f].match(/\[/g) || []).length, c -= (r[f].match(/}/g) || []).length, c -= (r[f].match(/]/g) || []).length, c === 0)) {
            o = f + 1, i = r[f].lastIndexOf("}") !== -1 ? r[f].lastIndexOf("}") + 2 : r[f].length + 1;
            break;
        }
        return {
            startColumn: s,
            endColumn: i,
            startLineNumber: n,
            endLineNumber: o
        };
    }, wx = /\\([0-7]{1,3})/g, Vf = (t)=>t.replace(wx, (e, r)=>String.fromCharCode(parseInt(r, 8))), zf = (t)=>t.replace(/\n/g, "/////n").replace(/`/g, "/////tilde").replace(/\$/g, "/////dlrsgn"), Uf = (t)=>t.replace(/\/\/\/\/\/n/g, `
`).replace(/\/\/\/\/\/tilde/g, "`").replace(/\/\/\/\/\/dlrsgn/g, "$"), kx = /[^a-zA-Z0-9\s]/g, Wf = (t)=>t.replace(kx, (e)=>"%" + e.charCodeAt(0).toString(16).toUpperCase()), Hf = (t)=>t.replace(/%[0-9A-Fa-f]{2}/g, (e)=>String.fromCharCode(parseInt(e.slice(1), 16)));
});
var De, io, qf, Le, Me, tn, ao, Gf, ir = $(()=>{
    "use strict";
    De = new Set([
        "attr",
        "style",
        "text",
        "html",
        "content",
        "data",
        "classlist",
        "state",
        "scope",
        "root",
        "deps",
        "extend",
        "extends",
        "$router",
        "routes",
        "children",
        "childExtend",
        "childExtends",
        "childExtendRecursive",
        "childExtendsRecursive",
        "props",
        "if",
        "define",
        "__name",
        "__ref",
        "__hash",
        "__text",
        "key",
        "tag",
        "query",
        "parent",
        "node",
        "variables",
        "on",
        "fetch",
        "component",
        "context",
        "preventContentUpdate",
        "preventContentRecreate"
    ]), io = new Set([
        "attr",
        "style",
        "text",
        "html",
        "content",
        "data",
        "class",
        "state",
        "scope",
        "children",
        "props",
        "if",
        "key",
        "tag",
        "query",
        "on",
        "context"
    ]), qf = [
        "ref",
        "parent",
        "__element",
        "__depends",
        "__ref",
        "__children",
        "root"
    ], Le = new Set([
        "update",
        "parse",
        "clean",
        "create",
        "destroy",
        "add",
        "toggle",
        "remove",
        "apply",
        "set",
        "reset",
        "replace",
        "quietReplace",
        "quietUpdate",
        "applyReplace",
        "applyFunction",
        "keys",
        "values",
        "ref",
        "rootUpdate",
        "parentUpdate",
        "parent",
        "__element",
        "__depends",
        "__ref",
        "__children",
        "root",
        "setByPath",
        "setPathCollection",
        "removeByPath",
        "removePathCollection",
        "getByPath"
    ]), Me = new Set([
        "update",
        "__element"
    ]), tn = new Set([
        "set",
        "reset",
        "update",
        "remove",
        "updateContent",
        "removeContent",
        "lookup",
        "lookdown",
        "lookdownAll",
        "getRef",
        "getPath",
        "setNodeStyles",
        "spotByPath",
        "keys",
        "parse",
        "setProps",
        "parseDeep",
        "variables",
        "if",
        "log",
        "verbose",
        "warn",
        "error",
        "call",
        "nextElement",
        "previousElement",
        "getRootState",
        "getRoot",
        "getRootData",
        "getRootContext",
        "getContext",
        "getQuery",
        "getDB",
        "getChildren",
        "preventContentUpdate",
        "preventContentRecreate"
    ]), ao = new Set([
        "node",
        "context",
        "extends",
        "__element",
        "__ref",
        ...tn,
        ...Le,
        ...Me
    ]), Gf = new Set([
        "init",
        "beforeClassAssign",
        "render",
        "renderRouter",
        "attachNode",
        "stateInit",
        "stateCreated",
        "beforeStateUpdate",
        "stateUpdate",
        "beforeUpdate",
        "done",
        "create",
        "complete",
        "frame",
        "update",
        "fetchError",
        "fetchComplete"
    ]);
});
var Kf, Ne, X, Xf, et, q, Zf, Jf, Q, co, vx, lo, Cx, Ax, Ex, en, Tx, Ox, Yf, ie, Rx, Px, Ix, fo, Qf, tu, Ri, eu, ru, uo, ar, At, Pi, $x, nu, ou, Ii, su, iu, au, cu, lu, fu, uu, se = $(()=>{
    "use strict";
    Kr();
    ut();
    nr();
    Qr();
    Yr();
    ir();
    Kf = "production", Ne = (t)=>t.charCodeAt(0) === 95 && t.charCodeAt(1) === 95, X = (t, e, r, n)=>{
        if (C(t)) return e ? typeof t.call != "function" ? t : t.call(e, e, r || e.state, n || e.context) : void 0;
        if (t != null && e?.context?.plugins && (T(t) || S(t) && !kt(t))) {
            let o = e.context.plugins;
            for (let s of o)if (s.resolveHandler) {
                let i = s.resolveHandler(t, e);
                if (typeof i == "function") return X(i, e, r, n);
            }
        }
        return t;
    }, Xf = (t, e, r)=>{
        for(let n in e)t[n] = X(e[n], r);
    }, et = (t, e, r = [])=>{
        let n = r instanceof Set;
        for(let o in e)Object.prototype.hasOwnProperty.call(e, o) && (Ne(o) || (n ? r.has(o) : r.includes(o)) || t[o] === void 0 && (t[o] = e[o]));
        return t;
    }, q = (t, e, r = ao)=>Zf(t, e, r, null), Zf = (t, e, r, n)=>{
        if (t === e) return t;
        if (n) {
            for(let s = 0; s < n.length; s += 2)if (n[s] === t && n[s + 1] === e) return t;
        }
        let o = r instanceof Set;
        for(let s in e){
            if (!Object.prototype.hasOwnProperty.call(e, s) || Ne(s) || s === "constructor" || s === "prototype" || (o ? r.has(s) : r.includes(s))) continue;
            let i = t[s], a = e[s];
            if (N(i) && N(a)) {
                let c = n || [];
                c.push(t, e), Zf(i, a, r, c), c.length -= 2;
            } else i === void 0 && (t[s] = a);
        }
        return t;
    }, Jf = (t, e = [])=>{
        let r = e instanceof Set, n = {};
        for(let o in t)Object.prototype.hasOwnProperty.call(t, o) && (Ne(o) || (r ? e.has(o) : e.includes(o)) || (n[o] = t[o]));
        return n;
    }, Q = (t, e = {})=>{
        let { exclude: r = [], cleanUndefined: n = !1, cleanNull: o = !1, visited: s = new WeakMap, handleExtends: i = !1 } = e;
        if (!N(t) || kt(t)) return t;
        if (s.has(t)) return s.get(t);
        let a = r instanceof Set ? r : r.length > 3 ? new Set(r) : null, c = (p)=>a ? a.has(p) : r.includes(p), l = T(t) ? [] : {};
        s.set(t, l);
        let f = [
            [
                t,
                l
            ]
        ];
        for(; f.length;){
            let [p, u] = f.pop();
            for(let d in p){
                if (!Object.prototype.hasOwnProperty.call(p, d) || Ne(d) || d === "__proto__" || c(d)) continue;
                let h = p[d];
                if (!(n && h === void 0) && !(o && h === null)) {
                    if (kt(h)) {
                        u[d] = h;
                        continue;
                    }
                    if (i && d === "extends" && T(h)) {
                        u[d] = ro(h, r);
                        continue;
                    }
                    if (C(h)) {
                        u[d] = h;
                        continue;
                    }
                    if (N(h)) {
                        if (s.has(h)) u[d] = s.get(h);
                        else {
                            let g = T(h) ? [] : {};
                            s.set(h, g), u[d] = g, f.push([
                                h,
                                g
                            ]);
                        }
                    } else u[d] = h;
                }
            }
        }
        return l;
    }, co = (t, e = {})=>{
        (t.node || t.__ref || t.parent || t.__element || t.parse) && ((t.__element || t.parent?.__element).warn("Trying to clone element or state at", t), t = t.parse?.());
        for(let r in t){
            let n = t[r];
            if (C(n)) e[r] = n.toString();
            else if (S(n)) e[r] = {}, co(n, e[r]);
            else if (T(n)) {
                let o = e[r] = [];
                for(let s = 0; s < n.length; s++){
                    let i = n[s];
                    S(i) ? (o[s] = {}, co(i, o[s])) : C(i) ? o[s] = i.toString() : o[s] = i;
                }
            } else e[r] = n;
        }
        return e;
    }, vx = new Set([
        "&",
        "*",
        "-",
        ":",
        "%",
        "{",
        "}",
        ">",
        "<",
        "@",
        ".",
        "/",
        "!",
        " "
    ]), lo = (t = {}, e = 0)=>{
        if (t === null || typeof t != "object") return String(t);
        let r = !1;
        for(let s in t){
            r = !0;
            break;
        }
        if (!r) return "{}";
        let n = "  ".repeat(e), o = `{
`;
        for(let s in t){
            if (!Object.prototype.hasOwnProperty.call(t, s)) continue;
            let i = t[s], a = !1;
            for(let l = 0; l < s.length; l++)if (vx.has(s[l])) {
                a = !0;
                break;
            }
            let c = a ? `'${s}'` : s;
            if (o += `${n}  ${c}: `, T(i)) {
                o += `[
`;
                for (let l of i)N(l) && l !== null ? o += `${n}    ${lo(l, e + 2)},
` : _(l) ? o += `${n}    '${l}',
` : o += `${n}    ${l},
`;
                o += `${n}  ]`;
            } else N(i) ? o += lo(i, e + 1) : _(i) ? o += so(i, [
                `
`,
                "'"
            ]) ? `\`${i}\`` : `'${i}'` : o += i;
            o += `,
`;
        }
        return o += `${n}}`, o;
    }, Cx = [
        /^\(\s*\{[^}]*\}\s*\)\s*=>/,
        /^(\([^)]*\)|[^=]*)\s*=>/,
        /^function[\s(]/,
        /^async\s+/,
        /^\(\s*function/,
        /^[a-zA-Z_$][a-zA-Z0-9_$]*\s*=>/
    ], Ax = /^["[{]/, Ex = /^(export|import)\s/, en = (t)=>{
        if (!t) return !1;
        let e = t.trim().replace(/\n\s*/g, " ").trim();
        if (e === "" || e === "{}" || e === "[]" || Ex.test(e) || !Cx.some((s)=>s.test(e))) return !1;
        let n = e.charCodeAt(0), o = e.includes("=>");
        return !(n === 123 && !o || n === 91 || Ax.test(e) && !o);
    }, Tx = (t)=>(0, eval)(t), Ox = (t, e)=>{
        let r = /^(\s*(?:async\s+)?function\s*[\w$]*\s*\([^)]*\)\s*)\{/.exec(t);
        if (!r) return null;
        let n = r[0].length, o = [], s = n, i = 1, a = null, c = t.length, l = new RegExp("^(?:const|let|var)\\s+" + e + "\\b");
        for(; s < c && i > 0;){
            let p = t[s];
            if (p === "/" && t[s + 1] === "/") {
                let u = t.indexOf(`
`, s);
                s = u === -1 ? c : u;
                continue;
            }
            if (p === "/" && t[s + 1] === "*") {
                let u = t.indexOf("*/", s + 2);
                s = u === -1 ? c : u + 2;
                continue;
            }
            if (p === '"' || p === "'" || p === "`") {
                let u = p;
                for(s++; s < c;){
                    if (t[s] === "\\") {
                        s += 2;
                        continue;
                    }
                    if (t[s] === u) {
                        s++;
                        break;
                    }
                    if (u === "`" && t[s] === "$" && t[s + 1] === "{") {
                        s += 2;
                        let d = 1;
                        for(; s < c && d > 0;)t[s] === "{" ? d++ : t[s] === "}" && d--, s++;
                        continue;
                    }
                    s++;
                }
                continue;
            }
            if (p === "{") {
                i++, s++;
                continue;
            }
            if (p === "}") {
                i--, s++;
                continue;
            }
            if (i === 1 && l.test(t.slice(s))) {
                let u = s, d = 0, h = s;
                for(; h < c;){
                    let g = t[h];
                    if (g === '"' || g === "'" || g === "`") {
                        let m = g;
                        for(h++; h < c;){
                            if (t[h] === "\\") {
                                h += 2;
                                continue;
                            }
                            if (t[h] === m) {
                                h++;
                                break;
                            }
                            h++;
                        }
                        continue;
                    }
                    if (g === "(" || g === "[" || g === "{") {
                        d++, h++;
                        continue;
                    }
                    if (g === ")" || g === "]" || g === "}") {
                        if (d === 0) break;
                        d--, h++;
                        continue;
                    }
                    if (d === 0 && (g === ";" || g === `
`)) {
                        h++;
                        break;
                    }
                    h++;
                }
                o.push([
                    u,
                    h
                ]), s = h;
                continue;
            }
            s++;
        }
        if (!o.length) return null;
        let f = t;
        for(let p = o.length - 1; p >= 0; p--)f = f.slice(0, o[p][0]) + f.slice(o[p][1]);
        return f;
    }, Yf = (t, e, r)=>{
        try {
            return r.window.eval(`(${t})`);
        } catch (n) {
            let o = n && n.message ? n.message : String(n), s = /await is only valid in async/.test(o), i = /Identifier '([^']+)' has already been declared/.exec(o), a = null;
            if (s) {
                let c = String(t).trim();
                if (/^function[\s(]/.test(c)) try {
                    a = r.window.eval("(async " + c + ")");
                } catch  {}
            } else if (i) {
                let c = String(t), l = i[1];
                for(let f = 0; f < 5; f++){
                    let p = Ox(c, l);
                    if (!p || p === c) break;
                    c = p;
                    try {
                        a = r.window.eval("(" + c + ")");
                        break;
                    } catch (u) {
                        let d = /Identifier '([^']+)' has already been declared/.exec(u && u.message || String(u));
                        if (!d || d[1] !== l) break;
                    }
                }
            }
            return a || (typeof console < "u" && console.warn && console.warn(`[smbls] deepDestringifyFunctions: eval failed on ${e} \u2014 value will be left as a string. Reason: ` + o + `.
First 200 chars of source: ` + String(t).slice(0, 200)), t);
        }
    }, ie = (t, e = {}, r = {
        window: {
            eval: Tx
        }
    })=>{
        if (!t || typeof t != "object") return e;
        let n = [
            [
                t,
                e
            ]
        ];
        for(; n.length;){
            let [o, s] = n.pop();
            for(let i in o){
                if (!Object.prototype.hasOwnProperty.call(o, i)) continue;
                let a = o[i];
                if (_(a)) en(a) ? s[i] = Yf(a, `"${i}"`, r) : s[i] = a;
                else if (T(a)) {
                    let c = s[i] = [];
                    for(let l = 0; l < a.length; l++){
                        let f = a[l];
                        if (_(f)) c.push(en(f) ? Yf(f, `array index ${l} (prop "${i}")`, r) : f);
                        else if (S(f)) {
                            let p = {};
                            c.push(p), n.push([
                                f,
                                p
                            ]);
                        } else c.push(f);
                    }
                } else if (S(a)) {
                    let c = s[i] && typeof s[i] == "object" && !T(s[i]) ? s[i] : s[i] = {};
                    n.push([
                        a,
                        c
                    ]);
                } else s[i] = a;
            }
        }
        return e;
    }, Rx = "Set", Px = "Map", Ix = (t)=>!t || typeof t != "object" ? t : t.__type === Rx && Array.isArray(t.values) ? new Set(t.values) : t.__type === Px && Array.isArray(t.entries) ? new Map(t.entries) : t, fo = (t)=>{
        if (!t || typeof t != "object") return t;
        let e = {}, r = [];
        for (let n of Object.keys(t)){
            let o = t[n];
            _(o) && en(o) ? r.push([
                n,
                o
            ]) : e[n] = Ix(o);
        }
        for (let [n, o] of r)try {
            let s = Object.keys(e).map((i)=>`var ${i} = __gs__[${JSON.stringify(i)}];`).join(`
`);
            e[n] = k.eval(`(function(__gs__) { ${s}
 return (${o}); })`)(e);
        } catch  {
            try {
                e[n] = k.eval(`(${o})`);
            } catch  {
                e[n] = o;
            }
        }
        return e;
    }, Qf = (t, e = {
        verbose: !0
    })=>{
        try {
            return t ? k.eval("(" + t + ")") : {};
        } catch (r) {
            e.verbose && console.warn(r);
        }
    }, tu = (t, ...e)=>Object.prototype.hasOwnProperty.call(t, ...e), Ri = (t)=>{
        for(let e in t)return !1;
        return !0;
    }, eu = (t)=>S(t) && Ri(t), ru = ()=>Object.create(null), uo = (t, e, r = {})=>{
        let n = r.exclude || [], o = r.preventUnderscore;
        for(let s in e)n.includes(s) || !o && Ne(s) || s === "constructor" || s === "prototype" || e[s] !== void 0 && (t[s] = e[s]);
        return t;
    }, ar = (t, e, r = [])=>{
        let n = r instanceof Set;
        for(let o in e)Ne(o) || o === "constructor" || o === "prototype" || (n ? r.has(o) : r.includes(o)) || (t[o] = e[o]);
        return t;
    }, At = (t, e, r = {}, n = new WeakMap)=>{
        if (!N(t) || !N(e) || kt(t) || kt(e)) return e;
        if (n.has(t)) return n.get(t);
        n.set(t, t);
        let o = r.exclude, s = o ? o instanceof Set ? o : new Set(o) : null, i = !r.preventForce;
        for(let a in e){
            if (!Object.prototype.hasOwnProperty.call(e, a) || s && s.has(a) || i && Ne(a) || a === "constructor" || a === "prototype") continue;
            let c = t[a], l = e[a];
            kt(l) ? t[a] = l : N(c) && N(l) ? t[a] = At(c, l, r, n) : l !== void 0 && (t[a] = l);
        }
        return t;
    }, Pi = (t, e, r = new Set)=>{
        if (typeof t != "object" || typeof e != "object" || t === null || e === null) return t === e;
        if (r.has(t) || r.has(e)) return !0;
        r.add(t), r.add(e);
        let n = Object.keys(t), o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for(let s = 0; s < n.length; s++){
            let i = n[s];
            if (!Object.prototype.hasOwnProperty.call(e, i) || !Pi(t[i], e[i], r)) return !1;
        }
        return !0;
    }, $x = new Set([
        "node",
        "__ref"
    ]), nu = (t, e, r = $x)=>{
        if (t === e) return !0;
        if (!N(t) || !N(e) || kt(t) || kt(e)) return t === e;
        let n = r instanceof Set ? r : new Set(r), o = new WeakSet;
        function s(i, a) {
            if (o.has(a)) return !0;
            o.add(a);
            for(let c in a){
                if (!Object.prototype.hasOwnProperty.call(a, c) || n.has(c)) continue;
                if (!Object.prototype.hasOwnProperty.call(i, c)) return !1;
                let l = a[c], f = i[c];
                if (kt(l) || kt(f)) {
                    if (l !== f) return !1;
                } else if (N(l) && N(f)) {
                    if (!s(f, l)) return !1;
                } else if (l !== f) return !1;
            }
            return !0;
        }
        return s(t, e);
    }, ou = (t, e)=>{
        if (e == null) return t;
        if (Ct(e)("string", "number")) delete t[e];
        else if (T(e)) for(let r = 0; r < e.length; r++)delete t[e[r]];
        else throw new Error("Invalid input: props must be a string or an array of strings");
        return t;
    }, Ii = (t)=>{
        if (t === null || typeof t != "object") return t;
        let e = Object.create(null);
        for(let r in t)Object.prototype.hasOwnProperty.call(t, r) && (e[r] = Ii(t[r]));
        return e;
    }, su = (t, e)=>{
        if (t.length === 0) return e;
        let r = {}, n = r;
        for(let o = 0; o < t.length; o++)o === t.length - 1 && e ? n[t[o]] = e : (n[t[o]] = {}, n = n[t[o]]);
        return r;
    }, iu = (t, e)=>{
        if (!Array.isArray(e)) throw new Error("Path must be an array.");
        let r = t;
        for(let o = 0; o < e.length - 1; o++){
            if (r[e[o]] === void 0) return;
            r = r[e[o]];
        }
        let n = e[e.length - 1];
        r && Object.prototype.hasOwnProperty.call(r, n) && delete r[n];
    }, au = (t, e, r)=>{
        if (!Array.isArray(e)) throw new Error("Path must be an array.");
        let n = t;
        for(let o = 0; o < e.length - 1; o++)(!n[e[o]] || typeof n[e[o]] != "object") && (n[e[o]] = {}), n = n[e[o]];
        return n[e[e.length - 1]] = r, t;
    }, cu = (t, e)=>{
        if (!Array.isArray(e)) throw new Error("Path must be an array.");
        let r = t;
        for(let n = 0; n < e.length; n++){
            if (r == null) return;
            r = r[e[n]];
        }
        return r;
    }, lu = (t)=>{
        let r = [], n = 0;
        for(let o = 0; o < t.length; o++)if (r.length < 2) r.push(t[o]);
        else if (t[o] === r[o % 2] ? n++ : (r = [
            t[o - 1],
            t[o]
        ], n = 1), n >= 20) return (Kf === "test" || Kf === "development") && console.warn("Warning: Potential infinite loop detected due to repeated sequence:", r), !0;
    }, fu = (t)=>{
        let e = new WeakSet;
        function r(n) {
            if (n && typeof n == "object") {
                if (e.has(n)) return !0;
                e.add(n);
                for(let o in n)if (Object.prototype.hasOwnProperty.call(n, o) && r(n[o])) return console.log(n, "cycle at " + o), !0;
            }
            return !1;
        }
        return r(t);
    }, uu = (t, e)=>{
        let r = e instanceof Set ? e : new Set(e), n = {};
        for(let o in t)Object.prototype.hasOwnProperty.call(t, o) && !r.has(o) && (n[o] = t[o]);
        return n;
    };
});
var po, ho, go, mo = $(()=>{
    "use strict";
    se();
    po = function() {
        let t = 0;
        function e() {
            return t++, t;
        }
        return e;
    }(), ho = po, go = (t, e, r)=>(X(r, t) || r || t.key || po()).toString();
});
var Gt, pu, je, $i, du, hu, gu, Be, mu, cr, Fi = $(()=>{
    "use strict";
    Gt = "production", pu = Gt, je = (t = Gt)=>t === "production", $i = (t = Gt)=>t === "testing" || t === "test", du = $i, hu = (t = Gt)=>t === "staging", gu = (t = Gt)=>t === "local", Be = (t = Gt)=>t === "development" || t === "dev" || t === "local", mu = (t, e = Gt)=>e[t], cr = (t = Gt)=>!je(t);
});
function yo(t, e, r) {
    let n;
    return function() {
        let o = this, s = arguments, i = function() {
            n = null, r || t.apply(o, s);
        }, a = r && !n;
        clearTimeout(n), n = setTimeout(i, e), a && t.apply(o, s);
    };
}
function Su(t, e = window) {
    let r = function() {
        return t.apply(e, arguments);
    };
    for(let n in t)Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    return r;
}
var yu, bu, Fx, xu, rn, nn, Kt, lr = $(()=>{
    "use strict";
    yu = (t, e, r = 300)=>{
        let n;
        return (...o)=>{
            clearTimeout(n), n = setTimeout(()=>{
                e.apply(t, o);
            }, r);
        };
    }, bu = (t)=>{
        let e = {};
        return (...r)=>{
            let n = r[0];
            if (n in e) return e[n];
            {
                let o = t(n);
                return e[n] = o, o;
            }
        };
    }, Fx = /^((function\s*\([^)]*\)\s*\{[^}]*\})|(\([^)]*\)\s*=>))/, xu = (t)=>Fx.test(t), rn = (t)=>{
        let e = t?.plugins;
        if (!e || !e.length) return !1;
        for (let r of e)if (r.resolveHandler) return !0;
        return !1;
    }, nn = (t, e)=>{
        if (typeof t == "function") return t;
        let r = e?.context?.plugins;
        if (!r) return t;
        for (let n of r)if (n.resolveHandler) {
            let o = n.resolveHandler(t, e);
            if (typeof o == "function") return o;
        }
        return t;
    }, Kt = (t, e, ...r)=>{
        let n = e?.context?.plugins;
        if (!n) return !1;
        let o = !1;
        for (let s of n)typeof s[t] == "function" && (s[t](e, ...r), o = !0);
        return o;
    };
});
var _u, wu = $(()=>{
    "use strict";
    ut();
    se();
    _u = (t, e)=>{
        let { __ref: r } = t, n = t.if;
        if (C(n)) {
            let o;
            try {
                o = n(t, t.state, t.context);
            } catch (s) {
                typeof console < "u" && console.warn("[DOMQL] if condition error:", s), delete r.__if;
                return;
            }
            o ? r.__if = !0 : delete r.__if;
        } else n != null && typeof n == "object" ? X(n, t) ? r.__if = !0 : delete r.__if : r.__if = !0;
    };
});
var ku, vu, Cu = $(()=>{
    "use strict";
    ku = (t, ...e)=>{
        t && e.map((r)=>console.log(r));
    }, vu = (t, e, ...r)=>{
        t && (console.group(e), r.map((n)=>console.log(n)), console.groupEnd(e));
    };
});
function Ru(t) {
    let e;
    try {
        if (!window.localStorage) return;
        e = window.localStorage.getItem(t);
    } catch  {
        return;
    }
    if (e !== null) try {
        return JSON.parse(e);
    } catch  {
        return;
    }
}
function Pu(t, e) {
    if (e != null) try {
        if (!window.localStorage) return;
        let r = typeof e == "object" ? JSON.stringify(e) : e;
        window.localStorage.setItem(t, r);
    } catch  {}
}
var Au, Eu, Tu, Ou, Iu = $(()=>{
    "use strict";
    ut();
    Kr();
    Au = typeof navigator > "u" ? !1 : /Mobi/.test(navigator.userAgent), Eu = (t, e, r = 365)=>{
        if (ht(Y) || ht(Y.cookie)) return;
        let n = new Date;
        n.setTime(n.getTime() + r * 86400000);
        let o = `expires=${n.toUTCString()}`;
        Y.cookie = `${t}=${e};${o};path=/`;
    }, Tu = (t)=>{
        if (ht(Y) || ht(Y.cookie)) return;
        let e = `${t}=`, n = decodeURIComponent(Y.cookie).split(";");
        for(let o = 0; o < n.length; o++){
            let s = n[o];
            for(; s.charAt(0) === " ";)s = s.substring(1);
            if (s.indexOf(e) === 0) return s.substring(e.length, s.length);
        }
        return "";
    }, Ou = (t)=>{
        ht(Y) || ht(Y.cookie) || (Y.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
    };
});
var on, $u, Fu, Di = $(()=>{
    "use strict";
    on = {
        root: [
            "body",
            "html"
        ],
        head: [
            "title",
            "base",
            "meta",
            "style",
            "noscript",
            "script"
        ],
        body: new Set([
            "string",
            "style",
            "fragment",
            "a",
            "abbr",
            "acronym",
            "address",
            "applet",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "basefont",
            "bdi",
            "bdo",
            "big",
            "blockquote",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "search",
            "col",
            "colgroup",
            "data",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "frame",
            "frameset",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hr",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "meter",
            "nav",
            "noframes",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "picture",
            "pre",
            "progress",
            "hgroup",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "source",
            "span",
            "strike",
            "strong",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "hgroup",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
            "svg",
            "path",
            "circle",
            "ellipse",
            "line",
            "polygon",
            "polyline",
            "rect",
            "g",
            "defs",
            "symbol",
            "use",
            "text",
            "tspan",
            "image",
            "clipPath",
            "mask",
            "pattern",
            "marker",
            "linearGradient",
            "radialGradient",
            "stop",
            "filter",
            "feGaussianBlur",
            "feOffset",
            "feMerge",
            "feMergeNode",
            "feBlend",
            "feColorMatrix",
            "feFlood",
            "feComposite",
            "foreignObject"
        ])
    }, $u = new Set([
        "svg",
        "path",
        "circle",
        "ellipse",
        "line",
        "polygon",
        "polyline",
        "rect",
        "g",
        "defs",
        "symbol",
        "use",
        "text",
        "tspan",
        "image",
        "clipPath",
        "mask",
        "pattern",
        "marker",
        "linearGradient",
        "radialGradient",
        "stop",
        "filter",
        "feGaussianBlur",
        "feOffset",
        "feMerge",
        "feMergeNode",
        "feBlend",
        "feColorMatrix",
        "feFlood",
        "feComposite",
        "foreignObject"
    ]), Fu = (t)=>on.body.has(t);
});
var Li, Du, sn, So, Et, Lu, Mi, _o, Mu, wo, Ni, ji, ko, Bi, an, Dx, ae, Nu, bo, vo, ju, xo, Bu, Vu, Vi, zi, Ui, Wi, Hi, qi, zu, Co = $(()=>{
    "use strict";
    nr();
    Gi();
    se();
    ut();
    Li = "production", Du = (t)=>t.sourcemap !== !1 && Li !== "production", sn = (t)=>{
        if (t.includes("+")) return t.split("+").filter(ce);
        if (t.includes("_")) {
            let [e] = t.split("_");
            return [
                e
            ];
        }
        if (t.includes(".") && !ce(t.split(".")[1])) {
            let [e] = t.split(".");
            return [
                e
            ];
        }
        return [
            t
        ];
    }, So = (t, e, r)=>{
        let n = [], o = sn(r);
        o && (n = [
            ...o
        ]);
        let s = t.extends;
        return s && (n = T(s) ? [
            ...n,
            ...s
        ] : [
            ...n,
            s
        ]), n;
    }, Et = (t, e)=>{
        let { __ref: r } = e, { __extends: n } = r;
        if (!t) return n;
        let o = e.variant, s = e.context;
        if (o && s?.components && !Array.isArray(t) && typeof t == "string") {
            let i = `${t}.${o}`;
            s.components[i] && (t = i);
        }
        return n.includes(t) || (n = Array.isArray(t) ? [
            ...n,
            ...t
        ] : [
            ...n,
            t
        ], r.__extends = n), n;
    }, Lu = (t, e)=>{
        if (!t) return e;
        let { extends: r } = e, n = T(r) ? r : [
            r
        ], o = T(t) ? t : [
            t
        ];
        return {
            ...e,
            extends: Xr(o, n)
        };
    }, Mi = ()=>Math.random().toString(36).substring(2), _o = {}, Mu = {}, wo = (t)=>_o[t.__hash], Ni = (t, e)=>{
        let r = Mi();
        return _(t) || (t.__hash = r), r !== "__proto__" && r !== "constructor" && r !== "prototype" && (_o[r] = e), e;
    }, ji = (t, e)=>t.__hash ? e.concat(wo(t)) : Ni(t, e), ko = (t, e, r, n = new Set, o, s)=>{
        for (let i of t)T(i) ? ko(i, e, r, n, o, s) : an(i, e, r, n, o, void 0, s);
        return e;
    }, Bi = (t, e, r, n = new Set, o, s, i)=>{
        let a = t.extends, c = {
            ...t
        };
        delete c.extends;
        let l = !1;
        for(let f in c){
            l = !0;
            break;
        }
        return l && (e.push(c), o && o.push(s)), a && an(a, e, r, n, o, s, i), e;
    }, an = (t, e, r, n = new Set, o, s, i)=>{
        if (!t || n.has(t)) return e;
        if (T(t)) return ko(t, e, r, n, o, i);
        let a = s;
        return _(t) ? (a = t, t = vo(t, r)) : i && S(t) && i.has(t) && (a = i.get(t)), n.add(t), t?.extends ? Bi(t, e, r, n, o, a, i) : t && (e.push(t), o && o.push(a)), e;
    }, Dx = new Set([
        "parent",
        "node",
        "__ref",
        "__proto__",
        "extends",
        "childExtends",
        "childExtendsRecursive"
    ]), ae = (t, e, r, n, o)=>{
        e = Q(e);
        for(let s in e){
            if (Dx.has(s)) continue;
            let i = t[s], a = e[s];
            if (a !== void 0 && Object.prototype.hasOwnProperty.call(e, s) && s !== "__proto__" && s !== "constructor" && s !== "prototype") {
                if (i === void 0) t[s] = a, r && n ? S(a) && !T(a) ? (r[s] = r[s] || {}, Nu(r[s], a, n)) : r[s] = n : r && o?.[s] && (r[s] = o[s]);
                else if (S(i) && S(a)) {
                    let c = r ? r[s] = r[s] || {} : void 0, l = o?.[s];
                    ce(s) ? t[s] = ae(i, a, c, n, l) : ae(i, a, c, n, l);
                }
                if (s === "extends" || s === "childExtends" || s === "childExtendsRecursive") {
                    if (T(i) && T(a)) t[s] = i.concat(a);
                    else if (T(i) && S(a)) {
                        let c = ae({}, i);
                        t[s] = ae(c, a);
                    }
                }
            }
        }
        return t;
    }, Nu = (t, e, r, n)=>{
        if (n || (n = new WeakSet), !n.has(e)) {
            n.add(e);
            for(let o in e){
                if (!Object.prototype.hasOwnProperty.call(e, o) || o === "__proto__" || o === "constructor" || o === "prototype") continue;
                let s = e[o];
                S(s) && !T(s) ? (t[o] = t[o] || {}, Nu(t[o], s, r, n)) : t[o] = r;
            }
        }
    }, bo = (t, e, r)=>t.reduce((n, o, s)=>{
            let i = Q(o), a = r ? r[s] : void 0;
            return ae(n, i, e, a);
        }, {}), vo = (t, e, r = {}, n)=>{
        let o = e?.components || r.components, s = e?.pages || r.pages;
        if (_(t)) {
            let i = o && (o[t + "." + n] || o[t] || o["smbls." + t]), a = s && t.charCodeAt(0) === 47 && s[t];
            if (i) return i;
            if (a) return a;
            r.verbose && (Li === "test" || Li === "development") && console.warn("Extend is string but component was not found:", t);
            return;
        }
        return t;
    }, ju = (t, e)=>[].concat(t.slice(0, 1)).concat(e.slice(0, 1)).concat(t.slice(1)).concat(e.slice(1)), xo = (t, e, r, n)=>{
        if (!t) return [];
        if (t.__hash) return wo(t) || [];
        let s = an(t, [], e, new Set, r, void 0, n);
        return r ? s : ji(t, s);
    }, Bu = (t, e)=>{
        if (!t) return e;
        let r = T(t) ? t : [
            t
        ];
        return Xr(r, e);
    }, Vu = (t)=>{
        let e = [];
        function r(n) {
            for(let o in n)Object.prototype.hasOwnProperty.call(n, o) && (ce(o) && e.push(o), o === "extends" && (typeof n[o] == "string" ? e.push(n[o]) : Array.isArray(n[o]) && (e = e.concat(n[o]))), typeof n[o] == "object" && n[o] !== null && r(n[o]));
        }
        return r(t), e;
    }, Vi = (t, e, r = {})=>{
        let { __ref: n } = t, o = t.context || e.context, s = t.variant;
        if (t.extends) {
            if (Array.isArray(t.extends) && t.extends.length > 0) {
                let [i, ...a] = t.extends;
                if (typeof i == "string" && s && o?.components) {
                    let c = `${i}.${s}`;
                    o.components[c] ? Et([
                        c,
                        ...a
                    ], t) : Et(t.extends, t);
                } else Et(t.extends, t);
            } else if (typeof t.extends == "string" && s && o?.components) {
                let i = `${t.extends}.${s}`;
                o.components[i] ? Et(i, t) : Et(t.extends, t);
            } else Et(t.extends, t);
        }
        return zi(t, e, r), Ui(t, e, r), Wi(t, e, r), t.component && Et(X(t.component, t), t), o.defaultExtends && Et(o.defaultExtends, t), Zr(n.__extends);
    }, zi = (t, e, r = {})=>{
        let { __ref: n } = t;
        return r.ignoreChildExtends || t.ignoreChildExtends || e.childProps?.extends && Et(e.childProps.extends, t), n.__extends;
    }, Ui = (t, e, r = {})=>{
        let { __ref: n } = t, o = r.ignoreChildExtends || t.ignoreChildExtends, s = e.childExtends;
        return !o && s && Et(s, t), n.__extends;
    }, Wi = (t, e, r = {})=>{
        let { __ref: n } = t, o = e.childExtendsRecursive, s = r.ignoreChildExtendsRecursive || t.ignoreChildExtendsRecursive, i = t.key === "__text";
        return o && !i && !s && Et(o, t), n.__extends;
    }, Hi = (t, e, r = {})=>{
        let { __ref: n } = t, o = t.context || e.context, s = t.variant, i = Du(r), a = i ? [
            ...n.__extends
        ] : null, c = Zr(n.__extends.map((l, f)=>vo(l, o, r, f === 0 && s)));
        if (i) {
            let l = new WeakMap;
            for(let u = 0; u < c.length; u++){
                let d = c[u], h = a[u];
                d && S(d) && _(h) && l.set(d, h);
            }
            let f = [], p = xo(c, o, f, l);
            n.__extendsStack = p, n.__extendsNames = f;
        } else {
            let l = xo(c, o);
            n.__extendsStack = l;
        }
        return n.__extendsStack;
    }, qi = (t, e, r = {})=>{
        let { __ref: n } = t, { __extendsStack: o } = n;
        if (Du(r)) {
            let s = {}, i = n.__extendsNames || [], a = bo(o, s, i), c = {};
            ae(t, a, c, void 0, s), n.__sourcemap = c;
        } else {
            let s = bo(o);
            ae(t, s);
        }
        return t;
    }, zu = (t, e, r = {})=>(Vi(t, e, r), Hi(t, e, r), qi(t, e, r), t);
});
function Uu(t) {
    return Object.keys(t).filter((e)=>/^[A-Z]/.test(e));
}
function Wu(t) {
    return Object.keys(t).filter((e)=>/^\d+$/.test(e));
}
function Hu(t, e, r) {
    let { context: n } = e || {}, [o] = sn(r), s = r || o;
    return n?.components?.[s] || n?.pages?.[s];
}
var ce, Gi = $(()=>{
    "use strict";
    Co();
    ut();
    ce = (t)=>{
        if (!_(t) || !t.length) return !1;
        let e = t.charCodeAt(0);
        return e >= 65 && e <= 90;
    };
});
function qu(t, e) {
    let { props: r, on: n } = e, o = sr(t.split("on")[1]), s = n[o], i = r[t];
    C(s) ? n[o] = (...a)=>{
        if (s(...a) !== !1 && C(i)) return i(...a);
    } : n[o] = i;
}
var Gu = $(()=>{
    "use strict";
    Qr();
    ut();
});
function Yi(t, e = {}) {
    let r = e.cachedKeys || [];
    for(let n in t){
        let o = t[n];
        if (n.length > 2 && n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n[2] === n[2].toUpperCase() && (C(o) || o != null && rn(this.context))) {
            let h = sr(n.slice(2));
            t.on && (t.on[h] = o), delete t[n];
            continue;
        }
        if (n === "childProps") {
            t.props[n] = o, delete t[n], r.push(n);
            continue;
        }
        let a = this.define?.[n], c = this.context?.define?.[n], l = S(a) || C(a), f = S(c) || C(c);
        if (l || f) continue;
        let p = n.charAt(0);
        if (Yu.has(p)) {
            t.props[n] = o, delete t[n], r.push(n);
            continue;
        }
        let u = Ki.test(n) || Ku.test(n) || Mx(o), d = De.has(n);
        !u && !d && (n in t.props || (t.props[n] = o), delete t[n], r.push(n));
    }
    return t;
}
function Xi(t = this, e) {
    let r = e.cachedKeys || [];
    for(let n in t.props){
        let o = t.props[n], s = n.length > 2 && n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110, i = C(o) || o != null && rn(this.context);
        if (s && i) {
            qu(n, t), delete t.props[n];
            continue;
        }
        if (r.includes(n) || n === "childProps") continue;
        let a = n.charAt(0);
        if (Yu.has(a)) continue;
        let c = this.define?.[n], l = this.context?.define?.[n], f = S(c) || C(c), p = S(l) || C(l), u = Ki.test(n) || Ku.test(n), d = De.has(n);
        (u || d || f || p) && (t[n] === void 0 || o === null) && (t[n] = o, t.props && delete t.props[n]);
    }
    return t;
}
function Zi(t = this) {
    let e = [];
    return Yi.call(this, t, {
        cachedKeys: e
    }), Xi.call(this, t, {
        cachedKeys: e
    }), t;
}
function Xu(t = {}) {
    return t.on || (t.on = {}), t.props || (t.props = {}), Zi.call(this, t);
}
function Ji(t, e) {
    this.__element.update({
        props: t
    }, e);
}
function Ro(t) {
    let e = {
        update: Ji.bind(t.props),
        __element: t
    };
    Object.setPrototypeOf(t.props, e);
}
var Ki, Ku, Yu, Lx, Mx, To, Ao, Zu, Oo, Po, Io, Qi, Eo, Ju, Qu, ta = $(()=>{
    "use strict";
    ir();
    Gu();
    se();
    ut();
    Qr();
    lr();
    Ki = /^[A-Z]/, Ku = /^\d+$/, Yu = new Set([
        ":",
        "@",
        "[",
        "*",
        "+",
        "~",
        "&",
        ">",
        "$",
        "-",
        ".",
        "!"
    ]), Lx = new Set([
        "extend",
        "props",
        "text",
        "tag",
        "on",
        "if",
        "childExtend",
        "children",
        "childrenAs",
        "state",
        "html",
        "attr",
        "define",
        "content"
    ]), Mx = (t)=>{
        if (!t || typeof t != "object" || Array.isArray(t)) return !1;
        for(let e in t)if (Lx.has(e) || Ki.test(e)) return !0;
        return !1;
    }, To = (t, e, r)=>{
        let { props: n, __ref: o } = t;
        if (o.__propsStack = [], n) o.__initialProps = n;
        else return {};
        return N(n) ? {
            ...n
        } : (o.__propsStack.push(n), {});
    };
    Ao = (t)=>Ct(t)("string", "number") ? {
            inheritedString: t
        } : t, Zu = (t, e)=>!t || !e.length ? !1 : e.includes(t), Oo = (t, e)=>{
        let { __ref: r } = t, n = r.__propsStack || [], o = e.props;
        if (!o) return n;
        let s = o[t.key], i = o.childProps || e.childProps, a = t.props?.ignoreChildProps;
        if (i && !a) {
            let c = Ao(i);
            n.unshift(c);
        }
        if (s) {
            let c = Ao(s);
            n.unshift(c);
        }
        return n;
    };
    Po = (t)=>{
        let e = new Set;
        return t.filter((r)=>!r || Me.has(r) || e.has(r) ? !1 : (e.add(r), !0));
    }, Io = (t, e, r)=>(e.props = t.reduce((n, o)=>{
            if (Me.has(o)) return n;
            for(; C(o);)o = X(o, e);
            return q(n, Q(o, {
                exclude: Me
            }));
        }, {}), Ro(e), e.props), Qi = (t, e)=>{
        let { props: r, __ref: n } = t, o = n.__propsStack || [];
        if (e?.props && (o = [
            ...Oo(t, e)
        ]), S(r) ? o.push(r) : r === "inherit" && e?.props ? o.push(e.props) : r && o.push(r), T(n.__extendsStack)) for(let s = 0; s < n.__extendsStack.length; s++){
            let i = n.__extendsStack[s];
            i.props && i.props !== r && o.push(i.props);
        }
        return n.__propsStack = Po(o), n.__propsStack;
    }, Eo = (t, e)=>{
        let { __ref: r } = t, n = Qi(t, e);
        n.length ? Io(n, t) : (r.__propsStack = [], t.props = {});
    }, Ju = function(t, e, r) {
        let { __ref: n } = t;
        if (n.__if) Eo(t, e);
        else try {
            Eo(t, e);
        } catch (o) {
            t.context?.designSystem?.verbose && console.warn("initProps error at", n.path?.join("."), o), t.props = {}, n.__propsStack = [];
        }
        return Ro(t), t;
    }, Qu = (t, e, r)=>{
        let { __ref: n } = e, s = [
            ...n.__propsStack || []
        ], i = Oo(e, r);
        return i.length && (s = [
            ...i,
            ...s
        ]), t && (s = [
            t,
            ...s
        ]), n.__propsStack = Po(s), n.__propsStack.length && Io(n.__propsStack, e), e;
    };
});
var tp, ea, ra, na, oa, ep, sa, ia, aa, rp, np = $(()=>{
    "use strict";
    Co();
    mo();
    Yr();
    ta();
    Di();
    ut();
    tp = "production", ea = (t, e, r)=>{
        let n = e.childExtends && e.childExtends.tag, o = e.childProps && e.childProps.tag, s = on.body.has(r) && r;
        return {
            text: t,
            tag: n || o || s || "string"
        };
    }, ra = (t, e, r)=>{
        if (t === void 0) return (tp === "test" || tp === "development") && console.warn(r, "element is undefined in", e?.__ref?.path), {};
        if (t !== null) return t === !0 ? {} : Ct(t)("string", "number") ? ea(t, e, r) : C(t) ? {
            props: t
        } : t;
    }, na = (t, e)=>{
        let r = {};
        return r.origin = t, r.parent = e, r;
    }, oa = (t, e, r, n, o)=>{
        if (!e) return o;
        if (he(e)) {
            let s = {
                key: ":root",
                node: e
            };
            return o[`${r}_parent`] = s, s;
        }
        return e;
    }, ep = (t, e)=>{
        let { __ref: r } = t, { __ref: n } = e, o = e && e.key === ":root";
        r?.root || (r.root = o ? t : n?.root);
    }, sa = (t, e, r)=>{
        let { __ref: n } = e;
        return n || (n = e.ref = {}), n.path || (n.path = []), n.path.concat(r);
    }, ia = (t, e, r, n, o)=>(n.context && !o.context && !t.context && (o.context = n.context), n.context || e.context || o.context || t.context), aa = (t, e, r)=>{
        let n = na(t, e);
        return t.__ref = n, n.__defineCache || (n.__defineCache = {}), n.__exec || (n.__exec = {}), n.__execProps || (n.__execProps = {}), n.__class || (n.__class = {}), n.__classNames || (n.__classNames = {}), n.__attr || (n.__attr = {}), n.__changes || (n.__changes = []), n.__children || (n.__children = []), n.__extends = So(t, e, r), n.path = sa(t, e, r), n;
    }, rp = (t, e, r, n, o)=>{
        let i = t?.__hash ? {
            extends: [
                t
            ]
        } : ra(t, e, r);
        if (!i) return;
        let a = oa(i, e, r, n, o), c = go(i, a, r);
        aa(i, a, c);
        let l = To(i, a, c), f = ia(i, a, c, n, o), p = i.on || {};
        return {
            ...i,
            key: c,
            props: l,
            parent: a,
            context: f,
            on: p
        };
    };
});
var op, ca, la, fa, ua, sp, pa, ip, ap, cp, lp, fp = $(()=>{
    "use strict";
    nr();
    ir();
    se();
    ut();
    op = (t)=>{
        let { state: e, props: r, __ref: n } = t, o = r?.state || e;
        return Ct(o)("string", "number") ? (n.__state = o, {
            value: o
        }) : o === !0 ? (n.__state = t.key, {}) : o ? (n.__hasRootState = !0, o) : !1;
    }, ca = (t, e)=>{
        if (!t.includes("~/")) return;
        if (t.split("~/").length > 1) return e.root;
    }, la = (t, e)=>{
        if (!t.includes("../")) return;
        let n = t.split("../").length - 1;
        for(let o = 0; o < n; o++){
            if (!e.parent) return null;
            e = e.parent;
        }
        return e;
    }, fa = (t, e, r = {})=>{
        let n = _(t) ? t.split("/") : [
            t
        ], o = n.length - 1;
        for(let s = 0; s < o; s++){
            let i = n[s], a = n[s + 1];
            if (i === "__proto__" || a === "__proto__") return;
            let c = e[i];
            c || (c = e[i] = {}), c[a] || (c[a] = {}), t = a, e = c;
        }
        return r.returnParent ? e : e[t];
    }, ua = (t, e, r = {})=>{
        let o = t.__ref.__state;
        if (!pa(t)) return;
        let s = ca(o, e.state), i = e.state;
        if (s) i = s, o = o.replaceAll("~/", "");
        else {
            let a = la(o, e.state);
            a && (i = a, o = o.replaceAll("../", ""));
        }
        if (i) return fa(o, i, r);
    }, sp = (t, e)=>{
        let r = t.__ref, n = ua(t, e);
        if (n === void 0) return t.state;
        if (Ct(n)("object", "array")) return Q(n);
        if (Ct(n)("string", "number", "boolean")) return r.__stateType = typeof n, {
            value: n
        };
        console.warn(r.__state, "is not present. Replacing with", {});
    }, pa = (t)=>{
        let { __ref: e } = t, r = e?.__state;
        return !!(r && Ct(r)("number", "string", "boolean"));
    }, ip = function(t) {
        return N(t) ? !!(t.update && t.parse && t.clean && t.create && t.parent && t.destroy && t.rootUpdate && t.parentUpdate && t.keys && t.values && t.toggle && t.replace && t.quietUpdate && t.quietReplace && t.add && t.apply && t.applyReplace && t.setByPath && t.setPathCollection && t.removeByPath && t.removePathCollection && t.getByPath && t.applyFunction && t.__element && t.__children) : !1;
    }, ap = (t, e)=>{
        if (!t) return e || {};
        let r = t.split("/"), n = {}, o = n, s = r.length - 1;
        for(let i = 0; i <= s; i++)o[r[i]] = i === s ? e || {} : {}, o = o[r[i]];
        return n;
    }, cp = (t, e)=>{
        let { __element: r } = e, n = r?.state;
        if (!n) return;
        let o = Q(n, Le), s = {
            [t.key]: o
        }, i = S(n.__depends) ? {
            ...n.__depends,
            ...s
        } : s;
        return Array.isArray(n) ? oo(n, {
            ...Object.getPrototypeOf(n),
            __depends: i
        }) : Object.setPrototypeOf(n, {
            ...Object.getPrototypeOf(n),
            __depends: i
        }), o;
    }, lp = (t, e, r = {})=>{
        let { overwrite: n } = r;
        if (!n) return;
        let o = n === "shallow";
        if (n === "merge") {
            q(t, e, Le);
            return;
        }
        (o ? ar : At)(t, e, Le);
    };
});
var up, pp = $(()=>{
    "use strict";
    up = (t, e)=>{
        let { __ref: r } = t, n = t.context || e.context || r.root?.context;
        n && !n.globalScope && (n.globalScope = {});
        let o = e.scope || r.root?.scope, s = n?.globalScope;
        if (!t.scope) o ? t.scope = o : s ? t.scope = Object.create(s) : t.scope = {};
        else if (typeof t.scope == "object" && t.scope !== null && Object.getPrototypeOf(t.scope) === Object.prototype) {
            let i = o || s;
            i && Object.setPrototypeOf(t.scope, i);
        }
    };
});
var dp, da, Ve, ha, hp, ga = $(()=>{
    "use strict";
    ut();
    lr();
    dp = (t, e)=>{
        let r = "on" + t.charAt(0).toUpperCase() + t.slice(1);
        return e[r];
    }, da = (t, e, r, n, o)=>{
        if (t = nn(t, e), !!C(t)) try {
            let s = t.call(e, e, r || e.state, n || e.context, o);
            return s && typeof s.then == "function" && s.catch((i)=>{
                e.error = i, i instanceof ReferenceError ? console.warn("[DOMQL] Async event warning:", i.message) : console.error("[DOMQL] Async event error:", i);
            }), s;
        } catch (s) {
            if (e.error = s, s instanceof ReferenceError ? console.warn("[DOMQL] Event handler warning:", s.message) : console.error("[DOMQL] Event handler error:", s), e.context?.strictMode) throw s;
        }
    }, Ve = (t, e, r)=>{
        if (!e) throw new Error("Element is required");
        Kt(t, e, r);
        let n = dp(t, e);
        if (n) {
            let { state: o, context: s } = e;
            return da(n, e, o, s, r);
        }
    }, ha = (t, e, r, n, o, s)=>{
        if (t = nn(t, r), !!C(t)) try {
            let i = t.call(r, e, r, n || r.state, o || r.context, s);
            return i && typeof i.then == "function" && i.catch((a)=>{
                r.error = a, console.error("[DOMQL] Async event update error:", a);
            }), i;
        } catch (i) {
            if (r.error = i, console.error("[DOMQL] Event update error:", i), r.context?.strictMode) throw i;
        }
    }, hp = (t, e, r, n)=>{
        Kt(t, r, e, n);
        let o = dp(t, r);
        if (o) {
            let { state: s, context: i } = r;
            return ha(o, e, r, s, i, n);
        }
    };
});
var gp, $o, ma = $(()=>{
    "use strict";
    gp = {}, $o = {};
});
var bp = {};
F(bp, {
    setup: ()=>jx,
    supabaseAdapter: ()=>yp
});
var mp, Nx, jx, ya, Bx, yp, xp = $(()=>{
    "use strict";
    mp = new Map, Nx = (t, e, r)=>`${t}|${e}|${r ? "off" : "on"}`, jx = async ({ url: t, key: e, projectId: r, createClient: n, auth: o, retry: s, adapter: i, ...a })=>{
        let c = t || r && `https://${r}.supabase.co`;
        if (!c || !e) throw new Error("@symbo.ls/fetch supabase: url (or projectId) and key are required");
        n || (n = (await require("8f86adca222f5bd8")).createClient), o === !1 && (a.auth = {
            autoRefreshToken: !1,
            persistSession: !1,
            detectSessionInUrl: !1
        });
        let l = Nx(c, e, o === !1), f = mp.get(l);
        return f || (f = await n(c, e, a), f?.auth && mp.set(l, f)), !f || !f.auth ? null : yp(f);
    }, ya = (t, e)=>{
        if (!e) return t;
        for(let r in e){
            let n = e[r];
            if (n === null) t = t.is(r, null);
            else if (Array.isArray(n)) t = t.in(r, n);
            else if (typeof n == "object") for(let o in n)o === "gt" ? t = t.gt(r, n[o]) : o === "gte" ? t = t.gte(r, n[o]) : o === "lt" ? t = t.lt(r, n[o]) : o === "lte" ? t = t.lte(r, n[o]) : o === "neq" ? t = t.neq(r, n[o]) : o === "like" ? t = t.like(r, n[o]) : o === "ilike" ? t = t.ilike(r, n[o]) : o === "in" ? t = t.in(r, n[o]) : o === "is" ? t = t.is(r, n[o]) : o === "contains" ? t = t.contains(r, n[o]) : o === "containedBy" ? t = t.containedBy(r, n[o]) : o === "textSearch" && (t = t.textSearch(r, n[o]));
            else t = t.eq(r, n);
        }
        return t;
    }, Bx = (t, { limit: e, offset: r, order: n, single: o } = {})=>{
        if (n) {
            if (Array.isArray(n)) for (let s of n){
                let i = typeof s == "string" ? s : s.by;
                t = t.order(i, {
                    ascending: s.asc !== !1
                });
            }
            else {
                let s = typeof n == "string" ? n : n.by;
                t = t.order(s, {
                    ascending: n.asc !== !1
                });
            }
        }
        return e && (t = t.limit(e)), r && (t = t.range(r, r + (e || 20) - 1)), o && (t = t.single()), t;
    }, yp = (t)=>({
            name: "supabase",
            client: t,
            getSession: async ()=>{
                let { data: e } = await t.auth.getSession();
                return e?.session || null;
            },
            getUser: async ()=>{
                let { data: e } = await t.auth.getUser();
                return e?.user || null;
            },
            signIn: (e)=>e.provider ? t.auth.signInWithOAuth({
                    provider: e.provider
                }) : e.token ? t.auth.signInWithIdToken(e) : t.auth.signInWithPassword(e),
            signUp: (e)=>t.auth.signUp(e),
            signOut: ()=>t.auth.signOut(),
            onAuthStateChange: (e)=>{
                let { data: { subscription: r } } = t.auth.onAuthStateChange((n, o)=>e(n, o));
                return ()=>r.unsubscribe();
            },
            select: async ({ from: e, schema: r, select: n, params: o, headers: s, ...i })=>{
                let c = (r ? t.schema(r) : t).from(e).select(n || "*");
                if (c = ya(c, o), c = Bx(c, i), s) try {
                    for(let l in s)c.setHeader ? c = c.setHeader(l, s[l]) : t.rest && (t.rest.headers[l] = s[l]);
                } catch (l) {
                    console.warn("[supabase] setHeader failed:", l.message);
                }
                return c;
            },
            rpc: ({ from: e, params: r })=>t.rpc(e, r),
            insert: ({ from: e, schema: r, data: n, select: o })=>(r ? t.schema(r) : t).from(e).insert(n).select(o || "*"),
            update: ({ from: e, schema: r, data: n, params: o, select: s })=>{
                let a = (r ? t.schema(r) : t).from(e).update(n);
                return a = ya(a, o), a.select(s || "*");
            },
            upsert: ({ from: e, schema: r, data: n, select: o })=>(r ? t.schema(r) : t).from(e).upsert(n).select(o || "*"),
            delete: ({ from: e, params: r })=>{
                let n = t.from(e).delete();
                return n = ya(n, r), n;
            },
            subscribe: ({ from: e, params: r, on: n }, o)=>{
                let s = n || "*", i = t.channel(`db-${e}-${Date.now()}`).on("postgres_changes", {
                    event: s,
                    schema: "public",
                    table: e,
                    ...r?.id ? {
                        filter: `id=eq.${r.id}`
                    } : {}
                }, (a)=>o(a.new, a.old, a)).subscribe();
                return ()=>t.removeChannel(i);
            },
            upload: ({ bucket: e, path: r, file: n, options: o })=>t.storage.from(e).upload(r, n, o),
            download: ({ bucket: e, path: r })=>t.storage.from(e).download(r),
            getPublicUrl: ({ bucket: e, path: r })=>t.storage.from(e).getPublicUrl(r)
        });
});
var _p = {};
F(_p, {
    restAdapter: ()=>Sp,
    setup: ()=>zx
});
var Vx, ge, zx, Sp, wp = $(()=>{
    "use strict";
    Vx = (t, e, r)=>{
        let n = e && !e.startsWith("/") ? "/" : "", o = new URL(`${t}${n}${e}`);
        if (r) for(let s in r){
            let i = r[s];
            i != null && o.searchParams.set(s, typeof i == "object" ? JSON.stringify(i) : i);
        }
        return o.toString();
    }, ge = async (t, e)=>{
        let r = await globalThis.fetch(t, e), n = r.headers.get("content-type"), o = n && n.includes("json") ? await r.json() : await r.text();
        return {
            data: o,
            error: r.ok ? null : o?.message || o?.error || r.statusText,
            status: r.status
        };
    }, zx = async ({ url: t, headers: e, auth: r, fetchOptions: n })=>{
        if (!t) throw new Error("@symbo.ls/fetch rest: url is required");
        return Sp(t, e, r, n);
    }, Sp = (t, e = {}, r, n = {})=>{
        let o = r?.token || null, s = (f)=>{
            let p = {
                ...e,
                ...f
            };
            return o && (p.Authorization = `Bearer ${o}`), p;
        }, i = (f)=>({
                ...s(f),
                "Content-Type": "application/json"
            }), a = (f)=>({
                ...n,
                ...f
            }), c = (f, p)=>{
            let u = p || t;
            if (f && (f.startsWith("http://") || f.startsWith("https://"))) return f;
            let d = f && !f.startsWith("/") ? "/" : "";
            return `${u}${d}${f || ""}`;
        };
        return {
            name: "rest",
            setToken: (f)=>{
                o = f;
            },
            getSession: async ()=>{
                if (!r?.sessionUrl) return o ? {
                    token: o
                } : null;
                let f = await ge(c(r.sessionUrl, r.baseUrl), a({
                    headers: s()
                }));
                return f.error ? null : f.data;
            },
            signIn: async (f)=>{
                if (!r?.signInUrl) throw new Error("rest: auth.signInUrl not configured");
                let p = await ge(c(r.signInUrl, r.baseUrl), a({
                    method: "POST",
                    headers: i(),
                    body: JSON.stringify(f)
                }));
                return p.data?.token && (o = p.data.token), p;
            },
            signOut: async ()=>(r?.signOutUrl && await ge(c(r.signOutUrl, r.baseUrl), a({
                    method: "POST",
                    headers: s()
                })), o = null, {
                    error: null
                }),
            select: ({ from: f, params: p, select: u, limit: d, offset: h, order: g, single: m, headers: y, baseUrl: b })=>{
                let w = {
                    ...p
                };
                return u && (w.select = u), d && (w.limit = d), h && (w.offset = h), m && (w.single = !0), g && (typeof g == "string" ? w.order = g : Array.isArray(g) ? w.order = g.map((x)=>`${x.by}:${x.asc === !1 ? "desc" : "asc"}`).join(",") : g.by && (w.order = `${g.by}:${g.asc === !1 ? "desc" : "asc"}`)), ge(Vx(b || t, f || "", w), a({
                    headers: s(y)
                }));
            },
            rpc: ({ from: f, params: p, headers: u, baseUrl: d })=>ge(c(`rpc/${f}`, d), a({
                    method: "POST",
                    headers: i(u),
                    body: JSON.stringify(p)
                })),
            insert: ({ from: f, data: p, headers: u, baseUrl: d })=>ge(c(f, d), a({
                    method: "POST",
                    headers: i(u),
                    body: JSON.stringify(p)
                })),
            update: ({ from: f, data: p, params: u, method: d, headers: h, baseUrl: g })=>{
                let m = u?.id || p?.id, y = m ? `${f}/${m}` : f;
                return ge(c(y, g), a({
                    method: d || "PATCH",
                    headers: i(h),
                    body: JSON.stringify(p)
                }));
            },
            delete: ({ from: f, params: p, headers: u, baseUrl: d })=>{
                let h = p?.id, g = h ? `${f}/${h}` : f;
                return ge(c(g, d), a({
                    method: "DELETE",
                    headers: s(u)
                }));
            }
        };
    };
});
var vp = {};
F(vp, {
    localAdapter: ()=>kp,
    setup: ()=>Wx
});
var ba, Ux, Wx, kp, Cp = $(()=>{
    "use strict";
    ba = (t, e)=>{
        if (!e) return !0;
        for(let r in e){
            let n = e[r];
            if (n === null) {
                if (t[r] !== null && t[r] !== void 0) return !1;
            } else if (Array.isArray(n)) {
                if (!n.includes(t[r])) return !1;
            } else if (typeof n == "object") {
                for(let o in n)if (o === "gt" && !(t[r] > n[o]) || o === "gte" && !(t[r] >= n[o]) || o === "lt" && !(t[r] < n[o]) || o === "lte" && !(t[r] <= n[o]) || o === "neq" && t[r] === n[o] || o === "like" && !String(t[r]).includes(n[o])) return !1;
            } else if (t[r] !== n) return !1;
        }
        return !0;
    }, Ux = (t, { order: e, limit: r, offset: n, single: o })=>{
        let s = [
            ...t
        ];
        if (e) {
            let i = typeof e == "string" ? e : e.by, a = e.asc !== !1;
            s.sort((c, l)=>c[i] < l[i] ? a ? -1 : 1 : c[i] > l[i] ? a ? 1 : -1 : 0);
        }
        return n && (s = s.slice(n)), r && (s = s.slice(0, r)), o ? {
            data: s[0] || null,
            error: null
        } : {
            data: s,
            error: null
        };
    }, Wx = async ({ data: t, ...e })=>kp(t, e), kp = (t = {}, e = {})=>{
        let r = {}, n = {}, o = e.persist !== !1 && typeof localStorage < "u", s = e.prefix || "smbls_db_", i = (f)=>{
            if (!r[f]) {
                if (o) try {
                    let p = localStorage.getItem(s + f);
                    r[f] = p ? JSON.parse(p) : t[f] || [];
                } catch  {
                    r[f] = t[f] || [];
                }
                else r[f] = t[f] || [];
            }
            return r[f];
        }, a = (f)=>{
            if (o) try {
                localStorage.setItem(s + f, JSON.stringify(r[f]));
            } catch  {}
        }, c = (f, p, u, d)=>{
            let h = n[f];
            if (h) for (let g of h)g(u, d, {
                event: p,
                table: f
            });
        }, l = Date.now();
        return {
            name: "local",
            store: r,
            select: async ({ from: f, params: p, ...u })=>{
                let h = i(f).filter((g)=>ba(g, p));
                return Ux(h, u);
            },
            insert: async ({ from: f, data: p })=>{
                let u = i(f), h = (Array.isArray(p) ? p : [
                    p
                ]).map((g)=>{
                    let m = {
                        id: g.id || ++l,
                        ...g
                    };
                    return u.push(m), m;
                });
                a(f);
                for (let g of h)c(f, "INSERT", g, null);
                return {
                    data: Array.isArray(p) ? h : h[0],
                    error: null
                };
            },
            update: async ({ from: f, data: p, params: u })=>{
                let d = i(f), h = [];
                for(let g = 0; g < d.length; g++)if (ba(d[g], u)) {
                    let m = {
                        ...d[g]
                    };
                    Object.assign(d[g], p), h.push(d[g]), c(f, "UPDATE", d[g], m);
                }
                return a(f), {
                    data: h,
                    error: null
                };
            },
            delete: async ({ from: f, params: p })=>{
                let u = i(f), d = [];
                for(let h = u.length - 1; h >= 0; h--)ba(u[h], p) && (d.push(u[h]), u.splice(h, 1), c(f, "DELETE", null, d[d.length - 1]));
                return a(f), {
                    data: d,
                    error: null
                };
            },
            subscribe: ({ from: f, on: p }, u)=>{
                n[f] || (n[f] = []);
                let d = (h, g, m)=>{
                    p && p !== "*" && p !== m.event || u(h, g, m);
                };
                return n[f].push(d), ()=>{
                    let h = n[f].indexOf(d);
                    h > -1 && n[f].splice(h, 1);
                };
            }
        };
    };
});
var gn = {};
F(gn, {
    createAdapter: ()=>Kx,
    default: ()=>oS,
    executeFetch: ()=>hn,
    fetchPlugin: ()=>ka,
    initAdapterAuth: ()=>Mo,
    parseDuration: ()=>ln,
    queryClient: ()=>nS,
    registerAdapter: ()=>Gx,
    resolveDb: ()=>Rp
});
var Hx, qx, Fo, Op, Gx, Kx, Rp, ln, yt, Pp, cn, Yx, dn, fn, un, Do, _a, Lo, Xx, Ap, xa, Ip, $p, fr, Ep, Zx, Tp, Jx, No, Fp, Mo, wa, It, Bt, pn, ze, Yt, me, Qx, tS, eS, Sa, rS, hn, nS, ka, oS, Ue = $(()=>{
    "use strict";
    P();
    Hx = [
        "select",
        "rpc",
        "insert",
        "update",
        "delete",
        "subscribe"
    ], qx = {
        supabase: ()=>Promise.resolve().then(function() {
                return require("8f86adca222f5bd8");
            }).then((res)=>(xp(), bp)),
        rest: ()=>Promise.resolve().then(()=>(wp(), _p)),
        local: ()=>Promise.resolve().then(()=>(Cp(), vp))
    }, Fo = Symbol.for("@symbo.ls/fetch:CUSTOM_ADAPTERS"), Op = (()=>{
        if (typeof globalThis < "u" && globalThis[Fo]) return globalThis[Fo];
        let t = {};
        if (typeof globalThis < "u") try {
            return Object.defineProperty(globalThis, Fo, {
                value: t,
                writable: !1,
                configurable: !1,
                enumerable: !1
            }), globalThis[Fo];
        } catch  {}
        return t;
    })(), Gx = (t, e)=>{
        Op[t] = e;
    }, Kx = (t)=>{
        let e = {};
        for (let r of Hx)t[r] && (e[r] = t[r]);
        return e.name = t.name || "custom", e;
    }, Rp = async (t)=>{
        if (!t) return null;
        if (typeof t.select == "function") return t;
        let { adapter: e, ...r } = t, n = typeof e == "string" ? e : typeof t == "string" ? t : null;
        if (!n) return null;
        let o = Op[n] || qx[n];
        if (!o) throw new Error(`Unknown db adapter: "${n}". Use registerAdapter() for adapters with optional deps.`);
        let s = await o();
        if (!s || typeof s.setup != "function") throw new Error(`Adapter "${n}" loader returned a module without a setup() function. Got keys: [${Object.keys(s || {}).join(", ")}]. Likely a bundler chunk-resolution issue.`);
        return s.setup(r);
    }, ln = (t)=>{
        if (!t) return 0;
        if (typeof t == "number") return t;
        let e = t.match(/^(\d+)(ms|s|m|h)$/);
        if (!e) return 0;
        let r = parseInt(e[1]), n = e[2];
        return n === "ms" ? r : n === "s" ? r * 1e3 : n === "m" ? r * 6e4 : n === "h" ? r * 36e5 : 0;
    }, yt = new Map, Pp = new Map, cn = new Map, Yx = (t, e)=>{
        if (t.cache?.key) return t.cache.key;
        let r = Jx(t.params), n = `${t.from}:${t.method}:${JSON.stringify(r || "")}`;
        return e ? `${n}:${e}` : n;
    }, dn = (t)=>yt.get(t) || null, fn = (t, e, r)=>{
        let n = yt.get(t), o = {
            data: e,
            error: r,
            time: Date.now(),
            stale: !1
        };
        yt.set(t, o);
        let s = Pp.get(t);
        if (s) for (let i of s)C(i) && i(o);
        return o;
    }, un = (t)=>{
        if (t) {
            let e = yt.get(t);
            e && (e.stale = !0);
            return;
        }
        for (let [, e] of yt)e.stale = !0;
    }, Do = (t)=>{
        if (t) {
            yt.delete(t);
            return;
        }
        yt.clear();
    }, _a = (t)=>!t && t !== !1 ? {
            staleTime: 6e4,
            gcTime: 3e5
        } : t === !1 ? null : t === !0 ? {
            staleTime: 6e4,
            gcTime: 3e5
        } : typeof t == "number" ? {
            staleTime: t,
            gcTime: Math.max(t * 5, 3e5)
        } : _(t) ? {
            staleTime: ln(t),
            gcTime: 3e5
        } : {
            staleTime: ln(t.stale || t.staleTime) || 6e4,
            gcTime: ln(t.gc || t.gcTime || t.expire) || 3e5,
            key: t.key
        }, Lo = null, Xx = ()=>{
        Lo || (Lo = setInterval(()=>{
            let t = Date.now();
            for (let [e, r] of yt){
                let n = Pp.get(e);
                !(n && n.size > 0) && t - r.time > (r.gcTime || 3e5) && yt.delete(e);
            }
        }, 3e4), Lo.unref && Lo.unref());
    };
    Xx();
    Ap = 3, xa = (t)=>Math.min(1e3 * 2 ** t, 3e4), Ip = (t)=>{
        let e = t.retry;
        return e === !1 ? {
            count: 0
        } : e === !0 || e === void 0 ? {
            count: Ap,
            delay: xa
        } : typeof e == "number" ? {
            count: e,
            delay: xa
        } : {
            count: e.count ?? Ap,
            delay: C(e.delay) ? e.delay : typeof e.delay == "number" ? ()=>e.delay : xa
        };
    }, $p = async (t, e)=>{
        let { count: r, delay: n } = e, o;
        for(let s = 0; s <= r; s++)try {
            let i = await t();
            if (i?.error) {
                if (o = i.error, s < r) {
                    let a = C(n) ? n(s, o) : n;
                    await new Promise((c)=>setTimeout(c, a));
                    continue;
                }
                return i;
            }
            return i;
        } catch (i) {
            if (o = i, s < r) {
                let a = C(n) ? n(s, i) : n;
                await new Promise((c)=>setTimeout(c, a));
                continue;
            }
            throw i;
        }
        return {
            data: null,
            error: o
        };
    }, fr = {
        focus: new Set,
        online: new Set
    }, Ep = !1, Zx = ()=>{
        if (Ep || typeof window > "u") return;
        Ep = !0;
        let t = ()=>{
            for (let r of fr.focus)r();
        }, e = ()=>{
            for (let r of fr.online)r();
        };
        window.addEventListener("visibilitychange", ()=>{
            document.visibilityState === "visible" && t();
        }), window.addEventListener("focus", t), window.addEventListener("online", e);
    }, Tp = (t, e)=>{
        let r = e.__ref;
        if (t === !0) return {
            from: r.__state || e.key,
            method: "select",
            query: !0,
            on: "create"
        };
        if (_(t)) return {
            from: t,
            method: "select",
            query: !0,
            on: "create"
        };
        if (S(t)) {
            let n = {
                ...t
            };
            return n.from = n.from || r.__state || e.key, n.method = n.method || "select", n.on = n.on || "create", n.query === void 0 && (n.query = !0), n;
        }
        return null;
    }, Jx = (t)=>(!t || C(t), t), No = (t, e)=>{
        let r = t?.state?.root || e?.state?.root;
        if (r?.lang) return r.lang;
    }, Fp = (t, e, r)=>{
        let n;
        if (!t) n = void 0;
        else if (C(t)) n = t(e, e.state);
        else {
            n = {};
            for(let o in t){
                let s = t[o];
                n[o] = C(s) ? s(e, e.state) : s;
            }
        }
        return n;
    }, Mo = async (t, e)=>{
        if (!t || t.__authInitialized || (t.__authInitialized = !0, !t.getSession)) return;
        let r = (n, o)=>{
            let s = e.state?.root;
            s?.update && s.update({
                auth: {
                    user: n,
                    session: o,
                    loading: !1
                }
            });
        };
        try {
            let n = await t.getSession();
            r(n?.user || null, n);
        } catch (n) {
            console.warn("[fetch] Failed to restore auth session:", n.message);
        }
        t.onAuthStateChange && t.onAuthStateChange((n, o)=>{
            r(o?.user || null, o);
        });
    }, wa = async (t, e)=>{
        if (C(t.select)) return t.auth !== !1 && await Mo(t, e), t;
        if (t.__resolved) return t.auth !== !1 && await Mo(t.__resolved, e), t.__resolved;
        if (t.__resolving) return t.__resolving;
        t.__resolving = Rp(t);
        let r = await t.__resolving;
        return delete t.__resolving, r ? (r.auth = t.auth, r.url = t.url, r.key = t.key, t.__resolved = r, e.fetch = r, t.auth !== !1 && await Mo(r, e), r) : null;
    }, It = (t, e, ...r)=>{
        let n = C(t[e]) ? t[e] : null;
        n && n.call(t, ...r, t, t.state, t.context);
    }, Bt = (t, e, r, ...n)=>{
        let o = t && C(t[r]) ? t[r] : null;
        o && o.call(e, ...n, e, e.state, e.context);
    }, pn = (t)=>{
        let e = {}, r = t.node;
        if (!r) return e;
        if (r.tagName === "FORM") {
            let o = new FormData(r);
            for (let [s, i] of o.entries())e[s] = i;
            return e;
        }
        let n = r.querySelectorAll("input, textarea, select");
        for(let o = 0; o < n.length; o++){
            let s = n[o], i = s.name || s.getAttribute("name");
            i && (s.type === "checkbox" ? e[i] = s.checked : s.type === "file" ? e[i] = s.files : e[i] = s.value);
        }
        return e;
    }, ze = (t, e, r, n = {})=>{
        let o = r && r.startsWith("~/"), s = o && t.state?.root || t.state;
        if (s?.update) {
            if (o) {
                let i = r.slice(2);
                e && typeof e == "object" && !Array.isArray(e) && i in e ? s.update(e, {
                    preventFetch: !0,
                    ...n
                }) : s.update({
                    [i]: e
                }, {
                    preventFetch: !0,
                    ...n
                });
            } else {
                let i = r ? {
                    [r]: e
                } : e;
                s.update(i, {
                    preventFetch: !0,
                    ...n
                });
            }
        }
    }, Yt = (t, e)=>{
        let r = t?.__ref;
        r && (r.__fetchStatus = e, r.__fetching = e.isFetching, r.__fetchError = e.error);
    }, me = async (t, e, r, n = {})=>{
        let o = r?.fetch;
        if (!o || !e || !e.__ref || t.enabled === !1 || C(t.enabled) && !t.enabled(e, e.state) || t.skip === !0 || C(t.skip) && t.skip(e, e.state)) return;
        let s = await wa(o, r);
        if (!s || !e.__ref) return;
        let i = e.__ref, { from: a, method: c, query: l, params: f, cache: p, transform: u, single: d, auth: h, fields: g, as: m, limit: y, offset: b, order: w, headers: x, baseUrl: v, page: A, cursor: R, getNextPageParam: W, getPreviousPageParam: O, infinite: L, placeholderData: V, initialData: J, select: M, keepPreviousData: I } = t, H = _(M) ? M : void 0;
        if (l && C(e.getQuery)) {
            let K = e.getQuery(s.name || "paths");
            K && (H = K.select || K.length && K.join(",") || H);
        }
        let G = Fp(f, e, r), it = _a(p), Wr = Ip(t), gi = No(e, r), ix = gi ? `:${gi}` : "", nt = it ? p?.key || `${a}:${c}:${JSON.stringify(G || "")}${L ? ":infinite" : ""}${A ? ":p" + JSON.stringify(A) : ""}${ix}` : null;
        if (!i.__fetchInitialized && nt && (i.__fetchInitialized = !0, J !== void 0)) {
            let K = C(J) ? J() : J;
            fn(nt, K, null);
        }
        if ((c === "select" || c === "rpc") && nt && it) {
            let K = dn(nt);
            if (K && !K.error) {
                let z = Date.now() - K.time, rt = K.stale || z > (it.staleTime || 0), B = K.data;
                if (C(M) && (B = M(B, e, e.state)), u && (B = u(B, e, e.state)), ze(e, B, m), !rt) {
                    Yt(e, {
                        isFetching: !1,
                        isLoading: !1,
                        isStale: !1,
                        isSuccess: !0,
                        error: null,
                        status: "success",
                        fetchStatus: "idle"
                    });
                    return;
                }
            } else if (V !== void 0) {
                let z = C(V) ? V(e, e.state) : V;
                z !== void 0 && ze(e, z, m);
            }
        }
        if (nt && cn.has(nt) && !n.force) {
            let K = cn.get(nt);
            try {
                let z = await Promise.race([
                    K,
                    new Promise((rt, B)=>setTimeout(()=>B("DEDUP_TIMEOUT"), 15e3))
                ]);
                if (z?.data !== void 0) {
                    let rt = z.data;
                    C(M) && (rt = M(rt, e, e.state)), u && (rt = u(rt, e, e.state)), ze(e, rt, m), It(e, "onFetchComplete", rt), Bt(t, e, "onFetchComplete", rt);
                }
            } catch  {}
            return;
        }
        let ax = !dn(nt)?.data;
        Yt(e, {
            isFetching: !0,
            isLoading: ax,
            isStale: !1,
            isSuccess: !1,
            error: null,
            status: "pending",
            fetchStatus: "fetching"
        }), It(e, "onFetchStart"), Bt(t, e, "onFetchStart");
        let re = r?.analyze?.emitNetwork, mi = re ? typeof performance < "u" ? performance.now() : Date.now() : 0;
        re && re({
            phase: "start",
            mode: "query",
            from: a,
            method: c,
            cacheKey: nt,
            lang: gi
        });
        let _f = $p(async ()=>{
            if (h !== !1 && s.auth !== !1 && s.getSession) {
                let B = await s.getSession();
                if (h === !0 && !B) {
                    let gt = {
                        message: "Not authenticated"
                    };
                    return Yt(e, {
                        isFetching: !1,
                        isLoading: !1,
                        isStale: !1,
                        isSuccess: !1,
                        error: gt,
                        status: "error",
                        fetchStatus: "idle"
                    }), It(e, "onFetchError", gt), Bt(t, e, "onFetchError", gt), {
                        data: null,
                        error: gt
                    };
                }
            }
            let K = s[c];
            if (!C(K)) return {
                data: null,
                error: {
                    message: `Method "${c}" not found on adapter`
                }
            };
            let z = {
                from: a,
                select: H,
                params: G,
                single: d,
                limit: y,
                offset: b,
                order: w,
                headers: x,
                baseUrl: v
            }, rt = No(e, r);
            if (rt && (z.headers = {
                ...z.headers,
                "Accept-Language": rt
            }), A !== void 0) {
                if (S(A)) A.offset !== void 0 && (z.offset = A.offset), A.limit !== void 0 && (z.limit = A.limit), A.cursor !== void 0 && (z.params = {
                    ...z.params,
                    cursor: A.cursor
                });
                else if (typeof A == "number") {
                    let B = t.pageSize || y || 20;
                    z.offset = (A - 1) * B, z.limit = B;
                }
            }
            if (R !== void 0 && (z.params = {
                ...z.params,
                cursor: R
            }), c === "insert" || c === "update" || c === "upsert") {
                let B;
                if (g === !0 || t.on === "submit") B = pn(e);
                else if (T(g)) {
                    let gt = pn(e);
                    B = {};
                    for (let yi of g)B[yi] = gt[yi];
                } else e.state?.parse ? B = e.state.parse() : S(e.state) && (B = {
                    ...e.state
                });
                u && (B = u(B, e, e.state)), z.data = B;
            }
            if (c === "rpc") {
                let B = G;
                if (t.on === "submit") {
                    let gt = pn(e);
                    B = t.transformParams ? t.transformParams(gt, e, e.state) : gt;
                }
                z.params = B;
            }
            if (c === "subscribe") {
                let B = s.subscribe({
                    from: a,
                    params: G,
                    on: t.subscribeOn
                }, (gt, yi, pv)=>{
                    ze(e, gt, m), It(e, "onFetchComplete", gt), Bt(t, e, "onFetchComplete", gt);
                });
                return i.__unsubscribe = B, {
                    data: null,
                    error: null,
                    subscribed: !0
                };
            }
            return K(z);
        }, Wr);
        nt && cn.set(nt, _f);
        try {
            let K = await _f;
            if (K?.subscribed) return;
            let { data: z, error: rt } = K || {};
            if (rt) {
                nt && fn(nt, null, rt), Yt(e, {
                    isFetching: !1,
                    isLoading: !1,
                    isStale: !1,
                    isSuccess: !1,
                    error: rt,
                    status: "error",
                    fetchStatus: "idle"
                }), It(e, "onFetchError", rt), Bt(t, e, "onFetchError", rt), re && re({
                    phase: "error",
                    mode: "query",
                    from: a,
                    method: c,
                    cacheKey: nt,
                    error: rt.message || rt,
                    durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - mi
                });
                return;
            }
            if (z !== void 0) {
                if ((c === "select" || c === "rpc") && nt) {
                    let gt = fn(nt, z, null);
                    gt.gcTime = it?.gcTime || 3e5;
                }
                let B = z;
                L && T(z) && (i.__pages || (i.__pages = []), n.direction === "previous" ? i.__pages.unshift(z) : i.__pages.push(z), B = i.__pages.flat(), W && (i.__nextPageParam = W(z, i.__pages), i.__hasNextPage = i.__nextPageParam != null), O && (i.__prevPageParam = O(z, i.__pages), i.__hasPreviousPage = i.__prevPageParam != null)), C(M) && (B = M(B, e, e.state)), u && (B = u(B, e, e.state)), (!I || B !== void 0) && ze(e, B, m), Yt(e, {
                    isFetching: !1,
                    isLoading: !1,
                    isStale: !1,
                    isSuccess: !0,
                    error: null,
                    status: "success",
                    fetchStatus: "idle"
                }), It(e, "onFetchComplete", B), Bt(t, e, "onFetchComplete", B), re && re({
                    phase: "success",
                    mode: "query",
                    ok: !0,
                    from: a,
                    method: c,
                    cacheKey: nt,
                    durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - mi
                });
            }
        } catch (K) {
            Yt(e, {
                isFetching: !1,
                isLoading: !1,
                isStale: !1,
                isSuccess: !1,
                error: K,
                status: "error",
                fetchStatus: "idle"
            }), It(e, "onFetchError", K), Bt(t, e, "onFetchError", K), re && re({
                phase: "error",
                mode: "query",
                from: a,
                method: c,
                cacheKey: nt,
                error: K.message || String(K),
                durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - mi
            });
        } finally{
            nt && cn.delete(nt);
        }
    }, Qx = (t, e, r)=>{
        let n = t.on, o = e.__ref;
        o.__fetchListeners || (o.__fetchListeners = []);
        let s = t.__runner || me;
        if (n === "submit") {
            let i = (c)=>{
                c.preventDefault(), s(t, e, r);
            }, a = e.node;
            a && (a.addEventListener("submit", i), o.__fetchListeners.push(()=>a.removeEventListener("submit", i)));
        } else if (n === "click") {
            let i = ()=>s(t, e, r), a = e.node;
            a && (a.addEventListener("click", i), o.__fetchListeners.push(()=>a.removeEventListener("click", i)));
        } else n === "stateChange" && (o.__fetchOnStateChange = ()=>s(t, e, r));
    }, tS = (t, e, r)=>{
        let n = e.__ref;
        n.__fetchCleanups || (n.__fetchCleanups = []), Zx();
        let o = t.refetchInterval;
        if (o) {
            let s = typeof o == "number" ? o : ln(o);
            if (s > 0) {
                let i = setInterval(()=>{
                    (t.refetchIntervalInBackground || typeof document > "u" || document.visibilityState === "visible") && me(t, e, r, {
                        force: !0
                    });
                }, s);
                n.__fetchCleanups.push(()=>clearInterval(i));
            }
        }
        if (t.refetchOnWindowFocus !== !1) {
            let s = ()=>{
                let i = No(e, r), a = Yx(t, i), c = dn(a), l = _a(t.cache);
                (!c || c.stale || Date.now() - c.time > (l?.staleTime || 0)) && me(t, e, r, {
                    force: !0
                });
            };
            fr.focus.add(s), n.__fetchCleanups.push(()=>fr.focus.delete(s));
        }
        if (t.refetchOnReconnect !== !1) {
            let s = ()=>me(t, e, r, {
                    force: !0
                });
            fr.online.add(s), n.__fetchCleanups.push(()=>fr.online.delete(s));
        }
    }, eS = (t, e, r)=>{
        if (!e.optimistic) return null;
        let n = t.__ref, o = e.as, s = t.state?.parse ? t.state.parse() : S(t.state) ? {
            ...t.state
        } : t.state;
        n.__optimisticSnapshot = s;
        let i = C(e.optimistic) ? e.optimistic(r, s, t) : e.optimistic;
        return i !== void 0 && ze(t, i, o), s;
    }, Sa = (t, e)=>{
        let r = t.__ref, n = r.__optimisticSnapshot;
        n !== void 0 && (ze(t, n, e.as), delete r.__optimisticSnapshot);
    }, rS = async (t, e, r)=>{
        let n = r?.fetch;
        if (!n) return;
        let o = await wa(n, r);
        if (!o) return;
        let s = e.__ref, { method: i, from: a, fields: c, transform: l, as: f, on: p, auth: u, headers: d, baseUrl: h, invalidates: g, optimistic: m, onMutate: y, onSuccess: b, onError: w, onSettled: x } = t, v;
        if (c === !0 || p === "submit") v = pn(e);
        else if (T(c)) {
            let O = pn(e);
            v = {};
            for (let L of c)v[L] = O[L];
        } else e.state?.parse ? v = e.state.parse() : S(e.state) && (v = {
            ...e.state
        });
        l && (v = l(v, e, e.state)), C(y) && y(v, e, e.state);
        let A = m ? eS(e, t, v) : null;
        s.__fetching = !0, Yt(e, {
            isFetching: !0,
            isLoading: !1,
            isStale: !1,
            isSuccess: !1,
            error: null,
            status: "pending",
            fetchStatus: "fetching"
        }), It(e, "onFetchStart"), Bt(t, e, "onFetchStart");
        let R = r?.analyze?.emitNetwork, W = R ? typeof performance < "u" ? performance.now() : Date.now() : 0;
        R && R({
            phase: "start",
            mode: "mutation",
            from: a,
            method: i
        });
        try {
            if (u !== !1 && o.auth !== !1 && o.getSession) {
                let G = await o.getSession();
                if (u === !0 && !G) {
                    A !== void 0 && Sa(e, t);
                    let it = {
                        message: "Not authenticated"
                    };
                    It(e, "onFetchError", it), Bt(t, e, "onFetchError", it);
                    return;
                }
            }
            let O = o[i];
            if (!C(O)) return;
            let L = {
                from: a,
                data: v,
                headers: d,
                baseUrl: h
            };
            t.params && (L.params = Fp(t.params, e, r));
            let V = No(e, r);
            V && (L.headers = {
                ...L.headers,
                "Accept-Language": V
            });
            let J = Ip(t), M = await $p(()=>O(L), J), { data: I, error: H } = M || {};
            if (H) {
                A !== void 0 && Sa(e, t), Yt(e, {
                    isFetching: !1,
                    isLoading: !1,
                    isStale: !1,
                    isSuccess: !1,
                    error: H,
                    status: "error",
                    fetchStatus: "idle"
                }), It(e, "onFetchError", H), C(w) && w(H, v, e), C(x) && x(null, H, v, e), R && R({
                    phase: "error",
                    mode: "mutation",
                    from: a,
                    method: i,
                    error: H.message || String(H),
                    durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - W
                });
                return;
            }
            if (delete s.__optimisticSnapshot, I !== void 0) {
                let G = f ? {
                    [f]: I
                } : I;
                e.state?.update && e.state.update(G, {
                    preventFetch: !0
                });
            }
            if (Yt(e, {
                isFetching: !1,
                isLoading: !1,
                isStale: !1,
                isSuccess: !0,
                error: null,
                status: "success",
                fetchStatus: "idle"
            }), It(e, "onFetchComplete", I), Bt(t, e, "onFetchComplete", I), C(b) && b(I, v, e), C(x) && x(I, null, v, e), R && R({
                phase: "success",
                mode: "mutation",
                ok: !0,
                from: a,
                method: i,
                durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - W
            }), g) {
                let G = T(g) ? g : [
                    g
                ];
                for (let it of G)if (it === !0 || it === "*") for (let [Wr] of yt)Wr.startsWith(a + ":") && un(Wr);
                else un(it);
            }
        } catch (O) {
            A !== void 0 && Sa(e, t), Yt(e, {
                isFetching: !1,
                isLoading: !1,
                isStale: !1,
                isSuccess: !1,
                error: O,
                status: "error",
                fetchStatus: "idle"
            }), It(e, "onFetchError", O), Bt(t, e, "onFetchError", O), C(w) && w(O, v, e), C(x) && x(null, O, v, e), R && R({
                phase: "error",
                mode: "mutation",
                from: a,
                method: i,
                error: O.message || String(O),
                durationMs: (typeof performance < "u" ? performance.now() : Date.now()) - W
            });
        } finally{
            s.__fetching = !1;
        }
    }, hn = (t, e, r, n)=>{
        if (!t || !n?.fetch) return;
        let s = X(t, e);
        if (!s) return;
        let i = T(s) ? s.map((c)=>Tp(X(c, e), e)).filter(Boolean) : [
            Tp(s, e)
        ].filter(Boolean);
        for (let c of i){
            let l = c.method === "insert" || c.method === "update" || c.method === "upsert" || c.method === "delete", f = l ? rS : me;
            c.on === "create" ? f(c, e, n) : Promise.resolve().then(()=>{
                Qx({
                    ...c,
                    __runner: f
                }, e, n);
            }), !l && c.on === "create" && (c.refetchInterval || c.refetchOnWindowFocus !== !1 || c.refetchOnReconnect !== !1) && tS(c, e, n);
        }
        let a = e.__ref;
        a.refetch = (c)=>{
            for (let l of i)me(l, e, n, {
                force: !0,
                ...c
            });
        }, a.fetchNextPage = ()=>{
            let c = i[0];
            if (!c || !c.infinite) return;
            let l = a.__nextPageParam;
            if (l == null) return;
            let f = {
                ...c,
                cursor: l
            };
            me(f, e, n, {
                direction: "next",
                force: !0
            });
        }, a.fetchPreviousPage = ()=>{
            let c = i[0];
            if (!c || !c.infinite) return;
            let l = a.__prevPageParam;
            if (l == null) return;
            let f = {
                ...c,
                cursor: l
            };
            me(f, e, n, {
                direction: "previous",
                force: !0
            });
        };
    }, nS = {
        invalidateQueries: (t)=>{
            if (!t) {
                un();
                return;
            }
            if (_(t)) for (let [e] of yt)(e.startsWith(t) || e.includes(t)) && un(e);
            else if (T(t)) {
                let e = t.join(":");
                for (let [r] of yt)r.includes(e) && un(r);
            }
        },
        removeQueries: (t)=>{
            if (!t) {
                Do();
                return;
            }
            if (_(t)) for (let [e] of yt)(e.startsWith(t) || e.includes(t)) && Do(e);
        },
        getQueryData: (t)=>dn(t)?.data ?? void 0,
        setQueryData: (t, e)=>{
            let r = dn(t), n = C(e) ? e(r?.data) : e;
            fn(t, n, null);
        },
        prefetchQuery: async (t, e)=>{
            let r = e?.fetch;
            if (!r) return;
            let n = await wa(r, e);
            if (!n) return;
            let o = t.cache?.key || `${t.from}:${t.method || "select"}:${JSON.stringify(t.params || "")}`, s = n[t.method || "select"];
            if (!C(s)) return;
            let i = await s({
                from: t.from,
                params: t.params,
                limit: t.limit,
                offset: t.offset,
                order: t.order,
                single: t.single
            });
            if (i?.data !== void 0 && !i?.error) {
                let a = fn(o, i.data, null);
                a.gcTime = _a(t.cache)?.gcTime || 3e5;
            }
            return i;
        },
        getCache: ()=>yt,
        clear: ()=>Do(),
        dropNonLang: (t)=>{
            if (!t) return;
            let e = `:${t}`;
            for (let [r] of yt)r.match(/:([a-z]{2,3})$/i) && (r.endsWith(e) || Do(r));
        }
    }, ka = {
        name: "fetch",
        create (t) {
            let e = t.fetch;
            e && (t.parent || cn.clear(), hn(e, t, t.state, t.context));
        }
    }, oS = hn;
});
function Bo(t) {
    let e = this, { __ref: r } = e, n = [].concat(t), o = r.root[n[0]];
    if (!n || !n.length) return console.log(n, "on", e.key, "is undefined");
    for(; o.key === n[0] && (n.shift(), !!n.length);)if (o = o[n[0]], !o) return;
    return o;
}
function Lp(t) {
    let e = this, { parent: r } = e;
    if (C(t)) return r.state && t(r, r.state, r.context) ? r : r.parent ? r.lookup(t) : void 0;
    if (e[t]) return e[t];
    for(; r.param !== t;){
        if (r[t]) return r[t];
        if (r = r.parent, !r) return;
    }
    return r;
}
function Mp(t) {
    let e = this, { __ref: r } = e, n = r?.__children;
    if (n) for(let o = 0; o < n.length; o++){
        let s = n[o], i = e[s];
        if (s === t) return i;
        if (C(t)) {
            let c = t(i, i.state, i.context);
            if (i.state && c) return i;
        }
        let a = i?.lookdown?.(t);
        if (a) return a;
    }
}
function Np(t, e = []) {
    let r = this, { __ref: n } = r, o = n?.__children;
    if (o) {
        for(let s = 0; s < o.length; s++){
            let i = o[s], a = r[i];
            if (i === t) e.push(a);
            else if (C(t)) {
                let c = t(a, a.state, a.context);
                a.state && c && e.push(a);
            }
            a?.lookdownAll?.(t, e);
        }
        return e.length ? e : void 0;
    }
}
function Ca(t = {}) {
    let e = this;
    if (e.node?.style) {
        for(let r in t){
            let n = t[r], o = e[r];
            if (S(n) && o) Ca.call(o, n);
            else if (n != null) {
                let s = r.replace(/[A-Z]/g, (a)=>"-" + a.toLowerCase()), i = String(n).replace(/\s*!important\s*$/, "");
                e.node.style.setProperty(s, i, "important");
            }
        }
        return e;
    }
}
function jp(t) {
    let e = this;
    if (Ve("beforeRemove", e, t) === !1) return e;
    C(e.node.remove) ? e.node.remove() : je() || (console.warn("This item cant be removed"), e.log()), delete e.parent[e.key], e.parent.__ref && (e.parent.__ref.__children = no(e.parent.__ref.__children, e.key)), Ve("remove", e, t);
}
function Bp(t) {
    return this[t];
}
function Vp(t, e) {
    let r = this;
    if (t) return r.update(t, e), r;
}
function zp(t) {
    return t ? this.__ref && this.__ref[t] : this.__ref;
}
function Vo() {
    return this.getRef("__children").map((e)=>this[e]);
}
function zo() {
    return this.getRef().path;
}
function Wo(t) {
    let e = null, r = (n)=>n.__element && n.root?.isRootState;
    if (!this) e = Dp();
    else if (r(this)) e = this.root;
    else if (this.__ref && this.__ref.path) {
        let n = this.state && r(this.state), o = C(this.state) && this.parent.state && r(this.parent.state);
        (n || o) && (e = this.state.root || this.parent.state.root);
    }
    return e || (e = Dp()), t ? e?.[t] : e;
}
function Ho(t) {
    let e = this.getRootState()?.__element;
    return e && Object.keys(e).length > 0 && t ? e[t] : e;
}
function qo(t) {
    return this.getRoot("data") && Object.keys(this.getRoot("data")).length > 0 && t ? this.getRoot("data")[t] : this.getRoot("data");
}
function Go(t) {
    let e = this.getRoot()?.context;
    return t ? e[t] : e;
}
function Ko(t) {
    let e = this.context;
    return t ? e[t] : e;
}
function Aa() {
    let t = this, e = [];
    for(let r in t)!Object.prototype.hasOwnProperty.call(t, r) || De.has(r) && !io.has(r) || e.push(r);
    return e;
}
function Ea(t = []) {
    let e = this, r = {}, n = Aa.call(e), o = n.includes("children"), s = t.length ? new Set(t) : null;
    for(let i = 0; i < n.length; i++){
        let a = n[i];
        if (s && s.has(a) || !Object.prototype.hasOwnProperty.call(e, a) || o && a === "content") continue;
        let c = e[a];
        if (a === "state") {
            if (e.__ref && !e.__ref.__hasRootState) continue;
            let l = C(c && c.parse) ? c.parse() : c;
            r[a] = C(l) ? l : JSON.parse(JSON.stringify(l || {}));
        } else if (a === "scope") {
            if (e.__ref && !e.__ref.__hasRootScope) continue;
            r[a] = JSON.parse(JSON.stringify(c || {}));
        } else if (a === "props") {
            let { __element: l, update: f, ...p } = e[a];
            r[a] = p;
        } else vt(c) && Object.prototype.hasOwnProperty.call(e, a) && (r[a] = c);
    }
    return r;
}
function jo(t = [], e = new WeakSet) {
    let r = this;
    if (e.has(r)) return;
    e.add(r);
    let n = Ea.call(r, t), o = t.length ? new Set(t) : null;
    for(let s in n){
        if (o && o.has(s) || !Object.prototype.hasOwnProperty.call(r, s)) continue;
        let i = n[s];
        Array.isArray(i) ? n[s] = i.map((a)=>N(a) ? jo.call(a, t, e) : a) : N(i) && (n[s] = jo.call(i, t, e));
    }
    return n;
}
function mn(...t) {
    if (ye !== "test" && ye !== "development") return;
    let e = this, { __ref: r } = e;
    return console.groupCollapsed(e.key), t.length ? t.forEach((n)=>console.log(`%c${n}:
`, "font-weight: bold", e[n])) : (console.log(r.path), e.keys().forEach((o)=>console.log(`%c${o}:`, "font-weight: bold", e[o]))), console.log(e), console.groupEnd(e.key), e;
}
function Hp(...t) {
    (ye === "test" || ye === "development") && console.log(...t);
}
function Yo(...t) {
    (ye === "test" || ye === "development") && console.warn(...t);
}
function ur(...t) {
    if (ye === "test" || ye === "development") {
        if (t[t.length - 1]?.debugger) debugger;
        throw t[t.length - 1]?.verbose && mn.call(this), new Error(...t);
    }
}
function Xo() {
    let t = this, { key: e, parent: r } = t, { __children: n } = r.__ref, o = n.indexOf(e), s = n[o + 1];
    return r[s];
}
function Zo(t) {
    let e = t || this, { key: r, parent: n } = e, { __children: o } = n.__ref;
    if (!o) return;
    let s = o.indexOf(r);
    return n[o[s - 1]];
}
function Jo(t = {}) {
    let e = this;
    e.data || (e.data = {}), e.data.varCaches || (e.data.varCaches = {});
    let r = e.data.varCaches, n = {}, o;
    for(let s in t)t[s] !== r[s] && (o = !0, n[s] = t[s]);
    return {
        changed: (s)=>{
            if (!o) return;
            let i = s(n, Q(r));
            for(let a in n)r[a] = n[a];
            return i;
        },
        timeout: (s, i)=>{
            if (!o) return;
            let a = setTimeout(()=>{
                s(n), clearTimeout(a);
            }, i);
        }
    };
}
function qp(t, ...e) {
    let r = this.context, n = r.utils?.[t] || r.functions?.[t] || r.methods?.[t] || r.snippets?.[t];
    if (n) try {
        let o = n.call(this, ...e);
        return o && typeof o.then == "function" && o.catch((s)=>{
            ur.call(this, s);
        }), o;
    } catch (o) {
        if (ur.call(this, o), r?.strictMode) throw o;
    }
}
async function Qo() {
    let t = this, e = t.context?.fetch;
    if (!e) return null;
    if (typeof e.select == "function") {
        if (!e.__authInitialized && e.getSession) {
            let { initAdapterAuth: o } = await Promise.resolve().then(()=>(Ue(), gn));
            await o(e, t.context);
        }
        return e;
    }
    if (e.__resolved) {
        if (!e.__resolved.__authInitialized && e.__resolved.getSession) {
            let { initAdapterAuth: o } = await Promise.resolve().then(()=>(Ue(), gn));
            await o(e.__resolved, t.context);
        }
        return e.__resolved;
    }
    if (e.__resolving) return e.__resolving;
    let r = Promise.resolve().then(()=>(Ue(), gn)).then(({ resolveDb: o })=>o(e));
    e.__resolving = r;
    let n = await r;
    if (e.__resolved = n, t.context.fetch = n, delete e.__resolving, n?.getSession) {
        let { initAdapterAuth: o } = await Promise.resolve().then(()=>(Ue(), gn));
        await o(n, t.context);
    }
    return n;
}
function ts(t) {
    let e = this, r = t || $o.useStateQuery || e.context?.useStateQuery;
    if (!r) return null;
    let n = {};
    if (va(e, n), r === !0) return n;
    let o = pS[r];
    return o ? o(n) : n;
}
function Kp(t, e) {
    return !!(tn.has(t) || e?.context?.methods?.[t]);
}
var ye, Up, Uo, Dp, Wp, va, sS, Gp, iS, aS, cS, lS, fS, uS, pS, Yp = $(()=>{
    "use strict";
    ga();
    ir();
    ut();
    se();
    Fi();
    nr();
    ma();
    ye = "production";
    Up = null, Uo = (t)=>{
        Up = t || null;
    }, Dp = ()=>Up || null;
    Wp = (t, e, r, n)=>Object.defineProperty(t, e, {
            get: r,
            set: n
        });
    va = (t, e)=>{
        let r = t.__ref;
        if (!r) return;
        let n = r.__state;
        n && typeof n == "string" && sS(e, n);
        let o = r.__children;
        if (o) for(let a = 0; a < o.length; a++){
            let c = t[o[a]];
            c && c.__ref && va(c, e);
        }
        let s = r.contentElementKey || "content", i = t[s];
        i && i.__ref && va(i, e);
    }, sS = (t, e)=>{
        let n = e.replaceAll("../", "").replaceAll("~/", "").split("/"), o = t;
        for(let s = 0; s < n.length; s++){
            let i = n[s];
            s === n.length - 1 ? o[i] || (o[i] = !0) : (o[i] === !0 && (o[i] = {}), o[i] || (o[i] = {}), o = o[i]);
        }
    }, Gp = (t, e = 0)=>{
        let r = "  ".repeat(e), n = Object.entries(t);
        return n.length ? n.map(([s, i])=>i === !0 ? `${r}${s}` : `${r}${s} {
${Gp(i, e + 1)}
${r}}`).join(`
`) : "";
    }, iS = (t)=>`{
${Gp(t, 1)}
}`, aS = (t)=>{
        let e = {
            fields: {},
            include: []
        }, r = (n, o)=>{
            let s = [];
            for(let i in n)if (n[i] === !0) s.push(i);
            else {
                let a = o ? `${o}.${i}` : i;
                e.include.push(a), r(n[i], a);
            }
            s.length && (e.fields[o || "_root"] = s);
        };
        return r(t, ""), e;
    }, cS = (t)=>{
        let e = (s)=>{
            let i = [], a = [];
            for(let c in s)if (s[c] === !0) i.push(c);
            else {
                let l = e(s[c]), f = [];
                l.select && f.push(`$select=${l.select}`), l.expand && f.push(`$expand=${l.expand}`), a.push(f.length ? `${c}(${f.join(";")})` : c);
            }
            return {
                select: i.length ? i.join(",") : "",
                expand: a.length ? a.join(",") : ""
            };
        }, { select: r, expand: n } = e(t), o = [];
        return r && o.push(`$select=${r}`), n && o.push(`$expand=${n}`), o.join("&");
    }, lS = (t, e)=>{
        let r = [], n = [], o = new Set, s = (f, p, u)=>{
            o.add(p), u && n.push(`LEFT JOIN ${p} ON ${p}.${u}_id = ${u}.id`);
            for(let d in f)f[d] === !0 ? r.push(`${p}.${d}`) : s(f[d], d, p);
        }, i = Object.keys(t);
        i.length === 1 && t[i[0]] !== !0 ? s(t[i[0]], i[0], null) : s(t, "_root", null);
        let a = [
            ...o
        ][0] || "_root", c = r.length ? r.join(", ") : "*", l = n.length ? `
` + n.join(`
`) : "";
        return `SELECT ${c}
FROM ${a}${l}`;
    }, fS = (t)=>{
        let e = [], r = (n, o)=>{
            for(let s in n){
                let i = o ? `${o}/${s}` : s;
                n[s] === !0 ? e.push(i) : r(n[s], i);
            }
        };
        return r(t, ""), e;
    }, uS = (t)=>{
        let e = (n)=>{
            let o = [];
            for(let s in n)n[s] === !0 ? o.push(s) : o.push(`${s}(${e(n[s])})`);
            return o.join(", ");
        }, r = Object.keys(t);
        return r.length === 1 && t[r[0]] !== !0 ? {
            from: r[0],
            select: e(t[r[0]])
        } : {
            from: null,
            select: e(t)
        };
    }, pS = {
        graphql: iS,
        "json-api": aS,
        odata: cS,
        sql: lS,
        supabase: uS,
        paths: fS
    };
});
var dS, Xp, Zp = $(()=>{
    "use strict";
    mo();
    dS = {
        snapshotId: ho
    }, Xp = (t, e)=>{
        let r = t.__ref, { currentSnapshot: n, calleeElement: o } = e;
        if (!o || o === t) {
            let a = dS.snapshotId();
            return r.__currentSnapshot = a, [
                a,
                t
            ];
        }
        let i = o.__ref.__currentSnapshot;
        return n < i ? [
            i,
            o,
            !0
        ] : [
            i,
            o
        ];
    };
});
var Ta, Jp, Qp = $(()=>{
    Ta = new Set([
        "__proto__",
        "constructor",
        "prototype",
        "_id",
        "__v",
        "id",
        "createdAt",
        "updatedAt",
        "schema"
    ]), Jp = (t)=>typeof t == "string" && Ta.has(t);
});
async function td(t) {
    if (document.fullscreenElement) await document.exitFullscreen();
    else try {
        await (this.node || document).requestFullscreen();
    } catch (e) {
        console.warn(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`);
    }
}
var ed = $(()=>{
    "use strict";
});
function hS(t) {
    return /^[0-9.]+$/.test(t) && t !== "";
}
var Xt, We, yn, Zt, rd, nd = $(()=>{
    "use strict";
    Xt = {
        skypack: {
            url: "https://cdn.skypack.dev",
            formatUrl: (t, e)=>`${Xt.skypack.url}/${t}${e !== "latest" ? `@${e}` : ""}`
        },
        esmsh: {
            url: "https://esm.sh",
            formatUrl: (t, e)=>`${Xt.esmsh.url}/${t}${e !== "latest" ? `@${e}` : ""}`
        },
        unpkg: {
            url: "https://unpkg.com",
            formatUrl: (t, e)=>`${Xt.unpkg.url}/${t}${e !== "latest" ? `@${e}` : ""}?module`
        },
        jsdelivr: {
            url: "https://cdn.jsdelivr.net/npm",
            formatUrl: (t, e)=>`${Xt.jsdelivr.url}/${t}${e !== "latest" ? `@${e}` : ""}/+esm`
        },
        symbols: {
            url: "https://pkg.symbo.ls",
            formatUrl: (t, e)=>t.split("/").length > 2 || !hS(e) ? `${Xt.symbols.url}/${t}` : `${Xt.symbols.url}/${t}/${e}.js`
        }
    }, We = {
        "esm.sh": "esmsh",
        unpkg: "unpkg",
        skypack: "skypack",
        jsdelivr: "jsdelivr",
        "pkg.symbo.ls": "symbols"
    }, yn = (t = {})=>{
        let { packageManager: e } = t;
        return We[e] || null;
    }, Zt = (t, e = "latest", r = "esmsh")=>(Xt[r] || Xt.esmsh).formatUrl(t, e), rd = (t, e = "skypack")=>{
        let r = t.dependencies || {}, n = Object.keys(r);
        if (!n.length) return "";
        let o = {};
        for (let s of n){
            let i = r[s] || "latest";
            o[s] = Zt(s, i, e);
        }
        return `<script type="importmap">{
    "imports": ${JSON.stringify(o, null, 2)}
  }<\/script>`;
    };
});
var od, sd = $(()=>{
    "use strict";
    od = (t)=>{
        if (!t) return "";
        let e = new Date(t), r = new Intl.DateTimeFormat("en", {
            year: "numeric"
        }).format(e), n = new Intl.DateTimeFormat("en", {
            month: "short"
        }).format(e);
        return `${new Intl.DateTimeFormat("en", {
            day: "2-digit"
        }).format(e)} ${n}, ${r}`;
    };
});
var id, ad = $(()=>{
    "use strict";
    id = (t, e)=>{
        let r = setTimeout(()=>{
            let { props: n } = t;
            if (!e.clientHeight) {
                let { node: { clientHeight: o } } = t;
                o && (e.clientHeight = o);
            }
            if (e.active) {
                if (n.height === "auto") return;
                t.update({
                    height: e.clientHeight
                }, {
                    preventBeforeUpdateListener: !0,
                    preventChildrenUpdate: !0
                });
                let o = setTimeout(()=>{
                    t.update({
                        height: "auto"
                    }, {
                        preventBeforeUpdateListener: !0,
                        preventChildrenUpdate: !0
                    }), clearTimeout(o);
                }, 450);
            } else t.update({
                height: "0"
            }, {
                preventBeforeUpdateListener: !0,
                preventChildrenUpdate: !0
            });
            clearTimeout(r);
        });
    };
});
var cd, ld = $(()=>{
    "use strict";
    cd = function(e) {
        let r = [
            0,
            1
        ];
        for(let n = 2; n <= e; n++)r[n] = r[n - 1] + r[n - 2];
        return r[e];
    };
});
var fd, ud = $(()=>{
    "use strict";
    fd = (t)=>[
            "jpeg",
            "gif",
            "jpg",
            "png",
            "tiff",
            "woff"
        ].includes(t);
});
function bn(t, e = {}) {
    let { window: r = globalThis } = e, { document: n = r.document } = e;
    return new Promise((o, s)=>{
        let i = n.querySelector(`script[src="${t}"]`);
        if (i) return o(i);
        let a = n.createElement("script");
        a.src = t, a.async = e.async === !0, a.type = e.type || "text/javascript", e.id && (a.id = e.id), e.integrity && (a.integrity = e.integrity), e.crossOrigin && (a.crossOrigin = e.crossOrigin), a.onload = ()=>{
            a.onerror = a.onload = null, o(a);
        }, a.onerror = ()=>{
            a.onerror = a.onload = null, s(new Error(`Failed to load script: ${t}`));
        }, n.head.appendChild(a);
    });
}
async function yd(t, e = {}) {
    let { window: r = globalThis } = e, { document: n = r.document } = e;
    return new Promise((o, s)=>{
        let i = n.querySelector(`link[href="${t}"]`);
        if (i) return o(i);
        let a = n.createElement("link");
        a.href = t, a.rel = e.rel || "stylesheet", a.type = "text/css", a.media = e.media || "all", e.id && (a.id = e.id), e.integrity && (a.integrity = e.integrity), e.crossOrigin && (a.crossOrigin = e.crossOrigin), a.onload = ()=>{
            a.onerror = a.onload = null, o(a);
        }, a.onerror = ()=>{
            a.onerror = a.onload = null, s(new Error(`Failed to load stylesheet: ${t}`));
        }, n.head.appendChild(a);
    });
}
var pd, dd, hd, gd, md, bd = $(()=>{
    "use strict";
    pd = (t, e = !1, r = document, n = "text/javascript")=>new Promise((o, s)=>{
            try {
                let i = r.createElement("script");
                i.type = n, i.async = e, i.src = t, i.addEventListener("load", (a)=>{
                    o({
                        status: !0
                    });
                }), i.addEventListener("error", (a)=>{
                    s(new Error({
                        status: !1,
                        message: `Failed to load the script ${t}`
                    }));
                }), r.body.appendChild(i);
            } catch (i) {
                s(i);
            }
        }), dd = (t, e = document, r = "text/javascript")=>new Promise((n, o)=>{
            let s = e.createElement("script");
            s.type = r, s.src = t;
            let i = e.createElement("div");
            i.style.cssText = "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.8);z-index:9999;", e.body.appendChild(i), s.onload = ()=>{
                console.log(`Successfully loaded: ${t}`), e.body.removeChild(i), n();
            }, s.onerror = ()=>{
                e.body.removeChild(i), o(new Error(`Failed to load: ${t}`));
            }, e.body.appendChild(s);
        }), hd = (t, e = document, r, n = "text/javascript")=>{
        let o = new window.XMLHttpRequest;
        if (o.open("GET", t, !1), o.send(), o.status === 200) {
            let s = e.createElement("script");
            s.type = n, s.text = o.responseText, e.body.appendChild(s), typeof r == "function" && r();
        } else throw new Error(`Failed to load the script ${t}`);
    }, gd = (t, e = !1, r = document, n = "text/javascript")=>new Promise((o, s)=>{
            try {
                let i = r.createElement("link");
                i.rel = "stylesheet", i.href = t, i.addEventListener("load", (a)=>{
                    o({
                        status: !0
                    });
                }), r.head.appendChild(i);
            } catch (i) {
                s(i);
            }
        }), md = (t, e = !1, r = document, n = "text/javascript", o = "smbls-script")=>{
        try {
            let s = r.createElement("script");
            s.type = n, s.async = e, s.id = o, s.innerHTML = t, r.body.appendChild(s);
        } catch (s) {
            console.warn(s);
        }
    };
});
function yS(t, e) {
    if (!e || typeof e != "object") return t;
    let r = (o)=>{
        if (!mS(o)) return o;
        let s = e[o];
        return s?.src ? s.src : o;
    }, n = {
        ...t
    };
    for (let [o, s] of Object.entries(n))typeof s == "string" ? n[o] = r(s) : Array.isArray(s) && (n[o] = s.map((i)=>typeof i == "string" ? r(i) : i));
    return n;
}
function es(t, e) {
    if (!t || !e) return;
    let r = e.split("."), n = t;
    for (let o of r){
        if (n == null || typeof n != "object") return;
        n = n[o];
    }
    return n;
}
function bS(t, e, r) {
    let o = (e.config || e.settings || {}).polyglot || e.polyglot, s = r?.lang || o?.defaultLang || "en", a = (o?.translations || {})[s] || {}, c = r?.state || {}, l = {
        ...t
    };
    for (let [f, p] of Object.entries(l))typeof p != "string" || !p.includes("{{") || (l[f] = p.replace(/\{\{\s*([^|{}]+?)\s*(?:\|\s*(\w+)\s*)?\}\}/g, (u, d, h)=>{
        let g = d.trim();
        if (h === "polyglot") return a[g] ?? es(a, g) ?? u;
        if (h === "getLocalStateLang") return es(c, g + s) ?? u;
        let m = es(c, g);
        return m !== void 0 ? m : a[g] ?? es(a, g) ?? u;
    }));
    return l;
}
function xd(t) {
    let e = {
        ...t
    };
    for (let [r, n] of Object.entries(e))if (typeof n == "function") {
        let o = n.toString(), s = o.match(/el\.call\(\s*["']getLocalStateLang["']\s*,\s*["']([^"']+)["']\s*\)/);
        if (s) {
            e[r] = `{{ ${s[1]} | getLocalStateLang }}`;
            continue;
        }
        let i = o.match(/el\.call\(\s*["']polyglot["']\s*,\s*["']([^"']+)["']\s*\)/);
        if (i) {
            e[r] = `{{ ${i[1]} | polyglot }}`;
            continue;
        }
        let a = o.match(/s\.(\w+(?:\.\w+)+)/);
        if (a) {
            e[r] = `{{ ${a[1]} }}`;
            continue;
        }
        delete e[r];
    } else if (typeof n == "string") {
        let o = n.match(/el\.call\(\s*["']getLocalStateLang["']\s*,\s*["']([^"']+)["']\s*\)/);
        if (o) {
            e[r] = `{{ ${o[1]} | getLocalStateLang }}`;
            continue;
        }
        let s = n.match(/el\.call\(\s*["']polyglot["']\s*,\s*["']([^"']+)["']\s*\)/);
        if (s) {
            e[r] = `{{ ${s[1]} | polyglot }}`;
            continue;
        }
        if (n.includes("=>") && n.includes("s.")) {
            let i = n.match(/s\.(\w+(?:\.\w+)+)/);
            if (i) {
                e[r] = `{{ ${i[1]} }}`;
                continue;
            }
        }
    }
    return e;
}
function _d(t, e, r, { isProduction: n = !1, channel: o = "production" } = {}) {
    let s = t.pages?.[e], i = S(s?.state) && s?.state, a = s?.metadata || s?.helmet || i || {}, c = xd(a), l = new Set(Object.keys(c)), f = t.app?.metadata || {}, p = xd(f), u = {};
    if (t.integrations?.seo ? u = {
        ...t.integrations.seo,
        ...p,
        ...c
    } : Object.keys(p).length ? u = {
        ...p,
        ...c
    } : u = {
        ...c
    }, !u.title) {
        let g = t.name || t.key;
        g ? n ? u.title = g : o === "development" ? u.title = `${g} / dev:symbo.ls` : o === "staging" ? u.title = `${g} / staging:symbo.ls` : u.title = `${g} / symbo.ls` : u.title = "Symbols demo";
    }
    u = bS(u, t, r), u.title && (l.has("title") || !u["og:title"]) && (l.has("og:title") || (u["og:title"] = u.title)), u.description && (l.has("description") || !u["og:description"]) && (l.has("og:description") || (u["og:description"] = u.description)), u.title && !u["twitter:title"] && (u["twitter:title"] = u.title), u.description && !u["twitter:description"] && (u["twitter:description"] = u.description);
    let d = r?.actualPathname || e;
    if (u["og:url"] || u.url) {
        let g = (u["og:url"] || u.url || "").replace(/\/$/, "");
        if (g && d && d !== "/") {
            let m = d.startsWith("/") ? d : "/" + d;
            u["og:url"] = g + m;
        }
    }
    u = yS(u, t.files);
    let h = t.name || t.app?.metadata?.title || t.app?.name || "";
    for (let [g, m] of Object.entries(u))if (typeof m == "string" && m.includes("{{")) {
        let y = m.replace(/\{\{[^}]*\}\}/g, "").trim();
        y ? u[g] = y : g === "title" ? u[g] = h : delete u[g];
    }
    return u;
}
var $t, gS, Sd, mS, wd = $(()=>{
    "use strict";
    ut();
    $t = (t)=>{
        if (t == null) return "";
        let e = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return t.toString().replace(/[&<>"']/g, (r)=>e[r]);
    }, gS = (t)=>Object.entries(t || {}).filter(([e, r])=>r !== void 0).map(([e, r])=>`${e}="${$t(r)}"`).join(" "), Sd = (t, e)=>(e || (t = {
            ...t,
            robots: "noindex"
        }), Object.entries(t).reduce((n, [o, s])=>{
            if (!s && s !== 0 && s !== !1) return n;
            if (o === "title") return n.push(`<title>${$t(s)}</title>`), n;
            if (o === "canonical") return n.push(`<link rel="canonical" href="${$t(s)}">`), n;
            if (o === "manifest") return n.push(`<link rel="manifest" href="${$t(s)}">`), n;
            if (o === "favicon" || o === "favicons" || o === "icon" || o === "icons") return (Array.isArray(s) ? s : [
                s
            ]).forEach((f)=>{
                if (typeof f == "string") n.push(`<link rel="icon" href="${$t(f)}">`);
                else if (typeof f == "object") {
                    let p = gS(f);
                    /rel=/.test(p) ? n.push(`<link ${p}>`) : n.push(`<link rel="icon" ${p}>`);
                }
            }), n;
            if (o === "alternate") return (Array.isArray(s) ? s : [
                s
            ]).forEach((f)=>{
                if (typeof f == "object") {
                    let p = Object.entries(f).filter(([u, d])=>d !== void 0).map(([u, d])=>`${u}="${$t(d)}"`).join(" ");
                    n.push(`<link rel="alternate" ${p}>`);
                }
            }), n;
            let i = (l, f, p = "name")=>{
                if (typeof f == "string" || typeof f == "number" || typeof f == "boolean") n.push(`<meta ${p}="${$t(l)}" content="${$t(f)}">`);
                else if (Array.isArray(f)) f.forEach((u)=>{
                    if (typeof u == "string" || typeof u == "number" || typeof u == "boolean") n.push(`<meta ${p}="${$t(l)}" content="${$t(u)}">`);
                    else if (typeof u == "object") {
                        let d = Object.entries(u).filter(([h, g])=>g !== void 0).map(([h, g])=>`${h}="${$t(g)}"`).join(" ");
                        n.push(`<meta ${d}>`);
                    }
                });
                else if (typeof f == "object") {
                    let u = Object.entries(f).filter(([d, h])=>h !== void 0).map(([d, h])=>`${d}="${$t(h)}"`).join(" ");
                    n.push(`<meta ${u}>`);
                }
            };
            if (o.startsWith("http-equiv:")) {
                let l = o.replace("http-equiv:", "");
                return i(l, s, "http-equiv"), n;
            }
            if (o.startsWith("itemprop:")) {
                let l = o.replace("itemprop:", "");
                return i(l, s, "itemprop"), n;
            }
            let c = [
                "og:",
                "twitter:",
                "fb:",
                "article:",
                "profile:",
                "book:",
                "business:",
                "music:",
                "product:",
                "video:",
                "DC:",
                "DCTERMS:"
            ].find((l)=>o.startsWith(l));
            if (c) {
                let l = o.replace(c, "");
                return i(`${c.replace(":", "")}:${l}`, s, c === "twitter:" || c === "DC:" || c === "DCTERMS:" ? "name" : "property"), n;
            }
            if (o.startsWith("apple:") || o.startsWith("msapplication:")) {
                let l = o.startsWith("apple:") ? "apple-" : "msapplication-", f = o.replace(/^apple:|^msapplication:/, "");
                return i(`${l}${f}`, s, "name"), n;
            }
            return i(o, s), n;
        }, [
            '<meta charset="UTF-8">',
            '<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">'
        ]).join(`
`)), mS = (t)=>typeof t == "string" && t.length > 0 && !t.startsWith("/") && !t.startsWith("http");
});
var Oa, kd, vd = $(()=>{
    "use strict";
    ut();
    Oa = (t, e)=>(T(e) ? e : Object.values(e)).reduce((r, n)=>Math.abs(n - t) < Math.abs(r - t) ? n : r), kd = (t, e)=>(t = parseFloat(t), S(e) && (e = Object.values(e)), Oa(t, e));
});
function xn(t) {
    let e = String(t || "").trim();
    if (!e) return {
        owner: Cd,
        key: "",
        full: ""
    };
    let r = null, n = e;
    if (e.includes("/")) {
        let s = e.indexOf("/");
        r = e.slice(0, s), n = e.slice(s + 1);
    }
    n = n.replace(/\.symbo\.ls$/iu, ""), r || (r = Cd);
    let o = n ? `${r}/${n}` : "";
    return {
        owner: r,
        key: n,
        full: o
    };
}
async function Ra(t, e = {}) {
    if ((e.provider || "kv") === "api") return Ad(t, e);
    let n = await _S(t, e);
    return n || Ad(t, e);
}
async function _S(t, e = {}) {
    let r = e.kvBaseUrl || xS, n = e.env || "production", o = `${r}/kv/${encodeURIComponent(t)}?env=${n}`;
    try {
        let s = await fetch(o, {
            method: "GET"
        });
        return s.ok && (await s.json())?.value || null;
    } catch  {
        return null;
    }
}
async function Ad(t, e = {}) {
    let r = e.apiBaseUrl || SS, { key: n } = xn(t);
    try {
        let o = `${r}/core/projects/libraries/available?search=${encodeURIComponent(n)}&limit=10`, s = await fetch(o, {
            method: "GET"
        });
        if (!s.ok) return null;
        let i = await s.json(), c = (i?.items || i?.data || (Array.isArray(i) ? i : [])).find((d)=>{
            let { key: h } = xn(d?.key);
            return h.toLowerCase() === n.toLowerCase();
        });
        if (!c?.id && !c?._id) return null;
        let l = c.id || c._id, f = `${r}/core/projects/${encodeURIComponent(l)}/data?branch=main`, p = await fetch(f, {
            method: "GET"
        });
        if (!p.ok) return null;
        let u = await p.json();
        return u?.data || u || null;
    } catch  {
        return null;
    }
}
async function Ed(t, e = {}) {
    return !t || !t.length ? [] : (await Promise.all(t.map(async (n)=>{
        if (S(n)) return n;
        if (_(n)) {
            let { full: o } = xn(n);
            if (!o) return null;
            try {
                let s = await Ra(o, e);
                return s || console.warn(`[smbls] Shared library "${o}" not found`), s;
            } catch (s) {
                return console.warn(`[smbls] Failed to fetch shared library "${o}":`, s.message), null;
            }
        }
        return null;
    }))).filter(Boolean);
}
var Cd, xS, SS, rs, ns, Td = $(()=>{
    "use strict";
    ut();
    Cd = "system", xS = "https://smbls-kv.nika-980.workers.dev", SS = "https://api.symbols.app";
    rs = (t, e)=>{
        for(let r in e)r in t ? S(t[r]) && S(e[r]) && rs(t[r], e[r]) : t[r] = e[r];
    }, ns = (t, e)=>{
        if (!(!e || !e.length)) for(let r = 0; r < e.length; r++){
            let n = e[r];
            if (S(n)) {
                for(let o in n)if (Object.prototype.hasOwnProperty.call(n, o)) {
                    if (S(n[o]) && S(t[o])) {
                        if (o === "designSystem") rs(t[o], n[o]);
                        else for(let s in n[o])s in t[o] || (t[o][s] = n[o][s]);
                    } else o in t || (t[o] = n[o]);
                }
            }
        }
    };
});
var Od, Rd, Pd, os, Id, ss, $d, pr, Fd = $(()=>{
    "use strict";
    ut();
    Od = async (t)=>{
        try {
            await navigator.clipboard.writeText(t);
        } catch (e) {
            console.warn("Failed to copy text: ", e);
        }
    }, Rd = async (t)=>{
        try {
            let e = new Blob([
                t
            ], {
                type: "text/javascript"
            }), r = new window.ClipboardItem({
                "text/plain": e
            });
            await navigator.clipboard.write([
                r
            ]), console.log("JavaScript code copied to clipboard as text/javascript");
        } catch (e) {
            console.error("Failed to copy JavaScript code: ", e);
        }
    }, Pd = (t)=>t.replace(/[^a-zA-Z0-9_]/g, ""), os = (t)=>(typeof t != "string" && (t = String(t || "")), t.replace(/(?:^\w|[A-Z]|\b\w)/g, function(e, r) {
            return r === 0 ? e.toLowerCase() : e.toUpperCase();
        }).replace(/\s+/g, "")), Id = (t)=>t && t.replace(/\w\S*/g, (e)=>e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()), ss = (t)=>t.replace(/[^a-zA-Z0-9]/g, " ").trim().toLowerCase().replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, ""), $d = (t = "")=>{
        if (typeof t != "string") return;
        let e = t.replace(/([A-Z])/g, " $1");
        return e.charAt(0).toUpperCase() + e.slice(1);
    }, pr = (t)=>{
        if (T(t)) return t;
        if (_(t)) return t.split(" ");
        if (S(t)) return Object.values(t);
        if (oe(t)) return [
            t
        ];
    };
});
var Dd, Ld = $(()=>{
    "use strict";
    Dd = ()=>{
        let t = document.styleSheets[0], e = "";
        if (t) try {
            let r = t.cssRules || t.rules;
            for(let n = 0; n < r.length; n++)e += r[n].cssText;
        } catch (r) {
            console.error("Unable to access CSS rules. This may be due to CORS restrictions:", r);
        }
        else console.log("No stylesheets found in document.styleSheets[0].");
        return e;
    };
});
var Tt, Sn, is, as, Md = $(()=>{
    "use strict";
    Tt = (t)=>{
        let e = t && t.src;
        if (!e || typeof e != "string") return null;
        let r = t.context;
        if (!r) return null;
        let n = r.assets && r.assets[e] || r.files && r.files[e];
        return n ? typeof n == "string" ? {
            src: n,
            type: null,
            variants: null
        } : typeof n == "object" && typeof n.src == "string" ? n : null : null;
    }, Sn = (t, { keepOneX: e = !0 } = {})=>{
        if (!Array.isArray(t) || !t.length) return "";
        let r = t.some((o)=>typeof o.width == "number"), n = [];
        for (let o of t)r && typeof o.width == "number" ? n.push(`${o.src} ${o.width}w`) : r || (o.scale === 1 && e ? n.push(o.src) : o.scale && o.scale !== 1 && n.push(`${o.src} ${o.scale}x`));
        return n.join(", ");
    }, is = (t)=>{
        if (!t || !Array.isArray(t.variants)) return "";
        let e = t.variants.filter((r)=>r.format === t.type);
        return Sn(e, {
            keepOneX: !1
        });
    }, as = (t, e)=>{
        if (!t || typeof t != "object" || typeof t.src != "string") return [];
        if (!Array.isArray(t.variants) || !t.variants.length) return [
            {
                tag: "img",
                attr: {
                    src: t.src,
                    alt: e || ""
                }
            }
        ];
        let r = new Map;
        for (let a of t.variants)r.has(a.format) || r.set(a.format, []), r.get(a.format).push(a);
        let n = [];
        for (let [a, c] of r)a !== t.type && n.push({
            tag: "source",
            attr: {
                type: a,
                srcset: Sn(c, {
                    keepOneX: !0
                })
            }
        });
        let o = r.get(t.type) || [], s = Sn(o, {
            keepOneX: !1
        }), i = {
            src: t.src,
            alt: e || ""
        };
        return s && (i.srcset = s), [
            ...n,
            {
                tag: "img",
                attr: i
            }
        ];
    };
});
var Nd = {};
F(Nd, {
    CDN_PROVIDERS: ()=>Xt,
    DOMQL_EVENTS: ()=>Gf,
    DOMQ_PROPERTIES: ()=>De,
    ENV: ()=>pu,
    HTML_TAGS: ()=>on,
    METHODS: ()=>tn,
    METHODS_EXL: ()=>ao,
    NODE_ENV: ()=>Gt,
    OPTIONS: ()=>$o,
    PACKAGE_MANAGER_TO_CDN: ()=>We,
    PARSED_DOMQ_PROPERTIES: ()=>io,
    PROPS_METHODS: ()=>Me,
    STATE_METHODS: ()=>Le,
    STATE_PROPERTIES: ()=>qf,
    SVG_TAGS: ()=>$u,
    TYPES: ()=>eo,
    UNIVERSAL_RESERVED_KEYS: ()=>Ta,
    addCaching: ()=>aa,
    addContext: ()=>ia,
    addExtend: ()=>Bu,
    addExtends: ()=>Et,
    addItemAfterEveryElement: ()=>$f,
    addProtoToArray: ()=>oo,
    addRef: ()=>na,
    applyDependentState: ()=>cp,
    applyEvent: ()=>da,
    applyEventUpdate: ()=>ha,
    applyExtends: ()=>zu,
    applyProps: ()=>Eo,
    arrayContainsOtherArray: ()=>Af,
    arraysEqual: ()=>Df,
    arrayzeValue: ()=>pr,
    buildImgSrcset: ()=>is,
    buildSourcesAndImg: ()=>as,
    cache: ()=>gp,
    call: ()=>qp,
    captureSnapshot: ()=>Xp,
    checkForStateTypes: ()=>op,
    checkIfInherits: ()=>pa,
    checkIfStringIsInArray: ()=>Nf,
    clone: ()=>Jf,
    cloneAndMergeArrayExtend: ()=>bo,
    cloneFunction: ()=>Su,
    concatAddExtends: ()=>Lu,
    copyJavaScriptToClipboard: ()=>Rd,
    copyStringToClipboard: ()=>Od,
    createBasedOnType: ()=>ra,
    createElement: ()=>rp,
    createElementExtends: ()=>Vi,
    createExtends: ()=>So,
    createExtendsFromKeys: ()=>sn,
    createExtendsStack: ()=>Hi,
    createIfConditionFlag: ()=>_u,
    createInheritedState: ()=>sp,
    createKey: ()=>go,
    createNestedObject: ()=>su,
    createNestedObjectByKeyPath: ()=>ap,
    createObjectWithoutPrototype: ()=>Ii,
    createParent: ()=>oa,
    createPath: ()=>sa,
    createProps: ()=>To,
    createPropsStack: ()=>Qi,
    createRoot: ()=>ep,
    createScope: ()=>up,
    createSnapshotId: ()=>ho,
    customDecodeURIComponent: ()=>Hf,
    customEncodeURIComponent: ()=>Wf,
    cutArrayAfterValue: ()=>Pf,
    cutArrayBeforeValue: ()=>Rf,
    debounce: ()=>yo,
    debounceOnContext: ()=>yu,
    decodeNewlines: ()=>Uf,
    deepClone: ()=>Q,
    deepContains: ()=>nu,
    deepDefaults: ()=>rs,
    deepDestringifyFunctions: ()=>ie,
    deepExtend: ()=>Bi,
    deepMerge: ()=>q,
    deepMergeExtends: ()=>ae,
    deepStringifyFunctions: ()=>co,
    defineSetter: ()=>Wp,
    destringifyGlobalScope: ()=>fo,
    detectHeightOnInit: ()=>id,
    detectInfiniteLoop: ()=>lu,
    document: ()=>Y,
    encodeNewlines: ()=>zf,
    error: ()=>ur,
    excludeKeysFromObject: ()=>uu,
    exec: ()=>X,
    extendCachedRegistry: ()=>Mu,
    extendStackRegistry: ()=>_o,
    extractArrayExtend: ()=>ko,
    fetchLibraryData: ()=>Ra,
    fibonacciNumberByIndex: ()=>cd,
    filterArrays: ()=>Lf,
    filterArraysFast: ()=>Mf,
    finalizeExtends: ()=>qi,
    findClosestNumber: ()=>Oa,
    findClosestNumberInFactory: ()=>kd,
    findInheritedState: ()=>ua,
    findKeyPosition: ()=>Bf,
    flattenExtend: ()=>an,
    formatDate: ()=>od,
    generateHash: ()=>Mi,
    generateKey: ()=>po,
    generateMetaTags: ()=>Sd,
    get: ()=>Bp,
    getCDNUrl: ()=>Zt,
    getCapitalCaseKeys: ()=>Uu,
    getCdnProviderFromConfig: ()=>yn,
    getChildStateInKey: ()=>fa,
    getChildren: ()=>Vo,
    getContext: ()=>Ko,
    getCookie: ()=>Tu,
    getDB: ()=>Qo,
    getEmotionStylesheet: ()=>Dd,
    getExtendsInElement: ()=>Vu,
    getExtendsStack: ()=>xo,
    getExtendsStackRegistry: ()=>ji,
    getFrequencyInArray: ()=>Ef,
    getHashedExtend: ()=>wo,
    getImportMapScript: ()=>rd,
    getInObjectByPath: ()=>cu,
    getLocalStorage: ()=>Ru,
    getNev: ()=>mu,
    getPageMetadata: ()=>_d,
    getParentStateInKey: ()=>la,
    getPath: ()=>zo,
    getQuery: ()=>ts,
    getRef: ()=>zp,
    getRoot: ()=>Ho,
    getRootContext: ()=>Go,
    getRootData: ()=>qo,
    getRootState: ()=>Wo,
    getRootStateInKey: ()=>ca,
    getSpreadChildren: ()=>Wu,
    global: ()=>kf,
    hasFunction: ()=>en,
    hasHandlerPlugin: ()=>rn,
    hasOwnProperty: ()=>tu,
    inheritChildExtends: ()=>Ui,
    inheritChildPropsExtends: ()=>zi,
    inheritParentProps: ()=>Oo,
    inheritRecursiveChildExtends: ()=>Wi,
    initProps: ()=>Ju,
    is: ()=>Ct,
    isArray: ()=>T,
    isBoolean: ()=>Ei,
    isContextComponent: ()=>Hu,
    isCyclic: ()=>fu,
    isDOMNode: ()=>kt,
    isDate: ()=>Oi,
    isDefined: ()=>vt,
    isDevelopment: ()=>Be,
    isEmpty: ()=>Ri,
    isEmptyObject: ()=>eu,
    isEqualDeep: ()=>Pi,
    isFunction: ()=>C,
    isHtmlElement: ()=>to,
    isLocal: ()=>gu,
    isMethod: ()=>Kp,
    isMobile: ()=>Au,
    isNode: ()=>he,
    isNot: ()=>Cf,
    isNotProduction: ()=>cr,
    isNull: ()=>Ti,
    isNumber: ()=>oe,
    isObject: ()=>S,
    isObjectLike: ()=>N,
    isPhoto: ()=>fd,
    isProduction: ()=>je,
    isStaging: ()=>hu,
    isState: ()=>ip,
    isString: ()=>_,
    isStringFunction: ()=>xu,
    isTest: ()=>$i,
    isTesting: ()=>du,
    isUndefined: ()=>ht,
    isUniversallyReservedKey: ()=>Jp,
    isValidHtmlTag: ()=>Fu,
    joinArrays: ()=>Xr,
    jointStacks: ()=>ju,
    keys: ()=>Aa,
    loadCssFile: ()=>gd,
    loadJavascript: ()=>md,
    loadJavascriptFile: ()=>pd,
    loadJavascriptFileEmbedSync: ()=>hd,
    loadJavascriptFileSync: ()=>dd,
    loadRemoteCSS: ()=>yd,
    loadRemoteScript: ()=>bn,
    log: ()=>Hp,
    logGroupIf: ()=>vu,
    logIf: ()=>ku,
    lookdown: ()=>Mp,
    lookdownAll: ()=>Np,
    lookup: ()=>Lp,
    lowercaseFirstLetter: ()=>sr,
    makeObjectWithoutPrototype: ()=>ru,
    map: ()=>Xf,
    mapStringsWithContextComponents: ()=>vo,
    matchesComponentNaming: ()=>ce,
    memoize: ()=>bu,
    merge: ()=>et,
    mergeSharedLibraries: ()=>ns,
    nextElement: ()=>Xo,
    normalizeLibraryKey: ()=>xn,
    objectToString: ()=>lo,
    objectizeStringProperty: ()=>Ao,
    overwrite: ()=>uo,
    overwriteDeep: ()=>At,
    overwriteShallow: ()=>ar,
    overwriteState: ()=>lp,
    parse: ()=>Ea,
    parseDeep: ()=>jo,
    pickupElementFromProps: ()=>Xi,
    pickupPropsFromElement: ()=>Yi,
    previousElement: ()=>Zo,
    propExists: ()=>Zu,
    propertizeElement: ()=>Zi,
    propertizeUpdate: ()=>Xu,
    remove: ()=>jp,
    removeChars: ()=>Pd,
    removeCookie: ()=>Ou,
    removeDuplicateProps: ()=>Po,
    removeDuplicatesInArray: ()=>Zr,
    removeFromArray: ()=>Tf,
    removeFromObject: ()=>ou,
    removeNestedKeyByPath: ()=>iu,
    removeValueFromArray: ()=>no,
    removeValueFromArrayAll: ()=>If,
    reorderArrayByValues: ()=>Ff,
    replaceLiteralsWithObjectFields: ()=>or,
    replaceOctalEscapeSequences: ()=>Vf,
    resolveAsset: ()=>Tt,
    resolveHandler: ()=>nn,
    resolveSharedLibraries: ()=>Ed,
    returnValueAsText: ()=>ea,
    runPluginHook: ()=>Kt,
    self: ()=>vf,
    setActiveRootState: ()=>Uo,
    setCookie: ()=>Eu,
    setHashedExtend: ()=>Ni,
    setInObjectByPath: ()=>au,
    setLocalStorage: ()=>Pu,
    setNodeStyles: ()=>Ca,
    setProps: ()=>Vp,
    setPropsPrototype: ()=>Ro,
    spotByPath: ()=>Bo,
    srcsetFor: ()=>Sn,
    stringIncludesAny: ()=>so,
    stringToObject: ()=>Qf,
    swapItemsInArray: ()=>Of,
    syncProps: ()=>Io,
    toCamelCase: ()=>os,
    toDashCase: ()=>ss,
    toDescriptionCase: ()=>$d,
    toTitleCase: ()=>Id,
    toggleFullscreen: ()=>td,
    triggerEventOn: ()=>Ve,
    triggerEventOnUpdate: ()=>hp,
    trimStringFromSymbols: ()=>jf,
    unstackArrayOfObjects: ()=>ro,
    update: ()=>Ji,
    updateProps: ()=>Qu,
    variables: ()=>Jo,
    verbose: ()=>mn,
    warn: ()=>Yo,
    window: ()=>k
});
var P = $(()=>{
    "use strict";
    mo();
    Fi();
    ut();
    se();
    lr();
    nr();
    Yr();
    wu();
    Cu();
    Qr();
    Kr();
    Iu();
    Di();
    Gi();
    ta();
    Co();
    np();
    fp();
    ir();
    pp();
    Yp();
    ma();
    Zp();
    ga();
    Qp();
    ed();
    nd();
    sd();
    ad();
    ld();
    ud();
    bd();
    wd();
    vd();
    Td();
    Fd();
    Ld();
    Md();
});
var Db = xi((AF, Fb)=>{
    var Nr = 1e3, jr = Nr * 60, Br = jr * 60, tr = Br * 24, Rk = tr * 7, Pk = tr * 365.25;
    Fb.exports = function(t, e) {
        e = e || {};
        var r = typeof t;
        if (r === "string" && t.length > 0) return Ik(t);
        if (r === "number" && isFinite(t)) return e.long ? Fk(t) : $k(t);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
    };
    function Ik(t) {
        if (t = String(t), !(t.length > 100)) {
            var e = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
            if (e) {
                var r = parseFloat(e[1]), n = (e[2] || "ms").toLowerCase();
                switch(n){
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return r * Pk;
                    case "weeks":
                    case "week":
                    case "w":
                        return r * Rk;
                    case "days":
                    case "day":
                    case "d":
                        return r * tr;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return r * Br;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return r * jr;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return r * Nr;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return r;
                    default:
                        return;
                }
            }
        }
    }
    function $k(t) {
        var e = Math.abs(t);
        return e >= tr ? Math.round(t / tr) + "d" : e >= Br ? Math.round(t / Br) + "h" : e >= jr ? Math.round(t / jr) + "m" : e >= Nr ? Math.round(t / Nr) + "s" : t + "ms";
    }
    function Fk(t) {
        var e = Math.abs(t);
        return e >= tr ? ui(t, e, tr, "day") : e >= Br ? ui(t, e, Br, "hour") : e >= jr ? ui(t, e, jr, "minute") : e >= Nr ? ui(t, e, Nr, "second") : t + " ms";
    }
    function ui(t, e, r, n) {
        var o = e >= r * 1.5;
        return Math.round(t / r) + " " + n + (o ? "s" : "");
    }
});
var Mb = xi((EF, Lb)=>{
    function Dk(t) {
        r.debug = r, r.default = r, r.coerce = c, r.disable = i, r.enable = o, r.enabled = a, r.humanize = Db(), r.destroy = l, Object.keys(t).forEach((f)=>{
            r[f] = t[f];
        }), r.names = [], r.skips = [], r.formatters = {};
        function e(f) {
            let p = 0;
            for(let u = 0; u < f.length; u++)p = (p << 5) - p + f.charCodeAt(u), p |= 0;
            return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = e;
        function r(f) {
            let p, u = null, d, h;
            function g(...m) {
                if (!g.enabled) return;
                let y = g, b = Number(new Date), w = b - (p || b);
                y.diff = w, y.prev = p, y.curr = b, p = b, m[0] = r.coerce(m[0]), typeof m[0] != "string" && m.unshift("%O");
                let x = 0;
                m[0] = m[0].replace(/%([a-zA-Z%])/g, (A, R)=>{
                    if (A === "%%") return "%";
                    x++;
                    let W = r.formatters[R];
                    if (typeof W == "function") {
                        let O = m[x];
                        A = W.call(y, O), m.splice(x, 1), x--;
                    }
                    return A;
                }), r.formatArgs.call(y, m), (y.log || r.log).apply(y, m);
            }
            return g.namespace = f, g.useColors = r.useColors(), g.color = r.selectColor(f), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: ()=>u !== null ? u : (d !== r.namespaces && (d = r.namespaces, h = r.enabled(f)), h),
                set: (m)=>{
                    u = m;
                }
            }), typeof r.init == "function" && r.init(g), g;
        }
        function n(f, p) {
            let u = r(this.namespace + (typeof p > "u" ? ":" : p) + f);
            return u.log = this.log, u;
        }
        function o(f) {
            r.save(f), r.namespaces = f, r.names = [], r.skips = [];
            let p = (typeof f == "string" ? f : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
            for (let u of p)u[0] === "-" ? r.skips.push(u.slice(1)) : r.names.push(u);
        }
        function s(f, p) {
            let u = 0, d = 0, h = -1, g = 0;
            for(; u < f.length;)if (d < p.length && (p[d] === f[u] || p[d] === "*")) p[d] === "*" ? (h = d, g = u, d++) : (u++, d++);
            else if (h !== -1) d = h + 1, g++, u = g;
            else return !1;
            for(; d < p.length && p[d] === "*";)d++;
            return d === p.length;
        }
        function i() {
            let f = [
                ...r.names,
                ...r.skips.map((p)=>"-" + p)
            ].join(",");
            return r.enable(""), f;
        }
        function a(f) {
            for (let p of r.skips)if (s(f, p)) return !1;
            for (let p of r.names)if (s(f, p)) return !0;
            return !1;
        }
        function c(f) {
            return f instanceof Error ? f.stack || f.message : f;
        }
        function l() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
    }
    Lb.exports = Dk;
});
var Nb = xi((wt, pi)=>{
    wt.formatArgs = Mk;
    wt.save = Nk;
    wt.load = jk;
    wt.useColors = Lk;
    wt.storage = Bk();
    wt.destroy = (()=>{
        let t = !1;
        return ()=>{
            t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
    })();
    wt.colors = [
        "#0000CC",
        "#0000FF",
        "#0033CC",
        "#0033FF",
        "#0066CC",
        "#0066FF",
        "#0099CC",
        "#0099FF",
        "#00CC00",
        "#00CC33",
        "#00CC66",
        "#00CC99",
        "#00CCCC",
        "#00CCFF",
        "#3300CC",
        "#3300FF",
        "#3333CC",
        "#3333FF",
        "#3366CC",
        "#3366FF",
        "#3399CC",
        "#3399FF",
        "#33CC00",
        "#33CC33",
        "#33CC66",
        "#33CC99",
        "#33CCCC",
        "#33CCFF",
        "#6600CC",
        "#6600FF",
        "#6633CC",
        "#6633FF",
        "#66CC00",
        "#66CC33",
        "#9900CC",
        "#9900FF",
        "#9933CC",
        "#9933FF",
        "#99CC00",
        "#99CC33",
        "#CC0000",
        "#CC0033",
        "#CC0066",
        "#CC0099",
        "#CC00CC",
        "#CC00FF",
        "#CC3300",
        "#CC3333",
        "#CC3366",
        "#CC3399",
        "#CC33CC",
        "#CC33FF",
        "#CC6600",
        "#CC6633",
        "#CC9900",
        "#CC9933",
        "#CCCC00",
        "#CCCC33",
        "#FF0000",
        "#FF0033",
        "#FF0066",
        "#FF0099",
        "#FF00CC",
        "#FF00FF",
        "#FF3300",
        "#FF3333",
        "#FF3366",
        "#FF3399",
        "#FF33CC",
        "#FF33FF",
        "#FF6600",
        "#FF6633",
        "#FF9900",
        "#FF9933",
        "#FFCC00",
        "#FFCC33"
    ];
    function Lk() {
        if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) return !0;
        if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        let t;
        return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function Mk(t) {
        if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + pi.exports.humanize(this.diff), !this.useColors) return;
        let e = "color: " + this.color;
        t.splice(1, 0, e, "color: inherit");
        let r = 0, n = 0;
        t[0].replace(/%[a-zA-Z%]/g, (o)=>{
            o !== "%%" && (r++, o === "%c" && (n = r));
        }), t.splice(n, 0, e);
    }
    wt.log = console.debug || console.log || (()=>{});
    function Nk(t) {
        try {
            t ? wt.storage.setItem("debug", t) : wt.storage.removeItem("debug");
        } catch  {}
    }
    function jk() {
        let t;
        try {
            t = wt.storage.getItem("debug") || wt.storage.getItem("DEBUG");
        } catch  {}
        return t, t;
    }
    function Bk() {
        try {
            return localStorage;
        } catch  {}
    }
    pi.exports = Mb()(wt);
    var { formatters: Vk } = pi.exports;
    Vk.j = function(t) {
        try {
            return JSON.stringify(t);
        } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
        }
    };
});
var _t = null, Xn = 0, Zn = [], Hr = ()=>_t, gx = (t)=>{
    _t = t;
}, Jn = 0, Si = [];
function ne(t) {
    let e = new Set;
    function r() {
        return _t && (e.add(_t), _t._sources.add(s)), t;
    }
    function n(i) {
        i !== t && (t = i, xx(e));
    }
    function o() {
        return t;
    }
    let s = {
        get: r,
        set: n,
        peek: o,
        _subscribers: e,
        _type: "signal"
    };
    return s;
}
function mx(t) {
    let e, r = !0, n = new Set, o = {
        _sources: new Set,
        _type: "computed",
        _subscribers: n,
        _execute () {
            wi(o);
            let s = _t;
            _t = o;
            try {
                e = t(), r = !1;
            } finally{
                _t = s;
            }
        },
        _notify () {
            r = !0, n.size > 0 && wf(n);
        },
        get () {
            return _t && (n.add(_t), _t._sources.add(o)), r && o._execute(), e;
        },
        peek () {
            return r && o._execute(), e;
        }
    };
    return o._execute(), o;
}
var Ie = new Set, _i = !1;
function ft(t, e) {
    let r = e?.depth ?? 0, n = {
        _sources: new Set,
        _type: "effect",
        _depth: r,
        _disposed: !1,
        _subscribers: new Set,
        _execute () {
            if (n._disposed) return;
            wi(n);
            let o = _t;
            _t = n;
            try {
                t();
            } catch (s) {
                console.error("[smbls] effect error:", s);
            } finally{
                _t = o;
            }
        },
        _notify () {
            n._disposed || (Xn > 0 ? Zn.push(n) : Jn > 0 ? Si.push(n) : ki(n));
        },
        dispose () {
            n._disposed = !0, wi(n);
        }
    };
    return n._execute(), n;
}
function $e(t) {
    Xn++;
    try {
        t();
    } finally{
        Xn--, Xn === 0 && bx();
    }
}
function ki(t) {
    Ie.add(t), _i || (_i = !0, queueMicrotask(yx));
}
var rr = [];
function yx() {
    if (_i = !1, Ie.size !== 0) {
        if (Ie.size === 1) {
            let [t] = Ie;
            Ie.clear(), t._disposed || t._execute();
            return;
        }
        rr.length = 0;
        for (let t of Ie)rr.push(t);
        Ie.clear(), rr.sort((t, e)=>t._depth - e._depth);
        for(let t = 0; t < rr.length; t++){
            let e = rr[t];
            e._disposed || e._execute();
        }
        rr.length = 0;
    }
}
function bx() {
    for(let t = 0; t < Zn.length; t++)ki(Zn[t]);
    Zn.length = 0;
}
function wf(t) {
    Jn++;
    try {
        for (let e of t)e._notify();
    } finally{
        if (Jn--, Jn === 0 && Si.length > 0) {
            let e = Si.splice(0);
            for(let r = 0; r < e.length; r++)ki(e[r]);
        }
    }
}
function xx(t) {
    wf(t);
}
function wi(t) {
    for (let e of t._sources)e._subscribers.delete(t);
    t._sources.clear();
}
var Fe = Symbol("store"), Qn = Symbol("signals"), vi = (t)=>!t || typeof t != "object" || Array.isArray(t) || t[Fe] || Object.isFrozen(t) || typeof Node < "u" && t instanceof Node || t.__ref || t.nodeType || t.nodeName;
function jt(t, e, r) {
    r === void 0 && (r = 0);
    let n = {}, o = {}, s = e && e.maxDepth || 8;
    if (t && typeof t == "object") for(let y in t){
        if (y === "__proto__" || !Object.prototype.hasOwnProperty.call(t, y)) continue;
        let b = t[y];
        r < s && b && typeof b == "object" && !vi(b) ? (o[y] = b, n[y] = ne(jt(b, e, r + 1))) : (o[y] = b, n[y] = ne(b));
    }
    let i = new Proxy(o, {
        get (y, b) {
            if (b === Fe) return !0;
            if (b === Qn) return n;
            if (b === "__raw") return y;
            if (b === "update") return a;
            if (b === "parse") return l;
            if (b === "clean") return f;
            if (b === "keys") return p;
            if (b === "values") return u;
            if (b === "replace") return d;
            if (b === "add") return h;
            if (b === "remove") return g;
            if (b === "destroy") return m;
            if (b === "quietUpdate") return c;
            if (b === "__element") return y.__element;
            if (b === "parent") return y.parent;
            if (b === "root") return y.root;
            if (Object.prototype.hasOwnProperty.call(n, b)) return n[b].get();
            if (y[b] !== void 0) return y[b];
            if (b !== "root" && y.root && y.root !== i) return y.root[b];
            if (typeof b == "string" && !b.startsWith("__") && b !== "then" && b !== "constructor" && Hr() != null) return n[b] = ne(void 0), n[b].get();
        },
        set (y, b, w) {
            return b === "__proto__" ? !1 : b === "__element" || b === "parent" || b === "root" ? (y[b] = w, !0) : (Object.prototype.hasOwnProperty.call(n, b) ? (y[b] = w, w && typeof w == "object" && !vi(w) ? n[b].set(jt(w, e, r + 1)) : n[b].set(w)) : (y[b] = w, w && typeof w == "object" && !vi(w) ? n[b] = ne(jt(w, e, r + 1)) : n[b] = ne(w)), !0);
        },
        has (y, b) {
            return b in n || b in y;
        },
        ownKeys (y) {
            return Object.keys(n);
        },
        getOwnPropertyDescriptor (y, b) {
            return b in n ? {
                enumerable: !0,
                configurable: !0,
                value: n[b].peek()
            } : Object.getOwnPropertyDescriptor(y, b);
        },
        deleteProperty (y, b) {
            return n[b] && (n[b].set(void 0), delete n[b]), delete y[b], !0;
        }
    });
    function a(y, b) {
        $e(()=>{
            for(let x in y)x !== "__proto__" && (i[x] = y[x]);
        });
        let w = o.__element;
        return w && w.onUpdate && !b?.quiet && w.onUpdate(w, i, w.context), i;
    }
    function c(y) {
        return a(y, {
            quiet: !0
        });
    }
    function l(y) {
        if (y || (y = new Set), y.has(i)) return "[Circular]";
        y.add(i);
        let b = {};
        for(let w in n){
            if (w === "parent" || w === "root" || w.startsWith("__")) continue;
            let x = n[w].peek();
            x && x[Fe] ? b[w] = x.parse(y) : b[w] = x;
        }
        return b;
    }
    function f() {
        return $e(()=>{
            for(let y in n)delete i[y];
        }), i;
    }
    function p() {
        return Object.keys(n);
    }
    function u() {
        return Object.keys(n).map((y)=>n[y].peek());
    }
    function d(y) {
        return $e(()=>{
            for(let b in n)b in y || delete i[b];
            for(let b in y)b !== "__proto__" && (i[b] = y[b]);
        }), i;
    }
    function h(y, b) {
        return i[y] = b, i;
    }
    function g(y) {
        return delete i[y], i;
    }
    function m() {
        f(), o.__element = null, o.parent = null;
    }
    return i;
}
function mt(t) {
    return t && t[Fe] === !0;
}
function Sx(t) {
    return t[Qn];
}
function Ai(t, e) {
    let r = {}, n = {};
    if (t && typeof t == "object") for(let i in t)n[i] = t[i], r[i] = ne(t[i]);
    let o = (i)=>{
        if (Object.prototype.hasOwnProperty.call(r, i)) return r;
        let a = e;
        for(; a;){
            let c = a[Qn];
            if (c && Object.prototype.hasOwnProperty.call(c, i)) return c;
            a = a[Fe] ? a[Ci] : null;
        }
        return null;
    };
    return new Proxy(n, {
        get (i, a) {
            return a === Fe ? !0 : a === Qn ? r : a === Ci ? e : a === "__raw" ? i : Object.prototype.hasOwnProperty.call(r, a) ? r[a].get() : e && a !== "then" && a !== "constructor" ? e[a] : i[a];
        },
        set (i, a, c) {
            let l = o(a);
            return l ? (l === r && (i[a] = c), l[a].set(c), !0) : (i[a] = c, r[a] = ne(c), !0);
        },
        has (i, a) {
            if (a in r || a in i) return !0;
            let c = e;
            for(; c;){
                if (a in c) return !0;
                c = c[Fe] ? c[Ci] : null;
            }
            return !1;
        },
        ownKeys () {
            return Object.keys(r);
        },
        getOwnPropertyDescriptor (i, a) {
            return a in r ? {
                enumerable: !0,
                configurable: !0,
                value: r[a].peek()
            } : Object.getOwnPropertyDescriptor(i, a);
        }
    });
}
var Ci = Symbol("scope.parent");
var yr = {};
F(yr, {
    CSS_NATIVE_COLOR_REGEX: ()=>le,
    CSS_UNITS: ()=>Gr,
    applyMediaSequenceVars: ()=>mr,
    applySequenceGlobalVars: ()=>Ua,
    applySequenceVars: ()=>Ke,
    changeLightness: ()=>ES,
    colorStringToRgbaArray: ()=>be,
    convertSvgToSymbol: ()=>Wa,
    findHeadingLetter: ()=>nh,
    findHeadings: ()=>za,
    generateSequence: ()=>Ft,
    generateSequencePosition: ()=>u_,
    generateSprite: ()=>hs,
    generateSubSequence: ()=>Ba,
    getColorShade: ()=>Ud,
    getDefaultOrFirstKey: ()=>_n,
    getFnPrefixAndValue: ()=>Ge,
    getFontFace: ()=>RS,
    getFontFaceEach: ()=>wn,
    getFontFaceEachString: ()=>Gd,
    getFontFaceString: ()=>Ia,
    getFontFormat: ()=>Hd,
    getRgbTone: ()=>hr,
    getSequenceValue: ()=>Va,
    getSequenceValueBySymbols: ()=>rh,
    getSequenceValuePropertyPair: ()=>we,
    getSubratio: ()=>ja,
    getSubratioDifference: ()=>Na,
    hexToRgb: ()=>kS,
    hexToRgbArray: ()=>jd,
    hexToRgba: ()=>CS,
    hslToRgb: ()=>zd,
    isCSSVar: ()=>ot,
    isGoogleFontsUrl: ()=>ls,
    isResolvedColor: ()=>xe,
    isScalingUnit: ()=>qr,
    mixTwoColors: ()=>wS,
    mixTwoRgb: ()=>AS,
    mixTwoRgba: ()=>Wd,
    numToLetterMap: ()=>_e,
    opacify: ()=>cs,
    parseColorToken: ()=>He,
    resolveFileUrl: ()=>Jt,
    returnSubThemeOrDefault: ()=>OS,
    rgbArrayToHex: ()=>Bd,
    rgbToHSL: ()=>Vd,
    rgbToHex: ()=>vS,
    setCustomFont: ()=>Pa,
    setCustomFontMedia: ()=>gr,
    setFontImport: ()=>fs,
    setInCustomFontMedia: ()=>qd,
    setScalingVar: ()=>Ma,
    setSubScalingVar: ()=>th,
    setVariables: ()=>p_,
    splitTopLevelCommas: ()=>dr
});
var qr = (t)=>t === "em" || t === "rem" || t === "vw" || t === "vh" || t === "vmax" || t === "vmin", Gr = [
    "px",
    "cm",
    "mm",
    "in",
    "pt",
    "pc",
    "em",
    "rem",
    "ex",
    "cap",
    "ch",
    "ic",
    "lh",
    "rlh",
    "%",
    "vw",
    "vh",
    "vmin",
    "vmax",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax",
    "deg",
    "rad",
    "grad",
    "turn",
    "s",
    "ms",
    "dpi",
    "dpcm",
    "dppx",
    "fr",
    "auto"
];
P();
var be = (t)=>{
    if (t === "") return [
        0,
        0,
        0,
        0
    ];
    if (t.toLowerCase() === "transparent") return [
        0,
        0,
        0,
        0
    ];
    if (t[0] === "#") return t.length < 7 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (t.length > 4 ? t[4] + t[4] : "")), [
        parseInt(t.substr(1, 2), 16),
        parseInt(t.substr(3, 2), 16),
        parseInt(t.substr(5, 2), 16),
        t.length > 7 ? parseInt(t.substr(7, 2), 16) / 255 : 1
    ];
    if (t.indexOf("rgb") === -1 && Y && k) {
        let e = Y.body.appendChild(Y.createElement("fictum")), r = "rgb(1, 2, 3)";
        if (e.style.color = r, e.style.color !== r) {
            Y.body.removeChild(e);
            return;
        }
        if (e.style.color = t, e.style.color === r || e.style.color === "") return Y.body.removeChild(e), [
            0,
            0,
            0,
            0
        ];
        t = k.getComputedStyle(e).color, Y.body.removeChild(e);
    }
    return t.indexOf("rgb") === 0 ? (t.indexOf("rgba") === -1 && (t = `${t}, 1`), t.match(/[\.\d]+/g).map((e)=>+e)) : [
        0,
        0,
        0,
        0
    ];
}, wS = (t, e, r = .5)=>(t = be(t), e = be(e), Wd(t, e, r)), kS = (t, e = 1)=>{
    let [r, n, o] = t.match(/\w\w/g).map((s)=>parseInt(s, 16));
    return `rgb(${r},${n},${o})`;
}, jd = (t, e = 1)=>{
    let [r, n, o] = t.match(/\w\w/g).map((s)=>parseInt(s, 16));
    return [
        r,
        n,
        o
    ];
}, vS = (t, e, r)=>"#" + (16777216 | t << 16 | e << 8 | r).toString(16).slice(1), Bd = ([t, e, r])=>(16777216 + (t << 16) + (e << 8) + r).toString(16).slice(1), CS = (t, e = 1)=>{
    let [r, n, o] = t.match(/\w\w/g).map((s)=>parseInt(s, 16));
    return `rgba(${r},${n},${o},${e})`;
}, AS = (t, e, r = .5)=>{
    let n = [];
    for(let o = 0; o < 3; o++)n[o] = ~~(t[o] + (e[o] - t[o]) * r);
    return `rgb(${n})`;
}, ES = (t, e)=>{
    let [r, n, o] = e, s = Math.max(0, Math.min(100, o + parseFloat(t)));
    return [
        r,
        n,
        s
    ];
}, Vd = (t, e, r)=>{
    let n = Math.max(t, e, r), o = n - Math.min(t, e, r), s = 1 - Math.abs(n + n - o - 1), i = o && (n == t ? (e - r) / o : n == e ? 2 + (r - t) / o : 4 + (t - e) / o);
    return [
        60 * (i < 0 ? i + 6 : i),
        s ? o / s : 0,
        (n + n - o) / 2
    ];
}, zd = (t, e, r, n = e * Math.min(r, 1 - r), o = (s, i = (s + t / 30) % 12)=>r - n * Math.max(Math.min(i - 3, 9 - i, 1), -1))=>[
        o(0),
        o(8),
        o(4)
    ], Ud = (t, e)=>{
    let r = parseInt(t, 16), n = (r >> 16) + e;
    n > 255 ? n = 255 : n < 0 && (n = 0);
    let o = (r >> 8 & 255) + e;
    o > 255 ? o = 255 : o < 0 && (o = 0);
    let s = (r & 255) + e;
    return s > 255 ? s = 255 : s < 0 && (s = 0), ((s | o << 8 | n << 16) + 16777216).toString(16).slice(1);
}, Wd = (t, e, r = .5)=>{
    let n = [];
    for(let o = 0; o < 4; o++){
        let s = o === 3 ? (i)=>i : Math.round;
        n[o] = s(t[o] + (e[o] - t[o]) * r);
    }
    return `rgba(${n})`;
}, cs = (t, e)=>{
    let r = be(t);
    if (!r) {
        cr() && console.warn(t + " color is not rgba");
        return;
    }
    return r[3] = e, `rgba(${r})`;
}, ot = (t)=>t.charCodeAt(0) === 45 && t.charCodeAt(1) === 45, le = /(?:rgba?\(|hsla?\(|#[0-9a-fA-F]{3,8}\b)/, TS = /^([a-zA-Z]\w*)(?:\.(\d+))?(?:([+-]\d+|=\d+))?$/, He = (t)=>{
    if (!_(t)) return null;
    if (le.test(t)) return {
        passthrough: t
    };
    if (ot(t)) return {
        cssVar: t
    };
    let e = t.match(TS);
    if (!e) return null;
    let [, r, n, o] = e, s = n !== void 0 ? `0.${n}` : void 0, i = o && o[0] === "=" ? o.slice(1) : o;
    return {
        name: r,
        alpha: s,
        tone: i
    };
}, xe = (t)=>_(t) && (t.includes("rgb") || t.includes("var(") || t.includes("#")), dr = (t)=>{
    let e = [], r = "", n = 0;
    for (let o of t){
        if (o === "(" ? n += 1 : o === ")" && n > 0 && (n -= 1), o === "," && n === 0) {
            e.push(r), r = "";
            continue;
        }
        r += o;
    }
    return (r.length || !e.length) && e.push(r), e;
}, hr = (t, e)=>{
    _(t) && t.includes("rgb") && (t = be(t).join(", ")), _(t) && (t = t.split(",").map((o)=>parseFloat(o.trim()))), oe(e) && (e += "");
    let r = Bd(t), n = e.slice(0, 1);
    if (n === "-" || n === "+") {
        let o = Ud(r, parseFloat(e));
        return jd(o).join(", ");
    } else {
        let [o, s, i] = t, a = Vd(o, s, i), [c, l, f] = a;
        return zd(c, l, parseFloat(e) / 100 * 255);
    }
};
var OS = (t, e)=>{
    if (t) return t.themes && t.themes[e] ? t.themes[e] : t[e] ? [
        t,
        t[e]
    ] : t;
};
var Jt = (t, e)=>{
    if (!t || !e) return null;
    try {
        return new URL(t), null;
    } catch  {}
    let r = e[t];
    return r ? r.content && r.content.src : null;
}, _n = (t, e)=>{
    if (t[e]) return t[e].value;
    if (t.default) return t[t.default].value;
    let r = Object.keys(t)[0];
    return r && t[r] && t[r].value;
}, Hd = (t)=>{
    if (typeof t != "string" || !t) return null;
    let e = t.split(/[#?]/)[0].split(".").pop().trim();
    return [
        "woff2",
        "woff",
        "ttf",
        "otf",
        "eot"
    ].includes(e) ? e : null;
}, ls = (t)=>t && (t.includes("fonts.googleapis.com") || t.includes("fonts.gstatic.com")), fs = (t)=>`@import url('${t}');`, qd = (t)=>`@font-face { ${t} }`, Pa = (t, e, r, n = {})=>{
    let i = (Array.isArray(e) ? e : [
        e
    ]).filter((a)=>typeof a == "string" && a).map((a)=>{
        let c = Hd(a), l = c ? ` format('${c}')` : "";
        return `url('${a}')${l}`;
    }).join(`,
       `);
    return `
  font-family: '${t}';
  font-style: ${n.fontStyle || "normal"};${r ? `
  font-weight: ${r};` : ""}${n.fontStretch ? `
  font-stretch: ${n.fontStretch};` : ""}${n.fontDisplay ? `
  font-display: ${n.fontDisplay};` : ""}
  src: ${i};`;
}, gr = (t, e, r, n)=>`@font-face {${Pa(t, e, r, n)}
}`, wn = (t, e, r)=>Object.keys(e).map((o)=>{
        let { url: s, fontWeight: i, fontStyle: a, fontDisplay: c, fontStretch: l } = e[o], f = Array.isArray(s) ? s.map((p)=>Jt(p, r) || p) : Jt(s, r) || s;
        return Pa(t, f, i, {
            fontStyle: a,
            fontDisplay: c,
            fontStretch: l
        });
    }), RS = (t)=>Object.keys(t).map((r)=>wn(r, t[r].value)), Gd = (t, e, r)=>{
    if (e && e.isVariable) {
        let s = Jt(e.url, r) || e.url;
        return ls(s) ? fs(s) : gr(t, s, e.fontWeight, {
            fontStretch: e.fontStretch,
            fontDisplay: e.fontDisplay || "swap"
        });
    }
    if (e[0]) return wn(t, e, r).map(qd);
    let o = Array.isArray(e.url) ? e.url.map((s)=>Jt(s, r) || s) : Jt(e.url, r) || e.url;
    return gr(t, o, e.fontWeight, {
        fontStyle: e.fontStyle,
        fontDisplay: e.fontDisplay,
        fontStretch: e.fontStretch
    });
}, Ia = (t, e)=>Object.keys(t).map((n)=>Gd(n, t[n].value, e));
P();
P();
P();
var us = {};
F(us, {
    animation: ()=>ZS,
    breakpoints: ()=>YS,
    class: ()=>n_,
    color: ()=>BS,
    devices: ()=>XS,
    document: ()=>KS,
    font: ()=>$S,
    fontFace: ()=>LS,
    fontFamily: ()=>FS,
    fontFamilyTypes: ()=>DS,
    gradient: ()=>VS,
    grid: ()=>r_,
    icons: ()=>WS,
    media: ()=>MS,
    reset: ()=>o_,
    semanticIcons: ()=>HS,
    sequence: ()=>qe,
    shadow: ()=>US,
    sizes: ()=>i_,
    spacing: ()=>jS,
    svg: ()=>JS,
    svgData: ()=>QS,
    templates: ()=>t_,
    theme: ()=>zS,
    timing: ()=>GS,
    typography: ()=>$a,
    unit: ()=>PS,
    vars: ()=>s_
});
var qe = {
    "minor-second": 1.067,
    "major-second": 1.125,
    "minor-third": 1.2,
    "major-third": 1.25,
    "perfect-fourth": 1.333,
    "augmented-fourth": 1.414,
    "perfect-fifth": 1.5,
    "minor-sixth": 1.6,
    phi: 1.618,
    "major-sixth": 1.667,
    "square-root-3": 1.732,
    "minor-seventh": 1.778,
    "major-seventh": 1.875,
    octave: 2,
    "square-root-5": 2.23,
    "major-tenth": 2.5,
    "major-eleventh": 2.667,
    "major-twelfth": 3,
    pi: 3.14,
    "double-octave": 4
};
var PS = {
    default: "em"
};
var IS = {
    browserDefault: 16,
    base: 16,
    type: "font-size",
    ratio: qe["minor-third"],
    range: [
        -3,
        12
    ],
    h1Matches: 6,
    lineHeight: 1.5,
    subSequence: !0,
    mediaRegenerate: !1,
    unit: "em",
    templates: {},
    sequence: {},
    scales: {},
    vars: {}
}, $a = IS;
var $S = {};
var FS = {}, DS = {
    "sans-serif": "Helvetica, Arial, sans-serif, --system-default",
    serif: "Times New Roman, Georgia, serif, --system-default",
    monospace: "Courier New, monospace, --system-default"
}, LS = {};
var MS = {
    tv: "(min-width: 2780px)",
    light: "(prefers-color-scheme: light)",
    dark: "(prefers-color-scheme: dark)",
    print: "print"
};
var NS = {
    base: $a.base,
    type: "spacing",
    ratio: qe.phi,
    range: [
        -5,
        15
    ],
    subSequence: !0,
    mediaRegenerate: !1,
    unit: "em",
    sequence: {},
    scales: {},
    vars: {}
}, jS = NS;
var BS = {}, VS = {};
var zS = {};
var US = {};
var WS = {}, HS = {};
var qS = {
    default: 150,
    base: 150,
    type: "timing",
    ratio: qe["perfect-fourth"],
    range: [
        -3,
        12
    ],
    mediaRegenerate: !1,
    unit: "ms",
    sequence: {},
    scales: {},
    vars: {}
}, GS = qS;
var KS = {};
var YS = {
    screenL: 1920,
    screenM: 1680,
    screenS: 1440,
    tabletL: 1366,
    tabletM: 1280,
    tabletS: 1024,
    mobileL: 768,
    mobileM: 560,
    mobileS: 480,
    mobileXS: 375
}, XS = {
    screenXXL: [
        2560,
        1440
    ],
    screenXL: [
        2240,
        1260
    ],
    screenL: [
        1920,
        1024
    ],
    screenM: [
        1680,
        1024
    ],
    screenS: [
        1440,
        720
    ],
    tabletL: [
        1366,
        926
    ],
    tabletM: [
        1280,
        768
    ],
    tabletS: [
        1024,
        768
    ],
    mobileL: [
        768,
        375
    ],
    mobileM: [
        560,
        768
    ],
    mobileS: [
        480,
        768
    ],
    mobileXS: [
        375,
        768
    ]
};
var ZS = {};
var JS = {}, QS = {};
var t_ = {};
var e_ = {}, r_ = e_;
var n_ = {};
var o_ = {}, s_ = {}, i_ = {};
var Kd = {}, Yd = {}, ps = us, ds = {}, Fa = (t)=>t.replace(/_([a-z])/g, (e, r)=>r.toUpperCase());
for(let t in ps){
    let e = t.toLowerCase();
    ds[e] = ps[t];
    let r = Fa(e);
    r !== e && (ds[r] = ps[t]), e !== t && (ds[t] = ps[t]);
}
var Da = {
    verbose: !1,
    useVariable: !0,
    useReset: !0,
    globalTheme: "auto",
    cssVars: Kd,
    cssMediaVars: Yd,
    CSS_VARS: Kd,
    CSS_MEDIA_VARS: Yd,
    _scratchConfig: !0,
    ...ds
}, Xd = Q(Da), Se = {
    active: "0",
    0: Da
}, jE = (t)=>(vt(t) && (Se.active = t), Se[t || Se.active]), kn = [], pt = (t)=>{
    t && t._scratchConfig && kn.push(t);
}, at = ()=>{
    kn.pop();
}, E = (t)=>kn.length ? kn[kn.length - 1] : Se[t || Se.active] || Da, Zd = (t)=>{
    if (S(t)) return Se.active = "1", Se[1] = q(t, Q(Xd)), t;
}, a_ = [
    "useReset",
    "useVariable",
    "useFontImport",
    "useIconSprite",
    "useSvgSprite",
    "useDocumentTheme",
    "useDefaultIcons",
    "useDefaultConfig",
    "verbose",
    "globalTheme"
], c_ = [
    [
        "fontfamily",
        "fontFamily",
        "font_family"
    ],
    [
        "fontfamilytypes",
        "fontFamilyTypes"
    ],
    [
        "semanticicons",
        "semanticIcons"
    ],
    [
        "svgdata",
        "svgData"
    ]
], l_ = (t)=>{
    for (let e of c_){
        let r;
        for (let n of e){
            let o = t[n];
            S(o) && (r = r ? q(o, r) : o);
        }
        if (r) for (let n of e)S(t[n]) && (t[n] = r);
    }
}, Jd = (t, e, { cleanBase: r = !1 } = {})=>{
    let n = r ? null : E(), o = Q(!r && n && n._scratchConfig ? n : Xd);
    for (let i of a_)delete o[i];
    let s = q(e || {}, o);
    return s.cssVars = {}, s.cssMediaVars = {}, s.CSS_VARS = s.cssVars, s.CSS_MEDIA_VARS = s.cssMediaVars, s._scratchConfig = !0, l_(s), t && (Se[t] = s), s;
};
var _e = {
    "-6": "U",
    "-5": "V",
    "-4": "W",
    "-3": "X",
    "-2": "Y",
    "-1": "Z",
    0: "A",
    1: "B",
    2: "C",
    3: "D",
    4: "E",
    5: "F",
    6: "G",
    7: "H",
    8: "I",
    9: "J",
    10: "K",
    11: "L",
    12: "M",
    13: "N",
    14: "O",
    15: "P",
    16: "Q",
    17: "R",
    18: "S",
    19: "T"
}, La = (t, e)=>{
    let { key: r, variable: n, value: o, scaling: s, index: i, scalingVariable: a } = t;
    e.sequence[r] = {
        key: r,
        decimal: ~~(o * 100) / 100,
        val: ~~o,
        scaling: s,
        index: i,
        scalingVariable: a,
        variable: n
    }, e.scales[r] = s;
    let c = Qd.has(e.unit) ? "rem" : e.unit;
    e.vars[n] = s + c;
}, Ge = (t)=>{
    if (!t.includes("(")) return t;
    let e = t.split("(")[0], r = t.slice(t.indexOf("(") + 1, t.lastIndexOf(")"));
    return [
        e,
        r
    ];
}, Qd = new Set([
    "vw",
    "vh",
    "vmin",
    "vmax",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh"
]), Ma = (t, e)=>{
    let { base: r, type: n, unit: o } = e, s = Qd.has(o) ? "rem" : o, i = (qr(s) ? 1 : r) + s;
    if (t === 0) return i;
    let c = "--" + (e.varPrefix ? e.varPrefix + "-" : "") + (n && n.replace(".", "-")), l = `${c}-ratio`;
    if (t > 0) {
        let f = _e[t - 1];
        return `calc(var(${c}-${f}) * var(${l}))`;
    }
    if (t < 0) {
        let f = _e[t + 1], p = Math.abs(t), u = Math.pow(eh, 2 * p), d = _e[p];
        return d ? `max(calc(var(${c}-${f}) / var(${l})), calc(var(${c}-${d}) / ${u.toFixed(4)}))` : `calc(var(${c}-${f}) / var(${l}))`;
    }
}, th = (t, e, r, n)=>{
    let { type: o } = n, i = t === 2 && e.length === 2 ? t + 1 : t, l = `${"--" + (n.varPrefix ? n.varPrefix + "-" : "") + (o && o.replace(".", "-"))}-sub-ratio-`;
    return `calc(var(${r}) * var(${l + i}))`;
}, Na = (t, e)=>{
    let n = (t * e - t) / 1.618, o = t * e - n, s = t + n, i = (o + s) / 2;
    return [
        o,
        i,
        s
    ];
}, ja = (t, e)=>Na(t, e).map((r)=>r / t), Ba = (t, e)=>{
    let { key: r, base: n, value: o, ratio: s, variable: i, index: a } = t, l = ~~(o * s) - ~~o, f, [p, u, d] = Na(o, s);
    l > 16 ? f = [
        p,
        u,
        d
    ] : f = [
        p,
        d
    ], f.forEach((h, g)=>{
        let m = ~~(h / n * 1e3) / 1e3, y = i + (g + 1), b = a + (g + 1) / 10, w = th(g + 1, f, i, e), x = {
            key: r + (g + 1),
            variable: y,
            value: h,
            scaling: m,
            scalingVariable: w,
            index: b
        };
        La(x, e);
    });
}, eh = 1.618, f_ = (t, e, r)=>{
    if (t >= 0) return e * Math.pow(r, t);
    let n = Math.abs(t), o = e * Math.pow(r, t), s = e * Math.pow(r, n) / Math.pow(eh, 2 * n);
    return Math.max(o, s);
}, Ft = (t)=>{
    let { type: e, base: r, ratio: n, range: o, subSequence: s } = t, i = Math.abs(o[0]) + Math.abs(o[1]), c = "--" + (t.varPrefix ? t.varPrefix + "-" : "") + (e && e.replace(".", "-")) + "-";
    for(let l = 0; l <= i; l++){
        let f = o[1] - l, p = _e[f], u = f_(f, r, n), d = ~~(u / r * 100) / 100, h = c + p, g = Ma(f, t), m = {
            key: p,
            variable: h,
            value: u,
            base: r,
            scaling: d,
            scalingVariable: g,
            ratio: n,
            index: f
        };
        La(m, t), s && Ba(m, t);
    }
    return t;
}, u_ = (t, e = 0)=>{
    let { type: r, base: n, ratio: o, subSequence: s } = t, i = _(e) ? e : _e[e], a = _(e) ? Object.entries(_e).find(([, m])=>m === e)?.[0] : e;
    if (!i) return console.warn(`Position ${e} is out of range in numToLetterMap`), null;
    let c = {
        sequence: {},
        scales: {},
        vars: {},
        ...t
    }, l = n * Math.pow(o, a), f = ~~(l / n * 100) / 100, d = "--" + (t.varPrefix ? t.varPrefix + "-" : "") + (r && r.replace(".", "-")) + "-" + i, h = Ma(a, t), g = {
        key: i,
        variable: d,
        value: l,
        base: n,
        scaling: f,
        scalingVariable: h,
        ratio: o,
        index: a
    };
    return La(g, c), s && Ba(g, c), c;
}, Va = (t = "A", e)=>{
    let r = E(), { unit: n } = r;
    if (_(t) && ot(t)) return `var(${t})`;
    let { sequence: o, unit: s = n.default, useVariable: i } = e, a = /^-?[a-zA-Z]/i, c = a.test(t);
    if (Gr.some((x)=>t.includes(x)) || !c || [
        "none",
        "auto",
        "max-content",
        "min-content",
        "fit-content",
        "inherit",
        "initial",
        "unset",
        "revert",
        "revert-layer"
    ].includes(t)) return t;
    let u = `--${e.varPrefix ? e.varPrefix + "-" : ""}${ss(e.type.replace(".", "-"))}-`, d = t.toUpperCase(), h = d.slice(0, 1) === "-" ? "-" : "", g = h ? d.slice(1) : d, m = "";
    g.includes("_") && (m = "_" + g.split("_")[1].toLowerCase(), g = g.split("_")[0]);
    let y = (x)=>a.test(x) ? `var(${u}${x}${m})` : x;
    if (g.includes("+")) {
        let [x, v] = g.split("+"), A = `${y(x)} + ${y(v)}`;
        return h ? `calc((${A}) * -1)` : `calc(${A})`;
    } else if (g.includes("*")) {
        let [x, v] = g.split("*"), A = `${y(x)} * ${y(v)}`;
        return h ? `calc((${A}) * -1)` : `calc(${A})`;
    } else if (g.includes("-")) {
        let [x, v] = g.split("-"), A = `${y(x)} - ${y(v)}`;
        return h ? `calc((${A}) * -1)` : `calc(${A})`;
    }
    let b = r.sizes;
    if (b) {
        let x = b[t] || b[t.toLowerCase()];
        if (x !== void 0) return h ? `calc(${x} * -1)` : x;
    }
    if (!o[g] && g.length === 2 && (r.verbose && console.warn(g, "- value is not found because `subSequence` is set to false"), g = g.slice(0, 1)), i || r.useVariable) {
        let x = `var(${u}${g}${m})`;
        return h ? `calc(${x} * -1)` : x;
    }
    let w = o ? o[g] : null;
    return w ? s === "ms" || s === "s" ? h + w.val + s : h + w.scaling + s : console.warn("can't find", o, g);
}, rh = (t, e)=>{
    if (![
        "+",
        "-",
        "*",
        "/",
        ","
    ].filter((s)=>t.includes(s + " ")).length) return t;
    let n = /(\s*[+\-*/,]\s*)/;
    return t.split(n).map((s)=>{
        let i = s.trim();
        return !i || [
            "+",
            "-",
            "*",
            "/",
            ","
        ].includes(i) ? s : Va(i, e);
    }).join("");
}, we = (t, e, r, n)=>{
    if (typeof t != "string") return E().verbose && console.warn(e, t, "is not a string"), {
        [e]: t
    };
    if (t === "-" || t === "") return {};
    if (!n && t.includes("(")) {
        let s = Ge(t);
        n = s[0], t = s[1];
    }
    return [
        "+",
        "-",
        "*",
        "/",
        ","
    ].filter((s)=>t.includes(s + " ")).length ? t = rh(t, r) : t = Va(t, r), {
        [e]: n ? `${n}(${t})` : t
    };
}, nh = (t, e)=>_e[t - e], za = (t)=>{
    let { h1Matches: e, sequence: r } = t;
    return new Array(6).fill(null).map((n, o)=>{
        let s = nh(e, o);
        return r[s];
    });
};
P();
var p_ = (t, e)=>{
    let r = E(), { cssVars: n } = r;
    N(t.value) || (n[t.var] = t.value);
}, Ua = (t, e, r)=>{
    let n = E(), { unit: o } = n, s = e.unit || o.default, { base: i, ratio: a, type: c } = e, f = "--" + (e.varPrefix ? e.varPrefix + "-" : "") + (c && c.replace(".", "-"));
    t[`${f}-base`] = i, t[`${f}-unit`] = s;
    let p = `${f}-ratio`;
    t[p] = a;
    let [u, d, h] = ja(i, a);
    t[`${f}-sub-ratio-1`] = `calc(var(${f}-ratio) * ${u / a})`, t[`${f}-sub-ratio-2`] = `calc(var(${f}-ratio) * ${d / a})`, t[`${f}-sub-ratio-3`] = `calc(var(${f}-ratio) * ${h / a})`;
}, oh = new Set([
    "vw",
    "vh",
    "vmin",
    "vmax",
    "svw",
    "svh",
    "lvw",
    "lvh",
    "dvw",
    "dvh"
]), Ke = (t, e = {})=>{
    let r = E(), { unit: n, timing: o, cssVars: s } = r, i = t.unit || n.default, a = oh.has(i) ? "rem" : i, { mediaRegenerate: c, sequence: l, scales: f } = t;
    c || Ua(s, t, e);
    for(let p in l){
        let u = l[p], d = (t.type === o.type ? l[p].val : f[p]) + a;
        if (!c) {
            s[u.variable + "_default"] = d, s[u.variable] = u.scalingVariable;
            continue;
        }
        e.useDefault === !1 ? s[u.variable] = d : (s[u.variable + "_default"] = d, s[u.variable] = `var(${u.variable + "_default"})`);
    }
}, mr = (t, e, r = {})=>{
    let n = E(), { unit: o, media: s, cssVars: i } = n, a = e.slice(1), c = t[e], l = c.unit || t.unit || o.default, f = oh.has(l) ? "rem" : l, { mediaRegenerate: p } = t, { sequence: u, scales: d } = c, h = s[a];
    if (!h && n.verbose && console.warn("Can't find media query ", h), !p) {
        let g = i[`@media ${h}`];
        g || (g = i[`@media ${h}`] = {}), Ua(g, c, r);
        let m = t.unit || o.default;
        if (f !== m && u) for(let y in u){
            let b = u[y], w = d[y] + f;
            g[b.variable + "_default"] = w, g[b.variable] = w;
        }
        return;
    }
    for(let g in u){
        let m = u[g], y = (qr(f) ? d[g] : u[g].val) + f;
        !h && n.verbose && console.warn("Can't find query ", h);
        let b = i[`@media ${h}`];
        b || (b = i[`@media ${h}`] = {}), b[m.variable] = `var(${m.variable + "_" + a})`, i[m.variable + "_" + a] = y;
    }
};
P();
var ih = cr(), hs = (t)=>{
    let e = E(), r = "";
    for(let n in t)e.__svgCache[n] || (e.__svgCache[n] = !0, r += t[n]);
    return r;
}, d_ = (t)=>{
    let e = t && (t.default || t);
    if (!_(e)) return ih && console.warn("parseRootAttributes:", e, "is not a string"), {};
    let r = e.match(/<svg\s+(.*?)>/);
    if (!r || !r[1]) return {};
    let o = r[1].match(/(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/gm);
    return o ? o.reduce((s, i)=>{
        let [a, c] = i.split("=");
        return s[a] = c.replace(/['"]/g, ""), s;
    }, {}) : {};
}, h_ = (t, e)=>{
    let r = [];
    if (t.replace(/id="([^"]*)"/g, (o, s)=>(r.push(s), o)), !r.length) return t;
    let n = t;
    for (let o of r){
        let s = o.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), i = `${e}-${o}`;
        n = n.replace(new RegExp(`id="${s}"`, "g"), `id="${i}"`).replace(new RegExp(`url\\(#${s}\\)`, "g"), `url(#${i})`).replace(new RegExp(`xlink:href="#${s}"`, "g"), `xlink:href="#${i}"`).replace(new RegExp(`href="#${s}"`, "g"), `href="#${i}"`);
    }
    return n;
}, sh = new Set, Wa = (t, e)=>{
    let r = e && e.default ? e.default : e;
    if (!_(r)) return ih && !sh.has(t) && (sh.add(t), console.warn("convertSvgToSymbol:", t, "is not a string")), "";
    e = r;
    let n = d_(e), { width: o, height: s } = n, i = n.viewBox || `0 0 ${o || 24} ${s || 24}`, l = h_(e, t).replace("<svg", `<symbol id="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="${i}"`);
    return l = l.replace(/width="[^"]*"/, ""), l = l.replace(/height="[^"]*"/, ""), l = l.replace("</svg", "</symbol"), l = y_(l), l;
}, g_ = "line|circle|ellipse|rect|polyline|polygon|path|stop|use|image", m_ = new RegExp(`<(${g_})\\b([^>]*?)\\s*/>`, "g"), y_ = (t)=>t.replace(m_, "<$1$2></$1>");
var bs = {};
F(bs, {
    appendSVGSprite: ()=>cc,
    appendSvgIconsSprite: ()=>fc,
    applyDocument: ()=>sc,
    applyHeadings: ()=>uh,
    applyReset: ()=>uc,
    applySpacingSequence: ()=>ec,
    applyTimingSequence: ()=>oc,
    applyTypographySequence: ()=>Ja,
    checkIfBoxSize: ()=>tc,
    getColor: ()=>tt,
    getFontFamily: ()=>Za,
    getFontSizeByKey: ()=>Qa,
    getMediaColor: ()=>bt,
    getMediaTheme: ()=>Qt,
    getShadow: ()=>nc,
    getSpacingBasedOnRatio: ()=>fe,
    getSpacingByKey: ()=>dt,
    getTheme: ()=>Ga,
    getTimingByKey: ()=>Vt,
    getTimingFunction: ()=>te,
    runThroughMedia: ()=>fh,
    setColor: ()=>br,
    setFont: ()=>Xa,
    setFontFamily: ()=>ms,
    setGradient: ()=>xr,
    setMediaTheme: ()=>Ya,
    setSVG: ()=>ys,
    setShadow: ()=>Sr,
    setSvgIcon: ()=>lc,
    setTheme: ()=>Ka,
    splitSpacedValue: ()=>rc
});
P();
var tt = (t, e, r)=>{
    let n = r || E();
    if (!_(t)) {
        n.verbose && console.warn(t, "- type for color is not valid");
        return;
    }
    if (ot(t)) return `var(${t})`;
    e && t[e] && (t = t[e]);
    let o, s, i;
    if (T(t)) [o, s, i] = t;
    else {
        let p = He(t);
        if (!p) {
            let { color: u, gradient: d } = n, h = d[t] || u[t];
            return h ? n.useVariable ? `var(${h.var})` : h.value : t;
        }
        if (p.passthrough) return p.passthrough;
        if (p.cssVar) return `var(${p.cssVar})`;
        o = p.name, s = p.alpha, i = p.tone;
    }
    let { color: a, gradient: c } = n, l = a[o] || c[o];
    if (!l) return n.verbose && console.warn("Can't find color ", o), t;
    e && (l[e] ? l = l[e] : n.verbose && console.warn(t, " - does not have ", e));
    let f = l.rgb;
    return f ? (i && !l[i] && (f = hr(f, i), l[i] = {
        rgb: f,
        var: `${l.var}-${i}`
    }), l[i] && (f = l[i].rgb), s ? `rgba(${f}, ${s})` : i ? `rgba(${f}, 1)` : n.useVariable ? `var(${l.var})` : `rgb(${f})`) : n.useVariable ? `var(${l.var})` : l.value;
}, bt = (t, e, r)=>{
    let n = r || E();
    if (e || (e = n.globalTheme === "auto" ? null : n.globalTheme), !_(t)) {
        n.verbose && console.warn(t, "- type for color is not valid");
        return;
    }
    if (ot(t)) return `var(${t})`;
    let o;
    if (T(t)) o = t[0];
    else {
        let l = He(t);
        if (!l) return t;
        if (l.passthrough) return l.passthrough;
        if (l.cssVar) return `var(${l.cssVar})`;
        o = l.name;
    }
    let { color: s, gradient: i } = n, a = s[o] || i[o], c = S(a);
    if (c && a.value) return tt(t, `@${e}`, r);
    if (c) {
        if (n.useVariable && a.var) return `var(${a.var})`;
        if (e) return tt(t, `@${e}`, r);
        {
            let l = {};
            for(let f in a){
                if (f.charCodeAt(0) !== 64) continue;
                let p = n.media[f.slice(1)];
                if (!p) continue;
                let u = "@media " + (p === "print" ? `${p}` : `screen and ${p}`);
                l[u] = tt(t, f, r);
            }
            return l;
        }
    } else return n.verbose && console.warn("Can't find color", t), t;
}, br = (t, e, r)=>{
    let n = E();
    if (_(t) && ot(t)) {
        let g = t.slice(2);
        if (t = tt(g), !(t.includes("rgb") || t.includes("var") || t.includes("#"))) {
            let m = g.split(" "), y = n.color[m[0]];
            if (y && !y.value && !y.rgb && (_(y) || T(y) || S(y)) && (n.color[m[0]] = br(y, m[0]), y = n.color[m[0]]), y && y.value) {
                let b = y.rgb, w = m[1] !== void 0 ? m[1] : "1", x = m[2];
                x && (b = hr(b, x)), t = `rgba(${b}, ${w})`;
            } else {
                let b = m[2], w = m[1] !== void 0 ? m[1] : "1";
                if (b) try {
                    let x = be(m[0]);
                    x && x.length >= 3 ? t = `rgba(${hr(x.slice(0, 3).join(", "), b)}, ${w})` : t = m[0];
                } catch  {
                    t = m[0];
                }
                else t = m[0];
            }
        }
    }
    if (T(t) && (t = {
        "@light": t[0],
        "@dark": t[1]
    }), S(t)) {
        let g = {};
        for(let m in t)g[m] = br(t[m], e, m.slice(0, 1) === "@" ? m.slice(1) : m);
        if (n.useVariable) {
            let y = `--${n.varPrefix ? n.varPrefix + "-" : ""}color-${e}`, b, w = {};
            for(let x in g){
                if (x.charCodeAt(0) !== 64) continue;
                let v = x.slice(1), A = g[x], R = A && (A.value || A);
                !R || typeof R != "string" || (w[v] = R, (v === "light" || b === void 0) && (b = R));
            }
            if (b !== void 0) {
                n.cssVars[y] = b, n.cssMediaVars || (n.cssMediaVars = {});
                for(let x in w){
                    let v = `[data-theme="${x}"]`;
                    if (n.cssMediaVars[v] || (n.cssMediaVars[v] = {}), n.cssMediaVars[v][y] = w[x], x === "light" || x === "dark") {
                        let A = `@media (prefers-color-scheme: ${x})`;
                        n.cssMediaVars[A] || (n.cssMediaVars[A] = {}), n.cssMediaVars[A][y] = w[x];
                    }
                }
                g.var = y;
            }
        }
        return g;
    }
    let s = `--${n.varPrefix ? n.varPrefix + "-" : ""}color-${e}` + (r ? `-${r}` : ""), i = t.value || t;
    if (_(i) && i.includes(".") && !i.includes("(")) {
        let [g, m] = i.split("."), y = n.color[g];
        y && y.rgb && (i = `rgba(${y.rgb}, ${parseFloat("0." + m) || 1})`);
    }
    if (_(i) && !i.includes("(") && !i.startsWith("#")) {
        let g = He(i);
        if (g && g.name && !g.passthrough && !g.cssVar) {
            let m = n.color[g.name];
            m && !m.value && !m.rgb && (_(m) || T(m) || S(m)) && (n.color[g.name] = br(m, g.name));
            let y = n.color[g.name];
            if (y && y.rgb) {
                let b = y.rgb;
                g.tone && (b = hr(b, g.tone));
                let w = g.alpha ? parseFloat(g.alpha) : 1;
                i = `rgba(${b}, ${w})`;
            }
        }
    }
    let a = be(i), [c, l, f, p = 1] = a, u = parseFloat(p.toFixed(2)), d = `${c}, ${l}, ${f}`, h = `rgba(${d}, ${u})`;
    return n.useVariable && (n.cssVars[s] = h), {
        var: s,
        rgb: d,
        alpha: u,
        value: h
    };
}, xr = (t, e, r)=>{
    let n = E();
    if (_(t) && ot(t) && (t = tt(t.slice(2))), T(t)) return {
        "@light": xr(t[0], e, "light"),
        "@dark": xr(t[0], e, "dark")
    };
    if (S(t)) {
        let i = {};
        for(let a in t)i[a] = xr(t[a], e, a.slice(0, 1) === "@" ? a.slice(1) : a);
        return i;
    }
    let s = `--${n.varPrefix ? n.varPrefix + "-" : ""}gradient-${e}` + (r ? `-${r}` : "");
    return n.useVariable && (n.cssVars[s] = t.value || t), {
        var: s,
        value: t.value || t
    };
};
P();
var b_ = new Set([
    "black",
    "white",
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "grey",
    "cyan",
    "magenta",
    "lime",
    "olive",
    "navy",
    "teal",
    "aqua",
    "maroon",
    "silver",
    "fuchsia",
    "transparent",
    "currentColor",
    "currentcolor",
    "inherit",
    "initial",
    "unset",
    "none",
    "aliceblue",
    "antiquewhite",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "blanchedalmond",
    "blueviolet",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "limegreen",
    "linen",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "oldlace",
    "olivedrab",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "plum",
    "powderblue",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "whitesmoke",
    "yellowgreen",
    "rebeccapurple"
]), ah = [
    "color",
    "Color",
    "background",
    "Background",
    "fill",
    "Fill",
    "stroke",
    "Stroke"
], x_ = (t)=>{
    for(let e = 0; e < ah.length; e++)if (t.includes(ah[e])) return !0;
    return !1;
}, gs = (t)=>{
    let e = {}, { state: r, media: n, helpers: o, ...s } = t;
    return Object.keys(s).map((a)=>{
        let l = [
            "color",
            "Color",
            "background",
            "border"
        ].some((f)=>a.includes(f));
        return e[a] = l ? tt(t[a]) : t[a];
    }), e;
}, vn = (t)=>(t.value || (t.value = gs(t)), t.value), Ga = (t, e)=>{
    let r = E();
    if (r.useVariable) return Qt(t, e);
    let n = r.theme;
    if (_(t)) {
        let [o, s] = t.split(" "), i = n[o];
        if (i) {
            if (!s && !e) return vn(i);
            t = [
                o,
                s || e
            ];
        }
    }
    if (N(t) && t[1]) {
        let o = t[0], s = t[1], { helpers: i, media: a, state: c } = n[o];
        if (a && a[s]) return vn(a[s]);
        if (i && i[s]) return vn(i[s]);
        if (c && c[s]) return vn(c[s]);
    } else if (S(t)) return gs(t);
}, S_ = (t, e, r)=>{
    if (S(e)) t.variants.inverse.value = gs(e);
    else if (e === !0) {
        let { color: n, background: o } = r;
        t.variants.inverse = {
            value: {
                color: o,
                background: n
            }
        };
    }
}, __ = (t, e, r, n)=>{
    let o = Ga(r);
    n[`&:${e}`] = o, S(r) && !r.value && (r.value = o);
}, w_ = (t, e)=>{
    let { state: r } = t;
    return r ? (Object.keys(r).map((o)=>{
        let s = r[o];
        return __(t, o, s, e), t;
    }), t) : void 0;
}, k_ = (t, e, r, n)=>{
    let o = Ga(r);
    n[`@media (prefers-color-scheme: ${e})`] = o, S(r) && !r.value && (r.value = o);
}, v_ = (t, e)=>{
    let { media: r } = t;
    return r ? (Object.keys(r).map((o)=>{
        let s = r[o];
        return (o === "dark" || o === "light") && k_(t, o, s, e), o === "inverse" && S_(t, s, e), t;
    }), t) : void 0;
}, C_ = (t, e)=>{
    let r = E(), { helpers: n } = t;
    return n ? (Object.keys(n).map((s)=>{
        let i = n[s];
        return _(i) ? n[s] = r.theme[i] : vn(n[s]), t;
    }), t) : void 0;
}, Ka = (t, e)=>{
    let r = E();
    if (r.useVariable) return Ya(t, e);
    let { state: n, media: o, helpers: s } = t, i = gs(t, e), c = `--${r.varPrefix ? r.varPrefix + "-" : ""}theme-${e}`;
    return w_(t, i), v_(t, i), C_(t, i), {
        var: c,
        value: i,
        state: n,
        media: o,
        helpers: s
    };
};
var Ha = (t, e, r)=>{
    let { cssVars: n } = r;
    r.cssMediaVars || (r.cssMediaVars = {});
    let o = r.cssMediaVars, s = r.globalTheme !== void 0 ? r.globalTheme : "auto", i = {}, a = new Set;
    for(let l in t)if (t[l]) for (let f of Object.keys(t[l]))a.add(f);
    let c = new Set;
    for (let l of a){
        let f = l.slice(0, 1);
        if (!(f === "@" || f === "." || f === ":") && x_(l)) for(let p in t){
            if (c.has(p)) continue;
            let u = t[p]?.[l];
            if (u === void 0) continue;
            let d = tt(u, `@${p}`);
            d !== void 0 && _(d) && /^[a-z][a-zA-Z]+$/.test(d) && !b_.has(d) && c.add(p);
        }
    }
    for (let l of a){
        let f = l.slice(0, 1), p = Object.values(t).some((u)=>N(u?.[l]));
        if (f === "." && p) {
            let u = l.slice(1), d = {};
            for(let h in t)N(t[h]?.[l]) && (d[h] = t[h][l]);
            i[l] = Ha(d, `${e}-${u}`, r);
        } else if (f === ":" && p) {
            let u = l.replace(/^:+/, ""), d = {};
            for(let h in t)N(t[h]?.[l]) && (d[h] = t[h][l]);
            i[l] = Ha(d, `${e}-${u}`, r);
        } else if (f !== "@" && f !== "." && f !== ":") {
            let d = `--${r.varPrefix ? r.varPrefix + "-" : ""}theme-${e}-${l}`, h = s && s !== "auto" ? String(s).replace(/^'|'$/g, "") : null, g;
            for(let m in t){
                if (c.has(m)) continue;
                let y = t[m]?.[l];
                if (y === void 0) continue;
                let b = tt(y, `@${m}`);
                if (b === void 0) continue;
                (h && m === h || !h && (m === "light" || g === void 0)) && (g = b);
                let w = `[data-theme="${m}"]`;
                if (o[w] || (o[w] = {}), o[w][d] = b, m === "dark" || m === "light") {
                    let x = `@media (prefers-color-scheme: ${m})`;
                    o[x] || (o[x] = {}), o[x][d] = b;
                }
            }
            g !== void 0 && (n[d] = g), i[l] = `var(${d})`, i[`.${l}`] = {
                [l]: i[l]
            };
        }
    }
    return (i.background || i.color || i.backgroundColor) && (i[".inversed"] = {
        color: i.background || i.backgroundColor,
        background: i.color
    }), i;
}, Ya = (t, e, r, n)=>{
    let o = E(), { cssVars: s } = o, i = {
        value: t
    }, a = !r && !n;
    if (N(t)) {
        if (a && o.useVariable) {
            let c = {};
            for(let l in t)l.startsWith("@") && N(t[l]) && (c[l.slice(1)] = t[l]);
            if (Object.keys(c).length) {
                let l = Ha(c, e, o);
                Object.assign(i, l);
            }
        }
        for(let c in t){
            let l = c.slice(0, 1), f = t[c];
            if (l === "@" || l === ":" || l === ".") {
                let p = l === "@" && c;
                i[c] = Ya(f, e, c, n || p);
            } else if (!a) {
                let p = tt(f, n), u = [
                    ...new Set([
                        n,
                        r
                    ].filter((m)=>m).map((m)=>m.slice(1)))
                ], d = u.length ? "-" + u.join("-") : "", g = `--${o.varPrefix ? o.varPrefix + "-" : ""}theme-${e}${d}-${c}`;
                o.useVariable ? (o.useThemeSuffixedVars && (s[g] = p), i[c] = `var(${g})`) : i[c] = p, i[`.${c}`] = {
                    [c]: i[c]
                };
            }
        }
        !i[".inversed"] && (i.background || i.color || i.backgroundColor) && (i[".inversed"] = {
            color: i.background || i.backgroundColor,
            background: i.color
        });
    }
    if (_(t) && ot(t)) {
        let l = o.theme[t.slice(2)];
        return Qt(l, n);
    }
    return i;
}, qa = (t)=>{
    let e = E(), r = {};
    for(let n in t){
        let o = n.slice(0, 1);
        if (N(t[n])) {
            if (o === "@") continue;
            o === ":" ? r[`&${n}`] = qa(t[n]) : o === "." && (r[`&${n}`] = qa(t[n]));
        } else r[n] = t[n];
    }
    return r;
}, lh = (t, e)=>{
    let r = e.shift();
    return t[r] ? lh(t[r], e) : t;
}, ch = (t, e)=>T(e) ? lh(t, e) : _(e) && t[e] ? t[e] : t;
var Qt = (t, e)=>{
    let r = E();
    if (_(t) && ot(t) && (t = Qt(t.slice(2))), !t || !_(t)) {
        r.verbose && console.warn(`${t} - Theme is not a string`);
        return;
    }
    let [n, ...o] = T(t) ? t : t.split(" "), s = r.theme[n];
    return s && o.length ? s = ch(s, o) : s && e && (s = ch(s, e)), qa(s);
};
P();
P();
var Xa = (t, e)=>{
    let r = E(), n = `--font-${e}`;
    if (!t || T(t) && !t[0]) return;
    let o;
    if (t.isVariable) {
        let s = Jt(t.url, r.files) || t.url;
        ls(s) ? o = fs(s) : o = gr(e, s, t.fontWeight, {
            fontStretch: t.fontStretch,
            fontDisplay: t.fontDisplay || "swap"
        });
    } else if (t[0]) o = wn(e, t, r.files);
    else {
        let s = Array.isArray(t.url) ? t.url.map((i)=>Jt(i, r.files) || i) : Jt(t.url, r.files) || t.url;
        o = gr(e, s, t.fontWeight, {
            fontStyle: t.fontStyle,
            fontDisplay: t.fontDisplay,
            fontStretch: t.fontStretch
        });
    }
    return {
        var: n,
        value: t,
        fontFace: o
    };
}, Za = (t, e)=>{
    let r = E(), { fontFamily: n } = r;
    return _n(e || n, t);
}, ms = (t, e)=>{
    let r = E(), { fontFamily: n, fontFamilyTypes: o } = r, { value: s, type: i } = t;
    t.isDefault && (n.default = e), S(s) && (s = pr(s));
    let a = `--font-family-${e}`, c = `${s.join(", ")}, ${o[i]}`;
    return {
        var: a,
        value: c,
        arr: s,
        type: i
    };
};
P();
var fh = (t)=>{
    let e = E(), { typography: r, media: n } = e;
    for(let o in t){
        let s = o.slice(0, 1) === "@", i = t[o];
        if (!s) continue;
        let { mediaRegenerate: a } = t, c = o.slice(1), { type: l, base: f, ratio: p, range: u, subSequence: d, h1Matches: h, unit: g } = t;
        et(i, {
            type: l,
            base: f,
            ratio: p,
            range: u,
            subSequence: d,
            h1Matches: h,
            unit: g
        });
        let m = new Set([
            "vw",
            "vh",
            "vmin",
            "vmax",
            "svw",
            "svh",
            "lvw",
            "lvh",
            "dvw",
            "dvh"
        ]), y = i.unit || g, b = !i.unit && m.has(g) ? "rem" : y, w = n[c], x = "@media " + (w === "print" ? `${w}` : `screen and ${w}`);
        if (r.templates[x] = {
            fontSize: i.base / r.browserDefault + b
        }, !a) {
            et(i, {
                sequence: {},
                scales: {},
                vars: {}
            }), Ft(i), mr(t, o);
            continue;
        }
        et(i, {
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
        }), Ft(i), mr(t, o);
    }
}, uh = (t)=>{
    let e = E();
    if (t.h1Matches) {
        let r = t.unit, n = za(t), { templates: o } = t;
        for(let s in n){
            let i = `h${parseInt(s) + 1}`, a = o[i];
            o[i] = {
                fontSize: e.useVariable ? `var(${n[s]?.variable})` : `${n[s]?.scaling}${r}`,
                margin: a ? a.margin : 0,
                lineHeight: a ? a.lineHeight : t.lineHeight,
                letterSpacing: a ? a.letterSpacing : t.letterSpacing,
                fontWeight: a ? a.fontWeight : 900 - s * 100
            };
        }
    }
}, Ja = ()=>{
    let t = E(), { typography: e } = t;
    Ft(e), uh(e), Ke(e), fh(e);
}, Qa = (t)=>{
    let e = E(), { typography: r } = e;
    return we(t, "fontSize", r);
};
P();
P();
var A_ = (t)=>{
    let r = E().spacing || {}, n = parseFloat(t.spacingRatio), o = {
        ...r,
        ratio: Number.isFinite(n) ? n : r.ratio,
        sequence: {},
        scales: {}
    };
    return Ft(o), o;
}, E_ = (t)=>{
    for(let e in t){
        let r = t[e];
        if (!(e.slice(0, 1) === "@")) continue;
        let { type: o, base: s, ratio: i, range: a, subSequence: c, h1Matches: l, unit: f } = t;
        et(r, {
            type: o,
            base: s,
            ratio: i,
            range: a,
            subSequence: c,
            h1Matches: l,
            unit: f,
            sequence: {},
            scales: {},
            templates: {},
            vars: {}
        }), Ft(r), mr(t, e);
    }
}, tc = (t)=>{
    let e = t.toLowerCase(), r = e.includes("width") || e.includes("height"), n = e.includes("border") || e.includes("outline");
    return r && !n;
}, ec = ()=>{
    let t = E(), { spacing: e } = t;
    Ft(e), Ke(e), E_(e);
}, T_ = (t)=>{
    let e = E(), { spacing: r } = e;
    return !t || !t.sequence ? r : Object.keys(t.sequence).length > 0 ? t : Ft(t);
}, dt = (t, e = "padding", r, n)=>{
    let o = T_(r);
    if (_(t) && !n && t.includes("(")) {
        let i = Ge(t);
        n = i[0], t = i[1];
    }
    let s = n ? [
        t
    ] : pr(t);
    if (T(s)) {
        if (s.length > 1) {
            let i = "";
            e === "borderWidth" && (e = "border", i = "Width");
            let a = {
                2: [
                    "Block",
                    "Inline"
                ],
                3: [
                    "BlockStart",
                    "Inline",
                    "BlockEnd"
                ],
                4: [
                    "BlockStart",
                    "InlineEnd",
                    "BlockEnd",
                    "InlineStart"
                ]
            }, c = (l, f)=>we(s[f], e + l + i, o, n);
            return a[s.length].map((l, f)=>c(l, f));
        }
        return we(t, e, o, n);
    }
}, fe = (t, e, r, n)=>{
    let o = E(), { spacing: s } = o, i = r || t[e];
    if (!n && _(i) && i.includes("(")) {
        let a = Ge(i);
        n = a[0], i = a[1];
    }
    if (t.spacingRatio) {
        let a = A_(t);
        return dt(i, e, a, n);
    }
    return dt(i, e, s, n);
}, rc = (t)=>{
    let e = (r)=>{
        let n = [
            "+",
            "-",
            "*",
            "/"
        ].includes(r), o = Gr.some((i)=>t.includes(i));
        return n || o ? r : r.length < 3 && /[A-Z]/.test(r) ? r + "_default" : r;
    };
    return t.split(",").map((r)=>r.trim()).map(e).join(",").split(" ").map(e).join(" ");
};
P();
var Sr = (t, e, r, n)=>{
    let o = E();
    if (T(t)) return {
        "@light": Sr(t[0], e, "light"),
        "@dark": Sr(t[1], e, "dark")
    };
    if (S(t)) {
        let a = {};
        for(let c in t)a[c] = Sr(t[c], e, c.startsWith("@") ? c.slice(1) : c);
        return a;
    }
    _(t) && !le.test(t) && (t = dr(t).map((a)=>(a = a.trim(), a.split(/\s+/).map((c)=>{
            if (c = c.trim(), !c) return "";
            if (c.startsWith("--")) return `var(${c})`;
            let l = tt(c);
            if (xe(l)) return l;
            if (/^\d/.test(c) || c === "0" || c.includes("px") || c.slice(-2) === "em" || c === "inset" || c === "none") return c;
            let f = dt(c, "shadow");
            return f && f.shadow ? f.shadow : c;
        }).join(" "))).join(", "));
    let i = `--${o.varPrefix ? o.varPrefix + "-" : ""}shadow-${e}` + (r ? `-${r}` : "");
    return o.useVariable && (o.cssVars[i] = t), {
        var: i,
        value: t
    };
}, nc = (t, e)=>{
    let r = E();
    if (e || (e = r.globalTheme), !_(t)) {
        r.verbose && console.warn(t, "- type for color is not valid");
        return;
    }
    if (ot(t)) return `var(${t})`;
    let [n] = T(t) ? t : t.split(" "), s = r.shadow[n], i = S(s);
    if (!s) return r.verbose && console.warn("Can't find color ", n), t;
    if (e) {
        if (s[e]) return s[e].value;
        r.verbose && console.warn(t, " - does not have ", e);
    }
    if (i && s.value) return s.value;
    if (i) {
        let a = {};
        for(let c in s){
            let l = r.media[c.slice(1)], f = "@media " + (l === "print" ? `${l}` : `screen and ${l}`);
            a[f] = s.value;
        }
        return a;
    }
    return r.verbose && console.warn("Can't find color", t), t;
};
P();
var oc = ()=>{
    let t = E(), { timing: e } = t;
    Ft(e), Ke(e);
}, te = (t)=>{
    let e = E(), { timing: r } = e;
    return r[t] || r[os(t)] || t;
}, Vt = (t, e = "timing")=>{
    let r = E(), { timing: n } = r;
    return we(t, e, n);
};
P();
var sc = ()=>{
    let t = E(), { document: e, fontFamily: r, theme: n, typography: o } = t;
    return et(e, {
        theme: n.document,
        fontFamily: _n(r),
        fontSize: o.base,
        lineHeight: o.lineHeight
    });
};
P();
var ac = {
    document: Y
}, ys = (t, e)=>{
    let r = E();
    if (!t) {
        r.verbose && console.warn("setSVG: val is not defined", e);
        return;
    }
    return r.useSvgSprite ? Wa(e, t) : t;
}, cc = (t, e = ac)=>{
    let r = E(), n = Object.keys(t).length ? {} : r.svg;
    for(let o in t)n[o] = t[o];
    dh(n, e);
}, lc = (t, e)=>{
    let r = E();
    return r.useIconSprite && !r.semanticIcons?.[e] ? ys(t, e) : t;
}, fc = (t, e = ac)=>{
    let r = E(), n = Object.keys(t).length ? {} : r.icons;
    for(let o in t)n[o] = t[o];
    dh(n, e);
}, ic = (t, e = {
    isRoot: !0
})=>{
    if (!t || !t.createElementNS) return;
    let r = t.createElementNS("http://www.w3.org/2000/svg", "svg");
    return e.isRoot && (r.setAttribute("aria-hidden", "true"), r.setAttribute("width", "0"), r.setAttribute("height", "0"), r.setAttribute("style", "position:absolute"), r.setAttribute("id", "svgSprite")), r;
}, O_ = (t, e)=>{
    let r = typeof DOMParser < "u" ? DOMParser : null;
    if (r) {
        let n = `<svg xmlns="http://www.w3.org/2000/svg">${e}</svg>`, s = new r().parseFromString(n, "image/svg+xml");
        return s.querySelector("parsererror") ? null : s.documentElement;
    }
    return null;
}, ph = (t, e, r)=>{
    for(; e.firstChild;){
        let n = e.firstChild;
        r.appendChild(t.importNode(n, !0)), n.remove();
    }
}, dh = (t, e = ac)=>{
    let r = E(), n = e.document || Y;
    if (!n || !n.documentElement) return r.verbose && console.warn("To append SVG sprites it should be run in browser environment"), hs(t);
    let o = n.querySelector("#svgSprite"), s = hs(t), i = `<svg aria-hidden="true" width="0" height="0" style="position:absolute" id="svgSprite">${s}</svg>`, a = O_(n, s);
    if (o) {
        if (a) ph(n, a, o);
        else if (n.body.insertAdjacentHTML) o.insertAdjacentHTML("beforeend", s);
        else {
            let c = ic(n, {
                isRoot: !1
            });
            c.innerHTML = s, o.append(...c.children);
        }
    } else if (a) {
        let c = ic(n);
        c && c.nodeType && (ph(n, a, c), n.body.prepend(c));
    } else if (n.body.insertAdjacentHTML) n.body.insertAdjacentHTML("afterbegin", i);
    else {
        let c = ic(n);
        c && c.nodeType && (c.innerHTML = s, n.body.prepend(c));
    }
};
P();
var uc = (t = {})=>{
    let e = E(), { reset: r, typography: n, document: o } = e;
    if (r) {
        if (r[":root"]) {
            let c = r, l = n.templates;
            c.body = {
                ...e.useDocumentTheme ? Qt("document") : {},
                ...l.body
            }, c.h1 = l.h1, c.h2 = l.h2, c.h3 = l.h3, c.h4 = l.h4, c.h5 = l.h5, c.h6 = l.h6;
        }
        let { body: s, ...i } = n.templates, a = e.useDocumentTheme ? Qt("document") : {};
        if (r.html && At(r.html, a), n.unit) {
            let { media: c } = e;
            for(let l in n){
                if (l.charAt(0) !== "@") continue;
                let f = n[l];
                if (!f || f.unit === n.unit || !f.unit) continue;
                let p = f.unit, u = f.base || n.base, d = f.browserDefault || n.browserDefault, h = l.slice(1), g = c[h];
                if (!g) continue;
                let m = "@media " + (g === "print" ? g : "screen and " + g);
                r[m] || (r[m] = {}), r[m].html || (r[m].html = {}), r[m].html.fontSize = u / d + p;
            }
        }
        return q(et(r, t), {
            html: {
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                margin: "0",
                WebkitFontSmoothing: "subpixel-antialiased",
                scrollBehavior: "smooth",
                ...a,
                fontSize: n.unit ? n.base / n.browserDefault + n.unit : n.browserDefault + "px",
                fontFamily: o.fontFamily,
                lineHeight: o.lineHeight
            },
            body: {
                boxSizing: "border-box",
                height: "100%",
                margin: 0,
                fontFamily: o.fontFamily,
                fontSize: n.base / n.browserDefault + e.unit.default,
                ...i,
                ...s
            },
            a: {
                color: "currentColor"
            },
            button: {
                color: "inherit",
                font: "inherit",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                appearance: "none",
                WebkitAppearance: "none"
            },
            "input, select, textarea": {
                color: "inherit",
                font: "inherit"
            },
            fieldset: {
                border: 0,
                padding: 0,
                margin: 0
            }
        });
    }
};
P();
var R_ = new Set([
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
    "initial"
]), P_ = new Set([
    "to",
    "top",
    "bottom",
    "left",
    "right",
    "center",
    "at",
    "circle",
    "ellipse",
    "closest-side",
    "farthest-side",
    "closest-corner",
    "farthest-corner"
]), I_ = (t)=>R_.has(t), ke = (t)=>{
    let e = t + "";
    if (le.test(e)) return e;
    let r = e.trim();
    return r === "none" || r === "0" || r === "initial" || r === "inherit" || r === "unset" ? e : e.split(/\s+/).map((o)=>{
        if (o = o.trim(), !o) return "";
        if (ot(o)) return `var(${o})`;
        if (I_(o) || /^\d/.test(o) || o === "0") return o;
        let s = tt(o);
        if (xe(s)) return s;
        let i = dt(o, "border");
        return i && i.border ? i.border : o;
    }).join(" ");
}, hh = (t)=>le.test(t) ? t : t.split(/\s+/).map((e)=>{
        if (e = e.trim(), !e) return "";
        if (ot(e)) return `var(${e})`;
        if (/^\d/.test(e) || e.includes("px") || e === "0") return e;
        let r = tt(e);
        return xe(r) ? r : e;
    }).join(" "), gh = (t, e)=>nc(t, e), pc = (t, e)=>le.test(t) ? t : dr(t).map((r)=>(r = r.trim(), r ? r.split(/\s+/).map((n)=>{
            if (n = n.trim(), !n) return "";
            if (ot(n)) return `var(${n})`;
            if (n === "inset" || n === "none") return n;
            let o = tt(n);
            if (xe(o)) {
                let i = bt(n, e);
                return S(i) ? Object.values(i).filter((a)=>a.includes(": " + e))[0] : i;
            }
            if (/^\d/.test(n) || n === "0" || n.includes("px") || n.slice(-2) === "em") return n;
            let s = dt(n, "shadow");
            return s && s.shadow ? s.shadow : n;
        }).join(" ") : "")).join(", "), dc = (t, e)=>{
    let r = t.indexOf("(");
    if (r === -1) return t;
    let n = t.slice(0, r + 1), o = t.slice(r + 1, t.lastIndexOf(")")), s = ")", a = dr(o).map((c)=>(c = c.trim(), c.split(/\s+/).map((f)=>{
            if (!f || /^\d/.test(f) || f === "0" || P_.has(f) || f === "transparent" || le.test(f)) return f;
            let p = tt(f);
            return xe(p) ? p : f;
        }).join(" ")));
    return n + a.join(", ") + s;
}, mh = (t, e)=>{
    let r = E();
    return t.split(", ").map((n)=>ot(n) ? `var(${n})` : n.includes("url") ? n : n.includes("gradient") ? dc(n, e) : r.gradient[t] ? {
            backgroundImage: bt(t, e || r.globalTheme)
        } : n.includes("/") || n.startsWith("http") || n.includes(".") && !He(n) ? `url(${n})` : n).join(" ");
}, yh = (t)=>_(t) && t.split(" ").map((e)=>dt(e, "gap").gap).join(" "), $_ = (t)=>{
    let e = t.split(" ");
    return e.length ? e.map((r)=>ot(r) ? `var(${r})` : r.length < 3 || r.includes("ms") ? Vt(r).timing || r : te(r) ? te(r) : r).join(" ") : t;
}, hc = (t, e, r)=>{
    if (_(t)) return t.split(",").map((n)=>Vt(n).timing || n).join(",");
}, bh = (t)=>{
    let e = t.split(",");
    if (e.length) return e.map($_).join(",");
};
function st(t, e, r = {}, n = {}) {
    let o = X.call(this, e || r[t]);
    if (o == null) return;
    let s;
    if (_(o)) {
        if (o.includes("(")) {
            let c = Ge(o);
            s = c[0], o = c[1];
        }
        let i = r.scaleBoxSize, a = tc(t);
        !i && a && !n.ratio && (o = rc(o));
    }
    return n.ratio ? fe(r, t, o, s) : dt(o, t, void 0, s);
}
var j = (t, e = null, r)=>st(t, e, r, {
        ratio: !0
    }), gc = (t, e, r)=>{
    if (_(t)) return {
        borderRadius: t.split(" ").map((n, o)=>fe(e, r, n)[r]).join(" ")
    };
};
P();
var F_ = (t, e)=>{
    let r = E(), { cssVars: n } = r, o = e.startsWith("--") ? e : `--${e}`;
    return n[o] = t, t;
}, Ot = (t)=>t, xh = {
    color: br,
    gradient: xr,
    font: Xa,
    fontFamily: ms,
    fontfamily: ms,
    theme: Ka,
    icons: lc,
    semanticIcons: Ot,
    semanticicons: Ot,
    svg: ys,
    svgData: Ot,
    typography: Ot,
    shadow: Sr,
    spacing: Ot,
    media: Ot,
    grid: Ot,
    class: Ot,
    timing: Ot,
    reset: Ot,
    unit: Ot,
    animation: Ot,
    vars: F_,
    sizes: Ot
}, D_ = (t, e, r)=>{
    let n = E(), o = Fa(t), s = o.toLowerCase(), i = n[o] || n[s] || n[t], a = xh[o] || xh[s];
    if (a) try {
        let c = a(e, r);
        return i && (i[r] = c), i;
    } catch (c) {
        n.verbose && console.warn("Error setting", s, "value", e, r, c);
    }
    n.verbose && console.warn("Can not find", s, "method in scratch");
}, L_ = (t, e)=>{
    let r = E(), n = t.toLowerCase();
    return Object.keys(e).sort((s, i)=>{
        let a = S(e[s]) || T(e[s]) ? 1 : 0, c = S(e[i]) || T(e[i]) ? 1 : 0;
        return a - c;
    }).forEach((s)=>{
        try {
            return D_(n, e[s], s);
        } catch (i) {
            r.verbose && console.warn("Error setting", n, "value", e[s], s, i);
        }
    }), r[n] || r[t];
}, Sh = (t, e)=>{
    let r = e || E();
    r.globalTheme = t;
    let o = (r.document && r.document.documentElement ? r.document : null) || (typeof document < "u" ? document : null), s = o && o.defaultView || (typeof window < "u" ? window : null);
    if (o) {
        let a = r.themeRoot || o.documentElement;
        if (t && t !== "auto") a.setAttribute("data-theme", t), t === "dark" || t === "light" ? a.style.colorScheme = t : a.style.colorScheme = "light dark";
        else if (s && s.matchMedia) {
            let l = (p)=>{
                a.setAttribute("data-theme", p.matches ? "dark" : "light");
            }, f = s.matchMedia("(prefers-color-scheme: dark)");
            if (l(f), a.style.colorScheme = "light dark", !r.__prefersListener) {
                r.__prefersListener = l;
                try {
                    f.addEventListener("change", l);
                } catch  {
                    f.addListener(l);
                }
            }
        } else a.setAttribute("data-theme", "light"), a.style.colorScheme = "light";
    }
    let i = r.varPrefix ? `--${r.varPrefix}-theme-` : "--theme-";
    for(let a in r.cssVars)a.startsWith(i) && delete r.cssVars[a];
    for(let a in r.cssMediaVars)delete r.cssMediaVars[a];
    if (o && r.cssVars) {
        let a = r.scopeSelector || ":root", c = o.styleSheets;
        for(let l = 0; l < c.length; l++)try {
            let f = c[l].cssRules;
            for(let p = 0; p < f.length; p++)if (f[p].selectorText === a) {
                for(let u in r.cssVars)f[p].style.setProperty(u, r.cssVars[u]);
                return r;
            }
        } catch  {}
    }
    return r;
}, M_ = {}, Cn = (t, e = M_)=>{
    let r = e.config || E(), { version: n, verbose: o, useVariable: s, useReset: i, useSvgSprite: a, useFontImport: c, useIconSprite: l, globalTheme: f, themeRoot: p, useDocumentTheme: u, useDefaultConfig: d, semanticIcons: h, files: g, assets: m, ...y } = t;
    e.newConfig && (r = Zd(e.newConfig)), g !== void 0 && (r.files = g), m !== void 0 && (r.assets = m), o !== void 0 && (r.verbose = o), s !== void 0 && (r.useVariable = s), i !== void 0 && (r.useReset = i), c !== void 0 && (r.useFontImport = c), a !== void 0 && (r.useSvgSprite = a), l !== void 0 && (r.useIconSprite = l), u !== void 0 && (r.useDocumentTheme = u), f !== void 0 && (r.globalTheme = f), p !== void 0 && (r.themeRoot = p), t.useThemeSuffixedVars !== void 0 && (r.useThemeSuffixedVars = t.useThemeSuffixedVars), d !== void 0 && (r.useDefaultConfig = d), h !== void 0 && (r.semanticIcons = h), r.verbose && console.log(r);
    let w = (r.document && r.document.documentElement ? r.document : null) || (typeof document < "u" ? document : null), x = w && w.defaultView || (typeof window < "u" ? window : null), v = w && (r.themeRoot || w.documentElement);
    if (v && typeof v.setAttribute == "function") {
        if (r.globalTheme && r.globalTheme !== "auto") v.setAttribute("data-theme", r.globalTheme), r.globalTheme === "dark" || r.globalTheme === "light" ? v.style.colorScheme = r.globalTheme : v.style.colorScheme = "light dark";
        else if (x && x.matchMedia) {
            let L = (J)=>{
                v.setAttribute("data-theme", J.matches ? "dark" : "light");
            }, V = x.matchMedia("(prefers-color-scheme: dark)");
            if (L(V), v.style.colorScheme = "light dark", !r.__prefersListener) {
                r.__prefersListener = L;
                try {
                    V.addEventListener("change", L);
                } catch  {
                    V.addListener(L);
                }
            }
        } else v.setAttribute("data-theme", "light"), v.style.colorScheme = "light";
    }
    r.__svgCache || (r.__svgCache = {});
    let A = Object.keys(y), R = new Set(A);
    if (A.forEach((O)=>{
        let L = O.toLowerCase();
        L !== O && R.has(L) && q(y[L], y[O]);
    }), A.map((O)=>{
        let L = O.toLowerCase();
        if (!(L !== O && R.has(L))) return L_(O, y[O]);
    }), r.varPrefix && (r.typography && (r.typography.varPrefix = r.varPrefix), r.spacing && (r.spacing.varPrefix = r.varPrefix), r.timing && (r.timing.varPrefix = r.varPrefix)), y.typography) try {
        Ja();
    } catch (O) {
        r.verbose && console.warn("Error applying typography sequence", O);
    }
    if (y.spacing) try {
        ec();
    } catch (O) {
        r.verbose && console.warn("Error applying spacing sequence", O);
    }
    if (y.timing) try {
        oc();
    } catch (O) {
        r.verbose && console.warn("Error applying timing sequence", O);
    }
    sc();
    let W = uc();
    return W && (r.reset = W), r;
};
var _r = new Map, N_ = null, yc = null, j_ = null;
function bc(t) {
    t.batchAtomicCss && (yc = t.batchAtomicCss), t.compoundCssClass && (j_ = t.compoundCssClass);
}
var B_ = new Set;
function V_(t) {
    try {
        let e = E();
        e && (e.document = t);
    } catch  {}
    t && B_.add(t);
}
function vh() {
    try {
        let t = E();
        if (t?.document) return t.document;
    } catch  {}
    return typeof document < "u" ? document : null;
}
var z_ = {
    display: "d",
    position: "pos",
    padding: "p",
    paddingTop: "pt",
    paddingRight: "pr",
    paddingBottom: "pb",
    paddingLeft: "pl",
    margin: "m",
    marginTop: "mt",
    marginRight: "mr",
    marginBottom: "mb",
    marginLeft: "ml",
    width: "w",
    height: "h",
    minWidth: "mnw",
    minHeight: "mnh",
    maxWidth: "mxw",
    maxHeight: "mxh",
    top: "t",
    right: "r",
    bottom: "b",
    left: "l",
    flex: "fx",
    flexDirection: "fxd",
    flexWrap: "fxw",
    flexGrow: "fxg",
    flexShrink: "fxs",
    flexBasis: "fxb",
    justifyContent: "jc",
    alignItems: "ai",
    alignSelf: "as",
    alignContent: "ac",
    gap: "g",
    rowGap: "rg",
    columnGap: "cg",
    gridTemplateColumns: "gtc",
    gridTemplateRows: "gtr",
    gridColumn: "gc",
    gridRow: "gr",
    overflow: "of",
    overflowX: "ofx",
    overflowY: "ofy",
    fontSize: "fs",
    fontWeight: "fw",
    fontFamily: "ff",
    fontStyle: "fst",
    lineHeight: "lh",
    letterSpacing: "ls",
    textAlign: "ta",
    textDecoration: "td",
    textTransform: "tt",
    color: "c",
    background: "bg",
    backgroundColor: "bgc",
    backgroundImage: "bgi",
    border: "bd",
    borderRadius: "br",
    borderColor: "bdc",
    borderWidth: "bdw",
    borderStyle: "bds",
    boxShadow: "bxsh",
    opacity: "op",
    zIndex: "z",
    cursor: "cur",
    transition: "tr",
    transform: "tf",
    animation: "an",
    visibility: "vis",
    whiteSpace: "ws",
    wordBreak: "wb",
    objectFit: "obj",
    pointerEvents: "pe",
    userSelect: "us",
    boxSizing: "bxz",
    outline: "ol",
    listStyle: "lis",
    textOverflow: "txo",
    verticalAlign: "va",
    float: "fl",
    clear: "cl",
    content: "cnt",
    backdropFilter: "bdf",
    filter: "flt",
    resize: "rsz",
    appearance: "apr",
    fill: "fil",
    stroke: "stk"
};
function Ye(t) {
    return t.replace(/[A-Z]/g, (e)=>"-" + e.toLowerCase());
}
function xs(t) {
    let e = 2166136261;
    for(let r = 0; r < t.length; r++)e ^= t.charCodeAt(r), e = e * 16777619 >>> 0;
    return e.toString(36);
}
function U_(t) {
    let e = String(t);
    return e.length <= 20 ? e.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase() : xs(e);
}
function _h(t, e, r) {
    let n = (r ? r + "" : "") + t + ":" + e, o = _r.get(n), s = o ? null : Ye(t);
    if (!o) {
        let a = z_[t] || xs(t), c = U_(e);
        o = r ? `_${r}_${a}-${c}` : `_${a}-${c}`, _r.set(n, o);
    }
    if (typeof e == "string" && (e.indexOf("}") !== -1 || e.indexOf("{") !== -1)) return o;
    let i = `.${o}{${s || Ye(t)}:${e}}`;
    return Dt(i), o;
}
var wh = new WeakMap;
function Dt(t, e) {
    let r = Ch(e);
    if (!r) return;
    let n = wh.get(r);
    if (n || (n = new Set, wh.set(r, n)), !n.has(t)) {
        n.add(t);
        try {
            r.insertRule(t, r.cssRules.length);
        } catch  {}
    }
}
var kh = new WeakMap;
function Ch(t) {
    let e = t || vh();
    if (!e || !e.head) return null;
    let r = kh.get(e);
    if (r && r.ownerNode && r.ownerNode.parentNode === e.head) return r;
    let n = e.head.querySelector("style[data-smbls]");
    n || (n = e.createElement("style"), n.setAttribute("data-smbls", ""), e.head.appendChild(n));
    let o = n.sheet;
    return kh.set(e, o), N_ = o, o;
}
var W_ = 8;
function Xe(t, e, r) {
    if (!t || typeof t != "object") return "";
    let n = null, o = 0, s = [], i = [];
    for(let c in t){
        let l = t[c];
        l == null || l === !1 || l === "" || (typeof l == "object" ? i.push([
            c,
            l
        ]) : yc ? (n || (n = []), n.push(c, String(l)), o++) : s.push(_h(c, String(l), r)));
    }
    if (n && o >= W_) {
        let c = n.join("\0"), l = yc(c), f = l.indexOf("\0"), p = l.substring(0, f), u = l.substring(f + 1);
        if (u) {
            let d = u.split(`
`);
            for(let h = 0; h < d.length; h++)d[h] && Dt(d[h]);
        }
        s.push(p);
    } else if (n) for(let c = 0; c < n.length; c += 2)s.push(_h(n[c], n[c + 1], r));
    let a = [];
    for(let c = 0; c < i.length; c++)a.push(H_(i[c][0], i[c][1], r));
    return s.concat(a).join(" ").trim();
}
var mc = new Map;
function H_(t, e, r) {
    let n = (r ? r + "" : "") + t + JSON.stringify(e), o = _r.get(n);
    if (o) {
        let u = mc.get(o);
        if (u) for(let d = 0; d < u.length; d++)Dt(u[d]);
        return o;
    }
    o = r ? `_${r}_c${xs(n)}` : `_c${xs(n)}`;
    let s = "", i = [], a = (u)=>typeof u == "string" && (u.indexOf("{") !== -1 || u.indexOf("}") !== -1), c = (u, d)=>{
        let h = "";
        for(let g in d){
            let m = d[g];
            if (m != null) {
                if (typeof m == "object") c([
                    ...u,
                    g
                ], m);
                else {
                    if (a(m)) continue;
                    h += `${Ye(g)}:${m};`;
                }
            }
        }
        h && (u.length === 0 ? s += h : i.push({
            chain: u,
            body: h
        }));
    };
    c([], e);
    let l = (u)=>{
        if (!u.length) return `.${o}`;
        let d = u[0].split(",").map((h)=>h.trim()).map((h)=>h.includes("&") ? h.replace(/&/g, `.${o}`) : h.startsWith(":") ? `.${o}${h}` : `.${o} ${h}`);
        for(let h = 1; h < u.length; h++){
            let g = u[h].split(",").map((y)=>y.trim()), m = [];
            for (let y of d)for (let b of g)b.includes("&") ? m.push(b.replace(/&/g, y)) : b.startsWith(":") ? m.push(y + b) : m.push(y + " " + b);
            d = m;
        }
        return d.join(", ");
    }, f = [];
    if (t.startsWith("@media") || t.startsWith("@supports")) {
        if (s) {
            let u = `${t}{.${o}{${s}}}`;
            f.push(u), Dt(u);
        }
        for (let u of i){
            let d = l(u.chain), h = `${t}{${d}{${u.body}}}`;
            f.push(h), Dt(h);
        }
        return mc.set(o, f), _r.set(n, o), o;
    }
    let p = l([
        t
    ]);
    if (s) {
        let u = `${p}{${s}}`;
        f.push(u), Dt(u);
    }
    for (let u of i){
        let h = `${l([
            t,
            ...u.chain
        ])}{${u.body}}`;
        f.push(h), Dt(h);
    }
    return mc.set(o, f), _r.set(n, o), o;
}
function ct(t) {
    if (Ch(), typeof t == "string") {
        Dt(t);
        return;
    }
    let e = Object.keys(t), r = (n)=>{
        let o = n.match(/max-width:\s*(\d+)/);
        return o ? parseInt(o[1]) : 0;
    };
    e.sort((n, o)=>{
        let s = n.startsWith("@media"), i = o.startsWith("@media");
        return !s && !i ? 0 : s ? i ? r(o) - r(n) : 1 : -1;
    });
    for (let n of e){
        let o = t[n];
        if (n.startsWith("@media") || n.startsWith("@supports")) for(let s in o){
            let i = o[s];
            if (typeof i == "object" && i !== null) {
                let a = "";
                for(let c in i){
                    let l = c.startsWith("--") ? c : Ye(c);
                    a += `${l}:${i[c]};`;
                }
                Dt(`${n}{${s}{${a}}}`);
            } else {
                let a = s.startsWith("--") ? s : Ye(s);
                Dt(`${n}{${a}:${i};}`);
            }
        }
        else {
            let s = "", i = !1;
            for(let a in o){
                let c = o[a];
                if (typeof c == "object" && c !== null) i = !0;
                else {
                    let l = a.startsWith("--") ? a : Ye(a);
                    s += `${l}:${c};`;
                }
            }
            if (s && Dt(`${n}{${s}}`), i) {
                let a = [], c = [];
                for(let l in o)typeof o[l] == "object" && o[l] !== null && (l.startsWith("@media") || l.startsWith("@supports") ? a.push(l) : c.push(l));
                a.sort((l, f)=>{
                    let p = (u)=>{
                        let d = u.match(/max-width:\s*(\d+)/);
                        return d ? parseInt(d[1]) : 0;
                    };
                    return p(f) - p(l);
                });
                for (let l of c)ct({
                    [`${n} ${l}`]: o[l]
                });
                for (let l of a)ct({
                    [l]: {
                        [n]: o[l]
                    }
                });
            }
        }
    }
}
function Ss(t, e) {
    let r = "";
    for(let n in e){
        let o = "";
        for(let s in e[n])o += `${Ye(s)}:${e[n][s]};`;
        r += `${n}{${o}}`;
    }
    return Dt(`@keyframes ${t}{${r}}`), t;
}
function q_() {
    return _r.size;
}
P();
var xc = "http://www.w3.org/2000/svg", ks = new Set([
    "svg",
    "path",
    "circle",
    "ellipse",
    "line",
    "polyline",
    "polygon",
    "rect",
    "g",
    "defs",
    "use",
    "symbol",
    "clipPath",
    "mask",
    "pattern",
    "image",
    "text",
    "tspan",
    "textPath",
    "marker",
    "linearGradient",
    "radialGradient",
    "stop",
    "filter",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feFlood",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "feSpecularLighting",
    "feTile",
    "feTurbulence",
    "animate",
    "animateMotion",
    "animateTransform",
    "set",
    "foreignObject",
    "desc",
    "title",
    "metadata"
]), G_ = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "search",
    "section",
    "select",
    "slot",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "string",
    "fragment",
    "shadow"
]);
function _s(t) {
    return G_.has(t) || ks.has(t);
}
function vs(t) {
    return ks.has(t);
}
function wr(t) {
    let { tag: e, key: r } = t;
    if (typeof e == "function" && (e = e(t)), e === !0 && (e = r), typeof e == "string" && _s(e)) return e;
    if (!r || typeof r != "string") return "div";
    let n = new Set([
        "html",
        "head",
        "body",
        "meta",
        "link",
        "script",
        "style",
        "title",
        "base",
        "noscript",
        "template"
    ]), o = r.toLowerCase();
    return o.includes(".") && (o = o.split(".")[0]), o.includes("_") && (o = o.split("_")[0]), _s(o) && !n.has(o) ? o : "div";
}
var Ah = {};
function ws(t, e) {
    let r = e?.context?.document || globalThis.document;
    if (!r) return null;
    if (t === "string") return r.createTextNode(e?.text || "");
    if (t === "fragment") return r.createDocumentFragment();
    if (vs(t)) {
        let n = e?.parent;
        if (t === "svg" || n?.node?.namespaceURI === xc) return r.createElementNS(xc, t);
        if (t !== "svg") return r.createElement("div");
    }
    return r.createElement(t);
}
function kr(t) {
    let e = t.tag = wr(t), n = vs(e) && (e === "svg" || t.parent?.node?.namespaceURI === xc) ? "svg:" + e : e, o = t?.context?.document || globalThis.document, s = Ah[n];
    if (s || (s = Ah[n] = ws(e, t)), !s) return null;
    let i = o && s.ownerDocument !== o ? ws(e, t) : s.cloneNode(!0);
    return e === "string" && (i.nodeValue = t.text || ""), i;
}
var Rt = new Set([
    "extends",
    "children",
    "content",
    "childExtends",
    "childExtendsRecursive",
    "childProps",
    "inheritParentProps",
    "state",
    "if",
    "define",
    "deps",
    "tag",
    "attr",
    "style",
    "text",
    "html",
    "value",
    "data",
    "classlist",
    "class",
    "scope",
    "root",
    "context",
    "$router",
    "routes",
    "fetch",
    "variables",
    "query",
    "key",
    "component",
    "preventContentUpdate",
    "preventContentRecreate",
    "__name",
    "__ref",
    "__hash",
    "__text",
    "parent",
    "node"
]), Eh = {
    text: "text",
    html: "html",
    style: "style",
    attr: "attr",
    data: "data",
    classlist: "classlist",
    state: "state",
    scope: "scope"
}, vr = new Set([
    "start",
    "init",
    "complete",
    "attachNode",
    "stateInit",
    "stateCreated",
    "beforeUpdate",
    "update",
    "afterUpdate",
    "beforeClassAssign",
    "lazyLoad",
    "render",
    "renderRouter",
    "done",
    "create",
    "frame",
    "startUpdate",
    "stateUpdate",
    "beforeStateUpdate",
    "initInspect",
    "initSync",
    "error",
    "beforeRemove",
    "remove"
]), Th = new Set([
    "wheel",
    "mousewheel",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel"
]), Cs = new Set([
    "click",
    "dblclick",
    "mousedown",
    "mouseup",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "mouseover",
    "mouseout",
    "pointerdown",
    "pointerup",
    "pointermove",
    "pointerenter",
    "pointerleave",
    "pointerover",
    "pointerout",
    "touchstart",
    "touchend",
    "touchmove",
    "keydown",
    "keyup",
    "keypress",
    "input",
    "change",
    "submit",
    "reset",
    "focus",
    "blur",
    "focusin",
    "focusout",
    "scroll",
    "wheel",
    "contextmenu",
    "drag",
    "dragstart",
    "dragend",
    "dragenter",
    "dragleave",
    "dragover",
    "drop"
]);
var Sc = new WeakMap, K_ = {
    passive: !0
}, Y_ = {
    passive: !0,
    capture: !0
}, _c = (t, e)=>Th.has(t) ? e ? Y_ : K_ : e || !1;
function Rh(t) {
    let e = Sc.get(t);
    return e || (e = {
        handlers: new Map,
        installed: new Set
    }, Sc.set(t, e)), e;
}
function X_(t, e) {
    let r = Rh(e);
    if (r.installed.has(t)) return;
    r.installed.add(t);
    let n = t === "focus" || t === "blur" || t === "focusin" || t === "focusout" || t === "mouseenter" || t === "mouseleave", o = t === "mouseenter" || t === "mouseleave";
    e.addEventListener(t, (s)=>{
        let i = s.target;
        for(; i && i !== e;){
            let a = r.handlers.get(t);
            if (a) {
                let c = a.get(i);
                if (c) {
                    if (o && s.relatedTarget && i.contains(s.relatedTarget)) {
                        i = i.parentNode;
                        continue;
                    }
                    if (c(s), s.cancelBubble) return;
                }
            }
            i = i.parentNode;
        }
    }, _c(t, n));
}
function wc(t, e, r, n) {
    n || (n = e.ownerDocument?.documentElement || e.getRootNode());
    let o = Rh(n);
    X_(t, n), o.handlers.has(t) || o.handlers.set(t, new WeakMap), o.handlers.get(t).set(e, r);
}
function kc(t, e, r) {
    r || (r = e.ownerDocument?.documentElement || e.getRootNode());
    let n = Sc.get(r);
    if (!n) return;
    let o = n.handlers.get(t);
    o && o.delete(e);
}
function Oh(t) {
    return Cs.has(t) && !vr.has(t);
}
function As(t, e, r) {
    let { node: n, context: o } = e;
    if (!n) return;
    let s = o?.designSystem, i = (a)=>{
        s && pt(s);
        try {
            let c = r.call(e, a, e, e.state, o);
            if (c && typeof c.then == "function") {
                c.catch((l)=>{
                    e.error = l, console.error("[DOMQL] Async event error:", l);
                }).finally(()=>{
                    s && at();
                });
                return;
            }
        } catch (c) {
            if (e.error = c, console.error("[DOMQL] Event error:", c), o?.strictMode) throw c;
        }
        s && at();
    };
    if (Oh(t)) {
        let a = o?.rootNode || n.ownerDocument?.documentElement;
        wc(t, n, i, a);
    } else n.addEventListener(t, i, _c(t, !1));
    e.__ref.__eventCleanup || (e.__ref.__eventCleanup = []), e.__ref.__eventCleanup.push(()=>{
        if (Oh(t)) {
            let a = o?.rootNode || n.ownerDocument?.documentElement;
            kc(t, n, a);
        } else n.removeEventListener(t, i, _c(t, !1));
    });
}
function Ph(t) {
    let e = [];
    return t.extends && (Array.isArray(t.extends) ? e.push(...t.extends) : e.push(t.extends)), t.extend && (Array.isArray(t.extend) ? e.push(...t.extend) : e.push(t.extend)), e;
}
function Es(t, e, r) {
    let n = Ph(e);
    if (!n.length) return;
    let s = (t.context || r?.context || {}).components || {};
    for(let i = 0; i < n.length; i++){
        let a = Ih(n[i], s);
        a && a !== e && $h(t, a, r, new Set([
            e
        ]));
    }
}
function Ih(t, e) {
    if (typeof t == "string") {
        if (t.includes(">")) {
            let r = t.split(">").map((o)=>o.trim()), n = e[r[0]] || e[`smbls.${r[0]}`];
            for(let o = 1; o < r.length && n; o++)n = n[r[o]];
            return n || null;
        }
        return e[t] || e[`smbls.${t}`] || null;
    }
    return typeof t == "object" && t !== null ? t : null;
}
function $h(t, e, r, n = new Set) {
    if (n.has(e)) return;
    n.add(e);
    let o = Ph(e);
    if (o.length) {
        let i = (t.context || r?.context || {}).components || {};
        for(let a = 0; a < o.length; a++){
            let c = Ih(o[a], i);
            c && $h(t, c, r, n);
        }
    }
    for(let s in e){
        if (s === "extends" || s === "extend") continue;
        let i = e[s];
        t[s] === void 0 ? i && typeof i == "object" && !Array.isArray(i) && typeof i != "function" ? t[s] = {
            ...i
        } : t[s] = i : typeof t[s] == "object" && typeof i == "object" && !Array.isArray(t[s]) && !Array.isArray(i) && t[s] !== null && i !== null ? t[s] = Fh(t[s], i) : t[s] = i;
    }
}
function Fh(t, e) {
    let r = {
        ...t
    };
    for(let n in e){
        let o = r[n], s = e[n];
        o && s && typeof o == "object" && typeof s == "object" && !Array.isArray(o) && !Array.isArray(s) && typeof o != "function" && typeof s != "function" ? r[n] = Fh(o, s) : r[n] = s;
    }
    return r;
}
lr();
function Ts(t = {}, e = {}) {
    let r = this, n = r.__ref;
    if (n) {
        if ((typeof t == "string" || typeof t == "number") && (t = {
            text: t
        }), !e.preventListeners && typeof r.onBeforeUpdate == "function" && r.onBeforeUpdate(r, r.state, r.context, e) === !1) return r;
        if ($e(()=>{
            if (t.state && mt(r.state) && r.state.update(t.state), t.text !== void 0 && (r.text = t.text, !n.__exec.text && r.node && (r.tag === "string" ? r.node.nodeValue = t.text ?? "" : r.node.textContent = t.text ?? "")), t.html !== void 0 && (r.html = t.html, !n.__exec.html && r.node && (r.node.innerHTML = t.html)), t.style && r.node?.style) {
                if (!n.__exec.style) for(let o in t.style){
                    let s = t.style[o];
                    if (s == null) continue;
                    let i = o.replace(/[A-Z]/g, (c)=>"-" + c.toLowerCase()), a = String(s).replace(/\s*!important\s*$/, "");
                    r.node.style.setProperty(i, a, "important");
                }
                r.style || (r.style = {}), Object.assign(r.style, t.style);
            }
            if (t.attr && r.node?.setAttribute) {
                for(let o in t.attr){
                    let s = t.attr[o];
                    s == null || s === !1 ? r.node.removeAttribute(o) : typeof s != "function" && typeof s != "object" && r.node.setAttribute(o, s === !0 ? "" : s);
                }
                r.attr || (r.attr = {}), Object.assign(r.attr, t.attr);
            }
            if (t.data && r.node?.dataset) {
                for(let o in t.data)r.node.dataset[o] = t.data[o];
                r.data || (r.data = {}), Object.assign(r.data, t.data);
            }
            for(let o in t){
                if (Rt.has(o) || o === "state") continue;
                let s = t[o], i = r[o];
                if (i && i.__ref && typeof i.update == "function") i.update(s, e);
                else if (typeof s == "object" && s !== null) {
                    let a = o.charCodeAt(0);
                    a >= 65 && a <= 90 && zt(s, r, o, e);
                } else o !== "text" && o !== "html" && o !== "style" && o !== "attr" && o !== "data" && (r[o] = s);
            }
        }), r.node && n.__conditionalRunners) for (let o of n.__conditionalRunners)o();
        return Kt("update", r), !e.preventListeners && typeof r.onUpdate == "function" && r.onUpdate(r, r.state, r.context, e), r;
    }
}
function Cr(t) {
    if (!t) return;
    let e = t.__ref;
    if (e) {
        try {
            typeof t.onBeforeRemove == "function" && t.onBeforeRemove(t, t.state, t.context);
        } catch (r) {
            console.error("[smbls] onBeforeRemove error:", r);
        }
        if (e.__effects) {
            for(let r = 0; r < e.__effects.length; r++)e.__effects[r].dispose();
            e.__effects.length = 0;
        }
        if (e.__eventCleanup) {
            for(let r = 0; r < e.__eventCleanup.length; r++)e.__eventCleanup[r]();
            e.__eventCleanup.length = 0;
        }
        if (e.__children) {
            for(let r = 0; r < e.__children.length; r++){
                let n = e.__children[r], o = t[n];
                o && o.__ref && Cr(o);
            }
            e.__children.length = 0;
        }
        if (t.node?.parentNode && t.node.remove(), t.state?.destroy && t.state.__element === t && t.state.destroy(), t.parent?.__ref?.__children) {
            let r = t.parent.__ref.__children.indexOf(t.key);
            r !== -1 && t.parent.__ref.__children.splice(r, 1), delete t.parent[t.key];
        }
        try {
            typeof t.onRemove == "function" && t.onRemove(t);
        } catch (r) {
            console.error("[smbls] onRemove error:", r);
        }
        t.node = null, t.parent = null, t.__ref = null;
    }
}
function Os() {
    Cr(this);
}
P();
P();
var Z_ = [
    "ease",
    "linear",
    "ease-in",
    "ease-out",
    "ease-in-out",
    "step-start",
    "step-end"
], J_ = [
    "none",
    "forwards",
    "backwards",
    "both"
], Q_ = [
    "normal",
    "reverse",
    "alternate",
    "alternate-reverse"
], tw = [
    "running",
    "paused"
], ew = (t)=>/^[\d.]+m?s$/.test(t), rw = 0, vc = (t, e)=>{
    let { animation: r } = e.context && e.context.designSystem || {};
    if (S(t)) {
        let o = `smbls-anim-${rw++}`;
        return {
            animationName: Ss(o, t)
        };
    }
    let n = r && r[t];
    return S(n) ? Ss(t, n) : t;
}, nw = (t, e)=>{
    let { animation: r } = e.context && e.context.designSystem || {}, n = t.split(/\s+/), o = null, s = [], i = null, a = null, c = null, l = null, f = null;
    for (let p of n)r && r[p] ? o = p : ew(p) ? s.push(p) : Z_.includes(p) || p.startsWith("cubic-bezier") || p.startsWith("steps(") ? i = p : p === "infinite" || /^\d+$/.test(p) ? a = p === "infinite" ? p : Number(p) : Q_.includes(p) ? c = p : J_.includes(p) ? l = p : tw.includes(p) ? f = p : o || (o = p);
    return {
        name: o,
        durations: s,
        timingFunction: i,
        iterationCount: a,
        direction: c,
        fillMode: l,
        playState: f
    };
}, Dh = {
    animation: (t, e)=>{
        if (_(t) && t.includes(" ")) {
            let r = nw(t, e);
            return {
                animationName: vc(r.name || t, e),
                animationDuration: r.durations[0] || Vt(e.animationDuration || "A").timing,
                animationDelay: r.durations[1] || Vt(e.animationDelay || "0s").timing,
                animationTimingFunction: r.timingFunction || te(e.animationTimingFunction || "ease"),
                animationFillMode: r.fillMode || e.animationFillMode || "both",
                animationIterationCount: r.iterationCount != null ? r.iterationCount : e.animationIterationCount || 1,
                animationPlayState: r.playState || e.animationPlayState,
                animationDirection: r.direction || e.animationDirection
            };
        }
        return {
            animationName: vc(t, e),
            animationDuration: Vt(e.animationDuration || "A").timing,
            animationDelay: Vt(e.animationDelay || "0s").timing,
            animationTimingFunction: te(e.animationTimingFunction || "ease"),
            animationFillMode: e.animationFillMode || "both",
            animationIterationCount: e.animationIterationCount || 1,
            animationPlayState: e.animationPlayState,
            animationDirection: e.animationDirection
        };
    },
    animationName: (t, e)=>({
            animationName: vc(t, e)
        }),
    animationDuration: (t)=>({
            animationDuration: Vt(t).timing
        }),
    animationDelay: (t)=>({
            animationDelay: Vt(t).timing
        }),
    animationTimingFunction: (t)=>({
            animationTimingFunction: te(t)
        }),
    animationIterationCount: (t)=>({
            animationIterationCount: t
        }),
    animationFillMode: (t)=>({
            animationFillMode: t
        }),
    animationPlayState: (t)=>({
            animationPlayState: t
        }),
    animationDirection: (t)=>({
            animationDirection: t
        })
};
P();
var Lh = {
    show: (t)=>t ? void 0 : {
            display: "none !important"
        },
    hide: (t)=>t ? {
            display: "none !important"
        } : void 0,
    height: (t, e)=>j("height", t, e),
    width: (t, e)=>j("width", t, e),
    boxSizing: (t)=>ht(t) ? {
            boxSizing: "border-box"
        } : {
            boxSizing: t
        },
    boxSize: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("height", e),
            ...st("width", r || e)
        };
    },
    inlineSize: (t, e)=>j("inlineSize", t, e),
    blockSize: (t, e)=>j("blockSize", t, e),
    minWidth: (t, e)=>j("minWidth", t, e),
    maxWidth: (t, e)=>j("maxWidth", t, e),
    widthRange: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("minWidth", e),
            ...st("maxWidth", r || e)
        };
    },
    minHeight: (t, e)=>j("minHeight", t, e),
    maxHeight: (t, e)=>j("maxHeight", t, e),
    heightRange: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("minHeight", e),
            ...st("maxHeight", r || e)
        };
    },
    size: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...j("inlineSize", e),
            ...j("blockSize", r || e)
        };
    },
    minBlockSize: (t, e)=>j("minBlockSize", t, e),
    minInlineSize: (t, e)=>j("minInlineSize", t, e),
    maxBlockSize: (t, e)=>j("maxBlockSize", t, e),
    maxInlineSize: (t, e)=>j("maxInlineSize", t, e),
    minSize: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("minInlineSize", e),
            ...st("minBlockSize", r || e)
        };
    },
    maxSize: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("maxInlineSize", e),
            ...st("maxBlockSize", r || e)
        };
    },
    borderWidth: (t, e)=>j("borderWidth", t, e),
    padding: (t, e)=>j("padding", t, e),
    scrollPadding: (t, e)=>j("scrollPadding", t, e),
    paddingInline: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("paddingInlineStart", e),
            ...st("paddingInlineEnd", r || e)
        };
    },
    paddingBlock: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("paddingBlockStart", e),
            ...st("paddingBlockEnd", r || e)
        };
    },
    paddingTop: (t, e)=>j("paddingBlockStart", t, e),
    paddingBottom: (t, e)=>j("paddingBlockEnd", t, e),
    paddingLeft: (t, e)=>j("paddingInlineStart", t, e),
    paddingRight: (t, e)=>j("paddingInlineEnd", t, e),
    paddingBlockStart: (t, e)=>j("paddingBlockStart", t, e),
    paddingBlockEnd: (t, e)=>j("paddingBlockEnd", t, e),
    paddingInlineStart: (t, e)=>j("paddingInlineStart", t, e),
    paddingInlineEnd: (t, e)=>j("paddingInlineEnd", t, e),
    margin: (t, e)=>j("margin", t, e),
    marginInline: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            ...st("marginInlineStart", e),
            ...st("marginInlineEnd", r || e)
        };
    },
    marginBlock: (t, e)=>{
        if (!_(e.marginBlock)) return;
        let [r, n] = e.marginBlock.split(" ");
        return {
            ...st("marginBlockStart", r),
            ...st("marginBlockEnd", n || r)
        };
    },
    marginTop: (t, e)=>j("marginBlockStart", t, e),
    marginBottom: (t, e)=>j("marginBlockEnd", t, e),
    marginLeft: (t, e)=>j("marginInlineStart", t, e),
    marginRight: (t, e)=>j("marginInlineEnd", t, e),
    marginInlineStart: (t, e)=>j("marginInlineStart", t, e),
    marginInlineEnd: (t, e)=>j("marginInlineEnd", t, e),
    marginBlockStart: (t, e)=>j("marginBlockStart", t, e),
    marginBlockEnd: (t, e)=>j("marginBlockEnd", t, e),
    gap: (t)=>({
            gap: yh(t)
        }),
    columnGap: (t, e)=>fe(e, "columnGap", t),
    rowGap: (t, e)=>fe(e, "rowGap", t),
    flexWrap: (t)=>({
            display: "flex",
            flexWrap: t
        }),
    flexFlow: (t, e)=>{
        let r = e.reverse;
        if (!_(t)) return;
        let [n, o] = (t || "row").split(" ");
        return (t.startsWith("x") || t === "row") && (n = "row"), (t.startsWith("y") || t === "column") && (n = "column"), {
            display: "flex",
            flexFlow: (n || "") + (!n.includes("-reverse") && r ? "-reverse" : "") + " " + (o || "")
        };
    },
    flexAlign: (t)=>{
        if (!_(t)) return;
        let [e, r] = t.split(" ");
        return {
            display: "flex",
            alignItems: e,
            justifyContent: r
        };
    },
    round: (t, e)=>gc(t ?? e.borderRadius, e, "round"),
    borderRadius: (t, e)=>gc(t ?? e.round, e, "borderRadius")
};
var Mh = {
    fontSize: (t)=>Qa(t) || t,
    fontFamily: (t)=>({
            fontFamily: Za(t) || t
        }),
    fontWeight: (t)=>({
            fontWeight: t,
            fontVariationSettings: '"wght" ' + t
        })
};
var Nh = {
    overflow: (t)=>({
            overflow: t,
            scrollBehavior: "smooth"
        }),
    cursor: (t, e, r, n)=>{
        if (!t) return;
        let o = n.assets && n.assets[t];
        if (o && o.content) t = `url(${o.content.src})`;
        else {
            let s = n.files && n.files[t];
            s && s.content && (t = `url(${s.content.src})`);
        }
        return {
            cursor: t
        };
    },
    opacity: (t)=>t != null ? {
            opacity: String(t)
        } : void 0,
    visibility: (t)=>t != null ? {
            visibility: t
        } : void 0,
    pointerEvents: (t)=>t != null ? {
            pointerEvents: t
        } : void 0
};
var jh = {
    inset: (t, e)=>{
        if (e.call("isNumber", t)) return {
            inset: t
        };
        if (e.call("isString", t)) return {
            inset: t.split(" ").map((r)=>dt(r, "k").k).join(" ")
        };
    },
    left: (t)=>dt(t, "left"),
    top: (t)=>dt(t, "top"),
    right: (t)=>dt(t, "right"),
    bottom: (t)=>dt(t, "bottom"),
    verticalInset: (t)=>{
        if (typeof t != "string") return;
        let e = t.split(" ").map((r)=>dt(r, "k").k);
        return {
            top: e[0],
            bottom: e[1] || e[0]
        };
    },
    horizontalInset: (t)=>{
        if (typeof t != "string") return;
        let e = t.split(" ").map((r)=>dt(r, "k").k);
        return {
            left: e[0],
            right: e[1] || e[0]
        };
    }
};
P();
var Ut = ({ context: t, state: e })=>{
    let r = e?.root?.globalTheme || t.designSystem?.globalTheme;
    return r === "auto" ? null : r;
}, Bh = {
    theme: (t, e)=>{
        if (t) return e.themeModifier ? Qt(t, `@${e.themeModifier}`) : Qt(t);
    },
    color: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            color: bt(t, r)
        };
    },
    background: (t, e)=>{
        let r = Ut(e);
        if (t) return _(t) && t.includes("gradient") ? {
            background: dc(t, r)
        } : {
            background: bt(t, r)
        };
    },
    backgroundColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            backgroundColor: bt(t, r)
        };
    },
    backgroundImage: (t, e, r, n)=>{
        let o = Ut(e);
        if (!t) return;
        let s = n.assets && n.assets[t];
        if (s && s.content) t = s.content.src;
        else {
            let i = n.files && n.files[t];
            i && i.content && (t = i.content.src);
        }
        return {
            backgroundImage: mh(t, o)
        };
    },
    textStroke: (t)=>({
            WebkitTextStroke: hh(t)
        }),
    outline: (t)=>({
            outline: ke(t)
        }),
    outlineOffset: (t, e)=>j("outlineOffset", t, e),
    border: (t)=>({
            border: ke(t)
        }),
    borderColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            borderColor: bt(t, r)
        };
    },
    borderTopColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            borderTopColor: bt(t, r)
        };
    },
    borderBottomColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            borderBottomColor: bt(t, r)
        };
    },
    borderLeftColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            borderLeftColor: bt(t, r)
        };
    },
    borderRightColor: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            borderRightColor: bt(t, r)
        };
    },
    borderLeft: (t)=>({
            borderLeft: ke(t)
        }),
    borderTop: (t)=>({
            borderTop: ke(t)
        }),
    borderRight: (t)=>({
            borderRight: ke(t)
        }),
    borderBottom: (t)=>({
            borderBottom: ke(t)
        }),
    shadow: (t, e)=>{
        let r = Ut(e);
        if (t) return {
            boxShadow: gh(t, r)
        };
    },
    boxShadow: (t, e)=>{
        if (!_(t)) return;
        let [r, n] = t.split("!importan"), o = Ut(e), s = n ? " !important" : "";
        return {
            boxShadow: pc(r.trim(), o) + s
        };
    },
    textShadow: (t, { context: e })=>({
            textShadow: pc(t, e.designSystem.globalTheme)
        }),
    columnRule: (t)=>({
            columnRule: ke(t)
        })
};
var Rs = {
    transition: (t)=>({
            transition: bh(t)
        }),
    transitionDuration: (t)=>({
            transitionDuration: hc(t)
        }),
    transitionDelay: (t)=>({
            transitionDelay: hc(t)
        }),
    transitionTimingFunction: (t)=>({
            transitionTimingFunction: te(t)
        }),
    transitionProperty: (t)=>({
            transitionProperty: t,
            willChange: t
        })
};
P();
var Vh = {
    flow: (t, e)=>{
        let r = e.reverse;
        if (!_(t)) return;
        let [n, o] = (t || "row").split(" ");
        return (t.startsWith("x") || t === "row") && (n = "row"), (t.startsWith("y") || t === "column") && (n = "column"), {
            display: "flex",
            flexFlow: (n || "") + (!n.includes("-reverse") && r ? "-reverse" : "") + " " + (o || "")
        };
    },
    wrap: (t, e)=>({
            display: "flex",
            flexWrap: t
        }),
    align: (t, e)=>{
        let [r, n] = t.split(" ");
        return {
            display: "flex",
            alignItems: r,
            justifyContent: n
        };
    }
};
var zh = {
    area: (t)=>({
            gridArea: t
        }),
    template: (t)=>({
            gridTemplate: t
        }),
    templateAreas: (t)=>({
            gridTemplateAreas: t
        }),
    column: (t)=>({
            gridColumn: t
        }),
    columns: (t)=>({
            gridTemplateColumns: t
        }),
    templateColumns: (t)=>({
            gridTemplateColumns: t
        }),
    autoColumns: (t)=>({
            gridAutoColumns: t
        }),
    columnStart: (t)=>({
            gridColumnStart: t
        }),
    row: (t)=>({
            gridRow: t
        }),
    rows: (t)=>({
            gridTemplateRows: t
        }),
    templateRows: (t)=>({
            gridTemplateRows: t
        }),
    autoRows: (t)=>({
            gridAutoRows: t
        }),
    rowStart: (t)=>({
            gridRowStart: t
        }),
    autoFlow: (t)=>({
            gridAutoFlow: t
        })
};
var lt = {
    ...Dh,
    ...Lh,
    ...Mh,
    ...Nh,
    ...jh,
    ...Bh,
    ...Rs,
    ...Vh,
    ...zh
};
var xt = new Set([
    "accentColor",
    "alignContent",
    "alignItems",
    "alignSelf",
    "alignmentBaseline",
    "all",
    "animation",
    "animationDelay",
    "animationDirection",
    "animationDuration",
    "animationFillMode",
    "animationIterationCount",
    "animationName",
    "animationPlayState",
    "animationTimingFunction",
    "appearance",
    "aspectRatio",
    "backdropFilter",
    "backfaceVisibility",
    "background",
    "backgroundAttachment",
    "backgroundBlendMode",
    "backgroundClip",
    "backgroundColor",
    "backgroundImage",
    "backgroundOrigin",
    "backgroundPosition",
    "backgroundPositionX",
    "backgroundPositionY",
    "backgroundRepeat",
    "backgroundRepeatX",
    "backgroundRepeatY",
    "backgroundSize",
    "baselineShift",
    "blockSize",
    "border",
    "borderBlock",
    "borderBlockColor",
    "borderBlockEnd",
    "borderBlockEndColor",
    "borderBlockEndStyle",
    "borderBlockEndWidth",
    "borderBlockStart",
    "borderBlockStartColor",
    "borderBlockStartStyle",
    "borderBlockStartWidth",
    "borderBlockStyle",
    "borderBlockWidth",
    "borderBottom",
    "borderBottomColor",
    "borderBottomLeftRadius",
    "borderBottomRightRadius",
    "borderBottomStyle",
    "borderBottomWidth",
    "borderCollapse",
    "borderColor",
    "borderImage",
    "borderImageOutset",
    "borderImageRepeat",
    "borderImageSlice",
    "borderImageSource",
    "borderImageWidth",
    "borderLeft",
    "borderLeftColor",
    "borderLeftStyle",
    "borderLeftWidth",
    "borderRadius",
    "borderRight",
    "borderRightColor",
    "borderRightStyle",
    "borderRightWidth",
    "borderSpacing",
    "borderStyle",
    "borderTop",
    "borderTopColor",
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderTopStyle",
    "borderTopWidth",
    "borderWidth",
    "bottom",
    "boxDecorationBreak",
    "boxShadow",
    "boxSizing",
    "breakAfter",
    "breakBefore",
    "breakInside",
    "captionSide",
    "caretColor",
    "clear",
    "clip",
    "clipPath",
    "color",
    "colorAdjust",
    "colorInterpolation",
    "colorInterpolationFilters",
    "colorRendering",
    "columnCount",
    "columnFill",
    "columnGap",
    "columnRule",
    "columnRuleColor",
    "columnRuleStyle",
    "columnRuleWidth",
    "columnSpan",
    "columnWidth",
    "columns",
    "contain",
    "content",
    "counterIncrement",
    "counterReset",
    "cursor",
    "direction",
    "display",
    "emptyCells",
    "filter",
    "flex",
    "flexBasis",
    "flexDirection",
    "flexFlow",
    "flexGrow",
    "flexShrink",
    "flexWrap",
    "float",
    "font",
    "fontFamily",
    "fontFeatureSettings",
    "fontKerning",
    "fontLanguageOverride",
    "fontSize",
    "fontSizeAdjust",
    "fontStretch",
    "fontStyle",
    "fontVariant",
    "fontVariantAlternates",
    "fontVariantCaps",
    "fontVariantEastAsian",
    "fontVariantNumeric",
    "fontVariantPosition",
    "fontWeight",
    "fontVariationSettings",
    "fontSynthesis",
    "forcedColorAdjust",
    "gap",
    "grid",
    "gridArea",
    "gridAutoColumns",
    "gridAutoFlow",
    "gridAutoRows",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnGap",
    "gridColumnStart",
    "gridGap",
    "gridRow",
    "gridRowEnd",
    "gridRowGap",
    "gridRowStart",
    "gridTemplate",
    "gridTemplateAreas",
    "gridTemplateColumns",
    "gridTemplateRows",
    "height",
    "hyphens",
    "imageOrientation",
    "imageRendering",
    "imeMode",
    "inset",
    "insetBlock",
    "insetBlockEnd",
    "insetBlockStart",
    "insetInline",
    "insetInlineEnd",
    "insetInlineStart",
    "initialLetter",
    "isolation",
    "justifyContent",
    "justifyItems",
    "justifySelf",
    "left",
    "letterSpacing",
    "lineBreak",
    "lineClamp",
    "lineHeight",
    "listStyle",
    "listStyleImage",
    "listStylePosition",
    "listStyleType",
    "margin",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBlock",
    "marginBlockEnd",
    "marginBlockStart",
    "marginInline",
    "marginInlineEnd",
    "marginInlineStart",
    "mask",
    "maskBorder",
    "maskBorderImage",
    "maskBorderOutset",
    "maskBorderRepeat",
    "maskBorderSlice",
    "maskBorderSource",
    "maskBorderWidth",
    "maskClip",
    "maskComposite",
    "maskImage",
    "maskOrigin",
    "maskPosition",
    "maskRepeat",
    "maskSize",
    "maskType",
    "maxBlockSize",
    "maxHeight",
    "maxInlineSize",
    "maxWidth",
    "minBlockSize",
    "minHeight",
    "minInlineSize",
    "minWidth",
    "mixBlendMode",
    "objectFit",
    "objectPosition",
    "objectViewBox",
    "offset",
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "opacity",
    "order",
    "orientation",
    "outline",
    "outlineColor",
    "outlineOffset",
    "outlineStyle",
    "outlineWidth",
    "overflow",
    "overflowAnchor",
    "overflowClip",
    "overflowScrolling",
    "overflowWrap",
    "overflowX",
    "overflowY",
    "padding",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "pageBreakAfter",
    "pageBreakBefore",
    "pageBreakInside",
    "paintOrder",
    "perspective",
    "perspectiveOrigin",
    "placeContent",
    "placeItems",
    "placeSelf",
    "pointerEvents",
    "position",
    "resize",
    "right",
    "rotate",
    "rowGap",
    "scrollBehavior",
    "scrollPadding",
    "scrollSnapAlign",
    "scrollSnapType",
    "scrollbarColor",
    "scrollbarWidth",
    "shapeImageThreshold",
    "shapeMargin",
    "shapeOutside",
    "tabSize",
    "tableLayout",
    "textAlign",
    "textAlignLast",
    "textDecoration",
    "textDecorationColor",
    "textDecorationLine",
    "textDecorationSkipInk",
    "textDecorationStyle",
    "textDecorationThickness",
    "textIndent",
    "textOverflow",
    "textShadow",
    "textTransform",
    "textUnderlineOffset",
    "top",
    "transform",
    "transformOrigin",
    "transformStyle",
    "transition",
    "transitionDelay",
    "transitionDuration",
    "transitionProperty",
    "transitionTimingFunction",
    "translate",
    "translateX",
    "translateY",
    "translateZ",
    "unicodeBidi",
    "userSelect",
    "verticalAlign",
    "visibility",
    "whiteSpace",
    "widows",
    "width",
    "willChange",
    "wordBreak",
    "wordSpacing",
    "wordWrap",
    "writingMode",
    "zIndex"
]);
P();
var ow = /^\[data-theme=(?:"([^"]+)"|'([^']+)')\]$/, sw = (t, e, r)=>{
    let { context: n } = r;
    if (!n.designSystem?.media) return;
    let o = t.slice(1), s = n.designSystem.media[o], i = Lt(e, r);
    if (!s) return {
        [t]: i
    };
    if (s === "print") return {
        "@media print": i
    };
    if (s[0] === "(") return {
        [`@media screen and ${s}`]: i
    };
    let a = s.match(ow), c = a ? a[1] || a[2] : o, l = {
        [`${s} &`]: i
    };
    if (c === "dark" || c === "light") {
        let f = n.designSystem?.scopeSelector || ":root", p = f === ":root" ? ":root:not([data-theme])" : `${f}:not([data-theme])`;
        l[`@media (prefers-color-scheme: ${c})`] = {
            [`${p} &`]: i
        };
    }
    return l;
}, Uh = (t, e, r)=>({
        [t]: Lt(e, r)
    }), An = (t, e, r)=>{
    let n = `&${t}`, o = Lt(e, r);
    if (t.includes(",") && o) {
        let s = {}, i = {};
        for(let a in o)typeof o[a] == "object" && o[a] !== null ? i[a] = o[a] : s[a] = o[a];
        if (Object.keys(i).length) {
            let a = n.split(",").map((l)=>l.trim()), c = {};
            Object.keys(s).length && (c[n] = s);
            for(let l in i){
                let f = a.map((p)=>`${p} ${l}`).join(", ");
                c[f] = i[l];
            }
            return c;
        }
    }
    return {
        [n]: o
    };
}, Cc = (t, e)=>{
    let r = e.context?.cases?.[t];
    if (r !== void 0) return C(r) ? r.call(e, e) : !!r;
}, iw = (t, e, r)=>{
    let n = t.slice(1), o = Cc(n, r);
    if (o === void 0 && (o = !!r[n]), !!o) return Lt(e, r);
}, aw = (t, e, r)=>({
        [t]: e
    }), cw = (t, e, r)=>{
    let n = t.slice(1), o = r[n] === !0 || r.state?.[n];
    if (!o) {
        if (typeof r[n] == "function") try {
            o = r[n](r, r.state, r.context);
        } catch  {}
        else {
            let s = Cc(n, r);
            s !== void 0 && (o = s);
        }
    }
    if (o) return Lt(e, r);
}, lw = (t, e, r)=>{
    let n = t.slice(1), o = r[n] === !0 || r.state?.[n];
    if (!o) {
        if (typeof r[n] == "function") try {
            o = r[n](r, r.state, r.context);
        } catch  {}
        else {
            let s = Cc(n, r);
            s !== void 0 && (o = s);
        }
    }
    if (!o) return Lt(e, r);
}, Wh = (t, e)=>Lt(t, e), Hh = {
    "@": sw,
    ":": An,
    "[": An,
    "*": An,
    "+": An,
    "~": An,
    "&": Uh,
    ">": Uh,
    $: iw,
    "-": aw,
    ".": cw,
    "!": lw
};
var Ac = je(), fw = (t, e, r)=>{
    let n = e?.context?.designSystem;
    n && pt(n);
    try {
        let o = {}, s = {}, i = (a, c)=>{
            if (r.unpack) {
                o = {
                    ...o,
                    ...c
                };
                return;
            }
            o[a] = c;
        };
        for(let a in t){
            let c = t[a];
            if (a === "class" && e.call("isString", t.class)) {
                let l = c.split(" ");
                if (l.length) {
                    let f = e.context.designSystem.class, p = l.reduce((u, d)=>et(u, f[d]), {});
                    o.designSystemClass = p;
                }
            } else if (a === "true") {
                let l = X(c, e);
                et(o, Wh(l, e));
            } else if (e.classlist[a]) {
                let l = e.classlist[a], f = C(l) ? l(e, e.state, e.context) : l;
                f && i(a, f), !Ac && S(o[a]) && (o[a].label = a);
            } else if (lt[a]) {
                let l = X(c, e);
                T(l) && (l = l.reduce((p, u)=>et(p, u), {}));
                let f = lt[a](l, e, e.state, e.context);
                T(f) && (f = f.reduce((p, u)=>et(p, u), {})), f && i(a, f), !Ac && S(o[a]) && (o[a].label = a);
            } else if (xt.has(a)) {
                let l = X(c, e);
                typeof l == "string" && l.charCodeAt(0) === 45 && l.charCodeAt(1) === 45 && (l = `var(${l})`), i(a, {
                    [a]: l
                }), !Ac && S(o[a]) && (o[a].label = a);
            } else s[a] = c;
        }
        return [
            o,
            s
        ];
    } finally{
        n && at();
    }
}, uw = (t, e)=>{
    let r = {};
    for(let n in t){
        let o = Hh[n.slice(0, 1)];
        if (o) {
            let s = o(n, t[n], e);
            if (s) for(let i in s)Object.prototype.hasOwnProperty.call(s, i) && (r[i] && typeof r[i] == "object" && typeof s[i] == "object" ? At(r[i], s[i]) : r[i] = s[i]);
        }
    }
    return r;
}, Lt = (t, e, r = {
    unpack: !0
})=>{
    let [n, o] = fw(t, e, r), s = uw(o, e), i = !1;
    for(let a in s){
        i = !0;
        break;
    }
    if (i) {
        if (r.unpack) return uo(n, s);
        n._selectors = s;
    }
    return n;
}, UO = (t, e)=>{
    let r = {};
    if (t.class) for(let n in t.class)r[n] = t.class[n](e);
    return r;
};
P();
var pw = (t)=>{
    if (S(t)) return Lt(t, t);
}, KO = (t, e)=>{
    let r = pw(t);
    return typeof e == "function" ? e(r) : Xe(r);
};
P();
function Kh(t, e, r) {
    let n = t?.context?.analyze;
    if (!n || !n.emit || e === "warn" && !n.shouldCapture("warnings") || e === "error" && !n.shouldCapture("errors")) return;
    let o = r.map((s)=>s?.message || (typeof s == "string" ? s : null)).filter(Boolean).join(" ");
    n.emit({
        id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
        ts: Date.now(),
        type: e === "error" ? "error" : "warning",
        level: e,
        hook: e === "error" ? "el.error" : "el.warn",
        element: {
            key: t.key != null ? String(t.key) : null,
            name: t.__name || null,
            tag: t.tag || null
        },
        message: o || null,
        args: r
    });
}
function dw(...t) {
    return Kh(this, "warn", t), Yo.apply(this, t);
}
function hw(...t) {
    return Kh(this, "error", t), ur.apply(this, t);
}
var qh = {
    update: Ts,
    remove: Os,
    getDB: Qo,
    getQuery: ts,
    getRootData: qo,
    getChildren: Vo,
    getPath: zo,
    nextElement: Xo,
    previousElement: Zo,
    verbose: mn,
    warn: dw,
    error: hw,
    variables: Jo,
    spotByPath: Bo,
    set (t, e) {
        if (this.removeContent(), t != null) {
            let r = this.context?.__create;
            r && r(t, this, "content", e);
        }
        this.__ref && (this.__ref.contentManaged = !0);
    },
    reset (t) {
        let e = this.context?.__create;
        if (!e) return this;
        let r = this.parent, n = this.key, o = this.parse();
        return this.remove(), e(o, r, n, t);
    },
    lookup (t) {
        let e = this.parent;
        for(; e;){
            if (typeof t == "function") {
                if (t(e)) return e;
            } else if (typeof t == "string") {
                if (e.key === t) return e;
                if (e[t] && e[t].__ref) return e[t];
            }
            e = e.parent;
        }
        return null;
    },
    lookdown (t) {
        let e = this.__ref;
        if (!e?.__children) return null;
        for (let r of e.__children){
            let n = this[r];
            if (!n) continue;
            if (typeof t == "function") {
                if (t(n)) return n;
            } else if (typeof t == "string" && n.key === t) return n;
            let o = n.lookdown?.(t);
            if (o) return o;
        }
        return null;
    },
    lookdownAll (t, e = []) {
        let r = this.__ref;
        if (!r?.__children) return e;
        for (let n of r.__children){
            let o = this[n];
            o && (typeof t == "function" ? t(o) && e.push(o) : typeof t == "string" && o.key === t && e.push(o), o.lookdownAll?.(t, e));
        }
        return e;
    },
    getRef () {
        return this.__ref;
    },
    getRoot: Ho,
    getRootState: Wo,
    getRootContext: Go,
    getContext: Ko,
    parse (t) {
        let e = {}, r = t ? new Set(t) : null, n = this.__ref?.__exec;
        for(let o in this)if (!(o === "parent" || o === "node" || o === "__ref") && !r?.has(o)) {
            if (n && n[o] !== void 0) {
                e[o] = n[o];
                continue;
            }
            typeof this[o] != "function" && (e[o] = this[o]);
        }
        return e;
    },
    parseDeep (t) {
        let e = this.parse(t), r = this.__ref;
        if (r?.__children) for (let n of r.__children)this[n]?.parseDeep && (e[n] = this[n].parseDeep(t));
        return e;
    },
    keys () {
        return Object.keys(this);
    },
    log (...t) {
        if (t.length) {
            let e = {};
            for (let r of t)e[r] = this[r];
            console.log(e);
        } else console.log(this);
    },
    setProps (t, e) {
        return this.update(t, e);
    },
    setNodeStyles (t) {
        if (this.node?.style) for(let e in t){
            let r = t[e];
            if (r == null) continue;
            let n = e.replace(/[A-Z]/g, (s)=>"-" + s.toLowerCase()), o = String(r).replace(/\s*!important\s*$/, "");
            this.node.style.setProperty(n, o, "important");
        }
    },
    call (t, ...e) {
        let r = this.context, n = r?.methods?.[t] || r?.functions?.[t] || r?.utils?.[t] || this[t];
        if (typeof n == "function") return n.call(this, ...e);
    },
    removeContent () {
        let t = this.__ref;
        if (!t?.__children) return;
        let e = this.content;
        if (e?.remove) {
            e.remove(), delete this.content;
            let r = t.__children.indexOf("content");
            r !== -1 && t.__children.splice(r, 1);
        }
        e?.node?.parentNode && e.node.parentNode.removeChild(e.node);
    }
}, Gh = new WeakMap;
function gw(t) {
    if (!t) return qh;
    let e = Gh.get(t);
    if (e) return e;
    e = Object.create(qh);
    let r = t.methods;
    if (r) for(let n in r)e[n] = r[n];
    return Gh.set(t, e), e;
}
function Ps(t) {
    let e = gw(t.context);
    Object.setPrototypeOf(t, e);
}
P();
lr();
var mw = (t, e, r)=>{
    Object.defineProperty(t, e, {
        value: r,
        enumerable: !1,
        configurable: !0,
        writable: !0
    });
}, Wt = (t, e)=>{
    if (mt(e)) {
        let o = e.__raw || e;
        e.toggle || Object.defineProperty(o, "toggle", {
            value: function(s, i = {}) {
                e[s] = !e[s];
            },
            enumerable: !1,
            configurable: !0
        }), e.set || Object.defineProperty(o, "set", {
            value: function(s, i = {}) {
                return e.clean({
                    preventStateUpdate: !0
                }), typeof s == "object" && s !== null && e.update(s, i), e;
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(o, "setByPath", {
            value: function(s, i, a = {}) {
                let c = s.split("."), l = e;
                for(let f = 0; f < c.length - 1; f++)l[c[f]] === void 0 && (l[c[f]] = {}), l = l[c[f]];
                return l[c[c.length - 1]] = i, e;
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "getByPath", {
            value: function(s) {
                let i = s.split("."), a = e;
                for(let c = 0; c < i.length; c++){
                    if (a == null) return;
                    a = a[i[c]];
                }
                return a;
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "removeByPath", {
            value: function(s, i = {}) {
                let a = s.split("."), c = e;
                for(let l = 0; l < a.length - 1; l++){
                    if (c == null) return e;
                    c = c[a[l]];
                }
                return c && delete c[a[a.length - 1]], e;
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "reset", {
            value: function(s = {}) {
                let i = e.parse();
                return e.set(i, s);
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "apply", {
            value: function(s, i = {}) {
                if (typeof s == "function") {
                    let a = s(e);
                    return e.update(a, i);
                }
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "applyFunction", {
            value: function(s, i = {}) {
                if (typeof s == "function") return s(e), e.update(e.parse(), i);
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "rootUpdate", {
            value: function(s, i = {}) {
                let a = e;
                for(; a?.parent && mt(a.parent);)a = a.parent;
                return a.update(s, i);
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "parentUpdate", {
            value: function(s, i = {}) {
                if (e.parent) return e.parent.update(s, i);
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.defineProperty(o, "quietReplace", {
            value: function(s, i = {}) {
                return e.replace(s, {
                    quiet: !0,
                    ...i
                });
            },
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Object.getOwnPropertyDescriptor(o, "root") || Object.defineProperty(o, "root", {
            get: function() {
                let s = e;
                for(; s?.parent && mt(s.parent);)s = s.parent;
                return s;
            },
            enumerable: !1,
            configurable: !0
        });
        return;
    }
    if (!e || typeof e != "object") return;
    let r = ()=>{
        for(let o in e)Object.prototype.hasOwnProperty.call(e, o) && delete e[o];
    }, n = {
        update (o) {
            if (!o || typeof o != "object") return e;
            for(let s in o)e[s] = o[s];
            return e;
        },
        apply (o) {
            if (typeof o != "function") return e;
            let s = o(e);
            return s ? e.update(s) : e;
        },
        parse () {
            return {
                ...e
            };
        },
        toggle (o) {
            return e[o] = !e[o], e;
        },
        set (o) {
            if (!o || typeof o != "object") return e;
            r();
            for(let s in o)e[s] = o[s];
            return e;
        },
        replace (o) {
            return e.set(o);
        },
        clean () {
            return r(), e;
        }
    };
    for(let o in n)typeof e[o] != "function" && mw(e, o, n[o]);
};
var yw = function(t, e, r) {
    return t.state = Yh(t, e, r), t.state;
}, Yh = function(t, e, r) {
    let { __ref: n } = t, o = t.state;
    if (o == null || o === !1) {
        let s = e?.state || {};
        return Wt(t, s), s;
    }
    if (typeof o == "string") return n && (n.__state = o), n.__stateType = "string", bw(o, t, e);
    if (typeof o == "number" || typeof o == "boolean") {
        n && (n.__state = o, n.__stateType = typeof o, n.__hasRootState = !0);
        let s = jt({
            value: o
        });
        return s.__element = t, e?.state && (s.parent = e.state), Wt(t, s), s;
    }
    if (typeof o == "function" && (o = o(t, e?.state) || {}), typeof o == "object" && !mt(o)) {
        n && (n.__hasRootState = !0), o.isRootState && n && (n.__hasRootState = !0);
        let s = jt({
            ...o
        });
        if (s.__element = t, !Object.getOwnPropertyDescriptor(s, "root")) {
            let i = e?.state?.root || e?.state || s;
            Object.defineProperty(s, "root", {
                get: ()=>i,
                enumerable: !1,
                configurable: !0
            });
        }
        return e?.state && (s.parent = e.state, e.state.__children && (e.state.__children[t.key] = s)), Wt(t, s), typeof t.onStateCreated == "function" && t.onStateCreated(t, s, t.context, r), s;
    }
    return mt(o) ? (o.__element = t, o) : e?.state || {};
};
function Ec(t, e) {
    if (!e) return t;
    let r = e.split("/"), n = t;
    for (let o of r){
        if (n == null) return {};
        n = n[o];
    }
    return n ?? {};
}
function bw(t, e, r) {
    if (!r?.state) return {};
    if (t === ".") return r.state;
    if (t.startsWith("../")) {
        let o = t.slice(3), s = r.state?.parent;
        return o && s ? Ec(s, o) : s ?? r.state ?? {};
    }
    if (t.startsWith("~/")) {
        let o = r.state;
        for(; o?.parent;)o = o.parent;
        let s = t.slice(2);
        return s ? Ec(o, s) : o ?? {};
    }
    let n = Ec(r.state, t);
    if (n && typeof n == "object" && !mt(n) && !Object.getOwnPropertyDescriptor(n, "root")) {
        let o = r.state?.root || r.state;
        Object.defineProperty(n, "root", {
            get: ()=>o,
            enumerable: !1,
            configurable: !0
        });
    }
    return n;
}
var xw = (t, e)=>{
    if (!t) return Zh;
    let r = ww(t, e);
    return !r || !r.state ? Zh : vw(r.state);
}, Sw = ()=>Hr() != null, _w = 128;
function ww(t, e) {
    let r = typeof e == "function" ? e : typeof e == "string" ? (s)=>!!s?.[e] : (s)=>!!s?.state, n = t, o = null;
    for(let s = 0; s < _w && n; s++){
        if (r(n) && n.state) return n;
        if (n.state && !o && (o = n), !n.parent || n.parent === n) break;
        n = n.parent;
    }
    return o;
}
var kw = {
    get (t, e) {
        return t[e];
    }
}, Xh = new WeakMap, vw = (t)=>{
    let e = Xh.get(t);
    return e || (e = new Proxy(t, kw), Xh.set(t, e)), e;
}, Zh = new Proxy(Object.create(null), {
    get () {},
    has () {
        return !1;
    }
});
P();
var mR = [
    "alert",
    "alertdialog",
    "application",
    "article",
    "banner",
    "button",
    "cell",
    "checkbox",
    "columnheader",
    "combobox",
    "complementary",
    "contentinfo",
    "definition",
    "dialog",
    "directory",
    "document",
    "feed",
    "figure",
    "form",
    "grid",
    "gridcell",
    "group",
    "heading",
    "img",
    "link",
    "list",
    "listbox",
    "listitem",
    "log",
    "main",
    "marquee",
    "math",
    "menu",
    "menubar",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "navigation",
    "none",
    "note",
    "option",
    "presentation",
    "progressbar",
    "radio",
    "radiogroup",
    "region",
    "row",
    "rowgroup",
    "rowheader",
    "scrollbar",
    "search",
    "searchbox",
    "separator",
    "slider",
    "spinbutton",
    "status",
    "switch",
    "tab",
    "table",
    "tablist",
    "tabpanel",
    "term",
    "textbox",
    "timer",
    "toolbar",
    "tooltip",
    "tree",
    "treegrid",
    "treeitem"
], Tc = {
    default: [
        "accesskey",
        "autofocus",
        "class",
        "contenteditable",
        "contextmenu",
        "dir",
        "draggable",
        "hidden",
        "id",
        "lang",
        "part",
        "placeholder",
        "slot",
        "spellcheck",
        "style",
        "tabindex",
        "title",
        "translate",
        "inert",
        "radiogroup",
        "role",
        "about",
        "datatype",
        "inlist",
        "prefix",
        "property",
        "resource",
        "typeof",
        "vocab",
        "autocapitalize",
        "autocorrect",
        "autosave",
        "color",
        "itemprop",
        "itemscope",
        "itemtype",
        "itemid",
        "itemref",
        "results",
        "security",
        "unselectable",
        "is"
    ],
    a: [
        "accesskey",
        "charset",
        "coords",
        "download",
        "href",
        "hreflang",
        "name",
        "rel",
        "rev",
        "shape",
        "target",
        "type"
    ],
    aria: [
        "aria-activedescendant",
        "aria-atomic",
        "aria-autocomplete",
        "aria-checked",
        "aria-colcount",
        "aria-colindex",
        "aria-colspan",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-dropeffect",
        "aria-errormessage",
        "aria-expanded",
        "aria-flowto",
        "aria-grabbed",
        "aria-haspopup",
        "aria-hidden",
        "aria-invalid",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-level",
        "aria-live",
        "aria-modal",
        "aria-multiline",
        "aria-multiselectable",
        "aria-orientation",
        "aria-owns",
        "aria-placeholder",
        "aria-posinset",
        "aria-pressed",
        "aria-readonly",
        "aria-relevant",
        "aria-required",
        "aria-roledescription",
        "aria-rowcount",
        "aria-rowindex",
        "aria-rowspan",
        "aria-selected",
        "aria-setsize",
        "aria-sort",
        "aria-valuemax",
        "aria-valuemin",
        "aria-valuenow",
        "aria-valuetext"
    ],
    anchor: [
        "download",
        "href",
        "hreflang",
        "media",
        "ping",
        "rel",
        "target",
        "type",
        "referrerpolicy"
    ],
    audio: [
        "autoplay",
        "controls",
        "crossorigin",
        "loop",
        "muted",
        "preload",
        "src"
    ],
    area: [
        "alt",
        "coords",
        "download",
        "href",
        "hreflang",
        "media",
        "referrerpolicy",
        "rel",
        "shape",
        "target",
        "ping"
    ],
    base: [
        "href",
        "target"
    ],
    blockquote: [
        "cite"
    ],
    button: [
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "name",
        "type",
        "value"
    ],
    canvas: [
        "height",
        "width"
    ],
    col: [
        "span",
        "width"
    ],
    colgroup: [
        "span"
    ],
    data: [
        "value"
    ],
    details: [
        "open"
    ],
    del: [
        "cite",
        "datetime"
    ],
    dialog: [
        "open"
    ],
    embed: [
        "height",
        "src",
        "type",
        "width"
    ],
    fieldset: [
        "disabled",
        "form",
        "name"
    ],
    form: [
        "acceptcharset",
        "action",
        "autocomplete",
        "enctype",
        "method",
        "name",
        "novalidate",
        "target",
        "rel"
    ],
    html: [
        "manifest"
    ],
    iframe: [
        "allow",
        "allowfullscreen",
        "allowtransparency",
        "frameborder",
        "height",
        "loading",
        "marginheight",
        "marginwidth",
        "mozallowfullscreen",
        "name",
        "referrerpolicy",
        "sandbox",
        "scrolling",
        "seamless",
        "src",
        "srcdoc",
        "webkitallowfullscreen",
        "width"
    ],
    img: [
        "alt",
        "crossorigin",
        "decoding",
        "height",
        "ismap",
        "loading",
        "referrerpolicy",
        "sizes",
        "src",
        "srcset",
        "usemap",
        "width"
    ],
    ins: [
        "cite",
        "datetime"
    ],
    input: [
        "accept",
        "alt",
        "autocomplete",
        "capture",
        "checked",
        "crossorigin",
        "disabled",
        "form",
        "formaction",
        "formenctype",
        "formmethod",
        "formnovalidate",
        "formtarget",
        "height",
        "indeterminate",
        "list",
        "max",
        "maxlength",
        "min",
        "minlength",
        "multiple",
        "name",
        "pattern",
        "placeholder",
        "readonly",
        "required",
        "size",
        "src",
        "step",
        "type",
        "value",
        "width"
    ],
    keygen: [
        "challenge",
        "disabled",
        "form",
        "keytype",
        "keyparams",
        "name"
    ],
    label: [
        "form",
        "for"
    ],
    li: [
        "value"
    ],
    link: [
        "as",
        "crossorigin",
        "href",
        "hreflang",
        "integrity",
        "media",
        "imagesrcset",
        "imagesizes",
        "referrerpolicy",
        "rel",
        "sizes",
        "type",
        "charset"
    ],
    map: [
        "name"
    ],
    menu: [
        "type"
    ],
    media: [
        "autoplay",
        "controls",
        "currenttime",
        "defaultmuted",
        "defaultplaybackrate",
        "loop",
        "mediagroup",
        "muted",
        "playsinline",
        "preload",
        "src",
        "volume"
    ],
    meta: [
        "charset",
        "content",
        "http-equiv",
        "name",
        "media"
    ],
    meter: [
        "form",
        "high",
        "low",
        "max",
        "min",
        "optimum",
        "value"
    ],
    quote: [
        "cite"
    ],
    object: [
        "classid",
        "data",
        "form",
        "height",
        "name",
        "type",
        "usemap",
        "width",
        "wmode"
    ],
    ol: [
        "reversed",
        "start",
        "type"
    ],
    optgroup: [
        "disabled",
        "label"
    ],
    option: [
        "disabled",
        "label",
        "selected",
        "value"
    ],
    output: [
        "form",
        "for",
        "name"
    ],
    param: [
        "name",
        "value"
    ],
    progress: [
        "max",
        "value"
    ],
    slot: [
        "name"
    ],
    script: [
        "async",
        "charset",
        "crossorigin",
        "defer",
        "integrity",
        "nomodule",
        "nonce",
        "referrerpolicy",
        "src",
        "type"
    ],
    select: [
        "autocomplete",
        "disabled",
        "form",
        "multiple",
        "name",
        "required",
        "size",
        "value",
        "onchange"
    ],
    source: [
        "height",
        "media",
        "sizes",
        "src",
        "srcset",
        "type",
        "width"
    ],
    style: [
        "media",
        "nonce",
        "scoped",
        "type"
    ],
    table: [
        "align",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "rules",
        "summary",
        "width"
    ],
    textarea: [
        "autocomplete",
        "cols",
        "dirname",
        "disabled",
        "form",
        "maxlength",
        "minlength",
        "name",
        "placeholder",
        "readonly",
        "required",
        "rows",
        "value",
        "wrap"
    ],
    td: [
        "align",
        "colspan",
        "headers",
        "rowspan",
        "scope",
        "abbr",
        "height",
        "width",
        "valign"
    ],
    th: [
        "align",
        "colspan",
        "headers",
        "rowspan",
        "scope",
        "abbr"
    ],
    time: [
        "datetime"
    ],
    track: [
        "default",
        "kind",
        "label",
        "src",
        "srclang"
    ],
    video: [
        "autoplay",
        "controls",
        "crossorigin",
        "disablepictureinpicture",
        "disableremoteplayback",
        "height",
        "loop",
        "muted",
        "playsinline",
        "poster",
        "preload",
        "src",
        "width"
    ],
    svg: [
        "className",
        "class",
        "color",
        "height",
        "id",
        "lang",
        "max",
        "media",
        "method",
        "min",
        "name",
        "style",
        "target",
        "type",
        "width",
        "role",
        "tabindex",
        "crossorigin",
        "accent-height",
        "accumulate",
        "additive",
        "alignment-baseline",
        "allowReorder",
        "alphabetic",
        "amplitude",
        "arabic-form",
        "ascent",
        "attributeName",
        "attributeType",
        "autoReverse",
        "azimuth",
        "baseFrequency",
        "baseline-shift",
        "baseProfile",
        "bbox",
        "begin",
        "bias",
        "by",
        "calcMode",
        "cap-height",
        "clip",
        "clip-path",
        "clipPathUnits",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "contentScriptType",
        "contentStyleType",
        "cursor",
        "cx",
        "cy",
        "d",
        "decelerate",
        "descent",
        "diffuseConstant",
        "direction",
        "display",
        "divisor",
        "dominant-baseline",
        "dur",
        "dx",
        "dy",
        "edgeMode",
        "elevation",
        "enable-background",
        "end",
        "exponent",
        "externalResourcesRequired",
        "fill",
        "fill-opacity",
        "fill-rule",
        "filter",
        "filterRes",
        "filterUnits",
        "flood-color",
        "flood-opacity",
        "focusable",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "format",
        "from",
        "fx",
        "fy",
        "g1",
        "g2",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "glyphRef",
        "gradientTransform",
        "gradientUnits",
        "hanging",
        "href",
        "horiz-adv-x",
        "horiz-origin-x",
        "ideographic",
        "image-rendering",
        "in2",
        "in",
        "intercept",
        "k1",
        "k2",
        "k3",
        "k4",
        "k",
        "kernelMatrix",
        "kernelUnitLength",
        "kerning",
        "keyPoints",
        "keySplines",
        "keyTimes",
        "lengthAdjust",
        "letter-spacing",
        "lighting-color",
        "limitingConeAngle",
        "local",
        "marker-end",
        "markerHeight",
        "marker-mid",
        "marker-start",
        "markerUnits",
        "markerWidth",
        "mask",
        "maskContentUnits",
        "maskUnits",
        "mathematical",
        "mode",
        "numOctaves",
        "offset",
        "opacity",
        "operator",
        "order",
        "orient",
        "orientation",
        "origin",
        "overflow",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "path",
        "pathLength",
        "patternContentUnits",
        "patternTransform",
        "patternUnits",
        "pointer-events",
        "points",
        "pointsAtX",
        "pointsAtY",
        "pointsAtZ",
        "preserveAlpha",
        "preserveAspectRatio",
        "primitiveUnits",
        "r",
        "radius",
        "refX",
        "refY",
        "rendering-intent",
        "repeatCount",
        "repeatDur",
        "requiredExtensions",
        "requiredFeatures",
        "restart",
        "result",
        "rotate",
        "rx",
        "ry",
        "scale",
        "seed",
        "shape-rendering",
        "slope",
        "spacing",
        "specularConstant",
        "specularExponent",
        "speed",
        "spreadMethod",
        "startOffset",
        "stdDeviation",
        "stemh",
        "stemv",
        "stitchTiles",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "string",
        "stroke",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "surfaceScale",
        "systemLanguage",
        "tableValues",
        "targetX",
        "targetY",
        "text-anchor",
        "text-decoration",
        "textLength",
        "text-rendering",
        "to",
        "transform",
        "u1",
        "u2",
        "underline-position",
        "underline-thickness",
        "unicode",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "values",
        "vector-effect",
        "version",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "v-hanging",
        "v-ideographic",
        "viewBox",
        "viewTarget",
        "visibility",
        "v-mathematical",
        "widths",
        "word-spacing",
        "writing-mode",
        "x1",
        "x2",
        "x",
        "xChannelSelector",
        "x-height",
        "xlink:actuate",
        "xlink:arcrole",
        "xlink:href",
        "xlink:role",
        "xlink:show",
        "xlink:title",
        "xlink:type",
        "xml:base",
        "xml:lang",
        "xmlns",
        "xmlns:xlink",
        "xml:space",
        "y1",
        "y2",
        "y",
        "yChannelSelector",
        "z",
        "zoomAndPan"
    ]
}, Cw = [
    "oncopy",
    "oncut",
    "onpaste",
    "oncompositionend",
    "oncompositionstart",
    "oncompositionupdate",
    "onfocus",
    "onfocusin",
    "onfocusout",
    "onblur",
    "onchange",
    "onbeforeinput",
    "oninput",
    "onreset",
    "onsubmit",
    "oninvalid",
    "onformdata",
    "onload",
    "onerror",
    "ontoggle",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onabort",
    "oncanplay",
    "oncanplaythrough",
    "oncuechange",
    "ondurationchange",
    "onemptied",
    "onencrypted",
    "onended",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onseeked",
    "onseeking",
    "onstalled",
    "onsuspend",
    "ontimeupdate",
    "onvolumechange",
    "onwaiting",
    "onauxclick",
    "onclick",
    "oncontextmenu",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragexit",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onselect",
    "onselectionchange",
    "onselectstart",
    "ontouchcancel",
    "ontouchend",
    "ontouchmove",
    "ontouchstart",
    "ongotpointercapture",
    "onpointercancel",
    "onpointerdown",
    "onpointerenter",
    "onpointerleave",
    "onpointermove",
    "onpointerout",
    "onpointerover",
    "onpointerup",
    "onlostpointercapture",
    "onscroll",
    "onresize",
    "onwheel",
    "onanimationstart",
    "onanimationend",
    "onanimationiteration",
    "ontransitionstart",
    "ontransitionrun",
    "ontransitionend",
    "ontransitioncancel",
    "onoutrostart",
    "onoutroend",
    "onintrostart",
    "onintroend",
    "onmessage",
    "onmessageerror",
    "onvisibilitychange",
    "oncancel",
    "onclose",
    "onfullscreenchange",
    "onfullscreenerror"
], Oc = (t)=>t.startsWith("aria") && t.length > 4 && t.charCodeAt(4) >= 65 && t.charCodeAt(4) <= 90 ? "aria-" + t.charAt(4).toLowerCase() + t.slice(5).replace(/([A-Z])/g, (e)=>"-" + e.toLowerCase()) : t.startsWith("data") && t.length > 4 && t.charCodeAt(4) >= 65 && t.charCodeAt(4) <= 90 ? "data-" + t.charAt(4).toLowerCase() + t.slice(5).replace(/([A-Z])/g, (e)=>"-" + e.toLowerCase()) : null, Je = (t, e)=>e.startsWith("aria-") || e.startsWith("data-") || Oc(e) || Tc.default.includes(e) ? !0 : Object.prototype.hasOwnProperty.call(Tc, t) ? Tc[t].includes(e) : !1, eg = (t)=>{
    if (!_(t)) return !1;
    let e = t.toLowerCase();
    return Cw.includes(e);
}, yR = (t, e, r)=>{
    let n = {};
    for(let o in e)if (Object.prototype.hasOwnProperty.call(e, o)) {
        if (r && o in r) continue;
        if (o === "aria" && e[o] && typeof e[o] == "object") {
            for(let a in e[o])vt(e[o][a]) && (n["aria-" + a] = e[o][a]);
            continue;
        }
        if (o === "data" && e[o] && typeof e[o] == "object") {
            for(let a in e[o])if (vt(e[o][a])) {
                let c = a.replace(/([A-Z])/g, (l)=>"-" + l.toLowerCase());
                n["data-" + c] = e[o][a];
            }
            continue;
        }
        let s = Je(t, o), i = eg(o);
        if (vt(e[o]) && (s || i)) {
            let a = Oc(o) || o;
            n[a] = e[o];
        }
    }
    return n;
}, bR = (t, e)=>{
    let r = {};
    if (t.attr) for(let n in t.attr)r[n] = t.attr[n](e, e.state, e.context);
    if (t.aria && typeof t.aria == "object") for(let n in t.aria){
        let o = t.aria[n];
        typeof o == "function" && (r["aria-" + n] = o(e, e.state, e.context));
    }
    if (t.data && typeof t.data == "object") for(let n in t.data){
        let o = t.data[n];
        if (typeof o == "function") {
            let s = n.replace(/([A-Z])/g, (i)=>"-" + i.toLowerCase());
            r["data-" + s] = o(e, e.state, e.context);
        }
    }
    return r;
}, Ze = (t, e)=>{
    let r = t.call("exec", e, t);
    if (r) return _(r) && r.includes("{{") && (r = t.call("replaceLiteralsWithObjectFields", r)), r;
}, Jh = (t, e)=>{
    let r = (t.preSrc || "") + (Ze(t, e) || "");
    if (!r) return;
    try {
        return new URL(r), r;
    } catch  {}
    let { context: n } = t;
    if (!n.files && !n.assets) return r;
    if (r.startsWith("/assets/")) {
        let o = r.slice(8), s = n.assets && (n.assets[r] || n.assets[o]);
        return s && s.content ? s.content.src : r;
    }
    if (r.startsWith("/files/")) {
        let o = r.slice(7), s = n.files && (n.files[r] || n.files[o]);
        return s && s.content ? s.content.src : r;
    }
    if (n.assets) {
        let o = n.assets[r];
        if (o && o.content) return o.content.src;
    }
    if (n.files) {
        let o = n.files[r];
        if (o && o.content) return o.content.src;
    }
    return r;
}, Qh = {
    src: (t)=>Jh(t, t.src),
    href: (t)=>Ze(t, t.href),
    action: (t)=>Ze(t, t.action),
    poster: (t)=>Jh(t, t.poster),
    data: (t)=>Ze(t, t.data)
}, rg = (t)=>{
    let e = t.tag || "div", r = {};
    for(let n in Qh)if (t[n] !== void 0 && Je(e, n)) {
        let o = Qh[n](t);
        o !== void 0 && (r[n] = o);
    }
    return r;
}, tg = (t, e)=>{
    let r = e.context?.cases?.[t];
    if (r !== void 0) return C(r) ? r.call(e, e) : !!r;
}, Aw = (t, e, r)=>{
    if (t === "$") {
        let o = tg(e, r);
        return o === void 0 && (o = !!r[e]), o;
    }
    let n = r[e] === !0 || r.state[e];
    if (!n) {
        let o = tg(e, r);
        o !== void 0 && (n = o);
    }
    return t === "." ? !!n : !n;
}, Ew = new Set([
    "$",
    ".",
    "!"
]), xR = (t, e, r)=>{
    let n = {}, o = (s, i, a, c)=>{
        let l = i;
        n[s] = (f)=>{
            if (Aw(a, c, f)) return C(l) ? l(f) : l;
        };
    };
    for(let s in t){
        let i = s.charAt(0);
        if (!Ew.has(i)) continue;
        let a = t[s];
        if (!a || typeof a != "object") continue;
        let c = s.slice(1);
        for(let l in a){
            if (r && l in r) continue;
            if (l === "aria" && a[l] && typeof a[l] == "object") {
                for(let d in a[l])o("aria-" + d, a[l][d], i, c);
                continue;
            }
            if (l === "data" && a[l] && typeof a[l] == "object") {
                for(let d in a[l]){
                    let h = d.replace(/([A-Z])/g, (g)=>"-" + g.toLowerCase());
                    o("data-" + h, a[l][d], i, c);
                }
                continue;
            }
            let f = Je(e, l), p = eg(l);
            if (!f && !p) continue;
            let u = Oc(l) || l;
            o(u, a[l], i, c);
        }
    }
    return n;
};
var Tw = 1;
function Er(t) {
    return t.length > 2 && t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) >= 65 && t.charCodeAt(2) <= 90;
}
function Ow(t) {
    return t.charAt(2).toLowerCase() + t.slice(3);
}
function Rw(t) {
    return t.toLowerCase();
}
function Ic(t, e) {
    let r = {
        ...t
    };
    for(let n in e){
        let o = r[n], s = e[n];
        o && s && typeof o == "object" && typeof s == "object" && !Array.isArray(o) && !Array.isArray(s) && typeof o != "function" && typeof s != "function" ? r[n] = Ic(o, s) : r[n] = s;
    }
    return r;
}
function zt(t, e, r, n = {}, o) {
    if (t == null || t === !1) return null;
    (typeof t == "string" || typeof t == "number") && (t = {
        text: t
    });
    let s = Object.create(null);
    s.key = r || t.key || `_${Tw++}`, s.parent = e || null, s.context = t.context || e?.context || n.context || {}, s.context.__create || (s.context.__create = zt);
    let i = s.__ref = {
        __if: !0,
        __children: [],
        __exec: {},
        __effects: [],
        __eventCleanup: [],
        root: e?.__ref?.root || s,
        path: e?.__ref?.path ? [
            ...e.__ref.path,
            s.key
        ] : [
            s.key
        ]
    };
    if (r && !t.extends && !t.extend) {
        let g = r.indexOf("_");
        if (g > 0) {
            let m = r.substring(0, g), y = s.context?.components;
            y && (y[m] || y["smbls." + m]) && (t = {
                extends: m,
                ...t
            });
        }
    }
    Es(s, t, n);
    let a = new Set([
        "childProps",
        "attr",
        "style",
        "scope",
        "data"
    ]), c = s.props && typeof s.props == "object" ? s.props : null;
    for(let g in t){
        if (g === "parent" || g === "node" || g === "__ref" || g === "extends" || g === "context" || g === "props") continue;
        let m = t[g], y = s[g], b = y && m && typeof y == "object" && typeof m == "object" && !Array.isArray(y) && !Array.isArray(m) && typeof y != "function" && typeof m != "function";
        b && g.charCodeAt(0) >= 65 && g.charCodeAt(0) <= 90 ? s[g] = Ic(y, m) : b && a.has(g) ? s[g] = {
            ...y,
            ...m
        } : s[g] = m;
    }
    function l(g) {
        for(let m in g){
            let y = g[m], b = s[m], w = b && y && typeof b == "object" && typeof y == "object" && !Array.isArray(b) && !Array.isArray(y) && typeof b != "function" && typeof y != "function";
            w && m.charCodeAt(0) >= 65 && m.charCodeAt(0) <= 90 ? s[m] = Ic(b, y) : w && a.has(m) ? s[m] = {
                ...b,
                ...y
            } : s[m] = y;
        }
    }
    c && l(c), t.props && typeof t.props == "object" && l(t.props), t.data !== void 0 && (s.data = t.data), t.classlist !== void 0 && (s.classlist = t.classlist), t.text !== void 0 && (s.text = t.text), t.html !== void 0 && (s.html = t.html);
    let f = s.scope && typeof s.scope == "object" ? s.scope : null, p = e?.scope, u = s.context && typeof s.context.globalScope == "object" && s.context.globalScope || null, d = p || u || null;
    if (t.scope !== void 0 || f) {
        let g = {};
        f && Object.assign(g, f), t.scope !== void 0 && Object.assign(g, t.scope), s.scope = Ai(g, d);
    } else d && (s.scope = d);
    if (t.if !== void 0 && (s.if = t.if), Ps(s), Pw(s, e, t), s.if != null) {
        let g;
        if (typeof s.if == "function") try {
            g = s.if(s, s.state, s.context);
        } catch (m) {
            if (g = !1, i.__ifError = m, typeof console < "u" && console.warn) {
                let y = s.key || s.tag || "?";
                console.warn(`[smbls] \`if:\` evaluator threw on ${y} \u2014 treating as false:`, m?.message || m);
            }
        }
        else g = s.if;
        i.__if = !!g;
    }
    if (i.__if) typeof t.if == "function" && (i.__ifInitialized = !0);
    else return e && (e[s.key] = s), typeof t.if == "function" && $c(s, {
        if: t.if
    }), s;
    s.tag || (s.tag = wr(s)), ve("Init", s, n);
    let h = s.node = kr(s);
    if (!h) return s;
    ve("AttachNode", s, n), h.setAttribute && s.key && h.setAttribute("data-key", s.key), h.setAttribute && s.context?.scopeSelector && s.context.scopeSelector !== ":root" && s.context.key && s.key === s.context.key && h.setAttribute("data-smbls-app", s.context.key), s.id && h.setAttribute && (h.id = s.id), $c(s, t), Fc(s), og(s), ig(s, n);
    try {
        ag(s, n);
    } catch (g) {
        if (typeof console < "u" && console.error) {
            let m = s.__ref?.path?.join(".") || s.key || "<root>";
            console.error(`[smbls] createChildren failed at ${m}:`, g?.message || g, g?.stack ? `
` + g.stack.split(`
`).slice(0, 6).join(`
`) : "");
        }
    }
    if (Mc(s, e, o), e && (e[s.key] = s, e.__ref?.__children && (e.__ref.__children.includes(s.key) || e.__ref.__children.push(s.key))), typeof s.html == "function" && s.node && !s.node.innerHTML) {
        let g = s.context?.designSystem;
        g && pt(g);
        try {
            let m = s.html(s, s.state, s.context);
            m != null && typeof m != "function" && (s.node.innerHTML = m);
        } catch  {} finally{
            g && at();
        }
    }
    if (ve("Create", s, n), ve("Complete", s, n), ve("Render", s, n), ve("RenderRouter", s, n), typeof s.onFrame == "function") {
        let g = s.onFrame, m = s.context?.designSystem, y = ()=>{
            if (s.node) {
                if (s.node.isConnected) {
                    m && pt(m);
                    try {
                        g(s, s.state, s.context);
                    } catch (b) {
                        console.error("[DOMQL] onFrame error:", b);
                    } finally{
                        m && at();
                    }
                }
                requestAnimationFrame(y);
            }
        };
        requestAnimationFrame(y);
    }
    return s;
}
function Pw(t, e, r) {
    let n = !e, o = r.state && typeof r.state == "object" && !Array.isArray(r.state) && Object.keys(r.state).length === 0, s = n && o && t.context?.state, i = r.state !== void 0 && !s ? r.state : t.state && !mt(t.state) ? t.state : void 0;
    if (i == null) {
        if (e?.state) t.state = e.state, Wt(t, t.state);
        else if (t.context?.state) {
            let a = t.context.state, c = {
                ...a
            }, l = t.context?.polyglot;
            if (l?.translations) {
                let f = a.lang || l.defaultLang || "en", p = l.translations[f];
                if (p && typeof p == "object") for(let d in p)c[d] === void 0 && (c[d] = p[d]);
                let u = new Set(l.languages || []);
                for(let d in l.translations)!u.has(d) && c[d] === void 0 && (c[d] = l.translations[d]);
            }
            t.state = mt(c) ? c : jt(c), t.state.__element = t, t.state.root = t.state, Wt(t, t.state);
        } else t.state = {}, Object.defineProperty(t.state, "root", {
            value: t.state,
            enumerable: !1,
            configurable: !0,
            writable: !0
        }), Wt(t, t.state);
        return;
    }
    if (typeof i == "string") {
        if (t.state = ng(i, e), t.state && typeof t.state == "object" && !mt(t.state)) {
            let a = e?.state?.root || e?.state || t.state;
            Object.defineProperty(t.state, "root", {
                value: a,
                enumerable: !1,
                configurable: !0,
                writable: !0
            });
        }
        Wt(t, t.state);
        return;
    }
    if (typeof i == "function") {
        let a = i(t, e?.state);
        t.state = jt(a || {});
    } else t.state = jt({
        ...i
    });
    t.state.__element = t, e?.state ? (t.state.parent = e.state, t.state.root = e.state.root || e.state) : t.state.root = t.state, Wt(t, t.state);
}
function Rc(t, e) {
    if (!e) return t;
    let r = e.split("/"), n = t;
    for (let o of r){
        if (n == null) return {};
        n = n[o];
    }
    return n ?? {};
}
function ng(t, e) {
    if (!e) return {};
    if (t === ".") return e.state || {};
    if (t.startsWith("../")) {
        let o = t.slice(3);
        return o ? Rc(e.state, o) : e.state ?? {};
    }
    if (t.startsWith("~/")) {
        let o = e.state?.root || e.state, s = t.slice(2);
        return s ? Rc(o, s) : o ?? {};
    }
    if (e.state?.[t] !== void 0) return e.state[t];
    let r = Rc(e.state, t);
    if (r != null && Object.keys(r).length > 0) return r;
    let n = e.context?.polyglot;
    if (n?.translations) {
        let o = e.state?.root?.lang || n.defaultLang || "en", s = n.translations[o];
        if (s?.[t] !== void 0) return s[t];
        if (n.translations[t] !== void 0) return n.translations[t];
    }
    return {};
}
function Iw(t) {
    let e = t.__ref, r = t.tag || "div", n = t.context?.designSystem, o = [], s = Object.keys(t);
    for(let i = 0; i < s.length; i++){
        let a = s[i];
        if (typeof t[a] != "function" || Rt.has(a)) continue;
        let c = a.charCodeAt(0);
        c >= 65 && c <= 90 || Er(a) || lt[a] || xt && xt.has(a) || Je(r, a) || o.push({
            prop: a,
            fn: t[a]
        });
    }
    for(let i = 0; i < o.length; i++){
        let { prop: a, fn: c } = o[i];
        e.__exec[a] = c, Object.defineProperty(t, a, {
            get () {
                n && pt(n);
                try {
                    return c(t, t.state, t.context);
                } catch  {
                    return;
                } finally{
                    n && at();
                }
            },
            set (l) {
                delete e.__exec[a], Object.defineProperty(t, a, {
                    value: l,
                    writable: !0,
                    configurable: !0,
                    enumerable: !0
                });
            },
            configurable: !0,
            enumerable: !0
        });
    }
}
function $c(t, e) {
    let r = t.__ref;
    if (Iw(t), typeof t.text == "function") {
        let o = t.text, s = ft(()=>{
            if (!r.contentManaged) try {
                let i = o(t, t.state, t.context);
                t.node && i != null && typeof i != "function" && typeof i != "object" && (typeof i == "string" && i.includes("{{") && (i = or.call(t, i, t.state)), t.tag === "string" ? t.node.nodeValue = i : t.node.textContent = i);
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(s), r.__exec.text = o;
    } else if (typeof t.text == "string" && t.text.includes("{{")) {
        let o = t.text, s = ft(()=>{
            if (r.contentManaged) return;
            let i = or.call(t, o, t.state);
            i != null && (t.text = i), t.node && (t.tag === "string" ? t.node.nodeValue = i ?? "" : t.node.textContent = i ?? "");
        }, {
            depth: r.path.length
        });
        r.__effects.push(s), r.__exec.text = o;
    }
    for(let o in t)if (Object.prototype.hasOwnProperty.call(t, o) && typeof t[o] == "function" && !Rt.has(o) && !Er(o) && !r.__exec[o]) {
        if (lt[o]) {
            let s = t[o], i = o, a = ft(()=>{
                let c = t.context?.designSystem;
                c && pt(c);
                try {
                    let l = s(t, t.state, t.context), f = lt[i](l, t, t.state, t.context);
                    f && t.node ? Ar(t.node, f) : t.node && (i === "show" || i === "hide") && (t.node.style.display = "");
                } finally{
                    c && at();
                }
            }, {
                depth: r.path.length
            });
            r.__effects.push(a), r.__exec[o] = s;
        } else if (xt && xt.has(o)) {
            let s = t[o], i = o, a = ft(()=>{
                let c = t.context?.designSystem;
                c && pt(c);
                try {
                    let l = s(t, t.state, t.context);
                    t.node && (l != null ? Ar(t.node, {
                        [i]: l
                    }) : t.node.style[i] = "");
                } finally{
                    c && at();
                }
            }, {
                depth: r.path.length
            });
            r.__effects.push(a), r.__exec[o] = s;
        }
    }
    if (typeof e.html == "function") {
        let o = e.html, s = ft(()=>{
            let i = t.context?.designSystem;
            i && pt(i);
            try {
                let a = o(t, t.state, t.context);
                t.node && a != null && typeof a != "function" && (t.node.innerHTML = a);
            } finally{
                i && at();
            }
        }, {
            depth: r.path.length
        });
        r.__effects.push(s), r.__exec.html = o;
    }
    if (typeof e.value == "function") {
        let o = e.value, s = ft(()=>{
            try {
                let i = o(t, t.state, t.context);
                if (!t.node || !("value" in t.node)) return;
                let a = i == null ? "" : String(i);
                if (t.node.value === a) return;
                let c = typeof document < "u" && document.activeElement === t.node, l = c && typeof t.node.selectionStart == "number" ? t.node.selectionStart : null, f = c && typeof t.node.selectionEnd == "number" ? t.node.selectionEnd : null;
                if (t.node.value = a, c && l != null && f != null) try {
                    t.node.setSelectionRange(l, f);
                } catch  {}
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(s), r.__exec.value = o;
    }
    if (typeof e.style == "function") {
        let o = e.style, s = ft(()=>{
            let i = o(t, t.state, t.context);
            Ar(t.node, i);
        }, {
            depth: r.path.length
        });
        r.__effects.push(s), r.__exec.style = o;
    } else if (t.style && typeof t.style == "object") for(let o in t.style){
        let s = t.style[o];
        if (typeof s != "function") continue;
        let i = ft(()=>{
            try {
                let a = s(t, t.state, t.context);
                t.node && Ar(t.node, {
                    [o]: a
                });
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(i);
    }
    if (t.attr && typeof t.attr == "object") {
        for(let o in t.attr)if (typeof t.attr[o] == "function") {
            let s = t.attr[o], i = o, a = ft(()=>{
                try {
                    let c = s(t, t.state, t.context);
                    t.node?.setAttribute && (c == null || c === !1 ? t.node.removeAttribute(i) : typeof c != "function" && typeof c != "object" && t.node.setAttribute(i, c === !0 ? "" : c));
                } catch  {}
            }, {
                depth: r.path.length
            });
            r.__effects.push(a);
        }
    }
    if (t.aria && typeof t.aria == "object") for(let o in t.aria){
        let s = t.aria[o];
        if (typeof s != "function") continue;
        let i = "aria-" + o.replace(/[A-Z]/g, (c)=>"-" + c.toLowerCase()), a = ft(()=>{
            try {
                let c = s(t, t.state, t.context);
                if (!t.node?.setAttribute) return;
                c == null || c === !1 ? t.node.removeAttribute(i) : typeof c != "function" && typeof c != "object" && t.node.setAttribute(i, c === !0 ? "" : c);
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(a);
    }
    if (t.data && typeof t.data == "object") for(let o in t.data){
        let s = t.data[o];
        if (typeof s != "function") continue;
        let a = "data-" + o.replace(/[A-Z]/g, (l)=>"-" + l.toLowerCase()), c = ft(()=>{
            try {
                let l = s(t, t.state, t.context);
                if (!t.node?.setAttribute) return;
                l == null || l === !1 ? t.node.removeAttribute(a) : typeof l != "function" && typeof l != "object" && t.node.setAttribute(a, l === !0 ? "" : l);
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(c);
    }
    let n = t.classlist && typeof t.classlist == "object" && !Array.isArray(t.classlist) ? t.classlist : t.class && typeof t.class == "object" && !Array.isArray(t.class) ? t.class : null;
    if (n) for(let o in n){
        let s = n[o];
        if (typeof s != "function") continue;
        let i = ft(()=>{
            try {
                let a = s(t, t.state, t.context);
                if (!t.node?.classList) return;
                typeof a == "string" ? t.node.classList.add(a) : a ? t.node.classList.add(o) : t.node.classList.remove(o);
            } catch  {}
        }, {
            depth: r.path.length
        });
        r.__effects.push(i);
    }
    if (typeof e.if == "function") {
        let o = e.if, s = ft(()=>{
            let i;
            try {
                i = o(t, t.state, t.context);
            } catch (c) {
                if (i = !1, r.__ifError = c, typeof console < "u" && console.warn) {
                    let l = t.key || t.tag || "?";
                    console.warn(`[smbls] \`if:\` reactive effect threw on ${l} \u2014 treating as false:`, c?.message || c);
                }
                return;
            }
            let a = r.__if;
            if (r.__if = !!i, a && !r.__if && t.node) t.node.remove();
            else if (!a && r.__if) {
                if (r.__ifInitialized) {
                    t.node || (t.node = kr(t));
                    let c = t.parent, l = c?.node;
                    if (l && t.node) {
                        let f = null, p = Object.keys(c), u = p.indexOf(t.key);
                        for(let d = u + 1; d < p.length; d++){
                            let h = c[p[d]];
                            if (h?.node?.parentNode === l) {
                                f = h.node;
                                break;
                            }
                        }
                        f ? l.insertBefore(t.node, f) : l.appendChild(t.node);
                    } else Mc(t, t.parent);
                    Fc(t);
                } else {
                    if (r.__ifInitialized = !0, t.tag || (t.tag = wr(t)), ve("Init", t, {}), t.node || (t.node = kr(t)), !t.node) return;
                    ve("AttachNode", t, {}), t.node.setAttribute && t.key && t.node.setAttribute("data-key", t.key), t.id && t.node.setAttribute && (t.node.id = t.id);
                    let c = e.if;
                    delete e.if;
                    try {
                        $c(t, e);
                    } finally{
                        e.if = c;
                    }
                    Fc(t), og(t), ig(t, {}), ag(t, {}), Mc(t, t.parent);
                }
            }
        }, {
            depth: r.path.length
        });
        r.__effects.push(s);
    }
    for(let o in t){
        if (!Object.prototype.hasOwnProperty.call(t, o) || Rt.has(o) || typeof t[o] != "function") continue;
        let s = o.charCodeAt(0);
        if (s >= 65 && s <= 90 || Er(o)) continue;
        let i = t[o];
        r.__exec[o] = i;
        let a = t.tag || "div";
        if (Je(a, o) && !lt[o] && !(xt && xt.has(o))) {
            let c = o, l = ft(()=>{
                try {
                    let f = i(t, t.state, t.context);
                    t.node?.setAttribute && (f == null || f === !1 ? t.node.removeAttribute(c) : typeof f != "function" && typeof f != "object" && (c === "src" && "src" in t.node ? t.node.src = f : t.node.setAttribute(c, f === !0 ? "" : f)));
                } catch  {}
            }, {
                depth: r.path.length
            });
            r.__effects.push(l);
        }
    }
    Dw(t);
}
function Fc(t) {
    let { node: e } = t;
    if (e) {
        if (typeof t.text == "string" && !t.text.includes("{{") ? t.tag === "string" ? e.nodeValue = t.text : e.textContent = t.text : typeof t.text == "number" && (e.textContent = t.text), Lw(t), typeof t.html == "string" && (e.innerHTML = t.html), t.value != null && typeof t.value != "function" && "value" in e) {
            let r = String(t.value);
            e.value !== r && (e.value = r);
        }
        if (t.style && typeof t.style == "object" && Ar(e, t.style), t.attr && typeof t.attr == "object") for(let r in t.attr){
            let n = t.attr[r];
            typeof n == "function" || typeof n == "object" || n == null || n === !1 || e.setAttribute && e.setAttribute(r, n === !0 ? "" : n);
        }
        if (t.data && typeof t.data == "object") for(let r in t.data){
            let n = t.data[r];
            typeof n == "function" || typeof n == "object" || n == null || n === !1 || e.dataset && (e.dataset[r] = n === !0 ? "" : n);
        }
        if (t.classlist || t.class) {
            let r = t.classlist || t.class;
            if (typeof r == "string") r.split(" ").forEach((n)=>n && e.classList.add(n));
            else if (typeof r == "object") for(let n in r){
                let o = typeof r[n] == "function" ? r[n](t, t.state, t.context) : r[n];
                o && e.classList.add(typeof o == "string" ? o : n);
            }
        }
    }
}
function Ar(t, e) {
    if (!t || !e || !t.style) return;
    let r = null;
    for(let n in e){
        let o = e[n];
        if (o != null) {
            if (n.charAt(0) === "&" && typeof o == "object") {
                r || (r = {}), r[n] = o;
                continue;
            }
            try {
                let s = String(o), i = n.replace(/[A-Z]/g, (f)=>"-" + f.toLowerCase()), a = s.trim(), c = /\s*!important\s*$/.test(a), l = a.replace(/\s*!important\s*$/, "");
                t.style.setProperty(i, l, c ? "important" : "");
            } catch  {}
        }
    }
    r && Fw(t, r);
}
var $w = 0;
function Fw(t, e) {
    let r = `_ds${$w++}`;
    t.classList.add(r);
    let n = t.ownerDocument, o = n.querySelector("style[data-smbls-scoped]");
    o || (o = n.createElement("style"), o.setAttribute("data-smbls-scoped", ""), n.head.appendChild(o));
    let s = "";
    for(let i in e){
        let a = "." + r, c = i.replace(/&/g, a).split(",").map((f)=>{
            let p = f.trim();
            return p.includes(a) ? p : a + p;
        }).join(", "), l = e[i];
        if (typeof l == "object") {
            let f = "", p = "";
            for(let u in l){
                let d = l[u];
                if (typeof d == "object") {
                    let h = u.includes("&") ? c.split(", ").map((m)=>u.replace(/&/g, m)).join(", ") : c.split(", ").map((m)=>`${m} ${u}`).join(", "), g = "";
                    for(let m in d)g += `${m.replace(/[A-Z]/g, (y)=>"-" + y.toLowerCase())}: ${d[m]};`;
                    p += `${h} { ${g} }
`;
                } else f += `${u.replace(/[A-Z]/g, (h)=>"-" + h.toLowerCase())}: ${d};`;
            }
            f && (s += `${c} { ${f} }
`), p && (s += p);
        }
    }
    s && (o.textContent += s);
}
function Dw(t) {
    let e = t.__ref;
    e.__conditionalRunners = [];
    for(let r in t){
        if (!Object.prototype.hasOwnProperty.call(t, r)) continue;
        let n = r.charAt(0);
        if (n !== "." && n !== "!") continue;
        let o = r.slice(1);
        if (!o) continue;
        let s = t[r];
        if (!s || typeof s != "object") continue;
        let i = n === "!", a = {
            lastMatch: !1,
            appliedKeys: null
        }, c = ()=>{
            if (!t.node) return;
            let f, p = t[o];
            if (p === void 0) {
                if (t.state && o in t.state) f = t.state[o];
                else {
                    let h = t.context?.cases?.[o];
                    if (h === void 0) return;
                    try {
                        f = typeof h == "function" ? h.call(t, t) : h;
                    } catch (g) {
                        f = !1, e.__conditionalError = g, typeof console < "u" && console.warn && console.warn(`[smbls] conditional \`${r}\` case fn threw on ${t.key || "?"} \u2014 treating as false:`, g?.message || g);
                    }
                }
            } else if (typeof p == "function") try {
                f = p(t, t.state, t.context);
            } catch (h) {
                f = !1, e.__conditionalError = h, typeof console < "u" && console.warn && console.warn(`[smbls] conditional \`${r}\` predicate threw on ${t.key || "?"} \u2014 treating as false:`, h?.message || h);
            }
            else f = p;
            let u = i ? !f : !!f;
            if (u === a.lastMatch) return;
            a.lastMatch = u;
            let d = t.context?.designSystem;
            d && pt(d);
            try {
                if (u) {
                    let h = {};
                    for(let m in s){
                        if (!Object.prototype.hasOwnProperty.call(s, m)) continue;
                        let y = typeof s[m] == "function" ? s[m](t, t.state, t.context) : s[m];
                        if (y != null) {
                            if (lt[m]) {
                                let b = lt[m](y, t, t.state, t.context);
                                if (b) {
                                    let w = Array.isArray(b) ? b : [
                                        b
                                    ];
                                    for (let x of w)x && Object.assign(h, x);
                                }
                            } else xt && xt.has(m) && (h[m] = y);
                        }
                    }
                    let g = Object.keys(h);
                    g.length ? (Ar(t.node, h), a.appliedKeys = g) : a.appliedKeys = null;
                } else if (a.appliedKeys) {
                    for (let h of a.appliedKeys)t.node.style[h] = "";
                    a.appliedKeys = null;
                }
            } finally{
                d && at();
            }
        };
        e.__conditionalRunners.push(c);
        let l = ft(c, {
            depth: e.path.length
        });
        e.__effects.push(l);
    }
}
var Pc = new WeakSet;
function Lw(t) {
    let { node: e } = t;
    if (!e) return;
    if (Pc.has(t)) {
        console.error("[applyCssInProps] re-entry detected for element", t.key, "prop path:", t.__ref?.path);
        return;
    }
    Pc.add(t);
    let r = t.context?.designSystem;
    r && pt(r);
    try {
        let n = {}, o = !1;
        for(let s in t){
            if (!Object.prototype.hasOwnProperty.call(t, s) || typeof t[s] == "function" || Rt.has(s)) continue;
            let i = s.charCodeAt(0);
            if (!(i >= 65 && i <= 90) && !Er(s)) {
                if (lt[s]) {
                    let a = t[s], c = lt[s](a, t, t.state, t.context);
                    if (c) {
                        if (Array.isArray(c)) for (let l of c)l && Object.assign(n, l);
                        else Object.assign(n, c);
                        o = !0;
                    }
                } else if (xt && xt.has(s)) {
                    let a = t[s];
                    a != null && typeof a != "object" && (n[s] = a, o = !0);
                } else if (s.charCodeAt(0) === 45) {
                    let a = t[s];
                    a != null && typeof a != "object" && (n[s] = a, o = !0);
                } else if (s.charAt(0) === "&") {
                    let a = t[s];
                    a && typeof a == "object" && (n[s] = a, o = !0);
                } else if (s.charAt(0) === "@" || s.charAt(0) === ":") {
                    let a = t[s];
                    if (a && typeof a == "object") {
                        let c = {};
                        for(let l in a){
                            let f = a[l];
                            if (typeof f == "function" && (f = f(t, t.state, t.context)), !(f == null || typeof f == "function")) {
                                if (lt[l]) {
                                    let p = lt[l](f, t, t.state, t.context);
                                    if (p) {
                                        if (Array.isArray(p)) for (let u of p)u && Object.assign(c, u);
                                        else Object.assign(c, p);
                                    }
                                } else c[l] = f;
                            }
                        }
                        if (Object.keys(c).length) {
                            if (s.length > 1 && s.charAt(0) === "@" && !s.startsWith("@media") && !s.startsWith("@keyframes") && !s.startsWith("@supports") && (s === "@dark" || s === "@light" || !t.context?.designSystem?.media?.[s.slice(1)])) {
                                let f = {};
                                for(let u in c){
                                    let d = c[u];
                                    f[u] = typeof d == "string" && !d.includes("!important") ? d + " !important" : d;
                                }
                                let p = s.slice(1);
                                n[`[data-theme="${p}"] &`] = f;
                            } else {
                                let f = s;
                                if (s.charAt(0) === "@" && !s.startsWith("@media") && !s.startsWith("@keyframes")) {
                                    let u = s.slice(1), d = t.context?.designSystem?.media?.[u] || t.context?.designSystem?.media?.[u];
                                    d && (f = `@media ${d}`);
                                }
                                let p = {};
                                for(let u in c){
                                    let d = c[u];
                                    if (d && typeof d == "object" && !Array.isArray(d)) {
                                        let h = {};
                                        for(let m in d)if (lt[m]) {
                                            let y = lt[m](d[m], t, t.state, t.context);
                                            if (y) {
                                                if (Array.isArray(y)) for (let b of y)b && Object.assign(h, b);
                                                else Object.assign(h, y);
                                            }
                                        } else h[m] = d[m];
                                        let g = u.startsWith(":") ? "" : " ";
                                        if (f.includes(",")) {
                                            let m = f.split(",").map((y)=>`${y.trim()}${g}${u}`).join(", ");
                                            n[m] = h;
                                        } else n[`${f}${g}${u}`] = h;
                                    } else p[u] = d;
                                }
                                Object.keys(p).length && (n[f] = p);
                            }
                            o = !0;
                        }
                        o = !0;
                    }
                }
            }
        }
        if (o) {
            n.display && String(n.display).includes("!important") && (e.style.setProperty("display", String(n.display).replace(/\s*!important\s*$/, ""), "important"), delete n.display);
            let s = Xe(n, null, t.context?.cssPrefix);
            if (s && e.classList) {
                let a = s.split(" ").filter(Boolean), c = !1;
                for (let l of a)e.classList.add(l), c || (l.charCodeAt(0) === 95 && l.charCodeAt(1) === 99 || l.charCodeAt(0) === 95 && l.indexOf("_c", 1) !== -1) && (c = !0);
                c && typeof e.offsetWidth == "number" && e.offsetWidth;
            }
            let i = t.display != null && typeof t.display != "function" ? t.display : t.hide === !0 || t.show === !1 ? "none" : null;
            if (i != null) {
                let a = n.display;
                if (a && a !== i) {
                    if (i === "none") {
                        let c = [];
                        for (let l of e.classList)l.startsWith("_d-") && l !== "_d-none" && c.push(l);
                        for (let l of c)e.classList.remove(l);
                        e.classList.add("_d-none");
                    } else e.style.display = t.display;
                }
            }
        }
    } finally{
        r && at(), Pc.delete(t);
    }
}
function og(t) {
    let { node: e } = t;
    if (!e || !e.setAttribute) return;
    if (t.aria && typeof t.aria == "object") for(let o in t.aria){
        let s = t.aria[o];
        if (typeof s == "function" || typeof s == "object" || s == null || s === !1) continue;
        let i = "aria-" + o.replace(/[A-Z]/g, (a)=>"-" + a.toLowerCase());
        e.setAttribute(i, s === !0 ? "" : s);
    }
    let r = rg(t);
    for(let o in r){
        let s = r[o];
        s != null && s !== !1 && typeof s != "function" && typeof s != "object" && e.setAttribute(o, s === !0 ? "" : s);
    }
    let n = t.tag || "div";
    for(let o in t){
        if (!Object.prototype.hasOwnProperty.call(t, o) || typeof t[o] == "function" || Rt.has(o) || o === "on" || r[o] !== void 0) continue;
        let s = o.charCodeAt(0);
        if (!(s >= 65 && s <= 90) && !Er(o) && !(lt[o] || xt && xt.has(o)) && Je(n, o)) {
            let i = t[o];
            if (i == null || i === !1 || (typeof i == "string" && i.includes("{{") && (i = or(i, t, t.state, t.context), t[o] = i), i == null || i === !1 || typeof i == "function" || typeof i == "object")) continue;
            e.setAttribute(o, i === !0 ? "" : i);
        }
    }
}
var sg = new Set([
    "onSwipe",
    "onSwipeLeft",
    "onSwipeRight",
    "onSwipeUp",
    "onSwipeDown"
]);
function ig(t, e) {
    for(let r in t){
        if (!Object.prototype.hasOwnProperty.call(t, r) || !Er(r) || sg.has(r)) continue;
        let n = t[r];
        if (typeof n == "string" && /^[A-Za-z_$][\w$]*$/.test(n)) {
            let s = n;
            n = function(a) {
                return t.call(s, a);
            };
        }
        if (typeof n != "function") continue;
        let o = Ow(r);
        vr.has(o) || As(Rw(o), t, n);
    }
    Mw(t);
}
function Mw(t) {
    let e = t.node;
    if (!e || !e.addEventListener) return;
    let r = {}, n = !1;
    for (let u of sg){
        let d = t[u];
        typeof d == "function" && (r[u] = d, n = !0);
    }
    if (!n) return;
    let o = typeof t.swipeThreshold == "number" ? t.swipeThreshold : 40, s = typeof t.swipeMaxDuration == "number" ? t.swipeMaxDuration : 600, i = 0, a = 0, c = 0, l = !1, f = (u)=>{
        let d = u.touches && u.touches[0] || u.changedTouches && u.changedTouches[0];
        d && (i = d.clientX, a = d.clientY, c = Date.now(), l = !0);
    }, p = (u)=>{
        if (!l) return;
        l = !1;
        let d = u.changedTouches && u.changedTouches[0] || u.touches && u.touches[0];
        if (!d) return;
        let h = d.clientX - i, g = d.clientY - a, m = Date.now() - c;
        if (m > s) return;
        let y = Math.abs(h), b = Math.abs(g);
        if (Math.max(y, b) < o) return;
        let w;
        if (y > b * 1.2) w = h < 0 ? "left" : "right";
        else if (b > y * 1.2) w = g < 0 ? "up" : "down";
        else return;
        let x = "onSwipe" + w.charAt(0).toUpperCase() + w.slice(1), v = r[x], A = r.onSwipe;
        v && v.call(t, u, t, t.state, t.context), A && A.call(t, {
            direction: w,
            dx: h,
            dy: g,
            dt: m,
            event: u
        }, t, t.state, t.context);
    };
    e.addEventListener("touchstart", f, {
        passive: !0
    }), e.addEventListener("touchend", p, {
        passive: !0
    }), t.__ref.__eventCleanup || (t.__ref.__eventCleanup = []), t.__ref.__eventCleanup.push(()=>{
        try {
            e.removeEventListener("touchstart", f);
        } catch  {}
        try {
            e.removeEventListener("touchend", p);
        } catch  {}
    });
}
function Dc(t, e) {
    let r = {
        ...t
    };
    for(let n in e){
        let o = r[n], s = e[n];
        o && s && typeof o == "object" && typeof s == "object" && !Array.isArray(o) && !Array.isArray(s) && typeof o != "function" && typeof s != "function" ? r[n] = Dc(o, s) : r[n] = s;
    }
    return r;
}
function Lc(t, e, r) {
    if (!e || !t.node) return;
    let n = t.childExtends;
    if (Array.isArray(e)) {
        let s = (t.context?.document || globalThis.document)?.createDocumentFragment();
        if (!s) return;
        let i = t.childProps, a = t.childrenAs;
        for(let c = 0; c < e.length; c++){
            let l = e[c], f = l;
            (typeof l == "string" || typeof l == "number") && (l = {
                text: l
            });
            let p = i;
            if (typeof i == "function") try {
                p = i(t, l);
            } catch  {
                p = null;
            }
            if (a === "state") {
                let h = f;
                (typeof f == "string" || typeof f == "number") && (h = {
                    value: f,
                    text: f
                }), l = p ? {
                    ...p,
                    state: h
                } : {
                    state: h
                };
            } else p && (l = Dc(p, l));
            if (n && !l.ignoreChildExtends) {
                if (l.extends) {
                    let h = Array.isArray(l.extends) ? l.extends : [
                        l.extends
                    ], g = Array.isArray(n) ? n : [
                        n
                    ];
                    l = {
                        ...l,
                        extends: [
                            ...g,
                            ...h
                        ]
                    };
                } else l = {
                    extends: n,
                    ...l
                };
            }
            let u = l?.key || `${c}`, d = zt(l, t, u, r);
            d?.node && s.appendChild(d.node);
        }
        t.node.appendChild(s);
        return;
    }
    if (typeof e == "string") {
        let o = ng(e, t);
        if (Array.isArray(o)) {
            Lc(t, o, r);
            return;
        }
    }
    if (typeof e == "object") for(let o in e){
        if (Rt.has(o)) continue;
        let s = e[o];
        if (!(s == null || s === !1)) {
            if ((typeof s == "string" || typeof s == "number") && (s = {
                text: s
            }), t.childProps && (s = Dc(t.childProps, s)), n && !s.ignoreChildExtends) {
                if (s.extends) {
                    let i = Array.isArray(s.extends) ? s.extends : [
                        s.extends
                    ], a = Array.isArray(n) ? n : [
                        n
                    ];
                    s = {
                        ...s,
                        extends: [
                            ...a,
                            ...i
                        ]
                    };
                } else s = {
                    extends: n,
                    ...s
                };
            }
            zt(s, t, o, r);
        }
    }
}
function ag(t, e) {
    let { children: r, content: n } = t, o = t.childExtends;
    if (typeof r == "function") {
        let i = r;
        r = i(t, t.state, t.context), t.children = r;
        let a = t.__ref, c = !1, l = ft(()=>{
            let f = i(t, t.state, t.context);
            if (!c) {
                c = !0;
                return;
            }
            if (f === t.children) return;
            if (t.children = f, Array.isArray(f) && t.childrenAs === "state") {
                let d = t.childProps, h = [], g = new Map;
                for(let v = 0; v < f.length; v++){
                    let A = f[v], R = d;
                    if (typeof d == "function") try {
                        R = d(t, A);
                    } catch  {
                        R = null;
                    }
                    let W = R && R.key || A && A.key || `${v}`;
                    h.push(W), g.set(W, {
                        rawChild: A,
                        childProps: R
                    });
                }
                let m = new Set(h), y = a.__children.slice();
                for (let v of y)if (!m.has(v)) {
                    let A = t[v];
                    A?.remove && A.remove(), delete t[v];
                }
                let b = t.childExtends, x = (t.context?.document || globalThis.document)?.createDocumentFragment();
                for (let v of h){
                    let A = g.get(v), R = A.rawChild, W = t[v];
                    if (W && W.state) {
                        if (R && typeof R == "object") {
                            let M = W.state;
                            if (typeof M.replace == "function") M.replace(R);
                            else if (typeof M.update == "function") {
                                for(let I in M)if (!(I === "__element" || I === "root" || I === "parent" || I === "update") && !Object.prototype.hasOwnProperty.call(R, I)) try {
                                    M[I] = void 0;
                                } catch  {}
                                M.update(R);
                            } else for(let I in R)M[I] = R[I];
                        }
                        continue;
                    }
                    let O = R;
                    (typeof R == "string" || typeof R == "number") && (O = {
                        value: R,
                        text: R
                    });
                    let L = A.childProps, V = L ? {
                        ...L,
                        state: O
                    } : {
                        state: O
                    };
                    if (b && !V.ignoreChildExtends) {
                        if (V.extends) {
                            let M = Array.isArray(V.extends) ? V.extends : [
                                V.extends
                            ], I = Array.isArray(b) ? b : [
                                b
                            ];
                            V = {
                                ...V,
                                extends: [
                                    ...I,
                                    ...M
                                ]
                            };
                        } else V = {
                            extends: b,
                            ...V
                        };
                    }
                    let J = zt(V, t, v, e);
                    J?.node && x && x.appendChild(J.node);
                }
                x && x.childNodes.length && t.node && t.node.appendChild(x), a.__children = h;
                return;
            }
            for (let d of [
                ...a.__children
            ]){
                let h = t[d];
                h?.remove && h.remove(), delete t[d];
            }
            a.__children = [], Lc(t, f, e);
        }, {
            depth: a.path.length
        });
        a.__effects.push(l);
    }
    if (Lc(t, r || n, e), r || n) return;
    let s = t.context?.components || {};
    {
        let i = Object.keys(t);
        for(let a = 0; a < i.length; a++){
            let c = i[a];
            if (!c.endsWith("Extends") || typeof t[c] != "string") continue;
            let l = c.slice(0, -7);
            if (!l || l.charCodeAt(0) < 65 || l.charCodeAt(0) > 90) continue;
            let f = {
                extends: t[c]
            };
            delete t[c];
            for(let p = a + 1; p < i.length; p++){
                let u = i[p], d = u.charCodeAt(0);
                if (d >= 65 && d <= 90 || Rt.has(u) || typeof t[u] == "function" && (u.startsWith("on") || u.startsWith("."))) break;
                let h = t[u];
                h !== void 0 && (f[u] = h, delete t[u]);
            }
            t[l] && typeof t[l] == "object" ? t[l] = {
                ...f,
                ...t[l]
            } : t[l] = f;
        }
    }
    for(let i in t){
        if (!Object.prototype.hasOwnProperty.call(t, i) || Rt.has(i) || typeof t[i] != "object" || t[i] === null) continue;
        let a = i.charCodeAt(0);
        if (a < 65 || a > 90) continue;
        let c = t[i];
        if (!c.__ref) {
            if (!c.extends && !c.extend) {
                let l = s[i] || s[`smbls.${i}`];
                l && (c = {
                    extends: l,
                    ...c
                });
            }
            if (t.childProps && (c = {
                ...t.childProps,
                ...c
            }), o && !c.ignoreChildExtends) {
                if (c.extends) {
                    let l = Array.isArray(c.extends) ? c.extends : [
                        c.extends
                    ], f = Array.isArray(o) ? o : [
                        o
                    ];
                    c = {
                        ...c,
                        extends: [
                            ...f,
                            ...l
                        ]
                    };
                } else c = {
                    extends: o,
                    ...c
                };
            }
            zt(c, t, i, e);
        }
    }
}
function Mc(t, e, r) {
    let { node: n } = t;
    if (!n) return;
    let o = e?.node || (e?.nodeType ? e : null);
    if (o) {
        if (r?.position === "before" && r.node) o.insertBefore(n, r.node);
        else if (r?.position === "after" && r.node) {
            let s = r.node.nextSibling;
            s ? o.insertBefore(n, s) : o.appendChild(n);
        } else o.appendChild(n);
    }
}
function ve(t, e, r) {
    let n = t.charAt(0).toLowerCase() + t.slice(1);
    e.context?.plugins?.length && Kt(n, e, r);
    let o = "on" + t, s = e[o];
    if (typeof s == "function") {
        let i = e.context?.designSystem;
        i && pt(i);
        try {
            if (s(e, e.state, e.context, r) === !1) return !1;
        } catch (a) {
            if (e.context?.plugins?.length && Kt("error", e, {
                hook: o,
                error: a
            }) || console.error(`[DOMQL] Lifecycle "${o}" error:`, a), e.context?.strictMode) throw a;
        } finally{
            i && at();
        }
    }
    return !0;
}
var cg = {
    blue: "#213eb0",
    green: "#389d34",
    red: "#e15c55",
    yellow: "#EDCB38",
    orange: "#e97c16",
    transparent: "rgba(0, 0, 0, 0)",
    black: "black",
    gray: "#4e4e50",
    white: "white",
    title: [
        "--gray 1 -168",
        "--gray 1 +168"
    ],
    caption: [
        "--gray 1 -68",
        "--gray 1 +68"
    ],
    paragraph: [
        "--gray 1 -42",
        "--gray 1 +42"
    ],
    disabled: [
        "--gray 1 -26",
        "--gray 1 +26"
    ],
    line: [
        "--gray 1 -16",
        "--gray 1 +16"
    ]
}, lg = {
    "gradient-blue-light": `linear-gradient(to right,
    rgba(4, 116, 242, 1),
    rgba(0, 48, 103, 1)
  )`,
    "gradient-blue-dark": `linear-gradient(to right,
    #0474F2,
    #003067
  )`,
    "gradient-dark": `linear-gradient(0deg,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.07) 100%
  )`,
    "gradient-dark-active": `linear-gradient(0deg,
    rgba(0,0,0,0.09) 0%,
    rgba(0,0,0,0.1) 100%
  )`,
    "gradient-light": `linear-gradient(
    0deg,
    rgba(255,255,255,0.05) 0%,
    rgba(255,255,255,0.06) 100%
  )`,
    "gradient-light-active": `linear-gradient(
    0deg,
    rgba(255,255,255,0.09) 0%,
    rgba(255,255,255,0.10) 100%
  )`,
    "gradient-colorful": `linear-gradient(60deg,
    #00A2E7 0%,
    #185DF3 31%,
    #1E54F0 36%,
    #8B4CCA 69%,
    #C66894 100%
  )`
};
var Nw = {
    primary: {
        "@dark": {
            color: "white",
            background: "blue",
            ".color-only": {
                color: "blue"
            },
            ".inactive": {
                background: "gray+16"
            },
            ".gradient": {
                color: "white",
                background: "gradient-blue"
            }
        },
        "@light": {
            color: "white",
            background: "gradient-blue",
            ".color-only": {
                color: "blue"
            },
            ".gradient": {
                color: "white",
                background: "gradient-colorful"
            }
        }
    },
    secondary: {
        "@dark": {
            color: "white",
            background: "green",
            ".color-only": {
                color: "green"
            }
        },
        "@light": {
            color: "white",
            background: "green",
            ".color-only": {
                color: "green"
            }
        },
        ".child": "--primary"
    },
    tertiary: {
        "@dark": {
            color: "white",
            background: "gray.92+8"
        },
        "@light": {
            background: "gray.1"
        }
    },
    quaternary: {
        "@light": {
            color: "white",
            background: "gradient-light"
        },
        "@dark": {
            color: "white",
            background: "gradient-dark-active"
        }
    },
    quinary: {
        "@dark": {
            color: "gray=90",
            background: "gradient-light",
            ":hover": {
                color: "gray=95",
                background: "gradient-light-active"
            },
            ":focus": {
                color: "gray=120",
                background: "gradient-light-active"
            },
            ":active": {
                color: "gray=120",
                background: "gradient-light-active"
            },
            ".active": {
                color: "gray=120",
                background: "gradient-light-active"
            }
        },
        "@light": {
            color: "gray3",
            background: "gradient-dark",
            ":hover": {
                color: "gray1",
                background: "gradient-dark-active"
            },
            ":active": {
                color: "gray1",
                background: "gradient-dark-active"
            },
            ".active": {
                color: "gray1",
                background: "gradient-dark-active"
            }
        }
    }
}, jw = {
    alert: {
        "@dark": {
            color: "white",
            background: "red"
        }
    },
    warning: {
        "@dark": {
            color: "black",
            background: "yellow"
        }
    },
    success: {
        "@dark": {
            color: "black",
            background: "green"
        }
    }
}, Bw = {
    field: {
        "@light": {
            color: "black",
            background: "gray.975+144",
            borderColor: "gray.975+144",
            "::placeholder": {
                color: "gray-68"
            }
        },
        "@dark": {
            color: "white",
            background: "gray.975-52",
            borderColor: "gray.975-52",
            "::placeholder": {
                color: "gray+68"
            }
        }
    },
    label: {
        "@dark": {
            color: "white",
            background: "gray.92+8"
        },
        "@light": {
            background: "gray.1"
        },
        ".light": {
            color: "white",
            background: "gray3"
        },
        ".dark": {
            color: "white",
            background: "black.35"
        }
    },
    card: {
        "@light": {
            background: "gray.975+150"
        },
        "@dark": {
            color: "white",
            background: "gray.975-56"
        },
        ".child": {
            color: "white",
            background: "gray3"
        },
        ".secondary": {
            color: "white",
            background: "gradient-blue-dark",
            ".child": {
                color: "white",
                background: "black.35"
            }
        }
    },
    dialog: {
        "@dark": {
            color: "white",
            background: "gray.92",
            ".helper": {
                color: "white",
                background: "black"
            }
        },
        "@light": {
            color: "currentColor",
            background: "gray.1"
        }
    }
}, fg = {
    document: {
        "@light": {
            color: "black",
            background: "white"
        },
        "@dark": {
            color: "white",
            background: "black"
        }
    },
    ...Nw,
    ...jw,
    ...Bw,
    none: {
        color: "none",
        background: "none"
    },
    transparent: {
        color: "currentColor",
        background: "transparent"
    }
};
var ug = {
    base: 16,
    ratio: 1.25,
    subSequence: !0,
    useCapsize: !0,
    templates: {}
};
var pg = {
    ratio: 1.618,
    subSequence: !0
};
var dg = {
    SourceSans: [
        {
            url: ""
        }
    ]
}, hg = {
    system: {
        value: [
            '"Helvetica Neue"',
            "Helvetica",
            "Arial"
        ],
        type: "sans-serif",
        metrics: {
            capHeight: 714,
            ascent: 952,
            descent: -213,
            lineGap: 28,
            unitsPerEm: 1e3
        }
    }
};
var gg = {
    symbols: '<svg height="24" width="24"><path d="M13.843 2.7C19.063 2.7 23 6.366 23 11.228c0 3.754-2.862 6.584-6.658 6.584-3.287 0-5.007-2.318-5.007-4.609 0-2.395 1.923-4.344 4.287-4.344.566 0 1.023.12 1.309.223a.212.212 0 01.137.229l-.016.058-.514 1.18a.223.223 0 01-.245.13 2.965 2.965 0 00-.506-.046c-1.245 0-2.258 1.027-2.258 2.288 0 1.33 1.165 2.373 2.651 2.373 2.195 0 3.913-1.777 3.913-4.046 0-3.024-2.294-5.135-5.58-5.135-4.076 0-7.393 3.36-7.393 7.491a7.519 7.519 0 002.871 5.924l-4.96 3.18A12.042 12.042 0 012 14.7c0-6.617 5.313-12 11.843-12z" fill-rule="evenodd"/></svg>',
    logo: '<svg height="24" width="24"><path d="M13.843 2.7C19.063 2.7 23 6.366 23 11.228c0 3.754-2.862 6.584-6.658 6.584-3.287 0-5.007-2.318-5.007-4.609 0-2.395 1.923-4.344 4.287-4.344.566 0 1.023.12 1.309.223a.212.212 0 01.137.229l-.016.058-.514 1.18a.223.223 0 01-.245.13 2.965 2.965 0 00-.506-.046c-1.245 0-2.258 1.027-2.258 2.288 0 1.33 1.165 2.373 2.651 2.373 2.195 0 3.913-1.777 3.913-4.046 0-3.024-2.294-5.135-5.58-5.135-4.076 0-7.393 3.36-7.393 7.491a7.519 7.519 0 002.871 5.924l-4.96 3.18A12.042 12.042 0 012 14.7c0-6.617 5.313-12 11.843-12z" fill-rule="evenodd"/></svg>',
    arrowDownCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"/><path d="M8 12l4 4 4-4M12 8v8"/></svg>',
    arrowDownLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-left"><path d="M17 7L7 17M17 17H7V7"/></svg>',
    arrowDownRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-right"><path d="M7 7l10 10M17 7v10H7"/></svg>',
    arrowDown: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>',
    arrowLeftCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"/><path d="M12 8l-4 4 4 4M16 12H8"/></svg>',
    arrowLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    arrowRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    arrowRightCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"/><path d="M12 16l4-4-4-4M8 12h8"/></svg>',
    arrowUpCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 16V8"/></svg>',
    arrowUpLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-left"><path d="M17 17L7 7M7 17V7h10"/></svg>',
    arrowUpRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-right"><path d="M7 17L17 7M7 7h10v10"/></svg>',
    arrowUp: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
    checkCircle: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>',
    check: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><path d="M20 6L9 17l-5-5"/></svg>',
    chevronDown: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><path d="M6 9l6 6 6-6"/></svg>',
    chevronLeft: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><path d="M15 18l-6-6 6-6"/></svg>',
    chevronRight: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><path d="M9 18l6-6-6-6"/></svg>',
    chevronUp: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><path d="M18 15l-6-6-6 6"/></svg>',
    copy: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',
    eyeOff: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye-off"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"/></svg>',
    eye: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    info: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',
    lock: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
    minus: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><path d="M5 12h14"/></svg>',
    sun: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
    moon: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>',
    moreHorizontal: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',
    moreVertical: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>',
    send: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>',
    smile: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>',
    search: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>',
    upload: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>',
    video: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-video"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>',
    x: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><path d="M18 6L6 18M6 6l12 12"/></svg>',
    star: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    plus: '<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><path d="M12 5v14M5 12h14"/></svg>'
};
var mg = {
    tv: "(min-width: 2780px)",
    screenL: "(max-width: 1920px)",
    "screenL<": "(min-width: 1920px)",
    screenM: "(max-width: 1680px)",
    "screenM<": "(min-width: 1680px)",
    screenS: "(max-width: 1440px)",
    "screenS<": "(min-width: 1440px)",
    tabletL: "(max-width: 1366px)",
    "tabletL<": "(min-width: 1366px)",
    tabletM: "(max-width: 1280px)",
    "tabletM<": "(min-width: 1280px)",
    tabletS: "(max-width: 1024px)",
    "tabletS<": "(min-width: 1024px)",
    mobileL: "(max-width: 768px)",
    "mobileL<": "(min-width: 768px)",
    mobileM: "(max-width: 560px)",
    "mobileM<": "(min-width: 560px)",
    mobileS: "(max-width: 480px)",
    "mobileS<": "(min-width: 480px)",
    mobileXS: "(max-width: 375px)",
    "mobileXS<": "(min-width: 375px)",
    light: "(prefers-color-scheme: light)",
    dark: "(prefers-color-scheme: dark)",
    print: "print"
};
var yg = {
    base: 150,
    ratio: 1.333,
    unit: "ms",
    subSequence: !0
};
var Is = {
    version: "0.0.1",
    color: cg,
    gradient: lg,
    theme: fg,
    typography: ug,
    spacing: pg,
    font: dg,
    fontFamily: hg,
    timing: yg,
    icons: gg,
    media: mg,
    reset: {
        html: {},
        body: {}
    },
    animation: {
        fadeIn: {
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        }
    },
    devices: {},
    class: {},
    svg: {},
    grid: {},
    shape: {}
};
var Tn = {};
F(Tn, {
    A: ()=>Pm,
    AssetPicture: ()=>Dg,
    Audio: ()=>Ng,
    Avatar: ()=>qm,
    B: ()=>nm,
    Block: ()=>bg,
    Box: ()=>Ls,
    Br: ()=>am,
    Button: ()=>Fm,
    ButtonSet: ()=>Nm,
    COMPONENTS: ()=>Or,
    Caption: ()=>Kg,
    Checkbox: ()=>ym,
    CheckboxHgroup: ()=>bm,
    Circle: ()=>Ig,
    CircleButton: ()=>Lm,
    Clickable: ()=>Og,
    Data: ()=>sm,
    Dialog: ()=>Bm,
    DialogFooter: ()=>zm,
    DialogHeader: ()=>Vm,
    Dropdown: ()=>Km,
    DropdownList: ()=>Ym,
    DropdownParent: ()=>Xm,
    DropdownParentFocus: ()=>Zm,
    DropdownSiblingFocus: ()=>Jm,
    FileIcon: ()=>Em,
    Flex: ()=>Sg,
    Focusable: ()=>Rg,
    FocusableComponent: ()=>Pg,
    Footnote: ()=>rm,
    Form: ()=>Ag,
    Grid: ()=>wg,
    Gutter: ()=>vg,
    H1: ()=>Vg,
    H2: ()=>zg,
    H3: ()=>Ug,
    H4: ()=>Wg,
    H5: ()=>Hg,
    H6: ()=>qg,
    Headline: ()=>tm,
    Hgroup: ()=>pm,
    HgroupButton: ()=>hm,
    HgroupRows: ()=>dm,
    Hoverable: ()=>Tg,
    Hr: ()=>im,
    I: ()=>om,
    Icon: ()=>Cm,
    IconButton: ()=>jm,
    IconText: ()=>Am,
    Iframe: ()=>Eg,
    Img: ()=>Cg,
    Inline: ()=>xg,
    InlineFlex: ()=>_g,
    InlineGrid: ()=>kg,
    Input: ()=>gm,
    Italic: ()=>Jg,
    KangorooButton: ()=>Mm,
    Li: ()=>cm,
    Link: ()=>dl,
    Notification: ()=>Qm,
    NumberInput: ()=>mm,
    Ol: ()=>fm,
    P: ()=>Gg,
    Picture: ()=>Fg,
    Radio: ()=>xm,
    RadioHgroup: ()=>Sm,
    Range: ()=>Gm,
    RouteLink: ()=>Im,
    RouterLink: ()=>hl,
    SHAPES: ()=>Fs,
    Select: ()=>$m,
    Shape: ()=>Uc,
    Span: ()=>Bg,
    SquareButton: ()=>Dm,
    Strong: ()=>Yg,
    Subhead: ()=>em,
    Svg: ()=>Lg,
    Text: ()=>jg,
    Textarea: ()=>km,
    TextareaWithButton: ()=>vm,
    Theme: ()=>$g,
    Title: ()=>Qg,
    Toggle: ()=>_m,
    ToggleHgroup: ()=>wm,
    Tooltip: ()=>Um,
    TooltipHidden: ()=>Wm,
    TooltipParent: ()=>Hm,
    U: ()=>Xg,
    Ul: ()=>lm,
    Underline: ()=>Zg,
    Video: ()=>Mg,
    depth: ()=>Ds,
    getSystemGlobalTheme: ()=>En
});
var Nc = {};
F(Nc, {
    Block: ()=>bg,
    Flex: ()=>Sg,
    Grid: ()=>wg,
    Gutter: ()=>vg,
    Inline: ()=>xg,
    InlineFlex: ()=>_g,
    InlineGrid: ()=>kg
});
var bg = {
    display: "block"
}, xg = {
    display: "inline"
}, Sg = {
    display: "flex"
}, _g = {
    display: "inline-flex"
}, wg = {
    display: "grid"
}, kg = {
    display: "inline-grid"
}, vg = {
    boxSize: "C1"
};
var jc = {};
F(jc, {
    Img: ()=>Cg
});
P();
var Cg = {
    tag: "img",
    attr: {
        title: (t)=>t.title || t.alt,
        src: (t)=>{
            let e = Tt(t);
            return e && e.src || t.src;
        },
        srcset: (t)=>{
            let e = Tt(t);
            return (e ? is(e) : "") || t.srcset;
        }
    }
};
var Bc = {};
F(Bc, {
    Form: ()=>Ag
});
var Ag = {
    tag: "form"
};
var Vc = {};
F(Vc, {
    Iframe: ()=>Eg
});
var Eg = {
    tag: "iframe",
    position: "relative",
    minWidth: "G",
    minHeight: "G"
};
var zc = {};
F(zc, {
    Clickable: ()=>Og,
    Focusable: ()=>Rg,
    FocusableComponent: ()=>Pg,
    Hoverable: ()=>Tg
});
var Vw = {
    appearance: "none",
    cursor: "pointer",
    fontFamily: "inherit"
}, Tg = {
    transition: "C defaultBezier",
    transitionProperty: "opacity, transform",
    opacity: .85,
    ":hover": {
        opacity: .9,
        transform: "scale(1.015)"
    },
    ":active": {
        opacity: 1,
        transform: "scale(1.015)"
    },
    ".active": {
        opacity: 1,
        transform: "scale(1.015)",
        ":hover": {
            opacity: 1
        }
    }
}, Og = {
    extends: "Hoverable",
    ":active": {
        opacity: 1,
        transform: "scale(1.015)"
    },
    ".active": {
        opacity: 1
    }
}, Rg = {
    border: "none",
    outline: "solid 0 blue.3",
    ":focus-visible": {
        opacity: 1,
        outline: "solid X blue.3"
    },
    attr: {
        tabIndex: (t)=>t.tabIndex
    }
}, Pg = {
    extends: "Focusable",
    tag: "button",
    fontSize: "A",
    type: "button",
    border: "none",
    textDecoration: "none",
    lineHeight: "1",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    style: Vw
};
var qc = {};
F(qc, {
    Picture: ()=>Fg
});
var Hc = {};
F(Hc, {
    Theme: ()=>$g,
    getSystemGlobalTheme: ()=>En
});
var Wc = {};
F(Wc, {
    Circle: ()=>Ig,
    SHAPES: ()=>Fs,
    Shape: ()=>Uc,
    default: ()=>zw,
    depth: ()=>Ds
});
P();
var Mt = E(), Ds = {
    4: {
        boxShadow: `rgba(0,0,0,.10) 0 2${Mt.unit.default} 4${Mt.unit.default}`
    },
    6: {
        boxShadow: `rgba(0,0,0,.10) 0 3${Mt.unit.default} 6${Mt.unit.default}`
    },
    10: {
        boxShadow: `rgba(0,0,0,.10) 0 4${Mt.unit.default} 10${Mt.unit.default}`
    },
    16: {
        boxShadow: `rgba(0,0,0,.10) 0 8${Mt.unit.default} 16${Mt.unit.default}`
    },
    26: {
        boxShadow: `rgba(0,0,0,.10) 0 14${Mt.unit.default} 26${Mt.unit.default}`
    },
    42: {
        boxShadow: `rgba(0,0,0,.10) 0 20${Mt.unit.default} 42${Mt.unit.default}`
    }
}, Tr = (t)=>tt(t.shapeDirectionColor) || tt(t.borderColor) || tt(t.backgroundColor) || tt(t.background), $s = (t)=>{
    let e = Rs.transition(t.transition, t);
    return e && e.transition;
}, Fs = {
    rectangle: {},
    circle: {
        borderRadius: "100%"
    },
    bubble: {},
    tv: {
        borderRadius: "1.15em/2.5em"
    },
    tooltip: (t)=>({
            position: t.position || "relative",
            "&:before": {
                content: '""',
                display: "block",
                width: "0px",
                height: "0px",
                border: ".35em solid",
                borderColor: Tr(t),
                transition: $s(t),
                transitionProperty: "border-color",
                position: "absolute",
                borderRadius: ".15em"
            }
        }),
    tooltipDirection: {
        top: {
            "&:before": {
                top: "0",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)"
            }
        },
        right: {
            "&:before": {
                top: "50%",
                right: "0",
                transform: "translate(50%, -50%) rotate(45deg)"
            }
        },
        bottom: {
            "&:before": {
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 50%) rotate(45deg)"
            }
        },
        left: {
            "&:before": {
                top: "50%",
                left: "0",
                transform: "translate(-50%, -50%) rotate(45deg)"
            }
        }
    },
    tag: (t)=>({
            position: "relative",
            "&:before": {
                content: '""',
                display: "block",
                background: Tr(t),
                transition: $s(t),
                transitionProperty: "background",
                borderRadius: ".25em",
                position: "absolute",
                zIndex: "-1",
                aspectRatio: "1/1",
                top: "50%",
                transformOrigin: "50% 50%",
                height: "73%"
            }
        }),
    tagDirection: {
        top: {
            "&:before": {
                bottom: "100%",
                left: "50%",
                transform: "translate(-50%, 50%) rotate(45deg)"
            }
        },
        right: {
            "&:before": {
                top: "50%",
                left: "100%",
                transform: "translate(-50%, -50%) rotate(45deg)"
            }
        },
        bottom: {
            "&:before": {
                top: "100%",
                left: "50%",
                transform: "translate(-50%, -50%) rotate(45deg)"
            }
        },
        left: {
            "&:before": {
                top: "50%",
                right: "100%",
                transform: "translate(50%, -50%) rotate(45deg)"
            }
        }
    },
    hexagon: (t)=>({
            position: "relative",
            "&:before, &:after": {
                content: '""',
                display: "block",
                position: "absolute",
                zIndex: "-1",
                borderRadius: ".25em",
                aspectRatio: "1/1",
                top: "50%",
                transformOrigin: "50% 50%",
                height: "73%",
                background: Tr(t),
                transition: $s(t),
                transitionProperty: "background"
            },
            "&:before": {
                left: "0",
                transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
            },
            "&:after": {
                left: "100%",
                transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
            }
        }),
    chevron: (t)=>({
            position: "relative",
            "&:before, &:after": {
                content: '""',
                display: "block",
                position: "absolute",
                zIndex: "-1",
                aspectRatio: "1/1",
                top: "50%",
                transformOrigin: "50% 50%",
                transition: $s(t),
                transitionProperty: "background"
            },
            "&:before": {
                background: `linear-gradient(225deg, ${Tr(t)} 25%, transparent 25%), linear-gradient(315deg, ${Tr(t)} 25%, transparent 25%)`
            },
            "&:after": {
                background: Tr(t),
                borderRadius: ".25em"
            }
        }),
    chevronDirection: {
        left: {
            "&:before": {
                height: "100%",
                left: "100%",
                transform: "translate3d(-1%, -50%, 1px) scale(-1, 1)"
            },
            "&:after": {
                height: "73%",
                left: "0",
                transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
            }
        },
        right: {
            "&:before": {
                height: "100%",
                left: "0",
                transform: "translate3d(-99%, -50%, 1px)"
            },
            "&:after": {
                height: "73%",
                left: "100%",
                transform: "translate3d(-50%, -50%, 1px) rotate(45deg)"
            }
        }
    }
}, Uc = {
    deps: {
        exec: X,
        getSpacingBasedOnRatio: fe,
        getMediaColor: bt
    },
    classlist: {
        shape: (t)=>t.deps.exec(Fs[t.shape], t),
        shapeDirection: (t)=>{
            if (!t.shape || !t.shapeDirection) return;
            let e = Fs[t.shape + "Direction"];
            return t.shape && e ? e[t.shapeDirection || "left"] : null;
        },
        shapeDirectionColor: (t)=>{
            let e = {
                borderColor: t.deps.getMediaColor(t.background || t.backgroundColor)
            };
            return t.shapeDirection ? e : null;
        }
    }
}, Ig = {
    round: "100%"
}, zw = Uc;
P();
var En = ({ context: t, state: e })=>{
    let r = e && e.root, n = r && r.globalTheme || t.designSystem && t.designSystem.globalTheme;
    return n === "auto" ? null : n;
}, $g = {
    deps: {
        depth: Ds
    },
    classlist: {
        depth: (t)=>!ht(t.depth) && t.deps.depth[t.depth]
    }
};
var Fg = {
    deps: {
        getSystemGlobalTheme: En
    },
    tag: "picture",
    childExtends: {
        deps: {
            getSystemGlobalTheme: En
        },
        tag: "source",
        attr: {
            media: (t)=>{
                let { key: e, context: r, deps: n } = t, { media: o } = r.designSystem, s = n.getSystemGlobalTheme(t), i = (t.media || e).slice(1);
                return i === s ? "(min-width: 0px)" : i === "dark" || i === "light" ? "(max-width: 0px)" : o[i];
            }
        }
    },
    Img: {
        width: "inherit",
        ignoreChildExtends: !0,
        height: "inherit",
        src: (t, e)=>t.parent?.src || e.src
    }
};
var Gc = {};
F(Gc, {
    AssetPicture: ()=>Dg
});
P();
var Dg = {
    tag: "picture",
    children: (t)=>{
        let e = Tt(t);
        if (e) return as(e, t.alt);
    }
};
var Kc = {};
F(Kc, {
    Svg: ()=>Lg
});
var Lg = {
    tag: "svg",
    attr: {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink"
    },
    html: (t)=>{
        let { context: e } = t;
        if (t.semanticIcons) return;
        if (t.html && typeof t.html != "function") return t.call("exec", t.html, t);
        let { designSystem: r, utils: n } = e, o = r && r.svg, s = t.spriteId || r && r.useSvgSprite, i = t.call("exec", t.src, t);
        if (!s && i) return i;
        let a = (u)=>`<use xlink:href="#${u}" />`, c = t.spriteId;
        if (c) return a(c);
        if (o && o[i]) return a(i);
        let l = Symbol.for(i), f = o[l];
        if (f && o[f]) return a(f);
        if (!i) return a("");
        if (typeof i == "string" && !i.includes("<")) return typeof console < "u" && console.warn && console.warn(`[Svg] Unknown sprite symbol "${i}" \u2014 not registered in design-system sprite. Set the icon name to one that exists in designSystem.icons / context.svg, or register the SVG body via utils.init({ svg: { '${i}': '<svg>...</svg>' } }).`), a("");
        let p = 0;
        for(let u = 0; u < i.length; u++)p = (p << 5) - p + i.charCodeAt(u) | 0;
        return f = o[l] = `svg-${(p >>> 0).toString(36)}`, n.init({
            svg: {
                [f]: i
            }
        }, {
            document: e.document,
            emotion: e.emotion
        }), a(f);
    }
};
var Yc = {};
F(Yc, {
    Video: ()=>Mg
});
P();
var Mg = {
    tag: "video",
    controls: !0,
    attr: {
        src: (t)=>{
            let e = Tt(t);
            return e && e.src || t.src;
        }
    },
    children: (t)=>{
        let e = Tt(t);
        if (!(!e || !Array.isArray(e.variants) || !e.variants.length)) return e.variants.map((r)=>({
                tag: "source",
                attr: {
                    src: r.src,
                    type: r.format
                }
            }));
    },
    childExtends: {
        tag: "source"
    }
};
var Xc = {};
F(Xc, {
    Audio: ()=>Ng
});
P();
var Ng = {
    tag: "audio",
    controls: !0,
    attr: {
        src: (t)=>{
            let e = Tt(t);
            return e && e.src || t.src;
        }
    },
    children: (t)=>{
        let e = Tt(t);
        if (!(!e || !Array.isArray(e.variants) || !e.variants.length)) return e.variants.map((r)=>({
                tag: "source",
                attr: {
                    src: r.src,
                    type: r.format
                }
            }));
    },
    childExtends: {
        tag: "source"
    }
};
var Zc = {};
F(Zc, {
    B: ()=>nm,
    Caption: ()=>Kg,
    Data: ()=>sm,
    Footnote: ()=>rm,
    H1: ()=>Vg,
    H2: ()=>zg,
    H3: ()=>Ug,
    H4: ()=>Wg,
    H5: ()=>Hg,
    H6: ()=>qg,
    Headline: ()=>tm,
    I: ()=>om,
    Italic: ()=>Jg,
    P: ()=>Gg,
    Span: ()=>Bg,
    Strong: ()=>Yg,
    Subhead: ()=>em,
    Text: ()=>jg,
    Title: ()=>Qg,
    U: ()=>Xg,
    Underline: ()=>Zg
});
var jg = {}, Bg = {
    tag: "span"
}, Vg = {
    tag: "h1"
}, zg = {
    tag: "h2"
}, Ug = {
    tag: "h3"
}, Wg = {
    tag: "h4"
}, Hg = {
    tag: "h5"
}, qg = {
    tag: "h6"
}, Gg = {
    tag: "p"
}, Kg = {
    tag: "caption"
}, Yg = {
    tag: "strong",
    fontWeight: "700"
}, Xg = {
    tag: "u"
}, Zg = {
    tag: "u"
}, Jg = {
    tag: "i"
}, Qg = {}, tm = {
    tag: "h6",
    fontSize: "B",
    fontWeight: 500
}, em = {
    tag: "span",
    fontSize: "Z1"
}, rm = {
    tag: "span",
    fontSize: "Z"
}, nm = {
    tag: "b"
}, om = {
    tag: "i"
}, sm = {
    tag: "data"
};
var Jc = {};
F(Jc, {
    Box: ()=>Ls,
    Br: ()=>am,
    Hr: ()=>im,
    Li: ()=>cm,
    Ol: ()=>fm,
    Ul: ()=>lm
});
var Uw = (t)=>{
    if (!t.context) return;
    let { props: e, __ref: r } = t, n = Lt(e, t, {
        unpack: !1
    });
    r.__class = n;
}, Ls = {
    extends: [
        "Shape",
        "Theme"
    ],
    boxSizing: "border-box",
    onBeforeClassAssign: Uw
}, im = {
    tag: "hr",
    margin: "C1 0"
}, am = {
    tag: "br"
}, cm = {
    tag: "li"
}, lm = {
    tag: "ul",
    childExtends: {
        extends: "Li"
    }
}, fm = {
    tag: "ol",
    childExtends: {
        extends: "Li"
    }
};
var Qc = {};
F(Qc, {
    Hgroup: ()=>pm,
    HgroupButton: ()=>hm,
    HgroupRows: ()=>dm
});
var um = (t)=>{
    if (t.text != null || t.html != null) return !0;
    for(let e in t){
        let r = e.charCodeAt(0);
        if (r >= 65 && r <= 90) return !0;
    }
    return !1;
}, pm = {
    display: "flex",
    tag: "hgroup",
    flow: "y",
    gap: "Y2",
    H: {
        if: um,
        color: "title",
        tag: "h3",
        lineHeight: "1em",
        margin: "0"
    },
    P: {
        if: um,
        margin: "0",
        color: "paragraph"
    }
}, dm = {
    extends: "Hgroup",
    H: {
        display: "flex",
        color: "title",
        align: "center space-between"
    },
    P: {
        color: "paragraph",
        align: "center space-between"
    }
}, hm = {
    extends: "HgroupRows",
    H: {
        justifyContent: "space-between",
        Span: {},
        Button: {
            background: "transparent",
            color: "currentColor",
            padding: "0",
            Icon: {
                name: "x",
                fontSize: "C"
            }
        }
    },
    P: {}
};
var tl = {};
F(tl, {
    Input: ()=>gm
});
var gm = {
    extends: [
        "Focusable"
    ],
    tag: "input",
    border: "none",
    type: "input",
    theme: "field",
    fontSize: "A",
    round: "C",
    lineHeight: "1",
    padding: "Z2 B",
    attr: {
        pattern: (t)=>t.pattern,
        minLength: (t)=>t.minlength,
        maxLength: (t)=>t.maxlength,
        name: (t)=>t.name,
        autocomplete: (t)=>t.autocomplete,
        placeholder: (t)=>t.placeholder,
        value: (t)=>{
            if (!t.value) return;
            let e = t.call("exec", t.value, t);
            return t.call("isString", e) && e.includes("{{") ? t.call("replaceLiteralsWithObjectFields", e) : e;
        },
        checked: (t)=>t.call("exec", t.checked, t),
        disabled: (t)=>t.disabled || null,
        readonly: (t)=>t.readonly,
        required: (t)=>t.required,
        type: (t)=>t.type
    }
};
var el = {};
F(el, {
    NumberInput: ()=>mm
});
var mm = {
    extends: [
        "Flex",
        "Input"
    ],
    type: "number",
    boxSize: "C+X",
    align: "center center",
    textAlign: "center",
    round: "Y1",
    theme: "transparent",
    border: "solid gray3",
    borderWidth: "1px",
    placeholder: "0",
    fontWeight: "400",
    "::-webkit-inner-spin-button": {
        appearance: "none"
    },
    attr: {
        step: (t)=>t.step,
        min: (t)=>t.min,
        max: (t)=>t.max
    }
};
var rl = {};
F(rl, {
    Checkbox: ()=>ym,
    CheckboxHgroup: ()=>bm
});
var ym = {
    extends: "Focusable",
    tag: "label",
    boxSize: "fit-content fit-content",
    cursor: "pointer",
    round: "Y",
    Input: {
        type: "checkbox",
        display: "none",
        ":checked + div": {
            theme: "primary"
        },
        ":checked + div > svg": {
            transform: "none",
            opacity: "1"
        },
        attr: {
            checked: (t)=>t.call("exec", t.parent.checked)
        }
    },
    Flex: {
        align: "center center",
        fontSize: "B1",
        padding: "V",
        theme: "field",
        round: "X2",
        transition: "background A defaultBezier",
        Icon: {
            icon: "check",
            opacity: "0",
            transform: "scale(0.9) rotate(-15deg)",
            transition: "opacity B defaultBezier"
        }
    }
}, bm = {
    display: "flex",
    tag: "label",
    boxSize: "fit-content",
    align: "flex-start flex-start",
    gap: "A",
    Checkbox: {
        tag: "div"
    },
    HgroupRows: {
        gap: "Z1",
        margin: "Y - - -"
    }
};
var nl = {};
F(nl, {
    Radio: ()=>xm,
    RadioHgroup: ()=>Sm
});
var xm = {
    extends: "Checkbox",
    Input: {
        type: "radio",
        ":checked + div:after": {
            opacity: "1"
        }
    },
    Flex: {
        round: "100%",
        padding: "Y",
        ":after": {
            content: '""',
            display: "block",
            boxSize: "X+W1",
            round: "100%",
            background: "white",
            opacity: "0",
            transition: "opacity .15s ease-in-out"
        },
        Icon: null
    }
}, Sm = {
    extends: "CheckboxHgroup",
    Checkbox: null,
    Radio: {}
};
var ol = {};
F(ol, {
    Toggle: ()=>_m,
    ToggleHgroup: ()=>wm
});
var _m = {
    extends: "Checkbox",
    Input: {
        ":checked + div": {
            background: "green2+8",
            justifyContent: "flex-end"
        }
    },
    Flex: {
        boxSize: "A1 B1",
        padding: "- W_default",
        round: "D",
        align: "center flex-start",
        theme: "field",
        border: "none",
        transition: "opacity .15s ease",
        ":after": {
            content: '""',
            boxSize: "A A",
            round: "100%",
            background: "white",
            boxShadow: "gray.2 1px 1px Z"
        },
        Icon: null
    }
}, wm = {
    extends: "CheckboxHgroup",
    Checkbox: null,
    Toggle: {}
};
var sl = {};
F(sl, {
    Textarea: ()=>km,
    TextareaWithButton: ()=>vm
});
var km = {
    tag: "textarea",
    extends: [
        "Input",
        "Flex"
    ],
    fontfamily: "Avenir",
    placeholder: "Leave us a message...",
    padding: "A",
    theme: "field",
    border: "none",
    minHeight: "E_default",
    width: "100%",
    height: "E1_default",
    fontFamily: "inherit",
    round: "Z2",
    lineHeight: 1.4,
    ".outlined": {
        borderWidth: "1px",
        borderStyle: "solid"
    }
}, vm = {
    display: "flex",
    gap: "Y2",
    Textarea: {
        height: "C2+W",
        minWidth: "H",
        padding: "A",
        fontSize: "Z1",
        round: "Z2",
        minHeight: "fit-content"
    },
    SquareButton: {
        background: "blue",
        Icon: {
            name: "send"
        }
    }
};
var il = {};
F(il, {
    FileIcon: ()=>Em,
    Icon: ()=>Cm,
    IconText: ()=>Am
});
var Cm = {
    extends: "Svg",
    width: "A",
    height: "A",
    display: "inline-block",
    style: {
        fill: "currentColor",
        "*": {
            fill: "currentColor"
        }
    },
    onInit: (t, e, r)=>{
        let { parent: n } = t, { icons: o, useIconSprite: s, verbose: i } = r && r.designSystem, { toCamelCase: a } = r && r.utils, c = (x)=>{
            let v = x[".isActive"];
            if (v) return x.call("exec", v.name || v.icon);
        }, l = (x, v, A)=>{
            let { semanticIcons: R } = A && A.designSystem, { toCamelCase: W } = A && A.utils, O = f(x, v), V = W(O).split(/([a-z])([A-Z])/g), J = V[1] ? V[0] : O.split(".")[0].split(" ")[0], M = R && R[J];
            if (M) {
                let I = O.includes(".") ? "sfsymbols." + O.split(".").slice(1).join(".") : "sfsymbols";
                return O = M[I] || M[O.split(".")[0].split(" ")[0]], {
                    tag: "span",
                    semanticIcons: !0,
                    width: "A",
                    height: "A",
                    lineHeight: "1em",
                    ":after": {
                        fontSize: "Z",
                        fontWeight: "300",
                        content: `"${O}"`,
                        textAlign: "center",
                        display: "inline-block",
                        style: {
                            color: "currentColor",
                            fontFamily: "'SF Pro Icons', 'SF Pro', 'SF Symbols', 'Segoe UI'"
                        }
                    }
                };
            }
        }, f = (x, v)=>{
            let { key: A } = x, R = x.call("exec", x.name || x.icon || A, x);
            return x.call("isString", R) && R.includes("{{") && (R = x.call("replaceLiteralsWithObjectFields", R)), x.call("isString", R) ? R : A;
        }, p = f(t, e);
        if (p.includes(" ")) {
            let x = p.split(" ");
            p = x[0] + x.slice(1).map((v)=>v.charAt(0).toUpperCase() + v.slice(1)).join("");
        }
        let u = a(p), d = u.split(/([a-z])([A-Z])/g), h = l(t, e, r);
        if (h) {
            Object.assign(t, h);
            return;
        }
        let g;
        t.isActive && (g = c(t));
        let m = n[".isActive"];
        n && n.isActive && m && m.icon && (g = t.call("exec", m.icon || m.Icon.name || m.Icon.icon, t)), t.call("isString", g) && g.includes("{{") && (g = t.call("replaceLiteralsWithObjectFields", g));
        let y;
        o[g] && (y = g), o[u] ? y = u : o[d[0] + d[1]] ? y = d[0] + d[1] : o[d[0]] ? y = d[0] : i && t.warn("Can't find icon:", p, y);
        let b = o[y], w = n && n.src || t.src;
        Object.assign(t, {
            spriteId: s && y,
            src: b || w || o.noIcon
        });
    },
    attr: {
        viewBox: "0 0 24 24"
    }
}, Am = {
    display: "flex",
    align: "center center",
    lineHeight: 1,
    ".reversed": {
        flow: "row-reverse"
    },
    ".vertical": {
        flow: "column"
    },
    Icon: {
        if: (t)=>{
            let { parent: e } = t;
            return t.call("exec", e.icon || t.name || t.sfSymbols || e.sfSymbols, t);
        },
        icon: (t)=>t.call("exec", t.parent.icon, t.parent)
    },
    text: (t)=>t.text
}, Em = {
    display: "flex",
    theme: "tertiary",
    boxSize: "C1",
    align: "center center",
    round: "Z2",
    Icon: {
        fontSize: "B",
        margin: "auto",
        icon: "file"
    }
};
var gl = {};
F(gl, {
    A: ()=>Pm,
    Link: ()=>dl,
    RouteLink: ()=>Im,
    RouterLink: ()=>hl
});
var pl = {};
F(pl, {
    default: ()=>Kw,
    getActiveRoute: ()=>ul,
    lastLevel: ()=>Ns,
    lastPathname: ()=>Ms,
    matchRoute: ()=>cl,
    parseQuery: ()=>ll,
    parseRoutePattern: ()=>al,
    router: ()=>ee,
    runGuards: ()=>fl
});
P();
var Om = /^:(.+)/, Rm = /^\*$/, Tm = new Map, al = (t)=>{
    let e = Tm.get(t);
    if (e) return e;
    let r = t.replace(/^\//, "").split("/"), n = [], o = !1;
    for(let i = 0; i < r.length; i++){
        let a = r[i].match(Om);
        a ? n.push({
            index: i,
            name: a[1]
        }) : Rm.test(r[i]) && (o = !0);
    }
    let s = {
        segments: r,
        params: n,
        hasWildcard: o,
        pattern: t
    };
    return Tm.set(t, s), s;
}, cl = (t, e, r = 0)=>{
    let o = t.replace(/^\//, "").split("/").filter(Boolean).slice(r), s = "/" + (o[0] || "");
    if (!e) return {
        key: null,
        content: null,
        params: {},
        routePath: s
    };
    let i = null, a = -1, c = {};
    for(let l in e){
        if (l === "/*") continue;
        let f = al(l), p = Ww(o, f);
        p > a && (a = p, i = l, c = Hw(o, f));
    }
    return !i && e["/*"] && (i = "/*"), {
        key: i,
        content: i ? e[i] : null,
        params: c,
        routePath: s
    };
}, Ww = (t, e)=>{
    let { segments: r, hasWildcard: n } = e;
    if (!n && r.length !== t.length && r.length !== 1 && r.length > t.length) return -1;
    let o = 0, s = Math.min(r.length, t.length);
    for(let i = 0; i < s; i++)if (r[i] === t[i]) o += 3;
    else if (Om.test(r[i])) o += 1;
    else if (Rm.test(r[i])) o += .5;
    else return -1;
    return o;
}, Hw = (t, e)=>{
    let r = {};
    for (let { index: n, name: o } of e.params)t[n] && (r[o] = decodeURIComponent(t[n]));
    return r;
}, ll = (t)=>{
    if (!t || t === "?") return {};
    let e = {};
    return new URLSearchParams(t).forEach((n, o)=>{
        e[o] !== void 0 ? (Array.isArray(e[o]) || (e[o] = [
            e[o]
        ]), e[o].push(n)) : e[o] = n;
    }), e;
}, fl = async (t, e)=>{
    if (!t || !t.length) return !0;
    for (let r of t){
        let n = await r(e);
        if (n === !1) return !1;
        if (typeof n == "string") return n;
    }
    return !0;
}, ul = (t = 0, e)=>{
    e || (e = typeof k < "u" ? k.location.pathname : "/");
    let n = e.split("/")[t + 1];
    if (n) return `/${n}`;
}, Ms, Ns = 0, qw = (t)=>!t || t === "srcdoc" || t === "about:srcdoc" ? "/" : t, Gw = {
    level: Ns,
    pushState: !0,
    initialRender: !1,
    scrollToTop: !0,
    scrollToNode: !1,
    scrollNode: Y && Y.documentElement,
    scrollBody: !1,
    useFragment: !1,
    updateState: !0,
    scrollToOffset: 0,
    contentElementKey: "content",
    scrollToOptions: {
        behavior: "smooth"
    },
    useParamsMatching: !0
}, ee = async (t, e, r = {}, n = {})=>{
    let o = e || void 0, s = o?.context?.window || k, i = o?.context?.document || Y, a = {
        ...Gw,
        ...o.context.routerOptions,
        ...n
    };
    Ns = a.lastLevel;
    let c = o.__ref;
    (a.contentElementKey !== "content" && a.contentElementKey !== c.contentElementKey || !c.contentElementKey) && (c.contentElementKey = a.contentElementKey || "content");
    let l = c.contentElementKey || a.contentElementKey || "content", f = s.location.origin !== "null" ? s.location.origin : "http://localhost";
    t = qw(t);
    let p = typeof s.URL == "function" ? s.URL : typeof globalThis < "u" && globalThis.URL || URL, u = new p(f + t), { pathname: d, search: h, hash: g } = u, m = ll(h), y = o.node, b = g && g !== s.location.hash.slice(1), w = d !== Ms;
    Ms = d;
    let x, v, A, R;
    if (a.useParamsMatching) {
        let O = cl(d, o.routes, a.level);
        x = O.key, v = O.routePath, A = O.content, R = O.params;
    } else {
        x = ul(a.level, d), v = x;
        let O = o.routes;
        A = O ? O[x || "/"] || O["/*"] : null, R = {};
    }
    let W = a.scrollToNode ? y : a.scrollNode;
    if (o.state?.root?.debugging) {
        o.state.root.debugging = !1;
        return;
    }
    if (!A) {
        a.onNotFound ? a.onNotFound({
            pathname: d,
            route: x,
            element: o
        }) : a.silent || console.warn("[smbls/router] no content matched for path", d, "\u2014 available routes:", Object.keys(o.routes || {}));
        return;
    }
    if (a.guards && a.guards.length) {
        let O = {
            pathname: d,
            route: x,
            params: R,
            query: m,
            hash: g,
            element: o,
            state: r
        }, L = await fl(a.guards, O);
        if (L === !1) return;
        if (typeof L == "string") return ee(L, e, r, {
            ...n,
            guards: []
        });
    }
    if (a.pushState) try {
        s.history.pushState(r, null, d + (h || "") + (g || ""));
    } catch  {}
    if (w || !b) {
        let O = {
            route: x,
            routePath: v,
            hash: g,
            debugging: !1
        };
        Object.keys(R).length && (O.params = R), Object.keys(m).length && (O.query = m), a.updateState && o.state.update(O, {
            preventContentUpdate: !0
        }), l && a.removeOldElement && o[l].remove();
        let L = o.__ref?.origin?.content, V = {};
        if (L) for(let M in L){
            let I = L[M];
            M === "__ref" || M === "props" || M === "node" || M === "parent" || M === "key" || (typeof I == "string" || typeof I == "number" || typeof I == "boolean" || typeof I == "object" && I !== null && !I.node && !I.__ref) && (V[M] = I);
        }
        let J = {
            ...V,
            ...typeof A == "object" ? A : {
                extends: A
            }
        };
        a.useFragment && (J.tag = "fragment");
        try {
            if (typeof o?.set != "function") return;
            o.set(J, {
                contentElementKey: l
            });
        } catch (M) {
            console.error("[smbls/router] failed to render route content", d, M);
        }
    }
    if (a.scrollToTop && W?.scrollTo && W.scrollTo({
        ...a.scrollToOptions || {},
        top: 0,
        left: 0
    }), a.scrollToNode && A[l]?.node?.scrollTo && A[l].node.scrollTo({
        ...a.scrollToOptions || {},
        top: 0,
        left: 0
    }), g) {
        let O = i.getElementById(g);
        if (O && W?.scrollTo) {
            let L = O.getBoundingClientRect().top + y.scrollTop - (a.scrollToOffset || 0);
            W.scrollTo({
                ...a.scrollToOptions || {},
                top: L,
                left: 0
            });
        }
    }
    Ve("routeChanged", o, a);
}, Kw = ee;
var Yw = (t, e, r)=>{
    let { context: n } = e, { href: o, scrollToTop: s, stopPropagation: i } = e, a = e.call("exec", o, e);
    if (e.call("isString", a) && a.includes("{{") && (a = e.call("replaceLiteralsWithObjectFields", a)), i && t.stopPropagation(), !a) return;
    let { utils: c, snippets: l, functions: f, routerOptions: p } = n, u = e.__ref.root, d = a.startsWith("http://") || a.startsWith("https://") || a.startsWith("mailto:") || a.startsWith("tel:") || a.startsWith("sketch:") || a.startsWith("whatsapp:") || a.startsWith("sms:") || a.startsWith("skype:") || a.startsWith("viber:") || a.startsWith("callto:") || a.startsWith("facetime:") || a.startsWith("facetime-audio:") || a.startsWith("geo:") || a.startsWith("maps:");
    if (a && !d) {
        t.preventDefault();
        try {
            let h = u;
            if (p && p.customRouterElement) {
                let g = Array.isArray(p.customRouterElement) ? p.customRouterElement : p.customRouterElement.split("."), m = u;
                for (let y of g){
                    if (!m || !m[y]) {
                        m = null;
                        break;
                    }
                    m = m[y];
                }
                m && (h = m, u.routes && (h.routes = u.routes));
            }
            (f.router || l.router || c.router || ee)(a, h, {}, {
                scrollToOptions: {
                    behaviour: "instant"
                },
                scrollToTop: e.call("isDefined", s) ? s : !0,
                ...p,
                ...e.routerOptions
            });
        } catch (h) {
            console.warn(h);
        }
    }
}, dl = {
    extends: "Focusable",
    tag: "a",
    aria: {},
    fontWeight: "bold",
    textDecoration: "none",
    color: "currentColor",
    draggable: !1,
    attr: {
        href: (t)=>Ze(t, t.href) || Ze(t, t.call("exec", t, t).href),
        "aria-label": (t)=>t.aria ? t.aria.label : t.text
    },
    onClick: Yw
}, Pm = {
    extends: "Link"
}, hl = {
    onClick: (t, e, r)=>{
        let { context: n } = e, { href: o, scrollToTop: s, stopPropagation: i } = e, a = e.call("exec", o, e);
        if (e.call("isString", a) && a.includes("{{") && (a = e.call("replaceLiteralsWithObjectFields", a)), i && t.stopPropagation(), !a) return;
        let { utils: c, snippets: l, functions: f, routerOptions: p } = n, u = e.__ref.root, d = a.startsWith("http://") || a.startsWith("https://") || a.startsWith("mailto:") || a.startsWith("tel:") || a.startsWith("sketch:") || a.startsWith("whatsapp:") || a.startsWith("sms:") || a.startsWith("skype:") || a.startsWith("viber:") || a.startsWith("callto:") || a.startsWith("facetime:") || a.startsWith("facetime-audio:") || a.startsWith("geo:") || a.startsWith("maps:");
        if (a && !d) {
            t.preventDefault();
            try {
                let h = u;
                if (p && p.customRouterElement) {
                    let g = Array.isArray(p.customRouterElement) ? p.customRouterElement : p.customRouterElement.split("."), m = u;
                    for (let y of g){
                        if (!m || !m[y]) {
                            m = null;
                            break;
                        }
                        m = m[y];
                    }
                    m && (h = m, u.routes && (h.routes = u.routes));
                }
                (f.router || l.router || c.router || ee)(a, h, {}, {
                    scrollToOptions: {
                        behaviour: "instant"
                    },
                    scrollToTop: e.call("isDefined", s) ? s : !0,
                    ...p,
                    ...e.routerOptions
                });
            } catch (h) {
                console.warn(h);
            }
        }
    }
}, Im = {
    extends: [
        dl,
        hl
    ]
};
var ml = {};
F(ml, {
    Select: ()=>$m
});
var $m = {
    extends: "Focusable",
    tag: "select",
    fontSize: "A",
    border: "none",
    boxSizing: "border-box",
    theme: "field",
    cursor: "pointer",
    childProps: {
        tag: "option",
        attr: {
            value: (t)=>t.value,
            selected: (t)=>t.selected,
            disabled: (t)=>t.disabled
        }
    },
    attr: {
        name: (t)=>t.name,
        disabled: (t)=>t.disabled,
        value: (t)=>{
            if (!t.value) return;
            let e = t.call("exec", t.value, t);
            return t.call("isString", e) && e.includes("{{") ? t.call("replaceLiteralsWithObjectFields", e) : e;
        }
    }
};
var yl = {};
F(yl, {
    Button: ()=>Fm,
    ButtonSet: ()=>Nm,
    CircleButton: ()=>Lm,
    IconButton: ()=>jm,
    KangorooButton: ()=>Mm,
    SquareButton: ()=>Dm
});
var Fm = {
    extends: [
        "IconText",
        "FocusableComponent"
    ],
    tag: "button",
    fontSize: "A",
    type: "button",
    borderStyle: "none",
    display: "inline-flex",
    align: "center center",
    textDecoration: "none",
    lineHeight: "1",
    whiteSpace: "nowrap",
    padding: "Z B2",
    fontWeight: "500",
    fontFamily: "inherit",
    round: "C2",
    disabled: (t)=>t.call("exec", t.disabled)
}, Dm = {
    extends: "Button",
    fontSize: "A",
    width: "A",
    padding: "Z",
    aspectRatio: "1 / 1",
    icon: "smile",
    boxSize: "fit-content fit-content",
    justifyContent: "center",
    round: "Z2",
    boxSizing: "content-box"
}, Lm = {
    extends: "SquareButton",
    round: "C"
}, Mm = {
    extends: "Button",
    childExtends: "IconText"
}, Nm = {
    tag: "nav",
    display: "flex",
    childExtends: "SquareButton"
}, jm = {
    extends: [
        "SquareButton",
        "ClickableItem"
    ],
    round: "Z"
};
var bl = {};
F(bl, {
    Dialog: ()=>Bm,
    DialogFooter: ()=>zm,
    DialogHeader: ()=>Vm
});
var Bm = {
    display: "flex",
    tag: "dialog",
    flow: "column",
    border: "0",
    theme: "dialog",
    round: "Z2"
}, Vm = {
    extends: "Hgroup",
    minWidth: "100%",
    gap: "A",
    Title: {
        align: "center space-between",
        Text: {
            text: "Title"
        },
        SquareButton: {
            icon: "x",
            theme: "transparent"
        }
    },
    Paragraph: {
        color: "caption"
    }
}, zm = {
    display: "flex",
    align: "center flex-end",
    gap: "X2",
    margin: "auto - -",
    padding: "Y2 X2",
    childExtends: {
        extends: "Button",
        textTransform: "uppercase",
        background: "transparent",
        "@dark": {
            theme: "primary @dark .color-only"
        },
        "@light": {
            theme: "primary @light .color-only"
        },
        "&": {
            padding: "Z A"
        },
        ":hover": {
            theme: "tertiary"
        },
        ":active": {
            background: "white.1"
        }
    },
    Cancel: {
        text: "cancel"
    },
    Ok: {
        text: "ok"
    }
};
var xl = {};
F(xl, {
    Tooltip: ()=>Um,
    TooltipHidden: ()=>Wm,
    TooltipParent: ()=>Hm
});
P();
var Um = {
    display: "flex",
    theme: "dialog",
    background: "black",
    flow: "column",
    shape: "tooltip",
    shapeDirection: "left",
    padding: "Z1 A",
    round: "Y2",
    width: "fit-content",
    minWidth: "D2",
    maxWidth: "F2",
    gap: "X",
    textAlign: "center",
    attr: {
        tooltip: !0
    },
    Title: {
        if: (t)=>vt(t.parent.title) || t.parent.title,
        width: "fit-content",
        fontWeight: 500,
        color: "gray12",
        text: (t)=>t.parent.title
    },
    P: {
        if: (t, e)=>t.call("isDefined", t.call("exec", t.parent.description, t)) || t.text,
        width: "fit-content",
        fontSize: "Z2",
        margin: "0",
        color: "gray6",
        fontWeight: "400",
        text: (t, e)=>t.call("exec", t.parent.description, t)
    }
}, Wm = {
    extends: "Tooltip",
    position: "absolute",
    pointerEvents: "none",
    opacity: "0",
    visibility: "hidden",
    transition: "C defaultBezier opacity, C defaultBezier visibility, B defaultBezier transform",
    onInit: (t)=>{
        let e = !t.shapeDirection || t.shapeDirection === "top" ? {
            top: "112%",
            left: "50%",
            transform: "translate3d(-50%,10%,0)",
            ".isActive": {
                transform: "translate3d(-50%,0,0)",
                opacity: 1,
                visibility: "visible"
            }
        } : t.shapeDirection === "right" ? {
            transform: "translate3d(10%,-50%,0)",
            left: "112%",
            top: "50%",
            ".isActive": {
                transform: "translate3d(0%,-50%,0)",
                opacity: 1,
                visibility: "visible"
            }
        } : t.shapeDirection === "bottom" ? {
            transform: "translate3d(-50%,-10%,0)",
            bottom: "112%",
            left: "50%",
            ".isActive": {
                transform: "translate3d(-50%,0,0)",
                opacity: 1,
                visibility: "visible"
            }
        } : t.shapeDirection === "left" ? {
            transform: "translate3d(10%,-50%,0)",
            right: "112%",
            top: "50%",
            ".isActive": {
                transform: "translate3d(0%,-50%,0)",
                opacity: 1,
                visibility: "visible"
            }
        } : {};
        Object.assign(t, e);
    }
}, Hm = {
    position: "relative",
    zIndex: 999,
    onInit: (t)=>{
        let { Tooltip: e, TooltipHidden: r } = t, n = e || r;
        if (!n) return;
        let o = n && n[".isActive"];
        Object.assign(t, {
            ":hover, &:focus-visible": {
                zIndex: 1e3,
                "& [tooltip]": o || {
                    transform: "translate3d(-50%, 0, 0)",
                    opacity: 1,
                    visibility: "visible"
                }
            }
        });
    }
};
var Sl = {};
F(Sl, {
    Avatar: ()=>qm
});
var qm = {
    extends: "Img",
    display: "block",
    avatarType: "adventurer-neutral",
    borderRadius: "100%",
    boxSize: "C+X C+X",
    src: (t)=>`https://api.dicebear.com/7.x/${t.avatarType || "initials"}/svg?seed=${t.key || "no-avatar"}`
};
var _l = {};
F(_l, {
    Range: ()=>Gm
});
var Gm = {
    tag: "input",
    appearance: "none",
    width: "100%",
    height: "2px",
    outline: "none",
    flex: 1,
    onInput: (t, e, r)=>{
        e.call("isFunction", e.onInput) ? e.onInput(t, e, r) : r.update({
            value: parseFloat(e.node.value)
        });
    },
    onChange: (t, e, r)=>{
        e.call("isFunction", e.onChange) ? e.onChange(t, e, r) : r.update({
            value: parseFloat(e.node.value)
        });
    },
    "::-webkit-slider-thumb": {
        boxSizing: "content-box",
        width: "8px",
        height: "8px",
        borderWidth: "2px",
        borderStyle: "solid",
        borderRadius: "100%",
        opacity: ".8",
        appearance: "none"
    },
    "::-webkit-slider-runnable-track": {},
    "@dark": {
        background: "white.2",
        "::-webkit-slider-thumb": {
            background: "#232526",
            borderColor: cs("#454646", .75)
        },
        ":hover": {
            "::-webkit-slider-thumb": {
                borderColor: cs("#fff", .35)
            }
        },
        ":focus": {
            "::-webkit-slider-thumb": {
                borderColor: "#3C6AC0"
            }
        }
    },
    "@light": {
        background: "gray9",
        "::-webkit-slider-thumb": {
            background: "white",
            borderColor: "gray9"
        },
        ":hover": {
            "::-webkit-slider-thumb": {
                borderColor: "gray7"
            }
        },
        ":focus": {
            "::-webkit-slider-thumb": {
                borderColor: "blue"
            }
        }
    },
    deps: {
        returnPropertyValue: (t, e, r)=>{
            let n = t.call("exec", t[e], t);
            return (t.call("isFunction", n) ? n(t, t.state) : n !== void 0 ? n : r !== void 0 ? r : 0) + "";
        }
    },
    attr: {
        type: "range",
        value: (t, e)=>t.call("exec", e.value || t.value || t.defaultValue, t),
        min: (t, e)=>t.deps.returnPropertyValue(t, "min", 0),
        max: (t, e)=>t.deps.returnPropertyValue(t, "max", 100),
        step: (t, e)=>t.deps.returnPropertyValue(t, "step", 1)
    }
};
var wl = {};
F(wl, {
    Dropdown: ()=>Km,
    DropdownList: ()=>Ym,
    DropdownParent: ()=>Xm,
    DropdownParentFocus: ()=>Zm,
    DropdownSiblingFocus: ()=>Jm
});
var Km = {
    attr: {
        dropdown: !0
    },
    position: "absolute",
    top: "100%",
    left: "0",
    zIndex: 1e3,
    theme: "quaternary",
    padding: "Y",
    round: "Z2",
    flow: "column",
    gap: "X",
    transition: "B defaultBezier",
    transitionProperty: "transform, opacity, visibility",
    transform: "translate3d(0,10%,0)",
    opacity: 0,
    visibility: "hidden"
}, Ym = {
    display: "flex",
    attr: {
        dropdown: !0
    },
    padding: "0 Y",
    maxHeight: "G",
    flow: "column",
    theme: "quaternary",
    overflow: "hidden auto",
    style: {
        listStyleType: "none"
    },
    transition: "B defaultBezier",
    transitionProperty: "transform, opacity, visibility",
    children: (t)=>t.options || [],
    childrenAs: "props",
    ".hidden": {
        transform: "translate3d(0,10%,0)",
        opacity: 0,
        visibility: "hidden"
    },
    childExtends: {
        extends: "Button",
        state: {},
        isActive: ({ key: t, state: e })=>e.active === t,
        position: "relative",
        round: "0",
        align: "center flex-end",
        flow: "row-reverse",
        padding: "Z2 C Z2 Y2",
        margin: "0",
        gap: "Y2",
        theme: "quaternary .child",
        ":hover": {
            style: {
                svg: {
                    opacity: "0.5"
                }
            }
        },
        Icon: {
            isActive: ({ key: t, state: e })=>e.active === t,
            name: "checkmark",
            opacity: "0.1",
            ".active": {
                opacity: "1"
            }
        },
        ":not(:first-child)": {
            "@dark": {
                border: "solid gray4.65"
            },
            "@light": {
                border: "solid gray11"
            },
            borderWidth: "1px 0 0"
        }
    }
}, Xm = {
    position: "relative",
    zIndex: 999,
    ":hover": {
        zIndex: 1e3,
        "& [dropdown]": {
            transform: "translate3d(0,0,0)",
            opacity: 1,
            visibility: "visible"
        }
    }
}, Zm = {
    position: "relative",
    tabindex: "0",
    ":focus-within": {
        zIndex: 1e3,
        "& [dropdown]": {
            transform: "translate3d(0,0,0)",
            opacity: 1,
            visibility: "visible"
        }
    },
    Input_trigger: {
        type: "checkbox",
        opacity: "0",
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        onClick: (t, e)=>{
            e.node === document.activeElement && e.node.blur();
        }
    },
    Dropdown: {
        onClick: ()=>{
            document.activeElement?.blur();
        }
    }
}, Jm = {
    position: "relative",
    tabindex: "0",
    ":focus-within": {
        zIndex: 1e3,
        "& ~ [dropdown]": {
            transform: "translate3d(0,0,0)",
            opacity: 1,
            visibility: "visible"
        }
    },
    Input_trigger: {
        type: "checkbox",
        opacity: "0",
        position: "absolute",
        inset: "0",
        width: "100%",
        height: "100%",
        cursor: "pointer",
        onClick: (t, e)=>{
            e.node === document.activeElement && e.node.blur();
        }
    }
};
var kl = {};
F(kl, {
    Notification: ()=>Qm
});
var Qm = {
    display: "flex",
    theme: "alert",
    padding: "Z1 B Z A",
    round: "A A A Y2",
    gap: "X2",
    cursor: "pointer",
    align: "flex-start center",
    IconText: {
        Icon: {
            name: "info outline"
        },
        Text: {
            ":empty": {
                hide: !0
            }
        }
    },
    Hgroup: {
        extends: [
            "Flex",
            "Hgroup"
        ],
        flow: "y",
        align: "flex-start",
        gap: "X2",
        H: {
            tag: "h6",
            margin: "0",
            fontWeight: "600",
            lineHeight: "1em",
            text: "Notification",
            ":empty": {
                hide: !0
            }
        },
        P: {
            fontSize: "Z",
            margin: "0",
            text: "is not always a distraction",
            ":empty": {
                hide: !0
            }
        }
    }
};
var Or = Object.assign({}, Nc, jc, Bc, Vc, zc, qc, Gc, Kc, Wc, Yc, Xc, Hc, Zc, Jc, Qc, tl, el, rl, nl, ol, sl, il, gl, ml, yl, bl, xl, Sl, _l, wl, kl);
function js(t) {
    if (t == null) return 0;
    if (typeof t != "object") return ty(String(t));
    let e = 2166136261;
    if (Array.isArray(t)) {
        e = (e ^ 91) * 16777619;
        for(let n = 0; n < t.length; n++)e = (e ^ js(t[n])) * 16777619;
        return e >>> 0;
    }
    let r = Object.keys(t).sort();
    for(let n = 0; n < r.length; n++)e = (e ^ ty(r[n])) * 16777619, e = (e ^ js(t[r[n]])) * 16777619;
    return e >>> 0;
}
function ty(t) {
    let e = 2166136261;
    for(let r = 0; r < t.length; r++)e ^= t.charCodeAt(r), e = e * 16777619 >>> 0;
    return e;
}
function Bs(t, e) {
    if (t === e) return !0;
    if (t === null || e === null || typeof t != typeof e || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        if (!Array.isArray(e) || t.length !== e.length) return !1;
        for(let o = 0; o < t.length; o++)if (!Bs(t[o], e[o])) return !1;
        return !0;
    }
    let r = Object.keys(t), n = Object.keys(e);
    if (r.length !== n.length) return !1;
    for(let o = 0; o < r.length; o++){
        let s = r[o];
        if (!Object.prototype.hasOwnProperty.call(e, s) || !Bs(t[s], e[s])) return !1;
    }
    return !0;
}
function vl(t, e) {
    if (e === void 0) return t;
    if (t === void 0) return e;
    if (e === null) return null;
    if (typeof e != "object" || Array.isArray(e)) return e;
    if (typeof t != "object" || Array.isArray(t)) return {
        ...e
    };
    let r = !1, n = {};
    for(let o in t)if (o in e) {
        let s = vl(t[o], e[o]);
        n[o] = s, s !== t[o] && (r = !0);
    } else n[o] = t[o];
    for(let o in e)o in t || (n[o] = e[o], r = !0);
    return r ? n : t;
}
function Cl(t, e, r) {
    if (!e || typeof e != "object") return t;
    if (!t || typeof t != "object") return e;
    if (r || (r = new WeakSet), r.has(e)) return t;
    r.add(e);
    for(let n in e){
        let o = e[n];
        o && typeof o == "object" && !Array.isArray(o) && t[n] && typeof t[n] == "object" && !Array.isArray(t[n]) ? Cl(t[n], o, r) : t[n] = o;
    }
    return t;
}
function Ce(t) {
    let e = 2166136261;
    for(let r = 0; r < t.length; r++)e ^= t.charCodeAt(r), e = e * 16777619 >>> 0;
    return e.toString(36);
}
function Rr(t) {
    return t.replace(/[A-Z]/g, (e)=>"-" + e.toLowerCase());
}
function On(t) {
    let e = String(t);
    return e.length <= 20 ? e.replace(/\s+/g, "_").replace(/[^a-zA-Z0-9_-]/g, "").toLowerCase() : Ce(e);
}
function ey(t) {
    return t.split(`
`).map(Ce).join(`
`);
}
var ry = {
    display: "d",
    position: "pos",
    padding: "p",
    paddingTop: "pt",
    paddingRight: "pr",
    paddingBottom: "pb",
    paddingLeft: "pl",
    paddingBlock: "pbl",
    paddingInline: "pin",
    margin: "m",
    marginTop: "mt",
    marginRight: "mr",
    marginBottom: "mb",
    marginLeft: "ml",
    marginBlock: "mbl",
    marginInline: "min",
    width: "w",
    height: "h",
    minWidth: "mnw",
    minHeight: "mnh",
    maxWidth: "mxw",
    maxHeight: "mxh",
    top: "t",
    right: "r",
    bottom: "b",
    left: "l",
    flex: "fx",
    flexDirection: "fxd",
    flexWrap: "fxw",
    flexGrow: "fxg",
    flexShrink: "fxs",
    flexBasis: "fxb",
    justifyContent: "jc",
    alignItems: "ai",
    alignSelf: "as",
    alignContent: "ac",
    gap: "g",
    rowGap: "rg",
    columnGap: "cg",
    gridTemplateColumns: "gtc",
    gridTemplateRows: "gtr",
    gridColumn: "gc",
    gridRow: "gr",
    overflow: "of",
    overflowX: "ofx",
    overflowY: "ofy",
    fontSize: "fs",
    fontWeight: "fw",
    fontFamily: "ff",
    fontStyle: "fst",
    lineHeight: "lh",
    letterSpacing: "ls",
    textAlign: "ta",
    textDecoration: "td",
    textTransform: "tt",
    color: "c",
    background: "bg",
    backgroundColor: "bgc",
    backgroundImage: "bgi",
    border: "bd",
    borderRadius: "br",
    borderColor: "bdc",
    borderWidth: "bdw",
    borderStyle: "bds",
    boxShadow: "bxsh",
    opacity: "op",
    zIndex: "z",
    cursor: "cur",
    transition: "tr",
    transform: "tf",
    animation: "an",
    visibility: "vis",
    whiteSpace: "ws",
    wordBreak: "wb",
    objectFit: "obj",
    pointerEvents: "pe",
    userSelect: "us",
    boxSizing: "bxz",
    outline: "ol",
    listStyle: "lis",
    textOverflow: "txo",
    verticalAlign: "va",
    float: "fl",
    clear: "cl",
    content: "cnt",
    backdropFilter: "bdf",
    filter: "flt",
    resize: "rsz",
    appearance: "apr",
    fill: "fil",
    stroke: "stk",
    scrollBehavior: "sb",
    inset: "ins"
};
function ny(t, e) {
    let r = ry[t] || Ce(t), n = On(e), o = `_${r}-${n}`, s = Rr(t), i = `.${o}{${s}: ${e}}`;
    return `${o}
${i}`;
}
var oy = (t)=>typeof t == "string" && (t.indexOf("{") !== -1 || t.indexOf("}") !== -1);
function sy(t) {
    let e = t.split("\0"), r = [], n = [];
    for(let o = 0; o + 1 < e.length; o += 2){
        let s = e[o], i = e[o + 1];
        if (!i || oy(i)) continue;
        let a = ry[s] || Ce(s), c = On(i), l = `_${a}-${c}`, f = Rr(s);
        r.push(l), n.push(`.${l}{${f}:${i}}`);
    }
    return r.join(" ") + "\0" + n.join(`
`);
}
function iy(t, e) {
    let r = t + e, n = `_c${Ce(r)}`, o = e.split("\0"), s = "";
    for(let a = 0; a + 1 < o.length; a += 2){
        let c = o[a], l = o[a + 1];
        l && (oy(l) || (s += `${Rr(c)}:${l};`));
    }
    let i;
    if (t.startsWith("@media")) i = `${t}{.${n}{${s}}}`;
    else if (t.startsWith(":") || t.startsWith("&")) {
        let a = t.startsWith("&") ? t.slice(1) : t;
        i = `.${n}${a}{${s}}`;
    } else t.includes("&") ? i = `${t.replace("&", `.${n}`)}{${s}}` : i = `.${n} ${t}{${s}}`;
    return `${n}
${i}`;
}
var Al = null;
function El(t) {
    Al = t;
}
var Ht = {
    structuralHash: js,
    deepEqual: Bs,
    mergeStructural: vl,
    overwriteDeep: Cl,
    shortHash: Ce,
    toKebab: Rr,
    sanitizeValue: On,
    batchShortHash: ey,
    atomicCssClass: ny,
    batchAtomicCss: sy,
    compoundCssClass: iy
}, ay = !1, Vs = null;
function t0(t) {
    return Vs || (Vs = import(t || "@symbo.ls/wasm/pkg").then((e)=>(e.structuralHash && (Ht.structuralHash = e.structuralHash), e.deepEqual && (Ht.deepEqual = e.deepEqual), e.mergeStructural && (Ht.mergeStructural = e.mergeStructural), e.overwriteDeep && (Ht.overwriteDeep = e.overwriteDeep), e.shortHash && (Ht.shortHash = e.shortHash), e.toKebab && (Ht.toKebab = e.toKebab), e.sanitizeValue && (Ht.sanitizeValue = e.sanitizeValue), e.batchShortHash && (Ht.batchShortHash = e.batchShortHash), e.atomicCssClass && (Ht.atomicCssClass = e.atomicCssClass), e.batchAtomicCss && (Ht.batchAtomicCss = e.batchAtomicCss), e.compoundCssClass && (Ht.compoundCssClass = e.compoundCssClass), ay = !0, Al && e.batchAtomicCss && Al({
            batchAtomicCss: e.batchAtomicCss,
            compoundCssClass: e.compoundCssClass
        }), !0)).catch((e)=>(console.debug("[smbls] WASM not available, using JS fallbacks:", e.message), !1)), Vs);
}
function e0() {
    return ay;
}
P();
var Rn = {};
F(Rn, {
    CDN_PROVIDERS: ()=>Xt,
    DOMQL_EVENTS: ()=>Gf,
    DOMQ_PROPERTIES: ()=>De,
    ENV: ()=>pu,
    HTML_TAGS: ()=>on,
    METHODS: ()=>tn,
    METHODS_EXL: ()=>ao,
    NODE_ENV: ()=>Gt,
    OPTIONS: ()=>$o,
    PACKAGE_MANAGER_TO_CDN: ()=>We,
    PARSED_DOMQ_PROPERTIES: ()=>io,
    PROPS_METHODS: ()=>Me,
    STATE_METHODS: ()=>Le,
    STATE_PROPERTIES: ()=>qf,
    SVG_TAGS: ()=>$u,
    TYPES: ()=>eo,
    UNIVERSAL_RESERVED_KEYS: ()=>Ta,
    addCaching: ()=>aa,
    addContext: ()=>ia,
    addExtend: ()=>Bu,
    addExtends: ()=>Et,
    addItemAfterEveryElement: ()=>$f,
    addProtoToArray: ()=>oo,
    addRef: ()=>na,
    applyCSS: ()=>fy,
    applyDependentState: ()=>cp,
    applyEvent: ()=>da,
    applyEventUpdate: ()=>ha,
    applyExtends: ()=>zu,
    applyProps: ()=>Eo,
    arrayContainsOtherArray: ()=>Af,
    arraysEqual: ()=>Df,
    arrayzeValue: ()=>pr,
    buildImgSrcset: ()=>is,
    buildSourcesAndImg: ()=>as,
    cache: ()=>gp,
    call: ()=>qp,
    captureSnapshot: ()=>Xp,
    checkForStateTypes: ()=>op,
    checkIfInherits: ()=>pa,
    checkIfStringIsInArray: ()=>Nf,
    clone: ()=>Jf,
    cloneAndMergeArrayExtend: ()=>bo,
    cloneFunction: ()=>Su,
    concatAddExtends: ()=>Lu,
    copyJavaScriptToClipboard: ()=>Rd,
    copyStringToClipboard: ()=>Od,
    createBasedOnType: ()=>ra,
    createElement: ()=>rp,
    createElementExtends: ()=>Vi,
    createExtends: ()=>So,
    createExtendsFromKeys: ()=>sn,
    createExtendsStack: ()=>Hi,
    createIfConditionFlag: ()=>_u,
    createInheritedState: ()=>sp,
    createKey: ()=>go,
    createNestedObject: ()=>su,
    createNestedObjectByKeyPath: ()=>ap,
    createObjectWithoutPrototype: ()=>Ii,
    createParent: ()=>oa,
    createPath: ()=>sa,
    createProps: ()=>To,
    createPropsStack: ()=>Qi,
    createRoot: ()=>ep,
    createScope: ()=>up,
    createSnapshotId: ()=>ho,
    customDecodeURIComponent: ()=>Hf,
    customEncodeURIComponent: ()=>Wf,
    cutArrayAfterValue: ()=>Pf,
    cutArrayBeforeValue: ()=>Rf,
    debounce: ()=>yo,
    debounceOnContext: ()=>yu,
    decodeNewlines: ()=>Uf,
    deepClone: ()=>Q,
    deepContains: ()=>nu,
    deepDefaults: ()=>rs,
    deepDestringifyFunctions: ()=>ie,
    deepExtend: ()=>Bi,
    deepMerge: ()=>q,
    deepMergeExtends: ()=>ae,
    deepStringifyFunctions: ()=>co,
    defineSetter: ()=>Wp,
    destringifyGlobalScope: ()=>fo,
    detectHeightOnInit: ()=>id,
    detectInfiniteLoop: ()=>lu,
    document: ()=>Y,
    encodeNewlines: ()=>zf,
    error: ()=>ur,
    excludeKeysFromObject: ()=>uu,
    exec: ()=>X,
    extendCachedRegistry: ()=>Mu,
    extendStackRegistry: ()=>_o,
    extractArrayExtend: ()=>ko,
    fetchLibraryData: ()=>Ra,
    fibonacciNumberByIndex: ()=>cd,
    filterArrays: ()=>Lf,
    filterArraysFast: ()=>Mf,
    finalizeExtends: ()=>qi,
    findClosestNumber: ()=>Oa,
    findClosestNumberInFactory: ()=>kd,
    findInheritedState: ()=>ua,
    findKeyPosition: ()=>Bf,
    flattenExtend: ()=>an,
    formatDate: ()=>od,
    generateHash: ()=>Mi,
    generateKey: ()=>po,
    generateMetaTags: ()=>Sd,
    get: ()=>Bp,
    getActiveRoute: ()=>ul,
    getCDNUrl: ()=>Zt,
    getCapitalCaseKeys: ()=>Uu,
    getCdnProviderFromConfig: ()=>yn,
    getChildStateInKey: ()=>fa,
    getChildren: ()=>Vo,
    getContext: ()=>Ko,
    getCookie: ()=>Tu,
    getDB: ()=>Qo,
    getEmotionStylesheet: ()=>Dd,
    getExtendsInElement: ()=>Vu,
    getExtendsStack: ()=>xo,
    getExtendsStackRegistry: ()=>ji,
    getFrequencyInArray: ()=>Ef,
    getHashedExtend: ()=>wo,
    getImportMapScript: ()=>rd,
    getInObjectByPath: ()=>cu,
    getLocalStorage: ()=>Ru,
    getNev: ()=>mu,
    getPageMetadata: ()=>_d,
    getParentStateInKey: ()=>la,
    getPath: ()=>zo,
    getQuery: ()=>ts,
    getRef: ()=>zp,
    getRoot: ()=>Ho,
    getRootContext: ()=>Go,
    getRootData: ()=>qo,
    getRootState: ()=>Wo,
    getRootStateInKey: ()=>ca,
    getSpreadChildren: ()=>Wu,
    global: ()=>kf,
    hasFunction: ()=>en,
    hasHandlerPlugin: ()=>rn,
    hasOwnProperty: ()=>tu,
    inheritChildExtends: ()=>Ui,
    inheritChildPropsExtends: ()=>zi,
    inheritParentProps: ()=>Oo,
    inheritRecursiveChildExtends: ()=>Wi,
    init: ()=>Ae,
    initProps: ()=>Ju,
    is: ()=>Ct,
    isArray: ()=>T,
    isBoolean: ()=>Ei,
    isContextComponent: ()=>Hu,
    isCyclic: ()=>fu,
    isDOMNode: ()=>kt,
    isDate: ()=>Oi,
    isDefined: ()=>vt,
    isDevelopment: ()=>Be,
    isEmpty: ()=>Ri,
    isEmptyObject: ()=>eu,
    isEqualDeep: ()=>Pi,
    isFunction: ()=>C,
    isHtmlElement: ()=>to,
    isLocal: ()=>gu,
    isMethod: ()=>Kp,
    isMobile: ()=>Au,
    isNode: ()=>he,
    isNot: ()=>Cf,
    isNotProduction: ()=>cr,
    isNull: ()=>Ti,
    isNumber: ()=>oe,
    isObject: ()=>S,
    isObjectLike: ()=>N,
    isPhoto: ()=>fd,
    isProduction: ()=>je,
    isStaging: ()=>hu,
    isState: ()=>ip,
    isString: ()=>_,
    isStringFunction: ()=>xu,
    isTest: ()=>$i,
    isTesting: ()=>du,
    isUndefined: ()=>ht,
    isUniversallyReservedKey: ()=>Jp,
    isValidHtmlTag: ()=>Fu,
    joinArrays: ()=>Xr,
    jointStacks: ()=>ju,
    keys: ()=>Aa,
    lastLevel: ()=>Ns,
    lastPathname: ()=>Ms,
    loadCssFile: ()=>gd,
    loadJavascript: ()=>md,
    loadJavascriptFile: ()=>pd,
    loadJavascriptFileEmbedSync: ()=>hd,
    loadJavascriptFileSync: ()=>dd,
    loadRemoteCSS: ()=>yd,
    loadRemoteScript: ()=>bn,
    log: ()=>Hp,
    logGroupIf: ()=>vu,
    logIf: ()=>ku,
    lookdown: ()=>Mp,
    lookdownAll: ()=>Np,
    lookup: ()=>Lp,
    lowercaseFirstLetter: ()=>sr,
    makeObjectWithoutPrototype: ()=>ru,
    map: ()=>Xf,
    mapStringsWithContextComponents: ()=>vo,
    matchRoute: ()=>cl,
    matchesComponentNaming: ()=>ce,
    memoize: ()=>bu,
    merge: ()=>et,
    mergeSharedLibraries: ()=>ns,
    nextElement: ()=>Xo,
    normalizeLibraryKey: ()=>xn,
    objectToString: ()=>lo,
    objectizeStringProperty: ()=>Ao,
    overwrite: ()=>uo,
    overwriteDeep: ()=>At,
    overwriteShallow: ()=>ar,
    overwriteState: ()=>lp,
    parse: ()=>Ea,
    parseDeep: ()=>jo,
    parseQuery: ()=>ll,
    parseRoutePattern: ()=>al,
    pickupElementFromProps: ()=>Xi,
    pickupPropsFromElement: ()=>Yi,
    previousElement: ()=>Zo,
    propExists: ()=>Zu,
    propertizeElement: ()=>Zi,
    propertizeUpdate: ()=>Xu,
    reinit: ()=>ly,
    remove: ()=>jp,
    removeChars: ()=>Pd,
    removeCookie: ()=>Ou,
    removeDuplicateProps: ()=>Po,
    removeDuplicatesInArray: ()=>Zr,
    removeFromArray: ()=>Tf,
    removeFromObject: ()=>ou,
    removeNestedKeyByPath: ()=>iu,
    removeValueFromArray: ()=>no,
    removeValueFromArrayAll: ()=>If,
    reorderArrayByValues: ()=>Ff,
    replaceLiteralsWithObjectFields: ()=>or,
    replaceOctalEscapeSequences: ()=>Vf,
    resolveAsset: ()=>Tt,
    resolveHandler: ()=>nn,
    resolveSharedLibraries: ()=>Ed,
    returnValueAsText: ()=>ea,
    router: ()=>ee,
    runGuards: ()=>fl,
    runPluginHook: ()=>Kt,
    scratchSystem: ()=>bs,
    scratchUtils: ()=>yr,
    self: ()=>vf,
    set: ()=>Cn,
    setActiveRootState: ()=>Uo,
    setCookie: ()=>Eu,
    setHashedExtend: ()=>Ni,
    setInObjectByPath: ()=>au,
    setLocalStorage: ()=>Pu,
    setNodeStyles: ()=>Ca,
    setProps: ()=>Vp,
    setPropsPrototype: ()=>Ro,
    spotByPath: ()=>Bo,
    srcsetFor: ()=>Sn,
    stringIncludesAny: ()=>so,
    stringToObject: ()=>Qf,
    swapItemsInArray: ()=>Of,
    syncProps: ()=>Io,
    toCamelCase: ()=>os,
    toDashCase: ()=>ss,
    toDescriptionCase: ()=>$d,
    toTitleCase: ()=>Id,
    toggleFullscreen: ()=>td,
    triggerEventOn: ()=>Ve,
    triggerEventOnUpdate: ()=>hp,
    trimStringFromSymbols: ()=>jf,
    unstackArrayOfObjects: ()=>ro,
    update: ()=>Ji,
    updateProps: ()=>Qu,
    variables: ()=>Jo,
    verbose: ()=>mn,
    warn: ()=>Yo,
    window: ()=>k
});
P();
P();
var r0 = E(), cy = (t = r0, e)=>{
    let r = S(e.localFile) ? e.localFile : {}, n = Q(r.designSystem || {});
    return q(t, n);
}, n0 = {
    useVariable: !0,
    useReset: !0,
    useFontImport: !0,
    useIconSprite: !0,
    useDocumentTheme: !0,
    useSvgSprite: !0
}, Ae = (t, e = n0)=>{
    let r = cy(t || {}, e), n = e.scopeSelector || ":root", o = n === ":root" ? ":root:not([data-theme])" : `${n}:not([data-theme])`, s = e.globalTheme;
    if (typeof window < "u" && window.location) {
        let m = new URLSearchParams(window.location.search).get("globalTheme");
        m && (s = m);
    }
    let i = Cn({
        verbose: e.verbose,
        useReset: e.useReset,
        useFontImport: e.useFontImport,
        useVariable: e.useVariable,
        useSvgSprite: e.useSvgSprite,
        useDocumentTheme: e.useDocumentTheme,
        useIconSprite: e.useIconSprite,
        useDefaultConfig: e.useDefaultConfig,
        globalTheme: s,
        themeRoot: e.themeRoot,
        files: e.files,
        assets: e.assets,
        ...r
    }, {
        newConfig: e.newConfig,
        config: e.config
    });
    i && (i.scopeSelector = n);
    let a = Ia(i.font, i.files), c = i.useReset, l = i.useVariable, f = i.useFontImport, p = i.useSvgSprite, u = t.svg, d = i.useIconSprite, h = t.icons;
    if (f && ct(a), l && (ct({
        [n]: i.CSS_VARS
    }), i.CSS_MEDIA_VARS)) {
        let m = {};
        for(let y in i.CSS_MEDIA_VARS)y.startsWith("@media") ? m[y] = {
            [o]: i.CSS_MEDIA_VARS[y]
        } : m[y] = i.CSS_MEDIA_VARS[y];
        ct(m);
    }
    c && ct(i.reset);
    let g = i.animation;
    if (g) {
        let m = {};
        for(let y in g)m[`@keyframes ${y}`] = g[y];
        ct(m);
    }
    return (u || p) && cc(i.svg, {
        document: e.document
    }), (h || d) && fc(i.icons, {
        document: e.document
    }), i;
}, zs = {}, ly = (t, e = zs)=>{
    let r = cy(t || {}, e), n = e.scopeSelector || ":root", o = n === ":root" ? ":root:not([data-theme])" : `${n}:not([data-theme])`, s = Cn({
        verbose: !1,
        ...r
    });
    if (!e.preventInject) {
        if (ct({
            [n]: s.CSS_VARS
        }), s.CSS_MEDIA_VARS) {
            let i = {};
            for(let a in s.CSS_MEDIA_VARS)a.startsWith("@media") ? i[a] = {
                [o]: s.CSS_MEDIA_VARS[a]
            } : i[a] = s.CSS_MEDIA_VARS[a];
            ct(i);
        }
        ct(s.reset);
    }
    return s;
}, fy = (t, e = zs)=>{
    ct(t);
}, wI = (t, e = zs)=>{
    let r = e.scopeSelector || ":root", n = r === ":root" ? ":root:not([data-theme])" : `${r}:not([data-theme])`;
    if (ct({
        [r]: t.CSS_VARS
    }), t.CSS_MEDIA_VARS) {
        let o = {};
        for(let s in t.CSS_MEDIA_VARS)s.startsWith("@media") ? o[s] = {
            [n]: t.CSS_MEDIA_VARS[s]
        } : o[s] = t.CSS_MEDIA_VARS[s];
        ct(o);
    }
};
var kI = (t, e = zs)=>{};
P();
var uy = (t)=>!t || t === "srcdoc" || t === "about:srcdoc" || t === "blank" || t === "about:blank" ? "/" : t, Tl = {
    initRouter: !0,
    injectRouterInLinkComponent: !0,
    popState: !0
}, Pn = (t, e)=>{
    if (!e) return t;
    let r = Array.isArray(e) ? e : e.split("."), n = t;
    for (let o of r){
        if (!n || !n[o]) return null;
        n = n[o];
    }
    return n;
}, py = (t, e)=>{
    if (e.router === !1) return;
    e.router === !0 ? e.router = Tl : e.router = et(e.router || {}, Tl);
    let r = e.router, n = async (s, i)=>{
        let a = s.context?.window || k;
        if (!a.location) return;
        let { pathname: c, search: l, hash: f } = a.location;
        c = uy(c);
        let p = c + l + f, u = s;
        if (r.customRouterElement) {
            let d = Pn(s, r.customRouterElement);
            d && (u = d, s.routes && (u.routes = s.routes));
        }
        u.routes && await ee(p, u, {}, {
            initialRender: !0,
            pushState: !1
        });
    }, o = !ht(t.onRenderRouter);
    return r && r.initRouter && !o && (t.onRenderRouter = n), o0(e, r), r;
}, Ol = (t, e)=>{
    if (e.router === !1) return;
    let r = e.router || Tl;
    if (!r.popState) return;
    let n = e.utils && e.utils.router ? e.utils.router : ee, o = e.window || k, s = async (i)=>{
        let { pathname: a, search: c, hash: l } = o.location;
        a = uy(a);
        let f = a + c + l, p = t;
        if (r.customRouterElement) {
            let u = Pn(t, r.customRouterElement);
            u && (p = u, t.routes && (p.routes = t.routes));
        }
        await p.call("router", f, p, {}, {
            pushState: !1,
            scrollToTop: !1,
            level: 0,
            event: i
        });
    };
    o.addEventListener("popstate", s), e.__teardowns = e.__teardowns || [], e.__teardowns.push(()=>o.removeEventListener("popstate", s));
}, o0 = (t, e)=>{
    let { components: r } = t;
    if (e && e.injectRouterInLinkComponent) return q(r.Link || r["smbls.Link"], r.RouterLink || r["smbls.RouterLink"]);
};
P();
var Rl = k && k.location ? k.location.host.includes("dev.") : Be(), dy = Rl ? "http://localhost:8080/get" : "https://api.symbols.app/get", s0 = {
    endpoint: dy
}, hy = async (t, e = s0)=>{
    let r = e.endpoint || dy, n = e.serviceRoute ? T(e.serviceRoute) ? e.serviceRoute.map((s)=>s.toLowerCase() + "=true").join("&") : e.serviceRoute : "", o;
    try {
        return o = await globalThis.fetch(r + "/?" + n, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-AppKey": t,
                "X-Metadata": e.metadata
            }
        }), await o.json();
    } catch (s) {
        if (C(e.onError)) return e.onError(s);
        console.error(s);
    }
}, i0 = async (t, e)=>{
    let { editor: r } = e;
    if (r && r.remote) {
        let n = await hy(t, r), o = Rl || e.isDevelopment ? ie(n) : ie(n.releases[0]);
        r.serviceRoute ? T(r.serviceRoute) ? r.serviceRoute.forEach((s)=>{
            At(e[s], o[s.toLowerCase()]);
        }) : At(e[r.serviceRoute], o) : [
            "state",
            "designSystem",
            "components",
            "snippets",
            "pages",
            "utils",
            "files",
            "assets",
            "packages",
            "functions",
            "globalScope"
        ].forEach((s)=>{
            At(e[s], o[s.toLowerCase()]);
        });
    }
    return e;
}, a0 = async (t, e, r)=>{
    let { editor: n } = e;
    if (n && n.remote) {
        let o = await hy(t, n), s = Rl || e.isDevelopment ? ie(o) : ie(o.releases[0]);
        r(s);
    }
}, gy = async (t, e)=>{
    if (t && e.editor) try {
        e.editor.async || await i0(t, e);
    } catch (r) {
        console.error(r);
    }
}, my = (t, e, r, n)=>{
    if (e && r.editor) try {
        r.editor.async && a0(e, r, n || ((o)=>{
            let s = o.designSystem;
            S(s) && r.utils.init(s), S(o.state) && t.state.set(o.state);
        }));
    } catch (o) {
        console.error(o);
    }
};
var Us = (t)=>{
    if (!t || t.__destroyed) return !1;
    let e = t.context;
    if (!e) return t.__destroyed = !0, !1;
    if (Array.isArray(e.__teardowns)) {
        for (let r of e.__teardowns)try {
            r();
        } catch (n) {
            console.error("[smbls] destroy teardown error:", n);
        }
        e.__teardowns.length = 0;
    }
    try {
        Cr(t);
    } catch (r) {
        console.error("[smbls] dispose error:", r);
    }
    if (e.fetch && e.fetch.__resolved && delete e.fetch.__resolved, e.fetch && e.fetch.__resolving && delete e.fetch.__resolving, e.db && e.db.__resolved && delete e.db.__resolved, e.db && e.db.__resolving && delete e.db.__resolving, e.analyze?.destroy) try {
        e.analyze.destroy();
    } catch (r) {
        console.error("[analyze] destroy error:", r);
    }
    return t.__destroyed = !0, !0;
};
P();
var c0 = {
    title: {
        tag: "title"
    },
    description: {
        tag: "meta",
        attr: "name",
        key: "description"
    },
    keywords: {
        tag: "meta",
        attr: "name",
        key: "keywords"
    },
    robots: {
        tag: "meta",
        attr: "name",
        key: "robots"
    },
    author: {
        tag: "meta",
        attr: "name",
        key: "author"
    },
    canonical: {
        tag: "link",
        attr: "rel",
        key: "canonical",
        valueAttr: "href"
    },
    image: {
        tag: "meta",
        attr: "property",
        key: "og:image"
    },
    url: {
        tag: "meta",
        attr: "property",
        key: "og:url"
    },
    siteName: {
        tag: "meta",
        attr: "property",
        key: "og:site_name"
    },
    type: {
        tag: "meta",
        attr: "property",
        key: "og:type"
    },
    locale: {
        tag: "meta",
        attr: "property",
        key: "og:locale"
    },
    "og:title": {
        tag: "meta",
        attr: "property",
        key: "og:title"
    },
    "og:description": {
        tag: "meta",
        attr: "property",
        key: "og:description"
    },
    "og:image": {
        tag: "meta",
        attr: "property",
        key: "og:image"
    },
    "og:url": {
        tag: "meta",
        attr: "property",
        key: "og:url"
    },
    "og:type": {
        tag: "meta",
        attr: "property",
        key: "og:type"
    },
    "og:site_name": {
        tag: "meta",
        attr: "property",
        key: "og:site_name"
    },
    "og:locale": {
        tag: "meta",
        attr: "property",
        key: "og:locale"
    },
    "twitter:card": {
        tag: "meta",
        attr: "name",
        key: "twitter:card"
    },
    "twitter:title": {
        tag: "meta",
        attr: "name",
        key: "twitter:title"
    },
    "twitter:description": {
        tag: "meta",
        attr: "name",
        key: "twitter:description"
    },
    "twitter:image": {
        tag: "meta",
        attr: "name",
        key: "twitter:image"
    },
    "twitter:site": {
        tag: "meta",
        attr: "name",
        key: "twitter:site"
    },
    "theme-color": {
        tag: "meta",
        attr: "name",
        key: "theme-color"
    }
}, l0 = (t)=>{
    if (t.tag === "link") return `link[${t.attr}="${t.key}"]`;
    if (t.tag && !t.attr && !t.key) return t.tag;
    if (t.tag && t.attr && t.key) return `${t.tag}[${t.attr}="${t.key}"]`;
}, Ws = (t, e, r)=>{
    if (!t) return {};
    let n = C(t) ? X(t, e, r) : {
        ...t
    };
    if (!S(n)) return {};
    for(let o in n){
        let s = n[o];
        C(s) && (s = X(s, e, r)), _(s) && s.includes("{{") && e?.call && (s = e.call("replaceLiteralsWithObjectFields", s, r)), n[o] = s;
    }
    return n;
};
var f0 = (t, e)=>{
    let r = e.createElement(t.tag);
    return t.attr && r.setAttribute(t.attr, t.key), (e.head || e.querySelector("head")).appendChild(r), r;
}, yy = (t)=>{
    let e = 5381, r = String(t);
    for(let n = 0; n < r.length; n++)e = (e * 33 ^ r.charCodeAt(n)) >>> 0;
    return e.toString(36);
}, Pl = (t, e, r, n)=>{
    let o = t.head || t.querySelector("head");
    if (!o) return;
    let s = new Map;
    for (let a of o.querySelectorAll(`[${e}]`))s.set(a.getAttribute(e), a);
    let i = new Set;
    for (let a of r)i.add(a);
    for (let [a, c] of s)i.has(a) || c.remove();
    for (let a of r){
        if (s.has(a)) continue;
        let c = n(a);
        c && (c.setAttribute(e, a), o.appendChild(c));
    }
}, Hs = (t, e)=>{
    if (!(!S(t) || !e)) {
        for(let r in t){
            let n = t[r];
            if (n == null || r === "jsonLd" || r === "styles" || r === "scripts") continue;
            let o = c0[r];
            if (!o) continue;
            let s = l0(o), i = e.querySelector(s) || f0(o, e);
            i && (r === "title" ? i.textContent = n : o.valueAttr ? i.setAttribute(o.valueAttr, n) : i.setAttribute("content", n));
        }
        if (Array.isArray(t.jsonLd)) {
            let n = t.jsonLd.filter((s)=>s != null).map((s)=>_(s) ? s : JSON.stringify(s)), o = n.map(yy);
            Pl(e, "data-smbls-jsonld", o, (s)=>{
                let i = o.indexOf(s), a = e.createElement("script");
                return a.setAttribute("type", "application/ld+json"), a.textContent = n[i], a;
            });
        }
        if (Array.isArray(t.styles)) {
            let r = t.styles.filter((o)=>o != null && String(o).trim()), n = r.map(yy);
            Pl(e, "data-smbls-style", n, (o)=>{
                let s = n.indexOf(o), i = e.createElement("style");
                return i.textContent = String(r[s]), i;
            });
        }
        if (Array.isArray(t.scripts)) {
            let r = t.scripts.filter((o)=>o && (_(o) ? o.trim() : o.src)), n = r.map((o)=>_(o) ? o : String(o.src));
            Pl(e, "data-smbls-script", n, (o)=>{
                let s = n.indexOf(o), i = r[s], a = e.createElement("script");
                return _(i) ? a.setAttribute("src", i) : (i.src && a.setAttribute("src", i.src), i.type && a.setAttribute("type", i.type), i.async && (a.async = !0), i.defer && (a.defer = !0), i.integrity && a.setAttribute("integrity", i.integrity), i.crossorigin && a.setAttribute("crossorigin", i.crossorigin), i.referrerpolicy && a.setAttribute("referrerpolicy", i.referrerpolicy), i.nomodule && (a.noModule = !0), i.body && (a.textContent = String(i.body))), a;
            });
        }
    }
};
var by = {
    name: "helmet",
    create (t) {
        let e = t.metadata;
        if (!e) return;
        let r = t.context?.document || typeof document < "u" && document;
        if (!r) return;
        let n = Ws(e, t, t.state);
        Hs(n, r);
    },
    update (t) {
        let e = t.metadata;
        if (!e) return;
        let r = t.context?.document || typeof document < "u" && document;
        if (!r) return;
        let n = Ws(e, t, t.state);
        Hs(n, r);
    }
};
Ue();
var xy = (t, e, r, n)=>{
    t && hn(t, e, r, n);
}, Sy = (t, e, r)=>{
    if (!t) return;
    let n = e.context?.document || typeof document < "u" && document;
    if (!n) return;
    let o = Ws(t, e, r);
    Hs(o, n);
}, _y = async (t, e)=>{
    if (!t) return;
    let r = {
        tag: "fragment",
        ...t
    }, n = async ()=>{
        await e.set(r, {
            preventDefineUpdate: "$router"
        });
    };
    return e.lazyLoad ? window.requestAnimationFrame(n) : await n(), r;
}, In = {
    routes: (t)=>t,
    metadata: Sy,
    fetch: xy,
    $router: _y
}, u0 = (t = {})=>{
    let e = {
        routes: (r)=>r
    };
    return t.metadata !== !1 && (e.metadata = Sy), t.fetch !== !1 && (e.fetch = xy), t.router !== !1 && (e.$router = _y), e;
};
var wy = {
    useReset: !0,
    useVariable: !0,
    useIconSprite: !0,
    useSvgSprite: !0,
    useDocumentTheme: !0,
    useDefaultIcons: !0,
    useFontImport: !0,
    useDefaultConfig: !0
}, Il = {
    initRouter: !0,
    popState: !0,
    injectRouterInLinkComponent: !0
}, qs = {
    ...wy,
    router: Il
}, p0 = {
    state: {},
    pages: {},
    components: {},
    router: Il,
    define: In
}, Ee = p0;
P();
P();
var ky = (t, e)=>N(t.extends) ? t.extends : [];
P();
var Ey = (t)=>{
    let e = typeof window < "u" ? window : globalThis || {};
    e.document || (e.document = {
        body: {}
    });
    let r = typeof document < "u" ? document : e.document;
    t.document = t.document || r;
    let n = t.window;
    return n && n !== e && typeof n.URL != "function" ? (typeof console < "u" && console.warn && console.warn("[smbls/router] context.window lacks URL, falling back to globalThis \u2014 passed-in window may be a stub"), t.window = e) : t.window = n || e, t.window;
}, vy = (t = "smbls")=>{
    let e = {};
    for(let r in Or)Object.prototype.hasOwnProperty.call(Or, r) && (ce(r) ? e[`smbls.${r}`] = Or[r] : e[r] = Or[r]);
    return e;
}, Ty = (t)=>t.components ? {
        ...vy(),
        ...t.components
    } : vy(), Oy = (t)=>({
        ...Rn,
        ...pl,
        ...yr,
        ...t.utils,
        ...t.snippets,
        ...t.functions
    }), Ry = (t)=>({
        ...t.methods || {},
        require: t.utils.require,
        requireOnDemand: t.utils.requireOnDemand,
        router: t.utils.router
    }), Cy = {}, Py = async ({ dependencies: t, dependenciesOnDemand: e, document: r, preventCaching: n = !1, cdnProvider: o, packageManager: s, symbolsConfig: i })=>{
    if (o || (o = We[s] || yn(i) || "esmsh"), !t) return null;
    let a = !1;
    for(let c in t){
        a = !0;
        break;
    }
    if (!a) return null;
    for(let c in t){
        let l = t[c];
        if (e && e[c]) continue;
        let f = Be() && n ? `?${Math.random()}` : "", p = Zt(c, l, o) + f;
        try {
            if (Cy[c]) continue;
            Cy[c] = !0, await Promise.race([
                bn(p, {
                    document: r,
                    type: "module"
                }),
                new Promise((u, d)=>setTimeout(()=>d(new Error(`Timeout loading ${c}`)), 1e4))
            ]);
        } catch (u) {
            if (console.error(`Failed to load ${c} from ${o}:`, u), o !== "symbols") try {
                let d = Zt(c, l, "symbols") + f;
                await Promise.race([
                    bn(d, {
                        document: r
                    }),
                    new Promise((h, g)=>setTimeout(()=>g(new Error(`Timeout fallback ${c}`)), 2e4))
                ]), console.log(`Successfully loaded ${c} from fallback (symbols.ls)`);
            } catch (d) {
                console.error(`Failed to load ${c} from fallback:`, d);
            }
        }
    }
    return t;
}, Iy = async (t, e)=>{
    let r = e.window || window, n = e.cdnProvider || yn(e.symbolsConfig) || "esmsh", o = async (i)=>async (a, c)=>{
            let f = (i.window || window).packages[a];
            return typeof f == "function" ? f() : f;
        }, s = async (i)=>async (a, c = n)=>{
            let { dependenciesOnDemand: l } = i, f = i.document || document, p = i.window || window;
            if (!p.packages[a]) {
                let u = Be() ? `?${Math.random()}` : "";
                if (l && l[a]) {
                    let d = l[a], h = Zt(a, d, c) + u;
                    try {
                        await i.utils.loadRemoteScript(h, {
                            window: p,
                            document: f
                        });
                    } catch (g) {
                        if (console.error(`Failed to load ${a} from ${c}:`, g), c !== "symbols") {
                            let m = Zt(a, d, "symbols") + u;
                            await i.utils.loadRemoteScript(m, {
                                window: p,
                                document: f
                            });
                        }
                    }
                } else {
                    let d = Zt(a, "latest", c) + u;
                    try {
                        await i.utils.loadRemoteScript(d, {
                            window: p,
                            document: f
                        });
                    } catch (h) {
                        if (console.error(`Failed to load ${a} from ${c}:`, h), c !== "symbols") {
                            let g = Zt(a, "latest", "symbols") + u;
                            await i.utils.loadRemoteScript(g, {
                                window: p,
                                document: f
                            });
                        }
                    }
                    p.packages[a] = "loadedOnDeman";
                }
            }
            return await p.require(a, c);
        };
    r.packages ? r.packages = et(r.packages, t) : r.packages = t, r.require || (e.utils.require = await o(e), r.require = e.utils.require), r.requireOnDemand || (e.utils.requireOnDemand = await s(e), r.requireOnDemand = e.utils.requireOnDemand);
}, d0 = /\s+/g, $y = (t, e)=>typeof t == "function" ? t(e, e?.state, e?.context) : t, h0 = (t, e)=>{
    let r = "";
    for(let n in t){
        let o = t[n];
        typeof o == "boolean" && o ? r += ` ${n}` : typeof o == "string" ? r += ` ${o}` : typeof o == "function" && (r += ` ${$y(o, e)}`);
    }
    return r;
}, g0 = (t, e, r)=>{
    if (!t) return;
    let { key: n } = e;
    t === !0 && (t = e.classlist = {
        key: n
    }), typeof t == "string" && (t = e.classlist = {
        default: t
    }), t !== null && typeof t == "object" && !Array.isArray(t) && (t = h0(t, e));
    let o = t.replace(d0, " ").trim();
    if (r && typeof r.setAttribute == "function") r.setAttribute("class", o);
    else if (r) try {
        r.className = o;
    } catch  {}
    return o;
}, m0 = ()=>(t, e, r)=>{
        let n = $y(t, e);
        if (t) {
            let { __ref: o } = e;
            o.__class.style = n;
        }
        Fy()(e.classlist, e, e.state, !0);
    }, Fy = ()=>(t, e, r, n)=>{
        if (e.style && !n) return;
        let { __ref: o } = e, { __class: s, __classNames: i } = o;
        if (!(t === null || typeof t != "object" || Array.isArray(t))) {
            e.class && (i.classProps = e.class), e.attr?.class && (i.class = e.attr.class);
            for(let a in s){
                let c = s[a];
                if (!c) {
                    delete i[a];
                    continue;
                }
                let l;
                typeof c == "string" || typeof c == "number" ? l = c : typeof c == "boolean" ? l = e.key : l = Xe(c), i[a] = l;
            }
            for(let a in i)a === "classProps" || a === "class" || s[a] === void 0 && delete i[a];
            e.node && g0(i, e, e.node);
        }
    }, y0 = ()=>({
        style: m0(),
        classlist: Fy()
    }), b0 = [
    "useReset",
    "useVariable",
    "useFontImport",
    "useIconSprite",
    "useSvgSprite",
    "useDocumentTheme",
    "useDefaultIcons",
    "useDefaultConfig",
    "verbose",
    "globalTheme"
], Ay = !1, Dy = (t, e)=>{
    let r = e.document || (e.parent && e.parent.documentElement ? e.parent : null) || document, n = e.initOptions || {}, o = e.registry || y0(), s = e.designSystem ? q(Q(e.designSystem), Is) : Q(Is), i = {};
    for (let d of b0)e[d] !== void 0 && (i[d] = e[d]);
    let a, c = Ay && !e.skipDesignSystemInit, l = c ? `[data-smbls-app="${t}"]` : ":root";
    e.scopeSelector = l;
    let f = l === ":root" ? ":root:not([data-theme])" : `${l}:not([data-theme])`;
    if (e.skipDesignSystemInit) {
        if (a = E(t) || E(), a && (a.document = r), a?.CSS_VARS) {
            pt(a);
            try {
                if (ct({
                    [l]: a.CSS_VARS
                }), a.CSS_MEDIA_VARS) {
                    let d = {};
                    for(let h in a.CSS_MEDIA_VARS)h.startsWith("@media") ? d[h] = {
                        [f]: a.CSS_MEDIA_VARS[h]
                    } : d[h] = a.CSS_MEDIA_VARS[h];
                    ct(d);
                }
            } finally{
                at();
            }
        }
    } else if (c) {
        let d = Jd(t, s, {
            cleanBase: !0
        });
        for(let g in i)d[g] = i[g];
        d.document = r;
        let h = t.replace(/[^a-zA-Z0-9]/g, "").substring(0, 6);
        e.cssPrefix = h, d.varPrefix = h, pt(d);
        try {
            a = Ae(d, {
                key: t,
                document: r,
                files: e.files,
                assets: e.assets,
                scopeSelector: l,
                ...qs,
                ...i,
                ...n
            });
        } finally{
            at();
        }
    } else {
        let d = E();
        d && (d.document = r), a = Ae(s, {
            key: t,
            document: r,
            files: e.files,
            assets: e.assets,
            scopeSelector: l,
            ...qs,
            ...i,
            ...n
        }), a && a !== d && (a.document = r), Ay = !0;
    }
    let p = a?.CONFIG || a, u = p?.font;
    if (u) {
        pt(p);
        try {
            for(let d in u){
                let h = u[d];
                if (!h?.fontFace) continue;
                let g = Array.isArray(h.fontFace) ? h.fontFace : [
                    h.fontFace
                ];
                for (let m of g)typeof m == "string" && m.includes("font-family") && ct(`@font-face { ${m} }`);
            }
        } finally{
            at();
        }
    }
    return [
        a,
        o
    ];
}, Ly = (t, e)=>{
    let r = {};
    e.state && q(r, e.state), t && t.state && q(r, t.state);
    let n = e.polyglot;
    if (n?.translations) {
        let o = null;
        try {
            typeof localStorage < "u" && (o = localStorage.getItem(n.storageLangKey || "smbls_lang") || localStorage.getItem("lang"));
        } catch  {}
        let s = o || r.lang || n.defaultLang || "en";
        o && o !== r.lang && (r.lang = o);
        let i = n.translations[s];
        if (i && typeof i == "object") for(let c in i)r[c] = i[c];
        let a = new Set(n.languages || []);
        for(let c in n.translations)!a.has(c) && r[c] === void 0 && (r[c] = n.translations[c]);
    }
    return r.isRootState = !0, Q(r);
}, My = (t, e)=>{
    S(t.routes) && S(e.pages) && et(t.routes, e.pages);
    let r = t.routes || e.pages || {};
    for(let n in r){
        if (n.charCodeAt(0) === 47) continue;
        let o = n === "index" ? "" : n;
        r["/" + o] = r[n], delete r[n];
    }
    return r;
}, Ny = (t)=>{
    ns(t, t.sharedLibraries);
};
P();
var By = "smbls_lang", x0 = "smbls_t_", S0 = "smbls_tv_", Pr = {
    get (t) {
        try {
            return window?.localStorage.getItem(t);
        } catch  {
            return null;
        }
    },
    set (t, e) {
        try {
            window?.localStorage.setItem(t, e);
        } catch (r) {
            console.warn("[polyglot] localStorage unavailable:", r.message);
        }
    },
    remove (t) {
        try {
            window?.localStorage.removeItem(t);
        } catch (e) {
            console.warn("[polyglot] localStorage unavailable:", e.message);
        }
    }
}, $n = {};
function Ks() {
    let t = this?.context, e = t?.polyglot;
    return (this?.state?.root || t?.state?.root)?.lang || e?.defaultLang || "en";
}
function $l() {
    let t = this?.context?.polyglot;
    return t ? t.languages ? t.languages : t.translations ? Object.keys(t.translations) : [] : [];
}
var Gs = (t, e)=>{
    if (!t || !e) return;
    if (t[e] !== void 0) return t[e];
    if (e.indexOf(".") === -1) return;
    let r = e.split("."), n = t;
    for(let o = 0; o < r.length; o++){
        if (n == null) return;
        n = n[r[o]];
    }
    return n;
}, jy = (t, e, r)=>{
    let n = e.lastIndexOf(".");
    if (n === -1) return t[e + "_" + r];
    let o = Gs(t, e.substring(0, n));
    if (o != null) return o[e.substring(n + 1) + "_" + r];
};
function Fl(t, e) {
    if (!t) return "";
    let r = this?.context, n = r?.polyglot, o = e || this.call("getActiveLang"), s = this?.state;
    if (s) {
        let l = jy(s, t, o);
        if (l !== void 0) return l;
    }
    if (n?.translations) {
        let l = n.translations[o];
        if (l) {
            let f = Gs(l, t);
            if (f !== void 0) return f;
        }
    }
    let a = (s?.root || r?.state?.root)?.translations;
    if (a) {
        let l = a[o];
        if (l) {
            let f = Gs(l, t);
            if (f !== void 0) return f;
        }
    }
    let c = n?.defaultLang || "en";
    if (s) {
        let l = jy(s, t, c);
        if (l !== void 0) return l;
    }
    if (n?.translations) {
        let l = n.translations[c];
        if (l) {
            let f = Gs(l, t);
            if (f !== void 0) return f;
        }
    }
    return t;
}
async function Dl(t) {
    let e = this?.context, r = e?.polyglot, n = this?.state?.root || e?.state?.root;
    if (!r || !n) return;
    let o = r.storagePrefix || x0, s = r.storageVersionPrefix || (r.storagePrefix ? r.storagePrefix.replace(/_$/, "v_") : S0);
    if (r.translations && r.translations[t] && !r.fetch || !r.fetch || r._fetchFailed?.[t]) return;
    if (!n.translations?.[t]) {
        let c = Pr.get(o + t);
        if (c) try {
            let l = JSON.parse(c), f = {
                translations: {
                    ...n.translations || {}
                }
            };
            f.translations[t] = l, n.update && n.update(f);
        } catch (l) {
            console.warn("[polyglot] Failed to apply language update:", l.message);
        }
    }
    let i = (r.storagePrefix || "smbls") + ":" + t;
    if ($n[i]) return $n[i];
    let a = this;
    return $n[i] = (async ()=>{
        try {
            let c = r.fetch, l = parseInt(Pr.get(s + t), 10) || 0, f, p, u;
            if (C(c)) {
                let h = await c(t, l, a);
                if (!h || h.changed === !1) return;
                f = h.translations || h.data || h, p = h.version || 0, u = !0;
            } else if (S(c)) {
                let h = a.getDB || (()=>e.fetch), g = C(h) ? await h.call(a) : e.fetch;
                if (!g) return;
                let m = c.rpc || c.from || "get_translations_if_changed", y = {
                    p_lang: t,
                    p_cached_version: l,
                    ...c.params || {}
                }, b = await g.rpc({
                    from: m,
                    params: y
                });
                if (b.error) throw r._fetchFailed || (r._fetchFailed = {}), r._fetchFailed[t] = !0, b.error;
                let w = b.data;
                if (!w || !w.changed) return;
                f = w.translations || {}, p = w.version || 0, u = !0;
            } else return;
            if (!u || !f) return;
            Pr.set(o + t, JSON.stringify(f)), p && Pr.set(s + t, String(p));
            let d = {
                translations: {
                    ...n.translations || {}
                }
            };
            d.translations[t] = f, n.update && n.update(d);
        } catch (c) {
            if (r.verbose !== !1) {
                let l = c?.message || c?.details || (typeof c == "object" ? JSON.stringify(c) : String(c));
                console.warn("[polyglot] Failed to load translations for", t, "-", l);
            }
        } finally{
            delete $n[i];
        }
    })(), $n[i];
}
async function Ll(t) {
    let e = this?.context, r = e?.polyglot, n = this?.state?.root || e?.state?.root;
    if (!n || this.call("getActiveLang") === t) return;
    let o = r?.storageLangKey || By;
    Pr.set(o, t), r?.fetch && await this.call("loadTranslations", t), e?.state && (e.state.lang = t);
    let s = r?.translations?.[t], i = {
        lang: t
    };
    if (s && typeof s == "object") for(let c in s){
        let l = s[c];
        (Array.isArray(l) || typeof l == "string" || typeof l == "number") && (i[c] = l);
    }
    if (n.update && n.update(i), s && typeof s == "object") for(let c in s){
        let l = s[c];
        if (l && typeof l == "object" && !Array.isArray(l) && n[c] && typeof n[c] == "object" && !Array.isArray(n[c])) for(let f in l)n[c][f] = l[f];
    }
    let a = this?.context?.document || globalThis.document;
    if (a && s) {
        let c = a.querySelectorAll("[data-key]");
        for (let l of c){
            let f = l.ref;
            if (!f) continue;
            let p = f.__ref?.__exec?.text;
            if (typeof p == "string" && p.includes("{{")) try {
                let u = f.call("replaceLiteralsWithObjectFields", p, f.state);
                u != null && l.textContent !== u && (l.textContent = u);
            } catch  {}
        }
    }
}
async function Ml(t, e, r) {
    let n = this?.context, o = n?.polyglot, s = this?.state?.root || n?.state?.root;
    if (s?.translations?.[e] && (s.translations[e][t] = r), o?.translations?.[e] && (o.translations[e][t] = r), o?.fetch && S(o.fetch)) {
        let i = this.getDB || (()=>n.fetch), a = C(i) ? await i.call(this) : n.fetch;
        if (!a) return;
        let c = o.fetch.table || "translations", l = await a.upsert({
            from: c,
            data: {
                key: t,
                lang: e,
                text: r
            }
        });
        if (l?.error) throw l.error;
        return l.data;
    }
}
async function Vy() {
    let t = this?.context, e = t?.polyglot;
    if (!e) return;
    let r = this?.state?.root || t?.state?.root;
    if (!r) return;
    let n = e.storageLangKey || By, s = Pr.get(n) || e.defaultLang || r.lang || "en";
    r.update && r.lang !== s && r.update({
        lang: s
    }), e.fetch && !(e.translations && e.translations[s]) && await this.call("loadTranslations", s);
}
function Nl(t) {
    try {
        let e = this?.context?.polyglot, n = (this?.state?.root || this?.context?.state?.root)?.lang || e?.defaultLang || "en", o = this?.state;
        if (!o) return "";
        let s = t.lastIndexOf(".");
        if (s === -1) return o[t + n] ?? "";
        let i = t.substring(0, s).split("."), a = o;
        for(let c = 0; c < i.length; c++){
            if (a == null) return "";
            a = a[i[c]];
        }
        return a == null ? "" : a[t.substring(s + 1) + n] ?? "";
    } catch  {
        return "";
    }
}
var jl = {
    name: "polyglot",
    render (t) {
        t.parent && t.parent.parent || t.__polyglotInitialized || (t.__polyglotInitialized = !0, Vy.call(t));
    }
};
var Ys = {
    polyglot: Fl,
    getLocalStateLang: Nl,
    getActiveLang: Ks,
    getLang: Ks,
    setLang: Ll,
    getLanguages: $l,
    loadTranslations: Dl,
    upsertTranslation: Ml
};
Ue();
var Xs = {
    arial: {
        capHeight: 716,
        ascent: 1854,
        descent: -434,
        lineGap: 67,
        unitsPerEm: 2048
    },
    helvetica: {
        capHeight: 714,
        ascent: 770,
        descent: -230,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "helvetica neue": {
        capHeight: 714,
        ascent: 952,
        descent: -213,
        lineGap: 28,
        unitsPerEm: 1e3
    },
    georgia: {
        capHeight: 1419,
        ascent: 1878,
        descent: -449,
        lineGap: 0,
        unitsPerEm: 2048
    },
    "times new roman": {
        capHeight: 1356,
        ascent: 1825,
        descent: -443,
        lineGap: 87,
        unitsPerEm: 2048
    },
    "courier new": {
        capHeight: 1170,
        ascent: 1705,
        descent: -615,
        lineGap: 0,
        unitsPerEm: 2048
    },
    verdana: {
        capHeight: 1489,
        ascent: 2059,
        descent: -430,
        lineGap: 0,
        unitsPerEm: 2048
    },
    roboto: {
        capHeight: 1456,
        ascent: 1900,
        descent: -500,
        lineGap: 0,
        unitsPerEm: 2048
    },
    "open sans": {
        capHeight: 1462,
        ascent: 2189,
        descent: -600,
        lineGap: 0,
        unitsPerEm: 2048
    },
    inter: {
        capHeight: 1490,
        ascent: 2048,
        descent: -512,
        lineGap: 0,
        unitsPerEm: 2048
    },
    lato: {
        capHeight: 1434,
        ascent: 1974,
        descent: -426,
        lineGap: 0,
        unitsPerEm: 2e3
    },
    "source sans": {
        capHeight: 660,
        ascent: 984,
        descent: -273,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "source sans pro": {
        capHeight: 660,
        ascent: 984,
        descent: -273,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "source sans 3": {
        capHeight: 660,
        ascent: 984,
        descent: -273,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    montserrat: {
        capHeight: 700,
        ascent: 968,
        descent: -251,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    poppins: {
        capHeight: 700,
        ascent: 1050,
        descent: -350,
        lineGap: 100,
        unitsPerEm: 1e3
    },
    raleway: {
        capHeight: 710,
        ascent: 1e3,
        descent: -250,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "dm sans": {
        capHeight: 700,
        ascent: 992,
        descent: -312,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    nunito: {
        capHeight: 705,
        ascent: 1011,
        descent: -353,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "work sans": {
        capHeight: 684,
        ascent: 930,
        descent: -243,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    manrope: {
        capHeight: 708,
        ascent: 980,
        descent: -300,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "ibm plex sans": {
        capHeight: 698,
        ascent: 1025,
        descent: -275,
        lineGap: 0,
        unitsPerEm: 1e3
    },
    "plus jakarta sans": {
        capHeight: 720,
        ascent: 1060,
        descent: -300,
        lineGap: 0,
        unitsPerEm: 1e3
    }
}, Zs = (t)=>parseFloat(t.toFixed(4)), _0 = (t, e, r)=>{
    let { ascent: n, descent: o, lineGap: s, unitsPerEm: i, capHeight: a } = e, c = Math.abs(o), l = n + c + s, f = r !== void 0 ? r : l / i * t, p = f / t, u = l / i, d = (n - a + s / 2) / i - (p - u) / 2, h = (c + s / 2) / i - (p - u) / 2;
    return {
        fontSize: `${Zs(t / 16)}rem`,
        lineHeight: `${Zs(f)}px`,
        capHeightTrim: `${Zs(-d)}em`,
        baselineTrim: `${Zs(-h)}em`
    };
}, w0 = (t, e)=>{
    if (typeof t == "number") return t;
    let r = e?.designSystem;
    if (!r) return null;
    let { typography: n } = r;
    if (n?.sequence) {
        let s = String(t).toUpperCase(), i = n.sequence[s];
        if (i) return i.decimal || i.val;
    }
    let o = parseFloat(t);
    return isNaN(o) ? null : typeof t == "string" && t.endsWith("rem") ? o * (r.typography?.browserDefault || 16) : o;
}, k0 = (t, e)=>{
    let n = e?.designSystem?.font_family || {};
    if (t) {
        let s = n[t];
        if (s?.metrics) return s.metrics;
        let i = String(t).toLowerCase().replace(/['"]/g, "").trim();
        if (Xs[i]) return Xs[i];
    }
    let o = n.default || Object.keys(n)[0];
    if (o) {
        let s = n[o];
        if (s?.metrics) return s.metrics;
        if (s?.value && Array.isArray(s.value)) for (let i of s.value){
            let a = i.toLowerCase().replace(/['"]/g, "").trim();
            if (Xs[a]) return Xs[a];
        }
    }
    return null;
}, zy = (t, e, r, n)=>{
    if (!t) return;
    let o = w0(e.fontSize, n);
    if (!o) return;
    let s = k0(e.fontFamily, n);
    if (!s) return;
    let i = e.lineHeight ? parseFloat(e.lineHeight) : void 0, { lineHeight: a, capHeightTrim: c, baselineTrim: l } = _0(o, s, i), f = {};
    return e.lineHeight || (f.lineHeight = a), f["::before"] = {
        content: '""',
        marginBottom: c,
        display: "table"
    }, f["::after"] = {
        content: '""',
        marginTop: l,
        display: "table"
    }, f;
}, Uy = {
    name: "capsize",
    init (t) {
        t.useCapsize === void 0 && t.fontSize && (t.useCapsize = !0);
    }
};
var Fn = {
    attr: "at",
    childExtends: "cex",
    childExtendsRecursive: "cexr",
    childProps: "cp",
    children: "ch",
    childrenAs: "cha",
    class: "cl",
    content: "cnt",
    context: "ctx",
    data: "dt",
    extends: "ext",
    hide: "hd",
    html: "htm",
    if: "if",
    ignoreChildExtends: "icex",
    key: "ky",
    query: "qy",
    routes: "rt",
    scope: "scp",
    show: "shw",
    state: "st",
    style: "sy",
    tag: "tg",
    text: "tx",
    align: "aln",
    boxSize: "bsz",
    flow: "fl",
    heightRange: "hr",
    horizontalInset: "hi",
    round: "rnd",
    shadow: "shd",
    size: "sz",
    templateColumns: "tcol",
    verticalInset: "vi",
    widthRange: "wr",
    wrap: "wrp",
    aspectRatio: "ar",
    blockSize: "bks",
    boxSizing: "bxs",
    height: "h",
    inlineSize: "ins",
    margin: "m",
    marginBottom: "mb",
    marginLeft: "ml",
    marginRight: "mr",
    marginTop: "mt",
    maxBlockSize: "mxbs",
    maxHeight: "mxh",
    maxInlineSize: "mxis",
    maxWidth: "mxw",
    minBlockSize: "mnbs",
    minHeight: "mnh",
    minInlineSize: "mnis",
    minWidth: "mnw",
    padding: "p",
    paddingBottom: "pb",
    paddingInline: "pil",
    paddingLeft: "pl",
    paddingRight: "pr",
    paddingTop: "pt",
    width: "w",
    alignContent: "ac",
    alignItems: "ai",
    alignSelf: "as",
    flex: "fx",
    flexBasis: "fxb",
    flexDirection: "fxd",
    flexFlow: "fxf",
    flexGrow: "fxg",
    flexShrink: "fxs",
    flexWrap: "fxw",
    gap: "g",
    justifyContent: "jc",
    justifyItems: "ji",
    justifySelf: "js",
    order: "od",
    placeContent: "pcn",
    placeItems: "pit",
    placeSelf: "psl",
    rowGap: "rg",
    columnGap: "cg",
    gridArea: "ga",
    gridAutoColumns: "gac",
    gridAutoFlow: "gaf",
    gridAutoRows: "gar",
    gridColumn: "gc",
    gridColumnEnd: "gce",
    gridColumnStart: "gcs",
    gridRow: "gr",
    gridRowEnd: "gre",
    gridRowStart: "grs",
    gridTemplateAreas: "gta",
    gridTemplateColumns: "gtc",
    gridTemplateRows: "gtr",
    bottom: "bot",
    float: "flt",
    inset: "ist",
    left: "lft",
    position: "pos",
    right: "rgt",
    top: "tp",
    zIndex: "zi",
    clear: "clr",
    contain: "ctn",
    cursor: "cur",
    display: "d",
    opacity: "op",
    overflow: "ov",
    overflowX: "ovx",
    overflowY: "ovy",
    pointerEvents: "pe",
    resize: "rsz",
    userSelect: "us",
    visibility: "vis",
    background: "bg",
    backgroundAttachment: "bga",
    backgroundBlendMode: "bgbm",
    backgroundClip: "bgcl",
    backgroundColor: "bgc",
    backgroundImage: "bgi",
    backgroundOrigin: "bgo",
    backgroundPosition: "bgp",
    backgroundPositionX: "bgpx",
    backgroundPositionY: "bgpy",
    backgroundRepeat: "bgr",
    backgroundRepeatX: "bgrx",
    backgroundRepeatY: "bgry",
    backgroundSize: "bgs",
    color: "c",
    theme: "thm",
    themeModifier: "thmm",
    border: "bd",
    borderBottom: "bdb",
    borderBottomLeftRadius: "bdblr",
    borderBottomRightRadius: "bdbrr",
    borderCollapse: "bdcl",
    borderColor: "bdc",
    borderImage: "bdi",
    borderImageOutset: "bdio",
    borderImageRepeat: "bdir",
    borderImageSlice: "bdis",
    borderImageSource: "bdisrc",
    borderImageWidth: "bdiw",
    borderLeft: "bdl",
    borderRadius: "bdr",
    borderRight: "bdrg",
    borderSpacing: "bdsp",
    borderStyle: "bdst",
    borderTop: "bdt",
    borderTopLeftRadius: "bdtlr",
    borderTopRightRadius: "bdtrr",
    borderWidth: "bdw",
    outline: "ol",
    outlineColor: "olc",
    outlineOffset: "olo",
    outlineStyle: "ols",
    outlineWidth: "olw",
    boxShadow: "bxsh",
    textShadow: "txsh",
    direction: "dir",
    fontDisplay: "fdi",
    fontFamily: "ff",
    fontFeatureSettings: "ffs",
    fontKerning: "fk",
    fontOpticalSizing: "fos",
    fontPalette: "fpl",
    fontSize: "fs",
    fontSizeAdjust: "fsa",
    fontSmooth: "fsm",
    fontStretch: "fsr",
    fontStyle: "fsy",
    fontSynthesis: "fsyn",
    fontVariant: "fv",
    fontVariationSettings: "fvs",
    fontWeight: "fw",
    hyphens: "hyp",
    letterSpacing: "ls",
    lineHeight: "lh",
    tabSize: "tsz",
    textAlign: "ta",
    textDecoration: "td",
    textDecorationColor: "tdc",
    textDecorationLine: "tdl",
    textDecorationStyle: "tds",
    textIndent: "ti",
    textOverflow: "tov",
    textStroke: "tsk",
    textTransform: "tt",
    unicodeBidi: "ub",
    verticalAlign: "va",
    whiteSpace: "ws",
    wordBreak: "wbr",
    wordSpacing: "wsp",
    wordWrap: "wwr",
    writingMode: "wm",
    captionSide: "cps",
    counterIncrement: "ci",
    counterReset: "cr",
    emptyCells: "ec",
    listStyle: "lst",
    listStyleImage: "lsi",
    listStylePosition: "lsp",
    listStyleType: "lsty",
    quotes: "qt",
    tableLayout: "tl",
    columnCount: "cc",
    columnFill: "cf",
    columnRule: "crl",
    columnRuleColor: "crlc",
    columnRuleStyle: "crls",
    columnRuleWidth: "crlw",
    columnSpan: "cspn",
    columnWidth: "cwi",
    columns: "col",
    backdropFilter: "bdf",
    boxDecorationBreak: "bxdb",
    clipPath: "cpth",
    filter: "fil",
    isolation: "iso",
    mixBlendMode: "mbm",
    objectFit: "obf",
    objectPosition: "obp",
    perspective: "prs",
    perspectiveOrigin: "prso",
    willChange: "wc",
    transform: "tf",
    transformOrigin: "tfo",
    transformStyle: "tfs",
    transition: "trn",
    transitionDelay: "trnd",
    transitionDuration: "trndr",
    transitionProperty: "trnp",
    transitionTimingFunction: "trntf",
    animation: "an",
    animationDelay: "and",
    animationDirection: "andr",
    animationDuration: "andur",
    animationFillMode: "anfm",
    animationIterationCount: "anic",
    animationName: "ann",
    animationPlayState: "anps",
    animationTimingFunction: "antf",
    scrollBehavior: "sb",
    scrollMargin: "smr",
    scrollMarginBottom: "smrb",
    scrollMarginLeft: "smrl",
    scrollMarginRight: "smrr",
    scrollMarginTop: "smrt",
    scrollPadding: "spd",
    scrollPaddingBottom: "spdb",
    scrollPaddingLeft: "spdl",
    scrollPaddingRight: "spdr",
    scrollPaddingTop: "spdt",
    scrollSnapAlign: "ssa",
    scrollSnapStop: "sss",
    scrollSnapType: "sst",
    breakAfter: "bka",
    breakBefore: "bkb",
    breakInside: "bki",
    pageBreakAfter: "pbka",
    pageBreakBefore: "pbkb",
    pageBreakInside: "pbki",
    accessKey: "ack",
    className: "cn",
    contentEditable: "ced",
    contextMenu: "cmu",
    draggable: "drg",
    hidden: "hid",
    id: "id",
    is: "is",
    lang: "lng",
    nonce: "nnc",
    spellCheck: "spc",
    tabIndex: "tbi",
    title: "ttl",
    translate: "trl",
    accept: "acp",
    acceptCharset: "accs",
    action: "act",
    autoComplete: "atc",
    autoFocus: "atf",
    capture: "cap",
    challenge: "chg",
    checked: "chk",
    cols: "cls",
    colSpan: "csn",
    controls: "ctl",
    default: "def",
    defer: "dfr",
    disabled: "dis",
    encType: "ect",
    form: "frm",
    formAction: "fac",
    formEncType: "fect",
    formMethod: "fme",
    formNoValidate: "fnv",
    formTarget: "ftg",
    high: "hgh",
    inputMode: "imd",
    kind: "knd",
    label: "lbl",
    list: "lis",
    loop: "lp",
    low: "lw",
    max: "mx",
    maxLength: "mxl",
    method: "mtd",
    min: "mn",
    minLength: "mnl",
    multiple: "mul",
    muted: "mut",
    name: "nm",
    open: "opn",
    optimum: "opt",
    pattern: "ptn",
    placeholder: "phd",
    readOnly: "ro",
    required: "req",
    reversed: "rev",
    rows: "rws",
    rowSpan: "rsn",
    selected: "sel",
    span: "spn",
    start: "srt",
    step: "stp",
    type: "typ",
    value: "val",
    download: "dl",
    href: "hrf",
    hrefLang: "hrl",
    ping: "png",
    referrerPolicy: "rfp",
    rel: "rl",
    target: "tgt",
    allow: "alw",
    allowFullScreen: "afs",
    allowPaymentRequest: "apr",
    alt: "alt",
    cellPadding: "cpg",
    cellSpacing: "csg",
    cite: "cit",
    coords: "crd",
    crossOrigin: "cor",
    dateTime: "dtm",
    fetchPriority: "fpr",
    headers: "hds",
    httpEquiv: "hte",
    integrity: "itg",
    isMap: "ism",
    keyType: "kty",
    loading: "ldg",
    manifest: "mft",
    media: "mda",
    poster: "pst",
    preload: "prl",
    radioGroup: "rdg",
    sandbox: "sbx",
    scoped: "scod",
    seamless: "sml",
    shape: "shp",
    sizes: "szs",
    src: "src",
    srcDoc: "srd",
    srcLang: "srl",
    srcSet: "srs",
    useMap: "ump",
    ariaActiveDescendant: "aad",
    ariaAtomic: "aat",
    ariaBusy: "abu",
    ariaChecked: "achk",
    ariaControls: "acl",
    ariaCurrent: "acr",
    ariaDescribedBy: "adb",
    ariaDetails: "adt",
    ariaDisabled: "adis",
    ariaDropEffect: "ade",
    ariaErrorMessage: "aem",
    ariaExpanded: "aexp",
    ariaGrabbed: "agr",
    ariaHasPopup: "ahp",
    ariaHidden: "ahid",
    ariaInvalid: "ainv",
    ariaLabel: "alb",
    ariaLabelledBy: "alby",
    ariaLive: "alv",
    ariaModal: "amod",
    ariaMultiSelectable: "ams",
    ariaOrientation: "aor",
    ariaOwns: "aow",
    ariaPosInSet: "apis",
    ariaPressed: "aprs",
    ariaReadOnly: "aro",
    ariaRelevant: "arl",
    ariaRequired: "areq",
    ariaSelected: "asel",
    ariaSetSize: "assz",
    ariaValueMax: "avmx",
    ariaValueMin: "avmn",
    ariaValueNow: "avn",
    role: "role",
    onInit: "@in",
    onRender: "@rn",
    onUpdate: "@up",
    onStateChange: "@sc",
    onStateUpdate: "@su",
    onClick: "@ck",
    onContextMenu: "@cm",
    onDblClick: "@dc",
    onMouseDown: "@md",
    onMouseEnter: "@me",
    onMouseLeave: "@ml",
    onMouseMove: "@mm",
    onMouseOut: "@mo",
    onMouseOver: "@mv",
    onMouseUp: "@mu",
    onKeyDown: "@kd",
    onKeyPress: "@kp",
    onKeyUp: "@ku",
    onBlur: "@bl",
    onFocus: "@fc",
    onFocusIn: "@fi",
    onFocusOut: "@fo",
    onBeforeInput: "@bi",
    onChange: "@cg",
    onFormData: "@fd",
    onInput: "@ip",
    onInvalid: "@iv",
    onReset: "@rs",
    onSearch: "@sr",
    onSelect: "@sl",
    onSubmit: "@sm",
    onTouchCancel: "@tc",
    onTouchEnd: "@te",
    onTouchMove: "@tm",
    onTouchStart: "@ts",
    onPointerCancel: "@pc",
    onPointerDown: "@pd",
    onPointerEnter: "@pe",
    onPointerLeave: "@ple",
    onPointerMove: "@pm",
    onPointerOut: "@po",
    onPointerOver: "@pov",
    onPointerUp: "@pu",
    onDrag: "@dg",
    onDragEnd: "@dge",
    onDragEnter: "@dgn",
    onDragLeave: "@dgl",
    onDragOver: "@dgo",
    onDragStart: "@dgs",
    onDrop: "@dp",
    onResize: "@rz",
    onScroll: "@scl",
    onWheel: "@wh",
    onCopy: "@cy",
    onCut: "@ct",
    onPaste: "@pt",
    onCompositionEnd: "@cpe",
    onCompositionStart: "@cps",
    onCompositionUpdate: "@cpu",
    onAnimationEnd: "@ae",
    onAnimationIteration: "@ai",
    onAnimationStart: "@as",
    onTransitionEnd: "@tre",
    onTransitionStart: "@trs",
    onAbort: "@ab",
    onCanPlay: "@cap",
    onCanPlayThrough: "@cpt",
    onDurationChange: "@duc",
    onEmptied: "@em",
    onEncrypted: "@enc",
    onEnded: "@end",
    onError: "@er",
    onLoad: "@ld",
    onLoadedData: "@ldd",
    onLoadedMetadata: "@ldm",
    onPause: "@pa",
    onPlay: "@pl",
    onPlaying: "@plg",
    onProgress: "@prg",
    onRateChange: "@rc",
    onSeeked: "@sk",
    onSeeking: "@skg",
    onStalled: "@stl",
    onSuspend: "@ssp",
    onTimeUpdate: "@tu",
    onVolumeChange: "@vc",
    onWaiting: "@wt",
    icon: "ico",
    iconText: "ict",
    lookup: "lkp",
    router: "rtr",
    shapeModifier: "shpm"
}, Nt = Object.create(null);
for(let t in Fn)Nt[Fn[t]] = t;
var Bl = Object.create(null);
for(let t in Fn){
    let e = Fn[t];
    if (Bl[e]) throw new Error(`Duplicate abbreviation "${e}" for "${t}" \u2014 already used by "${Bl[e]}"`);
    Bl[e] = t;
}
var Te = new Set([
    "state",
    "st",
    "scope",
    "scp",
    "attr",
    "at",
    "style",
    "sy",
    "data",
    "dt",
    "context",
    "ctx",
    "query",
    "qy",
    "class",
    "cl"
]);
function Dn(t) {
    return /^[A-Z]/.test(t);
}
function Ln(t) {
    return /^[:@.!$>&]/.test(t) || t.startsWith("> ");
}
function v0(t) {
    return t.trim().split(/\s+/).filter(Boolean);
}
function Wy(t) {
    return t.replace(/_/g, " ");
}
function C0(t) {
    if (!t || typeof t != "string") return {};
    let e = {}, r = v0(t);
    for (let n of r){
        if (n.startsWith("!")) {
            let c = n.slice(1), l = Nt[c] || c;
            e[l] = !1;
            continue;
        }
        let o = n.indexOf(":");
        if (o === -1) {
            let c = Nt[n] || n;
            e[c] = !0;
            continue;
        }
        let s = n.slice(0, o), i = n.slice(o + 1), a = Nt[s] || s;
        if (i.includes(",")) {
            e[a] = i.split(",").map(Wy);
            continue;
        }
        e[a] = Wy(i);
    }
    return e;
}
function Mn(t) {
    if (!t || typeof t != "object") return t;
    if (Array.isArray(t)) return t.map(function(r) {
        return r !== null && typeof r == "object" ? Mn(r) : r;
    });
    let e = {};
    for(let r in t){
        let n = t[r];
        if (Dn(r)) {
            e[r] = Vl(n);
            continue;
        }
        let o = Nt[r] || r;
        if (Ln(r) && o === r) {
            e[r] = Vl(n);
            continue;
        }
        if (Te.has(o) || Te.has(r)) {
            e[o] = n;
            continue;
        }
        e[o] = Vl(n);
    }
    return e;
}
function Vl(t) {
    return t == null || typeof t == "function" ? t : Array.isArray(t) ? t.map(function(e) {
        return e !== null && typeof e == "object" ? Mn(e) : e;
    }) : typeof t == "object" ? Mn(t) : t;
}
function Nn(t) {
    if (!t || typeof t != "object") return t;
    if (Array.isArray(t)) return t.map(function(r) {
        return r !== null && typeof r == "object" ? Nn(r) : r;
    });
    let e = {};
    if (typeof t.in == "string") {
        let r = C0(t.in);
        for(let n in r)e[n] = r[n];
    }
    for(let r in t){
        if (r === "in") continue;
        let n = t[r];
        if (Dn(r)) {
            e[r] = zl(n);
            continue;
        }
        let o = Nt[r] || r;
        if (Ln(r) && o === r) {
            e[r] = zl(n);
            continue;
        }
        if (Te.has(o) || Te.has(r)) {
            e[o] = n;
            continue;
        }
        e[o] = zl(n);
    }
    return e;
}
function zl(t) {
    return t == null || typeof t == "function" ? t : Array.isArray(t) ? t.map(function(e) {
        return e !== null && typeof e == "object" ? Nn(e) : e;
    }) : typeof t == "object" ? Nn(t) : t;
}
function A0(t) {
    let e = "", r = 0;
    for(; r < t.length;){
        if (t[r] === "\\" && r + 1 < t.length) {
            let n = t[r + 1];
            if (n === "," || n === "_" || n === "\\") {
                e += n, r += 2;
                continue;
            }
        }
        t[r] === "_" ? e += " " : e += t[r], r++;
    }
    return e;
}
function E0(t) {
    let e = [], r = "", n = 0;
    for(; n < t.length;){
        if (t[n] === "\\" && n + 1 < t.length) {
            r += t[n] + t[n + 1], n += 2;
            continue;
        }
        if (t[n] === ",") {
            e.push(r), r = "", n++;
            continue;
        }
        r += t[n], n++;
    }
    return e.push(r), e;
}
function Hy(t) {
    return t.startsWith("#") && /^#-?\d+(\.\d+)?$/.test(t) ? Number(t.slice(1)) : A0(t);
}
function Ul(t) {
    if (!t || typeof t != "string") return {};
    let e = {}, r = t.trim().split(/\s+/).filter(Boolean);
    for (let n of r){
        if (n.startsWith("!")) {
            let l = n.slice(1), f = Nt[l] || l;
            e[f] = !1;
            continue;
        }
        let o = n.indexOf(":");
        if (o === -1) {
            let l = Nt[n] || n;
            e[l] = !0;
            continue;
        }
        let s = n.slice(0, o), i = n.slice(o + 1), a = Nt[s] || s, c = E0(i);
        if (c.length > 1) {
            e[a] = c.map(Hy);
            continue;
        }
        e[a] = Hy(i);
    }
    return e;
}
function jn(t) {
    if (!t || typeof t != "object") return t;
    if (Array.isArray(t)) return t.map(function(r) {
        return r !== null && typeof r == "object" ? jn(r) : r;
    });
    let e = {};
    if (typeof t.in == "string") {
        let r = Ul(t.in);
        for(let n in r)e[n] = r[n];
    }
    for(let r in t){
        if (r === "in") continue;
        let n = t[r];
        if (Dn(r)) {
            typeof n == "string" ? e[r] = Ul(n) : e[r] = Wl(n);
            continue;
        }
        let o = Nt[r] || r;
        if (Ln(r) && o === r) {
            typeof n == "string" ? e[r] = Ul(n) : e[r] = Wl(n);
            continue;
        }
        if (Te.has(o) || Te.has(r)) {
            e[o] = n;
            continue;
        }
        e[o] = Wl(n);
    }
    return e;
}
function Wl(t) {
    return t == null || typeof t == "function" ? t : Array.isArray(t) ? t.map(function(e) {
        return e !== null && typeof e == "object" ? jn(e) : e;
    }) : typeof t == "object" ? jn(t) : t;
}
var T0 = {
    shorten: Mn,
    stringify: Nn,
    stringifyFurther: jn
};
function O0(t, e) {
    if (!t || typeof t != "object") return t;
    if (Array.isArray(t)) return t.map((n)=>e(n));
    let r = {};
    for(let n in t){
        let o = t[n];
        r[n] = o && typeof o == "object" ? e(o) : o;
    }
    return r;
}
var R0 = [
    "components",
    "pages",
    "snippets"
], Js = {
    name: "shorthand",
    prepareContext (t) {
        let e = t.shorthand;
        if (!e) return;
        let n = T0[e === !0 ? "shorten" : e];
        if (n) {
            for (let o of R0)t[o] && (t[o] = O0(t[o], n));
            t.app && typeof t.app == "object" && (t.app = n(t.app));
        }
    }
};
var P0 = 0, I0 = ()=>`${Date.now().toString(36)}-${(P0++).toString(36)}`, U = (t, e, r = {})=>({
        id: I0(),
        ts: Date.now(),
        type: t,
        level: e,
        ...r
    }), $0 = (t)=>{
    let e = [], r = t, n = 0;
    for(; r && n < 32;)r.key != null && e.unshift(String(r.key)), r = r.parent, n++;
    return e.join(" > ");
}, Ir = (t)=>t ? {
        key: t.key != null ? String(t.key) : null,
        name: t.__name || t.name || null,
        path: $0(t),
        tag: t.tag || null,
        component: t.component || null,
        route: t.context?.routerOptions?.currentRoute || null
    } : null;
var $r = (t)=>t?.context?.analyze, F0 = {
    init: {
        category: "lifecycle",
        type: "lifecycle",
        level: "debug"
    },
    create: {
        category: "lifecycle",
        type: "lifecycle",
        level: "debug"
    },
    render: {
        category: "lifecycle",
        type: "lifecycle",
        level: "debug"
    },
    beforeRemove: {
        category: "lifecycle",
        type: "lifecycle",
        level: "debug"
    },
    remove: {
        category: "lifecycle",
        type: "lifecycle",
        level: "debug"
    }
}, D0 = (t, { category: e, type: r, level: n })=>(o)=>{
        let s = $r(o);
        !s || !s.shouldCapture(e) || s.emit(U(r, n, {
            hook: t,
            element: Ir(o)
        }));
    }, qy = (t)=>(e, r)=>{
        let n = $r(e);
        !n || !n.shouldCapture("state") || n.emit(U("state", "debug", {
            hook: t,
            element: Ir(e),
            changedKeys: r?.changedKeys || null
        }));
    }, Bn = {
    name: "analyze",
    error (t, e) {
        let r = $r(t);
        if (!r || r.config.enabled === !1 || !r.shouldCapture("errors")) return;
        let n = e?.error || e?.err || (e instanceof Error ? e : null);
        r.emit(U("error", "error", {
            hook: e?.hook || "error",
            element: Ir(t),
            error: n,
            message: n?.message || (typeof e?.message == "string" ? e.message : null)
        }));
    },
    renderRouter (t) {
        let e = $r(t);
        e && (!e.shouldCapture("navigation") && !e.shouldCapture("lifecycle") || e.emit(U("navigation", "info", {
            hook: "renderRouter",
            route: t.context?.routerOptions?.currentRoute || null
        })));
    },
    beforeUpdate (t) {
        let e = $r(t);
        !e || !e.shouldCapture("updates") || t.__ref && (t.__ref.__analyzeUpdateStart = typeof performance < "u" ? performance.now() : Date.now());
    },
    update (t) {
        let e = $r(t);
        if (!e || !e.shouldCapture("updates")) return;
        let r = null;
        t.__ref?.__analyzeUpdateStart != null && (r = (typeof performance < "u" ? performance.now() : Date.now()) - t.__ref.__analyzeUpdateStart, t.__ref.__analyzeUpdateStart = null), e.emit(U("update", "debug", {
            hook: "update",
            element: Ir(t),
            durationMs: r
        }));
    },
    beforeStateUpdate: qy("beforeStateUpdate"),
    stateUpdate: qy("stateUpdate")
};
for (let [t, e] of Object.entries(F0))Bn[t] = D0(t, e);
P();
var Qs = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
    trace: 4
};
var Hl = (t, e)=>{
    let r = Qs[t], n = Qs[e];
    return r == null || n == null ? !0 : r <= n;
}, ti = (t)=>Qs[t] != null ? t : "warn";
P();
var ei = /password|token|secret|ssn|card|cvv|pin|apikey|api_key|auth|email|otp/i;
var L0 = (t, e)=>{
    for (let r of e)if (r instanceof RegExp) {
        if (r.test(t)) return !0;
    } else if (typeof r == "string" && t.toLowerCase().includes(r.toLowerCase())) return !0;
    return !1;
}, M0 = (t, e)=>{
    if (e !== "redact") {
        if (e === "hash") {
            let r = 0, n = String(t);
            for(let o = 0; o < n.length; o++)r = (r << 5) - r + n.charCodeAt(o) | 0;
            return `#${(r >>> 0).toString(36)}`;
        }
        return "***";
    }
}, ql = (t, e, r, n)=>{
    if (n > 6 || t == null || typeof t != "object") return t;
    if (Array.isArray(t)) return t.map((s)=>ql(s, e, r, n + 1));
    let o = {};
    for (let s of Object.keys(t))if (L0(s, e) || ei.test(s)) {
        let a = M0(t[s], r);
        a !== void 0 && (o[s] = a);
    } else o[s] = ql(t[s], e, r, n + 1);
    return o;
}, Gl = (t = [], e = "mask")=>{
    let r = Array.isArray(t) ? t : [
        t
    ];
    return (n)=>{
        if (!n) return n;
        let { id: o, ts: s, type: i, level: a, hook: c, error: l, message: f, durationMs: p, element: u, target: d, ...h } = n, g = ql(h, r, e, 0);
        return {
            id: o,
            ts: s,
            type: i,
            level: a,
            hook: c,
            error: l,
            message: f,
            durationMs: p,
            element: u,
            target: d,
            ...g
        };
    };
};
var Gy = (t)=>{
    let e = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`, r = typeof navigator < "u" ? navigator.userAgent : null, n = t.config.buildHash || null, o = t.config.appId || null;
    return (s)=>{
        if (!s) return s;
        let i = t.context?.routerOptions?.currentRoute || null, a = k, c = a && a.innerWidth ? {
            w: a.innerWidth,
            h: a.innerHeight
        } : null;
        return {
            ...s,
            session: e,
            app: {
                id: o,
                build: n,
                route: i
            },
            meta: {
                ua: r,
                viewport: c
            }
        };
    };
}, Ky = ()=>(t)=>{
        if (!t) return t;
        if (t.element && typeof t.element == "object") {
            let e = t.element;
            (e.node || e.parent || e.__ref) && (t = {
                ...t,
                element: {
                    key: e.key != null ? String(e.key) : null,
                    name: e.__name || e.name || null,
                    tag: e.tag || null,
                    component: e.component || null
                }
            });
        }
        return t.error instanceof Error && (t = {
            ...t,
            error: {
                name: t.error.name,
                message: t.error.message,
                stack: t.error.stack
            }
        }), t;
    }, Yy = (t = 1e3, e = 500)=>{
    let r = new Map;
    return (n)=>{
        if (!n) return n;
        let o = `${n.type}:${n.level}:${n.message || ""}:${n.error?.message || ""}`, s = r.get(o), i = n.ts || Date.now();
        if (s && i - s < t) return null;
        if (r.set(o, i), r.size > e) {
            let a = Math.ceil(e / 10), c = 0;
            for (let l of r.keys()){
                if (c++ >= a) break;
                r.delete(l);
            }
        }
        return n;
    };
}, Xy = (t)=>(e)=>{
        if (!e) return e;
        let r = t[e.type];
        return r == null || r >= 1 ? e : Math.random() > r ? null : e;
    }, Zy = {
    redact: (t)=>Gl(t.config.redact || [], t.config.maskStrategy),
    enrich: (t)=>Gy(t),
    summarize: ()=>Ky(),
    dedupe: (t)=>Yy(t.config.cache?.dedupeWindowMs || 1e3),
    sample: (t)=>Xy(t.config.sample || {})
}, N0 = (t, e)=>{
    if (typeof t == "function") return t;
    if (typeof t == "string") {
        let r = Zy[t];
        return r ? r(e) : null;
    }
    return null;
}, Kl = (t)=>{
    let e = t.config, r = Array.isArray(e.transformers) ? e.transformers.slice() : [], n = r.findIndex((s)=>s === "redact");
    n >= 0 && r.splice(n, 1);
    let o = [];
    e.redact !== !1 && o.push(Zy.redact(t));
    for (let s of r){
        let i = N0(s, t);
        i && o.push(i);
    }
    return (s)=>{
        let i = s;
        for (let a of o){
            if (i == null) return null;
            let c = a(i);
            if (c == null) return null;
            if (Array.isArray(c)) {
                let l = o.slice(o.indexOf(a) + 1), f = [];
                for (let p of c){
                    let u = p, d = !1;
                    for (let h of l)if (u = h(u), u == null) {
                        d = !0;
                        break;
                    }
                    !d && u != null && f.push(u);
                }
                return f;
            }
            i = c;
        }
        return i;
    };
};
P();
P();
var ri = typeof k < "u" && typeof k.document < "u", j0 = 5e3, B0 = 50, V0 = 3, z0 = 1500, U0 = 1e3, Jy = (t)=>t ? t.level === "error" || t.type === "error" ? "bug" : t.type === "network" ? "network" : t.type === "console" ? t.level === "error" || t.level === "warn" ? "bug" : "log" : t.level === "warn" ? "bug" : t.level === "info" ? "log" : "verbose" : "verbose", W0 = (t)=>{
    try {
        return JSON.stringify(t);
    } catch  {
        return null;
    }
}, H0 = ()=>{
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || null;
    } catch  {
        return null;
    }
}, q0 = (t)=>{
    if (!t) return null;
    let e = String(t), r;
    return (r = e.match(/Edg\/([\d.]+)/)) ? {
        name: "Edge",
        version: r[1]
    } : (r = e.match(/OPR\/([\d.]+)/)) ? {
        name: "Opera",
        version: r[1]
    } : (r = e.match(/Firefox\/([\d.]+)/)) ? {
        name: "Firefox",
        version: r[1]
    } : /Chrome\/([\d.]+)/.test(e) && /Safari\//.test(e) ? (r = e.match(/Chrome\/([\d.]+)/), {
        name: "Chrome",
        version: r[1]
    }) : (r = e.match(/Version\/([\d.]+).*Safari/)) ? {
        name: "Safari",
        version: r[1]
    } : {
        name: null,
        version: null
    };
}, G0 = ()=>{
    if (!ri) return null;
    try {
        let t = k.document?.documentElement?.getAttribute("data-theme") || null, e = typeof k.matchMedia == "function" ? k.matchMedia("(prefers-color-scheme: dark)").matches : null;
        return {
            active: t || (e ? "dark" : e === !1 ? "light" : null),
            forced: t || null,
            prefers: e == null ? null : e ? "dark" : "light"
        };
    } catch  {
        return null;
    }
}, K0 = ()=>{
    if (!ri) return null;
    let t = k.location, e = typeof navigator < "u" ? navigator : null, r = typeof screen < "u" ? screen : null;
    return {
        url: t?.href || null,
        path: t?.pathname || null,
        referrer: k.document?.referrer || null,
        title: k.document?.title || null,
        ua: e?.userAgent || null,
        browser: q0(e?.userAgent),
        language: e?.language || null,
        languages: e?.languages || null,
        timezone: H0(),
        viewport: k.innerWidth ? {
            w: k.innerWidth,
            h: k.innerHeight,
            dpr: k.devicePixelRatio || 1
        } : null,
        screen: r ? {
            w: r.width || null,
            h: r.height || null,
            availW: r.availWidth || null,
            availH: r.availHeight || null,
            colorDepth: r.colorDepth || null,
            orientation: r.orientation?.type || null
        } : null,
        theme: G0()
    };
}, Yl = (t = {})=>{
    let e = t.url, r = typeof t.transport == "function" ? t.transport : null;
    if (!e && !r) return ()=>{};
    let n = t.apiKey || null, o = t.appKey || t.appId || null, s = t.tenantKey || t.tenant || null, i = t.release || null, a = t.env || null, c = t.sdk || null, l = typeof t.getAuth == "function" ? t.getAuth : null, f = typeof t.getContext == "function" ? t.getContext : null, p = typeof t.classify == "function" ? t.classify : Jy, u = typeof t.beforeSend == "function" ? t.beforeSend : null, d = t.batchMs != null ? t.batchMs : j0, h = t.maxBatch || B0, g = t.maxRetries != null ? t.maxRetries : V0, m = t.backoffMs || z0, y = t.queueLimit || U0, b = t.sampleRate != null ? t.sampleRate : 1, w = t.sessionId || (typeof crypto < "u" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`), x = [], v = [], A = null, R = null, W = ()=>{
        A || !x.length || (A = setTimeout(J, d));
    }, O = (I)=>{
        if (R) return;
        let H = m * Math.pow(2, Math.max(0, I - 1));
        R = setTimeout(()=>{
            if (R = null, !v.length) return;
            let G = v.shift();
            V(G.envelope, G.attempt);
        }, H);
    }, L = (I)=>{
        let H = f ? Y0(f) : null, G = {
            v: 1,
            session: {
                id: w,
                sentAt: Date.now()
            },
            app: {
                key: o,
                release: i,
                env: a
            },
            tenant: s,
            sdk: c,
            page: K0(),
            user: H?.user || null,
            traits: H?.traits || null,
            tags: H?.tags || null,
            events: I
        };
        if (u) try {
            return u(G) || null;
        } catch  {
            return G;
        }
        return G;
    }, V = async (I, H = 1)=>{
        if (I) try {
            let G = !0;
            if (r) {
                let it = await r(I);
                G = it !== !1 && it?.ok !== !1;
            } else G = await X0(e, I, {
                apiKey: n,
                getAuth: l
            });
            !G && H < g && (v.push({
                envelope: I,
                attempt: H + 1
            }), O(H + 1));
        } catch  {
            H < g && (v.push({
                envelope: I,
                attempt: H + 1
            }), O(H + 1));
        }
    }, J = (I = !1)=>{
        if (A && (clearTimeout(A), A = null), !x.length) return;
        let H = x;
        x = [];
        let G = L(H);
        if (G) {
            if (I && ri && navigator.sendBeacon && e) {
                let it = W0(G);
                if (it) try {
                    navigator.sendBeacon(e, new k.Blob([
                        it
                    ], {
                        type: "application/json"
                    }));
                    return;
                } catch  {}
            }
            V(G);
        }
    };
    ri && (k.addEventListener("pagehide", ()=>J(!0), {
        passive: !0
    }), k.addEventListener("beforeunload", ()=>J(!0), {
        passive: !0
    }), k.addEventListener("visibilitychange", ()=>{
        k.document.visibilityState === "hidden" && J(!0);
    }, {
        passive: !0
    }));
    let M = (I)=>{
        if (!I || b < 1 && Math.random() > b) return;
        let H = {
            ...I,
            log_type: p(I)
        };
        x.push(H), x.length > y && (x = x.slice(-y)), x.length >= h ? J() : W();
    };
    return M.flush = ()=>J(!1), M.sessionId = w, M;
}, Y0 = (t)=>{
    try {
        return t();
    } catch  {
        return null;
    }
}, X0 = async (t, e, { apiKey: r, getAuth: n })=>{
    let o = {
        "Content-Type": "application/json",
        "X-Analyze-Beacon": "1"
    };
    if (r && (o["X-Analyze-Key"] = r), n) try {
        let s = await n();
        s && (o.Authorization = `Bearer ${s}`);
    } catch  {}
    try {
        return (await fetch(t, {
            method: "POST",
            headers: o,
            body: JSON.stringify(e),
            keepalive: !0,
            credentials: "omit",
            mode: "cors"
        })).ok;
    } catch  {
        return !1;
    }
};
var Z0 = {
    error: "\x1B[31m",
    warn: "\x1B[33m",
    info: "\x1B[36m",
    debug: "\x1B[90m",
    trace: "\x1B[90m"
}, J0 = "\x1B[0m", ni = typeof k < "u" && typeof k.document < "u", tb = (t = {})=>{
    let e = t.minLevel || null, r = console.error.bind(console), n = console.warn.bind(console), o = console.log.bind(console);
    return (s)=>{
        if (!s) return;
        let i = s.level === "error" ? r : s.level === "warn" ? n : o, a = `[analyze:${s.type}]`;
        if (ni) i(a, s);
        else {
            let c = Z0[s.level] || "";
            i(`${c}${a}${J0}`, s);
        }
    };
}, eb = (t, e = {})=>{
    let r = e.max || t.config.cache?.max || 500, n = new Array(r), o = 0, s = 0, i = (a)=>{
        n[o] = a, o = (o + 1) % r, s < r && s++;
    };
    return t.__memory = {
        push: i,
        snapshot: ()=>{
            let a = new Array(s), c = (o - s + r) % r;
            for(let l = 0; l < s; l++)a[l] = n[(c + l) % r];
            return a;
        },
        query: (a = {})=>{
            let c = t.__memory.snapshot(), l = a.sinceMs ? Date.now() - a.sinceMs : 0;
            return c.filter((f)=>!(!f || a.level && f.level !== a.level || a.type && f.type !== a.type || l && f.ts < l));
        },
        clear: ()=>{
            o = 0, s = 0;
        }
    }, i;
}, rb = (t = {})=>{
    let e = t.url, r = t.batchMs != null ? t.batchMs : 5e3, n = t.maxBatch || 50;
    if (!e) return ()=>{};
    let o = [], s = null, i = ()=>{
        if (s && (clearTimeout(s), s = null), !o.length) return;
        let c = JSON.stringify({
            events: o
        });
        o = [];
        let l = ni ? new k.Blob([
            c
        ], {
            type: "application/json"
        }) : c;
        if (ni && navigator.sendBeacon) try {
            navigator.sendBeacon(e, l);
            return;
        } catch  {}
        typeof fetch < "u" && fetch(e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Analyze-Beacon": "1"
            },
            body: c,
            keepalive: !0
        }).catch(()=>{});
    };
    ni && (k.addEventListener("pagehide", i, {
        passive: !0
    }), k.addEventListener("beforeunload", i, {
        passive: !0
    }));
    let a = (c)=>{
        c && (o.push(c), o.length >= n ? i() : s || (s = setTimeout(i, r)));
    };
    return a.flush = i, a;
}, Qy = {
    console: tb,
    memory: eb,
    beacon: rb,
    remote: Yl
}, Xl = (t)=>{
    let e = Array.isArray(t.config.sinks) ? t.config.sinks : [
        "console"
    ], r = [];
    for (let n of e)if (typeof n == "function") r.push(n);
    else if (typeof n == "string") {
        let o = Qy[n];
        if (!o) continue;
        r.push(n === "memory" ? o(t, {}) : o({}));
    } else if (n && typeof n == "object" && n.type) {
        let o = Qy[n.type];
        if (!o) continue;
        r.push(n.type === "memory" ? o(t, n) : o(n));
    }
    return r;
};
P();
var Q0 = typeof k < "u" && typeof k.document < "u", tk = new Set([
    "password",
    "hidden"
]), nb = (t, e)=>{
    let r = 0, n = null, o = null;
    return (...s)=>{
        let i = Date.now();
        i - r >= e ? (r = i, t(...s)) : (o = s, n || (n = setTimeout(()=>{
            r = Date.now(), n = null, o && (t(...o), o = null);
        }, e - (i - r))));
    };
}, Zl = "__analyzeKeyPath", Fr = (t)=>{
    let e = t.target;
    if (!e) return {
        selector: null,
        key: null,
        path: null
    };
    if (e[Zl]) return e[Zl];
    let r = [], n = e, o = 0, s = null;
    for(; n && o < 64;){
        if (n.getAttribute) {
            let a = n.getAttribute("data-key");
            a && (s == null && (s = a), r.unshift(a));
        }
        n = n.parentNode, o++;
    }
    let i;
    if (r.length) i = {
        selector: null,
        key: s,
        path: r.join(" > "),
        tag: e.tagName?.toLowerCase() || null
    };
    else {
        let a = (e.tagName || "unknown").toLowerCase(), c = e.id ? `#${e.id}` : "", l = e.className && typeof e.className == "string" ? "." + e.className.trim().split(/\s+/).slice(0, 2).join(".") : "";
        i = {
            selector: `${a}${c}${l}`,
            key: null,
            path: null
        };
    }
    try {
        e[Zl] = i;
    } catch  {}
    return i;
}, ek = (t, e)=>{
    if (e === "mask") return "***";
    if (e !== "redact") {
        if (e === "hash") {
            let r = 0, n = String(t || "");
            for(let o = 0; o < n.length; o++)r = (r << 5) - r + n.charCodeAt(o) | 0;
            return `#${(r >>> 0).toString(36)}`;
        }
        return "***";
    }
}, rk = (t)=>!!(!t || t.tagName === "INPUT" && tk.has(t.type) || ei.test(t.name || "") || ei.test(t.id || "") || t.dataset?.analyze === "skip"), Jl = (t)=>{
    if (!Q0) return;
    let e = t.config.capture, r = t.config.throttle, n = t.__teardown, o = (s, i, a, c)=>{
        s.addEventListener(i, a, c), n.push(()=>s.removeEventListener(i, a, c));
    };
    if (e.errors && (o(k, "error", (s)=>{
        t.emit(U("error", "error", {
            hook: "window.onerror",
            message: s.message || null,
            error: s.error || null,
            source: s.filename || null,
            line: s.lineno || null,
            col: s.colno || null
        }));
    }), o(k, "unhandledrejection", (s)=>{
        let i = s.reason, a = i instanceof Error ? i : null;
        t.emit(U("error", "error", {
            hook: "unhandledrejection",
            message: a?.message || (typeof i == "string" ? i : "Unhandled promise rejection"),
            error: a
        }));
    })), e.pointer) {
        o(k, "click", (i)=>{
            t.emit(U("pointer", "info", {
                hook: "click",
                target: Fr(i),
                button: i.button,
                x: i.clientX,
                y: i.clientY,
                modifiers: ob(i)
            }));
        }, {
            passive: !0,
            capture: !0
        }), o(k, "dblclick", (i)=>{
            t.emit(U("pointer", "info", {
                hook: "dblclick",
                target: Fr(i),
                x: i.clientX,
                y: i.clientY
            }));
        }, {
            passive: !0,
            capture: !0
        }), o(k, "contextmenu", (i)=>{
            t.emit(U("pointer", "info", {
                hook: "contextmenu",
                target: Fr(i),
                x: i.clientX,
                y: i.clientY
            }));
        }, {
            passive: !0,
            capture: !0
        });
        let s = nb((i)=>{
            t.emit(U("pointer", "trace", {
                hook: "pointermove",
                x: i.clientX,
                y: i.clientY
            }));
        }, r.pointermove);
        o(k, "pointermove", s, {
            passive: !0
        });
    }
    if (e.keyboard && o(k, "keydown", (s)=>{
        t.emit(U("keyboard", "info", {
            hook: "keydown",
            code: s.code,
            key: s.key && s.key.length === 1 ? "\xB7" : s.key,
            modifiers: ob(s),
            target: Fr(s)
        }));
    }, {
        passive: !0,
        capture: !0
    }), e.forms) {
        let s = (i)=>{
            let a = i.target;
            if (!a || !a.tagName || ![
                "INPUT",
                "TEXTAREA",
                "SELECT"
            ].includes(a.tagName)) return;
            let l = rk(a), f = a.dataset?.analyze === "track", p = null;
            f && !l ? p = a.value : t.config.maskFormValues !== !1 && (p = ek(a.value, t.config.maskStrategy)), t.emit(U("forms", "info", {
                hook: i.type,
                target: Fr(i),
                field: {
                    name: a.name || null,
                    type: a.type || a.tagName.toLowerCase()
                },
                value: p
            }));
        };
        o(k, "input", s, {
            passive: !0,
            capture: !0
        }), o(k, "change", s, {
            passive: !0,
            capture: !0
        }), o(k, "submit", (i)=>{
            t.emit(U("forms", "info", {
                hook: "submit",
                target: Fr(i)
            }));
        }, {
            passive: !0,
            capture: !0
        });
    }
    if (e.scroll) {
        let s = nb(()=>{
            t.emit(U("scroll", "trace", {
                hook: "scroll",
                x: k.scrollX,
                y: k.scrollY
            }));
        }, r.scroll);
        o(k, "scroll", s, {
            passive: !0,
            capture: !0
        });
    }
    if (e.viewport) {
        let s = yo(()=>{
            t.emit(U("viewport", "info", {
                hook: "resize",
                w: k.innerWidth,
                h: k.innerHeight,
                dpr: k.devicePixelRatio || 1
            }));
        }, r.resize);
        o(k, "resize", s, {
            passive: !0
        }), o(k, "orientationchange", ()=>{
            t.emit(U("viewport", "info", {
                hook: "orientationchange",
                orientation: typeof screen < "u" && screen.orientation ? screen.orientation.type : null
            }));
        }, {
            passive: !0
        }), o(k.document, "visibilitychange", ()=>{
            t.emit(U("viewport", "info", {
                hook: "visibilitychange",
                hidden: k.document.hidden
            }));
        }, {
            passive: !0
        }), t.emit(U("viewport", "info", {
            hook: "initial",
            w: k.innerWidth,
            h: k.innerHeight,
            dpr: k.devicePixelRatio || 1
        }));
    }
    if (e.console) for (let s of [
        "log",
        "warn",
        "error",
        "debug"
    ]){
        let i = console[s];
        console[s] = function(...a) {
            try {
                t.emit(U("console", s === "error" ? "error" : s === "warn" ? "warn" : "debug", {
                    hook: `console.${s}`,
                    args: a.map(sb)
                }));
            } catch  {}
            return i.apply(console, a);
        }, n.push(()=>{
            console[s] = i;
        });
    }
    if (e.performance && typeof PerformanceObserver < "u") try {
        let s = new PerformanceObserver((a)=>{
            for (let c of a.getEntries())t.emit(U("performance", "info", {
                hook: c.entryType,
                name: c.name,
                startTime: c.startTime,
                duration: c.duration,
                value: c.value != null ? c.value : null
            }));
        }), i = [
            "largest-contentful-paint",
            "layout-shift",
            "longtask",
            "paint",
            "first-input",
            "event"
        ];
        for (let a of i)try {
            s.observe({
                type: a,
                buffered: !0
            });
        } catch  {}
        n.push(()=>s.disconnect());
    } catch  {}
}, ob = (t)=>({
        shift: !!t.shiftKey,
        ctrl: !!t.ctrlKey,
        alt: !!t.altKey,
        meta: !!t.metaKey
    }), nk = (t)=>{
    let e = {
        name: t.name || "Error",
        message: typeof t.message == "string" ? t.message : String(t),
        stack: typeof t.stack == "string" ? t.stack : null
    };
    return t.cause !== void 0 && (e.cause = sb(t.cause)), e;
}, sb = (t)=>{
    if (t == null) return t;
    if (t instanceof Error) return nk(t);
    if (typeof t == "object") try {
        return JSON.parse(JSON.stringify(t));
    } catch  {
        return String(t);
    }
    return t;
};
P();
var ok = typeof k < "u" && typeof k.document < "u";
var Ql = (t)=>{
    if (ok && t.config.capture.network) {
        if (typeof k.fetch == "function") {
            let e = k.fetch.bind(k), r = function(n, o) {
                if (o?.headers?.["X-Analyze-Beacon"]) return e(n, o);
                let s = typeof n == "string" ? n : n && n.url || "", i = (o?.method || typeof n == "object" && n?.method || "GET").toUpperCase(), a = typeof performance < "u" ? performance.now() : Date.now();
                return t.emit(U("network", "info", {
                    hook: "fetch.start",
                    source: "window.fetch",
                    url: s,
                    method: i
                })), e(n, o).then((c)=>{
                    let l = (typeof performance < "u" ? performance.now() : Date.now()) - a;
                    return t.emit(U("network", c.ok ? "info" : "warn", {
                        hook: "fetch.success",
                        source: "window.fetch",
                        url: s,
                        method: i,
                        status: c.status,
                        ok: c.ok,
                        durationMs: l
                    })), c;
                }).catch((c)=>{
                    let l = (typeof performance < "u" ? performance.now() : Date.now()) - a;
                    throw t.emit(U("network", "error", {
                        hook: "fetch.error",
                        source: "window.fetch",
                        url: s,
                        method: i,
                        error: c,
                        durationMs: l
                    })), c;
                });
            };
            k.fetch = r, t.__teardown.push(()=>{
                k.fetch = e;
            });
        }
        if (typeof k.XMLHttpRequest == "function") {
            let e = k.XMLHttpRequest, r = e.prototype.open, n = e.prototype.send;
            e.prototype.open = function(o, s) {
                return this.__analyze = {
                    method: String(o).toUpperCase(),
                    url: String(s)
                }, r.apply(this, arguments);
            }, e.prototype.send = function(o) {
                let s = this.__analyze;
                if (!s) return n.apply(this, arguments);
                let i = typeof performance < "u" ? performance.now() : Date.now();
                t.emit(U("network", "info", {
                    hook: "xhr.start",
                    source: "xhr",
                    url: s.url,
                    method: s.method
                }));
                let a = ()=>{
                    let l = (typeof performance < "u" ? performance.now() : Date.now()) - i, f = this.status >= 200 && this.status < 400;
                    t.emit(U("network", f ? "info" : "warn", {
                        hook: "xhr.success",
                        source: "xhr",
                        url: s.url,
                        method: s.method,
                        status: this.status,
                        ok: f,
                        durationMs: l
                    }));
                }, c = ()=>{
                    let l = (typeof performance < "u" ? performance.now() : Date.now()) - i;
                    t.emit(U("network", "error", {
                        hook: "xhr.error",
                        source: "xhr",
                        url: s.url,
                        method: s.method,
                        status: this.status,
                        durationMs: l
                    }));
                };
                return this.addEventListener("loadend", a), this.addEventListener("error", c), n.apply(this, arguments);
            }, t.__teardown.push(()=>{
                e.prototype.open = r, e.prototype.send = n;
            });
        }
    }
};
var sk = {
    errors: !0,
    warnings: !0,
    pointer: !1,
    keyboard: !1,
    forms: !1,
    scroll: !1,
    viewport: !1,
    network: !1,
    performance: !1,
    navigation: !1,
    console: !1,
    lifecycle: !1,
    state: !1,
    updates: !1,
    replay: !1,
    telemetry: !1
}, ik = {
    errors: !0,
    warnings: !0,
    pointer: !0,
    keyboard: !0,
    forms: !0,
    scroll: !0,
    viewport: !0,
    navigation: !0,
    state: !0
}, ak = {
    errors: !0,
    warnings: !0,
    pointer: !0,
    navigation: !0,
    performance: !0,
    viewport: !0
}, ck = {
    errors: !0,
    warnings: !0,
    console: !0,
    network: !0,
    navigation: !0,
    performance: !0,
    viewport: !0,
    lifecycle: !1,
    state: !1,
    updates: !1
}, lk = (t)=>{
    let e = {
        ...sk,
        ...t
    };
    return e.replay && Object.assign(e, ik), e.telemetry && Object.assign(e, ak), e.remote && Object.assign(e, ck), e;
}, fk = 64, uk = ()=>{
    if (typeof k > "u" || !k.location) return null;
    try {
        let e = new URLSearchParams(k.location.search).get("analyze");
        return e || null;
    } catch  {
        return null;
    }
}, tf = (t = {})=>{
    let e = t === !0 ? {} : {
        ...t
    };
    e.capture = lk(e.capture || {});
    let r = uk();
    (r === "debug" || e.debug) && (e.level = "debug", e.debug = !0, e.capture = {
        ...e.capture,
        lifecycle: !0,
        state: !0,
        updates: !0,
        console: !0
    }), r === "off" && (e.enabled = !1), e.level = ti(e.level || "warn"), e.cache = {
        max: 500,
        dedupeWindowMs: 1e3,
        ...e.cache || {}
    }, e.throttle = {
        pointermove: 80,
        mousemove: 80,
        scroll: 100,
        resize: 200,
        ...e.throttle || {}
    }, e.maskFormValues == null && (e.maskFormValues = !0), e.maskStrategy || (e.maskStrategy = "mask"), Array.isArray(e.sinks) || (e.sinks = [
        "console",
        "memory"
    ]), Array.isArray(e.transformers) || (e.transformers = [
        "enrich",
        "summarize"
    ]);
    let n = {
        config: e,
        context: null,
        __ready: !1,
        __paused: !1,
        __preBuffer: [],
        __teardown: [],
        __pipeline: null,
        __sinks: null,
        __memory: null,
        __initialSnapshot: null
    }, o = ()=>{
        n.__pipeline || (n.__pipeline = Kl(n), n.__sinks = Xl(n));
    };
    return n.shouldCapture = (s)=>n.config.enabled === !1 ? !1 : !!n.config.capture[s], n.emit = (s)=>{
        if (s && n.config.enabled !== !1 && !n.__paused && Hl(s.level, n.config.level)) {
            if (!n.__ready) {
                if (s.level !== "error" && !n.config.captureDuringHydration) return;
                n.__preBuffer.length < fk && n.__preBuffer.push(s);
                return;
            }
            o(), ib(n, s);
        }
    }, n.activate = (s)=>{
        if (n.context == null && (n.context = s || null), n.__ready) return;
        n.__ready = !0;
        let i = n.__preBuffer;
        if (n.__preBuffer = [], i.length) {
            o();
            for (let a of i)ib(n, a);
        }
        try {
            Jl(n);
        } catch (a) {
            console.error("[analyze] browser attach error:", a);
        }
        try {
            Ql(n);
        } catch (a) {
            console.error("[analyze] network attach error:", a);
        }
        for (let a of n.__onActivate || [])try {
            a(n);
        } catch (c) {
            console.error("[analyze] onActivate error:", c);
        }
    }, n.pause = ()=>{
        n.__paused = !0;
    }, n.resume = ()=>{
        n.__paused = !1;
    }, n.setLevel = (s)=>{
        n.config.level = ti(s);
    }, n.setCapture = (s, i)=>{
        n.config.capture[s] = !!i;
    }, n.query = (s)=>n.__memory ? n.__memory.query(s) : [], n.snapshot = ()=>n.__memory ? n.__memory.snapshot() : [], n.emitNetwork = (s)=>{
        if (!n.shouldCapture("network")) return;
        let i = s?.phase, a = i === "error" ? "error" : i === "success" && s.ok === !1 ? "warn" : "info";
        n.emit({
            id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
            ts: Date.now(),
            type: "network",
            level: a,
            hook: `fetch.${i || "unknown"}`,
            ...s
        });
    }, n.flush = ()=>{
        if (n.__sinks) for (let s of n.__sinks)typeof s.flush == "function" && s.flush();
    }, n.replay = ()=>({
            initialSnapshot: n.__initialSnapshot,
            events: n.snapshot()
        }), n.destroy = ()=>{
        for (let s of n.__teardown)try {
            s();
        } catch  {}
        n.__teardown = [], n.__ready = !1, n.__paused = !0;
    }, n.__onActivate = [], n.onActivate = (s)=>{
        n.__onActivate.push(s);
    }, n;
}, ib = (t, e)=>{
    let r = t.__pipeline(e);
    if (r == null) return;
    let n = Array.isArray(r) ? r : [
        r
    ];
    for (let o of n){
        if (typeof t.config.onEvent == "function") try {
            t.config.onEvent(o);
        } catch  {}
        for (let s of t.__sinks)try {
            s(o);
        } catch (i) {
            console.error("[analyze] sink error:", i);
        }
    }
};
var qt = Object.create(null);
qt.open = "0";
qt.close = "1";
qt.ping = "2";
qt.pong = "3";
qt.message = "4";
qt.upgrade = "5";
qt.noop = "6";
var Vn = Object.create(null);
Object.keys(qt).forEach((t)=>{
    Vn[qt[t]] = t;
});
var zn = {
    type: "error",
    data: "parser error"
};
var lb = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", fb = typeof ArrayBuffer == "function", ub = (t)=>typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t && t.buffer instanceof ArrayBuffer, Un = ({ type: t, data: e }, r, n)=>lb && e instanceof Blob ? r ? n(e) : ab(e, n) : fb && (e instanceof ArrayBuffer || ub(e)) ? r ? n(e) : ab(new Blob([
        e
    ]), n) : n(qt[t] + (e || "")), ab = (t, e)=>{
    let r = new FileReader;
    return r.onload = function() {
        let n = r.result.split(",")[1];
        e("b" + (n || ""));
    }, r.readAsDataURL(t);
};
function cb(t) {
    return t instanceof Uint8Array ? t : t instanceof ArrayBuffer ? new Uint8Array(t) : new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
}
var ef;
function pb(t, e) {
    if (lb && t.data instanceof Blob) return t.data.arrayBuffer().then(cb).then(e);
    if (fb && (t.data instanceof ArrayBuffer || ub(t.data))) return e(cb(t.data));
    Un(t, !1, (r)=>{
        ef || (ef = new TextEncoder), e(ef.encode(r));
    });
}
var db = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Wn = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for(let t = 0; t < db.length; t++)Wn[db.charCodeAt(t)] = t;
var hb = (t)=>{
    let e = t.length * .75, r = t.length, n, o = 0, s, i, a, c;
    t[t.length - 1] === "=" && (e--, t[t.length - 2] === "=" && e--);
    let l = new ArrayBuffer(e), f = new Uint8Array(l);
    for(n = 0; n < r; n += 4)s = Wn[t.charCodeAt(n)], i = Wn[t.charCodeAt(n + 1)], a = Wn[t.charCodeAt(n + 2)], c = Wn[t.charCodeAt(n + 3)], f[o++] = s << 2 | i >> 4, f[o++] = (i & 15) << 4 | a >> 2, f[o++] = (a & 3) << 6 | c & 63;
    return l;
};
var pk = typeof ArrayBuffer == "function", Hn = (t, e)=>{
    if (typeof t != "string") return {
        type: "message",
        data: gb(t, e)
    };
    let r = t.charAt(0);
    return r === "b" ? {
        type: "message",
        data: dk(t.substring(1), e)
    } : Vn[r] ? t.length > 1 ? {
        type: Vn[r],
        data: t.substring(1)
    } : {
        type: Vn[r]
    } : zn;
}, dk = (t, e)=>{
    if (pk) {
        let r = hb(t);
        return gb(r, e);
    } else return {
        base64: !0,
        data: t
    };
}, gb = (t, e)=>e === "blob" ? t instanceof Blob ? t : new Blob([
        t
    ]) : t instanceof ArrayBuffer ? t : t.buffer;
var mb = "", yb = (t, e)=>{
    let r = t.length, n = new Array(r), o = 0;
    t.forEach((s, i)=>{
        Un(s, !1, (a)=>{
            n[i] = a, ++o === r && e(n.join(mb));
        });
    });
}, bb = (t, e)=>{
    let r = t.split(mb), n = [];
    for(let o = 0; o < r.length; o++){
        let s = Hn(r[o], e);
        if (n.push(s), s.type === "error") break;
    }
    return n;
};
function xb() {
    return new TransformStream({
        transform (t, e) {
            pb(t, (r)=>{
                let n = r.length, o;
                if (n < 126) o = new Uint8Array(1), new DataView(o.buffer).setUint8(0, n);
                else if (n < 65536) {
                    o = new Uint8Array(3);
                    let s = new DataView(o.buffer);
                    s.setUint8(0, 126), s.setUint16(1, n);
                } else {
                    o = new Uint8Array(9);
                    let s = new DataView(o.buffer);
                    s.setUint8(0, 127), s.setBigUint64(1, BigInt(n));
                }
                t.data && typeof t.data != "string" && (o[0] |= 128), e.enqueue(o), e.enqueue(r);
            });
        }
    });
}
var rf;
function oi(t) {
    return t.reduce((e, r)=>e + r.length, 0);
}
function si(t, e) {
    if (t[0].length === e) return t.shift();
    let r = new Uint8Array(e), n = 0;
    for(let o = 0; o < e; o++)r[o] = t[0][n++], n === t[0].length && (t.shift(), n = 0);
    return t.length && n < t[0].length && (t[0] = t[0].slice(n)), r;
}
function Sb(t, e) {
    rf || (rf = new TextDecoder);
    let r = [], n = 0, o = -1, s = !1;
    return new TransformStream({
        transform (i, a) {
            for(r.push(i);;){
                if (n === 0) {
                    if (oi(r) < 1) break;
                    let c = si(r, 1);
                    s = (c[0] & 128) === 128, o = c[0] & 127, o < 126 ? n = 3 : o === 126 ? n = 1 : n = 2;
                } else if (n === 1) {
                    if (oi(r) < 2) break;
                    let c = si(r, 2);
                    o = new DataView(c.buffer, c.byteOffset, c.length).getUint16(0), n = 3;
                } else if (n === 2) {
                    if (oi(r) < 8) break;
                    let c = si(r, 8), l = new DataView(c.buffer, c.byteOffset, c.length), f = l.getUint32(0);
                    if (f > Math.pow(2, 21) - 1) {
                        a.enqueue(zn);
                        break;
                    }
                    o = f * Math.pow(2, 32) + l.getUint32(4), n = 3;
                } else {
                    if (oi(r) < o) break;
                    let c = si(r, o);
                    a.enqueue(Hn(s ? c : rf.decode(c), e)), n = 0;
                }
                if (o === 0 || o > t) {
                    a.enqueue(zn);
                    break;
                }
            }
        }
    });
}
var nf = 4;
function Z(t) {
    if (t) return hk(t);
}
function hk(t) {
    for(var e in Z.prototype)t[e] = Z.prototype[e];
    return t;
}
Z.prototype.on = Z.prototype.addEventListener = function(t, e) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;
};
Z.prototype.once = function(t, e) {
    function r() {
        this.off(t, r), e.apply(this, arguments);
    }
    return r.fn = e, this.on(t, r), this;
};
Z.prototype.off = Z.prototype.removeListener = Z.prototype.removeAllListeners = Z.prototype.removeEventListener = function(t, e) {
    if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
    var r = this._callbacks["$" + t];
    if (!r) return this;
    if (arguments.length == 1) return delete this._callbacks["$" + t], this;
    for(var n, o = 0; o < r.length; o++)if (n = r[o], n === e || n.fn === e) {
        r.splice(o, 1);
        break;
    }
    return r.length === 0 && delete this._callbacks["$" + t], this;
};
Z.prototype.emit = function(t) {
    this._callbacks = this._callbacks || {};
    for(var e = new Array(arguments.length - 1), r = this._callbacks["$" + t], n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
    if (r) {
        r = r.slice(0);
        for(var n = 0, o = r.length; n < o; ++n)r[n].apply(this, e);
    }
    return this;
};
Z.prototype.emitReserved = Z.prototype.emit;
Z.prototype.listeners = function(t) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];
};
Z.prototype.hasListeners = function(t) {
    return !!this.listeners(t).length;
};
var ue = typeof Promise == "function" && typeof Promise.resolve == "function" ? (e)=>Promise.resolve().then(e) : (e, r)=>r(e, 0), St = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), _b = "arraybuffer";
function ii(t, ...e) {
    return e.reduce((r, n)=>(t.hasOwnProperty(n) && (r[n] = t[n]), r), {});
}
var gk = St.setTimeout, mk = St.clearTimeout;
function pe(t, e) {
    e.useNativeTimers ? (t.setTimeoutFn = gk.bind(St), t.clearTimeoutFn = mk.bind(St)) : (t.setTimeoutFn = St.setTimeout.bind(St), t.clearTimeoutFn = St.clearTimeout.bind(St));
}
var yk = 1.33;
function wb(t) {
    return typeof t == "string" ? bk(t) : Math.ceil((t.byteLength || t.size) * yk);
}
function bk(t) {
    let e = 0, r = 0;
    for(let n = 0, o = t.length; n < o; n++)e = t.charCodeAt(n), e < 128 ? r += 1 : e < 2048 ? r += 2 : e < 55296 || e >= 57344 ? r += 3 : (n++, r += 4);
    return r;
}
function ai() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function kb(t) {
    let e = "";
    for(let r in t)t.hasOwnProperty(r) && (e.length && (e += "&"), e += encodeURIComponent(r) + "=" + encodeURIComponent(t[r]));
    return e;
}
function vb(t) {
    let e = {}, r = t.split("&");
    for(let n = 0, o = r.length; n < o; n++){
        let s = r[n].split("=");
        e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);
    }
    return e;
}
var ci = class extends Error {
    constructor(e, r, n){
        super(e), this.description = r, this.context = n, this.type = "TransportError";
    }
}, de = class extends Z {
    constructor(e){
        super(), this.writable = !1, pe(this, e), this.opts = e, this.query = e.query, this.socket = e.socket, this.supportsBinary = !e.forceBase64;
    }
    onError(e, r, n) {
        return super.emitReserved("error", new ci(e, r, n)), this;
    }
    open() {
        return this.readyState = "opening", this.doOpen(), this;
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
    }
    send(e) {
        this.readyState === "open" && this.write(e);
    }
    onOpen() {
        this.readyState = "open", this.writable = !0, super.emitReserved("open");
    }
    onData(e) {
        let r = Hn(e, this.socket.binaryType);
        this.onPacket(r);
    }
    onPacket(e) {
        super.emitReserved("packet", e);
    }
    onClose(e) {
        this.readyState = "closed", super.emitReserved("close", e);
    }
    pause(e) {}
    createUri(e, r = {}) {
        return e + "://" + this._hostname() + this._port() + this.opts.path + this._query(r);
    }
    _hostname() {
        let e = this.opts.hostname;
        return e.indexOf(":") === -1 ? e : "[" + e + "]";
    }
    _port() {
        return this.opts.port && (this.opts.secure && Number(this.opts.port) !== 443 || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
    }
    _query(e) {
        let r = kb(e);
        return r.length ? "?" + r : "";
    }
};
var qn = class extends de {
    constructor(){
        super(...arguments), this._polling = !1;
    }
    get name() {
        return "polling";
    }
    doOpen() {
        this._poll();
    }
    pause(e) {
        this.readyState = "pausing";
        let r = ()=>{
            this.readyState = "paused", e();
        };
        if (this._polling || !this.writable) {
            let n = 0;
            this._polling && (n++, this.once("pollComplete", function() {
                --n || r();
            })), this.writable || (n++, this.once("drain", function() {
                --n || r();
            }));
        } else r();
    }
    _poll() {
        this._polling = !0, this.doPoll(), this.emitReserved("poll");
    }
    onData(e) {
        let r = (n)=>{
            if (this.readyState === "opening" && n.type === "open" && this.onOpen(), n.type === "close") return this.onClose({
                description: "transport closed by the server"
            }), !1;
            this.onPacket(n);
        };
        bb(e, this.socket.binaryType).forEach(r), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
    }
    doClose() {
        let e = ()=>{
            this.write([
                {
                    type: "close"
                }
            ]);
        };
        this.readyState === "open" ? e() : this.once("open", e);
    }
    write(e) {
        this.writable = !1, yb(e, (r)=>{
            this.doWrite(r, ()=>{
                this.writable = !0, this.emitReserved("drain");
            });
        });
    }
    uri() {
        let e = this.opts.secure ? "https" : "http", r = this.query || {};
        return this.opts.timestampRequests !== !1 && (r[this.opts.timestampParam] = ai()), !this.supportsBinary && !r.sid && (r.b64 = 1), this.createUri(e, r);
    }
};
var Cb = !1;
try {
    Cb = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest;
} catch  {}
var Ab = Cb;
function xk() {}
var of = class extends qn {
    constructor(e){
        if (super(e), typeof location < "u") {
            let r = location.protocol === "https:", n = location.port;
            n || (n = r ? "443" : "80"), this.xd = typeof location < "u" && e.hostname !== location.hostname || n !== e.port;
        }
    }
    doWrite(e, r) {
        let n = this.request({
            method: "POST",
            data: e
        });
        n.on("success", r), n.on("error", (o, s)=>{
            this.onError("xhr post error", o, s);
        });
    }
    doPoll() {
        let e = this.request();
        e.on("data", this.onData.bind(this)), e.on("error", (r, n)=>{
            this.onError("xhr poll error", r, n);
        }), this.pollXhr = e;
    }
}, Oe = class t extends Z {
    constructor(e, r, n){
        super(), this.createRequest = e, pe(this, n), this._opts = n, this._method = n.method || "GET", this._uri = r, this._data = n.data !== void 0 ? n.data : null, this._create();
    }
    _create() {
        var e;
        let r = ii(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        r.xdomain = !!this._opts.xd;
        let n = this._xhr = this.createRequest(r);
        try {
            n.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                    for(let o in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this._opts.extraHeaders[o]);
                }
            } catch  {}
            if (this._method === "POST") try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch  {}
            try {
                n.setRequestHeader("Accept", "*/*");
            } catch  {}
            (e = this._opts.cookieJar) === null || e === void 0 || e.addCookies(n), "withCredentials" in n && (n.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (n.timeout = this._opts.requestTimeout), n.onreadystatechange = ()=>{
                var o;
                n.readyState === 3 && ((o = this._opts.cookieJar) === null || o === void 0 || o.parseCookies(n.getResponseHeader("set-cookie"))), n.readyState === 4 && (n.status === 200 || n.status === 1223 ? this._onLoad() : this.setTimeoutFn(()=>{
                    this._onError(typeof n.status == "number" ? n.status : 0);
                }, 0));
            }, n.send(this._data);
        } catch (o) {
            this.setTimeoutFn(()=>{
                this._onError(o);
            }, 0);
            return;
        }
        typeof document < "u" && (this._index = t.requestsCount++, t.requests[this._index] = this);
    }
    _onError(e) {
        this.emitReserved("error", e, this._xhr), this._cleanup(!0);
    }
    _cleanup(e) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = xk, e) try {
                this._xhr.abort();
            } catch  {}
            typeof document < "u" && delete t.requests[this._index], this._xhr = null;
        }
    }
    _onLoad() {
        let e = this._xhr.responseText;
        e !== null && (this.emitReserved("data", e), this.emitReserved("success"), this._cleanup());
    }
    abort() {
        this._cleanup();
    }
};
Oe.requestsCount = 0;
Oe.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", Eb);
    else if (typeof addEventListener == "function") {
        let t = "onpagehide" in St ? "pagehide" : "unload";
        addEventListener(t, Eb, !1);
    }
}
function Eb() {
    for(let t in Oe.requests)Oe.requests.hasOwnProperty(t) && Oe.requests[t].abort();
}
var Sk = function() {
    let t = Tb({
        xdomain: !1
    });
    return t && t.responseType !== null;
}(), Re = class extends of {
    constructor(e){
        super(e);
        let r = e && e.forceBase64;
        this.supportsBinary = Sk && !r;
    }
    request(e = {}) {
        return Object.assign(e, {
            xd: this.xd
        }, this.opts), new Oe(Tb, this.uri(), e);
    }
};
function Tb(t) {
    let e = t.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!e || Ab)) return new XMLHttpRequest;
    } catch  {}
    if (!e) try {
        return new St[[
            "Active"
        ].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch  {}
}
var Ob = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", af = class extends de {
    get name() {
        return "websocket";
    }
    doOpen() {
        let e = this.uri(), r = this.opts.protocols, n = Ob ? {} : ii(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(e, r, n);
        } catch (o) {
            return this.emitReserved("error", o);
        }
        this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
    }
    addEventListeners() {
        this.ws.onopen = ()=>{
            this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
        }, this.ws.onclose = (e)=>this.onClose({
                description: "websocket connection closed",
                context: e
            }), this.ws.onmessage = (e)=>this.onData(e.data), this.ws.onerror = (e)=>this.onError("websocket error", e);
    }
    write(e) {
        this.writable = !1;
        for(let r = 0; r < e.length; r++){
            let n = e[r], o = r === e.length - 1;
            Un(n, this.supportsBinary, (s)=>{
                try {
                    this.doWrite(n, s);
                } catch  {}
                o && ue(()=>{
                    this.writable = !0, this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = ()=>{}, this.ws.close(), this.ws = null);
    }
    uri() {
        let e = this.opts.secure ? "wss" : "ws", r = this.query || {};
        return this.opts.timestampRequests && (r[this.opts.timestampParam] = ai()), this.supportsBinary || (r.b64 = 1), this.createUri(e, r);
    }
}, sf = St.WebSocket || St.MozWebSocket, Pe = class extends af {
    createSocket(e, r, n) {
        return Ob ? new sf(e, r, n) : r ? new sf(e, r) : new sf(e);
    }
    doWrite(e, r) {
        this.ws.send(r);
    }
};
var Dr = class extends de {
    get name() {
        return "webtransport";
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
        } catch (e) {
            return this.emitReserved("error", e);
        }
        this._transport.closed.then(()=>{
            this.onClose();
        }).catch((e)=>{
            this.onError("webtransport error", e);
        }), this._transport.ready.then(()=>{
            this._transport.createBidirectionalStream().then((e)=>{
                let r = Sb(Number.MAX_SAFE_INTEGER, this.socket.binaryType), n = e.readable.pipeThrough(r).getReader(), o = xb();
                o.readable.pipeTo(e.writable), this._writer = o.writable.getWriter();
                let s = ()=>{
                    n.read().then(({ done: a, value: c })=>{
                        a || (this.onPacket(c), s());
                    }).catch((a)=>{});
                };
                s();
                let i = {
                    type: "open"
                };
                this.query.sid && (i.data = `{"sid":"${this.query.sid}"}`), this._writer.write(i).then(()=>this.onOpen());
            });
        });
    }
    write(e) {
        this.writable = !1;
        for(let r = 0; r < e.length; r++){
            let n = e[r], o = r === e.length - 1;
            this._writer.write(n).then(()=>{
                o && ue(()=>{
                    this.writable = !0, this.emitReserved("drain");
                }, this.setTimeoutFn);
            });
        }
    }
    doClose() {
        var e;
        (e = this._transport) === null || e === void 0 || e.close();
    }
};
var cf = {
    websocket: Pe,
    webtransport: Dr,
    polling: Re
};
var _k = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, wk = [
    "source",
    "protocol",
    "authority",
    "userInfo",
    "user",
    "password",
    "host",
    "port",
    "relative",
    "path",
    "directory",
    "file",
    "query",
    "anchor"
];
function Lr(t) {
    if (t.length > 8e3) throw "URI too long";
    let e = t, r = t.indexOf("["), n = t.indexOf("]");
    r != -1 && n != -1 && (t = t.substring(0, r) + t.substring(r, n).replace(/:/g, ";") + t.substring(n, t.length));
    let o = _k.exec(t || ""), s = {}, i = 14;
    for(; i--;)s[wk[i]] = o[i] || "";
    return r != -1 && n != -1 && (s.source = e, s.host = s.host.substring(1, s.host.length - 1).replace(/;/g, ":"), s.authority = s.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), s.ipv6uri = !0), s.pathNames = kk(s, s.path), s.queryKey = vk(s, s.query), s;
}
function kk(t, e) {
    let r = /\/{2,9}/g, n = e.replace(r, "/").split("/");
    return (e.slice(0, 1) == "/" || e.length === 0) && n.splice(0, 1), e.slice(-1) == "/" && n.splice(n.length - 1, 1), n;
}
function vk(t, e) {
    let r = {};
    return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, o, s) {
        o && (r[o] = s);
    }), r;
}
var lf = typeof addEventListener == "function" && typeof removeEventListener == "function", li = [];
lf && addEventListener("offline", ()=>{
    li.forEach((t)=>t());
}, !1);
var Qe = class t extends Z {
    constructor(e, r){
        if (super(), this.binaryType = _b, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, e && typeof e == "object" && (r = e, e = null), e) {
            let n = Lr(e);
            r.hostname = n.host, r.secure = n.protocol === "https" || n.protocol === "wss", r.port = n.port, n.query && (r.query = n.query);
        } else r.host && (r.hostname = Lr(r.host).host);
        pe(this, r), this.secure = r.secure != null ? r.secure : typeof location < "u" && location.protocol === "https:", r.hostname && !r.port && (r.port = this.secure ? "443" : "80"), this.hostname = r.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = r.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, r.transports.forEach((n)=>{
            let o = n.prototype.name;
            this.transports.push(o), this._transportsByName[o] = n;
        }), this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, r), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = vb(this.opts.query)), lf && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = ()=>{
            this.transport && (this.transport.removeAllListeners(), this.transport.close());
        }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = ()=>{
            this._onClose("transport close", {
                description: "network connection lost"
            });
        }, li.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
    }
    createTransport(e) {
        let r = Object.assign({}, this.opts.query);
        r.EIO = nf, r.transport = e, this.id && (r.sid = this.id);
        let n = Object.assign({}, this.opts, {
            query: r,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[e]);
        return new this._transportsByName[e](n);
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn(()=>{
                this.emitReserved("error", "No transports available");
            }, 0);
            return;
        }
        let e = this.opts.rememberUpgrade && t.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        let r = this.createTransport(e);
        r.open(), this.setTransport(r);
    }
    setTransport(e) {
        this.transport && this.transport.removeAllListeners(), this.transport = e, e.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (r)=>this._onClose("transport close", r));
    }
    onOpen() {
        this.readyState = "open", t.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
    }
    _onPacket(e) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch(this.emitReserved("packet", e), this.emitReserved("heartbeat"), e.type){
            case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
            case "ping":
                this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
                break;
            case "error":
                let r = new Error("server error");
                r.code = e.data, this._onError(r);
                break;
            case "message":
                this.emitReserved("data", e.data), this.emitReserved("message", e.data);
                break;
        }
    }
    onHandshake(e) {
        this.emitReserved("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this._pingInterval = e.pingInterval, this._pingTimeout = e.pingTimeout, this._maxPayload = e.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        let e = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + e, this._pingTimeoutTimer = this.setTimeoutFn(()=>{
            this._onClose("ping timeout");
        }, e), this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            let e = this._getWritablePackets();
            this.transport.send(e), this._prevBufferLen = e.length, this.emitReserved("flush");
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1)) return this.writeBuffer;
        let r = 1;
        for(let n = 0; n < this.writeBuffer.length; n++){
            let o = this.writeBuffer[n].data;
            if (o && (r += wb(o)), n > 0 && r > this._maxPayload) return this.writeBuffer.slice(0, n);
            r += 2;
        }
        return this.writeBuffer;
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime) return !0;
        let e = Date.now() > this._pingTimeoutTime;
        return e && (this._pingTimeoutTime = 0, ue(()=>{
            this._onClose("ping timeout");
        }, this.setTimeoutFn)), e;
    }
    write(e, r, n) {
        return this._sendPacket("message", e, r, n), this;
    }
    send(e, r, n) {
        return this._sendPacket("message", e, r, n), this;
    }
    _sendPacket(e, r, n, o) {
        if (typeof r == "function" && (o = r, r = void 0), typeof n == "function" && (o = n, n = null), this.readyState === "closing" || this.readyState === "closed") return;
        n = n || {}, n.compress = n.compress !== !1;
        let s = {
            type: e,
            data: r,
            options: n
        };
        this.emitReserved("packetCreate", s), this.writeBuffer.push(s), o && this.once("flush", o), this.flush();
    }
    close() {
        let e = ()=>{
            this._onClose("forced close"), this.transport.close();
        }, r = ()=>{
            this.off("upgrade", r), this.off("upgradeError", r), e();
        }, n = ()=>{
            this.once("upgrade", r), this.once("upgradeError", r);
        };
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", ()=>{
            this.upgrading ? n() : e();
        }) : this.upgrading ? n() : e()), this;
    }
    _onError(e) {
        if (t.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") return this.transports.shift(), this._open();
        this.emitReserved("error", e), this._onClose("transport error", e);
    }
    _onClose(e, r) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), lf && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
                let n = li.indexOf(this._offlineEventListener);
                n !== -1 && li.splice(n, 1);
            }
            this.readyState = "closed", this.id = null, this.emitReserved("close", e, r), this.writeBuffer = [], this._prevBufferLen = 0;
        }
    }
};
Qe.protocol = nf;
var fi = class extends Qe {
    constructor(){
        super(...arguments), this._upgrades = [];
    }
    onOpen() {
        if (super.onOpen(), this.readyState === "open" && this.opts.upgrade) for(let e = 0; e < this._upgrades.length; e++)this._probe(this._upgrades[e]);
    }
    _probe(e) {
        let r = this.createTransport(e), n = !1;
        Qe.priorWebsocketSuccess = !1;
        let o = ()=>{
            n || (r.send([
                {
                    type: "ping",
                    data: "probe"
                }
            ]), r.once("packet", (p)=>{
                if (!n) {
                    if (p.type === "pong" && p.data === "probe") {
                        if (this.upgrading = !0, this.emitReserved("upgrading", r), !r) return;
                        Qe.priorWebsocketSuccess = r.name === "websocket", this.transport.pause(()=>{
                            n || this.readyState !== "closed" && (f(), this.setTransport(r), r.send([
                                {
                                    type: "upgrade"
                                }
                            ]), this.emitReserved("upgrade", r), r = null, this.upgrading = !1, this.flush());
                        });
                    } else {
                        let u = new Error("probe error");
                        u.transport = r.name, this.emitReserved("upgradeError", u);
                    }
                }
            }));
        };
        function s() {
            n || (n = !0, f(), r.close(), r = null);
        }
        let i = (p)=>{
            let u = new Error("probe error: " + p);
            u.transport = r.name, s(), this.emitReserved("upgradeError", u);
        };
        function a() {
            i("transport closed");
        }
        function c() {
            i("socket closed");
        }
        function l(p) {
            r && p.name !== r.name && s();
        }
        let f = ()=>{
            r.removeListener("open", o), r.removeListener("error", i), r.removeListener("close", a), this.off("close", c), this.off("upgrading", l);
        };
        r.once("open", o), r.once("error", i), r.once("close", a), this.once("close", c), this.once("upgrading", l), this._upgrades.indexOf("webtransport") !== -1 && e !== "webtransport" ? this.setTimeoutFn(()=>{
            n || r.open();
        }, 200) : r.open();
    }
    onHandshake(e) {
        this._upgrades = this._filterUpgrades(e.upgrades), super.onHandshake(e);
    }
    _filterUpgrades(e) {
        let r = [];
        for(let n = 0; n < e.length; n++)~this.transports.indexOf(e[n]) && r.push(e[n]);
        return r;
    }
}, Mr = class extends fi {
    constructor(e, r = {}){
        let n = typeof e == "object" ? e : r;
        (!n.transports || n.transports && typeof n.transports[0] == "string") && (n.transports = (n.transports || [
            "polling",
            "websocket",
            "webtransport"
        ]).map((o)=>cf[o]).filter((o)=>!!o)), super(e, n);
    }
};
var aF = Mr.protocol;
function Rb(t, e = "", r) {
    let n = t;
    r = r || typeof location < "u" && location, t == null && (t = r.protocol + "//" + r.host), typeof t == "string" && (t.charAt(0) === "/" && (t.charAt(1) === "/" ? t = r.protocol + t : t = r.host + t), /^(https?|wss?):\/\//.test(t) || (typeof r < "u" ? t = r.protocol + "//" + t : t = "https://" + t), n = Lr(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";
    let s = n.host.indexOf(":") !== -1 ? "[" + n.host + "]" : n.host;
    return n.id = n.protocol + "://" + s + ":" + n.port + e, n.href = n.protocol + "://" + s + (r && r.port === n.port ? "" : ":" + n.port), n;
}
var mf = {};
F(mf, {
    Decoder: ()=>hf,
    Encoder: ()=>df,
    PacketType: ()=>D,
    isPacketValid: ()=>Hk,
    protocol: ()=>Vb
});
var Ak = typeof ArrayBuffer == "function", Ek = (t)=>typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer, Pb = Object.prototype.toString, Tk = typeof Blob == "function" || typeof Blob < "u" && Pb.call(Blob) === "[object BlobConstructor]", Ok = typeof File == "function" || typeof File < "u" && Pb.call(File) === "[object FileConstructor]";
function Kn(t) {
    return Ak && (t instanceof ArrayBuffer || Ek(t)) || Tk && t instanceof Blob || Ok && t instanceof File;
}
function Gn(t, e) {
    if (!t || typeof t != "object") return !1;
    if (Array.isArray(t)) {
        for(let r = 0, n = t.length; r < n; r++)if (Gn(t[r])) return !0;
        return !1;
    }
    if (Kn(t)) return !0;
    if (t.toJSON && typeof t.toJSON == "function" && arguments.length === 1) return Gn(t.toJSON(), !0);
    for(let r in t)if (Object.prototype.hasOwnProperty.call(t, r) && Gn(t[r])) return !0;
    return !1;
}
function Ib(t) {
    let e = [], r = t.data, n = t;
    return n.data = ff(r, e), n.attachments = e.length, {
        packet: n,
        buffers: e
    };
}
function ff(t, e) {
    if (!t) return t;
    if (Kn(t)) {
        let r = {
            _placeholder: !0,
            num: e.length
        };
        return e.push(t), r;
    } else if (Array.isArray(t)) {
        let r = new Array(t.length);
        for(let n = 0; n < t.length; n++)r[n] = ff(t[n], e);
        return r;
    } else if (typeof t == "object" && !(t instanceof Date)) {
        let r = {};
        for(let n in t)Object.prototype.hasOwnProperty.call(t, n) && (r[n] = ff(t[n], e));
        return r;
    }
    return t;
}
function $b(t, e) {
    return t.data = uf(t.data, e), delete t.attachments, t;
}
function uf(t, e) {
    if (!t) return t;
    if (t && t._placeholder === !0) {
        if (typeof t.num == "number" && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments");
    } else if (Array.isArray(t)) for(let r = 0; r < t.length; r++)t[r] = uf(t[r], e);
    else if (typeof t == "object") for(let r in t)Object.prototype.hasOwnProperty.call(t, r) && (t[r] = uf(t[r], e));
    return t;
}
var jb = hx(Nb(), 1), pf = (0, jb.default)("socket.io-parser"), Bb = [
    "connect",
    "connect_error",
    "disconnect",
    "disconnecting",
    "newListener",
    "removeListener"
], Vb = 5, D;
(function(t) {
    t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK";
})(D || (D = {}));
var df = class {
    constructor(e){
        this.replacer = e;
    }
    encode(e) {
        return pf("encoding packet %j", e), (e.type === D.EVENT || e.type === D.ACK) && Gn(e) ? this.encodeAsBinary({
            type: e.type === D.EVENT ? D.BINARY_EVENT : D.BINARY_ACK,
            nsp: e.nsp,
            data: e.data,
            id: e.id
        }) : [
            this.encodeAsString(e)
        ];
    }
    encodeAsString(e) {
        let r = "" + e.type;
        return (e.type === D.BINARY_EVENT || e.type === D.BINARY_ACK) && (r += e.attachments + "-"), e.nsp && e.nsp !== "/" && (r += e.nsp + ","), e.id != null && (r += e.id), e.data != null && (r += JSON.stringify(e.data, this.replacer)), pf("encoded %j as %s", e, r), r;
    }
    encodeAsBinary(e) {
        let r = Ib(e), n = this.encodeAsString(r.packet), o = r.buffers;
        return o.unshift(n), o;
    }
}, hf = class t extends Z {
    constructor(e){
        super(), this.opts = Object.assign({
            reviver: void 0,
            maxAttachments: 10
        }, typeof e == "function" ? {
            reviver: e
        } : e);
    }
    add(e) {
        let r;
        if (typeof e == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            r = this.decodeString(e);
            let n = r.type === D.BINARY_EVENT;
            n || r.type === D.BINARY_ACK ? (r.type = n ? D.EVENT : D.ACK, this.reconstructor = new gf(r), r.attachments === 0 && super.emitReserved("decoded", r)) : super.emitReserved("decoded", r);
        } else if (Kn(e) || e.base64) {
            if (this.reconstructor) r = this.reconstructor.takeBinaryData(e), r && (this.reconstructor = null, super.emitReserved("decoded", r));
            else throw new Error("got binary data when not reconstructing a packet");
        } else throw new Error("Unknown type: " + e);
    }
    decodeString(e) {
        let r = 0, n = {
            type: Number(e.charAt(0))
        };
        if (D[n.type] === void 0) throw new Error("unknown packet type " + n.type);
        if (n.type === D.BINARY_EVENT || n.type === D.BINARY_ACK) {
            let s = r + 1;
            for(; e.charAt(++r) !== "-" && r != e.length;);
            let i = e.substring(s, r);
            if (i != Number(i) || e.charAt(r) !== "-") throw new Error("Illegal attachments");
            let a = Number(i);
            if (!zb(a) || a < 0) throw new Error("Illegal attachments");
            if (a > this.opts.maxAttachments) throw new Error("too many attachments");
            n.attachments = a;
        }
        if (e.charAt(r + 1) === "/") {
            let s = r + 1;
            for(; ++r && !(e.charAt(r) === "," || r === e.length););
            n.nsp = e.substring(s, r);
        } else n.nsp = "/";
        let o = e.charAt(r + 1);
        if (o !== "" && Number(o) == o) {
            let s = r + 1;
            for(; ++r;){
                let i = e.charAt(r);
                if (i == null || Number(i) != i) {
                    --r;
                    break;
                }
                if (r === e.length) break;
            }
            n.id = Number(e.substring(s, r + 1));
        }
        if (e.charAt(++r)) {
            let s = this.tryParse(e.substr(r));
            if (t.isPayloadValid(n.type, s)) n.data = s;
            else throw new Error("invalid payload");
        }
        return pf("decoded %s as %j", e, n), n;
    }
    tryParse(e) {
        try {
            return JSON.parse(e, this.opts.reviver);
        } catch  {
            return !1;
        }
    }
    static isPayloadValid(e, r) {
        switch(e){
            case D.CONNECT:
                return di(r);
            case D.DISCONNECT:
                return r === void 0;
            case D.CONNECT_ERROR:
                return typeof r == "string" || di(r);
            case D.EVENT:
            case D.BINARY_EVENT:
                return Array.isArray(r) && (typeof r[0] == "number" || typeof r[0] == "string" && Bb.indexOf(r[0]) === -1);
            case D.ACK:
            case D.BINARY_ACK:
                return Array.isArray(r);
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
}, gf = class {
    constructor(e){
        this.packet = e, this.buffers = [], this.reconPack = e;
    }
    takeBinaryData(e) {
        if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
            let r = $b(this.reconPack, this.buffers);
            return this.finishedReconstruction(), r;
        }
        return null;
    }
    finishedReconstruction() {
        this.reconPack = null, this.buffers = [];
    }
};
function zk(t) {
    return typeof t == "string";
}
var zb = Number.isInteger || function(t) {
    return typeof t == "number" && isFinite(t) && Math.floor(t) === t;
};
function Uk(t) {
    return t === void 0 || zb(t);
}
function di(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
}
function Wk(t, e) {
    switch(t){
        case D.CONNECT:
            return e === void 0 || di(e);
        case D.DISCONNECT:
            return e === void 0;
        case D.EVENT:
            return Array.isArray(e) && (typeof e[0] == "number" || typeof e[0] == "string" && Bb.indexOf(e[0]) === -1);
        case D.ACK:
            return Array.isArray(e);
        case D.CONNECT_ERROR:
            return typeof e == "string" || di(e);
        default:
            return !1;
    }
}
function Hk(t) {
    return zk(t.nsp) && Uk(t.id) && Wk(t.type, t.data);
}
function Pt(t, e, r) {
    return t.on(e, r), function() {
        t.off(e, r);
    };
}
var qk = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
}), Vr = class extends Z {
    constructor(e, r, n){
        super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e, this.nsp = r, n && n.auth && (this.auth = n.auth), this._opts = Object.assign({}, n), this.io._autoConnect && this.open();
    }
    get disconnected() {
        return !this.connected;
    }
    subEvents() {
        if (this.subs) return;
        let e = this.io;
        this.subs = [
            Pt(e, "open", this.onopen.bind(this)),
            Pt(e, "packet", this.onpacket.bind(this)),
            Pt(e, "error", this.onerror.bind(this)),
            Pt(e, "close", this.onclose.bind(this))
        ];
    }
    get active() {
        return !!this.subs;
    }
    connect() {
        return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
    }
    open() {
        return this.connect();
    }
    send(...e) {
        return e.unshift("message"), this.emit.apply(this, e), this;
    }
    emit(e, ...r) {
        var n, o, s;
        if (qk.hasOwnProperty(e)) throw new Error('"' + e.toString() + '" is a reserved event name');
        if (r.unshift(e), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(r), this;
        let i = {
            type: D.EVENT,
            data: r
        };
        if (i.options = {}, i.options.compress = this.flags.compress !== !1, typeof r[r.length - 1] == "function") {
            let f = this.ids++, p = r.pop();
            this._registerAckCallback(f, p), i.id = f;
        }
        let a = (o = (n = this.io.engine) === null || n === void 0 ? void 0 : n.transport) === null || o === void 0 ? void 0 : o.writable, c = this.connected && !(!((s = this.io.engine) === null || s === void 0) && s._hasPingExpired());
        return this.flags.volatile && !a || (c ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this;
    }
    _registerAckCallback(e, r) {
        var n;
        let o = (n = this.flags.timeout) !== null && n !== void 0 ? n : this._opts.ackTimeout;
        if (o === void 0) {
            this.acks[e] = r;
            return;
        }
        let s = this.io.setTimeoutFn(()=>{
            delete this.acks[e];
            for(let a = 0; a < this.sendBuffer.length; a++)this.sendBuffer[a].id === e && this.sendBuffer.splice(a, 1);
            r.call(this, new Error("operation has timed out"));
        }, o), i = (...a)=>{
            this.io.clearTimeoutFn(s), r.apply(this, a);
        };
        i.withError = !0, this.acks[e] = i;
    }
    emitWithAck(e, ...r) {
        return new Promise((n, o)=>{
            let s = (i, a)=>i ? o(i) : n(a);
            s.withError = !0, r.push(s), this.emit(e, ...r);
        });
    }
    _addToQueue(e) {
        let r;
        typeof e[e.length - 1] == "function" && (r = e.pop());
        let n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        e.push((o, ...s)=>(this._queue[0], o !== null ? n.tryCount > this._opts.retries && (this._queue.shift(), r && r(o)) : (this._queue.shift(), r && r(null, ...s)), n.pending = !1, this._drainQueue())), this._queue.push(n), this._drainQueue();
    }
    _drainQueue(e = !1) {
        if (!this.connected || this._queue.length === 0) return;
        let r = this._queue[0];
        r.pending && !e || (r.pending = !0, r.tryCount++, this.flags = r.flags, this.emit.apply(this, r.args));
    }
    packet(e) {
        e.nsp = this.nsp, this.io._packet(e);
    }
    onopen() {
        typeof this.auth == "function" ? this.auth((e)=>{
            this._sendConnectPacket(e);
        }) : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(e) {
        this.packet({
            type: D.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, e) : e
        });
    }
    onerror(e) {
        this.connected || this.emitReserved("connect_error", e);
    }
    onclose(e, r) {
        this.connected = !1, delete this.id, this.emitReserved("disconnect", e, r), this._clearAcks();
    }
    _clearAcks() {
        Object.keys(this.acks).forEach((e)=>{
            if (!this.sendBuffer.some((n)=>String(n.id) === e)) {
                let n = this.acks[e];
                delete this.acks[e], n.withError && n.call(this, new Error("socket has been disconnected"));
            }
        });
    }
    onpacket(e) {
        if (e.nsp === this.nsp) switch(e.type){
            case D.CONNECT:
                e.data && e.data.sid ? this.onconnect(e.data.sid, e.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case D.EVENT:
            case D.BINARY_EVENT:
                this.onevent(e);
                break;
            case D.ACK:
            case D.BINARY_ACK:
                this.onack(e);
                break;
            case D.DISCONNECT:
                this.ondisconnect();
                break;
            case D.CONNECT_ERROR:
                this.destroy();
                let n = new Error(e.data.message);
                n.data = e.data.data, this.emitReserved("connect_error", n);
                break;
        }
    }
    onevent(e) {
        let r = e.data || [];
        e.id != null && r.push(this.ack(e.id)), this.connected ? this.emitEvent(r) : this.receiveBuffer.push(Object.freeze(r));
    }
    emitEvent(e) {
        if (this._anyListeners && this._anyListeners.length) {
            let r = this._anyListeners.slice();
            for (let n of r)n.apply(this, e);
        }
        super.emit.apply(this, e), this._pid && e.length && typeof e[e.length - 1] == "string" && (this._lastOffset = e[e.length - 1]);
    }
    ack(e) {
        let r = this, n = !1;
        return function(...o) {
            n || (n = !0, r.packet({
                type: D.ACK,
                id: e,
                data: o
            }));
        };
    }
    onack(e) {
        let r = this.acks[e.id];
        typeof r == "function" && (delete this.acks[e.id], r.withError && e.data.unshift(null), r.apply(this, e.data));
    }
    onconnect(e, r) {
        this.id = e, this.recovered = r && this._pid === r, this._pid = r, this.connected = !0, this.emitBuffered(), this._drainQueue(!0), this.emitReserved("connect");
    }
    emitBuffered() {
        this.receiveBuffer.forEach((e)=>this.emitEvent(e)), this.receiveBuffer = [], this.sendBuffer.forEach((e)=>{
            this.notifyOutgoingListeners(e), this.packet(e);
        }), this.sendBuffer = [];
    }
    ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
        this.subs && (this.subs.forEach((e)=>e()), this.subs = void 0), this.io._destroy(this);
    }
    disconnect() {
        return this.connected && this.packet({
            type: D.DISCONNECT
        }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    close() {
        return this.disconnect();
    }
    compress(e) {
        return this.flags.compress = e, this;
    }
    get volatile() {
        return this.flags.volatile = !0, this;
    }
    timeout(e) {
        return this.flags.timeout = e, this;
    }
    onAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e), this;
    }
    prependAny(e) {
        return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e), this;
    }
    offAny(e) {
        if (!this._anyListeners) return this;
        if (e) {
            let r = this._anyListeners;
            for(let n = 0; n < r.length; n++)if (e === r[n]) return r.splice(n, 1), this;
        } else this._anyListeners = [];
        return this;
    }
    listenersAny() {
        return this._anyListeners || [];
    }
    onAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e), this;
    }
    prependAnyOutgoing(e) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e), this;
    }
    offAnyOutgoing(e) {
        if (!this._anyOutgoingListeners) return this;
        if (e) {
            let r = this._anyOutgoingListeners;
            for(let n = 0; n < r.length; n++)if (e === r[n]) return r.splice(n, 1), this;
        } else this._anyOutgoingListeners = [];
        return this;
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(e) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            let r = this._anyOutgoingListeners.slice();
            for (let n of r)n.apply(this, e.data);
        }
    }
};
function er(t) {
    t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;
}
er.prototype.duration = function() {
    var t = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var e = Math.random(), r = Math.floor(e * this.jitter * t);
        t = (Math.floor(e * 10) & 1) == 0 ? t - r : t + r;
    }
    return Math.min(t, this.max) | 0;
};
er.prototype.reset = function() {
    this.attempts = 0;
};
er.prototype.setMin = function(t) {
    this.ms = t;
};
er.prototype.setMax = function(t) {
    this.max = t;
};
er.prototype.setJitter = function(t) {
    this.jitter = t;
};
var zr = class extends Z {
    constructor(e, r){
        var n;
        super(), this.nsps = {}, this.subs = [], e && typeof e == "object" && (r = e, e = void 0), r = r || {}, r.path = r.path || "/socket.io", this.opts = r, pe(this, r), this.reconnection(r.reconnection !== !1), this.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), this.reconnectionDelay(r.reconnectionDelay || 1e3), this.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), this.randomizationFactor((n = r.randomizationFactor) !== null && n !== void 0 ? n : .5), this.backoff = new er({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(r.timeout == null ? 2e4 : r.timeout), this._readyState = "closed", this.uri = e;
        let o = r.parser || mf;
        this.encoder = new o.Encoder, this.decoder = new o.Decoder, this._autoConnect = r.autoConnect !== !1, this._autoConnect && this.open();
    }
    reconnection(e) {
        return arguments.length ? (this._reconnection = !!e, e || (this.skipReconnect = !0), this) : this._reconnection;
    }
    reconnectionAttempts(e) {
        return e === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = e, this);
    }
    reconnectionDelay(e) {
        var r;
        return e === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = e, (r = this.backoff) === null || r === void 0 || r.setMin(e), this);
    }
    randomizationFactor(e) {
        var r;
        return e === void 0 ? this._randomizationFactor : (this._randomizationFactor = e, (r = this.backoff) === null || r === void 0 || r.setJitter(e), this);
    }
    reconnectionDelayMax(e) {
        var r;
        return e === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e, (r = this.backoff) === null || r === void 0 || r.setMax(e), this);
    }
    timeout(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout;
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
    }
    open(e) {
        if (~this._readyState.indexOf("open")) return this;
        this.engine = new Mr(this.uri, this.opts);
        let r = this.engine, n = this;
        this._readyState = "opening", this.skipReconnect = !1;
        let o = Pt(r, "open", function() {
            n.onopen(), e && e();
        }), s = (a)=>{
            this.cleanup(), this._readyState = "closed", this.emitReserved("error", a), e ? e(a) : this.maybeReconnectOnOpen();
        }, i = Pt(r, "error", s);
        if (this._timeout !== !1) {
            let a = this._timeout, c = this.setTimeoutFn(()=>{
                o(), s(new Error("timeout")), r.close();
            }, a);
            this.opts.autoUnref && c.unref(), this.subs.push(()=>{
                this.clearTimeoutFn(c);
            });
        }
        return this.subs.push(o), this.subs.push(i), this;
    }
    connect(e) {
        return this.open(e);
    }
    onopen() {
        this.cleanup(), this._readyState = "open", this.emitReserved("open");
        let e = this.engine;
        this.subs.push(Pt(e, "ping", this.onping.bind(this)), Pt(e, "data", this.ondata.bind(this)), Pt(e, "error", this.onerror.bind(this)), Pt(e, "close", this.onclose.bind(this)), Pt(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
        this.emitReserved("ping");
    }
    ondata(e) {
        try {
            this.decoder.add(e);
        } catch (r) {
            this.onclose("parse error", r);
        }
    }
    ondecoded(e) {
        ue(()=>{
            this.emitReserved("packet", e);
        }, this.setTimeoutFn);
    }
    onerror(e) {
        this.emitReserved("error", e);
    }
    socket(e, r) {
        let n = this.nsps[e];
        return n ? this._autoConnect && !n.active && n.connect() : (n = new Vr(this, e, r), this.nsps[e] = n), n;
    }
    _destroy(e) {
        let r = Object.keys(this.nsps);
        for (let n of r)if (this.nsps[n].active) return;
        this._close();
    }
    _packet(e) {
        let r = this.encoder.encode(e);
        for(let n = 0; n < r.length; n++)this.engine.write(r[n], e.options);
    }
    cleanup() {
        this.subs.forEach((e)=>e()), this.subs.length = 0, this.decoder.destroy();
    }
    _close() {
        this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
    }
    disconnect() {
        return this._close();
    }
    onclose(e, r) {
        var n;
        this.cleanup(), (n = this.engine) === null || n === void 0 || n.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e, r), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect) return this;
        let e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
        else {
            let r = this.backoff.duration();
            this._reconnecting = !0;
            let n = this.setTimeoutFn(()=>{
                e.skipReconnect || (this.emitReserved("reconnect_attempt", e.backoff.attempts), !e.skipReconnect && e.open((o)=>{
                    o ? (e._reconnecting = !1, e.reconnect(), this.emitReserved("reconnect_error", o)) : e.onreconnect();
                }));
            }, r);
            this.opts.autoUnref && n.unref(), this.subs.push(()=>{
                this.clearTimeoutFn(n);
            });
        }
    }
    onreconnect() {
        let e = this.backoff.attempts;
        this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", e);
    }
};
var Yn = {};
function Ur(t, e) {
    typeof t == "object" && (e = t, t = void 0), e = e || {};
    let r = Rb(t, e.path || "/socket.io"), n = r.source, o = r.id, s = r.path, i = Yn[o] && s in Yn[o].nsps, a = e.forceNew || e["force new connection"] || e.multiplex === !1 || i, c;
    return a ? c = new zr(n, e) : (Yn[o] || (Yn[o] = new zr(n, e)), c = Yn[o]), r.query && !e.query && (e.query = r.queryKey), c.socket(r.path, e);
}
Object.assign(Ur, {
    Manager: zr,
    Socket: Vr,
    io: Ur,
    connect: Ur
});
P();
var Gk = new Set([
    "__proto__",
    "constructor",
    "prototype"
]), Ub = (t)=>{
    if (!Array.isArray(t)) return !1;
    for(let e = 0; e < t.length; e++)if (Gk.has(t[e])) return !1;
    return !0;
}, Kk = (t, e)=>{
    !t || !Ub(e) || e.reduce((r, n, o, s)=>{
        if (r && n in r) {
            if (o !== s.length - 1) return r[n];
            delete r[n];
        }
    }, t);
}, Yk = (t, e, r, n = !1)=>{
    !t || !Ub(e) || e.reduce((o, s, i, a)=>{
        if (o) {
            if (i !== a.length - 1) return !o[s] && n && (o[s] = {}), o[s];
            o[s] = r;
        }
    }, t);
}, Wb = (t, e)=>{
    let r = new Set;
    if (!Array.isArray(e)) return r;
    for (let [n, o, s] of e)if (!(!Array.isArray(o) || !o.length)) switch(r.add(o[0]), n){
        case "delete":
            Kk(t, o);
            break;
        case "update":
        case "set":
            Yk(t, o, s, !0);
            break;
        default:
            break;
    }
    return r;
};
P();
var Hb = (t, e, r)=>(n = {})=>{
        let { data: o } = n, { schema: s } = n;
        o && (o = t.call("deepDestringifyFunctions", o, Array.isArray(o) ? [] : {}), Object.entries(o).forEach(([i, a])=>{
            r[i] && typeof r[i] == "object" ? i === "designSystem" ? Ae(a) : ar(r[i], a) : r[i] = a;
        }), s && (r.schema = s));
    }, qb = (t, e, r)=>(n = {})=>{
        let { changes: o } = n;
        if (!o || !Array.isArray(o) || !o.length) return;
        o = t.call("deepDestringifyFunctions", o, Array.isArray(o) ? [] : {});
        let s = Wb(r, o);
        if (s.has("state") && e.update(r.state), [
            "pages",
            "components",
            "snippets",
            "functions",
            "assets"
        ].some((i)=>s.has(i))) {
            let { pathname: i, search: a, hash: c } = r.window.location;
            t.call("router", i + a + c, t.__ref.root, {}, {
                scrollToTop: !1
            });
        }
        s.has("designSystem") && Ae(r.designSystem);
    };
var Xk = {
    success: "green",
    error: "red",
    warning: "yellow"
}, Gb = (t, e, r)=>{
    if (t.symbols) {
        if (!r.connected) {
            r.notifications.connected = {
                title: "Connected",
                message: "to the Symbols live server"
            }, r.update({
                connected: !0
            });
            let n = setTimeout(()=>{
                delete r.notifications.connected, e.notifications.content.connected.update({
                    animation: "fadeOutDown"
                }), r.update({
                    connected: !0
                }), clearTimeout(n);
            }, 3e3);
        }
    } else if (r.connected) {
        r.notifications.connected = {
            title: "Disconnected",
            type: "error"
        }, r.update({
            connected: !1
        });
        let n = setTimeout(()=>{
            delete r.notifications.connected, e.notifications.content.connected && e.notifications.content.connected.update({
                animation: "fadeOutDown"
            }), r.update({
                connected: !0
            }), clearTimeout(n);
        }, 3e3);
    }
}, Kb = {
    state: {
        notifications: []
    },
    Notifications: {
        position: "fixed",
        left: "A2",
        bottom: "Z2",
        zIndex: "999",
        childExtends: "Notification",
        childProps: ({ state: t })=>({
                animationDuration: "C",
                background: Xk[t.type || "success"],
                icon: null,
                Flex: {
                    Title: {
                        text: "{{ title }}"
                    },
                    P: {
                        text: "{{ title }}"
                    }
                },
                onRender: (e, r, n)=>{
                    r.update({
                        animation: "fadeInUp"
                    });
                },
                onClick: (e, r, n)=>{
                    delete n.notifications[r.key], r.update({
                        animation: "fadeOutDown"
                    }), n.onClose && n.onClose(e, r, n);
                }
            }),
        IconText: null,
        childrenAs: "state",
        children: ({ state: t })=>t.notifications
    }
};
var Zk = !1, Jk = ()=>Zk ? "http://localhost:8080" : "https://api.symbols.app", Qk = (t)=>{
    let e = t && t.editor && t.editor.socketUrl || t && t.settings && t.settings.socketUrl;
    return typeof e == "string" && e ? {
        mode: "collab",
        baseUrl: e
    } : t && t.editor && t.editor.runtime === "runner" ? {
        mode: "runner",
        baseUrl: null
    } : {
        mode: null,
        baseUrl: null
    };
}, tv = async (t)=>{
    try {
        let e = t || Jk(), r = await k.fetch(`${e}/service-token`, {
            method: "GET"
        }), n;
        try {
            let o = await r.clone().json();
            if (o && typeof o.token == "string") return o.token.trim();
            n = await r.text();
        } catch  {
            n = await r.text();
        }
        return (n || "").replace(/\s+/gu, "") || void 0;
    } catch (e) {
        console.error("[sync] Failed to fetch service-token", e);
    }
}, Zb = (t, e, r, n)=>{
    t.on("snapshot", Hb(e, r, n)), t.on("ops", qb(e, r, n)), t.on("clients", (o)=>{
        n.editor?.verbose && Gb(o, e, r);
    }), t.on("disconnect", (o)=>{
        n.editor?.verbose && console.info("[sync] disconnected", o);
    });
}, ev = async (t, e, r, n)=>{
    let o = await tv(n);
    if (!o) return console.warn("[sync] no service token \u2014 collab disabled"), null;
    let s = r.key;
    if (!s) return console.warn("[sync] ctx.key missing \u2014 collab cannot authenticate"), null;
    let i = r.editor?.projectId || null, a = Ur(n, {
        path: "/collab-socket",
        transports: [
            "websocket"
        ],
        auth: {
            token: o,
            projectId: i,
            projectKey: s,
            branch: "main",
            live: !0,
            clientType: "platform"
        },
        reconnectionAttempts: 1 / 0,
        reconnectionDelayMax: 4e3
    });
    return a.on("connect", ()=>{
        r.editor?.verbose && console.info("[sync] connected (collab)");
    }), Zb(a, t, e, r), a;
}, rv = (t, e, r)=>{
    let n = Ur({
        transports: [
            "websocket",
            "polling"
        ],
        reconnectionAttempts: 1 / 0,
        reconnectionDelayMax: 4e3
    });
    return n.on("connect", ()=>{
        r.editor?.verbose !== !1 && console.info("[sync] connected (runner)");
    }), Zb(n, t, e, r), n.on("reload", ()=>{
        typeof k < "u" && k.location && k.location.reload();
    }), n;
}, nv = async (t, e, r)=>{
    let { mode: n, baseUrl: o } = Qk(r);
    return n ? n === "collab" ? ev(t, e, r, o) : n === "runner" ? rv(t, e, r) : null : null;
}, ov = {
    onInit: nv
};
var Jb = (t)=>typeof t > "u", Yb = (t)=>!!(t?.editor?.socketUrl || t?.settings?.socketUrl), Xb = (t)=>t?.editor?.runtime === "runner", Qb = (t, e)=>{
    Array.isArray(t.extends) ? t.extends.push(e) : t.extends ? t.extends = [
        t.extends,
        e
    ] : t.extends = [
        e
    ];
}, tx = {
    name: "sync",
    beforeCreate (t, e) {
        let r = e && e.editor;
        (r && !Jb(r.liveSync) ? r.liveSync : Yb(e) || Xb(e)) && (Yb(e) && !Xb(e) && !e?.key || Qb(t, ov));
    }
}, ex = {
    name: "notifications",
    beforeCreate (t, e) {
        if (!e) return;
        let r = Jb(e.notifications) ? null : e.notifications, n = e.editor && e.editor.verbose === !0;
        (r === !0 || r !== !1 && n) && Qb(t, Kb);
    }
};
P();
function rx(t) {
    return _(t) ? t : T(t) ? t.find((e)=>_(e)) : "";
}
function bf(t) {
    if (!t) return;
    let e = t.__ref.__componentKey, r = t.extends && rx(t.extends), n = t.parent && t.parent.childExtends && rx(t.parent.childExtends);
    return (e || r || n || "").split("_")[0].split(".")[0].split("+")[0];
}
function hi(t) {
    if (!t || !t.__ref) return;
    let { components: e, pages: r, editor: n } = t.context, o = bf(t);
    return n && n.onInitInspect && !n.onInitInspect(o, t, t.state) ? hi(t.parent) : o && (e[o] || r[o]) ? t : hi(t.parent);
}
var sv = (t, e, r)=>{
    let n = r.window || window;
    n.onkeydown = (o)=>{
        o.altKey && o.shiftKey && t.state.update({
            debugging: !0,
            preventSelect: !0
        }, {
            preventUpdate: !0,
            preventContentUpdate: !0,
            preventRecursive: !0
        });
    }, n.onkeyup = (o)=>{
        t.state.preventSelect && (!o.altKey || !o.shiftKey) && (t.state.replace({
            debugging: !1,
            preventSelect: !1
        }, {
            preventUpdate: !0,
            preventContentUpdate: !0,
            preventRecursive: !0
        }), t.Inspector.state.update({
            area: !1
        }));
    };
}, yf = {
    ".preventSelect": {
        userSelect: "none"
    },
    "!preventSelect": {
        userSelect: "auto"
    },
    onInspect: sv,
    onMousemove: (t, e, r)=>{
        let n = t.target.ref, o = hi(n), s = e.Inspector.state;
        if (!o || !r.debugging || !o.__ref) return s.update({
            area: !1
        });
        let i = bf(o), a = (l)=>{
            s.update({
                area: l,
                focusKey: i
            });
        }, c = ()=>{
            if (t.altKey && t.shiftKey) {
                let { x: l, y: f, width: p, height: u } = o.node.getBoundingClientRect(), d = {
                    x: l,
                    y: f,
                    width: p,
                    height: u
                };
                if (!s.area) return a(d);
                s.area.x !== d.x && a(d);
            } else s.area && s.update({
                area: !1
            });
        };
        window.requestAnimationFrame(()=>{
            c(), window.requestAnimationFrame(c);
        });
    },
    onMousedown: (t, e, r)=>{
        if (!r.debugging) return;
        let n = t.target.ref, o = hi(n);
        if (!o) return;
        let s = bf(o);
        if (!s) return;
        let i = n.context.editor;
        if (i && i.onInspect) return i.onInspect(s, n, n.state, {
            allowRouterWhileInspect: !0
        });
        let a = JSON.stringify({
            componentKey: `${s}`
        });
        return n.context.socket?.emit && n.context.socket.emit("route", a), t.preventDefault(), t.stopPropagation(), !1;
    },
    Inspector: {
        state: {},
        transition: "all, defaultBezier, X",
        position: "fixed",
        hide: (t, e)=>!(e.area && e.parent.debugging),
        style: {
            boxShadow: "0 0 10px #3686F733, 0 0 0 3px #3686F766, 0 0 100vmax 100vmax #000A",
            zIndex: "9999999",
            borderRadius: "10px",
            pointerEvents: "none"
        },
        Span: {
            position: "absolute",
            margin: "A2 0",
            fontSize: "Z",
            color: "text",
            zIndex: "99999999",
            transition: "all, defaultBezier, X",
            textDecoration: "underline",
            fontWeight: "500",
            top: "100%",
            style: {
                boxShadow: "0 25px 10px 35px black",
                textShadow: "0 0 10px black"
            },
            text: "{{ focusKey }}"
        },
        onInit: ({ context: t })=>{
            let { components: e } = t;
            if (S(e)) {
                let { Content: r, ...n } = e;
                for(let o in n)Tn[o] || (n[o].__ref || (n[o].__ref = {}), n[o].__ref.__componentKey || (n[o].__ref.__componentKey = o));
            }
        },
        onBeforeUpdate: (t, e, r)=>{
            let { area: n } = r, o = r.area && r.parent.debugging, s;
            if (!o) s = "display: none !important";
            else if (n) {
                let { x: i, y: a, width: c, height: l } = n;
                s = `
            display: block !important;
            top: ${a - 6}px;
            left: ${i - 6}px;
            width: ${c + 12}px;
            height: ${l + 12}px;
          `;
            }
            return e.node.style = s, e.Span.node.innerText = r.focusKey, !1;
        }
    }
}, nx = {
    name: "inspect",
    beforeCreate (t, e) {
        Array.isArray(t.extends) ? t.extends.push(yf) : t.extends ? t.extends = [
            t.extends,
            yf
        ] : t.extends = [
            yf
        ];
    }
};
var iv = async (t1, e = {})=>{
    let r = e.symbolsConfig, n = r?.owner && r?.key ? `${r.owner}--${r.key}` : r?.key, o = e.key = e.key || n || (_(t1) ? t1 : "smblsapp");
    if (e.define = e.define || In, e.cssPropsRegistry = lt, e.window = Ey(e), e.sharedLibraries && e.sharedLibraries.length) {
        if (e.sharedLibraries.some((d)=>typeof d == "string")) {
            let { resolveSharedLibraries: d } = await Promise.resolve().then(function() {
                return import(t || "@symbo.ls/wasm/pkg");
            }).then((res)=>(P(), Nd));
            e.sharedLibraries = await d(e.sharedLibraries);
        }
        Ny(e);
    }
    let [s, i] = Dy(o, e);
    e.designSystem = s, e.registry = i, e.cases || (e.cases = {}), e.shorthand && Js.prepareContext(e);
    let a = Ly(t1, e);
    e.state = a, Uo(a), e.pages = My(t1, e), e.components = Ty(e), e.utils = Oy(e), We[e.packageManager] && (e.dependencies = await Py(e)), e.methods = Ry(e), e.routerOptions = py(t1, e), e.defaultExtends = [
        Ls
    ], e.snippets = e.snippets || {}, e.functions = e.functions || {}, e.plugins = e.plugins || [], e.globalScope && S(e.globalScope) && (e.globalScope = fo(e.globalScope));
    let c = (u, d)=>{
        let h = d ? u[d] : u;
        if (!S(h)) return;
        let g = ie(h);
        try {
            Object.assign(h, g);
        } catch (m) {
            if (d) u[d] = g;
            else throw m;
        }
    };
    c(t1), c(e, "components"), c(e, "pages"), c(e, "functions"), c(e, "methods"), c(e, "snippets"), c(e, "app");
    let l = (u)=>u && typeof u.select == "function";
    e.fetch?.__resolved && !l(e.fetch.__resolved) && delete e.fetch.__resolved, e.db?.__resolved && !l(e.db.__resolved) && delete e.db.__resolved;
    let f = (u)=>e.plugins.some((d)=>d.name === u);
    if (e.polyglot && !f("polyglot")) {
        e.plugins.push(jl);
        for(let u in Ys)u in e.functions || (e.functions[u] = Ys[u]);
    }
    if (f("helmet") || e.plugins.push(by), e.fetch && !f("fetch") && e.plugins.push(ka), e.designSystem?.typography?.useCapsize !== !1 && !f("capsize") && (e.plugins.push(Uy), e.cssPropsRegistry.useCapsize = zy), e.shorthand && !f("shorthand") && e.plugins.push(Js), e.analyze && !f("analyze")) {
        let u = e.analyze === !0 ? {} : e.analyze;
        e.analyze = tf(u), e.plugins.push(Bn);
    }
    return e.sync !== !1 && !f("sync") && e.plugins.push(tx), e.inspect && !f("inspect") && e.plugins.push(nx), (e.notifications === !0 || e.editor && e.editor.verbose === !0) && e.notifications !== !1 && !f("notifications") && e.plugins.push(ex), e;
}, xf = async (t, e)=>{
    S(e) || (e = {}), he(t) ? (t = {}, e.parent = t) : _(t) ? (t = {}, e.key = t) : S(t) || (t = {});
    let r = e.window || (typeof window < "u" ? window : null), n = r?.__BRENDER__, o = null;
    if (n) {
        let c = e.document || (typeof document < "u" ? document : null);
        c && (o = Array.from(c.head.querySelectorAll("style")));
    }
    if (await iv(t, e), e.useReset !== !1) {
        let c = e.document || (typeof document < "u" ? document : null);
        if (c) {
            let l = c.head.querySelector("style[data-smbls]");
            l || (l = c.createElement("style"), l.setAttribute("data-smbls", ""), c.head.appendChild(l));
            let f = l.sheet;
            if (f) {
                try {
                    f.insertRule("*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }", 0);
                } catch  {}
                try {
                    f.insertRule("h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }", 1);
                } catch  {}
            }
        }
    }
    if (e.app && S(e.app)) for(let c in e.app)t[c] === void 0 && (t[c] = e.app[c]);
    t.extends = ky(t, e), e.router !== !1 && (t.routes = e.pages), t.state = e.state, t.context = e, t.data = t.data || {}, e.skipDesignSystemInit || await Iy({
        functions: e.functions,
        utils: e.utils,
        snippets: e.snippets,
        ...e.files
    }, e);
    for (let c of e.plugins)if (typeof c.beforeCreate == "function") try {
        c.beforeCreate(t, e);
    } catch (l) {
        console.error(`[smbls] plugin "${c.name || "?"}" beforeCreate error:`, l);
    }
    let s = e.document;
    if (!s || !s.createElement) return t;
    let i = e.parent || s.body;
    if (n) return av(zt, t, i, e, r, o);
    let a = zt(t, i, e.key, {
        verbose: e.verbose,
        context: e,
        ...e.domqlOptions
    });
    return typeof window < "u" && !e.document && (window.__smblsApp = a), a;
}, av = async (t, e, r, n, o, s)=>{
    let i = r.ownerDocument || document;
    s && s.forEach((l)=>{
        l.parentNode && l.remove();
    });
    let a = [];
    for (let l of r.childNodes){
        if (l.nodeType === 1) {
            let f = l.tagName.toLowerCase();
            if (f === "script" || f === "link" || f === "style" || f === "svg" && l.id) continue;
        }
        a.push(l);
    }
    a.forEach((l)=>l.remove()), i.querySelectorAll("[data-br]").forEach((l)=>l.removeAttribute("data-br"));
    let c = t(e, r, n.key, {
        verbose: n.verbose,
        context: n,
        ...n.domqlOptions
    });
    return cv(o), c;
}, cv = (t)=>{
    t && (delete t.__BRENDER__, delete t.__BR_REGISTRY__);
};
var Sf = (t, e)=>q(t, S(e) ? e : {}), lv = (t)=>{
    if (typeof document > "u") return;
    let e = t.themeRoot || t.document && t.document.documentElement || document.documentElement;
    if (!e || typeof e.setAttribute != "function") return;
    let r = t.globalTheme || "auto";
    try {
        if (typeof window < "u" && window.location) {
            let s = new URLSearchParams(window.location.search).get("globalTheme");
            s && (r = s);
        }
    } catch  {}
    let n = t.themeStorageKey;
    if (r === "auto" && n && typeof localStorage < "u") try {
        let s = localStorage.getItem(n);
        s && (r = s);
    } catch  {}
    let o = r === "auto" ? (()=>{
        try {
            return typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        } catch  {
            return "light";
        }
    })() : r;
    e.setAttribute("data-theme", o), t.globalTheme = r, t.themeRoot = e;
}, fv = ()=>{
    if (typeof document > "u") return null;
    try {
        let t = document.querySelector('meta[name="symbols-runtime"]'), e = t && t.getAttribute("content");
        return typeof e == "string" && e ? e : null;
    } catch  {
        return null;
    }
}, ox = (t)=>{
    let e = fv();
    e && (t.editor || (t.editor = {}), t.editor.runtime || (t.editor.runtime = e), e === "runner" && typeof t.editor.livesync > "u" && (t.editor.livesync = !0));
}, sx = (t, e = Ee, r)=>{
    let n = {
        ...Ee,
        ...Sf(e, r)
    };
    return ox(n), lv(n), xf(t, n).then((s)=>{
        if (Ol(s, n), s.destroy = ()=>Us(s), s.navigate = (i, a = {})=>{
            let c = s, l = s.context && s.context.routerOptions;
            if (l && l.customRouterElement) {
                let f = Pn(s, l.customRouterElement);
                f && (c = f);
            }
            return c.call("router", i, c, a.state || {}, {
                pushState: !0,
                ...a
            });
        }, s.onCreate && s.onCreate(s, s.state, s.context, n), s.context?.analyze?.activate) try {
            s.context.analyze.activate(s.context);
        } catch (i) {
            console.error("[analyze] activate error:", i);
        }
        return s;
    }).catch((s)=>{
        throw console.error("[smbls] create error:", s), s;
    });
}, PD = (t, e = Ee, r)=>{
    let n = sx(t, e, r), o = {
        ...Ee,
        ...Sf(e, r)
    }, s = o.key;
    return my(n, s, {
        utils: Rn,
        ...o
    }), n;
}, ID = async (t, e = Ee, r)=>{
    let n = {
        ...Ee,
        ...Sf(e, r)
    };
    ox(n);
    let o = e.key;
    await gy(o, n);
    let s = await xf(t, n);
    return Ol(s, n), s.destroy = ()=>Us(s), s.navigate = (i, a = {})=>{
        let c = s, l = s.context && s.context.routerOptions;
        if (l && l.customRouterElement) {
            let f = Pn(s, l.customRouterElement);
            f && (c = f);
        }
        return c.call("router", i, c, a.state || {}, {
            pushState: !0,
            ...a
        });
    }, n.onCreate && await n.onCreate(s, s.state, s.context, n), s;
}, $D = (t = {}, e = Ee, r)=>sx({
        deps: {
            isUndefined: ht
        },
        ...t
    }, q({
        domqlOptions: {
            onlyResolveExtends: !0
        }
    }, e), r);
El(bc);

},{"8f86adca222f5bd8":"gcQ1l","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gcQ1l":[function(require,module,exports,__globalThis) {
module.exports = import("./dist.9b47b0f4.js").then(()=>module.bundle.root('6LYPf'));

},{"6LYPf":"6LYPf"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"jl3lw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"k06vV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _stateJs = require("./state.js");
var _stateJsDefault = parcelHelpers.interopDefault(_stateJs);
var _dependenciesJs = require("./dependencies.js");
var _dependenciesJsDefault = parcelHelpers.interopDefault(_dependenciesJs);
var _indexJs = require("./components/index.js");
var _indexJs1 = require("./snippets/index.js");
var _indexJs2 = require("./pages/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs2);
var _indexJs3 = require("./functions/index.js");
var _indexJs4 = require("./methods/index.js");
var _indexJs5 = require("./designSystem/index.js");
var _indexJsDefault1 = parcelHelpers.interopDefault(_indexJs5);
var _indexJs6 = require("./files/index.js");
var _indexJsDefault2 = parcelHelpers.interopDefault(_indexJs6);
var _sharedLibrariesJs = require("./sharedLibraries.js");
var _sharedLibrariesJsDefault = parcelHelpers.interopDefault(_sharedLibrariesJs);
var _casesJs = require("./cases.js");
var _casesJsDefault = parcelHelpers.interopDefault(_casesJs);
var _configJs = require("./config.js");
var _configJsDefault = parcelHelpers.interopDefault(_configJs);
var _envsJs = require("./envs.js");
var _envsJsDefault = parcelHelpers.interopDefault(_envsJs);
exports.default = {
    ...(0, _configJsDefault.default),
    cases: (0, _casesJsDefault.default),
    state: (0, _stateJsDefault.default),
    dependencies: (0, _dependenciesJsDefault.default),
    components: _indexJs,
    snippets: _indexJs1,
    pages: (0, _indexJsDefault.default),
    functions: _indexJs3,
    methods: _indexJs4,
    designSystem: (0, _indexJsDefault1.default),
    files: (0, _indexJsDefault2.default),
    sharedLibraries: (0, _sharedLibrariesJsDefault.default),
    envs: (0, _envsJsDefault.default)
};

},{"./state.js":"4DJUA","./dependencies.js":"3VtKy","./components/index.js":"8I11H","./snippets/index.js":"5bUHH","./pages/index.js":"4orDD","./functions/index.js":"fW7wW","./methods/index.js":"4XYUQ","./designSystem/index.js":"kwOEv","./files/index.js":"lqMwD","./sharedLibraries.js":"gciLd","./cases.js":"5wy6R","./config.js":"djZQJ","./envs.js":"ataAr","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4DJUA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    profile: {
        name: 'Allen Johnson',
        headline: 'Senior Software QA Automation Engineer & Tech Lead',
        location: 'Davao City, Philippines',
        status: 'Actively seeking new professional opportunities',
        coreSkills: [
            'Java',
            'Kotlin',
            'Swift',
            'Javascript',
            'UI Testing',
            'API Testing',
            'Integration Testing',
            'Unit Testing',
            'Test automation frameworks',
            'Mobile testing',
            'JUnit',
            'Selenium WebDriver',
            'Cucumber',
            'TestCafe',
            'Tape',
            'Postman',
            'cURL',
            'Charles Proxy',
            'Espresso',
            'XCUITest',
            'Test planning',
            'Test case design',
            'Requirements gathering',
            'Git',
            'Jenkins',
            'JIRA',
            'Confluence',
            'Pivotal Tracker',
            'Continuous Integration',
            'Android Studio',
            'Xcode',
            'IntelliJ',
            'VS Code',
            'Google Antigravity',
            'Gemini CLI Code Assist'
        ]
    },
    projects: [
        {
            id: 'proj_1',
            title: 'Visual Node-Based Automation Editor',
            summary: 'A spatial IDE for constructing automated test workflows via an infinite node-graph interface, featuring Bezier curve wiring and JSON serialization.',
            tags: [
                'DOMQL3',
                'State Management',
                'SVG Render'
            ],
            link: 'https://github.com/allenbrokeit/Automation-Editor',
            bentoSize: 'large'
        },
        {
            id: 'proj_2',
            title: 'Symbols Kanban',
            summary: 'A dynamic Kanban board built with Symbols and DOMQL, featuring drag-and-drop task management, priority levels, and an integrated calendar view.',
            tags: [
                'DOMQL3',
                'State Management',
                'Drag & Drop'
            ],
            link: 'https://github.com/allenbrokeit/SymbolsToDoList',
            bentoSize: 'medium'
        },
        {
            id: 'proj_3',
            title: 'Symbols Tech Blog',
            summary: 'A professional technical blog built with the Symbols.app framework, featuring reactive state management, dynamic routing, and a centralized design system with HSL color tokens.',
            tags: [
                'DOMQL3',
                'Design System',
                'Dynamic Routing'
            ],
            link: 'https://github.com/allenbrokeit/SymbolsTechBlog',
            bentoSize: 'large'
        },
        {
            id: 'proj_4',
            title: 'Automated QA Test Run Dashboard',
            summary: 'A transactional execution environment for regression runs with high-density data grids and real-time metric aggregation.',
            tags: [
                'SQLite',
                'API Middleware',
                'Data Visualization'
            ],
            link: 'https://github.com/allenbrokeit/QA-Dashboard',
            bentoSize: 'medium'
        },
        {
            id: 'proj_5',
            title: 'Contractor Pipeline',
            summary: 'A CRM and project management dashboard designed for independent contractors to effectively track client engagements, manage project lifecycles, and monitor financial health.',
            tags: [
                'DOMQL3',
                'CRM',
                'Financial Tracking'
            ],
            link: 'https://github.com/allenbrokeit/ContractorPipeline',
            bentoSize: 'large'
        }
    ]
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3VtKy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8I11H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _glassCardJs = require("./GlassCard.js");
parcelHelpers.exportAll(_glassCardJs, exports);
var _ambientOrbJs = require("./AmbientOrb.js");
parcelHelpers.exportAll(_ambientOrbJs, exports);
var _heroSectionJs = require("./HeroSection.js");
parcelHelpers.exportAll(_heroSectionJs, exports);
var _techBadgeJs = require("./TechBadge.js");
parcelHelpers.exportAll(_techBadgeJs, exports);
var _techMarqueeJs = require("./TechMarquee.js");
parcelHelpers.exportAll(_techMarqueeJs, exports);
var _interactiveProjectTileJs = require("./InteractiveProjectTile.js");
parcelHelpers.exportAll(_interactiveProjectTileJs, exports);
var _bentoProjectGridJs = require("./BentoProjectGrid.js");
parcelHelpers.exportAll(_bentoProjectGridJs, exports);
var _spotlightWrapperJs = require("./SpotlightWrapper.js");
parcelHelpers.exportAll(_spotlightWrapperJs, exports);
var _magneticButtonJs = require("./MagneticButton.js");
parcelHelpers.exportAll(_magneticButtonJs, exports);
var _scrollRevealSectionJs = require("./ScrollRevealSection.js");
parcelHelpers.exportAll(_scrollRevealSectionJs, exports);
var _contactSectionJs = require("./ContactSection.js");
parcelHelpers.exportAll(_contactSectionJs, exports);

},{"./GlassCard.js":"gR5Lo","./AmbientOrb.js":"19k71","./HeroSection.js":"fIuNN","./TechBadge.js":"kqyrX","./TechMarquee.js":"8yYzb","./InteractiveProjectTile.js":"aqwpb","./BentoProjectGrid.js":"bIuUk","./SpotlightWrapper.js":"38lW5","./MagneticButton.js":"jF3kF","./ScrollRevealSection.js":"4EbJT","./ContactSection.js":"ifVze","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gR5Lo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GlassCard", ()=>GlassCard);
const GlassCard = {
    flow: 'y',
    theme: 'glass',
    padding: 'B',
    borderRadius: 'Z',
    border: '1px solid white.08',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    ':hover': {
        borderColor: 'white.15'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"19k71":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AmbientOrb", ()=>AmbientOrb);
parcelHelpers.export(exports, "AmbientOrbSecondary", ()=>AmbientOrbSecondary);
const AmbientOrb = {
    position: 'fixed',
    width: 'H',
    height: 'H',
    borderRadius: '50%',
    background: 'cyber',
    opacity: '.3',
    filter: 'blur(120px)',
    pointerEvents: 'none',
    zIndex: '0',
    top: '20%',
    left: '60%',
    animation: 'orbFloat 20s ease-in-out infinite'
};
const AmbientOrbSecondary = {
    position: 'fixed',
    width: 'G',
    height: 'G',
    borderRadius: '50%',
    background: 'neon',
    opacity: '.2',
    filter: 'blur(100px)',
    pointerEvents: 'none',
    zIndex: '0',
    top: '60%',
    left: '20%',
    animation: 'orbFloat 25s ease-in-out infinite reverse'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fIuNN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HeroSection", ()=>HeroSection);
const HeroSection = {
    tag: 'section',
    flow: 'y',
    align: 'center center',
    minHeight: '100vh',
    position: 'relative',
    zIndex: '1',
    padding: 'D B',
    gap: 'B',
    textAlign: 'center',
    attr: {
        'aria-label': 'Hero introduction section'
    },
    HeroContent: {
        flow: 'y',
        align: 'center center',
        gap: 'A',
        maxWidth: '80%',
        HeroTitle: {
            tag: 'h1',
            text: (el, s)=>s.root.profile.name,
            fontSize: 'H',
            fontWeight: '800',
            letterSpacing: '-0.04em',
            lineHeight: '0.9',
            color: 'white',
            '@tabletS': {
                fontSize: 'G'
            },
            '@mobileL': {
                fontSize: 'F'
            }
        },
        HeroHeadline: {
            tag: 'h2',
            text: (el, s)=>s.root.profile.headline,
            fontSize: 'B',
            fontWeight: '400',
            color: 'caption',
            lineHeight: '1.4',
            maxWidth: '70%',
            '@mobileL': {
                fontSize: 'A'
            }
        },
        HeroMeta: {
            flow: 'x',
            flexWrap: 'wrap',
            align: 'center center',
            gap: 'A',
            marginTop: 'Z',
            LocationMeta: {
                flow: 'x',
                align: 'center center',
                gap: 'Y',
                color: 'paragraph',
                LocationIcon: {
                    extends: 'Icon',
                    icon: 'mapPin',
                    width: 'A',
                    height: 'A',
                    color: 'cyber'
                },
                LocationText: {
                    tag: 'span',
                    text: (el, s)=>s.root.profile.location,
                    fontSize: 'Z'
                }
            },
            StatusMeta: {
                flow: 'x',
                align: 'center center',
                gap: 'Y',
                color: 'paragraph',
                StatusIcon: {
                    extends: 'Icon',
                    icon: 'briefcase',
                    width: 'A',
                    height: 'A',
                    color: 'neon'
                },
                StatusText: {
                    tag: 'span',
                    text: (el, s)=>s.root.profile.status,
                    fontSize: 'Z'
                }
            }
        }
    },
    ScrollIndicator: {
        position: 'absolute',
        bottom: 'C',
        flow: 'y',
        align: 'center center',
        gap: 'Y',
        opacity: '.5',
        cursor: 'pointer',
        animation: 'fadeInUp 2s ease-in-out infinite alternate',
        onClick: (e, el)=>{
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        },
        ScrollIcon: {
            extends: 'Icon',
            icon: 'chevronDown',
            width: 'B',
            height: 'B',
            color: 'cyber'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kqyrX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TechBadge", ()=>TechBadge);
const TechBadge = {
    tag: 'span',
    theme: 'badge',
    padding: 'X Z',
    borderRadius: 'Y',
    border: '1px solid cyber.15',
    fontSize: 'Y',
    fontWeight: '500',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s ease',
    text: (el, s)=>s.label || s.text || s,
    ':hover': {
        borderColor: 'cyber.35',
        background: 'cyber.08'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8yYzb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TechMarquee", ()=>TechMarquee);
const TechMarquee = {
    flow: 'y',
    gap: 'B',
    overflow: 'hidden',
    padding: 'C 0',
    position: 'relative',
    zIndex: '1',
    attr: {
        'aria-label': 'Technology skills marquee'
    },
    MarqueeTitle: {
        tag: 'h3',
        text: 'Tech Ecosystem',
        fontSize: 'C',
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginBottom: 'A'
    },
    MarqueeTrack: {
        flow: 'x',
        gap: 'Z',
        width: 'max-content',
        animation: 'marquee 30s linear infinite',
        MarqueeSet1: {
            flow: 'x',
            gap: 'Z',
            children: (el, s)=>(s.root.profile.coreSkills || []).map(function mapSkill(skill) {
                    return {
                        text: skill
                    };
                }),
            childExtends: 'TechBadge'
        },
        MarqueeSet2: {
            flow: 'x',
            gap: 'Z',
            children: (el, s)=>(s.root.profile.coreSkills || []).map(function mapSkill(skill) {
                    return {
                        text: skill
                    };
                }),
            childExtends: 'TechBadge'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aqwpb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractiveProjectTile", ()=>InteractiveProjectTile);
const InteractiveProjectTile = {
    extends: 'GlassCard',
    cursor: 'pointer',
    transition: 'transform 0.15s ease-out, border-color 0.3s ease',
    willChange: 'transform',
    onMouseMove: (e, el)=>el.call('applyTilt', e),
    onMouseLeave: (e, el)=>el.call('resetTilt'),
    attr: {
        'aria-label': (el, s)=>'Project: ' + (s.title || '')
    },
    TileContent: {
        flow: 'y',
        gap: 'A',
        TileHeader: {
            flow: 'x',
            align: 'center space-between',
            gap: 'Z',
            TileTitle: {
                tag: 'h3',
                text: (el, s)=>s.title,
                fontSize: 'A',
                fontWeight: '700',
                color: 'white',
                lineHeight: '1.2'
            },
            TileLinkIcon: {
                tag: 'a',
                attr: {
                    href: (el, s)=>s.link || '#',
                    target: '_blank',
                    'aria-label': 'Project Link'
                },
                opacity: '.5',
                transition: 'opacity 0.2s ease',
                ':hover': {
                    opacity: '1'
                },
                Icon: {
                    extends: 'Icon',
                    icon: 'externalLink',
                    width: 'A',
                    height: 'A',
                    color: 'cyber'
                }
            }
        },
        TileSummary: {
            text: (el, s)=>s.summary,
            fontSize: 'Z',
            color: 'paragraph',
            lineHeight: '1.6'
        },
        TileTagList: {
            flow: 'x',
            flexWrap: 'wrap',
            gap: 'Y',
            marginTop: 'Y',
            children: (el, s)=>(s.tags || []).map(function mapTag(tag) {
                    return {
                        text: tag
                    };
                }),
            childExtends: 'TechBadge'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bIuUk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BentoProjectGrid", ()=>BentoProjectGrid);
const BentoProjectGrid = {
    tag: 'section',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 'A',
    padding: '0 B',
    maxWidth: '90%',
    margin: '0 auto',
    position: 'relative',
    zIndex: '1',
    attr: {
        'aria-label': 'Project showcase grid'
    },
    '@mobileL': {
        gridTemplateColumns: '1fr',
        padding: '0 A'
    },
    SectionTitle: {
        tag: 'h2',
        gridColumn: '1 / -1',
        text: 'Featured Projects',
        fontSize: 'D',
        fontWeight: '700',
        color: 'white',
        marginBottom: 'A',
        '@mobileL': {
            fontSize: 'C'
        }
    },
    ProjectsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'A',
        gridColumn: '1 / -1',
        '@mobileL': {
            gridTemplateColumns: '1fr'
        },
        children: (el, s)=>s.root.projects,
        childExtends: 'InteractiveProjectTile',
        childrenAs: 'state'
    },
    GridScrollIndicator: {
        gridColumn: '1 / -1',
        flow: 'y',
        align: 'center center',
        gap: 'Y',
        marginTop: 'B',
        opacity: '.5',
        cursor: 'pointer',
        animation: 'fadeInUp 2s ease-in-out infinite alternate',
        transition: 'opacity 0.2s ease',
        ':hover': {
            opacity: '1'
        },
        onClick: (e, el)=>{
            var target = document.getElementById('contact');
            if (target) target.scrollIntoView({
                behavior: 'smooth'
            });
        },
        GridScrollIcon: {
            extends: 'Icon',
            icon: 'chevronDown',
            width: 'B',
            height: 'B',
            color: 'cyber'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"38lW5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpotlightWrapper", ()=>SpotlightWrapper);
const SpotlightWrapper = {
    position: 'relative',
    overflow: 'hidden',
    onMouseMove: (e, el)=>{
        var rect = el.node.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        el.node.style.setProperty('--spotlight-x', x + 'px');
        el.node.style.setProperty('--spotlight-y', y + 'px');
    },
    onMouseLeave: (e, el)=>{
        el.node.style.removeProperty('--spotlight-x');
        el.node.style.removeProperty('--spotlight-y');
    },
    style: {
        background: 'radial-gradient(600px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(0, 240, 255, 0.04), transparent 40%)'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jF3kF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MagneticButton", ()=>MagneticButton);
const MagneticButton = {
    extends: 'Button',
    theme: 'glass-elevated',
    padding: 'Z1 B',
    fontSize: 'Z',
    fontWeight: '600',
    borderRadius: 'Z',
    border: '1px solid cyber.25',
    color: 'cyber',
    cursor: 'pointer',
    transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background 0.3s ease',
    position: 'relative',
    zIndex: '1',
    onMouseMove: (e, el)=>el.call('applyMagnetic', e),
    onMouseLeave: (e, el)=>el.call('resetMagnetic'),
    ':hover': {
        borderColor: 'cyber.5',
        background: 'cyber.08'
    },
    ':active': {
        transform: 'scale(0.97)'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4EbJT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollRevealSection", ()=>ScrollRevealSection);
const ScrollRevealSection = {
    tag: 'section',
    flow: 'y',
    position: 'relative',
    zIndex: '1',
    onRender: (el)=>{
        if (el.__initialized) return;
        el.__initialized = true;
        el.call('initScrollReveal');
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ifVze":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ContactSection", ()=>ContactSection);
const ContactSection = {
    flow: 'y',
    align: 'center center',
    gap: 'B',
    padding: 'F B',
    textAlign: 'center',
    position: 'relative',
    zIndex: '1',
    attr: {
        id: 'contact',
        'aria-label': 'Contact section'
    },
    ContactTitle: {
        tag: 'h2',
        text: "Let's Build Something",
        fontSize: 'D',
        fontWeight: '700',
        color: 'white',
        '@mobileL': {
            fontSize: 'C'
        }
    },
    ContactSubtitle: {
        text: 'Open to new roles, collaborations, and challenging development projects.',
        fontSize: 'A',
        color: 'paragraph',
        maxWidth: '60%',
        lineHeight: '1.6'
    },
    ContactCta: {
        extends: 'MagneticButton',
        tag: 'a',
        href: 'mailto:allenbrokeit@gmail.com',
        text: 'Get in Touch',
        icon: 'mail',
        gap: 'X',
        textDecoration: 'none'
    },
    SocialLinks: {
        flow: 'x',
        gap: 'B',
        marginTop: 'A',
        GithubLink: {
            extends: 'Link',
            href: 'https://github.com/allenbrokeit',
            target: '_blank',
            rel: 'noopener noreferrer',
            flow: 'x',
            align: 'center center',
            gap: 'Y',
            color: 'caption',
            transition: 'color 0.2s ease',
            ':hover': {
                color: 'cyber'
            },
            GithubIcon: {
                extends: 'Icon',
                icon: 'github',
                width: 'B',
                height: 'B'
            }
        },
        LinkedinLink: {
            extends: 'Link',
            href: 'https://www.linkedin.com/in/g-allen-johnson/',
            target: '_blank',
            rel: 'noopener noreferrer',
            flow: 'x',
            align: 'center center',
            gap: 'Y',
            color: 'caption',
            transition: 'color 0.2s ease',
            ':hover': {
                color: 'cyber'
            },
            LinkedinIcon: {
                extends: 'Icon',
                icon: 'linkedin',
                width: 'B',
                height: 'B'
            }
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5bUHH":[function(require,module,exports,__globalThis) {

},{}],"4orDD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mainJs = require("./main.js");
exports.default = {
    '/': (0, _mainJs.main)
};

},{"./main.js":"fguE9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fguE9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main);
const main = {
    extends: 'Page',
    flow: 'y',
    background: 'surface',
    position: 'relative',
    overflow: 'hidden',
    AmbientOrb: {},
    AmbientOrbSecondary: {},
    HeroSection: {},
    TechSection: {
        extends: 'ScrollRevealSection',
        TechMarquee: {}
    },
    ProjectSection: {
        extends: 'ScrollRevealSection',
        padding: 'D 0',
        SpotlightWrapper: {
            BentoProjectGrid: {}
        }
    },
    ContactReveal: {
        extends: 'ScrollRevealSection',
        ContactSection: {}
    },
    FooterBar: {
        tag: 'footer',
        flow: 'x',
        align: 'center center',
        padding: 'B',
        borderTop: '1px solid white.06',
        marginTop: 'D',
        FooterText: {
            text: "\xa9 2026 G. Allen Johnson. Built with Symbols & DOMQL3.",
            fontSize: 'Y',
            color: 'disabled'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fW7wW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _initScrollRevealJs = require("./initScrollReveal.js");
parcelHelpers.exportAll(_initScrollRevealJs, exports);
var _initTiltEffectJs = require("./initTiltEffect.js");
parcelHelpers.exportAll(_initTiltEffectJs, exports);
var _initMagneticEffectJs = require("./initMagneticEffect.js");
parcelHelpers.exportAll(_initMagneticEffectJs, exports);

},{"./initScrollReveal.js":"9HcNx","./initTiltEffect.js":"bwUWc","./initMagneticEffect.js":"l8XY7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9HcNx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScrollReveal", ()=>initScrollReveal);
const initScrollReveal = function initScrollReveal() {
    const node = this.node;
    if (!node || this.__scrollInitialized) return;
    this.__scrollInitialized = true;
    node.style.opacity = '0';
    node.style.transform = 'translateY(40px)';
    node.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    const observer = new IntersectionObserver(function onIntersect(entries) {
        entries.forEach(function handleEntry(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    observer.observe(node);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"bwUWc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyTilt", ()=>applyTilt);
parcelHelpers.export(exports, "resetTilt", ()=>resetTilt);
const applyTilt = function applyTilt(event) {
    const node = this.node;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5;
    const rotateY = (x - centerX) / centerX * 5;
    node.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
};
const resetTilt = function resetTilt() {
    const node = this.node;
    if (!node) return;
    node.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l8XY7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyMagnetic", ()=>applyMagnetic);
parcelHelpers.export(exports, "resetMagnetic", ()=>resetMagnetic);
const applyMagnetic = function applyMagnetic(event) {
    const node = this.node;
    if (!node) return;
    var rect = node.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    var distX = event.clientX - centerX;
    var distY = event.clientY - centerY;
    var distance = Math.sqrt(distX * distX + distY * distY);
    var proximity = 80;
    if (distance < proximity) {
        var strength = (1 - distance / proximity) * 0.35;
        var moveX = distX * strength;
        var moveY = distY * strength;
        node.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    } else node.style.transform = 'translate(0, 0)';
};
const resetMagnetic = function resetMagnetic() {
    var node = this.node;
    if (!node) return;
    node.style.transform = 'translate(0, 0)';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4XYUQ":[function(require,module,exports,__globalThis) {

},{}],"kwOEv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorJs = require("./color.js");
var _colorJsDefault = parcelHelpers.interopDefault(_colorJs);
var _gradientJs = require("./gradient.js");
var _gradientJsDefault = parcelHelpers.interopDefault(_gradientJs);
var _themeJs = require("./theme.js");
var _themeJsDefault = parcelHelpers.interopDefault(_themeJs);
var _fontJs = require("./font.js");
var _fontJsDefault = parcelHelpers.interopDefault(_fontJs);
var _fontFamilyJs = require("./font_family.js");
var _fontFamilyJsDefault = parcelHelpers.interopDefault(_fontFamilyJs);
var _typographyJs = require("./typography.js");
var _typographyJsDefault = parcelHelpers.interopDefault(_typographyJs);
var _spacingJs = require("./spacing.js");
var _spacingJsDefault = parcelHelpers.interopDefault(_spacingJs);
var _timingJs = require("./timing.js");
var _timingJsDefault = parcelHelpers.interopDefault(_timingJs);
var _classJs = require("./class.js");
var _classJsDefault = parcelHelpers.interopDefault(_classJs);
var _gridJs = require("./grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _iconsJs = require("./icons.js");
var _iconsJsDefault = parcelHelpers.interopDefault(_iconsJs);
var _shapeJs = require("./shape.js");
var _shapeJsDefault = parcelHelpers.interopDefault(_shapeJs);
var _resetJs = require("./reset.js");
var _resetJsDefault = parcelHelpers.interopDefault(_resetJs);
var _animationJs = require("./animation.js");
var _animationJsDefault = parcelHelpers.interopDefault(_animationJs);
var _mediaJs = require("./media.js");
var _mediaJsDefault = parcelHelpers.interopDefault(_mediaJs);
exports.default = {
    color: (0, _colorJsDefault.default),
    gradient: (0, _gradientJsDefault.default),
    theme: (0, _themeJsDefault.default),
    font: (0, _fontJsDefault.default),
    font_family: (0, _fontFamilyJsDefault.default),
    typography: (0, _typographyJsDefault.default),
    spacing: (0, _spacingJsDefault.default),
    timing: (0, _timingJsDefault.default),
    class: (0, _classJsDefault.default),
    grid: (0, _gridJsDefault.default),
    icons: (0, _iconsJsDefault.default),
    shape: (0, _shapeJsDefault.default),
    reset: (0, _resetJsDefault.default),
    animation: (0, _animationJsDefault.default),
    media: (0, _mediaJsDefault.default)
};

},{"./color.js":"5UvXh","./gradient.js":"7d3SA","./theme.js":"lHIIR","./font.js":"iazcN","./font_family.js":"a6wpi","./typography.js":"c0bW1","./spacing.js":"dP8x3","./timing.js":"jJqwn","./class.js":"d59TE","./grid.js":"cHLbq","./icons.js":"8nO3y","./shape.js":"fEOFZ","./reset.js":"5bXmD","./animation.js":"eZP86","./media.js":"1iSUc","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5UvXh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    // Base palette (from default template)
    green: '#389d34',
    red: '#e15c55',
    yellow: '#EDCB38',
    orange: '#e97c16',
    transparent: 'rgba(0, 0, 0, 0)',
    black: 'black',
    gray: '#4e4e50',
    white: '#ffffff',
    // Semantic text colors [@dark, @light]
    title: [
        '--gray 1 -168',
        '--gray 1 +168'
    ],
    caption: [
        '--gray 1 -68',
        '--gray 1 +68'
    ],
    paragraph: [
        '--gray 1 -42',
        '--gray 1 +42'
    ],
    disabled: [
        '--gray 1 -26',
        '--gray 1 +26'
    ],
    line: [
        '--gray 1 -16',
        '--gray 1 +16'
    ],
    // Base named colors
    codGray: '#171717',
    blue: '#0474f2',
    // Portfolio "Cyber-Gloss" tokens
    cyber: '#00f0ff',
    neon: '#8b5cf6',
    surface: '#09090b',
    glass: '#18181b',
    glow: '#06b6d4'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7d3SA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lHIIR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    // Default template themes
    document: {
        '@dark': {
            background: 'surface',
            color: 'title'
        },
        '@light': {
            background: 'gray 1 +168',
            color: 'title'
        }
    },
    dialog: {
        '@dark': {
            background: 'gray 0.95 -68',
            color: 'title',
            backdropFilter: 'blur(3px)',
            borderColor: 'gray 0',
            outlineColor: 'blue'
        },
        '@light': {
            background: 'gray .95 +150',
            color: 'title',
            backdropFilter: 'blur(3px)',
            borderColor: 'gray 0',
            outlineColor: 'blue'
        }
    },
    field: {
        '@dark': {
            color: 'white',
            background: 'gray 0.95 -65',
            '::placeholder': {
                color: 'white 1 -78'
            }
        },
        '@light': {
            color: 'black',
            '::placeholder': {
                color: 'gray 1 -68'
            }
        }
    },
    primary: {
        '@dark': {
            background: 'blue',
            color: 'white'
        },
        '@light': {
            color: 'white',
            background: 'blue'
        }
    },
    warning: {
        '@dark': {
            background: 'red',
            color: 'white'
        },
        '@light': {
            color: 'white',
            background: 'red'
        }
    },
    success: {
        '@dark': {
            background: 'green',
            color: 'white'
        },
        '@light': {
            background: 'green',
            color: 'white'
        }
    },
    none: {
        color: 'none',
        background: 'none'
    },
    transparent: {
        color: 'currentColor',
        background: 'transparent'
    },
    // Portfolio "Cyber-Gloss" themes
    glass: {
        '@dark': {
            background: 'white.03',
            color: 'title',
            backdropFilter: 'blur(16px)',
            borderColor: 'white.08'
        },
        '@light': {
            background: 'gray.95+150',
            color: 'title',
            backdropFilter: 'blur(16px)',
            borderColor: 'gray.1'
        }
    },
    'glass-elevated': {
        '@dark': {
            background: 'white.06',
            color: 'title',
            backdropFilter: 'blur(24px)',
            borderColor: 'white.12'
        },
        '@light': {
            background: 'gray.9+140',
            color: 'title',
            backdropFilter: 'blur(24px)',
            borderColor: 'gray.15'
        }
    },
    hero: {
        '@dark': {
            background: 'surface',
            color: 'white'
        },
        '@light': {
            background: 'white',
            color: 'codGray'
        }
    },
    badge: {
        '@dark': {
            background: 'white.06',
            color: 'cyber',
            borderColor: 'cyber.15'
        },
        '@light': {
            background: 'blue.08',
            color: 'blue',
            borderColor: 'blue.2'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iazcN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a6wpi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    Default: {
        isDefault: true,
        value: [
            'Inter, system-ui, -apple-system, sans-serif'
        ],
        type: 'sans-serif',
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    },
    Mono: {
        value: [
            'JetBrains Mono, Fira Code, monospace'
        ],
        type: 'monospace',
        url: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap'
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"c0bW1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    base: 16,
    ratio: 1.25,
    subSequence: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dP8x3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    base: 16,
    ratio: 1.618,
    subSequence: true
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jJqwn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    defaultBezier: 'cubic-bezier(.29, .67, .51, .97)'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d59TE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cHLbq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8nO3y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    mapPin: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    briefcase: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevronDown: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    mail: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 7l-10 7L2 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    github: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="currentColor"/></svg>',
    linkedin: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="2" y="9" width="4" height="12" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="4" cy="4" r="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    externalLink: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    code: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrowRight: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    sparkles: '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fEOFZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5bXmD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eZP86":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    // Default template animations
    fadeInUp: {
        from: {
            transform: 'translate3d(0, 12.5%, 1px)',
            opacity: 0
        },
        to: {
            transform: 'translate3d(0, 0, 1px)',
            opacity: 1
        }
    },
    fadeOutDown: {
        from: {
            transform: 'translate3d(0, 0, 1px)',
            opacity: 1
        },
        to: {
            transform: 'translate3d(0, 12.5%, 1px)',
            opacity: 0
        }
    },
    marquee: {
        from: {
            transform: 'translate3d(0, 0, 1px)'
        },
        to: {
            transform: 'translate3d(-50%, 0, 1px)'
        }
    },
    // Portfolio animations
    orbFloat: {
        '0%': {
            transform: 'translate3d(0, 0, 1px)'
        },
        '33%': {
            transform: 'translate3d(5%, -8%, 1px)'
        },
        '66%': {
            transform: 'translate3d(-3%, 4%, 1px)'
        },
        '100%': {
            transform: 'translate3d(0, 0, 1px)'
        }
    },
    orbColorShift: {
        '0%': {
            opacity: 0.4
        },
        '50%': {
            opacity: 0.6
        },
        '100%': {
            opacity: 0.4
        }
    },
    pulseGlow: {
        '0%': {
            boxShadow: '0 0 0 0 rgba(0, 240, 255, 0.4)'
        },
        '70%': {
            boxShadow: '0 0 0 10px rgba(0, 240, 255, 0)'
        },
        '100%': {
            boxShadow: '0 0 0 0 rgba(0, 240, 255, 0)'
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1iSUc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lqMwD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gciLd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5wy6R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"djZQJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    useReset: true,
    useVariable: true,
    useFontImport: true,
    useIconSprite: true,
    useSvgSprite: true,
    useDefaultConfig: true,
    useDocumentTheme: true,
    verbose: false,
    globalTheme: 'dark'
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ataAr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["8KtQC","edHeF"], "edHeF", "parcelRequirefc1b", {})

//# sourceMappingURL=symbols.24344e80.js.map
