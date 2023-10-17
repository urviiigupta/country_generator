const btn=document.getElementById('search-btn');
const result=document.getElementById('result');

btn.addEventListener('click',function()
{   const conuntry_name=document.getElementById('country-inp').value;
    console.log(conuntry_name);

     const final_Url=`https://restcountries.com/v3.1/name/${conuntry_name}?fullText=true`;

     fetch(final_Url)
     .then((response)=>
     {
        return response.json();
     })
     .then((data)=>
     {
        console.log(data);
        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        
        <h3>The official name is : ${data[0].name.official}</h3>
        <h3>The Capital is : ${data[0].capital}</h3>
        <h3>The Continent is : ${data[0].continents[0]}</h3>
        <h3> The Population is : ${data[0].population}</h3> `

     })
     .catch(()=>{
         
            result.innerHTML=`<h3>Enter a valid country name </h3>`;
         
     })
})