import React from "react";
import SimpleComment from "./simplecomment";

function CommentsList({ items, addComment }) {
  if (!items || !items.length) {
    return null;
  }
  //рекурсивный обход для отображения древовидного комментария
  return items.map((item) => (
    <React.Fragment key={item.id}>
      <SimpleComment data={item} addComment={addComment} />
      <CommentsList items={item.childComment} addComment={addComment} />
    </React.Fragment>
  ));
}

export default CommentsList;
