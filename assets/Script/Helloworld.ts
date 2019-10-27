const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Node)
    moveNode: cc.Node = null;

    onLoad() {
        cc.director.getPhysicsManager().gravity = cc.v2(0, -1);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 
            cc.PhysicsManager.DrawBits.e_aabbBit |
            cc.PhysicsManager.DrawBits.e_jointBit |
            cc.PhysicsManager.DrawBits.e_shapeBit;

        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event: cc.Event.EventMouse) => {
            this.moveNode.setPosition(this.node.convertToNodeSpaceAR(event.getLocation()));
        });
    }
}
