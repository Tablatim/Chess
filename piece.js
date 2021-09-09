var selectedpiece = null;

function pieceA(x, y, type, name) {
    this.side = 'A'
    this.x = x
    this.y = y
    this.name = name
    this.type = type
    this.show = function() {
        this.vector = createVector(x, y);
        this.vector.mult(scl);
        fill(0, 0, 0);
        rectA = rect(this.vector.x, this.vector.y, scl, scl, 100, 100)
        fill(255, 255, 255);
        text(name, this.vector.x+20,this.vector.y+35, scl, scl)
    }

    this.goTo = function(x, y) {
        this.x = x
        this.y = y
        update()
    }

    this.select = function() {
        selectedpiece = this
        this.vector = createVector(x, y);
        this.vector.mult(scl);
        fill(0, 0, 255);
        rectA = rect(this.vector.x, this.vector.y, scl, scl, 100, 100)
        fill(255, 255, 255);
        text(name, this.vector.x+20,this.vector.y+35, scl, scl)
    }
}

function pieceB(x, y, type, name) {
    this.side = 'B'
    this.x = x
    this.y = y
    this.name = name
    this.type = type
    this.show = function() {
        this.vector = createVector(x, y);
        this.vector.mult(scl);
        fill(255, 255, 255);
        rectB = rect(this.vector.x, this.vector.y, scl, scl, 100, 100)
        fill(0, 0, 0);
        text(name, this.vector.x+20,this.vector.y+35, scl, scl)
    }

    this.goTo = function(x, y) {
        this.x = x
        this.y = y
        update()
    }

    this.select = function() {
        selectedpiece = this
        this.vector = createVector(this.x, this.y);
        this.vector.mult(scl);
        fill(255, 255, 0);
        rectB = rect(this.vector.x, this.vector.y, scl, scl, 100, 100)
        fill(0, 0, 0);
        text(name, this.vector.x+20,this.vector.y+35, scl, scl)
    }
}