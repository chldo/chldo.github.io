---
sidebar_position: 1
---

# chldo Websocket 시작하기

chldo Websocket은 버전으로 구분되며, 2024-07-01 기준으로 v3를 사용합니다.
아래 튜토리얼은 v3를 기준으로 작성되었습니다.

# chldo Websocket의 상태

websocket은 크게 4가지 상태(라우팅)로 구분됩니다.

1. **$connect** : 웹소켓 연결
2. **$disconnect** : 웹소켓 연결해제
3. **sendmsg** : 메시지 보내기 (action)
4. **status** : 상태 조회하기 (action)

# chldo Websocket 연결하기(connect)

## 새로운 room 연결하기

chldo Websocket의 connection은 새로운 대화방을 하나 개설하는 것과 같습니다.
신규 대화방 연결을 위해서 room_uid 하나를 생성해 주세요

-   신규 room_uid 생성하기 : https://info.api.chldo.com/v3/room/uid/

생성한 room_uid를 파라미터에 넣어 websocket을 접속합니다.

```
wss://ws.api.chldo.com/v3/?room_uid=0e06AFuOYA0w&user_uid=s8dfkjsdf
```

연결된 상태를 확인하고 싶다면 다음과 같이 메시지를 보내보세요

```json {2}
{
    "action": "status"
}
```

연결이 잘 되었다면 다음과 같은 메시지가 수신됩니다.

```json {2-4}
{
    "status": "connected",
    "connection_id": "dGQ-hd9UoE0CEFQ=",
    "msgtype": "info"
}
```

## 기존 room 연결하기

기존 room에 연결하고 싶다면 해당 room의 room_uid로 접속하세요

```
wss://ws.api.chldo.com/v3/?room_uid=0e06AFuOYA0w&user_uid=s8dfkjsdf
```

# chldo Websocket 연결 해제하기 (disconnect)

연결이 종료된 후 자동으로 $disconnect 라우팅이 실행됩니다. 서버 또는 클라이언트에 의해 연결이 종료될 수 있습니다.

10분 동안 sendmsg가 없거나 2시간 연속으로 이용한 경우에는 연결이 해제되어 Websocket 재접속이 필요합니다.

다음의 경우에 연결이 자동으로 해제됩니다.

-   클라이언트가 명시적으로 연결을 종료하는 경우
-   연결 유휴 시간 초과가 발생하는 경우 (기본적으로 10분)
-   최대 연결 지속 시간에 도달하는 경우 (최대 지속 시간 2시간)
-   비정상적인 사용 감지

# 메시지 보내기

연결된 웹소켓에 메시지를 보내는 것은 [다음 페이지](./sendmsg.md)를 참고하세요.
