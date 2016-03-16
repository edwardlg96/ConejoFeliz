
var HelloWorldLayer = cc.Layer.extend({
    sprFondo:null,
    sprConejo:null,
    sprBomba:null,
    sprZanahoria:null,
    ctor:function () {
        this._super();
        //Obteniendo el tamaño de la pantalla
        var size = cc.winSize;

        //posicionando la imagen de fondo
        this.sprFondo = new cc.Sprite(res.fondo_png);
        this.sprFondo.setPosition(size.width / 2,size.height / 2);
        this.addChild(this.sprFondo, 0);
        
        //posicionando la imagen de fondo
        this.sprConejo = new cc.Sprite(res.conejo_png);
        this.sprConejo.setPosition(size.width / 2,size.height * 0.15);
        this.addChild(this.sprConejo, 1);
        
        //posicionando las bombas
        this.sprBomba = new cc.Sprite(res.bomba_png);
        this.sprBomba.setPosition(size.width / 2,size.height * 0.8);
        this.addChild(this.sprBomba, 1);
        var bomba_action= cc.MoveTo.create(2, cc.p(50, 100));
        this.sprBomba.runAction(bomba_action);
        
        //posicionando las zanahorias
        this.sprZanahoria = new cc.Sprite(res.zanahoria_png);
        this.sprZanahoria.setPosition(size.width/2,size.height/2);
        this.addChild(this.sprZanahoria, 1);
        var zanahoria_action= cc.MoveTo.create(2, cc.p(50, 100));
        this.sprZanahoria.runAction(zanahoria_action);


        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

