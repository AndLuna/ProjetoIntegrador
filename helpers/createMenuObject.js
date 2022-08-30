const createMenuObject = function (activeMenu){
    let returnObject = {
        joias: false,
        casamento: false,
        relogios: false,
        acessorios: false,
        masculino: false
    }

    if(activeMenu !== returnObject) {
        returnObject[activeMenu] = true
    }

    return returnObject
} 

module.exports.createMenuObject = createMenuObject