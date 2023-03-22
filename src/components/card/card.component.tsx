import styles from'./card.module.scss';
const Card=()=>{
    return<>
    <div className={styles['card-container']}>
        <div className={styles['card-detail']}>
            <div className={styles['card-header']}>
                <div className={styles['card-title']}>Todo Name</div>
                <span className={styles['card-todo-color']}></span>
            </div>
            <p className={styles['card-text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit atque perspiciatis voluptas<button className={styles['card-text-option']}>more...</button></p>
        </div>
        <div className={styles['card-buttons']}>
            <button className={styles['card-button']}>Edit</button>
            <button className={styles['card-button']}>Delete</button>
        </div>
    </div>
    </>
}
export default Card;
