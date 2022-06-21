var f = 0, q = 0, wf = 0, p = 0;// Variable that stops progress bar to run several times
var money = 100000;// Players money
var wood_value = 0, stone_value = 0, wheat_value = 0, meat_value = 0;// Count of resourses that player have
var wood_per_click = 1, stone_per_click = 1, wheat_per_click = 1, meat_per_click = 1;// Resource gathering per one click
var axe_speed = 30, pickaxe_speed = 50, sickle_speed = 80, bow_speed = 100;// Resource gathering speed (10 = 1s)

function addWood() {
    if (f == 0) {
        f = 1;
        var elem = document.getElementById("myBarForest");
        var width = 0;
        var id = setInterval(frame, axe_speed);
        function frame() {
            if (width >= 100) {
                wood_value = document.getElementById("wood_value").innerText;
                wood_value = parseInt(wood_value) + wood_per_click;
                updateVar();
                startAnimation("+"+wood_per_click,"img/wood-icon.png");
                clearInterval(id);
                elem.style.width = 0 + "%";
                f = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function addStone() {
    if (q == 0) {
        q = 1;
        var elem = document.getElementById("myBarQuarry");
        var width = 0;
        var id = setInterval(frame, pickaxe_speed);
        function frame() {
            if (width >= 100) {
                stone_value = document.getElementById("stone_value").innerText;
                stone_value = parseInt(stone_value) + stone_per_click;
                updateVar();
                startAnimation("+"+stone_per_click,"img/stone-icon.png");
                clearInterval(id);
                elem.style.width = 0 + "%";
                q = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function addWheat() {
    if (wf == 0) {
        wf = 1;
        var elem = document.getElementById("myBarField");
        var width = 0;
        var id = setInterval(frame, sickle_speed);
        function frame() {
            if (width >= 100) {
                wheat_value = document.getElementById("wheat_value").innerText;
                wheat_value = parseInt(wheat_value) + wheat_per_click;
                updateVar();
                startAnimation("+"+wheat_per_click,"img/wheat-icon.png");
                clearInterval(id);
                elem.style.width = 0 + "%";
                wf = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function addMeat() {
    if (p == 0) {
        p = 1;
        var elem = document.getElementById("myBarPlain");
        var width = 0;
        var id = setInterval(frame, bow_speed);
        function frame() {
            if (width >= 100) {
                meat_value = document.getElementById("meat_value").innerText;
                meat_value = parseInt(meat_value) + meat_per_click;
                updateVar();
                startAnimation("+"+meat_per_click,"img/meat-icon.png");
                clearInterval(id);
                elem.style.width = 0 + "%";
                p = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function changeMain(id) {
    var element_remove = document.querySelectorAll("#sb_1, #sb_2, #sb_3, #sb_4");
    for (i = 0; i < element_remove.length; i++)
        element_remove[i].classList.remove("active");

    var element_add = document.getElementById(id);
    element_add.classList.add("active");

    if(id=="sb_1"){
        document.getElementById("main").innerHTML = document.getElementById("home").innerHTML;
    } else if(id=="sb_2"){
        document.getElementById("main").innerHTML = document.getElementById("inventory").innerHTML;
    } else if(id=="sb_3"){
        document.getElementById("main").innerHTML = document.getElementById("upgrades").innerHTML;
        upgradesCheck();
    } else if(id=="sb_4"){
        document.getElementById("main").innerHTML = document.getElementById("market").innerHTML;
    }
    updateVar();
}