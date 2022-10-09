import RPi.GPIO as GPIO
import time


pin4 = 29
pin5 = 31
pin6 = 33
pin7 = 35
pin1 = 36
pin8 = 37
pin2 = 38
pin3 = 40
pinL=32


GPIO.setmode(GPIO.BOARD)
GPIO.setup(pin1, GPIO.OUT)
GPIO.setup(pin2, GPIO.OUT)
GPIO.setup(pin3, GPIO.OUT)
GPIO.setup(pin4, GPIO.OUT)
GPIO.setup(pin5, GPIO.OUT)
GPIO.setup(pin6, GPIO.OUT)
GPIO.setup(pin7, GPIO.OUT)
GPIO.setup(pin8, GPIO.OUT)

GPIO.setup(pinL, GPIO.OUT)

GPIO.output(pin1, False)
GPIO.output(pin2, False)
GPIO.output(pin3, False)
GPIO.output(pin4, False)
GPIO.output(pin5, False)
GPIO.output(pin6, False)
GPIO.output(pin7, False)
GPIO.output(pin8, False)

check=True
try:
    while True:
	GPIO.output(pinL,check)
	#time.sleep(0.2)
        GPIO.output(pin1, check)
        time.sleep(0.2)
        GPIO.output(pin2, check)
        time.sleep(0.2)
        GPIO.output(pin3, check)
        time.sleep(0.2)
        GPIO.output(pin4, check)
        time.sleep(0.2)
        GPIO.output(pin5, check)
        time.sleep(0.2)
        GPIO.output(pin6, check)
        time.sleep(0.2)
        GPIO.output(pin7, check)
        time.sleep(0.2)
        GPIO.output(pin8, check)
        if check == True:
            check=False
        else:
            check=True

except KeyboardInterrupt:
    GPIO.cleanup()

