import{S as Z,i as $,s as x,e as f,t as d,k as A,c as v,a as E,h as u,m as D,d as i,b as o,g as Q,F as t,G as ee,L as te,N as se,O as U,Q as ae,P as W}from"../chunks/vendor-a5bddd7e.js";function X(c,s,r){const e=c.slice();return e[2]=s[r].name,e[3]=s[r].description,e[4]=s[r].repo_name,e[5]=s[r].demo_url,e[6]=s[r].img_preview,e[7]=s[r].emoji,e[9]=r,e}function Y(c){let s,r,e=c[9]+1+"",p,w,M=c[7]+"",C,T,y=c[2]+"",V,q,k,m=c[3]+"",z,g,h,b,j,I,H,n,l,G,a,_,N,O;return{c(){s=f("div"),r=f("h1"),p=d(e),w=d(". "),C=d(M),T=A(),V=d(y),q=A(),k=f("p"),z=d(m),g=A(),h=f("p"),b=f("a"),j=d("Demo"),H=d(` |
				`),n=f("a"),l=d("View on GitHub"),a=d(`
				|
				`),_=f("a"),N=d("Preview"),this.h()},l(S){s=v(S,"DIV",{class:!0});var P=E(s);r=v(P,"H1",{class:!0});var F=E(r);p=u(F,e),w=u(F,". "),C=u(F,M),T=D(F),V=u(F,y),F.forEach(i),q=D(P),k=v(P,"P",{class:!0});var R=E(k);z=u(R,m),R.forEach(i),g=D(P),h=v(P,"P",{class:!0});var L=E(h);b=v(L,"A",{href:!0,target:!0,class:!0});var B=E(b);j=u(B,"Demo"),B.forEach(i),H=u(L,` |
				`),n=v(L,"A",{href:!0,target:!0,class:!0});var J=E(n);l=u(J,"View on GitHub"),J.forEach(i),a=u(L,`
				|
				`),_=v(L,"A",{href:!0,target:!0,class:!0});var K=E(_);N=u(K,"Preview"),K.forEach(i),L.forEach(i),P.forEach(i),this.h()},h(){o(r,"class","svelte-vs6ds0"),o(k,"class","svelte-vs6ds0"),o(b,"href",I=c[5]),o(b,"target","_blank"),o(b,"class","svelte-vs6ds0"),o(n,"href",G="https://github.com/gifaldyazkaa/"+c[4]),o(n,"target","_blank"),o(n,"class","svelte-vs6ds0"),o(_,"href",O=c[6]),o(_,"target","_blank"),o(_,"class","svelte-vs6ds0"),o(h,"class","svelte-vs6ds0"),o(s,"class","list svelte-vs6ds0")},m(S,P){Q(S,s,P),t(s,r),t(r,p),t(r,w),t(r,C),t(r,T),t(r,V),t(s,q),t(s,k),t(k,z),t(s,g),t(s,h),t(h,b),t(b,j),t(h,H),t(h,n),t(n,l),t(h,a),t(h,_),t(_,N)},p:ee,d(S){S&&i(s)}}}function le(c){let s,r,e,p,w,M,C,T,y,V,q,k,m,z,g,h,b,j,I;document.title=s="Projects | "+c[0].self.name;let H=c[1],n=[];for(let l=0;l<H.length;l+=1)n[l]=Y(X(c,H,l));return{c(){r=A(),e=f("section"),p=f("h2"),w=d("Projects"),M=A(),C=f("hr"),T=A(),y=f("p"),V=d("Some projects that i've been working on"),q=A();for(let l=0;l<n.length;l+=1)n[l].c();k=A(),m=f("p"),z=d("These projects are listed depending on GitHub Pins at "),g=f("a"),h=d("My GitHub Profile"),b=d("."),this.h()},l(l){te('[data-svelte="svelte-gjp4ob"]',document.head).forEach(i),r=D(l),e=v(l,"SECTION",{class:!0,id:!0});var a=E(e);p=v(a,"H2",{class:!0});var _=E(p);w=u(_,"Projects"),_.forEach(i),M=D(a),C=v(a,"HR",{}),T=D(a),y=v(a,"P",{id:!0,class:!0});var N=E(y);V=u(N,"Some projects that i've been working on"),N.forEach(i),q=D(a);for(let P=0;P<n.length;P+=1)n[P].l(a);k=D(a),m=v(a,"P",{id:!0,class:!0});var O=E(m);z=u(O,"These projects are listed depending on GitHub Pins at "),g=v(O,"A",{href:!0,target:!0,class:!0});var S=E(g);h=u(S,"My GitHub Profile"),S.forEach(i),b=u(O,"."),O.forEach(i),a.forEach(i),this.h()},h(){o(p,"class","section__title svelte-vs6ds0"),o(y,"id","description"),o(y,"class","svelte-vs6ds0"),o(g,"href","https://github.com/gifaldyazkaa"),o(g,"target","_blank"),o(g,"class","svelte-vs6ds0"),o(m,"id","info"),o(m,"class","svelte-vs6ds0"),o(e,"class","container section section__height"),o(e,"id","projects")},m(l,G){Q(l,r,G),Q(l,e,G),t(e,p),t(p,w),t(e,M),t(e,C),t(e,T),t(e,y),t(y,V),t(e,q);for(let a=0;a<n.length;a+=1)n[a].m(e,null);t(e,k),t(e,m),t(m,z),t(m,g),t(g,h),t(m,b),I=!0},p(l,[G]){if((!I||G&1)&&s!==(s="Projects | "+l[0].self.name)&&(document.title=s),G&2){H=l[1];let a;for(a=0;a<H.length;a+=1){const _=X(l,H,a);n[a]?n[a].p(_,G):(n[a]=Y(_),n[a].c(),n[a].m(e,k))}for(;a<n.length;a+=1)n[a].d(1);n.length=H.length}},i(l){I||(se(()=>{j||(j=U(e,W,{duration:500},!0)),j.run(1)}),I=!0)},o(l){j||(j=U(e,W,{duration:500},!1)),j.run(0),I=!1},d(l){l&&i(r),l&&i(e),ae(n,l),l&&j&&j.end()}}}async function oe({fetch:c}){const s=await c("/api/getData.json"),{data:r}=await s.json();return s.ok?{props:{data:r}}:{status:s.status,error:new Error("Could not fetch the guides")}}function re(c,s,r){let{data:e}=s;const p=e.projects;return c.$$set=w=>{"data"in w&&r(0,e=w.data)},[e,p]}class ce extends Z{constructor(s){super();$(this,s,re,le,x,{data:0})}}export{ce as default,oe as load};