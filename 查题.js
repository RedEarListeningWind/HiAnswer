var Show_Answer_Engine = null;

var storageQuestionBank = storages.create("QuestionBankList");


/*---别看我，我啥也不知道---*/
var Within = new Array();
var External = new Array();

if (storageQuestionBank.get("ExternalOpen")) {
    if (files.exists("/sdcard/Hi答案/自定义接口.js")) {
        External = require("/sdcard/Hi答案/自定义接口.js");
    }
}

var Question_Banks = External;
//console.warn(Question_Banks);



//###
events.on("implement_Search_Questions", function(implement_i, Topic) {
    if (implement_i == -1) {
        log("正在退出");
        engines.myEngine().forceStop();
    } else if (implement_i > 0) {
        Examination_Questions(implement_i, Topic.replace(/\n/g, ""));
    } else {
        toastLog("错误" + implement_i);
        engines.myEngine().forceStop();
    }
});

setInterval(() => {}, 5000);
//###
//Examination_Questions(1, "html是什么");
function Examination_Questions(implement_i, Topic) {

    var Show_Answer_Engine = null;
    Show_Answer_Engine_isNormal = false;
    var sj = Date.now();
    do {
        if ((sj + 2000) < Date.now()) {
            log("Show_Answer_Engine为空");
            return -1;
        }
        var engines_All = engines.all();
        for (var i = 0; engines_All.length > i; i++) {
            if (engines_All[i].getSource() == null) {
                i--;
            } else {
                if (engines_All[i].getSource().toString().indexOf("显示答案.js") != -1) {
                    Show_Answer_Engine = engines_All[i];
                    Show_Answer_Engine_isNormal = true;
                }
            }
        }


    } while (!Show_Answer_Engine_isNormal);
    //###

    //### 
    var j = threads.atomic();
    for (var i = 0; Question_Banks.length > i; i++) {
        if (Question_Banks[i]["Enable"]) {
            j = true;
            threads.start(function() {
                try {

                    var number = i;
                    j = false;
                    var Answer = Question_Banks[number].Function(Topic, number, implement_i.toString());
                    //###
                    //### Answer);
                    log(Answer);
                    Show_Answer_Engine.emit('Answer', Answer);
                } catch (e) {
                    //###

                    log("第" + number + "线程错误：" + e);

                }

            });
            while (j) {}
        }
    }

}