import os

token = 'aToken_36d8715e3531fd8e8c01fcbfd26bf5af1908e14f15014d2d14817b568bc0bb0e'

def getUrl(domain, service):
    return fr"https://{domain}.cioty.com/{service}"

def send(service, data, objectID=1, domain="group7"):
    url = getUrl(domain, service)
    try:
        os.system(f'curl -k {url} -H "Synx-Cat: 1" -d "token={token}&objectID={objectID}{data}"')
        print(f"sent {data} to {service}")
    except:
        print(f"send to {service} failed")

def listen(service, objectID=1, domain="group7"):
    url = getUrl(domain, service)
    os.system(f'curl -k {url} -H "Synx-Cat: 4" -d "token={token}&objectID={objectID}"')
