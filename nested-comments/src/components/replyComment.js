import React, { Component } from "react";

class ReplyComment extends Component {
  state = {
    avtor: "",
    email: "",
    textBody: "",
    dateAdded: "",
    commentReplyedId: 0,
    childLevel: "parent",
    childComment: [],
  };
  handleChange = (e) => {
    let child = this.props.childLevel ? this.props.childLevel : "parent";
    this.setState({
      [e.target.id]: e.target.value,
      dateAdded: Date.now(),
      likes: 0,
      commentReplyedId: this.props.commentReplyedId,
      childLevel: child,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    if (this.props.replySubmit) {
      return this.props.replySubmit(e);
    }
    this.setState({
      avtor: "",
      email: "",
      textBody: "",
    });
  };
  render() {
    console.log(this.props.commentReplyedId);
    //onsole.log(this.props.addComment);
    // console.log()
    return (
      <div>
        <div className="comment-block-tittle">Добавить комментарий</div>
        <div className="comment-block reply">
          <div className="labels">
            <label htmlFor="avtor"> Имя </label>
            <label htmlFor="email"> E - mail: </label>
            <label htmlFor="textBody"> Текст комментария </label>
          </div>
          <div className="add-comment">
            <form onSubmit={this.handleSubmit}>
              <div className="avtor-card">
                {" "}
                <input
                  type="text"
                  id="avtor"
                  onChange={this.handleChange}
                  value={this.state.avtor}
                  required
                />{" "}
              </div>
              <div className="mail-card">
                {" "}
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />{" "}
              </div>
              <div className="text-card">
                {" "}
                <textarea
                  placeholder="Введите ваш комментарий "
                  type="text"
                  id="textBody"
                  onChange={this.handleChange}
                  value={this.state.textBody}
                  required
                ></textarea>
              </div>
              <button> Добавить комментарий </button>{" "}
            </form>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default ReplyComment;
