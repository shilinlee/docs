import{_ as p,H as a,k as t,l as i,I as n,L as s,n as e,U as r}from"./framework-559c6e84.js";const c={},d=s("h1",{id:"vite",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),e(" Vite")],-1),u={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},D={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},v=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">i</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">-D</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">@vuepress/bundler-vite@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>Reference of vite bundler options:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">viteBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">viteOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vuePluginOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>`,5),h=s("li",null,[s("p",null,"Details:"),s("p",null,"Accepts all options of Vite.")],-1),y=s("p",null,"Also see:",-1),_={href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},m=s("h3",{id:"vuepluginoptions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepluginoptions","aria-hidden":"true"},"#"),e(" vuePluginOptions")],-1),f=s("p",null,"Details:",-1),b={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},C=s("p",null,"Also see:",-1),g={href:"https://vitejs.dev/plugins/#vitejs-plugin-vue",target:"_blank",rel:"noopener noreferrer"};function k(E,x){const o=a("NpmBadge"),l=a("ExternalLinkIcon");return t(),i("div",null,[d,n(o,{package:"@vuepress/bundler-vite"}),s("p",null,[e("Vite bundler is provided by "),s("a",u,[e("@vuepress/bundler-vite"),n(l)]),e(" package. It is a dependency of the "),s("a",D,[e("vuepress"),n(l)]),e(" package, and you can also install it separately.")]),v,s("ul",null,[h,s("li",null,[y,s("ul",null,[s("li",null,[s("a",_,[e("Vite > Config"),n(l)])])])])]),m,s("ul",null,[s("li",null,[f,s("p",null,[e("Accepts all options of "),s("a",b,[e("@vitejs/plugin-vue"),n(l)]),e(".")])]),s("li",null,[C,s("ul",null,[s("li",null,[s("a",g,[e("Vite > Plugins > Official Plugins"),n(l)])])])])])])}const V=p(c,[["render",k],["__file","vite.html.vue"]]);export{V as default};
