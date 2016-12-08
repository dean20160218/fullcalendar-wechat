/**
 * Created by dinghao on 2016/12/6.
 */
function selectButton() {
    console.log('data test');
    var data = JSON.parse(sessionStorage.getItem("array"));
    console.log(data.id);
    if (data.id == undefined) {
        document.getElementById("addOrModify").innerHTML="添加";
//            $("#addOrModify").html("添加");
    } else {
        console.log("456");
//            $("#addOrModify").html("修改");
    }
    console.log("test dean");
//        $('#delete').removeClass("invalid-style");
//        $('#addOrModify').removeClass("invalid-style");
//
//        $('#delete').removeAttr("disabled");
//        $('#delete').addClass("activate-delete");
//
//        $('#addOrModify').removeAttr("disabled");
//        $('#addOrModify').addClass("activate-edit");
}