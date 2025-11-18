import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import { Textarea } from '../../ui/textarea';
import { Card } from '../../ui/card';
import { FileText, MessageSquare } from 'lucide-react';

interface Step1Props {
  projectName: string;
  comments: string;
  onUpdate: (updates: { projectName?: string; comments?: string }) => void;
}

export function Step1_ProjectInfo({ projectName, comments, onUpdate }: Step1Props) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl mb-2">Informations du projet</h2>
        <p className="text-gray-600">
          Commencez par nommer votre projet et ajouter des commentaires si nécessaire
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <FileText className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label htmlFor="projectName" className="text-base">
                Nom du projet
              </Label>
              <p className="text-sm text-gray-500 mb-3">
                Ce nom apparaîtra sur vos documents PDF
              </p>
              <Input
                id="projectName"
                placeholder="Ex: Villa Moderne - Salon et Chambres"
                value={projectName}
                onChange={(e) => onUpdate({ projectName: e.target.value })}
                className="text-base"
              />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-[#0CB14B]/10">
              <MessageSquare className="w-6 h-6 text-[#0CB14B]" />
            </div>
            <div className="flex-1">
              <Label htmlFor="comments" className="text-base">
                Commentaires (optionnel)
              </Label>
              <p className="text-sm text-gray-500 mb-3">
                Notes internes, instructions spéciales, ou détails du projet
              </p>
              <Textarea
                id="comments"
                placeholder="Ex: Client préfère les finitions Bronze. Installation prévue pour Mars 2025."
                value={comments}
                onChange={(e) => onUpdate({ comments: e.target.value })}
                rows={6}
                className="text-base resize-none"
              />
            </div>
          </div>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-900">
            💡 <strong>Conseil :</strong> Un nom de projet clair facilite la gestion de vos configurations 
            et améliore la communication avec vos clients.
          </p>
        </div>
      </div>
    </div>
  );
}
