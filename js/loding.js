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
        duration: 1,
        delay: 0.1,
        stagger: 0.1,
        // ease: "elastic.in(1, 1)",
      });
      gsap.to(".sec1", {
        opacity: 1,
        x: "0%",
        duration: 5,
        delay: 1,
        stagger: 0.1,
        ease: "elastic.out(0, 0.3)",
      });
      gsap.to(".sec1-right", {
        opacity: 1,
        y: "-100vh",
        duration: 0.2,
        delay: 2,
        stagger: 0.03,
      });
      gsap.from(".sec1-tit > h2", {
        opacity: 1,
        y: "-100vh",
        duration: 0.2,
        delay: 3,
        stagger: 0.03,
      });
      gsap.to(".sec1-tit > h2", {
        opacity: 1,
        duration: 0.2,
        delay: 3,
        stagger: 0.03,
      });
      gsap.to(".img-wrap .heart", { opacity: 1, duration: 0.5, delay: 3 });
      gsap.to(".img-wrap .monkey", { opacity: 1, duration: 0.5, delay: 3.4 });
      gsap.to(".img-wrap .duck", { opacity: 1, duration: 0.5, delay: 3.8 });
      gsap.to("#header", {
        top: 0,
        opacity: 1,
        duration: 2.5,
        delay: 2,
        ease: "circ.out",
      });
      gsap.to(".gift", { bottom: 0, duration: 2, delay: 3.5 });
    }
    if (current > 99.9) {
      current = 100;
    }
  }
}

imagesProgress();
