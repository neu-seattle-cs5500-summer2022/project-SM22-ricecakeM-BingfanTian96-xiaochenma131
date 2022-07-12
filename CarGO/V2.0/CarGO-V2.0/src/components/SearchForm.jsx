import React from "react";

export default function SearchForm(props) {

    return (
        <div>
            <form className="search-form">
                <label>
                    Year:{' '}
                    <input type="text" name="Year" />
                </label>
                <label>
                    Make:{' '}
                    <input type="text" name="Make" />
                </label>
                <label>
                    Model:{' '}
                    <input type="text" name="Model" />
                </label>
                <label>
                    State:{' '}
                    <input type="text" name="State" />
                </label>
                <input class="search-form-button" type="submit" value="Search" />
            </form>
        </div>
    )
}