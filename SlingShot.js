class SlingShot {
    constructor(bodyA, pointB) {
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length: 10
            }
            this.pointB = pointB
            this.sling = Constraint.create(options);
            World.add(world, this.sling);
        }
        // null= nothing,ditach the bird from the conectionto make it fly
    fly() {
        this.sling.bodyA = null
    }

    display() {
        // display the conection only when the bird position is available
        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}