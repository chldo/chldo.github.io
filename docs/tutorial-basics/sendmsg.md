---
sidebar_position: 3
---

# 메시지 보내기(sendmsg)

메시지는 다음과 같이 보낼 수 있습니다

-   `api_key`에는 스페이스 정보가 포함되어 있어서 별개의 정보를 기입하지 않습니다.
-   `api_key`로 정보를 식별하며, 이 식별된 정보를 사용하여 대화할 공간으로 `room_uid`를 사용합니다.
-   `msg`는 필수 입력값이 아닙니다. 생략하여서도 메시지 보내기가 가능합니다.

```json title="WSS 발송값"  {2,5}
{
    "action": "sendmsg",
    "room_uid": "51VPKp3F0yPX",
    "user_id": "s8dfkjsdf",
    "msg": "안녕 반가워요",
    "api_key": "d4a3653a4ba72d6e04a293"
}
```

이에 대해 일반적으로 다음과 같은 정보가 수신됩니다.

-   모든 대화는 `<SOM>` 으로 시작해서 `<EOM>`으로 끝납니다.
-   문장 단위는 sent_uid로 구분됩니다. (chldo.com에서 별도 설정 필요, 설정이 없을 때는 단일 sent_uid 사용)
-   스트림 값을 사용하기 위해서는 `on_chat_model_stream`를 사용하세요.

v3는 langchain의 규약을 따릅니다.

```json title="WSS 수신값" {13-139}
{"status":"START","connection_id":"fO-pZdLNoE0CFSw=","room_uid":"11VPKp3F0yPX","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"msg":"","is_stream":true,"cAt":"1728228128.395417","return_voice":1,"msgtype":"info"}

{"status":"history","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"대화 기억을 찾고 있습니다.","is_stream":true,"msgtype":"info"}

{"status":"history","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"대화 기억을 재생하였습니다.","is_stream":true,"msgtype":"info"}

{"status":"memory","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"저장된 메모리를 찾고 있습니다.","is_stream":true,"msgtype":"info"}

{"status":"memory","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"저장된 메모리를 찾았습니다. 핫워드 수신으로 설정된 메모리는 총 0개 입니다.","is_stream":true,"msgtype":"info"}

{"status":"think","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"생각을 시작합니다.","is_stream":true,"msgtype":"info"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"안"}},"msg":"안","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"녕하세요"}},"msg":"녕하세요","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"!"}},"msg":"!","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":" 만나"}},"msg":" 만나","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"서"}},"msg":"서","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":" 반"}},"msg":" 반","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"갑"}},"msg":"갑","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"습니다"}},"msg":"습니다","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":"."}},"msg":".","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","event":"on_chat_model_stream","data":{"chunk":{"content":" "}},"msg":" ","is_stream":true,"msgtype":"stream"}

{"status":"voice_ready","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"안녕하세요! 만나서 반갑습니다.","voice_url":"https://voice.chldo.com/room_uid_voice/11VPKp3F0yPX/EorxIkoogyaruqO7fhNpy1ECGvNn.mp3?Expires=1728231730&Signature=QHrQWMpNUPua6OyDCdAJgwcWdryQdAyjey-9CjVpmjReKvdB2G94kEWXfgE98lqaFFAc1JBZfnP7vLBQIi91WpofCbW2xwABle0~QI433gJ3BfxF40qLuXK2qVjLsaSQRVvDilvF8-XEfM-xGV3yNrx6dClwFjDKIVV5hqCt-YddlfDLvpoLqXBEa-ycFY4ShkQtHHkXR4VLnfX366B2Lw9aRjJYqUZHjSajpSuxp1oQP18fUNDm4TbmiApeHjLeBfuvMc9whfikLADiON-6oXvBzMpzurkRzEHsMB5O0OMnylAVVeMIZVyqEj00sDSLBa12ZLWC-nqVVjHoo~~y6w__&Key-Pair-Id=KX12RGNKWPA4Y","voice_length":2.832,"sent_uid":"EorxIkoogyaruqO7fhNpy1ECGvNn","is_stream":true,"msgtype":"info"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":" 저는"}},"msg":" 저는","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":" 비"}},"msg":" 비","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":"모"}},"msg":"모","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":"어"}},"msg":"어","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":"라고"}},"msg":"라고","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":" 해"}},"msg":" 해","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":"요"}},"msg":"요","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":"."}},"msg":".","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","event":"on_chat_model_stream","data":{"chunk":{"content":" "}},"msg":" ","is_stream":true,"msgtype":"stream"}

{"status":"voice_ready","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":" 저는 비모어라고 해요.","voice_url":"https://voice.chldo.com/room_uid_voice/11VPKp3F0yPX/679LYgKtZM3viy9JF0s5Mg0ivAxR.mp3?Expires=1728231731&Signature=laL-k7qJPzufyXk967w4QLyiggxMxwNkl23neEorzssEN2lnjB1w4M67aWctCkYU8~hIeirgjuL-CNuxt1R1dtn0Rh7anN0h5fTM6LJR5U-CbczDb-KOKlTXbDhBVDvtrdrCwVvlEQ~5wKJnZ3B-TW9pi3OfirmeNHgvIsV5vWoBsVYk4xhuRusWpTjIdyLmn~XtaPSGynp7kYu-seMWJQQ~MpOrdJeuPdG7ecWVcZF0c8qLv4Wn7BLASUbt9JbNCHLHQvpR-929uP0hLdT7UutgbZb4d0-4ViRX3nGI4hv1-oVY4MYbNWahLSHe0Yroj7X6rc4ZQ91LlCoq4zrhLw__&Key-Pair-Id=KX12RGNKWPA4Y","voice_length":1.8,"sent_uid":"679LYgKtZM3viy9JF0s5Mg0ivAxR","is_stream":true,"msgtype":"info"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 울"}},"msg":" 울","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"산"}},"msg":"산","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 남"}},"msg":" 남","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"구"}},"msg":"구","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"에서"}},"msg":"에서","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 김"}},"msg":" 김","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"철"}},"msg":"철","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"수"}},"msg":"수","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"님의"}},"msg":"님의","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 특별"}},"msg":" 특별","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"한"}},"msg":"한","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 기억"}},"msg":" 기억","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"이"}},"msg":"이","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 있는"}},"msg":" 있는","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"지"}},"msg":"지","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 여"}},"msg":" 여","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"쭤"}},"msg":"쭤","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"봐"}},"msg":"봐","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"도"}},"msg":"도","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" 될"}},"msg":" 될","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"까요"}},"msg":"까요","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":"?"}},"msg":"?","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","event":"on_chat_model_stream","data":{"chunk":{"content":" "}},"msg":" ","is_stream":true,"msgtype":"stream"}

{"status":"voice_ready","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":" 울산 남구에서 김철수님의 특별한 기억이 있는지 여쭤봐도 될까요?","voice_url":"https://voice.chldo.com/room_uid_voice/11VPKp3F0yPX/dyqA5dxldJWXLQ1gkqdYrYATiOd0.mp3?Expires=1728231733&Signature=Hezn18JDL733bP55osU-9wSjLK3rF737Bt5B8pJTj9~hBZJpqHpVCq4YMetUBVvqhWDvCVVNWBfFMbp~xSpqVtJEGLoM7F-03lOMF0VfD8KMdrMEnzYwAeOMQjvbeJllLqiZg0LIsSrhykJauTQrJjTsvkX8g7SvwJb7JA39tS6vAYst0JK8TY9KlYfuddw1b2YRsVdtw-xUuBQa28CPTxbwpumFOwHCNJEdN3tD9JdXDqxuXCedpLLXzn7x9ecnGfUiet84gLlf9MnKRC5ZwSx-H4dGTqGIPKIbqn7ypShhEbHJr40NmBmXee2mzHqWcidsqhJVF7-X5ueha0cCkw__&Key-Pair-Id=KX12RGNKWPA4Y","voice_length":4.776,"sent_uid":"dyqA5dxldJWXLQ1gkqdYrYATiOd0","is_stream":true,"msgtype":"info"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 그"}},"msg":" 그","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 기억"}},"msg":" 기억","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"을"}},"msg":"을","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 바"}},"msg":" 바","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"탕"}},"msg":"탕","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"으로"}},"msg":"으로","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 멋"}},"msg":" 멋","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"진"}},"msg":"진","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 그림"}},"msg":" 그림","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"을"}},"msg":"을","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 그"}},"msg":" 그","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"려"}},"msg":"려","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"드"}},"msg":"드","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"리"}},"msg":"리","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"려고"}},"msg":"려고","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" 합니다"}},"msg":" 합니다","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":"."}},"msg":".","is_stream":true,"msgtype":"stream"}

{"status":"stream","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","event":"on_chat_model_stream","data":{"chunk":{"content":" "}},"msg":" ","is_stream":true,"msgtype":"stream"}

{"status":"voice_ready","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":" 그 기억을 바탕으로 멋진 그림을 그려드리려고 합니다.","voice_url":"https://voice.chldo.com/room_uid_voice/11VPKp3F0yPX/94j9l68NZTJ7Fkim0NuV599uE2s1.mp3?Expires=1728231735&Signature=S5ifur-YiyyMuj4byE5S5QPPvWCPqHS-Y6sL9cWpzij8CrfH11QnUZxMb2PGKxXDKiuToBCDUx3uJH1fL7XrYIcPV8FAvK~UNuZknGiM~-fiRwBxflv34UdOkBps--wchQ9GkFD3PBCvxwKJ8n-gAvoI4yvTwe4X~ROuuLB2GzhnboyJNcJ5PSu5e--n3xOqXFylhJ-9LcE8s35sG5~Vxd4qYrrpbRa4PkDook2HhygN5KUZC6k7wNvvi2V0xijlbAXSkarwh8CS19XlGCtiuOLYfvSnsNahrLdcUjuxCsPADtlDbCFiTRLYqJtSHATdWzFojnTt1iZeMmIil~a4~g__&Key-Pair-Id=KX12RGNKWPA4Y","voice_length":3.528,"sent_uid":"94j9l68NZTJ7Fkim0NuV599uE2s1","is_stream":true,"msgtype":"info"}

{"status":"think","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"생각이 끝났습니다.","is_stream":true,"msgtype":"info"}

{"status":"END","connection_id":"fO-pZdLNoE0CFSw=","stream_uid":"07Q9cBtbsSwaw2Rm0XxDn7MV9","scene_number":0,"room_uid":"11VPKp3F0yPX","msg":"","cAt":"1728228128.395417","is_stream":true,"return_voice":1,"msgtype":"info"}
```

사용자가 구성한 Graph에 따라 각 작동 상태가 반환되며, 일반적으로 다음과 같이 작동합니다.

-   `on_chain_start` → `on_chat_model_start` : graph chain을 시작하며 chat model을 발동합니다
-   `on_chat_model_start` → `on_chat_model_stream` : chat model이 시작되며 스트림을 발생시킵니다
-   `on_chat_model_stream` → `on_chain_stream` : 발생된 스트림의 전체 값은 on_chain_stream으로 전환됩니다
-   `on_chain_stream` → `on_chain_end` : graph chain을 끝냅니다.

`on_chain_start`과 `on_chain_end` 사이에서 chat과 tool이 작동하며, 이에 대한 상태는 `on_chat_model_stream`과 `on_chain_stream`로 구분되어 제공됩니다.

스트림되는 정보를 수신할 때는 `on_chat_model_stream`을 사용하며, 완성된 정보만 수신할 때는 `on_chain_stream`에서 "data.chunk.messages" 또는 "data.chunk.model.messages"를 활용하세요.

## 파라미터의 종류

-   `stream`

-   `model`

-   `no_save`

-   `no_history`

## 메시지 변수 종류

-   `{{visitor_name}}`

-   `{{history}}`

## 에러의 종류

### 필수 파라미터가 없을 때

```json title="api_key가 없을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "api_key is required",
    "msgtype": "error"
}
```

```json title="msg가 없을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "msg is required",
    "msgtype": "error"
}
```

```json title="room_uid가 없을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "room_uid is required",
    "msgtype": "error"
}
```

```json title="user_id가 없을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "user_id is required",
    "msgtype": "error"
}
```

### `api_key` 관련

```json title="입력한 api_key가 존재하지 않을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "api_key is not exist",
    "msgtype": "error"
}
```

```json title="api_key가 사용할 수 없을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "api_key is not usable",
    "msgtype": "error"
}
```

### `return_voice` 관련

-   `return_voice`는 `0`(음성 반환하지 않음) 또는 `1`(음성 반환)이어야 합니다.
-   입력을 하지 않는 경우, chldo 환경설정에서 입력한 값을 기본으로 사용합니다.

```json title="return_voice의 값을 잘못 입력하였을 때" {4}
{
    "status": "connected",
    "connection_id": "dGXjCf1qIE0CJ5A=",
    "msg": "return_voice must be a number (0, 1, '0', or '1')",
    "msgtype": "error"
}
```

### 생각에 실패했을 때

-   `status:think` 이후 실제 LLM API에서 에러가 발생할 수 있습니다. 그 때는 `msgtype:error`와 에러 내용을 반환합니다.

```json {23}
{"status":"START","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<SOM>","cAt":"1724665498.315137","return_voice":0,"msgtype":"info"}

{"status":"received","connection_id":"dHB2vcYVIE0CI3Q=","msg":"메시지를 전달 받았습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억을 찾고 있습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억에 연결하였습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억을 재생 중입니다.","msgtype":"info"}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각을 시작합니다.","msgtype":"info"}

{"event":"on_chain_start","data":{},"run_id":"124ea5fe-5f6a-4207-bb98-fcb36b84a3c6","parent_ids":[],"tags":[]}

{"event":"on_chain_start","data":{},"run_id":"f8a705e4-c05c-4e53-a0f2-a262f10f32d8","parent_ids":["124ea5fe-5f6a-4207-bb98-fcb36b84a3c6"],"tags":["graph:step:12","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"f8a705e4-c05c-4e53-a0f2-a262f10f32d8","parent_ids":["124ea5fe-5f6a-4207-bb98-fcb36b84a3c6"],"tags":["graph:step:12","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"8b95da5f-2246-4820-9e19-1ac58841d216","parent_ids":["124ea5fe-5f6a-4207-bb98-fcb36b84a3c6"],"tags":["graph:step:13"]}

{"event":"on_chat_model_start","data":{},"run_id":"12d97563-69e3-44ac-a13c-dfb8eb13567d","parent_ids":["124ea5fe-5f6a-4207-bb98-fcb36b84a3c6","8b95da5f-2246-4820-9e19-1ac58841d216"],"tags":["seq:step:1","agent_llm"]}

{"status":"connected","connection_id":"dHB2vcYVIE0CI3Q=","msg":"Error code: 404 - {'status': 'failure', 'message': 'API_KEY does not exist.'}","msgtype":"error"}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각이 끝났습니다.","msgtype":"info"}

{"status":"END","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<EOM>","cAt":"1724665498.315137","return_voice":0,"msgtype":"info"}
```

### 크레딧이 100원 이상 없을 때

-   크레딧은 100원 이상 존재해야 사용이 가능합니다.

```json {21}
{"status":"START","connection_id":"dHJhYfclIE0CIgw=","msg":"<SOM>","cAt":"1724668002.040226","return_voice":0,"msgtype":"info"}

{"status":"received","connection_id":"dHJhYfclIE0CIgw=","msg":"메시지를 전달 받았습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHJhYfclIE0CIgw=","msg":"기억을 찾고 있습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHJhYfclIE0CIgw=","msg":"기억에 연결하였습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHJhYfclIE0CIgw=","msg":"기억을 재생 중입니다.","msgtype":"info"}

{"status":"think","connection_id":"dHJhYfclIE0CIgw=","msg":"생각을 시작합니다.","msgtype":"info"}

{"event":"on_chain_start","data":{},"run_id":"bf35bbbc-7383-4dc5-8978-12796d9caaa3","parent_ids":[],"tags":[]}

{"event":"on_chain_start","data":{},"run_id":"2b5343bd-c27f-4173-9015-393582490a16","parent_ids":["bf35bbbc-7383-4dc5-8978-12796d9caaa3"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"2b5343bd-c27f-4173-9015-393582490a16","parent_ids":["bf35bbbc-7383-4dc5-8978-12796d9caaa3"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"ca9d2707-f8d9-465a-a464-c02b9454f661","parent_ids":["bf35bbbc-7383-4dc5-8978-12796d9caaa3"],"tags":["graph:step:19"]}

{"status":"connected","connection_id":"dHJhYfclIE0CIgw=","msg":"현재 크레딧은 0 입니다. 크레딧이 100원 이상 필요합니다.","msgtype":"error"}

{"status":"think","connection_id":"dHJhYfclIE0CIgw=","msg":"생각이 끝났습니다.","msgtype":"info"}

{"status":"END","connection_id":"dHJhYfclIE0CIgw=","msg":"<EOM>","cAt":"1724668002.040226","return_voice":0,"msgtype":"info"}
```
