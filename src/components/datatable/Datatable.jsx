import React, { useEffect, useState } from 'react';
import './datatable.css'
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search';
import TableWidget from '../widget/TableWidget';
import { host } from '../../host';



const Datatable = () => {

    const [pageCount, setPageCount] = useState(0)

    const [page, setPage] = useState(0)
    const [searchWord, setSearchWord] = useState(' ')
    const [citizens, setCitizenData] = useState([])
    const size = 10;
    useEffect(() => {
        fetch(`${host}/citizen?page=${page}&&size=${size}&&nameornid=${searchWord}`)
            .then(res => res.json())
            .then(data => {
                setCitizenData(data.citizens);

                const count = data.count;
                const pageNumber = Math.ceil(count / size);
                setPageCount(pageNumber);
            })
    }, [page, searchWord])

    const searchName = (e) => {
        setSearchWord(e.target.value)
    }


    return (
        <>
            <div className='datatable '>

                <div className="dataTableTitle">
                    Add New Citizen
                    <Link to='/citizens/new' style={{ textDecoration: 'none' }} className="link">Add New</Link>
                </div>

                <div className="searchBox">
                    <input className='searchInput' type="text" name="searchBox" id="searchBox" onBlur={searchName} placeholder="নাম অথবা আইডি নাম্বার অথবা ফোন নাম্বার দিয়ে খুজুন" />
                    <SearchIcon className='sIcon' />

                </div>


                <TableWidget citizens={citizens} />



            </div>
            <div className="pagination">
                {
                    [...Array(pageCount).keys()].map(number => <button
                        key={number}
                        onClick={() => setPage(number)}
                        className={`pageNumberBtn ${number === page ? 'selected' : ''}`}>{number + 1}</button>)
                }
            </div>
        </>
    );
};

export default Datatable;