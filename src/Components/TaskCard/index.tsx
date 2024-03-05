import { Task } from '../../Types';

export function TaskCard({ title, id, points }: Task) {
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
