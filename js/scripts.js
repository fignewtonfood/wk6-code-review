var replacement = function(phrase, toFind, toReplace) {
    return phrase.replace(new RegExp('\\b'+toFind+'\\b', 'gi'),toReplace);
};


$(document).ready(function() {
    $("form#replacement").submit(function(event){
        var phrase = $("textarea#phrase").val();
        var toFind = $("input#tofind").val();
        var toReplace = $("input#toreplace").val();

        var answer = replacement(phrase, toFind, toReplace);

        $(".output").text(answer);

        $("#result").show();
        event.preventDefault();
    });
});
