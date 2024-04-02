"use client";

const Sort = () => {
  function changeSort(data: string) {}

  return (
    <>
      <select
        onChange={({ target }) => changeSort(target.value)}
        name="language"
        defaultValue="relevant"
        className=" text-sm bg-gray-200 cursor-pointer hover:bg-gray-300 dark:text-gray-900  focus:outline-none rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="relevant">Relevant </option>
        <option value="new">New </option>
        <option value="p-lth">Price {`(Low to High)`}</option>
        <option value="p-htl">Price {`(High to Low)`}</option>
      </select>
    </>
  );
};

export default Sort;
