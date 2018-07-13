export const getRestaurante = (callback) =>{
    fetch("http://beta.clubedotalher.com.br:8080/clubedotalher/v1/restaurants/1",{
        headers:new Headers({
            'Authorization': 'Bearer cfeab7d7e58e2aa2d4c80ff4e25f5ba1',
            'client_id':'site'
        })
    })
    .then(res =>{
        if(!res.status === "OK") throw new Error()
        return res.json()
    })
    .then(data =>{
        const local_data = {
            nome: data.name,
            aberto: data.active,
            categoria: data.categories.reduce((sum,i) => [...sum,i.name],[]).toString(','),
            preco: data.averagePriceRange,
            avaliacoes: Math.floor(data.averageEvaluation),
            endereco: data.street,
            pagamento: data.paymentMethods.reduce((sum,i) => [...sum,i.name],[]).toString(', ')
        }
        callback(local_data)
    })
}

export const login = (user,password,callback) =>{
    const body = new FormData()
    body.append("grant_type","password")
    body.append("client_id","site")
    body.append("client_secret","site")
    body.append("username",user)
    body.append("password",password)

    fetch("http://beta.clubedotalher.com.br:8080/clubedotalher/clubedotalher/v1/auth",{
        method:"POST",
        body:body,
        headers: new Headers({
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        }),
    })
    .then(res =>{
        if(!res.status === "OK") throw new Error()
        return res.json()
    })
    .then(data=>{
        console.log(data)
    })
}


export const fakeLogin = (user,password,callback) =>{
    callback("Bearer e3e1958edc426aa6dd9b9fcea2ea30ca")
}

export const getCardapio = (token, callback) =>{

    fetch("http://beta.clubedotalher.com.br:8080/clubedotalher/v1/restaurants/1/menu",{
        headers: new Headers({
            'Authorization': token,
			'client_id': 'site'
        })
    })
    .then(res=>{
        if(!res.status === "OK") throw new Error()
        return res.json()
    })
    .then(data=>{
        const local_data = data.map(item=>{return {
            id: item.id,
            description: item.description,
            name: item.name,
            price: item.price
        }})
        callback(local_data)
    })
}
