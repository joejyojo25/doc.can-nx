import { Switch } from '../../ui/switch';
import { Label } from '../../ui/label';
import { Ruler, Grid } from 'lucide-react';

interface PreviewControlsProps {
  showTech: boolean;
  showGuides: boolean;
  onShowTechChange: (value: boolean) => void;
  onShowGuidesChange: (value: boolean) => void;
}

export function PreviewControls({
  showTech,
  showGuides,
  onShowTechChange,
  onShowGuidesChange
}: PreviewControlsProps) {
  return (
    <div className="flex gap-4 items-center justify-center mb-3 p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2">
        <Switch
          id="tech"
          checked={showTech}
          onCheckedChange={onShowTechChange}
        />
        <Label htmlFor="tech" className="flex items-center gap-2 cursor-pointer text-sm">
          <Ruler className="w-4 h-4" />
          Dimensions
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch
          id="guides"
          checked={showGuides}
          onCheckedChange={onShowGuidesChange}
        />
        <Label htmlFor="guides" className="flex items-center gap-2 cursor-pointer text-sm">
          <Grid className="w-4 h-4" />
          Guides
        </Label>
      </div>
    </div>
  );
}
