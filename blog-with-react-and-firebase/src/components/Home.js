import React from "react";

const Home = () => {
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
      </div>
      <div className="postTextContainer">
        今はReactの勉強中です。今はReactの勉強中です。今はReactの勉強中です。今はReactの勉強中です。今はReactの勉強中です。
      </div>
      <div className="nameAndDeleteButton">
        <h3>@ShinCode</h3>
        <button>削除</button>
      </div>
    </div>
  );
};

export default Home;
