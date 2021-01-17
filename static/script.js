$(() => {
  let stickyTop = 0,
  scrollTarget = false;

  let timeline = $('.timeline__nav'),
  items = $('li', timeline),
  milestones = $('.timeline__section .milestone'),
  offsetTop = parseInt(timeline.css('top'));

  const TIMELINE_VALUES = {
    start: 190,
    step: 30 };


  $(window).resize(function () {
    timeline.removeClass('fixed');

    stickyTop = timeline.offset().top - offsetTop;

    $(window).trigger('scroll');
  }).trigger('resize');

  $(window).scroll(function () {
    if ($(window).scrollTop() > stickyTop) {
      timeline.addClass('fixed');
    } else {
      timeline.removeClass('fixed');
    }
  }).trigger('scroll');

  items.find('span').click(function () {
    let li = $(this).parent(),
    index = li.index(),
    milestone = milestones.eq(index);

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;

      let scrollTargetTop = milestone.offset().top - 80;

      $('html, body').animate({ scrollTop: scrollTargetTop }, {
        duration: 400,
        complete: function complete() {
          scrollTarget = false;
        } });

    }
  });

  $(window).scroll(function () {
    let viewLine = $(window).scrollTop() + $(window).height() / 3,
    active = -1;

    if (scrollTarget === false) {
      milestones.each(function () {
        if ($(this).offset().top - viewLine > 0) {
          return false;
        }

        active++;
      });
    } else {
      active = scrollTarget;
    }

    timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');

    items.filter('.active').removeClass('active');

    items.eq(active != -1 ? active : 0).addClass('active');
  }).trigger('scroll');
});

window.onload = function() {

  fetch(url, {
    method: 'POST',
    body: formData
  })
  .then((response) => {
      return response.json();
  }).then((data) => {
    console.log(data.age);
    GLOBAL_FLAG = 1;
    document.getElementsByClassName("req")[0].innerHTML = "<span>" + age[data.age].toString() + " — the age of" + target_age[data.age].toString() + ". Try again? </span> ";
    $(".req").fadeIn(600);
  })
  .catch(() => {})
};

