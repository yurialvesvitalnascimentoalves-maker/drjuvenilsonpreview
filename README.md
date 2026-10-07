# Dr. Juvenilson Ferreira — Odontologia Especializada

Landing page em Next.js, React, TypeScript, Tailwind CSS, Framer Motion e Lucide React.

## Rodar

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Para produção: `npm run build` e `npm start`.
Para conferir os tipos: `npm run typecheck`.

## Contatos

As informações confirmadas já estão em `src/lib/constants.ts`:

- WhatsApp: +55 87 98124-2392.
- Empresarial Trade Center, sala 1202. Rua Joaquim Nabuco, 541, Centro, Petrolina – PE.
- Mensagem inicial: “Olá, Dr. Juvenilson! Gostaria de agendar uma avaliação.”

Opcionalmente copie `.env.example` para `.env.local`. O número deve incluir país e DDD, apenas dígitos. O Instagram não foi informado: a interface só mostra o link quando `NEXT_PUBLIC_INSTAGRAM_URL` estiver preenchido. Reinicie o servidor após alterar a configuração; para produção, refaça a build.

## Assets e referências

Os sete arquivos originais foram preservados em `references/`. Os assets usados estão em `public/assets/dr-juvenilson/`.

- Logo oficial preservada: apenas recorte das margens transparentes.
- Logo completa apenas na navbar e no rodapé. A hero recebe o monograma da marca como detalhe decorativo grande, com opacidade baixa, atrás do retrato.
- Background original preservado.
- Retrato oficial sem fundo fornecido pelo cliente: `dr-juvenilson-oficial.png`, em 1024 × 1536 pixels, usado sem alteração na hero.
- Foto do consultório fornecida para a seção Sobre: `dr-juvenilson-sobre.png`, em 656 × 916 pixels, apresentada em um card com cantos arredondados.
- Objetos odontológicos recortados das imagens de referência, sem recriação. A imagem da clínica foi substituída por um card dourado com o texto “uma foto do seu consultório aparecerá aqui”, aguardando a foto real.
- Quatro comparações de antes/depois fornecidas pelo cliente em `resultado-clinico-01.png` a `resultado-clinico-04.png`, preservadas sem alteração. Os cards mantêm antes na parte superior e depois na inferior, com um enquadramento leve nas bordas para ocultar os controles da captura de tela.
- Mapa real do Google Maps, consultando o endereço informado, com link para abrir a localização. Seu carregamento depende de conexão e do serviço externo.

Para trocar as imagens, preserve os nomes usados nos componentes. O script `scripts/prepare-assets.py` documenta os recortes originais e copia o retrato oficial sem alteração; não faz parte da execução do site. Requer Pillow. Os botões de agendamento levam ao WhatsApp; os links separados de conversa foram removidos.

## Organização

- `src/app/`: layout, página e estilos.
- `src/components/`: navbar, sete seções, botões, logo, retrato e animação reutilizável.
- `src/lib/constants.ts`: contatos e helpers compartilhados.
- `src/lib/treatments.ts`: dados dos cinco tratamentos.

O menu mobile funciona por toque e teclado, fecha com Escape e navegação. A página respeita movimento reduzido e mantém o conteúdo visível sem JavaScript. Os cinco tratamentos são apresentados em cards, com scroll-snap no celular; os resultados também usam scroll-snap. A seção Sobre tem a foto em card, a frase “Transformando vidas através do sorriso” e três diferenciais com ícones pequenos e texto simples.
