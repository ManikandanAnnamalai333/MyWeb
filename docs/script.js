$(document).ready(function() {
    
    // Navigation scroll effect
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Mobile menu toggle
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.nav-menu').toggleClass('active');
    });

    // Close mobile menu when clicking on a link
    $('.nav-link').click(function() {
        $('.hamburger').removeClass('active');
        $('.nav-menu').removeClass('active');
    });

    // Smooth scrolling for navigation links
    $('a[href^="#"], button[data-scroll]').click(function(e) {
        e.preventDefault();
        
        var target = $(this).attr('href') || $(this).data('scroll');
        if (target && $(target).length) {
            $('html, body').animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        }
    });

    // Scroll to top button
    $('#scrollTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Show/hide scroll to top button
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#scrollTop').fadeIn();
        } else {
            $('#scrollTop').fadeOut();
        }
    });

    // Hero title color animation
    let colorIndex = 0;
    const colors = ['#d97706', '#ea580c', '#dc2626'];
    
    setInterval(function() {
        $('.hero-highlight').css('color', colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
    }, 1000);

    // Floating animations for hero elements
    function createFloatingAnimation(element, duration, yOffset) {
        $(element).animate({
            marginTop: `-=${yOffset}px`
        }, duration, function() {
            $(element).animate({
                marginTop: `+=${yOffset}px`
            }, duration, function() {
                createFloatingAnimation(element, duration, yOffset);
            });
        });
    }

    // Start floating animations
    createFloatingAnimation('.floating-icon-1', 2500, 15);
    setTimeout(function() {
        createFloatingAnimation('.floating-icon-2', 3000, 10);
    }, 1000);

    // Product card hover effects
    $('.product-card').hover(
        function() {
            $(this).find('.product-image img').css('transform', 'scale(1.1)');
            $(this).find('.product-overlay').css('opacity', '1');
        },
        function() {
            $(this).find('.product-image img').css('transform', 'scale(1)');
            $(this).find('.product-overlay').css('opacity', '0');
        }
    );

    // Feature card icon rotation on hover
    $('.feature-card').hover(
        function() {
            $(this).find('.feature-icon').css('transform', 'rotate(360deg)');
        },
        function() {
            $(this).find('.feature-icon').css('transform', 'rotate(0deg)');
        }
    );

    // Contact form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        // Get form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };
        
        // Simulate form submission
        var $submitBtn = $(this).find('button[type="submit"]');
        var originalText = $submitBtn.html();
        
        $submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Sending...').prop('disabled', true);
        
        setTimeout(function() {
            $submitBtn.html('<i class="fas fa-check"></i> Message Sent!');
            $('#contactForm')[0].reset();
            
            setTimeout(function() {
                $submitBtn.html(originalText).prop('disabled', false);
            }, 2000);
        }, 1500);
        
        console.log('Form submitted:', formData);
    });

    // Newsletter subscription
    $('.newsletter-form').submit(function(e) {
        e.preventDefault();
        
        var email = $(this).find('input[type="email"]').val();
        var $submitBtn = $(this).find('button');
        var originalText = $submitBtn.text();
        
        $submitBtn.text('Subscribing...').prop('disabled', true);
        
        setTimeout(function() {
            $submitBtn.text('Subscribed!');
            
            setTimeout(function() {
                $submitBtn.text(originalText).prop('disabled', false);
            }, 2000);
        }, 1000);
        
        console.log('Newsletter subscription:', email);
    });

    // Animate numbers in stats section
    function animateNumbers() {
        $('.stat-number').each(function() {
            var $this = $(this);
            var target = parseInt($this.text().replace(/[^0-9]/g, ''));
            var prefix = $this.text().replace(/[0-9]/g, '');
            var suffix = $this.text().match(/[%+]/) ? $this.text().match(/[%+]/)[0] : '';
            
            $this.prop('Counter', 0).animate({
                Counter: target
            }, {
                duration: 2000,
                easing: 'swing',
                step: function(now) {
                    $this.text(prefix + Math.ceil(now) + suffix);
                }
            });
        });
    }

    // Intersection Observer for animations
    function createIntersectionObserver() {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('aos-animate');
                    
                    // Trigger number animation for stats
                    if ($(entry.target).hasClass('stat-item')) {
                        setTimeout(animateNumbers, 200);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements with animation attributes
        $('[data-aos]').each(function() {
            observer.observe(this);
        });

        // Observe stat items separately
        $('.stat-item').each(function() {
            observer.observe(this);
        });
    }

    // Initialize intersection observer
    createIntersectionObserver();

    // Add click effects to buttons
    $('.btn').on('mousedown', function() {
        $(this).css('transform', 'scale(0.95)');
    });

    $('.btn').on('mouseup mouseleave', function() {
        $(this).css('transform', '');
    });

    // Social media hover effects
    $('.social-icon').hover(
        function() {
            $(this).css({
                'transform': 'translateY(-5px) scale(1.1)',
                'box-shadow': '0 10px 25px rgba(0, 0, 0, 0.2)'
            });
        },
        function() {
            $(this).css({
                'transform': 'translateY(0) scale(1)',
                'box-shadow': '0 5px 15px rgba(0, 0, 0, 0.1)'
            });
        }
    );

    // Add parallax effect to floating circles
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        var rate = scrolled * -0.5;
        
        $('.floating-circle').each(function(index) {
            var speed = (index + 1) * 0.3;
            $(this).css('transform', 'translateY(' + (rate * speed) + 'px)');
        });
    });

    // Loading animation for images
    $('img').on('load', function() {
        $(this).addClass('loaded');
    });

    // Add loading states for images
    $('img').each(function() {
        if (this.complete) {
            $(this).addClass('loaded');
        }
    });

    // Contact item hover animation
    $('.contact-item').hover(
        function() {
            $(this).find('.contact-icon').css('transform', 'rotate(360deg)');
        },
        function() {
            $(this).find('.contact-icon').css('transform', 'rotate(0deg)');
        }
    );

    // Map pin pulse animation
    setInterval(function() {
        $('.map-pin').animate({
            opacity: 0.1,
            transform: 'translate(-50%, -50%) scale(1.4)'
        }, 1000, function() {
            $(this).css({
                opacity: 1,
                transform: 'translate(-50%, -50%) scale(1)'
            });
        });
    }, 2000);

    // Add to cart functionality
    $('.btn-small, .btn-icon').click(function(e) {
        e.preventDefault();
        
        var $btn = $(this);
        var originalText = $btn.html();
        
        // Find the product name
        var productName = $btn.closest('.product-card').find('h3').text() || 'Product';
        
        // Animation for add to cart
        $btn.html('<i class="fas fa-check"></i>').addClass('added');
        
        // Show feedback
        var $feedback = $('<div class="cart-feedback">Added to cart!</div>');
        $('body').append($feedback);
        
        $feedback.css({
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: '#16a34a',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '25px',
            zIndex: 9999,
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        setTimeout(function() {
            $feedback.css('transform', 'translateX(0)');
        }, 100);
        
        setTimeout(function() {
            $feedback.css('transform', 'translateX(100%)');
            setTimeout(function() {
                $feedback.remove();
            }, 300);
        }, 2000);
        
        // Reset button after animation
        setTimeout(function() {
            $btn.html(originalText).removeClass('added');
        }, 2000);
        
        console.log('Added to cart:', productName);
    });

    // Form input focus effects
    $('.form-group input, .form-group textarea').focus(function() {
        $(this).parent().addClass('focused');
    });

    $('.form-group input, .form-group textarea').blur(function() {
        if ($(this).val() === '') {
            $(this).parent().removeClass('focused');
        }
    });

    // Newsletter form
    $('.newsletter-form').on('submit', function(e) {
        e.preventDefault();
        
        var $input = $(this).find('input');
        var $btn = $(this).find('button');
        var email = $input.val();
        
        if (email && email.includes('@')) {
            var originalText = $btn.text();
            $btn.text('Subscribing...').prop('disabled', true);
            
            setTimeout(function() {
                $btn.text('Subscribed!').css('background', '#16a34a');
                $input.val('');
                
                setTimeout(function() {
                    $btn.text(originalText).css('background', '').prop('disabled', false);
                }, 3000);
            }, 1000);
        } else {
            $input.css('border-color', '#dc2626');
            setTimeout(function() {
                $input.css('border-color', '');
            }, 2000);
        }
    });

    // Typing effect for hero title
    function typeWriter(element, text, speed) {
        var i = 0;
        var $element = $(element);
        $element.text('');
        
        function type() {
            if (i < text.length) {
                $element.text($element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing effect for mobile
    if ($(window).width() <= 768) {
        setTimeout(function() {
            typeWriter('.hero-title', 'Fresh Homemade Flour', 100);
        }, 1000);
    }

    // Lazy loading for images
    function lazyLoad() {
        $('img[data-src]').each(function() {
            var $img = $(this);
            if (isElementInViewport($img[0])) {
                $img.attr('src', $img.data('src')).removeAttr('data-src');
            }
        });
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    $(window).scroll(lazyLoad);
    lazyLoad(); // Initial check

    // Add bounce effect to CTA buttons
    setInterval(function() {
        $('.hero-buttons .btn-primary').addClass('bounce');
        setTimeout(function() {
            $('.hero-buttons .btn-primary').removeClass('bounce');
        }, 600);
    }, 5000);

    // Custom cursor effect (optional)
    if ($(window).width() > 768) {
        var $cursor = $('<div class="custom-cursor"></div>');
        $('body').append($cursor);
        
        $cursor.css({
            position: 'fixed',
            width: '20px',
            height: '20px',
            background: '#d97706',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 10000,
            opacity: 0,
            transform: 'scale(0)',
            transition: 'transform 0.2s ease, opacity 0.2s ease'
        });

        $(document).mousemove(function(e) {
            $cursor.css({
                left: e.clientX - 10,
                top: e.clientY - 10,
                opacity: 1,
                transform: 'scale(1)'
            });
        });

        $('a, button').hover(
            function() {
                $cursor.css('transform', 'scale(1.5)');
            },
            function() {
                $cursor.css('transform', 'scale(1)');
            }
        );
    }

    console.log('Flour & More website loaded successfully!');
});

// Additional CSS classes for JavaScript animations
var additionalStyles = `
    <style>
        .bounce {
            animation: bounceEffect 0.6s ease !important;
        }
        
        @keyframes bounceEffect {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        
        .cart-feedback {
            font-weight: 600;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        .form-group.focused label {
            color: #d97706;
            transform: translateY(-2px);
        }
        
        .added {
            background: #16a34a !important;
        }
        
        img {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        img.loaded {
            opacity: 1;
        }
        
        .custom-cursor {
            mix-blend-mode: difference;
        }
        
        @media (max-width: 768px) {
            .custom-cursor {
                display: none;
            }
        }
    </style>
`;

$('head').append(additionalStyles);