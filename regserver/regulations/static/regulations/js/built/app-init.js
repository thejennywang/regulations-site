define(["jquery","underscore","backbone","main-view","reg-model","definition-view","sub-head-view","drawer-view","dispatch","sidebar-view","konami","header-view","analytics-handler","regs-helpers","./regs-router","./reg-view","queryparams"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v){return{getTree:function(t){var n=this;t.children().each(function(){var t=e(this),r=t.attr("id"),s=t.find("ol"),o;i.set({text:r,content:t.html()}),typeof (r,s)!="undefined"&&(o=s?e(s):t,n.getTree(o))})},bindEvents:function(){new l(function(){document.getElementById("menu-link").className+=" hamburgerify",e(".inline-interpretation .expand-button").addClass("carrotify"),e("#about-tool").html('Made with <span style="color: red"><3</span> by:'),e("#about-reg").html("Find our brilliant attorneys at:")})},init:function(){var t,n,s=e("#menu").data("reg-id"),l=e(".main-content section[data-base-version]"),m=l.data("base-version");a.set("reg",s),window.Regs={},window.Regs.subhead=new o,window.Regs.drawer=new u,window.Regs.sidebar=new f,window.Regs.mainView=new r,window.Regs.analytics=new h,window.Regs.mainHeader=new c,typeof l!="undefined"&&(t=l.attr("id"),a.set("section",t),i.set(t,l.html()),a.setContentView(new v)),typeof m!="undefined"&&a.set("version",m),n=p.findURLPrefix(),n&&a.set("urlprefix",n),d.start(),this.bindEvents()}}});