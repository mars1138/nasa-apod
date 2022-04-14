import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import ErrorBoundary from './components/ErrorBoundary';
// import { API_KEY } from './Constants';
import './App.css';

// TESTING
import { loadedApods } from './Constants';
export const loadedApods = [
  {
    date: '2006-05-07',
    explanation:
      'Like a butterfly, a white dwarf star begins its life by casting off a cocoon that enclosed its former self.  In this analogy, however, the Sun would be a caterpillar and the ejected shell of gas would become the prettiest of all! In the above cocoon, the planetary nebula designated NGC 2440, contains one of the hottest white dwarf stars known. The white dwarf can be seen as the bright dot near the photo\'s center.  Our Sun will eventually become a "white dwarf butterfly", but not for another 5 billion years.  The above false color image was post-processed by Forrest Hamilton.',
    hdurl: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'NGC 2440: Cocoon of a New White Dwarf',
    url: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4.jpg',
  },
  {
    date: '2015-08-07',
    explanation:
      "The Moon was new on July 16. Its familiar nearside facing the surface of planet Earth was in shadow. But on that date a million miles away, the Deep Space Climate Observatory (DSCOVR) spacecraft's Earth Polychromatic Imaging Camera (EPIC) captured this view of an apparently Full Moon crossing in front of a Full Earth. In fact, seen from the spacecraft's position beyond the Moon's orbit and between Earth and Sun, the fully illuminated lunar hemisphere is the less familiar farside. Only known since the dawn of the space age, the farside is mostly devoid of dark lunar maria that sprawl across the Moon's perpetual Earth-facing hemisphere. Only the small dark spot of the farside's Mare Moscoviense (Sea of Moscow) is clear, at the upper left. Planet Earth's north pole is near 11 o'clock, with the North America visited by Hurricane Dolores near center. Slight color shifts are visible around the lunar edge, an artifact of the Moon's motion through the field caused by combining the camera's separate exposures taken in quick succession through different color filters. While monitoring the Earth and solar wind for space weather forcasts, about twice a year DSCOVR can capture similar images of Moon and Earth together as it crosses the orbital plane of the Moon.",
    hdurl: 'https://apod.nasa.gov/apod/image/1508/globe_epc_2015198_lrg.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Full Moon, Full Earth',
    url: 'https://apod.nasa.gov/apod/image/1508/epicearthmoonstill1024.jpg',
  },
  {
    date: '2000-08-18',
    explanation:
      'A bevy of black holes and neutron stars shine as bright, point-like sources against bubbles of million degree gas in this false-color x-ray image from the orbiting Chandra Observatory. The striking picture shows the central regions of two galaxies, NGC 4038 and NGC 4039, locked in a titanic collision some 60 million light-years distant in the constellation Corvus. In visible light images, long, luminous, tendril-like structures emanating from the wreckage lend the pair their popular moniker, the Antennae Galaxies. Galactic collisions are now thought to be fairly common, but when they happen individual stars rarely collide. Instead gas and dust clouds merge and compress, triggering furious bursts of massive star formation with thousands of resulting supernovae. The exploding stars litter the scene with bubbles of shocked hot gas and collapsed stellar cores. Transfixed by this cosmic accident astronomers watch and are beginning to appreciate the collision-driven evolution of galaxies, not unlike our own.',
    hdurl: 'https://apod.nasa.gov/apod/image/0008/antennagal_cxo_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'X-Rays From Antennae Galaxies',
    url: 'https://apod.nasa.gov/apod/image/0008/antennagal_cxo.jpg',
  },
  {
    date: '2006-02-04',
    explanation:
      "A nearly full Moon and planet Earth's shadow set together in this scene captured on January 13th from snowy Mt. Jelm, home of the Wyoming Infrared Observatory. For early morning risers (and late to bed astronomers), shadow set in the western sky is a daily apparition whose subtle beauty is often overlooked in favor of the more colorful eastern horizon. Extending through the dense atmosphere, Earth's setting shadow is seen in this picture as a dark blue band along the distant horizon, bounded above by a pinkish glow or antitwilight arch. Known as the Belt of Venus, the arch's lovely color is due to backscattering of reddened light from the rising Sun. The setting Moon's light is also reddened by the long sight-line through the atmosphere.",
    hdurl: 'https://apod.nasa.gov/apod/image/0602/shadowset_bonnell_e.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Shadow Set',
    url: 'https://apod.nasa.gov/apod/image/0602/shadowset_bonnell_ex.jpg',
  },
  {
    copyright: 'K. StanekW. ColleyCfA',
    date: '2001-09-08',
    explanation:
      "On September 18, 1997, many stargazers in the U. S. were able to watch a lovely early morning lunar occultation as a bright Moon passed in front of Saturn. Using a 1.2 meter reflector, astronomer Kris Stanek had an excellent view of this dream-like event from the Whipple Observatory atop Arizona's Mount Hopkins. This animated gif image was constructed by Wes Colley from 4 frames taken by Stanek at 35 second intervals as the ringed planet emerged from behind the Moon's dark limb. While lunar occultations of fairly bright stars and planets are not extremely rare events, their exact timing depends critically on the observer's location. For observers in western North America, the Moon will next occult Saturn on Monday morning, September 10.",
    hdurl: 'https://apod.nasa.gov/apod/image/0109/ocsat_anim.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'Moon Occults Saturn',
    url: 'https://apod.nasa.gov/apod/image/0109/ocsat_anim.gif',
  },
  {
    copyright: 'Tony Hallas',
    date: '2007-01-25',
    explanation:
      "Cradled in glowing hydrogen, stellar nurseries in Orion lie at the edge of a giant molecular cloud some 1,500 light-years away. This breath-taking view spans about 13 degrees across the center of the well-known constellation with the Great Orion Nebula, the closest large star forming region, just right of center. The deep mosaic also includes (left of center), the Horsehead Nebula, the Flame Nebula, and Orion's belt stars. Image data acquired with a hydrogen alpha filter adds other remarkable features to this wide angle cosmic vista -- pervasive tendrils of energized atomic hydrogen gas and portions of the surrounding Barnard's Loop. While the Orion Nebula and belt stars are easy to see with the unaided eye, emission from the extensive interstellar gas is faint and much harder to record, even in telescopic views of the nebula-rich complex.",
    hdurl: 'https://apod.nasa.gov/apod/image/0701/orioncradle_hallas_r.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Orion's Cradle",
    url: 'https://apod.nasa.gov/apod/image/0701/orioncradle_hallas_r780.jpg',
  },
  {
    date: '2003-01-24',
    explanation:
      "Known as Seyfert's Sextet, this intriguing group of galaxies lies in the head portion of the split constellation Serpens. The sextet actually contains only four interacting galaxies, though. Near the center of this Hubble Space Telescope picture, the small face-on spiral galaxy lies in the distant background and appears only by chance aligned with the main group. Also, the prominent condensation on the far right is likely not a separate galaxy at all, but a tidal tail of stars flung out by the galaxies' gravitational interactions. About 190 million light-years away, the interacting galaxies are tightly packed into a region around 100,000 light-years across, comparable to the size of our own Milky Way galaxy, making this one of the densest known galaxy groups. Bound by gravity, the close-knit group may coalesce into a single large galaxy over the next few billion years.",
    hdurl: 'https://apod.nasa.gov/apod/image/0301/sextet_hst_full.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: "Seyfert's Sextet",
    url: 'https://apod.nasa.gov/apod/image/0301/sextet_hst_c1.jpg',
  },
  {
    date: '1995-08-25',
    explanation:
      "August 25, 1995    A World Explorer  Credit: NASA, JPL Magellan Project  Explanation:  Ferdinand Magellan was a world explorer. Many consider him the greatest navigator of Europe's 16th century age of sea going exploration and credit his expedition with the first circumnavigation of planet Earth. NASA's Venus probe, the aptly named Magellan spacecraft shown above in an artist's conception, provided a global view of the poorly known surface of Venus - just as Magellan's expedition provided the beginnings of a global perspective of the Earth. Ferdinand Magellan's expedition of 5 ships and 265 men left Spain in 1519 in search of a western route to the Spice Islands of Indonesia. In 1522 one ship and 17 men returned. NASA launched the Magellan probe on May 4, 1989. Placed in a polar orbit, Magellan's many circumnavigations resulted in a detailed radar mapping of 98% of the Venusian surface. As pictured, the radar mapper's antenna resembles a large inverted bowl. Power for the radar was produced by the wing like solar panels. In October of 1994, the Magellan probe entered the Venusian atmosphere and ground controllers lost contact with the spacecraft.",
    hdurl: 'https://apod.nasa.gov/apod/image/magellan_sc.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'A World Explorer',
    url: 'https://apod.nasa.gov/apod/image/magellan_sc.gif',
  },
  {
    date: '2006-05-07',
    explanation:
      'Like a butterfly, a white dwarf star begins its life by casting off a cocoon that enclosed its former self.  In this analogy, however, the Sun would be a caterpillar and the ejected shell of gas would become the prettiest of all! In the above cocoon, the planetary nebula designated NGC 2440, contains one of the hottest white dwarf stars known. The white dwarf can be seen as the bright dot near the photo\'s center.  Our Sun will eventually become a "white dwarf butterfly", but not for another 5 billion years.  The above false color image was post-processed by Forrest Hamilton.',
    hdurl: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'NGC 2440: Cocoon of a New White Dwarf',
    url: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4.jpg',
  },
  {
    date: '2015-08-07',
    explanation:
      "The Moon was new on July 16. Its familiar nearside facing the surface of planet Earth was in shadow. But on that date a million miles away, the Deep Space Climate Observatory (DSCOVR) spacecraft's Earth Polychromatic Imaging Camera (EPIC) captured this view of an apparently Full Moon crossing in front of a Full Earth. In fact, seen from the spacecraft's position beyond the Moon's orbit and between Earth and Sun, the fully illuminated lunar hemisphere is the less familiar farside. Only known since the dawn of the space age, the farside is mostly devoid of dark lunar maria that sprawl across the Moon's perpetual Earth-facing hemisphere. Only the small dark spot of the farside's Mare Moscoviense (Sea of Moscow) is clear, at the upper left. Planet Earth's north pole is near 11 o'clock, with the North America visited by Hurricane Dolores near center. Slight color shifts are visible around the lunar edge, an artifact of the Moon's motion through the field caused by combining the camera's separate exposures taken in quick succession through different color filters. While monitoring the Earth and solar wind for space weather forcasts, about twice a year DSCOVR can capture similar images of Moon and Earth together as it crosses the orbital plane of the Moon.",
    hdurl: 'https://apod.nasa.gov/apod/image/1508/globe_epc_2015198_lrg.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Full Moon, Full Earth',
    url: 'https://apod.nasa.gov/apod/image/1508/epicearthmoonstill1024.jpg',
  },
  {
    date: '2000-08-18',
    explanation:
      'A bevy of black holes and neutron stars shine as bright, point-like sources against bubbles of million degree gas in this false-color x-ray image from the orbiting Chandra Observatory. The striking picture shows the central regions of two galaxies, NGC 4038 and NGC 4039, locked in a titanic collision some 60 million light-years distant in the constellation Corvus. In visible light images, long, luminous, tendril-like structures emanating from the wreckage lend the pair their popular moniker, the Antennae Galaxies. Galactic collisions are now thought to be fairly common, but when they happen individual stars rarely collide. Instead gas and dust clouds merge and compress, triggering furious bursts of massive star formation with thousands of resulting supernovae. The exploding stars litter the scene with bubbles of shocked hot gas and collapsed stellar cores. Transfixed by this cosmic accident astronomers watch and are beginning to appreciate the collision-driven evolution of galaxies, not unlike our own.',
    hdurl: 'https://apod.nasa.gov/apod/image/0008/antennagal_cxo_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'X-Rays From Antennae Galaxies',
    url: 'https://apod.nasa.gov/apod/image/0008/antennagal_cxo.jpg',
  },
  {
    date: '2006-02-04',
    explanation:
      "A nearly full Moon and planet Earth's shadow set together in this scene captured on January 13th from snowy Mt. Jelm, home of the Wyoming Infrared Observatory. For early morning risers (and late to bed astronomers), shadow set in the western sky is a daily apparition whose subtle beauty is often overlooked in favor of the more colorful eastern horizon. Extending through the dense atmosphere, Earth's setting shadow is seen in this picture as a dark blue band along the distant horizon, bounded above by a pinkish glow or antitwilight arch. Known as the Belt of Venus, the arch's lovely color is due to backscattering of reddened light from the rising Sun. The setting Moon's light is also reddened by the long sight-line through the atmosphere.",
    hdurl: 'https://apod.nasa.gov/apod/image/0602/shadowset_bonnell_e.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Shadow Set',
    url: 'https://apod.nasa.gov/apod/image/0602/shadowset_bonnell_ex.jpg',
  },
];
///

// const count = 15;
// const apiKey = API_KEY;
// const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let favoriteApods = {
  'https://apod.nasa.gov/apod/image/1508/epicearthmoonstill1024.jpg': {
    date: '2015-08-07',
    explanation:
      "The Moon was new on July 16. Its familiar nearside facing the surface of planet Earth was in shadow. But on that date a million miles away, the Deep Space Climate Observatory (DSCOVR) spacecraft's Earth Polychromatic Imaging Camera (EPIC) captured this view of an apparently Full Moon crossing in front of a Full Earth. In fact, seen from the spacecraft's position beyond the Moon's orbit and between Earth and Sun, the fully illuminated lunar hemisphere is the less familiar farside. Only known since the dawn of the space age, the farside is mostly devoid of dark lunar maria that sprawl across the Moon's perpetual Earth-facing hemisphere. Only the small dark spot of the farside's Mare Moscoviense (Sea of Moscow) is clear, at the upper left. Planet Earth's north pole is near 11 o'clock, with the North America visited by Hurricane Dolores near center. Slight color shifts are visible around the lunar edge, an artifact of the Moon's motion through the field caused by combining the camera's separate exposures taken in quick succession through different color filters. While monitoring the Earth and solar wind for space weather forcasts, about twice a year DSCOVR can capture similar images of Moon and Earth together as it crosses the orbital plane of the Moon.",
    hdurl: 'https://apod.nasa.gov/apod/image/1508/globe_epc_2015198_lrg.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'Full Moon, Full Earth',
    url: 'https://apod.nasa.gov/apod/image/1508/epicearthmoonstill1024.jpg',
  },
  'https://apod.nasa.gov/apod/image/magellan_sc.gif': {
    date: '1995-08-25',
    explanation:
      "August 25, 1995    A World Explorer  Credit: NASA, JPL Magellan Project  Explanation:  Ferdinand Magellan was a world explorer. Many consider him the greatest navigator of Europe's 16th century age of sea going exploration and credit his expedition with the first circumnavigation of planet Earth. NASA's Venus probe, the aptly named Magellan spacecraft shown above in an artist's conception, provided a global view of the poorly known surface of Venus - just as Magellan's expedition provided the beginnings of a global perspective of the Earth. Ferdinand Magellan's expedition of 5 ships and 265 men left Spain in 1519 in search of a western route to the Spice Islands of Indonesia. In 1522 one ship and 17 men returned. NASA launched the Magellan probe on May 4, 1989. Placed in a polar orbit, Magellan's many circumnavigations resulted in a detailed radar mapping of 98% of the Venusian surface. As pictured, the radar mapper's antenna resembles a large inverted bowl. Power for the radar was produced by the wing like solar panels. In October of 1994, the Magellan probe entered the Venusian atmosphere and ground controllers lost contact with the spacecraft.",
    hdurl: 'https://apod.nasa.gov/apod/image/magellan_sc.gif',
    media_type: 'image',
    service_version: 'v1',
    title: 'A World Explorer',
    url: 'https://apod.nasa.gov/apod/image/magellan_sc.gif',
  },
  'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4.jpg': {
    date: '2006-05-07',
    explanation:
      'Like a butterfly, a white dwarf star begins its life by casting off a cocoon that enclosed its former self.  In this analogy, however, the Sun would be a caterpillar and the ejected shell of gas would become the prettiest of all! In the above cocoon, the planetary nebula designated NGC 2440, contains one of the hottest white dwarf stars known. The white dwarf can be seen as the bright dot near the photo\'s center.  Our Sun will eventually become a "white dwarf butterfly", but not for another 5 billion years.  The above false color image was post-processed by Forrest Hamilton.',
    hdurl: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4_big.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'NGC 2440: Cocoon of a New White Dwarf',
    url: 'https://apod.nasa.gov/apod/image/0605/ngc2440_hst4.jpg',
  },
};

function App() {
  // const [loadedApods, setLoadedApods] = useState([]);
  const [homePage, setHomePage] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState('');
  const [saveClicked, setSaveClicked] = useState(false);

  const fetchTask = async () => {
    // try {
    //   fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((results) => setLoadedApods(results));
    //   setIsLoading(false);
    // } catch (err) {
    //   console.log('Error!');
    // }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const onSetHomePage = () => {
    setHomePage(!homePage);

    // check for clearing of error from favorites view
  };

  // function updateDOM(page) {
  //   // Get Favorites from localStorage
  //   // if (localStorage.getItem('nasaFavorites')) {
  //   //   favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
  //   //   // console.log('favorites from localStorage', favorites);
  //   // }
  //   // // remove all elements previously appended to the container
  //   // imagesContainer.textContent = '';
  //   // console.log('imagesContainer: ', imagesContainer);
  //   // createDOMNodes(page);
  //   // showContent(page);
  // }

  const onSaveFavorite = () => {
    console.log('Favorite saved!: ');
    // Loop through Results Array to select Favorite
    // resultsArray.forEach((item) => {
    //   if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
    //     favorites[itemUrl] = item;
    //     console.log(JSON.stringify(favorites));
    //     // show Save Confirmation for 2 seconds
    //     saveConfirmed.classList.remove('hidden');
    setSaveClicked(true);

    setTimeout(() => {
      setSaveClicked(false);
      console.log('timer done');
    }, 2000);
    //     // Set Favorites in localStorage
    //     localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    //   }
    // });
  };

  const onRemoveFavorite = () => {
    console.log('Favorite removed!');
    // if (favorites[itemUrl]) {
    //   delete favorites[itemUrl];
    //   // Set Favorites in localStorage
    //   localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
    //   updateDOM('favorites');
    // }
  };

  const filteredApods = loadedApods.filter((picture) => {
    return picture.title.toLowerCase().includes(searchField.toLowerCase());
  });

  console.log(filteredApods);
  console.log('loadedApods: ', loadedApods);
  return (
    <React.Fragment>
      <header>
        <div className="tc flex flex-column items-center bg-dark-blue bb b--gray lightest-blue pl3 pr3 w-100">
          <h1 className="f2 f1-l w-100 mb0">
            NASA Astronomy Pictures of the Day
          </h1>
          {homePage ? (
            <div className="flex flex-wrap justify-center items-center mb4 w-100">
              <div className="grow ma2" onClick={onSetHomePage}>
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Favorites
                </h3>
              </div>
              <div className="grow ma2">
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Load More
                </h3>
              </div>
              <SearchBox searchChange={onSearchChange} />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center mb4 w-100">
              <h2 className="ma3">Favorites View</h2>
              <div className="grow mt2 mb2 ml3 mr3" onClick={onSetHomePage}>
                <h3 className="bg-green pt1 pb1 pl3 pr3 br2 white">
                  Search View
                </h3>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="bg-black min-vh-100 pt3 pb3">
        {isLoading && (
          <div className="bg-blue yellow vh-75 flex flex-column items-center justify-start pt5">
            <h1>Loading....</h1>
            <div className="vh-25 w5 ba">
              <img src="../img/rocket2.png" alt="Rocket Loading Animation" />
            </div>
          </div>
        )}

        {homePage && !isLoading && loadedApods && (
          <ErrorBoundary>
            <CardList
              apodList={filteredApods}
              saveFavorite={onSaveFavorite}
              home={homePage}
            />
          </ErrorBoundary>
        )}

        {!homePage && !isLoading && favoriteApods && (
          <ErrorBoundary>
            <CardList
              apodList={favoriteApods}
              removeFavorite={onRemoveFavorite}
              favorites={favoriteApods}
              home={homePage}
            />
          </ErrorBoundary>
        )}

        {saveClicked && (
          <div className="save-confirmed">
            <h1 className="black">FAVORITE ADDED!</h1>
            <img src="../img/rocket2.png" alt="Rocket Loading Animation" />
          </div>
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
