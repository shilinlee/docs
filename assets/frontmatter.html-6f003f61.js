import{_ as r,H as t,k as d,l as c,I as n,L as e,n as l,P as a,U as o}from"./framework-559c6e84.js";const u={},h=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),l(" Frontmatter")],-1),y=e("h2",{id:"date",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),l(" date")],-1),D=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),m=e("p",null,"Details:",-1),f=e("p",null,"Created date for the page.",-1),g=e("code",null,"yyyy-MM-dd",-1),v={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},_=e("p",null,"Also see:",-1),b=e("h2",{id:"description",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),l(" description")],-1),C=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),k=e("li",null,[e("p",null,"Details:"),e("p",null,"Description for the page."),e("p",null,[l("This will override the "),e("code",null,"description"),l(" option in your site config.")])],-1),E=e("p",null,"Also see:",-1),x=o(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>Type: <code>HeadConfig[]</code></p></li><li><p>Details:</p><p>Extra tags in <code>&lt;head&gt;</code> tag for the page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yaml array syntax</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [</span><span style="color:#CE9178;">meta</span><span style="color:#D4D4D4;">, { </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span><span style="color:#D4D4D4;"> , </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">square brackets syntax</span><span style="color:#D4D4D4;"> }]</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rendered as:</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yaml array syntax&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;square brackets syntax&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=e("h2",{id:"lang",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),l(" lang")],-1),T=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),w=e("li",null,[e("p",null,"Details:"),e("p",null,"Language for the page."),e("p",null,[l("This will override the "),e("code",null,"lang"),l(" option in your site config.")])],-1),A=e("p",null,"Also see:",-1),M=o(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Layout for the page.</p><p>Layouts are provided by theme. If you don&#39;t specify this frontmatter, the default layout will be used. You should refer to the theme&#39;s own documentation to find what layouts it provides.</p><p>If the theme layouts cannot meet your needs, you can use a custom layout component.</p></li><li><p>Example:</p></li></ul><p>Register a layout component in <code>.vuepress/client.ts</code> file:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./CustomLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Set custom layout in frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">layout</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">CustomLayout</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h2>`,7),F=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),L=e("li",null,[e("p",null,"Details:"),e("p",null,"Permalink for the page."),e("p",null,"This will override the default route path that determined by the file path of the page.")],-1),I=e("p",null,"Also see:",-1),N=e("li",null,[e("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),q=o(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>Type: <code>string | null</code></p></li><li><p>Details:</p><p>Pattern to generate permalink for the page.</p><p>This will override the <code>permalinkPattern</code> option in your site config.</p><p>This won&#39;t take effect if the <code>permalink</code> frontmatter has been set.</p></li><li><p>Usage:</p><table><thead><tr><th>Pattern</th><th>Description</th></tr></thead><tbody><tr><td><code>:year</code></td><td>Year part of created date</td></tr><tr><td><code>:month</code></td><td>Month part of created date</td></tr><tr><td><code>:day</code></td><td>Day part of created date</td></tr><tr><td><code>:slug</code></td><td>Slug of page filename</td></tr><tr><td><code>:raw</code></td><td>Raw route path</td></tr></tbody></table><p>The <code>:year</code>, <code>:month</code> and <code>:day</code> patterns are resolved according to the following priority:</p><ul><li>The <code>date</code> frontmatter.</li><li>The filename that matches the date pattern <code>yyyy-MM-dd-foobar.md</code> or <code>yyyy-MM-foobar.md</code>.</li><li>The dirname that matches the date pattern <code>yyyy/MM/dd/foobar.md</code> or <code>yyyy/MM/foobar.md</code>.</li><li>Fallback to <code>0000-00-00</code>.</li></ul></li><li><p>Example 1:</p><p>The page filename is <code>foo-bar.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">date</span><span style="color:#D4D4D4;">: 2021-01-03</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/foo-bar.html</code>.</p><ul><li><p>Example 2:</p><p>The page filename is <code>2021-01-03-bar-baz.md</code>.</p><p>The page frontmatter is:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then the permalink of the page would be <code>2021/01/03/bar-baz.html</code>.</p>`,7),R=e("li",null,[e("a",{href:"#date"},"Frontmatter > date")],-1),B=e("li",null,[e("a",{href:"#permalink"},"Frontmatter > permalink")],-1),V=e("h2",{id:"routemeta",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#routemeta","aria-hidden":"true"},"#"),l(" routeMeta")],-1),Y=e("li",null,[e("p",null,[l("Type: "),e("code",null,"Record<string, unknown>")])],-1),S=e("li",null,[e("p",null,"Details:"),e("p",null,"Custom data to be attached to the page route.")],-1),z=e("p",null,"Also see:",-1),H=e("h2",{id:"title",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#"),l(" title")],-1),U=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),G=e("li",null,[e("p",null,"Details:"),e("p",null,"Title for the page."),e("p",null,[l("If you don't specify "),e("code",null,"title"),l(" in frontmatter, content of the first level-one header (i.e. "),e("code",null,"# title"),l(") will be used as the title.")])],-1),j=e("p",null,"Also see:",-1);function J(K,O){const p=t("NpmBadge"),i=t("ExternalLinkIcon"),s=t("RouterLink");return d(),c("div",null,[h,n(p,{package:"@vuepress/client"}),n(p,{package:"@vuepress/markdown"}),y,e("ul",null,[D,e("li",null,[m,f,e("p",null,[l("You should specify the date in the form of "),g,l(", or follow the "),e("a",v,[l("YAML Timestamp Type"),n(i)]),l(".")])]),e("li",null,[_,e("ul",null,[e("li",null,[n(s,{to:"/reference/node-api.html#date"},{default:a(()=>[l("Node API > Page Properties > date")]),_:1})])])])]),b,e("ul",null,[C,k,e("li",null,[E,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#description"},{default:a(()=>[l("Config > description")]),_:1})])])])]),x,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#head"},{default:a(()=>[l("Config > head")]),_:1})])])])]),P,e("ul",null,[T,w,e("li",null,[A,e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#lang"},{default:a(()=>[l("Config > lang")]),_:1})]),e("li",null,[n(s,{to:"/reference/node-api.html#lang"},{default:a(()=>[l("Node API > Page Properties > lang")]),_:1})])])])]),M,e("ul",null,[F,L,e("li",null,[I,e("ul",null,[N,e("li",null,[n(s,{to:"/guide/page.html#routing"},{default:a(()=>[l("Guide > Page > Routing")]),_:1})]),e("li",null,[n(s,{to:"/reference/node-api.html#permalink"},{default:a(()=>[l("Node API > Page Properties > permalink")]),_:1})])])])]),q,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[n(s,{to:"/reference/config.html#permalinkpattern"},{default:a(()=>[l("Config > permalinkPattern")]),_:1})]),R,B,e("li",null,[n(s,{to:"/reference/node-api.html#permalink"},{default:a(()=>[l("Node API > Page Properties > permalink")]),_:1})])])])]),V,e("ul",null,[Y,S,e("li",null,[z,e("ul",null,[e("li",null,[n(s,{to:"/reference/node-api.html#routeMeta"},{default:a(()=>[l("Node API > Page Properties > routeMeta")]),_:1})])])])]),H,e("ul",null,[U,G,e("li",null,[j,e("ul",null,[e("li",null,[n(s,{to:"/reference/node-api.html#title"},{default:a(()=>[l("Node API > Page Properties > title")]),_:1})])])])])])}const W=r(u,[["render",J],["__file","frontmatter.html.vue"]]);export{W as default};
