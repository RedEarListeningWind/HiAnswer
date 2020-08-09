importClass(android.graphics.Paint);




var Answer_Window_storage = storages.create(Answer_Window);
var Show_i = null;

setInterval(() => {}, 1000);
var Answer_Window = floaty.window(
    <frame  id="Window" alpha="0.3" android:visibility="visible">
        
        <vertical>
            
            <horizontal h="25" bg="file://img/Answer1.png">
                <img h="15" w="15" margin="3 0" src="@drawable/ic_toc_black_48dp" layout_gravity="left|bottom" tint="#ffffff"/>
                <text layout_weight="1" text="答案" textSize="13sp" margin="3 0" layout_gravity="bottom" textColor="#ffffff"/>
                <img id="Minimize" h="16" w="16" src="@drawable/ic_tab_black_48dp" margin="3 0" layout_gravity="bottom|right" tint="#ffffff"/>
                <img id="Adjust" h="16" w="16" src="@drawable/ic_settings_ethernet_black_48dp" margin="3 0" layout_gravity="bottom|right" tint="#ffffff"/>
                
            </horizontal>
            <vertical layout_weight="1" bg="#ccffffff">
                <list id="AnswerList">
                    <card w="*" h="auto" margin="3" cardCornerRadius="2dp"
                    cardElevation="1dp" foreground="?selectableItemBackground">
                    <horizontal gravity="center_vertical">
                        <View bg="{{this.color}}" h="*" w="6" />
                        <vertical layout_weight="1" h="auto" w="0" layout_weight="1">
                            <text id="title" text="{{this.title}}" textColor="#222222" textSize="10sp" />
                            
                        </vertical>
                        
                        <img w="30" h="30" src="@drawable/ic_content_paste_black_48dp" tint="#ffeb3b"/>
                    </horizontal>
                    
                </card>
            </list>
        </vertical>
        <horizontal h="25" layout_gravity="bottom" bg="file://img/AnswerEnd.png"/>
    </vertical>
    
    <fab id="Upside" w="39" h="39" src="@drawable/ic_loop_black_48dp"
    margin="16" scaleType="centerCrop" layout_gravity="bottom|right" tint="#ffffff" />
    </frame>
);
//###

if (Answer_Window_storage.contains("X") &&
    Answer_Window_storage.contains("Y")) {

    Answer_Window.setPosition(Answer_Window_storage.get("X"), Answer_Window_storage.get("Y"));
    //###

} else {
    Answer_Window.setPosition(device.width / 8, device.height / 8);
    //###
}
//###
//###
Answer_Window.exitOnClose();
var materialColors = ["#e91e63", "#ab47bc", "#5c6bc0", "#7e57c2", "#2196f3", "#00bcd4",
    "#26a69a", "#4caf50", "#8bc34a", "#ffeb3b", "#ffa726", "#78909c", "#8d6e63"
];

//###
var AnswerList = [{
        title: "...... ...   ... .  . ...",

        color: "#f44336"
    },
    {
        title: " ... . . ..      .... .... .",

        color: "#ff5722"
    },
    {
        title: " . . . . ... . . .... .... .. ",

        color: "#4caf50"
    },
    {
        title: "... .   .....   ....  . ... ...",

        color: "#2196f3"
    }
];
ui.run(function() {
    Answer_Window.AnswerList.setDataSource(AnswerList);
});
var density = context.getResources().getDisplayMetrics().density;

events.on('Answer', function(Answer) {
    if(Answer["Answer"].replace(/李恒雅\S+/g,"") != ""){
        if (Show_i == Answer.implement_i) {
            var Color = materialColors[random(0, 12)];
            AnswerList.push({
                title: Answer["Answer"],
                color: Color
            });
        } else {
            log("未加载：implement_i =" + Answer.implement_i + "\ni = " + Answer.i + "\nAnswer = " + Answer.Answer);
        }
    }

});
//
//
events.on("implement_Show_Answer", function(implement_i) {
    if (implement_i == -1) {
        engines.myEngine().forceStop();
    } else if (implement_i > 0) {
        //###
        //###
        AnswerList.splice(0, AnswerList.length);
        Show_i = implement_i;
    } else {
        toastLog("错误");
        engines.myEngine().forceStop();
    }
});





Answer_Window.AnswerList.on("item_click", function(item, i, itemView, listView) {
    clearTimeout(automatic_alpha);
    Answer_Window.Window.alpha = "0.9";
    automatic_alpha = setTimeout(() => {
        Answer_Window.Window.alpha = "0.3";
    }, 8000);

    setClip(item.title);
    toastLog("已复制:" + item.title);
});
//###
var automatic_alpha = setTimeout(() => {}, 800);
Answer_Window.Window.on("touch_down", () => {
    clearTimeout(automatic_alpha);
    Answer_Window.Window.alpha = "0.9";
    automatic_alpha = setTimeout(() => {
        Answer_Window.Window.alpha = "0.3";
    }, 8000);
});

var Answer_Minimize_Window = floaty.rawWindow(
    <frame id="Minimize_Window" alpha="0.9" android:visibility="gone">
        <img h="39dp" w="39dp" src="@drawable/ic_phone_iphone_black_48dp" tint="#000000"/>
    </frame>
);
//###

Answer_Minimize_Window.setTouchable(false);

//###
Answer_Window.Minimize.on("click", () => {
    Answer_Window.Window.setVisibility(8);
    //###
    Answer_Minimize_Window.setPosition(Answer_Window.getX(), Answer_Window.getY());
    Answer_Window.setSize(0, 0);
    Answer_Minimize_Window.Minimize_Window.setVisibility(0);
    Answer_Minimize_Window.setTouchable(true);
    //###
    //###

});
//###
Answer_Minimize_Window.Minimize_Window.on("click", () => {
    Answer_Minimize_Window.setTouchable(false);
    Answer_Minimize_Window.Minimize_Window.setVisibility(8);
    Answer_Window.Window.setVisibility(0);
    //###
    //###
    Answer_Window.setSize(device.width / 2, device.height / 3);
    //###
});
//###
Answer_Window.Adjust.on("click", () => {
    if (this.Switch == null) {
        this.Switch = true;
        //###
    } else if (this.Switch == true) {
        this.Switch = false;
        //###
        Answer_Window_storage.put("X", Answer_Window.getX());
        Answer_Window_storage.put("Y", Answer_Window.getY());
        //###
        //###
    } else if (this.Switch == false) {
        this.Switch = true;
        //###
    } else {
        console.warn("显示答案->this.Switch错误");
    }
    Answer_Window.setAdjustEnabled(!Answer_Window.isAdjustEnabled());

});

Answer_Window.Upside.on("click", () => {
    AnswerList.reverse();

});
/*---别看我，我啥也不知道---*/