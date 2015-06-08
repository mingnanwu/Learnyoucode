// make it modular
var theFunction = require('/home/ubuntu/workspace/program6-module.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

theFunction(dir, filterStr, function (err, list){
	if(err)
		return console.error('error', err)

	list.forEach(function (file){
		console.log(file)
	})
})
