import { Switch } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const BillingComponent = ({ control, form }) => {
  const selected = 'font-bold text-blue-950';
  return (
    <div className="  flex justify-center bg-slate-100 rounded-lg p-3 mb-16">
      <Controller
        name="billing"
        control={control}
        render={({ field }) => (
          <div className="flex  items-center">
            <label className={form.billing === 'Monthly' && selected}>Monthly</label>
            <Switch {...field} defaultChecked={form.billing === 'Yearly'} />
            <label className={form.billing === 'Yearly' && selected}>Yearly</label>
          </div>
        )}
      />
    </div>
  );
};

export default BillingComponent;
