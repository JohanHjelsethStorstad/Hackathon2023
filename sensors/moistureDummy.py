from actions import send
from sensorServices import moisture

from random import randint
from time import sleep

tags = ['moisture']
for _ in range(20):
    data = [randint(0,100)]
    result = ""
    for i, header in enumerate(tags):
        result += f"&{header}={data[i]}"
    send(moisture, result) 
    sleep(3)