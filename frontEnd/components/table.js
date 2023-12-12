// Server component - Table.js
import styles from './table.module.css';

const Table = ({ filteredData }) => {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.th}>
            <th>Ano</th>
            <th>Região</th>
            <th>UF</th>
            <th>Entidade de Ensino</th>
            <th>Disponível para Download</th>
            <th>Programa</th>
            <th>Grande Area de Conhecimento</th>
            <th>Area de Conhecimento</th>
            <th>Area de avaliação</th>
            <th>Discente</th>
            <th>Projeto</th>
            <th>Grau Acadêmico</th>
            <th>Palavra chave</th>
            {/* <th>Resumo</th> */}
            <th>Linha de pesquisa</th>
            <th>Orientador</th>
            <th>Hyperlink</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className={styles.td}>
              <td>{item.ano}</td>
              <td>{item.regiao}</td>
              <td>{item.uf_ies}</td>
              <td>{item.entidade_ensino}</td>
              <td>{item.disponivel_dowload}</td>
              <td>{item.programa}</td>
              <td>{item.grande_area_conhecimento}</td>
              <td>{item.area_conhecimento}</td>
              <td>{item.area_avaliacao}</td>
              <td>{item.discente}</td>
              <td>{item.projeto}</td>
              <td>{item.grau_academico}</td>
              <td>{item.palavra_chave}</td>
              {/* <td>{item.resumo}</td> */}
              <td>{item.linha_pesquisa}</td>
              <td>{item.orientador}</td>
              <td>{item.hyperlink}</td>
              {/* Adicione outras células conforme necessário */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
