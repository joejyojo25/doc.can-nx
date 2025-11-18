import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { Card } from '../../ui/card';
import { Plus, Trash2, Home } from 'lucide-react';
import { RoomConfig } from '../hooks/useConfiguratorState';

interface Step2Props {
  rooms: RoomConfig[];
  activeRoomId: string;
  onAddRoom: () => void;
  onDeleteRoom: (id: string) => void;
  onUpdateRoom: (id: string, updates: Partial<RoomConfig>) => void;
  onSetActiveRoom: (id: string) => void;
}

export function Step2_RoomSetup({
  rooms,
  activeRoomId,
  onAddRoom,
  onDeleteRoom,
  onUpdateRoom,
  onSetActiveRoom
}: Step2Props) {
  const activeRoom = rooms.find(r => r.id === activeRoomId) || rooms[0];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Configuration des pièces</h2>
        <p className="text-gray-600">
          Définissez les pièces de votre projet et leurs quantités
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Room tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`relative group ${
                room.id === activeRoomId ? 'ring-2 ring-[#0CB14B]' : ''
              } rounded-lg`}
            >
              <Button
                variant={room.id === activeRoomId ? 'default' : 'outline'}
                onClick={() => onSetActiveRoom(room.id)}
                className={
                  room.id === activeRoomId
                    ? 'bg-gradient-to-r from-[#0CB14B] to-[#0CB14B]/90 hover:from-[#0CB14B]/90 hover:to-[#0CB14B] text-white'
                    : ''
                }
              >
                <Home className="w-4 h-4 mr-2" />
                {room.roomName}
              </Button>
              {rooms.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteRoom(room.id);
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-red-600"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              )}
            </div>
          ))}
          <Button
            variant="outline"
            onClick={onAddRoom}
            className="border-dashed border-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Ajouter une pièce
          </Button>
        </div>

        {/* Active room configuration */}
        <Card className="p-6">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="roomName" className="text-base">
                  Nom de la pièce
                </Label>
                <Input
                  id="roomName"
                  value={activeRoom.roomName}
                  onChange={(e) =>
                    onUpdateRoom(activeRoom.id, { roomName: e.target.value })
                  }
                  placeholder="Ex: Salon, Chambre 1..."
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="quantity" className="text-base">
                  Quantité
                </Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  max="100"
                  value={activeRoom.quantity}
                  onChange={(e) =>
                    onUpdateRoom(activeRoom.id, {
                      quantity: parseInt(e.target.value) || 1
                    })
                  }
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Nombre d'unités identiques pour cette pièce
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <Home className="w-5 h-5 text-[#0CB14B]" />
                <span className="font-medium">Récapitulatif</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>
                  <strong>{activeRoom.roomName}</strong> - {activeRoom.quantity} unité
                  {activeRoom.quantity > 1 ? 's' : ''}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Total du projet : {rooms.reduce((sum, r) => sum + r.quantity, 0)}{' '}
                  plaques réparties sur {rooms.length} pièce
                  {rooms.length > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
          <p className="text-sm text-blue-900">
            💡 <strong>Conseil :</strong> Organisez votre projet par pièces pour une meilleure 
            gestion. Vous pourrez configurer chaque pièce individuellement aux étapes suivantes.
          </p>
        </div>
      </div>
    </div>
  );
}
