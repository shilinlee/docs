import{c as d,f as t,k as o,l as p,L as g,v as n,_ as l}from"./framework-559c6e84.js";const _=["href","title"],i=["src","alt"],m=d({__name:"NpmBadge",props:{package:{type:String,required:!0},distTag:{type:String,required:!1,default:"next"}},setup(a){const e=a,c=t(()=>`https://www.npmjs.com/package/${e.package}`),s=t(()=>e.distTag?`${e.package}@${e.distTag}`:e.package),r=t(()=>`https://badgen.net/npm/v/${e.package}/${e.distTag}?label=${encodeURIComponent(s.value)}`);return(u,f)=>(o(),p("a",{class:"npm-badge",href:n(c),title:a.package,target:"_blank",rel:"noopener noreferrer"},[g("img",{src:n(r),alt:a.package},null,8,i)],8,_))}});const b=l(m,[["__scopeId","data-v-fc5dc7d9"],["__file","NpmBadge.vue"]]);export{b as default};
