(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{173:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"双向链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向链表","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向链表")]),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),a("h3",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本概念")]),a("p",[t._v("双向链表是指含有往前和往后两个方向的链表，即每个结点中除存放下一个节点指针外，还增加一个指向其前一个节点的指针。其头指针 head 是唯一确定的。")]),a("p",[t._v("从双向链表中的任意一个结点开始，都可以很方便地访问它的前驱结点和后继结点，这种数据结构形式使得双向链表在查找时更加方便，特别是大量数据的遍历。由于双向链表具有对称性，能方便地完成各种插入、删除等操作，但需要注意前后方向的操作。")]),a("h2",{attrs:{id:"开发指导"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发指导","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发指导")]),a("h3",{attrs:{id:"功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能","aria-hidden":"true"}},[t._v("#")]),t._v(" 功能")]),a("p",[t._v("Huawei LiteOS 系统中的双向链表模块为用户提供下面几个接口。")]),a("table",[a("thead",[a("tr",[a("th",[t._v("功能分类")]),a("th",[t._v("接口名")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("初始化链表")]),a("td",[a("code",[t._v("LOS_ListInit")])]),a("td",[t._v("对链表进行初始化")])]),a("tr",[a("td",[t._v("增加节点")]),a("td",[a("code",[t._v("LOS_ListAdd")])]),a("td",[t._v("将新节点添加到链表中")])]),a("tr",[a("td",[t._v("在链表尾端插入节点")]),a("td",[a("code",[t._v("LOS_ListTailInsert")])]),a("td",[t._v("将节点插入到双向链表尾端")])]),a("tr",[a("td",[t._v("删除节点")]),a("td",[a("code",[t._v("LOS_ListDelete")])]),a("td",[t._v("将指定的节点从链表中删除")])]),a("tr",[a("td",[t._v("判断双向链表是否为空")]),a("td",[a("code",[t._v("LOS_ListEmpty")])]),a("td",[t._v("判断链表是否为空")])]),a("tr",[a("td",[t._v("删除节点并初始化链表")]),a("td",[a("code",[t._v("LOS_ListDelInit")])]),a("td",[t._v("将指定的节点从链表中删除，并使用该节点初始化链表")])])])]),a("h3",{attrs:{id:"开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 开发流程")]),a("p",[t._v("双向链表的典型开发流程：")]),a("ol",[a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListInit")]),t._v(" 初始双向链表。")])]),a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListAdd")]),t._v(" 向链表中增加节点。")])]),a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListTailInsert")]),t._v(" 向链表尾部插入节点。")])]),a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListDelete")]),t._v(" 删除指定节点。")])]),a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListEmpty")]),t._v(" 判断链表是否为空。")])]),a("li",[a("p",[t._v("调用 "),a("code",[t._v("LOS_ListDelInit")]),t._v(" 删除指定节点并以此节点初始化链表。")])])]),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项","aria-hidden":"true"}},[t._v("#")]),t._v(" 注意事项")]),a("ul",[a("li",[t._v("需要注意节点指针前后方向的操作。")])]),a("h2",{attrs:{id:"编程实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程实例","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程实例")]),a("h3",{attrs:{id:"实例描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例描述","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例描述")]),a("p",[t._v("使用双向链表，首先要申请内存，删除节点的时候要注意释放掉内存。")]),a("p",[t._v("本实例实现如下功能：")]),a("ol",[a("li",[a("p",[t._v("调用函数进行初始化双向链表。")])]),a("li",[a("p",[t._v("增加节点。")])]),a("li",[a("p",[t._v("删除节点。")])]),a("li",[a("p",[t._v("测试操作是否成功。")])])]),a("h3",{attrs:{id:"编程示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程示例")]),a("p",[t._v("代码实现如下：")]),a("div",{staticClass:"language-c extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"stdio.h"')])]),t._v("\n"),a("span",{attrs:{class:"token macro property"}},[t._v("#"),a("span",{attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"los_list.h"')])]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" UINT32 "),a("span",{attrs:{class:"token function"}},[t._v("DLlist_sample")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VOID"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    LOS_DL_LIST DLlist "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    LOS_DL_LIST DLlistNode01 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    LOS_DL_LIST DLlistNode02 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    LOS_DL_LIST DLlistNode03 "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token constant"}},[t._v("NULL")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Initial head.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListInit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListAdd")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode01"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DLlistNode01"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstNext "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" DLlistNode01"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstPrev "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Add DLlistNode01 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListTailInsert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstNext "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstPrev "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode01"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Tail insert DLlistNode02 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListHeadInsert")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode03"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DLlistNode03"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstNext "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist "),a("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" DLlistNode03"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pstPrev "),a("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Head insert DLlistNode03 success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListDelInit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode03"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListDelete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode01"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListDelete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlistNode02"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("LOS_ListEmpty")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("DLlist"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("printf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Delete success.\\r\\n"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" LOS_OK"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("编译运行得到的结果为：")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Initial head \nAdd DLlistNode01 success \nTail insert DLlistNode02 success \nHead insert DLlistNode03 success \nDelete success  \n")])])])])}],!1,null,null,null);s.default=o.exports}}]);