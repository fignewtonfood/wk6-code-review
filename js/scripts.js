var replacement = function(phrase, toFind, toReplace) {
    // a regular expression was used so that the replacement is global (matches all instances), ignores case, and finds only whole word matches and not intraword matches (\b)
    return phrase.replace(new RegExp('\\b'+toFind+'\\b', 'gi'),toReplace);
};

//wait for document to complete loading before running
$(document).ready(function() {
    //run this when the form with the id replacement is submitted
    $("form#replacement").submit(function(event){
        //writes a specific input or textarea value to a variable
        var phrase = $("textarea#phrase").val();
        var toFind = $("input#tofind").val();
        var toReplace = $("input#toreplace").val();

        //runs replacement
        var answer = replacement(phrase, toFind, toReplace);

        //writes answer to output span
        $(".output").text(answer);

        //unhides result div
        $("#result").show();
        //prevents default submission of form
        event.preventDefault();
    });
});
