//Função de exibição de menu e chamada:
function menu(){
    //Sistema de repetição:
    do{
        //Criação da constante com o menu:
        const texto = `${'='.repeat(15)} CALCULADORA ${'='.repeat(15)}` +
                    `\n1 ${'.'.repeat(70)} Somar` +
                    `\n2 ${'.'.repeat(70)} Subtrair` +
                    `\n3 ${'.'.repeat(70)} Multiplicar` +
                    `\n4 ${'.'.repeat(70)} Dividir` +
                    `\n0 ${'.'.repeat(70)} Sair`;

        //Pedido da função desejada:
        var selecao = parseInt(prompt(texto));

        //Verificação da função escolhida:
        if(selecao == 0){
            alert("Você está saindo!");
        }
        else if(selecao >= 1 && selecao <= 4){
            //Pedido dos valores:
            var valores = PedirNumeros();

            //Teste da função correta:
            if(selecao == 1)
                var resultado = Somar(valores);
            else if(selecao == 2)
                var resultado = Subtrair(valores);
            else if(selecao == 3)
                var resultado = Multiplicar(valores);
            else
                var resultado = Dividir(valores);
            
            //Exibição do resultado:
            alert(resultado);
        }
        else{
            alert("Nenhuma opção selecionada!");
        }
    }while(selecao != 0);
}

//Função de pedir os valores:
function PedirNumeros(){
    //Pedido dos dois valores:
    var numero1 = parseFloat(prompt("Digite um número:"));
    var numero2 = parseFloat(prompt("Digite outro número:"));

    //Retorno dos valores pedidos:
    return [numero1, numero2];
}

//Função de soma de dois valores:
function Somar(valores){
    //Retorno da função formatada:
    return `${valores[0]} + ${valores[1]} = ${valores[0] + valores[1]}`;
}

//Função de soma de dois valores:
function Subtrair(valores){
    //Retorno da função formatada:
    return `${valores[0]} - ${valores[1]} = ${valores[0] - valores[1]}`;
}

//Função de soma de dois valores:
function Multiplicar(valores){
    //Retorno da função formatada:
    return `${valores[0]} × ${valores[1]} = ${valores[0] * valores[1]}`;
}

//Função de soma de dois valores:
function Dividir(valores){
    //Retorno da função formatada:
    return `${valores[0]} ÷ ${valores[1]} = ${valores[0] / valores[1]}`;
}

//Chamada da função de menu:
menu();