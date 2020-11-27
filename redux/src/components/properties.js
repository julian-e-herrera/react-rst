import React, { Fragment, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { getEstateAction } from '../actions/estateActions'
import { activeEstate } from '../reducers/estateReducer'
import Carousel from 'react-elastic-carousel'
// import Property from './property/property'
import Card from '../components/newCard/newCard'
import { connect } from 'react-redux'
const breakpoint = [
  { width: 500, itemsToShow: 1 },
  { width: 720, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
  { width: 1500, itemsToShow: 4 },
]
const mapStateProps = (state) => {
  return {
    estate: activeEstate(state),
  }
}

const Properties = ({ estate }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadEstate = () => dispatch(getEstateAction())
    loadEstate()
  }, [])

  //const estate = useSelector((state) => state.estate.estate)
  return (
    <Fragment>
      {estate.lenght === 0 ? (
        'Record not found'
      ) : (
        <Carousel breakPoints={breakpoint}>
          {estate.map((ite) => (
            <Card key={ite.id} {...ite} />
          ))}
        </Carousel>
      )}
      {/* here must be carousel with favs */}
    </Fragment>
  )
}

export default connect(mapStateProps)(Properties)
