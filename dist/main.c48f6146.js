// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/main.js":[function(require,module,exports) {
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__.SplitText, gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother);
window.addEventListener('DOMContentLoaded', function () {
  /** *******    Fixed header    *********/
  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll >= 700) {
      $('.header-fixed').addClass('active');
    } else {
      $('.header-fixed').removeClass('active');
    }
  });
  var currentYear = new Date().getFullYear();
  var yearNode = document.querySelector('.year');
  yearNode.innerHTML = currentYear;
  var video = document.querySelector('video');
  if (window.matchMedia('(prefers-reduced-motion)').matches) {
    video.removeAttribute('autoplay');
    video.pause();
  }
  var mm = gsap.matchMedia();
  var breakPoint = 991;
  mm.add({
    isMobile: "(max-width: ".concat(breakPoint, "px)"),
    isDesktop: "(min-width: ".concat(breakPoint + 1, "px)")
  }, function (context) {
    var isMobile = context.conditions.isMobile;
    console.log(context.conditions);
    var smoother = gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: isMobile ? 0.5 : 2,
      smoothTouch: 0.1,
      effects: true
    });
    smoother.effects('.second-screen__block-pic__img', {
      speed: '0.9'
    });
    smoother.effects('.alarm-screen__pics-pic__img', {
      speed: '1'
    });
    smoother.effects('.parallax-1', {
      speed: '1.1'
    });
    smoother.effects('.parallax-2', {
      speed: '1.2'
    });
  }); // Main text appearance

  gsap.fromTo('.title-1, .title-3', {
    opacity: 0,
    x: -50
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo('.title-2', {
    opacity: 0,
    x: 50
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo('.stamp', {
    opacity: 0
  }, {
    opacity: 1,
    yPercent: 0,
    duration: 1
  }); // Block rotation

  var rotation = gsap.utils.toArray('.rotation');
  rotation.forEach(function (el) {
    var rotationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top'
      }
    });
    rotationTimeline.to(el, {
      rotation: 40,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        scrub: 2
      }
    });
  }); // Text split animation

  var text = gsap.utils.toArray('.split-title');
  text.forEach(function (el) {
    var splitWords = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__.SplitText(el, {
      type: 'lines'
    });
    var splitTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top'
      }
    });
    splitTimeline.from(splitWords.lines, {
      opacity: 0,
      yPercent: 180,
      duration: 0.8,
      ease: 'Power3.easeOut',
      stagger: 0.2,
      transform: 'rotate3d(1,-.3,0,90deg)'
    });
  }); // Fade footer blocks

  var fade = gsap.utils.toArray('.fade');
  fade.forEach(function (el, i) {
    if (i == 1) {
      gsap.from(el, {
        opacity: 0,
        xPercent: 10,
        duration: 0.8,
        scrollTrigger: {
          trigger: el
        }
      });
    } else {
      gsap.from(el, {
        opacity: 0,
        xPercent: -10,
        duration: 0.8,
        scrollTrigger: {
          trigger: el
        }
      });
    }
  }); // FadeUp blocks

  var smallImages = gsap.utils.toArray('.fadeUp');
  smallImages.forEach(function (el) {
    gsap.from(el, {
      opacity: 0,
      yPercent: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play complete'
      }
    });
  }); // bubbles appearance for group blocks

  gsap.set('.pic', {
    opacity: 0,
    scale: 0
  });
  ScrollTrigger.batch('.pic', {
    onEnter: function onEnter(batch) {
      return gsap.to(batch, {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        ease: 'back.out'
      });
    }
  }); // slider

  var swiper = new Swiper('.swiper', {
    speed: 1200,
    parallax: true,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  var swiperMob = new Swiper('.swiper-mob', {
    speed: 600,
    autoHeight: true,
    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51256" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/main.js"], null)
//# sourceMappingURL=/main.c48f6146.js.map