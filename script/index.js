window.addEventListener("load", () => {
  const assets = document.querySelector("#assets");
  const marker = document.querySelector("a-marker");
  const markerChildren = Array.from(marker.children);

  const likeSets = Array.from(assets.querySelectorAll("#likes > li")).map(
    (_, i) => {
      const likeContents = document.querySelectorAll("#like > section");
      const like = document.createElement("a-plane");
      like.setAttribute("height", "0.7");
      like.setAttribute("width", "0.7");
      like.setAttribute(
        "material",
        `shader: html;
       target: #likes > li:nth-child(${i + 1});
       fps: 0;`
      );
      like.setAttribute("rotation", "-90 0 0");
      like.setAttribute("position", `${0.8 * i} 0 2.5`);
      marker.appendChild(like);
      return { like, likeContent: likeContents[i] };
    }
  );

  marker.addEventListener("click", event => {
    const { intersectedEl } = event.detail;
    console.log(event.detail);
    if (likeSets.some(({ like }) => like === intersectedEl))
      likeSets.forEach(({ like, likeContent }) => {
        if (like === intersectedEl) {
          likeContent.classList.add("show");
        } else {
          likeContent.classList.remove("show");
        }
      });
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
