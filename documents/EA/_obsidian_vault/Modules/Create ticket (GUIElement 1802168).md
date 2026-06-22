---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/Create communication"
domain: "Modules"
element_id: 1802168
diagrams: 2
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Create ticket

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Communication/Manage communication/User Interface/Create communication

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

## 📊 Appears In (2 diagrams)

- Custom: Create communication
- Custom: List of communication tickets panel v2
