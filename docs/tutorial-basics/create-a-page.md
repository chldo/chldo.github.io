---
sidebar_position: 1
---

# chldo Websocket 시작하기

chldo Websocket은 버전으로 구분되며, 2024-07-01 기준으로 v3를 사용합니다.
아래 튜토리얼은 v3를 기준으로 작성되었습니다.

# chldo Websocket의 상태

websocket은 크게 4가지 상태로 구분됩니다.

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

```json
{
    "action": "status"
}
```

연결이 잘 되었다면 다음과 같은 메시지가 수신됩니다.

```json
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

# 메시지 보내기

메시지는 다음과 같이 보낼 수 있습니다

```json title="WSS 발송값"
{
    "action": "sendmsg",
    "org_id": "s8dfkjsdf",
    "room_uid": "51VPKp3F0yPX",
    "user_id": "s8dfkjsdf",
    "msg": "안녕 반가워요"
}
```

이에 대해 일반적으로 다음과 같은 정보가 수신됩니다.

v3는 langchain의 규약을 따릅니다.

```json title="WSS 수신값"
{"event":"on_chain_start","data":{},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}

{"event":"on_chain_start","data":{},"run_id":"9c6f5d4b-afee-41e7-a1d2-a9e2f51e27ab","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"9c6f5d4b-afee-41e7-a1d2-a9e2f51e27ab","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chat_model_start","data":{},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"안","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"녕","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"~","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 또","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 만나","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"서","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 반","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"워","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"!","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 계속","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 인","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"사","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"하","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"네","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":".","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 뭔","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 더","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 이야기","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"해","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"볼","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"래","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"?","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chain_start","data":{},"run_id":"e179a815-3b7b-43a0-b036-3dc4f8d4c535","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"e179a815-3b7b-43a0-b036-3dc4f8d4c535","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"c17c3fac-10e9-4067-af8a-5ce9a89a89d5","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:3"]}

{"event":"on_chain_end","data":{},"run_id":"c17c3fac-10e9-4067-af8a-5ce9a89a89d5","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:3"]}

{"event":"on_chain_stream","data":{"chunk":{"messages":[{"role":"assistant","content":"안녕~ 또 만나서 반가워! 계속 인사하네. 뭔가 더 이야기해볼래?","tool_calls":null}]}},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chain_end","data":{},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chain_stream","data":{"chunk":{"model":{"messages":[{"role":"assistant","content":"안녕~ 또 만나서 반가워! 계속 인사하네. 뭔가 더 이야기해볼래?","tool_calls":null}]}}},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}

{"event":"on_chain_end","data":{},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}
```

사용자가 구성한 Graph에 따라 각 작동 상태가 반환되며, 일반적으로 다음과 같이 작동합니다.

-   `on_chain_start` → `on_chat_model_start` : graph chain을 시작하며 chat model을 발동합니다
-   `on_chat_model_start` → `on_chat_model_stream` : chat model이 시작되며 스트림을 발생시킵니다
-   `on_chat_model_stream` → `on_chain_stream` : 발생된 스트림의 전체 값은 on_chain_stream으로 전환됩니다
-   `on_chain_stream` → `on_chain_end` : graph chain을 끝냅니다.

`on_chain_start`과 `on_chain_end` 사이에서 chat과 tool이 작동하며, 이에 대한 상태는 `on_chat_model_stream`과 `on_chain_stream`로 구분되어 제공됩니다.

스트림되는 정보를 수신할 때는 `on_chat_model_stream`을 사용하며, 완성된 정보만 수신할 때는 `on_chain_stream`에서 "data.chunk.messages" 또는 "data.chunk.model.messages"를 활용하세요.
