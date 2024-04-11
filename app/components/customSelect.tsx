import React from "react";
import Select, { Options, SingleValue } from "react-select";
import { Option } from "@/app/models";

export default function CustomSelect<T extends string>({
  id,
  initialValue,
  onChange,
  className,
  placeholder,
  isClearable,
  options,
}: {
  id: string;
  initialValue?: Option<T>;
  onChange?: (search: T | undefined) => void;
  className?: string;
  placeholder?: string;
  isClearable?: boolean;
  options: Options<Option<T>>;
}) {
  const onOptionChanged = (option: SingleValue<Option<T>>) => {
    onChange?.(option?.value);
  };
  return (
    <div className={className}>
      <Select
        instanceId={id}
        classNames={{
          control: () => "w-64 !bg-slate-700 rounded-lg shadow-sm !border-0",
          menuList: () => "!bg-slate-600",
          option: ({ isFocused }) =>
            isFocused ? "!bg-slate-900" : "!bg-slate-600",
          singleValue: () => "!text-slate-100",
        }}
        defaultValue={initialValue}
        options={options}
        onChange={onOptionChanged}
        placeholder={placeholder}
        isClearable={Boolean(isClearable)}
      />
    </div>
  );
}
