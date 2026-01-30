import { JiraTasks } from "../../components";
import { useTaskStore } from "../../stores";

export const JiraPage = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const pendingTasks = Object.values(tasks).filter(
    (task) => task.status === "open"
  );
  const DoneTasks = Object.values(tasks).filter(
    (task) => task.status === "done"
  );
  const inProgressTasks = Object.values(tasks).filter(
    (task) => task.status === "in-progress"
  );

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks tasks={pendingTasks} title="Pendientes" value="open" />

        <JiraTasks
          tasks={inProgressTasks}
          title="Avanzando"
          value="in-progress"
        />

        <JiraTasks tasks={DoneTasks} title="Terminadas" value="done" />
      </div>
    </>
  );
};
