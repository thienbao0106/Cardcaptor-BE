export const transferModel = (model: any) => {
  const modelInfo = model._doc || model;
  console.log(modelInfo);
  return {
    ...modelInfo,
    _id: modelInfo.id || modelInfo._id,
  };
};
