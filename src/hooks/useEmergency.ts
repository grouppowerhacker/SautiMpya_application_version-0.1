import { useContext } from 'react';
import { EmergencyContext } from '@contexts/EmergencyContext';

export const useEmergency = () => {
  const context = useContext(EmergencyContext);
  
  if (!context) {
    return {
      isEmergency: false,
      emergencyType: '',
      triggerEmergency: () => {},
      clearEmergency: () => {},
    };
  }

  const { state, dispatch } = context;

  const triggerEmergency = (data: { type: string; location?: string; timestamp?: Date }) => {
    dispatch({ 
      type: 'TRIGGER_EMERGENCY', 
      payload: { type: data.type } 
    });
  };

  const clearEmergency = () => {
    dispatch({ type: 'CLEAR_EMERGENCY' });
  };

  return {
    isEmergency: state.isActive,
    emergencyType: state.type,
    triggerEmergency,
    clearEmergency,
  };
};
