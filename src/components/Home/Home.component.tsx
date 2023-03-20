
import ListContainer from "./TodosContainer.component/MUI_Container/list.component";
import AddTodo from "./AddTodo.component/ResponsiveContainer.component/addTodo.Component";
import './home.component.scss'
const Home = () => {
  return (
    <>
      <div className="home-contianer">
      <ListContainer />
      {/* <span>addtodo</span> */}
      </div>
    </>
  );
};
export default Home;
