(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{391:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"九、docker-容器监控之-cadvisor-influxdb-granfana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、docker-容器监控之-cadvisor-influxdb-granfana"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#%E4%B9%9D%E3%80%81docker%E5%AE%B9%E5%99%A8%E7%9B%91%E6%8E%A7%E4%B9%8Bcadvisor-influxdb-granfana"}},[s._v("#")]),s._v(" 九、Docker 容器监控之 CAdvisor+InfluxDB+Granfana")]),s._v(" "),a("h2",{attrs:{id:"_1、原生命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、原生命令"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_1%E3%80%81%E5%8E%9F%E7%94%9F%E5%91%BD%E4%BB%A4"}},[s._v("#")]),s._v(" 1、原生命令")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stats\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过docker stats命令可以很方便的看到当前宿主机上所有容器的CPU,内存以及网络流量等数据， 一般小公司够用了。。。。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 但是， docker stats统计结果只能是当前宿主机的全部容器，数据资料是实时的，没有地方存储、没有健康指标过线预警等功能")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"_2、简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、简介"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_2%E3%80%81%E7%AE%80%E4%BB%8B"}},[s._v("#")]),s._v(" 2、简介")]),s._v(" "),a("p",[s._v("CAdvisor 监控收集+InfluxDB 存储数据+Granfana 展示图表")]),s._v(" "),a("h3",{attrs:{id:"_1、cadvisor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、cadvisor"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_1%E3%80%81cadvisor"}},[s._v("#")]),s._v(" 1、CAdvisor")]),s._v(" "),a("p",[s._v("为了解决 docker stats 的问题(存储、展示)，谷歌开源的 cadvisor 诞生了，cadvisor 不仅可以搜集一台机器上所有运行的容器信息，还提供基础查询界面和 http 接口，方便其他组件如 Prometheus 进行数据抓取，或者 cadvisor + influxdb + grafna 搭配使用。")]),s._v(" "),a("p",[s._v("cAdvisor 可以对节点机器上的资源及容器进行实时监控和性能数据采集，包括 CPU 使用情况、内存使用情况、网络吞吐量及文件系统使用情况")]),s._v(" "),a("p",[s._v("Cadvisor 使用 Go 语言开发，利用 Linux 的 cgroups 获取容器的资源使用信息，在 K8S 中集成在 Kubelet 里作为默认启动项，官方标配。")]),s._v(" "),a("h3",{attrs:{id:"_2、influxdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、influxdb"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_2%E3%80%81influxdb"}},[s._v("#")]),s._v(" 2、InfluxDB")]),s._v(" "),a("p",[s._v("InfluxDB 是一个用于存储和分析时间序列数据的开源数据库。也是使用最多的一个时序数据库。")]),s._v(" "),a("p",[s._v("InfluxDB 的特点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("内置 HTTP 接口，使用方便")])]),s._v(" "),a("li",[a("p",[s._v("数据可以打标记，这样查询可以很灵活")])]),s._v(" "),a("li",[a("p",[s._v("类 SQL 的查询语句")])]),s._v(" "),a("li",[a("p",[s._v("安装管理很简单，并且读写数据很高效")])]),s._v(" "),a("li",[a("p",[s._v("能够实时查询，数据在写入时被索引后就能够被立即查出")])])]),s._v(" "),a("h3",{attrs:{id:"_3、granfana"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、granfana"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_3%E3%80%81granfana"}},[s._v("#")]),s._v(" 3、Granfana")]),s._v(" "),a("p",[s._v("Grafana 是一款用 Go 语言开发的开源数据可视化工具，可以做数据监控和数据统计，带有告警功能。目前使用 grafana 的公司有很多，如 paypal、ebay、intel 等。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("可视化：快速和灵活的客户端图形具有多种选项。面板插件为许多不同的方式可视化指标和日志。")])]),s._v(" "),a("li",[a("p",[s._v("报警：可视化地为最重要的指标定义警报规则。Grafana 将持续评估它们，并发送通知。")])]),s._v(" "),a("li",[a("p",[s._v("通知：警报更改状态时，它会发出通知。接收电子邮件通知。")])]),s._v(" "),a("li",[a("p",[s._v("动态仪表盘：使用模板变量创建动态和可重用的仪表板，这些模板变量作为下拉菜单出现在仪表板顶部。")])]),s._v(" "),a("li",[a("p",[s._v("混合数据源：在同一个图中混合不同的数据源!可以根据每个查询指定数据源。这甚至适用于自定义数据源。")])]),s._v(" "),a("li",[a("p",[s._v("注释：注释来自不同数据源图表。将鼠标悬停在事件上可以显示完整的事件元数据和标记。")])]),s._v(" "),a("li",[a("p",[s._v("过滤器：过滤器允许您动态创建新的键/值过滤器，这些过滤器将自动应用于使用该数据源的所有查询。")])])]),s._v(" "),a("h2",{attrs:{id:"_3、安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、安装"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"#_3%E3%80%81%E5%AE%89%E8%A3%85"}},[s._v("#")]),s._v(" 3、安装")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /mydocker/cig\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新建3件套组合的 docker-compose.yml")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.1'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("grafana_data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("influxdb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" tutum/influxdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" PRE_CREATE_DB=cadvisor\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8083:8083"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8086:8086"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/influxdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/data\n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cadvisor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" google/cadvisor\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" influxdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("influxsrv\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("storage_driver=influxdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("storage_driver_db=cadvisor "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("storage_driver_host=influxsrv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8086")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:8080"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/rootfs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/run"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("rw\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /var/lib/docker/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/docker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n\n "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("grafana")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"104"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" grafana/grafana\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"104"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("links")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" influxdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("influxsrv\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3000:3000"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" grafana_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/grafana\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" HTTP_USER=admin\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" HTTP_PASS=admin\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INFLUXDB_HOST=influxsrv\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INFLUXDB_PORT=8086\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INFLUXDB_NAME=cadvisor\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INFLUXDB_USER=root\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" INFLUXDB_PASS=root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动docker-compose文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览cAdvisor收集服务，http://ip:8080/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一次访问慢，请稍等")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#cadvisor也有基础的图形展现功能，这里主要用它来作数据采集")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览influxdb存储服务，http://ip:8083/")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 浏览grafana展现服务，http://ip:3000")]),s._v("\nip+3000端口的方式访问,默认帐户密码（admin/admin）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[a("strong",[s._v("配置步骤")])]),s._v(" "),a("p",[s._v("配置数据源")]),s._v(" "),a("p",[s._v("￼￼"),a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-1.4uafrxnl2so0.webp",alt:"image-20220109184646563"}})]),s._v(" "),a("p",[s._v("选择 influxdb 数据源")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-2.1wvmvlv2740w.webp",alt:"image-20220109184746150"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-3.2c3zc2od09og.webp",alt:"image-20220109184822647"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-4.50vmyuvjpjk0.webp",alt:"image-20220109184833854"}})]),s._v(" "),a("p",[s._v("配置面板 panel")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-5.5g4dlrfpr000.webp",alt:"image-20220109184919396"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-6.5j285t9cz3s0.webp",alt:"image-20220109184928762"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-7.5qqt8h42o180.webp",alt:"image-20220109184941651"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-8.96k5y2gefjs.webp",alt:"image-20220109184950608"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-9.4gv2tmzfbfg0.webp",alt:"image-20220109184959368"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/9-10.2t5lxjfyag60.webp",alt:"image-20220109185007295"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/knightxv/image-hosting@master/20230116/4-11.5yrsxwz3sms0.webp",alt:"image-20220109185007295"}})])])])}),[],!1,null,null,null);a.default=r.exports}}]);