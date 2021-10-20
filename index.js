

function superbowlWin(record) {
  console.log(record)  
const win = record.find(function(game){
    return game.result === "W"
})
return win ? win.year : undefined


}