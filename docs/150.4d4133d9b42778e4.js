"use strict";(self.webpackChunklifestartsat70=self.webpackChunklifestartsat70||[]).push([[150],{150:(k,m,l)=>{l.r(m),l.d(m,{HomeModule:()=>O});var f=l(6019),h=l(4017),e=l(1514);class c{constructor(i,t,o=null,s=null){this.title=i,this.question=t,this.left=o,this.right=s,this.parent=null,o&&(o.parent=this),s&&(s.parent=this)}}let a=(()=>{class n{constructor(){this.tree=new c("Het leven begint","Wat gaan we doen vandaag?",new c("Iets actiefs","Wil je dat sociaal of mindful?",new c("Sociaal","Ga met Bart of Lotte bootcampen!"),new c("Mindful","Doe een Yoga sessie met Adrien!")),new c("Iets creatiefs","Wil je dat sociaal of mindful?"))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function x(n,i){if(1&n){const t=e.EpF();e.O4$(),e.TgZ(0,"rect",6),e.NdJ("click",function(){return e.CHM(t),e.oxw().selectLeft()}),e.qZA()}}function _(n,i){if(1&n){const t=e.EpF();e.O4$(),e.TgZ(0,"rect",7),e.NdJ("click",function(){return e.CHM(t),e.oxw().selectRight()}),e.qZA()}if(2&n){const t=e.oxw();e.uIk("x",t.dimensions.midPoint.x)}}function g(n,i){if(1&n&&(e.O4$(),e._UZ(0,"line")),2&n){const t=e.oxw();e.uIk("x1",t.dimensions.midPoint.x)("x2",t.dimensions.midPoint.x)("y1",0)("y2",t.dimensions.boxTopLeft.y)}}function v(n,i){if(1&n&&(e.O4$(),e._UZ(0,"line",8)),2&n){const t=e.oxw();e.uIk("x2",t.dimensions.boxTopLeft.x)("y1",t.dimensions.midPoint.y)("y2",t.dimensions.midPoint.y)}}function w(n,i){if(1&n&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.uIk("x",t.dimensions.leftText.x)("y",t.dimensions.leftText.y),e.xp6(1),e.Oqu(null==t.selected||null==t.selected.left?null:t.selected.left.title)}}function y(n,i){if(1&n&&(e.O4$(),e._UZ(0,"line")),2&n){const t=e.oxw();e.uIk("x1",t.dimensions.boxBottomRight.x)("x2",t.dimensions.windowWidth)("y1",t.dimensions.midPoint.y)("y2",t.dimensions.midPoint.y)}}function T(n,i){if(1&n&&(e.O4$(),e.TgZ(0,"text"),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.uIk("x",t.dimensions.rightText.x)("y",t.dimensions.rightText.y),e.xp6(1),e.Oqu(null==t.selected||null==t.selected.right?null:t.selected.right.title)}}class r{constructor(i,t){this.x=i,this.y=t}offset(i,t){return new r(this.x+i,this.y+t)}}class p{constructor(i,t){this.windowWidth=i,this.windowHeight=t,this.midPoint=new r(i/2,t/2),this.boxTopLeft=this.midPoint.offset(-160,-80),this.boxBottomRight=this.boxTopLeft.offset(320,160),this.boxTextLeft=this.boxTopLeft.x+60;let o=this.midPoint.y-15;this.leftText=new r(this.boxTopLeft.x-160,o),this.rightText=new r(this.boxBottomRight.x+60,o)}}let C=(()=>{class n{constructor(){this.selected=null,this.dimensions=new p(window.innerWidth,window.innerHeight)}handleResize(){this.dimensions=new p(window.innerWidth,window.innerHeight)}selectLeft(){var t;this.selected=null===(t=this.selected)||void 0===t?void 0:t.left}selectRight(){var t;this.selected=null===(t=this.selected)||void 0===t?void 0:t.right}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["graph-node"]],hostBindings:function(t,o){1&t&&e.NdJ("resize",function(){return o.handleResize()},!1,e.Jf7)},inputs:{selected:"selected"},decls:11,vars:12,consts:[["id","graph","width","100%","height","100%","xmlns","http://www.w3.org/2000/svg"],["class","hover","x","0","y","0",3,"click",4,"ngIf"],["class","hover","y","0",3,"click",4,"ngIf"],["rx","30","ry","30"],[4,"ngIf"],["x1","0",4,"ngIf"],["x","0","y","0",1,"hover",3,"click"],["y","0",1,"hover",3,"click"],["x1","0"]],template:function(t,o){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e.YNc(1,x,1,0,"rect",1),e.YNc(2,_,1,1,"rect",2),e._UZ(3,"rect",3),e.TgZ(4,"text"),e._uU(5),e.qZA(),e.YNc(6,g,1,4,"line",4),e.YNc(7,v,1,3,"line",5),e.YNc(8,w,2,3,"text",4),e.YNc(9,y,1,4,"line",4),e.YNc(10,T,2,3,"text",4),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.right),e.xp6(1),e.uIk("x",o.dimensions.boxTopLeft.x)("y",o.dimensions.boxTopLeft.y),e.xp6(1),e.uIk("x",o.dimensions.boxTextLeft)("y",o.dimensions.midPoint.y),e.xp6(1),e.Oqu(null==o.selected?null:o.selected.question),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.parent),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.right),e.xp6(1),e.Q6J("ngIf",null==o.selected?null:o.selected.left))},directives:[f.O5],styles:[".hover[_ngcontent-%COMP%]{stroke-width:0;height:100%;width:50%}.hover[_ngcontent-%COMP%]:hover{fill:var(--highlight-color);cursor:pointer}rect[_ngcontent-%COMP%]{width:320px;height:160px;fill:#fff}text[_ngcontent-%COMP%], rect[_ngcontent-%COMP%], line[_ngcontent-%COMP%]{stroke:var(--text-color)}rect[_ngcontent-%COMP%], line[_ngcontent-%COMP%]{stroke-width:4px}"]}),n})();const N=[{path:"",component:(()=>{class n{constructor(t){this.treeService=t}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:1,vars:1,consts:[[3,"selected"]],template:function(t,o){1&t&&e._UZ(0,"graph-node",0),2&t&&e.Q6J("selected",o.treeService.tree)},directives:[C],styles:[""]}),n})()}];let I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.Bz.forChild(N)],h.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[f.ez,I]]}),n})()}}]);