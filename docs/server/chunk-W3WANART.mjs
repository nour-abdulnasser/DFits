import './polyfills.server.mjs';
import{A as r,Aa as Re,B as o,C as c,D as _e,E as b,F as _,G as ye,H as Ce,I as H,J as G,K as B,L as u,M as be,N as U,O as m,P as y,Q as F,R as L,W as Ve,Y as oe,_ as De,a as de,aa as z,b as N,ba as $,c as he,ca as Me,d as pe,da as Se,e as fe,ea as we,f as v,fa as M,g as w,ga as Ae,h as k,ha as Ee,i as T,ia as xe,j as p,ja as Fe,k as A,ka as Ie,l as D,la as Oe,m as ne,ma as Pe,n as E,na as se,o as x,oa as W,p as ie,pa as Ne,q as me,qa as ae,r as ge,s as ve,t as a,ta as ke,u as d,v as re,w as f,x as l,xa as Te,y as R,z as j}from"./chunk-B2NFCV2J.mjs";import{a as O,b as P}from"./chunk-5XUXGTUW.mjs";var qe={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=P(O({},qe),{"[class.ng-submitted]":"isSubmitted"});var Ze=new k("CallSetDisabledState",{providedIn:"root",factory:()=>je}),je="always";var Qe=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=A({type:t})}static{this.\u0275inj=w({})}}return t})();var q=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Ze,useValue:e.callSetDisabledState??je}]}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=A({type:t})}static{this.\u0275inj=w({imports:[Qe]})}}return t})();var S=class t{searchTermSource=new N("");searchTerm$=this.searchTermSource.asObservable();updateSearchTerm(n){this.searchTermSource.next(n)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};var Xe=["navbar"],Z=class t{constructor(n,e){this._Renderer2=n;this._SearchService=e}isToggled=!1;isToggledSearch=!1;navSearch="";ngOnInit(){}navElement;toggle(){this.isToggled=!this.isToggled}toggleSearch(){this.isToggledSearch=!this.isToggledSearch}shadow(){}onScroll(){scrollY>200?(this._Renderer2.addClass(this.navElement.nativeElement,"py-1"),this._Renderer2.addClass(this.navElement.nativeElement,"shadow")):scrollY<200&&(this._Renderer2.removeClass(this.navElement.nativeElement,"py-1"),this._Renderer2.removeClass(this.navElement.nativeElement,"shadow"))}onSearchChange(n){let e=n.target.value;this._SearchService.updateSearchTerm(e)}static \u0275fac=function(e){return new(e||t)(d(re),d(S))};static \u0275cmp=p({type:t,selectors:[["app-nav"]],viewQuery:function(e,i){if(e&1&&H(Xe,5),e&2){let s;G(s=B())&&(i.navElement=s.first)}},hostBindings:function(e,i){e&1&&b("scroll",function(){return i.onScroll()},!1,ve)},standalone:!0,features:[m],decls:39,vars:2,consts:[["navbar",""],[1,"primary-font","navbar","navbar-expand-lg","bg-body-tertiary","fixed-top"],[1,"container","d-flex","justify-content-between"],[1,"p-3","d-flex","align-items-center"],[1,"fa-solid","me-3","fa-cart-shopping","icon"],["title","menu","type","button","data-bs-toggle","collapse","data-bs-target","#navbarSearchDropdown","aria-controls","navbarSearchDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler",3,"click"],[1,"fa-solid","me-3","fa-magnifying-glass","icon"],["id","navbarSearchWide"],["type","text","id","navSearchInputWide","placeholder","Search by Product Name",1,"form-control","form-control-sm","primary-font",3,"input"],[1,"navbar-brand"],[1,"rotate-left"],[1,"rotate-right"],["title","menu","type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"icon",3,"click"],["id","navbarSearchDropdown",1,"collapse","navbar-collapse"],["type","text","id","navSearchInput","placeholder","Search by Product Name",1,"form-control","form-control-sm","primary-font",3,"input"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","href","#",1,"nav-link","active"],["href","#",1,"nav-link"]],template:function(e,i){if(e&1){let s=_e();r(0,"nav",1,0)(2,"div",2)(3,"div",3)(4,"a"),c(5,"i",4),o(),r(6,"button",5),b("click",function(){return E(s),x(i.toggleSearch())}),r(7,"a"),c(8,"i",6),o()(),r(9,"div",7)(10,"input",8),b("input",function(C){return E(s),x(i.onSearchChange(C))}),o()()(),r(11,"a",9)(12,"span",10),u(13,"D"),o(),r(14,"span",11),u(15,"'"),o(),r(16,"span",10),u(17,"F"),o(),r(18,"span",11),u(19,"i"),o(),r(20,"span",10),u(21,"t"),o(),r(22,"span",11),u(23,"s"),o()(),r(24,"button",12)(25,"span",13),b("click",function(){return E(s),x(i.toggle())}),o()(),r(26,"div",14)(27,"input",15),b("input",function(C){return E(s),x(i.onSearchChange(C))}),o()(),r(28,"div",16)(29,"ul",17)(30,"li",18)(31,"a",19),u(32,"Home"),o()(),r(33,"li",18)(34,"a",20),u(35,"About"),o()(),r(36,"li",18)(37,"a",20),u(38,"Contact"),o()()()()()()}e&2&&(a(25),j(i.isToggled?"fa fa-times":"fa fa-bars"))},dependencies:[q,M],styles:["[_ngcontent-%COMP%]:root{--primary-color: #002540;--secondary-color: #b6d2e0;--tertiary-color: #eae6df}[_ngcontent-%COMP%]::-moz-selection{color:#fff;background:#b6d2e0}[_ngcontent-%COMP%]::selection{color:#fff;background:#b6d2e0}.primary-font[_ngcontent-%COMP%]{font-family:Jost,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.secondary-font[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.main-section[_ngcontent-%COMP%]{margin-top:5rem;min-height:65vh}nav[_ngcontent-%COMP%]{transition:all .25s ease-in-out}.navbar-toggler[_ngcontent-%COMP%]{border:none;outline:none}.navbar-toggler[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}#navSearchInput[_ngcontent-%COMP%], #navSearchInputWide[_ngcontent-%COMP%]{padding:.5rem;width:100%;border-radius:0;border:none;border-bottom:#002540 1px solid}#navSearchInput[_ngcontent-%COMP%]:focus, #navSearchInputWide[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none}#navbarSearchDropdown[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.navbar-brand[_ngcontent-%COMP%]{font-size:2rem;font-family:Jost,sans-serif;font-optical-sizing:auto;font-weight:900;color:#002540;letter-spacing:5px;transition:all .25s ease-in-out;cursor:pointer;display:inline-block;position:relative;transform:translate(-25%)}.navbar-brand[_ngcontent-%COMP%]   .rotate-left[_ngcontent-%COMP%], .rotate-right[_ngcontent-%COMP%]{display:inline-block;transition:all .25s ease-in-out;/}.navbar-brand[_ngcontent-%COMP%]:hover   .rotate-left[_ngcontent-%COMP%]{transform:rotate(-16deg)}.navbar-brand[_ngcontent-%COMP%]:hover   .rotate-right[_ngcontent-%COMP%]{transform:rotate(16deg)}.icon[_ngcontent-%COMP%]{color:#002540;font-size:1.4rem;cursor:pointer}nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:600}#navbarSearchWide[_ngcontent-%COMP%]{display:none}@media (min-width: 992px){#navbarSearchWide[_ngcontent-%COMP%]{display:flex}#navSearchInputWide[_ngcontent-%COMP%]{width:15rem}.navbar-brand[_ngcontent-%COMP%]{transform:translate(-50%)}.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]{justify-content:end;flex-grow:0}#navbarSearchDropdown[_ngcontent-%COMP%]{display:none!important}}"]})};var Q=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-footer"]],standalone:!0,features:[m],decls:18,vars:0,consts:[[1,"p-0","footer-container"],[1,"d-flex","flex-column","justify-content-between","align-items-start","p-4","border-top"],[1,"col-md-4","d-flex","align-items-center"],["href","#",1,"brand-name"],[1,"bottom","w-100","mt-5","d-flex","justify-content-between"],[1,"mb-3","mb-md-0"],[1,"nav","col-md-4","justify-content-end","list-unstyled","d-flex"],[1,"ms-3"],["target","blank","href","https://twitter.com",1,""],[1,"fa-brands","fa-twitter"],["target","blank","href","#",1,""],[1,"fa-brands","fa-facebook"],[1,"fa-brands","fa-instagram"]],template:function(e,i){e&1&&(r(0,"div",0)(1,"footer",1)(2,"div",2)(3,"a",3),u(4,"D'Fits"),o()(),r(5,"div",4)(6,"p",5),u(7,"\xA9 2024 RouteTask"),o(),r(8,"ul",6)(9,"li",7)(10,"a",8),c(11,"i",9),o()(),r(12,"li",7)(13,"a",10),c(14,"i",11),o()(),r(15,"li",7)(16,"a",10),c(17,"i",12),o()()()()()())},styles:["footer[_ngcontent-%COMP%]{background-color:#002540;color:#eae6df}.brand-name[_ngcontent-%COMP%]{font-size:2rem;font-family:Jost,sans-serif;font-optical-sizing:auto;font-weight:900;letter-spacing:5px;transition:all .25s ease-in-out;cursor:pointer}a[_ngcontent-%COMP%]{text-decoration:none;color:#eae6df}"]})};var X=class t{title="BootcampTask";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:4,vars:0,consts:[[1,"container","main-section"],[1,"app-footer"]],template:function(e,i){e&1&&(c(0,"app-nav"),r(1,"div",0),c(2,"router-outlet"),o(),c(3,"app-footer",1))},dependencies:[Te,Z,Q],styles:["[_ngcontent-%COMP%]:root{--primary-color: #002540;--secondary-color: #b6d2e0;--tertiary-color: #eae6df}[_ngcontent-%COMP%]::-moz-selection{color:#fff;background:#b6d2e0}[_ngcontent-%COMP%]::selection{color:#fff;background:#b6d2e0}.primary-font[_ngcontent-%COMP%]{font-family:Jost,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.secondary-font[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.main-section[_ngcontent-%COMP%]{margin-top:5rem;min-height:65vh}"]})};var J=class t{transform(n,e){return n.split(" ").length>e?n.split(" ").splice(0,e).join(" ")+"...":n.split(" ").splice(0,e).join(" ")}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=D({name:"cutText",type:t,pure:!0,standalone:!0})};var Je=["overlay"],Ye=["*"];function Ke(t,n){t&1&&c(0,"div")}function et(t,n){if(t&1&&(r(0,"div"),f(1,Ke,1,0,"div",6),o()),t&2){let e=_(2);j(e.spinner.class),R("color",e.spinner.color),a(),l("ngForOf",e.spinner.divArray)}}function tt(t,n){if(t&1&&(c(0,"div",7),y(1,"safeHtml")),t&2){let e=_(2);l("innerHTML",F(1,1,e.template),me)}}function nt(t,n){if(t&1&&(r(0,"div",2,0),f(2,et,2,5,"div",3)(3,tt,2,3,"div",4),r(4,"div",5),Ce(5),o()()),t&2){let e=_();R("background-color",e.spinner.bdColor)("z-index",e.spinner.zIndex)("position",e.spinner.fullScreen?"fixed":"absolute"),l("@.disabled",e.disableAnimation)("@fadeIn","in"),a(2),l("ngIf",!e.template),a(),l("ngIf",e.template),a(),R("z-index",e.spinner.zIndex)}}var it={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},ce={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},ue="primary",V=class t{constructor(n){Object.assign(this,n)}static create(n){return!n?.template&&!n?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new t(n)}},I=(()=>{class t{constructor(){this.spinnerObservable=new N(null)}getSpinner(e){return this.spinnerObservable.asObservable().pipe(he(i=>i&&i.name===e))}show(e=ue,i){return new Promise((s,h)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=e,this.spinnerObservable.next(new V(P(O({},i),{show:!0}))),s(!0)):(this.spinnerObservable.next(new V({name:e,show:!0})),s(!0))},10)})}hide(e=ue,i=10){return new Promise((s,h)=>{setTimeout(()=>{this.spinnerObservable.next(new V({name:e,show:!1})),s(!0)},i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Ge=new k("NGX_SPINNER_CONFIG"),rt=(()=>{class t{constructor(e){this._sanitizer=e}transform(e){if(e)return this._sanitizer.bypassSecurityTrustHtml(e)}static{this.\u0275fac=function(i){return new(i||t)(d(Ie,16))}}static{this.\u0275pipe=D({name:"safeHtml",type:t,pure:!0,standalone:!0})}}return t})(),Be=(()=>{class t{constructor(e,i,s,h){this.spinnerService=e,this.changeDetector=i,this.elementRef=s,this.globalConfig=h,this.disableAnimation=!1,this.spinner=new V,this.ngUnsubscribe=new de,this.setDefaultOptions=()=>{let{type:C}=this.globalConfig??{};this.spinner=V.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??C,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=ce.BD_COLOR,this.zIndex=ce.Z_INDEX,this.color=ce.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=ue,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(fe(this.ngUnsubscribe)).subscribe(e=>{this.setDefaultOptions(),Object.assign(this.spinner,e),e.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(e){return e===this.elementRef.nativeElement.parentElement?!0:e.parentNode&&this.isSpinnerZone(e.parentNode)}ngOnChanges(e){for(let i in e)if(i){let s=e[i];if(s.isFirstChange())return;typeof s.currentValue<"u"&&s.currentValue!==s.previousValue&&s.currentValue!==""&&(this.spinner[i]=s.currentValue,i==="showSpinner"&&(s.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),i==="name"&&this.initObservable())}}getClass(e,i){this.spinner.divCount=it[e],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((h,C)=>C);let s="";switch(i.toLowerCase()){case"small":s="la-sm";break;case"medium":s="la-2x";break;case"large":s="la-3x";break;default:break}return"la-"+e+" "+s}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static{this.\u0275fac=function(i){return new(i||t)(d(I),d(oe),d(ie),d(Ge,8))}}static{this.\u0275cmp=p({type:t,selectors:[["ngx-spinner"]],viewQuery:function(i,s){if(i&1&&H(Je,5),i&2){let h;G(h=B())&&(s.spinnerDOM=h.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[ne,m],ngContentSelectors:Ye,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(i,s){i&1&&(ye(),f(0,nt,6,12,"div",1)),i&2&&l("ngIf",s.spinner.show)},dependencies:[rt,$,z],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[Pe("fadeIn",[Ne("in",W({opacity:1})),ae(":enter",[W({opacity:0}),se(300)]),ae(":leave",se(200,W({opacity:0})))])]},changeDetection:0})}}return t})(),Ue=(()=>{class t{static forRoot(e){return{ngModule:t,providers:[{provide:Ge,useValue:e}]}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=A({type:t})}static{this.\u0275inj=w({imports:[M]})}}return t})();var Y=class t{transform(n,e){return e==null?n:n.filter(i=>i.title.toLowerCase().includes(e.toLowerCase()))}static \u0275fac=function(e){return new(e||t)};static \u0275pipe=D({name:"search",type:t,pure:!0,standalone:!0})};var K=class t{constructor(n){this._HttpClient=n}baseUrl="https://fakestoreapi.com";getAllProductsAPI(){return this._HttpClient.get(`${this.baseUrl}/products`)}getLimitedProducts(n){return this._HttpClient.get(`${this.baseUrl}/products?limit=${n}`)}getSingleProduct(n){return this._HttpClient.get(`${this.baseUrl}/products/${n}`)}static \u0275fac=function(e){return new(e||t)(T(Ae))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};function st(t,n){t&1&&(r(0,"h2",3),u(1,` RESULTS
`),o())}function at(t,n){if(t&1&&(r(0,"h2",9),u(1),y(2,"uppercase"),o()),t&2){let e=_().$implicit;l("title",e.key),a(),U(" ",F(2,2,e.key)," ")}}function lt(t,n){t&1&&c(0,"i",24)}function ct(t,n){t&1&&c(0,"i",25)}function ut(t,n){t&1&&c(0,"i",26)}function dt(t,n){if(t&1&&(r(0,"article",10)(1,"div",11)(2,"div",12),c(3,"img",13),o(),r(4,"div",14)(5,"div",15)(6,"h5",16),u(7),y(8,"cutText"),o()(),r(9,"div",17)(10,"div",18),f(11,lt,1,0,"i",19)(12,ct,1,0,"i",20)(13,ut,1,0,"i",21),o(),r(14,"p",22),u(15),o()(),r(16,"button",23),u(17," Add to Cart \u2014 "),r(18,"span"),u(19),y(20,"currency"),o()()()()()),t&2){let e=n.$implicit,i=_(2);a(3),l("src",e.image,ge)("alt",e.title)("title",e.title),a(3),l("title",e.title),a(),U(" ",L(8,11,e.title,5)," "),a(3),l("title",e.rating.rate),a(),l("ngForOf",i.getStars(e).full),a(),l("ngIf",e.rating.rate%1!==0),a(),l("ngForOf",i.getStars(e).empty),a(2),U("(",e.rating.count,")"),a(4),be(L(20,14,e.price,"E\xA3"))}}function ht(t,n){if(t&1&&(r(0,"section",4)(1,"section",5),f(2,at,3,4,"h2",6),r(3,"div",7),f(4,dt,21,17,"article",8),y(5,"search"),o()()()),t&2){let e=n.$implicit,i=_();a(2),l("ngIf",!i.homeSearch),a(2),l("ngForOf",L(5,2,e.value,i.homeSearch))}}function pt(t,n){t&1&&c(0,"ngx-spinner",27),t&2&&l("fullScreen",!0)}var ee=class t{constructor(n,e,i){this._ProductsService=n;this._SearchService=e;this._NgxSpinnerService=i}allProducts=[];allProductsGrouped=new Map;homeSearch="";totalProducts=this.allProducts.length;loadedProductsCount=0;ngAfterViewInit(){this._NgxSpinnerService.show(),this._ProductsService.getAllProductsAPI().subscribe({next:n=>{this.allProducts=n,n.forEach(e=>{this.allProductsGrouped.has(e.category)||this.allProductsGrouped.set(e.category,[]),this.allProductsGrouped.get(e.category)?.push(e)})},error:n=>{console.log(n)}}),this._SearchService.searchTerm$.subscribe(n=>{this.homeSearch=n})}onProductLoad(){this.loadedProductsCount++,this.loadedProductsCount===this.totalProducts&&this.checkToHideSpinner()}getStars(n){return{full:Array(Math.floor(n.rating.rate)).fill(0),empty:Array(5-Math.ceil(n.rating.rate)).fill(0)}}checkToHideSpinner(){this.loadedProductsCount===this.totalProducts&&this._NgxSpinnerService.hide()}static \u0275fac=function(e){return new(e||t)(d(K),d(S),d(I))};static \u0275cmp=p({type:t,selectors:[["app-home"]],standalone:!0,features:[m],decls:4,vars:5,consts:[["title","results title","class","section-title text-center mb-3",4,"ngIf"],["class","my-4",4,"ngFor","ngForOf"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-scale-multiple",3,"fullScreen",4,"ngIf"],["title","results title",1,"section-title","text-center","mb-3"],[1,"my-4"],[1,"category-section","primary-font"],["class","section-title text-center mb-4",3,"title",4,"ngIf"],[1,"products-list","row","g-3"],["class","col-sm-6 col-md-4 col-lg-3 col-xl-3",4,"ngFor","ngForOf"],[1,"section-title","text-center","mb-4",3,"title"],[1,"col-sm-6","col-md-4","col-lg-3","col-xl-3"],[1,"card","p-0","h-100","d-flex","flex-column","justify-content-between"],[1,"image-container","p-3","d-flex","m-auto"],[1,"card-img-top","w-100","m-auto",3,"src","alt","title"],[1,"card-body","d-flex","flex-column","justify-content-end","p-0"],[1,"title-containter","px-2"],[1,"card-title",3,"title"],[1,"rating-container","px-2","d-flex"],[1,"stars-container",3,"title"],["class","fa fa-star rating-color",4,"ngFor","ngForOf"],["class","fa-regular fa-star-half-stroke",4,"ngIf"],["class","fa fa-star fa-regular rating-color",4,"ngFor","ngForOf"],[1,"ms-1"],["title","Add to cart",1,"button-product","text-center"],[1,"fa","fa-star","rating-color"],[1,"fa-regular","fa-star-half-stroke"],[1,"fa","fa-star","fa-regular","rating-color"],["bdColor","rgba(0, 0, 0, 0.8)","size","medium","color","#fff","type","ball-scale-multiple",3,"fullScreen"]],template:function(e,i){e&1&&(f(0,st,2,0,"h2",0)(1,ht,6,5,"section",1),y(2,"keyvalue"),f(3,pt,1,1,"ngx-spinner",2)),e&2&&(l("ngIf",i.homeSearch),a(),l("ngForOf",F(2,3,i.allProductsGrouped)),a(2),l("ngIf",i.allProducts.length===0))},dependencies:[M,z,$,Me,we,Se,J,Y,Ue,Be,q],styles:["[_ngcontent-%COMP%]:root{--primary-color: #002540;--secondary-color: #b6d2e0;--tertiary-color: #eae6df}[_ngcontent-%COMP%]::-moz-selection{color:#fff;background:#b6d2e0}[_ngcontent-%COMP%]::selection{color:#fff;background:#b6d2e0}.primary-font[_ngcontent-%COMP%]{font-family:Jost,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.secondary-font[_ngcontent-%COMP%]{font-family:Playfair Display,serif;font-optical-sizing:auto;font-weight:400;font-style:normal}.main-section[_ngcontent-%COMP%]{margin-top:5rem;min-height:65vh}.section-title[_ngcontent-%COMP%]{background-color:#eae6df;padding:.3rem;font-weight:700;color:#eae6df;letter-spacing:5px;text-shadow:0 0 1px #002540,0 0 1px #002540,0 0 1px #002540,0 0 1px #002540}.image-container[_ngcontent-%COMP%]{overflow:hidden}img[_ngcontent-%COMP%]{width:300px;height:200px;object-fit:contain}.card[_ngcontent-%COMP%]{border:solid 1px #b6d2e0;border-bottom:none;border-radius:4px}.button-product[_ngcontent-%COMP%]{border:none;border-radius:2px;padding:.3rem;width:100%;background-color:#002540;color:#fff;font-size:.8rem;transition:all .25s ease-in-out}.button-product[_ngcontent-%COMP%]:hover{color:#b6d2e0}.rating-color[_ngcontent-%COMP%]{color:#002540}"]})};var ze=[{path:"",component:ee,title:"D'Fits"},{path:"**",redirectTo:""}];var te=class t{constructor(n){this._NgxSpinnerService=n}intercept(n,e){return this._NgxSpinnerService.show(),e.handle(n).pipe(pe(()=>{this._NgxSpinnerService.hide()}))}static \u0275fac=function(e){return new(e||t)(T(I))};static \u0275prov=v({token:t,factory:t.\u0275fac})};var $e={providers:[Ve({eventCoalescing:!0}),Re(ze),xe(),{provide:Ee,useClass:te,multi:!0},Oe()]};var ft={providers:[ke()]},We=De($e,ft);var mt=()=>Fe(X,We),Kn=mt;export{Kn as a};