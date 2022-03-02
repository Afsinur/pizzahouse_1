const sec1Div_cld1_ul = q_s(`.sec1Div > div:nth-child(1) > ul`);

const s1_cld1_ul = [
  { href: "menu_", a_text: "Menu" },
  { href: "blog_", a_text: "Blog" },
  { href: "about_us_", a_text: "About us" },
  { href: "contacts_", a_text: "Contacts" },
];

//init
s1_cld1_ul.forEach(({ href, a_text }) => {
  sec1Div_cld1_ul.innerHTML += `
        <li>
            <a href="#${href}">${a_text}</a>
        </li>
    `;
});
