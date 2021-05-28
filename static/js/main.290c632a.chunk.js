(this["webpackJsonpport-site"]=this["webpackJsonpport-site"]||[]).push([[0],{143:function(e){e.exports=JSON.parse('{"Brand Strength Analysis":"Data Collection & Analysis","Annual Report Textual Analysis":"Data Collection & Analysis","Japanese Poetry Database":"Data Collection & Analysis","Document Generation Site":"Web Development","Japanese Poetry Website":"Web Development","A Deck of Cards":"Web Development"}')},144:function(e){e.exports=JSON.parse('{"HTML":["Document Generation Site","Japanese Poetry Website","A Deck of Cards"],"CSS":["Document Generation Site","Japanese Poetry Website","A Deck of Cards"],"Bootstrap":["Document Generation Site"],"JavaScript ES7":["Document Generation Site","Japanese Poetry Website","A Deck of Cards"],"JQuery":["Document Generation Site"],"React":["Japanese Poetry Website","A Deck of Cards"],"MaterialUI":["Japanese Poetry Website","A Deck of Cards"]," Ant Design":[]," ":[],"Flask":["Japanese Poetry Website"],"Django":["Document Generation Site"],"Express":["A Deck of Cards"],"MySQL":["Japanese Poetry Database"],"PostgreSQL":["Japanese Poetry Website"],"MongoDB":["A Deck of Cards"],"SQLite":["Document Generation Site"],"REST":[]," GraphQL":[],"NumPy":["Brand Strength Analysis"],"Pandas":["Brand Strength Analysis","Annual Report Textual Analysis"],"Matplotlib":["Brand Strength Analysis","Annual Report Textual Analysis"],"SciPy":["Brand Strength Analysis"],"Jupyter":["Brand Strength Analysis","Annual Report Textual Analysis"],"Python":["Brand Strength Analysis","Annual Report Textual Analysis","Japanese Poetry Database","Document Generation Site","Japanese Poetry Website","A Deck of Cards"],"Swift":[],"SQLAlchemy":["Japanese Poetry Database","Japanese Poetry Website","A Deck of Cards"],"Selenium":[],"Scrapy":["Japanese Poetry Database"],"TkInter":[],"NLTK":["Annual Report Textual Analysis"],"Tensorflow":["Brand Strength Analysis"],"PyTorch":[],"Brand Strength Analysis":["Python","NumPy","Pandas","Matplotlib","SciPy","Tensorflow","Jupyter"],"Annual Report Textual Analysis":["Python","Pandas","Matplotlib","NLTK","Jupyter"],"Japanese Poetry Database":["Python","Scrapy","MySQL","SQLAlchemy"],"Document Generation Site":["Python","Django","SQLite","HTML","CSS","Bootstrap","JavaScript ES7","JQuery"],"Japanese Poetry Website":["Python","Flask","PostgreSQL","React","MaterialUI","HTML","CSS","JavaScript ES7","SQLAlchemy"],"A Deck of Cards":["Python","Express","MongoDB","React","MaterialUI","HTML","CSS","JavaScript ES7","SQLAlchemy"]}')},161:function(e){e.exports=JSON.parse('{"Brand Strength Analysis":0,"Annual Report Textual Analysis":1,"Japanese Poetry Database":2,"Document Generation Site":3,"Japanese Poetry Website":4,"A Deck of Cards":5}')},162:function(e){e.exports=JSON.parse('[{"id":2699297133911293400,"area":"Frontend ","tech":["HTML","CSS","Bootstrap","JavaScript ES7","JQuery","React","MaterialUI"," Ant Design"," "]},{"id":-773383512211070200,"area":"Backend","tech":["Flask","Django","Express"]},{"id":1641745426501363700,"area":"Databases","tech":["MySQL","PostgreSQL","MongoDB","SQLite"]},{"id":-6974132633648194000,"area":"API","tech":["REST"," GraphQL"]},{"id":7863224379015859000,"area":"Data Science ","tech":["NumPy","Pandas","Matplotlib","SciPy","Jupyter"]},{"id":-6366943873591694000,"area":"Programming Languages","tech":["Python","Swift"]},{"id":-1613621891732207000,"area":"Python Packages","tech":["SQLAlchemy","Selenium","Scrapy","TkInter","NLTK"]},{"id":-6472665051381273000,"area":"Machine Learning","tech":["Tensorflow","PyTorch"]}]')},166:function(e){e.exports=JSON.parse('[{"id":0,"name":"Brand Strength Analysis","objective":"To build an informative model of company brand strength from non-financial indicators. ","implementation":"The model incorporated google trends data, as well as sentiment data mined from across popular social media websites (e.g. Instagram, Twitter). The relative predictive strength was evaluated by comparisons to publicly available financial data (revenue, e-commerce/direct-to-consumer sales, share price, etc\u2026). Based on this analysis, different baskets of data were designed to track different elements of brand strength. ","methodology":"unpack the various components of brand strength\\ngather data that appeared meaningfully connected to those components\\napply regression analysis and other tools to investigate predictive power on real financial data\\nexperiment with different combinations and transformations \\ncombine the above results into a simple, but informative model of company brand strength","tech":["Python","NumPy","Pandas","Matplotlib","SciPy","Tensorflow","Jupyter"],"media":null,"source":"ND","link":null,"grouping":"Data Collection & Analysis"},{"id":1,"name":"Annual Report Textual Analysis","objective":"Design and build software to extract and analyze textual content of company 10-K filings.","implementation":"The program accepts an excel spreadsheet with a list of company names (100+) and a range of years (e.g. 2012-2018). It outputs a spreadsheet with corresponding analysis on the text of a company\u2019s annual filings. Targeted sections include Legal Proceedings, Risk Analysis, etc.. Outputted analysis includes length, sentiment, key words, most common proper names.","methodology":"Pipeline design (to minimize burden on website)\\nLookup company CIK\\nExtract company 10-K filings for date range\\nParse out target sections\\nAnalyze those sections\\nPopulate pandas data frame with results\\nRepeat for all companies\\nFinally email completed excel spreadsheet","tech":["Python","Pandas","Matplotlib","NLTK","Jupyter"],"media":null,"source":"ND","link":null,"grouping":"Data Collection & Analysis"},{"id":2,"name":"Japanese Poetry Database","objective":"To build a database of Japanese waka poems, poets and collections from publicly available online sources","implementation":"Web crawlers traverse target websites, the data is cleaned and standardized, before being committed to a MySQL database.","methodology":"Design database schema \\nIdentify target websites\\nBuild spiders to crawl those sites\\nClean and standardize recovered data\\nCommit the cleaned data into database","tech":["Python","Scrapy","MySQL","SQLAlchemy"],"media":null,"source":"https://github.com/wasuregusa18/waka-scrapy","link":null,"grouping":"Data Collection & Analysis"},{"id":3,"name":"Document Generation Site","objective":"To build a site that allowed customer registration and automated data entry for sales team.","implementation":"Customers register their data via a simple form, which checks its validity before saving it into an SQLite database. Staff upload form templates (excel spreadsheet etc\u2026)  combined with a mapping (e.g. customer full address in cell C1). Staff can then download forms with customer data populated from the database.","methodology":"Outline url endpoints and corresponding functionality\\nBuild models for customers and form templates\\nBuild customer-side: registration form, edit/delete form\\nBuild staff-side: login, template upload form, download page\\nBuild automated data entry endpoint and completed form download endpoint\\nStylize frontend with bootstrap\\nAdd localization model properties (e.g. address in Japanese) and convenience features (e.g. today\u2019s date)","tech":["Python","Django","SQLite","HTML","CSS","Bootstrap","JavaScript ES7","JQuery"],"media":"form-site.mp4","source":"https://github.com/wasuregusa18/forms","link":"http://wasuregusa.pythonanywhere.com/","grouping":"Web Development"},{"id":4,"name":"Japanese Poetry Website","objective":"To create a website that allowed users to make complex queries of the poetry, poet, collection databases in an intuitive and appealing manner (with a corresponding API for advanced users). ","implementation":"The website centers around a single, universal search bar.  As the user starts typing, the input is immediately checked against possible filters (e.g. by poet, by collection, etc\u2026); matching filters are presented to the user below the search bar. The user can then either click the filter to apply it to the search or, if there is a corresponding end page (e.g. for poets), the user can click through. In this way, users can make complicated and-or queries. For example, return the poems that contain the word \u201cspring\u201d, included in the \u201cKokinwakashu\u201d collection, written by either \u201cNarihira\u201d or \u201cTsurayuki\u201d. There is a corresponding API that returns results in JSON format. ","methodology":"Convert waka database to PostgreSQL\\nReorganize database schema to optimize search speed and make compatible with heroku\u2019s free database plan\\nDesign Search Schema\\nBuild API Endpoints\\nBuild client-facing HTML endpoints\\nDesign and Implement React Frontend \\nStyle the website with MaterialUI ","tech":["Python","Flask","PostgreSQL","React","MaterialUI","HTML","CSS","JavaScript ES7","SQLAlchemy"],"media":"waka.mp4","source":"https://github.com/wasuregusa18/waka","link":"http://waka-stage.herokuapp.com/","grouping":"Web Development"},{"id":5,"name":"A Deck of Cards","objective":"Build a website that allows users to play any card game in existence (virtual deck of cards)","implementation":"Design: players input basic constraint set (e.g. num of players, starting set up, turn-based or not etc\u2026). They can save these rules under a name of their choice. Disagreements over game rules are settled by majority vote. Ultimately, the ambition is to have a machine learning algorithm on the backend learn the rules of the game from watching people play. Once the algorithm gains confidence, it will start enforcing the rules (e.g. turn end on played card, preempt mistaken card, register end of game, etc\u2026). In this way, players will program the website to learn their game. ","methodology":"Design Machine Learning Architecture,\\nProof of concept on one game (bridge)\\nBuild Backend\\nBuild UI\\nExpand to other trick taking games\\nExpand to all games","tech":["Python","Express","MongoDB","React","MaterialUI","HTML","CSS","JavaScript ES7","SQLAlchemy"],"media":null,"source":"UD","link":"UD","grouping":"Web Development"}]')},187:function(e,t,n){},191:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},266:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){},281:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(26),r=n.n(i),s=n(25),o=n(94),c=n(30),l=n(294),d=n(52),u=n(303),j=n(309),h=n(310),b=n(311),p=n(312),m=n(313),f=n(29),g=n(300),O=n(302),x=n(291),y=n(292),v=n(306),k=n(307),S=n(308),w=n(5),D=g.a.Text,A={email:{icon:function(e){return Object(w.jsx)(v.a,Object(f.a)({style:{color:"#8e24aa"}},e))},tooltip:"Email",link:"mailto:wasuregusa18@gmail.com?subject=Connect",target:"_self"},github:{icon:function(e){return Object(w.jsx)(k.a,Object(f.a)({style:{color:"#000"}},e))},tooltip:"Github",link:"https://github.com/wasuregusa18",target:"_blank"},linkedin:{icon:function(e){return Object(w.jsx)(S.a,Object(f.a)({style:{color:"#0077b5"}},e))},tooltip:"LinkedIn",link:"https://www.linkedin.com/in/christopher-huber-3681637b/",target:"_blank"}};function P(e){var t=A[e.variant];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("a",{target:t.target,rel:"noreferrer",href:t.link,children:t.icon()}),Object(w.jsx)(D,{style:{display:"block",textAlign:"center",fontSize:"medium"},children:t.tooltip})]})}var C=function(e){var t=e.isModalVisible,n=e.handleModalExit;return Object(w.jsx)(O.a,{title:"Contact Me",visible:t,footer:null,onCancel:n,children:Object(w.jsx)(x.a,{justify:"space-around",gutter:[12,24],style:{fontSize:"xxx-large"},children:["email","github","linkedin"].map((function(e,t){return Object(w.jsx)(y.a,{children:Object(w.jsx)(P,{variant:e})},t)}))})})},T=function(e){Object(a.useEffect)((function(){return document.title=e}),[e])},M=n(293),N=function(e){var t={};return e.split(";").forEach((function(e){var n=e.split(":"),a=Object(s.a)(n,2),i=a[0],r=a[1];if(i){var o=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(i.trim());t[o]=r.trim()}})),t},L=function(){return Object(w.jsxs)("svg",{viewBox:"0 0 80 80",height:"80",width:"80",id:"svg2",version:"1.1",children:[Object(w.jsx)("defs",{id:"defs6"}),Object(w.jsx)("g",{transform:"matrix(1.3333333,0,0,-1.3333333,0,80)",id:"g10",children:Object(w.jsxs)("g",{transform:"scale(0.1)",id:"g12",children:[Object(w.jsx)("path",{id:"path14",style:N("fill:rgba(255, 255, 255, 0.3);fill-rule:nonzero;stroke:none"),d:"M 600,0 H 0 V 600 H 600 V 0"}),Object(w.jsx)("path",{id:"path16",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"M 355,165 H 165 v 270 h 190 z"}),Object(w.jsx)("path",{id:"path18",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"M 315,185 H 205 c -11.047,0 -20,8.953 -20,20 v 170 c 0,11.047 8.953,20 20,20 h 110 c 11.047,0 20,-8.953 20,-20 V 205 c 0,-11.047 -8.953,-20 -20,-20 z"}),Object(w.jsx)("path",{id:"path20",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"M 205,355 H 315"}),Object(w.jsx)("path",{id:"path22",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"m 385,375 v 15 c 0,9.871 2.922,19.383 8.398,27.598 L 405,435 416.602,417.598 C 422.078,409.383 425,399.871 425,390 v -15"}),Object(w.jsx)("path",{id:"path24",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"M 435,375 H 375"}),Object(w.jsx)("path",{id:"path26",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"m 415,165 h -20 l -10,160 v 50 h 40 v -50 z"}),Object(w.jsx)("path",{id:"path28",style:N("fill:none;stroke:#ffffff ;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"),d:"m 385,325 h 40"})]})})]})},J=function(e){return Object(w.jsx)(M.a,Object(f.a)({component:L},e))},I=(n(187),l.a.Content),E=l.a.Footer,B=l.a.Sider,H=[{key:"home",icon:Object(w.jsx)(j.a,{})},{key:"about",icon:Object(w.jsx)(h.a,{})},{key:"skills",icon:Object(w.jsx)(b.a,{})},{key:"projects",icon:Object(w.jsx)(p.a,{})},{key:"contact",icon:Object(w.jsx)(m.a,{})}],Q=["home","about","skills","projects","404"];function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}var V=function(e){var t,n=Object(a.useState)(!0),i=Object(s.a)(n,2),r=i[0],o=i[1],j=Object(c.g)(),h="/"===(t=j.location.pathname)?"home":Q.includes(t.slice(1))?t.slice(1):"404",b="home"===h?"":" - "+R(h);T("Christopher Huber".concat(b));var p=["Coders","Christopher Huber",R(h)];return Object(w.jsxs)(l.a,{style:{minHeight:"100vh"},children:[Object(w.jsxs)(B,{collapsible:!0,collapsed:r,onCollapse:function(e){return o((function(e){return!e}))},children:[Object(w.jsx)(J,{className:"inkstone",style:r?{}:{left:"60px"}}),Object(w.jsx)(d.a,{theme:"dark",selectedKeys:e.menuSelected,mode:"inline",onClick:function(t){"contact"===t.key?e.setModalVisible(!0):(e.setSelected([t.key]),j.push(t.key))},children:H.map((function(e){return Object(w.jsx)(d.a.Item,{icon:e.icon,children:R(e.key)},e.key)}))})]}),Object(w.jsxs)(l.a,{className:"site-layout",children:[Object(w.jsxs)(I,{style:{margin:"0 16px"},children:[Object(w.jsx)(u.a,{style:{margin:"16px 0"},children:p.map((function(e,t){return"Home"!==e?Object(w.jsx)(u.a.Item,{children:e},t):null}))}),Object(w.jsxs)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:[Object(w.jsx)(C,{isModalVisible:e.modalVisible,handleModalExit:function(){return e.setModalVisible(!1)}}),e.children]})]}),Object(w.jsx)(E,{style:{textAlign:"center"},children:Object(w.jsxs)("p",{children:["Christopher Huber \xa9",(new Date).getFullYear()]})})]})]})},W=n(305),F=n(296),U=n(304),z=n(314),G=n(315),K=(n(191),{"Data Collection & Analysis":function(e){return Object(w.jsx)(z.a,{className:"data-sci "+e})},"Web Development":function(e){return Object(w.jsx)(G.a,{className:"web-dev "+e})}}),_=function(e){var t=e.keysHovered?"hovered-keys":null;return Object(w.jsx)(U.b,{className:"key-array",grid:{gutter:16,xs:2},dataSource:Object.entries(K),renderItem:function(n){var a=Object(s.a)(n,2),i=a[0],r=a[1];return Object(w.jsx)(U.b.Item,{onMouseOver:function(){return e.setKeysHovered(!0)},onMouseOut:function(){return e.setKeysHovered(!1)},children:Object(w.jsxs)(W.a,{className:"key",children:[r(t)," = ",i]})},i)}})},q=(n(199),n(143)),$=n(161),Y=W.a.CheckableTag,X=Object.keys(q),Z=function(e){var t=Object(a.useState)(!1),n=Object(s.a)(t,2),i=n[0],r=n[1],o=i?"hovered-keys":null,l=Object(c.g)(),d=function(t){var n,a,i=$[null===(n=t.target)||void 0===n||null===(a=n.innerText)||void 0===a?void 0:a.trim()];e.setCarousel(i||0),e.setSelected(["4"]),l.push("/projects")};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(U.b,{className:"project-array",header:Object(w.jsx)("div",{children:"Projects"}),grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4},dataSource:X,renderItem:function(t){return Object(w.jsx)(U.b.Item,{onMouseOver:function(t){var n,a;return e.handleHover(null===(n=t.target)||void 0===n||null===(a=n.innerText)||void 0===a?void 0:a.trim())},onMouseOut:function(t){return e.handleHover("")},children:Object(w.jsxs)(Y,{className:"project",onClick:d,children:[K[q[t]](o)," ",t]})},t)}}),Object(w.jsx)(_,{keysHovered:i,setKeysHovered:r})]})},ee=(n(200),n(162)),te=n(144),ne=W.a.CheckableTag,ae=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),i=n[0],r=n[1],o=[{title:"Domain",dataIndex:"area",key:"area"},{title:"Technologies",dataIndex:"tech",key:"tech",render:function(e){return e.map((function(e,t){return Object(w.jsx)(ne,{className:"tableEntry",checked:i.indexOf(e)>-1,children:e.toUpperCase()},t)}))}}];return Object(w.jsxs)("section",{id:"skills",children:[Object(w.jsx)(Z,Object(f.a)({handleHover:function(e){te[e]?r(te[e]):r([])}},e)),Object(w.jsx)(F.a,{className:"skills-table",dataSource:ee,columns:o,pagination:!1,rowKey:"id"})]})},ie=n(301),re=n(165),se=n(295),oe=n(319),ce=n(320),le=n(321),de=n(298),ue={margin:"auto"},je=function(e){var t,n=[e.media];return Object(w.jsx)("div",{className:"media-container",children:(t={style:ue},n.map((function(e,n){return function(e){var t=/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(e),n=/\.(mp4|mov|wmv|avi)$/i.test(e);if(t)return!0;if(n)return!1;throw new Error("filename neither image nor video")}(e)?Object(a.createElement)(de.a,Object(f.a)(Object(f.a)({},t),{},{key:n,className:"slide-image",src:"".concat(e),alt:"ProjectImage"})):Object(a.createElement)("video",Object(f.a)(Object(f.a)({},t),{},{controls:!0,key:n,className:"slide-video",src:"".concat(e),alt:"ProjectVideo"}))})))})},he=(n(266),W.a.CheckableTag),be=function(e){var t=e.tech;return Object(w.jsx)(U.b,{grid:{xs:1,sm:4,md:6,lg:t.length,xl:t.length},dataSource:t,renderItem:function(e){return Object(w.jsx)(U.b.Item,{style:{width:"fit-content"},children:Object(w.jsx)(he,{color:"#2db7f5",children:"#"+e})})}})},pe=n(299),me=pe.a.Step,fe=function(e){var t=e.methArray,n=e.isVisible,i=void 0!==n&&n,r=e.direction,o=void 0===r?"vertical":r,c=Object(a.useState)(0),l=Object(s.a)(c,2),d=l[0],u=l[1],j=Object(a.useRef)();return Object(a.useEffect)((function(){if(i){return function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;n<t.length&&(u((function(e){return++e})),j.current=setTimeout((function(){return e(++n)}),1e3))}(),function(){return clearTimeout(j.current)}}u(0)}),[i,t.length]),Object(w.jsx)(pe.a,{progressDot:!0,current:d,direction:o,children:t.map((function(e,t){return Object(w.jsx)(me,{title:e},t)}))})},ge=n(47),Oe=n(70),xe=n(316),ye=n(317),ve=n(318),ke=function(e){var t=e.media,n=e.link,a=e.source;var i=[Object(w.jsx)(xe.a,{}),Object(w.jsx)(ye.a,{}),Object(w.jsx)(ve.a,{})],r=[t,n,a],o=["Media","Link","Source"];return Object(w.jsx)(x.a,{justify:"space-around",gutter:12,style:{fontSize:"x-large"},children:r.slice(1).map((function(e,t){var n=function(e){switch(e){case"ND":return[!1,"Non-Disclosure"];case"UD":return[!1,"Under Development"];case null:return[!1,"skip"];case void 0:return[!1,""];default:return[!0,""]}}(e),a=Object(s.a)(n,2),r=a[0],c=a[1];if("skip"!==c){var l=Object(w.jsx)(ge.a,{href:e,target:"_blank",type:"link",disabled:!r,icon:i[t+1],children:o[t+1]});return Object(w.jsx)(y.a,{children:!r&&e?Object(w.jsx)(Oe.a,{title:c,placement:"bottom",children:Object(w.jsx)("span",{children:l})}):l},t)}}))})},Se=(n(267),g.a.Paragraph),we=function(e){var t=e.text,n=e.settings,i=Object(a.useState)(!1),r=Object(s.a)(i,2),o=r[0],c=r[1],l=Object(a.useState)(0),d=Object(s.a)(l,2),u=d[0],j=d[1],h=Object(f.a)(Object(f.a)({},n),{},{onExpand:function(){c(!0)}});return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(Se,{ellipsis:h,children:[t,o&&Object(w.jsx)("button",{className:"close-expanded",onClick:function(){j((function(e){return++e%2})),c(!1)},children:"Collapse"})]},u)})},De=(n(268),l.a.Header),Ae=l.a.Content,Pe=g.a.Paragraph,Ce={media:{rows:2,expandable:!0},noMedia:{rows:6,expandable:!0}},Te=function(e){var t=e.objective,n=e.implementation,a=e.methArray,i=e.isVisible,r=e.media;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.a,{gutter:20,children:Object(w.jsxs)(y.a,{span:24,style:{overflow:"hidden"},children:[Object(w.jsx)(je,{media:r}),Object(w.jsxs)("h4",{children:[Object(w.jsx)(oe.a,{})," Objective"]}),Object(w.jsx)(Pe,{children:t}),Object(w.jsxs)("h4",{children:[Object(w.jsx)(ce.a,{})," Implementation"]}),Object(w.jsx)(we,{text:n,settings:Ce.media})]})}),Object(w.jsx)(x.a,{children:Object(w.jsxs)(y.a,{style:{width:"95%",overflow:"hidden"},children:[Object(w.jsxs)("h4",{style:{marginBottom:"20px"},children:[Object(w.jsx)(le.a,{})," Methodology"]}),Object(w.jsx)(fe,{methArray:a,isVisible:i,direction:"horizontal"})]})})]})},Me=function(e){var t=e.objective,n=e.implementation,a=e.methArray,i=e.isVisible;return Object(w.jsxs)(x.a,{gutter:20,children:[Object(w.jsxs)(y.a,{span:12,children:[Object(w.jsxs)("h4",{children:[Object(w.jsx)(oe.a,{})," Objective"]}),Object(w.jsx)(Pe,{children:t}),Object(w.jsxs)("h4",{children:[Object(w.jsx)(ce.a,{})," Implementation"]}),Object(w.jsx)(we,{text:n,settings:Ce.noMedia})]}),Object(w.jsx)(y.a,{span:12,children:Object(w.jsx)(fe,{methArray:a,isVisible:i})})]})};var Ne={"Web Development":Object(w.jsx)(G.a,{}),"Data Collection & Analysis":Object(w.jsx)(z.a,{})},Le=function(e){var t=e.project,n=e.isVisible,a=t.name,i=t.objective,r=t.implementation,s=t.methodology,o=t.media,c=t.tech,d=t.link,u=t.source,j=t.grouping,h=s.split("\n"),b={objective:i,implementation:r,methArray:h=h.map((function(e){return(t=e).charAt(0).toUpperCase()+t.slice(1);var t})),isVisible:n,media:o};return Object(w.jsxs)(l.a,{className:"project-slide",children:[Object(w.jsx)(De,{className:"layout-header",children:Object(w.jsxs)("h3",{children:[Ne[j]," ",a]})}),Object(w.jsx)(Ae,{className:"layout-content",children:Object(w.jsxs)("div",{className:"content-container",children:[Object(w.jsx)("div",{style:{height:"5%"}}),o?Object(w.jsx)(Te,Object(f.a)({},b)):Object(w.jsx)(Me,Object(f.a)({},b)),Object(w.jsx)(se.a,{}),Object(w.jsx)(be,{tech:c}),Object(w.jsx)(ke,{link:d,source:u,media:o})]})})]})},Je=n(166),Ie=(n(269),function(e){var t=Object(a.useRef)();Object(re.a)({timeout:6e4,onIdle:function(){c.current&&(t.current=setInterval((function(){return c.current.next()}),5e3))},onActive:function(){t.current&&clearInterval(t.current)},debounce:500});var n=Object(a.useState)(e.carouselShowing),i=Object(s.a)(n,2),r=i[0],o=i[1],c=Object(a.useRef)();return Object(w.jsx)("div",{children:Object(w.jsx)(ie.a,{dotPosition:"left",initialSlide:e.carouselShowing,autoplay:!1,ref:function(e){c.current=e},afterChange:function(){return o(c.current.innerSlider.state.currentSlide)},children:Je.map((function(e,t){return Object(w.jsx)(Le,{isVisible:r===t,project:e},t)}))})})}),Ee=n(297),Be=n(167),He=n.n(Be);n(271),n(272),n(273),n(274);function Qe(e){var t=e.code,n=e.language,i=Object(a.useRef)();return Object(a.useEffect)((function(){i.current&&He.a.highlightElement(i.current)}),[n,t]),Object(w.jsx)("div",{className:"code-block",children:Object(w.jsx)("pre",{className:"language-".concat(n),children:Object(w.jsx)("code",{ref:i,className:"language-".concat(n),children:t})})})}n(275);var Re={display:"none"},Ve=function(e){var t=e.toHighlight,n=void 0===t||t;return Object(w.jsxs)("div",{children:[Object(w.jsx)("img",{className:"quill",style:n?Re:null,src:"newQuillPen.png",alt:"quill"}),Object(w.jsx)("img",{className:"quill",style:n?null:Re,src:"coloredQuillPen.png",alt:"quill"})]})},We=(n(276),g.a.Title),Fe=750,Ue="750ms",ze="1500ms",Ge="2250ms",Ke=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){return l(!0)}),5e3),t=setTimeout((function(){return i(!0)}),3300);return function(){clearTimeout(e),clearTimeout(t)}}),[l,i]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(x.a,{style:{height:"50px"}}),Object(w.jsx)("div",{className:"hover-box",onMouseEnter:function(){return c&&i(!0)},onMouseLeave:function(){return c&&i(!1)}}),Object(w.jsxs)(x.a,{justify:"center",className:"top-row",children:[Object(w.jsx)(Ee.a,{in:!0,timeout:Fe,children:Object(w.jsx)(y.a,{push:3,span:18,children:Object(w.jsx)(We,{level:2,children:Object(w.jsx)(Qe,{code:"<ChristopherHuber />",language:n?"jsx":""})})})}),Object(w.jsx)(Ee.a,{in:!0,style:{transitionDelay:ze},timeout:Fe,children:Object(w.jsx)(y.a,{pull:2,span:6,children:Object(w.jsx)(Ve,{toHighlight:n})})})]}),Object(w.jsx)(x.a,{className:"middle-row",justify:"center",style:{marginBottom:"30px"},align:"middle",children:Object(w.jsx)(Ee.a,{in:!0,timeout:Fe,style:{transitionDelay:Ue},children:Object(w.jsx)(y.a,{children:Object(w.jsx)(We,{level:3,children:Object(w.jsx)(Qe,{code:'I.write("Code")',language:n?"python":""})})})})}),Object(w.jsx)(Ee.a,{in:!0,style:{transitionDelay:Ge},timeout:Fe,children:Object(w.jsxs)(x.a,{style:{height:"50%"},justify:"space-around",className:"bottom-row",children:[Object(w.jsx)(y.a,{offset:3,span:6,children:Object(w.jsx)(Qe,{code:"from flask import Flask\napp = Flask(__name__)\n\n@app.route('/')\ndef hello_world():\n    return 'Hello, World!'",language:n?"python":""})}),Object(w.jsx)(y.a,{span:6})]})})]})},_e=n(171),qe=(n(277),function(e){var t=e.onFinish,n=e.code,i=e.language,r=e.interrupt,o=Object(a.useState)(""),c=Object(s.a)(o,2),l=c[0],d=c[1],u=Object(a.useRef)();return Object(a.useEffect)((function(){return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;r.current||a===n.length?(d(n),t&&t(!0)):u.current=setTimeout((function(){d((function(e){return"".concat(e).concat(n[a])})),e(a+1)}),i)}(),function(){clearTimeout(u.current),r.current&&(r.current=!0),t&&t(!0)}}),[t,n,r]),Object(w.jsx)("div",{className:"typed-code",children:Object(w.jsx)(Qe,{code:l,language:i})})}),$e=n(322),Ye=n(323),Xe=(n(278),[{icon:Object(w.jsx)($e.a,{}),text:"Cover Letter",path:"CoverLetter.pdf"},{icon:Object(w.jsx)(Ye.a,{}),text:"Resume",path:"Resume.pdf"}]),Ze=function(){return Object(w.jsx)("div",{className:"download-icons",children:Object(w.jsx)(x.a,{gutter:50,children:Xe.map((function(e,t){return Object(w.jsx)(y.a,{children:Object(w.jsx)(Oe.a,{title:e.text,children:Object(w.jsx)("a",{className:"download-icon",download:!0,href:e.path,children:e.icon})})},t)}))})})},et=(n(279),g.a.Title),tt=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useRef)(!1);return Object(w.jsxs)("section",{id:"about",onDoubleClick:function(){r.current=!0,i(!0)},children:[Object(w.jsx)(x.a,{style:{height:"50px"}}),Object(w.jsxs)(x.a,{justify:"center",className:"top-row",children:[Object(w.jsx)(y.a,{push:3,span:18,children:Object(w.jsx)(et,{level:2,children:Object(w.jsx)(Qe,{code:"<ChristopherHuber />",language:"jsx"})})}),Object(w.jsx)(y.a,{pull:2,span:6,children:Object(w.jsx)(Ve,{toHighlight:n})})]}),Object(w.jsx)(x.a,{className:"code-row",justify:"center",align:"top",children:Object(w.jsx)(y.a,{pull:3,children:Object(w.jsx)(qe,{onFinish:i,code:'let Christopher;\nChristopher =\n  [\n      "Coder", \n      "Poet", \n      "Thinker", \n      "Translator", \n      "Learner", \n      "Strategist"\n    ] && seekingEmployment;',language:"js",interrupt:r})})}),Object(w.jsx)(_e.a,{transitionAppear:!0,transitionName:"fade",children:n&&Object(w.jsx)(x.a,{justify:"center",children:Object(w.jsx)(y.a,{children:Object(w.jsx)(Ze,{})})})})]})},nt=(n(280),function(){var e=Object(a.useRef)(!1);return Object(w.jsxs)("div",{id:"NotFound",children:[Object(w.jsx)(x.a,{style:{height:"50px"}}),Object(w.jsx)(x.a,{className:"code-row",justify:"center",align:"top",children:Object(w.jsx)(y.a,{children:Object(w.jsx)(qe,{code:"# Page Not Found\nraise ValueError",language:"python",interrupt:e})})})]})}),at=n(324),it=n(325),rt={twoToneColor:"#0000",id:"next-page-icon"},st=["home","about","skills","projects"],ot={home:"4500ms",about:"11000ms",skills:"1000ms",projects:"1000ms"};var ct=function(e){var t,n=e.menuSelected,i=e.setSelected,r=e.setModalVisible,o=e.modalVisible,l=Object(c.g)(),d=Object(a.useState)(!1),u=Object(s.a)(d,2),j=u[0],h=u[1],b=st.indexOf(n[0])>-1?n[0]:void 0,p=st[(st.indexOf(b)+1)%st.length],g=b===st[st.length-1]?j?{icon:Object(w.jsx)(it.a,Object(f.a)({},rt)),text:p}:{icon:Object(w.jsx)(m.a,Object(f.a)({},rt)),text:"Contact"}:{icon:Object(w.jsx)(at.a,Object(f.a)({},rt)),text:p},O=Object(w.jsx)(ge.a,{className:"next-page",type:"default",onClick:function(){"home"!==p||j?(i([p]),l.push(p)):(r(!0),setTimeout((function(){return h(!0)}),500))},icon:g.icon});return b?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(Ee.a,{in:!0,style:{transitionDelay:ot[b]},timeout:1e3,children:Object(w.jsx)("p",{style:{textAlign:"right"},children:o?O:Object(w.jsx)(Oe.a,{title:(t=g.text,t.charAt(0).toUpperCase()+t.slice(1)),placement:"bottom",children:O})})})}):null};n(281);var lt=function(){var e=window.location.pathname.slice(11);e=""===e?"home":e;var t=Object(a.useState)(0),n=Object(s.a)(t,2),i=n[0],r=n[1],l=Object(a.useState)([e]),d=Object(s.a)(l,2),u=d[0],j=d[1],h=Object(a.useState)(!1),b=Object(s.a)(h,2),p=b[0],m=b[1];return Object(w.jsx)(o.a,{basename:"/portfolio/",children:Object(w.jsxs)(V,{modalVisible:p,setModalVisible:m,menuSelected:u,setSelected:j,children:[Object(w.jsxs)(c.d,{children:[Object(w.jsx)(c.b,{path:"/",exact:!0,children:Object(w.jsx)(c.a,{to:"/home"})}),Object(w.jsx)(c.b,{path:"/home",children:Object(w.jsx)(Ke,{})}),Object(w.jsx)(c.b,{path:"/about",children:Object(w.jsx)(tt,{})}),Object(w.jsx)(c.b,{path:"/skills",children:Object(w.jsx)(ae,{setCarousel:r,setSelected:j})}),Object(w.jsx)(c.b,{path:"/projects",children:Object(w.jsx)(Ie,{carouselShowing:i,setCarousel:r})}),Object(w.jsx)(c.b,{path:"/404",component:nt}),Object(w.jsx)(c.a,{to:"/404"})]}),Object(w.jsx)(ct,{menuSelected:u,setSelected:j,setModalVisible:m,modalVisible:p},e)]})})};r.a.render(Object(w.jsx)(lt,{}),document.getElementById("root"))}},[[282,1,2]]]);
//# sourceMappingURL=main.290c632a.chunk.js.map