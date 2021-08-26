import { ChecklistRaw } from '../../models/ChecklistRaw'

export const airbus320ChecklistData: ChecklistRaw = {
  name: 'Airbus 320 Checklist',
  phases: [
    {
      name: 'Before Start',
      tasks: [
        {
          name: 'Batteries',
          status: 'ON',
        },
        {
          name: 'External Power',
          status: 'ON',
        },
        {
          name: 'ADIRS Switches',
          status: 'ALIGN',
        },
        {
          name: 'Brightness',
          status: 'SET',
        },
        { isSeparator: true },
        {
          name: 'Load PAX and Cargo',
          status: 'DONE',
        },
        {
          name: 'MCDU Order: INIT, F-PLN, PERF',
          status: 'DONE',
        },
        { isSeparator: true },
        {
          name: 'Fuel Pumps',
          status: 'ON',
        },
        {
          name: 'Seatbelts Sign',
          status: 'ON',
        },
        {
          name: 'No Smoking Sign',
          status: 'AUTO',
        },
        {
          name: 'Emergency Exit Lights',
          status: 'ARMED',
        },
        {
          name: 'Nav & Logo Light',
          status: 'ON',
        },
        {
          name: 'APU Bleed',
          status: 'START',
        },
        {
          name: 'Crew Supply',
          status: 'ON',
        },
        { isSeparator: true },
        {
          name: 'Radio Control Panels',
          status: 'ON',
        },
        {
          name: 'Transponder',
          status: 'TA/RA',
        },
        {
          name: 'Weather',
          status: 'ON',
        },
        { isSeparator: true },
        {
          name: 'Altimeter',
          status: 'SET',
        },
        {
          name: 'CSTR',
          status: 'ON',
        },
        {
          name: 'LS',
          status: 'ON',
        },
        {
          name: 'Altitude',
          status: 'SET',
        },
        { isSeparator: true },
        {
          name: 'External Power',
          status: 'OFF',
        },
        {
          name: 'Flight Plan',
          status: 'CHECKED',
        },
        {
          name: 'IRS',
          status: 'ALIGNED',
        },
      ],
    },
    {
      name: 'Pushback & Engine Start',
      tasks: [
        {
          name: 'Beacon Light',
          status: 'ON',
        },
        {
          name: 'Parking Brake',
          status: 'OFF',
        },
        {
          name: 'Pushback',
          status: 'STARTED',
        },
        {
          name: 'Engines',
          status: 'STARTED',
        },
        { isSeparator: true },
        {
          name: 'APU',
          status: 'OFF',
        },
        {
          name: 'T.O. Config',
          status: 'CHECKED',
        },
        {
          name: 'Nose Light',
          status: 'TAXI',
        },
        {
          name: 'Rwy Light',
          status: 'ON',
        },
      ],
    },
    {
      name: 'Before Takeoff',
      tasks: [
        {
          name: 'Strobe Light',
          status: 'ON',
        },
        {
          name: 'Landing Light',
          status: 'ON',
        },
        {
          name: 'Nose Light',
          status: 'TAKEOFF',
        },
      ],
    },
    {
      name: 'Climb',
      tasks: [
        {
          name: 'Seatbelts Sign',
          status: 'OFF',
        },
        {
          name: 'Strobe Light',
          status: 'AUTO',
        },
        {
          name: 'Rwy Light',
          status: 'OFF',
        },
        {
          name: 'Landing Light',
          status: 'RETRACTED',
        },
      ],
    },
    {
      name: 'Descend',
      tasks: [
        {
          name: 'Autobrake',
          status: 'SET',
        },
        { isSeparator: true },
        {
          name: 'Seatblets Sign',
          status: 'ON',
        },
        {
          name: 'Strobe Light',
          status: 'AUTO',
        },
        {
          name: 'Rwy Light',
          status: 'ON',
        },
        {
          name: 'Landing Light',
          status: 'ON',
        },
        {
          name: 'Nose Light',
          status: 'TAKEOFF',
        },
      ],
    },
    {
      name: 'After Land',
      tasks: [
        {
          name: 'Transponder',
          status: 'STBY',
        },
        {
          name: 'Spoilers',
          status: 'RETRACTED',
        },
        {
          name: 'Flaps',
          status: 'RETRACTED',
        },
        { isSeparator: true },
        {
          name: 'APU',
          status: 'ON',
        },
        { isSeparator: true },
        {
          name: 'Strobe Light',
          status: 'AUTO',
        },
        {
          name: 'Landing Light',
          status: 'RETRACTED',
        },
        {
          name: 'Nose Light',
          status: 'TAXI',
        },
      ],
    },
    {
      name: 'Park',
      tasks: [
        {
          name: 'Parking Brake',
          status: 'ON',
        },
        {
          name: 'Engines',
          status: 'OFF',
        },
        {
          name: 'Fuel Pumps',
          status: 'OFF',
        },
        {
          name: 'Lights',
          status: 'OFF',
        },
        {
          name: 'Radio Control Panels',
          status: 'OFF',
        },
      ],
    },
  ],
}
