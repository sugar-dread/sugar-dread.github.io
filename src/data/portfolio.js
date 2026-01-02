// Portfolio Data Configuration
// Centralized data management for the portfolio website

export const portfolioData = {
  personal: {
    name: "ANIL SEKER",
    title: "Embedded Software Engineer",
    taglines: ["Programmer", "Solver", "Fast Learner", "Adaptive"],
    photo: "/assets/img/me-photo.jpg",
    about: `I am a highly motivated engineer who has contributed to the success of two advanced high-tech industrial products within the defense industry. My academic journey took me from the cosmopolitan city of Istanbul to my professional work base in Ankara, and I now call Germany home. During my studies, I had the privilege of spending half a year in Ostrava as part of the Erasmus program and had the opportunity to explore numerous European capitals, enriching my international perspective. Personally and professionally, I pride myself on being open-minded and internationally oriented. I possess boundless energy, am intrinsically self-motivated, and am committed to expanding my expertise in software programming. My aspiration is to gain valuable experience within the dynamic environment of international corporations.`,
    resumeUrl: "https://drive.google.com/file/d/1zlr91ZochQxscODAv_0R6QOuKo4e3PsG/view?usp=sharing"
  },
  
  contact: {
    phone: "+49 1522 6199844",
    email: "anilseker89@gmail.com",
    github: "https://github.com/sugar-dread",
    linkedin: "https://www.linkedin.com/in/65ab8348/"
  },

  experiences: [
    {
      id: "ts-consulting",
      company: "T&S Consulting",
      website: "https://www.technologyandstrategy.com/en/",
      logo: "/assets/img/technologyandstrategy.jpg",
      role: "Embedded Software Engineer",
      period: "Feb 2023 - Present",
      location: "Stuttgart, Germany",
      projects: [
        {
          name: "Software testing ECU of automotive product running by QNX OS",
          tools: ["C++", "Python", "VSCode", "QNX", "github", "Conan"]
        },
        {
          name: "Libc++ Qualification for QNX Compiler and Static Analysis Tool Development",
          tools: ["C++", "Python", "Clang Tools", "VSCode", "Shell Scripting", "Linux", "QNX", "Bitbucket"]
        }
      ]
    },
    {
      id: "aselsan",
      company: "ASELSAN",
      website: "https://www.aselsan.com/en",
      logo: "/assets/img/aselsan-logo.jpg",
      role: "Embedded Software Engineer",
      period: "Dec 2015 - Feb 2023",
      location: "Ankara, Turkey",
      projects: [
        {
          name: "5G Base Station Development",
          tools: ["C", "C++", "Python", "CMake", "Embedded Linux", "Vivado", "VSCode", "Yocto", "JSON", "Gitlab", "Shell Scripting", "FPGA", "Xilinx Ultrascale+"]
        },
        {
          name: "IR Thermally Guided Seeker Head Development",
          tools: ["C", "C++", "Python", "OpenCV", "Algorithm Implementation", "Low Speed Bus Protocols", "FPGA SoC"]
        }
      ]
    },
    {
      id: "scopy",
      company: "Scopy",
      website: "#experience",
      logo: null,
      role: "Embedded Software Engineer and Co-Founder",
      period: "Mar 2018 - Nov 2019",
      location: "Ankara, Turkey",
      projects: [
        {
          name: "Convertion of traditional printers to IoT based smart printers",
          tools: ["Python", "Firebase", "RaspberryPi 3"]
        }
      ]
    },
    {
      id: "gunam",
      company: "GUNAM",
      website: "https://odtugunam.org/",
      logo: "/assets/img/gunam-logo.png",
      role: "Project Engineer",
      period: "Jan 2015 - Dec 2015",
      location: "Ankara, Turkey",
      projects: [
        {
          name: "c-Si Solar Cell production line installment",
          tools: ["Semi-conductor theory in detail", "documentation", "high-tech production machines"]
        }
      ]
    },
    {
      id: "bosch",
      company: "Bosch Automotive After Market",
      website: "https://www.boschaftermarket.com/tr/tr",
      logo: "/assets/img/bosch-logo.png",
      role: "Part Time Student",
      period: "Aug 2013 - July 2014",
      location: "Istanbul, Turkey",
      projects: [
        {
          name: "Take a role in the support of distributors which sells Bosch Automotive products in Turkey market.",
          tools: []
        }
      ]
    }
  ],

  skills: [
    { name: "C++", icon: "/assets/img/cpp-logo.png" },
    { name: "C", icon: "/assets/img/c-logo.png" },
    { name: "Python", icon: "/assets/img/python-logo-1-300x300.jpg" },
    { name: "VHDL", icon: "/assets/img/vhdl-logo.jpg" },
    { name: "Linux", icon: "/assets/img/linux-logo.png" },
    { name: "CMake", icon: "/assets/img/cmake-logo.png" },
    { name: "Clang", icon: "/assets/img/clang-logo.png" },
    { name: "Shell Scripting", icon: "/assets/img/shell-logo-1-300x300.jpg" },
    { name: "Google Test", icon: "/assets/img/googletest-logo.png" },
    { name: "Yocto Project", icon: "/assets/img/yocto-logo.png" },
    { name: "Git/Github/Gitlab", icon: "/assets/img/git-logo.png" },
    { name: "VSCode", icon: "/assets/img/vscode-logo.png" }
  ],

  projects: [
    {
      id: "goods-tracker",
      title: "Goods Tracking App",
      description: "A Goods tracking from Yahoo Finance app in C++.",
      image: "/assets/img/good-tracker.jpg",
      tools: ["C++", "SQLite", "Unit Testing", "CMake", "Doxygen"],
      features: [
        "Save your goods into SQLite database.",
        "Update the price of goods from Yahoo finance API.",
        "Add/remove goods.",
        "Keep records total price of the goods."
      ],
      github: "https://github.com/sugar-dread/Goods_Tracking"
    }
  ],

  education: [
    {
      id: "msc-itu",
      institution: "Istanbul Technical University",
      website: "https://ee.itu.edu.tr/",
      degree: "Master of Science in Electrical And Electronics Engineering",
      location: "Istanbul, Turkey",
      graduation: "July 2020",
      gpa: "3.11/4.00",
      thesis: {
        title: "Application Specific Instruction Set Extension of NIOS II Processor",
        url: "https://web.itu.edu.tr/~orssi/thesis/2020/AnilSeker_tez.pdf"
      }
    },
    {
      id: "bsc-itu",
      institution: "Istanbul Technical University",
      website: "https://ee.itu.edu.tr/",
      degree: "Bachelor Science in Faculty of Electrical And Electronics Engineering",
      location: "Istanbul, Turkey",
      graduation: "July 2014",
      gpa: "3.14/4.00"
    },
    {
      id: "erasmus-tuo",
      institution: "Technical University of Ostrava",
      website: "https://www.vsb.cz/en",
      degree: "Erasmus Exchange Program",
      location: "Ostrava, Czechia",
      gpa: "3.62/4.00"
    }
  ],

  publications: [
    {
      id: "pub1",
      title: "Instruction Set Extension of NIOS II Processor For Floating-Point HOG Description and Implementation on FPGA",
      url: "https://www.researchgate.net/publication/338871950_INSTRUCTION_SET_EXTENSION_OF_NIOS_II_FOR_FLOATING_-POINT_HOG_DESCRIPTION_AND_IMPLEMENTATION_ON_AN_FPGA"
    },
    {
      id: "pub2",
      title: "AX.25 Protocol Compatible Reconfigurable 2/4 FSK Modulator Design for nano/micro-satellites",
      url: "https://ieeexplore.ieee.org/document/6419235?tp=&arnumber=6419235&queryText%3Dayranci="
    }
  ],

  certificates: [
    { name: "C++ For Beginners(200 Hours)", url: "http://plepa.com/" },
    { name: "Xilinx Embedded Design with Petalinux Tools", url: "https://doulos.com/training/fpga-and-hardware-design/xilinx/xilinx-embedded-design-with-petalinux-tools/" },
    { name: "Xilinx Zynq UltraScale+ MPSoC for the Software Developer", url: "https://www.doulos.com/training/fpga-and-hardware-design/xilinx/xilinx-zynq-ultrascaleplus-mpsoc-for-the-software-developer/" },
    { name: "Embedded Design For Intel SoC FPGAs", url: "https://www.doulos.com/training/fpga-and-hardware-design/intel-altera/embedded-design-for-intel-soc-fpgas/" },
    { name: "Developing with Embedded Linux", url: "https://www.doulos.com/training/arm-and-embedded-software/linuxyocto/developing-with-embedded-linux/" },
    { name: "C++ programming for Beginners", url: "https://www.udemy.com/course/beginning-c-plus-plus-programming/" },
    { name: "C programming for Beginners", url: "https://www.udemy.com/course/c-programming-for-beginners-/" },
    { name: "C programming for Advanced", url: "https://www.udemy.com/course/advanced-c-programming-course/" },
    { name: "Build Remote Procedure Calls", url: "https://www.udemy.com/course/linuxrpc/" },
    { name: "Embedded Linux Step by Step using BeagleBone Black", url: "https://www.udemy.com/course/embedded-linux-step-by-step-using-beaglebone/" },
    { name: "Embedded Linux Using Yocto", url: "https://www.udemy.com/course/embedded-linux-using-yocto/" },
    { name: "Linux Inter Process Communication(IPC)", url: "https://www.udemy.com/course/linuxipc/" },
    { name: "Linux System Programming Techniques&Concepts", url: "https://www.udemy.com/course/advance-programming-concepts/" },
    { name: "Learn Python Programming Masterclass", url: "https://www.udemy.com/course/python-the-complete-python-developer-course/" },
    { name: "Python GUI Programming Using PyQt5", url: "https://www.udemy.com/course/python-gui-programming-using-pyqt5/" },
    { name: "Become a Professional Python Programmer", url: "https://www.udemy.com/course/become-a-professional-python-programmer/" },
    { name: "Python 3: Deep Dive", url: "https://www.udemy.com/course/python-3-deep-dive-part-1/" }
  ],

  languages: [
    { language: "Turkish", level: "Native" },
    { language: "English", level: "Professional" },
    { language: "German", level: "Beginner" }
  ]
};
