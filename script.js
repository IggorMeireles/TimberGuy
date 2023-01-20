//
// [Elements]
//

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const sprites = new Image();
sprites.src = './sprites.png';
const fundo = new Image();
fundo.src = './fundo.jpg';

//
// [Objetos]
//

const timberGuyLeft = {
    spriteX: 0,
    spriteY: 0,
    largura: 84,
    altura: 76,
    x: 39,
    y: 405,
    desenha() {
        ctx.drawImage(
            sprites,
            timberGuyLeft.spriteX, timberGuyLeft.spriteY,
            timberGuyLeft.largura, timberGuyLeft.altura,
            timberGuyLeft.x, timberGuyLeft.y,
            timberGuyLeft.largura, timberGuyLeft.altura,
        );
    }
};
  
const timberGuyRight = {
    spriteX: 117,
    spriteY: 0,
    largura: 84,
    altura: 76,
    x: 200,
    y: 405,
    desenha() {
        ctx.drawImage(
            sprites,
            timberGuyRight.spriteX, timberGuyRight.spriteY,
            timberGuyRight.largura, timberGuyRight.altura,
            timberGuyRight.x, timberGuyRight.y,
            timberGuyRight.largura, timberGuyRight.altura,
        );
    }
};

const tree = {
    spriteX: 0,
    spriteY: 254,
    largura: 73,
    altura: 53,
    x: 125,
    y: 427,
    desenha() {
        ctx.drawImage(
            sprites,
            tree.spriteX, tree.spriteY,
            tree.largura, tree.altura,
            tree.x, tree.y,
            tree.largura, tree.altura,
        );
    }
};

const tree2 = {
    spriteX: 0,
    spriteY: 254,
    largura: 73,
    altura: 53,
    x: 125,
    y: 374,
    desenha() {
        ctx.drawImage(
            sprites,
            tree2.spriteX, tree2.spriteY,
            tree2.largura, tree2.altura,
            tree2.x, tree2.y,
            tree2.largura, tree2.altura,
        );
    }
};

const tree3 = {
    spriteX: 0,
    spriteY: 254,
    largura: 73,
    altura: 53,
    x: 125,
    y: 321,
    desenha() {
        ctx.drawImage(
            sprites,
            tree3.spriteX, tree3.spriteY,
            tree3.largura, tree3.altura,
            tree3.x, tree3.y,
            tree3.largura, tree3.altura,
        );
    }
};

const backgroundImage = {
    spriteX: 140,
    spriteY: 120,
    largura: 320,
    altura: 480,
    x: 0,
    y: 0,
    desenha() {
        ctx.drawImage(
            fundo,
            backgroundImage.spriteX, backgroundImage.spriteY,
            backgroundImage.largura, backgroundImage.altura,
            backgroundImage.x, backgroundImage.y,
            backgroundImage.largura, backgroundImage.altura,
        );
    }
};

const loop = () => {
    backgroundImage.desenha();
    tree.desenha();
    tree2.desenha();
    tree3.desenha();
    timberGuyRight.desenha();
    timberGuyLeft.desenha();
    requestAnimationFrame(loop);
};


loop();