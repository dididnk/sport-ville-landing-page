import React from 'react';
import { COLORS } from '../../utils/constants';

interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  textarea = false,
  rows = 4
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {textarea ? (
        <textarea
          id={id}
          rows={rows}
          className={`w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border focus:outline-none focus:ring-2 transition-all text-white placeholder-gray-400 ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-transparent focus:ring-blue-500'
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={`w-full px-4 py-3 rounded-md bg-white bg-opacity-10 border focus:outline-none focus:ring-2 transition-all text-white placeholder-gray-400 ${
            error ? 'border-red-500 focus:ring-red-500' : 'border-transparent focus:ring-blue-500'
          }`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      
      {error && (
        <p className="mt-1 text-sm" style={{ color: COLORS.error }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;