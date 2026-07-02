import Badge from "./Badge";

const styles = {
  green: "bg-green-50 text-green-700",
  amber: "bg-amber-50 text-amber-700",
  red: "bg-red-50 text-red-700",
  gray: "bg-gray-100 text-gray-500",
};

interface Props {
  color: keyof typeof styles;
  label: string;
}

const SLABadge = ({ color, label }: Props) => (
  <Badge className={`px-2 py-0.5 ${styles[color]}`}>
    {label}
  </Badge>
);

export default SLABadge;