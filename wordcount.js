function count_occurance(){
   let word = document.getElementById("textcontent");
   let word_length = word.value;
   let word_arrary = word_length.trim().split(/\s+/);

   let count_occurance = word_arrary.length;
   let para_count = document.getElementById("para_count");
   para_count.textContent = "The no.of words in the paragraph is "+ count_occurance
}

