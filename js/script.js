var mapping = {
    "plus":     function(x, y) { return x + y },
    "minus":    function(x, y) { return x - y },
    "multiply": function(x, y) { return x * y },
    "divide":   function(x, y) { return x / y }
}

var selectedOperName = undefined;

function selectOperButton(id) {
    $(".selected-oper-button").removeClass("selected-oper-button");
    $(id).addClass("selected-oper-button");
    selectedOperName = /#(.+)-button/.exec(id)[1];
}

function getResultDisplay() {
    var oper = mapping[selectedOperName];
    if (oper == undefined) {
        return "ERROR";
    }
    var inputA = $("#input-box-a").val();
    var inputB = $("#input-box-b").val();
    if (/^ *$/.test(inputA) || /^ *$/.test(inputB)) {
        return "ERROR";
    }
    var result = oper(Number(inputA), Number(inputB));
    return isNaN(result) ? "ERROR" : "" + result;
}

function calc() {
    var resultDisplay = getResultDisplay();
    $("#output-display-content").html(resultDisplay);
}