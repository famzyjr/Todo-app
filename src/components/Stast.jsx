import React from 'react'

function Stast({toDoList}) {
    let countList = toDoList.length;
  return (
    <div className='stats'>
     <p className='notify'>
        {countList ===0 ? 'Yoy got everything Ready to go ✈️' : `You have ${countList} items on your list.`}
     </p>
    </div>
  )
}

export default Stast