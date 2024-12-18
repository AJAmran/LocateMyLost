"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import registerSchema from "@/schemas/register.schema";

type RegisterFormInputs = z.infer<typeof registerSchema>;

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      console.log("Registering user...", data);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Registration successful!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center bg-gray-100">
      <h3 className="my-2 text-2xl font-bold text-gray-800">
        Register for LocateMyLost
      </h3>
      <p className="mb-6 text-gray-600">Create an account to get started.</p>
      <div className="w-[90%] max-w-md bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className={`mt-1 block w-full rounded-md border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("name")}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`mt-1 block w-full rounded-md border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("password")}
              placeholder="Enter a strong password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Mobile Field */}
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              id="mobile"
              type="text"
              className={`mt-1 block w-full rounded-md border ${
                errors.mobile ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("mobile")}
              placeholder="+8801234567890"
            />
            {errors.mobile && (
              <p className="mt-1 text-sm text-red-500">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Profile Photo URL Field */}
          <div>
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo URL
            </label>
            <input
              id="profilePhoto"
              type="url"
              className={`mt-1 block w-full rounded-md border ${
                errors.profilePhoto ? "border-red-500" : "border-gray-300"
              } p-2 focus:border-indigo-500 focus:ring-indigo-500`}
              {...register("profilePhoto")}
              placeholder="https://example.com/photo.jpg"
            />
            {errors.profilePhoto && (
              <p className="mt-1 text-sm text-red-500">
                {errors.profilePhoto.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`mt-4 flex items-center justify-center rounded-md bg-indigo-600 py-2 px-4 text-white ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:underline"
          >
            Login here
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
