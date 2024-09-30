import Card from "./card";

const CardGroup: React.FC = () => {
  const cards = [
    {
      value: 72,
      label: "Breast screening exceptions",
      url: "/exceptions-summary",
    },
    { value: 23, label: "Duplicate NHS numbers", url: "#" },
    { value: 22, label: "Confused NHS numbers", url: "#" },
  ];

  return (
    <ul className="nhsuk-grid-row nhsuk-card-group">
      {cards.map((card, index) => (
        <li
          className="nhsuk-grid-column-one-third nhsuk-card-group__item"
          key={index}
        >
          <Card value={card.value} label={card.label} url={card.url} />
        </li>
      ))}
    </ul>
  );
};

export default CardGroup;
