! function() { window.flexibility = {}, Array.prototype.forEach || (Array.prototype.forEach = function(t) {
            if (void 0 === this || null === this) throw new TypeError(this + "is not an object");
            if (!(t instanceof Function)) throw new TypeError(t + " is not a function");
            for (var e = Object(this), i = arguments[1], n = e instanceof String ? e.split("") : e, r = Math.max(Math.min(n.length, 9007199254740991), 0) || 0, o = -1; ++o < r;) o in n && t.call(i, n[o], o, e) }),
        function(t, e) { "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.computeLayout = e() }(flexibility, function() {
            var t = function() {
                function t(e) {
                    if ((!e.layout || e.isDirty) && (e.layout = { width: void 0, height: void 0, top: 0, left: 0, right: 0, bottom: 0 }), e.style || (e.style = {}), e.children || (e.children = []), e.style.measure && e.children && e.children.length) throw new Error("Using custom measure function is supported only for leaf nodes.");
                    return e.children.forEach(t), e }

                function e(t) {
                    return void 0 === t }

                function i(t) {
                    return t === q || t === G }

                function n(t) {
                    return t === U || t === Z }

                function r(t, e) {
                    if (void 0 !== t.style.marginStart && i(e)) return t.style.marginStart;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.marginLeft;
                            break;
                        case "row-reverse":
                            n = t.style.marginRight;
                            break;
                        case "column":
                            n = t.style.marginTop;
                            break;
                        case "column-reverse":
                            n = t.style.marginBottom }
                    return void 0 !== n ? n : void 0 !== t.style.margin ? t.style.margin : 0 }

                function o(t, e) {
                    if (void 0 !== t.style.marginEnd && i(e)) return t.style.marginEnd;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.marginRight;
                            break;
                        case "row-reverse":
                            n = t.style.marginLeft;
                            break;
                        case "column":
                            n = t.style.marginBottom;
                            break;
                        case "column-reverse":
                            n = t.style.marginTop }
                    return null != n ? n : void 0 !== t.style.margin ? t.style.margin : 0 }

                function l(t, e) {
                    if (void 0 !== t.style.paddingStart && t.style.paddingStart >= 0 && i(e)) return t.style.paddingStart;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.paddingLeft;
                            break;
                        case "row-reverse":
                            n = t.style.paddingRight;
                            break;
                        case "column":
                            n = t.style.paddingTop;
                            break;
                        case "column-reverse":
                            n = t.style.paddingBottom }
                    return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0 }

                function a(t, e) {
                    if (void 0 !== t.style.paddingEnd && t.style.paddingEnd >= 0 && i(e)) return t.style.paddingEnd;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.paddingRight;
                            break;
                        case "row-reverse":
                            n = t.style.paddingLeft;
                            break;
                        case "column":
                            n = t.style.paddingBottom;
                            break;
                        case "column-reverse":
                            n = t.style.paddingTop }
                    return null != n && n >= 0 ? n : void 0 !== t.style.padding && t.style.padding >= 0 ? t.style.padding : 0 }

                function d(t, e) {
                    if (void 0 !== t.style.borderStartWidth && t.style.borderStartWidth >= 0 && i(e)) return t.style.borderStartWidth;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.borderLeftWidth;
                            break;
                        case "row-reverse":
                            n = t.style.borderRightWidth;
                            break;
                        case "column":
                            n = t.style.borderTopWidth;
                            break;
                        case "column-reverse":
                            n = t.style.borderBottomWidth }
                    return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0 }

                function s(t, e) {
                    if (void 0 !== t.style.borderEndWidth && t.style.borderEndWidth >= 0 && i(e)) return t.style.borderEndWidth;
                    var n = null;
                    switch (e) {
                        case "row":
                            n = t.style.borderRightWidth;
                            break;
                        case "row-reverse":
                            n = t.style.borderLeftWidth;
                            break;
                        case "column":
                            n = t.style.borderBottomWidth;
                            break;
                        case "column-reverse":
                            n = t.style.borderTopWidth }
                    return null != n && n >= 0 ? n : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0 ? t.style.borderWidth : 0 }

                function u(t, e) {
                    return l(t, e) + d(t, e) }

                function y(t, e) {
                    return a(t, e) + s(t, e) }

                function c(t, e) {
                    return d(t, e) + s(t, e) }

                function f(t, e) {
                    return r(t, e) + o(t, e) }

                function h(t, e) {
                    return u(t, e) + y(t, e) }

                function m(t) {
                    return t.style.justifyContent ? t.style.justifyContent : "flex-start" }

                function v(t) {
                    return t.style.alignContent ? t.style.alignContent : "flex-start" }

                function p(t, e) {
                    return e.style.alignSelf ? e.style.alignSelf : t.style.alignItems ? t.style.alignItems : "stretch" }

                function x(t, e) {
                    if (e === N) {
                        if (t === q) return G;
                        if (t === G) return q }
                    return t }

                function g(t, e) {
                    var i;
                    return i = t.style.direction ? t.style.direction : M, i === M && (i = void 0 === e ? A : e), i }

                function b(t) {
                    return t.style.flexDirection ? t.style.flexDirection : U }

                function w(t, e) {
                    return n(t) ? x(q, e) : U }

                function W(t) {
                    return t.style.position ? t.style.position : "relative" }

                function L(t) {
                    return W(t) === tt && t.style.flex > 0 }

                function E(t) {
                    return "wrap" === t.style.flexWrap }

                function S(t, e) {
                    return t.layout[ot[e]] + f(t, e) }

                function k(t, e) {
                    return void 0 !== t.style[ot[e]] && t.style[ot[e]] >= 0 }

                function C(t, e) {
                    return void 0 !== t.style[e] }

                function T(t) {
                    return void 0 !== t.style.measure }

                function $(t, e) {
                    return void 0 !== t.style[e] ? t.style[e] : 0 }

                function H(t, e, i) {
                    var n = { row: t.style.minWidth, "row-reverse": t.style.minWidth, column: t.style.minHeight, "column-reverse": t.style.minHeight }[e],
                        r = { row: t.style.maxWidth, "row-reverse": t.style.maxWidth, column: t.style.maxHeight, "column-reverse": t.style.maxHeight }[e],
                        o = i;
                    return void 0 !== r && r >= 0 && o > r && (o = r), void 0 !== n && n >= 0 && n > o && (o = n), o }

                function z(t, e) {
                    return t > e ? t : e }

                function B(t, e) { void 0 === t.layout[ot[e]] && k(t, e) && (t.layout[ot[e]] = z(H(t, e, t.style[ot[e]]), h(t, e))) }

                function D(t, e, i) { e.layout[nt[i]] = t.layout[ot[i]] - e.layout[ot[i]] - e.layout[rt[i]] }

                function I(t, e) {
                    return void 0 !== t.style[it[e]] ? $(t, it[e]) : -$(t, nt[e]) }

                function R(t, n, l, a) {
                    var s = g(t, a),
                        R = x(b(t), s),
                        M = w(R, s),
                        A = x(q, s);
                    B(t, R), B(t, M), t.layout.direction = s, t.layout[it[R]] += r(t, R) + I(t, R), t.layout[nt[R]] += o(t, R) + I(t, R), t.layout[it[M]] += r(t, M) + I(t, M), t.layout[nt[M]] += o(t, M) + I(t, M);
                    var N = t.children.length,
                        lt = h(t, A),
                        at = h(t, U);
                    if (T(t)) {
                        var dt = !e(t.layout[ot[A]]),
                            st = F;
                        st = k(t, A) ? t.style.width : dt ? t.layout[ot[A]] : n - f(t, A), st -= lt;
                        var ut = F;
                        ut = k(t, U) ? t.style.height : e(t.layout[ot[U]]) ? l - f(t, A) : t.layout[ot[U]], ut -= h(t, U);
                        var yt = !k(t, A) && !dt,
                            ct = !k(t, U) && e(t.layout[ot[U]]);
                        if (yt || ct) {
                            var ft = t.style.measure(st, ut);
                            yt && (t.layout.width = ft.width + lt), ct && (t.layout.height = ft.height + at) }
                        if (0 === N) return }
                    var ht, mt, vt, pt, xt = E(t),
                        gt = m(t),
                        bt = u(t, R),
                        wt = u(t, M),
                        Wt = h(t, R),
                        Lt = h(t, M),
                        Et = !e(t.layout[ot[R]]),
                        St = !e(t.layout[ot[M]]),
                        kt = i(R),
                        Ct = null,
                        Tt = null,
                        $t = F;
                    Et && ($t = t.layout[ot[R]] - Wt);
                    for (var Ht = 0, zt = 0, Bt = 0, Dt = 0, It = 0, Rt = 0; N > zt;) {
                        var jt, Ft, Mt = 0,
                            At = 0,
                            Nt = 0,
                            qt = 0,
                            Gt = Et && gt === O || !Et && gt !== _,
                            Ut = Gt ? N : Ht,
                            Zt = !0,
                            Ot = N,
                            _t = null,
                            Jt = null,
                            Kt = bt,
                            Pt = 0;
                        for (ht = Ht; N > ht; ++ht) { vt = t.children[ht], vt.lineIndex = Rt, vt.nextAbsoluteChild = null, vt.nextFlexChild = null;
                            var Qt = p(t, vt);
                            if (Qt === Y && W(vt) === tt && St && !k(vt, M)) vt.layout[ot[M]] = z(H(vt, M, t.layout[ot[M]] - Lt - f(vt, M)), h(vt, M));
                            else if (W(vt) === et)
                                for (null === Ct && (Ct = vt), null !== Tt && (Tt.nextAbsoluteChild = vt), Tt = vt, mt = 0; 2 > mt; mt++) pt = 0 !== mt ? q : U, !e(t.layout[ot[pt]]) && !k(vt, pt) && C(vt, it[pt]) && C(vt, nt[pt]) && (vt.layout[ot[pt]] = z(H(vt, pt, t.layout[ot[pt]] - h(t, pt) - f(vt, pt) - $(vt, it[pt]) - $(vt, nt[pt])), h(vt, pt)));
                            var Vt = 0;
                            if (Et && L(vt) ? (At++, Nt += vt.style.flex, null === _t && (_t = vt), null !== Jt && (Jt.nextFlexChild = vt), Jt = vt, Vt = h(vt, R) + f(vt, R)) : (jt = F, Ft = F, kt ? Ft = k(t, U) ? t.layout[ot[U]] - at : l - f(t, U) - at : jt = k(t, A) ? t.layout[ot[A]] - lt : n - f(t, A) - lt, 0 === Bt && j(vt, jt, Ft, s), W(vt) === tt && (qt++, Vt = S(vt, R))), xt && Et && Mt + Vt > $t && ht !== Ht) { qt--, Bt = 1;
                                break }
                            Gt && (W(vt) !== tt || L(vt)) && (Gt = !1, Ut = ht), Zt && (W(vt) !== tt || Qt !== Y && Qt !== Q || e(vt.layout[ot[M]])) && (Zt = !1, Ot = ht), Gt && (vt.layout[rt[R]] += Kt, Et && D(t, vt, R), Kt += S(vt, R), Pt = z(Pt, H(vt, M, S(vt, M)))), Zt && (vt.layout[rt[M]] += Dt + wt, St && D(t, vt, M)), Bt = 0, Mt += Vt, zt = ht + 1 }
                        var Xt = 0,
                            Yt = 0,
                            te = 0;
                        if (te = Et ? $t - Mt : z(Mt, 0) - Mt, 0 !== At) {
                            var ee, ie, ne = te / Nt;
                            for (Jt = _t; null !== Jt;) ee = ne * Jt.style.flex + h(Jt, R), ie = H(Jt, R, ee), ee !== ie && (te -= ie, Nt -= Jt.style.flex), Jt = Jt.nextFlexChild;
                            for (ne = te / Nt, 0 > ne && (ne = 0), Jt = _t; null !== Jt;) Jt.layout[ot[R]] = H(Jt, R, ne * Jt.style.flex + h(Jt, R)), jt = F, k(t, A) ? jt = t.layout[ot[A]] - lt : kt || (jt = n - f(t, A) - lt), Ft = F, k(t, U) ? Ft = t.layout[ot[U]] - at : kt && (Ft = l - f(t, U) - at), j(Jt, jt, Ft, s), vt = Jt, Jt = Jt.nextFlexChild, vt.nextFlexChild = null } else gt !== O && (gt === _ ? Xt = te / 2 : gt === J ? Xt = te : gt === K ? (te = z(te, 0), Yt = At + qt - 1 !== 0 ? te / (At + qt - 1) : 0) : gt === P && (Yt = te / (At + qt), Xt = Yt / 2));
                        for (Kt += Xt, ht = Ut; zt > ht; ++ht) vt = t.children[ht], W(vt) === et && C(vt, it[R]) ? vt.layout[rt[R]] = $(vt, it[R]) + d(t, R) + r(vt, R) : (vt.layout[rt[R]] += Kt, Et && D(t, vt, R), W(vt) === tt && (Kt += Yt + S(vt, R), Pt = z(Pt, H(vt, M, S(vt, M)))));
                        var re = t.layout[ot[M]];
                        for (St || (re = z(H(t, M, Pt + Lt), Lt)), ht = Ot; zt > ht; ++ht)
                            if (vt = t.children[ht], W(vt) === et && C(vt, it[M])) vt.layout[rt[M]] = $(vt, it[M]) + d(t, M) + r(vt, M);
                            else {
                                var oe = wt;
                                if (W(vt) === tt) {
                                    var Qt = p(t, vt);
                                    if (Qt === Y) e(vt.layout[ot[M]]) && (vt.layout[ot[M]] = z(H(vt, M, re - Lt - f(vt, M)), h(vt, M)));
                                    else if (Qt !== Q) {
                                        var le = re - Lt - S(vt, M);
                                        oe += Qt === V ? le / 2 : le } }
                                vt.layout[rt[M]] += Dt + oe, St && D(t, vt, M) }
                        Dt += Pt, It = z(It, Kt), Rt += 1, Ht = zt }
                    if (Rt > 1 && St) {
                        var ae = t.layout[ot[M]] - Lt,
                            de = ae - Dt,
                            se = 0,
                            ue = wt,
                            ye = v(t);
                        ye === X ? ue += de : ye === V ? ue += de / 2 : ye === Y && ae > Dt && (se = de / Rt);
                        var ce = 0;
                        for (ht = 0; Rt > ht; ++ht) {
                            var fe = ce,
                                he = 0;
                            for (mt = fe; N > mt; ++mt)
                                if (vt = t.children[mt], W(vt) === tt) {
                                    if (vt.lineIndex !== ht) break;
                                    e(vt.layout[ot[M]]) || (he = z(he, vt.layout[ot[M]] + f(vt, M))) }
                            for (ce = mt, he += se, mt = fe; ce > mt; ++mt)
                                if (vt = t.children[mt], W(vt) === tt) {
                                    var me = p(t, vt);
                                    if (me === Q) vt.layout[rt[M]] = ue + r(vt, M);
                                    else if (me === X) vt.layout[rt[M]] = ue + he - o(vt, M) - vt.layout[ot[M]];
                                    else if (me === V) {
                                        var ve = vt.layout[ot[M]];
                                        vt.layout[rt[M]] = ue + (he - ve) / 2 } else me === Y && (vt.layout[rt[M]] = ue + r(vt, M)) }
                            ue += he } }
                    var pe = !1,
                        xe = !1;
                    if (Et || (t.layout[ot[R]] = z(H(t, R, It + y(t, R)), Wt), (R === G || R === Z) && (pe = !0)), St || (t.layout[ot[M]] = z(H(t, M, Dt + Lt), Lt), (M === G || M === Z) && (xe = !0)), pe || xe)
                        for (ht = 0; N > ht; ++ht) vt = t.children[ht], pe && D(t, vt, R), xe && D(t, vt, M);
                    for (Tt = Ct; null !== Tt;) {
                        for (mt = 0; 2 > mt; mt++) pt = 0 !== mt ? q : U, !e(t.layout[ot[pt]]) && !k(Tt, pt) && C(Tt, it[pt]) && C(Tt, nt[pt]) && (Tt.layout[ot[pt]] = z(H(Tt, pt, t.layout[ot[pt]] - c(t, pt) - f(Tt, pt) - $(Tt, it[pt]) - $(Tt, nt[pt])), h(Tt, pt))), C(Tt, nt[pt]) && !C(Tt, it[pt]) && (Tt.layout[it[pt]] = t.layout[ot[pt]] - Tt.layout[ot[pt]] - $(Tt, nt[pt]));
                        vt = Tt, Tt = Tt.nextAbsoluteChild, vt.nextAbsoluteChild = null } }

                function j(t, e, i, n) { t.shouldUpdate = !0;
                    var r = t.style.direction || A,
                        o = !t.isDirty && t.lastLayout && t.lastLayout.requestedHeight === t.layout.height && t.lastLayout.requestedWidth === t.layout.width && t.lastLayout.parentMaxWidth === e && t.lastLayout.parentMaxHeight === i && t.lastLayout.direction === r;
                    o ? (t.layout.width = t.lastLayout.width, t.layout.height = t.lastLayout.height, t.layout.top = t.lastLayout.top, t.layout.left = t.lastLayout.left) : (t.lastLayout || (t.lastLayout = {}), t.lastLayout.requestedWidth = t.layout.width, t.lastLayout.requestedHeight = t.layout.height, t.lastLayout.parentMaxWidth = e, t.lastLayout.parentMaxHeight = i, t.lastLayout.direction = r, t.children.forEach(function(t) { t.layout.width = void 0, t.layout.height = void 0, t.layout.top = 0, t.layout.left = 0 }), R(t, e, i, n), t.lastLayout.width = t.layout.width, t.lastLayout.height = t.layout.height, t.lastLayout.top = t.layout.top, t.lastLayout.left = t.layout.left) }
                var F, M = "inherit",
                    A = "ltr",
                    N = "rtl",
                    q = "row",
                    G = "row-reverse",
                    U = "column",
                    Z = "column-reverse",
                    O = "flex-start",
                    _ = "center",
                    J = "flex-end",
                    K = "space-between",
                    P = "space-around",
                    Q = "flex-start",
                    V = "center",
                    X = "flex-end",
                    Y = "stretch",
                    tt = "relative",
                    et = "absolute",
                    it = { row: "left", "row-reverse": "right", column: "top", "column-reverse": "bottom" },
                    nt = { row: "right", "row-reverse": "left", column: "bottom", "column-reverse": "top" },
                    rt = { row: "left", "row-reverse": "right", column: "top", "column-reverse": "bottom" },
                    ot = { row: "width", "row-reverse": "width", column: "height", "column-reverse": "height" };
                return { layoutNodeImpl: R, computeLayout: j, fillNodes: t } }();
            return "object" == typeof exports && (module.exports = t),
                function(e) { t.fillNodes(e), t.computeLayout(e) } }), !window.addEventListener && window.attachEvent && function() { Window.prototype.addEventListener = HTMLDocument.prototype.addEventListener = Element.prototype.addEventListener = function(t, e) { this.attachEvent("on" + t, e) }, Window.prototype.removeEventListener = HTMLDocument.prototype.removeEventListener = Element.prototype.removeEventListener = function(t, e) { this.detachEvent("on" + t, e) } }(), flexibility.detect = function() {
            var t = document.createElement("p");
            try {
                return t.style.display = "flex", "flex" === t.style.display } catch (e) {
                return !1 } }, !flexibility.detect() && document.attachEvent && document.documentElement.currentStyle && document.attachEvent("onreadystatechange", function() { flexibility.onresize({ target: document.documentElement }) }), flexibility.init = function(t) {
            var e = t.onlayoutcomplete;
            return e || (e = t.onlayoutcomplete = { node: t, style: {}, children: [] }), e.style.display = t.currentStyle["-js-display"] || t.currentStyle.display, e };
    var t, e = 1e3,
        i = 15,
        n = document.documentElement,
        r = 0,
        o = 0;
    flexibility.onresize = function(l) {
        if (n.clientWidth !== r || n.clientHeight !== o) { r = n.clientWidth, o = n.clientHeight, clearTimeout(t), window.removeEventListener("resize", flexibility.onresize);
            var a = l.target && 1 === l.target.nodeType ? l.target : document.documentElement;
            flexibility.walk(a), t = setTimeout(function() { window.addEventListener("resize", flexibility.onresize) }, e / i) } };
    var l = { alignContent: { initial: "stretch", valid: /^(flex-start|flex-end|center|space-between|space-around|stretch)/ }, alignItems: { initial: "stretch", valid: /^(flex-start|flex-end|center|baseline|stretch)$/ }, boxSizing: { initial: "content-box", valid: /^(border-box|content-box)$/ }, flexDirection: { initial: "row", valid: /^(row|row-reverse|column|column-reverse)$/ }, flexWrap: { initial: "nowrap", valid: /^(nowrap|wrap|wrap-reverse)$/ }, justifyContent: { initial: "flex-start", valid: /^(flex-start|flex-end|center|space-between|space-around)$/ } };
    flexibility.updateFlexContainerCache = function(t) {
        var e = t.style,
            i = t.node.currentStyle,
            n = t.node.style,
            r = {};
        (i["flex-flow"] || n["flex-flow"] || "").replace(/^(row|row-reverse|column|column-reverse)\s+(nowrap|wrap|wrap-reverse)$/i, function(t, e, i) { r.flexDirection = e, r.flexWrap = i });
        for (var o in l) {
            var a = o.replace(/[A-Z]/g, "-$&").toLowerCase(),
                d = l[o],
                s = i[a] || n[a];
            e[o] = d.valid.test(s) ? s : r[o] || d.initial } };
    var a = { alignSelf: { initial: "auto", valid: /^(auto|flex-start|flex-end|center|baseline|stretch)$/ }, boxSizing: { initial: "content-box", valid: /^(border-box|content-box)$/ }, flexBasis: { initial: "auto", valid: /^((?:[-+]?0|[-+]?[0-9]*\.?[0-9]+(?:%|ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmax|vmin|vw))|auto|fill|max-content|min-content|fit-content|content)$/ }, flexGrow: { initial: 0, valid: /^\+?(0|[1-9][0-9]*)$/ }, flexShrink: { initial: 0, valid: /^\+?(0|[1-9][0-9]*)$/ }, order: { initial: 0, valid: /^([-+]?[0-9]+)$/ } };
    flexibility.updateFlexItemCache = function(t) {
        var e = t.style,
            i = t.node.currentStyle,
            n = t.node.style,
            r = {};
        (i.flex || n.flex || "").replace(/^\+?(0|[1-9][0-9]*)/, function(t) { r.flexGrow = t });
        for (var o in a) {
            var l = o.replace(/[A-Z]/g, "-$&").toLowerCase(),
                d = a[o],
                s = i[l] || n[l];
            e[o] = d.valid.test(s) ? s : r[o] || d.initial, "number" == typeof d.initial && (e[o] = parseFloat(e[o])) } };
    var d = "border:0 solid;clip:rect(0 0 0 0);display:inline-block;font:0/0 serif;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;overflow:hidden;padding:0;position:absolute;width:1em;",
        s = { medium: 4, none: 0, thick: 6, thin: 2 },
        u = { borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 0, height: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0, paddingTop: 0, marginBottom: 0, marginLeft: 0, marginRight: 0, marginTop: 0, maxHeight: 0, maxWidth: 0, minHeight: 0, minWidth: 0, width: 0 },
        y = /^([-+]?0|[-+]?[0-9]*\.?[0-9]+)/,
        c = 100;
    flexibility.updateLengthCache = function(t) {
        var e, i, n, r = t.node,
            o = t.style,
            l = r.parentNode,
            a = document.createElement("_"),
            f = a.runtimeStyle,
            h = r.currentStyle;
        f.cssText = d + "font-size:" + h.fontSize, l.insertBefore(a, r.nextSibling), o.fontSize = a.offsetWidth, f.fontSize = o.fontSize + "px";
        for (var m in u) {
            var v = h[m];
            y.test(v) || "auto" === v && !/(width|height)/i.test(m) ? /%$/.test(v) ? (/^(bottom|height|top)$/.test(m) ? (i || (i = l.offsetHeight), n = i) : (e || (e = l.offsetWidth), n = e), o[m] = parseFloat(v) * n / c) : (f.width = v, o[m] = a.offsetWidth) : /^border/.test(m) && v in s ? o[m] = s[v] : delete o[m] }
        l.removeChild(a), "none" === h.borderTopStyle && (o.borderTopWidth = 0), "none" === h.borderRightStyle && (o.borderRightWidth = 0), "none" === h.borderBottomStyle && (o.borderBottomWidth = 0), "none" === h.borderLeftStyle && (o.borderLeftWidth = 0), o.width || o.minWidth || (/flex/.test(o.display) ? o.width = r.offsetWidth : o.minWidth = r.offsetWidth), o.height || o.minHeight || /flex/.test(o.display) || (o.minHeight = r.offsetHeight) }, flexibility.walk = function(t) {
        var e = flexibility.init(t),
            i = e.style,
            n = i.display;
        if ("none" === n) return {};
        var r = n.match(/^(inline)?flex$/);
        if (r && (flexibility.updateFlexContainerCache(e), t.runtimeStyle.cssText = "display:" + (r[1] ? "inline-block" : "block"), e.children = []), Array.prototype.forEach.call(t.childNodes, function(t, n) {
                if (1 === t.nodeType &&  t.nodeName !== 'svg') {
                    var o = flexibility.walk(t),
                        l = o.style;
                    o.index = n, r && (flexibility.updateFlexItemCache(o), "auto" === l.alignSelf && (l.alignSelf = i.alignItems), l.flex = l.flexGrow, t.runtimeStyle.cssText = "display:inline-block", e.children.push(o)) } }), r) { e.children.forEach(function(t) { flexibility.updateLengthCache(t) }), e.children.sort(function(t, e) {
                return t.style.order - e.style.order || t.index - e.index }), /-reverse$/.test(i.flexDirection) && (e.children.reverse(), i.flexDirection = i.flexDirection.replace(/-reverse$/, ""), "flex-start" === i.justifyContent ? i.justifyContent = "flex-end" : "flex-end" === i.justifyContent && (i.justifyContent = "flex-start")), flexibility.updateLengthCache(e), delete e.lastLayout, delete e.layout;
            var o = i.borderTopWidth,
                l = i.borderBottomWidth;
            i.borderTopWidth = 0, i.borderBottomWidth = 0, i.borderLeftWidth = 0, "column" === i.flexDirection && (i.width -= i.borderRightWidth), flexibility.computeLayout(e), t.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:relative;width:" + (e.layout.width + i.borderRightWidth) + "px;height:" + (e.layout.height + o + l) + "px";
            var a = [],
                d = 1,
                s = "column" === i.flexDirection ? "width" : "height";
            e.children.forEach(function(t) { a[t.lineIndex] = Math.max(a[t.lineIndex] || 0, t.layout[s]), d = Math.max(d, t.lineIndex + 1) }), e.children.forEach(function(t) {
                var e = t.layout; "stretch" === t.style.alignSelf && (e[s] = a[t.lineIndex]), t.node.runtimeStyle.cssText = "box-sizing:border-box;display:block;position:absolute;margin:0;width:" + e.width + "px;height:" + e.height + "px;top:" + e.top + "px;left:" + e.left + "px" }) }
return e } }();