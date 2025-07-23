import { M as $, b as j, v as p, K as ee, N as X, c as z, p as ae, O as w, P as J, Q as H, R as re, S as te, T as O, h as x, U as ne, V as le, W as ie, X as se, Y as ue, Z as fe, _ as ve, $ as oe, a0 as de, a1 as N, a2 as ce, a as _e, a3 as he, a4 as D, a5 as q, d as I, a6 as ge, a7 as pe, a8 as K, a9 as me, e as ye, f as be, g as V, o as Ee, C, j as xe, k as P, I as B, x as Me, aa as Ie, q as L, r as Te, s as Y, ab as Ae, B as F, ac as Se, z as ke, J as we } from "./index-u4DEvT10.js";
function Ne(r, e) {
  return e;
}
function qe(r, e, a, i) {
  for (var n = [], l = e.length, f = 0; f < l; f++)
    ie(e[f].e, n, !0);
  var c = l > 0 && n.length === 0 && a !== null;
  if (c) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    se(u), u.append(
      /** @type {Element} */
      a
    ), i.clear(), b(r, e[0].prev, e[l - 1].next);
  }
  ue(n, () => {
    for (var v = 0; v < l; v++) {
      var t = e[v];
      c || (i.delete(t.k), b(r, t.prev, t.next)), fe(t.e, !c);
    }
  });
}
function Ce(r, e, a, i, n, l = null) {
  var f = r, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      r
    );
    f = x ? N(
      /** @type {Comment | Text} */
      ce(u)
    ) : u.appendChild($());
  }
  x && _e();
  var v = null, t = !1, h = ee(() => {
    var s = a();
    return ne(s) ? s : s == null ? [] : J(s);
  });
  j(() => {
    var s = p(h), _ = s.length;
    if (t && _ === 0)
      return;
    t = _ === 0;
    let o = !1;
    if (x) {
      var M = (
        /** @type {Comment} */
        f.data === he
      );
      M !== (_ === 0) && (f = D(), N(f), q(!1), o = !0);
    }
    if (x) {
      for (var m = null, d, g = 0; g < _; g++) {
        if (I.nodeType === 8 && /** @type {Comment} */
        I.data === ge) {
          f = /** @type {Comment} */
          I, o = !0, q(!1);
          break;
        }
        var A = s[g], E = i(A, g);
        d = Q(
          I,
          c,
          m,
          null,
          A,
          E,
          g,
          n,
          e,
          a
        ), c.items.set(E, d), m = d;
      }
      _ > 0 && N(D());
    }
    x || Re(s, c, f, n, e, i, a), l !== null && (_ === 0 ? v ? X(v) : v = z(() => l(f)) : v !== null && ae(v, () => {
      v = null;
    })), o && q(!0), p(h);
  }), x && (f = I);
}
function Re(r, e, a, i, n, l, f) {
  var c = r.length, u = e.items, v = e.first, t = v, h, s = null, _ = [], o = [], M, m, d, g;
  for (g = 0; g < c; g += 1) {
    if (M = r[g], m = l(M, g), d = u.get(m), d === void 0) {
      var A = t ? (
        /** @type {TemplateNode} */
        t.e.nodes_start
      ) : a;
      s = Q(
        A,
        e,
        s,
        s === null ? e.first : s.next,
        M,
        m,
        g,
        i,
        n,
        f
      ), u.set(m, s), _ = [], o = [], t = s.next;
      continue;
    }
    if (He(d, M, g), (d.e.f & w) !== 0 && X(d.e), d !== t) {
      if (h !== void 0 && h.has(d)) {
        if (_.length < o.length) {
          var E = o[0], y;
          s = E.prev;
          var R = _[0], S = _[_.length - 1];
          for (y = 0; y < _.length; y += 1)
            U(_[y], E, a);
          for (y = 0; y < o.length; y += 1)
            h.delete(o[y]);
          b(e, R.prev, S.next), b(e, s, R), b(e, S, E), t = E, s = S, g -= 1, _ = [], o = [];
        } else
          h.delete(d), U(d, t, a), b(e, d.prev, d.next), b(e, d, s === null ? e.first : s.next), b(e, s, d), s = d;
        continue;
      }
      for (_ = [], o = []; t !== null && t.k !== m; )
        (t.e.f & w) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(t), o.push(t), t = t.next;
      if (t === null)
        continue;
      d = t;
    }
    _.push(d), s = d, t = d.next;
  }
  if (t !== null || h !== void 0) {
    for (var k = h === void 0 ? [] : J(h); t !== null; )
      (t.e.f & w) === 0 && k.push(t), t = t.next;
    var Z = k.length;
    if (Z > 0) {
      var G = c === 0 ? a : null;
      qe(e, k, G, u);
    }
  }
  H.first = e.first && e.first.e, H.last = s && s.e;
}
function He(r, e, a, i) {
  re(r.v, e), r.i = a;
}
function Q(r, e, a, i, n, l, f, c, u, v) {
  var t = (u & oe) !== 0, h = (u & de) === 0, s = t ? h ? te(n) : O(n) : n, _ = (u & le) === 0 ? f : O(f), o = {
    i: _,
    v: s,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: i
  };
  try {
    return o.e = z(() => c(r, s, _, v), x), o.e.prev = a && a.e, o.e.next = i && i.e, a === null ? e.first = o : (a.next = o, a.e.next = o.e), i !== null && (i.prev = o, i.e.prev = o.e), o;
  } finally {
  }
}
function U(r, e, a) {
  for (var i = r.next ? (
    /** @type {TemplateNode} */
    r.next.e.nodes_start
  ) : a, n = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, l = (
    /** @type {TemplateNode} */
    r.e.nodes_start
  ); l !== i; ) {
    var f = (
      /** @type {TemplateNode} */
      ve(l)
    );
    n.before(l), l = f;
  }
}
function b(r, e, a) {
  e === null ? r.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
function W(r, e, a) {
  if (r.multiple)
    return Ve(r, e);
  for (var i of r.options) {
    var n = T(i);
    if (me(n, e)) {
      i.selected = !0;
      return;
    }
  }
  (!a || e !== void 0) && (r.selectedIndex = -1);
}
function Oe(r, e) {
  K(() => {
    var a = new MutationObserver(() => {
      var i = r.__value;
      W(r, i);
    });
    return a.observe(r, {
      // Listen to option element changes
      childList: !0,
      subtree: !0,
      // because of <optgroup>
      // Listen to option element value attribute changes
      // (doesn't get notified of select value changes,
      // because that property is not reflected as an attribute)
      attributes: !0,
      attributeFilter: ["value"]
    }), () => {
      a.disconnect();
    };
  });
}
function De(r, e, a = e) {
  var i = !0;
  pe(r, "change", (n) => {
    var l = n ? "[selected]" : ":checked", f;
    if (r.multiple)
      f = [].map.call(r.querySelectorAll(l), T);
    else {
      var c = r.querySelector(l) ?? // will fall back to first non-disabled option if no option is selected
      r.querySelector("option:not([disabled])");
      f = c && T(c);
    }
    a(f);
  }), K(() => {
    var n = e();
    if (W(r, n, i), i && n === void 0) {
      var l = r.querySelector(":checked");
      l !== null && (n = T(l), a(n));
    }
    r.__value = n, i = !1;
  }), Oe(r);
}
function Ve(r, e) {
  for (var a of r.options)
    a.selected = ~e.indexOf(T(a));
}
function T(r) {
  return "__value" in r ? r.__value : r.value;
}
var Be = P("<option> </option>"), Le = P("<select></select>");
function Ye(r, e) {
  be(e, !1);
  let a = V(e, "target", 12, null), i = V(e, "instance", 12, null), n = Me("slide"), l;
  Ee(() => {
    var v;
    if (l = i() || a() && document.getElementById(a()), !l) {
      console.warn("[ModeSelector] No valid target found.");
      return;
    }
    const u = l.mode ?? ((v = l.getAttribute) == null ? void 0 : v.call(l, "mode"));
    u && C(n, u);
  });
  function f(u) {
    if (C(n, u.target.value), l)
      try {
        l.mode = p(n);
      } catch (v) {
        console.error("[ModeSelector] Failed to set mode:", v);
      }
  }
  xe();
  var c = Le();
  return B(() => {
    p(n), Se(() => {
    });
  }), Ce(c, 5, () => Ae, Ne, (u, v) => {
    var t = Be(), h = {}, s = ke(t, !0);
    F(t), B(() => {
      h !== (h = p(v)) && (t.value = (t.__value = p(v)) == null ? "" : p(v)), we(s, p(v));
    }), L(u, t);
  }), F(c), De(c, () => p(n), (u) => C(n, u)), Ie("change", c, f), L(r, c), Te({
    get target() {
      return a();
    },
    set target(u) {
      a(u), Y();
    },
    get instance() {
      return i();
    },
    set instance(u) {
      i(u), Y();
    }
  });
}
customElements.define("vgg-mode-selector", ye(Ye, { target: {}, instance: {} }, [], [], !0));
export {
  Ye as default
};
