(this.webpackJsonpsuperchat=this.webpackJsonpsuperchat||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n.n(r),i=n(15),a=n.n(i),s=(n(23),n(13)),o=n.n(s),u=n(16),j=n(10),d=(n(25),n(9)),l=(n(31),n(27),n(17)),b=n(18),h=n(4);d.a.initializeApp({apiKey:"AIzaSyAGPT12xdjl1qI8UxOtJo683Quf4cc5pWQ",authDomain:"r-superchat.firebaseapp.com",projectId:"r-superchat",storageBucket:"r-superchat.appspot.com",messagingSenderId:"839146952792",appId:"1:839146952792:web:a397976ee13c3e8b68122d"});var p=d.a.auth(),O=d.a.firestore();function m(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(h.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function f(){return p.currentUser&&Object(h.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function g(){var e=Object(r.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),c=Object(b.a)(n,{idField:"id"}),i=Object(j.a)(c,1)[0],a=Object(r.useState)(""),s=Object(j.a)(a,2),l=s[0],m=s[1],f=function(){var n=Object(u.a)(o.a.mark((function n(r){var c,i,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),c=p.currentUser,i=c.uid,a=c.photoURL,n.next=4,t.add({text:l,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:i,photoURL:a});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[i&&i.map((function(e){return Object(h.jsx)(x,{message:e},e.id)})),Object(h.jsx)("span",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:f,children:[Object(h.jsx)("input",{value:l,onChange:function(e){return m(e.target.value)},placeholder:"say something nice"}),Object(h.jsx)("button",{type:"submit",disabled:!l,children:"\ud83d\udd4a\ufe0f"})]})]})}function x(e){var t=e.message,n=t.text,r=t.uid,c=t.photoURL,i=r===p.currentUser.uid?"sent":"received";return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"message ".concat(i),children:[Object(h.jsx)("img",{src:c||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(h.jsx)("p",{children:n})]})})}var v=function(){var e=Object(l.a)(p),t=Object(j.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(h.jsx)(f,{})]}),Object(h.jsx)("section",{children:t?Object(h.jsx)(g,{}):Object(h.jsx)(m,{})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),w()}},[[30,1,2]]]);
//# sourceMappingURL=main.4a9d220d.chunk.js.map