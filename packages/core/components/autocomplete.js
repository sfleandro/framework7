(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);document,window;var o=e.$,a=(e.Template7,e.utils),n=(e.device,e.support,e.Class),r=(e.Modal,e.ConstructorMethods),p=(e.ModalMethods,function(e){function t(t,n){void 0===n&&(n={}),e.call(this,n,[t]);var r=this;r.app=t;var p,l,i,s=a.extend({on:{}},t.params.autocomplete);if(void 0===s.searchbarDisableButton&&(s.searchbarDisableButton="aurora"!==t.theme),r.useModulesParams(s),r.params=a.extend(s,n),r.params.openerEl&&(p=o(r.params.openerEl)).length&&(p[0].f7Autocomplete=r),r.params.inputEl&&(l=o(r.params.inputEl)).length&&(l[0].f7Autocomplete=r),r.params.view)i=r.params.view;else if(p||l){var d=p||l;i=d.closest(".view").length&&d.closest(".view")[0].f7View}i||(i=t.views.main);var u=a.id(),c=n.url;!c&&p&&p.length&&(p.attr("href")?c=p.attr("href"):p.find("a").length>0&&(c=p.find("a").attr("href"))),c&&"#"!==c&&""!==c||(c=r.params.url);var m=r.params.multiple?"checkbox":"radio";a.extend(r,{$openerEl:p,openerEl:p&&p[0],$inputEl:l,inputEl:l&&l[0],id:u,view:i,url:c,value:r.params.value||[],inputType:m,inputName:m+"-"+u,$modalEl:void 0,$dropdownEl:void 0});var v="";function h(){var e=r.$inputEl.val().trim();r.params.source&&r.params.source.call(r,e,function(t){var o,a,n,p="",i=r.params.limit?Math.min(r.params.limit,t.length):t.length;r.items=t,r.params.highlightMatches&&(e=e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),o=new RegExp("("+e+")","i"));for(var s=0;s<i;s+=1){var d="object"==typeof t[s]?t[s][r.params.valueProperty]:t[s],u="object"==typeof t[s]?t[s][r.params.textProperty]:t[s];0===s&&(a=d,n=r.items[s]),p+=r.renderItem({value:d,text:r.params.highlightMatches?u.replace(o,"<b>$1</b>"):u},s)}if(""===p&&""===e&&r.params.dropdownPlaceholderText&&(p+=r.renderItem({placeholder:!0,text:r.params.dropdownPlaceholderText})),r.$dropdownEl.find("ul").html(p),r.params.typeahead){if(!a||!n)return;if(0!==a.toLowerCase().indexOf(e.toLowerCase()))return;if(v.toLowerCase()===e.toLowerCase())return void(r.value=[]);if(0===v.toLowerCase().indexOf(e.toLowerCase()))return v=e,void(r.value=[]);l.val(a),l[0].setSelectionRange(e.length,a.length);var c="object"==typeof r.value[0]?r.value[0][r.params.valueProperty]:r.value[0];c&&a.toLowerCase()===c.toLowerCase()||(r.value=[n],r.emit("local::change autocompleteChange",[n]))}v=e})}function f(){var e,t,a,n=this.value;if(o(this).parents(".autocomplete-values").length>0){if("checkbox"===r.inputType&&!this.checked){for(var p=0;p<r.value.length;p+=1)(a="string"==typeof r.value[p]?r.value[p]:r.value[p][r.params.valueProperty])!==n&&1*a!=1*n||r.value.splice(p,1);r.updateValues(),r.emit("local::change autocompleteChange",r.value)}}else{for(var l=0;l<r.items.length;l+=1)(t="object"==typeof r.items[l]?r.items[l][r.params.valueProperty]:r.items[l])!==n&&1*t!=1*n||(e=r.items[l]);if("radio"===r.inputType)r.value=[e];else if(this.checked)r.value.push(e);else for(var i=0;i<r.value.length;i+=1)(a="object"==typeof r.value[i]?r.value[i][r.params.valueProperty]:r.value[i])!==n&&1*a!=1*n||r.value.splice(i,1);r.updateValues(),("radio"===r.inputType&&this.checked||"checkbox"===r.inputType)&&r.emit("local::change autocompleteChange",r.value)}}function g(e){var t=o(e.target);t.is(r.$inputEl[0])||r.$dropdownEl&&t.closest(r.$dropdownEl[0]).length||r.close()}function b(){r.open()}function w(){r.open()}function y(){r.$dropdownEl.find("label.active-state").length>0||setTimeout(function(){r.close()},0)}function E(){r.positionDropdown()}function $(e){if(r.opened){if(27===e.keyCode)return e.preventDefault(),void r.$inputEl.blur();if(13===e.keyCode){var t=r.$dropdownEl.find(".autocomplete-dropdown-selected label");return t.length?(e.preventDefault(),t.trigger("click"),void r.$inputEl.blur()):void(r.params.typeahead&&(e.preventDefault(),r.$inputEl.blur()))}if(40===e.keyCode||38===e.keyCode){e.preventDefault();var o,a=r.$dropdownEl.find(".autocomplete-dropdown-selected");a.length&&(o=a[40===e.keyCode?"next":"prev"]("li")).length||(o=r.$dropdownEl.find("li").eq(40===e.keyCode?0:r.$dropdownEl.find("li").length-1)),o.hasClass("autocomplete-dropdown-placeholder")||(a.removeClass("autocomplete-dropdown-selected"),o.addClass("autocomplete-dropdown-selected"))}}}function C(){for(var e,t=o(this),a=0;a<r.items.length;a+=1){var n="object"==typeof r.items[a]?r.items[a][r.params.valueProperty]:r.items[a],p=t.attr("data-value");n!==p&&1*n!=1*p||(e=r.items[a])}r.params.updateInputValueOnSelect&&(r.$inputEl.val("object"==typeof e?e[r.params.valueProperty]:e),r.$inputEl.trigger("input change")),r.value=[e],r.emit("local::change autocompleteChange",[e]),r.close()}return r.attachEvents=function(){"dropdown"!==r.params.openIn&&r.$openerEl&&r.$openerEl.on("click",b),"dropdown"===r.params.openIn&&r.$inputEl&&(r.$inputEl.on("focus",w),r.$inputEl.on(r.params.inputEvents,h),t.device.android?o("html").on("click",g):r.$inputEl.on("blur",y),r.$inputEl.on("keydown",$))},r.detachEvents=function(){"dropdown"!==r.params.openIn&&r.$openerEl&&r.$openerEl.off("click",b),"dropdown"===r.params.openIn&&r.$inputEl&&(r.$inputEl.off("focus",w),r.$inputEl.off(r.params.inputEvents,h),t.device.android?o("html").off("click",g):r.$inputEl.off("blur",y),r.$inputEl.off("keydown",$))},r.attachDropdownEvents=function(){r.$dropdownEl.on("click","label",C),t.on("resize",E)},r.detachDropdownEvents=function(){r.$dropdownEl.off("click","label",C),t.off("resize",E)},r.attachPageEvents=function(){r.$el.on("change",'input[type="radio"], input[type="checkbox"]',f),r.params.closeOnSelect&&!r.params.multiple&&r.$el.once("click",".list label",function(){a.nextTick(function(){r.close()})})},r.detachPageEvents=function(){r.$el.off("change",'input[type="radio"], input[type="checkbox"]',f)},r.useModules(),r.init(),r}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.positionDropdown=function(){var e,t=this,a=t.$inputEl,n=t.app,r=t.$dropdownEl,p=a.parents(".page-content");if(0!==p.length){var l,i=a.offset(),s=a[0].offsetWidth,d=a[0].offsetHeight,u=a.parents(".list");u.parents().each(function(e,t){if(!l){var a=o(t);a.parent(p).length&&(l=a)}});var c,m=u.offset(),v=parseInt(p.css("padding-bottom"),10),h=u.length>0?m.left-p.offset().left:0,f=i.left-(u.length>0?m.left:0)-(n.rtl,0),g=i.top-(p.offset().top-p[0].scrollTop),b=p[0].scrollHeight-v-(g+p[0].scrollTop)-a[0].offsetHeight,w=n.rtl?"padding-right":"padding-left";u.length&&!t.params.expandInput&&(c=(n.rtl?u[0].offsetWidth-f-s:f)-("md"===n.theme?16:15)),r.css({left:(u.length>0?h:f)+"px",top:g+p[0].scrollTop+d+"px",width:(u.length>0?u[0].offsetWidth:s)+"px"}),r.children(".autocomplete-dropdown-inner").css(((e={maxHeight:b+"px"})[w]=u.length>0&&!t.params.expandInput?c+"px":"",e))}},t.prototype.focus=function(){this.$el.find("input[type=search]").focus()},t.prototype.source=function(e){var t=this;if(t.params.source){var o=t.$el;t.params.source.call(t,e,function(a){var n="",r=t.params.limit?Math.min(t.params.limit,a.length):a.length;t.items=a;for(var p=0;p<r;p+=1){for(var l=!1,i="object"==typeof a[p]?a[p][t.params.valueProperty]:a[p],s=0;s<t.value.length;s+=1){var d="object"==typeof t.value[s]?t.value[s][t.params.valueProperty]:t.value[s];d!==i&&1*d!=1*i||(l=!0)}n+=t.renderItem({value:i,text:"object"==typeof a[p]?a[p][t.params.textProperty]:a[p],inputType:t.inputType,id:t.id,inputName:t.inputName,selected:l},p)}o.find(".autocomplete-found ul").html(n),0===a.length?0!==e.length?(o.find(".autocomplete-not-found").show(),o.find(".autocomplete-found, .autocomplete-values").hide()):(o.find(".autocomplete-values").show(),o.find(".autocomplete-found, .autocomplete-not-found").hide()):(o.find(".autocomplete-found").show(),o.find(".autocomplete-not-found, .autocomplete-values").hide())})}},t.prototype.updateValues=function(){for(var e=this,t="",o=0;o<e.value.length;o+=1)t+=e.renderItem({value:"object"==typeof e.value[o]?e.value[o][e.params.valueProperty]:e.value[o],text:"object"==typeof e.value[o]?e.value[o][e.params.textProperty]:e.value[o],inputType:e.inputType,id:e.id,inputName:e.inputName+"-checked}",selected:!0},o);e.$el.find(".autocomplete-values ul").html(t)},t.prototype.preloaderHide=function(){"dropdown"===this.params.openIn&&this.$dropdownEl?this.$dropdownEl.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible"):o(".autocomplete-preloader").removeClass("autocomplete-preloader-visible")},t.prototype.preloaderShow=function(){"dropdown"===this.params.openIn&&this.$dropdownEl?this.$dropdownEl.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible"):o(".autocomplete-preloader").addClass("autocomplete-preloader-visible")},t.prototype.renderPreloader=function(){return('\n      <div class="autocomplete-preloader preloader '+(this.params.preloaderColor?"color-"+this.params.preloaderColor:"")+'">'+(a[this.app.theme+"PreloaderContent"]||"")+"</div>\n    ").trim()},t.prototype.renderSearchbar=function(){var e=this;return e.params.renderSearchbar?e.params.renderSearchbar.call(e):('\n      <form class="searchbar">\n        <div class="searchbar-inner">\n          <div class="searchbar-input-wrap">\n            <input type="search" placeholder="'+e.params.searchbarPlaceholder+'"/>\n            <i class="searchbar-icon"></i>\n            <span class="input-clear-button"></span>\n          </div>\n          '+(e.params.searchbarDisableButton?'\n          <span class="searchbar-disable-button">'+e.params.searchbarDisableText+"</span>\n          ":"")+"\n        </div>\n      </form>\n    ").trim()},t.prototype.renderItem=function(e,t){if(this.params.renderItem)return this.params.renderItem.call(this,e,t);var o=e.value&&"string"==typeof e.value?e.value.replace(/"/g,"&quot;"):e.value;return("dropdown"!==this.params.openIn?'\n        <li>\n          <label class="item-'+e.inputType+' item-content">\n            <input type="'+e.inputType+'" name="'+e.inputName+'" value="'+o+'" '+(e.selected?"checked":"")+'>\n            <i class="icon icon-'+e.inputType+'"></i>\n            <div class="item-inner">\n              <div class="item-title">'+e.text+"</div>\n            </div>\n          </label>\n        </li>\n      ":e.placeholder?'\n        <li class="autocomplete-dropdown-placeholder">\n          <label class="item-content">\n            <div class="item-inner">\n              <div class="item-title">'+e.text+"</div>\n            </div>\n          </label>\n        </li>\n      ":'\n        <li>\n          <label class="item-radio item-content" data-value="'+o+'">\n            <div class="item-inner">\n              <div class="item-title">'+e.text+"</div>\n            </div>\n          </label>\n        </li>\n      ").trim()},t.prototype.renderNavbar=function(){var e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);var t=e.params.pageTitle;void 0===t&&e.$openerEl&&e.$openerEl.length&&(t=e.$openerEl.find(".item-title").text().trim());var o="popup"===e.params.openIn,a=o?"\n        "+(e.params.preloader?'\n        <div class="left">\n          '+e.renderPreloader()+"\n        </div>\n        ":"")+"\n      ":'\n        <div class="left sliding">\n          <a class="link back">\n            <i class="icon icon-back"></i>\n            <span class="if-not-md">'+e.params.pageBackLinkText+"</span>\n          </a>\n        </div>\n      ",n=o?'\n        <div class="right">\n          <a class="link popup-close" data-popup=".autocomplete-popup">\n            '+e.params.popupCloseLinkText+"\n          </a>\n        </div>\n      ":"\n        "+(e.params.preloader?'\n        <div class="right">\n          '+e.renderPreloader()+"\n        </div>\n        ":"")+"\n      ";return('\n      <div class="navbar '+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")+'">\n        <div class="navbar-bg"></div>\n        <div class="navbar-inner '+(e.params.navbarColorTheme?"color-"+e.params.navbarColorTheme:"")+'">\n          '+a+"\n          "+(t?'<div class="title sliding">'+t+"</div>":"")+"\n          "+n+'\n          <div class="subnavbar sliding">'+e.renderSearchbar()+"</div>\n        </div>\n      </div>\n    ").trim()},t.prototype.renderDropdown=function(){var e=this;return e.params.renderDropdown?e.params.renderDropdown.call(e,e.items):('\n      <div class="autocomplete-dropdown">\n        <div class="autocomplete-dropdown-inner">\n          <div class="list '+(e.params.expandInput?"":"no-safe-areas")+'">\n            <ul></ul>\n          </div>\n        </div>\n        '+(e.params.preloader?e.renderPreloader():"")+"\n      </div>\n    ").trim()},t.prototype.renderPage=function(e){var t=this;return t.params.renderPage?t.params.renderPage.call(t,t.items):('\n      <div class="page page-with-subnavbar autocomplete-page" data-name="autocomplete-page">\n        '+t.renderNavbar(e)+'\n        <div class="searchbar-backdrop"></div>\n        <div class="page-content">\n          <div class="list autocomplete-list autocomplete-found autocomplete-list-'+t.id+" "+(t.params.formColorTheme?"color-"+t.params.formColorTheme:"")+'">\n            <ul></ul>\n          </div>\n          <div class="list autocomplete-not-found">\n            <ul>\n              <li class="item-content"><div class="item-inner"><div class="item-title">'+t.params.notFoundText+'</div></div></li>\n            </ul>\n          </div>\n          <div class="list autocomplete-values">\n            <ul></ul>\n          </div>\n        </div>\n      </div>\n    ').trim()},t.prototype.renderPopup=function(){var e=this;return e.params.renderPopup?e.params.renderPopup.call(e,e.items):('\n      <div class="popup autocomplete-popup">\n        <div class="view">\n          '+e.renderPage(!0)+";\n        </div>\n      </div>\n    ").trim()},t.prototype.onOpen=function(e,t){var a=this,n=a.app,r=o(t);if(a.$el=r,a.el=r[0],a.openedIn=e,a.opened=!0,"dropdown"===a.params.openIn)a.attachDropdownEvents(),a.$dropdownEl.addClass("autocomplete-dropdown-in"),a.$inputEl.trigger("input");else{var p=r.find(".searchbar");"page"===a.params.openIn&&"ios"===n.theme&&0===p.length&&(p=o(n.navbar.getElByPage(r)).find(".searchbar")),a.searchbar=n.searchbar.create({el:p,backdropEl:r.find(".searchbar-backdrop"),customSearch:!0,on:{search:function(e,t){0===t.length&&a.searchbar.enabled?a.searchbar.backdropShow():a.searchbar.backdropHide(),a.source(t)}}}),a.attachPageEvents(),a.updateValues(),a.params.requestSourceOnOpen&&a.source("")}a.emit("local::open autocompleteOpen",a)},t.prototype.autoFocus=function(){return this.searchbar&&this.searchbar.$inputEl&&this.searchbar.$inputEl.focus(),this},t.prototype.onOpened=function(){var e=this;"dropdown"!==e.params.openIn&&e.params.autoFocus&&e.autoFocus(),e.emit("local::opened autocompleteOpened",e)},t.prototype.onClose=function(){var e=this;e.destroyed||(e.searchbar&&e.searchbar.destroy&&(e.searchbar.destroy(),e.searchbar=null,delete e.searchbar),"dropdown"===e.params.openIn?(e.detachDropdownEvents(),e.$dropdownEl.removeClass("autocomplete-dropdown-in").remove(),e.$inputEl.parents(".item-content-dropdown-expanded").removeClass("item-content-dropdown-expanded")):e.detachPageEvents(),e.emit("local::close autocompleteClose",e))},t.prototype.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.emit("local::closed autocompleteClosed",e))},t.prototype.openPage=function(){var e=this;if(e.opened)return e;var t=e.renderPage();return e.view.router.navigate({url:e.url,route:{content:t,path:e.url,on:{pageBeforeIn:function(t,o){e.onOpen("page",o.el)},pageAfterIn:function(t,o){e.onOpened("page",o.el)},pageBeforeOut:function(t,o){e.onClose("page",o.el)},pageAfterOut:function(t,o){e.onClosed("page",o.el)}},options:{animate:e.params.animate}}}),e},t.prototype.openPopup=function(){var e=this;if(e.opened)return e;var t={content:e.renderPopup(),animate:e.params.animate,on:{popupOpen:function(t){e.onOpen("popup",t.el)},popupOpened:function(t){e.onOpened("popup",t.el)},popupClose:function(t){e.onClose("popup",t.el)},popupClosed:function(t){e.onClosed("popup",t.el)}}};return e.params.routableModals?e.view.router.navigate({url:e.url,route:{path:e.url,popup:t}}):e.modal=e.app.popup.create(t).open(e.params.animate),e},t.prototype.openDropdown=function(){var e=this;e.$dropdownEl||(e.$dropdownEl=o(e.renderDropdown())),e.$inputEl.parents(".list").length&&e.$inputEl.parents(".item-content").length>0&&e.params.expandInput&&e.$inputEl.parents(".item-content").addClass("item-content-dropdown-expanded");var t=e.$inputEl.parents(".page-content");e.params.dropdownContainerEl?o(e.params.dropdownContainerEl).append(e.$dropdownEl):0===t.length?e.$dropdownEl.insertAfter(e.$inputEl):(e.positionDropdown(),t.append(e.$dropdownEl)),e.onOpen("dropdown",e.$dropdownEl),e.onOpened("dropdown",e.$dropdownEl)},t.prototype.open=function(){var e=this;return e.opened?e:(e["open"+e.params.openIn.split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")](),e)},t.prototype.close=function(){var e=this;return e.opened?("dropdown"===e.params.openIn?(e.onClose(),e.onClosed()):e.params.routableModals||"page"===e.openedIn?e.view.router.back({animate:e.params.animate}):(e.modal.once("modalClosed",function(){a.nextTick(function(){e.modal.destroy(),delete e.modal})}),e.modal.close()),e):e},t.prototype.init=function(){this.attachEvents()},t.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy autocompleteBeforeDestroy",e),e.detachEvents(),e.$inputEl&&e.$inputEl[0]&&delete e.$inputEl[0].f7Autocomplete,e.$openerEl&&e.$openerEl[0]&&delete e.$openerEl[0].f7Autocomplete,a.deleteProps(e),e.destroyed=!0},t}(n)),l={name:"autocomplete",params:{autocomplete:{openerEl:void 0,inputEl:void 0,view:void 0,dropdownContainerEl:void 0,dropdownPlaceholderText:void 0,typeahead:!1,highlightMatches:!0,expandInput:!1,updateInputValueOnSelect:!0,inputEvents:"input",value:void 0,multiple:!1,source:void 0,limit:void 0,valueProperty:"id",textProperty:"text",openIn:"page",pageBackLinkText:"Back",popupCloseLinkText:"Close",pageTitle:void 0,searchbarPlaceholder:"Search...",searchbarDisableText:"Cancel",searchbarDisableButton:void 0,animate:!0,autoFocus:!1,closeOnSelect:!1,notFoundText:"Nothing found",requestSourceOnOpen:!1,preloaderColor:void 0,preloader:!1,formColorTheme:void 0,navbarColorTheme:void 0,routableModals:!0,url:"select/",renderDropdown:void 0,renderPage:void 0,renderPopup:void 0,renderItem:void 0,renderSearchbar:void 0,renderNavbar:void 0}},static:{Autocomplete:p},create:function(){var e=this;e.autocomplete=a.extend(r({defaultSelector:void 0,constructor:p,app:e,domProp:"f7Autocomplete"}),{open:function(t){var o=e.autocomplete.get(t);if(o&&o.open)return o.open()},close:function(t){var o=e.autocomplete.get(t);if(o&&o.close)return o.close()}})}};if(t){if(e.prototype.modules&&e.prototype.modules[l.name])return;e.use(l),e.instance&&(e.instance.useModuleParams(l,e.instance.params),e.instance.useModule(l))}return l}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
