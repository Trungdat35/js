const thongBao = async () => {
  var imgElement = await document.getElementById("imgElement");
  imgElement.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTtb4yyUuall0h3P6abzoHgErmtJRYO1HwK60mbuMag&s"
  );
  var imgElement2 = await document.getElementById("imgElement2");
  imgElement2.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoTtb4yyUuall0h3P6abzoHgErmtJRYO1HwK60mbuMag&s"
  );
  imgElement.setAttribute("width", "200");
  imgElement.setAttribute("height", "150");
};
