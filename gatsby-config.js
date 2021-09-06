module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://hoheer.github.io/`,
    // Your Name
    name: 'Si Yeon Lee',
    // Main Site Title
    title: `이시연|  `,
    // Description that goes under your name in main bio
    description: `개발과 데이터 사이.`,
    // Optional: Twitter account handle
    //author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/hoheer`,
    // Optional: LinkedIn account URL
    //linkedin: `https://www.linkedin.com/in/ryanafitzgerald/`,
    // Content of the About Me section
    //about: `데이터 엔지니어를 향해 헤엄치는 이시연 입니다.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'SDOT 데이터를 사용한 기상특보(폭염, 건조, 미세먼지)',
        description:
          '기상정보 시각화 및 기상특보 구분 ',
        link: 'https://github.com/hoheer/weatherINFO_VIisualize',
      },
      {
        name: 'S-DOT - 국가측정망 정확도 비교',
        description:
          '월별 S-DOT센서의 미세먼지 정확도를 국가측정망을 기준으로 계산',
        link: 'https://github.com/hoheer/-SDOT_ACC/blob/main/SDOT_ACC.ipynb',
      },
      {
        name: '서울시 내 녹지, 비녹지간 온도 비교',
        description:
          '녹지에선 도심에 비해 얼마나 낮은 기온을 유지하는지',
        link: 'https://github.com/hoheer/-SDOT_ACC/blob/main/%EC%84%9C%EC%9A%B8%EB%85%B9%EC%A7%80%EC%99%80%20%EB%8F%84%EC%8B%AC%EA%B0%84%20%EC%98%A8%EB%8F%84%EB%B9%84%EA%B5%90/green_area.ipynb',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: '서울시 도시데이터 팀',
        description: `지피지기소프트 인턴 jun 2021 - Present                                                                       
        주요 업무: 도시데이터 활용 분석 과제 진행, 데이터 인포그래픽 제작, DBMS 시스템 장애 처리`,
        link: 'https://smart.seoul.go.kr/board/41/1243/board_view.do',
      },
      {
        name: '상명대학교 연구실',
        description: 'December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Java, Python, R, C, ELK, Android Studio',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Docker, Amazon Web Services (AWS), CI / CD (a Little)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         path: `${__dirname}/content/blog`,
//         name: `blog`,
//       },
//   },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
