(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{343:function(t,e,i){"use strict";i.r(e);var r=i(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),i("p",[t._v("Huawei LiteOS 是华为面向物联网领域开发的一个基于实时内核的轻量级操作系统。基础内核支持任务管理、内存管理、时间管理、通信机制、中断管理、队列管理、事件管理、定时器等操作系统基础组件，更好地支持低功耗场景，支持 Tickless 机制，支持定时器对齐。")]),i("p",[t._v("Huawei LiteOS 自开源社区发布以来，围绕 NB-IoT 物联网市场从技术、生态、解决方案、商用支持等多维度使能合作伙伴，构建开源的物联网生态,目前已经聚合了 30+ MCU 和解决方案合作伙伴，共同推出一批开源开发套件和行业解决方案，帮助众多行业客户快速的推出物联网终端和服务，客户涵盖抄表、停车、路灯、环保、共享单车、物流等众多行业，为开发者提供 “一站式” 完整软件平台，有效降低开发门槛、缩短开发周期。")]),t._m(1),i("p",[t._v("Huawei LiteOS 是轻量级的实时操作系统，是华为IOT OS。")]),i("img",{attrs:{src:t.$withBase("/basic-arch.png"),alt:"基本框图"}}),t._m(2),t._m(3),t._m(4),t._m(5),i("p",[t._v("提供"),i("router-link",{attrs:{to:"./task.html"}},[t._v("任务")]),t._v("的创建、删除、延迟、挂起、恢复等功能，以及锁定和解锁任务调度。支持任务按优先级高低的抢占调度及同优先级时间片轮转调度。")],1),t._m(6),i("ul",[i("li",[i("strong",[t._v("信号量")]),t._v("：支持"),i("router-link",{attrs:{to:"./semaphore.html"}},[t._v("信号量")]),t._v("的创建、删除、申请和释放等功能。")],1),i("li",[i("strong",[t._v("互斥锁")]),t._v("：支持"),i("router-link",{attrs:{to:"./mutex.html"}},[t._v("互斥锁")]),t._v("的创建、删除、申请和释放等功能。")],1)]),t._m(7),i("p",[t._v("提供中断、定时器等功能。")]),i("ul",[i("li",[i("strong",[t._v("中断")]),t._v("：提供"),i("router-link",{attrs:{to:"./interrupt.html"}},[t._v("中断")]),t._v("的创建、删除、使能、禁止、请求位的清除等功能。")],1),i("li",[i("strong",[t._v("定时器")]),t._v("：提供"),i("router-link",{attrs:{to:"./swtmr.html"}},[t._v("定时器")]),t._v("的创建、删除、启动、停止等功能。")],1)]),t._m(8),i("p",[t._v("提供事件、消息队列功能。")]),i("ul",[i("li",[i("strong",[t._v("事件")]),t._v("：支持读"),i("router-link",{attrs:{to:"./event.html"}},[t._v("事件")]),t._v("和写事件功能。")],1),i("li",[i("strong",[t._v("消息队列")]),t._v("：支持"),i("router-link",{attrs:{to:"./queue.html"}},[t._v("消息队列")]),t._v("的创建、删除、发送和接收功能。")],1)]),t._m(9),t._m(10),t._m(11),i("ul",[i("li",[t._v("提供"),i("strong",[t._v("静态内存")]),t._v("和"),i("strong",[t._v("动态内存")]),t._v("两种算法，支持"),i("router-link",{attrs:{to:"./memory.html"}},[t._v("内存")]),t._v("申请、释放。目前支持的内存管理算法有固定大小的BOX算法、动态申请SLAB、DLINK算法。")],1),i("li",[t._v("提供内存统计、内存越界检测功能。")])]),t._m(12),t._m(13),t._m(14),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"技术优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术优势","aria-hidden":"true"}},[this._v("#")]),this._v(" 技术优势")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Huawei LiteOS 基础内核是最精简的 Huawei LiteOS 操作系统代码，包括"),e("strong",[this._v("任务管理、内存管理、时间管理、通信机制、中断管理、队列管理、事件管理、定时器")]),this._v("等操作系统基础组件，可以单独运行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("高实时性，高稳定性")])]),e("li",[e("p",[this._v("超小内核，基础内核体积可以裁剪至不到10K")])]),e("li",[e("p",[this._v("低功耗")])]),e("li",[e("p",[this._v("支持功能静态裁剪")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"模块简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块简介","aria-hidden":"true"}},[this._v("#")]),this._v(" 模块简介")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务","aria-hidden":"true"}},[this._v("#")]),this._v(" 任务")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"任务同步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#任务同步","aria-hidden":"true"}},[this._v("#")]),this._v(" 任务同步")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"硬件相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#硬件相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 硬件相关")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"ipc-通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ipc-通信","aria-hidden":"true"}},[this._v("#")]),this._v(" IPC 通信")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"时间管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("系统时间")]),this._v("：系统时间是由定时/计数器产生的输出脉冲触发中断而产生的。")]),e("li",[e("strong",[this._v("Tick时间")]),this._v("：Tick是操作系统调度的基本时间单位，对应的时长由系统主频及每秒Tick数决定，由用户配置。")]),e("li",[e("strong",[this._v("软件定时器")]),this._v("：以Tick为单位的定时器功能，软件定时器的超时处理函数在系统创建的Tick软中断中被调用。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"内存管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 内存管理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"支持芯片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#支持芯片","aria-hidden":"true"}},[this._v("#")]),this._v(" 支持芯片")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[t._v("支持的核")]),i("th",{staticStyle:{"text-align":"left"}},[t._v("芯片")])])]),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Cortex-M0")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("STM32L053R8Tx、ATSAMD21G18A、ATSAMD21J18A、ATSAMR21G18A、EFM32HG322F64、MKL26Z128、MKW41Z512、LPC824M201JHI33、MM32L073PF、nRF51822、NANO130KE3BN")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Cortex-M3")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("STM32F103RB、ATSAM4SD32C、EFM32GG990F1024、GD32F103VCT6、GD32150R8、GD32F190R8、GD32F207VC、MM32F103CBT6、MM32L373PS")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Cortex-M4")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("STM32F411RE、STM32F412ZG、STM32F429ZI、STM32F429IG、STM32L476RG、EFM32PG1B200F256GM48 、GD32F450IK、CC3220SF、LPC54114j256BD64、nRF52840、nRF52832、NUC472HI8AE、ATSAMG55J19、ADuCM4050LF")])]),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[t._v("Cortex-M7")]),i("td",{staticStyle:{"text-align":"left"}},[t._v("STM32F746ZG、ATSAME70Q21")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用约束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用约束","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用约束")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Huawei LiteOS 提供一套 Huawei LiteOS 接口，同时支持 CMSIS 接口，它们功能一致，但混用 CMSIS 和 Huawei LiteOS接口可能会导致不可预知的错误,例如用 CMSIS 接口申请信号量，但用 Huawei LiteOS 接口释放信号量。")]),e("li",[this._v("开发驱动程序只能用 Huawei LiteOS 的接口，上层 APP 建议用 CMSIS 接口。")])])}],!1,null,null,null);e.default=s.exports}}]);