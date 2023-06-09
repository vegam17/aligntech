const data = {
  header: {
    title: 'Miguel Vega-Herrera',
    subtitle: 'Software Engineer',
    tagline:
      'Over 7 years of experience leading the design and development of scalable full-stack web-based solutions from initial concept to deployment'
  },
  social: [
    { slug: 'linkedin', url: 'https://www.linkedin.com/in/vegaherreram/' },
    { slug: 'email', url: 'mailto:miguel@vega.dev' },
    { slug: 'phone', url: 'tel:+12525251053' }
  ],
  work: [
    {
      date: {
        from: '2022-03-01',
        to: '2023-04-01'
      },
      heading: 'Senior Frontend Engineer',
      subheading: 'Clever Real Estate',
      details: [
        'Developed a free, fullstack home value estimator tool for home sellers by creating and deploying REST API endpoints, provisioning and managing a serverless Aurora instance, developing frontend assets, and creating and integrating a real-time real estate estimation algorithm with the existing sales funnels using TypeScript, React, and AWS.',
        'Built a scalable Jamstack data store application using DynamoDB that integrated with internal content management and build systems through GraphQL to streamline and improve the performance of the content storage, writing, and editing experience using TypeScript, React, and AWS.',
        'Maintained and enhanced a React-based component library with new UI features and integrations with client and agent matching portals, partner businesses, real estate calculators, data tables, and charts by creating components from Figma sketches and writing tests with Cypress and Jest.'
      ]
    },
    {
      date: {
        from: '2021-01-01',
        to: '2022-03-01'
      },
      heading: 'Software Engineer III',
      subheading: 'Cars, Inc.',
      details: [
        'Enhanced and maintained a PHP and React-based vehicle inventory display system by executing product specs to ship new features and implement performance enhancements and SEO improvements that increased engagement by 35%.',
        'Optimized an advanced automotive dealer web platform by integrating Algolia into inventory search to increase response times for complex queries by 10% and implementing a Redux pattern for improved state management.',
        'Developed a content migration feature to automate the transition from older versions of the inventory display system with multi-step and change reversion functionality using TypeScript and React.'
      ]
    },
    {
      date: {
        from: '2017-08-01',
        to: '2021-01-01'
      },
      heading: 'Senior Web Developer',
      subheading: 'East Carolina University',
      details: [
        'Designed and developed the core functionality for a university-wide CMS used by 150 staff and 200+ students by writing design and product specs, performing needs assessments, and collaborating with senior stakeholders and university teams.',
        'Developed and maintained internal and public-facing tools such as a new URL shortening system, an automated WordPress site deployment system, and enhanced content authoring tools using PHP and MySQL with a 10-person team.',
        'Created a PHP and React-based content migration system used to automate the process of migrating and transforming content from a deprecated CMS to WordPress.'
      ]
    },
    {
      date: {
        from: '2015-05-01',
        to: '2017-08-01'
      },
      heading: 'Software Engineer',
      subheading: 'Consultwebs',
      details: [
        'Developed a fullstack SEO rank monitoring system for 100+ client websites that scraped search results from Google using a headless browser utilizing a proxy API to track daily site rankings over time using TypeScript, React, and Firebase.',
        'Built a medication recall notification platform for patients that consumed REST APIs from Dailymed and the FDA, created a user account/notification system, and integrated with sales funnels with IT and SEO Directors using PHP and MySQL.',
        'Created company-wide financial analytics dashboards for C-level Executives using React that consumed Salesforce APIs and integrated into the admin dashboard to provide bottom-line financial reporting for management.'
      ]
    }
  ],
  education: [
    {
      date: {
        from: '',
        to: '2020-07-01'
      },
      heading: 'M.S. Software Engineering',
      subheading: 'East Carolina University'
    },
    {
      date: {
        from: '',
        to: '2018-05-01'
      },
      heading: 'M.S. Network Technology',
      subheading: 'East Carolina University'
    },
    {
      date: {
        from: '',
        to: '2015-12-01'
      },
      heading: 'B.S. Industrial Technology',
      subheading: 'East Carolina University'
    },
    {
      date: {
        from: '',
        to: '2013-05-01'
      },
      heading: 'A.S. Computer Information Technology',
      subheading: 'Wayne Community College'
    }
  ],
  skills: [
    {
      icon: 'gear',
      heading: 'Engineering',
      description:
        'I ensure a smooth implementation and optimal performance through seamless code design and deployment.',
      details: [
        'Frontend & UI / UX',
        'Backend & Infrastructure',
        'Cloud Architecture',
        'API Design & Implementation',
        'RESTful Web Services'
      ]
    },
    {
      icon: 'leadership',
      heading: 'Leadership',
      description:
        'I excel at taking on new challenges, and thrive when I am able to use my knowledge and expertise to drive decision making. ',
      details: [
        'Strategic Planning & Execution',
        'Project Management',
        'Process Improvement',
        'Training & Development',
        'Coaching & Mentorship'
      ]
    },
    {
      icon: 'code',
      heading: 'Software',
      description:
        'I enjoy crafting code from the ground up, and take pleasure in translating concepts into tangible experiences.',
      details: ['Javascript', 'Typescript', 'Node', 'React', 'AWS']
    }
  ]
};

export default data;
