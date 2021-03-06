$(function () {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: !0,
        submitSuccess: function (t, e) {
            if (!t.attr("action")) {
                e.preventDefault();
                var s = (function (t) {
                        var e = "./includes/" + t.attr("id") + ".php";
                        return t.attr("template-path") && (e = t.attr("template-path") + "/includes/" + t.attr("id") + ".php"), e;
                    })(t),
                    i = {};
                t.find("input, textarea, option:selected").each(function (t) {
                    var e = $(this).val(),
                        s = $(this).attr("id");
                    $(this).is(":checkbox") ? (e = $(this).is(":checked")) : $(this).is(":radio") ? (e = $(this).val() + " = " + $(this).is(":checked")) : $(this).is("option:selected") && (s = $(this).parent().attr("id")), (i[s] = e);
                }),
                    $.ajax({
                        url: s,
                        type: "POST",
                        data: i,
                        cache: !1,
                        success: function () {
                            t.append(
                                "<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Votre message a été envoyé !</strong></div></div>"
                            ),
                                $("form").get(0).reset();
                        },
                        error: function () {
                            0 == $("#form-alert").length &&
                                t.append(
                                    "<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>Oops, il semble que nous ayons des problèmes avec notre messagerie, réessayez plus tard.</strong></div></div>"
                                );
                        },
                    });
            }
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });
});
