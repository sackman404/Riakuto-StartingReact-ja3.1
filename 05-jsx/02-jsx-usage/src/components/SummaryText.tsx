import React from 'react';

const SummaryText: React.FunctionComponent = ({ children }) => {
  console.log(children);

  return <div className="story">{children}</div>;
//   return(
//     <div>
//       <form>
//         <textarea value='Fixed Text'/>
//         <p>
//         <select value="uranus">
//           <option value="satun">Saturn</option>
//           <option value="uranus">Uranus</option>{/* Selected */}
//         </select>
//         </p>
//       </form>
//     </div>
//   );
};

export default SummaryText;
