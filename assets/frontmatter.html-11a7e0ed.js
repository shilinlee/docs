import{_ as r,H as o,k as c,l as d,I as s,L as l,n,P as a,U as i}from"./framework-559c6e84.js";const u={},h=l("h1",{id:"frontmatter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),n(" Frontmatter")],-1),D=l("h2",{id:"所有页面",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#所有页面","aria-hidden":"true"},"#"),n(" 所有页面")],-1),m=l("p",null,"本章节中的 Frontmatter 会在所有类型的页面中生效。",-1),v=l("h3",{id:"externallinkicon",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#externallinkicon","aria-hidden":"true"},"#"),n(" externalLinkIcon")],-1),y=l("li",null,[l("p",null,[n("类型： "),l("code",null,"boolean")])],-1),_=l("p",null,"详情：",-1),b=l("p",null,"参考：",-1),f=l("h3",{id:"navbar",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#navbar","aria-hidden":"true"},"#"),n(" navbar")],-1),g=l("li",null,[l("p",null,[n("类型： "),l("code",null,"boolean")])],-1),k=l("li",null,[l("p",null,"详情："),l("p",null,"是否在当前页面展示导航栏。"),l("p",null,"如果你在主题配置中禁用了导航栏，那么该 Frontmatter 将不会生效。")],-1),C=l("p",null,"参考：",-1),E=i(`<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass" aria-hidden="true">#</a> pageClass</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>为当前页面添加额外的类名。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">pageClass</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">custom-page-class</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后你可以在 <code>.vuepress/styles/index.scss</code> 文件中为这个页面添加自定义样式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">.theme-container.custom-page-class</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">/* 页面样式 */</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x=i(`<h2 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h2><p>本章节中的 Frontmatter 只会在首页中生效。</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home" aria-hidden="true">#</a> home</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>设定该页面是首页还是普通页面。</p><p>如果你不设置该 Frontmatter 或将其设为 <code>false</code> ，则该页面会是一个 <a href="#%E6%99%AE%E9%80%9A%E9%A1%B5%E9%9D%A2">普通页面</a></p></li><li><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">home</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage" aria-hidden="true">#</a> heroImage</h3>`,5),L=i(`<li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页图片的 URL 。</p></li><li><p>示例：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># Public 文件路径</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/images/hero.png</span></span>
<span class="line"><span style="color:#6A9955;"># URL</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://vuejs.org/images/logo.png</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),A=l("p",null,"参考：",-1),B=l("h3",{id:"heroimagedark",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#heroimagedark","aria-hidden":"true"},"#"),n(" heroImageDark")],-1),z=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),F=l("li",null,[l("p",null,"详情："),l("p",null,"在夜间模式中使用的首页图片的 URL 。"),l("p",null,"如果你想在夜间模式中使用不同的首页图片，就可以使用该配置项。")],-1),N=l("p",null,"参考：",-1),w=l("li",null,[l("a",{href:"#heroimage"},"默认主题 > Frontmatter > heroImage")],-1),I=i('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt" aria-hidden="true">#</a> heroAlt</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页图片的 <code>alt</code> 属性。</p><p>如果不设置，则默认使用 <a href="#heroText">heroText</a> 。</p></li></ul><h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight" aria-hidden="true">#</a> heroHeight</h3>',3),P=l("li",null,[l("p",null,[n("类型： "),l("code",null,"number")])],-1),S=l("li",null,[l("p",null,[n("默认值： "),l("code",null,"280")])],-1),V=l("p",null,"详情：",-1),H=l("p",null,[n("首页图片 "),l("code",null,"<img>"),n(" 标签的 "),l("code",null,"height"),n(" 属性。")],-1),T=l("p",null,"当你的首页图片高度小于默认值时，你可能需要减小该属性。",-1),U={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},M=l("h3",{id:"herotext",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#herotext","aria-hidden":"true"},"#"),n(" heroText")],-1),R=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string | null")])],-1),j=l("p",null,"详情：",-1),G=l("p",null,"首页的大标题。",-1),O=l("p",null,[n("设置为 "),l("code",null,"null"),n(" 来禁用首页大标题。")],-1),q=l("h3",{id:"tagline",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#tagline","aria-hidden":"true"},"#"),n(" tagline")],-1),J=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string | null")])],-1),K=l("p",null,"详情：",-1),Q=l("p",null,"首页的标语。",-1),W=l("p",null,[n("设置为 "),l("code",null,"null"),n(" 来禁用首页标语。")],-1),X=i(`<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> actions</h3><ul><li>类型：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">type</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;primary&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;secondary&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>配置首页按钮。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">actions</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">快速上手</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/zh/guide/getting-started.html</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">primary</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">项目简介</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">secondary</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> features</h3><ul><li>类型：</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>详情：</p><p>配置首页特性列表。</p></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">features</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">简洁至上</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Vue 驱动</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">享受 Vue 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">高性能</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h3><ul><li><p>类型： <code>string</code></p></li><li><p>详情：</p><p>首页的页脚。</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml" aria-hidden="true">#</a> footerHtml</h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>是否允许页脚中使用 HTML 。</p><p>如果设置为 <code>true</code> ，那么 <a href="#footer">footer</a> 会被作为 HTML 代码处理。</p></li></ul><h2 id="普通页面" tabindex="-1"><a class="header-anchor" href="#普通页面" aria-hidden="true">#</a> 普通页面</h2><p>本章节中的 Frontmatter 只会在普通页面中生效。</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3>`,17),Y=l("li",null,[l("p",null,[n("类型： "),l("code",null,"boolean")])],-1),Z=l("li",null,[l("p",null,"详情："),l("p",null,[n("是否在本页面中启用 "),l("em",null,"编辑此页"),n(" 链接。")])],-1),$=l("p",null,"参考：",-1),ll=l("h3",{id:"editlinkpattern",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#editlinkpattern","aria-hidden":"true"},"#"),n(" editLinkPattern")],-1),nl=l("li",null,[l("p",null,[n("类型： "),l("code",null,"string")])],-1),sl=l("li",null,[l("p",null,"详情："),l("p",null,[n("本页面中 "),l("em",null,"编辑此页"),n(" 链接的 Pattern 。")])],-1),el=l("p",null,"参考：",-1),al=l("h3",{id:"lastupdated",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#lastupdated","aria-hidden":"true"},"#"),n(" lastUpdated")],-1),il=l("li",null,[l("p",null,[n("类型： "),l("code",null,"boolean")])],-1),ol=l("li",null,[l("p",null,"详情："),l("p",null,[n("是否在本页面中启用 "),l("em",null,"最近更新时间戳"),n(" 。")])],-1),tl=l("p",null,"参考：",-1),pl=l("h3",{id:"contributors",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),n(" contributors")],-1),rl=l("li",null,[l("p",null,[n("类型： "),l("code",null,"boolean")])],-1),cl=l("li",null,[l("p",null,"详情："),l("p",null,[n("是否在本页面中启用 "),l("em",null,"贡献者列表"),n(" 。")])],-1),dl=l("p",null,"参考：",-1),ul=l("h3",{id:"sidebar",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),n(" sidebar")],-1),hl=l("li",null,[l("p",null,[n("类型： "),l("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),Dl=l("li",null,[l("p",null,"详情："),l("p",null,"配置本页面的侧边栏。")],-1),ml=l("p",null,"参考：",-1),vl=l("h3",{id:"sidebardepth",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#sidebardepth","aria-hidden":"true"},"#"),n(" sidebarDepth")],-1),yl=l("li",null,[l("p",null,[n("类型： "),l("code",null,"number")])],-1),_l=l("li",null,[l("p",null,"详情："),l("p",null,"配置本页面的侧边栏深度。")],-1),bl=l("p",null,"参考：",-1),fl=i(`<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev" aria-hidden="true">#</a> prev</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>上一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>为了手动配置上一页面的链接，你可以将其设置为一个 <code>NavLink</code> 对象或者一个字符串：</p><ul><li><code>NavLink</code> 对象应该有一个 <code>text</code> 字段和一个 <code>link</code> 字段。</li><li>字符串应为目标页面文件的路径。它将会被转换为 <code>NavLink</code> 对象，将页面标题作为 <code>text</code> ，将页面路由路径作为 <code>link</code> 。</li></ul></li><li><p>示例：</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># NavLink</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># NavLink - 外部 URL</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件路径</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 字符串 - 页面文件相对路径</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">../../guide/getting-started.md</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next" aria-hidden="true">#</a> next</h3><ul><li><p>类型： <code>NavLink | string</code></p></li><li><p>详情：</p><p>下一个页面的链接。</p><p>如果你不设置该 Frontmatter ，该链接会自动根据侧边栏配置进行推断。</p><p>类型和 <a href="#prev">prev</a> Frontmatter 相同。</p></li></ul>`,5);function gl(kl,Cl){const t=o("NpmBadge"),e=o("RouterLink"),p=o("ExternalLinkIcon");return c(),d("div",null,[h,s(t,{package:"@vuepress/theme-default"}),D,m,v,l("ul",null,[y,l("li",null,[_,l("p",null,[n("由"),s(e,{to:"/zh/reference/plugin/external-link-icon.html#externallinkicon"},{default:a(()=>[n("@vuepress/plugin-external-link-icon")]),_:1}),n(" 提供。")])]),l("li",null,[b,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#themeplugins-externallinkicon"},{default:a(()=>[n("默认主题 > 配置 > themePlugins.externalLinkIcon")]),_:1})])])])]),f,l("ul",null,[g,k,l("li",null,[C,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#navbar"},{default:a(()=>[n("默认主题 > 配置 > navbar")]),_:1})])])])]),E,l("ul",null,[l("li",null,[n("参考： "),l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/styles.html#style-%E6%96%87%E4%BB%B6"},{default:a(()=>[n("默认主题 > 样式 > Style 文件")]),_:1})])])])]),x,l("ul",null,[L,l("li",null,[A,l("ul",null,[l("li",null,[s(e,{to:"/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:a(()=>[n("指南 > 静态资源 > Public 文件")]),_:1})])])])]),B,l("ul",null,[z,F,l("li",null,[N,l("ul",null,[w,l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#colormode"},{default:a(()=>[n("默认主题 > 配置 > colorMode")]),_:1})])])])]),I,l("ul",null,[P,S,l("li",null,[V,H,T,l("p",null,[n("需要注意的是，首页图片的高度同样受到了 CSS 的约束。设置这个属性主要是为了减少由加载首页图片引起的 "),l("a",U,[n("累积布局偏移 (CLS)"),s(p)]),n(" 。")])])]),M,l("ul",null,[R,l("li",null,[j,G,l("p",null,[n("如果不设置，则默认使用站点 "),s(e,{to:"/zh/reference/config.html#title"},{default:a(()=>[n("title")]),_:1}),n(" 。")]),O])]),q,l("ul",null,[J,l("li",null,[K,Q,l("p",null,[n("如果不设置，则默认使用站点 "),s(e,{to:"/zh/reference/config.html#description"},{default:a(()=>[n("description")]),_:1}),n(" 。")]),W])]),X,l("ul",null,[Y,Z,l("li",null,[$,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#editlink"},{default:a(()=>[n("默认主题 > 配置 > editLink")]),_:1})])])])]),ll,l("ul",null,[nl,sl,l("li",null,[el,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#editlinkpattern"},{default:a(()=>[n("默认主题 > 配置 > editLinkPattern")]),_:1})])])])]),al,l("ul",null,[il,ol,l("li",null,[tl,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#lastupdated"},{default:a(()=>[n("默认主题 > 配置 > lastUpdated")]),_:1})])])])]),pl,l("ul",null,[rl,cl,l("li",null,[dl,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#contributors"},{default:a(()=>[n("默认主题 > 配置 > contributors")]),_:1})])])])]),ul,l("ul",null,[hl,Dl,l("li",null,[ml,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#sidebar"},{default:a(()=>[n("默认主题 > 配置 > sidebar")]),_:1})])])])]),vl,l("ul",null,[yl,_l,l("li",null,[bl,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/default-theme/config.html#sidebardepth"},{default:a(()=>[n("默认主题 > 配置 > sidebarDepth")]),_:1})])])])]),fl])}const xl=r(u,[["render",gl],["__file","frontmatter.html.vue"]]);export{xl as default};