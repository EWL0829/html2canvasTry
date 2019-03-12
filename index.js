$(function () {
    var page = {
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
           $(document).on('click', '#cutModal', function () {
               var cutTarget = document.querySelector('#cutTarget');
               html2canvas(cutTarget, {
                   useCORS: true
               }).then(function (canvas) {
                   var timeLabel = Date.now();
                   var down = document.createElement('a');
                   var image = new Image();
                   image.crossOrigin = 'anonymous';
                   document.body.appendChild(canvas);
                   canvas.style.display = 'none';
                   image.src = canvas.toDataURL('image/png', 1.0);

                   down.href = image.src;
                   down.download = timeLabel;
                   down.click();
               });
           });
        }
    };

    $(document).ready(function () {
        page.init();
    });
});
