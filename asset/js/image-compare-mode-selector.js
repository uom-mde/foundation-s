import { l as x, H as y, I, c as k, p as w, b as m, o as A, s as f, e as C, t as M, A as g, v as s, n as E, E as F, g as p, j as O, k as b, J as j, w as h, K as B, q as H, C as J } from "./shared-index-3Nm0QgDz.js";
import { e as K, i as L } from "./shared-each-DPi8tjq8.js";
function S(e, n, a) {
  if (e.multiple)
    return D(e, n);
  for (var o of e.options) {
    var t = v(o);
    if (I(t, n)) {
      o.selected = !0;
      return;
    }
  }
  (!a || n !== void 0) && (e.selectedIndex = -1);
}
function N(e, n) {
  y(() => {
    var a = new MutationObserver(() => {
      var o = e.__value;
      S(e, o);
    });
    return a.observe(e, {
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
function z(e, n, a = n) {
  var o = !0;
  x(e, "change", (t) => {
    var r = t ? "[selected]" : ":checked", c;
    if (e.multiple)
      c = [].map.call(e.querySelectorAll(r), v);
    else {
      var l = e.querySelector(r) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      c = l && v(l);
    }
    a(c);
  }), y(() => {
    var t = n();
    if (S(e, t, o), o && t === void 0) {
      var r = e.querySelector(":checked");
      r !== null && (t = v(r), a(t));
    }
    e.__value = t, o = !1;
  }), N(e);
}
function D(e, n) {
  for (var a of e.options)
    a.selected = ~n.indexOf(v(a));
}
function v(e) {
  return "__value" in e ? e.__value : e.value;
}
var G = M("<option> </option>"), P = M("<select></select>");
function Q(e, n) {
  w(n, !1);
  let a = m(n, "target", 12, null), o = m(n, "instance", 12, null), t = E("slide"), r;
  A(() => {
    var i;
    if (r = o() || a() && document.getElementById(a()), !r) {
      console.warn("[ModeSelector] No valid target found.");
      return;
    }
    const u = r.mode ?? ((i = r.getAttribute) == null ? void 0 : i.call(r, "mode"));
    u && f(t, u);
  });
  function c(u) {
    if (f(t, u.target.value), r)
      try {
        r.mode = s(t);
      } catch (i) {
        console.error("[ModeSelector] Failed to set mode:", i);
      }
  }
  C();
  var l = P();
  return g(() => {
    s(t), B(() => {
    });
  }), K(l, 5, () => j, L, (u, i) => {
    var d = G(), _ = {}, q = H(d, !0);
    h(d), g(() => {
      _ !== (_ = s(i)) && (d.value = (d.__value = s(i)) == null ? "" : s(i)), J(q, s(i));
    }), p(u, d);
  }), h(l), z(l, () => s(t), (u) => f(t, u)), F("change", l, c), p(e, l), O({
    get target() {
      return a();
    },
    set target(u) {
      a(u), b();
    },
    get instance() {
      return o();
    },
    set instance(u) {
      o(u), b();
    }
  });
}
customElements.define("image-compare-mode-selector", k(Q, { target: {}, instance: {} }, [], [], !0));
export {
  Q as default
};
