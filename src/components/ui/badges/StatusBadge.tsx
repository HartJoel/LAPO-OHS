import type { CaseStatus } from "../../../types";
import Badge from "./Badge";
import { statusStyles } from "./badge.styles";


interface Props {
  status: CaseStatus;
}

const StatusBadge = ({ status }: Props) => {
  const s = statusStyles[status];

  return (
    <Badge className={`gap-1.5 px-2.5 py-1 ${s.bg} ${s.text}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
      {status}
    </Badge>
  );
};

export default StatusBadge;