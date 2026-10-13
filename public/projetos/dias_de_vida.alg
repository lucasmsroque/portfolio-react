algoritmo "Calculadora de Dias de Vida"
// Programa que calcula quantos dias você já viveu
// Autor: Claude
// Data: 04/02/2026

var
   diaNasc, mesNasc, anoNasc: inteiro
   diaAtual, mesAtual, anoAtual: inteiro
   diasVividos, diasAno, i: inteiro
   ehBissexto: logico

inicio
   // Data atual
   diaAtual <- 4
   mesAtual <- 2
   anoAtual <- 2026
   
   // Leitura da data de nascimento
   escreval("========================================")
   escreval("  CALCULADORA DE DIAS DE VIDA")
   escreval("========================================")
   escreval("")
   escreva("Digite o dia do seu nascimento (1-31): ")
   leia(diaNasc)
   escreva("Digite o mês do seu nascimento (1-12): ")
   leia(mesNasc)
   escreva("Digite o ano do seu nascimento: ")
   leia(anoNasc)
   escreval("")
   
   // Inicializa contador
   diasVividos <- 0
   
   // Calcula dias restantes do ano de nascimento
   escolha mesNasc
      caso 1
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 2
         diasVividos <- diasVividos + (28 - diaNasc)
         se ((anoNasc % 4 = 0) e (anoNasc % 100 <> 0)) ou (anoNasc % 400 = 0) entao
            diasVividos <- diasVividos + 1
         fimse
      caso 3
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 4
         diasVividos <- diasVividos + (30 - diaNasc)
      caso 5
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 6
         diasVividos <- diasVividos + (30 - diaNasc)
      caso 7
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 8
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 9
         diasVividos <- diasVividos + (30 - diaNasc)
      caso 10
         diasVividos <- diasVividos + (31 - diaNasc)
      caso 11
         diasVividos <- diasVividos + (30 - diaNasc)
      caso 12
         diasVividos <- diasVividos + (31 - diaNasc)
   fimescolha
   
   // Adiciona meses restantes do ano de nascimento
   para i de (mesNasc + 1) ate 12 faca
      escolha i
         caso 1, 3, 5, 7, 8, 10, 12
            diasVividos <- diasVividos + 31
         caso 4, 6, 9, 11
            diasVividos <- diasVividos + 30
         caso 2
            diasVividos <- diasVividos + 28
            se ((anoNasc % 4 = 0) e (anoNasc % 100 <> 0)) ou (anoNasc % 400 = 0) entao
               diasVividos <- diasVividos + 1
            fimse
      fimescolha
   fimpara
   
   // Adiciona anos completos
   para i de (anoNasc + 1) ate (anoAtual - 1) faca
      se ((i % 4 = 0) e (i % 100 <> 0)) ou (i % 400 = 0) entao
         diasVividos <- diasVividos + 366
      senao
         diasVividos <- diasVividos + 365
      fimse
   fimpara
   
   // Adiciona dias do ano atual
   para i de 1 ate (mesAtual - 1) faca
      escolha i
         caso 1, 3, 5, 7, 8, 10, 12
            diasVividos <- diasVividos + 31
         caso 4, 6, 9, 11
            diasVividos <- diasVividos + 30
         caso 2
            diasVividos <- diasVividos + 28
            se ((anoAtual % 4 = 0) e (anoAtual % 100 <> 0)) ou (anoAtual % 400 = 0) entao
               diasVividos <- diasVividos + 1
            fimse
      fimescolha
   fimpara
   
   diasVividos <- diasVividos + diaAtual
   
   // Exibe resultado
   escreval("========================================")
   escreval("  RESULTADO")
   escreval("========================================")
   escreval("")
   escreval("Você nasceu em: ", diaNasc, "/", mesNasc, "/", anoNasc)
   escreval("Data de hoje: ", diaAtual, "/", mesAtual, "/", anoAtual)
   escreval("")
   escreval("🎉 Você já viveu: ", diasVividos, " dias!")
   escreval("")
   escreval("Isso equivale a aproximadamente:")
   escreval("- ", diasVividos div 7, " semanas")
   escreval("- ", diasVividos div 30, " meses")
   escreval("- ", diasVividos div 365, " anos")
   escreval("")
   escreval("========================================")

fimalgoritmo
