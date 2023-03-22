import'./card.component.scss';
const Card=()=>{
    return<>
    <div className='card-container'>
        <div className='card-detail'>
            <div className='card-header'>
                <div className='card-title'>Todo Name</div>
                <span className='card-todo-color'></span>
            </div>
            <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore impedit atque perspiciatis voluptas esse sunt nam explicabo officia, ex iure culpa laudantium repellat quisquam! Ad facere necessitatibus non distinctio id</p>
        </div>
        <div className='card-buttons'>
            <button className='card-button'>Edit</button>
            <button className='card-button'>Delete</button>
        </div>
    </div>
    </>
}
export default Card;
