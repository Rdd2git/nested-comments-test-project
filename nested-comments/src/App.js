import React, { Component } from "react";

import "./styles/index.scss";
import CommentsList from "./components/commentsList";
import AddComment from "./components/addComment";

class App extends Component {
  state = {
    comments: [
      {
        avtor: "Mike",
        email: "mike22@somemile.com",
        textBody: "lorem",
        dateAdded: 1585991961140,
        image: "",
        likes: 0,
        childLevel: "parent",
        id: 1,
        childComment: [
          {
            avtor: "nike",
            email: "mike22@somemile.com",
            textBody: "lorem",
            dateAdded: 1585991961140,
            image: "",
            likes: 0,
            id: 2,
            childLevel: "child1",
            childComment: [],
          },
        ],
      },
    ],
  };
  reply = (comment) => {
    comment.id = Math.random();

    function renderTree(obj, comment) {
      return obj.map((item) =>
        item.childComment.length > 0
          ? Object.assign({}, item, {
              childComment: renderTree(item.childComment, comment),
            })
          : item.id === comment.commentReplyedId
          ? Object.assign({}, item, {
              childComment: item.childComment.concat(comment),
            })
          : item
      );
    }

    const array = [...this.state.comments];
    const comments = [...renderTree(array, comment)];
    this.setState({
      comments,
    });
  };

  addComment = (comment) => {
    comment.id = Math.random();
    const comments = [...this.state.comments, comment];

    this.setState({
      comments,
    });
  };
  render() {
    return (
      <div className="App">
        <div className="comments">
          <h1 className="comments-header">Комментарии:</h1>
          <CommentsList
            className="comment"
            items={this.state.comments}
            addComment={this.reply}
          />
        </div>

        <AddComment addComment={this.addComment} />
      </div>
    );
  }
}
export default App;
