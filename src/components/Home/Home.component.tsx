import ListContainer from "./TodosContainer.component/MUI_Container/list.component";

import ResponsiveForm from "./AddTodo.component/ResponsiveContainer.component/responsiveForm.component/responsiveForm.component";
import "./home.component.scss";
const Home = () => {
  return (
    <>
      <div className="home-contianer">
        <ListContainer />
        <ResponsiveForm />
      </div>
    </>
  );
};
export default Home;
