import type { NextPage } from 'next'
import { cards } from "../utils/cards";
import Card from "../components/Card";
import HomeBtn from "../components/btns/HomeBtn";

const cards_array = Object.entries(cards);

const AllCards: NextPage = () => {
  return (
    <div>
      <HomeBtn />
      {cards_array.map(([key, card]) => (
        <Card key={key} card={card} />
      ))}
    </div>
  );
}

export default AllCards

