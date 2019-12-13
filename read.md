## 瀑布流+播放器

### 1、Bootstrap+masonry插件实现瀑布流效果

![](http://qiniu.lexizhi.com/image/test/pubuliu.png)

#### 瀑布流元素代码

```html
 <div class="row masonry-container">
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
                <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
               <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
               <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
                <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
                <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
               <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
                <!-- 省略内容代码 -->
            </div>
        </div>
        <div class="item col-md-3 col-sm-4 col-xs-6">
            <div class="panel panel-default">
                <!-- 省略内容代码 -->
            </div>
        </div>
    </div>
</div>
```

#### 用到的js插件及自定义脚本内容

```javascript
<body>
	<!-- 瀑布流元素代码 -->
</body>
<!-- 引入相关js -->
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/masonry.pkgd.min.js"></script>
<!-- 自定义脚本内容 -->
<script>
	<!--瀑布流-->
	var $container = $('.masonry-container');
	$container.masonry({
    columnWidth: '.item',
    itemSelector: '.item'
});
</script>
```

### 2、播放器插件ckplayer.js

![](http://qiniu.lexizhi.com/image/test/play.png)

#### 自定义脚本

```javascript
<!--播放器-->
<script type="text/javascript" src="js/ckplayer.js" charset="utf-8"></script>
<script type="text/javascript">
    /*播放器设置*/
    var flashvars = {
        f: 'http://movie.ks.js.cn/flv/other/1_0.flv',
        c: 0,
        b: 1
    };
    var params = {bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always'};
    CKobject.embedSWF('ckplayer/ckplayer.swf', 'a1', 'ckplayer_a1', '600', '400', flashvars, params);
    /*
     CKobject.embedSWF(播放器路径,容器id,播放器id/name,播放器宽,播放器高,flashvars的值,其它定义也可省略);
     下面三行是调用html5播放器用到的
     */
    var video = ['http://jiuye.lexizhi.com/test/01/ch01/01-课程介绍.mp4'];
    var support = ['iPad', 'iPhone', 'ios', 'android+false', 'msie10+false', 'webKit'];
    CKobject.embedHTML5('video', 'ckplayer_a1', 600, 400, video, flashvars, support);
</script>
```

#### 网页代码

```html
<center>
	<div id="video">
		<div id="a1"></div>
	</div>
</center>
```







