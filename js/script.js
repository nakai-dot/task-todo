$(document).ready(function() {
    // タスク追加
    $("#add-btn").click(function() {
        let taskText = $("#todo-input").val().trim();
        if (taskText !== "") {
            let newTask = $("<li>").addClass("todo-item").html(`
                <span class="task">${taskText}</span>
                <button class="delete-btn">削除</button>
            `);
            $("#todo-list").append(newTask);
            $("#todo-input").val(""); // 入力欄クリア
        }
    });

    // タスク削除
    $(document).on("click", ".delete-btn", function() {
        $(this).parent().remove();
    });

    // タスク完了（取り消し線）
    $(document).on("click", ".task", function() {
        $(this).toggleClass("completed");
    });
});
