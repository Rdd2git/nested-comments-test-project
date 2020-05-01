import React, { Component } from "react";

class AddComment extends Component {
  state = {
    avtor: "",
    email: "",
    textBody: "",
    dateAdded: "",
    childLevel: "parent",
    childComment: [],
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,

      dateAdded: Date.now(),
      likes: 0,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addComment(this.state);
    this.setState({
      avtor: "",
      email: "",
      textBody: "",
    });
  };
  render() {
    return (
      <div>
        <div className="comment-block-tittle">Добавить комментарий</div>
        <div className="comment-block">
          <div className="labels">
            <label htmlFor="avtor"> Имя </label>
            <label htmlFor="email"> E - mail: </label>
            <label htmlFor="textBody"> Текст комментария </label>
          </div>
          <div className="add-comment">
            <form onSubmit={this.handleSubmit}>
              <div className="avtor-card">
                <input
                  type="text"
                  id="avtor"
                  onChange={this.handleChange}
                  value={this.state.avtor}
                  required
                />
              </div>
              <div className="mail-card">
                <input
                  type="email"
                  id="email"
                  onChange={this.handleChange}
                  value={this.state.email}
                  required
                />
              </div>
              <div className="text-card">
                <textarea
                  placeholder="Введите ваш комментарий "
                  type="text"
                  id="textBody"
                  onChange={this.handleChange}
                  value={this.state.textBody}
                  required
                ></textarea>
              </div>
              <button> Добавить комментарий </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddComment;
