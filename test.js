var jsonfile = require('jsonfile');
var dir = require('directory-tree');

var file = 'images.json';
var content = dir.directoryTree("images", ['.gif']);

jsonfile.writeFile(file, content, function(err){
	console.error(err);
})

let description = [];

for(obj of content.children){
	let name = obj.name.substring(0, obj.name.length-4);
	let item = {name: name, description: "Description of "+name};
	description.push(item);
}

console.log(description);
