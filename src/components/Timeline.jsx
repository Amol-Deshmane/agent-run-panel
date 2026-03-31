import { motion } from "framer-motion";

export default function Timeline({ tasks }) {
  const taskArray = Object.values(tasks);

  return (
    <div className="relative border-l border-gray-700 ml-4 mt-6">
      {taskArray.map((task, index) => (
        <motion.div
          key={task.task_id}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 ml-6"
        >
          <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full text-xs">
            {index + 1}
          </span>

          <div className="bg-gray-800 p-3 rounded-lg">
            <h4 className="text-sm font-semibold">{task.label}</h4>
            <p className="text-xs text-gray-400">{task.status}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}