import AuthForm from "./form/AuthForm";

function App() {
  const onLogin = (values) => {
    // dispatch form values to an API here
    alert("Success!");
  };
  const onRegister = (values) => {
    // dispatch form values to an API here
    alert("Success!");
  };
  return <AuthForm onSignIn={onLogin} onSignUp={onRegister} loading={false} />;
}

export default App;
