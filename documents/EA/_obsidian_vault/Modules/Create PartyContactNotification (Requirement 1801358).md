---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent"
domain: "Modules"
element_id: 1801358
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Create PartyContactNotification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Interface Provided/Kafka/v1.0/ContactEvent

## 📝 Notes

Input:

	
- eventType
	
- offerIdentifier -array
	
- channelType


System creates a notification in the structure prescribed by XSD using following logic:

ChannelDetails.propertyValue = User.Login (i.e. USER_ID) with propertyKey = SALES_AGENT_CODE.
ChannelDetails.propertyValue = User.Full name with propertyKey = SALES_AGENT_NAME.
ChannelDetails.propertyValue = Salesroom.Code with propertyKey = SALESROOM_CODE.
ChannelDetails.propertyValue = Salesroom.Name with propertyKey = SALESROOM_NAME.
BusinessProcess.businessProcessStatusCode = eventType from input.
Channel.channelType = channelType from input
For each offerIdentifier from the input: BusinessProcessDetails.propertyValue= offerIdentifier from the input with propertyKey=MARKETING_OFFER_ID

## 🔗 Connections (3)

- ← Dependency: [[BusinessProcessDetails (Class 1801356)]]
- ← Dependency: [[Channel (Class 1801352)]]
- ← Dependency: [[ChannelDetails (Class 1801350)]]

## 📊 Appears In (1 diagrams)

- Logical: ContactEvent
