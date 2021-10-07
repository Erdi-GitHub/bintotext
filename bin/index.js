#!/usr/bin/env node

const yargs = require("yargs");
const binToStr = require("../index.js");

const str = yargs
    .help("Usage: bin-to-str <binary string>")
    .argv
    ._
    .join(" ");

console.log(binToStr(str));