import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Creation of TPV systems',
        description: "My team and I created a POS system from scratch in which it has both backend and frontend functionalities for data administration and control.",
        tools: ['Express', 'MongoDB', 'NextJS', 'React Native'],
        role: 'Front-end',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Elemental4Web',
        description: 'Development of multi-platform CRM for marketing automation services and sales efficiency',
        tools: ['NextJS', 'Tailwind CSS', "TypeScript", "MySQL", "Gmail Passkey"],
        role: 'Front-end',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Hotel Booking',
        description: 'Developed a reservation system for a hotel that automates room service and management. In addition, it allows you to offer the reservation service to other businesses.',
        tools: ['React', 'Tailwind CSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB',],
        code: '',
        role: 'Front-end',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Comprehensive Solution for Electronic Commerce',
        description: "We built an e-commerce platform to make it easy to create and manage online stores. This solution offers an intuitive environment for merchants and a seamless shopping experience for customers.",
        tools: ['NextJS', 'Material UI', 'Redux',  'Stripe', 'Express', 'TypeScript', "MySQL"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },