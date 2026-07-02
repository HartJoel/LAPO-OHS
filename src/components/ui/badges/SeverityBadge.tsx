import type { Severity } from "../../../types";
import Badge from "./Badge";
import { severityStyles } from "./badge.styles";


interface Props {
  severity: Severity;
}

const SeverityBadge = ({ severity }: Props) => {
  const s = severityStyles[severity];

  return (
    <Badge className={`px-2 py-0.5 border ${s.bg} ${s.text} ${s.border}`}>
      {severity}
    </Badge>
  );
};

export default SeverityBadge;