import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;
  // itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  // itemList.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  // itemList.sort((a, b) => a.calories - b.calories); // NUMERICAL
  // itemList.sort((a, b) => b.calories - a.calories); // REVERSE NUMERICAL

  // make a new arr of fruits that are less than 100 cal
  // const lowCalFruit = itemList.filter((fruit) => fruit.calories < 100);
  // const highCalFruit = itemList.filter((fruit) => fruit.calories >= 100);

  // .map: for i in arr make a list item

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: &nbsp;
      <b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.defaultProps = { category: "Category", items: [] };
List.PropTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
export default List;
