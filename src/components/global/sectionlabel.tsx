function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-5 bg-[#db4444] rounded h-10"></span>
      <span className="text-[#db4444] font-bold text-sm">{label}</span>
    </div>
  );
}

export default SectionLabel;
