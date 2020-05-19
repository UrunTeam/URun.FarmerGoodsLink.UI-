$(document).ready(function(){
    //模块js初始化
    commonJs.fn.init();
    //分页
    $(".paging").Paging({
      dom: {
        pageno: true, // 页码：1、2、3、4、5
        pagesize: false, // 每页显示多少条
        datacount: true, // 数据总数
        pagecount: true, // 页码总数
        pagebtn: true, // 上一页，下一页按钮
        pagefirst: false, // 首页按钮
        pagelast: false, // 尾页按钮
        fastgo: true // 快速跳转
      },
      pagesize: 5,
      current: 1,
      count: 100,
      pageSizeList: [10, 20, 30, 40, 50],
      prevTpl: "<",
      nextTpl: ">"
    });
});

var commonJs = $(window).commonJs || {};

commonJs.fn = {
    init : function(){
        var _this = this;
        // _this.dropdown();
        _this.icheck();
        // _this.nicescroll();

    },

    // 下拉菜单
    dropdown : function () {
        $('.dropdown').on('click','.dropdown-menu li a', function(event) {
            var txt = $(this).text();
            $(this).parents('.dropdown-menu').siblings('.dropdown-toggle')[0].childNodes[0].nodeValue = txt + ' ';
        });
    },

    // 侧边条
    nicescroll : function () {
        $(".nicescroll").niceScroll({
            cursorcolor: "#ccc",
            cursorwidth:"3px",
            cursorborder:"none"
        });
    },

    // 复选框
    icheck : function () {
        // $('input').iCheck({
        //     checkboxClass: 'icheckbox_flat-blue',
        //     radioClass: 'iradio_flat-blue',
        //     increaseArea: '20%'
        // });

        $('body').on("click",'.check-radio',function() {
          //复选
          // if($(this).hasClass("check")) {
          //   $(this).removeClass("check");
          // } else {
          //   $(this).addClass("check");
          // }

          //单选
          $(this).addClass("check");
          $(this).parents().siblings().find('.check-radio').removeClass("check");
        })
    }

};
