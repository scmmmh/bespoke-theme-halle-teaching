/*!
 * bespoke-theme-halle-teaching v1.0.0
 *
 * Copyright 2018, Mark Hall
 * This content is released under the MIT license
 * 
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self);var f=o;f=f.bespoke||(f.bespoke={}),f=f.themes||(f.themes={}),f.halleTeaching=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){

var classes = _dereq_('bespoke-classes');
var insertCss = _dereq_('insert-css');

module.exports = function() {
  var css = "/*! normalize.css v3.0.0 | MIT License | git.io/normalize */article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas{vertical-align:baseline}audio,canvas,progress,video{display:inline-block}video{vertical-align:baseline}audio:not([controls]){display:none}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}mark{background:#ff0}img{border:0}button,input,optgroup,select,textarea{color:inherit;font:inherit}html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}input[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}input[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}input[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}legend{border:0}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section,figcaption,figure{display:block}hr{box-sizing:content-box;overflow:visible}main{display:block}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}b,strong{font-weight:bolder}code,kbd,samp{font-size:1em}samp{font-family:monospace,monospace}dfn{font-style:italic}mark{background-color:#ff0;color:#000}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button{font-size:100%;margin:0}input,optgroup,select,textarea{font-size:100%;line-height:1.15;margin:0}button{overflow:visible}button,select{text-transform:none}html [type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText}input{overflow:visible}[type=\"checkbox\"],[type=\"radio\"]{box-sizing:border-box;padding:0}[type=\"number\"]::-webkit-inner-spin-button,[type=\"number\"]::-webkit-outer-spin-button{height:auto}[type=\"search\"]{-webkit-appearance:textfield;outline-offset:-2px}[type=\"search\"]::-webkit-search-cancel-button,[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;display:table;max-width:100%;padding:0;color:inherit;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}details{display:block}summary{display:list-item}menu{display:block}canvas{display:inline-block}template,[hidden]{display:none}.foundation-mq{font-family:\"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"}html{box-sizing:border-box;font-size:110%}*,*::before,*::after{box-sizing:inherit}body{margin:0;padding:0;background:#fefefe;font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-weight:400;line-height:1.5;color:#0a0a0a;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}img{display:inline-block;vertical-align:middle;max-width:100%;height:auto;-ms-interpolation-mode:bicubic}textarea{height:auto;min-height:50px;border-radius:3px}select{box-sizing:border-box;width:100%;border-radius:3px}.map_canvas img,.map_canvas embed,.map_canvas object,.mqa-display img,.mqa-display embed,.mqa-display object{max-width:none!important}button{padding:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:3px;background:0 0;line-height:1;cursor:auto}[data-whatinput='mouse'] button{outline:0}pre{overflow:auto}button,input,optgroup,select,textarea{font-family:inherit}.is-visible{display:block!important}.is-hidden{display:none!important}div{margin:0}div,dl{padding:0}dt,dd{margin:0}dt,dd,ul,ol{padding:0}li{margin:0}li,h1,h2,h3,h4,h5,h6{padding:0}pre,form{margin:0}pre,form,p,th,td{padding:0}th,td{margin:0}p{margin:0 0 1rem;font-size:inherit;line-height:1.6;text-rendering:optimizeLegibility}em,i{font-style:italic;line-height:inherit}strong,b{font-weight:700}strong,b,small{line-height:inherit}small{font-size:80%}h1,.h1,h2,.h2,h3,.h3,h4,.h4,h5,.h5,h6,.h6{font-family:\"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;font-style:normal;font-weight:400;color:inherit;text-rendering:optimizeLegibility}h1 small,.h1 small,h2 small,.h2 small,h3 small,.h3 small,h4 small,.h4 small,h5 small,.h5 small,h6 small,.h6 small{line-height:0;color:#cacaca}h1{margin:0 0 .5rem}h1,.h1{font-size:1.7rem;line-height:1.4}.h1{margin-top:0;margin-bottom:.5rem}h2{margin:0 0 .5rem}h2,.h2{font-size:1.3rem;line-height:1.4}.h2{margin-top:0;margin-bottom:.5rem}h3{margin:0 0 .5rem}h3,.h3{font-size:1.125rem;line-height:1.4}.h3{margin-top:0;margin-bottom:.5rem}h4{margin:0 0 .5rem}h4,.h4{font-size:1.125rem;line-height:1.4}.h4{margin-top:0;margin-bottom:.5rem}h5{margin:0 0 .5rem}h5,.h5{font-size:1.0625rem;line-height:1.4}.h5{margin-top:0;margin-bottom:.5rem}h6{margin:0 0 .5rem}h6,.h6{font-size:1rem;line-height:1.4}.h6{margin-top:0;margin-bottom:.5rem}a{line-height:inherit;color:#368429;text-decoration:none;cursor:pointer}a:hover,a:focus{color:#2e7223}a img{border:0}hr{clear:both;max-width:62.5rem;height:0;margin:1.25rem auto;border-top:0;border-right:0;border-bottom:1px solid #cacaca;border-left:0}ul,ol,dl{list-style-position:outside;line-height:1.6}li{font-size:inherit}ul{list-style-type:disc}ul,ol{margin:0 0 1rem 1.25rem}ul ul,ol ul,ul ol,ol ol{margin-left:1.25rem;margin-bottom:0}dl{margin-bottom:1rem}dl dt{margin-bottom:.3rem;font-weight:700}blockquote{margin:0 0 1rem;padding:.5625rem 1.25rem 0 1.1875rem;border-left:1px solid #cacaca}blockquote,blockquote p{line-height:1.6;color:#8a8a8a}cite{display:block;font-size:.8125rem;color:#8a8a8a}cite:before{content:\"— \"}abbr,abbr[title]{border-bottom:1px dotted #0a0a0a;cursor:help;text-decoration:none}figure{margin:0}code{padding:.125rem .3125rem .0625rem;border:1px solid #cacaca;font-weight:400}code,kbd{background-color:#e6e6e6;font-family:Consolas,\"Liberation Mono\",Courier,monospace;color:#0a0a0a}kbd{margin:0;padding:.125rem .25rem 0;border-radius:3px}.subheader{margin-top:.2rem;margin-bottom:.5rem;font-weight:400;line-height:1.4;color:#8a8a8a}.lead{font-size:125%;line-height:1.6}.stat{font-size:2.5rem;line-height:1}p+.stat{margin-top:-1rem}ul.no-bullet,ol.no-bullet{margin-left:0;list-style:none}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.align-left{-ms-flex-item-align:start;align-self:flex-start}.align-right{-ms-flex-item-align:end;align-self:flex-end}.two-column{-webkit-column-count:2;-moz-column-count:2;column-count:2}.two-column,.three-column{-webkit-column-gap:2em;-moz-column-gap:2em;column-gap:2em}.three-column{-webkit-column-count:3;-moz-column-count:3;column-count:3}picture{position:relative}picture>footer{position:absolute;font-size:6pt;right:0;bottom:0;color:#222;background:#fff;opacity:.5;padding:0 .1rem}picture>footer a{color:#222;text-decoration:none}@media screen{.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto;overflow:hidden}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{width:640px;height:480px;position:absolute;top:50%;left:50%;margin-left:-320px;margin-top:-240px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px;box-sizing:border-box;box-shadow:0 0 5px #222}.bespoke-slide .notes{display:none}.bespoke-inactive,.bespoke-bullet-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:0}.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw}.bespoke-progress-bar{position:absolute;height:100%;background:#368429;transition:width .6s ease}.emphatic{background:#368429}.emphatic-text{color:#fff}body>footer{position:absolute;bottom:0;right:0;margin:0 .5rem;z-index:1;-webkit-transform-origin:bottom right;transform-origin:bottom right}body>footer h1{color:#666;font-size:70%}body>footer h1 small{color:#aaa;display:block;font-size:60%}.print-icon{position:absolute;right:5px;bottom:5px;width:34px;height:34px;padding:5px;display:block;z-index:1000}.print-icon svg{width:24px;height:24px}.print-icon path{fill:#6f6f6f}.print-icon:hover{background-color:#6f6f6f}.print-icon:hover path{fill:#f0f0f0}}@media print{.bespoke-parent{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-slide{position:relative;width:640px;height:480px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:10px;box-sizing:border-box;box-shadow:0 0 5px #222;margin:1rem;zoom:1!important}.bespoke-slide .notes{display:block;position:absolute;top:480px;left:0;padding-top:1rem}.bespoke-slide:nth-child(n){page-break-after:always}.bespoke-inactive,.bespoke-bullet-inactive,.bespoke-backdrop-active{opacity:1}.bespoke-progress-parent,.bespoke-progress-bar{display:none}.emphatic,*[data-bespoke-backdrop=emphatic]{background:#368429}.emphatic-text{color:#fff}body>footer,.print-icon{display:none}}";
  insertCss(css, { prepend: true });

  return function(deck) {
    classes()(deck);
    var parent = deck.parent,
        firstSlide = deck.slides[0],
        slideHeight = firstSlide.offsetHeight,
        slideWidth = firstSlide.offsetWidth,
        footer = document.querySelector('body > footer');

    // Scale the footer (if one exists)
    if (footer !== undefined && footer !== null) {
      var scaleFooter = function() {
        var xScale = parent.offsetWidth / slideWidth,
            yScale = parent.offsetHeight / slideHeight;
        var right = ((parent.offsetWidth - (slideWidth * Math.min(xScale, yScale))) / 2) + 'px';
        footer.style.transform = 'scale(' + Math.min(xScale, yScale) + ')';
        footer.style.right = right;
      }
      scaleFooter();
      window.addEventListener('resize', scaleFooter);
    }

    // Add the print button
    var print_icon = document.createElement('a');
    print_icon.setAttribute('class', 'print-icon');
    print_icon.setAttribute('href', '#');
    print_icon.addEventListener('click', function(ev) {
        ev.preventDefault();
        window.print();
    });
    var print_icon_svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    print_icon_svg.setAttribute('viewBox', '0 0 24 24');
    var print_icon_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    print_icon_path.setAttribute('d', 'M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z');
    print_icon_svg.appendChild(print_icon_path);
    print_icon.appendChild(print_icon_svg);
    document.body.appendChild(print_icon);
    /*<svg viewBox="0 0 24 24">
      <path d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
    </svg>*/
  };
};

},{"bespoke-classes":2,"insert-css":3}],2:[function(_dereq_,module,exports){
module.exports = function() {
  return function(deck) {
    var addClass = function(el, cls) {
        el.classList.add('bespoke-' + cls);
      },

      removeClass = function(el, cls) {
        el.className = el.className
          .replace(new RegExp('bespoke-' + cls +'(\\s|$)', 'g'), ' ')
          .trim();
      },

      deactivate = function(el, index) {
        var activeSlide = deck.slides[deck.slide()],
          offset = index - deck.slide(),
          offsetClass = offset > 0 ? 'after' : 'before';

        ['before(-\\d+)?', 'after(-\\d+)?', 'active', 'inactive'].map(removeClass.bind(null, el));

        if (el !== activeSlide) {
          ['inactive', offsetClass, offsetClass + '-' + Math.abs(offset)].map(addClass.bind(null, el));
        }
      };

    addClass(deck.parent, 'parent');
    deck.slides.map(function(el) { addClass(el, 'slide'); });

    deck.on('activate', function(e) {
      deck.slides.map(deactivate);
      addClass(e.slide, 'active');
      removeClass(e.slide, 'inactive');
    });
  };
};

},{}],3:[function(_dereq_,module,exports){
var inserted = {};

module.exports = function (css, options) {
    if (inserted[css]) return;
    inserted[css] = true;
    
    var elem = document.createElement('style');
    elem.setAttribute('type', 'text/css');

    if ('textContent' in elem) {
      elem.textContent = css;
    } else {
      elem.styleSheet.cssText = css;
    }
    
    var head = document.getElementsByTagName('head')[0];
    if (options && options.prepend) {
        head.insertBefore(elem, head.childNodes[0]);
    } else {
        head.appendChild(elem);
    }
};

},{}]},{},[1])
(1)
});