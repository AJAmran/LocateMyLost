"use client";
import React from "react";
import registerSchema from "@/schemas/register.schema";
import AuthForm from "@/components/form/auth.form";
import { z } from "zod";
import { registerUser } from "@/services/AuthService";
import { useMutation } from "@tanstack/react-query";

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const {
    mutate: handleUserRagistration,
    isError,
    isPending,
    isSuccess,
    data: responseData,
    error,
  } = useMutation({
    mutationKey: ["UER_REGISTERATION"],
    mutationFn: registerUser,
    onSuccess: (data) => {
      alert("Registration successful!");
      console.log("Server Response", data);
    },
    onError: (error) => {
      alert(error.message || "An error occurred during registration.");
      console.error("Registration Error:", error);
    },
  });

  const handleRegister = async (data: RegisterFormData) => {
    console.log("Registering user with data:", data);
    handleUserRagistration(data);
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
          name: "mobileNumber",
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
