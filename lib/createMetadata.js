export const createMetadata = ({
  title,
  description,
  image,
}) => ({
  title,
  description,
  openGraph: {
    title,
    description,
    images: [image],
  },
});