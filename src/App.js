import React from "react";
import PropTypes from "prop-types";

/* 1, 2 */
function Food({ name, icon, rating }) {
  return (
    <div>
      <h2>
        I like {name} {icon}
      </h2>
      <h4>{rating}/5</h4>
    </div>
  );
}

/* 3 */
Food.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

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
const foodILike = [
  {
    id: 1,
    name: "poop",
    icon: "💩",
    rating: 4.7,
  },
  { id: 2, name: "pray", icon: "🙏", rating: 3.5 },
  { id: 3, name: "unicorn", icon: "🦄", rating: 2.2 },
  { id: 4, name: "ping pong", icon: "🏓", rating: 5.0 },
];

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
function renderFood(dish) {
  return (
    <Food
      key={dish.id}
      name={dish.name}
      icon={dish.icon}
      rating={dish.rating}
    />
  );
}

/* app-3 */
function App() {
  return <div>{foodILike.map(renderFood)}</div>;
}

export default App;
