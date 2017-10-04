
$(document).ready(function(){
/*
  For switching mobile and desktop tabs
*/
    $('#screen-mode input[type=radio]')
          .on('click', function(ev){
            var id = ev.currentTarget.id;
            $('.ui-view').hide();
            $('.'+id+'-view').show();
          });

    $('#text-color input[type=radio]')
          .on('click', function(ev){
            var val = ev.currentTarget.value,
                idSetForTextColor = ['#mobile_menu .first_col ul li i', 'span.btcopy', '.midcorn a', 'ul.midtimer li', '.botmenu li i', '.botmenu li a', '#mobile_menu .second_col ul li a', '#mobile_menu .bottom_area ul.botuplk li.two', '#mobile_menu .bottom_area ul.botuplk li.four', 'ul.resources li a'];
                
                idSetForTextColor.map(function(obj){
                  $(obj).css({'color':val});
                });
            $('.color3').text(val);
          });

      $('#cp1, #cp2, #cp3, #cp4')
          .colorpicker().on('changeColor', function(ev){
              console.log(ev.value);
              var colorCode = ev.value,
                  id = ev.currentTarget.id,
                  idSetForBG = [],
                  idSetForBorder = [],
                  idSetForColor = [];

              if(colorCode){
                if(id === 'cp2'){
                  idSetForBG = ['ul.resources li:not(".headermenu")', '#mobile_menu .first_col', '#mobile_menu .bottom_area ul.botuplk li.three .progress', '#mobile_menu .bottom_area .progress', '#mobile_menu .bottom_area ul.botuplk li.five span', '#mobile_menu .third_col', '.progress', 'ul.botmenu li.actv'];
                  idSetForBorder = [];

                  /* Offsets */ 
                  $('#mobile_menu .second_col').css({'border-bottom':'4px solid '+colorCode});
                  $('.color2').text(colorCode);
                }else{
                  idSetForBG = ['ul.resources li.headermenu', '#mobile_menu .bottom_area', '#mobile_menu .second_col', '.midbottom', '#mobile_menu .first_col ul li:after'];
                  idSetForBorder = ['#mobile_menu .first_col ul li', 'ul.resources li'];
                  idSetForColor = ['.breadcrumb i'];
                  $('.color1').text(colorCode);
                }

                idSetForBG.map(function(obj){
                  $(obj).css({'background-color':colorCode});
                });

                idSetForBorder.map(function(obj){
                  $(obj).css({'border-bottom':'1px solid '+colorCode});
                });

                idSetForColor.map(function(obj){
                  $(obj).css({'color':colorCode});
                });
              }
              

          });

          $(".save-prev-img").click(function() {
              var selectedChoice = $('input[name="radio-group"]:checked')[0].id;
              if(selectedChoice === 'desktop'){
                html2canvas($("#prntdesk"), {
                  onrendered: function(canvas) {
                    saveAs(canvas.toDataURL(), 'lrn-recommended-desktop.png');
                  }
                });
                html2canvas($("#prntdesk-open"), {
                  onrendered: function(canvas) {
                    saveAs(canvas.toDataURL(), 'lrn-recommended-desktop-with-menu.png');
                  }
                });
              }else{
                html2canvas($("#mobile-print"), {
                onrendered: function(canvas) {
                  saveAs(canvas.toDataURL(), 'lrn-recommended-mobile.png');
                }
              });              
              }
            });

            function saveAs(uri, filename) {
              var link = document.createElement('a');
              if (typeof link.download === 'string') {
                link.href = uri;
                link.download = filename;

                //Firefox requires the link to be in the body
                document.body.appendChild(link);

                //simulate click
                link.click();

                //remove the link when done
                document.body.removeChild(link);
              } else {
                window.open(uri);
              }
            }
            $(document).on('click', '.browse', function(){
              var file = $(this).parent().parent().parent().find('.file');
              file.trigger('click');
            });
            $(document).on('change', '.file', function(){
              $(this).parent().find('.form-control').val($(this).val().replace(/C:\\fakepath\\/i, ''));
            });
    });
