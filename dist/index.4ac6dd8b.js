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
})({"3TvmZ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "098e05564ac6dd8b";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lVWSS":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded", ()=>{
    const chatTextInput = document.getElementById("chatTextInput");
    const chatTextSend = document.getElementById("chatTextSend");
    const chatTextForm = document.getElementById("chatTextForm");
    const userGrid = document.querySelector(".grid-user");
    const computerGrid = document.querySelector(".grid-computer");
    const displayGrid = document.querySelector(".grid-display");
    const ships = document.querySelectorAll(".ship");
    const destroyer = document.querySelector(".destroyer-container");
    const submarine = document.querySelector(".submarine-container");
    const cruiser = document.querySelector(".cruiser-container");
    const battleship = document.querySelector(".battleship-container");
    const carrier = document.querySelector(".carrier-container");
    const startButton = document.querySelector("#start");
    const rotateButton = document.querySelector("#rotate");
    const turnDisplay = document.querySelector("#whose-go");
    const infoDisplay = document.querySelector("#info");
    const setupButtons = document.getElementById("setup-buttons");
    const userSquares = [];
    const computerSquares = [];
    let isHorizontal = true;
    let isGameOver = false;
    let currentPlayer = "user";
    const width = 10;
    let playerNum = 0;
    let ready = false;
    let enemyReady = false;
    let allShipsPlaced = false;
    let shotFired = -1;
    //Ships
    const shipArray = [
        {
            name: "destroyer",
            directions: [
                [
                    0,
                    1
                ],
                [
                    0,
                    width
                ]
            ]
        },
        {
            name: "submarine",
            directions: [
                [
                    0,
                    1,
                    2
                ],
                [
                    0,
                    width,
                    width * 2
                ]
            ]
        },
        {
            name: "cruiser",
            directions: [
                [
                    0,
                    1,
                    2
                ],
                [
                    0,
                    width,
                    width * 2
                ]
            ]
        },
        {
            name: "battleship",
            directions: [
                [
                    0,
                    1,
                    2,
                    3
                ],
                [
                    0,
                    width,
                    width * 2,
                    width * 3
                ]
            ]
        },
        {
            name: "carrier",
            directions: [
                [
                    0,
                    1,
                    2,
                    3,
                    4
                ],
                [
                    0,
                    width,
                    width * 2,
                    width * 3,
                    width * 4
                ]
            ]
        }, 
    ];
    createBoard(userGrid, userSquares);
    createBoard(computerGrid, computerSquares);
    // Select Player Mode
    if (gameMode === "singlePlayer") startSinglePlayer();
    else startMultiPlayer();
    // Multiplayer
    function startMultiPlayer() {
        // const socket = io('ws://' + window.location.host + '/socket');
        // FIXME
        const socket = io("ws://" + window.location.hostname + ":1235");
        console.info("startMultiPlayer() has been called");
        chatTextForm.addEventListener("submit", (event)=>{
            event.preventDefault();
        });
        chatTextSend.addEventListener("click", (event)=>{
            socket.emit("game-message", chatTextInput.value);
            chatTextInput.value = "";
        });
        // Get your player number
        socket.on("player-number", (num)=>{
            if (num === -1) infoDisplay.innerHTML = "Sorry, the server is full";
            else {
                playerNum = parseInt(num);
                if (playerNum === 1) currentPlayer = "enemy";
                console.log(playerNum);
                // Get other player status
                socket.emit("check-players");
            }
        });
        // Another player has connected or disconnected
        socket.on("player-connection", (num)=>{
            console.log(`Player number ${num} has connected or disconnected`);
            playerConnectedOrDisconnected(num);
        });
        // On enemy ready
        socket.on("enemy-ready", (num)=>{
            enemyReady = true;
            playerReady(num);
            if (ready) {
                playGameMulti(socket);
                setupButtons.style.display = "none";
            }
        });
        // Check player status
        socket.on("check-players", (players)=>{
            players.forEach((p, i)=>{
                if (p.connected) playerConnectedOrDisconnected(i);
                if (p.ready) {
                    playerReady(i);
                    if (i !== playerReady) enemyReady = true;
                }
            });
        });
        // On Timeout
        socket.on("timeout", ()=>{
            infoDisplay.innerHTML = 'You have reached the 10 minute limit! To play again <a href="/">click here</a>!';
        });
        socket.on("game-message-broadcast", (data)=>{
            const chatBox = document.querySelector(".player.chat");
            chatBox.innerText = `Enemy: ${data}`;
            setTimeout(()=>chatBox.innerText = "", 2500);
        });
        // Ready button click
        startButton.addEventListener("click", ()=>{
            if (allShipsPlaced) {
                infoDisplay.innerHTML = "";
                playGameMulti(socket);
            } else infoDisplay.innerHTML = "Please place all ships in the upper left frame \uD83D\uDC47";
        });
        // Setup event listeners for firing
        computerSquares.forEach((square)=>{
            square.addEventListener("click", ()=>{
                if (currentPlayer === "user" && ready && enemyReady) {
                    shotFired = square.dataset.id;
                    socket.emit("fire", shotFired);
                }
            });
        });
        // On Fire Received
        socket.on("fire", (id)=>{
            enemyGo(id);
            const square = userSquares[id];
            socket.emit("fire-reply", square.classList);
            playGameMulti(socket);
        });
        // On Fire Reply Received
        socket.on("fire-reply", (classList)=>{
            revealSquare(classList);
            playGameMulti(socket);
        });
        function playerConnectedOrDisconnected(num) {
            let player = `.p${parseInt(num) + 1}`;
            document.querySelector(`${player} .connected`).classList.toggle("active");
            if (parseInt(num) === playerNum) document.querySelector(player).style.fontWeight = "bold";
        }
    }
    // // Single Player
    // function startSinglePlayer() {
    //   generate(shipArray[0])
    //   generate(shipArray[1])
    //   generate(shipArray[2])
    //   generate(shipArray[3])
    //   generate(shipArray[4])
    //   startButton.addEventListener('click', () => {
    //     setupButtons.style.display = 'none'
    //     playGameSingle()
    //   })
    // }
    //Create Board
    function createBoard(grid, squares) {
        for(let i = 0; i < width * width; i++){
            const square = document.createElement("div");
            square.dataset.id = i;
            grid.appendChild(square);
            squares.push(square);
        }
    }
    //Draw the computers ships in random locations
    function generate(ship) {
        let randomDirection = Math.floor(Math.random() * ship.directions.length);
        let current = ship.directions[randomDirection];
        if (randomDirection === 0) direction = 1;
        if (randomDirection === 1) direction = 10;
        let randomStart = Math.abs(Math.floor(Math.random() * computerSquares.length - ship.directions[0].length * direction));
        const isTaken = current.some((index)=>computerSquares[randomStart + index].classList.contains("taken"));
        const isAtRightEdge = current.some((index)=>(randomStart + index) % width === width - 1);
        const isAtLeftEdge = current.some((index)=>(randomStart + index) % width === 0);
        if (!isTaken && !isAtRightEdge && !isAtLeftEdge) current.forEach((index)=>computerSquares[randomStart + index].classList.add("taken", ship.name));
        else generate(ship);
    }
    //Rotate the ships
    function rotate() {
        if (isHorizontal) {
            destroyer.classList.toggle("destroyer-container-vertical");
            submarine.classList.toggle("submarine-container-vertical");
            cruiser.classList.toggle("cruiser-container-vertical");
            battleship.classList.toggle("battleship-container-vertical");
            carrier.classList.toggle("carrier-container-vertical");
            isHorizontal = false;
            // console.log(isHorizontal)
            return;
        }
        if (!isHorizontal) {
            destroyer.classList.toggle("destroyer-container-vertical");
            submarine.classList.toggle("submarine-container-vertical");
            cruiser.classList.toggle("cruiser-container-vertical");
            battleship.classList.toggle("battleship-container-vertical");
            carrier.classList.toggle("carrier-container-vertical");
            isHorizontal = true;
            // console.log(isHorizontal)
            return;
        }
    }
    rotateButton.addEventListener("click", rotate);
    //move around user ship
    ships.forEach((ship)=>ship.addEventListener("dragstart", dragStart));
    userSquares.forEach((square)=>square.addEventListener("dragstart", dragStart));
    userSquares.forEach((square)=>square.addEventListener("dragover", dragOver));
    userSquares.forEach((square)=>square.addEventListener("dragenter", dragEnter));
    userSquares.forEach((square)=>square.addEventListener("dragleave", dragLeave));
    userSquares.forEach((square)=>square.addEventListener("drop", dragDrop));
    userSquares.forEach((square)=>square.addEventListener("dragend", dragEnd));
    let selectedShipNameWithIndex;
    let draggedShip;
    let draggedShipLength;
    ships.forEach((ship)=>ship.addEventListener("mousedown", (e)=>{
            selectedShipNameWithIndex = e.target.id;
        // console.log(selectedShipNameWithIndex)
        }));
    function dragStart() {
        draggedShip = this;
        draggedShipLength = this.childNodes.length;
    // console.log(draggedShip)
    }
    function dragOver(e) {
        e.preventDefault();
    }
    function dragEnter(e) {
        e.preventDefault();
    }
    function dragLeave() {
    // console.log('drag leave')
    }
    function dragDrop() {
        let shipNameWithLastId = draggedShip.lastChild.id;
        let shipClass = shipNameWithLastId.slice(0, -2);
        // console.log(shipClass)
        let lastShipIndex = parseInt(shipNameWithLastId.substr(-1));
        let shipLastId = lastShipIndex + parseInt(this.dataset.id);
        // console.log(shipLastId)
        const notAllowedHorizontal = [
            0,
            10,
            20,
            30,
            40,
            50,
            60,
            70,
            80,
            90,
            1,
            11,
            21,
            31,
            41,
            51,
            61,
            71,
            81,
            91,
            2,
            22,
            32,
            42,
            52,
            62,
            72,
            82,
            92,
            3,
            13,
            23,
            33,
            43,
            53,
            63,
            73,
            83,
            93
        ];
        const notAllowedVertical = [
            99,
            98,
            97,
            96,
            95,
            94,
            93,
            92,
            91,
            90,
            89,
            88,
            87,
            86,
            85,
            84,
            83,
            82,
            81,
            80,
            79,
            78,
            77,
            76,
            75,
            74,
            73,
            72,
            71,
            70,
            69,
            68,
            67,
            66,
            65,
            64,
            63,
            62,
            61,
            60
        ];
        let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastShipIndex);
        let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastShipIndex);
        selectedShipIndex = parseInt(selectedShipNameWithIndex.substr(-1));
        shipLastId = shipLastId - selectedShipIndex;
        // console.log(shipLastId)
        if (isHorizontal && !newNotAllowedHorizontal.includes(shipLastId)) for(let i = 0; i < draggedShipLength; i++){
            let directionClass;
            if (i === 0) directionClass = "start";
            if (i === draggedShipLength - 1) directionClass = "end";
            userSquares[parseInt(this.dataset.id) - selectedShipIndex + i].classList.add("taken", "horizontal", directionClass, shipClass);
        }
        else if (!isHorizontal && !newNotAllowedVertical.includes(shipLastId)) for(let i1 = 0; i1 < draggedShipLength; i1++){
            let directionClass1;
            if (i1 === 0) directionClass1 = "start";
            if (i1 === draggedShipLength - 1) directionClass1 = "end";
            userSquares[parseInt(this.dataset.id) - selectedShipIndex + width * i1].classList.add("taken", "vertical", directionClass1, shipClass);
        }
        else return;
        displayGrid.removeChild(draggedShip);
        if (!displayGrid.querySelector(".ship")) allShipsPlaced = true;
    }
    function dragEnd() {
    // console.log('dragend')
    }
    // Game Logic for MultiPlayer
    function playGameMulti(socket) {
        setupButtons.style.display = "none";
        if (isGameOver) return;
        if (!ready) {
            socket.emit("player-ready");
            ready = true;
            playerReady(playerNum);
        }
        if (enemyReady) {
            if (currentPlayer === "user") {
                turnDisplay.innerHTML = "Your Go";
                document.body.classList.add("your-go");
                document.body.classList.remove("enemys-go");
            }
            if (currentPlayer === "enemy") {
                turnDisplay.innerHTML = "Enemy's Go";
                document.body.classList.add("enemys-go");
                document.body.classList.remove("your-go");
            }
        }
    }
    function playerReady(num) {
        let player = `.p${parseInt(num) + 1}`;
        document.querySelector(`${player} .ready`).classList.toggle("active");
    }
    // Game Logic for Single Player
    function playGameSingle() {
        if (isGameOver) return;
        if (currentPlayer === "user") {
            turnDisplay.innerHTML = "Your Go";
            document.body.classList.add("your-go");
            document.body.classList.remove("enemys-go");
            computerSquares.forEach((square)=>square.addEventListener("click", function(e) {
                    shotFired = square.dataset.id;
                    revealSquare(square.classList);
                }));
        }
        if (currentPlayer === "enemy") {
            turnDisplay.innerHTML = "Computers Go";
            setTimeout(enemyGo, 1000);
        }
    }
    let destroyerCount = 0;
    let submarineCount = 0;
    let cruiserCount = 0;
    let battleshipCount = 0;
    let carrierCount = 0;
    function revealSquare(classList) {
        const enemySquare = computerGrid.querySelector(`div[data-id='${shotFired}']`);
        const obj = Object.values(classList);
        if (!enemySquare.classList.contains("boom") && currentPlayer === "user" && !isGameOver) {
            if (obj.includes("destroyer")) destroyerCount++;
            if (obj.includes("submarine")) submarineCount++;
            if (obj.includes("cruiser")) cruiserCount++;
            if (obj.includes("battleship")) battleshipCount++;
            if (obj.includes("carrier")) carrierCount++;
        }
        if (obj.includes("taken")) enemySquare.classList.add("boom");
        else enemySquare.classList.add("miss");
        checkForWins();
        currentPlayer = "enemy";
        if (gameMode === "singlePlayer") playGameSingle();
    }
    let cpuDestroyerCount = 0;
    let cpuSubmarineCount = 0;
    let cpuCruiserCount = 0;
    let cpuBattleshipCount = 0;
    let cpuCarrierCount = 0;
    function enemyGo(square) {
        if (gameMode === "singlePlayer") square = Math.floor(Math.random() * userSquares.length);
        if (!userSquares[square].classList.contains("boom")) {
            const hit = userSquares[square].classList.contains("taken");
            userSquares[square].classList.add(hit ? "boom" : "miss");
            if (userSquares[square].classList.contains("destroyer")) cpuDestroyerCount++;
            if (userSquares[square].classList.contains("submarine")) cpuSubmarineCount++;
            if (userSquares[square].classList.contains("cruiser")) cpuCruiserCount++;
            if (userSquares[square].classList.contains("battleship")) cpuBattleshipCount++;
            if (userSquares[square].classList.contains("carrier")) cpuCarrierCount++;
            checkForWins();
        } else if (gameMode === "singlePlayer") enemyGo();
        currentPlayer = "user";
        turnDisplay.innerHTML = "Your Go";
        document.body.classList.add("your-go");
        document.body.classList.remove("enemys-go");
    }
    function checkForWins() {
        let enemy = "computer";
        if (gameMode === "multiPlayer") enemy = "enemy";
        if (destroyerCount === 2) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s destroyer`;
            destroyerCount = 10;
        }
        if (submarineCount === 3) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s submarine`;
            submarineCount = 10;
        }
        if (cruiserCount === 3) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s cruiser`;
            cruiserCount = 10;
        }
        if (battleshipCount === 4) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s battleship`;
            battleshipCount = 10;
        }
        if (carrierCount === 5) {
            infoDisplay.innerHTML = `You sunk the ${enemy}'s carrier`;
            carrierCount = 10;
        }
        if (cpuDestroyerCount === 2) {
            infoDisplay.innerHTML = `${enemy} sunk your destroyer`;
            cpuDestroyerCount = 10;
        }
        if (cpuSubmarineCount === 3) {
            infoDisplay.innerHTML = `${enemy} sunk your submarine`;
            cpuSubmarineCount = 10;
        }
        if (cpuCruiserCount === 3) {
            infoDisplay.innerHTML = `${enemy} sunk your cruiser`;
            cpuCruiserCount = 10;
        }
        if (cpuBattleshipCount === 4) {
            infoDisplay.innerHTML = `${enemy} sunk your battleship`;
            cpuBattleshipCount = 10;
        }
        if (cpuCarrierCount === 5) {
            infoDisplay.innerHTML = `${enemy} sunk your carrier`;
            cpuCarrierCount = 10;
        }
        if (destroyerCount + submarineCount + cruiserCount + battleshipCount + carrierCount === 50) {
            infoDisplay.innerHTML = 'YOU WON! To play again <a href="/">click here</a>!';
            gameOver();
        }
        if (cpuDestroyerCount + cpuSubmarineCount + cpuCruiserCount + cpuBattleshipCount + cpuCarrierCount === 50) {
            infoDisplay.innerHTML = `${enemy.toUpperCase()} WON! To play again <a href=\"/\">click here</a>!`;
            gameOver();
        }
    }
    function gameOver() {
        isGameOver = true;
        startButton.removeEventListener("click", playGameSingle);
    }
});

},{}]},["3TvmZ","lVWSS"], "lVWSS", "parcelRequire94c2")

//# sourceMappingURL=index.4ac6dd8b.js.map
