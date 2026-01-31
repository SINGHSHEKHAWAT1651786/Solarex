/* ---------------- FILTER FUNCTION ---------------- */
export function filterData(searchText, solars) {
  return solars.filter((solar) =>
    solar?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );

}