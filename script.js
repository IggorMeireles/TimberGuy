//
// [Elements]
//

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const sprites = new Image();
sprites.src = './sprites.png';
const fundo = new Image();
fundo.src = './fundo.png';
const startScreen = new Image();
startScreen.src = './startScreen.png';
const letreiroInicio = new Image();
letreiroInicio.src = './letreiroInicio.png';

let alturaTronco = 268;

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

const timberGuyLeftAttack = {
    spriteX: 0,
    spriteY: 110,
    largura: 94,
    altura: 76,
    x: 39,
    y: 405,
    desenha() {
        ctx.drawImage(
            sprites,
            timberGuyLeftAttack.spriteX, timberGuyLeftAttack.spriteY,
            timberGuyLeftAttack.largura, timberGuyLeftAttack.altura,
            timberGuyLeftAttack.x, timberGuyLeftAttack.y,
            timberGuyLeftAttack.largura, timberGuyLeftAttack.altura,
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

const timberGuyRightAttack = {
    spriteX: 107,
    spriteY: 110,
    largura: 94,
    altura: 76,
    x: 190,
    y: 405,
    desenha() {
        ctx.drawImage(
            sprites,
            timberGuyRightAttack.spriteX, timberGuyRightAttack.spriteY,
            timberGuyRightAttack.largura, timberGuyRightAttack.altura,
            timberGuyRightAttack.x, timberGuyRightAttack.y,
            timberGuyRightAttack.largura, timberGuyRightAttack.altura,
        );
    }
};

const tree = {
    spriteX: 0,
    spriteY: 254,
    largura: 73,
    altura: 53,
    x: 123,
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
    x: 123,
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
    x: 123,
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

const treeBranchLeft = {
    spriteX: 0,
    spriteY: 404,
    largura: 167,
    altura: 60,
    x: 29,
    y: alturaTronco,
    desenha() {
        ctx.drawImage(
            sprites,
            treeBranchLeft.spriteX, treeBranchLeft.spriteY,
            treeBranchLeft.largura, treeBranchLeft.altura,
            treeBranchLeft.x, treeBranchLeft.y,
            treeBranchLeft.largura, 53,
        );
        alturaTronco = alturaTronco - 53;
    }
};

const treeBranchRight = {
    spriteX: 0,
    spriteY: 319,
    largura: 167,
    altura: 60,
    x: 123,
    y: alturaTronco,
    desenha() {
        ctx.drawImage(
            sprites,
            treeBranchRight.spriteX, treeBranchRight.spriteY,
            treeBranchRight.largura, treeBranchRight.altura,
            treeBranchRight.x, treeBranchRight.y,
            treeBranchRight.largura, 53,
        );
        alturaTronco = alturaTronco - 53;
    }
};

const backgroundImage = {
    spriteX: 771,
    spriteY: 55,
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

const getReady = {
    spriteX: 0,
    spriteY: 1,
    largura: 366,
    altura: 527,
    x: 40,
    y: 0,
    desenha() {
        ctx.drawImage(
            startScreen,
            getReady.spriteX, getReady.spriteY,
            getReady.largura, getReady.altura,
            getReady.x, getReady.y,
            235, 330,
        );
    }
};

const letreiroCmc = {
    spriteX: 34,
    spriteY: 35,
    largura: 524,
    altura: 241,
    x: 47,
    y: 175,
    desenha() {                                                 //"aperte espaço para inciar"
        ctx.drawImage(
            letreiroInicio,
            letreiroCmc.spriteX, letreiroCmc.spriteY,
            letreiroCmc.largura, letreiroCmc.altura,
            letreiroCmc.x, letreiroCmc.y,
            221, 80,
        );
    }
};

const gameOverScreen = {
    spriteX: 170,
    spriteY: 266,
    largura: 148,
    altura: 214,
    x: 40,
    y: 0,
    desenha() {
        ctx.drawImage(
            sprites,
            gameOverScreen.spriteX, gameOverScreen.spriteY,
            gameOverScreen.largura, gameOverScreen.altura,
            gameOverScreen.x, gameOverScreen.y,
            235, 330,
        )
    }
};

//
// [TELAS]
//

let indexTela;
let telaMostrada = {};
let timberGuy = timberGuyLeft;

const mudaTela = (novaTela) => {
    telaMostrada = novaTela;                   // [Função para mudar de tela]
};

const telas = {
    INICIO: {
        desenha() {
            backgroundImage.desenha();
            tree.desenha();
            tree2.desenha();
            tree3.desenha();
            timberGuy.desenha();
            getReady.desenha();
            letreiroCmc.desenha();
            indexTela = 'telaInicio';
        }
    },

    JOGO: {
        desenha() {
            backgroundImage.desenha();
            timberGuy.desenha();
            indexTela = 'telaJogo';
            printTronco();
        }
    },

    GameOver: {
        desenha() {
            backgroundImage.desenha();
            timberGuy.desenha();
            printTronco();
            gameOverScreen.desenha();
        }
    }
};


//
//  [TRONCO]
//

const varTroncos = [0, 0, 0, 1, 1, 2, 2];
let troncoPick;
let troncos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let troncoDaVez;

const addTroncoInit = () => {
    for (let i = 2; i < troncos.length; i++) {
        let troncoRandom = Math.trunc(Math.random() * 10);
        if (troncoRandom < 3 && troncos[i - 1] == 0) {
            troncoPick = 1;
            troncos[i] = troncoPick;
        } else if (troncoRandom > 3 && troncoRandom < 6 && troncos[i - 1] == 0) {
            troncoPick = 2;
            troncos[i] = troncoPick;
        } else if (troncoRandom > 6) {
            troncoPick = 0;
            troncos[i] = troncoPick;
        };
    };
    console.log(troncos);
};

function desenhaTronco(foto, sx, sy, sw, sh, dx, dy, dw, dh) {
    ctx.drawImage(
        foto,
        sx, sy,
        sw, sh,
        dx, dy,
        dw, dh,
    )
};

const mudaTronco = () => {
    let troncoRandom = (troncos[troncos.length - 1] == 1 || troncos[troncos.length - 1] == 2) ? 0 :
        Math.floor(Math.random() * 3);
    for (let i = 0; i < troncos.length; i++) {
        if (i <= troncos.length - 2) {
            troncos[i] = troncos[i + 1];
        } else {
            troncos[i] = troncoRandom;
        }
    };
};

const printTronco = () => {
    let alturaTronco = 427;
    for (let i = 0; i < troncos.length; i++) {
        if (troncos[i] == 0) {
            desenhaTronco(sprites, 0, 254, 73, 53, 123, alturaTronco, 73, 53);
            alturaTronco = alturaTronco - 53;
        } else if (troncos[i] == 1) {
            desenhaTronco(sprites, 0, 405, 167, 59, 29, alturaTronco, 167, 53);
            alturaTronco = alturaTronco - 53;
        } else if (troncos[i] == 2) {
            desenhaTronco(sprites, 0, 319, 167, 60, 123, alturaTronco, 167, 53);
            alturaTronco = alturaTronco - 53;
        };
    };
};

//
// [COLISÃO]
//

const testaColisao = (position) => {
    if (position == 1) {
        if (troncos[1] == 1) {
            telaMostrada = telas.GameOver;
            indexTela = 'gameOver';
        } else if (troncos[0] == 1) {
            telaMostrada = telas.GameOver;
            indexTela = 'gameOver';
        }
    } else {
        if (troncos[1] == 2) {
            telaMostrada = telas.GameOver;
            indexTela = 'gameOver';
        } else if (troncos[0] == 2) {
            telaMostrada = telas.GameOver;
            indexTela = 'gameOver';
        }
    };
};

const loop = () => {
    telaMostrada.desenha();

    requestAnimationFrame(loop);
};

window.onload = () => {
    mudaTela(telas.INICIO);
    loop();

    //
    // [Event Listeners]
    //

    window.addEventListener('keydown', (e) => {
        if (indexTela == 'telaInicio') {
            if (e.code == 'Space') {
                mudaTela(telas.JOGO);
                addTroncoInit();
                printTronco();
            };
        };
        if (indexTela == 'telaJogo') {
            if (e.code == 'ArrowRight') {
                if (timberGuy == timberGuyLeft) {
                    timberGuy = timberGuyRightAttack;
                    setTimeout(() => {
                        timberGuy = timberGuyRight;
                    }, 100);
                } else if (timberGuy == timberGuyRight) {
                    timberGuy = timberGuyRightAttack;
                    setTimeout(() => {
                        timberGuy = timberGuyRight;
                    }, 100);
                };
                mudaTronco();
                testaColisao(2);
            };
            if (e.code == 'ArrowLeft') {
                if (timberGuy == timberGuyRight) {
                    timberGuy = timberGuyLeftAttack;
                    setTimeout(() => {
                        timberGuy = timberGuyLeft;
                    }, 100);
                } else if (timberGuy == timberGuyLeft) {
                    timberGuy = timberGuyLeftAttack;
                    setTimeout(() => {
                        timberGuy = timberGuyLeft;
                    }, 100);
                }
                mudaTronco();
                testaColisao(1);
            }
        };
        if (indexTela == 'gameOver') {
            if (e.code == 'Space') {
                mudaTela(telas.JOGO);
                troncos = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                timberGuy = timberGuyLeft;
                addTroncoInit();
                printTronco();
            };
        };
    });
};