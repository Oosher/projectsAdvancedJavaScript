import React from 'react'
import StringPropChild from './StringPropChild'

export default function StringPropParent() {
    let string ="data from parent";
    return <StringPropChild data={string}/>;

}
