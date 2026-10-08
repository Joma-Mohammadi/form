"use client";

import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  email: string;
  password: string;
};

export default function ReactForm() {
  const { register, handleSubmit } = useForm<FormFields>();

  const onsubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="w-full max-w-2xl min-h-150 bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col justify-center gap-6"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Please enter your information
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>

          <input
            {...register("email",{
              required:true,
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            {...register("password",{
              required:true,
              minLength:8,
            })}
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-xl border border-gray-300 px-5 py-4 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

