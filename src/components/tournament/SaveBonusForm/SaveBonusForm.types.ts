// Interfaces and types from component SaveBonusForm

// Component Props
export interface SaveBonusFormProps {
  open: boolean;
  onCreate: (values: any) => void;
  onCancel: () => void;
  loading: boolean;
  subscriptionId: string | undefined;
  pollaId: string | undefined;
  blocked: boolean;
}

// Styled Component Props
export interface SaveBonusFormStyledProps {
  className: string;
}
