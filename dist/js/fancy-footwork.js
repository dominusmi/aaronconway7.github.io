function typed(){$(".typed").typed({stringsElement:$("#typed-strings"),typeSpeed:125,contentType:"text",callback:function(){$("#hello-section .content h1").addClass("loaded")}})}function typed2(){$(".typed-2").typed({strings:["Hello.","Hi.","Sup.","What's gwanin?","Yo.","What's up?"],typeSpeed:30,loop:!0,contentType:"text"})}function portfolioDescriptionLoad(){$("#portfolio-section .description .loading .loading-bar").addClass("loaded"),setTimeout(function(){$("#portfolio-section .description .loading").fadeOut(),$("#portfolio-section .description .content").show(),$("#portfolio-section .description .close").show()},3e3)}function portfolioDescriptionUnLoad(){$("#portfolio-section .description .loading .loading-bar").removeClass("loaded"),$("#portfolio-section .description .loading").show(),$("#portfolio-section .description .content").hide(),$("#portfolio-section .description .close").hide()}function portfolioDescription(){$("#portfolio-section .work").click(function(){$.fn.fullpage.setAutoScrolling(!1),$(this).parents(".slide").find(".description").addClass("is-open"),$("body").css("overflow","hidden"),$("#fp-nav").hide(),$(".fp-slidesNav").hide(),portfolioDescriptionLoad()}),$("#portfolio-section .description .close span").click(function(){$.fn.fullpage.setAutoScrolling(!0),$(this).parents(".description").removeClass("is-open"),$("body").css("overflow","visible"),$("#fp-nav").show(),$(".fp-slidesNav").show(),setTimeout(function(){portfolioDescriptionUnLoad()},1e3)})}$(window).on("load",function(){setTimeout(function(){$("#loader").fadeOut(1e3,function(){$(".universe").fadeIn(1e3),setTimeout(typed,1e3),setTimeout(function(){$("#fp-nav").show()},1e3)})},3e3)}),$(document).ready(function(){typed2(),portfolioDescription()});