import LoginForm from '@/components/client/LoginForm/LoginForm';
import classes from './page.module.css';

const AuthPage = () => {
  return (
    <main className={classes.main}>
      <LoginForm />
    </main>
  )
}

export default AuthPage