let $ = wx.MinQuery("ident");
let Util = require("../../public/js/comm/Utilities");
let _page = $('page');

$(function () {
	$.setData(
		"formData",{
			"items": [
				{name: '0', value: '厂矿企业'},
				{name: '1', value: '服务机构', checked: 'true'}
			]
		}
	)
    $('.navlink').bind('tap', function (e) {
        let _link = e.data('link');
        $.navigateTo(_link);
    });
	/**
	 * 生命周期函数--监听页面加载
	 */
    _page.on("load", function (e) {
    
		})
		/**
		 * 生命周期函数--监听页面显示
		 */
        .on("show", function (e) { })
		/**
		 * 生命周期函数--监听页面隐藏
		 */
        .on("hide", function (e) { });
});