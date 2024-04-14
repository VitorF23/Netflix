import moviesData from "../assets/movies.json";

const Section = () => {
  return (
    <main>
      {moviesData.map((section, index) => {
        return (
          <div key={index}>
            <h1>{section.category} </h1>
            <div className="image">
              {section.images.map((movies, index) => {
                return (
                  <div className="img" key={index}>
                    <img src={movies} alt="images" />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Section;
