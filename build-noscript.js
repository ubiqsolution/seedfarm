#!/usr/bin/env node
// build-noscript.js — regenerate the <noscript> block in index.html from data.js.
//
// Why: Crawlers that don't execute JS (most LLM bots, some Naver crawlers)
// only see <div id="root"></div> in the current CSR setup. The <noscript>
// block mirrors data.js as static HTML so they can index the content.
//
// Run: node build-noscript.js
//
// Requirements: Node 16+. No npm dependencies.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

// ─── load data.js ──────────────────────────────────────────────────────────
// data.js assigns to window.SEEDFARM_DATA. Fake a window object and eval.
const dataSrc = fs.readFileSync(path.join(ROOT, 'data.js'), 'utf8');
const window = {};
eval(dataSrc);
const data = window.SEEDFARM_DATA;
if (!data) {
  console.error('✗ Could not read SEEDFARM_DATA from data.js');
  process.exit(1);
}

// ─── helpers ───────────────────────────────────────────────────────────────
const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const indent = (s, n) => s.split('\n').map((l) => ' '.repeat(n) + l).join('\n');

// ─── render ────────────────────────────────────────────────────────────────
const servicesHtml = data.services.map((s) => `
        <article>
          <h3>${esc(s.idx)}. ${esc(s.name)} (${esc(s.en)})</h3>
          <p>${esc(s.desc)}</p>
          <h4>현장 페인포인트</h4>
          <ul>
${s.pp.map((p) => `            <li>${esc(p)}</li>`).join('\n')}
          </ul>
        </article>`).join('\n');

const segmentsHtml = data.segments.map((g) => {
  const metaEntries = Object.entries(g.meta).map(([k, v]) => `${esc(k)}: ${esc(v)}`).join('. ');
  const factors = g.factors.map((f) => `${esc(f.k)} (${f.v})`).join(', ');
  return `
        <article>
          <h3>${esc(g.label)} (${esc(g.tag)})</h3>
          <p>${metaEntries}. 핵심 의사결정 요소: ${factors}.</p>
        </article>`;
}).join('\n');

const faqHtml = data.painpoints.map((p) => `
        <article>
          <h3>${esc(p.num)}. ${esc(p.text)}</h3>
          <p><strong>해결책:</strong> ${esc(p.solve)}</p>
        </article>`).join('\n');

const noscript = `

    <header>
      <h1>시드팜 · Seedfarm</h1>
      <p>씨앗에서 풍경이 되기까지 — 잔디·야생화 종자부터 신품종 개발, 해외 종자 수입, 조경 자재까지. 골프장·지자체·전원주택 가드너까지 B2B·B2G·B2C 종합 종자 파트너. 2011년 설립, 발아율 80%+ 보증, 종자관리사 인하우스.</p>
      <ul>
        <li>전화: <a href="tel:1600-5693">1600-5693</a> (평일 10:00–17:00)</li>
        <li>이메일: <a href="mailto:9292@ubiqsolution.com">9292@ubiqsolution.com</a></li>
        <li>쇼핑몰: <a href="https://mkt.shopping.naver.com/link/6836847362fffc0a4a4b1793">네이버 스마트스토어</a></li>
      </ul>
    </header>

    <main>
      <section id="services-noscript">
        <h2>5가지 서비스</h2>${servicesHtml}
      </section>

      <section id="segments-noscript">
        <h2>고객 세그먼트 (B2B · B2G · B2C)</h2>${segmentsHtml}
      </section>

      <section id="faq-noscript">
        <h2>자주 묻는 질문 (FAQ) · 현장의 진짜 문제</h2>${faqHtml}
      </section>

      <section id="about-noscript">
        <h2>숫자로 보는 시드팜</h2>
        <ul>
          <li>설립: 2011년</li>
          <li>발아율 보증: 80%+ (국립종자원 검사 기준)</li>
          <li>종자관리사: 1명 인하우스 R&amp;D 팀</li>
          <li>취급 품종: 100+ (잔디·야생화·수입종)</li>
          <li>수입 원산지: 7개국 (미국·유럽·일본·호주 등)</li>
          <li>B2G 입찰 납품 실적: 40+ (지자체/도로공사)</li>
          <li>잡초 혼입률: ≤0.5% (정밀 정선 라인)</li>
        </ul>
      </section>

      <footer>
        <h2>관련 페이지</h2>
        <ul>
          <li><a href="/terms">이용약관</a></li>
          <li><a href="/privacy">개인정보처리방침</a></li>
          <li><a href="/llms.txt">LLM-friendly 사이트 요약</a></li>
        </ul>
        <p>© 2026 ubiqsolution. All rights reserved. From seed to landscape.</p>
      </footer>
    </main>

    `;

// ─── inject between markers in index.html ──────────────────────────────────
const indexPath = path.join(ROOT, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

const startMarker = '<!-- NOSCRIPT-START -->';
const endMarker = '<!-- NOSCRIPT-END -->';
const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
  console.error(`✗ Markers not found in index.html: ${startMarker} / ${endMarker}`);
  process.exit(1);
}

const before = html.slice(0, startIdx + startMarker.length);
const after = html.slice(endIdx);
const next = before + noscript + after;

if (next === html) {
  console.log('• No changes — <noscript> block already up to date.');
} else {
  fs.writeFileSync(indexPath, next);
  console.log('✓ Regenerated <noscript> block in index.html');
  console.log(`  Services: ${data.services.length} · Segments: ${data.segments.length} · Painpoints: ${data.painpoints.length}`);
}
