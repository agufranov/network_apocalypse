export const quizQuestions = [
  {
    text: 'Как расшифровывается аббревиатура IED? ',
    answers: [
      { text: 'Информационно электронное реле' },
      { text: 'Интеллектуальное устройство учета' },
      { text: 'Интеллектуальное электронное устройство', isRight: true },
      { text: 'Международный энергетический департамент' },
    ]
  },
  {
    text: 'Какие сетевые настройки IED влияют на передачу GOOSE-сообщений? ',
    answers: [
      { text: 'MAC –адрес и IP – адрес' },
      { text: 'IP-адрес и VLAN', isRight: true },
      { text: 'MAC-адрес и APPID' },
      { text: 'Все вместе ' },
    ]
  },
  {
    text: 'К какому механизму передачи данных относятся GOOSE-сообщения?',
    answers: [
      { text: 'Клиент-сервер' },
      { text: 'Master-slave' },
      { text: 'Издатель-подписчик', isRight: true },
      { text: 'Точка-точка' },
    ]
  },
  {
    text: 'Какие первоначальные четыре октета MAC-адреса зарезервировано за ТК57 МЭК?',
    answers: [
      { text: '01:0D:BB:01' },
      { text: '00:0С:ВB:01' },
      { text: '01:0С:CD:04' },
      { text: '01:0C:CD:01', isRight: true },
    ]
  },
  {
    text: 'В каком диапазоне можно задавать VLAN для устройств, обменивающихся GOOSE сообщении? ',
    answers: [
      { text: '0-9999' },
      { text: '0-4095', isRight: true },
      { text: '0-1000' },
      { text: '0-512' },
    ]
  },
  {
    text: 'В какой главе серии стандартов МЭК 61850 описывается механизм передачи GOOSE сообщений? ',
    answers: [
      { text: 'МЭК 61850-6' },
      { text: 'МЭК 61850-7-4' },
      { text: 'МЭК 61850-8-1', isRight: true },
      { text: 'МЭК 61850-9-2' },
    ]
  },
  {
    text: 'Можно ли задавать одинаковые MAC-адреса разным IED?',
    answers: [
      { text: 'Да' },
      { text: 'Нет', isRight: true },
    ]
  },
  {
    text: 'Как расшифровывается аббревиатура GOOSE?',
    answers: [
      { text: 'Общее объектно-ориентированное событие на подстанции', isRight: true },
      { text: 'Быстрое сообщение релейной защиты' },
      { text: 'Никак не расшифровывается, это название птицы' },
      { text: 'Сообщение для передачи объема данных в энергетике' },
    ]
  },
  {
    text: 'К какому методу передачи трафика относится GOOSE-сообщения? ',
    answers: [
      { text: 'Unicast' },
      { text: 'Broadcast' },
      { text: 'Multicast', isRight: true },
    ]
  },
  {
    text: 'По какому интерфейсу передаются GOOSE – сообщения?',
    answers: [
      { text: 'RS-485' },
      { text: 'RS-422' },
      { text: 'Ethernet', isRight: true },
      { text: 'RS-232' },
    ]
  },
  {
    text: 'Какое минимальное время между дублирующими GOOSE-сообщениями типа 1А может быть установлено согласно «Корпоративному профилю МЭК 61850»?',
    answers: [
      { text: '4мс', isRight: true },
      { text: '10мс' },
      { text: '1мс' },
      { text: '1 мкс' },
    ]
  },
  {
    text: 'На каком уровне модели OSI передаются GOOSE – сообщения?',
    answers: [
      { text: 'Канальный', isRight: true },
      { text: 'Транспортный' },
      { text: 'Прикладной' },
      { text: 'Сетевой' },
    ]
  },
  {
    text: 'Как обозначается устройство на цифровой подстанции передающее/принимающее информации и имеющее хотя бы один процессор?',
    answers: [
      { text: 'IED', isRight: true },
      { text: 'LED' },
      { text: 'VMA' },
      { text: 'STP' },
    ]
  },
  {
    text: 'На каком уровне передается информация посредством GOOSE – сообщений?',
    answers: [
      { text: 'Кольцевой' },
      { text: 'Горизонтальный', isRight: true },
      { text: 'Вертикальный' },
      { text: 'Сквозной' },
    ]
  },
  {
    text: 'По какому механизму передачи данных работают GOOSE-сообщения?',
    answers: [
      { text: 'TPAA' },
      { text: 'MCAA', isRight: true },
      { text: 'P2P' },
      { text: 'По всем перечисленным' },
    ]
  },
]

