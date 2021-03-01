
$("#submit").click(function() {
    let pwd = $("#password").val();
    let cfmpowd = $("#confirm_password").val()

    if($("#name").val() == "" || $("#firstname").val() == "" || $("#mail").val() == "" || $("#login").val() == "" || $("#password").val() == "" || $("#confirm_password").val() == "" ){
        $("#emptyfield").show().delay(5000).fadeOut();
        return false;
    } else {
        if(pwd === cfmpowd && (pwd != "" && cfmpowd != "")){
            $("#success").show().delay(5000).fadeOut();
        } else {
            $("#success").hide();
            $("#error").show().delay(5000).fadeOut();
            return false;
        }
    }
})
    