(this['webpackJsonptypescript-react-boilerplate'] =
  this['webpackJsonptypescript-react-boilerplate'] || []).push([
  [12],
  {
    105: function (e, t, n) {
      n.d(t, 'a', function () {
        return T;
      });
      var c = n(1),
        a = n(0),
        r = n(113),
        i = n(19),
        s = n(240),
        l = n(164),
        o = s.a.SubMenu,
        u = s.a.ItemGroup,
        d = l.a.useBreakpoint,
        j = function () {
          var e = d().md;
          return Object(c.jsxs)(s.a, {
            mode: e ? 'horizontal' : 'inline',
            children: [
              Object(c.jsx)(
                s.a.Item,
                {
                  children: Object(c.jsx)(i.c, {
                    className: 'navbar-item',
                    to: '/',
                    children: 'Home',
                  }),
                },
                'key-home',
              ),
              Object(c.jsxs)(
                o,
                {
                  title: 'Services',
                  children: [
                    Object(c.jsxs)(u, {
                      title: 'Features',
                      children: [
                        Object(c.jsx)(
                          s.a.Item,
                          {
                            children: Object(c.jsx)(i.c, {
                              to: '/feature1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:1',
                        ),
                        Object(c.jsx)(
                          s.a.Item,
                          {
                            children: Object(c.jsx)(i.c, {
                              to: '/feature2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:2',
                        ),
                      ],
                    }),
                    Object(c.jsxs)(u, {
                      title: 'Demo',
                      children: [
                        Object(c.jsx)(
                          s.a.Item,
                          {
                            children: Object(c.jsx)(i.c, {
                              to: '/demo1',
                              children: 'Option 1',
                            }),
                          },
                          'setting:3',
                        ),
                        Object(c.jsx)(
                          s.a.Item,
                          {
                            children: Object(c.jsx)(i.c, {
                              to: '/demo2',
                              children: 'Option 2',
                            }),
                          },
                          'setting:4',
                        ),
                      ],
                    }),
                  ],
                },
                'sub1',
              ),
              Object(c.jsx)(
                s.a.Item,
                {
                  children: Object(c.jsx)(i.c, {
                    className: 'navbar-item',
                    to: '/about',
                    children: 'About',
                  }),
                },
                'key-about',
              ),
              Object(c.jsx)(
                s.a.Item,
                {
                  children: Object(c.jsx)(i.c, {
                    className: 'navbar-item',
                    to: '/contact',
                    children: 'Contact',
                  }),
                },
                'key-contact',
              ),
            ],
          });
        },
        b = n(432),
        h = n(25),
        m = n(17),
        O = n(6),
        f = l.a.useBreakpoint,
        p = { logout: h.c },
        v = Object(m.b)(function (e) {
          return { isAuthenticated: e.auth.isAuthenticated, user: e.auth.user };
        }, p)(function (e) {
          var t = e.isAuthenticated,
            n = e.logout,
            a = e.user,
            r = f().md,
            l = Object(c.jsxs)(s.a, {
              mode: r ? 'horizontal' : 'inline',
              children: [
                Object(c.jsx)(
                  s.a.Item,
                  {
                    children: Object(c.jsx)(i.c, {
                      className: 'navbar-item primary',
                      to: O.a.LOGIN,
                      children: 'Sign In',
                    }),
                  },
                  'menukey-login',
                ),
                Object(c.jsx)(
                  s.a.Item,
                  {
                    children: Object(c.jsx)(i.c, {
                      className: 'navbar-item',
                      to: O.a.REGISTER,
                      children: 'Register',
                    }),
                  },
                  'menukey-signup',
                ),
              ],
            }),
            o = Object(c.jsxs)(s.a, {
              mode: r ? 'horizontal' : 'inline',
              children: [
                Object(c.jsx)(
                  s.a.Item,
                  {
                    children: Object(c.jsxs)(i.c, {
                      className: 'navbar-item primary',
                      to: O.a.PROFILE,
                      children: [
                        'Hi ',
                        Object(c.jsx)('strong', { children: a.username }),
                      ],
                    }),
                  },
                  'menukey-profile',
                ),
                Object(c.jsx)(
                  s.a.Item,
                  {
                    children: Object(c.jsx)(i.c, {
                      className: 'navbar-item primary',
                      to: O.a.HOME,
                      onClick: function () {
                        return n();
                      },
                      children: Object(c.jsxs)('span', {
                        children: [Object(c.jsx)(b.a, {}), 'Log Out'],
                      }),
                    }),
                  },
                  'menukey-login',
                ),
              ],
            });
          return Object(c.jsx)(c.Fragment, { children: t ? o : l });
        }),
        x = n(137),
        y = n(420),
        g = function () {
          var e = Object(a.useState)(!1),
            t = Object(r.a)(e, 2),
            n = t[0],
            s = t[1];
          return Object(c.jsx)('div', {
            className: 'navbar-section',
            children: Object(c.jsx)('div', {
              className: 'container',
              children: Object(c.jsxs)('nav', {
                className: 'navbar',
                children: [
                  Object(c.jsx)('div', {
                    className: 'navbar-logo',
                    children: Object(c.jsx)(i.c, {
                      to: '/',
                      className: 'navbar-item',
                      activeClassName: 'is-active',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(c.jsxs)('div', {
                    className: 'navbar-menu',
                    children: [
                      Object(c.jsx)('div', {
                        className: 'navbar-left-menu',
                        children: Object(c.jsx)(j, {}),
                      }),
                      Object(c.jsx)('div', {
                        className: 'navbar-right-menu',
                        children: Object(c.jsx)(v, {}),
                      }),
                    ],
                  }),
                  Object(c.jsxs)('div', {
                    children: [
                      Object(c.jsx)(x.a, {
                        className: 'navbar-btnBars',
                        type: 'primary',
                        onClick: function () {
                          s(!0);
                        },
                        children: Object(c.jsx)('span', {
                          className: 'navbar-btnBars-span',
                        }),
                      }),
                      Object(c.jsxs)(y.a, {
                        title: 'Drawer navbar',
                        placement: 'right',
                        closable: !0,
                        onClose: function () {
                          s(!1);
                        },
                        visible: n,
                        children: [Object(c.jsx)(j, {}), Object(c.jsx)(v, {})],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        k = n(433),
        N = n(434),
        C = n(435),
        I = n(436),
        E = n(430),
        P = function () {
          return Object(c.jsx)('div', {
            className: 'footer',
            children: Object(c.jsx)('div', {
              className: 'container',
              children: Object(c.jsxs)('div', {
                className: 'footer-inner',
                children: [
                  Object(c.jsx)('div', {
                    className: 'footer-logo',
                    children: Object(c.jsx)('a', {
                      href: '/',
                      children: 'REACT TS',
                    }),
                  }),
                  Object(c.jsxs)('ul', {
                    className: 'footer-socials',
                    children: [
                      Object(c.jsx)('li', {
                        children: Object(c.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://github.com/tienduy-nguyen',
                          children: Object(c.jsx)(k.a, {}),
                        }),
                      }),
                      Object(c.jsx)('li', {
                        children: Object(c.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.twitter.com/tienduy_nguyen',
                          children: Object(c.jsx)(N.a, {}),
                        }),
                      }),
                      Object(c.jsx)('li', {
                        children: Object(c.jsx)('a', {
                          target: '_blank',
                          rel: 'noreferrer',
                          href: 'https://www.linkedin.com/',
                          children: Object(c.jsx)(C.a, {}),
                        }),
                      }),
                    ],
                  }),
                  Object(c.jsx)('div', {
                    className: 'copyright',
                    children: 'Copyright \xa9 2020 REACT TS',
                  }),
                  Object(c.jsx)(E.a, {
                    children: Object(c.jsx)('div', {
                      className: 'go-top',
                      children: Object(c.jsx)(I.a, {}),
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        w = n(410),
        S = w.a.Header,
        R = w.a.Content,
        F = w.a.Footer,
        T = function (e) {
          var t = e.children;
          return Object(c.jsxs)(w.a, {
            className: 'main-layout',
            children: [
              Object(c.jsx)(S, { children: Object(c.jsx)(g, {}) }),
              Object(c.jsx)(R, { className: 'layout-children', children: t }),
              Object(c.jsx)(F, { children: Object(c.jsx)(P, {}) }),
            ],
          });
        };
    },
    133: function (e, t, n) {
      var c = n(3),
        a = n(96),
        r = n(91),
        i = n(97),
        s = n(98),
        l = n(99),
        o = n(127),
        u = n(126),
        d = n(0),
        j = n.n(d),
        b = n(84),
        h = n.n(b);
      function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          t &&
            (c = c.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, c);
        }
        return n;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(n), !0).forEach(function (t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function f(e) {
        var t = (function () {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            c = Object(u.a)(e);
          if (t) {
            var a = Object(u.a)(this).constructor;
            n = Reflect.construct(c, arguments, a);
          } else n = c.apply(this, arguments);
          return Object(o.a)(this, n);
        };
      }
      var p = (function (e) {
        Object(l.a)(n, e);
        var t = f(n);
        function n(e) {
          var c;
          Object(i.a)(this, n),
            ((c = t.call(this, e)).handleChange = function (e) {
              var t = c.props,
                n = t.disabled,
                a = t.onChange;
              n ||
                ('checked' in c.props ||
                  c.setState({ checked: e.target.checked }),
                a &&
                  a({
                    target: O(
                      O({}, c.props),
                      {},
                      { checked: e.target.checked },
                    ),
                    stopPropagation: function () {
                      e.stopPropagation();
                    },
                    preventDefault: function () {
                      e.preventDefault();
                    },
                    nativeEvent: e.nativeEvent,
                  }));
            }),
            (c.saveInput = function (e) {
              c.input = e;
            });
          var a = 'checked' in e ? e.checked : e.defaultChecked;
          return (c.state = { checked: a }), c;
        }
        return (
          Object(s.a)(
            n,
            [
              {
                key: 'focus',
                value: function () {
                  this.input.focus();
                },
              },
              {
                key: 'blur',
                value: function () {
                  this.input.blur();
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.prefixCls,
                    i = t.className,
                    s = t.style,
                    l = t.name,
                    o = t.id,
                    u = t.type,
                    d = t.disabled,
                    b = t.readOnly,
                    m = t.tabIndex,
                    O = t.onClick,
                    f = t.onFocus,
                    p = t.onBlur,
                    v = t.autoFocus,
                    x = t.value,
                    y = t.required,
                    g = Object(a.a)(t, [
                      'prefixCls',
                      'className',
                      'style',
                      'name',
                      'id',
                      'type',
                      'disabled',
                      'readOnly',
                      'tabIndex',
                      'onClick',
                      'onFocus',
                      'onBlur',
                      'autoFocus',
                      'value',
                      'required',
                    ]),
                    k = Object.keys(g).reduce(function (e, t) {
                      return (
                        ('aria-' !== t.substr(0, 5) &&
                          'data-' !== t.substr(0, 5) &&
                          'role' !== t) ||
                          (e[t] = g[t]),
                        e
                      );
                    }, {}),
                    N = this.state.checked,
                    C = h()(
                      n,
                      i,
                      ((e = {}),
                      Object(r.a)(e, ''.concat(n, '-checked'), N),
                      Object(r.a)(e, ''.concat(n, '-disabled'), d),
                      e),
                    );
                  return j.a.createElement(
                    'span',
                    { className: C, style: s },
                    j.a.createElement(
                      'input',
                      Object(c.a)(
                        {
                          name: l,
                          id: o,
                          type: u,
                          required: y,
                          readOnly: b,
                          disabled: d,
                          tabIndex: m,
                          className: ''.concat(n, '-input'),
                          checked: !!N,
                          onClick: O,
                          onFocus: f,
                          onBlur: p,
                          onChange: this.handleChange,
                          autoFocus: v,
                          ref: this.saveInput,
                          value: x,
                        },
                        k,
                      ),
                    ),
                    j.a.createElement('span', {
                      className: ''.concat(n, '-inner'),
                    }),
                  );
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function (e, t) {
                  return 'checked' in e
                    ? O(O({}, t), {}, { checked: e.checked })
                    : null;
                },
              },
            ],
          ),
          n
        );
      })(d.Component);
      (p.defaultProps = {
        prefixCls: 'rc-checkbox',
        className: '',
        style: {},
        type: 'checkbox',
        defaultChecked: !1,
        onFocus: function () {},
        onBlur: function () {},
        onChange: function () {},
      }),
        (t.a = p);
    },
    167: function (e, t, n) {
      var c = n(88),
        a = n.n(c),
        r = n(85),
        i = n.n(r),
        s = n(0),
        l = n(84),
        o = n.n(l),
        u = n(133),
        d = n(118),
        j = n.n(d),
        b = n(92),
        h = n.n(b),
        m = n(101),
        O = n(151),
        f = function (e, t) {
          var n = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              t.indexOf(c) < 0 &&
              (n[c] = e[c]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (c = Object.getOwnPropertySymbols(e); a < c.length; a++)
              t.indexOf(c[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, c[a]) &&
                (n[c[a]] = e[c[a]]);
          }
          return n;
        },
        p = s.createContext(null),
        v = function (e) {
          var t = e.defaultValue,
            n = e.children,
            c = e.options,
            r = void 0 === c ? [] : c,
            l = e.prefixCls,
            u = e.className,
            d = e.style,
            b = e.onChange,
            v = f(e, [
              'defaultValue',
              'children',
              'options',
              'prefixCls',
              'className',
              'style',
              'onChange',
            ]),
            x = s.useContext(O.b),
            y = x.getPrefixCls,
            g = x.direction,
            k = s.useState(v.value || t || []),
            N = h()(k, 2),
            I = N[0],
            E = N[1],
            P = s.useState([]),
            w = h()(P, 2),
            S = w[0],
            R = w[1];
          s.useEffect(
            function () {
              'value' in v && E(v.value || []);
            },
            [v.value],
          );
          var F = function () {
              return r.map(function (e) {
                return 'string' === typeof e ? { label: e, value: e } : e;
              });
            },
            T = y('checkbox', l),
            D = ''.concat(T, '-group'),
            A = Object(m.a)(v, ['value', 'disabled']);
          r &&
            r.length > 0 &&
            (n = F().map(function (e) {
              return s.createElement(
                C,
                {
                  prefixCls: T,
                  key: e.value.toString(),
                  disabled: 'disabled' in e ? e.disabled : v.disabled,
                  value: e.value,
                  checked: -1 !== I.indexOf(e.value),
                  onChange: e.onChange,
                  className: ''.concat(D, '-item'),
                  style: e.style,
                },
                e.label,
              );
            }));
          var M = {
              toggleOption: function (e) {
                var t = I.indexOf(e.value),
                  n = j()(I);
                if (
                  (-1 === t ? n.push(e.value) : n.splice(t, 1),
                  'value' in v || E(n),
                  b)
                ) {
                  var c = F();
                  b(
                    n
                      .filter(function (e) {
                        return -1 !== S.indexOf(e);
                      })
                      .sort(function (e, t) {
                        return (
                          c.findIndex(function (t) {
                            return t.value === e;
                          }) -
                          c.findIndex(function (e) {
                            return e.value === t;
                          })
                        );
                      }),
                  );
                }
              },
              value: I,
              disabled: v.disabled,
              name: v.name,
              registerValue: function (e) {
                R(function (t) {
                  return [].concat(j()(t), [e]);
                });
              },
              cancelValue: function (e) {
                R(function (t) {
                  return t.filter(function (t) {
                    return t !== e;
                  });
                });
              },
            },
            B = o()(D, a()({}, ''.concat(D, '-rtl'), 'rtl' === g), u);
          return s.createElement(
            'div',
            i()({ className: B, style: d }, A),
            s.createElement(p.Provider, { value: M }, n),
          );
        },
        x = s.memo(v),
        y = n(107),
        g = function (e, t) {
          var n = {};
          for (var c in e)
            Object.prototype.hasOwnProperty.call(e, c) &&
              t.indexOf(c) < 0 &&
              (n[c] = e[c]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (c = Object.getOwnPropertySymbols(e); a < c.length; a++)
              t.indexOf(c[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, c[a]) &&
                (n[c[a]] = e[c[a]]);
          }
          return n;
        },
        k = function (e, t) {
          var n,
            c = e.prefixCls,
            r = e.className,
            l = e.children,
            d = e.indeterminate,
            j = void 0 !== d && d,
            b = e.style,
            h = e.onMouseEnter,
            m = e.onMouseLeave,
            f = g(e, [
              'prefixCls',
              'className',
              'children',
              'indeterminate',
              'style',
              'onMouseEnter',
              'onMouseLeave',
            ]),
            v = s.useContext(O.b),
            x = v.getPrefixCls,
            k = v.direction,
            N = s.useContext(p),
            C = s.useRef(f.value);
          s.useEffect(function () {
            null === N || void 0 === N || N.registerValue(f.value),
              Object(y.a)(
                'checked' in f || !!N || !('value' in f),
                'Checkbox',
                '`value` is not a valid prop, do you mean `checked`?',
              );
          }, []),
            s.useEffect(
              function () {
                return (
                  f.value !== C.current &&
                    (null === N || void 0 === N || N.cancelValue(C.current),
                    null === N || void 0 === N || N.registerValue(f.value)),
                  function () {
                    return null === N || void 0 === N
                      ? void 0
                      : N.cancelValue(f.value);
                  }
                );
              },
              [f.value],
            );
          var I = x('checkbox', c),
            E = i()({}, f);
          N &&
            ((E.onChange = function () {
              f.onChange && f.onChange.apply(f, arguments),
                N.toggleOption && N.toggleOption({ label: l, value: f.value });
            }),
            (E.name = N.name),
            (E.checked = -1 !== N.value.indexOf(f.value)),
            (E.disabled = f.disabled || N.disabled));
          var P = o()(
              ((n = {}),
              a()(n, ''.concat(I, '-wrapper'), !0),
              a()(n, ''.concat(I, '-rtl'), 'rtl' === k),
              a()(n, ''.concat(I, '-wrapper-checked'), E.checked),
              a()(n, ''.concat(I, '-wrapper-disabled'), E.disabled),
              n),
              r,
            ),
            w = o()(a()({}, ''.concat(I, '-indeterminate'), j));
          return s.createElement(
            'label',
            { className: P, style: b, onMouseEnter: h, onMouseLeave: m },
            s.createElement(
              u.a,
              i()({}, E, { prefixCls: I, className: w, ref: t }),
            ),
            void 0 !== l && s.createElement('span', null, l),
          );
        },
        N = s.forwardRef(k);
      N.displayName = 'Checkbox';
      var C = N,
        I = C;
      (I.Group = x), (I.__ANT_CHECKBOX = !0);
      t.a = I;
    },
    422: function (e, t, n) {
      n.r(t);
      var c = n(1),
        a = n(0),
        r = n.n(a),
        i = n(418),
        s = n(414),
        l = n(167),
        o = n(137),
        u = i.a.TextArea,
        d = function () {
          return Object(c.jsx)('div', {
            className: 'main-body-section',
            children: Object(c.jsx)('div', {
              id: 'main-contact',
              className: 'block',
              children: Object(c.jsxs)('div', {
                className: 'container',
                children: [
                  Object(c.jsxs)('div', {
                    className: 'block-title',
                    children: [
                      Object(c.jsx)('h2', { children: 'Get in Touch' }),
                      Object(c.jsx)('p', {
                        children:
                          'Dolore nam rerum obcaecati fugit odio nobis Molestiae rerum',
                      }),
                    ],
                  }),
                  Object(c.jsxs)(s.a, {
                    name: 'normal_login',
                    className: 'login-form',
                    initialValues: { remember: !0 },
                    children: [
                      Object(c.jsx)(s.a.Item, {
                        name: 'fullname',
                        rules: [
                          {
                            required: !0,
                            message: 'Please enter your full name!',
                          },
                        ],
                        children: Object(c.jsx)(i.a, {
                          placeholder: 'Full Name',
                        }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        name: 'email',
                        rules: [
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: !0,
                            message: 'Please input your E-mail!',
                          },
                        ],
                        children: Object(c.jsx)(i.a, {
                          placeholder: 'Email Address',
                        }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        name: 'telephone',
                        children: Object(c.jsx)(i.a, {
                          placeholder: 'Telephone',
                        }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        name: 'subject',
                        children: Object(c.jsx)(i.a, {
                          placeholder: 'Subject',
                        }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        name: 'message',
                        children: Object(c.jsx)(u, { placeholder: 'Message' }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        children: Object(c.jsx)(s.a.Item, {
                          name: 'remember',
                          valuePropName: 'checked',
                          noStyle: !0,
                          rules: [
                            {
                              validator: function (e, t) {
                                return t
                                  ? Promise.resolve()
                                  : Promise.reject('Should accept agreement');
                              },
                            },
                          ],
                          children: Object(c.jsx)(l.a, {
                            children: 'I agree with terms and conditions.',
                          }),
                        }),
                      }),
                      Object(c.jsx)(s.a.Item, {
                        children: Object(c.jsx)(o.a, {
                          type: 'primary',
                          htmlType: 'submit',
                          className: 'login-form-button',
                          children: 'Submit',
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        j = n(105),
        b = function () {
          return Object(c.jsx)(j.a, { children: Object(c.jsx)(d, {}) });
        },
        h = r.a.memo(b);
      t.default = h;
    },
  },
]);
//# sourceMappingURL=12.114f8275.chunk.js.map
