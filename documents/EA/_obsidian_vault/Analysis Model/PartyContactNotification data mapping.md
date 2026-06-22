---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification"
domain: "Analysis Model"
element_id: 1878459
diagrams: 1
connections: 0
tags:
  - requirement
  - analysis-model
---

# 📋 PartyContactNotification data mapping

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Generated JMS messages/Application/PartyContactNotification

## 📝 Notes

This object describes a data mapping used for filling the respective ChannelDetails, BusinessProcess and BusinessProcessDetails structures when constructing the PartyContactNotification.

Input:
- Event
- User
- Salesroom (optional)
- Contract (optional)
- Product calculator data (optional)
- Evaluation result (optional)

Output:
- Filled PartyContactNotification message structures

Data mapping:
The data mapping is event specific - see the attached document for more detail. 
Only the attributes with not null value are actually incorporated in ChannelDetails and BusinessProcessDetails key-value structures (i.e. attributes with null value will be never sent).

## 📊 Appears In (1 diagrams)

- Logical: PartyContactNotification
