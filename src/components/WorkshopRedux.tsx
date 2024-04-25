import { RootState } from "@store/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { regisSlice, updateFormRegis } from "@store/slice/regisSlice";


const WorkshopRedux = () => {
  const count = useSelector((state: RootState) => state.regis.value);
  const dispatch = useDispatch();
//   console.log({ count });
//   const value = { key: "value", ff: "dfdf" };
  return (
    <div>
        
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          const formData = new FormData(event.target as HTMLFormElement);
          const formProps = Object.fromEntries(formData);
          const value: regisSlice = {
            username: formProps.username.toString(),
            password: formProps.password.toString(),
            email: formProps.email.toString(),
          };
          //   console.log(value);
          dispatch(updateFormRegis(value));
        }}
      >
        <input type="text" name="username" placeholder="input" onChange={(e) => {
            dispatch(updateFormRegis({ ...count, username: e.target.value }))
        }} />
        <br></br>
        <input type="text" name="password" placeholder="input" />
        <br></br>
        <input type="text" name="email" placeholder="input" />
        <br></br>

        <button type="submit">submit</button>
      </form>
      {count.username}
      <br></br>
      {count.password}
      <br></br>
      {count.email}
      <br></br>

      {/* <button onClick={() => console.log(..."[value]")}>submit</button> */}
    </div>
  );
};

export default WorkshopRedux;
