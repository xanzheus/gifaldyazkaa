function v(){}function j(t){return t()}function A(){return Object.create(null)}function i(t){t.forEach(j)}function O(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let d;function L(t,e){return d||(d=document.createElement("a")),d.href=e,t===d.href}function q(t){return Object.keys(t).length===0}function Q(t,e){t.appendChild(e)}function R(t,e,n){t.insertBefore(e,n||null)}function B(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function M(t){return document.createTextNode(t)}function V(){return M(" ")}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function P(t){return Array.from(t.childNodes)}let p;function f(t){p=t}const l=[],S=[],_=[],C=[],T=Promise.resolve();let $=!1;function z(){$||($=!0,T.then(N))}function b(t){_.push(t)}const y=new Set;let h=0;function N(){const t=p;do{for(;h<l.length;){const e=l[h];h++,f(e),D(e.$$)}for(f(null),l.length=0,h=0;S.length;)S.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];y.has(n)||(y.add(n),n())}_.length=0}while(l.length);for(;C.length;)C.pop()();$=!1,y.clear(),f(t)}function D(t){if(t.fragment!==null){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(b)}}const F=new Set;function G(t,e){t&&t.i&&(F.delete(t),t.i(e))}function H(t,e,n,c){const{fragment:o,on_mount:m,on_destroy:a,after_update:g}=t.$$;o&&o.m(e,n),c||b(()=>{const s=m.map(j).filter(O);a?a.push(...s):i(s),t.$$.on_mount=[]}),g.forEach(b)}function I(t,e){const n=t.$$;n.fragment!==null&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){t.$$.dirty[0]===-1&&(l.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,c,o,m,a,g=[-1]){const s=p;f(t);const r=t.$$={fragment:null,ctx:null,props:m,update:v,not_equal:o,bound:A(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:A(),dirty:g,skip_bound:!1,root:e.target||s.$$.root};a&&a(r.root);let x=!1;if(r.ctx=n?n(t,e.props||{},(u,k,...w)=>{const E=w.length?w[0]:k;return r.ctx&&o(r.ctx[u],r.ctx[u]=E)&&(!r.skip_bound&&r.bound[u]&&r.bound[u](E),x&&J(t,u)),k}):[],r.update(),x=!0,i(r.before_update),r.fragment=c?c(r.ctx):!1,e.target){if(e.hydrate){const u=P(e.target);r.fragment&&r.fragment.l(u),u.forEach(B)}else r.fragment&&r.fragment.c();e.intro&&G(t.$$.fragment),H(t,e.target,e.anchor,e.customElement),N()}f(s)}class Y{$destroy(){I(this,1),this.$destroy=v}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(e){this.$$set&&!q(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Y as S,V as a,L as b,W as c,R as d,U as e,Q as f,B as g,X as i,v as n,K as s};
