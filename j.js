function n(i){return i?i.slice(11,19):""}async function e(i,s,a){const r=document.getElementById(s),c=await(await fetch(`https://arrivelah2.busrouter.sg/?id=${i}`)).json(),d=a.map(t=>String(t));c.services.forEach(t=>{d.includes(String(t.no))&&(r.innerHTML+=`
      <tr>
        <td>${t.no}</td>
        <td>${n(t.next?.time)}</td>
        <td>${n(t.next2?.time)}</td>
        <td>${n(t.next3?.time)}</td>
      </tr>
      `)})}await Promise.all([e("28009","int",[334,506,66,993]),e("28241","lib",[178,198]),e("28251","sc",[97,984])]);
