const fetchUserrs = async() =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = response.json()
        return users
    }catch(error){
        console.log(error);
    }

}

const create_table = (users) =>{
    const createTable = document.getElementById("table-container")
    const table = document.createElement("table")
    const headers = ["Id","Name","Username","Phone","Email","Website"]
    const headerRow = table.insertRow()
    headers.forEach(item => {
        const header = document.createElement("th")
        header.textContent = item
        headerRow.appendChild(header)
    })
    users.forEach(item =>{
        const row = table.insertRow()
        row.insertCell().textContent = item.id
        row.insertCell().textContent = item.name
        row.insertCell().textContent = item.username
        row.insertCell().textContent = item.phone
        row.insertCell().textContent = item.email
        row.insertCell().textContent = item.website
    })
    createTable.appendChild(table)
    table.classList.add("table")
}

const finish = async()=>{
    const users = await fetchUserrs()
    if(users){
        create_table(users)
    }
}
finish()