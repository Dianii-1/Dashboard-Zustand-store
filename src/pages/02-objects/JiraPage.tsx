import { JiraTasks } from "../../components";
import { useTaskStore } from "../../stores";

export const JiraPage = () => {
  const tasks = useTaskStore((state) => state.tasks);

  const pending = Object.values(tasks).filter((task) => task.status === "open");
  const ready = Object.values(tasks).filter((task) => task.status === "done");
  const inProgress = Object.values(tasks).filter(
    (task) => task.status === "in-progress"
  );

  console.log({ pending, ready, inProgress }, { ready });
  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" value="pending" />

        <JiraTasks title="Avanzando" value="in-progress" />

        <JiraTasks title="Terminadas" value="done" />
      </div>
    </>
  );
};
