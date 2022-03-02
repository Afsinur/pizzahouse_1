const s8_ul_cont_ul = q_s(`.s8_ul_cont>ul`);

const s8_ul_cont_ul_arr = [
  {
    href: `#`,
    src: `img/section8/social/instagram.png`,
    alt: `instagram.png`,
  },
  {
    href: `#`,
    src: `img/section8/social/facebook.png`,
    alt: `facebook.png`,
  },
  {
    href: `#`,
    src: `img/section8/social/twitter.png`,
    alt: `twitter.png`,
  },
  {
    href: `#`,
    src: `img/section8/social/whatsapp.png`,
    alt: `whatsapp.png`,
  },
];

//init
s8_ul_cont_ul_arr.forEach(({ href, src, alt }) => {
  s8_ul_cont_ul.innerHTML += `
        <li>
            <a href="${href}">
                <img src="${src}" alt="${alt}"/>
            </a>
        </li>
    `;
});
