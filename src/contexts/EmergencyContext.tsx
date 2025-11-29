import React, { createContext, useContext, useReducer } from 'react';

interface EmergencyState {
    isActive: boolean;
    type: string;
    timestamp: Date | null;
}

type EmergencyAction =
    | { type: 'TRIGGER_EMERGENCY'; payload: { type: string } }
    | { type: 'CLEAR_EMERGENCY' };

const EmergencyContext = createContext<{
    state: EmergencyState;
    dispatch: React.Dispatch<EmergencyAction>;
} | null>(null);

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

export const EmergencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

export const useEmergency = () => {
    const context = useContext(EmergencyContext);
    if (!context) {
        throw new Error('useEmergency must be used within an EmergencyProvider');
    }

    const triggerEmergency = (data: { type: string; location?: string; timestamp?: Date }) => {
        context.dispatch({
            type: 'TRIGGER_EMERGENCY',
            payload: { type: data.type }
        });
    };

    const clearEmergency = () => {
        context.dispatch({ type: 'CLEAR_EMERGENCY' });
    };

    return {
        isEmergency: context.state.isActive,
        emergencyType: context.state.type,
        triggerEmergency,
        clearEmergency,
    };
};