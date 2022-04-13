import Card from './Card';

const CardList = (props) => {
  const { apodList, saveToFavorites } = props;

  return (
    <div className="flex flex-wrap justify-center w-80-l ml-auto mr-auto">
      {apodList.map((apod, i) => {
        return (
          <Card
            key={i}
            title={apod.title}
            date={apod.date}
            desc={apod.explanation}
            url={apod.url}
            saveToFavorites={saveToFavorites}
          />
        );
      })}
    </div>
  );
};

export default CardList;
