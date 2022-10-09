import RPi.GPIO as GPIO
import argparse
import time

pin = 17
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
SPEED=0.5

arg=argparse.ArgumentParser()
arg.add_argument('-p','--perameter',required=False)
perameters=arg.parse_args()




if (perameters.perameter=='warn'):
    i=0
    GPIO.setup(pin, GPIO.OUT)
    while(i<=2):
        GPIO.output(pin,False)
        time.sleep(SPEED)
        GPIO.output(pin,True)
        time.sleep(SPEED)
        i+=1
if (perameters.perameter=='notify'):
    i=0
    GPIO.setup(pin, GPIO.OUT)
    while(i<=5):
        GPIO.output(pin,False)
        time.sleep(0.1)
        GPIO.output(pin,True)
        time.sleep(0.1)
        i+=1

