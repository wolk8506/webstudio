const projects = [
  {
    type: 'web',
    html: `<li data-type="web" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-1@1x-480.webp 1x, ./images/project-1@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-1@1x-768.webp 1x, ./images/project-1@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-1@1x-1200.webp 1x, ./images/project-1@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-1@1x-480.jpg 1x, ./images/project-1@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-1@1x-768.jpg 1x, ./images/project-1@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-1@1x-1200.jpg 1x, ./images/project-1@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project1.jpg"
                    alt="Технокряк"
                    width="370"
                    height="294"
                /></picture>

                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Технокряк</h3>
                <p class="projects__type">Веб-сайт</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'design',
    html: `<li data-type="design" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-2@1x-480.webp 1x, ./images/project-2@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-2@1x-768.webp 1x, ./images/project-2@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-2@1x-1200.webp 1x, ./images/project-2@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-2@1x-480.jpg 1x, ./images/project-2@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-2@1x-768.jpg 1x, ./images/project-2@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-2@1x-1200.jpg 1x, ./images/project-2@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project2.jpg"
                    alt="New Orlean vs Golden Star"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project2.jpg"
                  alt="New Orlean vs Golden Star"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">
                  Постер <span lang="en">New Orlean vs Golden Star</span>
                </h3>
                <p class="projects__type">Дизайн</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'application',
    html: `<li data-type="application" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-3@1x-480.webp 1x, ./images/project-3@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-3@1x-768.webp 1x, ./images/project-3@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-3@1x-1200.webp 1x, ./images/project-3@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-3@1x-480.jpg 1x, ./images/project-3@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-3@1x-768.jpg 1x, ./images/project-3@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-3@1x-1200.jpg 1x, ./images/project-3@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project3.jpg"
                    alt="Ресторан Seafood"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project3.jpg"
                  alt="Ресторан Seafood"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Ресторан <span lang="en">Seafood</span></h3>
                <p class="projects__type">Приложение</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'marketing',
    html: `<li data-type="marketing" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-4@1x-480.webp 1x, ./images/project-4@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-4@1x-768.webp 1x, ./images/project-4@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-4@1x-1200.webp 1x, ./images/project-4@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-4@1x-480.jpg 1x, ./images/project-4@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-4@1x-768.jpg 1x, ./images/project-4@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-4@1x-1200.jpg 1x, ./images/project-4@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project4.jpg"
                    alt="Проект Prime"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project4.jpg"
                  alt="Проект Prime"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Проект <span lang="en">Prime</span></h3>
                <p class="projects__type">Маркетинг</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'application',
    html: `<li data-type="application" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-5@1x-480.webp 1x, ./images/project-5@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-5@1x-768.webp 1x, ./images/project-5@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-5@1x-1200.webp 1x, ./images/project-5@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-5@1x-480.jpg 1x, ./images/project-5@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-5@1x-768.jpg 1x, ./images/project-5@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-5@1x-1200.jpg 1x, ./images/project-5@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project5.jpg"
                    alt="Проект Boxes"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project5.jpg"
                  alt="Проект Boxes"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Проект <span lang="en">Boxes</span></h3>
                <p class="projects__type">Приложение</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'web',
    html: `<li data-type="web" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-6@1x-480.webp 1x, ./images/project-6@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-6@1x-768.webp 1x, ./images/project-6@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-6@1x-1200.webp 1x, ./images/project-6@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-6@1x-480.jpg 1x, ./images/project-6@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-6@1x-768.jpg 1x, ./images/project-6@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-6@1x-1200.jpg 1x, ./images/project-6@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project6.jpg"
                    alt="Inspiration has no Borders"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project6.jpg"
                  alt="Inspiration has no Borders"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name" lang="en">Inspiration has no Borders</h3>
                <p class="projects__type">Веб-сайт</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'design',
    html: `<li data-type="design" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-7@1x-480.webp 1x, ./images/project-7@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-7@1x-768.webp 1x, ./images/project-7@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-7@1x-1200.webp 1x, ./images/project-7@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-7@1x-480.jpg 1x, ./images/project-7@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-7@1x-768.jpg 1x, ./images/project-7@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-7@1x-1200.jpg 1x, ./images/project-7@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project7.jpg"
                    alt="Издание Limited Edition"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project7.jpg"
                  alt="Издание Limited Edition"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Издание <span lang="en">Limited Edition</span></h3>
                <p class="projects__type">Дизайн</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'marketing',
    html: `<li data-type="marketing" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-8@1x-480.webp 1x, ./images/project-8@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-8@1x-768.webp 1x, ./images/project-8@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-8@1x-1200.webp 1x, ./images/project-8@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-8@1x-480.jpg 1x, ./images/project-8@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-8@1x-768.jpg 1x, ./images/project-8@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-8@1x-1200.jpg 1x, ./images/project-8@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project8.jpg"
                    alt="Проект LAB"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project8.jpg"
                  alt="Проект LAB"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name">Проект <span lang="en">LAB</span></h3>
                <p class="projects__type">Маркетинг</p>
              </div></a
            >
          </li>`,
  },
  {
    type: 'application',
    html: ` <li data-type="application" class="projects__element card">
            <a class="link projects__link" href=""
              ><div class="thumb">
                <picture>
                  <source
                    srcset="./images/project-9@1x-480.webp 1x, ./images/project-9@2x-480.webp 2x"
                    type="image/webp"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-9@1x-768.webp 1x, ./images/project-9@2x-768.webp 2x"
                    type="image/webp"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-9@1x-1200.webp 1x, ./images/project-9@2x-1200.webp 2x"
                    type="image/webp"
                    media="(min-width: 1200px)" />

                  <source
                    srcset="./images/project-9@1x-480.jpg 1x, ./images/project-9@2x-480.jpg 2x"
                    media="(max-width: 767px)" />
                  <source
                    srcset="./images/project-9@1x-768.jpg 1x, ./images/project-9@2x-768.jpg 2x"
                    media="(max-width: 1199px)" />
                  <source
                    srcset="./images/project-9@1x-1200.jpg 1x, ./images/project-9@2x-1200.jpg 2x"
                    media="(min-width: 1200px)" />

                  <img
                    class="thumb__img"
                    src="./images/project9.jpg"
                    alt="Growing Business"
                    width="370"
                    height="294"
                /></picture>
                <!-- <img
                  class="thumb__img"
                  src="./images/project9.jpg"
                  alt="Growing Business"
                /> -->
                <div class="overlay">
                  <p class="overlay__text">
                    Технокряк это современная площадка распространения коронавируса. Компании
                    используют эту платформу для цифрового шпионажа и атак на защищённые сервера
                    конкурентов.
                  </p>
                </div>
              </div>
              <div class="projects__content">
                <h3 class="projects__name" lang="en">Growing Business</h3>
                <p class="projects__type">Приложение</p>
              </div></a
            >
          </li>`,
  },
];

const projectList = document.getElementById('projectList');
const buttons = document.querySelectorAll('#filters button');

// функция рендера
function renderProjects(type = 'all') {
  projectList.innerHTML = ''; // очищаем список

  const filtered = type === 'all' ? projects : projects.filter(project => project.type === type);

  filtered.forEach(project => {
    projectList.insertAdjacentHTML('beforeend', project.html);
  });
}

// обработка кликов по кнопкам
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // сброс активных кнопок
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const type = button.dataset.type;
    renderProjects(type);
  });
});

// начальный рендер
renderProjects();
