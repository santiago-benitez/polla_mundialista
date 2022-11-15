// Interfaces and types from component CreateTournamentForm

// Component Props
export interface CreateTournamentFormProps {
  open: boolean;
  onCreate: (values: CreateTournamentFormValues) => void;
  onCancel: () => void;
  loading: boolean;
}

// Styled Component Props
export interface CreateTournamentFormStyledProps {
  className: string;
}

export interface CreateTournamentFormValues {
  name: string;
  tournamentPollasMundialistasId: string;
  subscriptionPrice?: number;
  // firstPrize: number;
  // secondPrize: number;
  // thirdPrize: number;
  // fourthPrize: number;
  // fifthPrize: number;
}
