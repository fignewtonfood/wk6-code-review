var replacement = function(phrase, toFind, toReplace ) {
    return phrase.replace(new RegExp(toFind, 'gi'),toReplace);
};


// $(document).ready(function() {
//     $("form#cntby").submit(function(event){
//         var target = parseInt($("input#target").val());
//         var increment = parseInt($("input#increment").val());
//
//         var answer = cntBy(target, increment);
//         var arraylength = answer.length;
//
//
//         $(".length").text(arraylength);
//
//         $(".output").text(answer.join(", "));
//
//         $("#result").show();
//         event.preventDefault();
//     });
// });
