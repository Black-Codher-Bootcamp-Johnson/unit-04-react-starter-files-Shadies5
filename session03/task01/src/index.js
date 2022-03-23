import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Fola';

function Profile(name){
  //  if(){
    return <main id="content" role="main" class="base">
            <h1>{name}'s React Page</h1>
              <p>This is my Amazing React App</p>
            </main>
  //  }
  //  else {
  //    return <main id="content" role="main" class="base">
  //      <h1>Just a React Page</h1>
  //      <p>Nothing to see here!</p>
  //    </main>  
  //  }
}

ReactDOM.render(Profile(name),document.getElementById('root'));
