import { useEffect, useState } from "react";
import RunHeader from "./components/RunHeader";
import TaskList from "./components/TaskList";
import FinalOutput from "./components/FinalOutput";
import EmptyState from "./components/EmptyState";
import Timeline from "./components/Timeline";

import { runEmitter } from "./mock/emitter";
import successData from "./mock/fixtures/run_success.json";

function App() {
  const [run, setRun] = useState(null);
  const [tasks, setTasks] = useState({});
  const [finalOutput, setFinalOutput] = useState(null);

  useEffect(() => {
    runEmitter(successData, handleEvent);
  }, []);

  const handleEvent = (event) => {
    switch (event.type) {
      case "run_started":
        setRun({
          query: event.query,
          status: "running",
          startTime: Date.now(),
        });
        break;

      case "task_spawned":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...event,
            status: "running",
            logs: [],
            outputs: [],
          },
        }));
        break;

      case "tool_call":
      case "tool_result":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...prev[event.task_id],
            logs: [...prev[event.task_id].logs, event],
          },
        }));
        break;

      case "partial_output":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...prev[event.task_id],
            outputs: [...prev[event.task_id].outputs, event],
          },
        }));
        break;

      case "task_update":
        setTasks((prev) => ({
          ...prev,
          [event.task_id]: {
            ...prev[event.task_id],
            status: event.status,
            error: event.error,
            reason: event.reason,
          },
        }));
        break;

      case "run_complete":
        setRun((prev) => ({ ...prev, status: "complete" }));
        setFinalOutput(event.output);
        break;

      case "run_error":
        setRun((prev) => ({ ...prev, status: "failed" }));
        break;

      default:
        break;
    }
  };

  return (
<div className="min-h-screen bg-[#0f172a] text-white p-6">      {!run && <EmptyState />}

      {run && (
        <>
          <RunHeader run={run} />
          <TaskList tasks={tasks} />
          <Timeline tasks={tasks} />
          {finalOutput && <FinalOutput output={finalOutput} />}
        </>
      )}
    </div>
  );
}
export default App;