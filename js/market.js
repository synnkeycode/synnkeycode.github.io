function marketButton(id) {
    switch(id){
        case 'w_buy_1':
            if(money>=5){
                money-=5;
                wood_value++;
                startAnimation("+1","img/wood-icon.png");
            }
            break;
        case 'w_buy_10':
            if(money>=50){
                money-=50;
                wood_value+=10;
                startAnimation("+10","img/wood-icon.png");
            }
            break;
        case 'w_buy_100':
            if(money>=500){
                money-=500;
                wood_value+=100;
                startAnimation("+100","img/wood-icon.png");
            }
            break;
        case 'w_sell_1':
            if(wood_value>=1){
                money+=2;
                wood_value--;
                startAnimation("-1","img/wood-icon.png");
            }
            break;
        case 'w_sell_10':
            if(wood_value>=10){
                money+=20;
                wood_value-=10;
                startAnimation("-10","img/wood-icon.png");
            }
            break;
        case 'w_sell_100':
            if(wood_value>=100){
                money+=200;
                wood_value-=100;
                startAnimation("-100","img/wood-icon.png");
            }
            break;
        case 's_buy_1':
            if(money>=10){
                money-=10;
                stone_value++;
                startAnimation("+1","img/stone-icon.png");
            }
            break;
        case 's_buy_10':
            if(money>=100){
                money-=100;
                stone_value+=10;
                startAnimation("+10","img/stone-icon.png");
            }
            break;
        case 's_buy_100':
            if(money>=1000){
                money-=1000;
                stone_value+=100;
                startAnimation("+100","img/stone-icon.png");
            }
            break;
        case 's_sell_1':
            if(stone_value>=1){
                money+=3;
                stone_value--;
                startAnimation("-1","img/stone-icon.png");
            }
            break;
        case 's_sell_10':
            if(stone_value>=10){
                money+=30;
                stone_value-=10;
                startAnimation("-10","img/stone-icon.png");
            }
            break;
        case 's_sell_100':
            if(stone_value>=100){
                money+=300;
                stone_value-=100;
                startAnimation("-100","img/stone-icon.png");
            }
            break;
    }
    updateVar();
}