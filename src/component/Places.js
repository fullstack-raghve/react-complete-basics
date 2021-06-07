import React from 'react'

var places = [
    { id:1,'name':'Noida',"area":"UP" },
    { id:2,'name':'Delhi', "area":"NCR"},
    { id:3,'name':'Gurgaon', "area":"Haryana" },
    { id:4,'name':'Knapur', "area":"UP" }
  ];

export const Places  = () => {
    return(
        <div>
 {/* {
                places.map(p =>
                  <li key={p.id}>{p.name},{p.area}</li> 
                )
              } */}
            
        {
        places.map((item, index) =>
          <li key={item.id} className={index % 2 ? 'red' : 'blue'}>
            {index+1}-{item.name},{item.area}
            </li>
        )
        }
     
  </div>
    )
}