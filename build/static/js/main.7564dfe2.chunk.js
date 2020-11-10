(this['webpackJsonptic-tac-toe'] = this['webpackJsonptic-tac-toe'] || []).push([
	[0],
	{
		1: function (e, a, t) {
			e.exports = {
				title: 'default_title__2iCcQ',
				text: 'default_text__2C05E',
				smallText: 'default_smallText__1mlH_',
				input: 'default_input___83lW',
				symbol: 'default_symbol__3ILOg',
				boxColumnCenter: 'default_boxColumnCenter__2NCP5',
				boxRowCenter: 'default_boxRowCenter__3IOiv',
				globalBox: 'default_globalBox__1-V7d',
				boxCenter: 'default_boxCenter__1gzBL',
				marginT40: 'default_marginT40__3xDNs',
			};
		},
		24: function (e, a, t) {
			e.exports = t(36);
		},
		35: function (e, a, t) {},
		36: function (e, a, t) {
			'use strict';
			t.r(a);
			var n = t(0),
				l = t.n(n),
				r = t(18),
				c = t.n(r),
				o = t(22),
				i = t(2),
				m = t(3),
				u = t(1),
				s = t.n(u),
				b = t(4),
				g = b.a.button.withConfig({
					displayName: 'buttonsStyles__DefaultStyle',
					componentId: 'sc-1gguzeb-0',
				})(['margin:', ';&:focus{outline:none;}'], function (e) {
					return e.margin;
				}),
				d = Object(b.a)(g).withConfig({
					displayName: 'buttonsStyles__ButtonOneSC',
					componentId: 'sc-1gguzeb-1',
				})(['padding:5px 10px;background-color:#119f17;']),
				f = Object(b.a)(g).withConfig({
					displayName: 'buttonsStyles__ButtonTicTacToeSC',
					componentId: 'sc-1gguzeb-2',
				})([
					'float:left;width:90px;height:90px;border:1px #fff solid;background:none;',
				]);
			function p(e) {
				return l.a.createElement(
					d,
					{
						onClick: e.onClick,
						className: e.className,
						'aria-label': e.ariaLabel,
						margin: e.margin,
					},
					e.text
				);
			}
			function x(e) {
				return l.a.createElement(
					f,
					{
						onClick: e.onClick,
						className: e.className,
						'aria-label': e.ariaLabel,
						margin: e.margin,
					},
					e.text
				);
			}
			function y(e) {
				var a = e.children;
				return l.a.createElement('main', null, a);
			}
			var E = function () {
					var e = Object(n.useState)(Array(9).fill(null)),
						a = Object(m.a)(e, 2),
						t = a[0],
						r = a[1],
						c = Object(n.useState)(!0),
						o = Object(m.a)(c, 2),
						i = o[0],
						u = o[1],
						b = Object(n.useState)(''),
						g = Object(m.a)(b, 2),
						d = g[0],
						f = g[1],
						E = Object(n.useState)(''),
						C = Object(m.a)(E, 2),
						v = C[0],
						N = C[1],
						_ = Object(n.useState)(!0),
						h = Object(m.a)(_, 2),
						S = h[0],
						j = h[1],
						O = Object(n.useState)(''),
						k = Object(m.a)(O, 2),
						I = k[0],
						L = k[1],
						w = Object(n.useState)(0),
						B = Object(m.a)(w, 2),
						T = B[0],
						q = B[1],
						A = Object(n.useState)(0),
						P = Object(m.a)(A, 2),
						z = P[0],
						V = P[1];
					Object(n.useEffect)(function () {
						f(localStorage.getItem('namePlayer1')),
							N(localStorage.getItem('namePlayer2')),
							'true' === localStorage.getItem('symbol')
								? (u(!0), L('X'))
								: (u(!1), L('O'));
					}, []);
					var D,
						F = function (e) {
							var a = t.slice();
							M(a) || a[e] || ((a[e] = i ? 'X' : 'O'), r(a), u(!i), j(!S));
						},
						M = function (e) {
							var a = [
								[0, 1, 2],
								[3, 4, 5],
								[6, 7, 8],
								[0, 3, 6],
								[1, 4, 7],
								[2, 5, 8],
								[0, 4, 8],
								[2, 4, 6],
							];
							for (var t in a) {
								var n = Object(m.a)(a[t], 3),
									l = n[0],
									r = n[1],
									c = n[2];
								if (e[l] && e[l] === e[r] && e[l] === e[c])
									return e[l] === I ? d : v;
								if (
									!e.some(function (e) {
										return null === e;
									})
								)
									return 'Velha';
							}
							return !1;
						},
						J = function () {
							!(function () {
								if (M(t) === d) q(T + 1);
								else {
									if (M(t) !== v) return;
									V(z + 1);
								}
							})(),
								r(Array(9).fill(null)),
								u(localStorage.getItem('symbol'));
						};
					return l.a.createElement(
						y,
						null,
						l.a.createElement(
							'div',
							{ className: s.a.globalBox },
							l.a.createElement(
								'div',
								{ className: s.a.boxCenter },
								l.a.createElement(
									'div',
									null,
									l.a.createElement(
										'span',
										{ id: 'score', className: s.a.smallText },
										''
											.concat(d, ' ')
											.concat(T, ' x  ')
											.concat(z, '  ')
											.concat(v)
									)
								),
								l.a.createElement(
									'div',
									null,
									l.a.createElement(
										'span',
										{ className: s.a.title },
										'Velha' === (D = M(t))
											? 'Deu velha'
											: D
											? ''.concat(D, ' Ganhou')
											: 'Vez do(a) '.concat(S ? d : v)
									)
								),
								l.a.createElement(
									'div',
									{ className: s.a.marginT40 },
									l.a.createElement(
										'div',
										null,
										l.a.createElement(x, {
											onClick: function () {
												return F(0);
											},
											ariaLabel: 'A-1',
											text: t[0],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(1);
											},
											ariaLabel: 'B-1',
											text: t[1],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(2);
											},
											ariaLabel: 'C-1',
											text: t[2],
											className: s.a.symbol,
										})
									),
									l.a.createElement(
										'div',
										null,
										l.a.createElement(x, {
											onClick: function () {
												return F(3);
											},
											ariaLabel: 'A-2',
											text: t[3],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(4);
											},
											ariaLabel: 'B-2',
											text: t[4],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(5);
											},
											ariaLabel: 'C-2',
											text: t[5],
											className: s.a.symbol,
										})
									),
									l.a.createElement(
										'div',
										null,
										l.a.createElement(x, {
											onClick: function () {
												return F(6);
											},
											ariaLabel: 'A-3',
											text: t[6],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(7);
											},
											ariaLabel: 'A-3',
											text: t[7],
											className: s.a.symbol,
										}),
										l.a.createElement(x, {
											onClick: function () {
												return F(8);
											},
											ariaLabel: 'A-3',
											text: t[8],
											className: s.a.symbol,
										})
									)
								),
								l.a.createElement(p, {
									text: 'Nova partida',
									onClick: function () {
										return J();
									},
									className: s.a.text,
									margin: '40px 0 0 0',
								})
							)
						)
					);
				},
				C = b.a.input.withConfig({
					displayName: 'inputsStyles__DefaultStyle',
					componentId: 'sc-1vipcak-0',
				})(['padding:0 2px;margin:', ';&:focus{outline:none;}'], function (e) {
					return e.margin;
				}),
				v = Object(b.a)(C).withConfig({
					displayName: 'inputsStyles__InputOneSC',
					componentId: 'sc-1vipcak-1',
				})(['']);
			function N(e) {
				return l.a.createElement(v, {
					id: e.id,
					name: e.name,
					type: e.type,
					value: e.value,
					onChange: e.onChange,
					maxLength: e.maxLength,
					minLength: e.minLength || 0,
					placeholder: e.placeholder,
					'aria-label': e.ariaLabel,
					'aria-required': e.ariaRequired,
					required: e.required || !1,
					className: e.className,
					margin: e.margin,
				});
			}
			var _ = t(23),
				h = b.a.select.withConfig({
					displayName: 'selectsStyles__DefaultStyle',
					componentId: 'sc-1ah7wyd-0',
				})(['&:focus{outline:none;}']),
				S = Object(b.a)(h).withConfig({
					displayName: 'selectsStyles__SelectOneSC',
					componentId: 'sc-1ah7wyd-1',
				})(['padding:4px 2px;']);
			function j(e) {
				var a = Object(_.a)(e.options);
				return l.a.createElement(
					S,
					{
						value: e.value,
						onChange: e.onChange,
						className: e.className,
						margin: e.margin,
					},
					a.map(function (e, a) {
						return 0 === a
							? l.a.createElement(
									'option',
									{ key: a, value: e.value, defaultValue: !0 },
									e.text
							  )
							: l.a.createElement('option', { key: a, value: e.value }, e.text);
					})
				);
			}
			var O = b.a.div.withConfig({
					displayName: 'errorMessageStyles__BlockMessageSC',
					componentId: 'sc-1q5lv3-0',
				})(['margin:10px 0;']),
				k = b.a.span.withConfig({
					displayName: 'errorMessageStyles__MessageSC',
					componentId: 'sc-1q5lv3-1',
				})(
					[
						'font-family:"Verdana","Halvetica","sans-serif";font-size:14px;font-weight:500;line-height:1.3;color:#f50c00;display:',
						';',
					],
					function (e) {
						return e.display;
					}
				);
			function I(e) {
				return l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(
						O,
						null,
						l.a.createElement(k, { display: e.display }, e.text)
					)
				);
			}
			var L = function () {
				var e = Object(n.useState)(''),
					a = Object(m.a)(e, 2),
					t = a[0],
					r = a[1],
					c = Object(n.useState)(!0),
					o = Object(m.a)(c, 2),
					i = o[0],
					u = o[1],
					b = Object(n.useState)(''),
					g = Object(m.a)(b, 2),
					d = g[0],
					f = g[1],
					x = Object(n.useState)(!1),
					E = Object(m.a)(x, 2),
					C = E[0],
					v = E[1],
					_ = Object(n.useState)(!1),
					h = Object(m.a)(_, 2),
					S = h[0],
					O = h[1];
				Object(n.useEffect)(function () {
					localStorage.setItem('namePlayer1', ''),
						localStorage.setItem('symbol', !0),
						localStorage.setItem('namePlayer2', '');
				}, []);
				var k = function () {
					t || v(!0), d || O(!0), t && d && (window.location.href = '/game');
				};
				return l.a.createElement(
					y,
					null,
					l.a.createElement(
						'div',
						{ className: s.a.globalBox },
						l.a.createElement(
							'div',
							{ className: s.a.boxColumnCenter },
							l.a.createElement(
								'div',
								{ className: s.a.boxCenter },
								l.a.createElement(
									'label',
									{ htmlFor: 'player1', className: s.a.text },
									'Nome e simbolo do jogador 1:'
								),
								l.a.createElement('br', null),
								l.a.createElement(N, {
									id: 'player1',
									name: 'player1',
									type: 'text',
									value: t,
									onChange: function (e) {
										return r(e.target.value);
									},
									maxLength: 4,
									placeholder: 'Nome jogador 1',
									'aria-label': 'Nome jogador 1',
									'aria-required': 'true',
									margin: '10px 10px 0 0',
									className: s.a.input,
								}),
								l.a.createElement(j, {
									value: i,
									onChange: function (e) {
										return u(e.target.value);
									},
									options: [
										{ text: 'X', value: !0 },
										{ text: 'O', value: !1 },
									],
									margin: '10px 10px 0 0',
								}),
								l.a.createElement(I, {
									text: 'Informe o nome do jogador 1',
									display: C ? 'block' : 'none',
								})
							),
							l.a.createElement(
								'div',
								{ className: s.a.boxCenter },
								l.a.createElement(
									'label',
									{ htmlFor: 'player2', className: s.a.text },
									'Nome do jogador 2:'
								),
								l.a.createElement('br', null),
								l.a.createElement(N, {
									id: 'player2',
									name: 'player2',
									type: 'text',
									value: d,
									onChange: function (e) {
										return f(e.target.value);
									},
									maxLength: 4,
									placeholder: 'Nome jogador 2',
									'aria-label': 'Nome jogador 2',
									'aria-required': 'true',
									className: s.a.input,
									margin: '10px 0 0 0',
								}),
								l.a.createElement('br', null),
								l.a.createElement(I, {
									text: 'Informe o nome do jogador 2',
									display: S ? 'block' : 'none',
								})
							),
							l.a.createElement(p, {
								text: 'Jogar',
								onClick: function () {
									k(),
										localStorage.setItem('namePlayer1', t),
										localStorage.setItem('symbol', i),
										localStorage.setItem('namePlayer2', d);
								},
								ariaLabel: 'Jogar',
								className: s.a.text,
							})
						)
					)
				);
			};
			var w = function () {
				return l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(
						o.a,
						null,
						l.a.createElement(
							i.c,
							null,
							l.a.createElement(i.a, { path: '/', exact: !0, component: L }),
							l.a.createElement(i.a, { path: '/game', exact: !0, component: E })
						)
					)
				);
			};
			t(35);
			var B = function () {
				return l.a.createElement(
					l.a.Fragment,
					null,
					l.a.createElement(w, null)
				);
			};
			c.a.render(
				l.a.createElement(l.a.StrictMode, null, l.a.createElement(B, null)),
				document.getElementById('root')
			);
		},
	},
	[[24, 1, 2]],
]);
//# sourceMappingURL=main.7564dfe2.chunk.js.map
