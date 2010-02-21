/*
** jquery.TileSet.js by Cyb3r
**
** jQuery Plugin
**
** Creates an image tile set from an array of images or DOM elements
**
** February 2010 - MIT Licence
*/

(function(jQ) {

	jQ.fn.TileSet = function(asImgs) {

		for (var i = 0; i < asImgs.length; i++) {

			var oImg = document.createElement('img');
			oImg.src = asImgs[i];

			jQ(this).append(oImg);
		}
	
		return this;
	}
	
})(jQuery)