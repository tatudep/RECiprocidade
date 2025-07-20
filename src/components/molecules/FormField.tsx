import React from 'react';
import { Label } from '../atoms/ui/label';
import { Input } from '../atoms/ui/input';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function MoleculeFormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  value,
  onChange,
  className
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <Label htmlFor={name} className={error ? "text-destructive" : ""}>
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={error ? "border-destructive" : ""}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  );
} 