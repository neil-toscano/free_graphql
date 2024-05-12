export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: any,
) => {
  if (!file) {
    return cb(new Error('file is empty'));
  }
  const fileExtension = file.mimetype.split('/')[1];
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  if (validExtensions.includes(fileExtension)) {
    return cb(null, true);
  } else {
    return cb(null, false);
  }
};
