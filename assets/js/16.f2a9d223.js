(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{387:function(a,t,e){"use strict";e.r(t);var n=e(46),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"起因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[a._v("#")]),a._v(" 起因")]),a._v(" "),e("p",[a._v("因将swagger升级到了2.9.2,再次启动项目时,爆出")]),a._v(" "),e("blockquote",[e("p",[a._v("The following method did not exist:")]),a._v(" "),e("p",[a._v("com.google.common.collect.FluentIterable.concat(Ljava/lang/Iterable;Ljava/lang/Iterable;)Lcom/google/common/collect/FluentIterable;")])]),a._v(" "),e("p",[a._v("升级完依赖遇到这种什么方法找不到的,十有八九就是发生依赖冲突了")]),a._v(" "),e("h2",{attrs:{id:"解决方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决方式"}},[a._v("#")]),a._v(" 解决方式")]),a._v(" "),e("p",[a._v("在同事推荐下,下载来IDEA插件"),e("code",[a._v("MavenHelper")]),a._v("来解决问题")]),a._v(" "),e("p",[a._v("项目情况如下:")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://beanchan-image.oss-cn-guangzhou.aliyuncs.com/20210319095327.png",alt:"image-20210319092655363"}})]),a._v(" "),e("p",[a._v("我在模块A引入了Swagger,在admin模块下的pom.xml下,此时通过MavenHelper发现,冲突包为guava,此时需要20版本的guava包,但是maven找到的只有18.0")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://beanchan-image.oss-cn-guangzhou.aliyuncs.com/20210319095333.png",alt:"image-20210319094335639"}})]),a._v(" "),e("p",[a._v("因为maven肯定是会下载swagger所需要的包,但此时却找不到包,只有一种可能")]),a._v(" "),e("p",[a._v("整个项目使用了别的有着guava-18.0的jar包,而忽略了有着guava-20.0的这个包")]),a._v(" "),e("p",[a._v("因为项目自己选择了18.0但我们需要20.0,所以我选择直接排除guava-18.0这个依赖,再点击reimport")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://beanchan-image.oss-cn-guangzhou.aliyuncs.com/20210319095337.png",alt:"image-20210319094616954"}})]),a._v(" "),e("p",[a._v("此时在看其他模块,发现有个模块已经排除了guava-18这个依赖")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://beanchan-image.oss-cn-guangzhou.aliyuncs.com/20210319095346.png",alt:"image-20210319094725485"}})]),a._v(" "),e("h2",{attrs:{id:"结束语"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[a._v("#")]),a._v(" 结束语")]),a._v(" "),e("p",[a._v("此时再启动项目,项目运行成功,但是上面这个模块原先运行着guava-18的依赖,现在强制给他升级到20.0,可能会有着别的问题,就像jdk升级版本会有各种问题一样")]),a._v(" "),e("p",[a._v("如果有问题的话还是可以使用那个万金油方法,回滚swagger依赖版本到2.7.0,毕竟能用就行,还要啥自行车")])])}),[],!1,null,null,null);t.default=s.exports}}]);