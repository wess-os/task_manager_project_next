import styles from "../styles/Modal.module.scss";

export const DeleteTaskModal = ({ isOpen, onClose, onDeleteTask }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Confirmar Exclusão</h2>
                <p>Tem certeza que deseja excluir esta tarefa?</p>
                <div className={styles.modalActions}>
                    <button onClick={onDeleteTask}>Excluir</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
};
