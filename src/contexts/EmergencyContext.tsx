import React, { createContext, useReducer, ReactNode } from 'react';

interface EmergencyState {
  isActive: boolean;
  type: string;
  timestamp: Date | null;
}

type EmergencyAction = 
  | { type: 'TRIGGER_EMERGENCY'; payload: { type: string } }
  | { type: 'CLEAR_EMERGENCY' };

interface EmergencyContextType {
  state: EmergencyState;
  dispatch: React.Dispatch<EmergencyAction>;
}

export const EmergencyContext = createContext<EmergencyContextType | undefined>(undefined);

const emergencyReducer = (state: EmergencyState, action: EmergencyAction): EmergencyState => {
  switch (action.type) {
    case 'TRIGGER_EMERGENCY':
      return { 
        isActive: true, 
        type: action.payload.type,
        timestamp: new Date()
      };
    case 'CLEAR_EMERGENCY':
      return { 
        isActive: false, 
        type: '',
        timestamp: null
      };
    default:
      return state;
  }
};

interface EmergencyProviderProps {
  children: ReactNode;
}

export const EmergencyProvider: React.FC<EmergencyProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(emergencyReducer, {
    isActive: false,
    type: '',
    timestamp: null,
  });

  return (
    <EmergencyContext.Provider value={{ state, dispatch }}>
      {children}
    </EmergencyContext.Provider>
  );
};
