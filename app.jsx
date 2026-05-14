/* global React, ReactDOM */
const { useState, useEffect, useMemo, useRef } = React;
const DATA = window.SEEDFARM_DATA;

/* ===================== NAV ===================== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {document.body.style.overflow = "";};
  }, [open]);
  const close = () => setOpen(false);
  return (
    <>
      <nav className={"nav " + (scrolled ? "scrolled" : "") + (open ? " menu-open" : "")}>
        <a href="#top" className="nav-logo" onClick={close}>
          <span className="mark">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21V11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7z" fill="currentColor" />
              <path d="M12 13c0-3.5 2.5-6.5 6.5-6.5 0 4-3 6.5-6.5 6.5z" fill="currentColor" opacity="0.78" />
            </svg>
          </span>
          <span>시드팜</span>
          <span className="en">Seedfarm</span>
        </a>
        <div className="nav-links">
          <a href="#services">서비스</a>
          <a href="#segments">고객</a>
          <a href="#painpoints">시장 인사이트</a>
          <a href="#about">회사소개</a>
          <a href="https://mkt.shopping.naver.com/link/6836847362fffc0a4a4b1793" target="_blank" rel="noopener" className="nav-shop">
            구매 쇼핑몰
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <path d="M2 8L8 2M8 2H3.5M8 2v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <a href="#cta" className="nav-cta">
          <span className="dot"></span>
          견적 문의
        </a>
        <button
          className={"nav-burger " + (open ? "open" : "")}
          onClick={() => setOpen((o) => !o)}
          aria-label="메뉴 열기"
          aria-expanded={open}>
          
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={"nav-drawer " + (open ? "open" : "")} role="dialog" aria-hidden={!open}>
        <div className="nav-drawer-eyebrow">MENU · 시드팜</div>
        <a href="#services" onClick={close}>
          <span className="n">01</span>
          <span className="t">서비스</span>
          <span className="s">5개 종합 서비스</span>
        </a>
        <a href="#segments" onClick={close}>
          <span className="n">02</span>
          <span className="t">고객</span>
          <span className="s">B2B · B2G · B2C</span>
        </a>
        <a href="#painpoints" onClick={close}>
          <span className="n">03</span>
          <span className="t">시장 인사이트</span>
          <span className="s">현장의 진짜 문제</span>
        </a>
        <a href="#about" onClick={close}>
          <span className="n">04</span>
          <span className="t">회사소개</span>
          <span className="s">숫자로 보는 시드팜</span>
        </a>
        <a
          href="https://mkt.shopping.naver.com/link/6836847362fffc0a4a4b1793"
          target="_blank"
          rel="noopener"
          className="drawer-shop"
          onClick={close}>
          
          <span className="t">구매 쇼핑몰</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 13L13 3M13 3H5.5M13 3v7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#cta" className="drawer-cta" onClick={close}>
          <span className="dot"></span>
          견적 문의하기
        </a>
        <div className="nav-drawer-foot">
          <div>1600 — 5693</div>
          <div>9292@ubiqsolution.com</div>
        </div>
      </div>
      <div className={"nav-scrim " + (open ? "open" : "")} onClick={close}></div>
    </>);

}

/* ===================== SCROLL-TO-TOP ===================== */
function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      className={"scroll-top " + (visible ? "show" : "")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로">
      
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M8 13V3M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="lbl">TOP</span>
    </button>);

}

/* ===================== HERO ===================== */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-meta">
        <span className="badge">SINCE 2011 · 종자관리사 인증</span>
        <span className="line"></span>
        <span>EST. SEOUL · KR</span>
      </div>

      <h1 className="hero-title">
        <div className="row">
          <span>씨앗에서</span>
          <span className="leaf"></span>
        </div>
        <div className="row">
          <span className="ital">풍경이</span>
          <span>되기까지,</span>
        </div>
        <div className="row">
          <span className="underline">단 한 곳.</span>
        </div>
      </h1>

      <div className="hero-grid">
        <p className="hero-lead">
          잔디·야생화 종자부터 <strong>신품종 개발</strong>, 해외 종자 수입, 조경 자재까지 —
          골프장, 지자체, 그리고 마당 한 평을 가꾸는 가드너까지 <strong>모두를 위한 종합 종자 파트너</strong>.
        </p>

        <div className="hero-stats">
          <div className="stat">
            <div className="num">15<sub>년</sub></div>
            <div className="lbl">종자업 운영 노하우</div>
          </div>
          <div className="stat">
            <div className="num">80<sub>%+</sub></div>
            <div className="lbl">잔디 씨앗 발아율 보증</div>
          </div>
          <div className="stat">
            <div className="num">100<sub>+</sub></div>
            <div className="lbl">취급 품종 (잔디·야생화)</div>
          </div>
          <div className="stat">
            <div className="num">3</div>
            <div className="lbl">B2B · B2G · B2C 풀서비스</div>
          </div>
        </div>
      </div>

      <div className="ticker">
        <div className="ticker-track">
          <span>Turf Grass</span><span className="dot">✦</span>
          <span>Wildflower Mix</span><span className="dot">✦</span>
          <span>Plant Breeding</span><span className="dot">✦</span>
          <span>Import / Quarantine</span><span className="dot">✦</span>
          <span>Landscape Materials</span><span className="dot">✦</span>
          <span>Turf Grass</span><span className="dot">✦</span>
          <span>Wildflower Mix</span><span className="dot">✦</span>
          <span>Plant Breeding</span><span className="dot">✦</span>
          <span>Import / Quarantine</span><span className="dot">✦</span>
          <span>Landscape Materials</span><span className="dot">✦</span>
        </div>
      </div>
    </section>);

}

/* ===================== SERVICES ===================== */
function ServiceRow({ s, open, onClick }) {
  const detailRef = useRef(null);
  return (
    <div className="svc-row" onClick={onClick}>
      <div className="idx">{s.idx}</div>
      <div className="name">
        {s.name}
        <span className="en">{s.en}</span>
      </div>
      <div className="desc">{s.desc}</div>
      <div className="tags">
        {s.tags.map((t, i) =>
        <span key={i} className={"tag " + (t.hi ? "hi" : "")}>{t.label}</span>
        )}
      </div>
      <div className="arrow" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {open &&
      <div className="detail">
          <div></div>
          <div className="detail-inner">
            <div>
              <h4>현장에서 마주치는 문제</h4>
              <ul className="pp-list">
                {s.pp.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div>
              <h4>관련 검색·구매 키워드</h4>
              <div className="kw-cloud">
                {s.kw.map((k, i) =>
              <span key={i} className={"kw " + k.k}>{k.t}</span>
              )}
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}

function Services() {
  const [open, setOpen] = useState("lawn");
  return (
    <section className="section svc" id="services">
      <div className="section-eyebrow">5 services · one source</div>
      <h2 className="section-title">
        잔디 한 줌부터<br />
        <span className="ital">Land Scape</span><br />
        한 면까지, 다섯가지를<br />
        한곳에서.
      </h2>
      <p className="section-sub">
        취급 품종이 아니라, 고객이 마주치는 문제를 기준으로 서비스를 설계했습니다.
        각 행을 눌러 현장 페인포인트와 검색·구매 인텐트를 확인하세요.
      </p>

      <div className="svc-list">
        {DATA.services.map((s) => <ServiceRow
          key={s.id}
          s={s}
          open={open === s.id}
          onClick={() => setOpen(open === s.id ? null : s.id)} />

        )}
      </div>
    </section>);

}

/* ===================== SEGMENTS ===================== */
function Segments() {
  const [active, setActive] = useState(0);
  const seg = DATA.segments[active];
  return (
    <section className="seg" id="segments">
      <div className="seg-inner">
        <div className="section-eyebrow">customer segments</div>
        <h2 className="section-title">
          같은 종자, <span className="ital">다른 처방.</span><br />
          누구를 위한 솔루션이<br />
          필요하세요?
        </h2>

        <div className="seg-tabs" role="tablist">
          {DATA.segments.map((s, i) =>
          <button
            key={s.id}
            className={"seg-tab " + (active === i ? "active" : "")}
            onClick={() => setActive(i)}>
            
              <span className="tag">{s.tag}</span>
              {s.label}
            </button>
          )}
        </div>

        <div className="seg-grid">
          <div>
            <h3 className="seg-persona">
              {seg.persona.map((line, i) =>
              <React.Fragment key={i}>{line}<br /></React.Fragment>
              )}
              <span className="em">{seg.personaEm}</span>
            </h3>
            <dl className="seg-meta">
              {Object.entries(seg.meta).map(([k, v]) =>
              <React.Fragment key={k}>
                  <dt>{k}</dt><dd>{v}</dd>
                </React.Fragment>
              )}
            </dl>
          </div>
          <div className="seg-factors">
            <h4>구매 의사결정 요소</h4>
            {seg.factors.map((f, i) =>
            <div className="row" key={i}>
                <span>{f.k}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span className="meter"><span className="meter-fill" style={{ width: f.v + "%" }}></span></span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--lime)", width: "32px", textAlign: "right" }}>{f.v}</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ===================== PAINPOINTS ===================== */
function PainPoints() {
  return (
    <section className="pp-section" id="painpoints">
      <div className="pp-inner">
        <div className="section-eyebrow">cross-cutting insights · 현장의 진짜 문제</div>
        <h2 className="section-title">
          업계가 침묵하는<br />
          <span className="ital">여섯 가지 진실,</span><br />
          그리고 우리의 해법.
        </h2>
        <p className="section-sub">
          5개 서비스를 가로지르는 공통 페인포인트. 단순 판매가 아닌, 문제 해결에서 시작합니다.
        </p>

        <div className="pp-grid">
          {DATA.painpoints.map((p, i) =>
          <div className="pp-card" key={i}>
              <div>
                <div className="num">{p.num}</div>
                <div className="text">{p.text}</div>
              </div>
              <div className="solve">{p.solve}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ===================== BENTO / STATS ===================== */
function Bento() {
  return (
    <section className="section" id="about">
      <div className="section-eyebrow">by the numbers</div>
      <h2 className="section-title">
        숫자로 보는 <span className="ital">시드팜.</span>
      </h2>

      <div className="bento">
        <div className="bento-cell forest span2">
          <div className="label">FOUNDED · 2011</div>
          <div className="bento-quote">
            "씨앗 하나가 사계절의 풍경이 됩니다."<br />
            <span style={{ fontSize: "14px", fontFamily: "var(--font-mono)", color: "rgba(199,230,107,0.6)", letterSpacing: "0.06em" }}>— SEEDFARM CREDO</span>
          </div>
        </div>
        <div className="bento-cell lime">
          <div className="label">발아율 보증</div>
          <div className="value">80<span style={{ fontSize: "32px" }}>%+</span></div>
          <div className="desc">국립종자원 검사 기준</div>
        </div>
        <div className="bento-cell cream">
          <div className="label">종자관리사</div>
          <div className="value">1<span style={{ fontSize: "32px" }}>명</span></div>
          <div className="desc">인하우스 R&amp;D 팀</div>
        </div>

        <div className="bento-cell sage">
          <div className="label">취급 품종</div>
          <div className="value">100<span style={{ fontSize: "32px" }}>+</span></div>
          <div className="desc">잔디 · 야생화 · 수입종</div>
        </div>
        <div className="bento-cell cream">
          <div className="label">수입 원산지</div>
          <div className="value">7<span style={{ fontSize: "32px" }}>국</span></div>
          <div className="desc">미국·유럽·일본·호주 등</div>
        </div>
        <div className="bento-cell forest">
          <div className="label">B2G 입찰</div>
          <div className="value">40<span style={{ fontSize: "32px" }}>+</span></div>
          <div className="desc">지자체 / 도로공사 납품</div>
        </div>
        <div className="bento-cell lime">
          <div className="label">잡초 혼입률</div>
          <div className="value">≤0.5<span style={{ fontSize: "32px" }}>%</span></div>
          <div className="desc">정밀 정선 라인</div>
        </div>
      </div>
    </section>);

}

/* ===================== CTA + FOOTER ===================== */
function CtaFooter() {
  return (
    <>
      <section className="cta-section" id="cta">
        <h2 className="cta-title">
          좋은 풍경은<br />
          <span className="ital">좋은 씨앗</span><br />
          한 줌에서 <span className="leaf-big"></span><br />
          시작됩니다.
        </h2>
        <div className="cta-contact">
          <a className="cta-contact-card" href="tel:1600-5693">
            <span className="cta-contact-label">전화 상담</span>
            <span className="cta-contact-value">1600&ndash;5693</span>
            <span className="cta-contact-sub">평일 10:00–17:00</span>
          </a>
          <a className="cta-contact-card alt" href="mailto:9292@ubiqsolution.com">
            <span className="cta-contact-label">이메일 문의</span>
            <span className="cta-contact-value">9292@ubiqsolution.com</span>
            <span className="cta-contact-sub">24시간 내 회신</span>
          </a>
        </div>

        <a className="cta-shop"
        href="https://mkt.shopping.naver.com/link/6836847362fffc0a4a4b1793"
        target="_blank"
        rel="noopener">
          
          <span className="cta-shop-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16l-1.6 11.2A2 2 0 0116.4 19H7.6a2 2 0 01-2-1.8L4 6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 9V6a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="cta-shop-text">
            <span className="cta-shop-eyebrow">NAVER 쇼핑 · 공식 스토어</span>
            <span className="cta-shop-title">온라인 구매 쇼핑몰로 이동</span>
          </span>
          <span className="cta-shop-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </section>

      <div className="footer-mark" style={{ color: "rgb(15, 26, 18)" }}>seedfarm.</div>

      <div className="footer-grid">
        <div className="footer-col">
          <h5>SERVICES</h5>
          <a href="#services">잔디 씨앗</a>
          <a href="#services">야생화 씨앗</a>
          <a href="#services">신품종 개발</a>
          <a href="#services">해외 종자 수입</a>
          <a href="#services">조경 자재</a>
        </div>
        <div className="footer-col">
          <h5>CUSTOMERS</h5>
          <a href="#segments">골프장 · 운동장</a>
          <a href="#segments">조경업체 · 시공사</a>
          <a href="#segments">지자체 · 도로공사</a>
          <a href="#segments">전원주택 · 가드너</a>
        </div>
        <div className="footer-col">
          <h5>RESOURCES</h5>
          <a href="#painpoints">시장 인사이트</a>
          <a href="#about">회사소개</a>
          <a href="terms.html">이용약관</a>
          <a href="privacy.html">개인정보처리방침</a>
        </div>
        <div className="footer-col">
          <h5>CONTACT</h5>
          <li>9292@ubiqsolution.com</li>
          <li>1600&mdash;5693</li>
          <li>경기도 · KR</li>
          <li style={{ marginTop: "12px", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em" }}>EST. 2011</li>
        </div>
      </div>

      <footer className="footer">
        <div>© 2026 ubiqsolution. All rights reserved.</div>
        <div style={{ fontFamily: "var(--font-serif-en)", fontStyle: "italic" }}>
          From seed to landscape.
        </div>
      </footer>
    </>);

}

/* ===================== TWEAKS ===================== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest-lime",
  "headingWeight": "bold",
  "showTicker": true,
  "leafAccent": true
} /*EDITMODE-END*/;

const PALETTES = {
  "forest-lime": { forest: "#1F4D2E", deep: "#15351F", ink: "#0F1A12", lime: "#C7E66B", sage: "#E8F0D4", moss: "#2E6B41" },
  "matcha": { forest: "#3A5A2E", deep: "#22381C", ink: "#161E13", lime: "#E4F09E", sage: "#EEF3D8", moss: "#587A41" },
  "deep-emerald": { forest: "#0F3A2A", deep: "#082018", ink: "#06140E", lime: "#A8E063", sage: "#D9EBD1", moss: "#1E6B4A" },
  "olive": { forest: "#3D4A1F", deep: "#252E12", ink: "#181D0E", lime: "#D5E04A", sage: "#EBEAC8", moss: "#5A6B2E" }
};

const HEADING_WEIGHTS = {
  "regular": { display: 500, accent: 300 },
  "bold": { display: 700, accent: 300 },
  "black": { display: 800, accent: 200 }
};

const PALETTE_OPTIONS = [
{ key: "forest-lime", swatches: ["#1F4D2E", "#C7E66B", "#E8F0D4"] },
{ key: "matcha", swatches: ["#3A5A2E", "#E4F09E", "#EEF3D8"] },
{ key: "deep-emerald", swatches: ["#0F3A2A", "#A8E063", "#D9EBD1"] },
{ key: "olive", swatches: ["#3D4A1F", "#D5E04A", "#EBEAC8"] }];


function Tweaks() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    const p = PALETTES[t.palette] || PALETTES["forest-lime"];
    const root = document.documentElement;
    root.style.setProperty("--forest", p.forest);
    root.style.setProperty("--forest-deep", p.deep);
    root.style.setProperty("--forest-ink", p.ink);
    root.style.setProperty("--lime", p.lime);
    root.style.setProperty("--lime-bright", p.lime);
    root.style.setProperty("--sage-pale", p.sage);
    root.style.setProperty("--moss", p.moss);

    const w = HEADING_WEIGHTS[t.headingWeight] || HEADING_WEIGHTS["bold"];
    document.querySelectorAll(".hero-title, .section-title, .cta-title, .seg-persona, .pp-card .text, .bento-quote, .calc h3").forEach((el) => {
      el.style.fontWeight = w.display;
    });
    document.querySelectorAll(".hero-title .ital, .section-title .ital, .cta-title .ital, .seg-persona .em, .bento-quote .em").forEach((el) => {
      el.style.fontWeight = w.accent;
    });

    document.querySelectorAll(".ticker").forEach((el) => el.style.display = t.showTicker ? "" : "none");
    document.querySelectorAll(".hero-title .leaf, .cta-title .leaf-big").forEach((el) => el.style.display = t.leafAccent ? "" : "none");
  }, [t]);

  const currentSwatches = (PALETTE_OPTIONS.find((p) => p.key === t.palette) || PALETTE_OPTIONS[0]).swatches;

  return (
    <window.TweaksPanel>
      <window.TweakSection label="컬러 팔레트">
        <window.TweakColor
          label="Palette"
          value={currentSwatches}
          options={PALETTE_OPTIONS.map((p) => p.swatches)}
          onChange={(v) => {
            const match = PALETTE_OPTIONS.find((p) => p.swatches.join() === v.join());
            setTweak("palette", match ? match.key : "forest-lime");
          }} />
        
      </window.TweakSection>

      <window.TweakSection label="타이포그래피">
        <window.TweakRadio
          label="제목 굵기"
          value={t.headingWeight}
          options={[
          { value: "regular", label: "Regular" },
          { value: "bold", label: "Bold" },
          { value: "black", label: "Black" }]
          }
          onChange={(v) => setTweak("headingWeight", v)} />
        
      </window.TweakSection>

      <window.TweakSection label="장식 요소">
        <window.TweakToggle
          label="히어로 티커 표시"
          value={t.showTicker}
          onChange={(v) => setTweak("showTicker", v)} />
        
        <window.TweakToggle
          label="잎사귀 액센트"
          value={t.leafAccent}
          onChange={(v) => setTweak("leafAccent", v)} />
        
      </window.TweakSection>
    </window.TweaksPanel>);

}

/* ===================== APP ===================== */
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Services />
      <Segments />
      <PainPoints />
      <Bento />
      <CtaFooter />
      <ScrollTop />
      <Tweaks />
    </>);

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);