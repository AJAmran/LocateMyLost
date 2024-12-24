"use client";
import React from "react";
import { useForm, SubmitHandler, FieldValues, Path } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import Link from "next/link";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  onSubmit: SubmitHandler<T>;
  title: string;
  description: string;
  fields: Array<{
    name: Path<T>;
    label: string;
    type: string;
    placeholder: string;
  }>;
  submitLabel: string;
  redirectText: string;
  redirectLink: string;
  redirectLabel: string;
}

const AuthForm = <T extends FieldValues>({
  schema,
  onSubmit,
  title,
  description,
  fields,
  submitLabel,
  redirectText,
  redirectLink,
  redirectLabel,
}: AuthFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="w-[90%] max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {fields.map((field) => (
            <div key={String(field.name)}>
              <label
                htmlFor={String(field.name)}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {field.label}
              </label>
              <input
                id={String(field.name)}
                type={field.type}
                className={`mt-1 block w-full rounded-md border ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } p-2 focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200`}
                placeholder={field.placeholder}
                {...register(field.name)}
              />
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-500">
                  {(errors[field.name] as any).message}
                </p>
              )}
            </div>
          ))}
          <button
            type="submit"
            className={`mt-4 flex items-center justify-center rounded-md bg-indigo-600 py-2 px-4 text-white ${
              isSubmitting
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-indigo-700"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : submitLabel}
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          {redirectText}{" "}
          <Link
            href={redirectLink}
            className="font-medium text-indigo-600 hover:underline"
          >
            {redirectLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
