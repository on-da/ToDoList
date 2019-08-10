//タスクを追加する関数
//入力情報の取得
function addTask(){
    let inputTask=document.getElementById("inputTask");

    //入力チェック
    if(inputTask.value.length<=0){
        alert("タスク名を入力してください");
        return;
    }

    //確認メッセージの表示　
    if(window.confirm(inputTask.value+"を追加しますか？")){

　　//タスクの作成。チェックボックス追加
    let task=document.createElement("li");
    task.innerHTML='<label><input type="checkbox">'+inputTask.value+'</label>'

    //チェックボックスのイベント
    let checkbox=task.getElementsByTagName("input")[0];
    checkbox.addEventListener("change",function(event){
        task.className=checkbox.checked ? "done-task":"";
    });

    //リストのタスクの追加
    document.getElementById("taskList").appendChild(task);

　　//入力したタスクをクリア
    inputTask.value="";



}
}
