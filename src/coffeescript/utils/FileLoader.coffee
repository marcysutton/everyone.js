#! /usr/local/bin/node

fs = require 'fs'
lazy = require "lazy"

require('events').EventEmitter

class FileLoaderUtility
  
  fileInputArr: []
  
  tasks: []
  
  constructor: (file, tasks) ->
    self = this
    
    @tasks = tasks
    
    lineCounter = 1
    
    new lazy(fs.createReadStream(file))
    .on 'end', ->
      self.parseComplete()
    .lines
    .forEach (line) ->   
      self.tasks.forEach (task) ->
        task.analyzeLine lineCounter, line.toString()      
      lineCounter++
  
  parseComplete: ->
    @tasks.forEach (task) ->
      task.parseComplete()
    
exports.FileLoaderUtility = FileLoaderUtility
