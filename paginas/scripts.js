
const livros = [
    { 
      titulo: 'Harry Potter e a Pedra Filosofal', 
      ano: 1997, 
      genero: 'Fantasia', 
      sinopse: 'O livro que deu início à saga de Harry Potter, onde ele descobre sua identidade <br> como bruxo e frequenta a Escola de Magia e Bruxaria de Hogwarts.'
    },
    { 
      titulo: 'Harry Potter e a Câmara Secreta', 
      ano: 1998, 
      genero: 'Fantasia', 
      sinopse: 'Harry retorna a Hogwarts para seu segundo ano, onde uma força misteriosa <br> ameaça os estudantes, petrificando-os.' 
    },
    { 
      titulo: 'Harry Potter e o Prisioneiro de Azkaban', 
      ano: 1999, 
      genero: 'Fantasia', 
      sinopse: 'Harry descobre segredos sobre seu passado enquanto um perigoso <br> prisioneiro foge de Azkaban.' 
    },
    { 
      titulo: 'Harry Potter e o Cálice de Fogo', 
      ano: 2000, 
      genero: 'Fantasia', 
      sinopse: 'Harry é selecionado para competir no perigoso Torneio Tribruxo, <br> enfrentando desafios mortais.' 
    },
    { 
      titulo: 'Harry Potter e a Ordem da Fênix', 
      ano: 2003, 
      genero: 'Fantasia', 
      sinopse: 'Harry lidera um grupo de estudantes que se rebelam contra a negação <br> do Ministério da Magia em relação ao retorno de Voldemort.' 
    },
    { 
      titulo: 'Harry Potter e o Enigma do Príncipe', 
      ano: 2005, 
      genero: 'Fantasia', 
      sinopse: 'Harry descobre mais sobre o passado de Voldemort enquanto se prepara <br> para o confronto final.' 
    },
    { 
      titulo: 'Harry Potter e as Relíquias da Morte', 
      ano: 2007, 
      genero: 'Fantasia', 
      sinopse: 'A batalha final entre Harry e Voldemort culmina na busca pelas Horcruxes <br> e na última confrontação.' 
    },
    { 
      titulo: 'Animais Fantásticos e Onde Habitam', 
      ano: 2001, 
      genero: 'Fantasia', 
      sinopse: 'Um livro didático sobre criaturas mágicas escrito por Newt Scamander.' 
    },
    { 
      titulo: 'Quadribol Através dos Séculos', 
      ano: 2001, 
      genero: 'Fantasia', 
      sinopse: 'Um livro sobre a história e as regras do quadribol, o esporte popular no mundo bruxo.' 
    },
  ];
  
  
  function buscarLivros() {
    const termoBusca = document.getElementById('caixaBusca').value.toLowerCase()
    const listaLivros = document.getElementById('listaLivros')
    listaLivros.innerHTML = ''
  
    const livrosFiltrados = livros.filter(livro =>
      livro.titulo.toLowerCase().includes(termoBusca)
    )
  
    if (livrosFiltrados.length === 0) {
      listaLivros.innerHTML = '<li>Nenhum livro encontrado.</li>'
    } else {
      livrosFiltrados.forEach(livro => {
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        h1.innerHTML = `${livro.titulo}`
        listaLivros.appendChild(h1);
        li.innerHTML = `Ano: (${livro.ano}) <br> Gênero: ${livro.genero} <br> sinopse: ${livro.sinopse}`
        listaLivros.appendChild(li)
      });
    }
  }
  