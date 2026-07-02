import type { CaseType } from "../../../types";
import Badge from "./Badge";
import { typeStyles } from "./badge.styles";

interface Props {
  type: CaseType;
}

const TypeBadge = ({ type }: Props) => {
  const s = typeStyles[type];

  return <Badge className={`px-2 py-0.5 ${s.bg} ${s.text}`}>{s.label}</Badge>;
};

export default TypeBadge;
