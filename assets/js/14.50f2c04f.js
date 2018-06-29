(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{182:function(t,s,a){"use strict";a.r(s);var n=a(0),_=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"软件定时器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件定时器","aria-hidden":"true"}},[t._v("#")]),t._v(" 软件定时器")]),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),a("p",[a("strong",[t._v("软件定时器")]),t._v("，是基于系统 Tick 时钟中断且由软件来模拟的定时器，当经过设定的 Tick 时钟计数值后会触发用户定义的回调函数。定时精度与系统 Tick 时钟的周期有关。")]),a("p",[t._v("硬件定时器受硬件的限制，数量上不足以满足用户的实际需求，因此为了满足用户需求，提供更多的定时器，Huawei LiteOS 操作系统提供软件定时器功能。 软件定时器扩展了定时器的数量，允许创建更多的定时业务。")]),a("p",[t._v("软件定时器功能上支持：")]),a("ul",[a("li",[a("p",[t._v("静态裁剪：能通过宏关闭软件定时器功能。")])]),a("li",[a("p",[t._v("软件定时器创建。")])]),a("li",[a("p",[t._v("软件定时器启动。")])]),a("li",[a("p",[t._v("软件定时器停止。")])]),a("li",[a("p",[t._v("软件定时器删除。")])]),a("li",[a("p",[t._v("软件定时器剩余Tick数获取")])])]),a("h3",{attrs:{id:"运作机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运作机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 运作机制")]),a("p",[t._v("软件定时器是系统资源，在模块初始化的时候已经分配了一块连续的内存，系统支持的最大定时器个数由 "),a("code",[t._v("los_config.h")]),t._v(" 中的 "),a("code",[t._v("LOSCFG_BASE_CORE_SWTMR_LIMIT")]),t._v(" 宏配置。")]),a("p",[t._v("软件定时器使用了系统的一个队列和一个任务资源，软件定时器的触发遵循队列规则，先进先出。定时时间短的定时器总是比定时时间长的靠近队列头，满足优先被触发的准则。")]),a("p",[t._v("软件定时器以 Tick 为基本计时单位，当用户创建并启动一个软件定时器时，Huawei LiteOS 会根据当前系统 Tick 时间及用户设置的定时间隔确定该定时器的到期 Tick 时间，并将该定时器控制结构挂入计时全局链表。")]),a("p",[t._v("当 Tick 中断到来时，在 Tick 中断处理函数中扫描软件定时器的计时全局链表，看是否有定时器超时，若有则将超时的定时器记录下来。")]),a("p",[t._v("Tick 中断处理函数结束后，软件定时器任务（优先级为最高）被唤醒，在该任务中调用之前记录下来的定时器的超时回调函数。")]),a("p",[a("strong",[t._v("定时器状态")])]),a("ul",[a("li",[t._v("OS_SWTMR_STATUS_UNUSED（未使用）")])]),a("p",[t._v("系统在定时器模块初始化的时候将系统中所有定时器资源初始化成该状态。")]),a("ul",[a("li",[t._v("OS_SWTMR_STATUS_CREATED（创建未启动/停止）")])]),a("p",[t._v("在未使用状态下调用 "),a("code",[t._v("LOS_SwtmrCreate")]),t._v(" 接口或者启动后调用 "),a("code",[t._v("LOS_SwtmrStop")]),t._v(" 接口后，定时器将变成该状态。")]),a("ul",[a("li",[t._v("OS_SWTMR_STATUS_TICKING（计数）")])]),a("p",[t._v("在定时器创建后调用 "),a("code",[t._v("LOS_SwtmrStart")]),t._v(" 接口，定时器将变成该状态，表示定时器运行时的状态。")]),a("p",[a("strong",[t._v("定时器模式")])]),a("p",[t._v("Huawei LiteOS 的软件定时器提供两类定时器机制：")]),a("ul",[a("li",[a("p",[t._v("第一类是单次触发定时器，这类定时器在启动后只会触发一次定时器事件，然后定时器自动删除。")])]),a("li",[a("p",[t._v("第二类是周期触发定时器，这类定时器会周期性的触发定时器事件，直到用户手动地停止定时器，否则将永远持续执行下去。")])])]),a("h2",{attrs:{id:"开发指导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发指导","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发指导")]),a("h3",{attrs:{id:"使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),a("ul",[a("li",[a("p",[t._v("创建一个单次触发的定时器，超时后执行用户自定义的回调函数。")])]),a("li",[a("p",[t._v("创建一个周期性触发的定时器，超时后执行用户自定义的回调函数。")])])]),a("h3",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),a("p",[t._v("Huawei LiteOS系统中的软件定时器模块为用户提供下面几种功能，下面具体的API详见软件定时器对外接口手册。")]),a("table",[a("thead",[a("tr",[a("th",[t._v("功能分类")]),a("th",[t._v("接口名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("创建、删除定时器")]),a("td",[a("code",[t._v("LOS_SwtmrCreate")])]),a("td",[t._v("创建定时器")])]),a("tr",[a("td"),a("td",[a("code",[t._v("LOS_SwtmrDelete")])]),a("td",[t._v("删除定时器")])]),a("tr",[a("td",[t._v("启动、停止定时器")]),a("td",[a("code",[t._v("LOS_SwtmrStart")])]),a("td",[t._v("启动定时器")])]),a("tr",[a("td"),a("td",[a("code",[t._v("LOS_SwtmrStop")])]),a("td",[t._v("停止定时器")])]),a("tr",[a("td",[t._v("获得软件定时器剩余Tick数")]),a("td",[a("code",[t._v("LOS_SwtmrTimeGet")])]),a("td",[t._v("获得软件定时器剩余Tick数")])])])]),a("h3",{attrs:{id:"开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发流程")]),a("p",[t._v("软件定时器的典型开发流程：")]),a("ol",[a("li",[a("p",[t._v("配置软件定时器。")]),a("ul",[a("li",[a("p",[t._v("确认配置项 "),a("code",[t._v("LOSCFG_BASE_CORE_SWTMR")]),t._v(" 和 "),a("code",[t._v("LOSCFG_BASE_IPC_QUEUE")]),t._v(" 为 "),a("code",[t._v("YES")]),t._v(" 打开状态；")])]),a("li",[a("p",[t._v("配置 "),a("code",[t._v("LOSCFG_BASE_CORE_SWTMR_LIMIT")]),t._v(" 最大支持的软件定时器数；")])]),a("li",[a("p",[t._v("配置 "),a("code",[t._v("OS_SWTMR_HANDLE_QUEUE_SIZE")]),t._v(" 软件定时器队列最大长度；")])])])]),a("li",[a("p",[t._v("创建定时器 "),a("code",[t._v("LOS_SwtmrCreate")]),t._v("。")]),a("ul",[a("li",[a("p",[t._v("创建一个指定计时时长、指定超时处理函数、指定触发模式的软件定时器；")])]),a("li",[a("p",[t._v("返回函数运行结果，成功或失败；")])])])]),a("li",[a("p",[t._v("启动定时器 "),a("code",[t._v("LOS_SwtmrStart")]),t._v("。")])]),a("li",[a("p",[t._v("获得软件定时器剩余 Tick 数 "),a("code",[t._v("LOS_SwtmrTimeGet")]),t._v("。")])]),a("li",[a("p",[t._v("停止定时器 "),a("code",[t._v("LOS_SwtmrStop")]),t._v("。")])]),a("li",[a("p",[t._v("删除定时器 "),a("code",[t._v("LOS_SwtmrDelete")]),t._v("。")])])]),a("h3",{attrs:{id:"软件定时器错误码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件定时器错误码","aria-hidden":"true"}},[t._v("#")]),t._v(" 软件定时器错误码")]),a("p",[t._v("对软件定时器存在失败可能性的操作，包括创建、删除、暂停、重启定时器等等，均需要返回对应的错误码，以便快速定位错误原因。")]),a("table",[a("thead",[a("tr",[a("th",[t._v("序号")]),a("th",[t._v("定义")]),a("th",[t._v("实际数值")]),a("th",[t._v("描述")]),a("th",[t._v("参考解决方案")])])]),a("tbody",[a("tr",[a("td",[t._v("1")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_PTR_NULL")])]),a("td",[t._v("0x02000300")]),a("td",[t._v("软件定时器回调函数为空")]),a("td",[t._v("定义软件定时器回调函数")])]),a("tr",[a("td",[t._v("2")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_INTERVAL_NOT_SUITED")])]),a("td",[t._v("0x02000301")]),a("td",[t._v("软件定时器间隔时间为0")]),a("td",[t._v("重新定义间隔时间")])]),a("tr",[a("td",[t._v("3")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_MODE_INVALID")])]),a("td",[t._v("0x02000302")]),a("td",[t._v("不正确的软件定时器模式")]),a("td",[t._v("确认软件定时器模式，范围为[0,2]")])]),a("tr",[a("td",[t._v("4")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_RET_PTR_NULL")])]),a("td",[t._v("0x02000303")]),a("td",[t._v("软件定时器ID指针入参为NULL")]),a("td",[t._v("定义ID变量，传入指针")])]),a("tr",[a("td",[t._v("5")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_MAXSIZE")])]),a("td",[t._v("0x02000304")]),a("td",[t._v("软件定时器个数超过最大值")]),a("td",[t._v("重新定义软件定时器最大个数，或者等待一个软件定时器释放资源")])]),a("tr",[a("td",[t._v("6")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_ID_INVALID")])]),a("td",[t._v("0x02000305")]),a("td",[t._v("不正确的软件定时器ID入参")]),a("td",[t._v("确保入参合法")])]),a("tr",[a("td",[t._v("7")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_NOT_CREATED")])]),a("td",[t._v("0x02000306")]),a("td",[t._v("软件定时器未创建")]),a("td",[t._v("创建软件定时器")])]),a("tr",[a("td",[t._v("8")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_NO_MEMORY")])]),a("td",[t._v("0x02000307")]),a("td",[t._v("软件定时器链表创建内存不足")]),a("td",[t._v("申请一块足够大的内存供软件定时器使用")])]),a("tr",[a("td",[t._v("9")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_MAXSIZE_INVALID")])]),a("td",[t._v("0x02000308")]),a("td",[t._v("不正确的软件定时器个数最大值")]),a("td",[t._v("重新定义该值")])]),a("tr",[a("td",[t._v("10")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_HWI_ACTIVE")])]),a("td",[t._v("0x02000309")]),a("td",[t._v("在中断中使用定时器")]),a("td",[t._v("修改源代码确保不在中断中使用")])]),a("tr",[a("td",[t._v("11")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_HANDLER_POOL_NO_MEM")])]),a("td",[t._v("0x0200030a")]),a("td",[t._v("membox内存不足")]),a("td",[t._v("扩大内存")])]),a("tr",[a("td",[t._v("12")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_QUEUE_CREATE_FAILED")])]),a("td",[t._v("0x0200030b")]),a("td",[t._v("软件定时器队列创建失败")]),a("td",[t._v("检查用以创建队列的内存是否足够")])]),a("tr",[a("td",[t._v("13")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_TASK_CREATE_FAILED")])]),a("td",[t._v("0x0200030c")]),a("td",[t._v("软件定时器任务创建失败")]),a("td",[t._v("检查用以创建软件定时器任务的内存是否足够并重新创建")])]),a("tr",[a("td",[t._v("14")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_NOT_STARTED")])]),a("td",[t._v("0x0200030d")]),a("td",[t._v("未启动软件定时器")]),a("td",[t._v("启动软件定时器")])]),a("tr",[a("td",[t._v("15")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_STATUS_INVALID")])]),a("td",[t._v("0x0200030e")]),a("td",[t._v("不正确的软件定时器状态")]),a("td",[t._v("检查确认软件定时器状态")])]),a("tr",[a("td",[t._v("16")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_SORTLIST_NULL")])]),a("td",[t._v("null")]),a("td",[t._v("暂无")]),a("td",[t._v("该错误码暂不使用")])]),a("tr",[a("td",[t._v("17")]),a("td",[a("code",[t._v("LOS_ERRNO_SWTMR_TICK_PTR_NULL")])]),a("td",[t._v("0x02000310")]),a("td",[t._v("用以获取软件定时器超时tick数的入参指针为NULL")]),a("td",[t._v("创建一个有效的变量")])])])]),a("p",[a("strong",[t._v("错误码定义：")])]),a("p",[t._v("错误码是一个 32 位的存储单元，31~24 位表示错误等级，23~16 位表示错误码标志，15~8 位代表错误码所属模块，7~0 位表示错误码序号，如下")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" LOS_ERRNO_OS_NORMAL(MID,ERRNO)  \\\n(LOS_ERRTYPE_NORMAL | LOS_ERRNO_OS_ID | ((UINT32)(MID) << 8) | (ERRNO))")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("ul",[a("li",[a("code",[t._v("LOS_ERRTYPE_NORMAL")]),t._v(" ：Define the error level as critical")]),a("li",[a("code",[t._v("LOS_ERRNO_OS_ID")]),t._v(" ：OS error code flag.")]),a("li",[a("code",[t._v("MID")]),t._v(" ：OS_MOUDLE_ID")]),a("li",[a("code",[t._v("ERRNO")]),t._v(" ：error ID number")])]),a("p",[t._v("例如：")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" LOS_ERRNO_SWTMR_PTR_NULL  \\\nLOS_ERRNO_OS_ERROR(LOS_MOD_SWTMR, 0x00)  ")]),t._v("\n")])])])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),a("ul",[a("li",[a("p",[t._v("软件定时器的回调函数中不要做过多操作，不要使用可能引起任务挂起或者阻塞的接口或操作。")])]),a("li",[a("p",[t._v("软件定时器使用了系统的"),a("strong",[t._v("一个队列")]),t._v("和"),a("strong",[t._v("一个任务资源")]),t._v("，软件定时器任务的优先级设定为 0，且不允许修改 。")])]),a("li",[a("p",[t._v("系统可配置的软件定时器资源个数是指：整个系统可使用的软件定时器资源总个数，而并非是用户可使用的软件定时器资源个数。例如：系统软件定时器多占用一个软件定时器资源数，那么用户能使用的软件定时器资源就会减少一个。")])]),a("li",[a("p",[t._v("创建单次软件定时器，该定时器超时执行完回调函数后，系统会自动删除该软件定时器，并回收资源。")])])]),a("h2",{attrs:{id:"编程实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程实例")]),a("h3",{attrs:{id:"实例描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例描述")]),a("p",[t._v("在下面的例子中，演示如下功能：")]),a("ol",[a("li",[a("p",[t._v("软件定时器创建、启动、删除、暂停、重启操作。")])]),a("li",[a("p",[t._v("单次软件定时器，周期软件定时器使用方法。")])])]),a("h3",{attrs:{id:"编程示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程示例")]),a("p",[t._v("前提条件：")]),a("ul",[a("li",[a("p",[t._v("在 "),a("code",[t._v("los_config.h")]),t._v(" 中，将 "),a("code",[t._v("LOSCFG_BASE_CORE_SWTMR")]),t._v(" 配置项打开。")])]),a("li",[a("p",[t._v("配置好 "),a("code",[t._v("LOSCFG_BASE_CORE_SWTMR_LIMIT")]),t._v(" 最大支持的软件定时器数。")])]),a("li",[a("p",[t._v("配置好 "),a("code",[t._v("OS_SWTMR_HANDLE_QUEUE_SIZE")]),t._v(" 软件定时器队列最大长度。")])])]),a("p",[t._v("代码实现如下：")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" Timer1_Callback    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" Timer2_Callback    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" UINT32 g_timercount1 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" UINT32 g_timercount2 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Timer1_Callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//回调函数1")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" tick_last1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    g_timercount1 "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    tick_last1"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_TickCountGet")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//获取当前Tick数")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"g_timercount1=%d.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("g_timercount1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"tick_last1=%lu.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tick_last1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Timer2_Callback")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32 arg"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//回调函数2")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT32 uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" tick_last2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    tick_last2"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UINT32"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_TickCountGet")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    g_timercount2 "),a("span",{attrs:{class:"token operator"}},[t._v("++")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"g_timercount2=%d.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("g_timercount2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"tick_last2=%lu.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tick_last2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_InspectStatusSetByID")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_INSPECT_TIMER"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("LOS_INSPECT_STU_SUCCESS"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Set Inspect Status Err.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nUINT32 "),a("span",{attrs:{class:"token function"}},[t._v("Example_swTimer")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINT16 id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    UINT16 id2"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// timer id")]),t._v("\n    UINT32 uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*创建单次软件定时器，Tick数为1000，启动到1000Tick数时执行回调函数1 */")]),t._v(" \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LOS_SWTMR_MODE_ONCE"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Timer1_Callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"create Timer1 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"create Timer1 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token comment"}},[t._v("/*创建周期性软件定时器，每100Tick数执行回调函数2 */")]),t._v("\n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrCreate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("LOS_SWTMR_MODE_PERIOD"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Timer2_Callback"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("id2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"create Timer2 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"create Timer2 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//启动单次软件定时器")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"start Timer1 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"start Timer1 sucess.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("200")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//延时200Tick数")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//停止软件定时器")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"stop Timer1 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"stop Timer1 sucess.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"start Timer1 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrDelete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id1"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//删除软件定时器")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"delete Timer1 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"delete Timer1 sucess.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStart")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{attrs:{class:"token comment"}},[t._v("//启动周期性软件定时器")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"start Timer2 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"start Timer2 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_TaskDelay")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrStop")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"stop Timer2 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    uwRet "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("LOS_SwtmrDelete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id2"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("LOS_OK "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" uwRet"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"delete Timer2 failed.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),a("h3",{attrs:{id:"结果验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 结果验证")]),a("p",[t._v("得到的结果为：")])])}],!1,null,null,null);s.default=_.exports}}]);