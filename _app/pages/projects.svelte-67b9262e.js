import{S as Z,i as $,s as x,e as f,t as d,k as A,c as v,a as E,h,m as D,d as i,b as o,g as Q,F as t,G as ee,L as te,N as ae,O as U,Q as se,P as W}from"../chunks/vendor-a5bddd7e.js";function X(c,a,r){const e=c.slice();return e[2]=a[r].name,e[3]=a[r].description,e[4]=a[r].repo_name,e[5]=a[r].demo_url,e[6]=a[r].img_preview,e[7]=a[r].emoji,e[9]=r,e}function Y(c){let a,r,e=c[9]+1+"",p,w,M=c[7]+"",C,T,y=c[2]+"",V,q,k,m=c[3]+"",z,g,u,b,j,I,H,n,l,G,s,_,N,O;return{c(){a=f("div"),r=f("h1"),p=d(e),w=d(". "),C=d(M),T=A(),V=d(y),q=A(),k=f("p"),z=d(m),g=A(),u=f("p"),b=f("a"),j=d("Demo"),H=d(` |
				`),n=f("a"),l=d("View on GitHub"),s=d(`
				|
				`),_=f("a"),N=d("Preview"),this.h()},l(S){a=v(S,"DIV",{class:!0});var P=E(a);r=v(P,"H1",{class:!0});var F=E(r);p=h(F,e),w=h(F,". "),C=h(F,M),T=D(F),V=h(F,y),F.forEach(i),q=D(P),k=v(P,"P",{class:!0});var R=E(k);z=h(R,m),R.forEach(i),g=D(P),u=v(P,"P",{class:!0});var L=E(u);b=v(L,"A",{href:!0,target:!0,class:!0});var B=E(b);j=h(B,"Demo"),B.forEach(i),H=h(L,` |
				`),n=v(L,"A",{href:!0,target:!0,class:!0});var J=E(n);l=h(J,"View on GitHub"),J.forEach(i),s=h(L,`
				|
				`),_=v(L,"A",{href:!0,target:!0,class:!0});var K=E(_);N=h(K,"Preview"),K.forEach(i),L.forEach(i),P.forEach(i),this.h()},h(){o(r,"class","svelte-vs6ds0"),o(k,"class","svelte-vs6ds0"),o(b,"href",I=c[5]),o(b,"target","_blank"),o(b,"class","svelte-vs6ds0"),o(n,"href",G="https://github.com/gifaldyazkaa/"+c[4]),o(n,"target","_blank"),o(n,"class","svelte-vs6ds0"),o(_,"href",O=c[6]),o(_,"target","_blank"),o(_,"class","svelte-vs6ds0"),o(u,"class","svelte-vs6ds0"),o(a,"class","list svelte-vs6ds0")},m(S,P){Q(S,a,P),t(a,r),t(r,p),t(r,w),t(r,C),t(r,T),t(r,V),t(a,q),t(a,k),t(k,z),t(a,g),t(a,u),t(u,b),t(b,j),t(u,H),t(u,n),t(n,l),t(u,s),t(u,_),t(_,N)},p:ee,d(S){S&&i(a)}}}function le(c){let a,r,e,p,w,M,C,T,y,V,q,k,m,z,g,u,b,j,I;document.title=a="Projects | "+c[0].self.name;let H=c[1],n=[];for(let l=0;l<H.length;l+=1)n[l]=Y(X(c,H,l));return{c(){r=A(),e=f("section"),p=f("h2"),w=d("Projects"),M=A(),C=f("hr"),T=A(),y=f("p"),V=d("Some projects that i've been working on"),q=A();for(let l=0;l<n.length;l+=1)n[l].c();k=A(),m=f("p"),z=d("These projects are listed depending on GitHub Pins at "),g=f("a"),u=d("My GitHub Profile"),b=d("."),this.h()},l(l){te('[data-svelte="svelte-gjp4ob"]',document.head).forEach(i),r=D(l),e=v(l,"SECTION",{class:!0,id:!0});var s=E(e);p=v(s,"H2",{class:!0});var _=E(p);w=h(_,"Projects"),_.forEach(i),M=D(s),C=v(s,"HR",{}),T=D(s),y=v(s,"P",{id:!0,class:!0});var N=E(y);V=h(N,"Some projects that i've been working on"),N.forEach(i),q=D(s);for(let P=0;P<n.length;P+=1)n[P].l(s);k=D(s),m=v(s,"P",{id:!0,class:!0});var O=E(m);z=h(O,"These projects are listed depending on GitHub Pins at "),g=v(O,"A",{href:!0,target:!0,class:!0});var S=E(g);u=h(S,"My GitHub Profile"),S.forEach(i),b=h(O,"."),O.forEach(i),s.forEach(i),this.h()},h(){o(p,"class","section__title svelte-vs6ds0"),o(y,"id","description"),o(y,"class","svelte-vs6ds0"),o(g,"href","https://github.com/gifaldyazkaa"),o(g,"target","_blank"),o(g,"class","svelte-vs6ds0"),o(m,"id","info"),o(m,"class","svelte-vs6ds0"),o(e,"class","container section section__height"),o(e,"id","projects")},m(l,G){Q(l,r,G),Q(l,e,G),t(e,p),t(p,w),t(e,M),t(e,C),t(e,T),t(e,y),t(y,V),t(e,q);for(let s=0;s<n.length;s+=1)n[s].m(e,null);t(e,k),t(e,m),t(m,z),t(m,g),t(g,u),t(m,b),I=!0},p(l,[G]){if((!I||G&1)&&a!==(a="Projects | "+l[0].self.name)&&(document.title=a),G&2){H=l[1];let s;for(s=0;s<H.length;s+=1){const _=X(l,H,s);n[s]?n[s].p(_,G):(n[s]=Y(_),n[s].c(),n[s].m(e,k))}for(;s<n.length;s+=1)n[s].d(1);n.length=H.length}},i(l){I||(ae(()=>{j||(j=U(e,W,{duration:500},!0)),j.run(1)}),I=!0)},o(l){j||(j=U(e,W,{duration:500},!1)),j.run(0),I=!1},d(l){l&&i(r),l&&i(e),se(n,l),l&&j&&j.end()}}}async function oe({fetch:c}){const a=await c("/api/getData.json"),{data:r}=await a.json();return a.ok?{props:{data:r}}:{status:a.status,error:new Error("Could not fetch the data")}}function re(c,a,r){let{data:e}=a;const p=e.projects;return c.$$set=w=>{"data"in w&&r(0,e=w.data)},[e,p]}class ce extends Z{constructor(a){super();$(this,a,re,le,x,{data:0})}}export{ce as default,oe as load};
