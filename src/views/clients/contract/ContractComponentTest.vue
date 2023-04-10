<template>
    <ion-page>
        <ion-content>
           
           <div class="contractHtml">
            <div class="container d-flex flex-column justify-content-center mt-1" id="capture">
                <div class=" container-fluid d-flex flex-column justify-content-center align-items-center" id="capture-1">
                    
                        <div class="d-flex">
                            <img class="logo" src="@/assets/img/logo.png" alt="logo">
                        </div>
                  
                        <h5 class="contract-title mt-2">CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE<br>
                        MONITORAMENTO ELETRÔNICO</h5>
                </div>
            
                <br>
                <br>
                    <h5><b>I – DOS CONTRATANTES</b></h5>
                    <br>
                    <p><b>CONTRATADO (a):</b>Águia seg, pessoa Jurídica de direito privado, 
                        localizado na Av Terezinha campos, Nº 120, CEP 56316010 Bairro João 
                        de Deus na cidade de Petrolina, no estado de Pernambuco, inscrito no 
                        CNPJ/MF 36.197.353/0001-70 neste ato representada pelo seu 
                        Proprietário/Administrador Paulo henriqiue cordeiro soares rodrigues 
                        portador do RG/CNH Nº 8817773 Órgão Emissor SDS e CPF 709.697.144-08 
                        telefone nº(87)99652-4057 doravante denominado simplesmente contratado.</p>
                    <p><b>CONTRATANTE:</b> <b> {{ client.name }} </b>, pessoa física
                        (<span v-if="client.type == 'PF'">X</span>) ou Jurídica (<span v-if="client.type == 'PJ'">X</span>) de direito privado, residente ou localizado 
                        na <b> {{ client.houses[0].street }} </b>  , Nº <b> {{ client.houses[0].number }} </b> , 
                        CEP <b> {{ client.houses[0].cep }} </b> Bairro <b> {{ client.houses[0].district }} </b> na cidade de Petrolina, 
                        no estado de Pernambuco, inscrito no CPF/CNPJ/MF <b> {{ client.cpf_cnpj }} </b> 
                        neste ato representada pelo seu Proprietário/Administrador 
                        <b> <span v-if="client.type == 'PF' "> {{ client.name }} </span> </b> portador do 
                        RG/CNH Nº ______________________ Órgão Emissor ______________________ e 
                        CPF <b> <span v-if="client.type == 'PF' "> {{ client.cpf_cnpj }} </span> </b> telefone nº <b> <span v-if="client.type == 'PF' "> {{ client.phone }} </span> </b> 
                        doravante denominado contratante;</p>
                    <p>Resolveram livre e espontaneamente firmar um contrato de prestação de 
                        serviços de <b>Monitoramento Eletrônico 24 horas</b>, tudo conforme cláusulas e 
                        condições seguintes:</p>       
                    <br>
                    <h5><b>II - DO OBJETO DESTE CONTRATO</b></h5>
                    <br>   
                    <p>O objetivo deste contrato é a prestação de serviços especializados de 
                        <b>Monitoramento Eletrônico 24 horas</b> mediante atendimento realizado no evento 
                        do disparo do sistema monitorado. A quantidade de pessoal a ser utilizada na
                        execução dos serviços, será estipulada pela Contratada</p>
                    <p><b>Parágrafo primeiro:</b> - Os serviços serão executados exclusivamente na área interna 
                        do bem patrimonial da Contratante, localizada na Rua <b> {{ client.houses[0].street }} </b>,
                        Nº <b> {{ client.houses[0].number }} </b>, Bairro <b> {{ client.houses[0].district }} </b>, CEP <b> {{ client.houses[0].cep }} </b> Petrolina -
                        PE, diariamente, no período de 24(vinte e quatro) horas, excluída, em quaisquer 
                        circunstâncias, perseguições ou detenções em áreas públicas.</p>   
                    <p><b>Parágrafo segundo:</b> - Os serviços de <b>monitoramento Eletrônico</b> serão executados em 
                        conformidade com o acionamento do sistema de alarme efetuado pela Contratante</p>     
                    <br>
                    <h5><b>III – DO PAGAMENTO</b></h5>
                    <br>
                    <p>Pelos serviços contratados, o <b>Contratante (CLIENTE)</b> pagará ao <b>Contratado</b>  (prestador de serviços)
                        a quantia mensal de <b>R$ {{ client.contracts[0].value }} </b>  (__________________________________) até o 
                        dia <b> {{ client.contracts[0].payday }} </b> do 1º mês <b>subsequente</b> ao vencido, através de faturamento e emissão de 
                        cobrança via recibo, boleto ou outro meio aceito no mercado.</p>
                    <p><b>Parágrafo único:</b> O valor do pagamento será reajustado na renovação do contrato a cada 12
                         meses, aplicando-se o mesmo percentual adotado no dissídio coletivo da categoria de 
                         vigilância, ou em qualquer tempo com a comprovação no aumento dos custos do serviço.</p>
                    <br>
                    <h5><b>IV – DO PRAZO</b></h5>
                    <br>
                    <p>O prazo deste contrato é por 12 meses, iniciando-se no dia <b> {{ dateDayOfContract }} </b> de <b> {{ dateMonthOfContract }} </b> de
                        2023</p> 
                    <p><b>Parágrafo único:</b> - A Renovação se dará automaticamente, se não houver manifestação de
                         uma das partes de encerra-lo, onde a contratada efetuará a emissão da renovação do 
                         presente contrato.</p>
                    <p><b>Parágrafo segundo:</b> – Em caso de necessidade de uma das partes de encerrar o contrato antes
                         do final do prazo contratual, deve emitir aviso prévio por escrito, com 30 (trinta) dias 
                         de antecedência. A parte que desistir assumirá duas mensalidades extras por quebra de 
                         contrato.</p>
                    <br>
                    <h5><b>SISTEMAS DE MONITORAMENTO</b></h5>
                    <br>
                    <h5><b>V – OUTRAS OBRIGAÇÕES DA CONTRATANTE</b></h5>
                    <br>
                    <p>1) –(Opcional) Deixar à disposição da Contratada cópia das chaves de acesso interno do local protegido para eventuais emergenciais sim (   ) ou não (   ). 
                    <br><br>2) – Manter uma linha telefônica para comunicação direta necessária ao sistema de monitoramento.
                    <br><br>3) - O acionamento do alarme é de responsabilidade da Contratante.
                    <br><br>4) – Informar à Contratada dos problemas de ordem técnica no sistema eletrônico monitorado.
                    </p>
                    <br>
                    </div>
                    <div class="container d-flex flex-column justify-content-center" id="capture-2">
                    <h5><b>VI – OUTRAS OBRIGAÇÕES DA CONTRATADA</b></h5>
                    <br>
                    <p>
                        1) – Providenciar a manutenção do sistema eletrônico monitorado, dentro do prazo de 72 (setenta e duas) horas úteis após a comunicação da Contratante.
                        <br><br>2) – Manter com exclusividade o vínculo empregatício de todo o pessoal designado para atender o monitoramento, o qual será identificado com vestimenta uniformizada.
                        <br><br>3) – Efetuar o atendimento de emergência ao evento do disparo do sistema de <b>monitoramento eletrônico</b>, dentro do prazo de 20 (vinte minutos) salvo motivo de força maior decorrente das condições do trafego urbano.

                    </p>
                    <br>
                    <h5><b>VII – INFRAÇÃO CONTRATUAL</b></h5>
                    <br>
                    <p>
                        O não cumprimento de qualquer cláusula deste contrato ensejará a rescisão motivada 
                        deste, sujeitando a parte infratora à multa de 20% (vinte por cento) calculada sobre
                        uma anuidade da mensalidade prevista na cláusula III, sem prejuízo da indenização por
                        perdas e danos decorrentes do ato infrator
                    </p>
                    <br>
                    <h5><b>VIII – DO FORO</b></h5>
                    <br>
                    <p>
                        Fica eleito o foro da Comarca de Petrolina, para dirimir todas as questões oriundas
                        deste contrato, com renúncia de qualquer outro, por mais privilegiado que seja.
                    </p>
                    <p>
                        Assim, por estarem justos e contratos, firmam o presente contrato em duas vias de 
                        igual teor e forma.
                    </p>
                    <br>
                    <br>
                    <p style="text-align: center;"> Petrolina, {{ dateDayOfContract }} de {{ dateMonthOfContract }} de 2023</p>
                    <br>
                    <br>
                    <p style="text-align: center;">
                        _______________________________________
                                <br> CONTRATANTE:

                    </p>
                    <br>
                    <p style="text-align: center;">
                        ________________________________________
                                    <br>CONTRATADA:

                    </p>
                </div>
                <div class="container-fluid d-flex justify-content-center">
                    <ion-button @click="generatePDF()">Gerar PDF</ion-button>
                </div>
           </div>
                
            
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas'
import { mapMutations ,mapActions, mapState } from 'vuex';


export default defineComponent({
    name: 'ContractComponentTest',
    computed: {
        ...mapState('client', ['client', 'dateDayOfContract', 'dateMonthOfContract'])
    },
     mounted() {
        
        console.log(this.$route.params.id)
    },

    async beforeCreate() {
        console.log(this.$route.params.id)
        console.log('passou aqui')
        await this.getClient(this.$route.params.id);
    },
    async ionViewWillEnter(){
        
        console.log(this.client);
    },
    methods: {
       
       
        async generatePDF(){
           
            const doc = new jsPDF();
            doc.setFont('Arial');
            doc.setFontSize(11);

            const html: any = document.querySelector("#capture-1");
            const html2: any = document.querySelector("#capture-2");

            await html2canvas(html, {
                allowTaint: true,
                useCORS: true,
                scale: 1
            }).then(canvas => {
             document.body.appendChild(canvas)
             console.log(canvas)
             const img = canvas.toDataURL('image2/png');
             doc.addImage(img, 'PNG', 7, 13, 195, 275);
             
            })

            doc.addPage()

            await html2canvas(html2, {
                allowTaint: true,
                useCORS: true,
                scale: 1
            }).then(canvas =>{
                document.body.appendChild(canvas);
                const img = canvas.toDataURL('image3/png');
                doc.addImage(img, 'PNG', 7, 13, 195, 175);
                
            })

            //doc.save('Contrato'); 
            console.log(html)
        },

        ...mapActions('client', ['getClient'])
    }

})
</script>

<style scoped>


    body,html, #paper-a4{ 
        display: block !important;
        position: relative !important;
        width: auto !important;
        height: auto !important;
        overflow: visible !important;
       
    }

    #capture{
        display: flex;
        flex-direction: column;
    }

    .contract-title{
    text-align: center;
    }
    .logo{
    height: 120px;
    width: 100px;
    }


</style>