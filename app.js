function assignGroups() {
    var numGroups = parseInt(document.getElementById('numGroups').value);
    var itemList = document.getElementById('itemList').value.split('\n').filter(item => item.trim() !== '');
    
    if (itemList.length === 0) {
        alert('Please enter items.');
        return;
    }

    var shuffledItems = shuffle(itemList);
    var groups = [];

    for (var i = 0; i < numGroups; i++) {
        groups.push([]);
    }

    for (var i = 0; i < shuffledItems.length; i++) {
        groups[i % numGroups].push(shuffledItems[i]);
    }

    var output = '';
    for (var j = 0; j < groups.length; j++) {
        output += '<strong>Group ' + (j + 1) + ':</strong><br>';
        output += groups[j].join('<br>');
        output += '<br><br>';
    }

    document.getElementById('output').innerHTML = output;
}

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
