import React from "react";

const PostItem = () => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>JS</strong>
          <div>WEB DEV</div>
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
