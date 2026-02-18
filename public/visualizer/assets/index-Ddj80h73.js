var _e=Object.defineProperty;var Ue=(n,t,i)=>t in n?_e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var ve=(n,t,i)=>Ue(n,typeof t!="symbol"?t+"":t,i);import{W as Fe,j as e,F as fe,a as ge,b as ze,L as Y,c as Ge,d as Je,u as ue,e as te,P as Xe,m as J,f as Qe,g as We,h as Ke,S as Ye,l as Ze,r as h,i as le,k as et,n as ce,v as de,o as ae,p as xe,q as Re,s as tt,t as He,w as qe,x as it,y as nt,z as ye,A as Ne,B as oe,C as re,D as we,E as rt,G as st,H as Oe,I as Ce,J as ke,K as Ae,M as Te,N as Le,O as De,Q as at,R as ot,T as lt,U as ct,V as dt,X as ht,Y as ut,Z as pt,_ as W,$ as je,a0 as mt}from"./vendor-CM3QRYyQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=i(a);fetch(a.href,l)}})();class Z extends Fe.Component{constructor(i){super(i);ve(this,"handleRetry",()=>{this.setState({hasError:!1,error:null,errorInfo:null,showDetails:!1})});ve(this,"toggleDetails",()=>{this.setState({showDetails:!this.state.showDetails})});this.state={hasError:!1,error:null,errorInfo:null,showDetails:!1}}static getDerivedStateFromError(i){return{hasError:!0}}componentDidCatch(i,s){const a={error:i.toString(),stack:i.stack,componentStack:s.componentStack,timestamp:new Date().toISOString(),userAgent:navigator.userAgent,url:window.location.href};console.error("🔥 ErrorBoundary caught an error:",a),this.setState({error:i,errorInfo:s})}render(){return this.state.hasError?e.jsxs("div",{className:"error-boundary",style:{background:"var(--color-card-bg, #1A1A2E)",border:"2px solid var(--color-error, #ff6b6b)",borderRadius:"12px",padding:"2rem",margin:"2rem",textAlign:"center",color:"var(--color-text, #ffffff)",fontFamily:"inherit"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"1rem"},children:"⚠️"}),e.jsx("h2",{style:{color:"var(--color-error, #ff6b6b)",marginBottom:"1rem",fontSize:"1.5rem"},children:"Oops! Something went wrong"}),e.jsx("p",{style:{marginBottom:"1.5rem",fontSize:"1rem",color:"var(--color-text-secondary, #ccc)"},children:"We're sorry, but there was an error with this visualization. This usually happens due to invalid input or a temporary glitch."}),e.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",marginBottom:"1rem"},children:[e.jsx("button",{onClick:this.handleRetry,style:{background:"var(--color-primary, #00D4AA)",color:"white",border:"none",padding:"0.75rem 1.5rem",borderRadius:"6px",cursor:"pointer",fontSize:"1rem",fontWeight:"bold",transition:"all 0.2s ease"},onMouseOver:i=>i.target.style.transform="scale(1.05)",onMouseOut:i=>i.target.style.transform="scale(1)",children:"🔄 Try Again"}),e.jsx("button",{onClick:this.toggleDetails,style:{background:"transparent",color:"var(--color-text-secondary, #ccc)",border:"1px solid var(--color-border, #555)",padding:"0.75rem 1.5rem",borderRadius:"6px",cursor:"pointer",fontSize:"1rem",transition:"all 0.2s ease"},children:this.state.showDetails?"📄 Hide Details":"🔍 Show Details"})]}),this.state.showDetails&&e.jsxs("details",{open:!0,style:{textAlign:"left",background:"rgba(0, 0, 0, 0.3)",padding:"1rem",borderRadius:"6px",marginTop:"1rem",fontSize:"0.9rem",fontFamily:"monospace"},children:[e.jsx("summary",{style:{marginBottom:"0.5rem",cursor:"pointer"},children:"Error Details"}),e.jsx("div",{style:{whiteSpace:"pre-wrap",color:"#ff6b6b"},children:this.state.error&&this.state.error.toString()}),this.state.errorInfo&&e.jsx("div",{style:{whiteSpace:"pre-wrap",marginTop:"1rem",color:"#ffa500"},children:this.state.errorInfo.componentStack})]})]}):this.props.children}}const ft="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20300'%20width='400'%20height='300'%3e%3cdefs%3e%3cfilter%20id='node-glow'%20x='-50%25'%20y='-50%25'%20width='200%25'%20height='200%25'%3e%3cfeGaussianBlur%20stdDeviation='2'%20result='blur'%20in='SourceGraphic'/%3e%3cfeMerge%3e%3cfeMergeNode%20in='blur'/%3e%3cfeMergeNode%20in='SourceGraphic'/%3e%3c/feMerge%3e%3c/filter%3e%3c/defs%3e%3c!--%20Background%20removed%20--%3e%3cg%20stroke='%23333'%20stroke-width='2'%3e%3cline%20x1='200'%20y1='50'%20x2='100'%20y2='120'%20/%3e%3cline%20x1='200'%20y1='50'%20x2='300'%20y2='120'%20stroke='%23ffd700'%20stroke-opacity='0.5'%20/%3e%3cline%20x1='100'%20y1='120'%20x2='60'%20y2='190'%20/%3e%3cline%20x1='100'%20y1='120'%20x2='140'%20y2='190'%20/%3e%3cline%20x1='300'%20y1='120'%20x2='260'%20y2='190'%20stroke='%23ffd700'%20stroke-opacity='0.5'%20/%3e%3cline%20x1='300'%20y1='120'%20x2='340'%20y2='190'%20/%3e%3cline%20x1='260'%20y1='190'%20x2='230'%20y2='250'%20/%3e%3cline%20x1='260'%20y1='190'%20x2='290'%20y2='250'%20stroke='%23ffd700'%20stroke-opacity='0.5'/%3e%3c/g%3e%3cg%20filter='url(%23node-glow)'%20stroke-width='2'%3e%3cg%20fill='%23001a05'%20stroke='%2300ff41'%3e%3ccircle%20cx='100'%20cy='120'%20r='15'%20/%3e%3ccircle%20cx='60'%20cy='190'%20r='15'%20/%3e%3ccircle%20cx='140'%20cy='190'%20r='15'%20/%3e%3ccircle%20cx='340'%20cy='190'%20r='15'%20/%3e%3ccircle%20cx='230'%20cy='250'%20r='15'%20/%3e%3c/g%3e%3cg%20fill='%231a1200'%20stroke='%23ffd700'%3e%3ccircle%20cx='200'%20cy='50'%20r='18'%20/%3e%3ccircle%20cx='300'%20cy='120'%20r='15'%20/%3e%3ccircle%20cx='260'%20cy='190'%20r='15'%20/%3e%3ccircle%20cx='290'%20cy='250'%20r='15'%20fill='%23ffd700'%20fill-opacity='0.2'%3e%3canimate%20attributeName='r'%20values='15;18;15'%20dur='1.5s'%20repeatCount='indefinite'/%3e%3canimate%20attributeName='stroke-opacity'%20values='1;0.5;1'%20dur='1.5s'%20repeatCount='indefinite'/%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c/svg%3e",Se="/visualizer/assets/openverse2-k2zQMcJa.svg",Ve=({title:n,link:t,icon:i,type:s,enabled:a=!0,gradientClass:l})=>{const r=`homepage-card ${a?"":"homepage-card-disabled"} ${l||""}`,c=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"homepage-card-title-box",children:n}),e.jsx("div",{className:"homepage-card-illustration",children:i}),e.jsxs("div",{className:"homepage-learn-more-btn",children:["Learn more",e.jsx("span",{className:"homepage-learn-more-arrow",children:"→"})]})]});return a&&t?e.jsx(Y,{to:t,className:r,children:c}):e.jsx("div",{className:r,children:c})},gt=()=>{const n=[{title:"Stacks & Queues",link:"/stacks-queues",icon:e.jsx(fe,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-2",enabled:!0},{title:"Trees",link:"/trees",icon:e.jsx(ge,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-3",enabled:!0},{title:"Pathfinding",link:"/pathfinding",icon:e.jsx(ze,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-1",enabled:!0},{title:"Graphs",link:"/graphs",icon:e.jsx(fe,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-3",enabled:!0}],t=[{title:"Sorting Algorithms",link:"/sorting",icon:e.jsx(Ge,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-1",enabled:!0},{title:"Search Algorithms",link:"/search",icon:e.jsx(Je,{size:40,color:"#FFFFFF"}),gradientClass:"homepage-card-gradient-2",enabled:!0}];return e.jsxs("div",{className:"homepage",children:[e.jsx("div",{className:"homepage-bg-overlay"}),e.jsx("header",{className:"homepage-header",children:e.jsx("div",{className:"homepage-logo",children:e.jsx("a",{href:"/",children:e.jsx("span",{children:"algo-visu"})})})}),e.jsxs("main",{className:"homepage-main",children:[e.jsx("h1",{className:"homepage-title",children:"algolift-visualization"}),e.jsxs("div",{className:"homepage-columns",children:[e.jsxs("div",{className:"homepage-column",children:[e.jsx("h2",{className:"homepage-column-title",children:"Data Structures"}),e.jsx("div",{className:"homepage-card-grid",children:n.map((i,s)=>e.jsx(Ve,{title:i.title,link:i.link,icon:i.icon,gradientClass:i.gradientClass,type:"ds",enabled:i.enabled},`ds-${s}`))})]}),e.jsx("div",{className:"homepage-divider"}),e.jsxs("div",{className:"homepage-column",children:[e.jsx("h2",{className:"homepage-column-title",children:"Algorithms"}),e.jsx("div",{className:"homepage-card-grid",children:t.map((i,s)=>e.jsx(Ve,{title:i.title,link:i.link,icon:i.icon,gradientClass:i.gradientClass,type:"algo",enabled:i.enabled},`algo-${s}`))})]})]}),e.jsx("footer",{className:"homepage-footer-container",children:e.jsx("img",{src:ft,alt:"RoboCats Logo",className:"homepage-footer-image",id:"robocats",style:{width:"500px",height:"auto"}})})]})]})},xt={number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#0fe0ff"},shape:{type:"circle",stroke:{width:0,color:"#0fe0ff"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:.6,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#0fe0ff",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},yt={detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},vt=!0,jt={particles:xt,interactivity:yt,retina_detect:vt},St="/visualizer/assets/manchan--JmrvuKu.jpeg",bt="/visualizer/assets/prajwal-DVcV15IP.webp",Nt="/visualizer/assets/shaun-oiCNB6_d.png",wt="/visualizer/assets/nikhil-DrPpm7WB.webp",Ct="/visualizer/assets/couldbeyou-CzTQ3P1R.jpg",kt="/visualizer/assets/manu-3_dR27HM.jpeg",$e="/visualizer/assets/1c8b8e32-01c1-40b1-8a26-27c1f6af5add-CzCtvezz.jpeg",At=()=>{const[n,t]=ue({triggerOnce:!0,threshold:.1}),[i,s]=ue({triggerOnce:!0,threshold:.2}),[a,l]=ue({triggerOnce:!0,threshold:.1}),[r,c]=ue({triggerOnce:!0,threshold:.2}),o=async p=>{await Ze(p)},d=[{name:"Manvith Kumar",education:"Computer Science, IIIT Kottayam",role:"Club-lead",note:"git better you suck",github:"/manvith12",linkedin:"manvith-sanisetty",image:St},{name:"Prajwal K",education:"Computer Science, IIIT Kottayam",role:"Project-lead",note:"Loves optimizing algorithms and system architecture",github:"/Prajwal-k-tech",image:bt},{name:"Shaun Sebastian",education:"Computer Science, IIIT Kottayam",role:"Full Stack Developer",note:"Bridges the gap between data and user interfaces",github:"/Babu-Nambothiri",image:Nt},{name:"Nikhil",education:"Computer Science, IIIT Kottayam",role:"DevOps Engineer",note:"Ensuring smooth deployment and system reliability",github:"/nikhilanil87",image:wt},{name:"Anupam Mishra",education:"Cyber Security, IIIT Kottayam",role:"Security Analyst",note:"You arent stealing shi,   lil bro",linkedin:"www.linkedin.com/in/anupam-mishra-223583324",image:$e},{name:"Anupam Mishra",education:"Cyber Security, IIIT Kottayam",role:"Security Guy",note:"If you no longer go for a gap that exists, you are no longer a security tester",image:$e},{name:"This could be you!",education:"",role:"Future Developer",note:"Join us and be part of Openverse!",image:Ct}],u={dots:!0,infinite:!0,autoplay:!0,autoplaySpeed:3e3,arrows:!0,slidesToShow:3,slidesToScroll:1,pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]};return e.jsxs("div",{className:"about-us-container",children:[e.jsx("nav",{className:"about-us-nav",children:e.jsxs(Y,{to:"/",className:"home-link",children:[e.jsx(te,{}),e.jsx("span",{children:"Home"})]})}),e.jsxs("section",{ref:n,className:`hero-section ${t?"fade-in":""}`,children:[e.jsx("div",{className:"hero-background"}),e.jsx(Xe,{id:"tsparticles",init:o,options:jt,className:"particles-background"}),e.jsxs(J.div,{className:"hero-content",initial:{opacity:0,y:50},animate:t?{opacity:1,y:0}:{},transition:{duration:1,delay:.2},children:[e.jsx("img",{src:Se,alt:"Openverse Logo",className:"hero-logo"}),e.jsx("h1",{className:"hero-title",children:"Openverse"}),e.jsx("p",{className:"hero-tagline",children:"Empowering Developers Through Cosmic Innovation"})]}),e.jsxs("div",{className:"scroll-indicator",children:[e.jsx("span",{children:"Scroll Down"}),e.jsx(Qe,{className:"scroll-arrow"})]})]}),e.jsx("section",{ref:i,className:`goals-section ${s?"fade-in":""}`,children:e.jsxs(J.div,{className:"goals-content",initial:{opacity:0,y:30},animate:s?{opacity:1,y:0}:{},transition:{duration:.8,delay:.1},children:[e.jsx("h2",{children:"Our Mission"}),e.jsxs("div",{className:"goals-grid",children:[e.jsxs("div",{className:"goal-item",children:[e.jsx("h3",{children:"🚀 Innovation"}),e.jsx("p",{children:"Pushing the boundaries of educational technology through creative visualization tools that make complex algorithms accessible to everyone."})]}),e.jsxs("div",{className:"goal-item",children:[e.jsx("h3",{children:"🌟 Excellence"}),e.jsx("p",{children:"Delivering high-quality interactive experiences that combine beautiful design with powerful functionality for optimal learning outcomes."})]}),e.jsxs("div",{className:"goal-item",children:[e.jsx("h3",{children:"🤝 Community"}),e.jsx("p",{children:"Building a supportive ecosystem where developers can learn, collaborate, and grow together in their programming journey."})]})]})]})}),e.jsx("section",{ref:a,className:`developers-section ${l?"fade-in":""}`,children:e.jsxs(J.div,{className:"developers-content",initial:{opacity:0},animate:l?{opacity:1}:{},transition:{duration:.8},children:[e.jsx("h2",{children:"Meet Our Developers"}),e.jsx("div",{className:"developers-grid",children:d.map((p,g)=>e.jsxs(J.div,{className:"developer-card",initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.6,delay:.1*g},whileHover:{y:-8,transition:{duration:.3}},children:[e.jsx("div",{className:"developer-image",children:e.jsx("img",{src:p.image,alt:p.name})}),e.jsxs("div",{className:"developer-info",children:[e.jsx("h3",{children:p.name}),e.jsx("p",{className:"developer-role",children:p.role}),e.jsx("p",{className:"developer-education",children:p.education}),e.jsx("div",{className:"developer-note",children:e.jsxs("p",{children:['"',p.note,'"']})}),e.jsxs("div",{className:"developer-links",children:[p.github&&e.jsx("a",{href:`https://github.com${p.github}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(We,{})}),p.linkedin&&e.jsx("a",{href:`https://linkedin.com/in/${p.linkedin}`,target:"_blank",rel:"noopener noreferrer",children:e.jsx(Ke,{})})]})]})]},g))}),e.jsxs(J.div,{className:"our-guide",initial:{opacity:0,y:30},animate:l?{opacity:1,y:0}:{},transition:{duration:.8,delay:.5},children:[e.jsx("h3",{children:"Our Guide"}),e.jsxs("div",{className:"guide-info",children:[e.jsx("a",{href:"https://iiitkottayam.ac.in/#!/faculty/manu",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:kt,alt:"Dr Manu Madhavan",className:"guide-image",style:{width:"120px",borderRadius:"50%",marginBottom:"1rem"}})}),e.jsx("p",{className:"guide-name",children:"Dr Manu Madhavan"}),e.jsx("p",{className:"guide-department",children:"Assistant Professor, IIIT Kottayam"}),e.jsx("p",{className:"guide-note",children:'"With gratitude to our mentor who inspired this journey of learning and innovation."'})]})]})]})}),e.jsx("section",{ref:r,className:`morals-section ${c?"fade-in":""}`,children:e.jsxs(J.div,{className:"morals-content",initial:{opacity:0,y:30},animate:c?{opacity:1,y:0}:{},transition:{duration:.8},children:[e.jsx("h2",{children:"Our Core Values"}),e.jsxs("div",{className:"values-list",children:[e.jsxs("div",{className:"value-item",children:[e.jsx("h4",{children:"🎯 Purpose-Driven"}),e.jsx("p",{children:"Every feature we build serves a clear educational purpose, helping users understand complex concepts through intuitive interactions."})]}),e.jsxs("div",{className:"value-item",children:[e.jsx("h4",{children:"🔬 Quality-Focused"}),e.jsx("p",{children:"We maintain high standards in code quality, user experience, and educational accuracy across all our projects."})]}),e.jsxs("div",{className:"value-item",children:[e.jsx("h4",{children:"🌍 Inclusive"}),e.jsx("p",{children:"Our tools are designed to be accessible to learners of all backgrounds and skill levels, fostering an inclusive learning environment."})]})]})]})}),e.jsx("section",{className:"gallery-section",children:e.jsxs(J.div,{className:"gallery-content",initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.8},viewport:{once:!0,margin:"-100px"},children:[e.jsx("h2",{children:"Our Journey"}),e.jsx("div",{className:"image-slider",children:e.jsx(Ye,{...u,children:[...Array(6)].map((p,g)=>e.jsx("div",{className:"gallery-slide",children:e.jsxs("div",{className:"gallery-image",children:[e.jsx("img",{src:Se,alt:`Gallery ${g+1}`}),e.jsx("div",{className:"gallery-overlay",children:e.jsxs("p",{children:["Project Milestone ",g+1]})})]})},g))})})]})}),e.jsx("footer",{className:"about-footer",children:e.jsxs("div",{className:"footer-content",children:[e.jsx("img",{src:Se,alt:"Openverse Logo",className:"footer-logo"}),e.jsx("p",{children:"© 2025 Openverse | IIIT Kottayam"}),e.jsx("p",{children:"Building the future of interactive learning"})]})})]})},Tt={MEDIUM:800},Lt=(n,t)=>{let i;return function(...a){const l=()=>{clearTimeout(i),n(...a)};clearTimeout(i),i=setTimeout(l,t)}},Et=n=>n&&n.trim().length>0,Mt={type:"spring",damping:20,stiffness:300},It=(n,t)=>{var i=[],s="";for(let a=0;a<t-1;a++){for(let l=0;l<t-a-1;l++)n[l].style="bar-swap",n[l+1].style="bar-swap",s=`Comparing ${n[l].value} and ${n[l+1].value}`,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[l].value>n[l+1].value&&([n[l],n[l+1]]=[n[l+1],n[l]],s=`Swapping ${n[l].value} and ${n[l+1].value}`,i.push({array:JSON.parse(JSON.stringify(n)),step:s})),n[l].style="bar",n[l+1].style="bar";n[t-a-1].style="bar-sorted"}return n[0].style="bar-sorted",s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},Rt=(n,t)=>{var i=[],s="";for(let a=1;a<t;a++){let l={...n[a]},r=a-1;for(s=`Inserting ${l.value} into sorted part`,n[a].style="bar-swap",i.push({array:JSON.parse(JSON.stringify(n)),step:s});r>=0&&n[r].value>l.value;)n[r+1]={...n[r]},n[r].style="bar-swap",n[r+1].style="bar-swap",s=`Shifting ${n[r].value} to the right`,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[r].style="bar",n[r+1].style="bar",r--;n[r+1]=l,n[a].style="bar-sorted",i.push({array:JSON.parse(JSON.stringify(n)),step:`Placed ${l.value} in correct position`})}return n.forEach(a=>a.style="bar-sorted"),s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},Vt=(n,t)=>{var i=[],s="";const a=(l,r,c)=>{let o=c,d=2*c+1,u=2*c+2;d<r&&l[d].value>l[o].value&&(o=d),u<r&&l[u].value>l[o].value&&(o=u),o!==c&&(l[c].style="bar-swap",l[o].style="bar-swap",[l[c],l[o]]=[l[o],l[c]],s=`Heapifying: swapped ${l[c].value} and ${l[o].value}`,i.push({array:JSON.parse(JSON.stringify(l)),step:s}),l[c].style="bar",l[o].style="bar",a(l,r,o))};for(let l=Math.floor(t/2)-1;l>=0;l--)s=`Building max heap: heapifying at index ${l}`,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),a(n,t,l);for(let l=t-1;l>0;l--)n[0].style="bar-swap",n[l].style="bar-swap",[n[0],n[l]]=[n[l],n[0]],s=`Moving largest element ${n[l].value} to end`,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[l].style="bar-sorted",a(n,l,0);return n[0].style="bar-sorted",s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},$t=(n,t)=>{var i=[],s="";let a=Math.max(...n.map(d=>d.value)),l=Math.min(...n.map(d=>d.value)),r=a-l+1,c=new Array(r).fill(0),o=new Array(t).fill(null);for(let d=0;d<t;d++)n[d].style="bar-swap",s=`Counting occurrence of ${n[d].value}`,c[n[d].value-l]++,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[d].style="bar";for(let d=1;d<r;d++)c[d]+=c[d-1],s=`Calculating cumulative count for value ${d+l}`,i.push({array:JSON.parse(JSON.stringify(n)),step:s});for(let d=t-1;d>=0;d--)o[c[n[d].value-l]-1]={...n[d]},c[n[d].value-l]--,n[d].style="bar-swap",s=`Placing ${n[d].value} in correct position`,i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[d].style="bar";for(let d=0;d<t;d++)n[d]=o[d],n[d].style="bar-sorted",s=`Copying sorted element ${n[d].value} back to original array`,i.push({array:JSON.parse(JSON.stringify(n)),step:s});return s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},Ft=(n,t)=>{var i=[],s="";for(let a=0;a<t;a++){let l=a;n[a].style="bar-swap",s=`Finding minimum element starting from position ${a+1}`,i.push({array:JSON.parse(JSON.stringify(n)),step:s});for(let r=a+1;r<t;r++)n[r].value<n[l].value&&(n[l].style="bar",l=r,s=`Found new minimum at position ${r+1}`),n[r].style="bar-swap",n[l].style="bar-min",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),n[r].style="bar";n[a].style="bar",s=`Swapping minimum (${n[l].value}) with position ${a+1} (${n[a].value})`,[n[a],n[l]]=[n[l],n[a]],n[a].style="bar-sorted",i.push({array:JSON.parse(JSON.stringify(n)),step:s})}return s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},zt=(n,t)=>{var i=[],s="";const a=(r,c,o)=>{if(c<o){let d=Math.floor(c+(o-c)/2);s=`Dividing array from index ${c} to ${o}`,i.push({array:JSON.parse(JSON.stringify(r)),step:s}),a(r,c,d),a(r,d+1,o),s=`Merging subarrays from index ${c} to ${d} and ${d+1} to ${o}`,l(r,c,d,o),i.push({array:JSON.parse(JSON.stringify(r)),step:s})}},l=(r,c,o,d)=>{let u=[],p=[];for(let v=c;v<=o;v++)u.push(JSON.parse(JSON.stringify(r[v])));for(let v=o+1;v<=d;v++)p.push(JSON.parse(JSON.stringify(r[v])));var g=0,j=0,x=c,f=o-c+1,S=d-o;for(s="Comparing and merging elements from both subarrays";g<f&&j<S;)u[g].value<=p[j].value?(r[x]=u[g],r[x].style="bar-swap",g++):(r[x]=p[j],r[x].style="bar-swap",j++),x++,i.push({array:JSON.parse(JSON.stringify(r)),step:s});for(;g<f;)r[x]=u[g],r[x].style="bar-swap",x++,g++,i.push({array:JSON.parse(JSON.stringify(r)),step:"Adding remaining elements from left subarray"});for(;j<S;)r[x]=p[j],r[x].style="bar-swap",x++,j++,i.push({array:JSON.parse(JSON.stringify(r)),step:"Adding remaining elements from right subarray"})};return a(n,0,t-1),n.forEach(r=>{r.style="bar-sorted"}),s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},Ht=(n,t)=>{var i=[],s="";const a=(r,c,o)=>{if(c<o){s=`Selecting pivot at position ${o+1} with value ${r[o].value}`,i.push({array:JSON.parse(JSON.stringify(r)),step:s});var d=l(r,c,o);a(r,c,d-1),a(r,d+1,o)}},l=(r,c,o)=>{let d=r[o];r[o].style="bar-min",i.push({array:JSON.parse(JSON.stringify(r)),step:`Partitioning: pivot = ${d.value}`});var u=c-1;for(let p=c;p<o;p++)r[p].style="bar-swap",s=`Comparing ${r[p].value} with pivot ${d.value}`,i.push({array:JSON.parse(JSON.stringify(r)),step:s}),r[p].value<d.value&&(u++,s=`Element ${r[p].value} is less than pivot, swapping with position ${u+1}`,[r[u],r[p]]=[r[p],r[u]],i.push({array:JSON.parse(JSON.stringify(r)),step:s})),r[p].style="bar";return r[o].style="bar",s=`Placing pivot ${d.value} at its correct position`,[r[u+1],r[o]]=[r[o],r[u+1]],i.push({array:JSON.parse(JSON.stringify(r)),step:s}),u+1};return a(n,0,t-1),n.forEach(r=>{r.style="bar-sorted"}),s="Array sorted successfully!",i.push({array:JSON.parse(JSON.stringify(n)),step:s}),i},se={"Bubble Sort":{timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Bubble sort repeatedly compares adjacent elements and swaps them if they are in the wrong order.",pseudocode:`#include <stdio.h>

// Function to perform bubble sort
void bubbleSort(int arr[], int n) {
  // Outer loop for passes
  for (int i = 0; i < n - 1; i++) {
    // Flag to track if any swap occurred
    int swapped = 0;
    
    // Inner loop for comparisons
    for (int j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if in wrong order
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = 1;
      }
    }
    
    // If no swapping, array is sorted
    if (swapped == 0) {
      break;
    }
  }
}

// Function to print array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
}

int main() {
  int arr[] = {64, 34, 25, 12, 22, 11, 90};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  printf("Original array: ");
  printArray(arr, n);
  
  bubbleSort(arr, n);
  
  printf("Sorted array: ");
  printArray(arr, n);
  
  return 0;
}`},"Insertion Sort":{timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Insertion sort builds the final sorted array one item at a time by repeatedly inserting a new element into the sorted portion of the array.",pseudocode:`#include <stdio.h>

// Function to perform insertion sort
void insertionSort(int arr[], int n) {
  // Start from second element
  for (int i = 1; i < n; i++) {
    int key = arr[i];  // Current element to insert
    int j = i - 1;     // Index of sorted portion
    
    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    
    // Insert key at correct position
    arr[j + 1] = key;
  }
}

// Function to print array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
}

int main() {
  int arr[] = {12, 11, 13, 5, 6};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  printf("Original array: ");
  printArray(arr, n);
  
  insertionSort(arr, n);
  
  printf("Sorted array: ");
  printArray(arr, n);
  
  return 0;
}`},"Heap Sort":{timeComplexity:"O(n log n)",spaceComplexity:"O(1)",description:"Heap sort converts the array into a heap data structure, then repeatedly extracts the maximum element to build the sorted array.",pseudocode:`#include <stdio.h>

// Function to swap two elements
void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

// To heapify a subtree rooted with node i
void heapify(int arr[], int n, int i) {
  int largest = i;    // Initialize largest as root
  int left = 2 * i + 1;   // Left child
  int right = 2 * i + 2;  // Right child
  
  // If left child is larger than root
  if (left < n && arr[left] > arr[largest])
    largest = left;
  
  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest])
    largest = right;
  
  // If largest is not root
  if (largest != i) {
    swap(&arr[i], &arr[largest]);
    
    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Main function to do heap sort
void heapSort(int arr[], int n) {
  // Build heap (rearrange array)
  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(arr, n, i);
  
  // Extract elements from heap one by one
  for (int i = n - 1; i >= 0; i--) {
    // Move current root to end
    swap(&arr[0], &arr[i]);
    
    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

int main() {
  int arr[] = {12, 11, 13, 5, 6, 7};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  heapSort(arr, n);
  
  return 0;
}`},"Counting Sort":{timeComplexity:"O(n + k)",spaceComplexity:"O(k)",description:"Counting sort works by counting the occurrences of each element, then reconstructing the sorted array using the counts.",pseudocode:`#include <stdio.h>
#include <stdlib.h>

// Function to find the maximum element in array
int getMax(int arr[], int n) {
  int max = arr[0];
  for (int i = 1; i < n; i++) {
    if (arr[i] > max)
      max = arr[i];
  }
  return max;
}

// Counting sort function
void countingSort(int arr[], int n) {
  // Find the maximum element to know range of count array
  int max = getMax(arr, n);
  
  // Create count array and initialize with 0
  int* count = (int*)calloc(max + 1, sizeof(int));
  int* output = (int*)malloc(n * sizeof(int));
  
  // Store count of each element
  for (int i = 0; i < n; i++)
    count[arr[i]]++;
  
  // Change count[i] to actual position in output array
  for (int i = 1; i <= max; i++)
    count[i] += count[i - 1];
  
  // Build output array
  for (int i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  // Copy output array to original array
  for (int i = 0; i < n; i++)
    arr[i] = output[i];
  
  free(count);
  free(output);
}

// Function to print array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
}

int main() {
  int arr[] = {4, 2, 2, 8, 3, 3, 1};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  printf("Original array: ");
  printArray(arr, n);
  
  countingSort(arr, n);
  
  printf("Sorted array: ");
  printArray(arr, n);
  
  return 0;
}`},"Selection Sort":{timeComplexity:"O(n²)",spaceComplexity:"O(1)",description:"Selection sort works by repeatedly finding the minimum element from the unsorted part and putting it at the beginning.",pseudocode:`#include <stdio.h>

// Function to perform selection sort
void selectionSort(int arr[], int n) {
  // Traverse through all array elements
  for (int i = 0; i < n - 1; i++) {
    // Find minimum element in remaining array
    int min_idx = i;
    
    for (int j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    
    // Swap found minimum with first element
    if (min_idx != i) {
      int temp = arr[min_idx];
      arr[min_idx] = arr[i];
      arr[i] = temp;
    }
  }
}

// Function to print array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
}

int main() {
  int arr[] = {64, 25, 12, 22, 11};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  printf("Original array: ");
  printArray(arr, n);
  
  selectionSort(arr, n);
  
  printf("Sorted array: ");
  printArray(arr, n);
  
  return 0;
}`},"Merge Sort":{timeComplexity:"O(n log n)",spaceComplexity:"O(n)",description:"Merge sort is a divide and conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.",pseudocode:`#include <stdio.h>
#include <stdlib.h>

// Function to merge two sorted subarrays
void merge(int arr[], int left, int mid, int right) {
  int i, j, k;
  int n1 = mid - left + 1;  // Size of left subarray
  int n2 = right - mid;     // Size of right subarray
  
  // Create temporary arrays
  int* L = (int*)malloc(n1 * sizeof(int));
  int* R = (int*)malloc(n2 * sizeof(int));
  
  // Copy data to temporary arrays
  for (i = 0; i < n1; i++)
    L[i] = arr[left + i];
  for (j = 0; j < n2; j++)
    R[j] = arr[mid + 1 + j];
  
  // Merge temporary arrays back into arr[]
  i = 0; j = 0; k = left;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  
  // Copy remaining elements
  while (i < n1) {
    arr[k] = L[i];
    i++; k++;
  }
  while (j < n2) {
    arr[k] = R[j];
    j++; k++;
  }
  
  free(L);
  free(R);
}

// Recursive merge sort function
void mergeSort(int arr[], int left, int right) {
  if (left < right) {
    int mid = left + (right - left) / 2;
    
    // Sort first and second halves
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    
    // Merge the sorted halves
    merge(arr, left, mid, right);
  }
}

int main() {
  int arr[] = {12, 11, 13, 5, 6, 7};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  mergeSort(arr, 0, n - 1);
  
  return 0;
}`},"Quick Sort":{timeComplexity:"O(n log n) average, O(n²) worst case",spaceComplexity:"O(log n)",description:"Quick sort works by selecting a 'pivot' element and partitioning the array around the pivot, placing smaller elements before it and larger ones after it.",pseudocode:`#include <stdio.h>

// Function to swap two elements
void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

// Partition function
int partition(int arr[], int low, int high) {
  int pivot = arr[high];  // Choose rightmost element as pivot
  int i = (low - 1);      // Index of smaller element
  
  for (int j = low; j <= high - 1; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;  // Increment index of smaller element
      swap(&arr[i], &arr[j]);
    }
  }
  swap(&arr[i + 1], &arr[high]);
  return (i + 1);
}

// Quick sort function
void quickSort(int arr[], int low, int high) {
  if (low < high) {
    // Partition index
    int pi = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

// Function to print array
void printArray(int arr[], int size) {
  for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
  }
  printf("\\n");
}

int main() {
  int arr[] = {10, 7, 8, 9, 1, 5};
  int n = sizeof(arr) / sizeof(arr[0]);
  
  printf("Original array: ");
  printArray(arr, n);
  
  quickSort(arr, 0, n - 1);
  
  printf("Sorted array: ");
  printArray(arr, n);
  
  return 0;
}`}},qt=()=>{var k,O,G,ie,Me,Ie;const[n,t]=h.useState([]),[i,s]=h.useState("Select Algorithm"),[a,l]=h.useState(0),[r,c]=h.useState(100),[o,d]=h.useState(!1),[u,p]=h.useState(!1),[g,j]=h.useState(!1),[x,f]=h.useState(!0),[S,v]=h.useState(""),[L,m]=h.useState(0),[V,z]=h.useState(!1),[A,T]=h.useState(!1),[y,N]=h.useState(""),[w,I]=h.useState(!1),q=h.useRef(null),_=h.useRef({index:0,results:[]}),U=h.useRef(null);h.useEffect(()=>{const F=K=>{U.current&&!U.current.contains(K.target)&&I(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const P=h.useCallback((F=Math.floor(window.innerWidth/60))=>{let K=[];for(let H=0;H<F;H++)K.push({value:Math.floor(Math.random()*70)+30,id:"id-"+H});l(F),t(K),p(!1)},[]),E=h.useCallback(Lt(()=>{o||P(a)},300),[o,a,P]),b=h.useCallback(F=>{c(parseInt(F.target.value))},[]),D=h.useCallback(F=>{o||P(parseInt(F.target.value))},[o,P]),C=h.useCallback(()=>{if(y.trim())try{const F=y.split(",").map(ne=>parseInt(ne.trim())).filter(ne=>!isNaN(ne)&&ne>0&&ne<=200);if(F.length===0){p(!0),v("Please enter valid numbers (1-200) separated by commas"),setTimeout(()=>{p(!1),v("")},3e3);return}const K=F.slice(0,50),H=K.map((ne,Be)=>({value:ne,id:"id-"+Be}));l(K.length),t(H),T(!1),N("")}catch{p(!0),v("Please enter valid numbers separated by commas"),setTimeout(()=>{p(!1),v("")},3e3)}},[y]),M=h.useCallback(F=>{s(F),I(!1)},[]),B=h.useCallback(()=>{const{index:F,results:K}=_.current;if(F>=K.length){q.current&&(cancelAnimationFrame(q.current),q.current=null),d(!1),z(!1);return}if(!V){t(K[F].array),v(K[F].step);const H=K[F].step.toLowerCase();switch(i){case"Bubble Sort":H.includes("comparing")?m(12):H.includes("swapping")?m(14):H.includes("sorted successfully")?m(null):m(10);break;case"Selection Sort":H.includes("finding minimum")?m(5):H.includes("found new minimum")||H.includes("minimum at")?m(9):H.includes("swapping")?m(15):H.includes("sorted successfully")?m(null):m(5);break;case"Insertion Sort":H.includes("inserting")?m(5):H.includes("shifting")?m(9):H.includes("placed")||H.includes("into sorted")?m(13):H.includes("sorted successfully")?m(null):m(4);break;case"Merge Sort":H.includes("dividing")||H.includes("divide")?m(45):H.includes("merging")?m(50):H.includes("comparing")?m(18):H.includes("sorted successfully")?m(null):m(43);break;case"Quick Sort":H.includes("selecting pivot")||H.includes("pivot")?m(10):H.includes("partitioning")?m(13):H.includes("comparing")?m(15):H.includes("less than pivot")||H.includes("swapping")?m(17):H.includes("placing pivot")?m(20):H.includes("sorted successfully")?m(null):m(8);break;case"Heap Sort":H.includes("building max heap")||H.includes("building heap")?m(32):H.includes("heapifying")?m(22):H.includes("moving largest")||H.includes("extracting")?m(38):H.includes("sorted successfully")?m(null):m(30);break;case"Counting Sort":H.includes("counting occurrence")||H.includes("counting")?m(19):H.includes("calculating cumulative")||H.includes("cumulative")?m(24):H.includes("placing")?m(29):H.includes("copying sorted")||H.includes("copying")?m(35):H.includes("sorted successfully")?m(null):m(17);break;default:m(null)}_.current.index=F+1,q.current&&cancelAnimationFrame(q.current),q.current=requestAnimationFrame(()=>{setTimeout(B,r)})}},[V,i,r]),R=h.useCallback(()=>{q.current&&(cancelAnimationFrame(q.current),q.current=null),_.current={index:0,results:[]},d(!1),z(!1),v(""),m(null),P(a)},[a,P]),$=h.useCallback(()=>{z(F=>(F?requestAnimationFrame(()=>{setTimeout(B,r)}):q.current&&(cancelAnimationFrame(q.current),q.current=null),!F))},[r]),X=h.useCallback(()=>{if(o&&!V)return;if(V){z(!1),requestAnimationFrame(()=>{setTimeout(B,r)});return}if(i==="Select Algorithm"){p(!0),setTimeout(()=>p(!1),3e3);return}d(!0),v("Starting sorting...");let F;try{switch(i){case"Bubble Sort":F=It([...n],a);break;case"Selection Sort":F=Ft([...n],a);break;case"Insertion Sort":F=Rt([...n],a);break;case"Merge Sort":F=zt([...n],a);break;case"Quick Sort":F=Ht([...n],a);break;case"Heap Sort":F=Vt([...n],a);break;case"Counting Sort":F=$t([...n],a);break;default:p(!0),setTimeout(()=>p(!1),3e3);return}_.current={index:0,results:F},requestAnimationFrame(()=>{setTimeout(B,r)})}catch(K){console.error("Sorting error:",K),d(!1),v("Error occurred during sorting"),setTimeout(()=>v(""),3e3)}},[o,V,i,n,a,r]);return h.useEffect(()=>{P();const F=()=>{o||P()};return window.addEventListener("resize",F),()=>window.removeEventListener("resize",F)},[]),e.jsxs("div",{className:"sorting-container",children:[e.jsxs("header",{className:"app-header",children:[e.jsxs(Y,{to:"/",className:"home-button",children:[e.jsx(te,{size:18}),e.jsx("span",{children:"Home"})]}),e.jsx("h1",{style:{flex:1,textAlign:"center"},children:"Sorting Algorithm Visualizer"}),e.jsx("button",{className:`code-panel-toggle ${x?"active":""}`,onClick:()=>f(!x),children:x?"Hide Code":"Show Code"})]}),e.jsxs("div",{className:"sorting-content",style:{gap:"1rem",height:"calc(100vh - 66px)"},children:[e.jsxs("div",{className:"code-panel",initial:{opacity:0,width:0},animate:{opacity:1,width:"320px"},exit:{opacity:0,width:0},transition:{duration:.3,type:"spring",stiffness:300,damping:30},style:{minWidth:"320px",borderRadius:"8px",height:"calc(100vh - 88px)",minHeight:"calc(100vh - 88px)",display:"flex",flexDirection:"column"},children:[e.jsx("h3",{children:"Algorithm Steps"}),i!=="Select Algorithm"&&e.jsx("div",{className:"algorithm-info",children:e.jsxs("div",{className:"algorithm-metrics",children:[e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Time Complexity:"}),e.jsx("span",{className:"metric-value",children:(k=se[i])==null?void 0:k.timeComplexity})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Space Complexity:"}),e.jsx("span",{className:"metric-value",children:(O=se[i])==null?void 0:O.spaceComplexity})]})]})}),e.jsxs("div",{className:"step-display",children:[e.jsx("h4",{children:"Current Operation:"}),e.jsx("div",{className:`step-description ${o?"active-step":""}`,children:S||"Select an algorithm and press 'Sort' to start visualization"}),i!=="Select Algorithm"?e.jsxs("div",{className:"algorithm-details-container",children:[e.jsx("div",{className:"algorithm-description",style:{margin:"0.5rem",padding:"1rem",boxSizing:"border-box",borderRadius:"6px",border:"1px solid rgba(56, 139, 253, 0.2)",backgroundColor:"rgba(56, 139, 253, 0.05)"},children:(G=se[i])==null?void 0:G.description}),e.jsx("button",{className:"info-toggle-button",onClick:()=>j(!g),children:g?"Hide Details":"Learn More"}),g&&e.jsxs("div",{className:"algorithm-details",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},transition:{duration:.3},style:{flex:"0 0 auto",marginBottom:"0.5rem",maxHeight:"40%",overflow:"auto"},children:[i==="Selection Sort"&&e.jsx("p",{children:"Selection sort is simple but inefficient for large datasets. It divides the array into a sorted and unsorted region, repeatedly finding the minimum element from the unsorted region and moving it to the beginning of the sorted region."}),i==="Merge Sort"&&e.jsx("p",{children:"Merge sort is more efficient than basic sorting algorithms like insertion or selection sort. It uses a divide-and-conquer approach that breaks down the array into equal halves until atomic values are reached, then rebuilds by merging and sorting."}),i==="Quick Sort"&&e.jsx("p",{children:"Quick sort is generally faster in practice than other O(n log n) algorithms because its inner loop can be efficiently implemented on most architectures. It works by selecting a 'pivot' element and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot."}),i==="Bubble Sort"&&e.jsx("p",{children:"Bubble sort is a simple comparison-based algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. It's not suitable for large data sets as it's less efficient than other algorithms."}),i==="Insertion Sort"&&e.jsx("p",{children:"Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."}),i==="Heap Sort"&&e.jsx("p",{children:"Heap sort is a comparison-based sorting technique based on a binary heap data structure. It is similar to selection sort in that it divides the array into a sorted and an unsorted region, but it uses a heap data structure to find the maximum element more efficiently."}),i==="Counting Sort"&&e.jsx("p",{children:"Counting sort is an integer sorting algorithm that works by counting the number of objects having distinct key values (k) and using arithmetic to determine the positions of each key value in the output sequence. It is not a comparison-based sort and is useful when the range of potential items (k) is not significantly greater than the number of items (n)."})]})]}):e.jsx("div",{className:"algorithm-details-container",style:{flex:1,minHeight:"380px",height:"100%"},children:e.jsxs("div",{className:"algorithm-description",style:{flex:1,height:"100%",display:"flex",flexDirection:"column",margin:"0.5rem"},children:["Welcome to the Sorting Algorithm Visualizer! Here you can watch how different sorting algorithms work step by step.",e.jsx("br",{}),e.jsx("br",{}),"🔹 Select an algorithm from the dropdown",e.jsx("br",{}),"🔹 Customize the array size and animation speed",e.jsx("br",{}),"🔹 Press 'Sort' to see the magic happen",e.jsx("br",{}),"🔹 Use 'Pause/Resume' to control the animation",e.jsx("br",{}),"🔹 Try 'Custom Input' to sort your own numbers"]})})]})]}),e.jsxs("div",{className:"sorting-controls",children:[e.jsxs("div",{className:"control-section",children:[e.jsxs("div",{className:"control-group",children:[e.jsx("button",{className:"control-button",onClick:()=>T(!A),disabled:o,children:A?"Cancel Input":"Custom Input"}),A&&e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",marginTop:"10px"},children:[e.jsx("input",{type:"text",value:y,onChange:F=>N(F.target.value),placeholder:"Enter numbers separated by commas",style:{padding:"8px",borderRadius:"4px",border:"1px solid #30363d",background:"#0d1117",color:"#c9d1d9",flex:1}}),e.jsx("button",{className:"control-button",onClick:C,children:"Apply"})]}),e.jsxs("button",{className:"control-button",onClick:E,disabled:o,children:[e.jsx(le,{})," Randomize"]}),e.jsxs("div",{className:"algorithm-dropdown",ref:U,children:[e.jsxs("button",{className:"control-button dropdown-toggle",onClick:()=>I(!w),disabled:o,children:[e.jsx(et,{})," ",i]}),w&&e.jsx("div",{className:"algorithm-dropdown-content",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},children:["Bubble Sort","Selection Sort","Insertion Sort","Merge Sort","Quick Sort","Heap Sort","Counting Sort"].map(F=>e.jsx("button",{className:i===F?"active":"",onClick:()=>M(F),children:F},F))})]}),e.jsx("button",{className:"control-button sort-button",onClick:X,disabled:o&&!V,children:"Sort"}),o&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"control-button",onClick:$,children:V?"Resume":"Pause"}),e.jsx("button",{className:"control-button",onClick:R,children:"Stop"})]})]}),e.jsxs("div",{className:"control-group sliders",children:[e.jsxs("div",{className:"slider-container",children:[e.jsx("label",{children:"Array Size"}),e.jsx("input",{type:"range",min:"5",max:Math.floor(window.innerWidth/40),value:a,onChange:D,disabled:o})]}),e.jsxs("div",{className:"slider-container",children:[e.jsx("label",{children:"Animation Speed"}),e.jsx("input",{type:"range",min:"10",max:"2000",step:"10",defaultValue:"500",onChange:b,disabled:o})]})]})]}),u&&e.jsx("div",{className:"sorting-error",children:"Please select an algorithm first!"}),x&&i!=="Select Algorithm"&&e.jsxs("div",{className:"algorithm-code-container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},style:{display:"flex",flexDirection:"column",flex:1,minHeight:"400px",height:"auto",maxHeight:"none"},children:[e.jsx("h4",{children:"Algorithm Code:"}),e.jsx("div",{style:{flex:1,display:"flex",overflow:"hidden",maxHeight:"400px",border:"1px solid #30363d",borderRadius:"6px"},children:e.jsx("div",{style:{width:"100%",overflow:"auto"},children:e.jsx(ce,{language:"c",style:de,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,codeTagProps:{style:{fontFamily:'"JetBrains Mono", "Fira Code", monospace',fontSize:"0.9rem"}},customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",lineHeight:"1.6",height:"100%",overflow:"auto",background:"#1e1e1e"},lineProps:F=>({style:{backgroundColor:F===L?"rgba(88, 166, 255, 0.3)":"transparent",display:"block",color:F===L?"#fff":void 0,fontWeight:F===L?"bold":"normal"}}),children:((ie=se[i])==null?void 0:ie.pseudocode)||"No code available"})})})]})]}),e.jsxs("div",{className:"sorting-visualization-container",children:[i!=="Select Algorithm"&&e.jsxs("div",{className:"algorithm-info-panel",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsx("h3",{children:i}),e.jsxs("div",{className:"algorithm-metrics",children:[e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Time Complexity:"}),e.jsx("span",{className:"metric-value",children:(Me=se[i])==null?void 0:Me.timeComplexity})]}),e.jsxs("div",{className:"metric",children:[e.jsx("span",{className:"metric-label",children:"Space Complexity:"}),e.jsx("span",{className:"metric-value",children:(Ie=se[i])==null?void 0:Ie.spaceComplexity})]})]})]}),e.jsx("div",{className:"bars",children:n.map((F,K)=>e.jsx("div",{layout:!0,transition:Mt,className:`bar ${F.style||""}`,style:{height:F.value*3,order:K},children:F.value},F.id))})]})]})]})},Pe=h.memo(({currentStep:n,isAnimating:t,loading:i})=>e.jsxs("div",{className:"current-operation-display",children:[e.jsx("h4",{children:"Current Operation"}),e.jsxs("div",{className:`operation-description ${t?"active-operation":""}`,children:[i&&e.jsx("div",{className:"operation-spinner"}),e.jsx("div",{style:{width:"100%"},children:n||e.jsx("span",{className:"no-operation",children:"No active operation"})})]})]}));Pe.displayName="CurrentOperationDisplay";const Ot=({dataStructure:n="stack"})=>{const[t,i]=h.useState(!1);return e.jsxs("div",{className:"explanation-section",children:[e.jsxs("h3",{onClick:()=>i(!t),style:{cursor:"pointer"},children:[t?"▼":"►"," Understanding ",n==="stack"?"Stacks":"Queues"]}),t&&e.jsx("div",{className:"explanation-content",children:n==="stack"?e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"What is a Stack?"}),e.jsx("p",{children:'A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements are added (pushed) and removed (popped) from the same end, called the "top" of the stack.'}),e.jsx("h4",{children:"Key Characteristics:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"LIFO Order:"})," The last element added is the first one removed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Limited Access:"})," Only the top element is accessible at any time"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Size:"})," Can grow or shrink as elements are pushed or popped"]})]}),e.jsx("h4",{children:"Common Operations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Push:"})," O(1) - Add an element to the top"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Pop:"})," O(1) - Remove the top element"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Peek:"})," O(1) - View the top element without removing it"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"isEmpty:"})," O(1) - Check if the stack is empty"]})]}),e.jsx("h4",{children:"Real-world Applications:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Undo mechanism in text editors"}),e.jsx("li",{children:"Expression evaluation and syntax parsing"}),e.jsx("li",{children:"Backtracking algorithms"}),e.jsx("li",{children:"Browser's back button history"}),e.jsx("li",{children:"Function call stack in programming languages"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("h4",{children:"What is a Queue?"}),e.jsx("p",{children:"A queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear (enqueued) and removed from the front (dequeued)."}),e.jsx("h4",{children:"Key Characteristics:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"FIFO Order:"})," The first element added is the first one removed"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Two Ends:"})," Elements enter at the rear and exit from the front"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Size:"})," Can grow or shrink as elements are added or removed"]})]}),e.jsx("h4",{children:"Common Operations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Enqueue:"})," O(1) - Add an element to the rear"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dequeue:"})," O(1) - Remove the front element"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Peek:"})," O(1) - View the front element without removing it"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"isEmpty:"})," O(1) - Check if the queue is empty"]})]}),e.jsx("h4",{children:"Real-world Applications:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"CPU scheduling in operating systems"}),e.jsx("li",{children:"Handling of service requests on a single shared resource"}),e.jsx("li",{children:"Breadth-first search algorithm"}),e.jsx("li",{children:"Print job scheduling"}),e.jsx("li",{children:"Data streaming"})]})]})})]})},Dt=({dataStructure:n="stack"})=>{const[t,i]=h.useState(!1),[s,a]=h.useState(0),[l,r]=h.useState("Copy Code to Clipboard"),c=n==="stack"?`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 10

typedef struct {
    int elements[MAX_SIZE];
    int top;
    int maxSize;
} Stack;

// Initialize stack
void initStack(Stack* s, int size) {
    s->top = -1;
    s->maxSize = (size > MAX_SIZE) ? MAX_SIZE : size;
}

// Check if stack is empty
bool isEmpty(Stack* s) {
    return s->top == -1;
}

// Check if stack is full
bool isFull(Stack* s) {
    return s->top >= s->maxSize - 1;
}

// Push element to top of stack
void push(Stack* s, int value) {
    if (isFull(s)) {
        printf("Stack overflow\\n");
        return;
    }
    s->top++;
    s->elements[s->top] = value;
    printf("Pushed %d to stack\\n", value);
}

// Remove and return top element
int pop(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack underflow\\n");
        return -1; // Error value
    }
    int topValue = s->elements[s->top];
    s->top--;
    printf("Popped %d from stack\\n", topValue);
    return topValue;
}

// View top element without removing
int peek(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return -1; // Error value
    }
    printf("Top element: %d\\n", s->elements[s->top]);
    return s->elements[s->top];
}

// Get current stack size
int size(Stack* s) {
    return s->top + 1;
}

// Display stack contents
void display(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack contents (top to bottom): ");
    for (int i = s->top; i >= 0; i--) {
        printf("%d", s->elements[i]);
        if (i > 0) printf(", ");
    }
    printf("\\n");
}

int main() {
    Stack stack;
    initStack(&stack, 5);  // Create a stack with max size 5
    
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);
    
    display(&stack);  // 30, 20, 10
    
    peek(&stack);     // 30
    pop(&stack);      // removes 30
    peek(&stack);     // 20
    
    push(&stack, 40);
    push(&stack, 50);
    
    display(&stack);  // 50, 40, 20, 10
    
    return 0;
    }
    
    return 0;
}`:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 10

typedef struct {
    int elements[MAX_SIZE];
    int front;
    int rear;
    int count;
    int maxSize;
} Queue;

// Initialize queue
void initQueue(Queue* q, int size) {
    q->front = 0;
    q->rear = -1;
    q->count = 0;
    q->maxSize = (size > MAX_SIZE) ? MAX_SIZE : size;
}

// Check if queue is empty
bool isEmpty(Queue* q) {
    return q->count == 0;
}

// Check if queue is full
bool isFull(Queue* q) {
    return q->count >= q->maxSize;
}

// Add element to rear of queue
void enqueue(Queue* q, int value) {
    if (isFull(q)) {
        printf("Queue overflow\\n");
        return;
    }
    q->rear = (q->rear + 1) % q->maxSize;
    q->elements[q->rear] = value;
    q->count++;
    printf("Enqueued %d to queue\\n", value);
}

// Remove and return front element
int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue underflow\\n");
        return -1; // Error value
    }
    int frontValue = q->elements[q->front];
    q->front = (q->front + 1) % q->maxSize;
    q->count--;
    printf("Dequeued %d from queue\\n", frontValue);
    return frontValue;
}

// View front element without removing
int peek(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1; // Error value
    }
    printf("Front element: %d\\n", q->elements[q->front]);
    return q->elements[q->front];
}

// Get current queue size
int size(Queue* q) {
    return q->count;
}

// Display queue contents
void display(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return;
    }
        
    printf("Queue contents (front to rear): ");
    int index = q->front;
    for (int i = 0; i < q->count; i++) {
        printf("%d", q->elements[index]);
        if (i < q->count - 1) printf(", ");
        index = (index + 1) % q->maxSize;
    }
    printf("\\n");
}

int main() {
    Queue queue;
    initQueue(&queue, 5);  // Create a queue with max size 5
    
    enqueue(&queue, 10);
    enqueue(&queue, 20);
    enqueue(&queue, 30);
    
    display(&queue);  // 10, 20, 30
    
    peek(&queue);     // 10
    dequeue(&queue);  // removes 10
    peek(&queue);     // 20
    
    enqueue(&queue, 40);
    enqueue(&queue, 50);
    
    display(&queue);  // 20, 30, 40, 50
    
    return 0;
}`,o=async()=>{await navigator.clipboard.writeText(c),a(u=>u+1);const d=["Copied!","Copied twice!","Mega copy!","Super copy!","Ultra copy!","MAXIMUM COPY!","LEGENDARY COPY!!","GODLIKE COPY!!!","BEYOND COPY!!!!","∞ COPY ∞"];r(d[Math.min(s,d.length-1)]),setTimeout(()=>{r("Copy Code to Clipboard")},2e3)};return e.jsxs("div",{className:"diy-section",children:[e.jsxs("h3",{onClick:()=>i(!t),style:{cursor:"pointer"},children:[t?"▼":"►"," How to Run This Code Yourself"]}),t&&e.jsxs("div",{className:"diy-content",children:[e.jsx("h4",{children:"Option 1: Online C Compiler"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Copy the code below"}),e.jsxs("li",{children:["Visit an online C compiler like ",e.jsx("a",{href:"https://www.onlinegdb.com/online_c_compiler",target:"_blank",rel:"noopener noreferrer",children:"OnlineGDB"})," or ",e.jsx("a",{href:"https://www.programiz.com/c-programming/online-compiler/",target:"_blank",rel:"noopener noreferrer",children:"Programiz"})]}),e.jsx("li",{children:'Paste the code and click "Run"'}),e.jsx("li",{children:"Experiment by modifying the operations in the main() function"})]}),e.jsx("h4",{children:"Option 2: Local Development"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["Save the code as ",e.jsx("code",{children:n==="stack"?"stack.c":"queue.c"})]}),e.jsxs("li",{children:["Compile with gcc: ",e.jsxs("code",{children:["gcc -o ",n," ",n,".c"]})]}),e.jsxs("li",{children:["Run the program: ",e.jsxs("code",{children:["./",n]})]})]}),e.jsx("h4",{children:"Try These Exercises:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Add a method to display all elements in the ",n]}),e.jsxs("li",{children:["Implement a method to check if a specific value exists in the ",n]}),n==="stack"?e.jsx("li",{children:"Implement a function to reverse a string using a stack"}):e.jsx("li",{children:"Implement a circular queue that reuses empty spaces"})]}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:c})}),e.jsx("button",{onClick:o,className:`copy-button ${l!=="Copy Code to Clipboard"?"copied":""}`,children:l})]})]})},Pt=()=>{const[n,t]=h.useState("stack"),[i,s]=h.useState([]),[a,l]=h.useState(""),[r,c]=h.useState(""),[o,d]=h.useState(!1),[u,p]=h.useState(!1),[g,j]=h.useState(""),[x,f]=h.useState(0),[S,v]=h.useState(Tt.MEDIUM),[L,m]=h.useState(!1),V=10,z=h.useRef(null),A=h.useCallback(E=>{p(!0),j(E);const b=setTimeout(()=>{p(!1),j("")},3e3);return()=>clearTimeout(b)},[]),T=h.useMemo(()=>Et(a)&&a.trim().length>0&&a.trim().length<=3,[a]);h.useEffect(()=>{s([]),l(""),c(""),f(0),p(!1),j("")},[n]);const y=h.useCallback(()=>S,[S]);h.useEffect(()=>{if(z.current&&x>0&&o){const E=z.current.querySelector("code");if(E){const b=E.querySelectorAll('span[style*="display: block"]');b[x-1]&&b[x-1].scrollIntoView({behavior:"smooth",block:"center"})}}},[x,o]);const N=h.useCallback(async()=>{if(!T){A("Please enter a valid value (1-3 characters)");return}if(i.length>=V){A(`Maximum size reached (${V})`);return}d(!0),m(!0);const E=y(),b=(D,C,M=null)=>new Promise(B=>{c(D),f(C),M&&M(),setTimeout(B,E)});c("Starting push operation..."),f(0),await new Promise(D=>setTimeout(D,E)),await b("Initializing stack object",13),await b(`Calling push(${a})`,42),await b("Checking if stack is full",43),await b("Checking current state with peek()",49),await b("Inside peek() method",33),await b("Checking if stack is empty",34),i.length===0?await b("Stack is empty (result of peek)",35):await b(`Stack not empty, top is ${i[i.length-1]} (result of peek)`,50),await b("Incrementing top index",53,()=>{s(D=>[...D,a])}),await b("Adding element to stack",54),await b(`Successfully pushed ${a}`,55),d(!1),m(!1),l(""),setTimeout(()=>{c(""),f(0)},2e3)},[a,i,T,y,A,V,c,f,s,l,d,m]),w=h.useCallback(async()=>{if(i.length===0){A("Stack is empty! Cannot pop.");return}d(!0),m(!0);const E=y(),b=(C,M,B=null)=>new Promise(R=>{c(C),f(M),B&&B(),setTimeout(R,E)});c("Starting pop operation..."),f(0),await new Promise(C=>setTimeout(C,E)),await b("Initializing stack object",13),await b("Calling pop()",58),await b("Checking if stack is empty",59),await b("Inside isEmpty() method",18),await b("Checking if top == -1",19),await b("Stack has elements, proceeding with pop",62);const D=i[i.length-1];await b(`Getting top element: ${D}`,64),await b("Decrementing top index",65,()=>{s(C=>C.slice(0,-1))}),await b("Pop operation complete",66),await b("Returning popped element",67),d(!1),m(!1),setTimeout(()=>{c(""),f(0)},2e3)},[i,y,A,c,f,s,d,m]),I=h.useCallback(async()=>{if(!T){A("Please enter a valid value (1-3 characters)");return}if(i.length>=V){A("Queue is full! Cannot enqueue more elements.");return}d(!0),m(!0);const E=y(),b=(D,C,M=null)=>new Promise(B=>{c(D),f(C),M&&M(),setTimeout(B,E)});c("Starting enqueue operation..."),f(0),await new Promise(D=>setTimeout(D,E)),await b("Initializing queue object",12),await b(`Calling enqueue(${a})`,40),await b("Checking current state with peek()",44),await b("Inside peek() method",29),await b("Checking if queue is empty",30),i.length===0?await b("Queue is empty (result of peek)",31):await b(`Current front element: ${i[0]} (result of peek)`,34),await b(`Adding ${a} to queue`,37,()=>{s(D=>[...D,a])}),await b(`Successfully enqueued ${a}`,39),d(!1),m(!1),l(""),setTimeout(()=>{c(""),f(0)},2e3)},[a,i,T,y,A,V,c,f,s,l,d,m]),q=h.useCallback(async()=>{if(i.length===0){A("Queue is empty! Cannot dequeue.");return}d(!0),m(!0);const E=y(),b=(C,M,B=null)=>new Promise(R=>{c(C),f(M),B&&B(),setTimeout(R,E)});c("Starting dequeue operation..."),f(0),await new Promise(C=>setTimeout(C,E)),await b("Initializing queue object",12),await b("Calling dequeue()",42),await b("Checking if queue is empty",43),await b("Inside isEmpty() method",18),await b("Checking if queue count is zero",19),await b("Queue has elements, proceeding with dequeue",46);const D=i[0];await b(`Getting front element: ${D}`,46),await b("Removing front element",47,()=>{s(C=>C.slice(1))}),await b("Dequeue operation complete",49),d(!1),m(!1),setTimeout(()=>{c(""),f(0)},2e3)},[i,y,A,c,f,s,d,m]),_=h.useCallback(async()=>{d(!0),m(!0);const E=y(),b=(D,C,M=null)=>new Promise(B=>{c(D),f(C),M&&M(),setTimeout(B,E)});c("Starting peek operation..."),f(0),await new Promise(D=>setTimeout(D,E)),await b("Initializing stack object",13),await b("Inside peek() method",33),await b("Checking if stack is empty",34),await b("Inside isEmpty() method",18),await b("Checking if top == -1",19),i.length===0?await b("Stack is empty - nothing to peek",35):await b(`Current top element: ${i[i.length-1]}`,38),d(!1),m(!1),setTimeout(()=>{c(""),f(0)},2e3)},[i,y,c,f,d,m]),U=h.useCallback(async()=>{d(!0),m(!0);const E=y(),b=(D,C,M=null)=>new Promise(B=>{c(D),f(C),M&&M(),setTimeout(B,E)});c("Starting peek operation..."),f(0),await new Promise(D=>setTimeout(D,E)),await b("Initializing queue object",12),await b("Inside peek() method",29),await b("Checking if queue is empty",30),await b("Inside isEmpty() method",18),await b("Checking if queue count is zero",19),i.length===0?await b("Queue is empty - nothing to peek",31):await b(`Current front element: ${i[0]}`,34),d(!1),m(!1),setTimeout(()=>{c(""),f(0)},2e3)},[i,y,c,f,d,m]),P=()=>n==="stack"?`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];  // Array to store stack elements
    int top;              // Index of top element
} Stack;

// Initialize empty stack
void initStack(Stack* s) {
    s->top = -1;
}

// Check if stack is empty
bool isEmpty(Stack* s) {
    return s->top == -1;
}

// Check if stack is full
bool isFull(Stack* s) {
    return s->top == MAX_SIZE - 1;
}

// Get size of stack
int size(Stack* s) {
    return s->top + 1;
}

// View top element without removing it
int peek(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return -1;  // Error value
    }
    return s->items[s->top];  // Get top element
}

// Add element to top of stack
void push(Stack* s, int element) {
    if (isFull(s)) {
        printf("Stack Overflow: Cannot push to full stack\\n");
        return;
    }
    
    // Check current state for visualization
    if (!isEmpty(s)) {
        printf("Current top: %d\\n", peek(s));
    }
    
    s->top++;                    // Increment top index
    s->items[s->top] = element; // Add element
    printf("Pushed %d to stack\\n", element);
}

// Remove and return top element
int pop(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack Underflow: Cannot pop from empty stack\\n");
        return -1;  // Error value
    }
    
    int topElement = s->items[s->top];  // Get top element
    s->top--;                           // Decrement top index
    printf("Popped %d from stack\\n", topElement);
    return topElement;
}

// Display all stack elements (top to bottom)
void display(Stack* s) {
    if (isEmpty(s)) {
        printf("Stack is empty\\n");
        return;
    }
    
    printf("Stack (top to bottom): ");
    for (int i = s->top; i >= 0; i--) {
        printf("%d ", s->items[i]);
    }
    printf("\\n");
}

// Example usage
int main() {
    Stack myStack;
    initStack(&myStack);
    push(&myStack, 10);
    push(&myStack, 20);
    display(&myStack);
    return 0;
}`:`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

typedef struct {
    int items[MAX_SIZE];  // Array to store queue elements
    int front;            // Index of front element
    int rear;             // Index of rear element
    int count;            // Number of elements in queue
} Queue;

// Initialize empty queue
void initQueue(Queue* q) {
    q->front = 0;
    q->rear = -1;
    q->count = 0;
}

// Check if queue is empty
bool isEmpty(Queue* q) {
    return q->count == 0;
}

// Check if queue is full
bool isFull(Queue* q) {
    return q->count == MAX_SIZE;
}

// Get size of queue
int size(Queue* q) {
    return q->count;
}

// View front element without removing it
int peek(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return -1;  // Error value
    }
    return q->items[q->front];  // Get front element
}

// Add element to rear of queue
void enqueue(Queue* q, int element) {
    if (isFull(q)) {
        printf("Queue Overflow: Cannot enqueue to full queue\\n");
        return;
    }
    
    // Check current state for visualization
    if (!isEmpty(q)) {
        printf("Current front: %d\\n", peek(q));
    }
    
    q->rear = (q->rear + 1) % MAX_SIZE;  // Circular increment
    q->items[q->rear] = element;         // Add element
    q->count++;                          // Increment count
    printf("Enqueued %d to queue\\n", element);
}

// Remove and return front element
int dequeue(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty: Cannot dequeue from empty queue\\n");
        return -1;  // Error value
    }
    
    int frontElement = q->items[q->front];  // Get front element
    q->front = (q->front + 1) % MAX_SIZE;   // Circular increment
    q->count--;                             // Decrement count
    printf("Dequeued %d from queue\\n", frontElement);
    return frontElement;
}

// Display all queue elements (front to rear)
void display(Queue* q) {
    if (isEmpty(q)) {
        printf("Queue is empty\\n");
        return;
    }
    
    printf("Queue (front to rear): ");
    int index = q->front;
    for (int i = 0; i < q->count; i++) {
        printf("%d ", q->items[index]);
        index = (index + 1) % MAX_SIZE;  // Circular increment
    }
    printf("\\n");
}

// Example usage
int main() {
    Queue myQueue;
    initQueue(&myQueue);
    enqueue(&myQueue, 10);
    enqueue(&myQueue, 20);
    display(&myQueue);
    return 0;
}`;return e.jsxs("div",{className:"stack-queue-container app-container",children:[e.jsxs("header",{className:"app-header",children:[e.jsxs(Y,{to:"/",className:"home-button",children:[e.jsx(te,{size:18}),e.jsx("span",{children:"Home"})]}),e.jsxs("h1",{style:{flex:1,textAlign:"center"},children:[n==="stack"?"Stack":"Queue"," Visualizer"]})]}),e.jsxs("div",{className:"split-view",children:[e.jsxs("div",{className:"panel panel-left",children:[e.jsxs("h2",{children:[n==="stack"?"C Stack":"C Queue"," Implementation"]}),e.jsx("div",{className:"code-viewer",ref:z,children:e.jsx(ce,{language:"c",style:de,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,codeTagProps:{style:{fontFamily:'"JetBrains Mono", "Fira Code", monospace',fontSize:"0.9rem"}},customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",lineHeight:"1.6",height:"100%",overflow:"auto",background:"#1e1e1e"},lineProps:E=>({style:{backgroundColor:E===x?"rgba(88, 166, 255, 0.3)":"transparent",display:"block",color:E===x?"#fff":void 0,fontWeight:E===x?"bold":"normal"}}),children:P()})})]}),e.jsxs("div",{className:"panel panel-right",children:[e.jsx("h2",{children:"Interactive Visualization"}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"control-group",children:[e.jsxs("select",{value:n,onChange:E=>t(E.target.value),disabled:o,className:"control-select",children:[e.jsx("option",{value:"stack",children:"Stack"}),e.jsx("option",{value:"queue",children:"Queue"})]}),e.jsx("input",{type:"text",value:a,onChange:E=>l(E.target.value.slice(0,3)),placeholder:"Enter node data",disabled:o||L,maxLength:3,className:"control-input"})]}),e.jsx("div",{className:"control-group",children:n==="stack"?e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:N,disabled:o||L||!T,className:"control-button",title:"Add element to top of stack",children:[e.jsx(ae,{})," Push"]}),e.jsxs("button",{onClick:w,disabled:o||L||i.length===0,className:"control-button",title:"Remove element from top of stack",children:[e.jsx(xe,{})," Pop"]}),e.jsxs("button",{onClick:_,disabled:o||L,className:"control-button",title:"View top element",children:[e.jsx(Re,{})," Peek"]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:I,disabled:o||L||!T,className:"control-button",title:"Add element to rear of queue",children:[e.jsx(ae,{})," Enqueue"]}),e.jsxs("button",{onClick:q,disabled:o||L||i.length===0,className:"control-button",title:"Remove element from front of queue",children:[e.jsx(xe,{})," Dequeue"]}),e.jsxs("button",{onClick:U,disabled:o||L,className:"control-button",title:"View front element",children:[e.jsx(Re,{})," Peek"]})]})}),e.jsxs("div",{className:"slider-group",children:[e.jsx("label",{children:"Animation Speed"}),e.jsx("input",{type:"range",min:"10",max:"2000",step:"10",value:S,onChange:E=>v(parseInt(E.target.value)),disabled:o,className:"speed-slider"}),e.jsxs("span",{children:[S,"ms"]})]}),o&&e.jsxs("div",{className:"animation-status",children:[e.jsx("div",{className:"spinner"}),e.jsx("span",{children:"Animating..."})]})]}),u&&e.jsx("div",{className:"error-message",children:g}),(o||r)&&e.jsx(Pe,{currentStep:r||(o?"Processing step...":""),isAnimating:o,loading:L}),e.jsxs("div",{className:`structure-visualization ${n}`,children:[e.jsxs("div",{className:"structure-info",children:[e.jsxs("span",{children:["Size: ",i.length," / ",V]}),n==="stack"?e.jsxs("span",{children:[" | Top: ",i[i.length-1]||"None"]}):e.jsxs("span",{children:[" | Front: ",i[0]||"None"," | Rear: ",i[i.length-1]||"None"]})]}),e.jsxs("div",{className:`structure-container ${n} ${i.length>0?"has-elements":""} ${i.length>5?"has-many-elements":""} ${i.length>7?"has-overflow":""}`,children:[e.jsx("div",{style:{display:"contents"},children:i.map((E,b)=>e.jsx("div",{className:"element",children:E},`${E}-${b}-${n}`))}),i.length===0&&e.jsxs("div",{className:"placeholder",children:[e.jsx("p",{children:n==="stack"?"Stack is empty":"Queue is empty"}),e.jsx("small",{children:n==="stack"?"Use Push to add elements to the top":"Use Enqueue to add elements to the rear"})]})]})]}),e.jsx(Ot,{dataStructure:n}),e.jsx(Dt,{dataStructure:n})]})]})]})},Bt=[{id:"bst",title:"Binary Search Tree",description:"A hierarchical data structure where left children are smaller and right children are larger than parent",icon:e.jsx(ge,{}),color:"#4f46e5",route:"/trees/bst",difficulty:"Beginner",timeComplexity:"O(log n)",features:["Ordered traversal","Efficient search","Dynamic insertion"],gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{id:"avl",title:"AVL Tree",description:"Self-balancing binary search tree that maintains balance through rotations for optimal performance",icon:e.jsx(it,{}),color:"#0891b2",route:"/trees/avl",difficulty:"Advanced",timeComplexity:"O(log n)",features:["Self-balancing","Guaranteed O(log n)","Automatic rotations"],gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{id:"heap",title:"Min/Max Heap",description:"Complete binary tree that maintains heap property - parent is smaller (min-heap) or larger (max-heap) than children",icon:e.jsx(nt,{}),color:"#dc2626",route:"/trees/heap",difficulty:"Intermediate",timeComplexity:"O(log n)",features:["Priority queue","Efficient extract-min/max","Complete tree structure"],gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}],_t=()=>e.jsxs("div",{className:"tree-home",children:[e.jsxs("div",{className:"tree-home-header",children:[e.jsxs(Y,{to:"/",className:"tree-home-btn",children:[e.jsx(te,{}),e.jsx("span",{children:"Home"})]}),e.jsx("h1",{className:"main-title",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Tree Data Structures"}),e.jsx("p",{className:"subtitle",children:"Explore hierarchical data structures and their applications"})]}),e.jsx("div",{className:"cards-container",children:Bt.map((n,t)=>e.jsxs("div",{className:"tree-card",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:t*.2,ease:"easeOut"},whileHover:{scale:1.02,boxShadow:"0 20px 40px rgba(0, 0, 0, 0.3)"},whileTap:{scale:.98},children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"icon-container",style:{color:n.color},children:n.icon}),e.jsxs("div",{className:"card-badges",children:[e.jsx("span",{className:`difficulty-badge ${n.difficulty.toLowerCase()}`,children:n.difficulty}),e.jsxs("span",{className:"complexity-badge",children:[e.jsx(tt,{})," ",n.timeComplexity]})]})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("h3",{className:"card-title",children:n.title}),e.jsx("p",{className:"card-description",children:n.description}),e.jsx("div",{className:"features-list",children:n.features.map((i,s)=>e.jsx("span",{className:"feature-tag",children:i},s))})]}),e.jsx(Y,{to:n.route,className:"card-link",children:e.jsxs("div",{className:"explore-btn",whileHover:{x:5},transition:{type:"spring",stiffness:300},children:[e.jsx("span",{children:"Explore"}),e.jsx(He,{})]})}),e.jsx("div",{className:"card-gradient",style:{background:n.gradient}})]},n.id))}),e.jsx("div",{className:"info-section",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.6},children:e.jsxs("div",{className:"info-card",children:[e.jsx(qe,{className:"info-icon"}),e.jsx("h3",{children:"Interactive Learning"}),e.jsx("p",{children:"Each visualizer provides step-by-step animations, code implementation, and real-time interaction to help you understand tree algorithms."})]})})]}),Ut=()=>{const[n,t]=h.useState(!1);return e.jsxs("div",{className:"explanation-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," Understanding Binary Search Trees"]}),n&&e.jsxs("div",{className:"explanation-content",children:[e.jsx("h4",{children:"What is a Binary Search Tree?"}),e.jsx("p",{children:"A Binary Search Tree (BST) is a hierarchical data structure where each node has at most two children, referred to as the left child and right child. It maintains a specific ordering property that makes searching, insertion, and deletion operations efficient."}),e.jsx("h4",{children:"Key Properties:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Left Subtree:"})," All values in the left subtree are less than the node's value"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Right Subtree:"})," All values in the right subtree are greater than the node's value"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Recursive Structure:"})," Each subtree is also a valid BST"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"No Duplicates:"})," Each value appears only once in the tree"]})]}),e.jsx("h4",{children:"Common Operations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Insert:"})," Average O(log n), Worst O(n) - Add a new value while maintaining BST property"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Search:"})," Average O(log n), Worst O(n) - Find if a value exists in the tree"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Delete:"})," Average O(log n), Worst O(n) - Remove a value while maintaining BST structure"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Traversals:"})," O(n) - Visit all nodes in specific order (inorder, preorder, postorder)"]})]}),e.jsx("h4",{children:"Tree Traversals:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Inorder (Left-Root-Right):"})," Visits nodes in ascending sorted order"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Preorder (Root-Left-Right):"})," Useful for creating a copy of the tree"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Postorder (Left-Right-Root):"})," Useful for deleting or freeing nodes"]})]}),e.jsx("h4",{children:"Real-world Applications:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Database indexing for fast lookups"}),e.jsx("li",{children:"Expression parsing in compilers"}),e.jsx("li",{children:"File system directories"}),e.jsx("li",{children:"Priority queues and scheduling algorithms"}),e.jsx("li",{children:"Auto-complete and search suggestions"}),e.jsx("li",{children:"Decision trees in machine learning"})]}),e.jsx("h4",{children:"Performance Considerations:"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Best Case:"})," A balanced BST provides O(log n) performance for all operations.",e.jsx("br",{}),e.jsx("strong",{children:"Worst Case:"})," An unbalanced BST (essentially a linked list) degrades to O(n) performance.",e.jsx("br",{}),e.jsx("strong",{children:"Solution:"})," Self-balancing trees like AVL trees or Red-Black trees maintain balance automatically."]})]})]})},Gt=()=>{const[n,t]=h.useState(!1),[i,s]=h.useState(0),[a,l]=h.useState("Copy Code to Clipboard"),r=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_DEPTH 4  // Maximum tree depth for visualization

// BST Node structure
typedef struct TreeNode {
    int value;
    struct TreeNode* left;
    struct TreeNode* right;
} TreeNode;

// BST structure
typedef struct {
    TreeNode* root;
    int nodeCount;
    int maxDepth;
} BST;

// Create a new node
TreeNode* createNode(int value) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    if (node == NULL) {
        printf("Memory allocation failed\\n");
        return NULL;
    }
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Check if inserting would exceed depth limit
bool wouldExceedDepth(TreeNode* root, int value, int currentDepth) {
    if (currentDepth >= MAX_DEPTH) return true;
    if (root == NULL) return false;
    
    if (value < root->value) {
        return wouldExceedDepth(root->left, value, currentDepth + 1);
    } else if (value > root->value) {
        return wouldExceedDepth(root->right, value, currentDepth + 1);
    }
    return false; // Value already exists
}

// Insert a value into BST with depth checking
TreeNode* insert(TreeNode* root, int value, BST* bst) {
    // Check depth limit before insertion
    if (root != NULL && wouldExceedDepth(root, value, 0)) {
        printf("Cannot insert %d: would exceed maximum depth limit\\n", value);
        return root;
    }
    
    // Base case: empty spot found
    if (root == NULL) {
        TreeNode* newNode = createNode(value);
        if (newNode != NULL) {
            bst->nodeCount++;
            printf("Inserted %d successfully\\n", value);
        }
        return newNode;
    }
    
    // Recursive insertion
    if (value < root->value) {
        printf("Going left from %d to insert %d\\n", root->value, value);
        root->left = insert(root->left, value, bst);
    } else if (value > root->value) {
        printf("Going right from %d to insert %d\\n", root->value, value);
        root->right = insert(root->right, value, bst);
    } else {
        printf("Value %d already exists in the tree\\n", value);
    }
    
    return root;
}

// Search for a value in BST
bool search(TreeNode* root, int value) {
    if (root == NULL) {
        printf("Value %d not found\\n", value);
        return false;
    }
    
    printf("Checking node with value %d\\n", root->value);
    
    if (value == root->value) {
        printf("Found %d!\\n", value);
        return true;
    } else if (value < root->value) {
        printf("Going left from %d to search for %d\\n", root->value, value);
        return search(root->left, value);
    } else {
        printf("Going right from %d to search for %d\\n", root->value, value);
        return search(root->right, value);
    }
}

// Find minimum value node (leftmost node)
TreeNode* findMin(TreeNode* root) {
    while (root && root->left != NULL) {
        root = root->left;
    }
    return root;
}

// Delete a value from BST
TreeNode* delete(TreeNode* root, int value, BST* bst) {
    if (root == NULL) {
        printf("Value %d not found for deletion\\n", value);
        return root;
    }
    
    if (value < root->value) {
        printf("Going left from %d to delete %d\\n", root->value, value);
        root->left = delete(root->left, value, bst);
    } else if (value > root->value) {
        printf("Going right from %d to delete %d\\n", root->value, value);
        root->right = delete(root->right, value, bst);
    } else {
        // Node to be deleted found
        printf("Deleting node with value %d\\n", value);
        bst->nodeCount--;
        
        // Case 1: Node with only right child or no child
        if (root->left == NULL) {
            TreeNode* temp = root->right;
            free(root);
            return temp;
        }
        // Case 2: Node with only left child
        else if (root->right == NULL) {
            TreeNode* temp = root->left;
            free(root);
            return temp;
        }
        
        // Case 3: Node with two children
        TreeNode* temp = findMin(root->right);
        printf("Replacing %d with %d (inorder successor)\\n", value, temp->value);
        
        // Copy the inorder successor's value to this node
        root->value = temp->value;
        
        // Delete the inorder successor
        root->right = delete(root->right, temp->value, bst);
    }
    return root;
}

// Inorder traversal (Left-Root-Right) - gives sorted order
void inorderTraversal(TreeNode* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        printf("%d ", root->value);
        inorderTraversal(root->right);
    }
}

// Preorder traversal (Root-Left-Right)
void preorderTraversal(TreeNode* root) {
    if (root != NULL) {
        printf("%d ", root->value);
        preorderTraversal(root->left);
        preorderTraversal(root->right);
    }
}

// Postorder traversal (Left-Right-Root)
void postorderTraversal(TreeNode* root) {
    if (root != NULL) {
        postorderTraversal(root->left);
        postorderTraversal(root->right);
        printf("%d ", root->value);
    }
}

// Free all nodes in the tree
void freeTree(TreeNode* root) {
    if (root != NULL) {
        freeTree(root->left);
        freeTree(root->right);
        free(root);
    }
}

// Initialize BST
BST* createBST() {
    BST* bst = (BST*)malloc(sizeof(BST));
    if (bst == NULL) {
        printf("Memory allocation failed\\n");
        return NULL;
    }
    bst->root = NULL;
    bst->nodeCount = 0;
    bst->maxDepth = MAX_DEPTH;
    return bst;
}

// Example usage
int main() {
    BST* myBST = createBST();
    if (myBST == NULL) {
        return 1;
    }
    
    printf("=== Binary Search Tree Demo ===\\n");
    
    // Insert values
    printf("\\nInserting values: 50, 30, 70, 20, 40, 60, 80\\n");
    myBST->root = insert(myBST->root, 50, myBST);
    myBST->root = insert(myBST->root, 30, myBST);
    myBST->root = insert(myBST->root, 70, myBST);
    myBST->root = insert(myBST->root, 20, myBST);
    myBST->root = insert(myBST->root, 40, myBST);
    myBST->root = insert(myBST->root, 60, myBST);
    myBST->root = insert(myBST->root, 80, myBST);
    
    printf("\\nTotal nodes in tree: %d\\n", myBST->nodeCount);
    
    // Traversals
    printf("\\nInorder traversal (sorted): ");
    inorderTraversal(myBST->root);
    printf("\\n");
    
    printf("Preorder traversal: ");
    preorderTraversal(myBST->root);
    printf("\\n");
    
    printf("Postorder traversal: ");
    postorderTraversal(myBST->root);
    printf("\\n");
    
    // Search examples
    printf("\\nSearching for 40:\\n");
    search(myBST->root, 40);
    
    printf("\\nSearching for 25:\\n");
    search(myBST->root, 25);
    
    // Delete examples
    printf("\\nDeleting 20 (leaf node):\\n");
    myBST->root = delete(myBST->root, 20, myBST);
    
    printf("\\nDeleting 30 (node with two children):\\n");
    myBST->root = delete(myBST->root, 30, myBST);
    
    printf("\\nInorder after deletions: ");
    inorderTraversal(myBST->root);
    printf("\\n");
    
    printf("\\nTotal nodes after deletions: %d\\n", myBST->nodeCount);
    
    // Clean up
    freeTree(myBST->root);
    free(myBST);
    
    return 0;
}

/*
Expected Output:
=== Binary Search Tree Demo ===

Inserting values: 50, 30, 70, 20, 40, 60, 80
Inserted 50 successfully
Going left from 50 to insert 30
Inserted 30 successfully
Going right from 50 to insert 70
Inserted 70 successfully
Going left from 50 to insert 20
Going left from 30 to insert 20
Inserted 20 successfully
Going left from 50 to insert 40
Going right from 30 to insert 40
Inserted 40 successfully
Going right from 50 to insert 60
Going left from 70 to insert 60
Inserted 60 successfully
Going right from 50 to insert 80
Going right from 70 to insert 80
Inserted 80 successfully

Total nodes in tree: 7

Inorder traversal (sorted): 20 30 40 50 60 70 80 
Preorder traversal: 50 30 20 40 70 60 80 
Postorder traversal: 20 40 30 60 80 70 50 

Searching for 40:
Checking node with value 50
Going left from 50 to search for 40
Checking node with value 30
Going right from 30 to search for 40
Checking node with value 40
Found 40!

Searching for 25:
Checking node with value 50
Going left from 50 to search for 25
Checking node with value 30
Going left from 30 to search for 25
Checking node with value 20
Going right from 20 to search for 25
Value 25 not found

Deleting 20 (leaf node):
Going left from 50 to delete 20
Going left from 30 to delete 20
Deleting node with value 20

Deleting 30 (node with two children):
Going left from 50 to delete 30
Deleting node with value 30
Replacing 30 with 40 (inorder successor)
Going right from 40 to delete 40
Deleting node with value 40

Inorder after deletions: 40 50 60 70 80 

Total nodes after deletions: 5
*/`,c=async()=>{try{await navigator.clipboard.writeText(r);const o=i+1;s(o),l(`Copied! (${o})`),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}catch(o){console.error("Failed to copy code: ",o),l("Copy failed - try selecting manually"),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}};return e.jsxs("div",{className:"diy-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," How to Run This Code Yourself"]}),n&&e.jsxs("div",{className:"diy-content",children:[e.jsx("p",{children:"Want to implement and experiment with Binary Trees yourself? Below are runnable C examples. For BST/AVL/Heap, save the appropriate file and compile it as shown."}),e.jsx("h4",{children:"🚀 Quick Start:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Copy the code below"}),e.jsxs("li",{children:["Save as ",e.jsx("code",{children:"bst.c"})," for Binary Search Tree, ",e.jsx("code",{children:"avl.c"})," for AVL Tree, or ",e.jsx("code",{children:"heap.c"})," for Heaps"]}),e.jsxs("li",{children:["Compile:",e.jsxs("ul",{children:[e.jsxs("li",{children:["BST: ",e.jsx("code",{children:"gcc -o bst bst.c"})]}),e.jsxs("li",{children:["AVL: ",e.jsx("code",{children:"gcc -o avl avl.c"})]}),e.jsxs("li",{children:["Heap: ",e.jsx("code",{children:"gcc -o heap heap.c"})]})]})]}),e.jsxs("li",{children:["Run:",e.jsxs("ul",{children:[e.jsxs("li",{children:["BST: ",e.jsx("code",{children:"./bst"})]}),e.jsxs("li",{children:["AVL: ",e.jsx("code",{children:"./avl"})]}),e.jsxs("li",{children:["Heap: ",e.jsx("code",{children:"./heap"})]})]})]})]}),e.jsx("h4",{children:"💡 Try These Experiments:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"BST/AVL: insert different sequences and compare final shapes"}),e.jsx("li",{children:"AVL: cause each rotation type (LL, RR, LR, RL) and verify heights/balance"}),e.jsx("li",{children:"Heap: build from array, then test sequences of insert and extract root"}),e.jsx("li",{children:"Try inserting values that would exceed the depth limit (BST sample)"}),e.jsx("li",{children:"Compare traversal outputs (inorder, preorder, postorder)"}),e.jsx("li",{children:"Test edge cases: empty structure, single node, duplicates"})]}),e.jsx("h4",{children:"🔧 Code Features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"BST: depth-limited insertion (prevents visualization overflow)"}),e.jsx("li",{children:"AVL: height and balance factor tracking with rotations"}),e.jsx("li",{children:"Heap: array-based complete tree with sift up/down and O(n) build-heap"}),e.jsx("li",{children:"Traversals for trees (inorder, preorder, postorder)"}),e.jsx("li",{children:"Memory management and error handling"}),e.jsx("li",{children:"Detailed step-by-step output for learning"})]}),e.jsxs("div",{className:"code-container",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"language-label",children:"C"}),e.jsx("button",{onClick:c,className:"copy-button",title:"Copy code to clipboard",children:a})]}),e.jsx("div",{className:"code-content",children:e.jsx("pre",{children:e.jsx("code",{children:r})})})]}),e.jsx("h4",{children:"🎯 Learning Extensions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Balance Analysis:"})," Add a function to check if the tree is balanced"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Height Calculation:"})," Implement a function to calculate tree height"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Level-order Traversal:"})," Add breadth-first traversal using a queue"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tree Visualization:"})," Print the tree structure in a visual format"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Testing:"})," Time the operations with different input sizes"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Self-Balancing:"})," Research and implement AVL or Red-Black tree rotations"]})]}),e.jsxs("div",{className:"tip-box",children:[e.jsx("h4",{children:"💡 Pro Tip:"}),e.jsx("p",{children:"The inorder traversal of a BST always produces values in sorted order! This makes BSTs excellent for maintaining sorted collections with fast insertion and deletion."})]})]})]})};class Jt{constructor(t){this.value=t,this.left=null,this.right=null}}class Xt{constructor(){this.root=null,this.animationSteps=[],this.maxDepth=4,this.nodeCount=0}insert(t){return this.animationSteps=[],this.root&&this.wouldExceedDepth(this.root,t,0)?(this.animationSteps.push({type:"depth_limit",currentNode:null,value:t,path:[],line:41,description:`Checking if inserting ${t} would exceed maximum depth...`}),this.animationSteps.push({type:"depth_limit",currentNode:null,value:t,path:[],line:28,description:`Depth limit check: currentDepth >= MAX_DEPTH (${this.maxDepth})`}),this.animationSteps.push({type:"depth_limit",currentNode:null,value:t,path:[],line:42,description:`❌ Cannot insert ${t}: Would exceed maximum tree depth of ${this.maxDepth+1}`,error:!0}),this.animationSteps):(this.root=this.insertNodeWithAnimation(this.root,t,[]),this.nodeCount++,this.animationSteps)}wouldExceedDepth(t,i,s){return s>=this.maxDepth?!0:t?i<t.value?this.wouldExceedDepth(t.left,i,s+1):i>t.value?this.wouldExceedDepth(t.right,i,s+1):!1:!1}insertNodeWithAnimation(t,i,s){if(t===null)this.animationSteps.push({type:"insert",currentNode:null,value:i,path:[...s],line:46,description:"Checking: if (root == NULL) - condition is TRUE, found insertion point"}),this.animationSteps.push({type:"insert",currentNode:null,value:i,path:[...s],line:47,description:`Creating and returning new node with value ${i}`}),this.animationSteps.push({type:"insert",currentNode:i,value:i,path:[...s],line:12,description:`New node ${i} created successfully and linked to tree`});else if(this.animationSteps.push({type:"insert",currentNode:t.value,value:i,path:[...s],line:46,description:`Checking: if (${t.value} == NULL) - condition is FALSE, need to compare values`}),this.animationSteps.push({type:"insert",currentNode:t.value,value:i,path:[...s],line:50,description:`Comparing: ${i} vs ${t.value} to determine direction`}),i<t.value)this.animationSteps.push({type:"insert",currentNode:t.value,value:i,path:[...s],line:51,description:`${i} < ${t.value}, inserting in LEFT subtree`});else if(i>t.value)this.animationSteps.push({type:"insert",currentNode:t.value,value:i,path:[...s],line:53,description:`${i} > ${t.value}, inserting in RIGHT subtree`});else return this.animationSteps.push({type:"insert",currentNode:t.value,value:i,path:[...s],line:52,description:`${i} == ${t.value}, duplicate value - skipping insertion`}),t;return t===null?new Jt(i):(i<t.value?t.left=this.insertNodeWithAnimation(t.left,i,[...s,"left"]):i>t.value&&(t.right=this.insertNodeWithAnimation(t.right,i,[...s,"right"])),t)}search(t){return this.animationSteps=[],{found:this.searchNodeWithAnimation(this.root,t,[]),steps:this.animationSteps}}searchNodeWithAnimation(t,i,s){return t===null?(this.animationSteps.push({type:"search",currentNode:null,value:i,path:[...s],line:60,description:`Checking: if (root == NULL) - condition is TRUE, reached end without finding ${i}`}),this.animationSteps.push({type:"search",currentNode:null,value:i,path:[...s],line:61,description:`Returning 0: ${i} NOT FOUND in tree`}),!1):(this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:60,description:`Checking: if (${t.value} == NULL) - condition is FALSE, examining node ${t.value}`}),i===t.value?(this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:64,description:`Checking: if (${i} == ${t.value}) - condition is TRUE! FOUND!`}),this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:65,description:`Returning 1: ${i} FOUND at this node!`}),!0):(this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:64,description:`Checking: if (${i} == ${t.value}) - condition is FALSE, need to search deeper`}),i<t.value?(this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:68,description:`Checking: if (${i} < ${t.value}) - condition is TRUE, search LEFT`}),this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:69,description:`Moving to LEFT child to continue search for ${i}`}),this.searchNodeWithAnimation(t.left,i,[...s,"left"])):(this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:68,description:`Checking: if (${i} < ${t.value}) - condition is FALSE`}),this.animationSteps.push({type:"search",currentNode:t.value,value:i,path:[...s],line:71,description:`Moving to RIGHT child to continue search for ${i}`}),this.searchNodeWithAnimation(t.right,i,[...s,"right"]))))}clear(){this.root=null,this.animationSteps=[],this.nodeCount=0}getTreeDimensions(){if(!this.root)return{width:500,height:300};const t=s=>s?1+Math.max(t(s.left),t(s.right)):0,i=t(this.root);return{width:Math.max(i*140,500),height:Math.max(i*90,300),maxDepth:i}}inorderTraversal(){this.animationSteps=[];const t=[];return this.inorderHelper(this.root,t),{result:t,steps:this.animationSteps}}inorderHelper(t,i){t!==null?(this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Entering inorder function with node ${t.value}`,line:76}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Checking: if (${t.value} != NULL) - condition is TRUE`,line:77}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`At node ${t.value}: First, process left subtree (L in L-Root-R)`,line:78}),this.inorderHelper(t.left,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Back at node ${t.value}: Left subtree done, now process ROOT`,line:79}),i.push(t.value),this.animationSteps.push({type:"visit",currentNode:t.value,description:`VISITING node ${t.value}: Printing value (Root step of L-Root-R)`,line:79}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`At node ${t.value}: Finally, process right subtree (R in L-Root-R)`,line:80}),this.inorderHelper(t.right,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Completed processing node ${t.value}: L-Root-R all done, returning`,line:81})):this.animationSteps.push({type:"traverse",currentNode:null,description:"Reached NULL node - base case, returning immediately",line:77})}preorderTraversal(){this.animationSteps=[];const t=[];return this.preorderHelper(this.root,t),{result:t,steps:this.animationSteps}}preorderHelper(t,i){t!==null?(this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Entering preorder function with node ${t.value}`,line:84}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Checking: if (${t.value} != NULL) - condition is TRUE`,line:85}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`At node ${t.value}: FIRST, process ROOT (Root in Root-L-R)`,line:86}),i.push(t.value),this.animationSteps.push({type:"visit",currentNode:t.value,description:`VISITING node ${t.value}: Printing value (Root step of Root-L-R)`,line:86}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`At node ${t.value}: Next, process left subtree (L in Root-L-R)`,line:87}),this.preorderHelper(t.left,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Back at node ${t.value}: Left done, now process right subtree (R in Root-L-R)`,line:88}),this.preorderHelper(t.right,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Completed processing node ${t.value}: Root-L-R all done, returning`,line:89})):this.animationSteps.push({type:"traverse",currentNode:null,description:"Reached NULL node - base case, returning immediately",line:85})}postorderTraversal(){this.animationSteps=[];const t=[];return this.postorderHelper(this.root,t),{result:t,steps:this.animationSteps}}postorderHelper(t,i){t!==null?(this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Entering postorder function with node ${t.value}`,line:92}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Checking: if (${t.value} != NULL) - condition is TRUE`,line:93}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`At node ${t.value}: FIRST, process left subtree (L in L-R-Root)`,line:94}),this.postorderHelper(t.left,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Back at node ${t.value}: Left done, now process right subtree (R in L-R-Root)`,line:95}),this.postorderHelper(t.right,i),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Back at node ${t.value}: Both children done, FINALLY process ROOT (Root in L-R-Root)`,line:96}),i.push(t.value),this.animationSteps.push({type:"visit",currentNode:t.value,description:`VISITING node ${t.value}: Printing value LAST (Root step of L-R-Root)`,line:96}),this.animationSteps.push({type:"traverse",currentNode:t.value,description:`Completed processing node ${t.value}: L-R-Root all done, returning`,line:97})):this.animationSteps.push({type:"traverse",currentNode:null,description:"Reached NULL node - base case, returning immediately",line:93})}}const Qt=({tree:n,highlightedNode:t,currentStep:i})=>{const s=h.useRef(null);if(!n.root)return e.jsx("div",{className:"tree-display",children:e.jsxs("div",{className:"empty-tree",children:[e.jsx("p",{children:"No tree to display"}),e.jsx("p",{children:"Insert some values to get started"})]})});const a=(p,g=0,j=0,x=800)=>{if(!p)return null;const f=60,S=70,v=N=>N?!N.left&&!N.right?f:v(N.left)+v(N.right)+f:0;v(p.left),v(p.right);const L=x-j,m=j+L/2,V=50+g*S,z=m-f/2,A=m+f/2,T=p.left?a(p.left,g+1,j,z):null,y=p.right?a(p.right,g+1,A,x):null;return{node:p,x:m,y:V,level:g,leftChild:T,rightChild:y}},l=p=>p?1+Math.max(l(p.left),l(p.right)):0,r=l(n.root),c="100%",o=Math.min(460,Math.max(r*70+100,300)),d=a(n.root,0,50,710),u=p=>{if(!p)return[];const{node:g,x:j,y:x,leftChild:f,rightChild:S}=p,v=[],L=22,m=t===g.value,V=i&&i.currentNode===g.value,z=i&&i.type==="visit"&&i.currentNode===g.value;f&&v.push(e.jsx("line",{x1:j,y1:x+L,x2:f.x,y2:f.y-L,stroke:V?"#58a6ff":"#666",strokeWidth:V?"3":"2",className:`tree-edge ${V?"highlighted":""}`,strokeLinecap:"round"},`edge-left-${g.value}`)),S&&v.push(e.jsx("line",{x1:j,y1:x+L,x2:S.x,y2:S.y-L,stroke:V?"#58a6ff":"#666",strokeWidth:V?"3":"2",className:`tree-edge ${V?"highlighted":""}`,strokeLinecap:"round"},`edge-right-${g.value}`));let A;return z?A="#f39c12":V?A="#58a6ff":m?A="#f85149":A="#238636",v.push(e.jsxs("g",{className:"tree-node",children:[e.jsx("circle",{cx:j,cy:x,r:L,fill:A,stroke:"#fff",strokeWidth:"2",className:"node-circle"}),e.jsx("text",{x:j,y:x,textAnchor:"middle",dominantBaseline:"middle",fill:"white",fontSize:"16",fontWeight:"700",className:"node-text",children:g.value})]},`node-${g.value}`)),f&&v.push(...u(f)),S&&v.push(...u(S)),v};return e.jsx("div",{className:"tree-display",children:e.jsx("svg",{ref:s,width:c,height:o,className:"tree-svg",viewBox:`0 0 760 ${o}`,preserveAspectRatio:"xMidYMid meet",children:u(d)})})},Wt=()=>{const[n]=h.useState(new Xt),[t,i]=h.useState(""),[s,a]=h.useState("Ready for operations"),[l,r]=h.useState(0),[c,o]=h.useState([]),[d,u]=h.useState(0),[p,g]=h.useState(!1),[j,x]=h.useState(1e3),[f,S]=h.useState(null),[v,L]=h.useState(0),[m,V]=h.useState(null),[z,A]=h.useState([]),[T,y]=h.useState(""),[N,w]=h.useState([]),I=h.useRef(null),q=h.useRef(null);h.useEffect(()=>{if(v&&q.current){const k=q.current.querySelector(`[data-line-number="${v}"]`);k&&k.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}},[v]),h.useEffect(()=>(I.current&&clearTimeout(I.current),p&&d<c.length-1?I.current=setTimeout(()=>{u(k=>k+1)},j):d>=c.length-1&&g(!1),()=>{I.current&&clearTimeout(I.current)}),[p,d,c.length,j]),h.useEffect(()=>{if(c.length>0&&d<c.length){const k=c[d];if(S(k.currentNode),L(k.line),a(k.description),V(k),(k.type==="visit"||k.type==="traverse")&&k.currentNode!==null&&N.length>0){const O=[];for(let G=0;G<=d;G++){const ie=c[G];ie.type==="visit"&&ie.currentNode!==null&&(O.includes(ie.currentNode)||O.push(ie.currentNode))}A(O)}["inorder","preorder","postorder"].includes(T)||A([])}else V(null)},[c,d,N,T]);const _=()=>{r(k=>k+1)},U=()=>{I.current&&clearTimeout(I.current),g(!1),o([]),u(0),S(null),L(0),V(null),n&&(n.animationSteps=[])},P=()=>{const k=parseInt(t);if(isNaN(k)){a("Please enter a valid number");return}U(),setTimeout(()=>{const O=n.insert(k);if(A([]),y(""),w([]),O.length>0&&O[0].error){o(O),u(0),a(O[0].description),i(""),g(!0);return}if(O.length===0){a(`Cannot insert ${k} - unexpected error`);return}o(O),u(0),a(`Inserting ${k}...`),i(""),_(),O.length>0&&g(!0)},50)},E=()=>{const k=parseInt(t);if(isNaN(k)){a("Please enter a valid number");return}U(),setTimeout(()=>{const{found:O,steps:G}=n.search(k);A([]),y(""),w([]),o(G),u(0),a(`Searching for ${k}...`),G.length>0?g(!0):a(O?`Found ${k}!`:`${k} not found`)},50)},b=()=>{U(),n.clear(),A([]),y(""),w([]);const k=[];for(let O=0;O<7;O++)k.push(Math.floor(Math.random()*100)+1);k.forEach(O=>n.insert(O)),a(`Generated random tree: ${k.join(", ")}`),_()},D=()=>{U(),n.clear(),A([]),y(""),w([]),a("Tree cleared"),_()},C=()=>{c.length>0&&g(!p)},M=()=>{d<c.length-1&&u(k=>k+1)},B=()=>{d>0&&u(k=>k-1)},R=k=>{if(!n.root){a("Tree is empty - add some nodes first"),A([]),y(""),w([]);return}U(),setTimeout(()=>{let O,G;switch(k){case"inorder":({result:O,steps:G}=n.inorderTraversal()),a(`Inorder traversal: ${O.join(" → ")}`);break;case"preorder":({result:O,steps:G}=n.preorderTraversal()),a(`Preorder traversal: ${O.join(" → ")}`);break;case"postorder":({result:O,steps:G}=n.postorderTraversal()),a(`Postorder traversal: ${O.join(" → ")}`);break;default:A([]),y(""),w([]);return}y(k),w(O),A([]),o(G),u(0),G.length>0&&g(!0)},50)},$=()=>`#include <stdio.h>
#include <stdlib.h>

#define MAX_DEPTH 4  // Maximum tree depth allowed

struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

struct TreeNode* createNode(int value) {
    struct TreeNode* newNode = malloc(sizeof(struct TreeNode));
    newNode->data = value;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

int getDepth(struct TreeNode* root) {
    if (root == NULL) return 0;
    int leftDepth = getDepth(root->left);
    int rightDepth = getDepth(root->right);
    return 1 + (leftDepth > rightDepth ? leftDepth : rightDepth);
}

int wouldExceedDepth(struct TreeNode* root, int value, int currentDepth) {
    if (currentDepth >= MAX_DEPTH) return 1;  // Would exceed limit
    if (root == NULL) return 0;
    
    if (value < root->data) {
        return wouldExceedDepth(root->left, value, currentDepth + 1);
    } else if (value > root->data) {
        return wouldExceedDepth(root->right, value, currentDepth + 1);
    }
    return 0; // Duplicate value
}

struct TreeNode* insert(struct TreeNode* root, int value) {
    // Check depth limit before insertion
    if (root != NULL && wouldExceedDepth(root, value, 0)) {
        printf("Error: Cannot insert %d - would exceed max depth\\n", value);
        return root;
    }
    
    if (root == NULL) {
        return createNode(value);
    }
    
    if (value < root->data) {
        root->left = insert(root->left, value);
    } else if (value > root->data) {
        root->right = insert(root->right, value);
    }
    
    return root;
}

int search(struct TreeNode* root, int value) {
    if (root == NULL) {
        return 0; // Not found
    }
    
    if (value == root->data) {
        return 1; // Found
    }
    
    if (value < root->data) {
        return search(root->left, value);
    } else {
        return search(root->right, value);
    }
}

// Tree Traversal Functions
void inorder(struct TreeNode* root) {
    if (root != NULL) {
        inorder(root->left);    // Left
        printf("%d ", root->data); // Root
        inorder(root->right);   // Right
    }
}

void preorder(struct TreeNode* root) {
    if (root != NULL) {
        printf("%d ", root->data); // Root
        preorder(root->left);   // Left
        preorder(root->right);  // Right
    }
}

void postorder(struct TreeNode* root) {
    if (root != NULL) {
        postorder(root->left);  // Left
        postorder(root->right); // Right
        printf("%d ", root->data); // Root
    }
}`,X=T?`${T.charAt(0).toUpperCase()+T.slice(1)} traversal result:`:"";return e.jsxs("div",{className:"tree-app",children:[e.jsxs("header",{className:"header",children:[e.jsxs(Y,{to:"/",className:"home-btn",children:[e.jsx(te,{}),e.jsx("span",{children:"Home"})]}),e.jsx("h1",{children:"Binary Search Tree Visualizer"})]}),e.jsxs("main",{className:"split-view",children:[e.jsxs("section",{className:"panel code-panel",children:[e.jsx("h2",{children:"C Implementation"}),e.jsx("div",{className:"code-viewer",ref:q,children:e.jsx(ce,{language:"c",style:de,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,codeTagProps:{style:{fontFamily:'"JetBrains Mono", "Fira Code", monospace',fontSize:"0.9rem"}},customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",lineHeight:"1.6",height:"100%",overflow:"auto",background:"#1e1e1e"},lineProps:k=>{const O=k===v,G=m&&m.error&&O;return{"data-line-number":k,style:{backgroundColor:G?"rgba(248, 81, 73, 0.4)":O?"rgba(88, 166, 255, 0.3)":"transparent",display:"block",color:O?"#fff":void 0,fontWeight:O?"bold":"normal",borderLeft:G?"4px solid #f85149":O?"4px solid #58a6ff":"none",paddingLeft:O?"8px":"12px"}}},children:$()})})]}),e.jsxs("section",{className:"panel viz-panel",children:[e.jsx("h2",{children:"Interactive Visualization"}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",value:t,onChange:k=>i(k.target.value),placeholder:"Enter number",className:"number-input",disabled:p}),e.jsxs("button",{onClick:P,className:"btn btn-primary",disabled:p,children:[e.jsx(ae,{})," Insert"]}),e.jsxs("button",{onClick:E,className:"btn btn-secondary",disabled:p,children:[e.jsx(ye,{})," Search"]})]}),e.jsxs("div",{className:"action-group",children:[e.jsxs("button",{onClick:b,className:"btn btn-info",disabled:p,children:[e.jsx(le,{})," Random Tree"]}),e.jsxs("button",{onClick:D,className:"btn btn-warning",disabled:p,children:[e.jsx(xe,{})," Clear"]})]}),e.jsxs("div",{className:"traversal-group",children:[e.jsx("button",{onClick:()=>R("inorder"),className:"btn btn-secondary",disabled:p,children:"Inorder"}),e.jsx("button",{onClick:()=>R("preorder"),className:"btn btn-secondary",disabled:p,children:"Preorder"}),e.jsx("button",{onClick:()=>R("postorder"),className:"btn btn-secondary",disabled:p,children:"Postorder"})]}),c.length>0&&e.jsxs("div",{className:"animation-controls",children:[e.jsxs("div",{className:"playback-controls",children:[e.jsx("button",{onClick:B,className:"btn btn-control",disabled:d===0,children:e.jsx(Ne,{})}),e.jsx("button",{onClick:C,className:"btn btn-control",children:p?e.jsx(oe,{}):e.jsx(re,{})}),e.jsx("button",{onClick:M,className:"btn btn-control",disabled:d>=c.length-1,children:e.jsx(we,{})})]}),e.jsxs("div",{className:"progress-info",children:["Step ",d+1," of ",c.length]}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",step:"200",value:j,onChange:k=>x(parseInt(k.target.value)),className:"speed-slider"}),e.jsxs("span",{children:[j,"ms"]})]})]})]}),T&&e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:"bold",marginBottom:4},children:X}),e.jsx("div",{className:"traversal-result-bar",children:z.map((k,O)=>e.jsx("div",{className:"traversal-block",children:k},O))})]}),e.jsx("div",{className:"message",children:s}),e.jsx(Qt,{tree:n,highlightedNode:f,currentStep:m},l),e.jsx(Ut,{}),e.jsx(Gt,{})]})]})]})},Kt=()=>{const[n,t]=h.useState(!1);return e.jsxs("div",{className:"explanation-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," Understanding Heaps (Min/Max)"]}),n&&e.jsxs("div",{className:"explanation-content",children:[e.jsx("h4",{children:"What is a Heap?"}),e.jsxs("p",{children:["A Heap is a complete binary tree backed by an array where each node satisfies the heap property:",e.jsx("em",{children:" parent is ≤ children (min-heap) or ≥ children (max-heap)"}),"."]}),e.jsx("h4",{children:"Key Properties:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Complete tree:"})," All levels filled except possibly the last, which is filled left to right."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Heap property:"})," For every node i, parent(i) ≤ children for min-heap (or ≥ for max-heap)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Array mapping:"})," left=2i+1, right=2i+2, parent=⌊(i-1)/2⌋."]})]}),e.jsx("h4",{children:"Core Operations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Insert:"})," O(log n) — push at end, sift up (percolate up)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Extract root:"})," O(log n) — swap root with last, pop, sift down (heapify down)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Peek:"})," O(1) — return root."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Build heap:"})," O(n) by heapifying from ⌊n/2⌋ down to 0."]})]}),e.jsx("h4",{children:"Complexities:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insert/Extract: O(log n)"}),e.jsx("li",{children:"Peek: O(1)"}),e.jsx("li",{children:"Space: O(n)"})]}),e.jsx("h4",{children:"Use Cases:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Priority queues, Dijkstra/Prim algorithms"}),e.jsx("li",{children:"Scheduling, event simulation"}),e.jsx("li",{children:"Top-k problems, streaming medians (with two heaps)"})]})]})]})},Yt=()=>{const[n,t]=h.useState(!1),[i,s]=h.useState(0),[a,l]=h.useState("Copy Code to Clipboard"),r=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_SIZE 100

// Min Heap structure
typedef struct {
    int heap[MAX_SIZE];
    int size;
    int capacity;
} MinHeap;

// Max Heap structure  
typedef struct {
    int heap[MAX_SIZE];
    int size;
    int capacity;
} MaxHeap;

// Helper functions for array indexing
int parent(int i) { return (i - 1) / 2; }
int leftChild(int i) { return 2 * i + 1; }
int rightChild(int i) { return 2 * i + 2; }

// Initialize Min Heap
MinHeap* createMinHeap() {
    MinHeap* heap = (MinHeap*)malloc(sizeof(MinHeap));
    heap->size = 0;
    heap->capacity = MAX_SIZE;
    return heap;
}

// Initialize Max Heap
MaxHeap* createMaxHeap() {
    MaxHeap* heap = (MaxHeap*)malloc(sizeof(MaxHeap));
    heap->size = 0;
    heap->capacity = MAX_SIZE;
    return heap;
}

// Swap two elements
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
    printf("Swapped %d and %d\\n", *b, *a);
}

// Min Heap: Sift up (percolate up)
void siftUpMin(MinHeap* heap, int index) {
    if (index == 0) return; // Root reached
    
    int parentIdx = parent(index);
    printf("Comparing %d (index %d) with parent %d (index %d)\\n", 
           heap->heap[index], index, heap->heap[parentIdx], parentIdx);
    
    if (heap->heap[index] < heap->heap[parentIdx]) {
        printf("Min heap property violated, swapping up\\n");
        swap(&heap->heap[index], &heap->heap[parentIdx]);
        siftUpMin(heap, parentIdx);
    }
}

// Max Heap: Sift up (percolate up)
void siftUpMax(MaxHeap* heap, int index) {
    if (index == 0) return; // Root reached
    
    int parentIdx = parent(index);
    printf("Comparing %d (index %d) with parent %d (index %d)\\n", 
           heap->heap[index], index, heap->heap[parentIdx], parentIdx);
    
    if (heap->heap[index] > heap->heap[parentIdx]) {
        printf("Max heap property violated, swapping up\\n");
        swap(&heap->heap[index], &heap->heap[parentIdx]);
        siftUpMax(heap, parentIdx);
    }
}

// Min Heap: Sift down (heapify down)
void siftDownMin(MinHeap* heap, int index) {
    int left = leftChild(index);
    int right = rightChild(index);
    int smallest = index;
    
    if (left < heap->size && heap->heap[left] < heap->heap[smallest]) {
        smallest = left;
    }
    
    if (right < heap->size && heap->heap[right] < heap->heap[smallest]) {
        smallest = right;
    }
    
    if (smallest != index) {
        printf("Sifting down: swapping %d (index %d) with %d (index %d)\\n",
               heap->heap[index], index, heap->heap[smallest], smallest);
        swap(&heap->heap[index], &heap->heap[smallest]);
        siftDownMin(heap, smallest);
    }
}

// Max Heap: Sift down (heapify down)
void siftDownMax(MaxHeap* heap, int index) {
    int left = leftChild(index);
    int right = rightChild(index);
    int largest = index;
    
    if (left < heap->size && heap->heap[left] > heap->heap[largest]) {
        largest = left;
    }
    
    if (right < heap->size && heap->heap[right] > heap->heap[largest]) {
        largest = right;
    }
    
    if (largest != index) {
        printf("Sifting down: swapping %d (index %d) with %d (index %d)\\n",
               heap->heap[index], index, heap->heap[largest], largest);
        swap(&heap->heap[index], &heap->heap[largest]);
        siftDownMax(heap, largest);
    }
}

// Insert into Min Heap
void insertMin(MinHeap* heap, int value) {
    if (heap->size >= heap->capacity) {
        printf("Heap is full!\\n");
        return;
    }
    
    printf("\\nInserting %d into min heap\\n", value);
    heap->heap[heap->size] = value;
    printf("Placed %d at index %d\\n", value, heap->size);
    
    siftUpMin(heap, heap->size);
    heap->size++;
    
    printf("Min heap after insertion: ");
    printMinHeap(heap);
}

// Insert into Max Heap
void insertMax(MaxHeap* heap, int value) {
    if (heap->size >= heap->capacity) {
        printf("Heap is full!\\n");
        return;
    }
    
    printf("\\nInserting %d into max heap\\n", value);
    heap->heap[heap->size] = value;
    printf("Placed %d at index %d\\n", value, heap->size);
    
    siftUpMax(heap, heap->size);
    heap->size++;
    
    printf("Max heap after insertion: ");
    printMaxHeap(heap);
}

// Extract minimum from Min Heap
int extractMin(MinHeap* heap) {
    if (heap->size == 0) {
        printf("Heap is empty!\\n");
        return -1;
    }
    
    int min = heap->heap[0];
    printf("\\nExtracting minimum: %d\\n", min);
    
    // Move last element to root
    heap->heap[0] = heap->heap[heap->size - 1];
    heap->size--;
    
    printf("Moved %d to root, heap size now %d\\n", heap->heap[0], heap->size);
    
    // Restore heap property
    if (heap->size > 0) {
        siftDownMin(heap, 0);
    }
    
    printf("Min heap after extraction: ");
    printMinHeap(heap);
    
    return min;
}

// Extract maximum from Max Heap
int extractMax(MaxHeap* heap) {
    if (heap->size == 0) {
        printf("Heap is empty!\\n");
        return -1;
    }
    
    int max = heap->heap[0];
    printf("\\nExtracting maximum: %d\\n", max);
    
    // Move last element to root
    heap->heap[0] = heap->heap[heap->size - 1];
    heap->size--;
    
    printf("Moved %d to root, heap size now %d\\n", heap->heap[0], heap->size);
    
    // Restore heap property
    if (heap->size > 0) {
        siftDownMax(heap, 0);
    }
    
    printf("Max heap after extraction: ");
    printMaxHeap(heap);
    
    return max;
}

// Print Min Heap
void printMinHeap(MinHeap* heap) {
    printf("MinHeap: [");
    for (int i = 0; i < heap->size; i++) {
        printf("%d", heap->heap[i]);
        if (i < heap->size - 1) printf(", ");
    }
    printf("] (size: %d)\\n", heap->size);
}

// Print Max Heap
void printMaxHeap(MaxHeap* heap) {
    printf("MaxHeap: [");
    for (int i = 0; i < heap->size; i++) {
        printf("%d", heap->heap[i]);
        if (i < heap->size - 1) printf(", ");
    }
    printf("] (size: %d)\\n", heap->size);
}

// Build heap from array (O(n) construction)
void buildMinHeap(MinHeap* heap, int arr[], int n) {
    printf("\\nBuilding min heap from array\\n");
    heap->size = n;
    
    // Copy array to heap
    for (int i = 0; i < n; i++) {
        heap->heap[i] = arr[i];
    }
    
    printf("Initial array: ");
    printMinHeap(heap);
    
    // Start from last non-leaf node and sift down
    for (int i = (n / 2) - 1; i >= 0; i--) {
        printf("Heapifying from index %d (value %d)\\n", i, heap->heap[i]);
        siftDownMin(heap, i);
    }
    
    printf("Final min heap: ");
    printMinHeap(heap);
}

// Example usage
int main() {
    printf("=== Heap Data Structure Demo ===\\n");
    
    // Min Heap Example
    printf("\\n--- MIN HEAP OPERATIONS ---\\n");
    MinHeap* minHeap = createMinHeap();
    
    printf("Inserting values: 4, 1, 3, 2, 16, 9, 10, 14, 8, 7\\n");
    insertMin(minHeap, 4);
    insertMin(minHeap, 1);
    insertMin(minHeap, 3);
    insertMin(minHeap, 2);
    insertMin(minHeap, 16);
    insertMin(minHeap, 9);
    insertMin(minHeap, 10);
    insertMin(minHeap, 14);
    insertMin(minHeap, 8);
    insertMin(minHeap, 7);
    
    printf("\\nExtracting minimums:\\n");
    while (minHeap->size > 0) {
        int min = extractMin(minHeap);
        printf("Extracted: %d\\n", min);
    }
    
    // Max Heap Example
    printf("\\n--- MAX HEAP OPERATIONS ---\\n");
    MaxHeap* maxHeap = createMaxHeap();
    
    printf("Inserting values: 4, 1, 3, 2, 16, 9, 10, 14, 8, 7\\n");
    insertMax(maxHeap, 4);
    insertMax(maxHeap, 1);
    insertMax(maxHeap, 3);
    insertMax(maxHeap, 2);
    insertMax(maxHeap, 16);
    insertMax(maxHeap, 9);
    insertMax(maxHeap, 10);
    insertMax(maxHeap, 14);
    insertMax(maxHeap, 8);
    insertMax(maxHeap, 7);
    
    // Build Heap Example
    printf("\\n--- BUILD HEAP FROM ARRAY ---\\n");
    int arr[] = {4, 1, 3, 2, 16, 9, 10, 14, 8, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    
    MinHeap* builtHeap = createMinHeap();
    buildMinHeap(builtHeap, arr, n);
    
    // Clean up
    free(minHeap);
    free(maxHeap);
    free(builtHeap);
    
    return 0;
}

/*
Key Concepts Demonstrated:
1. Array-based complete binary tree representation
2. Parent-child relationships: parent(i) = (i-1)/2, children = 2i+1, 2i+2
3. Heap property: min-heap (parent ≤ children), max-heap (parent ≥ children)
4. Sift up: restore heap property after insertion
5. Sift down: restore heap property after extraction
6. O(n) build-heap algorithm
7. O(log n) insertion and extraction
*/`,c=async()=>{try{await navigator.clipboard.writeText(r);const o=i+1;s(o),l(`Copied! (${o})`),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}catch(o){console.error("Failed to copy code: ",o),l("Copy failed - try selecting manually"),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}};return e.jsxs("div",{className:"diy-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," How to Run This Heap Code Yourself"]}),n&&e.jsxs("div",{className:"diy-content",children:[e.jsx("p",{children:"Want to implement and experiment with Heaps yourself? Here's a complete, runnable C implementation with both min and max heaps!"}),e.jsx("h4",{children:"🚀 Quick Start:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Copy the code below"}),e.jsxs("li",{children:["Save it as ",e.jsx("code",{children:"heap.c"})]}),e.jsxs("li",{children:["Compile: ",e.jsx("code",{children:"gcc -o heap heap.c"})]}),e.jsxs("li",{children:["Run: ",e.jsx("code",{children:"./heap"})]})]}),e.jsx("h4",{children:"💡 Try These Heap Experiments:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Build heaps from different array configurations (sorted, reverse, random)"}),e.jsx("li",{children:"Compare build-heap O(n) vs repeated insertion O(n log n)"}),e.jsx("li",{children:"Implement heap sort using extract operations"}),e.jsx("li",{children:"Test priority queue operations (insert with priority, extract max/min)"}),e.jsx("li",{children:"Verify heap property is maintained after every operation"}),e.jsx("li",{children:"Measure performance with large datasets"})]}),e.jsx("h4",{children:"🔧 Heap-Specific Features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Both min-heap and max-heap implementations"}),e.jsx("li",{children:"Array-based complete binary tree representation"}),e.jsx("li",{children:"Sift up (percolate up) for insertion"}),e.jsx("li",{children:"Sift down (heapify down) for extraction"}),e.jsx("li",{children:"O(n) build-heap algorithm from arbitrary array"}),e.jsx("li",{children:"Detailed step-by-step operation explanations"})]}),e.jsxs("div",{className:"code-container",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"language-label",children:"C"}),e.jsx("button",{onClick:c,className:"copy-button",title:"Copy heap code to clipboard",children:a})]}),e.jsx("div",{className:"code-content",children:e.jsx("pre",{children:e.jsx("code",{children:r})})})]}),e.jsx("h4",{children:"🎯 Heap Learning Extensions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Heap Sort:"})," Implement in-place sorting using heap operations"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Priority Queue:"})," Add priority-based insertion and extraction"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"K-way Merge:"})," Use min-heap to merge k sorted arrays"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Top-K Problems:"})," Find k largest/smallest elements efficiently"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Median Tracking:"})," Use two heaps to maintain running median"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dynamic Resizing:"})," Implement heap with automatic capacity management"]})]}),e.jsxs("div",{className:"tip-box",children:[e.jsx("h4",{children:"💡 Heap Pro Tip:"}),e.jsx("p",{children:"Heaps are perfect for priority queues! The array representation makes them cache-friendly, and the complete tree property ensures O(log n) height. Use min-heap for smallest-first scenarios (Dijkstra's algorithm) and max-heap for largest-first (scheduling systems)."})]})]})]})};class pe{constructor(t="min"){this.heap=[],this.type=t,this.animationSteps=[]}getParentIndex(t){return Math.floor((t-1)/2)}getLeftChildIndex(t){return 2*t+1}getRightChildIndex(t){return 2*t+2}hasParent(t){return this.getParentIndex(t)>=0}hasLeftChild(t){return this.getLeftChildIndex(t)<this.heap.length}hasRightChild(t){return this.getRightChildIndex(t)<this.heap.length}parent(t){return this.heap[this.getParentIndex(t)]}leftChild(t){return this.heap[this.getLeftChildIndex(t)]}rightChild(t){return this.heap[this.getRightChildIndex(t)]}compare(t,i){return this.type==="min"?t<i:t>i}swap(t,i){this.animationSteps.push({type:"swap",indices:[t,i],line:this.type==="min"?35:85,description:`Swapping elements at indices ${t} and ${i}: ${this.heap[t]} ↔ ${this.heap[i]}`}),[this.heap[t],this.heap[i]]=[this.heap[i],this.heap[t]]}peek(){return this.heap.length>0?this.heap[0]:null}insert(t){return this.animationSteps=[],this.animationSteps.push({type:"insert",value:t,index:this.heap.length,line:15,description:`Adding ${t} to the end of the heap at index ${this.heap.length}`}),this.heap.push(t),this.heapifyUp(this.heap.length-1),this.animationSteps}extract(){if(this.animationSteps=[],this.heap.length===0)return this.animationSteps.push({type:"extract_empty",line:45,description:"Heap is empty, cannot extract.",error:!0}),this.animationSteps;const t=this.heap[0];return this.animationSteps.push({type:"extract_root",value:t,line:47,description:`Extracting root element: ${t}`}),this.heap[0]=this.heap[this.heap.length-1],this.heap.pop(),this.heap.length>0&&(this.animationSteps.push({type:"move_last_to_root",value:this.heap[0],line:49,description:`Moving last element ${this.heap[0]} to root position`}),this.heapifyDown(0)),this.animationSteps.push({type:"extract_complete",value:t,line:52,description:`Extraction complete. Removed: ${t}`}),this.animationSteps}heapifyUp(t){for(this.animationSteps.push({type:"heapify_up_start",index:t,value:this.heap[t],line:18,description:`Starting heapify up from index ${t} (value: ${this.heap[t]})`});this.hasParent(t);){const i=this.getParentIndex(t);if(this.animationSteps.push({type:"compare_with_parent",index:t,parentIndex:i,childValue:this.heap[t],parentValue:this.heap[i],line:20,description:`Comparing ${this.heap[t]} with parent ${this.heap[i]}`}),this.compare(this.heap[t],this.heap[i]))this.swap(t,i),t=i,this.animationSteps.push({type:"heapify_up_continue",index:t,line:22,description:`Heap property violated, swapped. Continuing from index ${t}`});else{this.animationSteps.push({type:"heapify_up_complete",index:t,line:24,description:"Heap property satisfied. Heapify up complete."});break}}this.hasParent(t)||this.animationSteps.push({type:"heapify_up_complete",index:t,line:26,description:"Reached root. Heapify up complete."})}heapifyDown(t){for(this.animationSteps.push({type:"heapify_down_start",index:t,value:this.heap[t],line:55,description:`Starting heapify down from index ${t} (value: ${this.heap[t]})`});this.hasLeftChild(t);){let i=this.getLeftChildIndex(t);if(this.hasRightChild(t)){const s=this.getLeftChildIndex(t),a=this.getRightChildIndex(t);this.animationSteps.push({type:"compare_children",leftIndex:s,rightIndex:a,leftValue:this.heap[s],rightValue:this.heap[a],line:57,description:`Comparing children: left=${this.heap[s]}, right=${this.heap[a]}`}),this.compare(this.heap[a],this.heap[s])&&(i=a)}if(this.animationSteps.push({type:"compare_with_child",index:t,childIndex:i,parentValue:this.heap[t],childValue:this.heap[i],line:62,description:`Comparing ${this.heap[t]} with target child ${this.heap[i]}`}),this.compare(this.heap[i],this.heap[t]))this.swap(t,i),t=i,this.animationSteps.push({type:"heapify_down_continue",index:t,line:64,description:`Heap property violated, swapped. Continuing from index ${t}`});else{this.animationSteps.push({type:"heapify_down_complete",index:t,line:66,description:"Heap property satisfied. Heapify down complete."});break}}this.hasLeftChild(t)||this.animationSteps.push({type:"heapify_down_complete",index:t,line:68,description:"No children left. Heapify down complete."})}clear(){this.heap=[],this.animationSteps=[]}getTreeNodes(){const t=[];for(let i=0;i<this.heap.length;i++){const s=Math.floor(Math.log2(i+1)),a=i-(Math.pow(2,s)-1),c=80+600/(Math.pow(2,s)+1)*(a+1),o=60+s*80;t.push({value:this.heap[i],index:i,x:c,y:o,level:s})}return t}getTreeEdges(){const t=[],i=this.getTreeNodes();for(let s=0;s<this.heap.length;s++){const a=this.getLeftChildIndex(s),l=this.getRightChildIndex(s);if(a<this.heap.length){const r=i[s],c=i[a];t.push({x1:r.x,y1:r.y+22,x2:c.x,y2:c.y-22})}if(l<this.heap.length){const r=i[s],c=i[l];t.push({x1:r.x,y1:r.y+22,x2:c.x,y2:c.y-22})}}return t}}const Zt=()=>{const[n,t]=h.useState(new pe("min")),[i,s]=h.useState("min"),[a,l]=h.useState(""),[r,c]=h.useState([]),[o,d]=h.useState(-1),[u,p]=h.useState(!1),[g,j]=h.useState(1e3),[x,f]=h.useState([]),[S,v]=h.useState([]),[L,m]=h.useState(""),[V,z]=h.useState(null),[A,T]=h.useState(0),y=h.useRef(null),N=h.useRef(null);h.useEffect(()=>{f(n.getTreeNodes()),v(n.getTreeEdges())},[n]),h.useEffect(()=>{const R=new pe(i);n.heap.forEach($=>{R.insert($)}),t(R),c([]),d(-1)},[i]),h.useEffect(()=>()=>{y.current&&clearTimeout(y.current)},[]),h.useEffect(()=>{if(A&&N.current){const R=N.current.querySelector(`[data-line-number="${A}"]`);R&&R.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}},[A]),h.useEffect(()=>{u&&A&&requestAnimationFrame(()=>{})},[u,A]);const w=()=>{if(!a||u)return;const R=parseInt(a);if(isNaN(R))return;const $=n.insert(R);c($),d(-1),m(`Insert ${R}`),f(n.getTreeNodes()),v(n.getTreeEdges()),l("")},I=()=>{var $;if(u||n.heap.length===0)return;const R=n.extract();c(R),d(-1),m(`Extract ${i==="min"?"Min":"Max"}`),f(n.getTreeNodes()),v(n.getTreeEdges()),R.length>0&&!R[0].error&&z(($=R.find(X=>X.type==="extract_root"))==null?void 0:$.value)},q=()=>{if(u)return;const R=new pe(i);Array.from({length:7},()=>Math.floor(Math.random()*99)+1).forEach(X=>{R.insert(X)}),t(R),c([]),d(-1),m(`Random ${i.charAt(0).toUpperCase()+i.slice(1)} Heap Generated`),z(null)},_=()=>{u||(t(new pe(i)),c([]),d(-1),m("Heap Cleared"),z(null))},U=()=>{r.length!==0&&(p(!0),P())},P=()=>{d(R=>{var X;const $=R+1;return $>=r.length?(p(!1),R):((X=r[$])!=null&&X.line&&T(r[$].line),y.current=setTimeout(()=>{P()},g),$)})},E=()=>{p(!1),y.current&&clearTimeout(y.current)},b=()=>{var R;if(o<r.length-1){const $=o+1;d($),(R=r[$])!=null&&R.line&&T(r[$].line)}},D=()=>{var R;if(o>-1){const $=o-1;d($),$>=0&&((R=r[$])!=null&&R.line)&&T(r[$].line)}},C=()=>{d(-1),T(0),p(!1),y.current&&clearTimeout(y.current)},M=o>=0&&o<r.length?r[o]:null,B=`#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

typedef struct {
    int heap[MAX_SIZE];
    int size;
} ${i.charAt(0).toUpperCase()+i.slice(1)}Heap;

void init${i.charAt(0).toUpperCase()+i.slice(1)}Heap(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h);
void insert(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int value);
int extract${i.charAt(0).toUpperCase()+i.slice(1)}(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h);
void heapifyUp(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int index);
void heapifyDown(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int index);

void init${i.charAt(0).toUpperCase()+i.slice(1)}Heap(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h) {
    h->size = 0;
}

void insert(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int value) {
    if (h->size >= MAX_SIZE) {
        printf("Heap is full!\\n");
        return;
    }
    h->heap[h->size] = value;
    h->size++;
    heapifyUp(h, h->size - 1);
}

void heapifyUp(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int index) {
    if (index == 0) return;
    int parentIndex = (index - 1) / 2;
    if (${i==="min"?"h->heap[index] < h->heap[parentIndex]":"h->heap[index] > h->heap[parentIndex]"}) {
        int temp = h->heap[index];
        h->heap[index] = h->heap[parentIndex];
        h->heap[parentIndex] = temp;
        heapifyUp(h, parentIndex);
    }
}

int extract${i.charAt(0).toUpperCase()+i.slice(1)}(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h) {
    if (h->size == 0) {
        printf("Heap is empty!\\n");
        return -1;
    }
    int ${i}Value = h->heap[0];
    h->heap[0] = h->heap[h->size - 1];
    h->size--;
    if (h->size > 0) {
        heapifyDown(h, 0);
    }
    return ${i}Value;
}

void heapifyDown(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h, int index) {
    int leftChild = 2 * index + 1;
    int rightChild = 2 * index + 2;
    int ${i==="min"?"smallest":"largest"} = index;
    if (leftChild < h->size && ${i==="min"?"h->heap[leftChild] < h->heap[smallest]":"h->heap[leftChild] > h->heap[largest]"}) {
        ${i==="min"?"smallest":"largest"} = leftChild;
    }
    if (rightChild < h->size && ${i==="min"?"h->heap[rightChild] < h->heap[smallest]":"h->heap[rightChild] > h->heap[largest]"}) {
        ${i==="min"?"smallest":"largest"} = rightChild;
    }
    if (${i==="min"?"smallest":"largest"} != index) {
        int temp = h->heap[index];
        h->heap[index] = h->heap[${i==="min"?"smallest":"largest"}];
        h->heap[${i==="min"?"smallest":"largest"}] = temp;
        heapifyDown(h, ${i==="min"?"smallest":"largest"});
    }
}

int peek(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h) {
    if (h->size == 0) {
        printf("Heap is empty!\\n");
        return -1;
    }
    return h->heap[0];
}

void printHeap(${i.charAt(0).toUpperCase()+i.slice(1)}Heap* h) {
    printf("Heap: ");
    for (int i = 0; i < h->size; i++) {
        printf("%d ", h->heap[i]);
    }
    printf("\\n");
}

int main() {
    ${i.charAt(0).toUpperCase()+i.slice(1)}Heap heap;
    init${i.charAt(0).toUpperCase()+i.slice(1)}Heap(&heap);
    insert(&heap, 10);
    insert(&heap, 20);
    insert(&heap, 5);
    printHeap(&heap);
    printf("Extracted: %d\\n", extract${i.charAt(0).toUpperCase()+i.slice(1)}(&heap));
    printHeap(&heap);
    return 0;
}`;return e.jsxs("div",{className:"tree-app",children:[e.jsxs("header",{className:"header",children:[e.jsxs(Y,{to:"/trees",className:"home-btn",children:[e.jsx(te,{}),e.jsx("span",{children:"Trees"})]}),e.jsxs("h1",{children:[i.charAt(0).toUpperCase()+i.slice(1)," Heap Visualizer"]})]}),e.jsxs("main",{className:"split-view",children:[e.jsxs("section",{className:"panel code-panel",children:[e.jsx("h2",{children:"C Implementation"}),e.jsx("div",{className:"code-viewer",ref:N,children:e.jsx(ce,{language:"c",style:de,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,codeTagProps:{style:{fontFamily:'"JetBrains Mono", "Fira Code", monospace',fontSize:"0.9rem"}},customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",lineHeight:"1.6",height:"100%",overflow:"auto",background:"#1e1e1e"},lineProps:R=>({"data-line-number":R,style:{backgroundColor:R===A?"rgba(88, 166, 255, 0.3)":"transparent",display:"block",color:R===A?"#fff":void 0,fontWeight:R===A?"bold":"normal"}}),children:B})})]}),e.jsxs("section",{className:"panel viz-panel",children:[e.jsx("h2",{children:"Interactive Visualization"}),e.jsx("div",{className:"controls",children:e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Heap Type:"}),e.jsxs("select",{value:i,onChange:R=>s(R.target.value),className:"number-input",disabled:u,children:[e.jsx("option",{value:"min",children:"Min Heap"}),e.jsx("option",{value:"max",children:"Max Heap"})]})]})}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",value:a,onChange:R=>l(R.target.value),placeholder:"Enter number",className:"number-input",onKeyDown:R=>R.key==="Enter"&&w(),disabled:u}),e.jsxs("button",{onClick:w,className:"btn btn-primary",disabled:!a||u,children:[e.jsx(ae,{})," Insert"]})]}),e.jsxs("div",{className:"action-group",children:[e.jsxs("button",{onClick:I,className:"btn btn-secondary",disabled:u||n.heap.length===0,children:[e.jsx(rt,{})," Extract ",i==="min"?"Min":"Max"]}),e.jsxs("button",{onClick:q,className:"btn btn-info",disabled:u,children:[e.jsx(le,{})," Random Heap"]}),e.jsxs("button",{onClick:_,className:"btn btn-warning",disabled:u,children:[e.jsx(st,{})," Clear Heap"]})]})]}),r.length>0&&e.jsx("div",{className:"animation-controls",children:e.jsxs("div",{className:"playback-controls",children:[e.jsx("button",{onClick:D,className:"btn btn-control",disabled:o<=-1,children:e.jsx(Ne,{})}),u?e.jsx("button",{onClick:E,className:"btn btn-control",children:e.jsx(oe,{})}):e.jsx("button",{onClick:U,className:"btn btn-control",disabled:o>=r.length-1,children:e.jsx(re,{})}),e.jsx("button",{onClick:b,className:"btn btn-control",disabled:o>=r.length-1,children:e.jsx(we,{})}),e.jsx("button",{onClick:C,className:"btn btn-control",children:"Reset"}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",value:g,onChange:R=>j(Number(R.target.value)),className:"speed-slider"}),e.jsxs("span",{children:[g,"ms"]})]})]})}),M&&e.jsxs("div",{className:"message",children:["Step ",o+1," of ",r.length," — ",L,". ",M.description,M.line&&e.jsxs("span",{className:"code-line",children:[" (Line ",M.line,")"]})]}),e.jsx("div",{className:"tree-display",children:x.length>0?(()=>{const R=Math.floor(Math.log2(n.heap.length))+1,$="100%",X=Math.min(460,Math.max(R*80+100,300));return e.jsxs("svg",{width:$,height:X,className:"tree-svg",viewBox:`0 0 760 ${X}`,preserveAspectRatio:"xMidYMid meet",children:[S.map((k,O)=>e.jsx("line",{x1:k.x1,y1:k.y1,x2:k.x2,y2:k.y2,stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2"},O)),x.map((k,O)=>{let G="tree-node";return M&&(M.indices&&M.indices.includes(k.index)&&(G+=" highlighted"),M.index===k.index&&(G+=" highlighted"),M.type==="insert"&&M.value===k.value&&(G+=" inserted")),e.jsxs("g",{children:[e.jsx("circle",{cx:k.x,cy:k.y,r:22,className:G}),e.jsx("text",{x:k.x,y:k.y-2,textAnchor:"middle",dominantBaseline:"central",className:"node-text",fontSize:"16",fill:"white",fontWeight:"700",children:k.value}),e.jsxs("text",{x:k.x,y:k.y+8,textAnchor:"middle",dominantBaseline:"central",className:"node-info",fontSize:"10",fill:"#94a3b8",children:["[",k.index,"]"]})]},O)})]})})():e.jsxs("div",{className:"empty-tree",children:[e.jsxs("p",{children:[i.charAt(0).toUpperCase()+i.slice(1)," Heap is empty"]}),e.jsx("p",{children:"Insert some numbers to start"})]})}),n.heap.length>0&&e.jsxs("div",{className:"array-representation",children:[e.jsx("h3",{children:"Array Representation"}),e.jsx("div",{className:"array-display",children:n.heap.map((R,$)=>{var X;return e.jsxs("div",{className:`array-element ${(X=M==null?void 0:M.indices)!=null&&X.includes($)?"highlighted":""} ${(M==null?void 0:M.index)===$?"highlighted":""}`,children:[e.jsx("div",{className:"array-value",children:R}),e.jsxs("div",{className:"array-index",children:["[",$,"]"]})]},$)})})]}),V!==null&&e.jsxs("div",{className:"tree-properties",children:[e.jsx("h3",{children:"Last Extracted"}),e.jsxs("div",{className:"properties-grid",children:[e.jsxs("div",{className:"property",children:[e.jsx("span",{children:"Type"}),e.jsx("span",{children:i==="min"?"Min":"Max"})]}),e.jsxs("div",{className:"property",children:[e.jsx("span",{children:"Value"}),e.jsx("span",{children:V})]})]})]}),n.heap.length>0&&e.jsxs("div",{className:"tree-properties",children:[e.jsx("h3",{children:"Heap Information"}),e.jsxs("div",{className:"properties-grid",children:[e.jsxs("div",{className:"property",children:[e.jsx("span",{children:"Total Elements"}),e.jsx("span",{children:n.heap.length})]}),e.jsxs("div",{className:"property",children:[e.jsx("span",{children:"Heap Height"}),e.jsx("span",{children:Math.floor(Math.log2(n.heap.length))+1})]}),e.jsxs("div",{className:"property",children:[e.jsxs("span",{children:["Root (",i==="min"?"Min":"Max",")"]}),e.jsx("span",{children:n.peek()||"Empty"})]})]})]}),e.jsx(Kt,{}),e.jsx(Yt,{})]})]})]})},ei=()=>{const[n,t]=h.useState(!1);return e.jsxs("div",{className:"explanation-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," Understanding AVL Trees"]}),n&&e.jsxs("div",{className:"explanation-content",children:[e.jsx("h4",{children:"What is an AVL Tree?"}),e.jsx("p",{children:"An AVL Tree is a self-balancing Binary Search Tree where the heights of the left and right subtrees of any node differ by at most 1. After insertions and deletions, rotations are applied to restore balance."}),e.jsx("h4",{children:"Balance Factor and Height:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Height:"})," Length of the longest path to a leaf. Empty tree has height -1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Balance Factor (BF):"})," height(left) − height(right). Valid AVL requires BF in (-1, 0, 1)."]})]}),e.jsx("h4",{children:"Rotations:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Right Rotation (LL case):"})," Performed when a node's left subtree is heavy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Left Rotation (RR case):"})," Performed when a node's right subtree is heavy."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Left-Right (LR):"})," Left rotate on left child, then right rotate on node."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Right-Left (RL):"})," Right rotate on right child, then left rotate on node."]})]}),e.jsx("h4",{children:"Complexities:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insert/Search/Delete: O(log n) guaranteed due to balancing"}),e.jsx("li",{children:"Space: O(n)"})]}),e.jsx("h4",{children:"When to use AVL:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"When read and write operations are both frequent and you need strict balancing."}),e.jsx("li",{children:"When worst-case guarantees are important."})]})]})]})},ti=()=>{const[n,t]=h.useState(!1),[i,s]=h.useState(0),[a,l]=h.useState("Copy Code to Clipboard"),r=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_DEPTH 4  // Maximum tree depth for visualization

// AVL Tree Node structure
typedef struct AVLNode {
    int value;
    struct AVLNode* left;
    struct AVLNode* right;
    int height;
} AVLNode;

// AVL Tree structure
typedef struct {
    AVLNode* root;
    int nodeCount;
    int maxDepth;
} AVLTree;

// Get height of a node
int getHeight(AVLNode* node) {
    return node ? node->height : 0;
}

// Update height of a node
void updateHeight(AVLNode* node) {
    if (node) {
        int leftHeight = getHeight(node->left);
        int rightHeight = getHeight(node->right);
        node->height = 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
    }
}

// Get balance factor of a node
int getBalance(AVLNode* node) {
    return node ? getHeight(node->left) - getHeight(node->right) : 0;
}

// Create a new AVL node
AVLNode* createAVLNode(int value) {
    AVLNode* node = (AVLNode*)malloc(sizeof(AVLNode));
    if (node == NULL) {
        printf("Memory allocation failed\\n");
        return NULL;
    }
    node->value = value;
    node->left = NULL;
    node->right = NULL;
    node->height = 1;
    return node;
}

// Right rotation
AVLNode* rotateRight(AVLNode* y) {
    printf("Performing right rotation on %d\\n", y->value);
    AVLNode* x = y->left;
    AVLNode* T2 = x->right;

    // Perform rotation
    x->right = y;
    y->left = T2;

    // Update heights
    updateHeight(y);
    updateHeight(x);

    printf("Right rotation complete. New root: %d\\n", x->value);
    return x;
}

// Left rotation
AVLNode* rotateLeft(AVLNode* x) {
    printf("Performing left rotation on %d\\n", x->value);
    AVLNode* y = x->right;
    AVLNode* T2 = y->left;

    // Perform rotation
    y->left = x;
    x->right = T2;

    // Update heights
    updateHeight(x);
    updateHeight(y);

    printf("Left rotation complete. New root: %d\\n", y->value);
    return y;
}

// Insert a value into AVL tree
AVLNode* insertAVL(AVLNode* node, int value, AVLTree* tree) {
    // Step 1: Perform normal BST insertion
    if (node == NULL) {
        tree->nodeCount++;
        printf("Inserted %d successfully\\n", value);
        return createAVLNode(value);
    }

    if (value < node->value) {
        printf("Going left from %d to insert %d\\n", node->value, value);
        node->left = insertAVL(node->left, value, tree);
    } else if (value > node->value) {
        printf("Going right from %d to insert %d\\n", node->value, value);
        node->right = insertAVL(node->right, value, tree);
    } else {
        printf("Value %d already exists in the tree\\n", value);
        return node; // Duplicate values not allowed
    }

    // Step 2: Update height of current node
    updateHeight(node);

    // Step 3: Get the balance factor
    int balance = getBalance(node);
    printf("Node %d: height=%d, balance=%d\\n", node->value, node->height, balance);

    // Step 4: If unbalanced, perform rotations
    // Left Left Case
    if (balance > 1 && value < node->left->value) {
        printf("LL imbalance detected at %d\\n", node->value);
        return rotateRight(node);
    }

    // Right Right Case
    if (balance < -1 && value > node->right->value) {
        printf("RR imbalance detected at %d\\n", node->value);
        return rotateLeft(node);
    }

    // Left Right Case
    if (balance > 1 && value > node->left->value) {
        printf("LR imbalance detected at %d\\n", node->value);
        node->left = rotateLeft(node->left);
        return rotateRight(node);
    }

    // Right Left Case
    if (balance < -1 && value < node->right->value) {
        printf("RL imbalance detected at %d\\n", node->value);
        node->right = rotateRight(node->right);
        return rotateLeft(node);
    }

    // Return unchanged node pointer
    return node;
}

// Search for a value in AVL tree
bool searchAVL(AVLNode* root, int value) {
    if (root == NULL) {
        printf("Value %d not found\\n", value);
        return false;
    }
    
    printf("Checking node with value %d (height=%d, balance=%d)\\n", 
           root->value, root->height, getBalance(root));
    
    if (value == root->value) {
        printf("Found %d!\\n", value);
        return true;
    } else if (value < root->value) {
        printf("Going left from %d to search for %d\\n", root->value, value);
        return searchAVL(root->left, value);
    } else {
        printf("Going right from %d to search for %d\\n", root->value, value);
        return searchAVL(root->right, value);
    }
}

// Inorder traversal (shows sorted order)
void inorderAVL(AVLNode* root) {
    if (root != NULL) {
        inorderAVL(root->left);
        printf("%d(h:%d,b:%d) ", root->value, root->height, getBalance(root));
        inorderAVL(root->right);
    }
}

// Free all nodes in the AVL tree
void freeAVL(AVLNode* root) {
    if (root != NULL) {
        freeAVL(root->left);
        freeAVL(root->right);
        free(root);
    }
}

// Initialize AVL Tree
AVLTree* createAVLTree() {
    AVLTree* tree = (AVLTree*)malloc(sizeof(AVLTree));
    if (tree == NULL) {
        printf("Memory allocation failed\\n");
        return NULL;
    }
    tree->root = NULL;
    tree->nodeCount = 0;
    tree->maxDepth = MAX_DEPTH;
    return tree;
}

// Check if tree is balanced (for verification)
bool isBalanced(AVLNode* root) {
    if (root == NULL) return true;
    
    int balance = getBalance(root);
    return (abs(balance) <= 1) && isBalanced(root->left) && isBalanced(root->right);
}

// Example usage
int main() {
    AVLTree* myAVL = createAVLTree();
    if (myAVL == NULL) {
        return 1;
    }
    
    printf("=== AVL Tree Demo ===\\n");
    
    // Insert values that would cause rotations
    printf("\\nInserting values: 10, 20, 30 (should trigger LL rotation)\\n");
    myAVL->root = insertAVL(myAVL->root, 10, myAVL);
    myAVL->root = insertAVL(myAVL->root, 20, myAVL);
    myAVL->root = insertAVL(myAVL->root, 30, myAVL);
    
    printf("\\nAfter insertions - Tree is balanced: %s\\n", 
           isBalanced(myAVL->root) ? "Yes" : "No");
    
    printf("\\nInorder traversal (with heights and balances): ");
    inorderAVL(myAVL->root);
    printf("\\n");
    
    // Insert more values
    printf("\\nInserting more values: 40, 50, 25\\n");
    myAVL->root = insertAVL(myAVL->root, 40, myAVL);
    myAVL->root = insertAVL(myAVL->root, 50, myAVL);
    myAVL->root = insertAVL(myAVL->root, 25, myAVL);
    
    printf("\\nFinal inorder traversal: ");
    inorderAVL(myAVL->root);
    printf("\\n");
    
    printf("\\nTotal nodes: %d\\n", myAVL->nodeCount);
    printf("Tree is balanced: %s\\n", isBalanced(myAVL->root) ? "Yes" : "No");
    
    // Search examples
    printf("\\nSearching for 25:\\n");
    searchAVL(myAVL->root, 25);
    
    printf("\\nSearching for 100:\\n");
    searchAVL(myAVL->root, 100);
    
    // Clean up
    freeAVL(myAVL->root);
    free(myAVL);
    
    return 0;
}

/*
Expected Output (partial):
=== AVL Tree Demo ===

Inserting values: 10, 20, 30 (should trigger LL rotation)
Inserted 10 successfully
Going right from 10 to insert 20
Inserted 20 successfully
Going right from 10 to insert 30
Going right from 20 to insert 30
Inserted 30 successfully
Node 30: height=1, balance=0
Node 20: height=2, balance=-1
Node 10: height=3, balance=-2
RR imbalance detected at 10
Performing left rotation on 10
Left rotation complete. New root: 20

After insertions - Tree is balanced: Yes

Inorder traversal (with heights and balances): 10(h:1,b:0) 20(h:2,b:0) 30(h:1,b:0)
*/`,c=async()=>{try{await navigator.clipboard.writeText(r);const o=i+1;s(o),l(`Copied! (${o})`),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}catch(o){console.error("Failed to copy code: ",o),l("Copy failed - try selecting manually"),setTimeout(()=>{l("Copy Code to Clipboard")},2e3)}};return e.jsxs("div",{className:"diy-section",children:[e.jsxs("h3",{onClick:()=>t(!n),style:{cursor:"pointer"},children:[n?"▼":"►"," How to Run This AVL Tree Code Yourself"]}),n&&e.jsxs("div",{className:"diy-content",children:[e.jsx("p",{children:"Want to implement and experiment with AVL Trees yourself? Here's a complete, runnable C implementation with rotations and self-balancing!"}),e.jsx("h4",{children:"🚀 Quick Start:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Copy the code below"}),e.jsxs("li",{children:["Save it as ",e.jsx("code",{children:"avl.c"})]}),e.jsxs("li",{children:["Compile: ",e.jsx("code",{children:"gcc -o avl avl.c"})]}),e.jsxs("li",{children:["Run: ",e.jsx("code",{children:"./avl"})]})]}),e.jsx("h4",{children:"💡 Try These AVL Experiments:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Insert sequences that trigger each rotation type: LL, RR, LR, RL"}),e.jsx("li",{children:"Compare AVL vs BST by inserting sorted sequences (1,2,3,4,5...)"}),e.jsx("li",{children:"Verify balance factors and heights are correctly maintained"}),e.jsx("li",{children:"Test with duplicate values and see rejection behavior"}),e.jsx("li",{children:"Insert/delete randomly and verify tree remains balanced"}),e.jsx("li",{children:"Measure tree height vs number of nodes for different inputs"})]}),e.jsx("h4",{children:"🔧 AVL-Specific Features:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Automatic height tracking and balance factor calculation"}),e.jsx("li",{children:"Four rotation types (LL, RR, LR, RL) with detailed output"}),e.jsx("li",{children:"Balance verification function to confirm AVL property"}),e.jsx("li",{children:"Enhanced traversal showing heights and balance factors"}),e.jsx("li",{children:"Guaranteed O(log n) operations due to self-balancing"}),e.jsx("li",{children:"Step-by-step rotation explanations for learning"})]}),e.jsxs("div",{className:"code-container",children:[e.jsxs("div",{className:"code-header",children:[e.jsx("span",{className:"language-label",children:"C"}),e.jsx("button",{onClick:c,className:"copy-button",title:"Copy AVL code to clipboard",children:a})]}),e.jsx("div",{className:"code-content",children:e.jsx("pre",{children:e.jsx("code",{children:r})})})]}),e.jsx("h4",{children:"🎯 AVL Learning Extensions:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Rotation Visualization:"})," Add functions to print tree structure before/after rotations"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Performance Comparison:"})," Compare AVL vs regular BST insertion times"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deletion Implementation:"})," Add AVL deletion with rebalancing"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tree Statistics:"})," Track rotation counts and tree rebalancing frequency"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Interactive Mode:"})," Add menu-driven interface for dynamic operations"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Stress Testing:"})," Generate large random datasets and verify balance"]})]}),e.jsxs("div",{className:"tip-box",children:[e.jsx("h4",{children:"💡 AVL Pro Tip:"}),e.jsx("p",{children:"AVL trees guarantee O(log n) height by maintaining the balance factor (height difference) between left and right subtrees within [-1, 0, 1]. When this is violated, rotations restore balance while preserving the BST property!"})]})]})]})};class ii{constructor(t){this.value=t,this.left=null,this.right=null,this.height=1}}class me{constructor(){this.root=null,this.animationSteps=[],this.nodeCount=0}getHeight(t){return t?t.height:0}updateHeight(t){t&&(t.height=1+Math.max(this.getHeight(t.left),this.getHeight(t.right)))}getBalance(t){return t?this.getHeight(t.left)-this.getHeight(t.right):0}rotateRight(t){this.animationSteps.push({type:"rotate",node:t.value,direction:"right",line:45,description:`Right rotating node ${t.value}`});const i=t.left,s=i.right;return i.right=t,t.left=s,this.updateHeight(t),this.updateHeight(i),this.animationSteps.push({type:"rotation_complete",node:i.value,line:52,description:`Right rotation complete. New root: ${i.value}`}),i}rotateLeft(t){this.animationSteps.push({type:"rotate",node:t.value,direction:"left",line:55,description:`Left rotating node ${t.value}`});const i=t.right,s=i.left;return i.left=t,t.right=s,this.updateHeight(t),this.updateHeight(i),this.animationSteps.push({type:"rotation_complete",node:i.value,line:62,description:`Left rotation complete. New root: ${i.value}`}),i}insert(t){return this.animationSteps=[],this.animationSteps.push({type:"start_insert",value:t,line:15,description:`Starting insertion of ${t}`}),this.root=this.insertNode(this.root,t),this.nodeCount++,this.animationSteps}insertNode(t,i){if(t===null)return this.animationSteps.push({type:"insert",value:i,line:20,description:`Creating new node with value ${i}`}),new ii(i);if(this.animationSteps.push({type:"compare",currentNode:t.value,value:i,line:22,description:`Comparing ${i} with ${t.value}`}),i<t.value)this.animationSteps.push({type:"go_left",currentNode:t.value,value:i,line:24,description:`${i} < ${t.value}, going left`}),t.left=this.insertNode(t.left,i);else if(i>t.value)this.animationSteps.push({type:"go_right",currentNode:t.value,value:i,line:26,description:`${i} > ${t.value}, going right`}),t.right=this.insertNode(t.right,i);else return this.animationSteps.push({type:"duplicate",value:i,line:28,description:`Value ${i} already exists`,error:!0}),t;this.updateHeight(t),this.animationSteps.push({type:"update_height",node:t.value,height:t.height,line:30,description:`Updating height of ${t.value} to ${t.height}`});const s=this.getBalance(t);return this.animationSteps.push({type:"balance_check",node:t.value,balance:s,line:32,description:`Balance factor of ${t.value}: ${s}`}),s>1&&i<t.left.value?(this.animationSteps.push({type:"rotation_needed",rotation:"Right",line:35,description:"Left-Left case detected. Performing right rotation."}),this.rotateRight(t)):s<-1&&i>t.right.value?(this.animationSteps.push({type:"rotation_needed",rotation:"Left",line:37,description:"Right-Right case detected. Performing left rotation."}),this.rotateLeft(t)):s>1&&i>t.left.value?(this.animationSteps.push({type:"rotation_needed",rotation:"Left-Right",line:39,description:"Left-Right case detected. Performing left-right rotation."}),t.left=this.rotateLeft(t.left),this.rotateRight(t)):s<-1&&i<t.right.value?(this.animationSteps.push({type:"rotation_needed",rotation:"Right-Left",line:42,description:"Right-Left case detected. Performing right-left rotation."}),t.right=this.rotateRight(t.right),this.rotateLeft(t)):t}search(t){return this.animationSteps=[],this.animationSteps.push({type:"start_search",value:t,line:65,description:`Starting search for ${t}`}),{found:this.searchNode(this.root,t),steps:this.animationSteps}}searchNode(t,i){return t===null?(this.animationSteps.push({type:"not_found",value:i,line:70,description:`Value ${i} not found`}),!1):(this.animationSteps.push({type:"compare",currentNode:t.value,value:i,line:72,description:`Comparing ${i} with ${t.value}`}),i===t.value?(this.animationSteps.push({type:"found",value:i,line:74,description:`Found ${i}!`}),!0):i<t.value?(this.animationSteps.push({type:"go_left",currentNode:t.value,value:i,line:76,description:`${i} < ${t.value}, searching left`}),this.searchNode(t.left,i)):(this.animationSteps.push({type:"go_right",currentNode:t.value,value:i,line:78,description:`${i} > ${t.value}, searching right`}),this.searchNode(t.right,i)))}getAllNodes(){const t=[];return this.collectNodes(this.root,t,380,50,180),t}collectNodes(t,i,s,a,l){t!==null&&(i.push({value:t.value,x:s,y:a,height:t.height,balance:this.getBalance(t)}),t.left&&this.collectNodes(t.left,i,s-l,a+80,Math.max(40,l/2)),t.right&&this.collectNodes(t.right,i,s+l,a+80,Math.max(40,l/2)))}getAllEdges(){const t=[];return this.collectEdges(this.root,t,380,50,180),t}collectEdges(t,i,s,a,l){if(t!==null){if(t.left){const r=s-l,c=a+80;i.push({x1:s,y1:a+22,x2:r,y2:c-22}),this.collectEdges(t.left,i,r,c,Math.max(40,l/2))}if(t.right){const r=s+l,c=a+80;i.push({x1:s,y1:a+22,x2:r,y2:c-22}),this.collectEdges(t.right,i,r,c,Math.max(40,l/2))}}}}const ni=`#include <stdio.h>
#include <stdlib.h>

// AVL Tree Node structure
struct AVLNode {
		int data;
		struct AVLNode* left;
		struct AVLNode* right;
		int height;
};

// Function to create a new node
struct AVLNode* newNode(int data) {
		struct AVLNode* node = (struct AVLNode*)malloc(sizeof(struct AVLNode));
		node->data = data;
		node->left = NULL;
		node->right = NULL;
		node->height = 1;
		return node;
}

// Get height of node
int getHeight(struct AVLNode* node) {
		if (node == NULL) return 0;
		return node->height;
}

// Get balance factor of node
int getBalance(struct AVLNode* node) {
		if (node == NULL) return 0;
		return getHeight(node->left) - getHeight(node->right);
}

// Update height of node
void updateHeight(struct AVLNode* node) {
		if (node != NULL) {
				int leftHeight = getHeight(node->left);
				int rightHeight = getHeight(node->right);
				node->height = 1 + (leftHeight > rightHeight ? leftHeight : rightHeight);
		}
}

// Right rotate
struct AVLNode* rotateRight(struct AVLNode* y) {
		struct AVLNode* x = y->left;
		struct AVLNode* T2 = x->right;
    
		// Perform rotation
		x->right = y;
		y->left = T2;
    
		// Update heights
		updateHeight(y);
		updateHeight(x);
    
		return x;
}

// Left rotate
struct AVLNode* rotateLeft(struct AVLNode* x) {
		struct AVLNode* y = x->right;
		struct AVLNode* T2 = y->left;
    
		// Perform rotation
		y->left = x;
		x->right = T2;
    
		// Update heights
		updateHeight(x);
		updateHeight(y);
    
		return y;
}

// Insert node
struct AVLNode* insert(struct AVLNode* node, int data) {
		// Standard BST insertion
		if (node == NULL)
				return newNode(data);
    
		if (data < node->data)
				node->left = insert(node->left, data);
		else if (data > node->data)
				node->right = insert(node->right, data);
		else
				return node; // Duplicates not allowed
    
		// Update height
		updateHeight(node);
    
		// Get balance factor
		int balance = getBalance(node);
    
		// Left Left Case
		if (balance > 1 && data < node->left->data)
				return rotateRight(node);
    
		// Right Right Case
		if (balance < -1 && data > node->right->data)
				return rotateLeft(node);
    
		// Left Right Case
		if (balance > 1 && data > node->left->data) {
				node->left = rotateLeft(node->left);
				return rotateRight(node);
		}
    
		// Right Left Case
		if (balance < -1 && data < node->right->data) {
				node->right = rotateRight(node->right);
				return rotateLeft(node);
		}
    
		return node;
}

// Search function
struct AVLNode* search(struct AVLNode* root, int data) {
		if (root == NULL || root->data == data)
				return root;
    
		if (data < root->data)
				return search(root->left, data);
    
		return search(root->right, data);
}`,ri=()=>{const[n,t]=h.useState(new me),[i,s]=h.useState(""),[a,l]=h.useState(""),[r,c]=h.useState([]),[o,d]=h.useState(-1),[u,p]=h.useState(!1),[g,j]=h.useState(1e3),[x,f]=h.useState(""),[S,v]=h.useState(null),[L,m]=h.useState([]),[V,z]=h.useState([]),A=h.useRef(null),T=h.useRef(null),y=o>=0&&o<r.length?r[o]:null;h.useEffect(()=>{const C=y==null?void 0:y.line;if(C&&T.current){const M=T.current.querySelector(`[data-line-number="${C}"]`);M&&M.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"})}},[y==null?void 0:y.line]),h.useEffect(()=>{u&&(y!=null&&y.line)&&requestAnimationFrame(()=>{})},[u,y==null?void 0:y.line]),h.useEffect(()=>{m(n.getAllNodes()),z(n.getAllEdges())},[n]);const N=()=>{if(!i||u)return;const C=parseInt(i);if(isNaN(C))return;const M=n.insert(C);c(M),d(-1),f(`Inserting ${C}`),s("");const B=new me;B.root=n.root,t(B)},w=()=>{if(!a||u)return;const C=parseInt(a);if(isNaN(C))return;const M=n.search(C);c(M.steps),d(-1),f(`Searching for ${C}`),v(M.found),l("")},I=()=>{if(u)return;const C=new me,M=[],B=Math.floor(Math.random()*4)+7;for(;M.length<B;){const R=Math.floor(Math.random()*99)+1;M.includes(R)||(M.push(R),C.insert(R))}t(C),c([]),d(-1),f(`Generated random AVL tree with values: ${M.join(", ")}`),v(null)},q=()=>{u||(t(new me),c([]),d(-1),f("Tree Cleared"),v(null))},_=()=>{r.length!==0&&(p(!0),U())},U=()=>{d(C=>{const M=C+1;return M>=r.length?(p(!1),C):(A.current=setTimeout(()=>{U()},g),M)})},P=()=>{p(!1),A.current&&clearTimeout(A.current)},E=()=>{o<r.length-1&&d(C=>C+1)},b=()=>{o>-1&&d(C=>C-1)},D=()=>{d(-1),p(!1),A.current&&clearTimeout(A.current)};return h.useEffect(()=>()=>{A.current&&clearTimeout(A.current)},[]),e.jsxs("div",{className:"tree-app",children:[e.jsxs("header",{className:"header",children:[e.jsxs(Y,{to:"/trees",className:"home-btn",children:[e.jsx(te,{}),e.jsx("span",{children:"Trees"})]}),e.jsx("h1",{children:"AVL Tree Visualizer"})]}),e.jsxs("main",{className:"split-view",children:[e.jsxs("section",{className:"panel code-panel",children:[e.jsx("h2",{children:"C Implementation"}),e.jsx("div",{className:"code-viewer",ref:T,children:e.jsx(ce,{language:"c",style:de,showLineNumbers:!0,wrapLines:!0,lineProps:C=>{const M=(y==null?void 0:y.line)===C,B=(y==null?void 0:y.error)&&(y==null?void 0:y.line)===C;return{"data-line-number":C,style:{backgroundColor:M?B?"rgba(255, 0, 0, 0.1)":"rgba(88, 166, 255, 0.1)":"transparent",display:"block",color:M?"#fff":void 0,fontWeight:M?"bold":"normal",borderLeft:B?"4px solid #f85149":M?"4px solid #58a6ff":"none",paddingLeft:M?"8px":"12px"}}},customStyle:{margin:0,padding:"1rem",fontSize:"0.9rem",lineHeight:"1.6",height:"100%",overflow:"auto",background:"#1e1e1e"},children:ni})})]}),e.jsxs("section",{className:"panel viz-panel",children:[e.jsx("h2",{children:"Interactive Visualization"}),e.jsxs("div",{className:"controls",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",value:i,onChange:C=>s(C.target.value),placeholder:"Enter number",className:"number-input",onKeyDown:C=>C.key==="Enter"&&N(),disabled:u}),e.jsxs("button",{onClick:N,className:"btn btn-primary",disabled:!i||u,children:[e.jsx(ae,{})," Insert"]})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"number",value:a,onChange:C=>l(C.target.value),placeholder:"Search number",className:"number-input",onKeyDown:C=>C.key==="Enter"&&w(),disabled:u}),e.jsxs("button",{onClick:w,className:"btn btn-secondary",disabled:!a||u,children:[e.jsx(ye,{})," Search"]})]}),e.jsxs("div",{className:"action-group",children:[e.jsxs("button",{onClick:I,className:"btn btn-info",disabled:u,children:[e.jsx(le,{})," Random Tree"]}),e.jsxs("button",{onClick:q,className:"btn btn-warning",disabled:u,children:[e.jsx(xe,{})," Clear"]})]})]}),r.length>0&&e.jsxs("div",{className:"animation-controls",children:[e.jsx("button",{onClick:b,className:"btn btn-step",disabled:o<=-1,children:e.jsx(Ne,{})}),u?e.jsxs("button",{onClick:P,className:"btn btn-pause",children:[e.jsx(oe,{})," Pause"]}):e.jsxs("button",{onClick:_,className:"btn btn-play",disabled:o>=r.length-1,children:[e.jsx(re,{})," Play"]}),e.jsx("button",{onClick:E,className:"btn btn-step",disabled:o>=r.length-1,children:e.jsx(we,{})}),e.jsx("button",{onClick:D,className:"btn btn-reset",children:"Reset"}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",value:g,onChange:C=>j(Number(C.target.value)),className:"speed-slider"}),e.jsxs("span",{children:[(2200-g)/200,"x"]})]})]}),y&&e.jsxs("div",{className:"step-info",children:[e.jsxs("h3",{children:["Step ",o+1," of ",r.length," - ",x]}),e.jsx("p",{children:y.description}),y.line&&e.jsxs("span",{className:"code-line",children:["Line ",y.line]})]}),e.jsx("div",{className:"tree-display",children:L.length>0?(()=>{const C=$=>$?1+Math.max(C($.left),C($.right)):0,M=C(n.root),B="100%",R=Math.min(460,Math.max(M*70+100,300));return e.jsxs("svg",{width:B,height:R,className:"tree-svg",viewBox:`0 0 760 ${R}`,preserveAspectRatio:"xMidYMid meet",children:[V.map(($,X)=>e.jsx("line",{x1:$.x1,y1:$.y1,x2:$.x2,y2:$.y2,stroke:"rgba(255, 255, 255, 0.3)",strokeWidth:"2"},X)),L.map(($,X)=>{let k="tree-node";return y&&(y.currentNode===$.value&&(k+=" highlighted"),y.type==="found"&&y.value===$.value&&(k+=" found"),y.type==="insert"&&y.value===$.value&&(k+=" inserted"),y.type==="rotate"&&y.node===$.value&&(k+=" rotating")),e.jsxs("g",{children:[e.jsx("circle",{cx:$.x,cy:$.y,r:22,className:k}),e.jsx("text",{x:$.x,y:$.y,textAnchor:"middle",dominantBaseline:"central",className:"node-text",fontSize:"16",fill:"white",fontWeight:"700",children:$.value}),e.jsxs("text",{x:$.x+25,y:$.y-15,textAnchor:"start",className:"height-text",fontSize:"12",fill:"#87ceeb",children:["h:",$.height]}),e.jsxs("text",{x:$.x+25,y:$.y+15,textAnchor:"start",className:"balance-factor",fontSize:"12",fill:"#ffd700",children:["b:",$.balance]})]},X)})]})})():e.jsxs("div",{className:"empty-tree",children:[e.jsx("p",{children:"AVL Tree is empty"}),e.jsx("p",{children:"Insert some numbers to start"})]})}),S!==null&&e.jsxs("div",{className:`search-result ${S?"found":"not-found"}`,children:[e.jsx("h3",{children:"Search Result:"}),e.jsx("p",{children:S?"✓ Found":"✗ Not Found"})]}),L.length>0&&e.jsxs("div",{className:"tree-info",children:[e.jsx("h3",{children:"Tree Information:"}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-item",children:[e.jsx("span",{children:"Total Nodes:"}),e.jsx("span",{children:L.length})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{children:"Tree Height:"}),e.jsx("span",{children:Math.max(...L.map(C=>C.y))/15})]}),e.jsxs("div",{className:"info-item",children:[e.jsx("span",{children:"Is Balanced:"}),e.jsx("span",{children:"✓ Yes (AVL Property)"})]})]})]}),e.jsx(ei,{}),e.jsx(ti,{})]})]})]})},si="/visualizer/assets/ydg-Dywh1i34.png",ai="/visualizer/assets/bavi-CvkCDC5-.png",oi="/visualizer/assets/block-arKNOtM2.jpg",li=h.memo(({isWall:n,isStart:t,isEnd:i,isVisited:s,isShortestPath:a,row:l,col:r,onMouseDown:c,onMouseEnter:o,onMouseUp:d,onMouseLeave:u})=>{const p=()=>t?"node_start":i?"node_end":n?"node_wall":a?"node_path":s?"node_visited":"node_",g=j=>(j.preventDefault(),!1);return e.jsxs("td",{id:`node-${l}-${r}`,className:p(),onMouseDown:j=>{j.preventDefault(),c(l,r)},onMouseEnter:()=>o(l,r),onMouseUp:()=>d(),onMouseLeave:()=>u(l,r),onDragStart:g,draggable:!1,style:{cursor:"pointer",position:"relative"},children:[t&&e.jsx("img",{src:si,alt:"Start",className:"node-image start-image"}),i&&e.jsx("img",{src:ai,alt:"End",className:"node-image end-image"}),n&&e.jsx("img",{src:oi,alt:"Wall",className:"node-image wall-image"})]})});li.displayName="Node";const ci=(n,t,i)=>{const s=[];let a=0,l=n.length-1,r=!1,c=-1;for(;a<=l&&!r;){const o=Math.floor((a+l)/2),d={left:a,right:l,mid:o,comparing:n[o],target:t,action:`Comparing ${t} with ${n[o]} at index ${o}`};s.push(d),n[o]===t?(r=!0,c=o,d.action=`Found ${t} at index ${o}!`,d.found=!0):n[o]<t?(a=o+1,d.action=`${n[o]} < ${t}, searching right half`):(l=o-1,d.action=`${n[o]} > ${t}, searching left half`)}return r||s.push({left:a,right:l,mid:-1,action:`${t} not found in array`,notFound:!0}),{steps:s,found:r,index:c}},be=(n,t,i=0,s=n.length-1,a=[],l)=>{if(i>s){const o={left:i,right:s,mid:-1,action:`${t} not found in array`,notFound:!0};return a.push(o),{steps:a,found:!1,index:-1}}const r=Math.floor((i+s)/2),c={left:i,right:s,mid:r,comparing:n[r],target:t,action:`Comparing ${t} with ${n[r]} at index ${r}`};return a.push(c),n[r]===t?(c.action=`Found ${t} at index ${r}!`,c.found=!0,{steps:a,found:!0,index:r}):n[r]<t?(c.action=`${n[r]} < ${t}, searching right half`,be(n,t,r+1,s,a)):(c.action=`${n[r]} > ${t}, searching left half`,be(n,t,i,r-1,a))},Ee=({title:n,description:t,complexity:i,children:s,codeComponent:a,controls:l,visualization:r,consoleOutput:c})=>e.jsxs("div",{className:"search-visualizer-container",children:[e.jsx("div",{className:"search-visualizer-bg-overlay"}),e.jsxs("header",{className:"search-visualizer-header",children:[e.jsxs("div",{className:"header-navigation",children:[e.jsxs(Y,{to:"/",className:"nav-button",children:[e.jsx(te,{size:16}),e.jsx("span",{children:"Home"})]}),e.jsxs(Y,{to:"/search",className:"nav-button",children:[e.jsx(Oe,{size:16}),e.jsx("span",{children:"Back to Search Algorithms"})]})]}),e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:n}),e.jsx("p",{children:t}),e.jsxs("div",{className:"complexity-info",children:[e.jsxs("div",{className:"complexity-item",children:[e.jsx("strong",{children:"Time Complexity:"})," ",i.time]}),e.jsxs("div",{className:"complexity-item",children:[e.jsx("strong",{children:"Space Complexity:"})," ",i.space]})]})]})]}),e.jsxs("div",{className:"visualizer-content",children:[e.jsxs("div",{className:"left-panel",children:[e.jsxs("div",{className:"controls-section",children:[e.jsx("h3",{children:"Controls"}),l]}),e.jsxs("div",{className:"visualization-section",children:[e.jsx("h3",{children:"Visualization"}),e.jsx("div",{className:"visualization-content",children:r})]}),e.jsxs("div",{className:"console-section",children:[e.jsx("h3",{children:"Algorithm Steps"}),e.jsx("div",{className:"console-content",children:c})]})]}),e.jsxs("div",{className:"right-panel",children:[e.jsx("h3",{children:"Implementation"}),e.jsx("div",{className:"code-viewer",children:a})]})]}),s]}),di=()=>{const[n,t]=h.useState([2,5,8,12,16,23,38,45,56,67,78]),[i,s]=h.useState(23),[a,l]=h.useState(!1),[r,c]=h.useState(0),[o,d]=h.useState([]),[u,p]=h.useState("iterative"),[g,j]=h.useState(1e3),[x,f]=h.useState(0),S=`// Iterative Binary Search
int binarySearchIterative(int arr[], int n, int target) {
    int left = 0, right = n - 1;  
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1; // Target not found
}
// Recursive Binary Search  
int binarySearchRecursive(int arr[], int left, int right, int target) {
    if (left > right)
        return -1;
        
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target)
        return mid;
        
    if (arr[mid] < target)
        return binarySearchRecursive(arr, mid + 1, right, target);
    else
        return binarySearchRecursive(arr, left, mid - 1, target);
}`,v=()=>{const N=10+Math.floor(Math.random()*5),w=Array.from({length:N},()=>Math.floor(Math.random()*100)).sort((I,q)=>I-q);t(w),s(w[Math.floor(Math.random()*w.length)]),d([]),c(0)},L=()=>{const N=u==="iterative"?ci(n,i):be(n,i);d(N.steps),c(0),l(!0)};h.useEffect(()=>{if(a&&r<o.length){const N=setTimeout(()=>{c(I=>I+1);const w=o[r];w&&(u==="iterative"?w.found?f(10):w.action.includes("searching right")?f(13):w.action.includes("searching left")?f(15):f(8):w.found?f(28):w.action.includes("searching right")?f(31):w.action.includes("searching left")?f(33):f(26))},g);return()=>clearTimeout(N)}else r>=o.length&&l(!1)},[a,r,o.length,g,u]);const m=o[r-1],V=N=>{if(!m)return"array-item";const{left:w,right:I,mid:q,found:_,notFound:U}=m;return _&&N===q?"array-item found":U?"array-item":N===q?"array-item current":N>=w&&N<=I?"array-item active":"array-item inactive"},z=()=>e.jsxs("div",{className:"control-group",children:[e.jsxs("div",{className:"input-controls",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Target Value:"}),e.jsx("input",{type:"number",value:i,onChange:N=>s(parseInt(N.target.value)),className:"search-input"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Search Type:"}),e.jsxs("div",{className:"radio-group",children:[e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"iterative",checked:u==="iterative",onChange:N=>p(N.target.value)}),"Iterative"]}),e.jsxs("label",{children:[e.jsx("input",{type:"radio",value:"recursive",checked:u==="recursive",onChange:N=>p(N.target.value)}),"Recursive"]})]})]})]}),e.jsxs("div",{className:"playback-controls",children:[e.jsx("button",{onClick:()=>c(Math.max(0,r-1)),disabled:r===0,className:"search-control-btn",title:"Previous Step",children:e.jsx(Ae,{})}),e.jsx("button",{onClick:()=>l(!a),disabled:o.length===0,className:"search-control-btn primary",title:a?"Pause":"Play",children:a?e.jsx(oe,{}):e.jsx(re,{})}),e.jsx("button",{onClick:()=>c(Math.min(o.length,r+1)),disabled:r>=o.length,className:"search-control-btn",title:"Next Step",children:e.jsx(Te,{})}),e.jsx("button",{onClick:L,className:"search-control-btn success",title:"Start Search",children:"Start Search"}),e.jsxs("button",{onClick:v,className:"search-control-btn",title:"Generate New Array",children:[e.jsx(Le,{})," New Array"]})]}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",value:g,onChange:N=>j(parseInt(N.target.value))}),e.jsxs("span",{children:[g,"ms"]})]})]}),A=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"algorithm-info",children:e.jsxs("h4",{children:["Binary Search - ",u]})}),e.jsx("div",{className:"array-container",children:n.map((N,w)=>e.jsxs("div",{className:V(w),layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:w*.05},children:[e.jsx("div",{className:"array-value",children:N}),e.jsx("div",{className:"array-index",children:w})]},w))}),e.jsxs("div",{className:"algorithm-status",children:[e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Target"}),e.jsx("span",{children:i})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Step"}),e.jsxs("span",{children:[r," / ",o.length]})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Status"}),e.jsx("span",{children:m!=null&&m.found?"Found!":m!=null&&m.notFound?"Not Found":"Searching..."})]})]})]}),T=()=>e.jsxs(e.Fragment,{children:[m&&e.jsxs("div",{className:"step-info",children:[e.jsxs("div",{className:"step-description",children:[e.jsxs("strong",{children:["Step ",r,":"]})," ",m.action]}),m.left!==void 0&&e.jsxs("div",{className:"step-details",children:[e.jsxs("span",{children:["Left: ",m.left]}),e.jsxs("span",{children:["Right: ",m.right]}),e.jsxs("span",{children:["Mid: ",m.mid]})]})]}),e.jsx("div",{className:"console-output",children:o.slice(0,r).map((N,w)=>e.jsxs("div",{className:"console-line",children:["Step ",w+1,": ",N.action]},w))})]}),y=()=>e.jsx(Ce,{language:"c",style:ke,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,customStyle:{margin:0,padding:"1rem",fontSize:"0.85rem",lineHeight:"1.5",height:"100%",overflow:"auto",background:"rgba(13, 17, 23, 0.8)",backdropFilter:"blur(10px)"},lineProps:N=>({style:{backgroundColor:N===x?"rgba(139, 92, 246, 0.3)":"transparent",display:"block",color:N===x?"#fff":void 0}}),children:S});return e.jsx(Ee,{title:"Binary Search Visualizer",description:"Efficient search for sorted arrays using divide-and-conquer strategy",complexity:{time:"O(log n)",space:u==="iterative"?"O(1)":"O(log n)"},controls:z(),visualization:A(),consoleOutput:T(),codeComponent:y()})},hi=(n,t,i)=>{const s=[];let a=!1,l=-1;for(let r=0;r<n.length;r++){const c={currentIndex:r,comparing:n[r],target:t,action:`Comparing ${t} with ${n[r]} at index ${r}`};if(s.push(c),n[r]===t){a=!0,l=r,c.action=`Found ${t} at index ${r}!`,c.found=!0;break}else c.action=`${n[r]} ≠ ${t}, continue searching`}return a||s.push({currentIndex:-1,action:`${t} not found in array`,notFound:!0}),{steps:s,found:a,index:l}},ui=()=>{const[n,t]=h.useState([64,34,25,12,22,11,90,5,77,30]),[i,s]=h.useState(22),[a,l]=h.useState(!1),[r,c]=h.useState(0),[o,d]=h.useState([]),[u,p]=h.useState(1e3),[g,j]=h.useState(0),x=`#include <stdio.h>

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == target) {
            return i;  // Found target at index i
        }
    }
    
    return -1; // Target not found
}`,f=()=>{const T=8+Math.floor(Math.random()*7),y=Array.from({length:T},()=>Math.floor(Math.random()*100));t(y),s(y[Math.floor(Math.random()*y.length)]),d([]),c(0),j(0)},S=()=>{const T=hi(n,i);d(T.steps),c(0),j(0),l(!0)};h.useEffect(()=>{if(a&&r<o.length){const T=setTimeout(()=>{c(N=>N+1);const y=o[r];y&&(y.found?j(5):y.notFound?j(9):j(4))},u);return()=>clearTimeout(T)}else r>=o.length&&l(!1)},[a,r,o.length,u]);const v=o[r-1],L=T=>{if(!v)return"array-item";const{currentIndex:y,found:N,notFound:w}=v;return N&&T===y?"array-item found":w?"array-item":T===y?"array-item current":"array-item"},m=()=>e.jsxs("div",{className:"control-group",children:[e.jsx("div",{className:"input-controls",children:e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Target Value:"}),e.jsx("input",{type:"number",value:i,onChange:T=>s(parseInt(T.target.value)),className:"search-input"})]})}),e.jsxs("div",{className:"playback-controls",children:[e.jsx("button",{onClick:()=>c(Math.max(0,r-1)),disabled:r===0,className:"search-control-btn",title:"Previous Step",children:e.jsx(Ae,{})}),e.jsx("button",{onClick:()=>l(!a),disabled:o.length===0,className:"search-control-btn primary",title:a?"Pause":"Play",children:a?e.jsx(oe,{}):e.jsx(re,{})}),e.jsx("button",{onClick:()=>c(Math.min(o.length,r+1)),disabled:r>=o.length,className:"search-control-btn",title:"Next Step",children:e.jsx(Te,{})}),e.jsx("button",{onClick:S,className:"search-control-btn success",title:"Start Search",children:"Start Search"}),e.jsxs("button",{onClick:f,className:"search-control-btn",title:"Generate New Array",children:[e.jsx(Le,{})," New Array"]})]}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",value:u,onChange:T=>p(parseInt(T.target.value))}),e.jsxs("span",{children:[u,"ms"]})]})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"algorithm-info",children:e.jsx("h4",{children:"Linear Search"})}),e.jsx("div",{className:"array-container",children:n.map((T,y)=>e.jsxs("div",{className:L(y),layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:y*.05},children:[e.jsx("div",{className:"array-value",children:T}),e.jsx("div",{className:"array-index",children:y})]},y))}),e.jsxs("div",{className:"algorithm-status",children:[e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Target"}),e.jsx("span",{children:i})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Step"}),e.jsxs("span",{children:[r," / ",o.length]})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Status"}),e.jsx("span",{children:v!=null&&v.found?"Found!":v!=null&&v.notFound?"Not Found":"Searching..."})]})]})]}),z=()=>e.jsxs(e.Fragment,{children:[v&&e.jsxs("div",{className:"step-info",children:[e.jsxs("div",{className:"step-description",children:[e.jsxs("strong",{children:["Step ",r,":"]})," ",v.action]}),e.jsxs("div",{className:"step-details",children:[e.jsxs("span",{children:["Current Index: ",v.currentIndex]}),e.jsxs("span",{children:["Comparing: ",v.comparing," vs ",i]})]})]}),e.jsx("div",{className:"console-output",children:o.slice(0,r).map((T,y)=>e.jsxs("div",{className:"console-line",children:["Step ",y+1,": ",T.action]},y))})]}),A=()=>e.jsx(Ce,{language:"c",style:ke,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,customStyle:{margin:0,padding:"1rem",fontSize:"0.85rem",lineHeight:"1.5",height:"100%",overflow:"auto",background:"rgba(13, 17, 23, 0.8)",backdropFilter:"blur(10px)"},lineProps:T=>({style:{backgroundColor:T===g?"rgba(139, 92, 246, 0.3)":"transparent",display:"block",color:T===g?"#fff":void 0}}),children:x});return e.jsx(Ee,{title:"Linear Search Visualizer",description:"Simple sequential search through array elements one by one",complexity:{time:"O(n)",space:"O(1)"},controls:m(),visualization:V(),consoleOutput:z(),codeComponent:A()})},pi=(n,t,i)=>{const s=[],a=n.length,l=Math.floor(Math.sqrt(a));let r=0,c=0,o=!1,d=-1;for(;c<a&&n[c]<t;){r=c,c+=l;const u={phase:"jumping",left:r,right:Math.min(c,a-1),jumpSize:l,comparing:n[Math.min(c,a-1)],target:t,action:`Jumping by ${l}: checking if ${t} > ${n[Math.min(c,a-1)]} at index ${Math.min(c,a-1)}`};s.push(u)}s.push({phase:"linear_start",left:r,right:Math.min(c,a),action:`Found potential block [${r}, ${Math.min(c,a-1)}]. Starting linear search...`});for(let u=r;u<Math.min(c,a);u++){const p={phase:"linear",left:r,right:Math.min(c,a),current:u,comparing:n[u],target:t,action:`Linear search: comparing ${t} with ${n[u]} at index ${u}`};if(s.push(p),n[u]===t){o=!0,d=u,p.action=`Found ${t} at index ${u}!`,p.found=!0;break}if(n[u]>t){p.action=`${n[u]} > ${t}, element not in array`,p.notFound=!0;break}}return!o&&!s[s.length-1].notFound&&s.push({phase:"not_found",action:`${t} not found in array`,notFound:!0}),{steps:s,found:o,index:d,jumpSize:l}},mi=()=>{const[n,t]=h.useState([2,5,8,12,16,23,38,45,56,67,78,89,95]),[i,s]=h.useState(23),[a,l]=h.useState(!1),[r,c]=h.useState(0),[o,d]=h.useState([]),[u,p]=h.useState(1e3),[g,j]=h.useState(0),x=`#include <stdio.h>
#include <math.h>

int jumpSearch(int arr[], int n, int target) {
    int jumpSize = sqrt(n);
    int left = 0;
    int right = 0;
    
    // Jump phase - find the block
    while (right < n && arr[right] < target) {
        left = right;
        right += jumpSize;
    }
    
    // Linear search within the block
    for (int i = left; i < min(right, n); i++) {
        if (arr[i] == target) {
            return i;  // Found target
        }
        if (arr[i] > target) {
            return -1; // Target not found
        }
    }
    
    return -1; // Target not found
}`,f=()=>{const y=12+Math.floor(Math.random()*6),N=Array.from({length:y},()=>Math.floor(Math.random()*100)).sort((w,I)=>w-I);t(N),s(N[Math.floor(Math.random()*N.length)]),d([]),c(0),j(0)},S=()=>{const y=pi(n,i);d(y.steps),c(0),j(0),l(!0)};h.useEffect(()=>{if(a&&r<o.length){const y=setTimeout(()=>{c(w=>w+1);const N=o[r];N&&(N.phase==="jumping"?j(10):N.phase==="linear_start"?j(15):N.phase==="linear"&&j(16))},u);return()=>clearTimeout(y)}else r>=o.length&&l(!1)},[a,r,o.length,u]);const v=o[r-1],L=y=>{if(!v)return"array-item";const{phase:N,left:w,right:I,current:q,found:_,notFound:U}=v;return _&&y===q?"array-item found":U?"array-item":y===q?"array-item current":N==="jumping"&&y===I?"array-item jump-target":N==="linear"&&y>=w&&y<I?"array-item active":N==="jumping"&&y===w?"array-item jump-start":"array-item"},m=Math.floor(Math.sqrt(n.length)),V=()=>e.jsxs("div",{className:"control-group",children:[e.jsxs("div",{className:"input-controls",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Target Value:"}),e.jsx("input",{type:"number",value:i,onChange:y=>s(parseInt(y.target.value)),className:"search-input"})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{children:"Jump Size:"}),e.jsxs("span",{className:"search-input",style:{backgroundColor:"rgba(255,255,255,0.05)",padding:"0.75rem"},children:["√",n.length," = ",m]})]})]}),e.jsxs("div",{className:"playback-controls",children:[e.jsx("button",{onClick:()=>c(Math.max(0,r-1)),disabled:r===0,className:"search-control-btn",title:"Previous Step",children:e.jsx(Ae,{})}),e.jsx("button",{onClick:()=>l(!a),disabled:o.length===0,className:"search-control-btn primary",title:a?"Pause":"Play",children:a?e.jsx(oe,{}):e.jsx(re,{})}),e.jsx("button",{onClick:()=>c(Math.min(o.length,r+1)),disabled:r>=o.length,className:"search-control-btn",title:"Next Step",children:e.jsx(Te,{})}),e.jsx("button",{onClick:S,className:"search-control-btn success",title:"Start Search",children:"Start Search"}),e.jsxs("button",{onClick:f,className:"search-control-btn",title:"Generate New Array",children:[e.jsx(Le,{})," New Array"]})]}),e.jsxs("div",{className:"speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("input",{type:"range",min:"200",max:"2000",value:u,onChange:y=>p(parseInt(y.target.value))}),e.jsxs("span",{children:[u,"ms"]})]})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"algorithm-info",children:[e.jsx("h4",{children:"Jump Search"}),e.jsxs("p",{style:{fontSize:"0.8rem",color:"#94a3b8",margin:"0.5rem 0"},children:["Jump Size: √",n.length," = ",m]})]}),e.jsx("div",{className:"array-container",children:n.map((y,N)=>e.jsxs("div",{className:L(N),layout:!0,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:N*.03},children:[e.jsx("div",{className:"array-value",children:y}),e.jsx("div",{className:"array-index",children:N})]},N))}),e.jsxs("div",{className:"algorithm-status",children:[e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Target"}),e.jsx("span",{children:i})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Step"}),e.jsxs("span",{children:[r," / ",o.length]})]}),e.jsxs("div",{className:"status-item",children:[e.jsx("strong",{children:"Phase"}),e.jsx("span",{children:(v==null?void 0:v.phase)==="jumping"?"Jumping":(v==null?void 0:v.phase)==="linear"?"Linear Search":v!=null&&v.found?"Found!":v!=null&&v.notFound?"Not Found":"Ready"})]})]})]}),A=()=>e.jsxs(e.Fragment,{children:[v&&e.jsxs("div",{className:"step-info",children:[e.jsxs("div",{className:"step-description",children:[e.jsxs("strong",{children:["Step ",r,":"]})," ",v.action]}),v.phase==="jumping"&&e.jsxs("div",{className:"step-details",children:[e.jsx("span",{children:"Phase: Jumping"}),e.jsxs("span",{children:["Jump Size: ",m]}),e.jsxs("span",{children:["Block: [",v.left,", ",v.right,"]"]})]}),v.phase==="linear"&&e.jsxs("div",{className:"step-details",children:[e.jsx("span",{children:"Phase: Linear Search"}),e.jsxs("span",{children:["Block: [",v.left,", ",v.right,")"]}),e.jsxs("span",{children:["Current: ",v.current]})]})]}),e.jsx("div",{className:"console-output",children:o.slice(0,r).map((y,N)=>e.jsxs("div",{className:"console-line",children:["Step ",N+1,": ",y.action]},N))})]}),T=()=>e.jsx(Ce,{language:"c",style:ke,wrapLines:!0,showLineNumbers:!0,lineNumberStyle:{color:"#6a737d"},wrapLongLines:!0,customStyle:{margin:0,padding:"1rem",fontSize:"0.85rem",lineHeight:"1.5",height:"100%",overflow:"auto",background:"rgba(13, 17, 23, 0.8)",backdropFilter:"blur(10px)"},lineProps:y=>({style:{backgroundColor:y===g?"rgba(139, 92, 246, 0.3)":"transparent",display:"block",color:y===g?"#fff":void 0}}),children:x});return e.jsx(Ee,{title:"Jump Search Visualizer",description:"Block-based search with √n optimal jump size for sorted arrays",complexity:{time:"O(√n)",space:"O(1)"},controls:V(),visualization:z(),consoleOutput:A(),codeComponent:T()})},fi=({onAlgorithmSelect:n})=>{const t=[{id:"binary",title:"Binary Search",description:"Efficient search for sorted arrays using divide-and-conquer",complexity:"O(log n)",icon:e.jsx(fe,{}),color:"#8b5cf6",features:["Divide and conquer","Sorted arrays","Fast lookup"],gradient:"linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)"},{id:"linear",title:"Linear Search",description:"Simple sequential search through array elements",complexity:"O(n)",icon:e.jsx(ye,{}),color:"#06b6d4",features:["Sequential scan","Works on any array","Simple logic"],gradient:"linear-gradient(135deg, #06b6d4 0%, #10b981 100%)"},{id:"jump",title:"Jump Search",description:"Block-based search with √n optimal jump size",complexity:"O(√n)",icon:e.jsx(De,{}),color:"#10b981",features:["Block jumps","Optimized for sorted arrays","Hybrid approach"],gradient:"linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)"}];return e.jsxs("div",{className:"search-homepage",children:[e.jsxs("header",{className:"search-homepage-header",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsxs(Y,{to:"/",className:"search-home-nav-btn",children:[e.jsx(te,{}),e.jsx("span",{children:"Home"})]}),e.jsxs("div",{className:"search-homepage-title",children:[e.jsx("h1",{children:"Search Algorithms Visualizer"}),e.jsx("p",{children:"Interactive visualizations for different search algorithms"})]})]}),e.jsxs("main",{className:"search-homepage-main",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[e.jsx("div",{className:"search-algorithms-grid",children:t.map((i,s)=>e.jsx("div",{className:"search-algorithm-card",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3+s*.1},whileHover:{y:-8,scale:1.02},whileTap:{scale:.98},onClick:()=>n(i.id),children:e.jsxs("div",{className:"algorithm-card-content",style:{background:i.gradient},children:[e.jsx("div",{className:"algorithm-icon",children:Fe.cloneElement(i.icon,{size:48})}),e.jsxs("div",{className:"algorithm-badges",children:[e.jsx("span",{className:"algorithm-type-badge",children:"Search"}),e.jsx("span",{className:"algorithm-complexity-badge",children:i.complexity})]}),e.jsx("h3",{className:"algorithm-title",children:i.title}),e.jsx("p",{className:"algorithm-description",children:i.description}),e.jsx("div",{className:"algorithm-features",children:i.features.map((a,l)=>e.jsx("span",{className:"feature-tag",children:a},l))}),e.jsx("div",{className:"algorithm-action",children:e.jsxs("div",{className:"learn-btn",children:[e.jsx(qe,{}),e.jsx("span",{children:"Learn & Visualize"}),e.jsx(He,{})]})})]})},i.id))}),e.jsx("div",{className:"search-homepage-footer",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.8},children:e.jsx("p",{children:"Choose a search algorithm to start your interactive learning journey"})})]})]})},gi=()=>{const[n,t]=h.useState("overview"),i=[{id:"binary",title:"Binary Search",description:"Efficient search for sorted arrays using divide-and-conquer",complexity:"O(log n)",icon:e.jsx(fe,{}),color:"#8b5cf6",features:["Divide and conquer","Sorted arrays","Fast lookup"],gradient:"linear-gradient(135deg, #667eea 0%, #8b5cf6 100%)"},{id:"linear",title:"Linear Search",description:"Simple sequential search through array elements",complexity:"O(n)",icon:e.jsx(ye,{}),color:"#06b6d4",features:["Sequential scan","Works on any array","Simple logic"],gradient:"linear-gradient(135deg, #06b6d4 0%, #10b981 100%)"},{id:"jump",title:"Jump Search",description:"Block-based search with √n optimal jump size",complexity:"O(√n)",icon:e.jsx(De,{}),color:"#10b981",features:["Block jumps","Optimized for sorted arrays","Hybrid approach"],gradient:"linear-gradient(135deg, #10b981 0%, #8b5cf6 100%)"}],s=()=>{switch(n){case"binary":return e.jsx(di,{});case"linear":return e.jsx(ui,{});case"jump":return e.jsx(mi,{});default:return e.jsx(fi,{onAlgorithmSelect:t})}};return e.jsxs("div",{children:[n!=="overview"&&e.jsxs("div",{className:"algorithm-nav",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:[e.jsx("button",{onClick:()=>t("overview"),className:"back-button",children:"← Back to Overview"}),e.jsx("div",{className:"algorithm-tabs",children:i.map(a=>e.jsxs("button",{onClick:()=>t(a.id),className:`tab-button ${n===a.id?"active":""}`,style:{"--accent-color":a.color},children:[a.icon,a.title]},a.id))})]}),n==="overview"?s():e.jsx("main",{className:"main-content",children:s()})]})},xi=[{id:"bfs",title:"Breadth-First Search",description:"Explore graph level by level, finding shortest paths in unweighted graphs",icon:e.jsx(ze,{}),color:"#4f46e5",route:"/graphs/bfs",difficulty:"Beginner",timeComplexity:"O(V + E)"},{id:"dfs",title:"Depth-First Search",description:"Explore graph depth by depth, useful for topological sorting and cycle detection",icon:e.jsx(at,{}),color:"#0891b2",route:"/graphs/dfs",difficulty:"Beginner",timeComplexity:"O(V + E)"},{id:"dijkstra",title:"Dijkstra's Algorithm",description:"Find shortest paths from a source vertex to all other vertices in weighted graphs",icon:e.jsx(ot,{}),color:"#dc2626",route:"/graphs/dijkstra",difficulty:"Intermediate",timeComplexity:"O((V + E) log V)"},{id:"prim",title:"Prim's Algorithm",description:"Find minimum spanning tree by adding lowest weight edges to growing tree",icon:e.jsx(ge,{}),color:"#16a34a",route:"/graphs/prim",difficulty:"Intermediate",timeComplexity:"O(E log V)"},{id:"kruskal",title:"Kruskal's Algorithm",description:"Find minimum spanning tree by sorting edges and using union-find data structure",icon:e.jsx(ge,{}),color:"#ca8a04",route:"/graphs/kruskal",difficulty:"Intermediate",timeComplexity:"O(E log E)"}],yi=()=>{const n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},t={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.5,ease:"easeOut"}},hover:{scale:1.03,y:-5,transition:{duration:.2,ease:"easeInOut"}}};return e.jsxs("div",{className:"graph-algorithms-container",children:[e.jsx("div",{className:"graph-algorithms-bg-overlay"}),e.jsxs(J.header,{className:"graph-algorithms-header",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsxs(Y,{to:"/",className:"home-button",children:[e.jsx(te,{size:18}),e.jsx("span",{children:"Home"})]}),e.jsx("h1",{children:"Graph Algorithms Visualizer"}),e.jsx("p",{children:"Explore and understand fundamental graph algorithms through interactive visualizations"})]}),e.jsx(J.div,{className:"algorithms-grid",variants:n,initial:"hidden",animate:"visible",children:xi.map(i=>e.jsx(J.div,{variants:t,whileHover:"hover",className:"algorithm-card",style:{"--card-color":i.color},children:e.jsxs(Y,{to:i.route,className:"card-link",children:[e.jsx("div",{className:"card-icon",children:i.icon}),e.jsxs("div",{className:"card-content",children:[e.jsx("h3",{className:"card-title",children:i.title}),e.jsx("p",{className:"card-description",children:i.description}),e.jsxs("div",{className:"card-meta",children:[e.jsx("span",{className:"difficulty",children:i.difficulty}),e.jsx("span",{className:"complexity",children:i.timeComplexity})]})]}),e.jsx("div",{className:"card-gradient"})]})},i.id))}),e.jsxs(J.section,{className:"algorithms-info",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.5},children:[e.jsx("h2",{children:"About Graph Algorithms"}),e.jsxs("div",{className:"info-grid",children:[e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Search Algorithms"}),e.jsx("p",{children:"BFS and DFS are fundamental graph traversal algorithms used to explore vertices and edges systematically."})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Shortest Path"}),e.jsx("p",{children:"Dijkstra's algorithm finds the shortest path between vertices in a weighted graph with non-negative edge weights."})]}),e.jsxs("div",{className:"info-card",children:[e.jsx("h3",{children:"Minimum Spanning Tree"}),e.jsx("p",{children:"Prim's and Kruskal's algorithms find the minimum spanning tree that connects all vertices with minimum total edge weight."})]})]})]})]})},vi=({code:n,onChange:t,currentLine:i,isAnimating:s,nodes:a})=>{const l=h.useRef(null),r=h.useRef([]);h.useEffect(()=>{l.current&&l.current.setValue(n)},[n]),h.useEffect(()=>{if(l.current&&i>0&&s){const d=l.current.getModel();d&&(r.current=l.current.deltaDecorations(r.current,[{range:{startLineNumber:i,startColumn:1,endLineNumber:i,endColumn:d.getLineMaxColumn(i)},options:{isWholeLine:!0,className:"highlighted-line",glyphMarginClassName:"highlighted-line-glyph"}}]),l.current.revealLineInCenter(i,1))}else l.current&&!s&&(r.current=l.current.deltaDecorations(r.current,[]))},[i,s]);function c(d,u){var p;l.current=d,(p=d.getDomNode())==null||p.style.setProperty("outline","none"),u.editor.defineTheme("highlighted-theme",{base:"vs-dark",inherit:!0,rules:[],colors:{}}),u.editor.setTheme("highlighted-theme")}function o(d){t&&(l.current.updateTimer&&clearTimeout(l.current.updateTimer),l.current.updateTimer=setTimeout(()=>{try{const u=d.split(`
`),p=[];for(let g=0;g<u.length;g++){const j=u[g].trim();if(j.includes("insert")||j.includes("delete")){const x=j.match(/\d+/);if(x){const f=parseInt(x[0]);j.includes("insertAtBeginning")?p.unshift({data:f}):j.includes("insertAtEnd")?p.push({data:f}):j.includes("deleteFromBeginning")?p.shift():j.includes("deleteFromEnd")&&p.pop()}}}t(p)}catch(u){console.error("Error parsing code:",u)}},300))}return e.jsx("div",{className:"code-viewer",style:{outline:"none",height:"100%",display:"flex",flexDirection:"column"},children:e.jsx(lt,{height:"100%",defaultLanguage:"cpp",defaultValue:n,theme:"vs-dark",options:{fontSize:16,minimap:{enabled:!1},lineNumbers:"on",roundedSelection:!1,scrollBeyondLastLine:!1,readOnly:!1,automaticLayout:!0,folding:!0,fixedOverflowWidgets:!0},onMount:c,onChange:o})})},ji=({graph:n,onGraphUpdate:t,onAlgorithmExecute:i,onReset:s,isPlaying:a,speed:l,onSpeedChange:r,config:c={},algorithmState:o={}})=>{const[d,u]=h.useState(0),[p,g]=h.useState(null),[j,x]=h.useState(!1),[f,S]=h.useState(6),[v,L]=h.useState(.3),[m,V]=h.useState(c.weighted||!1),[z,A]=h.useState(c.directed||!1),T=h.useCallback(()=>{const w=[];for(let I=0;I<f;I++){w[I]=[];for(let q=0;q<f;q++)if(I!==q&&Math.random()<v){const _=m?Math.floor(Math.random()*10)+1:1;w[I][q]=_,z||(w[q]=w[q]||[],w[q][I]=_)}else w[I][q]=0}t(w),u(0),g(f>1?f-1:null)},[f,v,m,z,t]),y=h.useCallback(w=>{let I=[];switch(w){case"tree":I=Array(7).fill().map(()=>Array(7).fill(0)),[[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]].forEach(([P,E])=>{const b=m?Math.floor(Math.random()*8)+1:1;I[P][E]=b,z||(I[E][P]=b)});break;case"complete":const _=5;I=Array(_).fill().map(()=>Array(_).fill(0));for(let P=0;P<_;P++)for(let E=0;E<_;E++)if(P!==E){const b=m?Math.floor(Math.random()*10)+1:1;I[P][E]=b}break;case"path":const U=6;I=Array(U).fill().map(()=>Array(U).fill(0));for(let P=0;P<U-1;P++){const E=m?Math.floor(Math.random()*8)+1:1;I[P][P+1]=E,z||(I[P+1][P]=E)}break;default:return}t(I),u(0),g(I.length>1?I.length-1:null)},[m,z,t]),N=h.useCallback(()=>{if(n&&n.length>0){const w=Math.max(0,Math.min(d,n.length-1)),I=p!==null?Math.max(0,Math.min(p,n.length-1)):null;i(w,I,{weighted:m,directed:z})}},[n,d,p,m,z,i]);return e.jsxs("div",{className:"graph-control-group",children:[e.jsxs("div",{className:"graph-control-row",children:[e.jsxs(J.button,{className:`graph-compact-btn ${a?"warning":"success"}`,onClick:a?s:N,disabled:!n||n.length===0,whileHover:{scale:1.05},whileTap:{scale:.95},title:a?"Stop Algorithm":"Start Algorithm",children:[a?e.jsx(ct,{}):e.jsx(re,{}),a?"Stop":"Start"]}),e.jsx(J.button,{className:"graph-compact-btn",onClick:s,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Reset Algorithm",children:"Reset"}),e.jsx(J.button,{className:"graph-compact-btn primary",onClick:T,disabled:a,whileHover:{scale:1.05},whileTap:{scale:.95},title:"Generate Random Graph",children:e.jsx(le,{})})]}),e.jsxs("div",{className:"graph-control-row",children:[e.jsxs("div",{className:"graph-input-group",children:[e.jsx("label",{children:"Start Node:"}),e.jsx("select",{className:"graph-compact-select",value:d,onChange:w=>u(parseInt(w.target.value)),disabled:a,children:n&&n.map((w,I)=>e.jsxs("option",{value:I,children:["Node ",I]},I))})]}),c.needsEndNode&&e.jsxs("div",{className:"graph-input-group",children:[e.jsx("label",{children:"End Node:"}),e.jsxs("select",{className:"graph-compact-select",value:p||"",onChange:w=>g(w.target.value?parseInt(w.target.value):null),disabled:a,children:[e.jsx("option",{value:"",children:"None"}),n&&n.map((w,I)=>e.jsxs("option",{value:I,children:["Node ",I]},I))]})]})]}),e.jsxs("div",{className:"graph-control-row",children:[e.jsx("button",{className:"graph-compact-btn",onClick:()=>y("tree"),disabled:a,title:"Generate Tree Graph",children:"Tree"}),e.jsx("button",{className:"graph-compact-btn",onClick:()=>y("complete"),disabled:a,title:"Generate Complete Graph",children:"Complete"}),e.jsx("button",{className:"graph-compact-btn",onClick:()=>y("path"),disabled:a,title:"Generate Path Graph",children:"Path"})]}),e.jsxs("div",{className:"graph-speed-control",children:[e.jsx("label",{children:"Speed:"}),e.jsx("button",{className:"graph-compact-btn",onClick:()=>r(Math.max(.1,l-.1)),title:"Decrease Speed",children:e.jsx(dt,{})}),e.jsxs("span",{children:[l.toFixed(1),"x"]}),e.jsx("button",{className:"graph-compact-btn",onClick:()=>r(Math.min(3,l+.1)),title:"Increase Speed",children:e.jsx(ae,{})})]}),e.jsx("div",{className:"graph-control-row",children:e.jsxs(J.button,{className:"graph-compact-btn",onClick:()=>x(!j),whileHover:{scale:1.05},whileTap:{scale:.95},title:"Graph Settings",children:[e.jsx(ht,{}),"Settings"]})}),j&&e.jsxs(J.div,{className:"graph-settings-panel",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[e.jsxs("div",{className:"graph-control-row",children:[e.jsxs("div",{className:"graph-input-group",children:[e.jsx("label",{children:"Graph Size:"}),e.jsx("input",{className:"graph-compact-input",type:"range",min:"3",max:"10",value:f,onChange:w=>S(parseInt(w.target.value)),disabled:a}),e.jsxs("span",{children:[f," nodes"]})]}),e.jsxs("div",{className:"graph-input-group",children:[e.jsx("label",{children:"Density:"}),e.jsx("input",{className:"graph-compact-input",type:"range",min:"0.1",max:"1",step:"0.1",value:v,onChange:w=>L(parseFloat(w.target.value)),disabled:a}),e.jsxs("span",{children:[(v*100).toFixed(0),"%"]})]})]}),e.jsxs("div",{className:"graph-control-row",children:[e.jsxs("label",{className:"graph-checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:m,onChange:w=>V(w.target.checked),disabled:a}),"Weighted"]}),e.jsxs("label",{className:"graph-checkbox-label",children:[e.jsx("input",{type:"checkbox",checked:z,onChange:w=>A(w.target.checked),disabled:a}),"Directed"]})]})]})]})},Si=({graph:n=[],visitedNodes:t=new Set,visitedEdges:i=new Set,currentStep:s="",algorithmState:a={},isAnimating:l=!1})=>{const r=h.useRef(null),[c,o]=h.useState([]),[d,u]=h.useState({width:1e3,height:700}),p=h.useCallback(j=>{if(j===0)return[];const x=d.width/2,f=d.height/2,S=Math.min(x,f)*.7,v=[];for(let L=0;L<j;L++){const m=2*Math.PI*L/j-Math.PI/2,V=x+S*Math.cos(m),z=f+S*Math.sin(m);v.push({x:V,y:z})}return v},[d]);h.useEffect(()=>{if(n&&n.length>0){const j=p(n.length);o(j)}else o([])},[n,p]),h.useEffect(()=>{const j=()=>{var f;const x=(f=r.current)==null?void 0:f.parentElement;if(x){const S=x.getBoundingClientRect();u({width:Math.min(S.width-40,1e3),height:Math.min(S.height-40,700)})}};return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[]),h.useEffect(()=>{const j=r.current;if(!j||!n||n.length===0||c.length===0||c.length!==n.length)return;const x=j.getContext("2d");x.clearRect(0,0,j.width,j.height),x.fillStyle="#1e293b",x.fillRect(0,0,j.width,j.height);for(let f=0;f<n.length;f++)for(let S=0;S<n[f].length;S++)if(n[f][S]>0&&c[f]&&c[S]){const v=c[f],L=c[S],m=`${f}-${S}`,V=i.has(m),z=a.currentEdge===m;let A="#475569";if(z?A="#fbbf24":V&&(A="#10b981"),x.strokeStyle=A,x.lineWidth=z?3:V?2:1,x.beginPath(),x.moveTo(v.x,v.y),x.lineTo(L.x,L.y),x.stroke(),a.directed&&g(x,v,L,A),n[f][S]!==1){const T=(v.x+L.x)/2,y=(v.y+L.y)/2;x.fillStyle="#f8fafc",x.font="12px Arial",x.textAlign="center",x.fillText(n[f][S].toString(),T,y-5)}}for(let f=0;f<c.length;f++){const S=c[f];if(!S)continue;const v=t.has(f),L=a.currentNode===f,m=a.startNode===f,V=a.endNode===f;let z="#64748b";if(v&&(z="#10b981"),L&&!m&&!V&&(z="#fbbf24"),V&&(z="#ef4444"),m&&(z="#3b82f6"),x.fillStyle=z,x.beginPath(),x.arc(S.x,S.y,20,0,2*Math.PI),x.fill(),x.strokeStyle="#f8fafc",x.lineWidth=2,x.stroke(),x.fillStyle="#f8fafc",x.font="bold 14px Arial",x.textAlign="center",x.fillText(f.toString(),S.x,S.y+5),a.distances&&a.distances[f]!==void 0){const A=a.distances[f],T=A===1/0?"∞":A.toString();x.fillStyle="#fbbf24",x.font="12px Arial",x.fillText(T,S.x,S.y-30)}}},[n,c,t,i,a,d]);const g=(j,x,f,S)=>{const L=f.x-x.x,m=f.y-x.y,V=Math.sqrt(L*L+m*m);if(V===0)return;const z=L/V,A=m/V,T=f.x-z*25,y=f.y-A*25,N=Math.atan2(m,L);j.strokeStyle=S,j.fillStyle=S,j.lineWidth=2,j.beginPath(),j.moveTo(T,y),j.lineTo(T-10*Math.cos(N-Math.PI/6),y-10*Math.sin(N-Math.PI/6)),j.moveTo(T,y),j.lineTo(T-10*Math.cos(N+Math.PI/6),y-10*Math.sin(N+Math.PI/6)),j.stroke()};return e.jsxs("div",{className:"graph-visualization",children:[e.jsx(J.canvas,{ref:r,width:d.width,height:d.height,className:"graph-canvas",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5}}),l&&e.jsxs(J.div,{className:"animation-indicator",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[e.jsx("div",{className:"spinner"}),e.jsx("span",{children:"Animating..."})]})]})},he=({algorithmName:n,algorithmCode:t,initialGraph:i,onAlgorithmStep:s,controlsConfig:a,algorithmDescription:l,timeComplexity:r,spaceComplexity:c})=>{const[o,d]=h.useState(i||[]),[u,p]=h.useState(0),[g,j]=h.useState(!1),[x,f]=h.useState(""),[S,v]=h.useState({}),[L,m]=h.useState(!1),[V,z]=h.useState(1),[A,T]=h.useState(new Set),[y,N]=h.useState(new Set),[w,I]=h.useState([]),q=h.useCallback((E,b,D,C={})=>{p(E),f(b),j(D),v(M=>({...M,...C})),b&&I(M=>[...M,{timestamp:Date.now(),step:M.length+1,message:b,state:{...C}}]),C.visitedNodes&&T(new Set(C.visitedNodes)),C.visitedEdges&&N(new Set(C.visitedEdges))},[]),_=h.useCallback(async(E,b,D={})=>{s&&(m(!0),T(new Set),N(new Set),I([]),await s(o,E,b,q,D,V),m(!1))},[o,s,q,V]),U=h.useCallback(E=>{d(E),T(new Set),N(new Set),p(0),f(""),v({}),I([])},[]),P=h.useCallback(()=>{T(new Set),N(new Set),p(0),f(""),v({}),m(!1),j(!1),I([])},[]);return e.jsxs("div",{className:"graph-visualizer-container",children:[e.jsx("div",{className:"graph-visualizer-bg-overlay"}),e.jsxs(J.header,{className:"graph-visualizer-header",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:[e.jsxs("div",{className:"header-navigation",children:[e.jsxs(Y,{to:"/",className:"graph-nav-button",children:[e.jsx(te,{size:16}),e.jsx("span",{children:"Home"})]}),e.jsxs(Y,{to:"/graphs",className:"graph-nav-button",children:[e.jsx(Oe,{size:16}),e.jsx("span",{children:"Back to Graphs"})]})]}),e.jsxs("div",{className:"header-content",children:[e.jsx("h1",{children:n}),e.jsx("p",{children:l}),e.jsxs("div",{className:"complexity-info",children:[e.jsxs("div",{className:"complexity-item",children:[e.jsx("strong",{children:"Time Complexity:"})," ",r]}),e.jsxs("div",{className:"complexity-item",children:[e.jsx("strong",{children:"Space Complexity:"})," ",c]})]})]})]}),e.jsxs(J.div,{className:"graph-visualizer-content",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.2},children:[e.jsxs(J.div,{className:"graph-left-panel",initial:{x:-20},animate:{x:0},transition:{duration:.8,delay:.4},children:[e.jsxs("div",{className:"graph-controls-section",children:[e.jsx("h3",{children:"Controls"}),e.jsx(ji,{graph:o,onGraphUpdate:U,onAlgorithmExecute:_,onReset:P,isPlaying:L,speed:V,onSpeedChange:z,config:a,algorithmState:S})]}),e.jsxs("div",{className:"graph-visualization-section",children:[e.jsx("h3",{children:"Graph Visualization"}),e.jsx("div",{className:"graph-visualization-content",children:e.jsx(Si,{graph:o,visitedNodes:A,visitedEdges:y,currentStep:x,algorithmState:S,isAnimating:g})})]}),e.jsxs("div",{className:"graph-console-section",children:[e.jsx("h3",{children:"Algorithm History"}),e.jsx("div",{className:"graph-console-content",children:e.jsx("div",{className:"graph-console-output",children:w.length>0?w.map((E,b)=>e.jsxs("div",{className:"console-line",children:[e.jsxs("span",{className:"step-number",children:["Step ",E.step,":"]})," ",E.message,E.state&&Object.keys(E.state).length>0&&e.jsx("span",{className:"step-state",children:Object.entries(E.state).filter(([D])=>!["visitedNodes","visitedEdges"].includes(D)).map(([D,C])=>` | ${D}: ${JSON.stringify(C)}`).join("")})]},b)):e.jsx("div",{className:"console-line empty",children:'No algorithm steps recorded yet. Click "Run Algorithm" to start.'})})})]})]}),e.jsxs(J.div,{className:"graph-right-panel",initial:{x:20},animate:{x:0},transition:{duration:.8,delay:.4},children:[e.jsx("h3",{children:"C Implementation"}),e.jsx("div",{className:"graph-code-viewer",children:e.jsx(vi,{code:t,language:"c",currentLine:u,isAnimating:g,theme:"dark"})})]})]})]})},bi=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100

// Queue structure for BFS
typedef struct {
    int items[MAX_VERTICES];
    int front;
    int rear;
} Queue;

// Initialize queue
void initQueue(Queue* q) {
    q->front = -1;
    q->rear = -1;
}

// Check if queue is empty
bool isEmpty(Queue* q) {
    return q->front == -1;
}

// Add element to queue
void enqueue(Queue* q, int value) {
    if (q->rear == MAX_VERTICES - 1) return;
    
    if (q->front == -1) q->front = 0;
    q->rear++;
    q->items[q->rear] = value;
}

// Remove element from queue
int dequeue(Queue* q) {
    if (isEmpty(q)) return -1;
    
    int item = q->items[q->front];
    q->front++;
    
    if (q->front > q->rear) {
        q->front = q->rear = -1;
    }
    
    return item;
}

// BFS traversal function
void BFS(int graph[][MAX_VERTICES], int vertices, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    Queue q;
    initQueue(&q);
    
    // Mark the starting vertex as visited and enqueue it
    visited[startVertex] = true;
    enqueue(&q, startVertex);
    printf("BFS traversal starting from vertex %d: ", startVertex);
    
    while (!isEmpty(&q)) {
        // Dequeue a vertex from queue and print it
        int currentVertex = dequeue(&q);
        printf("%d ", currentVertex);
        
        // Get all adjacent vertices of the dequeued vertex
        // If an adjacent vertex has not been visited, mark it visited and enqueue it
        for (int i = 0; i < vertices; i++) {
            if (graph[currentVertex][i] == 1 && !visited[i]) {
                visited[i] = true;
                enqueue(&q, i);
            }
        }
    }
    printf("\\n");
}

int main() {
    int vertices = 6;
    int graph[MAX_VERTICES][MAX_VERTICES] = {
        {0, 1, 1, 0, 0, 0},
        {1, 0, 0, 1, 1, 0},
        {1, 0, 0, 0, 0, 1},
        {0, 1, 0, 0, 0, 1},
        {0, 1, 0, 0, 0, 1},
        {0, 0, 1, 1, 1, 0}
    };
    
    BFS(graph, vertices, 0);
    return 0;
}`,Ni=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100

// DFS traversal function using recursion
void DFS(int graph[][MAX_VERTICES], int vertices, int vertex, bool visited[]) {
    // Mark current vertex as visited and print it
    visited[vertex] = true;
    printf("%d ", vertex);
    
    // Recur for all adjacent vertices
    for (int i = 0; i < vertices; i++) {
        if (graph[vertex][i] == 1 && !visited[i]) {
            DFS(graph, vertices, i, visited);
        }
    }
}

// DFS traversal using stack (iterative approach)
void DFS_iterative(int graph[][MAX_VERTICES], int vertices, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    int stack[MAX_VERTICES];
    int top = -1;
    
    // Push the starting vertex to stack
    stack[++top] = startVertex;
    
    printf("DFS traversal starting from vertex %d: ", startVertex);
    
    while (top != -1) {
        // Pop a vertex from stack and print it if not visited
        int vertex = stack[top--];
        
        if (!visited[vertex]) {
            visited[vertex] = true;
            printf("%d ", vertex);
            
            // Push all adjacent unvisited vertices to stack
            for (int i = vertices - 1; i >= 0; i--) {
                if (graph[vertex][i] == 1 && !visited[i]) {
                    stack[++top] = i;
                }
            }
        }
    }
    printf("\\n");
}

// Wrapper function for recursive DFS
void DFS_recursive(int graph[][MAX_VERTICES], int vertices, int startVertex) {
    bool visited[MAX_VERTICES] = {false};
    printf("DFS traversal starting from vertex %d: ", startVertex);
    DFS(graph, vertices, startVertex, visited);
    printf("\\n");
}

int main() {
    int vertices = 6;
    int graph[MAX_VERTICES][MAX_VERTICES] = {
        {0, 1, 1, 0, 0, 0},
        {1, 0, 0, 1, 1, 0},
        {1, 0, 0, 0, 0, 1},
        {0, 1, 0, 0, 0, 1},
        {0, 1, 0, 0, 0, 1},
        {0, 0, 1, 1, 1, 0}
    };
    
    DFS_recursive(graph, vertices, 0);
    DFS_iterative(graph, vertices, 0);
    
    return 0;
}`,wi=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

#define MAX_VERTICES 100
#define INF INT_MAX

// Function to find vertex with minimum distance
int findMinDistance(int dist[], bool visited[], int vertices) {
    int min = INF, minIndex = -1;
    
    for (int v = 0; v < vertices; v++) {
        if (!visited[v] && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    
    return minIndex;
}

// Function to print the shortest path from source to target
void printPath(int parent[], int target) {
    if (parent[target] == -1) {
        printf("%d ", target);
        return;
    }
    
    printPath(parent, parent[target]);
    printf("%d ", target);
}

// Dijkstra's algorithm implementation
void dijkstra(int graph[][MAX_VERTICES], int vertices, int source) {
    int dist[MAX_VERTICES];     // Distance array
    bool visited[MAX_VERTICES]; // Visited array
    int parent[MAX_VERTICES];   // Parent array for path reconstruction
    
    // Initialize all distances as infinite and visited as false
    for (int i = 0; i < vertices; i++) {
        dist[i] = INF;
        visited[i] = false;
        parent[i] = -1;
    }
    
    // Distance from source to itself is always 0
    dist[source] = 0;
    
    // Find shortest path for all vertices
    for (int count = 0; count < vertices - 1; count++) {
        // Pick minimum distance vertex from unvisited vertices
        int u = findMinDistance(dist, visited, vertices);
        
        if (u == -1) break; // No more reachable vertices
        
        // Mark the picked vertex as visited
        visited[u] = true;
        
        // Update distance value of adjacent vertices
        for (int v = 0; v < vertices; v++) {
            // Update dist[v] if:
            // 1. Not visited yet
            // 2. There is an edge from u to v
            // 3. Total weight of path from source to v through u is smaller
            if (!visited[v] && graph[u][v] != 0 && 
                dist[u] != INF && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
                parent[v] = u;
            }
        }
    }
    
    // Print the shortest distances and paths
    printf("Shortest distances from vertex %d:\\n", source);
    printf("Vertex\\tDistance\\tPath\\n");
    
    for (int i = 0; i < vertices; i++) {
        printf("%d\\t", i);
        if (dist[i] == INF) {
            printf("INF\\t\\tNo path\\n");
        } else {
            printf("%d\\t\\t", dist[i]);
            printPath(parent, i);
            printf("\\n");
        }
    }
}

int main() {
    int vertices = 6;
    int graph[MAX_VERTICES][MAX_VERTICES] = {
        {0, 4, 2, 0, 0, 0},
        {4, 0, 1, 5, 0, 0},
        {2, 1, 0, 8, 10, 0},
        {0, 5, 8, 0, 2, 6},
        {0, 0, 10, 2, 0, 3},
        {0, 0, 0, 6, 3, 0}
    };
    
    dijkstra(graph, vertices, 0);
    return 0;
}`,Ci=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <limits.h>

#define MAX_VERTICES 100
#define INF INT_MAX

// Structure to represent an edge
typedef struct {
    int src, dest, weight;
} Edge;

// Function to find vertex with minimum key value
int findMinKey(int key[], bool mstSet[], int vertices) {
    int min = INF, minIndex = -1;
    
    for (int v = 0; v < vertices; v++) {
        if (!mstSet[v] && key[v] < min) {
            min = key[v];
            minIndex = v;
        }
    }
    
    return minIndex;
}

// Function to print the MST
void printMST(int parent[], int graph[][MAX_VERTICES], int vertices) {
    int totalWeight = 0;
    printf("Edge\\tWeight\\n");
    
    for (int i = 1; i < vertices; i++) {
        printf("%d - %d\\t%d\\n", parent[i], i, graph[i][parent[i]]);
        totalWeight += graph[i][parent[i]];
    }
    
    printf("Total weight of MST: %d\\n", totalWeight);
}

// Prim's algorithm to find MST
void primMST(int graph[][MAX_VERTICES], int vertices) {
    int parent[MAX_VERTICES]; // Array to store constructed MST
    int key[MAX_VERTICES];    // Key values used to pick minimum weight edge
    bool mstSet[MAX_VERTICES]; // To represent set of vertices included in MST
    
    // Initialize all keys as infinite and mstSet as false
    for (int i = 0; i < vertices; i++) {
        key[i] = INF;
        mstSet[i] = false;
    }
    
    // Always include first vertex in MST
    key[0] = 0;     // Make key 0 so that this vertex is picked first
    parent[0] = -1; // First node is always root of MST
    
    // The MST will have exactly (vertices-1) edges
    for (int count = 0; count < vertices - 1; count++) {
        // Pick minimum key vertex from set of vertices not yet included in MST
        int u = findMinKey(key, mstSet, vertices);
        
        if (u == -1) break; // No more vertices to process
        
        // Add the picked vertex to the MST set
        mstSet[u] = true;
        
        // Update key value and parent index of adjacent vertices
        for (int v = 0; v < vertices; v++) {
            // Update key[v] if:
            // 1. graph[u][v] is non-zero (there is an edge)
            // 2. v is not in mstSet (not yet included in MST)
            // 3. weight of edge u-v is smaller than current key of v
            if (graph[u][v] != 0 && !mstSet[v] && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }
    }
    
    // Print the constructed MST
    printMST(parent, graph, vertices);
}

int main() {
    int vertices = 5;
    int graph[MAX_VERTICES][MAX_VERTICES] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };
    
    printf("Minimum Spanning Tree using Prim's Algorithm:\\n");
    primMST(graph, vertices);
    
    return 0;
}`,ki=`#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MAX_VERTICES 100
#define MAX_EDGES 1000

// Structure to represent an edge
typedef struct {
    int src, dest, weight;
} Edge;

// Structure to represent a graph
typedef struct {
    int vertices, edges;
    Edge edge[MAX_EDGES];
} Graph;

// Structure for Union-Find (Disjoint Set)
typedef struct {
    int parent[MAX_VERTICES];
    int rank[MAX_VERTICES];
} UnionFind;

// Initialize Union-Find structure
void initUnionFind(UnionFind* uf, int vertices) {
    for (int i = 0; i < vertices; i++) {
        uf->parent[i] = i;
        uf->rank[i] = 0;
    }
}

// Find operation with path compression
int find(UnionFind* uf, int i) {
    if (uf->parent[i] != i) {
        uf->parent[i] = find(uf, uf->parent[i]);
    }
    return uf->parent[i];
}

// Union operation by rank
void unionSets(UnionFind* uf, int x, int y) {
    int rootX = find(uf, x);
    int rootY = find(uf, y);
    
    if (rootX != rootY) {
        // Union by rank
        if (uf->rank[rootX] < uf->rank[rootY]) {
            uf->parent[rootX] = rootY;
        } else if (uf->rank[rootX] > uf->rank[rootY]) {
            uf->parent[rootY] = rootX;
        } else {
            uf->parent[rootY] = rootX;
            uf->rank[rootX]++;
        }
    }
}

// Comparison function for sorting edges by weight
int compareEdges(const void* a, const void* b) {
    Edge* edgeA = (Edge*)a;
    Edge* edgeB = (Edge*)b;
    return edgeA->weight - edgeB->weight;
}

// Kruskal's algorithm to find MST
void kruskalMST(Graph* graph) {
    int vertices = graph->vertices;
    Edge result[MAX_VERTICES]; // Store the result MST
    int e = 0; // Index for result[]
    int i = 0; // Index for sorted edges
    
    // Sort all edges in ascending order of their weights
    qsort(graph->edge, graph->edges, sizeof(Edge), compareEdges);
    
    // Initialize Union-Find structure
    UnionFind uf;
    initUnionFind(&uf, vertices);
    
    printf("Kruskal's MST Algorithm:\\n");
    printf("Edges in MST:\\n");
    printf("Edge\\tWeight\\n");
    
    int totalWeight = 0;
    
    // Process edges in sorted order
    while (e < vertices - 1 && i < graph->edges) {
        Edge nextEdge = graph->edge[i++];
        
        int x = find(&uf, nextEdge.src);
        int y = find(&uf, nextEdge.dest);
        
        // If including this edge doesn't cause a cycle, include it in result
        if (x != y) {
            result[e++] = nextEdge;
            unionSets(&uf, x, y);
            printf("%d - %d\\t%d\\n", nextEdge.src, nextEdge.dest, nextEdge.weight);
            totalWeight += nextEdge.weight;
        }
        // Else discard the edge (it would create a cycle)
    }
    
    printf("Total weight of MST: %d\\n", totalWeight);
}

// Function to add an edge to the graph
void addEdge(Graph* graph, int src, int dest, int weight) {
    graph->edge[graph->edges].src = src;
    graph->edge[graph->edges].dest = dest;
    graph->edge[graph->edges].weight = weight;
    graph->edges++;
}

int main() {
    Graph graph;
    graph.vertices = 4;
    graph.edges = 0;
    
    // Add edges: (src, dest, weight)
    addEdge(&graph, 0, 1, 10);
    addEdge(&graph, 0, 2, 6);
    addEdge(&graph, 0, 3, 5);
    addEdge(&graph, 1, 3, 15);
    addEdge(&graph, 2, 3, 4);
    
    kruskalMST(&graph);
    
    return 0;
}`,Q={BFS:{needsEndNode:!1,weighted:!1,directed:!1,description:"Breadth-First Search explores graph level by level using a queue",timeComplexity:"O(V + E)",spaceComplexity:"O(V)"},DFS:{needsEndNode:!1,weighted:!1,directed:!1,description:"Depth-First Search explores graph depth by depth using recursion or stack",timeComplexity:"O(V + E)",spaceComplexity:"O(V)"},DIJKSTRA:{needsEndNode:!0,weighted:!0,directed:!1,description:"Dijkstra's algorithm finds shortest paths from source to all vertices",timeComplexity:"O((V + E) log V)",spaceComplexity:"O(V)"},PRIM:{needsEndNode:!1,weighted:!0,directed:!1,description:"Prim's algorithm finds minimum spanning tree by growing tree from start vertex",timeComplexity:"O(E log V)",spaceComplexity:"O(V)"},KRUSKAL:{needsEndNode:!1,weighted:!0,directed:!1,description:"Kruskal's algorithm finds minimum spanning tree using edge sorting and union-find",timeComplexity:"O(E log E)",spaceComplexity:"O(V)"}},ee=n=>new Promise(t=>setTimeout(t,n)),Ai=async(n,t,i,s,a,l=1)=>{const r=new Set,c=[t],o=new Set,d=new Set;let u=0;for(s(1,`Starting BFS from node ${t}`,!0,{currentNode:t,startNode:t,queue:[...c],distances:{},visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(1e3/l),r.add(t),o.add(t),s(2,`Added start node ${t} to visited`,!0,{currentNode:t,startNode:t,queue:[...c],visitedNodes:Array.from(o),visitedEdges:Array.from(d)});c.length>0;){u++;const p=c.shift();s(u+10,`Processing node ${p}`,!0,{currentNode:p,startNode:t,queue:[...c],visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(800/l);for(let g=0;g<n[p].length;g++)n[p][g]>0&&!r.has(g)&&(r.add(g),o.add(g),d.add(`${p}-${g}`),c.push(g),s(u+15,`Found neighbor ${g}, adding to queue`,!0,{currentNode:p,startNode:t,currentEdge:`${p}-${g}`,queue:[...c],visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(600/l))}s(0,`BFS completed! Visited ${o.size} nodes`,!1,{startNode:t,visitedNodes:Array.from(o),visitedEdges:Array.from(d)})},Ti=async(n,t,i,s,a,l=1)=>{const r=new Set,c=new Set,o=new Set,d=[];let u=0;const p=async(g,j=null)=>{u++,r.add(g),c.add(g),j!==null&&o.add(`${j}-${g}`),s(u+10,`Visiting node ${g}`,!0,{currentNode:g,startNode:t,visitedNodes:Array.from(c),visitedEdges:Array.from(o),stack:[...d]}),await ee(800/l);for(let x=0;x<n[g].length;x++)n[g][x]>0&&!r.has(x)&&(d.push(x),s(u+15,`Exploring neighbor ${x}`,!0,{currentNode:g,startNode:t,currentEdge:`${g}-${x}`,stack:[...d],visitedNodes:Array.from(c),visitedEdges:Array.from(o)}),await ee(600/l),await p(x,g));d.pop()};s(1,`Starting DFS from node ${t}`,!0,{currentNode:t,startNode:t,visitedNodes:Array.from(c),visitedEdges:Array.from(o)}),await ee(1e3/l),await p(t),s(0,`DFS completed! Visited ${c.size} nodes`,!1,{startNode:t,visitedNodes:Array.from(c),visitedEdges:Array.from(o)})},Li=async(n,t,i,s,a,l=1)=>{const r={},c=new Set,o=new Set,d=new Set;for(let g=0;g<n.length;g++)r[g]=g===t?0:1/0;s(1,`Starting Dijkstra from node ${t}`,!0,{currentNode:t,startNode:t,endNode:i,distances:{...r},visited:Array.from(c),visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(1e3/l);let u=0;for(;c.size<n.length;){u++;let g=null,j=1/0;for(let x=0;x<n.length;x++)!c.has(x)&&r[x]<j&&(j=r[x],g=x);if(g===null||r[g]===1/0)break;c.add(g),o.add(g),s(u+10,`Processing node ${g} with distance ${r[g]}`,!0,{currentNode:g,startNode:t,endNode:i,distances:{...r},visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(800/l);for(let x=0;x<n[g].length;x++)if(n[g][x]>0&&!c.has(x)){const f=r[g]+n[g][x];f<r[x]&&(r[x]=f,d.add(`${g}-${x}`),s(u+15,`Updated distance to node ${x}: ${f}`,!0,{currentNode:g,startNode:t,endNode:i,currentEdge:`${g}-${x}`,distances:{...r},visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(600/l))}}const p=i!==null?`Shortest path from ${t} to ${i}: ${r[i]}`:"Dijkstra completed! All shortest distances calculated";s(0,p,!1,{startNode:t,endNode:i,distances:{...r},visitedNodes:Array.from(o),visitedEdges:Array.from(d)})},Ei=async(n,t,i,s,a,l=1)=>{const r=[],c=new Set,o=new Set,d=new Set;let u=0;s(1,`Starting Prim's algorithm from node ${t}`,!0,{currentNode:t,startNode:t,mstEdges:[...r],totalWeight:u,visitedNodes:Array.from(o),visitedEdges:Array.from(d)}),await ee(1e3/l),c.add(t),o.add(t);let p=0;for(;c.size<n.length;){p++;let g=1/0,j=null;for(const x of c)for(let f=0;f<n[x].length;f++)n[x][f]>0&&!c.has(f)&&n[x][f]<g&&(g=n[x][f],j={from:x,to:f,weight:n[x][f]});if(!j)break;r.push(j),c.add(j.to),o.add(j.to),d.add(`${j.from}-${j.to}`),u+=j.weight,s(p+20,`Added edge ${j.from}-${j.to} with weight ${j.weight}`,!0,{currentNode:j.to,startNode:t,currentEdge:`${j.from}-${j.to}`,mstEdges:[...r],visitedNodes:Array.from(o),visitedEdges:Array.from(d),totalWeight:u}),await ee(1e3/l)}s(0,`Prim's MST completed! Total weight: ${u}`,!1,{startNode:t,mstEdges:[...r],visitedNodes:Array.from(o),visitedEdges:Array.from(d),totalWeight:u})},Mi=async(n,t,i,s,a,l=1)=>{const r=[],c=[],o=new Set,d=new Set,u={},p={};let g=0;for(let S=0;S<n.length;S++)for(let v=S+1;v<n[S].length;v++)n[S][v]>0&&r.push({from:S,to:v,weight:n[S][v]});r.sort((S,v)=>S.weight-v.weight);for(let S=0;S<n.length;S++)u[S]=S,p[S]=0;const j=S=>(u[S]!==S&&(u[S]=j(u[S])),u[S]),x=(S,v)=>{const L=j(S),m=j(v);return L!==m?(p[L]<p[m]?u[L]=m:p[L]>p[m]?u[m]=L:(u[m]=L,p[L]++),!0):!1};s(1,`Starting Kruskal's algorithm with ${r.length} edges`,!0,{edges:r.map(S=>`${S.from}-${S.to}(${S.weight})`),mstEdges:[...c],totalWeight:g,visitedNodes:Array.from(d),visitedEdges:Array.from(o)}),await ee(1e3/l);let f=0;for(const S of r){if(f++,s(f+10,`Considering edge ${S.from}-${S.to} with weight ${S.weight}`,!0,{currentEdge:`${S.from}-${S.to}`,edges:r.map(v=>`${v.from}-${v.to}(${v.weight})`),mstEdges:[...c],visitedNodes:Array.from(d),visitedEdges:Array.from(o)}),await ee(800/l),x(S.from,S.to)){if(c.push(S),o.add(`${S.from}-${S.to}`),d.add(S.from),d.add(S.to),g+=S.weight,s(f+15,`Added edge ${S.from}-${S.to} to MST`,!0,{currentEdge:`${S.from}-${S.to}`,mstEdges:[...c],visitedNodes:Array.from(d),visitedEdges:Array.from(o),totalWeight:g}),c.length===n.length-1)break}else s(f+15,`Edge ${S.from}-${S.to} would create cycle, skipping`,!0,{currentEdge:`${S.from}-${S.to}`,mstEdges:[...c],visitedNodes:Array.from(d),visitedEdges:Array.from(o)});await ee(600/l)}s(0,`Kruskal's MST completed! Total weight: ${g}`,!1,{mstEdges:[...c],visitedNodes:Array.from(d),visitedEdges:Array.from(o),totalWeight:g})},Ii=()=>{const n=[[0,1,1,0,0,0],[1,0,0,1,1,0],[1,0,0,0,0,1],[0,1,0,0,0,1],[0,1,0,0,0,1],[0,0,1,1,1,0]];return e.jsx(he,{algorithmName:"Breadth-First Search (BFS)",algorithmCode:bi,initialGraph:n,onAlgorithmStep:Ai,controlsConfig:Q.BFS,algorithmDescription:Q.BFS.description,timeComplexity:Q.BFS.timeComplexity,spaceComplexity:Q.BFS.spaceComplexity})},Ri=()=>{const n=[[0,1,1,0,0,0],[1,0,0,1,1,0],[1,0,0,0,0,1],[0,1,0,0,0,1],[0,1,0,0,0,1],[0,0,1,1,1,0]];return e.jsx(he,{algorithmName:"Depth-First Search (DFS)",algorithmCode:Ni,initialGraph:n,onAlgorithmStep:Ti,controlsConfig:Q.DFS,algorithmDescription:Q.DFS.description,timeComplexity:Q.DFS.timeComplexity,spaceComplexity:Q.DFS.spaceComplexity})},Vi=()=>{const n=[[0,4,2,0,0,0],[4,0,1,5,0,0],[2,1,0,8,10,0],[0,5,8,0,2,6],[0,0,10,2,0,3],[0,0,0,6,3,0]];return e.jsx(he,{algorithmName:"Dijkstra's Shortest Path",algorithmCode:wi,initialGraph:n,onAlgorithmStep:Li,controlsConfig:Q.DIJKSTRA,algorithmDescription:Q.DIJKSTRA.description,timeComplexity:Q.DIJKSTRA.timeComplexity,spaceComplexity:Q.DIJKSTRA.spaceComplexity})},$i=()=>{const n=[[0,2,0,6,0],[2,0,3,8,5],[0,3,0,0,7],[6,8,0,0,9],[0,5,7,9,0]];return e.jsx(he,{algorithmName:"Prim's Minimum Spanning Tree",algorithmCode:Ci,initialGraph:n,onAlgorithmStep:Ei,controlsConfig:Q.PRIM,algorithmDescription:Q.PRIM.description,timeComplexity:Q.PRIM.timeComplexity,spaceComplexity:Q.PRIM.spaceComplexity})},Fi=()=>{const n=[[0,10,6,5],[10,0,0,15],[6,0,0,4],[5,15,4,0]];return e.jsx(he,{algorithmName:"Kruskal's Minimum Spanning Tree",algorithmCode:ki,initialGraph:n,onAlgorithmStep:Mi,controlsConfig:Q.KRUSKAL,algorithmDescription:Q.KRUSKAL.description,timeComplexity:Q.KRUSKAL.timeComplexity,spaceComplexity:Q.KRUSKAL.spaceComplexity})};function zi(){return h.useEffect(()=>{window.location.href="/pathfinding.html"},[]),e.jsx("div",{children:"Redirecting to Pathfinding Visualizer..."})}function Hi(){return e.jsx(Z,{children:e.jsx(ut,{children:e.jsxs(pt,{children:[e.jsx(W,{path:"/",element:e.jsx(gt,{})}),e.jsx(W,{path:"/sorting",element:e.jsx(Z,{children:e.jsx(qt,{})})}),e.jsx(W,{path:"/stacks-queues",element:e.jsx(Z,{children:e.jsx(Pt,{})})}),e.jsx(W,{path:"/trees",element:e.jsx(Z,{children:e.jsx(_t,{})})}),e.jsx(W,{path:"/trees/bst",element:e.jsx(Z,{children:e.jsx(Wt,{})})}),e.jsx(W,{path:"/trees/heap",element:e.jsx(Z,{children:e.jsx(Zt,{})})}),e.jsx(W,{path:"/trees/avl",element:e.jsx(Z,{children:e.jsx(ri,{})})}),e.jsx(W,{path:"/tree",element:e.jsx(je,{replace:!0,to:"/trees"})}),e.jsx(W,{path:"/pathfinding",element:e.jsx(Z,{children:e.jsx(zi,{})})}),e.jsx(W,{path:"/about",element:e.jsx(At,{})}),e.jsx(W,{path:"/graphs",element:e.jsx(Z,{children:e.jsx(yi,{})})}),e.jsx(W,{path:"/graphs/bfs",element:e.jsx(Z,{children:e.jsx(Ii,{})})}),e.jsx(W,{path:"/graphs/dfs",element:e.jsx(Z,{children:e.jsx(Ri,{})})}),e.jsx(W,{path:"/graphs/dijkstra",element:e.jsx(Z,{children:e.jsx(Vi,{})})}),e.jsx(W,{path:"/graphs/prim",element:e.jsx(Z,{children:e.jsx($i,{})})}),e.jsx(W,{path:"/graphs/kruskal",element:e.jsx(Z,{children:e.jsx(Fi,{})})}),e.jsx(W,{path:"/search",element:e.jsx(Z,{children:e.jsx(gi,{})})}),e.jsx(W,{path:"/pathfinding-visualizer",element:e.jsx(je,{replace:!0,to:"/pathfinding"})}),e.jsx(W,{path:"*",element:e.jsx(je,{replace:!0,to:"/"})})]})})})}mt.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(Hi,{})}));
