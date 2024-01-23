(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{424:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"五、nginx-配置与应用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、nginx-配置与应用场景"}},[s._v("#")]),s._v(" 五、Nginx 配置与应用场景")]),s._v(" "),t("h2",{attrs:{id:"_1、最小配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、最小配置"}},[s._v("#")]),s._v(" 1、最小配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("user nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置运行nginx的用户")]),s._v("\nworker_processes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始的子进程数量")]),s._v("\nworker_connections "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置单个进程处理的最大请求连接数")]),s._v("\nserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置虚拟主机")]),s._v("\nlisten "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置虚拟主机监听端口")]),s._v("\nserver_name "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置服务器域名")]),s._v("\nlocation 匹配规则 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置匹配特定的url")]),s._v("\nroot "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置网站根目录")]),s._v("\nindex "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置虚拟主机的默认首页")]),s._v("\nerror_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("404")]),s._v(" /404.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解释:当出现404的时候，要重定向到网站根目 录下的404.html页面")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("strong",[s._v("user")])]),s._v(" "),t("p",[s._v("user nginx; #配置运行 nginx 的用户")]),s._v(" "),t("p",[t("strong",[s._v("worker_processes")])]),s._v(" "),t("p",[t("code",[s._v("worker_processes 1")]),s._v("; 默认为 1，表示开启一个业务进程")]),s._v(" "),t("p",[t("strong",[s._v("worker_connections")])]),s._v(" "),t("p",[t("code",[s._v("worker_connections 1024")]),s._v("; 单个业务进程可接受连接数")]),s._v(" "),t("p",[t("strong",[s._v("include mime.types;")])]),s._v(" "),t("p",[t("code",[s._v("include mime.types")]),s._v("; 引入 http mime 类型")]),s._v(" "),t("p",[t("strong",[s._v("default_type application/octet-stream;")])]),s._v(" "),t("p",[t("code",[s._v("default_type application/octet-stream")]),s._v("; 如果 mime 类型没匹配上，默认使用二进制流的方式传输。")]),s._v(" "),t("p",[t("strong",[s._v("sendfifile on;")])]),s._v(" "),t("p",[t("code",[s._v("sendfile on")]),s._v("; 使用 linux 的 "),t("code",[s._v("sendfile(socket, file, len)")]),s._v(" 高效网络传输，也就是数据 0 拷贝。")]),s._v(" "),t("p",[t("strong",[s._v("keepalive_timeout 65;")])]),s._v(" "),t("p",[t("code",[s._v("keepalive_timeout 65")]),s._v(";")]),s._v(" "),t("p",[s._v("虚拟主机配置")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 监听端口号\n\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 主机名\n\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" 匹配路径\n\t\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 文件根目录\n\t\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html index.htm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 默认页名称\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("error_page")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" 报错编码对应页面\n\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = /50x.html")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"_2、虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、虚拟主机"}},[s._v("#")]),s._v(" 2、虚拟主机")]),s._v(" "),t("p",[s._v("原本一台服务器只能对应一个站点，通过虚拟主机技术可以虚拟化成多个站点同时对外提供服务")]),s._v(" "),t("p",[t("strong",[s._v("servername 匹配规则")])]),s._v(" "),t("p",[s._v("我们需要注意的是 servername 匹配分先后顺序，写在前面的匹配上就不会继续往下匹配了。")]),s._v(" "),t("p",[t("strong",[s._v("完整匹配")])]),s._v(" "),t("p",[s._v("我们可以在同一 servername 中匹配多个域名")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server_name  vod.mmban.com www1.mmban.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("通配符匹配")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server_name  *.mmban.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("通配符结束匹配")])]),s._v(" "),t("p",[t("strong",[s._v("正则匹配")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server_name  ~^"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-9"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("+"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".mmban"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".com$"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_3、反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、反向代理"}},[s._v("#")]),s._v(" 3、反向代理")]),s._v(" "),t("p",[s._v("proxy_pass http://baidu.com;")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" http://baidu.com/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4、x-frame-options-响应头缺失漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、x-frame-options-响应头缺失漏洞"}},[s._v("#")]),s._v(" 4、X-Frame-Options 响应头缺失漏洞")]),s._v(" "),t("p",[s._v("故名思意，就是返回的响应头信息中没有包含 x-frame-options 头信息设置。")]),s._v(" "),t("p",[s._v("x-frame-options 头信息的详细介绍可以查看 mozilla firefox 官方文档")]),s._v(" "),t("p",[s._v("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/X-Frame-Options")]),s._v(" "),t("p",[t("code",[s._v("X-Frame-Options")]),s._v(" 有三个可能的值：")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[s._v("X-Frame-Options: deny\nX-Frame-Options: sameorigin\nX-Frame-Options: allow-from https://example.com/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("换一句话说，如果设置为 "),t("code",[s._v("deny")]),s._v("，不光在别人的网站 frame 嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为"),t("code",[s._v("sameorigin")]),s._v("，那么页面就可以在同域名页面的 frame 中嵌套。")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("deny")])]),s._v(" "),t("p",[s._v("表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("sameorigin")])]),s._v(" "),t("p",[s._v("表示该页面可以在相同域名页面的 frame 中展示。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("allow-from *uri*")])]),s._v(" "),t("p",[s._v("表示该页面可以在指定来源的 frame 中展示。")])])]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 nginx 发送 X-Frame-Options 响应头，把下面这行添加到 ‘http’, ‘server’ 或者 ‘location’ 的配置中:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("add_header")]),s._v(" X-Frame-Options SAMEORIGIN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);