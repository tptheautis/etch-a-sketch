const container = document.getElementById('container');
const div = document.createElement('div');
let i=1;

for (i = 1; i < 256; i ++) {
    container.append(div.cloneNode(true));
}


