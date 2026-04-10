import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </div>
  );
};

export default Login;