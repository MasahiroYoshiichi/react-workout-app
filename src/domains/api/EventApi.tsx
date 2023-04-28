// import {useEffect, useState} from 'react';
//
//
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// const EventApi = () => {
//     const [events, setEvent] = useState([])
//
//     useEffect(() => {
//         void fetch('http://localhost:8080/api', {method: 'GET'})
//             // eslint-disable-next-line @typescript-eslint/no-unsafe-return
//             .then(async res => await res.json())
//             .then(data => {
//                 // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//                 setEvent(data)
//             })
//     },[])
//     console.log(events);
//
//     return (
//         <div className="text-3xl">
//             {events.name}
//             {events.age}
//         </div>
//     )
// }
//
// export default EventApi