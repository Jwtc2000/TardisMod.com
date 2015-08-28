jQuery(function($) {
	var winX   = 0;
	var mouseX = 0;
	var mouseY = 0;
	$(document).mousemove(function(event)
	{
		winX   = $(document).width();
		mouseX = event.pageX;
		mouseY = event.pageY;
	});
	function clicker(event)
	{
		var id = event.target.id;
		var oldID;
		var fID;
		var bID;
		var i;
		for(i=0;i<4;i++)
		{
			var iOID;
			var iBID;
			var iFID;
			switch(i)
			{
				case 0: iOID="GuideFront"; iBID="GuideLeft";  iFID="GuideRight"; break;
				case 1: iOID="GuideRight"; iBID="GuideFront"; iFID="GuideBack";  break;
				case 2: iOID="GuideBack";  iBID="GuideRight"; iFID="GuideLeft";  break;
				case 3: iOID="GuideLeft";  iBID="GuideBack";  iFID="GuideFront"; break;
			}
			if($("#div"+iOID).css("display") != "none")
			{
				oldID = iOID;
				bID   = iBID;
				fID   = iFID;
				break;
			}
		}
		if(id=="leftButton")
		{
			$("#div" + oldID).css("display","none");
			$("#div" + bID).css("display","inline");
		}
		else if(id == "rightButton")
		{
			$("#div" + oldID).css("display","none");
			$("#div" + fID).css("display","inline");
		}
	}
	$("#leftButton").click(clicker);
	$("#rightButton").click(clicker);
});
