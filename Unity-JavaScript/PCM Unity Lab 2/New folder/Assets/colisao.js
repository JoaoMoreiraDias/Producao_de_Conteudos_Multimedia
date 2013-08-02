/*#pragma strict


function OnCollisionEnter(objbateu: Collision)
{
	if (objbateu.gameObject.name=="BarraDir")
	{
		bola_x = bola_x * -1;
	}
	
	if (objbateu.gameObject.name=="BarraEsc")
	{
		bola_x = bola_x * -1;
	}
	
	if (objbateu.gameObject.name=="BarraTopo")
	{
		bola_y = bola_y * -1;
	}
}*/


#pragma strict

function OnCollisionEnter(bateu: colicao)
{
	if(bateu.gameObject.nome == "BarraDir")
	{
		MoverBola.bola_x=MoveBola.bola_x*-1;
	}
	
	if(bateu.gameObject.nome == "BarraEsq")
	{
		MoverBola.bola_x=MoveBola.bola_x*-1;
	}
	
	if(bateu.gameObject.nome == "BarratOPO")
	{
		MoverBola.bola_y=MoveBola.bola_y*-1;
	}
	
	if(bateu.gameObject.nome == "Base")
	{
		MoverBola.bola_y=MoveBola.bola_y*-1;
	}
}