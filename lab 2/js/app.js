$("#llll").validate({
  submitHandler: function(form) {
    rules: {
      field: {
        required: true,
        maxlength = 30;
      }
    }
    form.submit();
    alert ("Ingrese nombre")
  }
 });

 $( "#numero" ).validate({
  rules: {
    field: {
      required: true,
      number: true
    }
  }
});