$("#formValidation").validate({

  rules:{
    nombre:{
      maxlength: 30,
    },
    telefono:{
      number:true,
    }
  },

  messages: {
    nombre:{
      required: "Por favor indique su nombre",
      maxlength: "Nombre tiene 30 caracteres como máximo"
    },
    telefono: "Por favor indique su número telefónico"
  },

  submitHandler: function(form) {
    form.submit();
  }
 });