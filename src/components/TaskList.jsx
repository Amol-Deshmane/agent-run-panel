import TaskCard from "./TaskCard";

export default function TaskList({ tasks }) {
  const taskArray = Object.values(tasks);

  const grouped = {};
  taskArray.forEach((task) => {
    const key = task.parallel_group || task.task_id;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(task);
  });

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([groupId, group]) => (
        <div key={groupId}>
          {group.length > 1 ? (
            <div className="grid grid-cols-3 gap-4">
              {group.map((task) => (
                <TaskCard key={task.task_id} task={task} />
              ))}
            </div>
          ) : (
            <TaskCard task={group[0]} />
          )}
        </div>
      ))}
    </div>
  );
}