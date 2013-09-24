FileLoader = require './utils/FileLoader'

argv = require('optimist').argv

if(argv.h || argv.help)
	help = "usage: loadFile.js [-h] [--help] [file]"
	
	console.log help
	
	process.exit(0)

strInputFile = argv._[0]

fileLoader = new FileLoader.FileLoaderUtility strInputFile
