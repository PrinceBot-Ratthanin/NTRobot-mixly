
void motor(int pin, int Speeds) {
  int _SpeedsA;
  int _SpeedsB;
  if (pin == 1) {
    _SpeedsA = abs(Speeds);
    _SpeedsA = _SpeedsA * 2.55;
    if (_SpeedsA > 255){_SpeedsA = 255;}
    else if (_SpeedsA < -255){_SpeedsA = -255;}
    if (Speeds > 0) {
      ledcWrite(6, 255 - abs(_SpeedsA));
      ledcWrite(7, 255);
    }
    else if (Speeds <= 0) {
      ledcWrite(6, 255);
      ledcWrite(7, 255 - abs(_SpeedsA));
    }
  }
  if (pin == 2) {
    _SpeedsB = abs(Speeds);
    
    _SpeedsB = _SpeedsB * 2.55;
    if (_SpeedsB > 255){_SpeedsB = 255;}
    else if (_SpeedsB < -255){_SpeedsB = -255;}
    if (Speeds > 0) {
      ledcWrite(4, 255 - abs(_SpeedsB));
      ledcWrite(5, 255);
    }
    else if (Speeds <= 0) {
      ledcWrite(4, 255);
      ledcWrite(5, 255 - abs(_SpeedsB));
    }
  }
}
void MT(int speeda, int speedb,int time_speed){ 
  motor(1,speeda);
  motor(2,speedb);
  delay(time_speed);
}
void ao(){
  motor(1,0);
  motor(2,0);
}
void aot(int _time){
  motor(1,0);
  motor(2,0);
  delay(_time);
}
void fd(int _Speed){
  motor(1,_Speed);
  motor(2,_Speed);
}
void bk(int _Speed){
  motor(1, - _Speed);
  motor(2, - _Speed);
}
void sl(int _Speed){
  motor(1, - _Speed);
  motor(2,  _Speed);
}
void sr(int _Speed){
  motor(1,  _Speed);
  motor(2, - _Speed);
}
