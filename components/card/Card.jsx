import "./card.css";
export const Card =({isLoading,isContent,isShowHeader})=>{
      
     return(
        <div className="card-content">
           {isShowHeader&&<h3>This is a card component.</h3> }
            {isLoading ?(<p>loading content....</p>):(isContent ?(<p>I have content</p>):(<p>Failed to get content</p>))}
           
        </div>
    )
}


//     if(isLoading){
//      return(
//         <div className="card-content">
//             This is a card component.
//             <p>I have content</p>
//         </div>
//     )
// }
//     if(!isContent){
//         return(
//             <div className="card-content">
//                 This is a card component.
//                 <p>Failed to get content</p>
//             </div>
//         )
//     }  
//     if(isContent && !isLoading){
//      return(
//         <div className="card-content">
//             This is a card component.
//             <p>I have content</p>
//         </div>
//     )
//     }
 
//     return(
//         <div className="card-content">
//             This is a card component.
//             <p>I have content</p>
//         </div>
//     )
// }