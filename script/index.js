window.addEventListener("load", () => {
  const assets = document.querySelector("#assets");
  const marker = document.querySelector("a-marker");

  assets.querySelectorAll("#likes > li").forEach((_, i) => {
    const likeContents = document.querySelectorAll("#like > section");
    const like = document.createElement("a-plane");
    like.setAttribute("height", "0.5");
    like.setAttribute("width", "0.5");
    like.setAttribute(
      "material",
      `shader: html;
       target: #likes > li:nth-child(${i + 1});
       fps: 1;`
    );
    like.setAttribute("rotation", "-90 0 0");
    like.setAttribute("position", `${0.7 * i} 0 2.5`);
    like.addEventListener("click", () => {
      console.log("clicked", i);
      likeContents.forEach((likeContent, contentIndex) => {
        if (i === contentIndex) {
          likeContent.classList.add("show");
        } else {
          likeContent.classList.remove("show");
        }
      });
    });
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
