function rook(x1, y1, x2, y2) {
    if(x1 == x2){
        // meme absisse
        if(y1 > y2) {
            console.log('descend')
            console.log(dist(x1, y1, x2, y2))
            for(c=1;c < dist(x1, y1, x2, y2)+1; c++) {
                if(IsAPieceHere(x2, y2 + c)[0]) {
                    if(selectedpiece.side == IsAPieceHere(x2, y2 + c)[1]){
                        console.log('pareil')
                    } else {
                        console.log("Pas le meme")
                    }
                }
            }
        } else {
            console.log('Monte')
            for(i=1; i< dist(x1, y1, x2, y2)+1; i++) {
                if(IsAPieceHere(x2, y2 - i)[0]){
                    if(selectedpiece.side == IsAPieceHere(x2, y2 - i)[1]){
                        console.log('pareil')
                    } else {
                        console.log("Pas le meme")
                    }
                }
            }
        }
    } else if(y1 == y2) {
        //meme ordonnée
        if(x1 > x2) {
            console.log('droite')
            for(o=1; o < dist(x1, y1, x2, y2)+1; o++) {
                if(IsAPieceHere(x2 + o, y2)[0]){
                    if(selectedpiece.side == IsAPieceHere(x2 + o, y2)[1]){
                        console.log('pareil')
                    } else {
                        console.log("Pas le meme")
                    }
                }
            }
        } else {
            console.log('gauche')
            for(p=1; p< dist(x1, y1, x2, y2)+1; p++) {
                if(IsAPieceHere(x2 - p, y2)[0]){
                    if(selectedpiece.side == IsAPieceHere(x2 - p, y2)[1]){
                        console.log('pareil')
                    } else {
                        console.log("Pas le meme")
                    }
                }
            }
        }
    }
}

function bishop(x1, y1, x2, y2) {
    console.log(x1)
}

function queen(x1, y1, x2, y2) {
    console.log(x1)
}

function king(x1, y1, x2, y2) {
    console.log(x1)
}