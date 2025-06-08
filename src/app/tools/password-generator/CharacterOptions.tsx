import { Checkbox } from '@/components/ui/checkbox';

import FormControlLabel from './FormControlLabel';

export default function CharacterOptions({
  includeUpper,
  setIncludeUpper,
  includeLower,
  setIncludeLower,
  includeNumber,
  setIncludeNumber,
  includeSymbol,
  setIncludeSymbol,
  excludeSimilar,
  setExcludeSimilar,
  excludeDuplicate,
  setExcludeDuplicate,
}: {
  includeUpper: boolean;
  setIncludeUpper: (val: boolean) => void;
  includeLower: boolean;
  setIncludeLower: (val: boolean) => void;
  includeNumber: boolean;
  setIncludeNumber: (val: boolean) => void;
  includeSymbol: boolean;
  setIncludeSymbol: (val: boolean) => void;
  excludeSimilar: boolean;
  setExcludeSimilar: (val: boolean) => void;
  excludeDuplicate: boolean;
  setExcludeDuplicate: (val: boolean) => void;
}) {
  return (
    <div>
      <h3 className="font-semibold mb-2 text-center text-lg">
        Character Options
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={includeUpper}
              onCheckedChange={(checked) => setIncludeUpper(!!checked)}
            />
          }
          label="Include Uppercase (A-Z)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeLower}
              onCheckedChange={(checked) => setIncludeLower(!!checked)}
            />
          }
          label="Include Lowercase (a-z)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeNumber}
              onCheckedChange={(checked) => setIncludeNumber(!!checked)}
            />
          }
          label="Include Numbers (0-9)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeSymbol}
              onCheckedChange={(checked) => setIncludeSymbol(!!checked)}
            />
          }
          label="Include Basic Symbols (!@#$%^&*()+)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={excludeSimilar}
              onCheckedChange={(checked) => setExcludeSimilar(!!checked)}
            />
          }
          label="Exclude Similar Characters (iIl1oO0)"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={excludeDuplicate}
              onCheckedChange={(checked) => setExcludeDuplicate(!!checked)}
            />
          }
          label="Exclude Duplicate Characters"
        />
      </div>
    </div>
  );
}
