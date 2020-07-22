// import React, { Component } from 'react'
// import SearchField from 'react-search-field';

// const ENTER_KEY = 13;
// const SEARCH_BUTTON_EDGE = 35;

// const searchFieldStyle = {
//   border: '1px #ddd solid',
//   display: 'inline-flex',
//   justifyContent: 'space-between',
//   height: SEARCH_BUTTON_EDGE,
// };

// const searchFieldButtonStyle = {
//   height: SEARCH_BUTTON_EDGE - 2, // reduces 2px because of top and bottom border
//   width: SEARCH_BUTTON_EDGE - 2,
//   outline: 'none',
//   backgroundColor: 'white',
//   cursor: 'pointer',
//   padding: 5,
//   boxSizing: 'border-box',
//   appearance: 'none',
//   border: 'none',
//   borderLeft: '1px #ddd solid',
// };

// const searchFieldInputStyle = {
//   outline: 'none',
//   border: 'none',
//   fontSize: 14,
//   padding: 10,
//   flex: 1,
//   color: '#5a5a5a',
//   fontWeight: 100,
//   height: SEARCH_BUTTON_EDGE - 2,
// };

// const SearchIcon = () => {
//   const iconEdge = Math.ceil(SEARCH_BUTTON_EDGE * 0.60);
//   const searchIconStyle = {
//     fill: '#727272',
//   };
//   return (
//     <svg
//       version="1.1"
//       x="0px"
//       y="0px"
//       width={iconEdge}
//       height={iconEdge}
//       viewBox="0 0 635 635"
//       style={searchIconStyle}
//     >
//       <g>
//         <path d="M255.108,0C119.863,0,10.204,109.66,10.204,244.904c0,135.245,109.659,244.905,244.904,244.905
//           c52.006,0,100.238-16.223,139.883-43.854l185.205,185.176c1.671,1.672,4.379,1.672,5.964,0.115l34.892-34.891
//           c1.613-1.613,1.47-4.379-0.115-5.965L438.151,407.605c38.493-43.246,61.86-100.237,61.86-162.702
//           C500.012,109.66,390.353,0,255.108,0z M255.108,460.996c-119.34,0-216.092-96.752-216.092-216.092
//           c0-119.34,96.751-216.091,216.092-216.091s216.091,96.751,216.091,216.091C471.199,364.244,374.448,460.996,255.108,460.996z"
//         />
//       </g>
//     </svg>
//   );
// };

// export class Search extends Component {
//     render() {
//         return (
//             <div>
//          <SearchField 
//          placeholder='Search item'
         
//         //  onChange={onChange}
// />

//             </div>
//         )
//     }
// }

// export default Search

import React, { Component } from 'react'
// import './assets/search.css'

export class Search extends Component {
    render() {
        return (
            
        <div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3"> <br/>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4 col-md-offset-3">
            <form action="" class="search-form">
                <div class="form-group has-feedback">
            		<label for="search" class="sr-only">Search</label>
            		<input type="text" class="form-control" name="search" id="search" placeholder="search" />
              		<span class="glyphicon glyphicon-search form-control-feedback"></span>
            	</div>
            </form>
        </div>
    </div>
</div>

        )
    }
}

export default Search

