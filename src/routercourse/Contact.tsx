import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  // const { data, id } = location?.state;
  const data = location?.state?.data;
  // const id = location?.state.id;
  const path_name = location?.pathname;
  // console.log(data ,id);
  const param = location?.search;
  const hash = location?.hash;

  console.log(hash);

  return (
    <>
      <h1>Contact</h1>
      <div>hash: {hash}</div>
      <div>param: {param}</div>
      <div style={{ color: path_name === "/home/contact" ? "red" : "green" }}>
        Name: {data?.name}
      </div>
      {/* {path_name === "/home/contact" && <div style={{color:"red"}}>ชื่อ: {data.name}</div>} */}
      <div>Age: {data?.age}</div>
      {/* <div>ID: {id}</div> */}
      <div>Message: {data?.message}</div>
    </>
  );
};
export default Contact;
