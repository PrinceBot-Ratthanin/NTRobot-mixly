#include "NT_Servo.h"
#define _servo1 25
#define _servo2 26
#define _servo3 27
#define _servo4 14
#define _servo5 13
#define _servo6 15

Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;
Servo servo6;
void servo(uint8_t servo, int16_t angle)
{
  if (servo == 1)
  {
    if (angle == -1)
    {
      servo1.detach();
    }
    else
    {
      if (!(servo1.attached()))
      {
        servo1.attach(_servo1);
      }
      servo1.write(angle);
    }
  }
  if (servo == 2)
  {
    if (angle == -1)
    {
      servo2.detach();
    }
    else
    {
      if (!(servo2.attached()))
      {
        servo2.attach(_servo2);
      }
      servo2.write(angle);
    }
  }
  if (servo == 3)
  {
    if (angle == -1)
    {
      servo3.detach();
    }
    else
    {
      if (!(servo3.attached()))
      {
        servo3.attach(_servo3);
      }
      servo3.write(angle);
    }
  }
  if (servo == 4)
  {
    if (angle == -1)
    {
      servo4.detach();
    }
    else
    {
      if (!(servo4.attached()))
      {
        servo4.attach(_servo4);
      }
      servo4.write(angle);
    }
  }
  if (servo == 5)
  {
    if (angle == -1)
    {
      servo5.detach();
    }
    else
    {
      if (!(servo5.attached()))
      {
        servo5.attach(_servo5);
      }
      servo5.write(angle);
    }
  }
  if (servo == 6)
  {
    if (angle == -1)
    {
      servo6.detach();
    }
    else
    {
      if (!(servo6.attached()))
      {
        servo6.attach(_servo6);
      }
      servo6.write(angle);
    }
  }
}