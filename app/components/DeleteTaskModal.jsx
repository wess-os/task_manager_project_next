import styles from "../styles/Modal.module.scss";

export const DeleteTaskModal = ({ isOpen, onClose, onDeleteTask }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Deletar tarefa</h2>

                <p>Tem certeza que você deseja deletar essa tarefa?</p>

                <div className={styles.modalActions}>
                    <button className={styles.cancelButton} onClick={onClose}>Cancelar</button>
                    <button className={styles.deleteTaskButton} onClick={onDeleteTask}>Deletar</button>
                </div>
            </div>
        </div>
    );
};
