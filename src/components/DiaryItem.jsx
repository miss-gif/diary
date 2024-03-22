import { getEmotionImage } from "../util/get-emotion-image";
import Button from "../components/Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(1)} alt="" />
      </div>
      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
