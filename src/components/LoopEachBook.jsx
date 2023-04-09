import React from 'react'

import EachBook from './EachBook'

export default function LoopEachBook({ props }) {
    const bookData = []
    return (
        <div>
            {bookData.map((eachBookData) => (
                <EachBook
                    key={eachBookData.idBook}
                    props={eachBookData}
                    propsInProgress={props}
                />
            ))}
        </div>
    )
}
