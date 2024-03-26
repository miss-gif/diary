import { useReducer, useRef, createContext } from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-02-19").getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 4,
    createdDate: new Date("2024-03-19").getTime(),
    emotionId: 1,
    content: "4번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-04-19").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-05-19").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELTE":
      return state.filter((item) => String(item.id) !== String(action.id));

    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  // 새 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELTE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/Edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
};

export default App;
