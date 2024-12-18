"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "@/schemas/login.schema";



type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      console.log("Logging in...", data);
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center bg-gray-100">
      <h3 className="my-2 text-2xl font-bold text-gray-800">Login to LocateMyLost</h3>
      <p className="mb-6 text-gray-600">Welcome back! Let&rsquo;s get started.</p>
      <div className="w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={`mt-1 block w-full rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("email")}
              placeholder="example@domain.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`mt-1 block w-full rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("password")}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`mt-4 flex items-center justify-center rounded-md bg-indigo-600 py-2 px-4 text-white ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Don&rsquo;t have an account?{" "}
          <a href="/register" className="font-medium text-indigo-600 hover:underline">
            Register here
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
