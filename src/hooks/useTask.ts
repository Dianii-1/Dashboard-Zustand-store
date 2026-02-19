import { DragEvent, useState } from "react";
import Swal from "sweetalert2";
import { useTaskStore } from "../stores";
import { TaskStatus } from "../interfaces";

interface Options {
  status: TaskStatus;
}
export const useTask = ({ status }: Options) => {
  const isDragging = useTaskStore((state) => !!state.draggingTaskId);
  const onTaskDrop = useTaskStore((state) => state.onTaskDrop);
  const addTask = useTaskStore((state) => state.addTask);
  const [onDragOver, setOnDragOver] = useState(false);

  const hanldeDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(true);
  };

  const hanldeDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
  };

  const hanldeDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setOnDragOver(false);
    onTaskDrop(status);
  };

  const handleAddTask = async () => {
    const { isConfirmed, value } = await Swal.fire({
      title: "Nueva tarea",
      input: "text",
      inputLabel: "Nombre de la tarea",
      inputPlaceholder: "Ingrese el nombre de la tarea",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "Debe ingresar un nombre para la tarea";
        }
      },
    });

    if (!isConfirmed) return;

    addTask(value, status);
  };

  return {
    isDragging,
    onDragOver,
    hanldeDragOver,
    hanldeDragLeave,
    hanldeDrop,
    handleAddTask,
  };
};
