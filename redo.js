var table=document.getElementById("personalTable")
for (var i=0; i<5;i++){
  var row =personalTable.insertRow();
  for (var j=0; j<5; j++){
    var cell = row.insertCell()
    cell.innHtml=data
  }
}
var data=[
 {id:"1",
  icon:"fa-solid fa-wifi",
  desc:"student", 
  info:"noroff", 
  photo:'avatar1.png'},

  {id:"2",
   icon:"fa-solid fa-envelope",
   desc:"postman", 
   info:"I am a parmanent employee at postNord", 
   photo:'avatar2.png'},

  {id:"3",
   icon:"fa-solid fa-anchor",
   desc:"navy", 
   info:"I am member of Norway Defence Force", 
   photo:'avatar3.png'},

  {id:"4",
   icon:"fa-solid fa-laptop",
   desc:"I am a business owner", 
   info:"working at Tech-sell", 
   photo:'avatar4.png'},

  {id:"5",
   icon:"fa-solid fa-hotel",
   desc:"waiter", 
   info:"working at Atlas Hotel", 
   photo:'avatar5.png'},
];

data.forEach((data)=>{
 const row = document.createElement("tr");

 const idCell=document.createElement("td");
 idCell.textContent=data.id;
 row.appendChild(idCell);

 const iconCell= document.createElement("td");
 const iconElement=document.createElement("i");
 iconElement.className = data.icon;
 iconCell.appendChild(iconElement);
 row.appendChild(iconCell);

 const descCell=document.createElement("td");
 descCell.textContent=data.desc;
 row.appendChild(descCell);

 const infoCell=document.createElement("td");
 infoCell.textContent=data.info;
 row.appendChild(infoCell);

 const photoCell= document.createElement("td");
 const photoElement=document.createElement("img");
 photoElement.style.maxHeight="100px";
 photoElement.style.maxWedith="100px";
 photoElement.className = data.photo;
 photoCell.appendChild(photoElement);
 row.appendChild(photoCell);

 personalTable.appendChild(row)
})



 
