import { useState } from "react";
import { toast } from "react-hot-toast";

const useImgBBUpload = () => {
  const [img, setImg] = useState(" ");
  const [loaded, setLoaded] = useState(false);

  // this function for upload application snapshots in imgBB

  const key = "b638b94f967f79af60d01566bf4bc600";
  const url = `https://api.imgbb.com/1/upload?key=${key}`;

  const getEvent = (event) => {
    const img = event.target.files[0];

    const formData = new FormData();
    formData.append("image", img);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          toast.success("Img uploaded successfully");
          setImg(img);
          setLoaded(true);
        } else {
          toast.error(result.error);
        }
      });
  };

  return { img, getEvent, loaded };
};

export default useImgBBUpload;
