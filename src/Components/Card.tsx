type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="bg-slate-200 w-full sm:w-80 m-4 p-2 h-64 flex flex-col rounded-lg shadow-lg">
      {children}
    </div>
  );
}
