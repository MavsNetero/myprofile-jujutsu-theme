$(document).ready(function () {
    let images = $('.single_gallery_item img').map(function () {
        return $(this).attr('src');
    }).get();

    let currentIndex = 0;

    // Zoom out on hover
    $('.single_gallery_item img').hover(
        function () {
            $(this).css('transform', 'scale(0.9)');
        },
        function () {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Open modal
    $('.portfolio-img').on('click', function (e) {
        e.preventDefault();
        currentIndex = $(this).closest('.single_gallery_item').data('index');
        openModal();
    });

    function openModal() {
        $('#modalImage').attr('src', images[currentIndex]);
        $('#imageModal').fadeIn();
        updateNavButtons();
    }

    // Close modal
    $('#closeModal').on('click', function () {
        $('#imageModal').fadeOut();
    });

    // Navigation buttons
    $('#prevImage').on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            openModal();
        }
    });

    $('#nextImage').on('click', function () {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            openModal();
        }
    });

    function updateNavButtons() {
        $('#prevImage').prop('disabled', currentIndex === 0);
        $('#nextImage').prop('disabled', currentIndex === images.length - 1);
    }
});
