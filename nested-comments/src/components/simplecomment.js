import React, { Component } from "react";
import DateAgo from "./Date";
import ReplyComment from "./replyComment";

class SimpleComment extends Component {
  state = {
    likes: 0,
    commentVisible: false,
    replyed: false,
  };
  handleClickUp = (e) => {
    this.setState((prevState) => {
      return { likes: prevState.likes + 1 };
    });
  };
  handleClickDown = (e) => {
    this.setState((prevState) => {
      return { likes: prevState.likes - 1 };
    });
  };

  handleClick = (e) => {
    this.setState({ commentVisible: true });
  };
  handleClickHide = (e) => {
    this.setState({ commentVisible: false });
  };
  replyClick = (e) => {
    this.setState({
      replyed: true,
    });
  };
  replySubmit = (e) => {
    this.setState({
      replyed: false,
    });
  };
  render() {
    const comment = this.props.data;

    const levelChanger = () => {
      if (comment.childLevel === "parent") {
        return "child1";
      } else if (comment.childLevel === "child1") {
        return "child2";
      }
      return comment.childLevel;
    };
    const childLevel = levelChanger();
    const replyComment = this.state.replyed ? (
      <ReplyComment
        addComment={this.props.addComment}
        replySubmit={this.replySubmit}
        childLevel={childLevel}
        commentReplyedId={comment.id}
      />
    ) : null;
    const commentsList =
      this.state.likes > -10 || this.state.commentVisible ? (
        <div
          className={`'comment' +'' + ${comment.childLevel}`}
          key={comment.id}
        >
          <img src="http://placehold.it/60x80" alt="avtor" />
          <div className="commentHead">
            <div className="avtor"> {comment.avtor} </div>
            <DateAgo time={comment.dateAdded} />
            <div className="likeCount">
              <button onClick={this.handleClickUp}>+</button>
              <p>{this.state.likes}</p>
              <button onClick={this.handleClickDown}>-</button>
            </div>
          </div>
          <button className="replyButton" onClick={this.replyClick}>
            Ответить
          </button>

          <div className="comment-text"> {comment.textBody} </div>
          <p onClick={this.handleClickHide}>Свернуть</p>
        </div>
      ) : (
        <p
          style={{ color: "blue" }}
          onClick={this.handleClick}
          key={comment.id}
        >
          развернуть
        </p>
      );

    return (
      <div>
        {commentsList}
        {replyComment}
      </div>
    );
  }
}

export default SimpleComment;
