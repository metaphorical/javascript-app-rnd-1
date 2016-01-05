const React = require('react');
const className = require('classnames');
const styles = require('./searchPage.css');

const SearchForm = require('../common/searchForm');
const ResultsList = require('./resultsList')

module.exports = (view) => { return (
        <div className={styles.searchBox}>
            <div className={styles.header}>
                <SearchForm />
            </div>
            <div className={styles.mainContainer}>
                <ResultsList results={view.props.results} />
            </div>
            <div className={styles.sidebar} >
            </div>
        </div>
    );
};
