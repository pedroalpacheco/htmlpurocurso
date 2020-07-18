
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++jquery.cookie.js - */
// http://receita.economia.gov.br/portal_javascripts/++resource++jquery.cookie.js?original=1
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)} else{factory(jQuery)}}(function($){var pluses=/\+/g;
function raw(s){return s}
function decoded(s){return decodeURIComponent(s.replace(pluses,' '))}
function converted(s){if(s.indexOf('"')===0){s=s.slice(1,-1).replace(/\\"/g, '"').replace(/\\\\/g, '\\')}
try{return config.json?JSON.parse(s):s} catch(er){}}
var config=$.cookie=function(key,value,options){if(value!==undefined){options=$.extend({},config.defaults,options);if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}
value=config.json?JSON.stringify(value):String(value);return(document.cookie=[config.raw?key:encodeURIComponent(key),'=',config.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}
var decode=config.raw?raw:decoded;var cookies=document.cookie.split('; ');var result=key?undefined:{};for(var i=0,l=cookies.length;i<l;i++){var parts=cookies[i].split('=');var name=decode(parts.shift());var cookie=decode(parts.join('='));if(key&&key===name){result=converted(cookie);break}
if(!key){result[name]=converted(cookie)}}
return result};config.defaults={};$.removeCookie=function(key,options){if($.cookie(key)!==undefined){$.cookie(key,'',$.extend({},options,{expires:-1}));return true}
return false}}));

/* - ++resource++contraste.js - */
// http://receita.economia.gov.br/portal_javascripts/++resource++contraste.js?original=1
jQuery(function($){$('#siteaction-contraste a').click(
function(e){if($.cookie('contraste')===null){$.cookie('contraste','on');$('body').addClass('contraste');e.preventDefault();return false}else{if($.cookie('contraste')=='on'){$.cookie('contraste','off');$('body').removeClass('contraste');e.preventDefault();return false}else{$.cookie('contraste','on');$('body').addClass('contraste');e.preventDefault();return false}}});if($.cookie('contraste')=='on'){$('body').addClass('contraste');return false}});

/* - ++resource++brasil.gov.portal/js/main.js - */
// http://receita.economia.gov.br/portal_javascripts/++resource++brasil.gov.portal/js/main.js?original=1
var PBrasil={init: function(){this.main();this.addClassHtml();this.onclickBuscar();this.bugfixBase();this.carregaDestaques();this.bugfixQuerywidget()},main: function(){$('.portletNavigationTree .portletHeader').click(function(){$(this).toggleClass('ativo');$(this).next().slideToggle()});var menuTrigger=$(".menuTrigger");var navigationEl=$("#navigation");menuTrigger.click(function(e){e.preventDefault();navigationEl.toggleClass("ativo")});var sectionTrigger=$(".mobile .portletNavigationTree dt a");sectionTrigger.append("<span></span>");sectionTrigger.click(function(e){e.preventDefault();$(this).parent().parent().toggleClass("ativo")});$("ul li:last-child").addClass("last-item");var responsiveResize,root;root=typeof exports!=="undefined"&&exports!==null?exports:this;root.ResponsiveResize=function(){var _Singleton,_base;_Singleton=(function(){
function _Singleton(){}
_Singleton.prototype.perspectiva_anterior='';_Singleton.prototype.scrollbar=false;_Singleton.prototype.resize=function(){var perspectiva_atual;if($(window).width()<=480){perspectiva_atual='mobile'} else{perspectiva_atual='desktop'}
if(this.perspectiva_anterior!==perspectiva_atual){this.perspectiva_anterior=perspectiva_atual;if(perspectiva_atual==='mobile'){$("body").addClass("mobile")} else{$("body").removeClass("mobile")}}};return _Singleton})();if((_base=root.ResponsiveResize).instance==null){_base.instance=new _Singleton()}
return root.ResponsiveResize.instance};var resize=function(){responsiveResize=new root.ResponsiveResize();responsiveResize.resize()}
$(window).resize(function(){resize()});resize();$('.newsImageContainer .photo-icon').on('click', function(e){e.preventDefault();$('#parent-fieldname-image').trigger('click')})},addClassHtml: function(){$("#portal-column-one div:first-child").addClass("first-item");var firstNavigation=$("#portal-column-one .portletWrapper .portletNavigationTree")[0];if(firstNavigation){$(firstNavigation).addClass("first-item-nav");var firstNavigationTitle=$("#portal-column-one .portletWrapper .portletNavigationTree .portletHeader")[0];if(firstNavigationTitle.textContent.indexOf('Menu de relevância')>1){$(firstNavigation).parent('div').addClass("nav-menu-de-relevancia")}}
if($('.link-externo').length>0){$('.link-externo .collection-item:even').addClass('even');$('.link-externo .collection-item:odd').addClass('odd')}},onclickBuscar: function(){$('#link-buscar').click(function(e){e.preventDefault();window.location.hash='#portal-searchbox';$('.searchField').focus()})},bugfixQuerywidget: function(){if($(".QueryWidget").length===0){return false}
$.querywidget.init();$('#sort_on').val($('#form-widgets-sort_on').val());if($('#form-widgets-sort_reversed-0').attr('checked')){$('#sort_order').attr('checked',true)} else{$('#sort_order').attr('checked',false)}
$("#sort_on").live('click', function(){$('#form-widgets-sort_on').val($(this).val())});$("#sort_order").live('click', function(){if($(this).is(":checked")){$('#form-widgets-sort_reversed-0').attr('checked',true)} else{$('#form-widgets-sort_reversed-0').attr('checked',false)}});$('#formfield-form-widgets-sort_on').hide();$('#formfield-form-widgets-sort_reversed').hide()},bugfixBase: function(){if($("base").length>0&&$(".userrole-anonymous").length>0){var aCurrentUrl=document.location.href.match(/(^[^#]*)/);$("base").attr("href",aCurrentUrl[1])}},carregaDestaques: function(){if($('#featured-content').length>0){$('#featured-content').load(portal_url+'/destaques?ajax_load=1 #content > .row')}},albuns:{fixAlbumHeight: function(){if($('.template-galeria_de_albuns').length>0){var albumResponsiveResize,root;root=typeof exports!=="undefined"&&exports!==null?exports:this;root.AlbumResponsiveResize=function(){var _Singleton,_base;_Singleton=(function(){
function _Singleton(){}
_Singleton.prototype.qtd_coluna_anterior='';_Singleton.prototype.scrollbar=false;_Singleton.prototype.resize=function(){var qtd_coluna_atual;qtd_coluna_atual=1;if($(window).width()>480){qtd_coluna_atual=2}
if($(window).width()>960){qtd_coluna_atual=3}
if(this.qtd_coluna_anterior!==qtd_coluna_atual){this.qtd_coluna_anterior=qtd_coluna_atual;var top=0;var height=0;var lilist=[];var $item,$lilist;$('#gallery_albums li').each(function(index,item){$item=$(item);$item.height('auto')});$('#gallery_albums li').each(function(index,item){$item=$(item);if((top>0)&&(top!=$item.offset().top)){$lilist=$(lilist);$lilist.height(height);top=0;height=0;lilist=[]}
top=$item.offset().top;lilist.push(item);if($item.height()>height){height=$item.height()}});$lilist=$(lilist);$lilist.height(height)}};return _Singleton})();if((_base=root.AlbumResponsiveResize).instance==null){_base.instance=new _Singleton()}
return root.AlbumResponsiveResize.instance};var resize=function(){albumResponsiveResize=new root.AlbumResponsiveResize();albumResponsiveResize.resize()}
$(window).resize(function(){resize()});resize()}}}};jQuery(document).ready(function($){"use strict";PBrasil.init()});$(window).load(function(){PBrasil.albuns.fixAlbumHeight()});

/* - ++resource++collective.oembed.js - */
// http://receita.economia.gov.br/portal_javascripts/++resource++collective.oembed.js?original=1
﻿(function($){$.fn.oembed=function(url,options,embedAction){settings=$.extend(true,$.fn.oembed.defaults,options);initializeProviders();var div=document.createElement('div'),ref=document.getElementsByTagName('base')[0]||document.getElementsByTagName('script')[0];div.className='fit-vids-style';div.innerHTML='&shy;<style>\.fluid-width-video-wrapper{\
width:100%;\
position:relative;\
padding:0;\} \
\.fluid-width-video-wrapper iframe,\.fluid-width-video-wrapper object,\.fluid-width-video-wrapper embed{\
position:absolute;\
top:0;\
left:0;\
width:100%;\
height:100%;\} \</style>';ref.parentNode.insertBefore(div,ref);return this.each(function(){var container=$(this),resourceURL=(url!=null)?url:container.attr("href"),provider;if(embedAction){settings.onEmbed=embedAction} else{settings.onEmbed=function(oembedData){$.fn.oembed.insertCode(this,settings.embedMethod,oembedData)}}
if(resourceURL!=null){provider=$.fn.oembed.getOEmbedProvider(resourceURL);if(provider!=null){provider.params=getNormalizedParams(settings[provider.name])||{};provider.maxWidth=settings.maxWidth;provider.maxHeight=settings.maxHeight;embedCode(container,resourceURL,provider)} else{settings.onProviderNotFound.call(container,resourceURL)}}
return container})};var settings,activeProviders=[];$.fn.oembed.defaults={maxWidth:null,maxHeight:null,embedMethod:"replace",defaultOEmbedProvider:"plone",allowedProviders:null,disallowedProviders:null,customProviders:null,defaultProvider:null,greedy:true,onProviderNotFound: function(){},beforeEmbed: function(){},afterEmbed: function(){},onEmbed: function(){},onError: function(){},ajaxOptions:{}};
function getRequestUrl(container,externalUrl,provider){var url=provider.apiendpoint,qs=""
var i;if(url.indexOf("?")<=0)
url=url+"?";else
url=url+"&";if(provider.maxWidth!=null&&provider.params["maxwidth"]==null)
provider.params["maxwidth"]=provider.maxWidth;if(provider.maxHeight!=null&&provider.params["maxheight"]==null)
provider.params["maxheight"]=provider.maxHeight;for(i in provider.params){if(provider.params[i]!=null)
qs+="&"+escape(i)+"="+provider.params[i]}
url+="format=json&url="+escape(externalUrl)+qs ;if(container[0].dataset.maxwidth!=undefined)
url+="&maxwidth="+container[0].dataset.maxwidth;if(container[0].dataset.maxheight!=undefined)
url+="&maxheight="+maxcontainer[0].dataset.maxheight;return url};
function embedCode(container,externalUrl,embedProvider){var requestUrl=getRequestUrl(container,externalUrl,embedProvider);var ajaxopts=$.extend({url:requestUrl,type:'get',dataType:'json',success: function(data){var oembedData=$.extend({},data);switch(oembedData.type){case "photo":console.log("photo");oembedData.code=$.fn.oembed.getPhotoCode(externalUrl,oembedData);break;case "video":oembedData.code=$.fn.oembed.getVideoCode(externalUrl,oembedData);break;case "rich":oembedData.code=$.fn.oembed.getRichCode(externalUrl,oembedData);break;default:oembedData.code=$.fn.oembed.getGenericCode(externalUrl,oembedData);break}
settings.beforeEmbed.call(container,oembedData);settings.onEmbed.call(container,oembedData);settings.afterEmbed.call(container,oembedData)},error: function(xhr,ajaxOptions,thrownError){console.log(xhr.responseText);console.log(thrownError)}},settings.ajaxOptions||{});$.ajax(ajaxopts)};
function initializeProviders(){activeProviders=[];var defaultProvider,restrictedProviders=[],i,provider;if(!isNullOrEmpty(settings.allowedProviders)){for(i=0;i<$.fn.oembed.providers.length;i++){if($.inArray($.fn.oembed.providers[i].name,settings.allowedProviders)>=0)
activeProviders.push($.fn.oembed.providers[i])}
settings.greedy=false} else{activeProviders=$.fn.oembed.providers}
if(!isNullOrEmpty(settings.disallowedProviders)){for(i=0;i<activeProviders.length;i++){if($.inArray(activeProviders[i].name,settings.disallowedProviders)<0)
restrictedProviders.push(activeProviders[i])}
activeProviders=restrictedProviders;settings.greedy=false}
if(!isNullOrEmpty(settings.customProviders)){$.each(settings.customProviders, function(n,customProvider){if(customProvider instanceof $.fn.oembed.OEmbedProvider){activeProviders.push(provider)} else{provider=new $.fn.oembed.OEmbedProvider();if(provider.fromJSON(customProvider))
activeProviders.push(provider)}})}
defaultProvider=getDefaultOEmbedProvider(settings.defaultOEmbedProvider);if(settings.greedy==true){activeProviders.push(defaultProvider)}
for(i=0;i<activeProviders.length;i++){if(activeProviders[i].apiendpoint==null)
activeProviders[i].apiendpoint=defaultProvider.apiendpoint}}
function getDefaultOEmbedProvider(defaultOEmbedProvider){var url="http://oohembed.com/oohembed/";if(defaultOEmbedProvider=="embed.ly")
url="http://api.embed.ly/v1/api/oembed?";if(defaultOEmbedProvider=="plone")
url=portal_url+'/@@proxy-oembed-provider'
return new $.fn.oembed.OEmbedProvider(defaultOEmbedProvider,null,null,url,"callback")}
function getNormalizedParams(params){if(params==null)
return null;var key,normalizedParams={};for(key in params){if(key!=null)
normalizedParams[key.toLowerCase()]=params[key]}
return normalizedParams}
function isNullOrEmpty(object){if(typeof object=="undefined")
return true;if(object==null)
return true;if($.isArray(object)&&object.length==0)
return true;return false}
$.fn.oembed.insertCode=function(container,embedMethod,oembedData){if(oembedData==null)
return;switch(embedMethod){case "auto":if(container.attr("href")!=null){$.fn.oembed.insertCode(container,"append",oembedData)}
else{$.fn.oembed.insertCode(container,"replace",oembedData)};break;case "replace":if(container.hasClass("oembed-responsive")){var html=$(oembedData.code);if(html.is("iframe")||html.is("object")||html.is("embed")){var width=parseInt(html.attr("width")),height=parseInt(html.attr("height"));var ratio=height/width;container.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(ratio * 100)+"%");html.removeAttr('height').removeAttr('width');oembedData.code=html[0].outerHTML}
if(oembedData.type=="photo"){html.find('img').css('max-width',"100%");oembedData.code=html[0].outerHTML}}
container.replaceWith(oembedData.code);break;case "fill":container.html(oembedData.code);break;case "append":var oembedContainer=container.next();if(oembedContainer==null||!oembedContainer.hasClass("oembed-container")){oembedContainer=container.after('<div class="oembed-container"></div>').next(".oembed-container");if(oembedData!=null&&oembedData.provider_name!=null)
oembedContainer.toggleClass("oembed-container-"+oembedData.provider_name)}
oembedContainer.html(oembedData.code);break}};$.fn.oembed.getPhotoCode=function(url,oembedData){var code,alt=oembedData.title?oembedData.title:'';alt+=oembedData.author_name?' - '+oembedData.author_name:'';alt+=oembedData.provider_name?' - '+oembedData.provider_name:'';code='<div><a href="'+url+'" target=\'_blank\'><img src="'+oembedData.url+'" alt="'+alt+'"/></a></div>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.getVideoCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getRichCode=function(url,oembedData){var code=oembedData.html;return code};$.fn.oembed.getGenericCode=function(url,oembedData){var title=(oembedData.title!=null)?oembedData.title:url,code='<a href="'+url+'">'+title+'</a>';if(oembedData.html)
code+="<div>"+oembedData.html+"</div>";return code};$.fn.oembed.isProviderAvailable=function(url){var provider=getOEmbedProvider(url);return(provider!=null)};$.fn.oembed.getOEmbedProvider=function(url){for(var i=0;i<activeProviders.length;i++){if(activeProviders[i].matches(url))
return activeProviders[i]}
return null};$.fn.oembed.OEmbedProvider=function(name,type,urlschemesarray,apiendpoint,callbackparameter){this.name=name;this.type=type;this.urlschemes=getUrlSchemes(urlschemesarray);this.apiendpoint=apiendpoint;this.callbackparameter=callbackparameter;this.maxWidth=500;this.maxHeight=400;var i,property,regExp;this.matches=function(externalUrl){for(i=0;i<this.urlschemes.length;i++){regExp=new RegExp(this.urlschemes[i],"i");if(externalUrl.match(regExp)!=null)
return true}
return false};this.fromJSON=function(json){for(property in json){if(property!="urlschemes")
this[property]=json[property];else
this[property]=getUrlSchemes(json[property])}
return true};
function getUrlSchemes(urls){if(isNullOrEmpty(urls))
return ["."];if($.isArray(urls))
return urls;return urls.split(";")}};$.fn.oembed.providers=[]})(jQuery);

/* - ++resource++collective.z3cform.datagridfield/datagridfield.js - */
dataGridField2Functions = new Object();

jQuery(function($) {

    dataGridField2Functions.getInputOrSelect = function(node) {
        /* Get the (first) input or select form element under the given node */
        
        var inputs = node.getElementsByTagName("input");
        if(inputs.length > 0) {
            return inputs[0];
        }
        
        var selects = node.getElementsByTagName("select");
        if(selects.length > 0) {
            return selects[0];
        }

        return null;
    }

    dataGridField2Functions.getWidgetRows = function(currnode) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */
        tbody = this.getParentByClass(currnode, "datagridwidget-body");
        return this.getRows(tbody);
    }

    dataGridField2Functions.getRows = function(tbody) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */
        
        var rows = new Array()
        
        rows = $(tbody).find('.datagridwidget-row');
                      
        return rows;   
    } 

    dataGridField2Functions.autoInsertRow = function(e) {
        /* Add a new row when changing the last row 
           (i.e. the infamous auto insert feature)
        
         */
        var currnode = window.event ? window.event.srcElement : e.currentTarget;

        // fetch required data structure   
        var tbody = dataGridField2Functions.getParentByClass(currnode, "datagridwidget-body");
        var thisRow = dataGridField2Functions.getParentRow(currnode);

        // Remove the auto-append functionality from the row
        $('.auto-append > .datagridwidget-cell').unbind('change');
        $(thisRow).removeClass('auto-append');
        
        // Create a new row
        var newtr = dataGridField2Functions.createNewRow(thisRow);
        // Add auto-append functionality to our new row
        $(newtr).addClass('auto-append');
                                                            
        /* Put new row to DOM tree after our current row.  Do this before 
         * reindexing to ensure that any Javascript we insert that depends on 
         * DOM element IDs (such as plone.formwidget.autocomplete) will
         * pick up this row before any IDs get changed.  At this point, 
         * we techinically have duplicate TT IDs in our document
         * (one for this new row, one for the hidden row), but jQuery 
         * selectors will pick up elements in this new row first.
         */
        $(newtr).insertAfter(thisRow);
        $('.auto-append > .datagridwidget-cell').change(dataGridField2Functions.autoInsertRow);

        dataGridField2Functions.reindexRow(tbody, newtr, 'AA'); 
        
        // Update order index to give rows correct values
        dataGridField2Functions.updateOrderIndex(tbody,true);
    }

    dataGridField2Functions.addRowAfter = function(currnode) {
        /*
            Creates a new row after the clicked row
        */
        
        // fetch required data structure
        var tbody = this.getParentByClass(currnode, "datagridwidget-body"); 
        var thisRow = this.getParentRow(currnode); 

        var newtr = this.createNewRow(thisRow);
        if (thisRow.hasClass('auto-append') == true) {
            $(newtr).insertBefore(thisRow);
        } else {
            $(newtr).insertAfter(thisRow);
        }
        
        // update orderindex hidden fields
        this.updateOrderIndex(tbody,true);
      
    }

    dataGridField2Functions.createNewRow = function(node) { 
        /* Creates a new row 
               
           @param node A row in a table where we'll be adding the new row
        */
        var tbody = this.getParentByClass(node, "datagridwidget-body");   
        
        // hidden template row 
        var emptyRow = $(tbody).find('.datagridwidget-empty-row');
        
        var markup = $(emptyRow).clone(true);
        
        var newTr = $(markup).attr("class","datagridwidget-row");
        
        return newTr[0]
    }    


    dataGridField2Functions.removeFieldRow = function(node) {
        /* Remove the row in which the given node is found */
        var tbody = this.getParentByClass(node, "datagridwidget-body"); 
        var row = this.getParentRow(node);
        $(row).remove();
        this.updateOrderIndex(tbody,false);
    }
    
    dataGridField2Functions.moveRow = function(currnode, direction){
        /* Move the given row down one */
               
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");    
        
        var rows = this.getWidgetRows(currnode);
        
        var row = this.getParentRow(currnode);      
        if(row == null) {
            alert("Couldn't find DataGridWidget row");
            return;
        }
        
        var idx = null;
        
        // We can't use nextSibling because of blank text nodes in some browsers
        // Need to find the index of the row
        
        rows.each(function (i) {
            if (this == row[0]) {
                idx = i;
            }
        });

        // Abort if the current row wasn't found
        if(idx == null)
            return;
                
            
        // The up and down should cycle through the rows, excluding the auto-append and 
        // empty-row rows.
        var validrows = 0;
        rows.each(function (i) {
            if ($(this).hasClass('datagridwidget-empty-row') != true && $(this).hasClass('auto-append') != true) {
                validrows+=1;
            }
        });
        
        if (idx+1 == validrows) {
            if (direction == "down") {
                this.moveRowToTop(row);
            } else {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            }
            
        } else if (idx == 0) {
            if (direction == "up") {
                this.moveRowToBottom(row);
            } else {
                nextRow = rows[parseInt(idx+1)];
                this.shiftRow(row, nextRow);
            }
            
        } else {
            if (direction == "up") {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            } else {
                nextRow = rows[parseInt(idx+1)];
                this.shiftRow(row, nextRow);
            }
        }
        this.updateOrderIndex(tbody);
    }
    
    dataGridField2Functions.moveRowDown = function(currnode){
        this.moveRow(currnode, "down");
    }

    dataGridField2Functions.moveRowUp = function(currnode){
        this.moveRow(currnode, "up");
    }

    dataGridField2Functions.shiftRow = function(bottom, top){
        /* Put node top before node bottom */
        $(top).insertBefore(bottom);   
    }
    
    dataGridField2Functions.moveRowToTop = function (row) {
        rows = this.getWidgetRows(row);
        $(row).insertBefore(rows[0]);
    }
    
    dataGridField2Functions.moveRowToBottom = function (row) {
        rows = this.getWidgetRows(row);
        
        // make sure we insert the directly above any auto appended rows
        var insert_after = 0;
        rows.each(function (i) {
            if ($(this).hasClass('datagridwidget-empty-row') != true && $(this).hasClass('auto-append') != true) {
                insert_after = i;
            }
        });
        $(row).insertAfter(rows[insert_after]);
    }

    dataGridField2Functions.reindexRow = function (tbody, row, newindex) {
        var name_prefix = $(tbody).attr('data-name_prefix') + '.';
        var id_prefix = $(tbody).attr('data-id_prefix') + '-';

        $(row).find('[name^="' + name_prefix +'"]').each(function(){
            var oldname = this.name.substr(name_prefix.length);
            var oldindex1 = oldname.split('.', 1)[0];
            var oldindex2 = oldname.split('-', 1)[0];
            /* Name fields can have '-' for empty values */
            var oldindex = 0;
            if (oldindex1.length < oldindex2.length)
            {
                oldindex = oldindex1;
            } else {
                oldindex = oldindex2;
            }
            this.name = name_prefix + newindex + oldname.substr(oldindex.length);
        });
        $(row).find('[id*="' + id_prefix +'"]').each(function(){
            var regexp = new RegExp(id_prefix + ".*?-")
            this.id = this.id.replace(regexp, id_prefix + newindex + "-");
        });
        $(row).find('[for*="' + id_prefix +'"]').each(function(){
            var regexp = new RegExp(id_prefix + ".*?-")
            this.setAttribute('for', this.getAttribute('for').replace(regexp, id_prefix + newindex + "-"));
        });
        $(row).find('[class*="' + name_prefix +'"]').each(function(){
            var regexp = new RegExp(name_prefix + ".*?\\.")
            this.className = this.className.replace(regexp, name_prefix + newindex + ".");
        });
    }


    dataGridField2Functions.updateOrderIndex = function (tbody, backwards) {

        /* Split from the dataGridField2 approach here - and just re-do
         * the numbers produced by z3c.form
         */
        var name_prefix = $(tbody).attr('data-name_prefix') + '.';

        var rows = this.getRows(tbody); 
        for (var i=0; i<rows.length; i++) {
            var idx = backwards ? rows.length-i-1 : i;
            var row = rows[idx];
            if ($(row).hasClass('datagridwidget-empty-row') || $(row).hasClass('auto-append')) {
                continue
            }
            dataGridField2Functions.reindexRow(tbody, row, idx);
        }

        $(document).find('input[name="' + name_prefix + 'count"]').each(function(){
            // do not include the TT and the AA rows in the count
            var count = rows.length;
            if ($(rows[count-1]).hasClass('datagridwidget-empty-row')) {
                count--;
            }
            if ($(rows[count-1]).hasClass('auto-append')) {
                count--;
            }
            this.value = count;
        });
    }

    dataGridField2Functions.getParentElement = function(currnode, tagname) {
        /* Find the first parent node with the given tag name */

        tagname = tagname.toUpperCase();
        var parent = currnode.parentNode;

        while(parent.tagName.toUpperCase() != tagname) {
            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY") 
                return null;
        }

        return parent;
    }
    
    dataGridField2Functions.getParentRow = function (node) {
        return this.getParentByClass(node, 'datagridwidget-row')
    }
    
    dataGridField2Functions.getParentByClass = function(node, klass) {
        var parent = $(node).closest("." + klass);
        
        if (parent.length) {
            return parent;
        }
        
        return null;
    }

    dataGridField2Functions.getParentElementById = function(currnode, id) {
        /* Find the first parent node with the given id 
        
            Id is partially matched: the beginning of
            an element id matches parameter id string.
        
            Currnode: Node where ascending in DOM tree beings
            Id: Id string to look for. 
                    
        */
        
        id = id.toLowerCase();
        var parent = currnode.parentNode;

        while(true) {
           
            var parentId = parent.getAttribute("id");
            if(parentId != null) {    	
                 if(parentId.toLowerCase().substring(0, id.length) == id) break;
            }
                
            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY") 
                return null;
        }

        return parent;
    }

    /* Bind the handlers to the auto append rows */
    $('.auto-append > .datagridwidget-cell').change(dataGridField2Functions.autoInsertRow);

});

/* - ++resource++serpro.portalrfb/search.js - */
// Pega o valor do SearchableText, monta a url para o Sistema de Normas e
// e atualiza o href do botão Consultar Legislação.

function formata_texto() {
  // Formata o texto do SearchableText, já escapando os caracteres especiais.

  var st = $('#search-field').find('input[name="SearchableText"]').val();
  // Substitui espaço por '+'
  st = st.replace(/ /g, '+');
  // É necessário usar o ecape porque o Sistema de Normas utiliza url
  // codificada.
  st = escape(st)
  return st
}

$(document).ready(function () {
  $('#bt_consultar_legislacao').click(function(e) {
    var st = formata_texto();
    var atual_href = $(this).attr('href');
    var nova_href = atual_href.replace(/termoBusca=[^&]*/, 'termoBusca=' + st);
    $(this).attr('href', nova_href);
  });
});

