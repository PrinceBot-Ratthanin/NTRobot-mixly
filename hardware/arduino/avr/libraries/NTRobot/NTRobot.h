#include "NT_Servo_lib.h"    
#include "NT_Oled_Lib.h"       
#include "NT_Motor_drive.h"
#define M1A 19
#define M1B 18
#define M2A 5
#define M2B 17
#define Knob_pin 33 
/*int M1A=19;
int M1B=18;
int M2A=5;
int M2B=17;*/


void NTRobot(){

  Serial.begin(115200);
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  display.clearDisplay();
  pinMode(M1A,OUTPUT);
  pinMode(M1B,OUTPUT);
  pinMode(M2A,OUTPUT);
  pinMode(M2B,OUTPUT);
  ledcSetup(6, 5000, 8);
  ledcSetup(7, 5000, 8);
  ledcSetup(4, 5000, 8);
  ledcSetup(5, 5000, 8);
  ledcAttachPin(M1A, 6);
  ledcAttachPin(M1B, 7);
  ledcAttachPin(M2A, 4);
  ledcAttachPin(M2B, 5);
  display.setTextSize(1);
  display.setTextColor(WHITE);
}

void SW1(){
	int OK_pin=23;
	pinMode(OK_pin,INPUT);
	while(digitalRead(OK_pin) == 1){
    set_oled(0,0,"press OK ");
    set_oled(0,8,"to start ");
    delay(1);
  }
  set_oled_clear();
  set_oled_show();
}
void Knob(){
	pinMode(Knob_pin,INPUT);
}
