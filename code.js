var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","76944a2c-95ba-4af5-966b-4ad1244e473c","b5a9403a-ee87-4163-9185-c419424f30df","f9287449-b72f-4840-9aef-d20473089859","758a10fb-1f51-401b-ad24-59664c2d9555","2e934d96-7e40-4274-bdcb-c3e2c87e3420","4b52cf03-4849-4f4f-847f-2be2c6763ed6"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"E9KpjcOvBei0GQPqG3Thg2o5UNOE20HS","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"eUe4xel9hQubrFd1SlpBYozXQfaOLONV","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"AfautOFnCNrCy.R41BrHgwfOqZY5gLmJ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"76944a2c-95ba-4af5-966b-4ad1244e473c":{"name":"macaco","sourceUrl":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png","frameSize":{"x":388,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5SugaoZ5M6VJKcg2W7nXI7eXymJXLCcu/category_animals/cuteanimals_monkey2.png"},"b5a9403a-ee87-4163-9185-c419424f30df":{"name":"fundo","sourceUrl":"assets/api/v1/animation-library/gamelab/NjoRr_EHgRkswlCOr2UcPOx6bPfCJfdP/category_backgrounds/texture_11.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"NjoRr_EHgRkswlCOr2UcPOx6bPfCJfdP","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NjoRr_EHgRkswlCOr2UcPOx6bPfCJfdP/category_backgrounds/texture_11.png"},"f9287449-b72f-4840-9aef-d20473089859":{"name":"banana","sourceUrl":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png","frameSize":{"x":382,"y":310},"frameCount":1,"looping":true,"frameDelay":2,"version":"WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":310},"rootRelativePath":"assets/api/v1/animation-library/gamelab/WoWnacFDWgYbNwCuE39tGAGl8BwHkEsk/category_food/banana_1.png"},"758a10fb-1f51-401b-ad24-59664c2d9555":{"name":"queijo","sourceUrl":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png","frameSize":{"x":379,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"BnRZRFpznzKZ.5IPc97zl99rHJyU2geK","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":379,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/BnRZRFpznzKZ.5IPc97zl99rHJyU2geK/category_food/cheese.png"},"2e934d96-7e40-4274-bdcb-c3e2c87e3420":{"name":"coco","sourceUrl":"assets/api/v1/animation-library/gamelab/vO0j0n0KMTxczpxYTh8sHxJK3FTl6NQC/category_food/coconut.png","frameSize":{"x":377,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"vO0j0n0KMTxczpxYTh8sHxJK3FTl6NQC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":377,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/vO0j0n0KMTxczpxYTh8sHxJK3FTl6NQC/category_food/coconut.png"},"4b52cf03-4849-4f4f-847f-2be2c6763ed6":{"name":"brocolis","sourceUrl":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png","frameSize":{"x":383,"y":389},"frameCount":1,"looping":true,"frameDelay":2,"version":"e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":383,"y":389},"rootRelativePath":"assets/api/v1/animation-library/gamelab/e4t2131GhOPE0EZqR7PqCOVsZ98kAxrr/category_food/broccoli.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
 b.setAnimation("fundo")
var hero = createSprite(200,345,200,345)
hero.shapeColor="red"

var enemy1 = createSprite(200,250,10,10)
enemy1.shapeColor="red"

var enemy2 = createSprite(200,150,10,10)
enemy2.shapeColor="red"

var enemy3 = createSprite(200,50,10,10)
enemy3.shapeColor="red"

var net = createSprite(200,10,200,20)
net.shapeColor="red"

var goal =0;
var death = 0

hero.setAnimation("macaco");
hero.scale=.1;
enemy1.setAnimation("coco");
enemy1.scale=.1;
enemy2.setAnimation("queijo");
enemy2.scale=.1;
enemy3.setAnimation("brocolis");
enemy3.scale=.1;
net.setAnimation("banana")
net.scale =.2

enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
  
//plano de fundo(b);

createEdgeSprites()




enemy1.bounceOff(edges)
enemy2.bounceOff(edges)
enemy3.bounceOff(edges)

if(keyDown(UP_ARROW)){
  hero.y=hero.y-3
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+3
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-3
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+3
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)){
  playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3")
  hero.x=200
  hero.y=350
  death = death+1
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
  hero.x=200
  hero.y=345
  goal=goal+1
}
textSize(20)
  fill("blue")
  text("Objetivos:"+goal,320,350);
  

textSize(20)
  fill("blue")
  text("mortes:"+death,20,350);
  
drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
