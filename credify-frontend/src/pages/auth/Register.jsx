import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Register</Button>
    </div>
  );
};

export default Register;