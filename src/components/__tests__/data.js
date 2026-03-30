 export const SOLAR_DATA = {
  statusCode: 0,
  data: {
    cacheExpiryTime: 300,
    pages: 1,
    pageIndex: 0,
    filters: [
      {
        type: "FilterWidget",
        title: "Plant Status",
        key: "STATUS",
        configType: "checkbox",
        visible: 1,
        options: [
          { option: "Active", selected: 0, visible: 1 },
          { option: "Inactive", selected: 0, visible: 1 },
          { option: "Maintenance", selected: 0, visible: 1 },
          { option: "Fault", selected: 0, visible: 1 }
        ]
      },
      {
        type: "FilterWidget",
        title: "Capacity Range (kW)",
        key: "CAPACITY",
        configType: "checkbox",
        visible: 1,
        options: [
          { option: "0-100", selected: 0, visible: 1 },
          { option: "100-500", selected: 0, visible: 1 },
          { option: "500-1000", selected: 0, visible: 1 }
        ]
      }
    ],
    plants: [
      {
        id: "SOLAR001",
        name: "Sunrise Solar Plant",
        location: "Rajasthan",
        capacity_kw: 500,
        status: "Active",
        current_output_kw: 320,
        irradiance_w_m2: 850,
        temperature_c: 34,
        efficiency_pct: 18.2,
        last_updated: "2026-03-28T10:00:00"
      },
      {
        id: "SOLAR002",
        name: "GreenField Energy",
        location: "Gujarat",
        capacity_kw: 750,
        status: "Active",
        current_output_kw: 600,
        irradiance_w_m2: 920,
        temperature_c: 36,
        efficiency_pct: 19.0,
        last_updated: "2026-03-28T10:05:00"
      },
      {
        id: "SOLAR003",
        name: "EcoPower Plant",
        location: "Tamil Nadu",
        capacity_kw: 300,
        status: "Maintenance",
        current_output_kw: 0,
        irradiance_w_m2: 780,
        temperature_c: 32,
        efficiency_pct: 0,
        last_updated: "2026-03-28T09:50:00"
      }
    ]
  }
};