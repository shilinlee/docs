import{_ as t,H as r,k as c,l as D,L as n,n as s,I as a,P as e,U as o}from"./framework-559c6e84.js";const i={},d=n("h1",{id:"客户端配置的使用方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端配置的使用方法","aria-hidden":"true"},"#"),s(" 客户端配置的使用方法")],-1),y=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">pluginOrTheme</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">clientConfigFile:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;./path/to/clientConfig.ts&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),C=n("code",null,"@vuepress/client",-1),u=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">siteData</span><span style="color:#D4D4D4;"> }){},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">(){},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="enhance" tabindex="-1"><a class="header-anchor" href="#enhance" aria-hidden="true">#</a> enhance</h2><p><code>enhance</code> 函数既可以是同步的，也可以是异步的。它接收一个 Context 参数，包含以下属性：</p>`,3),v=n("code",null,"app",-1),m={href:"https://staging-cn.vuejs.org/api/application.html#create-app",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"router",-1),f={href:"https://router.vuejs.org/zh/api/index.html#createrouter",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"siteData",-1),E=n("p",null,[n("code",null,"enhance"),s(" 函数会在客户端应用创建后被调用，你可以对 Vue 应用添加各种能力。")],-1),_=n("h3",{id:"注册-vue-组件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#注册-vue-组件","aria-hidden":"true"},"#"),s(" 注册 Vue 组件")],-1),g={href:"https://staging-cn.vuejs.org/api/application.html#app-component",target:"_blank",rel:"noopener noreferrer"},A=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./MyComponent.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">component</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;MyComponent&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">MyComponent</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3><p>VuePress 会在构建过程中生成一个 SSR 应用，用以对页面进行预渲染。一般而言，如果一段代码在客户端应用 Mount 之前就使用了浏览器或 DOM API ，我们就认为其对 SSR 不友好，即不支持 SSR 。</p>`,3),F=n("code",null,"enhance",-1),k=n("code",null,[s("_"),n("wbr"),s("_VUEPRESS_SSR__")],-1),x=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">async</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">if</span><span style="color:#D4D4D4;"> (!</span><span style="color:#9CDCFE;">_<wbr>_VUEPRESS_SSR__</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">nonSsrFriendlyModule</span><span style="color:#D4D4D4;"> = </span><span style="color:#C586C0;">await</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">import</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;non-ssr-friendly-module&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-router-方法" tabindex="-1"><a class="header-anchor" href="#使用-router-方法" aria-hidden="true">#</a> 使用 Router 方法</h3>`,2),S={href:"https://router.vuejs.org/zh/api/index.html#router-%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"},R=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">enhance</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;"> }) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">beforeEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;before navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">afterEach</span><span style="color:#D4D4D4;">((</span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;after navigation&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>我们不推荐使用 <code>addRoute</code> 方法来添加动态路由，因为这些路由记录 <strong>不会</strong> 在构建模式中被预渲染出来。</p><p>当然，如果你了解了这种用法的缺点，你还是可以这样使用。</p></div><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2>`,3),z=n("code",null,"setup",-1),M={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},V=n("h3",{id:"使用组合式-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用组合式-api","aria-hidden":"true"},"#"),s(" 使用组合式 API")],-1),B=n("code",null,"setup",-1),P={href:"https://staging-cn.vuejs.org/api/composition-api-setup.html",target:"_blank",rel:"noopener noreferrer"},I=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">provide</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">ref</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useRoute</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">useRouter</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 获取当前的路由位置</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">route</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRoute</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 或者 vue-router 实例</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">router</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useRouter</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// 供给一个值，可以被布局、页面和其他组件注入</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">count</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">ref</span><span style="color:#D4D4D4;">(</span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">provide</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;count&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">count</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用不支持-ssr-的功能-1" tabindex="-1"><a class="header-anchor" href="#使用不支持-ssr-的功能-1" aria-hidden="true">#</a> 使用不支持 SSR 的功能</h3>`,2),L=n("code",null,"setup",-1),j=n("code",null,[s("_"),n("wbr"),s("_VUEPRESS_SSR__")],-1),w={href:"https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onmounted",target:"_blank",rel:"noopener noreferrer"},H=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">onMounted</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">onMounted</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 在 mounted 之后使用 DOM API</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">document</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">querySelector</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;#app&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="layouts" tabindex="-1"><a class="header-anchor" href="#layouts" aria-hidden="true">#</a> layouts</h2>`,2),O=n("code",null,"layouts",-1),U=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">MyLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./layouts/MyLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">MyLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rootcomponents" tabindex="-1"><a class="header-anchor" href="#rootcomponents" aria-hidden="true">#</a> rootComponents</h2><p><code>rootComponents</code> 是一个组件数组，它们将会直接被放置在客户端 Vue 应用的根节点下。</p><p>该选项的典型使用方式就是放置一些全局的 UI 组件，比如全局弹窗等：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./components/GlobalPopup.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">rootComponents:</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">GlobalPopup</span><span style="color:#D4D4D4;">],</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function N(G,T){const l=r("RouterLink"),p=r("ExternalLinkIcon");return c(),D("div",null,[d,n("p",null,[s("你可以直接在你的项目中使用 "),a(l,{to:"/zh/guide/configuration.html#%E5%AE%A2%E6%88%B7%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{default:e(()=>[s("客户端配置文件")]),_:1}),s(" 。或者，在你的插件或者主题中，使用 "),a(l,{to:"/zh/reference/plugin-api.html#clientconfigfile"},{default:e(()=>[s("clientConfigFile")]),_:1}),s(" Hook 来指定客户端配置文件的路径：")]),y,n("p",null,[s("在客户端配置文件中，"),C,s(" 包提供了一个 "),a(l,{to:"/zh/reference/client-api.html#defineclientconfig"},{default:e(()=>[s("defineClientConfig")]),_:1}),s(" 函数来帮助你定义客户端配置：")]),u,n("ul",null,[n("li",null,[v,s(" 是由 "),n("a",m,[s("createApp"),a(p)]),s(" 创建的 Vue 应用实例。")]),n("li",null,[h,s(" 是由 "),n("a",f,[s("createRouter"),a(p)]),s(" 创建的路由实例。")]),n("li",null,[b,s(" 是一个根据用户配置生成的 Ref 对象，包含 "),a(l,{to:"/zh/reference/config.html#base"},{default:e(()=>[s("base")]),_:1}),s(", "),a(l,{to:"/zh/reference/config.html#lang"},{default:e(()=>[s("lang")]),_:1}),s(", "),a(l,{to:"/zh/reference/config.html#title"},{default:e(()=>[s("title")]),_:1}),s(", "),a(l,{to:"/zh/reference/config.html#description"},{default:e(()=>[s("description")]),_:1}),s(", "),a(l,{to:"/zh/reference/config.html#head"},{default:e(()=>[s("head")]),_:1}),s(" 和 "),a(l,{to:"/zh/reference/config.html#locales"},{default:e(()=>[s("locales")]),_:1}),s("。")])]),E,_,n("p",null,[s("你可以通过 "),n("a",g,[s("app.component"),a(p)]),s(" 方法来注册 Vue 全局组件：")]),A,n("p",null,[s("我们已经提供了一个 "),a(l,{to:"/zh/reference/components.html#clientonly"},{default:e(()=>[s("ClientOnly")]),_:1}),s(" 组件来包裹不支持 SSR 的内容。")]),n("p",null,[s("在 "),F,s(" 函数中，你可以使用 "),a(l,{to:"/zh/reference/client-api.html#ssr"},{default:e(()=>[k]),_:1}),s(" 标记来处理这种情况。")]),x,n("p",null,[s("你可以使用 vue-router 提供的 "),n("a",S,[s("Router 方法"),a(p)]),s(" 。例如，添加导航钩子：")]),R,n("p",null,[z,s(" 函数会在客户端 Vue 应用的 "),n("a",M,[s("setup"),a(p)]),s(" Hook 中被调用。")]),V,n("p",null,[s("你可以把 "),B,s(" 函数当作根组件的 "),n("a",P,[s("setup"),a(p)]),s(" Hook 中的一部分。因此，所有的组合式 API 都可以在这里使用。")]),I,n("p",null,[s("在 "),L,s(" 函数中，"),a(l,{to:"/zh/reference/client-api.html#ssr"},{default:e(()=>[j]),_:1}),s(" 标记同样可用。")]),n("p",null,[s("使用不支持 SSR 的功能的另一种方式就是将他们放在 "),n("a",w,[s("onMounted"),a(p)]),s(" Hook 中：")]),H,n("p",null,[O,s(" 配置项用于设置布局组件。你在此处注册布局后，用户就可以通过 "),a(l,{to:"/zh/reference/frontmatter.html#layout"},{default:e(()=>[s("layout")]),_:1}),s(" frontmatter 来使用它们。")]),U])}const J=t(i,[["render",N],["__file","usage-of-client-config.html.vue"]]);export{J as default};
