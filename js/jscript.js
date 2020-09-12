
function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
    $( ".count" ).each(function() {
    isOnView = isElementVisible($(this));
        if(isOnView && !$(this).hasClass('Starting')){
           $(this).addClass('Starting');
           startTimer($(this));
        }
    });
});

function startTimer($this) {
    setTimeout(function () {
      jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
        duration: 4000,
        easing: 'swing',
        step: function () {
          $this.text(Math.ceil(this.Counter));
        }
      });
    }, 500); 
}







// $('.count').each(function () {
//     var $this = $(this);
//     jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//       duration: 2000,
//       easing: 'swing',
//       step: function () {
//         $this.text(Math.ceil(this.Counter));
//       }
//     });
//   });


