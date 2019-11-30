var color;
(function (color) {
    color[color["RED"] = 0] = "RED";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
console.log(color.RED);
