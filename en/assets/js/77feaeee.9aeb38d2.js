"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[5849],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=m(a),k=r,d=s["".concat(p,".").concat(k)]||s[k]||u[k]||i;return a?n.createElement(d,l(l({ref:e},c),{},{components:a})):n.createElement(d,l({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},48173:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={title:"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u7684\u76d1\u63a7\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},l=void 0,o={permalink:"/en/blog/2023/02/02/monitor-dynamic-tp",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-02-02-monitor-dynamic-tp.md",source:"@site/blog/2023-02-02-monitor-dynamic-tp.md",title:"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u7684\u76d1\u63a7\u5b9e\u8df5",description:"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"opensource",permalink:"/en/blog/tags/opensource"},{label:"practice",permalink:"/en/blog/tags/practice"}],readingTime:7.845,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u7684\u76d1\u63a7\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},nextItem:{title:"\u4f7f\u7528 HertzBeat \u5bf9 API \u7f51\u5173 Apache ShenYu \u7684\u76d1\u63a7\u5b9e\u8df5",permalink:"/en/blog/2023/01/08/monitor-shenyu"}},p={authorsImageUrls:[void 0]},m=[{value:"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",id:"\u4f7f\u7528-hertzbeat-\u5bf9-\u7ebf\u7a0b\u6c60\u6846\u67b6-dynamictp-\u8fdb\u884c\u76d1\u63a7\u5b9e\u8df55\u5206\u949f\u641e\u5b9a",level:2},{value:"\u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u4ecb\u7ecd",id:"\u7ebf\u7a0b\u6c60\u6846\u67b6-dynamictp-\u4ecb\u7ecd",level:3},{value:"HertzBeat \u4ecb\u7ecd",id:"hertzbeat-\u4ecb\u7ecd",level:3},{value:"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u76d1\u63a7 DynamicTp",id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u76d1\u63a7-dynamictp",level:3},{value:"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 DynamicTp \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002",id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-dynamictp-\u73af\u5883\u548c-hertzbeat-\u73af\u5883",level:4},{value:"\u4e00. \u5728 DynamicTp \u7aef\u66b4\u9732\u51fa<code>DynamicTp</code>\u6307\u6807\u63a5\u53e3 <code>/actuator/dynamic-tp</code>\uff0c\u5b83\u5c06\u63d0\u4f9b metrics \u63a5\u53e3\u6570\u636e\u3002",id:"\u4e00-\u5728-dynamictp-\u7aef\u66b4\u9732\u51fadynamictp\u6307\u6807\u63a5\u53e3-actuatordynamic-tp\u5b83\u5c06\u63d0\u4f9b-metrics-\u63a5\u53e3\u6570\u636e",level:4},{value:"\u4e8c. \u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0 DynamicTp \u7ebf\u7a0b\u6c60\u76d1\u63a7",id:"\u4e8c-\u5728-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0-dynamictp-\u7ebf\u7a0b\u6c60\u76d1\u63a7",level:4},{value:"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 DynamicTp\u7ebf\u7a0b\u6c60 \u6307\u6807\u9608\u503c\u544a\u8b66",id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-dynamictp\u7ebf\u7a0b\u6c60-\u6307\u6807\u9608\u503c\u544a\u8b66",level:4},{value:"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee",id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],c={toc:m};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4f7f\u7528-hertzbeat-\u5bf9-\u7ebf\u7a0b\u6c60\u6846\u67b6-dynamictp-\u8fdb\u884c\u76d1\u63a7\u5b9e\u8df55\u5206\u949f\u641e\u5b9a"},"\u4f7f\u7528 HertzBeat \u5bf9 \u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01"),(0,r.kt)("h3",{id:"\u7ebf\u7a0b\u6c60\u6846\u67b6-dynamictp-\u4ecb\u7ecd"},"\u7ebf\u7a0b\u6c60\u6846\u67b6 DynamicTp \u4ecb\u7ecd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DynamicTp \u662fJvm\u8bed\u8a00\u7684\u57fa\u4e8e\u914d\u7f6e\u4e2d\u5fc3\u7684\u8f7b\u91cf\u7ea7\u52a8\u6001\u7ebf\u7a0b\u6c60\uff0c\u5185\u7f6e\u76d1\u63a7\u544a\u8b66\u529f\u80fd\uff0c\u53ef\u901a\u8fc7SPI\u81ea\u5b9a\u4e49\u6269\u5c55\u5b9e\u73b0\u3002  ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u8fd0\u884c\u4e2d\u7ebf\u7a0b\u6c60\u53c2\u6570\u7684\u52a8\u6001\u4fee\u6539\uff0c\u5b9e\u65f6\u751f\u6548\u3002   "),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u76d1\u63a7\u7ebf\u7a0b\u6c60\u7684\u8fd0\u884c\u72b6\u6001\uff0c\u89e6\u53d1\u8bbe\u7f6e\u7684\u62a5\u8b66\u7b56\u7565\u65f6\u62a5\u8b66\uff0c\u62a5\u8b66\u4fe1\u606f\u63a8\u9001\u529e\u516c\u5e73\u53f0\u3002   "),(0,r.kt)("li",{parentName:"ul"},"\u5b9a\u65f6\u91c7\u96c6\u7ebf\u7a0b\u6c60\u6307\u6807\u6570\u636e\uff0c\u914d\u5408\u50cf grafana \u8fd9\u79cd\u53ef\u89c6\u5316\u76d1\u63a7\u5e73\u53f0\u505a\u5927\u76d8\u76d1\u63a7\u3002    ")),(0,r.kt)("h3",{id:"hertzbeat-\u4ecb\u7ecd"},"HertzBeat \u4ecb\u7ecd"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HertzBeat \u662f\u4e00\u6b3e\u5f00\u6e90\uff0c\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\uff0c\u65e0\u9700Agent\uff0c\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002    ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0c\u4e91\u539f\u751f\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66\u77ed\u4fe1 Slack Discord Telegram)\u3002    "),(0,r.kt)("li",{parentName:"ul"},"\u5176\u5c06Http,Jmx,Ssh,Snmp,Jdbc\u7b49\u534f\u8bae\u89c4\u8303\u53ef\u914d\u7f6e\u5316\uff0c\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u4f7f\u7528\u8fd9\u4e9b\u534f\u8bae\u53bb\u81ea\u5b9a\u4e49\u91c7\u96c6\u4efb\u4f55\u60a8\u60f3\u8981\u91c7\u96c6\u7684\u6307\u6807\u3002\u60a8\u76f8\u4fe1\u53ea\u9700\u914d\u7f6eYML\u5c31\u80fd\u7acb\u523b\u9002\u914d\u4e00\u4e2aK8s\u6216Docker\u7b49\u65b0\u7684\u76d1\u63a7\u7c7b\u578b\u5417\uff1f   "),(0,r.kt)("li",{parentName:"ul"},"HertzBeat \u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002  ")),(0,r.kt)("h3",{id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u76d1\u63a7-dynamictp"},"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u76d1\u63a7 DynamicTp"),(0,r.kt)("h4",{id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-dynamictp-\u73af\u5883\u548c-hertzbeat-\u73af\u5883"},"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 DynamicTp \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DynamicTp ",(0,r.kt)("a",{parentName:"li",href:"https://dynamictp.cn/guide/use/quick-start.html"},"\u96c6\u6210\u63a5\u5165\u6587\u6863"),"   "),(0,r.kt)("li",{parentName:"ul"},"HertzBeat ",(0,r.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u90e8\u7f72\u5b89\u88c5\u6587\u6863"),"   ")),(0,r.kt)("h4",{id:"\u4e00-\u5728-dynamictp-\u7aef\u66b4\u9732\u51fadynamictp\u6307\u6807\u63a5\u53e3-actuatordynamic-tp\u5b83\u5c06\u63d0\u4f9b-metrics-\u63a5\u53e3\u6570\u636e"},"\u4e00. \u5728 DynamicTp \u7aef\u66b4\u9732\u51fa",(0,r.kt)("inlineCode",{parentName:"h4"},"DynamicTp"),"\u6307\u6807\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"h4"},"/actuator/dynamic-tp"),"\uff0c\u5b83\u5c06\u63d0\u4f9b metrics \u63a5\u53e3\u6570\u636e\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5f00\u542f SpringBoot Actuator Endpoint \u66b4\u9732\u51fa",(0,r.kt)("inlineCode",{parentName:"li"},"DynamicTp"),"\u6307\u6807\u63a5\u53e3  ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u91cd\u542f\u540e\u6d4b\u8bd5\u8bbf\u95ee\u6307\u6807\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"ip:port/actuator/dynamic-tp")," \u662f\u5426\u6709\u54cd\u5e94json\u6570\u636e\u5982\u4e0b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "poolName": "commonExecutor",\n    "corePoolSize": 1,\n    "maximumPoolSize": 1,\n    "queueType": "LinkedBlockingQueue",\n    "queueCapacity": 2147483647,\n    "queueSize": 0,\n    "fair": false,\n    "queueRemainingCapacity": 2147483647,\n    "activeCount": 0,\n    "taskCount": 0,\n    "completedTaskCount": 0,\n    "largestPoolSize": 0,\n    "poolSize": 0,\n    "waitTaskCount": 0,\n    "rejectCount": 0,\n    "rejectHandlerName": null,\n    "dynamic": false,\n    "runTimeoutCount": 0,\n    "queueTimeoutCount": 0\n  },\n  {\n    "maxMemory": "4 GB",\n    "totalMemory": "444 MB",\n    "freeMemory": "250.34 MB",\n    "usableMemory": "3.81 GB"\n  }\n]\n')),(0,r.kt)("h4",{id:"\u4e8c-\u5728-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0-dynamictp-\u7ebf\u7a0b\u6c60\u76d1\u63a7"},"\u4e8c. \u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0 DynamicTp \u7ebf\u7a0b\u6c60\u76d1\u63a7"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u65b0\u589e DynamicTp \u76d1\u63a7  ")),(0,r.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u4e2d\u95f4\u4ef6\u76d1\u63a7 -> DynamicTp\u76d1\u63a7 -> \u65b0\u589eDynamicTp\u76d1\u63a7  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(87232).Z,width:"4064",height:"2166"}),"   "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u76d1\u63a7 DynamicTp \u6240\u9700\u53c2\u6570   ")),(0,r.kt)("p",null,"\u5728\u76d1\u63a7\u9875\u9762\u586b\u5199 DynamicTp ",(0,r.kt)("strong",{parentName:"p"},"\u670d\u52a1IP"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u7aef\u53e3"),"(\u9ed8\u8ba48080)\uff0c\u6700\u540e\u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u5373\u53ef\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5176\u4ed6\u53c2\u6570\u5982",(0,r.kt)("strong",{parentName:"p"},"\u91c7\u96c6\u95f4\u9694"),"\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u65f6\u95f4"),"\u7b49\u53ef\u4ee5\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/shenyu/"},"\u5e2e\u52a9\u6587\u6863")," ",(0,r.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/shenyu/"},"https://hertzbeat.com/docs/help/shenyu/"),"   "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(87232).Z,width:"4064",height:"2166"}),"    "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u2705,\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6dfb\u52a0\u597d\u5bf9 DynamicTp \u7684\u76d1\u63a7\u4e86\uff0c\u67e5\u770b\u76d1\u63a7\u5217\u8868\u5373\u53ef\u770b\u5230\u6211\u4eec\u7684\u6dfb\u52a0\u9879\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(41225).Z,width:"4064",height:"2166"}),"  "),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u76d1\u63a7\u5217\u8868\u9879\u7684",(0,r.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"->",(0,r.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u8be6\u60c5\u56fe\u6807")," \u5373\u53ef\u6d4f\u89c8 DynamicTp\u7ebf\u7a0b\u6c60 \u7684\u5b9e\u65f6\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(46925).Z,width:"4064",height:"2166"}),"  "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u5386\u53f2\u8be6\u60c5TAB")," \u5373\u53ef\u6d4f\u89c8 DynamicTp\u7ebf\u7a0b\u6c60 \u7684\u5386\u53f2\u76d1\u63a7\u6307\u6807\u6570\u636e\u56fe\u8868\ud83d\udcc8\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(92641).Z,width:"4064",height:"2166"}),"      "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(89397).Z,width:"4064",height:"2166"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DONE\uff01\u5b8c\u6210\u5566\uff01\u901a\u8fc7\u4e0a\u9762\u51e0\u6b65\uff0c\u603b\u7ed3\u8d77\u6765\u5176\u5b9e\u4e5f\u5c31\u53ea\u7528\u4e24\u6b65"),"  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65\u66b4\u9732 DynamicTp \u7aef",(0,r.kt)("inlineCode",{parentName:"strong"},"metrics"),"\u7aef\u70b9",(0,r.kt)("inlineCode",{parentName:"strong"},"/actuator/dynamic-tp")),"   "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65\u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u914d\u7f6eIP\u7aef\u53e3\u6dfb\u52a0\u76d1\u63a7\u5373\u53ef"),"         ")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u4e0a\u9762\u7684\u4e24\u6b65\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5bf9 DynamicTp \u7684\u76d1\u63a7\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 HertzBeat \u968f\u65f6\u67e5\u770b\u76d1\u63a7\u8be6\u60c5\u6307\u6807\u4fe1\u606f\u6765\u89c2\u6d4b\u5176\u670d\u52a1\u72b6\u6001\u3002\n\u5f53\u7136\u53ea\u662f\u770b\u80af\u5b9a\u662f\u4e0d\u5b8c\u7f8e\u7684\uff0c\u76d1\u63a7\u5f80\u5f80\u4f34\u968f\u7740\u544a\u8b66\u9608\u503c\uff0c\u5f53 DynamicTp \u7684\u7ebf\u7a0b\u6c60\u6307\u6807\u8d85\u51fa\u6211\u4eec\u7684\u671f\u671b\u503c\u6216\u5f02\u5e38\u65f6\uff0c\u80fd\u53ca\u65f6\u7684\u901a\u77e5\u5230\u6211\u4eec\u5bf9\u5e94\u7684\u8d1f\u8d23\u4eba\uff0c\u8d1f\u8d23\u4eba\u6536\u5230\u901a\u77e5\u5904\u7406\u95ee\u9898\uff0c\u8fd9\u6837\u624d\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u76d1\u63a7\u544a\u8b66\u6d41\u7a0b\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u4e00\u6b65\u4e00\u6b65\u6f14\u793a\u5982\u4f55\u914d\u7f6e HertzBeat \u7cfb\u7edf\u91cc\u7684\u9608\u503c\u544a\u8b66\u901a\u77e5\uff0c\u8ba9 DynamicTp\u7ebf\u7a0b\u6c60 \u7684\u6307\u6807\u5f02\u5e38\u65f6\uff0c\u53ca\u65f6\u901a\u77e5\u7ed9\u6211\u4eec"),"     "),(0,r.kt)("h4",{id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-dynamictp\u7ebf\u7a0b\u6c60-\u6307\u6807\u9608\u503c\u544a\u8b66"},"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 DynamicTp\u7ebf\u7a0b\u6c60 \u6307\u6807\u9608\u503c\u544a\u8b66"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9\u67d0\u4e2a\u91cd\u8981\u6307\u6807\u914d\u7f6e\u544a\u8b66\u9608\u503c     ")),(0,r.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u9608\u503c -> \u65b0\u589e\u9608\u503c  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9\u914d\u7f6e\u7684\u6307\u6807\u5bf9\u8c61\uff0cDynamicTp\u76d1\u63a7\u4e3b\u8981\u662f\u4e00\u4e9b\u7ebf\u7a0b\u6c60\u76f8\u5173\u6307\u6807\uff0c\u6211\u4eec\u4e3e\u4f8b\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"li"},"\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6570\u91cf")," ",(0,r.kt)("inlineCode",{parentName:"li"},"process_open_fds")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," \u8fd9\u4e2a\u6307\u6807\u8fdb\u884c\u9608\u503c\u8bbe\u7f6e\uff0c \u5f53\u670d\u52a1\u7aef\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\u5927\u4e8e3000\u65f6\u53d1\u51fa\u544a\u8b66\u3002       "),(0,r.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u5c31\u914d\u7f6e\u5f53\u6b64\u6307\u6807",(0,r.kt)("inlineCode",{parentName:"li"},"process_open_fds")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"value>3000")," \u65f6\u53d1\u51fa\u544a\u8b66\uff0c\u544a\u8b66\u7ea7\u522b\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u8b66\u544a\u544a\u8b66"),"\uff0c\u4e09\u6b21\u5373\u89e6\u53d1\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\u3002  ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(83156).Z,width:"4064",height:"2166"}),"    "),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6d88\u606f\u901a\u77e5\u63a5\u6536\u4eba")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u63a5\u6536\u4eba\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u77e5\u9053\u8981\u53d1\u7ed9\u8c01\uff0c\u7528\u4ec0\u4e48\u65b9\u5f0f\u53d1\u3002  ")),(0,r.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u901a\u77e5 -> \u544a\u8b66\u63a5\u6536\u4eba -> \u65b0\u589e\u63a5\u6536\u4eba  "),(0,r.kt)("p",null,"\u6d88\u606f\u901a\u77e5\u65b9\u5f0f\u652f\u6301 ",(0,r.kt)("strong",{parentName:"p"},"\u90ae\u4ef6\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\uff0cWebHook\uff0c\u77ed\u4fe1"),"\u7b49\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5e38\u7528\u7684\u9489\u9489\u4e3a\u4f8b\u3002  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u7167\u6b64",(0,r.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"\u5e2e\u52a9\u6587\u6863")," ",(0,r.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," \u5728\u9489\u9489\u7aef\u914d\u7f6e\u673a\u5668\u4eba\uff0c\u8bbe\u7f6e\u5b89\u5168\u81ea\u5b9a\u4e49\u5173\u952e\u8bcd",(0,r.kt)("inlineCode",{parentName:"li"},"HertzBeat"),"\uff0c\u83b7\u53d6\u5bf9\u5e94",(0,r.kt)("inlineCode",{parentName:"li"},"access_token"),"\u503c\u3002 "),(0,r.kt)("li",{parentName:"ul"},"\u5728 HertzBeat \u914d\u7f6e\u63a5\u6536\u4eba\u53c2\u6570\u5982\u4e0b\u3002  ")),(0,r.kt)("p",null,"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\u65b9\u5f0f\u3011->\u3010\u8bbe\u7f6e\u9489\u9489\u673a\u5668\u4ebaACCESS_TOKEN\u3011-> \u3010\u786e\u5b9a\u3011"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(41711).Z,width:"3436",height:"890"}),"    "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011 ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u914d\u7f6e\u544a\u8b66\u901a\u77e5\u7b56\u7565\uff0c\u8ba9\u544a\u8b66\u6d88\u606f\u4e0e\u63a5\u6536\u4eba\u7ed1\u5b9a\uff0c\u8fd9\u6837\u5c31\u80fd\u51b3\u5b9a\u54ea\u4e9b\u544a\u8b66\u53d1\u7ed9\u54ea\u4e2a\u4eba\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hertzbeat",src:a(60315).Z,width:"3436",height:"1088"}),"    "),(0,r.kt)("h3",{id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u53ee\u53ee\u53ee\u53ee"},"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u5566\u3002\u53ee\u53ee\u53ee\u53ee"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[HertzBeat\u544a\u8b66\u901a\u77e5]\n\u544a\u8b66\u76ee\u6807\u5bf9\u8c61 : shenyu.process_open_fds.value\n\u6240\u5c5e\u76d1\u63a7ID : 205540620349696\n\u6240\u5c5e\u76d1\u63a7\u540d\u79f0 : SHENYU_localhost\n\u544a\u8b66\u7ea7\u522b : \u8b66\u544a\u544a\u8b66\n\u544a\u8b66\u89e6\u53d1\u65f6\u95f4 : 2023-01-08 22:17:06\n\u5185\u5bb9\u8be6\u60c5 : \u8bf7\u6ce8\u610f\u26a0\ufe0f ShenYu\u7f51\u5173\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u6570\u91cf\u4e3a 3044 \u8d85\u8fc73000\n")),(0,r.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u7bc7\u5b9e\u8df5\u6587\u7ae0\u5e26\u6211\u4eec\u4f53\u9a8c\u4e86\u5982\u4f55\u4f7f\u7528 HertzBeat \u76d1\u63a7 DynamicTp\u7ebf\u7a0b\u6c60 \u6307\u6807\u6570\u636e\uff0c\u53ef\u4ee5\u53d1\u73b0\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7-\u544a\u8b66-\u901a\u77e5")," \u96c6\u4e00\u4f53\u7684 HertzBeat \u5728\u64cd\u4f5c\u4e0e\u4f7f\u7528\u65b9\u9762\u66f4\u52a0\u7684\u4fbf\u6377\uff0c\u5728\u9875\u9762\u4e0a\u7b80\u5355\u70b9\u4e00\u70b9\u5c31\u80fd\u628a DynamicTp\u7ebf\u7a0b\u6c60 \u7eb3\u5165\u76d1\u63a7\uff0c\u518d\u4e5f\u4e0d\u9700\u8981\u90e8\u7f72\u591a\u4e2a\u7ec4\u4ef6\uff0c\u5199\u591a\u4e2a\u6709\u95e8\u69db\u7684YML\u914d\u7f6e\u6587\u4ef6\u4e86\u3002  ")),(0,r.kt)("p",null,"DynamicTp Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/dynamic-tp"},"https://github.com/dromara/dynamic-tp"),(0,r.kt)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b22\u8fce\u4e86\u89e3\u4f7f\u7528Star\u652f\u6301\u54e6\uff01")),(0,r.kt)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat \uff1a",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")))}u.isMDXComponent=!0},41711:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},87232:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-1-9b12c5875c4c6bb3863f7e4efacb0ab6.png"},41225:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-3-f0835dba46e9e644bbad609fea757d2d.png"},46925:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-4-0300bcf78c5e2f606ab780bec8a31757.png"},92641:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-5-959d049b8246df725b9a7ebfb993ae71.png"},89397:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-6-78533ff8941232b1be80110474edfe17.png"},83156:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/monitor-shenyu-7-17d6e2393770eb0bfe6822e22c70d924.png"}}]);