let size;
export default getImageUrl(person, size = 's')
{
    return (
      'https://i.imgur.com/' +
      preson.imageID +
      size +
      '.jpg'
    );
}