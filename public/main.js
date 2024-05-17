function author() {
    let dialog = document.getElementById('dialog');
    let dialog_content = document.getElementById('dialog-content');
    let dialog_titel = document.getElementById("dialog-title");
    dialog_content.innerHTML = "行不更名，坐不改姓，在下张某人";
    dialog_titel.innerHTML = "作者";
    dialog.showModal();
}

function about() {
    let dialog = document.getElementById('dialog');
    let dialog_content = document.getElementById('dialog-content');
    let dialog_titel = document.getElementById("dialog-title");
    dialog_content.innerHTML =  `本网站专为<del>懒人</del>家姐开发<br>懒人导航网，让您吃嘛嘛香，身体倍儿棒👍`;
    dialog_titel.innerHTML = "关于";
    dialog.showModal();
}


function exit() {
    let dialog = document.getElementById('dialog');
    dialog.close();
}