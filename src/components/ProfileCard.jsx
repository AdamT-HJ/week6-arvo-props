import React from 'react'

// export default function ProfileCard(props) {
//   return (
//     <>
//         <div>ProfileCard</div>

//         <div style={{marginTop:"10px", border:"3px solid blue"}}>
//             <h2>{props.name}</h2>
//             <p>Age:{props.age}</p>
//             <p>Location:{props.location}</p>
//             <p>Bio:{props.bio}</p>
//         </div>
//     </>

//   )
// }

// Destructuring props

// export default function ProfileCard(props) {

//     // destructuring
//     const {name, age, location, bio } = props

//   return (
//     <>
//         <div>ProfileCard</div>

//         <div style={{marginTop:"10px", border:"3px solid blue"}}>
//             <h2>{name}</h2>
//             <p>Age:{age}</p>
//             <p>Location:{location}</p>
//             <p>Bio:{bio}</p>
//         </div>
//     </>

//   )
// }


export default function ProfileCard({name, age, location, bio}) {

   

  return (
    <>
        <div>ProfileCard</div>

        <div style={{marginTop:"10px", border:"3px solid blue"}}>
            <h2>{name}</h2>
            <p>Age:{age}</p>
            <p>Location:{location}</p>
            <p>Bio:{bio}</p>
        </div>
    </>

  )
}