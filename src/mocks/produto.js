import Logo from '../../assets/Logo.png';
import queen from '../../assets/WeWillRockYou.jpg'
import madonna from '../../assets/LikeAPrayer.png'
import michael from '../../assets/Thriller.jpg'

const produto = {
    detalhes: {
        nome: "PLAYLIST - TOP 3 HISTÓRIA",
        logo: Logo,
        detalhes: "Playlist das três musicas mais escutadas da história",
        preco: "R$ 19,99",
        botao: "ADICIONAR AOS FAVORITOS",
    },
    itens: {
        titulo: "MÚSICAS:",
        lista: [
          {
            nome: "WE WILL ROCK YOU:\nQUEEN (1977)",
            imagem: queen,
          },
          {
            nome: "LIKE A PRAYER:\nADONNA (1989)",
            imagem: madonna,
          },
          {
            nome: "THRILLER: \nMICHAEL JACKSON (1982)",
            imagem: michael,
          },
        ]
    }
}

export default produto;