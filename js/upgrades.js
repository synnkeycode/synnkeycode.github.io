var a_up = 0, p_up = 0, sic_up = 0, b_up = 0;// Upgrade level of tool
var w_up = 0, s_up = 0, whe_up = 0, m_up = 0;// Upgrade level of resourse

function upgradesCheck(){
    var elem = document.getElementById("axe_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(a_up == 0){
        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 1| <br> 10% faster cutting trees. <br> Price 10$";
    } else if(a_up == 1){
        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 2| <br> 15% faster cutting trees. <br> Price 50$";
        el[4].style.backgroundColor = "black";
    } else if(a_up == 2){
        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 3| <br> 20% faster cutting trees. <br> Price 100$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
    } else if(a_up == 3){
        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 4| <br> 25% faster cutting trees. <br> Price 500$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
    } else if(a_up == 4){
        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 5| <br> 50% faster cutting trees. <br> Price 1000$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(a_up == 5){
        document.getElementById("tooltip_axe_text").innerHTML = "Fully upgraded!";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }
    
    var elem = document.getElementById("pickaxe_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(p_up == 0){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 1| <br> 10% faster mining stones. <br> Price 10$";
    } else if(p_up == 1){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 2| <br> 15% faster mining stones. <br> Price 50$";
        el[4].style.backgroundColor = "black";
    } else if(p_up == 2){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 3| <br> 20% faster mining stones. <br> Price 100$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
    } else if(p_up == 3){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 4| <br> 25% faster mining stones. <br> Price 500$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
    } else if(p_up == 4){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 5| <br> 50% faster mining stones. <br> Price 1000$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(p_up == 5){
        document.getElementById("tooltip_pickaxe_text").innerHTML = "Fully upgraded!";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }

    var elem = document.getElementById("sickle_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(sic_up == 0){
        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 1| <br> 10% faster growing wheat. <br> Price 10$";
    } else if(sic_up == 1){
        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 2| <br> 15% faster growing wheat. <br> Price 50$";
        el[4].style.backgroundColor = "black";
    } else if(sic_up == 2){
        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 3| <br> 20% faster growing wheat. <br> Price 100$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
    } else if(sic_up == 3){
        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 4| <br> 25% faster growing wheat. <br> Price 500$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
    } else if(sic_up == 4){
        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 5| <br> 50% faster growing wheat. <br> Price 1000$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(sic_up == 5){
        document.getElementById("tooltip_sickle_text").innerHTML = "Fully upgraded!";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }

    var elem = document.getElementById("bow_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(b_up == 0){
        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 1| <br> 10% faster hunting. <br> Price 10$";
    } else if(b_up == 1){
        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 2| <br> 15% faster hunting. <br> Price 50$";
        el[4].style.backgroundColor = "black";
    } else if(b_up == 2){
        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 3| <br> 20% faster hunting. <br> Price 100$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
    } else if(b_up == 3){
        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 4| <br> 25% faster hunting. <br> Price 500$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
    } else if(b_up == 4){
        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 5| <br> 50% faster hunting. <br> Price 1000$";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(b_up == 5){
        document.getElementById("tooltip_bow_text").innerHTML = "Fully upgraded!";
        el[4].style.backgroundColor = "black";
        el[3].style.backgroundColor = "black";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }

    var elem = document.getElementById("wood_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(w_up == 0){
        document.getElementById("tooltip_wood_text").innerHTML = "|LEVEL 1| <br> +1 wood from cutting trees. <br> Price 200$";
    } else if(w_up == 1){
        document.getElementById("tooltip_wood_text").innerHTML = "|LEVEL 2| <br> +3 woods from cutting trees. <br> Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(w_up == 2){
        document.getElementById("tooltip_wood_text").innerHTML = "|LEVEL 3| <br> +5 woods from cutting trees. <br> Price 5000$";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(w_up == 3){
        document.getElementById("tooltip_wood_text").innerHTML = "Fully upgraded!";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }

    var elem = document.getElementById("stone_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(s_up == 0){
        document.getElementById("tooltip_stone_text").innerHTML = "|LEVEL 1| <br> +1 stone from mining stones. <br> Price 200$";
    } else if(s_up == 1){
        document.getElementById("tooltip_stone_text").innerHTML = "|LEVEL 2| <br> +3 stones from mining stones. <br> Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(s_up == 2){
        document.getElementById("tooltip_stone_text").innerHTML = "|LEVEL 3| <br> +5 stones from mining stones. <br> Price 5000$";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(s_up == 3){
        document.getElementById("tooltip_stone_text").innerHTML = "Fully upgraded!";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }

    var elem = document.getElementById("wheat_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(whe_up == 0){
        document.getElementById("tooltip_wheat_text").innerHTML = "|LEVEL 1| <br> +1 wheat from growing. <br> Price 200$";
    } else if(whe_up == 1){
        document.getElementById("tooltip_wheat_text").innerHTML = "|LEVEL 2| <br> +3 wheat from growing. <br> Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(whe_up == 2){
        document.getElementById("tooltip_wheat_text").innerHTML = "|LEVEL 3| <br> +5 wheat from growing. <br> Price 5000$";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
    } else if(whe_up == 3){
        document.getElementById("tooltip_wheat_text").innerHTML = "Fully upgraded!";
        el[2].style.backgroundColor = "black";
        el[1].style.backgroundColor = "black";
        el[0].style.backgroundColor = "black";
    }
}

function axeUpgrade() {
    var elem = document.getElementById("axe_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(a_up == 0 && money>=10){// Axe Upgrade 1 level
        a_up++;
        money-=10;

        axe_speed = 30/100*90;

        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 2| 15% faster cutting trees. Price 30$";
        el[4].style.backgroundColor = "black";
    } else if(a_up==1 && money>=50){// Axe Upgrade 2 level
        a_up++;
        money-=30;

        axe_speed = 30/100*85;

        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 3| 20% faster cutting trees. Price 50$";
        el[3].style.backgroundColor = "black";
    } else if(a_up==2 && money>=100){// Axe Upgrade 3 level
        a_up++;
        money-=100;

        axe_speed = 30/100*80;

        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 4| 25% faster cutting trees. Price 100$";
        el[2].style.backgroundColor = "black";
    } else if(a_up==3 && money>=500){// Axe Upgrade 4 level
        a_up++;
        money-=500;
        
        axe_speed = 30/100*75;

        document.getElementById("tooltip_axe_text").innerHTML = "|LEVEL 5| 50% faster cutting trees. Price 1000$";
        el[1].style.backgroundColor = "black";
    } else if(a_up==4 && money>=1000){// Axe Upgrade 5 level
        a_up++;
        money-=1000;

        axe_speed = 30/100*50;

        document.getElementById("tooltip_axe_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function pickaxeUpgrade() {
    var elem = document.getElementById("pickaxe_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(p_up == 0 && money>=10){// Pickaxe Upgrade 1 level
        p_up++;
        money-=10;

        pickaxe_speed = 50/100*90;

        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 2| 15% faster mining stones. Price 30$";
        el[4].style.backgroundColor = "black";
    } else if(p_up==1 && money>=50){// Pickaxe Upgrade 2 level
        p_up++;
        money-=30;

        pickaxe_speed = 50/100*85;

        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 3| 20% faster mining stones. Price 50$";
        el[3].style.backgroundColor = "black";
    } else if(p_up==2 && money>=100){// Pickaxe Upgrade 3 level
        p_up++;
        money-=100;

        pickaxe_speed = 50/100*80;

        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 4| 25% faster mining stones. Price 100$";
        el[2].style.backgroundColor = "black";
    } else if(p_up==3 && money>=500){// Pickaxe Upgrade 4 level
        p_up++;
        money-=500;

        pickaxe_speed = 50/100*75;

        document.getElementById("tooltip_pickaxe_text").innerHTML = "|LEVEL 5| 50% faster mining stones. Price 1000$";
        el[1].style.backgroundColor = "black";
    } else if(p_up==4 && money>=1000){// Pickaxe Upgrade 5 level
        p_up++;
        money-=1000;

        pickaxe_speed = 50/100*50;

        document.getElementById("tooltip_pickaxe_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function sickleUpgrade() {
    var elem = document.getElementById("sickle_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(sic_up == 0 && money>=10){// Sickle Upgrade 1 level
        sic_up++;
        money-=10;

        sickle_speed = 80/100*90;

        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 2| 15% faster growing wheat. Price 30$";
        el[4].style.backgroundColor = "black";
    } else if(sic_up==1 && money>=50){// Sickle Upgrade 2 level
        sic_up++;
        money-=30;

        sickle_speed = 80/100*85;

        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 3| 20% faster growing wheat. Price 50$";
        el[3].style.backgroundColor = "black";
    } else if(sic_up==2 && money>=100){// Sickle Upgrade 3 level
        sic_up++;
        money-=100;

        sickle_speed = 80/100*80;

        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 4| 25% faster growing wheat. Price 100$";
        el[2].style.backgroundColor = "black";
    } else if(sic_up==3 && money>=500){// Sickle Upgrade 4 level
        sic_up++;
        money-=500;

        sickle_speed = 80/100*75;

        document.getElementById("tooltip_sickle_text").innerHTML = "|LEVEL 5| 50% faster growing wheat. Price 1000$";
        el[1].style.backgroundColor = "black";
    } else if(sic_up==4 && money>=1000){// Sickle Upgrade 5 level
        sic_up++;
        money-=1000;

        sickle_speed = 80/100*50;

        document.getElementById("tooltip_sickle_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function bowUpgrade() {
    var elem = document.getElementById("bow_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(b_up == 0 && money>=10){// Knife Upgrade 1 level
        b_up++;
        money-=10;

        bow_speed = 100/100*90;

        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 2| 15% faster hunting. Price 30$";
        el[4].style.backgroundColor = "black";
    } else if(b_up==1 && money>=50){// Knife Upgrade 2 level
        b_up++;
        money-=30;

        bow_speed = 100/100*85;

        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 3| 20% faster hunting. Price 50$";
        el[3].style.backgroundColor = "black";
    } else if(b_up==2 && money>=100){// Knife Upgrade 3 level
        b_up++;
        money-=100;

        bow_speed = 100/100*80;

        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 4| 25% faster hunting. Price 100$";
        el[2].style.backgroundColor = "black";
    } else if(b_up==3 && money>=500){// Knife Upgrade 4 level
        b_up++;
        money-=500;

        bow_speed = 100/100*75;

        document.getElementById("tooltip_bow_text").innerHTML = "|LEVEL 5| 50% faster hunting. Price 1000$";
        el[1].style.backgroundColor = "black";
    } else if(b_up==4 && money>=1000){// Knife Upgrade 5 level
        b_up++;
        money-=1000;

        bow_speed = 100/100*50;

        document.getElementById("tooltip_bow_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function woodUpgrade() {
    var elem = document.getElementById("wood_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(w_up == 0 && money>=200){// Wood Upgrade 1 level
        w_up++;
        money-=200;

        wood_per_click+=1;

        document.getElementById("tooltip_wood_text").innerHTML = "|LEVEL 2| <br> +3 stones from mining stones. Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(w_up==1 && money>=1000){// Wood Upgrade 2 level
        w_up++;
        money-=1000;

        wood_per_click+=3;

        document.getElementById("tooltip_wood_text").innerHTML = "|LEVEL 3| <br> +5 stones from mining stones. Price 5000$";
        el[1].style.backgroundColor = "black";
    } else if(w_up==2 && money>=5000){// Wood Upgrade 3 level
        w_up++;
        money-=5000;

        wood_per_click+=5;

        document.getElementById("tooltip_wood_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function stoneUpgrade() {
    var elem = document.getElementById("stone_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(s_up == 0 && money>=200){// Stone Upgrade 1 level
        s_up++;
        money-=200;

        stone_per_click+=1;

        document.getElementById("tooltip_stone_text").innerHTML = "|LEVEL 2| <br> +3 stones from mining stones. Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(s_up==1 && money>=1000){// Stone Upgrade 2 level
        s_up++;
        money-=1000;

        stone_per_click+=3;

        document.getElementById("tooltip_stone_text").innerHTML = "|LEVEL 3| <br> +5 stones from mining stones. Price 5000$";
        el[1].style.backgroundColor = "black";
    } else if(s_up==2 && money>=5000){// Stone Upgrade 3 level
        s_up++;
        money-=5000;

        stone_per_click+=5;

        document.getElementById("tooltip_stone_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}

function wheatUpgrade() {
    var elem = document.getElementById("wheat_upgrade_level");
    var el = elem.querySelectorAll("hr");
    if(whe_up == 0 && money>=200){// Wheat Upgrade 1 level
        whe_up++;
        money-=200;

        wheat_per_click+=1;

        document.getElementById("tooltip_wheat_text").innerHTML = "|LEVEL 2| <br> +3 wheat from growing. Price 1000$";
        el[2].style.backgroundColor = "black";
    } else if(whe_up==1 && money>=1000){// Wheat Upgrade 2 level
        whe_up++;
        money-=1000;

        wheat_per_click+=3;

        document.getElementById("tooltip_wheat_text").innerHTML = "|LEVEL 3| <br> +5 wheat from growing. Price 5000$";
        el[1].style.backgroundColor = "black";
    } else if(whe_up==2 && money>=5000){// Wheat Upgrade 3 level
        whe_up++;
        money-=5000;

        wheat_per_click+=5;

        document.getElementById("tooltip_wheat_text").innerHTML = "Fully upgraded!";
        el[0].style.backgroundColor = "black";
    }
    updateVar();
}