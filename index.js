
//Resposta da Questão 1

function e_primo(number){
    if (number <= 1){
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function listar_primos(inicio, fim) {
    const primos = [];
  
    for (let numero = inicio; numero <= fim; numero++) {
      if (e_primo(numero)) {
        primos.push(numero);
      }
    }
  
    return primos;
  }
  const primos_de_1_a_1000 = listar_primos(1, 1000);
    console.log(primos_de_1_a_1000);
  


  // Resposta da Qestão 2

   function validar_senha(password) {
    if (password.length < 8) {
        alert('Senha muito curta')
      return false;
    }
  
    
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;
  
    if (!uppercaseRegex.test(password)){
        alert('Não há letras maiusculas')
        return false;
    }

    if(!lowercaseRegex.test(password)){
        alert('Não há letras minusculas')
        return false;
    }

    if(!numberRegex.test(password)) {
        alert('Não há numeros')
      return false;
    }
  
    alert('Senha Valida')
    return true;
  }

  //Resposta da Questão 3
  
  function calcular_fatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  
  }
  console.log(calcular_fatorial(1));
  console.log(calcular_fatorial(2));
  console.log(calcular_fatorial(3));
  console.log(calcular_fatorial(4));
  console.log(calcular_fatorial(5));
  console.log(calcular_fatorial(6));
  console.log(calcular_fatorial(7));
  console.log(calcular_fatorial(8));
  console.log(calcular_fatorial(9));
  console.log(calcular_fatorial(10));


  //Resposta da Questão 4

  function e_quadrado_perfeito(numero) {
    const raiz = Math.sqrt(numero);
  
    if (Number.isInteger(raiz)) {
      return true;
    } else {
      return false;
    }
  }
  

  
  