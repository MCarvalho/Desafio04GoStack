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
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
            id: '1',
            id_post: '1',
            nome: 'Fulano',
            conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
          }
      },
      {
        id: '2',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
          id: '1',
          id_post: '1',
          nome: 'Fulano',
          conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
        }
      },
      {
        id: '3',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
          id: '1',
          id_post: '1',
          nome: 'Fulano',
          conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
        } 
      },
      {
        id: '4',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
          id: '1',
          id_post: '1',
          nome: 'Fulano',
          conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
        }
      },
      {
        id: '5',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
          id: '1',
          id_post: '1',
          nome: 'Fulano',
          conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
        }
      },
      {
        id: '6',
        nome: 'Matheus Carvalho',
        data: '23 de Julho',
        conteudopost: 'Mussum Ipsum, cacilds vidis litro abertis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Quem num gosta di mim que vai caçá sua turmis! Sapien in monti palavris qui num significa nadis i pareci latim.',
        comments: {
          id: '1',
          id_post: '1',
          nome: 'Fulano',
          conteudocomment: 'Per aumento de cachacis, eu reclamis. Cevadis im ampola pa arma uma pindureta. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Copo furadis é disculpa de bebadis, arcu quam euismod magna.',
        }
      }
    ]
  };

  render(){
    return (
      <div id="timeline">
        {this.state.posts.map(post =>(
          <div key={post.id} class="post">
            <div class="infopost">
              <img src={PessoaDefault} alt=""/>
              <div class="namedata">
                <strong>{post.nome}</strong>
                <h1>{post.data}</h1>
              </div>
            </div>

            <div class="conteudopost">
              {post.conteudopost}
            </div>
            <div key={post.comments.id} class="comments">
              <img src={PessoaDefault} alt=""/>
              <div class="conteudocomment">
                <strong>{post.comments.nome}</strong>
                {post.comments.conteudocomment}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TimeLine;