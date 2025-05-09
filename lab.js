$(document).ready(function() {
    // 导航栏滚动效果
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $("#header").addClass("active-header");
        $(".nav-link a").addClass("active-menu-links");
      } else {
        $("#header").removeClass("active-header");
        $(".nav-link a").removeClass("active-menu-links");
      }
    });
    
    // 响应式导航菜单
    $("#responsive-nav-bar").hide();
    
    $("#image-button-black").click(function() {
      $("#responsive-nav-bar").slideToggle(300);
      $(this).find('i').toggleClass('fa-bars fa-times');
    });
    
    $(".nav-link").click(function() {
      if ($("#responsive-nav-bar").is(":visible")) {
        $("#responsive-nav-bar").slideUp(300);
        $("#image-button-black").find('i').removeClass('fa-times').addClass('fa-bars');
      }
    });
    
    // 平滑滚动到锚点
    $('a[href*="#"]').on('click', function(e) {
      e.preventDefault();
      
      $('html, body').animate(
        {
          scrollTop: $($(this).attr('href')).offset().top - 70
        },
        800, 
        'swing'
      );
    });
    
    // 项目卡片动画
    $("#feature").each(function(index) {
      $(this).css({
        'animation-delay': (index * 0.1) + 's'
      });
    });
    
    // 初始化项目卡片动画
    function animateFeatures() {
      $('#service-features #feature').each(function(i) {
        setTimeout(function() {
          $('#service-features #feature').eq(i).addClass('show');
        }, 150 * (i + 1));
      });
    }
    
    // 当滚动到特定部分时触发动画
    $(window).scroll(function() {
      var featuresTop = $('#features-container').offset().top - window.innerHeight;
      if ($(window).scrollTop() > featuresTop) {
        animateFeatures();
      }
    });
    
    // 当页面加载时，如果已经滚动到特定部分，则触发动画
    if ($(window).scrollTop() > $('#features-container').offset().top - window.innerHeight) {
      animateFeatures();
    }
    
    // 按钮悬停效果
    $('.product-button').hover(
      function() {
        $(this).find('i').css('transform', 'translateX(5px)');
      },
      function() {
        $(this).find('i').css('transform', 'translateX(0)');
      }
    );
    
    // 对同学作品按钮应用激活状态
    $('.product-button').click(function() {
      $('.product-button').removeClass('product-button-active');
      $(this).addClass('product-button-active');
    });
    
    // 给第一个同学作品按钮添加活跃状态
    $('#section-buttons .product-button:first-child').addClass('product-button-active');
  });