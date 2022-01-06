function createData( key, position, shipType, dwt, salary, duration, joinDate, additionalInfo) {
    key += 1;
    return { key, position, shipType, dwt, salary, duration, joinDate, additionalInfo };
}

export const rows = [
    createData('1', '4th Engineer', 'Container', '1.512-9.178', '3640.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('2', '3rd Engineer', 'Container', '1.512-9.178', '4192.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('3', '2nd Engineer', 'Container', '1.512-14.000', '7015.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('4', 'Chief Engineer', 'Container', '1.512-9.178', '8966.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('5', '3rd Officer', 'Container', '1.512-9.178', '3860.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('6', '2nd Officer', 'Container', '1.512-14.000', '4192.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('7', 'Chief Officer', 'Container', '1.512-9.178', '7015.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('8', 'ETO', 'Container', '1.512-9.178', '5830.00 $', 4, '01/11/2021', 'Owner CPO'),
    createData('9', 'Cook', 'Container', '1.512-9.178', '1851.00 $', 4, '01/11/2021', 'Owner CPO, mixed crew'),
    createData('10', 'Captain', 'Container', '1.512-9.178', '9142.00 $', 4, '01/11/2021', 'Owner CPO'),
];