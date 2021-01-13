$("select")
    .change(function() {
        var str = "";
        $("select option:selected").each(function() {
            str += $(this).text() + " ";
        });
        alert(str);
    });
