	var shijian=3600;
	var time=null;
	function start(){
		 time=setInterval("count()",1000);//����ʱ
	}
	
	function count(){
		if(shijian<0){
			alert("time out");
			pause();//һ����������if�����������ύ�����õ�
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