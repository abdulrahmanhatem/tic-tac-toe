
export function getResult() {
    let resultObj = localStorage.getItem("result");
    if (resultObj) {
        return JSON.parse(resultObj);
    }else{
        return {"X": 0, "O": 0, "draw":0}
    }
}

export function updateResult(winner, double=0) {
    let resultObj = localStorage.getItem("result");
    if (resultObj) {
        resultObj = JSON.parse(resultObj);   
        let count = resultObj[winner] ? resultObj[winner] : 0;
        let addition = double ? 2 : 1
        resultObj = {...resultObj, [winner]:count + addition}
        console.log(resultObj);
        localStorage.setItem("result", JSON.stringify(resultObj))
    }else{
        localStorage.setItem("result", JSON.stringify({[winner]:1}))
    }
}
