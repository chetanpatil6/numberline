$(function () {
  $("#number-range").slider({
    range: true,
    min: -5,
    max: 5,
    values: [-2, 2],
  });

  //this is for labels
  $("#amount").val(
    "$" +
      $("#number-range").slider("values", 0) +
      " - $" +
      $("#number-range").slider("values", 1)
  );

  for (let i = -5; i < 6; i++) {
    $(".label-container").append(
      ` <div class="label">
             <span></span>
             <label class="num">` +
        i +
        `</label>
           </div>`
    );
  }
});
