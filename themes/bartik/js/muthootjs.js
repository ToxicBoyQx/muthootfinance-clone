(function() {
    function oa(k, m) {
        k.prototype = cb(m.prototype);
        k.prototype.constructor = k;
        k.base = m.prototype
    }

    function cb(k) {
        function m() {}
        m.prototype = k;
        return new m
    }

    function Va(k, m, v) {
        "millisecond" === v ? k.setMilliseconds(k.getMilliseconds() + 1 * m) : "second" === v ? k.setSeconds(k.getSeconds() + 1 * m) : "minute" === v ? k.setMinutes(k.getMinutes() + 1 * m) : "hour" === v ? k.setHours(k.getHours() + 1 * m) : "day" === v ? k.setDate(k.getDate() + 1 * m) : "week" === v ? k.setDate(k.getDate() + 7 * m) : "month" === v ? k.setMonth(k.getMonth() + 1 * m) : "year" === v && k.setFullYear(k.getFullYear() +
            1 * m);
        return k
    }

    function aa(k, m) {
        var v = !1;
        0 > k && (v = !0, k *= -1);
        k = "" + k;
        for (m = m ? m : 1; k.length < m;) k = "0" + k;
        return v ? "-" + k : k
    }

    function Fa(k) {
        if (!k) return k;
        k = k.replace(/^\s\s*/, "");
        for (var m = /\s/, v = k.length; m.test(k.charAt(--v)););
        return k.slice(0, v + 1)
    }

    function Ba(k) {
        k.roundRect = function(k, v, r, s, ra, D, w, E) {
            w && (this.fillStyle = w);
            E && (this.strokeStyle = E);
            "undefined" === typeof ra && (ra = 5);
            this.lineWidth = D;
            this.beginPath();
            this.moveTo(k + ra, v);
            this.lineTo(k + r - ra, v);
            this.quadraticCurveTo(k + r, v, k + r, v + ra);
            this.lineTo(k +
                r, v + s - ra);
            this.quadraticCurveTo(k + r, v + s, k + r - ra, v + s);
            this.lineTo(k + ra, v + s);
            this.quadraticCurveTo(k, v + s, k, v + s - ra);
            this.lineTo(k, v + ra);
            this.quadraticCurveTo(k, v, k + ra, v);
            this.closePath();
            w && this.fill();
            E && 0 < D && this.stroke()
        }
    }

    function Pa(k, m) {
        return k - m
    }

    function S(k) {
        var m = ((k & 16711680) >> 16).toString(16),
            v = ((k & 65280) >> 8).toString(16);
        k = ((k & 255) >> 0).toString(16);
        m = 2 > m.length ? "0" + m : m;
        v = 2 > v.length ? "0" + v : v;
        k = 2 > k.length ? "0" + k : k;
        return "#" + m + v + k
    }

    function db(k, m) {
        var v = this.length >>> 0,
            r = Number(m) || 0,
            r = 0 > r ? Math.ceil(r) :
            Math.floor(r);
        for (0 > r && (r += v); r < v; r++)
            if (r in this && this[r] === k) return r;
        return -1
    }

    function r(k) {
        return null === k || "undefined" === typeof k
    }

    function Ca(k) {
        k.indexOf || (k.indexOf = db);
        return k
    }

    function eb(k) {
        if (I.fSDec) k[Z("`eeDwdouMhrudods")](Z("e`u`@ohl`uhnoHuds`uhnoDoe"), function() {
            I._fTWm && I._fTWm(k)
        })
    }

    function Wa(k, m, v) {
        v = v || "normal";
        var r = k + "_" + m + "_" + v,
            s = Xa[r];
        if (isNaN(s)) {
            try {
                k = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" +
                    k + "; font-size:" + m + "px; font-weight:" + v + ";";
                if (!wa) {
                    var ra = document.body;
                    wa = document.createElement("span");
                    wa.innerHTML = "";
                    var D = document.createTextNode("Mpgyi");
                    wa.appendChild(D);
                    ra.appendChild(wa)
                }
                wa.style.display = "";
                wa.setAttribute("style", k);
                s = Math.round(wa.offsetHeight);
                wa.style.display = "none"
            } catch (w) {
                s = Math.ceil(1.1 * m)
            }
            s = Math.max(s, m);
            Xa[r] = s
        }
        return s
    }

    function Q(k, m) {
        var v = [];
        if (v = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4,
                    2
                ],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            } [k || "solid"])
            for (var r = 0; r < v.length; r++) v[r] *= m;
        else v = [];
        return v
    }

    function W(k, m, v, s, w) {
        s = s || [];
        w = r(w) ? fb ? {
            passive: !1,
            capture: !1
        } : !1 : w;
        s.push([k, m, v, w]);
        return k.addEventListener ? (k.addEventListener(m, v, w), v) : k.attachEvent ? (s = function(m) {
            m = m || window.event;
            m.preventDefault = m.preventDefault || function() {
                m.returnValue = !1
            };
            m.stopPropagation = m.stopPropagation || function() {
                m.cancelBubble = !0
            };
            v.call(k, m)
        }, k.attachEvent("on" +
            m, s), s) : !1
    }

    function gb(k) {
        if (k._menuButton) k.exportEnabled ? Ka(k._menuButton) : ua(k._menuButton);
        else if (k.exportEnabled && s) {
            var m = !1;
            k._menuButton = document.createElement("button");
            va(k, k._menuButton, "menu");
            k._toolBar.appendChild(k._menuButton);
            W(k._menuButton, "touchstart", function(k) {
                m = !0
            }, k.allDOMEventHandlers);
            W(k._menuButton, "click", function() {
                "none" !== k._dropdownMenu.style.display || k._dropDownCloseTime && 500 >= (new Date).getTime() - k._dropDownCloseTime.getTime() || (k._dropdownMenu.style.display = "block",
                    k._menuButton.blur(), k._dropdownMenu.focus())
            }, k.allDOMEventHandlers, !0);
            W(k._menuButton, "mouseover", function() {
                m || (pa(k._menuButton, {
                    backgroundColor: k.toolbar.backgroundColorOnHover,
                    color: k.toolbar.fontColorOnHover
                }), 0 >= navigator.userAgent.search("MSIE") && pa(k._menuButton.childNodes[0], {
                    WebkitFilter: "invert(100%)",
                    filter: "invert(100%)"
                }))
            }, k.allDOMEventHandlers, !0);
            W(k._menuButton, "mouseout", function() {
                m || (pa(k._menuButton, {
                        backgroundColor: k.toolbar.backgroundColor,
                        color: k.toolbar.fontColor
                    }), 0 >=
                    navigator.userAgent.search("MSIE") && pa(k._menuButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
            }, k.allDOMEventHandlers, !0)
        }
        if (!k._dropdownMenu && k.exportEnabled && s) {
            m = !1;
            k._dropdownMenu = document.createElement("div");
            k._dropdownMenu.setAttribute("tabindex", -1);
            var v = -1 !== k.theme.indexOf("dark") ? "black" : "#888888";
            k._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" +
                k.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + v;
            k._dropdownMenu.style.display = "none";
            k._toolBar.appendChild(k._dropdownMenu);
            W(k._dropdownMenu, "blur", function() {
                ua(k._dropdownMenu);
                k._dropDownCloseTime = new Date
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML = k._cultureInfo.printText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            W(v, "touchstart", function(k) {
                m = !0
            }, k.allDOMEventHandlers);
            W(v, "mouseover", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover)
            }, k.allDOMEventHandlers, !0);
            W(v, "mouseout", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor)
            }, k.allDOMEventHandlers, !0);
            W(v, "click", function() {
                k.print();
                ua(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML =
                k._cultureInfo.saveJPGText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            W(v, "touchstart", function(k) {
                m = !0
            }, k.allDOMEventHandlers);
            W(v, "mouseover", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover)
            }, k.allDOMEventHandlers, !0);
            W(v, "mouseout", function() {
                    m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor)
                }, k.allDOMEventHandlers,
                !0);
            W(v, "click", function() {
                k.exportChart({
                    format: "jpeg",
                    fileName: k.exportFileName
                });
                ua(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML = k._cultureInfo.savePNGText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            W(v, "touchstart", function(k) {
                m = !0
            }, k.allDOMEventHandlers);
            W(v, "mouseover", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover,
                    this.style.color = k.toolbar.fontColorOnHover)
            }, k.allDOMEventHandlers, !0);
            W(v, "mouseout", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor)
            }, k.allDOMEventHandlers, !0);
            W(v, "click", function() {
                k.exportChart({
                    format: "png",
                    fileName: k.exportFileName
                });
                ua(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0)
        }
    }

    function Ya(k, m, v) {
        k *= ja;
        m *= ja;
        k = v.getImageData(k, m, 2, 2).data;
        m = !0;
        for (v = 0; 4 > v; v++)
            if (k[v] !== k[v + 4] | k[v] !== k[v + 8] | k[v] !== k[v + 12]) {
                m = !1;
                break
            } return m ? k[0] <<
            16 | k[1] << 8 | k[2] : 0
    }

    function ma(k, m, v) {
        return k in m ? m[k] : v[k]
    }

    function La(k, m, v) {
        if (s && Za) {
            var r = k.getContext("2d");
            Ma = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
            ja = Qa / Ma;
            k.width = m * ja;
            k.height = v * ja;
            Qa !== Ma && (k.style.width = m + "px", k.style.height = v + "px", r.scale(ja, ja))
        } else k.width = m, k.height = v
    }

    function hb(k) {
        if (!ib) {
            var m = !1,
                v = !1;
            "undefined" === typeof qa.Chart.creditHref ? (k.creditHref = Z("iuuqr;..b`ow`rkr/bnl."),
                k.creditText = Z("B`ow`rKR/bnl")) : (m = k.updateOption("creditText"), v = k.updateOption("creditHref"));
            if (k.creditHref && k.creditText) {
                k._creditLink || (k._creditLink = document.createElement("a"), k._creditLink.setAttribute("class", "muthootjs-chart-credit"), k._creditLink.setAttribute("title", "JavaScript Charts"), k._creditLink.setAttribute("style", "display:none;outline:none;margin:0px;position:absolute;right:2px;top:" + (k.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
                    k._creditLink.setAttribute("tabIndex", -1), k._creditLink.setAttribute("target", "_blank"));
                if (0 === k.renderCount || m || v) k._creditLink.setAttribute("href", k.creditHref), k._creditLink.innerHTML = k.creditText;
                k._creditLink && k.creditHref && k.creditText ? (k._creditLink.parentElement || k._canvasJSContainer.appendChild(k._creditLink), k._creditLink.style.top = k.height - 14 + "px") : k._creditLink.parentElement && k._canvasJSContainer.removeChild(k._creditLink)
            }
        }
    }

    function ta(k, m) {
        Ga && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var v = document.createElement("canvas");
        v.setAttribute("class", "muthootjs-chart-canvas");
        La(v, k, m);
        s || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(v);
        return v
    }

    function pa(k, m) {
        for (var v in m) k.style[v] = m[v]
    }

    function va(k, m, v) {
        m.getAttribute("state") || (m.style.backgroundColor = k.toolbar.backgroundColor, m.style.color = k.toolbar.fontColor, m.style.border = "none", pa(m, {
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
            userSelect: "none"
        }));
        m.getAttribute("state") !==
            v && (m.setAttribute("state", v), m.setAttribute("type", "button"), pa(m, {
                padding: "5px 12px",
                cursor: "pointer",
                "float": "left",
                width: "40px",
                height: "25px",
                outline: "0px",
                verticalAlign: "baseline",
                lineHeight: "0"
            }), m.setAttribute("title", k._cultureInfo[v + "Text"]), m.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + jb[v].image + "' alt='" + k._cultureInfo[v + "Text"] + "' />")
    }

    function Ka() {
        for (var k = null, m = 0; m < arguments.length; m++) k = arguments[m], k.style && (k.style.display = "inline")
    }

    function ua() {
        for (var k =
                null, m = 0; m < arguments.length; m++)(k = arguments[m]) && k.style && (k.style.display = "none")
    }

    function Ra(k, m, v, r, s) {
        if (null === k || "undefined" === typeof k) return "undefined" === typeof v ? m : v;
        k = parseFloat(k.toString()) * (0 <= k.toString().indexOf("%") ? m / 100 : 1);
        "undefined" !== typeof r && (k = Math.min(r, k), "undefined" !== typeof s && (k = Math.max(s, k)));
        return !isNaN(k) && k <= m && 0 <= k ? k : "undefined" === typeof v ? m : v
    }

    function X(k, m, v, s, w) {
        this._defaultsKey = k;
        this._themeOptionsKey = m;
        this._index = s;
        this.parent = w;
        this._eventListeners = [];
        k = {};
        this.theme && r(this.parent) && r(m) && r(s) ? k = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[m]) && (null === s ? k = this.parent.themeOptions[m] : 0 < this.parent.themeOptions[m].length && (s = Math.min(this.parent.themeOptions[m].length - 1, s), k = this.parent.themeOptions[m][s]));
        this.themeOptions = k;
        this.options = v ? v : {
            _isPlaceholder: !0
        };
        this.setOptions(this.options, k)
    }

    function Da(k, m, v, r, s) {
        "undefined" ===
        typeof s && (s = 0);
        this._padding = s;
        this._x1 = k;
        this._y1 = m;
        this._x2 = v;
        this._y2 = r;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function la(k, m) {
        la.base.constructor.call(this, "TextBlock", null, m, null, null);
        this.ctx = k;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize()
    }

    function Sa(k, m) {
        Sa.base.constructor.call(this, "Toolbar", "toolbar", m, null, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar"
    }

    function ya(k, m) {
        ya.base.constructor.call(this,
            "Title", "title", m, null, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (r(this.options.margin) && k.options.subtitles)
            for (var v = k.options.subtitles, s = 0; s < v.length; s++)
                if ((r(v[s].horizontalAlign) && "center" === this.horizontalAlign || v[s].horizontalAlign === this.horizontalAlign) && (r(v[s].verticalAlign) && "top" === this.verticalAlign || v[s].verticalAlign === this.verticalAlign) && !v[s].dockInsidePlotArea === !this.dockInsidePlotArea) {
                    this.margin = 0;
                    break
                }
        "undefined" === typeof this.options.fontSize &&
            (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Ha(k, m, v) {
        Ha.base.constructor.call(this, "Subtitle", "subtitles", m, v, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = {
            x1: null,
            y1: null,
            x2: null,
            y2: null
        }
    }

    function Ta() {
        this.pool = []
    }

    function Ia(k) {
        var m;
        k && Ja[k] && (m = Ja[k]);
        Ia.base.constructor.call(this, "CultureInfo", null, m, null, null)
    }
    var Ga = !1,
        I = {},
        s = !!document.createElement("canvas").getContext,
        qa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "MuthootJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly",
                    selectedColorSet: "readOnly"
                }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: s ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: {
                backgroundColor: "white",
                backgroundColorOnHover: "#2196f3",
                borderColor: "#2196f3",
                borderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: s ? "transparent" : null,
                borderColor: s ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: s ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: {
                    options: "readWrite",
                    chart: "readOnly"
                }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: s ? "transparent" : null,
                titleBorderColor: s ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: s ? "transparent" : null,
                labelBorderColor: s ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: s ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: {
                    options: "readWrite",
                    stripLines: "readWrite",
                    scaleBreaks: "readWrite",
                    crosshair: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: s ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    customBreaks: "readWrite",
                    axis: "readOnly",
                    autoBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: s ? "grey" : null,
                labelBorderColor: s ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: s ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: {
                    options: "readWrite",
                    axis: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: s ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: s ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: {
                    options: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    chart: "readOnly"
                }
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                textAlign: "left",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top"
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        Ja = {
            en: {}
        },
        w = s ? "Trebuchet MS, Helvetica, sans-serif" :
        "Arial",
        Ea = s ? "Impact, Charcoal, sans-serif" : "Arial",
        za = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ")
        },
        G, ba, U, ea, ka;
    ba = "#333333";
    U = "#000000";
    G = "#666666";
    ka = ea = "#000000";
    var V = 20,
        E = 14,
        Ua = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: {
                fontFamily: Ea,
                fontSize: 32,
                fontColor: ba,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: Ea,
                fontSize: E,
                fontColor: ba,
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: w,
                indexLabelFontSize: E,
                indexLabelFontColor: ba,
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: G,
                tickThickness: 1,
                tickColor: G,
                gridThickness: 0,
                gridColor: G,
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ka,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: G,
                tickThickness: 1,
                tickColor: G,
                gridThickness: 0,
                gridColor: G,
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ka,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: G,
                tickThickness: 1,
                tickColor: G,
                gridThickness: 1,
                gridColor: G,
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ka,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: ba,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: U,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: G,
                tickThickness: 1,
                tickColor: G,
                gridThickness: 1,
                gridColor: G,
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ka,
                    color: ea,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: w,
                fontSize: 14,
                fontColor: ba,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: w,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    U = ba = "#F5F5F5";
    G = "#FFFFFF";
    ea = "#40BAF1";
    ka = "#F5F5F5";
    var V = 20,
        E = 14,
        $a = {
            colorSet: "colorSet2",
            title: {
                fontFamily: w,
                fontSize: 33,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "top",
                margin: 5
            },
            subtitles: [{
                fontFamily: w,
                fontSize: E,
                fontColor: "#3A3A3A",
                fontWeight: "normal",
                verticalAlign: "top",
                margin: 5
            }],
            data: [{
                indexLabelFontFamily: w,
                indexLabelFontSize: E,
                indexLabelFontColor: "#666666",
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisY2: [{
                titleFontFamily: w,
                titleFontSize: V,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: {
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            legend: {
                fontFamily: w,
                fontSize: 14,
                fontColor: "#3A3A3A",
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: {
                fontFamily: w,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    U = ba = "#F5F5F5";
    G = "#FFFFFF";
    ea = "#40BAF1";
    ka = "#F5F5F5";
    V = 20;
    E = 14;
    Ea = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: {
            fontFamily: Ea,
            fontSize: 32,
            fontColor: ba,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        },
        subtitles: [{
            fontFamily: Ea,
            fontSize: E,
            fontColor: ba,
            fontWeight: "normal",
            verticalAlign: "top",
            margin: 5
        }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{
            indexLabelFontFamily: w,
            indexLabelFontSize: E,
            indexLabelFontColor: U,
            indexLabelFontWeight: "normal",
            indexLabelLineThickness: 1
        }],
        axisX: [{
            titleFontFamily: w,
            titleFontSize: V,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: w,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: G,
            tickThickness: 1,
            tickColor: G,
            gridThickness: 0,
            gridColor: G,
            stripLines: [{
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ka,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisX2: [{
            titleFontFamily: w,
            titleFontSize: V,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: w,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: G,
            tickThickness: 1,
            tickColor: G,
            gridThickness: 0,
            gridColor: G,
            stripLines: [{
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ka,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY: [{
            titleFontFamily: w,
            titleFontSize: V,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: w,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: G,
            tickThickness: 1,
            tickColor: G,
            gridThickness: 1,
            gridColor: G,
            stripLines: [{
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ka,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        axisY2: [{
            titleFontFamily: w,
            titleFontSize: V,
            titleFontColor: U,
            titleFontWeight: "normal",
            labelFontFamily: w,
            labelFontSize: E,
            labelFontColor: U,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: G,
            tickThickness: 1,
            tickColor: G,
            gridThickness: 1,
            gridColor: G,
            stripLines: [{
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: {
                labelFontFamily: w,
                labelFontSize: E,
                labelFontColor: "#000000",
                labelFontWeight: "normal",
                labelBackgroundColor: ka,
                color: ea,
                thickness: 1,
                lineDashType: "dash"
            },
            scaleBreaks: {
                type: "zigzag",
                spacing: "2%",
                lineColor: "#777777",
                lineThickness: 1,
                lineDashType: "solid",
                color: "#111111"
            }
        }],
        legend: {
            fontFamily: w,
            fontSize: 14,
            fontColor: ba,
            fontWeight: "bold",
            verticalAlign: "bottom",
            horizontalAlign: "center"
        },
        toolTip: {
            fontFamily: w,
            fontSize: 14,
            fontStyle: "normal",
            cornerRadius: 0,
            borderThickness: 1,
            fontColor: U,
            backgroundColor: "rgba(0, 0, 0, .7)"
        }
    };
    G = "#FFFFFF";
    U = ba = "#FAFAFA";
    ea = "#40BAF1";
    ka = "#F5F5F5";
    var V = 20,
        E = 14,
        ab = {
            light1: Ua,
            light2: $a,
            dark1: Ea,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: {
                    fontFamily: w,
                    fontSize: 32,
                    fontColor: ba,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                },
                subtitles: [{
                    fontFamily: w,
                    fontSize: E,
                    fontColor: ba,
                    fontWeight: "normal",
                    verticalAlign: "top",
                    margin: 5
                }],
                toolbar: {
                    backgroundColor: "#666666",
                    backgroundColorOnHover: "#FF7372",
                    borderColor: "#FF7372",
                    borderThickness: 1,
                    fontColor: "#F5F5F5",
                    fontColorOnHover: "#F5F5F5"
                },
                data: [{
                    indexLabelFontFamily: w,
                    indexLabelFontSize: E,
                    indexLabelFontColor: U,
                    indexLabelFontWeight: "normal",
                    indexLabelLineThickness: 1
                }],
                axisX: [{
                    titleFontFamily: w,
                    titleFontSize: V,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: G,
                    tickThickness: 1,
                    tickColor: G,
                    gridThickness: 0,
                    gridColor: G,
                    stripLines: [{
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ka,
                        color: ea,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisX2: [{
                    titleFontFamily: w,
                    titleFontSize: V,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: G,
                    tickThickness: 1,
                    tickColor: G,
                    gridThickness: 0,
                    gridColor: G,
                    stripLines: [{
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ka,
                        color: ea,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY: [{
                    titleFontFamily: w,
                    titleFontSize: V,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: G,
                    tickThickness: 1,
                    tickColor: G,
                    gridThickness: 1,
                    gridColor: G,
                    stripLines: [{
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ka,
                        color: ea,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY2: [{
                    titleFontFamily: w,
                    titleFontSize: V,
                    titleFontColor: U,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: E,
                    labelFontColor: U,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: G,
                    tickThickness: 1,
                    tickColor: G,
                    gridThickness: 1,
                    gridColor: G,
                    stripLines: [{
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: {
                        labelFontFamily: w,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ka,
                        color: ea,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                legend: {
                    fontFamily: w,
                    fontSize: 14,
                    fontColor: ba,
                    fontWeight: "bold",
                    verticalAlign: "bottom",
                    horizontalAlign: "center"
                },
                toolTip: {
                    fontFamily: w,
                    fontSize: 14,
                    fontStyle: "normal",
                    cornerRadius: 0,
                    borderThickness: 1,
                    fontColor: U,
                    backgroundColor: "rgba(0, 0, 0, .7)"
                }
            },
            theme1: Ua,
            theme2: $a,
            theme3: Ua
        },
        T = {
            numberDuration: 1,
            yearDuration: 314496E5,
            monthDuration: 2592E6,
            weekDuration: 6048E5,
            dayDuration: 864E5,
            hourDuration: 36E5,
            minuteDuration: 6E4,
            secondDuration: 1E3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ")
        };
    (function() {
        I.fSDec = function(k) {
            for (var m = "", v = 0; v < k.length; v++) m += String.fromCharCode(Math.ceil(k.length / 57 / 5) ^ k.charCodeAt(v));
            return m
        };
        I.obj = {
            trVs: "Ush`m!Wdsrhno",
            fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
            txtBl: "udyuC`rdmhod",
            fnt: "gnou",
            fSy: "ghmmRuxmd",
            fTx: "ghmmUdyu",
            grClr: "fsdx",
            cntx: "buy",
            tp: "unq"
        };
        delete qa[I.fSDec("Bi`su")][I.fSDec("bsdehuIsdg")];
        I.pro = {
            sCH: qa[I.fSDec("Bi`su")][I.fSDec("bsdehuIsdg")]
        };
        I._fTWm = function(k) {
            if ("undefined" === typeof I.pro.sCH && !bb) try {
                var m = k[I.fSDec(I.obj.cntx)];
                m[I.fSDec(I.obj.txtBl)] = I.fSDec(I.obj.tp);
                m[I.fSDec(I.obj.fnt)] = 11 + I.fSDec(I.obj.fntStr);
                m[I.fSDec(I.obj.fSy)] = I.fSDec(I.obj.grClr);
                m[I.fSDec(I.obj.fTx)](I.fSDec(I.obj.trVs), 2, k.height - 11 - 2)
            } catch (v) {}
        }
    })();
    var fb = function() {
            var k = !1;
            try {
                var m = Object.defineProperty && Object.defineProperty({}, "passive", {
                    get: function() {
                        k = !0;
                        return !1
                    }
                });
                window.addEventListener && (window.addEventListener("test", null, m), window.removeEventListener("test", null, m))
            } catch (v) {
                k = !1
            }
            return k
        }(),
        Xa = {},
        wa = null,
        kb = function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        },
        lb = function(k, m, v) {
            m = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= m ? 12 : 11, Math.round(m * (k / 400)))
        },
        Aa = function() {
            var k = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                v = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                r = "January February March April May June July August September October November December".split(" "),
                s = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                w = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                D = /[^-+\dA-Z]/g;
            return function(E, Q, N) {
                var G = N ? N.days : m,
                    S = N ? N.months : r,
                    W = N ? N.shortDays : v,
                    T = N ? N.shortMonths : s;
                N = "";
                var I = !1;
                E = E && E.getTime ? E : E ? new Date(E) : new Date;
                if (isNaN(E)) throw SyntaxError("invalid date");
                "UTC:" === Q.slice(0, 4) && (Q = Q.slice(4), I = !0);
                N = I ? "getUTC" : "get";
                var X = E[N + "Date"](),
                    L = E[N + "Day"](),
                    Y = E[N + "Month"](),
                    a = E[N + "FullYear"](),
                    d = E[N + "Hours"](),
                    c = E[N + "Minutes"](),
                    b = E[N + "Seconds"](),
                    e = E[N + "Milliseconds"](),
                    f = I ? 0 : E.getTimezoneOffset();
                return N = Q.replace(k, function(l) {
                    switch (l) {
                        case "D":
                            return X;
                        case "DD":
                            return aa(X, 2);
                        case "DDD":
                            return W[L];
                        case "DDDD":
                            return G[L];
                        case "M":
                            return Y + 1;
                        case "MM":
                            return aa(Y + 1, 2);
                        case "MMM":
                            return T[Y];
                        case "MMMM":
                            return S[Y];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return aa(String(a).slice(-2), 2);
                        case "YYY":
                            return aa(String(a).slice(-3), 3);
                        case "YYYY":
                            return aa(a, 4);
                        case "h":
                            return d % 12 || 12;
                        case "hh":
                            return aa(d % 12 || 12, 2);
                        case "H":
                            return d;
                        case "HH":
                            return aa(d, 2);
                        case "m":
                            return c;
                        case "mm":
                            return aa(c, 2);
                        case "s":
                            return b;
                        case "ss":
                            return aa(b,
                                2);
                        case "f":
                            return String(e).slice(0, 1);
                        case "ff":
                            return aa(String(e).slice(0, 2), 2);
                        case "fff":
                            return aa(String(e).slice(0, 3), 3);
                        case "t":
                            return 12 > d ? "a" : "p";
                        case "tt":
                            return 12 > d ? "am" : "pm";
                        case "T":
                            return 12 > d ? "A" : "P";
                        case "TT":
                            return 12 > d ? "AM" : "PM";
                        case "K":
                            return I ? "UTC" : (String(E).match(w) || [""]).pop().replace(D, "");
                        case "z":
                            return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);
                        case "zz":
                            return (0 < f ? "-" : "+") + aa(Math.floor(Math.abs(f) / 60), 2);
                        case "zzz":
                            return (0 < f ? "-" : "+") + aa(Math.floor(Math.abs(f) / 60),
                                2) + aa(Math.abs(f) % 60, 2);
                        default:
                            return l.slice(1, l.length - 1)
                    }
                })
            }
        }(),
        fa = function(k, m, v) {
            if (null === k) return "";
            if (!isFinite(k)) return k;
            k = Number(k);
            var r = 0 > k ? !0 : !1;
            r && (k *= -1);
            var s = v ? v.decimalSeparator : ".",
                w = v ? v.digitGroupSeparator : ",",
                D = "";
            m = String(m);
            var D = 1,
                E = v = "",
                Q = -1,
                N = [],
                G = [],
                S = 0,
                I = 0,
                W = 0,
                T = !1,
                X = 0,
                E = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            m = null;
            for (var L = 0; E && L < E.length; L++)
                if (m = E[L], "." === m && 0 > Q) Q = L;
                else {
                    if ("%" === m) D *= 100;
                    else if ("\u2030" === m) {
                        D *= 1E3;
                        continue
                    } else if ("," ===
                        m[0] && "." === m[m.length - 1]) {
                        D /= Math.pow(1E3, m.length - 1);
                        Q = L + m.length - 1;
                        continue
                    } else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || (T = !0);
                    0 > Q ? (N.push(m), "#" === m || "0" === m ? S++ : "," === m && W++) : (G.push(m), "#" !== m && "0" !== m || I++)
                } T && (m = Math.floor(k), E = -Math.floor(Math.log(k) / Math.LN10 + 1), X = 0 === k ? 0 : 0 === m ? -(S + E) : String(m).length - S, D /= Math.pow(10, X));
            0 > Q && (Q = L);
            D = (k * D).toFixed(I);
            m = D.split(".");
            D = (m[0] + "").split("");
            k = (m[1] + "").split("");
            D && "0" === D[0] && D.shift();
            for (T = E = L = I = Q = 0; 0 < N.length;)
                if (m = N.pop(), "#" === m ||
                    "0" === m)
                    if (Q++, Q === S) {
                        var Y = D,
                            D = [];
                        if ("0" === m)
                            for (m = S - I - (Y ? Y.length : 0); 0 < m;) Y.unshift("0"), m--;
                        for (; 0 < Y.length;) v = Y.pop() + v, T++, 0 === T % E && (L === W && 0 < Y.length) && (v = w + v)
                    } else 0 < D.length ? (v = D.pop() + v, I++, T++) : "0" === m && (v = "0" + v, I++, T++), 0 === T % E && (L === W && 0 < D.length) && (v = w + v);
            else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? "," === m ? (L++, E = T, T = 0, 0 < D.length && (v = w + v)) : v = 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? m.slice(1, m.length - 1) + v : m + v : (m = 0 > X ?
                m.replace("+", "").replace("-", "") : m.replace("-", ""), v += m.replace(/[0]+/, function(a) {
                    return aa(X, a.length)
                }));
            w = "";
            for (N = !1; 0 < G.length;) m = G.shift(), "#" === m || "0" === m ? 0 < k.length && 0 !== Number(k.join("")) ? (w += k.shift(), N = !0) : "0" === m && (w += "0", N = !0) : 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? w += m.slice(1, m.length - 1) : "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? w += m : (m = 0 > X ? m.replace("+", "").replace("-", "") : m.replace("-", ""), w += m.replace(/[0]+/, function(a) {
                return aa(X,
                    a.length)
            }));
            v += (N ? s : "") + w;
            return r ? "-" + v : v
        },
        Na = function(k) {
            var m = 0,
                v = 0;
            k = k || window.event;
            k.offsetX || 0 === k.offsetX ? (m = k.offsetX, v = k.offsetY) : k.layerX || 0 == k.layerX ? (m = k.layerX, v = k.layerY) : (m = k.pageX - k.target.offsetLeft, v = k.pageY - k.target.offsetTop);
            return {
                x: m,
                y: v
            }
        },
        Za = !0,
        Qa = window.devicePixelRatio || 1,
        Ma = 1,
        ja = Za ? Qa / Ma : 1,
        da = function(k, m, v, r, s, w, D, E, Q, N, T, S, G) {
            "undefined" === typeof G && (G = 1);
            D = D || 0;
            E = E || "black";
            var I = 15 < r - m && 15 < s - v ? 8 : 0.35 * Math.min(r - m, s - v);
            k.beginPath();
            k.moveTo(m, v);
            k.save();
            k.fillStyle =
                w;
            k.globalAlpha = G;
            k.fillRect(m, v, r - m, s - v);
            k.globalAlpha = 1;
            0 < D && (G = 0 === D % 2 ? 0 : 0.5, k.beginPath(), k.lineWidth = D, k.strokeStyle = E, k.moveTo(m, v), k.rect(m - G, v - G, r - m + 2 * G, s - v + 2 * G), k.stroke());
            k.restore();
            !0 === Q && (k.save(), k.beginPath(), k.moveTo(m, v), k.lineTo(m + I, v + I), k.lineTo(r - I, v + I), k.lineTo(r, v), k.closePath(), D = k.createLinearGradient((r + m) / 2, v + I, (r + m) / 2, v), D.addColorStop(0, w), D.addColorStop(1, "rgba(255, 255, 255, .4)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === N && (k.save(), k.beginPath(), k.moveTo(m, s), k.lineTo(m +
                I, s - I), k.lineTo(r - I, s - I), k.lineTo(r, s), k.closePath(), D = k.createLinearGradient((r + m) / 2, s - I, (r + m) / 2, s), D.addColorStop(0, w), D.addColorStop(1, "rgba(255, 255, 255, .4)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === T && (k.save(), k.beginPath(), k.moveTo(m, v), k.lineTo(m + I, v + I), k.lineTo(m + I, s - I), k.lineTo(m, s), k.closePath(), D = k.createLinearGradient(m + I, (s + v) / 2, m, (s + v) / 2), D.addColorStop(0, w), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === S && (k.save(), k.beginPath(), k.moveTo(r,
                v), k.lineTo(r - I, v + I), k.lineTo(r - I, s - I), k.lineTo(r, s), D = k.createLinearGradient(r - I, (s + v) / 2, r, (s + v) / 2), D.addColorStop(0, w), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, D.addColorStop(0, w), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, k.fill(), k.closePath(), k.restore())
        },
        Z = function(k) {
            for (var m = "", r = 0; r < k.length; r++) m += String.fromCharCode(Math.ceil(k.length / 57 / 5) ^ k.charCodeAt(r));
            return m
        },
        bb = window && window[Z("mnb`uhno")] && window[Z("mnb`uhno")].href && window[Z("mnb`uhno")].href.indexOf &&
        (-1 !== window[Z("mnb`uhno")].href.indexOf(Z("b`ow`rkr/bnl")) || -1 !== window[Z("mnb`uhno")].href.indexOf(Z("gdonqhy/bnl")) || -1 !== window[Z("mnb`uhno")].href.indexOf(Z("gheemd"))),
        ib = bb && -1 === window[Z("mnb`uhno")].href.indexOf(Z("gheemd")),
        jb = {
            reset: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg=="
            },
            pan: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC"
            },
            zoom: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII="
            },
            menu: {
                image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC"
            }
        };
    X.prototype.setOptions = function(k, m) {
        if (qa[this._defaultsKey]) {
            var r = qa[this._defaultsKey],
                s;
            for (s in r) "publicProperties" !== s && r.hasOwnProperty(s) && (this[s] = k && s in k ? k[s] : m && s in m ? m[s] : r[s])
        } else Ga && window.console && console.log("defaults not set")
    };
    X.prototype.get = function(k) {
        var m = qa[this._defaultsKey];
        if ("options" === k) return this.options && this.options._isPlaceholder ? null : this.options;
        if (m.hasOwnProperty(k) || m.publicProperties && m.publicProperties.hasOwnProperty(k)) return this[k];
        window.console &&
            window.console.log('Property "' + k + "\" doesn't exist. Please check for typo.")
    };
    X.prototype.set = function(k, m, r) {
        r = "undefined" === typeof r ? !0 : r;
        var s = qa[this._defaultsKey];
        if ("options" === k) this.createUserOptions(m);
        else if (s.hasOwnProperty(k) || s.publicProperties && s.publicProperties.hasOwnProperty(k) && "readWrite" === s.publicProperties[k]) this.options._isPlaceholder && this.createUserOptions(), this.options[k] = m;
        else {
            window.console && (s.publicProperties && s.publicProperties.hasOwnProperty(k) && "readOnly" === s.publicProperties[k] ?
                window.console.log('Property "' + k + '" is read-only.') : window.console.log('Property "' + k + "\" doesn't exist. Please check for typo."));
            return
        }
        r && (this.stockChart || this.chart || this).render()
    };
    X.prototype.addTo = function(k, m, r, s) {
        s = "undefined" === typeof s ? !0 : s;
        var w = qa[this._defaultsKey];
        w.hasOwnProperty(k) || w.publicProperties && w.publicProperties.hasOwnProperty(k) && "readWrite" === w.publicProperties[k] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[k] && (this.options[k] = []), k = this.options[k], r = "undefined" === typeof r || null === r ? k.length : r, k.splice(r, 0, m), s && (this.stockChart || this.chart || this).render()) : window.console && (w.publicProperties && w.publicProperties.hasOwnProperty(k) && "readOnly" === w.publicProperties[k] ? window.console.log('Property "' + k + '" is read-only.') : window.console.log('Property "' + k + "\" doesn't exist. Please check for typo."))
    };
    X.prototype.createUserOptions = function(k) {
        if ("undefined" !== typeof k || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder &&
                this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var m = this.parent.options[this.optionsName],
                    r = m.length;
                this.options._isPlaceholder || (Ca(m), r = m.indexOf(this.options));
                this.options = "undefined" === typeof k ? {} : k;
                m[r] = this.options
            } else this.options = "undefined" === typeof k ? {} : k, k = this.parent.options, this.optionsName ? m = this.optionsName : (m = this._defaultsKey) && 0 !== m.length ? (r = m.charAt(0).toLowerCase(), 1 < m.length && (r = r.concat(m.slice(1))),
                m = r) : m = void 0, k[m] = this.options
    };
    X.prototype.remove = function(k) {
        k = "undefined" === typeof k ? !0 : k;
        if (this.isOptionsInArray) {
            var m = this.parent.options[this.optionsName];
            Ca(m);
            var r = m.indexOf(this.options);
            0 <= r && m.splice(r, 1)
        } else delete this.parent.options[this.optionsName];
        k && (this.stockChart || this.chart || this).render()
    };
    X.prototype.updateOption = function(k) {
        !qa[this._defaultsKey] && (Ga && window.console) && console.log("defaults not set");
        var m = qa[this._defaultsKey],
            s = {},
            w = this[k],
            E = this._themeOptionsKey,
            I = this._index;
        this.theme && r(this.parent) && r(E) && r(I) ? s = r(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[E]) && (null === I ? s = this.parent.themeOptions[E] : 0 < this.parent.themeOptions[E].length && (s = Math.min(this.parent.themeOptions[E].length - 1, I), s = this.parent.themeOptions[E][s]));
        this.themeOptions = s;
        k in m && (w = k in this.options ? this.options[k] : s && k in s ? s[k] : m[k]);
        if (w === this[k]) return !1;
        this[k] =
            w;
        return !0
    };
    X.prototype.trackChanges = function(k) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[k] = this.options[k]
    };
    X.prototype.isBeingTracked = function(k) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[k] ? !0 : !1
    };
    X.prototype.hasOptionChanged = function(k) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[k] !== this.options[k]
    };
    X.prototype.addEventListener = function(k, m, r) {
        k && m && (this._eventListeners[k] =
            this._eventListeners[k] || [], this._eventListeners[k].push({
                context: r || this,
                eventHandler: m
            }))
    };
    X.prototype.removeEventListener = function(k, m) {
        if (k && m && this._eventListeners[k])
            for (var r = this._eventListeners[k], s = 0; s < r.length; s++)
                if (r[s].eventHandler === m) {
                    r[s].splice(s, 1);
                    break
                }
    };
    X.prototype.removeAllEventListeners = function() {
        this._eventListeners = []
    };
    X.prototype.dispatchEvent = function(k, m, r) {
        if (k && this._eventListeners[k]) {
            m = m || {};
            for (var s = this._eventListeners[k], w = 0; w < s.length; w++) s[w].eventHandler.call(s[w].context,
                m)
        }
        "function" === typeof this[k] && this[k].call(r || this.chart, m)
    };
    Da.prototype.registerSpace = function(k, m) {
        "top" === k ? this._topOccupied += m.height : "bottom" === k ? this._bottomOccupied += m.height : "left" === k ? this._leftOccupied += m.width : "right" === k && (this._rightOccupied += m.width)
    };
    Da.prototype.unRegisterSpace = function(k, m) {
        "top" === k ? this._topOccupied -= m.height : "bottom" === k ? this._bottomOccupied -= m.height : "left" === k ? this._leftOccupied -= m.width : "right" === k && (this._rightOccupied -= m.width)
    };
    Da.prototype.getFreeSpace =
        function() {
            return {
                x1: this._x1 + this._leftOccupied,
                y1: this._y1 + this._topOccupied,
                x2: this._x2 - this._rightOccupied,
                y2: this._y2 - this._bottomOccupied,
                width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
                height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied
            }
        };
    Da.prototype.reset = function() {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    };
    oa(la, X);
    la.prototype._initialize = function() {
        r(this.padding) || "object" !== typeof this.padding ? this.topPadding =
            this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = r(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = r(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = r(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = r(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    };
    la.prototype.render = function(k) {
        if (0 !== this.fontSize) {
            k && this.ctx.save();
            var m = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var r = 0;
            this._isDirty &&
                this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + r);
            "middle" === this.textBaseline && (r = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var s = 0,
                w = this.topPadding,
                E = null;
            this.ctx.roundRect || Ba(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, r, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (r = 0; r < this._wrappedText.lines.length; r++) {
                E =
                    this._wrappedText.lines[r];
                if ("right" === this.horizontalAlign || "right" === this.textAlign) s = this.width - E.width - this.rightPadding;
                else if ("left" === this.horizontalAlign || "left" === this.textAlign) s = this.leftPadding;
                else if ("center" === this.horizontalAlign || "center" === this.textAlign) s = (this.width - (this.leftPadding + this.rightPadding)) / 2 - E.width / 2 + this.leftPadding;
                this.ctx.fillText(E.text, s, w);
                w += E.height
            }
            this.ctx.font = m;
            k && this.ctx.restore()
        }
    };
    la.prototype.setText = function(k) {
        this.text = k;
        this._isDirty = !0;
        this._wrappedText =
            null
    };
    la.prototype.measureText = function() {
        this._lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return {
            width: this.width,
            height: this.height
        }
    };
    la.prototype._getLineWithWidth = function(k, m, r) {
        k = String(k);
        if (!k) return {
            text: "",
            width: 0
        };
        var s = r = 0,
            w = k.length - 1,
            E = Infinity;
        for (this.ctx.font = this._getFontString(); s <= w;) {
            var E = Math.floor((s + w) / 2),
                D = k.substr(0, E + 1);
            r = this.ctx.measureText(D).width;
            if (r < m) s = E + 1;
            else if (r > m) w = E - 1;
            else break
        }
        r > m && 1 < D.length && (D = D.substr(0, D.length - 1), r = this.ctx.measureText(D).width);
        m = !0;
        if (D.length === k.length || " " === k[D.length]) m = !1;
        m && (k = D.split(" "), 1 < k.length && k.pop(), D = k.join(" "), r = this.ctx.measureText(D).width);
        return {
            text: D,
            width: r
        }
    };
    la.prototype._wrapText = function() {
        var k = new String(Fa(String(this.text))),
            m = [],
            r = this.ctx.font,
            s = 0,
            w = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) w = s = 0;
        else
            for (; 0 < k.length;) {
                var E = this.maxHeight - (this.topPadding +
                        this.bottomPadding),
                    D = this._getLineWithWidth(k, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                D.height = this._lineHeight;
                m.push(D);
                var I = w,
                    w = Math.max(w, D.width),
                    s = s + D.height,
                    k = Fa(k.slice(D.text.length, k.length));
                E && s > E && (D = m.pop(), s -= D.height, w = I)
            }
        this._wrappedText = {
            lines: m,
            width: w,
            height: s
        };
        this.width = w + (this.leftPadding + this.rightPadding);
        this.height = s + (this.topPadding + this.bottomPadding);
        this.ctx.font = r
    };
    la.prototype._getFontString = function() {
        var k;
        k = "" + (this.fontStyle ? this.fontStyle + " " :
            "");
        k += this.fontWeight ? this.fontWeight + " " : "";
        k += this.fontSize ? this.fontSize + "px " : "";
        var m = this.fontFamily ? this.fontFamily + "" : "";
        !s && m && (m = m.split(",")[0], "'" !== m[0] && '"' !== m[0] && (m = "'" + m + "'"));
        return k += m
    };
    oa(Sa, X);
    oa(ya, X);
    ya.prototype.setLayout = function() {
        if (this.text) {
            var k = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                m = k.layoutManager.getFreeSpace(),
                s = m.x1,
                w = m.y1,
                E = 0,
                I = 0,
                D = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                Q, G;
            "top" === this.verticalAlign ||
                "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = m.width - 4 - D * ("center" === this.horizontalAlign ? 2 : 1)), I = 0.5 * m.height - this.margin - 2, E = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = m.height - 4), I = 0.5 * m.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = m.width - 4), I = 0.5 * m.height - 4));
            var N;
            r(this.padding) || "number" !== typeof this.padding ? r(this.padding) || "object" !==
                typeof this.padding || (N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : N = 2 * this.padding;
            this.wrap || (I = Math.min(I, 1.5 * this.fontSize + N));
            I = new la(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: I,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            N = I.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (w = m.y1 + 2, G = "top") : "bottom" === this.verticalAlign && (w = m.y2 - 2 - N.height, G = "bottom"), "left" === this.horizontalAlign ? s = m.x1 + 2 : "center" === this.horizontalAlign ? s = m.x1 + m.width / 2 - N.width / 2 : "right" === this.horizontalAlign && (s = m.x2 - 2 - N.width - D), Q = this.horizontalAlign,
                this.width = N.width, this.height = N.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (s = m.x1 + 2, w = m.y2 - 2 - (this.maxWidth / 2 - N.width / 2), E = -90, G = "left", this.width = N.height, this.height = N.width) : "right" === this.horizontalAlign ? (s = m.x2 - 2, w = m.y1 + 2 + (this.maxWidth / 2 - N.width / 2), E = 90, G = "right", this.width = N.height, this.height = N.width) : "center" === this.horizontalAlign && (w = k.y1 + (k.height / 2 - N.height / 2), s = k.x1 + (k.width / 2 - N.width / 2), G = "center", this.width = N.width, this.height = N.height), Q = "center");
            I.x =
                s;
            I.y = w;
            I.angle = E;
            I.horizontalAlign = Q;
            this._textBlock = I;
            k.layoutManager.registerSpace(G, {
                width: this.width + ("left" === G || "right" === G ? this.margin + 2 : 0),
                height: this.height + ("top" === G || "bottom" === G ? this.margin + 2 : 0)
            });
            this.bounds = {
                x1: s,
                y1: w,
                x2: s + this.width,
                y2: w + this.height
            };
            this.ctx.textBaseline = "top"
        }
    };
    ya.prototype.render = function() {
        this._textBlock && this._textBlock.render(!0)
    };
    oa(Ha, X);
    Ha.prototype.setLayout = ya.prototype.setLayout;
    Ha.prototype.render = ya.prototype.render;
    Ta.prototype.get = function(k, m) {
        var s =
            null;
        0 < this.pool.length ? (s = this.pool.pop(), La(s, k, m)) : s = ta(k, m);
        return s
    };
    Ta.prototype.release = function(k) {
        this.pool.push(k)
    };
    oa(Ia, X);
    var Oa = {
        addTheme: function(k, m) {
            ab[k] = m
        },
        addColorSet: function(k, m) {
            za[k] = m
        },
        addCultureInfo: function(k, m) {
            Ja[k] = m
        },
        formatNumber: function(k, m, s) {
            s = s || "en";
            if (Ja[s]) return fa(k, m || "#,##0.##", new Ia(s));
            throw "Unknown Culture Name";
        },
        formatDate: function(k, m, s) {
            s = s || "en";
            if (Ja[s]) return Aa(k, m || "DD MMM YYYY", new Ia(s));
            throw "Unknown Culture Name";
        }
    };
    "undefined" !== typeof module &&
        "undefined" !== typeof module.exports ? module.exports = Oa : "function" === typeof define && define.amd ? define([], function() {
            return Oa
        }) : (window.MuthootJS && window.console && window.console.log("MuthootJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.MuthootJS = window.MuthootJS ? window.MuthootJS : Oa);
    w = Oa.Chart = function() {
        function k(a, d) {
            return a.x - d.x
        }

        function m(a, d, c) {
            d = d || {};
            r(c) ? (this.predefinedThemes = ab, this.optionsName =
                this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
            this.theme = r(d.theme) || r(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
            m.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId =
                0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Ta;
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = {
                canvas: null,
                ctx: null,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                width: 0,
                height: 0
            };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ?
                this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "muthootjs-chart-container"), this._canvasJSContainer.style.position =
                "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", s || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = ta(a, d), this._preRenderCanvas = ta(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext &&
                (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Ba(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Ba(this._preRenderCtx), s ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = ta(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
                    this.overlaidCanvas = ta(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline =
                        "top", Ba(this.overlaidCanvasCtx)), this._eventManager = new ea(this), this.windowResizeHandler = W(window, "resize", function() {
                        b._updateSize() && b.render()
                    }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "muthootjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = {
                        x1: 0,
                        y1: 0,
                        x2: this.width,
                        y2: this.height
                    }, W(this.overlaidCanvas, "click", function(a) {
                            b._mouseEventHandler(a)
                        },
                        this.allDOMEventHandlers), W(this.overlaidCanvas, "mousemove", function(a) {
                        b._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, "mouseup", function(a) {
                        b._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, "mousedown", function(a) {
                        b._mouseEventHandler(a);
                        ua(b._dropdownMenu)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, "mouseout", function(a) {
                        b._mouseEventHandler(a)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" :
                        "touchstart",
                        function(a) {
                            b._touchEventHandler(a)
                        }, this.allDOMEventHandlers), W(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) {
                        b._touchEventHandler(a)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) {
                        b._touchEventHandler(a)
                    }, this.allDOMEventHandlers), W(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) {
                        b._touchEventHandler(a)
                    }, this.allDOMEventHandlers),
                    this.toolTip = new aa(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = {
                        axisX: [],
                        axisX2: [],
                        axisY: [],
                        axisY2: []
                    })) : window.console && window.console.log('MuthootJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function v(a, d) {
            for (var c = [], b, e = 0; e < a.length; e++)
                if (0 == e) c.push(a[0]);
                else {
                    var f, l, u;
                    u = e - 1;
                    f = 0 === u ? 0 : u - 1;
                    l = u === a.length - 1 ? u : u + 1;
                    b = Math.abs((a[l].x - a[f].x) / (0 === a[l].x - a[u].x ? 0.01 : a[l].x - a[u].x)) * (d - 1) /
                        2 + 1;
                    var z = (a[l].x - a[f].x) / b;
                    b = (a[l].y - a[f].y) / b;
                    c[c.length] = a[u].x > a[f].x && 0 < z || a[u].x < a[f].x && 0 > z ? {
                        x: a[u].x + z / 3,
                        y: a[u].y + b / 3
                    } : {
                        x: a[u].x,
                        y: a[u].y + b / 9
                    };
                    u = e;
                    f = 0 === u ? 0 : u - 1;
                    l = u === a.length - 1 ? u : u + 1;
                    b = Math.abs((a[l].x - a[f].x) / (0 === a[u].x - a[f].x ? 0.01 : a[u].x - a[f].x)) * (d - 1) / 2 + 1;
                    z = (a[l].x - a[f].x) / b;
                    b = (a[l].y - a[f].y) / b;
                    c[c.length] = a[u].x > a[f].x && 0 < z || a[u].x < a[f].x && 0 > z ? {
                        x: a[u].x - z / 3,
                        y: a[u].y - b / 3
                    } : {
                        x: a[u].x,
                        y: a[u].y - b / 9
                    };
                    c[c.length] = a[e]
                } return c
        }

        function w(a, d, c, b, e, f, l, u, z, h) {
            var p = 0;
            h ? (l.color = f, u.color = f) :
                h = 1;
            p = z ? Math.abs(e - c) : Math.abs(b - d);
            p = 0 < l.trimLength ? Math.abs(p * l.trimLength / 100) : Math.abs(p - l.length);
            z ? (c += p / 2, e -= p / 2) : (d += p / 2, b -= p / 2);
            var p = 1 === Math.round(l.thickness) % 2 ? 0.5 : 0,
                n = 1 === Math.round(u.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = h;
            a.strokeStyle = u.color || f;
            a.lineWidth = u.thickness || 2;
            a.setLineDash && a.setLineDash(Q(u.dashType, u.thickness));
            a.beginPath();
            z && 0 < u.thickness ? (a.moveTo(b - l.thickness / 2, Math.round((c + e) / 2) - n), a.lineTo(d + l.thickness / 2, Math.round((c + e) / 2) - n)) : 0 < u.thickness && (a.moveTo(Math.round((d +
                b) / 2) - n, c + l.thickness / 2), a.lineTo(Math.round((d + b) / 2) - n, e - l.thickness / 2));
            a.stroke();
            a.strokeStyle = l.color || f;
            a.lineWidth = l.thickness || 2;
            a.setLineDash && a.setLineDash(Q(l.dashType, l.thickness));
            a.beginPath();
            z && 0 < l.thickness ? (a.moveTo(b - p, c), a.lineTo(b - p, e), a.moveTo(d + p, c), a.lineTo(d + p, e)) : 0 < l.thickness && (a.moveTo(d, c + p), a.lineTo(b, c + p), a.moveTo(d, e - p), a.lineTo(b, e - p));
            a.stroke();
            a.restore()
        }

        function E(a, d) {
            E.base.constructor.call(this, "Legend", "legend", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = {
                x1: null,
                y1: null,
                x2: null,
                y2: null
            };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Wa(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function G(a, d, c, b) {
            G.base.constructor.call(this, "DataSeries", "data", d, c,
                a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = c;
            this.noDataPointsInPlotArea = 0;
            this.id = b;
            this.chart._eventManager.objectMap[b] = {
                id: b,
                objectType: "dataSeries",
                dataSeriesIndex: c
            };
            a = d.dataPoints ? d.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity =
                1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function D(a, d, c, b, e, f) {
            D.base.constructor.call(this, "Axis", d, c, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === e ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", r(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", r(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" ===
                f || "bottom" === f ? (this.optionsName = "axisY", r(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", r(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize &&
                (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
            this._position = f;
            this.lineCoordinates = {
                x1: null,
                y1: null,
                x2: null,
                y2: null,
                width: null
            };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new U(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId,
                this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new N(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new ba(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
                null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
                this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function U(a, d, c, b) {
            U.base.constructor.call(this,
                "ScaleBreaks", "scaleBreaks", d, null, b);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks &&
                0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new V(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, b) {
                    return a.startValue - b.startValue
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("MuthootJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function V(a, d, c, b, e, f) {
            V.base.constructor.call(this, "Break", d, c, b, f);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = f;
            this.optionsName =
                d;
            this.isOptionsInArray = !0;
            this.type = c.type ? this.type : f.type;
            this.fillOpacity = r(c.fillOpacity) ? f.fillOpacity : this.fillOpacity;
            this.lineThickness = r(c.lineThickness) ? f.lineThickness : this.lineThickness;
            this.color = c.color ? this.color : f.color;
            this.lineColor = c.lineColor ? this.lineColor : f.lineColor;
            this.lineDashType = c.lineDashType ? this.lineDashType : f.lineDashType;
            !r(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !r(this.endValue) && this.endValue.getTime && (this.endValue =
                this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
            this.spacing = "undefined" === typeof c.spacing ? f.spacing : c.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = f.spacing);
            this.size = f.parent.logarithmic ?
                1 : 0
        }

        function N(a, d, c, b, e) {
            N.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() :
                this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function ba(a, d, c) {
            ba.base.constructor.call(this, "Crosshair", "crosshair", d, null, c);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function aa(a, d) {
            aa.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX =
                NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }

        function ea(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ta(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function ka(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        oa(m, X);
        m.prototype.destroy = function() {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) {
                var c = a[d][0],
                    b = a[d][1],
                    e = a[d][2],
                    f = a[d][3],
                    f = f || !1;
                c.removeEventListener ? c.removeEventListener(b, e, f) : c.detachEvent && c.detachEvent("on" + b, e)
            }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null
        };
        m.prototype._updateOptions = function() {
            var a =
                this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof za[this.colorSet] ? za[this.colorSet] : za.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo =
                new Ia(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && s;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            if (this.options.zoomEnabled || this.panEnabled) {
                if (!this._zoomButton) {
                    var d = !1;
                    ua(this._zoomButton = document.createElement("button"));
                    va(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
                    W(this._zoomButton, "touchstart", function(a) {
                        d = !0
                    }, this.allDOMEventHandlers);
                    W(this._zoomButton, "click", function() {
                        a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, va(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, va(a, a._zoomButton, "pan"));
                        a.render()
                    }, this.allDOMEventHandlers);
                    W(this._zoomButton, "mouseover", function() {
                        d ? d = !1 : (pa(a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                            WebkitFilter: "invert(100%)",
                            filter: "invert(100%)"
                        }))
                    }, this.allDOMEventHandlers);
                    W(this._zoomButton, "mouseout", function() {
                            d || (pa(a._zoomButton, {
                                backgroundColor: a.toolbar.backgroundColor,
                                color: a.toolbar.fontColor,
                                transition: "0.4s",
                                WebkitTransition: "0.4s"
                            }), 0 >= navigator.userAgent.search("MSIE") && pa(a._zoomButton.childNodes[0], {
                                WebkitFilter: "invert(0%)",
                                filter: "invert(0%)"
                            }))
                        },
                        this.allDOMEventHandlers)
                }
                this._resetButton || (d = !1, ua(this._resetButton = document.createElement("button")), va(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), W(this._resetButton, "touchstart", function(a) {
                    d = !0
                }, this.allDOMEventHandlers), W(this._resetButton, "click", function() {
                    a.toolTip.hide();
                    a.toolTip.dispatchEvent("hidden", {
                            chart: a,
                            toolTip: a.toolTip
                        },
                        a.toolTip);
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, va(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum =
                            null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    ua(a._zoomButton, a._resetButton);
                    a.stockChart && (a.stockChart._rangeEventParameter = {
                        stockChart: a.stockChart,
                        source: "chart",
                        index: a.stockChart.charts.indexOf(a),
                        minimum: null,
                        maximum: null
                    });
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                    a.render();
                    a.syncCharts && a.syncCharts(null, null);
                    a._dispatchRangeEvent("rangeChanged", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged",
                        a.stockChart._rangeEventParameter, a.stockChart))
                }, this.allDOMEventHandlers), W(this._resetButton, "mouseover", function() {
                    d || (pa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColorOnHover,
                        color: a.toolbar.hoverFfontColorOnHoverontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(100%)",
                        filter: "invert(100%)"
                    }))
                }, this.allDOMEventHandlers), W(this._resetButton, "mouseout", function() {
                    d || (pa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && pa(a._resetButton.childNodes[0], {
                        WebkitFilter: "invert(0%)",
                        filter: "invert(0%)"
                    }))
                }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ka(a._zoomButton, a._resetButton)) :
                    (this.zoomEnabled = !0, this.panEnabled = !1))
            } else this.panEnabled = this.zoomEnabled = !1;
            gb(this);
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? va(a, a._zoomButton, "zoom") : va(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && va(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
        };
        m.prototype._updateSize = function() {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var d = 0,
                c = 0;
            this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
            this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            if (this.canvas.width !== d * ja || this.canvas.height !== c * ja) {
                for (var b = 0; b < a.length; b++) La(a[b], d, c);
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height,
                    width: this.width,
                    height: this.height
                };
                a = !0
            } else a = !1;
            return a
        };
        m.prototype._initialize = function() {
            this.isNavigator = r(this.parent) || r(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this.toolbar = new Sa(this, this.options.toolbar);
            this._animator ? this._animator.cancelAllAnimations() : this._animator = new ka(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = s && this.animationEnabled &&
                0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = {
                axisPlacement: null,
                plotTypes: []
            };
            this.layoutManager = new Da(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            var a = 0,
                d = null;
            if (this.options.data) {
                for (var c = 0; c <
                    this.options.data.length; c++)
                    if (a++, !this.options.data[c].type || 0 <= m._supportedChartTypes.indexOf(this.options.data[c].type)) {
                        var b = new G(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                        "error" === b.type && (b.linkedDataSeriesIndex = r(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) &&
                            (b.linkedDataSeriesIndex = null);
                        null === b.name && (b.name = "DataSeries " + a);
                        null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]], b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" ===
                            b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this.selectedColorSet[0]] : this.selectedColorSet : b._colorSet = [b.color];
                        null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                        "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) {
                            return a.x
                        }) && b.dataPoints.sort(k) : b.dataPoints.sort(k));
                        this.data.push(b);
                        var e = b.axisPlacement,
                            d = d || e,
                            f;
                        "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' +
                            b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart');
                        if (f && window.console) {
                            window.console.log(f);
                            return
                        }
                    } for (c = 0; c < this.data.length; c++) {
                    if ("none" == d && "error" === this.data[c].type && window.console) {
                        window.console.log('You cannot combine "' + b.type + '" with error chart');
                        return
                    }
                    "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex])
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = []
        };
        m._supportedChartTypes = Ca("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        m.prototype.setLayout = function() {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" ===
                                    this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                            this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                            this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY,
                            0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c,
                                    "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                            this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                            this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] =
                            new D(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
                    if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] =
                                    new D(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                            this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                            this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ?
                            this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] =
                                    new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                            this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                            this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX2.length || ("normal" ===
                            this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d])
                } if (this.axisY) {
                for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
                for (c = 0; c < this.axisY.length - 1; c++) "undefined" ===
                    typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10)
            }
            if (this.axisY2) {
                for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
                for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10)
            }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
                0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
            if (this.axisX2)
                for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
                "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            c = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (d = 0; d < this._axes.length; d++)
                    if (null !== this._axes[d].viewportMinimum || null !== this._axes[d].viewportMaximum) {
                        c = !0;
                        break
                    } c ? (Ka(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness +
                "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (ua(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            eb(this);
            this._processData();
            this.options.title && (this.title =
                new ya(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            this.subtitles = [];
            if (this.options.subtitles)
                for (d = 0; d < this.options.subtitles.length; d++) c = new Ha(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
            this.legend = new E(this, this.options.legend);
            for (d = 0; d < this.data.length; d++)(this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" ===
                this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (d = 0; d < this._axes.length; d++)
                if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
                    s ? (this._breaksCanvas = ta(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx);
                    break
                } this._preRenderCanvas = ta(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || D.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
        };
        m.prototype.renderElements = function() {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" ===
                this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) D.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) {
                var b = ta(this.width, this.height);
                b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
            }
            hb(this);
            var a = this.ctx.miterLimit,
                e;
            this.ctx.miterLimit = 3;
            s && this._breaksCanvas &&
                (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (var f = this.plotInfo.plotTypes[d], l = 0; l < f.plotUnits.length; l++) {
                    var u = f.plotUnits[l],
                        z = null;
                    u.targetCanvas =
                        null;
                    this.animatedRender && (u.targetCanvas = ta(this.width, this.height), u.targetCanvasCtx = u.targetCanvas.getContext("2d"), e = u.targetCanvasCtx.miterLimit, u.targetCanvasCtx.miterLimit = 3);
                    "line" === u.type ? z = this.renderLine(u) : "stepLine" === u.type ? z = this.renderStepLine(u) : "spline" === u.type ? z = this.renderSpline(u) : "column" === u.type ? z = this.renderColumn(u) : "bar" === u.type ? z = this.renderBar(u) : "area" === u.type ? z = this.renderArea(u) : "stepArea" === u.type ? z = this.renderStepArea(u) : "splineArea" === u.type ? z = this.renderSplineArea(u) :
                        "stackedColumn" === u.type ? z = this.renderStackedColumn(u) : "stackedColumn100" === u.type ? z = this.renderStackedColumn100(u) : "stackedBar" === u.type ? z = this.renderStackedBar(u) : "stackedBar100" === u.type ? z = this.renderStackedBar100(u) : "stackedArea" === u.type ? z = this.renderStackedArea(u) : "stackedArea100" === u.type ? z = this.renderStackedArea100(u) : "bubble" === u.type ? z = z = this.renderBubble(u) : "scatter" === u.type ? z = this.renderScatter(u) : "pie" === u.type ? this.renderPie(u) : "doughnut" === u.type ? this.renderPie(u) : "funnel" === u.type ?
                        z = this.renderFunnel(u) : "pyramid" === u.type ? z = this.renderFunnel(u) : "candlestick" === u.type ? z = this.renderCandlestick(u) : "ohlc" === u.type ? z = this.renderCandlestick(u) : "rangeColumn" === u.type ? z = this.renderRangeColumn(u) : "error" === u.type ? z = this.renderError(u) : "rangeBar" === u.type ? z = this.renderRangeBar(u) : "rangeArea" === u.type ? z = this.renderRangeArea(u) : "rangeSplineArea" === u.type ? z = this.renderRangeSplineArea(u) : "waterfall" === u.type ? z = this.renderWaterfall(u) : "boxAndWhisker" === u.type && (z = this.renderBoxAndWhisker(u));
                    for (var h = 0; h < u.dataSeriesIndexes.length; h++) this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[h]]);
                    this.animatedRender && (u.targetCanvasCtx.miterLimit = e, z && c.push(z))
                }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({
                source: this._breaksCanvasCtx,
                dest: this.plotArea.ctx,
                animationCallback: L.fadeInAnimation,
                easingFunction: L.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            });
            this.animatedRender && 0 < this._indexLabels.length && (e = ta(this.width, this.height).getContext("2d"),
                c.push(this.renderIndexLabels(e)));
            var p = this;
            if (0 < c.length) p.disableToolTip = !0, p._animator.animate(200, p.animationDuration, function(a) {
                p.ctx.clearRect(0, 0, p.width, p.height);
                p.ctx.drawImage(b, 0, 0, Math.floor(p.width * ja), Math.floor(p.height * ja), 0, 0, p.width, p.height);
                for (var e = 0; e < c.length; e++) z = c[e], 1 > a && "undefined" !== typeof z.startTimePercent ? a >= z.startTimePercent && z.animationCallback(z.easingFunction(a - z.startTimePercent, 0, 1, 1 - z.startTimePercent), z) : z.animationCallback(z.easingFunction(a, 0, 1, 1), z);
                p.dispatchEvent("dataAnimationIterationEnd", {
                    chart: p
                })
            }, function() {
                c = [];
                for (var a = 0; a < p.plotInfo.plotTypes.length; a++)
                    for (var e = p.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) e.plotUnits[d].targetCanvas = null;
                b = null;
                p.disableToolTip = !1;
                p.dispatchEvent("dataAnimationEnd", {
                    chart: p
                })
            });
            else {
                if (p._breaksCanvas)
                    if (s) p.plotArea.ctx.drawImage(p._breaksCanvas, 0, 0, this.width, this.height);
                    else
                        for (h = 0; h < p._axes.length; h++) p._axes[h].createMask();
                0 < p._indexLabels.length && p.renderIndexLabels();
                p.dispatchEvent("dataAnimationIterationEnd", {
                    chart: p
                });
                p.dispatchEvent("dataAnimationEnd", {
                    chart: p
                })
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ua(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Ga && (p = this, setTimeout(function() {
                var a = document.getElementById("ghostCanvasCopy");
                a && (La(a, p.width, p.height), a.getContext("2d").drawImage(p._eventManager.ghostCanvas, 0, 0))
            }, 2E3));
            this._breaksCanvas && (delete this._breaksCanvas,
                delete this._breaksCanvasCtx);
            for (h = 0; h < this._axes.length; h++) this._axes[h].maskCanvas && (delete this._axes[h].maskCanvas, delete this._axes[h].maskCtx)
        };
        m.prototype.render = function(a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas = null
        };
        m.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ?
                    "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        m.prototype.categoriseDataSeries = function() {
            for (var a = "", d = 0; d < this.data.length; d++)
                if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= m._supportedChartTypes.indexOf(a.type)) {
                    for (var c = null, b = !1, e = null, f = !1, l = 0; l < this.plotInfo.plotTypes.length; l++)
                        if (this.plotInfo.plotTypes[l].type === a.type) {
                            b = !0;
                            c = this.plotInfo.plotTypes[l];
                            break
                        } b || (c = {
                        type: a.type,
                        totalDataSeries: 0,
                        plotUnits: []
                    }, this.plotInfo.plotTypes.push(c));
                    for (l = 0; l <
                        c.plotUnits.length; l++)
                        if (c.plotUnits[l].axisYType === a.axisYType && c.plotUnits[l].axisXType === a.axisXType && c.plotUnits[l].axisYIndex === a.axisYIndex && c.plotUnits[l].axisXIndex === a.axisXIndex) {
                            f = !0;
                            e = c.plotUnits[l];
                            break
                        } f || (e = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: c.plotUnits.length,
                        plotType: c,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <=
                            a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: []
                    }, c.plotUnits.push(e));
                    c.totalDataSeries++;
                    e.dataSeriesIndexes.push(d);
                    a.plotUnit = e
                } for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (c = this.plotInfo.plotTypes[d], l = a = 0; l < c.plotUnits.length; l++) c.plotUnits[l].previousDataSeriesCount =
                    a, a += c.plotUnits[l].dataSeriesIndexes.length
        };
        m.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var d = this.data[a];
                if (d.dataPoints)
                    for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId
            }
        };
        m.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
                    var b = d.plotUnits[c];
                    "line" === b.type ||
                        "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" ===
                        b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b)
                }
            this.calculateAutoBreaks()
        };
        m.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var u = this.data[a.dataSeriesIndexes[l]],
                        z = 0,
                        h = !1,
                        p = !1,
                        n;
                    if ("normal" === u.axisPlacement ||
                        "xySwapped" === u.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (u.dataPoints[z].x && u.dataPoints[z].x.getTime || "dateTime" === u.xValueType) f = !0;
                    for (z = 0; z < u.dataPoints.length; z++) {
                        "undefined" === typeof u.dataPoints[z].x && (u.dataPoints[z].x = z + (a.axisX.logarithmic ? 1 : 0));
                        u.dataPoints[z].x.getTime ? (f = !0, b = u.dataPoints[z].x.getTime()) : b = u.dataPoints[z].x;
                        e = u.dataPoints[z].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        e < d.min && "number" === typeof e && (d.min = e);
                        e > d.max && "number" === typeof e && (d.max = e);
                        if (0 < z) {
                            if (a.axisX.logarithmic) {
                                var A =
                                    b / u.dataPoints[z - 1].x;
                                1 > A && (A = 1 / A);
                                c.minDiff > A && 1 !== A && (c.minDiff = A)
                            } else A = b - u.dataPoints[z - 1].x, 0 > A && (A *= -1), c.minDiff > A && 0 !== A && (c.minDiff = A);
                            null !== e && null !== u.dataPoints[z - 1].y && (a.axisY.logarithmic ? (A = e / u.dataPoints[z - 1].y, 1 > A && (A = 1 / A), d.minDiff > A && 1 !== A && (d.minDiff = A)) : (A = e - u.dataPoints[z - 1].y, 0 > A && (A *= -1), d.minDiff > A && 0 !== A && (d.minDiff = A)))
                        }
                        if (b < q && !h) null !== e && (n = b);
                        else {
                            if (!h && (h = !0, 0 < z)) {
                                z -= 2;
                                continue
                            }
                            if (b > g && !p) p = !0;
                            else if (b > g && p) continue;
                            u.dataPoints[z].label && (a.axisX.labels[b] = u.dataPoints[z].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e))
                        }
                    }
                    u.axisX.valueType = u.xValueType = f ? "dateTime" : "number"
                }
        };
        m.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = [], u = [], z = Infinity, h = -Infinity, p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var n =
                        this.data[a.dataSeriesIndexes[p]],
                        q = 0,
                        g = !1,
                        A = !1,
                        k;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var O = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                        this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (n.dataPoints[q].x && n.dataPoints[q].x.getTime || "dateTime" === n.xValueType) f = !0;
                    for (q = 0; q < n.dataPoints.length; q++) {
                        "undefined" === typeof n.dataPoints[q].x && (n.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        n.dataPoints[q].x.getTime ? (f = !0, b = n.dataPoints[q].x.getTime()) : b = n.dataPoints[q].x;
                        e = r(n.dataPoints[q].y) ? 0 : n.dataPoints[q].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < q) {
                            if (a.axisX.logarithmic) {
                                var m =
                                    b / n.dataPoints[q - 1].x;
                                1 > m && (m = 1 / m);
                                c.minDiff > m && 1 !== m && (c.minDiff = m)
                            } else m = b - n.dataPoints[q - 1].x, 0 > m && (m *= -1), c.minDiff > m && 0 !== m && (c.minDiff = m);
                            null !== e && null !== n.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < e && (m = e / n.dataPoints[q - 1].y, 1 > m && (m = 1 / m), d.minDiff > m && 1 !== m && (d.minDiff = m)) : (m = e - n.dataPoints[q - 1].y, 0 > m && (m *= -1), d.minDiff > m && 0 !== m && (d.minDiff = m)))
                        }
                        if (b < O && !g) null !== n.dataPoints[q].y && (k = b);
                        else {
                            if (!g && (g = !0, 0 < q)) {
                                q -= 2;
                                continue
                            }
                            if (b > t && !A) A = !0;
                            else if (b > t && A) continue;
                            n.dataPoints[q].label && (a.axisX.labels[b] =
                                n.dataPoints[q].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === n.dataPoints[q].y ? c.viewPortMin === b && k < b && (c.viewPortMin = k) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, 0 <= e ? l[b] ? l[b] += e : (l[b] = e, z = Math.min(e, z)) : u[b] ? u[b] += e : (u[b] = e, h = Math.max(e, h)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, l), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums,
                        u)) : (d.dataPointYPositiveSums = l, d.dataPointYNegativeSums = u));
                    n.axisX.valueType = n.xValueType = f ? "dateTime" : "number"
                }
                for (q in l) l.hasOwnProperty(q) && !isNaN(q) && (a = l[q], a < d.min && (d.min = Math.min(a, z)), a > d.max && (d.max = a), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, z)), a > d.viewPortMax && (d.viewPortMax = a)));
                for (q in u) u.hasOwnProperty(q) && !isNaN(q) && (a = u[q], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, h)), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin =
                    a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, h))))
            }
        };
        m.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = !1, u = !1, z = [], h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var p = this.data[a.dataSeriesIndexes[h]],
                        n = 0,
                        q = !1,
                        g = !1,
                        A;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement) var k = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX &&
                        this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        m = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (p.dataPoints[n].x && p.dataPoints[n].x.getTime || "dateTime" === p.xValueType) f = !0;
                    for (n =
                        0; n < p.dataPoints.length; n++) {
                        "undefined" === typeof p.dataPoints[n].x && (p.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[n].x.getTime ? (f = !0, b = p.dataPoints[n].x.getTime()) : b = p.dataPoints[n].x;
                        e = r(p.dataPoints[n].y) ? null : p.dataPoints[n].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < n) {
                            if (a.axisX.logarithmic) {
                                var t = b / p.dataPoints[n - 1].x;
                                1 > t && (t = 1 / t);
                                c.minDiff > t && 1 !== t && (c.minDiff = t)
                            } else t = b - p.dataPoints[n - 1].x, 0 > t && (t *= -1), c.minDiff > t && 0 !== t && (c.minDiff = t);
                            r(e) || null === p.dataPoints[n - 1].y ||
                                (a.axisY.logarithmic ? 0 < e && (t = e / p.dataPoints[n - 1].y, 1 > t && (t = 1 / t), d.minDiff > t && 1 !== t && (d.minDiff = t)) : (t = e - p.dataPoints[n - 1].y, 0 > t && (t *= -1), d.minDiff > t && 0 !== t && (d.minDiff = t)))
                        }
                        if (b < k && !q) null !== e && (A = b);
                        else {
                            if (!q && (q = !0, 0 < n)) {
                                n -= 2;
                                continue
                            }
                            if (b > m && !g) g = !0;
                            else if (b > m && g) continue;
                            p.dataPoints[n].label && (a.axisX.labels[b] = p.dataPoints[n].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && A < b && (c.viewPortMin = A) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] :
                                0) + e, 0 <= e ? l = !0 : 0 > e && (u = !0), z[b] = z[b] ? z[b] + Math.abs(e) : Math.abs(e))
                        }
                    }
                    p.axisX.valueType = p.xValueType = f ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (d.max = r(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && !u ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : l && u ? (d.max = r(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = r(d.viewPortMin) ?
                    -99 : Math.min(d.viewPortMin, -99)) : !l && u && (d.max = r(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), d.min = r(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
                d.viewPortMin = d.min;
                d.viewPortMax = d.max;
                a.dataPointYSums = z
            }
        };
        m.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f, l, u = !1, z = 0; z < a.dataSeriesIndexes.length; z++) {
                    var h = this.data[a.dataSeriesIndexes[z]],
                        p = 0,
                        n = !1,
                        q = !1,
                        g, A, k;
                    if ("normal" === h.axisPlacement ||
                        "xySwapped" === h.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (h.dataPoints[p].x && h.dataPoints[p].x.getTime || "dateTime" === h.xValueType) u = !0;
                    for (p = 0; p < h.dataPoints.length; p++) {
                        "undefined" === typeof h.dataPoints[p].x && (h.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        h.dataPoints[p].x.getTime ? (u = !0, b = h.dataPoints[p].x.getTime()) : b = h.dataPoints[p].x;
                        if ((e = h.dataPoints[p].y) && e.length) {
                            f = Math.min.apply(null, e);
                            l = Math.max.apply(null, e);
                            A = !0;
                            for (var x = 0; x < e.length; x++) null === e.k && (A = !1);
                            A && (n || (k = g), g =
                                b)
                        }
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        f < d.min && (d.min = f);
                        l > d.max && (d.max = l);
                        0 < p && (a.axisX.logarithmic ? (A = b / h.dataPoints[p - 1].x, 1 > A && (A = 1 / A), c.minDiff > A && 1 !== A && (c.minDiff = A)) : (A = b - h.dataPoints[p - 1].x, 0 > A && (A *= -1), c.minDiff > A && 0 !== A && (c.minDiff = A)), e && (null !== e[0] && h.dataPoints[p - 1].y && null !== h.dataPoints[p - 1].y[0]) && (a.axisY.logarithmic ? (A = e[0] / h.dataPoints[p - 1].y[0], 1 > A && (A = 1 / A), d.minDiff > A && 1 !== A && (d.minDiff = A)) : (A = e[0] - h.dataPoints[p - 1].y[0], 0 > A && (A *= -1), d.minDiff > A && 0 !== A && (d.minDiff = A))));
                        if (!(b < m) || n) {
                            if (!n && (n = !0, 0 < p)) {
                                p -= 2;
                                g = k;
                                continue
                            }
                            if (b > t && !q) q = !0;
                            else if (b > t && q) continue;
                            h.dataPoints[p].label && (a.axisX.labels[b] = h.dataPoints[p].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            if (c.viewPortMin === b && e)
                                for (x = 0; x < e.length; x++)
                                    if (null === e[x] && g < b) {
                                        c.viewPortMin = g;
                                        break
                                    } null === e ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (f < d.viewPortMin && (d.viewPortMin = f), l > d.viewPortMax && (d.viewPortMax = l))
                        }
                    }
                    h.axisX.valueType = h.xValueType = u ? "dateTime" : "number"
                }
        };
        m.prototype._processSpecificPlotUnit =
            function(a) {
                if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                    for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var u = this.data[a.dataSeriesIndexes[l]],
                            z = 0,
                            h = !1,
                            p = !1,
                            n = b = 0;
                        if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX &&
                            this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                            g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                        if (u.dataPoints[z].x && u.dataPoints[z].x.getTime || "dateTime" === u.xValueType) f = !0;
                        for (z = 0; z < u.dataPoints.length; z++) "undefined" !== typeof u.dataPoints[z].isCumulativeSum &&
                            !0 === u.dataPoints[z].isCumulativeSum ? (u.dataPointEOs[z].cumulativeSumYStartValue = 0, u.dataPointEOs[z].cumulativeSum = 0 === z ? 0 : u.dataPointEOs[z - 1].cumulativeSum, u.dataPoints[z].y = 0 === z ? 0 : u.dataPointEOs[z - 1].cumulativeSum) : "undefined" !== typeof u.dataPoints[z].isIntermediateSum && !0 === u.dataPoints[z].isIntermediateSum ? (u.dataPointEOs[z].cumulativeSumYStartValue = n, u.dataPointEOs[z].cumulativeSum = 0 === z ? 0 : u.dataPointEOs[z - 1].cumulativeSum, u.dataPoints[z].y = 0 === z ? 0 : b, n = 0 === z ? 0 : u.dataPointEOs[z - 1].cumulativeSum,
                                b = 0) : (e = "number" !== typeof u.dataPoints[z].y ? 0 : u.dataPoints[z].y, u.dataPointEOs[z].cumulativeSumYStartValue = 0 === z ? 0 : u.dataPointEOs[z - 1].cumulativeSum, u.dataPointEOs[z].cumulativeSum = 0 === z ? e : u.dataPointEOs[z - 1].cumulativeSum + e, b += e);
                        for (z = 0; z < u.dataPoints.length; z++)
                            if ("undefined" === typeof u.dataPoints[z].x && (u.dataPoints[z].x = z + (a.axisX.logarithmic ? 1 : 0)), u.dataPoints[z].x.getTime ? (f = !0, b = u.dataPoints[z].x.getTime()) : b = u.dataPoints[z].x, e = u.dataPoints[z].y, b < c.min && (c.min = b), b > c.max && (c.max = b), u.dataPointEOs[z].cumulativeSum <
                                d.min && (d.min = u.dataPointEOs[z].cumulativeSum), u.dataPointEOs[z].cumulativeSum > d.max && (d.max = u.dataPointEOs[z].cumulativeSum), 0 < z && (a.axisX.logarithmic ? (n = b / u.dataPoints[z - 1].x, 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n)) : (n = b - u.dataPoints[z - 1].x, 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)), null !== e && null !== u.dataPoints[z - 1].y && (a.axisY.logarithmic ? (e = u.dataPointEOs[z].cumulativeSum / u.dataPointEOs[z - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = u.dataPointEOs[z].cumulativeSum -
                                    u.dataPointEOs[z - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || h) {
                                if (!h && (h = !0, 0 < z)) {
                                    z -= 2;
                                    continue
                                }
                                if (b > g && !p) p = !0;
                                else if (b > g && p) continue;
                                u.dataPoints[z].label && (a.axisX.labels[b] = u.dataPoints[z].label);
                                b < c.viewPortMin && (c.viewPortMin = b);
                                b > c.viewPortMax && (c.viewPortMax = b);
                                0 < z && (u.dataPointEOs[z - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[z - 1].cumulativeSum), u.dataPointEOs[z - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[z - 1].cumulativeSum));
                                u.dataPointEOs[z].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[z].cumulativeSum);
                                u.dataPointEOs[z].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[z].cumulativeSum)
                            } u.axisX.valueType = u.xValueType = f ? "dateTime" : "number"
                    }
            };
        m.prototype.calculateAutoBreaks = function() {
            function a(a, b, c, e) {
                if (e) return c = Math.pow(Math.min(c * a / b, b / a), 0.2), 1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)), {
                    startValue: a * c,
                    endValue: b / c
                };
                c = 0.2 * Math.min(c - b + a, b - a);
                0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
                return {
                    startValue: a + c,
                    endValue: b - c
                }
            }

            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (b || c)
                        for (var d = a.axisY.dataInfo, f = a.axisX.dataInfo, g, h = f.min, l = f.max, p = d.min, q = d.max, f = f._dataRanges, d = d._dataRanges, n, u = 0, z = 0; z < a.dataSeriesIndexes.length; z++) {
                            var k = e.data[a.dataSeriesIndexes[z]];
                            if (!(4 > k.dataPoints.length))
                                for (u = 0; u < k.dataPoints.length; u++)
                                    if (b && (n = (l + 1 - h) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, g = k.dataPoints[u].x.getTime ? k.dataPoints[u].x.getTime() : k.dataPoints[u].x, n = Math.floor((g - h) / n), g < f[n].min && (f[n].min = g), g > f[n].max && (f[n].max = g)), c) {
                                        var m = (q + 1 - p) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((g = "waterfall" === a.type ? k.dataPointEOs[u].cumulativeSum : k.dataPoints[u].y) && g.length)
                                            for (var s = 0; s < g.length; s++) n =
                                                Math.floor((g[s] - p) / m), g[s] < d[n].min && (d[n].min = g[s]), g[s] > d[n].max && (d[n].max = g[s]);
                                        else r(g) || (n = Math.floor((g - p) / m), g < d[n].min && (d[n].min = g), g > d[n].max && (d[n].max = g))
                                    }
                        }
                }
            }

            function c(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var b = a.axisX.dataInfo, c = b.min, d = b.max, f = b._dataRanges, g, h = 0, l = 0; l < a.dataSeriesIndexes.length; l++) {
                        var p = e.data[a.dataSeriesIndexes[l]];
                        if (!(4 > p.dataPoints.length))
                            for (h =
                                0; h < p.dataPoints.length; h++) g = (d + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b = p.dataPoints[h].x.getTime ? p.dataPoints[h].x.getTime() : p.dataPoints[h].x, g = Math.floor((b - c) / g), b < f[g].min && (f[g].min = b), b > f[g].max && (f[g].max = b)
                    }
            }
            for (var b, e = this, f = !1, l = 0; l < this._axes.length; l++)
                if (this._axes[l].scaleBreaks && this._axes[l].scaleBreaks.autoCalculate && 1 <= this._axes[l].scaleBreaks.maxNumberOfAutoBreaks) {
                    f = !0;
                    this._axes[l].dataInfo._dataRanges = [];
                    for (var u = 0; u < 100 / Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) ||
                            10, 10); u++) this._axes[l].dataInfo._dataRanges.push({
                        min: Infinity,
                        max: -Infinity
                    })
                } if (f) {
                for (l = 0; l < this.plotInfo.plotTypes.length; l++)
                    for (f = this.plotInfo.plotTypes[l], u = 0; u < f.plotUnits.length; u++) b = f.plotUnits[u], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" ===
                        b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
                for (l = 0; l < this._axes.length; l++)
                    if (this._axes[l].dataInfo._dataRanges) {
                        var z = this._axes[l].dataInfo.min;
                        b = (this._axes[l].dataInfo.max + 1 - z) * Math.max(parseFloat(this._axes[l].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var h = this._axes[l].dataInfo._dataRanges,
                            p, n, f = [];
                        if (this._axes[l].dataInfo.dataPointYPositiveSums) {
                            var q = this._axes[l].dataInfo.dataPointYPositiveSums;
                            p = h;
                            for (u in q)
                                if (q.hasOwnProperty(u) && !isNaN(u) && (n = q[u], !r(n))) {
                                    var g = Math.floor((n - z) / b);
                                    n < p[g].min && (p[g].min = n);
                                    n > p[g].max && (p[g].max = n)
                                } delete this._axes[l].dataInfo.dataPointYPositiveSums
                        }
                        if (this._axes[l].dataInfo.dataPointYNegativeSums) {
                            q = this._axes[l].dataInfo.dataPointYNegativeSums;
                            p = h;
                            for (u in q) q.hasOwnProperty(u) && !isNaN(u) && (n = -1 * q[u], r(n) || (g = Math.floor((n - z) / b), n < p[g].min && (p[g].min = n), n > p[g].max && (p[g].max = n)));
                            delete this._axes[l].dataInfo.dataPointYNegativeSums
                        }
                        for (u = 0; u < h.length -
                            1; u++)
                            if (p = h[u].max, isFinite(p))
                                for (; u < h.length - 1;)
                                    if (z = h[u + 1].min, isFinite(z)) {
                                        n = z - p;
                                        n > b && f.push({
                                            diff: n,
                                            start: p,
                                            end: z
                                        });
                                        break
                                    } else u++;
                        if (this._axes[l].scaleBreaks.customBreaks)
                            for (u = 0; u < this._axes[l].scaleBreaks.customBreaks.length; u++)
                                for (b = 0; b < f.length; b++)
                                    if (this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue || this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].start && f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue ||
                                        f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].startValue && this._axes[l].scaleBreaks.customBreaks[u].startValue <= f[b].end || f[b].start <= this._axes[l].scaleBreaks.customBreaks[u].endValue && this._axes[l].scaleBreaks.customBreaks[u].endValue <= f[b].end) f.splice(b, 1), b--;
                        f.sort(function(a, b) {
                            return b.diff - a.diff
                        });
                        for (u = 0; u < Math.min(f.length, this._axes[l].scaleBreaks.maxNumberOfAutoBreaks); u++) b = a(f[u].start, f[u].end, this._axes[l].logarithmic ? this._axes[l].dataInfo.max / this._axes[l].dataInfo.min :
                            this._axes[l].dataInfo.max - this._axes[l].dataInfo.min, this._axes[l].logarithmic), this._axes[l].scaleBreaks.autoBreaks.push(new V(this, "autoBreaks", b, u, ++this._eventManager.lastObjectId, this._axes[l].scaleBreaks)), this._axes[l].scaleBreaks._appliedBreaks.push(this._axes[l].scaleBreaks.autoBreaks[this._axes[l].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[l].scaleBreaks._appliedBreaks.sort(function(a, b) {
                            return a.startValue - b.startValue
                        })
                    }
            }
        };
        m.prototype.renderCrosshairs = function(a) {
            for (var d = 0; d < this.axisX.length; d++) this.axisX[d] !=
                a && (this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden) && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
            for (d = 0; d < this.axisX2.length; d++) this.axisX2[d] != a && (this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden) && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY.length; d++) this.axisY[d] != a && (this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden) &&
                this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY2.length; d++) this.axisY2[d] != a && (this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden) && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue)
        };
        m.prototype.getDataPointAtXY = function(a, d, c) {
            c = c || !1;
            for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var f = null;
                (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(f)
            }
            a = null;
            d = !1;
            for (c = 0; c < b.length; c++)
                if ("line" ===
                    b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type)
                    if (e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) {
                        d = !0;
                        break
                    } for (c = 0; c < b.length; c++) d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
            return a
        };
        m.prototype.getObjectAtXY = function(a, d, c) {
            var b = null;
            if (c = this.getDataPointAtXY(a,
                    d, c || !1)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
            else if (s) b = Ya(a, d, this._eventManager.ghostCtx);
            else
                for (c = 0; c < this.legend.items.length; c++) {
                    var e = this.legend.items[c];
                    a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id)
                }
            return b
        };
        m.prototype.getAutoFontSize = lb;
        m.prototype.resetOverlayedCanvas = function() {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height)
        };
        m.prototype.clearCanvas = kb;
        m.prototype.attachEvent = function(a) {
            this._events.push(a)
        };
        m.prototype._touchEventHandler = function(a) {
            if (a.changedTouches &&
                this.interactivityEnabled) {
                var d = [],
                    c = a.changedTouches,
                    b = c ? c[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        d = ["mousemove", "mousedown"];
                        this._lastTouchData = Na(b);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        d = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                            d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup",
                                "click"
                            ] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(c && 1 < c.length)) {
                    e = Na(b);
                    e.time = new Date;
                    try {
                        var l = e.y - this._lastTouchData.y,
                            f = e.time - this._lastTouchData.time;
                        if (1 < Math.abs(l) && this._lastTouchData.scroll || 5 < Math.abs(l) && 250 > f) this._lastTouchData.scroll = !0
                    } catch (u) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (c = 0; c < d.length; c++)
                            if (e = d[c], l = document.createEvent("MouseEvent"), l.initMouseEvent(e, !0, !0, window,
                                    1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(l), !r(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < f || "click" === e) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
                }
            }
        };
        m.prototype._dispatchRangeEvent = function(a, d) {
            var c = {
                chart: this
            };
            c.type = a;
            c.trigger = d;
            var b = [];
            this.axisX && 0 < this.axisX.length && b.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
            this.axisY &&
                0 < this.axisY.length && b.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
            for (var e = 0; e < b.length; e++)
                if (r(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
                    for (var f = 0; f < this.axisY.length; f++) c[b[e]].push({
                        viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                        viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
                    });
                else if ("axisY2" === b[e])
                for (f = 0; f < this.axisY2.length; f++) c[b[e]].push({
                    viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
                });
            else if ("axisX" === b[e])
                for (f = 0; f < this.axisX.length; f++) c[b[e]].push({
                    viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
                });
            else if ("axisX2" === b[e])
                for (f = 0; f < this.axisX2.length; f++) c[b[e]].push({
                    viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum,
                    viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum
                });
            this.dispatchEvent(a, c, this)
        };
        m.prototype._mouseEventHandler = function(a) {
            "undefined" === typeof a.target &&
                a.srcElement && (a.target = a.srcElement);
            var d = Na(a),
                c = a.type,
                b, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            m.capturedEventParam && (b = m.capturedEventParam, "mouseup" === c && (m.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", b.chart._mouseEventHandler, !1)), b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && s || b[c].call(b.context, d.x, d.y) :
                a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Ga && window.console && (window.console.log(c + " --\x3e x: " + d.x + "; y:" + d.y), e && window.console.log(a.which), "mouseup" === c && window.console.log("mouseup")), !e) {
                if (!m.capturedEventParam && this._events) {
                    for (var f = 0; f < this._events.length; f++)
                        if (this._events[f].hasOwnProperty(c))
                            if (b =
                                this._events[f], e = b.bounds, d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2) {
                                b[c].call(b.context, d.x, d.y);
                                "mousedown" === c && !0 === b.capture ? (m.capturedEventParam = b, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                break
                            } else b = null;
                    a.target.style.cursor =
                        b && b.cursor ? b.cursor : this._defaultCursor
                }
                c = this.plotArea;
                if (d.x < c.x1 || d.x > c.x2 || d.y < c.y1 || d.y > c.y2)
                    if (this.toolTip && this.toolTip.enabled) {
                        this.toolTip.hide();
                        this.toolTip.dispatchEvent("hidden", {
                            chart: this,
                            toolTip: this.toolTip
                        }, this.toolTip);
                        for (f = 0; f < this.axisX.length; f++) this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && this.axisX[f].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisX[f].options
                        }, this.axisX[f].crosshair);
                        for (f = 0; f < this.axisX2.length; f++) this.axisX2[f].crosshair &&
                            this.axisX2[f].crosshair.enabled && this.axisX2[f].crosshair.dispatchEvent("hidden", {
                                chart: this,
                                axis: this.axisX2[f].options
                            }, this.axisX2[f].crosshair);
                        for (f = 0; f < this.axisY.length; f++) this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && this.axisY[f].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY[f].options
                        }, this.axisY[f].crosshair);
                        for (f = 0; f < this.axisY2.length; f++) this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && this.axisY2[f].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY2[f].options
                        }, this.axisY2[f].crosshair)
                    } else this.resetOverlayedCanvas();
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
            }
        };
        m.prototype._plotAreaMouseDown = function(a, d) {
            this.isDrag = !0;
            this.dragStartPoint = {
                x: a,
                y: d
            }
        };
        m.prototype._plotAreaMouseUp = function(a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var c = d - this.dragStartPoint.y,
                    b = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    l = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var u = f,
                    f = e,
                    e = u;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = f = 0; e < this._axes.length; e++) c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (f = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * f, c.sessionVariables.newViewportMaximum = c.viewportMaximum * f, l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum =
                            c.viewportMinimum / f, c.sessionVariables.newViewportMaximum = c.viewportMaximum / f, l = !0) : c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum = c.viewportMaximum + f, l = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, c.sessionVariables.newViewportMaximum = c.viewportMaximum - f, l = !0);
                    else if ((!e || 2 < Math.abs(b)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        c = e ? this.dragStartPoint.x : this.plotArea.x1;
                        b = f ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        f = f ? d : this.plotArea.y2;
                        2 < Math.abs(c - e) && 2 < Math.abs(b - f) && this._zoomPanToSelectedRegion(c, b, e, f) && (l = !0)
                    }
                    l && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: this.stockChart.sessionVariables._axisXMin,
                        maximum: this.stockChart.sessionVariables._axisXMax
                    }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged",
                        this.stockChart._rangeEventParameter, this.stockChart)), l && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ka(this._zoomButton, this._resetButton), va(this, this._zoomButton, "pan"), va(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (l = 0; l < this.axisX.length; l++) this.axisX[l].crosshair && this.axisX[l].crosshair.enabled && this.axisX[l].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (l =
                        0; l < this.axisX2.length; l++) this.axisX2[l].crosshair && this.axisX2[l].crosshair.enabled && this.axisX2[l].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length)
                    for (l = 0; l < this.axisY.length; l++) this.axisY[l].crosshair && this.axisY[l].crosshair.enabled && this.axisY[l].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (l = 0; l < this.axisY2.length; l++) this.axisY2[l].crosshair && this.axisY2[l].crosshair.enabled && this.axisY2[l].renderCrosshair(a, d)
            }
        };
        m.prototype._plotAreaMouseMove = function(a, d) {
            if (this.isDrag &&
                "none" !== this.plotInfo.axisPlacement) {
                var c = 0,
                    b = 0,
                    e = c = null,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    l = this;
                "xySwapped" === this.plotInfo.axisPlacement && (c = f, f = e, e = c);
                c = this.dragStartPoint.x - a;
                b = this.dragStartPoint.y - d;
                2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", {
                    chart: this,
                    toolTip: this.toolTip
                }, this.toolTip)) : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
                if ((!e || 2 < Math.abs(c) ||
                        !f || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) e = {
                        x1: e ? this.plotArea.x1 + c : this.plotArea.x1,
                        y1: f ? this.plotArea.y1 + b : this.plotArea.y1,
                        x2: e ? this.plotArea.x2 + c : this.plotArea.x2,
                        y2: f ? this.plotArea.y2 + b : this.plotArea.y2
                    }, clearTimeout(l._panTimerId), l._panTimerId = setTimeout(function(b, c, e, f) {
                        return function() {
                            l._zoomPanToSelectedRegion(b, c, e, f, !0) && (l._dispatchRangeEvent("rangeChanging", "pan"), l.stockChart && (l.stockChart.navigator && l.stockChart.navigator.enabled) && (l.stockChart._rangeEventParameter.type =
                                "rangeChanging", l.stockChart.dispatchEvent("rangeChanging", l.stockChart._rangeEventParameter, l.stockChart)), l.render(), l._dispatchRangeEvent("rangeChanged", "pan"), l.stockChart && (l.stockChart.navigator && l.stockChart.navigator.enabled) && (l.stockChart._rangeEventParameter.type = "rangeChanged", l.stockChart.dispatchEvent("rangeChanged", l.stockChart._rangeEventParameter, l.stockChart)), l.dragStartPoint.x = a, l.dragStartPoint.y = d)
                        }
                    }(e.x1, e.y1, e.x2, e.y2), 0);
                    else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    c = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var b = e ? this.dragStartPoint.x : this.plotArea.x1,
                        u = f ? this.dragStartPoint.y : this.plotArea.y1,
                        z = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                        h = f ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(b, u, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha =
                        0.7;
                    this.overlaidCanvasCtx.fillRect(b, u, z, h);
                    this.overlaidCanvasCtx.globalAlpha = c
                }
            } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY &&
                    0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d)
            }
        };
        m.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
            a = this.validateRegion(a, d, c, b, e);
            d = a.axesWithValidRange;
            c = a.axesRanges;
            if (a.isValid)
                for (b = 0; b < d.length; b++) e = c[b], d[b].setViewPortRange(e.val1,
                    e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = {
                    stockChart: this.stockChart,
                    source: "chart",
                    index: this.stockChart.charts.indexOf(this),
                    minimum: e.val1,
                    maximum: e.val2
                });
            return a.isValid
        };
        m.prototype.validateRegion = function(a, d, c, b, e) {
            e = e || !1;
            for (var f = 0 <= this.zoomType.indexOf("x"), l = 0 <= this.zoomType.indexOf("y"), u = !1, z = [], h = [], p = [], n = 0; n < this._axes.length; n++)("axisX" === this._axes[n].type && f || "axisY" === this._axes[n].type &&
                l) && h.push(this._axes[n]);
            for (l = 0; l < h.length; l++) {
                var n = h[l],
                    f = !1,
                    q = n.convertPixelToValue({
                        x: a,
                        y: d
                    }),
                    g = n.convertPixelToValue({
                        x: c,
                        y: b
                    });
                if (q > g) var A = g,
                    g = q,
                    q = A;
                if (n.scaleBreaks)
                    for (A = 0; !f && A < n.scaleBreaks._appliedBreaks.length; A++) f = n.scaleBreaks._appliedBreaks[A].startValue <= q && n.scaleBreaks._appliedBreaks[A].endValue >= g;
                if (isFinite(n.dataInfo.minDiff))
                    if (A = n.getApparentDifference(q, g, null, !0), !(f || !(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && (n.logarithmic && A < Math.pow(n.dataInfo.minDiff,
                            3) || !n.logarithmic && A < 3 * Math.abs(n.dataInfo.minDiff)) || q < n.minimum || g > n.maximum)) z.push(n), p.push({
                        val1: q,
                        val2: g
                    }), u = !0;
                    else if (!e) {
                    u = !1;
                    break
                }
            }
            return {
                isValid: u,
                axesWithValidRange: z,
                axesRanges: p
            }
        };
        m.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !s && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var c =
                        this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
                    a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
                    a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
                    a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2,
                    a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
            s || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Da(a.x1, a.y1, a.x2, a.y2, 2)
        };
        m.prototype.renderIndexLabels = function(a) {
            var d = a || this.plotArea.ctx,
                c = this.plotArea,
                b = 0,
                e = 0,
                f = 0,
                l = 0,
                u = b = l = e = f = 0,
                z = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var h =
                    this._indexLabels[a],
                    p = h.chartType.toLowerCase(),
                    n, q, u = ma("indexLabelFontColor", h.dataPoint, h.dataSeries),
                    z = ma("indexLabelFontSize", h.dataPoint, h.dataSeries);
                n = ma("indexLabelFontFamily", h.dataPoint, h.dataSeries);
                q = ma("indexLabelFontStyle", h.dataPoint, h.dataSeries);
                var l = ma("indexLabelFontWeight", h.dataPoint, h.dataSeries),
                    g = ma("indexLabelBackgroundColor", h.dataPoint, h.dataSeries),
                    e = ma("indexLabelMaxWidth", h.dataPoint, h.dataSeries),
                    f = ma("indexLabelWrap", h.dataPoint, h.dataSeries),
                    A = ma("indexLabelLineDashType",
                        h.dataPoint, h.dataSeries),
                    k = ma("indexLabelLineColor", h.dataPoint, h.dataSeries),
                    m = r(h.dataPoint.indexLabelLineThickness) ? r(h.dataSeries.options.indexLabelLineThickness) ? 0 : h.dataSeries.options.indexLabelLineThickness : h.dataPoint.indexLabelLineThickness,
                    b = 0 < m ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    t = {
                        percent: null,
                        total: null
                    },
                    x = null;
                if (0 <= h.dataSeries.type.indexOf("stacked") || "pie" === h.dataSeries.type || "doughnut" === h.dataSeries.type) t = this.getPercentAndTotal(h.dataSeries,
                    h.dataPoint);
                if (h.dataSeries.indexLabelFormatter || h.dataPoint.indexLabelFormatter) x = {
                    chart: this,
                    dataSeries: h.dataSeries,
                    dataPoint: h.dataPoint,
                    index: h.indexKeyword,
                    total: t.total,
                    percent: t.percent
                };
                var C = h.dataPoint.indexLabelFormatter ? h.dataPoint.indexLabelFormatter(x) : h.dataPoint.indexLabel ? this.replaceKeywordsWithValue(h.dataPoint.indexLabel, h.dataPoint, h.dataSeries, null, h.indexKeyword) : h.dataSeries.indexLabelFormatter ? h.dataSeries.indexLabelFormatter(x) : h.dataSeries.indexLabel ? this.replaceKeywordsWithValue(h.dataSeries.indexLabel,
                    h.dataPoint, h.dataSeries, null, h.indexKeyword) : null;
                if (null !== C && "" !== C) {
                    var t = ma("indexLabelPlacement", h.dataPoint, h.dataSeries),
                        x = ma("indexLabelOrientation", h.dataPoint, h.dataSeries),
                        J = h.direction,
                        B = h.dataSeries.axisX,
                        y = h.dataSeries.axisY,
                        v = !1,
                        g = new la(d, {
                            x: 0,
                            y: 0,
                            maxWidth: e ? e : 0.5 * this.width,
                            maxHeight: f ? 5 * z : 1.5 * z,
                            angle: "horizontal" === x ? 0 : -90,
                            text: C,
                            padding: 0,
                            backgroundColor: g,
                            horizontalAlign: "left",
                            fontSize: z,
                            fontFamily: n,
                            fontWeight: l,
                            fontColor: u,
                            fontStyle: q,
                            textBaseline: "middle"
                        });
                    g.measureText();
                    h.dataSeries.indexLabelMaxWidth = g.maxWidth;
                    if ("stackedarea100" === p) {
                        if (h.point.x < c.x1 || h.point.x > c.x2 || h.point.y < c.y1 - 1 || h.point.y > c.y2 + 1) continue
                    } else if ("rangearea" === p || "rangesplinearea" === p) {
                        if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || Math.max.apply(null, h.dataPoint.y) < y.viewportMinimum || Math.min.apply(null, h.dataPoint.y) > y.viewportMaximum) continue
                    } else if (0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("bubble") || 0 <= p.indexOf("scatter")) {
                        if (h.dataPoint.x < B.viewportMinimum ||
                            h.dataPoint.x > B.viewportMaximum || h.dataPoint.y < y.viewportMinimum || h.dataPoint.y > y.viewportMaximum) continue
                    } else if (0 <= p.indexOf("column") || "waterfall" === p || "error" === p && !h.axisSwapped) {
                        if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || h.bounds.y1 > c.y2 || h.bounds.y2 < c.y1) continue
                    } else if (0 <= p.indexOf("bar") || "error" === p) {
                        if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || h.bounds.x1 > c.x2 || h.bounds.x2 < c.x1) continue
                    } else if ("candlestick" === p || "ohlc" === p) {
                        if (h.dataPoint.x <
                            B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || Math.max.apply(null, h.dataPoint.y) < y.viewportMinimum || Math.min.apply(null, h.dataPoint.y) > y.viewportMaximum) continue
                    } else if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum) continue;
                    e = l = 2;
                    "horizontal" === x ? (u = g.width, z = g.height) : (z = g.width, u = g.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= p.indexOf("line") || 0 <= p.indexOf("area")) t = "auto", l = 4;
                        else if (0 <= p.indexOf("stacked")) "auto" === t && (t = "inside");
                        else if ("bubble" === p || "scatter" ===
                            p) t = "inside";
                        n = h.point.x - ("horizontal" === x ? u / 2 : 0);
                        "inside" !== t ? (e = c.y1, f = c.y2, 0 < J ? (q = h.point.y - z / 2 - l - b, q < e && (q = "auto" === t ? Math.max(h.point.y, e) + z / 2 + l + b : e + z / 2 + l + b, v = q + z > h.point.y)) : (q = h.point.y + z / 2 + l + b, q > f - z - l - b && (q = "auto" === t ? Math.min(h.point.y, f) - z / 2 - l - b : f - z / 2 - l - b, v = q < h.point.y))) : (e = Math.max(h.bounds.y1, c.y1), f = Math.min(h.bounds.y2, c.y2), b = 0 <= p.indexOf("range") || "error" === p ? 0 < J ? Math.max(h.bounds.y1, c.y1) + z / 2 + l : Math.min(h.bounds.y2, c.y2) - z / 2 - l : (Math.max(h.bounds.y1, c.y1) + Math.min(h.bounds.y2, c.y2)) /
                            2, 0 < J ? (q = Math.max(h.point.y, b), q < e && ("bubble" === p || "scatter" === p) && (q = Math.max(h.point.y - z - l, c.y1 + l))) : (q = Math.min(h.point.y, b), q > f - z - l && ("bubble" === p || "scatter" === p) && (q = Math.min(h.point.y + l, c.y2 - z - l))), q = Math.min(q, f))
                    } else 0 <= p.indexOf("line") || 0 <= p.indexOf("area") || 0 <= p.indexOf("scatter") ? (t = "auto", e = 4) : 0 <= p.indexOf("stacked") ? "auto" === t && (t = "inside") : "bubble" === p && (t = "inside"), q = h.point.y, "inside" !== t ? (l = c.x1, f = c.x2, 0 > J ? (n = h.point.x - ("horizontal" === x ? u : u / 2) - e - b, n < l && (n = "auto" === t ? Math.max(h.point.x,
                        l) + e + b : l + e + b, v = n + u > h.point.x)) : (n = h.point.x + ("horizontal" === x ? 0 : u / 2) + e + b, n > f - u - e - b && (n = "auto" === t ? Math.min(h.point.x, f) - ("horizontal" === x ? u : u / 2) - e - b : f - u - e - b, v = n < h.point.x))) : (l = Math.max(h.bounds.x1, c.x1), Math.min(h.bounds.x2, c.x2), b = 0 <= p.indexOf("range") || "error" === p ? 0 > J ? Math.max(h.bounds.x1, c.x1) + u / 2 + e : Math.min(h.bounds.x2, c.x2) - u / 2 - e : (Math.max(h.bounds.x1, c.x1) + Math.min(h.bounds.x2, c.x2)) / 2, n = 0 > J ? Math.max(h.point.x, b) - ("horizontal" === x ? u / 2 : 0) : Math.min(h.point.x, b) - u / 2, n = Math.max(n, l));
                    "vertical" ===
                    x && (q += z / 2);
                    g.x = n;
                    g.y = q;
                    g.render(!0);
                    m && ("inside" !== t && (0 > p.indexOf("bar") && ("error" !== p || !h.axisSwapped) && h.point.x > c.x1 && h.point.x < c.x2 || !v) && (0 > p.indexOf("column") && ("error" !== p || h.axisSwapped) && h.point.y > c.y1 && h.point.y < c.y2 || !v)) && (d.lineWidth = m, d.strokeStyle = k ? k : "gray", d.setLineDash && d.setLineDash(Q(A, m)), d.beginPath(), d.moveTo(h.point.x, h.point.y), 0 <= p.indexOf("bar") || "error" === p && h.axisSwapped ? d.lineTo(n - (0 < h.direction ? 0 : -u) + ("vertical" === x ? -u / 2 : 0), q + ("vertical" === x ? -z / 2 : 0)) : 0 <= p.indexOf("column") ||
                        "error" === p && !h.axisSwapped ? d.lineTo(n + ("horizontal" === x ? u / 2 : 0), q + ((0 < h.direction ? z : -z) + ("vertical" === x ? -z : 0)) / 2) : d.lineTo(n + ("horizontal" === x ? u / 2 : 0), q + ((q < h.point.y ? z : -z) + ("vertical" === x ? -z : 0)) / 2), d.stroke())
                }
            }
            d = {
                source: d,
                dest: this.plotArea.ctx,
                animationCallback: L.fadeInAnimation,
                easingFunction: L.easing.easeInQuad,
                animationBase: 0,
                startTimePercent: 0.7
            };
            for (a = 0; a < this._indexLabels.length; a++) h = this._indexLabels[a], g = ma("indexLabelBackgroundColor", h.dataPoint, h.dataSeries), h.dataSeries.indexLabelBackgroundColor =
                r(g) ? s ? "transparent" : null : g;
            return d
        };
        m.prototype.renderLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], l, u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var z = a.dataSeriesIndexes[u],
                        h = this.data[z];
                    c.lineWidth = h.lineThickness;
                    var p = h.dataPoints,
                        n = "solid";
                    if (c.setLineDash) {
                        var q = Q(h.nullDataLineDashType,
                                h.lineThickness),
                            n = h.lineDashType,
                            g = Q(n, h.lineThickness);
                        c.setLineDash(g)
                    }
                    var A = h.id;
                    this._eventManager.objectMap[A] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: z
                    };
                    A = S(A);
                    b.strokeStyle = A;
                    b.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var A = h._colorSet,
                        k = A = h.lineColor = h.options.lineColor ? h.options.lineColor : A[0];
                    c.strokeStyle = A;
                    var m = !0,
                        t = 0,
                        x, r;
                    c.beginPath();
                    if (0 < p.length) {
                        for (var J = !1, t = 0; t < p.length; t++)
                            if (x = p[t].x.getTime ? p[t].x.getTime() : p[t].x, !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax &&
                                    (!h.connectNullData || !J)))
                                if ("number" !== typeof p[t].y) 0 < t && !(h.connectNullData || J || m) && (c.stroke(), s && b.stroke()), J = !0;
                                else {
                                    x = a.axisX.convertValueToPixel(x);
                                    r = a.axisY.convertValueToPixel(p[t].y);
                                    var B = h.dataPointIds[t];
                                    this._eventManager.objectMap[B] = {
                                        id: B,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: z,
                                        dataPointIndex: t,
                                        x1: x,
                                        y1: r
                                    };
                                    m || J ? (!m && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || n === h.lineDashType && h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(l.x,
                                        l.y), n = h.nullDataLineDashType, c.setLineDash(q)), c.lineTo(x, r), s && b.lineTo(x, r)) : (c.beginPath(), c.moveTo(x, r), s && (b.beginPath(), b.moveTo(x, r))), J = m = !1) : (c.lineTo(x, r), s && b.lineTo(x, r), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(x, r), s && (b.stroke(), b.beginPath(), b.moveTo(x, r))));
                                    l = {
                                        x: x,
                                        y: r
                                    };
                                    t < p.length - 1 && (k !== (p[t].lineColor || A) || n !== (p[t].lineDashType || h.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(x, r), k = p[t].lineColor || A, c.strokeStyle = k, c.setLineDash && (p[t].lineDashType ? (n = p[t].lineDashType,
                                        c.setLineDash(Q(n, h.lineThickness))) : (n = h.lineDashType, c.setLineDash(g))));
                                    if (0 < p[t].markerSize || 0 < h.markerSize) {
                                        var y = h.getMarkerProperties(t, x, r, c);
                                        f.push(y);
                                        B = S(B);
                                        s && f.push({
                                            x: x,
                                            y: r,
                                            ctx: b,
                                            type: y.type,
                                            size: y.size,
                                            color: B,
                                            borderColor: B,
                                            borderThickness: y.borderThickness
                                        })
                                    }(p[t].indexLabel || h.indexLabel || p[t].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "line",
                                        dataPoint: p[t],
                                        dataSeries: h,
                                        point: {
                                            x: x,
                                            y: r
                                        },
                                        direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                        color: A
                                    })
                                } c.stroke();
                        s && b.stroke()
                    }
                }
                Y.drawMarkers(f);
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderStepLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], l, u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var z = a.dataSeriesIndexes[u],
                        h = this.data[z];
                    c.lineWidth = h.lineThickness;
                    var p = h.dataPoints,
                        n = "solid";
                    if (c.setLineDash) {
                        var q = Q(h.nullDataLineDashType, h.lineThickness),
                            n = h.lineDashType,
                            g = Q(n, h.lineThickness);
                        c.setLineDash(g)
                    }
                    var A = h.id;
                    this._eventManager.objectMap[A] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: z
                    };
                    A = S(A);
                    b.strokeStyle = A;
                    b.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var A = h._colorSet,
                        k = A = h.lineColor = h.options.lineColor ? h.options.lineColor : A[0];
                    c.strokeStyle = A;
                    var m = !0,
                        t = 0,
                        x, r;
                    c.beginPath();
                    if (0 < p.length) {
                        for (var J = !1, t = 0; t < p.length; t++)
                            if (x = p[t].getTime ? p[t].x.getTime() :
                                p[t].x, !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !J)))
                                if ("number" !== typeof p[t].y) 0 < t && !(h.connectNullData || J || m) && (c.stroke(), s && b.stroke()), J = !0;
                                else {
                                    var B = r;
                                    x = a.axisX.convertValueToPixel(x);
                                    r = a.axisY.convertValueToPixel(p[t].y);
                                    var y = h.dataPointIds[t];
                                    this._eventManager.objectMap[y] = {
                                        id: y,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: z,
                                        dataPointIndex: t,
                                        x1: x,
                                        y1: r
                                    };
                                    m || J ? (!m && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || n === h.lineDashType &&
                                        h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(l.x, l.y), n = h.nullDataLineDashType, c.setLineDash(q)), c.lineTo(x, B), c.lineTo(x, r), s && (b.lineTo(x, B), b.lineTo(x, r))) : (c.beginPath(), c.moveTo(x, r), s && (b.beginPath(), b.moveTo(x, r))), J = m = !1) : (c.lineTo(x, B), s && b.lineTo(x, B), c.lineTo(x, r), s && b.lineTo(x, r), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(x, r), s && (b.stroke(), b.beginPath(), b.moveTo(x, r))));
                                    l = {
                                        x: x,
                                        y: r
                                    };
                                    t < p.length - 1 && (k !== (p[t].lineColor || A) || n !== (p[t].lineDashType || h.lineDashType)) &&
                                        (c.stroke(), c.beginPath(), c.moveTo(x, r), k = p[t].lineColor || A, c.strokeStyle = k, c.setLineDash && (p[t].lineDashType ? (n = p[t].lineDashType, c.setLineDash(Q(n, h.lineThickness))) : (n = h.lineDashType, c.setLineDash(g))));
                                    if (0 < p[t].markerSize || 0 < h.markerSize) B = h.getMarkerProperties(t, x, r, c), f.push(B), y = S(y), s && f.push({
                                        x: x,
                                        y: r,
                                        ctx: b,
                                        type: B.type,
                                        size: B.size,
                                        color: y,
                                        borderColor: y,
                                        borderThickness: B.borderThickness
                                    });
                                    (p[t].indexLabel || h.indexLabel || p[t].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepLine",
                                        dataPoint: p[t],
                                        dataSeries: h,
                                        point: {
                                            x: x,
                                            y: r
                                        },
                                        direction: 0 > p[t].y === a.axisY.reversed ? 1 : -1,
                                        color: A
                                    })
                                } c.stroke();
                        s && b.stroke()
                    }
                }
                Y.drawMarkers(f);
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderSpline = function(a) {
            function d(a) {
                a = v(a, 2);
                if (0 < a.length) {
                    b.beginPath();
                    s && e.beginPath();
                    b.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                    s && e.moveTo(a[0].x, a[0].y);
                    for (var c = 0; c < a.length -
                        3; c += 3)
                        if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), s && e.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), 0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), s && (e.stroke(), e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y));
                    b.stroke();
                    s && e.stroke()
                }
            }
            var c = a.targetCanvasCtx ||
                this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                b.save();
                var f = this.plotArea;
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                for (var l = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var z = a.dataSeriesIndexes[u],
                        h = this.data[z];
                    b.lineWidth = h.lineThickness;
                    var p = h.dataPoints,
                        n = "solid";
                    if (b.setLineDash) {
                        var q = Q(h.nullDataLineDashType, h.lineThickness),
                            n = h.lineDashType,
                            g = Q(n, h.lineThickness);
                        b.setLineDash(g)
                    }
                    var A = h.id;
                    this._eventManager.objectMap[A] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: z
                    };
                    A = S(A);
                    e.strokeStyle = A;
                    e.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var A = h._colorSet,
                        k = A = h.lineColor = h.options.lineColor ? h.options.lineColor : A[0];
                    b.strokeStyle = A;
                    var m = 0,
                        t, x, r = [];
                    b.beginPath();
                    if (0 < p.length)
                        for (x = !1, m = 0; m < p.length; m++)
                            if (t = p[m].getTime ? p[m].x.getTime() : p[m].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !x)))
                                if ("number" !== typeof p[m].y) 0 < m && !x && (h.connectNullData ? b.setLineDash && (0 <
                                    r.length && (h.options.nullDataLineDashType || !p[m - 1].lineDashType)) && (r[r.length - 1].newLineDashArray = q, n = h.nullDataLineDashType) : (d(r), r = [])), x = !0;
                                else {
                                    t = a.axisX.convertValueToPixel(t);
                                    x = a.axisY.convertValueToPixel(p[m].y);
                                    var J = h.dataPointIds[m];
                                    this._eventManager.objectMap[J] = {
                                        id: J,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: z,
                                        dataPointIndex: m,
                                        x1: t,
                                        y1: x
                                    };
                                    r[r.length] = {
                                        x: t,
                                        y: x
                                    };
                                    m < p.length - 1 && (k !== (p[m].lineColor || A) || n !== (p[m].lineDashType || h.lineDashType)) && (k = p[m].lineColor || A, r[r.length - 1].newStrokeStyle =
                                        k, b.setLineDash && (p[m].lineDashType ? (n = p[m].lineDashType, r[r.length - 1].newLineDashArray = Q(n, h.lineThickness)) : (n = h.lineDashType, r[r.length - 1].newLineDashArray = g)));
                                    if (0 < p[m].markerSize || 0 < h.markerSize) {
                                        var B = h.getMarkerProperties(m, t, x, b);
                                        l.push(B);
                                        J = S(J);
                                        s && l.push({
                                            x: t,
                                            y: x,
                                            ctx: e,
                                            type: B.type,
                                            size: B.size,
                                            color: J,
                                            borderColor: J,
                                            borderThickness: B.borderThickness
                                        })
                                    }(p[m].indexLabel || h.indexLabel || p[m].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "spline",
                                        dataPoint: p[m],
                                        dataSeries: h,
                                        point: {
                                            x: t,
                                            y: x
                                        },
                                        direction: 0 > p[m].y === a.axisY.reversed ? 1 : -1,
                                        color: A
                                    });
                                    x = !1
                                } d(r)
                }
                Y.drawMarkers(l);
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(f.x1, f.y1,
                    f.width, f.height), e.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, u, z, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ?
                    this.dataPointWidth : 1,
                    p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth &&
                    f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < f) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > p && (n = p);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var q =
                        a.dataSeriesIndexes[p],
                        g = this.data[q],
                        A = g.dataPoints;
                    if (0 < A.length)
                        for (var k = 5 < n && g.bevelEnabled ? !0 : !1, f = 0; f < A.length; f++)
                            if (A[f].getTime ? z = A[f].x.getTime() : z = A[f].x, !(z < a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax) && "number" === typeof A[f].y) {
                                l = a.axisX.convertValueToPixel(z);
                                u = a.axisY.convertValueToPixel(A[f].y);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : l - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                                var m = a.axisX.reversed ?
                                    l - n << 0 : l + n << 0,
                                    t;
                                0 <= A[f].y ? t = h : (t = u, u = h);
                                u > t && (b = u, u = t, t = b);
                                b = A[f].color ? A[f].color : g._colorSet[f % g._colorSet.length];
                                da(c, l, u, m, t, b, 0, null, k && 0 <= A[f].y, 0 > A[f].y && k, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: f,
                                    x1: l,
                                    y1: u,
                                    x2: m,
                                    y2: t
                                };
                                b = S(b);
                                s && da(this._eventManager.ghostCtx, l, u, m, t, b, 0, null, !1, !1, !1, !1);
                                (A[f].indexLabel || g.indexLabel || A[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: A[f],
                                    dataSeries: g,
                                    point: {
                                        x: l + (m - l) / 2,
                                        y: 0 > A[f].y === a.axisY.reversed ? u : t
                                    },
                                    direction: 0 > A[f].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: l,
                                        y1: Math.min(u, t),
                                        x2: m,
                                        y2: Math.max(u, t)
                                    },
                                    color: b
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: h < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : h > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : h
                }
            }
        };
        m.prototype.renderStackedColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    u = [],
                    z = [],
                    h = 0,
                    p, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) /
                    Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > p && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < h) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > p && (g = p);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1,
                    e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var k = a.dataSeriesIndexes[A],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length) {
                        var x = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                p = a.axisX.convertValueToPixel(b);
                                var r = p - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    J = r + g << 0,
                                    B;
                                if (a.axisY.logarithmic ||
                                    a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) u[b] = t[h].y + (u[b] ? u[b] : 0), 0 < u[b] && (n = a.axisY.convertValueToPixel(u[b]), B = "undefined" !== typeof f[b] ? f[b] : q, f[b] = n);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) z[b] = t[h].y + (z[b] ? z[b] : 0), B = a.axisY.convertValueToPixel(z[b]), n = "undefined" !== typeof l[b] ? l[b] : q, l[b] = B;
                                else if (n = a.axisY.convertValueToPixel(t[h].y), 0 <= t[h].y) {
                                    var y = "undefined" !== typeof f[b] ? f[b] : 0;
                                    n -= y;
                                    B = q - y;
                                    f[b] = y + (B - n)
                                } else y =
                                    l[b] ? l[b] : 0, B = n + y, n = q + y, l[b] = y + (B - n);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                da(c, r, n, J, B, b, 0, null, x && 0 <= t[h].y, 0 > t[h].y && x, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: h,
                                    x1: r,
                                    y1: n,
                                    x2: J,
                                    y2: B
                                };
                                b = S(b);
                                s && da(this._eventManager.ghostCtx, r, n, J, B, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: t[h],
                                    dataSeries: m,
                                    point: {
                                        x: p,
                                        y: 0 <= t[h].y ? n : B
                                    },
                                    direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: r,
                                        y1: Math.min(n, B),
                                        x2: J,
                                        y2: Math.max(n, B)
                                    },
                                    color: b
                                })
                            }
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        m.prototype.renderStackedColumn100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    u = [],
                    z = [],
                    h = 0,
                    p, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) /
                    Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > p && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < h) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > p && (g = p);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1,
                    e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var k = a.dataSeriesIndexes[A],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length)
                        for (var r = 5 < g && m.bevelEnabled ? !0 : !1, h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                p = a.axisX.convertValueToPixel(b);
                                n = 0 !== a.dataPointYSums[b] ? 100 * (t[h].y / a.dataPointYSums[b]) : 0;
                                var C = p - a.plotType.plotUnits.length * g /
                                    2 + a.index * g << 0,
                                    J = C + g << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) {
                                    u[b] = n + ("undefined" !== typeof u[b] ? u[b] : 0);
                                    if (0 >= u[b]) continue;
                                    n = a.axisY.convertValueToPixel(u[b]);
                                    B = f[b] ? f[b] : q;
                                    f[b] = n
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) z[b] = n + ("undefined" !== typeof z[b] ? z[b] : 0), B = a.axisY.convertValueToPixel(z[b]), n = l[b] ? l[b] : q, l[b] = B;
                                else if (n = a.axisY.convertValueToPixel(n), 0 <= t[h].y) {
                                    var y = "undefined" !== typeof f[b] ?
                                        f[b] : 0;
                                    n -= y;
                                    B = q - y;
                                    a.dataSeriesIndexes.length - 1 === A && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                                    f[b] = y + (B - n)
                                } else y = "undefined" !== typeof l[b] ? l[b] : 0, B = n + y, n = q + y, a.dataSeriesIndexes.length - 1 === A && 1 >= Math.abs(e.y2 - B) && (B = e.y2), l[b] = y + (B - n);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                da(c, C, n, J, B, b, 0, null, r && 0 <= t[h].y, 0 > t[h].y && r, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: h,
                                    x1: C,
                                    y1: n,
                                    x2: J,
                                    y2: B
                                };
                                b = S(b);
                                s && da(this._eventManager.ghostCtx,
                                    C, n, J, B, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn100",
                                    dataPoint: t[h],
                                    dataSeries: m,
                                    point: {
                                        x: p,
                                        y: 0 <= t[h].y ? n : B
                                    },
                                    direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: C,
                                        y1: Math.min(n, B),
                                        x2: J,
                                        y2: Math.max(n, B)
                                    },
                                    color: b
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width,
                    this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        m.prototype.renderBar =
            function(a) {
                var d = a.targetCanvasCtx || this.plotArea.ctx,
                    c = s ? this._preRenderCtx : d;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var b = null,
                        e = this.plotArea,
                        f = 0,
                        l, u, z, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                        p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) <<
                        0,
                        n = a.axisX.dataInfo.minDiff;
                    isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                    n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                    this.dataPointMaxWidth && f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && p < f) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                    n < f && (n =
                        f);
                    n > p && (n = p);
                    c.save();
                    s && this._eventManager.ghostCtx.save();
                    c.beginPath();
                    c.rect(e.x1, e.y1, e.width, e.height);
                    c.clip();
                    s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                    for (p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var q = a.dataSeriesIndexes[p],
                            g = this.data[q],
                            A = g.dataPoints;
                        if (0 < A.length) {
                            var k = 5 < n && g.bevelEnabled ? !0 : !1;
                            c.strokeStyle = "#4572A7 ";
                            for (f = 0; f < A.length; f++)
                                if (A[f].getTime ? z = A[f].x.getTime() : z = A[f].x, !(z <
                                        a.axisX.dataInfo.viewPortMin || z > a.axisX.dataInfo.viewPortMax) && "number" === typeof A[f].y) {
                                    u = a.axisX.convertValueToPixel(z);
                                    l = a.axisY.convertValueToPixel(A[f].y);
                                    u = a.axisX.reversed ? u + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + p) * n << 0 : u - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + p) * n << 0;
                                    var m = a.axisX.reversed ? u - n << 0 : u + n << 0,
                                        t;
                                    0 <= A[f].y ? t = h : (t = l, l = h);
                                    b = A[f].color ? A[f].color : g._colorSet[f % g._colorSet.length];
                                    da(c, t, u, l, m, b, 0, null, k, !1, !1, !1, g.fillOpacity);
                                    b = g.dataPointIds[f];
                                    this._eventManager.objectMap[b] = {
                                        id: b,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: q,
                                        dataPointIndex: f,
                                        x1: t,
                                        y1: u,
                                        x2: l,
                                        y2: m
                                    };
                                    b = S(b);
                                    s && da(this._eventManager.ghostCtx, t, u, l, m, b, 0, null, !1, !1, !1, !1);
                                    (A[f].indexLabel || g.indexLabel || A[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "bar",
                                        dataPoint: A[f],
                                        dataSeries: g,
                                        point: {
                                            x: 0 <= A[f].y ? l : t,
                                            y: u + (m - u) / 2
                                        },
                                        direction: 0 > A[f].y === a.axisY.reversed ? 1 : -1,
                                        bounds: {
                                            x1: Math.min(t, l),
                                            y1: u,
                                            x2: Math.max(t, l),
                                            y2: m
                                        },
                                        color: b
                                    })
                                }
                        }
                    }
                    s && (d.drawImage(this._preRenderCanvas,
                        0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return {
                        source: d,
                        dest: this.plotArea.ctx,
                        animationCallback: L.xScaleAnimation,
                        easingFunction: L.easing.easeOutQuart,
                        animationBase: h < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : h > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : h
                    }
                }
            };
        m.prototype.renderStackedBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    l = [],
                    u = [],
                    z = [],
                    h = 0,
                    p, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ?
                    this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth &&
                    n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > n && (g = n);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var k = a.dataSeriesIndexes[A],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length) {
                        var r = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle =
                            "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                n = a.axisX.convertValueToPixel(b);
                                var C = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    J = C + g << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) u[b] = t[h].y + (u[b] ? u[b] : 0), 0 < u[b] && (B = f[b] ? f[b] : q, f[b] = p = a.axisY.convertValueToPixel(u[b]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length &&
                                    0 >= t[h].y) z[b] = t[h].y + (z[b] ? z[b] : 0), p = l[b] ? l[b] : q, l[b] = B = a.axisY.convertValueToPixel(z[b]);
                                else if (p = a.axisY.convertValueToPixel(t[h].y), 0 <= t[h].y) {
                                    var y = f[b] ? f[b] : 0;
                                    B = q + y;
                                    p += y;
                                    f[b] = y + (p - B)
                                } else y = l[b] ? l[b] : 0, B = p - y, p = q - y, l[b] = y + (p - B);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                da(c, B, C, p, J, b, 0, null, r, !1, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: h,
                                    x1: B,
                                    y1: C,
                                    x2: p,
                                    y2: J
                                };
                                b = S(b);
                                s && da(this._eventManager.ghostCtx,
                                    B, C, p, J, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedBar",
                                    dataPoint: t[h],
                                    dataSeries: m,
                                    point: {
                                        x: 0 <= t[h].y ? p : B,
                                        y: n
                                    },
                                    direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(B, p),
                                        y1: C,
                                        x2: Math.max(B, p),
                                        y2: J
                                    },
                                    color: b
                                })
                            }
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        };
        m.prototype.renderStackedBar100 =
            function(a) {
                var d = a.targetCanvasCtx || this.plotArea.ctx,
                    c = s ? this._preRenderCtx : d;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var b = null,
                        e = this.plotArea,
                        f = [],
                        l = [],
                        u = [],
                        z = [],
                        h = 0,
                        p, n, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                    var g = a.axisX.dataInfo.minDiff;
                    isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                    g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                    this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                    g < h && (g = h);
                    g > n && (g = n);
                    c.save();
                    s &&
                        this._eventManager.ghostCtx.save();
                    c.beginPath();
                    c.rect(e.x1, e.y1, e.width, e.height);
                    c.clip();
                    s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                    for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                        var k = a.dataSeriesIndexes[A],
                            m = this.data[k],
                            t = m.dataPoints;
                        if (0 < t.length) {
                            var r = 5 < g && m.bevelEnabled ? !0 : !1;
                            c.strokeStyle = "#4572A7 ";
                            for (h = 0; h < t.length; h++)
                                if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin ||
                                        b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                    n = a.axisX.convertValueToPixel(b);
                                    var C;
                                    C = 0 !== a.dataPointYSums[b] ? 100 * (t[h].y / a.dataPointYSums[b]) : 0;
                                    var J = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                        B = J + g << 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) {
                                        u[b] = C + (u[b] ? u[b] : 0);
                                        if (0 >= u[b]) continue;
                                        C = f[b] ? f[b] : q;
                                        f[b] = p = a.axisY.convertValueToPixel(u[b])
                                    } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) z[b] =
                                        C + (z[b] ? z[b] : 0), p = l[b] ? l[b] : q, l[b] = C = a.axisY.convertValueToPixel(z[b]);
                                    else if (p = a.axisY.convertValueToPixel(C), 0 <= t[h].y) {
                                        var y = f[b] ? f[b] : 0;
                                        C = q + y;
                                        p += y;
                                        a.dataSeriesIndexes.length - 1 === A && 1 >= Math.abs(e.x2 - p) && (p = e.x2);
                                        f[b] = y + (p - C)
                                    } else y = l[b] ? l[b] : 0, C = p - y, p = q - y, a.dataSeriesIndexes.length - 1 === A && 1 >= Math.abs(e.x1 - C) && (C = e.x1), l[b] = y + (p - C);
                                    b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                    da(c, C, J, p, B, b, 0, null, r, !1, !1, !1, m.fillOpacity);
                                    b = m.dataPointIds[h];
                                    this._eventManager.objectMap[b] = {
                                        id: b,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: k,
                                        dataPointIndex: h,
                                        x1: C,
                                        y1: J,
                                        x2: p,
                                        y2: B
                                    };
                                    b = S(b);
                                    s && da(this._eventManager.ghostCtx, C, J, p, B, b, 0, null, !1, !1, !1, !1);
                                    (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedBar100",
                                        dataPoint: t[h],
                                        dataSeries: m,
                                        point: {
                                            x: 0 <= t[h].y ? p : C,
                                            y: n
                                        },
                                        direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1,
                                        bounds: {
                                            x1: Math.min(C, p),
                                            y1: J,
                                            x2: Math.max(C, p),
                                            y2: B
                                        },
                                        color: b
                                    })
                                }
                        }
                    }
                    s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                        c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return {
                        source: d,
                        dest: this.plotArea.ctx,
                        animationCallback: L.xScaleAnimation,
                        easingFunction: L.easing.easeOutQuart,
                        animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                    }
                }
            };
        m.prototype.renderArea = function(a) {
            var d, c;

            function b() {
                B && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? J = C : 0 > a.axisY.viewportMaximum ? J = u.y1 : 0 < a.axisY.viewportMinimum && (J = C), f.lineTo(m, J), f.lineTo(B.x, J), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, s && (l.lineTo(m, J), l.lineTo(B.x, J), l.closePath(), l.fill()), f.beginPath(), f.moveTo(m,
                    t), l.beginPath(), l.moveTo(m, t), B = {
                    x: m,
                    y: t
                })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = s ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l = this._eventManager.ghostCtx,
                    u = a.axisY.lineCoordinates,
                    z = [],
                    h = this.plotArea,
                    p;
                f.save();
                s && l.save();
                f.beginPath();
                f.rect(h.x1, h.y1, h.width, h.height);
                f.clip();
                s && (l.beginPath(), l.rect(h.x1, h.y1, h.width, h.height), l.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        g = this.data[q],
                        A = g.dataPoints,
                        z = g.id;
                    this._eventManager.objectMap[z] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    z = S(z);
                    l.fillStyle = z;
                    z = [];
                    d = !0;
                    var k = 0,
                        m, t, r, C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        J, B = null;
                    if (0 < A.length) {
                        var y = g._colorSet[k % g._colorSet.length],
                            v = g.lineColor = g.options.lineColor || y,
                            w = v;
                        f.fillStyle = y;
                        f.strokeStyle = v;
                        f.lineWidth = g.lineThickness;
                        c = "solid";
                        if (f.setLineDash) {
                            var K = Q(g.nullDataLineDashType, g.lineThickness);
                            c = g.lineDashType;
                            var P = Q(c, g.lineThickness);
                            f.setLineDash(P)
                        }
                        for (var ha = !0; k < A.length; k++)
                            if (r = A[k].x.getTime ?
                                A[k].x.getTime() : A[k].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ha)))
                                if ("number" !== typeof A[k].y) g.connectNullData || (ha || d) || b(), ha = !0;
                                else {
                                    m = a.axisX.convertValueToPixel(r);
                                    t = a.axisY.convertValueToPixel(A[k].y);
                                    d || ha ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, c = t, m = p.x, t = p.y, b(), f.moveTo(p.x, p.y), m = d, t = c, B = p, c = g.nullDataLineDashType, f.setLineDash(K)), f.lineTo(m,
                                        t), s && l.lineTo(m, t)) : (f.beginPath(), f.moveTo(m, t), s && (l.beginPath(), l.moveTo(m, t)), B = {
                                        x: m,
                                        y: t
                                    }), ha = d = !1) : (f.lineTo(m, t), s && l.lineTo(m, t), 0 == k % 250 && b());
                                    p = {
                                        x: m,
                                        y: t
                                    };
                                    k < A.length - 1 && (w !== (A[k].lineColor || v) || c !== (A[k].lineDashType || g.lineDashType)) && (b(), w = A[k].lineColor || v, f.strokeStyle = w, f.setLineDash && (A[k].lineDashType ? (c = A[k].lineDashType, f.setLineDash(Q(c, g.lineThickness))) : (c = g.lineDashType, f.setLineDash(P))));
                                    var $ = g.dataPointIds[k];
                                    this._eventManager.objectMap[$] = {
                                        id: $,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: q,
                                        dataPointIndex: k,
                                        x1: m,
                                        y1: t
                                    };
                                    0 !== A[k].markerSize && (0 < A[k].markerSize || 0 < g.markerSize) && (r = g.getMarkerProperties(k, m, t, f), z.push(r), $ = S($), s && z.push({
                                        x: m,
                                        y: t,
                                        ctx: l,
                                        type: r.type,
                                        size: r.size,
                                        color: $,
                                        borderColor: $,
                                        borderThickness: r.borderThickness
                                    }));
                                    (A[k].indexLabel || g.indexLabel || A[k].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "area",
                                        dataPoint: A[k],
                                        dataSeries: g,
                                        point: {
                                            x: m,
                                            y: t
                                        },
                                        direction: 0 > A[k].y === a.axisY.reversed ? 1 : -1,
                                        color: y
                                    })
                                } b();
                        Y.drawMarkers(z)
                    }
                }
                s &&
                    (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                f.restore();
                return {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderSplineArea = function(a) {
            function d() {
                var c = v(r, 2);
                if (0 < c.length) {
                    if (0 < p.lineThickness) {
                        b.beginPath();
                        b.moveTo(c[0].x, c[0].y);
                        c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                        c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                        for (var d = 0; d < c.length - 3; d += 3)
                            if (b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), s && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle ||
                                c[d + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle && (b.strokeStyle = c[d + 3].newStrokeStyle), c[d + 3].newLineDashArray && b.setLineDash(c[d + 3].newLineDashArray);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    s && (e.beginPath(), e.moveTo(c[0].x, c[0].y));
                    for (d = 0; d < c.length - 3; d += 3) b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), s && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum &&
                        0 <= a.axisY.viewportMaximum ? m = k : 0 > a.axisY.viewportMaximum ? m = f.y1 : 0 < a.axisY.viewportMinimum && (m = k);
                    t = {
                        x: c[0].x,
                        y: c[0].y
                    };
                    b.lineTo(c[c.length - 1].x, m);
                    b.lineTo(t.x, m);
                    b.closePath();
                    b.globalAlpha = p.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    s && (e.lineTo(c[c.length - 1].x, m), e.lineTo(t.x, m), e.closePath(), e.fill())
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = a.axisY.lineCoordinates,
                    l = [],
                    u = this.plotArea;
                b.save();
                s &&
                    e.save();
                b.beginPath();
                b.rect(u.x1, u.y1, u.width, u.height);
                b.clip();
                s && (e.beginPath(), e.rect(u.x1, u.y1, u.width, u.height), e.clip());
                for (var z = 0; z < a.dataSeriesIndexes.length; z++) {
                    var h = a.dataSeriesIndexes[z],
                        p = this.data[h],
                        n = p.dataPoints,
                        l = p.id;
                    this._eventManager.objectMap[l] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: h
                    };
                    l = S(l);
                    e.fillStyle = l;
                    var l = [],
                        q = 0,
                        g, A, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        m, t = null,
                        r = [];
                    if (0 < n.length) {
                        var C = p._colorSet[q % p._colorSet.length],
                            J = p.lineColor = p.options.lineColor || C,
                            B = J;
                        b.fillStyle = C;
                        b.strokeStyle = J;
                        b.lineWidth = p.lineThickness;
                        var y = "solid";
                        if (b.setLineDash) {
                            var w = Q(p.nullDataLineDashType, p.lineThickness),
                                y = p.lineDashType,
                                D = Q(y, p.lineThickness);
                            b.setLineDash(D)
                        }
                        for (A = !1; q < n.length; q++)
                            if (g = n[q].x.getTime ? n[q].x.getTime() : n[q].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !A)))
                                if ("number" !== typeof n[q].y) 0 < q && !A && (p.connectNullData ? b.setLineDash && (0 < r.length && (p.options.nullDataLineDashType ||
                                    !n[q - 1].lineDashType)) && (r[r.length - 1].newLineDashArray = w, y = p.nullDataLineDashType) : (d(), r = [])), A = !0;
                                else {
                                    g = a.axisX.convertValueToPixel(g);
                                    A = a.axisY.convertValueToPixel(n[q].y);
                                    var K = p.dataPointIds[q];
                                    this._eventManager.objectMap[K] = {
                                        id: K,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: h,
                                        dataPointIndex: q,
                                        x1: g,
                                        y1: A
                                    };
                                    r[r.length] = {
                                        x: g,
                                        y: A
                                    };
                                    q < n.length - 1 && (B !== (n[q].lineColor || J) || y !== (n[q].lineDashType || p.lineDashType)) && (B = n[q].lineColor || J, r[r.length - 1].newStrokeStyle = B, b.setLineDash && (n[q].lineDashType ? (y =
                                        n[q].lineDashType, r[r.length - 1].newLineDashArray = Q(y, p.lineThickness)) : (y = p.lineDashType, r[r.length - 1].newLineDashArray = D)));
                                    if (0 !== n[q].markerSize && (0 < n[q].markerSize || 0 < p.markerSize)) {
                                        var P = p.getMarkerProperties(q, g, A, b);
                                        l.push(P);
                                        K = S(K);
                                        s && l.push({
                                            x: g,
                                            y: A,
                                            ctx: e,
                                            type: P.type,
                                            size: P.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: P.borderThickness
                                        })
                                    }(n[q].indexLabel || p.indexLabel || n[q].indexLabelFormatter || p.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "splineArea",
                                        dataPoint: n[q],
                                        dataSeries: p,
                                        point: {
                                            x: g,
                                            y: A
                                        },
                                        direction: 0 > n[q].y === a.axisY.reversed ? 1 : -1,
                                        color: C
                                    });
                                    A = !1
                                } d();
                        Y.drawMarkers(l)
                    }
                }
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(u.x1, u.y1, u.width, u.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderStepArea = function(a) {
            var d, c;

            function b() {
                B && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? J = C : 0 > a.axisY.viewportMaximum ? J = u.y1 : 0 < a.axisY.viewportMinimum && (J = C), f.lineTo(m, J), f.lineTo(B.x, J), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha =
                    1, s && (l.lineTo(m, J), l.lineTo(B.x, J), l.closePath(), l.fill()), f.beginPath(), f.moveTo(m, t), l.beginPath(), l.moveTo(m, t), B = {
                        x: m,
                        y: t
                    })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = s ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var l = this._eventManager.ghostCtx,
                    u = a.axisY.lineCoordinates,
                    z = [],
                    h = this.plotArea,
                    p;
                f.save();
                s && l.save();
                f.beginPath();
                f.rect(h.x1, h.y1, h.width, h.height);
                f.clip();
                s && (l.beginPath(), l.rect(h.x1, h.y1, h.width, h.height), l.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q =
                        a.dataSeriesIndexes[n],
                        g = this.data[q],
                        A = g.dataPoints,
                        z = g.id;
                    this._eventManager.objectMap[z] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: q
                    };
                    z = S(z);
                    l.fillStyle = z;
                    z = [];
                    d = !0;
                    var k = 0,
                        m, t, r, C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        J, B = null;
                    c = !1;
                    if (0 < A.length) {
                        var y = g._colorSet[k % g._colorSet.length],
                            v = g.lineColor = g.options.lineColor || y,
                            w = v;
                        f.fillStyle = y;
                        f.strokeStyle = v;
                        f.lineWidth = g.lineThickness;
                        var K = "solid";
                        if (f.setLineDash) {
                            var P = Q(g.nullDataLineDashType, g.lineThickness),
                                K = g.lineDashType,
                                D = Q(K, g.lineThickness);
                            f.setLineDash(D)
                        }
                        for (; k < A.length; k++)
                            if (r = A[k].x.getTime ? A[k].x.getTime() : A[k].x, !(r < a.axisX.dataInfo.viewPortMin || r > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                                var $ = t;
                                "number" !== typeof A[k].y ? (g.connectNullData || (c || d) || b(), c = !0) : (m = a.axisX.convertValueToPixel(r), t = a.axisY.convertValueToPixel(A[k].y), d || c ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || K === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m,
                                        c = t, m = p.x, t = p.y, b(), f.moveTo(p.x, p.y), m = d, t = c, B = p, K = g.nullDataLineDashType, f.setLineDash(P)), f.lineTo(m, $), f.lineTo(m, t), s && (l.lineTo(m, $), l.lineTo(m, t))) : (f.beginPath(), f.moveTo(m, t), s && (l.beginPath(), l.moveTo(m, t)), B = {
                                        x: m,
                                        y: t
                                    }), c = d = !1) : (f.lineTo(m, $), s && l.lineTo(m, $), f.lineTo(m, t), s && l.lineTo(m, t), 0 == k % 250 && b()), p = {
                                        x: m,
                                        y: t
                                    }, k < A.length - 1 && (w !== (A[k].lineColor || v) || K !== (A[k].lineDashType || g.lineDashType)) && (b(), w = A[k].lineColor || v, f.strokeStyle = w, f.setLineDash && (A[k].lineDashType ? (K = A[k].lineDashType,
                                        f.setLineDash(Q(K, g.lineThickness))) : (K = g.lineDashType, f.setLineDash(D)))), r = g.dataPointIds[k], this._eventManager.objectMap[r] = {
                                        id: r,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: q,
                                        dataPointIndex: k,
                                        x1: m,
                                        y1: t
                                    }, 0 !== A[k].markerSize && (0 < A[k].markerSize || 0 < g.markerSize) && ($ = g.getMarkerProperties(k, m, t, f), z.push($), r = S(r), s && z.push({
                                        x: m,
                                        y: t,
                                        ctx: l,
                                        type: $.type,
                                        size: $.size,
                                        color: r,
                                        borderColor: r,
                                        borderThickness: $.borderThickness
                                    })), (A[k].indexLabel || g.indexLabel || A[k].indexLabelFormatter || g.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stepArea",
                                        dataPoint: A[k],
                                        dataSeries: g,
                                        point: {
                                            x: m,
                                            y: t
                                        },
                                        direction: 0 > A[k].y === a.axisY.reversed ? 1 : -1,
                                        color: y
                                    }))
                            } b();
                        Y.drawMarkers(z)
                    }
                }
                s && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), f.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                f.restore();
                return {
                    source: e,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderStackedArea = function(a) {
            function d() {
                if (!(1 > h.length)) {
                    for (0 < y.lineThickness && b.stroke(); 0 < h.length;) {
                        var a = h.pop();
                        b.lineTo(a.x, a.y);
                        s && r.lineTo(a.x, a.y)
                    }
                    b.closePath();
                    b.globalAlpha = y.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    s && (r.closePath(),
                        r.fill(), r.beginPath());
                    h = []
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    l = [],
                    u = this.plotArea,
                    z = [],
                    h = [],
                    p = [],
                    n = [],
                    q = 0,
                    g, k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    r = this._eventManager.ghostCtx,
                    t, x, C;
                s && r.beginPath();
                b.save();
                s && r.save();
                b.beginPath();
                b.rect(u.x1, u.y1, u.width, u.height);
                b.clip();
                s && (r.beginPath(), r.rect(u.x1, u.y1, u.width, u.height), r.clip());
                for (var e = [], J = 0; J < a.dataSeriesIndexes.length; J++) {
                    var B =
                        a.dataSeriesIndexes[J],
                        y = this.data[B],
                        v = y.dataPoints;
                    y.dataPointIndexes = [];
                    for (q = 0; q < v.length; q++) B = v[q].x.getTime ? v[q].x.getTime() : v[q].x, y.dataPointIndexes[B] = q, e[B] || (p.push(B), e[B] = !0);
                    p.sort(Pa)
                }
                for (J = 0; J < a.dataSeriesIndexes.length; J++) {
                    B = a.dataSeriesIndexes[J];
                    y = this.data[B];
                    v = y.dataPoints;
                    x = !0;
                    h = [];
                    q = y.id;
                    this._eventManager.objectMap[q] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    q = S(q);
                    r.fillStyle = q;
                    if (0 < p.length) {
                        var e = y._colorSet[0],
                            w = y.lineColor = y.options.lineColor || e,
                            K = w;
                        b.fillStyle = e;
                        b.strokeStyle = w;
                        b.lineWidth = y.lineThickness;
                        C = "solid";
                        if (b.setLineDash) {
                            var P = Q(y.nullDataLineDashType, y.lineThickness);
                            C = y.lineDashType;
                            var D = Q(C, y.lineThickness);
                            b.setLineDash(D)
                        }
                        for (var $ = !0, q = 0; q < p.length; q++) {
                            var f = p[q],
                                ia = null,
                                ia = 0 <= y.dataPointIndexes[f] ? v[y.dataPointIndexes[f]] : {
                                    x: f,
                                    y: null
                                };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!y.connectNullData || !$)))
                                if ("number" !== typeof ia.y) y.connectNullData || ($ || x) || d(), $ = !0;
                                else {
                                    g = a.axisX.convertValueToPixel(f);
                                    var na =
                                        z[f] ? z[f] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        n[f] = ia.y + (n[f] ? n[f] : 0);
                                        if (0 >= n[f] && a.axisY.logarithmic) continue;
                                        k = a.axisY.convertValueToPixel(n[f])
                                    } else k = a.axisY.convertValueToPixel(ia.y), k -= na;
                                    h.push({
                                        x: g,
                                        y: m - na
                                    });
                                    z[f] = m - k;
                                    x || $ ? (!x && y.connectNullData ? (b.setLineDash && (y.options.nullDataLineDashType || C === y.lineDashType && y.lineDashType !== y.nullDataLineDashType) && (x = h.pop(), C = h[h.length - 1], d(), b.moveTo(t.x, t.y), h.push(C), h.push(x), C = y.nullDataLineDashType,
                                        b.setLineDash(P)), b.lineTo(g, k), s && r.lineTo(g, k)) : (b.beginPath(), b.moveTo(g, k), s && (r.beginPath(), r.moveTo(g, k))), $ = x = !1) : (b.lineTo(g, k), s && r.lineTo(g, k), 0 == q % 250 && (d(), b.moveTo(g, k), s && r.moveTo(g, k), h.push({
                                        x: g,
                                        y: m - na
                                    })));
                                    t = {
                                        x: g,
                                        y: k
                                    };
                                    q < v.length - 1 && (K !== (v[q].lineColor || w) || C !== (v[q].lineDashType || y.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, k), h.push({
                                        x: g,
                                        y: m - na
                                    }), K = v[q].lineColor || w, b.strokeStyle = K, b.setLineDash && (v[q].lineDashType ? (C = v[q].lineDashType, b.setLineDash(Q(C, y.lineThickness))) : (C =
                                        y.lineDashType, b.setLineDash(D))));
                                    if (0 <= y.dataPointIndexes[f]) {
                                        var E = y.dataPointIds[y.dataPointIndexes[f]];
                                        this._eventManager.objectMap[E] = {
                                            id: E,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: y.dataPointIndexes[f],
                                            x1: g,
                                            y1: k
                                        }
                                    }
                                    0 <= y.dataPointIndexes[f] && 0 !== ia.markerSize && (0 < ia.markerSize || 0 < y.markerSize) && (na = y.getMarkerProperties(y.dataPointIndexes[f], g, k, b), l.push(na), f = S(E), s && l.push({
                                        x: g,
                                        y: k,
                                        ctx: r,
                                        type: na.type,
                                        size: na.size,
                                        color: f,
                                        borderColor: f,
                                        borderThickness: na.borderThickness
                                    }));
                                    (ia.indexLabel ||
                                        y.indexLabel || ia.indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: ia,
                                        dataSeries: y,
                                        point: {
                                            x: g,
                                            y: k
                                        },
                                        direction: 0 > v[q].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        d();
                        b.moveTo(g, k);
                        s && r.moveTo(g, k)
                    }
                    delete y.dataPointIndexes
                }
                Y.drawMarkers(l);
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(u.x1, u.y1, u.width, u.height), r.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderStackedArea100 = function(a) {
            function d() {
                for (0 < y.lineThickness && b.stroke(); 0 < h.length;) {
                    var a = h.pop();
                    b.lineTo(a.x, a.y);
                    s && C.lineTo(a.x, a.y)
                }
                b.closePath();
                b.globalAlpha =
                    y.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                s && (C.closePath(), C.fill(), C.beginPath());
                h = []
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    l = this.plotArea,
                    u = [],
                    k = [],
                    h = [],
                    p = [],
                    n = [],
                    q = 0,
                    g, m, r, O, t, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    C = this._eventManager.ghostCtx;
                b.save();
                s && C.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                s && (C.beginPath(), C.rect(l.x1, l.y1, l.width,
                    l.height), C.clip());
                for (var e = [], v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var B = a.dataSeriesIndexes[v],
                        y = this.data[B],
                        w = y.dataPoints;
                    y.dataPointIndexes = [];
                    for (q = 0; q < w.length; q++) B = w[q].x.getTime ? w[q].x.getTime() : w[q].x, y.dataPointIndexes[B] = q, e[B] || (p.push(B), e[B] = !0);
                    p.sort(Pa)
                }
                for (v = 0; v < a.dataSeriesIndexes.length; v++) {
                    B = a.dataSeriesIndexes[v];
                    y = this.data[B];
                    w = y.dataPoints;
                    O = !0;
                    e = y.id;
                    this._eventManager.objectMap[e] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: B
                    };
                    e = S(e);
                    C.fillStyle = e;
                    h = [];
                    if (0 < p.length) {
                        var e =
                            y._colorSet[q % y._colorSet.length],
                            D = y.lineColor = y.options.lineColor || e,
                            K = D;
                        b.fillStyle = e;
                        b.strokeStyle = D;
                        b.lineWidth = y.lineThickness;
                        t = "solid";
                        if (b.setLineDash) {
                            var P = Q(y.nullDataLineDashType, y.lineThickness);
                            t = y.lineDashType;
                            var E = Q(t, y.lineThickness);
                            b.setLineDash(E)
                        }
                        for (var $ = !0, q = 0; q < p.length; q++) {
                            var f = p[q],
                                ia = null,
                                ia = 0 <= y.dataPointIndexes[f] ? w[y.dataPointIndexes[f]] : {
                                    x: f,
                                    y: null
                                };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!y.connectNullData || !$)))
                                if ("number" !== typeof ia.y) y.connectNullData ||
                                    ($ || O) || d(), $ = !0;
                                else {
                                    var na;
                                    na = 0 !== a.dataPointYSums[f] ? 100 * (ia.y / a.dataPointYSums[f]) : 0;
                                    g = a.axisX.convertValueToPixel(f);
                                    var ca = k[f] ? k[f] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        n[f] = na + (n[f] ? n[f] : 0);
                                        if (0 >= n[f] && a.axisY.logarithmic) continue;
                                        m = a.axisY.convertValueToPixel(n[f])
                                    } else m = a.axisY.convertValueToPixel(na), m -= ca;
                                    h.push({
                                        x: g,
                                        y: x - ca
                                    });
                                    k[f] = x - m;
                                    O || $ ? (!O && y.connectNullData ? (b.setLineDash && (y.options.nullDataLineDashType || t === y.lineDashType &&
                                        y.lineDashType !== y.nullDataLineDashType) && (O = h.pop(), t = h[h.length - 1], d(), b.moveTo(r.x, r.y), h.push(t), h.push(O), t = y.nullDataLineDashType, b.setLineDash(P)), b.lineTo(g, m), s && C.lineTo(g, m)) : (b.beginPath(), b.moveTo(g, m), s && (C.beginPath(), C.moveTo(g, m))), $ = O = !1) : (b.lineTo(g, m), s && C.lineTo(g, m), 0 == q % 250 && (d(), b.moveTo(g, m), s && C.moveTo(g, m), h.push({
                                        x: g,
                                        y: x - ca
                                    })));
                                    r = {
                                        x: g,
                                        y: m
                                    };
                                    q < w.length - 1 && (K !== (w[q].lineColor || D) || t !== (w[q].lineDashType || y.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, m), h.push({
                                        x: g,
                                        y: x -
                                            ca
                                    }), K = w[q].lineColor || D, b.strokeStyle = K, b.setLineDash && (w[q].lineDashType ? (t = w[q].lineDashType, b.setLineDash(Q(t, y.lineThickness))) : (t = y.lineDashType, b.setLineDash(E))));
                                    if (0 <= y.dataPointIndexes[f]) {
                                        var F = y.dataPointIds[y.dataPointIndexes[f]];
                                        this._eventManager.objectMap[F] = {
                                            id: F,
                                            objectType: "dataPoint",
                                            dataSeriesIndex: B,
                                            dataPointIndex: y.dataPointIndexes[f],
                                            x1: g,
                                            y1: m
                                        }
                                    }
                                    0 <= y.dataPointIndexes[f] && 0 !== ia.markerSize && (0 < ia.markerSize || 0 < y.markerSize) && (ca = y.getMarkerProperties(q, g, m, b), u.push(ca), f = S(F),
                                        s && u.push({
                                            x: g,
                                            y: m,
                                            ctx: C,
                                            type: ca.type,
                                            size: ca.size,
                                            color: f,
                                            borderColor: f,
                                            borderThickness: ca.borderThickness
                                        }));
                                    (ia.indexLabel || y.indexLabel || ia.indexLabelFormatter || y.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea100",
                                        dataPoint: ia,
                                        dataSeries: y,
                                        point: {
                                            x: g,
                                            y: m
                                        },
                                        direction: 0 > w[q].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        d();
                        b.moveTo(g, m);
                        s && C.moveTo(g, m)
                    }
                    delete y.dataPointIndexes
                }
                Y.drawMarkers(u);
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), C.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderBubble = function(a) {
            var d =
                a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    f, l;
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var u = -Infinity, k = Infinity, h = 0; h < a.dataSeriesIndexes.length; h++)
                    for (var p = a.dataSeriesIndexes[h], n = this.data[p], q = n.dataPoints,
                            g = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax || "undefined" === typeof q[e].z || (g = q[e].z, g > u && (u = g), g < k && (k = g));
                for (var m = 25 * Math.PI, r = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, m), h = 0; h < a.dataSeriesIndexes.length; h++)
                    if (p = a.dataSeriesIndexes[h], n = this.data[p], q = n.dataPoints, 0 < q.length)
                        for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                            if (f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin ||
                                    f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                l = a.axisY.convertValueToPixel(q[e].y);
                                var g = q[e].z,
                                    O = 2 * Math.max(Math.sqrt((u === k ? r / 2 : m + (r - m) / (u - k) * (g - k)) / Math.PI) << 0, 1),
                                    g = n.getMarkerProperties(e, c);
                                g.size = O;
                                c.globalAlpha = n.fillOpacity;
                                Y.drawMarker(f, l, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                var t = n.dataPointIds[e];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: p,
                                    dataPointIndex: e,
                                    x1: f,
                                    y1: l,
                                    size: O
                                };
                                O = S(t);
                                s && Y.drawMarker(f, l, this._eventManager.ghostCtx, g.type, g.size, O, O, g.borderThickness);
                                (q[e].indexLabel || n.indexLabel || q[e].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "bubble",
                                    dataPoint: q[e],
                                    dataSeries: n,
                                    point: {
                                        x: f,
                                        y: l
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: f - g.size / 2,
                                        y1: l - g.size / 2,
                                        x2: f + g.size / 2,
                                        y2: l + g.size / 2
                                    },
                                    color: null
                                })
                            } s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas,
                    0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderScatter = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    f, l;
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var k = a.dataSeriesIndexes[u],
                        h = this.data[k],
                        p = h.dataPoints;
                    if (0 < p.length) {
                        c.strokeStyle = "#4572A7 ";
                        Math.pow(0.3 * Math.min(b.height,
                            b.width) / 2, 2);
                        for (var n = 0, q = 0, e = 0; e < p.length; e++)
                            if (f = p[e].getTime ? f = p[e].x.getTime() : f = p[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                l = a.axisY.convertValueToPixel(p[e].y);
                                var g = h.getMarkerProperties(e, f, l, c);
                                c.globalAlpha = h.fillOpacity;
                                Y.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                Math.sqrt((n - f) * (n - f) + (q - l) * (q - l)) < Math.min(g.size, 5) && p.length > Math.min(this.plotArea.width,
                                    this.plotArea.height) || (n = h.dataPointIds[e], this._eventManager.objectMap[n] = {
                                        id: n,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: k,
                                        dataPointIndex: e,
                                        x1: f,
                                        y1: l
                                    }, n = S(n), s && Y.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, n, n, g.borderThickness), (p[e].indexLabel || h.indexLabel || p[e].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "scatter",
                                        dataPoint: p[e],
                                        dataSeries: h,
                                        point: {
                                            x: f,
                                            y: l
                                        },
                                        direction: 1,
                                        bounds: {
                                            x1: f - g.size / 2,
                                            y1: l - g.size / 2,
                                            x2: f + g.size / 2,
                                            y2: l + g.size / 2
                                        },
                                        color: null
                                    }),
                                    n = f, q = l)
                            }
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderCandlestick = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    l = this.plotArea,
                    u = 0,
                    k, h, p, n, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ?
                    this.dataPointWidth : 0.015 * this.width,
                    m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * l.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                m <
                    e && (m = e);
                m > f && (m = f);
                c.save();
                s && b.save();
                c.beginPath();
                c.rect(l.x1, l.y1, l.width, l.height);
                c.clip();
                s && (b.beginPath(), b.rect(l.x1, l.y1, l.width, l.height), b.clip());
                for (var ga = 0; ga < a.dataSeriesIndexes.length; ga++) {
                    var O = a.dataSeriesIndexes[ga],
                        t = this.data[O],
                        x = t.dataPoints;
                    if (0 < x.length)
                        for (var C = 5 < m && t.bevelEnabled ? !0 : !1, u = 0; u < x.length; u++)
                            if (x[u].getTime ? g = x[u].x.getTime() : g = x[u].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !r(x[u].y) && x[u].y.length && "number" === typeof x[u].y[0] &&
                                "number" === typeof x[u].y[1] && "number" === typeof x[u].y[2] && "number" === typeof x[u].y[3]) {
                                k = a.axisX.convertValueToPixel(g);
                                h = a.axisY.convertValueToPixel(x[u].y[0]);
                                p = a.axisY.convertValueToPixel(x[u].y[1]);
                                n = a.axisY.convertValueToPixel(x[u].y[2]);
                                q = a.axisY.convertValueToPixel(x[u].y[3]);
                                var v = k - m / 2 << 0,
                                    B = v + m << 0,
                                    f = t.options.fallingColor ? t.fallingColor : t._colorSet[0],
                                    e = x[u].color ? x[u].color : t._colorSet[0],
                                    y = Math.round(Math.max(1, 0.15 * m)),
                                    w = 0 === y % 2 ? 0 : 0.5,
                                    D = t.dataPointIds[u];
                                this._eventManager.objectMap[D] = {
                                    id: D,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: O,
                                    dataPointIndex: u,
                                    x1: v,
                                    y1: h,
                                    x2: B,
                                    y2: p,
                                    x3: k,
                                    y3: n,
                                    x4: k,
                                    y4: q,
                                    borderThickness: y,
                                    color: e
                                };
                                c.strokeStyle = e;
                                c.beginPath();
                                c.lineWidth = y;
                                b.lineWidth = Math.max(y, 4);
                                "candlestick" === t.type ? (c.moveTo(k - w, p), c.lineTo(k - w, Math.min(h, q)), c.stroke(), c.moveTo(k - w, Math.max(h, q)), c.lineTo(k - w, n), c.stroke(), da(c, v, Math.min(h, q), B, Math.max(h, q), x[u].y[0] <= x[u].y[3] ? t.risingColor : f, y, e, C, C, !1, !1, t.fillOpacity), s && (e = S(D), b.strokeStyle = e, b.moveTo(k - w, p), b.lineTo(k - w, Math.min(h,
                                    q)), b.stroke(), b.moveTo(k - w, Math.max(h, q)), b.lineTo(k - w, n), b.stroke(), da(b, v, Math.min(h, q), B, Math.max(h, q), e, 0, null, !1, !1, !1, !1))) : "ohlc" === t.type && (c.moveTo(k - w, p), c.lineTo(k - w, n), c.stroke(), c.beginPath(), c.moveTo(k, h), c.lineTo(v, h), c.stroke(), c.beginPath(), c.moveTo(k, q), c.lineTo(B, q), c.stroke(), s && (e = S(D), b.strokeStyle = e, b.moveTo(k - w, p), b.lineTo(k - w, n), b.stroke(), b.beginPath(), b.moveTo(k, h), b.lineTo(v, h), b.stroke(), b.beginPath(), b.moveTo(k, q), b.lineTo(B, q), b.stroke()));
                                (x[u].indexLabel || t.indexLabel ||
                                    x[u].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: t.type,
                                    dataPoint: x[u],
                                    dataSeries: t,
                                    point: {
                                        x: v + (B - v) / 2,
                                        y: a.axisY.reversed ? n : p
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: v,
                                        y1: Math.min(p, n),
                                        x2: B,
                                        y2: Math.max(p, n)
                                    },
                                    color: e
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(l.x1, l.y1, l.width, l.height), b.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderBoxAndWhisker = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = this.plotArea,
                    l = 0,
                    u, k, h, p, n, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * f.width * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e >
                    l && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && l < e) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                m < e && (m = e);
                m > l && (m = l);
                c.save();
                s && b.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                s && (b.beginPath(), b.rect(f.x1, f.y1, f.width, f.height), b.clip());
                for (var ga = !1, ga = !!a.axisY.reversed, O = 0; O < a.dataSeriesIndexes.length; O++) {
                    var t = a.dataSeriesIndexes[O],
                        x = this.data[t],
                        C = x.dataPoints;
                    if (0 < C.length)
                        for (var v = 5 < m && x.bevelEnabled ? !0 : !1, l = 0; l < C.length; l++)
                            if (C[l].getTime ? g = C[l].x.getTime() : g = C[l].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !r(C[l].y) && C[l].y.length && "number" === typeof C[l].y[0] && "number" === typeof C[l].y[1] && "number" === typeof C[l].y[2] && "number" === typeof C[l].y[3] && "number" === typeof C[l].y[4] && 5 === C[l].y.length) {
                                u = a.axisX.convertValueToPixel(g);
                                k = a.axisY.convertValueToPixel(C[l].y[0]);
                                h = a.axisY.convertValueToPixel(C[l].y[1]);
                                p = a.axisY.convertValueToPixel(C[l].y[2]);
                                n = a.axisY.convertValueToPixel(C[l].y[3]);
                                q = a.axisY.convertValueToPixel(C[l].y[4]);
                                var B = u - m / 2 << 0,
                                    y = u + m / 2 << 0,
                                    e = C[l].color ? C[l].color : x._colorSet[0],
                                    w = Math.round(Math.max(1, 0.15 * m)),
                                    D = 0 === w % 2 ? 0 : 0.5,
                                    K = C[l].whiskerColor ? C[l].whiskerColor : C[l].color ? x.whiskerColor ? x.whiskerColor : C[l].color : x.whiskerColor ? x.whiskerColor : e,
                                    P = "number" === typeof C[l].whiskerThickness ? C[l].whiskerThickness : "number" === typeof x.options.whiskerThickness ? x.whiskerThickness : w,
                                    E = C[l].whiskerDashType ? C[l].whiskerDashType : x.whiskerDashType,
                                    $ = r(C[l].whiskerLength) ? r(x.options.whiskerLength) ? m : x.whiskerLength : C[l].whiskerLength,
                                    $ = "number" === typeof $ ? 0 >= $ ? 0 : $ >= m ? m : $ : "string" === typeof $ ? parseInt($) * m / 100 > m ? m : parseInt($) * m / 100 : m,
                                    ia = 1 === Math.round(P) % 2 ? 0.5 : 0,
                                    na = C[l].stemColor ? C[l].stemColor : C[l].color ? x.stemColor ? x.stemColor : C[l].color : x.stemColor ? x.stemColor : e,
                                    ca = "number" === typeof C[l].stemThickness ? C[l].stemThickness : "number" === typeof x.options.stemThickness ? x.stemThickness : w,
                                    F = 1 === Math.round(ca) % 2 ? 0.5 : 0,
                                    I = C[l].stemDashType ? C[l].stemDashType :
                                    x.stemDashType,
                                    G = C[l].lineColor ? C[l].lineColor : C[l].color ? x.lineColor ? x.lineColor : C[l].color : x.lineColor ? x.lineColor : e,
                                    N = "number" === typeof C[l].lineThickness ? C[l].lineThickness : "number" === typeof x.options.lineThickness ? x.lineThickness : w,
                                    T = C[l].lineDashType ? C[l].lineDashType : x.lineDashType,
                                    M = 1 === Math.round(N) % 2 ? 0.5 : 0,
                                    W = x.upperBoxColor,
                                    xa = x.lowerBoxColor,
                                    sa = r(x.options.fillOpacity) ? 1 : x.fillOpacity,
                                    R = x.dataPointIds[l];
                                this._eventManager.objectMap[R] = {
                                    id: R,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: t,
                                    dataPointIndex: l,
                                    x1: B,
                                    y1: k,
                                    x2: y,
                                    y2: h,
                                    x3: u,
                                    y3: p,
                                    x4: u,
                                    y4: n,
                                    y5: q,
                                    borderThickness: w,
                                    color: e,
                                    stemThickness: ca,
                                    stemColor: na,
                                    whiskerThickness: P,
                                    whiskerLength: $,
                                    whiskerColor: K,
                                    lineThickness: N,
                                    lineColor: G
                                };
                                c.save();
                                0 < ca && (c.beginPath(), c.strokeStyle = na, c.lineWidth = ca, c.setLineDash && c.setLineDash(Q(I, ca)), c.moveTo(u - F, h), c.lineTo(u - F, k), c.stroke(), c.moveTo(u - F, n), c.lineTo(u - F, p), c.stroke());
                                c.restore();
                                b.lineWidth = Math.max(w, 4);
                                c.beginPath();
                                da(c, B, Math.min(q, h), y, Math.max(h, q), xa, 0, e, ga ? v : !1, ga ? !1 : v, !1, !1, sa);
                                c.beginPath();
                                da(c, B, Math.min(p, q), y, Math.max(q, p), W, 0, e, ga ? !1 : v, ga ? v : !1, !1, !1, sa);
                                c.beginPath();
                                c.lineWidth = w;
                                c.strokeStyle = e;
                                c.rect(B - D, Math.min(h, p) - D, y - B + 2 * D, Math.max(h, p) - Math.min(h, p) + 2 * D);
                                c.stroke();
                                c.save();
                                0 < N && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(Q(T, N)), c.strokeStyle = G, c.lineWidth = N, c.moveTo(B, q - M), c.lineTo(y, q - M), c.stroke());
                                c.restore();
                                c.save();
                                0 < P && (c.beginPath(), c.setLineDash && c.setLineDash(Q(E, P)), c.strokeStyle = K, c.lineWidth = P, c.moveTo(u - $ / 2 << 0, n - ia), c.lineTo(u + $ / 2 << 0, n - ia),
                                    c.stroke(), c.moveTo(u - $ / 2 << 0, k + ia), c.lineTo(u + $ / 2 << 0, k + ia), c.stroke());
                                c.restore();
                                s && (e = S(R), b.strokeStyle = e, b.lineWidth = ca, 0 < ca && (b.moveTo(u - D - F, h), b.lineTo(u - D - F, Math.max(k, n)), b.stroke(), b.moveTo(u - D - F, Math.min(k, n)), b.lineTo(u - D - F, p), b.stroke()), da(b, B, Math.max(h, p), y, Math.min(h, p), e, 0, null, !1, !1, !1, !1), 0 < P && (b.beginPath(), b.lineWidth = P, b.moveTo(u + $ / 2, n - ia), b.lineTo(u - $ / 2, n - ia), b.stroke(), b.moveTo(u + $ / 2, k + ia), b.lineTo(u - $ / 2, k + ia), b.stroke()));
                                (C[l].indexLabel || x.indexLabel || C[l].indexLabelFormatter ||
                                    x.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: x.type,
                                    dataPoint: C[l],
                                    dataSeries: x,
                                    point: {
                                        x: B + (y - B) / 2,
                                        y: a.axisY.reversed ? k : n
                                    },
                                    direction: 1,
                                    bounds: {
                                        x1: B,
                                        y1: Math.min(k, n),
                                        x2: y,
                                        y2: Math.max(k, n)
                                    },
                                    color: e
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), b.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderRangeColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, u, k, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth :
                    1;
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                !this.dataPointMaxWidth &&
                    (this.dataPointMinWidth && l < f) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                h < f && (h = f);
                h > l && (h = l);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var n = a.dataSeriesIndexes[p],
                        q = this.data[n],
                        g = q.dataPoints;
                    if (0 < g.length)
                        for (var m =
                                5 < h && q.bevelEnabled ? !0 : !1, f = 0; f < g.length; f++)
                            if (g[f].getTime ? k = g[f].x.getTime() : k = g[f].x, !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !r(g[f].y) && g[f].y.length && "number" === typeof g[f].y[0] && "number" === typeof g[f].y[1]) {
                                b = a.axisX.convertValueToPixel(k);
                                l = a.axisY.convertValueToPixel(g[f].y[0]);
                                u = a.axisY.convertValueToPixel(g[f].y[1]);
                                var ga = a.axisX.reversed ? b + a.plotType.totalDataSeries * h / 2 - (a.previousDataSeriesCount + p) * h << 0 : b - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount +
                                        p) * h << 0,
                                    O = a.axisX.reversed ? ga - h << 0 : ga + h << 0,
                                    b = g[f].color ? g[f].color : q._colorSet[f % q._colorSet.length];
                                if (l > u) {
                                    var t = l;
                                    l = u;
                                    u = t
                                }
                                t = q.dataPointIds[f];
                                this._eventManager.objectMap[t] = {
                                    id: t,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: n,
                                    dataPointIndex: f,
                                    x1: ga,
                                    y1: l,
                                    x2: O,
                                    y2: u
                                };
                                da(c, ga, l, O, u, b, 0, b, m, m, !1, !1, q.fillOpacity);
                                b = S(t);
                                s && da(this._eventManager.ghostCtx, ga, l, O, u, b, 0, null, !1, !1, !1, !1);
                                if (g[f].indexLabel || q.indexLabel || g[f].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: g[f],
                                    dataSeries: q,
                                    indexKeyword: 0,
                                    point: {
                                        x: ga + (O - ga) / 2,
                                        y: g[f].y[1] >= g[f].y[0] ? u : l
                                    },
                                    direction: g[f].y[1] >= g[f].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: ga,
                                        y1: Math.min(l, u),
                                        x2: O,
                                        y2: Math.max(l, u)
                                    },
                                    color: b
                                }), this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: g[f],
                                    dataSeries: q,
                                    indexKeyword: 1,
                                    point: {
                                        x: ga + (O - ga) / 2,
                                        y: g[f].y[1] >= g[f].y[0] ? l : u
                                    },
                                    direction: g[f].y[1] >= g[f].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: ga,
                                        y1: Math.min(l, u),
                                        x2: O,
                                        y2: Math.max(l, u)
                                    },
                                    color: b
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation =
                    "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderError =
            function(a) {
                var d = a.targetCanvasCtx || this.plotArea.ctx,
                    c = s ? this._preRenderCtx : d,
                    b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var e = null,
                        f = !1,
                        l = this.plotArea,
                        u = 0,
                        k, h, p, n, q, g, m, ga = a.axisX.dataInfo.minDiff;
                    isFinite(ga) || (ga = 0.3 * Math.abs(a.axisX.range));
                    c.save();
                    s && this._eventManager.ghostCtx.save();
                    c.beginPath();
                    c.rect(l.x1, l.y1, l.width, l.height);
                    c.clip();
                    s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(l.x1,
                        l.y1, l.width, l.height), this._eventManager.ghostCtx.clip());
                    for (var O = 0, t = 0; t < this.data.length; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && O || O++;
                    for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                        var C = a.dataSeriesIndexes[x],
                            v = this.data[C],
                            B = v.dataPoints,
                            y = r(v._linkedSeries) ? !1 : v._linkedSeries.type.match(/(bar|column)/ig) && v._linkedSeries.visible ? !0 : !1,
                            D = 0;
                        if (y)
                            for (e = v._linkedSeries.id, t = 0; t < e; t++) !this.data[t].type.match(/(bar|column)/ig) ||
                                !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && D || (this.data[t].type.match(/(range)/ig) && (f = !0), D++);
                        e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                        u = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (y ? O : 1))) << 0 : 0.3 * this.width;
                        f && (u = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth :
                            b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (y ? O : 1))) << 0 : 0.03 * this.width);
                        t = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? l.height : l.width) * (a.axisX.logarithmic ? Math.log(ga) / Math.log(a.axisX.range) : Math.abs(ga) / Math.abs(a.axisX.range)) / (y ? O : 1)) << 0;
                        this.dataPointMaxWidth && e > u && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, u));
                        !this.dataPointMaxWidth && (this.dataPointMinWidth && u < e) && (u = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                        t <
                            e && (t = e);
                        t > u && (t = u);
                        if (0 < B.length)
                            for (var E = v._colorSet, u = 0; u < B.length; u++) {
                                var e = v.lineColor = v.options.color ? v.options.color : E[0],
                                    K = {
                                        color: B[u].whiskerColor ? B[u].whiskerColor : B[u].color ? v.whiskerColor ? v.whiskerColor : B[u].color : v.whiskerColor ? v.whiskerColor : e,
                                        thickness: r(B[u].whiskerThickness) ? v.whiskerThickness : B[u].whiskerThickness,
                                        dashType: B[u].whiskerDashType ? B[u].whiskerDashType : v.whiskerDashType,
                                        length: r(B[u].whiskerLength) ? r(v.options.whiskerLength) ? t : v.options.whiskerLength : B[u].whiskerLength,
                                        trimLength: r(B[u].whiskerLength) ? r(v.options.whiskerLength) ? 50 : 0 : 0
                                    };
                                K.length = "number" === typeof K.length ? 0 >= K.length ? 0 : K.length >= t ? t : K.length : "string" === typeof K.length ? parseInt(K.length) * t / 100 > t ? t : parseInt(K.length) * t / 100 > t : t;
                                K.thickness = "number" === typeof K.thickness ? 0 > K.thickness ? 0 : Math.round(K.thickness) : 2;
                                var P = {
                                    color: B[u].stemColor ? B[u].stemColor : B[u].color ? v.stemColor ? v.stemColor : B[u].color : v.stemColor ? v.stemColor : e,
                                    thickness: B[u].stemThickness ? B[u].stemThickness : v.stemThickness,
                                    dashType: B[u].stemDashType ?
                                        B[u].stemDashType : v.stemDashType
                                };
                                P.thickness = "number" === typeof P.thickness ? 0 > P.thickness ? 0 : Math.round(P.thickness) : 2;
                                B[u].getTime ? m = B[u].x.getTime() : m = B[u].x;
                                if (!(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax) && !r(B[u].y) && B[u].y.length && "number" === typeof B[u].y[0] && "number" === typeof B[u].y[1]) {
                                    var ha = a.axisX.convertValueToPixel(m);
                                    b ? h = ha : k = ha;
                                    ha = a.axisY.convertValueToPixel(B[u].y[0]);
                                    b ? p = ha : q = ha;
                                    ha = a.axisY.convertValueToPixel(B[u].y[1]);
                                    b ? n = ha : g = ha;
                                    b ? (q = a.axisX.reversed ? h + (y ? O :
                                        1) * t / 2 - (y ? D - 1 : 0) * t << 0 : h - (y ? O : 1) * t / 2 + (y ? D - 1 : 0) * t << 0, g = a.axisX.reversed ? q - t << 0 : q + t << 0) : (p = a.axisX.reversed ? k + (y ? O : 1) * t / 2 - (y ? D - 1 : 0) * t << 0 : k - (y ? O : 1) * t / 2 + (y ? D - 1 : 0) * t << 0, n = a.axisX.reversed ? p - t << 0 : p + t << 0);
                                    !b && q > g && (ha = q, q = g, g = ha);
                                    b && p > n && (ha = p, p = n, n = ha);
                                    ha = v.dataPointIds[u];
                                    this._eventManager.objectMap[ha] = {
                                        id: ha,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: C,
                                        dataPointIndex: u,
                                        x1: Math.min(p, n),
                                        y1: Math.min(q, g),
                                        x2: Math.max(n, p),
                                        y2: Math.max(g, q),
                                        isXYSwapped: b,
                                        stemProperties: P,
                                        whiskerProperties: K
                                    };
                                    w(c, Math.min(p, n),
                                        Math.min(q, g), Math.max(n, p), Math.max(g, q), e, K, P, b);
                                    s && w(this._eventManager.ghostCtx, p, q, n, g, e, K, P, b);
                                    if (B[u].indexLabel || v.indexLabel || B[u].indexLabelFormatter || v.indexLabelFormatter) this._indexLabels.push({
                                            chartType: "error",
                                            dataPoint: B[u],
                                            dataSeries: v,
                                            indexKeyword: 0,
                                            point: {
                                                x: b ? B[u].y[1] >= B[u].y[0] ? p : n : p + (n - p) / 2,
                                                y: b ? q + (g - q) / 2 : B[u].y[1] >= B[u].y[0] ? g : q
                                            },
                                            direction: B[u].y[1] >= B[u].y[0] ? -1 : 1,
                                            bounds: {
                                                x1: b ? Math.min(p, n) : p,
                                                y1: b ? q : Math.min(q, g),
                                                x2: b ? Math.max(p, n) : n,
                                                y2: b ? g : Math.max(q, g)
                                            },
                                            color: e,
                                            axisSwapped: b
                                        }),
                                        this._indexLabels.push({
                                            chartType: "error",
                                            dataPoint: B[u],
                                            dataSeries: v,
                                            indexKeyword: 1,
                                            point: {
                                                x: b ? B[u].y[1] >= B[u].y[0] ? n : p : p + (n - p) / 2,
                                                y: b ? q + (g - q) / 2 : B[u].y[1] >= B[u].y[0] ? q : g
                                            },
                                            direction: B[u].y[1] >= B[u].y[0] ? 1 : -1,
                                            bounds: {
                                                x1: b ? Math.min(p, n) : p,
                                                y1: b ? q : Math.min(q, g),
                                                x2: b ? Math.max(p, n) : n,
                                                y2: b ? g : Math.max(q, g)
                                            },
                                            color: e,
                                            axisSwapped: b
                                        })
                                }
                            }
                    }
                    s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                        a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
                    c.restore();
                    return {
                        source: d,
                        dest: this.plotArea.ctx,
                        animationCallback: L.fadeInAnimation,
                        easingFunction: L.easing.easeInQuad,
                        animationBase: 0
                    }
                }
            };
        m.prototype.renderRangeBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx :
                d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    l, u, k, h, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.options.dataPointWidth ? this.dataPointWidth : 0.9 *
                    (e.height * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > l && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && l < f) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                p < f && (p = f);
                p > l && (p = l);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(),
                    this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        g = this.data[q],
                        m = g.dataPoints;
                    if (0 < m.length) {
                        var ga = 5 < p && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (f = 0; f < m.length; f++)
                            if (m[f].getTime ? h = m[f].x.getTime() : h = m[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && !r(m[f].y) && m[f].y.length && "number" === typeof m[f].y[0] && "number" === typeof m[f].y[1]) {
                                l = a.axisY.convertValueToPixel(m[f].y[0]);
                                u = a.axisY.convertValueToPixel(m[f].y[1]);
                                k = a.axisX.convertValueToPixel(h);
                                k = a.axisX.reversed ? k + a.plotType.totalDataSeries * p / 2 - (a.previousDataSeriesCount + n) * p << 0 : k - a.plotType.totalDataSeries * p / 2 + (a.previousDataSeriesCount + n) * p << 0;
                                var v = a.axisX.reversed ? k - p << 0 : k + p << 0;
                                l > u && (b = l, l = u, u = b);
                                b = m[f].color ? m[f].color : g._colorSet[f % g._colorSet.length];
                                da(c, l, k, u, v, b, 0, null, ga, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: q,
                                    dataPointIndex: f,
                                    x1: l,
                                    y1: k,
                                    x2: u,
                                    y2: v
                                };
                                b = S(b);
                                s && da(this._eventManager.ghostCtx, l, k, u, v, b, 0, null, !1, !1, !1, !1);
                                if (m[f].indexLabel || g.indexLabel || m[f].indexLabelFormatter || g.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: m[f],
                                    dataSeries: g,
                                    indexKeyword: 0,
                                    point: {
                                        x: m[f].y[1] >= m[f].y[0] ? l : u,
                                        y: k + (v - k) / 2
                                    },
                                    direction: m[f].y[1] >= m[f].y[0] ? -1 : 1,
                                    bounds: {
                                        x1: Math.min(l, u),
                                        y1: k,
                                        x2: Math.max(l, u),
                                        y2: v
                                    },
                                    color: b
                                }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: m[f],
                                    dataSeries: g,
                                    indexKeyword: 1,
                                    point: {
                                        x: m[f].y[1] >=
                                            m[f].y[0] ? u : l,
                                        y: k + (v - k) / 2
                                    },
                                    direction: m[f].y[1] >= m[f].y[0] ? 1 : -1,
                                    bounds: {
                                        x1: Math.min(l, u),
                                        y1: k,
                                        x2: Math.max(l, u),
                                        y2: v
                                    },
                                    color: b
                                })
                            }
                    }
                }
                s && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1,
                    e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderRangeArea = function(a) {
            function d() {
                if (x) {
                    for (var a = null, c = k.length - 1; 0 <= c; c--) a = k[c], b.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
                    b.closePath();
                    b.globalAlpha = p.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    e.fill();
                    if (0 < p.lineThickness) {
                        b.beginPath();
                        b.moveTo(a.x, a.y2);
                        for (c = 0; c < k.length; c++) a = k[c],
                            b.lineTo(a.x, a.y2);
                        b.moveTo(k[0].x, k[0].y1);
                        for (c = 0; c < k.length; c++) a = k[c], b.lineTo(a.x, a.y1);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(m, r);
                    e.beginPath();
                    e.moveTo(m, r);
                    x = {
                        x: m,
                        y: r
                    };
                    k = [];
                    k.push({
                        x: m,
                        y1: r,
                        y2: v
                    })
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    l = this.plotArea;
                b.save();
                s && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                s && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var k = [],
                        h = a.dataSeriesIndexes[u],
                        p = this.data[h],
                        n = p.dataPoints,
                        f = p.id;
                    this._eventManager.objectMap[f] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: h
                    };
                    f = S(f);
                    e.fillStyle = f;
                    var f = [],
                        q = !0,
                        g = 0,
                        m, r, v, t, x = null;
                    if (0 < n.length) {
                        var C = p._colorSet[g % p._colorSet.length],
                            w = p.lineColor = p.options.lineColor || C,
                            B = w;
                        b.fillStyle = C;
                        b.strokeStyle = w;
                        b.lineWidth = p.lineThickness;
                        var y = "solid";
                        if (b.setLineDash) {
                            var D = Q(p.nullDataLineDashType, p.lineThickness),
                                y = p.lineDashType,
                                E = Q(y,
                                    p.lineThickness);
                            b.setLineDash(E)
                        }
                        for (var K = !0; g < n.length; g++)
                            if (t = n[g].x.getTime ? n[g].x.getTime() : n[g].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!p.connectNullData || !K)))
                                if (null !== n[g].y && n[g].y.length && "number" === typeof n[g].y[0] && "number" === typeof n[g].y[1]) {
                                    m = a.axisX.convertValueToPixel(t);
                                    r = a.axisY.convertValueToPixel(n[g].y[0]);
                                    v = a.axisY.convertValueToPixel(n[g].y[1]);
                                    q || K ? (p.connectNullData && !q ? (b.setLineDash && (p.options.nullDataLineDashType || y === p.lineDashType &&
                                        p.lineDashType !== p.nullDataLineDashType) && (k[k.length - 1].newLineDashArray = E, y = p.nullDataLineDashType, b.setLineDash(D)), b.lineTo(m, r), s && e.lineTo(m, r), k.push({
                                        x: m,
                                        y1: r,
                                        y2: v
                                    })) : (b.beginPath(), b.moveTo(m, r), x = {
                                        x: m,
                                        y: r
                                    }, k = [], k.push({
                                        x: m,
                                        y1: r,
                                        y2: v
                                    }), s && (e.beginPath(), e.moveTo(m, r))), K = q = !1) : (b.lineTo(m, r), k.push({
                                        x: m,
                                        y1: r,
                                        y2: v
                                    }), s && e.lineTo(m, r), 0 == g % 250 && d());
                                    t = p.dataPointIds[g];
                                    this._eventManager.objectMap[t] = {
                                        id: t,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: h,
                                        dataPointIndex: g,
                                        x1: m,
                                        y1: r,
                                        y2: v
                                    };
                                    g < n.length -
                                        1 && (B !== (n[g].lineColor || w) || y !== (n[g].lineDashType || p.lineDashType)) && (d(), B = n[g].lineColor || w, k[k.length - 1].newStrokeStyle = B, b.strokeStyle = B, b.setLineDash && (n[g].lineDashType ? (y = n[g].lineDashType, k[k.length - 1].newLineDashArray = Q(y, p.lineThickness), b.setLineDash(k[k.length - 1].newLineDashArray)) : (y = p.lineDashType, k[k.length - 1].newLineDashArray = E, b.setLineDash(E))));
                                    if (0 !== n[g].markerSize && (0 < n[g].markerSize || 0 < p.markerSize)) {
                                        var P = p.getMarkerProperties(g, m, v, b);
                                        f.push(P);
                                        var ha = S(t);
                                        s && f.push({
                                            x: m,
                                            y: v,
                                            ctx: e,
                                            type: P.type,
                                            size: P.size,
                                            color: ha,
                                            borderColor: ha,
                                            borderThickness: P.borderThickness
                                        });
                                        P = p.getMarkerProperties(g, m, r, b);
                                        f.push(P);
                                        ha = S(t);
                                        s && f.push({
                                            x: m,
                                            y: r,
                                            ctx: e,
                                            type: P.type,
                                            size: P.size,
                                            color: ha,
                                            borderColor: ha,
                                            borderThickness: P.borderThickness
                                        })
                                    }
                                    if (n[g].indexLabel || p.indexLabel || n[g].indexLabelFormatter || p.indexLabelFormatter) this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: n[g],
                                            dataSeries: p,
                                            indexKeyword: 0,
                                            point: {
                                                x: m,
                                                y: r
                                            },
                                            direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? -1 : 1,
                                            color: C
                                        }),
                                        this._indexLabels.push({
                                            chartType: "rangeArea",
                                            dataPoint: n[g],
                                            dataSeries: p,
                                            indexKeyword: 1,
                                            point: {
                                                x: m,
                                                y: v
                                            },
                                            direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? 1 : -1,
                                            color: C
                                        })
                                } else K || q || d(), K = !0;
                        d();
                        Y.drawMarkers(f)
                    }
                }
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderRangeSplineArea = function(a) {
            function d(a, c) {
                var d = v(r, 2);
                if (0 < d.length) {
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray) b.stroke(),
                                b.beginPath(), b.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (b.strokeStyle = d[f].newStrokeStyle), d[f].newLineDashArray && b.setLineDash(d[f].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                    }
                    b.beginPath();
                    b.moveTo(d[0].x, d[0].y);
                    s && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), s && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = v(O, 2);
                    b.lineTo(O[O.length -
                        1].x, O[O.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) b.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y), s && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    b.closePath();
                    b.globalAlpha = h.fillOpacity;
                    b.fill();
                    s && (e.closePath(), e.fill());
                    b.globalAlpha = 1;
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (r[g].newStrokeStyle || r[g].newLineDashArray) b.stroke(), b.beginPath(),
                                b.moveTo(d[f].x, d[f].y), r[g].newStrokeStyle && (b.strokeStyle = r[g].newStrokeStyle), r[g].newLineDashArray && b.setLineDash(r[g].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        d = v(r, 2);
                        b.moveTo(d[0].x, d[0].y);
                        for (g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (r[g].newStrokeStyle || r[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), r[g].newStrokeStyle && (b.strokeStyle = r[g].newStrokeStyle), r[g].newLineDashArray && b.setLineDash(r[g].newLineDashArray);
                            b.bezierCurveTo(d[f +
                                1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        b.stroke()
                    }
                    b.beginPath()
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = s ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    l = this.plotArea;
                b.save();
                s && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                s && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var k = 0; k < a.dataSeriesIndexes.length; k++) {
                    var m = a.dataSeriesIndexes[k],
                        h = this.data[m],
                        p = h.dataPoints,
                        f = h.id;
                    this._eventManager.objectMap[f] = {
                        objectType: "dataSeries",
                        dataSeriesIndex: m
                    };
                    f = S(f);
                    e.fillStyle = f;
                    var f = [],
                        n = 0,
                        q, g, A, r = [],
                        O = [];
                    if (0 < p.length) {
                        var t = h._colorSet[n % h._colorSet.length],
                            x = h.lineColor = h.options.lineColor || t,
                            C = x;
                        b.fillStyle = t;
                        b.lineWidth = h.lineThickness;
                        var w = "solid",
                            B;
                        if (b.setLineDash) {
                            var y = Q(h.nullDataLineDashType, h.lineThickness),
                                w = h.lineDashType;
                            B = Q(w, h.lineThickness)
                        }
                        for (g = !1; n < p.length; n++)
                            if (q = p[n].x.getTime ? p[n].x.getTime() : p[n].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!h.connectNullData ||
                                    !g)))
                                if (null !== p[n].y && p[n].y.length && "number" === typeof p[n].y[0] && "number" === typeof p[n].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    g = a.axisY.convertValueToPixel(p[n].y[0]);
                                    A = a.axisY.convertValueToPixel(p[n].y[1]);
                                    var D = h.dataPointIds[n];
                                    this._eventManager.objectMap[D] = {
                                        id: D,
                                        objectType: "dataPoint",
                                        dataSeriesIndex: m,
                                        dataPointIndex: n,
                                        x1: q,
                                        y1: g,
                                        y2: A
                                    };
                                    r[r.length] = {
                                        x: q,
                                        y: g
                                    };
                                    O[O.length] = {
                                        x: q,
                                        y: A
                                    };
                                    n < p.length - 1 && (C !== (p[n].lineColor || x) || w !== (p[n].lineDashType || h.lineDashType)) && (C = p[n].lineColor || x, r[r.length -
                                        1].newStrokeStyle = C, b.setLineDash && (p[n].lineDashType ? (w = p[n].lineDashType, r[r.length - 1].newLineDashArray = Q(w, h.lineThickness)) : (w = h.lineDashType, r[r.length - 1].newLineDashArray = B)));
                                    if (0 !== p[n].markerSize && (0 < p[n].markerSize || 0 < h.markerSize)) {
                                        var E = h.getMarkerProperties(n, q, g, b);
                                        f.push(E);
                                        var K = S(D);
                                        s && f.push({
                                            x: q,
                                            y: g,
                                            ctx: e,
                                            type: E.type,
                                            size: E.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: E.borderThickness
                                        });
                                        E = h.getMarkerProperties(n, q, A, b);
                                        f.push(E);
                                        K = S(D);
                                        s && f.push({
                                            x: q,
                                            y: A,
                                            ctx: e,
                                            type: E.type,
                                            size: E.size,
                                            color: K,
                                            borderColor: K,
                                            borderThickness: E.borderThickness
                                        })
                                    }
                                    if (p[n].indexLabel || h.indexLabel || p[n].indexLabelFormatter || h.indexLabelFormatter) this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: p[n],
                                        dataSeries: h,
                                        indexKeyword: 0,
                                        point: {
                                            x: q,
                                            y: g
                                        },
                                        direction: p[n].y[0] <= p[n].y[1] ? -1 : 1,
                                        color: t
                                    }), this._indexLabels.push({
                                        chartType: "rangeSplineArea",
                                        dataPoint: p[n],
                                        dataSeries: h,
                                        indexKeyword: 1,
                                        point: {
                                            x: q,
                                            y: A
                                        },
                                        direction: p[n].y[0] <= p[n].y[1] ? 1 : -1,
                                        color: t
                                    });
                                    g = !1
                                } else 0 < n && !g && (h.connectNullData ? b.setLineDash &&
                                    (0 < r.length && (h.options.nullDataLineDashType || !p[n - 1].lineDashType)) && (r[r.length - 1].newLineDashArray = y, w = h.nullDataLineDashType) : (d(B, x), r = [], O = [])), g = !0;
                        d(B, x);
                        Y.drawMarkers(f)
                    }
                }
                s && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderWaterfall = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = s ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx,
                    e = null,
                    f = this.plotArea,
                    l = 0,
                    k, m, h, p, n = a.axisY.convertValueToPixel(a.axisY.logarithmic ?
                        a.axisY.viewportMinimum : 0),
                    l = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (f.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) :
                    Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && l > m && (l = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && m < l) && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, l));
                q < l && (q = l);
                q > m && (q = m);
                c.save();
                s && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                s && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(f.x1,
                    f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
                for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var r = a.dataSeriesIndexes[g],
                        v = this.data[r],
                        O = v.dataPoints,
                        e = v._colorSet[0];
                    v.risingColor = v.options.risingColor ? v.options.risingColor : e;
                    v.fallingColor = v.options.fallingColor ? v.options.fallingColor : "#e40a0a";
                    var t = "number" === typeof v.options.lineThickness ? Math.round(v.lineThickness) : 1,
                        x = 1 === Math.round(t) % 2 ? -0.5 : 0;
                    if (0 < O.length)
                        for (var C = 5 < q && v.bevelEnabled ? !0 : !1, w = !1, B = null, y = null, l = 0; l < O.length; l++)
                            if (O[l].getTime ?
                                p = O[l].x.getTime() : p = O[l].x, "number" !== typeof O[l].y) {
                                if (0 < l && !w && v.connectNullData) var D = v.options.nullDataLineDashType || !O[l - 1].lineDashType ? v.nullDataLineDashType : O[l - 1].lineDashType;
                                w = !0
                            } else {
                                k = a.axisX.convertValueToPixel(p);
                                m = 0 === v.dataPointEOs[l].cumulativeSum ? n : a.axisY.convertValueToPixel(v.dataPointEOs[l].cumulativeSum);
                                h = 0 === v.dataPointEOs[l].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(v.dataPointEOs[l].cumulativeSumYStartValue);
                                k = a.axisX.reversed ? k + a.plotType.totalDataSeries *
                                    q / 2 - (a.previousDataSeriesCount + g) * q << 0 : k - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount + g) * q << 0;
                                var E = a.axisX.reversed ? k - q << 0 : k + q << 0;
                                m > h && (e = m, m = h, h = e);
                                a.axisY.reversed && (e = m, m = h, h = e);
                                e = v.dataPointIds[l];
                                this._eventManager.objectMap[e] = {
                                    id: e,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: r,
                                    dataPointIndex: l,
                                    x1: k,
                                    y1: m,
                                    x2: E,
                                    y2: h
                                };
                                var K = O[l].color ? O[l].color : 0 < O[l].y ? v.risingColor : v.fallingColor;
                                da(c, k, m, E, h, K, 0, K, C, C, !1, !1, v.fillOpacity);
                                e = S(e);
                                s && da(this._eventManager.ghostCtx, k, m, E, h, e, 0, null, !1,
                                    !1, !1, !1);
                                var P, K = k;
                                P = "undefined" !== typeof O[l].isIntermediateSum && !0 === O[l].isIntermediateSum || "undefined" !== typeof O[l].isCumulativeSum && !0 === O[l].isCumulativeSum ? 0 < O[l].y ? m : h : 0 < O[l].y ? h : m;
                                0 < l && B && (!w || v.connectNullData) && (w && c.setLineDash && c.setLineDash(Q(D, t)), c.beginPath(), c.moveTo(B, y - x), c.lineTo(K, P - x), 0 < t && c.stroke(), s && (b.beginPath(), b.moveTo(B, y - x), b.lineTo(K, P - x), 0 < t && b.stroke()));
                                w = !1;
                                B = E;
                                y = 0 < O[l].y ? m : h;
                                K = O[l].lineDashType ? O[l].lineDashType : v.options.lineDashType ? v.options.lineDashType :
                                    "shortDash";
                                c.strokeStyle = O[l].lineColor ? O[l].lineColor : v.options.lineColor ? v.options.lineColor : "#9e9e9e";
                                c.lineWidth = t;
                                c.setLineDash && (K = Q(K, t), c.setLineDash(K));
                                (O[l].indexLabel || v.indexLabel || O[l].indexLabelFormatter || v.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "waterfall",
                                    dataPoint: O[l],
                                    dataSeries: v,
                                    point: {
                                        x: k + (E - k) / 2,
                                        y: 0 <= O[l].y ? m : h
                                    },
                                    direction: 0 > O[l].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: k,
                                        y1: Math.min(m, h),
                                        x2: E,
                                        y2: Math.max(m, h)
                                    },
                                    color: e
                                })
                            }
                }
                s && (d.drawImage(this._preRenderCanvas, 0,
                    0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        var Z = function(a, d, c, b, e, f, l, k, m) {
            if (!(0 > c)) {
                "undefined" === typeof k && (k = 1);
                if (!s) {
                    var h = Number((l % (2 * Math.PI)).toFixed(8));
                    Number((f % (2 * Math.PI)).toFixed(8)) === h && (l -= 1E-4)
                }
                a.save();
                a.globalAlpha = k;
                "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, f, l, !1), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, f, l, !1), 0 <= m && a.arc(d.x, d.y, m * c, l, f, !0), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth =
                    2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        m.prototype.renderPie = function(a) {
            function d() {
                if (h && p) {
                    for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < p.length; e++) {
                        var f = p[e],
                            l = h.dataPointIds[e];
                        g[e].id = l;
                        g[e].objectType = "dataPoint";
                        g[e].dataPointIndex = e;
                        g[e].dataSeriesIndex = 0;
                        var n = g[e],
                            k = {
                                percent: null,
                                total: null
                            },
                            u = null,
                            k = m.getPercentAndTotal(h, f);
                        if (h.indexLabelFormatter || f.indexLabelFormatter) u = {
                            chart: m.options,
                            dataSeries: h,
                            dataPoint: f,
                            total: k.total,
                            percent: k.percent
                        };
                        k = f.indexLabelFormatter ? f.indexLabelFormatter(u) :
                            f.indexLabel ? m.replaceKeywordsWithValue(f.indexLabel, f, h, e) : h.indexLabelFormatter ? h.indexLabelFormatter(u) : h.indexLabel ? m.replaceKeywordsWithValue(h.indexLabel, f, h, e) : f.label ? f.label : "";
                        m._eventManager.objectMap[l] = n;
                        n.center = {
                            x: C.x,
                            y: C.y
                        };
                        n.y = f.y;
                        n.radius = y;
                        n.percentInnerRadius = E;
                        n.indexLabelText = k;
                        n.indexLabelPlacement = h.indexLabelPlacement;
                        n.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : h.options.indexLabelLineColor ? h.options.indexLabelLineColor : f.color ? f.color : h._colorSet[e %
                            h._colorSet.length];
                        n.indexLabelLineThickness = r(f.indexLabelLineThickness) ? h.indexLabelLineThickness : f.indexLabelLineThickness;
                        n.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : h.indexLabelLineDashType;
                        n.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : h.indexLabelFontColor;
                        n.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : h.indexLabelFontStyle;
                        n.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : h.indexLabelFontWeight;
                        n.indexLabelFontSize =
                            r(f.indexLabelFontSize) ? h.indexLabelFontSize : f.indexLabelFontSize;
                        n.indexLabelFontFamily = f.indexLabelFontFamily ? f.indexLabelFontFamily : h.indexLabelFontFamily;
                        n.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : h.options.indexLabelBackgroundColor ? h.options.indexLabelBackgroundColor : h.indexLabelBackgroundColor;
                        n.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : h.indexLabelMaxWidth ? h.indexLabelMaxWidth : 0.33 * q.width;
                        n.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ?
                            f.indexLabelWrap : h.indexLabelWrap;
                        n.startAngle = 0 === e ? h.startAngle ? h.startAngle / 180 * Math.PI : 0 : g[e - 1].endAngle;
                        n.startAngle = (n.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        n.endAngle = n.startAngle + 2 * Math.PI / w * Math.abs(f.y);
                        f = (n.endAngle + n.startAngle) / 2;
                        f = (f + 2 * Math.PI) % (2 * Math.PI);
                        n.midAngle = f;
                        if (n.midAngle > Math.PI / 2 - t && n.midAngle < Math.PI / 2 + t) {
                            if (0 === a || g[c].midAngle > n.midAngle) c = e;
                            a++
                        } else if (n.midAngle > 3 * Math.PI / 2 - t && n.midAngle < 3 * Math.PI / 2 + t) {
                            if (0 === b || g[d].midAngle > n.midAngle) d = e;
                            b++
                        }
                        n.hemisphere = f > Math.PI / 2 &&
                            f <= 3 * Math.PI / 2 ? "left" : "right";
                        n.indexLabelTextBlock = new la(m.plotArea.ctx, {
                            fontSize: n.indexLabelFontSize,
                            fontFamily: n.indexLabelFontFamily,
                            fontColor: n.indexLabelFontColor,
                            fontStyle: n.indexLabelFontStyle,
                            fontWeight: n.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: n.indexLabelBackgroundColor,
                            maxWidth: n.indexLabelMaxWidth,
                            maxHeight: n.indexLabelWrap ? 5 * n.indexLabelFontSize : 1.5 * n.indexLabelFontSize,
                            text: n.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        n.indexLabelTextBlock.measureText()
                    }
                    l = f =
                        0;
                    k = !1;
                    for (e = 0; e < p.length; e++) n = g[(c + e) % p.length], 1 < a && (n.midAngle > Math.PI / 2 - t && n.midAngle < Math.PI / 2 + t) && (f <= a / 2 && !k ? (n.hemisphere = "right", f++) : (n.hemisphere = "left", k = !0));
                    k = !1;
                    for (e = 0; e < p.length; e++) n = g[(d + e) % p.length], 1 < b && (n.midAngle > 3 * Math.PI / 2 - t && n.midAngle < 3 * Math.PI / 2 + t) && (l <= b / 2 && !k ? (n.hemisphere = "left", l++) : (n.hemisphere = "right", k = !0))
                }
            }

            function c(a) {
                var b = m.plotArea.ctx;
                b.clearRect(q.x1, q.y1, q.width, q.height);
                b.fillStyle = m.backgroundColor;
                b.fillRect(q.x1, q.y1, q.width, q.height);
                for (b = 0; b <
                    p.length; b++) {
                    var c = g[b].startAngle,
                        d = g[b].endAngle;
                    if (d > c) {
                        var e = 0.07 * y * Math.cos(g[b].midAngle),
                            f = 0.07 * y * Math.sin(g[b].midAngle),
                            l = !1;
                        if (p[b].exploded) {
                            if (1E-9 < Math.abs(g[b].center.x - (C.x + e)) || 1E-9 < Math.abs(g[b].center.y - (C.y + f))) g[b].center.x = C.x + e * a, g[b].center.y = C.y + f * a, l = !0
                        } else if (0 < Math.abs(g[b].center.x - C.x) || 0 < Math.abs(g[b].center.y - C.y)) g[b].center.x = C.x + e * (1 - a), g[b].center.y = C.y + f * (1 - a), l = !0;
                        l && (e = {}, e.dataSeries = h, e.dataPoint = h.dataPoints[b], e.index = b, m.toolTip.highlightObjects([e]));
                        Z(m.plotArea.ctx, g[b].center, g[b].radius, p[b].color ? p[b].color : h._colorSet[b % h._colorSet.length], h.type, c, d, h.fillOpacity, g[b].percentInnerRadius)
                    }
                }
                a = m.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < p.length; b++) c = g[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== h.indexLabelPlacement ? -(c.indexLabelTextBlock.width + n) : -c.indexLabelTextBlock.width / 2 : "inside" !==
                    h.indexLabelPlacement ? n : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y += c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + y * Math.cos(c.midAngle), e = c.center.y + y * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(Q(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(),
                        a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -n : n), c.indexLabelTextBlock.y), a.stroke()), a.lineJoin = "miter");
                a.save()
            }

            function b(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ?
                    e - d : c - f
            }

            function e(a) {
                for (var c = null, d = 1; d < p.length; d++)
                    if (c = (a + d + g.length) % g.length, g[c].hemisphere !== g[a].hemisphere) {
                        c = null;
                        break
                    } else if (g[c].indexLabelText && c !== a && (0 > b(g[c], g[a]) || ("right" === g[a].hemisphere ? g[c].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y : g[c].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y))) break;
                else c = null;
                return c
            }

            function f(a, c, d) {
                d = (d || 0) + 1;
                if (1E3 < d) return 0;
                c = c || 0;
                var h = 0,
                    l = C.y - 1 * s,
                    n = C.y + 1 * s;
                if (0 <= a && a < p.length) {
                    var m = g[a];
                    if (0 > c && m.indexLabelTextBlock.y < l ||
                        0 < c && m.indexLabelTextBlock.y > n) return 0;
                    var k = 0,
                        q = 0,
                        q = k = k = 0;
                    0 > c ? m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 > l && m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + c < l && (c = -(l - (m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 + c))) : m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 < l && m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + c > n && (c = m.indexLabelTextBlock.y + m.indexLabelTextBlock.height / 2 + c - n);
                    c = m.indexLabelTextBlock.y + c;
                    l = 0;
                    l = "right" === m.hemisphere ? C.x + Math.sqrt(Math.pow(s,
                        2) - Math.pow(c - C.y, 2)) : C.x - Math.sqrt(Math.pow(s, 2) - Math.pow(c - C.y, 2));
                    q = C.x + y * Math.cos(m.midAngle);
                    k = C.y + y * Math.sin(m.midAngle);
                    k = Math.sqrt(Math.pow(l - q, 2) + Math.pow(c - k, 2));
                    q = Math.acos(y / s);
                    k = Math.acos((s * s + y * y - k * k) / (2 * y * s));
                    c = k < q ? c - m.indexLabelTextBlock.y : 0;
                    l = null;
                    for (n = 1; n < p.length; n++)
                        if (l = (a - n + g.length) % g.length, g[l].hemisphere !== g[a].hemisphere) {
                            l = null;
                            break
                        } else if (g[l].indexLabelText && g[l].hemisphere === g[a].hemisphere && l !== a && (0 > b(g[l], g[a]) || ("right" === g[a].hemisphere ? g[l].indexLabelTextBlock.y <=
                            g[a].indexLabelTextBlock.y : g[l].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y))) break;
                    else l = null;
                    q = l;
                    k = e(a);
                    n = l = 0;
                    0 > c ? (n = "right" === m.hemisphere ? q : k, h = c, null !== n && (q = -c, c = m.indexLabelTextBlock.y - m.indexLabelTextBlock.height / 2 - (g[n].indexLabelTextBlock.y + g[n].indexLabelTextBlock.height / 2), c - q < A && (l = -q, n = f(n, l, d + 1), +n.toFixed(x) > +l.toFixed(x) && (h = c > A ? -(c - A) : -(q - (n - l)))))) : 0 < c && (n = "right" === m.hemisphere ? k : q, h = c, null !== n && (q = c, c = g[n].indexLabelTextBlock.y - g[n].indexLabelTextBlock.height / 2 - (m.indexLabelTextBlock.y +
                        m.indexLabelTextBlock.height / 2), c - q < A && (l = q, n = f(n, l, d + 1), +n.toFixed(x) < +l.toFixed(x) && (h = c > A ? c - A : q - (l - n)))));
                    h && (d = m.indexLabelTextBlock.y + h, c = 0, c = "right" === m.hemisphere ? C.x + Math.sqrt(Math.pow(s, 2) - Math.pow(d - C.y, 2)) : C.x - Math.sqrt(Math.pow(s, 2) - Math.pow(d - C.y, 2)), m.midAngle > Math.PI / 2 - t && m.midAngle < Math.PI / 2 + t ? (l = (a - 1 + g.length) % g.length, l = g[l], a = g[(a + 1 + g.length) % g.length], "left" === m.hemisphere && "right" === l.hemisphere && c > l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x - 15 : "right" === m.hemisphere && ("left" ===
                        a.hemisphere && c < a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x + 15)) : m.midAngle > 3 * Math.PI / 2 - t && m.midAngle < 3 * Math.PI / 2 + t && (l = (a - 1 + g.length) % g.length, l = g[l], a = g[(a + 1 + g.length) % g.length], "right" === m.hemisphere && "left" === l.hemisphere && c < l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x + 15 : "left" === m.hemisphere && ("right" === a.hemisphere && c > a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x - 15)), m.indexLabelTextBlock.y = d, m.indexLabelTextBlock.x = c, m.indexLabelAngle = Math.atan2(m.indexLabelTextBlock.y -
                        C.y, m.indexLabelTextBlock.x - C.x))
                }
                return h
            }

            function l() {
                var a = m.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var c = a = 0, d = 0, l = !0, c = 0; 10 > c && (1 > c || 0 < d); c++) {
                    if (h.radius || !h.radius && "undefined" !== typeof h.innerRadius && null !== h.innerRadius && y - d <= D) l = !1;
                    l && (y -= d);
                    d = 0;
                    if ("inside" !== h.indexLabelPlacement) {
                        s = y * v;
                        for (a = 0; a < p.length; a++) {
                            var k = g[a];
                            k.indexLabelTextBlock.x = C.x + s * Math.cos(k.midAngle);
                            k.indexLabelTextBlock.y = C.y + s * Math.sin(k.midAngle);
                            k.indexLabelAngle =
                                k.midAngle;
                            k.radius = y;
                            k.percentInnerRadius = E
                        }
                        for (var u, t, a = 0; a < p.length; a++) {
                            var k = g[a],
                                r = e(a);
                            if (null !== r) {
                                u = g[a];
                                t = g[r];
                                var B = 0,
                                    B = b(u, t) - A;
                                if (0 > B) {
                                    for (var w = t = 0, J = 0; J < p.length; J++) J !== a && g[J].hemisphere === k.hemisphere && (g[J].indexLabelTextBlock.y < k.indexLabelTextBlock.y ? t++ : w++);
                                    t = B / (t + w || 1) * w;
                                    var w = -1 * (B - t),
                                        I = J = 0;
                                    "right" === k.hemisphere ? (J = f(a, t), w = -1 * (B - J), I = f(r, w), +I.toFixed(x) < +w.toFixed(x) && +J.toFixed(x) <= +t.toFixed(x) && f(a, -(w - I))) : (J = f(r, t), w = -1 * (B - J), I = f(a, w), +I.toFixed(x) < +w.toFixed(x) &&
                                        +J.toFixed(x) <= +t.toFixed(x) && f(r, -(w - I)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < p.length; a++) k = g[a], s = "pie" === h.type ? 0.7 * y : 0.8 * y, r = C.x + s * Math.cos(k.midAngle), t = C.y + s * Math.sin(k.midAngle), k.indexLabelTextBlock.x = r, k.indexLabelTextBlock.y = t;
                    for (a = 0; a < p.length; a++)
                        if (k = g[a], r = k.indexLabelTextBlock.measureText(), 0 !== r.height && 0 !== r.width) r = r = 0, "right" === k.hemisphere ? (r = q.x2 - (k.indexLabelTextBlock.x + k.indexLabelTextBlock.width + n), r *= -1) : r = q.x1 - (k.indexLabelTextBlock.x - k.indexLabelTextBlock.width - n), 0 < r && (!l && k.indexLabelText &&
                                (t = "right" === k.hemisphere ? q.x2 - k.indexLabelTextBlock.x : k.indexLabelTextBlock.x - q.x1, 0.3 * k.indexLabelTextBlock.maxWidth > t ? k.indexLabelText = "" : k.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * k.indexLabelTextBlock.maxWidth < t && (k.indexLabelTextBlock.x -= "right" === k.hemisphere ? 2 : -2)), Math.abs(k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - C.y) < y || Math.abs(k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 - C.y) < y) && (r /= Math.abs(Math.cos(k.indexLabelAngle)), 9 < r && (r *= 0.3), r > d && (d = r)), r = r = 0, 0 < k.indexLabelAngle &&
                            k.indexLabelAngle < Math.PI ? (r = q.y2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + 5), r *= -1) : r = q.y1 - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - 5), 0 < r && (!l && k.indexLabelText && (t = 0 < k.indexLabelAngle && k.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, r * t) && f(a, 2 * t)), Math.abs(k.indexLabelTextBlock.x - C.x) < y && (r /= Math.abs(Math.sin(k.indexLabelAngle)), 9 < r && (r *= 0.3), r > d && (d = r)));
                    var G = function(a, b, c) {
                        for (var d = [], e = 0; d.push(g[b]), b !== c; b = (b + 1 + p.length) % p.length);
                        d.sort(function(a, b) {
                            return a.y - b.y
                        });
                        for (b = 0; b < d.length; b++)
                            if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    (function() {
                        for (var a = -1, c = -1, d = 0, f = !1, h = 0; h < p.length; h++)
                            if (f = !1, u = g[h], u.indexLabelText) {
                                var l = e(h);
                                if (null !== l) {
                                    var k = g[l];
                                    B = 0;
                                    B = b(u, k);
                                    var m;
                                    if (m = 0 > B) {
                                        m = u.indexLabelTextBlock.x;
                                        var q = u.indexLabelTextBlock.y - u.indexLabelTextBlock.height / 2,
                                            t = u.indexLabelTextBlock.y + u.indexLabelTextBlock.height / 2,
                                            r = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height /
                                            2,
                                            A = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                            z = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                        m = u.indexLabelTextBlock.x + u.indexLabelTextBlock.width < k.indexLabelTextBlock.x - n || m > A + n || q > z + n || t < r - n ? !1 : !0
                                    }
                                    m ? (0 > a && (a = h), l !== a && (c = l, d += -B), 0 === h % Math.max(p.length / 10, 3) && (f = !0)) : f = !0;
                                    f && (0 < d && 0 <= a && 0 <= c) && (G(d, a, c), c = a = -1, d = 0)
                                }
                            } 0 < d && G(d, a, c)
                    })()
                }
            }

            function k() {
                m.plotArea.layoutManager.reset();
                m.title && (m.title.dockInsidePlotArea || "center" === m.title.horizontalAlign && "center" === m.title.verticalAlign) &&
                    m.title.render();
                if (m.subtitles)
                    for (var a = 0; a < m.subtitles.length; a++) {
                        var b = m.subtitles[a];
                        (b.dockInsidePlotArea || "center" === b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                m.legend && (m.legend.dockInsidePlotArea || "center" === m.legend.horizontalAlign && "center" === m.legend.verticalAlign) && (m.legend.setLayout(), m.legend.render())
            }
            var m = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this.data[a.dataSeriesIndexes[0]],
                    p = h.dataPoints,
                    n = 10,
                    q = this.plotArea,
                    g = h.dataPointEOs,
                    A = 2,
                    s, v = 1.3,
                    t = 20 / 180 * Math.PI,
                    x = 6,
                    C = {
                        x: (q.x2 + q.x1) / 2,
                        y: (q.y2 + q.y1) / 2
                    },
                    w = 0;
                a = !1;
                for (var B = 0; B < p.length; B++) w += Math.abs(p[B].y), !a && ("undefined" !== typeof p[B].indexLabel && null !== p[B].indexLabel && 0 < p[B].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof p[B].label && null !== p[B].label && 0 < p[B].label.toString().length) && (a = !0);
                if (0 !== w) {
                    a = a || "undefined" !== typeof h.indexLabel && null !== h.indexLabel && 0 < h.indexLabel.toString().length;
                    var y = "inside" !== h.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width,
                        q.height) / 2;
                    h.radius && (y = Ra(h.radius, y));
                    var D = "undefined" !== typeof h.innerRadius && null !== h.innerRadius ? Ra(h.innerRadius, y) : 0.7 * y;
                    h.radius = y;
                    "doughnut" === h.type && (h.innerRadius = D);
                    var E = Math.min(D / y, (y - 1) / y);
                    this.pieDoughnutClickHandler = function(a) {
                        m.isAnimating || !r(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && m._animator.animate(0, 500, function(a) {
                            c(a);
                            k()
                        }))
                    };
                    d();
                    l();
                    l();
                    l();
                    l();
                    this.disableToolTip = !0;
                    this._animator.animate(0,
                        this.animatedRender ? this.animationDuration : 0,
                        function(a) {
                            var b = m.plotArea.ctx;
                            b.clearRect(q.x1, q.y1, q.width, q.height);
                            b.fillStyle = m.backgroundColor;
                            b.fillRect(q.x1, q.y1, q.width, q.height);
                            a = g[0].startAngle + 2 * Math.PI * a;
                            for (b = 0; b < p.length; b++) {
                                var c = 0 === b ? g[b].startAngle : d,
                                    d = c + (g[b].endAngle - g[b].startAngle),
                                    e = !1;
                                d > a && (d = a, e = !0);
                                var f = p[b].color ? p[b].color : h._colorSet[b % h._colorSet.length];
                                d > c && Z(m.plotArea.ctx, g[b].center, g[b].radius, f, h.type, c, d, h.fillOpacity, g[b].percentInnerRadius);
                                if (e) break
                            }
                            k()
                        },
                        function() {
                            m.disableToolTip = !1;
                            m._animator.animate(0, m.animatedRender ? 500 : 0, function(a) {
                                c(a);
                                k()
                            })
                        })
                }
            }
        };
        var qa = function(a, d, c, b) {
            "undefined" === typeof c && (c = 1);
            0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(Math.round(d.x3), Math.round(d.y3)), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))),
                a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore())
        };
        m.prototype.renderFunnel = function(a) {
            function d() {
                for (var a = 0, b = [], c = 0; c < x.length; c++) {
                    if ("undefined" === typeof x[c].y) return -1;
                    x[c].y = "number" === typeof x[c].y ? x[c].y : 0;
                    a += Math.abs(x[c].y)
                }
                if (0 === a) return -1;
                for (c = b[0] = 0; c < x.length; c++) b.push(Math.abs(x[c].y) * E / a);
                return b
            }

            function c() {
                var a = X,
                    b = aa,
                    c = M,
                    d = Y,
                    e, f;
                e = $;
                f = T - ca;
                d = Math.abs((f - e) * (b - a + (d - c)) / 2);
                c = Y - M;
                e = f - e;
                f = c * (f - T);
                f = Math.abs(f);
                f = d + f;
                for (var d = [], g = 0, h = 0; h < x.length; h++) {
                    if ("undefined" ===
                        typeof x[h].y) return -1;
                    x[h].y = "number" === typeof x[h].y ? x[h].y : 0;
                    g += Math.abs(x[h].y)
                }
                if (0 === g) return -1;
                for (var l = d[0] = 0, k = 0, n, m, b = b - a, l = !1, h = 0; h < x.length; h++) a = Math.abs(x[h].y) * f / g, l ? n = 0 == Number(c.toFixed(3)) ? 0 : a / c : (m = ba * ba * b * b - 4 * Math.abs(ba) * a, 0 > m ? (m = c, l = (b + m) * (e - k) / 2, a -= l, n = e - k, k += e - k, n += 0 == m ? 0 : a / m, k += a / m, l = !0) : (n = (Math.abs(ba) * b - Math.sqrt(m)) / 2, m = b - 2 * n / Math.abs(ba), k += n, k > e && (k -= n, m = c, l = (b + m) * (e - k) / 2, a -= l, n = e - k, k += e - k, n += a / m, k += a / m, l = !0), b = m)), d.push(n);
                return d
            }

            function b() {
                if (t && x) {
                    for (var a,
                            b, c, d, e, f, h, l, k, n, m, p, q, u, A = [], z = [], v = {
                                percent: null,
                                total: null
                            }, C = null, y = 0; y < x.length; y++) u = R[y], u = "undefined" !== typeof u.x5 ? (u.y2 + u.y4) / 2 : (u.y2 + u.y3) / 2, u = g(u).x2 + 1, A[y] = N - u - W;
                    u = 0.5 * W;
                    for (var y = 0, B = x.length - 1; y < x.length || 0 <= B; y++, B--) {
                        b = t.reversed ? x[B] : x[y];
                        a = b.color ? b.color : t.reversed ? t._colorSet[(x.length - 1 - y) % t._colorSet.length] : t._colorSet[y % t._colorSet.length];
                        c = b.indexLabelPlacement || t.indexLabelPlacement || "outside";
                        d = b.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (s ? "transparent" :
                            null);
                        e = b.indexLabelFontColor || t.indexLabelFontColor || "#979797";
                        f = r(b.indexLabelFontSize) ? t.indexLabelFontSize : b.indexLabelFontSize;
                        h = b.indexLabelFontStyle || t.indexLabelFontStyle || "normal";
                        l = b.indexLabelFontFamily || t.indexLabelFontFamily || "arial";
                        k = b.indexLabelFontWeight || t.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || t.options.indexLabelLineColor || a;
                        n = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof t.indexLabelLineThickness ? t.indexLabelLineThickness :
                            2;
                        m = b.indexLabelLineDashType || t.indexLabelLineDashType || "solid";
                        p = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof t.indexLabelWrap ? t.indexLabelWrap : !0;
                        q = t.dataPointIds[y];
                        w._eventManager.objectMap[q] = {
                            id: q,
                            objectType: "dataPoint",
                            dataPointIndex: y,
                            dataSeriesIndex: 0,
                            funnelSection: R[t.reversed ? x.length - 1 - y : y]
                        };
                        "inside" === t.indexLabelPlacement && (A[y] = y !== da ? t.reversed ? R[y].x2 - R[y].x1 : R[y].x3 - R[y].x4 : R[y].x3 - R[y].x6, 20 > A[y] && (A[y] = y !== da ? t.reversed ? R[y].x3 - R[y].x4 : R[y].x2 - R[y].x1 :
                            R[y].x2 - R[y].x1, A[y] /= 2));
                        q = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth : A[y];
                        if (q > A[y] || 0 > q) q = A[y];
                        z[y] = "inside" === t.indexLabelPlacement ? R[y].height : !1;
                        v = w.getPercentAndTotal(t, b);
                        if (t.indexLabelFormatter || b.indexLabelFormatter) C = {
                            chart: w.options,
                            dataSeries: t,
                            dataPoint: b,
                            total: v.total,
                            percent: v.percent
                        };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(C) : b.indexLabel ? w.replaceKeywordsWithValue(b.indexLabel, b, t, y) : t.indexLabelFormatter ? t.indexLabelFormatter(C) :
                            t.indexLabel ? w.replaceKeywordsWithValue(t.indexLabel, b, t, y) : b.label ? b.label : "";
                        0 >= n && (n = 0);
                        1E3 > q && 1E3 - q < u && (q += 1E3 - q);
                        S.roundRect || Ba(S);
                        c = new la(S, {
                            fontSize: f,
                            fontFamily: l,
                            fontColor: e,
                            fontStyle: h,
                            fontWeight: k,
                            horizontalAlign: c,
                            backgroundColor: d,
                            maxWidth: q,
                            maxHeight: !1 === z[y] ? p ? 4.28571429 * f : 1.5 * f : z[y],
                            text: b,
                            padding: ea
                        });
                        c.measureText();
                        H.push({
                            textBlock: c,
                            id: t.reversed ? B : y,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: n,
                            lineDashType: m,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ?
                                c.width : c.maxWidth
                        })
                    }
                }
            }

            function e() {
                var a, b, c, d, e, f = [];
                e = !1;
                c = 0;
                for (var g, h = N - aa - W / 2, h = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth > h ? h : t.indexLabelMaxWidth : h, l = H.length - 1; 0 <= l; l--) {
                    g = x[H[l].id];
                    c = H[l];
                    d = c.textBlock;
                    b = (a = q(l) < R.length ? H[q(l)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + ea > b.y && (e = !0);
                    c = g.indexLabelMaxWidth || h;
                    if (c > h || 0 > c) c = h;
                    f.push(c)
                }
                if (e)
                    for (l = H.length - 1; 0 <= l; l--) a = R[l], H[l].textBlock.maxWidth = f[f.length - (l + 1)], H[l].textBlock.measureText(), H[l].textBlock.x = N - h, c = H[l].textBlock.height <
                        H[l].textBlock.maxHeight ? H[l].textBlock.height : H[l].textBlock.maxHeight, e = H[l].textBlock.width < H[l].textBlock.maxWidth ? H[l].textBlock.width : H[l].textBlock.maxWidth, H[l].height = c, H[l].width = e, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, H[l].textBlock.y = c - H[l].height / 2, t.reversed ? (H[l].textBlock.y + H[l].height > U + D && (H[l].textBlock.y = U + D - H[l].height), H[l].textBlock.y < sa - D && (H[l].textBlock.y = sa - D)) : (H[l].textBlock.y < U - D && (H[l].textBlock.y = U - D), H[l].textBlock.y + H[l].height > sa + D && (H[l].textBlock.y =
                            sa + D - H[l].height))
            }

            function f() {
                var a, b, c, d;
                if ("inside" !== t.indexLabelPlacement)
                    for (var e = 0; e < R.length; e++) 0 == H[e].textBlock.text.length ? H[e].isDirty = !0 : (a = R[e], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = t.reversed ? "undefined" !== typeof a.x5 ? c > xa ? g(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < xa ? g(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, H[e].textBlock.x = b + W, H[e].textBlock.y = c - H[e].height / 2, t.reversed ? (H[e].textBlock.y + H[e].height > U + D && (H[e].textBlock.y = U + D - H[e].height),
                        H[e].textBlock.y < sa - D && (H[e].textBlock.y = sa - D)) : (H[e].textBlock.y < U - D && (H[e].textBlock.y = U - D), H[e].textBlock.y + H[e].height > sa + D && (H[e].textBlock.y = sa + D - H[e].height)));
                else
                    for (e = 0; e < R.length; e++) 0 == H[e].textBlock.text.length ? H[e].isDirty = !0 : (a = R[e], b = a.height, c = H[e].height, d = H[e].width, b >= c ? (b = e != da ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2, c = e != da ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, H[e].textBlock.x = b, H[e].textBlock.y = c) : H[e].isDirty = !0)
            }

            function l() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= H.length) return 0;
                    var e, f = H[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = n(b);
                        d = k(e, b);
                        if (d >= c) return f.y -= c, c;
                        if (0 == b) return 0 < d && (f.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -= d);
                        return d
                    }
                    e = q(b);
                    d = k(b, e);
                    if (d >= c) return f.y += c, c;
                    if (b == R.length - 1) return 0 < d && (f.y += d), d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d
                }

                function b() {
                    var a, d, e, f, g = 0,
                        h;
                    f = (T - $ + 2 * D) / m;
                    h = m;
                    for (var l, k = 1; k < h; k++) {
                        e = k * f;
                        for (var p = H.length - 1; 0 <= p; p--) !H[p].isDirty && (H[p].textBlock.y < e && H[p].textBlock.y + H[p].height > e) && (l = q(p), !(l >= H.length - 1) && H[p].textBlock.y + H[p].height + ea > H[l].textBlock.y &&
                            (H[p].textBlock.y = H[p].textBlock.y + H[p].height - e > e - H[p].textBlock.y ? e + 1 : e - H[p].height - 1))
                    }
                    for (l = R.length - 1; 0 < l; l--)
                        if (!H[l].isDirty) {
                            e = n(l);
                            if (0 > e && (e = 0, H[e].isDirty)) break;
                            if (H[l].textBlock.y < H[e].textBlock.y + H[e].height) {
                                d = d || l;
                                f = l;
                                for (h = 0; H[f].textBlock.y < H[e].textBlock.y + H[e].height + ea;) {
                                    a = a || H[f].textBlock.y + H[f].height;
                                    h += H[f].height;
                                    h += ea;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        h += H[f].height;
                                        break
                                    }
                                    e = n(f);
                                    if (0 > e) {
                                        f = 0;
                                        h += H[f].height;
                                        break
                                    }
                                }
                                if (f != l) {
                                    g = H[f].textBlock.y;
                                    a -= g;
                                    a = h - a;
                                    g = c(a, d, f);
                                    break
                                }
                            }
                        } return g
                }

                function c(a,
                    b, d) {
                    var e = [],
                        f = 0,
                        g = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(R[d]);
                    e.sort(function(a, b) {
                        return a.height - b.height
                    });
                    for (d = 0; d < e.length; d++)
                        if (b = e[d], f < a) g++, f += H[b.id].height + ea, H[b.id].textBlock.text = "", H[b.id].indexLabelText = "", H[b.id].isDirty = !0, H[b.id].textBlock.measureText();
                        else break;
                    return g
                }
                for (var d, e, f, g, h, l, m = 1, p = 0; p < 2 * m; p++) {
                    for (var t = H.length - 1; 0 <= t && !(0 <= n(t) && n(t), f = H[t], g = f.textBlock, l = (h = q(t) < R.length ? H[q(t)] : null) ? h.textBlock : null, d = +f.height.toFixed(6), e = +g.y.toFixed(6), !f.isDirty &&
                            (h && e + d + ea > +l.y.toFixed(6)) && (d = g.y + d + ea - l.y, e = a(t, -d), e < d && (0 < e && (d -= e), e = a(q(t), d), e != d))); t--);
                    b()
                }
            }

            function k(a, b) {
                return (b < R.length ? H[b].textBlock.y : t.reversed ? U + D : sa + D) - (0 > a ? t.reversed ? sa - D : U - D : H[a].textBlock.y + H[a].height + ea)
            }

            function m(a, b, c) {
                var d, e, g, l = [],
                    k = D,
                    n = []; - 1 !== b && (0 <= Z.indexOf(b) ? (e = Z.indexOf(b), Z.splice(e, 1)) : (Z.push(b), Z = Z.sort(function(a, b) {
                    return a - b
                })));
                if (0 === Z.length) l = ja;
                else {
                    e = D * (1 != Z.length || 0 != Z[0] && Z[0] != R.length - 1 ? 2 : 1) / h();
                    for (var q = 0; q < R.length; q++) {
                        if (1 == Z.length &&
                            0 == Z[0]) {
                            if (0 === q) {
                                l.push(ja[q]);
                                d = k;
                                continue
                            }
                        } else 0 === q && (d = -1 * k);
                        l.push(ja[q] + d);
                        if (0 <= Z.indexOf(q) || q < R.length && 0 <= Z.indexOf(q + 1)) d += e
                    }
                }
                g = function() {
                    for (var a = [], b = 0; b < R.length; b++) a.push(l[b] - R[b].y1);
                    return a
                }();
                var u = {
                    startTime: (new Date).getTime(),
                    duration: c || 500,
                    easingFunction: function(a, b, c, d) {
                        return L.easing.easeOutQuart(a, b, c, d)
                    },
                    changeSection: function(a) {
                        for (var b, c, d = 0; d < R.length; d++) b = g[d], c = R[d], b *= a, "undefined" === typeof n[d] && (n[d] = 0), 0 > n && (n *= -1), c.y1 += b - n[d], c.y2 += b - n[d], c.y3 +=
                            b - n[d], c.y4 += b - n[d], c.y5 && (c.y5 += b - n[d], c.y6 += b - n[d]), n[d] = b
                    }
                };
                a._animator.animate(0, c, function(c) {
                    var d = a.plotArea.ctx || a.ctx;
                    ka = !0;
                    d.clearRect(C.x1, C.y1, C.x2 - C.x1, C.y2 - C.y1);
                    d.fillStyle = a.backgroundColor;
                    d.fillRect(C.x1, C.y1, C.width, C.height);
                    u.changeSection(c, b);
                    var e = {};
                    e.dataSeries = t;
                    e.dataPoint = t.reversed ? t.dataPoints[x.length - 1 - b] : t.dataPoints[b];
                    e.index = t.reversed ? x.length - 1 - b : b;
                    a.toolTip.highlightObjects([e]);
                    for (e = 0; e < R.length; e++) qa(d, R[e], t.fillOpacity);
                    v(d);
                    K && ("inside" !== t.indexLabelPlacement ?
                        p(d) : f(), A(d));
                    1 <= c && (ka = !1)
                }, null, L.easing.easeOutQuart)
            }

            function h() {
                for (var a = 0, b = 0; b < R.length - 1; b++)(0 <= Z.indexOf(b) || 0 <= Z.indexOf(b + 1)) && a++;
                return a
            }

            function p(a) {
                for (var b, c, d, e, f = 0; f < R.length; f++) e = 1 === H[f].lineThickness % 2 ? 0.5 : 0, c = ((R[f].y2 + R[f].y4) / 2 << 0) + e, b = g(c).x2 - 1, d = H[f].textBlock.x, e = (H[f].textBlock.y + H[f].height / 2 << 0) + e, H[f].isDirty || 0 == H[f].lineThickness || (a.strokeStyle = H[f].lineColor, a.lineWidth = H[f].lineThickness, a.setLineDash && a.setLineDash(Q(H[f].lineDashType, H[f].lineThickness)),
                    a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke())
            }

            function n(a) {
                for (a -= 1; - 1 <= a && -1 != a && H[a].isDirty; a--);
                return a
            }

            function q(a) {
                for (a += 1; a <= R.length && a != R.length && H[a].isDirty; a++);
                return a
            }

            function g(a) {
                for (var b, c = 0; c < x.length; c++)
                    if (R[c].y1 < a && R[c].y4 > a) {
                        b = R[c];
                        break
                    } return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), {
                    x1: a,
                    x2: a
                }) : -1
            }

            function A(a) {
                for (var b = 0; b < R.length; b++) H[b].isDirty || (a && (H[b].textBlock.ctx =
                    a), H[b].textBlock.render(!0))
            }

            function v(a) {
                w.plotArea.layoutManager.reset();
                a.roundRect || Ba(a);
                w.title && (w.title.dockInsidePlotArea || "center" === w.title.horizontalAlign && "center" === w.title.verticalAlign) && (w.title.ctx = a, w.title.render());
                if (w.subtitles)
                    for (var b = 0; b < w.subtitles.length; b++) {
                        var c = w.subtitles[b];
                        if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) w.subtitles.ctx = a, c.render()
                    }
                w.legend && (w.legend.dockInsidePlotArea || "center" === w.legend.horizontalAlign && "center" ===
                    w.legend.verticalAlign) && (w.legend.ctx = a, w.legend.setLayout(), w.legend.render());
                I.fNg && I.fNg(w)
            }
            var w = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var t = this.data[a.dataSeriesIndexes[0]], x = t.dataPoints, C = this.plotArea, D = 0.025 * C.width, B = 0.01 * C.width, y = 0, E = C.height - 2 * D, G = Math.min(C.width - 2 * B, 2.8 * C.height), K = !1, P = 0; P < x.length; P++)
                    if (!K && ("undefined" !== typeof x[P].indexLabel && null !== x[P].indexLabel && 0 < x[P].indexLabel.toString().length) && (K = !0), !K && ("undefined" !== typeof x[P].label && null !== x[P].label &&
                            0 < x[P].label.toString().length) && (K = !0), !K && "function" === typeof t.indexLabelFormatter || "function" === typeof x[P].indexLabelFormatter) K = !0;
                K = K || "undefined" !== typeof t.indexLabel && null !== t.indexLabel && 0 < t.indexLabel.toString().length;
                "inside" !== t.indexLabelPlacement && K || (B = (C.width - 0.75 * G) / 2);
                var P = C.x1 + B,
                    N = C.x2 - B,
                    $ = C.y1 + D,
                    T = C.y2 - D,
                    S = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != t.length && (t.dataPoints && t.visible) && 0 !== x.length) {
                    var ca, F;
                    a = 75 * G / 100;
                    var W = 30 * (N - a) / 100;
                    "funnel" === t.type ? (ca = r(t.options.neckHeight) ?
                        0.35 * E : t.neckHeight, F = r(t.options.neckWidth) ? 0.25 * a : t.neckWidth, "string" === typeof ca && ca.match(/%$/) ? (ca = parseInt(ca), ca = ca * E / 100) : ca = parseInt(ca), "string" === typeof F && F.match(/%$/) ? (F = parseInt(F), F = F * a / 100) : F = parseInt(F), ca > E ? ca = E : 0 >= ca && (ca = 0), F > a ? F = a - 0.5 : 0 >= F && (F = 0)) : "pyramid" === t.type && (F = ca = 0, t.reversed = t.reversed ? !1 : !0);
                    var B = P + a / 2,
                        X = P,
                        aa = P + a,
                        U = t.reversed ? T : $,
                        M = B - F / 2,
                        Y = B + F / 2,
                        xa = t.reversed ? $ + ca : T - ca,
                        sa = t.reversed ? $ : T;
                    a = [];
                    var B = [],
                        R = [],
                        G = [],
                        V = $,
                        da, ba = (xa - U) / (M - X),
                        fa = -ba,
                        P = "area" === (t.valueRepresents ?
                            t.valueRepresents : "height") ? c() : d();
                    if (-1 !== P) {
                        if (t.reversed)
                            for (G.push(V), F = P.length - 1; 0 < F; F--) V += P[F], G.push(V);
                        else
                            for (F = 0; F < P.length; F++) V += P[F], G.push(V);
                        if (t.reversed)
                            for (F = 0; F < P.length; F++) G[F] < xa ? (a.push(M), B.push(Y), da = F) : (a.push((G[F] - U + ba * X) / ba), B.push((G[F] - U + fa * aa) / fa));
                        else
                            for (F = 0; F < P.length; F++) G[F] < xa ? (a.push((G[F] - U + ba * X) / ba), B.push((G[F] - U + fa * aa) / fa), da = F) : (a.push(M), B.push(Y));
                        for (F = 0; F < P.length - 1; F++) V = t.reversed ? x[x.length - 1 - F].color ? x[x.length - 1 - F].color : t._colorSet[(x.length -
                            1 - F) % t._colorSet.length] : x[F].color ? x[F].color : t._colorSet[F % t._colorSet.length], F === da ? R.push({
                            x1: a[F],
                            y1: G[F],
                            x2: B[F],
                            y2: G[F],
                            x3: Y,
                            y3: xa,
                            x4: B[F + 1],
                            y4: G[F + 1],
                            x5: a[F + 1],
                            y5: G[F + 1],
                            x6: M,
                            y6: xa,
                            id: F,
                            height: G[F + 1] - G[F],
                            color: V
                        }) : R.push({
                            x1: a[F],
                            y1: G[F],
                            x2: B[F],
                            y2: G[F],
                            x3: B[F + 1],
                            y3: G[F + 1],
                            x4: a[F + 1],
                            y4: G[F + 1],
                            id: F,
                            height: G[F + 1] - G[F],
                            color: V
                        });
                        var ea = 2,
                            H = [],
                            ka = !1,
                            Z = [],
                            ja = [],
                            P = !1;
                        a = a = 0;
                        Ca(Z);
                        for (F = 0; F < x.length; F++) x[F].exploded && (P = !0, t.reversed ? Z.push(x.length - 1 - F) : Z.push(F));
                        S.clearRect(C.x1, C.y1, C.width,
                            C.height);
                        S.fillStyle = w.backgroundColor;
                        S.fillRect(C.x1, C.y1, C.width, C.height);
                        if (K && t.visible && (b(), f(), e(), "inside" !== t.indexLabelPlacement)) {
                            l();
                            for (F = 0; F < x.length; F++) H[F].isDirty || (a = H[F].textBlock.x + H[F].width, a = (N - a) / 2, 0 == F && (y = a), y > a && (y = a));
                            for (F = 0; F < R.length; F++) R[F].x1 += y, R[F].x2 += y, R[F].x3 += y, R[F].x4 += y, R[F].x5 && (R[F].x5 += y, R[F].x6 += y), H[F].textBlock.x += y
                        }
                        for (F = 0; F < R.length; F++) y = R[F], qa(S, y, t.fillOpacity), ja.push(y.y1);
                        v(S);
                        K && t.visible && ("inside" === t.indexLabelPlacement || w.animationEnabled ||
                            p(S), w.animationEnabled || A());
                        if (!K)
                            for (F = 0; F < x.length; F++) y = t.dataPointIds[F], a = {
                                id: y,
                                objectType: "dataPoint",
                                dataPointIndex: F,
                                dataSeriesIndex: 0,
                                funnelSection: R[t.reversed ? x.length - 1 - F : F]
                            }, w._eventManager.objectMap[y] = a;
                        !w.animationEnabled && P ? m(w, -1, 0) : w.animationEnabled && !w.animatedRender && m(w, -1, 0);
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            if (!ka && !w.isAnimating && (r(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = t.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <=
                                    b)) {
                                a = b;
                                if ("funnel" === t.type || "pyramid" === t.type) t.reversed ? x[x.length - 1 - a].exploded = x[x.length - 1 - a].exploded ? !1 : !0 : x[a].exploded = x[a].exploded ? !1 : !0;
                                m(w, b, 500)
                            }
                        };
                        return {
                            source: S,
                            dest: this.plotArea.ctx,
                            animationCallback: function(a, b) {
                                L.fadeInAnimation(a, b);
                                1 <= a && (m(w, -1, 500), v(w.plotArea.ctx || w.ctx))
                            },
                            easingFunction: L.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        };
        m.prototype.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
                    window.setTimeout(a, 1E3 / 60)
                }
        }();
        m.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        m.prototype.set = function(a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            "options" === a ? (this.options = d, c && this.render()) : m.base.set.call(this, a, d, c)
        };
      
        m.prototype.print = function() {
            var a = this.exportChart({
                    toDataURL: !0
                }),
                d = document.createElement("iframe");
            d.setAttribute("class", "muthootjs-chart-print-frame");
            d.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            d.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(d);
            var c = this,
                b = d.contentWindow || d.contentDocument.document || d.contentDocument;
            b.document.open();
            b.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img style="display:none;" src="' +
                a + '"/><body/></html>');
            b.document.close();
            setTimeout(function() {
                b.focus();
                b.print();
                setTimeout(function() {
                    c._canvasJSContainer.removeChild(d)
                }, 1E3)
            }, 500)
        };
        m.prototype.getPercentAndTotal = function(a, d) {
            var c = null,
                b = null,
                e = null;
            if (0 <= a.type.indexOf("stacked")) b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], e = isNaN(d.y) ? 0 : 100 * (d.y / b));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) ||
                    (b += a.dataPoints[c].y);
                e = isNaN(d.y) ? 0 : 100 * (d.y / b)
            }
            return {
                percent: e,
                total: b
            }
        };
        m.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
            var f = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var l = "#percent",
                    k = "#total",
                    m = this.getPercentAndTotal(c, d),
                    k = isNaN(m.total) ? k : m.total,
                    l = isNaN(m.percent) ? l : m.percent;
                do {
                    m = "";
                    if (c.percentFormatString) m = c.percentFormatString;
                    else {
                        var m = "#,##0.",
                            h = Math.max(Math.ceil(Math.log(1 / Math.abs(l)) / Math.LN10), 2);
                        if (isNaN(h) || !isFinite(h)) h = 2;
                        for (var p = 0; p < h; p++) m += "#";
                        c.percentFormatString = m
                    }
                    a = a.replace("#percent", fa(l, m, f._cultureInfo));
                    a = a.replace("#total", fa(k, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1,
                    a.length - 1);
                a = Fa(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var h = null;
                try {
                    var g = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    g && 0 < g.length && (h = Fa(g[2]), a = Fa(g[1]))
                } catch (l) {}
                g = null;
                if ("color" === a) return "waterfall" === c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[h % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
                if (d.hasOwnProperty(a)) g = d;
                else if (c.hasOwnProperty(a)) g = c;
                else return "";
                g = g[a];
                null !== h && (g = g[h]);
                if ("x" === a)
                    if ("dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) {
                        if (!c.axisX.logarithmic) return Aa(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo)
                    } else return fa(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", f._cultureInfo);
                else return "y" ===
                    a ? fa(g, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", f._cultureInfo) : "z" === a ? fa(g, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", f._cultureInfo) : g
            })
        };
        oa(E, X);
        E.prototype.setLayout = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                c = null,
                b = 0,
                e = 0,
                f = 0,
                l = 0,
                k = this.markerMargin = this.chart.options.legend &&
                !r(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var m = [],
                h = [];
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? (this.orientation = "horizontal", c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height) : "center" === this.verticalAlign && (this.orientation = "vertical", c = this.horizontalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 *
                d.width, l = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height);
            this.errorMarkerColor = [];
            for (var p = 0; p < this.dataSeries.length; p++) {
                var n = this.dataSeries[p];
                if (n.dataPoints && n.dataPoints.length)
                    if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                        var q = n.legendMarkerType = n.legendMarkerType ? n.legendMarkerType : "line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type || !n.markerType ? "error" === n.type && n._linkedSeries ? n._linkedSeries.legendMarkerType ?
                            n._linkedSeries.legendMarkerType : G.getDefaultLegendMarker(n._linkedSeries.type) : G.getDefaultLegendMarker(n.type) : n.markerType,
                            g = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                chart: this.chart,
                                legend: this.options,
                                dataSeries: n,
                                dataPoint: null
                            }) : n.name,
                            A = n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? r(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor : n._colorSet[0],
                            s = n.markerSize || "line" !== n.type && "stepLine" !== n.type && "spline" !==
                            n.type ? 0.75 * this.lineHeight : 0,
                            v = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor,
                            t = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0;
                        "error" === n.type && this.errorMarkerColor.push(A);
                        g = this.chart.replaceKeywordsWithValue(g, n.dataPoints[0], n, p);
                        q = {
                            markerType: q,
                            markerColor: A,
                            text: g,
                            textBlock: null,
                            chartType: n.type,
                            markerSize: s,
                            lineColor: n._colorSet[0],
                            dataSeriesIndex: n.index,
                            dataPointIndex: null,
                            markerBorderColor: v,
                            markerBorderThickness: t
                        };
                        m.push(q)
                    } else
                        for (var x = 0; x < n.dataPoints.length; x++) {
                            var w = n.dataPoints[x],
                                q = w.legendMarkerType ? w.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : G.getDefaultLegendMarker(n.type),
                                g = w.legendText ? w.legendText : n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({
                                    chart: this.chart,
                                    legend: this.options,
                                    dataSeries: n,
                                    dataPoint: w
                                }) : w.name ? w.name : "DataPoint: " + (x + 1),
                                A = w.legendMarkerColor ? w.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : w.color ?
                                w.color : n.color ? n.color : n._colorSet[x % n._colorSet.length],
                                s = 0.75 * this.lineHeight,
                                v = w.legendMarkerBorderColor ? w.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : w.markerBorderColor ? w.markerBorderColor : n.markerBorderColor,
                                t = w.legendMarkerBorderThickness ? w.legendMarkerBorderThickness : n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : w.markerBorderThickness || n.markerBorderThickness ? Math.max(1, Math.round(0.2 * s)) : 0,
                                g = this.chart.replaceKeywordsWithValue(g, w, n, x),
                                q = {
                                    markerType: q,
                                    markerColor: A,
                                    text: g,
                                    textBlock: null,
                                    chartType: n.type,
                                    markerSize: s,
                                    dataSeriesIndex: p,
                                    dataPointIndex: x,
                                    markerBorderColor: v,
                                    markerBorderThickness: t
                                };
                            (w.showInLegend || n.showInLegend && !1 !== w.showInLegend) && m.push(q)
                        }
            }!0 === this.reversed && m.reverse();
            if (0 < m.length) {
                n = null;
                A = g = w = x = 0;
                w = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f;
                s = 0 === s ? 0.75 *
                    this.lineHeight : s;
                w -= s + k;
                for (p = 0; p < m.length; p++) {
                    q = m[p];
                    v = w;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) v -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= l || "undefined" === typeof l || 0 >= v || "undefined" === typeof v)) {
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new la(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: v,
                                maxHeight: this.itemWrap ? l : this.lineHeight,
                                angle: 0,
                                text: q.text,
                                horizontalAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle"
                            });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (s + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!n || n.width + Math.round(q.textBlock.width + s + k + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) n = {
                                items: [],
                                width: 0
                            }, h.push(n), this.height += g, g = 0;
                            g = Math.max(g, q.textBlock.height)
                        } else q.textBlock = new la(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: w,
                            maxHeight: !0 === this.itemWrap ? l : 1.5 * this.fontSize,
                            angle: 0,
                            text: q.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (s + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < l - this.lineHeight ? (n = {
                                items: [],
                                width: 0
                            },
                            h.push(n)) : (n = h[x], x = (x + 1) % h.length), this.height += q.textBlock.height;
                        q.textBlock.x = n.width;
                        q.textBlock.y = 0;
                        n.width += Math.round(q.textBlock.width + s + k + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        n.items.push(q);
                        this.width = Math.max(n.width, this.width);
                        A = q.textBlock.width + (s + k + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = A;
                this.height = !1 === this.itemWrap ?
                    h.length * this.lineHeight : this.height + g;
                this.height = Math.min(l, this.height);
                this.width = Math.min(f, this.width)
            }
            "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 :
                "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
            this.items = m;
            for (p = 0; p < this.items.length; p++) q = m[p], q.id = ++this.chart._eventManager.lastObjectId, this.chart._eventManager.objectMap[q.id] = {
                id: q.id,
                objectType: "legendItem",
                legendItemIndex: p,
                dataSeriesIndex: q.dataSeriesIndex,
                dataPointIndex: q.dataPointIndex
            };
            this.markerSize = s;
            this.rows = h;
            0 < m.length && a.layoutManager.registerSpace(c, {
                width: this.width + 2 + 2,
                height: this.height + 5 + 5
            });
            this.bounds = {
                x1: e,
                y1: b,
                x2: e + this.width,
                y2: b + this.height
            }
        };
        E.prototype.render = function() {
            var a = this.bounds.x1,
                d = this.bounds.y1,
                c = this.markerMargin,
                b = this.maxWidth,
                e = this.maxHeight,
                f = this.markerSize,
                l = this.rows;
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var k = 0, m = 0; m < l.length; m++) {
                for (var h = l[m], p = 0, n = 0; n < h.items.length; n++) {
                    var q = h.items[n],
                        g = q.textBlock.x + a + (0 === n ? 0.2 * f : this.horizontalSpacing),
                        r = d + k,
                        s = g;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, r + this.lineHeight / 2), this.ctx.lineTo(g + 0.85 * this.lineHeight, r + this.lineHeight / 2), this.ctx.stroke(), s -=
                        0.1 * this.lineHeight;
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = f / 8;
                        this.ctx.beginPath();
                        var v = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            t = r + 0.15 * this.lineHeight,
                            x = 0.7 * this.lineHeight,
                            w = x + 0.02 * this.lineHeight;
                        this.ctx.moveTo(v, t);
                        this.ctx.lineTo(v + x, t);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(v + x / 2, t);
                        this.ctx.lineTo(v + x / 2, t + w);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(v, t + w);
                        this.ctx.lineTo(v + x, t + w);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift()
                    }
                    Y.drawMarker(g +
                        f / 2, r + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor, q.markerBorderColor, q.markerBorderThickness);
                    q.textBlock.x = g + c + f;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(r + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    p = 0 < n ? Math.max(p, q.textBlock.height) : q.textBlock.height;
                    this.chart.data[q.dataSeriesIndex].visible ||
                        (this.ctx.globalAlpha = 1);
                    g = S(q.id);
                    this.ghostCtx.fillStyle = g;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight / 2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight /
                        2
                }
                k += p
            }
        };
        oa(G, X);
        G.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" === a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" ===
                a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        };
        G.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" ===
                a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        G.prototype.getDataPointAtX = function(a, d) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var c = {
                    dataPoint: null,
                    distance: Infinity,
                    index: NaN
                },
                b = null,
                e = 0,
                f = 0,
                l = 1,
                k = Infinity,
                m = 0,
                h = 0,
                p = 0;
            "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ? (p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), p = 1 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, p = 0 < p ? Math.min(Math.max((this.dataPoints.length - 1) / p * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (;;) {
                f =
                    0 < l ? p + e : p - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var b = this.dataPoints[f],
                        n = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x : Math.abs(b.x - a);
                    n < c.distance && (c.dataPoint = b, c.distance = n, c.index = f);
                    b = n;
                    b <= k ? k = b : 0 < l ? m++ : h++;
                    if (1E3 < m && 1E3 < h) break
                } else if (0 > p - e && p + e >= this.dataPoints.length) break; - 1 === l ? (e++, l = 1) : l = -1
            }
            return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c
        };
        G.prototype.getDataPointAtXY = function(a, d, c) {
            if (!this.dataPoints || 0 ===
                this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            c = c || !1;
            var b = [],
                e = 0,
                f = 0,
                l = 1,
                k = !1,
                m = Infinity,
                h = 0,
                p = 0,
                n = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({
                        x: a,
                        y: d
                    }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                    n = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(n /
                        this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * (n - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                f = 0 < l ? n + e : n - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                        g = this.dataPoints[f],
                        r = null;
                    if (q) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >=
                                    q.x1 && (a <= q.x2 && d >= q.y1 && d <= q.y2) && (b.push({
                                        dataPoint: g,
                                        dataPointIndex: f,
                                        dataSeries: this,
                                        distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d))
                                    }), k = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var s = ma("markerSize", g, this) || 4,
                                    v = c ? 20 : s,
                                    r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                r <= v && b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: r
                                });
                                q =
                                    Math.abs(q.x1 - a);
                                q <= m ? m = q : 0 < l ? h++ : p++;
                                r <= s / 2 && (k = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                s = ma("markerSize", g, this) || 4;
                                v = c ? 20 : s;
                                r = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                                r <= v && b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: r
                                });
                                q = Math.abs(q.x1 - a);
                                q <= m ? m = q : 0 < l ? h++ : p++;
                                r <= s / 2 && (k = !0);
                                break;
                            case "bubble":
                                s = q.size;
                                r = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                r <= s / 2 && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: r
                                }), k = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                s = q.center;
                                v = "doughnut" === this.type ? q.percentInnerRadius * q.radius : 0;
                                r = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - d, 2));
                                r < q.radius && r > v && (r = Math.atan2(d - s.y, a - s.x), 0 > r && (r += 2 * Math.PI), r = Number(((180 * (r / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), v = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === v && 1 < q.endAngle && (v = 360), s >= v && 0 !== g.y && (v += 360, r < s && (r += 360)), r > s && r < v && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: 0
                                }), k = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                r = q.funnelSection;
                                d > r.y1 && d < r.y4 && (r.y6 ? d > r.y6 ? (f = r.x6 + (r.x5 - r.x6) / (r.y5 - r.y6) * (d - r.y6), r = r.x3 + (r.x4 - r.x3) / (r.y4 - r.y3) * (d - r.y3)) : (f = r.x1 + (r.x6 - r.x1) / (r.y6 - r.y1) * (d - r.y1), r = r.x2 + (r.x3 - r.x2) / (r.y3 - r.y2) * (d - r.y2)) : (f = r.x1 + (r.x4 - r.x1) / (r.y4 - r.y1) * (d - r.y1), r = r.x2 + (r.x3 - r.x2) / (r.y3 - r.y2) * (d - r.y2)), a > f && a < r && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: q.dataPointIndex,
                                    dataSeries: this,
                                    distance: 0
                                }), k = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >=
                                    q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                                }), k = !0;
                                break;
                            case "candlestick":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness &&
                                    d >= q.y1 && d <= q.y4) b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                                }), k = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2) b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a),
                                        Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                                }), k = !0
                        }
                        if (k || 1E3 < h && 1E3 < p) break
                    }
                } else if (0 > n - e && n + e >= this.dataPoints.length) break; - 1 === l ? (e++, l = 1) : l = -1
            }
            a = null;
            for (d = 0; d < b.length; d++) a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
            return a
        };
        G.prototype.getMarkerProperties = function(a, d, c, b) {
            var e = this.dataPoints;
            return {
                x: d,
                y: c,
                ctx: b,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        oa(D, X);
        D.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) <
                    this.noTicks - 1) {
                    for (var c = D.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
                    this.logLabelValues.sort(Pa);
                    this.createExtraLabelsForLog(a)
                }
            }
        };
        D.prototype.createLabels = function() {
            var a, d, c = 0,
                b = 0,
                e, f = 0,
                l = 0,
                b = 0,
                b = this.interval,
                k = 0,
                m, h = 0.6 * this.chart.height,
                p;
            a = !1;
            var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                q = n.length ? r(this.scaleBreaks.firstBreakIndex) ?
                0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(b);
                    for (var b = Math.ceil(this.intervalStartPosition), g = !1, c = b; c < this.viewportMaximum; c += a)
                        if (this.labels[c]) g = !0;
                        else {
                            g = !1;
                            break
                        } g && (this.interval = a, this.intervalStartPosition = b)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, g = q; b < this.logLabelValues.length; b++)
                        if (c =
                            this.logLabelValues[b], c < this.viewportMinimum) b++;
                        else {
                            for (; g < n.length && c > n[g].endValue; g++);
                            a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
                            p = c;
                            a || (a = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.options,
                                value: p,
                                label: this.labels[p] ? this.labels[p] : null
                            }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: f,
                                maxHeight: l,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                cornerRadius: this.labelCornerRadius,
                                textAlign: this.labelTextAlign,
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({
                                position: p,
                                textBlock: a,
                                effectiveHeight: null
                            }))
                        } g = q;
                for (c = this.intervalStartPosition; c <= e; c = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase,
                        this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12))) {
                    for (; g < n.length && c > n[g].endValue; g++);
                    a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
                    p = c;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.options,
                        value: p,
                        label: this.labels[p] ? this.labels[p] : null
                    }) : "axisX" === this.type && this.labels[p] ? this.labels[p] : fa(p, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: l,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({
                        position: p,
                        textBlock: a,
                        effectiveHeight: null
                    }))
                }
            } else
                for (this.intervalStartPosition =
                    this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval), e = Va(new Date(this.viewportMaximum), this.interval, this.intervalType), g = q, c = this.intervalStartPosition; c < e; Va(c, b, this.intervalType)) {
                    for (a = c.getTime(); g < n.length && a > n[g].endValue; g++);
                    p = a;
                    a = g < n.length && a >= n[g].startValue && a <= n[g].endValue;
                    a || (a = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.options,
                            value: new Date(p),
                            label: this.labels[p] ? this.labels[p] : null
                        }) : "axisX" === this.type && this.labels[p] ?
                        this.labels[p] : Aa(p, this.valueFormatString, this.chart._cultureInfo), a = new la(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: f,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: l,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle"
                        }), this._labels.push({
                            position: p,
                            textBlock: a,
                            effectiveHeight: null,
                            breaksLabelType: void 0
                        }))
                }
            if ("bottom" === this._position || "top" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ?
                Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (l = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) k = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height *
                Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * T[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), l = "undefined" ===
                typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
            for (b = 0; b < this._labels.length; b++) {
                a = this._labels[b].textBlock;
                a.maxWidth = f;
                a.maxHeight = l;
                var A = a.measureText();
                m = A.height
            }
            e = [];
            q = n = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (r(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position ||
                    "top" === this._position)
                    if (f = 0.9 * k >> 0, q = 0, !this.chart.panEnabled && 1 <= this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = l;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (c = 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                for (var v, g = a.text.split(" "), b = 0; b < g.length; b++) p = g[b], this.ctx.font = a.fontStyle + " " +
                                    a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, p = this.ctx.measureText(p), p.width > q && (v = c, q = p.width)
                            } c = 0;
                        for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                A = a.measureText();
                                for (g = c + 1; g < this._labels.length; g++)
                                    if (!this._labels[g].breaksLabelType) {
                                        d = this._labels[g].textBlock;
                                        d = d.measureText();
                                        break
                                    } e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), p = (h - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI /
                                            180 * Math.abs(-25)), !r(this.options.labelWrap)) this.labelWrap ? r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), p), this.sessionVariables.labelWrap = this.labelWrap, d && A.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : r(this.options.labelMaxWidth) ?
                                        (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = f, d && A.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (r(this.options.labelWrap))
                                            if (!r(this.options.labelMaxWidth)) this.options.labelMaxWidth <
                                                f ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = l);
                                            else if (!r(d))
                                            if (b = A.width + d.width >> 0, g = this.labelFontSize, q < f) b - 2 * f > n && (n = b - 2 * f, b >= 2 * f && b < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, r(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * f && b < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = g) : b >= 2.8 * f && b < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, q), this.sessionVariables.labelWrap = !0, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * f && b < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * f && b < 5 * f ? (r(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p) : b > 5 * f && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = g, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = this.labelAngle));
                                            else if (v === c && (0 === v && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > n || v === this._labels.length - 1 && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > n || 0 < v && v < this._labels.length - 1 && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > n &&
                                                q + this._labels[v - 1].textBlock.measureText().width - 2 * f > n)) n = 0 === v ? q + this._labels[v + 1].textBlock.measureText().width - 2 * f : q + this._labels[v - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = p;
                                        else if (0 === n)
                                            for (this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), p), A = a.measureText(), b < this._labels.length - 1 && (g = b + 1, d = this._labels[g].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), p), d = d.measureText(), A.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                    }
                                else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : Math.min((b - f * Math.cos(Math.PI /
                                    180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), p = 0 != this.labelAngle ? (h - (m + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, this.sessionVariables.labelMaxHeight = l = this.labelWrap ? (h - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ?
                                    (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = p, this.sessionVariables.labelMaxHeight = b < 0.9 * k ? 0.9 * k : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                    this.options.labelMaxWidth : p) : (r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : p, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = l)
                            } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                            this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight,
                            a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (f = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, l = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = f;
                    this.sessionVariables.labelMaxHeight = l;
                    this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ?
                        0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (c = 0; c < this._labels.length; c++)
                        if (!this._labels[c].breaksLabelType) {
                            a = this._labels[c].textBlock;
                            A = a.measureText();
                            for (g = c + 1; g < this._labels.length; g++)
                                if (!this._labels[g].breaksLabelType) {
                                    d = this._labels[g].textBlock;
                                    d = d.measureText();
                                    break
                                } e.push(a.height);
                            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                            b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (l - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                            r(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? r(this.options.labelWrap) ? r(this.options.labelWrap) && (r(this.options.labelMaxWidth) ? r(d) || (k = A.height + d.height >> 0, k - 2 * l > q && (q = k - 2 * l, k >= 2 * l && k < 2.4 * l ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelFontSize =
                                r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : k >= 2.4 * l && k < 2.8 * l ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : k >= 2.8 * l && k < 3.2 * l ? (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelWrap = !0, r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k >= 3.2 * l && k < 3.6 * l ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : k > 3.6 * l && k < 10 * l ? (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : k > 10 * l && k < 50 * l && (r(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = r(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                                l, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = r(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = l, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                                this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = l) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((b - l * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), l), r(this.options.labelWrap)) ? r(this.options.labelWrap) && (this.labelWrap && !r(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth :
                                this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, r(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? l : b, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth =
                                f) : (this.sessionVariables.labelMaxHeight = l, r(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                        } for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap =
                        this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = r(this.options.labelMaxWidth) ? r(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = r(this.options.labelFontSize) ? r(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize =
                        this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = r(this.options.labelAngle) ? r(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = r(this.options.labelWrap) ? r(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = r(this.sessionVariables.labelMaxHeight) ?
                        this.sessionVariables.labelMaxHeight = l : this.sessionVariables.labelMaxHeight, a.measureText();
            for (c = 0; c < this.stripLines.length; c++) {
                var f = this.stripLines[c],
                    w;
                if ("outside" === f.labelPlacement) {
                    l = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) r(f.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? w = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = w = f.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) r(f.options.labelWrap) && !r(this.sessionVariables.stripLineLabelMaxHeight) ? w = this.sessionVariables.stripLineLabelMaxHeight : this.sessionVariables.stripLineLabelMaxHeight = w = f.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    r(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE")
                } else l = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, w = r(f.options.labelWrap) || f.labelWrap ? "bottom" === this._position ||
                    "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, r(f.labelBackgroundColor) && (r(f.startValue) && 0 !== f.startValue ? f.labelBackgroundColor = s ? "transparent" : null : f.labelBackgroundColor = "#EEEEEE");
                a = new la(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: f.labelBackgroundColor,
                    borderColor: f.labelBorderColor,
                    borderThickness: f.labelBorderThickness,
                    cornerRadius: f.labelCornerRadius,
                    maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : l,
                    maxHeight: w,
                    angle: this.labelAngle,
                    text: f.labelFormatter ?
                        f.labelFormatter({
                            chart: this.chart,
                            axis: this,
                            stripLine: f
                        }) : f.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === f.labelPlacement ? f.options.labelFontSize ? f.labelFontSize : this.labelFontSize : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight : f.labelFontWeight,
                    fontColor: f.labelFontColor || f.color,
                    fontStyle: "outside" ===
                        f.labelPlacement ? f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight : f.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({
                    position: f.value,
                    textBlock: a,
                    effectiveHeight: null,
                    stripLine: f
                })
            }
        };
        D.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0,
                d = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var c = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (d =
                        0; d < this._labels.length; d++) {
                        var b = this._labels[d].textBlock,
                            e = b.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[d].effectiveWidth = f
                    }
                for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) &&
                    (b = this._stripLineLabels[d].textBlock, e = b.measureText(), f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[d].effectiveWidth = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
        };
        D.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var d, c = 0,
                b = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (c = 0; c < this._labels.length; c++) {
                        d = this._labels[c].textBlock;
                        var e = d.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[c].effectiveHeight = f
                    }
                for (c = 0; c < this._stripLineLabels.length; c++) "outside" ===
                    this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock, e = d.measureText(), f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[c].effectiveHeight = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height +
                2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
        };
        D.setLayout = function(a, d, c, b, e, f) {
            var l, k, m, h, p = a[0] ? a[0].chart : d[0].chart,
                n = p.isNavigator ? 0 : 10,
                q = p._axes;
            if (a && 0 < a.length)
                for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
            if (d && 0 < d.length)
                for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
            if (c && 0 < c.length)
                for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
            if (b && 0 < b.length)
                for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
            for (g = 0; g < q.length; g++)
                if (q[g] && q[g].scaleBreaks &&
                    q[g].scaleBreaks._appliedBreaks.length)
                    for (var A = q[g].scaleBreaks._appliedBreaks, s = 0; s < A.length && !(A[s].startValue > q[g].viewportMaximum); s++) A[s].endValue < q[g].viewportMinimum || (r(q[g].scaleBreaks.firstBreakIndex) && (q[g].scaleBreaks.firstBreakIndex = s), A[s].startValue >= q[g].viewPortMinimum && (q[g].scaleBreaks.lastBreakIndex = s));
            for (var v = s = 0, t = 0, x = 0, w = 0, D = 0, B = 0, y, E, G = k = 0, I, P, L, A = I = P = L = !1, g = 0; g < q.length; g++) q[g] && q[g].title && (q[g]._titleTextBlock = new la(q[g].ctx, {
                text: q[g].title,
                horizontalAlign: "center",
                fontSize: q[g].titleFontSize,
                fontFamily: q[g].titleFontFamily,
                fontWeight: q[g].titleFontWeight,
                fontColor: q[g].titleFontColor,
                fontStyle: q[g].titleFontStyle,
                borderColor: q[g].titleBorderColor,
                borderThickness: q[g].titleBorderThickness,
                backgroundColor: q[g].titleBackgroundColor,
                cornerRadius: q[g].titleCornerRadius,
                textBaseline: "top"
            }));
            for (g = 0; g < q.length; g++)
                if (q[g].title) switch (q[g]._position) {
                    case "left":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ?
                            0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = 90;
                        break;
                    default:
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.width, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.height : 1.5 * q[g].titleFontSize, q[g]._titleTextBlock.angle = 0
                }
            if ("normal" === e) {
                for (var x = [], w = [], D = [], B = [], N = [], Q = [], S = [], T = []; 4 >
                    s;) {
                    var F = 0,
                        W = 0,
                        U = 0,
                        X = 0,
                        Z = e = 0,
                        M = 0,
                        aa = 0,
                        V = 0,
                        Y = 0,
                        R = 0,
                        ba = 0;
                    if (c && 0 < c.length)
                        for (D = [], g = R = 0; g < c.length; g++) D.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), R += D[g], M += c[g] && !p.isNavigator ? c[g].margin : 0;
                    else D.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    S.push(D);
                    if (b && 0 < b.length)
                        for (B = [], g = ba = 0; g < b.length; g++) B.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), ba += B[g], aa += b[g] ? b[g].margin : 0;
                    else B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    T.push(B);
                    l = Math.round(f.x1 + R + M);
                    m = Math.round(f.x2 - ba - aa > p.width - n ? p.width - n : f.x2 - ba - aa);
                    if (a && 0 < a.length)
                        for (x = [], g = V = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width = Math.abs(m - l), a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), x.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), V += x[g], e += a[g] && !p.isNavigator ? a[g].margin : 0;
                    else x.push(Math.ceil(a[0] ?
                        a[0].createLabelsAndCalculateHeight() : 0));
                    N.push(x);
                    if (d && 0 < d.length)
                        for (w = [], g = Y = 0; g < d.length; g++) d[g] && (d[g].lineCoordinates = {}), d[g].lineCoordinates.width = Math.abs(m - l), d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width), w.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)), Y += w[g], Z += d[g] && !p.isNavigator ? d[g].margin : 0;
                    else w.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() :
                        0));
                    Q.push(w);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = l, m = Math.round(f.x2 - ba - aa > p.width - n ? p.width - n : f.x2 - ba - aa), a[g]._labels && 1 < a[g]._labels.length && (k = h = 0, h = a[g]._labels[1], k = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1], v = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), t = k.textBlock.width * Math.cos(Math.PI /
                                180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle))), !a[g] || (!a[g].labelAutoFit || r(y) || r(E) || p.isNavigator || p.stockChart) || (k = 0, 0 < a[g].labelAngle ? E + t > m && (k += 0 < a[g].labelAngle ? E + t - m - ba : 0) : 0 > a[g].labelAngle ? y - v < l && y - v < a[g].viewportMinimum && (G = l - (M + a[g].tickLength + D + y - v + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (E + t > m && (k = E + t / 2 - m - ba), y - v < l && y - v < a[g].viewportMinimum && (G = l - M - a[g].tickLength - D - y + v / 2)), a[g].viewportMaximum === a[g].maximum &&
                                a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < k ? m -= k : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < G ? l += G : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < G && (l += G), 0 < k && (m -= k))), p.panEnabled ? V = r(p.sessionVariables.axisX.height) ? p.sessionVariables.axisX.height = V : p.sessionVariables.axisX.height : p.sessionVariables.axisX.height = V, k = Math.round(f.y2 - V - e + F), h = Math.round(f.y2), a[g].lineCoordinates.x2 =
                            m, a[g].lineCoordinates.width = m - l, a[g].lineCoordinates.y1 = k, a[g].lineCoordinates.y2 = k + a[g].lineThickness / 2, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[g].lineCoordinates.y1 + x[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0) - ("inside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = {
                                x1: l,
                                y1: k,
                                x2: m,
                                y2: h - (V + e - x[g] - F),
                                width: m - l,
                                height: h - k
                            }), F += x[g] + a[g].margin;
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].lineCoordinates.x1 =
                            Math.round(f.x1 + R + M), d[g].lineCoordinates.x2 = Math.round(f.x2 - ba - aa > p.width - n ? p.width - n : f.x2 - ba - aa), d[g].lineCoordinates.width = Math.abs(m - l), d[g]._labels && 1 < d[g]._labels.length && (h = d[g]._labels[1], k = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length - 2] : d[g]._labels[d[g]._labels.length - 1], v = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), t = k.textBlock.width * Math.cos(Math.PI / 180 *
                                Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle))), p.panEnabled ? Y = r(p.sessionVariables.axisX2.height) ? p.sessionVariables.axisX2.height = Y : p.sessionVariables.axisX2.height : p.sessionVariables.axisX2.height = Y, k = Math.round(f.y1), h = Math.round(f.y2 + d[g].margin), d[g].lineCoordinates.y1 = k + Y + Z - W, d[g].lineCoordinates.y2 = k, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[g - 1].bounds.y1 - w[g] + (d[g]._titleTextBlock ? d[g]._titleTextBlock.height :
                                0)), d[g].bounds = {
                                x1: l,
                                y1: k + (Y + Z - w[g] - W),
                                x2: m,
                                y2: h,
                                width: m - l,
                                height: h - k
                            }, W += w[g] + d[g].margin;
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) M = p.isNavigator ? 0 : 10, c[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), M = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : n, k = Math.round(f.y1 + Y + Z < Math.max(M, n) ? Math.max(M, n) : f.y1 + Y + Z), m = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), M = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height /
                            2 : n, h = Math.round(f.y2 - V - e - M), c[g].lineCoordinates = {
                                x1: l - U,
                                y1: k,
                                x2: m - U,
                                y2: h,
                                height: Math.abs(h - k)
                            }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[g].lineCoordinates.x1 - (D[g] - c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) + ("outside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = {
                                x1: l - (D[g] + U),
                                y1: k,
                                x2: m,
                                y2: h,
                                width: m - l,
                                height: h - k
                            }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth <
                                c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), U += D[g] + c[g].margin);
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g] && (l = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), m = Math.round(l), M = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, k = Math.round(f.y1 + Y + Z < Math.max(M, n) ? Math.max(M, n) : f.y1 + Y + Z), M = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, h = Math.round(f.y2 - (V + e + M)), b[g].lineCoordinates = {
                            x1: l + X,
                            y1: k,
                            x2: l + X,
                            y2: h,
                            height: Math.abs(h - k)
                        }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[g].lineCoordinates.x1 + (B[g] - b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0) - ("outside" === b[g].tickPlacement ? b[g].tickLength : 0) - 2, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = {
                            x1: l,
                            y1: k,
                            x2: m + (B[g] + X),
                            y2: h,
                            width: m - l,
                            height: h - k
                        }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth :
                            b[g].lineCoordinates.height), X += B[g] + b[g].margin);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length && (y = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, l = a[g]._labels[a[g]._labels.length - ("dateTime" ===
                            a[g].valueType ? 2 : 1)].position, l = a[g].getApparentDifference(a[g].viewportMinimum, l), E = a[g].logarithmic ? (1 < l ? Math.log(l) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1 : (0 < l ? l * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].calculateValueToPixelConversionParameters(), d[g].calculateBreaksSizeInValues(), d[g]._labels && 1 < d[g]._labels.length && (y = (d[g].logarithmic ?
                                Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position - d[g].viewportMinimum) * Math.abs(d[g].conversionParameters.pixelPerUnit) + d[g].lineCoordinates.x1, l = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position, l = d[g].getApparentDifference(d[g].viewportMinimum, l), E = d[g].logarithmic ? (1 < l ? Math.log(l) / d[g].conversionParameters.lnLogarithmBase * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1 :
                            (0 < l ? l * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1);
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                    if (0 < s) {
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) A = N[s - 1][g] === N[s][g] ? !0 : !1;
                        else A = !0;
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) I = Q[s - 1][g] === Q[s][g] ? !0 : !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) P = S[s - 1][g] === S[s][g] ? !0 : !1;
                        else P = !0;
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) L = T[s -
                                1][g] === T[s][g] ? !0 : !1;
                        else L = !0
                    }
                    if (A && I && P && L) break;
                    s++
                }
                if (a && 0 < a.length)
                    for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                if (d && 0 < d.length)
                    for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b && 0 < b.length)
                    for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels()
            } else {
                n = [];
                y = [];
                G = [];
                v = [];
                E = [];
                t = [];
                N = [];
                for (Q = []; 4 > s;) {
                    V = X = W = U = aa = M = Z = e = T = S = F = Y = 0;
                    if (a && 0 < a.length)
                        for (G = [], g = X = 0; g < a.length; g++) G.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), X += G[g], e += a[g] && !p.isNavigator ? a[g].margin : 0;
                    else G.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    N.push(G);
                    if (d && 0 < d.length)
                        for (v = [], g = V = 0; g < d.length; g++) v.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), V += v[g], Z += d[g] ? d[g].margin : 0;
                    else v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() :
                        0));
                    Q.push(v);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, l = Math.round(f.x1 + X + e), m = Math.round(f.x2 - V - Z > p.width - 10 ? p.width - 10 : f.x2 - V - Z), c[g].labelAutoFit && !r(x) && (0 < !a.length && (l = 0 > c[g].labelAngle ? Math.max(l, x) : 0 === c[g].labelAngle ? Math.max(l, x / 2) : l), 0 < !d.length && (m = 0 < c[g].labelAngle ? m - w / 2 : 0 === c[g].labelAngle ? m - w / 2 : m)), c[g].lineCoordinates.x1 = l, c[g].lineCoordinates.x2 = m, c[g].lineCoordinates.width = Math.abs(m - l), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth <
                            c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, l = Math.round(f.x1 + X + e), m = Math.round(f.x2 - V - Z > b[g].chart.width - 10 ? b[g].chart.width - 10 : f.x2 - V - Z), b[g] && b[g].labelAutoFit && !r(D) && (0 < !a.length && (l = 0 < b[g].labelAngle ? Math.max(l, D) : 0 === b[g].labelAngle ? Math.max(l, D / 2) : l), 0 < !d.length && (m -= B / 2)), b[g].lineCoordinates.x1 = l, b[g].lineCoordinates.x2 = m, b[g].lineCoordinates.width = Math.abs(m - l), b[g].title && (b[g]._titleTextBlock.maxWidth =
                            0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (n = [], g = U = 0; g < c.length; g++) n.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), U += n[g] + c[g].margin, M += c[g].margin;
                    else n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    E.push(n);
                    if (b && 0 < b.length)
                        for (y = [], g = W = 0; g < b.length; g++) y.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), W += y[g], aa += b[g].margin;
                    else y.push(Math.ceil(b[0] ?
                        b[0].createLabelsAndCalculateHeight() : 0));
                    t.push(y);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (h = c[g]._labels[0], k = c[g]._labels[c[g]._labels.length - 1], x = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), w = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)));
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (h = b[g]._labels[0], k = b[g]._labels[b[g]._labels.length - 1], D = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), B = k.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(k.textBlock.angle)) + (k.textBlock.height - k.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(k.textBlock.angle)));
                    if (p.panEnabled)
                        for (g = 0; g < c.length; g++) n[g] = r(p.sessionVariables.axisY.height) ?
                            p.sessionVariables.axisY.height = n[g] : p.sessionVariables.axisY.height;
                    else
                        for (g = 0; g < c.length; g++) p.sessionVariables.axisY.height = n[g];
                    if (c && 0 < c.length)
                        for (g = c.length - 1; 0 <= g; g--) k = Math.round(f.y2), h = Math.round(f.y2 > c[g].chart.height ? c[g].chart.height : f.y2), c[g].lineCoordinates.y1 = k - (n[g] + c[g].margin + Y), c[g].lineCoordinates.y2 = k - (n[g] + c[g].margin + Y), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + n[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - ("inside" ===
                            c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = {
                            x1: l,
                            y1: k - (n[g] + Y + c[g].margin),
                            x2: m,
                            y2: h - (Y + c[g].margin),
                            width: m - l,
                            height: n[g]
                        }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), Y += n[g] + c[g].margin;
                    if (b && 0 < b.length)
                        for (g = b.length - 1; 0 <= g; g--) b[g] && (k = Math.round(f.y1), h = Math.round(f.y1 + (y[g] + b[g].margin + F)), b[g].lineCoordinates.y1 =
                            h, b[g].lineCoordinates.y2 = h, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = h - y[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)), b[g].bounds = {
                                x1: l,
                                y1: k + (b[g].margin + F),
                                x2: m,
                                y2: h,
                                width: m - l,
                                height: W
                            }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), F += y[g] + b[g].margin);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) {
                            M = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize /
                                2 : 0;
                            l = Math.round(f.x1 + e);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(M, 10) ? Math.max(M, 10) : f.y1) : f.y1 < Math.max(M, 10) ? Math.max(M, 10) : f.y1;
                            m = Math.round(f.x1 + X + e);
                            h = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - U > p.height - Math.max(M, 10) ? p.height - Math.max(M, 10) : f.y2 - U) : f.y2 > p.height - Math.max(M, 10) ? p.height - Math.max(M, 10) : f.y2;
                            if (c && 0 < c.length)
                                for (M = 0; M < c.length; M++) c[M] && c[M].labelAutoFit && (m = 0 > c[M].labelAngle ? Math.max(m, x) : 0 === c[M].labelAngle ? Math.max(m, x / 2) : m, l =
                                    0 > c[M].labelAngle || 0 === c[M].labelAngle ? m - X : l);
                            if (b && 0 < b.length)
                                for (M = 0; M < b.length; M++) b[M] && b[M].labelAutoFit && (m = b[M].lineCoordinates.x1, l = m - X);
                            a[g].lineCoordinates = {
                                x1: m - S,
                                y1: k,
                                x2: m - S,
                                y2: h,
                                height: Math.abs(h - k)
                            };
                            "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (G[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + ("outside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                            a[g].bounds = {
                                x1: m - (G[g] +
                                    S),
                                y1: k,
                                x2: m,
                                y2: h,
                                width: m - l,
                                height: h - k
                            };
                            a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                            a[g].calculateValueToPixelConversionParameters();
                            a[g].calculateBreaksSizeInValues();
                            S += G[g] + a[g].margin
                        }
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) {
                            M = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0;
                            l = Math.round(f.x1 - e);
                            k = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 <
                                Math.max(M, 10) ? Math.max(M, 10) : f.y1) : f.y1 < Math.max(M, 10) ? Math.max(M, 10) : f.y1;
                            m = Math.round(f.x2 - V - Z);
                            h = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - U > p.height - Math.max(M, 10) ? p.height - Math.max(M, 10) : f.y2 - U) : f.y2 > p.height - Math.max(M, 10) ? p.height - Math.max(M, 10) : f.y2;
                            if (c && 0 < c.length)
                                for (M = 0; M < c.length; M++) c[M] && c[M].labelAutoFit && (m = 0 > c[M].labelAngle ? Math.max(m, x) : 0 === c[M].labelAngle ? Math.max(m, x / 2) : m, l = 0 > c[M].labelAngle || 0 === c[M].labelAngle ? m - V : l);
                            if (b && 0 < b.length)
                                for (M = 0; M < b.length; M++) b[M] &&
                                    b[M].labelAutoFit && (m = b[M].lineCoordinates.x2, l = m - V);
                            d[g].lineCoordinates = {
                                x1: m + T,
                                y1: k,
                                x2: m + T,
                                y2: h,
                                height: Math.abs(h - k)
                            };
                            "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (v[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - ("outside" === d[g].tickPlacement ? d[g].tickLength : 0), d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2);
                            d[g].bounds = {
                                x1: d[g].lineCoordinates.x1,
                                y1: k,
                                x2: m + v[g] + T,
                                y2: h,
                                width: m - l,
                                height: h - k
                            };
                            d[g].title && (d[g]._titleTextBlock.maxWidth =
                                0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height);
                            d[g].calculateValueToPixelConversionParameters();
                            d[g].calculateBreaksSizeInValues();
                            T += v[g] + d[g].margin
                        }
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                    if (0 < s) {
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) A = N[s - 1][g] === N[s][g] ? !0 : !1;
                        else A = !0;
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) I = Q[s - 1][g] === Q[s][g] ? !0 :
                                !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) P = E[s - 1][g] === E[s][g] ? !0 : !1;
                        else P = !0;
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) L = t[s - 1][g] === t[s][g] ? !0 : !1;
                        else L = !0
                    }
                    if (A && I && P && L) break;
                    s++
                }
                if (c && 0 < c.length)
                    for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b && 0 < b.length)
                    for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
                if (a && 0 < a.length)
                    for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(),
                        a[g].calculateBreaksInPixels();
                if (d && 0 < d.length)
                    for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels()
            }
        };
        D.render = function(a, d, c, b, e) {
            var f = a[0] ? a[0].chart : d[0].chart;
            e = f.ctx;
            f.alignVerticalAxes && f.alignVerticalAxes();
            e.save();
            e.beginPath();
            a[0] && e.rect(5, a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            d[0] && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height);
            e.clip();
            if (a && 0 < a.length)
                for (var l = 0; l < a.length; l++) a[l].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderLabelsTicksAndTitle();
            e.restore();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderLabelsTicksAndTitle();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderLabelsTicksAndTitle();
            f.preparePlotArea();
            f = f.plotArea;
            e.save();
            e.beginPath();
            e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
            e.clip();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderInterlacedColors();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderInterlacedColors();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderInterlacedColors();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderInterlacedColors();
            e.restore();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderGrid(),
                    s && (a[l].createMask(), a[l].renderBreaksBackground());
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderGrid(), s && (d[l].createMask(), d[l].renderBreaksBackground());
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderGrid(), s && (c[l].createMask(), c[l].renderBreaksBackground());
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderGrid(), s && (b[l].createMask(), b[l].renderBreaksBackground());
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderAxisLine();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderAxisLine();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderAxisLine();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderAxisLine();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("pixel");
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("pixel")
        };
        D.prototype.calculateStripLinesThicknessInValues =
            function() {
                for (var a = 0; a < this.stripLines.length; a++)
                    if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                        var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                            d = this.getApparentDifference(d, c);
                        this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue) / Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue)) /
                            Math.log(d)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2;
                        this.stripLines[a].thickness = d;
                        this.stripLines[a]._thicknessType = "value"
                    }
            };
        D.prototype.calculateBreaksSizeInValues = function() {
            for (var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ?
                    this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !r(this.scaleBreaks.options.spacing), e, f = 0; f < d.length; f++) e = b || !r(d[f].options.spacing), d[f].spacing = Ra(d[f].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0, d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / c), this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size))
        };
        D.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a =
                    this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++) a[d].endValue < this.conversionParameters.minimum || (r(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum &&
                    (a[d].endPixel = this.convertValueToPixel(a[d].endValue)))
            }
        };
        D.prototype.renderLabelsTicksAndTitle = function() {
            var a = this,
                d = !1,
                c = 0,
                b = 0,
                e = 1,
                f = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, l, k = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), h = this._labels.length -
                                1; 0 <= h; h--) {
                            n = this._labels[h];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum || !(h === this._labels.length - 1 || l < Math.log(k / n.position) * m / e) || (c.push(n), k = n.position, l = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = c
                    } else {
                        for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || (l = n.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.height *
                            Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += l);
                        c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0)
                    } if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], p, k = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), h = this._labels.length - 1; 0 <= h; h--) {
                            n = this._labels[h];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum || !(h === this._labels.length - 1 || p < Math.log(k / n.position) *
                                m) || (c.push(n), k = n.position, p = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = c
                    } else {
                        for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || (p = n.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += p);
                        b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval &&
                this.labelAutoFit) && this._labels.sort(function(a, b) {
                return a.position - b.position
            });
            var h = 0,
                n, q;
            if ("bottom" === this._position) {
                for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y <<
                    0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (q.x -= n.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? n.textBlock.width *
                    Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - Math.abs(n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), n.textBlock.x = q.x, n.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd",
                    function() {
                        for (h = 0; h < a._labels.length; h++)
                            if (n = a._labels[h], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                                a.ctx.lineWidth = a.tickThickness;
                                a.ctx.strokeStyle = a.tickColor;
                                var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                a.ctx.save();
                                a.ctx.beginPath();
                                a.ctx.moveTo(b, q.y << 0);
                                a.ctx.lineTo(b, q.y - a.tickLength << 0);
                                a.ctx.stroke();
                                a.ctx.restore()
                            }
                    }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 +
                    this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" === this._position) {
                for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle =
                    this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === n.textBlock.angle ? (q.x -= n.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 <
                    this.labelAngle ? q.x : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (n.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) +
                        ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), n.textBlock.x = q.x, n.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (n = a._labels[h], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle =
                                a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y + a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (h =
                    0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (n.textBlock.y =
                    q.y, n.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (n.textBlock.y = "inside" === this.labelPlacement ? q.y : q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                    ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (n = a._labels[h], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position), a.tickThickness)) {
                            a.ctx.lineWidth =
                                a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" ===
                this._position) {
                for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || n.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(n.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ?
                    (n.textBlock.y = q.y, n.textBlock.x = "inside" === this.labelPlacement ? q.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (n.textBlock.y = "inside" === this.labelPlacement ? q.y - n.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), n.textBlock.x = "inside" === this.labelPlacement ? q.x - n.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) -
                        ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (n.textBlock.height - n.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (n = a._labels[h], !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(n.position),
                                a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x - a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            f =
                0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
                for (h = 0; h < a._labels.length; h++) n = a._labels[h], n.position < a.viewportMinimum || (n.position > a.viewportMaximum || d && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(!0), a.ctx.restore())
            }, this);
            else
                for (h = 0; h < this._labels.length; h++) n = this._labels[h], n.position < this.viewportMinimum || (n.position > this.viewportMaximum || d && 0 !== f++ % 2 && this.labelAutoFit) || n.textBlock.render(!0)
        };
        D.prototype.renderInterlacedColors =
            function() {
                var a = this.chart.plotArea.ctx,
                    d, c, b = this.chart.plotArea,
                    e = 0;
                d = !0;
                if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = !1) :
                        d = !0;
                else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                    for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position), d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = !1) : d = !0;
                a.beginPath()
            };
        D.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines &&
                0 < this.stripLines.length && a) {
                for (var d = this, c, b = 0, e = 0, f = !1, l = !1, k = [], m = [], l = !1, b = 0; b < this.stripLines.length; b++) {
                    var h = this.stripLines[b];
                    h._thicknessType === a && ("pixel" === a && (h.value < this.viewportMinimum || h.value > this.viewportMaximum || r(h.value) || isNaN(this.range)) || "value" === a && (h.startValue <= this.viewportMinimum && h.endValue <= this.viewportMinimum || h.startValue >= this.viewportMaximum && h.endValue >= this.viewportMaximum || r(h.startValue) || r(h.endValue) || isNaN(this.range)) || k.push(h))
                }
                for (b = 0; b < this._stripLineLabels.length; b++)
                    if (h =
                        this.stripLines[b], c = this._stripLineLabels[b], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(c.position);
                        if ("outside" === c.stripLine.labelPlacement)
                            if (h && (this.ctx.strokeStyle = h.color, "pixel" === h._thicknessType && (this.ctx.lineWidth = h.thickness)), "bottom" === this._position) {
                                var p = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(p, a.y << 0);
                                this.ctx.lineTo(p, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(p, a.y << 0), this.ctx.lineTo(p, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width /
                                    2, a.y -= this.tickLength + c.textBlock.height) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" === this._position ? (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p),
                                    this.ctx.lineTo(a.x - this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position &&
                                (p = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, p), this.ctx.lineTo(a.x + this.tickLength << 0, p), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        else c.textBlock.angle = -90, "bottom" ===
                            this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? r(h.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, r(h.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" ===
                                c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth :
                                this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? r(h.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, r(h.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 +
                                    this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ?
                                r(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : r(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width -
                                3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? r(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : r(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize /
                                2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        c.textBlock.x = a.x;
                        c.textBlock.y = a.y;
                        m.push(c)
                    } if (!l) {
                    l = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (b = 0; b < k.length; b++) h =
                        k[b], h.showOnTop ? f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                            this.ctx.save();
                            this.ctx.beginPath();
                            this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                            this.ctx.clip();
                            for (e = 0; e < k.length; e++) h = k[e], h.showOnTop && h.render();
                            this.ctx.restore()
                        }, h)) : h.render();
                    for (b = 0; b < m.length; b++) c = m[b], c.stripLine.showOnTop ? l || (l = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        for (e = 0; e < m.length; e++) c =
                            m[e], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(!0), d.ctx.restore())
                    }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                    this.ctx.restore();
                    l = !0
                }
                if (l)
                    for (l = !1, b = 0; b < m.length; b++) c = m[b], "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0)
            }
        };
        D.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas &&
                (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        D.prototype.createMask = function() {
            if (this.scaleBreaks &&
                0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                s ? (this.maskCanvas = ta(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas = this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum ||
                    (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        D.prototype.renderCrosshair = function(a, d) {
            isFinite(this.minimum) && isFinite(this.maximum) && (this.crosshair.render(a, d), this.crosshair.dispatchEvent("updated", {
                chart: this.chart,
                crosshair: this.options,
                axis: this,
                value: this.crosshair.value
            }, this))
        };
        D.prototype.showCrosshair = function(a) {
            r(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a),
                null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a))
        };
        D.prototype.renderGrid = function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var d, c = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(Q(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum ||
                        this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d =
                        1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
                a.restore()
            }
        };
        D.prototype.renderAxisLine = function() {
            var a = this.chart.ctx,
                d = s ? this.chart._preRenderCtx : a,
                c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                e, f;
            d.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, f = this.lineCoordinates.x2);
                    d.lineWidth = this.lineThickness;
                    d.strokeStyle = this.lineColor ? this.lineColor : "black";
                    d.setLineDash && d.setLineDash(Q(this.lineDashType, this.lineThickness));
                    var l = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    d.beginPath();
                    if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
                        if (r(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (var k = this.scaleBreaks.firstBreakIndex; k <= this.scaleBreaks.lastBreakIndex; k++) d.moveTo(e,
                                l), d.lineTo(this.scaleBreaks._appliedBreaks[k].startPixel + c, l), e = this.scaleBreaks._appliedBreaks[k].endPixel + b;
                    e && (d.moveTo(e, l), d.lineTo(f, l));
                    d.stroke()
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? (e = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, f = this.lineCoordinates.y1);
                d.lineWidth = this.lineThickness;
                d.strokeStyle = this.lineColor;
                d.setLineDash && d.setLineDash(Q(this.lineDashType, this.lineThickness));
                l = 1 === this.lineThickness %
                    2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                d.beginPath();
                if (this.scaleBreaks && !r(this.scaleBreaks.firstBreakIndex))
                    if (r(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                    else
                        for (k = this.scaleBreaks.firstBreakIndex; k <= this.scaleBreaks.lastBreakIndex; k++) d.moveTo(l, e), d.lineTo(l, this.scaleBreaks._appliedBreaks[k].startPixel + b), e = this.scaleBreaks._appliedBreaks[k].endPixel + c;
                e && (d.moveTo(l, e), d.lineTo(l, f));
                d.stroke()
            }
            s &&
                (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), d.clearRect(0, 0, this.chart.width, this.chart.height));
            d.restore()
        };
        D.prototype.getPixelCoordinatesOnAxis = function(a) {
            var d = {};
            if ("bottom" === this._position || "top" === this._position) d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1;
            if ("left" === this._position || "right" === this._position) d.y =
                this.convertValueToPixel(a), d.x = this.lineCoordinates.x2;
            return d
        };
        D.prototype.convertPixelToValue = function(a) {
            if ("undefined" === typeof a) return null;
            var d = 0,
                c = 0,
                b, d = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (c <= this.conversionParameters.reference === ("left" === this._position ||
                        "right" === this._position) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                        break
                                    } else a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) /
                                        Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                                    d = !1
                                } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                            b /= e[c].startValue / this.conversionParameters.minimum;
                            if (b < e[c].size) {
                                a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                                break
                            } else a *= e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size;
                            d = !1
                        } else break;
                        else if (b > e[c].startValue / e[c -
                                1].endValue) {
                            b /= e[c].startValue / e[c - 1].endValue;
                            if (b < e[c].size) {
                                a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                                break
                            } else a *= e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size
                        } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum) {
                                        if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) >
                                            e[c].startValue) {
                                            a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                            break
                                        } else a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                                        d = !1
                                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                    b /= e[c].endValue / this.conversionParameters.minimum;
                    if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break
                    } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) {
                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                        break
                    } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size
                } else break;
                d = a * this.viewportMinimum
            } else {
                a = b = (c - this.conversionParameters.reference) /
                    this.conversionParameters.pixelPerUnit;
                if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) {
                                        a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size;
                                        break
                                    } else a += e[c].endValue - this.conversionParameters.minimum -
                                        e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                                    d = !1
                                } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                            b -= e[c].startValue - this.conversionParameters.minimum;
                            if (b < e[c].size) {
                                a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                                break
                            } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size;
                            d = !1
                        } else break;
                        else if (b > e[c].startValue - e[c -
                                1].endValue) {
                            b -= e[c].startValue - e[c - 1].endValue;
                            if (b < e[c].size) {
                                a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                                break
                            } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size
                        } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum)
                                        if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) {
                                            a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) /
                                                e[c].size;
                                            break
                                        } else a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = !1;
                else if (b < e[c].endValue - this.conversionParameters.minimum) {
                    b -= e[c].endValue - this.conversionParameters.minimum;
                    if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break
                    } else a -= e[c].endValue - e[c].startValue -
                        e[c].size;
                    b += e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) {
                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                        break
                    } else a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size
                } else break;
                d = this.conversionParameters.minimum + a
            }
            return d
        };
        D.prototype.convertValueToPixel = function(a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference +
                this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase + 0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
        };
        D.prototype.getApparentDifference = function(a, d, c, b) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                c = r(c) ? d / a : c;
                for (var f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * e[f].startValue * e[f].size : a >= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)) : a <= e[f].startValue && d <= e[f].endValue ? c = c / d * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)) : !b && (a > e[f].startValue && d < e[f].endValue) &&
                    (c = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))))
            } else
                for (c = r(c) ? Math.abs(d - a) : c, f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + e[f].startValue + e[f].size : a > e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + a + e[f].size * (e[f].endValue - a) / (e[f].endValue - e[f].startValue) : a <= e[f].startValue && d < e[f].endValue ? c = c - d + e[f].startValue + e[f].size * (d - e[f].startValue) / (e[f].endValue - e[f].startValue) : !b && (a > e[f].startValue &&
                    d < e[f].endValue) && (c = a + e[f].size * (d - a) / (e[f].endValue - e[f].startValue)));
            return c
        };
        D.prototype.setViewPortRange = function(a, d) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d)
        };
        D.prototype.getXValueAt = function(a) {
            if (!a) return null;
            var d = null;
            "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
            return d
        };
        D.prototype.calculateValueToPixelConversionParameters =
            function(a) {
                a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                var d = {
                        pixelPerUnit: null,
                        minimum: null,
                        reference: null
                    },
                    c = this.lineCoordinates.width,
                    b = this.lineCoordinates.height,
                    c = "bottom" === this._position || "top" === this._position ? c : b,
                    b = Math.abs(this.range);
                if (this.logarithmic)
                    for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue &&
                        this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue /
                            this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
                else
                    for (e = 0; e < a.length && !(this.viewportMaximum <
                            a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ?
                        c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum -
                        a[e].startValue) / (a[e].endValue - a[e].startValue)));
                d.minimum = this.viewportMinimum;
                d.maximum = this.viewportMaximum;
                d.range = b;
                if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
                if ("left" === this._position || "right" === this._position) this.logarithmic ?
                    (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
                this.conversionParameters = d
            };
        D.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    c = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth =
                    a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" === this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    b = 4;
                "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(b, Math.floor(this.maxWidth / a)),
                    e, f, l, b = 0;
                !r(this.options.viewportMinimum) && (!r(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (r(this.options.viewportMinimum) && !r(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (r(this.options.viewportMaximum) && !r(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum ||
                    isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                        if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!r(this.sessionVariables.newViewportMaximum) &&
                                this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) {
                            this.scaleBreaks._appliedBreaks.splice(b, 1);
                            break
                        } if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                    e = null !== this.viewportMinimum ?
                        this.viewportMinimum : this.dataInfo.viewPortMin;
                    f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b);
                    Infinity !== this.dataInfo.minDiff ? l = this.dataInfo.minDiff : 1 < f - e ? l = 0.5 * Math.abs(f - e) : (l = 1, c && (d = !0))
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) ||
                    isFinite(f) ? isFinite(e) ? isFinite(f) || (f = e) : e = f : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -=
                        b)), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
                b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && c) {
                    this.intervalType ||
                        (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval = 10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType =
                                "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType = "millisecond") : b / (1 * T.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * T.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * T.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * T.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * T.secondDuration) <=
                            a ? (this.interval = 15, this.intervalType = "second") : b / (20 * T.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * T.secondDuration) <= a ? (this.interval = 30, this.intervalType = "second") : b / (1 * T.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * T.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * T.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * T.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * T.minuteDuration) <=
                            a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * T.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * T.minuteDuration) <= a ? (this.interval = 30, this.intervalType = "minute") : b / (1 * T.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * T.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * T.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * T.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * T.dayDuration) <= a ? (this.interval = 1,
                                this.intervalType = "day") : b / (2 * T.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * T.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * T.weekDuration) <= a ? (this.interval = 1, this.intervalType = "week") : b / (2 * T.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * T.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * T.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * T.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * T.monthDuration) <=
                            a ? (this.interval = 3, this.intervalType = "month") : b / (6 * T.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * T.yearDuration) <= a ? 1 : b / (2 * T.yearDuration) <= a ? 2 : b / (4 * T.yearDuration) <= a ? 4 : Math.floor(D.getNiceNumber(b / (a - 1), !0) / T.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - l / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = f + l / 2;
                    d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" :
                        "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString =
                            "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    b = D.getNiceNumber(b, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : D.getNiceNumber(b / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + l / 2 :
                        Math.ceil(f / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ?
                            this.maximum : this.dataInfo.max, 0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(f) ? 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f,
                            e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -= b)) : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), l = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum ||
                            isNaN(this.maximum)) && 0 > f && (f = 0)), Math.abs(this.getApparentDifference(e, f, null, !0)), "axisX" === this.type && c) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum = e - l / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = f + l / 2
                    } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - l / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ?
                        Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? f + l / 2 : Math.ceil(f / this.interval) * this.interval, this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                r(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum =
                    Math.max(this.viewportMinimum, this.minimum));
                r(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = D.generateValueFormatString(this.range,
                    2))
            }
        };
        D.prototype.calculateLogarithmicAxisParameters = function() {
            var a = this.chart.layoutManager.getFreeSpace(),
                d = Math.log(this.logarithmBase),
                c;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                b, e, f, l;
            l = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum =
                this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (l = 0; l < this.scaleBreaks._appliedBreaks.length; l++)
                    if ((!r(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue || !r(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[l].startValue || !r(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[l].startValue) &&
                        (!r(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue || !r(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[l].endValue || !r(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[l].endValue)) {
                        this.scaleBreaks._appliedBreaks.splice(l, 1);
                        break
                    }
            "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ?
                this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (l = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= l, b /= l), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e =
                    "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase - 1 / this.logarithmBase, b = 1) : 1 === e / b ? (l = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= l, b /= l) : b > e ? (l = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= l), 1 !== b && (b /= l)), f = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            var k = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ?
                e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            this.intervalType = "number";
            l = Math.pow(this.logarithmBase, D.getNiceNumber(Math.abs(Math.log(l) / d), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = D.getNiceExponent(Math.log(l) / d / (a - 1), !0), c = D.getNiceNumber(k / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase,
                this.interval * Math.floor(Math.log(b) / d / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options &&
                "undefined" === typeof this.options.interval && (this.interval = D.getNiceExponent(Math.ceil(Math.log(l) / d) / (a - 1)), c = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (l = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= l, b /= l), f = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (l = Math.pow(this.logarithmBase, this.interval), e *= l, b /= l) : b > e ? (l = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / l : e = b * l) : (l = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase,
                0.04)), 1 !== e && (e *= l), 1 !== b && (b /= l)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase,
                this.interval * Math.floor(Math.log(b) / d / this.interval)), r(null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum) || (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum :
                this.sessionVariables.viewportMinimum))), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), r(null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum) || (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum ||
                isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ? 0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum))), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum,
                this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum || this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            b =
                Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum;) d += c;
                this.equidistantInterval = !1;
                this.intervalStartPosition = d;
                this.interval = c
            } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval &&
                (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))), this.equidistantInterval = !0, this.intervalStartPosition = b;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
                d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(d) || !isFinite(d)) d = 2;
                if (2 < d)
                    for (l = 0; l < d - 2; l++) this.valueFormatString += "#"
            }
        };
        D.generateValueFormatString = function(a, d) {
            var c = "#,##0.",
                b = d;
            1 > a && (b += Math.floor(Math.abs(Math.log(a) /
                Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
            for (var e = 0; e < b; e++) c += "#";
            return c
        };
        D.getNiceExponent = function(a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
        };
        D.getNiceNumber = function(a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
        };
        D.prototype.getLabelStartPoint = function() {
            var a = T[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("hour" === this.intervalType) {
                if (0 < a.getMinutes() || 0 < a.getSeconds() ||
                    0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("day" === this.intervalType) {
                if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else if ("week" === this.intervalType) {
                if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0),
                    a.setSeconds(0), a.setMilliseconds(0)
            } else if ("month" === this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0),
                a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        oa(U, X);
        oa(V, X);
        V.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ca(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options
            }
        };
        V.prototype.render = function(a) {
            if (0 !== this.spacing ||
                0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var d = this.ctx,
                    c = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle =
                    this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                S(this.id);
                var f, l, k, m, h, p;
                a = Math.max(this.spacing, 3);
                var n = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = n;
                this.ctx.setLineDash && this.ctx.setLineDash(Q(this.lineDashType, n));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0, l = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, k = this.chart.plotArea.y2 +
                            n / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, k = this.chart.plotArea.y1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: b - n / 2,
                            y1: e,
                            x2: l + n / 2,
                            y2: k
                        }, this.ctx.moveTo(b, e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, k), this.ctx.lineTo(l, k), this.ctx.lineTo(l, e);
                    else if ("wavy" === this.type) {
                    m = b;
                    h = e;
                    f = 0.5;
                    p = (k - h) / a / 3;
                    for (var q = 0; q < p; q++) this.ctx.bezierCurveTo(m + f * a, h + a, m + f * a, h + 2 * a, m, h + 3 * a), h += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(m + f * a,
                        h + a, m + f * a, h + 2 * a, m, h + 3 * a);
                    m = l;
                    f *= -1;
                    this.ctx.lineTo(m, h);
                    for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m + f * a, h - a, m + f * a, h - 2 * a, m, h - 3 * a), h -= 3 * a, f *= -1
                } else {
                    if ("zigzag" === this.type) {
                        f = -1;
                        h = e + a;
                        m = b + a;
                        p = (k - h) / a / 2;
                        for (q = 0; q < p; q++) this.ctx.lineTo(m, h), m += 2 * f * a, h += 2 * a, f *= -1;
                        this.ctx.lineTo(m, h);
                        m += l - b;
                        for (q = 0; q < p + 1; q++) this.ctx.lineTo(m, h), m += 2 * f * a, h -= 2 * a, f *= -1;
                        this.ctx.lineTo(m + f * a, h + a)
                    }
                } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y <<
                        0, k = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, l = this.chart.plotArea.x2 + n / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2, l = this.chart.plotArea.x1 - n / 2 + 0.5 << 0, a *= -1), this.bounds = {
                            x1: b,
                            y1: e - n / 2,
                            x2: l,
                            y2: k + n / 2
                        }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(l, e), this.ctx.lineTo(l, k), this.ctx.lineTo(b, k);
                    else if ("wavy" === this.type) {
                    m = b;
                    h = e;
                    f = 0.5;
                    p =
                        (l - m) / a / 3;
                    for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m + a, h + f * a, m + 2 * a, h + f * a, m + 3 * a, h), m += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(m + a, h + f * a, m + 2 * a, h + f * a, m + 3 * a, h);
                    h = k;
                    f *= -1;
                    this.ctx.lineTo(m, h);
                    for (q = 0; q < p; q++) this.ctx.bezierCurveTo(m - a, h + f * a, m - 2 * a, h + f * a, m - 3 * a, h), m -= 3 * a, f *= -1
                } else if ("zigzag" === this.type) {
                    f = 1;
                    h = e - a;
                    m = b + a;
                    p = (l - m) / a / 2;
                    for (q = 0; q < p; q++) this.ctx.lineTo(m, h), h += 2 * f * a, m += 2 * a, f *= -1;
                    this.ctx.lineTo(m, h);
                    h += k - e;
                    for (q = 0; q < p + 1; q++) this.ctx.lineTo(m, h), h += 2 * f * a, m -= 2 * a, f *= -1;
                    this.ctx.lineTo(m + a, h + f * a)
                }
                0 < n && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = c;
                this.ctx = d
            }
        };
        oa(N, X);
        N.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ca(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
                this.options = "undefined" ===
                    typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options
            }
        };
        N.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var c = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var b = this.ctx.globalAlpha;
                this.ctx.globalAlpha = c;
                S(this.id);
                var e, f, l,
                    k;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(Q(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, l = this.chart.plotArea.y1, k = this.chart.plotArea.y2, this.bounds = {
                    x1: e - d / 2,
                    y1: l,
                    x2: f + d / 2,
                    y2: k
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) l = k = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2, this.bounds = {
                    x1: e,
                    y1: l - d / 2,
                    x2: f,
                    y2: k + d / 2
                };
                this.ctx.moveTo(e, l);
                this.ctx.lineTo(f, k);
                this.ctx.stroke();
                this.ctx.globalAlpha = b
            }
            this.ctx.restore()
        };
        oa(ba, X);
        ba.prototype.showAt = function(a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                c = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas = this.parent.type;
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position)
                    for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
                else if ("top" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else {
                if ("right" === this.parent._position)
                    for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue =
                        a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null)
            } else if ("bottom" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position)
                for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b =
                    0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("right" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            for (b = 0; b < d.axisX.length; b++) a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !r(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) &&
                (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = !0));
            for (b = 0; b < d.axisX2.length; b++) a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !r(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) && (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY.length; b++) a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled &&
                !r(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY2.length; b++) a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled && !r(a) && d._crosshairY2Value >= d.axisY2[b].viewportMinimum && d._crosshairY2Value <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = !0));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return c
        };
        ba.prototype.hide = function() {
            this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0
        };
        ba.prototype.render = function(a, d, c) {
            var b, e, f, l, k = null,
                m = null,
                h = null,
                p = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
                else {
                    var n = 0,
                        n = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 <
                        this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0);
                    this.valueFormatString = D.generateValueFormatString(this.parent.range, n)
                } var h = null === this.opacity ? 1 : this.opacity,
                n = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit *
                    this.thickness),
                q = this.chart.overlaidCanvasCtx,
                g = q.globalAlpha;
            q.globalAlpha = h;
            q.beginPath();
            q.strokeStyle = this.color;
            q.lineWidth = n;
            q.save();
            this.labelFontSize = r(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
            this.labelMaxWidth = r(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = r(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < n && q.setLineDash && q.setLineDash(Q(this.lineDashType, n));
            h = new la(q, {
                x: 0,
                y: 0,
                padding: {
                    top: 2,
                    right: 3,
                    bottom: 2,
                    left: 4
                },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: p,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var s =
                    0,
                    p = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var v = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) s = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        y: d
                    });
                    else if ("left" === this.parent._position || "right" === this.parent._position) s = this.parent.convertPixelToValue({
                        y: d
                    });
                    for (var w = 0; w < this.parent.dataSeries.length; w++)(v = this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], null !== v.dataPoint.y && v.dataSeries.visible &&
                        p.push(v));
                    v = null;
                    if (0 === p.length) return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    v = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                    w = 0;
                    if ("rangeBar" === p[0].dataSeries.type || "error" === p[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(p[w].dataPoint.y[0])), t = 0, s = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (var x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else t =
                                Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y)), t < v && (v = t, w = s);
                    else if ("stackedBar" === p[0].dataSeries.type)
                        for (var v = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)), C = t = 0, s = w = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else C += p[s].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(C)), t < v && (v = t, w = s);
                    else if ("stackedBar100" === p[0].dataSeries.type)
                        for (var v =
                                Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)), E = C = t = 0, s = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else C += p[s].dataPoint.y, E = p[s].dataPoint.x.getTime ? p[s].dataPoint.x.getTime() : p[s].dataPoint.x, E = 100 * (C / p[s].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(a - this.parent.convertValueToPixel(E)), t < v && (v = t, w = s);
                    else
                        for (v = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y)),
                            s = w = t = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else t = Math.abs(a - this.parent.convertValueToPixel(p[s].dataPoint.y)), t < v && (v = t, w = s);
                    x = p[w];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        b = 0;
                        if ("rangeBar" === this.parent.dataSeries[w].type || "error" === this.parent.dataSeries[w].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                            for (s = t = 0; s < x.dataPoint.y.length; s++) t = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[s])), t < v && (v = t, b = s);
                            k = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0;
                            h.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c ? c : x.dataPoint.y[b]
                            }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar" ===
                            this.parent.dataSeries[w].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                            C = t = 0;
                            for (s = w; 0 <= s; s--) C += p[s].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(C)), t < v && (v = t, b = s);
                            k = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) << 0;
                            h.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c ? c : x.dataPoint.y
                            }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y, this.valueFormatString,
                                this.chart._cultureInfo) : this.label
                        } else if ("stackedBar100" === this.parent.dataSeries[w].type) {
                            v = Math.abs(a - this.parent.convertValueToPixel(p[0].dataPoint.y));
                            E = C = t = 0;
                            for (s = w; 0 <= s; s--) C += p[s].dataPoint.y, E = p[s].dataPoint.x.getTime ? p[s].dataPoint.x.getTime() : p[s].dataPoint.x, E = 100 * (C / p[s].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(a - this.parent.convertValueToPixel(E)), t < v && (v = t, b = s);
                            k = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 : this.parent.convertValueToPixel(E) << 0;
                            h.text = this.labelFormatter ?
                                this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: c ? c : E
                                }) : r(this.options.label) ? fa(c ? c : E, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else k = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y) << 0, h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : x.dataPoint.y
                        }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y,
                            this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = e = k;
                        f = this.chart.plotArea.y1;
                        l = this.chart.plotArea.y2;
                        this.bounds = {
                            x1: b - n / 2,
                            y1: f,
                            x2: e + n / 2,
                            y2: l
                        };
                        h.x = b - h.measureText().width / 2;
                        h.x + h.width > this.chart.bounds.x2 ? h.x = this.chart.bounds.x2 - h.width : h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1);
                        h.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -h.height + this.parent.tickLength : h.fontSize / 2) + 2;
                        h.y + h.height > this.chart.bounds.y2 ? h.y = this.chart.bounds.y2 - h.height : h.y < this.chart.bounds.y1 &&
                            (h.y = this.chart.bounds.y1)
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        f = l = m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        e = this.chart.plotArea.x2;
                        this.bounds = {
                            x1: b,
                            y1: f - n / 2,
                            x2: e,
                            y2: l + n / 2
                        };
                        E = !1;
                        if (this.parent.labels)
                            for (p = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += p)
                                if (this.parent.labels[s]) E = !0;
                                else {
                                    E = !1;
                                    break
                                } if (E) {
                            if ("axisX" === this.parent.type)
                                for (s =
                                    this.parent.convertPixelToValue({
                                        y: d
                                    }), v = null, w = 0; w < this.parent.dataSeries.length; w++)(v = this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (h.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: x.dataPoint.x
                                }) : r(this.options.label) ? v.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : x.dataPoint.x
                        }) : r(this.options.label) ? Aa(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : x.dataPoint.x
                        }) : r(this.options.label) ? fa(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                        h.y = l + h.fontSize / 2 - h.measureText().height / 2 + 2;
                        h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 +
                            h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                        "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    s = this.parent.convertPixelToValue({
                        x: a
                    });
                    for (w = 0; w < this.parent.dataSeries.length; w++)(v = this.parent.dataSeries[w].getDataPointAtX(s,
                        !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], null !== v.dataPoint.y && v.dataSeries.visible && p.push(v));
                    if (0 === p.length) return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    x = p[0];
                    b = e = k = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                    f = this.chart.plotArea.y1;
                    l = this.chart.plotArea.y2;
                    this.bounds = {
                        x1: b - n / 2,
                        y1: f,
                        x2: e + n / 2,
                        y2: l
                    };
                    E = !1;
                    if (this.parent.labels)
                        for (p = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s +=
                            p)
                            if (this.parent.labels[s]) E = !0;
                            else {
                                E = !1;
                                break
                            } if (E) {
                        if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({
                                    x: a
                                }), v = null, w = 0; w < this.parent.dataSeries.length; w++)(v = this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (h.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: x.dataPoint.x
                            }) : r(this.options.label) ? v.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.x
                    }) : r(this.options.label) ? Aa(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.x
                    }) : r(this.options.label) ? fa(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    this.value = x.dataPoint.x;
                    h.x = b - h.measureText().width / 2;
                    h.x +
                        h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width);
                    h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position && (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !r(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (s = this.parent.dataSeries[0].axisX.convertPixelToValue({
                        x: a
                    }));
                    for (w = 0; w < this.parent.dataSeries.length; w++)(v =
                        this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (v.dataSeries = this.parent.dataSeries[w], null !== v.dataPoint.y && v.dataSeries.visible && p.push(v));
                    if (0 === p.length) return;
                    p.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    w = 0;
                    if ("rangeColumn" === p[0].dataSeries.type || "rangeArea" === p[0].dataSeries.type || "error" === p[0].dataSeries.type || "rangeSplineArea" === p[0].dataSeries.type || "candlestick" === p[0].dataSeries.type || "ohlc" === p[0].dataSeries.type || "boxAndWhisker" === p[0].dataSeries.type)
                        for (v =
                            Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y[0])), s = t = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else t = Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y)), t < v && (v = t, w = s);
                    else if ("stackedColumn" === p[0].dataSeries.type || "stackedArea" === p[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)), s = C = t = 0; s < p.length; s++)
                            if (p[s].dataPoint.y &&
                                p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else C += p[s].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(C)), t < v && (v = t, w = s);
                    else if ("stackedColumn100" === p[0].dataSeries.type || "stackedArea100" === p[0].dataSeries.type)
                        for (v = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)), s = E = C = t = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t =
                                    Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y[x])), t < v && (v = t, w = s);
                            else C += p[s].dataPoint.y, E = p[s].dataPoint.x.getTime ? p[s].dataPoint.x.getTime() : p[s].dataPoint.x, E = 100 * (C / p[s].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(d - this.parent.convertValueToPixel(E)), t < v && (v = t, w = s);
                    else
                        for (v = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y)), s = t = 0; s < p.length; s++)
                            if (p[s].dataPoint.y && p[s].dataPoint.y.length)
                                for (x = 0; x < p[s].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y[x])),
                                    t < v && (v = t, w = s);
                            else t = Math.abs(d - this.parent.convertValueToPixel(p[s].dataPoint.y)), t < v && (v = t, w = s);
                    x = p[w];
                    b = 0;
                    if ("rangeColumn" === this.parent.dataSeries[w].type || "rangeArea" === this.parent.dataSeries[w].type || "error" === this.parent.dataSeries[w].type || "rangeSplineArea" === this.parent.dataSeries[w].type || "candlestick" === this.parent.dataSeries[w].type || "ohlc" === this.parent.dataSeries[w].type || "boxAndWhisker" === this.parent.dataSeries[w].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                        for (s = t = 0; s < x.dataPoint.y.length; s++) t = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[s])), t < v && (v = t, b = s);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0;
                        h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : x.dataPoint.y[b]
                        }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value =
                            x.dataPoint.y[b]
                    } else if ("stackedColumn" === this.parent.dataSeries[w].type || "stackedArea" === this.parent.dataSeries[w].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y));
                        C = t = 0;
                        for (s = w; 0 <= s; s--) C += p[s].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(C)), t < v && (v = t, b = s);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(C) << 0) + 0.5 : this.parent.convertValueToPixel(C) << 0;
                        h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : x.dataPoint.y
                        }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = C
                    } else if ("stackedColumn100" === this.parent.dataSeries[w].type || "stackedArea100" === this.parent.dataSeries[w].type) {
                        v = Math.abs(d - this.parent.convertValueToPixel(p[0].dataPoint.y));
                        C = t = 0;
                        for (s = w; 0 <= s; s--) C += p[s].dataPoint.y, E = p[s].dataPoint.x.getTime ? p[s].dataPoint.x.getTime() : p[s].dataPoint.x, E = 100 * (C / p[s].dataSeries.plotUnit.dataPointYSums[E]), t = Math.abs(d - this.parent.convertValueToPixel(E)),
                            t < v && (v = t, b = s);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(E) << 0) + 0.5 : this.parent.convertValueToPixel(E) << 0;
                        h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : E
                        }) : r(this.options.label) ? fa(c ? c : E, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = E
                    } else "waterfall" === this.parent.dataSeries[w].type ? (m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) <<
                        0) + 0.5 : this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0, h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : x.dataSeries.dataPointEOs[x.index].cumulativeSum
                    }) : r(this.options.label) ? fa(c ? c : x.dataSeries.dataPointEOs[x.index].cumulativeSum, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = x.dataSeries.dataPointEOs[x.index].cumulativeSum) : (m = 1 === q.lineWidth % 2 ? (r(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) <<
                        0) + 0.5 : r(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0, h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: x.dataPoint.y
                    }) : r(this.options.label) ? fa(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = x.dataPoint.y);
                    f = l = m;
                    b = this.chart.plotArea.x1;
                    e = this.chart.plotArea.x2;
                    this.bounds = {
                        x1: b,
                        y1: f - n / 2,
                        x2: e,
                        y2: l + n / 2
                    };
                    h.y = l + h.fontSize / 2 - h.measureText().height / 2 + 2;
                    h.y - h.fontSize / 2 < this.chart.bounds.y1 ?
                        h.y = this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                    "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                }
                p = null;
                if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && h.y - h.fontSize / 2 < this.chart.bounds.y1 && (h.y = this.chart.bounds.y1 + h.fontSize /
                    2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - h.fontSize / 2 + h.measureText().height > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.height + h.fontSize / 2 + 2), b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && e <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < n && (q.moveTo(b, f), q.lineTo(e, l), q.stroke(), this._hidden = !1), q.restore(), !r(h.text) && ("number" ===
                    typeof h.text.valueOf() || 0 < h.text.length) && h.render(!0));
                if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1), "right" === this.parent._position && h.x + h.measureText().width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.measureText().width), l >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMinimum : this.parent.viewportMaximum) && f <= this.parent.convertValueToPixel(this.parent.reversed ?
                    this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < n && (q.moveTo(b, f), q.lineTo(e, l), q.stroke(), this._hidden = !1), q.restore(), !r(h.text) && ("number" === typeof h.text.valueOf() || 0 < h.text.length) && h.render(!0))
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) b = e = k = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, f = this.chart.plotArea.y1, l = this.chart.plotArea.y2, this.bounds = {
                    x1: b - n / 2,
                    y1: f,
                    x2: e + n / 2,
                    y2: l
                };
                else if ("left" === this.parent._position || "right" === this.parent._position) f = l = m = 1 === q.lineWidth %
                    2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = {
                        x1: b,
                        y1: f - n / 2,
                        x2: e,
                        y2: l + n / 2
                    };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        E = !1;
                        if (this.parent.labels)
                            for (p = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += p)
                                if (this.parent.labels[s]) E = !0;
                                else {
                                    E = !1;
                                    break
                                } if (E) {
                            if ("axisX" === this.parent.type)
                                for (s = this.parent.convertPixelToValue({
                                        y: d
                                    }), v = null, w = 0; w < this.parent.dataSeries.length; w++)(v =
                                    this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (h.text = this.labelFormatter ? this.labelFormatter({
                                    chart: this.chart,
                                    axis: this.parent.options,
                                    crosshair: this.options,
                                    value: c ? c : this.parent.convertPixelToValue(a)
                                }) : r(this.options.label) ? v.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : this.parent.convertPixelToValue(d)
                        }) : r(this.options.label) ? Aa(c ?
                            c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : this.parent.convertPixelToValue(d)
                        }) : r(this.options.label) ? fa(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                        h.y = d + h.fontSize / 2 - h.measureText().height / 2 + 2;
                        h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y =
                            this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                        "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x1 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : this.parent.convertPixelToValue(a)
                        }) : r(this.options.label) ? fa(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, h.x = b - h.measureText().width / 2, h.x + h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width), h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1), "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position && (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                    }
                else if ("bottom" ===
                    this.parent._position || "top" === this.parent._position) {
                    E = !1;
                    p = "";
                    if (this.parent.labels)
                        for (p = Math.ceil(this.parent.interval), s = 0; s < this.parent.viewportMaximum; s += p)
                            if (this.parent.labels[s]) E = !0;
                            else {
                                E = !1;
                                break
                            } if (E) {
                        if ("axisX" === this.parent.type)
                            for (s = this.parent.convertPixelToValue({
                                    x: a
                                }), v = null, w = 0; w < this.parent.dataSeries.length; w++)(v = this.parent.dataSeries[w].getDataPointAtX(s, !0)) && 0 <= v.index && (h.text = this.labelFormatter ? this.labelFormatter({
                                chart: this.chart,
                                axis: this.parent.options,
                                crosshair: this.options,
                                value: c ? c : this.parent.convertPixelToValue(a)
                            }) : r(this.options.label) ? c ? c : v.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : this.parent.convertPixelToValue(a)
                    }) : r(this.options.label) ? Aa(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : ""
                    }) : r(this.options.label) ? fa(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    h.x = b - h.measureText().width / 2;
                    h.x + h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width);
                    h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position &&
                        (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) h.text = this.labelFormatter ? this.labelFormatter({
                        chart: this.chart,
                        axis: this.parent.options,
                        crosshair: this.options,
                        value: c ? c : this.parent.convertPixelToValue(d)
                    }) : r(this.options.label) ? fa(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label, h.y = d + h.fontSize / 2 - h.measureText().height / 2 + 2, h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y =
                    this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2), "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && h.x < this.chart.bounds.x1 ? h.x = this.chart.bounds.x1 : "right" === this.parent._position && h.x + h.measureText().width > this.chart.bounds.x2 ? h.x = this.chart.bounds.x2 -
                    h.measureText().width : "top" === this.parent._position && h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - h.fontSize / 2 + h.measureText().height > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.height + h.fontSize / 2 + 2);
                0 < n && (q.moveTo(b, f), q.lineTo(e, l), q.stroke(), this._hidden = !1);
                q.restore();
                !r(h.text) && ("number" === typeof h.text.valueOf() || 0 < h.text.length) && h.render(!0);
                this.value = "bottom" === this.parent._position ||
                    "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(k);
            if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(m);
            q.globalAlpha = g
        };
        oa(aa, X);
        aa.prototype._initialize = function() {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "muthootjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " + (s ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += s ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                s || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        aa.prototype.mouseMoveHandler = function(a, d) {
            this._lastUpdated && 4 > (new Date).getTime() - this._lastUpdated || (this._lastUpdated = (new Date).getTime(),
                this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
        };
        aa.prototype._updateToolTip = function(a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            this.container || this._initialize();
            this.enabled || (this.hide(), this.dispatchEvent("hidden", {
                chart: this.chart,
                toolTip: this
            }, this));
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY
                } else this._prevX = a, this._prevY = d;
                var b = null,
                    e = null,
                    f = [],
                    l = 0;
                if (this.shared && this.enabled &&
                    "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var k = [];
                        if (this.chart.axisX)
                            for (var m = 0; m < this.chart.axisX.length; m++) {
                                for (var l = this.chart.axisX[m].convertPixelToValue({
                                        y: d
                                    }), h = null, b = 0; b < this.chart.axisX[m].dataSeries.length; b++)(h = this.chart.axisX[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX[m].dataSeries[b], null !== h.dataPoint.y && k.push(h));
                                h = null
                            }
                        if (this.chart.axisX2)
                            for (m = 0; m < this.chart.axisX2.length; m++) {
                                l =
                                    this.chart.axisX2[m].convertPixelToValue({
                                        y: d
                                    });
                                h = null;
                                for (b = 0; b < this.chart.axisX2[m].dataSeries.length; b++)(h = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX2[m].dataSeries[b], null !== h.dataPoint.y && k.push(h));
                                h = null
                            }
                    } else {
                        k = [];
                        if (this.chart.axisX)
                            for (m = 0; m < this.chart.axisX.length; m++)
                                for (l = this.chart.axisX[m].convertPixelToValue({
                                        x: a
                                    }), h = null, b = 0; b < this.chart.axisX[m].dataSeries.length; b++)(h = this.chart.axisX[m].dataSeries[b].getDataPointAtX(l,
                                    c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX[m].dataSeries[b], null !== h.dataPoint.y && k.push(h));
                        if (this.chart.axisX2)
                            for (m = 0; m < this.chart.axisX2.length; m++)
                                for (l = this.chart.axisX2[m].convertPixelToValue({
                                        x: a
                                    }), h = null, b = 0; b < this.chart.axisX2[m].dataSeries.length; b++)(h = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(l, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX2[m].dataSeries[b], null !== h.dataPoint.y && k.push(h))
                    }
                    if (0 === k.length) return;
                    k.sort(function(a, b) {
                        return a.distance - b.distance
                    });
                    c = k[0];
                    for (b = 0; b < k.length; b++) k[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && f.push(k[b]);
                    k = null
                } else {
                    if (h = this.chart.getDataPointAtXY(a, d, c)) this.currentDataPointIndex = h.dataPointIndex, this.currentSeriesIndex = h.dataSeries.index;
                    else if (s)
                        if (h = Ya(a, d, this.chart._eventManager.ghostCtx), 0 < h && "undefined" !== typeof this.chart._eventManager.objectMap[h]) {
                            h = this.chart._eventManager.objectMap[h];
                            if ("legendItem" === h.objectType) return;
                            this.currentSeriesIndex = h.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <=
                                h.dataPointIndex ? h.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        h = {};
                        if (0 <= this.currentDataPointIndex) b = e.dataPoints[this.currentDataPointIndex], h.dataSeries = e, h.dataPoint = b, h.index = this.currentDataPointIndex, h.distance = Math.abs(b.x - l), "waterfall" === e.type && (h.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, h.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            l = e.axisX.convertPixelToValue({
                                x: a
                            });
                            h = e.getDataPointAtX(l, c);
                            r(h) || (h.dataSeries = e, this.currentDataPointIndex = h.index, b = h.dataPoint)
                        }
                        if (!r(h) && !r(h.dataPoint) && !r(h.dataPoint.y))
                            if (h.dataSeries.axisY)
                                if (0 <
                                    h.dataPoint.y.length) {
                                    for (b = c = 0; b < h.dataPoint.y.length; b++) h.dataPoint.y[b] < h.dataSeries.axisY.viewportMinimum ? c-- : h.dataPoint.y[b] > h.dataSeries.axisY.viewportMaximum && c++;
                                    c < h.dataPoint.y.length && c > -h.dataPoint.y.length && f.push(h)
                                } else "column" === e.type || "bar" === e.type ? 0 > h.dataPoint.y ? 0 > h.dataSeries.axisY.viewportMinimum && h.dataSeries.axisY.viewportMaximum >= h.dataPoint.y && f.push(h) : h.dataSeries.axisY.viewportMinimum <= h.dataPoint.y && 0 <= h.dataSeries.axisY.viewportMaximum && f.push(h) : "bubble" === e.type ?
                                    (c = this.chart._eventManager.objectMap[e.dataPointIds[h.index]].size / 2, h.dataPoint.y >= h.dataSeries.axisY.viewportMinimum - c && h.dataPoint.y <= h.dataSeries.axisY.viewportMaximum + c && f.push(h)) : "waterfall" === e.type ? (c = 0, h.cumulativeSumYStartValue < h.dataSeries.axisY.viewportMinimum ? c-- : h.cumulativeSumYStartValue > h.dataSeries.axisY.viewportMaximum && c++, h.cumulativeSum < h.dataSeries.axisY.viewportMinimum ? c-- : h.cumulativeSum > h.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && f.push(h)) : (0 <= h.dataSeries.type.indexOf("100") ||
                                        "stackedColumn" === e.type || "stackedBar" === e.type || h.dataPoint.y >= h.dataSeries.axisY.viewportMinimum && h.dataPoint.y <= h.dataSeries.axisY.viewportMaximum) && f.push(h);
                        else f.push(h)
                    }
                }
                if (0 < f.length) {
                    this.highlightObjects(f);
                    if (this.enabled) {
                        var p = "",
                            p = this.getToolTipInnerHTML({
                                entries: f
                            });
                        if (null !== p) {
                            this.contentDiv.innerHTML = p;
                            c = !1;
                            "none" === this.container.style.display && (c = !0, this.container.style.display = "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" :
                                    "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                                    this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                                    0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                                    this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal"
                            } catch (n) {}
                            "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) -
                                this.container.clientWidth << 0, a -= 10);
                            0 > a && (a += this.container.clientWidth + 20);
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" ===
                                f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : d : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px"
                        } else this.hide(!1), this.dispatchEvent("hidden", {
                            chart: this.chart,
                            toolTip: this
                        }, this)
                    }
                    d = [];
                    for (b = 0; b < f.length; b++) d.push({
                        xValue: f[b].dataPoint.x,
                        dataPoint: f[b].dataPoint,
                        dataSeries: f[b].dataSeries,
                        dataPointIndex: f[b].index,
                        dataSeriesIndex: f[b].dataSeries._index
                    });
                    p = {
                        chart: this.chart,
                        toolTip: this.options,
                        content: p,
                        entries: d
                    };
                    this._entries = f;
                    this.dispatchEvent("updated", p, this)
                } else this.hide()
            }
        };
        aa.prototype.highlightObjects = function(a) {
            var d = this.chart.overlaidCanvasCtx;
            if (r(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
            d.save();
            var c = this.chart.plotArea,
                b = 0;
            d.beginPath();
            d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
            d.clip();
            for (c = 0; c < a.length; c++) {
                var e = a[c];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) &&
                    e.objectType && "dataPoint" === e.objectType) {
                    var b = this.chart.data[e.dataSeriesIndex],
                        f = b.dataPoints[e.dataPointIndex],
                        l = e.dataPointIndex;
                    !1 === f.highlightEnabled || !0 !== b.highlightEnabled && !0 !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (f = b.getMarkerProperties(l, e.x1, e.y1, this.chart.overlaidCanvasCtx),
                            f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), Y.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = b.getMarkerProperties(l, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), Y.drawMarkers([f]))) : "bubble" === b.type ? (f = b.getMarkerProperties(l, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color =
                            "white", f.borderColor = "white", d.globalAlpha = 0.3, Y.drawMarkers([f]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? da(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === b.type || "doughnut" === b.type ? Z(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ?
                        qa(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), da(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha =
                            1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness /
                            2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), da(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 -
                            e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && w(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
                }
            }
            d.restore();
            d.globalAlpha = 1;
            d.beginPath()
        };
        aa.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            for (var d = null, c = null, b = null, e = 0, f = "", l = !0, k = 0; k < a.length; k++)
                if (a[k].dataSeries.toolTipContent || a[k].dataPoint.toolTipContent) {
                    l = !1;
                    break
                } if (l && (this.content && "function" === typeof this.content || this.contentFormatter)) a = {
                chart: this.chart,
                toolTip: this.options,
                entries: a
            }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var m = null,
                        h = "", k = 0; k < a.length; k++) c = a[k].dataSeries, b = a[k].dataPoint, e = a[k].index, f = "", 0 === k && (l && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? h += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (h += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}"), h += "</br>", h = this.chart.replaceKeywordsWithValue(h, b, c, e)), null === b.toolTipContent || "undefined" === typeof b.toolTipContent &&
                    null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                            ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", m = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ?
                            this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content :
                            "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") :
                        "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                        null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(f, b, c, e) + d, k < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(f, b, c, e), k < a.length - 1 && (d += "</br>")));
                null !== d && (d = h + d)
            } else {
                c = a[0].dataSeries;
                b = a[0].dataPoint;
                e = a[0].index;
                if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
                "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" ===
                    c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? f = b.toolTipContent ?
                    b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" :
                        "'color:{color};'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" :
                    "candlestick" === c.type || "ohlc" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent :
                        this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(f, b, c, e)
            }
            return d
        };
        aa.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        };
        aa.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        aa.prototype.hide = function(a) {
            this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas())
        };
        aa.prototype.show = function(a, d, c) {
            this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c)
        };
        aa.prototype.showAtIndex = function(a, d) {};
        aa.prototype.showAtX = function(a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var c, b, e, f = [];
            e = !1;
            d = !r(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared)
                for (var l = 0; l < this.chart.data.length; l++) c = this.chart.data[l], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            else c = this.chart.data[d], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !r(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            if (0 < f.length) {
                for (l = 0; l < f.length; l++)
                    if (b = f[l], b.dataPoint.x < b.dataSeries.axisX.viewportMinimum ||
                        b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum) e = !0;
                    else {
                        e = !1;
                        break
                    } if (e) return this.hide(), !1;
                this.highlightObjects(f);
                this._entries = f;
                b = "";
                b = this.getToolTipInnerHTML({
                    entries: f
                });
                if (null !== b) {
                    this.contentDiv.innerHTML = b;
                    b = !1;
                    "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : s ? "rgba(255,255,255,.9)" :
                            "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                            this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                            0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                            this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : s ? "italic" : "normal"
                    } catch (k) {}
                    "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) -
                        this.container.clientWidth << 0 : f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
                    0 > c && (c += this.container.clientWidth + 20);
                    c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    f = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type &&
                        "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                    f = -f + 10;
                    0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(c,
                        f);
                    !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                    this.container.style.left = c + "px";
                    this.container.style.bottom = f + "px"
                } else return this.hide(!1), !1
            } else return this.hide(), !1;
            return !0
        };
        aa.prototype.fixMozTransitionDelay = function(a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var c = parseFloat(this.container.style.left),
                    c = isNaN(c) ? 0 : c,
                    b = parseFloat(this.container.style.bottom),
                    b = isNaN(b) ? 0 : b;
                10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        };
        aa.prototype.getContainerTransition = function(a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s"
        };
        ea.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            s && (this.ghostCtx.clearRect(0, 0, this.chart.width,
                this.chart.height), this.ghostCtx.beginPath())
        };
        ea.prototype.getNewObjectTrackingId = function() {
            return ++this.lastObjectId
        };
        ea.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    c = Na(a),
                    b = null;
                if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
                    if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                        var e = this.chart.data[b.dataSeriesIndex],
                            f = e.dataPoints[b.dataPointIndex],
                            l = b.dataPointIndex;
                        b.eventParameter = {
                            x: c.x,
                            y: c.y,
                            dataPoint: f,
                            dataSeries: e.options,
                            dataPointIndex: l,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        b.eventContext = {
                            context: f,
                            userContext: f,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        d.push(b);
                        b = this.objectMap[e.id];
                        b.eventParameter = {
                            x: c.x,
                            y: c.y,
                            dataPoint: f,
                            dataSeries: e.options,
                            dataPointIndex: l,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        b.eventContext = {
                            context: e,
                            userContext: e.options,
                            mouseover: "mouseover",
                            mousemove: "mousemove",
                            mouseout: "mouseout",
                            click: "click"
                        };
                        d.push(this.objectMap[e.id])
                    } else "legendItem" ===
                        b.objectType && (e = this.chart.data[b.dataSeriesIndex], f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = {
                            x: c.x,
                            y: c.y,
                            dataSeries: e.options,
                            dataPoint: f,
                            dataPointIndex: b.dataPointIndex,
                            dataSeriesIndex: b.dataSeriesIndex,
                            chart: this.chart
                        }, b.eventContext = {
                            context: this.chart.legend,
                            userContext: this.chart.legend.options,
                            mouseover: "itemmouseover",
                            mousemove: "itemmousemove",
                            mouseout: "itemmouseout",
                            click: "itemclick"
                        }, d.push(b));
                e = [];
                for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                    f = !0;
                    for (b = 0; b < d.length; b++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                            f = !1;
                            break
                        } f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c])
                }
                this.mouseoveredObjectMaps = e;
                for (c = 0; c < d.length; c++) {
                    e = !1;
                    for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                            e = !0;
                            break
                        } e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
                    "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c],
                        "mousemove", a)
                }
            }
        };
        ea.prototype.fireEvent = function(a, d, c) {
            if (a && d) {
                var b = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && (e && f[e[d]]) && f[e[d]].call(f, b);
                "mouseout" !== d ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],
                    b);
                "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b)
            }
        };
        ka.prototype.animate = function(a, d, c, b, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || L.easing.linear;
            c && this.animations.push({
                startTime: (new Date).getTime() + (a ? a : 0),
                duration: d,
                animationCallback: c,
                onComplete: b
            });
            for (a = []; 0 < this.animations.length;)
                if (d = this.animations.shift(), c = (new Date).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime,
                        d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete) d.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() {
                f.animate.call(f)
            }) : this.chart.isAnimating = !1
        };
        ka.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var L = {
                yScaleAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ja, a * c.canvas.height / ja)
                    }
                },
                xScaleAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ja, c.canvas.height / ja)
                    }
                },
                xClipAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ja, b.height /
                            ja);
                        c.restore()
                    }
                },
                fadeInAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        c.globalAlpha = a;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ja, c.canvas.height / ja);
                        c.restore()
                    }
                },
                easing: {
                    linear: function(a, d, c, b) {
                        return c * a / b + d
                    },
                    easeOutQuad: function(a, d, c, b) {
                        return -c * (a /= b) * (a - 2) + d
                    },
                    easeOutQuart: function(a, d, c, b) {
                        return -c * ((a = a / b - 1) * a * a * a - 1) + d
                    },
                    easeInQuad: function(a, d, c, b) {
                        return c * (a /= b) * a + d
                    },
                    easeInQuart: function(a, d, c, b) {
                        return c * (a /= b) * a * a * a + d
                    }
                }
            },
            Y = {
                drawMarker: function(a,
                    d, c, b, e, f, l, k) {
                    if (c) {
                        var m = 1;
                        c.fillStyle = f ? f : "#000000";
                        c.strokeStyle = l ? l : "#000000";
                        c.lineWidth = k ? k : 0;
                        c.setLineDash && c.setLineDash(Q("solid", k));
                        "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), k && (l ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), k && (l ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m))) :
                            "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), f && c.fill(), k && (l ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m)), c.beginPath()) : "cross" === b && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke())
                    }
                },
                drawMarkers: function(a) {
                    for (var d = 0; d < a.length; d++) {
                        var c = a[d];
                        Y.drawMarker(c.x, c.y, c.ctx, c.type,
                            c.size, c.color, c.borderColor, c.borderThickness)
                    }
                }
            };
        return m
    }();
    w.version = "v3.2.9 Beta 1";
    window.MuthootJS && (w && !window.MuthootJS.Chart) && (window.MuthootJS.Chart = w)
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() {
        return this.context_ || (this.context_ = new C(this))
    }

    function W(a, b, c) {
        var g = M.call(arguments, 2);
        return function() {
            return a.apply(b, g.concat(M.call(arguments)))
        }
    }

    function N(a) {
        return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
    }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) {
        return Math.min(c, Math.max(b, a))
    }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = {
            color: b,
            alpha: c
        }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({
            type: "bezierCurveTo",
            cp1x: b.x,
            cp1y: b.y,
            cp2x: c.x,
            cp2y: c.y,
            x: g.x,
            y: g.y
        });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) {
                return a.offset - b.offset
            });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) {
        a = a.m_;
        return {
            x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r,
            y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r
        }
    }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) {
            a = a.getElementsByTagName("canvas");
            for (var b = 0; b < a.length; b++) this.initElement(a[b])
        },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = {
            butt: "flat",
            round: "round"
        },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() {
        this.currentPath_ = []
    };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "moveTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({
            type: "lineTo",
            x: c.x,
            y: c.y
        });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = {
            x: this.currentX_ + 2 / 3 * (a.x - this.currentX_),
            y: this.currentY_ + 2 / 3 * (a.y - this.currentY_)
        };
        R(this, g, {
            x: g.x + (c.x - this.currentX_) / 3,
            y: g.y + (c.y - this.currentY_) / 3
        }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = {
                x: null,
                y: null
            }, d = {
                x: null,
                y: null
            }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) {
                if (null == c.x || f.x < c.x) c.x = f.x;
                if (null == d.x || f.x > d.x) d.x = f.x;
                if (null == c.y || f.y < c.y) c.y = f.y;
                if (null == d.y || f.y > d.y) d.y = f.y
            }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() {
        this.stroke(!0)
    };
    d.closePath = function() {
        this.currentPath_.push({
            type: "close"
        })
    };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() {
        this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
    };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try {
                l.font = h
            } catch (u) {}
            h = L[h] = {
                style: l.fontStyle || "normal",
                variant: l.fontVariant || "normal",
                weight: l.fontWeight || "normal",
                size: l.fontSize || 10,
                family: l.fontFamily || "sans-serif"
            }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, {
            x: -d,
            y: 0
        }, {
            x: r,
            y: h.size
        });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) {
        this.drawText_(a, b, c, d, !1)
    };
    d.strokeText = function(a,
        b, c, d) {
        this.drawText_(a, b, c, d, !0)
    };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return {
            width: this.textMeasureEl_.offsetWidth
        }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) {
        return new I(a, b)
    };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({
            offset: a,
            color: b.color,
            alpha: b.alpha
        })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
