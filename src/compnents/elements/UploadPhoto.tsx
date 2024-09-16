import { Box } from "@mui/material";


function UploadPhoto({
  attr,
  onChange
}: {
  attr: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Box sx={{ bgcolor: '#D8E7FC', width: 200, height: 224, padding: "24px" }} >
        <div className="upload-photo">
          <input name={attr} onChange={onChange} type="file" className="upload-photo_imput" />
          <img src="/photo.png" alt="" className="upload-photo_icon" />
        </div>
      </Box>
    </>
  );
}

export default UploadPhoto;