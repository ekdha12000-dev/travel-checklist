/**
 * 비키니시티 104번 버스 정류장 - 코끼리물범의 비주얼노벨 영화관
 * 영화 데이터베이스 (23편)
 */

const MOVIES_DATA = [
  // 1. SF / 판타지
  {
    id: "interstellar",
    title: "인터스텔라",
    originalTitle: "Interstellar",
    year: 2014,
    genre: "SF / 판타지",
    genreId: "sf",
    rating: "9.1",
    runtime: "169분",
    director: "크리스토퍼 놀란",
    cast: "매튜 맥커너히, 앤 해서웨이, 제시카 차스테인",
    poster: "images/posters/interstellar.jpg",
    accentColor: "#38bdf8",
    synopsis: "황폐화된 지구의 종말을 앞두고, 인류의 새로운 보금자리를 찾기 위해 시공간의 웜홀을 통과하는 우주비행사들의 경이롭고 눈물겨운 여정.",
    sealQuote: "옥수수밭에서 웜홀까지... 나처럼 벤치에 가만히 앉아있다 보면 시간이 왜곡되는 걸 직접 느낄 수 있을 거야. '우린 답을 찾을 것이다, 늘 그랬듯이!' 버스는 못 찾아도...",
    dialogue: "어이, 차원이 다른 영화를 원해? 《인터스텔라》를 봐! 중력과 사랑은 시공간을 초월한다는 걸 알게 될걸."
  },
  {
    id: "inception",
    title: "인셉션",
    originalTitle: "Inception",
    year: 2010,
    genre: "SF / 판타지",
    genreId: "sf",
    rating: "9.2",
    runtime: "148분",
    director: "크리스토퍼 놀란",
    cast: "레오나르도 디카프리오, 조셉 고든 레빗, 마리옹 꼬띠아르",
    poster: "images/posters/inception.jpg",
    accentColor: "#f59e0b",
    synopsis: "타인의 꿈에 들어가 생각을 훔치는 특수 보안요원 코브. 그에게 생각을 심는 거대한 '인셉션' 미션이 주어지며 꿈과 현실의 경계가 무너지기 시작한다.",
    sealQuote: "팽이가 계속 돌고 있으면 지금 버스 기다리는 이 상황도 꿈일까? 제발 꿈이었으면 좋겠네, 버스 3시간째 안 오거든...",
    dialogue: "생각을 심어주는 영화, 《인셉션》이야! 결말 보고 나서 팽이 돌려보고 싶어질 테니 조심해."
  },
  {
    id: "matrix",
    title: "매트릭스",
    originalTitle: "The Matrix",
    year: 1999,
    genre: "SF / 판타지",
    genreId: "sf",
    rating: "9.3",
    runtime: "136분",
    director: "워쇼스키 자매",
    cast: "키아누 리브스, 로렌스 피시번, 캐리 앤 모스",
    poster: "images/posters/matrix.jpg",
    accentColor: "#22c55e",
    synopsis: "평범한 회사원 토마스 앤더슨. 자신이 살고 있는 세계가 AI 기계들이 만든 가상현실 '매트릭스'임을 깨닫고, 인류 구원의 메시아 '네오'로 각성한다.",
    sealQuote: "빨간 약 먹으면 버스가 바로 오고, 파란 약 먹으면 벤치에서 계속 꿀잠 잘 수 있다면... 난 파란 약 먹고 계속 잘래.",
    dialogue: "SF 액션의 영원한 바이블! 《매트릭스》! 총알 피하는 허리 꺾기 동작, 벤치에서 따라 하면 허리 나가니까 조심해."
  },
  {
    id: "avatar",
    title: "아바타: 물의 길",
    originalTitle: "Avatar: The Way of Water",
    year: 2022,
    genre: "SF / 판타지",
    genreId: "sf",
    rating: "8.8",
    runtime: "192분",
    director: "제임스 카메론",
    cast: "샘 워싱턴, 조 샐다나, 시고니 위버",
    poster: "images/posters/avatar.jpg",
    accentColor: "#06b6d4",
    synopsis: "판도라 행성에서 가정을 이룬 제이크 설리와 네이티리가 가족을 지키기 위해 바다의 멧카이나 부족을 찾아 떠나며 펼쳐지는 장대한 해양 대서사시.",
    sealQuote: "물의 길에는 시작도 끝도 없다... 나처럼 물에 사는 바다생물 입장에서는 영상미 하나만으로도 눈알이 호강하는 작품이지.",
    dialogue: "바다 냄새 물씬 나는 압도적 영상미의 《아바타: 물의 길》! 버스 기다리는 동안 3시간 순식간에 삭제된다."
  },

  // 2. 액션 / 모험
  {
    id: "dark_knight",
    title: "다크 나이트",
    originalTitle: "The Dark Knight",
    year: 2008,
    genre: "액션 / 모험",
    genreId: "action",
    rating: "9.5",
    runtime: "152분",
    director: "크리스토퍼 놀란",
    cast: "크리스찬 베일, 히스 레저, 아론 에크하트",
    poster: "images/posters/dark_knight.jpg",
    accentColor: "#94a3b8",
    synopsis: "고담시를 지키는 배트맨과 법의 수호자 하비 덴트. 그들 앞에 혼돈 그 자체인 최악의 악당 '조커'가 나타나 정의의 본질을 흔들어 놓는다.",
    sealQuote: "'Why so serious?' 왜 그렇게 심각해? 버스 좀 늦게 올 수도 있지... 히스 레저의 조커 연기는 인류 역사에 남을 명연기야.",
    dialogue: "히어로 영화의 절대적 정점, 《다크 나이트》! 히스 레저의 광기 어린 연기를 아직 안 봤다면 인생 손해 본 거다."
  },
  {
    id: "top_gun_maverick",
    title: "탑건: 매버릭",
    originalTitle: "Top Gun: Maverick",
    year: 2022,
    genre: "액션 / 모험",
    genreId: "action",
    rating: "9.6",
    runtime: "130분",
    director: "조셉 코신스키",
    cast: "톰 크루즈, 마일즈 텔러, 제니퍼 코넬리",
    poster: "images/posters/top_gun_maverick.jpg",
    accentColor: "#f97316",
    synopsis: "전설적인 파일럿 매버릭이 비밀 작전을 위해 엘리트 졸업생들을 교육하는 교관으로 복귀하며 벌어지는 아드레날린 폭발 항공 액션.",
    sealQuote: "전투기 속도가 마하 10이라는데, 비키니시티 104번 버스는 시속 10km도 안 나오는 것 같아. 속도감 대리만족하고 싶을 때 최고!",
    dialogue: "톰 크루즈 형님의 실제 비행 액션! 《탑건: 매버릭》! 심장이 터질 것 같은 전율을 느끼게 해줄게."
  },
  {
    id: "mad_max",
    title: "매드맥스: 분노의 도로",
    originalTitle: "Mad Max: Fury Road",
    year: 2015,
    genre: "액션 / 모험",
    genreId: "action",
    rating: "9.3",
    runtime: "120분",
    director: "조지 밀러",
    cast: "톰 하디, 샤를리즈 테론, 니콜라스 홀트",
    poster: "images/posters/mad_max.jpg",
    accentColor: "#ef4444",
    synopsis: "물과 기름을 차지한 독재자 임모탄에 맞서, 사령관 퓨리오사와 맥스가 분노의 도로 위에서 펼치는 멈추지 않는 광란의 카체이싱 액션.",
    sealQuote: "기억해줘!(Witness me!) 시작부터 끝까지 브레이크 없이 달리는 미친 영화야. 버스 안 오는 답답함이 단번에 날아갈걸?",
    dialogue: "심장이 쿵쾅거리는 미친 액션! 《매드맥스: 분노의 도로》! 빨간 내복 기타리스트가 꿈에 나올지도 몰라."
  },
  {
    id: "gladiator",
    title: "글래디에이터",
    originalTitle: "Gladiator",
    year: 2000,
    genre: "액션 / 모험",
    genreId: "action",
    rating: "9.1",
    runtime: "155분",
    director: "리들리 스콧",
    cast: "러셀 크로우, 호아킨 피닉스, 코니 닐슨",
    poster: "images/posters/gladiator.jpg",
    accentColor: "#eab308",
    synopsis: "로마 제국의 위대한 장군 막시무스가 배신당해 노예 검투사로 전락한 후, 황제 코모두스에 맞서 복수를 완성해가는 웅장한 대서사시.",
    sealQuote: "'내 이름은 막시무스...' 벤치에 앉아서 이 대사 한번 읊조리면 지나가던 해파리도 경례하고 갈 정도의 전율이지.",
    dialogue: "검투사의 뜨거운 피와 영혼! 《글래디에이터》! 한스 짐머의 OST와 러셀 크로우의 눈빛에 온몸이 전율할 거다."
  },

  // 3. 애니메이션
  {
    id: "spirited_away",
    title: "센과 치히로의 행방불명",
    originalTitle: "Spirited Away",
    year: 2001,
    genre: "애니메이션",
    genreId: "animation",
    rating: "9.4",
    runtime: "125분",
    director: "미야자키 하야오",
    cast: "히이라기 루미, 이리노 미유, 나츠키 마리",
    poster: "images/posters/spirited_away.jpg",
    accentColor: "#10b981",
    synopsis: "금지된 신들의 세계로 들어간 소녀 치히로. 돼지로 변해버린 부모님을 구하고 자신의 진짜 이름을 되찾기 위해 온천장에서 일하게 되는데...",
    sealQuote: "터널을 지나면 신들의 온천이 나온대. 나도 온천욕 참 좋아하는데... 가오나시처럼 얌전하게 앉아있으면 온천 티켓 주려나?",
    dialogue: "지브리의 불후의 명작! 《센과 치히로의 행방불명》! 기차 타고 바다 위를 달리는 장면은 언제 봐도 가슴이 뭉클하지."
  },
  {
    id: "spider_verse",
    title: "스파이더맨: 뉴 유니버스",
    originalTitle: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "애니메이션",
    genreId: "animation",
    rating: "9.3",
    runtime: "117분",
    director: "밥 퍼시케티, 피터 램지",
    cast: "샤메익 무어, 제이크 존슨, 헤일리 스타인펠드",
    poster: "images/posters/spider_verse.jpg",
    accentColor: "#ec4899",
    synopsis: "평범한 10대 마일스 모랄레스가 새로운 스파이더맨으로 거듭나며, 다차원 평행우주에서 온 각양각색의 스파이더맨들과 팀을 이뤄 세계를 구한다.",
    sealQuote: "만화책이 살아 움직이는 것 같은 미친 비주얼! 마일스가 건물에서 도약하는 그 장면은 버스 기다리다 일어나서 뛰어내리고 싶게 만든다니까.",
    dialogue: "힙합 음악과 만화책 스타일 영상미의 혁명, 《스파이더맨: 뉴 유니버스》! 눈이 쉴 틈이 없는 걸작이야."
  },
  {
    id: "your_name",
    title: "너의 이름은.",
    originalTitle: "Your Name.",
    year: 2016,
    genre: "애니메이션",
    genreId: "animation",
    rating: "9.2",
    runtime: "106분",
    director: "신카이 마코토",
    cast: "카미키 류노스케, 카미시라이시 모네",
    poster: "images/posters/your_name.jpg",
    accentColor: "#60a5fa",
    synopsis: "도쿄 소년 타키와 시골 소녀 미츠하. 만난 적 없는 두 사람이 꿈속에서 몸이 뒤바뀌며 시작되는 시공간을 초월한 기적 같은 사랑과 운명의 이야기.",
    sealQuote: "'아직 만난 적 없는 너를 찾고 있어...' 104번 버스야, 너도 아직 안 온 거니? RADWIMPS 노래 들으면서 눈물 한 방울 훔치기 딱 좋지.",
    dialogue: "신카이 마코토의 감성 끝판왕, 《너의 이름은.》! 혜성이 떨어지는 하늘과 잊을 수 없는 그 이름..."
  },
  {
    id: "zootopia",
    title: "주토피아",
    originalTitle: "Zootopia",
    year: 2016,
    genre: "애니메이션",
    genreId: "animation",
    rating: "9.3",
    runtime: "108분",
    director: "바이런 하워드, 리치 무어",
    cast: "지니퍼 굿윈, 제이슨 베이트먼",
    poster: "images/posters/zootopia.jpg",
    accentColor: "#fb923c",
    synopsis: "누구나 무엇이든 될 수 있는 도시 주토피아! 최초의 토끼 경찰관 주디와 뻔뻔한 사기꾼 여우 닉이 연쇄 실종 사건을 파헤치며 환상의 콤비로 활약한다.",
    sealQuote: "나무늘보 플래시가 일처리 하는 속도... 지금 우리 정류장 버스 배차 간격이랑 정확히 똑같아. 속 터지지만 주디와 닉은 최고 귀여움!",
    dialogue: "디즈니 최고의 버디 무비 《주토피아》! 편견을 깨고 꿈을 향해 달리는 주디와 능글맞은 닉의 티키타카를 봐!"
  },

  // 4. 드라마 / 명작
  {
    id: "parasite",
    title: "기생충",
    originalTitle: "Parasite",
    year: 2019,
    genre: "드라마 / 명작",
    genreId: "drama",
    rating: "9.4",
    runtime: "132분",
    director: "봉준호",
    cast: "송강호, 이선균, 조여정, 최우식, 박소담",
    poster: "images/posters/parasite.jpg",
    accentColor: "#10b981",
    synopsis: "전원 백수로 살길이 막막한 기택 가족의 장남 기우가 박사장네 고액 과외선생으로 들어가면서 시작되는, 걷잡을 수 없는 두 가족의 충돌.",
    sealQuote: "'너는 다 계획이 있구나?'... 난 솔직히 버스 언제 올지 계획도 없어. 비 오는 날 짜파구리 끓여 먹으면서 보기 완벽한 봉테일 명작이지.",
    dialogue: "칸 영화제 황금종려상과 아카데미 4관왕의 신화, 《기생충》! 봉준호 감독 특유의 서스펜스와 블랙 코미디의 절정이야."
  },
  {
    id: "shawshank",
    title: "쇼생크 탈출",
    originalTitle: "The Shawshank Redemption",
    year: 1994,
    genre: "드라마 / 명작",
    genreId: "drama",
    rating: "9.6",
    runtime: "142분",
    director: "프랭크 다라본트",
    cast: "팀 로빈스, 모건 프리먼, 밥 건튼",
    poster: "images/posters/shawshank.jpg",
    accentColor: "#38bdf8",
    synopsis: "아내 살해 누명을 쓰고 악명 높은 쇼생크 교도소에 갇힌 앤디 듀프레인. 절망 속에서도 희망을 잃지 않고 20년간 치밀하게 준비한 자유를 향한 탈출.",
    sealQuote: "'희망은 좋은 것입니다. 가장 좋은 것일지도 몰라요.' 앤디가 숟가락으로 벽을 팔 때 난 벤치에서 버스 올 희망을 품고 있지.",
    dialogue: "전 세계 영화 평점 부동의 1위! 《쇼생크 탈출》! 빗속에서 두 팔을 벌리는 그 순간의 자유를 너도 느껴봐."
  },
  {
    id: "forrest_gump",
    title: "포레스트 검프",
    originalTitle: "Forrest Gump",
    year: 1994,
    genre: "드라마 / 명작",
    genreId: "drama",
    rating: "9.3",
    runtime: "142분",
    director: "로버트 저메키스",
    cast: "톰 행크스, 로빈 라이트, 게리 시니즈",
    poster: "images/posters/forrest_gump.jpg",
    accentColor: "#facc15",
    synopsis: "불편한 다리와 순수한 영혼을 가진 포레스트 검프. 어머니의 사랑과 첫사랑 제니를 마음에 품고 달리다 보니 미국 현대사의 기적 같은 순간들의 주인공이 된다.",
    sealQuote: "'인생은 초콜릿 상자와 같단다. 어떤 것을 잡을지 아무도 모르거든.' 영화 추천도 그래. 네가 이번에 뽑은 영화가 네 인생 초콜릿이 될지 누가 알아?",
    dialogue: "포레스트도 벤치에 앉아서 초콜릿 먹으며 이야기했지! 바로 나처럼! 마음이 따뜻해지는 감동 명작 《포레스트 검프》야."
  },

  // 5. 로맨스 / 멜로
  {
    id: "la_la_land",
    title: "라라랜드",
    originalTitle: "La La Land",
    year: 2016,
    genre: "로맨스 / 멜로",
    genreId: "romance",
    rating: "9.0",
    runtime: "128분",
    director: "데이미언 셔젤",
    cast: "라이언 고슬링, 엠마 스톤",
    poster: "images/posters/la_la_land.jpg",
    accentColor: "#c084fc",
    synopsis: "꿈을 꾸는 사람들을 위한 별들의 도시 LA. 재즈 피아니스트 세바스찬과 배우 지망생 미아가 만나 사랑을 키우며 꿈과 현실 사이에서 갈등한다.",
    sealQuote: "보랏빛 노을 아래 탭댄스 추는 장면... 나도 이 뚱뚱한 몸만 아니면 버스 정류장에서 탭댄스 한번 갈기는 건데. City of Stars 음악이 귓가에 맴돈다.",
    dialogue: "눈과 귀가 황홀해지는 뮤지컬 로맨스 《라라랜드》! 꿈과 사랑의 엇갈림이 남기는 아련한 여운을 느껴봐."
  },
  {
    id: "about_time",
    title: "어바웃 타임",
    originalTitle: "About Time",
    year: 2013,
    genre: "로맨스 / 멜로",
    genreId: "romance",
    rating: "9.2",
    runtime: "123분",
    director: "리차드 커티스",
    cast: "도널 글리슨, 레이첼 맥아담스, 빌 나이",
    poster: "images/posters/about_time.jpg",
    accentColor: "#fb7185",
    synopsis: "성인이 되자마자 시간 여행 능력이 있다는 가문의 비밀을 알게 된 팀. 첫눈에 반한 메리와의 완벽한 사랑을 위해 시간을 되돌리기 시작하는데...",
    sealQuote: "어제를 다시 살 수 있다면 버스를 놓쳤던 30분 전으로 돌아가고 싶다... 평범한 하루의 소중함을 일깨워주는 최고의 인생 로맨스 영화야.",
    dialogue: "보고 나면 주변 사람들을 더 사랑하게 되는 따뜻한 명작, 《어바웃 타임》! 오늘 하루를 특별하게 만들어줄 거야."
  },
  {
    id: "eternal_sunshine",
    title: "이터널 선샤인",
    originalTitle: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "로맨스 / 멜로",
    genreId: "romance",
    rating: "9.3",
    runtime: "108분",
    director: "미셸 공드리",
    cast: "짐 캐리, 케이트 윈슬렛, 커스틴 던스트",
    poster: "images/posters/eternal_sunshine.jpg",
    accentColor: "#38bdf8",
    synopsis: "이별의 고통을 견디지 못하고 기억을 지우는 회사 '라쿠나'를 찾아간 조엘. 클레멘타인과의 기억이 지워져 가는 뇌 속에서, 잊고 싶지 않은 사랑을 지키려 발버둥친다.",
    sealQuote: "기억을 지워도 마음은 기억하고 있다잖아... 지우고 싶은 흑역사가 많은 나로서는 공감 200%! 짐 캐리의 멜로 눈빛은 진짜 반칙이야.",
    dialogue: "얼어붙은 찰스강 위에 누워 밤하늘을 보던 그 기억, 《이터널 선샤인》! 이별해 본 사람이라면 누구나 가슴을 부여잡게 되지."
  },

  // 6. 스릴러 / 미스터리
  {
    id: "joker",
    title: "조커",
    originalTitle: "Joker",
    year: 2019,
    genre: "스릴러 / 미스터리",
    genreId: "thriller",
    rating: "9.0",
    runtime: "122분",
    director: "토드 필립스",
    cast: "호아킨 피닉스, 로버트 드 니로, 재지 비츠",
    poster: "images/posters/joker.jpg",
    accentColor: "#a855f7",
    synopsis: "고담시에서 코미디언을 꿈꾸며 광대로 일하는 아서 플렉. 가난과 차별, 비웃음 속에서 고립되던 그는 세상의 부조리에 서서히 광기를 드러내기 시작한다.",
    sealQuote: "'내 인생이 비극인 줄 알았는데, 개같은 코미디였어.' 계단에서 춤추는 장면 보고 버스 정류장에서 춤출 뻔했잖아. 호아킨 피닉스 연기력에 기절함.",
    dialogue: "베니스 황금사자상을 거머쥔 압도적 몰입감! 《조커》! 호아킨 피닉스의 뼈마디 하나하나까지 전해지는 광기를 마주해봐."
  },
  {
    id: "knives_out",
    title: "나이브스 아웃",
    originalTitle: "Knives Out",
    year: 2019,
    genre: "스릴러 / 미스터리",
    genreId: "thriller",
    rating: "8.9",
    runtime: "130분",
    director: "라이언 존슨",
    cast: "다니엘 크레이그, 크리스 에반스, 아나 데 아르마스",
    poster: "images/posters/knives_out.jpg",
    accentColor: "#eab308",
    synopsis: "베스트셀러 미스터리 작가의 85세 생일 다음 날 일어난 의문의 죽음. 명탐정 브누아 블랑이 저택에 모인 수상쩍은 가족들의 거짓말을 하나씩 벗겨낸다.",
    sealQuote: "도넛 구멍 안의 또 다른 도넛... 범인이 누군지 맞추려고 팝콘 씹다 보면 어느새 영화 끝남! 아가사 크리스티 소설 읽는 기분이야.",
    dialogue: "두뇌 풀가동 추리 쇼! 《나이브스 아웃》! 쫀득한 전개와 위트 넘치는 대사들에 시간 가는 줄 모를 거다."
  },
  {
    id: "oldboy",
    title: "올드보이",
    originalTitle: "Oldboy",
    year: 2003,
    genre: "스릴러 / 미스터리",
    genreId: "thriller",
    rating: "9.2",
    runtime: "120분",
    director: "박찬욱",
    cast: "최민식, 유지태, 강혜정",
    poster: "images/posters/oldboy.jpg",
    accentColor: "#dc2626",
    synopsis: "영문도 모른 채 15년간 사설 감옥에 갇혀 군만두만 먹던 오대수. 마침내 풀려난 그에게 자신을 가둔 자가 5일간의 수수께끼를 제안하며 비극적 복수극이 시작된다.",
    sealQuote: "15년 동안 군만두만 먹다니... 나도 벤치에서 버스 15년 기다리면 복수하러 가야 하나? 장도리 복도 액션씬은 세계 영화사 레전드!",
    dialogue: "한국 영화의 자랑, 박찬욱 감독의 걸작 《올드보이》! 충격적인 반전과 장도리 씬의 서늘한 서스펜스를 잊을 수 없을 거야."
  },

  // 7. 코미디 / 힐링
  {
    id: "the_truman_show",
    title: "트루먼 쇼",
    originalTitle: "The Truman Show",
    year: 1998,
    genre: "코미디 / 힐링",
    genreId: "comedy",
    rating: "9.4",
    runtime: "103분",
    director: "피터 위어",
    cast: "짐 캐리, 로라 리니, 에드 해리스",
    poster: "images/posters/the_truman_show.jpg",
    accentColor: "#38bdf8",
    synopsis: "하루 24시간 전 세계에 생중계되는 거대한 세트장 속에서 평생을 살아온 트루먼. 이상한 징조들을 눈치채고 진짜 바깥세상으로 탈출하기 위해 바다로 항해한다.",
    sealQuote: "'좋은 아침입니다! 혹시 못 볼지도 모르니, 좋은 오후, 좋은 저녁, 좋은 밤 보내세요!' 가끔은 이 비키니시티 정류장도 거대한 세트장 아닐까 의심돼.",
    dialogue: "철학적이면서도 유쾌하고 감동적인 《트루먼 쇼》! 짐 캐리의 진정성 있는 미소와 마지막 인사에 눈시울이 붉어질걸."
  },
  {
    id: "grand_budapest",
    title: "그랜드 부다페스트 호텔",
    originalTitle: "The Grand Budapest Hotel",
    year: 2014,
    genre: "코미디 / 힐링",
    genreId: "comedy",
    rating: "9.0",
    runtime: "100분",
    director: "웨스 앤더슨",
    cast: "랄프 파인즈, 토니 레볼로리, 시얼샤 로넌",
    poster: "images/posters/grand_budapest.jpg",
    accentColor: "#f43f5e",
    synopsis: "세계 최고 호텔의 전설적인 지배인 구스타브와 로비보이 제로. 명화 '사과를 든 소년'을 둘러싼 살인사건과 유산 상속 음모를 기상천외한 모험으로 헤쳐나간다.",
    sealQuote: "완벽한 좌우대칭과 파스텔톤 핑크빛 영상미! 멘들스 케이크 한 조각 입에 물고 보면 마음이 몽글몽글 정화되는 마법 같은 영화야.",
    dialogue: "웨스 앤더슨 미학의 결정체, 《그랜드 부다페스트 호텔》! 한 편의 예쁜 동화책을 넘겨보는 듯한 황홀한 재미를 느껴봐."
  }
];

// 평상시 대화 대사 목록 (Idle Mode Dialogues)
const IDLE_DIALOGUES = [
  "하아... 여기 비키니시티 104번 버스는 올 생각을 안 하네. 너도 버스 기다리는 거야?",
  "심심하면 내가 기가 막힌 명작 영화 하나 추천해줄까? 내 뱃살을 걸고 재미는 보장하지.",
  "버스가 올 때까지 가만히 멍 때리는 것도 좋지만, 인생 영화 한 편 찾아두는 건 어때?",
  "원하는 장르가 있으면 골라봐. 아니면 [🎲 아무거나 추천] 버튼을 쾅 눌러도 되고!",
  "참고로 나 여기서 3년째 버스 기다리는 중이야... 너도 설마 오늘 처음 온 건 아니겠지?"
];

// 캐릭터(코끼리물범) 찔렀을 때 반응 (Poke reactions)
const POKE_REACTIONS = [
  "어허! 사람... 아니, 물범 뱃살 함부로 찌르는 거 아냐.",
  "음? 왜 자꾸 찔러? 버스 안 온다니까...",
  "간지러워! 그 손가락으로 얼른 [영화 추천] 버튼이나 눌러봐.",
  "명상 중이야. 버스가 언제 올지 우주의 기운을 느끼는 중이라고.",
  "너 지금 나 뚱뚱하다고 쳐다보는 거지? 바다코끼리는 체지방이 방한복이야!",
  "심심하면 저기 장르 버튼이나 눌러봐. 끝내주는 영화 골라줄 테니까."
];

// Web Audio API 사운드 신시사이저 (무음/효과음 제어)
class SoundFx {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playTypeBlip() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      const freq = 600 + Math.random() * 150;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.04);
    } catch (e) {}
  }

  playSlideWhoosh() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(180, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(420, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {}
  }

  playCardChime() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.09, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.35);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.35);
      });
    } catch (e) {}
  }
}

// 애플리케이션 메인 컨트롤러
class MovieVisualNovelApp {
  constructor() {
    this.sfx = new SoundFx();
    this.state = 'IDLE'; // 'IDLE' or 'MOVIE'
    this.currentGenre = 'all';
    this.currentMovie = null;
    this.typeTimer = null;
    this.isTyping = false;
    this.fullTextToType = '';
    this.idleIndex = 0;

    this.cacheDOMElements();
    this.bindEvents();
    this.initUnderwaterBubbles();
    this.startIdleState();
  }

  cacheDOMElements() {
    // 배경 레이어
    this.bgIdle = document.getElementById('bgIdle');
    this.bgEmpty = document.getElementById('bgEmpty');
    this.stageContainer = document.getElementById('stageContainer');

    // 캐릭터
    this.sealActor = document.getElementById('sealActor');
    this.sealFloatBubble = document.getElementById('sealFloatBubble');
    this.sealFloatText = document.getElementById('sealFloatText');

    // 영화 카드 (쇼케이스)
    this.movieShowcase = document.getElementById('movieShowcase');

    // 대화창 UI
    this.vnDialogueBox = document.getElementById('vnDialogueBox');
    this.speakerName = document.getElementById('speakerName');
    this.dialogueText = document.getElementById('dialogueText');
    this.advanceArrow = document.getElementById('advanceArrow');
    this.dialogueChoices = document.getElementById('dialogueChoices');

    // 상단 컨트롤
    this.btnRandom = document.getElementById('btnRandom');
    this.btnSound = document.getElementById('btnSound');
    this.soundIcon = document.getElementById('soundIcon');
    this.soundLabel = document.getElementById('soundLabel');
    this.genreTabs = document.querySelectorAll('.genre-tab');
    this.busStatusPill = document.getElementById('busStatusPill');
  }

  bindEvents() {
    // 아무거나 추천 버튼
    this.btnRandom.addEventListener('click', () => {
      this.sfx.playPop();
      this.recommendMovie('all');
    });

    // 장르 탭 버튼들
    this.genreTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const genre = e.currentTarget.dataset.genre;
        this.sfx.playPop();
        this.updateGenreTabUI(genre);
        this.recommendMovie(genre);
      });
    });

    // 사운드 토글
    this.btnSound.addEventListener('click', () => {
      this.sfx.enabled = !this.sfx.enabled;
      if (this.sfx.enabled) {
        this.sfx.init();
        this.sfx.playPop();
        this.soundIcon.textContent = '🔊';
        this.soundLabel.textContent = '효과음 ON';
        this.btnSound.classList.remove('muted');
      } else {
        this.soundIcon.textContent = '🔇';
        this.soundLabel.textContent = '효과음 OFF';
        this.btnSound.classList.add('muted');
      }
    });

    // 코끼리물범 클릭 시 쿡 찌르기 반응
    this.sealActor.addEventListener('click', (e) => {
      e.stopPropagation();
      this.pokeSeal();
    });

    // 평상시 배경 클릭 시에도 캐릭터 찌르기 동작 가능
    this.bgIdle.addEventListener('click', () => {
      if (this.state === 'IDLE') {
        this.pokeSeal();
      }
    });

    // 대화창 클릭 시 텍스트 타이핑 즉시 완료
    this.vnDialogueBox.addEventListener('click', () => {
      if (this.isTyping) {
        this.skipTyping();
      }
    });
  }

  // 버스 정류장 물방울 파티클 생성
  initUnderwaterBubbles() {
    const bubbleContainer = document.getElementById('bubbleLayer');
    if (!bubbleContainer) return;
    const bubbleCount = 18;
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.className = 'underwater-bubble';
      const size = Math.random() * 18 + 6;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 8 + 6}s`;
      bubble.style.animationDelay = `${Math.random() * 6}s`;
      bubbleContainer.appendChild(bubble);
    }
  }

  // 장르 탭 UI 활성화 갱신
  updateGenreTabUI(genreId) {
    this.currentGenre = genreId;
    this.genreTabs.forEach(tab => {
      if (tab.dataset.genre === genreId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 1. 평상시 상태 (IDLE: 첫 번째 첨부 이미지 사용)
  // ==========================================
  startIdleState() {
    this.state = 'IDLE';

    // 1st 이미지(idle_bench_seal.png) 활성화, 2nd 이미지(bg_bench_empty.jpg) 숨김
    this.bgIdle.classList.add('active');
    this.bgEmpty.classList.remove('active');

    // 캐릭터 스프라이트는 초기 벤치 위치로 리셋 후 숨김 (idle 이미지에 이미 코끼리물범이 앉아있음)
    this.sealActor.className = 'seal-actor bench-position hidden';
    this.stageContainer.classList.remove('movie-mode');
    this.stageContainer.classList.add('idle-mode');

    // 영화 쇼케이스 숨김
    this.movieShowcase.classList.remove('active');
    this.movieShowcase.innerHTML = '';

    // 버스 현황 뱃지
    if (this.busStatusPill) {
      this.busStatusPill.innerHTML = '<span class="status-dot pulsing"></span> 104번 버스: <strong>도착 정보 없음</strong>';
    }

    // 대화창 텍스트 시작
    const dialogue = IDLE_DIALOGUES[this.idleIndex % IDLE_DIALOGUES.length];
    this.typeDialogue(dialogue, () => {
      this.renderIdleChoices();
    });
  }

  // 평상시 대화창 선택지 렌더링
  renderIdleChoices() {
    this.dialogueChoices.innerHTML = `
      <button type="button" class="vn-choice-btn highlight" id="choiceRandom">
        <span class="icon">🎲</span> 아무거나 골라줘! (랜덤 추천)
      </button>
      <button type="button" class="vn-choice-btn" id="choiceGenre">
        <span class="icon">🍿</span> 장르별 추천 받아보기
      </button>
      <button type="button" class="vn-choice-btn" id="choiceBus">
        <span class="icon">🚏</span> 버스는 대체 언제 와요?
      </button>
      <button type="button" class="vn-choice-btn" id="choicePoke">
        <span class="icon">💬</span> 너 여기서 뭐 하고 있어?
      </button>
    `;

    document.getElementById('choiceRandom')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.recommendMovie('all');
    });

    document.getElementById('choiceGenre')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.typeDialogue("어떤 맛의 영화를 좋아해? 위쪽이나 아래 장르 버튼 중 하나를 콕 집어봐!", () => {
        this.renderGenreChoices();
      });
    });

    document.getElementById('choiceBus')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.typeDialogue("글쎄... 나도 3년 전부터 여기서 기다리고 있는데 한 대도 안 오더라고. 버스 기다리다 지치면 영화나 보는 게 상책이야.", () => {
        this.renderIdleChoices();
      });
    });

    document.getElementById('choicePoke')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.pokeSeal();
    });
  }

  // 장르 선택 팝업/버튼들
  renderGenreChoices() {
    this.dialogueChoices.innerHTML = `
      <button type="button" class="vn-choice-btn" data-genre="sf">🚀 SF·판타지</button>
      <button type="button" class="vn-choice-btn" data-genre="action">💥 액션·모험</button>
      <button type="button" class="vn-choice-btn" data-genre="animation">🎨 애니메이션</button>
      <button type="button" class="vn-choice-btn" data-genre="drama">🎭 드라마·명작</button>
      <button type="button" class="vn-choice-btn" data-genre="romance">💖 로맨스·멜로</button>
      <button type="button" class="vn-choice-btn" data-genre="thriller">😱 스릴러·미스터리</button>
      <button type="button" class="vn-choice-btn" data-genre="comedy">🤣 코미디·힐링</button>
      <button type="button" class="vn-choice-btn cancel" id="choiceBack">↩️ 벤치로</button>
    `;

    this.dialogueChoices.querySelectorAll('[data-genre]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const g = e.currentTarget.dataset.genre;
        this.sfx.playPop();
        this.updateGenreTabUI(g);
        this.recommendMovie(g);
      });
    });

    document.getElementById('choiceBack')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.startIdleState();
    });
  }

  // ==========================================
  // 2. 영화 추천 모드: 비주얼노벨 애니메이션 연출
  // "두번째(bg_bench_empty.jpg), 3번째(seal_sprite.png) 이미지를 이용해
  // 캐릭터가 원래 위치에서 화면의 좌측으로 이동한 다음 가운데에 영화 포스터를 띄우도록"
  // ==========================================
  recommendMovie(genreId = 'all') {
    this.state = 'MOVIE';
    this.updateGenreTabUI(genreId);

    // 추천할 영화 선택
    let pool = MOVIES_DATA;
    if (genreId !== 'all') {
      pool = MOVIES_DATA.filter(m => m.genreId === genreId);
    }
    if (pool.length === 0) pool = MOVIES_DATA;

    // 현재 영화와 다른 영화로 랜덤 선택
    let candidate;
    if (pool.length === 1) {
      candidate = pool[0];
    } else {
      do {
        const idx = Math.floor(Math.random() * pool.length);
        candidate = pool[idx];
      } while (this.currentMovie && candidate.id === this.currentMovie.id && pool.length > 1);
    }
    this.currentMovie = candidate;

    // 비주얼노벨 시퀀스 시작
    this.executeMovieTransitionSequence(candidate);
  }

  executeMovieTransitionSequence(movie) {
    this.sfx.playSlideWhoosh();

    // 1단계: 배경을 두 번째 이미지(bg_bench_empty.jpg)로 전환
    this.bgIdle.classList.remove('active');
    this.bgEmpty.classList.add('active');
    this.stageContainer.classList.remove('idle-mode');
    this.stageContainer.classList.add('movie-mode');

    // 2단계: 3번째 캐릭터(seal_sprite.png)를 '원래 벤치 위치'에 즉시 등장
    this.sealActor.classList.remove('hidden', 'left-position');
    this.sealActor.classList.add('bench-position');

    // 기존 영화 카드는 잠시 숨김
    this.movieShowcase.classList.remove('active');

    // 미세한 딜레이 후 '원래 위치에서 좌측으로 이동' (비주얼노벨 비켜주기 애니메이션)
    setTimeout(() => {
      this.sealActor.classList.remove('bench-position');
      this.sealActor.classList.add('left-position');

      // 말풍선 귀여운 멘트
      this.showSealFloatBubble("영차! 가운데 비켜줬다!");

      // 3단계: 캐릭터가 좌측으로 이동한 다음, 가운데에 영화 포스터 띄우기
      setTimeout(() => {
        this.sfx.playCardChime();
        this.renderMovieCard(movie);
        this.movieShowcase.classList.add('active');
        this.renderMovieControls(movie);

        // 하단 대화창에 코끼리물범의 영화 대사 타이핑
        const dialogue = `이 영화 봤어? 바로 《${movie.title}》이야!\n"${movie.sealQuote}"`;
        this.typeDialogue(dialogue);
      }, 500); // 0.5초 후 카드 등장
    }, 60);
  }

  // 가운데 영화 포스터 및 정보 카드 렌더링
  renderMovieCard(movie) {
    this.movieShowcase.innerHTML = `
      <div class="movie-card" style="--accent-color: ${movie.accentColor};">
        <!-- 왼쪽 포스터 영역 -->
        <div class="movie-poster-column">
          <div class="poster-glow-backdrop"></div>
          <div class="poster-wrapper">
            <img 
              src="${movie.poster}" 
              alt="${movie.title} 포스터" 
              class="movie-poster-img"
              loading="eager"
              onerror="this.src='images/idle_bench_seal.png'"
            >
            <div class="poster-badge-rating">
              <span class="star-icon">⭐</span> ${movie.rating}
            </div>
            <div class="poster-badge-year">${movie.year}</div>
          </div>
        </div>

        <!-- 오른쪽 영화 정보 영역 -->
        <div class="movie-info-column">
          <div class="movie-header">
            <div class="movie-meta-tags">
              <span class="genre-pill">${movie.genre}</span>
              <span class="meta-pill">⏱️ ${movie.runtime}</span>
            </div>
            <h2 class="movie-main-title">${movie.title}</h2>
            <div class="movie-sub-title">${movie.originalTitle} (${movie.year})</div>
          </div>

          <div class="movie-credit-row">
            <span class="credit-label">감독</span>
            <span class="credit-value">${movie.director}</span>
            <span class="credit-divider">·</span>
            <span class="credit-label">출연</span>
            <span class="credit-value text-truncate">${movie.cast}</span>
          </div>

          <!-- 줄거리 섹션 -->
          <div class="movie-synopsis-box">
            <div class="synopsis-title">📖 줄거리 소개</div>
            <p class="synopsis-body">${movie.synopsis}</p>
          </div>

          <!-- 코끼리물범 한줄평 -->
          <div class="seal-review-box">
            <div class="review-header">
              <span class="seal-icon">🦭</span> 코끼리물범의 한줄평
            </div>
            <p class="review-body">"${movie.sealQuote}"</p>
          </div>

          <!-- 액션 버튼들 -->
          <div class="movie-card-actions">
            <button type="button" class="btn-card btn-next-movie" id="btnNextMovie">
              <span class="icon">🎲</span> 다른 영화 추천
            </button>
            <a 
              href="https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' 공식 예고편')}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-card btn-trailer"
            >
              <span class="icon">🎬</span> 예고편 보기
            </a>
            <button type="button" class="btn-card btn-return-bench" id="btnReturnBench">
              <span class="icon">🪑</span> 벤치로 돌아가기
            </button>
          </div>
        </div>
      </div>
    `;

    // 카드 내부 이벤트 바인딩
    document.getElementById('btnNextMovie')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.recommendMovie(this.currentGenre);
    });

    document.getElementById('btnReturnBench')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.returnToBench();
    });
  }

  // 영화 모드일 때 대화창 하단 버튼 렌더링
  renderMovieControls(movie) {
    this.dialogueChoices.innerHTML = `
      <button type="button" class="vn-choice-btn highlight" id="vnChoiceNext">
        <span class="icon">🎲</span> 다른 영화 추천해줘
      </button>
      <button type="button" class="vn-choice-btn" id="vnChoiceGenre">
        <span class="icon">🍿</span> 다른 장르 볼래
      </button>
      <a 
        href="https://www.youtube.com/results?search_query=${encodeURIComponent(movie.title + ' 공식 예고편')}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="vn-choice-btn"
      >
        <span class="icon">🎬</span> 유튜브 예고편 검색
      </a>
      <button type="button" class="vn-choice-btn" id="vnChoiceBench">
        <span class="icon">🪑</span> 벤치로 돌아가서 쉴래
      </button>
    `;

    document.getElementById('vnChoiceNext')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.recommendMovie(this.currentGenre);
    });

    document.getElementById('vnChoiceGenre')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.typeDialogue("좋아, 어떤 장르가 땡기는데? 아래에서 골라봐!", () => {
        this.renderGenreChoices();
      });
    });

    document.getElementById('vnChoiceBench')?.addEventListener('click', () => {
      this.sfx.playPop();
      this.returnToBench();
    });
  }

  // ==========================================
  // 3. 벤치로 복귀 (영화 모드 -> 평상시 대화 모드)
  // 캐릭터가 좌측에서 원래 벤치 위치로 이동 후 1st 이미지로 전환
  // ==========================================
  returnToBench() {
    this.sfx.playSlideWhoosh();

    // 1단계: 영화 카드 페이드아웃
    this.movieShowcase.classList.remove('active');

    // 2단계: 캐릭터가 좌측에서 벤치 위치로 슬라이드 복귀
    this.sealActor.classList.remove('left-position');
    this.sealActor.classList.add('bench-position');
    this.showSealFloatBubble("다시 벤치로 가야지~");

    // 3단계: 슬라이드 완료 후 평상시 이미지(idle_bench_seal.png)로 크로스페이드
    setTimeout(() => {
      this.startIdleState();
      this.typeDialogue("휴, 다시 벤치로 돌아왔네. 버스 올 때까지 또 느긋하게 멍 때려볼까?", () => {
        this.renderIdleChoices();
      });
    }, 600);
  }

  // 코끼리물범 콕 찌르기 (대화 / 반응)
  pokeSeal() {
    this.sfx.playPop();
    const idx = Math.floor(Math.random() * POKE_REACTIONS.length);
    const msg = POKE_REACTIONS[idx];

    // 캐릭터 흔들림 효과
    this.sealActor.classList.add('poked');
    setTimeout(() => {
      this.sealActor.classList.remove('poked');
    }, 400);

    // 머리 위 말풍선 노출
    this.showSealFloatBubble(msg);

    // 하단 대화창에도 반응 타이핑
    this.typeDialogue(msg, () => {
      if (this.state === 'IDLE') {
        this.renderIdleChoices();
      } else {
        if (this.currentMovie) {
          this.renderMovieControls(this.currentMovie);
        }
      }
    });
  }

  // 코끼리물범 머리 위 미니 말풍선
  showSealFloatBubble(text) {
    if (!this.sealFloatBubble || !this.sealFloatText) return;
    this.sealFloatText.textContent = text;
    this.sealFloatBubble.classList.add('visible');
    clearTimeout(this.floatBubbleTimer);
    this.floatBubbleTimer = setTimeout(() => {
      this.sealFloatBubble.classList.remove('visible');
    }, 2800);
  }

  // ==========================================
  // 4. 비주얼노벨 대화 타이핑 효과 (Typewriter)
  // ==========================================
  typeDialogue(text, onComplete) {
    clearInterval(this.typeTimer);
    this.isTyping = true;
    this.fullTextToType = text;
    this.onCompleteTyping = onComplete;
    this.dialogueText.textContent = '';
    this.advanceArrow.classList.remove('visible');

    let charIndex = 0;
    const speed = 25; // 25ms per char

    this.typeTimer = setInterval(() => {
      if (charIndex < text.length) {
        const char = text.charAt(charIndex);
        this.dialogueText.textContent += char;
        if (charIndex % 2 === 0 && char !== ' ' && char !== '\n') {
          this.sfx.playTypeBlip();
        }
        charIndex++;
      } else {
        clearInterval(this.typeTimer);
        this.isTyping = false;
        this.advanceArrow.classList.add('visible');
        if (typeof onComplete === 'function') {
          onComplete();
        }
      }
    }, speed);
  }

  skipTyping() {
    clearInterval(this.typeTimer);
    this.isTyping = false;
    this.dialogueText.textContent = this.fullTextToType;
    this.advanceArrow.classList.add('visible');
    if (typeof this.onCompleteTyping === 'function') {
      this.onCompleteTyping();
    }
  }
}

// DOM 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  window.app = new MovieVisualNovelApp();

  // URL 파라미터 지원 (?movie=interstellar, ?genre=sf, ?auto=1)
  const params = new URLSearchParams(window.location.search);
  if (params.has('movie')) {
    const targetId = params.get('movie');
    const found = MOVIES_DATA.find(m => m.id === targetId);
    if (found) {
      window.app.executeMovieTransitionSequence(found);
      window.app.skipTyping();
    }
  } else if (params.has('auto')) {
    window.app.recommendMovie(params.get('genre') || 'all');
    window.app.skipTyping();
  }
});
