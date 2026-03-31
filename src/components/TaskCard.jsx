import { motion } from "framer-motion";

export default function TaskCard({ task }) {
  const statusColor = {
    running: "border-blue-500",
    complete: "border-green-500",
    failed: "border-red-500",
    cancelled: "border-gray-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-[#1e293b] p-4 rounded-xl border-l-4 ${statusColor[task.status]} shadow-md`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-white text-sm">
          {task.label}
        </h3>

        <span className="text-xs px-2 py-1 rounded bg-gray-700 text-white">
          {task.status}
        </span>
      </div>

      {/* Agent */}
      <p className="text-xs text-gray-300 mt-1">
        Agent: {task.agent}
      </p>

      {/* Logs */}
      <div className="mt-3 text-xs space-y-1">
        {task.logs.map((log, i) => (
          <div key={i} className="text-gray-200">
            {log.type === "tool_call" && `🔧 ${log.tool}`}
            {log.type === "tool_result" && `✅ ${log.output_summary}`}
          </div>
        ))}
      </div>

      {/* Outputs */}
      <div className="mt-2 text-sm">
        {task.outputs.map((out, i) => (
          <p
            key={i}
            className={
              out.is_final
                ? "text-green-400 font-medium"
                : "text-gray-200"
            }
          >
            {out.content}
          </p>
        ))}
      </div>
    </motion.div>
  );
}