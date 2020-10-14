import React from 'react'

import { Card } from '../components/Card/box'
import { Photo } from './photo'
export const CardList = (props) => (
  <div className="box">
    {props.items.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
) ///probablemente quede obsoleta este archivo
