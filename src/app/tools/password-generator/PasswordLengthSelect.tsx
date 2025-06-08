import { Label } from '@/components/ui/label';
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from '@/components/ui/select';

export default function PasswordLengthSelect({
  length,
  setLength,
}: {
  length: number;
  setLength: (len: number) => void;
}) {
  return (
    <div>
      <Label htmlFor="length" className="font-semibold mb-1 block">
        Password Length
      </Label>
      <Select
        onValueChange={(val) => setLength(Number(val))}
        value={length.toString()}
      >
        <SelectTrigger id="length" className="w-full">
          <SelectValue placeholder="Select length" />
        </SelectTrigger>
        <SelectContent>
          {[8, 12, 16, 20, 24, 30].map((val) => (
            <SelectItem key={val} value={val.toString()}>
              {val} characters
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
