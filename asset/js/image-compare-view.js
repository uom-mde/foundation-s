import { h as te, a6 as _e, M as me, af as de, P as he, Q as ve, aa as pe, c as ye, p as xe, b as G, o as we, ag as Ee, ah as Y, ai as be, e as Te, t as V, f as q, aj as Le, g as X, j as Ae, k, ak as Re, al as Z, v, n as N, F as oe, q as $, am as re, w as J, s as O, an as ne, ao as H, x as K, y as Q, A as ae, C as ie, N as Ce, ap as Fe } from "./shared-index-3Nm0QgDz.js";
function Ue(c, s, f) {
  te && _e();
  var u = c, y, e;
  me(() => {
    y !== (y = s()) && (e && (ve(e), e = null), y && (e = he(() => f(u, y))));
  }, de), te && (u = pe);
}
const Ie = (c) => c instanceof HTMLImageElement ? [c.naturalWidth, c.naturalHeight] : c instanceof HTMLVideoElement ? [c.videoWidth, c.videoHeight] : c instanceof SVGImageElement ? [c.width.baseVal.value, c.height.baseVal.value] : [c.width, c.height], Se = (c, s = "geometric") => {
  if (s !== "geometric" && s !== "photometric")
    throw new Error(`Unsupported mode - ${s} (Supported: geometric, photometric)`);
  const f = c.getContext("2d", { willReadFrequently: !0 });
  if (f === null)
    throw new Error("Could not get context for rendering to output");
  const u = document.createElement("canvas");
  u.addEventListener(
    "webglcontextlost",
    (i) => {
      i.preventDefault(), console.log("WebGL context lost!");
    },
    !1
  ), u.addEventListener(
    "webglcontextrestored",
    () => {
      S = F();
    },
    !1
  );
  const y = u.getContext("webgl2") || u.getContext("webgl");
  if (y === null)
    throw new Error("WebGL unsupported!");
  const e = y;
  function d(i, r) {
    const o = e.createShader(r);
    if (e.shaderSource(o, i), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
      const l = new Error("could not compile shader:" + e.getShaderInfoLog(o));
      throw e.deleteShader(o), l;
    }
    return o;
  }
  function p(i, r) {
    const o = e.createProgram();
    if (e.attachShader(o, i), e.attachShader(o, r), e.linkProgram(o), !e.getProgramParameter(o, e.LINK_STATUS))
      throw "program failed to link:" + e.getProgramInfoLog(o);
    return o;
  }
  const T = `
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
    `, R = `
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
    `, B = `
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
    `, U = `
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
  function z() {
    const i = d(T, e.VERTEX_SHADER), r = d(B, e.FRAGMENT_SHADER), o = p(i, r);
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
  function L() {
    const i = d(T, e.VERTEX_SHADER), r = d(U, e.FRAGMENT_SHADER), o = p(i, r);
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
    const i = d(T, e.VERTEX_SHADER), r = d(R, e.FRAGMENT_SHADER), o = p(i, r);
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
  function n(i) {
    const {
      attributeLocations: { positionAttributeLocation: r, texCoordAttributeLocation: o }
    } = i, h = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, h), e.bufferData(
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
    let l = 2, E = e.FLOAT, w = !1, b = 0, C = 0;
    e.enableVertexAttribArray(r), e.vertexAttribPointer(r, l, E, w, b, C);
    const M = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, M), e.bufferData(
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
    ), l = 2, E = e.FLOAT, w = !1, b = 0, C = 0, e.enableVertexAttribArray(o), e.vertexAttribPointer(o, l, E, w, b, C);
  }
  function a(i) {
    const r = e.createTexture(), o = 0, h = e.RGBA, l = e.RGBA, E = e.UNSIGNED_BYTE;
    return e.bindTexture(e.TEXTURE_2D, r), e.texImage2D(e.TEXTURE_2D, o, h, l, E, i), e.generateMipmap(e.TEXTURE_2D), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), r;
  }
  function _(i, r) {
    return r.length === 9;
  }
  function g(i, r, o, h) {
    const {
      uniformLocations: { sourcemeanstddevLocation: l, targetmeanstddevLocation: E }
    } = i;
    e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), e.activeTexture(e.TEXTURE0 + 0), e.bindTexture(e.TEXTURE_2D, r), e.uniform2fv(l, new Float32Array(o)), e.uniform2fv(E, new Float32Array(h));
    const w = e.TRIANGLES;
    e.drawArrays(w, 0, 6), e.finish();
  }
  function x(i, r, o, h, l, E) {
    const {
      uniformLocations: { resolutionLocation: w, targetresolutionLocation: b }
    } = i;
    if (E && (e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT)), e.activeTexture(e.TEXTURE0 + 0), e.bindTexture(e.TEXTURE_2D, r), e.uniform2f(w, o, h), e.uniform2f(b, e.canvas.width, e.canvas.height), _(i, l))
      e.uniformMatrix3fv(i.uniformLocations.umatrixLocation, !1, new Float32Array(l));
    else {
      const D = new Float32Array(1024);
      D.fill(0), D.set(l);
      const P = l.length / 4 - 3;
      e.uniform1i(i.uniformLocations.ncpLocation, P), e.uniform1i(i.uniformLocations.ncp1Location, P + 1), e.uniform1i(i.uniformLocations.ncp2Location, P + 2), e.uniform4fv(i.uniformLocations.WLocation, D);
    }
    const C = e.TRIANGLES;
    e.drawArrays(C, 0, 6);
  }
  const A = () => {
    const i = t();
    return n(i), e.useProgram(i.program), e.enable(e.DEPTH_TEST), (o, h, l) => {
      e.viewport(0, 0, e.canvas.width, e.canvas.height);
      const E = a(o);
      return g(i, E, h, l);
    };
  }, m = () => {
    const i = z(), r = L();
    return n(i), n(r), e.enable(e.DEPTH_TEST), (h, l = null, E = !1) => {
      e.viewport(0, 0, e.canvas.width, e.canvas.height), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT);
      const [w, b] = Ie(h), C = a(h), M = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      if (l === null)
        return e.useProgram(i.program), x(i, C, w, b, M, E);
      if (l.length === 9) {
        e.useProgram(i.program);
        const W = new Float32Array([l[0], l[3], l[6], l[1], l[4], l[7], l[2], l[5], l[8]]);
        return x(i, C, w, b, W, E);
      }
      return e.useProgram(r.program), x(r, C, w, b, new Float32Array(l), E);
    };
  }, I = () => s === "photometric" ? A() : m(), F = () => {
    const i = I();
    return (r, o, h) => {
      u.width = f.canvas.width, u.height = f.canvas.height, i(r, o, h), f.drawImage(u, 0, 0);
    };
  };
  let S = F();
  return {
    render: S
  };
}, ee = /* @__PURE__ */ (() => {
  const c = (t) => (console.debug("creating image", t), new Promise() < HTMLImageElement > ((n, a) => {
    const _ = new Image();
    _.onload = () => {
      n(_);
    }, _.onerror = (g) => {
      console.error(g), a(g);
    }, _.src = t;
  })), s = (t) => t instanceof HTMLImageElement ? [t.naturalWidth, t.naturalHeight] : t instanceof HTMLVideoElement ? [t.videoWidth, t.videoHeight] : t instanceof SVGImageElement ? [t.width.baseVal.value, t.height.baseVal.value] : [t.width, t.height], f = ([t, n], a) => {
    if (t <= a && n <= a)
      return [t, n];
    const _ = t > n ? t : n, g = t / _ * a, x = n / _ * a;
    return [g, x];
  }, u = (t, n, a, _ = null) => {
    const g = n.canvas;
    n.clearRect(0, 0, g.width, g.height);
    const [x, A] = s(t);
    let m = a;
    if (m === null)
      m = {
        x: 0,
        y: 0,
        width: x,
        height: A
      };
    else {
      const [I, F, S, i] = a;
      m = {
        x: Math.round(I * x),
        y: Math.round(F * A),
        width: Math.round(S * x),
        height: Math.round(i * A)
      };
    }
    if (_ === null)
      g.width = m.width, g.height = m.height;
    else {
      const [I, F] = _;
      g.width = Math.round(I), g.height = Math.round(F);
    }
    return n.drawImage(t, m.x, m.y, m.width, m.height, 0, 0, g.width, g.height), n;
  }, y = (t, n, a = null, _ = null) => (u(t, n, a, _), n.getImageData(0, 0, n.canvas.width, n.canvas.height)), e = (t, n) => {
    const [a, _] = n, g = [
      t[0] * a + t[1] * _ + t[2],
      t[3] * a + t[4] * _ + t[5],
      t[6] * a + t[7] * _ + t[8]
    ], x = g[0] / g[2], A = g[1] / g[2];
    return [x, A];
  }, d = (t) => [
    [t.x, t.y],
    [t.x + t.width, t.y],
    [t.x + t.width, t.y + t.height],
    [t.x, t.y + t.height]
  ], p = (t) => {
    const [n, a, _, g] = t.reduce(
      ([x, A, m, I], [F, S]) => (x > F && (x = F), A > S && (A = S), m < F && (m = F), I < S && (I = S), [x, A, m, I]),
      [1 / 0, 1 / 0, -1 / 0, -1 / 0]
    );
    return {
      x: n,
      y: a,
      width: _ - n,
      height: g - a
    };
  };
  return {
    create_image_from_url: c,
    get_intrinsic_dimensions: s,
    get_resize_dimensions: f,
    crop_and_resize_image: u,
    get_imagedata: y,
    mat_vec_multiply: e,
    get_bbox_from_corners: p,
    get_corners_for_bbox: d,
    pad_bbox: (t, n) => {
      let a = n;
      return a > 1 && (a = a / 100), t.width *= 1 + a, t.height *= 1 + a, t.x -= a / 2 * t.width, t.y -= a / 2 * t.height, t;
    },
    invert_bbox: (t, n) => {
      const a = d(t);
      let _ = n;
      if (n.length !== 9) {
        const m = 4 * (n.length / 4 - 3);
        _ = new Float32Array([
          n[m + 4],
          n[m + 8],
          n[m],
          n[m + 5],
          n[m + 9],
          n[m + 1],
          0,
          0,
          1
        ]);
      }
      const g = a.map((A) => e(_, A));
      return p(g);
    },
    clamp_bbox_to_image_dims: (t, [n, a]) => (t.x = t.x < 0 ? 0 : t.x, t.y = t.y < 0 ? 0 : t.y, t.width = t.x + t.width > n ? n - t.x : t.width, t.height = t.y + t.height > a ? a - t.y : t.height, t),
    create_copy_canvas: (t) => {
      const n = document.createElement("canvas"), [a, _] = s(t);
      return n.width = a, n.height = _, n.getContext("2d", { willReadFrequently: !0 }).drawImage(t, 0, 0), n;
    },
    canvas_to_blob_url: (t) => {
      const n = t;
      return new Promise((a, _) => {
        n.toBlob((g) => g ? a(g) : _());
      });
    },
    base64_to_float64array: async (t) => {
      const n = await fetch(t);
      return new Float64Array(await n.arrayBuffer());
    }
  };
})(), De = async (c, s, f) => {
  const { fixed_crop: u, moving_crop: y, transform: e } = f, d = await ee.base64_to_float64array(e), p = document.createElement("canvas"), T = p.getContext("2d", { willReadFrequently: !0 });
  ee.crop_and_resize_image(c, T, u);
  const R = document.createElement("canvas"), B = R.getContext("2d", { willReadFrequently: !0 });
  ee.crop_and_resize_image(s, B, y);
  const U = document.createElement("canvas");
  U.width = p.width, U.height = p.height;
  const { render: z } = Se(U, "geometric");
  return z(R, d), [p, U];
};
function se(c, s) {
  if (typeof s != "string" || /^(data:|blob:)/i.test(s)) return s;
  try {
    return new URL(s, c).href;
  } catch {
    return s;
  }
}
function ce(c) {
  return new Promise((s, f) => {
    const u = new Image();
    u.crossOrigin = "anonymous", u.onload = () => s(u), u.onerror = f, u.src = c;
  });
}
async function Pe(c) {
  try {
    const s = await fetch(c);
    if (!s.ok)
      throw new Error(`Failed to load JSON: ${s.status} ${s.statusText}`);
    const f = await s.json(), u = new URL(c, document.baseURI);
    return Array.isArray(f.images) ? f.images = f.images.map((y) => se(u, y)) : f.images && typeof f.images == "object" && (f.images = Object.fromEntries(
      Object.entries(f.images).map(([y, e]) => [y, se(u, e)])
    )), f;
  } catch (s) {
    throw new Error(`Error fetching transformation data: ${s.message}`);
  }
}
async function ze(c) {
  if (!c) return [];
  const s = document.createElement("canvas");
  if (s.getContext("2d", { willReadFrequently: !0 }), !s) return [];
  const f = c.registration && c.registration.length > 0 ? c.registration[0] : void 0;
  if (!f) return [];
  const u = await ce(c.images[f.fixed]), y = await ce(c.images[f.moving]);
  return (await De(u, y, f)).map((d) => d.toDataURL());
}
function Be(c) {
  return new Promise((s, f) => {
    const u = new Image();
    u.onload = () => {
      s({ width: u.naturalWidth, height: u.naturalHeight });
    }, u.onerror = f, u.src = c;
  });
}
var Xe = V("<p>Loading...</p>"), Me = V('<p style="color: red;"> </p>'), Ne = V('<p style="color: red;"> </p>'), Oe = V('<div class="container" role="presentation"><!></div>');
function We(c, s) {
  xe(s, !1);
  const [f, u] = Re(), y = () => re(U, "$loading", f), e = () => re(z, "$error", f);
  let d = G(s, "imagesData", 28, () => []), p = G(s, "configUrl", 12, null), T = G(s, "mode", 12, "slide"), R = G(s, "options", 28, () => ({}));
  const B = Z([]), U = Z(!1), z = Z(null);
  let L = N(), t = N(), n = N(), a = N(null), _ = N(null), g = N();
  async function x() {
    U.set(!0), z.set(null);
    try {
      let r;
      if (typeof d() == "string")
        try {
          d(JSON.parse(d()));
        } catch {
          throw new Error("Invalid JSON string for imagesData");
        }
      if (Array.isArray(d()) && d().length > 1)
        r = await Promise.all(d().map(A));
      else if (p()) {
        const l = await Pe(p());
        r = await ze(l);
      } else
        throw new Error("Neither valid imagesData nor configUrl provided");
      if (!r || r.length === 0)
        throw new Error("No images could be loaded");
      B.set(r);
      const { width: o, height: h } = await Be(r[0]);
      v(L) ? (oe(L, v(L).style.width = `${o}px`), oe(L, v(L).style.height = `${h}px`)) : console.warn("[image-compare-view] container not yet bound, skipping sizing");
    } catch (r) {
      z.set(r.message), console.error("Error loading images:", r);
    } finally {
      U.set(!1);
    }
  }
  function A(r) {
    return fetch(r).then((o) => o.blob()).then((o) => new Promise((h) => {
      const l = new FileReader();
      l.onloadend = () => h(l.result), l.readAsDataURL(o);
    }));
  }
  we(async () => {
    await Ee(), x();
  }), Y(
    () => (v(L), H(T()), v(_), ne),
    () => {
      v(L) && T() && T() !== v(_) && (O(_, T()), O(t, ne[T()]), v(L).dispatchEvent(new CustomEvent("mode-change", {
        detail: { mode: T() },
        bubbles: !0,
        composed: !0
      })));
    }
  ), Y(
    () => (v(L), H(R()), v(g)),
    () => {
      if (v(L)) {
        const r = JSON.stringify(R());
        v(g) !== r && (O(g, r), v(L).dispatchEvent(new CustomEvent("options-change", {
          detail: R(),
          bubbles: !0,
          composed: !0
        })));
      }
    }
  ), Y(
    () => (H(p()), v(a), v(n)),
    () => {
      p() && p() !== v(a) && typeof window < "u" && (clearTimeout(v(n)), O(n, setTimeout(
        () => {
          O(a, p()), x();
        },
        200
      )));
    }
  ), be(), Te();
  var m = Oe(), I = $(m);
  {
    var F = (r) => {
      var o = Xe();
      X(r, o);
    }, S = (r) => {
      var o = K(), h = Q(o);
      {
        var l = (w) => {
          var b = Me(), C = $(b);
          J(b), ae(() => ie(C, `Error: ${e() ?? ""}`)), X(w, b);
        }, E = (w) => {
          var b = K(), C = Q(b);
          {
            var M = (D) => {
              var P = K(), j = Q(P);
              const le = Ce(() => Fe(B));
              Ue(j, () => v(t), (ue, ge) => {
                ge(ue, {
                  get options() {
                    return R();
                  },
                  get images() {
                    return v(le);
                  },
                  $$events: {
                    "options-change": (fe) => R({ ...R(), ...fe.detail })
                  }
                });
              }), X(D, P);
            }, W = (D) => {
              var P = Ne(), j = $(P);
              J(P), ae(() => ie(j, `Unknown mode: ${T() ?? ""}`)), X(D, P);
            };
            q(
              C,
              (D) => {
                v(t) ? D(M) : D(W, !1);
              },
              !0
            );
          }
          X(w, b);
        };
        q(
          h,
          (w) => {
            e() ? w(l) : w(E, !1);
          },
          !0
        );
      }
      X(r, o);
    };
    q(I, (r) => {
      y() ? r(F) : r(S, !1);
    });
  }
  J(m), Le(m, (r) => O(L, r), () => v(L)), X(c, m);
  var i = Ae({
    get imagesData() {
      return d();
    },
    set imagesData(r) {
      d(r), k();
    },
    get configUrl() {
      return p();
    },
    set configUrl(r) {
      p(r), k();
    },
    get mode() {
      return T();
    },
    set mode(r) {
      T(r), k();
    },
    get options() {
      return R();
    },
    set options(r) {
      R(r), k();
    }
  });
  return u(), i;
}
customElements.define("image-compare-view", ye(
  We,
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
  We as default
};
