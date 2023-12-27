import ImageBanner1 from './../assets/images/banner_1.jpg';
import ImageBanner2 from './../assets/images/banner_2.jpg';
import ImageBanner3 from './../assets/images/banner_3.jpg';

import ImagePaterner from './../assets/images/Parternet1.png';
import ImagePaterner2 from './../assets/images/Parternet2.png';
import ImagePaterner3 from './../assets/images/patener_3.png';
import ImagePaterner4 from './../assets/images/patener_4.jpg';

import ImageOrange from './../assets/images/orange_gsc.png';
import ImageMtn from './../assets/images/mtn_gsc.jpg';
import ImageMoow from './../assets/images/moov_gsc.png';
import ImageIban from './../assets/images/iban_gsc.jpg';

export const ConfSite = {
   menu: [
      {
         name: 'Accueil',
         link: '',
      },
      {
         name: 'A Propos',
         link: '#abouts',
      },
      {
         name: 'Pourquoi donner ?',
         link: '#whyGive',
      },
      {
         name: 'Tutoriel',
         link: '#tutoriel',
      },
      {
         name: 'Actulités',
         link: '#actuality',
      },
      {
         name: 'Contacts',
         link: '#footer',
      },
   ],

   logo: {
      name: '',
      original_url: '',
   },

   contact: {
      name: '',
      numero: '',
   },
   sliders: [
      {
         image: ImageBanner1,
         content:
            "Unissons-nous pour soutenir les victimes de l'incendie. Chaque contribution compte dans la reconstruction de vies brisées. Faites une différence aujourd'hui. Donnez avec votre cœur.",
      },
      {
         image: ImageBanner2,
         content:
            "Rencontrez Fofana, une des nombreuses victimes de l'incendie. Votre soutien financier permettra de reconstruire des foyers et d'apporter un peu de réconfort à ceux qui en ont besoin. Chaque don compte.",
      },
      {
         image: ImageBanner3,
         content:
            " Grâce à vos dons, nous reconstruisons des vies. Chaque geste, peu importe la taille, a un impact immense. Rejoignez-nous dans cet effort de solidarité. Donnez aujourd'hui pour un meilleur demain.",
      },
   ],
   partner: [{ image: ImagePaterner }, { image: ImagePaterner2,  }, {image: ImagePaterner3}, {image: ImagePaterner4}],
   abouts: {
      title: '',
      content: '',
   },
   why: [
      {
         title: "Aide d'Urgence",
         content: `Assurer la survie et le bien-être immédiat des personnes touchées.
         Aider les victimes à reconstruire leur vie en finançant la reconstruction des habitations détruites et en facilitant la réinstallation dans des conditions sécurisées.`,
      },
      {
         title: 'Logement et Réinstallation',
         content: `Fournir un logement stable et sûr aux personnes déplacées par l'incendie.
         Aider les victimes à reconstruire leur vie en finançant la reconstruction des habitations détruites et en facilitant la réinstallation dans des conditions sécurisées.`,
      },
      {
         title: 'Soins Médicaux et Traitements',
         content: `Assurer un accès aux soins de santé nécessaires pour la guérison.
         Financer les soins médicaux, les traitements d'urgence et la récupération physique et mentale des victimes blessées pendant l'incident.`,
      },
      {
         title: 'Soutien Psychologique et Social',
         content: `Promouvoir le bien-être mental et émotionnel des personnes affectées.

         Mettre en place des programmes de soutien psychologique, de conseil et d'accompagnement social pour aider les victimes à surmonter le traumatisme émotionnel.`,
      },
      {
         title: 'Éducation et Formation',
         content: `Garantir la continuité de l'éducation et soutenir la réintégration professionnelle.
         Financer la reprise de l'éducation pour les étudiants touchés, ainsi que fournir des opportunités de formation professionnelle pour les adultes.`,
      },
      {
         title: 'Soutien aux Entreprises Locales',
         content: `Favoriser la reprise économique au niveau local.
         Soutenir les petites entreprises locales touchées par l'incendie en leur fournissant des fonds pour la reconstruction, l'achat de matériel et la relance des activités.`,
      },
      {
         title: 'Infrastructure Communautaire',
         content: `Renforcer l'infrastructure locale pour le bien-être collectif.
         Financer la reconstruction d'infrastructures communautaires telles que les écoles, les centres de santé, les installations sportives, et les espaces publics endommagés par l'incendie.`,
      },
      {
         title: 'Prévention des Incendies et Sécurité',
         content: `Protéger les communautés contre les incendies futurs.
         Investir dans des initiatives de prévention des incendies, la sensibilisation communautaire et les mesures de sécurité pour minimiser les risques futurs.`,
      },
   ],
   actuality: [
      {
         image: 'https://img.freepik.com/photos-gratuite/paysage-incendies-foret-extremes_23-2150880205.jpg?size=626&ext=jpg&ga=GA1.1.401016479.1673963877&semt=sph',
         title: 'Qui sont les victimes',
         content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod totam rerum impedit nesciunt beatae ipsa eos quam explicabo vero facere, soluta praesentium sapiente corrupti harum a laboriosam perferendis ratione deserunt rem facilis.',
      },
      {
         image: 'https://img.freepik.com/photos-gratuite/silhouettes-arbres-brulants-contre-ciel-coucher-soleil-ardent-genere-par-ia_188544-39244.jpg?size=626&ext=jpg&ga=GA1.1.401016479.1673963877&semt=sph',
         title: 'Venir en aide à son prochain',
         content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod totam rerum impedit nesciunt beatae ipsa eos quam explicabo vero facere, soluta praesentium sapiente corrupti harum a laboriosam perferendis ratione deserunt rem facilis.',
      },
      {
         image: 'https://img.freepik.com/photos-gratuite/pompiers-portant-combinaisons-protection-casques-sauvent-personnes-enfers-generes-par-ia_24640-99830.jpg?size=626&ext=jpg&ga=GA1.1.401016479.1673963877&semt=sph',
         title: 'Comment vous pouvez contribuer',
         content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quod totam rerum impedit nesciunt beatae ipsa eos quam explicabo vero facere, soluta praesentium sapiente corrupti harum a laboriosam perferendis ratione deserunt rem facilis?.',
      },
   ],
   pay: [
      {
         image: ImageOrange,
         name: 'Orange Money',
         tel: '+224 628 00 00 00',
      },
      {
         image: ImageMtn,
         name: 'MTN Money',
         tel: '+224 628 00 00 00',
      },
      {
         image: ImageMoow,
         name: 'Moov money',
         tel: '+224 628 00 00 00',
      },
      {
         image: ImageIban,
         name: 'Numéro IBAN',
         tel: 'GN14 2004 1010 0505 0001 3M02 606',
      },
      
   ],
};
