#! /usr/local/bin/node

fs = require 'fs'
lazy = require "lazy"

class FileLoaderUtility
  
  fileInputArr: []
  
  constructor: (file) ->
    console.log 'init FileLoader'
    
    lineCounter = 0

    self = this
    
    new lazy(fs.createReadStream(file))
    .on 'end', ->
      self.processLines()
    .lines
    .forEach (line) ->
      self.fileInputArr.push line.toString()
    
  processLines: ->   
    self = this 
    this.fileInputArr.forEach (value, index) ->
      self.printLine value, index
  
  printLine: (value, index) ->
    console.log "line #{index}: #{value}"

exports.FileLoaderUtility = FileLoaderUtility
