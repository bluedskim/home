// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "김",
  middleName: "",
  lastName: "동석",
  message: "소프트웨어 엔지니어는 컴퓨터와 사람 사이의 통역가입니다. 통역가는 양쪽 언어의 `이해`와 `표현`에 모두 능란해야 합니다",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/bluedskim",
    },
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/user/bluedskim/videos",
    },
    {
      image: "fa-blogger",
      url: "https://bluedskim.github.io/",
    },
    /*
    */
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "성장이 즐거운 개발자",
  imageLink: require("../editable-stuff/내얼굴 일러스트.jpeg"),
  imageSize: 375,
  message:
    "IT기술은 정치/경제/문화 전분야의 변화를 선도하고 있습니다. IT기술은 세상을 더 편하고 이롭게 만듭니다. 저는 IT분야에서 일원으로 활동하고 있다는 것에 자부심을 느끼고 있습니다.",
  resume: "static/media/finmart1.bc324fd0.png",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "공개 프로젝트",
  gitHubUsername: "bluedskim", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["javaDesignPatterns", "egloosexodus", "r2dbcVsMybatis"],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "'태도는 큰 차이를 가져올 수 있는 작은 요소다'",
  message:
    "소프트웨어 프로젝트에서 팀워크는 가장 소중한 재산입니다. 프로젝트는 성공했지만 멤버를 잃는다거나 구성원 개개인의 발전과 팀워크의 향상이 없다면 성공한 프로젝트라고 할 수 없다고 생각합니다.가끔 지식/기술/경험을 독점하려는 개발자를 가끔 볼 수 있습니다. 하지만, 조직에서는 지식과 경험은 나눌 때 더욱 커집니다. 왜냐하면, 지식은 move 되는 것이 아니라 copy 되는 것이기 때문입니다. 저는 제가 가진 지식과 경험들을 후배, 동료와 나누려고 항상 노력합니다.",
  images: [
    { 
      img: require("../editable-stuff/finmart1.png"), 
      label: "대출상품 비교-핀마트 ",
      paragraph: "Android/IOS, Hybrid" 
    },
    { 
      img: require("../editable-stuff/kcl_togo1.png"), 
      label: "O2O서비스-TOGO", 
      paragraph: "Android/IOS, Angular" 
    },
  ],
  imageSize: {
    width:"100%",
    height:"100%"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "기술",
  hardSkills: [
    { name: "Java(Spring Boot)", value: 90 },
    { name: "Python", value: 10 },
    { name: "SQL(Oracle/Mysql/Postgres)", value: 75 },
    { name: "분석/설계", value: 85 },
    { name: "전산영어", value: 90 },
    { name: "C/C++", value: 45 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 50 },
    { name: "HTML/CSS", value: 75 },
    { name: "Docker", value: 80 },
    { name: "Linux", value: 70 },
    { name: "Hadoop/Hbase", value: 20 },
    { name: "PHP", value: 30 },
    { name: "AWS", value: 30 },
  ],
  softSkills: [
    { name: "목표 지향", value: 80 },
    { name: "협업", value: 90 },
    { name: "긍정성", value: 75 },
    { name: "적응력", value: 85 },
    { name: "문제 해결 능력", value: 75 },
    { name: "공감 능력", value: 90 },
    { name: "창의성", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "연락처",
  message:
    "아래의 이메일로 연락주십시오",
  email: "bluedskim@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Tech Lead/Developer',// Here Add Company Name
      companylogo: require('../assets/img/kwareLogo.png'),
      date: '분석/설계/개발, Java/Spring, Postgres/Oracle, Linux',
    },
    {
      role: 'Tech Lead/Developer',
      companylogo: require('../assets/img/kclLogo.png'),
      date: 'O2O서비스 분석/설계/개발, Java/Spring, Mysql',
    },
    {
      role: 'Tech Lead/Developer',
      companylogo: require('../assets/img/finmartLogo2.png'),
      date: '핀테크 서비스 분석/설계/개발, Java/Spring, Mysql',
    }, 
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
