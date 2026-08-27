/**
 * LAND ALL (랜드올) - 부동산의 모든 것 (개발 · 중개 · 임대 · 공동투자)
 * Official Interactive Web Application Logic
 * All real personal names are 100% anonymized to protect privacy.
 */

// 1호 ~ 18호 실전 공동투자 트랙레코드 (실명 비공개 및 익명화 완료)
const PORTFOLIO_DATA = [
  {
    id: 1,
    number: "1호",
    date: "2016.05",
    fullPeriod: "2016.05.13 ~ 2016.05.23 (단 10일)",
    title: "주월동 상가 용도변경 기획 프로젝트",
    location: "광주광역시 남구 주월동 434-14",
    type: "용도변경 기획",
    roi: 85.5,
    roiText: "85.5%",
    annualRoi: "초단기 최고수익",
    status: "단기 엑시트 완료",
    categories: ["high_roi", "value_up"],
    participants: "공동투자 6인 참여 (대표 운용역 20%, 전문투자자 5인)",
    valueUpMethod: "상가 용도변경 타당성 분석 및 신속 계약 추진",
    exitStory: "상가 용도변경을 목표로 매수 계약 체결 후, 매도인 사정으로 계약 해지 발생. 정밀 법률 및 권리분석을 통해 계약금 배액 상환(투자금 대비 85.5% 수익)을 단 10일 만에 전액 회수 및 안전 배분 완료.",
    badge: "초단기 85.5% 수익",
    badgeColor: "gold"
  },
  {
    id: 2,
    number: "2호",
    date: "2016.05",
    fullPeriod: "2016.08.01 ~ 2018.05.16 (약 1년 9개월)",
    title: "주월동 주거형 자산 책임인수 프로젝트",
    location: "광주광역시 남구 주월동 380-66",
    type: "리스크 관리 & 책임인수",
    roi: 0,
    roiText: "원금 100% 방어",
    annualRoi: "안정 정산",
    status: "책임 인수 완료",
    categories: ["risk_mgmt"],
    participants: "공동투자 5인 참여 (대표 운용역 35%, 일반투자자 4인)",
    valueUpMethod: "매매 정체 시 대표 운용역 직접 승계 및 지분 정리",
    exitStory: "부동산 시장 거래 정체 구간에서 공동투자자들의 원금 손실을 방지하기 위해 대표 운용역이 책임지고 지분을 직접 인수·승계하여 투자자 자금을 안전하게 보호.",
    badge: "책임인수 원금보호",
    badgeColor: "blue"
  },
  {
    id: 3,
    number: "3호",
    date: "2016.11",
    fullPeriod: "2016.12.29 ~ 2018.10.12 (약 1년 10개월)",
    title: "주월동 수익형 자산 밸류업 매각 프로젝트",
    location: "광주광역시 남구 주월동 382-13",
    type: "수익형 부동산 운용",
    roi: 46.0,
    roiText: "46.0%",
    annualRoi: "연 28.0%",
    status: "매각 완료",
    categories: ["high_roi"],
    participants: "공동투자 3인 참여 (전문투자자 2인 각 40%, 대표 운용역 20%)",
    valueUpMethod: "입지 기반 가치 재평가 및 타겟 매수자 발굴",
    exitStory: "약 1년 10개월간 안정적인 임대 수익을 창출하다가 적극적인 매수의사를 밝힌 타겟 매수자에게 프리미엄 매각 성사. 투자대비 46%, 연평균 28%의 우수한 고수익 실현.",
    badge: "연수익률 28%",
    badgeColor: "gold"
  },
  {
    id: 4,
    number: "4호",
    date: "2017.04",
    fullPeriod: "2017.04 ~ 2020.12 (3년 8개월)",
    title: "주월동 종원아파트 자산 승계 프로젝트",
    location: "광주광역시 남구 주월동 종원아파트",
    type: "지분 조율 & 승계",
    roi: 0,
    roiText: "안정 정산",
    annualRoi: "지분승계",
    status: "지분 승계 완료",
    categories: ["risk_mgmt"],
    participants: "공동투자 2인 참여 (투자자 A 60%, 투자자 B 40%)",
    valueUpMethod: "참여자 의사 존중 맞춤형 지분 승계 프로세스",
    exitStory: "공동투자자의 개별 출구 전략과 매각 의사를 원만히 조율하여 참여자 간 지분을 안전하게 이전 및 승계함으로써 갈등 없는 원만한 엑시트 완료.",
    badge: "맞춤형 지분승계",
    badgeColor: "blue"
  },
  {
    id: 5,
    number: "5호",
    date: "2017.09",
    fullPeriod: "2017.09 ~ 2020.09 (3년 0개월)",
    title: "쌍촌동 혜명빌 수익형 다세대 프로젝트",
    location: "광주광역시 서구 쌍촌동 550-22 (혜명빌)",
    type: "수익형 다세대",
    roi: 54.0,
    roiText: "54.0%",
    annualRoi: "연 19.0%",
    status: "매각 완료",
    categories: ["high_roi"],
    participants: "공동투자 2인 참여 (투자자 A 50%, 투자자 B 50%)",
    valueUpMethod: "다세대 임대관리 효율화 및 공실 최소화",
    exitStory: "3년간 공실 없는 최적의 임대 운영으로 안정적 현금흐름을 수취한 후, 우량 매수자의 매수 제안에 맞춰 투자대비 54%, 연수익률 19%의 훌륭한 수익률로 엑시트.",
    badge: "총수익률 54%",
    badgeColor: "gold"
  },
  {
    id: 6,
    number: "6호",
    date: "2017.12",
    fullPeriod: "2018.10 ~ 2023.10 (5년 0개월)",
    title: "주월동 푸른빌 중장기 임대수익 프로젝트",
    location: "광주광역시 남구 주월동 967-10 (푸른빌)",
    type: "장기 임대수익 운용",
    roi: 39.0,
    roiText: "39.0%",
    annualRoi: "연 7.8%",
    status: "매각 완료",
    categories: ["high_roi"],
    participants: "공동투자 4인 참여 (투자자 4인 균등 25%씩)",
    valueUpMethod: "중장기 안정적 월세 창출 및 체계적 건물 관리",
    exitStory: "5년간 4인의 공동투자자가 안정적으로 월세 배당을 수취하며 자산가치를 보존·증대시킨 후, 매수자 요구에 따라 원만한 차익 실현(투자대비 39%) 매각 완료.",
    badge: "5년 안정배당+39%",
    badgeColor: "gold"
  },
  {
    id: 7,
    number: "7호",
    date: "2018.02",
    fullPeriod: "2018.02.01 ~ 2019.12.31 (1년 11개월)",
    title: "쌍촌동 포트폴리오 전략적 리밸런싱",
    location: "광주광역시 서구 쌍촌동 547-21",
    type: "포트폴리오 리밸런싱",
    roi: 0,
    roiText: "자산 최적화",
    annualRoi: "리밸런싱",
    status: "지분 재배분 완료",
    categories: ["risk_mgmt"],
    participants: "공동투자 2인 참여 (투자자 A 60%, 투자자 B 40%)",
    valueUpMethod: "운용 총괄 리더의 시황 분석 기반 지분 조정",
    exitStory: "부동산 시장 사이클 변화에 선제 대응하기 위해 리더의 정밀 분석과 제안을 바탕으로 지분을 재조정하여 자산 건전성을 강화.",
    badge: "전략적 리밸런싱",
    badgeColor: "blue"
  },
  {
    id: 8,
    number: "8호",
    date: "2018.05",
    fullPeriod: "2018.05.31 ~ 2019.06.03 (약 1년)",
    title: "쌍촌동 상가 용도변경 밸류업 프로젝트",
    location: "광주광역시 서구 쌍촌동 555-1",
    type: "상가 용도변경 밸류업",
    roi: 31.0,
    roiText: "31.0%",
    annualRoi: "연 31.0%",
    status: "매각 완료",
    categories: ["high_roi", "value_up"],
    participants: "공동투자 3인 참여 (투자자 A 40%, 투자자 B 40%, 투자자 C 20%)",
    valueUpMethod: "주거시설 -> 근린상가 신속 용도변경 인허가",
    exitStory: "부동산의 용도를 상가로 변경하여 건물 단위 가치를 획기적으로 상승시켰으며, 변경 직후 유력 매수자가 나타나 단 1년 만에 연 31% 초고속 엑시트 달성.",
    badge: "1년 연수익 31%",
    badgeColor: "gold"
  },
  {
    id: 9,
    number: "9호",
    date: "2018.10",
    fullPeriod: "2018.10 ~ 2021.06 (2년 8개월)",
    title: "주월동 법인 자산화 및 구조화 프로젝트",
    location: "광주광역시 남구 주월동 968-63",
    type: "법인 자산화 구조개편",
    roi: 0,
    roiText: "법인자산 편입",
    annualRoi: "체계화",
    status: "법인 이전 완료",
    categories: ["value_up"],
    participants: "공동투자 3인 균등 참여 -> (주)랜드올 법인 자산화",
    valueUpMethod: "개인 분산 소유에서 전문 법인 집중 소유 구조 전환",
    exitStory: "개인 간 투자 물건을 전문 부동산 법인 '(주)랜드올'로 정식 편입·이전하여 법인 중심의 체계적 자산관리와 세제·운용 효율성을 고도화.",
    badge: "법인 공식자산화",
    badgeColor: "green"
  },
  {
    id: 10,
    number: "10호",
    date: "2019.01",
    fullPeriod: "2019.01 ~ 2020.12 (약 2년)",
    title: "쌍촌동 '풀하우스' 전면 리모델링 프로젝트",
    location: "광주광역시 서구 쌍촌동 980-5 (풀하우스)",
    type: "기획 리모델링 밸류업",
    roi: 30.0,
    roiText: "30.0%",
    annualRoi: "연 16.0%",
    status: "리모델링 매각 완료",
    categories: ["high_roi", "value_up"],
    participants: "공동투자 6인 참여 (핵심투자자 3인 각 25%, 서브투자자 3인)",
    valueUpMethod: "노후 노출 건물 내외관 전면 풀 리모델링 & 브랜딩",
    exitStory: "노후화된 다세대 건물을 최신 트렌드 인테리어로 완벽 리모델링하고 '풀하우스'로 브랜딩하여 만실 임대 후 투자대비 30%(연 16%) 수익으로 매각 성공.",
    badge: "풀리모델링 밸류업",
    badgeColor: "gold"
  },
  {
    id: 11,
    number: "11호",
    date: "2019.07",
    fullPeriod: "2019.07 ~ 운용",
    title: "주월동 '그린하우스' 복합 필지 프로젝트",
    location: "광주광역시 남구 주월동 404-16, 404-42",
    type: "다필지 통합 기획",
    roi: 0,
    roiText: "통합 운용",
    annualRoi: "브랜드화",
    status: "그린하우스 브랜드 운용",
    categories: ["value_up"],
    participants: "공동투자 5인 참여 (투자자 3인 각 25%, 투자자 2인 각 12.5%)",
    valueUpMethod: "인접 2필지 통합 기획 및 친환경 주거 브랜드 구축",
    exitStory: "인접한 2개 필지를 동시에 묶어 부가가치를 극대화하는 '그린하우스' 프로젝트를 런칭하여 안정적인 주거 임대 네트워크 형성.",
    badge: "2필지 통합기획",
    badgeColor: "green"
  },
  {
    id: 12,
    number: "12호",
    date: "2019.09",
    fullPeriod: "2019.09 ~ 2020.11 (1년 2개월)",
    title: "쌍촌동 포트폴리오 유동성 확보 프로젝트",
    location: "광주광역시 서구 쌍촌동 492-7",
    type: "포트폴리오 최적화",
    roi: 0,
    roiText: "유동성 확보",
    annualRoi: "안전이전",
    status: "지분 이전 완료",
    categories: ["risk_mgmt"],
    participants: "공동투자 3인 균등 참여 (각 33.3%)",
    valueUpMethod: "시장 변동성 사전 대비 및 지분 승계",
    exitStory: "운용 리더의 시장 모니터링을 바탕으로 지분 승계를 신속히 진행하여 참여자들의 유동성을 확보하고 리스크를 사전에 차단.",
    badge: "신속 유동성확보",
    badgeColor: "blue"
  },
  {
    id: 13,
    number: "13호",
    date: "2020.05",
    fullPeriod: "2020.05 ~ 2024.05 (4년 0개월)",
    title: "쌍촌동 '한스빌' 자산 가치 승계 프로젝트",
    location: "광주광역시 서구 쌍촌동 1003-14 (한스빌)",
    type: "수익형 빌라 운용",
    roi: 0,
    roiText: "4년 안정운용",
    annualRoi: "지분승계",
    status: "승계 완료",
    categories: ["risk_mgmt"],
    participants: "공동투자 2인 (각 50%) -> 전문 운용역 지분 승계",
    valueUpMethod: "4년간 공실률 0% 유지 및 자산 상태 최상 관리",
    exitStory: "4년간 '한스빌'의 안정적인 월세 수익을 관리한 후, 대표 운용역 중심의 파트너십으로 원활하게 지분을 승계하여 장기 신뢰 구축.",
    badge: "4년 장기 무결점운용",
    badgeColor: "blue"
  },
  {
    id: 14,
    number: "14호·18호",
    date: "2020.06 / 2021.10",
    fullPeriod: "2020.06 / 2021.10 ~ 2024.10",
    title: "쌍촌동 연계필지 위기관리 & 원금방어",
    location: "광주광역시 서구 쌍촌동 980-27, 980-26",
    type: "위기관리 & 원금 100% 방어",
    roi: 0,
    roiText: "차용금 1억 전액상환",
    annualRoi: "원금완벽보호",
    status: "법인 책임위기관리 완료",
    categories: ["risk_mgmt"],
    participants: "주식회사 랜드올 법인 주도 운용 및 참여 투자자",
    valueUpMethod: "하락기 선제적 차용금 상환 및 투자자 안전 지분 정리",
    exitStory: "부동산 경기 침체기에 직면하여 차용금 1억 원을 선제적으로 전액 상환하고, 투자자 지분을 안전하게 정리함으로써 하락장에서도 투자자 손실을 완벽히 방어한 모범적 리스크 관리 사례.",
    badge: "하락장 원금방어 성공",
    badgeColor: "red"
  },
  {
    id: 15,
    number: "15호",
    date: "2020.10",
    fullPeriod: "2020.10 ~ 2021.06 (단 8개월)",
    title: "쌍촌동 초단기 리모델링 밸류업 프로젝트",
    location: "광주광역시 서구 쌍촌동 981-43",
    type: "초단기 리모델링 밸류업",
    roi: 44.0,
    roiText: "44.0%",
    annualRoi: "연 66.0%",
    status: "역대 최고수익 매각 완료",
    categories: ["high_roi", "value_up"],
    participants: "주식회사 랜드올 법인 주도 프로젝트",
    valueUpMethod: "고도화된 리모델링 설계 + 단기 밸류업 엑시트",
    exitStory: "매입과 동시에 트렌디한 내외관 리모델링을 단행하여 상품성을 극대화, 불과 8개월 만에 투자대비 44%, 환산 연수익률 66%라는 압도적인 최고 성과로 매각 엑시트.",
    badge: "연 66% 최고수익",
    badgeColor: "gold"
  },
  {
    id: 16,
    number: "16호",
    date: "2021.05",
    fullPeriod: "2021.05 ~ 2022.12 (1년 7개월)",
    title: "농성동 법인 컨소시엄 개발 프로젝트",
    location: "광주광역시 서구 농성동 636-23, 24",
    type: "법인 컨소시엄 개발",
    roi: 0,
    roiText: "선제적 엑시트",
    annualRoi: "위기회피",
    status: "선제적 매각 완료",
    categories: ["risk_mgmt"],
    participants: "(주)랜드올 50%, (주)대영랜드올 50%",
    valueUpMethod: "부동산 경기 변곡점 포착 및 조기 매각 엑시트",
    exitStory: "법인 컨소시엄 개발 중 급변하는 거시경제 및 부동산 침체 조짐을 신속히 포착하여, 무리한 개발 대신 선제적 조기 매각으로 투자금을 100% 안전 회수.",
    badge: "경기침체 선제대응",
    badgeColor: "blue"
  },
  {
    id: 17,
    number: "17호",
    date: "2021.06",
    fullPeriod: "2021.06 ~ 2023.12 (2년 6개월)",
    title: "쌍촌동 법인 자산 전략적 엑시트",
    location: "광주광역시 서구 쌍촌동 980-2",
    type: "법인 자산 포트폴리오 정리",
    roi: 0,
    roiText: "지분정리 완료",
    annualRoi: "안정엑시트",
    status: "매각 완료",
    categories: ["risk_mgmt"],
    participants: "주식회사 랜드올 -> 매수자 지분 승계",
    valueUpMethod: "최적의 매수 희망자 발굴 및 원활한 지분 정리",
    exitStory: "법인 보유 자산의 포트폴리오 최적화 시점에 맞춰 매수자를 발굴하여 법인 지분을 안정적으로 정리하고 유동성을 성공적으로 확보.",
    badge: "전략적 지분정리",
    badgeColor: "blue"
  }
];

// DOMContentLoaded Event
document.addEventListener("DOMContentLoaded", () => {
  initCounters();
  renderPortfolio(PORTFOLIO_DATA);
  initFilterTabs();
  initSearch();
  initModal();
  initConsultationForm();
  initSmoothScroll();
  initMobileNav();
  initFaq();
});

// Counter Animation
function initCounters() {
  const counterElements = document.querySelectorAll(".counter-number");
  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute("data-target"));
        const suffix = entry.target.getAttribute("data-suffix") || "";
        const isDecimal = target % 1 !== 0;
        
        let start = 0;
        const duration = 1500;
        const steps = 60;
        const stepTime = duration / steps;
        const increment = target / steps;
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            start = target;
            clearInterval(timer);
          }
          entry.target.textContent = isDecimal ? start.toFixed(1) + suffix : Math.floor(start) + suffix;
        }, stepTime);
        
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counterElements.forEach(el => observer.observe(el));
}

// Render Portfolio Cards
function renderPortfolio(items) {
  const grid = document.getElementById("portfolio-grid");
  const countBadge = document.getElementById("portfolio-count");
  if (!grid) return;

  if (countBadge) {
    countBadge.textContent = `${items.length}건`;
  }

  if (items.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon"><i class="fas fa-search"></i></div>
        <h3>검색된 프로젝트가 없습니다</h3>
        <p>다른 검색어나 카테고리 필터를 선택해 보세요.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = items.map((item, index) => {
    const isHighRoi = item.roi > 0;
    const badgeHtml = item.badge ? `<span class="card-badge badge-${item.badgeColor}">${item.badge}</span>` : "";
    
    return `
      <div class="portfolio-card" data-id="${item.id}" style="animation-delay: ${index * 0.04}s">
        <div class="card-header">
          <div class="header-left">
            <span class="project-num">${item.number}</span>
            <span class="project-date">${item.date}</span>
          </div>
          ${badgeHtml}
        </div>
        
        <div class="card-body">
          <h3 class="card-title">${item.title}</h3>
          <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
          
          <div class="metrics-box ${isHighRoi ? 'highlight-box' : ''}">
            <div class="metric-item">
              <span class="metric-label">투자 유형</span>
              <span class="metric-value">${item.type}</span>
            </div>
            <div class="metric-item">
              <span class="metric-label">수익 성과</span>
              <span class="metric-value text-gold font-bold">${item.roiText}</span>
            </div>
            ${item.annualRoi ? `
            <div class="metric-item">
              <span class="metric-label">연간 환산</span>
              <span class="metric-value text-accent font-bold">${item.annualRoi}</span>
            </div>` : ''}
          </div>

          <p class="card-desc">${item.exitStory.substring(0, 75)}...</p>
        </div>

        <div class="card-footer">
          <span class="status-indicator"><i class="fas fa-check-circle"></i> ${item.status}</span>
          <button class="btn-detail" onclick="openDetailModal(${item.id})">
            상세 보기 <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Filter Tabs Logic
function initFilterTabs() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      filterProjects(category);
    });
  });
}

function filterProjects(category) {
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : "";

  let filtered = PORTFOLIO_DATA;

  if (category !== "all") {
    filtered = filtered.filter(item => item.categories.includes(category));
  }

  if (searchQuery) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(searchQuery) ||
      item.location.toLowerCase().includes(searchQuery) ||
      item.number.toLowerCase().includes(searchQuery) ||
      item.type.toLowerCase().includes(searchQuery)
    );
  }

  renderPortfolio(filtered);
}

// Search Logic
function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const activeBtn = document.querySelector(".filter-btn.active");
    const activeCategory = activeBtn ? activeBtn.getAttribute("data-filter") : "all";
    filterProjects(activeCategory);
  });
}

// Modal Logic
function initModal() {
  const modal = document.getElementById("detail-modal");
  const closeBtn = document.querySelector(".modal-close");
  const overlay = document.querySelector(".modal-overlay");

  if (!modal) return;

  const closeModal = () => {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openDetailModal(id) {
  const item = PORTFOLIO_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById("detail-modal");
  const content = document.getElementById("modal-dynamic-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-tags">
        <span class="modal-badge-num">${item.number}</span>
        <span class="card-badge badge-${item.badgeColor}">${item.badge || item.type}</span>
        <span class="modal-date"><i class="far fa-calendar-alt"></i> ${item.fullPeriod}</span>
      </div>
      <h2 class="modal-title">${item.title}</h2>
      <p class="modal-location"><i class="fas fa-map-marker-alt"></i> ${item.location}</p>
    </div>

    <div class="modal-grid-stats">
      <div class="stat-card">
        <span class="stat-label">투자 성과</span>
        <span class="stat-main text-gold">${item.roiText}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">연간 수익률</span>
        <span class="stat-main text-accent">${item.annualRoi || "-"}</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">진행 상태</span>
        <span class="stat-main text-green">${item.status}</span>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="section-subtitle"><i class="fas fa-user-shield"></i> 투자 참여 및 운용 구조 (개인정보 완벽 비공개)</h4>
      <div class="info-callout">
        <p><strong>참여 구성:</strong> ${item.participants}</p>
        <p class="small-text text-muted">* 투자자 프라이버시 보호를 위해 모든 개인 실명은 비공개 및 표준화 처리되었습니다.</p>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="section-subtitle"><i class="fas fa-tools"></i> 밸류업 & 운용 전략</h4>
      <div class="strategy-box">
        <p>${item.valueUpMethod}</p>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="section-subtitle"><i class="fas fa-chart-line"></i> 핵심 성과 및 엑시트 스토리</h4>
      <div class="story-box">
        <p>${item.exitStory}</p>
      </div>
    </div>

    <div class="modal-cta-box">
      <p class="cta-notice">유사한 부동산 밸류업 및 공동투자 기회에 대해 상담받으시겠습니까?</p>
      <a href="#consultation" onclick="document.getElementById('detail-modal').classList.remove('active'); document.body.style.overflow='auto';" class="btn-primary modal-cta-btn">
        전문가 1:1 맞춤 상담 신청하기 <i class="fas fa-arrow-right"></i>
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Consultation Form Logic
function initConsultationForm() {
  const form = document.getElementById("consult-form");
  const successModal = document.getElementById("consult-success-modal");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#client-name").value.trim();
    const phone = form.querySelector("#client-phone").value.trim();
    const type = form.querySelector("#consult-type").value;
    const budget = form.querySelector("#budget-range").value;
    const message = form.querySelector("#client-message").value.trim();

    if (!name || !phone) {
      alert("성함과 연락처를 입력해 주세요.");
      return;
    }

    const phoneRegex = /^[0-9\-+ ]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      alert("올바른 연락처 형식을 입력해 주세요.");
      return;
    }

    if (successModal) {
      document.getElementById("submitted-name").textContent = name;
      document.getElementById("submitted-type").textContent = type;
      successModal.classList.add("active");
      form.reset();
    } else {
      alert(`[상담 신청 완료]\n${name}님, 정상적으로 접수되었습니다.\n랜드올 전담 전문가가 24시간 이내에 안내드리겠습니다.`);
      form.reset();
    }
  });

  const successCloseBtn = document.getElementById("success-close-btn");
  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener("click", () => {
      successModal.classList.remove("active");
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === "#") return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        const navMenu = document.querySelector(".nav-menu");
        const hamburger = document.querySelector(".hamburger");
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          if (hamburger) hamburger.classList.remove("active");
        }
      }
    });
  });
}

// Mobile Navigation
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
}

// FAQ Accordion
function initFaq() {
  const faqItems = document.querySelectorAll(".faq-item");
  if (!faqItems.length) return;

  // Open first item by default
  faqItems[0].classList.add("active");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (!question) return;

    question.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      // Optional: close other items
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove("active");
      });

      item.classList.toggle("active", !isActive);
    });
  });
}

window.openDetailModal = openDetailModal;
