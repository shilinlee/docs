import{_ as i,H as p,k as c,l as r,L as s,n,I as l,P as t,U as a}from"./framework-559c6e84.js";const d={},D=s("h1",{id:"deployment",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#deployment","aria-hidden":"true"},"#"),n(" Deployment")],-1),u=s("p",null,"The following guides are based on some shared assumptions:",-1),y=s("li",null,[n("You are placing your Markdown source files inside the "),s("code",null,"docs"),n(" directory of your project;")],-1),v=s("li",null,[n("You are using the default build output location ("),s("code",null,".vuepress/dist"),n(");")],-1),m={href:"https://pnpm.io",target:"_blank",rel:"noopener noreferrer"},h=s("li",null,[n("VuePress is installed as a local dependency in your project, and you have setup the following script in "),s("code",null,"package.json"),n(":")],-1),b=a(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-pages" tabindex="-1"><a class="header-anchor" href="#github-pages" aria-hidden="true">#</a> GitHub Pages</h2>`,2),g=a("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/</code>, you can omit this step as <code>base</code> defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),_={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,[n("Create "),s("code",null,".github/workflows/docs.yml"),n(" to set up the workflow.")],-1),C=a(`<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">on</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">push</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">branches</span><span style="color:#D4D4D4;">: [</span><span style="color:#CE9178;">main</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment manually</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">workflow_dispatch</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">jobs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">docs</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">runs-on</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">steps</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># fetch all commits to get last updated time or other git log info</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">fetch-depth</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># choose pnpm version to use</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">version</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">7</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># install deps with pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">run_install</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Setup Node.js</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># choose node.js version to use</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">node-version</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">18</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># cache deps for pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># run build script</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Build VuePress site</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">run</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">pnpm docs:build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># please check out the docs of the workflow for more details</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;"># @see https://github.com/crazy-max/ghaction-github-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">uses</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">crazy-max/ghaction-github-pages@v2</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">with</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy to gh-pages branch</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">target_branch</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">gh-pages</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># deploy the default output dir of VuePress</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">build_dir</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">docs/.vuepress/dist</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#569CD6;">env</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;"># @see https://docs.github.com/en/actions/reference/authentication-in-a-workflow#about-the-github_token-secret</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#569CD6;">GITHUB_TOKEN</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">\${{ secrets.GITHUB_TOKEN }}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),E={class:"custom-container tip"},k=s("p",{class:"custom-container-title"},"TIP",-1),w={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},q=s("h2",{id:"gitlab-pages",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#gitlab-pages","aria-hidden":"true"},"#"),n(" GitLab Pages")],-1),A=a("<p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/</code>, you can omit <code>base</code> as it defaults to <code>&quot;/&quot;</code>.</p><p>If you are deploying to <code>https://&lt;USERNAME&gt;.gitlab.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://gitlab.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&quot;/&lt;REPO&gt;/&quot;</code>.</p>",2),x=s("code",null,".gitlab-ci.yml",-1),j={href:"https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/",target:"_blank",rel:"noopener noreferrer"},P=a(`<details class="custom-container details"><summary>Click to expand sample config</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;"># choose a docker image to use</span></span>
<span class="line"><span style="color:#569CD6;">image</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">node:18-buster</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">pages</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># trigger deployment on every push to main branch</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">only</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># cache node_modules</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">cache</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">key</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">files</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">        - </span><span style="color:#CE9178;">pnpm-lock.yaml</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">.pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># Install pnpm</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">before_script</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm@7</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm config set store-dir .pnpm-store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;"># install dependencies and run build script</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">script</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm i --frozen-lockfile</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#CE9178;">pnpm docs:build --dest public</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#569CD6;">artifacts</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">paths</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">      - </span><span style="color:#CE9178;">public</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1),I={class:"custom-container tip"},R=s("p",{class:"custom-container-title"},"TIP",-1),N={href:"https://docs.gitlab.com/ce/user/project/pages/#getting-started",target:"_blank",rel:"noopener noreferrer"},O=s("h2",{id:"google-firebase",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#google-firebase","aria-hidden":"true"},"#"),n(" Google Firebase")],-1),H={href:"https://www.npmjs.com/package/firebase-tools",target:"_blank",rel:"noopener noreferrer"},S=s("li",null,[s("p",null,[n("Create "),s("code",null,"firebase.json"),n(" and "),s("code",null,".firebaserc"),n(" at the root of your project with the following content:")])],-1),G=a(`<p><code>firebase.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;hosting&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;public&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;ignore&quot;</span><span style="color:#D4D4D4;">: []</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>.firebaserc</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;projects&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;default&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;&lt;YOUR_FIREBASE_ID&gt;&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>After running <code>pnpm docs:build</code>, deploy using the command <code>firebase deploy</code>.</li></ol>`,5),T={class:"custom-container tip"},F=s("p",{class:"custom-container-title"},"TIP",-1),L={href:"https://firebase.google.com/docs/cli",target:"_blank",rel:"noopener noreferrer"},U=s("h2",{id:"heroku",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#heroku","aria-hidden":"true"},"#"),n(" Heroku")],-1),B={href:"https://devcenter.heroku.com/articles/heroku-cli",target:"_blank",rel:"noopener noreferrer"},M={href:"https://signup.heroku.com",target:"_blank",rel:"noopener noreferrer"},V=s("li",null,[s("p",null,[n("Run "),s("code",null,"heroku login"),n(" and fill in your Heroku credentials:")])],-1),Y=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">heroku </span><span style="color:#CE9178;">login</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>Create a file called <code>static.json</code> in the root of your project with the below content:</li></ol><p><code>static.json</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki dark-plus" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;root&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),z={href:"https://github.com/heroku/heroku-buildpack-static",target:"_blank",rel:"noopener noreferrer"},K=s("h2",{id:"layer0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#layer0","aria-hidden":"true"},"#"),n(" Layer0")],-1),W={href:"https://docs.layer0.co/guides/vuepress",target:"_blank",rel:"noopener noreferrer"},$=s("h2",{id:"netlify",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#netlify","aria-hidden":"true"},"#"),n(" Netlify")],-1),J={href:"https://netlify.com",target:"_blank",rel:"noopener noreferrer"},Q=s("ul",null,[s("li",null,[s("strong",null,"Build Command:"),n(),s("code",null,"pnpm docs:build")]),s("li",null,[s("strong",null,"Publish directory:"),n(),s("code",null,"docs/.vuepress/dist")])],-1),X={href:"https://docs.netlify.com/configure-builds/environment-variables",target:"_blank",rel:"noopener noreferrer"},Z=s("ul",null,[s("li",null,[s("code",null,"NODE_VERSION"),n(": 14")])],-1),ss=s("li",null,[s("p",null,"Hit the deploy button.")],-1),ns=s("h2",{id:"vercel",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),n(" Vercel")],-1),ls={href:"https://vercel.com",target:"_blank",rel:"noopener noreferrer"},es=s("ul",null,[s("li",null,[s("strong",null,"FRAMEWORK PRESET:"),n(),s("code",null,"Other")]),s("li",null,[s("strong",null,"BUILD COMMAND:"),n(),s("code",null,"pnpm docs:build")]),s("li",null,[s("strong",null,"OUTPUT DIRECTORY:"),n(),s("code",null,"docs/.vuepress/dist")])],-1),as=s("li",null,[s("p",null,"Hit the deploy button.")],-1);function os(ps,ts){const e=p("ExternalLinkIcon"),o=p("RouterLink");return c(),r("div",null,[D,u,s("ul",null,[y,v,s("li",null,[n("You are using as "),s("a",m,[n("pnpm"),l(e)]),n(" package manager, while npm and yarn are also supported;")]),h]),b,s("ol",null,[s("li",null,[s("p",null,[n("Set the correct "),l(o,{to:"/reference/config.html#base"},{default:t(()=>[n("base")]),_:1}),n(" config.")]),g]),s("li",null,[s("p",null,[n("Choose your preferred CI tools. Here we take "),s("a",_,[n("GitHub Actions"),l(e)]),n(" as an example.")]),f])]),C,s("div",E,[k,s("p",null,[n("Please refer to "),s("a",w,[n("GitHub Pages official guide"),l(e)]),n(" for more details.")])]),q,s("ol",null,[s("li",null,[s("p",null,[n("Set the correct "),l(o,{to:"/reference/config.html#base"},{default:t(()=>[n("base")]),_:1}),n(" config.")]),A]),s("li",null,[s("p",null,[n("Create "),x,n(" to set up "),s("a",j,[n("GitLab CI"),l(e)]),n(" workflow.")])])]),P,s("div",I,[R,s("p",null,[n("Please refer to "),s("a",N,[n("GitLab Pages official guide"),l(e)]),n(" for more details.")])]),O,s("ol",null,[s("li",null,[s("p",null,[n("Make sure you have "),s("a",H,[n("firebase-tools"),l(e)]),n(" installed.")])]),S]),G,s("div",T,[F,s("p",null,[n("Please refer to "),s("a",L,[n("Firebase CLI official guide"),l(e)]),n(" for more details.")])]),U,s("ol",null,[s("li",null,[s("p",null,[n("Install "),s("a",B,[n("Heroku CLI"),l(e)]),n(".")])]),s("li",null,[s("p",null,[n("Create a Heroku account by "),s("a",M,[n("signing up"),l(e)]),n(".")])]),V]),Y,s("p",null,[n("This is the configuration of your site; read more at "),s("a",z,[n("heroku-buildpack-static"),l(e)]),n(".")]),K,s("p",null,[n("See "),s("a",W,[n("Layer0 Documentation > Framework Guides > VuePress"),l(e)]),n(".")]),$,s("ol",null,[s("li",null,[s("p",null,[n("On "),s("a",J,[n("Netlify"),l(e)]),n(", set up a new project from GitHub with the following settings:")]),Q]),s("li",null,[s("p",null,[n("Set "),s("a",X,[n("Environment variables"),l(e)]),n(" to choose node version:")]),Z]),ss]),ns,s("ol",null,[s("li",null,[s("p",null,[n("Go to "),s("a",ls,[n("Vercel"),l(e)]),n(", set up a new project from GitHub with the following settings:")]),es]),as])])}const cs=i(d,[["render",os],["__file","deployment.html.vue"]]);export{cs as default};
