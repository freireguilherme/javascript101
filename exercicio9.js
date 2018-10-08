var desconto = function(combustivel, quantidade){
    var valor = 0;
    if(combustivel == 'A'){
        if(quantidade > 20)
            valor = quantidade*0.05;
        else
            valor = quantidade*0.03;
    }
    if(combustivel == 'G'){
        if(quantidade > 20)
            valor = quantidade*0.06;
        else
            valor = quantidade*0.04;
    }

    return valor;
};

    var conta = function(combustivel, quantidade){
        var total = 0;
        if(combustivel == 'A'){
            total = 2.19*quantidade;
            total = total - desconto(combustivel,quantidade);
        }
        if(combustivel == 'G'){
            total = 2.99*quantidade;
            total = total - desconto(combustivel,quantidade);
        }

        console.log("O valor da sua conta é %.2d", total.toFixed(2));
    };

    var conta1 = {combustivel:'A', quantidade:20};
    var conta2 = {combustivel:'G', quantidade:20};

    conta(conta1.combustivel, conta1.quantidade);
    conta(conta2.combustivel, conta2.quantidade);