import "../styles/ArticleSorter.css"

const ArticleSorter = ({ sortBy, order, setSortBy, setOrder }) => {
  
  return (
    <div className="sort-controls">
      <label>
        Sort by:
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="date">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
        </select>
      </label>
      <label>
        Order:
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </div>
  );
};

export default ArticleSorter;
