cheerio = require('cheerio')

config = 
	passingColor: 'green'
	warningColor: 'orange'
	errorColor: 'red'
	
kickoff = ->
	images = document.querySelectorAll 'img'
	
	numImages = images.length
	
	for image in images
		
		altAttr = image.getAttribute 'alt'
		
		# if image has empty alt, add warning
		addWarning image if altAttr == ''
		
		# if image is missing alt, add error
		addError image if altAttr == null
		

addWarning = (targetElement) ->
	targetElement.style.border = '10px solid ' + config.warningColor

addError = (targetElement) ->
	targetElement.style.border = '10px solid ' + config.errorColor
	
	
window.addEventListener "DOMContentLoaded", kickoff, false if window.addEventListener
