// ── TRANSLATIONS DICTIONARY ──
const TRANSLATIONS = {
  es: {
    docTitle: "Riesgo Sísmico · Santa Cruz, Bolivia",
    headerTitle: "Riesgo Sísmico — Santa Cruz",
    headerSubtitle: "Dpto. Santa Cruz de la Sierra · Bolivia · Fuente: USGS ComCat",
    statusPill: "Datos en tiempo real",
    lblStartDate: "Desde:",
    lblEndDate: "Hasta:",
    lblMinMag: "Mag. mín:",
    lblViewMode: "Vista:",
    optHeat: "Mapa de calor",
    optPoints: "Epicentros",
    optBoth: "Ambos",
    btnUpdate: "🔄 Actualizar",
    btnExport: "⬇ Exportar CSV",
    btnSim: "⚡ Simulación",
    btnSimActive: "❌ Salir Simulación",
    lblLoading: "Consultando USGS ComCat…",
    simPanelTitle: "Simulador de Sismos",
    simPanelSubtitle: "Santa Cruz, Bolivia",
    simTerremotoBtn: "💥 Terremoto (M≥5.0)",
    simSismoBtn: "🔔 Sismo (M<5.0)",
    simInfoBox: "Haga clic en el mapa para marcar el epicentro de la simulación.",
    titleCatalog: "Resumen del catálogo",
    lblStatTotal: "Sismos totales",
    lblStatMaxMag: "Magnitud máx.",
    lblStatAvgDepth: "Prof. prom. (km)",
    lblStatHigh: "Mag. ≥ 4.0",
    titleConcentration: "Zonas de mayor concentración sísmica",
    lblCalculating: "Calculando…",
    titleMagDistribution: "Distribución por magnitud",
    lblLoadingMag: "Cargando…",
    titleFeaturedEvents: "Últimos eventos destacados",
    lblLoadingEvents: "Cargando…",
    riskAlto: "Alto",
    riskMedio: "Medio",
    riskBajo: "Bajo",
    simActiveTerremoto: "💥 Modo Terremoto activo. Marca el epicentro en el mapa y presiona Iniciar.",
    simActiveSismo: "🔔 Modo Sismo activo. Marca el epicentro en el mapa y presiona Iniciar.",
    simAlertTitle: "🚨 SIMULACIÓN SÍSMICA DETECTADA",
    simDetail: "Magnitud: <strong>{mag}</strong> | Profundidad: <strong>{depth} km</strong><br>Epicentro: <em>{place}</em><br><strong>Impacto:</strong> {impact}",
    impactTerremotoHigh: "Daños estructurales severos en zonas urbanas. Alerta roja.",
    impactTerremotoMedium: "Movimiento fuerte sentido. Daños menores en construcciones débiles.",
    impactSismo: "Movimiento leve a moderado. Sin reportes de daños estructurales.",
    sismos: "sismos",
    prof: "prof.",
    toastLoaded: "✅ {count} sismos cargados desde USGS",
    toastError: "⚠️ Error de conexión con USGS. Usando datos de ejemplo."
  },
  en: {
    docTitle: "Seismic Risk · Santa Cruz, Bolivia",
    headerTitle: "Seismic Risk — Santa Cruz",
    headerSubtitle: "Santa Cruz Dept. · Bolivia · Source: USGS ComCat",
    statusPill: "Real-time data active",
    lblStartDate: "From:",
    lblEndDate: "To:",
    lblMinMag: "Min Mag:",
    lblViewMode: "View:",
    optHeat: "Heatmap",
    optPoints: "Epicenters",
    optBoth: "Both",
    btnUpdate: "🔄 Update",
    btnExport: "⬇ Export CSV",
    btnSim: "⚡ Simulation",
    btnSimActive: "❌ Exit Simulation",
    lblLoading: "Querying USGS ComCat…",
    simPanelTitle: "Earthquake Simulator",
    simPanelSubtitle: "Santa Cruz, Bolivia",
    simTerremotoBtn: "💥 Earthquake (M≥5.0)",
    simSismoBtn: "🔔 Tremor (M<5.0)",
    simInfoBox: "Click on the map to set the simulation epicenter.",
    titleCatalog: "Catalog Summary",
    lblStatTotal: "Total events",
    lblStatMaxMag: "Max Magnitude",
    lblStatAvgDepth: "Avg Depth (km)",
    lblStatHigh: "Mag ≥ 4.0",
    titleConcentration: "Zones of Highest Seismic Activity",
    lblCalculating: "Calculating…",
    titleMagDistribution: "Magnitude Distribution",
    lblLoadingMag: "Loading…",
    titleFeaturedEvents: "Latest Featured Events",
    lblLoadingEvents: "Loading…",
    riskAlto: "High",
    riskMedio: "Medium",
    riskBajo: "Low",
    simActiveTerremoto: "💥 Earthquake Mode active. Set epicenter on map and press Start.",
    simActiveSismo: "🔔 Tremor Mode active. Set epicenter on map and press Start.",
    simAlertTitle: "🚨 SEISMIC SIMULATION DETECTED",
    simDetail: "Magnitude: <strong>{mag}</strong> | Depth: <strong>{depth} km</strong><br>Epicenter: <em>{place}</em><br><strong>Impact:</strong> {impact}",
    impactTerremotoHigh: "Severe structural damage in urban areas. Red alert.",
    impactTerremotoMedium: "Strong shaking felt. Minor damage to weak structures.",
    impactSismo: "Light to moderate shaking. No structural damage reported.",
    sismos: "events",
    prof: "depth",
    toastLoaded: "✅ {count} events loaded from USGS",
    toastError: "⚠️ Connection error with USGS. Using offline fallback data."
  },
  qu: {
    docTitle: "Pacha Kuyuy Llakipayana · Santa Cruz, Bolivia",
    headerTitle: "Pacha Kuyuy Llakipayana — Santa Cruz",
    headerSubtitle: "Santa Cruz Suyu · Bolivia · Pukyu: USGS ComCat",
    statusPill: "Kunan pacha willaykuna",
    lblStartDate: "Pacha:",
    lblEndDate: "Kama:",
    lblMinMag: "Kuyuy Medida:",
    lblViewMode: "Rikuy:",
    optHeat: "Q'uñi saywitu",
    optPoints: "Chawpi chiri",
    optBoth: "Iskaynintin",
    btnUpdate: "🔄 Kutiqchay",
    btnExport: "⬇ CSV Lluqsichiy",
    btnSim: "⚡ Suyu Kamay",
    btnSimActive: "❌ Salir Simulación",
    lblLoading: "USGS llika tapukuchkan…",
    simPanelTitle: "Kuyuy Kamachiq",
    simPanelSubtitle: "Santa Cruz, Bolivia",
    simTerremotoBtn: "💥 Jatun Kuyuy (M≥5.0)",
    simSismoBtn: "🔔 Huch'uy Kuyuy (M<5.0)",
    simInfoBox: "Saywitupi ñitiy epicentromanta.",
    titleCatalog: "Willay Suyu",
    lblStatTotal: "Tukuy Kuyuykuna",
    lblStatMaxMag: "Kuraq Kuyuy",
    lblStatAvgDepth: "Chawpi Ukhu (km)",
    lblStatHigh: "Kuyuy ≥ 4.0",
    titleConcentration: "Astawan Kuyuq Suyu K'itikuna",
    lblCalculating: "Yupachkan…",
    titleMagDistribution: "Kuyuy laya ch'eqeriy",
    lblLoadingMag: "Cargando…",
    titleFeaturedEvents: "Qhipa Jatun Kuyuykuna",
    lblLoadingEvents: "Cargando…",
    riskAlto: "Kollanan",
    riskMedio: "Chawpi",
    riskBajo: "Pisi",
    simActiveTerremoto: "💥 Jatun Kuyuy llamk'achkan. Saywitupi ñitiy.",
    simActiveSismo: "🔔 Huch'uy Kuyuy llamk'achkan. Saywitupi ñitiy.",
    simAlertTitle: "🚨 KUYUY SIMULACIÓN RIQSISQA",
    simDetail: "Kuyuy tupuy: <strong>{mag}</strong> | Ukhun: <strong>{depth} km</strong><br>Epicentro: <em>{place}</em><br><strong>Llaki:</strong> {impact}",
    impactTerremotoHigh: "Wasi thuñiykuna. Puka Alerta.",
    impactTerremotoMedium: "Kuyuy sinchita rikukushan. Huch'uy wasikuna llasaqyachiy.",
    impactSismo: "Llampu kuyuylla. Mana imapas thuñikunchu.",
    sismos: "kuyuy",
    prof: "ukhu",
    toastLoaded: "✅ {count} kuyuykuna USGS nisqamanta churakusqa",
    toastError: "⚠️ USGS mana tinkunchu. Mallina willaykuna llamk'achkan."
  },
  ay: {
    docTitle: "Uraqi Khararkiri Riskuxa · Santa Cruz, Bolivia",
    headerTitle: "Uraqi Khararkiri — Santa Cruz",
    headerSubtitle: "Santa Cruz Suyu · Bolivia · Puti: USGS ComCat",
    statusPill: "Jach'a yatiy k'achata",
    lblStartDate: "Ukat:",
    lblEndDate: "Kama:",
    lblMinMag: "Tupu:",
    lblViewMode: "Uñja:",
    optHeat: "Lupi khunu",
    optPoints: "Epicentros",
    optBoth: "Panpacha",
    btnUpdate: "🔄 Machaqt'ayaña",
    btnExport: "⬇ CSV Lluqsiy",
    btnSim: "⚡ Simulaciona",
    btnSimActive: "❌ Salir Simulación",
    lblLoading: "USGS yatiñäwi thaqhaski…",
    simPanelTitle: "Khararkiri Simuladora",
    simPanelSubtitle: "Santa Cruz, Bolivia",
    simTerremotoBtn: "💥 Jach'a Kuyuy (M≥5.0)",
    simSismoBtn: "🔔 Jisk'a Kuyuy (M<5.0)",
    simInfoBox: "Mapan click luraña epicentrotaki.",
    titleCatalog: "Taqpacha Ukhuchawi",
    lblStatTotal: "Tukuy khararkiri",
    lblStatMaxMag: "Jach'a tupu",
    lblStatAvgDepth: "Manqha (km)",
    lblStatHigh: "Tupu ≥ 4.0",
    titleConcentration: "Khararkiri jach'a k'itikuna",
    lblCalculating: "Jakhuña…",
    titleMagDistribution: "Tupu jaljaña",
    lblLoadingMag: "Apxasi…",
    titleFeaturedEvents: "Khararkiri qhipa uñjatanaka",
    lblLoadingEvents: "Apxasi…",
    riskAlto: "Jach'a",
    riskMedio: "Taypi",
    riskBajo: "Jisk'a",
    simActiveTerremoto: "💥 Jach'a Kuyuy machaqaski. Mapan click luraña.",
    simActiveSismo: "🔔 Jisk'a Kuyuy machaqaski. Mapan click luraña.",
    simAlertTitle: "🚨 KHARARKIRI SIMULACIONA UÑJATA",
    simDetail: "Tupu: <strong>{mag}</strong> | Manqha: <strong>{depth} km</strong><br>Kharari: <em>{place}</em><br><strong>Janwiri:</strong> {impact}",
    impactTerremotoHigh: "Wasi qulluy. Wila Alerta.",
    impactTerremotoMedium: "Khararkiri ch'amampi uñjata. Jisk'a janwiri.",
    impactSismo: "Jisk'a khararkiri. Jan walt'awinaka utjiti.",
    sismos: "kuyuy",
    prof: "manqh.",
    toastLoaded: "✅ {count} khararkiri USGS apxatata",
    toastError: "⚠️ USGS pantjasiwi. Offline offline offline."
  },
  gn: {
    docTitle: "Yvyryrýi Kyhyje · Santa Cruz, Bolivia",
    headerTitle: "Yvyryrýi Kyhyje — Santa Cruz",
    headerSubtitle: "Santa Cruz Departamento · Bolivia · Yvu: USGS ComCat",
    statusPill: "Marandu ko'ag̃agua",
    lblStartDate: "Gwi:",
    lblEndDate: "Peve:",
    lblMinMag: "Mbarete:",
    lblViewMode: "Hecha:",
    optHeat: "Hakumy yvyra'anga",
    optPoints: "Mbyte",
    optBoth: "Mokõive",
    btnUpdate: "🔄 Mbohecharã",
    btnExport: "⬇ CSV Lluqsiy",
    btnSim: "⚡ Simulacion",
    btnSimActive: "❌ Salir Simulación",
    lblLoading: "USGS oheka hína…",
    simPanelTitle: "Yvyryrýi Mbohecharã",
    simPanelSubtitle: "Santa Cruz, Bolivia",
    simTerremotoBtn: "💥 Yvyryrýi Guasu (M≥5.0)",
    simSismoBtn: "🔔 Yvyryrýi Michĩ (M<5.0)",
    simInfoBox: "Eñepyrũ hag̃ua emoĩ yvyra'anga.",
    titleCatalog: "Yvyryrýi Renda",
    lblStatTotal: "Yvyryrýi guasu",
    lblStatMaxMag: "Mbaretekue tuicháva",
    lblStatAvgDepth: "Pypukukue chae (km)",
    lblStatHigh: "Mbarete ≥ 4.0",
    titleConcentration: "Yvyryrýi rendaguasu kuera",
    lblCalculating: "Oipapa hína…",
    titleMagDistribution: "Mbaretekue ñemboja'o",
    lblLoadingMag: "Ogueru…",
    titleFeaturedEvents: "Yvyryrýi guasu hecharãva",
    lblLoadingEvents: "Ogueru…",
    riskAlto: "Tuicha",
    riskMedio: "Mbyte",
    riskBajo: "Michĩ",
    simActiveTerremoto: "💥 Mbohecharã guasu oiko. Emoĩ yvyra'anga.",
    simActiveSismo: "🔔 Mbohecharã michĩ oiko. Emoĩ yvyra'anga.",
    simAlertTitle: "🚨 YVYRYRÝI SIMULACION OJEHECHA",
    simDetail: "Mbarete: <strong>{mag}</strong> | Pypukukue: <strong>{depth} km</strong><br>Renda: <em>{place}</em><br><strong>Tembiapo:</strong> {impact}",
    impactTerremotoHigh: "Óga ho'a yvyguýpe. Alerta pytã.",
    impactTerremotoMedium: "Yvyremói mbarete. Oĩ óga michĩ oñembyaíva.",
    impactSismo: "Yvyremói vevúi. Ndorohechái tembiapo vai.",
    sismos: "yvyryrýi",
    prof: "pypuku",
    toastLoaded: "✅ {count} yvyryrýi ogueru USGS gui",
    toastError: "⚠️ USGS ndoikói. Eipuru offline mba'e."
  },
  fr: {
    docTitle: "Risque Sismique · Santa Cruz, Bolivie",
    headerTitle: "Risque Sismique — Santa Cruz",
    headerSubtitle: "Dpt. Santa Cruz · Bolivie · Source: USGS ComCat",
    statusPill: "Données en temps réel",
    lblStartDate: "Du:",
    lblEndDate: "Au:",
    lblMinMag: "Mag. min:",
    lblViewMode: "Vue:",
    optHeat: "Carte thermique",
    optPoints: "Épicentres",
    optBoth: "Les deux",
    btnUpdate: "🔄 Actualiser",
    btnExport: "⬇ Exporter CSV",
    btnSim: "⚡ Simulation",
    btnSimActive: "❌ Sortir de la Simulation",
    lblLoading: "Requête USGS ComCat…",
    simPanelTitle: "Simulateur de Séismes",
    simPanelSubtitle: "Santa Cruz, Bolivie",
    simTerremotoBtn: "💥 Séisme Majeur (M≥5.0)",
    simSismoBtn: "🔔 Séisme Léger (M<5.0)",
    simInfoBox: "Cliquez sur la carte pour définir l'épicentre.",
    titleCatalog: "Résumé du catalogue",
    lblStatTotal: "Séismes totaux",
    lblStatMaxMag: "Magnitude max.",
    lblStatAvgDepth: "Prof. moyenne (km)",
    lblStatHigh: "Mag. ≥ 4.0",
    titleConcentration: "Zones de plus forte concentration sismique",
    lblCalculating: "Calcul en cours…",
    titleMagDistribution: "Distribution par magnitude",
    lblLoadingMag: "Chargement…",
    titleFeaturedEvents: "Derniers événements majeurs",
    lblLoadingEvents: "Chargement…",
    riskAlto: "Élevé",
    riskMedio: "Moyen",
    riskBajo: "Faible",
    simActiveTerremoto: "💥 Mode Séisme Majeur actif. Cliquez sur la carte.",
    simActiveSismo: "🔔 Mode Séisme Léger actif. Cliquez sur la carte.",
    simAlertTitle: "🚨 SIMULATION SISMIQUE DÉTECTÉE",
    simDetail: "Magnitude: <strong>{mag}</strong> | Profondeur: <strong>{depth} km</strong><br>Épicentre: <em>{place}</em><br><strong>Impact:</strong> {impact}",
    impactTerremotoHigh: "Dommages structurels sévères en zone urbaine. Alerte rouge.",
    impactTerremotoMedium: "Secousse forte ressentie. Dommages mineurs sur structures faibles.",
    impactSismo: "Secousse légère à modérée. Aucun dommage structurel signalé.",
    sismos: "séismes",
    prof: "prof.",
    toastLoaded: "✅ {count} séismes chargés depuis USGS",
    toastError: "⚠️ Erreur USGS. Utilisation des données de secours."
  },
  pt: {
    docTitle: "Risco Sísmico · Santa Cruz, Bolívia",
    headerTitle: "Risco Sísmico — Santa Cruz",
    headerSubtitle: "Dpto. Santa Cruz · Bolívia · Fonte: USGS ComCat",
    statusPill: "Dados em tempo real",
    lblStartDate: "De:",
    lblEndDate: "Até:",
    lblMinMag: "Mag. mín:",
    lblViewMode: "Visualização:",
    optHeat: "Mapa de calor",
    optPoints: "Epicentros",
    optBoth: "Ambos",
    btnUpdate: "🔄 Actualizar",
    btnExport: "⬇ Exportar CSV",
    btnSim: "⚡ Simulação",
    btnSimActive: "❌ Sair da Simulação",
    lblLoading: "Consultando USGS ComCat…",
    simPanelTitle: "Simulador de Sismos",
    simPanelSubtitle: "Santa Cruz, Bolívia",
    simTerremotoBtn: "💥 Terremoto (M≥5.0)",
    simSismoBtn: "🔔 Tremor (M<5.0)",
    simInfoBox: "Clique no mapa para marcar o epicentro.",
    titleCatalog: "Resumo do catálogo",
    lblStatTotal: "Sismos totais",
    lblStatMaxMag: "Magnitude máx.",
    lblStatAvgDepth: "Prof. média (km)",
    lblStatHigh: "Mag. ≥ 4.0",
    titleConcentration: "Zonas de maior concentração sísmica",
    lblCalculating: "Calculando…",
    titleMagDistribution: "Distribuição por magnitude",
    lblLoadingMag: "Carregando…",
    titleFeaturedEvents: "Últimos eventos destacados",
    lblLoadingEvents: "Carregando…",
    riskAlto: "Alto",
    riskMedio: "Médio",
    riskBajo: "Baixo",
    simActiveTerremoto: "💥 Modo Terremoto activo. Clique no mapa.",
    simActiveSismo: "🔔 Modo Tremor ativo. Clique no mapa.",
    simAlertTitle: "🚨 SIMULAÇÃO SÍSMICA DETECTADA",
    simDetail: "Magnitude: <strong>{mag}</strong> | Profundidade: <strong>{depth} km</strong><br>Epicentro: <em>{place}</em><br><strong>Impacto:</strong> {impact}",
    impactTerremotoHigh: "Danos estruturais severos em áreas urbanas. Alerta vermelho.",
    impactTerremotoMedium: "Forte tremor sentido. Pequenos danos em construções fracas.",
    impactSismo: "Tremor leve a moderado. Sem relatos de danos estruturais.",
    sismos: "sismos",
    prof: "prof.",
    toastLoaded: "✅ {count} sismos carregados da USGS",
    toastError: "⚠️ Erro de conexão com USGS. Usando dados offline de exemplo."
  },
  zh: {
    docTitle: "地震风险 · 玻利维亚圣克鲁斯",
    headerTitle: "地震风险评估 — 圣克鲁斯",
    headerSubtitle: "圣克鲁斯省 · 玻利维亚 · 数据源：USGS ComCat",
    statusPill: "实时数据连接成功",
    lblStartDate: "起始日期:",
    lblEndDate: "结束日期:",
    lblMinMag: "最小震级:",
    lblViewMode: "视图模式:",
    optHeat: "热力图",
    optPoints: "震中分布",
    optBoth: "两者皆有",
    btnUpdate: "🔄 更新数据",
    btnExport: "⬇ 导出 CSV",
    btnSim: "⚡ 地震模拟",
    btnSimActive: "❌ 退出模拟",
    lblLoading: "正在查询美国地质调查局(USGS)…",
    simPanelTitle: "地震模拟系统",
    simPanelSubtitle: "玻利维亚圣克鲁斯",
    simTerremotoBtn: "💥 破坏性地震 (M≥5.0)",
    simSismoBtn: "🔔 一般地震 (M<5.0)",
    simInfoBox: "在圣克鲁斯地图内点击以选择模拟震中。",
    titleCatalog: "数据总览",
    lblStatTotal: "地震总数",
    lblStatMaxMag: "最大震级",
    lblStatAvgDepth: "平均深度 (km)",
    lblStatHigh: "中强震 (≥ 4.0)",
    titleConcentration: "强震频发高危区域",
    lblCalculating: "正在计算中…",
    titleMagDistribution: "震级区间分布图",
    lblLoadingMag: "加载中…",
    titleFeaturedEvents: "最新灾情或大震播报",
    lblLoadingEvents: "加载中…",
    riskAlto: "高危",
    riskMedio: "中度",
    riskBajo: "低度",
    simActiveTerremoto: "💥 破坏性地震模拟就绪，请在圣克鲁斯地图内点击。",
    simActiveSismo: "🔔 轻微地震模拟就绪，请在圣克鲁斯地图内点击。",
    simAlertTitle: "🚨 检测到模拟地震警报",
    simDetail: "震级: <strong>{mag}</strong> | 震源深度: <strong>{depth} km</strong><br>震中位置: <em>{place}</em><br><strong>受灾评估:</strong> {impact}",
    impactTerremotoHigh: "震中城市建筑受损严重，红色预警。",
    impactTerremotoMedium: "部分建筑开裂，震感强烈，黄色预防警报。",
    impactSismo: "震感轻微，无基础设施破坏报告。",
    sismos: "次地震",
    prof: "深度",
    toastLoaded: "✅ 已从USGS加载了 {count} 次地震数据",
    toastError: "⚠️ 连接USGS服务器超时，已为您启用离线演示数据。"
  },
  ja: {
    docTitle: "地震リスク分析 · ボリビア、サンタクルス",
    headerTitle: "地震リスク分析 — サンタクルス",
    headerSubtitle: "サンタクルス県 · ボリビア · 情報源：USGS ComCat",
    statusPill: "リアルタイムデータ同期中",
    lblStartDate: "開始日:",
    lblEndDate: "終了日:",
    lblMinMag: "最小規模:",
    lblViewMode: "表示設定:",
    optHeat: "ヒートマップ",
    optPoints: "震央プロット",
    optBoth: "両方表示",
    btnUpdate: "🔄 再読込",
    btnExport: "⬇ CSV出力",
    btnSim: "⚡ 地震シミュレータ",
    btnSimActive: "❌ シミュレーション終了",
    lblLoading: "USGSデータベースに問い合わせ中…",
    simPanelTitle: "地震シミュレーター",
    simPanelSubtitle: "サンタクルス、ボリビア",
    simTerremotoBtn: "💥 大地震 (M≥5.0)",
    simSismoBtn: "🔔 中小地震 (M<5.0)",
    simInfoBox: "地図上をクリックして震央を設定してください。",
    titleCatalog: "観測データの概要",
    lblStatTotal: "総地震数",
    lblStatMaxMag: "最大規模",
    lblStatAvgDepth: "平均震源深さ (km)",
    lblStatHigh: "M4.0以上の地震",
    titleConcentration: "地震多発ホットスポット",
    lblCalculating: "集計中…",
    titleMagDistribution: "マグニチュード分布",
    lblLoadingMag: "ロード中…",
    titleFeaturedEvents: "注目すべき主要地震",
    lblLoadingEvents: "ロード中…",
    riskAlto: "高リスク",
    riskMedio: "中リスク",
    riskBajo: "低リスク",
    simActiveTerremoto: "💥 大地震モード有効。サンタクルスの地図をクリックしてください。",
    simActiveSismo: "🔔 軽微な地震モード有効。サンタクルスの地図をクリックしてください。",
    simAlertTitle: "🚨 模擬地震の検知アラート",
    simDetail: "規模: <strong>M{mag}</strong> | 震源の深さ: <strong>{depth} km</strong><br>震央位置: <em>{place}</em><br><strong>想定被害:</strong> {impact}",
    impactTerremotoHigh: "都市部で深刻な建物倒壊의 위험。レッドアラート。",
    impactTerremotoMedium: "強い揺れを観測。耐震性の低い建物に一部軽微な被害。",
    impactSismo: "弱い揺れ。インフラへの影響はありません。",
    sismos: "回",
    prof: "深さ",
    toastLoaded: "✅ USGSから {count} 件 of イベントを同期しました",
    toastError: "⚠️ USGS通信エラー。オフラインデータを一時的に使用します。"
  }
};

let currentLang = 'es';

function changeLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  const dict = TRANSLATIONS[lang];

  Object.keys(dict).forEach(key => {
    const el = document.getElementById(key);
    if (el) {
      if (!['lblLoading', 'lblCalculating', 'lblLoadingMag', 'lblLoadingEvents'].includes(key)) {
        if (key === 'docTitle') {
          document.title = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    }
  });

  // Handle dynamic text of simulation button
  const simBtn = document.getElementById('btnSim');
  if (simBtn) {
    simBtn.textContent = simMode ? dict.btnSimActive : dict.btnSim;
  }

  const textVal = simMode ? 'MODO SIMULACIÓN' : dict.statusPill;
  document.getElementById('statusPill').innerHTML = `<div class="dot"></div> ${textVal}`;
  
  if (allData.length > 0) {
    renderStats(allData);
    renderMagBars(allData);
    renderEvents(allData);
    renderZones(allData);
    renderMap(allData);
  }
}

function getTranslation(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['es'][key];
}

// ── THEME SWITCHER ──
let currentTheme = 'light';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.className = currentTheme === 'light' ? 'light-theme' : '';
  document.getElementById('themeToggleBtn').textContent = currentTheme === 'light' ? '☀️' : '🌙';
  setMapTheme(currentTheme);
}


// ── MAP INIT ──
const map = L.map('map', { zoomControl: true }).setView([-18.0, -63.15], 8);
let tileLayer = null;

function setMapTheme(theme) {
  if (tileLayer) {
    map.removeLayer(tileLayer);
  }
  const url = theme === 'dark'
    ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
    : 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  
  tileLayer = L.tileLayer(url, {
    attribution: '© OpenStreetMap © CARTO',
    maxZoom: 18
  }).addTo(map);
}

// Initialize Map Theme
setMapTheme(currentTheme);

let heatLayer = null;
let pointLayer = L.layerGroup().addTo(map);
let buildingLayer = L.layerGroup().addTo(map);
let targetLayer = L.layerGroup().addTo(map);
let allData = [];

// ── REAL DATA VS SIMULATION SEPARATION DATASETS ──
let realEvents = [];
let simulatedEvents = [];

// ── SANTA CRUZ DE LA SIERRA 12 HIGHEST REAL BUILDINGS ──
const BUILDINGS = [
  { name: 'Green Tower (Torre 1)', lat: -17.7593, lng: -63.1932, height: 140, floors: 34, use: 'Oficinas', cap: '1,500 profesionales diarios', emoji: '🏢' },
  { name: 'Torre Platinum II', lat: -17.7578, lng: -63.1944, height: 136, floors: 35, use: 'Oficinas', cap: 'Centros corporativos de alta densidad', emoji: '🏢' },
  { name: 'Macororó 16 y 17 (City Park)', lat: -17.7758, lng: -63.1972, height: 133, floors: 37, use: 'Residencial', cap: '~550 personas por torre', emoji: '🏢' },
  { name: 'Green Tower (Torre 2)', lat: -17.7596, lng: -63.1932, height: 130, floors: 30, use: 'Residencial / Oficinas', cap: '~300 residentes estables', emoji: '🏢' },
  { name: 'Torre Mercantil Santa Cruz', lat: -17.7523, lng: -63.1764, height: 125, floors: 31, use: 'Oficinas', cap: 'Sede corporativa y financiera masiva', emoji: '🏢' },
  { name: 'Condominio La Casona', lat: -17.7708, lng: -63.1812, height: 124, floors: 27, use: 'Residencial / Mixto', cap: '~450 residentes familiares', emoji: '🏢' },
  { name: 'World Trade Center (T1 & T2)', lat: -17.7661, lng: -63.2145, height: 122, floors: 31, use: 'Oficinas / Comercial', cap: 'Delegaciones comerciales internacionales', emoji: '🏢' },
  { name: 'Torre Manzana 40 (T1 & T2)', lat: -17.7554, lng: -63.1941, height: 120, floors: 31, use: 'Oficinas / Hotel / Comercial', cap: 'Flujo flotante corporativo masivo', emoji: '🏢' },
  { name: 'Ambassador Business Center', lat: -17.7628, lng: -63.1912, height: 108, floors: 26, use: 'Oficinas', cap: 'Oficinas corporativas exclusivas', emoji: '🏢' },
  { name: 'Torre Dúo', lat: -17.7601, lng: -63.1925, height: 107, floors: 27, use: 'Oficinas', cap: 'Salas de negocios y conferencias', emoji: '🏢' },
  { name: 'Condominio La Riviera', lat: -17.7588, lng: -63.1928, height: 103, floors: 28, use: 'Residencial / Comercial', cap: '~270 personas (80 departamentos de lujo)', emoji: '🏢' },
  { name: 'Palacio de Justicia', lat: -17.7754, lng: -63.1818, height: 100, floors: 23, use: 'Público / Administrativo', cap: 'Miles de visitas civiles y funcionarios al día', emoji: '⚖️' }
];

// ── PROVINCIAL RISK ZONES ──
const ZONES = [
  { name: 'Prov. Andrés Ibáñez', sub: 'Área metropolitana SCZ', lat: -17.85, lng: -63.15, r: 60, risk: 'alto'  },
  { name: 'Prov. Cordillera',     sub: 'Camiri / Boyuibe',        lat: -20.10, lng: -63.30, r: 80, risk: 'alto'  },
  { name: 'Prov. Vallegrande',    sub: 'Zona central',            lat: -18.50, lng: -64.10, r: 60, risk: 'medio' },
  { name: 'Prov. Ichilo',         sub: 'Villa Yapacani / Bulo',   lat: -17.30, lng: -63.90, r: 55, risk: 'medio' },
  { name: 'Prov. Chiquitos',      sub: 'San José de Chiquitos',   lat: -17.80, lng: -60.80, r: 70, risk: 'bajo'  },
  { name: 'Prov. Sara / Warnes',  sub: 'Norte metropolitano',     lat: -17.50, lng: -63.25, r: 50, risk: 'bajo'  },
];

const RISK_COLOR = { alto: '#e85d2f', medio: '#f0a500', bajo: '#26c97a' };

const zoneCircles = [];

ZONES.forEach(z => {
  const circle = L.circle([z.lat, z.lng], {
    radius: z.r * 1000,
    color: RISK_COLOR[z.risk],
    fillColor: RISK_COLOR[z.risk],
    fillOpacity: 0.05,
    weight: 1.5,
    dashArray: '6 4'
  }).addTo(map);

  circle.myZoneData = z;
  
  circle.on('click', function(e) {
    if (simMode) {
      L.DomEvent.stopPropagation(e);
      markEpicenter(e.latlng.lat, e.latlng.lng);
    }
  });

  zoneCircles.push(circle);
});

rebindZonePopups();

function unbindZonePopups() {
  zoneCircles.forEach(c => {
    c.closePopup();
    c.unbindPopup();
  });
}

function rebindZonePopups() {
  zoneCircles.forEach(c => {
    const z = c.myZoneData;
    c.bindPopup(() => {
      const riskLabel = getTranslation(z.risk === 'alto' ? 'riskAlto' : z.risk === 'medio' ? 'riskMedio' : 'riskBajo');
      return `<b>${z.name}</b><br>${z.sub}<br>${getTranslation('lblViewMode').replace(':','')}: <b style="color:${RISK_COLOR[z.risk]}">${riskLabel}</b>`;
    });
  });
}

function unbindAllPopups() {
  unbindZonePopups();
  pointLayer.eachLayer(layer => layer.unbindPopup());
  buildingLayer.eachLayer(layer => layer.unbindPopup());
}

function rebindAllPopups() {
  rebindZonePopups();
  pointLayer.eachLayer(layer => {
    if (layer.popupHtml) layer.bindPopup(layer.popupHtml);
  });
  buildingLayer.eachLayer(layer => {
    if (layer.popupHtml) layer.bindPopup(layer.popupHtml);
  });
}

function renderZones(data) {
  const zoneList = document.getElementById('zoneList');
  const counts = ZONES.map(z => {
    const R = z.r;
    const cnt = data.filter(e => {
      const dlat = e.lat - z.lat, dlng = e.lng - z.lng;
      return Math.sqrt(dlat*dlat + dlng*dlng) < R/111;
    }).length;
    return { ...z, cnt };
  }).sort((a,b) => b.cnt - a.cnt);

  zoneList.innerHTML = counts.map(z => {
    const riskLabel = getTranslation(z.risk === 'alto' ? 'riskAlto' : z.risk === 'medio' ? 'riskMedio' : 'riskBajo');
    const sismosLabel = getTranslation('sismos');
    return `
      <div class="zone-item" onclick="flyTo(${z.lat},${z.lng})">
        <div class="zone-dot" style="background:${RISK_COLOR[z.risk]}"></div>
        <div class="zone-info">
          <div class="zone-name">${z.name}</div>
          <div class="zone-sub">${z.sub} · ${z.cnt} ${sismosLabel}</div>
        </div>
        <div class="zone-badge badge-${z.risk}">${riskLabel}</div>
      </div>`;
  }).join('');
}

function flyTo(lat, lng) {
  map.flyTo([lat, lng], 9, { duration: 1.2 });
}

// ── DATA LOAD ──
async function loadData() {
  if (simMode) return; // Disable USGS pulling during simulation

  document.getElementById('loading').style.display = 'flex';
  document.getElementById('lblLoading').textContent = getTranslation('lblLoading');
  pointLayer.clearLayers();
  buildingLayer.clearLayers();
  if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }

  const start = document.getElementById('startDate').value || '2000-01-01';
  const end   = document.getElementById('endDate').value   || new Date().toISOString().slice(0,10);
  const minMag = document.getElementById('minMag').value;

  const url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson` +
    `&starttime=${start}&endtime=${end}` +
    `&minlatitude=-22&maxlatitude=-14` +
    `&minlongitude=-65&maxlongitude=-57` +
    `&minmagnitude=${minMag}&orderby=time&limit=2000`;

  try {
    const res  = await fetch(url);
    const json = await res.json();
    const features = json.features || [];

    allData = features.map(f => ({
      lat:   f.geometry.coordinates[1],
      lng:   f.geometry.coordinates[0],
      depth: f.geometry.coordinates[2],
      mag:   f.properties.mag,
      place: f.properties.place || 'Bolivia',
      time:  new Date(f.properties.time).toLocaleDateString('es-BO'),
    })).filter(e => e.lat && e.lng);

    renderStats(allData);
    renderMagBars(allData);
    renderEvents(allData);
    renderZones(allData);
    renderMap(allData);
    document.getElementById('loading').style.display = 'none';
    showToast(getTranslation('toastLoaded').replace('{count}', allData.length));
  } catch(err) {
    document.getElementById('loading').style.display = 'none';
    showToast(getTranslation('toastError'));
    useFallback();
  }
}

// ── RENDER MAP ──
function renderMap(data) {
  const mode = document.getElementById('viewMode').value;
  if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }
  pointLayer.clearLayers();

  const heatPts = data.map(e => [e.lat, e.lng, Math.min(e.mag / 6, 1)]);

  if (mode === 'heat' || mode === 'both') {
    heatLayer = L.heatLayer(heatPts, {
      radius: 28, blur: 20, maxZoom: 10,
      gradient: { 0.0:'#0a0d12', 0.2:'#0d2b5e', 0.45:'#3d6fc4', 0.65:'#f0a500', 0.85:'#e85d2f', 1.0:'#ff1a1a' }
    }).addTo(map);
  }

  if (mode === 'points' || mode === 'both') {
    data.forEach(e => {
      const c = e.mag >= 5 ? '#e85d2f' : e.mag >= 4 ? '#f0a500' : e.mag >= 3 ? '#4a9eff' : '#26c97a';
      const r = Math.max(4, e.mag * 3.5);
      
      const marker = L.circleMarker([e.lat, e.lng], {
        radius: r, fillColor: c, color: '#fff',
        weight: 1, opacity: 1, fillOpacity: 0.8
      }).addTo(pointLayer);

      marker.popupHtml = `<div style="font-family:'Space Grotesk',sans-serif;min-width:160px;">
          <b style="font-size:15px;color:${c}">Mag. ${e.mag}</b><br>
          <span style="font-size:12px;color:#aaa">${e.place}</span><br>
          Fecha: <b>${e.time}</b><br>
          Profundidad: <b>${e.depth?.toFixed(1)} km</b>
        </div>`;

      if (!simMode) {
        marker.bindPopup(marker.popupHtml);
      }

      marker.on('click', function(evt) {
        if (simMode) {
          L.DomEvent.stopPropagation(evt);
          markEpicenter(evt.latlng.lat, evt.latlng.lng);
        }
      });
    });
  }
}

// ── STATS ──
function renderStats(data) {
  const mags  = data.map(e => e.mag).filter(Boolean);
  const total = data.length;
  const maxM  = mags.length ? Math.max(...mags).toFixed(1) : '—';
  const avgD  = data.length ? (data.reduce((s,e) => s+(e.depth||0),0)/data.length).toFixed(0) : '—';
  const high  = data.filter(e => e.mag >= 4).length;
  document.getElementById('statTotal').textContent  = total;
  document.getElementById('statMaxMag').textContent = maxM;
  document.getElementById('statAvgDepth').textContent = avgD;
  document.getElementById('statHigh').textContent   = high;
}

// ── MAG BARS ──
function renderMagBars(data) {
  const ranges = [
    { label:'≥5.0', min:5,   max:99, color:'#e85d2f' },
    { label:'4–5',  min:4,   max:5,  color:'#f0a500' },
    { label:'3–4',  min:3,   max:4,  color:'#4a9eff' },
    { label:'2–3',  min:2,   max:3,  color:'#26c97a' },
    { label:'<2',   min:0,   max:2,  color:'#6b7a94' },
  ];
  const counts = ranges.map(r => ({ ...r, cnt: data.filter(e => e.mag >= r.min && e.mag < r.max).length }));
  const maxC = Math.max(...counts.map(r => r.cnt), 1);

  document.getElementById('magBars').innerHTML = counts.map(r => `
    <div class="mag-row">
      <span class="mag-label">${r.label}</span>
      <div class="mag-bar-wrap">
        <div class="mag-bar-fill" style="width:${(r.cnt/maxC*100).toFixed(1)}%;background:${r.color}"></div>
      </div>
      <span class="mag-count">${r.cnt}</span>
    </div>`).join('');
}

// ── EVENTS ──
function renderEvents(data) {
  const top = [...data].sort((a,b) => b.mag - a.mag).slice(0,8);
  const c = m => m >= 5 ? '#e85d2f' : m >= 4 ? '#f0a500' : m >= 3 ? '#4a9eff' : '#26c97a';
  const profLabel = getTranslation('prof');
  document.getElementById('eventList').innerHTML = top.map(e => `
    <div class="event-item">
      <div class="event-mag" style="color:${c(e.mag)}">${e.mag?.toFixed(1)}</div>
      <div class="event-place">
        <div class="place-name">${e.place.replace(/, Bolivia/,'').replace(/km .* of /,'')}</div>
        <div class="place-date">${e.time}</div>
      </div>
      <div class="event-depth">${e.depth?.toFixed(0)} km<br><span style="font-size:9px">${profLabel}</span></div>
    </div>`).join('');
}

// ── EXPORT ──
function exportCSV() {
  if (!allData.length) return showToast('⚠️ Sin datos / No data');
  const rows = ['lat,lng,magnitud,profundidad_km,lugar,fecha', ...allData.map(e =>
    `${e.lat},${e.lng},${e.mag},${e.depth?.toFixed(1)},\"${e.place}\",${e.time}`)];
  const blob = new Blob([rows.join('\n')], { type:'text/csv' });
  const a = Object.assign(document.createElement('a'), { href:URL.createObjectURL(blob), download:'sismos_scz.csv' });
  a.click();
  showToast('📥 CSV exportado / CSV exported');
}

// ── FALLBACK ──
function useFallback() {
  allData = [
    {lat:-18.02,lng:-63.10,mag:3.0,depth:15,place:'Santa Cruz (Andrés Ibáñez)',time:'2024-03-01'},
    {lat:-18.20,lng:-63.45,mag:3.9,depth:22,place:'Bolivia central, SCZ',time:'2023-06-14'},
    {lat:-20.40,lng:-63.27,mag:5.8,depth:558,place:'Sur del dpto. SCZ',time:'2018-04-02'},
    {lat:-19.80,lng:-63.10,mag:4.5,depth:120,place:'Cordillera, Santa Cruz',time:'2018-09-12'},
    {lat:-17.80,lng:-62.90,mag:3.2,depth:10,place:'Norte de Santa Cruz',time:'2021-11-03'},
    {lat:-18.50,lng:-63.70,mag:4.1,depth:80,place:'Sara, Santa Cruz',time:'2015-07-22'},
    {lat:-20.10,lng:-63.45,mag:5.3,depth:40,place:'31 km SE of Boyuibe',time:'2025-12-30'},
    {lat:-19.20,lng:-63.60,mag:3.7,depth:35,place:'Vallegrande, SCZ',time:'2022-02-18'},
    {lat:-18.00,lng:-63.17,mag:2.8,depth:8,place:'Ciudad de Santa Cruz',time:'2023-09-05'},
    {lat:-18.95,lng:-62.50,mag:4.8,depth:200,place:'Chiquitos, Santa Cruz',time:'2009-11-27'},
    {lat:-20.80,lng:-63.20,mag:4.3,depth:95,place:'Camiri, Cordillera',time:'2017-05-11'},
    {lat:-18.30,lng:-63.00,mag:3.5,depth:18,place:'La Guardia, SCZ',time:'2020-07-27'},
  ];
  renderStats(allData); renderMagBars(allData);
  renderEvents(allData); renderZones(allData); renderMap(allData);
}

// ── TOAST ──
function showToast(msg) {
  const t = document.getElementById('toast');
  t.innerHTML = msg; t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 6000);
}

// ── LEGEND on map ──
const legend = L.control({ position:'bottomright' });
legend.onAdd = () => {
  const d = L.DomUtil.create('div','map-legend');
  updateLegendContent(d);
  return d;
};
legend.addTo(map);

function updateLegendContent(domElement) {
  const element = domElement || document.querySelector('.map-legend');
  if (!element) return;
  const labelMag = getTranslation('lblMinMag').replace(':','').toUpperCase();
  const labelZones = getTranslation('titleConcentration').toUpperCase();
  const rAlto = getTranslation('riskAlto');
  const rMedio = getTranslation('riskMedio');
  const rBajo = getTranslation('riskBajo');
  element.innerHTML = `
    <div style="font-size:10px;font-family:'Space Mono',monospace;color:#6b7a94;letter-spacing:1px;margin-bottom:6px;">${labelMag}</div>
    <div class="legend-row"><div class="legend-swatch" style="background:#e85d2f"></div><span style="font-size:11px">≥ 5.0</span></div>
    <div class="legend-row"><div class="legend-swatch" style="background:#f0a500"></div><span style="font-size:11px">4.0 – 4.9</span></div>
    <div class="legend-row"><div class="legend-swatch" style="background:#4a9eff"></div><span style="font-size:11px">3.0 – 3.9</span></div>
    <div class="legend-row"><div class="legend-swatch" style="background:#26c97a"></div><span style="font-size:11px">< 3.0</span></div>
    <div style="margin-top:10px;font-size:10px;font-family:'Space Mono',monospace;color:#6b7a94;letter-spacing:1px;">${labelZones}</div>
    <div class="legend-row"><div style="width:20px;height:2px;border-top:2px dashed #e85d2f;margin:0 2px"></div><span style="font-size:11px">${rAlto}</span></div>
    <div class="legend-row"><div style="width:20px;height:2px;border-top:2px dashed #f0a500;margin:0 2px"></div><span style="font-size:11px">${rMedio}</span></div>
    <div class="legend-row"><div style="width:20px;height:2px;border-top:2px dashed #26c97a;margin:0 2px"></div><span style="font-size:11px">${rBajo}</span></div>`;
}

// ── SIMULATION LOGIC ──
let simMode = false;
let simType = 'terremoto'; // 'terremoto' | 'sismo'
let selectedLat = null;
let selectedLng = null;
let targetMarker = null;

function toggleSimulationPanel() {
  const panel = document.getElementById('simPanel');
  const header = document.querySelector('header');
  const statusPill = document.getElementById('statusPill');
  const simBtn = document.getElementById('btnSim');

  if (panel.style.display === 'flex') {
    // ── DEACTIVATE SIMULATION MODE ──
    panel.style.display = 'none';
    simMode = false;
    map.getContainer().style.cursor = '';
    
    // Clear simulation layers
    buildingLayer.clearLayers();
    targetLayer.clearLayers();
    targetMarker = null;
    selectedLat = null;
    selectedLng = null;
    
    // Restore Real Data
    allData = [...realEvents];
    
    // Restore risk zone circles
    zoneCircles.forEach(c => c.addTo(map));
    
    // Restore header and button visuals
    header.classList.remove('simulation-mode');
    statusPill.innerHTML = `<div class="dot"></div> ${getTranslation('statusPill')}`;
    
    if (simBtn) {
      simBtn.textContent = getTranslation('btnSim');
      simBtn.title = "Iniciar simulación sísmica";
    }
    
    // Disable action button
    const actionBtn = document.getElementById('btnStartSim');
    actionBtn.disabled = true;
    actionBtn.textContent = "🔥 Iniciar Simulación";
    
    stopSiren();
    closeResultPanel();
    rebindAllPopups();
    
    renderStats(allData);
    renderMagBars(allData);
    renderEvents(allData);
    renderZones(allData);
    renderMap(allData);
    updateLegendContent();
  } else {
    // ── ACTIVATE SIMULATION MODE ──
    map.closePopup();
    
    // Backup Real Data
    realEvents = [...allData];
    // Start simulation dashboard at empty/saved simulated data
    allData = [...simulatedEvents];
    
    panel.style.display = 'flex';
    simMode = true;
    selectSimType('terremoto');
    
    // Swap header styling
    header.classList.add('simulation-mode');
    statusPill.innerHTML = `<div class="dot"></div> MODO SIMULACIÓN`;
    
    if (simBtn) {
      simBtn.textContent = getTranslation('btnSimActive');
      simBtn.title = "Salir de la simulación y restaurar datos reales";
    }
    
    // ── CLEAN THE MAP OF REAL DATA ──
    if (heatLayer) { map.removeLayer(heatLayer); heatLayer = null; }
    pointLayer.clearLayers();
    targetLayer.clearLayers();
    
    // Hide risk zone circles in simulation mode
    zoneCircles.forEach(c => map.removeLayer(c));
    
    // Draw initial Buildings
    drawInitialBuildings();
    unbindAllPopups();

    // Render simulation stats
    renderStats(allData);
    renderMagBars(allData);
    renderEvents(allData);
    renderZones(allData);
    updateLegendContent();
  }
}

function selectSimType(type) {
  simType = type;
  document.getElementById('simTerremotoBtn').classList.toggle('active', type === 'terremoto');
  document.getElementById('simSismoBtn').classList.toggle('active', type === 'sismo');
  
  // Adjust Mag Slider
  const slider = document.getElementById('simMag');
  if (type === 'terremoto') {
    slider.min = '5.0';
    slider.max = '12.0';
    slider.value = '7.5';
  } else {
    slider.min = '0.1';
    slider.max = '5.0';
    slider.value = '3.5';
  }
  updateSimMagVal(slider.value);
  updateSimCursor();
}

function updateSimMagVal(val) {
  document.getElementById('simMagVal').textContent = parseFloat(val).toFixed(1);
}

function updateSimCursor() {
  if (simMode) {
    map.getContainer().style.cursor = 'crosshair';
    const infoKey = simType === 'terremoto' ? 'simActiveTerremoto' : 'simActiveSismo';
    document.getElementById('simInfoBox').textContent = getTranslation(infoKey);
  }
}

// Draw initial stable buildings
function drawInitialBuildings() {
  buildingLayer.clearLayers();
  BUILDINGS.forEach(b => {
    const buildingHtml = `
      <div class="building-marker-icon">
        <span class="building-emoji">${b.emoji}</span>
        <span class="building-status-dot safe"></span>
      </div>`;

    const bIcon = L.divIcon({
      html: buildingHtml,
      className: 'building-marker-pane',
      iconSize: [44, 44]
    });

    const marker = L.marker([b.lat, b.lng], { icon: bIcon }).addTo(buildingLayer);
    
    const tooltipText = `
      <div style="font-family:'Space Grotesk',sans-serif; line-height:1.4;">
        <strong style="font-size:12px; color:var(--accent2);">${b.name}</strong><br>
        • Altura: <b>${b.height} metros</b><br>
        • Pisos: <b>${b.floors} niveles</b><br>
        • Uso: <b>${b.use}</b><br>
        • Flujo/Habitantes: <b>${b.cap}</b>
      </div>`;
      
    // Tooltip opens automatically on hover
    marker.bindTooltip(tooltipText, { className: 'building-tooltip', direction: 'top', sticky: true });
    
    // Popup on click tells the current physical state
    marker.popupHtml = `
      <div style="font-family:'Space Grotesk',sans-serif; min-width: 165px;">
        <b style="font-size:13px; color: #26c97a;">${b.name}</b><br>
        Estado: <b>Estable 🟢</b><br>
        <span style="font-size:11px; color:var(--muted);">Estructura estable. Sin sismos registrados.</span>
      </div>`;
    marker.bindPopup(marker.popupHtml);

    marker.on('click', function(evt) {
      L.DomEvent.stopPropagation(evt); // STOP propagation to prevent placing epicenter marker
      marker.openPopup();
    });
  });
}

// Mark target epicenter coordinates
function markEpicenter(lat, lng) {
  selectedLat = lat;
  selectedLng = lng;

  targetLayer.clearLayers();
  
  // Custom Crosshair target icon
  const crosshairHtml = `
    <div style="position:relative; width:30px; height:30px; margin-left:-15px; margin-top:-15px; display:flex; justify-content:center; align-items:center;">
      <div style="position:absolute; width:2px; height:30px; background:#ff1a1a;"></div>
      <div style="position:absolute; width:30px; height:2px; background:#ff1a1a;"></div>
      <div style="width:14px; height:14px; border:2px solid #ff1a1a; border-radius:50%;"></div>
    </div>`;

  const targetIcon = L.divIcon({
    html: crosshairHtml,
    className: 'target-marker-pane',
    iconSize: [0, 0]
  });

  targetMarker = L.marker([lat, lng], { icon: targetIcon }).addTo(targetLayer);

  // Enable Simulation Trigger Button
  const startBtn = document.getElementById('btnStartSim');
  startBtn.disabled = false;
  startBtn.textContent = `🔥 Iniciar Simulación (${lat.toFixed(3)}, ${lng.toFixed(3)})`;
}

// ── LOCAL SIRENA.MP3 PLAYER WITH SYNTHETIC FALLBACK ──
const localAudio = new Audio('sirena.mp3');
localAudio.volume = 1.0;
let sirenTimeout = null;

// ── SYNTHETIC FALLBACK SIREN ──
let audioCtx = null;
let sirenOsc = null;
let sirenVolume = null;

function playSyntheticSiren() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  sirenOsc = audioCtx.createOscillator();
  sirenVolume = audioCtx.createGain();
  sirenOsc.connect(sirenVolume);
  sirenVolume.connect(audioCtx.destination);
  sirenOsc.type = 'sawtooth';
  const now = audioCtx.currentTime;
  sirenOsc.frequency.setValueAtTime(450, now);
  for (let i = 0; i < 15; i++) {
    sirenOsc.frequency.linearRampToValueAtTime(900, now + i + 0.5);
    sirenOsc.frequency.linearRampToValueAtTime(450, now + i + 1.0);
  }
  sirenVolume.gain.setValueAtTime(0.12, now);
  sirenVolume.gain.setValueAtTime(0.12, now + 14);
  sirenVolume.gain.linearRampToValueAtTime(0.0001, now + 15);
  sirenOsc.start(now);
  sirenOsc.stop(now + 15);
}

function stopSyntheticSiren() {
  if (sirenOsc) {
    try { sirenOsc.stop(); } catch(e) {}
    sirenOsc = null;
  }
}

function playSiren() {
  stopSiren(); // Reset if running
  
  // Try to play local sirena.mp3
  localAudio.currentTime = 0;
  localAudio.play()
    .then(() => {
      document.getElementById('btnStopSiren').style.display = 'block';
      sirenTimeout = setTimeout(() => {
        stopSiren();
      }, 15000);
    })
    .catch(err => {
      console.warn("sirena.mp3 not found or blocked. Playing synthetic fallback instead.");
      // Fallback
      playSyntheticSiren();
      document.getElementById('btnStopSiren').style.display = 'block';
      sirenTimeout = setTimeout(() => {
        stopSiren();
      }, 15000);
    });
}

function stopSiren() {
  try {
    localAudio.pause();
    localAudio.currentTime = 0;
  } catch(e) {}
  
  stopSyntheticSiren();
  
  if (sirenTimeout) {
    clearTimeout(sirenTimeout);
    sirenTimeout = null;
  }
  document.getElementById('btnStopSiren').style.display = 'none';
}

// Haversine formula to compute km distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ── EXECUTE DETONATION SISMICA ──
function executeSimulation() {
  if (selectedLat === null || selectedLng === null) return;

  const lat = selectedLat;
  const lng = selectedLng;
  const mag = parseFloat(document.getElementById('simMag').value);
  const depth = (5 + Math.random() * 60);

  // 1. Screen Shake Animation Intensity based on Magnitude
  const mapDiv = document.getElementById('map');
  mapDiv.classList.remove('shake-mild', 'shake-moderate', 'shake-violent');
  
  let shakeClass = 'shake-mild';
  let shakeDuration = 1500;
  if (mag >= 7.0) {
    shakeClass = 'shake-violent';
    shakeDuration = 5000;
  } else if (mag >= 4.0) {
    shakeClass = 'shake-moderate';
    shakeDuration = 3000;
  }
  
  mapDiv.classList.add(shakeClass);
  setTimeout(() => {
    mapDiv.classList.remove(shakeClass);
  }, shakeDuration);

  // 2. Evacuation Siren audio play for Terremoto (M >= 5.0)
  if (mag >= 5.0) {
    playSiren();
  }

  // Shockwave Animation on map via Custom Leaflet Marker
  const waveClass = mag >= 5.0 ? 'terremoto' : 'sismo';
  const htmlContent = `
    <div class="shockwave-marker">
      <div class="ripple-wave ${waveClass}"></div>
      <div class="ripple-wave ${waveClass} wave-2"></div>
      <div class="ripple-wave ${waveClass} wave-3"></div>
    </div>`;
  
  const customIcon = L.divIcon({
    html: htmlContent,
    className: 'shockwave-pane',
    iconSize: [0, 0]
  });

  const animMarker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
  setTimeout(() => {
    map.removeLayer(animMarker);
  }, 3500);

  // 3. Assess damage of the 12 Santa Cruz buildings
  buildingLayer.clearLayers();
  let collapsedCount = 0;
  let damagedCount = 0;
  let safeCount = 0;

  BUILDINGS.forEach(b => {
    const dist = calculateDistance(lat, lng, b.lat, b.lng);
    let status = 'safe'; // 'safe' | 'damaged' | 'collapsed'
    let statusText = '';
    
    // Scale building impact threshold based on magnitude
    const collapseDist = (mag - 4.5) * 8; // M=7 -> ~20km, M=10 -> ~44km
    const damageDist = (mag - 3.5) * 15;   // M=7 -> ~52km, M=5 -> ~22km

    if (mag >= 5.0) {
      if (dist < collapseDist) {
        status = 'collapsed';
        collapsedCount++;
      } else if (dist < damageDist) {
        status = 'damaged';
        damagedCount++;
      } else {
        status = 'safe';
        safeCount++;
      }
    } else {
      if (dist < damageDist * 0.5) {
        status = 'damaged';
        damagedCount++;
      } else {
        status = 'safe';
        safeCount++;
      }
    }

    let statusColor = status === 'safe' ? '#26c97a' : status === 'damaged' ? '#f0a500' : '#e85d2f';
    let stateLabel = '';
    
    if (status === 'safe') {
      stateLabel = currentLang === 'es' ? 'Estable 🟢' : 'Stable 🟢';
      statusText = currentLang === 'es' 
        ? 'Estructura estable. Sin daños reportados.' 
        : 'Stable structure. No damage reported.';
    } else if (status === 'damaged') {
      stateLabel = currentLang === 'es' ? 'Dañado 🟡' : 'Damaged 🟡';
      statusText = currentLang === 'es' 
        ? 'Grietas severas y fisuras detectadas. Evacuar preventivamente.' 
        : 'Severe cracks detected. Evacuate preventively.';
    } else {
      stateLabel = currentLang === 'es' ? 'Derrumbado 🔴' : 'Collapsed 🔴';
      statusText = currentLang === 'es' 
        ? 'Daño estructural crítico. Derrumbe parcial o total.' 
        : 'Critical structural damage. Partial or complete collapse.';
    }

    const buildingHtml = `
      <div class="building-marker-icon">
        <span class="building-emoji">${b.emoji}</span>
        <span class="building-status-dot ${status}"></span>
      </div>`;

    const bIcon = L.divIcon({
      html: buildingHtml,
      className: 'building-marker-pane',
      iconSize: [44, 44]
    });

    const marker = L.marker([b.lat, b.lng], { icon: bIcon }).addTo(buildingLayer);
    
    const tooltipText = `
      <div style="font-family:'Space Grotesk',sans-serif; line-height:1.4;">
        <strong style="font-size:12px; color:var(--accent2);">${b.name}</strong><br>
        • Altura: <b>${b.height} metros</b><br>
        • Pisos: <b>${b.floors} niveles</b><br>
        • Uso: <b>${b.use}</b><br>
        • Flujo/Habitantes: <b>${b.cap}</b>
      </div>`;

    marker.bindTooltip(tooltipText, { className: 'building-tooltip', direction: 'top', sticky: true });
    
    marker.popupHtml = `
        <div style="font-family:'Space Grotesk',sans-serif; min-width: 180px;">
          <b style="font-size:14px; color:${statusColor}">${b.name}</b><br>
          Distancia epicentro: <b>${dist.toFixed(1)} km</b><br>
          Estado: <b style="color:${statusColor}">${stateLabel}</b><br>
          <p style="font-size:11px; color:var(--muted); margin-top:6px;">${statusText}</p>
        </div>`;
    marker.bindPopup(marker.popupHtml);

    marker.on('click', function(evt) {
      L.DomEvent.stopPropagation(evt); // STOP propagation to prevent placing epicenter marker
      marker.openPopup();
    });
  });

  // Find nearest province zone
  let nearestZone = null;
  let minDistance = Infinity;
  ZONES.forEach(z => {
    const dist = calculateDistance(lat, lng, z.lat, z.lng);
    if (dist < minDistance) {
      minDistance = dist;
      nearestZone = z;
    }
  });

  // 4. Estimate fatalities and injuries based on Census population (approx. 2 million in Andres Ibañez metro area)
  let fatalities = 0;
  let injuries = 0;

  if (mag >= 5.0) {
    const distCityCenter = calculateDistance(lat, lng, -17.78629, -63.18117); // Andres Ibañez center
    const destructionRadius = (mag - 4.5) * 12; // M=7 -> ~30km, M=10 -> ~66km
    
    if (distCityCenter < destructionRadius) {
      const affectedRatio = Math.max(0, 1 - (distCityCenter / destructionRadius));
      const deathRate = Math.pow(10, mag - 10) * 0.04; 
      fatalities = Math.round(2033000 * affectedRatio * deathRate * (Math.random() * 0.4 + 0.8));
      injuries = Math.round(fatalities * (3.5 + Math.random() * 1.5));
    }
  }

  // Estimate impact text
  let impactText = '';
  if (mag >= 5.0) {
    if (minDistance < 60) {
      impactText = `${getTranslation('impactTerremotoHigh')} (${nearestZone.name})`;
    } else {
      impactText = `${getTranslation('impactTerremotoMedium')} (${nearestZone.name})`;
    }
  } else {
    impactText = getTranslation('impactSismo');
  }

  // Create simulated event object
  const newEvent = {
    lat: lat,
    lng: lng,
    depth: depth,
    mag: mag,
    place: `Simulación: ${minDistance.toFixed(0)} km de ${nearestZone.name}`,
    time: new Date().toLocaleDateString(currentLang === 'es' ? 'es-BO' : 'en-US'),
  };

  // Add to simulated dataset
  allData.unshift(newEvent);
  simulatedEvents = [...allData];

  // Re-render UI dashboard
  renderStats(allData);
  renderMagBars(allData);
  renderEvents(allData);
  renderZones(allData);
  updateLegendContent();

  // Focus camera to shockwave
  map.flyTo([lat, lng], 8, { duration: 1.2 });

  // Custom casualties report string
  let casualtiesString = '';
  if (mag >= 5.0) {
    casualtiesString = currentLang === 'es'
      ? `<br>💀 <b>Bajas Estimadas (Censo SCZ):</b> <span style="color:#ff1a1a;font-weight:700;">${fatalities.toLocaleString()} Fallecidos</span>, <span style="color:#f0a500;font-weight:700;">${injuries.toLocaleString()} Heridos</span>`
      : `<br>💀 <b>Estimated Casualties (Census SCZ):</b> <span style="color:#ff1a1a;font-weight:700;">${fatalities.toLocaleString()} Deaths</span>, <span style="color:#f0a500;font-weight:700;">${injuries.toLocaleString()} Injured</span>`;
  }

  // Custom buildings report string
  const reportBuildings = currentLang === 'es' 
    ? `<br>🏢 <b>Edificios SCZ:</b> <span style="color:#e85d2f;font-weight:700;">${collapsedCount} derrumbados</span>, <span style="color:#f0a500;font-weight:700;">${damagedCount} dañados</span>`
    : `<br>🏢 <b>SCZ Buildings:</b> <span style="color:#e85d2f;font-weight:700;">${collapsedCount} collapsed</span>, <span style="color:#f0a500;font-weight:700;">${damagedCount} damaged</span>`;

  // 5. Open the Persistent Results Panel (replacing autohide toasts)
  const resultPanel = document.getElementById('simResultPanel');
  const resultBody = document.getElementById('simResultBody');

  const alertTitle = getTranslation('simAlertTitle');
  const alertDetail = getTranslation('simDetail')
    .replace('{mag}', mag.toFixed(1))
    .replace('{depth}', depth.toFixed(0))
    .replace('{place}', newEvent.place)
    .replace('{impact}', impactText) + reportBuildings + casualtiesString;

  if (resultPanel && resultBody) {
    resultBody.innerHTML = `
      <div style="font-family:'Space Grotesk',sans-serif;">
        <strong style="color:var(--accent); font-size:13px;">${alertTitle}</strong><br>
        <p style="margin-top:6px; font-size:12px; color:var(--text);">${alertDetail}</p>
      </div>`;
    resultPanel.style.display = 'flex';
  }
}

function closeResultPanel() {
  const resultPanel = document.getElementById('simResultPanel');
  if (resultPanel) {
    resultPanel.style.display = 'none';
  }
}

// Map Click Listener
map.on('click', function(e) {
  if (!simMode) return;
  markEpicenter(e.latlng.lat, e.latlng.lng);
});


// ── INIT ──
document.body.className = 'light-theme';
document.getElementById('themeToggleBtn').textContent = '☀️';
document.getElementById('endDate').value = new Date().toISOString().slice(0,10);
document.getElementById('minMag').addEventListener('input', e => {
  document.getElementById('magVal').textContent = parseFloat(e.target.value).toFixed(1);
});
document.getElementById('viewMode').addEventListener('change', () => renderMap(allData));
loadData();

// ── DYNAMIC SEISMOGRAPH WAVEFORM DRAWING ──
const seismographCanvas = document.getElementById('seismographCanvas');
const sCtx = seismographCanvas.getContext('2d');
const seismoPoints = [];
const seismoMaxPoints = 120;

function drawSeismograph() {
  sCtx.clearRect(0, 0, seismographCanvas.width, seismographCanvas.height);
  
  // Draw grid lines
  sCtx.strokeStyle = currentTheme === 'light' ? '#e2e8f0' : '#1e293b';
  sCtx.lineWidth = 0.5;
  const gridSize = 10;
  for (let x = 0; x < seismographCanvas.width; x += gridSize) {
    sCtx.beginPath();
    sCtx.moveTo(x, 0);
    sCtx.lineTo(x, seismographCanvas.height);
    sCtx.stroke();
  }
  for (let y = 0; y < seismographCanvas.height; y += gridSize) {
    sCtx.beginPath();
    sCtx.moveTo(0, y);
    sCtx.lineTo(seismographCanvas.width, y);
    sCtx.stroke();
  }
  
  // Generate random tremor noise base
  let noise = (Math.random() - 0.5) * 2;
  
  // Spike seismograph wave dynamically if map is shaking!
  const mapDiv = document.getElementById('map');
  if (mapDiv.classList.contains('shake-violent')) {
    noise = (Math.random() - 0.5) * 32;
  } else if (mapDiv.classList.contains('shake-moderate')) {
    noise = (Math.random() - 0.5) * 16;
  } else if (mapDiv.classList.contains('shake-mild')) {
    noise = (Math.random() - 0.5) * 6;
  }
  
  seismoPoints.push(seismographCanvas.height / 2 + noise);
  if (seismoPoints.length > seismoMaxPoints) {
    seismoPoints.shift();
  }
  
  // Draw continuous red waveform line
  sCtx.strokeStyle = '#ef4444'; // Seismograph red ink
  sCtx.lineWidth = 1.5;
  sCtx.beginPath();
  for (let i = 0; i < seismoPoints.length; i++) {
    const x = (seismographCanvas.width / seismoMaxPoints) * i;
    const y = seismoPoints[i];
    if (i === 0) {
      sCtx.moveTo(x, y);
    } else {
      sCtx.lineTo(x, y);
    }
  }
  sCtx.stroke();
  
  requestAnimationFrame(drawSeismograph);
}

// Start Seismograph rendering loop
drawSeismograph();
