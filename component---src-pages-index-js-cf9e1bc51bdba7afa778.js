(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return u});var a=n(9),r=(n(0),n(153)),i=n(162),s=n(192),c=n(151),o={name:"nn640c",styles:"text-decoration:none;color:inherit;"},b={name:"14kcwq8",styles:"color:#999;"},l=function(t){var e=t.node;return Object(a.b)("div",{key:e.id},Object(a.b)(r.a,{to:e.frontmatter.permalink,css:o},Object(a.b)("h3",{css:Object(a.a)("margin-bottom:",Object(c.a)(.25),";")},e.frontmatter.title||e.frontmatter.permalink),Object(a.b)("div",{css:b},Object(a.b)("span",null,e.frontmatter.author,e.frontmatter.author&&e.frontmatter.date?" - ":null,e.frontmatter.date)),Object(a.b)("p",null,e.content.excerpt)))};e.default=function(t){var e=t.data;return Object(a.b)(i.a,null,Object(a.b)(s.a,{title:"Home",keywords:["gatsby","application","react"]}),e.allPost.edges.filter(function(t){return!t.node.frontmatter.draft||!1}).map(function(t){var e=t.node;return Object(a.b)(l,{key:e.id,node:e})}))};var u="1810876151"},151:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var a=n(169),r=n.n(a),i=n(170),s=n.n(i),c=new r.a(s.a),o=c.rhythm},153:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var a=n(9),r=n(0),i=n.n(r),s=n(4),c=n.n(s),o=n(33),b=n.n(o);n.d(e,"a",function(){return b.a});n(157);var l=i.a.createContext({}),u=function(t){return Object(a.b)(l.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.b)("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},156:function(t,e,n){"use strict";n(172);var a=n(7),r=n.n(a),i=n(9),s=n(0),c=n.n(s),o=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return Object(i.b)("div",null,this.props.children)},e}(c.a.Component),b=(n(35),n(55),n(75)),l=n.n(b),u=n(4),d=n.n(u),g=n(173),p=n(663),f=function(t,e){return function(n){var a,r=n.math,i=l()(n,["math"]),s=t.exec(r);return s?Object.assign({},i,((a={math:r.replace(t,"")})[e]=s[1],a)):Object.assign({},i,{math:r})}},m=function(t,e){return function(n){var a=n.math,r=l()(n,["math"]),i=t.exec(a);return i?Object.assign({},r,{math:e(i)}):Object.assign({},r,{math:a})}},h=m(/\\begin\{equation\}([\0-\uFFFF]*)\\end\{equation\}/,function(t){return"\\begin{aligned}"+t[1]+"\\end{aligned}"}),O=m(/\\begin\{align\*?\}([\0-\uFFFF]*)\\end\{align\*?\}/,function(t){return"\\begin{aligned}"+t[1]+"\\end{aligned}"}),j=f(/\\tag\{([\0-\uFFFF]*?)\}/,"tag"),y=f(/\\label\{([\0-\uFFFF]*?)\}/,"label"),w=f(/\\ref\{([\0-\uFFFF]*?)\}/,"ref"),C=f(/\\eqref\{([\0-\uFFFF]*?)\}/,"eqref"),v=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=Object(p.a)(C,w)({math:this.props.math}),e=t.math,n=t.ref,a=t.eqref;return n?Object(i.b)("a",{href:"#"+n},n):a?Object(i.b)("a",{href:"#"+a},"("+a+")"):Object(i.b)(g.InlineMath,{math:e})},e}(c.a.Component);v.propTypes={math:d.a.string.isRequired};var x={name:"79elbk",styles:"position:relative;"},A={name:"18w2w9x",styles:"position:absolute;top:0;bottom:0;right:0;display:flex;align-items:center;"},M=function(t){var e=t.tag,n=t.children;return Object(i.b)("div",{css:x},e&&Object(i.b)("div",{id:""+e,css:A},Object(i.b)("span",null,"("+e+")")),n)},F={name:"9tf9ac",styles:"margin-bottom:1em;"},E={name:"70qvj9",styles:"display:flex;align-items:center;"},K={name:"4efxq5",styles:"font-size:0.5em;margin-right:4px;"},H={name:"1nvv0o4",styles:"padding:0.5em;background:#ECF4F8;"},k={name:"1wbi0d4",styles:"margin-bottom:0;overflow-x:auto;"},U=function(t){var e=t.children,n=Object(s.useState)(!1),a=n[0],r=n[1];return Object(i.b)("div",{css:F},Object(i.b)("div",{css:E},Object(i.b)("span",{css:K},a?"▼":"▶"),Object(i.b)("a",{href:"javascript:void(0)",onClick:function(){return r(!a)}},Object(i.b)("span",null,"View Source"))),a&&Object(i.b)("div",{css:H},Object(i.b)("pre",{css:k},e)))},q=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=Object(p.a)(y,j,O,h)({math:this.props.math}),e=t.math,n=t.tag,a=t.label||n;return Object(i.b)("div",null,Object(i.b)(M,{tag:a},Object(i.b)(g.BlockMath,{math:e})),Object(i.b)(U,null,this.props.math))},e}(c.a.Component);q.propTypes={math:d.a.string.isRequired},n.d(e,"c",function(){return o}),n.d(e,"b",function(){return v}),n.d(e,"a",function(){return q})},157:function(t,e,n){var a;t.exports=(a=n(160))&&a.default||a},159:function(t){t.exports={data:{site:{siteMetadata:{title:"Kliment Mamykin blog"}}}}},160:function(t,e,n){"use strict";n.r(e);n(55);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),c=n(57),o=n(2),b=function(t){var e=t.location,n=o.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};b.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=b},161:function(t,e){t.exports="data:image/png;base64,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"},162:function(t,e,n){"use strict";var a=n(9),r=n(159),i=n(0),s=n.n(i),c=n(4),o=n.n(c),b=n(153),l=n(151),u=n(171),d=n.n(u),g=function(t){var e=t.children;return Object(a.b)("div",{css:Object(a.a)({margin:"0 auto",maxWidth:960,padding:"0px "+Object(l.a)(.5),paddingTop:0})},e)},p=n(34),f=n.n(p),m=n(75),h=n.n(m),O={name:"1q2167j",styles:"text-decoration:none;text-shadow:none;background-image:none;color:white;"},j=function(t){var e=t.children,n=h()(t,["children"]);return Object(a.b)(b.a,f()({css:O},n),e)},y=n(161),w=n.n(y),C=Object(a.a)("height:100%;width:100%;background-image:url(",w.a,");background-position:center;background-size:cover;border-radius:50%;"),v=function(t){t.src;return Object(a.b)("div",{css:C})},x={name:"70qvj9",styles:"display:flex;align-items:center;"},A={name:"4vgsfv",styles:"padding:0.75rem 0;flex:1 1 0;"},M={name:"1uk1gs8",styles:"margin:0;"},F={name:"1wmte3b",styles:"margin:0 15px;"},E={name:"kn46u7",styles:"width:48px;height:48px;"},K=function(t){var e=t.siteTitle;return Object(a.b)(d.a,{wrapperStyle:{marginBottom:Object(l.a)(1)},style:{background:"rgb(57, 111, 176)",boxShadow:"1px 1px 1px rgba(0, 0, 0, 0.25)"}},Object(a.b)(g,null,Object(a.b)("div",{css:x},Object(a.b)("div",{css:A},Object(a.b)("h2",{css:M},Object(a.b)(j,{to:"/"},e))),Object(a.b)("div",null,Object(a.b)("h4",{css:F},Object(a.b)(j,{to:"/about/"},"About"))),Object(a.b)("div",{css:E},Object(a.b)(j,{to:"/about/"},Object(a.b)(v,null))))))};K.propTypes={siteTitle:o.a.string},K.defaultProps={siteTitle:""};var H=K,k=n(156),U=Object(a.a)("padding:",Object(l.a)(1)," 0;border-top:2px solid rgb(0,0,0,0.2);"),q={name:"o5uqvq",styles:"margin-left:5px;"},I={name:"70qvj9",styles:"display:flex;align-items:center;"},G={name:"8i9p08",styles:"flex:1 1 auto;display:flex;align-items:center;justify-content:flex-end;"},V={name:"56pfug",styles:"text-shadow:none;background-image:none;"},Y=function(){return Object(a.b)("footer",{css:U},Object(a.b)("div",{css:I},Object(a.b)("span",null,"© ",(new Date).getFullYear()," Kliment Mamykin"),Object(a.b)("div",{css:G},Object(a.b)("span",{css:q},"Built with"),Object(a.b)("span",{css:q},Object(a.b)("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),Object(a.b)("span",{css:q},Object(a.b)("a",{href:"https://prismjs.com"},"Prism.js")),Object(a.b)("span",{css:q},Object(a.b)("a",{href:"https://katex.org/",css:V},Object(a.b)(k.b,{math:"\\KaTeX"}))))))},B=function(t){var e=t.children;return Object(a.b)(b.b,{query:"755544856",render:function(t){return Object(a.b)(s.a.Fragment,null,Object(a.b)(H,{siteTitle:t.site.siteMetadata.title}),Object(a.b)(g,null,Object(a.b)(k.c,null,Object(a.b)("main",null,e)),Object(a.b)(Y,null)))},data:r})};B.propTypes={children:o.a.node.isRequired};e.a=B},192:function(t,e,n){"use strict";var a=n(9),r=n(193),i=(n(0),n(4)),s=n.n(i),c=n(217),o=n.n(c),b=n(153);function l(t){var e=t.description,n=t.lang,i=t.meta,s=t.keywords,c=t.title;return Object(a.b)(b.b,{query:u,render:function(t){var r=e||t.site.siteMetadata.description;return Object(a.b)(o.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},e.a=l;var u="1025518380"},193:function(t){t.exports={data:{site:{siteMetadata:{title:"Kliment Mamykin blog",description:"Personal website and blog",author:"Kliment Mamykin"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-cf9e1bc51bdba7afa778.js.map