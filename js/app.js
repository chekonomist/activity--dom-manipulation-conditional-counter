document
  .querySelector('.btn-increment')
  .addEventListener('click', function increaseCount(evt){
    // YOUR CODE for INCREMENT BTN HERE
    var totalCountsEl = document.querySelector('.total-counts')
    var clickCountNumStr = totalCountsEl.textContent
    var clickCountNum = parseInt(clickCountNumStr)

    if ( totalCountsEl.textContent < 11){
      totalCountsEl.textContent = clickCountNum + 1
    }

    if ( totalCountsEl.textContent >= 10) {
      totalCountsEl.textContent = 10
      alert('Max number is 10')
    }

  })


document
  .querySelector('.btn-decrement')
  .addEventListener('click', function decreaseCount(evt){
    // YOUR CODE for DECREMENT BTN HERE
    var totalCountsEl = document.querySelector('.total-counts')
    var clickCountNumStr = totalCountsEl.textContent
    var clickCountNum = parseInt(clickCountNumStr)

    if ( totalCountsEl.textContent < 11){
      totalCountsEl.textContent = clickCountNum - 1
    }

    if (totalCountsEl.textContent <= 0) {
      totalCountsEl.textContent = 0
      alert('Minimum number is 0')
    }
  })


/* ---- ADVENTURE MODE ---- */
/* Use only one Event Listener on the parent
    <div class="component">
 */

/* Uncommment....*/
// document
//   .querySelector('.component')
//   .addEventListener('click', function handleComponentClick(evt){
//     // YOUR CODE for ADVENTURE MODE
//
//   })
