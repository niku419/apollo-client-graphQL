(this.webpackJsonporiginal=this.webpackJsonporiginal||[]).push([[0],{100:function(e,n,a){},102:function(e,n,a){"use strict";a.r(n);var t=a(2),l=a.n(t),r=a(65),c=a.n(r),i=(a(90),a(91),a(66)),o=a(23),s=a(115),m=a(116),u=a(117),d=a(67),g=a(72);function h(){var e=Object(i.a)(["\n    query {\n      launchesPast (limit: 20){\n        mission_name\n        launch_date_local\n        launch_site {\n          site_name_long\n        }\n        links {\n          video_link\n          flickr_images\n        }\n        rocket {\n          rocket_name\n        }\n      }\n    }\n  "]);return h=function(){return e},e}function E(){var e=Object(o.createHttpLink)({uri:"https://api.spacex.land/graphql/",credentials:"same-origin"}),n=new o.ApolloClient({link:e,cache:new o.InMemoryCache}),a=function(){var e=Object(o.useQuery)(Object(o.gql)(h())),n=e.loading,a=e.error,t=e.data;return n?l.a.createElement("p",null,"Loading..."):a?l.a.createElement("p",null,"Error ",JSON.stringify(a)):l.a.createElement(s.a,null,l.a.createElement(m.a,{className:"row"},t.launchesPast.length>0&&t.launchesPast.map((function(e,n){return e.links.flickr_images.length>0&&l.a.createElement(s.a,{className:"col-xs-12 col-sm-6 col-md-4 column",key:n},l.a.createElement(u.a,{style:{margin:"5% 0%"}},l.a.createElement("div",{className:"view overlay"},l.a.createElement(u.a.Img,{className:"card-img-top image",src:e.links.flickr_images[0],alt:"holder.js/300x200"}),l.a.createElement("a",{href:"#!"},l.a.createElement("div",{className:"mask rgba-white-slight"}))),l.a.createElement(u.a.Body,{style:{margin:"0% 0% 0% 3%",padding:"6% 0%"}},l.a.createElement(u.a.Title,null,l.a.createElement(u.a.Title,null,e.mission_name)),l.a.createElement(u.a.Text,null,l.a.createElement("li",null,e.launch_site.site_name_long))),l.a.createElement(u.a.Footer,{className:"d-flex justify-content-between"},l.a.createElement("div",null,e.launch_date_local),l.a.createElement("a",{href:e.links.video_link},l.a.createElement(d.a,{size:"2x",color:"#FF0000",icon:g.a})))))}))))};return l.a.createElement(s.a,null,l.a.createElement(o.ApolloProvider,{client:n},l.a.createElement(a,null)))}a(100);var f=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},85:function(e,n,a){e.exports=a(102)},90:function(e,n,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.0ddf3dbf.chunk.js.map