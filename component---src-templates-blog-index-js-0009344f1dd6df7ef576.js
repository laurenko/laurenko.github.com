(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{EYWl:function(t,e,r){"use strict";r("91GP");var n=r("c/e4"),a=r("q1tI"),o=r.n(a),i=r("TJpk"),l=r.n(i),c=r("Wbzz"),s="3236765318";function u(t){var e=t.meta,r=t.image,a=t.title,i=t.description,u=t.slug,p=t.lang,m=void 0===p?"en":p;return o.a.createElement(c.StaticQuery,{query:s,render:function(t){var n=t.site.siteMetadata,c=i||n.description,s=r?n.siteUrl+"/"+r:null,p=""+n.siteUrl+u;return o.a.createElement(l.a,Object.assign({htmlAttributes:{lang:m}},a?{titleTemplate:"%s — "+n.title,title:a}:{title:"Technology, Consulting, and System blog by - "+n.title},{meta:[{name:"description",content:c},{property:"og:url",content:p},{property:"og:title",content:a||n.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:a||n.title},{name:"twitter:description",content:c}].concat(s?[{property:"og:image",content:s},{name:"twitter:image",content:s}]:[]).concat(e)}))},data:n})}u.defaultProps={meta:[],title:"",slug:""},e.a=u},JLKy:function(t,e,r){"use strict";r("91GP");var n=r("q1tI"),a=r.n(n);e.a=function(t){var e=t.children,r=t.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},e)}},L6NH:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return o}));r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}function o(t,e){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var a=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=t).toLocaleDateString.apply(r,n(a))}},Nr18:function(t,e,r){"use strict";var n=r("S/j/"),a=r("d/Gc"),o=r("ne8i");t.exports=function(t){for(var e=n(this),r=o(e.length),i=arguments.length,l=a(i>1?arguments[1]:void 0,r),c=i>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>l;)e[l++]=t;return e}},SbOt:function(t,e,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("caJ7"),i=r.n(o),l=r("p3AD");var c=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2)}},a.a.createElement("img",{src:i.a,alt:"LaurenKo",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),height:Object(l.a)(2),borderRadius:"50%"}}),a.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",a.a.createElement("a",{href:"https://www.linkedin.com/in/laurenko"},"LaurenKo"),"."," ","I Try to explain anything in its simplest form."))},n}(a.a.Component);e.a=c},TshS:function(t,e,r){"use strict";r.r(e);var n=r("Wbzz"),a=r("L6NH"),o=r("SbOt"),i=r("q1tI"),l=r.n(i),c=r("p3AD");var s=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return l.a.createElement("footer",{style:{marginTop:Object(c.a)(2.5),paddingTop:Object(c.a)(1)}},l.a.createElement("div",{style:{float:"right"}},l.a.createElement("a",{href:"/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss")),l.a.createElement("a",{href:"https://www.linkedin.com/in/laurenko",target:"_blank",rel:"noopener noreferrer"},"linkedin")," ","•"," ",l.a.createElement("a",{href:"https://github.com/Laurenko",target:"_blank",rel:"noopener noreferrer"},"github"))},n}(l.a.Component),u=r("7oih"),p=r("JLKy"),m=r("EYWl"),d=r("mwIZ"),f=r.n(d);r.d(e,"pageQuery",(function(){return g}));var y=function(t){var e,r;function i(){return t.apply(this,arguments)||this}return r=t,(e=i).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,i.prototype.render=function(){var t=f()(this,"props.data.site.siteMetadata.title"),e=this.props.pageContext.langKey,r=f()(this,"props.data.allMarkdownRemark.edges");return l.a.createElement(u.a,{location:this.props.location,title:t},l.a.createElement(m.a,null),l.a.createElement("aside",null,l.a.createElement(o.a,null)),l.a.createElement("main",null,"en"!==e&&"ru"!==e&&l.a.createElement(p.a,null,"These articles have been"," ",l.a.createElement("a",{href:"https://github.com/laurenko/laurenko.github.com#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),r.map((function(t){var r=t.node,o=f()(r,"frontmatter.title")||r.fields.slug;return l.a.createElement("article",{key:r.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(c.a)(1),marginBottom:Object(c.a)(.25)}},l.a.createElement(n.Link,{style:{boxShadow:"none"},to:r.fields.slug,rel:"bookmark"},o)),l.a.createElement("small",null,Object(a.a)(r.frontmatter.date,e)," • "+Object(a.b)(r.timeToRead))),l.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.spoiler}}))}))),l.a.createElement(s,null))},i}(l.a.Component),g=(e.default=y,"3710597169")},bHtr:function(t,e,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},"c/e4":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"LaurenKo","author":"LaurenKo","description":"Personal blog by LaurenKo. Simple explanation through examples.","siteUrl":"https://overreacted.io","social":{"twitter":"@laurenko"}}}}}')},caJ7:function(t,e,r){t.exports=r.p+"static/profile-pic-38f76ea92447c5cfbe95b0791e32dfa8.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-0009344f1dd6df7ef576.js.map