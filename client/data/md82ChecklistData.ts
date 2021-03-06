import { ChecklistRaw } from '../../models/ChecklistRaw'

export const md82ChecklistData: ChecklistRaw = {
  name: 'MD 82 Checklist',
  phases: [
    {
      name: 'Before Start',
      tasks: [
        { name: 'Fuel and Passengers', status: 'STARTED' },
        { separator: '' },
        { name: 'Battery', status: 'ON' },
        { name: 'External Power', status: 'ON' },
        { name: 'FMC Setup', status: 'STARTED' },
        { separator: '' },
        { name: 'Flapse', status: 'SET' },
        { name: 'CG', status: 'SET' },
        { separator: '' },
        { name: 'Altimiter', status: 'SET' },
        { name: 'FD', status: 'ON' },
        { name: 'Heading', status: 'SET' },
        { name: 'Altitude Set and Arm', status: 'SET' },
        { name: 'Speed', status: 'SET' },
        { name: 'ILS Nav Data', status: 'SET', description: 'Set to local ILS to test Autoland system' },
        { separator: '' },
        { name: 'Transfer Lockout', status: 'SET' },
        { name: 'Landing Altitude', status: 'SET' },
        { name: 'Flight Deck Door', status: 'DENY' },
        { name: 'Auxiliary Hydraulic Pump', status: 'ON' },
        { name: 'All Doors Closed', status: 'SET' },
        { separator: '' },
        { name: 'TCAS', status: 'TA/RA' },
        { separator: 'APU' },
        { name: 'Right Aft Fuel Pump', status: 'ON' },
        { name: 'Start Pump', status: 'ON' },
        { name: 'APU Master', status: 'START' },
        { name: 'APU Gens', status: 'ON' },
        { name: 'External Power', status: 'OFF' },
        { name: 'Galley Power', status: 'ON' },
        { name: 'Pneumatic Cross-Feed Valve Levers', status: 'OPEN' },
        { name: 'APU Air', status: 'ON' },
      ],
    },
    {
      name: 'Taxi',
      tasks: [
        { name: 'Pushback Start', status: 'SET' },
        { separator: 'Engine Start' },
        { name: 'Fuel Pumps', status: 'ON' },
        { name: 'Ignition', status: 'SET' },
        { name: 'Fuel Heat', status: 'AS REQUIRED', description: 'ON when less then 0C' },
        { name: 'Starter', status: 'ON', description: 'Wait for 20% N2' },
        { name: 'Fuel Lever', status: 'ON' },
        { name: 'Starter', status: 'OFF' },
        { name: 'Ignition', status: 'OFF' },
        { name: 'Start Pump', status: 'OFF' },
        { separator: '' },
        { name: 'APU Bus, Air and Master', status: 'OFF' },
        { name: 'Air Conditioning', status: 'AUTO' },
        { name: 'Windshield Anti-Fog & Anti-Ice', status: 'ON' },
        { name: 'Pitot Heater', status: 'CAPT' },
        { name: 'Trans Hidraulic Pump', status: 'ON' },
        { name: 'Hidraulic Pumps', status: 'HIGH' },
        { name: 'TO Rating Mode', status: 'SET' },
        { separator: 'Lights' },
        { name: 'Logo', status: 'ON' },
        { name: 'Emergency Lights', status: 'ARM' },
        { name: 'No Smoking Sign', status: 'AUTO' },
        { name: 'Seat Belts', status: 'ON' },
        { name: 'Landing Lights', status: 'ON' },
        { separator: 'Autoland System Test' },
        {
          name: 'Autoland Button',
          status: 'PRESSED',
          description: `Wait 50 seconds for AUTOLND-PRE-FLT-TEST to go blank or to revert to previous display
          and NO AUTOLAND legend light goes out indicating a valid test`,
        },
      ],
    },
    {
      name: 'Takeoff',
      tasks: [
        { name: 'Spoilers', status: 'ARM' },
        { name: 'Auto-Brake T.O. and Armed', status: 'SET' },
        { name: 'No Aural Warnings', status: 'CHECK' },
        { name: 'Auto-throttle', status: 'ARM' },
      ],
    },
    {
      name: 'Climb',
      tasks: [
        { name: 'Gear', status: 'UP' },
        { name: 'Spoilers', status: 'DISARM' },
        { name: 'Climb Rating', status: 'SET' },
        { name: 'NAV, VNAV and AP', status: 'ON' },
        { name: 'Hidraulic Pumps', status: 'LOW' },
        { name: 'Transfer and AUX Pumps', status: 'OFF' },
        { separator: '10000ft' },
        { name: 'Lights', status: 'OFF' },
        { name: 'Seat Belts', status: 'OFF' },
        { name: 'Auto-Brake', status: 'OFF' },
      ],
    },
    {
      name: 'Cruise',
      tasks: [
        { name: 'Cruise Rating', status: 'SET' },
        { name: 'Altitude Set and Armed', status: 'SET' },
      ],
    },
    {
      name: 'Descent',
      tasks: [
        { name: 'ILS Data', status: 'SET' },
        { name: 'DH', status: 'SET' },
        { name: 'V Speeds', status: 'SET' },
        { name: 'TO Rating', status: 'SET' },
        { name: 'Hidraulic Pumps', status: 'HIGH' },
        { name: 'Transfer and AUX Pumps', status: 'ON' },
      ],
    },
    {
      name: 'Approach',
      tasks: [
        { name: 'Auto-Brake', status: 'SET' },
        { name: 'Speed Brake', status: 'ARM' },
        { name: 'ILS, LOC and AUTOLAND', status: 'ON' },
        { name: 'L/G and Flaps', status: 'SET' },
      ],
    },
  ],
}
