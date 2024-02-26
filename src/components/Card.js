import React from 'react';
import { Controller } from 'react-hook-form';

const Card = ({ item, form, control }) => {
  const selected = 'border-cyan-300';
  const basic = 'border-2 md:w-1/4 w-full';
  return (
    <Controller
      key={item.name}
      name="plan"
      control={control}
      render={({ field }) => (
        <div className={`${basic} ${form.plan === item.name && selected}`}>
          <label key={item.name}>
            <input
              class="sr-only peer"
              type="radio"
              required
              {...field}
              value={item.name}
              defaultChecked={form.plan === item.name}
            />
            <div className="flex flex-col md:items-center">
              <p className="font-bold text-blue-950">{item.name}</p>
              <p className="text-slate-500">
                ${item.fee}/{form.billing === 'Yearly' ? 'yr' : 'mo'}
              </p>
              {form.billing === 'Yearly' && (
                <p className=" text-blue-950 font-medium">2 months free</p>
              )}
            </div>
          </label>
        </div>
      )}
    />
  );
};

export default Card;
