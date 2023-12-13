
// import {useState,useEffect} from "react";
// import './App.css';

// const App=()=> {

// // const [songs,setSongs] = useState();


// const [currentSongIndex,setCurrentSongIndex] = useState(0);
// const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


// useEffect(()=>{
//   setNextSongIndex(()=>{
//   if (currentSongIndex + 1 >songs.length - 1 ){
//     return 0;
//   } else{
//     return currentSongIndex + 1;
//   }
// });
// },[currentSongIndex])

//   return (
//     <div className="App">
//     <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
//     </div>
//   );
// }

// export default App;