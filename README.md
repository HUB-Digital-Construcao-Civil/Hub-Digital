# Hub Digital da Construção Civil

O Hub Digital é um site que conecta clientes a profissionais da construção civil de **Poções - BA e região**, facilitando a busca por serviços, portfólios e contatos.

## Estrutura do projeto

```
Hub-Digital/
├── index.html        # Estrutura e conteúdo da página
├── css/
│   └── styles.css    # Estilos do site
├── js/
│   └── script.js     # Carrosséis, modais, perfis e interações
├── assets/
│   └── img/
│       ├── antes-depois/   # Imagens do carrossel antes e depois
│       ├── obras/          # Portfólio, uma pasta por obra
│       └── perfil/         # Fotos dos profissionais
├── .gitignore
└── README.md
```

## Como executar

Não precisa de build nem de dependências. Abra o `index.html` no navegador.

Para rodar com um servidor local (opcional):

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)
- Google Fonts (Poppins)

## Adicionando uma obra ou profissional

1. Coloque as imagens em `assets/img/obras/<nome-da-obra>/` (ou `assets/img/perfil/` para fotos de perfil).
2. Adicione o card ou os dados correspondentes no `index.html` e no `js/script.js`.
