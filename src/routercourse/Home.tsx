import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate();
  const data = {
    message: "Hello",
    name: "Bam",
    age: 20,
  };
  return (
    <>
      <h1>Home</h1>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() =>
          navigator("/home/contact?id=5&name=bam#section1", {
            state: {
              data: data,
              id: "id001",
            },
          })
        }
      >
        เกี่ยวกับเรา
      </button>
      
    </>
  );
};
export default Home;
{
  /* <Link to="/home">
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          เข้าสู่เว็บไซต์
        </button>
      </Link> */
}
