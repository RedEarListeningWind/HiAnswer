"ui";

//###你真是个小机灵鬼
var color = "#009688";

var storageQuestionBank = storages.create("QuestionBankList");
//###
if (storageQuestionBank.contains("ExternalOpen")) {
    //###
} else {
    storageQuestionBank.put("ExternalOpen", true);
}

var Keys_Window_Engine = null;

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="Hi 答案"/>
                <tabs id="tabs"/>
            </appbar>
            <viewpager id="Home_Page" android:visibility="visible">
                <frame>
                    <vertical>
                        <list id="todoList">
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                            cardElevation="1dp" foreground="?selectableItemBackground">
                            <horizontal gravity="center_vertical">
                                <View visbility="gone" bg="{{this.color}}" h="*" w="10" />
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text id="title" text="{{this.title}}" textColor="#222222" textSize="16sp" maxLines="1" />
                                    <text id="summary" text="{{this.summary}}" textColor="#999999" textSize="14sp" maxLines="30" action="{{this.action}}"/>
                                </vertical>
                                <checkbox id="done" marginLeft="4" marginRight="6" checked="{{this.done}}" android:visibility="{{this.CVisibility}}"/>
                                <button id="ButtonOne" layout_gravity="center" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" text="{{this.Button}}" android:visibility="{{this.BVisibility}}" ButtonEvent="{{this.ButtonEvent}}"/>
                            </horizontal>
                        </card>
                    </list>
                    <button id="Start" layout_gravity="center" w="auto" h="auto" style="Widget.AppCompat.Button.Colored" text="开始"/>
                </vertical>
            </frame>
            
            <frame>
                <vertical>
                    <list h="auto" id="logList">
                        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" foreground="?selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View visbility="gone" bg="{{this.color}}" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text id="time" text="{{this.time}}" textColor="#222222" textSize="16sp" maxLines="1" />
                                <text id="logOne" h="auto" text="{{this.summary}}" textColor="#999999" textSize="14sp" maxLines="1"/>
                            </vertical>
                        </horizontal>
                    </card>
                </list>
            </vertical>
            
            <grid id="fab_Keys" spanCount="1" h="auto" w="auto" layout_gravity="bottom|right">
                
                <fab w="auto" h="auto" src="{{this}}"
                margin="16" tint="#ffffff"/>
                
            </grid>
            
            
        </frame>
    </viewpager>
    <viewpager id="Set_Up" android:visibility="gone">
        <frame>
            <ScrollView>
                <vertical>
                    <list id="QuestionBankList">
                        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" foreground="?selectableItemBackground">
                        <horizontal gravity="center_vertical">
                            <View bg="{{this.color}}" h="*" w="10" />
                            <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                <text id="title" text="{{this.title}}" textColor="#222222" textSize="16sp" maxLines="1" />
                                <text id="summary" text="{{this.summary}}" textColor="#999999" textSize="14sp" maxLines="0" />
                            </vertical>
                            <checkbox id="done" marginLeft="4" marginRight="6" checked="{{this.Enable}}" />
                        </horizontal>
                    </card>
                </list>
            </vertical>
        </ScrollView>
        <fab w="auto" h="auto" id="externalRefurbish" src="@drawable/ic_autorenew_black_48dp" layout_gravity="bottom|right" margin="16" tint="#ffffff"/>
    </frame>
    </viewpager>
    <viewpager id="About" android:visibility="gone">
        <frame>
            <vertical>
                <img id="Icon1" src="file://img/Icon.jpg"
                w="100" h="100" scaleType="fitCenter" circle="true"  borderColor="#202020"
                transformPivotX="50" transformPivotY="50"
                layout_gravity="center|top" margin="10 36 10 16"/>
                <text text="赤耳听风" textColor="black" textSize="36sp" gravity="center"/>
                <list h="auto" id="Donation">
                    <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                    cardElevation="1dp" gravity="center_vertical" foreground="?selectableItemBackground">
                    <vertical padding="18 8" h="auto">
                        <text text="{{this.text}}" textColor="#222222" textSize="16sp"/>
                        <vertical android:visibility="{{visbilityOne}}">
                            <img src="{{this.jpg}}" w="auto" h="auto" borderWidth="2dp" borderColor="#202020"
                            layout_gravity="center" margin="0" />
                        </vertical>
                    </vertical>
                    <View bg="{{this.color}}" h="*" w="10"/>
                </card>
            </list>
            <horizontal h="auto" margin="0 50 0 0">
                <text h="*" text="联系开发者：" textColor="black" textSize="26sp" gravity="center" margin="20 0 0 0"/>
                <img id="qq_Icon" src="file://img/qq_Icon.png"
                w="50" h="50" borderWidth="2dp" borderColor="#202020"
                layout_gravity="center" radius="10dp" scaleType="fitXY" margin="10 10"/>
                <img id="bilibili_Icon" src="file://img/bilibili_Icon.png"
                w="50" h="50" borderWidth="2dp" borderColor="#202020"
                layout_gravity="center" radius="10dp" scaleType="fitXY" margin="10 10"/>
                <img id="coolapk_Icon" src="https://static.coolapk.com/images/header-logo.png"
                w="50" h="50" borderWidth="2dp" borderColor="#202020"
                layout_gravity="center" radius="10dp" scaleType="fitXY" margin="10 10"/>
                
            </horizontal>
            <text text="E-mail:362819113@qq.com" textSize="26sp" textColor="black" gravity="center" />
        </vertical>
    </frame>
    <frame>
        <vertical>
            <img id="qyht_Icon" src="file://img/Logo.png" radius="25"
            w="100" h="100" borderWidth="2dp" borderColor="#202020"
            layout_gravity="center|top" margin="10 36 10 16"/>
            
            <list h="auto" id="introduction">
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp"
                cardElevation="1dp" foreground="?selectableItemBackground">
                <horizontal gravity="center_vertical">
                    <View visbility="gone" bg="{{this.color}}" h="*" w="10" />
                    <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                        <text h="50" text="{{this.title}}" textColor="#222222" textSize="36sp" maxLines="1" gravity="center"/>
                        <text h="auto" text="{{this.summary}}" textColor="#999999" textSize="20sp" />
                        <horizontal android:visibility="{{this.visibility}}">
                            <text h="auto" text="视频演示：" textColor="#999999" textSize="26sp" layout_gravity="center|left"/>
                            <img id="bilibili_Video_Icon" src="{{this.video}}"
                            w="36" h="36" borderWidth="2dp" borderColor="#202020" layout_gravity="center"
                            layout_gravity="center" radius="10dp" scaleType="fitXY" margin="0"/>
                        </horizontal>
                    </vertical>
                </horizontal>
            </card>
        </list>
    </vertical>
    </frame>
    </viewpager>
    </vertical>
    
    <vertical layout_gravity="left" bg="#ffffff" w="280">
        <img id="img1" w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
        <list id="menu">
            <horizontal bg="?selectableItemBackground" w="*">
                <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center"/>
            </horizontal>
        </list>
    </vertical>
    </drawer>

);


//###
ui.emitter.on("create_options_menu", menu => {
    menu.add("设置");
    menu.add("关于");
});
//###
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "设置":
            toast("还没有设置");
            break;
        case "关于":
            alert("关于", "Hi 答案 v0.8.8");
            break;
    }
    e.consumed = true;

});
activity.setSupportActionBar(ui.toolbar);

//###
ui.Home_Page.setTitles(["开始", "日志"]);
ui.Set_Up.setTitles(["自定义题库"]);
ui.About.setTitles(["开发者", "Hi 答案"]);
//###
ui.tabs.setupWithViewPager(ui.Home_Page);

//###
ui.toolbar.setupWithDrawer(ui.drawer);

ui.menu.setDataSource([{
        title: "主页",
        icon: "@drawable/ic_android_black_48dp"
    },
    {
        title: "设置",
        icon: "@drawable/ic_settings_black_48dp"
    },
    {
        title: "关于",
        icon: "@drawable/ic_favorite_black_48dp"
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    }
]);
ui.menu.on("item_click", item => {
    switch (item.title) {
        case "主页":
            Side_Menu("Home_Page");

            break;
        case "设置":
            Side_Menu("Set_Up");

            break;
        case "关于":
            Side_Menu("About");

            break;
        case "退出":
            engines.stopAll();
            ui.finish();
            break;

    }
});

function Side_Menu(Open) {
    ui.drawer.closeDrawer(3);
    ui.Home_Page.setVisibility(8);
    ui.Set_Up.setVisibility(8);
    ui.About.setVisibility(8);

    ui[Open].setVisibility(0);
    ui.tabs.setupWithViewPager(ui[Open]);
    threads.start(function() {
        if (auto.service != null) {
            click(device.width - 1, device.height / 2);
        }
    });
}






//###

var materialColors = ["#e91e63", "#ab47bc", "#5c6bc0", "#7e57c2", "#2196f3", "#00bcd4",
    "#26a69a", "#4caf50", "#8bc34a", "#ffeb3b", "#ffa726", "#78909c", "#8d6e63"
];
//###
var storage_Home_Page = storages.create("Cards_Date");
//###
var todoList = storage_Home_Page.get("items", [{
        title: "公告栏",
        summary: "Hi 答案\n" +
            "为什么取这个名字？\n" +
            "这源自编程入门的第1句.\n" +
            "Hello world.",
        color: "#2196f3",
        done: false,
        CVisibility: "gone",
        Button: "加入QQ群",
        BVisibility: "visible",
        ButtonEvent: "https://jq.qq.com/?_wv=1027&k=zpZCDowA"
    },
    {
        title: "Hi 答案v0.86 new 2020.06.24-14:25",
        summary: "1.扫描全屏题目\n" +
            "2.手动输入查题",
        color: "#2196f3",
        done: false,
        CVisibility: "gone",
        Button: "更新",
        BVisibility: "visible",
        ButtonEvent: "https://jq.qq.com/?_wv=1027&k=zpZCDowA"
    },
    {
        title: "无障碍",
        summary: "搜索控件文字",
        color: "#f44336",
        done: false,
        action: "android.settings.ACCESSIBILITY_SETTINGS",
        CVisibility: "visible",
        BVisibility: "gone"
    },
    {
        title: "漂浮窗",
        summary: "在其他应用上层显示,悬浮窗",
        color: "#ffeb3b",
        done: true,
        action: "android.settings.action.MANAGE_OVERLAY_PERMISSION",
        CVisibility: "visible",
        BVisibility: "gone"
    }
    /*,
    
    */
]);

ui.todoList.setDataSource(todoList);
threads.start(function() {

    Access_Web_Information("redearlisteningwind.github.io/HiAnswer/Backstage/BulletinBoard.html", 0);
});
threads.start(function() {
    Access_Web_Information("redearlisteningwind.github.io/HiAnswer/Backstage/UpdateLog.html", 1);

});

function Access_Web_Information(url, Category) {

    var r = null;
    for (var i = 0, Time = Date.now(); r == null && i <= 3; i++, Time = Date.now()) {

        try {
            r = http.get(url);

        } catch (e) {
            log(e);

            if (Category == 0) {
                log("获取公告失败");
            } else {
                log("获取更新日志失败");
            }
            while ((Date.now() - Time) < 5000 * (i + 1)) {}
        }
    }
    if (r != null) {
        var Color = materialColors[random(0, 12)];
        var WebPage = r.body.string();

        var UpdateLog = WebPage.match(/<div class="panel-heading">\n{0,1}[ \S\n^n]+[\S ]+new[ \S]+[ \S\n^<]+<\/font>\s+<\/div>/)[0].split(/<\/font>\s+<\/h3>/);
        var UpdateLog_heading = null;
        if (Category == 1) {
            log("获取更新日志成功");
            UpdateLog_heading = UpdateLog[0].replace(/<a [^<]+[^>]+>/, "").replace(/\s|<[^>]+>/g, "").replace(/new/, "  new  ").replace(/Hi/, "Hi ");
        } else {
            log("获取公告成功");
            UpdateLog_heading = UpdateLog[0].replace(/<a [^<]+[^>]+>/, "").replace(/\s|<[^>]+>/g, "").replace(/new/, "  new  ");

        }
        var UpdateLog_body = UpdateLog[1].replace(/ *\n +/g, "").replace(/<\/br>/g, "\n").replace(/<[^>]+>/g, "");

        var UpdateLog_Button = UpdateLog[0].match(/href="\S+" role="button">[\S\s^<]*<\/a>/)[0].replace(/href=[^>]+>|<[^>]+>|\s/g, "");
        var UpdateLog_Button_Link = UpdateLog[0].match(/href="\S+" role="button">[\S\s^<]*<\/a>/)[0].replace(/href="|" role="button">[\S\s]+$|\s/g, "");
        var ButtonVisibility = "gone";
        if (UpdateLog_Button == null || UpdateLog_Button == "") {
            UpdateLog_Button = "";
        } else {
            ButtonVisibility = "visible";
        }
        todoList[Category] = {
            title: UpdateLog_heading,
            summary: UpdateLog_body,
            color: Color,
            CVisibility: "gone",
            Button: UpdateLog_Button,
            BVisibility: ButtonVisibility,
            ButtonEvent: UpdateLog_Button_Link
            //color: materialColors[random(0, materialColors.length - 1)]
        };
        //###
    }

}
//###
//###
var storage_Log = storages.create("Log_Date");
if (storage_Log.contains("open")) {
    storage_Log.put("open", storage_Log.get("open") + 1);
} else {
    storage_Log.put("open", 1);
}
//###
//###
var logList = storage_Log.get("items", [{
        time: "2020年6月6日 8:3",
        summary: "这是第一条日志\n这是第一条日志\n这是第一条日志\n不重要的话我也想说三遍",
        color: "#f44336",
        //###


    },
    {
        time: "2020年6月6日 8:3",
        summary: "点击可以查看详细日志\n这是第二条日志",
        color: "#ff5722",

    }
]);

ui.logList.setDataSource(logList);
//###
var Donation_Data = [{
    text: "支持开发者？",
    visbilityOne: "gone",
    jpg: "file://img/zfb.jpg",
    color: "#f44336"
}];

ui.Donation.setDataSource(Donation_Data);

ui.Donation.on("item_click", function(item, i, itemView, listView) {
    //###
    if (item.visbilityOne == "gone") {
        item.visbilityOne = "visible";
    } else {
        item.visbilityOne = "gone";
    }
    ui.Donation.setDataSource(Donation_Data);
    if (files.copy("img/zfb.jpg", "/sdcard/Download/赤耳听风.jpg")) {
        toastLog("图片已经复制到/sdcard/Download/赤耳听风.jpg");
        toastLog("感谢您的支持");
        addLogList("\t\t感谢您的支持...\n图片已经复制到/sdcard/Download/赤耳听风.jpg", "#e91e63");
    } else {
        toastLog("感谢您的支持");
        addLogList("\t感谢您的支持", "#e91e63");
    }

});
//###
//###
var introduction = [{
        title: "Hi 答案",
        summary: "为什么取这个名字？\n" +
            "这源自编程入门的第1句.\n" +
            "\tHello world.\n" +
            "\n\t此软件制作过程中受到了很多大佬的帮助，在这里一并感谢，搜题接口部分来自网络，如果有广告信息请忽略！\n" +
            "\n\t此软件仅供用于交流学习，禁止任何人用于非法用途，此软件制作的目的是为了辅助大家学习时更快的找到参考答案，解放双手。此软件永久免费，禁止用于商业用途。尤其是在某多多或某鱼贩卖！",
        visibility: "visible",
        video: "file://img/bilibili_Icon.png",
        color: "#00bcd4"
    },
    {
        title: "免责条款",
        summary: "友情提醒:考试千万场,诚信第一场.一朝弄舞弊,十年挂南墙!\n    当你第一次开始使用本人所提供的任何软件及资源的那一刻起就将被视为对本声明全部内容的认可。同时您必须认可上述免责条款，方可使用本软件及资源。如有任何异议，建议立刻删除本软件及资源并且停止使用\n      因使用本软件而引致的任何意外、疏忽、合约毁坏、诽谤、版权或知识产权侵犯及其所造成的任何损失，本人概不负责，亦概不承担任何民事或刑事法律责任。\n     利用本软件所做出的任何软件作有品，和本人无关.",
        visibility: "gone",
        video: "@drawable/ic_help_black_48dp",
        color: "#00bcd4"
    }
];

ui.introduction.setDataSource(introduction);
ui.introduction.on("item_bind", function(itemView, itemHolder) {
    //###
    itemView.bilibili_Video_Icon.on("click", function(checked) {
        app.openUrl("https://b23.tv/BV1Vt4y197K9");
    });
});

//###

//###



/*---别看我，我啥也不知道---*/
//###
//###
ui.emitter.on("pause", () => {
    if (todoList != null) {
        storage_Home_Page.put("items", todoList);
    }
    if (logList != null) {
        storage_Log.put("items", logList);
    }

});
var isCanFinish = false;
ui.emitter.on("back_pressed", e => {
    if (!isCanFinish) {
        isCanFinish = true;
        toastLog("再返回一次就失去我了哟！");

        isCanFinishTimeout = setTimeout(() => {

            isCanFinish = false;
        }, 1000);
        e.consumed = true;
    } else {
        clearTimeout(isCanFinishTimeout);
        e.consumed = false;
    };
});
ui.todoList.on("item_bind", function(itemView, itemHolder) {
    //###
    //绑定勾选框事件
    itemView.ButtonOne.on("click", function() {
        let item = itemHolder.item;
        if (item.ButtonEvent == null || item.ButtonEvent == "#") {
            toastLog("哎呀 " + item.Button + " 迷路了");
        } else {
            app.openUrl(item.ButtonEvent);
        }

    });
});
ui.todoList.on("item_click", function(item, i, itemView, listView) {

    if (i <= 1) {
        if (itemView.summary.maxLines == "1") {
            itemView.summary.maxLines = "30";
        } else {
            itemView.summary.maxLines = "1";
        }

    } else if (i > 1 && i <= 3) {
        Authority(itemView, item);
    }
});
//*************打开无障碍权限

function Authority(itemView, item) {
    if (item.title == "漂浮窗") {

        try {
            var intent = new Intent();
            intent.setAction(item.action);
            app.startActivity(intent);
        } catch (e) {
            toast("打开漂浮窗错误");
        }
    } else {

        try {

            if (itemView.done.checked) {
                if (auto.service == null) {

                    todoList[2]["done"] = itemView.done.checked = false;
                } else {
                    auto.service.disableSelf();
                    todoList[2]["done"] = itemView.done.checked = false;
                }
            } else {
                if (auto.service == null) {
                    app.startActivity({
                        "action": item.action
                    });
                    todoList[2]["done"] = itemView.done.checked = true;
                } else {

                    todoList[2]["done"] = itemView.done.checked = true;
                }
            }

        } catch (e) {
            log(e);
            todoList[2]["done"] = itemView.done.checked = false;
        }
    }
}
//storage_Log.put("open", 5);
ui.Start.click(function() {

    if (auto.service != null) {
        //todoList[2]["done"] = ui.done.checked = true;
        //console.warn(todoList);

        //toastLog(storage_Log.get("openTime"));
        if (storage_Log.get("open") > 2) {
            if (Number(new Date().getTime()) > Number(storage_Log.get("openTime"))) {
                dialogs.confirm("淦", "觉得开发者很淦？", function() {
                    var i = 0;
                    try {
                        app.startActivity({
                            action: "android.intent.action.VIEW",
                            data: "mqqapi://card/show_pslcard?&uin=" + "362819113"
                        })

                    } catch (e) {
                        app.openUrl("https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d362819113&from=groupmessage");
                        var timeQQ = new Date().getTime();
                        i = -1;
                        threads.start(function() {
                            while (new Date().getTime() - timeQQ < 30 * 1000) {
                                //if((new Date().getTime() - timeQQ)%3000 == 0){
                                if (currentPackage() == "com.tencent.mobileqq") {
                                    i = 0;
                                }

                            }
                            //console.warn("gg");
                            if (currentPackage() != "com.tencent.mobileqq") {
                                i = 50;
                            }
                        });
                    }

                    events.observeToast();
                    events.onToast(function(toast) {
                        if ("com.tencent.mobileqq" == toast.getPackageName() && toast.getText().search("赞哦") != -1) {
                            clearInterval(Fabulous);

                        }

                    });

                    var Fabulous = setInterval(() => {
                        //toastLog("i:" + i);
                        if (i == -1) {

                        } else if (i >= 50) {
                            clearInterval(Fabulous);
                            //toastLog("50关闭")
                        } else {

                            if ("com.tencent.mobileqq" == currentPackage()) {
                                descContains("次赞").findOne().click();
                                i++;

                                if (textContains("提升点赞数").exists()) {
                                    clearInterval(Fabulous);
                                }
                            } else {
                                toastLog("点赞未完成");
                            }
                            //
                        }
                    }, 150);
                });
            }
        } else {
            storage_Log.put("openTime", Number(new Date().getTime()));
        }


        if (!engine_isNormal("悬浮球.js")) {

            Keys_Window_Engine = engines.execScriptFile("./悬浮球.js");

        } else {
            toastLog("已经打开脚本");

        }

    } else {
        //todoList[2]["done"] = ui.done.checked = false;
        toastLog("请打开无障碍权限");
    }
});

//监听Keys_Window_Engine
events.on("Keys_Window_Engine", function(Switch) {
    if (!Switch) {
        toastLog("脚本关闭成功");
        Keys_Window_Engine = null;
        logList = storage_Log.get("items");
        if (logList != null) {
            ui.logList.setDataSource(logList);
        }
    }

});


//判断脚本引擎是否存活
function engine_isNormal(ScriptEngine_Name) {
    var Normal = false;
    for (var i = 0, engines_All = engines.all(); engines_All.length > i; i++) {
        if (engines_All[i].getSource().toString().indexOf(ScriptEngine_Name) != -1) {
            //###
            Normal = true;
        }
    }
    return Normal
}

/*---别看我，我啥也不知道---*/
ui.logList.on("item_click", function(item, i, itemView, listView) {
    if (itemView.logOne.maxLines == "1") {
        itemView.logOne.maxLines = "30";
    } else {
        itemView.logOne.maxLines = "1";
    }
});
//###
var fab_Key = ['@drawable/ic_replay_black_48dp', '@drawable/ic_delete_sweep_black_48dp'];
ui.fab_Keys.setDataSource(fab_Key);

ui.fab_Keys.on("item_click", function(name, i) {
    switch (i) {
        case 0:
            logList.reverse();
            break;
        case 1:
            confirm("确定要删除所有日志吗？")
                .then(ok => {
                    if (ok) {
                        logList.splice(0, logList.length);
                        storage_Log.put("items", logList);
                    }
                });
            break;
    }
});

/*---日志添加函数---*/
function addLogList(summary, colorLeft) {

    logList.unshift({
        time: new Date().toLocaleString(),
        summary: summary,
        color: colorLeft
        //###
    });
}


//   设置页面






var WithinPath = "./备份/预定义接口.txt";
var ExternalPath = "/sdcard/Hi答案/自定义接口.js";

function 接口(args) {
    var storageQuestionBank = storages.create("QuestionBankList");
    try {
        var temporary = new Array();

        var Part = require(args.Path);
        //toastLog("执行成功");
        if (Part.length == 0) {
            toastLog(args.Path + "个数:0");
            //###
            //###
            InterfaceEvent(args.Path, args.Items, args.Open, false, args.First);
            return -1;
        }

        for (var i = 0; Part.length > i; i++) {
            if (Part[i].title == null ||
                Part[i].color == null ||
                Part[i].Enable == null ||
                Part[i].Function == null) {
                toastLog(args.Path + "的代码格式错误!");
                InterfaceEvent(args.Path, args.Items, args.Open, false, args.First);
                return -1;
            }
            Part[i].summary = Part[i].Function.toString().replace(/\n/, "");
            if (args.Items == "ExternalItems") {
                temporary.push(Part[i]);
            } else {
                toastLog("内部存储错误");
            }
        }
        Part = null;

        storageQuestionBank.put(args.Items, temporary);
        //###
        temporary = null;
        //###
        storageQuestionBank.put(args.Open, true);
        InterfaceEvent(args.Path, args.Items, args.Open, true, args.First);
    } catch (e) {
        log(e);
        //setClip(e);
        toastLog(args.Path + "的代码格式或文件错误!");
        InterfaceEvent(args.Path, args.Items, args.Open, false, args.First);

        return -1;
    }
}

function InterfaceEvent(Path, Items, Open, checked, First) {
    for (var i = 0, engines_All = engines.all(); engines_All.length > i; i++) {
        if (engines_All[i].getSource().toString().indexOf("main.js") != -1) {
            engines_All[i].emit("Interface", Path, Items, Open, checked, First);

        }
    }
    if (!checked) {
        toastLog("文件加载失败");
    }
    engines.myEngine().forceStop();
}
//监听Interface事件 
events.on("Interface", function(Path, Items, Open, checked, First) {
    if (Items == "WithinItems") {
        WithinPath = Path;
    }
    if (checked) {
        //###
        if (storageQuestionBank.get(Open) && storageQuestionBank.get(Items) != null) {
            //###
            for (var i = 0; storageQuestionBank.get(Items).length > i; i++) {
                if (Items == "ExternalItems") {
                    QuestionBankList.push(storageQuestionBank.get(Items)[i]);
                } else {
                    toastLog("内部存储错误");
                }
            }
            //###
            //###
        } else {

            log(Path + "关闭或为空");
        }
        storageQuestionBank.put("Whole", QuestionBankList);
    } else {
        storageQuestionBank.put("ExternalItems", new Array());
        storageQuestionBank.put("ExternalOpen", false);
    }
    if (First) {
        ui.QuestionBankList.setDataSource(QuestionBankList);
    }
});

//###
var QuestionBankList = new Array();

setTimeout(() => {

    if (storage_Log.get("open") == 1) {
        if (files.exists(WithinPath)) {
            //engines.execScript("预定义接口", "接口('./备份/预定义接口.js','WithinItems','WithinOpen',true);\n" + 接口.toString() + "\n" + InterfaceEvent.toString());
            if (files.copy(WithinPath, ExternalPath)) {
                //toastLog("自定义接口文件创建成功\n路径:" + ExternalPath);
                if (files.exists(ExternalPath)) {
                    exec({
                        name: "自定义接口",
                        Function: {
                            First: 接口,
                            End: InterfaceEvent
                        }
                    }, {
                        Path: ExternalPath,
                        Items: 'ExternalItems',
                        Open: 'ExternalOpen',
                        First: true
                    });

                    //storageQuestionBank.put("ExternalItems", new Array());
                    storageQuestionBank.put("ExternalOpen", true);
                    //engines.execScript("自定义接口", "接口('/sdcard/Hi答案/自定义接口.js','ExternalItems','ExternalOpen' ,false);\n" + 接口.toString() + "\n" + InterfaceEvent.toString());

                    storageQuestionBank.put("Whole", QuestionBankList);

                } else {
                    toastLog("自定义接口文件不存在");
                    storageQuestionBank.put("ExternalItems", new Array());
                    storageQuestionBank.put("ExternalOpen", false);

                }
            } else {
                storageQuestionBank.put("ExternalItems", new Array());
                storageQuestionBank.put("ExternalOpen", false);
                toastLog("自定义接口文件创建失败\n请检查储存权限");
            }
            //###

        } else {
            storageQuestionBank.put("ExternalItems", new Array());
            storageQuestionBank.put("ExternalOpen", false);
            toastLog("预定义接口文件不存在");
        }
    } else {
        QuestionBankList = storageQuestionBank.get("Whole");
        ui.QuestionBankList.setDataSource(QuestionBankList);

    }

}, 360);

function exec(action, args) {
    args = args || {};
    //toastLog(action.name);
    engines.execScript(action.name, action.Function.First.name + "(" + JSON.stringify(args) + ");\n" + action.Function.First.toString() + "\n" + action.Function.End.toString());
}

ui.externalRefurbish.on("click", () => {
    if (storageQuestionBank.contains("ExternalItems")) {
        QuestionBankList.splice(QuestionBankList.length - storageQuestionBank.get("ExternalItems").length, storageQuestionBank.get("ExternalItems").length);
        storageQuestionBank.put("ExternalItems", new Array());
        storageQuestionBank.put("ExternalOpen", false);

    } else {
        toastLog(ExternalPath + "文件数据为空");
        storageQuestionBank.put("ExternalItems", new Array());
        storageQuestionBank.put("ExternalOpen", false);
    }

    if (!storageQuestionBank.get("ExternalOpen")) {
        if (files.exists(ExternalPath)) {
            //engines.execScript("自定义接口", "接口('/sdcard/Hi答案/自定义接口.js','ExternalItems','ExternalOpen' ,false);\n" + 接口.toString() + "\n" + InterfaceEvent.toString());
            exec({
                name: "自定义接口",
                Function: {
                    First: 接口,
                    End: InterfaceEvent
                }
            }, {
                Path: ExternalPath,
                Items: 'ExternalItems',
                Open: 'ExternalOpen',
                First: false
            });

        } else {
            toastLog("自定义接口文件不存在");
            storageQuestionBank.put("ExternalItems", new Array());
            storageQuestionBank.put("ExternalOpen", false);
            if (files.copy("备份/自定义接口.txt", ExternalPath)) {
                toastLog("自定义接口文件创建成功\n路径:" + ExternalPath);
            } else {
                toastLog("自定义接口文件创建失败\n请检查储存权限");
            }
        }
    }
    storageQuestionBank.put("Whole", QuestionBankList);
});

ui.QuestionBankList.on("item_click", function(item, i, itemView, listView) {
    if (itemView.summary["maxLines"] == "0") {
        itemView.summary["maxLines"] = "30";
    } else {
        itemView.summary.maxLines = "0";
    }
});
var replaceText = '",\n        color: materialColors[random(0, 12)],\n        Enable: ';
ui.QuestionBankList.on("item_bind", function(itemView, itemHolder) {
    //###
    //绑定勾选框事件
    itemView.done.on("check", function(checked) {
        let item = itemHolder.item;
        item.Enable = checked;
        //###
        storageQuestionBank.put("Whole", QuestionBankList);
        var text = item.title + "[^E]+Enable: {0,}(false|true),";
        //###
        if (checked) {
            files.write(ExternalPath, files.read(ExternalPath).replace(new RegExp(text), item.title + replaceText + 'true,'));
        } else {
            files.write(ExternalPath, files.read(ExternalPath).replace(new RegExp(text), item.title + replaceText + 'false,'));

        }
    });

});
//###

//从storage获取todo列表









//###

var Angle = 0;
setInterval(() => {
    Angle += 2;
    Angle = Angle % 360;
    ui.Icon1.rotation = Angle;
}, 30);
//###
ui.qq_Icon.on("click", () => {
    try {
        app.startActivity({
            action: "android.intent.action.VIEW",
            data: "mqqapi://card/show_pslcard?&uin=" + "362819113"
        })
    } catch (e) {
        app.openUrl("https://ti.qq.com/open_qq/index2.html?url=mqqapi%3a%2f%2fuserprofile%2ffriend_profile_card%3fsrc_type%3dweb%26version%3d1.0%26source%3d2%26uin%3d362819113&from=groupmessage")
    }
});

ui.bilibili_Icon.on("click", () => {
    app.openUrl("https://space.bilibili.com/455181127?share_medium=android&share_source=copy_link&bbid=XYDA8D2DB73DCDB60A73DD09A9280D0A0252E&ts=1591533038391");
});
ui.coolapk_Icon.on("click", () => {
    setClip("赤耳听风");
    setClip("http://www.coolapk.com/u/1725903");
    toastLog(launchApp("酷安"));
    toastLog("开发者名称已复制到剪切板");
});
//###