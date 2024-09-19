import styles from "../styles/Modal.module.scss";

export const AddTaskModal = ({ isOpen, onClose, onAddTask, newTaskTitle, setNewTaskTitle }) => {
    if (!isOpen) return null;

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
                <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Título da tarefa"
                />
                <div className={styles.modalActions}>
                    <button onClick={handleAddTask}>Adicionar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};
