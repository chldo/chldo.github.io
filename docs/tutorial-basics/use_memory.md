---
sidebar_position: 7
---

# 메모리 기능 사용

에이전트는 메모리(기억)을 가지도록 하여, 부가적인 기능들을 활용할 수 있습니다. 20240930 기준 메모리는 장기 기억만 사용할 수 있습니다. 장기 기억이란 모든 상황에서 항상 참고하는 기억을 말합니다.

메모리를 사용하기 위해서는 `핫워드 사용 여부`를 `true`로 설정해야 합니다. (chldo.com에서 파랑색으로 변경)

## 1. 인식 키워드 설정

대화나 문맥에서 인식할 수 있는 키워드를 설정합니다.

예를 들어, 인식 키워드는 다음과 같이 한 묶음으로 지정할 수 있습니다.

-   조말론
-   조 말론 런던
-   조 말론
-   Jo Malone

인식은 위에서부터 아래대로 순서대로 진행됩니다.

예를 들어, `조말론`이 인식되었다면, 이 묶음의 다른 인식 키워드는 무시되며, 해당 메모리가 즉시 사용됩니다.

인식된 메모리는 websocket 통신에서 즉시 수신자에게 전달됩니다.

이 때 수신되는 형태는 2가지 입니다.

### 수신의 형태 1-1. 사전형 메모리가 있는 경우

키-값 형태로 저장된 데이터가 있는 경우에는, 이 데이터가 웹소켓으로 전달됩니다. 주의하실 점은 단일 웹소켓 메시지의 크기는 제한되어 있습니다. 크기를 넘어가는 웹소켓 메시지는 발송에 실패할 수 있습니다.

-   WebSocket 프레임 크기 할당량 : 32KB 이하의 데이터
-   큰 메시지(또는 큰 프레임 크기)가 수신되면 코드 1009와 함께 연결이 해제됩니다.

### 수신의 형태 1-2. 사전형 메모리가 없는 경우

메모리의 고유 주소(uid)만 웹소켓으로 전달됩니다. 이 경우 Restful API를 통해 메모리를 조회할 수 있습니다.

Rest API를 이용해 텍스트형 메모리의 값을 조회할 수 있습니다.

-   Restful API Endpoint : `https://info.api.chldo.com/v4/memory/{uid}`

## 2. 메모리 사용

메모리를 사용하기 위해서는 `핫워드 사용 여부`를 `true`로 설정해야 합니다. (chldo.com에서 파랑색으로 변경)

## 핫워드 감지 기능

메시지를 주고받는 도중 특정 단어나 구문이 감지되었을 때, 실시간으로 이를 감지하여 웹소켓으로 정보를 보낼 수 있습니다. 이 기능은 `도구 - 메모리` 에서 `핫워드 수신 여부`를 참으로 설정한 것에 대해 적용됩니다. 대화 도중 해당 키워드가 등장하면 알림을 생성하는 방식으로 동작합니다.

### 핫워드 목록 예시

핫워드는 다음과 같이 구성된 데이터로 관리됩니다:

```json
[
    {
        "uid": "bb55cce87f86d532a",  # 메모리의 고유 ID
        "v": ["34", "34번가"]  # 인식키워드의 다중 표현
    },
    {
        "uid": "d3609c2758b7aa6b9",
        "v": ["도손", "Do Son"]
    }
]
```

위 예시에서, `"v"` 배열 안에는 여러 변형된 표현을 포함할 수 있으며, 그 중 하나라도 메시지에서 감지되면 해당 핫워드로 인식됩니다. 앞 쪽의 핫워드가 한 번 인식되고 나면 해당 uid는 다시 인식되지 않습니다. 예를 들어, 34가 한 번 인식되고 나면 34번가는 인식을 시도하지 않습니다. 그리고 한 번 인식된 uid는 이번 대화에서 다시 인식되지 않습니다. (한 번 발송했던 메모리의 uid는 다시 발송하지 않습니다)

### 핫워드 감지 동작 방식

핫워드가 감지되면, 해당 `uid`가 웹소켓을 통해 알림으로 전송됩니다. 이미 감지된 핫워드는 다시 감지되지 않도록 처리됩니다. 이 기능을 통해 사용자가 입력한 메시지 내에서 지정된 핫워드가 실시간으로 감지될 때 즉시 웹소켓으로 감지 알림을 받을 수 있습니다.

핫워드가 감지되면 다음과 같은 메시지가 수신됩니다:

```json title="핫워드 감지 알림"
{
    "status": "hotword_detected",
    "connection_id": "dHB2vcYVIE0CI3Q=",
    "msg": "핫워드 '도손'이 감지되었습니다.",
    "hotword": "도손",
    "uid": "d3609c2758b7aa6b9",
    "msgtype": "info"
}
```

### 감지 후 추가 동작

핫워드가 감지된 후, 해당 핫워드와 관련된 추가 정보를 조회할 수 있습니다. 이를 통해 핫워드와 연결된 메모나 다른 관련 데이터를 웹소켓으로 전송할 수 있습니다.

```json title="메모 데이터 전송"
{
    "status": "memory_dict",
    "connection_id": "dHB2vcYVIE0CI3Q=",
    "msg": "{\"memo\":\"도손에 대한 추가 설명\"}",
    "hotword": "도손",
    "uid": "d3609c2758b7aa6b9",
    "msgtype": "hotword"
}
```

### 핫워드 감지 예시 흐름

1. 메시지가 입력됩니다.
2. 서버는 메시지를 처리하면서 미리 정의된 핫워드 리스트와 비교합니다.
3. 메시지에서 핫워드가 감지되면, 핫워드 관련 알림이 웹소켓을 통해 전송됩니다.
4. 추가적인 메모 데이터가 있는 경우, 해당 데이터도 함께 웹소켓으로 전송됩니다.

### 핫워드 관련 고려 사항

-   한 번 감지된 핫워드는 다시 감지되지 않습니다.
-   핫워드의 여러 변형 중 하나만 감지되면, 나머지 변형들은 해당 대화 중 다시 감지되지 않습니다.
-   감지된 핫워드는 `uid`를 통해 고유하게 식별됩니다.
-   `msgtype: hotword`는 `msg`에 사전형 메모리에 입력된 전체 사전형을 JSON dumps로 반환합니다.
-   WebSocket 프레임 크기는 32KB로 제한되어 있습니다. 더 큰 메모리의 데이터를 조회하기 위해서는 Restful API를 uid를 통해 조회하세요.

---

### 메시지 수신 예시

메시지 수신 예시는 일반적인 흐름과 함께 핫워드 감지 시의 흐름도 반영할 수 있습니다.

```json title="WSS 수신값" {23-25}
{"status":"START","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<SOM>","cAt":"1724664268.459471","return_voice":0,"msgtype":"info"}

{"status":"received","connection_id":"dHB2vcYVIE0CI3Q=","msg":"메시지를 전달 받았습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억을 찾고 있습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억에 연결하였습니다.","msgtype":"info"}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각을 시작합니다.","msgtype":"info"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 딥"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 딥","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"티"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"티","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"크"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"크","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"의"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"의","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" **"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" **","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"도"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"도","is_stream":true,"msgtype":"stream"}

{"status":"hotword_detected","connection_id":"e-z2odI2oE0CF9Q=","msg":"핫워드 \"도손\"가 감지되었습니다.","hotword":"도손","uid":"d3609c2758b7aa6b9","msgtype":"info"}

{"status":"memory_dict","connection_id":"e-z2odI2oE0CF9Q=","msg":"[{\"v\": \"\\ubca0\\uc2a4\\ud2b8 \\uc140\\ub7ec \\ub3c4 \\uc190\\uc740 \\ubca0\\ud2b8\\ub0a8 \\ud558\\ub871\\ubca0\\uc774\\uc758 \\uacbd\\uacc4\\ub85c \\uc0c1\\uc0c1\\uc758 \\ub098\\ub798\\ub97c \\ud3bc\\uce58\\uac8c \\ud569\\ub2c8\\ub2e4. \\ub3c4 \\uc190\\uc758 \\ud574\\uc548 \\ub9c8\\uc744\\uc5d0\\uc11c \\uc5ec\\ub984 \\ubc14\\ub2f7\\ubc14\\ub78c\\uc5d0 \\uc2e4\\ub824\\uc628 \\ud29c\\ubca0\\ub8e8\\uc988\\uc758 \\uaf43 \\ud5a5\\uae30\\uc5d0 \\ub300\\ud55c \\uae30\\uc5b5\\uc785\\ub2c8\\ub2e4.\", \"k\": \"desc\"}, {\"v\": \"\\ud29c\\ubca0\\ub85c\\uc988, \\uc790\\uc2a4\\ubbfc, \\uc624\\ub80c\\uc9c0 \\ube14\\ub85c\\uc378, \\ub9c8\\ub9b0\\uc5b4\\ucf54\\ub4dc\", \"k\": \"note\"}, {\"v\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeK0oicAfdpnnVOhN2uvrRzmuOZZ-Gx_h3DQ&s\", \"k\": \"image_url\"}]","hotword":"도손","uid":"d3609c2758b7aa6b9","msgtype":"hotword"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"손"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"손","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"**"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"**","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"이"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"이","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 정말"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 정말","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 잘"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 잘","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 어"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 어","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"울"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"울","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":"릴"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":"릴","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 것"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 것","is_stream":true,"msgtype":"stream"}

{"status":"stream","event":"on_chat_model_stream","data":{"chunk":{"content":" 같습니다"}},"connection_id":"e-z2odI2oE0CF9Q=","msg":" 같습니다","is_stream":true,"msgtype":"stream"}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각이 끝났습니다.","msgtype":"info"}

{"status":"END","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<EOM>","cAt":"1724664268.459471","return_voice":0,"msgtype":"info"}
```

---

핫워드 감지 기능은 메시지 스트림 중 실시간으로 핫워드를 확인하고 추가 정보를 제공하는 용도로 활용할 수 있습니다.

이 기능을 통해 사용자는 대화 내 특정 키워드의 감지와 관련된 알림 및 동작을 구현할 수 있습니다.
