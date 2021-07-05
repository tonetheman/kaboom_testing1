
let k = null;

let cards_defs = [
    { name : "2c", loc : "assets/card_clubs_02.png"},
    { name : "3c", loc : "assets/card_clubs_03.png"},
    { name : "4c", loc : "assets/card_clubs_04.png"},
    { name : "5c", loc : "assets/card_clubs_05.png"},
    { name : "6c", loc : "assets/card_clubs_06.png"},
    { name : "7c", loc : "assets/card_clubs_07.png"},
    { name : "8c", loc : "assets/card_clubs_08.png"},
    { name : "9c", loc : "assets/card_clubs_09.png"},
    { name : "10c", loc : "assets/card_clubs_10.png"},
    { name : "ac", loc : "assets/card_clubs_A.png"},
    { name : "jc", loc : "assets/card_clubs_J.png"},
    { name : "qc", loc : "assets/card_clubs_Q.png"},
    { name : "kc", loc : "assets/card_clubs_K.png"},
];

function load_cards(k) {
    // not efficient dont care
    for (let i=0;i<cards_defs.length;i++) {
        k.loadSprite(cards_defs[i].name, cards_defs[i].loc);
    }
}

function main() {
    // make the kaboom object
    k = kaboom({
        width : 300,
        height : 300
    });

    // in phaser you would need a loading screen
    // kaboom seems to handle this for you

    // load up all of our assets
    load_cards(k);
        
    k.scene("game", () => {
        console.log("game started");

        // no real init or setup for a scene just start adding assets
        let player = k.add([
            k.sprite("2c"),
            k.pos(10,10),
            //k.body()
            {
                tony : 10
            }
        ]);
        console.log(player);

    });

    // start the game scene
    k.start("game");
}

// call main once the window is loaded
window.onload = main;