// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Olexy',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ на місяць',
  address: 'Ukrane, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com'
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedIn: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

//========================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {

    page: {
      title: 'Resume | Summary',

    },

    header,
    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
        experience in development.Whenever I start to
        work on a new project I learn the domain and try
        to understand the idea of the project.Good team
        player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',

        text: `Pet project for parsing sport betting data from
        different platforms(odds) and sport statistics
          (tournament position, goals etc), analyzing by
        simple mathematics models and preparing
        probability for such events like: money line -
        first win / draw / second win, totals etc.`,
      },
    },
    footer,


    // ↙ сюди вводимо JSON дані
  })
})

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {

    page: {
      title: 'Resume | Skills',

    },

    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 9,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 9,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },

      ],

      hobbies: [
        {
          name: 'Yoga',
          isMain: true,
        },
        {
          name: 'Car sporting',
          isMain: true,
        },
        {
          name: 'Photography',
          isMain: false,
        },
        {
          name: 'Mechanics',
          isMain: true,
        },
        {
          name: 'Knitting',
          isMain: false,
        },
      ],

    },
    footer,


    // ↙ сюди вводимо JSON дані
  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {

    page: {
      title: 'Resume | Education',

    },

    header,
    main: {
      education: [
        {
          name: 'Міжнародний науково-технічний університет імені академіка Юрія Бугая (МНТУ)',
          isEnd: true,
        },
        {
          name: 'IT STEP University',
          isEnd: true,
        },
        {
          name: 'IT-BRAINS school',
          isEnd: false,
        },
        {
          name: 'Запорізький національний університет (ЗНУ)',
          isEnd: true,
        },
        {
          name: 'Інститут післядипломної освіти КПІ ім. Ігоря Сікорського',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'ЗНУПО',
          id: 4356,
        },
        {
          name: 'KDREW',
          id: 8765,
        },
        {
          name: 'LKJH',
          id: 2347,
        },

      ],

    },
    footer,


    // ↙ сюди вводимо JSON дані
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'http://it-brains.com.ua/',
          },


          duration: {
            from: '10.10.2021',
            to: '10.08.2022',
          },
          projectAmount: '3',
          projects: [
            {
              name: 'Resume',
              url: 'http://resume.com.ua/',
              about: 'High-load application for searching exercises',
              stacks: [
                {
                  name: 'React.js',

                },
                {
                  name: 'HTML/CSS',

                },
                {
                  name: 'Node.js',

                },
              ],
              stackAmount: '4',
              awards: [
                {
                  name: 'Award 1',
                },
                {
                  name: 'Award 2',
                },
              ],
              awardAmount: '8',
            },
          ],
        },

      ],

    },

    footer,


    // ↙ сюди вводимо JSON дані
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/person', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('person', {
    layout: 'person',

    person: {
      name: 'Emma Johnson',
      age: 32,
      gender: 'Female',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      education: [
        {
          degree: 'Bachelor of Science',
          major: 'Computer Science',
          university:
            'Massachusetts Institute of Technology',
          graduationYear: 2012,
        },
      ],
      workExperience: [
        {
          company: 'Google',
          title: 'Software Engineer',
          startDate: '2012-06-01',
          endDate: '2016-12-31',
          responsibilities: [
            {
              name: 'Developed new features for Google Maps',
              isName: 'Worked on improving search algorithms',
            },

          ],
          year_founded: 1990,
          industry: 'Technology',
          employees: [
            {
              name: 'John Smith',
              position: 'CEO',
              department: 'Executive',
              projects: [
                {
                  name: 'Project Alpha',
                  description:
                    'Developing new software platform',
                  status: 'In Progress',
                  teams: [
                    {
                      team_name: 'Awesome Team',
                      team_leader: {
                        name: 'John Smith',
                        title: 'Team Leader',
                        email: 'john.smith@example.com',
                      },
                      team_members: [
                        {
                          name: 'Alice Johnson',
                          title: 'Software Engineer',
                          email:
                            'alice.johnson@example.com',
                          skills: ['Java', 'Python', 'SQL'],
                          projects: [
                            {
                              name: 'Project A',
                              description:
                                'Lorem ipsum dolor sit amet',
                              technologies: [
                                'Java',
                                'Spring Framework',
                              ],
                              team_members: [
                                {
                                  name: 'Bob Lee',
                                  title:
                                    'Software Engineer',
                                },
                                {
                                  name: 'Cindy Chen',
                                  title: 'UI Designer',
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
