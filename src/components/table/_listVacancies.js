function createData( key, openPosition, position, shipType, dwt, salary, duration, joinDate, additionalInfo) {
    return { key, openPosition, position, shipType, dwt, salary, duration, joinDate, additionalInfo };
}

export const rows = [
    createData('1', '1','4th Engineer', 'Container', '1.512-9.178 TEU', '3640.00 $', '4 months', '01/11/2021', 'Owner CPO'),
    createData('2', '1', '3rd Engineer', 'Container', '1.512-9.178 TEU', '4192.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    createData('3', 'Permanently', '2nd Engineer', 'Container', '1.512-14.000 TEU', '7015.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('4', '1', 'Chief Engineer', 'Container', '1.512-9.178 TEU', '8966.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('5', '2', '3rd Officer', 'Container', '1.512-9.178 TEU', '3860.00 $', '4 months', '05/12/2021', 'Owner CPO'),
    // createData('6', '1', '2nd Officer', 'Container', '1.512-14.000 TEU', '4192.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('7', '1', 'Chief Officer', 'Container', '1.512-9.178 TEU', '7015.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('8', '2', 'ETO', 'Container', '1.512-9.178 TEU', '5830.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('9', '1', 'Cook', 'Container', '1.512-9.178 TEU', '1851.00 $', '4 months', '01/11/2021', 'Owner CPO, mixed crew'),
    // createData('10', '1', 'Captain', 'Container', '1.512-9.178 TEU', '9142.00 $', '4 months', '05/01/2022', 'Owner CPO'),
    // createData('11', '1', 'Chief Officer', 'Tanker', 'DW 36000', '11250.00 $', '', '05/01/2022', 'Boarding middle Feb 2022, Owner Seaborn (Ex CPO Tankers)'),
    // createData('12', '1', '2nd Officer', 'Tanker', 'DW 52000', '4950.00 $', '', '05/01/2022', 'Boarding end Feb 2022, Owner Seaborn (Ex CPO Tankers)'),
    // createData('13', '1', '2nd Officer', 'Tanker', '', '4650.00 $', '', '07/01/2022', 'Boarding end of Jan 2022, Alberta Shipmanagement'),
    // createData('14', '1', 'Captain', 'Tanker', 'DW 114578', '11800.00+ $', '', '05/01/2022', 'Boarding end of Jan 2022, Owner Samos Steamship'),
    // createData('15', '1', '2nd Officer', 'Tanker', '', '4650.00 $', '4 months', '07/01/2022', 'end of Jan 2022, Alberta Shipmanagement'),
    // createData('16', '1', 'OS', 'Tanker', '', '1520.00 $', '', '05/01/2022', 'Alberta Shipmanagement'),
    // createData('17', '1', 'Oiler', 'Tanker', '', '1810.00 $', '', '05/01/2022', 'Boarding beg Feb 2022, Alberta Shipmanagement'),
    // createData('18', '1', 'Chief Engineer', 'BC', 'DW 63000', '9000.00 $', 'COE 5 months', '05/01/2022', 'M/E MAN B&W, Owner Nomikos TWMA.URGENT'),
    // createData('19', '1', '3rd Engineer', 'BC', 'DW 85035', '4100.00+ $', '', '05/01/2022', 'M/E MAN B&W 6S60ME-C8.2, Boarding end of Jan 2022, Owner Samos Steamship'),
    // createData('20', '1', 'Oiler', 'BC', 'DW 85035', '1810.00 $', '', '05/01/2022', 'M/E MAN B&W 6S60ME-C8.2, Boarding end of Jan 2022, Owner Samos Steamship'),
    // createData('21', '1', 'Oiler', 'BC', 'DW 60000', '1500.00 $', '7+/- month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('22', '1', 'OS', 'BC', 'DW 60000', '1060.00 $', '7+/- month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('23', '1', 'O/S', 'BC', 'DW 35000', '1060.00 $', 'COE 7+/- month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('24', '1', 'A/B', 'BC', 'DW 55000', '1500.00 $', 'COE 7+/- month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('25', '1', 'Cook', 'BC', 'DW 58000', '1700.00 $', 'COE 7+/- month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('26', '1', '3rd Officer', 'BC', 'DW 55000', '2800.00 $', 'COE 7 month', '05/01/2022', 'URGENT, Nomikos TWMA'),
    // createData('27', '1', 'Chief Officer', 'BC', 'DW 58000', '7000.00 $', 'COE 5 month', '05/01/2022', 'URGENT, Nomikos TWMA'),
];