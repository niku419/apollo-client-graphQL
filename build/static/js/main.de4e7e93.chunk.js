(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{46:function(e,n,c){},47:function(e,n,c){},55:function(e,n,c){"use strict";c.r(n);var t,a=c(2),i=c.n(a),s=c(33),l=c.n(s),r=(c(46),c(47),c(48),c(34)),j=c(40),o=c(74),d=c(76),h=c(77),b=c(75),m=c(73),x=c(70),O=c(71),u=c(72),g=c(78),p=c(35),f=c(39),_=c(3);function k(){var e=Object(j.a)({uri:"https://api.spacex.land/graphql/",credentials:"same-origin"}),n=new o.a({link:e,cache:new d.a}),c=function(){var e=Object(h.a)(Object(b.a)(t||(t=Object(r.a)(["\n    query {\n      launchesPast (limit: 20){\n        mission_name\n        launch_date_local\n        launch_site {\n          site_name_long\n        }\n        links {\n          video_link\n          flickr_images\n        }\n        rocket {\n          rocket_name\n        }\n      }\n    }\n  "])))),n=e.loading,c=e.error,a=e.data;return n?Object(_.jsx)("div",{style:{display:"grid",placeItems:"center"},children:Object(_.jsx)(x.a,{animation:"grow"})}):c?Object(_.jsxs)("p",{children:["Error ",JSON.stringify(c)]}):Object(_.jsx)(O.a,{children:Object(_.jsx)(u.a,{className:"row",children:a.launchesPast.length>0&&a.launchesPast.map((function(e,n){return e.links.flickr_images.length>0&&Object(_.jsx)(O.a,{className:"col-xs-12 col-sm-6 col-md-4 column",children:Object(_.jsxs)(g.a,{style:{margin:"5% 0%"},children:[Object(_.jsxs)("div",{className:"view overlay",children:[Object(_.jsx)(g.a.Img,{className:"card-img-top image",src:e.links.flickr_images[0],alt:"holder.js/300x200"}),Object(_.jsx)("a",{href:"#!",children:Object(_.jsx)("div",{className:"mask rgba-white-slight"})})]}),Object(_.jsxs)(g.a.Body,{style:{margin:"0% 0% 0% 3%",padding:"6% 0%"},children:[Object(_.jsx)(g.a.Title,{children:Object(_.jsx)(g.a.Title,{children:e.mission_name})}),Object(_.jsx)(g.a.Text,{children:Object(_.jsx)("li",{children:e.launch_site.site_name_long})})]}),Object(_.jsxs)(g.a.Footer,{className:"d-flex justify-content-between",children:[Object(_.jsx)("div",{children:e.launch_date_local}),Object(_.jsx)("a",{href:e.links.video_link,children:Object(_.jsx)(p.a,{size:"2x",color:"#FF0000",icon:f.a})})]})]})},n)}))})})};return Object(_.jsx)(O.a,{children:Object(_.jsx)(m.a,{client:n,children:Object(_.jsx)(c,{})})})}var v=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsx)(k,{})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(n){var c=n.getCLS,t=n.getFID,a=n.getFCP,i=n.getLCP,s=n.getTTFB;c(e),t(e),a(e),i(e),s(e)}))};l.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(v,{})}),document.getElementById("root")),y()}},[[55,1,2]]]);
//# sourceMappingURL=main.de4e7e93.chunk.js.map