import { Navigate } from '@react/router';
import React from 'react'

const Search = (props) => {

    const { SearchInfo, SetSearchInfo } = props;

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        Navigate(`/${SearchInfo.category}/${SearchInfo.id}`);
    }

    const OnChangeHandler = (e) => {
        SetSearchInfo({
            ...SearchInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={OnSubmitHandler} className="row mt-5">
            <div className="col-sm-6 form-group">
                <div className="row">
                    <label htmlFor="category" className="col-sm-4">Search For: </label>
                    <select onChange={OnChangeHandler} className="col-sm-8 form-control" name="category" value={SearchInfo.category}>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
            </div>

            <div className="col-sm-6 form-group">
                <div className="row">
                    <div className="form-group col-sm-5 row">
                        <label htmlFor="id" className="col-sm-4"> ID: </label>
                        <input onChange={OnChangeHandler} className="col-sm-8 form-control" type="number" name="id" value={SearchInfo.id} />
                    </div>
                    <div className="form-group col-sm-7">
                        <button className="col-sm-12 btn btn-primary">Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Search;