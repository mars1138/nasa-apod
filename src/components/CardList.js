import Card from './Card';

const CardList = props => {
  const { apodList, saveFavorite, home, removeFavorite, favorites } = props;

  let apodArray = [];

  if (home) {
    apodList.forEach(apod => apodArray.push(apod));
  } else {
    for (const key in apodList) {
      apodArray.push(apodList[key]);
    }
  }

  console.log('apodArray: ', apodArray);

  return (
    <div className="flex flex-wrap justify-center w-80-l ml-auto mr-auto">
      {apodArray.map((apod, i) => {
        return (
          <Card
            key={i}
            title={apod.title}
            date={apod.date}
            desc={apod.explanation}
            url={apod.url}
            saveFavorite={saveFavorite}
            removeFavorite={removeFavorite}
            favorites={favorites}
            home={home}
          />
        );
      })}
    </div>
  );
};

export default CardList;
