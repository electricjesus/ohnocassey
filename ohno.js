#!/usr/bin/env node
const [, script, input] = process.argv
const { exec } = require('shelljs')
const { stdout } =  exec(`banner ${input}`, {silent: true})
console.log(':blank:')
console.log(stdout.replace(/\#/g,':ohnocassey:').replace(/\ /g,':blank:'))
console.log(':blank:')