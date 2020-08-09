
//var Keys_Window_Engine = lookFor_engine("悬浮球.js");
var Keys_Window_Engine = lookFor_engine("悬浮球.js");
function lookFor_engine(ScriptEngine_Name) {
    var EngineOne = null;
    for (var i = 0, engines_All = engines.all(); engines_All.length > i; i++) {
        if (engines_All[i].getSource().toString().indexOf(ScriptEngine_Name) != -1) {
            //engines_All[i].emit("Normal", "Overall_Search");
            EngineOne = engines_All[i];
        }
    }
    if(EngineOne == null){
        toastLog("悬浮球不存在");
        engines.myEngine().forceStop();
    }
    return EngineOne;
}
//###
var implement_i = 0;
events.on("implement_Overall_Search", function(Switch) {
    if (Switch == true) {
        implement_i++;
        Seek_Title(implement_i.toString());
    } else if (Switch == false) {
        engines.myEngine().forceStop();
    } else {
        toastLog("错误");
        engines.myEngine().forceStop();
    }
});



setInterval(() => {}, 1000)

function Create_Label(x, y, Type, sTexe, Switch_i) {
    var density = context.getResources().getDisplayMetrics().density;
    var Region_Window = floaty.window(
        <frame w="auto" h="auto" gravity="center" alpha="0.5" >
            <fab id="Label" w="46" h="46" src="@drawable/ic_translate_black_48dp" clickable="true" scaleType="fitXY" tint="#ffffff"/>
            
        </frame>
    );


    Region_Window.setPosition(x - 23 * density, y - 23 * density);
    Region_Window.Label.on("click", () => {
        Keys_Window_Engine.emit("Title", sTexe.replace(/\d.\[单选题\]|\d.\[判断题\]|\d.\[多选题\]|\n/, ""));
    });


    var clear_Label = setInterval(() => {
        if (Switch_i == implement_i) {
            try {
                //###
                var this_Position = null;
                if (Type == "text") {
                    this_Position = textContains(sTexe).findOne(500).bounds();
                } else if (Type == "desc") {
                    this_Position = descContains(sTexe).findOne(500).bounds();
                }
                if (Math.abs(this_Position.centerX() - x) > 5 || Math.abs(this_Position.top - y) > 5) {
                    log(this_Position.centerX() + "," + this_Position.top);
                    Region_Window.close();
                    clearTimeout(clear_Label);
                }
            } catch (e) {
                Region_Window.close();
                clearTimeout(clear_Label);
            }
        } else {
            Region_Window.close();
            clearTimeout(clear_Label);
        }
    }, 3 * 1000);


    return true;
}

//###
//###
function Seek_Title(Switch_i) {
    var Overall_text = textMatches(/[\S\s]{7,}/).find();
    var Overall_desc = descMatches(/[\S\s]{7,}/).find();
    //###
    //toastLog("gg");

    Text_Type("text", Overall_text, Switch_i);
    Text_Type("desc", Overall_desc, Switch_i);
    /*---别看我，我啥也不知道---*/

}

function Text_Type(Type, Overall, Switch_i) {
    for (var Overall_i = 0; Overall.length > Overall_i; Overall_i++) {
        //###
        //###
        //###
        var Title_Position = Overall[Overall_i].bounds();
        //###
        if (Overall[Overall_i].text().search(/答案|区域查题|A. |B. |C. |D. /) == -1) {
            if (Title_Position.centerX() > 0 || Title_Position.centerY() > 0 || Title_Position.centerX() < device.width || Title_Position.centerY() < device.height) {
                //###
                Create_Label(Title_Position.centerX(), Title_Position.top, Type, Overall[Overall_i].text(), Switch_i);

            }
        }


    }
}