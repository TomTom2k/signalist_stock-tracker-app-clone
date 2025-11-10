'use client';
import React from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

import { Label } from '@/components/ui/label';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';

interface SelectFieldProps<T extends FieldValues>
	extends Omit<FormInputProps, 'register'> {
	options: readonly Option[];
	control: Control<T>;
	required?: boolean;
}

const SelectField = <T extends FieldValues>({
	name,
	label,
	required,
	placeholder,
	options,
	control,
	error,
	validation,
}: SelectFieldProps<T>) => {
	return (
		<div className='space-y-2'>
			<Label htmlFor={name} className='form-label'>
				{label}
			</Label>
			<Controller
				name={name as Path<T>}
				control={control}
				rules={{
					required: required
						? `Please select ${label.toLowerCase()}`
						: false,
				}}
				render={({ field }) => (
					<Select value={field.value} onValueChange={field.onChange}>
						<SelectTrigger className='select-trigger'>
							<SelectValue placeholder={placeholder} />
						</SelectTrigger>
						<SelectContent className='bg-gray-800 border-gray-600 text-white'>
							{options.map((option) => (
								<SelectItem
									key={option.value}
									value={option.value}>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				)}
			/>
			{error && <p className='text-red-500 text-sm'>{error.message}</p>}
		</div>
	);
};

export default SelectField;
