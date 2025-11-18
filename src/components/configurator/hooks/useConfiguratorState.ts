import { useState, useCallback } from 'react';

export interface ButtonsPerGang {
  [key: number]: number;
}

export interface Engravings {
  [key: string]: string;
}

export interface RoomConfig {
  id: string;
  roomName: string;
  quantity: number;
  type: 'eu' | 'uk' | 'us' | 'legrand-1m' | 'legrand-2m';
  finishCategory: "chaudes" | "froides" | "speciales";
  selectedFinish: string;
  gangs?: number;
  btnsPerGang?: ButtonsPerGang;
  gapMm?: number;
  bord?: string;
  buttonTypes?: { [key: string]: 'push' | 'rotative' }; // For Legrand plates
  engravings: Engravings;
  numLines: 1 | 2;
  textPosition: "above" | "below";
  textCase: "uppercase" | "lowercase" | "mixed";
  visserie: "vissee" | "magnet";
}

export interface ConfiguratorState {
  projectName: string;
  comments: string;
  rooms: RoomConfig[];
  activeRoomId: string;
  currentStep: number;
}

const createDefaultRoom = (id: string): RoomConfig => ({
  id,
  roomName: `Pièce ${id}`,
  quantity: 1,
  type: 'eu', // Default to Standard EU
  finishCategory: 'chaudes',
  selectedFinish: 'CA',
  gangs: 2,
  btnsPerGang: { 1: 2, 2: 2 },
  gapMm: 0,
  bord: 'Plat',
  buttonTypes: {}, // For Legrand rotative/push buttons
  engravings: {},
  numLines: 1,
  textPosition: 'below',
  textCase: 'mixed',
  visserie: 'vissee'
});

export function useConfiguratorState() {
  const [state, setState] = useState<ConfiguratorState>({
    projectName: '',
    comments: '',
    rooms: [createDefaultRoom('1')],
    activeRoomId: '1',
    currentStep: 0
  });

  const updateProjectInfo = useCallback((updates: Partial<Pick<ConfiguratorState, 'projectName' | 'comments'>>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const setCurrentStep = useCallback((step: number) => {
    setState(prev => ({ ...prev, currentStep: step }));
  }, []);

  const addRoom = useCallback(() => {
    setState(prev => {
      const newId = String(Math.max(...prev.rooms.map(r => parseInt(r.id))) + 1);
      const newRoom = createDefaultRoom(newId);
      return {
        ...prev,
        rooms: [...prev.rooms, newRoom],
        activeRoomId: newId
      };
    });
  }, []);

  const deleteRoom = useCallback((id: string) => {
    setState(prev => {
      if (prev.rooms.length === 1) return prev;
      const newRooms = prev.rooms.filter(r => r.id !== id);
      return {
        ...prev,
        rooms: newRooms,
        activeRoomId: prev.activeRoomId === id ? newRooms[0].id : prev.activeRoomId
      };
    });
  }, []);

  const updateRoom = useCallback((roomId: string, updates: Partial<RoomConfig>) => {
    setState(prev => ({
      ...prev,
      rooms: prev.rooms.map(room =>
        room.id === roomId ? { ...room, ...updates } : room
      )
    }));
  }, []);

  const setActiveRoom = useCallback((roomId: string) => {
    setState(prev => ({ ...prev, activeRoomId: roomId }));
  }, []);

  const activeRoom = state.rooms.find(r => r.id === state.activeRoomId) || state.rooms[0];

  const updateActiveRoom = useCallback((updates: Partial<RoomConfig>) => {
    updateRoom(state.activeRoomId, updates);
  }, [state.activeRoomId, updateRoom]);

  return {
    state,
    projectName: state.projectName,
    comments: state.comments,
    rooms: state.rooms,
    activeRoom,
    activeRoomId: state.activeRoomId,
    currentStep: state.currentStep,
    updateProjectInfo,
    setCurrentStep,
    addRoom,
    deleteRoom,
    updateRoom,
    updateActiveRoom,
    setActiveRoom
  };
}
