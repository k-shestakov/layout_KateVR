// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
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
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

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

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8bDoD":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
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
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
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
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
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
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
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
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
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
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
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
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
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
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"3cYfC":[function(require,module,exports) {
var _headerJs = require("./lib/header.js");
var _navigationJs = require("./lib/navigation.js");
var _animationJs = require("./lib/animation.js");
var _dynamicAdaptJs = require("./lib/dynamic_adapt.js");
var _burgerJs = require("./lib/burger.js");
var _selectJs = require("./lib/select.js");
var _dashedJs = require("./lib/dashed.js");
var _sliderJs = require("./lib/slider.js");
var _dotJs = require("./lib/dot.js");
var _formJs = require("./lib/form.js");
var _linemoveJs = require("./lib/linemove.js");
var _techJs = require("./lib/tech.js");
var _lowerBtnJs = require("./lib/lower_btn.js");
var _popupJs = require("./lib/popup.js");
var _accordeonJs = require("./lib/accordeon.js");
var _asideJs = require("./lib/aside.js");
var _numberJs = require("./lib/number.js");
var _purchaseJs = require("./lib/purchase.js");
var _bankCardJs = require("./lib/bank_card.js");
"use strict";

},{"./lib/header.js":"hjK0r","./lib/animation.js":"21bb8","./lib/dynamic_adapt.js":"lKeoM","./lib/burger.js":"YAsRm","./lib/select.js":"4yv33","./lib/dashed.js":"9TAeD","./lib/slider.js":"8PtsG","./lib/form.js":"kYmEN","./lib/linemove.js":"6WLvn","./lib/tech.js":"92fRG","./lib/lower_btn.js":"i21Fx","./lib/popup.js":"fFXlg","./lib/accordeon.js":"aELPq","./lib/aside.js":"dWRCC","./lib/number.js":"giyqA","./lib/purchase.js":"VsSmy","./lib/bank_card.js":"2YeIY","./lib/dot.js":"bqbZl","./lib/navigation.js":"dqX6Y"}],"hjK0r":[function(require,module,exports) {
const header = document.querySelector(".header");
window.addEventListener("scroll", (e)=>{
    if (pageYOffset > 0) header.classList.add("_bg");
    else header.classList.remove("_bg");
});

},{}],"21bb8":[function(require,module,exports) {
const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for(let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 2;
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) animItemPoint = window.innerHeight - window.innerHeight / animStart;
            if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) animItem.classList.add("_limn");
            else if (!animItem.classList.contains("_anim-no-hide")) animItem.classList.remove("_limn");
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(), scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        };
    }
    setTimeout(()=>{
        animOnScroll();
    }, 300);
}

},{}],"lKeoM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DynamicAdapt", ()=>DynamicAdapt);
class DynamicAdapt {
    constructor(type){
        this.type = type;
    }
    init() {
        this.\u043Ebjects = [];
        this.daClassname = "_dynamic_adapt_";
        this.nodes = [
            ...document.querySelectorAll("[data-da]")
        ];
        this.nodes.forEach((node)=>{
            const data = node.dataset.da.trim();
            const dataArray = data.split(",");
            const \u043Ebject = {};
            \u043Ebject.element = node;
            \u043Ebject.parent = node.parentNode;
            \u043Ebject.destination = document.querySelector(`${dataArray[0].trim()}`);
            \u043Ebject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
            \u043Ebject.place = dataArray[2] ? dataArray[2].trim() : "last";
            \u043Ebject.index = this.indexInParent(\u043Ebject.parent, \u043Ebject.element);
            this.\u043Ebjects.push(\u043Ebject);
        });
        this.arraySort(this.\u043Ebjects);
        this.mediaQueries = this.\u043Ebjects.map(({ breakpoint })=>`(${this.type}-width: ${breakpoint}px),${breakpoint}`).filter((item, index, self)=>self.indexOf(item) === index);
        this.mediaQueries.forEach((media)=>{
            const mediaSplit = media.split(",");
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];
            const \u043EbjectsFilter = this.\u043Ebjects.filter(({ breakpoint })=>breakpoint === mediaBreakpoint);
            matchMedia.addEventListener("change", ()=>{
                this.mediaHandler(matchMedia, \u043EbjectsFilter);
            });
            this.mediaHandler(matchMedia, \u043EbjectsFilter);
        });
    }
    mediaHandler(matchMedia, \u043Ebjects) {
        if (matchMedia.matches) \u043Ebjects.forEach((\u043Ebject)=>{
            this.moveTo(\u043Ebject.place, \u043Ebject.element, \u043Ebject.destination);
        });
        else \u043Ebjects.forEach(({ parent, element, index })=>{
            if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index);
        });
    }
    moveTo(place, element, destination) {
        element.classList.add(this.daClassname);
        if (place === "last" || place >= destination.children.length) {
            destination.append(element);
            return;
        }
        if (place === "first") {
            destination.prepend(element);
            return;
        }
        destination.children[place].before(element);
    }
    moveBack(parent, element, index) {
        element.classList.remove(this.daClassname);
        if (parent.children[index] !== undefined) parent.children[index].before(element);
        else parent.append(element);
    }
    indexInParent(parent, element) {
        return [
            ...parent.children
        ].indexOf(element);
    }
    arraySort(arr) {
        if (this.type === "min") arr.sort((a, b)=>{
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) return 0;
                if (a.place === "first" || b.place === "last") return -1;
                if (a.place === "last" || b.place === "first") return 1;
                return 0;
            }
            return a.breakpoint - b.breakpoint;
        });
        else {
            arr.sort((a, b)=>{
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return 1;
                    if (a.place === "last" || b.place === "first") return -1;
                    return 0;
                }
                return b.breakpoint - a.breakpoint;
            });
            return;
        }
    }
}
const da = new DynamicAdapt("max");
da.init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"YAsRm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "burger", ()=>burger);
function burger() {
    const overlay = document.querySelector(".overlay");
    document.addEventListener("click", documentClick);
    function closeBurger() {
        document.documentElement.classList.toggle("menu-open");
        document.documentElement.classList.toggle("stop-scroll");
        overlay.classList.toggle("_show-ov");
    }
    function documentClick(e) {
        const targetItem = e.target;
        const containesMenu = document.documentElement.classList.contains("menu-open");
        if (targetItem.closest(".item-close") && containesMenu) closeBurger();
        if (targetItem.closest(".icon-menu")) closeBurger();
    }
}
burger();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4yv33":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "customSelect", ()=>customSelect);
const customSelect = function() {
    const selects = document.querySelectorAll(".select");
    let activeSelect = null;
    selects.forEach((select)=>{
        const currentList = select.querySelector(".select__list");
        const currentValue = select.querySelector(".select__current");
        select.addEventListener("click", (e)=>{
            e.preventDefault();
            const prevEl = select.previousElementSibling;
            if (select.classList.contains("_active")) {
                select.classList.remove("_active");
                if (prevEl && prevEl.classList.value.startsWith("aside-buy-order")) prevEl.classList.remove("blue");
                activeSelect = null;
                return;
            }
            selects.forEach((rem)=>{
                rem.classList.remove("_active");
                const remPrevEl = rem.previousElementSibling;
                if (remPrevEl && prevEl.classList.value.startsWith("aside-buy-order")) remPrevEl.classList.remove("blue");
            });
            select.classList.add("_active");
            if (prevEl && prevEl.classList.value.startsWith("aside-buy-order")) prevEl.classList.add("blue");
            activeSelect = select;
        });
        if (currentList) currentList.addEventListener("click", (e)=>{
            const link = e.target.closest(".select__item > a");
            if (link) {
                const value = link.textContent;
                currentValue.textContent = value;
                e.stopPropagation();
                select.classList.remove("_active");
                const prevEl = select.previousElementSibling;
                if (prevEl && prevEl.classList.value.startsWith("aside-buy-order")) prevEl.classList.remove("blue");
                e.preventDefault();
            }
        });
    });
    document.addEventListener("click", (e)=>{
        if (!e.target.closest(".select") && activeSelect) {
            const prevEl = activeSelect.previousElementSibling;
            activeSelect.classList.remove("_active");
            if (prevEl && prevEl.classList.value.startsWith("aside-buy-order")) prevEl.classList.remove("blue");
            activeSelect = null;
        }
    });
    document.addEventListener("keydown", (e)=>{
        if (e.code === "Escape" && activeSelect) {
            const prevEl = activeSelect.previousElementSibling;
            activeSelect.classList.remove("_active");
            if (prevEl && prevEl.classList.value.startsWith("aside-buy-order")) prevEl.classList.remove("blue");
            activeSelect = null;
        }
    });
};
customSelect();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9TAeD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDashes", ()=>createDashes);
const createDashes = function() {
    const dashedTops = document.querySelectorAll(".dashed-top");
    const dashedBottoms = document.querySelectorAll(".dashed-bottom");
    const originalDash = document.createElement("span");
    originalDash.classList.add("dashed");
    originalDash.style.height = "2px";
    originalDash.style.backgroundColor = "#058498";
    originalDash.style.display = "inline-block";
    const maxOpacity = 1;
    const minOpacity = 0.1;
    const opacityStep = (maxOpacity - minOpacity) / 10;
    const totalElements = 25;
    const last10PercentIndex = Math.ceil(totalElements * 0.9);
    const buttons = document.querySelectorAll(".video-btn");
    buttons.forEach((button)=>{
        let originalOpacities = [];
        for(let i = 0; i < totalElements; i++){
            const clonedDash = originalDash.cloneNode(true);
            if (i === 0) clonedDash.style.width = "30px";
            else clonedDash.style.width = "2px";
            let gap;
            if (i < last10PercentIndex) gap = Math.floor(i / 3) + 1;
            else gap = Math.floor(i / 3) + 1 + 2;
            clonedDash.style.marginRight = gap + "px";
            const opacity = Math.max(minOpacity, maxOpacity - Math.floor(i / 3) * opacityStep);
            clonedDash.style.opacity = opacity;
            originalOpacities.push(opacity);
            button.querySelector(".dashed-top").appendChild(clonedDash.cloneNode(true));
            button.querySelector(".dashed-bottom").appendChild(clonedDash.cloneNode(true));
        }
        button.addEventListener("mouseenter", ()=>{
            const dashedTops = button.querySelectorAll(".dashed-top .dashed");
            const dashedBottoms = button.querySelectorAll(".dashed-bottom .dashed");
            dashedTops.forEach((span, index)=>{
                setTimeout(()=>{
                    span.style.opacity = "1";
                    span.style.boxShadow = "0 0 10px #058498";
                }, index * 20);
            });
            dashedBottoms.forEach((span, index)=>{
                setTimeout(()=>{
                    span.style.opacity = "1";
                    span.style.boxShadow = "0 0 10px #058498";
                }, index * 20);
            });
        });
        button.addEventListener("mouseleave", ()=>{
            const dashedTops = button.querySelectorAll(".dashed-top .dashed");
            const dashedBottoms = button.querySelectorAll(".dashed-bottom .dashed");
            dashedTops.forEach((span, index)=>{
                setTimeout(()=>{
                    span.style.opacity = originalOpacities[index];
                    span.style.boxShadow = "none";
                }, index * 30);
            });
            dashedBottoms.forEach((span, index)=>{
                setTimeout(()=>{
                    span.style.opacity = originalOpacities[index];
                    span.style.boxShadow = "none";
                }, index * 30);
            });
        });
    });
};
createDashes();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PtsG":[function(require,module,exports) {
const aboutFraction = document.querySelector(".about__fraction");
const aboutSlides = document.querySelectorAll(".about-slider__slide");
const aboutSpan = document.createElement("span");
const bulletsContainer = document.querySelector(".about__bullets");
function showBullets() {
    aboutSlides.forEach((item)=>{
        const bullet = document.createElement("span");
        bullet.classList.add("about__bullet");
        bulletsContainer.append(bullet);
    });
}
function updateBullets() {
    const currentBullet = updateFraction().slice(0, 1);
    const bullets = document.querySelectorAll(".about__bullet");
    const index = +currentBullet - 1;
    bullets.forEach((item)=>{
        if (item.classList.contains("_cur")) item.classList.remove("_cur");
    });
    bullets[index].classList.add("_cur");
}
function updateFraction() {
    const activeSlide = document.querySelector(".about-slider__slide.swiper-slide-active").getAttribute("aria-label");
    const normalizedFraction = activeSlide.replaceAll(" ", "");
    aboutFraction.textContent = `${normalizedFraction}`;
    return normalizedFraction;
}
new Swiper(".hero-slider", {
    navigation: {
        nextEl: ".hero__next",
        prevEl: ".hero__prev"
    },
    effect: "fade",
    pagination: {
        el: ".hero__progressbar",
        type: "progressbar"
    }
});
new Swiper(".about-slider", {
    navigation: {
        nextEl: ".about__next",
        prevEl: ".about__prev"
    },
    effect: "fade",
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: ".about__progressbar",
        type: "progressbar"
    },
    on: {
        slideChangeTransitionStart: updateFraction,
        slideChangeTransitionStart: updateBullets
    }
});
showBullets();
updateBullets();
updateFraction();

},{}],"kYmEN":[function(require,module,exports) {
function checkInputStatus() {
    const fieldsContainers = document.querySelectorAll(".form__fields");
    fieldsContainers.forEach((container)=>{
        const inputs = container.querySelectorAll(".form__input");
        inputs.forEach((input)=>{
            input.addEventListener("focus", ()=>{
                input.classList.add("_foc");
            });
            input.addEventListener("blur", ()=>{
                if (!input.value.trim()) input.classList.remove("_foc");
            });
        });
    });
}
checkInputStatus();
const sectionOrder = {
    btn1: ".aside-buy__step-btn--order",
    btn2: ".aside-buy__step-btn--pay",
    sec1: ".aside-buy-order",
    sec2: ".aside-buy-pay"
};
const sectionPay = {
    btn1: ".aside-buy__step-btn--pay",
    btn2: ".aside-buy__step-btn--complete",
    sec1: ".aside-buy-pay",
    sec2: ".aside-buy-complete"
};
function switchSection(section) {
    const btnFirst = document.querySelector(section.btn1);
    const btnSecont = document.querySelector(section.btn2);
    const secFirst = document.querySelector(section.sec1);
    const secSecond = document.querySelector(section.sec2);
    btnFirst.classList.remove("aside-buy__step-btn--active");
    btnFirst.classList.add("aside-buy__step-btn--lock");
    btnSecont.classList.remove("aside-buy__step-btn--lock");
    btnSecont.classList.add("aside-buy__step-btn--active");
    secFirst.classList.add("_hidden-section");
    secSecond.classList.remove("_hidden-section");
    if (window.updateDotPosition) window.updateDotPosition();
}
function validation(validForm) {
    const formMessage = document.getElementById(validForm);
    const bankCard = document.querySelectorAll(".aside-buy-pay__card > input");
    formMessage.addEventListener("submit", formSend);
    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(formMessage);
        if (!error) {
            if (validForm === "aside-buy-order-form") {
                switchSection(sectionOrder);
                if (window.updateDotPosition) window.updateDotPosition();
            }
            if (validForm === "aside-buy-pay-form") {
                switchSection(sectionPay);
                if (window.updateDotPosition) window.updateDotPosition();
            }
        }
    }
    function formValidate(form) {
        let error = 0;
        const formReq = form.querySelectorAll("._req");
        formReq.forEach((input)=>{
            formRemoveError(input);
            if (input.classList.contains("_min")) {
                if (!checkLength(input)) {
                    formAddError(input, "empty");
                    error++;
                }
            }
            if (input.classList.contains("_email")) {
                if (input.value.trim() === "") {
                    formAddError(input, "empty");
                    error++;
                } else if (emailTest(input)) {
                    formAddError(input, "format");
                    error++;
                }
            } else if (input.value.trim() === "") {
                formAddError(input, "empty");
                error++;
            }
            bankCard.forEach((inp)=>{
                inp.addEventListener("click", (e)=>{
                    bankCard[0].classList.remove("_error");
                });
                if (inp.classList.contains("_error")) {
                    if (!bankCard[0].classList.contains("_error")) bankCard[0].style.borderBottom = "1px solid #2f2f2f";
                    bankCard[0].classList.add("_error");
                }
            });
            input.addEventListener("focus", function() {
                formRemoveError(input);
            });
        });
        return error;
    }
    function formAddError(input, type = "") {
        const errorContainer = input.closest(".form__field");
        const emptyError = errorContainer.querySelector(".empty-error");
        const formatError = errorContainer.querySelector(".format-error");
        input.classList.add("_error");
        if (type === "empty" && emptyError) {
            emptyError.style.display = "block";
            if (formatError) formatError.style.display = "none";
        } else if (type === "format" && formatError) {
            formatError.style.display = "block";
            if (emptyError) emptyError.style.display = "none";
        }
    }
    function formRemoveError(input) {
        const errorContainer = input.closest(".form__field");
        const emptyError = errorContainer.querySelector(".empty-error");
        const formatError = errorContainer.querySelector(".format-error");
        input.classList.remove("_error");
        if (emptyError) emptyError.style.display = "none";
        if (formatError) formatError.style.display = "none";
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function checkLength(input) {
        const minLength = parseInt(input.getAttribute("maxlength"), 10) || 0;
        return input.value.trim().length >= minLength;
    }
}
validation("main-form");
validation("aside-buy-order-form");
validation("aside-buy-pay-form");

},{}],"6WLvn":[function(require,module,exports) {
const path1 = [
    {
        x: 5,
        y: 5
    },
    {
        x: 395,
        y: 5
    },
    {
        x: 395,
        y: 65
    }
];
const path2 = [
    {
        x: 5,
        y: 102
    },
    {
        x: 40,
        y: 102
    },
    {
        x: 40,
        y: 102
    },
    {
        x: 40,
        y: 5
    },
    {
        x: 122,
        y: 5
    }
];
const path3 = [
    {
        x: 185,
        y: 5
    },
    {
        x: 185,
        y: 240
    },
    {
        x: 5,
        y: 240
    }
];
function createLine(id, pathway) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    const path = pathway;
    let progress = 0;
    const speed = 0.010;
    function distance(point1, point2) {
        return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
    }
    function lerp(start, end, t) {
        return start + (end - start) * t;
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let totalLength = 0;
        let segmentLengths = [];
        for(let i = 0; i < path.length - 1; i++){
            const length = distance(path[i], path[i + 1]);
            segmentLengths.push(length);
            totalLength += length;
        }
        let lengthTravelled = progress * totalLength;
        let segmentIndex = 0;
        while(segmentIndex < segmentLengths.length && lengthTravelled > segmentLengths[segmentIndex]){
            lengthTravelled -= segmentLengths[segmentIndex];
            segmentIndex++;
        }
        if (segmentIndex < segmentLengths.length) {
            let segmentStart = path[segmentIndex];
            let segmentEnd = path[segmentIndex + 1];
            let segmentLength = segmentLengths[segmentIndex];
            let segmentProgress = lengthTravelled / segmentLength;
            let x = lerp(segmentStart.x, segmentEnd.x, segmentProgress);
            let y = lerp(segmentStart.y, segmentEnd.y, segmentProgress);
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
            for(let i = 1; i <= segmentIndex; i++)ctx.lineTo(path[i].x, path[i].y);
            ctx.lineTo(x, y);
            ctx.strokeStyle = "#05C2DF";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, 2 * Math.PI);
            ctx.fillStyle = "#05C2DF";
            ctx.fill();
        }
        progress += speed;
        if (progress < 1) requestAnimationFrame(draw);
    }
    draw();
}
function createCircleAnimation(id, centerX, centerY, radius) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    canvas.width = centerX * 2;
    canvas.height = centerY * 2;
    let progress = 0;
    const speed = 0.02;
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const startAngle = 3 / 4 * Math.PI;
        const endAngle = 5 / 4 * Math.PI;
        const angle = startAngle + (endAngle - startAngle) * progress;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, angle);
        ctx.strokeStyle = "#05C2DF";
        ctx.lineWidth = 1;
        ctx.stroke();
        progress += speed;
        if (progress <= 1) requestAnimationFrame(draw);
    }
    draw();
}
function initIntersectionObserver() {
    const techSpecs = document.querySelector(".tech-specs");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.intersectionRatio >= 0.85) {
                createLine("line-1", path1);
                setTimeout(()=>{
                    createLine("line-2", path2);
                }, 300);
                setTimeout(()=>{
                    createLine("line-3", path3);
                }, 600);
                setTimeout(()=>{
                    createCircleAnimation("circle", 300, 300, 150);
                }, 1200);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.85
    });
    observer.observe(techSpecs);
}
initIntersectionObserver();

},{}],"92fRG":[function(require,module,exports) {
document.addEventListener("click", (e)=>{
    const button = e.target.closest(".tech-specs__button");
    if (button) {
        const isOpen = button.classList.contains("_open");
        const techInfo = button.nextElementSibling;
        document.querySelectorAll(".tech-specs__button").forEach((btn)=>{
            const techInfoBtn = btn.nextElementSibling;
            btn.classList.remove("_open");
            techInfoBtn.classList.add("_invisible");
        });
        if (!isOpen) {
            techInfo.classList.remove("_invisible");
            button.classList.add("_open");
        }
    } else document.querySelectorAll(".tech-specs__button").forEach((btn)=>{
        const techInfoBtn = btn.nextElementSibling;
        btn.classList.remove("_open");
        techInfoBtn.classList.add("_invisible");
    });
});

},{}],"i21Fx":[function(require,module,exports) {
function showLowerButton() {
    let lastScrollTop = 0;
    let isScrollingUp = false;
    const lowerButton = document.querySelector(".lower-button");
    const scrollToTopButton = document.querySelector(".scroll-to-top");
    const pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
    const buttonToUp = lowerButton.getBoundingClientRect();
    const stopLine = pageHeight / 100 * 10;
    window.addEventListener("scroll", ()=>{
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const stopShowButton = buttonToUp.y + currentScrollTop + stopLine;
        if (currentScrollTop === 0) scrollToTopButton.classList.remove("_lw-btn");
        if (currentScrollTop > lastScrollTop) {
            lowerButton.classList.add("_lw-btn");
            scrollToTopButton.classList.remove("_lw-btn");
            isScrollingUp = false;
        } else if (currentScrollTop < lastScrollTop && !isScrollingUp) {
            scrollToTopButton.classList.add("_lw-btn");
            lowerButton.classList.remove("_lw-btn");
            isScrollingUp = true;
        }
        if (stopShowButton > pageHeight) lowerButton.classList.remove("_lw-btn");
        lastScrollTop = currentScrollTop;
    });
}
showLowerButton();

},{}],"fFXlg":[function(require,module,exports) {
function createPopup() {
    const clientWidth = document.documentElement.clientWidth;
    const windowWidth = window.innerWidth;
    const scrollWidth = windowWidth - clientWidth;
    const page = document.documentElement;
    const fixedElems = document.querySelectorAll("._avoid-jolt");
    const popup = document.querySelectorAll(".pop-up");
    if (popup.length > 0) popup.forEach((el)=>{
        const popupId = el.getAttribute("id");
        const popupById = document.getElementById(popupId);
        const elementShowPopup = document.querySelectorAll(`[data-popup="${popupId}"]`);
        elementShowPopup.forEach((btn)=>{
            btn.addEventListener("click", (e)=>{
                openPopup(popupById);
                e.preventDefault();
            });
        });
    });
    function openPopup(el) {
        if (el) {
            el.classList.add("_popup-open");
            page.classList.add("stop-scroll");
            page.style.paddingRight = `${scrollWidth}px`;
            addPadding();
            el.addEventListener("click", (e)=>{
                if (!e.target.closest(".pop-up__content")) closePopup(el);
                if (e.target.classList.contains("transition-to")) {
                    closePopup(el);
                    setTimeout(()=>{
                        if (e.target.tagName === "A") page.classList.remove("stop-scroll");
                        else {
                            addPadding();
                            page.classList.add("stop-scroll");
                            page.style.paddingRight = `${scrollWidth}px`;
                        }
                    }, 300);
                }
            });
        }
    }
    const closePopupIcon = document.querySelectorAll(".close-pop-up");
    closePopupIcon.forEach((el)=>{
        el.addEventListener("click", (e)=>{
            closePopup(e.target.closest(".pop-up"));
            e.preventDefault();
        });
    });
    function closePopup(el) {
        if (el) {
            el.classList.remove("_popup-open");
            setTimeout(()=>{
                page.classList.remove("stop-scroll");
                page.style.paddingRight = "0px";
                fixedElems.forEach((el)=>{
                    el.style.paddingRight = "0px";
                });
            }, 300);
        }
    }
    function addPadding() {
        fixedElems.forEach((el)=>{
            el.style.paddingRight = `${scrollWidth}px`;
        });
    }
    document.addEventListener("keydown", (e)=>{
        if (e.code === "Escape") {
            const activePopup = document.querySelector(".pop-up._popup-open");
            closePopup(activePopup);
        }
    });
}
createPopup();

},{}],"aELPq":[function(require,module,exports) {
function accordeon() {
    const showMoreButton = document.getElementById("show-more-acc");
    const accordeonBlock = document.querySelector(".accordion");
    const accordeonItems = document.querySelectorAll(".accordion__item");
    let blocksToShow = +accordeonBlock.dataset.initToShow;
    const accordeonHeight = 60;
    let gap = 15 * (blocksToShow - 1);
    let visibleAccordeons = accordeonHeight * blocksToShow + gap;
    accordeonBlock.style.height = `${visibleAccordeons}px`;
    function closeAccordeon() {
        accordeonItems.forEach((item)=>{
            item.classList.remove("_acc-open");
            accordeonBlock.style.height = `${visibleAccordeons}px`;
            item.style.height = `${accordeonHeight}px`;
        });
    }
    showMoreButton.addEventListener("click", (e)=>{
        blocksToShow += 1;
        if (blocksToShow === accordeonItems.length) showMoreButton.classList.add("_less");
        if (blocksToShow <= accordeonItems.length) {
            gap = 15 * (blocksToShow - 1);
            visibleAccordeons = accordeonHeight * blocksToShow + gap;
            accordeonBlock.style.height = `${visibleAccordeons}px`;
            closeAccordeon();
        } else {
            const visibleInit = +accordeonBlock.dataset.initToShow;
            gap = 15 * (visibleInit - 1);
            visibleAccordeons = accordeonHeight * visibleInit + gap;
            accordeonBlock.style.height = `${visibleAccordeons}px`;
            blocksToShow = visibleInit;
            showMoreButton.classList.remove("_less");
            closeAccordeon();
        }
    });
    accordeonBlock.addEventListener("click", (e)=>{
        if (e.target.closest(".accordion__button")) openAccordeon(e.target.closest(".accordion__item"));
    });
    function openAccordeon(acc) {
        const accordeonContent = acc.querySelector(".accordion__content");
        const contentHeight = accordeonContent.getBoundingClientRect().height;
        let activeAccordeon = null;
        accordeonItems.forEach((item)=>{
            if (item.classList.contains("_acc-open")) activeAccordeon = item;
        });
        acc.classList.toggle("_acc-open");
        accordeonBlock.style.height = `${visibleAccordeons + contentHeight}px`;
        if (activeAccordeon) {
            activeAccordeon.classList.remove("_acc-open");
            accordeonBlock.style.height = `${visibleAccordeons}px`;
            activeAccordeon.style.height = `${accordeonHeight}px`;
        }
        if (!acc.classList.contains("_acc-open")) {
            accordeonBlock.style.height = `${visibleAccordeons}px`;
            acc.style.height = `${accordeonHeight}px`;
        } else {
            accordeonBlock.style.height = `${visibleAccordeons + contentHeight}px`;
            acc.style.height = `${contentHeight + accordeonHeight}px`;
        }
    }
}
accordeon();

},{}],"dWRCC":[function(require,module,exports) {
function aside() {
    const asideItems = document.querySelectorAll(".aside");
    const backButtons = document.querySelectorAll(".back-aside");
    const page = document.documentElement;
    asideItems.forEach((item)=>{
        const itemId = item.getAttribute("id");
        const asideItem = document.getElementById(itemId);
        let relatedElement = null;
        if (asideItem.classList.contains("aside-buy")) relatedElement = document.querySelectorAll(`[data-aside="${itemId}"]`);
        else relatedElement = document.querySelectorAll(`[href="#${itemId}"]`);
        relatedElement.forEach((link)=>{
            link.addEventListener("click", (e)=>{
                asideItems.forEach((el)=>{
                    if (el.classList.contains("_aside-open")) el.classList.remove("_aside-open");
                });
                page.classList.add("stop-scroll");
                asideItem.classList.add("_aside-open");
                e.preventDefault();
            });
        });
        asideItem.addEventListener("click", (e)=>{
            if (e.target.closest(".menu__item") || e.target.closest(".item-close")) asideItem.classList.remove("_aside-open");
        });
    });
    backButtons.forEach((back)=>{
        back.addEventListener("click", (e)=>{
            const activeAside = document.querySelector(".aside._aside-open");
            if (activeAside.classList.contains("aside-buy")) page.classList.remove("stop-scroll");
            if (activeAside) activeAside.classList.remove("_aside-open");
        });
    });
}
aside();

},{}],"giyqA":[function(require,module,exports) {
function number() {
    const amountElements = document.querySelectorAll(".product__amount");
    const numberBlocks = document.querySelectorAll(".number");
    const amountValue = parseInt(amountElements[0].textContent.replace("$", ""));
    numberBlocks.forEach((numberBlock)=>{
        numberBlock.addEventListener("click", (e)=>{
            let generalQuantity = parseInt(numberBlock.querySelector(".number__quantity").textContent);
            if (e.target.closest(".number__decrease")) {
                if (generalQuantity > 1) {
                    generalQuantity -= 1;
                    updateAmount(-amountValue);
                }
            }
            if (e.target.closest(".number__increase")) {
                if (generalQuantity < 10) {
                    generalQuantity += 1;
                    updateAmount(amountValue);
                }
            }
            updateQuantities(generalQuantity);
            toggleLockClasses();
        });
    });
    function updateAmount(delta) {
        amountElements.forEach((amountEl)=>{
            const currentAmount = parseInt(amountEl.textContent.replace("$", ""));
            const newAmount = currentAmount + delta;
            amountEl.textContent = `${newAmount}$`;
        });
    }
    function updateQuantities(newQuantity) {
        numberBlocks.forEach((numberBlock)=>{
            numberBlock.querySelector(".number__quantity").textContent = newQuantity;
        });
    }
    function toggleLockClasses() {
        numberBlocks.forEach((numberBlock)=>{
            const quantity = parseInt(numberBlock.querySelector(".number__quantity").textContent);
            if (quantity <= 1) numberBlock.querySelector(".number__decrease").classList.add("_lock");
            else numberBlock.querySelector(".number__decrease").classList.remove("_lock");
            if (quantity >= 10) numberBlock.querySelector(".number__increase").classList.add("_lock");
            else numberBlock.querySelector(".number__increase").classList.remove("_lock");
        });
    }
    toggleLockClasses();
}
number();

},{}],"VsSmy":[function(require,module,exports) {
function purchase() {
    const page = document.documentElement;
    const buyAside = document.getElementById("aside-buy");
    const inputs = buyAside.querySelectorAll("input");
    const buyButtons = document.querySelectorAll(".aside-buy__step-btn");
    const sections = document.querySelectorAll(".aside-buy__section");
    const cross = document.querySelector(".aside__back--cross ");
    const homepageButton = document.querySelector(".aside-buy-complete__button");
    const hiddenClass = "_hidden-section";
    const emptyBuy = document.querySelector(".empty-error--buy");
    const formatBuy = document.querySelector(".format-error--buy");
    cross.addEventListener("click", setUpDefault);
    homepageButton.addEventListener("click", (e)=>{
        setUpDefault();
        buyAside.classList.remove("_aside-open");
        page.classList.remove("stop-scroll");
    });
    const sectionMap = {
        "aside-buy__step-btn--order": document.querySelector(".aside-buy-order"),
        "aside-buy__step-btn--pay": document.querySelector(".aside-buy-pay"),
        "aside-buy__step-btn--complete": document.querySelector(".aside-buy-complete")
    };
    buyButtons.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const clickedButton = e.target.closest(".aside-buy__step-btn");
            if (!clickedButton.classList.contains("aside-buy__step-btn--active")) updateSections(clickedButton);
        });
    });
    function updateSections(activeButton) {
        const activeClass = "aside-buy__step-btn--active";
        buyButtons.forEach((btn)=>{
            if (btn !== activeButton) {
                btn.classList.remove(activeClass);
                btn.classList.add("aside-buy__step-btn--lock");
            } else {
                btn.classList.add(activeClass);
                btn.classList.remove("aside-buy__step-btn--lock");
            }
        });
        sections.forEach((section)=>section.classList.add(hiddenClass));
        const targetSection = sectionMap[activeButton.classList[1]];
        if (targetSection) targetSection.classList.remove(hiddenClass);
    }
    function setUpDefault() {
        setTimeout(()=>{
            sections.forEach((section)=>section.classList.add(hiddenClass));
            buyButtons.forEach((btn)=>btn.classList.add("aside-buy__step-btn--lock"));
            buyButtons.forEach((btn)=>btn.classList.remove("aside-buy__step-btn--active"));
            buyButtons[0].classList.remove("aside-buy__step-btn--lock");
            buyButtons[0].classList.add("aside-buy__step-btn--active");
            sections[0].classList.remove(hiddenClass);
        }, 500);
        inputs.forEach((input)=>{
            input.classList.remove("_foc");
            input.classList.remove("_error");
            input.value = "";
        });
        emptyBuy.style.display = "none";
        formatBuy.style.display = "none";
    }
}
purchase();

},{}],"2YeIY":[function(require,module,exports) {
function bankCard() {
    const cardBlock = document.querySelector(".aside-buy-pay__card");
    const cardInputs = cardBlock.querySelectorAll(".aside-buy-pay__input");
    cardInputs.forEach((input, index)=>{
        input.addEventListener("input", (e)=>{
            const value = e.target.value;
            e.target.value = value.replace(/\D/g, "");
            if (e.target.value.length === e.target.maxLength) {
                const nextInput = cardInputs[index + 1];
                if (nextInput) nextInput.focus();
            }
        });
        input.addEventListener("keydown", (e)=>{
            if (e.key === "Tab" && e.shiftKey) {
                e.preventDefault();
                const prevInput = cardInputs[index - 1];
                if (prevInput) prevInput.focus();
            }
        });
    });
}
function expiration() {
    const expiration = document.getElementById("input-expiration");
    expiration.addEventListener("input", (e)=>{
        let value = e.target.value;
        value = value.replace(/[^\d]/g, "");
        if (value.length >= 3) value = value.slice(0, 2) + " / " + value.slice(2, 4);
        else if (value.length >= 2) value = value.slice(0, 2) + " / ";
        e.target.value = value;
    });
    expiration.addEventListener("keydown", (e)=>{
        let value = e.target.value;
        if (e.key === "Backspace" && value.endsWith(" / ")) {
            e.target.value = value.slice(0, -3);
            e.preventDefault();
        }
    });
}
bankCard();
expiration();
const cardButton = document.querySelector(".aside-buy-pay__card-type");
cardButton.addEventListener("click", (e)=>{
    e.preventDefault();
    cardButton.classList.toggle("_hide-card");
});

},{}],"bqbZl":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", ()=>{
    const cross = document.querySelector(".aside__back--cross");
    const homepage = document.querySelector(".aside-buy-complete__button");
    const stepsContainer = document.querySelector(".aside-buy__steps");
    const dot = stepsContainer.querySelector(".dot");
    const buttons = stepsContainer.querySelectorAll(".aside-buy__step-btn");
    window.updateDotPosition = function() {
        const activeButton = stepsContainer.querySelector(".aside-buy__step-btn--active");
        if (activeButton) {
            const buttonRect = activeButton.getBoundingClientRect();
            const containerRect = stepsContainer.getBoundingClientRect();
            const dotRect = dot.getBoundingClientRect();
            const buttonWidth = buttonRect.width;
            dot.style.width = window.innerWidth <= 768 ? `${buttonWidth}px` : "4px";
            const buttonOffset = buttonRect.left - containerRect.left + buttonRect.width / 2 - dotRect.width / 2;
            dot.style.left = `${buttonOffset}px`;
        } else {
            const firstButton = buttons[0];
            const firstButtonRect = firstButton.getBoundingClientRect();
            const containerRect = stepsContainer.getBoundingClientRect();
            const firstButtonWidth = firstButtonRect.width;
            dot.style.width = window.innerWidth <= 768 ? `${firstButtonWidth}px` : "4px";
            dot.style.left = `${firstButtonRect.left - containerRect.left + firstButtonRect.width / 2 - dot.getBoundingClientRect().width / 2}px`;
        }
    };
    buttons.forEach((button)=>{
        button.addEventListener("click", ()=>{
            buttons.forEach((btn)=>btn.classList.remove("aside-buy__step-btn--active"));
            button.classList.add("aside-buy__step-btn--active");
            updateDotPosition();
        });
    });
    function setInitialPosition() {
        buttons.forEach((btn)=>btn.classList.remove("aside-buy__step-btn--active"));
        updateDotPosition();
    }
    cross.addEventListener("click", setInitialPosition);
    homepage.addEventListener("click", setInitialPosition);
    updateDotPosition();
    if (window.innerWidth <= 768) dot.style.left = "0px";
    window.addEventListener("resize", updateDotPosition);
});

},{}],"dqX6Y":[function(require,module,exports) {
function navigation(block, className) {
    const menuBlock = document.querySelector(block);
    menuBlock.addEventListener("click", (e)=>{
        e.preventDefault();
        if (e.target.closest(className)) {
            const id = e.target.getAttribute("href").slice(1);
            const element = document.getElementById(id);
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}
function scrollTo(selector) {
    const moveButton = document.querySelector(selector);
    const id = moveButton.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (id) moveButton.addEventListener("click", (e)=>{
        e.preventDefault();
        element.scrollIntoView({
            behavior: "smooth"
        });
    });
}
scrollTo(".hero__move > a");
scrollTo(".scroll-to-top");
scrollTo(".header__logo");
scrollTo(".footer__logo");
scrollTo(".contact-popup");
navigation(".menu__list", ".menu__item.item-close");
navigation(".footer__list", ".footer__item");

},{}]},["8bDoD","3cYfC"], "3cYfC", "parcelRequire4cc0")

//# sourceMappingURL=index.b8fca702.js.map
