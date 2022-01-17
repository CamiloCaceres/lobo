interface Card {
  card: {
    name: string;
    emoji: string;
    powers?: string[];
    team: string;
  };
}

export default function Card(props: Card) {
  return (
    <div className="bg-violet-300 border-4 m-4  border-gray-800 h-96 max-w-sm flex flex-col items-center justify-around">
      <h1 className="text-4xl py-3 font-bold">{props.card.name}</h1>
      <h1 className="text-8xl py-3 align-middle">{props.card.emoji}</h1>
      
      {props.card.powers ? <p className="p-2">Powers: {props.card.powers.join(", ")}</p> : null}
    </div>
  );
}
