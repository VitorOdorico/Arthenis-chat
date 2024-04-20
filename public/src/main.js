const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const query = exports('/private/query.js')

const client = new Client();

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


//teamplate mensage
client.on('message_create', message => {
    let x = " ";
	if (message.body.toLocaleLowerCase() != x) {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Olá seja bem vindo! eu sou Arthenis seu assistente virtual.');
        client.sendMessage(message.from,"Sobre qual assunto deseja falar? digite o nome do setor responsável");
        client.sendMessage(message.from,"suporte");
        client.sendMessage(message.from,"financeiro");
        client.sendMessage(message.from,"quero contratar");
        // seleciona o setor
        if(message.body.toLocaleLowerCase() == suporte){
            client.sendMessage(message.from, "digite o CPF ou CNJP do titular");

            // recebe o CPF
            let recebeCPForCNJP = message.body;
            // verifica se o cliente possui cadastro
            if("query para encontrar o cliente"){
                //se for valido direcionar para ação
                client.sendMessage(message.from, "certo consegui encontrar seu cadastro");
                //cria a condicional para verificar os cadastros;
                function listaDeContratosAtivos() {
                    sql('SELECT `` FROM clientes; WHERE clientes_contratos ! null  ;');
                }

                if(listaDeContratosAtivos != null){

                    client.sendMessage(message.from, `selecione seu contrato que deseja tratar ${listaDeContratosAtivos.toUpperCase()}`);
                    //verifica o contrato selecionado
                    if(message.body != " "){
                            routes.get('/sectors/SUPORTE/tiposDeServicos.js',(req,res)=>{
                                encaminhaRespostaSUPORTE();
                            });
                    }
                }
            }else{
                client.sendMessage(message.from, "Não encontrei nenhum cadastro nesse CPF/CNPJ, estarei te encaminhando para um atendente");
                //envia para fila do sac
                routes.get('/sectors/SAC/rotinasSAC.js',(req,res)=>{
                    encaminhaRespostaSAC();
                });
            }
        }
	}
});


client.initialize();