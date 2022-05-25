/*

2022/05/24
6Rube

*/

function makeBionic() {
    var a = document.getElementsByClassName("bionic")
    for (let section of a) {
        var b = "";
        var wordContainer = section.innerHTML.split(" ")
        for (let wordIndex in wordContainer) {
            var anker = ""
            var rest = ""
            var WordParts = wordContainer[wordIndex].split('')
            if (WordParts == []) {
                break
            }
            if (WordParts.length <= 1) {
                anker = '<span style="font-weight: 1000 !important">' 
                + wordContainer[wordIndex] + "</span>"
            }
            if (WordParts.length == 2) {
                anker = '<span style="font-weight: 1000 !important">' 
                + wordContainer[wordIndex].substring(0, 1) + "</span>"
                rest = '<span style="font-weight: 100 !important">' 
                + wordContainer[wordIndex].substring(1, wordContainer[wordIndex].length) + "</span>"
            }
            if (WordParts.length == 3) {
                anker = '<span style="font-weight: 1000 !important">' 
                + wordContainer[wordIndex].substring(0, 2) + "</span>"
                rest = '<span style="font-weight: 100 !important">' 
                + wordContainer[wordIndex].substring(2, wordContainer[wordIndex].length) + "</span>"
            }
            if (WordParts.length > 3) {
                anker = '<span style="font-weight: 1000 !important">' 
                + wordContainer[wordIndex].substring(0, 3) + "</span>"
                rest = '<span style="font-weight: 100 !important">' 
                + wordContainer[wordIndex].substring(3, wordContainer[wordIndex].length) + "</span>"
            }
            b += " " + anker + rest + " "
        }
        section.innerHTML = b
    }
}

makeBionic()