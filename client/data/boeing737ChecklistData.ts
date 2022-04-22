import { ChecklistRaw } from '../../models/ChecklistRaw'

export const boeing737ChecklistData: ChecklistRaw = {
  name: 'Boeing 737 Checklist',
  phases: [
    {
      name: 'Before Start',
      tasks: [
        { separator: 'Overhead' },
        { name: 'Battery', status: 'SET' },
        { name: 'AC Ground Power', status: 'SET' },
        { name: 'IRS Switches', status: 'NAV' },
        { name: 'Electric Hydraulic Pumps', status: 'ON' },
        { name: 'Fuel Pumps FWD & AFT', status: 'ON' },
        { name: 'Yaw Damper', status: 'ON' },
        { name: 'Position Lights', status: 'STEADY' },
        { name: 'Emergency Exit Lights', status: 'ARMED' },
        { name: 'Seatbelts', status: 'ON' },
        { name: 'Trim Air', status: 'ON' },
        { name: 'Packs', status: 'AUTO' },
        { name: 'Flight and Landing Altitude', status: 'SET' },
        { name: 'Window Heat', status: 'ON' },

        { separator: 'FMC' },
        { name: 'Fuel and Payload', status: 'SET' },
        { name: 'FMC: Route', status: 'SET' },
        { name: 'FMC: Perf Init', status: 'SET' },
        { name: 'FMC: N1 Limit', status: 'SET' },
        { name: 'FMC: Takeoff and Approach Perf', status: 'SET' },

        { separator: 'MCP' },
        { name: 'Terrain Buttons', status: 'SET' },
        { name: 'Barometric Pressure', status: 'SET' },
        { name: 'Flight Directors', status: 'SET' },
        { name: 'Course', status: 'SET' },
        { name: 'IAS', status: 'SET' },
        { name: 'Heading', status: 'SET' },
        { name: 'Altitude', status: 'SET' },
        { name: 'Minimums', status: 'SET' },
        { name: 'Auto Brakes', status: 'RTO' },

        { separator: 'RADIO' },
        { name: 'NAV Frequencies', status: 'SET' },
      ],
    },
    {
      name: 'Engine Start',
      tasks: [
        { separator: 'APU' },
        { name: 'Flight Deck Door', status: 'CLOSED' },
        { name: 'APU', status: 'STARTED' },
        { name: 'APU Bleed', status: 'ON' },
        { name: 'Middle APU Generators', status: 'ON' },
        { name: 'GPU Disconnected', status: 'SET' },

        { separator: 'Engines' },
        { name: ' Anti Collistion Lights', status: 'ON' },
        { name: 'Packs', status: 'OFF' },
        { name: 'Start Pushback', status: 'SET' },
        { name: 'Engine Start Switch', status: 'GROUND' },
        { name: 'Engine Start Lever', status: 'IDLE', description: 'When reaching 25% N2' },
      ],
    },
    {
      name: 'Before Taxi',
      tasks: [
        { name: 'Engine Generators', status: 'ON' },
        { name: 'APU', status: 'OFF' },
        { name: 'Probe Heats', status: 'ON' },
        { name: 'Packs', status: 'AUTO' },
        { name: 'Isolation Valve', status: 'AUTO' },
        { name: 'APU Bleed', status: 'OFF' },
        { name: 'Flaps', status: 'SET' },
        { name: 'Taxi Light', status: 'ON' },
        { name: 'Runway Turnoff Lights', status: 'ON' },
      ],
    },
    {
      name: 'Before Takeoff',
      tasks: [
        { name: 'Position Lights', status: 'STROBE & STEADY' },
        { name: 'Landing Lights', status: 'ON' },

        { separator: 'MCP Panel' },
        { name: 'Autothrottle', status: 'ACTIVE' },
        { name: 'LNAV or HDG Sel', status: 'ACTIVE' },
        { name: 'VNAV', status: 'ACTIVE' },
        { name: 'Transponder', status: 'TA/RA' },
      ],
    },
    {
      name: 'Climb',
      tasks: [
        { name: 'Landing Gear', status: 'OFF' },
        { name: 'Auto Brakes', status: 'SET' },

        { separator: 'Passing 10000 ft' },
        { name: 'Landing Lights', status: 'OFF' },
        { name: 'Runway Turnoff Lights', status: 'OFF' },
        { name: 'Seatbelts', status: 'OFF' },
        { name: 'Taxi Light', status: 'OFF' },
      ],
    },
    {
      name: 'Cruise',
      tasks: [{ name: 'Altitude', status: 'SET' }],
    },
    {
      name: 'Descent',
      tasks: [
        { name: 'Local Altimeter', status: 'SET' },
        { name: 'Seatbelts', status: 'ON' },

        { separator: 'Passing 10000 ft' },
        { name: 'Landing Lights', status: 'ON' },
        { name: 'Runway Turnoff Lights', status: 'ON' },
        { name: 'Taxi Light', status: 'ON' },
      ],
    },
    {
      name: 'Approach',
      tasks: [
        { name: 'Flaps', status: 'SET', description: 'At airspeed UP set to 1, at airspeed 1 set to 2, at airspeed 2 set to 5, etc.' },
        { name: 'Aproach', status: 'ARM', description: 'Arm approach and activate CMD 2 if ILS CAT III' },
        { name: 'IAS', status: 'SET', description: 'Set to IAS to Vref' },
        { name: 'Landing Gear', status: 'DOWN', description: 'At Flaps 10' },
        { name: 'Speed Brake', status: 'ARM' },
      ],
    },
  ],
}
