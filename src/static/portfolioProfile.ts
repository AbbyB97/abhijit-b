import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillTwitterCircle
} from 'react-icons/ai'
import { TiSocialLinkedinCircular } from 'react-icons/ti'

const profileData = {
  // update these values to see the changes
  name: 'Abhijit',
  socialHandles: [
    {
      icon: AiFillTwitterCircle,
      link: 'https://twitter.com/b_abby97'
    },
    {
      icon: AiFillMediumCircle,
      link: 'https://medium.com/@abhijitbansode'
    },
    {
      icon: TiSocialLinkedinCircular,
      link: 'https://www.linkedin.com/in/abhijit-b97/'
    },
    {
      icon: AiFillGithub,
      link: 'https://github.com/AbbyB97'
    }
  ],
  header: {
    lineOne: 'A Self Taught ',
    lineTwo: 'Developer',
    favouriteQuote: '"Pleasure in the job puts perfection in the work"',
    favouriteQuoteAuthor: 'Aristotle'
  },
  // make it true if the projects are hosted online, (You can also add github repository link)
  hostedProjects: true,
  // if hostedProjects is true, then add the links to the projects here
  projectCards: [
    // add project details
    // {
    //   imgSrc: '/images/projects/atmn.png' as string,
    //   projectHeading: 'Android App ' as string,
    //   projectDetail:
    //     'A simple and quick way to start using alternative Indian apps for andorid.' as string,
    //   projectLink:
    //     'https://play.google.com/store/apps/details?id=com.apps.atmanirbharindia.release&hl=en_US&gl=US/' as string
    // },
    {
      imgSrc: '/images/projects/eshop.png' as string,
      projectHeading: 'Eshop' as string,
      projectDetail:
        'A simple shopping cart project made with MERN stack along with Redux ' as string,
      projectLink: 'https://e-shop2020.herokuapp.com/' as string
    },

    {
      imgSrc: '/images/projects/math_quiz.png' as string,
      projectHeading: 'Math Quiz' as string,
      projectDetail:
        'A simple Todo app created with ReactJs and redux' as string,
      projectLink: 'https://lq-assignment.netlify.app/' as string
    },
    {
      imgSrc: '/images/projects/todo.png' as string,
      projectHeading: 'Todo App' as string,
      projectDetail:
        'A simple Todo app created with ReactJs and redux' as string,
      projectLink: 'https://abbyb97.github.io/todoapp/#/' as string
    },
    {
      imgSrc: '/images/projects/ninjaKid.png' as string,
      projectHeading: 'Ninja Kid' as string,
      projectDetail:
        'A simple fun mini-game called Ninja Kid made with Godot engine' as string,
      projectLink:
        'https://drive.google.com/file/d/1SRJVpihFzcpVxHWa2g5q29RtdsknBwx8/view' as string
    }
  ]
}

export default profileData
