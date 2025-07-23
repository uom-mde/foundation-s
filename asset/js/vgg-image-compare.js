import { h as $, a as ne, b as ae, E as ie, c as se, p as ce, d as le, e as ue, f as ge, g as W, o as _e, t as fe, l as me, i as de, j as he, k as G, m as V, n as ve, q as z, r as pe, s as O, u as xe, w as k, v as B, x as J, y as K, z as Y, A as Q, B as j, C as ee, D as ye, F as we, G as q, H as Z, I as te, J as oe, K as Ee, L as Te } from "./index-u4DEvT10.js";
function Le(s, l, h) {
  $ && ne();
  var g = s, b, e;
  ae(() => {
    b !== (b = l()) && (e && (ce(e), e = null), b && (e = se(() => h(g, b))));
  }, ie), $ && (g = le);
}
const be = (s) => s instanceof HTMLImageElement ? [s.naturalWidth, s.naturalHeight] : s instanceof HTMLVideoElement ? [s.videoWidth, s.videoHeight] : s instanceof SVGImageElement ? [s.width.baseVal.value, s.height.baseVal.value] : [s.width, s.height], Ae = (s, l = "geometric") => {
  if (l !== "geometric" && l !== "photometric")
    throw new Error(`Unsupported mode - ${l} (Supported: geometric, photometric)`);
  const h = s.getContext("2d", { willReadFrequently: !0 });
  if (h === null)
    throw new Error("Could not get context for rendering to output");
  const g = document.createElement("canvas");
  g.addEventListener(
    "webglcontextlost",
    (n) => {
      n.preventDefault(), console.log("WebGL context lost!");
    },
    !1
  ), g.addEventListener(
    "webglcontextrestored",
    () => {
      A = p();
    },
    !1
  );
  const b = g.getContext("webgl2") || g.getContext("webgl");
  if (b === null)
    throw new Error("WebGL unsupported!");
  const e = b;
  function v(n, f) {
    const o = e.createShader(f);
    if (e.shaderSource(o, n), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
      const c = new Error("could not compile shader:" + e.getShaderInfoLog(o));
      throw e.deleteShader(o), c;
    }
    return o;
  }
  function T(n, f) {
    const o = e.createProgram();
    if (e.attachShader(o, n), e.attachShader(o, f), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS))
      throw "program failed to link:" + e.getProgramInfoLog(o);
    return o;
  }
  const C = `
    // an attribute is an input to a vertex shader.
    // It will receive data from a buffer
    precision highp float;
    attribute vec2 a_position;
    attribute vec2 a_texCoord;

    // Output
    varying vec2 v_texCoord;

    // all shaders have a main function
    void main() {

        // Apply transform and switch to -1 -> +1 space

        // Flip the image vertically so that bottom is y positive
        // Flip y coordinates
        gl_Position = vec4(a_position * vec2(1, -1), 0, 1);

        // pass the texCoord to the fragment shader
        // The GPU will interpolate this value between points.
        v_texCoord = a_texCoord;
    }
    `, I = `
        // Fragment shader to do the photometric adjustment
        precision highp float;

        // texture
        uniform sampler2D u_image;

        // Mean and stddev
        uniform vec2 source_meanstddev;
        uniform vec2 target_meanstddev;

        // Note: Column major
        const mat3 rgb2xyz = mat3(0.412453,  0.212671, 0.019334,  0.357580, 0.715160,  0.119193,  0.180423, 0.072169, 0.950227);
        const mat3 xyz2rgb = mat3(3.240479, -0.969256, 0.055648, -1.537150, 1.875991, -0.204043, -0.498535, 0.041556, 1.057311);
        const vec3 zero3 = vec3(0.0, 0.0, 0.0);
        const vec3 one3 = vec3(1.0, 1.0, 1.0);

        const float Xn = 0.950456;
        const float Zn = 1.088754;
        const float T = 0.008856;
        const float T2 = 0.206893;
        const float C = 0.04045;
        const float C2 = 0.0031308;

        float srgb_to_linear(float c) {
            if (c > C) {
                return pow((c + 0.055) / 1.055, 2.4);
            }
            return c / 12.92;
        }

        float linear_to_srgb(float c) {
            if (c > C2) {
                return (pow(c, 1.0 / 2.4) * 1.055) - 0.055;
            }
            return c * 12.92;
        }

        vec3 srgb_to_linear(vec3 c) {
            return vec3(
                srgb_to_linear(c.r),
                srgb_to_linear(c.g),
                srgb_to_linear(c.b)
            );
        }

        vec3 linear_to_srgb(vec3 c) {
            return vec3(
                linear_to_srgb(c.r),
                linear_to_srgb(c.g),
                linear_to_srgb(c.b)
            );
        }


        float lab_f(float x) {
            if (x > T) {
                return pow(x, 1.0 / 3.0);
            }
            return 7.787*x + (16.0 / 116.0);
        }

        float lab_f_inv(float x) {
            if (x > T2) {
                return pow(x, 3.0);
            }
            return ((x - (16.0 / 116.0)) / 7.787);
        }

        vec3 lab_f(vec3 x) {
            return vec3(lab_f(x.x), lab_f(x.y), lab_f(x.z));
        }

        vec3 rgb2lab(vec3 rgb) {

            // Convert srgb to linear
            vec3 rgb_linear = srgb_to_linear(rgb);

            // Convert to XYZ
            vec3 xyz = rgb2xyz * rgb_linear;

            xyz.x /= Xn;
            xyz.z /= Zn;

            vec3 fxyz = lab_f(xyz);

            // convert to lab
            return vec3(
                xyz.y > T ? ((116.0 * pow(xyz.y, 1.0 / 3.0)) - 16.0) : 903.3 * xyz.y, // L
                500.0*(fxyz.x - fxyz.y), // a
                200.0*(fxyz.y - fxyz.z)  // b
            );
        }

        vec3 lab2rgb(vec3 lab) {
            float fy = pow(((lab.x + 16.0) / 116.0), 3.0);
            bool fy_greater_than_t = fy > T;
            if (!fy_greater_than_t) {
                fy = lab.x / 903.3;
            }
            float Y = fy;

            // Convert it to fy for other components
            fy = lab_f(fy);

            //compute X
            float fx = lab.y / 500.0 + fy;
            float X = lab_f_inv(fx);

            //compute z
            float fz = fy - (lab.z / 200.0);
            float Z = lab_f_inv(fz);

            X *= Xn;
            Z *= Zn;

            vec3 rgb_linear = xyz2rgb * vec3(X, Y, Z);

            vec3 srgb = linear_to_srgb(rgb_linear);

            return min(one3, max(zero3, srgb));
        }
        vec4 normalize_lab(vec4 color) {
            // Assuming rgb is in 0 - 1 range in texture

            // Convert color to lab
            vec3 lab = rgb2lab(color.rgb);

            // Apply mean correction
            lab.x = target_meanstddev.x + (target_meanstddev.y / source_meanstddev.y) * (lab.x - source_meanstddev.x);
            // lab.x = lab.x * (source_meanstddev.x > target_meanstddev.x ? 0.925 : 1.07);

            // convert color back to rgb
            vec3 rgb = lab2rgb(lab);
            return vec4(rgb, color.a);
        }

        // the texCoords passed in from the vertex shader.
        varying vec2 v_texCoord;

        void main() {
            vec4 color = texture2D(u_image, v_texCoord);
            if (color.a < 0.01) {
                // Ignore alpha close to zero
                gl_FragColor = color;
                return;
            }
            gl_FragColor = normalize_lab(color);
        }
    `, P = `
    // fragment shaders don't have a default precision so we need
    // to pick one. highp means "high precision"
    precision highp float;

    // our texture
    uniform sampler2D u_image;

    // Used to pass in the resolution of the canvas
    uniform vec2 u_resolution;
    uniform vec2 v_resolution;
    uniform mat3 u_matrix;

    const vec2 zero2 = vec2(0.0, 0.0);
    const vec2 one2 = vec2(1.0, 1.0);

    vec2 get_xy(vec2 txy) {
        // Convert to u_resolution and apply matrix transform
        vec3 v_position = vec3(txy * v_resolution, 1);
        vec3 proj_position = u_matrix * v_position;
        vec2 n_position = (proj_position.xy / proj_position.z);
        return (n_position / u_resolution);
    }
    // the texCoords passed in from the vertex shader.
    varying vec2 v_texCoord;

    void main() {
        vec2 rxy = get_xy(v_texCoord);
        if (rxy.x < -0.0 || rxy.y < -0.0 || rxy.x > 1.0 || rxy.y > 1.0) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            return;
        }
        vec4 color = texture2D(u_image, rxy);
        gl_FragColor = color;
    }
    `, F = `
    // fragment shaders don't have a default precision so we need
    // to pick one. highp means "high precision"
    precision highp float;

    // our texture
    uniform sampler2D u_image;

    // Used to pass in the resolution of the canvas
    #define MAX_POINTS 256
    uniform vec4 WH[MAX_POINTS];
    uniform int n_cp;
    uniform int n_cp1;
    uniform int n_cp2;
    uniform vec2 u_resolution;
    uniform vec2 v_resolution;

    vec2 get_xy(vec2 txy) {

        vec2 ctxy = txy * v_resolution + vec2(0.5, 0.5);
        vec2 xy_non_linear = vec2(0, 0);

        for (int i = 0; i < int(MAX_POINTS); ++i) {
            if (i == n_cp + 3) {
                break;
            } else if (i == n_cp + 2) {
                xy_non_linear += WH[i].xy*ctxy.y;
                continue;
            } else if (i == n_cp + 1) {
                xy_non_linear += WH[i].xy*ctxy.x;
                continue;
            } else if (i == n_cp) {
                xy_non_linear += WH[i].xy;
                continue;
            }
            vec2 W = WH[i].xy;
            vec2 H = WH[i].zw;
            float r = distance(H, ctxy);
            float r2 = r * r;

            xy_non_linear += W * r2 * log(r);
        }

        return xy_non_linear / u_resolution;
    }
    // the texCoords passed in from the vertex shader.
    varying vec2 v_texCoord;

    void main() {
        vec2 rxy = get_xy(v_texCoord);
        if (rxy.x < -0.01 || rxy.y < -0.01 || rxy.x > 1.01 || rxy.y > 1.01) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            return;
        }
        vec4 color = texture2D(u_image, rxy);
        gl_FragColor = color;
    }
    `;
  function S() {
    const n = v(C, e.VERTEX_SHADER), f = v(P, e.FRAGMENT_SHADER), o = T(n, f);
    return {
      program: o,
      attributeLocations: {
        positionAttributeLocation: e.getAttribLocation(o, "a_position"),
        texCoordAttributeLocation: e.getAttribLocation(o, "a_texCoord")
      },
      uniformLocations: {
        // lookup uniforms
        resolutionLocation: e.getUniformLocation(o, "u_resolution"),
        targetresolutionLocation: e.getUniformLocation(o, "v_resolution"),
        imageLocation: e.getUniformLocation(o, "u_image"),
        umatrixLocation: e.getUniformLocation(o, "u_matrix")
      }
    };
  }
  function U() {
    const n = v(C, e.VERTEX_SHADER), f = v(F, e.FRAGMENT_SHADER), o = T(n, f);
    return {
      program: o,
      attributeLocations: {
        positionAttributeLocation: e.getAttribLocation(o, "a_position"),
        texCoordAttributeLocation: e.getAttribLocation(o, "a_texCoord")
      },
      uniformLocations: {
        // lookup uniforms
        resolutionLocation: e.getUniformLocation(o, "u_resolution"),
        targetresolutionLocation: e.getUniformLocation(o, "v_resolution"),
        imageLocation: e.getUniformLocation(o, "u_image"),
        WLocation: e.getUniformLocation(o, "WH"),
        ncpLocation: e.getUniformLocation(o, "n_cp"),
        ncp1Location: e.getUniformLocation(o, "n_cp1"),
        ncp2Location: e.getUniformLocation(o, "n_cp2")
      }
    };
  }
  function t() {
    const n = v(C, e.VERTEX_SHADER), f = v(I, e.FRAGMENT_SHADER), o = T(n, f);
    return {
      program: o,
      attributeLocations: {
        positionAttributeLocation: e.getAttribLocation(o, "a_position"),
        texCoordAttributeLocation: e.getAttribLocation(o, "a_texCoord")
      },
      uniformLocations: {
        // lookup uniforms
        sourcemeanstddevLocation: e.getUniformLocation(o, "source_meanstddev"),
        targetmeanstddevLocation: e.getUniformLocation(o, "target_meanstddev"),
        imageLocation: e.getUniformLocation(o, "u_image")
      }
    };
  }
  function r(n) {
    const {
      attributeLocations: { positionAttributeLocation: f, texCoordAttributeLocation: o }
    } = n, d = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, d), e.bufferData(
      e.ARRAY_BUFFER,
      // prettier-ignore
      new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]),
      e.STATIC_DRAW
    );
    let c = 2, y = e.FLOAT, R = !1, w = 0, E = 0;
    e.enableVertexAttribArray(f), e.vertexAttribPointer(f, c, y, R, w, E);
    const D = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, D), e.bufferData(
      e.ARRAY_BUFFER,
      // prettier-ignore
      new Float32Array([
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1
      ]),
      e.STATIC_DRAW
    ), c = 2, y = e.FLOAT, R = !1, w = 0, E = 0, e.enableVertexAttribArray(o), e.vertexAttribPointer(o, c, y, R, w, E);
  }
  function a(n) {
    const f = e.createTexture(), o = 0, d = e.RGBA, c = e.RGBA, y = e.UNSIGNED_BYTE;
    return e.bindTexture(e.TEXTURE_2D, f), e.texImage2D(e.TEXTURE_2D, o, d, c, y, n), e.generateMipmap(e.TEXTURE_2D), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), f;
  }
  function u(n, f) {
    return f.length === 9;
  }
  function _(n, f, o, d) {
    const {
      uniformLocations: { sourcemeanstddevLocation: c, targetmeanstddevLocation: y }
    } = n;
    e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE0 + 0), e.bindTexture(e.TEXTURE_2D, f), e.uniform2fv(c, new Float32Array(o)), e.uniform2fv(y, new Float32Array(d));
    const R = e.TRIANGLES;
    e.drawArrays(R, 0, 6), e.finish();
  }
  function x(n, f, o, d, c, y) {
    const {
      uniformLocations: { resolutionLocation: R, targetresolutionLocation: w }
    } = n;
    if (y && (e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)), e.activeTexture(e.TEXTURE0 + 0), e.bindTexture(e.TEXTURE_2D, f), e.uniform2f(R, o, d), e.uniform2f(w, e.canvas.width, e.canvas.height), u(n, c))
      e.uniformMatrix3fv(n.uniformLocations.umatrixLocation, !1, new Float32Array(c));
    else {
      const X = new Float32Array(1024);
      X.fill(0), X.set(c);
      const M = c.length / 4 - 3;
      e.uniform1i(n.uniformLocations.ncpLocation, M), e.uniform1i(n.uniformLocations.ncp1Location, M + 1), e.uniform1i(n.uniformLocations.ncp2Location, M + 2), e.uniform4fv(n.uniformLocations.WLocation, X);
    }
    const E = e.TRIANGLES;
    e.drawArrays(E, 0, 6);
  }
  const L = () => {
    const n = t();
    return r(n), e.useProgram(n.program), e.enable(e.DEPTH_TEST), (o, d, c) => {
      e.viewport(0, 0, e.canvas.width, e.canvas.height);
      const y = a(o);
      return _(n, y, d, c);
    };
  }, m = () => {
    const n = S(), f = U();
    return r(n), r(f), e.enable(e.DEPTH_TEST), (d, c = null, y = !1) => {
      e.viewport(0, 0, e.canvas.width, e.canvas.height), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
      const [R, w] = be(d), E = a(d), D = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      if (c === null)
        return e.useProgram(n.program), x(n, E, R, w, D, y);
      if (c.length === 9) {
        e.useProgram(n.program);
        const N = new Float32Array([c[0], c[3], c[6], c[1], c[4], c[7], c[2], c[5], c[8]]);
        return x(n, E, R, w, N, y);
      }
      return e.useProgram(f.program), x(f, E, R, w, new Float32Array(c), y);
    };
  }, i = () => l === "photometric" ? L() : m(), p = () => {
    const n = i();
    return (f, o, d) => {
      g.width = h.canvas.width, g.height = h.canvas.height, n(f, o, d), h.drawImage(g, 0, 0);
    };
  };
  let A = p();
  return {
    render: A
  };
}, H = /* @__PURE__ */ (() => {
  const s = (t) => (console.debug("creating image", t), new Promise() < HTMLImageElement > ((r, a) => {
    const u = new Image();
    u.onload = () => {
      r(u);
    }, u.onerror = (_) => {
      console.error(_), a(_);
    }, u.src = t;
  })), l = (t) => t instanceof HTMLImageElement ? [t.naturalWidth, t.naturalHeight] : t instanceof HTMLVideoElement ? [t.videoWidth, t.videoHeight] : t instanceof SVGImageElement ? [t.width.baseVal.value, t.height.baseVal.value] : [t.width, t.height], h = ([t, r], a) => {
    if (t <= a && r <= a)
      return [t, r];
    const u = t > r ? t : r, _ = t / u * a, x = r / u * a;
    return [_, x];
  }, g = (t, r, a, u = null) => {
    const _ = r.canvas;
    r.clearRect(0, 0, _.width, _.height);
    const [x, L] = l(t);
    let m = a;
    if (m === null)
      m = {
        x: 0,
        y: 0,
        width: x,
        height: L
      };
    else {
      const [i, p, A, n] = a;
      m = {
        x: Math.round(i * x),
        y: Math.round(p * L),
        width: Math.round(A * x),
        height: Math.round(n * L)
      };
    }
    if (u === null)
      _.width = m.width, _.height = m.height;
    else {
      const [i, p] = u;
      _.width = Math.round(i), _.height = Math.round(p);
    }
    return r.drawImage(t, m.x, m.y, m.width, m.height, 0, 0, _.width, _.height), r;
  }, b = (t, r, a = null, u = null) => (g(t, r, a, u), r.getImageData(0, 0, r.canvas.width, r.canvas.height)), e = (t, r) => {
    const [a, u] = r, _ = [
      t[0] * a + t[1] * u + t[2],
      t[3] * a + t[4] * u + t[5],
      t[6] * a + t[7] * u + t[8]
    ], x = _[0] / _[2], L = _[1] / _[2];
    return [x, L];
  }, v = (t) => [
    [t.x, t.y],
    [t.x + t.width, t.y],
    [t.x + t.width, t.y + t.height],
    [t.x, t.y + t.height]
  ], T = (t) => {
    const [r, a, u, _] = t.reduce(
      ([x, L, m, i], [p, A]) => (x > p && (x = p), L > A && (L = A), m < p && (m = p), i < A && (i = A), [x, L, m, i]),
      [1 / 0, 1 / 0, -1 / 0, -1 / 0]
    );
    return {
      x: r,
      y: a,
      width: u - r,
      height: _ - a
    };
  };
  return {
    create_image_from_url: s,
    get_intrinsic_dimensions: l,
    get_resize_dimensions: h,
    crop_and_resize_image: g,
    get_imagedata: b,
    mat_vec_multiply: e,
    get_bbox_from_corners: T,
    get_corners_for_bbox: v,
    pad_bbox: (t, r) => {
      let a = r;
      return a > 1 && (a = a / 100), t.width *= 1 + a, t.height *= 1 + a, t.x -= a / 2 * t.width, t.y -= a / 2 * t.height, t;
    },
    invert_bbox: (t, r) => {
      const a = v(t);
      let u = r;
      if (r.length !== 9) {
        const m = 4 * (r.length / 4 - 3);
        u = new Float32Array([
          r[m + 4],
          r[m + 8],
          r[m],
          r[m + 5],
          r[m + 9],
          r[m + 1],
          0,
          0,
          1
        ]);
      }
      const _ = a.map((L) => e(u, L));
      return T(_);
    },
    clamp_bbox_to_image_dims: (t, [r, a]) => (t.x = t.x < 0 ? 0 : t.x, t.y = t.y < 0 ? 0 : t.y, t.width = t.x + t.width > r ? r - t.x : t.width, t.height = t.y + t.height > a ? a - t.y : t.height, t),
    create_copy_canvas: (t) => {
      const r = document.createElement("canvas"), [a, u] = l(t);
      return r.width = a, r.height = u, r.getContext("2d", { willReadFrequently: !0 }).drawImage(t, 0, 0), r;
    },
    canvas_to_blob_url: (t) => {
      const r = t;
      return new Promise((a, u) => {
        r.toBlob((_) => _ ? a(_) : u());
      });
    },
    base64_to_float64array: async (t) => {
      const r = await fetch(t);
      return new Float64Array(await r.arrayBuffer());
    }
  };
})(), Re = async (s, l, h) => {
  const { fixed_crop: g, moving_crop: b, transform: e } = h, v = await H.base64_to_float64array(e), T = document.createElement("canvas"), C = T.getContext("2d", { willReadFrequently: !0 });
  H.crop_and_resize_image(s, C, g);
  const I = document.createElement("canvas"), P = I.getContext("2d", { willReadFrequently: !0 });
  H.crop_and_resize_image(l, P, b);
  const F = document.createElement("canvas");
  F.width = T.width, F.height = T.height;
  const { render: S } = Ae(F, "geometric");
  return S(I, v), [T, F];
};
function re(s) {
  return new Promise((l, h) => {
    const g = new Image();
    g.crossOrigin = "anonymous", g.onload = () => l(g), g.onerror = h, g.src = s;
  });
}
async function Ce(s) {
  try {
    const l = await fetch(s);
    if (!l.ok)
      throw new Error(`Failed to load JSON: ${l.status} ${l.statusText}`);
    return await l.json();
  } catch (l) {
    throw new Error(`Error fetching transformation data: ${l.message}`);
  }
}
async function Fe(s) {
  if (!s) return [];
  const l = document.createElement("canvas");
  if (l.getContext("2d", { willReadFrequently: !0 }), !l) return [];
  const h = s.registration.length > 0 ? s.registration[0] : void 0;
  if (!h) return [];
  const g = await re(s.images[h.fixed]), b = await re(s.images[h.moving]);
  return (await Re(g, b, h)).map((v) => v.toDataURL());
}
function Ue(s) {
  return new Promise((l, h) => {
    const g = new Image();
    g.onload = () => {
      l({ width: g.naturalWidth, height: g.naturalHeight });
    }, g.onerror = h, g.src = s;
  });
}
var Ie = G("<p>Loading...</p>"), Se = G('<p style="color: red;"> </p>'), De = G('<p style="color: red;"> </p>'), Pe = G('<div class="container" role="presentation"><!></div>');
function ze(s, l) {
  ge(l, !1);
  const [h, g] = xe(), b = () => Q(F, "$loading", h), e = () => Q(S, "$error", h);
  let v = W(l, "imagesData", 28, () => []), T = W(l, "configUrl", 12, null), C = W(l, "mode", 12, "slide"), I = W(l, "options", 28, () => ({}));
  const P = k([]), F = k(!1), S = k(null);
  let U = J(), t = J();
  async function r() {
    F.set(!0), S.set(null);
    try {
      let i;
      if (typeof v() == "string")
        try {
          v(JSON.parse(v()));
        } catch {
          throw new Error("Invalid JSON string for imagesData");
        }
      if (Array.isArray(v()) && v().length > 1)
        i = await Promise.all(v().map(a));
      else if (T()) {
        const n = await Ce(T());
        i = await Fe(n);
      } else
        throw new Error("Neither valid imagesData nor configUrl provided");
      if (!Array.isArray(i) || i.length === 0)
        throw new Error("No images could be loaded");
      P.set(i);
      const { width: p, height: A } = await Ue(i[0]);
      B(U) && (K(U, B(U).style.width = `${p}px`), K(U, B(U).style.height = `${A}px`));
    } catch (i) {
      S.set(i.message), console.error("Error loading images:", i);
    } finally {
      F.set(!1);
    }
  }
  function a(i) {
    return fetch(i).then((p) => p.blob()).then((p) => new Promise((A) => {
      const n = new FileReader();
      n.onloadend = () => A(n.result), n.readAsDataURL(p);
    }));
  }
  _e(async () => {
    await fe(), r();
  }), me(() => we(C()), () => {
    ee(t, ye[C()]);
  }), de(), he();
  var u = Pe(), _ = Y(u);
  {
    var x = (i) => {
      var p = Ie();
      z(i, p);
    }, L = (i) => {
      var p = q(), A = Z(p);
      {
        var n = (o) => {
          var d = Se(), c = Y(d);
          j(d), te(() => oe(c, `Error: ${e() ?? ""}`)), z(o, d);
        }, f = (o) => {
          var d = q(), c = Z(d);
          {
            var y = (w) => {
              var E = q(), D = Z(E);
              const N = Ee(() => Te(P));
              Le(D, () => B(t), (X, M) => {
                M(X, {
                  get options() {
                    return I();
                  },
                  get images() {
                    return B(N);
                  }
                });
              }), z(w, E);
            }, R = (w) => {
              var E = De(), D = Y(E);
              j(E), te(() => oe(D, `Unknown mode: ${C() ?? ""}`)), z(w, E);
            };
            V(
              c,
              (w) => {
                B(t) ? w(y) : w(R, !1);
              },
              !0
            );
          }
          z(o, d);
        };
        V(
          A,
          (o) => {
            e() ? o(n) : o(f, !1);
          },
          !0
        );
      }
      z(i, p);
    };
    V(_, (i) => {
      b() ? i(x) : i(L, !1);
    });
  }
  j(u), ve(u, (i) => ee(U, i), () => B(U)), z(s, u);
  var m = pe({
    get imagesData() {
      return v();
    },
    set imagesData(i) {
      v(i), O();
    },
    get configUrl() {
      return T();
    },
    set configUrl(i) {
      T(i), O();
    },
    get mode() {
      return C();
    },
    set mode(i) {
      C(i), O();
    },
    get options() {
      return I();
    },
    set options(i) {
      I(i), O();
    }
  });
  return g(), m;
}
customElements.define("vgg-image-compare", ue(
  ze,
  {
    imagesData: {},
    configUrl: {},
    mode: {},
    options: {}
  },
  [],
  [],
  !0
));
export {
  ze as default
};
