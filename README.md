# 시드팜 · Seedfarm

> 씨앗에서 풍경이 되기까지 — 잔디·야생화 종자부터 신품종 개발, 해외 종자 수입, 조경 자재까지.

[시드팜](https://github.com/ubiqsolution/seedfarm)의 공식 랜딩페이지 소스입니다. 잔디·야생화 종자, 신품종 개발, 해외 종자 수입, 조경 자재까지 다섯 가지 서비스를 B2B·B2G·B2C 고객에게 소개합니다.

## 실행 방법

빌드 도구가 없습니다. `index.html`을 브라우저에서 바로 열거나, 정적 서버로 띄우면 됩니다.

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

React 18과 Babel은 CDN에서 로드되고, JSX는 브라우저에서 `<script type="text/babel">`로 트랜스파일됩니다. `npm install` 필요 없음.

## 파일 구조

| 파일 | 역할 |
|------|------|
| `index.html` | 진입점. React/Babel CDN 로드 + 세 개의 스크립트 연결 |
| `data.js` | 모든 콘텐츠 데이터 (`window.SEEDFARM_DATA`) — 서비스·세그먼트·페인포인트 |
| `app.jsx` | 랜딩페이지 컴포넌트 (Nav, Hero, Services, Segments, PainPoints, Bento, CtaFooter) |
| `tweaks-panel.jsx` | 디자인 트윅 패널 프레임워크 (재사용 라이브러리) |
| `styles.css` | 메인 스타일시트 |
| `legal.css` | 약관·개인정보처리방침 페이지 스타일 |
| `privacy.html` | 개인정보처리방침 (정적 HTML) |
| `terms.html` | 이용약관 (정적 HTML) |

## 콘텐츠 수정

랜딩페이지 문구나 서비스 정보를 바꾸려면 **`data.js`** 를 편집하세요. JSX 안에 하드코딩하지 않습니다.

## 디자인 트윅

`app.jsx` 상단의 `TWEAK_DEFAULTS` 블록에서 컬러 팔레트·타이포·장식 요소를 조정할 수 있습니다.

```js
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest-lime",
  "headingWeight": "bold",
  "showTicker": true,
  "leafAccent": true
}/*EDITMODE-END*/;
```

`/*EDITMODE-BEGIN*/`, `/*EDITMODE-END*/` 주석은 외부 호스트가 트윅 패널을 통해 값을 디스크에 다시 쓰는 데 사용되므로 삭제하지 마세요.

## 연락처

- 전화: 1600-5693 (평일 10:00–17:00)
- 이메일: 9292@ubiqsolution.com
- 쇼핑몰: [네이버 스마트스토어](https://mkt.shopping.naver.com/link/6836847362fffc0a4a4b1793)

---

© 2026 ubiqsolution. All rights reserved.
