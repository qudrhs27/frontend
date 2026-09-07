import InfoCard, { type CardType } from "./InfoCard";

const Card = () => {
  const cards: CardType[] = [
    {
      idx: 1,
      title: "Props in React",
      content: "Props pass data from one component to another.",
      author: "Alice",
    },
    {
      idx: 2,
      title: "Props Compositio",
      content: "Props pass data from one component to another.",
      author: "Charlie",
    },
    { title: "React Props" },
  ];

  return (
    <div>
      {/* 자바스크립트 코드 {} 안에 */}
      {cards.map((card) => (
        <InfoCard idx={card.idx} title={card.title} content={card.content} author={card.author} />
      ))}
    </div>
  );
};

export default Card;
