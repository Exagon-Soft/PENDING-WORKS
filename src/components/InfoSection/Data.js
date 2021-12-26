import AboutIMG from '../../images/aboutPicture.svg';
import DiscoverIMG from '../../images/oneclickUpdate.svg';
import SignUpIMG from '../../images/signUp.svg';

export const firstSection = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Active Member',
    headLine: 'Work progress, organized and up-to-date.',
    description: 'Work your own rhythm. Schedule your daily tasks and  checks up your progress, in order to calculate as much as you take to finish them.',
    buttonLabel: 'Get started',
    imgStart: true,
    img: AboutIMG,
    alt: 'Organizer',
    dark: false,
    primary: false,
    darkText: true
};

export const secundSection = {
    id: 'discover',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Automatic Update',
    headLine: 'Reorganize all your progress with only a click.',
    description: 'With only marking a task as finished , all the moreover listed will update his respective state; The time estimated of finalization will also be re-calculated.',
    buttonLabel: 'Read More',
    imgStart: false,
    img: DiscoverIMG,
    alt: 'Organizer',
    dark: true,
    primary: true,
    darkText: false
};


export const fourSection = {
    id: 'signup',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Join our Family',
    headLine: 'Creating an account is bery easy.',
    description: 'Get everything set up and ready in under 5 minutes. All you need to do is choose your authentication method, and you are ready to go.',
    buttonLabel: 'Join Now',
    imgStart: true,
    img: SignUpIMG,
    alt: 'Organizer',
    dark: true,
    primary: true,
    darkText: false
};