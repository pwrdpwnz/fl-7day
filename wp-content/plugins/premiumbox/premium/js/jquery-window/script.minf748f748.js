jQuery(function(y){var g,M={id:"",window_class:"",insert_div:"",close_class:"",title:"",content:"",scrollContent:"",shadow:1,enable_button:0,button_title:"",button_class:"",before:function(){},after:function(){},close_after:function(){}};y.fn.JsWindow=function(t,n){g=y.extend({},M,g,n);var i=y(this),s=y.trim(g.id);s.length<1&&(s=Math.floor(1e5*Math.random())+1);var o=y.trim(g.window_class),a=y.trim(g.insert_div);0<a.length?insert_obj=y(a):insert_obj=y("body");var d=y.trim(g.close_class),e=parseInt(y.trim(g.shadow)),l=parseInt(y.trim(g.enable_button)),w=y.trim(g.button_title),r=y.trim(g.button_class),c=y.trim(g.title),_=y.trim(g.content),v=y.trim(g.scrollContent),h=g.before,u=g.after,m=g.close_after;if("show"==t){h.apply(null,[i]),y(".js_techwindow").remove(),1==e&&(insert_obj.append('<div class="standart_shadow js_techwindow"></div>'),y(".standart_shadow").show());var p="";0<v.length&&(p='<div class="standart_window_scrollcontent">'+v+"</div>");var f="";1==l&&(f='<div class="standart_window_submit"><input type="submit" class="button '+r+'" name="" value="'+w+'" /></div>');var b='<div class="standart_window '+o+' js_techwindow" id="techwindow_'+s+'"><div class="standart_windowins"> <div class="standart_window_content"><div class="standart_window_content_ins">'+_+'<div class="premium_clear"></div></div></div>'+p+f+"</div></div>";insert_obj.append(b),y("#techwindow_"+s).show(),j(),u.apply(null,[i])}else"hide"==t&&(h.apply(null,[i]),y(".js_techwindow").remove(),u.apply(null,[i]));function j(){var t=Math.ceil((y(window).height()-y(".standart_window").height())/2),n=Math.ceil((y(window).width()-y(".standart_window").width())/2);y(".standart_window").css({top:t,left:n})}return y(window).on("scroll",function(){j()}),y(window).on("resize",function(){j()}),y(".js_window_close").on("click",function(){y(".js_techwindow").remove(),m.apply(null,[y(this)])}),this}});