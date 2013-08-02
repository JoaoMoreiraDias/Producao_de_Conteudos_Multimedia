#pragma strict

var speed =20.0;
var bola_x: float = 10;
var bola_y: float = 10;

function Start () {

}

function Update () 
{
	if(transform.position.x>3.3471)
	{
		transform.position.x=transform.position.x-0.25;
	}
	else
		if(transform.position.x<-3.626081)
		{
			transform.position.x = transform.position.x +0.25;
		}
		else
		{
			var x = Input.GetAxis("Horizontal")* Time.deltaTime*speed;
			transform.Translate(0,-x,0);
		}
}