(function () {
    // フォームの送信ボタンが押されたときの処理
    Collaboflow.events.on('requestSend', function (event) {
        var errorFlag = false; // エラー判定フラグ
        var fieldIds = ['fid21', 'fid29', 'fid30', 'fid31']; // 明細のパーツID
        var hasValue = false; // どれか1つに値があるか

        // 明細をループでチェック
        for (var i = 0; i < fieldIds.length; i++) {
            var field = Collaboflow.getFieldValue(fieldIds[i]); // フィールドの値を取得
            if (field && field.trim() !== '') {
                hasValue = true;
                break; // どれか1つでも値が入っていれば判定
            }
        }

        // どれか1つでも値が入っている場合、エラーを表示
        if (hasValue) {
            errorFlag = true;
            alert('明細のいずれかに値が入力されています。すべての明細を空にしてください。');
        }

        // エラーがあれば送信を中止
        if (errorFlag) {
            event.preventDefault();
        }
    });
})();