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
                console.log("Somar");
                break;

            case "2":
                console.log("Subtrair");
                break;

            case "3":
                console.log("Multiplicar");
                break;

            case "4":
                console.log("Dividir");
                break;

            case "0":
                console.log("Sair");
                break;
            
            default:
                alert("Nenhuma opção selecionada!");
                break;
        }
    }while(selecao != 5);
}

//Chamada da função de menu:
menu();