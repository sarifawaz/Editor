var codes = document.getElementById("codes")
var run = document.getElementById("run")
var del = document.getElementById("del")
var result = document.getElementById("result")

run.onclick = ()=>{
    result.innerHTML = codes.value
    localStorage.setItem("Result", codes.value)
}

del.onclick = ()=>{
    result.innerHTML = ""
}

onload = ()=>{
    codes.value = localStorage.getItem("Result")
}