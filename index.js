var suggestions = document.getElementById('suggestions');
var search = document.getElementById('search');

if (search !== null) {
  document.addEventListener('keydown', inputFocus);
}

function inputFocus(e) {
  if (e.ctrlKey && e.key === '/' ) {
    e.preventDefault();
    search.focus();
  }
  if (e.key === 'Escape' ) {
    search.blur();
    suggestions.classList.add('d-none');
  }
}

document.addEventListener('click', function(event) {

  var isClickInsideElement = suggestions.contains(event.target);

  if (!isClickInsideElement) {
    suggestions.classList.add('d-none');
  }

});

/*
Source:
  - https://dev.to/shubhamprakash/trap-focus-using-javascript-6a3
*/

document.addEventListener('keydown',suggestionFocus);

function suggestionFocus(e) {
  const suggestionsHidden = suggestions.classList.contains('d-none');
  if (suggestionsHidden) return;

  const focusableSuggestions= [...suggestions.querySelectorAll('a')];
  if (focusableSuggestions.length === 0) return;

  const index = focusableSuggestions.indexOf(document.activeElement);

  if (e.key === "ArrowUp") {
    e.preventDefault();
    const nextIndex = index > 0 ? index - 1 : 0;
    focusableSuggestions[nextIndex].focus();
  }
  else if (e.key === "ArrowDown") {
    e.preventDefault();
    const nextIndex= index + 1 < focusableSuggestions.length ? index + 1 : index;
    focusableSuggestions[nextIndex].focus();
  }

}

/*
Source:
  - https://github.com/nextapps-de/flexsearch#index-documents-field-search
  - https://raw.githack.com/nextapps-de/flexsearch/master/demo/autocomplete.html
*/

(function(){

  var index = new FlexSearch.Document({
    tokenize: "forward",
    cache: 100,
    document: {
      id: 'id',
      store: [
        "href", "title", "description"
      ],
      index: ["title", "description", "content"]
    }
  });


  // Not yet supported: https://github.com/nextapps-de/flexsearch#complex-documents

  var docs = [
    {
        id: 0,
        href: "https://openfoam-parallelisation-course.github.io/workshop/prologue/prereqs/",
        title: "Prerequisites for optimal experience",
        description: "Prerequisites for optimal experience during the learning process offered by the OpenFOAM parallelization workshop.",
        content: "\u003cp\u003ePlease make sure you are familiar with the following concepts before you start (it\u0026rsquo;s not a lot if I can fit it in a single diagram) so you\ndon\u0026rsquo;t feel overwhelmed during the hands-on sessions. Watching someone else coding in a live session with their own environment and\nworkflow can be confusing.\u003c/p\u003e\n\u003cdiv class=\"mermaid bg-light text-center\"\u003e\n    \n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%%\nflowchart LR\n    A((\u0026#34;\u0026amp;nbsp; \u0026amp;nbsp; \u0026amp;nbsp; \u0026#34;))\n    B(\u0026#34;OpenFOAM build system\u0026#34;)\n    C(\u0026#34;C\u0026#43;\u0026#43;\u0026#34;)\n    D(\u0026#34;MPI\u0026#34;)\n    E(\u0026#34;CMD\u0026#34;)\n    F(\u0026#34;Bash\u0026#34;)\n    G(\u0026#34;Git\u0026#34;)\n    H(\u0026#34;HPC Environment\u0026#34;)\n    I(\u0026#34;Make/files\u0026#34;)\n    J(\u0026#34;Make/options\u0026#34;)\n    K(\u0026#34;wmake\u0026#34;)\n    L(\u0026#34;Github account\u0026#34;)\n    M(\u0026#34;IDE\u0026#34;)\n    N(\u0026#34;VSCode\u0026#34;)\n    O(\u0026#34;Vim...\u0026#34;)\n\n    A --- C \u0026amp; B \u0026amp; E\n    E --- F \u0026amp; G \u0026amp; H\n    B -.- I \u0026amp; J \u0026amp; K\n    D \u0026amp; L \u0026amp; M --- A\n    O \u0026amp; N -.- M\n\n    classDef graphDate fill-opacity:0.15,color:#E1B028\n    classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e\n    class A,B,C,E,F,G,L date\n\u003c/div\u003e\n\n\u003ch2 id=\"required-skills-and-knowledge\"\u003eRequired skills and knowledge \u003ca href=\"#required-skills-and-knowledge\" class=\"anchor\" aria-hidden=\"true\"\u003e#\u003c/a\u003e\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eBasic C++ programming knowledge (This is a \u003cstrong\u003emust\u003c/strong\u003e, at least you\u0026rsquo;ve worked with templates before).\u003c/li\u003e\n\u003cli\u003eBeing familiar with OpenFOAM environment and build system (At least, you\u0026rsquo;ve compiled a solver or a library before).\u003c/li\u003e\n\u003cli\u003eMPI knowledge is optional.\u003c/li\u003e\n\u003c/ul\u003e\n\u003ch2 id=\"required-tools\"\u003eRequired tools \u003ca href=\"#required-tools\" class=\"anchor\" aria-hidden=\"true\"\u003e#\u003c/a\u003e\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003eAn OpenFOAM installation on a recent Linux distribution (refer to \u003ca href=\"/workshop/hands-on/openfoam-env-101/\"\u003eOpenFOAM Environment 101\u003c/a\u003e\nfor recommended setup).\u003c/li\u003e\n\u003cli\u003eKnowledge of the common command line interface (Bash, Git) is recommended.\u003c/li\u003e\n\u003cli\u003eA Github Account (needed to view video content on this website).\u003c/li\u003e\n\u003cli\u003eAn IDE (configured for C++ development) is optional but recommended (or use Github CodeSpaces).\u003c/li\u003e\n\u003c/ul\u003e\n"
      },
    {
        id: 1,
        href: "https://openfoam-parallelisation-course.github.io/workshop/prologue/introduction/",
        title: "Introduction",
        description: "A few words motivating the 'parallelization in OpenFOAM' workshop and providing an overview of parallelization landscape in high performance computing.",
        content: ""
      },
    {
        id: 2,
        href: "https://openfoam-parallelisation-course.github.io/workshop/prologue/agenda/",
        title: "Agenda for upcoming training",
        description: "Take a look at the big picture of what this OpenFOAM parallelization training has to provide.",
        content: ""
      },
    {
        id: 3,
        href: "https://openfoam-parallelisation-course.github.io/workshop/prologue/get-ready/",
        title: "Get ready",
        description: "A recap of the most basic concepts around parallel programming in CFD Software.",
        content: ""
      },
    {
        id: 4,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/01-p2p-comms/",
        title: "Point-to-Point communications - general introdution",
        description: "",
        content: ""
      },
    {
        id: 5,
        href: "https://openfoam-parallelisation-course.github.io/workshop/prologue/",
        title: "Prologue",
        description: "",
        content: ""
      },
    {
        id: 6,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/p2p-comms-blocking/",
        title: "Blocking P2P comms",
        description: "",
        content: ""
      },
    {
        id: 7,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/p2p-comms-nonblocking/",
        title: "Non-Blocking P2P comms",
        description: "",
        content: ""
      },
    {
        id: 8,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/02-collective-comms/",
        title: "Collective communications - general introdution",
        description: "",
        content: ""
      },
    {
        id: 9,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/collective-comms-api/",
        title: "Collective comms API",
        description: "",
        content: ""
      },
    {
        id: 10,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/03-send-custom-data/",
        title: "How do I send my own data?",
        description: "",
        content: ""
      },
    {
        id: 11,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/common-issues-sending-custom-data/",
        title: "Send custom data - common issues",
        description: "",
        content: ""
      },
    {
        id: 12,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/04-advanced-topics/",
        title: "Application examples and advanced topics",
        description: "",
        content: ""
      },
    {
        id: 13,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/05-sources/",
        title: "Sources and further reading",
        description: "",
        content: "\u003col\u003e\n\u003cli\u003eC. Augustine. Introduction to Parallel Programming with MPI and OpenMP. \u003cem\u003eSource of the great ’pit stops’ analogy. Oct. 2018\u003c/em\u003e. url:\n\u003ca href=\"https://princetonuniversity.github.io/PUbootcamp/sessions/parallel-programming/Intro_PP_bootcamp_2018.pdf\"\u003ehttps://princetonuniversity.github.io/PUbootcamp/sessions/parallel-programming/Intro_PP_bootcamp_2018.pdf\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003eFabio Baruffa. Improve MPI Performance by Hiding Latency. July 2020. url:\n\u003ca href=\"https://www.intel.com/content/www/us/en/developer/articles/technical/overlap-computation-communication-hpc-applications.html\"\u003ehttps://www.intel.com/content/www/us/en/developer/articles/technical/overlap-computation-communication-hpc-applications.html\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003ePavanakumar Mohanamuraly, Jan Christian Huckelheim, and Jens-Dominik Mueller.\n“Hybrid Parallelisation of an Algorithmically Differentiated Adjoint Solver”. \u003cem\u003eIn:\nProceedings of the VII European Congress on Computational Methods in Applied\nSciences and Engineering (ECCOMAS Congress 2016). Institute of Structural Analysis\nand Antiseismic Research School of Civil Engineering National Technical University of\nAthens (NTUA) Greece, 2016. doi: 10.7712/100016.1884.10290\u003c/em\u003e. url:\n\u003ca href=\"https://doi.org/10.7712/100016.1884.10290\"\u003ehttps://doi.org/10.7712/100016.1884.10290\u003c/a\u003e.\u003c/li\u003e\n\u003cli\u003eB. Steinbusch. Introduction to Parallel Programming with MPI and OpenMP. Mar. 2021. url:\n\u003ca href=\"https://www.fz-uelich.de/SharedDocs/Downloads/IAS/JSC/EN/slides/mpi/mpi-openmp-handouts.pdf?__blob=publicationFile\"\u003ehttps://www.fz-uelich.de/SharedDocs/Downloads/IAS/JSC/EN/slides/mpi/mpi-openmp-handouts.pdf?__blob=publicationFile\u003c/a\u003e.\u003c/li\u003e\n\u003cli\u003eEuroCC National Competence Center Sweden. Intermediate MPI. May 2022. url:\n\u003ca href=\"https://enccs.github.io/intermediate-mpi/\"\u003ehttps://enccs.github.io/intermediate-mpi/\u003c/a\u003e.\u003c/li\u003e\n\u003c/ol\u003e\n"
      },
    {
        id: 14,
        href: "https://openfoam-parallelisation-course.github.io/workshop/chapters/",
        title: "Lecture chapters",
        description: "",
        content: ""
      },
    {
        id: 15,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/openfoam-env-101/",
        title: "OpenFOAM environment 101",
        description: "",
        content: "\u003cp\u003eYou need to be on a Linux machine somehow.\u003c/p\u003e\n\u003cp\u003eCommon options if you\u0026rsquo;re running on a Linux OS (or macOS, choose what suits you):\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href=\"/workshop/hands-on/openfoam-in-containers/\"\u003eOpenFOAM in a Docker container\u003c/a\u003e (Preferred method).\u003c/li\u003e\n\u003cli\u003eA local installation of OpenFOAM.\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"\"\u003eGithub\u0026rsquo;s Codespace\u003c/a\u003e for a fully remote experience (which uses the same Docker image and the unit testing framework).\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eIf your main OS is Windows, you have a couple of options (Again, choose whatever you\u0026rsquo;re comfortable with):\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href=\"\"\u003eOpenFOAM in a Docker container\u003c/a\u003e (Preferred method).\u003c/li\u003e\n\u003cli\u003eInstall a Linux virtual machine.\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"\"\u003eGithub\u0026rsquo;s Codespace\u003c/a\u003e for a fully remote experience (which uses the same Docker image and the unit testing framework).\u003c/li\u003e\n\u003cli\u003eUse \u003ca href=\"http://bluecfd.github.io/Core/\"\u003eBlueCFD\u003c/a\u003e type of deal, although then I wouldn\u0026rsquo;t be able to help much if you run into MPI problems.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eIn order to optimize your experience during the hands-on sessions, I ask you to go through a quick pre-flight checklist:\u003c/p\u003e\n\u003col start=\"0\"\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Register to the \u003ca href=\"\"\u003eWorkshop\u0026rsquo;s event\u003c/a\u003e and \u003ca href=\"/login\"\u003elogin\u003c/a\u003e here with your Github account.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Set up a Text Editor or an IDE for OpenFOAM development.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Have a working OpenFOAM installation.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Clone our unit-testing framework and make sure it works for you.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this).\u003c/li\u003e\n\u003c/ol\u003e\n"
      },
    {
        id: 16,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/openfoam-in-containers/",
        title: "OpenFOAM in containers",
        description: "",
        content: "\u003cp\u003eThere are many OpenFOAM images for all sorts of containerization systems out there. However, my images,\nwhich are hosted at \u003ca href=\"https://ghcr.io\"\u003eghcr.io\u003c/a\u003e, are specifically built to participate in MPI communications:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href=\"https://github.com/users/FoamScience/packages/container/jammy-openfoam/44898482?tag=v2206\"\u003eghcr.io/foamscience/jammy-openfoam:v2206\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://github.com/users/FoamScience/packages/container/jammy-openfoam/44946661?tag=fe5\"\u003eghcr.io/foamscience/jammy-openfoam:fe5\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://github.com/users/FoamScience/packages/container/jammy-openfoam/44886760?tag=9\"\u003eghcr.io/foamscience/jammy-openfoam:9\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eYou can fire up a quick local container with the following Shell command (Assuming Docker is installed - see \u003ca href=\"https://get.docker.com/\"\u003eget.docker.com\u003c/a\u003e):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker run  \u003cspan class=\"se\"\u003e\\\n\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"se\"\u003e\u003c/span\u003e    --rm \u003cspan class=\"sb\"\u003e`\u003c/span\u003e\u003cspan class=\"c1\"\u003e# Disposable container, destroyed as soon as you leave it.` \\\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e    -it \u003cspan class=\"sb\"\u003e`\u003c/span\u003e\u003cspan class=\"c1\"\u003e# Interactive with a tty so you can run a shell` \\\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e    --name openfoam \u003cspan class=\"sb\"\u003e`\u003c/span\u003e\u003cspan class=\"c1\"\u003e# Container name` \\\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e    ghcr.io/foamscience/jammy-openfoam:v2206 \u003cspan class=\"sb\"\u003e`\u003c/span\u003e\u003cspan class=\"c1\"\u003e# Docker image` \\\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e    bash \u003cspan class=\"sb\"\u003e`\u003c/span\u003e\u003cspan class=\"c1\"\u003e# Command to run in the container, default: SSH server`\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cp\u003eThis command will throw you into a container which has OpenFOAM v2206 installed,\nacting as the \u003ccode\u003eopenfoam\u003c/code\u003e user which is all set to run OpenFOAM simulations. The default working directory you\nstart with is \u003ccode\u003e~/data\u003c/code\u003e.\u003c/p\u003e\n\u003cp\u003eRefer to \u003ca href=\"https://docs.docker.com/get-started/docker_cheatsheet.pdf\"\u003eDocker CLI cheatsheet\u003c/a\u003e if it\u0026rsquo;s your first time\ninteracting with Docker.\u003c/p\u003e\n\u003cp\u003eAt this point; I assume you have easy access to an OpenFOAM installation.\u003c/p\u003e\n\u003col start=\"0\"\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Register to the \u003ca href=\"\"\u003eWorkshop\u0026rsquo;s event\u003c/a\u003e and \u003ca href=\"/login\"\u003elogin\u003c/a\u003e here with your Github account.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Set up a Text Editor or an IDE for OpenFOAM development.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Have a working OpenFOAM installation.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Clone our unit-testing framework and make sure it works for you.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this).\u003c/li\u003e\n\u003c/ol\u003e\n"
      },
    {
        id: 17,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/using-foamut/",
        title: "A unit-testing framework to do the exercises",
        description: "",
        content: "\u003cdiv class=\"text-center\"\u003e\n\u003ca href=\"https://github.com/FoamScience/foamUT\"\u003e\u003cimg src=\"https://github-link-card.s3.ap-northeast-1.amazonaws.com/FoamScience/foamUT.png\" width=\"560px\"\u003e\u003c/a\u003e\n\u003cdiv class=\"text-center\" style=\"padding-left=-10px;\"\u003e\n\u003cimg src=\"https://github.com/FoamScience/foamUT/blob/master/demo.gif?raw=true\"/\u003e\n\u003c/div\u003e\n\u003c/div\u003e\n\u003cbr\u003e\n\u003cul\u003e\n\u003cli\u003eWe\u0026rsquo;ll be using the unit-testing framework as a black-box to verify the correctness of your code in hands-on sessions.\n\u003cul\u003e\n\u003cli\u003eYou only need to change one file per activity; Mostly\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003eExercises are provided as test units for convenient interaction with the code (compile-run-debug cycles).\u003c/li\u003e\n\u003cli\u003eClone \u003ca href=\"https://github.com/FoamScience/foamUT\"\u003ethis repo\u003c/a\u003e and run \u003ca href=\"https://github.com/FoamScience/foamUT/blob/master/Alltest\"\u003e\u003ccode\u003eAlltest\u003c/code\u003e\u003c/a\u003e using your local OpenFOAM installation to make sure everything works as expected.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eThe following diagram depicts the general workflow of solving the exercises proposed during the hands-on sessions:\u003c/p\u003e\n\u003cdiv class=\"mermaid bg-light text-center\"\u003e\n    \n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%%\nflowchart TD\n    subgraph one[\u0026lt;b\u0026gt;foamUT repo\u0026lt;/b\u0026gt;]\n    subgraph dum1[ ]\n    A(\u0026#34;Alltest\u0026#34;)\n    G(\u0026#34;Catch2\u0026#34;)\n    F[Compile and test\u0026lt;br\u0026gt;everything in tests\u0026lt;br\u0026gt;on cases]\n    H(\u0026#34;tests\u0026#34;)\n    I(\u0026#34;cases\u0026#34;)\n    E[Unit-tests backend]\n    end\n    end\n    subgraph two[\u0026lt;b\u0026gt;Exercises repo\u0026lt;/b\u0026gt;]\n    subgraph dum2[ ]\n    B(\u0026#34;exercises/exTest.C\u0026#34;)\n    J(\u0026#34;Make\u0026#34;)\n    C[This is the file you modify]\n    D[Make dir. for your\u0026lt;br\u0026gt; OpenFOAM fork]\n    end\n    end\n\n    B ==\u0026gt; |Symlink/Copy into tests| H\n    C -.- B \n    D -.- J\n\n    G -.- E\n    A -.- F\n    A --\u0026gt; G\n    F -.-\u0026gt; H\n    F -.-\u0026gt; I\n\n    classDef Title fill:none,stroke:none;\n    class dum1,dum2 Title\n\n    classDef graphDate fill-opacity:0.15,color:#E1B028\n    classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e\n    class one,two graphDate\n    class A,B,G,H,I,J date\n\u003c/div\u003e\n\n\u003cp\u003eIn short, the \u003ccode\u003eAlltest\u003c/code\u003e script runs all unit tests found in \u003ca href=\"https://github.com/FoamScience/foamUT/tree/master/tests\"\u003e\u003ccode\u003etests\u003c/code\u003e\u003c/a\u003e directory on all OpenFOAM cases found in \u003ca href=\"https://github.com/FoamScience/foamUT/tree/master/cases\"\u003e\u003ccode\u003ecases\u003c/code\u003e\u003c/a\u003e directory. So, to run your own tests:\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Clone the repos\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"nb\"\u003ecd\u003c/span\u003e /tmp\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003egit clone https://github.com/FoamScience/foamUT foamUT\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003egit clone \u0026lt;Exercise-repo-URL\u0026gt; Ex01\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Replace sample tests with the exercise code\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"nb\"\u003ecd\u003c/span\u003e foamUT\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003erm -rf tests/exampleTests\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003eln -s \u003cspan class=\"nv\"\u003e$PWD\u003c/span\u003e/../Ex01/exercises tests/ex01\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Compile and run tests\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e./Alltest\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cdetails\u003e\n  \u003csummary\u003eImportant notes about using foamUT\u003c/summary\u003e\n  \u003cul\u003e\n\u003cli\u003eIf you want to see FATAL ERRORS (As if running a regular solver), put \u003ccode\u003eFoam::FatalError.dontThrowExceptions();\u003c/code\u003e at the start of the test case.\u003c/li\u003e\n\u003cli\u003eYour code is supposed to work (all tests pass) both in serial and in parallel.\u003c/li\u003e\n\u003cli\u003eThe unit tests are timed-out in \u003ccode\u003eAlltest\u003c/code\u003e (change \u003ca href=\"https://github.com/FoamScience/foamUT/blob/4b9da1eba5713c7e74e5b553a79614ed7e1c7d91/Alltest#L30\"\u003e\u003ccode\u003etimeOut\u003c/code\u003e\u003c/a\u003e if it\u0026rsquo;s too quick for you).\u003c/li\u003e\n\u003cli\u003eThe unit tests run in \u003ccode\u003e/dev/shm\u003c/code\u003e by default; you can change this in \u003ca href=\"https://github.com/FoamScience/foamUT/blob/4b9da1eba5713c7e74e5b553a79614ed7e1c7d91/Alltest#L28\"\u003e\u003ccode\u003eAlltest\u003c/code\u003e\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003eAll cases run on 4 processors but tests may run on specific processors only.\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/details\u003e\n\n\u003cp\u003eIf your machine has less than 4 CPUs, you need to enable MPI oversubscribing; otherwise your parallel tests will fail\n(This is useful for example if you\u0026rsquo;re using Github codespaces or running CI jobs on Github machines which only have 2 CPUs):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003esed -i \u003cspan class=\"s1\"\u003e\u0026#39;s/mpirun/mpirun --oversubscribe/g\u0026#39;\u003c/span\u003e Alltest\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cdiv class=\"alert alert-doks d-flex\" role=\"alert\"\u003e\n  \u003cdiv class=\"flex-shrink-1 alert-icon\"\u003e👉 \u003c/div\u003e\n  \n    \n      \u003cdiv class=\"w-100\"\u003e Head out to \u003ca href=\"https://github.com/FoamScience/foamUT/wiki\"\u003ethe wiki page\u003c/a\u003e if you\u0026rsquo;re interested in the Unit-testing framework.\u003c/div\u003e\n    \n  \n\u003c/div\u003e\n\n\u003cp\u003eAt this point, only one task remains:\u003c/p\u003e\n\u003col start=\"0\"\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Register to the \u003ca href=\"\"\u003eWorkshop\u0026rsquo;s event\u003c/a\u003e and \u003ca href=\"/login\"\u003elogin\u003c/a\u003e here with your Github account.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Set up a Text Editor or an IDE for OpenFOAM development.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Have a working OpenFOAM installation.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Clone our unit-testing framework and make sure it works for you.\u003c/li\u003e\n\u003cli\u003e\u003cinput disabled=\"\" type=\"checkbox\"\u003e Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this).\u003c/li\u003e\n\u003c/ol\u003e\n"
      },
    {
        id: 18,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/github-classroom/",
        title: "Github classroom for the exercises",
        description: "",
        content: "\u003cp\u003eAll activities during the workshop\u0026rsquo;s hands-on sessions will be prepared as assignments. This page holds the complete list\nof offered activities/exercises.\u003c/p\u003e\n\u003cdiv class=\"alert alert-doks d-flex\" role=\"alert\"\u003e\n  \u003cdiv class=\"flex-shrink-1 alert-icon\"\u003e👉 \u003c/div\u003e\n  \n    \n      \u003cdiv class=\"w-100\"\u003e Each assignment will create a separate \u003cstrong\u003eprivate repository\u003c/strong\u003e for you at this \u003ca href=\"https://github.com/OpenFOAM-Parallelisation-Course\"\u003eGithub organisation\u003c/a\u003e\u003c/div\u003e\n    \n  \n\u003c/div\u003e\n\n\u003cp\u003eFirst, let\u0026rsquo;s start by the introductory ones:\u003c/p\u003e\n\u003cdiv class='card-bar'\u003e\u003c/div\u003e\n\u003cdiv class='card-body'\u003e\n    \u003ca href='https://classroom.github.com/a/etAdxF2O' class='btn btn-primary w-40' style='float:right;'\u003e\n        Accept assignment\n    \u003c/a\u003e\n    \u003cdiv class='btn w-40 btn-toggle' style='float:right; margin-right:10px;'\u003e\n        Optional\u003c/div\u003e\n    \u003ch3 class='h3 card-title'\u003e\n        Git \u0026amp; Github Fundamentals\u003c/h3\u003e\n    \u003cp class='card-text'\u003e\n        \nA basic fast-paced course to get you familiarized with Git and Github in general - Provided by Github Classrooms. Please\ngo through the README.md file after you accept this assignment if it's your first time using Git/Github.\n\u003c/p\u003e\n    \u003cform class='row gx-2 gy-3 email-form' method='post' name='newsletter' onsubmit='subscribeButton.disabled=!0'\u003e\n        \u003cinput type='hidden' name='form-name' value='newsletter'\u003e\n        \u003cdiv class='col-md-4'\u003e\n        \u003c/div\u003e\n    \u003c/form\u003e\n\u003c/div\u003e\n\n\u003cdiv class='card-bar'\u003e\u003c/div\u003e\n\u003cdiv class='card-body'\u003e\n    \u003ca href='#' class='btn btn-primary w-40' style='float:right;'\u003e\n        Accept assignment\n    \u003c/a\u003e\n    \u003cdiv class='btn w-40 btn-outline-primary ' style='float:right; margin-right:10px;'\u003e\n        Recommended \u003c/div\u003e\n    \u003ch3 class='h3 card-title'\u003e\n        Introducing foamUT to solve future exercises\u003c/h3\u003e\n    \u003cp class='card-text'\u003e\n        \nA basic exercise to get you familiarized with the recommended workflow of solving future exercises.\nIt'll walk you through changing exercise code and making all of its tests pass in serial and parallel.\n\u003c/p\u003e\n    \u003cform class='row gx-2 gy-3 email-form' method='post' name='newsletter' onsubmit='subscribeButton.disabled=!0'\u003e\n        \u003cinput type='hidden' name='form-name' value='newsletter'\u003e\n        \u003cdiv class='col-md-4'\u003e\n        \u003c/div\u003e\n    \u003c/form\u003e\n\u003c/div\u003e\n\n\u003cdiv class=\"card-bar\"\u003e\u003c/div\u003e\u003cbr\u003e\n\u003cp\u003eAt this point, you\u0026rsquo;ve completed all preparation tasks and you\u0026rsquo;re ready for the hands-on sessions!\u003c/p\u003e\n\u003col start=\"0\"\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Register to the \u003ca href=\"\"\u003eWorkshop\u0026rsquo;s event\u003c/a\u003e and \u003ca href=\"/login\"\u003elogin\u003c/a\u003e here with your Github account.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Set up a Text Editor or an IDE for OpenFOAM development.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Have a working OpenFOAM installation.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Clone our unit-testing framework and make sure it works for you.\u003c/li\u003e\n\u003cli\u003e\u003cinput checked=\"\" disabled=\"\" type=\"checkbox\"\u003e Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this).\u003c/li\u003e\n\u003c/ol\u003e\n"
      },
    {
        id: 19,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/run-on-the-slurm-cluster/",
        title: "Run tests on a SLURM cluster",
        description: "",
        content: "\u003cdiv class=\"alert alert-doks d-flex\" role=\"alert\"\u003e\n  \u003cdiv class=\"flex-shrink-1 alert-icon\"\u003e👉 \u003c/div\u003e\n  \n    \n      \u003cdiv class=\"w-100\"\u003e Please attempt to do this only after you feel comfortable enough with running the unit tests using \u003ccode\u003eAlltest\u003c/code\u003e script.\u003c/div\u003e\n    \n  \n\u003c/div\u003e\n\n\u003cp\u003eNow that you\u0026rsquo;re feeling more confident about reading/writing MPI-ready code in OpenFOAM; it\u0026rsquo;s time\nwe put what you learned so far to work. In this activity, you\u0026rsquo;ll try to run your unit-tests from\nprevious exercises in a SLURM cluster (which emulated real-world clusters, but is made up from\nDocker containers instead of physical machines for convenience).\u003c/p\u003e\n\u003cdiv class=\"card-bar\"\u003e\u003c/div\u003e\u003cbr\u003e\n\u003ch2 id=\"get-a-makeshift-cluster-running\"\u003eGet a makeshift cluster running \u003ca href=\"#get-a-makeshift-cluster-running\" class=\"anchor\" aria-hidden=\"true\"\u003e#\u003c/a\u003e\u003c/h2\u003e\n\u003cp\u003eFirst let\u0026rsquo;s start with the requirements (Avoid distribution repositories for these):\u003c/p\u003e\n\u003col\u003e\n\u003cli\u003eDocker must be installed. \u003ca href=\"https://get.docker.com\"\u003eCheck get.docker.com script\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003eYou also need a recent version of \u003ca href=\"https://docs.docker.com/compose/install/other/\"\u003edocker-compose\u003c/a\u003e\u003c/li\u003e\n\u003c/ol\u003e\n\u003cp\u003eTo make a decent test SLURM cluster, you need a machine with at least 4 CPUs.\nFrom there, it\u0026rsquo;s a matter of cloning my already configured repository and installing required software:\u003c/p\u003e\n\u003cdiv class=\"alert alert-doks d-flex\" role=\"alert\"\u003e\n  \u003cdiv class=\"flex-shrink-1 alert-icon\"\u003e👉 \u003c/div\u003e\n  \n    \n      \u003cdiv class=\"w-100\"\u003e All directories are relative to this \u003ccode\u003edocker-openfoam-slurm-cluster\u003c/code\u003e directory we\u0026rsquo;re creating.\nYou can create it wherever you want.\u003c/div\u003e\n    \n  \n\u003c/div\u003e\n\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003egit clone https://github.com/FoamScience/docker-openfoam-slurm-cluster\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"nb\"\u003ecd\u003c/span\u003e docker-openfoam-slurm-cluster\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Build containers for different cluster nodes - See the diagram bellow\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# All nodes are based off centOS 7 with OpenFOAM v2206 installed\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# This takes around 4GB of disk space and some time to complete\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker-compose build\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Fire up the cluster\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker-compose up -d\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cp\u003eThe previous commands will result in the creation of a SLURM cluster with the following architecture\n(We\u0026rsquo;re ignoring a container dedicated to host databases as it\u0026rsquo;s not as important for our purposes):\u003c/p\u003e\n\u003cdiv class=\"mermaid bg-light text-center\"\u003e\n    \n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%%\nflowchart TD\n    subgraph one[\u0026lt;b\u0026gt;SLURM Cluster\u0026lt;/b\u0026gt;]\n    A1(\u0026#34;axc-compute-01\u0026#34;)\n    A2(\u0026#34;axc-compute-02\u0026#34;)\n    A3(\u0026#34;axc-compute-03\u0026#34;)\n    A4(\u0026#34;axc-compute-04\u0026#34;)\n    H0[\u0026lt;b\u0026gt;headnode\u0026lt;/b\u0026gt;]\n    B0[[\u0026#34;slurmctld\u0026#34;]]\n    C0[[\u0026#34;slurmd\u0026#34;]]\n    subgraph dum1[ ]\n    end\n    end\n    subgraph two[\u0026lt;b\u0026gt;Local machine / Host\u0026lt;/b\u0026gt;]\n    F([\u0026#34;dir: var/axc\u0026#34;])\n    subgraph dum2[ ]\n    end\n    end\n\n    H0 === A1 \u0026amp; A2 \u0026amp; A3 \u0026amp; A4\n    B0 -.- H0\n    A1 \u0026amp; A2 \u0026amp; A3 \u0026amp; A4 -.- C0\n    F ==\u0026gt; |Maps to /axc on all machines| H0\n\n    classDef Title fill:none,stroke:none;\n    class dum1,dum2 Title\n\n    classDef graphDate fill-opacity:0.15,color:#E1B028\n    classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e\n    class one,two graphDate\n    class H0,A1,A2,A3,A4 date\n\u003c/div\u003e\n\n\u003cul\u003e\n\u003cli\u003eYou submit jobs on the head-node\u003c/li\u003e\n\u003cli\u003eThe head-node controls job execution on the 4 compute notes\u003c/li\u003e\n\u003cli\u003eTo avoid excessive file copying, \u003ccode\u003evar/axc\u003c/code\u003e (inside the \u003ccode\u003edocker-openfoam-slurm-cluster\u003c/code\u003e directory)\non your local machine is mounted to \u003ccode\u003e/axc\u003c/code\u003e on all cluster nodes. All nodes get access to anything you put in there.\u003c/li\u003e\n\u003cli\u003e\u003ccode\u003eroot\u003c/code\u003e is the default user for all operations inside the cluster.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eIt\u0026rsquo;s also good to do a pre-flight check to see if everything is working as expected\n(What\u0026rsquo;s important is being able to perform \u003ccode\u003empirun\u003c/code\u003e calls):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Gain a root shell at the head-node\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker \u003cspan class=\"nb\"\u003eexec\u003c/span\u003e -it axc-headnode bash\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Source the OpenFOAM env. on the container\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e \u003cspan class=\"nb\"\u003esource\u003c/span\u003e /usr/lib/openfoam/openfoam2206/etc/bashrc\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Try an MPI job on all 4 compute nodes.\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# This should report 4 different IP addresses\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Note the --allow-run-as-root\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# And note that mpirun does not need -np because it\u0026#39;s built with SLURM support\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e salloc -N \u003cspan class=\"m\"\u003e4\u003c/span\u003e mpirun --allow-run-as-root hostname -I\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003ch2 id=\"compile-your-test-driver-and-prepare-your-case\"\u003eCompile your test driver and prepare your case \u003ca href=\"#compile-your-test-driver-and-prepare-your-case\" class=\"anchor\" aria-hidden=\"true\"\u003e#\u003c/a\u003e\u003c/h2\u003e\n\u003cp\u003eNow that we have verified that we can submit \u003ccode\u003empirun\u003c/code\u003e jobs to SLURM, we can attempt to compile the test driver\n(\u003ccode\u003efoamUT\u003c/code\u003e dependencies are already compiled and put at the right places in the nodes):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# On your host machine, clone foamUT to the shared directory:\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003egit clone https://github.com/FoamScience/foamUT var/axc/foamUT\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Access a shell at the head node:\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker \u003cspan class=\"nb\"\u003eexec\u003c/span\u003e -it axc-headnode bash\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# On the head node:\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e \u003cspan class=\"nb\"\u003esource\u003c/span\u003e /usr/lib/openfoam/openfoam2206/etc/bashrc\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e \u003cspan class=\"nb\"\u003ecd\u003c/span\u003e /axc/foamUT/tests/exampleTests\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e wmake\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cp\u003eThe resulting binary (\u003ccode\u003e/axc/foamUT/tests/exampleTests/testDriver\u003c/code\u003e) also stays inside this shared directory,\nso compiling on one of the CentOS containers is enough (since they are identical).\u003c/p\u003e\n\u003cp\u003eWe\u0026rsquo;ll also be using the cavity case provided with \u003ccode\u003efoamUT\u003c/code\u003e (you can do this on the head node):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Copy the case\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e cp -r /axc/foamUT/cases/cavity /axc/testCase\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e \u003cspan class=\"nb\"\u003ecd\u003c/span\u003e /axc/testCase\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Create the mesh and decompose it\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e blockMesh\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e decomposePar\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003ch2 id=\"submit-a-slurm-job-to-run-example-tests-on-the-prepared-case\"\u003eSubmit a SLURM job to run example tests on the prepared case \u003ca href=\"#submit-a-slurm-job-to-run-example-tests-on-the-prepared-case\" class=\"anchor\" aria-hidden=\"true\"\u003e#\u003c/a\u003e\u003c/h2\u003e\n\u003cp\u003eTo submit a simulation job, we first need to understand how the test driver works:\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003etestDriver \u003cspan class=\"o\"\u003e[\u003c/span\u003ecatch_options\u003cspan class=\"o\"\u003e]\u003c/span\u003e --- \u003cspan class=\"o\"\u003e[\u003c/span\u003eopenfoam_options\u003cspan class=\"o\"\u003e]\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cp\u003eSo, to perform a job on the \u003ccode\u003etestCase\u003c/code\u003e case which executes the parallel tests in parallel\n(This is handled normally by the \u003ccode\u003eAlltest\u003c/code\u003e script):\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# --allow-run-as-root needed because mpirun will run as root\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# and don\u0026#39;t forget the -parallel flag\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"o\"\u003e(\u003c/span\u003eaxc-headnode\u003cspan class=\"o\"\u003e)\u003c/span\u003e salloc -N \u003cspan class=\"m\"\u003e4\u003c/span\u003e mpirun --allow-run-as-root \u003cspan class=\"se\"\u003e\\\n\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"se\"\u003e\u003c/span\u003e    /axc/foamUT/tests/exampleTests/testDriver \u003cspan class=\"s1\"\u003e\u0026#39;[parallel]\u0026#39;\u003c/span\u003e \u003cspan class=\"se\"\u003e\\\n\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"se\"\u003e\u003c/span\u003e    --- \u003cspan class=\"se\"\u003e\\\n\u003c/span\u003e\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"se\"\u003e\u003c/span\u003e    -case /axc/testCase -parallel\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cdetails\u003e\n  \u003csummary\u003eCan we run Alltest on the SLURM cluster?\u003c/summary\u003e\n  \u003cp\u003eSure we can, all we have to do is to replace \u003ccode\u003empirun -np \u0026quot;$nProcs\u0026quot;\u003c/code\u003e with \u003ccode\u003esalloc -N \u0026quot;$nProcs\u0026quot; mpirun\u003c/code\u003e:\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# This compiles only on head node, but runs tests on nProcs compute nodes\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003esed -Ei \u003cspan class=\"s1\"\u003e\u0026#39;s/mpirun (.*) -np \u0026#34;\\$nProcs\u0026#34;/salloc -N \u0026#34;\\$nProcs\u0026#34; mpirun \\1/g\u0026#39;\u003c/span\u003e Alltest\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003c/details\u003e\n\n\u003cp\u003eWhether the tests pass for us or not is not important as paying attention to the output:\u003c/p\u003e\n\u003cpre tabindex=\"0\"\u003e\u003ccode\u003eCase   : /axc/testCase\nnProcs : 4\nHosts  :\n(\n    (axc-compute-01 1)\n    (axc-compute-02 1)\n    (axc-compute-03 1)\n    (axc-compute-04 1)\n)\n\u003c/code\u003e\u003c/pre\u003e\u003cp\u003eand making sure every compute node is participating with 1 CPU, which proves that our training cluster is working as expected.\u003c/p\u003e\n\u003cdiv class=\"highlight\"\u003e\u003cpre tabindex=\"0\" class=\"chroma\"\u003e\u003ccode class=\"language-bash\" data-lang=\"bash\"\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# On your host machine\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Make the cluster go offline without removing containers\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker-compose stop\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003e\u003cspan class=\"c1\"\u003e# Bring down the cluster (stop and remove containers)\u003c/span\u003e\n\u003c/span\u003e\u003c/span\u003e\u003cspan class=\"line\"\u003e\u003cspan class=\"cl\"\u003edocker-compose down\n\u003c/span\u003e\u003c/span\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/div\u003e\u003cp\u003eIf you need it, here is a \u003ca href=\"https://slurm.schedmd.com/pdfs/summary.pdf\"\u003eshort cheatsheet for SLURM\u003c/a\u003e\u003c/p\u003e\n"
      },
    {
        id: 20,
        href: "https://openfoam-parallelisation-course.github.io/workshop/hands-on/",
        title: "Hands-on sessions",
        description: "All preparations needed for a smooth experience during the live-coding sessions.",
        content: "\u003cp\u003eAll preparations needed for a smooth experience during the live-coding sessions.\u003c/p\u003e\n"
      },
    {
        id: 21,
        href: "https://openfoam-parallelisation-course.github.io/workshop/help/get-help/",
        title: "How to get help",
        description: "",
        content: "\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eThere is a dedicated \u003ca href=\"https://discord.gg/v66uAhBEBw\"\u003eDiscord Server\u003c/a\u003e for this workshop, which you can join to ask questions\nif anything is unclear or if you get stuck at any point!\u003cbr\u003e I also welcome any suggestions that may improve this workshop there.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003ePlease don\u0026rsquo;t bloat the server with off-topic questions (e.g. General OpenFOAM or CFD questions). If you have\nsuch questions, \u003ca href=\"https://www.cfd-online.com/Forums/openfoam/\"\u003ecfd-online forums\u003c/a\u003e and\nthe \u003ca href=\"https://discord.gg/P9p9eHn\"\u003eOpenFOAM Discord Server\u003c/a\u003e are the right places to go to.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eIt\u0026rsquo;s possible to request certificates of attendance by dropping a mail to \u003ccode\u003e\u003cscript type=\"text/javascript\" nonce=\"dXNlcj0iaGVsbG8iLGRvbWFpbj0iaGVua3ZlcmxpbmRlLmNvbSIsZG9jdW1lbnQud3JpdGUodXNlcisiQCIrZG9tYWluKTs=\"\u003euser=\"holger-marschall\",domain=\"tu-darmstadt.de\",document.write(user+\"@\"+domain);\u003c/script\u003e\u003cnoscript\u003eholger-marschall at tu-darmstadt.de\u003c/noscript\u003e\u003c/code\u003e\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n"
      },
    {
        id: 22,
        href: "https://openfoam-parallelisation-course.github.io/workshop/help/",
        title: "Help",
        description: "",
        content: ""
      },
    {
        id: 23,
        href: "https://openfoam-parallelisation-course.github.io/workshop/help/how-to-debug/",
        title: "How to debug my parallel code",
        description: "",
        content: "\u003cdiv class=\"alert alert-doks d-flex\" role=\"alert\"\u003e\n  \u003cdiv class=\"flex-shrink-1 alert-icon\"\u003e⚠️ \u003c/div\u003e\n  \n    \n      \u003cdiv class=\"w-100\"\u003e Basically, this works if you\u0026rsquo;re able to open an xterm window (or any other terminal).\u003c/div\u003e\n    \n  \n\u003c/div\u003e\n\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eOpenFOAM comes with a Shell script to debug MPI programs more conveniently with open source tools (GDB/valgrind).\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eFind it with \u003ccode\u003ewhich mpirunDebug\u003c/code\u003e while your OpenFOAM installation is sourced\u003c/li\u003e\n\u003cli\u003eUse it instead of \u003ccode\u003empirun\u003c/code\u003e as in: \u003ccode\u003empirunDebug -np 4 solver -parallel\u003c/code\u003e\u003c/li\u003e\n\u003cli\u003eIt can open 4 xterm windows, with GDB attached to each of the 4 processes.\u003c/li\u003e\n\u003cli\u003eYou can also change the spawned terminal easily by looking for \u003ccode\u003exterm=\u003c/code\u003e:\n\u003cul\u003e\n\u003cli\u003eDefault: \u003ccode\u003exterm=\u0026quot;xterm -font fixed -title processor${proc} -geometry 120x15+$xpos+$ypos\u0026quot;\u003c/code\u003e\u003c/li\u003e\n\u003cli\u003eUse kitty instead: \u003ccode\u003exterm=\u0026quot;kitty --title processor${proc} -1 --class=mpirun\u0026quot;\u003c/code\u003e\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eBuilding OpenFOAM in Opt mode and adding \u003ccode\u003e-g -ggdb -O0\u003c/code\u003e to \u003ccode\u003eEXE_INC\u003c/code\u003e in \u003ccode\u003eMake/options\u003c/code\u003e of the libraries/solvers you want\nto debug is the way to go.\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eBuilding the whole thing in Debug mode is usually memory intensive when you debug your code even on very small cases.\u003c/li\u003e\n\u003cli\u003eMost of the information presented in \u003ca href=\"https://openfoamwiki.net/index.php/HowTo_debugging#Parallel_debuggers\"\u003ethe wiki\u003c/a\u003e\nabout this topic is still valid.\u003c/li\u003e\n\u003c/ul\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eThere are commercial debuggers which support parallel debugging natively (e.g. \u003ca href=\"https://totalview.io/\"\u003eTotalView\u003c/a\u003e).\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eIt\u0026rsquo;s also useful to set the following in your \u003ccode\u003e~/.gdbinit\u003c/code\u003e to set breakpoints right before leaving the client application\n(Mainly to get a stack trace on FATAL ERRORS)\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cpre tabindex=\"0\"\u003e\u003ccode\u003e# We hope that abort and exit are not inlined\nset breakpoint pending on\n# set a breakpoint if abort will return a non-zero status\nbreak abort if $rdi != 0\n# set a breakpoint if exit will return a non-zero status\nbreak exit if $rdi != 0\n\u003c/code\u003e\u003c/pre\u003e"
      },
    {
        id: 24,
        href: "https://openfoam-parallelisation-course.github.io/workshop/",
        title: "Docs",
        description: "",
        content: ""
      },
    ];

  // https://discourse.gohugo.io/t/range-length-or-last-element/3803/2

  

  index.add(
      {
        id: 0,
        href: "/workshop/prologue/prereqs/",
        title: "Prerequisites for optimal experience",
        description: "Prerequisites for optimal experience during the learning process offered by the OpenFOAM parallelization workshop.",
        content: "Please make sure you are familiar with the following concepts before you start (it\u0026rsquo;s not a lot if I can fit it in a single diagram) so you don\u0026rsquo;t feel overwhelmed during the hands-on sessions. Watching someone else coding in a live session with their own environment and workflow can be confusing.\n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%% flowchart LR A((\u0026#34;\u0026amp;nbsp; \u0026amp;nbsp; \u0026amp;nbsp; \u0026#34;)) B(\u0026#34;OpenFOAM build system\u0026#34;) C(\u0026#34;C\u0026#43;\u0026#43;\u0026#34;) D(\u0026#34;MPI\u0026#34;) E(\u0026#34;CMD\u0026#34;) F(\u0026#34;Bash\u0026#34;) G(\u0026#34;Git\u0026#34;) H(\u0026#34;HPC Environment\u0026#34;) I(\u0026#34;Make/files\u0026#34;) J(\u0026#34;Make/options\u0026#34;) K(\u0026#34;wmake\u0026#34;) L(\u0026#34;Github account\u0026#34;) M(\u0026#34;IDE\u0026#34;) N(\u0026#34;VSCode\u0026#34;) O(\u0026#34;Vim...\u0026#34;) A --- C \u0026amp; B \u0026amp; E E --- F \u0026amp; G \u0026amp; H B -.- I \u0026amp; J \u0026amp; K D \u0026amp; L \u0026amp; M --- A O \u0026amp; N -.- M classDef graphDate fill-opacity:0.15,color:#E1B028 classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e class A,B,C,E,F,G,L date Required skills and knowledge # Basic C++ programming knowledge (This is a must, at least you\u0026rsquo;ve worked with templates before). Being familiar with OpenFOAM environment and build system (At least, you\u0026rsquo;ve compiled a solver or a library before). MPI knowledge is optional. Required tools # An OpenFOAM installation on a recent Linux distribution (refer to OpenFOAM Environment 101 for recommended setup). Knowledge of the common command line interface (Bash, Git) is recommended. A Github Account (needed to view video content on this website). An IDE (configured for C++ development) is optional but recommended (or use Github CodeSpaces). "
      }
    );
  index.add(
      {
        id: 1,
        href: "/workshop/prologue/introduction/",
        title: "Introduction",
        description: "A few words motivating the 'parallelization in OpenFOAM' workshop and providing an overview of parallelization landscape in high performance computing.",
        content: ""
      }
    );
  index.add(
      {
        id: 2,
        href: "/workshop/prologue/agenda/",
        title: "Agenda for upcoming training",
        description: "Take a look at the big picture of what this OpenFOAM parallelization training has to provide.",
        content: ""
      }
    );
  index.add(
      {
        id: 3,
        href: "/workshop/prologue/get-ready/",
        title: "Get ready",
        description: "A recap of the most basic concepts around parallel programming in CFD Software.",
        content: ""
      }
    );
  index.add(
      {
        id: 4,
        href: "/workshop/chapters/01-p2p-comms/",
        title: "Point-to-Point communications - general introdution",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 5,
        href: "/workshop/prologue/",
        title: "Prologue",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 6,
        href: "/workshop/chapters/p2p-comms-blocking/",
        title: "Blocking P2P comms",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 7,
        href: "/workshop/chapters/p2p-comms-nonblocking/",
        title: "Non-Blocking P2P comms",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 8,
        href: "/workshop/chapters/02-collective-comms/",
        title: "Collective communications - general introdution",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 9,
        href: "/workshop/chapters/collective-comms-api/",
        title: "Collective comms API",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 10,
        href: "/workshop/chapters/03-send-custom-data/",
        title: "How do I send my own data?",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 11,
        href: "/workshop/chapters/common-issues-sending-custom-data/",
        title: "Send custom data - common issues",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 12,
        href: "/workshop/chapters/04-advanced-topics/",
        title: "Application examples and advanced topics",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 13,
        href: "/workshop/chapters/05-sources/",
        title: "Sources and further reading",
        description: "C. Augustine. Introduction to Parallel Programming with MPI and OpenMP. Source of the great ’pit stops’ analogy. Oct. 2018. url: https://princetonuniversity.github.io/PUbootcamp/sessions/parallel-programming/Intro_PP_bootcamp_2018.pdf Fabio Baruffa. Improve MPI Performance by Hiding Latency. July 2020. url: https://www.intel.com/content/www/us/en/developer/articles/technical/overlap-computation-communication-hpc-applications.html Pavanakumar Mohanamuraly, Jan Christian Huckelheim, and Jens-Dominik Mueller. “Hybrid Parallelisation of an Algorithmically Differentiated Adjoint Solver”. In: Proceedings of the VII European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS Congress 2016). Institute of Structural Analysis and Antiseismic Research School of Civil Engineering National Technical University of Athens (NTUA) Greece, 2016.",
        content: " C. Augustine. Introduction to Parallel Programming with MPI and OpenMP. Source of the great ’pit stops’ analogy. Oct. 2018. url: https://princetonuniversity.github.io/PUbootcamp/sessions/parallel-programming/Intro_PP_bootcamp_2018.pdf Fabio Baruffa. Improve MPI Performance by Hiding Latency. July 2020. url: https://www.intel.com/content/www/us/en/developer/articles/technical/overlap-computation-communication-hpc-applications.html Pavanakumar Mohanamuraly, Jan Christian Huckelheim, and Jens-Dominik Mueller. “Hybrid Parallelisation of an Algorithmically Differentiated Adjoint Solver”. In: Proceedings of the VII European Congress on Computational Methods in Applied Sciences and Engineering (ECCOMAS Congress 2016). Institute of Structural Analysis and Antiseismic Research School of Civil Engineering National Technical University of Athens (NTUA) Greece, 2016. doi: 10.7712/100016.1884.10290. url: https://doi.org/10.7712/100016.1884.10290. B. Steinbusch. Introduction to Parallel Programming with MPI and OpenMP. Mar. 2021. url: https://www.fz-uelich.de/SharedDocs/Downloads/IAS/JSC/EN/slides/mpi/mpi-openmp-handouts.pdf?__blob=publicationFile. EuroCC National Competence Center Sweden. Intermediate MPI. May 2022. url: https://enccs.github.io/intermediate-mpi/. "
      }
    );
  index.add(
      {
        id: 14,
        href: "/workshop/chapters/",
        title: "Lecture chapters",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 15,
        href: "/workshop/hands-on/openfoam-env-101/",
        title: "OpenFOAM environment 101",
        description: "You need to be on a Linux machine somehow.\nCommon options if you\u0026rsquo;re running on a Linux OS (or macOS, choose what suits you):\nOpenFOAM in a Docker container (Preferred method). A local installation of OpenFOAM. Github\u0026rsquo;s Codespace for a fully remote experience (which uses the same Docker image and the unit testing framework). If your main OS is Windows, you have a couple of options (Again, choose whatever you\u0026rsquo;re comfortable with):",
        content: "You need to be on a Linux machine somehow.\nCommon options if you\u0026rsquo;re running on a Linux OS (or macOS, choose what suits you):\nOpenFOAM in a Docker container (Preferred method). A local installation of OpenFOAM. Github\u0026rsquo;s Codespace for a fully remote experience (which uses the same Docker image and the unit testing framework). If your main OS is Windows, you have a couple of options (Again, choose whatever you\u0026rsquo;re comfortable with):\nOpenFOAM in a Docker container (Preferred method). Install a Linux virtual machine. Github\u0026rsquo;s Codespace for a fully remote experience (which uses the same Docker image and the unit testing framework). Use BlueCFD type of deal, although then I wouldn\u0026rsquo;t be able to help much if you run into MPI problems. In order to optimize your experience during the hands-on sessions, I ask you to go through a quick pre-flight checklist:\nRegister to the Workshop\u0026rsquo;s event and login here with your Github account. Set up a Text Editor or an IDE for OpenFOAM development. Have a working OpenFOAM installation. Clone our unit-testing framework and make sure it works for you. Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this). "
      }
    );
  index.add(
      {
        id: 16,
        href: "/workshop/hands-on/openfoam-in-containers/",
        title: "OpenFOAM in containers",
        description: "There are many OpenFOAM images for all sorts of containerization systems out there. However, my images, which are hosted at ghcr.io, are specifically built to participate in MPI communications:\nghcr.io/foamscience/jammy-openfoam:v2206 ghcr.io/foamscience/jammy-openfoam:fe5 ghcr.io/foamscience/jammy-openfoam:9 You can fire up a quick local container with the following Shell command (Assuming Docker is installed - see get.docker.com):\ndocker run \\ --rm `# Disposable container, destroyed as soon as you leave it.` \\ -it `# Interactive with a tty so you can run a shell` \\ --name openfoam `# Container name` \\ ghcr.",
        content: "There are many OpenFOAM images for all sorts of containerization systems out there. However, my images, which are hosted at ghcr.io, are specifically built to participate in MPI communications:\nghcr.io/foamscience/jammy-openfoam:v2206 ghcr.io/foamscience/jammy-openfoam:fe5 ghcr.io/foamscience/jammy-openfoam:9 You can fire up a quick local container with the following Shell command (Assuming Docker is installed - see get.docker.com):\ndocker run \\ --rm `# Disposable container, destroyed as soon as you leave it.` \\ -it `# Interactive with a tty so you can run a shell` \\ --name openfoam `# Container name` \\ ghcr.io/foamscience/jammy-openfoam:v2206 `# Docker image` \\ bash `# Command to run in the container, default: SSH server` This command will throw you into a container which has OpenFOAM v2206 installed, acting as the openfoam user which is all set to run OpenFOAM simulations. The default working directory you start with is ~/data.\nRefer to Docker CLI cheatsheet if it\u0026rsquo;s your first time interacting with Docker.\nAt this point; I assume you have easy access to an OpenFOAM installation.\nRegister to the Workshop\u0026rsquo;s event and login here with your Github account. Set up a Text Editor or an IDE for OpenFOAM development. Have a working OpenFOAM installation. Clone our unit-testing framework and make sure it works for you. Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this). "
      }
    );
  index.add(
      {
        id: 17,
        href: "/workshop/hands-on/using-foamut/",
        title: "A unit-testing framework to do the exercises",
        description: "We\u0026rsquo;ll be using the unit-testing framework as a black-box to verify the correctness of your code in hands-on sessions. You only need to change one file per activity; Mostly Exercises are provided as test units for convenient interaction with the code (compile-run-debug cycles). Clone this repo and run Alltest using your local OpenFOAM installation to make sure everything works as expected. The following diagram depicts the general workflow of solving the exercises proposed during the hands-on sessions:",
        content: " We\u0026rsquo;ll be using the unit-testing framework as a black-box to verify the correctness of your code in hands-on sessions. You only need to change one file per activity; Mostly Exercises are provided as test units for convenient interaction with the code (compile-run-debug cycles). Clone this repo and run Alltest using your local OpenFOAM installation to make sure everything works as expected. The following diagram depicts the general workflow of solving the exercises proposed during the hands-on sessions:\n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%% flowchart TD subgraph one[\u0026lt;b\u0026gt;foamUT repo\u0026lt;/b\u0026gt;] subgraph dum1[ ] A(\u0026#34;Alltest\u0026#34;) G(\u0026#34;Catch2\u0026#34;) F[Compile and test\u0026lt;br\u0026gt;everything in tests\u0026lt;br\u0026gt;on cases] H(\u0026#34;tests\u0026#34;) I(\u0026#34;cases\u0026#34;) E[Unit-tests backend] end end subgraph two[\u0026lt;b\u0026gt;Exercises repo\u0026lt;/b\u0026gt;] subgraph dum2[ ] B(\u0026#34;exercises/exTest.C\u0026#34;) J(\u0026#34;Make\u0026#34;) C[This is the file you modify] D[Make dir. for your\u0026lt;br\u0026gt; OpenFOAM fork] end end B ==\u0026gt; |Symlink/Copy into tests| H C -.- B D -.- J G -.- E A -.- F A --\u0026gt; G F -.-\u0026gt; H F -.-\u0026gt; I classDef Title fill:none,stroke:none; class dum1,dum2 Title classDef graphDate fill-opacity:0.15,color:#E1B028 classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e class one,two graphDate class A,B,G,H,I,J date In short, the Alltest script runs all unit tests found in tests directory on all OpenFOAM cases found in cases directory. So, to run your own tests:\n# Clone the repos cd /tmp git clone https://github.com/FoamScience/foamUT foamUT git clone \u0026lt;Exercise-repo-URL\u0026gt; Ex01 # Replace sample tests with the exercise code cd foamUT rm -rf tests/exampleTests ln -s $PWD/../Ex01/exercises tests/ex01 # Compile and run tests ./Alltest Important notes about using foamUT If you want to see FATAL ERRORS (As if running a regular solver), put Foam::FatalError.dontThrowExceptions(); at the start of the test case. Your code is supposed to work (all tests pass) both in serial and in parallel. The unit tests are timed-out in Alltest (change timeOut if it\u0026rsquo;s too quick for you). The unit tests run in /dev/shm by default; you can change this in Alltest All cases run on 4 processors but tests may run on specific processors only. If your machine has less than 4 CPUs, you need to enable MPI oversubscribing; otherwise your parallel tests will fail (This is useful for example if you\u0026rsquo;re using Github codespaces or running CI jobs on Github machines which only have 2 CPUs):\nsed -i \u0026#39;s/mpirun/mpirun --oversubscribe/g\u0026#39; Alltest 👉 Head out to the wiki page if you\u0026rsquo;re interested in the Unit-testing framework. At this point, only one task remains:\nRegister to the Workshop\u0026rsquo;s event and login here with your Github account. Set up a Text Editor or an IDE for OpenFOAM development. Have a working OpenFOAM installation. Clone our unit-testing framework and make sure it works for you. Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this). "
      }
    );
  index.add(
      {
        id: 18,
        href: "/workshop/hands-on/github-classroom/",
        title: "Github classroom for the exercises",
        description: "All activities during the workshop\u0026rsquo;s hands-on sessions will be prepared as assignments. This page holds the complete list of offered activities/exercises.\n👉 Each assignment will create a separate private repository for you at this Github organisation First, let\u0026rsquo;s start by the introductory ones:\nAccept assignment Optional Git \u0026amp; Github Fundamentals A basic fast-paced course to get you familiarized with Git and Github in general - Provided by Github Classrooms. Please go through the README.",
        content: "All activities during the workshop\u0026rsquo;s hands-on sessions will be prepared as assignments. This page holds the complete list of offered activities/exercises.\n👉 Each assignment will create a separate private repository for you at this Github organisation First, let\u0026rsquo;s start by the introductory ones:\nAccept assignment Optional Git \u0026amp; Github Fundamentals A basic fast-paced course to get you familiarized with Git and Github in general - Provided by Github Classrooms. Please go through the README.md file after you accept this assignment if it's your first time using Git/Github. Accept assignment Recommended Introducing foamUT to solve future exercises A basic exercise to get you familiarized with the recommended workflow of solving future exercises. It'll walk you through changing exercise code and making all of its tests pass in serial and parallel. At this point, you\u0026rsquo;ve completed all preparation tasks and you\u0026rsquo;re ready for the hands-on sessions!\nRegister to the Workshop\u0026rsquo;s event and login here with your Github account. Set up a Text Editor or an IDE for OpenFOAM development. Have a working OpenFOAM installation. Clone our unit-testing framework and make sure it works for you. Solve a demo exercise so you get familiarized with the typical workflow during the hands-on sessions (You\u0026rsquo;ll need no knowledge from the workshop for this). "
      }
    );
  index.add(
      {
        id: 19,
        href: "/workshop/hands-on/run-on-the-slurm-cluster/",
        title: "Run tests on a SLURM cluster",
        description: "👉 Please attempt to do this only after you feel comfortable enough with running the unit tests using Alltest script. Now that you\u0026rsquo;re feeling more confident about reading/writing MPI-ready code in OpenFOAM; it\u0026rsquo;s time we put what you learned so far to work. In this activity, you\u0026rsquo;ll try to run your unit-tests from previous exercises in a SLURM cluster (which emulated real-world clusters, but is made up from Docker containers instead of physical machines for convenience).",
        content: " 👉 Please attempt to do this only after you feel comfortable enough with running the unit tests using Alltest script. Now that you\u0026rsquo;re feeling more confident about reading/writing MPI-ready code in OpenFOAM; it\u0026rsquo;s time we put what you learned so far to work. In this activity, you\u0026rsquo;ll try to run your unit-tests from previous exercises in a SLURM cluster (which emulated real-world clusters, but is made up from Docker containers instead of physical machines for convenience).\nGet a makeshift cluster running # First let\u0026rsquo;s start with the requirements (Avoid distribution repositories for these):\nDocker must be installed. Check get.docker.com script You also need a recent version of docker-compose To make a decent test SLURM cluster, you need a machine with at least 4 CPUs. From there, it\u0026rsquo;s a matter of cloning my already configured repository and installing required software:\n👉 All directories are relative to this docker-openfoam-slurm-cluster directory we\u0026rsquo;re creating. You can create it wherever you want. git clone https://github.com/FoamScience/docker-openfoam-slurm-cluster cd docker-openfoam-slurm-cluster # Build containers for different cluster nodes - See the diagram bellow # All nodes are based off centOS 7 with OpenFOAM v2206 installed # This takes around 4GB of disk space and some time to complete docker-compose build # Fire up the cluster docker-compose up -d The previous commands will result in the creation of a SLURM cluster with the following architecture (We\u0026rsquo;re ignoring a container dedicated to host databases as it\u0026rsquo;s not as important for our purposes):\n%%{init: {\u0026#39;theme\u0026#39;:\u0026#39;dark\u0026#39;}}%% flowchart TD subgraph one[\u0026lt;b\u0026gt;SLURM Cluster\u0026lt;/b\u0026gt;] A1(\u0026#34;axc-compute-01\u0026#34;) A2(\u0026#34;axc-compute-02\u0026#34;) A3(\u0026#34;axc-compute-03\u0026#34;) A4(\u0026#34;axc-compute-04\u0026#34;) H0[\u0026lt;b\u0026gt;headnode\u0026lt;/b\u0026gt;] B0[[\u0026#34;slurmctld\u0026#34;]] C0[[\u0026#34;slurmd\u0026#34;]] subgraph dum1[ ] end end subgraph two[\u0026lt;b\u0026gt;Local machine / Host\u0026lt;/b\u0026gt;] F([\u0026#34;dir: var/axc\u0026#34;]) subgraph dum2[ ] end end H0 === A1 \u0026amp; A2 \u0026amp; A3 \u0026amp; A4 B0 -.- H0 A1 \u0026amp; A2 \u0026amp; A3 \u0026amp; A4 -.- C0 F ==\u0026gt; |Maps to /axc on all machines| H0 classDef Title fill:none,stroke:none; class dum1,dum2 Title classDef graphDate fill-opacity:0.15,color:#E1B028 classDef date fill-opacity:0.85,color:#FFFFFF,fill:#1d0e4e class one,two graphDate class H0,A1,A2,A3,A4 date You submit jobs on the head-node The head-node controls job execution on the 4 compute notes To avoid excessive file copying, var/axc (inside the docker-openfoam-slurm-cluster directory) on your local machine is mounted to /axc on all cluster nodes. All nodes get access to anything you put in there. root is the default user for all operations inside the cluster. It\u0026rsquo;s also good to do a pre-flight check to see if everything is working as expected (What\u0026rsquo;s important is being able to perform mpirun calls):\n# Gain a root shell at the head-node docker exec -it axc-headnode bash # Source the OpenFOAM env. on the container (axc-headnode) source /usr/lib/openfoam/openfoam2206/etc/bashrc # Try an MPI job on all 4 compute nodes. # This should report 4 different IP addresses # Note the --allow-run-as-root # And note that mpirun does not need -np because it\u0026#39;s built with SLURM support (axc-headnode) salloc -N 4 mpirun --allow-run-as-root hostname -I Compile your test driver and prepare your case # Now that we have verified that we can submit mpirun jobs to SLURM, we can attempt to compile the test driver (foamUT dependencies are already compiled and put at the right places in the nodes):\n# On your host machine, clone foamUT to the shared directory: git clone https://github.com/FoamScience/foamUT var/axc/foamUT # Access a shell at the head node: docker exec -it axc-headnode bash # On the head node: (axc-headnode) source /usr/lib/openfoam/openfoam2206/etc/bashrc (axc-headnode) cd /axc/foamUT/tests/exampleTests (axc-headnode) wmake The resulting binary (/axc/foamUT/tests/exampleTests/testDriver) also stays inside this shared directory, so compiling on one of the CentOS containers is enough (since they are identical).\nWe\u0026rsquo;ll also be using the cavity case provided with foamUT (you can do this on the head node):\n# Copy the case (axc-headnode) cp -r /axc/foamUT/cases/cavity /axc/testCase (axc-headnode) cd /axc/testCase # Create the mesh and decompose it (axc-headnode) blockMesh (axc-headnode) decomposePar Submit a SLURM job to run example tests on the prepared case # To submit a simulation job, we first need to understand how the test driver works:\ntestDriver [catch_options] --- [openfoam_options] So, to perform a job on the testCase case which executes the parallel tests in parallel (This is handled normally by the Alltest script):\n# --allow-run-as-root needed because mpirun will run as root # and don\u0026#39;t forget the -parallel flag (axc-headnode) salloc -N 4 mpirun --allow-run-as-root \\ /axc/foamUT/tests/exampleTests/testDriver \u0026#39;[parallel]\u0026#39; \\ --- \\ -case /axc/testCase -parallel Can we run Alltest on the SLURM cluster? Sure we can, all we have to do is to replace mpirun -np \u0026quot;$nProcs\u0026quot; with salloc -N \u0026quot;$nProcs\u0026quot; mpirun:\n# This compiles only on head node, but runs tests on nProcs compute nodes sed -Ei \u0026#39;s/mpirun (.*) -np \u0026#34;\\$nProcs\u0026#34;/salloc -N \u0026#34;\\$nProcs\u0026#34; mpirun \\1/g\u0026#39; Alltest Whether the tests pass for us or not is not important as paying attention to the output:\nCase : /axc/testCase nProcs : 4 Hosts : ( (axc-compute-01 1) (axc-compute-02 1) (axc-compute-03 1) (axc-compute-04 1) ) and making sure every compute node is participating with 1 CPU, which proves that our training cluster is working as expected.\n# On your host machine # Make the cluster go offline without removing containers docker-compose stop # Bring down the cluster (stop and remove containers) docker-compose down If you need it, here is a short cheatsheet for SLURM\n"
      }
    );
  index.add(
      {
        id: 20,
        href: "/workshop/hands-on/",
        title: "Hands-on sessions",
        description: "All preparations needed for a smooth experience during the live-coding sessions.",
        content: "All preparations needed for a smooth experience during the live-coding sessions.\n"
      }
    );
  index.add(
      {
        id: 21,
        href: "/workshop/help/get-help/",
        title: "How to get help",
        description: "There is a dedicated Discord Server for this workshop, which you can join to ask questions if anything is unclear or if you get stuck at any point!\nI also welcome any suggestions that may improve this workshop there.\nPlease don\u0026rsquo;t bloat the server with off-topic questions (e.g. General OpenFOAM or CFD questions). If you have such questions, cfd-online forums and the OpenFOAM Discord Server are the right places to go to.",
        content: " There is a dedicated Discord Server for this workshop, which you can join to ask questions if anything is unclear or if you get stuck at any point!\nI also welcome any suggestions that may improve this workshop there.\nPlease don\u0026rsquo;t bloat the server with off-topic questions (e.g. General OpenFOAM or CFD questions). If you have such questions, cfd-online forums and the OpenFOAM Discord Server are the right places to go to.\nIt\u0026rsquo;s possible to request certificates of attendance by dropping a mail to holger-marschall at tu-darmstadt.de\n"
      }
    );
  index.add(
      {
        id: 22,
        href: "/workshop/help/",
        title: "Help",
        description: "",
        content: ""
      }
    );
  index.add(
      {
        id: 23,
        href: "/workshop/help/how-to-debug/",
        title: "How to debug my parallel code",
        description: "⚠️ Basically, this works if you\u0026rsquo;re able to open an xterm window (or any other terminal). OpenFOAM comes with a Shell script to debug MPI programs more conveniently with open source tools (GDB/valgrind).\nFind it with which mpirunDebug while your OpenFOAM installation is sourced Use it instead of mpirun as in: mpirunDebug -np 4 solver -parallel It can open 4 xterm windows, with GDB attached to each of the 4 processes.",
        content: " ⚠️ Basically, this works if you\u0026rsquo;re able to open an xterm window (or any other terminal). OpenFOAM comes with a Shell script to debug MPI programs more conveniently with open source tools (GDB/valgrind).\nFind it with which mpirunDebug while your OpenFOAM installation is sourced Use it instead of mpirun as in: mpirunDebug -np 4 solver -parallel It can open 4 xterm windows, with GDB attached to each of the 4 processes. You can also change the spawned terminal easily by looking for xterm=: Default: xterm=\u0026quot;xterm -font fixed -title processor${proc} -geometry 120x15+$xpos+$ypos\u0026quot; Use kitty instead: xterm=\u0026quot;kitty --title processor${proc} -1 --class=mpirun\u0026quot; Building OpenFOAM in Opt mode and adding -g -ggdb -O0 to EXE_INC in Make/options of the libraries/solvers you want to debug is the way to go.\nBuilding the whole thing in Debug mode is usually memory intensive when you debug your code even on very small cases. Most of the information presented in the wiki about this topic is still valid. There are commercial debuggers which support parallel debugging natively (e.g. TotalView).\nIt\u0026rsquo;s also useful to set the following in your ~/.gdbinit to set breakpoints right before leaving the client application (Mainly to get a stack trace on FATAL ERRORS)\n# We hope that abort and exit are not inlined set breakpoint pending on # set a breakpoint if abort will return a non-zero status break abort if $rdi != 0 # set a breakpoint if exit will return a non-zero status break exit if $rdi != 0 "
      }
    );
  index.add(
      {
        id: 24,
        href: "/workshop/",
        title: "Docs",
        description: "",
        content: ""
      }
    );
  search.addEventListener('input', show_results, true);

  function show_results(){
    const maxResult = 5;
    var searchQuery = this.value;
    var results = index.search(searchQuery, {limit: maxResult, enrich: true});

    // flatten results since index.search() returns results for each indexed field
    const flatResults = new Map(); // keyed by href to dedupe results
    for (const result of results.flatMap(r => r.result)) {
      if (flatResults.has(result.doc.href)) continue;
      flatResults.set(result.doc.href, result.doc);
    }

    suggestions.innerHTML = "";
    suggestions.classList.remove('d-none');

    // inform user that no results were found
    if (flatResults.size === 0 && searchQuery) {
      const noResultsMessage = document.createElement('div')
      noResultsMessage.innerHTML = `No results for "<strong>${searchQuery}</strong>"`
      noResultsMessage.classList.add("suggestion__no-results");
      suggestions.appendChild(noResultsMessage);
      return;
    }

    // construct a list of suggestions
    for(const [href, doc] of flatResults) {
        const entry = document.createElement('div');
        suggestions.appendChild(entry);

        const a = document.createElement('a');
        a.href = href;
        entry.appendChild(a);

        const title = document.createElement('span');
        title.textContent = doc.title;
        title.classList.add("suggestion__title");
        a.appendChild(title);

        const description = document.createElement('span');
        description.textContent = doc.description;
        description.classList.add("suggestion__description");
        a.appendChild(description);

        suggestions.appendChild(entry);

        if(suggestions.childElementCount == maxResult) break;
    }
  }
}());
