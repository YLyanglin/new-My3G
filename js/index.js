(function($){
	$(".page")
	.on("tap",".register",function(){
		//登录
		register()
	}).on("tap",".YZM",function(){
		//手机号
		var that=$(this)
		tele(that)
		
	}).on("tap",".binding",function(){
		//绑定
		//bind()
		register()
	});
//登录
	function register(){
		var Txt1=$('.Txt1').val(),
			Txt2=$('.Txt2').val(),
			Txt3=$(".Txt3").val();
			console.log(Txt3)
			if(Txt1=="" || Txt2=="" ||Txt3==""){
				$.dialog({
					msg:"任何一栏都不能为空哦！",
					btn:[
					        {text:'确定',className:'ok'},
					    ],
				})
			}else{
				window.location.href="html/binding.html"
			}
	}
//验证码
	var wait=3;
	function YZM(that){	
		 if (wait == 0) {
           	that.attr("class","YZM");           
            that.html("获取验证码");
            $(".page-sub[value=登录]").attr("class","register")
            wait = 3;
        } else {
        	//别的途径和常见问提被隐藏
        	$(".reset").hide();
            $(".G3").hide();
            $(".page").animate({"margin-bottom":"16px"});
            $(".register").attr("class","page-sub")
            //$(".binding").attr("class","page-sub")
        	//验证码
           	that.attr("class","YZM-cf");    
            that.html(wait+"s后重发");
            wait--;
            setTimeout(function() {
                YZM(that)
            },
            1000)
            //单击登陆判断是否有值
        	$(".page-sub").on("tap",function(){
        		register();
        	})
        }
	}
//tele
	function tele(that){
		var Txt1=$('.Txt1').val(),
			YZMtxt=$(".YZM").text();

		if(Txt1==""){
			$.dialog({
					msg:"请先填写号码",
					btn:[
					        {text:'确定',className:'ok'},
					    ],
				})
		}else{
			$("<p class='already Pt'>验证码已发送至"+Txt1+"</p>").insertBefore(".binding");
			//验证码
			var Alen=$(".already").length;
			console.log(Alen)
			YZM(that)
			if(Alen>=1){
				Alen=1
				//$(".already").remove()
			}
		}
	}
})(Zepto)