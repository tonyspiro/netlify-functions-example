import Cosmic from 'cosmicjs'
const api = Cosmic()
const bucket = api.bucket({
  slug: 'creative-agency'
})
exports.handler = async (event, context) => {
  const objects = await bucket.getObjects()
  return {
    statusCode: 200,
    body: JSON.stringify(objects)
  };
};
