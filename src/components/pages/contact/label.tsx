function Label({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex gap-3 items-center">
      <span className="text-white bg-primary w-8 h-8 hover:brightness-90 rounded-full flex items-center justify-center">
        {icon}
      </span>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}

export default Label;
