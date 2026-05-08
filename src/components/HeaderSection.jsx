const HeaaderSection = function () {
  return (
    <section className="w-75 mx-auto mt-4">
      <div className="input-group overflow-hidden shadow-sm">
        <span className="input-group-text bg-white border-0">
          <i className="bi bi-search"></i>
        </span>
        <input
          type="text"
          className="form-control border-0"
          placeholder="Cerca località"
        />
      </div>
    </section>
  );
};

export default HeaaderSection;
