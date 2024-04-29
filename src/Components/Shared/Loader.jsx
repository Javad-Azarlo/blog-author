import React from "react";
import { Puff } from "react-loader-spinner";
function Loader() {
  return (
    <div style={{
      display: 'flex',
      justifyContent : 'center' ,
      paddingTop : '20px'
    }}>
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
