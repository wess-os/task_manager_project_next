import styles from "../styles/Tasks.module.scss";

export default function Tasks() {
    const tasks = [
        { id: 1, title: 'Fazer compras', completed: false },
        { id: 2, title: 'Estudar React', completed: true },
        { id: 3, title: 'Limpar a casa', completed: false },
        { id: 4, title: 'Ir ao médico', completed: false },
    ]

    const completedTasks = tasks.filter(task => task.completed)

    return (
        <div className={styles.tasksContainer}>
            <div className={styles.tasksWrapper}>
                <h2>Tarefas</h2>
                <div className={styles.tasksList}>
                    {tasks.map(task => (
                        <div key={task.id} className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
                            <div className={styles.taskCheckbox}>
                                <input type="checkbox" checked={task.completed} />
                            </div>
                            <span className={styles.taskTitle}>{task.title}</span>
                            <div className={styles.taskDelete}>
                                <i className="fas fa-trash"></i>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.completedTasks}>
                    <h2>Tarefas finalizadas</h2>
                    <div className={styles.tasksList}>
                        {completedTasks.map(task => (
                            <div key={task.id} className={`${styles.task} ${styles.completed}`}>
                                <div className={styles.taskCheckbox}>
                                    <input type="checkbox" checked={task.completed} />
                                </div>
                                <span className={styles.taskTitle}>{task.title}</span>
                                <div className={styles.taskDelete}>
                                    <i className="fas fa-trash"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className={styles.addTaskButton}>Adicionar nova tarefa</button>
        </div>
    )
}
