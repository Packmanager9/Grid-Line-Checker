
class Grid{
    constructor(){
        this.squares = []
        for(let t = 0;t<10;t++){
            let boxes = []
            for(let k = 0;k<10;k++){
                    boxes.push(new Rectangle(t,k,1,1,"red"))
            }
            this.squares.push(boxes)
        }
    }
    checkLine(line){
        let occupiedByLine = []
        for(let t = 0;t<this.boxes.length;t++){
            for(let k = 0;k<this.boxes[t].length;k++){
                let leftside = new Line(this.boxes[t][k].x, this.boxes[t][k].y, this.boxes[t][k].x, this.boxes[t][k].y+this.boxes[t][k].height)
                let bottomside = new Line(this.boxes[t][k].x, this.boxes[t][k].y+this.boxes[t][k].height, this.boxes[t][k].x+this.boxes[t][k].width, this.boxes[t][k].y+this.boxes[t][k].height)
                let topside = new Line(this.boxes[t][k].x+this.boxes[t][k].width, this.boxes[t][k].y, this.boxes[t][k].x, this.boxes[t][k].y)
                let rightside = new Line(this.boxes[t][k].x+this.boxes[t][k].width, this.boxes[t][k].y, this.boxes[t][k].x+this.boxes[t][k].width, this.boxes[t][k].y+this.boxes[t][k].height)
                if(line.lineIntersect(leftside)){
                    occupiedByLine.push(this.boxes[t][k])
                }else  if(line.lineIntersect(bottomside)){
                    occupiedByLine.push(this.boxes[t][k])
                }else if(line.lineIntersect(topside)){
                    occupiedByLine.push(this.boxes[t][k])
                }else  if(line.lineIntersect(rightside)){
                    occupiedByLine.push(this.boxes[t][k])
                }
            }
        }
    }
}

class Line {
    constructor(x, y, x2, y2,) {
        this.x1 = x
        this.y1 = y
        this.x2 = x2
        this.y2 = y2
    }
    lineIntersect(line) {
        var x=((this.x1*this.y2-this.y1*this.x2)*(line.x1-line.x2)-(this.x1-this.x2)*(line.x1*line.y2-line.y1*line.x2))/((this.x1-this.x2)*(line.y1-line.y2)-(this.y1-this.y2)*(line.x1-line.x2));
        var y=((this.x1*this.y2-this.y1*this.x2)*(line.y1-line.y2)-(this.y1-this.y2)*(line.x1*line.y2-line.y1*line.x2))/((this.x1-this.x2)*(line.y1-line.y2)-(this.y1-this.y2)*(line.x1-line.x2));
        if (isNaN(x)||isNaN(y)) {
            return false;
        } else {
            if (this.x1>=this.x2) {
                if (!(this.x2<=x&&x<=this.x1)) {return false;}
            } else {
                if (!(this.x1<=x&&x<=this.x2)) {return false;}
            }
            if (this.y1>=this.y2) {
                if (!(this.y2<=y&&y<=this.y1)) {return false;}
            } else {
                if (!(this.y1<=y&&y<=this.y2)) {return false;}
            }
            if (line.x1>=line.x2) {
                if (!(line.x2<=x&&x<=line.x1)) {return false;}
            } else {
                if (!(line.x1<=x&&x<=line.x2)) {return false;}
            }
            if (line.y1>=line.y2) {
                if (!(line.y2<=y&&y<=line.y1)) {return false;}
            } else {
                if (!(line.y1<=y&&y<=line.y2)) {return false;}
            }
        }
        return true;
    }
}