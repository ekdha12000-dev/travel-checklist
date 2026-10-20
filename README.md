# 🎒 여행 준비물 체크리스트 (Travel Packing Checklist)

> "엄마의 사랑의 매(?)와 함께하는 본격 여행 준비물 최종 점검 웹 페이지"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fekdha12000-dev%2Ftravel-checklist)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen)](https://ekdha12000-dev.github.io/travel-checklist/)

![엄마의 사랑의 매](images/second_image.png)

## 📌 프로젝트 소개
여행을 떠나기 전 짐을 빠짐없이 챙겼는지 점검할 수 있는 반응형 단일 페이지 웹 애플리케이션입니다.

- **Q1 ~ Q8 순차 질문**: 각 문항별로 필요한 준비물을 확인합니다.
- **사랑의 매 캐릭터 상시 노출**: 질문 진행 내내 화면 중앙에 엄마의 사랑의 매 짤이 노출되어 긴장감을 줍니다.
- **3가지 답변 분기**:
  - `[ 예 ]`: 준비 완료
  - `[ 아니오 ]`: 준비 누락
  - `[ 없어도 괜찮습니다 ]`: 해당 항목 건너뛰기

---

## 🎯 3가지 결과 페이지

### CASE 1: 히든 페이지 (없어도 괜찮습니다 올클리어)
- 8개 질문 모두 '없어도 괜찮습니다'를 선택한 경우
- 화면 중앙에 흔들리는 거대 똥 이모지(`💩`) 노출

### CASE 2: 준비 누락 및 자동 리셋 페이지 ('아니오' 1개 이상)
- 빠진 물품들의 목록을 배지 형태로 나열
- **'깡!'** 해머 피격 짤 노출
- 3초 카운트다운 게이지 후 자동 시작 화면 이동 또는 '다시하기' 버튼으로 즉시 리셋

### CASE 3: 최종 완료 페이지 (모두 통과)
- '아니오'가 0개이면서 무소유(올클리어)가 아닌 경우
- "가자." 텍스트와 초록색 체크 이모지(`✅`)
- 축하 캔버스 폭죽(Confetti) 애니메이션

---

## 🛠️ 기술 스택
- **HTML5**
- **Vanilla CSS3** (Glassmorphism, Keyframe Animations)
- **Vanilla JavaScript** (Zero dependencies, Web Audio API Sound Effects, Canvas Particle System)

---

## 🚀 실행 방법
- 별도의 빌드 과정 없이 `index.html` 파일을 브라우저에서 바로 열거나 웹 서버로 정적 호스팅할 수 있습니다.
