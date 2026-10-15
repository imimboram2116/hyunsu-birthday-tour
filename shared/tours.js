// 투어 콘텐츠 — 출처: ../../webapp-prd.md 4.0.1 투어 상세
window.TRIP = {
  date: "10월 31일 (토)",
  crew: "보람 · 혜지",
  // 5번 메모 저장용 Apps Script 웹앱 주소. 배포 후 채운다.
  memoEndpoint: "",
};

window.TOURS = [
  {
    no: 1,
    title: "때 빼고 배불리는 사우나 투어",
    detailTitle: "때 빼고 배불리는\n사우나 투어",  // 상세 제목만 줄바꿈 (v3)
    where: "용인",
    detailWhere: "때 빼고 광내고 게장 엔딩",  // 상세 제목 위 한 줄만 (v3)
    teaser: "셋만 쓰는 개별 사우나 방 + 노천 냉수탕",
    places: [
      { label: "사우나", name: "사우나 고온", desc: "용인 고기동", url: "https://naver.me/FiP7bZDv" },
      { label: "한식집", name: "안집", desc: "분당 서현동", url: "https://naver.me/GfCs6c5W" },
    ],
    options: {
      heading: "사우나 방은 둘 중 하나",
      items: [
        { name: "테라스", desc: "전기 사우나 · 히노끼 사우나 · 외기욕 데크 · 노천 냉수탕" },
        { name: "코트야드", pick: true, desc: "장작 사우나 · 히노끼 사우나 · 외기욕 데크 · 전용 냉수탕 · 노천 냉수탕" },
      ],
    },
    schedule: [
      ["13:40", "사우나 고온 도착"],
      ["14:00", "개별 사우나 2시간 30분 — 테라스 vs. 코트야드 중 택1", "options"],  // 세 번째 값: 이 줄 아래 접기에 options 내용을 넣음 (v3)
      ["16:30", "씻고 옷 갈아입기"],
      ["17:00", "안집으로 이동"],
      ["17:30", "안집 저녁 — 간장게장 정식"],
    ],
    pros: ["셋만 쓰는 개별 사우나 방 + 노천 냉수탕"],
    cons: ["술 마시고는 입장 불가 → 낮술 없이 사우나 먼저", "수영복 챙겨야 함", "이용 2일 전부터는 환불 안 됨"],
  },
  {
    no: 2,
    title: "가을이 가기 전에 부아앙",
    where: "부암동",
    detailWhere: "보람이의 2026 베스트 플레이스",  // 상세 제목 위 한 줄만 (v3)
    teaser: "이 가을에 부암동 안 가면 손해",
    secret: "장소는 당일 공개",
    places: [
      { label: "와인바", name: "7~10종 와인 큐레이션", img: "shared/img/buam-1-wine.jpg" },
      { label: "부암동 야경", name: "걷기 좋은 산책길", img: "shared/img/buam-3-night.jpg" },
      { label: "호프", name: "여기 그냥 오사카 술집", img: "shared/img/buam-2-beer.jpg" },
    ],
    schedule: [
      ["15:00", "와인 서너잔과 타파스"],
      ["20:00", "일본감성 낭낭하게 생맥"],
      ["22:00", "똠양궁 라면까지 조지고 산책길"],
    ],
    pros: ["운전 없이 셋 다 술을 마실 수 있음", "이 가을에 부암동 안 가면 손해", "보람이가 2026년 가장 사랑하는 장소"],
    cons: ["보람에게 의존해야함^.^"],
  },
  {
    no: 3,
    title: "콧바람 쐬고\n럭셔리 풀코스",
    where: "이천",
    detailWhere: "드라이브는 거들 뿐, 제대로 먹는 날",  // 상세 제목 위 한 줄만 (v3)
    teaser: "맥주 마시고 고기·장어·랍스터까지 «거하게»",
    places: [
      { label: "브루어리", name: "을를피자", desc: "이천 증포동", url: "https://naver.me/GipBB4ny" },
      { label: "그릴 코스", name: "장복골 이천", desc: "이천 호법면", url: "https://naver.me/xk1nbzsd" },
    ],
    schedule: [
      ["15:00", "을를피자에서 수제맥주 한 잔 캬"],
      ["17:30", "장복골로 이동"],
      ["18:00", "장복골 그릴 코스"],
    ],
    pros: ["바베큐, 장어, 랍스터까지 거하게 풀코스", "수제 맥주 포장도 가능 (현수네 언니가 좋아함!)", "두 곳 다 평점 4.9"],
    cons: ["서울에서 거리가 있지만 콧바람 쐬는 겸", "장복골은 오후3~6시 브레이크 타임"],
  },
  {
    no: 4,
    title: "어린이처럼 놀 건대? 핫플 완전 정복",
    where: "어린이대공원",
    detailTitle: "어린이처럼 놀 건대?\n핫플 완전 정복",  // 상세 제목만 줄바꿈 (v3)
    detailWhere: "요즘 인스타에서 핫한 곳",  // 상세 제목 위 한 줄만 (v3)
    teaser: "브런치 → 동물원 → 카페 → 저녁까지 한 동네에서 걸어서 이어짐",
    places: [
      { label: "브런치", name: "데케드 파크", desc: "광진 구의동", url: "https://naver.me/FxC8xJsO" },
      { label: "동물원 나들이", name: "서울어린이대공원동물원", desc: "광진 능동", url: "https://naver.me/5GpYtQ8E" },
      { label: "느좋 카페", name: "연필", desc: "광진 군자동", url: "https://naver.me/GI3JcEks" },
      { label: "요즘 핫한 와인바 (1안)", name: "이자리", desc: "광진 능동", url: "https://naver.me/xAfVf1W1" },
      { label: "요즘 핫한 이자카야 (2안)", name: "이차차", desc: "광진 군자동", url: "https://naver.me/FSv7x1f4" },
    ],
    schedule: [
      ["12:00", "데케드 파크 브런치"],
      ["13:30", "동물원 나들이 (17:00 마감)"],
      ["17:15", "느좋 카페 연필"],
      ["19:00", "저녁 — 1안 이자리 / 2안 이차차"],
    ],
    pros: ["브런치 → 동물원 → 카페 → 저녁까지 한 동네에서 걸어서 이어짐", "동물원 입장료 무료", "놀다가 안 내키면 쉽게 교체 가능", "여차하면 뚝섬 한강유원지도 코 앞", "데케드 파크 평점 4.83 (리뷰 959건)"],
    cons: ["걷는 거 싫어하면 싫을수 있음..."],
  },
  {
    no: 5,
    title: "방탈출 빼고 현수 맘대로",
    where: "",
    teaser: "하고 싶은 걸 적어줘",
    memo: true,
  },
];
