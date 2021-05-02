import styles from './index.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import formSchema from './yup.schema';

function ReactHookFormAndYup() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(formSchema)
  });

  const onSubmit = data => console.log(data);

  return (
    <div className={styles.container}>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="emailAddress" ref={register} placeholder="seu email"/>
        <div>
          <input
            name="option1"
            type="checkbox"
            ref={register}
            id="option1"
          />
          <label htmlFor="option1">
            Option 1
          </label>

          <input
            name="option2"
            type="checkbox"
            ref={register}
            id="option2"
          />
          <label htmlFor="option2">
            Option 2
          </label>
        </div>
        {JSON.stringify(errors)}
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookFormAndYup;