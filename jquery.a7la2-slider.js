function mousedwn(e) 
		{ 
		  try { if (event.button == 2||event.button == 3) return false; }  
		  catch (e) { if (e.which == 3) return false; } 
		}
		
		window.oncontextmenu = function(event) {
    		event.preventDefault();
    		event.stopPropagation();
    			return false;
};
		document.oncontextmenu = function() { return false; }
		document.ondragstart   = function() { return false; }
		document.onmousedown   = mousedwn;