class FooterLink {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }

}

class FooterSection {
    constructor(title, links) {
        this.title = title;
        this.links = links;
    }
}

const footerSections = [
    new FooterSection('primary', [
        new FooterLink('About', 'https://localhost:3000/about/'),
        new FooterLink('Press', 'https://localhost:3000/about/press/'),
        new FooterLink('Copyright', 'https://localhost:3000/about/copyright/'),
        new FooterLink('Contact Us', '/t/contact_us'),
        new FooterLink('Creators', 'https://localhost:3000/creators/'),
        new FooterLink('Advertise', 'https://localhost:3000/ads/'),
        new FooterLink('Developers', 'https://developers.google.com/youtube')
    ]),
    new FooterSection('secondary', [
        new FooterLink('Terms', '/t/terms'),
        new FooterLink('Privacy', '/t/privacy'),
        new FooterLink('Policy & Safety', 'https://localhost:3000/about/policies/'),
        new FooterLink('How CloneTube Works', 'https://www.youtube.com/howyoutubeworks?utm_campaign=ytgen&utm_source=ythp&utm_medium=LeftNav&utm_content=txt&u=https%3A%2F%2Fwww.youtube.com%2Fhowyoutubeworks%3Futm_source%3Dythp%26utm_medium%3DLeftNav%26utm_campaign%3Dytgen'),
        new FooterLink('Test new features', '/new')
    ])
]

export {footerSections}