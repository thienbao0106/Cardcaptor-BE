export const transformCard = (card: any) => {
  const cardInfo = card._doc || card;
  console.log(cardInfo);
  return {
    ...cardInfo,
    _id: cardInfo.id || cardInfo._id,
  };
};
