	var shijian=3600;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//倒计时
	}
	
	function count(){
		if(shijian<0){
			alert("time out");
			pause();//一般情况下这个if条件是用来提交数据用的
		}else{
			$("#time p").html(Math.floor(shijian/60)+":"+shijian%60);
			shijian--;
			console.info(time);
		}
	}
	function pause(){
		clearInterval(time);
	}
	function goOn(){
		time = setInterval("count()",1000);
	}