//atividade oito
//aluno: céu do nascimento

function isMagicSquare(matrix) {
    const n = matrix.length;
    
 //faz a soma da primeira linha, e o resultado vai ser usado pra referência
    let sumReference = 0;
    for (let i = 0; i < n; i++) {
      sumReference += matrix[
      sumReference += matrix][i];
    }

//checa se a soma das linhas, das colunas e das diagonais são iguais a soma da referência, no caso, a primeira linha anteriormente dita
    for (let i = 0; i < n; i++) {
      let rowSum = 0;
      let colSum = 0;
      for (let j = 0; j < n; j++) {
        rowSum += matrix[i][j];
        colSum += matrix[j][i];
      }
      
        rowSum += matrix[i][j];
        col
  if (rowSum !== sumReference || colSum !== sumReference) {
        return false;
      }
    }
    
//checa a soma da diagonal principal
    let diagSum = 0;
    for (let i = 0; i < n; i++) {
      diagSum += matrix[i][i];
    }
    
      diag
  if (diagSum !== sumReference) {
      return false;
    }
    
    
    }
    
//checa a soma da diagonal 2
    let secDiagSum = 0;
    for (let i = 0; i < n; i++) {
      secDiagSum += matrix[i][n - 1 - i];
    }
    if (secDiagSum !== sumReference) {
      return false;
    }
    
//se foi aprovado em todas as checagens, significa que é um quadrado mágico
    return true;
  
  // ex:
  const matriz =
    [
    [
  2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
  ];
  
  console.log(isMagicSquare(matriz)); // tem que retornar true(verdadeiro)