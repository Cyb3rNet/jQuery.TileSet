>> jquery.TileSet.js by Cyb3r
>>
>> jQuery Plugin - Creates an image tile set from an array of images or DOM elements
>>
>> February 2010 - MIT Licence

## Usage

Declare a DOM container for the tile set

    <body>
	
	<div id="tile-set"></div>
	
	</body>


Set the image ULRs/paths/sources in Javascript and call the plugin

    <script language="Javascript">
	
	var asImgSrcs = new Array();

	asImgSrcs.push("images/Untitled-0-0.jpg");
	asImgSrcs.push("images/Untitled-1-0.jpg");
	asImgSrcs.push("images/Untitled-2-0.jpg");
	asImgSrcs.push("images/Untitled-3-0.jpg");

	asImgSrcs.push("images/Untitled-0-1.jpg");
	asImgSrcs.push("images/Untitled-1-1.jpg");
	asImgSrcs.push("images/Untitled-2-1.jpg");
	asImgSrcs.push("images/Untitled-3-1.jpg");

	asImgSrcs.push("images/Untitled-0-2.jpg");
	asImgSrcs.push("images/Untitled-1-2.jpg");
	asImgSrcs.push("images/Untitled-2-2.jpg");
	asImgSrcs.push("images/Untitled-3-2.jpg");

	asImgSrcs.push("images/Untitled-0-3.jpg");
	asImgSrcs.push("images/Untitled-1-3.jpg");
	asImgSrcs.push("images/Untitled-2-3.jpg");
	asImgSrcs.push("images/Untitled-3-3.jpg");
	
	jQuery('#tile-set').TileSet(asImgSrcs);

	</script>

## Tested

**~::~ Cyb3r ~::~**