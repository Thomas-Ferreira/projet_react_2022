import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import allTheActions from '../../actions'
import styled from 'styled-components'
import ListeRow from '../listeRow';
import { motion } from 'framer-motion';
import ReactPaginate from 'react-paginate';

const Liste = () => {

    const dispatch = useDispatch()
    const apiResponse = useSelector(state =>
        state.api.response.data ? state.api.response.data : []
    )
    const apiError = useSelector(state => state.api.error)

    const [page, setPage] = useState(0);
    const itemsPerPage = 50;
    const numberOfRecordsVistited = page * itemsPerPage;
    const [totalPages, setTotalPages] = useState(Math.ceil(apiResponse.length / itemsPerPage))
    const changePage = ({ selected }) => {
        setPage(selected);
      }

    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    useEffect(() => {
        dispatch(allTheActions.api.getAllServants())
    }, [])
    
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
             onPageChange={changePage}
             />

            {apiResponse.filter(item =>  item.name.toLowerCase().includes(searchInput.toLowerCase())).slice(numberOfRecordsVistited, numberOfRecordsVistited + itemsPerPage).map(item =>{
                return<> 
                <motion.div
                whileInView={{ x: 0 }}
                initial={{ x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}>
                <ListeRow name={item.name} face={item.face} rarity={item.rarity} id={item.id} ></ListeRow>
                </motion.div>
                </>
            })}

            <MyPaginate
             pageCount={totalPages}
             onPageChange={changePage}
            />
        </ContainAll>
    );
};

export default Liste

const MyPaginate = styled(ReactPaginate).attrs({
    activeClassName: 'active',
    previousLabel:'Previous',
    nextLabel:"Next",
    breakLabel:"...",
    pageRangeDisplayed:0,
    marginPagesDisplayed:0,

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
    min-height:100vh;
    height:100%;
    background-repeat: no-repeat;
    background-size:cover;
`