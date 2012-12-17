/**
 * WooThemes Custom Fields JavaScript
 *
 * All JavaScript logic for fields in the post meta box.
 * @since 4.8.0
 *
 */(function(e){woothemesCustomFields={adjust_form_encoding:function(){e("form#post").attr("enctype","multipart/form-data").attr("encoding","multipart/form-data")},setup_datepickers:function(){e(".woo-input-calendar, .woo_input_calendar").length&&e(".woo-input-calendar, .woo_input_calendar").each(function(){var t=e(this).parent().find("input[name=datepicker-image]").val();e(this).next("input[name=datepicker-image]").remove();e("#"+e(this).attr("id")).datepicker({showOn:"button",buttonImage:t,buttonImageOnly:!0,showAnim:"slideDown"})})},setup_timefields:function(){e(".woo_input_time").length&&e(".woo_input_time").each(function(){e("#"+e(this).attr("id")).mask("99:99")})},setup_wordcounters:function(){e(".words-count").length&&e(".words-count").each(function(){var t="",n="",r=e(this).val().length,i=e(this).val().split(/\b[\s,\.-:;]*/).length;r!=1&&(t="s");i!=1&&(n="s");if(e(this).val()==""){n="s";i="0"}e(this).parent().find(".counter").html(r+" character"+t+", "+i+" word"+n);e(this).keyup(function(){var t="",n="",r=e(this).val().length,i=e(this).val().split(/\b[\s,\.-:;]*/).length;r!=1&&(t="s");i!=1&&(n="s");if(e(this).val()==""){n=="s";i="0"}e(this).parent().find(".counter").html(r+" character"+t+", "+i+" word"+n)})})},setup_image_selectors:function(){if(e(".woo-meta-radio-img-img, .woo-radio-img-img").length){e(".woo-meta-radio-img-img, .woo-radio-img-img").click(function(){e(this).parent().parent().find(".woo-meta-radio-img-img").removeClass("woo-meta-radio-img-selected");e(this).parent().parent().find(".woo-radio-img-img").removeClass("woo-radio-img-selected");e(this).addClass("woo-meta-radio-img-selected").addClass("woo-radio-img-selected")});e(".woo-meta-radio-img-label, .woo-meta-radio-img-radio, .woo-radio-img-label, .woo-radio-img-radio").hide();e(".woo-meta-radio-img-img, .woo-radio-img-img").show()}},setup_colourpickers:function(){jQuery().ColorPicker&&e(".section-typography, .section-border, .section-color").length&&e(".section-typography, .section-border, .section-color").each(function(){var t=e(this).find(".woo-color").attr("id"),n=e(this).find(".woo-color").val(),r=t+="_picker";if(e(this).hasClass("section-typography")||e(this).hasClass("section-border"))t+="_color";e("#"+r).children("div").css("backgroundColor",n);e("#"+r).ColorPicker({color:n,onShow:function(e){jQuery(e).fadeIn(200);return!1},onHide:function(e){jQuery(e).fadeOut(200);return!1},onChange:function(t,n,i){e("#"+r).children("div").css("backgroundColor","#"+n);e("#"+r).next("input").attr("value","#"+n)}})})},setup_field_tabber:function(){e(".wooframework-tabs").tabs()},setup_upload_titletest:function(){if(e("input#title").length){var t=e("input#title").attr("value");t==""&&e(".woo_metabox_fields .button-highlighted").after('<em class="woo_red_note">Please add a Title before uploading a file</em>')}}};e(document).ready(function(){woothemesCustomFields.adjust_form_encoding();woothemesCustomFields.setup_datepickers();woothemesCustomFields.setup_timefields();woothemesCustomFields.setup_wordcounters();woothemesCustomFields.setup_image_selectors();woothemesCustomFields.setup_colourpickers();woothemesCustomFields.setup_upload_titletest();woothemesCustomFields.setup_field_tabber()})})(jQuery);