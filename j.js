const d=document.getElementById("int");await fetch("https://arrivelah2.busrouter.sg/?id=28009").then(i=>i.json()).then(i=>{i.services.forEach(t=>{[334,506,66,993].includes(+t.no)&&(d.innerHTML+=`
      <tr>
        <td>${t.no}</td>
        <td>${t.next?.time?t.next.time.slice(11,16):""}</td>
        <td>${t.next2?.time?t.next2.time.slice(11,16):""}</td>
        <td>${t.next3?.time?t.next3.time.slice(11,16):""}</td>
      </tr>
      `)})});const n=document.getElementById("lib");await fetch("https://arrivelah2.busrouter.sg/?id=28241").then(i=>i.json()).then(i=>{i.services.forEach(t=>{[178,198].includes(+t.no)&&(n.innerHTML+=`
      <tr>
        <td>${t.no}</td>
        <td>${t.next?.time?t.next.time.slice(11,16):""}</td>
        <td>${t.next2?.time?t.next2.time.slice(11,16):""}</td>
        <td>${t.next3?.time?t.next3.time.slice(11,16):""}</td>
      </tr>
      `)})});
