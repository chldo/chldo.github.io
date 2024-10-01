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

```json title="WSS 수신값" {23-69}
{"status":"START","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<SOM>","cAt":"1724664268.459471","return_voice":0,"msgtype":"info"}

{"status":"received","connection_id":"dHB2vcYVIE0CI3Q=","msg":"메시지를 전달 받았습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억을 찾고 있습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억에 연결하였습니다.","msgtype":"info"}

{"status":"memory","connection_id":"dHB2vcYVIE0CI3Q=","msg":"기억을 재생 중입니다.","msgtype":"info"}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각을 시작합니다.","msgtype":"info"}

{"event":"on_chain_start","data":{},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}

{"event":"on_chain_start","data":{},"run_id":"9c6f5d4b-afee-41e7-a1d2-a9e2f51e27ab","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"9c6f5d4b-afee-41e7-a1d2-a9e2f51e27ab","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:18","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chat_model_start","data":{},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"]}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"안","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"녕","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"~","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 또","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 만나","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"서","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 반","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"워","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"!","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 계속","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 인","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"사","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"하","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"네","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":".","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 뭔","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"가","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 더","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":" 이야기","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"해","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"볼","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"래","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chat_model_stream","data":{"chunk":{"content":"?","additional_kwargs":{},"response_metadata":{},"type":"AIMessageChunk","name":null,"id":null,"example":false,"tool_calls":[],"invalid_tool_calls":[],"usage_metadata":null,"tool_call_chunks":[]}},"run_id":"aa7ab05b-e1c9-4beb-9c9e-98c51bb918af","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:1","agent_llm"],"sent_uid":"rZ2s3WPPAYiJlwyF9PK1cOF0Q6"}

{"event":"on_chain_start","data":{},"run_id":"e179a815-3b7b-43a0-b036-3dc4f8d4c535","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_end","data":{},"run_id":"e179a815-3b7b-43a0-b036-3dc4f8d4c535","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:2","langsmith:hidden"]}

{"event":"on_chain_start","data":{},"run_id":"c17c3fac-10e9-4067-af8a-5ce9a89a89d5","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:3"]}

{"event":"on_chain_end","data":{},"run_id":"c17c3fac-10e9-4067-af8a-5ce9a89a89d5","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16","69430624-53d0-4269-b8f4-e919c36686fe"],"tags":["seq:step:3"]}

{"event":"on_chain_stream","data":{"chunk":{"messages":[{"role":"assistant","content":"안녕~ 또 만나서 반가워! 계속 인사하네. 뭔가 더 이야기해볼래?","tool_calls":null}]}},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chain_end","data":{},"run_id":"69430624-53d0-4269-b8f4-e919c36686fe","parent_ids":["674b2731-fda9-4660-b81e-39d2b2c76e16"],"tags":["graph:step:19"]}

{"event":"on_chain_stream","data":{"chunk":{"model":{"messages":[{"role":"assistant","content":"안녕~ 또 만나서 반가워! 계속 인사하네. 뭔가 더 이야기해볼래?","tool_calls":null}]}}},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}

{"event":"on_chain_end","data":{},"run_id":"674b2731-fda9-4660-b81e-39d2b2c76e16","parent_ids":[],"tags":[]}

{"status":"think","connection_id":"dHB2vcYVIE0CI3Q=","msg":"생각이 끝났습니다.","msgtype":"info"}

{"status":"END","connection_id":"dHB2vcYVIE0CI3Q=","msg":"<EOM>","cAt":"1724664268.459471","return_voice":0,"msgtype":"info"}
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
