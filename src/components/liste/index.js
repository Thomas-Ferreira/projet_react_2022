import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allTheActions from "../../actions";
import styled from "styled-components";
import ListeRow from "../listeRow";
import { motion } from "framer-motion";
import ReactPaginate from "react-paginate";

const Liste = () => {
  const dispatch = useDispatch();
  const apiResponse = useSelector((state) =>
    state.api.response.data ? state.api.response.data : []
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = 50;
  const numberOfRecordsVistited = page * itemsPerPage;
  const totalPages = Math.ceil(apiResponse.length / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    setPage(selected);
  };

  const pageVariants = {
    hidden: {
      opacity: 0,
      x: -300,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const pageTransition = {
    type: "tween",
    duration: 0.5,
    ease: "easeInOut",
  };

  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    dispatch(allTheActions.api.getAllServants());
  }, [dispatch]);

  return (
    <ContainAll>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput}
      />
      
      <MyPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
      />

      <motion.div
        key={page}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        transition={pageTransition}
      >
        {apiResponse
          .filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          )
          .slice(
            numberOfRecordsVistited,
            numberOfRecordsVistited + itemsPerPage
          )
          .map((item) => {
            return (
              <>
                <motion.div
                  whileInView={{ x: 0 }}
                  initial={{ x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <ListeRow
                    name={item.name}
                    face={item.face}
                    rarity={item.rarity}
                    id={item.id}
                  ></ListeRow>
                </motion.div>
              </>
            );
          })}
      </motion.div>

      <MyPaginate
        pageCount={totalPages}
        onPageChange={handlePageChange}
      />

    </ContainAll>
  );
};

export default Liste;

const MyPaginate = styled(ReactPaginate).attrs({
  activeClassName: "active",
  previousLabel: "Previous",
  nextLabel: "Next",
  breakLabel: "...",
  pageRangeDisplayed: 0,
  marginPagesDisplayed: 0,
})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
  @media (min-width: 768px) {
    justify-content: center;
  }
  li a {
    border-radius: 7px;
    padding: 0.1rem 1rem;
    border: gray 1px solid;
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
  }
  li.active a {
    background-color: #0366d6;
    border-color: transparent;
    color: white;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;

const ContainAll = styled.div`
  min-height: 100vh;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;
