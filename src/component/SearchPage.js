import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

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

      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="lets build"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="lets build"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want a free one"
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="lets build"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
    </div>
  )
}

export default SearchPage
