let itens = [
    {
        title: 'Segurança Total',
        subTitle: 'Cargas 100% seguradas com monitoramento em tempo real durante todo o trajeto.',
        svg: `<svg class="svg-item-servico" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.3334 15.1666C23.3334 21 19.25 23.9166 14.3967 25.6083C14.1425 25.6944 13.8665 25.6903 13.615 25.5966C8.75002 23.9166 4.66669 21 4.66669 15.1666V6.99995C4.66669 6.69054 4.7896 6.39379 5.0084 6.175C5.22719 5.9562 5.52393 5.83329 5.83335 5.83329C8.16669 5.83329 11.0834 4.43329 13.1134 2.65995C13.3605 2.44879 13.6749 2.33276 14 2.33276C14.3251 2.33276 14.6395 2.44879 14.8867 2.65995C16.9284 4.44495 19.8334 5.83329 22.1667 5.83329C22.4761 5.83329 22.7729 5.9562 22.9916 6.175C23.2104 6.39379 23.3334 6.69054 23.3334 6.99995V15.1666Z"
                            stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 14L12.8333 16.3333L17.5 11.6666" stroke="#0C448D" stroke-width="2.33333"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>`,
    },
    {
        title: 'Agilidade nas Entregas',
        subTitle: 'Logística otimizada para garantir que suas cargas cheguem no prazo combinado.',
        svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6667 2.33337H16.3333" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 16.3334L17.5 12.8334" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 25.6667C19.1547 25.6667 23.3333 21.488 23.3333 16.3333C23.3333 11.1787 19.1547 7 14 7C8.84534 7 4.66667 11.1787 4.66667 16.3333C4.66667 21.488 8.84534 25.6667 14 25.6667Z" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

`,
    },
    {
        title: 'Atendimento Personalizado',
        subTitle: 'Equipe dedicada para entender e atender suas necessidades específicas.',
        svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 16.3333H7C7.61884 16.3333 8.21233 16.5792 8.64992 17.0168C9.0875 17.4543 9.33333 18.0478 9.33333 18.6667V22.1667C9.33333 22.7855 9.0875 23.379 8.64992 23.8166C8.21233 24.2542 7.61884 24.5 7 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14V22.1667C24.5 22.7855 24.2542 23.379 23.8166 23.8166C23.379 24.2542 22.7855 24.5 22.1667 24.5H21C20.3812 24.5 19.7877 24.2542 19.3501 23.8166C18.9125 23.379 18.6667 22.7855 18.6667 22.1667V18.6667C18.6667 18.0478 18.9125 17.4543 19.3501 17.0168C19.7877 16.5792 20.3812 16.3333 21 16.3333H24.5" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    }
];

let itens2 = [
    {
        title: 'Cobertura Nacional',
        subTitle: 'Atuação em todo território brasileiro com rotas estratégicas otimizadas.',
        svg: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="12" fill="#0C448D" fill-opacity="0.1"/>
<path d="M37.3334 25.6667C37.3334 31.4919 30.8712 37.5585 28.7012 39.4322C28.499 39.5842 28.253 39.6664 28 39.6664C27.7471 39.6664 27.501 39.5842 27.2989 39.4322C25.1289 37.5585 18.6667 31.4919 18.6667 25.6667C18.6667 23.1914 19.65 20.8174 21.4004 19.067C23.1507 17.3167 25.5247 16.3334 28 16.3334C30.4754 16.3334 32.8493 17.3167 34.5997 19.067C36.35 20.8174 37.3334 23.1914 37.3334 25.6667Z" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 29.1666C29.933 29.1666 31.5 27.5996 31.5 25.6666C31.5 23.7336 29.933 22.1666 28 22.1666C26.067 22.1666 24.5 23.7336 24.5 25.6666C24.5 27.5996 26.067 29.1666 28 29.1666Z" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    },
    {
        title: 'Custo-Benefício',
        subTitle: 'Preços competitivos sem abrir mão da qualidade e segurança do serviço.',
        svg: `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.6667 8.16663L15.75 18.0833L9.91667 12.25L2.33333 19.8333" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.6667 8.16663H25.6667V15.1666" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    },
    {
        title: 'Experiência Comprovada',
        subTitle: 'Mais de 15 anos de mercado com milhares de entregas realizadas com sucesso.',
        svg: `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="56" height="56" rx="12" fill="#0C448D" fill-opacity="0.1"/>
<path d="M32.0565 29.0383L33.824 38.9853C33.8438 39.1025 33.8274 39.2228 33.7769 39.3304C33.7264 39.4379 33.6443 39.5275 33.5416 39.5871C33.4389 39.6467 33.3204 39.6735 33.202 39.664C33.0835 39.6544 32.9709 39.609 32.879 39.5337L28.7023 36.3988C28.5007 36.2482 28.2558 36.1668 28.0041 36.1668C27.7524 36.1668 27.5075 36.2482 27.3058 36.3988L23.1222 39.5325C23.0304 39.6077 22.9179 39.6531 22.7996 39.6626C22.6813 39.6722 22.563 39.6455 22.4603 39.586C22.3576 39.5266 22.2755 39.4372 22.2249 39.3299C22.1743 39.2226 22.1577 39.1024 22.1772 38.9853L23.9435 29.0383" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 30.3334C31.866 30.3334 35 27.1994 35 23.3334C35 19.4674 31.866 16.3334 28 16.3334C24.134 16.3334 21 19.4674 21 23.3334C21 27.1994 24.134 30.3334 28 30.3334Z" stroke="#0C448D" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
    }
];
let itensHtml = [];

for (let index = 0; index < itens.length; index++) {
    const item = itens[index];
    const element = `
                        <div class="card">
                            <span class="span-diff-svg">${item.svg}</span>
                            <span class="span-diff-title">${item.title}</span>
                            <span class="span-diff-subtitle">${item.subTitle}</span>
                        </div>
                    `;

    itensHtml.push(element);
}
document.getElementById('container-main-cards').innerHTML = itensHtml;
itensHtml = [];
for (let index = 0; index < itens2.length; index++) {
    const item = itens2[index];
    const element = `
                        <div class="card">
                            <span class="span-diff-svg">${item.svg}</span>
                            <span class="span-diff-title">${item.title}</span>
                            <span class="span-diff-subtitle">${item.subTitle}</span>
                        </div>
                    `;

    itensHtml.push(element);
}
document.getElementById('container-main-cards-2').innerHTML = itensHtml;