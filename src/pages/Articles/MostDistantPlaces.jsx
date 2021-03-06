/* eslint-disable max-len */
import React from 'react';

const MostDistantPlaces = () => (
  <article className="article">
    <h1>Pontos terrestres mais distantes</h1>
    <p>
      Antes de começar sobre o artigo, quero falar um pouco sobre como encontrei esses dados. Numa busca por geodados para uma pesquisa, acabei achando o Atlas da Malária disponível neste
      {' '}
      <a target="_blank" rel="noreferrer" href="https://malariaatlas.org/explorer/#/">link</a>
      {' '}
      que contêm informações sobre a disseminação de doenças em regiões tropicais. Entre as camadas do catálogo, há uma camada acerca da acessibilidade da população a cidades em 2015 e acessibilidade a serviços de saúde em 2019. Estas camadas foram produzidas pelo projeto Atlas da Malária de Oxford a partir do trabalho publicado por
      {' '}
      <a target="_blank" rel="noreferrer" href="doi:10.1038/nature25181">Weiss et al 2018</a>
      . Na descrição da camada de 2019 possui a metodologia utilizada,
      {' '}
      <a target="_blank" rel="noreferrer" href="https://developers.google.com/earth-engine/datasets/catalog/Oxford_MAP_accessibility_to_healthcare_2019#description">disponível neste link</a>
      .
    </p>
    <p>
      Como toda metodologia, podem haver erros na captura de dados. E foi o que observei na distribuição de serviços de saúde no site que utilizaram, o
      {' '}
      <a target="_blank" rel="noreferrer" href="healthsites.io">healthsites.io</a>
      . Existem pontos de saúde que estão no meio do nada. Possívelmente um erro de precisão das coordenas ou pontos colocados no centróide poligonal de um município. Portanto, os pontos que demonstro a seguir não devem ser considerados como verdade absoluta.
    </p>
    <p>
      Para achar os pontos mais distantes de cidades e seus serviços de saúde, eu utilizei a camada providenciada pelo Projeto no
      {' '}
      <a target="_blank" rel="noreferrer" href="https://code.earthengine.google.com/?scriptPath=Examples%3ADatasets%2FOxford_MAP_accessibility_to_healthcare_2019">Earth Engine</a>
      {' '}
      e alterei o valor mínimo e máximo da camada raster para obter o maior valor encontrado dentro de um continente ou país. Vale ressaltar que esses dados não consideram que você poderia pegar um avião ou helicóptero para chegar no local. Apenas andando ou com acesso motorizado, seja por hidrovia ou rodovia.
    </p>
    <p>Existem duas camadas no mapa disponibilizado abaixo. Uma com pontos laranjas que fazem parte da pesquisa de 2019 e a outra camada de 2015 pode ser acessada clicando no botão superior esquerdo do mapa.</p>
    <p>Abaixo segue o ranking dos pontos terrestres mais distantes em 2019 por transporte motorizado separado por Continente</p>
    <iframe title="mapa de pontos remotos" src="https://www.google.com/maps/d/embed?mid=1sZ47U_JZivj9mkbWdGULBoDYTlzEn34h" width="90%" height="480px" />
    <h2>Ranking pontos terrestres mais distantes a serviços de saúde(2019)</h2>
    <ol>
      <li>
        <h3 className="list-title"> América do Norte - Groelândia</h3>
        <p>14 dias, 9 horas e 49 minutos</p>
        <p>No meio desta ilha congelada situa-se o ponto terrestre mais remoto desta pesquisa! Além de remoto é um local que chega facilmente abaixo de -34 graus Celsius e uma geomorfologia que apresentaria grandes desafios pois o ambiente glacial pode ser traiçoeiro com seus precipícios escondidos chamados de crevasses.</p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Greenland_Ilulissat-20.jpg/1024px-Greenland_Ilulissat-20.jpg" alt="vista aérea da geleira de Ilulissat. Crédito: " />
        <p>14 dias de caminhada neste terreno. Boa sorte! 😅 Foto tirada por Michael Haferkamp em 1999.</p>
      </li>
      <li>
        <h3 className="list-title"> Ásia - Rússia</h3>
        <p>5 dias, 1 hora e 10 minutos</p>
        <p>
          Nas proximidades do Planalto Syverma, em um clima subártico continental está o ponto mais remoto da Ásia. O vilarejo mais próximo fica a 5 dias de viagem sem parada. A temperatura média ao longo do ano fica entre -36 e 16 graus Celsius. Algumas áreas deste planalto podem ter até um quilômetro de
          {' '}
          <span>permafrost</span>
          !
        </p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE_%D0%9F%D1%83%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B0-3.jpg/1024px-%D0%9F%D0%BB%D0%B0%D1%82%D0%BE_%D0%9F%D1%83%D1%82%D0%BE%D1%80%D0%B0%D0%BD%D0%B0-3.jpg" alt="vista aérea do Planalto de Putorana, ao norte do Planalto Syverma" />
        <p>Além das dificuldades físicas para chegar lá, é provável que seja proibido a visita por estrangeiros. Foto tirada por Olga Chuma em 2012</p>
      </li>
      <li>
        <h3 className="list-title"> África - Saara</h3>
        <p>4 dias, 20 horas e 38 minutos</p>
        <p>
          No meio de uma infinidade de areia e com a umidade do ar podendo chegar a 7%, o ponto mais remoto da África fica no meio do deserto do Saara, no Sudão. Conferindo o
          {' '}
          <a target="_blank" rel="noreferrer" href="https://www.loc.gov/resource/g8310.ct003693/">mapa do Sudão Anglo-Egípcio de 1928</a>
          , observa-se nas proximidades um ponto escrito
          {' '}
          <i>Ain el Kiyeh?</i>
          {' '}
          como a localização de um possível oásis e o oásis Merga ao sul do ponto. Merga, neste mapa de 1928 é notável por ser o ponto de encontro de várias rotas de caravanas históricas.
        </p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/GebelUweinat.jpg" alt="Paisagem rochosa do Deserto do Saara" />
        <p>Imagem de Gebel Uweinat  que fica a alguns quilômetros ao norte do ponto remoto. Uweinat é o local que faz fronteira tripla com o Egito, Sudão e Líbia. Foto tirada por Roland Unger em 2011.</p>
      </li>
      <li>
        <h3 className="list-title"> América do Sul - Amazônia</h3>
        <p>4 dias e 8 horas</p>
        <p>
          No meio da Mata amazônica, próximo da tríplice fronteira Brasil-Suriname-Guiana, encontra-se o ponto mais remoto da América do Sul. Em uma área plana cercada por pequenas elevações de 40 metros em média. Este ponto fica a Oeste da aldeia indígena de Kwamalasamutu, no Suriname. nesta região turistas visitam o sítio arqueológico de Werehpai a 10 quilômetros ao Leste da vila. Neste ponto mais remoto não foi encontrado informações relevantes, porém, arqueólogos estão começando a realizar pesquisas demonstrando como a Amazônia pré-colombiana foi um lugar densamente povoado, como mostra o artigo da
          {' '}
          <a target="_blank" rel="noreferrer" href="https://www.nationalgeographic.com/news/2018/03/amazon-jungle-ancient-population-satellite-computer-model/">National Geographic</a>
          .
        </p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Amazon_River_in_Brazil.jpg/800px-Amazon_River_in_Brazil.jpg" alt="Rio meandrante na floresta amazônica visto do espaço" />
        <p>Vista do espaço do desafio que é preciso atravessar para chegar neste ponto. Foto tirada pelo astronauta Alexander Gest da Estação Espacial Internacional.</p>
      </li>
      <li>
        <h3 className="list-title"> Oceania - Indonésia</h3>
        <p>2 dias e 23 horas</p>
        <p>No coração da ilha de Nova Guiné, em uma densa floresta, encontra-se o ponto mais remoto da Oceania. Este ponto demonstra como é falho os parâmetros da pesquisa utilizada por conter um aeroporto há alguns quilômetros de distância. retirando esta variável, é quase inexistente um sistema de estradas na ilha. O que faz com que demore quase 3 dias para chegar a um posto médico.</p>
        <img className="ranking-img" src="https://www.kew.org/sites/default/files/2020-08/New%20Guinea%20is%20one%20of%20the%20few%20places%20left%20where%20the%20rainforest%20is%20unbroken%20as%20far%20as%20the%20eye%20can%20see%20%28Tamrau%20Mountains%2C%20West%20Papua%2C%20Indonesia%29%20Photo%20RBG%20Kew..jpg" alt="vista das montanhas da ilha de Nova Guiné" />
        <p>Além de haver uma extensa natureza preservada, a ilha de Nova Guiné possui muitas espécies de fauna e flora endêmicas. Foto tirada por William J. Baker</p>
      </li>
      <li>
        <h3 className="list-title"> América Central - Nicarágua</h3>
        <p>1 dia, 8 horas e 30 minutos</p>
        <p>Localizado na Reserva da Biosfera Bosawás, o ponto mais remoto da América Central está localizado no topo de uma montanha no coração da reserva! Considerado Reserva da Biosfera pela UNESCO em 1997. Grande parte desta reserva permanece inexplorada e a diversidade de fauna e flora é um sonho para qualquer biólogo!</p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/2/22/Territorio_ind%C3%ADgena%2C_Mayagna_Sauni_Bas%2C_en_La_Reserva_de_la_Biosfera_BOSAWAS._%28Rio_Uly%29._Margen_isquierda._Siuna%2C_RAAN%2C_Nic._-_panoramio.jpg" alt="Rio Uly na reserva de Bosawas" />
        <p>Foto tirada por Richard Salgado em 2013 no território indígena de Mayagna Sauni Bas.</p>
      </li>
      <li>
        <h3 className="list-title"> Europa - Jiehkkevárri</h3>
        <p>21 horas e 15 minutos</p>
        <p>Este ponto é considerado o ponto mais remoto da Europa Continental sem considerar a Rússia. Localizado em uma declividade próxima ao pico do Jiehkkevárri, este ponto é considerado o mais remoto devido a declividade acentuada do pico. Os parâmetros da pesquisa levam em consideração a declividade como locais mais lentos de serem ultrapassados. Para chegar nesse ponto é recomendado que seja feito por montanhistas experientes.</p>
        <img className="ranking-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jiehkkev%C3%A1rri_%26_Lyngsdalen%2C_2011_June.jpg/1024px-Jiehkkev%C3%A1rri_%26_Lyngsdalen%2C_2011_June.jpg" alt="vista da montanha Jiehkkevárri" />
        <p>Foto tirada por Simo Räsänen em 2011</p>
      </li>
    </ol>
    <footer>
      <p>
        Espero que tenham gostado!
        OBSERVAÇÃO: Nem cogitem em fazer essas trilhas! 😂
      </p>
    </footer>
  </article>
);

export default MostDistantPlaces;
