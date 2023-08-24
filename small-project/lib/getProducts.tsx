
export  const  getProducts  = async () => {
    const res = await fetch("https://64e4523bc5556380291302c7.mockapi.io/Products", { cache: "no-cache" });
    return res.json()

}
