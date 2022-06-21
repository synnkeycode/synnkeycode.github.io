function updateVar() {
    document.getElementById("money").innerHTML = money;

    document.getElementById("wood_value").innerHTML = wood_value;
    document.getElementById("stone_value").innerHTML = stone_value;
    document.getElementById("wheat_value").innerHTML = wheat_value;
    document.getElementById("meat_value").innerHTML = meat_value;

    document.getElementById("axe_speed").innerHTML = parseFloat(axe_speed/10).toFixed(1);
    document.getElementById("pickaxe_speed").innerHTML = parseFloat(pickaxe_speed/10).toFixed(1);
    document.getElementById("sickle_speed").innerHTML = parseFloat(sickle_speed/10).toFixed(1);
    document.getElementById("bow_speed").innerHTML = parseFloat(bow_speed/10).toFixed(1);

    document.getElementById("wood_per_click").innerHTML = wood_per_click+" per click";
    document.getElementById("stone_per_click").innerHTML = stone_per_click+" per click";
    document.getElementById("wheat_per_click").innerHTML = wheat_per_click+" per click";
    document.getElementById("meat_per_click").innerHTML = meat_per_click+" per click";
}
function startAnimation(text,img) {
    document.getElementById("popup_text").innerHTML = text+" ";
    document.getElementById("popup_img").src = img;
    document.getElementById("popup").classList.remove("popupanimation");
    document.getElementById("popup").offsetWidth;
    document.getElementById("popup").classList.add("popupanimation");
}