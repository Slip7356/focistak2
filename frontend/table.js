const url = "http://localhost:3000/players";

async function getPlayers(){
    const response = await fetch(url);
    const data = await response.json();
    console.log("data",data);
    viewTable(data);
}
function viewTable(players){
    let trHtml = ""
    for (const player of players) {
        trHtml+= "<tr>"
        for (const key in player) {
            trHtml+= `<td>${player[key]}</td>`
        }
        trHtml+=`
        <td>
            <button type="button" class="btn btn-outline-dark" onclick="playerDelete('${player.id}')">Törlés</i></button>
        </td>
        `
        trHtml+= "</tr>"
    }

    document.getElementById("body").innerHTML = trHtml
};

async function playerDelete(id){
    console.log("Törlés", id);
    const urlDelete = `${url}/${id}`
    const response = await fetch(urlDelete,{
        method: 'DELETE',
      });

    getPlayers() 
}


getPlayers();