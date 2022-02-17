function BEM(def) {
    let blockMthd, elementMthd, modifierMthd;

    return{
        block(a) {
            blockMthd = a 
            return this
        },
        element (b) {
            elementMthd = '__' + b  
            return this
        },
        modifier (c) {
            modifierMthd = '--' + c 
            return this
        },
        build () {
            //console.log(blockMthd)
            //console.log(elementMthd)
            //console.log(modifierMthd)
            if ( blockMthd !== undefined) {
                if ( elementMthd == undefined && modifierMthd !== undefined){
                    console.log(blockMthd+modifierMthd)
                } else if (elementMthd !== undefined && modifierMthd == undefined){
                    console.log(blockMthd+elementMthd)
                } else {
                    console.log(blockMthd+elementMthd+modifierMthd)
                }
            } else {
                console.log(`Please include a block`)
            }
        }
    }
}

const bem = new BEM();


//bem.block("list").element("item").modifier("active").build(); // "list__item–active"
//bem.block("list").element("item").build(); // "list__item"
//bem.block("list").modifier("active").build(); // "list–active"
//bem.element("item").modifier("active").build(); // "Please include a block"
//bem.element("item").build(); // "Please include a block"
//bem.modifier("active").build(); // "Please include a block"

