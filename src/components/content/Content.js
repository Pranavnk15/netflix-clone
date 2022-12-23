import "./Content.css";
import RowData from "../../constants/URLs";
import Row from "../row/Row";

const Content = () => {
  return (
    <div className="contentWrapper">
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
};

export default Content;
