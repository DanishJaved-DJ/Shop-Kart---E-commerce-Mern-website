const uploadImage = async (file) => {
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  
    try {
      const response = await fetch(cloudinaryUrl, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Cloudinary upload failed: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log("Upload success:", data);
      return data;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  export default uploadImage;