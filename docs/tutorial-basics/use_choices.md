---
sidebar_position: 8
---

# 선택지 제시 사용

LLM의 output을 출력하면서, 그 다음에 이어질 사용자의 입력을 예상하여 선택지를 제시하도록 합니다.

-   Optional parameter(선택적 파라미터)
-   default : 0 (선택지 제시 안함)
-   1 이상의 값은 선택지의 개수를 의미합니다.

# 사용 예시

```json title="사용자 입력값" {7}
{
    "action": "sendmsg",
    "room_uid": "51VPKp3F0yPX",
    "user_id": "s8dfkjsdf",
    "msg": "안녕하세요",
    "api_key": "d4a3653a4ba72d6e04a293",
    "use_choices": 3
}
```

```json title="WSS 수신값" {256-289}
{
  "status": "START",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "room_uid": "2NfuLQet8KLL",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "msg": "<SOM>",
  "is_stream": true,
  "cAt": "1731429465.799558",
  "return_voice": 1,
  "msgtype": "info"
}
{
  "status": "history",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "대화 기억을 찾고 있습니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "history",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "대화 기억을 재생하였습니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "memory",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "저장된 메모리를 찾고 있습니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "memory",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "저장된 메모리를 찾았습니다. 핫워드 수신으로 설정된 메모리는 총 0개 입니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "think",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "생각을 시작합니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "안"
    }
  },
  "msg": "안",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "녕하세요"
    }
  },
  "msg": "녕하세요",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "!"
    }
  },
  "msg": "!",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": " 어떻게"
    }
  },
  "msg": " 어떻게",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": " 도"
    }
  },
  "msg": " 도",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "와"
    }
  },
  "msg": "와",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "드"
    }
  },
  "msg": "드",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "릴"
    }
  },
  "msg": "릴",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "까요"
    }
  },
  "msg": "까요",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "stream",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "event": "on_chat_model_stream",
  "data": {
    "chunk": {
      "content": "?"
    }
  },
  "msg": "?",
  "is_stream": true,
  "msgtype": "stream"
}
{
  "status": "voice_ready",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "sent_uid": "erSK61x8TNSKvmgLUmrJhCC4CEpd",
  "msg": "안녕하세요! 어떻게 도와드릴까요?",
  "voice_url": "https://voice.chldo.com/room_uid_voice/2NfuLQet8KLL/erSK61x8TNSKvmgLUmrJhCC4CEpd.mp3?Expires=1732034267&Signature=OdhSDgOsOyfVh1PNsQSdx~84k83WKi6BWkeLk2BP-~TPP3UCXIZXCHY6mkyuYysUOlw67LW1oJuFsyyxIoNuHrG6x6kS3F1RzVEIZ3SIbT8sp9sNsmJZV57CYmd-cZHEtMG~VFKDDVUtck5Px38e9UTcqjuIX5K4WdJWzkfSPXhK-oYipywk5fHXVMowbCrFKdD-40dNQpHsSc7dqPP5VpjICJBfnSWb6eQpWlDeeV~o1EC~2i3uXOO63ux2wxENdTFeySSFsC6f65unK4bvS4~k4XIgj-j6PpElZkaCEADHsZiZKTg6hwfY6qxB7dqRfaFYv2~fCgSTtp3e-cW2SQ__&Key-Pair-Id=KX12RGNKWPA4Y",
  "voice_length": 2.4,
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "think",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "생각이 끝났습니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "status": "choices",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "선택지 구성을 시작합니다.",
  "is_stream": true,
  "msgtype": "info"
}
{
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "choices": [
    {
      "text": "오늘 날씨가 어떤가요?",
      "tone": "중립적"
    },
    {
      "text": "저에게 추천할 만한 책이 있나요?",
      "tone": "공손한"
    },
    {
      "text": "기분이 좋지 않은데, 기분 전환할 방법이 있을까요?",
      "tone": "긍정적"
    }
  ],
  "room_uid": "2NfuLQet8KLL",
  "is_stream": true,
  "status": "choices",
  "use_choices": 3,
  "msg": "선택지 구성을 종료합니다.",
  "msgtype": "info_choices"
}
{
  "status": "END",
  "connection_id": "BJGY5dgNIE0CJuQ=",
  "stream_uid": "wyyO3TLp7kn49XXlbN5Y0yDnW",
  "scene_number": 1,
  "room_uid": "2NfuLQet8KLL",
  "msg": "<EOM>",
  "cAt": "1731429465.799558",
  "is_stream": true,
  "return_voice": 1,
  "msgtype": "info"
}
```
