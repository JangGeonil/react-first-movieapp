(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(24)},16:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(16),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(8),p=n(7),f=n(9);n(20),n(22);function d(e){var t=e.genre;return r.a.createElement("span",{className:"Movie Genre"},t," ")}function h(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{className:"Movie__Poster",alt:n,title:n,src:t})}var _=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.summary;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement(h,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Columns"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Generes"},a.map(function(e,t){return r.a.createElement(d,{genre:e,key:t})})),r.a.createElement("p",{className:"Movie__Summary"},o)))},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e,t){return r.a.createElement(_,{title:e.title,poster:e.medium_cover_image,key:e.id,genres:e.genres,summary:e.summary})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,console.log(t),n.setState({movies:t});case 5:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.movies?this._renderMovies():"Loading...")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.c923cd6d.chunk.js.map