$(document).ready(function(){
    var divPai = $('.Linha');
    var btnCriar = $('#criarLinha');
     
    btnCriar.click(function(){
        var Qt_campos = parseInt(document.getElementById("Campos").value,10);
       
        if(Number.isInteger(Qt_campos)){
            document.getElementById('Form').remove();
            divPai.append("<div><p>Digite os valores que deseja somar</p></div>");
            for(i=0; i<Qt_campos; i++){
                divPai.append("<input type='text' class='form-control' id='teste'='Example input placeholder'>");
                document.getElementById('teste').setAttribute('id', i);       
            }
            divPai.append("<button id='soma'>Somar</button>");
            var btnSoma = $('#soma');

            btnSoma.click(function(){
                var error=[];
                let aux=0;
                var i;
                let valor_Campos = new Array();
                for(i=0; i<Qt_campos; i++){
                    if(parseInt(document.getElementById(i).value,10)){
                        valor_Campos.push(parseInt(document.getElementById(i).value,10));
                    }else{ 
                       error.push(i+1);
                    }                 
                }
                if(error.length>0){

                    let mensagem= "Valores incorretos nos inputs: " + error.toString();
                    let titulo= "Inserção não valida"
                    Mensagem(mensagem,titulo);
                
                }else{
                    var soma = Soma(valor_Campos,Qt_campos);
                    let mensagem= "Valor da soma: " + soma ;
                    let titulo= "Inserção não valida"
                    Mensagem(mensagem,titulo);
  
                }
             
            });
        }else{
                let mensagem= "Insira um numero de tabelas validas" ;
                let titulo= "Valor Invalido"
                Mensagem(mensagem,titulo);
        }
       
     
    });
     
    });
    
    function Soma(valores, quantidade){
        let soma=0
        for(i=0;i<quantidade; i++){
           // console.log(valor_Campos[i]);
            soma = soma + valores[i];

        }
        return soma;
    }
    function Mensagem(mensagem, titulo){
        var divTitulo = document.getElementById("TituloModal");
        var divtexto = document.getElementById("textoModal");
       
        divTitulo.innerHTML  = "<p>"+titulo+"</p>";
        divtexto.innerHTML  = "<p>"+ mensagem +"</p>";
        $("#Modal").modal() 
        
    }