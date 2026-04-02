/* notes.js v1.0.0 | @alexho97 */

function convertType(prev_type, new_type) {
    const sharp_notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const flat_notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    
    const cell_list = Array.from({length: 12}, (_, i) => document.querySelector("#cell-" + (i + 1)));
    if (prev_type == "Sharp") {
        const nums = cell_list.map(cell => sharp_notes.findIndex(note => note == cell.textContent));
        
        if (new_type == "Flat") {
            const notes = Array.from(nums, n => flat_notes[n]);
            cell_list.map((cell, i) => cell.textContent = notes[i]);
        } else {
            cell_list.map((cell, i) => cell.textContent = nums[i]);
        }
    } else if (prev_type == "Flat") {
        const nums = cell_list.map(cell => flat_notes.findIndex(note => note == cell.textContent));
        
        if (new_type == "Sharp") {
            const notes = Array.from(nums, n => sharp_notes[n]);
            cell_list.map((cell, i) => cell.textContent = notes[i]);
        } else {
            cell_list.map((cell, i) => cell.textContent = nums[i]);
        }
    } else {
        const nums = cell_list.map(cell => cell.textContent);
        
        if (new_type == "Sharp") {
            const notes = Array.from(nums, n => sharp_notes[n]);
            cell_list.map((cell, i) => cell.textContent = notes[i]);
        } else {
            const notes = Array.from(nums, n => flat_notes[n]);
            cell_list.map((cell, i) => cell.textContent = notes[i]);
        }
    }
}

function setSharp() {
    const display_type = document.querySelector("#display-type").textContent
    if (display_type != "Sharp") {
        const prev_type = display_type;
        document.querySelector("#display-type").textContent = "Sharp";
        convertType(prev_type, "Sharp");
    }
}

function setFlat() {
    const display_type = document.querySelector("#display-type").textContent
    if (display_type != "Flat") {
        const prev_type = display_type;
        document.querySelector("#display-type").textContent = "Flat";
        convertType(prev_type, "Flat");
    }
}

function setNum() {
    const display_type = document.querySelector("#display-type").textContent
    if (display_type != "Num") {
        const prev_type = display_type;
        document.querySelector("#display-type").textContent = "Num";
        convertType(prev_type, "Num");
    }
}

$("#btn-sharp").click(setSharp);
$("#btn-flat").click(setFlat);
$("#btn-num").click(setNum);

/* row.js v1.0.0 | @hoal97 */

function shuffleArray(array) {
    // Fisher-Yates shuffle implementation from Wikipedia
    // https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateRow() {
    const sharp_notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
    const flat_notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
    const num_notes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const cell_list = Array.from({length: 12}, (_, i) => document.querySelector("#cell-" + (i + 1)));
    
    const rand_notes = shuffleArray(num_notes);
    const display_type = document.querySelector("#display-type").textContent;
    if (display_type == "Sharp") {
        const notes = Array.from(rand_notes, n => sharp_notes[n]);
        cell_list.map((cell, i) => cell.textContent = notes[i]);
    } else if (display_type == "Flat") {
        const notes = Array.from(rand_notes, n => flat_notes[n]);
        cell_list.map((cell, i) => cell.textContent = notes[i]);
    } else {
        cell_list.map((cell, i) => cell.textContent = rand_notes[i]);
    }
}

$("#btn-row").click(generateRow);

// Initial twelve tone row generation on load.
(function($) {
		generateRow();
})(jQuery);