import AuthForm from "./form";

function App() {
  const onLogin = (values) => {
    // dispatch form values to an API here
  };
  const onRegister = (values) => {
    // dispatch form values to an API here
  };
  return <AuthForm onSignIn={onLogin} onSignUp={onRegister} loading={false} />;
}

export default App;
