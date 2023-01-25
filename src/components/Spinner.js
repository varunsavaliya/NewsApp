// import React, { Component } from 'react'     // this is for class based components
import React from 'react'
import loading from './loading.gif'

// export class Spinner extends Component {            // this is for class based components now we are converting it to function based components
// render() {
const Spinner = () => {
    return (
        <div className='text-center my-3'>
            <img src={loading} alt="loading" />
        </div>
    )
    // }
}

export default Spinner