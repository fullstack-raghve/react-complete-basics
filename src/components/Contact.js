import React from 'react'
import './Contact.css'

let compType = 'funcational'

var places = [
    { id:1,'name':'Noida',"area":"UP" },
    { id:2,'name':'Delhi', "area":"NCR"},
    { id:3,'name':'Gurgaon', "area":"Haryana" },
    { id:4,'name':'Knapur', "area":"UP" }
  ];
  

export const Contact = () => {
    return (
        <div>
            <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>
            <p>I am contact compnent</p>
            <p>This is {compType} componets</p>
            <div className="navigation">
            <ul>
              {
                places.map(p =>
                  <li key={p.id}>{p.name},{p.area}</li> 
                )
              }
            </ul>
          </div>
        </div>
    )
}
