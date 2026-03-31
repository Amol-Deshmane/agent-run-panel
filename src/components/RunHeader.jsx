import { useEffect, useState } from "react";

export default function RunHeader({ run }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (run.status !== "running") return;

    const interval = setInterval(() => {
      setTime(Date.now() - run.startTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [run]);

  return (
    <div className="bg-gray-800 p-4 rounded-xl mb-4 shadow">
      <h2 className="text-white font-semibold">{run.query}</h2>
      <div className="flex gap-4 mt-2 text-sm">
        <span>Status: {run.status}</span>
        <span>Time: {(time / 1000).toFixed(1)}s</span>
      </div>
    </div>
  );
}