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
        var selecao = prompt(texto);

        //Verificação da função escolhida:
        switch(selecao){
            case "1":
                var resultado = Somar();
                break;

            case "2":
                var resultado = Subtrair();
                break;

            case "3":
                var resultado = Multiplicar();
                break;

            case "4":
                var resultado = Dividir();
                break;

            case "0":
                console.log("Sair");
                break;
            
            default:
                alert("Nenhuma opção selecionada!");
                break;
        }

        //Exibição da respostas:
        alert(resultado);

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
function Somar(){
    //Pedir valores:
    var valores = PedirNumeros();
    //Retorno da função formatada:
    return `${valores[0]} + ${valores[1]} = ${valores[0] + valores[1]}`;
}

//Função de soma de dois valores:
function Subtrair(){
    //Pedir valores:
    var valores = PedirNumeros();

    //Retorno da função formatada:
    return `${valores[0]} - ${valores[1]} = ${valores[0] - valores[1]}`;
}

//Função de soma de dois valores:
function Multiplicar(){
    //Pedir valores:
    var valores = PedirNumeros();

    //Retorno da função formatada:
    return `${valores[0]} × ${valores[1]} = ${valores[0] * valores[1]}`;
}

//Função de soma de dois valores:
function Dividir(){
    //Pedir valores:
    var valores = PedirNumeros();

    //Retorno da função formatada:
    return `${valores[0]} ÷ ${valores[1]} = ${valores[0] / valores[1]}`;
}

//Chamada da função de menu:
menu();