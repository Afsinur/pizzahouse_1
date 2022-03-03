const s4_cld_3_1 = q_s(`.sec4Div>div:nth-child(3)>div:nth-child(1)`);
const s4_cld_3_2 = q_s(`.sec4Div>div:nth-child(3)>div:nth-child(2)`);
const s4_cld_4 = q_s(`.sec4Div>div:nth-child(4)`);

const s4_cld3_arr = [
  {
    h2_1: "| Lorem, ipsum dolor",
    h2_2: "(Lorem, ipsum, dolor, sit, amet)",
    h2_3: "10$",
  },
  {
    h2_1: "|| Lorem, ipsum",
    h2_2: "(Lorem, ipsum, dolor)",
    h2_3: "14$",
  },
  {
    h2_1: "||| Lorem, ipsum dolor",
    h2_2: "(Lorem, ipsum, dolor, sit, amet)",
    h2_3: "20$",
  },
  {
    h2_1: "|| Lorem, ipsum",
    h2_2: "(Lorem, ipsum, dolor)",
    h2_3: "10$",
  },
];

const s4_cld4_arr = [
  { p: "||| _ top in menu" },
  { p: "|| _ sale item" },
  { p: "| _ made by shef" },
];

//init
s4_cld3_arr.forEach(({ h2_1, h2_2, h2_3 }) => {
  s4_cld_3_1.innerHTML += `
  <div>
    <h2>${h2_1}</h2>
    <h2>${h2_2}</h2>
  </div>
  `;

  s4_cld_3_2.innerHTML += `
  <div>
    <h2>${h2_3}</h2>
  </div>
  `;
});

s4_cld4_arr.forEach(({ p }) => {
  s4_cld_4.innerHTML += `<p>${p}</p>`;
});
