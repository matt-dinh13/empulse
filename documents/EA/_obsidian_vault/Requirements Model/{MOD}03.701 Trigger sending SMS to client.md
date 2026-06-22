---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS"
domain: "Requirements Model"
element_id: 1869896
diagrams: 4
connections: 6
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}03.701 Trigger sending SMS to client

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-418 (CBL-2228) Changes for ID Payment SMS

## 📝 Notes

This technical use case describes the decision process of choosing a suitable message template, filling the template and sending a message to a client.

Use case is triggered by defined system events (see Constraints).

Use case calls 03.702 Compose and send notification message for composing and sending the message.

## 🔗 Connections (6)

- → Realisation: [[REQ#3 - Use template MSG_PAYMENT_PAIRED_DPD properly]]
- → Realisation: [[Create new SMS message definitions and put them to the DB]]
- → UseCase «include»: [[03.702 Compose and send notification message]]
- → Realisation: [[REQ#3 - Add new SMS template for future penalties]]
- → Dependency: [[SendSmsMessageWS (Interface 1218109)]]
- ← UseCase: [[System event]]

## 📊 Appears In (4 diagrams)

- Custom: IS-418 (CBL-2228) Changes for ID Payment SMS
- Custom: IS-452 (CBL-2283) CEL Reward enhancement
- Use Case: OVERVIEW - Installment Schedule
- Use Case: SMS notification
