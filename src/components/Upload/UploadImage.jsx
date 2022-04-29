import React, { useState } from 'react';
import axios from 'axios';

function UploadImage() {
  const [image, setImage] = useState(null);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleUploadImage = async () => {
    const formData = new FormData();
    formData.append('file', image);

    // const payload = {
    //   method: 'POST',
    //   body: formData,
    // };

    try {
      const result = await axios.post('http://localhost:8080/api/upload/image', formData);
      console.log(' file: result', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={handleChange}
      />

      <button type="button" onClick={handleUploadImage}>
        Upload Image
      </button>

    </div>
  );
}

export default UploadImage;
