(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{404:function(t,v,_){"use strict";_.r(v);var i=_(4),n=Object(i.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"icmp-协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp-协议"}},[t._v("#")]),t._v(" ICMP 协议")]),t._v(" "),v("h2",{attrs:{id:"icmp-概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#icmp-概述"}},[t._v("#")]),t._v(" ICMP 概述")]),t._v(" "),v("p",[t._v("ICMP,Internet Control Message Protocol ,Internet 控制消息协议。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("ICMP 协议是一种面向无连接的协议，用于传输出错报告控制信息。")])]),t._v(" "),v("li",[v("p",[t._v("它是一个非常重要的协议，它对于网络安全具有极其重要的意义。它属于网络层协议，主要用于在主机与路由器之间传递控制信息，包括报告错误、交换受限控制和状态信息等。")])]),t._v(" "),v("li",[v("p",[t._v("当遇到 IP 数据无法访问目标、IP 路由器无法按当前的传输速率转发数据包等情况时，会自动发送 ICMP 消息。")])])]),t._v(" "),v("p",[t._v("比如我们日常使用得比较多的 ping，就是基于 ICMP 的。")]),t._v(" "),v("h2",{attrs:{id:"ping-的原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ping-的原理"}},[t._v("#")]),t._v(" ping 的原理")]),t._v(" "),v("p",[t._v("ping，Packet Internet Groper，是一种因特网包探索器，用于测试网络连接量的程序。Ping 是工作在 TCP/IP 网络体系结构中应用层的一个服务命令， 主要是向特定的目的主机发送 ICMP（Internet Control Message Protocol 因特网报文控制协议） 请求报文，测试目的站是否可达及了解其有关状态")]),t._v(" "),v("p",[t._v("一般来说，ping 可以用来检测网络通不通。它是基于 ICMP 协议工作的。假设机器 A ping 机器 B，工作过程如下：")]),t._v(" "),v("ol",[v("li",[t._v("ping 通知系统，新建一个固定格式的 ICMP 请求数据包")]),t._v(" "),v("li",[t._v("ICMP 协议，将该数据包和目标机器 B 的 IP 地址打包，一起转交给 IP 协议层")]),t._v(" "),v("li",[t._v("IP 层协议将本机 IP 地址为源地址，机器 B 的 IP 地址为目标地址，加上一些其他的控制信息，构建一个 IP 数据包")]),t._v(" "),v("li",[t._v("先获取目标机器 B 的 MAC 地址。")]),t._v(" "),v("li",[t._v("数据链路层构建一个数据帧，目的地址是 IP 层传过来的 MAC 地址，源地址是本机的 MAC 地址")]),t._v(" "),v("li",[t._v("机器 B 收到后，对比目标地址，和自己本机的 MAC 地址是否一致，符合就处理返回，不符合就丢弃。")]),t._v(" "),v("li",[t._v("根据目的主机返回的 ICMP 回送回答报文中的时间戳，从而计算出往返时间")]),t._v(" "),v("li",[t._v("最终显示结果有这几项：发送到目的主机的 IP 地址、发送 & 收到 & 丢失的分组数、往返时间的最小、最大 & 平均值")])]),t._v(" "),v("h3",{attrs:{id:"总结-ping-的工作过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#总结-ping-的工作过程"}},[t._v("#")]),t._v(" 总结：ping 的工作过程")]),t._v(" "),v("ol",[v("li",[t._v("向目的主机发送多个 ICMP 回送请求报文")]),t._v(" "),v("li",[t._v("根据目的主机返回的回送报文的时间和成功响应的次数估算出数据包往返时间及丢包率。")])])])}),[],!1,null,null,null);v.default=n.exports}}]);