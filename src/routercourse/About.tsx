import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const About:React.FC = () => {
  // const {id,name} = useParams();
  // console.log("name: ",name);
  // return (
  //   <>
  //     <h2>About ID: {id}</h2>
  //     <h2>Name: {name}</h2>
  //   </>
  // );

  const [searchParam,setSearchParam] = useSearchParams();
  // const name = searchParam.get("name");
  // const id = searchParam.get("id");
  // console.log("id: ", id);
  // searchParam.set("name", "myname");
  // console.log("name: ", name);

  useEffect(() => {
    const id2 = searchParam.get("name");
    setSearchParam({'name' : 'myname', 'id' : 'id1'})
    console.log("name: ", id2);
  },[searchParam,setSearchParam]);

  return (
    <>
      <h2>About</h2>
      {/* <h2>Name: {id2}</h2> */}
    </>
  )
};

export default About;