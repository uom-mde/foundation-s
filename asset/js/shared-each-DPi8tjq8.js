import { L as ee, M as ae, v as X, N as re, O as $, P as z, Q as ne, R as b, S as F, T as B, U as P, V as fe, W as Q, h as C, X as ie, Y as k, Z as le, _ as se, $ as ue, a0 as te, a1 as ve, a2 as L, a3 as de, a4 as g, a5 as _e, a6 as ce, a7 as oe, a8 as W, a9 as D, aa as R, ab as he, ac as G, ad as Ee, ae as pe } from "./shared-index-3Nm0QgDz.js";
function me(l, e) {
  return e;
}
function Te(l, e, a, u) {
  for (var v = [], _ = e.length, t = 0; t < _; t++)
    le(e[t].e, v, !0);
  var c = _ > 0 && v.length === 0 && a !== null;
  if (c) {
    var T = (
      /** @type {Element} */
      /** @type {Element} */
      a.parentNode
    );
    se(T), T.append(
      /** @type {Element} */
      a
    ), u.clear(), m(l, e[0].prev, e[_ - 1].next);
  }
  ue(v, () => {
    for (var h = 0; h < _; h++) {
      var d = e[h];
      c || (u.delete(d.k), m(l, d.prev, d.next)), te(d.e, !c);
    }
  });
}
function Ce(l, e, a, u, v, _ = null) {
  var t = l, c = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, T = (e & G) !== 0;
  if (T) {
    var h = (
      /** @type {Element} */
      l
    );
    t = C ? g(
      /** @type {Comment | Text} */
      _e(h)
    ) : h.appendChild(ee());
  }
  C && ce();
  var d = null, N = !1, f = re(() => {
    var s = a();
    return ie(s) ? s : s == null ? [] : F(s);
  });
  ae(() => {
    var s = X(f), r = s.length;
    if (N && r === 0)
      return;
    N = r === 0;
    let I = !1;
    if (C) {
      var E = (
        /** @type {Comment} */
        t.data === oe
      );
      E !== (r === 0) && (t = W(), g(t), D(!1), I = !0);
    }
    if (C) {
      for (var p = null, A, o = 0; o < r; o++) {
        if (R.nodeType === 8 && /** @type {Comment} */
        R.data === he) {
          t = /** @type {Comment} */
          R, I = !0, D(!1);
          break;
        }
        var n = s[o], i = u(n, o);
        A = J(
          R,
          c,
          p,
          null,
          n,
          i,
          o,
          v,
          e,
          a
        ), c.items.set(i, A), p = A;
      }
      r > 0 && g(W());
    }
    C || Ae(s, c, t, v, e, u, a), _ !== null && (r === 0 ? d ? $(d) : d = z(() => _(t)) : d !== null && ne(d, () => {
      d = null;
    })), I && D(!0), X(f);
  }), C && (t = R);
}
function Ae(l, e, a, u, v, _, t) {
  var y, V, Y, q;
  var c = (v & pe) !== 0, T = (v & (L | k)) !== 0, h = l.length, d = e.items, N = e.first, f = N, s, r = null, I, E = [], p = [], A, o, n, i;
  if (c)
    for (i = 0; i < h; i += 1)
      A = l[i], o = _(A, i), n = d.get(o), n !== void 0 && ((y = n.a) == null || y.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(n));
  for (i = 0; i < h; i += 1) {
    if (A = l[i], o = _(A, i), n = d.get(o), n === void 0) {
      var K = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : a;
      r = J(
        K,
        e,
        r,
        r === null ? e.first : r.next,
        A,
        o,
        i,
        u,
        v,
        t
      ), d.set(o, r), E = [], p = [], f = r.next;
      continue;
    }
    if (T && Ie(n, A, i, v), (n.e.f & b) !== 0 && ($(n.e), c && ((V = n.a) == null || V.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(n))), n !== f) {
      if (s !== void 0 && s.has(n)) {
        if (E.length < p.length) {
          var S = p[0], x;
          r = S.prev;
          var O = E[0], H = E[E.length - 1];
          for (x = 0; x < E.length; x += 1)
            Z(E[x], S, a);
          for (x = 0; x < p.length; x += 1)
            s.delete(p[x]);
          m(e, O.prev, H.next), m(e, r, O), m(e, H, S), f = S, r = H, i -= 1, E = [], p = [];
        } else
          s.delete(n), Z(n, f, a), m(e, n.prev, n.next), m(e, n, r === null ? e.first : r.next), m(e, r, n), r = n;
        continue;
      }
      for (E = [], p = []; f !== null && f.k !== o; )
        (f.e.f & b) === 0 && (s ?? (s = /* @__PURE__ */ new Set())).add(f), p.push(f), f = f.next;
      if (f === null)
        continue;
      n = f;
    }
    E.push(n), r = n, f = n.next;
  }
  if (f !== null || s !== void 0) {
    for (var w = s === void 0 ? [] : F(s); f !== null; )
      (f.e.f & b) === 0 && w.push(f), f = f.next;
    var M = w.length;
    if (M > 0) {
      var j = (v & G) !== 0 && h === 0 ? a : null;
      if (c) {
        for (i = 0; i < M; i += 1)
          (Y = w[i].a) == null || Y.measure();
        for (i = 0; i < M; i += 1)
          (q = w[i].a) == null || q.fix();
      }
      Te(e, w, j, d);
    }
  }
  c && Ee(() => {
    var U;
    if (I !== void 0)
      for (n of I)
        (U = n.a) == null || U.apply();
  }), B.first = e.first && e.first.e, B.last = r && r.e;
}
function Ie(l, e, a, u) {
  (u & L) !== 0 && P(l.v, e), (u & k) !== 0 ? P(
    /** @type {Value<number>} */
    l.i,
    a
  ) : l.i = a;
}
function J(l, e, a, u, v, _, t, c, T, h) {
  var d = (T & L) !== 0, N = (T & de) === 0, f = d ? N ? fe(v) : Q(v) : v, s = (T & k) === 0 ? t : Q(t), r = {
    i: s,
    v: f,
    k: _,
    a: null,
    // @ts-expect-error
    e: null,
    prev: a,
    next: u
  };
  try {
    return r.e = z(() => c(l, f, s, h), C), r.e.prev = a && a.e, r.e.next = u && u.e, a === null ? e.first = r : (a.next = r, a.e.next = r.e), u !== null && (u.prev = r, u.e.prev = r.e), r;
  } finally {
  }
}
function Z(l, e, a) {
  for (var u = l.next ? (
    /** @type {TemplateNode} */
    l.next.e.nodes_start
  ) : a, v = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : a, _ = (
    /** @type {TemplateNode} */
    l.e.nodes_start
  ); _ !== u; ) {
    var t = (
      /** @type {TemplateNode} */
      ve(_)
    );
    v.before(_), _ = t;
  }
}
function m(l, e, a) {
  e === null ? l.first = a : (e.next = a, e.e.next = a && a.e), a !== null && (a.prev = e, a.e.prev = e && e.e);
}
export {
  Ce as e,
  me as i
};
