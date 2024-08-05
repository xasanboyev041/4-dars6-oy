import React, { useEffect, useState } from "react";
import "./Comments.css"

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  }, []);
  return (
    <div>
      <div className="container">
        <h3 className="happy">OUR HAPPY CUSTOMERS</h3>
        <div className="wrapper-comment">
        {comments.slice(0, 4).map((comment) => (
          <div key={comment.id}>
            
            <p>
              <strong>{comment.name}</strong>: {comment.body}
            </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
