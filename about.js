function detectMobileDevice(agent) {
    const mobileRegex = [
      /Android/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ]
  
    return mobileRegex.some(mobile => agent.match(mobile))
}
  
const isMobile = detectMobileDevice(window.navigator.userAgent)

if (isMobile) {
    console.log('current device is mobile')
} else {
    console.log('current device is not mobile')

    document.addEventListener("DOMContentLoaded", function () {
        // Get all elements with the class 'middle1'
        var middle1Elements = document.querySelectorAll('.middle1');
    
        // Function to check if an element is in the viewport
        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        // Function to handle the scroll event
        function handleScroll() {
            middle1Elements.forEach(function (element) {
                if (isElementInViewport(element)) {
                    element.style.opacity = 1;
                    element.style.transform = 'translateY(0)';
                }
            });
        }
    
        // Add a scroll event listener to invoke the handleScroll function
        window.addEventListener('scroll', handleScroll);
    
        // Initial check on page load
        handleScroll();
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var imageContainer = document.getElementById("imageContainer");
    var mainImage = document.querySelector(".main img");
    var h2Element = document.querySelector(".main h2");

    // 최대 및 최소 확대 배율 설정
    var maxScale = 1.25; 
    var minScale = 1;
    
    // 이미지가 화면에 3/5 정도 들어왔을 때의 위치 설정
    var triggerPosition = imageContainer.offsetTop - window.innerHeight * 1 / 20;

    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;

        // 이미지가 화면에 3/5 정도 들어왔을 때 크기를 조절하는 효과 추가
        if (scrollPosition > triggerPosition) {
            var scaleValue = minScale + (scrollPosition - triggerPosition) / window.innerHeight;

            // 최대 및 최소 확대 배율 제한
            scaleValue = Math.max(minScale, Math.min(scaleValue, maxScale));

            mainImage.style.transform = "scale(" + scaleValue + ")";
            
            // h2 태그의 투명도 조절
            var opacityValue = (scrollPosition - triggerPosition) / window.innerHeight *1.2;
            
            // 최소 투명도 0으로 설정
            opacityValue = Math.max(0, opacityValue);

            h2Element.style.opacity = opacityValue;
        } else {
            mainImage.style.transform = "scale(" + minScale + ")";
            h2Element.style.opacity = 0;
        }
    });
});


