git statusimport { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

import Button from "./components/Button";
import Header from "./components/Header";
import { getEmotionImage } from "./util/get-emotion-image";

const App = () => {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("333");
        }}
      ></Button>
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("333");
        }}
      ></Button>
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("333");
        }}
      ></Button>
      <div>
        <img src={getEmotionImage(1)} alt="" />
        <img src={getEmotionImage(2)} alt="" />
        <img src={getEmotionImage(3)} alt="" />
        <img src={getEmotionImage(4)} alt="" />
        <img src={getEmotionImage(5)} alt="" />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>new</Link>
        <Link to={"/diary"}>diary</Link>
        <Link to={"/Edit"}>Edit</Link>
      </div>
      <button onClick={onClickButton}>new 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/Edit/:id" element={<Edit />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};

export default App;
