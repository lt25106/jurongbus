const tblebdy = document.querySelector("tbody");
await fetch("https://arrivelah2.busrouter.sg/?id=28009")
    .then(response => response.json())
    .then((data) => {
    console.log(data);
    data.services.forEach(element => {
        if ([334, 506, 66, 993].includes(Number(element.no))) {
            tblebdy.innerHTML += `
      <tr>
        <td>${element.no}</td>
        <td>${element.next?.time ? element.next.time.slice(11, 16) : ""}</td>
        <td>${element.next2?.time ? element.next2.time.slice(11, 16) : ""}</td>
        <td>${element.next3?.time ? element.next3.time.slice(11, 16) : ""}</td>
      </tr>
      `;
        }
    });
});
export {};
