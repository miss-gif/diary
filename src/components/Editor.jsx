import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useState } from "react";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "매우 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "무난",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "매우 나쁨",
  },
];

const getStringedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 월과 일이 한 자리 수일 경우 앞에 0을 추가해줍니다.
  month = month < 10 ? `0${month}` : month;
  date = date < 10 ? `0${date}` : date;

  return `${year}-${month}-${date}`;
};

const Editor = () => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    let parsedValue = value;
    if (name === "createdDate") {
      parsedValue = new Date(value);
    }

    setInput({
      ...input,
      [name]: parsedValue,
    });
  };

  const emotionId = 1;

  return (
    <div className="Editor">
      <section className="date_section">
        <h3>오늘의 날짜</h3>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="emotion_section">
        <h3>오늘 감정</h3>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h3>오늘의 일기</h3>
        <textarea name="" id="" placeholder="오늘은 어땠나요?"></textarea>
      </section>
      <section className="button_section">
        <Button text="취소하기" />
        <Button text="작성완료" type="POSITIVE" />
      </section>
    </div>
  );
};

export default Editor;
