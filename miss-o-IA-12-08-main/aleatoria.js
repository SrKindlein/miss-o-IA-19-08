const nomes = ["Gustavo", "Samuel S.", "Vitor", "Pedro", "Jose"]

export function aleatorio (lista){
 const posicao = math.floor(math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);