#! /usr/local/bin/node

$ = require 'cheerio'

class ImgAnalyzer
  
  output: []
  
  constructor: ->
  
  init: ->  
    console.log "\n\n"
    console.log "IMAGE ANALYZER"
    console.log "========================="
    
  analyzeLine: (lineNum, lineContent) ->
    
    lineContent = lineContent.trim()
    
    $lineContent = $(lineContent)
    
    imgIndex = lineContent.indexOf 'img'
    
    # if line contains an img tag
    if imgIndex > -1
      altIndex = lineContent.indexOf 'alt'

      # if alt attribute is missing
      if altIndex == -1
        @output.push(@printAltError lineNum, lineContent)
      else
        if $lineContent.attr('alt') == ''
          # if alt is empty
          @output.push(@printAltWarning lineNum, altIndex, lineContent)
  
  parseComplete: ->
    @init()
    
    @output.forEach (msg) ->
      console.error msg
                   
  printAltError: (lineNum, lineContent) ->
    return new Error "alt missing, line #{lineNum}: #{lineContent}"
  
  printAltWarning: (lineNum, altIndex, lineContent) ->
    # todo: create Warning object
    return "[Warning: empty alt, line #{lineNum} char #{altIndex}: #{lineContent}]"
    

exports.ImgAnalyzer = ImgAnalyzer
