(() => {
    'use strict';
    console.clear();

    const input = 312051;

    const day3_1 = input => {
        const spiral = (previousLevel, previousValue) => {
            const nextLevel = previousLevel + 1;
            let direction = ['n', 'w', 's', 'e'];
            let nextValue, x, y;

            for (let count = 1; count <= nextLevel * 8; ++count) {
                if (count === 1) {
                    x = nextLevel;
                    y = previousLevel;
                } else {
                    switch(direction[0]) {
                        case 'n':
                            y -= 1;
                            break;
                        case 's':
                            y += 1;
                            break;
                        case 'e':
                            x += 1;
                            break;
                        case 'w':
                            x -= 1;
                            break;
                    }
                }
                if (Math.abs(x) === nextLevel && Math.abs(y) === nextLevel) direction.shift();

                nextValue = previousValue + count;
                if (nextValue === input) return Math.abs(x) + Math.abs(y);
            };
            return spiral(nextLevel, nextValue);
        };
        return parseInt(input) > 1 ? spiral(0, 1) : 0;
    };
    console.log('spiral 1:', day3_1(input));

    const day3_2 = input => {
        const spiralMap = { '00': 1 };
        const mapKey = (x, y) => `${x}${y}`;
        const getMapValue = (x, y) => spiralMap[mapKey(x, y)] || 0;
        const setMapValue = (x, y) => (
            spiralMap[mapKey(x, y)] =
                getMapValue(x + 1, y) +
                getMapValue(x + 1, y - 1) +
                getMapValue(x, y - 1) +
                getMapValue(x - 1, y - 1) +
                getMapValue(x - 1, y) +
                getMapValue(x - 1, y + 1) +
                getMapValue(x, y + 1) +
                getMapValue(x + 1, y + 1)
        );

        const spiral = previousLevel => {
            const nextLevel = previousLevel + 1;
            let direction = ['n', 'w', 's', 'e'];
            let mapValue, x, y;

            for (let count = 1; count <= nextLevel * 8; ++count) {
                if (count === 1) {
                    x = nextLevel;
                    y = previousLevel;
                } else {
                    switch(direction[0]) {
                        case 'n':
                            y -= 1;
                            break;
                        case 's':
                            y += 1;
                            break;
                        case 'e':
                            x += 1;
                            break;
                        case 'w':
                            x -= 1;
                            break;
                    }
                }
                if (Math.abs(x) === nextLevel && Math.abs(y) === nextLevel) direction.shift();

                mapValue = setMapValue(x, y);
                if (mapValue > input) return mapValue;
            };
            return spiral(nextLevel);
        };
        return parseInt(input) > 0 ? spiral(0) : 0;
    };
    console.log('spiral 2:', day3_2(input));

})();