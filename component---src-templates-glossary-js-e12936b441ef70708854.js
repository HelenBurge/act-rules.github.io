(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var n=a(0),r=a.n(n),s=a(202),o=a(201);t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.site,i=a.html,l=a.frontmatter,c=l.title+" | "+n.siteMetadata.title;return r.a.createElement(s.a,null,r.a.createElement(o.a,{title:c,keywords:n.siteMetadata.keywords}),r.a.createElement("div",null,r.a.createElement("h1",null,l.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}})))};var i="2124645073"},199:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var n=a(0),r=a.n(n),s=a(66),o=a.n(s);a.d(t,"a",function(){return o.a});a(200),a(9).default.enqueue;var i=r.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,n=e.query,s=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&s(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,a=e.query,n=e.render,s=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:a,render:n||s,staticQueryData:e})})}},200:function(e,t,a){var n;e.exports=(n=a(205))&&n.default||n},201:function(e,t,a){"use strict";var n=a(206),r=a(0),s=a.n(r),o=a(219),i=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,m=t||c.siteMetadata.description,u=o.length>0?{name:"keywords",content:o.join(", ")}:[],p=[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"}].concat(u).concat(r);return s.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:p},s.a.createElement("meta",{"http-equiv":"Cache-Control",content:"public, max-age=0, must-revalidate"}),s.a.createElement("meta",{"http-equiv":"Pragma",content:"no-cache"}),s.a.createElement("meta",{"http-equiv":"Expires",content:"0"}))}l.defaultProps={lang:"en",meta:[],keywords:[]},t.a=l},202:function(e,t,a){"use strict";var n=a(204),r=a(0),s=a.n(r),o=a(199),i=a(220),l=(a(215),function(e){var t=e.siteTitle;return s.a.createElement("header",{className:"app-header"},s.a.createElement(o.a,{to:"/pages/about"},s.a.createElement("h1",null,t)))});l.defaultProps={siteTitle:""};var c=l,m=a(203),u=(a(216),function(e){e.siteTitle;return s.a.createElement("footer",{className:"app-footer"},s.a.createElement("div",{className:"tags"},s.a.createElement("p",{className:"tag"},"A Community Group of the",s.a.createElement("a",{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"},"World Wide Web Consortium.")),s.a.createElement("p",{className:"tag"},"Developed with the support of the EU-funded"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.w3.org/WAI/"},"WAI-Tools"," ")," ","Project.")),s.a.createElement("div",{className:"logos"},s.a.createElement("a",{lang:"en",className:"logo-w3c",href:"https://www.w3.org/",rel:"noopener noreferrer",target:"_blank"},s.a.createElement("svg",{role:"img","aria-label":"W3C",viewBox:"0 0 68 34",height:"25",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",null,s.a.createElement("path",{d:"m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z"}),s.a.createElement("path",{d:"m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z"}),s.a.createElement("path",{d:"m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z"}),s.a.createElement("path",{d:"m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z"})))),s.a.createElement("a",{lang:"en",className:"logo-wai",href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("span",{className:"wai"},s.a.createElement("span",{className:"wa"},"Web Accessibility")," ",s.a.createElement("span",{className:"i"},s.a.createElement("span",{className:"initieative"},"Initiative")," ",s.a.createElement("span",null,"WAI")))),s.a.createElement("a",{href:m.repository.url,target:"_blank",rel:"noopener noreferrer",className:"logo-github","aria-label":"link to github repository"},s.a.createElement("svg",{enableBackground:"new 0 0 512 512",id:"Layer_1",version:"1.1",width:"25",height:"25",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("g",null,s.a.createElement("path",{d:"M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"}))))))});u.defaultProps={siteTitle:""};var p=u;a(217),a(218);var g=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={showMenu:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.componentDidMount=function(){var e=window.location.hash;if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},l.handleHideShowMenu=function(){this.setState(function(e){return{showMenu:!e.showMenu}})},l.getListItemFromEdges=function(e){return e.map(function(e){var t=e.node,a=t.path,n=t.context;if(!n||!n.title)return null;var r=""+n.title+a;return s.a.createElement("li",{key:r},s.a.createElement(o.a,{activeClassName:"active",to:a},n.title))})},l.render=function(){var e=this,t=this.props.children;return s.a.createElement(o.b,{query:"3094802352",render:function(a){var n=a.getSiteTitle,r=a.getTopLevelNavigation,l=a.getNonRulesNavigation;return s.a.createElement("section",{className:"layout-container"},s.a.createElement(i.a,{query:"(max-width: 600px)",onChange:function(t){return t&&e.state.showMenu&&e.handleHideShowMenu()}}),s.a.createElement(i.a,{query:"(min-width: 601px)",onChange:function(t){return t&&!e.state.showMenu&&e.handleHideShowMenu()}}),s.a.createElement("aside",{className:e.state.showMenu?"show":"hide"},s.a.createElement("button",{className:"nav-hide-show-menu",onClick:function(t){return e.handleHideShowMenu()}},"☰"),s.a.createElement("div",{className:"logo"},s.a.createElement(c,{siteTitle:n.siteMetadata.title})),s.a.createElement("nav",{className:"navigation"},s.a.createElement("ul",null,r.group.map(function(t){return e.getListItemFromEdges(t.edges)}),s.a.createElement("li",null,s.a.createElement("hr",null)),s.a.createElement("li",{key:"rules"},s.a.createElement(o.a,{to:"/rules/",activeClassName:"active"},"Rules")),s.a.createElement("li",{key:"glossary"},s.a.createElement(o.a,{to:"/glossary/",activeClassName:"active"},"Glossary")),s.a.createElement("li",null,s.a.createElement("hr",null)),l.group.map(function(t,a){var n=t.totalCount,r=t.edges,o=t.fieldValue;if(n<=0)return null;var i=o+"-"+a;return s.a.createElement("li",{key:i},s.a.createElement("p",{className:"parent-item"},o),s.a.createElement("ul",null,e.getListItemFromEdges(r)),s.a.createElement("hr",null))})))),s.a.createElement("main",null,s.a.createElement("section",null,t),s.a.createElement(p,null)))},data:n})},r}(s.a.Component);t.a=g},203:function(e){e.exports={name:"act-rules-community",description:"Accessibility conformance testing rules for HTML",version:"1.0.0",author:"ACT-Rules Community",contributors:[{name:"Anne Thyme Nørregaard",url:"https://github.com/annethyme"},{name:"Annika Nietzio",url:"https://github.com/annika-FTB"},{name:"Audrey Maniez",url:"https://github.com/audreymaniez"},{name:"Brian Bors",url:"https://www.linkedin.com/in/brianbors/"},{name:"Bryn Anderson",url:"https://github.com/brynanders"},{name:"Carlos Duarte",url:"https://github.com/carlosapaduarte"},{name:"Corbb O'Connor",url:"https://github.com/corbb"},{name:"Dagfinn Rømen",url:"https://github.com/DagfinnRomen"},{name:"Emma Pratt Richens",url:"https://github.com/EmmaJP"},{name:"Frank Berker",url:"https://github.com/yetanothereye"},{name:"Geir Sindre Fossøy",url:"https://github.com/geirsf"},{name:"Jean-Yves Moyen",url:"https://github.com/Jym77"},{name:"Jey Nandakumar",url:"https://github.com/jkodu"},{name:"John Hicks",url:"https://github.com/john-urbilog"},{name:"Malin Øvrebø",url:"https: //github.com/MaliinO"},{name:"Rafal Charlampowicz",url:"https://github.com/Rafalchar"},{name:"Rob Fentress",url:"https://github.com/robfentress"},{name:"Shadi Abou-Zahra",url:"https://github.com/nitedog"},{name:"Stein Erik Skotkjerra",url:"https://github.com/skotkjerra"},{name:"Wilco Fiers",url:"https://github.com/wilcofiers"}],dependencies:{"act-rules-implementation-access-board":"git+https://git@github.com/act-rules/act-rules-implementation-trusted-tester.git","act-rules-implementation-access-engine":"git+https://git@github.com/act-rules/act-rules-implementation-access-engine.git","act-rules-implementation-alfa":"git+https://git@github.com/act-rules/act-rules-implementation-alfa.git","act-rules-implementation-axe-core":"git+https://git@github.com/act-rules/act-rules-implementation-axe-core.git","act-rules-implementation-qualweb":"git+https://git@github.com/act-rules/act-rules-implementation-qualweb.git","act-rules-implementation-rgaa":"git+https://git@github.com/act-rules/act-rules-implementation-rgaa.git","act-rules-implementation-trusted-tester":"git+https://git@github.com/act-rules/act-rules-implementation-trusted-tester.git",axios:"^0.19.0",commander:"^3.0.0",fastmatter:"^2.1.1",flat:"^4.1.0","fs-extra":"^8.1.0",gatsby:"^2.13.83","gatsby-image":"^2.2.14","gatsby-plugin-manifest":"^2.2.6","gatsby-plugin-offline":"^2.2.7","gatsby-plugin-prefetch-google-fonts":"^1.4.3","gatsby-plugin-react-helmet":"^3.1.5","gatsby-plugin-sass":"^2.1.9","gatsby-plugin-sharp":"^2.2.13","gatsby-remark-autolink-headers":"^2.1.8","gatsby-remark-copy-linked-files":"^2.1.12","gatsby-remark-prismjs":"^3.3.6","gatsby-source-filesystem":"^2.1.9","gatsby-transformer-remark":"^2.6.14","gatsby-transformer-sharp":"^2.2.6","gfm-code-blocks":"^1.0.0",globby:"^10.0.1","is-url":"^1.2.4",jsonld:"^1.6.2","make-dir":"^3.0.0","node-sass":"^4.12.0","normalize.css":"^8.0.1","object-hash":"^1.3.1",prismjs:"^1.17.1","prop-types":"^15.7.2","query-string":"^6.8.2",react:"^16.9.0","react-dom":"^16.9.0","react-helmet":"^5.2.1","react-media":"^1.9.2",showdown:"^1.9.0"},devDependencies:{husky:"^3.0.4",jest:"^24.9.0","jest-extended":"^0.11.2","lint-staged":"^9.2.3",marked:"^0.7.0",prettier:"^1.18.2"},keywords:["WCAG","ACT Rules","Accessibility","W3C"],license:"MIT",scripts:{clean:"gatsby clean",getImplementationAccessEngine:"node ./build/get-implementation --org 'Level Access' --tool 'Access Engine' --path './node_modules/act-rules-implementation-access-engine/report.json'",getImplementationAlfa:"node ./build/get-implementation --org 'Siteimprove' --tool 'Alfa' --path './node_modules/act-rules-implementation-alfa/report.json'",pregetImplementationAxeCore:"npm --prefix './node_modules/act-rules-implementation-axe-core/' run build -- --testsJson ${PWD}/_data/rules-testcases/testcases.json --testsDir ${PWD}/_data/rules-testcases --siteUrl $npm_package_www_url",getImplementationAxeCore:"node ./build/get-implementation --org 'Deque Systems' --tool 'Axe-core' --path './node_modules/act-rules-implementation-axe-core/report.json'",getImplementationRgaa:"node ./build/get-implementation --org 'Access42' --tool 'RGAA 3.0' --path './node_modules/act-rules-implementation-rgaa/reports/*.json'",getImplementationTrustedTester:"node ./build/get-implementation --org 'Trusted Tester' --tool 'Trusted Tester' --path './node_modules/act-rules-implementation-trusted-tester/reports/*.json'",getImplementationQualWeb:"node ./build/get-implementation --org 'LASIGE, Faculdade de Ciências da Universidade de Lisboa' --tool 'QualWeb' --path './node_modules/act-rules-implementation-qualweb/reports/*.json'",getImplementations:"npm run getImplementationAccessEngine && npm run getImplementationAlfa && npm run getImplementationAxeCore && npm run getImplementationRgaa && npm run getImplementationTrustedTester && npm run getImplementationQualWeb",createImplementationsMetrics:"node ./build/create-implementation-metrics",implementations:"npm run getImplementations && npm run createImplementationsMetrics",createTestcases:"node ./build/create-testcases",createGlossary:"node ./build/create-glossary-usages",createRulesUsages:"node ./build/create-rules-usages.js",getWcagData:"node ./build/get-wcag-data",getData:"npm run getWcagData && npm run createTestcases && npm run createGlossary && npm run createRulesUsages && npm run implementations",predevelop:"npm run getData",develop:"gatsby develop",prebuild:"npm run clean && npm run getData",build:"gatsby build",format:"prettier --write *.{json,md,js,jsx} './{_data,_rules,build,gatsby,pages,src,test-assets}/**/*.{json,md,js,jsx}'",start:"npm run clean && npm run develop",serve:"gatsby serve",pretest:"npm run getData",test:"jest --coverage"},homepage:"https://github.com/act-rules/act-rules.github.io",repository:{type:"git",url:"https://github.com/act-rules/act-rules.github.io"},bugs:{url:"https://github.com/act-rules/act-rules.github.io/issues"},pulls:{url:"https://github.com/act-rules/act-rules.github.io/pulls"},www:{url:"https://act-rules.github.io"},config:{references:{wcag21:"https://raw.githubusercontent.com/w3c/wai-wcag-quickref/gh-pages/_data/wcag21.json"},"rule-format-metadata":{"input-aspects":{default:"https://www.w3.org/TR/act-rules-aspects/#intro","HTTP Messages":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-http","DOM Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom","CSS Styling":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-css","Accessibility Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility",Language:"https://www.w3.org/TR/act-rules-aspects/#input-aspects-text"}}},jest:{verbose:!0,bail:!0,setupFilesAfterEnv:["jest-extended"],testPathIgnorePatterns:["<rootDir>/test-utils/","<rootDir>/.cache/","<rootDir>/.public/"]},"lint-staged":{"*.{md,json,js,html}":["prettier --write","git add"]}}},204:function(e){e.exports={data:{getSiteTitle:{siteMetadata:{title:"ACT-Rules Community"}},getTopLevelNavigation:{group:[{fieldValue:"default",totalCount:3,edges:[{node:{path:"/pages/about/",context:{sourceInstanceName:"pages",title:"About Us",markdownType:"default"}}},{node:{path:"/pages/contribute/",context:{sourceInstanceName:"pages",title:"How to Contribute",markdownType:"default"}}},{node:{path:"/pages/license/",context:{sourceInstanceName:"pages",title:"License",markdownType:"default"}}}]}]},getNonRulesNavigation:{group:[{fieldValue:"documentation",totalCount:8,edges:[{node:{path:"/pages/design/atomic-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/design/composite-template-empty/",context:{title:"",markdownType:"documentation"}}},{node:{path:"/pages/structure/accessibility-support/",context:{title:"Accessibility Support",markdownType:"documentation"}}},{node:{path:"/pages/design/definition-of-done/",context:{title:"Definition of Done",markdownType:"documentation"}}},{node:{path:"/pages/design/process/",context:{title:"Process [DRAFT]",markdownType:"documentation"}}},{node:{path:"/pages/design/rule-design/",context:{title:"Rule Design",markdownType:"documentation"}}},{node:{path:"/pages/design/rule-template/",context:{title:"Rule Template",markdownType:"documentation"}}},{node:{path:"/pages/structure/terminology/",context:{title:"Terminology",markdownType:"documentation"}}}]},{fieldValue:"implementations",totalCount:7,edges:[{node:{path:"/pages/implementations/overview/",context:{title:"ACT Implementations",markdownType:"implementations"}}},{node:{path:"/pages/implementations/mapping/",context:{title:"Mapping To Rule",markdownType:"implementations"}}},{node:{path:"/pages/implementations/earl-reports/",context:{title:"Reporting Format",markdownType:"implementations"}}},{node:{path:"/pages/implementations/reporting/",context:{title:"Submit an Implementation",markdownType:"implementations"}}},{node:{path:"/pages/implementations/testcases/",context:{title:"Test Cases",markdownType:"implementations"}}},{node:{path:"/pages/implementations/tools/",context:{title:"Testing Tools",markdownType:"implementations"}}},{node:{path:"/pages/implementations/wcag-em-tool/",context:{title:"WCAG-EM Report Tool",markdownType:"implementations"}}}]}]}}}},205:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),s=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e){e.exports={data:{site:{siteMetadata:{title:"ACT-Rules Community",description:"Accessibility conformance testing rules for HTML",author:"ACT-Rules Community"}}}}}}]);
//# sourceMappingURL=component---src-templates-glossary-js-e12936b441ef70708854.js.map