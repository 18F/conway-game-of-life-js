
var CountNumberOfLiveNeighbors = function(current_gen,cell,length_x,length_y,x,y) {
   // Calculate above/below/left/right row/column values
    var row_above = (y-1 >= 0) ? y-1 : length_y-1; // If current cell is on first row, cell "above" is the last row (stitched)
    var row_below = (y+1 <= length_y-1) ? y+1 : 0; // If current cell is in last row, then cell "below" is the first row
    var column_left = (x-1 >= 0) ? x-1 : length_x - 1; // If current cell is on first row, then left cell is the last row
    var column_right = (x+1 <= length_x-1) ? x+1 : 0; // If current cell is on last row, then right cell is in the first row

    var neighbours = {
        top_left: current_gen[row_above][column_left].clone(),
        top_center: current_gen[row_above][x].clone(),
        top_right: current_gen[row_above][column_right].clone(),
        left: current_gen[y][column_left].clone(),
        right: current_gen[y][column_right].clone(),
        bottom_left: current_gen[row_below][column_left].clone(),
        bottom_center: current_gen[row_below][x].clone(),
        bottom_right: current_gen[row_below][column_right].clone()
    };

    var alive_count = 0;
    for (var neighbour in neighbours) {
        if (neighbours[neighbour].getState() != "dead") {
            alive_count++;
        }
    }
    return alive_count;
}


// Return new_state for this cell...
var CellNextState = function(cell,alive_count) {

    // Set new state to current state, but it may change below
    var new_state = cell.getState();
    if (cell.getState() == "alive") {
        if (alive_count < 2 || alive_count > 3) {
            // new state: dead, overpopulation/ underpopulation
            new_state = "dead";
        } else if (alive_count === 2 || alive_count === 3) {
            // lives on to next generation
            new_state = "alive";
        }
    } else {
        if (alive_count === 3) {
            // new state: live, reproduction
            new_state = "alive";
        }
    }

    //console.log("Cell at x,y: " + x + "," + y + " has dead_count: " + dead_count + "and alive_count: " + alive_count);
    return new_state;
}

