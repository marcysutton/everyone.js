config = 
	warningColor: 'orange'
	errorColor: 'red'
	
kickoff = ->
	images = document.querySelectorAll 'img'
	
	numImages = images.length
	
	for image in images
		
		# if image is missing alt, add border
		altAttr = image.getAttribute 'alt'
		
		addWarning image if altAttr == ''
		
		addError image if altAttr == null
	

addWarning = (targetElement) ->
	targetElement.style.border = '10px solid ' + config.warningColor

addError = (targetElement) ->
	targetElement.style.border = '10px solid ' + config.errorColor
	
window.addEventListener "DOMContentLoaded", kickoff, false if window.addEventListener