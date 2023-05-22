// import React,{useState,useEffect} from 'react'

// const [Data,setData]=useState("");

// const handleClick=async()=>{
//   let response= await fetch('http://localhost:5000/api',{
//     method:'GET',
//     headers:{
//       'Content-Type':'application/json',
//     },
//   });
//   response = await response.json();
//   setData(response);
// }

// useEffect(()=>{
//   handleClick();
// },[])

// export default function etpq1() {
//   return (
//     <div>
//       <ol>
//         Data.data.map((item)={
//             (
//               <li>item.name</li>
//             )
//         }
//         )
//       </ol>
//       <button onClick={handleClick}>GetData</button>
//     </div>
//   )
// }
