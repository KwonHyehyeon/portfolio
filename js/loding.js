function imagesProgress() {
  var $container = $("#progress"),
    $progressText = $container.find(".progress-text"),
    imgLoad = imagesLoaded("body"),
    imgTotal = imgLoad.images.length,
    imgLoaded = 0,
    current = 0,
    progressTimer = setInterval(updateProgress, 2000 / 60);

  imgLoad.on("progress", function () {
    imgLoaded++;
  });

  function updateProgress() {
    var target = (imgLoaded / imgTotal) * 100;

    current += (target - current) * 0.1;
    $progressText.text(Math.floor(current) + "%");

    if (current >= 100) {
      clearInterval(progressTimer);
      $container
        .animate({ opacity: "0" }, 1500, "easeInOutQuint")
        .animate({ top: "-100%" }, 1500);

      gsap.from(".sec1", {
        opacity: 1,
        x: "100%",
        duration: 0.5,
        delay: 1,
        stagger: 0.1,
        ease: "elastic.out(0.5, 0.5)",
      });
      gsap.from(".sec1-right", {
        opacity: 1,
        y: "100vh",
        duration: 0.5,
        delay: 2,
        stagger: 0.03,
        ease: "elastic.out(0.5, 0.5)",
      });
      gsap.from(".sec1-tit > h2", {
        opacity: 1,
        y: "-100vh",
        duration: 0.5,
        delay: 3,
        stagger: 0.03,
        ease: "elastic.out(0.5, 0.5)",
      });
      gsap.from(".about>img", {
        opacity: 1,
        // y: "-100vh",
        duration: 4,
        delay: 3,
        stagger: 0.03,
        ease: "elastic.out(0.5, 0.5)",
      });

      gsap.to(".gift", { bottom: 0, duration: 2, delay: 3.5 });
    }
    if (current > 99.9) {
      current = 100;
    }
  }
}

imagesProgress();
