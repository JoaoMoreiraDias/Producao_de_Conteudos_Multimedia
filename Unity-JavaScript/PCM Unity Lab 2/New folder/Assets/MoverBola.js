/*
#pragma strict
static var bola_x: float = 1;
static var bola_y: float = 1;
var vidas: int =3;
var pontos: int =0;                                                   

function Start () {

}

function Update () {

	if (transform.position.y<-5)
	{
		vidas=vidas-1;
		if(vidas<0)
		{
			Application.LoadLevel("MainMenu");
			Invoke("MainMenu",2);
		}
		
		transform.position.x=0;
		transform.position.y=-7;
	}
	
	var x=Time.deltaTime*bola_x;
	var y=Time.deltaTime*bola_y;
	
	transform.Translate(y,x,0);
}
*/

#pragma strict

static var vidas: int=3;
static var pontos: int=0;
static var bola_x: float=10;
static var bola_y: float=10;

function Update()
{
	if(pontos>900)
	{
		Application.LoadLevel("MainMenu");
		Invoke("MainMenu", 2);
	}

	if(Transform.position_y<-25)
	{
		vidas=vidas-1;
		if(vidas<0)
	{
		Application.LoadLevel("MainMenu");
		Invoke("MainMenu",2);
	}
	transform.position.x=0;
	transform.position.y=-7;
	}

var x=Time.deltaTime*bola_x;
var y=Time.deltaTime*bola_y;

transform.Translate(y,x,0);
  
function OnGUI()
{
	GUI.Box(Rect(10,10,150,25), "Ball: " + vidas);
	GUI.Box(Rect(200,10,150,25), "Score: " + pontos);
	
	if (GUI.Button(Rect(10,200,150,25), "Return to Menu"))
	{
		Application.LoadLevel("MainMenu");
		Invoke("MainMenu",2);
	}
}