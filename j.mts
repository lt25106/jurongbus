//esbuild j.mts --minify --format=esm --outfile=j.js
///<reference path="./j.d.ts" />

type ServiceList = number[] | string[];

function timeSlice(t?: string) {
  return t ? t.slice(11, 19) : "";
}

async function populateTable(stopId: string, tableId: string, services: ServiceList) {
  const table = document.getElementById(tableId) as HTMLTableSectionElement;
  const res = await fetch(`https://arrivelah2.busrouter.sg/?id=${stopId}`);
  const data = await res.json() as Busdata;
  const wanted = services.map(s => String(s));
  data.services.forEach(element => {
    if (wanted.includes(String(element.no))) {
      table.innerHTML += `
      <tr>
        <td>${element.no}</td>
        <td>${timeSlice(element.next?.time)}</td>
        <td>${timeSlice(element.next2?.time)}</td>
        <td>${timeSlice(element.next3?.time)}</td>
      </tr>
      `;
    }
  });
}

await Promise.all([
  populateTable("28009", "int", [334, 506, 66, 993]),
  populateTable("28241", "lib", [178, 198]),
  populateTable("28251", "sc", [97, 984])
]);