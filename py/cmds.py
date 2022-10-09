import json
import argparse
import subprocess
import time

args = argparse.ArgumentParser()
args.add_argument('-t','--type', required=True)

perameters = args.parse_args()

if(perameters.type == 'refresh'):
        print('refreshing')
        cmd = [ 'vcgencmd', 'measure_temp' ]
        output = subprocess.Popen( cmd, stdout=subprocess.PIPE ).communicate()[0]

        filename="/home/pi/myServer/log.json"
        with open (filename) as json_file:
                data=json.load(json_file)
                temp=data[8]
                temp['output']=output
                with open(filename,'w') as f:
                        json.dump(data,f,indent=4)


if(perameters.type == 'shutdown'):
        subprocess.Popen(['shutdown','-h','now'])

if(perameters.type ==  'reboot'):
        subprocess.Popen(['shutdown','-r','now'])
