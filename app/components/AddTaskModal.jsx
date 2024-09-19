import styles from "../styles/Modal.module.scss";

export const AddTaskModal = ({ isOpen, onClose, onAddTask, newTaskTitle, setNewTaskTitle }) => {
    if (!isOpen) return null;

    // add task function
    const handleAddTask = () => {
        if (newTaskTitle.trim()) {
            onAddTask(newTaskTitle);
            setNewTaskTitle('');
            onClose();
        }
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Nova Tarefa</h2>

                <label htmlFor="">Título</label>

                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Digite"
                />

                <div className={styles.modalActions}>
                    <button className={styles.cancelButton} onClick={onClose}>Cancelar</button>
                    <button className={styles.addTaskButton} onClick={handleAddTask}>Adicionar</button>
                </div>
            </div>
        </div>
    );
};
