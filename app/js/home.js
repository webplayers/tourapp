//$(document).ready(function() {
//	var storage = window.localStorage;
//	var titles = storage["username"];
//	$("#shoptitle").text(titles);
//})
//
//function reback() {
//	var storage = window.localStorage;
//	storage["username"] = '';
//	window.location = 'login.html';
//}
/*拨打电话*/
function dialnumber() {
	plus.device.dial("0755-26990800", false);
}
//
//function openurl(data) {
//	mui.init();
//	mui.openWindow({
//		url: 'plus/noticeview.html',
//		id: 'plus/noticeview.html',
//		extras: {
//			data: data
//		}
//	})
//}
//var options = {
//	url: 'http://pay.goliebao.com/app/public/index/index/notice.html',
//	type: 'post',
//	dataType: 'text',
//	success: function(data) {
//		var data = eval('(' + data + ')');
//		for(var i = 0; i < 2; i++) {
//			var div1 = '<a  onclick="openurl(';
//			div1 += data[i].id;
//			div1 += ')" class="weui-media-box weui-media-box_appmsg">';
//			div1 += '<div class="weui-media-box__hd">';
//			div1 += '<img class="weui-media-box__thumb" src="';
//			div1 += data[i].pic;
//			div1 += '">';
//			div1 += '</div>';
//			div1 += '<div class="weui-media-box__bd">';
//			div1 += '<h4 class="weui-media-box__title">'
//			div1 += data[i].title;
//			div1 += '</h4>';
//			div1 += '<p class="weui-media-box__desc">'
//			div1 += data[i].content;
//			div1 += '</p>';
//			div1 += '</div>';
//			div1 += '</a>';
//			$("#content").append(div1);
//		}
//	},
//	error: function() {
//		alert("无网络");
//	}
//};
//$.ajax(options);
///*交易总额传输*/
//var storage = window.localStorage;
//var datetotal = storage["username"];
//var optionsmoney = {
//	url: 'http://pay.goliebao.com/app/public/index/index/total.html',
//	type: 'post',
//	dataType: 'text',
//	data: {
//		datetotal: datetotal
//	},
//	success: function(data) {
//		$("#totalmoney").text(data);
//	},
//	error: function() {}
//};
//setInterval(aa, 1000);
//
//function aa() {
//	$.ajax(optionsmoney);
//}
//
//$(function() {
//	FastClick.attach(document.body);
//});
//storage["accounts"] = 0;
///*语音播报*/
//var noiceoptions = {
//	url: 'http://pay.goliebao.com/app/public/index/index/trade.html',
//	type: 'post',
//	dataType: 'text',
//	data: {
//		shopname: datetotal
//	},
//	success: function(data) {
//		var data = eval('(' + data + ')');
//		var acountnoc = storage["accounts"];
//		if(acountnoc == 0) {
//			storage["accounts"] = data[0].id;
//			return;
//		}
//		if(acountnoc != data[0].id) {
//			var nocemoney = data[0].total_fee / 100;
//			var str = "猎豹支付，收款到账，" + nocemoney + "元";
//			var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(str);
//			var n = new Audio(url);
//			n.src = url;
//			n.play();
//		}
//		storage["accounts"] = data[0].id;
//	},
//};
//var noticebao = setInterval(noices, 1000);
//
///*发展商户*/
//var storage = window.localStorage;
//storage["count"] = 0;
//var optionslist = {
//	url: 'http://pay.goliebao.com/app/public/index/index/qushoplist.html',
//	type: 'post',
//	dataType: 'text',
//	data: {
//		shop: datetotal,
//	},
//	success: function(data) {
//		var data = eval('(' + data + ')');
//		var count = storage["count"];
//		if(data.length != count) {
//			storage["count"] = data.length;
//			$(".shoplist").empty();
//			for(var m in data) {
//				var div2 = '<div class="weui-cells" onclick="qushop(';
//				div2 += data[m].id;
//				div2 += ')">';
//				div2 += '<a>';
//				div2 += '<div class="weui-cell weui-cell_access">';
//				div2 += '<div class="weui-cell__bd">';
//				div2 += '<img src="app/images/shop.png" style="height:20px;width:20px;margin:0px 5px 0px 5px" />';
//				div2 += '<a class="weui-cell__hd">'
//				div2 += data[m].mct_name;
//				div2 += '</a>';
//				div2 += '</div>';
//				div2 += '<span class="weui-cell__ft"></span>';
//				div2 += '</div>';
//				div2 += '</a>';
//				div2 += '</div>';
//				$(".shoplist").append(div2);
//			}
//		}
//	},
//	error: function() {}
//};
//
//setInterval(newshop, 3000);
//
//function newshop() {
//	$.ajax(optionslist);
//}
//
//function noices() {
//	$.ajax(noiceoptions);
//}
///*提交搜索线下商户*/
//$('#qufindshop').submit(function() {
//	var qufinddata = $("#searchInput").val()
//	mui.init();
//	mui.openWindow({
//		url: 'plus/shopsearch.html',
//		id: 'plus/shopsearch.html',
//		extras: {
//			data: qufinddata
//		}
//	})
//	return false;
//});
///*发展商户具体交易*/
//function qushop(shopname) {
//	mui.init();
//	mui.openWindow({
//		url: 'plus/shopquan.html',
//		id: 'plus/shopquan.html',
//		extras: {
//			data: shopname
//		}
//	})
//}
///*关于我们*/
//function aboutme() {
//	mui.init();
//	mui.openWindow({
//		url: 'plus/aboutme.html',
//		id: 'plus/aboutme.html'
//	})
//}
///*开关*/
//$("#switchCP").click(function() {
//	if($('#switchCP').is(':checked')) {
//		clearInterval(noticebao);
//		noticebao = setInterval(noices, 1000);
//	} else {
//		clearInterval(noticebao);
//	}
//});
///*检查升级*/
//function upgrade_app_wgt() {
//	plus.runtime.getProperty(plus.runtime.appid, function(inf) {
//		checkUpdate(inf.version);
//	});
//}
//var checkUrl = "http://pay.goliebao.com/app/public/index/index/shengji.html";
//
//function checkUpdate(wgtVer) {
//	plus.nativeUI.showWaiting("检测更新...");
//	mui.ajax(checkUrl, {
//		dataType: "json",
//		type: 'POST',
//		data: {
//			ver: wgtVer
//		},
//		success: function(json) {
//			plus.nativeUI.closeWaiting();
//			if(parseInt(json.code) == 1) {
//				//可以升级
//				plus.nativeUI.confirm("检查到当前版本有最新更新，下载升级？",
//					function(event) {
//						if(event.index == 0) {
//							downWgt(json.url);
//						}
//					}, '系统消息', ['马上升级', '下次再说']);
//			} else {
//				plus.nativeUI.toast("当前为最新版本！");
//			}
//		},
//		error: function(xhr, error) {
//			plus.nativeUI.closeWaiting();
//			plus.nativeUI.toast('检测更新失败！');
//		}
//	});
//}
//// 下载wgt文件
//function downWgt(wgtUrl) {
//	plus.nativeUI.showWaiting("下载更新文件...");
//	plus.downloader.createDownload(wgtUrl, {
//		filename: "_doc/update/"
//	}, function(d, status) {
//		if(status == 200) {
//			//console.log("下载wgt成功："+d.filename);
//			installWgt(d.filename); // 安装wgt包
//		} else {
//			//console.log("下载wgt失败！");
//			plus.nativeUI.alert("下载更新失败！");
//		}
//		plus.nativeUI.closeWaiting();
//	}).start();
//}
//// 更新应用资源  
//function installWgt(path) {
//	plus.nativeUI.showWaiting("安装更新文件...");
//	plus.runtime.install(path, {}, function() {
//		plus.nativeUI.closeWaiting();
//		plus.nativeUI.alert("应用资源更新完成！", function() {
//			plus.runtime.restart();
//		});
//	}, function(e) {
//		plus.nativeUI.closeWaiting();
//		plus.nativeUI.alert("安装更新文件失败[" + e.code + "]：" + e.message);
//	});
//}
	$(".more").click(function(){
		for(i=0;i<4;i++){
			$(".favorable").append('<div class="fb">'
									+'<div class="fb-lt">'
									+'<img src="'+ 'images/scenics/scenic_5.png'+'"/>'
									+'<p class="fb-name">体验全球最长的过山车15天超爽旅游</p>'
									+'<p class="price">'+'<span class="discount">2.8折</span>'
									+'<span class="num"><big>2889</big>元起</span>'
									+'</p></div></div>');
		}
		})