// Interfaces and types from component SaveMatchForm

import { Match } from "../../../API";

// Component Props
export interface SaveMatchFormProps {
  open: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  loading: boolean;
  match: Match | undefined;
}

// Styled Component Props
export interface SaveMatchFormStyledProps {
  className: string;
}
