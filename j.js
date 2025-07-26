const tbody = document.querySelector("tbody");

/**
 * @typedef {"SEA" | "SDA" | "LSD"} LoadLevel - Passenger load levels
 * @typedef {"WAB"} BusFeature - Features like wheelchair access
 * @typedef {"SD" | "DD"} BusType - Bus types: Single Deck (SD), Double Deck (DD)
 */

/**
 * @typedef {Object} BusTiming
 * @property {string} time - ISO timestamp when the bus is expected
 * @property {number} duration_ms - Duration in milliseconds until arrival
 * @property {number} lat - Latitude (currently 0)
 * @property {number} lng - Longitude (currently 0)
 * @property {LoadLevel} load - Load level (e.g., SEA)
 * @property {BusFeature} feature - Bus features (e.g., WAB)
 * @property {BusType} type - Type of the bus (e.g., SD, DD)
 * @property {number} visit_number - The sequence number of this visit
 * @property {string} origin_code - Bus stop code of origin
 * @property {string} destination_code - Bus stop code of destination
 * @property {0 | 1} monitored - Whether the bus is monitored
 */

/**
 * @typedef {Object} BusService
 * @property {string} no - Bus service number (e.g., "105", "143M")
 * @property {string} operator - Bus operator code (e.g., "SBST", "TTS")
 * @property {BusTiming} next - Information on the next bus
 * @property {BusTiming} subsequent - Information on the subsequent bus
 * @property {BusTiming} next2 - Same as `subsequent`, may be a duplicate
 * @property {BusTiming} next3 - Information on the third bus (may be null)
 */

/**
 * @typedef {Object} BusData
 * @property {BusService[]} services - Array of bus service data
 */
const busdata = await fetch("https://arrivelah2.busrouter.sg/?id=28009")
.then(response => response.json())
.then(data => {
  console.log(data);
  data.services.forEach(element => {
    if ([334,506,66,993].includes(Number(element.no))) {
      tbody.innerHTML += `
      <tr>
        <td>${element.no}</td>
        <td>${element.next?.time ? element.next.time.slice(11,16) : ""}</td>
        <td>${element.next2?.time ? element.next2.time.slice(11,16) : ""}</td>
        <td>${element.next3?.time ? element.next3.time.slice(11,16) : ""}</td>
      </tr>
      `
    }
  });
})