(function() {
    "use strict";
    // 新規申請画面を開くとメッセージを表示
    collaboflow.events.on('request.input.show', function (data) {
        alert("aaa welcome! welcome! CollaboflowJavaScript API!");
    });
})();