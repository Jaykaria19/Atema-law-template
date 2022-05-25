$('.items').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '.previous_arrow',
    nextArrow: '.next_arrow',
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
        }
    }]
  });
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.previous_arrow_services',
    nextArrow: '.next_arrow_services',
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
        }
    }]
  });

  $('.clients').slick({
    speed: 300,
    slidesToShow: 1,
    prevArrow: '.previous_arrow_testimonal',
    nextArrow: '.next_arrow_testimonal',
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
        }
    }]
  });
  $('.recent').slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '.previous_arrow_news',
    nextArrow: '.next_arrow_news',
    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToShow: 1,
        }
    }]
  });