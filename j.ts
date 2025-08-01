interface Busdata {
  services: {
    no: number;
    operator: string;
    next?: Next;
    next2?: Next;
    next3?: Next;
  }[];
}
interface Next {
  destination_code: string;
  duration_ms: number;
  feature: string;
  lat: number;
  lng: number;
  load: string;
  monitored: number;
  origin_code: string;
  time: string; // ISO 8601 format
  type: string;
  visit_number: number;
}

const intable = document.getElementById("int") as HTMLTableSectionElement;
await fetch("https://arrivelah2.busrouter.sg/?id=28009")
.then(response => response.json())
.then((data:Busdata) => {
  // console.log(data);
  data.services.forEach(element => {
    if ([334,506,66,993].includes(+element.no)) {
      intable.innerHTML += `
      <tr>
        <td>${element.no}</td>
        <td>${element.next?.time ? element.next.time.slice(11,16) : ""}</td>
        <td>${element.next2?.time ? element.next2.time.slice(11,16) : ""}</td>
        <td>${element.next3?.time ? element.next3.time.slice(11,16) : ""}</td>
      </tr>
      `
    }
  });
});
const libtable = document.getElementById("lib") as HTMLTableSectionElement;
await fetch("https://arrivelah2.busrouter.sg/?id=28241")
.then(response => response.json())
.then((data:Busdata) => {
  data.services.forEach(element => {
    if ([178,198].includes(+element.no)) {
      libtable.innerHTML += `
      <tr>
        <td>${element.no}</td>
        <td>${element.next?.time ? element.next.time.slice(11,16) : ""}</td>
        <td>${element.next2?.time ? element.next2.time.slice(11,16) : ""}</td>
        <td>${element.next3?.time ? element.next3.time.slice(11,16) : ""}</td>
      </tr>
      `
    }
  })
})

export {};