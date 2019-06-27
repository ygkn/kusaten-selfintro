window.addEventListener("load", () => {
  const assets = document.querySelector("#assets");

  const marker = document.querySelector("a-marker");

  assets.querySelectorAll("#likes > li").forEach((_, i) => {
    const like = document.createElement("a-plane");
    like.setAttribute("height", "0.5");
    like.setAttribute("width", "0.5");
    like.setAttribute(
      "material",
      `shader: html;
       target: #likes > li:nth-child(${i + 1});
       fps: 0;`
    );
    like.setAttribute("rotation", "-90 0 0");
    like.setAttribute("position", `${1 + 0.7 * i} 0 2.5`);
    marker.appendChild(like);
  });

  marker.addEventListener("markerFound", () => {
    assets.classList.add("show");
    modal.classList.add("hidden");
  });
  marker.addEventListener("markerLost", () => {
    assets.classList.remove("show");
    modal.classList.remove("hidden");
  });
});
