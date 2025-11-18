import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Label } from '../../ui/label';
import { Home } from 'lucide-react';
import { RoomConfig } from '../hooks/useConfiguratorState';

interface RoomSelectorProps {
  rooms: RoomConfig[];
  activeRoomId: string;
  onSelectRoom: (roomId: string) => void;
}

export function RoomSelector({ rooms, activeRoomId, onSelectRoom }: RoomSelectorProps) {
  if (rooms.length <= 1) return null;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 mb-6 border border-blue-200">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-blue-100">
          <Home className="w-5 h-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <Label className="text-sm text-gray-600 mb-1">
            Configuration de la pièce
          </Label>
          <Select value={activeRoomId} onValueChange={onSelectRoom}>
            <SelectTrigger className="bg-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((room) => (
                <SelectItem key={room.id} value={room.id}>
                  {room.roomName} ({room.quantity} unité{room.quantity > 1 ? 's' : ''})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 ml-14">
        💡 Vous avez {rooms.length} pièces. Configurez chacune individuellement.
      </p>
    </div>
  );
}
