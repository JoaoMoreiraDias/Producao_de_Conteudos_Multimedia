#pragma strict

var logo : Texture2D;

function OnGUI()
{
	GUI.Label (Rect (10, 10, 100, 20), "ARCANOID!!!");
	GUI.Label (Rect (10, 40, logo.width, logo.height), logo);
	
	if(GUI.Button(Rect (450,100,150,25), "Start Game"))
	{
		Application.LoadLevel("Aquanoid");
		Invoke("Aquanoid",2);
	}
	
	if(GUI.Button(Rect(450,135,150,25), "Exit Game"))
	{
		Application.Quit();
	}
	
}

function paulo()
{

}