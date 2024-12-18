"use client";
import React from "react";
import loginSchema from "@/schemas/login.schema";
import AuthForm from "@/components/form/auth.form";

const LoginPage: React.FC = () => {
  const handleLogin = async (data: any) => {
    console.log("Logging in...", data);
    alert("Login successful!");
  };

  return (
    <AuthForm
      schema={loginSchema}
      onSubmit={handleLogin}
      title="Login to LocateMyLost"
      description="Welcome back! Let’s get started."
      fields={[
        {
          name: "email",
          label: "Email Address",
          type: "email",
          placeholder: "example@domain.com",
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      ]}
      submitLabel="Login"
      redirectText="Don’t have an account?"
      redirectLink="/register"
      redirectLabel="Register here"
    />
  );
};

export default LoginPage;
