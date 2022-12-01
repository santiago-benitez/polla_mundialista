// Interfaces and types from component SaveMatchForm

import { Match } from "../../../API";

// Component Props
export interface SaveMatchFormProps {
  open: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  loading: boolean;
  match: Match | undefined;
  blocked: boolean;
  pollaId: string | undefined;
  isElimination: boolean;
}

// Styled Component Props
export interface SaveMatchFormStyledProps {
  className: string;
}
