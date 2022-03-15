export const fileUpload = async(file) => {
    
    const cloudinaryUrl = 'https://api.Cloudinary.com/v1_1/david-b/image/upload'
    const formData = new FormData()
    formData.append('upload_preset', 'sprint3')
    formData.append('file', file)

    const resp = await fetch(cloudinaryUrl, {
        method: 'POST',
        body: formData

    })

    const cloudinaryResp = await resp.json();
    console.log(cloudinaryResp.secure_url);
    return cloudinaryResp.secure_url
    
}