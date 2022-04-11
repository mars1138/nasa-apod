import Card from './Card';

const CardList = (props) => {
  const { apodList } = props;

  return (
    <div>
      {apodList.map((apod, i) => {
        return (
          <Card
            key={i}
            title={apod.title}
            date={apod.date}
            desc={apod.explanation}
            url={apod.url}
          />
        );
      })}
    </div>
  );
};

export default CardList;