import React from "react";
import { Button, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import BillingComponent from "./BillingComponent";
import Card from "./Card";

export const firstPage = (control) => {
  return (
    <>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <>
            <label className="-mb-2 text-blue-950 font-medium">Name</label>
            <TextField
              required
              {...field}
              name="Name"
              placeholder="e.g. Stephen King"
            />
          </>
        )}
      />
      <Controller
        name="emailAddress"
        control={control}
        render={({ field }) => (
          <>
            <label className="-mb-2 text-blue-950 font-medium">
              Email Address
            </label>
            <TextField
              required
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              {...field}
              name="Email"
            />
          </>
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field }) => (
          <>
            <label className="-mb-2 text-blue-950 font-medium">
              Phone Number
            </label>
            <TextField
              required
              type="tel"
              placeholder="e.g. 0613 231 3555"
              pattern="[0-9]{4} [0-9]{3} [0-9]{4}"
              maxlength="12"
              {...field}
              name="Phone"
            />
          </>
        )}
      />
    </>
  );
};

export const secondPage = (form, fields, control) => {
  console.log(fields);
  return (
    <div className="flex md:flex-row md:w-full flex-col justify-center md:pt-12 md:gap-5">
      {fields.plans.map((item) => (
        <Card item={item} form={form} control={control} />
      ))}
    </div>
  );
};
