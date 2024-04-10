import { ChangeEventHandler, useState } from "react";
import { DebounceInput } from "react-debounce-input";

export default function Search({
  initialValue,
  onChange,
  className,
}: {
  initialValue?: string;
  onChange?: (search: string | undefined) => void;
  className?: string;
}) {
  const [value, setValue] = useState<string | undefined>(initialValue);

  const onSearchInputChanged: ChangeEventHandler<HTMLInputElement> = (
    event,
  ) => {
    const newQuery = event.target.value?.toLowerCase();
    setValue(newQuery);
    onChange?.(newQuery);
  };

  const onClearBtnClick = () => {
    setValue(undefined);
    onChange?.(undefined);
  };

  return (
    <div className={className}>
      <DebounceInput
        className="w-52 bg-slate-700 rounded-lg shadow-sm p-1 mr-2"
        placeholder="Search for location"
        debounceTimeout={400}
        value={value || ""}
        minLength={3}
        onChange={onSearchInputChanged}
      />
      <button
        type="button"
        className="border-2 rounded-full py-1 px-2 text-sm"
        onClick={onClearBtnClick}
      >
        clear
      </button>
    </div>
  );
}
