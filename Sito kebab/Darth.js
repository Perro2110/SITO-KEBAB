
function scontrino() {
 /***********************************************/  
	var scontrino;
	var SNome=paga.Nordine.value;
	var SStringa=paga.Nvia.value;
    var pquantita=  paga.quantitaf.value;
	var pquantita2= paga.quantitaf2.value;
	var pquantita3= paga.quantitaf3.value;
	var pquantita4= paga.quantitaf4.value;
	var pquantita5= paga.quantitaf5.value;
	var pquantita6= paga.quantitaf6.value;
	var pquantita7= paga.quantitaf7.value;
	var pquantita8= paga.quantitaf8.value;	
/************************************************/

if(paga.quantitaf.value>=0 &&paga.quantitaf2.value>=0 &&paga.quantitaf3.value>=0 &&paga.quantitaf4.value>=0 &&paga.quantitaf5.value>=0 &&paga.quantitaf6.value>=0 &&paga.quantitaf7.value>=0 &&paga.quantitaf8.value>=0 ){

scontrino=parseFloat((pquantita*(4.50))+(pquantita2*(10))+(pquantita3*(7.50))+(pquantita4*(2.50))+(pquantita5*(3))+(pquantita6*(5))+(pquantita7*(5.50))+(pquantita8*(8)));		
	if (SNome != "" && SStringa != "")	{
    alert("SCONTRINO: \n___________________________________\n Grazie per aver scelto darth kebab, ordine spedito!! \n in via: "+SStringa+" \n a nome: "+ SNome +"\n__________________Ordine:_______________\nMENU:________________________ \n Menu alla Skywalker x0" +pquantita3+ "\n Menu alla Solo x0" +pquantita2+ "\nMenu alla Yoda x0" +pquantita+ "  \n EXTRA:________________________  \n Spade Laser Fritte x0" +pquantita4+"\n Morti nere x0" +pquantita5+"\n X-WING x0" +pquantita6+"\n BIBITE:________________________ \nBaby buble tea x0" +pquantita7+
	"\nBirra oscura x0" +pquantita8+"\n___________________________________ \n Per un valore di SPESA TOTALE di: " + scontrino+"$");
										 }
	else	
	alert("ATTENZIONE!! Non hai compilato tutti i campi\n RICONTROLLA!!");
}else 
	alert("ATTENZIONE!! Hai inserito delle quantita negative\n RICONTROLLA!!");
}