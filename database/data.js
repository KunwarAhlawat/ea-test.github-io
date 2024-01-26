const Data = {
  courseList: [
    {
        id : "10",
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
        id : "11",
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
        id : "12",
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
      class : "active"
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
};

module.exports = Data;
