var gr = Object.defineProperty;
var Qt = (e) => {
  throw TypeError(e);
};
var _r = (e, t, n) => t in e ? gr(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => _r(e, typeof t != "symbol" ? t + "" : t, n), en = (e, t, n) => t.has(e) || Qt("Cannot " + n);
var ee = (e, t, n) => (en(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ct = (e, t, n) => t.has(e) ? Qt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Rt = (e, t, n, r) => (en(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
const pr = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(pr);
let Ze = !1, mr = !1;
function wr() {
  Ze = !0;
}
wr();
const ys = 1, bs = 2, Es = 4, xs = 8, $s = 16, yr = 1, br = 2, Er = 4, xr = 8, $r = 16, kr = 2, hn = "[", gn = "[!", _n = "]", et = {}, te = Symbol(), Pt = !1, de = 2, pn = 4, bt = 8, Bt = 16, Se = 32, Ge = 64, vt = 128, fe = 256, ht = 512, J = 1024, Ce = 2048, Me = 4096, Ke = 8192, Et = 16384, Ir = 32768, Yt = 65536, mn = 1 << 17, Tr = 1 << 19, wn = 1 << 20, Te = Symbol("$state"), yn = Symbol("legacy props"), Sr = Symbol("");
var xt = Array.isArray, Cr = Array.prototype.indexOf, Rr = Array.from, gt = Object.keys, tt = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, bn = Object.getOwnPropertyDescriptors, Pr = Object.prototype, Lr = Array.prototype, Ht = Object.getPrototypeOf;
const Ue = () => {
};
function qr(e) {
  return e();
}
function _t(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ar = typeof requestIdleCallback > "u" ? (e) => setTimeout(e, 1) : requestIdleCallback;
let pt = !1, mt = !1, Lt = [], qt = [];
function En() {
  pt = !1;
  const e = Lt.slice();
  Lt = [], _t(e);
}
function xn() {
  mt = !1;
  const e = qt.slice();
  qt = [], _t(e);
}
function Xt(e) {
  pt || (pt = !0, queueMicrotask(En)), Lt.push(e);
}
function Dr(e) {
  mt || (mt = !0, Ar(xn)), qt.push(e);
}
function Or() {
  pt && En(), mt && xn();
}
function $n(e) {
  return e === this.v;
}
function kn(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ut(e) {
  return !kn(e, this.v);
}
function Nr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Mr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function zr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function jr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fr() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Br(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Yr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Xr() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function Ur() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function be(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: $n,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $t(e, t = !1) {
  var r;
  const n = be(e);
  return t || (n.equals = Ut), Ze && N !== null && N.l !== null && ((r = N.l).s ?? (r.s = [])).push(n), n;
}
function S(e, t = !1) {
  return /* @__PURE__ */ Vr(/* @__PURE__ */ $t(e, t));
}
// @__NO_SIDE_EFFECTS__
function Vr(e) {
  return D !== null && !Ee && (D.f & de) !== 0 && (xe === null ? ei([e]) : xe.push(e)), e;
}
function P(e, t) {
  return b(
    e,
    pe(() => a(e))
  ), t;
}
function b(e, t) {
  return D !== null && !Ee && St() && (D.f & (de | Bt)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (xe === null || !xe.includes(e)) && Ur(), At(e, t);
}
function At(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = An(), In(e, Ce), St() && O !== null && (O.f & J) !== 0 && (O.f & (Se | Ge)) === 0 && (ke === null ? ti([e]) : ke.push(e))), t;
}
function In(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = St(), s = n.length, i = 0; i < s; i++) {
      var o = n[i], f = o.f;
      (f & Ce) === 0 && (!r && o === O || (me(o, t), (f & (J | fe)) !== 0 && ((f & de) !== 0 ? In(
        /** @type {Derived} */
        o,
        Me
      ) : Tt(
        /** @type {Effect} */
        o
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  var t = de | Ce, n = D !== null && (D.f & de) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return O === null || n !== null && (n.f & fe) !== 0 ? t |= fe : O.f |= wn, {
    ctx: N,
    deps: null,
    effects: null,
    equals: $n,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n ?? O
  };
}
// @__NO_SIDE_EFFECTS__
function Wr(e) {
  const t = /* @__PURE__ */ nt(e);
  return t.equals = Ut, t;
}
function Tn(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      De(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Kr(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & de) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Zr(e) {
  var t, n = O;
  Ae(Kr(e));
  try {
    Tn(e), t = On(e);
  } finally {
    Ae(n);
  }
  return t;
}
function Sn(e) {
  var t = Zr(e), n = (Pe || (e.f & fe) !== 0) && e.deps !== null ? Me : J;
  me(e, n), e.equals(t) || (e.v = t, e.wv = An());
}
function Vt(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let V = !1;
function Xe(e) {
  V = e;
}
let X;
function Le(e) {
  if (e === null)
    throw Vt(), et;
  return X = e;
}
function Wt() {
  return Le(
    /** @type {TemplateNode} */
    /* @__PURE__ */ ze(X)
  );
}
function Z(e) {
  if (V) {
    if (/* @__PURE__ */ ze(X) !== null)
      throw Vt(), et;
    X = e;
  }
}
function Gr() {
  for (var e = 0, t = X; ; ) {
    if (t.nodeType === 8) {
      var n = (
        /** @type {Comment} */
        t.data
      );
      if (n === _n) {
        if (e === 0) return t;
        e -= 1;
      } else (n === hn || n === gn) && (e += 1);
    }
    var r = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ze(t)
    );
    t.remove(), t = r;
  }
}
function He(e, t = null, n) {
  if (typeof e != "object" || e === null || Te in e)
    return e;
  const r = Ht(e);
  if (r !== Pr && r !== Lr)
    return e;
  var s = /* @__PURE__ */ new Map(), i = xt(e), o = be(0);
  i && s.set("length", be(
    /** @type {any[]} */
    e.length
  ));
  var f;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(d, c, g) {
        (!("value" in g) || g.configurable === !1 || g.enumerable === !1 || g.writable === !1) && Yr();
        var h = s.get(c);
        return h === void 0 ? (h = be(g.value), s.set(c, h)) : b(h, He(g.value, f)), !0;
      },
      deleteProperty(d, c) {
        var g = s.get(c);
        if (g === void 0)
          c in d && s.set(c, be(te));
        else {
          if (i && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              s.get("length")
            ), u = Number(c);
            Number.isInteger(u) && u < h.v && b(h, u);
          }
          b(g, te), tn(o);
        }
        return !0;
      },
      get(d, c, g) {
        var l;
        if (c === Te)
          return e;
        var h = s.get(c), u = c in d;
        if (h === void 0 && (!u || (l = Ne(d, c)) != null && l.writable) && (h = be(He(u ? d[c] : te, f)), s.set(c, h)), h !== void 0) {
          var v = a(h);
          return v === te ? void 0 : v;
        }
        return Reflect.get(d, c, g);
      },
      getOwnPropertyDescriptor(d, c) {
        var g = Reflect.getOwnPropertyDescriptor(d, c);
        if (g && "value" in g) {
          var h = s.get(c);
          h && (g.value = a(h));
        } else if (g === void 0) {
          var u = s.get(c), v = u == null ? void 0 : u.v;
          if (u !== void 0 && v !== te)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return g;
      },
      has(d, c) {
        var v;
        if (c === Te)
          return !0;
        var g = s.get(c), h = g !== void 0 && g.v !== te || Reflect.has(d, c);
        if (g !== void 0 || O !== null && (!h || (v = Ne(d, c)) != null && v.writable)) {
          g === void 0 && (g = be(h ? He(d[c], f) : te), s.set(c, g));
          var u = a(g);
          if (u === te)
            return !1;
        }
        return h;
      },
      set(d, c, g, h) {
        var I;
        var u = s.get(c), v = c in d;
        if (i && c === "length")
          for (var l = g; l < /** @type {Source<number>} */
          u.v; l += 1) {
            var _ = s.get(l + "");
            _ !== void 0 ? b(_, te) : l in d && (_ = be(te), s.set(l + "", _));
          }
        u === void 0 ? (!v || (I = Ne(d, c)) != null && I.writable) && (u = be(void 0), b(u, He(g, f)), s.set(c, u)) : (v = u.v !== te, b(u, He(g, f)));
        var m = Reflect.getOwnPropertyDescriptor(d, c);
        if (m != null && m.set && m.set.call(h, g), !v) {
          if (i && typeof c == "string") {
            var p = (
              /** @type {Source<number>} */
              s.get("length")
            ), w = Number(c);
            Number.isInteger(w) && w >= p.v && b(p, w + 1);
          }
          tn(o);
        }
        return !0;
      },
      ownKeys(d) {
        a(o);
        var c = Reflect.ownKeys(d).filter((u) => {
          var v = s.get(u);
          return v === void 0 || v.v !== te;
        });
        for (var [g, h] of s)
          h.v !== te && !(g in d) && c.push(g);
        return c;
      },
      setPrototypeOf() {
        Hr();
      }
    }
  );
}
function tn(e, t = 1) {
  b(e, e.v + t);
}
function nn(e) {
  return e !== null && typeof e == "object" && Te in e ? e[Te] : e;
}
function ks(e, t) {
  return Object.is(nn(e), nn(t));
}
var rn, Cn, Rn, Pn;
function Dt() {
  if (rn === void 0) {
    rn = window, Cn = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    Rn = Ne(t, "firstChild").get, Pn = Ne(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function rt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function it(e) {
  return Rn.call(e);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return Pn.call(e);
}
function G(e, t) {
  if (!V)
    return /* @__PURE__ */ it(e);
  var n = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ it(X)
  );
  if (n === null)
    n = X.appendChild(rt());
  else if (t && n.nodeType !== 3) {
    var r = rt();
    return n == null || n.before(r), Le(r), r;
  }
  return Le(n), n;
}
function we(e, t) {
  if (!V) {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ it(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ ze(n) : n;
  }
  return X;
}
function ve(e, t = 1, n = !1) {
  let r = V ? X : e;
  for (var s; t--; )
    s = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ze(r);
  if (!V)
    return r;
  var i = r == null ? void 0 : r.nodeType;
  if (n && i !== 3) {
    var o = rt();
    return r === null ? s == null || s.after(o) : r.before(o), Le(o), o;
  }
  return Le(r), /** @type {TemplateNode} */
  r;
}
function Jr(e) {
  e.textContent = "";
}
const Ln = 0, Qr = 1;
let ut = !1, ft = Ln, st = !1, at = null, Ve = !1, Kt = !1;
function sn(e) {
  Ve = e;
}
function an(e) {
  Kt = e;
}
let Oe = [], We = 0;
let D = null, Ee = !1;
function qe(e) {
  D = e;
}
let O = null;
function Ae(e) {
  O = e;
}
let xe = null;
function ei(e) {
  xe = e;
}
let Q = null, se = 0, ke = null;
function ti(e) {
  ke = e;
}
let qn = 1, wt = 0, Pe = !1, Re = null;
function An() {
  return ++qn;
}
function Je(e) {
  var h;
  var t = e.f;
  if ((t & Ce) !== 0)
    return !0;
  if ((t & Me) !== 0) {
    var n = e.deps, r = (t & fe) !== 0;
    if (n !== null) {
      var s, i, o = (t & ht) !== 0, f = r && O !== null && !Pe, d = n.length;
      if (o || f) {
        var c = (
          /** @type {Derived} */
          e
        ), g = c.parent;
        for (s = 0; s < d; s++)
          i = n[s], (o || !((h = i == null ? void 0 : i.reactions) != null && h.includes(c))) && (i.reactions ?? (i.reactions = [])).push(c);
        o && (c.f ^= ht), f && g !== null && (g.f & fe) === 0 && (c.f ^= fe);
      }
      for (s = 0; s < d; s++)
        if (i = n[s], Je(
          /** @type {Derived} */
          i
        ) && Sn(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!r || O !== null && !Pe) && me(e, J);
  }
  return !1;
}
function ni(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & vt) !== 0)
      try {
        n.fn(e);
        return;
      } catch {
        n.f ^= vt;
      }
    n = n.parent;
  }
  throw ut = !1, e;
}
function ri(e) {
  return (e.f & Et) === 0 && (e.parent === null || (e.parent.f & vt) === 0);
}
function kt(e, t, n, r) {
  if (ut) {
    if (n === null && (ut = !1), ri(t))
      throw e;
    return;
  }
  n !== null && (ut = !0);
  {
    ni(e, t);
    return;
  }
}
function Dn(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null)
    for (var s = 0; s < r.length; s++) {
      var i = r[s];
      (i.f & de) !== 0 ? Dn(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? me(i, Ce) : (i.f & J) !== 0 && me(i, Me), Tt(
        /** @type {Effect} */
        i
      ));
    }
}
function On(e) {
  var v;
  var t = Q, n = se, r = ke, s = D, i = Pe, o = xe, f = N, d = Ee, c = e.f;
  Q = /** @type {null | Value[]} */
  null, se = 0, ke = null, D = (c & (Se | Ge)) === 0 ? e : null, Pe = (c & fe) !== 0 && (!Ve || s === null || d), xe = null, ln(e.ctx), Ee = !1, wt++;
  try {
    var g = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (Q !== null) {
      var u;
      if (yt(e, se), h !== null && se > 0)
        for (h.length = se + Q.length, u = 0; u < Q.length; u++)
          h[se + u] = Q[u];
      else
        e.deps = h = Q;
      if (!Pe)
        for (u = se; u < h.length; u++)
          ((v = h[u]).reactions ?? (v.reactions = [])).push(e);
    } else h !== null && se < h.length && (yt(e, se), h.length = se);
    if (St() && ke !== null && !Ee && h !== null && (e.f & (de | Me | Ce)) === 0)
      for (u = 0; u < /** @type {Source[]} */
      ke.length; u++)
        Dn(
          ke[u],
          /** @type {Effect} */
          e
        );
    return s !== null && wt++, g;
  } finally {
    Q = t, se = n, ke = r, D = s, Pe = i, xe = o, ln(f), Ee = d;
  }
}
function ii(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = Cr.call(n, e);
    if (r !== -1) {
      var s = n.length - 1;
      s === 0 ? n = t.reactions = null : (n[r] = n[s], n.pop());
    }
  }
  n === null && (t.f & de) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Q === null || !Q.includes(t)) && (me(t, Me), (t.f & (fe | ht)) === 0 && (t.f ^= ht), Tn(
    /** @type {Derived} **/
    t
  ), yt(
    /** @type {Derived} **/
    t,
    0
  ));
}
function yt(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      ii(e, n[r]);
}
function It(e) {
  var t = e.f;
  if ((t & Et) === 0) {
    me(e, J);
    var n = O, r = N;
    O = e;
    try {
      (t & Bt) !== 0 ? hi(e) : Yn(e), Bn(e);
      var s = On(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = qn;
      var i = e.deps, o;
      Pt && mr && e.f & Ce;
    } catch (f) {
      kt(f, e, n, r || e.ctx);
    } finally {
      O = n;
    }
  }
}
function Nn() {
  if (We > 1e3) {
    We = 0;
    try {
      jr();
    } catch (e) {
      if (at !== null)
        kt(e, at, null);
      else
        throw e;
    }
  }
  We++;
}
function Mn(e) {
  var t = e.length;
  if (t !== 0) {
    Nn();
    var n = Ve;
    Ve = !0;
    try {
      for (var r = 0; r < t; r++) {
        var s = e[r];
        (s.f & J) === 0 && (s.f ^= J);
        var i = oi(s);
        si(i);
      }
    } finally {
      Ve = n;
    }
  }
}
function si(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      if ((r.f & (Et | Ke)) === 0)
        try {
          Je(r) && (It(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Hn(r) : r.fn = null));
        } catch (s) {
          kt(s, r, null, r.ctx);
        }
    }
}
function ai() {
  if (st = !1, We > 1001)
    return;
  const e = Oe;
  Oe = [], Mn(e), st || (We = 0, at = null);
}
function Tt(e) {
  ft === Ln && (st || (st = !0, queueMicrotask(ai))), at = e;
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (Ge | Se)) !== 0) {
      if ((n & J) === 0) return;
      t.f ^= J;
    }
  }
  Oe.push(t);
}
function oi(e) {
  var t = [], n = e.first;
  e: for (; n !== null; ) {
    var r = n.f, s = (r & Se) !== 0, i = s && (r & J) !== 0, o = n.next;
    if (!i && (r & Ke) === 0) {
      if ((r & pn) !== 0)
        t.push(n);
      else if (s)
        n.f ^= J;
      else {
        var f = D;
        try {
          D = n, Je(n) && It(n);
        } catch (g) {
          kt(g, n, null, n.ctx);
        } finally {
          D = f;
        }
      }
      var d = n.first;
      if (d !== null) {
        n = d;
        continue;
      }
    }
    if (o === null) {
      let g = n.parent;
      for (; g !== null; ) {
        if (e === g)
          break e;
        var c = g.next;
        if (c !== null) {
          n = c;
          continue e;
        }
        g = g.parent;
      }
    }
    n = o;
  }
  return t;
}
function A(e) {
  var t = ft, n = Oe;
  try {
    Nn();
    const s = [];
    ft = Qr, Oe = s, st = !1, Mn(n);
    var r = e == null ? void 0 : e();
    return Or(), (Oe.length > 0 || s.length > 0) && A(), We = 0, at = null, r;
  } finally {
    ft = t, Oe = n;
  }
}
async function $e() {
  await Promise.resolve(), A();
}
function a(e) {
  var t = e.f, n = (t & de) !== 0;
  if (Re !== null && Re.add(e), D !== null && !Ee) {
    xe !== null && xe.includes(e) && Xr();
    var r = D.deps;
    e.rv < wt && (e.rv = wt, Q === null && r !== null && r[se] === e ? se++ : Q === null ? Q = [e] : (!Pe || !Q.includes(e)) && Q.push(e));
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), i = s.parent;
    i !== null && (i.f & fe) === 0 && (s.f ^= fe);
  }
  return n && (s = /** @type {Derived} */
  e, Je(s) && Sn(s)), e.v;
}
function li(e) {
  var t = Re;
  Re = /* @__PURE__ */ new Set();
  var n = Re, r;
  try {
    if (pe(e), t !== null)
      for (r of Re)
        t.add(r);
  } finally {
    Re = t;
  }
  return n;
}
function Is(e) {
  var t = li(() => pe(e));
  for (var n of t)
    if ((n.f & mn) !== 0)
      for (
        const r of
        /** @type {Derived} */
        n.deps || []
      )
        (r.f & de) === 0 && At(r, r.v);
    else
      At(n, n.v);
}
function pe(e) {
  var t = Ee;
  try {
    return Ee = !0, e();
  } finally {
    Ee = t;
  }
}
const ci = -7169;
function me(e, t) {
  e.f = e.f & ci | t;
}
function F(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Te in e)
      Ot(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Te in n && Ot(n);
      }
  }
}
function Ot(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Ot(e[r], t);
      } catch {
      }
    const n = Ht(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = bn(n);
      for (let s in r) {
        const i = r[s].get;
        if (i)
          try {
            i.call(e);
          } catch {
          }
      }
    }
  }
}
function zn(e) {
  O === null && D === null && zr(), D !== null && (D.f & fe) !== 0 && O === null && Mr(), Kt && Nr();
}
function ui(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function je(e, t, n, r = !0) {
  var s = (e & Ge) !== 0, i = O, o = {
    ctx: N,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ce,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n) {
    var f = Ve;
    try {
      sn(!0), It(o), o.f |= Ir;
    } catch (g) {
      throw De(o), g;
    } finally {
      sn(f);
    }
  } else t !== null && Tt(o);
  var d = n && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (wn | vt)) === 0;
  if (!d && !s && r && (i !== null && ui(o, i), D !== null && (D.f & de) !== 0)) {
    var c = (
      /** @type {Derived} */
      D
    );
    (c.effects ?? (c.effects = [])).push(o);
  }
  return o;
}
function jn(e) {
  const t = je(bt, null, !1);
  return me(t, J), t.teardown = e, t;
}
function Nt(e) {
  zn();
  var t = O !== null && (O.f & Se) !== 0 && N !== null && !N.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      N
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: O,
      reaction: D
    });
  } else {
    var r = Zt(e);
    return r;
  }
}
function fi(e) {
  return zn(), lt(e);
}
function di(e) {
  const t = je(Ge, e, !0);
  return () => {
    De(t);
  };
}
function vi(e) {
  const t = je(Ge, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? zt(t, () => {
      De(t), r(void 0);
    }) : (De(t), r(void 0));
  });
}
function Zt(e) {
  return je(pn, e, !1);
}
function j(e, t) {
  var n = (
    /** @type {ComponentContextLegacy} */
    N
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = lt(() => {
    e(), !r.ran && (r.ran = !0, b(n.l.r2, !0), pe(t));
  });
}
function ae() {
  var e = (
    /** @type {ComponentContextLegacy} */
    N
  );
  lt(() => {
    if (a(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        (n.f & J) !== 0 && me(n, Me), Je(n) && It(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function lt(e) {
  return je(bt, e, !0);
}
function ge(e, t = [], n = nt) {
  const r = t.map(n);
  return Fn(() => e(...r.map(a)));
}
function Fn(e, t = 0) {
  return je(bt | Bt | t, e, !0);
}
function Mt(e, t = !0) {
  return je(bt | Se, e, !0, t);
}
function Bn(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Kt, r = D;
    an(!0), qe(null);
    try {
      t.call(null);
    } finally {
      an(n), qe(r);
    }
  }
}
function Yn(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    De(n, t), n = r;
  }
}
function hi(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Se) === 0 && De(t), t = n;
  }
}
function De(e, t = !0) {
  var n = !1;
  if ((t || (e.f & Tr) !== 0) && e.nodes_start !== null) {
    for (var r = e.nodes_start, s = e.nodes_end; r !== null; ) {
      var i = r === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ze(r)
      );
      r.remove(), r = i;
    }
    n = !0;
  }
  Yn(e, t && !n), yt(e, 0), me(e, Et);
  var o = e.transitions;
  if (o !== null)
    for (const d of o)
      d.stop();
  Bn(e);
  var f = e.parent;
  f !== null && f.first !== null && Hn(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Hn(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function zt(e, t) {
  var n = [];
  Xn(e, n, !0), gi(n, () => {
    De(e), t && t();
  });
}
function gi(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var s of e)
      s.out(r);
  } else
    t();
}
function Xn(e, t, n) {
  if ((e.f & Ke) === 0) {
    if (e.f ^= Ke, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var s = r.next, i = (r.f & Yt) !== 0 || (r.f & Se) !== 0;
      Xn(r, t, i ? n : !1), r = s;
    }
  }
}
function on(e) {
  Un(e, !0);
}
function Un(e, t) {
  if ((e.f & Ke) !== 0) {
    e.f ^= Ke, (e.f & J) === 0 && (e.f ^= J), Je(e) && (me(e, Ce), Tt(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, s = (n.f & Yt) !== 0 || (n.f & Se) !== 0;
      Un(n, s ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
function Gt(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let N = null;
function ln(e) {
  N = e;
}
function ne(e, t = !1, n) {
  N = {
    p: N,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, Ze && !t && (N.l = {
    s: null,
    u: null,
    r1: [],
    r2: be(!1)
  });
}
function re(e) {
  const t = N;
  if (t !== null) {
    e !== void 0 && (t.x = e);
    const o = t.e;
    if (o !== null) {
      var n = O, r = D;
      t.e = null;
      try {
        for (var s = 0; s < o.length; s++) {
          var i = o[s];
          Ae(i.effect), qe(i.reaction), Zt(i.fn);
        }
      } finally {
        Ae(n), qe(r);
      }
    }
    N = t.p, t.m = !0;
  }
  return e || /** @type {T} */
  {};
}
function St() {
  return !Ze || N !== null && N.l === null;
}
const _i = ["touchstart", "touchmove"];
function pi(e) {
  return _i.includes(e);
}
let cn = !1;
function Vn() {
  cn || (cn = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function Wn(e) {
  var t = D, n = O;
  qe(null), Ae(null);
  try {
    return e();
  } finally {
    qe(t), Ae(n);
  }
}
function Ts(e, t, n, r = n) {
  e.addEventListener(t, () => Wn(n));
  const s = e.__on_r;
  s ? e.__on_r = () => {
    s(), r(!0);
  } : e.__on_r = () => r(!0), Vn();
}
const mi = /* @__PURE__ */ new Set(), un = /* @__PURE__ */ new Set();
function wi(e, t, n, r = {}) {
  function s(i) {
    if (r.capture || Qe.call(t, i), !i.cancelBubble)
      return Wn(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Xt(() => {
    t.addEventListener(e, s, r);
  }) : t.addEventListener(e, s, r), s;
}
function L(e, t, n, r, s) {
  var i = { capture: r, passive: s }, o = wi(e, t, n, i);
  (t === document.body || t === window || t === document) && jn(() => {
    t.removeEventListener(e, o, i);
  });
}
function Qe(e) {
  var w;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, s = ((w = e.composedPath) == null ? void 0 : w.call(e)) || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  ), o = 0, f = e.__root;
  if (f) {
    var d = s.indexOf(f);
    if (d !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = s.indexOf(t);
    if (c === -1)
      return;
    d <= c && (o = d);
  }
  if (i = /** @type {Element} */
  s[o] || e.target, i !== t) {
    tt(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var g = D, h = O;
    qe(null), Ae(null);
    try {
      for (var u, v = []; i !== null; ) {
        var l = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var _ = i["__" + r];
          if (_ !== void 0 && !/** @type {any} */
          i.disabled)
            if (xt(_)) {
              var [m, ...p] = _;
              m.apply(i, [e, ...p]);
            } else
              _.call(i, e);
        } catch (I) {
          u ? v.push(I) : u = I;
        }
        if (e.cancelBubble || l === t || l === null)
          break;
        i = l;
      }
      if (u) {
        for (let I of v)
          queueMicrotask(() => {
            throw I;
          });
        throw u;
      }
    } finally {
      e.__root = t, delete e.currentTarget, qe(g), Ae(h);
    }
  }
}
function yi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function ot(e, t) {
  var n = (
    /** @type {Effect} */
    O
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Y(e, t) {
  var n = (t & kr) !== 0, r, s = !e.startsWith("<!>");
  return () => {
    if (V)
      return ot(X, null), X;
    r === void 0 && (r = yi(s ? e : "<!>" + e), r = /** @type {Node} */
    /* @__PURE__ */ it(r));
    var i = (
      /** @type {TemplateNode} */
      n || Cn ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    return ot(i, i), i;
  };
}
function ye() {
  if (V)
    return ot(X, null), X;
  var e = document.createDocumentFragment(), t = document.createComment(""), n = rt();
  return e.append(t, n), ot(t, n), e;
}
function C(e, t) {
  if (V) {
    O.nodes_end = X, Wt();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ss(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Kn(e, t) {
  return Zn(e, t);
}
function bi(e, t) {
  Dt(), t.intro = t.intro ?? !1;
  const n = t.target, r = V, s = X;
  try {
    for (var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ it(n)
    ); i && (i.nodeType !== 8 || /** @type {Comment} */
    i.data !== hn); )
      i = /** @type {TemplateNode} */
      /* @__PURE__ */ ze(i);
    if (!i)
      throw et;
    Xe(!0), Le(
      /** @type {Comment} */
      i
    ), Wt();
    const o = Zn(e, { ...t, anchor: i });
    if (X === null || X.nodeType !== 8 || /** @type {Comment} */
    X.data !== _n)
      throw Vt(), et;
    return Xe(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o === et)
      return t.recover === !1 && Fr(), Dt(), Jr(n), Xe(!1), Kn(e, t);
    throw o;
  } finally {
    Xe(r), Le(s);
  }
}
const Be = /* @__PURE__ */ new Map();
function Zn(e, { target: t, anchor: n, props: r = {}, events: s, context: i, intro: o = !0 }) {
  Dt();
  var f = /* @__PURE__ */ new Set(), d = (h) => {
    for (var u = 0; u < h.length; u++) {
      var v = h[u];
      if (!f.has(v)) {
        f.add(v);
        var l = pi(v);
        t.addEventListener(v, Qe, { passive: l });
        var _ = Be.get(v);
        _ === void 0 ? (document.addEventListener(v, Qe, { passive: l }), Be.set(v, 1)) : Be.set(v, _ + 1);
      }
    }
  };
  d(Rr(mi)), un.add(d);
  var c = void 0, g = vi(() => {
    var h = n ?? t.appendChild(rt());
    return Mt(() => {
      if (i) {
        ne({});
        var u = (
          /** @type {ComponentContext} */
          N
        );
        u.c = i;
      }
      s && (r.$$events = s), V && ot(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, r) || {}, V && (O.nodes_end = X), i && re();
    }), () => {
      var l;
      for (var u of f) {
        t.removeEventListener(u, Qe);
        var v = (
          /** @type {number} */
          Be.get(u)
        );
        --v === 0 ? (document.removeEventListener(u, Qe), Be.delete(u)) : Be.set(u, v);
      }
      un.delete(d), h !== n && ((l = h.parentNode) == null || l.removeChild(h));
    };
  });
  return jt.set(c, g), c;
}
let jt = /* @__PURE__ */ new WeakMap();
function Ei(e, t) {
  const n = jt.get(e);
  return n ? (jt.delete(e), n(t)) : Promise.resolve();
}
function he(e, t, n = !1) {
  V && Wt();
  var r = e, s = null, i = null, o = te, f = n ? Yt : 0, d = !1;
  const c = (h, u = !0) => {
    d = !0, g(u, h);
  }, g = (h, u) => {
    if (o === (o = h)) return;
    let v = !1;
    if (V) {
      const l = (
        /** @type {Comment} */
        r.data === gn
      );
      !!o === l && (r = Gr(), Le(r), Xe(!1), v = !0);
    }
    o ? (s ? on(s) : u && (s = Mt(() => u(r))), i && zt(i, () => {
      i = null;
    })) : (i ? on(i) : u && (i = Mt(() => u(r))), s && zt(s, () => {
      s = null;
    })), v && Xe(!0);
  };
  Fn(() => {
    d = !1, t(c), d || g(null, null);
  }, f), V && (r = X);
}
function oe(e, t) {
  Xt(() => {
    var n = e.getRootNode(), r = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        n.head ?? /** @type {Document} */
        n.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + t.hash)) {
      const s = document.createElement("style");
      s.id = t.hash, s.textContent = t.code, r.appendChild(s);
    }
  });
}
function Cs(e) {
  if (V) {
    var t = !1, n = () => {
      if (!t) {
        if (t = !0, e.hasAttribute("value")) {
          var r = e.value;
          H(e, "value", null), e.value = r;
        }
        if (e.hasAttribute("checked")) {
          var s = e.checked;
          H(e, "checked", null), e.checked = s;
        }
      }
    };
    e.__on_r = n, Dr(n), Vn();
  }
}
function Rs(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.checked !== (n.checked = // treat null and undefined the same for the initial value
  t ?? void 0) && (e.checked = t);
}
function H(e, t, n, r) {
  var s = e.__attributes ?? (e.__attributes = {});
  V && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || s[t] !== (s[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Sr] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && xi(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
var fn = /* @__PURE__ */ new Map();
function xi(e) {
  var t = fn.get(e.nodeName);
  if (t) return t;
  fn.set(e.nodeName, t = []);
  for (var n, r = e, s = Element.prototype; s !== r; ) {
    n = bn(r);
    for (var i in n)
      n[i].set && t.push(i);
    r = Ht(r);
  }
  return t;
}
function Gn(e, t, n) {
  var r = e.__className, s = $i(t);
  V && e.className === s ? e.__className = s : (r !== s || V && e.className !== s) && (t == null ? e.removeAttribute("class") : e.className = s, e.__className = s);
}
function $i(e, t) {
  return (e ?? "") + "";
}
function dn(e, t) {
  return e === t || (e == null ? void 0 : e[Te]) === t;
}
function U(e = {}, t, n, r) {
  return Zt(() => {
    var s, i;
    return lt(() => {
      s = i, i = [], pe(() => {
        e !== n(...i) && (t(e, ...i), s && dn(n(...s), e) && t(null, ...s));
      });
    }), () => {
      Xt(() => {
        i && dn(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function W(e) {
  return function(...t) {
    var n = (
      /** @type {Event} */
      t[0]
    );
    return n.preventDefault(), e == null ? void 0 : e.apply(this, t);
  };
}
function le(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    N
  ), n = t.l.u;
  if (!n) return;
  let r = () => F(t.s);
  if (e) {
    let s = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ nt(() => {
      let f = !1;
      const d = t.s;
      for (const c in d)
        d[c] !== i[c] && (i[c] = d[c], f = !0);
      return f && s++, s;
    });
    r = () => a(o);
  }
  n.b.length && fi(() => {
    vn(t, r), _t(n.b);
  }), Nt(() => {
    const s = pe(() => n.m.map(qr));
    return () => {
      for (const i of s)
        typeof i == "function" && i();
    };
  }), n.a.length && Nt(() => {
    vn(t, r), _t(n.a);
  });
}
function vn(e, t) {
  if (e.l.s)
    for (const n of e.l.s) a(n);
  t();
}
function K(e, t) {
  var i;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (i = e.$$events) == null ? void 0 : i[t.type]
  ), r = xt(n) ? n.slice() : n == null ? [] : [n];
  for (var s of r)
    s.call(this, t);
}
function Fe(e) {
  N === null && Gt(), Ze && N.l !== null ? Ti(N).m.push(e) : Nt(() => {
    const t = pe(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Jt(e) {
  N === null && Gt(), Fe(() => () => pe(e));
}
function ki(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ii() {
  const e = N;
  return e === null && Gt(), (t, n, r) => {
    var i;
    const s = (
      /** @type {Record<string, Function | Function[]>} */
      (i = e.s.$$events) == null ? void 0 : i[
        /** @type {any} */
        t
      ]
    );
    if (s) {
      const o = xt(s) ? s.slice() : [s], f = ki(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const d of o)
        d.call(e.x, f);
      return !f.defaultPrevented;
    }
    return !0;
  };
}
function Ti(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Jn(e, t, n) {
  if (e == null)
    return t(void 0), Ue;
  const r = pe(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Ye = [];
function Ps(e, t = Ue) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function s(f) {
    if (kn(e, f) && (e = f, n)) {
      const d = !Ye.length;
      for (const c of r)
        c[1](), Ye.push(c, e);
      if (d) {
        for (let c = 0; c < Ye.length; c += 2)
          Ye[c][0](Ye[c + 1]);
        Ye.length = 0;
      }
    }
  }
  function i(f) {
    s(f(
      /** @type {T} */
      e
    ));
  }
  function o(f, d = Ue) {
    const c = [f, d];
    return r.add(c), r.size === 1 && (n = t(s, i) || Ue), f(
      /** @type {T} */
      e
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: s, update: i, subscribe: o };
}
function Si(e) {
  let t;
  return Jn(e, (n) => t = n)(), t;
}
let ct = !1, Ft = Symbol();
function Ls(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ $t(void 0),
    unsubscribe: Ue
  });
  if (r.store !== e && !(Ft in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = Ue;
    else {
      var s = !0;
      r.unsubscribe = Jn(e, (i) => {
        s ? r.source.v = i : b(r.source, i);
      }), s = !1;
    }
  return e && Ft in n ? Si(e) : a(r.source);
}
function qs() {
  const e = {};
  function t() {
    jn(() => {
      for (var n in e)
        e[n].unsubscribe();
      tt(e, Ft, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Ci(e) {
  var t = ct;
  try {
    return ct = !1, [e(), ct];
  } finally {
    ct = t;
  }
}
function B(e, t, n, r) {
  var R;
  var s = (n & yr) !== 0, i = !Ze || (n & br) !== 0, o = (n & xr) !== 0, f = (n & $r) !== 0, d = !1, c;
  o ? [c, d] = Ci(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var g = Te in e || yn in e, h = o && (((R = Ne(e, t)) == null ? void 0 : R.set) ?? (g && t in e && ((y) => e[t] = y))) || void 0, u = (
    /** @type {V} */
    r
  ), v = !0, l = !1, _ = () => (l = !0, v && (v = !1, f ? u = pe(
    /** @type {() => V} */
    r
  ) : u = /** @type {V} */
  r), u);
  c === void 0 && r !== void 0 && (h && i && Br(), c = _(), h && h(c));
  var m;
  if (i)
    m = () => {
      var y = (
        /** @type {V} */
        e[t]
      );
      return y === void 0 ? _() : (v = !0, l = !1, y);
    };
  else {
    var p = (s ? nt : Wr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    p.f |= mn, m = () => {
      var y = a(p);
      return y !== void 0 && (u = /** @type {V} */
      void 0), y === void 0 ? u : y;
    };
  }
  if ((n & Er) === 0)
    return m;
  if (h) {
    var w = e.$$legacy;
    return function(y, x) {
      return arguments.length > 0 ? ((!i || !x || w || d) && h(x ? m() : y), y) : m();
    };
  }
  var I = !1, E = !1, $ = /* @__PURE__ */ $t(c), k = /* @__PURE__ */ nt(() => {
    var y = m(), x = a($);
    return I ? (I = !1, E = !0, x) : (E = !1, $.v = y);
  });
  return s || (k.equals = Ut), function(y, x) {
    if (Re !== null && (I = E, m(), a($)), arguments.length > 0) {
      const T = x ? a(k) : i && o ? He(y) : y;
      return k.equals(T) || (I = !0, b($, T), l && u !== void 0 && (u = T), pe(() => a(k))), y;
    }
    return a(k);
  };
}
function Ri(e) {
  return new Pi(e);
}
var Ie, ue;
class Pi {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ct(this, Ie);
    /** @type {Record<string, any>} */
    Ct(this, ue);
    var i;
    var n = /* @__PURE__ */ new Map(), r = (o, f) => {
      var d = /* @__PURE__ */ $t(f);
      return n.set(o, d), d;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(o, f) {
          return a(n.get(f) ?? r(f, Reflect.get(o, f)));
        },
        has(o, f) {
          return f === yn ? !0 : (a(n.get(f) ?? r(f, Reflect.get(o, f))), Reflect.has(o, f));
        },
        set(o, f, d) {
          return b(n.get(f) ?? r(f, d), d), Reflect.set(o, f, d);
        }
      }
    );
    Rt(this, ue, (t.hydrate ? bi : Kn)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((i = t == null ? void 0 : t.props) != null && i.$$host) || t.sync === !1) && A(), Rt(this, Ie, s.$$events);
    for (const o of Object.keys(ee(this, ue)))
      o === "$set" || o === "$destroy" || o === "$on" || tt(this, o, {
        get() {
          return ee(this, ue)[o];
        },
        /** @param {any} value */
        set(f) {
          ee(this, ue)[o] = f;
        },
        enumerable: !0
      });
    ee(this, ue).$set = /** @param {Record<string, any>} next */
    (o) => {
      Object.assign(s, o);
    }, ee(this, ue).$destroy = () => {
      Ei(ee(this, ue));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    ee(this, ue).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, n) {
    ee(this, Ie)[t] = ee(this, Ie)[t] || [];
    const r = (...s) => n.call(this, ...s);
    return ee(this, Ie)[t].push(r), () => {
      ee(this, Ie)[t] = ee(this, Ie)[t].filter(
        /** @param {any} fn */
        (s) => s !== r
      );
    };
  }
  $destroy() {
    ee(this, ue).$destroy();
  }
}
Ie = new WeakMap(), ue = new WeakMap();
let Qn;
typeof HTMLElement == "function" && (Qn = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, n, r) {
    super();
    /** The Svelte component constructor */
    _e(this, "$$ctor");
    /** Slots */
    _e(this, "$$s");
    /** @type {any} The Svelte component instance */
    _e(this, "$$c");
    /** Whether or not the custom element is connected */
    _e(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    _e(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    _e(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    _e(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    _e(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    _e(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    _e(this, "$$me");
    this.$$ctor = t, this.$$s = n, r && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, n, r) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const s = this.$$c.$on(t, n);
      this.$$l_u.set(n, s);
    }
    super.addEventListener(t, n, r);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, n, r) {
    if (super.removeEventListener(t, n, r), this.$$c) {
      const s = this.$$l_u.get(n);
      s && (s(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let t = function(s) {
        return (i) => {
          const o = document.createElement("slot");
          s !== "default" && (o.name = s), C(i, o);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const n = {}, r = Li(this);
      for (const s of this.$$s)
        s in r && (s === "default" && !this.$$d.children ? (this.$$d.children = t(s), n.default = !0) : n[s] = t(s));
      for (const s of this.attributes) {
        const i = this.$$g_p(s.name);
        i in this.$$d || (this.$$d[i] = dt(i, s.value, this.$$p_d, "toProp"));
      }
      for (const s in this.$$p_d)
        !(s in this.$$d) && this[s] !== void 0 && (this.$$d[s] = this[s], delete this[s]);
      this.$$c = Ri({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: n,
          $$host: this
        }
      }), this.$$me = di(() => {
        lt(() => {
          var s;
          this.$$r = !0;
          for (const i of gt(this.$$c)) {
            if (!((s = this.$$p_d[i]) != null && s.reflect)) continue;
            this.$$d[i] = this.$$c[i];
            const o = dt(
              i,
              this.$$d[i],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[i].attribute || i) : this.setAttribute(this.$$p_d[i].attribute || i, o);
          }
          this.$$r = !1;
        });
      });
      for (const s in this.$$l)
        for (const i of this.$$l[s]) {
          const o = this.$$c.$on(s, i);
          this.$$l_u.set(i, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, n, r) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = dt(t, r, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return gt(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function dt(e, t, n, r) {
  var i;
  const s = (i = n[e]) == null ? void 0 : i.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !r || !n[e])
    return t;
  if (r === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function Li(e) {
  const t = {};
  return e.childNodes.forEach((n) => {
    t[
      /** @type {Element} node */
      n.slot || "default"
    ] = !0;
  }), t;
}
function ce(e, t, n, r, s, i) {
  let o = class extends Qn {
    constructor() {
      super(e, n, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return gt(t).map(
        (f) => (t[f].attribute || f).toLowerCase()
      );
    }
  };
  return gt(t).forEach((f) => {
    tt(o.prototype, f, {
      get() {
        return this.$$c && f in this.$$c ? this.$$c[f] : this.$$d[f];
      },
      set(d) {
        var h;
        d = dt(f, d, t), this.$$d[f] = d;
        var c = this.$$c;
        if (c) {
          var g = (h = Ne(c, f)) == null ? void 0 : h.get;
          g ? c[f] = d : c.$set({ [f]: d });
        }
      }
    });
  }), r.forEach((f) => {
    tt(o.prototype, f, {
      get() {
        var d;
        return (d = this.$$c) == null ? void 0 : d[f];
      }
    });
  }), e.element = /** @type {any} */
  o, o;
}
var qi = /* @__PURE__ */ Y('<div class="flip-container svelte-1cm1vz8" role="button" tabindex="0"><div><div class="flip-front svelte-1cm1vz8"><img alt="" aria-hidden="true" draggable="false" class="svelte-1cm1vz8"></div> <div class="flip-back svelte-1cm1vz8"><img alt="" aria-hidden="true" draggable="false" class="svelte-1cm1vz8"></div></div></div>'), Ai = /* @__PURE__ */ Y("<p>ClickFlip mode requires exactly two images.</p>");
const Di = {
  hash: "svelte-1cm1vz8",
  code: `.flip-container.svelte-1cm1vz8 {perspective:1000px;width:100%;height:100%;user-select:none;cursor:pointer;}.flip-card.svelte-1cm1vz8 {position:relative;width:100%;height:100%;transform-style:preserve-3d;}.flipped.svelte-1cm1vz8 {transform:rotateY(180deg);}.flip-front.svelte-1cm1vz8,
	.flip-back.svelte-1cm1vz8 {position:absolute;top:0;left:0;width:100%;height:100%;backface-visibility:hidden;}.flip-front.svelte-1cm1vz8 img:where(.svelte-1cm1vz8),
	.flip-back.svelte-1cm1vz8 img:where(.svelte-1cm1vz8) {width:100%;height:100%;object-fit:contain;}.flip-back.svelte-1cm1vz8 {transform:rotateY(180deg);}`
};
function er(e, t) {
  ne(t, !1), oe(e, Di);
  const n = S();
  let r = B(t, "options", 28, () => ({})), s = B(t, "images", 28, () => []), i = S(), o = S(!1);
  j(() => F(r()), () => {
    b(n, r().flipSpeed ?? 600);
  }), ae(), le();
  var f = ye(), d = we(f);
  {
    var c = (h) => {
      var u = qi(), v = G(u), l = G(v), _ = G(l);
      Z(l);
      var m = ve(l, 2), p = G(m);
      Z(m), Z(v), Z(u), U(u, (w) => b(i, w), () => a(i)), ge(() => {
        Gn(v, `flip-card ${(a(o) ? "flipped" : "") ?? ""} svelte-1cm1vz8`), H(v, "style", `transition: transform ${a(n) ?? ""}ms;`), H(_, "src", s()[0]), H(p, "src", s()[1]);
      }), L("dragstart", _, W(function(w) {
        K.call(this, t, w);
      })), L("dragstart", p, W(function(w) {
        K.call(this, t, w);
      })), L("click", u, () => b(o, !a(o))), L("keydown", u, (w) => w.key === "Enter" || w.key === " " ? b(o, !a(o)) : null), C(h, u);
    }, g = (h) => {
      var u = Ai();
      C(h, u);
    };
    he(d, (h) => {
      s().length === 2 ? h(c) : h(g, !1);
    });
  }
  return C(e, f), re({
    get options() {
      return r();
    },
    set options(h) {
      r(h), A();
    },
    get images() {
      return s();
    },
    set images(h) {
      s(h), A();
    }
  });
}
ce(er, { options: {}, images: {} }, [], [], !0);
var Oi = /* @__PURE__ */ Y('<div class="color-diff-container svelte-1trv0b1"><img alt="" aria-hidden="true" class="image svelte-1trv0b1" draggable="false"> <canvas class="diff-canvas svelte-1trv0b1"></canvas></div>'), Ni = /* @__PURE__ */ Y("<p>ColorDiff mode requires exactly two images.</p>");
const Mi = {
  hash: "svelte-1trv0b1",
  code: `.color-diff-container.svelte-1trv0b1 {position:relative;width:100%;height:100%;}.image.svelte-1trv0b1,
	.diff-canvas.svelte-1trv0b1 {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;}`
};
function tr(e, t) {
  ne(t, !1), oe(e, Mi);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o = S();
  async function f() {
    if (await $e(), !a(s) || n().length !== 2) return;
    const u = a(s).getContext("2d", { willReadFrequently: !0 }), v = new Image(), l = new Image();
    v.src = n()[0], l.src = n()[1], await Promise.all([
      new Promise((k) => v.onload = k),
      new Promise((k) => l.onload = k)
    ]);
    const _ = v.width, m = v.height;
    P(s, a(s).width = _), P(s, a(s).height = m), P(i, a(i).style.width = `${_}px`), P(i, a(i).style.height = `${m}px`);
    const p = document.createElement("canvas");
    p.width = _, p.height = m;
    const w = p.getContext("2d", { willReadFrequently: !0 });
    w.drawImage(v, 0, 0);
    const I = w.getImageData(0, 0, _, m).data;
    w.clearRect(0, 0, _, m), w.drawImage(l, 0, 0);
    const E = w.getImageData(0, 0, _, m).data, $ = u.createImageData(_, m);
    for (let k = 0; k < I.length; k += 4) {
      const R = Math.abs(I[k] - E[k]), y = Math.abs(I[k + 1] - E[k + 1]), x = Math.abs(I[k + 2] - E[k + 2]);
      (R + y + x) / 3 > a(o) ? ($.data[k] = 255, $.data[k + 1] = 0, $.data[k + 2] = 255, $.data[k + 3] = 180) : $.data[k + 3] = 0;
    }
    u.putImageData($, 0, 0);
  }
  j(() => F(r()), () => {
    b(o, r().colorThreshold ?? 30);
  }), j(
    () => (F(n()), a(o)),
    () => {
      n().length === 2 && a(o) !== void 0 && f();
    }
  ), ae(), le();
  var d = ye(), c = we(d);
  {
    var g = (u) => {
      var v = Oi(), l = G(v), _ = ve(l, 2);
      U(_, (m) => b(s, m), () => a(s)), Z(v), U(v, (m) => b(i, m), () => a(i)), ge(() => H(l, "src", n()[0])), L("dragstart", l, W(function(m) {
        K.call(this, t, m);
      })), C(u, v);
    }, h = (u) => {
      var v = Ni();
      C(u, v);
    };
    he(c, (u) => {
      n().length === 2 ? u(g) : u(h, !1);
    });
  }
  return C(e, d), re({
    get images() {
      return n();
    },
    set images(u) {
      n(u), A();
    },
    get options() {
      return r();
    },
    set options(u) {
      r(u), A();
    }
  });
}
ce(tr, { images: {}, options: {} }, [], [], !0);
var zi = /* @__PURE__ */ Y('<div class="container svelte-1ep0ypf"><canvas class="svelte-1ep0ypf"></canvas></div>');
const ji = {
  hash: "svelte-1ep0ypf",
  code: ".container.svelte-1ep0ypf {position:relative;}canvas.svelte-1ep0ypf {width:100%;height:100%;display:block;}"
};
function nr(e, t) {
  ne(t, !1), oe(e, ji);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o = S(r().differenceThreshold ?? 24), f = S(), d = S(), c = S();
  async function g() {
    if (await $e(), !a(s)) return;
    const l = a(s).getContext("2d", { willReadFrequently: !0 }), [_, m] = [new Image(), new Image()];
    _.src = n()[0], m.src = n()[1], await Promise.all([
      new Promise((k) => _.onload = k),
      new Promise((k) => m.onload = k)
    ]);
    const p = _.width, w = _.height;
    P(s, a(s).width = p), P(s, a(s).height = w), a(i) && (P(i, a(i).style.width = `${p}px`), P(i, a(i).style.height = `${w}px`)), l.drawImage(_, 0, 0);
    const I = l.getImageData(0, 0, p, w);
    h(I), l.putImageData(I, 0, 0), l.clearRect(0, 0, p, w), l.drawImage(m, 0, 0);
    const E = l.getImageData(0, 0, p, w);
    h(E);
    const $ = l.createImageData(p, w);
    for (let k = 0; k < I.data.length; k += 4) {
      const R = I.data[k], y = E.data[k];
      if (Math.abs(R - y) < a(o)) {
        const T = (R + y) / 2;
        $.data.set([T, T, T, 255], k);
      } else R > y ? $.data.set([0, 255, 255, 150], k) : $.data.set([255, 0, 0, 150], k);
    }
    l.putImageData($, 0, 0);
  }
  function h(l) {
    for (let _ = 0; _ < l.data.length; _ += 4) {
      const m = (l.data[_] + l.data[_ + 1] + l.data[_ + 2]) / 3;
      l.data[_] = l.data[_ + 1] = l.data[_ + 2] = m;
    }
  }
  j(() => F(r()), () => {
    b(o, r().differenceThreshold ?? 24);
  }), j(
    () => (a(s), F(n()), a(f), a(d), a(o), a(c)),
    () => {
      a(s) && n().length === 2 && (n()[0] !== a(f) || n()[1] !== a(d) || a(o) !== a(c)) && (b(f, n()[0]), b(d, n()[1]), b(c, a(o)), g());
    }
  ), ae(), le();
  var u = zi(), v = G(u);
  return U(v, (l) => b(s, l), () => a(s)), Z(u), U(u, (l) => b(i, l), () => a(i)), C(e, u), re({
    get images() {
      return n();
    },
    set images(l) {
      n(l), A();
    },
    get options() {
      return r();
    },
    set options(l) {
      r(l), A();
    }
  });
}
ce(nr, { images: {}, options: {} }, [], [], !0);
var Fi = /* @__PURE__ */ Y('<div class="edge-diff-container svelte-1nqy66p"><img alt="" aria-hidden="true" class="image svelte-1nqy66p" draggable="false"> <canvas class="edge-canvas svelte-1nqy66p"></canvas></div>'), Bi = /* @__PURE__ */ Y("<p>Edge mode requires exactly two images.</p>");
const Yi = {
  hash: "svelte-1nqy66p",
  code: `.edge-diff-container.svelte-1nqy66p {position:relative;width:100%;height:100%;}.image.svelte-1nqy66p,
	.edge-canvas.svelte-1nqy66p {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;}`
};
function rr(e, t) {
  ne(t, !1), oe(e, Yi);
  const n = S();
  let r = B(t, "images", 28, () => []), s = B(t, "options", 28, () => ({})), i = S(), o = S();
  async function f() {
    if (await $e(), !a(o)) return;
    const v = a(o).getContext("2d", { willReadFrequently: !0 }), l = new Image(), _ = new Image();
    l.src = r()[0], _.src = r()[1], await Promise.all([
      new Promise(($) => l.onload = $),
      new Promise(($) => _.onload = $)
    ]);
    const m = l.width, p = l.height;
    P(o, a(o).width = m), P(o, a(o).height = p), P(i, a(i).style.width = `${m}px`), P(i, a(i).style.height = `${p}px`);
    const w = d(l, m, p), I = d(_, m, p), E = v.createImageData(m, p);
    for (let $ = 0; $ < w.length; $++)
      I[$] - w[$] > a(n) ? (E.data[$ * 4 + 0] = 255, E.data[$ * 4 + 1] = 255, E.data[$ * 4 + 2] = 0, E.data[$ * 4 + 3] = 180) : E.data[$ * 4 + 3] = 0;
    v.putImageData(E, 0, 0);
  }
  function d(v, l, _) {
    const m = document.createElement("canvas");
    m.width = l, m.height = _;
    const p = m.getContext("2d");
    p.drawImage(v, 0, 0, l, _);
    const w = p.getImageData(0, 0, l, _), I = new Uint8ClampedArray(l * _);
    for (let $ = 0; $ < I.length; $++) {
      const k = $ * 4;
      I[$] = (w.data[k] + w.data[k + 1] + w.data[k + 2]) / 3;
    }
    const E = new Uint8ClampedArray(l * _);
    for (let $ = 1; $ < _ - 1; $++)
      for (let k = 1; k < l - 1; k++) {
        const R = $ * l + k, y = -I[R - l - 1] - 2 * I[R - 1] - I[R + l - 1] + I[R - l + 1] + 2 * I[R + 1] + I[R + l + 1], x = -I[R - l - 1] - 2 * I[R - l] - I[R - l + 1] + I[R + l - 1] + 2 * I[R + l] + I[R + l + 1];
        E[R] = Math.min(255, Math.sqrt(y * y + x * x));
      }
    return E;
  }
  j(() => F(s()), () => {
    b(n, s().differenceThreshold ?? 30);
  }), j(
    () => (F(r()), a(n)),
    () => {
      r().length === 2 && a(n) !== void 0 && f();
    }
  ), ae(), le();
  var c = ye(), g = we(c);
  {
    var h = (v) => {
      var l = Fi(), _ = G(l), m = ve(_, 2);
      U(m, (p) => b(o, p), () => a(o)), Z(l), U(l, (p) => b(i, p), () => a(i)), ge(() => H(_, "src", r()[0])), L("dragstart", _, W(function(p) {
        K.call(this, t, p);
      })), C(v, l);
    }, u = (v) => {
      var l = Bi();
      C(v, l);
    };
    he(g, (v) => {
      r().length === 2 ? v(h) : v(u, !1);
    });
  }
  return C(e, c), re({
    get images() {
      return r();
    },
    set images(v) {
      r(v), A();
    },
    get options() {
      return s();
    },
    set options(v) {
      s(v), A();
    }
  });
}
ce(rr, { images: {}, options: {} }, [], [], !0);
var Hi = /* @__PURE__ */ Y('<div class="fade-container svelte-19hxhcd" role="presentation"><img alt="" aria-hidden="true" class="image svelte-19hxhcd" draggable="false"> <img alt="Fade overlay" class="image fade-image svelte-19hxhcd"></div>'), Xi = /* @__PURE__ */ Y("<p>Fade mode requires exactly two images.</p>");
const Ui = {
  hash: "svelte-19hxhcd",
  code: ":host {touch-action:none; /* Prevent scroll inside shadow root */display:block;}.fade-container.svelte-19hxhcd {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;}.image.svelte-19hxhcd {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;pointer-events:none;}.fade-image.svelte-19hxhcd {transition:opacity 0.1s linear;}"
};
function ir(e, t) {
  ne(t, !1), oe(e, Ui);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o = S(0), f = S(10);
  function d(l) {
    if (!a(s) || !a(i)) return;
    const _ = a(s).getBoundingClientRect(), m = l.clientX - _.left, p = a(f) / 100 * _.width;
    if (m < p)
      b(o, 0);
    else if (m > _.width - p)
      b(o, 1);
    else {
      const w = _.width - 2 * p;
      b(o, (m - p) / w);
    }
    P(i, a(i).style.opacity = a(o));
  }
  function c(l) {
    if (l.preventDefault(), !l.touches || l.touches.length === 0) return;
    const _ = l.touches[0];
    d({ clientX: _.clientX });
  }
  Fe(() => {
    if (a(s))
      return a(s).addEventListener("touchmove", c, { passive: !1 }), () => {
        a(s).removeEventListener("touchmove", c);
      };
  }), j(() => F(r()), () => {
    b(f, typeof r().mousefadeborder == "number" ? r().mousefadeborder : 10);
  }), ae(), le();
  var g = ye(), h = we(g);
  {
    var u = (l) => {
      var _ = Hi(), m = G(_), p = ve(m, 2);
      U(p, (w) => b(i, w), () => a(i)), Z(_), U(_, (w) => b(s, w), () => a(s)), ge(() => {
        H(m, "src", n()[0]), H(p, "src", n()[1]), H(p, "style", `opacity: ${a(o) ?? ""}`);
      }), L("dragstart", m, W(function(w) {
        K.call(this, t, w);
      })), L("mousemove", _, d), C(l, _);
    }, v = (l) => {
      var _ = Xi();
      C(l, _);
    };
    he(h, (l) => {
      n().length === 2 ? l(u) : l(v, !1);
    });
  }
  return C(e, g), re({
    get images() {
      return n();
    },
    set images(l) {
      n(l), A();
    },
    get options() {
      return r();
    },
    set options(l) {
      r(l), A();
    }
  });
}
ce(ir, { images: {}, options: {} }, [], [], !0);
var Vi = /* @__PURE__ */ Y('<div class="flicker-container svelte-t6tdj5"><img alt="" aria-hidden="true" class="image svelte-t6tdj5" draggable="false"></div>'), Wi = /* @__PURE__ */ Y("<p>Flicker mode requires exactly two images.</p>");
const Ki = {
  hash: "svelte-t6tdj5",
  code: ".flicker-container.svelte-t6tdj5 {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;}.image.svelte-t6tdj5 {position:absolute;width:100%;height:100%;object-fit:contain;}"
};
function sr(e, t) {
  ne(t, !1), oe(e, Ki);
  const n = S();
  let r = B(t, "images", 28, () => []), s = B(t, "options", 28, () => ({})), i = S(), o = S(0), f;
  function d() {
    clearInterval(f), b(o, 0), f = setInterval(
      () => {
        b(o, (a(o) + 1) % 2);
      },
      a(n)
    );
  }
  Jt(() => {
    clearInterval(f);
  }), j(() => F(s()), () => {
    b(n, s().flickerSpeed ?? 100);
  }), j(
    () => (F(r()), a(n)),
    () => {
      r().length === 2 && a(n) > 0 && d();
    }
  ), ae(), le();
  var c = ye(), g = we(c);
  {
    var h = (v) => {
      var l = Vi(), _ = G(l);
      Z(l), U(l, (m) => b(i, m), () => a(i)), ge(() => H(_, "src", r()[a(o)])), L("dragstart", _, W(function(m) {
        K.call(this, t, m);
      })), C(v, l);
    }, u = (v) => {
      var l = Wi();
      C(v, l);
    };
    he(g, (v) => {
      r().length === 2 ? v(h) : v(u, !1);
    });
  }
  return C(e, c), re({
    get images() {
      return r();
    },
    set images(v) {
      r(v), A();
    },
    get options() {
      return s();
    },
    set options(v) {
      s(v), A();
    }
  });
}
ce(sr, { images: {}, options: {} }, [], [], !0);
var Zi = /* @__PURE__ */ Y('<div class="hover-container svelte-1tvikui" role="presentation"><img alt="" aria-hidden="true" class="image svelte-1tvikui" draggable="false"> <img alt="" aria-hidden="true" class="image hover-image svelte-1tvikui" draggable="false"></div>'), Gi = /* @__PURE__ */ Y("<p>Hover mode requires exactly two images.</p>");
const Ji = {
  hash: "svelte-1tvikui",
  code: ":host {touch-action:none;display:block;}.hover-container.svelte-1tvikui {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;}.image.svelte-1tvikui {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;pointer-events:none;}.hover-image.svelte-1tvikui {opacity:0;}"
};
function ar(e, t) {
  ne(t, !1), oe(e, Ji);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o = 50, f = S(0.3), d = S(!1);
  async function c() {
    await $e(), a(i) && (o = 50, P(i, a(i).style.opacity = 0), P(i, a(i).style.transition = `opacity ${a(f)}s`), b(d, !0));
  }
  function g(m) {
    if (!a(s) || !a(i)) return;
    const p = a(s).getBoundingClientRect();
    o = (m.clientX - p.left) / p.width * 100, P(i, a(i).style.opacity = o > 50 ? 1 : 0);
  }
  function h(m) {
    if (m.preventDefault(), !a(s) || !a(i) || m.touches.length === 0) return;
    const p = m.touches[0], w = a(s).getBoundingClientRect();
    o = (p.clientX - w.left) / w.width * 100, P(i, a(i).style.opacity = o > 50 ? 1 : 0);
  }
  Fe(() => {
    if (a(s))
      return a(s).addEventListener("touchmove", h, { passive: !1 }), () => {
        a(s).removeEventListener("touchmove", h);
      };
  }), j(() => F(r()), () => {
    b(f, typeof r().fadeSpeed == "number" ? r().fadeSpeed : 0.3);
  }), j(
    () => (F(n()), a(d)),
    () => {
      n().length === 2 && !a(d) && c();
    }
  ), ae(), le();
  var u = ye(), v = we(u);
  {
    var l = (m) => {
      var p = Zi(), w = G(p), I = ve(w, 2);
      U(I, (E) => b(i, E), () => a(i)), Z(p), U(p, (E) => b(s, E), () => a(s)), ge(() => {
        H(w, "src", n()[0]), H(I, "src", n()[1]);
      }), L("dragstart", w, W(function(E) {
        K.call(this, t, E);
      })), L("dragstart", I, W(function(E) {
        K.call(this, t, E);
      })), L("mousemove", p, g), C(m, p);
    }, _ = (m) => {
      var p = Gi();
      C(m, p);
    };
    he(v, (m) => {
      n().length === 2 ? m(l) : m(_, !1);
    });
  }
  return C(e, u), re({
    get images() {
      return n();
    },
    set images(m) {
      n(m), A();
    },
    get options() {
      return r();
    },
    set options(m) {
      r(m), A();
    }
  });
}
ce(ar, { images: {}, options: {} }, [], [], !0);
var Qi = /* @__PURE__ */ Y('<div class="zoom-container svelte-6bo1dw" role="presentation"><img alt="" class="image svelte-6bo1dw" draggable="false"> <div class="lens svelte-6bo1dw"></div></div>'), es = /* @__PURE__ */ Y("<p>LensZoom mode requires exactly two images.</p>");
const ts = {
  hash: "svelte-6bo1dw",
  code: ".zoom-container.svelte-6bo1dw {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;}.image.svelte-6bo1dw {position:absolute;width:100%;height:100%;object-fit:contain;pointer-events:none;}.lens.svelte-6bo1dw {position:absolute;pointer-events:none;border:2px solid rgba(255, 255, 255, 0.8);border-radius:50%;box-shadow:0 0 10px rgba(0, 0, 0, 0.5);background-repeat:no-repeat;background-position:center;}"
};
function or(e, t) {
  ne(t, !1), oe(e, ts);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o = S(), f = S(2), d = S(150), c = S(0), g = S(0), h = S(""), u = S(), v = S(), l = S({ x: 0.5, y: 0.5 }), _ = !1;
  async function m() {
    if (await $e(), !a(o)) return;
    const x = new Image();
    x.src = a(o).src, await new Promise((ie) => x.onload = ie), b(c, x.naturalWidth), b(g, x.naturalHeight);
    const { dataUrl: T } = await p(n()[1], a(d) / 2);
    b(h, T), P(i, a(i).style.visibility = "hidden"), await $e();
    const q = a(o).getBoundingClientRect(), M = q.width * a(l).x, z = q.height * a(l).y;
    E(M, z), P(i, a(i).style.visibility = "visible");
  }
  function p(x, T) {
    return new Promise((q) => {
      const M = new Image();
      M.crossOrigin = "anonymous", M.onload = () => {
        const z = document.createElement("canvas");
        z.width = M.width + T * 2, z.height = M.height + T * 2, z.getContext("2d", { willReadFrequently: !0 }).drawImage(M, T, T), q({ dataUrl: z.toDataURL() });
      }, M.onerror = () => q({ dataUrl: "" }), M.src = x;
    });
  }
  function w(x) {
    if (_ || !a(o)) return;
    const T = a(o).getBoundingClientRect(), q = x.clientX - T.left, M = x.clientY - T.top;
    b(l, {
      x: q / T.width,
      y: M / T.height
    }), E(q, M);
  }
  function I(x) {
    if (!a(o)) return;
    const T = a(o).getBoundingClientRect(), q = x.clientX - T.left, M = x.clientY - T.top;
    _ = !_, _ && (b(l, {
      x: q / T.width,
      y: M / T.height
    }), E(q, M));
  }
  function E(x, T) {
    if (!a(i) || !a(h)) return;
    const q = a(o).getBoundingClientRect(), M = a(c) / q.width, z = a(g) / q.height, ie = a(d) / 2;
    P(i, a(i).style.width = `${a(d)}px`), P(i, a(i).style.height = `${a(d)}px`), P(i, a(i).style.left = `${x - ie}px`), P(i, a(i).style.top = `${T - ie}px`);
    const vr = (a(c) + ie * 2) * a(f), hr = (a(g) + ie * 2) * a(f);
    P(i, a(i).style.backgroundSize = `${vr}px ${hr}px`), P(i, a(i).style.backgroundPosition = `-${(x + ie) * M * a(f) - ie}px -${(T + ie) * z * a(f) - ie}px`);
  }
  Fe(() => {
    var x;
    (x = a(s)) == null || x.addEventListener(
      "touchmove",
      (T) => {
        T.preventDefault(), T.touches[0] && w(T.touches[0]);
      },
      { passive: !1 }
    );
  }), j(() => F(r()), () => {
    b(f, typeof r().zoom == "number" ? r().zoom : 2);
  }), j(() => F(r()), () => {
    b(d, typeof r().lensSize == "number" ? r().lensSize : 150);
  }), j(
    () => (F(n()), a(d), a(f), a(u)),
    () => {
      n().length === 2 && a(d) && a(f) && (clearTimeout(a(u)), b(u, setTimeout(m, 150)));
    }
  ), j(
    () => (a(h), a(c), a(g), a(v), a(o), a(l)),
    () => {
      a(h) && a(c) && a(g) && (clearTimeout(a(v)), b(v, setTimeout(
        async () => {
          if (!a(o)) return;
          await $e();
          const x = a(o).getBoundingClientRect(), T = x.width * a(l).x, q = x.height * a(l).y;
          E(T, q), P(i, a(i).style.visibility = "visible");
        },
        30
      )));
    }
  ), ae(), le();
  var $ = ye(), k = we($);
  {
    var R = (x) => {
      var T = Qi(), q = G(T);
      U(q, (z) => b(o, z), () => a(o));
      var M = ve(q, 2);
      U(M, (z) => b(i, z), () => a(i)), Z(T), U(T, (z) => b(s, z), () => a(s)), ge(() => {
        H(q, "src", n()[0]), H(M, "style", `background-image:url('${a(h) ?? ""}');visibility:hidden`);
      }), L("dragstart", q, W(function(z) {
        K.call(this, t, z);
      })), L("mousemove", T, w), L("click", T, I), C(x, T);
    }, y = (x) => {
      var T = es();
      C(x, T);
    };
    he(k, (x) => {
      n().length === 2 ? x(R) : x(y, !1);
    });
  }
  return C(e, $), re({
    get images() {
      return n();
    },
    set images(x) {
      n(x), A();
    },
    get options() {
      return r();
    },
    set options(x) {
      r(x), A();
    }
  });
}
ce(or, { images: {}, options: {} }, [], [], !0);
var ns = /* @__PURE__ */ Y('<div class="overlay-mode svelte-wsj6r"><img class="base svelte-wsj6r" alt="Base" draggable="false"> <img class="overlay svelte-wsj6r" alt="Overlay" draggable="false"></div>');
const rs = {
  hash: "svelte-wsj6r",
  code: ".overlay-mode.svelte-wsj6r {position:relative;width:100%;height:100%;}img.svelte-wsj6r {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;}"
};
function lr(e, t) {
  ne(t, !1), oe(e, rs);
  const n = S(), r = S(), s = S();
  let i = B(t, "images", 28, () => []), o = B(t, "options", 28, () => ({}));
  j(() => F(i()), () => {
    b(n, Array.isArray(i()) && i().length > 0 ? i()[0] : "");
  }), j(() => F(i()), () => {
    b(r, Array.isArray(i()) && i().length > 1 ? i()[1] : "");
  }), j(() => F(o()), () => {
    b(s, o().opacityValue ?? 50);
  }), ae(), le();
  var f = ns(), d = G(f), c = ve(d, 2);
  return Z(f), ge(() => {
    H(d, "src", a(n)), H(c, "src", a(r)), H(c, "style", `opacity: ${a(s) / 100}`);
  }), L("dragstart", d, W(function(g) {
    K.call(this, t, g);
  })), L("dragstart", c, W(function(g) {
    K.call(this, t, g);
  })), C(e, f), re({
    get images() {
      return i();
    },
    set images(g) {
      i(g), A();
    },
    get options() {
      return o();
    },
    set options(g) {
      o(g), A();
    }
  });
}
ce(lr, { images: {}, options: {} }, [], [], !0);
var is = /* @__PURE__ */ Y('<div class="paint-container svelte-yt8qir"><img alt="" aria-hidden="true" class="image svelte-yt8qir" draggable="false"> <canvas class="paint-canvas svelte-yt8qir"></canvas> <button class="reset-button svelte-yt8qir">Reset</button></div>'), ss = /* @__PURE__ */ Y("<p>Paint mode requires exactly two images.</p>");
const as = {
  hash: "svelte-yt8qir",
  code: ":host {touch-action:none;display:block;}.paint-container.svelte-yt8qir {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;touch-action:none;}.image.svelte-yt8qir {position:absolute;top:0;left:0;width:100%;height:100%;object-fit:contain;pointer-events:none;}.paint-canvas.svelte-yt8qir {position:absolute;top:0;left:0;width:100%;height:100%;cursor:crosshair;pointer-events:all;}.reset-button.svelte-yt8qir {position:absolute;top:10px;right:10px;z-index:5;padding:6px 12px;border:none;background:rgba(255, 255, 255, 0.8);border-radius:4px;cursor:pointer;}"
};
function cr(e, t) {
  ne(t, !1), oe(e, as);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({})), s = S(), i = S(), o, f = !1, d = S(!1), c = 0, g = 0, h = S(30);
  Fe(() => {
    if (u(), !a(i)) return;
    const y = (x) => p(x);
    return a(i).addEventListener("touchstart", y, { passive: !1 }), () => {
      a(i).removeEventListener("touchstart", y);
    };
  });
  async function u() {
    if (await $e(), !a(i)) return;
    const y = new Image();
    y.src = n()[1], await new Promise((x) => y.onload = x), c = y.width, g = y.height, P(i, a(i).width = c), P(i, a(i).height = g), a(s) && (P(s, a(s).style.width = `${c}px`), P(s, a(s).style.height = `${g}px`)), o = a(i).getContext("2d", { willReadFrequently: !0 }), o.clearRect(0, 0, c, g), o.drawImage(y, 0, 0), b(d, !0);
  }
  function v(y) {
    f = !0, _(y), window.addEventListener("mousemove", _), window.addEventListener("mouseup", l);
  }
  function l() {
    f = !1, window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", l);
  }
  function _(y) {
    if (!f || !a(i) || !o) return;
    const x = a(i).getBoundingClientRect(), T = a(i).width / x.width, q = a(i).height / x.height, M = (y.clientX - x.left) * T, z = (y.clientY - x.top) * q;
    o.globalCompositeOperation = "destination-out", o.beginPath(), o.arc(M, z, a(h), 0, 2 * Math.PI), o.fill();
  }
  function m() {
    b(d, !1);
  }
  function p(y) {
    y.preventDefault(), f = !0, I(y), window.addEventListener("touchmove", I, { passive: !1 }), window.addEventListener("touchend", w), window.addEventListener("touchcancel", w);
  }
  function w() {
    f = !1, window.removeEventListener("touchmove", I), window.removeEventListener("touchend", w), window.removeEventListener("touchcancel", w);
  }
  function I(y) {
    if (y.preventDefault(), !f || !a(i) || !o || y.touches.length === 0) return;
    const x = y.touches[0], T = a(i).getBoundingClientRect(), q = a(i).width / T.width, M = a(i).height / T.height, z = (x.clientX - T.left) * q, ie = (x.clientY - T.top) * M;
    o.globalCompositeOperation = "destination-out", o.beginPath(), o.arc(z, ie, a(h), 0, 2 * Math.PI), o.fill();
  }
  j(() => F(r()), () => {
    b(h, typeof r().brushRadius == "number" ? r().brushRadius : 30);
  }), j(
    () => (F(n()), a(d)),
    () => {
      n().length === 2 && !a(d) && u();
    }
  ), ae(), le();
  var E = ye(), $ = we(E);
  {
    var k = (y) => {
      var x = is(), T = G(x), q = ve(T, 2);
      U(q, (z) => b(i, z), () => a(i));
      var M = ve(q, 2);
      Z(x), U(x, (z) => b(s, z), () => a(s)), ge(() => H(T, "src", n()[0])), L("dragstart", T, W(function(z) {
        K.call(this, t, z);
      })), L("mousedown", q, v), L("click", M, m), C(y, x);
    }, R = (y) => {
      var x = ss();
      C(y, x);
    };
    he($, (y) => {
      n().length === 2 ? y(k) : y(R, !1);
    });
  }
  return C(e, E), re({
    get images() {
      return n();
    },
    set images(y) {
      n(y), A();
    },
    get options() {
      return r();
    },
    set options(y) {
      r(y), A();
    }
  });
}
ce(cr, { images: {}, options: {} }, [], [], !0);
var os = /* @__PURE__ */ Y('<div class="reveal-container svelte-94dgbl" role="presentation"><img alt="Base" class="image svelte-94dgbl" draggable="false"> <img alt="Overlay" class="image reveal-image svelte-94dgbl" style="visibility: hidden" draggable="false"></div>'), ls = /* @__PURE__ */ Y("<p>Reveal mode requires exactly two images.</p>");
const cs = {
  hash: "svelte-94dgbl",
  code: ":host {display:block;touch-action:none;}.reveal-container.svelte-94dgbl {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;--cx: 50%;--cy: 50%;--r: 75px;}.image.svelte-94dgbl {position:absolute;inset:0;object-fit:contain;pointer-events:none;}.reveal-image.svelte-94dgbl {clip-path:circle(var(--r) at var(--cx) var(--cy));}"
};
function ur(e, t) {
  ne(t, !1), oe(e, cs);
  let n = B(t, "images", 28, () => []), r = B(t, "options", 28, () => ({}));
  const s = Ii();
  let i = S(), o = S(), f = 0.5, d = 0.5, c = !1, g = S(75);
  function h() {
    const E = a(i).getBoundingClientRect(), $ = E.width * f, k = E.height * d;
    a(i).style.setProperty("--cx", `${$}px`), a(i).style.setProperty("--cy", `${k}px`), a(i).style.setProperty("--r", `${a(g)}px`);
  }
  function u() {
    P(o, a(o).style.visibility = "visible");
  }
  function v() {
    P(o, a(o).style.visibility = "hidden");
  }
  function l(E) {
    const $ = E.touches ? E.touches[0] : E, k = a(i).getBoundingClientRect();
    f = ($.clientX - k.left) / k.width, d = ($.clientY - k.top) / k.height, u(), c || (c = !0, requestAnimationFrame(() => {
      h(), c = !1;
    }));
  }
  function _(E) {
    E.preventDefault();
    const $ = E.deltaY > 0 ? -5 : 5, k = Math.min(a(i).clientWidth, a(i).clientHeight) / 2;
    b(g, Math.max(10, Math.min(k, a(g) + $))), u(), h(), r({
      ...r(),
      revealCircleSize: a(g)
    }), s("options-change", r());
  }
  Fe(async () => {
    await $e(), a(i) && (a(i).addEventListener("touchmove", l, { passive: !1 }), a(i).addEventListener("touchend", v), a(i).addEventListener("touchcancel", v));
  }), Jt(() => {
    var E, $, k;
    (E = a(i)) == null || E.removeEventListener("touchmove", l), ($ = a(i)) == null || $.removeEventListener("touchend", v), (k = a(i)) == null || k.removeEventListener("touchcancel", v);
  }), j(
    () => (F(r()), a(i)),
    () => {
      b(g, typeof r().revealCircleSize == "number" ? r().revealCircleSize : 75), a(i) && h();
    }
  ), ae(), le();
  var m = ye(), p = we(m);
  {
    var w = (E) => {
      var $ = os(), k = G($), R = ve(k, 2);
      U(R, (y) => b(o, y), () => a(o)), Z($), U($, (y) => b(i, y), () => a(i)), ge(() => {
        H(k, "src", n()[0]), H(R, "src", n()[1]);
      }), L("dragstart", k, W(function(y) {
        K.call(this, t, y);
      })), L("dragstart", R, W(function(y) {
        K.call(this, t, y);
      })), L("mousemove", $, l), L("mouseleave", $, v), L("touchstart", $, l), L("wheel", $, _), C(E, $);
    }, I = (E) => {
      var $ = ls();
      C(E, $);
    };
    he(p, (E) => {
      n().length === 2 ? E(w) : E(I, !1);
    });
  }
  return C(e, m), re({
    get images() {
      return n();
    },
    set images(E) {
      n(E), A();
    },
    get options() {
      return r();
    },
    set options(E) {
      r(E), A();
    }
  });
}
ce(ur, { images: {}, options: {} }, [], [], !0);
var us = /* @__PURE__ */ Y('<div class="vertical-wipe-control svelte-1cqng2h"></div>'), fs = /* @__PURE__ */ Y('<div class="horizontal-wipe-control svelte-1cqng2h"></div>'), ds = /* @__PURE__ */ Y('<div class="container svelte-1cqng2h" role="presentation"><img class="image svelte-1cqng2h" alt="Base" draggable="false"> <img alt="Overlay" draggable="false"> <!></div>'), vs = /* @__PURE__ */ Y("<p>Slide mode requires exactly two images.</p>");
const hs = {
  hash: "svelte-1cqng2h",
  code: ":host {display:block;touch-action:none;}.container.svelte-1cqng2h {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;touch-action:none;}.image.svelte-1cqng2h {position:absolute;width:100%;height:100%;object-fit:contain;top:0;left:0;pointer-events:none;}.top-horizontal.svelte-1cqng2h {clip-path:inset(0 0 0 calc(var(--horizontal-wipe-position) * 1%));}.top-vertical.svelte-1cqng2h {clip-path:inset(calc(var(--vertical-wipe-position) * 1%) 0 0 0);}.horizontal-wipe-control.svelte-1cqng2h {position:absolute;top:0;left:calc(var(--horizontal-wipe-position) * 1%);width:3px;height:100%;background-color:rgba(255, 255, 255, 0.8);cursor:ew-resize;}.vertical-wipe-control.svelte-1cqng2h {position:absolute;top:calc(var(--vertical-wipe-position) * 1%);left:0;width:100%;height:3px;background-color:rgba(255, 255, 255, 0.8);cursor:ns-resize;}"
};
function fr(e, t) {
  ne(t, !1), oe(e, hs);
  const n = S();
  let r = B(t, "images", 28, () => []), s = B(t, "options", 28, () => ({})), i = S(), o = S(50);
  function f(p) {
    window.addEventListener("mousemove", c), window.addEventListener("mouseup", d), c(p);
  }
  function d() {
    window.removeEventListener("mousemove", c), window.removeEventListener("mouseup", d);
  }
  function c(p) {
    if (!a(i)) return;
    const w = a(i).getBoundingClientRect();
    a(n) ? (b(o, Math.min(Math.max((p.clientY - w.top) / w.height * 100, 0), 100)), a(i).style.setProperty("--vertical-wipe-position", a(o))) : (b(o, Math.min(Math.max((p.clientX - w.left) / w.width * 100, 0), 100)), a(i).style.setProperty("--horizontal-wipe-position", a(o)));
  }
  function g(p) {
    p.preventDefault(), window.addEventListener("touchmove", u, { passive: !1 }), window.addEventListener("touchend", h), window.addEventListener("touchcancel", h), u(p);
  }
  function h() {
    window.removeEventListener("touchmove", u), window.removeEventListener("touchend", h), window.removeEventListener("touchcancel", h);
  }
  function u(p) {
    var E;
    if (p.preventDefault(), !((E = p.touches) != null && E.length) || !a(i)) return;
    const w = p.touches[0], I = a(i).getBoundingClientRect();
    a(n) ? (b(o, Math.min(Math.max((w.clientY - I.top) / I.height * 100, 0), 100)), a(i).style.setProperty("--vertical-wipe-position", a(o))) : (b(o, Math.min(Math.max((w.clientX - I.left) / I.width * 100, 0), 100)), a(i).style.setProperty("--horizontal-wipe-position", a(o)));
  }
  Fe(() => {
    var p;
    return (p = a(i)) == null || p.addEventListener("touchstart", g, { passive: !1 }), () => {
      var w;
      (w = a(i)) == null || w.removeEventListener("touchstart", g);
    };
  }), j(() => F(s()), () => {
    b(n, s().verticalWiper ?? !1);
  }), j(
    () => (F(r()), a(i), a(n), a(o)),
    () => {
      r().length === 2 && a(i) && (async () => (await $e(), a(i).style.setProperty(a(n) ? "--vertical-wipe-position" : "--horizontal-wipe-position", a(o))))();
    }
  ), ae(), le();
  var v = ye(), l = we(v);
  {
    var _ = (p) => {
      var w = ds(), I = G(w), E = ve(I, 2), $ = ve(E, 2);
      {
        var k = (y) => {
          var x = us();
          C(y, x);
        }, R = (y) => {
          var x = fs();
          C(y, x);
        };
        he($, (y) => {
          a(n) ? y(k) : y(R, !1);
        });
      }
      Z(w), U(w, (y) => b(i, y), () => a(i)), ge(() => {
        H(I, "src", r()[0]), H(E, "src", r()[1]), Gn(E, `image ${(a(n) ? "top-vertical" : "top-horizontal") ?? ""} svelte-1cqng2h`);
      }), L("dragstart", I, W(function(y) {
        K.call(this, t, y);
      })), L("dragstart", E, W(function(y) {
        K.call(this, t, y);
      })), L("mousedown", w, f), C(p, w);
    }, m = (p) => {
      var w = vs();
      C(p, w);
    };
    he(l, (p) => {
      r().length === 2 ? p(_) : p(m, !1);
    });
  }
  return C(e, v), re({
    get images() {
      return r();
    },
    set images(p) {
      r(p), A();
    },
    get options() {
      return s();
    },
    set options(p) {
      s(p), A();
    }
  });
}
ce(fr, { images: {}, options: {} }, [], [], !0);
var gs = /* @__PURE__ */ Y('<div class="toggle-container svelte-atga7e"><img alt="" aria-hidden="true" class="image svelte-atga7e" draggable="false"></div>'), _s = /* @__PURE__ */ Y("<p>Toggle mode requires exactly two images.</p>");
const ps = {
  hash: "svelte-atga7e",
  code: ".toggle-container.svelte-atga7e {position:relative;width:100%;height:100%;overflow:hidden;user-select:none;}.image.svelte-atga7e {position:absolute;width:100%;height:100%;top:0;left:0;object-fit:contain;pointer-events:none;transition:opacity 0.3s;}"
};
function dr(e, t) {
  ne(t, !1), oe(e, ps);
  const n = S();
  let r = B(t, "images", 28, () => []), s = B(t, "options", 28, () => ({})), i = S(0), o;
  function f() {
    clearInterval(o), b(i, 0), o = setInterval(() => b(i, (a(i) + 1) % 2), a(n));
  }
  Jt(() => {
    clearInterval(o);
  }), j(() => F(s()), () => {
    b(n, typeof s().toggleSpeed == "number" ? s().toggleSpeed : 1e3);
  }), j(
    () => (F(r()), a(n)),
    () => {
      r().length === 2 && a(n) >= 0 && f();
    }
  ), ae(), le();
  var d = ye(), c = we(d);
  {
    var g = (u) => {
      var v = gs(), l = G(v);
      Z(v), ge(() => H(l, "src", r()[a(i)])), L("dragstart", l, W(function(_) {
        K.call(this, t, _);
      })), C(u, v);
    }, h = (u) => {
      var v = _s();
      C(u, v);
    };
    he(c, (u) => {
      r().length === 2 ? u(g) : u(h, !1);
    });
  }
  return C(e, d), re({
    get images() {
      return r();
    },
    set images(u) {
      r(u), A();
    },
    get options() {
      return s();
    },
    set options(u) {
      s(u), A();
    }
  });
}
ce(dr, { images: {}, options: {} }, [], [], !0);
const ms = {
  clickflip: er,
  colordiff: tr,
  difference: nr,
  edge: rr,
  fade: ir,
  flicker: sr,
  hover: ar,
  lenszoom: or,
  overlay: lr,
  paint: cr,
  reveal: ur,
  slide: fr,
  toggle: dr
}, As = Object.keys(ms), Ds = {
  clickflip: [
    {
      type: "number",
      option: "flipSpeed",
      label: "Flip Speed (ms)",
      default: 600,
      min: 100,
      max: 2e3,
      step: 100
    }
  ],
  colordiff: [
    {
      type: "number",
      option: "colorThreshold",
      label: "Color Threshold",
      default: 20,
      min: 0,
      max: 255,
      step: 1
    }
  ],
  difference: [
    {
      type: "number",
      option: "differenceThreshold",
      label: "Difference Threshold",
      default: 24,
      min: 0,
      max: 100,
      step: 1
    }
  ],
  edge: [
    {
      type: "number",
      option: "differenceThreshold",
      label: "Edge Detection Threshold",
      default: 50,
      min: 0,
      max: 100,
      step: 1
    }
  ],
  fade: [
    {
      type: "number",
      option: "mousefadeborder",
      label: "Fade Border Width (px)",
      default: 25,
      min: 0,
      max: 50,
      step: 1
    }
  ],
  flicker: [
    {
      type: "number",
      option: "flickerSpeed",
      label: "Flicker Speed (ms)",
      default: 50,
      min: 30,
      max: 150,
      step: 1
    }
  ],
  hover: [],
  lenszoom: [
    {
      type: "number",
      option: "lensSize",
      label: "Lens Size (px)",
      default: 140,
      min: 50,
      max: 200,
      step: 5
    },
    {
      type: "number",
      option: "zoom",
      label: "Zoom Level",
      default: 2,
      min: 1,
      max: 4,
      step: 0.1
    }
  ],
  overlay: [
    {
      type: "number",
      option: "opacityValue",
      label: "Overlay Opacity (%)",
      default: 50,
      min: 0,
      max: 100,
      step: 1
    }
  ],
  paint: [
    {
      type: "number",
      option: "brushRadius",
      label: "Brush Radius (px)",
      default: 20,
      min: 15,
      max: 40,
      step: 1
    }
  ],
  reveal: [
    {
      type: "number",
      option: "revealCircleSize",
      label: "Reveal Circle Size (px)",
      default: 40,
      min: 20,
      max: 100,
      step: 2
    }
  ],
  slide: [
    {
      type: "boolean",
      option: "verticalWiper",
      label: "Vertical Wiper",
      default: !1
    }
  ],
  toggle: [
    {
      type: "number",
      option: "toggleSpeed",
      label: "Toggle Speed (ms)",
      default: 1e3,
      min: 0,
      max: 5e3,
      step: 100
    }
  ]
};
export {
  gi as $,
  ge as A,
  H as B,
  Ss as C,
  Cs as D,
  L as E,
  P as F,
  Rs as G,
  Zt as H,
  ks as I,
  As as J,
  Is as K,
  rt as L,
  Fn as M,
  Wr as N,
  on as O,
  Mt as P,
  zt as Q,
  Ke as R,
  Rr as S,
  O as T,
  At as U,
  $t as V,
  be as W,
  xt as X,
  bs as Y,
  Xn as Z,
  Jr as _,
  oe as a,
  De as a0,
  ze as a1,
  ys as a2,
  $s as a3,
  Le as a4,
  it as a5,
  Wt as a6,
  gn as a7,
  Gr as a8,
  Xe as a9,
  X as aa,
  _n as ab,
  Es as ac,
  Xt as ad,
  xs as ae,
  Yt as af,
  $e as ag,
  j as ah,
  ae as ai,
  U as aj,
  qs as ak,
  Ps as al,
  Ls as am,
  ms as an,
  F as ao,
  Si as ap,
  B as b,
  ce as c,
  Jt as d,
  le as e,
  he as f,
  C as g,
  V as h,
  St as i,
  re as j,
  A as k,
  Ts as l,
  Ds as m,
  S as n,
  Fe as o,
  ne as p,
  G as q,
  lt as r,
  b as s,
  Y as t,
  pe as u,
  a as v,
  Z as w,
  ye as x,
  we as y,
  ve as z
};
