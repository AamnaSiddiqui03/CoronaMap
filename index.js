
function updateMap()
{
   //yahan pe data ko lekar aao
    fetch("/data.json" )
    .then(response => response.json())
    .then(rsp=>{
        console.log(rsp.data); //rsp ek object hai hai jiske pas data hai, and data ek array hai
        rsp.data.forEach(element=> {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;

            cases = element.infected;

            if (cases > 255) {
                color = "rgb(255,0,0)"
            }
            else {
                color = `rgb(${cases},0,0)`;
            }

            //mark on the map 
            const marker = new mapboxgl.Marker({
                draggable: false,
                color:color
            })
                .setLngLat([longitude, latitude])
                .addTo(map);
        })
    
    })
}

updateMap(); 