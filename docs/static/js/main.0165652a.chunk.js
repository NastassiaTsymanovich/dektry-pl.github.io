(this.webpackJsonpknowledgebase=this.webpackJsonpknowledgebase||[]).push([[0],{100:function(e){e.exports=JSON.parse('{"sections":["To read","To watch","To study","Tools"],"types":["article","blog","telegram chat","telegram channel","benchmark","checklist","webinar","video","youtube","online","soft"],"data":[{"id":0,"section":"To read","type":"article","name":"Onboarding","link":"https://www.dektry.com/onboarding-main","description":"Useful articles about company processes"},{"id":1,"section":"To watch","type":"video","name":"NestJS fundamentals","link":"https://rutracker.net/forum/viewtopic.php?t=5979667","description":"NestJS fundamentals course"},{"id":2,"section":"To watch","type":"video","name":"NestJS from zero","link":"https://mega.nz/folder/O4hV3LzD#At-KfTQc91UqGUxuzmWn4Q","description":"NestJS: zero to hero"}]}')},137:function(e,t,n){},138:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),i=(n(137),n(128)),s=n(105),d=(n(138),n(100)),l=n(219),u=n(221),h=n(223),p=n(217),j=n(220),f=n(23),b=j.a.Search;var m=function(e){var t=e.onSearch,n=e.searchValue,r=e.onSearchChange;return Object(f.jsx)(b,{placeholder:"Input search text",allowClear:!0,onSearch:t,onChange:function(e){return r(e.target.value)},style:{width:200},value:n})},x=n(222),O=n(218),w=function(e){return function(e){var t=0;if(0===e.length)return t;for(var n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t),t&=t;for(var r="#",a=0;a<3;a++)r+=("00"+(t>>8*a&255).toString(16)).substr(-2);return r}(e)},g=[{title:"Type",width:"10%",dataIndex:"type",render:function(e){return Object(f.jsx)(x.a,{color:w(e),children:e.toUpperCase()},e)}},{title:"Name",dataIndex:"name",width:"20%"},{title:"Link",dataIndex:"link",width:"30%",render:function(e){return Object(f.jsx)("a",{href:e,children:e})}},{title:"Description",width:"40%",dataIndex:"description"}];var v=function(e){var t=e.search,n=e.sections,r=e.rows;return n.map((function(e,n){return Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{children:e}),Object(f.jsx)(O.a,{columns:g,dataSource:r.filter((function(n){return n.section===e&&(!t||function(e,t){return"".concat(e.type,"$$").concat(e.name,"$$").concat(e.link,"$$").concat(e.description).toUpperCase().indexOf(t.toUpperCase())>=0}(n,t))})),pagination:{pageSize:10}})]},e)}))},k=d.data.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{key:e.id})})),S=l.a.Title;var y=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(u.a,{children:Object(f.jsxs)(h.a,{span:20,offset:1,children:[Object(f.jsx)(S,{level:3,children:"Dektry knowledgebase"}),Object(f.jsx)(m,{searchValue:n,onSearchChange:a,onSearch:function(){return console.log(n)}}),Object(f.jsx)(p.a,{}),Object(f.jsx)(v,{rows:k,sections:d.sections,search:n})]})})})};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.0165652a.chunk.js.map