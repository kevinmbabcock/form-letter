$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var address1Input = $("input#address1").val();
    var address2Input = $("input#addresss2").val();

    $(".firstName").text(firstNameInput);
    $("lastName").text(lastNameInput);
    $(".address1").text(address1Input);
    $("address2").text(address2Input);

    $("#letter").show();

    event.preventDefault();
  })
})
