---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication tickets"
domain: "Analysis Model"
element_id: 1674386
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Create ticket

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/List of communication tickets

## 📝 Notes

Button for creating a Ticket to the communication record
System redirect user to 10.020 Create ticket manually use case (TCK) with link parameters:
- CommunicationRecordCode = the processed Communication Record.External Id
{ADD CLM-1492}- contractCode = the Contract related to the Communication Record if a relation exists
- customerCode = client's CUID related to the Communication Event of the Communication Record{/ADD}
- userLanguage = user's current language
- userSalesroom = user's current salesroom

Button is available only if valid communication record identifier (it exists in COMMUNICATION_RECORD.CODE) was used as input parameter during startup of use case.

Localization code: TIC_Create

## 📊 Appears In (1 diagrams)

- Custom: List of communication tickets panel v2
