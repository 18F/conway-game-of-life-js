
// THIS IS WRONG --- Your job is to fix it by counting the living neighbofs of this cell!
var CountNumberOfLiveNeighbors = function(current_gen,cell,length_x,length_y,x,y) {
   // Calculate above/below/left/right row/column values
    var alive_count = 0;
    return alive_count;
}


// THIS IS WRONG --- Your job is to fix it by applying the rules of Conway's gavme of life here!
// Return new_state for this cell...must be either the string "alive" or "dead"
var CellNextState = function(cell,alive_count) {

    // Set new state to current state, but it may change below
    var new_state = cell.getState();
    if (cell.getState() == "alive") {
    } else {
    }
    
// By ALWAYS returing "alive", I will fill the board---that will be Ugly, won't it?
    new_state = "alive"; 
    //console.log("Cell at x,y: " + x + "," + y + " has dead_count: " + dead_count + "and alive_count: " + alive_count);
    return new_state;
}

