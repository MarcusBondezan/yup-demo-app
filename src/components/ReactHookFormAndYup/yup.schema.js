import * as yup from 'yup';

let formSchema = yup
  .object()
  .shape({
    // nossos requerimentos básicos
    emailAddress: yup.string().required().email(),
    option1: yup.boolean(),
    option2: yup.boolean(),
  })
;

// podemos adicionar outras validações depois dos requerimentos básicos
formSchema = formSchema.test(
  'myCustomCheckboxTest',
  null,
  (obj) => { // obj => valores provenientes do form a que está sendo validado

    // testando apenas os checkboxes aqui
    if (obj.option1 || obj.option2) {
      return true; // tudo OK
    }

    return new yup.ValidationError(
      '❗ Check at least one checkbox',
        null,
        'myCustomFieldName'
      );
    }
);

export default formSchema;
