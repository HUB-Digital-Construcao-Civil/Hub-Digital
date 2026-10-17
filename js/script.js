// ===== CARROSSEL DUPLO ANTES E DEPOIS =====
let baCurrentSlide = 0;
const baSlides = document.querySelectorAll(".ba-slide");
const baTrack = document.getElementById("baTrack");
const baDots = document.getElementById("baDots");

function initBaCarousel() {
  if (baSlides.length === 0) return;

  baDots.innerHTML = "";
  baSlides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.addEventListener("click", () => goToBaSlide(index));
    baDots.appendChild(dot);
  });

  updateBaCarousel();
}

function updateBaCarousel() {
  const totalSlides = baSlides.length;
  if (totalSlides === 0) return;

  baTrack.style.transform = `translateX(-${baCurrentSlide * 100}%)`;

  document.querySelectorAll(".ba-dots .dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === baCurrentSlide);
  });
}

function moveBaCarousel(direction) {
  const totalSlides = baSlides.length;
  if (totalSlides === 0) return;
  baCurrentSlide =
    (baCurrentSlide + direction + totalSlides) % totalSlides;
  updateBaCarousel();
}

function goToBaSlide(index) {
  if (index < 0 || index >= baSlides.length) return;
  baCurrentSlide = index;
  updateBaCarousel();
}

document.addEventListener("DOMContentLoaded", function () {
  initBaCarousel();
});

let baTouchStartX = 0;
let baTouchEndX = 0;

document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("baTrack");
  if (track) {
    track.addEventListener(
      "touchstart",
      function (e) {
        baTouchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    track.addEventListener(
      "touchend",
      function (e) {
        baTouchEndX = e.changedTouches[0].screenX;
        const diff = baTouchStartX - baTouchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            moveBaCarousel(1);
          } else {
            moveBaCarousel(-1);
          }
        }
      },
      { passive: true },
    );
  }
});

// ===== BANCO DE PROJETOS (dados reais das fichas) =====
const PROJETOS_DATA = [
  {
    "titulo": "Cerimonial Monte Sião",
    "categoria": "Construção",
    "profissionalId": "1",
    "duracao": "5 meses",
    "data": "agosto de 2023",
    "local": "",
    "status": "finalizado",
    "descricao": "Construção do Cerimonial Monte Sião, da estrutura ao acabamento.",
    "imagens": [
"assets/img/obras/ronaldo-cerimonial-monte-siao/01.jpg",
"assets/img/obras/ronaldo-cerimonial-monte-siao/02.jpg",
"assets/img/obras/ronaldo-cerimonial-monte-siao/03.jpg",
"assets/img/obras/ronaldo-cerimonial-monte-siao/04.jpg",
"assets/img/obras/ronaldo-cerimonial-monte-siao/05.jpg"
    ]
  },
  {
    "titulo": "Reforma Casa de Deca",
    "categoria": "Reforma",
    "profissionalId": "1",
    "duracao": "2 meses",
    "data": "setembro de 2024",
    "local": "",
    "status": "finalizado",
    "descricao": "Reforma com telhado, parte elétrica, forro e pintura.",
    "imagens": [
"assets/img/obras/ronaldo-reforma-casa-de-deca/01.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/02.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/03.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/04.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/05.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/06.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/07.jpg",
"assets/img/obras/ronaldo-reforma-casa-de-deca/08.jpg"
    ]
  },
  {
    "titulo": "Prédio do Adeni",
    "categoria": "Acabamento",
    "profissionalId": "1",
    "duracao": "6 meses",
    "data": "fevereiro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Acabamento e pintura do prédio.",
    "imagens": [
"assets/img/obras/ronaldo-acabamento-predio-adeni/01.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/02.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/03.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/04.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/05.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/06.jpg",
"assets/img/obras/ronaldo-acabamento-predio-adeni/07.jpg"
    ]
  },
  {
    "titulo": "Revitalização de Fachada",
    "categoria": "Reforma",
    "profissionalId": "1",
    "duracao": "",
    "data": "",
    "local": "",
    "status": "finalizado",
    "descricao": "Revitalização de fachada residencial.",
    "imagens": [
"assets/img/obras/ronaldo-revitalizacao-de-faixada/01.jpg",
"assets/img/obras/ronaldo-revitalizacao-de-faixada/02.jpg",
"assets/img/obras/ronaldo-revitalizacao-de-faixada/03.jpg",
"assets/img/obras/ronaldo-revitalizacao-de-faixada/04.jpg",
"assets/img/obras/ronaldo-revitalizacao-de-faixada/05.jpg",
"assets/img/obras/ronaldo-revitalizacao-de-faixada/06.jpg"
    ]
  },
  {
    "titulo": "Sítio Deus Reina",
    "categoria": "Área de lazer",
    "profissionalId": "1",
    "duracao": "Em andamento",
    "data": "início em julho de 2026",
    "local": "",
    "status": "andamento",
    "descricao": "Área de lazer do Sítio Deus Reina, com estrutura de telhado. Obra em andamento.",
    "imagens": [
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/01.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/02.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/03.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/04.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/05.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/06.jpg",
"assets/img/obras/ronaldo-telhado-sitio-deus-reina/07.jpg"
    ]
  },
  {
    "titulo": "Acabamento de Cozinha",
    "categoria": "Revestimento",
    "profissionalId": "2",
    "duracao": "3 semanas",
    "data": "julho de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Obra residencial: construção e revestimento da cozinha.",
    "imagens": [
"assets/img/obras/leonardo-acabamento-de-cozinha/01.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/02.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/03.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/04.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/05.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/06.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/07.jpg",
"assets/img/obras/leonardo-acabamento-de-cozinha/08.jpg"
    ]
  },
  {
    "titulo": "Troca de Forro PVC",
    "categoria": "Forro",
    "profissionalId": "2",
    "duracao": "2 dias",
    "data": "janeiro de 2025",
    "local": "",
    "status": "finalizado",
    "descricao": "Retirada do forro antigo, manutenção da estrutura e instalação de forro PVC na sala.",
    "imagens": [
"assets/img/obras/leonardo-instalacao-forro-pvc/01.jpg",
"assets/img/obras/leonardo-instalacao-forro-pvc/02.jpg",
"assets/img/obras/leonardo-instalacao-forro-pvc/03.jpg",
"assets/img/obras/leonardo-instalacao-forro-pvc/04.jpg",
"assets/img/obras/leonardo-instalacao-forro-pvc/05.jpg"
    ]
  },
  {
    "titulo": "Casa de Sítio",
    "categoria": "Construção",
    "profissionalId": "2",
    "duracao": "2 meses",
    "data": "janeiro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Reboco e contrapiso, cobertura de telhado e pintura.",
    "imagens": [
"assets/img/obras/leonardo-casa-de-sitio/01.jpg",
"assets/img/obras/leonardo-casa-de-sitio/02.jpg",
"assets/img/obras/leonardo-casa-de-sitio/03.jpg",
"assets/img/obras/leonardo-casa-de-sitio/04.jpg",
"assets/img/obras/leonardo-casa-de-sitio/05.jpg",
"assets/img/obras/leonardo-casa-de-sitio/06.jpg",
"assets/img/obras/leonardo-casa-de-sitio/07.jpg"
    ]
  },
  {
    "titulo": "Guarda-roupa com Revestimento Cerâmico",
    "categoria": "Acabamento",
    "profissionalId": "2",
    "duracao": "1 semana",
    "data": "maio de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Construção e acabamento de guarda-roupa.",
    "imagens": [
"assets/img/obras/leonardo-guarda-roupas-feito-com-revestimento-ceramico/01.jpg",
"assets/img/obras/leonardo-guarda-roupas-feito-com-revestimento-ceramico/02.jpg",
"assets/img/obras/leonardo-guarda-roupas-feito-com-revestimento-ceramico/03.jpg",
"assets/img/obras/leonardo-guarda-roupas-feito-com-revestimento-ceramico/04.jpg",
"assets/img/obras/leonardo-guarda-roupas-feito-com-revestimento-ceramico/05.jpg"
    ]
  },
  {
    "titulo": "Instalação Hidráulica de Caixa d'Água",
    "categoria": "Hidráulica",
    "profissionalId": "2",
    "duracao": "",
    "data": "",
    "local": "",
    "status": "finalizado",
    "descricao": "Instalação hidráulica de caixa d'água.",
    "imagens": [
"assets/img/obras/leonardo-instalacao-hidraulica-caixa-dagua/01.jpg",
"assets/img/obras/leonardo-instalacao-hidraulica-caixa-dagua/02.jpg",
"assets/img/obras/leonardo-instalacao-hidraulica-caixa-dagua/03.jpg",
"assets/img/obras/leonardo-instalacao-hidraulica-caixa-dagua/04.jpg",
"assets/img/obras/leonardo-instalacao-hidraulica-caixa-dagua/05.jpg"
    ]
  },
  {
    "titulo": "Assentamento de Cerâmica em Residência",
    "categoria": "Revestimento",
    "profissionalId": "3",
    "duracao": "2 semanas",
    "data": "agosto de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Assentamento de cerâmica em residência.",
    "imagens": [
"assets/img/obras/ernandes-acentamento-de-piso/01.jpg",
"assets/img/obras/ernandes-acentamento-de-piso/02.jpg",
"assets/img/obras/ernandes-acentamento-de-piso/03.jpg",
"assets/img/obras/ernandes-acentamento-de-piso/04.jpg"
    ]
  },
  {
    "titulo": "Telhado em Fazenda",
    "categoria": "Telhado",
    "profissionalId": "3",
    "duracao": "1 semana",
    "data": "setembro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Execução de telhado em fazenda.",
    "imagens": [
"assets/img/obras/ernandes-telhados/01.jpg",
"assets/img/obras/ernandes-telhados/02.jpg",
"assets/img/obras/ernandes-telhados/03.jpg",
"assets/img/obras/ernandes-telhados/04.jpg",
"assets/img/obras/ernandes-telhados/05.jpg"
    ]
  },
  {
    "titulo": "Igreja Assembleia: Revestimento de Escada",
    "categoria": "Reforma",
    "profissionalId": "3",
    "duracao": "1 semana",
    "data": "maio de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Revestimento de escada e reforma em geral.",
    "imagens": [
"assets/img/obras/ernandes-revestimento-da-escada/01.jpg",
"assets/img/obras/ernandes-revestimento-da-escada/02.jpg",
"assets/img/obras/ernandes-revestimento-da-escada/03.jpg",
"assets/img/obras/ernandes-revestimento-da-escada/04.jpg",
"assets/img/obras/ernandes-revestimento-da-escada/05.jpg"
    ]
  },
  {
    "titulo": "Reformas e Serviços Diversos",
    "categoria": "Reforma",
    "profissionalId": "3",
    "duracao": "",
    "data": "",
    "local": "",
    "status": "finalizado",
    "descricao": "Serviços diversos de reforma.",
    "imagens": [
"assets/img/obras/ernandes-reforma/01.jpg",
"assets/img/obras/ernandes-reforma/02.jpg",
"assets/img/obras/ernandes-reforma/03.jpg",
"assets/img/obras/ernandes-reforma/04.jpg",
"assets/img/obras/ernandes-reforma/05.jpg",
"assets/img/obras/ernandes-reforma/06.jpg",
"assets/img/obras/ernandes-reforma/07.jpg"
    ]
  },
  {
    "titulo": "Cobertura Metálica: Caixa Econômica Federal",
    "categoria": "Cobertura metálica",
    "profissionalId": "4",
    "duracao": "5 dias",
    "data": "março de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Execução de cobertura metálica.",
    "imagens": [
"assets/img/obras/aerico-cobertura-banco-caixa/01.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/02.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/03.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/04.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/05.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/06.jpg",
"assets/img/obras/aerico-cobertura-banco-caixa/07.jpg"
    ]
  },
  {
    "titulo": "Cobertura Metálica: Loja O Boticário",
    "categoria": "Cobertura metálica",
    "profissionalId": "4",
    "duracao": "Em andamento",
    "data": "",
    "local": "",
    "status": "andamento",
    "descricao": "Cobertura metálica em loja. Obra em andamento.",
    "imagens": [
"assets/img/obras/aerico-lojao-boticario/01.jpg",
"assets/img/obras/aerico-lojao-boticario/02.jpg",
"assets/img/obras/aerico-lojao-boticario/03.jpg",
"assets/img/obras/aerico-lojao-boticario/04.jpg",
"assets/img/obras/aerico-lojao-boticario/05.jpg",
"assets/img/obras/aerico-lojao-boticario/06.jpg"
    ]
  },
  {
    "titulo": "Garagem do Salutaris",
    "categoria": "Estrutura metálica",
    "profissionalId": "4",
    "duracao": "8 dias",
    "data": "setembro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Fechamento, isolamento, telhado e mezanino.",
    "imagens": [
"assets/img/obras/aerico-servicos-antiga-garagem-salutarys/01.jpg",
"assets/img/obras/aerico-servicos-antiga-garagem-salutarys/02.jpg",
"assets/img/obras/aerico-servicos-antiga-garagem-salutarys/03.jpg",
"assets/img/obras/aerico-servicos-antiga-garagem-salutarys/04.jpg",
"assets/img/obras/aerico-servicos-antiga-garagem-salutarys/05.jpg"
    ]
  },
  {
    "titulo": "Passarela 7 de Setembro",
    "categoria": "Estrutura metálica",
    "profissionalId": "4",
    "duracao": "7 dias",
    "data": "julho de 2023",
    "local": "",
    "status": "finalizado",
    "descricao": "Estrutura de apoio para passarela e montagem de guarda-corpo.",
    "imagens": [
"assets/img/obras/aerico-passarela-7-setembro/01.jpg",
"assets/img/obras/aerico-passarela-7-setembro/02.jpg",
"assets/img/obras/aerico-passarela-7-setembro/03.jpg",
"assets/img/obras/aerico-passarela-7-setembro/04.jpg",
"assets/img/obras/aerico-passarela-7-setembro/05.jpg"
    ]
  },
  {
    "titulo": "Manutenção Elétrica Residencial",
    "categoria": "Elétrica",
    "profissionalId": "5",
    "duracao": "2 dias",
    "data": "dezembro de 2025",
    "local": "",
    "status": "finalizado",
    "descricao": "Mudança de fiação em residência.",
    "imagens": [
"assets/img/obras/adiel-manutencao-eletrica-residencial/01.jpg",
"assets/img/obras/adiel-manutencao-eletrica-residencial/02.jpg",
"assets/img/obras/adiel-manutencao-eletrica-residencial/03.jpg",
"assets/img/obras/adiel-manutencao-eletrica-residencial/04.jpg",
"assets/img/obras/adiel-manutencao-eletrica-residencial/05.jpg"
    ]
  },
  {
    "titulo": "Manutenção e Pintura da USF",
    "categoria": "Pintura",
    "profissionalId": "5",
    "duracao": "15 dias",
    "data": "janeiro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Preparação e pintura de Unidade de Saúde da Família.",
    "imagens": [
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/01.jpg",
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/02.jpg",
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/03.jpg",
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/04.jpg",
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/05.jpg",
"assets/img/obras/adiel-manutencao-e-pintura-posto-saude/06.jpg"
    ]
  },
  {
    "titulo": "Residência em Andamento",
    "categoria": "Construção",
    "profissionalId": "5",
    "duracao": "2 meses",
    "data": "maio de 2026",
    "local": "",
    "status": "andamento",
    "descricao": "Execução de sistema hidrossanitário e escada de concreto armado. Obra em andamento.",
    "imagens": [
"assets/img/obras/adiel-residencia-em-andamento/01.jpg",
"assets/img/obras/adiel-residencia-em-andamento/02.jpg",
"assets/img/obras/adiel-residencia-em-andamento/03.jpg",
"assets/img/obras/adiel-residencia-em-andamento/04.jpg",
"assets/img/obras/adiel-residencia-em-andamento/05.jpg",
"assets/img/obras/adiel-residencia-em-andamento/06.jpg",
"assets/img/obras/adiel-residencia-em-andamento/07.jpg"
    ]
  },
  {
    "titulo": "Troca de Forro em Ponto Comercial",
    "categoria": "Forro",
    "profissionalId": "5",
    "duracao": "3 dias",
    "data": "junho de 2025",
    "local": "",
    "status": "finalizado",
    "descricao": "Troca de forro em ponto comercial.",
    "imagens": [
"assets/img/obras/adiel-troca-de-forro-pvc/01.jpg",
"assets/img/obras/adiel-troca-de-forro-pvc/02.jpg",
"assets/img/obras/adiel-troca-de-forro-pvc/03.jpg",
"assets/img/obras/adiel-troca-de-forro-pvc/04.jpg"
    ]
  },
  {
    "titulo": "Telhado: Região do Pau de Colher",
    "categoria": "Telhado",
    "profissionalId": "6",
    "duracao": "40 dias",
    "data": "janeiro de 2026",
    "local": "Pau de Colher, Poções - BA",
    "status": "finalizado",
    "descricao": "Fase 1: colocação das terças. Fase 2: colocação dos caibros.",
    "imagens": [
"assets/img/obras/vagner-regiao-pau-de-colher/01.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/02.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/03.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/04.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/05.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/06.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/07.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/08.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/09.jpg",
"assets/img/obras/vagner-regiao-pau-de-colher/10.jpg"
    ]
  },
  {
    "titulo": "Telhado: Poçõezinho",
    "categoria": "Telhado",
    "profissionalId": "6",
    "duracao": "1 dia",
    "data": "março de 2026",
    "local": "Poçõezinho",
    "status": "finalizado",
    "descricao": "Instalação de rufo na chaminé da churrasqueira para garantir a estanqueidade do telhado.",
    "imagens": [
"assets/img/obras/vagner-pocoezinho/01.jpg",
"assets/img/obras/vagner-pocoezinho/02.jpg",
"assets/img/obras/vagner-pocoezinho/03.jpg",
"assets/img/obras/vagner-pocoezinho/04.jpg"
    ]
  },
  {
    "titulo": "Telhado: Região do Ribeirão do Peixe",
    "categoria": "Telhado",
    "profissionalId": "6",
    "duracao": "3 semanas",
    "data": "maio de 2026",
    "local": "Ribeirão do Peixe",
    "status": "finalizado",
    "descricao": "Execução de telhado, estrutura de madeira e cobertura.",
    "imagens": [
"assets/img/obras/vagner-regiao-ribeirao-do-peixe/01.jpg",
"assets/img/obras/vagner-regiao-ribeirao-do-peixe/02.jpg",
"assets/img/obras/vagner-regiao-ribeirao-do-peixe/03.jpg",
"assets/img/obras/vagner-regiao-ribeirao-do-peixe/04.jpg"
    ]
  },
  {
    "titulo": "Telhado: Lagoa dos Patos",
    "categoria": "Telhado",
    "profissionalId": "6",
    "duracao": "2 semanas",
    "data": "agosto de 2026",
    "local": "Lagoa dos Patos, Bom Jesus da Serra - BA",
    "status": "finalizado",
    "descricao": "Execução de estruturas de madeira e cobertura.",
    "imagens": [
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/01.jpg",
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/02.jpg",
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/03.jpg",
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/04.jpg",
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/05.jpg",
"assets/img/obras/vagner-regiao-lagoa-dos-patos-bom-jesus-da-serra-ba/06.jpg"
    ]
  },
  {
    "titulo": "Ar-condicionado: Colégio Roberto Santos",
    "categoria": "Ar-condicionado",
    "profissionalId": "7",
    "duracao": "1 mês e meio",
    "data": "julho de 2025",
    "local": "",
    "status": "finalizado",
    "descricao": "Instalação de ar-condicionado.",
    "imagens": [
"assets/img/obras/ibraim-instalacoes-colegio-roberto-santos/01.jpg",
"assets/img/obras/ibraim-instalacoes-colegio-roberto-santos/02.jpg",
"assets/img/obras/ibraim-instalacoes-colegio-roberto-santos/03.jpg",
"assets/img/obras/ibraim-instalacoes-colegio-roberto-santos/04.jpg",
"assets/img/obras/ibraim-instalacoes-colegio-roberto-santos/05.jpg"
    ]
  },
  {
    "titulo": "Ar-condicionado: Assentamento Caldeirão",
    "categoria": "Ar-condicionado",
    "profissionalId": "7",
    "duracao": "1 mês",
    "data": "agosto de 2026",
    "local": "Assentamento Caldeirão",
    "status": "finalizado",
    "descricao": "Instalação de ar-condicionado.",
    "imagens": [
"assets/img/obras/ibraim-instalacao-assentamento-caldeirao/01.jpg",
"assets/img/obras/ibraim-instalacao-assentamento-caldeirao/02.jpg",
"assets/img/obras/ibraim-instalacao-assentamento-caldeirao/03.jpg",
"assets/img/obras/ibraim-instalacao-assentamento-caldeirao/04.jpg",
"assets/img/obras/ibraim-instalacao-assentamento-caldeirao/05.jpg"
    ]
  },
  {
    "titulo": "Ar-condicionado: Fórum de Poções",
    "categoria": "Ar-condicionado",
    "profissionalId": "7",
    "duracao": "1 mês",
    "data": "setembro de 2020",
    "local": "Poções - BA",
    "status": "finalizado",
    "descricao": "Instalação e manutenção de ar-condicionado.",
    "imagens": [
"assets/img/obras/ibraim-instalacao-e-manutencao-forum/01.jpg",
"assets/img/obras/ibraim-instalacao-e-manutencao-forum/02.jpg",
"assets/img/obras/ibraim-instalacao-e-manutencao-forum/03.jpg",
"assets/img/obras/ibraim-instalacao-e-manutencao-forum/04.jpg"
    ]
  },
  {
    "titulo": "Elétrica e Ar-condicionado: Caixa Econômica Federal",
    "categoria": "Elétrica e climatização",
    "profissionalId": "7",
    "duracao": "1 mês",
    "data": "abril de 2018",
    "local": "",
    "status": "finalizado",
    "descricao": "Instalação elétrica e de ar-condicionado.",
    "imagens": [
"assets/img/obras/ibraim-manutencao-caixa-economica/01.jpg",
"assets/img/obras/ibraim-manutencao-caixa-economica/02.jpg",
"assets/img/obras/ibraim-manutencao-caixa-economica/03.jpg",
"assets/img/obras/ibraim-manutencao-caixa-economica/04.jpg",
"assets/img/obras/ibraim-manutencao-caixa-economica/05.jpg"
    ]
  },
  {
    "titulo": "Farmácia Ultra Econômica",
    "categoria": "Pintura",
    "profissionalId": "8",
    "duracao": "4 dias",
    "data": "maio de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Aplicação de massa corrida e pintura interna.",
    "imagens": [
"assets/img/obras/sandro-sala-farmacia/01.jpg",
"assets/img/obras/sandro-sala-farmacia/02.jpg",
"assets/img/obras/sandro-sala-farmacia/03.jpg",
"assets/img/obras/sandro-sala-farmacia/04.jpg",
"assets/img/obras/sandro-sala-farmacia/05.jpg"
    ]
  },
  {
    "titulo": "Reforma de Ponto Comercial",
    "categoria": "Pintura",
    "profissionalId": "8",
    "duracao": "4 dias",
    "data": "julho de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Reforma, pintura e texturas.",
    "imagens": [
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/01.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/02.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/03.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/04.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/05.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/06.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/07.jpg",
"assets/img/obras/sandro-reforma-pontos-comercias-pintura-de-portoes/08.jpg"
    ]
  },
  {
    "titulo": "Reforma Residencial",
    "categoria": "Pintura",
    "profissionalId": "8",
    "duracao": "10 dias",
    "data": "setembro de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Pintura de portões, forro, paredes e outras áreas.",
    "imagens": [
"assets/img/obras/sandro-reforma-residencial/01.jpg",
"assets/img/obras/sandro-reforma-residencial/02.jpg",
"assets/img/obras/sandro-reforma-residencial/03.jpg",
"assets/img/obras/sandro-reforma-residencial/04.jpg",
"assets/img/obras/sandro-reforma-residencial/05.jpg",
"assets/img/obras/sandro-reforma-residencial/06.jpg",
"assets/img/obras/sandro-reforma-residencial/07.jpg"
    ]
  },
  {
    "titulo": "Pintura do Colégio Estadual",
    "categoria": "Pintura",
    "profissionalId": "8",
    "duracao": "2 meses",
    "data": "agosto de 2026",
    "local": "",
    "status": "finalizado",
    "descricao": "Pintura do colégio.",
    "imagens": [
"assets/img/obras/sandro-pintura-colegio-estadual/01.jpg",
"assets/img/obras/sandro-pintura-colegio-estadual/02.jpg",
"assets/img/obras/sandro-pintura-colegio-estadual/03.jpg",
"assets/img/obras/sandro-pintura-colegio-estadual/04.jpg",
"assets/img/obras/sandro-pintura-colegio-estadual/05.jpg",
"assets/img/obras/sandro-pintura-colegio-estadual/06.jpg"
    ]
  },
  {
    "titulo": "Quadra Otávio Curvelo",
    "categoria": "Quadras",
    "profissionalId": "9",
    "duracao": "3 dias",
    "data": "2018",
    "local": "",
    "status": "finalizado",
    "descricao": "Repintura de quadra poliesportiva.",
    "imagens": [
"assets/img/obras/mateus-quadra-otavio-curvelo/01.jpg",
"assets/img/obras/mateus-quadra-otavio-curvelo/02.jpg",
"assets/img/obras/mateus-quadra-otavio-curvelo/03.jpg"
    ]
  },
  {
    "titulo": "Quadra da Lagoa da Serra",
    "categoria": "Quadras",
    "profissionalId": "9",
    "duracao": "5 dias",
    "data": "2019",
    "local": "",
    "status": "finalizado",
    "descricao": "Repintura de quadra poliesportiva.",
    "imagens": [
"assets/img/obras/mateus-quadra-regiao-lagoa-da-serra/01.jpg",
"assets/img/obras/mateus-quadra-regiao-lagoa-da-serra/02.jpg",
"assets/img/obras/mateus-quadra-regiao-lagoa-da-serra/03.jpg",
"assets/img/obras/mateus-quadra-regiao-lagoa-da-serra/04.jpg"
    ]
  },
  {
    "titulo": "Quadra Cônego Pithon",
    "categoria": "Quadras",
    "profissionalId": "9",
    "duracao": "3 dias",
    "data": "2023",
    "local": "",
    "status": "finalizado",
    "descricao": "Repintura de quadra poliesportiva.",
    "imagens": [
"assets/img/obras/mateus-quadra-conego-pithon/01.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/02.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/03.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/04.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/05.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/06.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/07.jpg",
"assets/img/obras/mateus-quadra-conego-pithon/08.jpg"
    ]
  },
  {
    "titulo": "Quadra Roçado Grande",
    "categoria": "Quadras",
    "profissionalId": "9",
    "duracao": "4 dias",
    "data": "2022",
    "local": "Roçado Grande, Poções - BA",
    "status": "finalizado",
    "descricao": "Repintura de quadra poliesportiva.",
    "imagens": [
"assets/img/obras/mateus-quadra-regiao-rocado-grande/01.jpg",
"assets/img/obras/mateus-quadra-regiao-rocado-grande/02.jpg",
"assets/img/obras/mateus-quadra-regiao-rocado-grande/03.jpg",
"assets/img/obras/mateus-quadra-regiao-rocado-grande/04.jpg"
    ]
  },
  {
    "titulo": "Divisória em Drywall: Mirante",
    "categoria": "Drywall",
    "profissionalId": "10",
    "duracao": "1 dia",
    "data": "setembro de 2026",
    "local": "Mirante - BA",
    "status": "finalizado",
    "descricao": "Montagem de estrutura metálica e chapeamento com gesso acartonado.",
    "imagens": [
"assets/img/obras/dario-divisoria-drywall-mirante-ba/01.jpg",
"assets/img/obras/dario-divisoria-drywall-mirante-ba/02.jpg",
"assets/img/obras/dario-divisoria-drywall-mirante-ba/03.jpg",
"assets/img/obras/dario-divisoria-drywall-mirante-ba/04.jpg"
    ]
  },
  {
    "titulo": "Forro em Supermercado, 2º Andar",
    "categoria": "Forro",
    "profissionalId": "10",
    "duracao": "4 dias",
    "data": "setembro de 2026",
    "local": "Poções - BA",
    "status": "finalizado",
    "descricao": "Serviço de instalação de forro.",
    "imagens": [
"assets/img/obras/dario-obra-mercadinho/01.jpg",
"assets/img/obras/dario-obra-mercadinho/02.jpg",
"assets/img/obras/dario-obra-mercadinho/03.jpg",
"assets/img/obras/dario-obra-mercadinho/04.jpg",
"assets/img/obras/dario-obra-mercadinho/05.jpg",
"assets/img/obras/dario-obra-mercadinho/06.jpg",
"assets/img/obras/dario-obra-mercadinho/07.jpg",
"assets/img/obras/dario-obra-mercadinho/08.jpg"
    ]
  },
  {
    "titulo": "Forro e Sancas: Bom Jesus da Serra",
    "categoria": "Forro e sancas",
    "profissionalId": "10",
    "duracao": "7 dias",
    "data": "julho de 2026",
    "local": "Bom Jesus da Serra - BA",
    "status": "finalizado",
    "descricao": "Instalação de forro e sancas.",
    "imagens": [
"assets/img/obras/dario-obra-bom-jesus-da-serra/01.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/02.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/03.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/04.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/05.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/06.jpg",
"assets/img/obras/dario-obra-bom-jesus-da-serra/07.jpg"
    ]
  },
  {
    "titulo": "Forro em Galpão: Mirante",
    "categoria": "Forro",
    "profissionalId": "10",
    "duracao": "23 dias",
    "data": "outubro de 2026",
    "local": "Mirante - BA",
    "status": "finalizado",
    "descricao": "Instalação de forro em galpão.",
    "imagens": [
"assets/img/obras/dario-obra-galpao-mirante-ba/01.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/02.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/03.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/04.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/05.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/06.jpg",
"assets/img/obras/dario-obra-galpao-mirante-ba/07.jpg"
    ]
  },
  {
    "titulo": "Modelos de Forro e Sancas",
    "categoria": "Modelos de referência",
    "profissionalId": "10",
    "duracao": "",
    "data": "",
    "local": "",
    "status": "modelos",
    "descricao": "Modelos de forros e sancas em gesso que o profissional executa. As imagens são apenas referências ilustrativas e não são de obras realizadas por ele.",
    "imagens": [
"assets/img/obras/dario-modelos-de-forro-e-sancas/01.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/02.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/03.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/04.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/05.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/06.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/07.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/08.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/09.jpg",
"assets/img/obras/dario-modelos-de-forro-e-sancas/10.jpg"
    ]
  }
];

// ===== ESTRUTURAS DERIVADAS AUTOMATICAMENTE (sem duplicar dados) =====
const projetosDetalhados = {};
const portfolioPorProfissional = {};

PROJETOS_DATA.forEach((p) => {
  projetosDetalhados[p.titulo] = {
    titulo: p.titulo,
    categoria: p.categoria,
    imagens: p.imagens,
    descricao: p.descricao,
    profissionalId: p.profissionalId,
    data: p.data || "",
    localizacao: p.local || "",
    duracao: p.duracao || "",
    status: p.status || "finalizado",
  };

  if (!portfolioPorProfissional[p.profissionalId]) {
    portfolioPorProfissional[p.profissionalId] = [];
  }
  portfolioPorProfissional[p.profissionalId].push({
    title: p.titulo,
    category: p.categoria,
    image: p.imagens[0],
  });
});
// ===== DADOS DOS PROFISSIONAIS =====
const profissionaisData = {
  "1": {
    "nome": "Ronaldo Coelho",
    "profissao": "Pedreiro (Construção, Hidráulica e Revestimentos)",
    "categoria": "pedreiro",
    "categorias": [
"pedreiro",
"telhadista",
"eletricista"
    ],
    "categoriaLabel": "Pedreiro / Telhadista / Eletricista / Carpinteiro",
    "location": "Planalto, Poções - BA e região",
    "atendimento": "Planalto, Poções - BA e região",
    "tags": [
"Alvenaria",
"Concretagem",
"Contrapiso",
"Hidráulica",
"Pisos e Porcelanatos",
"Telhados",
"Elétrica",
"Carpintaria"
    ],
    "bio": "Profissional completo para obras residenciais e comerciais, atuando do alicerce ao acabamento. Executa alvenaria, concretagem, contrapiso, além de possuir capacitação técnica para instalações hidráulicas (água e esgoto) e assentamento de pisos e porcelanatos. Foco em prumo perfeito, nivelamento e eliminação de vazamentos. Obs.: também executa trabalhos como telhadista, eletricista e carpintaria.",
    "atuacao": [
"Alvenaria e massa",
"Carpintaria (telhados e portas)",
"Instalações hidráulicas (água e esgoto)",
"Assentamento de pisos e porcelanatos",
"Também atua como telhadista e eletricista"
    ],
    "contato": "(77) 99804-5834",
    "email": "",
    "avatar": "assets/img/perfil/ronaldo.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577998045834",
    "whatsapp": "https://wa.me/5577998045834?text=Ol%C3%A1%20Ronaldo%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Alvenaria e Massa",
  "description": "Levantamento de paredes e aplicação de massa.",
  "cat": "pedreiro"
},
{
  "name": "Carpintaria: Telhados e Portas",
  "description": "Estrutura de telhados e instalação de portas.",
  "cat": "telhadista"
},
{
  "name": "Água e Esgoto",
  "description": "Instalações hidráulicas de água e esgoto.",
  "cat": "manutencao"
},
{
  "name": "Pisos e Porcelanatos",
  "description": "Assentamento de pisos e porcelanatos.",
  "cat": "pedreiro"
}
    ]
  },
  "2": {
    "nome": "Leo Construção",
    "profissao": "Pedreiro (Construção, Hidráulica e Revestimentos)",
    "categoria": "pedreiro",
    "categorias": [
"pedreiro"
    ],
    "categoriaLabel": "Pedreiro",
    "location": "Poções - BA e região",
    "atendimento": "Poções e região",
    "tags": [
"Alvenaria",
"Hidráulica",
"Piso Porcelanato",
"Fundação e Concretagem",
"Contrapiso",
"Revestimentos"
    ],
    "bio": "Profissional completo para obras residenciais e comerciais, atuando do alicerce ao acabamento. Executa alvenaria, concretagem, contrapiso, além de possuir capacitação técnica para instalações hidráulicas (água e esgoto) e assentamento de pisos e porcelanatos. Foco em prumo perfeito, nivelamento e eliminação de vazamentos.",
    "atuacao": [
"Alvenaria",
"Hidráulica",
"Piso porcelanato",
"Fundação e concretagem"
    ],
    "contato": "(77) 98854-2624 · (77) 98158-4300",
    "email": "",
    "avatar": "assets/img/perfil/leonardo.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577988542624",
    "whatsapp": "https://wa.me/5577988542624?text=Ol%C3%A1%20Leo%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Alvenaria",
  "description": "Construção de paredes e estruturas.",
  "cat": "pedreiro"
},
{
  "name": "Hidráulica",
  "description": "Instalações hidráulicas de água e esgoto.",
  "cat": "manutencao"
},
{
  "name": "Piso Porcelanato",
  "description": "Assentamento de pisos e porcelanatos.",
  "cat": "pedreiro"
},
{
  "name": "Fundação e Concretagem",
  "description": "Fundação e concretagem para obras novas.",
  "cat": "pedreiro"
}
    ]
  },
  "3": {
    "nome": "Ernandes Amorim",
    "profissao": "Pedreiro (Construção, Hidráulica e Revestimentos)",
    "categoria": "pedreiro",
    "categorias": [
"pedreiro",
"telhadista"
    ],
    "categoriaLabel": "Pedreiro / Carpinteiro / Telhadista",
    "location": "Poções - BA e região",
    "atendimento": "Poções - BA e região",
    "tags": [
"Carpintaria",
"Alvenaria",
"Azulejo",
"Encanamento",
"Telhados",
"Revestimento de Escada"
    ],
    "bio": "Profissional completo para obras residenciais e comerciais, atuando do alicerce ao acabamento. Executa alvenaria, concretagem, contrapiso, além de possuir capacitação técnica para instalações hidráulicas (água e esgoto) e assentamento de pisos e porcelanatos. Foco em prumo perfeito, nivelamento e eliminação de vazamentos. Obs.: também atua como carpinteiro e telhadista.",
    "atuacao": [
"Carpintaria",
"Pedreiro (alvenaria e acabamentos)",
"Azulejo e revestimentos",
"Encanamento",
"Também atua como telhadista"
    ],
    "contato": "(77) 99700-7751",
    "email": "",
    "avatar": "assets/img/perfil/ernandes.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577997007751",
    "whatsapp": "https://wa.me/5577997007751?text=Ol%C3%A1%20Ernandes%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Carpintaria",
  "description": "Estruturas de madeira e telhados.",
  "cat": "telhadista"
},
{
  "name": "Pedreiro",
  "description": "Alvenaria, reformas e acabamentos.",
  "cat": "pedreiro"
},
{
  "name": "Azulejo e Revestimentos",
  "description": "Assentamento de cerâmica, azulejo e revestimento de escadas.",
  "cat": "pedreiro"
},
{
  "name": "Encanamento",
  "description": "Instalações hidráulicas de água e esgoto.",
  "cat": "manutencao"
}
    ]
  },
  "4": {
    "nome": "Aerico Rocha (Tuta)",
    "profissao": "Soldador (Serralheria e Estruturas Metálicas)",
    "categoria": "serralheiro",
    "categorias": [
"serralheiro"
    ],
    "categoriaLabel": "Soldador / Serralheiro",
    "location": "Poções - BA e região",
    "atendimento": "Poções e região",
    "tags": [
"Cobertura Metálica",
"Estruturas Metálicas",
"Soldagem",
"Serralheria",
"Mezanino"
    ],
    "bio": "Especialista em metalurgia e serralheria. Atua na fabricação, montagem e reparo de estruturas metálicas, portões, grades, corrimãos e escadas. Domínio de diferentes processos de soldagem, garantindo resistência mecânica e alinhamento preciso das peças.",
    "atuacao": [
"Coberturas metálicas",
"Estruturas metálicas",
"Serviços de solda em geral"
    ],
    "contato": "(77) 99980-7057",
    "email": "",
    "avatar": "assets/img/perfil/aerico.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577999807057",
    "whatsapp": "https://wa.me/5577999807057?text=Ol%C3%A1%20Aerico%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Coberturas Metálicas",
  "description": "Estrutura e cobertura metálica para obras comerciais e residenciais.",
  "cat": "serralheiro"
},
{
  "name": "Estruturas Metálicas",
  "description": "Fabricação, montagem e reparo de estruturas metálicas.",
  "cat": "serralheiro"
},
{
  "name": "Serviços de Solda em Geral",
  "description": "Soldagem e reparo de peças metálicas.",
  "cat": "serralheiro"
}
    ]
  },
  "5": {
    "nome": "Adiel Meira",
    "profissao": "Técnico em Manutenção Predial",
    "categoria": "manutencao",
    "categorias": [
"manutencao",
"eletricista",
"pintor"
    ],
    "categoriaLabel": "Manutenção Predial",
    "location": "Poções - BA",
    "atendimento": "Poções - BA",
    "tags": [
"Elétrica Residencial",
"Forro",
"Pintura",
"Reboco",
"Construção"
    ],
    "bio": "Profissional versátil e focado em soluções rápidas para o dia a dia. Realiza manutenções preventivas e corretivas de pequeno porte, abrangendo reparos hidráulicos (vazamentos, trocas de reparos), elétricos básicos e instalações domésticas em geral. Foco em praticidade, limpeza e segurança.",
    "atuacao": [
"Manutenção elétrica residencial",
"Instalação e troca de forro",
"Pintura",
"Reboco e construção nova"
    ],
    "contato": "(77) 98855-5791",
    "email": "",
    "avatar": "assets/img/perfil/adiel.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577988555791",
    "whatsapp": "https://wa.me/5577988555791?text=Ol%C3%A1%20Adiel%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Manutenção Elétrica Residencial",
  "description": "Troca de fiação, quadros e reparos elétricos em residências.",
  "cat": "eletricista"
},
{
  "name": "Forro",
  "description": "Instalação e troca de forro em casas e pontos comerciais.",
  "cat": "gesseiro"
},
{
  "name": "Pintura",
  "description": "Preparação e pintura de ambientes.",
  "cat": "pintor"
},
{
  "name": "Reboco e Construção Nova",
  "description": "Reboco e execução de obras novas.",
  "cat": "pedreiro"
}
    ]
  },
  "6": {
    "nome": "Vagner Telhados",
    "profissao": "Telhadista (Coberturas e Estruturas)",
    "categoria": "telhadista",
    "categorias": [
"telhadista"
    ],
    "categoriaLabel": "Telhadista / Carpinteiro",
    "location": "Poções - BA e região",
    "atendimento": "Poções - BA e região",
    "tags": [
"Telhados",
"Estrutura de Madeira",
"Coberturas",
"Rufos"
    ],
    "bio": "Profissional qualificado na montagem e manutenção de estruturas e coberturas. Especialista em dimensionamento, reparo e execução de telhados (coloniais, fibrocimento, embutidos) e calhas. Garantia de estanqueidade e segurança contra infiltrações.",
    "atuacao": [
"Execução de telhados",
"Estruturas de madeira e cobertura",
"Rufos e estanqueidade"
    ],
    "contato": "(77) 98116-9902",
    "email": "",
    "avatar": "assets/img/perfil/vagner.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577981169902",
    "whatsapp": "https://wa.me/5577981169902?text=Ol%C3%A1%20Vagner%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Execução de Telhados",
  "description": "Execução completa de telhados, de terças e caibros à cobertura.",
  "cat": "telhadista"
},
{
  "name": "Estrutura de Madeira e Cobertura",
  "description": "Montagem de estruturas de madeira e cobertura.",
  "cat": "telhadista"
},
{
  "name": "Rufos e Estanqueidade",
  "description": "Instalação de rufos para garantir a estanqueidade do telhado.",
  "cat": "telhadista"
}
    ]
  },
  "7": {
    "nome": "Ibraim Alves",
    "profissao": "Técnico em Refrigeração e Elétrica",
    "categoria": "eletricista",
    "categorias": [
"eletricista"
    ],
    "categoriaLabel": "Eletrotécnico / Ar-condicionado",
    "location": "Poções, Vitória da Conquista e região",
    "atendimento": "Poções, Vitória da Conquista e região",
    "tags": [
"Ar-condicionado",
"Instalação Elétrica",
"Climatização",
"Eletrotécnico"
    ],
    "bio": "Especialista em climatização e instalações elétricas prediais. Realiza instalação de ar-condicionado, recarga de gás e higienização, além de executar infraestrutura elétrica, passagem de cabos e montagem de quadros de distribuição (QDC). Trabalho rigorosamente alinhado às normas de segurança (NBR 5410).",
    "atuacao": [
"Instalação de ar-condicionado",
"Instalação elétrica"
    ],
    "contato": "(77) 98156-1248 · (77) 98148-7533",
    "email": "",
    "avatar": "assets/img/perfil/ibraim.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577981561248",
    "whatsapp": "https://wa.me/5577981561248?text=Ol%C3%A1%20Ibraim%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Instalação de Ar-condicionado",
  "description": "Instalação de aparelhos de ar-condicionado residenciais, comerciais e institucionais.",
  "cat": "eletricista"
},
{
  "name": "Instalação Elétrica",
  "description": "Instalações elétricas prediais.",
  "cat": "eletricista"
}
    ]
  },
  "8": {
    "nome": "Alex Pinturas",
    "profissao": "Pintor",
    "categoria": "pintor",
    "categorias": [
"pintor"
    ],
    "categoriaLabel": "Pintor",
    "location": "Santa Rita, Poções - BA e região",
    "atendimento": "Bairro Santa Rita, Poções e região",
    "tags": [
"Massa Corrida",
"Acrílica",
"Texturas",
"Grafiato",
"Pintura em Geral"
    ],
    "bio": "Especialista em acabamento e estética imobiliária. Realiza tratamentos de superfícies internas e externas, aplicação de massa corrida, acrílica, texturas e pinturas finas. Atua com foco em limpeza, isolamento correto do ambiente (proteção de pisos) e durabilidade da pintura.",
    "atuacao": [
"Aplicação de massa corrida e acrílica",
"Tratamento de superfícies",
"Texturas em geral e grafiato",
"Pinturas em geral"
    ],
    "contato": "(77) 98106-8321",
    "email": "",
    "avatar": "assets/img/perfil/sandro.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577981068321",
    "whatsapp": "https://wa.me/5577981068321?text=Ol%C3%A1%20Alex%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Massa Corrida e Acrílica",
  "description": "Aplicação de massa corrida e tinta acrílica com acabamento uniforme.",
  "cat": "pintor"
},
{
  "name": "Tratamento de Superfícies",
  "description": "Preparo de superfícies antes da pintura.",
  "cat": "pintor"
},
{
  "name": "Texturas e Grafiato",
  "description": "Aplicação de texturas e grafiato em paredes.",
  "cat": "pintor"
},
{
  "name": "Pinturas em Geral",
  "description": "Pintura de paredes, forros, portões e outras áreas.",
  "cat": "pintor"
}
    ]
  },
  "9": {
    "nome": "Mateus Pintor",
    "profissao": "Pintor",
    "categoria": "pintor",
    "categorias": [
"pintor"
    ],
    "categoriaLabel": "Pintor / Quadras Poliesportivas",
    "location": "Poções - BA e vizinhanças",
    "atendimento": "Poções e vizinhanças",
    "tags": [
"Pintura Residencial",
"Texturas",
"Quadras Poliesportivas",
"Repintura de Quadras"
    ],
    "bio": "Especialista em acabamento e estética imobiliária. Realiza tratamentos de superfícies internas e externas, aplicação de massa corrida, acrílica, texturas e pinturas finas. Atua com foco em limpeza, isolamento correto do ambiente (proteção de pisos) e durabilidade da pintura. Especialista em reforma e revitalização de quadras poliesportivas.",
    "atuacao": [
"Pintura residencial",
"Texturas",
"Pintura em geral",
"Reforma e revitalização de quadras poliesportivas"
    ],
    "contato": "(77) 98826-0163",
    "email": "",
    "avatar": "assets/img/perfil/mateus.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577988260163",
    "whatsapp": "https://wa.me/5577988260163?text=Ol%C3%A1%20Mateus%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Pintura Residencial",
  "description": "Pintura interna e externa de residências.",
  "cat": "pintor"
},
{
  "name": "Texturas",
  "description": "Aplicação de texturas decorativas.",
  "cat": "pintor"
},
{
  "name": "Pintura em Geral",
  "description": "Pinturas em geral, com foco em limpeza e durabilidade.",
  "cat": "pintor"
},
{
  "name": "Quadras Poliesportivas",
  "description": "Reforma e repintura de quadras poliesportivas.",
  "cat": "pintor"
}
    ]
  },
  "10": {
    "nome": "Dário Decorações em Drywall",
    "profissao": "Gesseiro / Instalador de Drywall",
    "categoria": "gesseiro",
    "categorias": [
"gesseiro"
    ],
    "categoriaLabel": "Gesseiro / Drywall",
    "location": "Poções, Mirante, Bom Jesus da Serra e região",
    "atendimento": "Poções, Mirante, Bom Jesus da Serra e região",
    "tags": [
"Drywall",
"Rebaixamento de Tetos",
"Molduras",
"Decoração 3D",
"Sancas",
"Divisórias"
    ],
    "bio": "Especialista em sistemas construtivos a seco e acabamentos rápidos. Executa rebaixamento de tetos, molduras, decorações 3D, sancas, fitas de led e divisórias estruturadas em drywall. Foco em alinhamento a laser, velocidade de execução, isolamento acústico e entrega da parede lisa e pronta para pintura, gerando o mínimo de entulho.",
    "atuacao": [
"Divisórias em drywall",
"Sancas e rebaixamento de teto",
"Molduras",
"Decorações 3D"
    ],
    "contato": "(77) 98128-1068 · (77) 98146-8734",
    "email": "",
    "avatar": "assets/img/perfil/dario.jpg",
    "pos": "center 35%",
    "whatsappNumero": "5577981281068",
    "whatsapp": "https://wa.me/5577981281068?text=Ol%C3%A1%20D%C3%A1rio%21%20Vi%20seu%20perfil%20no%20Hub%20Digital%20da%20Constru%C3%A7%C3%A3o%20Civil%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
    "servicos": [
{
  "name": "Divisórias em Drywall",
  "description": "Divisórias estruturadas em drywall, prontas para pintura.",
  "cat": "gesseiro"
},
{
  "name": "Sancas e Rebaixamento de Teto",
  "description": "Sancas, fitas de LED e rebaixamento de tetos.",
  "cat": "gesseiro"
},
{
  "name": "Molduras",
  "description": "Molduras em gesso para tetos e paredes.",
  "cat": "gesseiro"
},
{
  "name": "Decorações 3D",
  "description": "Revestimentos e decorações 3D em gesso.",
  "cat": "gesseiro"
}
    ]
  }
};

// ===== SERVIÇOS POR PROFISSÃO =====
const servicosPorProfissao = {
  pedreiro: [
    { icon: "https://i.ibb.co/v4Lc5CqX/pedreiro.png", name: "Alvenaria e Concretagem", description: "Construção de paredes, estruturas e concretagem com prumo perfeito.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/v4Lc5CqX/pedreiro.png", name: "Contrapiso e Nivelamento", description: "Contrapiso e nivelamento de superfícies para receber o acabamento.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/v4Lc5CqX/pedreiro.png", name: "Instalações Hidráulicas", description: "Instalação de água e esgoto com foco na eliminação de vazamentos.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/v4Lc5CqX/pedreiro.png", name: "Pisos e Porcelanatos", description: "Assentamento de pisos e porcelanatos com acabamento alinhado.", price: "Sob consulta" },
  ],
  pintor: [
    { icon: "https://i.ibb.co/DnQ8FCN/pintor.png", name: "Tratamento de Superfícies", description: "Preparo de superfícies internas e externas antes da pintura.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/DnQ8FCN/pintor.png", name: "Massa Corrida e Acrílica", description: "Aplicação de massa corrida e tinta acrílica com acabamento uniforme.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/DnQ8FCN/pintor.png", name: "Texturas", description: "Aplicação de texturas decorativas em paredes internas e externas.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/DnQ8FCN/pintor.png", name: "Pinturas Finas", description: "Pinturas finas com proteção de pisos e foco em limpeza e durabilidade.", price: "Sob consulta" },
  ],
  eletricista: [
    { icon: "https://i.ibb.co/Fq0yjsPK/eletricista.png", name: "Instalação de Ar-condicionado", description: "Instalação de aparelhos de ar-condicionado residenciais e comerciais.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Fq0yjsPK/eletricista.png", name: "Recarga de Gás e Higienização", description: "Recarga de gás e higienização para manter o desempenho do equipamento.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Fq0yjsPK/eletricista.png", name: "Infraestrutura Elétrica", description: "Infraestrutura elétrica predial e passagem de cabos, conforme a NBR 5410.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Fq0yjsPK/eletricista.png", name: "Quadros de Distribuição (QDC)", description: "Montagem de quadros de distribuição com segurança e organização.", price: "Sob consulta" },
  ],
  manutencao: [
    { icon: "https://i.ibb.co/1fP5St02/encanador.png", name: "Reparos Hidráulicos", description: "Correção de vazamentos e troca de reparos.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/1fP5St02/encanador.png", name: "Reparos Elétricos Básicos", description: "Pequenos reparos e ajustes elétricos do dia a dia.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/1fP5St02/encanador.png", name: "Instalações Domésticas", description: "Instalações domésticas em geral, com praticidade e limpeza.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/1fP5St02/encanador.png", name: "Manutenção Preventiva e Corretiva", description: "Manutenções de pequeno porte para evitar e resolver problemas.", price: "Sob consulta" },
  ],
  gesseiro: [
    { icon: "https://i.ibb.co/HLc3k7BL/gesseiro.png", name: "Rebaixamento de Tetos e Molduras", description: "Rebaixamento de tetos e molduras com alinhamento a laser.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/HLc3k7BL/gesseiro.png", name: "Sancas e Fitas de LED", description: "Sancas com iluminação em fita de LED embutida.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/HLc3k7BL/gesseiro.png", name: "Decorações 3D", description: "Revestimentos e decorações 3D em gesso.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/HLc3k7BL/gesseiro.png", name: "Divisórias em Drywall", description: "Divisórias estruturadas com isolamento acústico e parede pronta para pintura.", price: "Sob consulta" },
  ],
  serralheiro: [
    { icon: "https://i.ibb.co/sJXZsGDJ/soldador.png", name: "Estruturas Metálicas", description: "Fabricação, montagem e reparo de estruturas metálicas.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/sJXZsGDJ/soldador.png", name: "Portões e Grades", description: "Portões e grades sob medida com soldagem resistente.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/sJXZsGDJ/soldador.png", name: "Corrimãos e Escadas", description: "Corrimãos e escadas metálicas com alinhamento preciso.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/sJXZsGDJ/soldador.png", name: "Soldagem e Reparos", description: "Soldagem e reparo de peças metálicas por diferentes processos.", price: "Sob consulta" },
  ],
  telhadista: [
    { icon: "https://i.ibb.co/Z1wZzBHk/telhadistas.png", name: "Telhados Coloniais", description: "Execução e reparo de telhados coloniais.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Z1wZzBHk/telhadistas.png", name: "Telhados de Fibrocimento", description: "Montagem e manutenção de coberturas em fibrocimento.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Z1wZzBHk/telhadistas.png", name: "Telhados Embutidos e Calhas", description: "Telhados embutidos e calhas com garantia de estanqueidade.", price: "Sob consulta" },
    { icon: "https://i.ibb.co/Z1wZzBHk/telhadistas.png", name: "Reparo contra Infiltrações", description: "Dimensionamento e reparo para segurança contra infiltrações.", price: "Sob consulta" },
  ],
};


      
// ===== VARIÁVEIS DO CARROSSEL =====
let currentSlide = 0;
let carouselImages = [];

// ===== ABRIR MODAL DE PROJETO =====
function openProjectModal(titulo) {
  let projeto = projetosDetalhados[titulo];

  if (!projeto) return;

  currentSlide = 0;
  carouselImages = projeto.imagens || [projeto.imagens];

  const modal = document.getElementById("projectModal");
  const slidesContainer = document.getElementById("carouselSlides");
  const indicators = document.getElementById("carouselIndicators");
  const counter = document.getElementById("carouselCounter");

  slidesContainer.innerHTML = "";
  carouselImages.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";
    slide.innerHTML = `<div class="slide-bg" style="background-image:url('${img}')"></div><img src="${img}" alt="${projeto.titulo} - Imagem ${index + 1}" loading="lazy">`;
    slidesContainer.appendChild(slide);
  });

  indicators.innerHTML = "";
  carouselImages.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "dot" + (index === 0 ? " active" : "");
    dot.setAttribute("data-index", index);
    dot.setAttribute("aria-label", `Foto ${index + 1}`);
    dot.addEventListener("click", () => goToSlide(index));
    indicators.appendChild(dot);
  });

  counter.textContent = `1 / ${carouselImages.length}`;
  updateCarousel();

  // ===== EXIBE O PROFISSIONAL RESPONSÁVEL PELO PROJETO =====
  let nomeProfissional = "Profissional não identificado";
  let profissaoProfissional = "";
  let idProfissional = null;
  let avatarProfissional = "";
  let whatsappProfissional = "";

  if (projeto.profissionalId && profissionaisData[projeto.profissionalId]) {
    const prof = profissionaisData[projeto.profissionalId];
    nomeProfissional = prof.nome;
    profissaoProfissional = prof.profissao;
    idProfissional = projeto.profissionalId;
    avatarProfissional = prof.avatar;
    whatsappProfissional = prof.whatsapp;
  }

  document.getElementById("modalProjectBadge").textContent =
    projeto.status === "andamento" ? "Em andamento" : projeto.status === "modelos" ? "Modelos de referência" : "Projeto Finalizado";
  document.getElementById("modalProjectTitle").textContent = projeto.titulo;
  document.getElementById("modalProjectCategory").textContent = `🏷️ ${projeto.categoria}`;
  document.getElementById("modalProjectDescription").textContent = projeto.descricao;
  
  // Atualiza o campo de profissional com avatar e link para o perfil
  const profissionalEl = document.getElementById("modalProjectProfessional");
  if (idProfissional) {
    profissionalEl.innerHTML = `
      <div style="display:flex;align-items:center;gap:12px;padding:4px 0;">
        <img src="${avatarProfissional}" alt="${nomeProfissional}" style="width:36px;height:36px;border-radius:50%;object-fit:cover;border:2px solid var(--primary-orange);">
        <div>
          <div style="font-weight:600;font-size:15px;">${nomeProfissional}</div>
          <div style="font-size:12px;color:var(--gray-600);">${profissaoProfissional}</div>
        </div>
        <a href="#" onclick="event.preventDefault(); event.stopPropagation(); closeProjectModal(); openProfile('${idProfissional}');" style="font-size:12px;color:var(--primary-blue);text-decoration:underline;margin-left:auto;">Ver perfil</a>
      </div>
    `;
  } else {
    profissionalEl.textContent = projeto.profissional || "Profissional não identificado";
  }

  [
    ["modalProjectDate", projeto.data],
    ["modalProjectLocation", projeto.localizacao],
    ["modalProjectDuration", projeto.duracao],
  ].forEach(([id, valor]) => {
    const el = document.getElementById(id);
    el.textContent = valor || "";
    const linha = el.closest(".detail-item, .project-detail-item, .detail") || el.parentElement;
    if (linha) linha.style.display = valor ? "" : "none";
  });
  
  // Se tiver WhatsApp específico do profissional, usa ele
  if (idProfissional) {
    const pf = profissionaisData[idProfissional];
    const msg = `Olá ${pf.nome}! Vi o projeto "${projeto.titulo}" no Hub Digital da Construção Civil e gostaria de solicitar um orçamento.`;
    document.getElementById("modalProjectWhatsApp").href =
      `https://wa.me/${pf.whatsappNumero}?text=${encodeURIComponent(msg)}`;
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ===== FUNÇÕES DO CARROSSEL =====
function updateCarousel() {
  const slidesContainer = document.getElementById("carouselSlides");
  const totalSlides = carouselImages.length;
  const counter = document.getElementById("carouselCounter");

  if (totalSlides === 0) return;

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

  document.querySelectorAll("#carouselIndicators .dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });

  counter.textContent = `${currentSlide + 1} / ${totalSlides}`;

  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  if (prevBtn) prevBtn.style.display = totalSlides > 1 ? "flex" : "none";
  if (nextBtn) nextBtn.style.display = totalSlides > 1 ? "flex" : "none";
}

function changeSlide(direction) {
  const totalSlides = carouselImages.length;
  if (totalSlides === 0) return;
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  if (index < 0 || index >= carouselImages.length) return;
  currentSlide = index;
  updateCarousel();
}

function closeProjectModal() {
  document.getElementById("projectModal").classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.getElementById("carouselSlides");
  if (slidesContainer) {
    slidesContainer.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true },
    );

    slidesContainer.addEventListener(
      "touchend",
      function (e) {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            changeSlide(1);
          } else {
            changeSlide(-1);
          }
        }
      },
      { passive: true },
    );
  }
});

// ===== ABRIR PERFIL =====
function openProfile(id, fromHistory) {
  const prof = profissionaisData[id];
  if (!prof) {
    alert("Profissional não encontrado. Tente novamente.");
    return;
  }

  if (mobileMenu.classList.contains("open")) {
    toggleMenu(false);
  }

  const landingPage = document.getElementById("landingPage");
  const profileSection = document.getElementById("profileSection");
  const footer = document.getElementById("footer");

  if (!profileSection.classList.contains("active")) {
    landingScrollY = window.scrollY;
  }
  if (!fromHistory) {
    history.pushState({ perfil: id }, "", "#perfil-" + id);
  }
  landingPage.style.display = "none";
  landingPage.classList.add("hidden");
  profileSection.classList.add("active");
  if (footer) footer.style.display = "none";

  window.scrollTo({ top: 0, behavior: "smooth" });

  document.getElementById("profileAvatar").src = prof.avatar;
  document.getElementById("profileAvatar").alt = `Foto de ${prof.nome}`;
  document.getElementById("profileAvatar").style.objectPosition = prof.pos || "center 20%";
  document.getElementById("profileName").innerHTML =
    `${prof.nome} <span class="badge"><img src="https://i.ibb.co/zpmFvpp/icons-4.png" alt="Verificado" style="width:14px;height:14px;object-fit:contain;" /> Verificado</span>`;
  document.getElementById("profileProfession").textContent =
    prof.categorias && prof.categorias.length > 1
      ? prof.categoriaLabel
      : prof.profissao;
  document.getElementById("profileLocation").innerHTML =
    `<img src="https://i.ibb.co/8LrxMqTs/icon-4.png" alt="Local" style="width:16px;height:16px;object-fit:contain;" /> ${prof.location}`;
  document.getElementById("profileBio").textContent = prof.bio;
  document.getElementById("profileFormacao").innerHTML =
    prof.atuacao.map((a) => "• " + a).join("<br>");
  document.getElementById("profileExperiencia").textContent = "";

  const tagsContainer = document.getElementById("profileTags");
  tagsContainer.innerHTML = prof.tags
    .map((t) => `<span>${t}</span>`)
    .join("");

  document.getElementById("detailLocation").textContent = prof.location;
  document.getElementById("detailExperiencia").textContent = prof.atendimento || prof.location;
  document.getElementById("detailContato").textContent = prof.contato;
  const emailEl = document.getElementById("detailEmail");
  emailEl.textContent = prof.email || "";
  const emailLinha = emailEl.closest(".detail-item");
  if (emailLinha) emailLinha.style.display = prof.email ? "" : "none";
  document.getElementById("detailCategoria").textContent =
    prof.categoriaLabel;

  document.getElementById("profileWhatsApp").href = prof.whatsapp;

  renderProfilePortfolio(id);
  renderProfileServices(prof.categoria, id);

  const portfolioItems = portfolioPorProfissional[id] || [];
  document.getElementById("portfolioBadge").textContent =
    portfolioItems.length;
  document.getElementById("portfolioCount").textContent =
    `${portfolioItems.length} ${portfolioItems.length === 1 ? "projeto" : "projetos"}`;

  document
    .querySelectorAll(".profile-tabs .tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".profile-body .tab-content")
    .forEach((c) => c.classList.remove("active"));
  document
    .querySelector('.profile-tabs .tab-btn[data-tab="portfolio"]')
    .classList.add("active");
  document.getElementById("tab-portfolio").classList.add("active");
}

// ===== FECHAR PERFIL =====
let landingScrollY = 0;
function closeProfile() {
  if (history.state && history.state.perfil) {
    history.back();
  } else {
    showLanding(true);
  }
}

function cleanUrl() {
  history.replaceState(null, "", location.pathname + location.search);
}

function showLanding(restoreScroll) {
  const landingPage = document.getElementById("landingPage");
  const profileSection = document.getElementById("profileSection");
  const footer = document.getElementById("footer");
  if (landingPage) {
    landingPage.style.display = "block";
    landingPage.classList.remove("hidden");
  }
  if (profileSection) profileSection.classList.remove("active");
  if (footer) footer.style.display = "block";
  if (restoreScroll) {
    window.scrollTo({ top: landingScrollY, behavior: "instant" });
  }
}

// ===== RENDERIZAR PORTFÓLIO INDIVIDUAL DO PROFISSIONAL =====
function renderProfilePortfolio(profId) {
  const grid = document.getElementById("profilePortfolioGrid");
  grid.innerHTML = "";
  const items = portfolioPorProfissional[profId] || [];

  items.forEach((item) => {
    const div = document.createElement("div");
    div.className = "profile-portfolio-item";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="overlay">
        <div class="title">${item.title}</div>
        <div class="category">${item.category}</div>
      </div>
    `;
    div.addEventListener("click", function () {
      openProjectModal(item.title);
    });
    grid.appendChild(div);
  });
}

// ===== RENDERIZAR SERVIÇOS POR PROFISSÃO =====
function renderProfileServices(categoria, profId) {
  const grid = document.getElementById("profileServicesGrid");
  grid.innerHTML = "";
  const prof = profissionaisData[profId];
  const iconeDe = (cat) =>
    (servicosPorProfissao[cat] || servicosPorProfissao.pedreiro)[0].icon;
  const items = (prof.servicos || []).map((s) => ({
    ...s,
    icon: iconeDe(s.cat || categoria),
  }));

  const sb = document.getElementById("servicesBadge");
  if (sb) sb.textContent = items.length;

  items.forEach((item) => {
    const msg = `Olá ${prof.nome}! Vi seu serviço de ${item.name} no Hub Digital da Construção Civil e gostaria de solicitar um orçamento.`;
    const link = `https://wa.me/${prof.whatsappNumero}?text=${encodeURIComponent(msg)}`;
    const div = document.createElement("div");
    div.className = "profile-service-card";
    div.innerHTML = `
              <img src="${item.icon}" alt="" class="icon-service" />
              <div class="name">${item.name}</div>
              <div class="description">${item.description}</div>
              <a href="${link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
          `;
    grid.appendChild(div);
  });
}

// ===== TABS DO PERFIL =====
document.querySelectorAll(".profile-tabs .tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const tabId = this.getAttribute("data-tab");
    document
      .querySelectorAll(".profile-tabs .tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".profile-body .tab-content")
      .forEach((c) => c.classList.remove("active"));
    this.classList.add("active");
    document.getElementById(`tab-${tabId}`).classList.add("active");
  });
});

// ===== MENU MOBILE =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

function toggleMenu(open) {
  mobileMenu.classList.toggle("open", open);
  hamburger.classList.toggle("active", open);
  hamburger.setAttribute("aria-expanded", open);
  document.body.style.overflow = open ? "hidden" : "";
}

hamburger.addEventListener("click", () =>
  toggleMenu(!mobileMenu.classList.contains("open")),
);
closeMenu.addEventListener("click", () => toggleMenu(false));
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

// ===== HEADER SCROLL =====
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// ===== NAVEGAÇÃO DO CABEÇALHO (funciona na home E dentro do perfil) =====
function scrollToHash(targetId) {
  requestAnimationFrame(() => {
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

function handleHeaderNavClick(e) {
  const href = this.getAttribute("href");
  if (!href || href.charAt(0) !== "#") return;

  e.preventDefault();

  const targetId = href.length > 1 ? href.slice(1) : null;
  const profileSectionEl = document.getElementById("profileSection");
  const wasInProfile =
    profileSectionEl && profileSectionEl.classList.contains("active");

  if (mobileMenu.classList.contains("open")) {
    toggleMenu(false);
  }

  if (wasInProfile) {
    showLanding(false);
    cleanUrl();
    if (targetId) {
      // Aguarda a landing page voltar a ficar visível antes de rolar
      setTimeout(() => scrollToHash(targetId), 60);
    }
  } else {
    scrollToHash(targetId);
  }
}

document
  .querySelectorAll(
    '#logoLink, .nav-desktop a[href^="#"], .mobile-menu a[href^="#"]',
  )
  .forEach((link) =>
    link.addEventListener("click", handleHeaderNavClick),
  );

// ===== FAQ ACCORDION =====
document.querySelectorAll(".faq-question").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    const isOpen = item.classList.contains("open");
    document
      .querySelectorAll(".faq-item")
      .forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});

// ===== SCROLL REVEAL =====
const revealElements = document.querySelectorAll(".reveal");

function checkReveal() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - revealPoint) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", checkReveal);
window.addEventListener("resize", checkReveal);
checkReveal();

// ===== SEARCH FORM =====
const normalizar = (s) =>
  (s || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

const searchStatus = document.createElement("p");
searchStatus.className = "sr-only";
searchStatus.setAttribute("aria-live", "polite");
document.getElementById("searchForm").appendChild(searchStatus);

function executarBusca() {
  const service = normalizar(document.getElementById("search-service").value);
  const category = document.getElementById("search-category").value;
  const local = normalizar(document.getElementById("search-location").value);
  const cards = document.querySelectorAll(".professional-card");
  let found = 0;

  cards.forEach((card) => {
    const prof = profissionaisData[card.getAttribute("data-id")] || {};
    const textoServico = normalizar(
      [
        prof.nome,
        prof.categoriaLabel,
        ...(prof.tags || []),
        ...(prof.atuacao || []),
        ...((prof.servicos || []).map((s) => s.name)),
      ].join(" | "),
    );
    const textoLocal = normalizar(
      [prof.location, prof.atendimento].join(" | "),
    );
    let match = true;
    if (service && !textoServico.includes(service)) match = false;
    if (category && !card.getAttribute("data-category").split(/\s+/).includes(category)) match = false;
    if (local && !textoLocal.includes(local)) match = false;
    card.style.display = match ? "" : "none";
    if (match) found++;
  });

  const empty = document.getElementById("searchEmpty");
  if (empty) empty.hidden = found > 0;
  const filtrando = service || category || local;
  searchStatus.textContent = filtrando
    ? found > 0
      ? `${found} profissional${found > 1 ? "is encontrados" : " encontrado"}.`
      : "Nenhum profissional encontrado."
    : "Mostrando todos os profissionais.";
  return found;
}

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  executarBusca();
  document.getElementById("profissionais").scrollIntoView({ behavior: "smooth" });
});

const botaoLimpar = document.getElementById("searchClear");
if (botaoLimpar) {
  botaoLimpar.addEventListener("click", function () {
    document.getElementById("search-service").value = "";
    document.getElementById("search-category").value = "";
    document.getElementById("search-location").value = "";
    executarBusca();
  });
}

// ===== CATEGORIAS CLICK =====
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", function () {
    const category = this.getAttribute("data-category");
    if (category) {
      document.getElementById("search-category").value = category;
      document
        .getElementById("searchForm")
        .dispatchEvent(new Event("submit"));
    }
  });
});

// No mobile não existe hover: o cartão inteiro abre o projeto
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("click", function (e) {
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (!mobile || e.target.closest(".ver-projeto")) return;
    const btn = item.querySelector(".ver-projeto");
    if (btn) btn.click();
  });
});

 // ===== INICIAR =====
(function acessibilidade() {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "modalProjectTitle");
  }
  const rotular = (sel, texto) =>
    document.querySelectorAll(sel).forEach((el) => el.setAttribute("aria-label", texto));
  rotular(".modal-close", "Fechar");
  rotular(".carousel-btn.prev", "Foto anterior");
  rotular(".carousel-btn.next", "Próxima foto");
  rotular(".ba-carousel-btn.prev", "Anterior");
  rotular(".ba-carousel-btn.next", "Próximo");
  document.querySelectorAll(".category-card").forEach((c) => {
    c.setAttribute("role", "button");
    c.tabIndex = 0;
    c.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        c.click();
      }
    });
  });
})();

// Botão "voltar" do navegador fecha o perfil em vez de sair do site
window.addEventListener("popstate", (e) => {
  const perfilAberto = document.getElementById("profileSection").classList.contains("active");
  if (e.state && e.state.perfil) {
    openProfile(e.state.perfil, true);
  } else if (perfilAberto) {
    showLanding(true);
  }
});

// Link direto para um perfil (#perfil-N)
(function abrirPerfilPelaUrl() {
  const m = location.hash.match(/^#perfil-(\d+)$/);
  if (m && profissionaisData[m[1]]) {
    history.replaceState({ perfil: m[1] }, "", location.hash);
    openProfile(m[1], true);
  }
})();
