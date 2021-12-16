import PageForm from './PageForm.js';

function Register(props) {
  return (
      <PageForm header="Регистрация" button="Зарегистрироваться" onUpdateUserAuth={props.onUpdateUserAuth}>
        <a className="page-form__caption" href="/sign-in">Уже зарегистрированы? Войти</a>
      </PageForm>
    );
  }
  
export default Register;