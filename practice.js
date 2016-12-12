function longestWord(sentence) {

        //let sentence = "How did Trump ever get elected?";
        //let answer = sentence.split(" ");
        //console.log(answer);

        let string123 = sentence.split(" ");
        let longest = 0;
        let keeper = " ";

        for (let i = 0; i < string123.length; i++) {
            if  (string123.length > longest) {
                longest = string123[i];

            keeper = string123[i];

            }
        return keeper
    
    }
}
        longestWord("How did Trump ever get elected?");


