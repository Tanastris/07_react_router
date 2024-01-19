import { useState } from 'react';
import { Link } from 'react-router-dom';

const postUrl = 'https://dummyjson.com/posts/add';

export default function AddPost() {
  const [inputsObj, setInputsObj] = useState({
    title: 'Title ours',
    author: 'James Band',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, placeat deserunt. Voluptas nesciunt et libero aperiam laudantium est a dolor sit odio itaque autem voluptate porro provident consequatur eum earum illo amet laborum enim iure, quae eligendi debitis incidunt. Non pariatur tempora quibusdam voluptates qui animi in illum optio rem!',
    tagsString: 'blue, green,  yellow,red,0',
    userId: 555,
  });

  const [postErr, setPostErr] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  function handleInput(event) {
    const { value, name } = event.target;
    console.log('value, name ===', value, name);
    setInputsObj({ ...inputsObj, [name]: value });
  }

  function handleTitleInput(e) {
    const reikme = e.target['value'];
    const inputKey = 'title';
    console.log('e.target.name ===', e.target.name);
    console.log('e.target.id ===', e.target.id);

    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, title: reikme });
  }

  function handleAuthorInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, author: reikme });
  }

  function handleTextareaInput(e) {
    const reikme = e.target.value;
    // paimam viska kas yra state ir pridedam kas pasikeite
    setInputsObj({ ...inputsObj, body: reikme });
  }

  // textarea handleTextareaInput

  // textarea handleTagsInput

  const arr = [];
  arr.push(1);

  function handleNewPostFormSubmit(e) {
    e.preventDefault();

    console.log('react i in control');
    console.log('inputsObj ===', inputsObj);

    // tags, should be an array
    const finalObj = {
      ...inputsObj,
      tags: inputsObj.tagsString
        .split(',')
        .map((str) => str.trim())
        .filter((str) => str.length),
      // .filter((str) => str !== ''),
      // .filter((str) => str.length > 0),
    };
    delete finalObj.tagsString;
    console.log('finalObj ===', finalObj);
    // console.log final obj

    sendToBackEnd(finalObj);
    // hide form

    // show card with input data
  }

  async function sendToBackEnd(whatToSend) {
    // setPostErr('');
    try {
      const resp = await fetch(postUrl, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(whatToSend),
      });
      console.log('resp ===', resp);

      if (resp.ok === false) {
        // klaida
        console.log('yra klaida');
        throw await resp.json();
      }

      const postResult = await resp.json();
      // sekme pavyko sukur
      // setFormSuccess
      setFormSuccess(true);

      console.log('postResult ===', postResult);
    } catch (error) {
      console.warn('sendToBackEnd error ===', error);
      console.log('noriu pranesi apie klaida kuri sako: ', error.message);
      setPostErr(error.message);
    }
  }

  if (formSuccess === true) {
    return (
      <div className='container'>
        <h1>Thank for your input</h1>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Create post</h1>

      <Link to={'/'}>Back to home</Link>

      <form onSubmit={handleNewPostFormSubmit} className='add-post-form'>
        <label>
          <span>Title</span>
          <input
            onChange={handleInput}
            onKeyDown={(e) => {
              console.log('e ===', e);
            }}
            value={inputsObj.title}
            type='text'
            placeholder='Title'
            id='title'
            name='title'
          />
        </label>
        <label>
          <span>Author</span>
          <input
            onChange={handleInput}
            value={inputsObj.author}
            type='text'
            placeholder='Author'
            id='author'
            name='author'
          />
        </label>
        <label>
          <span>Tags</span>
          <input
            onChange={handleInput}
            value={inputsObj.tagsString}
            type='text'
            id='tagsString'
            name='tagsString'
            placeholder='Add comma separated tags'
          />
        </label>
        <label>
          <span>Body</span>
          <textarea
            onChange={handleInput}
            value={inputsObj.body}
            id='body'
            name='body'
            cols='30'
            rows='10'></textarea>
        </label>
        <button type='submit'>Create post</button>
      </form>
      <hr />
      <h3 style={{ color: 'tomato' }}>{postErr}</h3>
    </div>
  );
}
