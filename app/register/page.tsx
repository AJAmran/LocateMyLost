"use client";
import React from "react";
import registerSchema from "@/schemas/register.schema";
import AuthForm from "@/components/form/auth.form";

const RegisterPage: React.FC = () => {
  const handleRegister = async (data: any) => {
    console.log("Registering...", data);
    alert("Registration successful!");
  };

  return (
    <AuthForm
      schema={registerSchema}
      onSubmit={handleRegister}
      title="Register to LocateMyLost"
      description="Create your account to get started."
      fields={[
        {
          name: "name",
          label: "Full Name",
          type: "text",
          placeholder: "Enter your name",
        },
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
        {
          name: "mobile",
          label: "Mobile Number",
          type: "text",
          placeholder: "Enter your mobile number",
        },
        {
          name: "profilePhoto",
          label: "Profile Photo URL",
          type: "url",
          placeholder: "Enter image URL",
        },
      ]}
      submitLabel="Register"
      redirectText="Already have an account?"
      redirectLink="/login"
      redirectLabel="Login here"
    />
  );
};

export default RegisterPage;
