import { i as le, l as re, h as ie, u as ve, r as ce, c as de, p as me, a as pe, b as K, o as ue, s as k, d as ye, m as fe, e as ge, t as j, f as A, g as f, j as _e, k as P, n as Q, q as g, v as o, w as _, x as R, y as T, z as U, A as M, B as x, C as W, D as B, E as F, F as X, G as xe } from "./shared-index-3Nm0QgDz.js";
import { e as he, i as be } from "./shared-each-DPi8tjq8.js";
function Y(e, l, d = l) {
  var h = le();
  re(e, "input", (t) => {
    var r = t ? e.defaultValue : e.value;
    if (r = I(e) ? q(r) : r, d(r), h && r !== (r = l())) {
      var s = e.selectionStart, m = e.selectionEnd;
      e.value = r ?? "", m !== null && (e.selectionStart = s, e.selectionEnd = Math.min(m, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  (ie && e.defaultValue !== e.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ve(l) == null && e.value) && d(I(e) ? q(e.value) : e.value), ce(() => {
    var t = l();
    I(e) && t === q(e.value) || e.type === "date" && !t && !e.value || t !== e.value && (e.value = t ?? "");
  });
}
function I(e) {
  var l = e.type;
  return l === "number" || l === "range";
}
function q(e) {
  return e === "" ? null : +e;
}
var we = j('<div class="option-control svelte-1x20y7y"><input type="range" class="svelte-1x20y7y"> <span class="option-value svelte-1x20y7y"> </span></div>'), Ee = j('<div class="option-control svelte-1x20y7y"><input type="checkbox"></div>'), Oe = j('<div class="option-control svelte-1x20y7y"><input type="text" class="svelte-1x20y7y"></div>'), ke = j('<div class="option-row svelte-1x20y7y"><label class="option-label svelte-1x20y7y"> </label> <!></div>'), je = j('<div class="image-compare-view-options svelte-1x20y7y"><!></div>');
const Ce = {
  hash: "svelte-1x20y7y",
  code: ".image-compare-view-options.svelte-1x20y7y {font-family:sans-serif;display:grid;gap:0.5em;}input[type='text'].svelte-1x20y7y {padding:0.25em;font-size:0.9em;}.option-row.svelte-1x20y7y {display:flex;align-items:center;justify-content:space-between;margin:0.25em 0;gap:1em;}.option-label.svelte-1x20y7y {font-size:0.85em;flex:1;white-space:nowrap;}.option-control.svelte-1x20y7y {flex:2;display:flex;align-items:center;gap:0.5em;}.option-control.svelte-1x20y7y input[type='range']:where(.svelte-1x20y7y) {flex:1;}.option-value.svelte-1x20y7y {min-width:2ch;font-size:0.85em;text-align:right;}"
};
function Le(e, l) {
  me(l, !1), pe(e, Ce);
  let d = K(l, "target", 12, null), h = K(l, "instance", 12, null), t, r = Q({}), s = Q({}), m;
  const G = (a) => {
    m = a.detail.mode, H(m);
  }, N = (a) => {
    k(s, { ...a.detail });
  };
  ue(async () => {
    if (d() && !h() ? (await customElements.whenDefined("image-compare-view"), t = document.getElementById(d())) : t = h(), !t) {
      console.warn("[OptionsEditor] No target found");
      return;
    }
    t.addEventListener("mode-change", G), t.addEventListener("options-change", N), m = t.mode ?? t.getAttribute("mode"), H(m), k(s, t.options ?? {});
  }), ye(() => {
    t.removeEventListener("mode-change", G), t.removeEventListener("options-change", N);
  });
  function H(a) {
    if (!a) return;
    const p = fe[a.toLowerCase()] ?? [];
    k(r, Object.fromEntries(p.map((u) => [u.option, u]))), k(s, {
      ...Object.fromEntries(p.map((u) => [u.option, u.default])),
      ...t.options
    });
  }
  function z(a, p) {
    k(s, { ...o(s), [a]: p }), t && (t.options = o(s));
  }
  ge();
  var D = je(), Z = g(D);
  {
    var $ = (a) => {
    }, ee = (a) => {
      var p = R(), u = T(p);
      he(u, 1, () => Object.entries(o(r)), be, (te, J) => {
        let n = () => o(J)[0], b = () => o(J)[1];
        var S = ke(), C = g(S), ae = g(C, !0);
        _(C);
        var se = U(C, 2);
        {
          var ne = (w) => {
            var E = we(), i = g(E);
            B(i);
            var L = U(i, 2), V = g(L, !0);
            _(L), _(E), M(() => {
              x(i, "id", n()), x(i, "min", b().min), x(i, "max", b().max), x(i, "step", b().step ?? 1), W(V, o(s)[n()]);
            }), Y(i, () => o(s)[n()], (v) => X(s, o(s)[n()] = v)), F("input", i, (v) => z(n(), +v.target.value)), f(w, E);
          }, oe = (w) => {
            var E = R(), i = T(E);
            {
              var L = (v) => {
                var y = Ee(), c = g(y);
                B(c), _(y), M(() => {
                  x(c, "id", n()), xe(c, o(s)[n()]);
                }), F("change", c, (O) => z(n(), O.target.checked)), f(v, y);
              }, V = (v) => {
                var y = Oe(), c = g(y);
                B(c), _(y), M(() => x(c, "id", n())), Y(c, () => o(s)[n()], (O) => X(s, o(s)[n()] = O)), F("input", c, (O) => z(n(), O.target.value)), f(v, y);
              };
              A(
                i,
                (v) => {
                  b().type === "boolean" ? v(L) : v(V, !1);
                },
                !0
              );
            }
            f(w, E);
          };
          A(se, (w) => {
            b().type === "number" ? w(ne) : w(oe, !1);
          });
        }
        _(S), M(() => {
          x(C, "for", n()), W(ae, b().label ?? n());
        }), f(te, S);
      }), f(a, p);
    };
    A(Z, (a) => {
      Object.keys(o(r)).length === 0 ? a($) : a(ee, !1);
    });
  }
  return _(D), f(e, D), _e({
    get target() {
      return d();
    },
    set target(a) {
      d(a), P();
    },
    get instance() {
      return h();
    },
    set instance(a) {
      h(a), P();
    }
  });
}
customElements.define("image-compare-view-options", de(Le, { target: {}, instance: {} }, [], [], !0));
export {
  Le as default
};
