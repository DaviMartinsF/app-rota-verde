# Rota Verde

`Rota Verde` é um aplicativo móvel focado em mobilidade urbana sustentável, projetado para ajudar os moradores da cidade a escolherem rotas que priorizem o transporte público, ciclovias e caminhos com mais áreas verdes e sombra.

O projeto foi desenvolvido em **React Native** com **Expo Router**, focando em uma interface de usuário limpa, intuitiva e acessível, baseada nos princípios de Interação Humano-Computador.

## Protótipo & Design

O design e o protótipo de alta fidelidade do projeto foram criados no Figma e serviram como base para o desenvolvimento deste aplicativo.

  * **[Acesse o protótipo no Figma aqui](https://www.figma.com/design/KV7CUCzDxMc6ox9Mho89XC/Sem-t%C3%ADtulo?node-id=1-3&t=lM2TUo9k2RgMKbje-1)**

# Vídeo no Youtube
 * **[Acesse o vídeo no Youtube aqui](youtube.com/watch?si=gZ6qw_QB49HuKrho&v=GrQlA7WtNVE&feature=youtu.be)**

## Funcionalidades Implementadas

A versão atual do aplicativo inclui as seguintes funcionalidades, baseadas nos requisitos do projeto:

  * **Navegação por Abas:** Um menu principal robusto com três abas: "Mapa", "Rotas salvas" (Endereços) e "Perfil".
  * **Tela de Perfil:** Apresenta informações do usuário, estatísticas de impacto (Km sustentáveis, CO² economizado) e serve como central de navegação para outras telas.
  * **Gerenciamento de Endereços:** Tela para visualizar e gerenciar endereços salvos (Casa, Trabalho, etc.).
  * **Histórico de Rotas:** Tela que exibe uma lista de rotas recentes do usuário.
  * **Configurações:** Tela para ajustar preferências do aplicativo, como modo de transporte padrão e notificações.
  * **Navegação Hierárquica (Stack):** Fluxo de navegação completo, permitindo ao usuário acessar telas de detalhe (Configurações, Histórico) a partir do Perfil e retornar com um botão "voltar".

## Objetivo do Projeto

O "Rota Verde" foi concebido para mitigar os desafios da mobilidade urbana, focando na sustentabilidade ambiental e no conforto do usuário.

Baseado em uma análise de usuários, o projeto foi desenhado para atender a diferentes personas, como:

  * **A Estudante Consciente (Sofia):** Que prioriza o impacto ambiental e o conforto, buscando rotas a pé com mais sombra e integração com transporte público.
  * **O Pendular Pragmático (Lucas):** Que busca conveniência e se beneficiaria de funcionalidades futuras como a localização de pontos de recarga para VEs.

### Acessibilidade como Pilar

O projeto considera a acessibilidade um pilar central, pois um aplicativo de mobilidade deve atender a todos. As diretrizes incluem:

  * **Contraste e Cores:** Garantia de contraste adequado e uso de texturas ou padrões, não apenas cores, para diferenciar rotas.
  * **Áreas de Toque:** Botões e elementos interativos com áreas de toque grandes.
  * **Linguagem Simples:** Uso de textos diretos e ícones universais para facilitar a compreensão cognitiva.

## Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno para desenvolvimento móvel:

  * **React Native:** Framework JavaScript para desenvolvimento de aplicativos móveis nativos.
  * **Expo:** Plataforma e conjunto de ferramentas que simplifica o desenvolvimento e o *build* do React Native.
  * **Expo Router (v3):** Sistema de navegação baseado em arquivos (file-system based routing) para gerenciar as abas e a navegação em "pilha" (stack).
  * **TypeScript:** Para adicionar tipagem estática e robustez ao código.
  * **Git & GitHub:** Para controle de versão e gerenciamento do projeto.

## Como Rodar o Projeto

Para rodar este projeto localmente, você precisará ter o **Node.js** (LTS) e o **Git** instalados.

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/DaviMartinsF/app-rota-verde.git
    ```

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd app-rota-verde 
    ```

    *(Ou o nome da pasta para a qual você clonou)*

3.  **Instale as dependências básicas:**

    ```bash
    npm install
    ```

4.  **Instale as dependências específicas do Expo:**
    *(Estas são necessárias para os ícones e a área segura)*

    ```bash
    npx expo install @expo/vector-icons
    npx expo install react-native-safe-area-context
    ```

5.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npx expo start
    ```

6.  **Abra no seu celular:**

      * Baixe o aplicativo **Expo Go** na App Store (iOS) ou Google Play Store (Android).
      * Escaneie o QR Code que apareceu no seu terminal.

## Autores

  * **Davi Martins Figueiredo** - 10374878
  * **Marina Cantarelli Barroca** - 10740412
