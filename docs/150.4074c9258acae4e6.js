"use strict";(self.webpackChunklifestartsat70=self.webpackChunklifestartsat70||[]).push([[150],{150:(N,c,r)=>{r.r(c),r.d(c,{HomeModule:()=>T});var u=r(6019),f=r(4017),e=r(1514);class l{constructor(i,n,o=null,s=null,I="herma"){this.title=i,this.question=n,this.left=o,this.right=s,this.photo=I,this.parent=null,o&&(o.parent=this),s&&(s.parent=this)}}let m=(()=>{class t{constructor(){this.tree=new l("Het leven begint","Wat gaan we doen vandaag?",new l("Iets actiefs","Wil je dat binnen of buiten?",new l("Binnen","Wil je dat uit of thuis doen?",new l("Uit","Ga lekker uit eten met Gap en Wolfie!",null,null,"uit-eten-wolfie"),new l("Thuis","Lekker gezellig of lekker uitdagend?",new l("Gezellig","Ga lekker knuffelen met Douwe op de bank",null,null,"knuffelen-douwe"),new l("Uitdagend","Gaaf racen op de racebaan met de boys!",null,null,"racebaan-wolfie"))),new l("Buiten","Wil je verdieping of verkenning?",new l("Verdieping","Dierenliefde of opfrisser?",new l("Dierenliefde","Ren met Wolfie achter de schaapjes aan!",null,null,"spelen-met-dieren"),new l("Opfrisser","Ga lekker uitwaaien op het strand!",null,null,"uitwaaien")),new l("Verkenning","Rustig aan of energiek?",new l("Rustig aan","Ga lekker wandelen met je familie",null,null,"wandelen-familie"),new l("Energiek","Ga flink rennen met Gap",null,null,"rennen-gap")))),new l("Iets creatiefs","Met Wolfie of met iemand anders?",new l("Wolfie","Family time of quality time?",new l("Family time","Er op uit of fantasierijk?",new l("Er op uit","Ga lekker naar de dierentuin!",null,null,"dierentuin"),new l("Fantasierijk","Verkleed je en doe eens anders!",null,null,"verkleedpartij")),new l("Quality time","Door de maag of voor de geest",new l("Door de maag","Geniet van culinair genot!",null,null,"ijsje-eten"),new l("Voor de geest","Bouw een paleis van blokken",null,null,"blokken"))),new l("De rest","Lekker ravotten of lekker creatief?",new l("Lekker ravotten","Op het strand of in de speeltuin?",new l("Op het strand","Losgaan in de speeltuin!",null,null,"spelen-speeltuin"),new l("In de speeltuin","Bouw een kasteel op het strand!",null,null,"spelen-strand")),new l("Creatief","Iets bouwen of muzikaal aan de slag?",new l("Iets bouwen","Bouw een wereld van Duplo!",null,null,"duploen-familie"),new l("Muzikaal","Muzikaal genieten met Gap!",null,null,"concert-gap")))))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function g(t,i){if(1&t){const n=e.EpF();e.O4$(),e.TgZ(0,"rect",6),e.NdJ("click",function(){return e.CHM(n),e.oxw().selectLeft()}),e.qZA()}}function w(t,i){if(1&t){const n=e.EpF();e.O4$(),e.TgZ(0,"rect",7),e.NdJ("click",function(){return e.CHM(n),e.oxw().selectRight()}),e.qZA()}if(2&t){const n=e.oxw();e.uIk("x",n.d.midPoint.x)}}function _(t,i){if(1&t&&(e.O4$(),e._UZ(0,"line")),2&t){const n=e.oxw();e.uIk("x1",n.d.midPoint.x)("x2",n.d.midPoint.x)("y1",0)("y2",n.d.nodeStart.y)}}function x(t,i){if(1&t&&(e.O4$(),e._UZ(0,"line")),2&t){const n=e.oxw();e.uIk("x1",-n.d.midPoint.x)("x2",n.d.nodeStart.x)("y1",n.d.midPoint.y)("y2",n.d.midPoint.y)}}function k(t,i){if(1&t&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.uIk("x",n.d.leftText.x)("y",n.d.leftText.y),e.xp6(1),e.Oqu(null==n.selected||null==n.selected.left?null:n.selected.left.title)}}function v(t,i){if(1&t&&(e.O4$(),e._UZ(0,"line")),2&t){const n=e.oxw();e.uIk("x1",n.d.nodeEnd.x)("x2",n.d.windowWidth+n.d.midPoint.x)("y1",n.d.midPoint.y)("y2",n.d.midPoint.y)}}function y(t,i){if(1&t&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&t){const n=e.oxw();e.uIk("x",n.d.rightText.x)("y",n.d.rightText.y),e.xp6(1),e.Oqu(null==n.selected||null==n.selected.right?null:n.selected.right.title)}}class d{constructor(i,n){this.x=i,this.y=n}offset(i,n){return new d(this.x+i,this.y+n)}boxOffSet(i=320){return this.offset(i,i/2)}}class p{constructor(i,n){this.windowWidth=i,this.windowHeight=n,this.midPoint=new d(i/2,n/2),this.nodeStart=this.midPoint.boxOffSet(-160),this.nodeEnd=this.nodeStart.boxOffSet(),this.textStart=this.nodeStart.x+60;let o=this.midPoint.y-15;this.leftText=new d(this.nodeStart.x-160,o),this.rightText=new d(this.nodeEnd.x+60,o)}}let C=(()=>{class t{constructor(){this.selected=null,this.d=new p(window.innerWidth,window.innerHeight)}handleResize(){this.d=new p(window.innerWidth,window.innerHeight)}selectLeft(){var n;this.selected=null===(n=this.selected)||void 0===n?void 0:n.left}selectRight(){var n;this.selected=null===(n=this.selected)||void 0===n?void 0:n.right}graphStyle(){var n;return{"background-image":"url(/assets/photos/"+(null===(n=this.selected)||void 0===n?void 0:n.photo)+".jpg)"}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["graph-node"]],hostBindings:function(n,o){1&n&&e.NdJ("resize",function(){return o.handleResize()},!1,e.Jf7)},inputs:{selected:"selected"},decls:13,vars:22,consts:[["id","graph","width","100%","height","100%","xmlns","http://www.w3.org/2000/svg"],["class","hover","x","0","y","0",3,"click",4,"ngIf"],["class","hover","y","0",3,"click",4,"ngIf"],["id","node","rx","30","ry","30"],["id","question"],[4,"ngIf"],["x","0","y","0",1,"hover",3,"click"],["y","0",1,"hover",3,"click"]],template:function(n,o){1&n&&(e.O4$(),e.TgZ(0,"svg",0),e.YNc(1,g,1,0,"rect",1),e.YNc(2,w,1,1,"rect",2),e._UZ(3,"rect",3),e.TgZ(4,"text",4),e._uU(5),e.qZA(),e.YNc(6,_,1,4,"line",5),e.YNc(7,x,1,4,"line",5),e.YNc(8,k,2,3,"text",5),e.YNc(9,v,1,4,"line",5),e.YNc(10,y,2,3,"text",5),e._UZ(11,"line"),e._UZ(12,"line"),e.qZA()),2&n&&(e.Akn(o.graphStyle()),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.right),e.xp6(1),e.uIk("x",o.d.nodeStart.x)("y",o.d.nodeStart.y),e.xp6(1),e.uIk("x",o.d.textStart)("y",o.d.midPoint.y),e.xp6(1),e.Oqu(null==o.selected?null:o.selected.question),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.parent),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.right),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.right),e.xp6(1),e.uIk("x1",-o.d.midPoint.x)("x2",-o.d.midPoint.x)("y1",o.d.midPoint.y)("y2",o.d.windowWidth+o.d.midPoint.y),e.xp6(1),e.uIk("x1",o.d.windowWidth+o.d.midPoint.x)("x2",o.d.windowWidth+o.d.midPoint.x)("y1",o.d.midPoint.y)("y2",o.d.windowWidth+o.d.midPoint.y))},directives:[u.O5],styles:["svg[_ngcontent-%COMP%]{background-size:cover}text[_ngcontent-%COMP%]{fill:#fff;stroke:#fff}rect[_ngcontent-%COMP%], line[_ngcontent-%COMP%]{stroke:var(--text-color);transform:translate(0)}rect[_ngcontent-%COMP%], line[_ngcontent-%COMP%]{stroke-width:4px}.hover[_ngcontent-%COMP%]{stroke-width:0;height:100%;width:50%;fill:transparent}.hover[_ngcontent-%COMP%]:hover{fill:var(--transparent-highlight);cursor:pointer}#node[_ngcontent-%COMP%]{width:320px;height:160px;fill:#fff}#question[_ngcontent-%COMP%]{fill:var(--text-color);stroke:var(--text-color)}@keyframes goLeft{0%{transform:translate(0)}50%{transform:translate(100%)}to{transform:translate(100%,-100%)}}@keyframes goRight{0%{transform:translate(0)}50%{transform:translate(-100%)}to{transform:translate(-100%,-100%)}}"]}),t})();const P=[{path:"",component:(()=>{class t{constructor(n){this.treeService=n,this.homeLogo="/assets/icons/home-icon.png"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:2,consts:[[3,"selected"],["id","home","href",""],["height","100","width","100",3,"src"]],template:function(n,o){1&n&&(e._UZ(0,"graph-node",0),e.TgZ(1,"a",1),e._UZ(2,"img",2),e.qZA()),2&n&&(e.Q6J("selected",o.treeService.tree),e.xp6(2),e.Q6J("src",o.homeLogo,e.LSH))},directives:[C],styles:["a#home[_ngcontent-%COMP%]{background-color:#fff;position:absolute;left:calc(50% - 50px);top:calc(100% - 120px);border-radius:50px;height:100px}a#home[_ngcontent-%COMP%]:hover{background-color:var(--opaque-highlight);box-shadow:var(--transparent-highlight) 5px 5px 3px}a#home[_ngcontent-%COMP%]:active{box-shadow:none}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.Bz.forChild(P)],f.Bz]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[u.ez,O]]}),t})()}}]);