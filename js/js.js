! function(e, n) {
    for (var t in n) e[t] = n[t]
}(window, function(e) {
    var n = {};

    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports
    }
    return t.m = e, t.c = n, t.d = function(e, n, r) {
        t.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: r
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (t.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var o in e) t.d(r, o, function(n) {
                return e[n]
            }.bind(null, o));
        return r
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return {}.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 153)
}([function(e, n, t) {
    var r = t(113);
    e.exports = r
}, , function(e, n, t) {
    var r = t(82);
    e.exports = r
}, function(e, n, t) {
    var r = t(116);
    e.exports = r
}, function(e, n, t) {
    "use strict";
    var r = t(9),
        o = t(38).f,
        i = t(84),
        a = t(13),
        s = t(22),
        c = t(16),
        l = t(15),
        u = function(e) {
            var n = function(n, t, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(n);
                        case 2:
                            return new e(n, t)
                    }
                    return new e(n, t, r)
                }
                return e.apply(this, arguments)
            };
            return n.prototype = e.prototype, n
        };
    e.exports = function(e, n) {
        var t, d, f, p, m, h, g, y, w = e.target,
            v = e.global,
            _ = e.stat,
            x = e.proto,
            b = v ? r : _ ? r[w] : (r[w] || {}).prototype,
            E = v ? a : a[w] || (a[w] = {}),
            A = E.prototype;
        for (f in n) t = !i(v ? f : w + (_ ? "." : "#") + f, e.forced) && b && l(b, f), m = E[f], t && (h = e.noTargetGet ? (y = o(b, f)) && y.value : b[f]), p = t && h ? h : n[f], t && typeof m == typeof p || (g = e.bind && t ? s(p, r) : e.wrap && t ? u(p) : x && "function" == typeof p ? s(Function.call, p) : p, (e.sham || p && p.sham || m && m.sham) && c(g, "sham", !0), E[f] = g, x && (l(a, d = w + "Prototype") || c(a, d, {}), a[d][f] = p, e.real && A && !A[f] && c(A, f, p)))
    }
}, function(e, n, t) {
    var r = t(93);
    e.exports = r
}, function(e, n, t) {
    var r = t(9),
        o = t(60),
        i = t(15),
        a = t(45),
        s = t(61),
        c = t(92),
        l = o("wks"),
        u = r.Symbol,
        d = c ? u : u && u.withoutSetter || a;
    e.exports = function(e) {
        return i(l, e) && (s || "string" == typeof l[e]) || (l[e] = s && i(u, e) ? u[e] : d("Symbol." + e)), l[e]
    }
}, function(e, n, t) {
    var r = t(120);
    e.exports = r
}, function(e, n, t) {
    var r = t(87);
    e.exports = r
}, function(e, n) {
    var t = function(e) {
        return e && e.Math == Math && e
    };
    e.exports = t("object" == typeof globalThis && globalThis) || t("object" == typeof window && window) || t("object" == typeof self && self) || t("object" == typeof window && window) || function() {
        return this
    }() || Function("return this")()
}, function(e, n) {
    e.exports = function(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }
}, function(e, n, t) {
    var r = t(122);
    e.exports = r
}, function(e, n, t) {
    var r = t(10);
    e.exports = !r((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1]
    }))
}, function(e, n) {
    e.exports = {}
}, function(e, n) {
    e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }
}, function(e, n) {
    var t = {}.hasOwnProperty;
    e.exports = function(e, n) {
        return t.call(e, n)
    }
}, function(e, n, t) {
    var r = t(12),
        o = t(19),
        i = t(29);
    e.exports = r ? function(e, n, t) {
        return o.f(e, n, i(1, t))
    } : function(e, n, t) {
        return e[n] = t, e
    }
}, function(e, n, t) {
    var r = t(31),
        o = Math.min;
    e.exports = function(e) {
        return e > 0 ? o(r(e), 9007199254740991) : 0
    }
}, function(e, n) {
    e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on " + e);
        return e
    }
}, function(e, n, t) {
    var r = t(12),
        o = t(53),
        i = t(21),
        a = t(41),
        s = Object.defineProperty;
    n.f = r ? s : function(e, n, t) {
        if (i(e), n = a(n, !0), i(t), o) try {
            return s(e, n, t)
        } catch (e) {}
        if ("get" in t || "set" in t) throw TypeError("Accessors not supported");
        return "value" in t && (e[n] = t.value), e
    }
}, function(e, n, t) {
    var r = t(33);
    e.exports = r
}, function(e, n, t) {
    var r = t(14);
    e.exports = function(e) {
        if (!r(e)) throw TypeError(String(e) + " is not an object");
        return e
    }
}, function(e, n, t) {
    var r = t(55);
    e.exports = function(e, n, t) {
        if (r(e), void 0 === n) return e;
        switch (t) {
            case 0:
                return function() {
                    return e.call(n)
                };
            case 1:
                return function(t) {
                    return e.call(n, t)
                };
            case 2:
                return function(t, r) {
                    return e.call(n, t, r)
                };
            case 3:
                return function(t, r, o) {
                    return e.call(n, t, r, o)
                }
        }
        return function() {
            return e.apply(n, arguments)
        }
    }
}, function(e, n, t) {
    var r = t(18);
    e.exports = function(e) {
        return Object(r(e))
    }
}, function(e, n) {
    e.exports = {}
}, function(e, n, t) {
    var r = t(40),
        o = t(18);
    e.exports = function(e) {
        return r(o(e))
    }
}, function(e, n) {
    var t = {}.toString;
    e.exports = function(e) {
        return t.call(e).slice(8, -1)
    }
}, function(e, n) {
    e.exports = !0
}, function(e, n) {
    e.exports = {
        localeOptions: ["US", "DE", "GB", "FR"],
        currencyOptions: ["USD", "GBP", "EUR"]
    }
}, function(e, n) {
    e.exports = function(e, n) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: n
        }
    }
}, function(e, n, t) {
    var r = t(85),
        o = t(58);
    e.exports = Object.keys || function(e) {
        return r(e, o)
    }
}, function(e, n) {
    var t = Math.ceil,
        r = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
    }
}, function(e, n) {
    e.exports = {}
}, function(e, n, t) {
    var r = t(13),
        o = t(9),
        i = function(e) {
            return "function" == typeof e ? e : void 0
        };
    e.exports = function(e, n) {
        return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][n] || o[e] && o[e][n]
    }
}, function(e, n) {
    e.exports = function() {}
}, function(e, n, t) {
    var r, o, i, a = t(95),
        s = t(9),
        c = t(14),
        l = t(16),
        u = t(15),
        d = t(44),
        f = t(46),
        p = t(32);
    if (a) {
        var m = d.state || (d.state = new(0, s.WeakMap)),
            h = m.get,
            g = m.has,
            y = m.set;
        r = function(e, n) {
            return n.facade = e, y.call(m, e, n), n
        }, o = function(e) {
            return h.call(m, e) || {}
        }, i = function(e) {
            return g.call(m, e)
        }
    } else {
        var w = f("state");
        p[w] = !0, r = function(e, n) {
            return n.facade = e, l(e, w, n), n
        }, o = function(e) {
            return u(e, w) ? e[w] : {}
        }, i = function(e) {
            return u(e, w)
        }
    }
    e.exports = {
        set: r,
        get: o,
        has: i,
        enforce: function(e) {
            return i(e) ? o(e) : r(e, {})
        },
        getterFor: function(e) {
            return function(n) {
                var t;
                if (!c(n) || (t = o(n)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return t
            }
        }
    }
}, function(e, n, t) {
    var r = t(126);
    e.exports = r
}, function(e, n, t) {
    var r = t(139);
    e.exports = r
}, function(e, n, t) {
    var r = t(12),
        o = t(39),
        i = t(29),
        a = t(25),
        s = t(41),
        c = t(15),
        l = t(53),
        u = Object.getOwnPropertyDescriptor;
    n.f = r ? u : function(e, n) {
        if (e = a(e), n = s(n, !0), l) try {
            return u(e, n)
        } catch (e) {}
        if (c(e, n)) return i(!o.f.call(e, n), e[n])
    }
}, function(e, n, t) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        i = o && !r.call({
            1: 2
        }, 1);
    n.f = i ? function(e) {
        var n = o(this, e);
        return !!n && n.enumerable
    } : r
}, function(e, n, t) {
    var r = t(10),
        o = t(26),
        i = "".split;
    e.exports = r((function() {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function(e) {
        return "String" == o(e) ? i.call(e, "") : Object(e)
    } : Object
}, function(e, n, t) {
    var r = t(14);
    e.exports = function(e, n) {
        if (!r(e)) return e;
        var t, o;
        if (n && "function" == typeof(t = e.toString) && !r(o = t.call(e))) return o;
        if ("function" == typeof(t = e.valueOf) && !r(o = t.call(e))) return o;
        if (!n && "function" == typeof(t = e.toString) && !r(o = t.call(e))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(e, n, t) {
    var r = t(22),
        o = t(40),
        i = t(23),
        a = t(17),
        s = t(59),
        c = [].push,
        l = function(e) {
            var n = 1 == e,
                t = 2 == e,
                l = 3 == e,
                u = 4 == e,
                d = 6 == e,
                f = 7 == e,
                p = 5 == e || d;
            return function(m, h, g, y) {
                for (var w, v, _ = i(m), x = o(_), b = r(h, g, 3), E = a(x.length), A = 0, C = y || s, P = n ? C(m, E) : t || f ? C(m, 0) : void 0; E > A; A++)
                    if ((p || A in x) && (v = b(w = x[A], A, _), e))
                        if (n) P[A] = v;
                        else if (v) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return w;
                    case 6:
                        return A;
                    case 2:
                        c.call(P, w)
                } else switch (e) {
                    case 4:
                        return !1;
                    case 7:
                        c.call(P, w)
                }
                return d ? -1 : l || u ? u : P
            }
        };
    e.exports = {
        forEach: l(0),
        map: l(1),
        filter: l(2),
        some: l(3),
        every: l(4),
        find: l(5),
        findIndex: l(6),
        filterOut: l(7)
    }
}, function(e, n, t) {
    var r = t(26);
    e.exports = Array.isArray || function(e) {
        return "Array" == r(e)
    }
}, function(e, n, t) {
    var r = t(9),
        o = t(89),
        i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    e.exports = i
}, function(e, n) {
    var t = 0,
        r = Math.random();
    e.exports = function(e) {
        return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++t + r).toString(36)
    }
}, function(e, n, t) {
    var r = t(60),
        o = t(45),
        i = r("keys");
    e.exports = function(e) {
        return i[e] || (i[e] = o(e))
    }
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(97),
        i = t(65),
        a = t(102),
        s = t(48),
        c = t(16),
        l = t(67),
        u = t(6),
        d = t(27),
        f = t(24),
        p = t(64),
        m = p.IteratorPrototype,
        h = p.BUGGY_SAFARI_ITERATORS,
        g = u("iterator"),
        y = function() {
            return this
        };
    e.exports = function(e, n, t, u, p, w, v) {
        o(t, n, u);
        var _, x, b, E = function(e) {
                if (e === p && R) return R;
                if (!h && e in P) return P[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function() {
                            return new t(this, e)
                        }
                }
                return function() {
                    return new t(this)
                }
            },
            A = n + " Iterator",
            C = !1,
            P = e.prototype,
            S = P[g] || P["@@iterator"] || p && P[p],
            R = !h && S || E(p),
            O = "Array" == n && P.entries || S;
        if (O && (_ = i(O.call(new e)), m !== Object.prototype && _.next && (d || i(_) === m || (a ? a(_, m) : "function" != typeof _[g] && c(_, g, y)), s(_, A, !0, !0), d && (f[A] = y))), "values" == p && S && "values" !== S.name && (C = !0, R = function() {
                return S.call(this)
            }), d && !v || P[g] === R || c(P, g, R), f[n] = R, p)
            if (x = {
                    values: E("values"),
                    keys: w ? R : E("keys"),
                    entries: E("entries")
                }, v)
                for (b in x)(h || C || !(b in P)) && l(P, b, x[b]);
            else r({
                target: n,
                proto: !0,
                forced: h || C
            }, x);
        return x
    }
}, function(e, n, t) {
    var r = t(49),
        o = t(19).f,
        i = t(16),
        a = t(15),
        s = t(101),
        c = t(6)("toStringTag");
    e.exports = function(e, n, t, l) {
        if (e) {
            var u = t ? e : e.prototype;
            a(u, c) || o(u, c, {
                configurable: !0,
                value: n
            }), l && !r && i(u, "toString", s)
        }
    }
}, function(e, n, t) {
    var r = {};
    r[t(6)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
}, function(e, n, t) {
    var r = t(49),
        o = t(26),
        i = t(6)("toStringTag"),
        a = "Arguments" == o(function() {
            return arguments
        }());
    e.exports = r ? o : function(e) {
        var n, t, r;
        return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(t = function(e, n) {
            try {
                return e[n]
            } catch (e) {}
        }(n = Object(e), i)) ? t : a ? o(n) : "Object" == (r = o(n)) && "function" == typeof n.callee ? "Arguments" : r
    }
}, function(e, n, t) {
    var r = t(115);
    e.exports = function(e) {
        if (r(e)) throw TypeError("The method doesn't accept regular expressions");
        return e
    }
}, function(e, n, t) {
    var r = t(6)("match");
    e.exports = function(e) {
        var n = /./;
        try {
            "/./" [e](n)
        } catch (t) {
            try {
                return n[r] = !1, "/./" [e](n)
            } catch (e) {}
        }
        return !1
    }
}, function(e, n, t) {
    var r = t(12),
        o = t(10),
        i = t(54);
    e.exports = !r && !o((function() {
        return 7 != Object.defineProperty(i("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    }))
}, function(e, n, t) {
    var r = t(9),
        o = t(14),
        i = r.document,
        a = o(i) && o(i.createElement);
    e.exports = function(e) {
        return a ? i.createElement(e) : {}
    }
}, function(e, n) {
    e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
        return e
    }
}, function(e, n, t) {
    var r = t(12),
        o = t(30),
        i = t(25),
        a = t(39).f,
        s = function(e) {
            return function(n) {
                for (var t, s = i(n), c = o(s), l = c.length, u = 0, d = []; l > u;) t = c[u++], r && !a.call(s, t) || d.push(e ? [t, s[t]] : s[t]);
                return d
            }
        };
    e.exports = {
        entries: s(!0),
        values: s(!1)
    }
}, function(e, n, t) {
    var r = t(25),
        o = t(17),
        i = t(86),
        a = function(e) {
            return function(n, t, a) {
                var s, c = r(n),
                    l = o(c.length),
                    u = i(a, l);
                if (e && t != t) {
                    for (; l > u;)
                        if ((s = c[u++]) != s) return !0
                } else
                    for (; l > u; u++)
                        if ((e || u in c) && c[u] === t) return e || u || 0;
                return !e && -1
            }
        };
    e.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(e, n) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(e, n, t) {
    var r = t(14),
        o = t(43),
        i = t(6)("species");
    e.exports = function(e, n) {
        var t;
        return o(e) && ("function" != typeof(t = e.constructor) || t !== Array && !o(t.prototype) ? r(t) && null === (t = t[i]) && (t = void 0) : t = void 0), new(void 0 === t ? Array : t)(0 === n ? 0 : n)
    }
}, function(e, n, t) {
    var r = t(27),
        o = t(44);
    (e.exports = function(e, n) {
        return o[e] || (o[e] = void 0 !== n ? n : {})
    })("versions", []).push({
        version: "3.9.1",
        mode: r ? "pure" : "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    })
}, function(e, n, t) {
    var r = t(90),
        o = t(91),
        i = t(10);
    e.exports = !!Object.getOwnPropertySymbols && !i((function() {
        return !Symbol.sham && (r ? 38 === o : o > 37 && o < 41)
    }))
}, function(e, n, t) {
    var r = t(33);
    e.exports = r("navigator", "userAgent") || ""
}, function(e, n, t) {
    "use strict";
    var r = t(94).charAt,
        o = t(35),
        i = t(47),
        a = o.set,
        s = o.getterFor("String Iterator");
    i(String, "String", (function(e) {
        a(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function() {
        var e, n = s(this),
            t = n.string,
            o = n.index;
        return o >= t.length ? {
            value: void 0,
            done: !0
        } : (e = r(t, o), n.index += e.length, {
            value: e,
            done: !1
        })
    }))
}, function(e, n, t) {
    "use strict";
    var r, o, i, a = t(10),
        s = t(65),
        c = t(16),
        l = t(15),
        u = t(6),
        d = t(27),
        f = u("iterator"),
        p = !1;
    [].keys && ("next" in (i = [].keys()) ? (o = s(s(i))) !== Object.prototype && (r = o) : p = !0);
    var m = null == r || a((function() {
        var e = {};
        return r[f].call(e) !== e
    }));
    m && (r = {}), d && !m || l(r, f) || c(r, f, (function() {
        return this
    })), e.exports = {
        IteratorPrototype: r,
        BUGGY_SAFARI_ITERATORS: p
    }
}, function(e, n, t) {
    var r = t(15),
        o = t(23),
        i = t(46),
        a = t(98),
        s = i("IE_PROTO"),
        c = Object.prototype;
    e.exports = a ? Object.getPrototypeOf : function(e) {
        return e = o(e), r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
    }
}, function(e, n, t) {
    var r, o = t(21),
        i = t(99),
        a = t(58),
        s = t(32),
        c = t(100),
        l = t(54),
        u = t(46)("IE_PROTO"),
        d = function() {},
        f = function(e) {
            return "<script>" + e + "<\/script>"
        },
        p = function() {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, n;
            p = r ? function(e) {
                e.write(f("")), e.close();
                var n = e.parentWindow.Object;
                return e = null, n
            }(r) : ((n = l("iframe")).style.display = "none", c.appendChild(n), n.src = String("javascript:"), (e = n.contentWindow.document).open(), e.write(f("document.F=Object")), e.close(), e.F);
            for (var t = a.length; t--;) delete p.prototype[a[t]];
            return p()
        };
    s[u] = !0, e.exports = Object.create || function(e, n) {
        var t;
        return null !== e ? (d.prototype = o(e), t = new d, d.prototype = null, t[u] = e) : t = p(), void 0 === n ? t : i(t, n)
    }
}, function(e, n, t) {
    var r = t(16);
    e.exports = function(e, n, t, o) {
        o && o.enumerable ? e[n] = t : r(e, n, t)
    }
}, function(e, n, t) {
    var r = t(21);
    e.exports = function(e) {
        var n = e.return;
        if (void 0 !== n) return r(n.call(e)).value
    }
}, function(e, n, t) {
    var r = t(6),
        o = t(24),
        i = r("iterator"),
        a = Array.prototype;
    e.exports = function(e) {
        return void 0 !== e && (o.Array === e || a[i] === e)
    }
}, function(e, n, t) {
    var r = t(50),
        o = t(24),
        i = t(6)("iterator");
    e.exports = function(e) {
        if (null != e) return e[i] || e["@@iterator"] || o[r(e)]
    }
}, function(e, n, t) {
    var r = t(32),
        o = t(14),
        i = t(15),
        a = t(19).f,
        s = t(45),
        c = t(131),
        l = s("meta"),
        u = 0,
        d = Object.isExtensible || function() {
            return !0
        },
        f = function(e) {
            a(e, l, {
                value: {
                    objectID: "O" + ++u,
                    weakData: {}
                }
            })
        },
        p = e.exports = {
            REQUIRED: !1,
            fastKey: function(e, n) {
                if (!o(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!i(e, l)) {
                    if (!d(e)) return "F";
                    if (!n) return "E";
                    f(e)
                }
                return e[l].objectID
            },
            getWeakData: function(e, n) {
                if (!i(e, l)) {
                    if (!d(e)) return !0;
                    if (!n) return !1;
                    f(e)
                }
                return e[l].weakData
            },
            onFreeze: function(e) {
                return c && p.REQUIRED && d(e) && !i(e, l) && f(e), e
            }
        };
    r[l] = !0
}, function(e, n, t) {
    var r = t(21),
        o = t(69),
        i = t(17),
        a = t(22),
        s = t(70),
        c = t(68),
        l = function(e, n) {
            this.stopped = e, this.result = n
        };
    e.exports = function(e, n, t) {
        var u, d, f, p, m, h, g, y = !(!t || !t.AS_ENTRIES),
            w = !(!t || !t.IS_ITERATOR),
            v = !(!t || !t.INTERRUPTED),
            _ = a(n, t && t.that, 1 + y + v),
            x = function(e) {
                return u && c(u), new l(!0, e)
            },
            b = function(e) {
                return y ? (r(e), v ? _(e[0], e[1], x) : _(e[0], e[1])) : v ? _(e, x) : _(e)
            };
        if (w) u = e;
        else {
            if ("function" != typeof(d = s(e))) throw TypeError("Target is not iterable");
            if (o(d)) {
                for (f = 0, p = i(e.length); p > f; f++)
                    if ((m = b(e[f])) && m instanceof l) return m;
                return new l(!1)
            }
            u = d.call(e)
        }
        for (h = u.next; !(g = h.call(u)).done;) {
            try {
                m = b(g.value)
            } catch (e) {
                throw c(u), e
            }
            if ("object" == typeof m && m && m instanceof l) return m
        }
        return new l(!1)
    }
}, function(e, n) {
    e.exports = function(e, n, t) {
        if (!(e instanceof n)) throw TypeError("Incorrect " + (t ? t + " " : "") + "invocation");
        return e
    }
}, function(e, n, t) {
    var r = t(109);
    e.exports = r
}, function(e, n, t) {
    var r = t(118);
    e.exports = r
}, function(e, n, t) {
    var r = t(128);
    e.exports = r
}, function(e, n, t) {
    var r = t(141);
    e.exports = r
}, function(e, n, t) {
    var r = t(146);
    e.exports = r
}, function(e, n, t) {
    var r = t(149);
    e.exports = r
}, function(e, n, t) {
    var r = t(151);
    e.exports = r
}, , function(e, n, t) {
    t(83);
    var r = t(13);
    e.exports = r.Object.entries
}, function(e, n, t) {
    var r = t(4),
        o = t(56).entries;
    r({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return o(e)
        }
    })
}, function(e, n, t) {
    var r = t(10),
        o = /#|\.prototype\./,
        i = function(e, n) {
            var t = s[a(e)];
            return t == l || t != c && ("function" == typeof n ? r(n) : !!n)
        },
        a = i.normalize = function(e) {
            return String(e).replace(o, ".").toLowerCase()
        },
        s = i.data = {},
        c = i.NATIVE = "N",
        l = i.POLYFILL = "P";
    e.exports = i
}, function(e, n, t) {
    var r = t(15),
        o = t(25),
        i = t(57).indexOf,
        a = t(32);
    e.exports = function(e, n) {
        var t, s = o(e),
            c = 0,
            l = [];
        for (t in s) !r(a, t) && r(s, t) && l.push(t);
        for (; n.length > c;) r(s, t = n[c++]) && (~i(l, t) || l.push(t));
        return l
    }
}, function(e, n, t) {
    var r = t(31),
        o = Math.max,
        i = Math.min;
    e.exports = function(e, n) {
        var t = r(e);
        return t < 0 ? o(t + n, 0) : i(t, n)
    }
}, function(e, n, t) {
    t(88);
    var r = t(20);
    e.exports = r("Array", "find")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(42).find,
        i = t(34),
        a = !0;
    "find" in [] && Array(1).find((function() {
        a = !1
    })), r({
        target: "Array",
        proto: !0,
        forced: a
    }, {
        find: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i("find")
}, function(e, n, t) {
    var r = t(9),
        o = t(16);
    e.exports = function(e, n) {
        try {
            o(r, e, n)
        } catch (t) {
            r[e] = n
        }
        return n
    }
}, function(e, n, t) {
    var r = t(26),
        o = t(9);
    e.exports = "process" == r(o.process)
}, function(e, n, t) {
    var r, o, i = t(9),
        a = t(62),
        s = i.process,
        c = s && s.versions,
        l = c && c.v8;
    l ? o = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]), e.exports = o && +o
}, function(e, n, t) {
    var r = t(61);
    e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function(e, n, t) {
    t(63), t(104);
    var r = t(13);
    e.exports = r.Array.from
}, function(e, n, t) {
    var r = t(31),
        o = t(18),
        i = function(e) {
            return function(n, t) {
                var i, a, s = String(o(n)),
                    c = r(t),
                    l = s.length;
                return c < 0 || c >= l ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        };
    e.exports = {
        codeAt: i(!1),
        charAt: i(!0)
    }
}, function(e, n, t) {
    var r = t(9),
        o = t(96),
        i = r.WeakMap;
    e.exports = "function" == typeof i && /native code/.test(o(i))
}, function(e, n, t) {
    var r = t(44),
        o = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
        return o.call(e)
    }), e.exports = r.inspectSource
}, function(e, n, t) {
    "use strict";
    var r = t(64).IteratorPrototype,
        o = t(66),
        i = t(29),
        a = t(48),
        s = t(24),
        c = function() {
            return this
        };
    e.exports = function(e, n, t) {
        var l = n + " Iterator";
        return e.prototype = o(r, {
            next: i(1, t)
        }), a(e, l, !1, !0), s[l] = c, e
    }
}, function(e, n, t) {
    var r = t(10);
    e.exports = !r((function() {
        function e() {}
        return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
    }))
}, function(e, n, t) {
    var r = t(12),
        o = t(19),
        i = t(21),
        a = t(30);
    e.exports = r ? Object.defineProperties : function(e, n) {
        i(e);
        for (var t, r = a(n), s = r.length, c = 0; s > c;) o.f(e, t = r[c++], n[t]);
        return e
    }
}, function(e, n, t) {
    var r = t(33);
    e.exports = r("document", "documentElement")
}, function(e, n, t) {
    "use strict";
    var r = t(49),
        o = t(50);
    e.exports = r ? {}.toString : function() {
        return "[object " + o(this) + "]"
    }
}, function(e, n, t) {
    var r = t(21),
        o = t(103);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var e, n = !1,
            t = {};
        try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(t, []), n = t instanceof Array
        } catch (e) {}
        return function(t, i) {
            return r(t), o(i), n ? e.call(t, i) : t.__proto__ = i, t
        }
    }() : void 0)
}, function(e, n, t) {
    var r = t(14);
    e.exports = function(e) {
        if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
        return e
    }
}, function(e, n, t) {
    var r = t(4),
        o = t(105);
    r({
        target: "Array",
        stat: !0,
        forced: !t(108)((function(e) {
            Array.from(e)
        }))
    }, {
        from: o
    })
}, function(e, n, t) {
    "use strict";
    var r = t(22),
        o = t(23),
        i = t(106),
        a = t(69),
        s = t(17),
        c = t(107),
        l = t(70);
    e.exports = function(e) {
        var n, t, u, d, f, p, m = o(e),
            h = "function" == typeof this ? this : Array,
            g = arguments.length,
            y = g > 1 ? arguments[1] : void 0,
            w = void 0 !== y,
            v = l(m),
            _ = 0;
        if (w && (y = r(y, g > 2 ? arguments[2] : void 0, 2)), null == v || h == Array && a(v))
            for (t = new h(n = s(m.length)); n > _; _++) p = w ? y(m[_], _) : m[_], c(t, _, p);
        else
            for (f = (d = v.call(m)).next, t = new h; !(u = f.call(d)).done; _++) p = w ? i(d, y, [u.value, _], !0) : u.value, c(t, _, p);
        return t.length = _, t
    }
}, function(e, n, t) {
    var r = t(21),
        o = t(68);
    e.exports = function(e, n, t, i) {
        try {
            return i ? n(r(t)[0], t[1]) : n(t)
        } catch (n) {
            throw o(e), n
        }
    }
}, function(e, n, t) {
    "use strict";
    var r = t(41),
        o = t(19),
        i = t(29);
    e.exports = function(e, n, t) {
        var a = r(n);
        a in e ? o.f(e, a, i(0, t)) : e[a] = t
    }
}, function(e, n, t) {
    var r = t(6)("iterator"),
        o = !1;
    try {
        var i = 0,
            a = {
                next: function() {
                    return {
                        done: !!i++
                    }
                },
                return: function() {
                    o = !0
                }
            };
        a[r] = function() {
            return this
        }, Array.from(a, (function() {
            throw 2
        }))
    } catch (e) {}
    e.exports = function(e, n) {
        if (!n && !o) return !1;
        var t = !1;
        try {
            var i = {};
            i[r] = function() {
                return {
                    next: function() {
                        return {
                            done: t = !0
                        }
                    }
                }
            }, e(i)
        } catch (e) {}
        return t
    }
}, function(e, n, t) {
    t(110), t(112);
    var r = t(20);
    e.exports = r("Array", "flatMap")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(111),
        i = t(23),
        a = t(17),
        s = t(55),
        c = t(59);
    r({
        target: "Array",
        proto: !0
    }, {
        flatMap: function(e) {
            var n, t = i(this),
                r = a(t.length);
            return s(e), (n = c(t, 0)).length = o(n, t, t, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), n
        }
    })
}, function(e, n, t) {
    "use strict";
    var r = t(43),
        o = t(17),
        i = t(22);
    e.exports = function e(n, t, a, s, c, l, u, d) {
        for (var f, p = c, m = 0, h = !!u && i(u, d, 3); m < s;) {
            if (m in a) {
                if (f = h ? h(a[m], m, t) : a[m], l > 0 && r(f)) p = e(n, t, f, o(f.length), p, l - 1) - 1;
                else {
                    if (p >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
                    n[p] = f
                }
                p++
            }
            m++
        }
        return p
    }
}, function(e, n, t) {
    t(34)("flatMap")
}, function(e, n, t) {
    t(114);
    var r = t(20);
    e.exports = r("String", "startsWith")
}, function(e, n, t) {
    "use strict";
    var r, o = t(4),
        i = t(38).f,
        a = t(17),
        s = t(51),
        c = t(18),
        l = t(52),
        u = t(27),
        d = "".startsWith,
        f = Math.min,
        p = l("startsWith");
    o({
        target: "String",
        proto: !0,
        forced: !(!u && !p && (r = i(String.prototype, "startsWith"), r && !r.writable) || p)
    }, {
        startsWith: function(e) {
            var n = String(c(this));
            s(e);
            var t = a(f(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                r = String(e);
            return d ? d.call(n, r, t) : n.slice(t, t + r.length) === r
        }
    })
}, function(e, n, t) {
    var r = t(14),
        o = t(26),
        i = t(6)("match");
    e.exports = function(e) {
        var n;
        return r(e) && (void 0 !== (n = e[i]) ? !!n : "RegExp" == o(e))
    }
}, function(e, n, t) {
    t(117);
    var r = t(20);
    e.exports = r("Array", "includes")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(57).includes,
        i = t(34);
    r({
        target: "Array",
        proto: !0
    }, {
        includes: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), i("includes")
}, function(e, n, t) {
    t(119);
    var r = t(13);
    e.exports = r.Array.isArray
}, function(e, n, t) {
    t(4)({
        target: "Array",
        stat: !0
    }, {
        isArray: t(43)
    })
}, function(e, n, t) {
    t(121);
    var r = t(20);
    e.exports = r("String", "includes")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(51),
        i = t(18);
    r({
        target: "String",
        proto: !0,
        forced: !t(52)("includes")
    }, {
        includes: function(e) {
            return !!~String(i(this)).indexOf(o(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, n, t) {
    t(123);
    var r = t(13);
    e.exports = r.Object.assign
}, function(e, n, t) {
    var r = t(4),
        o = t(124);
    r({
        target: "Object",
        stat: !0,
        forced: Object.assign !== o
    }, {
        assign: o
    })
}, function(e, n, t) {
    "use strict";
    var r = t(12),
        o = t(10),
        i = t(30),
        a = t(125),
        s = t(39),
        c = t(23),
        l = t(40),
        u = Object.assign,
        d = Object.defineProperty;
    e.exports = !u || o((function() {
        if (r && 1 !== u({
                b: 1
            }, u(d({}, "a", {
                enumerable: !0,
                get: function() {
                    d(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b) return !0;
        var e = {},
            n = {},
            t = Symbol();
        return e[t] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) {
            n[e] = e
        })), 7 != u({}, e)[t] || "abcdefghijklmnopqrst" != i(u({}, n)).join("")
    })) ? function(e, n) {
        for (var t = c(e), o = arguments.length, u = 1, d = a.f, f = s.f; o > u;)
            for (var p, m = l(arguments[u++]), h = d ? i(m).concat(d(m)) : i(m), g = h.length, y = 0; g > y;) p = h[y++], r && !f.call(m, p) || (t[p] = m[p]);
        return t
    } : u
}, function(e, n) {
    n.f = Object.getOwnPropertySymbols
}, function(e, n, t) {
    t(127);
    var r = t(13);
    e.exports = r.Object.keys
}, function(e, n, t) {
    var r = t(4),
        o = t(23),
        i = t(30);
    r({
        target: "Object",
        stat: !0,
        forced: t(10)((function() {
            i(1)
        }))
    }, {
        keys: function(e) {
            return i(o(e))
        }
    })
}, function(e, n, t) {
    t(129), t(135), t(63), t(136);
    var r = t(13);
    e.exports = r.Map
}, function(e, n, t) {
    "use strict";
    var r = t(130),
        o = t(132);
    e.exports = r("Map", (function(e) {
        return function() {
            return e(this, arguments.length ? arguments[0] : void 0)
        }
    }), o)
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(9),
        i = t(71),
        a = t(10),
        s = t(16),
        c = t(72),
        l = t(73),
        u = t(14),
        d = t(48),
        f = t(19).f,
        p = t(42).forEach,
        m = t(12),
        h = t(35),
        g = h.set,
        y = h.getterFor;
    e.exports = function(e, n, t) {
        var h, w = -1 !== e.indexOf("Map"),
            v = -1 !== e.indexOf("Weak"),
            _ = w ? "set" : "add",
            x = o[e],
            b = x && x.prototype,
            E = {};
        if (m && "function" == typeof x && (v || b.forEach && !a((function() {
                (new x).entries().next()
            })))) {
            h = n((function(n, t) {
                g(l(n, h, e), {
                    type: e,
                    collection: new x
                }), null != t && c(t, n[_], {
                    that: n,
                    AS_ENTRIES: w
                })
            }));
            var A = y(e);
            p(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function(e) {
                var n = "add" == e || "set" == e;
                !(e in b) || v && "clear" == e || s(h.prototype, e, (function(t, r) {
                    var o = A(this).collection;
                    if (!n && v && !u(t)) return "get" == e && void 0;
                    var i = o[e](0 === t ? 0 : t, r);
                    return n ? this : i
                }))
            })), v || f(h.prototype, "size", {
                configurable: !0,
                get: function() {
                    return A(this).collection.size
                }
            })
        } else h = t.getConstructor(n, e, w, _), i.REQUIRED = !0;
        return d(h, e, !1, !0), E[e] = h, r({
            global: !0,
            forced: !0
        }, E), v || t.setStrong(h, e, w), h
    }
}, function(e, n, t) {
    var r = t(10);
    e.exports = !r((function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function(e, n, t) {
    "use strict";
    var r = t(19).f,
        o = t(66),
        i = t(133),
        a = t(22),
        s = t(73),
        c = t(72),
        l = t(47),
        u = t(134),
        d = t(12),
        f = t(71).fastKey,
        p = t(35),
        m = p.set,
        h = p.getterFor;
    e.exports = {
        getConstructor: function(e, n, t, l) {
            var u = e((function(e, r) {
                    s(e, u, n), m(e, {
                        type: n,
                        index: o(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), d || (e.size = 0), null != r && c(r, e[l], {
                        that: e,
                        AS_ENTRIES: t
                    })
                })),
                p = h(n),
                g = function(e, n, t) {
                    var r, o, i = p(e),
                        a = y(e, n);
                    return a ? a.value = t : (i.last = a = {
                        index: o = f(n, !0),
                        key: n,
                        value: t,
                        previous: r = i.last,
                        next: void 0,
                        removed: !1
                    }, i.first || (i.first = a), r && (r.next = a), d ? i.size++ : e.size++, "F" !== o && (i.index[o] = a)), e
                },
                y = function(e, n) {
                    var t, r = p(e),
                        o = f(n);
                    if ("F" !== o) return r.index[o];
                    for (t = r.first; t; t = t.next)
                        if (t.key == n) return t
                };
            return i(u.prototype, {
                clear: function() {
                    for (var e = p(this), n = e.index, t = e.first; t;) t.removed = !0, t.previous && (t.previous = t.previous.next = void 0), delete n[t.index], t = t.next;
                    e.first = e.last = void 0, d ? e.size = 0 : this.size = 0
                },
                delete: function(e) {
                    var n = p(this),
                        t = y(this, e);
                    if (t) {
                        var r = t.next,
                            o = t.previous;
                        delete n.index[t.index], t.removed = !0, o && (o.next = r), r && (r.previous = o), n.first == t && (n.first = r), n.last == t && (n.last = o), d ? n.size-- : this.size--
                    }
                    return !!t
                },
                forEach: function(e) {
                    for (var n, t = p(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.next : t.first;)
                        for (r(n.value, n.key, this); n && n.removed;) n = n.previous
                },
                has: function(e) {
                    return !!y(this, e)
                }
            }), i(u.prototype, t ? {
                get: function(e) {
                    var n = y(this, e);
                    return n && n.value
                },
                set: function(e, n) {
                    return g(this, 0 === e ? 0 : e, n)
                }
            } : {
                add: function(e) {
                    return g(this, e = 0 === e ? 0 : e, e)
                }
            }), d && r(u.prototype, "size", {
                get: function() {
                    return p(this).size
                }
            }), u
        },
        setStrong: function(e, n, t) {
            var r = n + " Iterator",
                o = h(n),
                i = h(r);
            l(e, n, (function(e, n) {
                m(this, {
                    type: r,
                    target: e,
                    state: o(e),
                    kind: n,
                    last: void 0
                })
            }), (function() {
                for (var e = i(this), n = e.kind, t = e.last; t && t.removed;) t = t.previous;
                return e.target && (e.last = t = t ? t.next : e.state.first) ? "keys" == n ? {
                    value: t.key,
                    done: !1
                } : "values" == n ? {
                    value: t.value,
                    done: !1
                } : {
                    value: [t.key, t.value],
                    done: !1
                } : (e.target = void 0, {
                    value: void 0,
                    done: !0
                })
            }), t ? "entries" : "values", !t, !0), u(n)
        }
    }
}, function(e, n, t) {
    var r = t(67);
    e.exports = function(e, n, t) {
        for (var o in n) t && t.unsafe && e[o] ? e[o] = n[o] : r(e, o, n[o], t);
        return e
    }
}, function(e, n, t) {
    "use strict";
    var r = t(33),
        o = t(19),
        i = t(6),
        a = t(12),
        s = i("species");
    e.exports = function(e) {
        var n = r(e);
        a && n && !n[s] && (0, o.f)(n, s, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    }
}, function(e, n) {}, function(e, n, t) {
    t(137);
    var r = t(138),
        o = t(9),
        i = t(50),
        a = t(16),
        s = t(24),
        c = t(6)("toStringTag");
    for (var l in r) {
        var u = o[l],
            d = u && u.prototype;
        d && i(d) !== c && a(d, c, l), s[l] = s.Array
    }
}, function(e, n, t) {
    "use strict";
    var r = t(25),
        o = t(34),
        i = t(24),
        a = t(35),
        s = t(47),
        c = a.set,
        l = a.getterFor("Array Iterator");
    e.exports = s(Array, "Array", (function(e, n) {
        c(this, {
            type: "Array Iterator",
            target: r(e),
            index: 0,
            kind: n
        })
    }), (function() {
        var e = l(this),
            n = e.target,
            t = e.kind,
            r = e.index++;
        return !n || r >= n.length ? (e.target = void 0, {
            value: void 0,
            done: !0
        }) : "keys" == t ? {
            value: r,
            done: !1
        } : "values" == t ? {
            value: n[r],
            done: !1
        } : {
            value: [r, n[r]],
            done: !1
        }
    }), "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
}, function(e, n) {
    e.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function(e, n, t) {
    t(140);
    var r = t(13);
    e.exports = r.Number.isNaN
}, function(e, n, t) {
    t(4)({
        target: "Number",
        stat: !0
    }, {
        isNaN: function(e) {
            return e != e
        }
    })
}, function(e, n, t) {
    t(142);
    var r = t(20);
    e.exports = r("String", "padStart")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(143).start;
    r({
        target: "String",
        proto: !0,
        forced: t(145)
    }, {
        padStart: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, n, t) {
    var r = t(17),
        o = t(144),
        i = t(18),
        a = Math.ceil,
        s = function(e) {
            return function(n, t, s) {
                var c, l, u = String(i(n)),
                    d = u.length,
                    f = void 0 === s ? " " : String(s),
                    p = r(t);
                return p <= d || "" == f ? u : ((l = o.call(f, a((c = p - d) / f.length))).length > c && (l = l.slice(0, c)), e ? u + l : l + u)
            }
        };
    e.exports = {
        start: s(!1),
        end: s(!0)
    }
}, function(e, n, t) {
    "use strict";
    var r = t(31),
        o = t(18);
    e.exports = "".repeat || function(e) {
        var n = String(o(this)),
            t = "",
            i = r(e);
        if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
        for (; i > 0;
            (i >>>= 1) && (n += n)) 1 & i && (t += n);
        return t
    }
}, function(e, n, t) {
    var r = t(62);
    e.exports = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)
}, function(e, n, t) {
    t(147);
    var r = t(20);
    e.exports = r("Array", "every")
}, function(e, n, t) {
    "use strict";
    var r = t(4),
        o = t(42).every;
    r({
        target: "Array",
        proto: !0,
        forced: !t(148)("every")
    }, {
        every: function(e) {
            return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function(e, n, t) {
    "use strict";
    var r = t(10);
    e.exports = function(e, n) {
        var t = [][e];
        return !!t && r((function() {
            t.call(null, n || function() {
                throw 1
            }, 1)
        }))
    }
}, function(e, n, t) {
    t(150);
    var r = t(13);
    e.exports = r.Object.values
}, function(e, n, t) {
    var r = t(4),
        o = t(56).values;
    r({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return o(e)
        }
    })
}, function(e, n, t) {
    t(152);
    var r = t(20);
    e.exports = r("String", "endsWith")
}, function(e, n, t) {
    "use strict";
    var r, o = t(4),
        i = t(38).f,
        a = t(17),
        s = t(51),
        c = t(18),
        l = t(52),
        u = t(27),
        d = "".endsWith,
        f = Math.min,
        p = l("endsWith");
    o({
        target: "String",
        proto: !0,
        forced: !(!u && !p && (r = i(String.prototype, "endsWith"), r && !r.writable) || p)
    }, {
        endsWith: function(e) {
            var n = String(c(this));
            s(e);
            var t = arguments.length > 1 ? arguments[1] : void 0,
                r = a(n.length),
                o = void 0 === t ? r : f(a(t), r),
                i = String(e);
            return d ? d.call(n, i, o) : n.slice(o - i.length, o) === i
        }
    })
}, function(e, n, t) {
    "use strict";
    t.r(n);
    var r = {};
    t.r(r), t.d(r, "FUNDING", (function() {
        return Ln
    })), t.d(r, "getCorrelationID", (function() {
        return zn
    })), t.d(r, "setup", (function() {
        return ot
    }));
    var o = {};
    t.r(o), t.d(o, "Promise", (function() {
        return E
    })), t.d(o, "TYPES", (function() {
        return Xt
    })), t.d(o, "ProxyWindow", (function() {
        return St
    })), t.d(o, "setup", (function() {
        return Zt
    })), t.d(o, "destroy", (function() {
        return $t
    })), t.d(o, "serializeMessage", (function() {
        return Yt
    })), t.d(o, "deserializeMessage", (function() {
        return Vt
    })), t.d(o, "createProxyWindow", (function() {
        return Kt
    })), t.d(o, "toProxyWindow", (function() {
        return Jt
    })), t.d(o, "on", (function() {
        return Ht
    })), t.d(o, "once", (function() {
        return Gt
    })), t.d(o, "send", (function() {
        return Ut
    })), t.d(o, "markWindowKnown", (function() {
        return gt
    })), t.d(o, "cleanUpWindow", (function() {
        return Qt
    })), t.d(o, "bridge", (function() {}));
    var i = {};
    t.r(i), t.d(i, "ThreeDomainSecure", (function() {
        return vo
    })), t.d(i, "postRobot", (function() {
        return _o
    }));
    var a = {};
    t.r(a), t.d(a, "Messages", (function() {
        return gc
    })), t.d(a, "setup", (function() {
        return yc
    })), t.d(a, "destroy", (function() {
        return wc
    }));
    var s = {};

    function c(e, n) {
        if (null == e) return {};
        var t, r, o = {},
            i = Object.keys(e);
        for (r = 0; r < i.length; r++) n.indexOf(t = i[r]) >= 0 || (o[t] = e[t]);
        return o
    }

    function l() {
        return window.navigator.mockUserAgent || window.navigator.userAgent
    }

    function u(e) {
        return void 0 === e && (e = l()), e.indexOf("Opera Mini") > -1
    }

    function d(e) {
        return void 0 === e && (e = l()), /iPhone|iPod|iPad/.test(e)
    }

    function f(e, n) {
        return (f = Object.setPrototypeOf || function(e, n) {
            return e.__proto__ = n, e
        })(e, n)
    }

    function p(e, n) {
        e.prototype = Object.create(n.prototype), e.prototype.constructor = e, f(e, n)
    }

    function m() {
        return (m = Object.assign || function(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var r in t)({}).hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }).apply(this, arguments)
    }

    function h(e) {
        try {
            if (!e) return !1;
            if ("undefined" != typeof Promise && e instanceof Promise) return !0;
            if ("undefined" != typeof window && "function" == typeof window.Window && e instanceof window.Window) return !1;
            if ("undefined" != typeof window && "function" == typeof window.constructor && e instanceof window.constructor) return !1;
            var n = {}.toString;
            if (n) {
                var t = n.call(e);
                if ("[object Window]" === t || "[object global]" === t || "[object DOMWindow]" === t) return !1
            }
            if ("function" == typeof e.then) return !0
        } catch (e) {
            return !1
        }
        return !1
    }
    t.r(s), t.d(s, "setup", (function() {
        return vc
    }));
    var g, y = [],
        w = [],
        v = 0;

    function _() {
        if (!v && g) {
            var e = g;
            g = null, e.resolve()
        }
    }

    function x() {
        v += 1
    }

    function b() {
        v -= 1, _()
    }
    var E = function() {
        function e(e) {
            var n = this;
            if (this.resolved = void 0, this.rejected = void 0, this.errorHandled = void 0, this.value = void 0, this.error = void 0, this.handlers = void 0, this.dispatching = void 0, this.stack = void 0, this.resolved = !1, this.rejected = !1, this.errorHandled = !1, this.handlers = [], e) {
                var t, r, o = !1,
                    i = !1,
                    a = !1;
                x();
                try {
                    e((function(e) {
                        a ? n.resolve(e) : (o = !0, t = e)
                    }), (function(e) {
                        a ? n.reject(e) : (i = !0, r = e)
                    }))
                } catch (e) {
                    return b(), void this.reject(e)
                }
                b(), a = !0, o ? this.resolve(t) : i && this.reject(r)
            }
        }
        var n = e.prototype;
        return n.resolve = function(e) {
            if (this.resolved || this.rejected) return this;
            if (h(e)) throw new Error("Can not resolve promise with another promise");
            return this.resolved = !0, this.value = e, this.dispatch(), this
        }, n.reject = function(e) {
            var n = this;
            if (this.resolved || this.rejected) return this;
            if (h(e)) throw new Error("Can not reject promise with another promise");
            if (!e) {
                var t = e && "function" == typeof e.toString ? e.toString() : {}.toString.call(e);
                e = new Error("Expected reject to be called with Error, got " + t)
            }
            return this.rejected = !0, this.error = e, this.errorHandled || setTimeout((function() {
                n.errorHandled || function(e, n) {
                    if (-1 === y.indexOf(e)) {
                        y.push(e), setTimeout((function() {
                            throw e
                        }), 1);
                        for (var t = 0; t < w.length; t++) w[t](e, n)
                    }
                }(e, n)
            }), 1), this.dispatch(), this
        }, n.asyncReject = function(e) {
            return this.errorHandled = !0, this.reject(e), this
        }, n.dispatch = function() {
            var n = this.resolved,
                t = this.rejected,
                r = this.handlers;
            if (!this.dispatching && (n || t)) {
                this.dispatching = !0, x();
                for (var o = function(e, n) {
                        return e.then((function(e) {
                            n.resolve(e)
                        }), (function(e) {
                            n.reject(e)
                        }))
                    }, i = 0; i < r.length; i++) {
                    var a = r[i],
                        s = a.onSuccess,
                        c = a.onError,
                        l = a.promise,
                        u = void 0;
                    if (n) try {
                        u = s ? s(this.value) : this.value
                    } catch (e) {
                        l.reject(e);
                        continue
                    } else if (t) {
                        if (!c) {
                            l.reject(this.error);
                            continue
                        }
                        try {
                            u = c(this.error)
                        } catch (e) {
                            l.reject(e);
                            continue
                        }
                    } u instanceof e && (u.resolved || u.rejected) ? (u.resolved ? l.resolve(u.value) : l.reject(u.error), u.errorHandled = !0) : h(u) ? u instanceof e && (u.resolved || u.rejected) ? u.resolved ? l.resolve(u.value) : l.reject(u.error) : o(u, l) : l.resolve(u)
                }
                r.length = 0, this.dispatching = !1, b()
            }
        }, n.then = function(n, t) {
            if (n && "function" != typeof n && !n.call) throw new Error("Promise.then expected a function for success handler");
            if (t && "function" != typeof t && !t.call) throw new Error("Promise.then expected a function for error handler");
            var r = new e;
            return this.handlers.push({
                promise: r,
                onSuccess: n,
                onError: t
            }), this.errorHandled = !0, this.dispatch(), r
        }, n.catch = function(e) {
            return this.then(void 0, e)
        }, n.finally = function(n) {
            if (n && "function" != typeof n && !n.call) throw new Error("Promise.finally expected a function");
            return this.then((function(t) {
                return e.try(n).then((function() {
                    return t
                }))
            }), (function(t) {
                return e.try(n).then((function() {
                    throw t
                }))
            }))
        }, n.timeout = function(e, n) {
            var t = this;
            if (this.resolved || this.rejected) return this;
            var r = setTimeout((function() {
                t.resolved || t.rejected || t.reject(n || new Error("Promise timed out after " + e + "ms"))
            }), e);
            return this.then((function(e) {
                return clearTimeout(r), e
            }))
        }, n.toPromise = function() {
            if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
            return Promise.resolve(this)
        }, e.resolve = function(n) {
            return n instanceof e ? n : h(n) ? new e((function(e, t) {
                return n.then(e, t)
            })) : (new e).resolve(n)
        }, e.reject = function(n) {
            return (new e).reject(n)
        }, e.asyncReject = function(n) {
            return (new e).asyncReject(n)
        }, e.all = function(n) {
            var t = new e,
                r = n.length,
                o = [];
            if (!r) return t.resolve(o), t;
            for (var i = function(e, n, i) {
                    return n.then((function(n) {
                        o[e] = n, 0 == (r -= 1) && t.resolve(o)
                    }), (function(e) {
                        i.reject(e)
                    }))
                }, a = 0; a < n.length; a++) {
                var s = n[a];
                if (s instanceof e) {
                    if (s.resolved) {
                        o[a] = s.value, r -= 1;
                        continue
                    }
                } else if (!h(s)) {
                    o[a] = s, r -= 1;
                    continue
                }
                i(a, e.resolve(s), t)
            }
            return 0 === r && t.resolve(o), t
        }, e.hash = function(n) {
            var t = {},
                r = [],
                o = function(e) {
                    if (n.hasOwnProperty(e)) {
                        var o = n[e];
                        h(o) ? r.push(o.then((function(n) {
                            t[e] = n
                        }))) : t[e] = o
                    }
                };
            for (var i in n) o(i);
            return e.all(r).then((function() {
                return t
            }))
        }, e.map = function(n, t) {
            return e.all(n.map(t))
        }, e.onPossiblyUnhandledException = function(e) {
            return function(e) {
                return w.push(e), {
                    cancel: function() {
                        w.splice(w.indexOf(e), 1)
                    }
                }
            }(e)
        }, e.try = function(n, t, r) {
            if (n && "function" != typeof n && !n.call) throw new Error("Promise.try expected a function");
            var o;
            x();
            try {
                o = n.apply(t, r || [])
            } catch (n) {
                return b(), e.reject(n)
            }
            return b(), e.resolve(o)
        }, e.delay = function(n) {
            return new e((function(e) {
                setTimeout(e, n)
            }))
        }, e.isPromise = function(n) {
            return !!(n && n instanceof e) || h(n)
        }, e.flush = function() {
            return n = g = g || new e, _(), n;
            var n
        }, e
    }();

    function A(e) {
        return "[object RegExp]" === {}.toString.call(e)
    }
    var C = {
            IFRAME: "iframe",
            POPUP: "popup"
        },
        P = "Call was rejected by callee.\r\n";

    function S(e) {
        return void 0 === e && (e = window), "about:" === e.location.protocol
    }

    function R(e) {
        if (void 0 === e && (e = window), e) try {
            if (e.parent && e.parent !== e) return e.parent
        } catch (e) {}
    }

    function O(e) {
        if (void 0 === e && (e = window), e && !R(e)) try {
            return e.opener
        } catch (e) {}
    }

    function T(e) {
        try {
            return !0
        } catch (e) {}
        return !1
    }

    function I(e) {
        void 0 === e && (e = window);
        var n = e.location;
        if (!n) throw new Error("Can not read window location");
        var t = n.protocol;
        if (!t) throw new Error("Can not read window protocol");
        if ("file:" === t) return "file://";
        if ("about:" === t) {
            var r = R(e);
            return r && T() ? I(r) : "about://"
        }
        var o = n.host;
        if (!o) throw new Error("Can not read window host");
        return t + "//" + o
    }

    function k(e) {
        void 0 === e && (e = window);
        var n = I(e);
        return n && e.mockDomain && 0 === e.mockDomain.indexOf("mock:") ? e.mockDomain : n
    }

    function L(e) {
        if (! function(e) {
                try {
                    if (e === window) return !0
                } catch (e) {}
                try {
                    var n = Object.getOwnPropertyDescriptor(e, "location");
                    if (n && !1 === n.enumerable) return !1
                } catch (e) {}
                try {
                    if (S(e) && T()) return !0
                } catch (e) {}
                try {
                    if (I(e) === I(window)) return !0
                } catch (e) {}
                return !1
            }(e)) return !1;
        try {
            if (e === window) return !0;
            if (S(e) && T()) return !0;
            if (k(window) === k(e)) return !0
        } catch (e) {}
        return !1
    }

    function z(e) {
        if (!L(e)) throw new Error("Expected window to be same domain");
        return e
    }

    function N(e, n) {
        if (!e || !n) return !1;
        var t = R(n);
        return t ? t === e : -1 !== function(e) {
            var n = [];
            try {
                for (; e.parent !== e;) n.push(e.parent), e = e.parent
            } catch (e) {}
            return n
        }(n).indexOf(e)
    }

    function M(e) {
        var n, t, r = [];
        try {
            n = e.frames
        } catch (t) {
            n = e
        }
        try {
            t = n.length
        } catch (e) {}
        if (0 === t) return r;
        if (t) {
            for (var o = 0; o < t; o++) {
                var i = void 0;
                try {
                    i = n[o]
                } catch (e) {
                    continue
                }
                r.push(i)
            }
            return r
        }
        for (var a = 0; a < 100; a++) {
            var s = void 0;
            try {
                s = n[a]
            } catch (e) {
                return r
            }
            if (!s) return r;
            r.push(s)
        }
        return r
    }

    function F(e) {
        for (var n = [], t = 0, r = M(e); t < r.length; t++) {
            var o = r[t];
            n.push(o);
            for (var i = 0, a = F(o); i < a.length; i++) n.push(a[i])
        }
        return n
    }

    function j(e) {
        void 0 === e && (e = window);
        try {
            if (e.top) return e.top
        } catch (e) {}
        if (R(e) === e) return e;
        try {
            if (N(window, e) && window.top) return window.top
        } catch (e) {}
        try {
            if (N(e, window) && window.top) return window.top
        } catch (e) {}
        for (var n = 0, t = F(e); n < t.length; n++) {
            var r = t[n];
            try {
                if (r.top) return r.top
            } catch (e) {}
            if (R(r) === r) return r
        }
    }

    function W(e) {
        var n = j(e);
        if (!n) throw new Error("Can not determine top window");
        var t = [].concat(F(n), [n]);
        return -1 === t.indexOf(e) && (t = [].concat(t, [e], F(e))), t
    }
    var D = [],
        q = [];

    function B(e, n) {
        void 0 === n && (n = !0);
        try {
            if (e === window) return !1
        } catch (e) {
            return !0
        }
        try {
            if (!e) return !0
        } catch (e) {
            return !0
        }
        try {
            if (e.closed) return !0
        } catch (e) {
            return !e || e.message !== P
        }
        if (n && L(e)) try {
            if (e.mockclosed) return !0
        } catch (e) {}
        try {
            if (!e.parent || !e.top) return !0
        } catch (e) {}
        var t = function(e, n) {
            for (var t = 0; t < e.length; t++) try {
                if (e[t] === n) return t
            } catch (e) {}
            return -1
        }(D, e);
        if (-1 !== t) {
            var r = q[t];
            if (r && function(e) {
                    if (!e.contentWindow) return !0;
                    if (!e.parentNode) return !0;
                    var n = e.ownerDocument;
                    if (n && n.documentElement && !n.documentElement.contains(e)) {
                        for (var t = e; t.parentNode && t.parentNode !== t;) t = t.parentNode;
                        if (!t.host || !n.documentElement.contains(t.host)) return !0
                    }
                    return !1
                }(r)) return !0
        }
        return !1
    }

    function H(e) {
        return void 0 === e && (e = window), O(e = e || window) || R(e) || void 0
    }

    function G(e, n) {
        for (var t = 0; t < e.length; t++)
            for (var r = e[t], o = 0; o < n.length; o++)
                if (r === n[o]) return !0;
        return !1
    }

    function U(e) {
        void 0 === e && (e = window);
        for (var n = 0, t = e; t;)(t = R(t)) && (n += 1);
        return n
    }

    function Y(e, n) {
        var t = j(e) || e,
            r = j(n) || n;
        try {
            if (t && r) return t === r
        } catch (e) {}
        var o = W(e),
            i = W(n);
        if (G(o, i)) return !0;
        var a = O(t),
            s = O(r);
        return a && G(W(a), i) || s && G(W(s), o), !1
    }

    function V(e, n) {
        if ("string" == typeof e) {
            if ("string" == typeof n) return "*" === e || n === e;
            if (A(n)) return !1;
            if (Array.isArray(n)) return !1
        }
        return A(e) ? A(n) ? e.toString() === n.toString() : !Array.isArray(n) && Boolean(n.match(e)) : !!Array.isArray(e) && (Array.isArray(n) ? JSON.stringify(e) === JSON.stringify(n) : !A(n) && e.some((function(e) {
            return V(e, n)
        })))
    }

    function K(e) {
        return e.match(/^(https?|mock|file):\/\//) ? e.split("/").slice(0, 3).join("/") : k()
    }

    function J(e, n, t, r) {
        var o;
        return void 0 === t && (t = 1e3), void 0 === r && (r = 1 / 0),
            function i() {
                if (B(e)) return o && clearTimeout(o), n();
                r <= 0 ? clearTimeout(o) : (r -= t, o = setTimeout(i, t))
            }(), {
                cancel: function() {
                    o && clearTimeout(o)
                }
            }
    }

    function Z(e) {
        try {
            if (e === window) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if ("[object Window]" === {}.toString.call(e)) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if (window.Window && e instanceof window.Window) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if (e && e.self === e) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if (e && e.parent === e) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if (e && e.top === e) return !0
        } catch (e) {
            if (e && e.message === P) return !0
        }
        try {
            if (e && "__unlikely_value__" === e.__cross_domain_utils_window_check__) return !1
        } catch (e) {
            return !0
        }
        try {
            if ("postMessage" in e && "self" in e && "location" in e) return !0
        } catch (e) {}
        return !1
    }

    function $(e) {
        try {
            e.close()
        } catch (e) {}
    }

    function X(e, n) {
        for (var t = 0; t < e.length; t++) try {
            if (e[t] === n) return t
        } catch (e) {}
        return -1
    }
    var Q, ee = function() {
        function e() {
            if (this.name = void 0, this.weakmap = void 0, this.keys = void 0, this.values = void 0, this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__", function() {
                    if ("undefined" == typeof WeakMap) return !1;
                    if (void 0 === Object.freeze) return !1;
                    try {
                        var e = new WeakMap,
                            n = {};
                        return Object.freeze(n), e.set(n, "__testvalue__"), "__testvalue__" === e.get(n)
                    } catch (e) {
                        return !1
                    }
                }()) try {
                this.weakmap = new WeakMap
            } catch (e) {}
            this.keys = [], this.values = []
        }
        var n = e.prototype;
        return n._cleanupClosedWindows = function() {
            for (var e = this.weakmap, n = this.keys, t = 0; t < n.length; t++) {
                var r = n[t];
                if (Z(r) && B(r)) {
                    if (e) try {
                        e.delete(r)
                    } catch (e) {}
                    n.splice(t, 1), this.values.splice(t, 1), t -= 1
                }
            }
        }, n.isSafeToReadWrite = function(e) {
            return !Z(e)
        }, n.set = function(e, n) {
            if (!e) throw new Error("WeakMap expected key");
            var t = this.weakmap;
            if (t) try {
                t.set(e, n)
            } catch (e) {
                delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
                var r = this.name,
                    o = e[r];
                return void(o && o[0] === e ? o[1] = n : Object.defineProperty(e, r, {
                    value: [e, n],
                    writable: !0
                }))
            } catch (e) {}
            this._cleanupClosedWindows();
            var i = this.keys,
                a = this.values,
                s = X(i, e); - 1 === s ? (i.push(e), a.push(n)) : a[s] = n
        }, n.get = function(e) {
            if (!e) throw new Error("WeakMap expected key");
            var n = this.weakmap;
            if (n) try {
                if (n.has(e)) return n.get(e)
            } catch (e) {
                delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
                var t = e[this.name];
                return t && t[0] === e ? t[1] : void 0
            } catch (e) {}
            this._cleanupClosedWindows();
            var r = X(this.keys, e);
            if (-1 !== r) return this.values[r]
        }, n.delete = function(e) {
            if (!e) throw new Error("WeakMap expected key");
            var n = this.weakmap;
            if (n) try {
                n.delete(e)
            } catch (e) {
                delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
                var t = e[this.name];
                t && t[0] === e && (t[0] = t[1] = void 0)
            } catch (e) {}
            this._cleanupClosedWindows();
            var r = this.keys,
                o = X(r, e); - 1 !== o && (r.splice(o, 1), this.values.splice(o, 1))
        }, n.has = function(e) {
            if (!e) throw new Error("WeakMap expected key");
            var n = this.weakmap;
            if (n) try {
                if (n.has(e)) return !0
            } catch (e) {
                delete this.weakmap
            }
            if (this.isSafeToReadWrite(e)) try {
                var t = e[this.name];
                return !(!t || t[0] !== e)
            } catch (e) {}
            return this._cleanupClosedWindows(), -1 !== X(this.keys, e)
        }, n.getOrSet = function(e, n) {
            if (this.has(e)) return this.get(e);
            var t = n();
            return this.set(e, t), t
        }, e
    }();

    function ne(e) {
        return (ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function te() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
        } catch (e) {
            return !1
        }
    }

    function re(e, n, t) {
        return (re = te() ? Reflect.construct : function(e, n, t) {
            var r = [null];
            r.push.apply(r, n);
            var o = new(Function.bind.apply(e, r));
            return t && f(o, t.prototype), o
        }).apply(null, arguments)
    }

    function oe(e) {
        var n = "function" == typeof Map ? new Map : void 0;
        return (oe = function(e) {
            if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== n) {
                if (n.has(e)) return n.get(e);
                n.set(e, t)
            }

            function t() {
                return re(e, arguments, ne(this).constructor)
            }
            return t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), f(t, e)
        })(e)
    }

    function ie(e) {
        return e.name || e.__name__ || e.displayName || "anonymous"
    }

    function ae(e, n) {
        try {
            delete e.name, e.name = n
        } catch (e) {}
        return e.__name__ = e.displayName = n, e
    }

    function se(e) {
        if ("function" == typeof btoa) return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, n) {
            return String.fromCharCode(parseInt(n, 16))
        })));
        if ("undefined" != typeof Buffer) return Buffer.from(e, "utf8").toString("base64");
        throw new Error("Can not find window.btoa or Buffer")
    }

    function ce() {
        var e = "0123456789abcdef";
        return "xxxxxxxxxx".replace(/./g, (function() {
            return e.charAt(Math.floor(Math.random() * e.length))
        })) + "_" + se((new Date).toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
    }

    function le() {
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("No global found")
    }

    function ue(e) {
        try {
            return JSON.stringify([].slice.call(e), (function(e, n) {
                return "function" == typeof n ? "memoize[" + function(e) {
                    if (Q = Q || new ee, null == e || "object" != typeof e && "function" != typeof e) throw new Error("Invalid object");
                    var n = Q.get(e);
                    return n || (n = typeof e + ":" + ce(), Q.set(e, n)), n
                }(n) + "]" : n
            }))
        } catch (e) {
            throw new Error("Arguments not serializable -- can not be used to memoize")
        }
    }

    function de() {
        return {}
    }
    var fe = 0,
        pe = 0;

    function me(e, n) {
        void 0 === n && (n = {});
        var t, r, o = n.thisNamespace,
            i = void 0 !== o && o,
            a = n.time,
            s = fe;
        fe += 1;
        var c = function() {
            for (var n = arguments.length, o = new Array(n), c = 0; c < n; c++) o[c] = arguments[c];
            var l;
            s < pe && (t = null, r = null, s = fe, fe += 1), l = i ? (r = r || new ee).getOrSet(this, de) : t = t || {};
            var u = ue(o),
                d = l[u];
            if (d && a && Date.now() - d.time < a && (delete l[u], d = null), d) return d.value;
            var f = Date.now(),
                p = e.apply(this, arguments);
            return l[u] = {
                time: f,
                value: p
            }, p
        };
        return c.reset = function() {
            t = null, r = null
        }, ae(c, (n.name || ie(e)) + "::memoized")
    }

    function he(e) {
        var n = {};

        function t() {
            for (var t = arguments, r = this, o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
            var s = ue(i);
            return n.hasOwnProperty(s) || (n[s] = E.try((function() {
                return e.apply(r, t)
            })).finally((function() {
                delete n[s]
            }))), n[s]
        }
        return t.reset = function() {
            n = {}
        }, ae(t, ie(e) + "::promiseMemoized")
    }

    function ge(e, n, t) {
        void 0 === t && (t = []);
        var r = e.__inline_memoize_cache__ = e.__inline_memoize_cache__ || {},
            o = ue(t);
        return r.hasOwnProperty(o) ? r[o] : r[o] = n.apply(void 0, t)
    }

    function ye() {}

    function we(e) {
        var n = !1;
        return ae((function() {
            if (!n) return n = !0, e.apply(this, arguments)
        }), ie(e) + "::once")
    }

    function ve(e, n) {
        if (void 0 === n && (n = 1), n >= 3) return "stringifyError stack overflow";
        try {
            if (!e) return "<unknown error: " + {}.toString.call(e) + ">";
            if ("string" == typeof e) return e;
            if (e instanceof Error) {
                var t = e && e.stack,
                    r = e && e.message;
                if (t && r) return -1 !== t.indexOf(r) ? t : r + "\n" + t;
                if (t) return t;
                if (r) return r
            }
            return e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
        } catch (e) {
            return "Error while stringifying error: " + ve(e, n + 1)
        }
    }

    function _e(e) {
        var n = "<unknown error: " + {}.toString.call(e) + ">";
        return e ? e instanceof Error ? e.message || n : "string" == typeof e.message && e.message || n : n
    }

    function xe(e) {
        return "string" == typeof e ? e : e && e.toString && "function" == typeof e.toString ? e.toString() : {}.toString.call(e)
    }

    function be(e, n) {
        if (!n) return e;
        if (Object.assign) return Object.assign(e, n);
        for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t]);
        return e
    }
    me.clear = function() {
        pe = fe
    };
    var Ee = function(e) {
        if (Object.values) return Object.values(e);
        var n = [];
        for (var t in e) e.hasOwnProperty(t) && n.push(e[t]);
        return n
    };

    function Ae(e) {
        return "data:image/svg+xml;base64," + se(e)
    }

    function Ce(e, n) {
        void 0 === n && (n = Boolean);
        var t = {};
        for (var r in e) e.hasOwnProperty(r) && n(e[r], r) && (t[r] = e[r]);
        return t
    }

    function Pe(e) {
        return e
    }

    function Se(e, n) {
        var t;
        return function r() {
            t = setTimeout((function() {
                e(), r()
            }), n)
        }(), {
            cancel: function() {
                clearTimeout(t)
            }
        }
    }

    function Re() {
        var e = {},
            n = {};
        return {
            on: function(e, t) {
                var r = n[e] = n[e] || [];
                r.push(t);
                var o = !1;
                return {
                    cancel: function() {
                        o || (o = !0, r.splice(r.indexOf(t), 1))
                    }
                }
            },
            once: function(e, n) {
                var t = this.on(e, (function() {
                    t.cancel(), n()
                }));
                return t
            },
            trigger: function(e) {
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                var i = n[e],
                    a = [];
                if (i)
                    for (var s = function(e) {
                            var n = i[e];
                            a.push(E.try((function() {
                                return n.apply(void 0, r)
                            })))
                        }, c = 0; c < i.length; c++) s(c);
                return E.all(a).then(ye)
            },
            triggerOnce: function(n) {
                if (e[n]) return E.resolve();
                e[n] = !0;
                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                return this.trigger.apply(this, [n].concat(r))
            },
            reset: function() {
                n = {}
            }
        }
    }

    function Oe(e, n, t) {
        if (Array.isArray(e)) {
            if ("number" != typeof n) throw new TypeError("Array key must be number")
        } else if ("object" == typeof e && null !== e && "string" != typeof n) throw new TypeError("Object key must be string");
        Object.defineProperty(e, n, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                delete e[n];
                var r = t();
                return e[n] = r, r
            },
            set: function(t) {
                delete e[n], e[n] = t
            }
        })
    }

    function Te(e) {
        return [].slice.call(e)
    }

    function Ie(e) {
        return "object" == typeof(n = e) && null !== n && "[object Object]" === {}.toString.call(e);
        var n
    }

    function ke(e) {
        if (!Ie(e)) return !1;
        var n = e.constructor;
        if ("function" != typeof n) return !1;
        var t = n.prototype;
        return !!Ie(t) && !!t.hasOwnProperty("isPrototypeOf")
    }

    function Le(e, n, t) {
        if (void 0 === t && (t = ""), Array.isArray(e)) {
            for (var r = e.length, o = [], i = function(r) {
                    Oe(o, r, (function() {
                        var o = t ? t + "." + r : "" + r,
                            i = n(e[r], r, o);
                        return (ke(i) || Array.isArray(i)) && (i = Le(i, n, o)), i
                    }))
                }, a = 0; a < r; a++) i(a);
            return o
        }
        if (ke(e)) {
            var s = {},
                c = function(r) {
                    if (!e.hasOwnProperty(r)) return "continue";
                    Oe(s, r, (function() {
                        var o = t ? t + "." + r : "" + r,
                            i = n(e[r], r, o);
                        return (ke(i) || Array.isArray(i)) && (i = Le(i, n, o)), i
                    }))
                };
            for (var l in e) c(l);
            return s
        }
        throw new Error("Pass an object or array")
    }

    function ze(e) {
        return null != e
    }

    function Ne(e) {
        return "[object RegExp]" === {}.toString.call(e)
    }

    function Me(e, n, t) {
        if (e.hasOwnProperty(n)) return e[n];
        var r = t();
        return e[n] = r, r
    }

    function Fe(e) {
        var n, t = [],
            r = !1;
        return {
            set: function(n, t) {
                return r || (e[n] = t, this.register((function() {
                    delete e[n]
                }))), t
            },
            register: function(e) {
                r ? e(n) : t.push(we((function() {
                    return e(n)
                })))
            },
            all: function(e) {
                n = e;
                var o = [];
                for (r = !0; t.length;) {
                    var i = t.shift();
                    o.push(i())
                }
                return E.all(o).then(ye)
            }
        }
    }

    function je(e, n) {
        if (null == n) throw new Error("Expected " + e + " to be present");
        return n
    }
    me(Ee);
    var We = function(e) {
        function n(n) {
            var t;
            return (t = e.call(this, n) || this).name = t.constructor.name, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(t), t.constructor) : t.stack = new Error(n).stack, t
        }
        return p(n, e), n
    }(oe(Error));

    function De() {
        return Boolean(document.body) && "complete" === document.readyState
    }

    function qe() {
        return Boolean(document.body) && "interactive" === document.readyState
    }

    function Be(e) {
        return encodeURIComponent(e)
    }

    function He() {
        return ge(He, (function() {
            return new E((function(e) {
                De() && e(), window.addEventListener("load", (function() {
                    return e()
                }))
            }))
        }))
    }

    function Ge(e) {
        return ge(Ge, (function() {
            var n = {};
            if (!e) return n;
            if (-1 === e.indexOf("=")) return n;
            for (var t = 0, r = e.split("&"); t < r.length; t++) {
                var o = r[t];
                (o = o.split("="))[0] && o[1] && (n[decodeURIComponent(o[0])] = decodeURIComponent(o[1]))
            }
            return n
        }), [e])
    }

    function Ue(e, n) {
        return void 0 === n && (n = {}), n && Object.keys(n).length ? (void 0 === (t = m({}, Ge(e), n)) && (t = {}), Object.keys(t).filter((function(e) {
            return "string" == typeof t[e] || "boolean" == typeof t[e]
        })).map((function(e) {
            var n = t[e];
            if ("string" != typeof n && "boolean" != typeof n) throw new TypeError("Invalid type for query");
            return Be(e) + "=" + Be(n.toString())
        })).join("&")) : e;
        var t
    }

    function Ye() {
        return ge(Ye, (function() {
            var e = window.performance;
            if (e && e.now && e.timing && e.timing.connectEnd && e.timing.navigationStart && Math.abs(e.now() - Date.now()) > 1e3 && e.now() - (e.timing.connectEnd - e.timing.navigationStart) > 0) return e
        }))
    }

    function Ve() {
        return "undefined" != typeof window && void 0 !== window.location
    }

    function Ke() {
        return ge(Ke, (function() {
            try {
                if ("undefined" == typeof window) return !1;
                if (window.localStorage) {
                    var e = Math.random().toString();
                    window.localStorage.setItem("__test__localStorage__", e);
                    var n = window.localStorage.getItem("__test__localStorage__");
                    if (window.localStorage.removeItem("__test__localStorage__"), e === n) return !0
                }
            } catch (e) {}
            return !1
        }))
    }

    function Je() {
        var e = window.navigator,
            n = e.languages ? [].concat(e.languages) : [];
        return e.language && n.push(e.language), e.userLanguage && n.push(e.userLanguage), n.map((function(e) {
            if (e && e.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                var n = e.split(/[-_]/);
                return {
                    country: n[1],
                    lang: n[0]
                }
            }
            return e && e.match(/^[a-z]{2}$/) ? {
                lang: e
            } : null
        })).filter(Boolean)
    }

    function Ze(e, n) {
        e.appendChild(n)
    }

    function $e(e) {
        return e instanceof window.Element || null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
    }

    function Xe(e, n) {
        return void 0 === n && (n = document), $e(e) ? e : "string" == typeof e ? n.querySelector(e) : void 0
    }

    function Qe(e, n) {
        void 0 === n && (n = document);
        var t = Xe(e, n);
        if (t) return t;
        throw new Error("Can not find element: " + xe(e))
    }

    function en(e) {
        return new E((function(n, t) {
            var r = xe(e),
                o = Xe(e);
            if (o) return n(o);
            if (De()) return t(new Error("Document is ready and element " + r + " does not exist"));
            var i = setInterval((function() {
                return (o = Xe(e)) ? (clearInterval(i), n(o)) : De() ? (clearInterval(i), t(new Error("Document is ready and element " + r + " does not exist"))) : void 0
            }), 10)
        }))
    }
    me((function() {
        return new E((function(e) {
            if (De() || qe()) return e();
            var n = setInterval((function() {
                if (De() || qe()) return clearInterval(n), e()
            }), 10)
        }))
    }));
    var nn, tn = function(e) {
        function n() {
            return e.apply(this, arguments) || this
        }
        return p(n, e), n
    }(We);

    function rn(e) {
        if ((nn = nn || new ee).has(e)) {
            var n = nn.get(e);
            if (n) return n
        }
        var t = new E((function(n, t) {
            e.addEventListener("load", (function() {
                (function(e) {
                    if (function() {
                            for (var e = 0; e < D.length; e++) {
                                var n = !1;
                                try {
                                    n = D[e].closed
                                } catch (e) {}
                                n && (q.splice(e, 1), D.splice(e, 1))
                            }
                        }(), e && e.contentWindow) try {
                        D.push(e.contentWindow), q.push(e)
                    } catch (e) {}
                })(e), n(e)
            })), e.addEventListener("error", (function(r) {
                e.contentWindow ? n(e) : t(r)
            }))
        }));
        return nn.set(e, t), t
    }

    function on(e) {
        return rn(e).then((function(e) {
            if (!e.contentWindow) throw new Error("Could not find window in iframe");
            return e.contentWindow
        }))
    }

    function an(e, n) {
        void 0 === e && (e = {});
        var t = e.style || {},
            r = function(e, n, t) {
                void 0 === e && (e = "div"), void 0 === n && (n = {}), e = e.toLowerCase();
                var r, o, i, a = document.createElement(e);
                if (n.style && be(a.style, n.style), n.class && (a.className = n.class.join(" ")), n.id && a.setAttribute("id", n.id), n.attributes)
                    for (var s = 0, c = Object.keys(n.attributes); s < c.length; s++) {
                        var l = c[s];
                        a.setAttribute(l, n.attributes[l])
                    }
                if (n.styleSheet && (r = a, o = n.styleSheet, void 0 === i && (i = window.document), r.styleSheet ? r.styleSheet.cssText = o : r.appendChild(i.createTextNode(o))), n.html) {
                    if ("iframe" === e) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    a.innerHTML = n.html
                }
                return a
            }("iframe", {
                attributes: m({
                    allowTransparency: "true"
                }, e.attributes || {}),
                style: m({
                    backgroundColor: "transparent",
                    border: "none"
                }, t),
                html: e.html,
                class: e.class
            }),
            o = window.navigator.userAgent.match(/MSIE|Edge/i);
        return r.hasAttribute("id") || r.setAttribute("id", ce()), rn(r), n && Qe(n).appendChild(r), (e.url || o) && r.setAttribute("src", e.url || "about:blank"), r
    }

    function sn(e, n, t) {
        return e.addEventListener(n, t), {
            cancel: function() {
                e.removeEventListener(n, t)
            }
        }
    }

    function cn(e, n, t) {
        t = we(t);
        for (var r = 0; r < n.length; r++) e.addEventListener(n[r], t);
        return {
            cancel: we((function() {
                for (var r = 0; r < n.length; r++) e.removeEventListener(n[r], t)
            }))
        }
    }
    var ln = ["webkit", "moz", "ms", "o"],
        un = ["animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart"],
        dn = ["animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd"];

    function fn(e, n, t, r) {
        return void 0 === r && (r = 1e3), new E((function(o, i) {
            var a = Qe(e);
            if (!a) return o();
            var s, c, l, u, d = !1;

            function f() {
                clearTimeout(s), clearTimeout(c), l.cancel(), u.cancel()
            }
            l = cn(a, un, (function(e) {
                    e.target === a && e.animationName === n && (clearTimeout(s), e.stopPropagation(), l.cancel(), d = !0, c = setTimeout((function() {
                        f(), o()
                    }), r))
                })), u = cn(a, dn, (function(e) {
                    if (e.target === a && e.animationName === n) return f(), "string" == typeof e.animationName && e.animationName !== n ? i("Expected animation name to be " + n + ", found " + e.animationName) : o()
                })),
                function(e, n, t) {
                    e.style[n] = t;
                    for (var r = (i = n).charAt(0).toUpperCase() + i.slice(1).toLowerCase(), o = 0; o < ln.length; o++) e.style["" + ln[o] + r] = t;
                    var i
                }(a, "animationName", n), s = setTimeout((function() {
                    if (!d) return f(), o()
                }), 200), t && t(f)
        }))
    }

    function pn(e) {
        e.style.setProperty("display", "")
    }

    function mn(e) {
        e.style.setProperty("display", "none", "important")
    }

    function hn(e) {
        e && e.parentNode && e.parentNode.removeChild(e)
    }

    function gn(e) {
        return !(e && e.parentNode && e.ownerDocument && e.ownerDocument.documentElement && e.ownerDocument.documentElement.contains(e))
    }

    function yn(e, n, t) {
        var r = void 0 === t ? {} : t,
            o = r.width,
            i = void 0 === o || o,
            a = r.height,
            s = void 0 === a || a,
            c = r.interval,
            l = void 0 === c ? 100 : c,
            u = r.win,
            d = void 0 === u ? window : u,
            f = e.offsetWidth,
            p = e.offsetHeight,
            m = !1;
        n({
            width: f,
            height: p
        });
        var h, g, y = function() {
            if (!m && function(e) {
                    return Boolean(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                }(e)) {
                var t = e.offsetWidth,
                    r = e.offsetHeight;
                (i && t !== f || s && r !== p) && n({
                    width: t,
                    height: r
                }), f = t, p = r
            }
        };
        return d.addEventListener("resize", y), void 0 !== d.ResizeObserver ? ((h = new d.ResizeObserver(y)).observe(e), g = Se(y, 10 * l)) : void 0 !== d.MutationObserver ? ((h = new d.MutationObserver(y)).observe(e, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            characterData: !1
        }), g = Se(y, 10 * l)) : g = Se(y, l), {
            cancel: function() {
                m = !0, h.disconnect(), window.removeEventListener("resize", y), g.cancel()
            }
        }
    }

    function wn(e) {
        for (; e.parentNode;) e = e.parentNode;
        return "[object ShadowRoot]" === e.toString()
    }
    var vn = "undefined" != typeof document ? document.currentScript : null,
        _n = me((function() {
            if (vn) return vn;
            if (vn = function() {
                    try {
                        var e = function() {
                                try {
                                    throw new Error("_")
                                } catch (e) {
                                    return e.stack || ""
                                }
                            }(),
                            n = /.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(e),
                            t = n && n[1];
                        if (!t) return;
                        for (var r = 0, o = [].slice.call(document.getElementsByTagName("script")).reverse(); r < o.length; r++) {
                            var i = o[r];
                            if (i.src && i.src === t) return i
                        }
                    } catch (e) {}
                }()) return vn;
            throw new Error("Can not determine current script")
        })),
        xn = ce(),
        bn = me((function() {
            var e;
            try {
                e = _n()
            } catch (e) {
                return xn
            }
            var n = e.getAttribute("data-uid");
            return n && "string" == typeof n || (n = e.getAttribute("data-uid-auto")) && "string" == typeof n || (n = ce(), e.setAttribute("data-uid-auto", n)), n
        }));

    function En(e) {
        var n = e.name,
            t = e.lifetime,
            r = void 0 === t ? 12e5 : t;
        return ge(En, (function() {
            var e, t = "__" + n + "_storage__",
                o = ce();

            function i(n) {
                var r, i = Ke();
                if (e && (r = e), !r && i) {
                    var a = window.localStorage.getItem(t);
                    a && (r = JSON.parse(a))
                }
                r || (r = le()[t]), r || (r = {
                    id: o
                }), r.id || (r.id = o), e = r;
                var s = n(r);
                return i ? window.localStorage.setItem(t, JSON.stringify(r)) : le()[t] = r, e = null, s
            }

            function a() {
                return i((function(e) {
                    return e.id
                }))
            }

            function s(e) {
                return i((function(n) {
                    var t = n.__session__,
                        o = Date.now();
                    return t && o - t.created > r && (t = null), t || (t = {
                        guid: ce(),
                        created: o
                    }), n.__session__ = t, e(t)
                }))
            }
            return {
                getState: i,
                getID: a,
                isStateFresh: function() {
                    return a() === o
                },
                getSessionState: function(e) {
                    return s((function(n) {
                        return n.state = n.state || {}, e(n.state)
                    }))
                },
                getSessionID: function() {
                    return s((function(e) {
                        return e.guid
                    }))
                }
            }
        }), [{
            name: n,
            lifetime: r
        }])
    }
    var An = [];

    function Cn(e) {
        var n = e.url,
            t = e.method,
            r = void 0 === t ? "get" : t,
            o = e.headers,
            i = void 0 === o ? {} : o,
            a = e.json,
            s = e.data,
            c = e.body,
            l = e.win,
            u = void 0 === l ? window : l,
            d = e.timeout,
            f = void 0 === d ? 0 : d;
        return new E((function(e, t) {
            if (a && s || a && c || s && a) throw new Error("Only options.json or options.data or options.body should be passed");
            for (var o = {}, l = 0, d = Object.keys(i); l < d.length; l++) {
                var p = d[l];
                o[p.toLowerCase()] = i[p]
            }
            a ? o["content-type"] = o["content-type"] || "application/json" : (s || c) && (o["content-type"] = o["content-type"] || "application/x-www-form-urlencoded; charset=utf-8"), o.accept = o.accept || "application/json";
            for (var m = 0; m < An.length; m++)
                for (var h = (0, An[m])(), g = 0, y = Object.keys(h); g < y.length; g++) {
                    var w = y[g];
                    o[w.toLowerCase()] = h[w]
                }
            var v = new u.XMLHttpRequest;
            for (var _ in v.addEventListener("load", (function() {
                    var o = function(e) {
                        void 0 === e && (e = "");
                        for (var n = {}, t = 0, r = e.trim().split("\n"); t < r.length; t++) {
                            var o = r[t].split(":"),
                                i = o[0],
                                a = o.slice(1);
                            n[i.toLowerCase()] = a.join(":").trim()
                        }
                        return n
                    }(this.getAllResponseHeaders());
                    if (!this.status) return t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: no response status code."));
                    var i = o["content-type"],
                        a = i && (0 === i.indexOf("application/json") || 0 === i.indexOf("text/json")),
                        s = this.responseText;
                    try {
                        s = JSON.parse(s)
                    } catch (e) {
                        if (a) return t(new Error("Invalid json: " + this.responseText + "."))
                    }
                    return e({
                        status: this.status,
                        headers: o,
                        body: s
                    })
                }), !1), v.addEventListener("error", (function(e) {
                    t(new Error("Request to " + r.toLowerCase() + " " + n + " failed: " + e.toString() + "."))
                }), !1), v.open(r, n, !0), o) o.hasOwnProperty(_) && v.setRequestHeader(_, o[_]);
            a ? c = JSON.stringify(a) : s && (c = Object.keys(s).map((function(e) {
                return encodeURIComponent(e) + "=" + (s ? encodeURIComponent(s[e]) : "")
            })).join("&")), v.timeout = f, v.ontimeout = function() {
                t(new Error("Request to " + r.toLowerCase() + " " + n + " has timed out"))
            }, v.send(c)
        }))
    }

    function Pn(e) {
        return "string" == typeof e && /^[0-9]+%$/.test(e)
    }

    function Sn(e) {
        if ("number" == typeof e) return e;
        var n = e.match(/^([0-9]+)(px|%)$/);
        if (!n) throw new Error("Could not match css value from " + e);
        return parseInt(n[1], 10)
    }

    function Rn(e) {
        return Sn(e) + "px"
    }

    function On(e) {
        return "number" == typeof e ? Rn(e) : Pn(e) ? e : Rn(e)
    }

    function Tn(e, n) {
        if ("number" == typeof e) return e;
        if (Pn(e)) return parseInt(n * Sn(e) / 100, 10);
        var t;
        if ("string" == typeof(t = e) && /^[0-9]+px$/.test(t)) return Sn(e);
        throw new Error("Can not normalize dimension: " + e)
    }
    var In = {
            AD: ["en", "fr", "es", "zh"],
            AE: ["en", "fr", "es", "zh", "ar"],
            AG: ["en", "fr", "es", "zh"],
            AI: ["en", "fr", "es", "zh"],
            AL: ["sq", "en"],
            AM: ["en", "fr", "es", "zh"],
            AN: ["en", "fr", "es", "zh"],
            AO: ["en", "fr", "es", "zh"],
            AR: ["es", "en"],
            AT: ["de", "en"],
            AU: ["en"],
            AW: ["en", "fr", "es", "zh"],
            AZ: ["en", "fr", "es", "zh"],
            BA: ["en"],
            BB: ["en", "fr", "es", "zh"],
            BE: ["en", "nl", "fr"],
            BF: ["fr", "en", "es", "zh"],
            BG: ["bg", "en"],
            BH: ["ar", "en", "fr", "es", "zh"],
            BI: ["fr", "en", "es", "zh"],
            BJ: ["fr", "en", "es", "zh"],
            BM: ["en", "fr", "es", "zh"],
            BN: ["ms", "en"],
            BO: ["es", "en", "fr", "zh"],
            BR: ["pt", "en"],
            BS: ["en", "fr", "es", "zh"],
            BT: ["en"],
            BW: ["en", "fr", "es", "zh"],
            BY: ["en"],
            BZ: ["en", "es", "fr", "zh"],
            CA: ["en", "fr"],
            CD: ["fr", "en", "es", "zh"],
            CG: ["en", "fr", "es", "zh"],
            CH: ["de", "fr", "en"],
            CI: ["fr", "en"],
            CK: ["en", "fr", "es", "zh"],
            CL: ["es", "en", "fr", "zh"],
            CM: ["fr", "en"],
            CN: ["zh"],
            CO: ["es", "en", "fr", "zh"],
            CR: ["es", "en", "fr", "zh"],
            CV: ["en", "fr", "es", "zh"],
            CY: ["en"],
            CZ: ["cs", "en", "fr", "es", "zh"],
            DE: ["de", "en"],
            DJ: ["fr", "en", "es", "zh"],
            DK: ["da", "en"],
            DM: ["en", "fr", "es", "zh"],
            DO: ["es", "en", "fr", "zh"],
            DZ: ["ar", "en", "fr", "es", "zh"],
            EC: ["es", "en", "fr", "zh"],
            EE: ["et", "en", "ru", "fr", "es", "zh"],
            EG: ["ar", "en", "fr", "es", "zh"],
            ER: ["en", "fr", "es", "zh"],
            ES: ["es", "en"],
            ET: ["en", "fr", "es", "zh"],
            FI: ["fi", "en", "fr", "es", "zh"],
            FJ: ["en", "fr", "es", "zh"],
            FK: ["en", "fr", "es", "zh"],
            FM: ["en"],
            FO: ["da", "en", "fr", "es", "zh"],
            FR: ["fr", "en"],
            GA: ["fr", "en", "es", "zh"],
            GB: ["en"],
            GD: ["en", "fr", "es", "zh"],
            GE: ["en", "fr", "es", "zh"],
            GF: ["en", "fr", "es", "zh"],
            GI: ["en", "fr", "es", "zh"],
            GL: ["da", "en", "fr", "es", "zh"],
            GM: ["en", "fr", "es", "zh"],
            GN: ["fr", "en", "es", "zh"],
            GP: ["en", "fr", "es", "zh"],
            GR: ["el", "en", "fr", "es", "zh"],
            GT: ["es", "en", "fr", "zh"],
            GW: ["en", "fr", "es", "zh"],
            GY: ["en", "fr", "es", "zh"],
            HK: ["en", "zh"],
            HN: ["es", "en", "fr", "zh"],
            HR: ["en"],
            HU: ["hu", "en", "fr", "es", "zh"],
            ID: ["id", "en"],
            IE: ["en", "fr", "es", "zh"],
            IL: ["he", "en"],
            IN: ["en"],
            IS: ["en"],
            IT: ["it", "en"],
            JM: ["en", "es", "fr", "zh"],
            JO: ["ar", "en", "fr", "es", "zh"],
            JP: ["ja", "en"],
            KE: ["en", "fr", "es", "zh"],
            KG: ["en", "fr", "es", "zh"],
            KH: ["en"],
            KI: ["en", "fr", "es", "zh"],
            KM: ["fr", "en", "es", "zh"],
            KN: ["en", "fr", "es", "zh"],
            KR: ["ko", "en"],
            KW: ["ar", "en", "fr", "es", "zh"],
            KY: ["en", "fr", "es", "zh"],
            KZ: ["en", "fr", "es", "zh"],
            LA: ["en"],
            LC: ["en", "fr", "es", "zh"],
            LI: ["en", "fr", "es", "zh"],
            LK: ["si", "en"],
            LS: ["en", "fr", "es", "zh"],
            LT: ["lt", "en", "ru", "fr", "es", "zh"],
            LU: ["en", "de", "fr", "es", "zh"],
            LV: ["lv", "en", "ru", "fr", "es", "zh"],
            MA: ["ar", "en", "fr", "es", "zh"],
            MC: ["fr", "en"],
            MD: ["en"],
            ME: ["en"],
            MG: ["en", "fr", "es", "zh"],
            MH: ["en", "fr", "es", "zh"],
            MK: ["en"],
            ML: ["fr", "en", "es", "zh"],
            MN: ["en"],
            MQ: ["en", "fr", "es", "zh"],
            MR: ["en", "fr", "es", "zh"],
            MS: ["en", "fr", "es", "zh"],
            MT: ["en"],
            MU: ["en", "fr", "es", "zh"],
            MV: ["en"],
            MW: ["en", "fr", "es", "zh"],
            MX: ["es", "en"],
            MY: ["ms", "en"],
            MZ: ["en", "fr", "es", "zh"],
            NA: ["en", "fr", "es", "zh"],
            NC: ["en", "fr", "es", "zh"],
            NE: ["fr", "en", "es", "zh"],
            NF: ["en", "fr", "es", "zh"],
            NG: ["en"],
            NI: ["es", "en", "fr", "zh"],
            NL: ["nl", "en"],
            NO: ["no", "en"],
            NP: ["en"],
            NR: ["en", "fr", "es", "zh"],
            NU: ["en", "fr", "es", "zh"],
            NZ: ["en", "fr", "es", "zh"],
            OM: ["ar", "en", "fr", "es", "zh"],
            PA: ["es", "en", "fr", "zh"],
            PE: ["es", "en", "fr", "zh"],
            PF: ["en", "fr", "es", "zh"],
            PG: ["en", "fr", "es", "zh"],
            PH: ["tl", "en"],
            PL: ["pl", "en"],
            PM: ["en", "fr", "es", "zh"],
            PN: ["en", "fr", "es", "zh"],
            PT: ["pt", "en"],
            PW: ["en", "fr", "es", "zh"],
            PY: ["es", "en"],
            QA: ["en", "fr", "es", "zh", "ar"],
            RE: ["en", "fr", "es", "zh"],
            RO: ["ro", "en", "fr", "es", "zh"],
            RS: ["en", "fr", "es", "zh"],
            RU: ["ru", "en"],
            RW: ["fr", "en", "es", "zh"],
            SA: ["ar", "en", "fr", "es", "zh"],
            SB: ["en", "fr", "es", "zh"],
            SC: ["fr", "en", "es", "zh"],
            SE: ["sv", "en"],
            SG: ["en"],
            SH: ["en", "fr", "es", "zh"],
            SI: ["sl", "en", "fr", "es", "zh"],
            SJ: ["en", "fr", "es", "zh"],
            SK: ["sk", "en", "fr", "es", "zh"],
            SL: ["en", "fr", "es", "zh"],
            SM: ["en", "fr", "es", "zh"],
            SN: ["fr", "en", "es", "zh"],
            SO: ["en", "fr", "es", "zh"],
            SR: ["en", "fr", "es", "zh"],
            ST: ["en", "fr", "es", "zh"],
            SV: ["es", "en", "fr", "zh"],
            SZ: ["en", "fr", "es", "zh"],
            TC: ["en", "fr", "es", "zh"],
            TD: ["fr", "en", "es", "zh"],
            TG: ["fr", "en", "es", "zh"],
            TH: ["th", "en"],
            TJ: ["en", "fr", "es", "zh"],
            TM: ["en", "fr", "es", "zh"],
            TN: ["ar", "en", "fr", "es", "zh"],
            TO: ["en"],
            TR: ["tr", "en"],
            TT: ["en", "fr", "es", "zh"],
            TV: ["en", "fr", "es", "zh"],
            TW: ["zh", "en"],
            TZ: ["en", "fr", "es", "zh"],
            UA: ["en", "ru", "fr", "es", "zh"],
            UG: ["en", "fr", "es", "zh"],
            US: ["en", "fr", "es", "zh"],
            UY: ["es", "en", "fr", "zh"],
            VA: ["en", "fr", "es", "zh"],
            VC: ["en", "fr", "es", "zh"],
            VE: ["es", "en", "fr", "zh"],
            VG: ["en", "fr", "es", "zh"],
            VN: ["vi", "en"],
            VU: ["en", "fr", "es", "zh"],
            WF: ["en", "fr", "es", "zh"],
            WS: ["en"],
            YE: ["ar", "en", "fr", "es", "zh"],
            YT: ["en", "fr", "es", "zh"],
            ZA: ["en", "fr", "es", "zh"],
            ZM: ["en", "fr", "es", "zh"],
            ZW: ["en"]
        },
        kn = {
            HOME: "home",
            PRODUCT: "product",
            CART: "cart",
            CHECKOUT: "checkout",
            PRODUCT_LISTING: "product-listing",
            SEARCH_RESULTS: "search-results",
            PRODUCT_DETAILS: "product-details",
            MINI_CART: "mini-cart"
        },
        Ln = {
            PAYPAL: "paypal",
            VENMO: "venmo",
            ITAU: "itau",
            CREDIT: "credit",
            PAYLATER: "paylater",
            CARD: "card",
            IDEAL: "ideal",
            SEPA: "sepa",
            BANCONTACT: "bancontact",
            GIROPAY: "giropay",
            SOFORT: "sofort",
            EPS: "eps",
            MYBANK: "mybank",
            P24: "p24",
            VERKKOPANKKI: "verkkopankki",
            PAYU: "payu",
            BLIK: "blik",
            TRUSTLY: "trustly",
            ZIMPLER: "zimpler",
            MAXIMA: "maxima",
            OXXO: "oxxo",
            BOLETO: "boleto",
            WECHATPAY: "wechatpay",
            MERCADOPAGO: "mercadopago"
        };

    function zn() {
        return "5ed720600a93e"
    }
    var Nn = "AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R",
        Mn = {
            sandbox: Nn,
            sb: Nn,
            test: Nn
        },
        Fn = me((function() {
            try {
                return _n()
            } catch (e) {
                throw new Error('PayPal Payments SDK script not fiund on page! Expected to find <script src="https://www.paypal.com/sdk/js">\n\n' + ve(e))
            }
        })),
        jn = me((function() {
            for (var e = {}, n = 0, t = Fn().attributes; n < t.length; n++) {
                var r = t[n];
                0 === r.name.indexOf("data-") && (e[r.name] = r.value)
            }
            return e["data-uid"] = bn(), e
        }));

    function Wn(e, n) {
        return jn()[e] || n
    }
    var Dn = function(e, n) {
        return Ge(Fn().src.split("?")[1] || "")[e] || n
    };

    function qn(e, n) {
        return "true" === Dn(e, n ? n.toString() : "false")
    }

    function Bn() {
        var e = Dn("client-id");
        if (!e) throw new Error("Expected client-id parameter in sdk url");
        return Mn[e] ? Mn[e] : e
    }

    function Hn() {
        var e = Dn("merchant-id");
        if ("*" === e) {
            var n = Wn("data-merchant-id");
            if (!n) throw new Error("Must pass data-merchant-id when merchant-id=* passed in url");
            var t = n.split(",");
            if (t.length <= 1) throw new Error("Must pass multiple merchant ids to data-merchant-id. If passing a single id, pass merchant-id=XYZ in url");
            if (t.some((function(e, n) {
                    return t && t.indexOf(e) !== n
                }))) throw new Error("Duplicates data-merchant-id. Must pass unique merchant ids to data-merchant-id.");
            return t
        }
        return e ? e.split(",") : []
    }

    function Gn() {
        return Wn("data-namespace") || "paypal"
    }

    function Un(e) {
        var n = function(e, n) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
                var r = t.call(e, "string");
                if ("object" != typeof r) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e);
        return "symbol" == typeof n ? n : String(n)
    }
    var Yn = ["warn", "error"],
        Vn = ["error", "warn", "info", "debug"];

    function Kn(e) {
        var n = e.url,
            t = e.method,
            r = e.headers,
            o = e.json,
            i = e.enableSendBeacon,
            a = void 0 !== i && i;
        return E.try((function() {
            var e = r && Object.keys(r).length;
            if (window && window.navigator.sendBeacon && !e && a && window.Blob) try {
                var i = new Blob([JSON.stringify(o)], {
                    type: "application/json"
                });
                return window.navigator.sendBeacon(n, i)
            } catch (e) {}
            return Cn({
                url: n,
                method: t,
                headers: r,
                json: o
            })
        })).then(ye)
    }

    function Jn(e, n) {
        for (var t in n) n.hasOwnProperty(t) && n[t] && !e[t] && (e[t] = n[t])
    }

    function Zn(e) {
        var n = e.url,
            t = e.prefix,
            r = e.logLevel,
            o = void 0 === r ? "warn" : r,
            i = e.transport,
            a = void 0 === i ? Kn : i,
            s = e.flushInterval,
            c = void 0 === s ? 6e4 : s,
            l = e.enableSendBeacon,
            u = void 0 !== l && l,
            d = [],
            f = [],
            p = [],
            h = [],
            g = [],
            y = [];

        function w(e, n, t) {
            if (Ve() && window.console && window.console.log && !(Vn.indexOf(e) > Vn.indexOf(o))) {
                var r = [n];
                r.push(t), (t.error || t.warning) && r.push("\n\n", t.error || t.warning);
                try {
                    window.console[e] && window.console[e].apply ? window.console[e].apply(window.console, r) : window.console.log && window.console.log.apply && window.console.log.apply(window.console, r)
                } catch (e) {}
            }
        }

        function v() {
            return E.try((function() {
                if (Ve() && "file:" !== window.location.protocol && (d.length || f.length)) {
                    for (var e = {}, t = 0; t < h.length; t++) Jn(e, (0, h[t])(e));
                    for (var r = {}, o = 0; o < y.length; o++) Jn(r, (0, y[o])(r));
                    var i = a({
                        method: "POST",
                        url: n,
                        headers: r,
                        json: {
                            events: d,
                            meta: e,
                            tracking: f
                        },
                        enableSendBeacon: u
                    });
                    return d = [], f = [], i.then(ye)
                }
            }))
        }
        var _, x, b, A, C = (void 0 === x && (x = 50), ae((function() {
            A && clearTimeout(A);
            var e = b = b || new E;
            return A = setTimeout((function() {
                b = null, A = null, E.try(_).then((function(n) {
                    e.resolve(n)
                }), (function(n) {
                    e.reject(n)
                }))
            }), x), e
        }), ie(_ = v) + "::promiseDebounced"));

        function P(e, n, r) {
            if (void 0 === r && (r = {}), !Ve()) return R;
            t && (n = t + "_" + n);
            for (var o = m({}, Ce(r), {
                    timestamp: Date.now().toString()
                }), i = 0; i < p.length; i++) Jn(o, (0, p[i])(o));
            return function(e, n, t) {
                d.push({
                    level: e,
                    event: n,
                    payload: t
                }), -1 !== Yn.indexOf(e) && C()
            }(e, n, o), w(e, n, o), R
        }

        function S(e, n) {
            return e.push(n), R
        }
        Ve() && Se(C, c), "object" == typeof window && (window.addEventListener("beforeunload", (function() {
            v()
        })), window.addEventListener("unload", (function() {
            v()
        })));
        var R = {
            debug: function(e, n) {
                return P("debug", e, n)
            },
            info: function(e, n) {
                return P("info", e, n)
            },
            warn: function(e, n) {
                return P("warn", e, n)
            },
            error: function(e, n) {
                return P("error", e, n)
            },
            track: function(e) {
                if (void 0 === e && (e = {}), !Ve()) return R;
                for (var n = Ce(e), t = 0; t < g.length; t++) Jn(n, (0, g[t])(n));
                return w("debug", "track", n), f.push(n), R
            },
            flush: C,
            immediateFlush: v,
            addPayloadBuilder: function(e) {
                return S(p, e)
            },
            addMetaBuilder: function(e) {
                return S(h, e)
            },
            addTrackingBuilder: function(e) {
                return S(g, e)
            },
            addHeaderBuilder: function(e) {
                return S(y, e)
            },
            setTransport: function(e) {
                return a = e, R
            }
        };
        return R
    }

    function $n() {
        return Boolean(k().match(/\.paypal\.com(:\d+)?$/))
    }
    var Xn = me((function() {
            return Zn({
                url: (e = "/xoplatform/logger/api/logger", void 0 === e && (e = ""), "https://www.paypal.com" + e)
            });
            var e
        })),
        Qn = ["data-amount", "data-merchant-id", "data-partner-attribution-id", "data-enable-3ds", "data-sdk-integration-source", "data-client-metadata-id", "data-uid"];

    function et() {
        for (var e = function() {
                var e = Fn().getAttribute("src");
                if (!e) throw new Error("Can not find src for sdk script");
                return e
            }(), n = jn(), t = {}, r = 0, o = Object.keys(n); r < o.length; r++) {
            var i = o[r]; - 1 !== Qn.indexOf(i) && (t[i] = n[i])
        }
        return se(JSON.stringify({
            url: e,
            attrs: t
        })).replace(/\=+$/, "")
    }

    function nt() {
        return En({
            name: Gn()
        }).getSessionID()
    }
    me((function(e) {
        Xn().info("rest_api_create_access_token");
        var n, t = se(e + ":");
        return Cn({
            method: "post",
            url: (n = "/v1/oauth2/token", void 0 === n && (n = ""), ("undefined" != typeof window && void 0 !== window.location && "https://www.paypal.com" === k() ? "https://www.paypal.com" : "https://cors.api.paypal.com") + n),
            headers: {
                Authorization: "Basic " + t
            },
            data: {
                grant_type: "client_credentials"
            }
        }).then((function(n) {
            var t = n.body;
            if (t && "invalid_client" === t.error) throw new Error("Auth Api invalid client id: " + e + ":\n\n" + JSON.stringify(t, null, 4));
            if (!t || !t.access_token) throw new Error("Auth Api response error:\n\n" + JSON.stringify(t, null, 4));
            return t.access_token
        }))
    }));
    var tt = me(Re);

    function rt() {
        var e = Xn();
        Date.now(), e.addPayloadBuilder((function() {
            return {
                referer: window.location.host,
                uid: nt(),
                env: "production"
            }
        })), e.addTrackingBuilder((function() {
            var e, n = function() {
                    var e = Dn("locale");
                    if (e) {
                        var n = e.split("_");
                        return {
                            lang: n[0],
                            country: n[1]
                        }
                    }
                    for (var t = 0, r = Je(); t < r.length; t++) {
                        var o = r[t],
                            i = o.country,
                            a = o.lang;
                        if (In.hasOwnProperty(i) && -1 !== In[i].indexOf(a)) return {
                            country: i,
                            lang: a
                        }
                    }
                    for (var s = 0, c = Je(); s < c.length; s++) {
                        var l = c[s].country;
                        if (In.hasOwnProperty(l)) return {
                            country: l,
                            lang: In[l][0]
                        }
                    }
                    return {
                        lang: "en",
                        country: "US"
                    }
                }(),
                t = n.lang,
                r = n.country,
                o = Hn();
            return (e = {}).feed_name = "payments_sdk", e.serverside_data_source = "checkout", e.client_id = Bn(), e.seller_id = o && o.toString(), e.page_session_id = nt(), e.referer_url = window.location.host, e.locale = t + "_" + r, e.integration_identifier = Bn(), e.bn_code = Wn("data-partner-attribution-id"), e.pp_placement = function() {
                var e = Wn("data-page-type", "");
                if (-1 === Ee(kn).indexOf(e.toLowerCase()) && e.length) throw new Error("Invalid page type, '" + e + "'");
                return e.toLowerCase()
            }(), e.sdk_name = "payments_sdk", e.sdk_version = "5.0.206", e.user_agent = window.navigator && window.navigator.userAgent, e.user_action = qn("commit", (Dn("intent", "capture"), !0)) ? "commit" : "continue", e.context_correlation_id = "5ed720600a93e", e.sdk_integration_source = Wn("data-sdk-integration-source"), e
        })), E.onPossiblyUnhandledException((function(n) {
            var t;
            e.track(((t = {}).ext_error_code = "payments_sdk_error", t.ext_error_desc = _e(n), t)), e.error("unhandled_error", {
                err: ve(n)
            }), e.flush().catch(ye)
        })), He().then((function() {
            var n, t, r = Fn(),
                o = function(e) {
                    var n = Ye();
                    if (n && "function" == typeof n.getEntries)
                        for (var t = n.getEntries(), r = 0; r < t.length; r++) {
                            var o = t[r];
                            if (o && o.name && 0 === o.name.indexOf(e) && "number" == typeof o.duration) return Math.floor(o.duration)
                        }
                }(r.src);
            t = 0 === o ? "sdk_client_cache_hit" : "number" == typeof o ? "sdk_client_cache_miss" : "sdk_client_cache_unknown", e.info("setup_production").info("setup_production_" + "5.0.206".replace(/\./g, "_")).info("sdk_" + ($n() ? "paypal" : "non_paypal") + "_domain_script_uid_" + (r.hasAttribute("data-uid") ? "present" : "missing")).info(t).track((n = {}, n.transition_name = "process_js_sdk_init_client", n.sdk_load_time = "number" == typeof o ? o.toString() : void 0, n.sdk_cache = t, n)).flush(),
                function() {
                    if (window.document.documentMode) try {
                        var e = window.status;
                        return window.status = "testIntranetMode", "testIntranetMode" === window.status && (window.status = e, !0)
                    } catch (e) {
                        return !1
                    }
                    return !1
                }() && e.warn("ie_intranet_mode")
        }))
    }

    function ot() {
        Fn(), rt()
    }

    function it(e) {
        void 0 === e && (e = window);
        var n = "__post_robot_10_0_42__";
        return e !== window ? e[n] : e[n] = e[n] || {}
    }
    var at = function() {
        return {}
    };

    function st(e, n) {
        return void 0 === e && (e = "store"), void 0 === n && (n = at), Me(it(), e, (function() {
            var e = n();
            return {
                has: function(n) {
                    return e.hasOwnProperty(n)
                },
                get: function(n, t) {
                    return e.hasOwnProperty(n) ? e[n] : t
                },
                set: function(n, t) {
                    return e[n] = t, t
                },
                del: function(n) {
                    delete e[n]
                },
                getOrSet: function(n, t) {
                    return Me(e, n, t)
                },
                reset: function() {
                    e = n()
                },
                keys: function() {
                    return Object.keys(e)
                }
            }
        }))
    }
    var ct, lt = function() {};

    function ut() {
        var e = it();
        return e.WINDOW_WILDCARD = e.WINDOW_WILDCARD || new lt, e.WINDOW_WILDCARD
    }

    function dt(e, n) {
        return void 0 === e && (e = "store"), void 0 === n && (n = at), st("windowStore").getOrSet(e, (function() {
            var t = new ee,
                r = function(e) {
                    return t.getOrSet(e, n)
                };
            return {
                has: function(n) {
                    return r(n).hasOwnProperty(e)
                },
                get: function(n, t) {
                    var o = r(n);
                    return o.hasOwnProperty(e) ? o[e] : t
                },
                set: function(n, t) {
                    return r(n)[e] = t, t
                },
                del: function(n) {
                    delete r(n)[e]
                },
                getOrSet: function(n, t) {
                    return Me(r(n), e, t)
                }
            }
        }))
    }

    function ft() {
        return st("instance").getOrSet("instanceID", ce)
    }

    function pt(e, n) {
        var t = n.domain,
            r = dt("helloPromises"),
            o = r.get(e);
        o && o.resolve({
            domain: t
        });
        var i = E.resolve({
            domain: t
        });
        return r.set(e, i), i
    }

    function mt(e, n) {
        return (0, n.send)(e, "postrobot_hello", {
            instanceID: ft()
        }, {
            domain: "*",
            timeout: -1
        }).then((function(n) {
            var t = n.origin,
                r = n.data.instanceID;
            return pt(e, {
                domain: t
            }), {
                win: e,
                domain: t,
                instanceID: r
            }
        }))
    }

    function ht(e, n) {
        var t = n.send;
        return dt("windowInstanceIDPromises").getOrSet(e, (function() {
            return mt(e, {
                send: t
            }).then((function(e) {
                return e.instanceID
            }))
        }))
    }

    function gt(e) {
        dt("knownWindows").set(e, !0)
    }

    function yt(e) {
        return "object" == typeof e && null !== e && "string" == typeof e.__type__
    }

    function wt(e) {
        return void 0 === e ? "undefined" : null === e ? "null" : Array.isArray(e) ? "array" : "function" == typeof e ? "function" : "object" == typeof e ? e instanceof Error ? "error" : "function" == typeof e.then ? "promise" : "[object RegExp]" === {}.toString.call(e) ? "regex" : "[object Date]" === {}.toString.call(e) ? "date" : "object" : "string" == typeof e ? "string" : "number" == typeof e ? "number" : "boolean" == typeof e ? "boolean" : void 0
    }

    function vt(e, n) {
        return {
            __type__: e,
            __val__: n
        }
    }
    var _t, xt = ((ct = {}).function = function() {}, ct.error = function(e) {
            return vt("error", {
                message: e.message,
                stack: e.stack,
                code: e.code,
                data: e.data
            })
        }, ct.promise = function() {}, ct.regex = function(e) {
            return vt("regex", e.source)
        }, ct.date = function(e) {
            return vt("date", e.toJSON())
        }, ct.array = function(e) {
            return e
        }, ct.object = function(e) {
            return e
        }, ct.string = function(e) {
            return e
        }, ct.number = function(e) {
            return e
        }, ct.boolean = function(e) {
            return e
        }, ct.null = function(e) {
            return e
        }, ct),
        bt = {},
        Et = ((_t = {}).function = function() {
            throw new Error("Function serialization is not implemented; nothing to deserialize")
        }, _t.error = function(e) {
            var n = e.stack,
                t = e.code,
                r = e.data,
                o = new Error(e.message);
            return o.code = t, r && (o.data = r), o.stack = n + "\n\n" + o.stack, o
        }, _t.promise = function() {
            throw new Error("Promise serialization is not implemented; nothing to deserialize")
        }, _t.regex = function(e) {
            return new RegExp(e)
        }, _t.date = function(e) {
            return new Date(e)
        }, _t.array = function(e) {
            return e
        }, _t.object = function(e) {
            return e
        }, _t.string = function(e) {
            return e
        }, _t.number = function(e) {
            return e
        }, _t.boolean = function(e) {
            return e
        }, _t.null = function(e) {
            return e
        }, _t),
        At = {};

    function Ct() {
        for (var e = st("idToProxyWindow"), n = 0, t = e.keys(); n < t.length; n++) {
            var r = t[n];
            e.get(r).shouldClean() && e.del(r)
        }
    }

    function Pt(e, n) {
        var t = n.send,
            r = n.id,
            o = void 0 === r ? ce() : r,
            i = e.then((function(e) {
                if (L(e)) return z(e).name
            })),
            a = e.then((function(e) {
                if (B(e)) throw new Error("Window is closed, can not determine type");
                return O(e) ? C.POPUP : C.IFRAME
            }));
        return i.catch(ye), a.catch(ye), {
            id: o,
            getType: function() {
                return a
            },
            getInstanceID: he((function() {
                return e.then((function(e) {
                    return ht(e, {
                        send: t
                    })
                }))
            })),
            close: function() {
                return e.then($)
            },
            getName: function() {
                return e.then((function(e) {
                    if (!B(e)) return L(e) ? z(e).name : i
                }))
            },
            focus: function() {
                return e.then((function(e) {
                    e.focus()
                }))
            },
            isClosed: function() {
                return e.then((function(e) {
                    return B(e)
                }))
            },
            setLocation: function(n) {
                return e.then((function(e) {
                    var t = window.location.protocol + "//" + window.location.host;
                    if (0 === n.indexOf("/")) n = "" + t + n;
                    else if (!n.match(/^https?:\/\//) && 0 !== n.indexOf(t)) throw new Error("Expected url to be http or https url, or absolute path, got " + JSON.stringify(n));
                    if (L(e)) try {
                        if (e.location && "function" == typeof e.location.replace) return void e.location.replace(n)
                    } catch (e) {}
                    e.location = n
                }))
            },
            setName: function(n) {
                return e.then((function(e) {
                    var t = L(e),
                        r = function(e) {
                            if (L(e)) return z(e).frameElement;
                            for (var n = 0, t = document.querySelectorAll("iframe"); n < t.length; n++) {
                                var r = t[n];
                                if (r && r.contentWindow && r.contentWindow === e) return r
                            }
                        }(e);
                    if (!t) throw new Error("Can not set name for cross-domain window: " + n);
                    z(e).name = n, r && r.setAttribute("name", n), i = E.resolve(n)
                }))
            }
        }
    }
    new E((function(e) {
        if (window.document && window.document.body) return e(window.document.body);
        var n = setInterval((function() {
            if (window.document && window.document.body) return clearInterval(n), e(window.document.body)
        }), 10)
    }));
    var St = function() {
        function e(e) {
            var n = e.send,
                t = e.win,
                r = e.serializedWindow;
            this.id = void 0, this.isProxyWindow = !0, this.serializedWindow = void 0, this.actualWindow = void 0, this.actualWindowPromise = void 0, this.send = void 0, this.name = void 0, this.actualWindowPromise = new E, this.serializedWindow = r || Pt(this.actualWindowPromise, {
                send: n
            }), st("idToProxyWindow").set(this.getID(), this), t && this.setWindow(t, {
                send: n
            })
        }
        var n = e.prototype;
        return n.getID = function() {
            return this.serializedWindow.id
        }, n.getType = function() {
            return this.serializedWindow.getType()
        }, n.isPopup = function() {
            return this.getType().then((function(e) {
                return e === C.POPUP
            }))
        }, n.setLocation = function(e) {
            var n = this;
            return this.serializedWindow.setLocation(e).then((function() {
                return n
            }))
        }, n.getName = function() {
            return this.serializedWindow.getName()
        }, n.setName = function(e) {
            var n = this;
            return this.serializedWindow.setName(e).then((function() {
                return n
            }))
        }, n.close = function() {
            var e = this;
            return this.serializedWindow.close().then((function() {
                return e
            }))
        }, n.focus = function() {
            var e = this,
                n = this.isPopup(),
                t = this.getName(),
                r = E.hash({
                    isPopup: n,
                    name: t
                }).then((function(e) {
                    var n = e.name;
                    e.isPopup && n && window.open("", n)
                })),
                o = this.serializedWindow.focus();
            return E.all([r, o]).then((function() {
                return e
            }))
        }, n.isClosed = function() {
            return this.serializedWindow.isClosed()
        }, n.getWindow = function() {
            return this.actualWindow
        }, n.setWindow = function(e, n) {
            var t = n.send;
            this.actualWindow = e, this.actualWindowPromise.resolve(this.actualWindow), this.serializedWindow = Pt(this.actualWindowPromise, {
                send: t,
                id: this.getID()
            }), dt("winToProxyWindow").set(e, this)
        }, n.awaitWindow = function() {
            return this.actualWindowPromise
        }, n.matchWindow = function(e, n) {
            var t = this,
                r = n.send;
            return E.try((function() {
                return t.actualWindow ? e === t.actualWindow : E.hash({
                    proxyInstanceID: t.getInstanceID(),
                    knownWindowInstanceID: ht(e, {
                        send: r
                    })
                }).then((function(n) {
                    var o = n.proxyInstanceID === n.knownWindowInstanceID;
                    return o && t.setWindow(e, {
                        send: r
                    }), o
                }))
            }))
        }, n.unwrap = function() {
            return this.actualWindow || this
        }, n.getInstanceID = function() {
            return this.serializedWindow.getInstanceID()
        }, n.shouldClean = function() {
            return Boolean(this.actualWindow && B(this.actualWindow))
        }, n.serialize = function() {
            return this.serializedWindow
        }, e.unwrap = function(n) {
            return e.isProxyWindow(n) ? n.unwrap() : n
        }, e.serialize = function(n, t) {
            var r = t.send;
            return Ct(), e.toProxyWindow(n, {
                send: r
            }).serialize()
        }, e.deserialize = function(n, t) {
            var r = t.send;
            return Ct(), st("idToProxyWindow").get(n.id) || new e({
                serializedWindow: n,
                send: r
            })
        }, e.isProxyWindow = function(e) {
            return Boolean(e && !Z(e) && e.isProxyWindow)
        }, e.toProxyWindow = function(n, t) {
            var r = t.send;
            if (Ct(), e.isProxyWindow(n)) return n;
            var o = n;
            return dt("winToProxyWindow").get(o) || new e({
                win: o,
                send: r
            })
        }, e
    }();

    function Rt(e, n, t, r, o) {
        var i = dt("methodStore"),
            a = st("proxyWindowMethods");
        St.isProxyWindow(r) ? a.set(e, {
            val: n,
            name: t,
            domain: o,
            source: r
        }) : (a.del(e), i.getOrSet(r, (function() {
            return {}
        }))[e] = {
            domain: o,
            name: t,
            val: n,
            source: r
        })
    }

    function Ot(e, n) {
        var t = dt("methodStore"),
            r = st("proxyWindowMethods");
        return t.getOrSet(e, (function() {
            return {}
        }))[n] || r.get(n)
    }

    function Tt(e, n, t, r, o) {
        var i, a, s;
        a = (i = {
            on: o.on,
            send: o.send
        }).on, s = i.send, st("builtinListeners").getOrSet("functionCalls", (function() {
            return a("postrobot_method", {
                domain: "*"
            }, (function(e) {
                var n = e.source,
                    t = e.origin,
                    r = e.data,
                    o = r.id,
                    i = r.name,
                    a = Ot(n, o);
                if (!a) throw new Error("Could not find method '" + i + "' with id: " + r.id + " in " + k(window));
                var c = a.source,
                    l = a.domain,
                    u = a.val;
                return E.try((function() {
                    if (!V(l, t)) throw new Error("Method '" + r.name + "' domain " + JSON.stringify(Ne(a.domain) ? a.domain.source : a.domain) + " does not match origin " + t + " in " + k(window));
                    if (St.isProxyWindow(c)) return c.matchWindow(n, {
                        send: s
                    }).then((function(e) {
                        if (!e) throw new Error("Method call '" + r.name + "' failed - proxy window does not match source in " + k(window))
                    }))
                })).then((function() {
                    return u.apply({
                        source: n,
                        origin: t
                    }, r.args)
                }), (function(e) {
                    return E.try((function() {
                        if (u.onError) return u.onError(e)
                    })).then((function() {
                        var n;
                        throw e.stack && (e.stack = "Remote call to " + i + "(" + (void 0 === (n = r.args) && (n = []), Te(n).map((function(e) {
                            return "string" == typeof e ? "'" + e + "'" : void 0 === e ? "undefined" : null === e ? "null" : "boolean" == typeof e ? e.toString() : Array.isArray(e) ? "[ ... ]" : "object" == typeof e ? "{ ... }" : "function" == typeof e ? "() => { ... }" : "<" + typeof e + ">"
                        })).join(", ") + ") failed\n\n") + e.stack), e
                    }))
                })).then((function(e) {
                    return {
                        result: e,
                        id: o,
                        name: i
                    }
                }))
            }))
        }));
        var c = t.__id__ || ce();
        e = St.unwrap(e);
        var l = t.__name__ || t.name || r;
        return "string" == typeof l && "function" == typeof l.indexOf && 0 === l.indexOf("anonymous::") && (l = l.replace("anonymous::", r + "::")), St.isProxyWindow(e) ? (Rt(c, t, l, e, n), e.awaitWindow().then((function(e) {
            Rt(c, t, l, e, n)
        }))) : Rt(c, t, l, e, n), vt("cross_domain_function", {
            id: c,
            name: l
        })
    }

    function It(e, n, t, r) {
        var o, i = r.on,
            a = r.send;
        return function(e, n) {
            void 0 === n && (n = bt);
            var t = JSON.stringify(e, (function(e) {
                var t = this[e];
                if (yt(this)) return t;
                var r = wt(t);
                if (!r) return t;
                var o = n[r] || xt[r];
                return o ? o(t, e) : t
            }));
            return void 0 === t ? "undefined" : t
        }(t, ((o = {}).promise = function(t, r) {
            return function(e, n, t, r, o) {
                return vt("cross_domain_zalgo_promise", {
                    then: Tt(e, n, (function(e, n) {
                        return t.then(e, n)
                    }), r, {
                        on: o.on,
                        send: o.send
                    })
                })
            }(e, n, t, r, {
                on: i,
                send: a
            })
        }, o.function = function(t, r) {
            return Tt(e, n, t, r, {
                on: i,
                send: a
            })
        }, o.object = function(e) {
            return Z(e) || St.isProxyWindow(e) ? vt("cross_domain_window", St.serialize(e, {
                send: a
            })) : e
        }, o))
    }

    function kt(e, n, t, r) {
        var o, i = r.send;
        return function(e, n) {
            if (void 0 === n && (n = At), "undefined" !== e) return JSON.parse(e, (function(e, t) {
                if (yt(this)) return t;
                var r, o;
                if (yt(t) ? (r = t.__type__, o = t.__val__) : (r = wt(t), o = t), !r) return o;
                var i = n[r] || Et[r];
                return i ? i(o, e) : o
            }))
        }(t, ((o = {}).cross_domain_zalgo_promise = function(e) {
            return function(e, n, t) {
                return new E(t.then)
            }(0, 0, e)
        }, o.cross_domain_function = function(t) {
            return function(e, n, t, r) {
                var o = t.id,
                    i = t.name,
                    a = r.send,
                    s = function(t) {
                        function r() {
                            var s = arguments;
                            return St.toProxyWindow(e, {
                                send: a
                            }).awaitWindow().then((function(e) {
                                var c = Ot(e, o);
                                if (c && c.val !== r) return c.val.apply({
                                    source: window,
                                    origin: k()
                                }, s);
                                var l = [].slice.call(s);
                                return t.fireAndForget ? a(e, "postrobot_method", {
                                    id: o,
                                    name: i,
                                    args: l
                                }, {
                                    domain: n,
                                    fireAndForget: !0
                                }) : a(e, "postrobot_method", {
                                    id: o,
                                    name: i,
                                    args: l
                                }, {
                                    domain: n,
                                    fireAndForget: !1
                                }).then((function(e) {
                                    return e.data.result
                                }))
                            })).catch((function(e) {
                                throw e
                            }))
                        }
                        return void 0 === t && (t = {}), r.__name__ = i, r.__origin__ = n, r.__source__ = e, r.__id__ = o, r.origin = n, r
                    },
                    c = s();
                return c.fireAndForget = s({
                    fireAndForget: !0
                }), c
            }(e, n, t, {
                send: i
            })
        }, o.cross_domain_window = function(e) {
            return St.deserialize(e, {
                send: i
            })
        }, o))
    }
    var Lt = {};

    function zt(e, n, t, r) {
        var o = r.on,
            i = r.send;
        return E.try((function() {
            var r = dt().getOrSet(e, (function() {
                return {}
            }));
            return r.buffer = r.buffer || [], r.buffer.push(t), r.flush = r.flush || E.flush().then((function() {
                if (B(e)) throw new Error("Window is closed");
                var t, a = It(e, n, ((t = {}).__post_robot_10_0_42__ = r.buffer || [], t), {
                    on: o,
                    send: i
                });
                delete r.buffer;
                for (var s = Object.keys(Lt), c = [], l = 0; l < s.length; l++) {
                    var u = s[l];
                    try {
                        Lt[u](e, a, n)
                    } catch (e) {
                        c.push(e)
                    }
                }
                if (c.length === s.length) throw new Error("All post-robot messaging strategies failed:\n\n" + c.map((function(e, n) {
                    return n + ". " + ve(e)
                })).join("\n\n"))
            })), r.flush.then((function() {
                delete r.flush
            }))
        })).then(ye)
    }

    function Nt(e) {
        return st("responseListeners").get(e)
    }

    function Mt(e) {
        st("responseListeners").del(e)
    }

    function Ft(e) {
        return st("erroredResponseListeners").has(e)
    }

    function jt(e) {
        var n = e.name,
            t = e.win,
            r = e.domain,
            o = dt("requestListeners");
        if ("*" === t && (t = null), "*" === r && (r = null), !n) throw new Error("Name required to get request listener");
        for (var i = 0, a = [t, ut()]; i < a.length; i++) {
            var s = a[i];
            if (s) {
                var c = o.get(s);
                if (c) {
                    var l = c[n];
                    if (l) {
                        if (r && "string" == typeof r) {
                            if (l[r]) return l[r];
                            if (l.__domain_regex__)
                                for (var u = 0, d = l.__domain_regex__; u < d.length; u++) {
                                    var f = d[u],
                                        p = f.listener;
                                    if (V(f.regex, r)) return p
                                }
                        }
                        if (l["*"]) return l["*"]
                    }
                }
            }
        }
    }

    function Wt(e, n, t, r) {
        var o = r.on,
            i = r.send,
            a = jt({
                name: t.name,
                win: e,
                domain: n
            }),
            s = "postrobot_method" === t.name && t.data && "string" == typeof t.data.name ? t.data.name + "()" : t.name;

        function c(r, a, c) {
            return E.flush().then((function() {
                if (!t.fireAndForget && !B(e)) try {
                    return zt(e, n, {
                        id: ce(),
                        origin: k(window),
                        type: "postrobot_message_response",
                        hash: t.hash,
                        name: t.name,
                        ack: r,
                        data: a,
                        error: c
                    }, {
                        on: o,
                        send: i
                    })
                } catch (e) {
                    throw new Error("Send response message failed for " + s + " in " + k() + "\n\n" + ve(e))
                }
            }))
        }
        return E.all([E.flush().then((function() {
            if (!t.fireAndForget && !B(e)) try {
                return zt(e, n, {
                    id: ce(),
                    origin: k(window),
                    type: "postrobot_message_ack",
                    hash: t.hash,
                    name: t.name
                }, {
                    on: o,
                    send: i
                })
            } catch (e) {
                throw new Error("Send ack message failed for " + s + " in " + k() + "\n\n" + ve(e))
            }
        })), E.try((function() {
            if (!a) throw new Error("No handler found for post message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!V(a.domain, n)) throw new Error("Request origin " + n + " does not match domain " + a.domain.toString());
            return a.handler({
                source: e,
                origin: n,
                data: t.data
            })
        })).then((function(e) {
            return c("success", e)
        }), (function(e) {
            return c("error", null, e)
        }))]).then(ye).catch((function(e) {
            if (a && a.handleError) return a.handleError(e);
            throw e
        }))
    }

    function Dt(e, n, t) {
        if (!Ft(t.hash)) {
            var r = Nt(t.hash);
            if (!r) throw new Error("No handler found for post message ack for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            try {
                if (!V(r.domain, n)) throw new Error("Ack origin " + n + " does not match domain " + r.domain.toString());
                if (e !== r.win) throw new Error("Ack source does not match registered window")
            } catch (e) {
                r.promise.reject(e)
            }
            r.ack = !0
        }
    }

    function qt(e, n, t) {
        if (!Ft(t.hash)) {
            var r, o = Nt(t.hash);
            if (!o) throw new Error("No handler found for post message response for message: " + t.name + " from " + n + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
            if (!V(o.domain, n)) throw new Error("Response origin " + n + " does not match domain " + (r = o.domain, Array.isArray(r) ? "(" + r.join(" | ") + ")" : A(r) ? "RegExp(" + r.toString() : r.toString()));
            if (e !== o.win) throw new Error("Response source does not match registered window");
            Mt(t.hash), "error" === t.ack ? o.promise.reject(t.error) : "success" === t.ack && o.promise.resolve({
                source: e,
                origin: n,
                data: t.data
            })
        }
    }

    function Bt(e, n) {
        var t = n.on,
            r = n.send,
            o = st("receivedMessages");
        try {
            if (!window || window.closed || !e.source) return
        } catch (e) {
            return
        }
        var i = e.source,
            a = e.origin,
            s = function(e, n, t, r) {
                var o, i = r.on,
                    a = r.send;
                try {
                    o = kt(n, t, e, {
                        on: i,
                        send: a
                    })
                } catch (e) {
                    return
                }
                if (o && "object" == typeof o && null !== o) {
                    var s = o.__post_robot_10_0_42__;
                    if (Array.isArray(s)) return s
                }
            }(e.data, i, a, {
                on: t,
                send: r
            });
        if (s) {
            gt(i);
            for (var c = 0; c < s.length; c++) {
                var l = s[c];
                if (o.has(l.id)) return;
                if (o.set(l.id, !0), B(i) && !l.fireAndForget) return;
                0 === l.origin.indexOf("file:") && (a = "file://");
                try {
                    "postrobot_message_request" === l.type ? Wt(i, a, l, {
                        on: t,
                        send: r
                    }) : "postrobot_message_response" === l.type ? qt(i, a, l) : "postrobot_message_ack" === l.type && Dt(i, a, l)
                } catch (e) {
                    setTimeout((function() {
                        throw e
                    }), 0)
                }
            }
        }
    }

    function Ht(e, n, t) {
        if (!e) throw new Error("Expected name");
        if ("function" == typeof(n = n || {}) && (t = n, n = {}), !t) throw new Error("Expected handler");
        (n = n || {}).name = e, n.handler = t || n.handler;
        var r = n.window,
            o = n.domain,
            i = function e(n, t) {
                var r = n.name,
                    o = n.win,
                    i = n.domain,
                    a = dt("requestListeners");
                if (!r || "string" != typeof r) throw new Error("Name required to add request listener");
                if (Array.isArray(o)) {
                    for (var s = [], c = 0, l = o; c < l.length; c++) s.push(e({
                        name: r,
                        domain: i,
                        win: l[c]
                    }, t));
                    return {
                        cancel: function() {
                            for (var e = 0; e < s.length; e++) s[e].cancel()
                        }
                    }
                }
                if (Array.isArray(i)) {
                    for (var u = [], d = 0, f = i; d < f.length; d++) u.push(e({
                        name: r,
                        win: o,
                        domain: f[d]
                    }, t));
                    return {
                        cancel: function() {
                            for (var e = 0; e < u.length; e++) u[e].cancel()
                        }
                    }
                }
                var p = jt({
                    name: r,
                    win: o,
                    domain: i
                });
                if (o && "*" !== o || (o = ut()), i = i || "*", p) throw o && i ? new Error("Request listener already exists for " + r + " on domain " + i.toString() + " for " + (o === ut() ? "wildcard" : "specified") + " window") : o ? new Error("Request listener already exists for " + r + " for " + (o === ut() ? "wildcard" : "specified") + " window") : i ? new Error("Request listener already exists for " + r + " on domain " + i.toString()) : new Error("Request listener already exists for " + r);
                var m, h, g = a.getOrSet(o, (function() {
                        return {}
                    })),
                    y = Me(g, r, (function() {
                        return {}
                    })),
                    w = i.toString();
                return Ne(i) ? (m = Me(y, "__domain_regex__", (function() {
                    return []
                }))).push(h = {
                    regex: i,
                    listener: t
                }) : y[w] = t, {
                    cancel: function() {
                        delete y[w], h && (m.splice(m.indexOf(h, 1)), m.length || delete y.__domain_regex__), Object.keys(y).length || delete g[r], o && !Object.keys(g).length && a.del(o)
                    }
                }
            }({
                name: e,
                win: r,
                domain: o
            }, {
                handler: n.handler,
                handleError: n.errorHandler || function(e) {
                    throw e
                },
                window: r,
                domain: o || "*",
                name: e
            });
        return {
            cancel: function() {
                i.cancel()
            }
        }
    }

    function Gt(e, n, t) {
        "function" == typeof(n = n || {}) && (t = n, n = {});
        var r, o = new E;
        return n.errorHandler = function(e) {
            r.cancel(), o.reject(e)
        }, r = Ht(e, n, (function(e) {
            if (r.cancel(), o.resolve(e), t) return t(e)
        })), o.cancel = r.cancel, o
    }
    Lt.postrobot_post_message = function(e, n, t) {
        0 === t.indexOf("file:") && (t = "*"), e.postMessage(n, t)
    }, Lt.postrobot_global = function(e, n) {
        if (! function(e) {
                return (e = e || window).navigator.mockUserAgent || e.navigator.userAgent
            }(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i)) throw new Error("Global messaging not needed for browser");
        if (!L(e)) throw new Error("Post message through global disabled between different domain windows");
        if (!1 !== Y(window, e)) throw new Error("Can only use global to communicate between two different windows, not between frames");
        var t = it(e);
        if (!t) throw new Error("Can not find postRobot global on foreign window");
        t.receiveMessage({
            source: window,
            origin: k(),
            data: n
        })
    };
    var Ut = function e(n, t, r, o) {
        var i = (o = o || {}).domain || "*",
            a = o.timeout || -1,
            s = o.timeout || 5e3,
            c = o.fireAndForget || !1;
        return E.try((function() {
            if (function(e, n, t) {
                    if (!e) throw new Error("Expected name");
                    if (t && "string" != typeof t && !Array.isArray(t) && !Ne(t)) throw new TypeError("Can not send " + e + ". Expected domain " + JSON.stringify(t) + " to be a string, array, or regex");
                    if (B(n)) throw new Error("Can not send " + e + ". Target window is closed")
                }(t, n, i), function(e, n) {
                    var t = H(n);
                    if (t) return t === e;
                    if (n === e) return !1;
                    if (j(n) === n) return !1;
                    for (var r = 0, o = M(e); r < o.length; r++)
                        if (o[r] === n) return !0;
                    return !1
                }(window, n)) return function(e, n, t) {
                void 0 === n && (n = 5e3), void 0 === t && (t = "Window");
                var r = function(e) {
                    return dt("helloPromises").getOrSet(e, (function() {
                        return new E
                    }))
                }(e);
                return -1 !== n && (r = r.timeout(n, new Error(t + " did not load after " + n + "ms"))), r
            }(n, s)
        })).then((function(t) {
            return function(e, n, t, r) {
                var o = r.send;
                return E.try((function() {
                    return "string" == typeof n ? n : E.try((function() {
                        return t || mt(e, {
                            send: o
                        }).then((function(e) {
                            return e.domain
                        }))
                    })).then((function(e) {
                        if (!V(n, n)) throw new Error("Domain " + xe(n) + " does not match " + xe(n));
                        return e
                    }))
                }))
            }(n, i, (void 0 === t ? {} : t).domain, {
                send: e
            })
        })).then((function(o) {
            var i = o,
                s = "postrobot_method" === t && r && "string" == typeof r.name ? r.name + "()" : t,
                l = new E,
                u = t + "_" + ce();
            if (!c) {
                var d = {
                    name: t,
                    win: n,
                    domain: i,
                    promise: l
                };
                ! function(e, n) {
                    st("responseListeners").set(e, n)
                }(u, d);
                var f = dt("requestPromises").getOrSet(n, (function() {
                    return []
                }));
                f.push(l), l.catch((function() {
                    ! function(e) {
                        st("erroredResponseListeners").set(e, !0)
                    }(u), Mt(u)
                }));
                var p = function(e) {
                        return dt("knownWindows").get(e, !1)
                    }(n) ? 1e4 : 2e3,
                    m = a,
                    h = p,
                    g = m,
                    y = Se((function() {
                        return B(n) ? l.reject(new Error("Window closed for " + t + " before " + (d.ack ? "response" : "ack"))) : d.cancelled ? l.reject(new Error("Response listener was cancelled for " + t)) : (h = Math.max(h - 500, 0), -1 !== g && (g = Math.max(g - 500, 0)), d.ack || 0 !== h ? 0 === g ? l.reject(new Error("No response for postMessage " + s + " in " + k() + " in " + m + "ms")) : void 0 : l.reject(new Error("No ack for postMessage " + s + " in " + k() + " in " + p + "ms")))
                    }), 500);
                l.finally((function() {
                    y.cancel(), f.splice(f.indexOf(l, 1))
                })).catch(ye)
            }
            return zt(n, i, {
                id: ce(),
                origin: k(window),
                type: "postrobot_message_request",
                hash: u,
                name: t,
                data: r,
                fireAndForget: c
            }, {
                on: Ht,
                send: e
            }).then((function() {
                return c ? l.resolve() : l
            }), (function(e) {
                throw new Error("Send request message failed for " + s + " in " + k() + "\n\n" + ve(e))
            }))
        }))
    };

    function Yt(e, n, t) {
        return It(e, n, t, {
            on: Ht,
            send: Ut
        })
    }

    function Vt(e, n, t) {
        return kt(e, n, t, {
            on: Ht,
            send: Ut
        })
    }

    function Kt(e) {
        return new St({
            send: Ut,
            win: e
        })
    }

    function Jt(e) {
        return St.toProxyWindow(e, {
            send: Ut
        })
    }

    function Zt() {
        var e, n, t;
        it().initialized || (it().initialized = !0, function(e) {
            var n = e.on,
                t = e.send,
                r = it();
            r.receiveMessage = r.receiveMessage || function(e) {
                return Bt(e, {
                    on: n,
                    send: t
                })
            }
        }({
            on: Ht,
            send: Ut
        }), n = (e = {
            on: Ht,
            send: Ut
        }).on, t = e.send, st().getOrSet("postMessageListener", (function() {
            return sn(window, "message", (function(e) {
                ! function(e, n) {
                    var t = n.on,
                        r = n.send;
                    E.try((function() {
                        var n = e.source || e.sourceElement,
                            o = e.origin || e.originalEvent && e.originalEvent.origin,
                            i = e.data;
                        if ("null" === o && (o = "file://"), n) {
                            if (!o) throw new Error("Post message did not have origin domain");
                            Bt({
                                source: n,
                                origin: o,
                                data: i
                            }, {
                                on: t,
                                send: r
                            })
                        }
                    }))
                }(e, {
                    on: n,
                    send: t
                })
            }))
        })), function(e) {
            var n = e.on,
                t = e.send;
            st("builtinListeners").getOrSet("helloListener", (function() {
                var e = n("postrobot_hello", {
                        domain: "*"
                    }, (function(e) {
                        return pt(e.source, {
                            domain: e.origin
                        }), {
                            instanceID: ft()
                        }
                    })),
                    r = H();
                return r && mt(r, {
                    send: t
                }).catch((function(e) {})), e
            }))
        }({
            on: Ht,
            send: Ut
        }))
    }

    function $t() {
        var e;
        ! function() {
            for (var e = st("responseListeners"), n = 0, t = e.keys(); n < t.length; n++) {
                var r = t[n],
                    o = e.get(r);
                o && (o.cancelled = !0), e.del(r)
            }
        }(), (e = st().get("postMessageListener")) && e.cancel(), delete window.__post_robot_10_0_42__
    }
    var Xt = !0;

    function Qt(e) {
        for (var n = 0, t = dt("requestPromises").get(e, []); n < t.length; n++) t[n].reject(new Error("Window " + (B(e) ? "closed" : "cleaned up") + " before response")).catch(ye)
    }

    function er(e, n) {
        for (var t = [], r = 0; r < e.length; r++) {
            var o = e[r].render(n);
            if (o)
                if (Array.isArray(o))
                    for (var i = 0; i < o.length; i++) {
                        var a = o[i];
                        a && t.push(a)
                    } else t.push(o)
        }
        return t
    }
    Zt();
    var nr = function() {
            function e(e, n, t) {
                this.type = "element", this.name = void 0, this.props = void 0, this.children = void 0, this.onRender = void 0, this.name = e, this.props = n || {}, this.children = t;
                var r = this.props.onRender;
                "function" == typeof r && (this.onRender = r, delete n.onRender)
            }
            var n = e.prototype;
            return n.render = function(e) {
                var n = e(this);
                return this.onRender && this.onRender(n), n
            }, n.renderChildren = function(e) {
                return er(this.children, e)
            }, e
        }(),
        tr = function() {
            function e(e) {
                this.type = "fragment", this.children = void 0, this.children = e
            }
            return e.prototype.render = function(e) {
                return er(this.children, e)
            }, e
        }(),
        rr = function() {
            function e(e) {
                this.type = "text", this.text = void 0, this.text = e
            }
            return e.prototype.render = function(e) {
                return e(this)
            }, e
        }(),
        or = function() {
            function e(e, n, t) {
                this.type = "component", this.component = void 0, this.props = void 0, this.children = void 0, this.component = e, this.props = n || {}, this.children = t, this.props.children = t
            }
            var n = e.prototype;
            return n.renderComponent = function(e) {
                var n = function(e) {
                    var n = ir(Array.isArray(e) ? e : [e]);
                    return 1 === n.length ? n[0] : n.length > 1 ? new tr(n) : void 0
                }(this.component(this.props, this.children));
                if (n) return n.render(e)
            }, n.render = function(e) {
                return e(this)
            }, n.renderChildren = function(e) {
                return er(this.children, e)
            }, e
        }();

    function ir(e) {
        for (var n = [], t = 0; t < e.length; t++) {
            var r = e[t];
            if (r)
                if ("string" == typeof r || "number" == typeof r) n.push(new rr(r.toString()));
                else {
                    if ("boolean" == typeof r) continue;
                    if (Array.isArray(r))
                        for (var o = 0, i = ir(r); o < i.length; o++) n.push(i[o]);
                    else {
                        if (!r || "element" !== r.type && "text" !== r.type && "component" !== r.type) throw new TypeError("Unrecognized node type: " + typeof r);
                        n.push(r)
                    }
                }
        }
        return n
    }
    var ar, sr = function(e, n) {
            for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) r[o - 2] = arguments[o];
            if (r = ir(r), "string" == typeof e) return new nr(e, n, r);
            if ("function" == typeof e) return new or(e, n, r);
            throw new TypeError("Expected jsx element to be a string or a function")
        },
        cr = ((ar = {}).iframe = function(e, n) {
            var t = n.children[0];
            if (1 !== n.children.length || !t || "element" !== t.type || "html" !== t.name) throw new Error("Expected only single html element node as child of iframe element");
            e.addEventListener("load", (function() {
                var n = e.contentWindow;
                if (!n) throw new Error("Expected frame to have contentWindow");
                for (var r = n.document, o = r.documentElement; o.children && o.children.length;) o.removeChild(o.children[0]);
                for (var i = t.render(lr({
                        doc: r
                    })); i.children.length;) o.appendChild(i.children[0])
            }))
        }, ar.script = function(e, n) {
            var t = n.children[0];
            if (1 !== n.children.length || !t || "text" !== t.type) throw new Error("Expected only single text node as child of script element");
            e.text = t.text
        }, ar.default = function(e, n, t) {
            for (var r = 0, o = n.renderChildren(t); r < o.length; r++) e.appendChild(o[r])
        }, ar);

    function lr(e) {
        void 0 === e && (e = {});
        var n = e.doc,
            t = void 0 === n ? document : n;
        return function e(n) {
            if ("component" === n.type) return n.renderComponent(e);
            if ("text" === n.type) return function(e, n) {
                return e.createTextNode(n.text)
            }(t, n);
            if ("element" === n.type) {
                var r = function(e, n) {
                    return n.props.el ? n.props.el : e.createElement(n.name)
                }(t, n);
                return function(e, n) {
                        for (var t = n.props, r = 0, o = Object.keys(t); r < o.length; r++) {
                            var i = o[r],
                                a = t[i];
                            null != a && "el" !== i && "innerHTML" !== i && (i.match(/^on[A-Z][a-z]/) && "function" == typeof a ? e.addEventListener(i.slice(2).toLowerCase(), a) : "string" == typeof a || "number" == typeof a ? e.setAttribute(i, a.toString()) : "boolean" == typeof a && !0 === a && e.setAttribute(i, ""))
                        }
                        "iframe" !== e.tagName.toLowerCase() || t.id || e.setAttribute("id", "jsx-iframe-" + "xxxxxxxxxx".replace(/./g, (function() {
                            return "0123456789abcdef".charAt(Math.floor(Math.random() * "0123456789abcdef".length))
                        })))
                    }(r, n),
                    function(e, n, t, r) {
                        if (n.props.hasOwnProperty("innerHTML")) {
                            if (n.children.length) throw new Error("Expected no children to be passed when innerHTML prop is set");
                            var o = n.props.innerHTML;
                            if ("string" != typeof o) throw new TypeError("innerHTML prop must be string");
                            "script" === n.name ? e.text = o : (e.innerHTML = o, function(e, n) {
                                void 0 === n && (n = window.document);
                                for (var t = 0, r = e.querySelectorAll("script"); t < r.length; t++) {
                                    var o = r[t],
                                        i = o.parentNode;
                                    if (i) {
                                        var a = n.createElement("script");
                                        a.text = o.textContent, i.replaceChild(a, o)
                                    }
                                }
                            }(e, t))
                        } else(cr[n.name] || cr.default)(e, n, r)
                    }(r, n, t, e), r
            }
            throw new TypeError("Unhandleable node")
        }
    }
    var ur = {
        br: !0
    };

    function dr(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;")
    }

    function fr(e) {
        if (void 0 === e && (e = window), !L(e)) throw new Error("Can not get global for window on different domain");
        return e.__zoid_9_0_63__ || (e.__zoid_9_0_63__ = {}), e.__zoid_9_0_63__
    }

    function pr(e) {
        return {
            get: function() {
                var n = this;
                return E.try((function() {
                    if (n.source && n.source !== window) throw new Error("Can not call get on proxy object from a remote window");
                    return e
                }))
            }
        }
    }
    var mr = C;

    function hr(e, n, t, r, o) {
        if (!e.hasOwnProperty(t)) return r;
        var i = e[t];
        return "function" == typeof i.childDecorate ? i.childDecorate({
            value: r,
            uid: o.uid,
            close: o.close,
            focus: o.focus,
            onError: o.onError,
            onProps: o.onProps,
            resize: o.resize,
            getParent: o.getParent,
            getParentDomain: o.getParentDomain,
            show: o.show,
            hide: o.hide
        }) : r
    }

    function gr(e) {
        return ge(gr, (function() {
            if (!e) throw new Error("No window name");
            var n = e.split("__"),
                t = n[1],
                r = n[2],
                o = n[3];
            if ("zoid" !== t) throw new Error("Window not rendered by zoid - got " + t);
            if (!r) throw new Error("Expected component name");
            if (!o) throw new Error("Expected encoded payload");
            try {
                return JSON.parse(function(e) {
                    if ("function" == typeof atob) return decodeURIComponent([].map.call(atob(e), (function(e) {
                        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                    })).join(""));
                    if ("undefined" != typeof Buffer) return Buffer.from(e, "base64").toString("utf8");
                    throw new Error("Can not find window.atob or Buffer")
                }(o))
            } catch (e) {
                throw new Error("Can not decode window name payload: " + o + ": " + ve(e))
            }
        }), [e])
    }

    function yr() {
        try {
            return gr(window.name)
        } catch (e) {}
    }

    function wr() {
        return E.try((function() {
            window.focus()
        }))
    }

    function vr() {
        return E.try((function() {
            window.close()
        }))
    }

    function _r(e, n, t) {
        return E.try((function() {
            return "function" == typeof e.queryParam ? e.queryParam({
                value: t
            }) : "string" == typeof e.queryParam ? e.queryParam : n
        }))
    }

    function xr(e, n, t) {
        return E.try((function() {
            return "function" == typeof e.queryValue && ze(t) ? e.queryValue({
                value: t
            }) : t
        }))
    }

    function br(e, n, t) {
        void 0 === n && (n = {}), void 0 === t && (t = window);
        var r, o, i, a = e.propsDef,
            s = e.containerTemplate,
            c = e.prerenderTemplate,
            l = e.tag,
            u = e.name,
            d = e.attributes,
            f = e.dimensions,
            p = e.autoResize,
            h = e.url,
            g = e.domain,
            y = new E,
            w = [],
            v = Fe(),
            _ = {},
            x = {
                visible: !0
            },
            b = n.event ? n.event : Re(),
            A = n.props ? n.props : {},
            C = n.onError,
            P = n.getProxyContainer,
            S = n.show,
            R = n.hide,
            O = n.close,
            T = n.renderContainer,
            I = n.getProxyWindow,
            N = n.setProxyWin,
            M = n.openFrame,
            F = n.openPrerenderFrame,
            j = n.prerender,
            W = n.open,
            D = n.openPrerender,
            q = n.watchForUnload,
            H = n.getInternalState,
            G = n.setInternalState,
            Z = function(e) {
                for (var n = {}, t = 0, r = Object.keys(A); t < r.length; t++) {
                    var o = r[t],
                        i = a[o];
                    i && !1 === i.sendToChild || i && i.sameDomain && !V(e, k(window)) || (n[o] = A[o])
                }
                return E.hash(n)
            },
            X = function() {
                return E.try((function() {
                    return H ? H() : x
                }))
            },
            Q = function(e) {
                return E.try((function() {
                    return G ? G(e) : x = m({}, x, e)
                }))
            },
            ee = function() {
                return I ? I() : E.try((function() {
                    var e = A.window;
                    if (e) {
                        var n = Jt(e);
                        return v.register((function() {
                            return e.close()
                        })), n
                    }
                    return new St({
                        send: Ut
                    })
                }))
            },
            ne = function(e) {
                return P ? P(e) : E.try((function() {
                    return en(e)
                })).then((function(e) {
                    return wn(e) && (e = function(e) {
                        var n = function(e) {
                            var n = function(e) {
                                for (; e.parentNode;) e = e.parentNode;
                                if (wn(e)) return e
                            }(e);
                            if (n.host) return n.host
                        }(e);
                        if (!n) throw new Error("Element is not in shadow dom");
                        if (wn(n)) throw new Error("Host element is also in shadow dom");
                        var t = "shadow-slot-" + ce(),
                            r = document.createElement("slot");
                        r.setAttribute("name", t), e.appendChild(r);
                        var o = document.createElement("div");
                        return o.setAttribute("slot", t), n.appendChild(o), o
                    }(e)), pr(e)
                }))
            },
            te = function(e) {
                return N ? N(e) : E.try((function() {
                    r = e
                }))
            },
            re = function() {
                return S ? S() : E.hash({
                    setState: Q({
                        visible: !0
                    }),
                    showElement: o ? o.get().then(pn) : null
                }).then(ye)
            },
            oe = function() {
                return R ? R() : E.hash({
                    setState: Q({
                        visible: !1
                    }),
                    showElement: o ? o.get().then(mn) : null
                }).then(ye)
            },
            ie = function() {
                return "function" == typeof h ? h({
                    props: A
                }) : h
            },
            ae = function() {
                return "function" == typeof d ? d({
                    props: A
                }) : d
            },
            le = function() {
                return g && "string" == typeof g ? g : K(ie())
            },
            ue = function() {
                return g && Ne(g) ? g : le()
            },
            de = function(e, n) {
                var t = n.windowName;
                return M ? M(e, {
                    windowName: t
                }) : E.try((function() {
                    if (e === mr.IFRAME) return pr(an({
                        attributes: m({
                            name: t,
                            title: u
                        }, ae().iframe)
                    }))
                }))
            },
            fe = function(e) {
                return F ? F(e) : E.try((function() {
                    if (e === mr.IFRAME) return pr(an({
                        attributes: m({
                            name: "__zoid_prerender_frame__" + u + "_" + ce() + "__",
                            title: "prerender__" + u
                        }, ae().iframe)
                    }))
                }))
            },
            pe = function(e, n, t) {
                return D ? D(e, n, t) : E.try((function() {
                    if (e === mr.IFRAME) {
                        if (!t) throw new Error("Expected proxy frame to be passed");
                        return t.get().then((function(e) {
                            return v.register((function() {
                                return hn(e)
                            })), on(e).then((function(e) {
                                return z(e)
                            })).then((function(e) {
                                return Jt(e)
                            }))
                        }))
                    }
                    if (e === mr.POPUP) return n;
                    throw new Error("No render context available for " + e)
                }))
            },
            he = function() {
                return E.try((function() {
                    if (r) return E.all([b.trigger("zoid-focus"), r.focus()]).then(ye)
                }))
            },
            ge = function(e, n, t, r) {
                if (n === k(window)) {
                    var o = fr(window);
                    return o.windows = o.windows || {}, o.windows[t] = window, v.register((function() {
                        delete o.windows[t]
                    })), {
                        type: "global",
                        uid: t
                    }
                }
                return r === mr.POPUP ? {
                    type: "opener"
                } : {
                    type: "parent",
                    distance: U(window)
                }
            },
            _e = function(e) {
                return E.try((function() {
                    i = e, y.resolve(), v.register((function() {
                        return e.close.fireAndForget().catch(ye)
                    }))
                }))
            },
            Ee = function(e) {
                var n = e.width,
                    t = e.height;
                return E.try((function() {
                    b.trigger("zoid-resize", {
                        width: n,
                        height: t
                    })
                }))
            },
            Ae = function(e) {
                return E.try((function() {
                    return b.trigger("zoid-destroy")
                })).catch(ye).then((function() {
                    return v.all(e)
                })).then((function() {
                    y.asyncReject(e || new Error("Component destroyed"))
                }))
            },
            Ce = me((function(e) {
                return E.try((function() {
                    if (O) {
                        if (B(O.__source__)) return;
                        return O()
                    }
                    return E.try((function() {
                        return b.trigger("zoid-close")
                    })).then((function() {
                        return Ae(e || new Error("Component closed"))
                    }))
                }))
            })),
            Pe = function(e, n) {
                var t = n.proxyWin,
                    r = n.proxyFrame,
                    o = n.windowName;
                return W ? W(e, {
                    proxyWin: t,
                    proxyFrame: r,
                    windowName: o
                }) : E.try((function() {
                    if (e === mr.IFRAME) {
                        if (!r) throw new Error("Expected proxy frame to be passed");
                        return r.get().then((function(e) {
                            return on(e).then((function(n) {
                                return v.register((function() {
                                    return hn(e)
                                })), v.register((function() {
                                    return Qt(n)
                                })), n
                            }))
                        }))
                    }
                    if (e === mr.POPUP) {
                        var n = f.width,
                            t = f.height;
                        n = Tn(n, window.outerWidth), t = Tn(t, window.outerWidth);
                        var i = function(e, n) {
                            var t = (n = n || {}).width,
                                r = n.height,
                                o = 0,
                                i = 0;
                            t && (window.outerWidth ? i = Math.round((window.outerWidth - t) / 2) + window.screenX : window.screen.width && (i = Math.round((window.screen.width - t) / 2))), r && (window.outerHeight ? o = Math.round((window.outerHeight - r) / 2) + window.screenY : window.screen.height && (o = Math.round((window.screen.height - r) / 2))), t && r && (n = m({
                                top: o,
                                left: i,
                                width: t,
                                height: r,
                                status: 1,
                                toolbar: 0,
                                menubar: 0,
                                resizable: 1,
                                scrollbars: 1
                            }, n));
                            var a = n.name || "";
                            delete n.name;
                            var s, c, l = Object.keys(n).map((function(e) {
                                if (null != n[e]) return e + "=" + xe(n[e])
                            })).filter(Boolean).join(",");
                            try {
                                s = window.open("", a, l, !0)
                            } catch (c) {
                                throw new tn("Can not open popup window - " + (c.stack || c.message))
                            }
                            if (B(s)) throw new tn("Can not open popup window - blocked");
                            return window.addEventListener("unload", (function() {
                                return s.close()
                            })), s
                        }(0, m({
                            name: o,
                            width: n,
                            height: t
                        }, ae().popup));
                        return v.register((function() {
                            return $(i)
                        })), v.register((function() {
                            return Qt(i)
                        })), i
                    }
                    throw new Error("No render context available for " + e)
                })).then((function(e) {
                    return t.setWindow(e, {
                        send: Ut
                    }), t
                }))
            },
            Oe = function() {
                return E.try((function() {
                    var e = sn(window, "unload", we((function() {
                            Ae(new Error("Window navigated away"))
                        }))),
                        n = J(t, Ae, 3e3);
                    if (v.register(n.cancel), v.register(e.cancel), q) return q()
                }))
            },
            Ie = function(e) {
                var n = !1;
                return e.isClosed().then((function(t) {
                    return t ? (n = !0, Ce(new Error("Detected component window close"))) : E.delay(200).then((function() {
                        return e.isClosed()
                    })).then((function(e) {
                        if (e) return n = !0, Ce(new Error("Detected component window close"))
                    }))
                })).then((function() {
                    return n
                }))
            },
            ke = function(e) {
                return C ? C(e) : E.try((function() {
                    if (-1 === w.indexOf(e)) return w.push(e), y.asyncReject(e), b.trigger("zoid-error", e)
                }))
            };
        _e.onError = ke;
        var Le = function(e, n) {
                return e({
                    container: n.container,
                    context: n.context,
                    uid: n.uid,
                    doc: n.doc,
                    frame: n.frame,
                    prerenderFrame: n.prerenderFrame,
                    focus: he,
                    close: Ce,
                    state: _,
                    props: A,
                    tag: l,
                    dimensions: f,
                    event: b
                })
            },
            Me = function(e, n) {
                var t = n.context,
                    r = n.uid;
                return j ? j(e, {
                    context: t,
                    uid: r
                }) : E.try((function() {
                    if (c) {
                        var n = e.getWindow();
                        if (n && L(n) && function(e) {
                                try {
                                    if (!e.location.href) return !0;
                                    if ("about:blank" === e.location.href) return !0
                                } catch (e) {}
                                return !1
                            }(n)) {
                            var o = (n = z(n)).document,
                                i = Le(c, {
                                    context: t,
                                    uid: r,
                                    doc: o
                                });
                            if (i) {
                                if (i.ownerDocument !== o) throw new Error("Expected prerender template to have been created with document from child window");
                                ! function(e, n) {
                                    var t = n.tagName.toLowerCase();
                                    if ("html" !== t) throw new Error("Expected element to be html, got " + t);
                                    for (var r = e.document.documentElement, o = 0, i = Te(r.children); o < i.length; o++) r.removeChild(i[o]);
                                    for (var a = 0, s = Te(n.children); a < s.length; a++) r.appendChild(s[a])
                                }(n, i);
                                var a = p.width,
                                    s = void 0 !== a && a,
                                    l = p.height,
                                    u = void 0 !== l && l,
                                    d = p.element,
                                    f = void 0 === d ? "body" : d;
                                if ((f = Xe(f, o)) && (s || u)) {
                                    var m = yn(f, (function(e) {
                                        Ee({
                                            width: s ? e.width : void 0,
                                            height: u ? e.height : void 0
                                        })
                                    }), {
                                        width: s,
                                        height: u,
                                        win: n
                                    });
                                    b.on("zoid-rendered", m.cancel)
                                }
                            }
                        }
                    }
                }))
            },
            je = function(e, n) {
                var t = n.proxyFrame,
                    r = n.proxyPrerenderFrame,
                    i = n.context,
                    a = n.uid;
                return T ? T(e, {
                    proxyFrame: t,
                    proxyPrerenderFrame: r,
                    context: i,
                    uid: a
                }) : E.hash({
                    container: e.get(),
                    frame: t ? t.get() : null,
                    prerenderFrame: r ? r.get() : null,
                    internalState: X()
                }).then((function(e) {
                    var n = e.container,
                        t = e.internalState.visible,
                        r = Le(s, {
                            context: i,
                            uid: a,
                            container: n,
                            frame: e.frame,
                            prerenderFrame: e.prerenderFrame,
                            doc: document
                        });
                    if (r) {
                        t || mn(r), Ze(n, r);
                        var c = function(e, n) {
                            n = we(n);
                            var t, r, o, i = !1,
                                a = [],
                                s = function() {
                                    i = !0;
                                    for (var e = 0; e < a.length; e++) a[e].disconnect();
                                    t && t.cancel(), o && o.removeEventListener("unload", c), r && hn(r)
                                },
                                c = function() {
                                    i || (n(), s())
                                };
                            if (gn(e)) return c(), {
                                cancel: s
                            };
                            if (window.MutationObserver)
                                for (var l = e.parentElement; l;) {
                                    var u = new window.MutationObserver((function() {
                                        gn(e) && c()
                                    }));
                                    u.observe(l, {
                                        childList: !0
                                    }), a.push(u), l = l.parentElement
                                }
                            return (r = document.createElement("iframe")).setAttribute("name", "__detect_close_" + ce() + "__"), r.style.display = "none", on(r).then((function(e) {
                                (o = z(e)).addEventListener("unload", c)
                            })), e.appendChild(r), t = Se((function() {
                                gn(e) && c()
                            }), 1e3), {
                                cancel: s
                            }
                        }(r, (function() {
                            return Ce(new Error("Detected container element removed from DOM"))
                        }));
                        return v.register((function() {
                            return c.cancel()
                        })), v.register((function() {
                            return hn(r)
                        })), o = pr(r)
                    }
                }))
            },
            We = function() {
                return {
                    state: _,
                    event: b,
                    close: Ce,
                    focus: he,
                    resize: Ee,
                    onError: ke,
                    updateProps: qe,
                    show: re,
                    hide: oe
                }
            },
            De = function(e, n) {
                void 0 === n && (n = !1);
                var t = We();
                ! function(e, n, t, r, o) {
                    void 0 === o && (o = !1), be(n, t = t || {});
                    for (var i = o ? [] : [].concat(Object.keys(e)), a = 0, s = Object.keys(t); a < s.length; a++) {
                        var c = s[a]; - 1 === i.indexOf(c) && i.push(c)
                    }
                    for (var l = [], u = r.state, d = r.close, f = r.focus, p = r.event, m = r.onError, h = 0; h < i.length; h++) {
                        var g = i[h],
                            y = e[g],
                            w = t[g];
                        if (y) {
                            var v = y.alias;
                            if (v && (!ze(w) && ze(t[v]) && (w = t[v]), l.push(v)), y.value && (w = y.value({
                                    props: n,
                                    state: u,
                                    close: d,
                                    focus: f,
                                    event: p,
                                    onError: m
                                })), !ze(w) && y.default && (w = y.default({
                                    props: n,
                                    state: u,
                                    close: d,
                                    focus: f,
                                    event: p,
                                    onError: m
                                })), ze(w) && ("array" === y.type ? !Array.isArray(w) : typeof w !== y.type)) throw new TypeError("Prop is not of type " + y.type + ": " + g);
                            n[g] = w
                        }
                    }
                    for (var _ = 0; _ < l.length; _++) delete n[l[_]];
                    for (var x = 0, b = Object.keys(n); x < b.length; x++) {
                        var E = b[x],
                            A = e[E],
                            C = n[E];
                        A && ze(C) && A.decorate && (n[E] = A.decorate({
                            value: C,
                            props: n,
                            state: u,
                            close: d,
                            focus: f,
                            event: p,
                            onError: m
                        }))
                    }
                    for (var P = 0, S = Object.keys(e); P < S.length; P++) {
                        var R = S[P];
                        if (!1 !== e[R].required && !ze(n[R])) throw new Error('Expected prop "' + R + '" to be defined')
                    }
                }(a, A, e, t, n)
            },
            qe = function(e) {
                return De(e, !0), y.then((function() {
                    var e = i,
                        n = r;
                    if (e && n) return Z(ue()).then((function(t) {
                        return e.updateProps(t).catch((function(e) {
                            return Ie(n).then((function(n) {
                                if (!n) throw e
                            }))
                        }))
                    }))
                }))
            };
        return {
            init: function() {
                b.on("zoid-render", (function() {
                    return A.onRender()
                })), b.on("zoid-display", (function() {
                    return A.onDisplay()
                })), b.on("zoid-rendered", (function() {
                    return A.onRendered()
                })), b.on("zoid-close", (function() {
                    return A.onClose()
                })), b.on("zoid-destroy", (function() {
                    return A.onDestroy()
                })), b.on("zoid-resize", (function() {
                    return A.onResize()
                })), b.on("zoid-focus", (function() {
                    return A.onFocus()
                })), b.on("zoid-props", (function(e) {
                    return A.onProps(e)
                })), b.on("zoid-error", (function(e) {
                    return A && A.onError ? A.onError(e) : y.reject(e).then((function() {
                        setTimeout((function() {
                            throw e
                        }), 1)
                    }))
                })), v.register(b.reset)
            },
            render: function(e, n, t) {
                return E.try((function() {
                    var o = "zoid-" + l + "-" + ce(),
                        i = ue(),
                        s = le();
                    ! function(e, n, t) {
                        if (e !== window) {
                            if (!Y(window, e)) throw new Error("Can only renderTo an adjacent frame");
                            var r = k();
                            if (!V(n, r) && !L(e)) throw new Error("Can not render remotely to " + n.toString() + " - can only render to " + r);
                            if (t && "string" != typeof t) throw new Error("Container passed to renderTo must be a string selector, got " + typeof t + " }")
                        }
                    }(e, i, n);
                    var c = E.try((function() {
                            if (e !== window) return function(e, n) {
                                for (var t = {}, r = 0, o = Object.keys(A); r < o.length; r++) {
                                    var i = o[r],
                                        s = a[i];
                                    s && s.allowDelegate && (t[i] = A[i])
                                }
                                var c = Ut(n, "zoid_delegate_" + u, {
                                    overrides: {
                                        props: t,
                                        event: b,
                                        close: Ce,
                                        onError: ke,
                                        getInternalState: X,
                                        setInternalState: Q
                                    }
                                }).then((function(e) {
                                    var t = e.data.parent;
                                    return v.register((function(e) {
                                        if (!B(n)) return t.destroy(e)
                                    })), t.getDelegateOverrides()
                                })).catch((function(e) {
                                    throw new Error("Unable to delegate rendering. Possibly the component is not loaded in the target window.\n\n" + ve(e))
                                }));
                                return P = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.getProxyContainer.apply(e, n)
                                    }))
                                }, T = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.renderContainer.apply(e, n)
                                    }))
                                }, S = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.show.apply(e, n)
                                    }))
                                }, R = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.hide.apply(e, n)
                                    }))
                                }, q = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.watchForUnload.apply(e, n)
                                    }))
                                }, e === mr.IFRAME ? (I = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.getProxyWindow.apply(e, n)
                                    }))
                                }, M = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.openFrame.apply(e, n)
                                    }))
                                }, F = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.openPrerenderFrame.apply(e, n)
                                    }))
                                }, j = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.prerender.apply(e, n)
                                    }))
                                }, W = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.open.apply(e, n)
                                    }))
                                }, D = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.openPrerender.apply(e, n)
                                    }))
                                }) : e === mr.POPUP && (N = function() {
                                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                                    return c.then((function(e) {
                                        return e.setProxyWin.apply(e, n)
                                    }))
                                }), c
                            }(t, e)
                        })),
                        d = A.window,
                        f = Oe(),
                        p = function(e, n) {
                            var t = {},
                                r = Object.keys(n);
                            return E.all(r.map((function(r) {
                                var o = e[r];
                                if (o) return E.resolve().then((function() {
                                    var e = n[r];
                                    if (e && o.queryParam) return e
                                })).then((function(e) {
                                    if (null != e) return E.all([_r(o, r, e), xr(o, 0, e)]).then((function(e) {
                                        var n, i = e[0],
                                            a = e[1];
                                        if ("boolean" == typeof a) n = a.toString();
                                        else if ("string" == typeof a) n = a.toString();
                                        else if ("object" == typeof a && null !== a) {
                                            if ("json" === o.serialization) n = JSON.stringify(a);
                                            else if ("base64" === o.serialization) n = btoa(JSON.stringify(a));
                                            else if ("dotify" === o.serialization || !o.serialization) {
                                                n = function e(n, t, r) {
                                                    for (var o in void 0 === t && (t = ""), void 0 === r && (r = {}), t = t ? t + "." : t, n) n.hasOwnProperty(o) && null != n[o] && "function" != typeof n[o] && (n[o] && Array.isArray(n[o]) && n[o].length && n[o].every((function(e) {
                                                        return "object" != typeof e
                                                    })) ? r["" + t + o + "[]"] = n[o].join(",") : n[o] && "object" == typeof n[o] ? r = e(n[o], "" + t + o, r) : r["" + t + o] = n[o].toString());
                                                    return r
                                                }(a, r);
                                                for (var s = 0, c = Object.keys(n); s < c.length; s++) {
                                                    var l = c[s];
                                                    t[l] = n[l]
                                                }
                                                return
                                            }
                                        } else "number" == typeof a && (n = a.toString());
                                        t[i] = n
                                    }))
                                }))
                            }))).then((function() {
                                return t
                            }))
                        }(a, A).then((function(e) {
                            return function(e, n) {
                                var t, r, o = n.query || {},
                                    i = n.hash || {},
                                    a = e.split("#");
                                r = a[1];
                                var s = (t = a[0]).split("?");
                                t = s[0];
                                var c = Ue(s[1], o),
                                    l = Ue(r, i);
                                return c && (t = t + "?" + c), l && (t = t + "#" + l), t
                            }(function(e) {
                                if (0 !== K(e).indexOf("mock:")) return e;
                                throw new Error("Mock urls not supported out of test mode")
                            }(ie()), {
                                query: e
                            })
                        })),
                        m = b.trigger("zoid-render"),
                        h = ne(n),
                        g = ee(),
                        w = g.then((function(n) {
                            return function(e) {
                                var n = void 0 === e ? {} : e,
                                    t = n.proxyWin,
                                    r = n.childDomain,
                                    o = n.domain,
                                    i = (void 0 === n.target && window, n.context),
                                    a = n.uid;
                                return function(e, n, t, r) {
                                    return Z(t).then((function(o) {
                                        var i = Yt(e, t, o),
                                            a = n === k() ? {
                                                type: "uid",
                                                uid: r
                                            } : {
                                                type: "raw",
                                                value: i
                                            };
                                        if ("uid" === a.type) {
                                            var s = fr(window);
                                            s.props = s.props || {}, s.props[r] = i, v.register((function() {
                                                delete s.props[r]
                                            }))
                                        }
                                        return a
                                    }))
                                }(t, r, o, a).then((function(e) {
                                    return {
                                        uid: a,
                                        context: i,
                                        tag: l,
                                        version: "9_0_63",
                                        childDomain: r,
                                        parentDomain: k(window),
                                        parent: ge(0, r, a, i),
                                        props: e,
                                        exports: Yt(t, o, (n = t, {
                                            init: _e,
                                            close: Ce,
                                            checkClose: function() {
                                                return Ie(n)
                                            },
                                            resize: Ee,
                                            onError: ke,
                                            show: re,
                                            hide: oe
                                        }))
                                    };
                                    var n
                                }))
                            }({
                                proxyWin: (r = {
                                    proxyWin: n,
                                    childDomain: s,
                                    domain: i,
                                    target: e,
                                    context: t,
                                    uid: o
                                }).proxyWin,
                                childDomain: r.childDomain,
                                domain: r.domain,
                                target: r.target,
                                context: r.context,
                                uid: r.uid
                            }).then((function(e) {
                                return "__zoid__" + u + "__" + se(JSON.stringify(e)) + "__"
                            }));
                            var r
                        })),
                        _ = w.then((function(e) {
                            return de(t, {
                                windowName: e
                            })
                        })),
                        x = fe(t),
                        C = E.hash({
                            proxyContainer: h,
                            proxyFrame: _,
                            proxyPrerenderFrame: x
                        }).then((function(e) {
                            return je(e.proxyContainer, {
                                context: t,
                                uid: o,
                                proxyFrame: e.proxyFrame,
                                proxyPrerenderFrame: e.proxyPrerenderFrame
                            })
                        })).then((function(e) {
                            return e
                        })),
                        O = E.hash({
                            windowName: w,
                            proxyFrame: _,
                            proxyWin: g
                        }).then((function(e) {
                            var n = e.proxyWin;
                            return d ? n : Pe(t, {
                                windowName: e.windowName,
                                proxyWin: n,
                                proxyFrame: e.proxyFrame
                            })
                        })),
                        z = E.hash({
                            proxyWin: O,
                            proxyPrerenderFrame: x
                        }).then((function(e) {
                            return pe(t, e.proxyWin, e.proxyPrerenderFrame)
                        })),
                        H = O.then((function(e) {
                            return r = e, te(e)
                        })),
                        G = E.hash({
                            proxyPrerenderWin: z,
                            state: H
                        }).then((function(e) {
                            return Me(e.proxyPrerenderWin, {
                                context: t,
                                uid: o
                            })
                        })),
                        U = E.hash({
                            proxyWin: O,
                            windowName: w
                        }).then((function(e) {
                            if (d) return e.proxyWin.setName(e.windowName)
                        })),
                        J = E.hash({
                            proxyWin: O,
                            builtUrl: p,
                            windowName: U,
                            prerender: G
                        }).then((function(e) {
                            return e.proxyWin.setLocation(e.builtUrl)
                        })),
                        $ = O.then((function(e) {
                            ! function e(n, t) {
                                var r = !1;
                                return v.register((function() {
                                    r = !0
                                })), E.delay(2e3).then((function() {
                                    return n.isClosed()
                                })).then((function(o) {
                                    return o ? Ce(new Error("Detected " + t + " close")) : r ? void 0 : e(n, t)
                                }))
                            }(e, t)
                        })),
                        ae = E.hash({
                            container: C,
                            prerender: G
                        }).then((function() {
                            return b.trigger("zoid-display")
                        })),
                        me = O.then((function(e) {})),
                        he = J.then((function() {
                            return E.try((function() {
                                var e = A.timeout;
                                if (e) return y.timeout(e, new Error("Loading component timed out after " + e + " milliseconds"))
                            }))
                        })),
                        ye = y.then((function() {
                            return b.trigger("zoid-rendered")
                        }));
                    return E.hash({
                        initPromise: y,
                        buildUrlPromise: p,
                        onRenderPromise: m,
                        getProxyContainerPromise: h,
                        openFramePromise: _,
                        openPrerenderFramePromise: x,
                        renderContainerPromise: C,
                        openPromise: O,
                        openPrerenderPromise: z,
                        setStatePromise: H,
                        prerenderPromise: G,
                        loadUrlPromise: J,
                        buildWindowNamePromise: w,
                        setWindowNamePromise: U,
                        watchForClosePromise: $,
                        onDisplayPromise: ae,
                        openBridgePromise: me,
                        runTimeoutPromise: he,
                        onRenderedPromise: ye,
                        delegatePromise: c,
                        watchForUnloadPromise: f
                    })
                })).catch((function(e) {
                    return E.all([ke(e), Ae(e)]).then((function() {
                        throw e
                    }), (function() {
                        throw e
                    }))
                })).then(ye)
            },
            destroy: Ae,
            setProps: De,
            getHelpers: We,
            getDelegateOverrides: function() {
                return E.try((function() {
                    return {
                        getProxyContainer: ne,
                        show: re,
                        hide: oe,
                        renderContainer: je,
                        getProxyWindow: ee,
                        watchForUnload: Oe,
                        openFrame: de,
                        openPrerenderFrame: fe,
                        prerender: Me,
                        open: Pe,
                        openPrerender: pe,
                        setProxyWin: te
                    }
                }))
            }
        }
    }
    var Er = {
            register: function(e, n, t, r) {
                var o = r.React,
                    i = r.ReactDOM;
                return function(e) {
                    function n() {
                        return e.apply(this, arguments) || this
                    }
                    p(n, e);
                    var r = n.prototype;
                    return r.render = function() {
                        return o.createElement("div", null)
                    }, r.componentDidMount = function() {
                        var e = i.findDOMNode(this),
                            n = t(be({}, this.props));
                        n.render(e, mr.IFRAME), this.setState({
                            parent: n
                        })
                    }, r.componentDidUpdate = function() {
                        this.state && this.state.parent && this.state.parent.updateProps(be({}, this.props)).catch(ye)
                    }, n
                }(o.Component)
            }
        },
        Ar = {
            register: function(e, n, t, r) {
                return r.component(e, {
                    render: function(e) {
                        return e("div")
                    },
                    inheritAttrs: !1,
                    mounted: function() {
                        var e = this.$el;
                        this.parent = t(m({}, this.$attrs)), this.parent.render(e, mr.IFRAME)
                    },
                    watch: {
                        $attrs: {
                            handler: function() {
                                this.parent && this.$attrs && this.parent.updateProps(m({}, this.$attrs)).catch(ye)
                            },
                            deep: !0
                        }
                    }
                })
            }
        },
        Cr = {
            register: function(e, n, t, r) {
                return r.module(e, []).directive(e.replace(/-([a-z])/g, (function(e) {
                    return e[1].toUpperCase()
                })), (function() {
                    for (var e = {}, r = 0, o = Object.keys(n); r < o.length; r++) e[o[r]] = "=";
                    return e.props = "=", {
                        scope: e,
                        restrict: "E",
                        controller: ["$scope", "$element", function(e, n) {
                            function r() {
                                if ("$apply" !== e.$root.$$phase && "$digest" !== e.$root.$$phase) try {
                                    e.$apply()
                                } catch (e) {}
                            }
                            var o = function() {
                                    return Le(e.props, (function(e) {
                                        return "function" == typeof e ? function() {
                                            var n = e.apply(this, arguments);
                                            return r(), n
                                        } : e
                                    }))
                                },
                                i = t(o());
                            i.render(n[0], mr.IFRAME), e.$watch((function() {
                                i.updateProps(o()).catch(ye)
                            }))
                        }]
                    }
                }))
            }
        },
        Pr = {
            register: function(e, n, t, r) {
                var o = r.NgModule,
                    i = r.ElementRef,
                    a = r.NgZone,
                    s = function(e) {
                        return Le(m({}, e.internalProps, e.props), (function(n) {
                            return "function" == typeof n ? function() {
                                var t = arguments,
                                    r = this;
                                return e.zone.run((function() {
                                    return n.apply(r, t)
                                }))
                            } : n
                        }))
                    },
                    c = (0, r.Component)({
                        selector: e,
                        template: "<div></div>",
                        inputs: ["props"]
                    }).Class({
                        constructor: [i, a, function(e, n) {
                            this._props = {}, this.elementRef = e, this.zone = n
                        }],
                        ngOnInit: function() {
                            var e = this.elementRef.nativeElement;
                            this.parent = t(s(this)), this.parent.render(e, mr.IFRAME)
                        },
                        ngDoCheck: function() {
                            this.parent && ! function(e, n) {
                                var t = {};
                                for (var r in e)
                                    if (e.hasOwnProperty(r) && (t[r] = !0, e[r] !== n[r])) return !1;
                                for (var o in n)
                                    if (!t[o]) return !1;
                                return !0
                            }(this._props, this.props) && (this._props = m({}, this.props), this.parent.updateProps(s(this)))
                        }
                    });
                return o({
                    declarations: [c],
                    exports: [c]
                }).Class({
                    constructor: function() {}
                })
            }
        };

    function Sr(e) {
        var n = e.uid,
            t = e.frame,
            r = e.prerenderFrame,
            o = e.doc,
            i = e.props,
            a = e.event,
            s = e.dimensions,
            c = s.width,
            l = s.height;
        if (t && r) {
            var u = o.createElement("div");
            u.setAttribute("id", n);
            var d = o.createElement("style");
            return i.cspNonce && d.setAttribute("nonce", i.cspNonce), d.appendChild(o.createTextNode("\n            #" + n + " {\n                display: inline-block;\n                position: relative;\n                width: " + c + ";\n                height: " + l + ";\n            }\n\n            #" + n + " > iframe {\n                display: inline-block;\n                position: absolute;\n                width: 100%;\n                height: 100%;\n                top: 0;\n                left: 0;\n                transition: opacity .2s ease-in-out;\n            }\n\n            #" + n + " > iframe.zoid-invisible {\n                opacity: 0;\n            }\n\n            #" + n + " > iframe.zoid-visible {\n                opacity: 1;\n        }\n        ")), u.appendChild(t), u.appendChild(r), u.appendChild(d), r.classList.add("zoid-visible"), t.classList.add("zoid-invisible"), a.on("zoid-rendered", (function() {
                r.classList.remove("zoid-visible"), r.classList.add("zoid-invisible"), t.classList.remove("zoid-invisible"), t.classList.add("zoid-visible"), setTimeout((function() {
                    hn(r)
                }), 1)
            })), a.on("zoid-resize", (function(e) {
                var n = e.width,
                    t = e.height;
                "number" == typeof n && (u.style.width = On(n)), "number" == typeof t && (u.style.height = On(t))
            })), u
        }
    }

    function Rr(e) {
        var n = e.doc,
            t = e.props,
            r = n.createElement("html"),
            o = n.createElement("body"),
            i = n.createElement("style"),
            a = n.createElement("div");
        return a.classList.add("spinner"), t.cspNonce && i.setAttribute("nonce", t.cspNonce), r.appendChild(o), o.appendChild(a), o.appendChild(i), i.appendChild(n.createTextNode("\n            html, body {\n                width: 100%;\n                height: 100%;\n            }\n\n            .spinner {\n                position: fixed;\n                max-height: 60vmin;\n                max-width: 60vmin;\n                height: 40px;\n                width: 40px;\n                top: 50%;\n                left: 50%;\n                box-sizing: border-box;\n                border: 3px solid rgba(0, 0, 0, .2);\n                border-top-color: rgba(33, 128, 192, 0.8);\n                border-radius: 100%;\n                animation: rotation .7s infinite linear;\n            }\n\n            @keyframes rotation {\n                from {\n                    transform: translateX(-50%) translateY(-50%) rotate(0deg);\n                }\n                to {\n                    transform: translateX(-50%) translateY(-50%) rotate(359deg);\n                }\n            }\n        ")), r
    }
    var Or, Tr, Ir, kr, Lr, zr, Nr, Mr, Fr, jr, Wr, Dr = function() {
            return ye
        },
        qr = function(e) {
            return we(e.value)
        },
        Br = Fe(),
        Hr = Fe();

    function Gr(e) {
        var n, t, r = function(e) {
                var n = e.tag,
                    t = e.url,
                    r = e.domain,
                    o = e.bridgeUrl,
                    i = e.props,
                    a = void 0 === i ? {} : i,
                    s = e.dimensions,
                    c = void 0 === s ? {} : s,
                    l = e.autoResize,
                    u = void 0 === l ? {} : l,
                    d = e.allowedParentDomains,
                    f = void 0 === d ? "*" : d,
                    p = e.attributes,
                    h = void 0 === p ? {} : p,
                    g = e.defaultContext,
                    y = void 0 === g ? mr.IFRAME : g,
                    w = e.containerTemplate,
                    v = void 0 === w ? Sr : w,
                    _ = e.prerenderTemplate,
                    x = void 0 === _ ? Rr : _,
                    b = e.validate,
                    E = e.eligible,
                    A = void 0 === E ? function() {
                        return {
                            eligible: !0
                        }
                    } : E,
                    C = e.logger,
                    P = void 0 === C ? {
                        info: ye
                    } : C,
                    S = n.replace(/-/g, "_"),
                    R = c.width,
                    O = void 0 === R ? "300px" : R,
                    T = c.height,
                    I = void 0 === T ? "150px" : T;
                if (a = m({}, {
                        window: {
                            type: "object",
                            sendToChild: !1,
                            required: !1,
                            allowDelegate: !0,
                            validate: function(e) {
                                var n = e.value;
                                if (!Z(n) && !St.isProxyWindow(n)) throw new Error("Expected Window or ProxyWindow");
                                if (Z(n)) {
                                    if (B(n)) throw new Error("Window is closed");
                                    if (!L(n)) throw new Error("Window is not same domain")
                                }
                            },
                            decorate: function(e) {
                                return Jt(e.value)
                            }
                        },
                        timeout: {
                            type: "number",
                            required: !1,
                            sendToChild: !1
                        },
                        close: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.close
                            }
                        },
                        focus: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.focus
                            }
                        },
                        resize: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.resize
                            }
                        },
                        uid: {
                            type: "string",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.uid
                            }
                        },
                        cspNonce: {
                            type: "string",
                            required: !1
                        },
                        getParent: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.getParent
                            }
                        },
                        getParentDomain: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.getParentDomain
                            }
                        },
                        show: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.show
                            }
                        },
                        hide: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.hide
                            }
                        },
                        onDisplay: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: Dr,
                            decorate: qr
                        },
                        onRendered: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: Dr,
                            decorate: qr
                        },
                        onRender: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: Dr,
                            decorate: qr
                        },
                        onClose: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: Dr,
                            decorate: qr
                        },
                        onDestroy: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: Dr,
                            decorate: qr
                        },
                        onResize: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: Dr
                        },
                        onFocus: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            allowDelegate: !0,
                            default: Dr
                        },
                        onError: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            childDecorate: function(e) {
                                return e.onError
                            }
                        },
                        onProps: {
                            type: "function",
                            required: !1,
                            sendToChild: !1,
                            default: Dr,
                            childDecorate: function(e) {
                                return e.onProps
                            }
                        }
                    }, a), !v) throw new Error("Container template required");
                return {
                    name: S,
                    tag: n,
                    url: t,
                    domain: r,
                    bridgeUrl: o,
                    propsDef: a,
                    dimensions: {
                        width: O,
                        height: I
                    },
                    autoResize: u,
                    allowedParentDomains: f,
                    attributes: h,
                    defaultContext: y,
                    containerTemplate: v,
                    prerenderTemplate: x,
                    validate: b,
                    logger: P,
                    eligible: A
                }
            }(e),
            o = r.name,
            i = r.tag,
            a = r.defaultContext,
            s = r.propsDef,
            c = r.eligible,
            l = fr(),
            u = {},
            d = [],
            f = function() {
                var e = yr();
                return Boolean(e && e.tag === i && e.childDomain === k())
            },
            p = me((function() {
                if (f()) {
                    if (window.xprops) throw delete l.components[i], new Error("Can not register " + o + " as child - child already registered");
                    var e = function(e) {
                        var n, t = e.propsDef,
                            r = e.autoResize,
                            o = e.allowedParentDomains,
                            i = [],
                            a = yr();
                        if (!a) throw new Error("No child payload found");
                        if ("9_0_63" !== a.version) throw new Error("Parent window has zoid version " + a.version + ", child window has version 9_0_63");
                        var s = a.uid,
                            c = a.parentDomain,
                            l = a.exports,
                            u = a.context,
                            d = a.props,
                            f = function(e) {
                                var n, t, r = e.type;
                                if ("opener" === r) return je("opener", O(window));
                                if ("parent" === r && "number" == typeof e.distance) return je("parent", (n = window, void 0 === (t = e.distance) && (t = 1), function(e, n) {
                                    void 0 === n && (n = 1);
                                    for (var t = e, r = 0; r < n; r++) {
                                        if (!t) return;
                                        t = R(t)
                                    }
                                    return t
                                }(n, U(n) - t)));
                                if ("global" === r && e.uid && "string" == typeof e.uid) {
                                    var o = e.uid,
                                        i = H(window);
                                    if (!i) throw new Error("Can not find ancestor window");
                                    for (var a = 0, s = W(i); a < s.length; a++) {
                                        var c = s[a];
                                        if (L(c)) {
                                            var l = fr(c);
                                            if (l && l.windows && l.windows[o]) return l.windows[o]
                                        }
                                    }
                                }
                                throw new Error("Unable to find " + r + " parent component window")
                            }(a.parent),
                            p = Vt(f, c, l),
                            m = p.show,
                            h = p.hide,
                            g = p.close,
                            y = function() {
                                return f
                            },
                            w = function() {
                                return c
                            },
                            v = function(e) {
                                i.push(e)
                            },
                            _ = function(e) {
                                return E.try((function() {
                                    if (p && p.onError) return p.onError(e);
                                    throw e
                                }))
                            },
                            x = function(e) {
                                return p.resize.fireAndForget({
                                    width: e.width,
                                    height: e.height
                                })
                            },
                            b = function(e, r, o) {
                                void 0 === o && (o = !1);
                                var a = function(e, n, t, r, o, i) {
                                    void 0 === i && (i = !1);
                                    for (var a = {}, s = 0, c = Object.keys(t); s < c.length; s++) {
                                        var l = c[s],
                                            u = n[l];
                                        if (!u || !u.sameDomain || r === k(window) && L(e)) {
                                            var d = hr(n, 0, l, t[l], o);
                                            a[l] = d, u && u.alias && !a[u.alias] && (a[u.alias] = d)
                                        }
                                    }
                                    if (!i)
                                        for (var f = 0, p = Object.keys(n); f < p.length; f++) {
                                            var m = p[f];
                                            t.hasOwnProperty(m) || (a[m] = hr(n, 0, m, void 0, o))
                                        }
                                    return a
                                }(f, t, e, r, {
                                    show: m,
                                    hide: h,
                                    close: g,
                                    focus: wr,
                                    onError: _,
                                    resize: x,
                                    onProps: v,
                                    getParent: y,
                                    getParentDomain: w,
                                    uid: s
                                }, o);
                                n ? be(n, a) : n = a;
                                for (var c = 0; c < i.length; c++)(0, i[c])(n)
                            },
                            A = function(e) {
                                return E.try((function() {
                                    return b(e, c, !0)
                                }))
                            };
                        return {
                            init: function() {
                                return E.try((function() {
                                    return function(e, n) {
                                        if (!V(e, n)) throw new Error("Can not be rendered by domain: " + n)
                                    }(o, c), gt(f), window.addEventListener("beforeunload", (function() {
                                        p.checkClose.fireAndForget()
                                    })), window.addEventListener("unload", (function() {
                                        p.checkClose.fireAndForget()
                                    })), J(f, (function() {
                                        vr()
                                    })), p.init({
                                        updateProps: A,
                                        close: vr
                                    })
                                })).then((function() {
                                    return (e = r.width, n = void 0 !== e && e, t = r.height, o = void 0 !== t && t, i = r.element, en(void 0 === i ? "body" : i).catch(ye).then((function(e) {
                                        return {
                                            width: n,
                                            height: o,
                                            element: e
                                        }
                                    }))).then((function(e) {
                                        var n = e.width,
                                            t = e.height,
                                            r = e.element;
                                        r && (n || t) && u !== mr.POPUP && yn(r, (function(e) {
                                            x({
                                                width: n ? e.width : void 0,
                                                height: t ? e.height : void 0
                                            })
                                        }), {
                                            width: n,
                                            height: t
                                        })
                                    }));
                                    var e, n, t, o, i
                                })).catch((function(e) {
                                    _(e)
                                }))
                            },
                            getProps: function() {
                                return n || (b(function(e, n, t) {
                                    var r, o = t.type,
                                        i = t.uid;
                                    if ("raw" === o) r = t.value;
                                    else if ("uid" === o) {
                                        if (!L(e)) throw new Error("Parent component window is on a different domain - expected " + k() + " - can not retrieve props");
                                        var a = fr(e);
                                        r = je("props", a && a.props[i])
                                    }
                                    if (!r) throw new Error("Could not find props");
                                    return Vt(e, n, r)
                                }(f, c, d), c), n)
                            }
                        }
                    }(r);
                    return e.init(), e
                }
            })),
            h = function e(n) {
                var t, i = c({
                        props: n = n || {}
                    }),
                    s = i.eligible,
                    l = i.reason,
                    u = n.onDestroy;
                n.onDestroy = function() {
                    if (t && s && d.splice(d.indexOf(t), 1), u) return u.apply(void 0, arguments)
                };
                var f = br(r);
                f.init(), s ? f.setProps(n) : n.onDestroy && n.onDestroy(), Br.register((function(e) {
                    f.destroy(e || new Error("zoid destroyed all components"))
                }));
                var p = function(e, t, r) {
                    return E.try((function() {
                        if (!s) {
                            var t = new Error(l || o + " component is not eligible");
                            return f.destroy(t).then((function() {
                                throw t
                            }))
                        }
                        if (!Z(e)) throw new Error("Must pass window to renderTo");
                        return function(e, n) {
                            return E.try((function() {
                                if (e.window) return Jt(e.window).getType();
                                if (n) {
                                    if (n !== mr.IFRAME && n !== mr.POPUP) throw new Error("Unrecognized context: " + n);
                                    return n
                                }
                                return a
                            }))
                        }(n, r)
                    })).then((function(n) {
                        return t = function(e, n) {
                            if (n) {
                                if ("string" != typeof n && !$e(n)) throw new TypeError("Expected string or element selector to be passed");
                                return n
                            }
                            if (e === mr.POPUP) return "body";
                            throw new Error("Expected element to be passed to render iframe")
                        }(n, t), f.render(e, t, n)
                    })).catch((function(e) {
                        return f.destroy(e).then((function() {
                            throw e
                        }))
                    }))
                };
                return t = m({}, f.getHelpers(), {
                    isEligible: function() {
                        return s
                    },
                    clone: function(t) {
                        var r = (void 0 === t ? {} : t).decorate;
                        return e((void 0 === r ? Pe : r)(n))
                    },
                    render: function(e, n) {
                        return p(window, e, n)
                    },
                    renderTo: function(e, n, t) {
                        return p(e, n, t)
                    }
                }), s && d.push(t), t
            };
        if (p(), n = Ht("zoid_allow_delegate_" + o, (function() {
                return !0
            })), t = Ht("zoid_delegate_" + o, (function(e) {
                return {
                    parent: br(r, e.data.overrides, e.source)
                }
            })), Hr.register(n.cancel), Hr.register(t.cancel), l.components = l.components || {}, l.components[i]) throw new Error("Can not register multiple components with the same tag: " + i);
        return l.components[i] = !0, {
            init: h,
            instances: d,
            driver: function(e, n) {
                var t = {
                    react: Er,
                    angular: Cr,
                    vue: Ar,
                    angular2: Pr
                };
                if (!t[e]) throw new Error("Could not find driver for framework: " + e);
                return u[e] || (u[e] = t[e].register(i, s, h, n)), u[e]
            },
            isChild: f,
            canRenderTo: function(e) {
                return Ut(e, "zoid_allow_delegate_" + o).then((function(e) {
                    return e.data
                })).catch((function() {
                    return !1
                }))
            },
            registerChild: p
        }
    }

    function Ur(e) {
        Zt();
        var n = Gr(e),
            t = function(e) {
                return n.init(e)
            };
        t.driver = function(e, t) {
            return n.driver(e, t)
        }, t.isChild = function() {
            return n.isChild()
        }, t.canRenderTo = function(e) {
            return n.canRenderTo(e)
        }, t.instances = n.instances;
        var r = n.registerChild();
        return r && (window.xprops = t.xprops = r.getProps()), t
    }

    function Yr(e) {
        return function(e) {
            Br.all(void 0);
            Br = Fe()
        }(), delete window.__zoid_9_0_63__, $t(), Hr.all(e)
    }

    function Vr(e) {
        var n = e.svg,
            t = c(e, ["svg"]);
        if (!n) throw new TypeError("Expected svg prop");
        if ("string" != typeof(n = n.render((function e(n) {
                if ("component" === n.type) return [].concat(n.renderComponent(e)).join("");
                if ("element" === n.type) {
                    var t = (o = n.props, (i = Object.keys(o).filter((function(e) {
                        var n = o[e];
                        return "innerHTML" !== e && ("string" == typeof n || "number" == typeof n || !0 === n)
                    }))).length ? " " + i.map((function(e) {
                        var n = o[e];
                        if (!0 === n) return "" + dr(e);
                        if ("string" != typeof n && "number" != typeof n) throw new TypeError("Unexpected prop type: " + typeof n);
                        return "" === n ? dr(e) : dr(e) + '="' + dr(n.toString()) + '"'
                    })).join(" ") : "");
                    if (ur[n.name]) return "<" + n.name + t + " />";
                    var r = "string" == typeof n.props.innerHTML ? n.props.innerHTML : n.renderChildren(e).join("");
                    return "<" + n.name + t + ">" + r + "</" + n.name + ">"
                }
                var o, i;
                if ("text" === n.type) return dr(n.text);
                throw new TypeError("Unhandleable node: " + n.type)
            })))) throw new TypeError("Expected svg prop to be a string or jsx node");
        var r = m({
            src: Ae(n)
        }, t);
        return sr("img", r)
    }

    function Kr(e) {
        var n = e.render,
            t = e.name,
            r = e.logoColor,
            o = c(e, ["render", "name", "logoColor"]);
        return sr(Vr, m({}, o, {
            svg: n(),
            alt: "",
            class: "paypal-logo paypal-logo-" + t + " " + (r ? "paypal-logo-color-" + r : "")
        }))
    }

    function Jr(e, n, t) {
        var r;
        if (t && (r = n[t]), r || (r = n.default), !r) throw new Error("No " + (t || "default") + " logo available for " + e);
        return r
    }(Or = {}).default = {
        primary: "#005498",
        secondary: "#FFD800"
    }, Or.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, Or.black = {
        primary: "#005498",
        secondary: "#FFD800"
    }, (Tr = {}).default = {
        primary: "#333030"
    }, Tr.white = {
        primary: "#ffffff"
    }, Tr.black = {
        primary: "#333030"
    }, (Ir = {}).default = {
        primary: "#333030"
    }, Ir.white = {
        primary: "#ffffff"
    }, Ir.black = {
        primary: "#333030"
    }, (kr = {}).default = {
        primary: "#003087"
    }, kr.blue = {
        primary: "#003087"
    }, kr.white = {
        primary: "#ffffff"
    }, kr.black = {
        primary: "#333030"
    }, (Lr = {}).default = {
        primary: "#c8036f",
        secondary: "#71706f"
    }, Lr.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, Lr.black = {
        primary: "#71706F",
        secondary: "#C8036F"
    }, (zr = {}).default = {
        primary: "#ED1C24",
        secondary: "#ffffff",
        tertiary: "#003a7d",
        quaternary: "#FFFFFF"
    }, zr.white = {
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        quaternary: "#FFFFFF"
    }, zr.black = {
        primary: "#ED1C24",
        secondary: "#FFFFFF",
        tertiary: "#003a7d",
        quaternary: "#FFFFFF"
    }, (Nr = {}).default = {
        primary: "#000000",
        secondary: "#cd0067",
        tertiary: "#ffffff"
    }, Nr.white = {
        primary: "#ffffff",
        secondary: "#ffffff",
        tertiary: "#ffffff"
    }, Nr.black = {
        primary: "#000000",
        secondary: "#FFFFFF",
        tertiary: "#CD0067"
    }, (Mr = {}).default = {
        primary: "#00C0EE",
        secondary: "#1a4b67"
    }, Mr.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, Mr.black = {
        primary: "#1A4B67",
        secondary: "#00C0EE"
    }, (Fr = {}).default = {
        primary: "#d03238",
        secondary: "#b3b1b1"
    }, Fr.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, Fr.black = {
        primary: "#d03238",
        secondary: "#b3b1b1"
    };
    var Zr = ((jr = {}).default = {
        primary: "#003087",
        secondary: "#009cde"
    }, jr.blue = {
        primary: "#003087",
        secondary: "#009cde"
    }, jr.white = {
        primary: "#ffffff",
        secondary: "#ffffff"
    }, jr.black = {
        primary: "#333030",
        secondary: "#636363"
    }, jr.monochrome = {
        primary: "#000000",
        secondary: "#000000"
    }, jr);

    function $r(e) {
        var n = e.logoColor,
            t = void 0 === n ? "default" : n,
            r = c(e, ["logoColor"]),
            o = Jr("paypal", Zr, t),
            i = o.primary,
            a = o.secondary;
        return sr(Kr, m({}, r, r, {
            name: "paypal",
            alt: "PayPal",
            "aria-label": "PayPal",
            logoColor: t,
            render: function() {
                return sr("svg", {
                    width: "101px",
                    height: "32",
                    viewBox: "0 0 101 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, sr("path", {
                    fill: i,
                    d: "M 12.237 2.8 L 4.437 2.8 C 3.937 2.8 3.437 3.2 3.337 3.7 L 0.237 23.7 C 0.137 24.1 0.437 24.4 0.837 24.4 L 4.537 24.4 C 5.037 24.4 5.537 24 5.637 23.5 L 6.437 18.1 C 6.537 17.6 6.937 17.2 7.537 17.2 L 10.037 17.2 C 15.137 17.2 18.137 14.7 18.937 9.8 C 19.237 7.7 18.937 6 17.937 4.8 C 16.837 3.5 14.837 2.8 12.237 2.8 Z M 13.137 10.1 C 12.737 12.9 10.537 12.9 8.537 12.9 L 7.337 12.9 L 8.137 7.7 C 8.137 7.4 8.437 7.2 8.737 7.2 L 9.237 7.2 C 10.637 7.2 11.937 7.2 12.637 8 C 13.137 8.4 13.337 9.1 13.137 10.1 Z"
                }), sr("path", {
                    fill: i,
                    d: "M 35.437 10 L 31.737 10 C 31.437 10 31.137 10.2 31.137 10.5 L 30.937 11.5 L 30.637 11.1 C 29.837 9.9 28.037 9.5 26.237 9.5 C 22.137 9.5 18.637 12.6 17.937 17 C 17.537 19.2 18.037 21.3 19.337 22.7 C 20.437 24 22.137 24.6 24.037 24.6 C 27.337 24.6 29.237 22.5 29.237 22.5 L 29.037 23.5 C 28.937 23.9 29.237 24.3 29.637 24.3 L 33.037 24.3 C 33.537 24.3 34.037 23.9 34.137 23.4 L 36.137 10.6 C 36.237 10.4 35.837 10 35.437 10 Z M 30.337 17.2 C 29.937 19.3 28.337 20.8 26.137 20.8 C 25.037 20.8 24.237 20.5 23.637 19.8 C 23.037 19.1 22.837 18.2 23.037 17.2 C 23.337 15.1 25.137 13.6 27.237 13.6 C 28.337 13.6 29.137 14 29.737 14.6 C 30.237 15.3 30.437 16.2 30.337 17.2 Z"
                }), sr("path", {
                    fill: i,
                    d: "M 55.337 10 L 51.637 10 C 51.237 10 50.937 10.2 50.737 10.5 L 45.537 18.1 L 43.337 10.8 C 43.237 10.3 42.737 10 42.337 10 L 38.637 10 C 38.237 10 37.837 10.4 38.037 10.9 L 42.137 23 L 38.237 28.4 C 37.937 28.8 38.237 29.4 38.737 29.4 L 42.437 29.4 C 42.837 29.4 43.137 29.2 43.337 28.9 L 55.837 10.9 C 56.137 10.6 55.837 10 55.337 10 Z"
                }), sr("path", {
                    fill: a,
                    d: "M 67.737 2.8 L 59.937 2.8 C 59.437 2.8 58.937 3.2 58.837 3.7 L 55.737 23.6 C 55.637 24 55.937 24.3 56.337 24.3 L 60.337 24.3 C 60.737 24.3 61.037 24 61.037 23.7 L 61.937 18 C 62.037 17.5 62.437 17.1 63.037 17.1 L 65.537 17.1 C 70.637 17.1 73.637 14.6 74.437 9.7 C 74.737 7.6 74.437 5.9 73.437 4.7 C 72.237 3.5 70.337 2.8 67.737 2.8 Z M 68.637 10.1 C 68.237 12.9 66.037 12.9 64.037 12.9 L 62.837 12.9 L 63.637 7.7 C 63.637 7.4 63.937 7.2 64.237 7.2 L 64.737 7.2 C 66.137 7.2 67.437 7.2 68.137 8 C 68.637 8.4 68.737 9.1 68.637 10.1 Z"
                }), sr("path", {
                    fill: a,
                    d: "M 90.937 10 L 87.237 10 C 86.937 10 86.637 10.2 86.637 10.5 L 86.437 11.5 L 86.137 11.1 C 85.337 9.9 83.537 9.5 81.737 9.5 C 77.637 9.5 74.137 12.6 73.437 17 C 73.037 19.2 73.537 21.3 74.837 22.7 C 75.937 24 77.637 24.6 79.537 24.6 C 82.837 24.6 84.737 22.5 84.737 22.5 L 84.537 23.5 C 84.437 23.9 84.737 24.3 85.137 24.3 L 88.537 24.3 C 89.037 24.3 89.537 23.9 89.637 23.4 L 91.637 10.6 C 91.637 10.4 91.337 10 90.937 10 Z M 85.737 17.2 C 85.337 19.3 83.737 20.8 81.537 20.8 C 80.437 20.8 79.637 20.5 79.037 19.8 C 78.437 19.1 78.237 18.2 78.437 17.2 C 78.737 15.1 80.537 13.6 82.637 13.6 C 83.737 13.6 84.537 14 85.137 14.6 C 85.737 15.3 85.937 16.2 85.737 17.2 Z"
                }), sr("path", {
                    fill: a,
                    d: "M 95.337 3.3 L 92.137 23.6 C 92.037 24 92.337 24.3 92.737 24.3 L 95.937 24.3 C 96.437 24.3 96.937 23.9 97.037 23.4 L 100.237 3.5 C 100.337 3.1 100.037 2.8 99.637 2.8 L 96.037 2.8 C 95.637 2.8 95.437 3 95.337 3.3 Z"
                }))
            }
        }))
    }
    var Xr, Qr, eo, no, to, ro, oo, io, ao, so, co, lo, uo, fo, po = ((Wr = {}).default = {
        primary: "#009cde",
        secondary: "#012169",
        tertiary: "#003087"
    }, Wr.blue = {
        primary: "#009cde",
        secondary: "#012169",
        tertiary: "#003087"
    }, Wr.white = {
        primary: "#ffffff",
        primaryOpacity: "0.7",
        secondary: "#ffffff",
        secondaryOpacity: "0.7",
        tertiary: "#ffffff"
    }, Wr.black = {
        primary: "#808080",
        secondary: "#000000",
        tertiary: "#1a1a1a"
    }, Wr);

    function mo(e) {
        var n = e.logoColor,
            t = void 0 === n ? "default" : n,
            r = c(e, ["logoColor"]),
            o = Jr("pp", po, t),
            i = o.primary,
            a = o.secondary,
            s = o.tertiary,
            l = o.primaryOpacity,
            u = void 0 === l ? "1" : l,
            d = o.secondaryOpacity,
            f = void 0 === d ? "1" : d,
            p = o.tertiaryOpacity,
            h = void 0 === p ? "1" : p;
        return sr(Kr, m({}, r, r, {
            name: "pp",
            alt: "PP",
            "aria-label": "PP",
            logoColor: t,
            render: function() {
                return sr("svg", {
                    width: "24",
                    height: "32",
                    viewBox: "0 0 24 32",
                    preserveAspectRatio: "xMinYMin meet",
                    xmlns: "http://www.w3.org/2000/svg"
                }, sr("path", {
                    fill: i,
                    opacity: u,
                    d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 6.694 26.557 C 6.6 26.957 6.881 27.257 7.255 27.257 L 11.375 27.257 C 11.844 27.257 12.311 26.957 12.405 26.457 L 12.405 26.157 L 13.247 20.957 L 13.247 20.757 C 13.341 20.257 13.809 19.857 14.277 19.857 L 14.84 19.857 C 18.864 19.857 21.954 18.157 22.89 13.157 C 23.358 11.057 23.172 9.357 22.048 8.157 C 21.767 7.757 21.298 7.457 20.924 7.157 L 20.924 7.157"
                }), sr("path", {
                    fill: a,
                    opacity: f,
                    d: "M 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.357 C 18.583 0.957 16.43 0.257 13.716 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.757 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 8.192 16.357 C 8.286 15.757 8.754 15.357 9.315 15.357 L 11.655 15.357 C 16.243 15.357 19.801 13.357 20.924 7.757 C 20.831 7.457 20.924 7.357 20.924 7.157"
                }), sr("path", {
                    fill: s,
                    opacity: h,
                    d: "M 9.504 7.157 C 9.596 6.857 9.784 6.557 10.065 6.357 C 10.251 6.357 10.345 6.257 10.532 6.257 L 16.711 6.257 C 17.461 6.257 18.208 6.357 18.772 6.457 C 18.958 6.457 19.146 6.457 19.333 6.557 C 19.52 6.657 19.707 6.657 19.801 6.757 C 19.894 6.757 19.987 6.757 20.082 6.757 C 20.362 6.857 20.643 7.057 20.924 7.157 C 21.204 5.057 20.924 3.657 19.801 2.257 C 18.677 0.857 16.525 0.257 13.809 0.257 L 5.758 0.257 C 5.29 0.257 4.729 0.657 4.634 1.257 L 1.358 23.457 C 1.358 23.857 1.639 24.357 2.107 24.357 L 6.975 24.357 L 8.286 16.057 L 9.504 7.157 Z"
                }))
            }
        }))
    }

    function ho(e) {
        var n, t = e.context,
            r = e.close,
            o = e.focus,
            i = e.event,
            a = e.frame,
            s = e.prerenderFrame,
            c = e.content,
            f = void 0 === c ? {} : c,
            p = e.autoResize,
            m = e.hideCloseButton,
            h = "paypal-overlay-" + ce(),
            g = function(e) {
                return function(n) {
                    i.on("zoid-display", (function() {
                        return fn(n, "show-" + e, ye)
                    })), i.on("zoid-close", (function() {
                        return fn(n, "hide-" + e, ye)
                    }))
                }
            };
        return a && s && (a.classList.add("component-frame"), s.classList.add("prerender-frame"), s.classList.add("visible"), a.classList.add("invisible"), i.on("zoid-rendered", (function() {
            s.classList.remove("visible"), s.classList.add("invisible"), a.classList.remove("invisible"), a.classList.add("visible"), setTimeout((function() {
                hn(s)
            }), 1)
        })), n = sr("div", {
            class: "outlet",
            onRender: function(e) {
                g("component")(e), p && function(e) {
                    i.on("zoid-resize", (function(n) {
                        var t = n.width,
                            r = n.height;
                        "number" == typeof t && (e.style.width = On(t)), "number" == typeof r && (e.style.height = On(r))
                    }))
                }(e)
            }
        }, sr("node", {
            el: a
        }), sr("node", {
            el: s
        }))), sr("div", {
            id: h,
            onRender: g("container"),
            class: "paypal-checkout-sandbox"
        }, sr("style", null, function(e) {
            var n = e.uid;
            return "\n        #" + n + ".paypal-checkout-sandbox {\n            display: block;\n            position: fixed;\n            top: 0;\n            left: 0;\n\n            width: 100%;\n            height: 100%;\n            width: 100vw;\n            height: 100vh;\n            max-width: 100%;\n            max-height: 100%;\n            min-width: 100%;\n            min-height: 100%;\n\n            z-index: 2147483647;\n\n            animation-duration: 0.3s;\n            animation-iteration-count: 1;\n            animation-fill-mode: forwards !important;\n            opacity: 0;\n        }\n\n        #" + n + ".paypal-checkout-sandbox .paypal-checkout-sandbox-iframe {\n            display: block;\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-container {\n            from {\n                opacity: 0;\n            }\n\n            to {\n                opacity: 1;\n            }\n        }\n\n        @keyframes hide-container {\n            from {\n                opacity: 1;\n            }\n\n            50% {\n                opacity: 1;\n            }\n\n            to {\n                opacity: 0;\n            }\n        }\n    "
        }({
            uid: h
        })), sr("iframe", {
            title: "PayPal Checkout Overlay",
            name: "__paypal_checkout_sandbox_" + h + "__",
            scrolling: "no",
            class: "paypal-checkout-sandbox-iframe"
        }, sr("html", null, sr("body", null, sr("div", {
            id: h,
            onClick: function(e) {
                var n, t;
                e.preventDefault(), e.stopPropagation(), void 0 === n && (n = l()), !(function(e) {
                    return void 0 === e && (e = l()), !!d(e) && (!! function(e) {
                        return void 0 === e && (e = l()), /\bGSA\b/.test(e)
                    }(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
                }(n) || function(e) {
                    return void 0 === e && (e = l()), !! function(e) {
                        return void 0 === e && (e = l()), /Android/.test(e)
                    }(e) && /Version\/[\d.]+/.test(e) && !u(e)
                }(n) || u(n) || function(e) {
                    return void 0 === e && (e = l()), /FxiOS/i.test(e)
                }(n) || function(e) {
                    return void 0 === e && (e = l()), /EdgiOS/i.test(e)
                }(n) || function(e) {
                    return void 0 === e && (e = l()), -1 !== e.indexOf("FBAN") || -1 !== e.indexOf("FBAV")
                }(n) || function(e) {
                    return void 0 === e && (e = l()), /QQBrowser/.test(e)
                }(n) || "undefined" != typeof process && process.versions && process.versions.electron || (t = l(), /Macintosh.*AppleWebKit(?!.*Safari)/i.test(t)) || !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches) && (d() ? window.alert("Please switch tabs to reactivate the PayPal window") : o())
            },
            class: "paypal-overlay-context-" + t + " paypal-checkout-overlay"
        }, !m && sr("a", {
            href: "#",
            class: "paypal-checkout-close",
            onClick: function(e) {
                e.preventDefault(), e.stopPropagation(), r()
            },
            "aria-label": "close",
            role: "button"
        }), sr("div", {
            class: "paypal-checkout-modal"
        }, sr("div", {
            class: "paypal-checkout-logo"
        }, sr(mo, {
            logoColor: "white"
        }), sr($r, {
            logoColor: "white"
        })), f.windowMessage && sr("div", {
            class: "paypal-checkout-message"
        }, f.windowMessage), f.continueMessage && sr("div", {
            class: "paypal-checkout-continue"
        }, sr("a", {
            onClick: o,
            href: "#"
        }, f.continueMessage)), sr("div", {
            class: "paypal-checkout-loader"
        }, sr("div", {
            class: "paypal-spinner"
        }))), sr("div", {
            class: "paypal-checkout-iframe-container"
        }, n), sr("style", null, function(e) {
            var n = e.uid;
            return "\n        #" + n + " {\n            position: absolute;\n            z-index: 2147483647;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n\n            transform: translate3d(0, 0, 0);\n\n            background-color: black;\n            background-color: rgba(0, 0, 0, 0.8);\n            background: radial-gradient(50% 50%, ellipse closest-corner, rgba(0,0,0,0.6) 1%, rgba(0,0,0,0.8) 100%);\n\n            color: #fff;\n        }\n\n        #" + n + " a {\n            color: #fff;\n        }\n\n        #" + n + " .paypal-checkout-close:before,\n        #" + n + " .paypal-checkout-close:after {\n            background-color: #fff;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.POPUP + " {\n            cursor: pointer;\n        }\n\n        #" + n + " a {\n            text-decoration: none;\n        }\n\n        #" + n + ' .paypal-checkout-modal {\n            font-family: "HelveticaNeue", "HelveticaNeue-Light", "Helvetica Neue Light", helvetica, arial, sans-serif;\n            font-size: 14px;\n            text-align: center;\n\n            box-sizing: border-box;\n            max-width: 350px;\n            top: 50%;\n            left: 50%;\n            position: absolute;\n            transform: translateX(-50%) translateY(-50%);\n            cursor: pointer;\n            text-align: center;\n        }\n\n        #' + n + ".paypal-overlay-loading .paypal-checkout-message, #" + n + ".paypal-overlay-loading .paypal-checkout-continue {\n            display: none;\n        }\n\n        .paypal-checkout-loader {\n            display: none;\n        }\n\n        #" + n + ".paypal-overlay-loading .paypal-checkout-loader {\n            display: block;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo {\n            cursor: pointer;\n            margin-bottom: 30px;\n            display: inline-block;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo img {\n            height: 36px;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-logo img.paypal-checkout-logo-pp {\n            margin-right: 10px;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-message {\n            font-size: 15px;\n            line-height: 1.5;\n            padding: 10px 0;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-message, #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-continue {\n            display: none;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-continue {\n            font-size: 15px;\n            line-height: 1.35;\n            padding: 10px 0;\n            font-weight: bold;\n        }\n\n        #" + n + " .paypal-checkout-modal .paypal-checkout-continue a {\n            border-bottom: 1px solid white;\n        }\n\n        #" + n + " .paypal-checkout-close {\n            position: absolute;\n            right: 16px;\n            top: 16px;\n            width: 16px;\n            height: 16px;\n            opacity: 0.6;\n        }\n\n        #" + n + ".paypal-overlay-loading .paypal-checkout-close {\n            display: none;\n        }\n\n        #" + n + " .paypal-checkout-close:hover {\n            opacity: 1;\n        }\n\n        #" + n + " .paypal-checkout-close:before, .paypal-checkout-close:after {\n            position: absolute;\n            left: 8px;\n            content: ' ';\n            height: 16px;\n            width: 2px;\n        }\n\n        #" + n + " .paypal-checkout-close:before {\n            transform: rotate(45deg);\n        }\n\n        #" + n + " .paypal-checkout-close:after {\n            transform: rotate(-45deg);\n        }\n\n        #" + n + " .paypal-checkout-iframe-container {\n            display: none;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-iframe-container,\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-iframe-container > .outlet,\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-iframe-container > .outlet > iframe {\n            max-height: 95vh;\n            max-width: 95vw;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-iframe-container {\n\n            display: block;\n\n            position: absolute;\n\n            top: 50%;\n            left: 50%;\n\n            min-width: 450px;\n\n            transform: translate(-50%, -50%);\n            transform: translate3d(-50%, -50%, 0);\n\n            border-radius: 10px;\n            overflow: hidden;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet {\n\n            position: relative;\n\n            transition: all 0.3s ease;\n            animation-duration: 0.3s;\n            animation-fill-mode: forwards !important;\n\n            min-width: 450px;\n            max-width: 450px;\n            width: 450px;\n            height: 535px;\n\n            background-color: white;\n\n            overflow: auto;\n\n            opacity: 0;\n            transform: scale3d(.3, .3, .3);\n\n            -webkit-overflow-scrolling: touch;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            transition: opacity .4s ease-in-out;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet > iframe.component-frame {\n            z-index: 100;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet > iframe.prerender-frame {\n            z-index: 200;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet > iframe.visible {\n            opacity: 1;\n            z-index: 200;\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet > iframe.invisible {\n            opacity: 0;\n            z-index: 100;\n        }\n\n        @media screen and (max-width: 470px) {\n\n            #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .paypal-checkout-iframe-container,\n            #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet {\n                min-width: 100%;\n                min-width: calc(100% - 20px);\n\n                max-width: 100%;\n                max-width: calc(100% - 20px);\n            }\n        }\n\n        #" + n + ".paypal-overlay-context-" + mr.IFRAME + " .outlet iframe {\n            width: 1px;\n            min-width: 100%;\n            height: 100%;\n        }\n\n        @keyframes show-component {\n            from {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n\n            to {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n        }\n\n        @keyframes hide-component {\n            from {\n                opacity: 1;\n                transform: scale3d(1, 1, 1);\n            }\n\n            to {\n                opacity: 0;\n                transform: scale3d(.3, .3, .3);\n            }\n        }\n\n        .paypal-spinner {\n            height: 30px;\n            width: 30px;\n            display: inline-block;\n            box-sizing: content-box;\n            opacity: 1;\n            filter: alpha(opacity=100);\n            animation: rotation .7s infinite linear;\n            border-left: 8px solid rgba(0, 0, 0, .2);\n            border-right: 8px solid rgba(0, 0, 0, .2);\n            border-bottom: 8px solid rgba(0, 0, 0, .2);\n            border-top: 8px solid #fff;\n            border-radius: 100%\n        }\n\n        @keyframes rotation {\n            from {\n                transform: rotate(0deg)\n            }\n            to {\n                transform: rotate(359deg)\n            }\n        }\n    "
        }({
            uid: h
        })))))))
    }(Xr = {}).default = {
        main: "#005DA0",
        card: "#AEB1BC"
    }, Xr.white = {
        main: "#FFFFFF",
        card: "#FFFFFF"
    }, Xr.black = {
        main: "#333030",
        card: "#333030"
    }, (Qr = {}).default = {
        primary: "#FFFFFF",
        secondary: "#EB6F93"
    }, Qr.white = {
        primary: "#FFFFFF",
        secondary: "#2C2E2F"
    }, Qr.black = {
        primary: "#FFFFFF",
        secondary: "#EB6F93"
    }, (eo = {}).default = {
        primary: "#3D93CE"
    }, eo.blue = {
        primary: "#3D93CE"
    }, eo.white = {
        primary: "#ffffff"
    }, eo.black = {
        primary: "#333030"
    }, (no = {}).default = {
        primary: "#ffffff"
    }, no.blue = {
        primary: "#003087"
    }, no.white = {
        primary: "#ffffff"
    }, no.black = {
        primary: "#333030"
    }, (to = {}).default = {
        primary: "#1AAD19",
        secondary: "#4D4D4D"
    }, to.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, to.black = {
        primary: "#333030",
        secondary: "#333030"
    }, (ro = {}).default = {
        primary: "#00A599"
    }, ro.white = {
        primary: "#FFFFFF"
    }, ro.black = {
        primary: "#00A599"
    }, (oo = {}).default = {
        primary: "#A6d71c",
        secondary: "#3C932A",
        tertiary: "#6CC62E",
        quaternary: "#278D30"
    }, oo.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#000000",
        quaternary: "#FFFFFF"
    }, oo.black = {
        primary: "#333030",
        secondary: "#333030",
        tertiary: "#ffffff",
        quaternary: "#333030"
    }, (io = {}).default = {
        primary: "#FFFFFF",
        secondary: "#CACCC8",
        tertiary: "#2D59A1",
        quaternary: "#1F3364",
        quinary: "#4E4E4E",
        senary: "#1B4482"
    }, io.white = {
        primary: "#FFFFFF",
        secondary: "#CACCC8",
        tertiary: "#2D59A1",
        quaternary: "#1F3364",
        quinary: "#4E4E4E",
        senary: "#1B4482"
    }, io.black = {
        primary: "#000000",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        quaternary: "#FFFFFF",
        quinary: "#000000",
        senary: "#000000"
    }, (ao = {}).default = {
        primary: "#4D4D4F",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#E83E49",
        quinary: "#FF00FF",
        senary: "#FFFFFF"
    }, ao.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        tertiary: "#000000",
        quaternary: "#000000",
        quinary: "#000000",
        senary: "#000000"
    }, ao.black = {
        primary: "#4D4D4F",
        secondary: "#000000",
        tertiary: "#FF0000",
        quaternary: "#E83E49",
        quinary: "#FF00FF",
        senary: "#FFFFFF"
    }, (so = {}).default = {
        primary: "#020202",
        secondary: "#64CC07"
    }, so.white = {
        primary: "#FFFFFF",
        secondary: "#FFFFFF"
    }, so.black = {
        primary: "#000000",
        secondary: "#000000"
    }, (co = {}).default = {
        primary: "#EC1D24",
        secondary: "#EDA42D",
        tertiary: "#FEFEFE"
    }, co.white = {
        primary: "#EC1D24",
        secondary: "#EDA42D",
        tertiary: "#FEFEFE"
    }, co.black = {
        primary: "#EC1D24",
        secondary: "#EDA42D",
        tertiary: "#FEFEFE"
    }, (lo = {}).default = {
        primary: "#1A1919",
        secondary: "#FFFFFE"
    }, lo.white = {
        primary: "#1A1919",
        secondary: "#FFFFFE"
    }, lo.black = {
        primary: "#1A1919",
        secondary: "#FFFFFE"
    }, (uo = {}).default = {
        primary: "#004A91",
        secondary: "#ED1921"
    }, uo.white = {
        primary: "#004A91",
        secondary: "#ED1921"
    }, uo.black = {
        primary: "#004A91",
        secondary: "#ED1921"
    }, (fo = {}).default = {
        primary: "#2D3277",
        secondary: "#FFFFFF",
        tertiary: "#009EE3",
        quaternary: "#009EE3"
    }, fo.white = {
        primary: "#FFFFFF",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        quaternary: "#000000"
    }, fo.black = {
        primary: "#2D3277",
        secondary: "#FFFFFF",
        tertiary: "#009EE3",
        quaternary: "#009EE3"
    };

    function go() {
        return "https://www.paypal.com/webapps/helios"
    }

    function yo() {
        return ge(yo, (function() {
            var e = Ur({
                tag: "three-domain-secure",
                url: go,
                attributes: {
                    iframe: {
                        scrolling: "no"
                    }
                },
                containerTemplate: function(e) {
                    var n = e.doc;
                    return sr(ho, {
                        context: e.context,
                        close: e.close,
                        focus: e.focus,
                        event: e.event,
                        frame: e.frame,
                        prerenderFrame: e.prerenderFrame,
                        content: e.props.content
                    }).render(lr({
                        doc: n
                    }))
                },
                props: {
                    action: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return "verify"
                        }
                    },
                    xcomponent: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return "1"
                        }
                    },
                    flow: {
                        type: "string",
                        queryParam: !0,
                        value: function() {
                            return "3ds"
                        }
                    },
                    createOrder: {
                        type: "function",
                        queryParam: "cart_id",
                        queryValue: function(e) {
                            return E.try(e.value)
                        }
                    },
                    clientID: {
                        type: "string",
                        value: Bn,
                        queryParam: !0
                    },
                    onSuccess: {
                        type: "function",
                        alias: "onContingencyResult",
                        decorate: function(e) {
                            var n = e.value,
                                t = e.onError;
                            return function(e, r) {
                                return e ? t(e) : n(r)
                            }
                        }
                    },
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        sendToChild: !1,
                        value: et
                    },
                    content: {
                        type: "object",
                        required: !1
                    },
                    userType: {
                        type: "string",
                        required: !1
                    }
                }
            });
            return e.isChild() && (window.xchild = {
                props: e.xprops,
                close: ye
            }), e
        }))
    }

    function wo(e) {
        if ($n()) return e
    }
    var vo = {
            __get__: function() {
                return wo(yo())
            }
        },
        _o = {
            __get__: function() {
                return wo(o)
            }
        },
        xo = t(2),
        bo = t.n(xo);

    function Eo() {
        return "production"
    }

    function Ao() {
        return Hn()[0] || "client-id:" + Bn()
    }

    function Co() {
        return Hn()[0] && "client-id:" + Bn()
    }

    function Po() {
        return Fn()
    }

    function So() {
        return Dn("currency")
    }

    function Ro() {
        return et()
    }

    function Oo() {
        return Gn()
    }

    function To() {
        return "1.19.0"
    }
    var Io = t(8),
        ko = t.n(Io),
        Lo = t(5),
        zo = t.n(Lo),
        No = t(74),
        Mo = t.n(No),
        Fo = t(0),
        jo = t.n(Fo);

    function Wo(e) {
        var n = new Map;
        return function() {
            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            var i = JSON.stringify(r);
            return n.has(i) || n.set(i, e.apply(void 0, r)), n.get(i)
        }
    }

    function Do(e, n) {
        var t = new Map;
        return function(r, o) {
            void 0 === o && (o = !1);
            var i = JSON.stringify(n.map((function(e) {
                return r[e]
            })));
            return t.has(i) && !o || t.set(i, e(r)), t.get(i)
        }
    }

    function qo(e) {
        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
        return function() {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return e.apply(void 0, t.concat(r))
        }
    }

    function Bo(e, n) {
        return void 0 === n && (n = e.length),
            function t() {
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return o.length < n ? function() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    return t.apply(void 0, o.concat(n))
                } : e.apply(void 0, o)
            }
    }

    function Ho(e) {
        return function(n) {
            var t = e(n);
            return "object" == typeof t && t.then ? t.then((function() {
                return n
            })) : n
        }
    }

    function Go() {
        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
        return function(e) {
            return n.reduce((function(e, n) {
                return n(e)
            }), e)
        }
    }
    var Uo = Bo((function(e, n) {
            return n[e]
        })),
        Yo = Bo((function(e, n) {
            var t;
            return (t = {})[e] = n, t
        })),
        Vo = t(3),
        Ko = t.n(Vo);

    function Jo(e) {
        return bo()(e).reduce((function(e, n) {
            var t, r, o, i = n[0],
                a = n[1];
            return Array.isArray(a) ? m({}, e, ((r = {})[i] = [].concat(a), r)) : m({}, e, "object" == typeof a ? ((o = {})[i] = Jo(a), o) : ((t = {})[i] = a, t))
        }), {})
    }

    function Zo(e, n) {
        return function e(n, t) {
            return bo()(t).reduce((function(t, r) {
                var o, i, a, s, c = r[0],
                    l = r[1];
                return Array.isArray(l) ? m({}, t, ((i = {})[c] = [].concat(l), i)) : "object" != typeof l || null === l || n[c] && "object" == typeof n[c] && !Array.isArray(n[c]) ? m({}, t, "object" == typeof l && null !== l ? ((s = {})[c] = e(n[c], l), s) : ((o = {})[c] = l, o)) : m({}, t, ((a = {})[c] = Jo(l), a))
            }), n)
        }(Jo(e), n)
    }

    function $o(e, n) {
        return n.split(".").reduce((function(e, n) {
            return "object" == typeof e || "function" == typeof e ? e[n] : void 0
        }), e)
    }

    function Xo(e, n, t) {
        var r;
        void 0 === t && (t = "-");
        var o, i = e.indexOf(t);
        if (-1 === i) return (o = {})[e] = n, o;
        var a = e.slice(0, i),
            s = e.slice(i + 1);
        return (r = {})[a] = Xo(s, n, t), r
    }
    var Qo = function(e) {
        var n;
        return null == e || null == (n = e.ownerDocument) ? void 0 : n.defaultView
    };

    function ei(e) {
        return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName
    }

    function ni(e) {
        var n = {
                buyercountry: "buyerCountry",
                onclick: "onClick",
                onapply: "onApply",
                onrender: "onRender",
                "style-text-fontfamily": "style-text-fontFamily",
                "style-text-fontsource": "style-text-fontSource"
            },
            t = ["onclick", "onapply", "onrender"],
            r = zo()(e.attributes).filter((function(e) {
                var n = e.nodeName;
                return jo()(n, "data-pp-")
            })).reduce((function(e, r) {
                var o = r.nodeValue;
                if (o) {
                    var i, a = r.nodeName.replace("data-pp-", ""),
                        s = t.includes(a) ? new Function(o) : o;
                    return Zo(e, function(e, n) {
                        if (jo()(n, "[")) try {
                            return Xo(e, JSON.parse(n.replace(/'/g, '"')))
                        } catch (e) {}
                        return Xo(e, n)
                    }(null != (i = n[a]) ? i : a, s))
                }
                return e
            }), {});
        if (!e.firstElementChild || "SCRIPT" !== e.firstElementChild.tagName || "text/template" !== e.firstElementChild.getAttribute("type")) return r;
        var o = e.firstElementChild.textContent.trim();
        return e.removeChild(e.firstElementChild), Zo(r, {
            style: {
                markup: o
            }
        })
    }
    var ti = Bo((function(e, n, t) {
            return n.getElementsByClassName(e + "__" + t)[0]
        })),
        ri = Bo((function(e, n) {
            var t = document.createElement("style");
            t.textContent = n, e.insertBefore(t, e.firstChild)
        })),
        oi = Bo((function(e, n) {
            if (Array.isArray(n)) n.forEach((function(n) {
                return e.appendChild(n)
            }));
            else if (n instanceof HTMLElement) e.appendChild(n);
            else if ("string" == typeof n) {
                var t = document.createElement("span");
                t.innerHTML = n, e.appendChild(t)
            } else !1 === n && e.parentNode.removeChild(e)
        })),
        ii = Bo((function(e, n) {
            if (Array.isArray(n))[].concat(n).reverse().forEach((function(n) {
                return e.insertBefore(n, e.firstChild)
            }));
            else if (n instanceof HTMLElement) e.insertBefore(n, e.firstChild);
            else if ("string" == typeof n) {
                var t = document.createElement("span");
                t.innerHTML = n, e.insertBefore(t, e.firstChild)
            } else !1 === n && e.parentNode.removeChild(e)
        })),
        ai = Bo((function(e, n, t, r) {
            if (void 0 === t && (t = "PayPal Credit"), void 0 === r && (r = ""), Array.isArray(n)) n.forEach((function(n) {
                return ai(e, n, t)
            }));
            else if ("string" == typeof n) {
                var o = new Image;
                o.alt = t, o.className = "message__logo", o.src = n, r && (o.srcset = r), e.appendChild(o)
            } else if ("object" == typeof n) {
                var i = n.src,
                    a = n.dimensions,
                    s = a[0],
                    c = a[1],
                    l = new Image;
                l.src = i, l.alt = t;
                var u = document.createElement("div");
                u.className = "message__logo message__logo--svg";
                var d = document.createElement("canvas");
                d.height = c, d.width = s, u.appendChild(l), u.appendChild(d), e.appendChild(u)
            } else e.parentNode.removeChild(e)
        }), 2),
        si = function(e) {
            return new E((function(n) {
                "IFRAME" === e.tagName && "complete" !== e.contentWindow.document.readyState ? e.addEventListener("load", n) : n()
            }))
        };

    function ci(e) {
        var n = e.getBoundingClientRect(),
            t = Qo(e),
            r = (n.top + n.bottom) / 2,
            o = (n.left + n.right) / 2;
        return !(r > t.innerHeight || r < 0 || o > t.innerWidth || o < 0)
    }

    function li(e) {
        return "string" == typeof e ? zo()(document.querySelectorAll(e)) : ei(e) ? [e] : Array.isArray(e) && e.every(ei) ? Mo()(e, li) : []
    }
    var ui = function(e, n) {
            if ((null == e ? void 0 : e.nodeType) !== Node.ELEMENT_NODE || (null == n ? void 0 : n.nodeType) !== Node.ELEMENT_NODE) return !1;
            var t = e.getBoundingClientRect(),
                r = n.getBoundingClientRect();
            return t.top <= r.top && t.bottom >= r.bottom && t.left <= r.left && t.right >= r.right
        },
        di = t(75),
        fi = t.n(di),
        pi = t(36),
        mi = t.n(pi),
        hi = t(11),
        gi = t.n(hi),
        yi = t(76),
        wi = t.n(yi),
        vi = t(7),
        _i = t.n(vi);

    function xi(e) {
        void 0 === e && (e = {});
        var n = m({}, e);
        return [n, qo(gi.a, n)]
    }

    function bi(e, n) {
        var t = ko()(e, (function(e) {
            var t = e[1];
            return Ko()(t, n)
        }));
        if (t) return t[0];
        if (_i()(n, ".")) {
            var r = n.split(".", 1)[0];
            if (t = ko()(e, (function(e) {
                    var n = e[1];
                    return Ko()(n, r)
                }))) return t[0]
        }
        return (t = ko()(e, (function(e) {
            var n = e[1];
            return Ko()(n, "default")
        }))) ? t[0] : ""
    }

    function Ei(e, n, t) {
        var r = void 0 === t ? {} : t,
            o = r.data,
            i = r.headers,
            a = r.withCredentials;
        return new E((function(t, r) {
            var s = new XMLHttpRequest;
            a && (s.withCredentials = !0), s.onreadystatechange = function() {
                if (4 === s.readyState) {
                    var e = s.getAllResponseHeaders().trim().split("\n").reduce((function(e, n) {
                        var t, r = n.trim().split(": "),
                            o = r[1];
                        return m({}, e, ((t = {})[r[0].toLowerCase()] = o, t))
                    }), {});
                    switch (s.status) {
                        case 200:
                            t({
                                headers: e,
                                data: e["content-type"] && _i()(e["content-type"], "application/json") ? JSON.parse(s.responseText) : s.responseText
                            });
                            break;
                        case 204:
                            t({
                                headers: e
                            });
                            break;
                        default:
                            r(new Error("Request failed"))
                    }
                }
            }, s.open(e, n, !0), i && bo()(i).forEach((function(e) {
                s.setRequestHeader(e[0], e[1])
            })), s.send("object" == typeof o ? JSON.stringify(o) : o)
        }))
    }
    var Ai = Wo((function(e) {
            return new E((function(n) {
                var t = document.createElement("script");
                t.src = e, t.addEventListener("load", (function() {
                    document.body.removeChild(t), n()
                })), "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", (function() {
                    return document.body.appendChild(t)
                })) : document.body.appendChild(t)
            }))
        })),
        Ci = function() {
            return (new Date).getTime()
        },
        Pi = Wo((function() {
            var e = document.head.querySelector('meta[name="viewport"]') || sr("meta", {
                name: "viewport",
                content: ""
            }).render(lr({
                doc: document
            }));
            return e.parentNode || document.head.appendChild(e), [function() {
                var n, t, r;
                e.__pp_prev_content__ || (e.__pp_prev_content__ = null != (n = e.getAttribute("content")) ? n : "", e.setAttribute("content", "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, shrink-to-fit=no"), document.body.__pp_prev_overflow__ = null != (t = document.body.style.overflow) ? t : "", document.body.__pp_prev_msOverflowStyle__ = null != (r = document.body.style.msOverflowStyle) ? r : "", document.body.style.setProperty("overflow", "hidden"), document.body.style.setProperty("-ms-overflow-style", "scrollbar"))
            }, function() {
                e.setAttribute("content", e.__pp_prev_content__), delete e.__pp_prev_content__, document.body.style.setProperty("overflow", document.body.__pp_prev_overflow__), document.body.style.setProperty("-ms-overflow-style", document.body.__pp_prev_msOverflowStyle__), delete document.body.__pp_prev_overflow__, delete document.body.__pp_prev_msOverflowStyle__
            }]
        })),
        Si = "__paypal_messages_" + "1.19.0".replace(/[.-]/g, "_") + "__",
        Ri = function() {
            return {
                index: 1,
                config: {},
                messagesMap: new wi.a
            }
        },
        Oi = xi(window[Si] || Ri()),
        Ti = Oi[0],
        Ii = Oi[1];
    Object.defineProperty(window, Si, {
        value: Ti,
        enumerable: !1,
        configurable: !0,
        writable: !1
    });
    var ki = Object({
            __LOCAL__: "https://localhost.paypal.com:8000",
            __STAGE__: "https://www.msmaster.qa.paypal.com",
            __SANDBOX__: "https://www.sandbox.paypal.com",
            __PRODUCTION__: "https://www.paypal.com",
            __RAMP_EXPERIMENT__: Object({
                __LOCAL__: "https://www.paypalobjects.com",
                __STAGE__: "https://www.paypalobjects.com",
                __SANDBOX__: "https://www.paypalobjects.com",
                __PRODUCTION__: "https://www.paypalobjects.com"
            })
        }),
        Li = Object({
            __RAMP_EXPERIMENT__: "/upstream/assets/messaging/modal/ramp-experiment-ssr.json",
            __MESSAGE_A__: "/credit-presentment/messages",
            __MESSAGE_B__: "/credit-presentment/smart/message",
            __MODAL__: "/credit-presentment/smart/modal",
            __LOGGER_A__: "/ppcredit/messagingLogger",
            __LOGGER_B__: "/credit-presentment/log"
        });

    function zi(e) {
        var n = "__" + "production".toUpperCase() + "__",
            t = "__" + e.toUpperCase() + "__";
        return "" + (ki[t] && ki[t][n] || ki[n]) + Li[t]
    }

    function Ni(e, n) {
        return window[Si][e] || (window[Si][e] = n()), window[Si][e]
    }
    var Mi = Re(),
        Fi = {
            type: "exclusion",
            list: []
        },
        ji = Wo((function() {
            return Ei("GET", zi("RAMP_EXPERIMENT")).then((function(e) {
                var n;
                return null != (n = null == e ? void 0 : e.data) ? n : Fi
            })).catch((function() {
                return Fi
            }))
        })),
        Wi = function(e) {
            return ji().then((function(n) {
                var t = n.type,
                    r = n.list,
                    o = fi()(e) ? e : [e];
                switch (t) {
                    case "inclusion":
                        return o.some((function(e) {
                            return Ko()(r, e)
                        })) ? "TEST" : "CONTROL";
                    case "exclusion":
                        return o.some((function(e) {
                            return Ko()(r, e)
                        })) ? "CONTROL" : "TEST";
                    default:
                        return "CONTROL"
                }
            }))
        },
        Di = Zn({
            url: zi("LOGGER_B"),
            prefix: "paypal_messages",
            logLevel: "warn",
            flushInterval: 1e4,
            transport: function(e) {
                var n = e.url,
                    t = e.method,
                    r = e.json,
                    o = e.headers,
                    i = r.events.map((function(e) {
                        return e.payload.index
                    })).concat(r.tracking.map((function(e) {
                        return e.index
                    }))),
                    a = mi()(r.meta).filter((function(e) {
                        return i.includes(e.includes("modal") ? e.replace("modal-", "") : e)
                    })).reduce((function(e, n) {
                        var t;
                        return m({}, e, ((t = {})[n] = r.meta[n], t))
                    }), {});
                return Ei(t, n, {
                    headers: m({
                        "content-type": "application/json"
                    }, o),
                    data: {
                        meta: a,
                        events: r.events,
                        tracking: r.tracking
                    },
                    withCredentials: !0
                })
            }
        });
    Di.addPayloadBuilder((function(e) {
        return delete e.container, delete e.selector, {}
    })), Di.addTrackingBuilder((function() {
        return {
            timestamp: (new Date).getTime()
        }
    }));
    var qi = new E((function(e) {
            return Mi.once("render", e)
        })),
        Bi = new E((function(e) {
            return "undefined" != typeof document && "complete" !== document.readyState ? window.addEventListener("load", e) : e()
        })),
        Hi = Ni("__insertion_observer__", (function() {
            return new MutationObserver((function(e) {
                var n = [];
                e.forEach((function(e) {
                    "attributes" === e.type && "data-pp-message" === e.attributeName ? n.push(e.target) : e.addedNodes.forEach((function(e) {
                        ei(e) && e.hasAttribute("data-pp-message") && n.push(e)
                    }))
                })), n.forEach((function(e) {
                    var n;
                    return null == (n = window[Oo()]) ? void 0 : n.Messages({
                        _auto: !0
                    }).render(e)
                }))
            }))
        })),
        Gi = Ni("__attribute_observer__", (function() {
            return new MutationObserver((function(e) {
                var n = Ti.messagesMap;
                e.reduce((function(e, t) {
                    return n.has(t.target) && jo()(t.attributeName, "data-pp-") ? (e.push(t.target), e) : e
                }), []).forEach((function(e) {
                    var n;
                    return null == (n = window[Oo()]) ? void 0 : n.Messages().render(e)
                }))
            }))
        })),
        Ui = Ni("__intersection_observer__", (function() {
            return E.resolve(void 0 === window.IntersectionObserver ? Ai("https://polyfill.io/v3/polyfill.js?features=IntersectionObserver") : void 0).then((function() {
                return E.all([Bi, qi])
            })).then((function() {
                var e = function(e) {
                    for (var n = Qo(e).innerHeight, t = [], r = e;
                        (null == (o = r) ? void 0 : o.parentNode.nodeType) === Node.ELEMENT_NODE;) {
                        var o;
                        t.push(r.parentNode), r = r.parentNode
                    }
                    return ko()(t.reverse(), (function(e, t, r) {
                        var o = e.offsetHeight,
                            i = r[t + 1];
                        return o > n || i && i.offsetHeight < o && ui(e.parentNode, e)
                    }))
                }(Ti.messagesMap.keys().next().value);
                return new IntersectionObserver((function(n, t) {
                    var r = Ti.messagesMap;
                    n.forEach((function(n) {
                        var o, i = n.target,
                            a = i.parentNode.parentNode,
                            s = (r.get(a) || {}).state;
                        if (null != s && s.renderStart) {
                            var c, l = a.getAttribute("data-pp-id"),
                                u = Number(i.getAttribute("data-width")),
                                d = Number(i.getAttribute("data-height")),
                                f = Ci() - s.renderStart;
                            0 === (null == (o = n.rootBounds) ? void 0 : o.width) && 0 === n.rootBounds.height && (c = ui(e, n.target)), (n.intersectionRatio < .9 || Math.ceil(n.boundingClientRect.width) < u) && !c ? ("smallest" === a.getAttribute("data-pp-style-preset") ? (Di.warn(s.renderComplete ? "update_hidden" : "hidden", {
                                description: "PayPal Message has been hidden. Fallback message must be visible and requires minimum dimensions of " + u + "px x " + d + "px. Current container is " + n.intersectionRect.width + "px x " + n.intersectionRect.height + "px.",
                                container: a,
                                index: l,
                                duration: f
                            }), Di.track({
                                index: l,
                                et: "CLIENT_IMPRESSION",
                                event_type: "message_hidden"
                            }), s.renderComplete = !0, delete s.renderStart) : (a.setAttribute("data-pp-style-preset", "smallest"), Di.warn(s.renderComplete ? "update_overflow" : "overflow", {
                                description: "PayPal Message attempting fallback. Message must be visible and requires minimum dimensions of " + u + "px x " + d + "px. Current container is " + n.intersectionRect.width + "px x " + n.intersectionRect.height + "px.",
                                container: a,
                                index: l,
                                duration: f
                            })), i.style.setProperty("opacity", "0", "important"), i.style.setProperty("pointer-events", "none", "important"), t.unobserve(i)) : (i.style.setProperty("opacity", 1), i.style.setProperty("pointer-events", null), Di.info(s.renderComplete ? "update_visible" : "visible", {
                                index: l,
                                duration: f
                            }), s.renderComplete = !0, delete s.renderStart, t.unobserve(i))
                        } else t.unobserve(i)
                    }))
                }), {
                    root: e
                })
            }))
        })),
        Yi = new Map,
        Vi = function(e) {
            return Yi.forEach((function(n) {
                return n(e)
            }))
        };
    var Ki = t(37),
        Ji = t.n(Ki),
        Zi = t(28);

    function $i(e, n) {
        switch (e) {
            case "STRING":
                return "string" == typeof n;
            case "BOOLEAN":
                return "boolean" == typeof n;
            case "NUMBER":
                return "number" == typeof n && !Ji()(n);
            case "FUNCTION":
                return "function" == typeof n;
            case "ARRAY":
                return Array.isArray(n);
            case "OBJECT":
                return !Array.isArray(n) && "object" == typeof n && null !== n;
            case "ANY":
                return !0;
            default:
                return !1
        }
    }
    var Xi = Wo((function(e, n) {
            return Di.warn("invalid_option_value", {
                description: n,
                location: e
            })
        })),
        Qi = function(e, n, t) {
            var r = Array.isArray(t) ? "array" : typeof t;
            Xi(e, 'Expected type "' + n.toLowerCase() + '" but instead received "' + r + '" (' + JSON.stringify(t) + ").")
        },
        ea = function(e, n, t) {
            return Xi(e, 'Expected one of ["' + n.join('", "').replace(/\|[\w|]+/g, "") + '"] but received "' + t + '".')
        },
        na = {
            account: function(e) {
                var n = e.props.account;
                if ($i("STRING", n)) {
                    if (13 === n.length || 10 === n.length || jo()(n, "client-id:")) return n;
                    Xi("account", "Ensure the correct Merchant Account ID has been entered.")
                } else Qi("account", "STRING", n)
            },
            merchantId: function(e) {
                var n = e.props.merchantId;
                if (void 0 !== n)
                    if ($i("STRING", n)) {
                        if (13 === n.length || 10 === n.length) return n;
                        Xi("merchantId", "Ensure the correct Merchant ID has been entered.")
                    } else Qi("merchantId", "STRING", n)
            },
            amount: function(e) {
                var n = e.props.amount;
                if (void 0 !== n) {
                    var t = Number(n);
                    if ($i("NUMBER", t)) {
                        if (!(t < 0)) return t;
                        Xi("amount", "Ensure value is a positive number.")
                    } else Qi("amount", "NUMBER", n)
                }
            },
            offer: function(e) {
                var n = e.props.offer;
                if (void 0 !== n)
                    if ($i("STRING", n)) {
                        if ("NI" === n) return n;
                        Xi("offer", "Ensure valid offer type.")
                    } else Qi("offer", "STRING", n)
            },
            style: function(e) {
                var n = e.props.style;
                if ($i("OBJECT", n)) {
                    var t = null != n && n.layout ? n : m({}, n, {
                        layout: "text"
                    });
                    if ($i("STRING", t.layout)) return t;
                    if (Qi("style.layout", "STRING", t.layout), $i("STRING", t.preset)) return m({
                        layout: "text"
                    }, t)
                } else void 0 !== n && Qi("style", "OBJECT", n);
                return {
                    layout: "text"
                }
            },
            currency: function(e) {
                var n = e.props.currency;
                if (void 0 !== n)
                    if ($i("STRING", n)) {
                        if (Ko()(Zi.currencyOptions, n)) return n;
                        ea("currency", Zi.currencyOptions, n)
                    } else Qi("currency", "STRING", n)
            },
            placement: function(e) {
                var n = e.props.placement;
                if (void 0 !== n) {
                    var t = ["home", "category", "product", "cart", "payment"];
                    if ($i("STRING", n)) {
                        if (Ko()(t, n)) return n;
                        ea("placement", t, n)
                    } else Qi("placement", "STRING", n)
                }
            },
            buyerCountry: function(e) {
                var n = e.props.buyerCountry;
                if (void 0 !== n)
                    if ($i("STRING", n)) {
                        if (Ko()(Zi.localeOptions, n)) return n;
                        ea("buyerCountry", Zi.localeOptions, n)
                    } else Qi("buyerCountry", "STRING", n)
            },
            ignoreCache: function(e) {
                var n = e.props.ignoreCache;
                if (void 0 !== n) {
                    if ($i("BOOLEAN", n)) return n;
                    Qi("ignoreCache", "BOOLEAN", n)
                }
            }
        },
        ta = function(e) {
            var n = e.uid,
                t = e.frame,
                r = e.prerenderFrame,
                o = e.doc,
                i = e.event,
                a = e.props,
                s = e.container;
            i.on("zoid-rendered", (function() {
                r.parentNode.removeChild(r)
            }));
            var c = "\n        #" + n + " > iframe {\n            width: 100%;\n            height: 0;\n        }\n\n        #" + n + " > iframe:nth-of-type(2) {\n            display: none;\n        }\n    ";
            return i.on("styles", (function(e) {
                var t = e.styles;
                "string" == typeof t && (s.querySelector("#" + n + " style").textContent = "\n                " + c + "\n                " + t.replace(/\.pp-flex[^\s:,.#]*/g, "#" + n) + "\n            ")
            })), sr("span", {
                id: n
            }, sr("style", null, c), sr("node", {
                el: t,
                onRender: function(e) {
                    i.on("zoid-resize", (function(n) {
                        var t = n.width,
                            r = n.height;
                        0 === t && 0 === r || ("flex" === a.style.layout ? (e.style.setProperty("height", null), e.setAttribute("data-width", 0), e.setAttribute("data-height", 0)) : (e.setAttribute("data-width", t), e.setAttribute("data-height", r), "number" == typeof r && e.style.setProperty("height", r + "px")), e.__hasResizedBefore__ ? i.once("styles", (function() {
                            Ui.then((function(n) {
                                n.observe(e)
                            }))
                        })) : (e.__hasResizedBefore__ = !0, Ui.then((function(n) {
                            n.observe(e)
                        }))))
                    }))
                }
            }), sr("node", {
                el: r
            })).render(lr({
                doc: o
            }))
        },
        ra = Ni("__paypal_credit_message__", (function() {
            return Ur({
                tag: "paypal-message",
                url: zi("MESSAGE_B"),
                domain: /\.paypal\.com(:\d+)?$/,
                containerTemplate: ta,
                autoResize: {
                    width: !0,
                    height: !0,
                    element: "button"
                },
                attributes: {
                    iframe: {
                        scrolling: "no"
                    }
                },
                props: {
                    account: {
                        type: "string",
                        queryParam: !1,
                        required: !0,
                        value: na.account
                    },
                    merchantId: {
                        type: "string",
                        queryParam: "merchant_id",
                        required: !1,
                        value: na.merchantId
                    },
                    amount: {
                        type: "number",
                        queryParam: !0,
                        required: !1,
                        value: na.amount
                    },
                    currency: {
                        type: "string",
                        queryParam: !0,
                        required: !1,
                        value: na.currency
                    },
                    placement: {
                        type: "string",
                        queryParam: !0,
                        required: !1,
                        value: na.placement
                    },
                    style: {
                        type: "object",
                        serialization: "json",
                        queryParam: !0,
                        required: !1,
                        value: na.style
                    },
                    offer: {
                        type: "string",
                        queryParam: "credit_type",
                        required: !1,
                        value: na.offer
                    },
                    buyerCountry: {
                        type: "string",
                        queryParam: "buyer_country",
                        required: !1,
                        value: na.buyerCountry
                    },
                    ignoreCache: {
                        type: "boolean",
                        queryParam: "ignore_cache",
                        required: !1,
                        value: na.ignoreCache
                    },
                    onClick: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = e.focus,
                                r = n.onClick;
                            return function(e) {
                                var o = e.meta,
                                    i = n.index;
                                n.modal.show({
                                    index: i,
                                    account: n.account,
                                    merchantId: n.merchantId,
                                    currency: n.currency,
                                    amount: n.amount,
                                    buyerCountry: n.buyerCountry,
                                    onApply: n.onApply,
                                    refId: o.messageRequestId,
                                    offer: o.offerType,
                                    onClose: function() {
                                        return t()
                                    }
                                }), Di.track({
                                    index: i,
                                    et: "CLICK",
                                    event_type: "MORS"
                                }), Di.track({
                                    index: i,
                                    et: "CLICK",
                                    event_type: "click",
                                    link: "Banner Wrapper"
                                }), "function" == typeof r && r({
                                    meta: o
                                })
                            }
                        }
                    },
                    onHover: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onHover,
                                r = !1;
                            return function(e) {
                                var o = e.meta;
                                r || (r = !0, Di.track({
                                    index: n.index,
                                    et: "CLIENT_IMPRESSION",
                                    event_type: "hover"
                                })), "function" == typeof t && t({
                                    meta: o
                                })
                            }
                        }
                    },
                    onReady: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onReady;
                            return function(e) {
                                var r = e.meta,
                                    o = e.activeTags,
                                    i = n.account,
                                    a = n.merchantId,
                                    s = n.index,
                                    c = n.modal,
                                    l = n.getContainer,
                                    u = r.messageRequestId,
                                    d = r.displayedMessage,
                                    f = r.trackingDetails,
                                    p = r.offerType;
                                Di.addMetaBuilder((function(e) {
                                        var n;
                                        return delete e[s], (n = {})[s] = {
                                            messageRequestId: u,
                                            account: a || i,
                                            displayedMessage: d,
                                            trackingDetails: f
                                        }, n
                                    })),
                                    function(e) {
                                        var n, t, r, o = e.container,
                                            i = e.activeTags,
                                            a = e.index,
                                            s = o.getBoundingClientRect(),
                                            c = function() {
                                                try {
                                                    return window.top.document.body && window.top
                                                } catch (e) {
                                                    return
                                                }
                                            }(),
                                            l = jn(),
                                            u = {
                                                index: a,
                                                et: "CLIENT_IMPRESSION",
                                                event_type: "stats",
                                                integration_type: "SDK",
                                                messaging_version: "1.19.0",
                                                bn_code: l["data-partner-attribution-id"],
                                                pos_x: Math.round(s.left).toString(),
                                                pos_y: Math.round(s.top).toString(),
                                                browser_width: (null == c ? void 0 : c.innerWidth).toString(),
                                                browser_height: (null == c ? void 0 : c.innerHeight).toString(),
                                                visible: ci(o).toString(),
                                                active_tags: i
                                            };
                                        if ("false" === u.visible) var d = (n = o, t = function() {
                                            ci(o) && (d(), Di.track({
                                                index: a,
                                                et: "CLIENT_IMPRESSION",
                                                event_type: "scroll",
                                                visible: "true"
                                            }))
                                        }, r = function() {
                                            var e = !1;
                                            try {
                                                window.addEventListener("__test__", null, Object.defineProperty({}, "passive", {
                                                    get: function() {
                                                        e = {
                                                            passive: !0
                                                        }
                                                    }
                                                }))
                                            } catch (e) {}
                                            return e
                                        }(), 0 === Yi.size && window.addEventListener("scroll", Vi, r), Yi.set(n, t), function() {
                                            Yi.delete(n), 0 === Yi.size && window.removeEventListener("scroll", Vi, r)
                                        });
                                        (function() {
                                            var e = window.document.body.appendChild(window.document.createElement("div"));
                                            e.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"), e.setAttribute("style", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;");
                                            var n = void 0 !== window.getComputedStyle ? window.getComputedStyle(e) : void 0;
                                            return new E((function(t) {
                                                ! function r(o) {
                                                    return o <= 0 ? (window.document.body.removeChild(e), t(!1)) : null !== window.document.body.getAttribute("abp") || n && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility")) || null === e.offsetParent || 0 === e.offsetHeight || 0 === e.offsetLeft || 0 === e.offsetTop || 0 === e.offsetWidth || 0 === e.clientHeight || 0 === e.clientWidth ? (window.document.body.removeChild(e), t(!0)) : setTimeout((function() {
                                                        r(o - 1)
                                                    }), 50)
                                                }(5)
                                            }))
                                        })().then((function(e) {
                                            u.adblock = e.toString(), u.blocked = function(e) {
                                                var n = Qo(e);
                                                if ("function" == typeof n.getComputedStyle) {
                                                    var t = n.getComputedStyle(e);
                                                    if ("none" === t.getPropertyValue("display") || "hidden" === t.getPropertyValue("visibility") || "auto" !== t.getPropertyValue("clip")) return !0
                                                }
                                                var r = e.getBoundingClientRect();
                                                return r.left > n.document.body.scrollWidth || r.right < 0 || r.top > n.document.body.scrollHeight || r.bottom < 0 || 0 === e.offsetWidth || 0 === e.offsetHeight
                                            }(o).toString(), Di.track(u)
                                        }))
                                    }({
                                        container: l(),
                                        activeTags: o,
                                        index: s
                                    }), c.updateProps({
                                        index: s,
                                        offer: p,
                                        visible: !1
                                    }), c.render("body"), Di.track({
                                        index: s,
                                        et: "CLIENT_IMPRESSION",
                                        event_type: "MORS"
                                    }), "function" == typeof t && t({
                                        meta: r
                                    })
                            }
                        }
                    },
                    onMarkup: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = e.event,
                                r = n.onMarkup;
                            return function(e) {
                                var o = e.styles,
                                    i = e.warnings,
                                    a = c(e, ["styles", "warnings"]),
                                    s = n.getContainer;
                                return void 0 !== o && t.trigger("styles", {
                                    styles: o
                                }), i && i.forEach((function(e) {
                                    Di.warn("render_warning", {
                                        description: e,
                                        container: s()
                                    })
                                })), r && r(m({
                                    styles: o,
                                    warnings: i
                                }, a))
                            }
                        }
                    },
                    onDestroy: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onDestroy;
                            return function() {
                                var e = Ti.messagesMap,
                                    r = (0, n.getContainer)();
                                E.delay(0).then((function() {
                                    if (r && r.ownerDocument.body.contains(r)) {
                                        var n = e.get(r).clone(),
                                            t = n.render,
                                            o = n.state,
                                            i = n.updateProps,
                                            a = n.clone;
                                        o.renderStart = Ci(), e.set(r, {
                                            render: t,
                                            updateProps: i,
                                            state: o,
                                            clone: a
                                        }), t(r)
                                    }
                                })), "function" == typeof t && t()
                            }
                        }
                    },
                    payerId: {
                        type: "string",
                        queryParam: "payer_id",
                        decorate: function(e) {
                            var n = e.props;
                            return jo()(n.account, "client-id:") ? "" : n.account
                        },
                        default: function() {
                            return ""
                        },
                        required: !1
                    },
                    clientId: {
                        type: "string",
                        queryParam: "client_id",
                        decorate: function(e) {
                            var n = e.props;
                            return jo()(n.account, "client-id:") ? n.account.slice(10) : ""
                        },
                        default: function() {
                            return ""
                        },
                        required: !1
                    },
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        sendToChild: !1,
                        required: !1,
                        value: Ro
                    },
                    env: {
                        type: "string",
                        queryParam: !0,
                        value: Eo
                    },
                    version: {
                        type: "string",
                        queryParam: !0,
                        value: To
                    }
                }
            })
        })),
        oa = function(e) {
            var n = e.uid,
                t = e.frame,
                r = e.prerenderFrame,
                o = e.doc;
            e.event.on("zoid-rendered", (function() {
                r.style.setProperty("display", "none")
            }));
            var i = function(e) {
                return "position: " + e + " !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; z-index: 2147483647 !important; border: none !important;"
            };
            return sr("div", {
                id: n
            }, sr("style", null, "\n                    #" + n + " > div { " + i("fixed") + " }\n                    #" + n + " > div > iframe { " + i("absolute") + " }\n                "), sr("div", {
                style: i("fixed")
            }, sr("node", {
                el: t,
                style: i("absolute")
            }), sr("node", {
                el: r,
                style: i("absolute")
            }))).render(lr({
                doc: o
            }))
        },
        ia = Ni("__paypal_credit_modal__", (function() {
            return Ur({
                tag: "paypal-credit-modal",
                url: zi("MODAL"),
                domain: /\.paypal\.com(:\d+)?$/,
                containerTemplate: oa,
                attributes: {
                    iframe: {
                        scrolling: "no"
                    }
                },
                props: {
                    account: {
                        type: "string",
                        queryParam: !1,
                        required: !0,
                        value: na.account
                    },
                    merchantId: {
                        type: "string",
                        queryParam: "merchant_id",
                        required: !1,
                        value: na.merchantId
                    },
                    currency: {
                        type: "string",
                        queryParam: !0,
                        required: !1,
                        value: na.currency
                    },
                    amount: {
                        type: "number",
                        queryParam: !0,
                        required: !1,
                        value: na.amount
                    },
                    refId: {
                        type: "string",
                        queryParam: !1,
                        required: !1
                    },
                    buyerCountry: {
                        type: "string",
                        queryParam: "buyer_country",
                        required: !1,
                        value: na.buyerCountry
                    },
                    offer: {
                        type: "string",
                        queryParam: !1,
                        required: !1
                    },
                    onClick: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onClick,
                                r = n.onApply,
                                o = n.index;
                            return function(e) {
                                var n = e.linkName;
                                Di.track({
                                    index: o,
                                    et: "CLICK",
                                    event_type: "click",
                                    link: n
                                }), "function" == typeof t && t({
                                    linkName: n
                                }), "function" == typeof r && _i()(n, "Apply Now") && r()
                            }
                        }
                    },
                    onCalculate: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onCalculate,
                                r = n.index;
                            return function(e) {
                                var n = e.value;
                                Di.track({
                                    index: r,
                                    et: "CLICK",
                                    event_type: "click",
                                    link: "Calculator",
                                    amount: n
                                }), "function" == typeof t && t({
                                    value: n
                                })
                            }
                        }
                    },
                    onClose: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = n.onClose,
                                r = n.index,
                                o = Pi()[1];
                            return function(e) {
                                var n = e.linkName;
                                o(), Di.track({
                                    index: r,
                                    et: "CLICK",
                                    event_type: "modal-close",
                                    link: n
                                }), "function" == typeof t && t({
                                    linkName: n
                                })
                            }
                        }
                    },
                    onReady: {
                        type: "function",
                        queryParam: !1,
                        value: function(e) {
                            var n = e.props,
                                t = e.state,
                                r = n.onReady;
                            return function(e) {
                                var o = e.products,
                                    i = e.trackingPayload,
                                    a = n.index,
                                    s = n.offer;
                                Di.addMetaBuilder((function(e) {
                                    var n, t = "modal-" + a;
                                    return delete e[t], (n = {})[t] = {
                                        trackingPayload: i
                                    }, n
                                })), Di.info("modal_render", {
                                    index: a,
                                    duration: Ci() - t.renderStart
                                }), Di.track({
                                    index: a,
                                    et: "CLIENT_IMPRESSION",
                                    event_type: "modal-render",
                                    modal: o.join("_").toLowerCase() + ":" + s.toLowerCase()
                                }), "function" == typeof r && r({
                                    products: o
                                })
                            }
                        }
                    },
                    payerId: {
                        type: "string",
                        queryParam: "payer_id",
                        decorate: function(e) {
                            var n = e.props;
                            return jo()(n.account, "client-id:") ? "" : n.account
                        },
                        default: function() {
                            return ""
                        },
                        required: !1
                    },
                    clientId: {
                        type: "string",
                        queryParam: "client_id",
                        decorate: function(e) {
                            var n = e.props;
                            return jo()(n.account, "client-id:") ? n.account.slice(10) : ""
                        },
                        default: function() {
                            return ""
                        },
                        required: !1
                    },
                    sdkMeta: {
                        type: "string",
                        queryParam: !0,
                        sendToChild: !1,
                        required: !1,
                        value: Ro
                    },
                    env: {
                        type: "string",
                        queryParam: !0,
                        value: Eo
                    },
                    version: {
                        type: "string",
                        queryParam: !0,
                        value: To
                    }
                }
            })
        })),
        aa = Do((function(e) {
            var n, t = e.account,
                r = e.merchantId,
                o = e.currency,
                i = e.amount,
                a = e.buyerCountry,
                s = e.offer,
                c = e.onReady,
                l = e.onCalculate,
                u = e.onApply,
                d = e.onClose,
                f = e.index,
                p = Pi()[0],
                h = ia({
                    index: f,
                    account: t,
                    merchantId: r,
                    currency: o,
                    amount: i,
                    buyerCountry: a,
                    offer: s,
                    onReady: c,
                    onCalculate: l,
                    onApply: u,
                    onClose: d
                }),
                g = h.render,
                y = h.hide,
                w = h.updateProps,
                v = h.state,
                _ = function(e) {
                    return void 0 === e && (e = "body"), v.renderStart = Ci(), n || (n = Bi.then((function() {
                        return E.delay(0)
                    })).then((function() {
                        return g(e)
                    })).then((function() {
                        return E.delay(100)
                    })), y()), n
                };
            return {
                render: _,
                show: function(e) {
                    return void 0 === e && (e = {}), v.renderStart = Ci(), n || (n = _("body")), n.then((function() {
                        return p(), Di.track({
                            index: e.index,
                            et: "CLIENT_IMPRESSION",
                            event_type: "modal-open"
                        }), w(m({
                            visible: !0
                        }, e))
                    }))
                },
                hide: function() {
                    return n || (n = _("body")), n.then((function() {
                        return w({
                            visible: !1
                        })
                    }))
                },
                updateProps: w
            }
        }), ["account", "merchantId"]),
        sa = function(e) {
            return void 0 === e && (e = {}), {
                render: function(n) {
                    void 0 === n && (n = "[data-pp-message]");
                    var t = Ci(),
                        r = Ti.messagesMap,
                        o = li(n);
                    if (0 === o.length) return e._auto || Di.warn("invalid_selector", {
                        description: 'No elements were found with the following selector: "' + n + '"',
                        selector: n
                    }), E.resolve();
                    var i = o.filter((function(n) {
                        return n.ownerDocument.body.contains(n) ? !e._auto || !n.hasAttribute("data-pp-id") : (Di.warn("not_in_document", {
                            description: "Container must be in the document.",
                            container: n
                        }), !1)
                    }));
                    return E.all(i.map((function(n) {
                        var o = Zo(Ti.config, Zo(e, ni(n)));
                        n.hasAttribute("data-pp-id") || n.setAttribute("data-pp-id", (Ii({
                            index: Ti.index + 1
                        }), Ti.index - 1));
                        var i = n.getAttribute("data-pp-id"),
                            a = o.account,
                            s = o.placement,
                            c = o.style,
                            l = o.offer,
                            u = o.ignoreCache,
                            d = o.onClick,
                            f = o.onRender,
                            p = {
                                index: i,
                                account: a,
                                merchantId: o.merchantId,
                                currency: o.currency,
                                amount: o.amount,
                                buyerCountry: o.buyerCountry
                            },
                            h = m({}, p, {
                                onApply: o.onApply
                            }),
                            g = m({}, p, {
                                placement: s,
                                style: c,
                                offer: l,
                                onClick: d,
                                ignoreCache: u,
                                onReady: function() {
                                    "function" == typeof f && f.apply(void 0, arguments)
                                },
                                getContainer: function() {
                                    return n
                                }
                            });
                        if (a && (g.modal = aa(h)), !r.has(n)) {
                            var y = ra(g),
                                w = y.render,
                                v = y.state,
                                _ = y.updateProps,
                                x = y.clone;
                            return v.renderStart = t, v.style = g.style, r.set(n, {
                                render: w,
                                updateProps: _,
                                state: v,
                                clone: x
                            }), Gi.observe(n, {
                                attributes: !0
                            }), w(n).then((function() {
                                return Mi.trigger("render")
                            }))
                        }
                        var b = r.get(n),
                            E = b.updateProps,
                            A = b.state;
                        if (A.renderComplete && (A.renderStart = t), A.style && g.style) {
                            var C = Zo(A.style, g.style);
                            A.style = C, g.style = C
                        }
                        return E(bo()(g).reduce((function(e, n) {
                            var t, r = n[1];
                            return void 0 === r ? e : Object.assign(e, ((t = {})[n[0]] = r, t))
                        }), {})).then((function() {
                            return Mi.trigger("render")
                        }))
                    })))
                }
            }
        };
    gi()(sa, {
        render: function(e, n) {
            return sa(e).render(n)
        },
        setGlobalConfig: function(e) {
            return void 0 === e && (e = {}), Ii({
                config: m({}, Ti.config, e)
            })
        }
    });
    var ca = sa;

    function la() {
        ! function() {
            var e = Po();
            if (e) {
                var n = ni(e),
                    t = n.merchantid,
                    r = c(n, ["merchantid"]),
                    o = Co();
                ca.setGlobalConfig(m({
                    account: o || Ao(),
                    merchantId: o && Ao() || t,
                    currency: So()
                }, r)), r.namespace && (window[r.namespace] = m({}, window[r.namespace] || {}, {
                    Messages: ca
                }), window.paypal && !window.paypal.version && delete window.paypal)
            }
            if (!jo()(window.name, "__zoid__")) {
                var i = function() {
                    Ti.config.account && ca.render({
                        _auto: !0
                    }), Hi.observe(document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["data-pp-message"]
                    })
                };
                "loading" === document.readyState ? window.addEventListener("DOMContentLoaded", i) : setTimeout(i, 0)
            }
        }()
    }
    var ua = t(77),
        da = t.n(ua),
        fa = Bo((function(e, n, t) {
            var r = e.uuid,
                o = e.urls,
                i = e.messageRequestId;
            void 0 === t && (t = !1);
            var a = new window.Image;
            if ("object" == typeof n) {
                var s = m({}, n, {
                        message_request_id: i,
                        uuid: t ? r + "::banner.hidden:true" : r
                    }),
                    c = bo()(s).reduce((function(e, n) {
                        var t = n[1];
                        return void 0 === t ? e : e + "&" + n[0] + "=" + t
                    }), "").slice(1),
                    l = o[n.et] || o.DEFAULT;
                a.src = _i()(l, "bdata") ? l.split("&").map((function(e) {
                    if (jo()(e, "bdata")) {
                        var n = e.split("=");
                        return n[0] + "=" + encodeURIComponent(decodeURIComponent(n[1]) + "&" + c)
                    }
                    return e
                })).join("&") : l + "&bdata=" + encodeURIComponent(c)
            } else "string" == typeof n && (a.src = o[n] || o.DEFAULT)
        }), 2),
        pa = {
            MESSAGE_OVERFLOW: "MESSAGE_OVERFLOW",
            MESSAGE_HIDDEN: "MESSAGE_HIDDEN",
            MESSAGE_INVALID_LEGACY: "MESSAGE_INVALID_LEGACY",
            MESSAGE_INVALID_MARKUP: "MESSAGE_INVALID_MARKUP",
            MODAL_FAIL: "MODAL_FAIL",
            CUSTOM_TEMPLATE_FAIL: "CUSTOM_TEMPLATE_FAIL",
            CUSTOM_JSON_OPTIONS_FAIL: "CUSTOM_JSON_OPTIONS_FAIL",
            INTERNAL_FAIL: "INTERNAL_FAIL"
        },
        ma = function() {
            for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
            (e = console).warn.apply(e, ["[PayPal Messages]"].concat(t))
        },
        ha = Wo((function(e) {
            var n, t = e.markup;
            return E.resolve(jo()(t, "https://www.paypalobjects.com") ? (n = t, new E((function(e) {
                var t = new XMLHttpRequest;
                t.onreadystatechange = function() {
                    if (4 === t.readyState) switch (t.status) {
                        case 200:
                            e(t.responseText);
                            break;
                        default:
                            e("")
                    }
                }, t.open("GET", n, !0), t.send()
            }))) : "")
        })),
        ga = t(80),
        ya = t.n(ga),
        wa = "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    color: #2d2d2d;\n    font-family: PayPal-Sans, Helvetica, Arial, sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    overflow: hidden;\n}\n\nimg {\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n\n/* IE will not properly scale a SVG element, but will scale a canvas element */\n.message__logo canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n",
        va = ".message__content {\n    display: inline-block;\n}\n\n.message__messaging {\n    margin: 0;\n}\n\n.message__logo-container {\n    display: inline;\n    white-space: nowrap;\n    margin: 0;\n}\n.message__logo-container::before {\n    content: 'with ';\n}\n\n.message__logo {\n    display: inline-block;\n    width: 7rem;\n    vertical-align: middle;\n}\n\n.message__headline .em {\n    display: inline-block;\n    white-space: nowrap;\n}\n\n.message__headline > span:nth-last-child(2)::after {\n    content: ' ';\n}\n",
        _a = "/* Not a valid style option ratio, but used as the mobile base for 8x1 and 20x1 */\n\n.message__content {\n    display: flex;\n    padding-right: 1rem;\n    align-items: center;\n}\n\n.message__logo-container {\n    flex: 0 0 33%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.message__logo {\n    width: 60%;\n}\n\n.message__messaging {\n    position: relative;\n    flex: 1 1 100%;\n    display: block;\n}\n\n.message__messaging > * {\n    width: 100%;\n}\n\n.message__headline {\n    font-size: 5vw;\n    line-height: 1;\n    margin-bottom: 0.2em;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__disclaimer {\n    font-size: 10px;\n    line-height: 1.1;\n    display: inline;\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 400px) {\n    .message__logo-container {\n        flex: 0 0 25%;\n    }\n\n    .message__headline {\n        font-size: 4vw;\n        margin-bottom: 0.5rem;\n    }\n\n    .message__sub-headline {\n        font-size: 3vw;\n        display: inline;\n    }\n\n    .message__sub-headline > span {\n        margin-right: 1rem;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 520px) {\n    .message__logo-container {\n        flex: 0 0 25%;\n    }\n\n    .message__headline {\n        line-height: 1.1;\n    }\n\n    .message__disclaimer {\n        font-size: 0.85rem;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 640px) {\n    .message__headline {\n        font-size: 1.7rem;\n    }\n}\n",
        xa = {
            "layout:text": [
                ["default", [wa, ".message {\n    display: block;\n    width: 100%;\n    color: #2c2e2f;\n    cursor: pointer;\n}\n\n.message__container {\n    min-width: 100%;\n}\n\n.message__content {\n    display: inline-flex;\n    align-items: center;\n    min-width: 100%;\n}\n\n.message__logo-container {\n    flex: 0 0 auto;\n    width: 70px;\n    margin-right: 0.8rem;\n}\n\n.message__messaging {\n    white-space: normal;\n    margin-right: 0.8rem;\n}\n\n.message__messaging span.br {\n    white-space: nowrap;\n}\n\n.message__promo-container {\n    display: inline;\n}\n\n.message__headline {\n    display: inline;\n    font-weight: 400;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    display: inline;\n    white-space: nowrap;\n    font-weight: 400;\n}\n\n.message__disclaimer > span {\n    color: #0076ff;\n    text-decoration: underline;\n}\n\n/* For non-US NI disclaimer */\n.message__disclaimer > span.multi:first-of-type {\n    color: #2c2e2f;\n    text-decoration: none;\n}\n"].join("\n")],
                ["logo.type:alternative", ".message__messaging {\n    display: inline-block;\n    white-space: normal;\n    flex: 0 0 auto;\n}\n\n.message__headline span:only-child {\n    white-space: nowrap;\n}\n\n/* .message__headline span.multi:first-child {\n    display: none;\n}\n\n.message__headline span.multi:nth-child(2) {\n    display: inline;\n} */\n\n.message__messaging span.br {\n    white-space: normal;\n}\n\n.message__logo-container {\n    display: inline-block;\n    margin-right: 0.6rem;\n}\n\n.message__content {\n    display: inline-block;\n}\n"],
                ["logo.type:inline", va],
                ["logo.type:none", [va, ".message__headline > span:last-of-type {\n    display: inline-block;\n}\n"].join("\n")],
                ["logo.position:right", ".message__logo-container {\n    order: 2;\n}\n"],
                ["logo.position:top", ".message__content {\n    display: inline-block;\n    /* IE does not like flex-direction: column;\n    flex-direction: column;\n    align-items: flex-start; */\n}\n\n.message__logo-container {\n    margin: 0 0 0.2rem 0;\n}\n"],
                ["logo.type:alternative && logo.position:top", ".message__messaging {\n    white-space: normal;\n}\n\n.message__headline span:only-child {\n    white-space: normal;\n}\n\n.message__logo-container {\n    display: block;\n}\n"],
                ["text.color:white", ".message {\n    color: white;\n}\n\n.message__headline {\n    color: white;\n}\n\n.message__disclaimer span {\n    color: white;\n}\n"]
            ],
            "layout:flex": [
                ["default", [wa, ".message {\n    cursor: pointer;\n}\n\n.message .br {\n    display: inline-block;\n}\n\n.message .em {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n\n.message__container,\n.message__foreground,\n.message__content,\n.message__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\n\n.message__headline,\n.message__sub-headline,\n.message__disclaimer {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__headline {\n    font-family: PayPal-Sans-Big, PayPal-Sans;\n    font-weight: 400;\n}\n.message__headline .weak {\n    font-family: PayPal-Sans;\n    font-weight: 300;\n}\n\n.message__disclaimer > span:not(.multi),\n.message__disclaimer > span.multi:last-of-type {\n    font-weight: 300;\n    text-decoration: underline;\n    white-space: nowrap;\n}\n\n.message__background {\n    z-index: -1;\n}\n"].join("\n")],
                ["ratio:1x1", ".message__content {\n    padding: 7%;\n}\n\n.message__logo-container {\n    width: 50%;\n    margin-bottom: 7%;\n}\n\n.message__headline {\n    font-size: 10vw;\n    line-height: 1.1em;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    position: absolute;\n    width: 80%;\n    bottom: 7%;\n    font-size: 9.5px;\n}\n\n@media (min-width: 170px) {\n    .message__headline {\n        font-size: 8vw;\n    }\n\n    .message__sub-headline {\n        font-size: 7vw;\n        line-height: 1.3em;\n        margin-top: 3%;\n        display: block;\n    }\n\n    .message__disclaimer {\n        font-size: 5.5vw;\n    }\n}\n\n@media (min-width: 220px) {\n    .message__disclaimer {\n        font-size: 4.5vw;\n    }\n}\n"],
                ["ratio:1x4", ".message__content {\n    padding: 8%;\n}\n\n.message__logo-container {\n    width: 70%;\n    margin-bottom: 12%;\n}\n\n.message__headline {\n    font-size: 1.6rem;\n    line-height: 1.3em;\n    margin-bottom: 24%;\n}\n\n.message__sub-headline {\n    font-size: 1.56rem;\n    line-height: 1.3em;\n    margin-bottom: 40%;\n    margin-bottom: 24%;\n}\n\n.message__disclaimer {\n    position: absolute;\n    bottom: 4%;\n    font-size: 0.75rem;\n}\n\n@media (max-aspect-ratio: 11/40) {\n    .message__logo-container {\n        margin: 15% 0 30%;\n    }\n\n    .message__disclaimer {\n        position: static;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1).tag--xlarge {\n        margin-bottom: 40%;\n        display: block;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(2) {\n        display: block;\n    }\n}\n"],
                ["ratio:8x1", [_a, "@media (min-aspect-ratio: 80/11) {\n    .message__headline span.multi:nth-of-type(2),\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__messaging {\n        position: relative;\n    }\n\n    .message__disclaimer {\n        font-size: 0.625rem;\n    }\n\n    .message__logo-container {\n        flex: 0 0 22%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 240px) {\n    .message__messaging {\n        line-height: 0.9;\n    }\n\n    .message__headline {\n        font-size: 4vw;\n        line-height: 1.1;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 280px) {\n    .message__disclaimer {\n        padding-right: 2%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 360px) {\n    .message__messaging {\n        line-height: 1;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 360px) {\n    .message__disclaimer {\n        line-height: 1;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 500px) {\n    .message__headline {\n        font-size: 3vw;\n        padding-right: 12%;\n        margin: 0 0 1% 0;\n    }\n\n    .message__sub-headline {\n        font-size: 2.5vw;\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        font-size: 0.75rem;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 600px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n/*IE specific*/\n@media (min-aspect-ratio: 80/11) and (-ms-high-contrast: none) and (min-width: 500px) {\n    .message__disclaimer {\n        font-size: 2vw;\n        line-height: 1.6em;\n    }\n}\n"].join("\n")],
                ["ratio:20x1", [_a, "@media (min-aspect-ratio: 200/11) {\n    .message__logo-container {\n        flex: 1 0 20%;\n    }\n\n    .message__logo {\n        width: 50%;\n    }\n\n    .message__messaging {\n        flex: 1 1 85%;\n        display: flex;\n        align-items: center;\n    }\n\n    .message__headline {\n        flex: 1 1 60%;\n        font-size: 0.7rem;\n        line-height: 1;\n        margin: 0;\n        display: inline;\n    }\n\n    .message__sub-headline {\n        display: none;\n    }\n\n    .message__disclaimer {\n        flex: 0 0 auto;\n        width: auto;\n        max-width: 12rem;\n        padding: 0;\n        font-size: 8px;\n        line-height: 1.1;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 400px) {\n    .message__headline {\n        font-size: 1rem;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 600px) {\n    .message__logo-container {\n        flex: 1 0 10%;\n    }\n\n    .message__logo {\n        width: 60%;\n    }\n\n    .message__headline {\n        font-size: 1.8vw;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__disclaimer {\n        padding-right: 1rem;\n        font-size: 0.75rem;\n        line-height: 1.2;\n    }\n\n    .message__sub-headline {\n        font-size: 1.6vw;\n        line-height: 1.3em;\n        margin-left: 2vw;\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 1000px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n        max-width: 14rem;\n    }\n}\n"].join("\n")],
                ["color:blue", ".message__content {\n    color: white;\n}\n\n.message__background {\n    background: linear-gradient(-55deg, #009cde -20%, #003087 80%);\n}\n"],
                ["color:gray", ".message__content {\n    color: #0070ba;\n}\n\n.message__background {\n    background: #eaeced;\n}\n"],
                ["color:black", ".message__content {\n    color: white;\n}\n\n.message__background {\n    background: #2c2e2f;\n}\n"],
                ["color:white", ".message__content {\n    color: #009cde;\n    border: 1px solid #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n"],
                ["color:white-no-border", ".message__content {\n    color: #009cde;\n}\n\n.message__background {\n    background: #ffffff;\n}\n"],
                ["color:blue && ratio:1x4", ".message__background {\n    background: linear-gradient(-10deg, #009cde, #003087 90%);\n}\n"]
            ],
            "layout:custom": [
                ["default", "* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\n.message__logo--svg {\n    position: relative;\n}\n\n.message__logo--svg img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n.message__logo--svg canvas {\n    display: block;\n    width: 100%;\n    visibility: hidden;\n}\n"]
            ]
        };

    function ba(e, n) {
        switch (e) {
            case "STRING":
                return "string" == typeof n;
            case "BOOLEAN":
                return "boolean" == typeof n;
            case "NUMBER":
                return "number" == typeof n && !Ji()(n);
            case "FUNCTION":
                return "function" == typeof n;
            case "OBJECT":
                return "object" == typeof n && null !== n;
            case "ANY":
                return !0;
            default:
                return !1
        }
    }
    var Ea = {
        PRIMARY: {
            COLOR: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_fc_pri.svg",
                dimensions: [453, 152]
            },
            WHITE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_wh_pri.svg",
                dimensions: [453, 152]
            },
            BLACK: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_mono_pri.svg",
                dimensions: [453, 152]
            },
            GRAYSCALE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_grayscale_pri.svg",
                dimensions: [453, 152]
            }
        },
        ALTERNATIVE: {
            COLOR: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_fc_alt.svg",
                dimensions: [573, 80]
            },
            WHITE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_wh_alt.svg",
                dimensions: [573, 80]
            },
            BLACK: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_mono_alt.svg",
                dimensions: [573, 80]
            },
            GRAYSCALE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_grayscale_alt.svg",
                dimensions: [573, 80]
            }
        },
        ALT_NO_PP: {
            COLOR: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_fc_alt_noPP.svg",
                dimensions: [477, 64]
            },
            WHITE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_wh_alt_noPP.svg",
                dimensions: [477, 64]
            },
            BLACK: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_mono_alt_noPP.svg",
                dimensions: [477, 64]
            },
            GRAYSCALE: {
                src: "https://www.paypalobjects.com/upstream/assets/logos/US/ppc_grayscale_alt_noPP.svg",
                dimensions: [477, 64]
            }
        }
    };

    function Aa(e) {
        return "\n    .message__headline span.multi:nth-child(2) {\n        display: none;\n    }\n\n    @media (min-width: " + e + "px) {\n        .message__headline span.multi:first-child {\n            display: none;\n        }\n\n        .message__headline span.multi:nth-child(2) {\n            display: inline;\n        }\n    }  \n"
    }

    function Ca(e) {
        return "\n    @media (min-width: " + e + "px) {\n        .message__content {\n            display: inline-flex;\n        }\n    }\n    "
    }

    function Pa(e) {
        return "\n    @media (max-width: " + e + "px) {\n        .message__disclaimer {\n            display: block;\n        }\n    }\n    "
    }
    var Sa = [
            ["text.color:white && logo.type:primary", {
                logo: Ea.PRIMARY.WHITE
            }],
            ["text.color:white && logo.type:alternative", {
                logo: Ea.ALTERNATIVE.WHITE
            }],
            ["text.color:white && logo.type:inline", {
                logo: Ea.ALT_NO_PP.WHITE
            }],
            ["text.color:monochrome && logo.type:primary", {
                logo: Ea.PRIMARY.BLACK
            }],
            ["text.color:monochrome && logo.type:alternative", {
                logo: Ea.ALTERNATIVE.BLACK
            }],
            ["text.color:monochrome && logo.type:inline", {
                logo: Ea.ALT_NO_PP.BLACK
            }],
            ["text.color:grayscale && logo.type:primary", {
                logo: Ea.PRIMARY.GRAYSCALE
            }],
            ["text.color:grayscale && logo.type:alternative", {
                logo: Ea.ALTERNATIVE.GRAYSCALE
            }],
            ["text.color:grayscale && logo.type:inline", {
                logo: Ea.ALT_NO_PP.GRAYSCALE
            }]
        ],
        Ra = [
            ["color:gray", {
                logo: Ea.PRIMARY.COLOR
            }],
            ["color:white", {
                logo: Ea.PRIMARY.COLOR
            }],
            ["color:white-no-border", {
                logo: Ea.PRIMARY.COLOR
            }],
            ["color:monochrome", {
                logo: Ea.PRIMARY.BLACK
            }],
            ["color:grayscale", {
                logo: Ea.PRIMARY.GRAYSCALE
            }]
        ],
        Oa = [
            ["default", {
                logo: Ea.PRIMARY.WHITE,
                headline: ["xsmall", {
                    tag: "medium",
                    br: ["months"]
                }],
                disclaimer: "xsmall"
            }],
            ["ratio:1x1", {
                headline: ["xsmall", "medium"],
                styles: ["@media (min-width: 150px) { .message__headline { font-size: 8vw } }"]
            }],
            ["ratio:1x4", {
                headline: {
                    tag: "medium",
                    br: ["months"]
                },
                styles: [".message__logo-container { margin-bottom: 30%; }", ".message__disclaimer span.multi:nth-of-type(1) { display: none; }", "@media (max-aspect-ratio: 11/40) { .message__disclaimer span.multi:nth-of-type(1) { display: block; } }", ".message__headline { font-size: 1.1rem }"],
                disclaimer: ["xlarge", "xsmall"]
            }]
        ].concat(Ra),
        Ta = {
            "layout:text": [
                ["default", function(e) {
                    var n = 19 * e.textSize + 70;
                    return {
                        styles: [Pa(n - 1), [Aa(n)]],
                        logo: Ea.PRIMARY.COLOR,
                        headline: [{
                            tag: "xsmall",
                            br: ["time."]
                        }, {
                            tag: "medium",
                            br: ["months"]
                        }],
                        disclaimer: "xsmall"
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        messageWidth: [13 * n, 27 * n]
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Aa(15 * n + 80), ".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [Aa(20 * e.textSize)],
                        logo: !1,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Aa(18 * n), Ca(42 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        logo: Ea.ALTERNATIVE.COLOR
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    var n = 19 * e.textSize;
                    return {
                        styles: [Pa(n - 1), Aa(n)]
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Aa(18.5 * n), ".message__logo-container { width: " + 8 * n + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": Oa
        },
        Ia = {
            "layout:text": [
                ["default", function(e) {
                    return {
                        styles: [".weak {\n                    display:none;\n                }\n                .message__disclaimer {\n                        display:block;\n                    }\n                   ", [Aa(18.5 * e.textSize + 70)]],
                        logo: Ea.PRIMARY.COLOR,
                        headline: [{
                            tag: "xsmall",
                            br: ["time."]
                        }, {
                            tag: "medium",
                            br: ["months."],
                            replace: [
                                ["months", "months."]
                            ]
                        }],
                        disclaimer: "xsmall"
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        messageWidth: [13 * n, 27 * n]
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                    display:none;\n                }", Aa(12 * n + 80), ".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["months"]
                        }]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [".weak {\n                    display:none;\n                }", Aa(17 * e.textSize)],
                        logo: !1,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["months"]
                        }]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(18 * n), Ca(33 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        logo: Ea.ALTERNATIVE.COLOR
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    return {
                        styles: [".weak {\n                    display:none;\n                }\n                .message__disclaimer {\n                        display:block;\n                    }\n", Aa(18.5 * e.textSize)]
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(18.5 * n), ".message__logo-container { width: " + 8 * n + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": Oa
        },
        ka = [
            ["default", {
                logo: Ea.PRIMARY.WHITE,
                headline: ["xsmall", {
                    tag: "medium",
                    br: ["months"]
                }],
                disclaimer: ["extra.2", "small"]
            }],
            ["ratio:1x1", {
                headline: ["xsmall", "medium"],
                styles: ["@media (min-width: 150px) { .message__headline { font-size: 8vw } }"]
            }],
            ["ratio:1x4", {
                headline: {
                    tag: "medium",
                    br: ["months"]
                },
                styles: [".message__logo-container { margin-bottom: 30%; }", ".message__disclaimer span.multi:nth-of-type(1) { display: none; }", "@media (max-aspect-ratio: 11/40) { .message__disclaimer span.multi:nth-of-type(1) { display: block; } }", ".message__headline { font-size: 1.1rem }"],
                disclaimer: ["xlarge", "extra.2", "small"]
            }]
        ].concat(Ra),
        La = {
            "layout:text": [
                ["default", function(e) {
                    var n = 22 * e.textSize + 70;
                    return {
                        styles: [Pa(n - 1), Aa(n)],
                        logo: Ea.PRIMARY.COLOR,
                        headline: [{
                            tag: "xsmall",
                            br: ["time."]
                        }, {
                            tag: "medium",
                            br: ["months"],
                            replace: [
                                ["99+", "99+."]
                            ]
                        }],
                        disclaimer: ["extra", "xsmall"]
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        messageWidth: [13 * n, 27 * n]
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Aa(23 * n), ".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [Aa(21 * e.textSize)],
                        logo: !1,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize,
                        t = 20 * n;
                    return {
                        styles: [Pa(t - 1), Aa(t), Ca(45 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        logo: Ea.ALTERNATIVE.COLOR,
                        headline: ["xsmall", {
                            tag: "medium",
                            br: ["months"],
                            replace: [
                                ["99+", "99+."]
                            ]
                        }]
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Aa(20 * n), ".message__logo-container { width: " + 8 * n + "px }"],
                        headline: ["xsmall", {
                            tag: "medium",
                            br: ["months"]
                        }]
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    var n = 21 * e.textSize;
                    return {
                        styles: [Pa(n - 1), Aa(n)]
                    }
                }]
            ].concat(Sa),
            "layout:flex": ka
        },
        za = {
            "layout:text": [
                ["default", function(e) {
                    return {
                        styles: [".weak {\n                        display:none;\n                    }\n                    .message__disclaimer {\n                        display:block;\n                    }", Aa(18.5 * e.textSize + 70)],
                        logo: Ea.PRIMARY.COLOR,
                        headline: [{
                            tag: "xsmall",
                            br: ["time."]
                        }, {
                            tag: "medium",
                            br: ["months."],
                            replace: [
                                ["months", "months."]
                            ]
                        }],
                        disclaimer: ["extra", "xsmall"]
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        messageWidth: [13 * n, 27 * n]
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(18 * n), ".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(18 * e.textSize)],
                        logo: !1,
                        headline: [{
                            tag: "xsmall",
                            replace: [
                                ["time.", "time"]
                            ],
                            br: ["time"]
                        }, {
                            tag: "medium",
                            br: ["purchases"]
                        }]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(18 * n), Ca(35 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        logo: Ea.ALTERNATIVE.COLOR,
                        headline: ["xsmall", {
                            tag: "medium",
                            br: ["months."],
                            replace: [
                                ["months", "months."]
                            ]
                        }]
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".weak {\n                        display:none;\n                    }", Aa(20 * n), ".message__logo-container { width: " + 8 * n + "px }"],
                        headline: ["xsmall", {
                            tag: "medium",
                            br: ["months."],
                            replace: [
                                ["months", "months."]
                            ]
                        }]
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    return {
                        styles: [".weak {\n                display:none;\n                }\n                .message__disclaimer {\n                display:block;\n                }", Aa(18 * e.textSize)]
                    }
                }]
            ].concat(Sa),
            "layout:flex": ka
        },
        Na = [".message__headline > span:first-of-type { text-decoration: underline; color: #0076ff; font-weight: 600; }", ".message__disclaimer > span { color: #2c2e2f; text-decoration: none; }"],
        Ma = {
            "layout:text": [
                ["default", {
                    styles: Na,
                    logo: Ea.PRIMARY.COLOR,
                    headline: {
                        tag: "small",
                        br: ["APR"]
                    },
                    disclaimer: "xsmall.2"
                }],
                ["logo.type:primary", function(e) {
                    return {
                        messageWidth: 16 * e.textSize
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        logo: Ea.ALT_NO_PP.COLOR,
                        styles: [].concat(Na, [".message__logo { width: " + 7 * e.textSize + "px }"])
                    }
                }],
                ["logo.type:none", {
                    logo: !1
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [].concat(Na, [Ca(35.8 * n), ".message__logo-container { width: " + 9 * n + "px }"]),
                        messageWidth: [15 * n, 1e3],
                        logo: Ea.ALTERNATIVE.COLOR,
                        headline: {
                            replace: [
                                ["APR", "APR."]
                            ],
                            br: ["APR."]
                        }
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [].concat(Na, [".message__logo-container { width: " + 9 * e.textSize + "px }"])
                    }
                }],
                ["text.color:white", {
                    styles: [".message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }", ".message__disclaimer > span { color: white; text-decoration: none; }"]
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "small",
                        br: ["months", "APR"]
                    },
                    disclaimer: ["xsmall.2", "xsmall"]
                }],
                ["ratio:1x4", {
                    headline: {
                        br: ["over", "at", "APR"]
                    }
                }],
                ["ratio:20x1", {
                    styles: ["@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.7rem; } }"]
                }]
            ].concat(Ra)
        },
        Fa = [".message__headline > span:not(:nth-of-type(2)) { text-decoration: underline; color: #0076ff; font-weight: 600; }", ".message__disclaimer > span { color: #2c2e2f; text-decoration: none; }"],
        ja = {
            "layout:text": [
                ["default", {
                    styles: Fa,
                    logo: Ea.PRIMARY.COLOR,
                    headline: {
                        tag: "xsmall",
                        br: ["months"]
                    },
                    disclaimer: "xsmall.2"
                }],
                ["logo.type:primary", function(e) {
                    return {
                        messageWidth: 11 * e.textSize
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        styles: [].concat(Fa, [".message__logo { width: " + 7 * e.textSize + "px }"]),
                        logo: Ea.ALT_NO_PP.COLOR
                    }
                }],
                ["logo.type:none", {
                    logo: !1
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [].concat(Fa, [Ca(30.6 * n), ".message__logo-container { width: " + 9 * n + "px }"]),
                        logo: Ea.ALTERNATIVE.COLOR,
                        headline: {
                            replace: [
                                ["months", "months."]
                            ],
                            br: ["months."]
                        }
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [].concat(Fa, [".message__logo-container { width: " + 9 * e.textSize + "px }"])
                    }
                }],
                ["text.color:white", {
                    styles: [".message__headline > span:first-of-type { text-decoration: underline; color: white; font-weight: 600; }", ".message__disclaimer > span { color: white; text-decoration: none; }"]
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "xsmall",
                        br: ["months"]
                    },
                    disclaimer: ["xsmall.2", "xsmall"]
                }],
                ["ratio:1x4", {
                    headline: {
                        br: ["over", "months"]
                    }
                }]
            ].concat(Ra)
        },
        Wa = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ea.PRIMARY.COLOR,
                        messageWidth: [11 * n, 18 * n],
                        headline: {
                            tag: "small",
                            br: ["/mo"]
                        },
                        disclaimer: "small"
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        messageWidth: [19 * n, 1e3],
                        headline: {
                            replace: [
                                ["APR.", "APR"]
                            ],
                            br: ["APR"]
                        }
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [17 * e.textSize, 1e3],
                        headline: {
                            replace: [
                                ["APR.", "APR"]
                            ],
                            br: ["APR"]
                        }
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ca(29.1 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        messageWidth: !1,
                        logo: Ea.ALTERNATIVE.COLOR
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [".message__logo-container { width: " + 9 * e.textSize + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "medium",
                        br: ["low as", "at"]
                    },
                    disclaimer: "small"
                }]
            ].concat(Ra)
        },
        Da = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ea.PRIMARY.COLOR,
                        messageWidth: [11 * n, 12 * n],
                        headline: {
                            tag: "xsmall"
                        },
                        disclaimer: "xsmall"
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        styles: [".message__logo { width: " + 7 * e.textSize + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        messageWidth: !1,
                        headline: {
                            br: ["/mo"]
                        }
                    }
                }],
                ["logo.type:none", {
                    logo: !1,
                    messageWidth: !1,
                    headline: {
                        br: ["/mo"]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ca(23.8 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        messageWidth: !1,
                        logo: Ea.ALTERNATIVE.COLOR
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [".message__logo-container { width: " + 9 * e.textSize + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "small",
                        br: ["low as"]
                    },
                    disclaimer: "xsmall"
                }]
            ].concat(Ra)
        },
        qa = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ea.PRIMARY.COLOR,
                        messageWidth: [17 * n, 21 * n],
                        headline: {
                            tag: "small",
                            br: ["/mo"]
                        },
                        disclaimer: "xsmall"
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        styles: [".message__logo { width: " + 7 * e.textSize + "px }"],
                        messageWidth: !1,
                        logo: Ea.ALT_NO_PP.COLOR,
                        headline: {
                            br: ["APR"]
                        }
                    }
                }],
                ["logo.type:none", {
                    messageWidth: !1,
                    logo: !1,
                    headline: {
                        br: ["APR"]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ca(34.3 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        logo: Ea.ALTERNATIVE.COLOR,
                        messageWidth: [10 * n, 1e3]
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [".message__logo-container { width: " + 9 * e.textSize + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "small",
                        br: [" of", "at"]
                    },
                    disclaimer: "xsmall"
                }],
                ["ratio:1x4", {
                    headline: {
                        br: ["payments", "mo"]
                    }
                }],
                ["ratio:20x1", {
                    styles: ["@media (min-aspect-ratio: 200/11) and (max-width: 475px) { .message__headline { font-size: 0.75rem; } }"]
                }]
            ].concat(Ra)
        },
        Ba = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ea.PRIMARY.COLOR,
                        messageWidth: [13 * n, 18 * n],
                        headline: {
                            tag: "small",
                            br: ["/mo"]
                        },
                        disclaimer: "xsmall"
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".message__logo { width: " + 7 * n + "px }"],
                        logo: Ea.ALT_NO_PP.COLOR,
                        messageWidth: [19 * n, 1e3]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [17 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ca(29.3 * n), ".message__logo-container { width: " + 9 * n + "px }"],
                        messageWidth: !1,
                        logo: Ea.ALTERNATIVE.COLOR
                    }
                }],
                ["logo.type:alternative && logo.position:top", function(e) {
                    return {
                        styles: [".message__logo-container { width: " + 9 * e.textSize + "px }"]
                    }
                }]
            ].concat(Sa),
            "layout:flex": [
                ["default", {
                    logo: Ea.PRIMARY.WHITE,
                    headline: {
                        tag: "small",
                        br: ["of"]
                    },
                    disclaimer: "xsmall"
                }],
                ["ratio:1x4", {
                    headline: {
                        br: ["payments"]
                    }
                }]
            ].concat(Ra)
        },
        Ha = {
            localeClass: "locale--US",
            productName: ["with", "PayPal Credit."],
            minimumSizeOptions: {
                "style.layout": "text",
                "style.logo.position": "top",
                "style.logo.type": "primary"
            },
            validOptions: {
                text: {
                    logo: {
                        type: ["STRING", ["primary", "alternative", "inline", "none"]],
                        position: ["STRING", ["left", "right", "top"]]
                    },
                    text: {
                        color: ["STRING", ["black", "white", "monochrome", "grayscale|greyscale"]],
                        size: ["NUMBER", [12, 10, 11, 13, 14, 15, 16]],
                        fontFamily: ["STRING"]
                    }
                },
                flex: {
                    color: ["STRING", ["blue", "black", "white", "white-no-border", "gray|grey", "monochrome", "grayscale|greyscale"]],
                    ratio: ["STRING", ["1x1", "1x4", "8x1", "20x1"]]
                },
                custom: {
                    markup: ["STRING"],
                    ratio: ["ANY"]
                }
            },
            getMutations: function(e, n) {
                switch (e) {
                    case "EZP:ANY:EQZ":
                        return Ma[n];
                    case "EZP:ANY:GTZ":
                        return ja[n];
                    case "PALA:MULTI:EQZ":
                        return Wa[n];
                    case "PALA:MULTI:GTZ":
                        return Da[n];
                    case "PALA:SINGLE:EQZ":
                        return qa[n];
                    case "PALA:SINGLE:GTZ":
                        return Ba[n];
                    case "NIQ:NON-US":
                        return za[n];
                    case "NI:NON-US":
                        return La[n];
                    case "NIQ":
                        return Ia[n];
                    case "NI":
                    default:
                        return Ta[n]
                }
            },
            logos: Ea,
            styles: {
                "layout:flex": [
                    ["ratio:1x1", ".message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n@media (min-width: 150px) {\n    .message__headline {\n        font-size: 11vw;\n        line-height: 1.2em;\n    }\n\n    .message__sub-headline {\n        font-size: 8.5vw;\n    }\n\n    .message__disclaimer {\n        font-size: 6.5vw;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n}\n\n@media (min-width: 170px) {\n    .message__headline {\n        font-size: 8vw;\n    }\n}\n"],
                    ["color:monochrome", ".message__content {\n    color: black;\n    border: 1px solid black;\n}\n\n.message__background {\n    background: #ffffff;\n}\n"],
                    ["color:grayscale", ".message__content {\n    border: 1px solid #b7bcbf;\n}\n\n.message__background {\n    background: #ffffff;\n}\n"]
                ],
                "layout:text": [
                    ["text.color:monochrome", ".message__headline {\n    color: black;\n}\n\n.message__messaging .message__headline > span:first-of-type {\n    color: black;\n}\n\n.message__disclaimer span {\n    color: black;\n}\n"],
                    ["text.color:grayscale", ".message__messaging .message__headline > span:first-of-type {\n    color: #2c2e2f;\n}\n\n.message__disclaimer span {\n    color: #2c2e2f;\n}\n"]
                ]
            }
        },
        Ga = {
            PRIMARY: {
                COLOR: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_fc_pri.svg",
                    dimensions: [1127, 99]
                },
                WHITE: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_wh_pri.svg",
                    dimensions: [1127, 99]
                }
            },
            ALTERNATIVE: {
                COLOR: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_fc_alt.svg",
                    dimensions: [822, 99]
                },
                WHITE: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_wh_alt.svg",
                    dimensions: [822, 99]
                }
            },
            ALT_NO_PP: {
                COLOR: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_fc_alt_noPP.svg",
                    dimensions: [1013, 99]
                },
                WHITE: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_wh_alt_noPP.svg",
                    dimensions: [1009, 79]
                }
            },
            STACKED: {
                COLOR: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_fc_stacked.svg",
                    dimensions: [176, 52]
                },
                WHITE: {
                    src: "https://www.paypalobjects.com/upstream/assets/logos/DE/ppc_de_wh_stacked.svg",
                    dimensions: [176, 52]
                }
            }
        };

    function Ua(e, n) {
        return "@media (min-width: " + e + "px) {\n      .locale--DE .message__content {\n        display: inline-flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n      }\n      .locale--DE .message__content .message__messaging {\n        font-size: " + n + "px;\n      }\n    }"
    }
    var Ya = {
            "layout:text": [
                ["default", {
                    logo: Ga.PRIMARY.COLOR,
                    headline: "default",
                    disclaimer: "default"
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".message__logo-container { width: " + 12 * n + "px }"],
                        messageWidth: [20 * n, 1e3],
                        logo: Ga.ALTERNATIVE.COLOR,
                        headline: {
                            tag: "default",
                            replace: [
                                ["Jahreszins", "Jahreszins."]
                            ]
                        }
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ga.ALT_NO_PP.COLOR,
                        messageWidth: [25 * n, 1e3],
                        styles: [".message__logo { width: " + 13 * n + "px }"]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [23 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ua(55.8 * n, n), ".message__logo-container { width: " + 10 * n + "px }", ".message__content { display: inline-block; }", ".message__messaging, .message__headline span:only-child { white-space: normal }"],
                        logo: Ga.ALTERNATIVE.COLOR,
                        messageWidth: [20 * n, 1e3],
                        headline: {
                            tag: "default",
                            replace: [
                                ["Jahreszins", "Jahreszins."]
                            ]
                        }
                    }
                }],
                ["text.color:white && logo.type:primary", {
                    logo: Ga.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: Ga.ALTERNATIVE.WHITE
                }],
                ["text.color:white && logo.type:inline", {
                    logo: Ga.ALT_NO_PP.WHITE
                }]
            ],
            "layout:flex": [
                ["default", {
                    logo: Ga.PRIMARY.WHITE,
                    headline: "small",
                    disclaimer: "xsmall"
                }],
                ["ratio:1x1", {
                    logo: [Ga.PRIMARY.WHITE, Ga.ALTERNATIVE.WHITE]
                }],
                ["ratio:20x1", {
                    headline: ["xsmall", "small"]
                }],
                ["ratio:8x1", {
                    headline: ["xsmall", "small"],
                    styles: ["@media (min-aspect-ratio: 80/11) and (min-width: 500px) {\n                        .message__headline { font-size: 2.3vw; display: block; }\n                        .message__disclaimer { margin-top: .5rem; }\n                        .message__logo-container { margin-bottom: 1vw }\n                        .message__headline { margin-bottom: 1vw }\n                    }"]
                }],
                ["ratio:1x4", {
                    logo: Ga.STACKED.WHITE
                }],
                ["color:gray", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["ratio:1x4 && color:gray", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x4 && color:white", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x1 && color:gray", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white-no-border", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }]
            ]
        },
        Va = {
            "layout:text": [
                ["default", {
                    logo: Ga.PRIMARY.COLOR,
                    headline: "default",
                    disclaimer: "default"
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [".message__logo-container { width: " + 13 * n + "px }"],
                        messageWidth: [15 * n, 1e3],
                        headline: {
                            tag: "default",
                            replace: [
                                ["Raten", "Raten."]
                            ]
                        }
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ga.ALT_NO_PP.COLOR,
                        messageWidth: [22 * n, 1e3],
                        styles: [".message__logo { width: " + 12 * n + "px }"]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [20 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ua(43.8 * n, n), ".message__logo-container { width: " + 10 * n + "px }", ".message__content { display: inline-block; }", ".message__messaging, .message__headline span:only-child { white-space: normal }"],
                        logo: Ga.ALTERNATIVE.COLOR,
                        messageWidth: [15 * n, 1e3],
                        headline: {
                            tag: "default",
                            replace: [
                                ["Raten", "Raten."]
                            ]
                        }
                    }
                }],
                ["text.color:white && logo.type:primary", {
                    logo: Ga.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: Ga.ALTERNATIVE.WHITE
                }],
                ["text.color:white && logo.type:inline", {
                    logo: Ga.ALT_NO_PP.WHITE
                }]
            ],
            "layout:flex": [
                ["default", {
                    logo: Ga.PRIMARY.WHITE,
                    headline: "small",
                    disclaimer: "xsmall"
                }],
                ["ratio:1x1", {
                    logo: [Ga.PRIMARY.WHITE, Ga.ALTERNATIVE.WHITE]
                }],
                ["ratio:8x1", {
                    styles: ["@media (max-aspect-ratio: 61/10) { .locale--DE .message__logo-container { margin-bottom: 2.5vw } }"]
                }],
                ["ratio:20x1", {
                    styles: ["@media (max-aspect-ratio: 61/10) { .locale--DE .message__logo-container { margin-bottom: 2.5vw } }"]
                }],
                ["ratio:1x4", {
                    logo: Ga.STACKED.WHITE
                }],
                ["color:gray", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["ratio:1x4 && color:gray", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x4 && color:white", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x1 && color:gray", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white-no-border", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }]
            ]
        },
        Ka = {
            "layout:text": [
                ["default", function(e) {
                    return {
                        logo: Ga.PRIMARY.COLOR,
                        messageWidth: [20 * e.textSize, 1e3],
                        headline: "default",
                        disclaimer: "default"
                    }
                }],
                ["logo.type:primary", function(e) {
                    return {
                        styles: [".message__logo-container { width: " + 13 * e.textSize + "px }"],
                        headline: {
                            tag: "default",
                            replace: [
                                ["Raten", "Raten."]
                            ]
                        }
                    }
                }],
                ["logo.type:inline", function(e) {
                    var n = e.textSize;
                    return {
                        logo: Ga.ALT_NO_PP.COLOR,
                        messageWidth: [21 * n, 1e3],
                        styles: [".message__logo { width: " + 12 * n + "px }"]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [19 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ua(36 * n, n), ".message__content { display: inline-block; }", ".message__messaging, .message__headline span:only-child { white-space: normal }", ".message__logo-container { width: " + 11 * n + "px }"],
                        logo: Ga.ALTERNATIVE.COLOR,
                        messageWidth: [19 * n, 1e3],
                        headline: {
                            tag: "default",
                            replace: [
                                ["Raten", "Raten."]
                            ]
                        }
                    }
                }],
                ["text.color:white && logo.type:primary", {
                    logo: Ga.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: Ga.ALTERNATIVE.WHITE
                }],
                ["text.color:white && logo.type:inline", {
                    logo: Ga.ALT_NO_PP.WHITE
                }]
            ],
            "layout:flex": [
                ["default", {
                    logo: Ga.PRIMARY.WHITE,
                    headline: "small",
                    disclaimer: "xsmall"
                }],
                ["ratio:1x1", {
                    logo: [Ga.PRIMARY.WHITE, Ga.ALTERNATIVE.WHITE]
                }],
                ["ratio:8x1", {
                    styles: ["@media (max-aspect-ratio: 61/10) { .locale--DE .message__logo-container { margin-bottom: 2.5vw } }"]
                }],
                ["ratio:20x1", {
                    styles: ["@media (max-aspect-ratio: 61/10) { .locale--DE .message__logo-container { margin-bottom: 2.5vw } }"]
                }],
                ["ratio:1x4", {
                    logo: Ga.STACKED.WHITE
                }],
                ["color:gray", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["ratio:1x4 && color:gray", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x4 && color:white", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x1 && color:gray", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white-no-border", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }]
            ]
        },
        Ja = [".message__disclaimer > .multi.tag--extra > span { display: block; white-space: normal; margin-top: .5rem }"],
        Za = ["@media (min-aspect-ratio: 80/11) and (min-width: 500px) { .message__headline { font-size: 2.3vw } }", ".message__disclaimer { display: block; }", ".message__disclaimer > .multi.tag--extra > span { text-decoration: none; white-space: normal }"],
        $a = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [].concat(Ja, [".message__logo { width: " + 13 * n + "px }"]),
                        messageWidth: [20 * n, 1e3],
                        logo: Ga.PRIMARY.COLOR,
                        headline: {
                            tag: "default",
                            replace: [
                                ["Jahreszins", "Jahreszins."]
                            ]
                        },
                        disclaimer: ["default", "extra"]
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        logo: Ga.ALT_NO_PP.COLOR,
                        messageWidth: [29 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        logo: !1,
                        messageWidth: [26 * e.textSize, 1e3]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [Ua(35 * n, n)].concat(Ja, [".message__messaging, .message__headline span:only-child { white-space: normal }", ".message__logo-container { width: " + 11 * n + "px }"]),
                        logo: Ga.ALTERNATIVE.COLOR,
                        headline: {
                            tag: "default",
                            replace: [
                                ["Jahreszins", "Jahreszins."]
                            ]
                        }
                    }
                }],
                ["text.color:white", {
                    styles: [].concat(Ja, [".message__disclaimer > .multi.tag--default:first-of-type > span { color: white }", ".message__disclaimer > .multi.tag--extra > span { color: white; }"])
                }],
                ["text.color:white && logo.type:primary", {
                    logo: Ga.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: Ga.ALTERNATIVE.WHITE
                }],
                ["text.color:white && logo.type:inline", {
                    logo: Ga.ALT_NO_PP.WHITE
                }]
            ],
            "layout:flex": [
                ["default", {
                    styles: [].concat(Za),
                    logo: Ga.PRIMARY.WHITE,
                    headline: "large",
                    disclaimer: ["extra", "xsmall"]
                }],
                ["ratio:20x1", {
                    headline: ["small", "large"],
                    styles: [].concat(Za, ["\n                        @media (min-width: 600px) {\n                            .message__messaging { display: block }\n                            .message__disclaimer { padding-right: 0; font-size: 1.5vw; text-align: left; }\n                            .message__headline { margin-bottom: .5vw; font-size: 2vw; }\n                        }\n                    ", "\n                        @media (max-aspect-ratio: 61/10) and (min-width: 600px) {\n                            .message__logo-container { margin-bottom: 3vw }\n                            .message__headline { font-size: 2.5vw }\n                        }\n                    "])
                }],
                ["ratio:8x1", {
                    headline: ["small", "large"],
                    styles: [].concat(Za, ["\n                        @media (min-width: 500px) {\n                            .message__messaging { display: block }\n                            .message__disclaimer { padding-right: 0; font-size: 1.7vw }\n                            .message__logo-container { margin-bottom: 1vw }\n                            .message__headline { margin-bottom: 1vw }\n                        }\n                    ", "\n                        @media (max-aspect-ratio: 61/10) and (min-width: 500px) {\n                            .message__logo-container { margin-bottom: 3vw }\n                            .message__headline { font-size: 2.5vw }\n                        }\n                    "])
                }],
                ["ratio:1x1", {
                    logo: [Ga.PRIMARY.WHITE, Ga.ALTERNATIVE.WHITE],
                    headline: ["small", "large"]
                }],
                ["ratio:1x4", {
                    logo: Ga.STACKED.WHITE
                }],
                ["color:gray", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: Ga.PRIMARY.COLOR
                }],
                ["ratio:1x4 && color:gray", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x4 && color:white", {
                    logo: Ga.STACKED.COLOR
                }],
                ["ratio:1x1 && color:gray", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }],
                ["ratio:1x1 && color:white-no-border", {
                    logo: [Ga.PRIMARY.COLOR, Ga.ALTERNATIVE.COLOR]
                }]
            ]
        },
        Xa = "/* Not a valid style option ratio, but used as the mobile base for 8x1 and 20x1 */\n\n.message__content {\n    display: block;\n    padding: 0.25rem;\n}\n\n.message__logo-container {\n    width: 40%;\n    display: block;\n    margin-bottom: 0.25rem;\n}\n\n.message__logo {\n    width: 100%;\n}\n\n.message__messaging {\n    flex-direction: row;\n    align-items: flex-end;\n}\n\n.message__headline {\n    margin-bottom: 0;\n    margin-right: 0.25rem;\n    font-size: 4vw;\n}\n\n.message__promo-container {\n    flex: 1 1 100%;\n}\n\n.message__disclaimer {\n    flex: 1 1 auto;\n    width: auto;\n    padding-right: 0;\n    margin-top: 1vw;\n    display: block;\n}\n\n.message__disclaimer span.multi:nth-of-type(1) {\n    display: none;\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 400px) {\n    .message__content {\n        padding: 0.75rem;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 520px) {\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n",
        Qa = [
            ["default", ".message__disclaimer > span {\n    text-decoration: none;\n    white-space: normal;\n}\n\n.message__disclaimer > span > span {\n    white-space: nowrap;\n}\n\n.message__disclaimer > span > span:only-child,\n.message__disclaimer > span > span.em {\n    text-decoration: underline;\n}\n"],
            ["ratio:1x1", ".message__disclaimer span.multi:nth-of-type(1) {\n    display: none;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__logo-container {\n    width: 100%;\n}\n\n.message__logo:nth-of-type(1) {\n    display: none;\n}\n\n@media (min-width: 220px) {\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n\n    .message__logo:nth-of-type(1) {\n        display: block;\n    }\n\n    .message__logo:nth-of-type(2) {\n        display: none;\n    }\n}\n"],
            ["ratio:1x4", ".message__logo-container {\n    width: 100%;\n    margin-bottom: 30%;\n}\n\n.message__headline {\n    font-size: 1.4rem;\n    margin-bottom: 30%;\n}\n\n.message__disclaimer span.multi:nth-of-type(1) {\n    display: inline;\n}\n\n@media (max-aspect-ratio: 11/40) {\n    .message__headline {\n        margin-bottom: 50%;\n    }\n}\n"],
            ["ratio:8x1", [Xa, "@media (min-aspect-ratio: 80/11) {\n    .message__headline {\n        font-size: 3vw;\n        padding-right: 1rem;\n        display: inline;\n    }\n\n    .message__logo-container {\n        margin-bottom: 0;\n    }\n\n    .message__disclaimer {\n        margin-top: 0;\n        display: inline;\n    }\n\n    .message__messaging {\n        display: flex;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 300px) {\n    .message__messaging {\n        display: block;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 500px) {\n    .message__headline {\n        font-size: 3vw;\n        padding-right: 1rem;\n    }\n\n    .message__logo-container {\n        width: 30%;\n        margin-bottom: 1.5vw;\n    }\n\n    .message__promo-container {\n        flex: 0 1 auto;\n        width: auto;\n    }\n\n    .message__disclaimer {\n        flex: 1 1 auto;\n        margin-top: 0.5rem;\n    }\n\n    .message__content {\n        padding: 2.5vw;\n    }\n\n    .message__logo-container {\n        margin-bottom: 2vw;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n"].join("\n")],
            ["ratio:20x1", [Xa, ".message__disclaimer {\n    max-width: unset;\n}\n\n@media (min-aspect-ratio: 200/11) {\n    .message__content {\n        display: flex;\n    }\n\n    .message__messaging {\n        align-items: center;\n    }\n\n    .message__logo-container {\n        flex: 1 0 25%;\n        margin-bottom: 0;\n        display: flex;\n    }\n\n    .message__logo {\n        width: 90%;\n    }\n\n    .message__headline {\n        font-size: 0.6rem;\n    }\n\n    .message__promo-container {\n        flex: 1 1 55%;\n    }\n\n    .message__disclaimer {\n        margin-top: 0;\n        padding-right: 3%;\n        text-align: right;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 600px) {\n    .message__logo-container {\n        flex: 1 0 20%;\n        margin-right: 1%;\n    }\n\n    .message__headline {\n        font-size: 1.6vw;\n    }\n\n    .message__logo {\n        width: 90%;\n    }\n\n    .message__disclaimer {\n        font-size: 0.7rem;\n    }\n\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n"].join("\n")]
        ],
        es = {
            localeClass: "locale--DE",
            productName: ["mit", "PayPal Ratenzahlung."],
            validOptions: {
                text: {
                    logo: {
                        type: ["STRING", ["primary", "alternative", "inline", "none"]]
                    },
                    text: {
                        color: ["STRING", ["black", "white"]],
                        size: ["NUMBER", [12, 10, 11, 13, 14, 15, 16]],
                        fontFamily: ["STRING"]
                    }
                },
                flex: {
                    color: ["STRING", ["blue", "black", "white", "gray|grey"]],
                    ratio: ["STRING", ["1x1", "1x4", "8x1", "20x1"]]
                }
            },
            getMutations: function(e, n) {
                switch (e) {
                    case "PALAQ:ANY:EQZ":
                        return $a[n];
                    case "PALAQ:ANY:GTZ":
                        return Ka[n];
                    case "INST:ANY:EQZ":
                        return Ya[n];
                    case "INST:ANY:GTZ":
                    default:
                        return Va[n]
                }
            },
            logos: Ga,
            styles: {
                "layout:text": [
                    ["default", ".message__content {\n    display: inline-block;\n}\n\n.message__disclaimer > span {\n    text-decoration: none;\n    color: #2c2e2f;\n    white-space: normal;\n}\n\n.message__disclaimer > span > span {\n    white-space: nowrap;\n}\n.message__disclaimer > .tag--default > span:only-child,\n.message__disclaimer > .tag--default > span.em {\n    text-decoration: underline;\n    color: #0076ff;\n    white-space: nowrap;\n}\n"],
                    ["logo.type:inline", ".message__logo-container::before {\n    content: 'mit ';\n}\n\n.message__logo {\n    vertical-align: bottom;\n    margin-bottom: 1px;\n}\n"],
                    ["text.color:white", ".message__disclaimer > span > span:only-child,\n.message__disclaimer > span > span.em {\n    color: white;\n}\n\n.message__disclaimer > .tag--default:first-of-type > span {\n    color: white;\n}\n"]
                ],
                "layout:flex": Qa
            }
        };

    function ns(e) {
        return $r({
            logoColor: e
        }).render(lr({
            doc: document
        })).getAttribute("src")
    }

    function ts(e) {
        return mo({
            logoColor: e
        }).render(lr({
            doc: document
        })).getAttribute("src")
    }
    var rs = {
        PRIMARY: {
            COLOR: [{
                src: ts("default"),
                dimensions: [24, 32]
            }, {
                src: ns("default"),
                dimensions: [100, 32]
            }],
            WHITE: [{
                src: ts("white"),
                dimensions: [24, 32]
            }, {
                src: ns("white"),
                dimensions: [100, 32]
            }]
        },
        ALT_NO_PP: {
            COLOR: {
                src: ns("default"),
                dimensions: [100, 32]
            },
            WHITE: {
                src: ns("white"),
                dimensions: [100, 32]
            }
        }
    };

    function os(e) {
        return "\n    .message__headline {\n        white-space: nowrap;\n    }\n\n    .message__headline > .tag--medium > span {\n        white-space: normal;\n    }\n\n    .message__headline > .tag--xsmall {\n        display: none;\n    }\n\n    @media screen and (max-width: " + e + "px) {\n\n        .message__headline > .tag--medium {\n            display: none;\n        }\n\n        .message__headline > .tag--xsmall {\n            display: inline;\n        }\n        \n        .message__headline .tag--xsmall > span {\n            white-space: nowrap;\n        }\n\n        .locale--GB .message__headline > span:nth-child(3) {\n            display:none;\n        }\n    } \n"
    }

    function is(e) {
        return "\n    @media (min-width: " + e + "px) {\n        .locale--GB .message__content {\n            display: inline-flex;\n        }\n    }\n    "
    }

    function as(e, n, t) {
        return ["number" == typeof e ? ".message__logo-container { width: " + e + "px; }" : "", "number" == typeof n ? ".message__logo { width: " + n + "px; }" : "", "number" == typeof t ? ".message__logo:first-child { width: " + t + "px; }" : ""].join("")
    }

    function ss(e, n, t) {
        return "\n    @media (max-width: " + e + "px) {\n        .message__disclaimer {\n            display: block !important;\n        }\n    }\n    @media (max-width: " + n + "px) {\n        .message__headline > .tag--medium {\n            display: block;\n        }\n        .message__disclaimer {\n            display: inline;\n        }\n    }\n    @media (max-width: " + t + "px) {\n        .message__headline > .tag--medium {\n            display: inline;\n        }\n        .message__headline > .tag--medium .br:first-child {\n            display: block;\n        }\n        .message__disclaimer {\n            display: inline;\n        }\n    }\n    "
    }
    var cs = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(13 * n), as(!1, 4 * n, 1.25 * n)],
                        logo: rs.PRIMARY.COLOR,
                        headline: [{
                            tag: "medium",
                            replace: [
                                ["purchases.", "purchases"]
                            ],
                            br: ["on"]
                        }, {
                            tag: "xsmall"
                        }],
                        disclaimer: ["default"]
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(13 * n), as(!1, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:primary && logo.position:right", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(13 * n), is(38 * n + 10), as(6 * n, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(13 * n), as(6 * n, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [ss(17 * n, 33 * n, 23 * n), os(20 * n), as(1.75 * n, 4 * n, 1.25 * n)],
                        logo: rs.PRIMARY.COLOR[0]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [os(16 * e.textSize)],
                        logo: !1
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        styles: [os(17 * e.textSize + 2)],
                        logo: !1
                    }
                }],
                ["text.color:white && logo.type:primary", {
                    logo: rs.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:inline", function(e) {
                    return {
                        styles: [os(17 * e.textSize + 2)],
                        logo: !1
                    }
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: rs.PRIMARY.WHITE[0]
                }]
            ],
            "layout:flex": [
                ["default", {
                    logo: rs.PRIMARY.WHITE,
                    headline: [{
                        tag: "medium",
                        replace: [
                            ["purchases.", "purchases"]
                        ]
                    }],
                    disclaimer: "xsmall"
                }],
                ["ratio:20x1", {
                    headline: ["default", {
                        tag: "medium",
                        replace: [
                            ["purchases.", "purchases"]
                        ],
                        br: ["eligible "]
                    }]
                }],
                ["ratio:8x1", {
                    headline: ["default", {
                        tag: "medium",
                        replace: [
                            ["purchases.", "purchases"]
                        ],
                        br: ["eligible "]
                    }]
                }],
                ["color:gray", {
                    logo: rs.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: rs.PRIMARY.COLOR
                }],
                ["color:black", {
                    logo: rs.PRIMARY.WHITE
                }]
            ]
        },
        ls = {
            "layout:text": [
                ["default", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(25 * n + 20), as(!1, 4 * n, 1.25 * n)],
                        logo: rs.PRIMARY.COLOR,
                        headline: [{
                            tag: "medium",
                            replace: [
                                ["month.", "month"]
                            ],
                            br: ["of"]
                        }, {
                            tag: "xsmall"
                        }],
                        disclaimer: ["default"]
                    }
                }],
                ["logo.type:primary", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(14 * n + 4), as(6 * n, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:primary && logo.position:right", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(14 * n + 4), is(38 * n + 10), as(6 * n, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:primary && logo.position:top", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [os(14 * n + 4), as(6 * n, 4 * n, 1.25 * n)]
                    }
                }],
                ["logo.type:alternative", function(e) {
                    var n = e.textSize;
                    return {
                        styles: [ss(17 * n, 34 * n, 24 * n), os(21 * n), as(1.75 * n, 4 * n, 1.25 * n)],
                        logo: rs.PRIMARY.COLOR[0]
                    }
                }],
                ["logo.type:none", function(e) {
                    return {
                        styles: [os(17 * e.textSize)],
                        logo: !1
                    }
                }],
                ["logo.type:inline", function(e) {
                    return {
                        styles: [os(17 * e.textSize + 4)],
                        logo: !1
                    }
                }],
                ["text.color:white && logo.type:primary", {
                    logo: rs.PRIMARY.WHITE
                }],
                ["text.color:white && logo.type:inline", function(e) {
                    return {
                        styles: [os(17 * e.textSize + 4)],
                        logo: !1
                    }
                }],
                ["text.color:white && logo.type:alternative", {
                    logo: rs.PRIMARY.WHITE[0]
                }]
            ],
            "layout:flex": [
                ["default", {
                    logo: rs.PRIMARY.WHITE,
                    headline: [{
                        tag: "medium",
                        replace: [
                            ["month.", "month"]
                        ]
                    }],
                    disclaimer: "xsmall"
                }],
                ["ratio:1x4", {
                    headline: [{
                        tag: "medium",
                        replace: [
                            ["month.", "month"]
                        ],
                        br: ["per "]
                    }],
                    styles: ["@media (min-height: 500px) {.message__headline {font-size: 1.4rem;}}"]
                }],
                ["ratio:20x1", {
                    headline: ["default", {
                        tag: "medium",
                        replace: [
                            ["month.", "month"]
                        ],
                        br: ["per "]
                    }]
                }],
                ["ratio:8x1", {
                    headline: ["default", {
                        tag: "medium",
                        replace: [
                            ["month.", "month"]
                        ],
                        br: ["per "]
                    }]
                }],
                ["color:gray", {
                    logo: rs.PRIMARY.COLOR
                }],
                ["color:white", {
                    logo: rs.PRIMARY.COLOR
                }],
                ["color:black", {
                    logo: rs.PRIMARY.WHITE
                }]
            ]
        },
        us = '/* Not a valid style option ratio, but used as the mobile base for 8x1 and 20x1 */\n\n.message__logo:nth-of-type(2) {\n    display: none;\n}\n\n.message__headline {\n    font-size: 4vw;\n}\n\n/* remove extra "with Flex" */\n.message__headline > span:nth-of-type(3) {\n    display: none;\n}\n\n.message__disclaimer {\n    font-size: 0.75rem;\n}\n\n@media (max-aspect-ratio: 61/10) and (min-width: 375px) {\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n    .message__headline > span:nth-of-type(3) {\n        display: inline;\n    }\n    .message__headline .tag--medium .br:first-child {\n        display: block;\n    }\n    .message__logo:nth-of-type(1) {\n        width: 45%;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) {\n    .message__headline {\n        font-size: 3.5vw;\n        line-height: 1.3em;\n        display: inline;\n    }\n    .message__logo-container {\n        flex-basis: 12%;\n        margin-bottom: -6px;\n        justify-content: flex-start;\n        margin-left: 5px;\n    }\n    .message__logo:nth-of-type(1) {\n        margin-left: 10px;\n        margin-right: 0;\n    }\n}\n\n@media (max-aspect-ratio: 61/10) and (max-width: 374px) {\n    .message__logo:nth-of-type(1) {\n        width: 50%;\n    }\n}\n\n@media (max-width: 374px) {\n    .message__headline {\n        font-size: 5vw;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: 55%;\n    }\n\n    .message__logo-container {\n        margin-right: 2.5%;\n    }\n\n    .weak {\n        margin-left: -1.6%;\n    }\n}\n',
        ds = [
            ["default", [".message__logo-container {\n    display: flex;\n    align-items: center;\n}\n\n.message__headline {\n    font-size: 8.4vw;\n    font-weight: 500;\n    line-height: 1.6em;\n}\n\n.message__disclaimer {\n    position: static;\n}\n\n.message__disclaimer > span {\n    font-weight: 400;\n    text-decoration: none;\n    white-space: normal;\n}\n\n.message__disclaimer > span > span {\n    white-space: nowrap;\n}\n\n.message__disclaimer > span > span:only-child,\n.message__disclaimer > span > span.em {\n    text-decoration: underline;\n}\n\n.message__logo:nth-of-type(1) {\n    width: 27px;\n    display: inline-block;\n    margin-right: 10px;\n}\n\n.message__logo:nth-of-type(2) {\n    width: 89px;\n    display: inline-block;\n}\n\n.message__headline strong::after {\n    content: '.';\n    color: white;\n    font-style: normal;\n    font-weight: normal;\n}\n\n.message__headline > span:nth-child(2) > strong {\n    font-weight: 500;\n}\n\n.message__headline > span:nth-child(3) > strong {\n    font-weight: 500;\n}\n\n@media (min-width: 220px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n", ".message__background {\n    background: #023188;\n}\n"].join("\n")],
            ["ratio:1x1", ".message__disclaimer span.multi:nth-of-type(1) {\n    display: none;\n}\n\n.message__headline span.multi:nth-of-type(2) {\n    display: none;\n}\n\n.message__logo-container {\n    width: 100%;\n    margin-bottom: 12%;\n}\n\n.message__logo:nth-of-type(1) {\n    width: 29px;\n    max-width: 15%;\n    margin-right: 0px;\n}\n\n.message__logo:nth-of-type(2) {\n    width: 91px;\n    max-width: 45%;\n    margin-left: 3%;\n}\n\n.message__headline {\n    line-height: 1.55em;\n}\n\n@media (min-width: 220px) {\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n\n    .message__disclaimer span.multi:nth-of-type(1) {\n        display: inline;\n    }\n}\n"],
            ["ratio:1x4", ".message__logo-container {\n    width: 100%;\n    margin-top: 3%;\n    margin-bottom: 0;\n}\n\n.message__messaging {\n    height: 100%;\n    transform: translateY(-80px);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.message__headline {\n    font-size: 1.1rem;\n    margin-bottom: 10%;\n}\n\n.message__sub-headline {\n    display: none;\n}\n\n.message__disclaimer {\n    font-size: 0.9rem;\n}\n\n.message__disclaimer span.multi:nth-of-type(1) {\n    display: inline;\n}\n\n@media (min-height: 500px) {\n    .message__headline {\n        font-size: 1.7rem;\n    }\n}\n\n@media (aspect-ratio: 1/2) {\n    .message__messaging {\n        transform: translateY(-40px);\n    }\n}\n"],
            ["ratio:8x1", [us, "@media (min-aspect-ratio: 80/11) {\n    .message__headline {\n        display: inline;\n        padding-right: 0;\n        margin-right: 0;\n        line-height: 1.3em;\n    }\n\n    .message__headline .tag--medium .br:first-child {\n        display: block;\n    }\n\n    .message__logo-container {\n        flex-basis: 12%;\n        margin-bottom: -3px;\n        justify-content: flex-start;\n        margin-left: 5px;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: 50%;\n        margin-left: 10px;\n        margin-right: 0;\n    }\n\n    .message__disclaimer {\n        margin-left: 1%;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 501px) {\n    .message__logo-container {\n        flex-basis: 22%;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: 15%;\n        margin-right: 5%;\n    }\n\n    .message__logo:nth-of-type(2) {\n        display: inline-block;\n        width: 50%;\n    }\n\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 375px) {\n    .message__headline > span:nth-of-type(3) {\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (min-width: 351px) {\n    .message__headline {\n        font-size: 3.5vw;\n    }\n}\n\n@media (min-aspect-ratio: 80/11) and (max-width: 350px) {\n    .message__headline {\n        font-size: 10px;\n    }\n}\n"].join("\n")],
            ["ratio:20x1", [us, "@media (min-aspect-ratio: 200/11) {\n    .message__logo-container {\n        margin-bottom: -3px;\n        max-width: 12%;\n        margin-right: 1.5vw;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: 15%;\n        margin-right: 3%;\n    }\n\n    .message__logo:nth-of-type(2) {\n        width: 55%;\n    }\n\n    .message__promo-container {\n        width: unset;\n    }\n\n    .message__messaging {\n        flex: none;\n        display: inline;\n    }\n\n    .message__content {\n        justify-content: center;\n    }\n\n    .message__sub-headline {\n        margin-left: 0;\n    }\n\n    .message__disclaimer {\n        margin-left: 4px;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 351px) {\n    .message__disclaimer {\n        font-size: 0.9rem;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 400px) {\n    .message__headline {\n        font-size: 2vw;\n    }\n\n    .message__headline > span:nth-of-type(3) {\n        display: inline;\n    }\n\n    .message__logo-container {\n        margin-bottom: -5px;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: 20%;\n        margin-right: 5%;\n    }\n\n    .message__logo:nth-of-type(2) {\n        display: inline-block;\n        width: 60%;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 523px) {\n    .message__headline span.multi:nth-of-type(1) {\n        display: none;\n    }\n\n    .message__headline span.multi:nth-of-type(2) {\n        display: inline;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (max-width: 600px) {\n    .message__logo:nth-of-type(2) {\n        display: none;\n    }\n\n    .message__logo:nth-of-type(1) {\n        width: auto;\n    }\n\n    .message__logo-container {\n        max-width: 3%;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 351px) and (max-width: 600px) {\n    .message__headline {\n        font-size: 2.5vw;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (min-width: 401px) and (max-width: 522px) {\n    .message__headline {\n        font-size: 2.75vw;\n    }\n\n    .message__headline > span:nth-of-type(3) {\n        display: none;\n    }\n\n    .weak {\n        margin-left: -1.6%;\n    }\n}\n\n@media (min-aspect-ratio: 200/11) and (max-width: 350px) {\n    .message__headline {\n        font-size: 10px;\n    }\n}\n"].join("\n")],
            ["color:black", ".message__background {\n    background: #000000;\n}\n"],
            ["color:gray", ".message__background {\n    background: #ebecee;\n}\n\n.message__content {\n    color: #023187;\n}\n\n.message__headline > span:last-child > span:last-child::after {\n    color: #023187;\n}\n"],
            ["color:white", ".message__background {\n    background: #ffffff;\n}\n\n.message__content {\n    color: #023187;\n}\n\n.message__headline > span:last-child > span:last-child::after {\n    color: #023187;\n}\n"]
        ],
        fs = {
            localeClass: "locale--GB",
            productName: ["with", "Flex"],
            minimumSizeOptions: {
                "style.layout": "text",
                "style.logo.position": "top",
                "style.logo.type": "primary"
            },
            validOptions: {
                text: {
                    logo: {
                        type: ["STRING", ["primary", "alternative", "inline", "none"]],
                        position: ["STRING", ["left", "right", "top"]]
                    },
                    text: {
                        color: ["STRING", ["black", "white"]],
                        size: ["NUMBER", [12, 10, 11, 13, 14, 15, 16]],
                        fontFamily: ["STRING"]
                    }
                },
                flex: {
                    color: ["STRING", ["blue", "black", "white", "gray|grey"]],
                    ratio: ["STRING", ["1x1", "1x4", "8x1", "20x1"]]
                }
            },
            getMutations: function(e, n) {
                switch (e) {
                    case "PLQ":
                        return ls[n];
                    case "PL":
                    default:
                        return cs[n]
                }
            },
            logos: rs,
            styles: {
                "layout:text": [
                    ["default", ".message__content {\n    display: inline-block;\n}\n\n.message__disclaimer > span {\n    text-decoration: none;\n}\n\n.message__headline > span:last-child > strong:last-child {\n    font-style: normal;\n    font-weight: normal;\n}\n\n.message__headline strong::after {\n    content: '.';\n    color: #2c2e2f;\n    font-style: normal;\n    font-weight: normal;\n}\n\n.weak {\n    transform: translateX(-90%);\n    display: inline-block;\n}\n"],
                    ["logo.type:primary", ".message__messaging {\n    display: inline-block;\n    white-space: normal;\n    flex: 0 0 auto;\n}\n\n.message__logo-container {\n    display: inline;\n    margin-right: 0.4rem;\n}\n\n.message__logo {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.message__disclaimer > .tag--default > span {\n    font-weight: 500;\n    color: #0070ba;\n}\n\n.message__logo:first-child {\n    margin-right: 5px;\n    margin-top: 2px;\n}\n"],
                    ["logo.position:top", ".message__content {\n    display: inline-block;\n}\n\n.message__logo-container {\n    margin: 0;\n    display: block;\n}\n\n.message__logo:last-child {\n    margin-top: 2px;\n}\n"],
                    ["logo.position:right", ".message__logo-container {\n    display: block;\n    order: 2;\n    width: auto;\n}\n\n.message__logo:last-child {\n    margin-top: 4px;\n}\n"],
                    ["logo.type:alternative", ".message__messaging {\n    display: inline-block;\n    white-space: normal;\n    flex: 0 0 auto;\n}\n\n.message__logo-container {\n    display: inline;\n    margin-right: 0px;\n    order: 0;\n}\n\n.message__logo {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.message__disclaimer > .tag--default > span {\n    font-weight: 500;\n    color: #0070ba;\n}\n\n.message__logo:first-child {\n    margin-right: 5px;\n    margin-top: 2px;\n}\n\n.message__logo > img {\n    top: 1px;\n}\n\n.message__content {\n    display: inline-flex;\n}\n"],
                    ["logo.type:inline", ".message__logo-container {\n    display: none;\n}\n\n.message__headline > .tag--medium > span::before {\n    content: 'Or ';\n}\n\n.message__headline .pp-text-logo::before {\n    content: 'Pay';\n    color: #003087;\n    font-weight: 600;\n    font-style: italic;\n}\n\n.message__headline .pp-text-logo::after {\n    content: 'Pal ';\n    color: #009cde;\n    font-weight: 600;\n    font-style: italic;\n}\n\n.message__headline strong {\n    color: #003087;\n    font-style: italic;\n}\n\n.message__headline span.multi:nth-child(2) > span:first-child::after {\n    content: ' Pay';\n    color: #003087;\n    font-weight: 600;\n    font-style: italic;\n    display: inline-block;\n    transform: translateX(12%);\n}\n\n.message__disclaimer > .tag--default > span {\n    font-weight: 500;\n    color: #0070ba;\n}\n\n.product-name {\n    color: #003087;\n    font-weight: 600;\n    font-style: italic;\n}\n\n.product-name::before {\n    color: #009cde;\n    content: 'Pal ';\n}\n"],
                    ["logo.type:inline && text.color:white", ".message__headline span.multi:nth-child(2) > span:first-child::after {\n    color: white;\n}\n.product-name::before {\n    color: white;\n}\n.product-name {\n    color: white;\n}\n.message__headline .pp-text-logo::before {\n    color: white;\n}\n.message__headline .pp-text-logo::after {\n    color: white;\n}\n.message__headline strong {\n    color: white;\n}\n.message__headline strong::after {\n    color: white;\n}\n"],
                    ["logo.type:none", ".message__headline > span:last-of-type {\n    display: inline-block;\n}\n\n.message__headline > .tag--medium > span::before {\n    content: 'Or ';\n}\n\n.message__disclaimer > .tag--default > span {\n    font-weight: 500;\n    color: #0070ba;\n}\n\n.message__headline > span:last-child > strong::before {\n    content: 'PayPal ';\n}\n\n.product-name::before {\n    content: 'PayPal ';\n}\n"],
                    ["text.color:white", ".message__disclaimer > .tag--default > span {\n    color: white;\n}\n\n.message__headline strong::after {\n    color: white;\n}\n\n.weak {\n    color: white;\n}\n"]
                ],
                "layout:flex": ds
            }
        },
        ps = xi({}),
        ms = ps[0],
        hs = ps[1];

    function gs() {
        return ms.localeClass
    }
    var ys = document.createElement("div");

    function ws(e) {
        return e.reduce((function(e, n) {
            return [].concat(e, [n, document.createTextNode(" ")])
        }), []).slice(0, -1)
    }

    function vs(e, n) {
        void 0 === n && (n = {});
        var t, r = (Array.isArray(e) ? e : [e]).map((function(e) {
            var n = document.createElement("span");
            return Array.isArray(e) ? (n.textContent = e[0], n.className = e[1]) : n.textContent = e, n
        }));
        return n.replace && (t = n.replace, r.forEach((function(e) {
            var n = t.reduce((function(e, n) {
                return e.replace(n[0], n[1])
            }), e.textContent);
            e.textContent = n
        }))), n.br && function(e, n) {
            var t = [].concat(e);
            n.forEach((function(e) {
                for (var n = e.textContent, r = []; _i()(n, t[0]);) r.push(t[0]), t.shift();
                if (0 === r.length || 1 === r.length && ya()(n, r[0])) return e.classList.add("br");
                var o = document.createElement("span");
                o.textContent = n, o.className = "br";
                var i = r.reduce((function(e, n) {
                    var t = function(e, n) {
                        var t = e.textContent,
                            r = t.indexOf(n) + n.length,
                            o = e.cloneNode();
                        if (o.textContent = t.slice(0, r).trim(), t.length !== r) {
                            var i = e.cloneNode();
                            return i.textContent = t.slice(r).trim(), [o, i]
                        }
                        return [o]
                    }(e[e.length - 1], n);
                    return [].concat(e.slice(0, -1), t)
                }), [o]);
                return e.innerHTML = "", i.forEach((function(n) {
                    e.appendChild(n), e.appendChild(document.createTextNode(" "))
                }))
            }))
        }(n.br, r), ws(r)
    }
    ys.innerHTML = '<div role="button" class="message" tabindex="0" data-pp-message>\n    <div class="message__container">\n        \x3c!-- foreground layer --\x3e\n        <div class="message__foreground"></div>\n\n        \x3c!-- content layer --\x3e\n        <div class="message__content">\n            \x3c!-- PP Credit Logo --\x3e\n            <div class="message__logo-container"></div>\n            \x3c!-- Promotional Messaging --\x3e\n            <div class="message__messaging">\n                <div class="message__promo-container">\n                    <h5 class="message__headline"></h5>\n                    <h6 class="message__sub-headline"></h6>\n                </div>\n                <p class="message__disclaimer"></p>\n            </div>\n        </div>\n        \x3c!-- background layer --\x3e\n        <div class="message__background"></div>\n    </div>\n</div>\n', document.createElement("div").innerHTML = '\x3c!-- Click tracking URL --\x3e\n<a class="pp-legacy__link" target="_blank" data-pp-message></a>\n\x3c!-- Impression tracking URL --\x3e\n<img class="pp-legacy__pixel" style="display:none!important" />\n';
    var _s = Bo((function(e, n, t) {
            return !1 !== t && ("string" != typeof t && "object" != typeof t ? null : ws((r = "string" == typeof t ? [{
                tag: t
            }] : Array.isArray(t) ? t : [t]).map((function(t) {
                var o, i = document.createElement("span");
                if (r.length > 1 && i.setAttribute("class", "multi"), "string" == typeof t) o = vs(bi(e[n], t)), i.classList.add("tag--" + t.split(".", 1)[0]);
                else {
                    var a = t.tag,
                        s = c(t, ["tag"]);
                    o = vs(bi(e[n], a), s), i.classList.add("tag--" + a.split(".", 1)[0])
                }
                return o.forEach((function(e) {
                    return i.appendChild(e)
                })), i
            }))));
            var r
        })),
        xs = Bo((function(e, n, t, r) {
            return r.reduce((function(r, o) {
                var i = o[0],
                    a = o[1],
                    s = i.split(" && ");
                if ("default" === i || s.every((function(e) {
                        return Ko()(n, e)
                    }))) {
                    var c = "function" == typeof a ? a({
                        textSize: $o(e, "text.size")
                    }) : a;
                    return t === Array ? [].concat(r, [c]) : Zo(r, c)
                }
                return r
            }), t === Array ? [] : {})
        })),
        bs = {
            getTemplateNode: Wo((function(e, n) {
                var t = $o(e, "style.layout");
                if ("custom" === t) return function(e) {
                    var n = e.data,
                        t = e.meta,
                        r = e.template,
                        o = document.createElement("div"),
                        i = t.offerType;
                    if ("" === r) return o;
                    try {
                        var a = r.replace(/{{\s*?([^\s]+?)\s*?}}/g, (function(e, t) {
                            var r = t.split("."),
                                o = r[0],
                                i = r.slice(1).join(".");
                            if ("logo" === o) {
                                var a = document.createElement("div");
                                return ai(a, $o(ms.logos, i.toUpperCase()), "PayPal Credit logo"), a.innerHTML
                            }
                            return vs(bi(n[o], i)).reduce((function(e, n) {
                                return "" + e + (n.outerHTML || " ")
                            }), "")
                        }));
                        o.innerHTML = a, ko()(zo()(o.children), (function(e) {
                            return "STYLE" !== e.tagName
                        })).classList.add("offer--" + i.replace(/:/g, "-").toLowerCase())
                    } catch (e) {}
                    return o
                }(n);
                var r = $o(e, "style._flattened"),
                    o = $o(n, "meta.offerType"),
                    i = $o(n, "data"),
                    a = xs(e.style, r),
                    s = a(Object, ms.getMutations(o, "layout:" + t).map((function(e) {
                        return e[1].styles ? [e[0], m({}, e[1], {
                            styles: e[1].styles.map((function(e) {
                                return e.replace(/\.message/g, "." + gs() + " .message")
                            }))
                        })] : e
                    }))),
                    c = "layout:" + t,
                    l = a(Array, xa[c]),
                    u = gs(),
                    d = a(Array, function(e) {
                        return ms.styles && ms.styles[e] || []
                    }(c)).map((function(e) {
                        return e.replace(/(^|,)[ ]*?\.message/gm, "." + u + " .message")
                    })),
                    f = [].concat(l, d),
                    p = _s(i),
                    h = ys.cloneNode(!0),
                    g = ti("message", h),
                    y = ["container", "logo-container", "headline", "sub-headline", "disclaimer"].map(g),
                    w = y[1],
                    v = y[2],
                    _ = y[3],
                    x = y[4];
                y[0].classList.add(u), oi(v, p("headline", s.headline)), oi(_, p("subHeadline", s.subHeadline)), ii(x, p("disclaimer", s.disclaimer)), ai(w, s.logo, "PayPal Credit logo");
                var b = function(e) {
                    void 0 === e && (e = !1);
                    var n = ms.productName,
                        t = n[0],
                        r = n[1],
                        o = document.createElement("span");
                    if (o.textContent = t + " ", e) {
                        var i = document.createElement("span");
                        i.className = "pp-text-logo", o.appendChild(i)
                    }
                    var a = document.createElement("strong");
                    a.textContent = r, o.appendChild(a), v.appendChild(document.createTextNode(" ")), v.appendChild(o)
                };
                "locale--GB" === gs() ? b("inline" === $o(e, "style.logo.type") || "flex" === $o(e, "style.layout")) : "none" === $o(e, "style.logo.type") && b(), "inline" === $o(e, "style.logo.type") && v.appendChild(w);
                var E, A, C, P = $o(e, "style.text.size");
                return "text" === t && P && (f.push(".message__headline { font-size: " + P + "px }"), f.push(".message__disclaimer { font-size: " + P + "px }")), s.messageWidth && ("number" == typeof s.messageWidth ? f.push(".message__messaging { width: " + s.messageWidth + "px }") : Array.isArray(s.messageWidth) && f.push(".message__messaging { min-width: " + s.messageWidth[0] + "px; max-width: " + s.messageWidth[1] + "px }")), "text" === t && $o(e, "style.text.fontFamily") && ri(h, (E = e.account, "\n    @font-face {\n        font-family: " + (A = $o(e, "style.text.fontFamily")) + ";\n        font-style: normal;\n        font-weight: 400;\n\n        src: url('" + (C = "https://www.paypalobjects.com/upstream/assets/custom/" + E + "/" + A) + ".eot');\n        src: url('" + C + ".woff2')\n                format('woff2'),\n            url('" + C + ".woff') format('woff'),\n            url('" + C + ".svg#" + A + "')\n                format('svg');\n    }\n\n    html {\n        font-family: " + A + ", PayPal-Sans, Helvetica, Arial, sans-serif;\n    }")), s.styles && ri(h, s.styles.join("")), ri(h, f.join("\n")), h
            }))
        },
        Es = t(79),
        As = t.n(Es),
        Cs = {
            click: new Map,
            scroll: new Map,
            hover: new Map,
            resize: new Map
        };

    function Ps(e) {
        Cs.resize.has(e.target.frameElement) && Cs.resize.get(e.target.frameElement)(e)
    }

    function Ss(e) {
        Cs.scroll.forEach((function(n) {
            return n(e)
        }))
    }

    function Rs(e) {
        Cs.hover.has(e.target) && Cs.hover.get(e.target)(e)
    }

    function Os(e) {
        e.target.ownerDocument && Cs.click.has(e.target.ownerDocument.defaultView.frameElement) ? Cs.click.get(e.target.ownerDocument.defaultView.frameElement)(e) : Cs.click.has(e.currentTarget) && e.currentTarget !== e.target && Cs.click.get(e.currentTarget)(e)
    }

    function Ts(e) {
        return {
            on: function(n, t) {
                "IFRAME" !== e.tagName && "resize" === n || function(e, n, t) {
                    if (function(e, n) {
                            "scroll" === e && 0 === Cs.scroll.size ? window.addEventListener("scroll", Ss) : "hover" === e && 0 === Cs.hover.size ? document.addEventListener("mouseover", Rs) : "resize" !== e || Cs[e].has(n) ? "click" !== e || Cs[e].has(n) || ("IFRAME" === n.tagName ? n.contentWindow.document.body.addEventListener("click", Os) : n.addEventListener("click", Os)) : n.contentWindow.addEventListener("resize", Ps)
                        }(e, n), Cs[e].has(n)) {
                        var r = Cs[e].get(n);
                        Cs[e].set(n, (function(e) {
                            r(e), t(e)
                        }))
                    } else Cs[e].set(n, t)
                }(n, e, t)
            },
            clear: function(n) {
                Cs[n].delete(e), "scroll" === n && 0 === Cs.scroll.size ? window.removeEventListener("scroll", Ss) : "hover" === n && 0 === Cs.hover.size ? document.removeEventListener("mouseover", Rs) : "click" === n ? "IFRAME" === e.tagName ? e.contentWindow.document.body.removeEventListener("click", Os) : e.removeEventListener("click", Os) : "IFRAME" === e.tagName && "resize" === n && e.contentWindow.removeEventListener("resize", Ps)
            }
        }
    }
    var Is = new Map;

    function ks() {
        var e = {
            target: "SDK",
            componentUrl: Ko()(["production", "sandbox"], "production") ? "https://www.paypalobjects.com/upstream/bizcomponents/js/versioned/smart-credit-modal@1.19.0.js" : window.location.origin + "/smart-credit-modal.js"
        };
        return gi()(e, JSON.parse(decodeURIComponent(atob(et()).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        })).join("")))), se(JSON.stringify(e))
    }
    var Ls = Bo((function(e, n) {
        return si(e).then((function() {
            var t, r = "IFRAME" === e.tagName ? e.contentWindow.document : document,
                o = "string" == typeof n ? function(e, n, t) {
                    var r = e.createElement("div");
                    return r.innerHTML = t, r
                }(r, 0, n) : r.importNode(n, !0),
                i = zo()(o.getElementsByTagName("img")).filter((function(e) {
                    return !e.complete
                })).map((function(e) {
                    return new E((function(n) {
                        return e.addEventListener("load", n)
                    }))
                })).concat((Is.has(t = r) || Is.set(t, new E((function(e) {
                    if (ri(t.head, "@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff2')\n            format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-small/1-0-0/PayPalSansSmall-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 200;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Thin.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 300;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Light.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 400;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Regular.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 500;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Medium.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n\n@font-face {\n    font-family: PayPal-Sans-Big;\n    font-style: normal;\n    font-weight: 700;\n\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.eot');\n    src: url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff2') format('woff2'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.woff') format('woff'),\n        url('https://www.paypalobjects.com/ui-web/paypal-sans-big/1-0-0/PayPalSansBig-Bold.svg#69ac2c9fc1e0803e59e06e93859bed03')\n            format('svg');\n}\n html { font-family: PayPal-Sans, Helvetica, Arial, sans-serif; }"), t.defaultView.frameElement && !t.defaultView.frameElement.offsetWidth) e();
                    else if (t.fonts) t.fonts.load("12px PayPal-Sans").then(e).catch(e);
                    else {
                        var n = t.createElement("span");
                        n.setAttribute("style", "position: absolute; opacity: 0; font-family: sans-serif;"), n.textContent = "The quick brown fox jumps over the lazy dog", t.body.appendChild(n);
                        var r = n.getBoundingClientRect(),
                            o = r.width,
                            i = r.height;
                        n.setAttribute("style", "position: absolute; opacity: 0;");
                        var a = !1;
                        setTimeout((function() {
                            a = !0
                        }), 5e3);
                        var s = setInterval((function() {
                            var r = n.getBoundingClientRect();
                            (a || o !== r.width || i !== r.height) && (clearInterval(s), t.body.removeChild(n), e())
                        }), 100)
                    }
                }))), Is.get(t)));
            return zo()(o.getElementsByTagName("style")).forEach((function(e) {
                var n = r.createElement("style");
                n.textContent = e.textContent, e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e)
            })), zo()(o.getElementsByTagName("script")).forEach((function(e) {
                var n = r.createElement("script");
                n.text = e.text, e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e)
            })), E.all(i).then((function() {
                return new E((function(n) {
                    return requestAnimationFrame((function() {
                        for (var t = "IFRAME" === e.tagName ? r.body : e; t.firstChild;) t.removeChild(t.firstChild);
                        zo()(o.children).forEach((function(e) {
                            return t.appendChild(e)
                        })), requestAnimationFrame(n)
                    }))
                }))
            }))
        }))
    }), 2);

    function zs(e) {
        var n = e.getBoundingClientRect(),
            t = (n.top + n.bottom) / 2,
            r = (n.left + n.right) / 2;
        return !(t > window.innerHeight || t < 0 || r > window.innerWidth || r < 0)
    }
    var Ns = Bo((function(e, n) {
            var t = n.options,
                r = t.amount,
                o = t.account,
                i = t.merchantId,
                a = t.placement,
                s = t.onClick,
                c = n.events,
                l = n.track,
                u = e.getBoundingClientRect(),
                d = {
                    et: "CLIENT_IMPRESSION",
                    event_type: "stats",
                    integration_type: "SDK",
                    messaging_version: "1.19.0",
                    placement: a,
                    pos_x: Math.round(u.left),
                    pos_y: Math.round(u.top),
                    browser_width: window.innerWidth,
                    browser_height: window.innerHeight,
                    visible: zs(e),
                    amount: r
                };
            i ? d.partner_client_id = o.slice(10) : jo()(o, "client-id:") && (d.client_id = o.slice(10)), d.visible || c.on("scroll", (function() {
                    zs(e) && (c.clear("scroll"), l({
                        et: "CLIENT_IMPRESSION",
                        event_type: "scroll",
                        visible: !0
                    }))
                })),
                function() {
                    var e = window.document.body.appendChild(window.document.createElement("div"));
                    e.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"), e.setAttribute("style", "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;");
                    var n = void 0 !== window.getComputedStyle ? window.getComputedStyle(e) : void 0;
                    return new E((function(t) {
                        ! function r(o) {
                            return o <= 0 ? (window.document.body.removeChild(e), t(!1)) : null !== window.document.body.getAttribute("abp") || n && ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility")) || null === e.offsetParent || 0 === e.offsetHeight || 0 === e.offsetLeft || 0 === e.offsetTop || 0 === e.offsetWidth || 0 === e.clientHeight || 0 === e.clientWidth ? (window.document.body.removeChild(e), t(!0)) : setTimeout((function() {
                                r(o - 1)
                            }), 50)
                        }(5)
                    }))
                }().then((function(n) {
                    d.adblock = n, d.blocked = function(e) {
                        if ("function" == typeof window.getComputedStyle) {
                            var n = window.getComputedStyle(e);
                            if ("none" === n.getPropertyValue("display") || "hidden" === n.getPropertyValue("visibility") || "auto" !== n.getPropertyValue("clip")) return !0
                        }
                        var t = e.getBoundingClientRect();
                        return t.left > window.document.body.scrollWidth || t.right < 0 || t.top > window.document.body.scrollHeight || t.bottom < 0 || 0 === e.offsetWidth || 0 === e.offsetHeight
                    }(e), l(d, "true" === e.getAttribute("data-pp-message-hidden")), l("MORS_IMPRESSION")
                })), c.on("click", (function() {
                    l({
                        et: "CLICK",
                        event_type: "click",
                        link: "Banner Wrapper"
                    }), l("MORS_CLICK"), s && s()
                })), c.on("hover", (function() {
                    l({
                        et: "CLIENT_IMPRESSION",
                        event_type: "hover"
                    }), c.clear("hover")
                }))
        })),
        Ms = t(78),
        Fs = t.n(Ms),
        js = {
            "1x1": [{
                ratio: "1x1",
                width: [120, 300]
            }],
            "1x4": [{
                ratio: "1x2",
                width: [160, 160]
            }, {
                ratio: "1x4",
                breakpoint: 768
            }],
            "8x1": [{
                ratio: "6x1",
                width: [250, 768]
            }, {
                ratio: "8x1",
                breakpoint: 768
            }],
            "20x1": [{
                ratio: "6x1",
                width: [250, 768]
            }, {
                ratio: "20x1",
                width: [350, 1169],
                breakpoint: 768
            }]
        };

    function Ws(e) {
        if ("number" == typeof e) return e + "px";
        if ("string" == typeof e) {
            var n = e.match(/^(\d+)x(\d+)$/);
            if (n) return 100 * n.slice(1).reduce((function(e, n) {
                return +n / +e
            })) + "%"
        }
        return e
    }

    function Ds(e) {
        var n = e.split(/(?=[@[])/),
            t = n[0],
            r = n.slice(1);
        return t.match(/\d+x\d+/) ? r.reduce((function(e, n) {
            return jo()(n, "@") ? e.breakpoint = n.slice(1) : jo()(n, "[") && (e.width = n.slice(1, -1).split(",")), e
        }), {
            ratio: t
        }) : {}
    }
    var qs = Bo((function(e, n) {
        var t = n.wrapper,
            r = n.options,
            o = n.logger,
            i = n.meta;
        if ("IFRAME" === e.tagName) {
            var a, s, c = $o(r, "style.layout"),
                l = $o(r, "style.ratio");
            if ("flex" !== c && "custom" !== c || !l) {
                var u = i.minWidth;
                e.setAttribute("style", "width: 100%; border: none;"), u && e.style.setProperty("min-width", u + "px"), t.removeAttribute("class");
                var d = function(e) {
                        var n = document.createElement("div");
                        n.setAttribute("style", "width: 100%; overflow: hidden");
                        var t = document.createElement("div");
                        t.setAttribute("style", "width: 10000px"), n.appendChild(t), e.parentNode.appendChild(n);
                        var r = n.offsetWidth;
                        return e.parentNode.removeChild(n), r
                    }(t),
                    f = function() {
                        e.setAttribute("height", e.contentWindow.document.body.lastChild && e.contentWindow.document.body.lastChild.offsetHeight || e.contentWindow.document.body.scrollHeight)
                    };
                if (u && d < u && "custom" !== c) {
                    var p = ms.minimumSizeOptions || {};
                    if (!Fs()(bo()(p), (function(e) {
                            var n = e[1];
                            return $o(r, e[0]) === n
                        }))) throw o.warn("Message Overflow. PayPal Credit Message of layout type " + $o(r, "style.layout") + " requires a width of at least " + u + "px. Current container is " + d + "px. Attempting fallback message."), a = function() {
                        bo()(p).forEach((function(e) {
                            var n = e[1],
                                r = "data-pp-" + e[0].replace(/\./g, "-");
                            t.parentNode.setAttribute(r, n)
                        }))
                    }, (s = new Error(pa.MESSAGE_OVERFLOW)).onEnd = a, s;
                    o.error({
                        name: pa.MESSAGE_HIDDEN
                    }), o.warn("Message hidden. PayPal Credit Message fallback requires minimum width of " + u + "px. Current container is " + d + "px. Message hidden."), e.setAttribute("data-pp-message-hidden", "true")
                } else f(), Ts(e).on("resize", f)
            } else ! function(e, n, t) {
                var r = [];
                "flex" === t ? r = js[n] : Array.isArray(n) ? r = n.map(Ds) : "string" == typeof n && (r = [Ds(n)]);
                var o = "pp-flex--" + r.slice(-1)[0].ratio,
                    i = r.reduce((function(e, n) {
                        var t = n.breakpoint,
                            r = n.ratio,
                            i = n.width;
                        return "" === e ? "\n                ." + o + " {\n                    display: block;\n                    width: 100%;\n                    " + (Array.isArray(i) ? "\n                                min-width: " + Ws(i[0]) + ";\n                                max-width: " + Ws(i[1]) + ";" : "") + "\n                    box-sizing: border-box;\n                    position: relative;\n                }\n\n                ." + o + "::before {\n                    padding-top: " + Ws(r) + ";\n                    content: '';\n                    display: block;\n                }\n\n                ." + o + " iframe {\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    width: 100%;\n                    height: 100%;\n                }\n            " : t ? "\n            " + e + "\n            @media (min-width: " + Ws(t) + ") {\n                " + (Array.isArray(i) ? "\n                            ." + o + " {\n                                min-width: " + Ws(i[0]) + ";\n                                max-width: " + Ws(i[1]) + ";\n                            }" : "") + "\n                ." + o + "::before {\n                    padding-top: " + Ws(r) + ";\n                }\n            }\n        " : e
                    }), ""),
                    a = document.createElement("style");
                a.textContent = i, e.setAttribute("class", o), e.appendChild(a)
            }(t, l, c), e.setAttribute("style", "width: 100%; border: none;"), e.removeAttribute("height")
        }
    }));

    function Bs(e) {
        var n = document.createElement(e);
        "iframe" === e && (n.setAttribute("title", "PayPal Credit Promotion Message"), n.setAttribute("style", "width: 100%; border: none;"), n.setAttribute("src", "about:blank"), n.setAttribute("height", 0));
        var t = bo()({
            insertMarkup: Ls,
            setSize: qs,
            runStats: Ns,
            events: Ts
        }).reduce((function(e, t) {
            var r;
            return m({}, e, ((r = {})[t[0]] = (0, t[1])(n), r))
        }), {});
        return t.clearEvents = function() {
            return function(e) {
                As()(Cs).forEach((function(n) {
                    return n.delete(e)
                })), 0 === Cs.scroll.size && window.removeEventListener("scroll", Ss), 0 === Cs.hover.size && document.removeEventListener("mouseover", Rs), "IFRAME" === e.tagName ? (e.contentWindow.removeEventListener("resize", Ps), e.contentWindow.document.body.removeEventListener("click", Os)) : e.removeEventListener("click", Os)
            }(n)
        }, [n, t]
    }
    var Hs = {
            id: ["STRING"],
            merchantId: ["STRING"],
            onRender: ["FUNCTION"],
            onClick: ["FUNCTION"],
            onApply: ["FUNCTION"],
            currency: ["STRING", ["USD", "EUR", "GBP"]],
            placement: ["STRING", ["", "home", "category", "product", "cart", "payment"]],
            buyerCountry: ["STRING", [void 0, "US", "DE", "GB", "FR"]]
        },
        Gs = function(e, n, t) {
            return e.warn("Invalid option value (" + n + "). " + t)
        },
        Us = function(e, n, t, r) {
            return Gs(e, n, 'Expected type "' + t.toLowerCase() + '" but instead received "' + typeof r + '".')
        },
        Ys = function(e, n, t, r) {
            return Gs(e, n, 'Expected one of ["' + t.join('", "').replace(/\|[\w|]+/g, "") + '"] but received "' + r + '".')
        };

    function Vs(e, n, t, r) {
        return void 0 === r && (r = "style."), bo()(n).reduce((function(o, i) {
            var a, s = i[0],
                c = i[1];
            if (Array.isArray(c)) {
                var l, u = function(e, n, t, r) {
                    var o = n[0],
                        i = n[1],
                        a = void 0 === i ? [] : i;
                    if (void 0 === t) return a[0];
                    if (ba(o, t)) {
                        if ("STRING" === o && a.length > 0) {
                            var s = ko()(a, (function(e) {
                                return "string" == typeof e && e.split("|").some((function(e) {
                                    return e === t
                                }))
                            }));
                            return void 0 === s ? (Ys(e, r, a, t), void 0 === a[0] ? a[0] : a[0].split("|")[0]) : s.split("|")[0]
                        }
                        var c = Number(t);
                        if ("NUMBER" === o && ba(o, c)) {
                            if (a.length > 0) {
                                var l = ko()(a, (function(e) {
                                    return e === c
                                }));
                                return void 0 === l ? (Ys(e, r, a, c), a[0]) : l
                            }
                            return c
                        }
                        return t
                    }
                    return Us(e, r, o, t), a[0]
                }(e, c, t[s], "" + r + s);
                return void 0 === u ? o : m({}, o, ((l = {})[s] = u, l))
            }
            return m({}, o, ((a = {})[s] = Vs(e, n[s], t[s] || {}, "" + r + s + "."), a))
        }), {})
    }

    function Ks(e, n, t) {
        return m({
            layout: t.layout
        }, Vs(e, n[t.layout], t))
    }
    var Js = Bo((function(e, n) {
            var t = ms.validOptions,
                r = t[n.layout] ? Ks(e, t, n) : (Ys(e, "style.layout", Object.keys(t), n.layout), Ks(e, t, {
                    layout: "text"
                }));
            return e.info("Validate_Style", {
                style: Jo(r)
            }), r
        })),
        Zs = Bo((function(e, n) {
            var t, r = n.account,
                o = n.amount,
                i = n.style,
                a = n.offer,
                s = c(n, ["account", "amount", "style", "offer"]),
                l = Vs(e, Hs, s, ""),
                u = s.buyerCountry,
                d = s.currency;
            if (ba("STRING", r) ? 13 === r.length || 10 === r.length || jo()(r, "client-id:") ? l.account = r : Gs(e, "account", "Ensure the correct Merchant Account ID has been entered.") : Us(e, "account", "STRING", r), void 0 !== o) {
                var f = Number(o);
                ba("NUMBER", f) ? f < 0 ? Gs(e, "amount", "Ensure value is a positive number.") : l.amount = f : Us(e, "amount", "NUMBER", o)
            }
            void 0 !== a && (ba("STRING", a) ? "NI" !== a ? Gs(e, "offer", "Ensure valid offer type.") : l.offerType = a : Us(e, "offer", "STRING", a));
            var p = null == i || null == (t = i.text) ? void 0 : t.size;
            return void 0 !== p && (ba("NUMBER", p = Number(p)) ? i.text.size = p : (Us(e, "style.text.size", "NUMBER", p), delete i.text.size)), ba("OBJECT", i) && ba("STRING", i.layout) ? l.style = i : (ba("OBJECT", i) ? Us(e, "style.layout", "STRING", i.layout) : void 0 !== i && Us(e, "style", "OBJECT", i), l.style = {
                layout: "text"
            }), void 0 !== u && "US" !== u && (void 0 === o || "USD" !== d && void 0 !== d || e.warn("When using a non-US buyerCountry override with an amount, please add corresponding currency code to your config.")), e.info("Validate_Config", {
                options: Jo(l)
            }), l
        }));

    function $s(e, n) {
        var t = n.match(/^<!--([\s\S]+?)-->/);
        if (t) try {
            return JSON.parse(t[1])
        } catch (n) {
            e.error({
                name: pa.CUSTOM_JSON_OPTIONS_FAIL
            })
        }
        return {}
    }
    var Xs = Do((function(e) {
        var n = e.account,
            t = e.merchantId,
            r = e.amount,
            o = e.offerType,
            i = e.currency,
            a = e.buyerCountry,
            s = e.style.typeEZP,
            l = zi("MESSAGE_A"),
            u = {
                merchant_id: t,
                amount: r,
                currency: i,
                buyer_country: a,
                variant: "C",
                credit_type: "" === s || "NI" === o ? "NI" : void 0
            };
        return jo()(n, "client-id") ? u.client_id = n.slice(10) : u.payer_id = n, Ei("GET", l + "?" + bo()(u).filter((function(e) {
            return e[1]
        })).reduce((function(e, n) {
            return e + "&" + n[0] + "=" + n[1]
        }), "").slice(1), {
            withCredentials: !0
        }).then((function(e) {
            var n = e.data;
            return {
                markup: {
                    meta: n.meta,
                    data: c(n, ["meta"])
                }
            }
        }))
    }), ["account", "merchantId", "amount", "offerType", "buyerCountry"]);

    function Qs(e) {
        var n = e.options,
            t = e.logger;
        return t.info("Fetch_Start"), ("custom" !== $o(n, "style.layout") ? Xs(n) : E.all([Xs(n), ha(n.style)]).then((function(e) {
            var r = e[0],
                o = e[1];
            return "object" == typeof r.markup ? ("" === o && t.error({
                name: pa.CUSTOM_TEMPLATE_FAIL
            }), r.markup.template = o, {
                markup: r.markup,
                options: Zo(n, $s(t, o))
            }) : {
                markup: r.markup
            }
        }))).then((function(e) {
            var r = e.markup,
                o = e.options,
                i = void 0 === o ? {} : o;
            t.info("Fetch_End");
            var a = r && r.meta && r.meta.offerCountry || "US";
            ! function(e) {
                hs(function(e) {
                    switch (e) {
                        case "DE":
                            return es;
                        case "GB":
                            return fs;
                        case "US":
                        default:
                            return Ha
                    }
                }(e))
            }(a);
            var s, c, l, u, d = Js(t, n.style),
                f = m({}, n, {
                    style: d
                }, i);
            if (f.style._flattened = function e(n, t, r) {
                    return void 0 === t && (t = ""), void 0 === r && (r = ":"), bo()(n).reduce((function(n, o) {
                        var i = o[0],
                            a = o[1];
                        switch (typeof a) {
                            case "object":
                                return [].concat(n, e(a, "" + t + i + "."));
                            case "string":
                            default:
                                return [].concat(n, ["" + t + i + r + a])
                        }
                    }), [])
                }(d), "object" == typeof r) {
                var p = m({}, r.meta, {
                        offerCountry: a
                    }),
                    h = bs.getTemplateNode(f, r);
                return "text" === $o(f, "style.layout") ? (s = h, c = Bs("iframe"), l = c[0], u = c[1].insertMarkup, l.setAttribute("style", "opacity: 0; width: 0; height: 0; position: absolute; left: -99999px;"), document.body.appendChild(l), u(s).then((function() {
                    var e = l.contentWindow.document.querySelector(".message__content"),
                        n = l.contentWindow.getComputedStyle(e),
                        t = zo()(e.children),
                        r = ["margin-left", "border-left-width", "padding-left", "width", "padding-right", "border-right-width", "margin-right"],
                        o = _i()(n.getPropertyValue("display"), "flex") ? Math.round(t.reduce((function(e, n) {
                            var t = l.contentWindow.getComputedStyle(n);
                            return e + r.reduce((function(e, n) {
                                return e + parseFloat(t.getPropertyValue(n))
                            }), 0)
                        }), 0)) : Math.max.apply(Math, t.map((function(e) {
                            var n = l.contentWindow.getComputedStyle(e);
                            return Math.round(r.reduce((function(e, t) {
                                return e + parseFloat(n.getPropertyValue(t))
                            }), 0))
                        })));
                    return document.body.removeChild(l), o
                }))).then((function(e) {
                    return {
                        markup: r,
                        options: f,
                        template: h,
                        meta: m({}, p, {
                            minWidth: e
                        })
                    }
                })) : {
                    markup: r,
                    options: f,
                    template: h,
                    meta: m({}, p, {
                        minWidth: h.minWidth
                    })
                }
            }
            var g = document.createElement("div");
            return g.innerHTML = r || "", "" === r && t.warn("No message was found for the given configuration parameters."), {
                markup: r,
                options: f,
                template: g,
                meta: {
                    offerCountry: "US",
                    offerType: "NI"
                }
            }
        }))
    }
    var ec, nc = function(e) {
            var n = e.uid,
                t = e.frame,
                r = e.prerenderFrame,
                o = e.doc;
            e.event.on("zoid-rendered", (function() {
                r.style.setProperty("display", "none")
            }));
            var i = function(e) {
                return "position: " + e + "; top: 0; left: 0; width: 100%; height: 100%; z-index: 2147483647; border: none;"
            };
            return sr("div", {
                id: n
            }, sr("div", {
                style: i("fixed")
            }, sr("node", {
                el: t,
                style: i("absolute")
            }), sr("node", {
                el: r,
                style: i("absolute")
            }))).render(lr({
                doc: o
            }))
        },
        tc = (ec = "__paypal_credit_modal_old__", window[ec] || (window[ec] = Ur({
            tag: "paypal-credit-modal-old",
            url: zi("MODAL"),
            domain: /\.paypal\.com(:\d+)?$/,
            containerTemplate: nc,
            attributes: {
                iframe: {
                    scrolling: "no"
                }
            },
            props: {
                account: {
                    type: "string",
                    queryParam: !1,
                    sendToChild: !1,
                    required: !0
                },
                merchantId: {
                    type: "string",
                    queryParam: "merchant_id",
                    sendToChild: !0,
                    required: !1
                },
                country: {
                    type: "string",
                    queryParam: !0,
                    required: !0
                },
                currency: {
                    type: "string",
                    queryParam: !0,
                    required: !1
                },
                amount: {
                    type: "number",
                    queryParam: !0,
                    required: !1
                },
                refId: {
                    type: "string",
                    queryParam: !1,
                    required: !1
                },
                onClick: {
                    type: "function",
                    queryParam: !1,
                    required: !1
                },
                onCalculate: {
                    type: "function",
                    queryParam: !1,
                    required: !1
                },
                onClose: {
                    type: "function",
                    queryParam: !1,
                    required: !1
                },
                onReady: {
                    type: "function",
                    queryParam: !1,
                    required: !1
                },
                offer: {
                    type: "string",
                    value: function(e) {
                        return function(e) {
                            switch (void 0 === e && (e = "NI"), !0) {
                                case Ko()(["EZP:ANY:EQZ", "EZP:ANY:GTZ", "PALA:MULTI:EQZ", "PALA:MULTI:GTZ", "PALA:SINGLE:EQZ", "PALA:SINGLE:GTZ"], e.toUpperCase()):
                                    return "EZP";
                                default:
                                    return "NI"
                            }
                        }(e.props.offer)
                    },
                    required: !1
                },
                env: {
                    type: "string",
                    queryParam: !0,
                    value: Eo
                },
                payerId: {
                    type: "string",
                    queryParam: "payer_id",
                    value: function(e) {
                        var n = e.props;
                        return jo()(n.account, "client-id:") ? void 0 : n.account
                    },
                    required: !1
                },
                clientId: {
                    type: "string",
                    queryParam: "client_id",
                    value: function(e) {
                        var n = e.props;
                        return jo()(n.account, "client-id:") ? n.account.slice(10) : void 0
                    },
                    required: !1
                },
                targetMeta: {
                    type: "string",
                    queryParam: !0,
                    sendToChild: !1,
                    value: ks
                }
            }
        })), window[ec]),
        rc = Do((function(e) {
            var n, t, r, o, i = e.options,
                a = e.account,
                s = e.meta,
                c = e.track,
                l = e.wrapper,
                u = (n = xi({}), t = n[0], r = n[1], o = sr("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, minimal-ui, shrink-to-fit=no"
                }).render(lr({
                    doc: document
                })), [function() {
                    var e = document.body.getAttribute("style"),
                        n = document.head.querySelector('meta[name="viewport"]') || sr("meta", {
                            name: "viewport",
                            content: ""
                        }).render(lr({
                            doc: document
                        }));
                    n.parentNode && document.head.removeChild(n), document.head.appendChild(o), document.body.style.overflow = "hidden", document.body.style.msOverflowStyle = "scrollbar", r({
                        bodyStyle: e,
                        oldViewport: n
                    })
                }, function() {
                    document.head.removeChild(o), document.head.appendChild(t.oldViewport), document.body.setAttribute("style", t.bodyStyle || "")
                }]),
                d = u[0],
                f = u[1],
                p = tc({
                    account: a,
                    offer: s.offerType,
                    merchantId: i.merchantId,
                    country: s.offerCountry,
                    currency: i.currency,
                    amount: i.amount,
                    refId: s.messageRequestId,
                    onCalculate: function(e) {
                        return c({
                            et: "CLICK",
                            event_type: "click",
                            link: "Calculator",
                            amount: e
                        })
                    },
                    onClick: function(e) {
                        i.onApply && _i()(e, "Apply Now") && i.onApply(), c({
                            et: "CLICK",
                            event_type: "click",
                            link: e
                        })
                    },
                    onClose: function(e) {
                        f(), l.firstChild.focus(), c({
                            et: "CLICK",
                            event_type: "modal-close",
                            link: e
                        })
                    },
                    onReady: function(e) {
                        return c({
                            et: "CLIENT_IMPRESSION",
                            event_type: "modal-open",
                            modal: e.modalType
                        })
                    }
                }),
                h = p.render,
                g = p.updateProps;
            return (0, p.hide)(), {
                renderProm: h("body").then((function() {
                    return E.delay(100)
                })),
                show: function(e) {
                    d(), g(m({}, e, {
                        visible: !0
                    }))
                }
            }
        }), ["account"]),
        oc = function(e) {
            var n = e.options,
                t = n.id,
                r = n.account,
                o = c(n, ["id", "account"]),
                i = e.meta,
                a = e.events,
                s = rc({
                    options: o,
                    account: r,
                    meta: i,
                    track: e.track,
                    wrapper: e.wrapper
                }),
                l = s.renderProm,
                u = s.show;
            a.on("click", (function() {
                l.then((function() {
                    u({
                        offer: i.offerType,
                        merchantId: o.merchantId,
                        country: i.offerCountry,
                        currency: o.currency,
                        amount: o.amount,
                        refId: i.messageRequestId + "-" + t
                    })
                }))
            }))
        },
        ic = new Map,
        ac = new Map;

    function sc(e) {
        var n = (e.meta && e.meta.offerType) + "::" + e.options.style._flattened.sort().join("::"),
            t = e.meta;
        return {
            track: e.logger.track({
                uuid: n,
                messageRequestId: t.messageRequestId + "-" + e.options.id,
                urls: {
                    DEFAULT: t.clickUrl,
                    MORS_IMPRESSION: t.impressionUrl + "&idx=" + e.options.id
                }
            })
        }
    }
    var cc = Bo((function(e, n) {
            return m({}, n, e(n))
        })),
        lc = Bo((function(e, n) {
            return e(n).then((function(e) {
                return m({}, n, e)
            }))
        })),
        uc = function(e) {
            var n = e.options.onRender;
            n && n()
        },
        dc = function(e, n, t) {
            ac.has(e) || ac.set(e, function(e) {
                var n = e.id,
                    t = e.selector,
                    r = e.type,
                    o = xi({
                        count: 1,
                        account: e.account,
                        history: [],
                        logs: []
                    }),
                    i = o[0],
                    a = o[1],
                    s = {
                        start: function(e) {
                            $o(e, "options.account") && i.account !== e.options.account ? a({
                                account: e.account,
                                logs: []
                            }) : a({
                                logs: []
                            }), s.info("Start", m({
                                t: (new Date).getTime()
                            }, e))
                        },
                        end: function(e) {
                            s.info("End", m({
                                    t: (new Date).getTime()
                                }, e)),
                                function() {
                                    if (!(i.count > 3)) {
                                        var e, o = ko()(i.logs, (function(e) {
                                                var n = e.event;
                                                return "Create" === n || "Update" === n
                                            })),
                                            s = {
                                                version: "1.19.0",
                                                target: "SDK",
                                                url: window.location.href,
                                                selector: t,
                                                type: r + (o ? "-" + o.event : ""),
                                                id: n + "-" + da()(i.count, 4, "0"),
                                                account: i.account,
                                                history: i.history,
                                                events: (e = i.logs, e.map((function(e) {
                                                    var n = e.event,
                                                        t = m({}, e);
                                                    return delete t.event, Object.keys(t).length > 0 ? [n, t] : n
                                                })))
                                            };
                                        a({
                                            count: i.count + 1,
                                            logs: []
                                        });
                                        var c = [].toJSON;
                                        c && delete Array.prototype.toJSON, Ei("POST", zi("LOGGER_A"), {
                                            headers: {
                                                "Content-Type": "application/json;charset=UTF-8"
                                            },
                                            data: JSON.stringify({
                                                data: s
                                            })
                                        }).then((function(e) {
                                            var n = (e.headers["paypal-debug-id"] || "").split(",")[0];
                                            n && a({
                                                history: [].concat(i.history, [n]).slice(-5)
                                            })
                                        })).catch((function() {})), c && (Array.prototype.toJSON = c)
                                    }
                                }()
                        },
                        info: function(e, n) {
                            void 0 === n && (n = {}), a({
                                logs: [].concat(i.logs, [m({
                                    event: e
                                }, n)])
                            })
                        },
                        error: function(e) {
                            s.info("Error", e)
                        },
                        track: fa,
                        warn: function() {
                            for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
                            (e = console).warn.apply(e, ["[PayPal Messages]"].concat(t))
                        }
                    };
                return s
            }({
                id: t.id,
                account: t.account,
                selector: n,
                type: "Message"
            }));
            var r, o = ac.get(e);
            try {
                ic.has(e) ? (r = ic.get(e)).renderProm = r.renderProm.then((function() {
                    return o.start({
                        options: t
                    }), r.update(t)
                })) : (o.start({
                    options: t
                }), r = function(e, n, t) {
                    t.info("Create");
                    var r = xi(e),
                        o = r[0],
                        i = r[1],
                        a = Bs("iframe"),
                        s = a[0],
                        c = a[1],
                        l = c.insertMarkup,
                        u = c.setSize,
                        d = c.events,
                        f = c.runStats,
                        p = c.clearEvents,
                        h = document.createElement("span");
                    h !== s && h.appendChild(s);
                    var g = Bo((function(e, n, r) {
                        return t.info(n), e(r)
                    }));

                    function y(e) {
                        return t.info("Render_Start"), Go(Zs(t), Ho(i), Yo("options"), qo(gi.a, {
                            logger: t,
                            wrapper: h,
                            events: d
                        }), lc(Qs))(e).then(Ho(g(Go(Uo("template"), l), "Insert"))).then(Go(cc(sc), Ho(g(oc, "Modal")), Ho(g(u, "Size")), Ho(g(f, "Stats")), g(uc, "Render_End")))
                    }
                    n.appendChild(h), t.info("Container");
                    var w = {
                        renderProm: y(o),
                        wrapper: h,
                        container: s,
                        update: function(e) {
                            var n = Zo(o, e),
                                r = function e(n, t) {
                                    return bo()(t).reduce((function(t, r) {
                                        var o, i, a = r[0],
                                            s = r[1];
                                        if (!n[a] && n[a] !== s) return m({}, t, ((o = {})[a] = s, o));
                                        if ("object" != typeof s || null === s) return s !== n[a] ? m({}, t, ((i = {})[a] = s, i)) : t;
                                        if (Array.isArray(s)) {
                                            var c;
                                            if (Array.isArray(n[a])) {
                                                var l, u = s.filter((function(e) {
                                                    return !Ko()(n[a], e)
                                                }));
                                                return u.length > 0 ? m({}, t, ((l = {})[a] = u, l)) : t
                                            }
                                            return m({}, t, ((c = {})[a] = s, c))
                                        }
                                        var d, f = e(n[a], s);
                                        return Object.keys(f).length > 0 ? m({}, t, ((d = {})[a] = f, d)) : t
                                    }), {})
                                }(o, n),
                                i = Object.keys(r).length > 0;
                            return t.info("Update", {
                                willUpdate: i
                            }), i ? (p(), y(n)) : E.resolve()
                        }
                    };
                    return si(s).then((function() {
                        s.addEventListener("load", (function() {
                            w.renderProm.catch((function() {})).finally((function() {
                                p(), w.renderProm = y(o)
                            }))
                        }))
                    })), w
                }(t, e, o), ic.set(e, r))
            } catch (e) {
                return o.error({
                    name: pa.INTERNAL_FAIL,
                    message: e.message
                }), o.end(), E.resolve()
            }
            return r.renderProm = r.renderProm.then(o.end).catch((function(e) {
                var n = pa[e.message] || pa.INTERNAL_FAIL;
                o.error(n === pa.INTERNAL_FAIL ? {
                    name: n,
                    message: e.message
                } : {
                    name: n
                }), o.end(), "function" == typeof e.onEnd && e.onEnd()
            })), r.renderProm
        },
        fc = new Map,
        pc = function(e) {
            return void 0 === e && (e = {}), {
                render: function(n) {
                    return void 0 === n && (n = "[data-pp-message]"),
                        function(e, n) {
                            var t, r;
                            if ("string" == typeof n) t = zo()(document.querySelectorAll(n)), r = n;
                            else if (ei(n)) t = [n], r = "HTMLElement";
                            else {
                                if (!Array.isArray(n) || !n.every(ei)) return ma("Invalid selector", n);
                                t = [].concat(n), r = "Array<HTMLElement>"
                            }
                            return t = t.filter((function(n) {
                                return n.ownerDocument.body.contains(n) ? !e._auto || !n.hasAttribute("data-pp-id") : (ma("Skipping container. Must be in the document:", n), !1)
                            })), E.all(t.map((function(n) {
                                var t, o = Zo(e, ni(n));
                                if (n.hasAttribute("data-pp-id") || n.setAttribute("data-pp-id", (Ii({
                                        nextId: (null != (t = Ti.nextId) ? t : 1) + 1
                                    }), Ti.nextId - 1)), !fc.has(n)) {
                                    var i = new MutationObserver((function(e) {
                                        var t = e.reduce((function(e, n) {
                                            return jo()(n.attributeName, "data-pp-") ? Zo(e, Xo(n.attributeName.slice(8), n.target.getAttribute(n.attributeName))) : e
                                        }), {});
                                        dc(n, r, t)
                                    }));
                                    i.observe(n, {
                                        attributes: !0
                                    }), fc.set(n, i)
                                }
                                return o.id = n.getAttribute("data-pp-id"), dc(n, r, o)
                            })))
                        }(m({}, Ti.config, e), n)
                }
            }
        };
    gi()(pc, {
        render: function(e, n) {
            return pc(e).render(n)
        },
        setGlobalConfig: function(e) {
            return void 0 === e && (e = {}), Ii({
                config: m({}, Ti.config, e)
            })
        }
    });
    var mc = pc;

    function hc(e) {
        if (void 0 === e && (e = {}), e.account) {
            var n = e.merchantId;
            return {
                normalizedAccount: e.account.replace(/^client-id:/, ""),
                merchantId: n
            }
        }
        var t = Po();
        if (t) {
            var r = ni(t),
                o = r.merchantid,
                i = r.account,
                a = Co(),
                s = a || Ao() || i,
                c = a && Ao() || o;
            if (s || c) return {
                normalizedAccount: s.replace(/^client-id:/, ""),
                merchantId: c
            }
        }
        return {}
    }
    var gc = function(e) {
        return {
            render: function(n) {
                var t = hc(e);
                return Wi([t.normalizedAccount, t.merchantId]).then((function(t) {
                    "TEST" === t ? ca(e).render(n) : mc(e).render(n)
                }))
            }
        }
    };

    function yc() {
        var e = hc(),
            n = e.normalizedAccount,
            t = e.merchantId;
        n || t ? Wi([n, t]).then((function(e) {
            "TEST" === e ? la() : function() {
                var e = Po();
                if (e) {
                    var n = ni(e),
                        t = n.merchantid,
                        r = c(n, ["merchantid"]),
                        o = Co();
                    mc.setGlobalConfig(m({
                        account: o || Ao(),
                        merchantId: o && Ao() || t,
                        currency: So()
                    }, r)), r.namespace && (window[r.namespace] = m({}, window[r.namespace] || {}, {
                        Messages: mc
                    }), window.paypal && !window.paypal.version && delete window.paypal)
                }
                Ti.config.account && ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", (function() {
                    return mc.render({
                        _auto: !0
                    })
                })) : setTimeout((function() {
                    mc.render({
                        _auto: !0
                    })
                }), 0))
            }()
        })) : la()
    }

    function wc() {
        Yr(), Ti.messagesMap.forEach((function(e, n) {
            n.removeAttribute("data-pp-id"), n.firstChild && n.firstChild.remove()
        })), Gi.disconnect(), Hi.disconnect(), mi()(Ti).forEach((function(e) {
            return delete Ti[e]
        })), gi()(Ti, Ri()), delete window[Si], Yr(), fc.forEach((function(e) {
            e.disconnect()
        })), fc.clear(), zo()(document.querySelectorAll("[data-pp-id]")).forEach((function(e) {
            e.removeAttribute("data-pp-id"), e.firstChild.remove()
        }))
    }

    function vc() {
        (function(e, n) {
            void 0 === e && (e = "production"), void 0 === n && (n = !1);
            try {
                if ("mock://www.paypal.com" !== window.mockDomain && !$n()) {
                    if ("sandbox" === e && !0 !== n) return;
                    var t = function() {
                            var e = Hn();
                            if (e.length && "unknown" !== e[0]) return e[0]
                        }(),
                        r = Bn(),
                        o = window.location.hostname,
                        i = document.createElement("script"),
                        a = document.querySelector("head"),
                        s = function(e, n, t, r) {
                            var o = "https://www.paypal.com/tagmanager/pptm.js?id=" + r + "&t=xo&v=5.0.206&source=payments_sdk";
                            return n && (o += "&mrid=" + n), t && (o += "&client_id=" + t), Dn("components") && (o += "&comp=" + String(Dn("components"))), o + "&vault=" + String(qn("vault", !1))
                        }(0, t, r, o);
                    i.src = s, i.id = "xo-pptm", i.async = !0, a && a.appendChild(i)
                }
            } catch (e) {
                ! function(e, n) {
                    try {
                        var t, r = Xn();
                        r.track(((t = {}).ext_error_code = "paypal-muse-components", t.ext_error_desc = JSON.stringify({
                            name: e,
                            error: _e(n)
                        }), t)), r.error(e, {
                            err: ve(n)
                        }), r.flush().catch(ye)
                    } catch (n) {
                        var o, i = Xn();
                        i.track(((o = {}).ext_error_code = "paypal-muse-components", o.ext_error_desc = "Error logging error event for " + e, o)), i.error("logger_error", {
                            err: ve(n)
                        }), i.flush().catch(ye)
                    }
                }("insertPPTM", e)
            }
        })("production", !1), tt().on("button_render", (function() {
            window.paypalDDL = window.paypalDDL || [], 0 === window.paypalDDL.filter((function(e) {
                return "paypalButtonRender" === e.event
            })).length && window.paypalDDL.push({
                event: "paypalButtonRender"
            })
        }))
    }
    gc.render = function(e, n) {
            return gc(e).render(n)
        }, gc.setGlobalConfig = ca.setGlobalConfig,
        function(e) {
            var n = Gn(),
                t = window[n];
            if (t) {
                if (!t.__internal_destroy__) throw new Error("Attempted to load sdk version 5.0.206 on page, but window." + n + " at version " + (t && t.version) + ' already loaded.\n\nTo load this sdk alongside the existing version, please specify a different namespace in the script tag, e.g. <script src="https://www.paypal.com/sdk/js?client-id=CLIENT_ID" data-namespace="paypal_sdk"><\/script>, then use the paypal_sdk namespace in place of paypal in your code.');
                t.__internal_destroy__(new Error("New SDK instance loaded, existing instance destroyed (" + n + " / 5.0.206)")), delete window[n]
            }
            window[n] = window[n] || {}, window[n].version = "5.0.206";
            for (var r = [], o = function(t) {
                    var o = e[t],
                        i = o.name,
                        a = o.requirer,
                        s = o.setupHandler;
                    try {
                        var l = a(),
                            u = l[s],
                            d = l.setup,
                            f = l.destroy,
                            p = c(l, [s, "setup", "destroy"].map(Un));
                        u ? u() : d && d(), f && r.push(f);
                        for (var m = 0, h = Object.keys(p); m < h.length; m++) {
                            var g = h[m],
                                y = p[g];
                            y && y.__get__ && (y = y.__get__()), y && (window[n][g] = y)
                        }
                    } catch (e) {
                        return setTimeout((function() {
                            throw new Error("Bootstrap Error for " + i + ":\n\n" + e.message + "\n\n" + e.stack)
                        }), 1), "continue"
                    }
                }, i = 0; i < e.length; i++) o(i);
            Object.defineProperty(window[n], "__internal_destroy__", {
                enumerable: !1,
                value: function(e) {
                    void 0 === e && (e = new Error("SDK instance destroyed (" + n + " / 5.0.206)")), r.forEach((function(n) {
                        return n(e)
                    })), hn(Fn()), delete window[n]
                }
            })
        }([{
            name: "__paypal-sdk-client__",
            setupHandler: "setupClient",
            requirer: function() {
                return r
            }
        }, {
            name: "common",
            setupHandler: null,
            requirer: function() {
                return i
            }
        }, {
            name: "messages",
            setupHandler: null,
            requirer: function() {
                return a
            }
        }, {
            name: "muse",
            setupHandler: null,
            requirer: function() {
                return s
            }
        }])
}]));