export default function FormControlLabel({
  control,
  label,
}: {
  control: React.ReactNode;
  label: React.ReactNode;
}) {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer select-none">
      {control}
      <span className="text-sm">{label}</span>
    </label>
  );
}
