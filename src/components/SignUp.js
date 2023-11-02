import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerRedux } from "../slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      registerRedux({
        password: data.password,
        name: data.name,
        phone_number: data.phone_number,
        email: data.email,
        gender: data.gender,
        identity: data.identity,
        birthdate: data.birthdate,
      })
        .then(unwrapResult)
        .then((originalPromiseResult) => {
          // handle result here
        })
        .catch((rejectedValueOrSerializedError) => {
          // handle result here
        })
    );
    console.log(data);
  };
  return (
    <div className=" mx-auto flex flex-col items-center justify-center gap-2 mt-4">
      <form
        className=" mx-auto flex flex-col items-center justify-center gap-2 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-center">Register</h1>
        <div className="form-el">
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} />
        </div>
        <div className="form-el">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        <div className="form-el">
          <label htmlFor="phone_number">Phone Number</label>
          <input
            type="number"
            id="phone_number"
            {...register("phone_number")}
          />
        </div>
        <div className="form-el">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <div className="form-el">
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" {...register("gender")} />
        </div>
        <div className="form-el">
          <label htmlFor="identity">Identity</label>
          <input type="text" id="identity" {...register("identity")} />
        </div>
        <div className="form-el">
          <label htmlFor="birthdate">Birth Date</label>
          <input type="text" id="birthdate" {...register("birthdate")} />
        </div>
        <input className="mt-2 submit_btn" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
