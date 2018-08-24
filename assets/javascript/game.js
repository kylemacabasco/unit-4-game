// Constant variables
let total = 0
let goal = Math.floor(Math.random() * 80) + 20
$('.total').text(total)
$('.goal').text(goal)

// Goes through each picture and creates a random number for each stone
for (let i = 1; i < 7; i++) {
    $('.stoneRow').append(`
    <div class="col-md-2">
        <img class="stone" id="${i}stone" data-stone =${Math.floor(Math.random() * 20) + 1} src="./assets/images/${i}stone.png" alt="${i}stone">
    </div>
         `)
}

// Adding the stone values everytime another stone is clicked
$('.stone').on('click', function () {
    let stoneValue = $(this).attr('data-stone')
    total += parseInt(stoneValue)
    $('.total').text(total)
    gameStatus()
})

// game status for win/lose
function gameStatus() {
    if (goal === total) {
        $('#message').text('Congratulations! You Defeated Thanos!')
        setTimeout(function () {
            $('#message').text('Click on the stones to defeat Thanos by reaching the goal!')
            reset()
        }, 1000)
    } else if (total > goal) {
        $('#message').text('Sorry, you are dead!')
        setTimeout(function () {
            $('#message').text('Click on the stones to defeat Thanos by reaching the goal!')
            reset()
        }, 1000)
    }
}

//resetting back to the beginning
function reset() {
    $('#1stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    $('#2stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    $('#3stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    $('#4stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    $('#5stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    $('#6stone').attr('data-stone', Math.floor(Math.random() * 20) + 1)
    total = 0
    $('.total').text(total)
    goal = Math.floor(Math.random() * 80) + 20
    $('.goal').text(goal)
}