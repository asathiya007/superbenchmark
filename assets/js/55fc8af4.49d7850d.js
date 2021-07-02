(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[916],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),u=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5847:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],c={id:"run-superbench"},s="Run SuperBench",u={unversionedId:"getting-started/run-superbench",id:"getting-started/run-superbench",isDocsHomePage:!1,title:"Run SuperBench",description:"Having prepared benchmark configuration and inventory files,",source:"@site/../docs/getting-started/run-superbench.md",sourceDirName:"getting-started",slug:"/getting-started/run-superbench",permalink:"/superbenchmark/docs/getting-started/run-superbench",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/getting-started/run-superbench.md",version:"current",frontMatter:{id:"run-superbench"},sidebar:"docs",previous:{title:"Configuration",permalink:"/superbenchmark/docs/getting-started/configuration"},next:{title:"Micro Benchmarks",permalink:"/superbenchmark/docs/benchmarks/micro-benchmarks"}},p=[{value:"Deploy",id:"deploy",children:[]},{value:"Run",id:"run",children:[]}],l={toc:p};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"run-superbench"},"Run SuperBench"),(0,o.kt)("p",null,"Having prepared benchmark configuration and inventory files,\nyou can start to run SuperBench over all managed nodes."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Leveraging ",(0,o.kt)("inlineCode",{parentName:"p"},"sb deploy")," command, we can easily deploy SuperBench environment to all managed nodes.\nAfter running the following command, SuperBench will automatically access all nodes, pull container image and prepare container."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sb deploy -f local.ini\n")),(0,o.kt)("p",null,"Alternatively, to run on remote nodes, use the corresponding inventory file instead."),(0,o.kt)("p",null,"If you are using password for SSH and cannot specify private key in inventory,\nor your private key requires a passphase before use, you can do"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sb deploy -f remote.ini --host-password [password]\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should deploy corresponding Docker image to use release version, for example,"),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"sb deploy -f local.ini -i superbench/superbench:v0.2.0-cuda11.1.1")))),(0,o.kt)("h2",{id:"run"},"Run"),(0,o.kt)("p",null,"After deployment, you can start to run the SuperBench benchmarks on all managed nodes using ",(0,o.kt)("inlineCode",{parentName:"p"},"sb run")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sb run -f local.ini -c resnet.yaml\n")))}d.isMDXComponent=!0}}]);