import { cards } from "../utils/cards";
import Card from "../components/Card";
import HomeBtn from "../components/btns/HomeBtn";

const cards_array = Object.entries(cards);

export default function AllCards() {
  return (
    <div>
      <HomeBtn />
      {cards_array.map(([key, card]) => (
        <Card key={key} card={card} />
      ))}
    </div>
  );
}
