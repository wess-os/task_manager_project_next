import styles from "../styles/Tasks.module.scss";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";
import { AddTaskModal } from "./AddTaskModal";
import { DeleteTaskModal } from "./DeleteTaskModal";

export default function Tasks() {
    // creating task arrays
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Fazer compras', completed: false },
        { id: 2, title: 'Estudar React', completed: true },
        { id: 3, title: 'Limpar a casa', completed: false },
        { id: 4, title: 'Ir ao médico', completed: false },
    ]);

    // states of modals
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [taskToDelete, setTaskToDelete] = useState(null);
    const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

    // separating completed from completed
    const completedTasks = tasks.filter(task => task.completed);
    const pendingTasks = tasks.filter(task => !task.completed);

    // changing task status
    const toggleTaskCompletion = (id) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // add task function
    const addTask = (title) => {
        setTasks(prevTasks => [
            ...prevTasks,
            { id: Date.now(), title, completed: false }
        ]);
    };

    // confirm delete task function
    const confirmDeleteTask = (id) => {
        setTaskToDelete(id);
        setIsDeleteTaskModalOpen(true);
    };
    const deleteTask = () => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToDelete));
        setTaskToDelete(null);
        setIsDeleteTaskModalOpen(false);
    };

    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksWrapper}>
                <h2>Suas tarefas de hoje</h2>

                <div className={styles.tasksList}>
                    {pendingTasks.length === 0 ? (
                        <p>Não há tarefas pendentes.</p>
                    ) : (
                        pendingTasks.map(task => (
                            <div key={task.id} className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
                                <div className={styles.taskCheckbox}>
                                    <input
                                        type="checkbox"
                                        checked={task.completed}
                                        onChange={() => toggleTaskCompletion(task.id)}
                                    />
                                </div>

                                <span className={styles.taskTitle}>{task.title}</span>

                                <div className={styles.taskDelete} onClick={() => confirmDeleteTask(task.id)}>
                                    <FiTrash />
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.completedTasks}>
                    <h2>Tarefas finalizadas</h2>

                    <div className={styles.tasksList}>
                        {completedTasks.length === 0 ? (
                            <p>Não há tarefas concluídas.</p>
                        ) : (
                            completedTasks.map(task => (
                                <div key={task.id} className={`${styles.task} ${styles.completed}`}>
                                    <div className={styles.taskCheckbox}>
                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => toggleTaskCompletion(task.id)}
                                        />
                                    </div>

                                    <span className={styles.taskTitle}>{task.title}</span>

                                    <div className={styles.taskDelete} onClick={() => confirmDeleteTask(task.id)}>
                                        <FiTrash />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <button className={styles.addTaskButton} onClick={() => setIsAddTaskModalOpen(true)}>Adicionar nova tarefa</button>

            <AddTaskModal
                isOpen={isAddTaskModalOpen}
                onClose={() => setIsAddTaskModalOpen(false)}
                onAddTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle}
            />

            <DeleteTaskModal
                isOpen={isDeleteTaskModalOpen}
                onClose={() => setIsDeleteTaskModalOpen(false)}
                onDeleteTask={deleteTask}
            />
        </div>
    );
}
