# bintotext
bintotext is a simple Node module for converting binary to ASCII.
-


Installation
=
`npm i bintotext` or `npm i bintotext -g`

Examples
=
Node
-
```javascript
require("bintotext");
const binary = [ "01001000", "01100101", "01101100", "01101100", "01101111", "00100000", "01010111", "01101111", "01110010", "01101100", "01100100", "00101110", "00101110", "00101110", "00100001" ];

String.fromBinary(binary);

// Result: Hello World...!
```
```javascript
const bintotext = require("bintotext");
const binary = [ "01001000", "01100101", "01101100", "01101100", "01101111", "00100000", "01010111", "01101111", "01110010", "01101100", "01100100", "00101110", "00101110", "00101110", "00100001" ];

bintotext(binary);

// Result: Hello World...!
```
```javascript
const bintotext = require("bintotext");
const binary = [ "01001000", "01100101", "01101100", "01101100", "01101111", "00100000", "01010111", "01101111", "01110010", "01101100", "01100100", "00101110", "00101110", "00101110", "00100001" ];

bintotext.binaryToText(binary);

// Result: Hello World...!
```
CLI
-
`bin-to-str 01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00101110 00101110 00101110 00100001`

Result: `Hello World...!`