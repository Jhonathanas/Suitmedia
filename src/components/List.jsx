import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";

const IdeasList = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(
    () => parseInt(localStorage.getItem("page")) || 1
  );
  const [pageSize, setPageSize] = useState(
    () => parseInt(localStorage.getItem("pageSize")) || 10
  );
  const [sort, setSort] = useState(
    () => localStorage.getItem("sort") || "-published_at"
  );

  const fetchIdeas = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://suitmedia-backend.suitdev.com/api/ideas",
        {
          params: {
            "page[number]": page,
            "page[size]": pageSize,
            "append[]": ["small_image", "medium_image"],
            sort: sort,
          },
          headers: {
            Accept: "application/json",
          },
        }
      );
      setIdeas(response.data);
    } catch (error) {
      console.error("Error fetching ideas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem("page", page);
    localStorage.setItem("pageSize", pageSize);
    localStorage.setItem("sort", sort);
    fetchIdeas();
  }, [page, pageSize, sort]);

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="container my-10 mx-auto flex justify-center items-center flex-col">
      <div className="flex justify-between gap-52">
        <p className="flex items-center">Showing {page}</p>
        <div className="flex flex-col justify-evenly">
          <p>Show per page</p>
          <select
            value={pageSize}
            onChange={handlePageSizeChange}
            className="border rounded p-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div>
          <p>Sort by</p>
          <select
            value={sort}
            onChange={handleSortChange}
            className="border rounded p-2"
          >
            <option value="-published_at">Newest</option>
            <option value="published_at">Oldest</option>
          </select>
        </div>
      </div>
      <div className="flex gap-10 my-5 justify-center flex-wrap">
        {ideas.data.map((idea) => (
          <Post key={idea.id} idea={idea} />
        ))}
      </div>
      <section className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => handlePageChange(1)}
          disabled={!ideas.links.first}
          className="px-4 py-2 border rounded"
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={!ideas.links.prev}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!ideas.links.next}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(ideas.meta.last_page)}
          disabled={!ideas.links.last}
          className="px-4 py-2 border rounded"
        >
          Last
        </button>
      </section>
    </div>
  );
};

export default IdeasList;
