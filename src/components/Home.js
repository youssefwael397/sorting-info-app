import { useState } from "react";
import axios from "axios";
import classes from "./Home.module.css"
import { ToastContainer, toast } from 'react-toastify';
// import { env } from "../env";
function Home() {
  const [name, setName] = useState()
  const [error, setError] = useState(null)
  const [socialId, setSocialId] = useState("")
  const [img, setimg] = useState()
  const apiUrl = 'http://storing-info-app.epizy.com/user/index.php';

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setError(null)
    if (socialId.length === 14) {
      console.log(img)
      const formData = new FormData();

      console.log(img);
      formData.append("name", name);
      formData.append("social_id", socialId);
      formData.append("image", img);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      axios.post(apiUrl, formData, config)
      setSocialId('')
      setName('')
      setimg('')
      toast.success("user added successfully");
    } else {
      setError("social id must be 14 number")
      setTimeout(() => {
        setError(null)
      }, 3000)
    }

  }


  const onChangeNameHandler = (e) => {
    setName(e.target.value)
  }
  const onChangeSocialIDHandler = (e) => {
    setSocialId(e.target.value)
  }
  const onChangePhotoHandler = (e) => {
    console.log(e);
    setimg(e.target.files[0])
  }



  return (

    <form className='container mt-5 w-50 ' onSubmit={onSubmitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInput1" >Name</label>
        <input required
          type="text"
          onChange={onChangeNameHandler}
          className="form-control"
          id="exampleInput1"
          aria-describedby="emailHelp"
          placeholder="Enter Your Name"
          value={name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInput2">Social ID</label>
        <input
          min="1"
          value={socialId}
          onChange={onChangeSocialIDHandler}
          type="number"
          required
          className="form-control"
          id="exampleInput2"
          placeholder="Social ID"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInput3">Photo</label>
        <input
          required
          onChange={onChangePhotoHandler}
          type="file"
          className="form-control"
          id="exampleInput3"
          placeholder="Password"
          accept="image/*"
          files={img}
        />
        {error && <div className={`${classes.alert} alert-danger mt-2`} role="alert">{error}</div>}
      </div>
      <ToastContainer position="bottom-left" />
      <button type="submit" className={`btn btn-dark mt-2 w-100`}>
        Submit
      </button>
    </form>
  );
}

export default Home;
