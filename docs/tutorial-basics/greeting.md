---
sidebar_position: 2
---

# 인사하기(greeting)

chldo.com에서 설정한 인사말을 수신할 수 있습니다.

## 인사말 수신하기

-   `greeting_number`이 없으면 기본값으로 `1`이 사용됩니다.
-   `greeting_number`는 chldo.com에서 지정한 정수값을 사용합니다.

```json {2,6}
{
    "action": "greeting",
    "room_uid": "51VPKp3F0yP3",
    "api_key": "15b25d9729a6b3d196f2b5",
    "user_id": "test",
    "greeting_number": 1
}
```

```
{"status":"START","connection_id":"d5OJdfjRoE0CIQw=","msg":"<SOM>","cAt":"1725981255.678881","return_voice":null,"msgtype":"info"}

{"status":"greeting","connection_id":"d5OJdfjRoE0CIQw=","msg":"안녕하세요~ 저는 김컴재입니다. 오늘 행사에 와줘서 고마워요. 당신의 이름을 알려주세요","msgtype":"info"}

{"status":"END","connection_id":"d5OJdfjRoE0CIQw=","msg":"<EOM>","cAt":"1725981256.11853","return_voice":null,"msgtype":"info"}
```

## 음성을 포함하여 인사말 수신하기

-   `"return_voice": 1`을 추가합니다

```json {2,6,7}
{
    "action": "greeting",
    "room_uid": "51VPKp3F0yP3",
    "api_key": "15b25d9729a6b3d196f2b5",
    "user_id": "test",
    "return_voice": 1,
    "greeting_number": 1
}
```

```
{"status":"START","connection_id":"d5OJdfjRoE0CIQw=","msg":"<SOM>","cAt":"1725980855.870149","return_voice":1,"msgtype":"info"}

{"status":"greeting","connection_id":"d5OJdfjRoE0CIQw=","msg":"안녕하세요~ 저는 김컴재입니다. 오늘 행사에 와줘서 고마워요. 당신의 이름을 알려주세요","msgtype":"info"}

{"status":"voice_ready","cAt":"1725980856.429305","room_uid":"51VPKp3F0yP3","connection_id":"d5OJdfjRoE0CIQw=","questioner":"","org_id":"org_2laPkMJTagQWnkOPpgISd2FJxFE","msg":"안녕하세요~ 저는 김컴재입니다. 오늘 행사에 와줘서 고마워요. 당신의 이름을 알려주세요","voice_url":"https://voice.chldo.com/room_uid_voice/51VPKp3F0yP3/greeting_1.mp3?Expires=1725984458&Signature=iOcRkI5z1uc2A7Gz92CaHpMF-HI3EvkhgZBOXjno3zU0~UIvVh0YZCDuI4JSPDFOBa5q~YnJ8t1VlzaNsjTSaRSCcJPyFJZ76ASodOYu3NzGD8e~6TrRZJr114dlyv9~O0S9nBRH-~RH5io9HuC3QW5NTLxluyKrOXrPE7j6p5wMM-MIARnIOc2iDV7L~KFllksXHL-oRwoOMeVJaOWbWGLe76597TbIkclVtf-u9VqZwM0C2391S-LlxRDl96vhML4ZsPBbK9DXWeeT-wVJzL4gXqgX9meA~TDrMPmfsfEol833UhgK26ZSCAwORUcci8XhKvmXiPZErkNFZ1IH2g__&Key-Pair-Id=KX12RGNKWPA4Y","voice_length":13.632,"sent_uid":"JGmuDYyM6kS44HqjfhL08FoaXQ","msgtype":"info","hotword_uids":[],"return_voice":1}

{"status":"END","connection_id":"d5OJdfjRoE0CIQw=","msg":"<EOM>","cAt":"1725980858.789488","return_voice":1,"msgtype":"info"}
```
