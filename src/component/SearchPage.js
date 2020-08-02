import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>

      <hr />

      <ChannelRow
        image="https://images.unsplash.com/photo-1596266953818-9ef30e4515ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
        verified
        channel="Clever Programmer"
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming"
      />
    </div>
  )
}

export default SearchPage
