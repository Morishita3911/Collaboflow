(function () {
    'use strict';
    // フォームの送信ボタンが押されたときの処理
    Collaboflow.events.on('request.input.check', function (data) {
        const parts = data.parts;

        const tableData = parts['fid22'].value;
        
        alert(tableData);
        console.log(tableData);
        exit;
    });
})();