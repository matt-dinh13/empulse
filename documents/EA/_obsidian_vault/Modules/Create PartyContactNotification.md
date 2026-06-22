---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification"
domain: "Modules"
element_id: 1545336
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 Create PartyContactNotification

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Marketing Offer/Analytical Model/Marketing Offers Recalculation/Notifications/PartyContactNotification

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

## 🔗 Connections (4)

- ← Dependency: [[ChannelDetails]]
- ← Dependency: [[BusinessProcessDetails]]
- ← Dependency: [[Channel (Class 1545327)]]
- ← Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification
