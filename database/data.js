const Data = {
  courseList: [
    {
      id: "10",
      homePageCourse: {
        title: "NEET",
        imgSrc: "/assets/img/4.course-list/neet.png",
        details: [
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Dropper" },
        ],
        links: {
          explore: "/courseview/10",
          buyNow: "#",
        },
      },

      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/neet.png",
        title2: "JEE Ultimate Crash Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Online/Offline" },
            { icon: "bi bi-check-square", text: "4 Offline Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 2442",
          discountedPrice: "Rs 1799",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "/courseview/10", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
    {
      id: "11",
      homePageCourse: {
        title: "NEET",
        imgSrc: "/assets/img/4.course-list/neet.png",
        details: [
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Dropper" },
        ],
        links: {
          explore: "coure-view.html",
          buyNow: "#",
        },
      },

      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/neet.png",
        title2: "JEE Ultimate Crash Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Online/Offline" },
            { icon: "bi bi-check-square", text: "4 Offline Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 2442",
          discountedPrice: "Rs 1799",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "#", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
    {
      id: "12",
      homePageCourse: {
        title: "NEET",
        imgSrc: "/assets/img/4.course-list/neet.png",
        details: [
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Class 12" },
          { icon: "bi bi-check-square-fill", text: "Dropper" },
        ],
        links: {
          explore: "coure-view.html",
          buyNow: "#",
        },
      },

      courseListPage: {
        imgSrc2: "/assets/img/4.course-list/neet.png",
        title2: "JEE Ultimate Crash Course",
        details2: "Course Details:",
        includedText: {
          left: [
            { icon: "bi bi-check-square", text: "1 year Duration" },
            { icon: "bi bi-check-square", text: "100+ Lectures" },
          ],
          right: [
            { icon: "bi bi-check-square", text: "Online/Offline" },
            { icon: "bi bi-check-square", text: "4 Offline Batches" },
          ],
        },
        price: {
          regularPrice: "Rs 2442",
          discountedPrice: "Rs 1799",
          discountPercentage: "28% OFF",
        },
        links: {
          explore: "#", // Add the appropriate URL
          buyNow: "#", // Add the appropriate URL
        },
      },
    },
  ],
  banner: [
    {
      imgSrc: "/assets/img/2.home/1.slider/img-1.webp",
      altText: "Slide 1",
      link: "/assets/img/2.home/1.slider/img-1.webp",
      class: "active",
    },
    {
      imgSrc: "/assets/img/2.home/1.slider/img-2.webp",
      altText: "Slide 2",
    },
    {
      imgSrc: "/assets/img/2.home/1.slider/img-3.webp",
      altText: "Slide 3",
    },
    {
      imgSrc: "/assets/img/2.home/1.slider/img-4.webp",
      altText: "Slide 4",
    },
  ],
  courseView: [
    {
      courseId: "10",
      title: "Pragati(PCB) Kannada",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Pragati is a paid batch for all the students aiming for Class 12th (NEET/KCET/StateBoard)",
        "The best faculties in India will cover the full syllabus of 12th state board and NEET/KCET syllabus for each subject Physics, Chemistry, and Biology",
      ],
      batchDetails: {
        title: "This Batch Includes",
        items: [
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Classes will be on App or Youtube?",
            answer:
              "All the classes will be available on the app/web version (app link) only.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Who should join the batch?",
            answer:
              "All the classes will be available on the app/web version(app link)only.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "11",
      title: "Pragati(PCB) Kannada",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Pragati is a paid batch for all the students aiming for Class 12th (NEET/KCET/StateBoard)",
        "The best faculties in India will cover the full syllabus of 12th state board and NEET/KCET syllabus for each subject Physics, Chemistry, and Biology",
      ],
      batchDetails: {
        title: "This Batch Includes",
        items: [
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Classes will be on App or Youtube?",
            answer:
              "All the classes will be available on the app/web version (app link) only.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Who should join the batch?",
            answer:
              "All the classes will be available on the app/web version(app link)only.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
    {
      courseId: "12",
      title: "Pragati(PCB) Kannada",
      discountText: "Special Discounted Price",
      price: {
        discountedPrice: "RS 2449",
        regularPrice: "RS 2999",
        discountPercentage: "(17% OFF)",
      },
      content: [
        "Pragati is a paid batch for all the students aiming for Class 12th (NEET/KCET/StateBoard)",
        "The best faculties in India will cover the full syllabus of 12th state board and NEET/KCET syllabus for each subject Physics, Chemistry, and Biology",
      ],
      batchDetails: {
        title: "This Batch Includes",
        items: [
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
          { count: "260+", description: "LECTURE HOURS" },
        ],
      },
      faculty: {
        title: "Our Faculties",
        items: [
          {
            name: "Ram Singh",
            qualification: "MSC in Biochemistry",
            experience: "13 Years",
            imageSrc: "/assets/img/5.course-view/1.faculty.png",
          },
        ],
      },
      faq: {
        title: "FAQ",
        items: [
          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingOne",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseOne",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseOne",
                },
              },
              body: {
                id: "panelsStayOpen-collapseOne",
                class: "accordion-collapse collapse show",
                ariaLabelledby: "panelsStayOpen-headingOne",
              },
            },
            question: "Classes will be on App or Youtube?",
            answer:
              "All the classes will be available on the app/web version (app link) only.",
          },

          {
            accordion: {
              head: {
                id: "panelsStayOpen-headingTwo",
                button: {
                  class: "accordion-button",
                  dataBsTarget: "#panelsStayOpen-collapseTwo",
                  ariaExpanded: "false",
                  ariaControls: "panelsStayOpen-collapseTwo",
                },
              },
              body: {
                id: "panelsStayOpen-collapseTwo",
                class: "accordion-collapse collapse",
                ariaLabelledby: "panelsStayOpen-headingTwo",
              },
            },
            question: "Q.Who should join the batch?",
            answer:
              "All the classes will be available on the app/web version(app link)only.",
          },
        ],
      },

      buyCard: {
        imageSrc: "/assets/img/5.course-view/cta-card.jpeg",
        title: "Special Discount Price",
        prices: {
          discountedPrice: "RS 2449",
          regularPrice: "RS 2999",
          discountPercentage: "17% OFF",
        },
        button: {
          link: "#",
          buttonText: "Buy Now",
        },
      },
    },
  ],
  faculty :[
    {
      name: "Dr. Manoj Kumar",
      position: "Professor of Mathematics",
      experience: "Experience",
      education: [
          "M.S. in Applied Mathematics, University ABC",
          "B.S. in Mathematics, College DEF"
      ],
      imageSrc: "/assets/img/6.faculties/1.png",
      previousPositions: [
        "Ph.D. in Mathematics, University XYZ",
        "Associate Professor, Department of Mathematics, University XYZ (2010-2018)",
        "Assistant Professor, University ABC",
        "Research interests: Number Theory, Algebraic Geometry",
        "Office Hours: Monday and Wednesday, 2:00 PM - 4:00 PM"
    ],
    bio: "Dr. Emily Johnson is a distinguished mathematician with a passion for advancing the field of pure mathematics. Her research, focusing on Number Theory and Algebraic Geometry, has garnered international recognition. Dr. Johnson brings a wealth of teaching experience, having served as an Associate Professor at University XYZ and an Assistant Professor at University ABC. Her commitment to academic excellence and mentorship has positively impacted numerous students throughout her career. In addition to her teaching and research, Dr. Johnson actively contributes to academic conferences and has published several influential papers in renowned mathematics journals"

  },
  ]
};

// menu items
const menuItems = [  
  { id: "iitjee", text: "IIT", link: "coure-view.html" },
  { id: "neet", text: "NEET", link: "coure-view.html" },
  { id: "uppolice", text: "Competition", link: "coure-view.html" },
  {
    id: "school",
    text: "School",
    link: "coure-view.html",
    submenu: [
      { id: "contact1", text: "Contact1", link: "contact.html" },
      { id: "contact2", text: "Contact2", link: "contact.html" },
    ],
  },

  {
    id: "contact",
    text: "Contact",
    link: "contact.html",
  },
];

module.exports = { Data, menuItems };
