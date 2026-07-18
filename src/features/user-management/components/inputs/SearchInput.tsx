import { Search } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
}: Props) {
  return (
    <div className="relative mb-5">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-gray-200
          bg-white
          py-2.5
          pl-10
          pr-4
          text-sm
          transition-colors
          focus:border-orange-400
          focus:outline-none
          focus:ring-2
          focus:ring-orange-100
        "
      />
    </div>
  );
}