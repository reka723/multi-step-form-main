import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

const Card = ({ item, form, control }) => {
  const selected = 'border-cyan-300';
  const basic = 'border-2 md:w-1/5 w-full md:h-52 md:flex md:items-center md:rounded-xl p-2 ';

  const [svgSource, setSvgSource] = useState(null);

  // Function to dynamically import SVG
  const importSvg = async (name) => {
    try {
      const svgModule = await import(`../../public/assets/images/${name}.svg`);
      return svgModule.default;
    } catch (error) {
      console.error(`Error loading SVG ${name}:`, error);
      return null;
    }
  };

  useEffect(() => {
    // Load the SVG when the component mounts or when item.name changes
    importSvg(`icon-${item.name.toLowerCase()}`).then((source) => {
      setSvgSource(source);
    });
  }, [item.name]);

  return (
    <Controller
      key={item.name}
      name="plan"
      control={control}
      render={({ field }) => (
        <div className={`${basic} ${form.plan === item.name && selected}`}>
          <label className="md:h-full">
            <input
              className="sr-only peer"
              type="radio"
              required
              {...field}
              value={item.name}
              defaultChecked={form.plan === item.name}
            />
            <div className="flex md:flex-col md:text-left md:h-full md:justify-between p-2">
              {svgSource && (
                <img className="" src={svgSource} height={50} width={50} alt={item.name} />
              )}
              <div>
                <p className="font-bold text-blue-950">{item.name}</p>
                <p className="text-slate-500">
                  ${item.fee}/{form.billing === 'Yearly' ? 'yr' : 'mo'}
                </p>
                {form.billing === 'Yearly' && (
                  <p className="text-blue-950 font-medium">2 months free</p>
                )}
              </div>
            </div>
          </label>
        </div>
      )}
    />
  );
};

export default Card;
