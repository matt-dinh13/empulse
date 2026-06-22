---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#2 - Mistake ticket creation"
domain: "Modules"
element_id: 1800605
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 REQ#2.2 - Modification of the current use cases for document mistake ticket creation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-33_Ticketing separation/REQ#2 - Mistake ticket creation

## 📝 Notes

The current UC 01.280 Record document mistake is changed - this will be only "GUI" UC. Core fce for ticket creation will be moved into UC {ADD}10.023 Create mistake ticket

New version of the UC 01.280:

System gets list of mistake tickets available by the processed document -> calls {ADD}ITicketManagement.GetMistakeTicketTypeList
System opens {MOD}Record mistake screen

## 🔗 Connections (1)

- → Generalization: [[REQ#2 - Mistake ticket creation]]

## 📊 Appears In (1 diagrams)

- Custom: REQ#2 Mistake ticket creation
