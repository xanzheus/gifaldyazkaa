import{S as Q,i as U,s as z,e as _,k as q,t as p,O as D,c as h,d as m,m as x,a as y,h as E,b as v,F as a,g as M,P as G,j as J,Q as K,R as W,T as P}from"../chunks/vendor-d9c806e2.js";function L(o){let n,s,f,r,t,l,H,R,T,k=o[0].name+"",F,A,C,I,j,i,B,c,b,N,O;return document.title=n="Home | "+o[0].name,{c(){s=_("meta"),f=q(),r=_("main"),t=_("section"),l=_("h1"),H=p(`\u{1F44B} Hi,
			`),R=_("br"),T=p(`
			I'm `),F=p(k),A=p(`,
			`),C=_("br"),I=p(`
			Website developer`),j=q(),i=_("button"),B=p("About me \u2192"),this.h()},l(e){const u=D('[data-svelte="svelte-1kkn75e"]',document.head);s=h(u,"META",{name:!0,id:!0,content:!0}),u.forEach(m),f=x(e),r=h(e,"MAIN",{});var S=y(r);t=h(S,"SECTION",{class:!0,id:!0});var w=y(t);l=h(w,"H1",{});var d=y(l);H=E(d,`\u{1F44B} Hi,
			`),R=h(d,"BR",{}),T=E(d,`
			I'm `),F=E(d,k),A=E(d,`,
			`),C=h(d,"BR",{}),I=E(d,`
			Website developer`),d.forEach(m),j=x(w),i=h(w,"BUTTON",{id:!0,class:!0});var g=y(i);B=E(g,"About me \u2192"),g.forEach(m),w.forEach(m),S.forEach(m),this.h()},h(){v(s,"name","theme-color"),v(s,"id","color-theme"),v(s,"content","#FFFFFF"),v(i,"id","button"),v(i,"class","svelte-15voe5m"),v(t,"class","container section greeting svelte-15voe5m"),v(t,"id","home")},m(e,u){a(document.head,s),M(e,f,u),M(e,r,u),a(r,t),a(t,l),a(l,H),a(l,R),a(l,T),a(l,F),a(l,A),a(l,C),a(l,I),a(t,j),a(t,i),a(i,B),b=!0,N||(O=G(i,"click",o[1]),N=!0)},p(e,[u]){(!b||u&1)&&n!==(n="Home | "+e[0].name)&&(document.title=n),(!b||u&1)&&k!==(k=e[0].name+"")&&J(F,k)},i(e){b||(K(()=>{c||(c=W(t,P,{duration:700},!0)),c.run(1)}),b=!0)},o(e){c||(c=W(t,P,{duration:700},!1)),c.run(0),b=!1},d(e){m(s),e&&m(f),e&&m(r),e&&c&&c.end(),N=!1,O()}}}async function Y({fetch:o}){const n=await o("/api/self.json"),{self:s}=await n.json();return n.ok?{props:{self:s}}:{status:n.status,error:new Error("Could not fetch the data")}}function V(o,n,s){let{self:f}=n;const r=()=>{window.location.href="/about"};return o.$$set=t=>{"self"in t&&s(0,f=t.self)},[f,r]}class Z extends Q{constructor(n){super();U(this,n,V,L,z,{self:0})}}export{Z as default,Y as load};
