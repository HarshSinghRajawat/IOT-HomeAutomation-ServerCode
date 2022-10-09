import RPi.GPIO as GPIO
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
GPIO.setup(pin1, GPIO.OUT)
GPIO.setup(pin2, GPIO.OUT)
GPIO.setup(pin3, GPIO.OUT)
GPIO.setup(pin4, GPIO.OUT)
GPIO.setup(pin5, GPIO.OUT)
GPIO.setup(pin6, GPIO.OUT)
GPIO.setup(pin7, GPIO.OUT)
GPIO.setup(pin8, GPIO.OUT)
GPIO.setup(sL,GPIO.OUT)





GPIO.cleanup()
