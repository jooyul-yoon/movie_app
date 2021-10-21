import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/* 1, 2 */
/* function Food({ name, icon, rating }) {
  return (
    <div>
      <h2>
        I like {name} {icon}
      </h2>
      <h4>{rating}/5</h4>
    </div>
  );
} */

/* 3 */
/* Food.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}; */

/* app-1 */
/* function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food name="💩" />
      <Food name="🦄" />
      <Food name="🙏" />
      <Food name="🏓" />
    </div>
  );
} */

/* #2 */
/* const foodILike = [
  {
    id: 1,
    name: "poop",
    icon: "💩",
    rating: 4.7,
  },
  { id: 2, name: "pray", icon: "🙏", rating: 3.5 },
  { id: 3, name: "unicorn", icon: "🦄", rating: 2.2 },
  { id: 4, name: "ping pong", icon: "🏓", rating: 5.0 },
]; */

/* app-2 */
/* function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map((dish) => (
        <Food name={dish.name} icon={dish.icon} />
      ))}
    </div>
  );
} */

/* 3 */
/* function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      icon={dish.icon}
      rating={dish.rating}
    />
  );
} */

/* app-3 */
/* function App() {
  return <div>{foodILike.map(renderFood)}</div>;
} */

/* 4-class */
/* class App extends React.Component {
  componentDidMount() {
    console.log("Completed render");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {ㅌ
    console.log("component died...");
  }
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    console.log("add", this.state.count);
  };

  remove = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log("remove", this.state.count);
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Plus</button>
        <button onClick={this.remove}>Minus</button>
      </div>
    );
  }
} */

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="main">
        <header>
          Movies - React JS
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="logo"
            title="logo"
          />
        </header>
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
          ) : (
            <div className="movies">
              {movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  year={movie.year}
                  rating={movie.rating}
                  poster={movie.medium_cover_image}
                  summary={movie.summary}
                />
              ))}
            </div>
          )}
        </section>
        <footer>Copyright &copy; Jooyul Yoon</footer>
      </div>
    );
  }
}

export default App;
