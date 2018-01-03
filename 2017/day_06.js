(input => {
    'use strict';
    console.clear();

    const day6_1 = input => {
        let blocks = input.trim().replace(/\s\s?/g, ' ').split(' ').map(value => parseInt(value));
        let redistributions = 0;
        let blockMap = {};
        let blockKey, blockIndex, blockCount;

        while(true) {
            blockKey = blocks.join('');
            if (blockMap[blockKey]) return redistributions;

            blockMap[blockKey] = ++redistributions;
            blockIndex = blocks.indexOf(Math.max(...blocks));
            blockCount = blocks[blockIndex];
            blocks[blockIndex] = 0;
            for (let nextIndex = blockIndex; blockCount > 0; --blockCount) {
                ++blocks[++nextIndex > blocks.length - 1 ? (nextIndex = 0) : nextIndex];
            }
        }
    };
    console.log('reallocation 1:', day6_1(input));

    const day6_2 = input => {
        let blocks = input.trim().replace(/\s\s?/g, ' ').split(' ').map(value => parseInt(value));
        let redistributions = 0;
        let blockMap = {};
        let blockKey, blockIndex, blockCount;

        while(true) {
            blockKey = blocks.join('');
            if (blockMap[blockKey]) return redistributions - (blockMap[blockKey] - 1);

            blockMap[blockKey] = ++redistributions;
            blockIndex = blocks.indexOf(Math.max(...blocks));
            blockCount = blocks[blockIndex];
            blocks[blockIndex] = 0;
            for (let nextIndex = blockIndex; blockCount > 0; --blockCount) {
                ++blocks[++nextIndex > blocks.length - 1 ? (nextIndex = 0) : nextIndex];
            }
        }
    };
    console.log('reallocation 2:', day6_2(input));

})(`
    11	11	13	7	0	15	5	5	4	4	1	1	7	1	15	11
`);