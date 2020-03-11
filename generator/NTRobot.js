'use strict';

goog.provide('Blockly.Arduino.NTRobot');

goog.require('Blockly.Arduino');

Blockly.Arduino.ks_a_Write = function() {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN',Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_val = Blockly.Arduino.valueToCode(this, 'num',Blockly.Arduino.ORDER_ATOMIC);
  //Blockly.Arduino.setups_['setup_output_'+dropdown_pin] = 'pinMode('+dropdown_pin+', OUTPUT);';
  var code = 'analogWrite('+dropdown_pin+','+dropdown_val+');\n'
  return code;
};
Blockly.Arduino.ks_SW1 = function() {
  Blockly.Arduino.setups_['setup_SW1'] = 'pinMode(23, INPUT);';
  var code = 'digitalRead(23)'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_Knob = function() {
  Blockly.Arduino.setups_['setup_Knob'] = 'pinMode(36, INPUT);';
  var code = 'analogRead(33)'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_analogRead = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
  var code = 'analogRead(' + dropdown_pin + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
Blockly.Arduino.ks_y_buzzer = function() {
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.setups_['setup_Buzzer'] = 'pinMode(16, OUTPUT);';
  var code = 'digitalWrite(16,'+dropdown_stat+');\n'
  return code;
};
Blockly.Arduino.NTRobot_motor_forward = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_backward = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,-'+dropdown_speed+');\t';
  code += 'motor(2,-'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_TurnLeft = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,0);\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_TurnRight = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,0);\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_SpinLeft = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,-'+dropdown_speed+');\t';
  code += 'motor(2,'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_SpinRight = function() {
  var dropdown_speed = Blockly.Arduino.valueToCode(this, 'speed',Blockly.Arduino.ORDER_ATOMIC);
  var code = 'motor(1,'+dropdown_speed+');\t';
  code += 'motor(2,-'+dropdown_speed+');\n';
  return code;
};
Blockly.Arduino.NTRobot_motor_stop = function() {
  var code = 'motor(1,0);\t';
  code += 'motor(2,0);\n';
  return code;
};

//////////////////////////OLED//////////////////////////////////////
Blockly.Arduino.ke_oled = function() {

  var s = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

  var CursorX = Blockly.Arduino.valueToCode(this, 'setCursorX', Blockly.Arduino.ORDER_ATOMIC);
  var Cursory = Blockly.Arduino.valueToCode(this, 'setCursorY', Blockly.Arduino.ORDER_ATOMIC);
  var str1 = Blockly.Arduino.valueToCode(this, 'TEXT1', Blockly.Arduino.ORDER_ATOMIC);
  var number1 = Blockly.Arduino.valueToCode(this, 'Number', Blockly.Arduino.ORDER_ATOMIC);

  /*Blockly.Arduino.definitions_['define_Wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_GFX'] = '#include <Adafruit_GFX.h>';
  Blockly.Arduino.definitions_['define_SSD1306'] = '#include <Adafruit_SSD1306.h>';

  Blockly.Arduino.definitions_['OLED_RESET'] = '#define OLED_RESET 5';
  Blockly.Arduino.definitions_['display'] = 'Adafruit_SSD1306 display(128, 64, &Wire, OLED_RESET);';
  
  Blockly.Arduino.setups_['setup_oled1'] = 'display.begin(SSD1306_SWITCHCAPVCC, 0x3C);';
  Blockly.Arduino.setups_['setup_oled2'] = 'display.clearDisplay();';*/


  var code = 'display.setTextSize('+s+');\ndisplay.setTextColor(WHITE);\ndisplay.setCursor('+CursorX+','+Cursory+');\ndisplay.println(String('+str1+'));\n';
  return code;
};
Blockly.Arduino.ke_oled_show = function() {

  var code = 'display.display();\n';
  return code;
};
Blockly.Arduino.ke_oled_clear = function() {

  var code = 'display.clearDisplay();\n';
  return code;
};
Blockly.Arduino.ke_servo = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  var value_degree = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC);
  //value_degree = value_degree.replace('(','').replace(')','')
  var delay_time = Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0'
  //delay_time = delay_time.replace('(','').replace(')','');
  var code = 'servo('+dropdown_pin+','+value_degree+');\n'+'delay(' + delay_time + ');\n';
  return code;
};
Blockly.Arduino.NTRobot_Robot_begin = function() {

  Blockly.Arduino.definitions_['include_Begin'] = '#include <NTRobot.h>';
  
  var code =  'NTRobot();\n';
  return code;
};
Blockly.Arduino.NTRobot_wait = function() {

  var code = 'SW1();\n';
  return code;
};


var blynk_timer=false;
//物联网-授权码
Blockly.Arduino.blynk_iot_auth = function() {
  return '';
};
Blockly.Arduino.blynk_QR = function() {
  return "";
};

//物联网-wifi信息-uno
Blockly.Arduino.blynk_server = function() {
  var wifi_ssid = Blockly.Arduino.valueToCode(this, 'wifi_ssid', Blockly.Arduino.ORDER_ATOMIC);
  var wifi_pass = Blockly.Arduino.valueToCode(this, 'wifi_pass', Blockly.Arduino.ORDER_ATOMIC);
  var auth_key = Blockly.Arduino.valueToCode(this, 'auth_key', Blockly.Arduino.ORDER_ATOMIC);
  var server_add = Blockly.Arduino.valueToCode(this, 'server_add', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_ESP8266WiFi'] ='#include <WiFi.h>';
  Blockly.Arduino.definitions_['include_BlynkSimpleEsp8266'] ='#include <WiFiClient.h>';
  Blockly.Arduino.definitions_['include_TimeLib'] ='#include <BlynkSimpleEsp32.h>';
  Blockly.Arduino.definitions_['var_declare_auth_key'] ='char auth[] = '+auth_key+';';
  Blockly.Arduino.definitions_['var_declare_wifi_ssid'] ='char ssid[] = '+wifi_ssid+';';
  Blockly.Arduino.definitions_['var_declare_wifi_pass'] ='char pass[] = '+wifi_pass+';';

  Blockly.Arduino.setups_['setup_Blynk.begin'] = ' Serial.begin(115200);\n  delay(10);\nBlynk.begin(auth, ssid, pass);';
  
    var code="Blynk.run();";
    return code;
  };
  
//物联网-wifi信息
Blockly.Arduino.blynk_usb_server = function() {
  var auth_key = Blockly.Arduino.valueToCode(this, 'auth_key', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['1_defineBLYNK'] ='#define BLYNK_PRINT DebugSerial\n#include <SoftwareSerial.h>\nSoftwareSerial DebugSerial(2, 3); // RX, TX\n#include <BlynkSimpleStream.h>\n';
  Blockly.Arduino.definitions_['var_declare_auth_key'] ='char auth[] = '+auth_key+';';
  Blockly.Arduino.setups_['setup_Blynk.begin'] = ' DebugSerial.begin(9600);\n Serial.begin(9600);\n  Blynk.begin(Serial, auth);';   
  var code="Blynk.run();";
  return code;
};

//物联网-发送数据到app
Blockly.Arduino.blynk_iot_push_data = function() {
  var Vpin = this.getFieldValue('Vpin');
  var data = Blockly.Arduino.valueToCode(this, 'data', Blockly.Arduino.ORDER_ATOMIC);
  var code='Blynk.virtualWrite('+Vpin+','+data+' );\n ';
  return code;
};

//从app接收数据
Blockly.Arduino.blynk_iot_get_data = function() {
  var Vpin = this.getFieldValue('Vpin');
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = Blockly.Arduino.valueToCode(this, 'ARG' + x,Blockly.Arduino.ORDER_NONE) || 'null';
  }
  var code =  '(a' + args.join(', ') + ');\n';
  var vartype="";
  var branch = Blockly.Arduino.statementToCode(this, 'STACK');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,'\'' + this.id + '\'') + branch;
  }
  var type=this.getFieldValue('TYPE');
  var args = [];
  for (var x = 0; x < this.arguments_.length; x++) {
    args[x] = this.argumentstype_[x]+ ' '+ Blockly.Arduino.variableDB_.getName(this.arguments_[x],Blockly.Variables.NAME_TYPE);
  }
  var GetDataCode="";
  if(this.arguments_.length==1)
  {
    GetDataCode=Blockly.Arduino.variableDB_.getName(this.arguments_[0],Blockly.Variables.NAME_TYPE);
    if(this.argumentstype_[0]=="int")
      GetDataCode+= "= param.asInt();\n"
    else if(this.argumentstype_[0]=="String") 
      GetDataCode+= "= param.asStr();\n"
    else if(this.argumentstype_[0]=="long") 
      GetDataCode+= "= param.asDouble();\n"
    else if(this.argumentstype_[0]=="float") 
      GetDataCode+= "= param.asFloat();\n"
    else if(this.argumentstype_[0]=="boolean") 
      GetDataCode+= "= param.asInt();\n"
    else if(this.argumentstype_[0]=="byte") 
      GetDataCode+= "= param.asStr();\n"
    else if(this.argumentstype_[0]=="char") 
      GetDataCode+= "= param.asStr();\n"
  }
  else
  {
    for (var x = 0; x < this.arguments_.length; x++) {
      args[x] = this.argumentstype_[x]+ ' '+ Blockly.Arduino.variableDB_.getName(this.arguments_[x],Blockly.Variables.NAME_TYPE);

      GetDataCode+=Blockly.Arduino.variableDB_.getName(this.arguments_[x],Blockly.Variables.NAME_TYPE);
      if(this.argumentstype_[x]=="int")
        GetDataCode+= "= param["+x+"].asInt();\n"
      else if(this.argumentstype_[x]=="String") 
        GetDataCode+= "= param["+x+"].asStr();\n"
      else if(this.argumentstype_[x]=="long") 
        GetDataCode+= "= param["+x+"].asDouble();\n"
      else if(this.argumentstype_[x]=="float") 
        GetDataCode+= "= param["+x+"].asFloat();\n"
      else if(this.argumentstype_[x]=="boolean") 
        GetDataCode+= "= param["+x+"].asInt();\n"
      else if(this.argumentstype_[x]=="byte") 
        GetDataCode+= "= param["+x+"].asStr();\n"
      else if(this.argumentstype_[x]=="char") 
        GetDataCode+= "= param["+x+"].asStr();\n"
    } 
  }
  if(this.arguments_.length>0)
    Blockly.Arduino.definitions_['var_declare_'+args] = args.join(';\n')+";";
  var code =' BLYNK_WRITE('+ Vpin+ ') {\n' +GetDataCode+
  branch + '}\n';
 // var code =  'BLYNK_WRITE(' + Vpin+ ') {\n'+variable+" = param.as"+datatype+"();\n"+branch+'}\n';
 code = Blockly.Arduino.scrub_(this, code);
 Blockly.Arduino.definitions_[Vpin] = code;
 return null;
};

//blynk 定时器
Blockly.Arduino.Blynk_iot_timer = function () {
  Blockly.Arduino.definitions_['var_declare_BlynkTimer'] = 'BlynkTimer timer;';
  var timerNo = this.getFieldValue('timerNo');
  var time = Blockly.Arduino.valueToCode(this, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
  var funcName = 'myTimerEvent'+timerNo;
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code = 'void' + ' ' + funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.definitions_[funcName] = code;
  Blockly.Arduino.setups_[funcName] = 'timer.setInterval('+ time+'L, '+funcName+');\n';

  return "timer.run();\n";
};

//blynk 硬件已连接
Blockly.Arduino.Blynk_iot_BLYNK_CONNECTED = function () {
  var funcName = 'BLYNK_CONNECTED';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code =  funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.definitions_[funcName] = code;
};

//blynk APP已连接
Blockly.Arduino.Blynk_iot_BLYNK_APP_CONNECTED = function () {
  var funcName = 'BLYNK_APP_CONNECTED';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code =  funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.definitions_[funcName] = code;
};
//blynk APP离线
Blockly.Arduino.Blynk_iot_BLYNK_APP_DISCONNECTED = function () {
  var funcName = 'BLYNK_APP_DISCONNECTED';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  var code =  funcName + '() {\n' + branch + '}\n';
  Blockly.Arduino.definitions_[funcName] = code;
};
//blynk 同步所有管脚状态
Blockly.Arduino.Blynk_iot_BLYNK_syncAll = function () {
  var code ='Blynk.syncAll();\n';
  return code;
};
//物联网-发送数据到app
Blockly.Arduino.blynk_iot_syncVirtual = function() {
  var Vpin = this.getFieldValue('Vpin');
  var code='Blynk.syncVirtual('+Vpin+');\n ';
  return code;
};

//LED组件颜色&开关
Blockly.Arduino.blynk_iot_WidgetLED_COLOR=function(){
  var Vpin = this.getFieldValue('Vpin');
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var dropdown_stat = this.getFieldValue('STAT');
  Blockly.Arduino.definitions_['var_declare_WidgetLED'+Vpin] = 'WidgetLED led'+Vpin+'('+Vpin+');';
  var code = 'led'+Vpin+'.setColor("'+colour_rgb_led_color+'");\n';
  if(dropdown_stat=="HIGH")
    code+='led'+Vpin+'.on();\n';
  else if(dropdown_stat=="LOW")
    code+='led'+Vpin+'.off();\n';
  return code;
};

//LED组件颜色&亮度
Blockly.Arduino.blynk_iot_WidgetLED_VALUE=function(){
  var Vpin = this.getFieldValue('Vpin');
  var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_declare_WidgetLED'+Vpin] = 'WidgetLED led'+Vpin+'('+Vpin+');';
  var code = 'led'+Vpin+'.setColor("'+colour_rgb_led_color+'");\n';
  code+='led'+Vpin+'.setValue('+value_num+');';
  return code;
};

//红外控制空调
Blockly.Arduino.blynk_iot_ir_send_ac=function(){
  var AC_TYPE = this.getFieldValue('AC_TYPE');
  var AC_POWER = this.getFieldValue('AC_POWER');
  var AC_MODE = this.getFieldValue('AC_MODE');
  var AC_FAN = this.getFieldValue('AC_FAN');
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var AC_TEMP = Blockly.Arduino.valueToCode(this, 'AC_TEMP', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Arduino'] = '#ifndef UNIT_TEST\n#include <Arduino.h>\n#endif';
  Blockly.Arduino.definitions_['include_IRremoteESP8266'] = '#include <IRremoteESP8266.h>\n#include <IRsend.h>';
  Blockly.Arduino.definitions_['include'+AC_TYPE] = '#include <ir_'+AC_TYPE+'.h>';
  Blockly.Arduino.definitions_['define_IR_LED'+dropdown_pin] = '#define IR_LED '+dropdown_pin;
  Blockly.Arduino.definitions_['IR'+AC_TYPE+'AC'] = 'IR'+AC_TYPE+'AC '+AC_TYPE+'AC(IR_LED); ';
  Blockly.Arduino.setups_['setup'+AC_TYPE] = AC_TYPE+'AC.begin();';
  var code = AC_TYPE+'AC.setPower('+AC_POWER+');\n';
  code+=AC_TYPE+'AC.setFan('+AC_FAN+');\n';
  code+=AC_TYPE+'AC.setMode('+AC_MODE+');\n';
  code+=AC_TYPE+'AC.setTemp('+AC_TEMP+');\n';
  code+=AC_TYPE+'AC.send();\n';
  return code;
};

//红外接收
Blockly.Arduino.blynk_iot_ir_recv_raw = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_IRremote'] = '#ifndef UNIT_TEST\n#include <Arduino.h>\n#endif\n#include <IRremoteESP8266.h>\n#include <IRrecv.h>\n#include <IRutils.h>\n#if DECODE_AC\n#include <ir_Daikin.h>\n#include <ir_Fujitsu.h>\n#include <ir_Gree.h>\n#include <ir_Haier.h>\n#include <ir_Kelvinator.h>\n#include <ir_Midea.h>\n#include <ir_Toshiba.h>\n#endif \n';
  Blockly.Arduino.definitions_['#define RECV_PIN' + dropdown_pin] = '#define RECV_PIN ' + dropdown_pin +'\n';
  Blockly.Arduino.definitions_['#define BAUD_RATE' ] = '#define BAUD_RATE 115200\n';
  Blockly.Arduino.definitions_['#define CAPTURE_BUFFER_SIZE'] = '#define CAPTURE_BUFFER_SIZE 1024\n#if DECODE_AC\n#define TIMEOUT 50U\n#else\n#define TIMEOUT 15U  \n#endif\n#define MIN_UNKNOWN_SIZE 12\n#define IN_UNKNOWN_SIZE 12\nIRrecv irrecv(RECV_PIN, CAPTURE_BUFFER_SIZE, TIMEOUT, true);\ndecode_results results;';
  Blockly.Arduino.setups_['Serial.begin' ] = ' Serial.begin(BAUD_RATE, SERIAL_8N1, SERIAL_TX_ONLY);\n while(!Serial)\ndelay(50);\n#if DECODE_HASH\n  irrecv.setUnknownThreshold(MIN_UNKNOWN_SIZE);\n#endif  \n  irrecv.enableIRIn();  ';
  var code = "if (irrecv.decode(&results))  {\n"
  code += ' uint32_t now = millis();\n';
  code += ' dumpACInfo(&results);\n'
  code += 'Serial.println(resultToSourceCode(&results));}\n';
  var funcode = 'void dumpACInfo(decode_results *results) {\n'
  +'String description="";\n#if DECODE_DAIKIN\nif(results->decode_type == DAIKIN){\nIRDaikinESP ac(0);\n'
  +'ac.setRaw(results->state);\ndescription=ac.toString();\n}\n#endif\n#if DECODE_FUJITSU_AC\nif(results->decode_type==FUJITSU_AC){\nIRFujitsuAC ac(0);\nac.setRaw(results->state, results->bits / 8);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_KELVINATOR\nif(results->decode_type == KELVINATOR) {\nIRKelvinatorAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_TOSHIBA_AC\nif(results->decode_type == TOSHIBA_AC){\nIRToshibaAC ac(0);\nac.setRaw(results->state);\n    description = ac.toString();\n  }\n#endif\n#if DECODE_GREE\nif (results->decode_type == GREE){\nIRGreeAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\n#if DECODE_MIDEA\nif(results->decode_type == MIDEA){\nIRMideaAC ac(0);\nac.setRaw(results->value);\ndescription=ac.toString();\n}\n#endif\n#if DECODE_HAIER_AC\nif(results->decode_type == HAIER_AC) {\nIRHaierAC ac(0);\nac.setRaw(results->state);\ndescription = ac.toString();\n}\n#endif\nif(description != "")\nSerial.println("Mesg Desc.: " + description);\n}\n';
  Blockly.Arduino.definitions_['dumpACInfo'] = funcode;
  return code;
};

//红外发射
Blockly.Arduino.blynk_iot_ir_send = function () {
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var IR_CODE=this.getFieldValue('IR_CODE');
  var IR_CODE_LENGTH=IR_CODE.match(new RegExp(",", 'g')).length+1;
  var random_num=Math.ceil(Math.random()*100000);
  Blockly.Arduino.definitions_['include_IRremote'] = '#ifndef UNIT_TEST\n#include <Arduino.h>\n#endif\n#include <IRremoteESP8266.h>\n#include <IRsend.h>\n#define IR_LED '+dropdown_pin;
  Blockly.Arduino.definitions_['var_declare_IRsend irsend'] = 'IRsend irsend(IR_LED);\n';
  Blockly.Arduino.definitions_['var_declare_send'+random_num] = 'uint16_t rawData'+random_num+'['+IR_CODE_LENGTH+'] = {'+IR_CODE+'}';
  Blockly.Arduino.setups_['Serial.begin' ] = ' irsend.begin();\n  Serial.begin(115200, SERIAL_8N1, SERIAL_TX_ONLY);\n';
  var code = 'irsend.sendRaw(rawData'+random_num+', '+IR_CODE_LENGTH+', 38); \n delay(2000);\n';
  return code;
}


//发送邮件
Blockly.Arduino.blynk_email = function() {
  var email_add = Blockly.Arduino.valueToCode(this, 'email_add', Blockly.Arduino.ORDER_ATOMIC);
  var Subject = Blockly.Arduino.valueToCode(this, 'Subject', Blockly.Arduino.ORDER_ATOMIC);
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_BLYNK_MAX_SENDBYTES'] ='#define BLYNK_MAX_SENDBYTES 128 \n';
  var code='Blynk.email('+email_add+', '+Subject+', '+content+');\n';
  return code;
};
//发送通知
Blockly.Arduino.blynk_notify = function() {
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  var code='Blynk.notify('+content+');\n';
  return code;
};

//物联网-终端组件显示文本
Blockly.Arduino.blynk_terminal = function() {
  var Vpin = this.getFieldValue('Vpin');
  Blockly.Arduino.definitions_['var_declare_WidgetTerminal'] = 'WidgetTerminal terminal('+Vpin+');\n';
  var content = Blockly.Arduino.valueToCode(this, 'content', Blockly.Arduino.ORDER_ATOMIC);
  var code='terminal.println('+content+');\n';
  return code;
};

//从终端获取字符串
Blockly.Arduino.blynk_iot_terminal_get = function () {
  var Vpin = this.getFieldValue('Vpin');
  Blockly.Arduino.definitions_['var_declare_WidgetTerminal'] = 'WidgetTerminal terminal('+Vpin+');\n';
    Blockly.Arduino.definitions_['var_declare_action']='String terminal_text ;';
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格s
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\nterminal_text= param.asStr();\n'+branch;
    code+='\nterminal.flush();\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//视频流
Blockly.Arduino.blynk_videourl = function() {
  var Vpin = this.getFieldValue('Vpin');
  var url = Blockly.Arduino.valueToCode(this, 'url', Blockly.Arduino.ORDER_ATOMIC);
  
  var code='Blynk.setProperty('+Vpin+',"url",'+url+');';
  return code;
};

//桥接授权码
Blockly.Arduino.blynk_bridge_auth = function() {
  var Vpin = this.getFieldValue('Vpin');
  var auth = Blockly.Arduino.valueToCode(this, 'auth', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_declare_WidgetBridge'+Vpin] ='WidgetBridge bridge'+Vpin+'('+Vpin+');\n';
  var code='bridge'+Vpin+'.setAuthToken('+auth+'); \n';
  return code;
};

//桥接数字输出
Blockly.Arduino.blynk_bridge_digitalWrite = function() {
  var Vpin = this.getFieldValue('Vpin');
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_stat = Blockly.Arduino.valueToCode(this, 'STAT', Blockly.Arduino.ORDER_ATOMIC);
  var code='bridge'+Vpin+'.digitalWrite('+dropdown_pin+', '+dropdown_stat+');\n';
  return code;
};

//桥接模拟输出
Blockly.Arduino.blynk_bridge_AnaloglWrite = function() {
  var Vpin = this.getFieldValue('Vpin');
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code='bridge'+Vpin+'.analogWrite('+dropdown_pin+', '+value_num+');\n';
  return code;
};

//桥接虚拟管脚
Blockly.Arduino.blynk_bridge_VPin = function() {
  var Vpin = this.getFieldValue('Vpin');
  var Vpin2 = this.getFieldValue('Vpin2');
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  var code='bridge'+Vpin+'.virtualWrite('+Vpin2+', '+value_num+');\n';
  return code;
};

//RTC组件初始化
Blockly.Arduino.blynk_WidgetRTC_init = function() { 
  Blockly.Arduino.definitions_['include_TimeLib'] ='#include <TimeLib.h>';
  Blockly.Arduino.definitions_['include_WidgetRTC'] ='#include <WidgetRTC.h>';
  var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['var_declare_WidgetRTC'] ='WidgetRTC rtc;\n';
  Blockly.Arduino.setups_['setSyncInterval'] = 'setSyncInterval('+value_num+'* 60);';
  var code='rtc.begin(); \n';
  return code;
};

//RTC获取时间
Blockly.Arduino.blynk_WidgetRTC_get_time = function () {
  var timeType = this.getFieldValue('TIME_TYPE');
  var code = timeType +'()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

//播放音乐组件
Blockly.Arduino.blynk_iot_playmusic = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  if (Blockly.Arduino.INFINITE_LOOP_TRAP) {
    branch = Blockly.Arduino.INFINITE_LOOP_TRAP.replace(/%1/g,'\'' + this.id + '\'') + branch;
  }
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code='BLYNK_WRITE('+Vpin+')\n{\naction = param.asStr();\n'+branch+' \nBlynk.setProperty('+Vpin+', "label", action);}';
    code = Blockly.Arduino.scrub_(this, code);
    Blockly.Arduino.definitions_[Vpin] = code;
};

//gd5800 mp3 控制播放
Blockly.Arduino.GD5800_MP3_CONTROL = function () {
  var rxpin = Blockly.Arduino.valueToCode(this, 'RXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var txpin = Blockly.Arduino.valueToCode(this, 'TXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var CONTROL_TYPE = this.getFieldValue('CONTROL_TYPE');
  Blockly.Arduino.definitions_['include_Arduino'] ='#include <Arduino.h>\n';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] ='#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['include_GD5800'] ='#include <GD5800_Serial.h>';
  Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'+rxpin+txpin] ='GD5800_Serial mp3'+rxpin+txpin+'('+rxpin+', '+txpin+');';
  Blockly.Arduino.setups_['setup_ mp3'+rxpin+txpin] = ' mp3'+rxpin+txpin+'.begin(9600);';
  var code='mp3'+rxpin+txpin+'.'+CONTROL_TYPE;
  return code;
};

//gd5800 mp3 循环模式
Blockly.Arduino.GD5800_MP3_LOOP_MODE = function () {
  var rxpin = Blockly.Arduino.valueToCode(this, 'RXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var txpin = Blockly.Arduino.valueToCode(this, 'TXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var LOOP_MODE = this.getFieldValue('LOOP_MODE');
  Blockly.Arduino.definitions_['include_Arduino'] ='#include <Arduino.h>\n';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] ='#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['include_GD5800'] ='#include <GD5800_Serial.h>';
  Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'+rxpin+txpin] ='GD5800_Serial mp3'+rxpin+txpin+'('+rxpin+', '+txpin+');';
  Blockly.Arduino.setups_['setup_ mp3'+rxpin+txpin] = ' mp3'+rxpin+txpin+'.begin(9600);';
  var code='mp3'+rxpin+txpin+'.setLoopMode('+LOOP_MODE+');';
  return code;
};

//gd5800 mp3 EQ模式
Blockly.Arduino.GD5800_MP3_EQ_MODE = function () {
  var rxpin = Blockly.Arduino.valueToCode(this, 'RXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var txpin = Blockly.Arduino.valueToCode(this, 'TXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var EQ_MODE = this.getFieldValue('EQ_MODE');
  Blockly.Arduino.definitions_['include_Arduino'] ='#include <Arduino.h>\n';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] ='#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['include_GD5800'] ='#include <GD5800_Serial.h>';
  Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'+rxpin+txpin] ='GD5800_Serial mp3'+rxpin+txpin+'('+rxpin+', '+txpin+');';
  Blockly.Arduino.setups_['setup_ mp3'+rxpin+txpin] = ' mp3'+rxpin+txpin+'.begin(9600);';
  var code='mp3'+rxpin+txpin+'.setEqualizer('+EQ_MODE+');';
  return code;
};

//gd5800 mp3 设置音量
Blockly.Arduino.GD5800_MP3_VOL = function () {
  var rxpin = Blockly.Arduino.valueToCode(this, 'RXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var txpin = Blockly.Arduino.valueToCode(this, 'TXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var vol = Blockly.Arduino.valueToCode(this, 'vol', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Arduino'] ='#include <Arduino.h>\n';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] ='#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['include_GD5800'] ='#include <GD5800_Serial.h>';
  Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'+rxpin+txpin] ='GD5800_Serial mp3'+rxpin+txpin+'('+rxpin+', '+txpin+');';
  Blockly.Arduino.setups_['setup_ mp3'+rxpin+txpin] = ' mp3'+rxpin+txpin+'.begin(9600);';
  var code='mp3'+rxpin+txpin+'.setVolume('+vol+');';
  return code;
};

//gd5800 mp3 播放第N首
Blockly.Arduino.GD5800_MP3_PLAY_NUM = function () {
  var rxpin = Blockly.Arduino.valueToCode(this, 'RXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var txpin = Blockly.Arduino.valueToCode(this, 'TXPIN', Blockly.Arduino.ORDER_ATOMIC);
  var NUM = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['include_Arduino'] ='#include <Arduino.h>\n';
  Blockly.Arduino.definitions_['include_SoftwareSerial'] ='#include <SoftwareSerial.h>\n';
  Blockly.Arduino.definitions_['include_GD5800'] ='#include <GD5800_Serial.h>';
  Blockly.Arduino.definitions_['var_declare_GD5800_ mp3'+rxpin+txpin] ='GD5800_Serial mp3'+rxpin+txpin+'('+rxpin+', '+txpin+');';
  Blockly.Arduino.setups_['setup_ mp3'+rxpin+txpin] = ' mp3'+rxpin+txpin+'.begin(9600);';
  var code='mp3'+rxpin+txpin+'.playFileByIndexNumber('+NUM+');';
  return code;
};

//光线传感器
Blockly.Arduino.blynk_light = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\nint lx = param.asInt();\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//重力传感器
Blockly.Arduino.blynk_gravity = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\nint x = param[0].asFloat();\nint y = param[1].asFloat();\nint z = param[2].asFloat();\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};
//加速度传感器
Blockly.Arduino.blynk_acc=Blockly.Arduino.blynk_gravity;

//时间输入
Blockly.Arduino.blynk_time_input_1 = function () {
  var Vpin = this.getFieldValue('Vpin');
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
    branch = branch.replace(/(^\s*)|(\s*$)/g, "");//去除两端空格
    var code = 'BLYNK_WRITE' + '(' +Vpin+'){\n long startTimeInSecs = param[0].asLong();\nint hour =startTimeInSecs/3600;\nint minute=(startTimeInSecs-3600*hour)/60;\n'+branch+'\n}';
    Blockly.Arduino.definitions_[Vpin] = code;
};

//执行器-蜂鸣器频率选择列表
Blockly.Arduino.tone_notes = function() {
  var code = this.getFieldValue('STAT');
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.factory_declare2 = function() {
  var VALUE = this.getFieldValue('VALUE');
  Blockly.Arduino.definitions_['var_'+VALUE] = VALUE;
  return '';
};
Blockly.Arduino.DHT = function () {
  var sensor_type = this.getFieldValue('TYPE');
  var dropdown_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var what = this.getFieldValue('WHAT');
  Blockly.Arduino.definitions_['include_DHT'] = '#include <DHT.h>';
  Blockly.Arduino.definitions_['var_declare_dht' + dropdown_pin] = 'DHT dht'+dropdown_pin+'('+dropdown_pin+', '+sensor_type+');'
  Blockly.Arduino.setups_['DHT_SETUP'+dropdown_pin] = ' dht'+dropdown_pin+'.begin();';
  var code;
  if(what=="temperature")
    code= 'dht'+dropdown_pin+'.readTemperature()'
  else
    code= 'dht'+dropdown_pin+'.readHumidity()'
  return [code, Blockly.Arduino.ORDER_ATOMIC];
}
