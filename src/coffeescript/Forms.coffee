#! /usr/local/bin/node

$ = require 'cheerio'

class InputAnalyzer
  
  constructor: ->
  
  init: ->
    console.log "\n\n"
    console.log "INPUT ANALYZER"
    console.log "========================="
    
  analyzeLine: (lineNum, lineContent) ->
    
    lineContent = lineContent.trim()
    
    $lineContent = $(lineContent)
    
    inputIndex = lineContent.indexOf 'input'
    
    # if line contains an input tag
    if inputIndex > -1
      console.log 'input'
  
  parseComplete: ->
    
                
  printLabelError: (lineNum, lineContent) ->
    console.error new Error "label missing, line #{lineNum}: #{lineContent}"
        

exports.InputAnalyzer = InputAnalyzer
