"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4],{2522:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=A(4848),r=A(8453);const i={slug:"simple-linear-regression",title:"Simple Linear Regression",authors:["srimanth"],tags:["machine-learning"]},a=void 0,o={permalink:"/blog/simple-linear-regression",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2020-05-05-simple-linear-regression/index.md",source:"@site/blog/2020-05-05-simple-linear-regression/index.md",title:"Simple Linear Regression",description:"Linear regression is the simplest form of a classification problem. We have many techniques to do this type of regression. Today we are going to learn how to use the PyTorch API to help us do this classification.",date:"2020-05-05T00:00:00.000Z",tags:[{inline:!1,label:"Machine Learning",permalink:"/blog/tags/machine-learning",description:"Machine Learning"}],readingTime:1.075,hasTruncateMarker:!0,authors:[{name:"Srimanth Tenneti",url:"https://www.linkedin.com/in/srimanth-tenneti-662b7117b/",title:"DSC CVR Lead 2021-22",imageURL:"/img/team/SrimanthTenneti.jpg",key:"srimanth",page:null}],frontMatter:{slug:"simple-linear-regression",title:"Simple Linear Regression",authors:["srimanth"],tags:["machine-learning"]},unlisted:!1,prevItem:{title:"Java",permalink:"/blog/java"},nextItem:{title:"Simple CNN using PyTorch",permalink:"/blog/simple-cnn-using-pytorch"}},s={authorsImageUrls:[void 0]},l=[];function c(e){const t={img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Linear regression is the simplest form of a classification problem. We have many techniques to do this type of regression. Today we are going to learn how to use the PyTorch API to help us do this classification."}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Linear regression",src:A(8407).A+"",width:"391",height:"262"})})}),"\n",(0,n.jsx)(t.p,{children:"The core concept behind the linear regression is the line equation. Y = m * x + C, Where Y , x = point on the line, m = slope , C = Y intercept. So, from the above equation we can create a line just by finding the optimal values of m,C."}),"\n",(0,n.jsx)(t.p,{children:"So we create a neural network and initialize it with random weights and biases.These represent the m,C of the line."}),"\n",(0,n.jsx)(t.p,{children:"In the above illustration it is clearly evident that the m,C are not able to help us classify the data correctly. So, any prediction deduced from the network is going to be wrong. Now, we have to train the network to get the optimal values of the m,C (weights and bias)."}),"\n",(0,n.jsx)(t.p,{children:"While training networks for simple regression problems we need not worry much about over-fitting in most of the cases ,but if the number of epochs are not enough then the model might under-fit. In most of the cases 100\u2013200 epochs are more than enough."})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8407:(e,t,A)=>{A.d(t,{A:()=>n});const n="data:image/png;base64,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"},8453:(e,t,A)=>{A.d(t,{R:()=>a,x:()=>o});var n=A(6540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);