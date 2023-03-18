from actions import send
from sensorServices import temperature

from random import randint
from time import sleep

tags = ['tempc']
for _ in range(20):
    data = [randint(0,20)]
    result = ""
    for i, header in enumerate(tags):
        result += f"&{header}={data[i]}"
    send(temperature, result) 
    sleep(3)




