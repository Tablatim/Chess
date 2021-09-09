var scl = 75;
var scoreA = 0;
var scoreB = 0;
var StartTime;
var turn = 'A';
var XAxisArray = ["A","B","C","D","E","F","G","H"]
var YAxisArray = [8,7,6,5,4,3,2,1,0]

function setup() {
    canv = createCanvas(600,600)
    canv.mouseClicked(click)
    creategrid()
    setuppiece()
    StartTime = new Date()
    var h1 = document.getElementById('texth1')
    h1.innerHTML = `Joueur : ${turn}`
    var canvas = document.getElementById('defaultCanvas0')
    canvas.style.border = "solid"
    canvas.style.position = "absolute"
    canvas.style.padding = "0"
    canvas.style.marginLeft = "10px"
}

function draw() {
    document.title = Math.floor(((new Date()).getTime() - StartTime.getTime()) / 1000) + " secondes"
    var h2 = document.getElementById('texth2')
    h2.innerHTML = `Score :<br>A | B<br>${scoreA} | ${scoreB}`
    var h3 = document.getElementById('texth3')
    selectedpiece == null ? Piece = "Aucune" : Piece = selectedpiece.name + "<br>Equipe : " + selectedpiece.side + "<br>Coordonnées : " + XAxisArray[selectedpiece.x] + YAxisArray[selectedpiece.y]
    h3.innerHTML = `Pièce selectionée : <br>${Piece}`
    
    if(isgameover()[0]) {
        document.writeln(`<h1 style='text-align : center'>${isgameover()[1]}<br><br>Score :<br>A | B<br>${scoreA} | ${scoreB}<br><br><button onclick="window.location.reload()">Relancer</button></h1>`)
        throw new Error("Erreur volontaire")
    }
}

function creategrid() {
    // Création du quadrillage :
    for(y=0; y<8; y++){
        for(x=0;x<8;x++){
            if(x%2 == 0 && y%2 == 0) {
                cellb(x,y)
            }else if(x%2 == 0 && y%2 != 0){
                cellb(x+1,y)
            }
            
            if(!(x%2 != 0 && y%2 != 0) && (x%2 != 0 || y%2 != 0)) {
                cellw(x,y)
            }
        }
    }
}
function cellb(x, y) {
    // Création d'une case noir :
    cellr = createVector(x, y);
    cellr.mult(scl);
    fill(51, 51, 51);
    rect(cellr.x, cellr.y, scl, scl)
}
function cellw(x, y) {
    // Création d'une case blanche :
    cellr = createVector(x, y);
    cellr.mult(scl);
    fill(255, 255, 255);
    rect(cellr.x, cellr.y, scl, scl)
}

var arraypiecesA = []
var arraypiecesB = []
function setuppiece() {
    arraypiecesA = []
    // Joueur 1
    Apawn1 = new pieceA(0,1, "Pawn", "Pion")
    Apawn1.show()
    arraypiecesA.push(Apawn1)
    Apawn2 = new pieceA(1,1, "Pawn", "Pion")
    Apawn2.show()
    arraypiecesA.push(Apawn2)
    Apawn3 = new pieceA(2,1, "Pawn", "Pion")
    Apawn3.show()
    arraypiecesA.push(Apawn3)
    Apawn4 = new pieceA(3,1, "Pawn", "Pion")
    Apawn4.show()
    arraypiecesA.push(Apawn4)
    Apawn5 = new pieceA(4,1, "Pawn", "Pion")
    Apawn5.show()
    arraypiecesA.push(Apawn5)
    Apawn6 = new pieceA(5,1, "Pawn", "Pion")
    Apawn6.show()
    arraypiecesA.push(Apawn6)
    Apawn7 = new pieceA(6,1, "Pawn", "Pion")
    Apawn7.show()
    arraypiecesA.push(Apawn7)
    Apawn8 = new pieceA(7,1, "Pawn", "Pion")
    Apawn8.show()
    arraypiecesA.push(Apawn8)
    Arook1 = new pieceA(0,0, "Rook", "Tour")
    Arook1.show()
    arraypiecesA.push(Arook1)
    Arook2 = new pieceA(7,0, "Rook", "Tour")
    Arook2.show()
    arraypiecesA.push(Arook2)
    AKnight1 = new pieceA(1,0, "Knight", "Cavalier")
    AKnight1.show()
    arraypiecesA.push(AKnight1)
    AKnight2 = new pieceA(6,0, "Knight", "Cavalier")
    AKnight2.show()
    arraypiecesA.push(AKnight2)
    ABishop1 = new pieceA(2,0, "Bishop", "Fou")
    ABishop1.show()
    arraypiecesA.push(ABishop1)
    ABishop2 = new pieceA(5,0, "Bishop", "Fou")
    ABishop2.show()
    arraypiecesA.push(ABishop2)
    AKing = new pieceA(4,0, "King", "Roi")
    AKing.show()
    arraypiecesA.push(AKing)
    AQueen = new pieceA(3,0, "Queen", "Reine")
    AQueen.show()
    arraypiecesA.push(AQueen)
    
    // Joueur 2
    arraypiecesB = []
    Bpawn1 = new pieceB(0,6, "Pawn", "Pion")
    Bpawn1.show()
    arraypiecesB.push(Bpawn1)
    Bpawn2 = new pieceB(1,6, "Pawn", "Pion")
    Bpawn2.show()
    arraypiecesB.push(Bpawn2)
    Bpawn3 = new pieceB(2,6, "Pawn", "Pion")
    Bpawn3.show()
    arraypiecesB.push(Bpawn3)
    Bpawn4 = new pieceB(3,6, "Pawn", "Pion")
    Bpawn4.show()
    arraypiecesB.push(Bpawn4)
    Bpawn5 = new pieceB(4,6, "Pawn", "Pion")
    Bpawn5.show()
    arraypiecesB.push(Bpawn5)
    Bpawn6 = new pieceB(5,6, "Pawn", "Pion")
    Bpawn6.show()
    arraypiecesB.push(Bpawn6)
    Bpawn7 = new pieceB(6,6, "Pawn", "Pion")
    Bpawn7.show()
    arraypiecesB.push(Bpawn7)
    Bpawn8 = new pieceB(7,6, "Pawn", "Pion")
    Bpawn8.show()
    arraypiecesB.push(Bpawn8)
    Brook1 = new pieceB(0,7, "Rook", "Tour")
    Brook1.show()
    arraypiecesB.push(Brook1)
    Brook2 = new pieceB(7,7, "Rook", "Tour")
    Brook2.show()
    arraypiecesB.push(Brook2)
    BKnight1 = new pieceB(1,7, "Knight", "Cavalier")
    BKnight1.show()
    arraypiecesB.push(BKnight1)
    BKnight2 = new pieceB(6,7, "Knight", "Cavalier")
    BKnight2.show()
    arraypiecesB.push(BKnight2)
    BBishop1 = new pieceB(2,7, "Bishop", "Fou")
    BBishop1.show()
    arraypiecesB.push(BBishop1)
    BBishop2 = new pieceB(5,7, "Bishop", "Fou")
    BBishop2.show()
    arraypiecesB.push(BBishop2)
    BKing = new pieceB(4,7, "King", "Roi")
    BKing.show()
    arraypiecesB.push(BKing)
    BQueen = new pieceB(3,7, "Queen", "Reine")
    BQueen.show()
    arraypiecesB.push(BQueen)
}

function update() {
    creategrid()
    arraypiecesA = []
    // Joueur 1
    Apawn1 = new pieceA(Apawn1.x,Apawn1.y, "Pawn", "Pion")
    Apawn1.show()
    arraypiecesA.push(Apawn1)
    Apawn2 = new pieceA(Apawn2.x,Apawn2.y, "Pawn", "Pion")
    Apawn2.show()
    arraypiecesA.push(Apawn2)
    Apawn3 = new pieceA(Apawn3.x,Apawn3.y, "Pawn", "Pion")
    Apawn3.show()
    arraypiecesA.push(Apawn3)
    Apawn4 = new pieceA(Apawn4.x,Apawn4.y, "Pawn", "Pion")
    Apawn4.show()
    arraypiecesA.push(Apawn4)
    Apawn5 = new pieceA(Apawn5.x,Apawn5.y, "Pawn", "Pion")
    Apawn5.show()
    arraypiecesA.push(Apawn5)
    Apawn6 = new pieceA(Apawn6.x,Apawn6.y, "Pawn", "Pion")
    Apawn6.show()
    arraypiecesA.push(Apawn6)
    Apawn7 = new pieceA(Apawn7.x,Apawn7.y, "Pawn", "Pion")
    Apawn7.show()
    arraypiecesA.push(Apawn7)
    Apawn8 = new pieceA(Apawn8.x,Apawn8.y, "Pawn", "Pion")
    Apawn8.show()
    arraypiecesA.push(Apawn8)
    Arook1 = new pieceA(Arook1.x,Arook1.y, "Rook", "Tour")
    Arook1.show()
    arraypiecesA.push(Arook1)
    Arook2 = new pieceA(Arook2.x,Arook2.y, "Rook", "Tour")
    Arook2.show()
    arraypiecesA.push(Arook2)
    AKnight1 = new pieceA(AKnight1.x,AKnight1.y, "Knight", "Cavalier")
    AKnight1.show()
    arraypiecesA.push(AKnight1)
    AKnight2 = new pieceA(AKnight2.x,AKnight2.y, "Knight", "Cavalier")
    AKnight2.show()
    arraypiecesA.push(AKnight2)
    ABishop1 = new pieceA(ABishop1.x,ABishop1.y, "Bishop", "Fou")
    ABishop1.show()
    arraypiecesA.push(ABishop1)
    ABishop2 = new pieceA(ABishop2.x,ABishop2.y, "Bishop", "Fou")
    ABishop2.show()
    arraypiecesA.push(ABishop2)
    AKing = new pieceA(AKing.x,AKing.y, "King", "Roi")
    AKing.show()
    arraypiecesA.push(AKing)
    AQueen = new pieceA(AQueen.x,AQueen.y, "Queen", "Reine")
    AQueen.show()
    arraypiecesA.push(AQueen)
    
    // Joueur 2
    arraypiecesB = []
    Bpawn1 = new pieceB(Bpawn1.x,Bpawn1.y, "Pawn", "Pion")
    Bpawn1.show()
    arraypiecesB.push(Bpawn1)
    Bpawn2 = new pieceB(Bpawn2.x,Bpawn2.y, "Pawn", "Pion")
    Bpawn2.show()
    arraypiecesB.push(Bpawn2)
    Bpawn3 = new pieceB(Bpawn3.x,Bpawn3.y, "Pawn", "Pion")
    Bpawn3.show()
    arraypiecesB.push(Bpawn3)
    Bpawn4 = new pieceB(Bpawn4.x,Bpawn4.y, "Pawn", "Pion")
    Bpawn4.show()
    arraypiecesB.push(Bpawn4)
    Bpawn5 = new pieceB(Bpawn5.x,Bpawn5.y, "Pawn", "Pion")
    Bpawn5.show()
    arraypiecesB.push(Bpawn5)
    Bpawn6 = new pieceB(Bpawn6.x,Bpawn6.y, "Pawn", "Pion")
    Bpawn6.show()
    arraypiecesB.push(Bpawn6)
    Bpawn7 = new pieceB(Bpawn7.x,Bpawn7.y, "Pawn", "Pion")
    Bpawn7.show()
    arraypiecesB.push(Bpawn7)
    Bpawn8 = new pieceB(Bpawn8.x,Bpawn8.y, "Pawn", "Pion")
    Bpawn8.show()
    arraypiecesB.push(Bpawn8)
    Brook1 = new pieceB(Brook1.x,Brook1.y, "Rook", "Tour")
    Brook1.show()
    arraypiecesB.push(Brook1)
    Brook2 = new pieceB(Brook2.x,Brook2.y, "Rook", "Tour")
    Brook2.show()
    arraypiecesB.push(Brook2)
    BKnight1 = new pieceB(BKnight1.x,BKnight1.y, "Knight", "Cavalier")
    BKnight1.show()
    arraypiecesB.push(BKnight1)
    BKnight2 = new pieceB(BKnight2.x,BKnight2.y, "Knight", "Cavalier")
    BKnight2.show()
    arraypiecesB.push(BKnight2)
    BBishop1 = new pieceB(BBishop1.x,BBishop1.y, "Bishop", "Fou")
    BBishop1.show()
    arraypiecesB.push(BBishop1)
    BBishop2 = new pieceB(BBishop2.x,BBishop2.y, "Bishop", "Fou")
    BBishop2.show()
    arraypiecesB.push(BBishop2)
    BKing = new pieceB(BKing.x,BKing.y, "King", "Roi")
    BKing.show()
    arraypiecesB.push(BKing)
    BQueen = new pieceB(BQueen.x,BQueen.y, "Queen", "Reine")
    BQueen.show()
    arraypiecesB.push(BQueen)
}

function click(){
    if(selectedpiece == null) {
        arraypiecesA.forEach(e => {
            if((mouseX > e.x * scl && mouseX < e.x*scl + scl) && (mouseY > e.y * scl && mouseY < e.y*scl + scl)){
                if(e.side != turn) {
                    return NotYourTurn()
                }
                e.select()
                return
            }
        })
        arraypiecesB.forEach(e => {
            if((mouseX > e.x * scl && mouseX < e.x*scl + scl) && (mouseY > e.y * scl && mouseY < e.y*scl + scl)){
                if(e.side != turn) {
                    return NotYourTurn()
                }
                e.select()
                return
            }
        })
    } else {
        selectenewplace()
    }
}

function selectenewplace() {
    x = Math.floor(mouseX/scl)
    y = Math.floor(mouseY/scl)
    if(CanItMoveHere(x, y, selectedpiece.x, selectedpiece.y, selectedpiece.type)[0]) {
        selectedpiece.goTo(x, y)
        if(turn == 'A') {turn = 'B'}
        else if(turn == 'B') {turn = 'A'}
        var h1 = document.getElementById('texth1')
        h1.innerHTML = `Joueur : ${turn}`
        for(i=0; i<arraypiecesB.length; i++) {
            if(Object.getPrototypeOf(selectedpiece).constructor.name == "pieceA") {
                if(selectedpiece.x == arraypiecesB[i].x && selectedpiece.y == arraypiecesB[i].y) {
                    arraypiecesB[i].x = -1
                    arraypiecesB[i].y = -1
                    scoreA += 1
                }
            }
            if(Object.getPrototypeOf(selectedpiece).constructor.name == "pieceB") {
                if(selectedpiece.x == arraypiecesA[i].x && selectedpiece.y == arraypiecesA[i].y) {
                    arraypiecesA[i].x = -1
                    arraypiecesA[i].y = -1
                    scoreB += 1
                }
            }
        }
    } else {
        null
        // si le pion ne peut pas bouger
        var h1 = document.getElementById('texth1')
        h1.innerHTML = "Vous ne pouvez pas vous déplacer ici."
        setTimeout(() => {
            var h1 = document.getElementById('texth1')
            h1.innerHTML = `Joueur : ${turn}`
        }, 1000)
    }
    update()
    selectedpiece = null;
}

function isgameover() {
    if(AKing.x == -1) {
        return [true, "B-teams Won"]
    } else if(BKing.x == -1) {
        return [true, "A-teams Won"]
    } else {
        return [false]
    }
}

function CanItMoveHere(x1, y1, x2, y2, type) {
    // 1 => Nouvelle position 
    // 2 => position de base du pion
    for(i=0; i<arraypiecesB.length; i++){
        if((Object.getPrototypeOf(selectedpiece).constructor.name == "pieceB") && arraypiecesB[i].x == x1 && arraypiecesB[i].y == y1){
            return [false]
        } else if((Object.getPrototypeOf(selectedpiece).constructor.name == "pieceA") && arraypiecesA[i].x == x1 && arraypiecesA[i].y == y1){
            return [false]
        }
    }
    switch(type) {
        case 'Pawn'://pion ==> manque la diago pour manger
        if(x1 != x2) {
            for(i=0; i<arraypiecesB.length; i++) {
                if((Object.getPrototypeOf(selectedpiece).constructor.name == "pieceB") && arraypiecesA[i].x == x1 && arraypiecesA[i].y == y1){
                    if(dist(x1, y1, x2, y2) <= 2) {
                        if(arraypiecesA[i].y != y2) {
                            return [true] 
                        } else {return [false]}
                    } else {
                        return [false]
                    }
                } else if((Object.getPrototypeOf(selectedpiece).constructor.name == "pieceA") && arraypiecesB[i].x == x1 && arraypiecesB[i].y == y1){
                    if(dist(x1, y1, x2, y2) <= 2) {
                        if(arraypiecesB[i].y != y2) {
                            return [true] 
                        } else {return [false]}
                    } else {
                        return [false]
                    }
                }
            }
            return [false]
        } else {
            for(i=0; i<arraypiecesB.length; i++) {
                if((arraypiecesB[i].x == x1 && arraypiecesB[i].y == y1) || (arraypiecesA[i].x == x1 && arraypiecesA[i].y == y1)) {
                    return [false]
                }
            }
            if(dist(x1, y1, x2, y2) < 2) {
                if((Object.getPrototypeOf(selectedpiece).constructor.name == "pieceA" && y1 > y2) 
                || (Object.getPrototypeOf(selectedpiece).constructor.name == "pieceB" && y1 < y2)
                ) {
                    return [true]
                }
            } else {
                if(dist(x1, y1, x2, y2) <= 2 && (y2 == 1 || y2 == 6)) {
                    return [true]
                } else {
                    return [false]
                }
            }
        }
        case 'Bishop'://fou ==> finis
        IsAPieceOnTheWay(x1, y1, x2, y2, type)
        for(i=1; i<9; i++){
            if( x1 == x2+i && y1 == y2 +i
                ||
                x1 == x2-i && y1 == y2 - i
                ||
                x1 == x2+i && y1 == y2 -i
                ||
                x1 == x2-i && y1 == y2 + i
                ) {
                    return [true]
                }
            }
            return [false]
            
        case 'Rook'://tour ==> finis
            IsAPieceOnTheWay(x1, y1, x2, y2, type)
            if(x1 == x2 || y1 == y2) {
                return [true]
            } else {
                return [false]
            }
        case 'Knight'://cavalier ==> finis
            if((x1 == x2+2 && (y1 == y2+1 || y1 == y2-1))
            || 
            (x1 == x2-2 && (y1 == y2+1 || y1 == y2-1))
            ||
            (y1 == y2+2 && (x1 == x2+1 || x1 == x2-1))
            || 
            (y1 == y2-2 && (x1 == x2+1 || x1 == x2-1))
            ) {
                return [true]
            } else {
                return [false]
            }
        case 'King'://roi ==> finis
            IsAPieceOnTheWay(x1, y1, x2, y2, type)
            if(dist(x1, y1, x2, y2) == 1 || (x1 == x2+1 || x1 == x2-1) 
            && (y1 == y2+1 || y1 == y2-1)) {
                return [true]
            } else {
                return [false]
            }
        case 'Queen'://reine ==> manque les diagos
            IsAPieceOnTheWay(x1, y1, x2, y2, type)
            if(x1 == x2 || y1 == y2) {
                return [true]
            } else {
                for(i=1; i<9; i++){
                    if( x1 == x2+i && y1 == y2 +i
                        ||
                        x1 == x2-i && y1 == y2 - i
                        ||
                        x1 == x2+i && y1 == y2 -i
                        ||
                        x1 == x2-i && y1 == y2 + i
                        ) {
                            return [true]
                        }
                    }
                    return [false]
            }
        default:
            return [false]
    }
}
        
function IsAPieceOnTheWay(x1, y1, x2, y2, type) {
    switch(type) {
        case 'Bishop':
            bishop(x1, y1, x2, y2)
        break
        case 'Rook':
            rook(x1, y1, x2, y2)
        break
        case 'King':
            king(x1, y1, x2, y2)
        break
        case 'Queen':
            queen(x1, y1, x2, y2)
        break
        
    }
    return [true]
}

function IsAPieceHere(x, y) {
    for(i=0; i<arraypiecesA.length; i++){
        if(arraypiecesB[i].x == x && arraypiecesB[i].y == y){
            return [true, arraypiecesB[i].side]
        } else if(arraypiecesA[i].x == x && arraypiecesA[i].y == y){
            return [true, arraypiecesA[i].side]
        }
    } return [false, null]
}

function NotYourTurn() {
    var h1 = document.getElementById('texth1')
    h1.innerHTML = "Ce n'est pas à toi de jouer"
    setTimeout(() => {
        var h1 = document.getElementById('texth1')
        h1.innerHTML = `Joueur : ${turn}`
    }, 1000)
}