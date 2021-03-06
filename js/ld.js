! function() {
    "use strict";

    function a(e, t) {
        var o, n, i = null === (o = window.Criteo) || void 0 === o ? void 0 : o.oneTagConfig;
        return null !== (n = i && i[e]) && void 0 !== n ? n : t
    }
    var c = "5.6.2";

    function i(e) {
        try {
            return JSON.parse(e)
        } catch (e) {
            return
        }
    }
    var r = (e.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, o = 0; o < 10; ++o) {
            try {
                t.frames.__cmpLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, e.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__cmp
    }, e.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, e.prototype.pingWithTimeout = function(n, e, t, o) {
        function i(e, t) {
            r.logger(t), clearTimeout(e), o()
        }
        var r = this;
        return window.setTimeout(function() {
            var o = window.setTimeout(function() {
                i(n, "Timeout: Unable to get ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", null, function(e, t) {
                clearTimeout(o), t ? (r.logger("GDPR CMP ping returned"), !0 !== e.cmpLoaded && i(n, "GDPR ping returned cmpLoaded which is not true"), r.logger("GDPR ping returned cmpLoaded which is true")) : i(n, "Error sending ping to GDPR CMP")
            })
        }, t)
    }, e.prototype.retrieveConsent = function(e) {
        this.executeRetrieveConsent("getConsentData", null, e)
    }, e.prototype.retrieveConsentForPassback = function(e) {
        this.executeRetrieveConsent("getVendorConsents", [91], e)
    }, e.prototype.executeRetrieveConsent = function(e, t, o) {
        var n = this,
            i = !1,
            r = window.setTimeout(function() {
                i = !0, n.logger("Timeout: Unable to resolve GDPR consent after " + n.timeout + "ms"), o(void 0)
            }, this.timeout),
            a = this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function() {
                i = !0, n.logger("Timeout: Unable to ping GDPR API after " + n.pingTimeout + "ms"), o(void 0)
            });
        this.executeCommand(e, t, function(e, t) {
            clearTimeout(a), i || (clearTimeout(r), t ? (n.logger("GDPR consent retrieved"), n.processConsentData(e, o)) : (n.logger("Error retrieving GDPR consent data from CMP"), o(void 0)))
        })
    }, e.prototype.processConsentData = function(e, t) {
        if (e) {
            var o = {};
            void 0 !== e.consentData && (o.consentData = e.consentData), void 0 !== e.gdprApplies && (o.gdprApplies = !!e.gdprApplies), t(o)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, e.prototype.executeCommand = function(e, t, o) {
        var r = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No GDPR CMP defined on current frame");
            var a = this.getCMPFrame();
            this.currentWindow.__cmp = function(e, t, o) {
                if (!a) return r.logger("GDPR CMP not found in any frame"), void o({
                    msg: "GDPR CMP not found in any frame"
                }, !1);
                var n = Math.random().toString(10),
                    i = {
                        __cmpCall: {
                            command: e,
                            parameter: t,
                            callId: n
                        }
                    };
                r.cmpCallbacks[n] = o, a.postMessage(i, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? i(e.data) : e.data;
                if (t && t.__cmpReturn && t.__cmpReturn.callId && t.__cmpReturn.returnValue) {
                    var o = t.__cmpReturn;
                    r.cmpCallbacks && r.cmpCallbacks[o.callId] && (r.cmpCallbacks[o.callId](o.returnValue, o.success), delete r.cmpCallbacks[o.callId])
                }
            }, !1)
        }
        this.currentWindow.__cmp(e, t, o)
    }, e);

    function e(e, t, o) {
        void 0 === o && (o = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.logger = o
    }
    var s = (t.prototype.getCMPFrame = function() {
        for (var e, t = this.currentWindow, o = 0; o < 10; ++o) {
            try {
                t.frames.__tcfapiLocator && (e = t)
            } catch (e) {}
            if (t === this.currentWindow.top) break;
            t = t.parent
        }
        return e
    }, t.prototype.hasCallerFunctionInFrame = function() {
        return "function" == typeof this.currentWindow.__tcfapi
    }, t.prototype.readyToRetrieve = function() {
        return this.hasCallerFunctionInFrame() || void 0 !== this.getCMPFrame()
    }, t.prototype.pingWithTimeout = function(o, e, t, n) {
        function i(e, t) {
            r.logger(t), clearTimeout(e), n()
        }
        var r = this;
        return window.setTimeout(function() {
            var t = window.setTimeout(function() {
                i(o, "Timeout: Unable to get TCFv2 ping return after " + e + "ms")
            }, e);
            r.executeCommand("ping", 2, function(e) {
                clearTimeout(t), r.logger("TCFv2 CMP ping returned in ms"), "error" === e.cmpStatus ? i(o, "Error status on ping to TCFv2 CMP") : !0 !== e.cmpLoaded ? i(o, "TCFv2 ping returned cmpLoaded = false") : r.logger("TCFv2 ping returned cmpLoaded = true")
            })
        }, t)
    }, t.prototype.retrieveConsent = function(o) {
        var n = this,
            i = !1,
            r = window.setTimeout(function() {
                i = !0, n.logger("Timeout: Unable to resolve TCFv2 consent after " + n.timeout + "ms"), o(void 0)
            }, this.timeout),
            a = this.pingWithTimeout(r, this.pingTimeout, this.pingDelay, function() {
                i = !0, n.logger("Timeout: Unable to ping TCFv2 API after " + n.pingTimeout + "ms"), o(void 0)
            });
        this.executeCommand("getTCData", 2, function(e, t) {
            clearTimeout(a), i || (clearTimeout(r), t ? (n.logger("TCFv2 consent retrieved in ms"), n.processResponseData(e, o)) : (n.logger("Error retrieving TCFv2 consent data from CMP"), o(void 0)))
        }, [91])
    }, t.prototype.processResponseData = function(e, t) {
        var o;
        if (e) {
            var n = {};
            void 0 !== e.tcString && (n.consentData = e.tcString), void 0 !== e.gdprApplies && (n.gdprApplies = !!e.gdprApplies), n.version = e.tcfPolicyVersion ? e.tcfPolicyVersion : 2, n.purposes = null === (o = null == e ? void 0 : e.purpose) || void 0 === o ? void 0 : o.consents, t(n)
        } else this.logger("Unable to read GDPR consent data from CMP"), t(void 0)
    }, t.prototype.executeCommand = function(e, t, o, n) {
        var a = this;
        if (!this.hasCallerFunctionInFrame()) {
            this.logger("No TCFv2 CMP defined on current frame");
            var c = this.getCMPFrame();
            this.currentWindow.__tcfapi = function(e, t, o, n) {
                if (!c) return a.logger("TCFv2 CMP not found in any frame"), void o({
                    msg: "TCFv2 CMP not found in any frame"
                }, !1);
                var i = Math.random().toString(10),
                    r = {
                        __tcfapiCall: {
                            command: e,
                            version: t,
                            parameter: n,
                            callId: i
                        }
                    };
                a.cmpCallbacks[i] = o, c.postMessage(r, "*")
            }, this.currentWindow.addEventListener("message", function(e) {
                var t = "string" == typeof e.data ? i(e.data) : e.data;
                if (t && t.__tcfapiReturn && t.__tcfapiReturn.callId && t.__tcfapiReturn.returnValue) {
                    var o = t.__tcfapiReturn;
                    a.cmpCallbacks && a.cmpCallbacks[o.callId] && "function" == typeof a.cmpCallbacks[o.callId] && (a.cmpCallbacks[o.callId](o.returnValue, o.success), delete a.cmpCallbacks[o.callId])
                }
            }, !1)
        }
        this.currentWindow.__tcfapi(e, t, o, n)
    }, t);

    function t(e, t, o) {
        void 0 === o && (o = function(e) {}), this.cmpCallbacks = {}, this.currentWindow = e, this.timeout = t.tcfTimeout, this.pingTimeout = t.tcfPingTimeout, this.pingDelay = t.tcfPingDelay, this.logger = o
    }
    var u = (o.prototype.getProvider = function() {
        return this.tcfv2ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv2ConsentProvider : this.tcfv1ConsentProvider.hasCallerFunctionInFrame() ? this.tcfv1ConsentProvider : void 0 !== this.tcfv2ConsentProvider.getCMPFrame() ? this.tcfv2ConsentProvider : void 0 !== this.tcfv1ConsentProvider.getCMPFrame() ? this.tcfv1ConsentProvider : void 0
    }, o.prototype.retrieveConsent = function(e) {
        var t = this.getProvider();
        t ? t.retrieveConsent(e) : e(void 0)
    }, o);

    function o(e, t, o, n) {
        void 0 === t && (t = 1e4), void 0 === o && (o = 50), void 0 === n && (n = 1e3);
        var i = {
            tcfTimeout: t,
            tcfPingTimeout: o,
            tcfPingDelay: n
        };
        this.tcfv1ConsentProvider = new r(e, i), this.tcfv2ConsentProvider = new s(e, i)
    }
    var d = (n.prototype.catchAndStoreException = function(e, t) {
        try {
            return void 0 === t ? e() : e.apply(this, t)
        } catch (e) {
            e instanceof Error ? this.exceptions.push(e) : this.exceptions.push(new Error(e))
        }
    }, n.prototype.setProtectedTimeout = function(e, t) {
        var o = this;
        if ("undefined" != typeof window && "function" == typeof window.setTimeout) return window.setTimeout(function() {
            return o.catchAndStoreException(e)
        }, t)
    }, n.prototype.addProtectedEventListener = function(e, t, o, n) {
        var i = this;
        if (void 0 !== e && "function" == typeof e.addEventListener) return e.addEventListener(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return i.catchAndStoreException(o, e)
        }, n)
    }, n.prototype.attachProtectedEvent = function(e, t, o) {
        var n = this;
        if (void 0 !== e && "function" == typeof e.attachEvent) return e.attachEvent(t, function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return n.catchAndStoreException(o, e)
        })
    }, n);

    function n() {
        this.exceptions = []
    }

    function p(e, t) {
        if (e instanceof Array)
            for (var o = 0, n = e; o < n.length; o++) {
                p(n[o], t)
            } else F(t, e) || t.push(e)
    }

    function F(e, t) {
        for (var o = JSON.stringify || encodeURIComponent || escape, n = o(t), i = 0, r = e; i < r.length; i++) {
            var a = r[i];
            if (a === t || o(a) === n) return !0
        }
        return !1
    }

    function l(e, t) {
        var o = [];
        if (void 0 === e) return void 0 === t ? o : t.slice();
        if (void 0 === t) return e.slice();
        for (var n = 0, i = t; n < i.length; n++) {
            var r = i[n];
            F(e, r) || o.push(r)
        }
        return e.concat(o)
    }

    function R(e, t) {
        if (void 0 === e && void 0 === t) return !0;
        if (void 0 === e || void 0 === t) return !1;
        if (!(e instanceof Array)) return R([e], t);
        if (!(t instanceof Array)) return R(e, [t]);
        if (e.length !== t.length) return !1;
        for (var o = 0, n = e; o < n.length; o++) {
            if (!F(t, n[o])) return !1
        }
        return !0
    }
    var h, m, f = (g.extractHostname = function(e) {
        var t = document.createElement("a");
        return t.href = e, t.hostname
    }, g.getAnchorWithReferrer = function(e) {
        if (e && e.referrer) {
            var t = e.createElement("a");
            return t.href = e.referrer, t
        }
        return null
    }, g.getQueryString = function(t) {
        var o;
        try {
            o = t.top.location.search
        } catch (e) {
            var n = t;
            try {
                for (; n.parent.document !== n.document && n.parent.document;) n = n.parent
            } catch (e) {}
            if (n) {
                var i = g.getAnchorWithReferrer(n.document);
                i && (o = i.search)
            }
        }
        return o
    }, g.getHighestAccessibleUrl = function(e) {
        var t, o = g.getHighestAccessibleWindow(e),
            n = o.topFrame;
        if (o.err) try {
            try {
                t = n.top.location.href
            } catch (e) {
                var i = n.location.ancestorOrigins;
                t = i[i.length - 1]
            }
        } catch (e) {
            t = n.document.referrer
        } else t = n.location.href;
        return t
    }, g.onBodyReady = function(t, o) {
        ! function e() {
            document.body ? t.setProtectedTimeout(o, 0) : t.setProtectedTimeout(e, 10)
        }()
    }, g.onDocumentReady = function(o, n) {
        if ("complete" === document.readyState) n();
        else if (document.addEventListener) o.addProtectedEventListener(document, "DOMContentLoaded", n, !1), o.addProtectedEventListener(window, "load", n, !1);
        else {
            o.attachProtectedEvent(document, "onreadystatechange", n), o.attachProtectedEvent(window, "onload", n);
            var e = !1;
            try {
                e = null === window.frameElement && document.documentElement
            } catch (e) {}
            if (e && e.doScroll) ! function t() {
                if (e) {
                    try {
                        e.doScroll("left")
                    } catch (e) {
                        return void o.setProtectedTimeout(t, 50)
                    }
                    n()
                }
            }();
            else {
                var t = !1,
                    i = null === document.onload ? null : function(e, t) {
                        return e.onload(t)
                    },
                    r = null === document.onreadystatechange ? null : function(e, t) {
                        return e.onreadystatechange(t)
                    };
                document.onload = document.onreadystatechange = function(e) {
                    r instanceof Function && r(document, e), t || document.readyState && "complete" !== document.readyState || (i instanceof Function && i(document, e), t = !0, n())
                }
            }
        }
    }, g.removeLater = function(e, t) {
        e.setProtectedTimeout(function() {
            null !== t && null !== t.parentElement && t.parentElement.removeChild(t)
        }, 3e4)
    }, g.appendCriteoContainer = function(e) {
        if (!e) return null;
        var t = document.createElement("div");
        return t.setAttribute("id", "criteo-tags-div"), t.style.display = "none", e.appendChild(t), t
    }, g.getHighestAccessibleWindow = function(e) {
        var t = e,
            o = !1;
        try {
            for (; t.parent.document !== t.document;) {
                if (!t.parent.document) {
                    o = !0;
                    break
                }
                t = t.parent
            }
        } catch (e) {
            o = !0
        }
        return {
            topFrame: t,
            err: o
        }
    }, g);

    function g() {}

    function I(e) {
        var t = e;
        if (e instanceof Function) return (t = e()) instanceof Function ? t : I(t);
        if (e instanceof Array) {
            t = [];
            for (var o = 0; o < e.length; ++o) t[o] = I(e[o])
        } else if (e && "[object Object]" === e.toString()) {
            t = {};
            for (var n = 0, i = Object.getOwnPropertyNames(e); n < i.length; n++) {
                var r = i[n];
                t[r] = I(e[r])
            }
        }
        return t
    }

    function x(e, t) {
        for (var o = 0, n = e; o < n.length; o++) {
            var i = n[o];
            if (i.event === t.event && R(t.account, i.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (i[r] = t[r]);
                return
            }
        }
        e.push(t)
    }

    function E(e, t) {
        for (var o = 0, n = e; o < n.length; o++) {
            var i = n[o];
            if (i.event === t.event && R(t.account, i.account) && i.hash_method === t.hash_method) return void(void 0 !== t.email && (i.email = l(i.email instanceof Array || void 0 === i.email ? i.email : [i.email], t.email instanceof Array ? t.email : [t.email])))
        }
        e.push(t)
    }

    function A(e, t, o) {
        var n = I(o);
        return V(e, n), x(t, I(n)), 1
    }

    function V(e, t) {
        for (var o = 0, n = e; o < n.length; o++) {
            var i = n[o];
            if (i.event === t.event && void 0 === t.account && void 0 === i.account || R(t.account, i.account)) {
                for (var r in t) t.hasOwnProperty(r) && "account" !== r && (i[r] = t[r]);
                return
            }
        }
        e.push(t)
    }(m = h = h || {})[m.None = 0] = "None", m[m.Cookie = 1] = "Cookie", m[m.LocalStorage = 2] = "LocalStorage";
    var v = (y.prototype.checkLocalStorage = function() {
        try {
            if (!window.localStorage) return !1;
            var e = "criteo_localstorage_check";
            return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
        } catch (e) {
            return !1
        }
    }, y.prototype.setCookieRead = function() {
        this.isCookieRead = !0
    }, y.prototype.setValue = function(e) {
        this.cookieValue = e, this.isCookieValueExternallySet = !0, this.writeOnAllStorages(e)
    }, y.prototype.setValueFromExistingCookie = function() {
        var e = this.getValue();
        void 0 !== e && (this.cookieValue = e, this.cookieOrigin |= h.Cookie)
    }, y.prototype.setValueFromAllStorages = function() {
        var e = this.getFromAllStorages();
        this.cookieValue = e.value, this.cookieOrigin = e.origin
    }, y.prototype.getValue = function() {
        for (var e = 0, t = document.cookie.split(";"); e < t.length; e++) {
            var o = t[e];
            if (o.substr(0, o.indexOf("=")).replace(/^\s+|\s+$/g, "") === this.cookieName) {
                var n = o.substr(o.indexOf("=") + 1);
                return (decodeURIComponent || unescape)(n)
            }
        }
    }, y.prototype.removeWithNoDomain = function() {
        this.setValueWithNoDomainWithExpiration("", 0)
    }, y.prototype.removeOnMainDomain = function() {
        this.setOnMainDomainWithExpiration("", 0)
    }, y.prototype.setOnMainDomain = function(e) {
        return this.setOnMainDomainWithExpiration(e, this.cookieRetentionTimeInMs)
    }, y.prototype.writeOnAllStorages = function(e) {
        this.setOnMainDomain(e), this.useLocalStorage && window.localStorage.setItem(this.cookieName, e)
    }, y.prototype.getFromAllStorages = function() {
        var e = null;
        this.useLocalStorage && (e = window.localStorage.getItem(this.cookieName));
        var t = this.getValue() || null;
        return {
            value: t || e,
            origin: this.computeStorageOrigin(t, e)
        }
    }, y.prototype.removeFromAllStorages = function() {
        this.removeOnMainDomain(), this.useLocalStorage && window.localStorage.removeItem(this.cookieName)
    }, y.prototype.setValueWithNoDomainWithExpiration = function(e, t) {
        var o = new Date;
        o.setTime(o.getTime() + t);
        var n = "expires=" + o.toUTCString(),
            i = encodeURIComponent || escape;
        document.cookie = this.cookieName + "=" + i(e) + ";" + n + ";path=/";
        var r = this.getValue();
        void 0 !== r && (this.cookieValue = r)
    }, y.prototype.setValueWithNoDomain = function(e) {
        this.setValueWithNoDomainWithExpiration(e, this.cookieRetentionTimeInMs)
    }, y.prototype.toFragmentData = function() {
        return {
            origin: this.cookieOrigin,
            value: this.cookieValue
        }
    }, y.prototype.setOnMainDomainWithExpiration = function(e, t) {
        var o = new Date;
        o.setTime(o.getTime() + t);
        for (var n = "expires=" + o.toUTCString(), i = null === document.location ? [] : document.location.hostname.split("."), r = null, a = 0; a < i.length; ++a) {
            var c = "domain=." + (r = i.slice(i.length - a - 1, i.length).join(".")),
                s = encodeURIComponent || escape;
            document.cookie = this.cookieName + "=" + s(e) + ";" + n + ";" + c + ";path=/";
            var u = this.getValue();
            if (u && u === e) break
        }
        return r || document.location
    }, y.prototype.computeStorageOrigin = function(e, t) {
        var o = h.None;
        return e && (o |= h.Cookie), t && (o |= h.LocalStorage), o
    }, y);

    function y(e, t) {
        this.cookieValue = null, this.isCookieValueExternallySet = !1, this.isCookieRead = !1, this.cookieName = e, this.cookieRetentionTimeInMs = t, this.cookieOrigin = h.None, this.useLocalStorage = this.checkLocalStorage()
    }
    var M = (k.prototype.fillQueryStringParams = function(e) {
        this.gaid && e.push("ai=" + this.gaid), this.idfa && e.push("idfa=" + this.idfa), null !== this.acidCookie.cookieValue && e.push("acid=" + this.acidCookie.cookieValue), null !== this.axidCookie.cookieValue && e.push("axid=" + this.axidCookie.cookieValue), null !== this.pxsigCookie.cookieValue && e.push("pxsig=" + this.pxsigCookie.cookieValue), this.canWriteCookie && e.push("adce=1"), null !== this.ccpCookie.cookieValue && e.push("ccp=" + this.ccpCookie.cookieValue), null !== this.clickOriginPayload && e.push("cop=" + this.clickOriginPayload), null !== this.guidCookie.cookieValue && (e.push("idcpy=" + this.guidCookie.cookieValue), e.push("iddom=" + document.location.hostname)), null !== this.optoutCookie.cookieValue && e.push("optout=1"), null != this.bundleCookie.cookieValue && e.push("bundle=" + this.bundleCookie.cookieValue), null !== this.secureIdCookie.cookieValue && (e.push("sid=" + this.secureIdCookie.cookieValue), e.push("sid_read=" + (this.secureIdCookie.isCookieValueExternallySet ? "1" : "0"))), null !== this.lwidCookie.cookieValue && e.push("lwid=" + this.lwidCookie.cookieValue), null !== this.tld && e.push("tld=" + this.tld), null !== this.privateMode && 0 !== this.privateMode && e.push("pm=" + this.privateMode), void 0 !== new v("cto_clc", this.readonlyCookieRetentionTime).getValue() && e.push("clc=1")
    }, k.prototype.checkAcid = function() {
        this.acidCookie.setValueFromExistingCookie(), void 0 !== this.optoutCookie.getValue() ? this.axidCookie.setValue("optout") : this.axidCookie.setValueFromExistingCookie(), this.pxsigCookie.setValueFromExistingCookie(), this.setCanWriteCookie()
    }, k.prototype.setCop = function(e) {
        var t = f.getQueryString(e);
        if (void 0 !== t && (this.clickOriginPayload = this.getParameterValueByName(t, "cto_pld")), null === this.clickOriginPayload) try {
            var o = f.getAnchorWithReferrer(e.top.document);
            o && o.search && (this.clickOriginPayload = this.getParameterValueByName(o.search, "cto_pld"))
        } catch (e) {}
    }, k.prototype.checkClientSideIdentityStatus = function() {
        this.guidCookie.setValueFromAllStorages(), this.optoutCookie.getFromAllStorages(), this.secureIdCookie.setValueFromAllStorages(), this.bundleCookie.setValueFromAllStorages(), this.lwidCookie.setValueFromAllStorages()
    }, k.prototype.checkCookies = function(e) {
        if (e.callbacks)
            for (var t = 0, o = "string" == typeof e.callbacks ? [e.callbacks] : e.callbacks; t < o.length; t++) {
                var n = o[t],
                    i = document.createElement("img");
                i.setAttribute("style", "display:none;"), i.setAttribute("width", "1"), i.setAttribute("height", "1"), i.setAttribute("data-owner", "criteo-tag"), i.setAttribute("src", n);
                var r = document.getElementsByTagName("script")[0];
                r.parentNode.insertBefore(i, r), f.removeLater(this.exceptionHandler, i)
            } else e.optout ? (this.optoutCookie.setValue("1"), this.guidCookie.removeFromAllStorages(), this.secureIdCookie.removeFromAllStorages(), this.bundleCookie.removeFromAllStorages()) : (e.uid && this.guidCookie.setValue(e.uid), e.bundle && this.bundleCookie.setValue(e.bundle), e.removeSid ? this.secureIdCookie.removeFromAllStorages() : e.sid && this.secureIdCookie.setValue(e.sid))
    }, k.prototype.getParameterValueByName = function(e, t) {
        if (e && 1 < e.length) {
            "?" === e[0] && (e = "&" + e.substr(1));
            var o = "&" + t + "=",
                n = e.indexOf(o);
            if (-1 !== n) {
                var i = e.indexOf("&", n + o.length);
                return e.slice(n + o.length, i < 0 ? void 0 : i)
            }
        }
        return null
    }, k.prototype.setCanWriteCookie = function() {
        if (null === this.acidCookie.cookieValue && null === this.axidCookie.cookieValue && null === this.pxsigCookie.cookieValue) {
            var e = new v("criteo_write_test", 1e4);
            e.setValueWithNoDomain("ChUIBBINbXlHb29nbGVSdGJJZBgBIAE"), this.canWriteCookie = void 0 !== e.cookieValue, e.removeWithNoDomain()
        } else this.canWriteCookie = !0
    }, k.prototype.getTld = function() {
        var e = new v("cto_tld_test", 36e5),
            t = e.setOnMainDomain("woot");
        return e.removeOnMainDomain(), t
    }, k.prototype.getPrivateMode = function(e, t) {
        if (e.isSafari) try {
            if ("function" == typeof t.openDatabase) return t.openDatabase(null, null, null, null), 1
        } catch (e) {
            return 2
        }
        return 0
    }, k);

    function k(e, t, o) {
        this.readonlyCookieRetentionTime = 0, this.optoutCookieRetentionTime = 15768e7, this.identificationCookieRetentionTime = 34164e6, this.acidCookie = new v("criteo_acid", this.readonlyCookieRetentionTime), this.axidCookie = new v("cto_axid", this.readonlyCookieRetentionTime), this.ccpCookie = new v("criteo_cookie_perm", this.readonlyCookieRetentionTime), this.guidCookie = new v("cto_idcpy", this.identificationCookieRetentionTime), this.lwidCookie = new v("cto_lwid", this.identificationCookieRetentionTime), this.optoutCookie = new v("cto_optout", this.optoutCookieRetentionTime), this.pxsigCookie = new v("cto_pxsig", this.readonlyCookieRetentionTime), this.secureIdCookie = new v("cto_sid", this.identificationCookieRetentionTime), this.bundleCookie = new v("cto_bundle", this.identificationCookieRetentionTime), this.canWriteCookie = !1, this.clickOriginPayload = null, this.tld = this.getTld(), this.privateMode = this.getPrivateMode(t, o), this.exceptionHandler = e
    }
    var O = (w.prototype.createIframe = function(e, t, o, n) {
        var i = document.createElement("iframe"),
            r = encodeURIComponent || escape,
            a = f.getHighestAccessibleUrl(window),
            c = r(f.extractHostname(a)),
            s = {
                bundle: e.bundleCookie.toFragmentData(),
                cw: e.canWriteCookie,
                lwid: e.lwidCookie.toFragmentData(),
                optout: e.optoutCookie.toFragmentData(),
                origin: window.SYNCFRAME_ORIGIN || "onetag",
                pm: e.privateMode,
                sid: e.secureIdCookie.toFragmentData(),
                tld: e.tld,
                topUrl: c,
                uid: e.guidCookie.cookieValue,
                version: t.replace(/\./g, "_")
            },
            u = this.gumSyncFrameEndPoint;
        return "#gum-debug-mode" === window.location.hash ? u += "?debug=1&topUrl=" + c : u += "?topUrl=" + c, o && o.consentData && (u += "&gdpr_consent=" + o.consentData), u += "#" + JSON.stringify(s), i.src = u, i.id = this.gumSyncFrameId, i.width = "0", i.height = "0", i.frameBorder = "0", i.setAttribute("style", "border-width:0px; margin:0px; display:none"), i.title = "Criteo GUM iframe", f.removeLater(n, i), i
    }, w.prototype.setWaitingFlag = function(e) {
        this.waitingForSyncframe = this.waitingForSyncframe && null === e.guidCookie.cookieValue && null === e.secureIdCookie.cookieValue && null === e.optoutCookie.cookieValue
    }, w.prototype.shouldInjectSyncframe = function() {
        return void 0 !== window.addEventListener || this.forceSyncFrame
    }, w);

    function w(e) {
        this.forceSyncFrame = !1, this.gumSyncFrameEndPoint = window.CriteoSyncFrameUrlOverride || "https://gum.criteo.com/syncframe", this.gumSyncFrameId = "criteo-syncframe", this.waitingForSyncframe = e.hasItp
    }
    var N = new RegExp(/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i),
        L = (C.prototype.canRetrieveMetrics = function() {
            return this.hasPerformanceApi
        }, C.prototype.startRecordingInit = function() {
            this.canRetrieveMetrics() && (this.beginInit = performance.now())
        }, C.prototype.stopRecordingInit = function() {
            if (this.canRetrieveMetrics() && null === this.timings.initTime && null !== this.beginInit) {
                var e = performance.now();
                this.timings.initTime = e - this.beginInit
            }
        }, C.prototype.startRecordingPush = function() {
            this.canRetrieveMetrics() && (this.beginPush = performance.now())
        }, C.prototype.stopRecordingPush = function() {
            if (this.canRetrieveMetrics() && null === this.timings.pushTime && null !== this.beginPush && null !== this.timings.initTime) {
                var e = performance.now();
                this.timings.pushTime = e - this.beginPush
            }
        }, C.prototype.getPerformanceOrDegradedNow = function() {
            return this.canRetrieveMetrics() ? performance.now() : (new Date).getTime()
        }, C);

    function C() {
        this.timings = {
            initTime: null,
            pushTime: null
        }, this.beginInit = null, this.beginPush = null, this.hasPerformanceApi = void 0 !== window.performance && "function" == typeof window.performance.now
    }
    var W = (b.prototype.trySetPageId = function(e, t) {
        this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (e.page_id = t)
    }, b.prototype.tryForceViewListPageId = function(e) {
        this.isCbsEnabled && this.checkNotExistOrEmpty(e.page_id) && (this.checkNotExistOrEmpty(e.category) ? this.checkNotExistOrEmpty(e.keywords) ? e.page_id = "viewList" : e.page_id = "viewSearchResult" : e.page_id = "viewCategory")
    }, b.prototype.tryRunActionAfterAdBlockDetectionOrImmediate = function(t, e) {
        var o = this,
            n = window.criteo_q;
        if (null != n) {
            var i = n.adBlockDetector;
            this.isCbsEnabled && void 0 !== i ? (i(function(e) {
                o.abe = e, t()
            }), e(t)) : t()
        } else t()
    }, b.prototype.tryAppendAdBlockerParameter = function(e) {
        void 0 !== this.abe && e.push("abe=" + (this.abe ? 1 : 0))
    }, b.prototype.tryAppendUatParameter = function(e) {
        if (this.isCbsEnabled && void 0 !== this.uat) {
            var t = encodeURIComponent || escape;
            e.push("uat=" + t(this.uat))
        }
    }, b.prototype.clean = function() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0
    }, b.prototype.enable = function() {
        this.isCbsEnabled = !0
    }, b.prototype.setUat = function(e) {
        this.uat = e
    }, b.prototype.checkNotExistOrEmpty = function(e) {
        return void 0 === e || "" === e
    }, b);

    function b() {
        this.abe = void 0, this.isCbsEnabled = !1, this.uat = void 0
    }
    var P, T = /^#(enable|disable)-criteo-tag-debug-mode(=(\d+))?$/;

    function U(e, t, o, n, i) {
        if (function() {
                if (!document || !window.location.hash) return;
                var e = T.exec(window.location.hash);
                if (!e || 4 !== e.length) return;
                var t = "enable" === e[1],
                    o = Number(e[3]);
                new v("criteoTagDebugMode", t ? 864e5 : 0).setValueWithNoDomain(t && o && !isNaN(o) ? String(o) : "0"), window.location.href = window.location.href.substr(0, window.location.href.indexOf("#"))
            }(), !document || "function" != typeof Array.prototype.indexOf || -1 === document.cookie.indexOf("criteoTagDebugMode=")) return e;
        var r = function(e, t, o, n, i) {
            var a = {
                exceptions: e.exceptions,
                m_config: o,
                m_state: n,
                originalPush: e.push,
                performances: e.performances,
                push: function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    0 < e.length && this.stagedPushes.push(e), i.stopRecordingInit()
                },
                pushError: function(e) {
                    this.stagedPushes.push(e)
                },
                removeLater: e.removeLater,
                setProtectedTimeout: t.setProtectedTimeout,
                stagedErrors: [],
                stagedPushes: []
            };
            return window.onerror = function(r) {
                return function(e, t, o, n) {
                    var i = {
                        column: n,
                        lineNumber: o,
                        message: e,
                        url: t
                    };
                    return a.pushError(i), !(!r || "function" != typeof r) && r.apply(window, [e, t, o, n])
                }
            }(window.onerror), a
        }(e, t, o, n, i);
        return function() {
            if (!document) return;
            var e = "ld-tag-debug." + c + ".js",
                t = document.createElement("script");
            t.setAttribute("type", "text/javascript"), t.setAttribute("src", document.location.protocol + "//static.criteo.net/js/ld/" + e);
            var o = document.getElementsByTagName("script")[0];
            o.parentNode.insertBefore(t, o)
        }(), r
    }
    if (!window.criteo_q || window.criteo_q instanceof Array) {
        var D = window.criteo_q || [];
        window.criteo_q = function() {
            var C = new d,
                i = new L;
            i.startRecordingInit();
            var g = {
                    app: {
                        accounts: [],
                        actions: [],
                        bodyReady: !1,
                        disingScheduled: [],
                        domReady: !1,
                        eventSent: !1,
                        queue: []
                    },
                    cbs: new W
                },
                v = {
                    hooks: {},
                    shortNameMap: {
                        events: {
                            applaunched: "al",
                            viewitem: "vp",
                            viewhome: "vh",
                            viewlist: "vl",
                            viewbasket: "vb",
                            viewsearch: "vs",
                            viewpage: "vpg",
                            tracktransaction: "vc",
                            addtocart: "ac",
                            calldising: "dis",
                            setdata: "exd",
                            setemail: "ce"
                        },
                        properties: {
                            event: "e",
                            account: "a",
                            currency: "c",
                            product: "p",
                            item: "p",
                            "item.id": "i",
                            "item.price": "pr",
                            "item.quantity": "q",
                            "product.id": "i",
                            "product.price": "pr",
                            "product.quantity": "q",
                            data: "d",
                            keywords: "kw",
                            checkin_date: "din",
                            checkout_date: "dout",
                            deduplication: "dd",
                            delivery: "dl",
                            attribution: "at",
                            "attribution.channel": "ac",
                            "attribution.value": "v",
                            user_segment: "si",
                            new_customer: "nc",
                            customer_id: "ci",
                            email: "m",
                            hash_method: "h",
                            transaction_value: "tv",
                            client_revenue: "cr",
                            responseType: "rt",
                            page_name: "pn",
                            page_id: "pi",
                            page_number: "pnb",
                            category: "ca",
                            filters: "f",
                            "filters.name": "fn",
                            "filters.operator": "fo",
                            "filters.value": "fv",
                            retailer_visitor_id: "rvi",
                            price: "pr",
                            availability: "av",
                            sub_event_type: "se",
                            store_id: "s",
                            item_group_id: "sp",
                            sku_parent: "sp",
                            zipcode: "z"
                        }
                    },
                    trackingCallData: {
                        account: a("partnerId") || null,
                        customerInfo: [],
                        extraData: [],
                        handlerParams: {
                            v: c
                        },
                        handlerResponseType: "single",
                        handlerUrlPrefix: "https://sslwidget.criteo.com/event",
                        partnerPayload: null,
                        requestType: "pixel",
                        responseType: "js",
                        tagVersion: c
                    },
                    workflow: {
                        container: null,
                        disOnce: !1,
                        manualDising: !1,
                        manualFlush: !1,
                        noPartialFlush: !1,
                        partialDis: !1
                    }
                },
                e = function(e) {
                    var t = e.match(N),
                        o = null !== t;
                    return {
                        hasItp: null !== t && 11 <= parseFloat(t[1]),
                        isSafari: o
                    }
                }(window.navigator.userAgent),
                y = new M(C, e, window),
                k = new O(e),
                t = new u(window),
                b = function(t) {
                    var n = !1,
                        i = void 0,
                        r = [];
                    return function(e) {
                        n ? e(i) : (r.push(e), 1 === r.length && t(function(e) {
                            n = !0, i = e;
                            for (var t = 0, o = r; t < o.length; t++) {
                                (0, o[t])(i)
                            }
                        }))
                    }
                }(t.retrieveConsent.bind(t));

            function l(e, t, o, n, i, r, a, c) {
                e.waitingForSyncframe && (e.waitingForSyncframe = !1, s(e, t, o, n, i, r, a, c))
            }

            function o(t, o, n, i, r, a, c, s, e) {
                if (t.shouldInjectSyncframe()) {
                    var u = t.createIframe(i, a.tagVersion, e, C);
                    window.addEventListener && (C.addProtectedEventListener(window, "message", function(e) {
                        ! function(e, t, o, n, i, r, a, c, s) {
                            var u = s.data;
                            if (!u || !u.isCriteoMessage) return;
                            s.stopPropagation(), n.checkCookies(u), e.waitingForSyncframe && l(e, t, o, n, i, r, a, c)
                        }(t, o, n, i, r, a, c, s, e)
                    }, !0), T(o, s, c, {
                        event: "appendtag",
                        element: u
                    }))
                }
            }

            function r(e, t) {
                ! function(e) {
                    var t = !1;
                    if (200 < e.length) t = !0;
                    else
                        for (var o = 0, n = e; o < n.length; o++) {
                            var i = n[o],
                                r = 0;
                            if (Object.keys) r = Object.keys(i).length;
                            else
                                for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (r += 1);
                            if (200 < r) {
                                t = !0;
                                break
                            }
                        }
                    t && (e.length = 0)
                }(e.extraData), e.customerInfo = [], t.clean()
            }

            function n() {
                for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                C.catchAndStoreException(function() {
                    i.startRecordingPush();
                    for (var e = 0, t = n; e < t.length; e++) {
                        var o = t[e];
                        g.app.queue.push(o)
                    }
                    s(k, g.app, g.cbs, y, v.shortNameMap, v.trackingCallData, v.hooks, v.workflow), r(v.trackingCallData, g.cbs), i.stopRecordingPush()
                }, n), i.stopRecordingInit()
            }

            function s(e, t, o, n, i, r, a, c) {
                for (var s = [], u = t.queue, l = 0; l < u.length; ++l) {
                    var d = u[l];
                    if (d instanceof Array) {
                        var p = [l + 1, 0];
                        u.splice.apply(u, p.concat(d))
                    }
                    if (d instanceof Function) u.splice(l + 1, 0, d());
                    else if (d && "[object Object]" === d.toString()) switch (h(t, o, n, i, r, a, c, d, l, u, s)) {
                        case 0:
                            s.push(d);
                            break;
                        case -1:
                            s = s.concat(u.slice(l)), l = u.length
                    }
                }
                a.afterEval instanceof Function && a.afterEval(), t.queue = s || [], c.manualFlush || c.noPartialFlush && 0 !== t.queue.length || e.waitingForSyncframe || _(t, o, n, i, r, a, c, 0 !== t.queue.length)
            }

            function P(e, t, o) {
                o.hasOwnProperty("account") || (o.account = t.accounts);
                var n = e.handlerResponseType;
                o.hasOwnProperty("type") && (n = o.type, delete o.type), p(o.account, t.disingScheduled), "sequential" === n && (o.dc = !0)
            }

            function T(e, t, o, n) {
                var i = D(e, n);
                return null !== i ? i : w(e, t, o, n)
            }

            function w(e, t, o, n) {
                if (!e.bodyReady || t.container && document.body.contains(t.container) || (t.container = f.appendCriteoContainer(document.body)), n.url) {
                    var i = void 0;
                    n.isImgUrl ? ((i = document.createElement("img")).setAttribute("style", "display:none;"), i.setAttribute("width", "1"), i.setAttribute("height", "1")) : ((i = document.createElement("script")).setAttribute("async", "true"), i.setAttribute("type", "text/javascript")), i.setAttribute("src", n.url), n.element = i
                }
                if (o.beforeAppend instanceof Function && (n.element = o.beforeAppend(n.element)), I(n), n.element && (n.element.tagName || n.isImgUrl))
                    if (t.container || "script" !== n.element.tagName.toLowerCase() && !n.isImgUrl) {
                        if (!t.container) return 0;
                        t.container.appendChild(n.element), f.removeLater(C, n.element)
                    } else {
                        var r = document.getElementsByTagName("script")[0];
                        n.element.setAttribute("data-owner", "criteo-tag"), r.parentNode.insertBefore(n.element, r), f.removeLater(C, n.element)
                    } return 1
            }

            function D(e, t) {
                return !e.domReady && t.requiresDOM && "no" !== t.requiresDOM ? "blocking" === t.requiresDOM ? -1 : 0 : (delete t.requiresDOM, t.event ? (t.account && p(t.account, e.accounts), t.event = t.event.toLowerCase(), null) : (I(t), 1))
            }

            function h(e, t, o, n, i, r, a, c, s, u, l) {
                var d = c.event,
                    p = D(e, c);
                if (null !== p) return p;
                switch (c.event) {
                    case "setdata":
                        return A(i.extraData, e.actions, c);
                    case "setparameter":
                        for (var h in c) "event" !== h.toLowerCase() && c.hasOwnProperty(h) && (i.handlerParams[h] = c[h]);
                        return 1;
                    case "calldising":
                        P(i, e, c);
                        break;
                    case "setzipcode":
                    case "setstore":
                        return c.event = "setdata", A(i.extraData, e.actions, c);
                    case "setcustomerid":
                        return c.event = "setdata", c.customer_id = c.id, delete c.id, A(i.extraData, e.actions, c);
                    case "setretailervisitorid":
                        return t.enable(), c.event = "setdata", c.retailer_visitor_id = c.id, delete c.id, A(i.extraData, e.actions, c);
                    case "setgoogleadvertisingid":
                        return o.gaid = c.gaid, A(i.extraData, e.actions, {
                            event: "setdata",
                            site_type: "aa"
                        });
                    case "setappleadvertisingid":
                        return o.idfa = c.idfa, A(i.extraData, e.actions, {
                            event: "setdata",
                            site_type: "aios"
                        });
                    case "setemail":
                    case "sethashedemail":
                    case "ceh":
                        c.event = "setemail", c.hasOwnProperty("email") && (c.email instanceof Array || (c.email = [c.email]), c.email = function(e) {
                            for (var t = [], o = 0, n = e; o < n.length; o++) {
                                var i = n[o];
                                null != i && t.push(i)
                            }
                            return t
                        }(c.email));
                        var m = I(c);
                        return i.customerInfo.push(m), E(e.actions, I(c)), 1;
                    case "setsitetype":
                        var f = "d";
                        return "mobile" !== c.type && "m" !== c.type || (f = "m"), "tablet" !== c.type && "t" !== c.type || (f = "t"), c.event = "setdata", delete c.type, c.site_type = f, A(i.extraData, e.actions, c);
                    case "appendtag":
                        return w(e, a, r, c);
                    case "gettagstate":
                        return c.callback instanceof Function ? c.callback(g, v, y, k) : 1;
                    case "setuat":
                        return t.setUat(c.uat), 1;
                    case "viewsearchresult":
                    case "viewcategory":
                        t.trySetPageId(c, d), c.event = "viewlist";
                        break;
                    case "viewlist":
                        t.tryForceViewListPageId(c);
                        break;
                    case "viewitem":
                    case "viewhome":
                    case "viewbasket":
                    case "tracktransaction":
                    case "addtocart":
                        t.trySetPageId(c, d);
                        break;
                    case "viewstore":
                        t.trySetPageId(c, d), c.event = "viewHome", c.sub_event_type = "s";
                        break;
                    case "checkavailability":
                        t.trySetPageId(c, d), c.event = "viewBasket", c.sub_event_type = "a";
                        break;
                    case "reserveinstore":
                        t.trySetPageId(c, d), c.event = "viewBasket", c.sub_event_type = "r";
                        break;
                    case "flush":
                    case "flushevents":
                        return _(e, t, o, n, i, r, a, s !== u.length - 1 || 0 !== l.length), 1;
                    case "setaccount":
                        return i.account = c.account, 1;
                    case "seturl":
                        return i.handlerUrlPrefix = c.url, 1;
                    case "setcalltype":
                        return i.handlerResponseType = c.type, 1;
                    case "setresponsetype":
                        return i.responseType = c.type, 1;
                    case "setrequesttype":
                        return i.requestType = c.type, 1;
                    case "setpartnerpayload":
                        return i.partnerPayload = c.payload, 1;
                    case "oninitialized":
                        return r.onInitialized = c.callback, 1;
                    case "ondomready":
                        return r.onDOMReady = c.callback, 1;
                    case "beforeappend":
                        return r.beforeAppend = c.callback, 1;
                    case "aftereval":
                        return r.afterEval = c.callback, 1;
                    case "onflush":
                        return r.onFlush = c.callback, 1;
                    case "onurlgenerated":
                        return r.onUrlGenerated = c.callback, 1;
                    case "disonce":
                        return a.disOnce = !0, 1;
                    case "manualdising":
                        return a.manualDising = !0, 1;
                    case "manualflush":
                        return a.manualFlush = !0, 1;
                    case "nopartialflush":
                        return a.noPartialFlush = !0, 1;
                    case "disonpartialflush":
                        return a.partialDis = !0, 1
                }
                return e.actions.push(I(c)), 1
            }

            function _(o, n, e, t, i, r, a, c) {
                if (r.onFlush instanceof Function && (r.onFlush(), console.warn("on flush hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")), 0 !== o.actions.length) {
                    for (var s = 0, u = i.extraData; s < u.length; s++) {
                        var l = u[s];
                        x(o.actions, l)
                    }
                    for (var d = 0, p = i.customerInfo; d < p.length; d++) {
                        var h = p[d];
                        E(o.actions, h)
                    }
                    if (!a.manualDising && (!c || a.partialDis)) {
                        for (var m = [], f = 0, g = o.accounts; f < g.length; f++) {
                            var v = g[f];
                            F(o.disingScheduled, v) || m.push(v)
                        }
                        0 < m.length && function(e, t, o) {
                            var n = D(t, o);
                            null !== n || (P(e, t, o), t.actions.push(I(o)))
                        }(i, o, {
                            event: "callDising",
                            account: m
                        })
                    }
                    var y = !1,
                        k = function(e, t, o, n, i) {
                            var r = e.actions,
                                a = [];
                            1 === e.accounts.length && (i.account = e.accounts[0]);
                            null !== i.account && a.push("a=" + S(n, i.account, []));
                            "js" !== i.responseType && a.push("rt=" + S(n, i.responseType, []));
                            if (i.handlerParams) {
                                var c = decodeURIComponent(S(n, i.handlerParams, []));
                                c && a.push(c)
                            }
                            t.tryAppendUatParameter(a);
                            for (var s = 0; s < r.length; ++s) {
                                var u = r[s];
                                u.account && R(null === i.account ? void 0 : i.account, null === u.account ? void 0 : u.account) && delete u.account, a.push("p" + s + "=" + S(n, u, []))
                            }
                            o.fillQueryStringParams(a), null !== i.partnerPayload && a.push("pp=" + S(n, i.partnerPayload, []));
                            return a.push("dtycbr=" + function() {
                                return Math.floor(1e5 * Math.random())
                            }()), a
                        }(o, n, e, t, i);
                    o.actions = [];
                    var w = function() {
                        if (!y) {
                            y = !0, n.tryAppendAdBlockerParameter(k);
                            var e = function(e) {
                                    return e.join("&")
                                }(k),
                                t = function(e, t) {
                                    return {
                                        event: "appendTag",
                                        isImgUrl: "gif" === e.responseType,
                                        url: e.handlerUrlPrefix + "?" + t
                                    }
                                }(i, e);
                            "function" == typeof r.onUrlGenerated ? r.onUrlGenerated(t.url) : "beacon" === i.requestType && navigator.sendBeacon ? navigator.sendBeacon(t.url) : T(o, a, r, t), o.eventSent = !0, a.disOnce || (o.disingScheduled = [])
                        }
                    };
                    b(function(e) {
                        e && k.push.apply(k, function(e) {
                            var t = [];
                            return void 0 !== e.gdprApplies && t.push("gra=" + (e.gdprApplies ? 1 : 0)), void 0 !== e.consentData && t.push("grs=" + e.consentData), void 0 !== e.version && t.push("grv=" + e.version), t
                        }(e)), n.tryRunActionAfterAdBlockDetectionOrImmediate(w, function(e) {
                            return C.setProtectedTimeout(e, 500)
                        })
                    })
                }
            }

            function S(e, t, o) {
                var n, i, r, a = "";
                if (t instanceof Function) a = S(e, t(), o);
                else if (t instanceof Array) {
                    for (var c = [], s = 0; s < t.length; ++s) c[s] = S(e, t[s], o);
                    a += "[" + c.join(",") + "]"
                } else if (t && "[object Object]" === t.toString()) {
                    var u = [];
                    for (var l in t)
                        if (t.hasOwnProperty(l)) {
                            var d = o.concat([l]);
                            u.push((n = e, i = l, void 0, r = d.join("."), (n.properties[r] ? n.properties[r] : i) + "=" + S(e, t[l], d)))
                        } a += u.join("&")
                } else 1 === o.length && "event" === o[0] ? a += e.events[t.toLowerCase()] ? e.events[t.toLowerCase()] : t : a += t;
                return (encodeURIComponent || escape)(a)
            }
            return C.catchAndStoreException(function() {
                return y.checkAcid(), y.checkClientSideIdentityStatus(), y.setCop(window),
                    function(e, t, o, n, i, r, a, c) {
                        e.setWaitingFlag(n), e.waitingForSyncframe && C.setProtectedTimeout(function() {
                            l(e, t, o, n, i, r, a, c)
                        }, 1e4)
                    }(k, g.app, g.cbs, y, v.shortNameMap, v.trackingCallData, v.hooks, v.workflow), y.ccpCookie.setValueFromExistingCookie(), f.onBodyReady(C, function() {
                        v.hooks.onInitialized instanceof Function ? (g.app.bodyReady = v.hooks.onInitialized(), console.warn("onInitialized hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : g.app.bodyReady = !0, b(function(e) {
                            o(k, g.app, g.cbs, y, v.shortNameMap, v.trackingCallData, v.hooks, v.workflow, e)
                        }), s(k, g.app, g.cbs, y, v.shortNameMap, v.trackingCallData, v.hooks, v.workflow)
                    }), f.onDocumentReady(C, function() {
                        v.hooks.onDOMReady instanceof Function ? (g.app.domReady = v.hooks.onDOMReady(), console.warn("on DOM ready hook is deprecated and will soon be removed. Please do not use it and contact criteo if you think this may break your integration")) : g.app.domReady = !0, s(k, g.app, g.cbs, y, v.shortNameMap, v.trackingCallData, v.hooks, v.workflow)
                    }),
                    function(e) {
                        try {
                            var t = f.getAnchorWithReferrer(document);
                            if (t)
                                if (t.hostname !== document.location.hostname) V(e, {
                                    event: "setData",
                                    ref: t.protocol + "//" + t.hostname
                                })
                        } catch (e) {}
                    }(v.trackingCallData.extraData), a("visitEventEnabled", !1) && function(e, t) {
                        function o() {
                            t.eventSent || (e({
                                event: "setRequestType",
                                type: "beacon"
                            }), e({
                                event: "viewPage"
                            }))
                        }
                        window.addEventListener && window.addEventListener("beforeunload", o);
                        var n = a("visitEventDelay", 3e4);
                        0 <= n && setTimeout(o, n)
                    }(n, g.app), U({
                        exceptions: C.exceptions,
                        performances: i.timings,
                        push: n,
                        removeLater: function(e) {
                            return f.removeLater(C, e)
                        }
                    }, C, v, g, i)
            })
        }(), D.adBlockDetector, window.criteo_q.adBlockDetector = D.adBlockDetector, (P = window.criteo_q).push.apply(P, D)
    }
}();