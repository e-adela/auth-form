import React, { useState } from "react";

import Typography from "./styles/Typography";
import Button from "./components/Button";
import {
  Container,
  Overlay,
  OverlayContainer,
  OverlayPanelLeft,
  OverlayPanelRight,
  Root,
  SignInContainer,
  SignInFormStyled,
  SignUpContainer,
  SignUpFormStyled,
} from "./styles/index-styles";

const AuthForm = ({ onSignUp, onSignIn, serverError, loading }) => {
  const [signUpActive, setsignUp] = useState(false);
  const toggleSignPanel = () => {
    setsignUp((prevSignUp) => !prevSignUp);
  };

  return (
    <Root>
      <Container>
        {signUpActive ? (
          <SignUpContainer signUpActive={signUpActive}>
            <SignUpFormStyled
              onSignUp={onSignUp}
              serverError={serverError}
              loading={loading}
            />
          </SignUpContainer>
        ) : (
          <SignInContainer signUpActive={signUpActive}>
            <SignInFormStyled
              onSignIn={onSignIn}
              serverError={serverError}
              loading={loading}
            />
          </SignInContainer>
        )}

        <OverlayContainer signUpActive={signUpActive}>
          <Overlay signUpActive={signUpActive}>
            {signUpActive ? (
              <OverlayPanelLeft signUpActive={signUpActive}>
                <Typography fontWeight={550} variant="h4" color="white">
                  Register now!
                </Typography>
                <Typography variant="body" color="white">
                  Enter your personal details
                </Typography>
                <Button
                  onClick={toggleSignPanel}
                  variant="transparent"
                  marginTop="1.17rem"
                >
                  Sign In
                </Button>
              </OverlayPanelLeft>
            ) : (
              <OverlayPanelRight signUpActive={signUpActive}>
                <Typography fontWeight={550} variant="h4" color="white">
                  Welcome Back!
                </Typography>
                <Typography variant="body" color="white">
                  Please login with your personal info
                </Typography>
                <Button
                  onClick={toggleSignPanel}
                  variant="transparent"
                  marginTop="1.17rem"
                >
                  Sign Up
                </Button>
              </OverlayPanelRight>
            )}
          </Overlay>
        </OverlayContainer>
      </Container>
    </Root>
  );
};

export default AuthForm;
