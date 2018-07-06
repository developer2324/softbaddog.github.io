(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{346:function(t,a,s){"use strict";s.r(a);var n=s(0),_=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"中断"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中断","aria-hidden":"true"}},[t._v("#")]),t._v(" 中断")]),s("h2",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),s("p",[t._v("中断是指出现需要时，CPU暂停执行当前程序，转而执行新程序的过程。即在程序运行过程中，系统出现了一个必须由CPU立即处理的事务。此时，CPU暂时中止当前程序的执行转而处理这个事务，这个过程就叫做中断。")]),s("p",[t._v("众多周知，CPU的处理速度比外设的运行速度快很多，外设可以在没有CPU介入的情况下完成一定的工作，但某些情况下需要CPU为其做一定的工作。")]),s("p",[t._v("通过中断机制，在外设不需要CPU介入时，CPU可以执行其它任务，而当外设需要CPU时通过产生中断信号使CPU立即中断当前任务来响应中断请求。这样可以使CPU避免把大量时间耗费在等待、查询外设状态的操作上，因此将大大提高系统实时性以及执行效率。")]),s("p",[t._v("Huawei LiteOS的中断支持：")]),s("ul",[s("li",[s("p",[t._v("中断初始化")])]),s("li",[s("p",[t._v("中断创建")])]),s("li",[s("p",[t._v("开/关中断")])]),s("li",[s("p",[t._v("恢复中断")])]),s("li",[s("p",[t._v("中断使能")])]),s("li",[s("p",[t._v("中断屏蔽")])])]),s("h3",{attrs:{id:"中断的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中断的介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 中断的介绍")]),s("p",[t._v("与中断相关的硬件可以划分为三类：设备、中断控制器、CPU本身。")]),s("p",[t._v("设备：发起中断的源，当设备需要请求CPU时，产生一个中断信号，该信号连接至中断控制器。")]),s("p",[t._v("中断控制器：中断控制器是CPU众多外设中的一个，它一方面接收其它外设中断引脚的输入，另一方面，它会发出中断信号给CPU。可以通过对中断控制器编程实现对中断源的优先级、触发方式、打开和关闭源等设置操作。常用的中断控制器有VIC（Vector Interrupt Controller）和GIC（General Interrupt Controller），在ARM Cortex-M系列中使用的中断控制器是NVIC（Nested Vector Interrupt Controller）。")]),s("p",[t._v("CPU：CPU会响应中断源的请求，中断当前正在执行的任务，转而执行中断处理程序。")]),s("h3",{attrs:{id:"和中断相关的名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和中断相关的名词解释","aria-hidden":"true"}},[t._v("#")]),t._v(" 和中断相关的名词解释")]),s("p",[s("strong",[t._v("中断号")]),t._v("：每个中断请求信号都会有特定的标志，使得计算机能够判断是哪个设备提出的中断请求，这个标志就是中断号。")]),s("p",[s("strong",[t._v("中断请求")]),t._v("：“紧急事件”需向CPU提出申请（发一个电脉冲信号），要求中断，及要求CPU暂停当前执行的任务，转而处理该“紧急事件”，这一申请过程称为中断申请。")]),s("p",[s("strong",[t._v("中断优先级")]),t._v("：为使系统能够及时响应并处理所有中断，系统根据中断时间的重要性和紧迫程度，将中断源分为若干个级别，称作中断优先级。Huawei LiteOS支持中断控制器的中断优先级及中断嵌套，同时中断管理未对优先级和嵌套进行限制。")]),s("p",[s("strong",[t._v("中断处理程序")]),t._v("：当外设产生中断请求后，CPU暂停当前的任务，转而响应中断申请，即执行中断处理程序。")]),s("p",[s("strong",[t._v("中断触发")]),t._v("：中断源发出并送给CPU控制信号，将接口卡上的中断触发器置“1”，表明该中断源产生了中断，要求CPU去响应该中断,CPU暂停当前任务，执行相应的中断处理程序。")]),s("p",[s("strong",[t._v("中断触发类型")]),t._v("：外部中断申请通过一个物理信号发送到NVIC，可以是电平触发或边沿触发。")]),s("p",[s("strong",[t._v("中断向量")]),t._v("：中断服务程序的入口地址。")]),s("p",[s("strong",[t._v("中断向量表")]),t._v("：存储中断向量的存储区，中断向量与中断号对应，中断向量在中断向量表中按照中断号顺序存储。")]),s("h2",{attrs:{id:"开发指导"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发指导","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发指导")]),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用场景")]),s("p",[t._v("当有中断请求产生时，CPU暂停当前的任务，转而去响应外设请求。根据需要，用户通过中断申请，注册中断处理程序，可以指定CPU响应中断请求时所执行的具体操作。")]),s("h3",{attrs:{id:"功能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),s("p",[t._v("Huawei LiteOS 系统中的中断模块为用户提供下面几种功能。")]),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("接口名")])]),s("th",[s("strong",[t._v("描述")])])])]),s("tbody",[s("tr",[s("td",[s("code",[t._v("LOS_HwiCreate")])]),s("td",[t._v("硬中断创建，注册硬中断处理程序")])]),s("tr",[s("td",[s("code",[t._v("LOS_IntUnLock")])]),s("td",[t._v("开中断")])]),s("tr",[s("td",[s("code",[t._v("LOS_IntRestore")])]),s("td",[t._v("恢复到关中断之前的状态")])]),s("tr",[s("td",[s("code",[t._v("LOS_IntLock")])]),s("td",[t._v("关中断")])]),s("tr",[s("td",[s("code",[t._v("LOS_HwiDelete")])]),s("td",[t._v("硬中断删除")])])])]),s("h3",{attrs:{id:"开发流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发流程")]),s("ol",[s("li",[s("p",[t._v("修改配置项")]),s("ul",[s("li",[s("p",[t._v("打开硬中断裁剪开关："),s("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(" 定义为 YES")])]),s("li",[s("p",[t._v("配置硬中断使用最大数："),s("code",[t._v("LOSCFG_PLATFORM_HWI_LIMIT")])])])])]),s("li",[s("p",[t._v("调用中断初始化 "),s("code",[t._v("Los_HwiInit")]),t._v(" 接口。")])]),s("li",[s("p",[t._v("调用中断创建接口 "),s("code",[t._v("LOS_HwiCreate")]),t._v(" 创建中断，根据需要使能指定中断。")])]),s("li",[s("p",[t._v("调用 "),s("code",[t._v("LOS_HwiDelete")]),t._v(" 删除中断。")])])]),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),s("ul",[s("li",[s("p",[t._v("根据具体硬件，配置支持的最大中断数及中断初始化操作的寄存器地址。")])]),s("li",[s("p",[t._v("中断处理程序耗时不能过长，影响 CPU 对中断的及时响应。")])]),s("li",[s("p",[t._v("关中断后不能执行引起调度的函数。")])]),s("li",[s("p",[t._v("中断恢复 "),s("code",[t._v("LOS_IntRestore")]),t._v(" 的入参必须是与之对应的 "),s("code",[t._v("LOS_IntLock")]),t._v(" 保存的关中断之前的PRIMASK的值。")])]),s("li",[s("p",[t._v("Cortex-M 系列处理器中 1-15 中断为内部使用，因此不建议用户去申请和创建。")])])]),s("h2",{attrs:{id:"编程实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编程实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程实例")]),s("h3",{attrs:{id:"实例描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实例描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例描述")]),s("ol",[s("li",[s("p",[t._v("初始化硬件中断")])]),s("li",[s("p",[t._v("中断注册")])]),s("li",[s("p",[t._v("触发中断")])]),s("li",[s("p",[t._v("查看打印结果")])])]),s("p",[s("strong",[t._v("前提条件：")])]),s("p",[t._v("在 los_config.h 中，将 "),s("code",[t._v("LOSCFG_PLATFORM_HWI")]),t._v(" 定义为YES。")]),s("p",[t._v("在 los_config.h 中，设置最大硬中断个数 "),s("code",[t._v("OS_HWI_MAX_USED_NUM")]),t._v(" 。")]),s("p",[t._v("目前的中断测试代码提供了基本框架，中断硬件初始化代码请用户根据开发板硬件情况在 Example_Exti0_Init() 函数中自行实现。")]),s("p",[t._v("代码实现如下：")]),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token comment"}},[t._v("/*add your IRQ init code here*/")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" VOID "),s("span",{attrs:{class:"token function"}},[t._v("User_IRQHandler")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("printf")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"\\r\\n User IRQ test\\r\\n"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nUINT32 "),s("span",{attrs:{class:"token function"}},[t._v("Example_Interrupt")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    UINTPTR uvIntSave"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    uvIntSave "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("LOS_IntLock")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token function"}},[t._v("Example_Exti0_Init")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token function"}},[t._v("LOS_HwiCreate")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("6")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" User_IRQHandler"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//创建中断")]),t._v("\n    \n    "),s("span",{attrs:{class:"token function"}},[t._v("LOS_IntRestore")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uvIntSave"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n")])])]),s("h3",{attrs:{id:"结果验证"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果验证","aria-hidden":"true"}},[t._v("#")]),t._v(" 结果验证")])])}],!1,null,null,null);a.default=_.exports}}]);