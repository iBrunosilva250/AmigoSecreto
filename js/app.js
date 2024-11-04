let amigos = [];
//let minhaLista = [];

//minhaLista.push(1, 2, 3);
//console.log('Adicionando elementos:', minhaLista);

//let outrosNumeros = [4, 5, 6];
//let novaLista = minhaLista.concat(outrosNumeros);
//console.log('Juntando Array:', novaLista);

//novaLista.pop();
//console.log('Embaralhando a lista:', novaLista);

//function embaralharArray(array) {
   //for (let i = array.length - 1; i > 0; i--) {
      //  const j = Math.floor(Math.random() * (i + 1));
      //  [array[i], array[j]] = [array[j], array[i]];
   // }
   // return array;
//}

//novaLista = embaralharArray(novaLista);
//console.log('Embaralhando a Lista:', novaLista);

//function removerDuplicatas(array) {
  //  return [... new Set(array)];
//}

//let novaListaSemDuplicatas = removerDuplicatas(novaLista);
//console.log('Remover duplicata:', novaListaSemDuplicatas);

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
       alert('Informe o nome do amigo!');
       return; 
    } else if (amigos.includes(amigo.value)) {
        alert('Nome ja adicionado!');
        return;
    }

    
    let lista = document.getElementById('lista-amigos');
   amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value; 
    }
    amigo.value = '';

    //atualizarLista();
   // atualizarSorteio();
   
}

function sortear() {
   if (amigos.length < 4 ) {
    alert('Adicione pelo menos 4 pessoas!');
    return;
   }
   embaralhar(amigos);
   let sorteio = document.getElementById('lista-sorteio');

   for (let i = 0; i < amigos.length; i++) {
     
    if (i == amigos.length - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
    }  else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>'
    }
      
   }
}

//function excluirAmigo(index) {
   // amigos.splice(index, 1);
   // atualizarLista();
  //  atualizarSorteio();
//}

function embaralhar(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//function atualizarSorteio() {
   // let sorteio = document.getElementById('lista-sorteio');
    //sorteio.innerHTML = '';
//}

//function atualizarLista() {
    // let lista = document.getElementById('lista-amigos');
  //  lista.innerHTML = '';

   // for (let i = 0; i < amigos.length; i++) {
    //    let paragrafo = document.createElement('p');
      //  paragrafo.textContent = amigos[i];

       // paragrafo.addEventListener('click', function() {
      //      excluirAmigo(i);
       // });

   // }
   // lista.appendChild(paragrafo);

//}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}