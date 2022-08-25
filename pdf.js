const pdf = require('html-pdf-node')
const ejs = require('ejs')
const html_pdf = require('html-pdf')


var pedidoHtml = {

    entidade: '60abdd68ba09b91b294d9a16',
    grupoeconomico: { _id: '60abde1755174c9edcb468b8', nome: 'Geral' },

    empresa: {
        _id: '60abe5f3d700163e6e519e67',
        sigla: '016001',
        nome: 'COOPERATIVA AGROPECUARIA CENTRO SERRANA',
        fantasia: 'REDE COOPE - ATACADO',
        cnpj: '27.942.085/0060-33',
        endereco: 'R HERMANN MIERTSCHINK, 26',
        numero: '',
        cidade: 'SANTA MARIA DE JETIBA',
        bairro: 'CENTRO',
        estado: 'ES',
        cep: '29645-000',
        inscricaoEstadual: '083603794'
    },

    fornecedor: {
        _id: '60ae9e6ddd4810b365854939',
        cnpj: '43.214.055/0001-07',
        nome: 'MARTINS COMERCIO E SERVICOS DE DISTRIBUI',
        fantasia: 'MARTINS COMERCIO E S',
        endereco: 'AV. JOSE ANDRAUS GASSANI,5400',
        numero: '',
        cidade: 'UBERLANDIA',
        bairro: 'DISTRITO INDUSTRIAL',
        estado: 'MG',
        cep: '38402-324',
        fone: '32181122',
        fax: '',
        inscricaoEstadual: '7025134600075',
        email: 'ataide90.mr@gmail.com'
    },

    codigoErp: '140714',
    data: '05/01/2022',
    dataPrevisaoEntrega: '2022-01-05T03:00:00.000Z',
    dataPrevisaoFaturamento: '2022-01-05T03:00:00.000Z',
    observacao: '',
    tipoFrete: '',
    total: 1485,
    icmsTotal: 0,
    ipiTotal: 0,
    freteTotal: 0,
    valorTotal: 1485,
    produtos: [
        {
            _id: '61d56596f2deb0030d41e013',
            entidade: '60abdd68ba09b91b294d9a16',
            grupoeconomico: '60abde1755174c9edcb468b8',
            fornecedor: '60ae9e6ddd4810b365854939',
            empresa: '60abe5f3d700163e6e519e67',
            produto: {nome: 'produto 1', codigo: 1233, codigoFabricante: 1234444},
            quantidade: 300,
            quantidadeEntregue: 0,
            quantidadeBaixado: 0,
            quantidadePendente: 300,
            dataPrevisaoEntrega: '2022-01-05T03:00:00.000Z',
            preco: 4.95,
            desconto: 0,
            valor: 4.95,
            totalValor: 1485,
            ipi: 0,
            icms: 0,
            totalIcms: 0,
            totalIpi: 0,
            total: 1485,
            itemErp: '0001',
            origem: 'automatica',
            status: 'integrado',
            produtofornecedor: {codigo: 984018, unidadeMedida: 'UN', quantidadePendente: 0, preco: 100, desconto: 2}
        }
    ],

    comprador: { codigo: '001178', nome: 'Jose Antonio Capucho', email: undefined },
    operacao: { _id: '616755fef389159477c3e57d', codigo: '51' },
    condicaopagamento: {
        _id: '6196aa94cd4e81cba684a65e',
        codigo: '005',
        nome: 'A PRAZO 030 DIAS'
    },
}

ejs.renderFile('./index.html', {pedido: pedidoHtml}, (err, html) => {
    if(err) {
        console.log(err);
    } else {
        html_pdf.create(html, {}).toFile('./pedidoTeste.pdf', (err, res) => {
            if(err) {
                console.log('ERRO');
            } else {
                console.log(res);
            }
        })
    }
})


//=======================================================================================
// gerarPDF = () => {
//     const { jsPDF } = require("jspdf"); // will automatically load the node version

//     const doc = new jsPDF();
//     doc.text("Hello world!", 10, 10);
//     doc.save("a4.pdf"); // will save the file in the current working directory
// }

// gerarPDF()
//=======================================================================================

//============================================================================================
// //monta html
// const html = ejs.renderFile('./index.ejs', { pedido: pedidoHtml },)

// //generatePdf
// let arquivo = pdf.generatePdf({ content: html }, { format: 'A4', printBackground: true, })


// //criação do blob
// const downloadFile = (blob, fileName) => {
//     const download = document.createElement('a');
//     // crie um blobURI apontando para o nosso Blobs
//     download.href = URL.createObjectURL(blob);
//     download.download = fileName;
//     // algum navegador precisa que a âncora esteja no documento
//     document.body.append(download);
//     download.click();
//     download.remove();
//     // caso o Blob use muita memória
//     setTimeout(() => URL.revokeObjectURL(download.href), 7000);
// };

// downloadFile(new Blob([arquivo], { type: 'application/pdf' }),
//     `Pedido de Compra.pdf`
// );
//=============================================================================================
