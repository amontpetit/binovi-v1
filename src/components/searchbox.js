import React from 'react'
import SearchInput, {createFilter} from 'react-search-input'

import data from '../data/orgdata.js'

const KEYS_TO_FILTER = [
    'name', 
    'typeCode', 
    'locations.city', 
    'locations.region',
    'locations.postalCode',
    'locations.country',
    'staff.first',
    'staff.last'
]

class SearchBox extends React.Component{
    constructor (props){
      super(props)
      this.state = {
        searchTerm: ''
      }
      this.searchUpdated = this.searchUpdated.bind(this)
    }
  
    render(){
      const filteredData = data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER))
  
      return(
        <div className="page-content" id="providers-search">
            <SearchInput className="search-input" onChange={this.searchUpdated} />
            {filteredData.map(data => {
                return (
                    <div className="provider-entry" key={data.id}>
                        <div className="provider-name">{data.name}</div>
                        <div className="provider-contact">
                            <p className="small">{data.locations[0].addressLine1}, {data.locations[0].addressLine2}</p>
                            <p className="small">{data.locations[0].city}, {data.locations[0].region}</p>
                            <p className="small">{data.locations[0].postalCode}</p>
                            <p className="small">{data.locations[0].country}</p>
                            <p className="small">-----</p>
                            <p className="small">{data.locations[0].phone}</p>
                            <p className="small">{data.locations[0].email}</p>
                        </div>
                    </div>
                )
            })}
        </div>
      )
    }

    searchUpdated(term){
        this.setState({searchTerm:term})
    }
}

export default SearchBox