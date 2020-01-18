import axios from 'axios'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function ImageUpload(event, setLoading, onImageSave) {
  const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

  const formData = new FormData()
  const target = event.target
  let name = target.name
  formData.append('file', target.files[0])
  formData.append('upload_preset', PRESET)

  if (name === 'clubImage') {
    setLoading({ imageLoading: true })
  } else if (name === 'logo') {
    setLoading({ logoLoading: true })
  }

  axios
    .post(url, formData, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    })
    .then(response => onImageSave(response, name))
    .catch(err => console.error(err))
}
