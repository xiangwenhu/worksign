function getTrans() {
    var n = 52.35987755982988
        , a = 3.141592653589793
        , r = 6378245
        , i = .006693421622965943
        , o = {
            bd09togcj02: function (e, t) {
                var n = 52.35987755982988
                    , a = e - .0065
                    , r = t - .006
                    , i = Math.sqrt(a * a + r * r) - 2e-5 * Math.sin(r * n)
                    , o = Math.atan2(r, a) - 3e-6 * Math.cos(a * n)
                    , s = i * Math.cos(o)
                    , u = i * Math.sin(o);
                return [s, u]
            },
            gcj02tobd09: function (e, t) {
                var a = Math.sqrt(e * e + t * t) + 2e-5 * Math.sin(t * n)
                    , r = Math.atan2(t, e) + 3e-6 * Math.cos(e * n)
                    , i = a * Math.cos(r) + .0065
                    , o = a * Math.sin(r) + .006;
                return [i, o]
            },
            wgs84togcj02: function (e, t) {
                if (this.out_of_china(e, t))
                    return [e, t];
                var n = this.transformlat(e - 105, t - 35)
                    , o = this.transformlng(e - 105, t - 35)
                    , s = t / 180 * a
                    , u = Math.sin(s);
                u = 1 - i * u * u;
                var l = Math.sqrt(u);
                n = 180 * n / (r * (1 - i) / (u * l) * a),
                    o = 180 * o / (r / l * Math.cos(s) * a);
                var d = t + n
                    , c = e + o;
                return [c, d]
            },
            gcj02towgs84: function (e, t) {
                if (this.out_of_china(e, t))
                    return [e, t];
                var n = this.transformlat(e - 105, t - 35)
                    , o = this.transformlng(e - 105, t - 35)
                    , s = t / 180 * a
                    , u = Math.sin(s);
                u = 1 - i * u * u;
                var l = Math.sqrt(u);
                n = 180 * n / (r * (1 - i) / (u * l) * a),
                    o = 180 * o / (r / l * Math.cos(s) * a);
                var d = t + n
                    , c = e + o;
                return [2 * e - c, 2 * t - d]
            },
            transformlat: function (e, t) {
                var n = -100 + 2 * e + 3 * t + .2 * t * t + .1 * e * t + .2 * Math.sqrt(Math.abs(e));
                return n += 2 * (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) / 3,
                    n += 2 * (20 * Math.sin(t * a) + 40 * Math.sin(t / 3 * a)) / 3,
                    n += 2 * (160 * Math.sin(t / 12 * a) + 320 * Math.sin(t * a / 30)) / 3
            },
            transformlng: function (e, t) {
                var n = 300 + e + 2 * t + .1 * e * e + .1 * e * t + .1 * Math.sqrt(Math.abs(e));
                return n += 2 * (20 * Math.sin(6 * e * a) + 20 * Math.sin(2 * e * a)) / 3,
                    n += 2 * (20 * Math.sin(e * a) + 40 * Math.sin(e / 3 * a)) / 3,
                    n += 2 * (150 * Math.sin(e / 12 * a) + 300 * Math.sin(e / 30 * a)) / 3
            },
            out_of_china: function (e, t) {
                return e < 72.004 || e > 137.8347 || t < .8293 || t > 55.8271 || !1
            }
        };
    return o
}
