import RPi.GPIO as GPIO
import argparse
import time

pin4 = 29
pin5 = 31
pin6 = 33
pin7 = 35
pin1 = 36
pin8 = 37
pin2 = 38
pin3 = 40
sL=32

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

arg=argparse.ArgumentParser()
arg.add_argument('-r','--relay',required=False)
arg.add_argument('-s','--status',required=False)
arg.add_argument('-o','--other',required=False)
perameters=arg.parse_args()
#running=True



def relay1(set):
    GPIO.setup(pin1, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin1, False)
            
    elif(set=='off'):
       GPIO.output(pin1, True)
            

def relay2(set):
    GPIO.setup(pin2, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin2, False)
            
    elif(set=='off'):
        GPIO.output(pin2, True)
            

def relay3(set):
    GPIO.setup(pin3, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin3, False)
            
    elif(set=='off'):
        GPIO.output(pin3, True)
            

def relay4(set):
    GPIO.setup(pin4, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin4, False)
            
    elif(set=='off'):
        GPIO.output(pin4, True)
            

def relay5(set):
    GPIO.setup(pin5, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin5, False)
            
    elif(set=='off'):
        GPIO.output(pin5, True)
            

def relay6(set):
    GPIO.setup(pin6, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin6, False)
            
    elif(set=='off'):
        GPIO.output(pin6, True)
            

def relay7(set):
    GPIO.setup(pin7, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin7, False)
            
    elif(set=='off'):
        GPIO.output(pin7, True)
            

def relay8(set):
    GPIO.setup(pin8, GPIO.OUT)
    if(set=='on'):
        GPIO.output(pin8, False)
            
    elif(set=='off'):
        GPIO.output(pin8, True)
            


if(perameters.other):
    if(perameters.other=='get'):
    	GPIO.setup(sL, GPIO.OUT)
	GPIO.output(sL,True)
	time.sleep(0.1)
	GPIO.output(sL,False)
    #elif(set=='off'):
    elif(perameters.other=='post'):
        GPIO.setup(sL, GPIO.OUT)
        GPIO.output(sL,True)
        time.sleep(0.1)
        GPIO.output(sL,False)
        time.sleep(0.1)
        GPIO.output(sL,True)
        time.sleep(0.1)
        GPIO.output(sL,False)

#    running=False


elif(perameters.relay):
    if(perameters.status):
        relay=int(perameters.relay)
        op=[relay1,relay2,relay3,relay4,relay5,relay6,relay7,relay8]
        op[relay-1](perameters.status)
