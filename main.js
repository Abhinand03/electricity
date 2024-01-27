sub=()=>{

    localStorage.setItem("con",cn.value)
    localStorage.setItem("name",un.value)
    localStorage.setItem("pre-reading",pr.value)
    localStorage.setItem("cur-reading",cr.value)

    if(!pr.value||!cr.value)
    {
        alert("enter value")
    }
    else{
        pre=pr.value
        cure=cr.value
        reading=cure-pre
        localStorage.setItem("read",reading)
        res=reading*8
        localStorage.setItem("amount",res)
        window.location="result.html"
    }

}