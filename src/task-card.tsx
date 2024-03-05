interface CardProps {
  title: string;
  id: string;
  points: number;
}

export function Card({ title, id, points }: CardProps) {
  return (
    <div className="border rounded-lg px-2 m-2 bg-green-50">
      <div className="text-base font-semibold py-2">{title}</div>
      <div className="flex justify-between py-2 text-gray-700">
        <div>{id}</div>
        <div>{points}</div>
      </div>
    </div>
  );
}
