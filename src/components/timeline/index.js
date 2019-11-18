import React, { Component } from  'react';
import './styles.css';

import PessoaDefault from '../../images/PessoaDefault.png';

class TimeLine extends Component {
  state = {
    posts: [
      {
        id: '1',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: [
          {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            foto: 'https://previews.123rf.com/images/doglikehorse/doglikehorse1004/doglikehorse100400638/6875412-de-mens-maakt-een-grappig-gezicht-ge%C3%AFsoleerd-beeld.jpg',
            conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
          },
          {
            id: '2',
            id_post: '2',
            nome: 'Sicrano',
            foto: 'https://previews.123rf.com/images/milkos/milkos1705/milkos170501215/78282438-schokkend-nieuws-het-verraste-de-vette-mens-uitdrukken-verbaast-op-gezicht-die-zich-op-wit-ge%C3%AFsoleerde.jpg',
            conteudocomment: 'Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.',
          }
        ]
      },
      {
        id: '2',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        conteudopost: 'Quem manda na minha terra sou euzis! Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.',
        comments: [
        ]
      },
      {
        id: '3',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        conteudopost: 'Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Detraxit consequat et quo num tendi nada.  Paisis, filhis, espiritis santis.',
        comments: [
          {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            foto: 'https://previews.123rf.com/images/doglikehorse/doglikehorse1004/doglikehorse100400638/6875412-de-mens-maakt-een-grappig-gezicht-ge%C3%AFsoleerd-beeld.jpg',
            conteudocomment: 'Manduma pindureta quium dia nois paga. In elementis mé pra quem é amistosis quis leo. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem num gosta di mé, boa gentis num é.',
          },
          {
            id: '2',
            id_post: '1',
            nome: 'Beltrano',
            foto: 'https://olharconceito.com.br/imgsite/noticias/selfie1.png',
            conteudocomment: 'Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.',
          },
          {
            id: '3',
            id_post: '1',
            nome: 'Sicrano',
            foto: 'https://previews.123rf.com/images/milkos/milkos1705/milkos170501215/78282438-schokkend-nieuws-het-verraste-de-vette-mens-uitdrukken-verbaast-op-gezicht-die-zich-op-wit-ge%C3%AFsoleerde.jpg',
            conteudocomment: 'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Delegadis gente finis, bibendum egestas augue arcu ut est. Per aumento de cachacis, eu reclamis.',
          }
        ]
      },
      {
        id: '4',
        nome: 'Matheus Carvalho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: [
          {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            foto: 'https://previews.123rf.com/images/doglikehorse/doglikehorse1004/doglikehorse100400638/6875412-de-mens-maakt-een-grappig-gezicht-ge%C3%AFsoleerd-beeld.jpg',
            conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
          }
        ]
      },
      {
        id: '5',
        nome: 'Matheus Carvalho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: [
          {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            foto: 'https://previews.123rf.com/images/doglikehorse/doglikehorse1004/doglikehorse100400638/6875412-de-mens-maakt-een-grappig-gezicht-ge%C3%AFsoleerd-beeld.jpg',
            conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
          }
        ]
      },
      {
        id: '6',
        nome: 'Matheus Carvalho',
        foto: 'https://avatars3.githubusercontent.com/u/53843756?s=400&u=203a663981a5105fa07249f8f98bbb35bbcc3b98&v=4',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: [
          {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            foto: 'https://previews.123rf.com/images/doglikehorse/doglikehorse1004/doglikehorse100400638/6875412-de-mens-maakt-een-grappig-gezicht-ge%C3%AFsoleerd-beeld.jpg',
            conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
          }
        ]
      }
    ]
  };

  render(){
    return (
      <div id="timeline">
        {this.state.posts.map(post =>(
          <div key={post.id} class="post">
            <div class="infopost">
              <img src={post.foto} alt=""/>
              <div class="namedata">
                <strong>{post.nome}</strong>
                <h1>{post.data}</h1>
              </div>
            </div>

            <div class="conteudopost">
              {post.conteudopost}
            </div>
            {post.comments.map(comment => (
              <div key={comment.id} class="comments">
                <img src={comment.foto} alt=""/>
                <div class="conteudocomment">
                  <strong>{comment.nome}</strong>
                  {comment.conteudocomment}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default TimeLine;