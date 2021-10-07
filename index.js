if(!String.prototype.repeat)
    /**
     * Returns a String value that is made from count copies appended together. If count is 0, the empty string is returned.
     *
     * @param {number} count — number of copies to append
     * @returns {String}
     */
    String.prototype.repeat = function(count) {
        let result = "";
        for(let i = 0; i < count; i++) result += this;

        return result;
    }

/**
 * Converts binary to text
 * @param {String[]|String} binary 
 * @returns {String}
 */
function binaryToText(binary) {
    if(!binary) throw new Error("Argument binary is undefined");
    if(typeof binary === "string") binary = binary.split(" ");

    let result = "";
    
    for(let i = 0; i < binary.length; i++) {
        const bin = "0".repeat(-((binary[i].length / 8) - 1) * 8) + binary[i];
        
        let value = 0;

        for(let j = 0; j < bin.length; j++) {
            const char = bin.charAt(-(j - 7));

            if(char === "1") {
                value += Math.pow(2, j);
            } else if(char !== "0") throw new Error("Invalid character: " + char);
        }
        result += String.fromCharCode(value);
    }

    return result;
}

String.fromBinary = binaryToText;

module.exports = binaryToText;
module.exports.binaryToText = binaryToText;