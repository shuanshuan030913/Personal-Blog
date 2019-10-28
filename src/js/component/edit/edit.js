import React, { Component } from 'react';
import Aside from './../../container/asideContainer';
import TagInput from './tagInput';


class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      tag: '',
      tagArr: [],
      title: '',
      body: '',
      date: '',
      image: '',
      sort: '',
      heartCount: [],
    };
  }

  componentDidMount() {
    this.props.handleAsideInit();
    const id = this.props.match.params.id ? this.props.match.params.id : '';
    if (id) {
      this.props.GetFirePost(id);
    }
  }

  componentDidUpdate(prevProps) {
    const { firePost, editDone, history, location } = this.props;
    if (firePost !== prevProps.firePost) {
      this.setState({
        category: firePost.category,
        tagArr: firePost.tagArr ? firePost.tagArr : [],
        title: firePost.title,
        body: firePost.body,
        date: firePost.date,
        sort: firePost.sort,
        image: firePost.image,
        heartCount: firePost.heartCount ? firePost.heartCount : [],
      });
    }
    if (prevProps.editDone !== editDone && editDone) {
      alert('Submit Success!');

      if (location.pathname === '/edit') {
        history.push(`/`);
      } else {
        history.push(`/blog/${firePost.date}`);
      }
    }
  }

  handleSelectChange = e => {
    let imgUrl;

    let feArr = ['https://i.imgur.com/D4M9zSU.jpg', 'https://i.imgur.com/dwrun0V.jpg', 'https://i.imgur.com/VajunCz.jpg'];
    const feIndex = Math.floor((Math.random() * feArr.length));

    let travelArr = ['https://i.imgur.com/t6E9BN0.jpg', 'https://i.imgur.com/LBpjy2a.jpg'];
    const travelIndex = Math.floor((Math.random() * travelArr.length));

    switch (e.target.value) {
      case 'Front-End':
        imgUrl = feArr[feIndex];
        break;
      case 'Travel':
        imgUrl = travelArr[travelIndex];
        break;
      case 'Music':
        imgUrl = 'https://i.imgur.com/fttHlE0.jpg';
        break;
      case 'Jotting':
        imgUrl = 'https://i.imgur.com/1sTBcWU.jpg';
        break;
      case 4:
      default:
        imgUrl = 'https://i.imgur.com/D4M9zSU.jpg';
    }
    this.setState({
      [e.target.name]: e.target.value,
      image: imgUrl,
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleTagChange = e => {
    if (e.target.value !== ',') {
      this.handleInputChange(e);
    }
  }
  addTagArr = e => {
    if (e.key === ',' && e.target.value) {
      this.setState({
        tag: '',
        tagArr: [...this.state.tagArr, e.target.value],
      });
    }
  }
  deleteTagArr = (event, e) => {
    const { tagArr } = this.state;
    const result = tagArr.filter(item => item !== e);
    this.setState({
      tagArr: result,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const id = this.props.match.params.id ? this.props.match.params.id : '';
    const Data = this.state;
    const newData = Object.keys(Data).reduce((object, key) => {
      if (key !== 'tag') {
        object[key] = Data[key]
      }
      return object
    }, {})

    if (id) {
      this.props.uptFirePost(id, newData);
    } else {
      const timestamp = Math.round(new Date().getTime());
      this.props.addFirePost(newData, timestamp);
    }
  }

  render() {
    const { title, author, body, category, tag, tagArr } = this.state;
    const { isLoading, editDone, history, asideToggle } = this.props;

    return (
      <main className="edit">
        <Aside asideToggle={asideToggle} history={history}/>
        <section className={asideToggle ? 'main__content active' : 'main__content'} >
          {
            isLoading
            ? <div className="cssload-loader"></div>
            : <form className="wrap card__element" onSubmit={this.handleSubmit}>
                <h2 className="title">
                  { this.props.match.params.id ? 'Update the post' : 'Create a new post'}
                </h2>
                <hr />
                <div className="row">
                  <div className="title col-1 col-lg-12">
                    <i className="sup">*</i>
                    分類：
                  </div>
                  <div className="col-11 col-lg-12">
                    <select
                      className="form-element"
                      name="category"
                      value={category}
                      onChange={this.handleSelectChange}
                      required="required"
                    >
                      <option hidden default></option>
                      <option value="Front-End">Front-End</option>
                      <option value="Travel">Travel</option>
                      <option value="Music">Music</option>
                      <option value="Jotting">Jotting</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="title col-1 col-lg-12">
                    <i className="sup">*</i>
                    標題：
                  </div>
                  <div className="col-11 col-lg-12">
                    <input
                      className="form-element"
                      name="title"
                      value={title}
                      onChange={this.handleInputChange}
                      required="required"
                    />
                  </div>
                </div>
                <div className="row__group">
                  <div className="col-12">
                    <i className="sup">*</i>
                    文章內容：
                  </div>
                  <textarea
                    className="col-12 form-element"
                    rows="10"
                    name="body"
                    value={body}
                    onChange={this.handleInputChange}
                    required="required"
                  />
                </div>
                <div className="row__group">
                  <div className="col-12">標籤：</div>
                  <TagInput
                    tagArr={tagArr}
                    tag={tag}
                    handleTagChange={this.handleTagChange}
                    addTagArr={this.addTagArr}
                    deleteTagArr={this.deleteTagArr}
                  />
                </div>
                <hr />
                <div className="row control__group">
                  <button className="btn btn__primary" type="submit">
                    Submit
                  </button>
                  <button
                    className="btn btn__del"
                    type="button"
                    onClick={() => {
                      window.history.back();
                    }}
                  >
                    Cancle
                  </button>
                </div>
              </form>
          }
        </section>
      </main>
    );
  }
}

export default Edit;
