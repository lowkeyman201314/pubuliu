/**
 * Created by laoyu on 2019/12/13.
 */
<!--瀑布流-->
var $container = $('.masonry-container');
$container.masonry({
    columnWidth: '.item',
    itemSelector: '.item'
});
